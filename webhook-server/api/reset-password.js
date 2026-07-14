// Admin-Endpoint: Neues Passwort generieren + per E-Mail schicken
// Aufruf: POST /api/reset-password { email, adminSecret }

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { email, adminSecret } = typeof req.body === "string"
    ? JSON.parse(req.body) : req.body;

  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Nicht autorisiert" });
  }
  if (!email) return res.status(400).json({ error: "E-Mail fehlt" });

  const auth = getAuth();
  const password = generatePassword();

  try {
    let user;
    try {
      user = await auth.getUserByEmail(email);
      await auth.updateUser(user.uid, { password });
    } catch {
      user = await auth.createUser({ email, password, emailVerified: true });
    }

    await sendNewPasswordMail(email, user.displayName || "", password);
    return res.status(200).json({ success: true, email, password });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}

async function sendNewPasswordMail(email, name, password) {
  const anrede = name ? `Hallo ${name.split(" ")[0]},` : "Hallo,";
  const appUrl = "https://www.verlagshausrathmer.com/enneagramm-kompass/";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Enneagramm-Heilungskompass <noreply@verlagshausrathmer.com>",
      to: email,
      subject: "Ihr neues Passwort – Enneagramm-Heilungskompass",
      html: `
        <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:2rem;background:#faf8f4;">
          <h1 style="color:#8a6a1a;font-size:1.4rem;margin-bottom:1rem;">
            Neues Passwort für den Enneagramm-Heilungskompass
          </h1>
          <p style="color:#333;line-height:1.7;margin-bottom:1.5rem;">
            ${anrede}<br><br>
            hier sind Ihre neuen Zugangsdaten:
          </p>
          <div style="background:#fff;border:2px solid #c9a84c;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1.5rem;">
            <p style="margin:0 0 0.5rem;color:#555;font-size:.9rem;">Ihre Zugangsdaten:</p>
            <p style="margin:0 0 0.3rem;font-size:1rem;color:#333;"><strong>E-Mail:</strong> ${email}</p>
            <p style="margin:0;font-size:1.1rem;color:#8a6a1a;"><strong>Passwort:</strong> ${password}</p>
          </div>
          <a href="${appUrl}"
             style="display:inline-block;background:#8a6a1a;color:#fff;padding:.85rem 2rem;border-radius:8px;text-decoration:none;font-size:1rem;font-weight:bold;">
            Zur App →
          </a>
          <p style="color:#888;font-size:.85rem;margin-top:2rem;line-height:1.6;">
            In der App: „Freischalten" → Tab „E-Mail-Login" → E-Mail und Passwort eingeben.<br><br>
            Bei Fragen: detlefrathmer@t-online.de
          </p>
        </div>
      `,
    }),
  });
  if (!response.ok) throw new Error(await response.text());
}
