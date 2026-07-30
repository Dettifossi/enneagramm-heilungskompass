// Admin-Endpoint: aktuellen Brevo-Newsletter-Entwurf anzeigen und per Klick versenden
// GET  /api/newsletter?adminSecret=...           -> neuesten Entwurf zurückgeben
// POST /api/newsletter { adminSecret, campaignId } -> Entwurf jetzt versenden

const BREVO_API = "https://api.brevo.com/v3";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const adminSecret = req.method === "GET"
    ? req.query.adminSecret
    : (typeof req.body === "string" ? JSON.parse(req.body) : req.body)?.adminSecret;

  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Nicht autorisiert" });
  }

  if (req.method === "GET") {
    try {
      const r = await fetch(
        `${BREVO_API}/emailCampaigns?status=draft&sort=desc&limit=1`,
        { headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json" } }
      );
      const data = await r.json();
      const campaign = data.campaigns?.[0];
      if (!campaign) return res.status(404).json({ error: "Kein Entwurf gefunden" });
      return res.status(200).json({
        id: campaign.id,
        subject: campaign.subject,
        name: campaign.name,
        htmlContent: campaign.htmlContent,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === "POST") {
    const { campaignId } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    if (!campaignId) return res.status(400).json({ error: "campaignId fehlt" });

    try {
      const r = await fetch(`${BREVO_API}/emailCampaigns/${campaignId}/sendNow`, {
        method: "POST",
        headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json" },
      });
      if (!r.ok && r.status !== 204) {
        const text = await r.text();
        return res.status(r.status).json({ error: text });
      }
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).send("Method Not Allowed");
}
