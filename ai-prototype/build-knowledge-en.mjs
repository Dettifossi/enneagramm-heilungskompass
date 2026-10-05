// Baut die ENGLISCHE Wissensbasis zusammen (Gegenstück zu build-knowledge.mjs).
// Aufruf: node ai-prototype/build-knowledge-en.mjs
// Erzeugt: ai-prototype/worker/knowledge-en.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  "knowledge-en-core.json", // 27 Subtyp-Kernprofile (SUBTYPES_EN + WOUNDS_EN)
  "knowledge-en-laender.json", // Länderzuordnungen
  "knowledge-en-portraits.json", // berühmte Personen + Kriminalfälle
  "knowledge-en-shared.json", // Beziehungspaarungen, Differenzierungen, Situationskompass, Register
  "knowledge-en-psychosomatik.json", // Psychosomatik-Register
];

let chunks = [];
for (const f of files) {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    chunks.push(...JSON.parse(fs.readFileSync(p, "utf-8")));
  } else {
    console.warn(`Fehlt (übersprungen): ${f}`);
  }
}

// Sicherheitsdeckel gegen Cloudflare-Workers-Größenlimit, siehe build-knowledge.mjs
// für die ausführliche Begründung (Vorfall 31.08.2026).
const CHUNK_CAP = 5000;
for (const c of chunks) {
  if (c.text && c.text.length > CHUNK_CAP) {
    c.text = c.text.slice(0, CHUNK_CAP) + " …";
  }
}

const outDir = path.join(__dirname, "worker");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "knowledge-en.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));

console.log(`${chunks.length} EN-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
