// Stripe → Firebase: Automatisch Nutzer anlegen nach Zahlung
// Umgebungsvariablen (in Vercel setzen):
//   STRIPE_WEBHOOK_SECRET  – aus Stripe Dashboard / Webhooks
//   FIREBASE_SERVICE_ACCOUNT – Inhalt der service-account.json als ein-zeiliger String

import Stripe from "stripe";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// Firebase Admin initialisieren (nur einmal)
if (!getApps().length) {
  const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  initializeApp({ credential: cert(sa) });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    // Rohes Request-Body für Signaturprüfung nötig
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Nur abgeschlossene Zahlungen verarbeiten
  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;
  const email = session.customer_details?.email;
  if (!email) return res.status(200).json({ received: true, note: "no email" });

  const auth = getAuth();

  try {
    // Prüfen ob Nutzer schon existiert
    let user;
    try {
      user = await auth.getUserByEmail(email);
    } catch (e) {
      // Nutzer existiert noch nicht → neu anlegen
      user = await auth.createUser({ email, emailVerified: false });
    }

    // Passwort-setzen-Link per Email schicken
    const link = await auth.generatePasswordResetLink(email);

    // Email über Firebase senden (via nodemailer oder direkt)
    // → Wir nutzen hier den Firebase-eigenen Link und senden eine schöne Email
    await sendWelcomeMail(email, link);

    console.log(`✅ Zugang erstellt für: ${email}`);
    return res.status(200).json({ success: true, email });
  } catch (err) {
    console.error("Firebase error:", err);
    return res.status(500).json({ error: err.message });
  }
}

async function sendWelcomeMail(email, resetLink) {
  // Sendet eine Willkommens-Email mit dem Passwort-Link
  // Nutzt den kostenlosen Resend.com-Dienst (100 Mails/Tag gratis)
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Enneagramm-Heilungskompass <noreply@verlagshausrathmer.com>",
      to: email,
      subject: "Ihr Zugang zum Enneagramm-Heilungskompass",
      html: `
        <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:2rem;background:#faf8f4;">
          <h1 style="color:#8a6a1a;font-size:1.4rem;margin-bottom:1rem;">
            Herzlich willkommen im Enneagramm-Heilungskompass!
          </h1>
          <p style="color:#333;line-height:1.7;margin-bottom:1rem;">
            Vielen Dank für Ihren Kauf. Ihr persönlicher Zugang wurde eingerichtet.
          </p>
          <p style="color:#333;line-height:1.7;margin-bottom:1.5rem;">
            Bitte klicken Sie auf den Button, um Ihr Passwort zu setzen und die App freizuschalten:
          </p>
          <a href="${resetLink}"
             style="display:inline-block;background:#8a6a1a;color:#fff;padding:.85rem 2rem;border-radius:8px;text-decoration:none;font-size:1rem;font-weight:bold;">
            Passwort setzen &amp; App öffnen →
          </a>
          <p style="color:#888;font-size:.85rem;margin-top:2rem;line-height:1.6;">
            Nach dem Setzen Ihres Passworts können Sie sich jederzeit unter<br>
            <a href="https://www.verlagshausrathmer.com/enneagramm-kompass/" style="color:#8a6a1a;">
              www.verlagshausrathmer.com/enneagramm-kompass/
            </a> anmelden.<br><br>
            Der Link ist 24 Stunden gültig. Bei Fragen: detlefrathmer@t-online.de
          </p>
        </div>
      `,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Email error: ${err}`);
  }
}
