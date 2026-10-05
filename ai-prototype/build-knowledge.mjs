// Baut die Wissensbasis einmalig zu einer statischen JSON-Datei zusammen,
// damit die Cloudflare-Worker-Function sie ohne Dateisystemzugriff einbetten kann.
// Aufruf: node ai-prototype/build-knowledge.mjs
// Erzeugt: ai-prototype/worker/knowledge.json
// Bei neuen/geänderten Subtyp-Inhalten einfach erneut ausführen + Worker neu deployen.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllKnowledge } from "./knowledge-loader.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const chunks = loadAllKnowledge(rootDir);

// Länderzuordnungen ergänzen (falls bereits per extract-laender.mjs generiert)
const laenderPath = path.join(__dirname, "knowledge-laender.json");
if (fs.existsSync(laenderPath)) {
  const laenderChunks = JSON.parse(fs.readFileSync(laenderPath, "utf-8"));
  chunks.push(...laenderChunks);
}

// Weitere Wissensquellen ergänzen (falls bereits per extract-more.mjs generiert):
// Tierlexikon, Situationskompass, Beziehungspaarungen, Verhalten, Differenzierungen
const morePath = path.join(__dirname, "knowledge-more.json");
if (fs.existsSync(morePath)) {
  const moreChunks = JSON.parse(fs.readFileSync(morePath, "utf-8"));
  chunks.push(...moreChunks);
}

// Register ergänzen (falls bereits per extract-register.mjs generiert)
const registerPath = path.join(__dirname, "knowledge-register.json");
if (fs.existsSync(registerPath)) {
  const registerChunks = JSON.parse(fs.readFileSync(registerPath, "utf-8"));
  chunks.push(...registerChunks);
}

// Porträts ergänzen (berühmte Persönlichkeiten + Kriminalpsychologie-Fälle,
// falls bereits per extract-portraits.mjs generiert)
const portraitsPath = path.join(__dirname, "knowledge-portraits.json");
if (fs.existsSync(portraitsPath)) {
  const portraitChunks = JSON.parse(fs.readFileSync(portraitsPath, "utf-8"));
  chunks.push(...portraitChunks);
}

// Psychosomatik-Register ergänzen (falls bereits per extract-psychosomatik.mjs generiert)
const psychosomatikPath = path.join(__dirname, "knowledge-psychosomatik.json");
if (fs.existsSync(psychosomatikPath)) {
  const psychosomatikChunks = JSON.parse(fs.readFileSync(psychosomatikPath, "utf-8"));
  chunks.push(...psychosomatikChunks);
}

// Sicherheitsdeckel gegen Cloudflare-Workers-Größenlimit (Free-Plan: 3 MiB für DE+EN
// zusammen). Einzelne Quellen wie Psychosomatik oder die 27-Subtyp-Kernprofile liefern
// teils sehr lange Chunks (>15 KB) für eine RAG-Suche, die pro Treffer ohnehin nur einen
// begrenzten Ausschnitt braucht. Chunks über CHUNK_CAP werden hart gekappt (siehe Vorfall
// 31.08.2026 – Worker-Deploy scheiterte an der 3-MiB-Grenze).
const CHUNK_CAP = 5000;
for (const c of chunks) {
  if (c.text && c.text.length > CHUNK_CAP) {
    c.text = c.text.slice(0, CHUNK_CAP) + " …";
  }
}

const outDir = path.join(__dirname, "worker");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "knowledge.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));

console.log(`${chunks.length} Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
