// Cloudflare-Worker-Function: der Online-Zwilling von ai-prototype/server.mjs
// Nimmt Fragen entgegen, sucht relevante Wissens-Chunks, ruft Gemini auf,
// gibt Antwort + Quellen zurück. Der API-Key steckt NIE im Code, sondern
// als Worker-Secret (siehe Deploy-Anleitung).

import knowledgeDE from "./knowledge.json";
import knowledgeEN from "./knowledge-en.json";
import { retrieveRelevantChunks } from "../retrieval.mjs";

const SYSTEM_INSTRUCTION_DE = `Du bist "Der Wegweiser", der Wissens-Assistent des Enneagramm-Heilungskompass von Detlef Rathmer.
Beantworte Fragen AUSSCHLIESSLICH auf Basis der bereitgestellten Quellentexte.
Wenn die Antwort nicht in den Quellen steht, sag das ehrlich, statt zu spekulieren oder zu erfinden.
Antworte auf Deutsch, freundlich und klar. Nenne am Ende in Klammern die verwendeten Subtyp-Codes als Quellenangabe.`;

const SYSTEM_INSTRUCTION_EN = `You are "The Guide", the knowledge assistant of the Enneagram Healing Compass by Detlef Rathmer.
Answer questions EXCLUSIVELY based on the provided source texts.
If the answer is not contained in the sources, say so honestly instead of speculating or inventing information.
Answer in English, friendly and clear. At the end, cite the subtype codes used as sources in parentheses.`;

const EMBED_MODEL = "gemini-embedding-001";
const EMBED_DIMENSIONS = 768;

// Lookup-Tabellen code -> vollständiger Chunk, einmalig pro Worker-Instanz gebaut
// (nicht pro Request), damit Vectorize-Treffer (die nur gekürzten Text als
// Metadaten tragen) wieder den vollen Originaltext bekommen.
const knowledgeByCodeDE = new Map(knowledgeDE.map((c) => [c.code, c]));
const knowledgeByCodeEN = new Map(knowledgeEN.map((c) => [c.code, c]));

async function embedQuery(question, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${EMBED_MODEL}:embedContent?key=${apiKey}`;
  const body = {
    model: `models/${EMBED_MODEL}`,
    content: { parts: [{ text: question }] },
    outputDimensionality: EMBED_DIMENSIONS,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Embedding-Fehler ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.embedding.values;
}

// Hybrid-Retrieval: semantische Vektorsuche (versteht Bedeutung, nicht nur
// Wort-Overlap) ergänzt um die bisherige Keyword-Suche (sehr präzise bei
// exakten Codes/Namen, z.B. "SE1", Länder-Sammelfragen). Fällt bei jedem
// Fehler (Vectorize/Embedding nicht erreichbar) sauber auf reine
// Keyword-Suche zurück, statt die Anfrage scheitern zu lassen.
async function hybridRetrieve(question, { knowledge, knowledgeByCode, vectorizeIndex, apiKey }) {
  const keywordHits = retrieveRelevantChunks(question, knowledge, 5);

  if (!vectorizeIndex) return keywordHits;

  try {
    const qVector = await embedQuery(question, apiKey);
    const result = await vectorizeIndex.query(qVector, { topK: 6, returnMetadata: "all" });
    const vectorHits = (result.matches || [])
      .map((m) => knowledgeByCode.get(m.metadata?.code))
      .filter(Boolean);

    const merged = [];
    const seen = new Set();
    for (const c of vectorHits) {
      if (!seen.has(c.code)) {
        merged.push(c);
        seen.add(c.code);
      }
    }
    for (const c of keywordHits) {
      if (!seen.has(c.code)) {
        merged.push(c);
        seen.add(c.code);
      }
    }
    return merged.slice(0, 10);
  } catch (err) {
    console.error("Vectorize-Suche fehlgeschlagen, nutze Keyword-Fallback:", err.message);
    return keywordHits;
  }
}

// Enzyklopädie-Chunks tragen keinen Subtyp-Code (kommen nicht aus
// knowledge.json, sondern direkt aus den Vectorize-Metadaten, da die
// Rohdaten/knowledge-Datei absichtlich nie ins Repo/den Worker-Bundle
// gelangen - siehe .gitignore). Nur Deutsch, kein knowledgeByCode-Join nötig.
async function retrieveEncyclopedia(question, { vectorizeIndex, apiKey }) {
  if (!vectorizeIndex) return [];
  try {
    const qVector = await embedQuery(question, apiKey);
    const result = await vectorizeIndex.query(qVector, { topK: 4, returnMetadata: "all" });
    return (result.matches || [])
      .filter((m) => m.metadata?.text)
      .map((m) => ({ source: m.metadata.source, text: m.metadata.text }));
  } catch (err) {
    console.error("Enzyklopädie-Suche fehlgeschlagen:", err.message);
    return [];
  }
}

async function askGemini(question, chunks, encyclopediaChunks, apiKey, lang) {
  const context = [
    ...chunks.map((c) => `--- Quelle: ${c.code} (${c.source}) ---\n${c.text}`),
    ...encyclopediaChunks.map((c) => `--- Quelle: Profiling-Enzyklopädie (${c.source}) ---\n${c.text}`),
  ].join("\n\n");

  const systemInstruction = lang === "en" ? SYSTEM_INSTRUCTION_EN : SYSTEM_INSTRUCTION_DE;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`;
  const body = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [{ role: "user", parts: [{ text: `Kontext:\n${context}\n\nFrage: ${question}` }] }],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Gemini API Fehler ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "(keine Antwort erhalten)";
}

// ---------------------------------------------------------------------------
// Premium-Bezahlschranke ("Wegweiser Premium", Bücher-Wissensbasis).
//
// Baustein-Status: Grundgerüst steht (KV-Namespaces, Magic-Link-Auth,
// Stripe-Webhook mit manueller Signaturprüfung, Premium-Retrieval), aber
// bewusst NICHT scharf geschaltet. Ohne die drei Secrets STRIPE_SECRET_KEY,
// STRIPE_WEBHOOK_SECRET und RESEND_API_KEY antworten /auth/* und
// /stripe/webhook mit einem klaren 501-Hinweis statt stillem Fehlschlag,
// und die Bücher-Vectorize-Abfrage bleibt so oder so ungenutzt, bis das
// Frontend Checkout/Login tatsächlich anbietet. Kernregel (siehe Projekt-
// Notizen): Bücher-Freischaltung und Bezahlschranke gehen NUR gemeinsam live.
// ---------------------------------------------------------------------------

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 Tage
const MAGIC_LINK_TTL_SECONDS = 60 * 30; // 30 Minuten - genug Puffer bei Rückfragen/Support
const STRIPE_WEBHOOK_TOLERANCE_SECONDS = 60 * 5; // Replay-Schutz

function randomToken() {
  // 256 Bit Zufall, URL-sicher kodiert - ausreichend für Magic-Link- und
  // Session-Tokens, kein Bedarf an einer weiteren Abhängigkeit.
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSha256Hex(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Manuelle Stripe-Webhook-Signaturprüfung (statt stripe-npm-SDK, das in
// Workers zusätzliche Kompatibilitätsarbeit bräuchte) - Verfahren exakt
// nach Stripe-Doku: https://stripe.com/docs/webhooks/signatures
async function verifyStripeSignature(rawBody, sigHeader, secret) {
  if (!sigHeader) return false;
  const parts = Object.fromEntries(
    sigHeader.split(",").map((kv) => {
      const [k, v] = kv.split("=");
      return [k, v];
    })
  );
  const timestamp = parts.t;
  const v1 = parts.v1;
  if (!timestamp || !v1) return false;

  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (age > STRIPE_WEBHOOK_TOLERANCE_SECONDS) return false;

  const expected = await hmacSha256Hex(secret, `${timestamp}.${rawBody}`);
  return timingSafeEqual(expected, v1);
}

// Nur der 6-stellige Code, bewusst OHNE Klick-Link: Der Link öffnet auf iOS
// immer Safari, auch wenn die App als "Zum Home-Bildschirm hinzugefügt"-
// Icon genutzt wird - iOS behandelt das als komplett getrennten
// Speicherbereich (eigenes localStorage/eigene Cookies), sodass ein per
// Link erhaltener Login dort nie ankommt. Ein Link in der Mail würde also
// aktiv in die falsche Richtung führen. Der Code lässt sich dagegen direkt
// in der App eintippen, unabhängig davon, wo die E-Mail geöffnet wurde -
// Standardmuster, u.a. bei Banking-Apps.
async function sendMagicLinkEmail(email, code, apiKey) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Wegweiser <wegweiser@verlagshausrathmer.com>",
      to: [email],
      subject: "Dein Zugangscode zum Wegweiser Premium",
      html: `<p>Hallo,</p><p>hier ist dein Zugang zum Wegweiser Premium (gültig 30 Minuten):</p><p style="font-size:1.8rem;font-weight:700;letter-spacing:0.15em;">${code}</p><p>Diesen Code direkt in der App eintippen (Wegweiser-Chat → „Anmelden"). Falls du diese E-Mail nicht angefordert hast, kannst du sie ignorieren.</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend-Fehler ${res.status}: ${await res.text()}`);
}

function randomSixDigitCode() {
  return String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, "0");
}

// Direkt nach dem Kauf der Jahreslizenz verschickt, NICHT erst bei der
// 14-Tage-Erinnerung (siehe sendExpiryReminderEmail weiter unten) - der
// Kunde soll von Anfang an wissen, dass die Lizenz eine einmalige Zahlung
// ohne automatische Verlängerung ist, nicht erst kurz vor Ablauf.
async function sendYearlyPurchaseConfirmationEmail(email, expiresAt, apiKey) {
  const formattedDate = new Date(expiresAt).toLocaleDateString("de-DE", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Wegweiser <wegweiser@verlagshausrathmer.com>",
      to: [email],
      subject: "Deine Wegweiser-Premium-Jahreslizenz ist aktiv",
      html: `<p>Hallo,</p><p>vielen Dank für deinen Kauf! Deine Wegweiser-Premium-Jahreslizenz ist ab sofort aktiv und läuft bis zum <strong>${formattedDate}</strong>.</p><p><strong>Wichtig:</strong> Es handelt sich um eine einmalige Zahlung ohne automatische Verlängerung. Dein Zugang erlischt an diesem Datum automatisch, falls du nicht selbst rechtzeitig verlängerst. Du bekommst rund 14 Tage vorher noch einmal eine Erinnerung von uns.</p><p>Zum Einloggen im Wegweiser einfach im Chat-Fenster auf "Anmelden" klicken und deine E-Mail-Adresse eingeben - du bekommst dann einen Zugangslink per Mail.</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend-Fehler ${res.status}: ${await res.text()}`);
}

async function getSubscriberStatus(env, email) {
  const raw = await env.SUBSCRIBERS.get(email.toLowerCase());
  if (!raw) return null;
  return JSON.parse(raw);
}

async function setSubscriberStatus(env, email, data) {
  await env.SUBSCRIBERS.put(
    email.toLowerCase(),
    JSON.stringify({ ...data, updatedAt: new Date().toISOString() })
  );
}

// Ein Abonnent gilt als aktiv, wenn status "active" ist UND (falls gesetzt)
// das Ablaufdatum noch nicht erreicht ist. expiresAt existiert nur bei der
// einmalig bezahlten Jahreslizenz (kein Stripe-Abo im Hintergrund, das
// automatisch endet) - beim Monatsabo bleibt es unbenutzt, der Status wird
// stattdessen über die Stripe-Subscription-Webhooks aktuell gehalten.
function isSubscriberActive(sub) {
  if (!sub || sub.status !== "active") return false;
  if (sub.expiresAt && new Date(sub.expiresAt) < new Date()) return false;
  return true;
}

// Liest den Session-Token aus dem Header und prüft, ob der zugehörige
// Nutzer ein aktives Abo hat. Gibt null zurück, wenn nicht eingeloggt oder
// nicht (mehr) aktiv - der Aufrufer fällt dann einfach auf die kostenlose
// Basis-Wissensbasis zurück, kein Fehler.
async function resolvePremiumAccess(request, env) {
  const token = request.headers.get("X-Session-Token");
  if (!token) return null;
  const email = await env.AUTH_TOKENS.get(`session:${token}`);
  if (!email) return null;
  const sub = await getSubscriberStatus(env, email);
  if (!isSubscriberActive(sub)) return null;
  return { email };
}

async function handleAuthRequestLink(request, env) {
  if (!env.RESEND_API_KEY) {
    return jsonResponse(request, { error: "Login noch nicht aktiv." }, 501);
  }
  const { email } = await request.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return jsonResponse(request, { error: "Gültige E-Mail-Adresse erforderlich." }, 400);
  }
  const normalized = email.toLowerCase().trim();

  // Absichtlich nur an tatsächliche Abonnenten verschicken (verhindert
  // Missbrauch unseres Mailversands für beliebige Adressen), aber die
  // Antwort ist für beide Fälle identisch, um Adressen nicht zu verraten.
  const sub = await getSubscriberStatus(env, normalized);
  if (isSubscriberActive(sub)) {
    // Der Klick-Link (magic:<token>, per /auth/verify eingelöst) wird
    // weiterhin im Hintergrund erzeugt und bleibt als Route aktiv, aber
    // NICHT mehr in die E-Mail geschrieben - er würde Home-Bildschirm-
    // Icon-Nutzer aktiv in die falsche Richtung führen (öffnet immer
    // Safari, siehe Kommentar bei sendMagicLinkEmail). Nur der Code zählt.
    const token = randomToken();
    const code = randomSixDigitCode();
    await env.AUTH_TOKENS.put(`magic:${token}`, normalized, { expirationTtl: MAGIC_LINK_TTL_SECONDS });
    await env.AUTH_TOKENS.put(`code:${normalized}:${code}`, "1", { expirationTtl: MAGIC_LINK_TTL_SECONDS });
    await sendMagicLinkEmail(normalized, code, env.RESEND_API_KEY);
  }

  return jsonResponse(request, {
    message: "Falls diese E-Mail-Adresse ein aktives Wegweiser-Premium-Abo hat, ist gerade ein Zugangscode unterwegs.",
  });
}

async function issueSessionToken(env, email) {
  const sessionToken = randomToken();
  await env.AUTH_TOKENS.put(`session:${sessionToken}`, email, { expirationTtl: SESSION_TTL_SECONDS });
  return sessionToken;
}

// Bestätigt den 6-stelligen Code aus der Login-Mail - funktioniert unabhängig
// davon, in welchem Browser-/App-Kontext die Mail geöffnet wurde (siehe
// Kommentar bei sendMagicLinkEmail), anders als der Klick-Link.
async function handleAuthVerifyCode(request, env) {
  const { email, code } = await request.json();
  if (!email || !code) return jsonResponse(request, { error: "E-Mail und Code erforderlich." }, 400);
  const normalized = email.toLowerCase().trim();
  const key = `code:${normalized}:${code.trim()}`;
  const exists = await env.AUTH_TOKENS.get(key);
  if (!exists) return jsonResponse(request, { error: "Code ungültig oder abgelaufen." }, 401);

  await env.AUTH_TOKENS.delete(key);
  const sessionToken = await issueSessionToken(env, normalized);
  return jsonResponse(request, { sessionToken, email: normalized });
}

async function handleAuthVerify(request, env) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  if (!token) return jsonResponse(request, { error: "Token fehlt." }, 400);

  const email = await env.AUTH_TOKENS.get(`magic:${token}`);
  if (!email) return jsonResponse(request, { error: "Link ungültig oder abgelaufen." }, 401);

  await env.AUTH_TOKENS.delete(`magic:${token}`);
  const sessionToken = await issueSessionToken(env, email);

  return jsonResponse(request, { sessionToken, email });
}

// ---------------------------------------------------------------------------
// Bewertungen (ersetzt jsonbin.io, siehe wrangler.toml). Zwei KV-Keys unter
// dem REVIEWS-Binding: "wartend" und "freigegeben", je ein JSON-Array.
// Öffentlich: GET freigegeben, POST submit. Admin-geschützt (X-Admin-Code
// Header gegen den ADMIN_CODE-Secret): GET wartend, POST freigeben/loeschen.

async function reviewsGet(env, key) {
  const raw = await env.REVIEWS.get(key);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function reviewsPut(env, key, list) {
  await env.REVIEWS.put(key, JSON.stringify(list));
}

function requireAdmin(request, env) {
  const code = request.headers.get("X-Admin-Code");
  return !!env.ADMIN_CODE && code === env.ADMIN_CODE;
}

async function handleReviewsGetFreigegeben(request, env) {
  return jsonResponse(request, { reviews: await reviewsGet(env, "freigegeben") });
}

async function handleReviewsGetWartend(request, env) {
  if (!requireAdmin(request, env)) return jsonResponse(request, { error: "Nicht autorisiert." }, 401);
  return jsonResponse(request, { reviews: await reviewsGet(env, "wartend") });
}

async function handleReviewsSubmit(request, env) {
  const body = await request.json();
  const sterne = Number(body.sterne);
  if (!sterne || sterne < 1 || sterne > 5) {
    return jsonResponse(request, { error: "Feld 'sterne' fehlt oder ungültig." }, 400);
  }
  const review = {
    sterne,
    text: typeof body.text === "string" ? body.text.slice(0, 2000) : "",
    name: typeof body.name === "string" && body.name ? body.name.slice(0, 120) : null,
    land: typeof body.land === "string" ? body.land : null,
    countryCode: typeof body.countryCode === "string" ? body.countryCode : null,
    datum: new Date().toISOString(),
  };
  const wartend = await reviewsGet(env, "wartend");
  wartend.push(review);
  await reviewsPut(env, "wartend", wartend);
  return jsonResponse(request, { ok: true });
}

// Übersetzt Text via MyMemory (dieselbe kostenlose API wie zuvor im Client) -
// serverseitig, damit der Freigabe-Vorgang ein einziger Endpunkt bleibt.
async function translateText(text, langpair) {
  if (!text) return null;
  try {
    const r = await fetch(
      "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text.slice(0, 500)) +
      "&langpair=" + langpair
    );
    const d = await r.json();
    return (d.responseData && d.responseData.translatedText) || null;
  } catch {
    return null;
  }
}

async function handleReviewsFreigeben(request, env) {
  if (!requireAdmin(request, env)) return jsonResponse(request, { error: "Nicht autorisiert." }, 401);
  const { index } = await request.json();
  const wartend = await reviewsGet(env, "wartend");
  const review = wartend[index];
  if (!review) return jsonResponse(request, { error: "Bewertung nicht gefunden." }, 404);

  wartend.splice(index, 1);
  const isEnglishSource = !!review.text_en;
  const translated = await translateText(review.text || "", isEnglishSource ? "en|de" : "de|en");
  if (translated && isEnglishSource) review.text_de = translated;
  if (translated && !isEnglishSource) review.text_en = translated;

  const freigegeben = await reviewsGet(env, "freigegeben");
  freigegeben.push(review);

  await Promise.all([reviewsPut(env, "wartend", wartend), reviewsPut(env, "freigegeben", freigegeben)]);
  return jsonResponse(request, { ok: true });
}

async function handleReviewsLoeschen(request, env) {
  if (!requireAdmin(request, env)) return jsonResponse(request, { error: "Nicht autorisiert." }, 401);
  const { index, from } = await request.json();
  const key = from === "freigegeben" ? "freigegeben" : "wartend";
  const liste = await reviewsGet(env, key);
  if (index < 0 || index >= liste.length) return jsonResponse(request, { error: "Bewertung nicht gefunden." }, 404);
  liste.splice(index, 1);
  await reviewsPut(env, key, liste);
  return jsonResponse(request, { ok: true });
}

// Erzeugt einen Stripe-Kundenportal-Link für den eingeloggten Nutzer (Abo
// verwalten/kündigen/Rechnungen einsehen). Funktioniert unabhängig vom
// aktuellen Abo-Status (auch für gekündigte Konten, z.B. um erneut zu
// abonnieren) - anders als resolvePremiumAccess, das nur aktive Abos gelten
// lässt.
async function handleBillingPortal(request, env) {
  if (!env.STRIPE_SECRET_KEY) {
    return jsonResponse(request, { error: "Kundenportal noch nicht aktiv." }, 501);
  }
  const token = request.headers.get("X-Session-Token");
  if (!token) return jsonResponse(request, { error: "Nicht eingeloggt." }, 401);

  const email = await env.AUTH_TOKENS.get(`session:${token}`);
  if (!email) return jsonResponse(request, { error: "Sitzung abgelaufen." }, 401);

  const sub = await getSubscriberStatus(env, email);
  if (!sub || !sub.stripeCustomerId) {
    return jsonResponse(request, { error: "Kein Stripe-Kundenkonto gefunden." }, 404);
  }

  const res = await fetch("https://api.stripe.com/v1/billing_portal/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      customer: sub.stripeCustomerId,
      return_url: "https://kompass.verlagshausrathmer.com/",
    }),
  });
  if (!res.ok) {
    return jsonResponse(request, { error: `Stripe-Fehler ${res.status}: ${await res.text()}` }, 502);
  }
  const data = await res.json();
  return jsonResponse(request, { url: data.url });
}

async function handleStripeWebhook(request, env) {
  if (!env.STRIPE_WEBHOOK_SECRET) {
    return jsonResponse(request, { error: "Webhook noch nicht aktiv." }, 501);
  }
  const rawBody = await request.text();
  const sigHeader = request.headers.get("Stripe-Signature");
  const valid = await verifyStripeSignature(rawBody, sigHeader, env.STRIPE_WEBHOOK_SECRET);
  if (!valid) return jsonResponse(request, { error: "Ungültige Signatur." }, 400);

  const event = JSON.parse(rawBody);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const email = session.customer_details?.email || session.customer_email;
      if (email) {
        if (session.mode === "subscription") {
          await setSubscriberStatus(env, email, {
            status: "active",
            stripeCustomerId: session.customer,
            stripeSubscriptionId: session.subscription,
          });
        } else {
          // Einmalige Zahlung (z.B. Jahreslizenz) - kein Stripe-Abo im
          // Hintergrund, das automatisch endet. Stattdessen läuft der
          // Zugang nach 365 Tagen ab, siehe isSubscriberActive().
          const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();
          await setSubscriberStatus(env, email, {
            status: "active",
            stripeCustomerId: session.customer,
            expiresAt,
          });
          if (env.RESEND_API_KEY) {
            try {
              await sendYearlyPurchaseConfirmationEmail(email, expiresAt, env.RESEND_API_KEY);
            } catch (err) {
              console.error(`Kaufbestätigung fehlgeschlagen für ${email}:`, err.message);
            }
          }
        }
      }
      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const sub = event.data.object;
      const active = ["active", "trialing"].includes(sub.status);
      // Nur Status aktualisieren, falls wir die E-Mail bereits kennen
      // (kommt normalerweise über checkout.session.completed zuerst).
      const existing = await findSubscriberByCustomerId(env, sub.customer);
      if (existing) {
        // current_period_end wird für die Verlängerungs-Erinnerung gebraucht
        // (siehe runRenewalReminders) - bei jeder Verlängerung rückt dieser
        // Wert automatisch weiter, wodurch auch die Erinnerung für den
        // nächsten Zyklus wieder greift (siehe renewalReminderSentFor).
        const currentPeriodEnd = sub.current_period_end
          ? new Date(sub.current_period_end * 1000).toISOString()
          : existing.data.currentPeriodEnd;
        await setSubscriberStatus(env, existing.email, {
          ...existing.data,
          status: active ? "active" : "inactive",
          currentPeriodEnd,
        });
      }
      break;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object;
      const existing = await findSubscriberByCustomerId(env, sub.customer);
      if (existing) {
        await setSubscriberStatus(env, existing.email, { ...existing.data, status: "inactive" });
      }
      break;
    }
    default:
      break; // andere Event-Typen ignorieren wir bewusst
  }

  return jsonResponse(request, { received: true });
}

// KV kennt keine Sekundärindizes - da SUBSCRIBERS klein bleibt (ein Eintrag
// pro Abonnent, nicht pro Event), reicht ein einfacher list()-Scan für die
// seltenen Fälle, in denen ein Subscription-Update ohne vorheriges
// checkout.session.completed eintrifft.
async function findSubscriberByCustomerId(env, customerId) {
  const list = await env.SUBSCRIBERS.list();
  for (const key of list.keys) {
    const raw = await env.SUBSCRIBERS.get(key.name);
    const data = JSON.parse(raw);
    if (data.stripeCustomerId === customerId) return { email: key.name, data };
  }
  return null;
}

const ALLOWED_ORIGINS = new Set([
  "https://kompass.verlagshausrathmer.com",
  "http://localhost:4174",
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin");
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://kompass.verlagshausrathmer.com";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Session-Token, X-Admin-Code",
    Vary: "Origin",
  };
}

function jsonResponse(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(request), "Content-Type": "application/json" },
  });
}

async function handleAsk(request, env) {
  const { question, lang } = await request.json();
  if (!question || typeof question !== "string") {
    return jsonResponse(request, { error: "Feld 'question' fehlt." }, 400);
  }

  const isEN = lang === "en";
  const knowledge = isEN ? knowledgeEN : knowledgeDE;
  const knowledgeByCode = isEN ? knowledgeByCodeEN : knowledgeByCodeDE;
  const vectorizeIndex = isEN ? env.VECTORIZE_EN : env.VECTORIZE_DE;

  const relevant = await hybridRetrieve(question, {
    knowledge,
    knowledgeByCode,
    vectorizeIndex,
    apiKey: env.GEMINI_API_KEY,
  });

  // Enzyklopädie-Anbindung bewusst deaktiviert (nicht gelöscht): eigenes,
  // von der Bücher-Bezahlschranke unabhängiges Vorhaben, siehe Kommentar
  // bei retrieveEncyclopedia().
  const encyclopediaChunks = [];

  // Bücher-Wissensbasis: nur für eingeloggte, aktive Premium-Abonnenten.
  // Ohne gültige Premium-Session bleibt bookChunks immer leer - für alle
  // anderen Nutzer verhält sich der Wegweiser exakt wie zuvor.
  let bookChunks = [];
  const premium = await resolvePremiumAccess(request, env);
  if (premium && env.VECTORIZE_BUECHER) {
    bookChunks = await retrieveEncyclopedia(question, {
      vectorizeIndex: env.VECTORIZE_BUECHER,
      apiKey: env.GEMINI_API_KEY,
    });
  }

  if (relevant.length === 0 && encyclopediaChunks.length === 0 && bookChunks.length === 0) {
    const noMatch = isEN
      ? "I couldn't find matching content in the knowledge base for that."
      : "Dazu finde ich in der Wissensbasis keine passenden Inhalte.";
    return jsonResponse(request, { answer: noMatch, sources: [] });
  }

  const answer = await askGemini(
    question,
    relevant,
    [...encyclopediaChunks, ...bookChunks],
    env.GEMINI_API_KEY,
    lang
  );
  const sources = [
    ...new Set(relevant.map((c) => c.code)),
    ...encyclopediaChunks.map((c) => c.source),
    ...bookChunks.map((c) => c.source),
  ];

  return jsonResponse(request, { answer, sources });
}

// ---------------------------------------------------------------------------
// Ablauf-Erinnerung für die Jahreslizenz (einmalige Zahlung, kein Stripe-Abo,
// siehe isSubscriberActive/expiresAt). Läuft täglich als Cloudflare Cron
// Trigger (siehe wrangler.toml [triggers]), scannt SUBSCRIBERS und schickt
// 14 Tage vor Ablauf einmalig eine Erinnerungsmail. reminderSent verhindert
// mehrfachen Versand; wird bei einer Verlängerung automatisch zurückgesetzt,
// weil setSubscriberStatus() den Datensatz beim nächsten Checkout komplett
// neu schreibt (siehe handleStripeWebhook).
const REMINDER_WINDOW_DAYS = 14;

function daysUntil(isoDate) {
  const ms = new Date(isoDate).getTime() - Date.now();
  return ms / (24 * 60 * 60 * 1000);
}

async function sendExpiryReminderEmail(email, expiresAt, apiKey) {
  const formattedDate = new Date(expiresAt).toLocaleDateString("de-DE", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });
  const renewLink = "https://buy.stripe.com/6oU00j9sQ3Ca9hw5354gg3M";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Wegweiser <wegweiser@verlagshausrathmer.com>",
      to: [email],
      subject: "Dein Wegweiser-Premium-Jahreszugang läuft bald ab",
      html: `<p>Hallo,</p><p>dein Wegweiser-Premium-Jahreszugang läuft am <strong>${formattedDate}</strong> ab.</p><p>Die Jahreslizenz ist eine <strong>einmalige Zahlung ohne automatische Verlängerung</strong> – dein Zugang erlischt an diesem Datum automatisch, falls du nicht selbst rechtzeitig verlängerst.</p><p>Falls du weiter Zugriff auf die Bücher-Wissensbasis im Wegweiser haben möchtest, kannst du hier verlängern:</p><p><a href="${renewLink}">${renewLink}</a></p><p>Falls du nicht verlängern möchtest, musst du nichts tun.</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend-Fehler ${res.status}: ${await res.text()}`);
}

async function runExpiryReminders(env) {
  if (!env.RESEND_API_KEY) return;
  const list = await env.SUBSCRIBERS.list();
  for (const key of list.keys) {
    const raw = await env.SUBSCRIBERS.get(key.name);
    if (!raw) continue;
    const sub = JSON.parse(raw);
    if (!isSubscriberActive(sub) || !sub.expiresAt || sub.reminderSent) continue;
    const days = daysUntil(sub.expiresAt);
    if (days > 0 && days <= REMINDER_WINDOW_DAYS) {
      try {
        await sendExpiryReminderEmail(key.name, sub.expiresAt, env.RESEND_API_KEY);
        await setSubscriberStatus(env, key.name, { ...sub, reminderSent: true });
      } catch (err) {
        console.error(`Erinnerungsmail fehlgeschlagen für ${key.name}:`, err.message);
      }
    }
  }
}

// Verlängerungs-Erinnerung für echte Stripe-Abos (Monats- und Jahresabo,
// beide werden gleich behandelt). Anders als die Ablauf-Erinnerung oben
// (nur für eine nie genutzte Einmalzahlungs-Variante) betrifft das den
// tatsächlich aktiven Zahlungsweg: 14 Tage vor der automatischen
// Verlängerung eine faire Erinnerung, mit Hinweis auf die
// Kündigungsmöglichkeit. renewalReminderSentFor speichert, für welches
// currentPeriodEnd die letzte Erinnerung ging - bei der nächsten
// Verlängerung ändert sich currentPeriodEnd automatisch, wodurch die
// Erinnerung für den neuen Zyklus von selbst wieder greift.
async function sendRenewalReminderEmail(email, currentPeriodEnd, apiKey) {
  const formattedDate = new Date(currentPeriodEnd).toLocaleDateString("de-DE", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Wegweiser <wegweiser@verlagshausrathmer.com>",
      to: [email],
      subject: "Dein Wegweiser-Premium-Abo verlängert sich bald",
      html: `<p>Hallo,</p><p>dein Wegweiser-Premium-Abo verlängert sich am <strong>${formattedDate}</strong> automatisch um eine weitere Laufzeit.</p><p>Falls du weiterhin Zugriff auf die Bücher-Wissensbasis im Wegweiser haben möchtest, musst du nichts tun.</p><p>Falls du kündigen möchtest, kannst du das jederzeit vorher im Wegweiser-Chat-Fenster über "Abo verwalten" selbst erledigen.</p>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend-Fehler ${res.status}: ${await res.text()}`);
}

async function runRenewalReminders(env) {
  if (!env.RESEND_API_KEY) return;
  const list = await env.SUBSCRIBERS.list();
  for (const key of list.keys) {
    const raw = await env.SUBSCRIBERS.get(key.name);
    if (!raw) continue;
    const sub = JSON.parse(raw);
    if (!isSubscriberActive(sub) || sub.expiresAt || !sub.currentPeriodEnd) continue;
    if (sub.renewalReminderSentFor === sub.currentPeriodEnd) continue;
    const days = daysUntil(sub.currentPeriodEnd);
    if (days > 0 && days <= REMINDER_WINDOW_DAYS) {
      try {
        await sendRenewalReminderEmail(key.name, sub.currentPeriodEnd, env.RESEND_API_KEY);
        await setSubscriberStatus(env, key.name, { ...sub, renewalReminderSentFor: sub.currentPeriodEnd });
      } catch (err) {
        console.error(`Verlängerungs-Erinnerung fehlgeschlagen für ${key.name}:`, err.message);
      }
    }
  }
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runExpiryReminders(env));
    ctx.waitUntil(runRenewalReminders(env));
  },
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(request) });
    }

    const url = new URL(request.url);

    try {
      if (url.pathname === "/auth/request-link" && request.method === "POST") {
        return await handleAuthRequestLink(request, env);
      }
      if (url.pathname === "/auth/verify" && request.method === "GET") {
        return await handleAuthVerify(request, env);
      }
      if (url.pathname === "/auth/verify-code" && request.method === "POST") {
        return await handleAuthVerifyCode(request, env);
      }
      if (url.pathname === "/stripe/webhook" && request.method === "POST") {
        return await handleStripeWebhook(request, env);
      }
      if (url.pathname === "/billing/portal" && request.method === "GET") {
        return await handleBillingPortal(request, env);
      }
      if (url.pathname === "/reviews/freigegeben" && request.method === "GET") {
        return await handleReviewsGetFreigegeben(request, env);
      }
      if (url.pathname === "/reviews/wartend" && request.method === "GET") {
        return await handleReviewsGetWartend(request, env);
      }
      if (url.pathname === "/reviews/submit" && request.method === "POST") {
        return await handleReviewsSubmit(request, env);
      }
      if (url.pathname === "/reviews/freigeben" && request.method === "POST") {
        return await handleReviewsFreigeben(request, env);
      }
      if (url.pathname === "/reviews/loeschen" && request.method === "POST") {
        return await handleReviewsLoeschen(request, env);
      }

      if (request.method !== "POST") {
        return new Response("Method not allowed", { status: 405, headers: corsHeaders(request) });
      }
      return await handleAsk(request, env);
    } catch (err) {
      return jsonResponse(request, { error: err.message }, 500);
    }
  },
};
