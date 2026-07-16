// Stripe → Firebase: Automatisch Nutzer anlegen + Passwort generieren + E-Mail senden

import Stripe from "stripe";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", chunk => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

if (!getApps().length) {
  const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({ credential: cert(sa) });
}

function generatePassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let p1 = "", p2 = "";
  for (let i = 0; i < 4; i++) p1 += chars[Math.floor(Math.random() * chars.length)];
  for (let i = 0; i < 4; i++) p2 += chars[Math.floor(Math.random() * chars.length)];
  return `Kompass-${p1}-${p2}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];
  const rawBody = await getRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;
  const email = session.customer_details?.email;
  const name = session.customer_details?.name || "";
  if (!email) return res.status(200).json({ received: true, note: "no email" });

  const auth = getAuth();
  const password = generatePassword();

  try {
    try {
      const existing = await auth.getUserByEmail(email);
      await auth.updateUser(existing.uid, { password });
    } catch {
      await auth.createUser({ email, password, displayName: name, emailVerified: true });
    }

    await sendWelcomeMail(email, name, password);

    console.log(`✅ Zugang erstellt für: ${email}`);
    return res.status(200).json({ success: true, email });
  } catch (err) {
    console.error("Firebase error:", err);
    return res.status(500).json({ error: err.message });
  }
}

async function sendWelcomeMail(email, name, password) {
  const anrede = name ? `Hallo ${name.split(" ")[0]},` : "Hallo,";
  const appUrl = "https://www.verlagshausrathmer.com/enneagramm-kompass/";

  const html = `
<div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;padding:2rem 1.5rem;background:#faf8f4;">

  <h1 style="color:#8a6a1a;font-size:1.4rem;margin:0 0 1rem;">
    Herzlich willkommen im Enneagramm-Heilungskompass!
  </h1>

  <p style="color:#333;line-height:1.7;margin-bottom:1.5rem;">
    ${anrede}<br><br>
    vielen Dank für Ihren Kauf. Hier sind Ihre persönlichen Zugangsdaten:
  </p>

  <!-- Zugangsdaten -->
  <div style="background:#fff;border:2px solid #c9a84c;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1.5rem;">
    <p style="margin:0 0 0.5rem;color:#555;font-size:.9rem;">Ihre Zugangsdaten:</p>
    <p style="margin:0 0 0.4rem;font-size:1rem;color:#333;"><strong>E-Mail:</strong> ${email}</p>
    <p style="margin:0;font-size:1.15rem;color:#8a6a1a;"><strong>Passwort:</strong> ${password}</p>
  </div>

  <!-- App öffnen -->
  <a href="${appUrl}"
     style="display:inline-block;background:#8a6a1a;color:#fff;padding:.85rem 2rem;border-radius:8px;text-decoration:none;font-size:1rem;font-weight:bold;margin-bottom:2rem;">
    Jetzt zur App →
  </a>

  <!-- Login-Anleitung -->
  <h2 style="color:#8a6a1a;font-size:1.05rem;margin:1.5rem 0 .5rem;">So melden Sie sich an:</h2>
  <ol style="color:#444;line-height:1.8;padding-left:1.3rem;margin:0 0 2rem;">
    <li>App öffnen (Link oben)</li>
    <li>Auf <strong>„Freischalten"</strong> tippen</li>
    <li>Tab <strong>„E-Mail-Login"</strong> wählen</li>
    <li>Ihre E-Mail-Adresse und das Passwort oben eingeben</li>
    <li>Auf <strong>„Anmelden"</strong> tippen — fertig!</li>
  </ol>

  <!-- Homescreen iPhone -->
  <div style="background:#fff;border:1px solid #e0d8c8;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1rem;">
    <h2 style="color:#8a6a1a;font-size:1rem;margin:0 0 .6rem;">
      📱 App auf dem iPhone-Startbildschirm speichern
    </h2>
    <ol style="color:#444;line-height:1.9;padding-left:1.3rem;margin:0;font-size:.95rem;">
      <li>App in <strong>Safari</strong> öffnen (nicht Chrome!)</li>
      <li>Unten auf das <strong>Teilen-Symbol</strong> tippen (Quadrat mit Pfeil nach oben)</li>
      <li><strong>„Zum Home-Bildschirm"</strong> antippen</li>
      <li>Auf <strong>„Hinzufügen"</strong> tippen</li>
    </ol>
    <p style="color:#888;font-size:.85rem;margin:.8rem 0 0;">
      Die App erscheint dann wie eine normale App auf Ihrem Startbildschirm.
    </p>
  </div>

  <!-- Homescreen Android -->
  <div style="background:#fff;border:1px solid #e0d8c8;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:2rem;">
    <h2 style="color:#8a6a1a;font-size:1rem;margin:0 0 .6rem;">
      🤖 App auf Android speichern
    </h2>
    <ol style="color:#444;line-height:1.9;padding-left:1.3rem;margin:0;font-size:.95rem;">
      <li>App in <strong>Chrome</strong> öffnen</li>
      <li>Oben rechts auf die <strong>drei Punkte</strong> (⋮) tippen</li>
      <li><strong>„Zum Startbildschirm hinzufügen"</strong> antippen</li>
      <li>Auf <strong>„Hinzufügen"</strong> tippen</li>
    </ol>
    <p style="color:#888;font-size:.85rem;margin:.8rem 0 0;">
      Die App öffnet sich dann direkt vom Startbildschirm ohne Browser-Leiste.
    </p>
  </div>

  <p style="color:#888;font-size:.85rem;line-height:1.6;border-top:1px solid #e0d8c8;padding-top:1rem;margin:0;">
    Bei Fragen oder Problemen schreiben Sie uns gerne:<br>
    <a href="mailto:detlefrathmer@t-online.de" style="color:#8a6a1a;">detlefrathmer@t-online.de</a>
  </p>

</div>
`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Enneagramm-Heilungskompass <noreply@verlagshausrathmer.com>",
      to: email,
      subject: "Ihr Zugang zum Enneagramm-Heilungskompass – Zugangsdaten & Anleitung",
      html,
    }),
  });
  if (!response.ok) {
    throw new Error(`Email error: ${await response.text()}`);
  }
}
