// Proof-of-Concept: RAG-Testskript für den Enneagramm-Heilungskompass
// Liest ein paar Subtyp-Dateien als Wissensbasis, schickt Frage + Kontext an Gemini,
// prüft ob eine sinnvolle, quellenbasierte Antwort zurückkommt.
//
// Aufruf: node ai-prototype/test-rag.mjs "Deine Frage hier"

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// --- .env manuell einlesen (kein npm-Paket nötig) ---
function loadEnv(envPath) {
  const content = fs.readFileSync(envPath, "utf-8");
  const env = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    env[key] = value;
  }
  return env;
}

const env = loadEnv(path.join(rootDir, ".env"));
const API_KEY = env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Kein GEMINI_API_KEY in .env gefunden. Bitte zuerst eintragen.");
  process.exit(1);
}

// --- Testweise ein paar Subtyp-Dateien als Wissensbasis laden ---
const TEST_FILES = ["se1.js", "so4.js", "sx9.js"];
const subtypesDir = path.join(rootDir, "data", "subtypes");

function extractPlainText(jsSource) {
  // Sehr einfache Extraktion: alle String-Literale zwischen Anführungszeichen ziehen,
  // reicht für den Machbarkeits-Test völlig aus (kein echtes Parsing nötig).
  const matches = jsSource.match(/"([^"\\]|\\.)*"/g) || [];
  return matches
    .map((s) => s.slice(1, -1))
    .filter((s) => s.length > 20) // kurze Keys/Labels rausfiltern
    .join("\n");
}

const knowledgeChunks = TEST_FILES.map((fname) => {
  const filePath = path.join(subtypesDir, fname);
  const source = fs.readFileSync(filePath, "utf-8");
  const code = fname.replace(".js", "").toUpperCase();
  return { code, text: extractPlainText(source) };
});

const context = knowledgeChunks
  .map((c) => `--- Quelle: Subtyp ${c.code} ---\n${c.text}`)
  .join("\n\n");

const question = process.argv[2] || "Was ist die zentrale Herausforderung des Subtyps SE1?";

const systemInstruction = `Du bist ein Assistent für den Enneagramm-Heilungskompass.
Beantworte die Frage AUSSCHLIESSLICH auf Basis der bereitgestellten Quellentexte.
Wenn die Antwort nicht im Text steht, sage das ehrlich, statt zu spekulieren oder zu erfinden.
Gib am Ende in Klammern an, aus welcher Quelle (Subtyp-Code) deine Antwort stammt.`;

async function main() {
  console.log("Frage:", question);
  console.log("Wissensbasis (Test):", TEST_FILES.join(", "));
  console.log("---");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

  const body = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [
      {
        role: "user",
        parts: [{ text: `Kontext:\n${context}\n\nFrage: ${question}` }],
      },
    ],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Fehler von der Gemini-API:", res.status, errText);
    process.exit(1);
  }

  const data = await res.json();
  const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log("Antwort:\n", answer || "(keine Antwort erhalten — Rohdaten:)", answer ? "" : JSON.stringify(data, null, 2));
}

main().catch((err) => {
  console.error("Unerwarteter Fehler:", err.message);
  process.exit(1);
});
