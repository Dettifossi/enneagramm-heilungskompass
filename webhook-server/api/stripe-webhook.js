// Stripe → Firebase: Automatisch Nutzer anlegen + Passwort generieren + E-Mail senden

import Stripe from "stripe";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

if (!getApps().length) {
  const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({ credential: cert(sa) });
}

// Zufälliges sicheres Passwort generieren: z.B. "Kompass-7X3k-9mPq"
function generatePassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let part1 = "", part2 = "";
  for (let i = 0; i < 4; i++) part1 += chars[Math.floor(Math.random() * chars.length)];
  for (let i = 0; i < 4; i++) part2 += chars[Math.floor(Math.random() * chars.length)];
  return `Kompass-${part1}-${part2}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
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
    // Nutzer anlegen oder Passwort aktualisieren
    try {
      const existing = await auth.getUserByEmail(email);
      await auth.updateUser(existing.uid, { password });
    } catch (e) {
      await auth.createUser({ email, password, displayName: name, emailVerified: true });
    }

    await sendWelcomeMail(email, name, password);

    console.log(`✅ Zugang erstellt für: ${email} / ${password}`);
    return res.status(200).json({ success: true, email });
  } catch (err) {
    console.error("Firebase error:", err);
    return res.status(500).json({ error: err.message });
  }
}

async function sendWelcomeMail(email, name, password) {
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
      subject: "Ihr persönlicher Zugang zum Enneagramm-Heilungskompass",
      html: `
        <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:2rem;background:#faf8f4;">
          <h1 style="color:#8a6a1a;font-size:1.4rem;margin-bottom:1rem;">
            Herzlich willkommen im Enneagramm-Heilungskompass!
          </h1>
          <p style="color:#333;line-height:1.7;margin-bottom:1.5rem;">
            ${anrede}<br><br>
            vielen Dank für Ihren Kauf. Hier sind Ihre persönlichen Zugangsdaten:
          </p>
          <div style="background:#fff;border:2px solid #c9a84c;border-radius:10px;padding:1.2rem 1.5rem;margin-bottom:1.5rem;">
            <p style="margin:0 0 0.5rem;color:#555;font-size:.9rem;">Ihre Zugangsdaten:</p>
            <p style="margin:0 0 0.3rem;font-size:1rem;color:#333;"><strong>E-Mail:</strong> ${email}</p>
            <p style="margin:0;font-size:1.1rem;color:#8a6a1a;"><strong>Passwort:</strong> ${password}</p>
          </div>
          <a href="${appUrl}"
             style="display:inline-block;background:#8a6a1a;color:#fff;padding:.85rem 2rem;border-radius:8px;text-decoration:none;font-size:1rem;font-weight:bold;">
            Jetzt zur App →
          </a>
          <p style="color:#888;font-size:.85rem;margin-top:2rem;line-height:1.6;">
            In der App: „Freischalten" → Tab „E-Mail-Login" → E-Mail und Passwort eingeben.<br><br>
            Sie können Ihr Passwort jederzeit ändern. Bei Fragen: detlefrathmer@t-online.de
          </p>
        </div>
      `,
    }),
  });
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Email error: ${err}`);
  }
}
