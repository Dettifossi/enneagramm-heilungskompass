// Extrahiert weitere Wissensquellen (Tierlexikon, Situationskompass,
// Beziehungspaarungen, Verhalten, Differenzierungen) zu zitierfähigen Chunks.
// Aufruf: node ai-prototype/extract-more.mjs
// Erzeugt: ai-prototype/knowledge-more.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "data");

const chunks = [];

// 1. Tierlexikon – ein Chunk pro Subtyp
const { TIERLEXIKON } = await import(path.join(dataDir, "tierlexikon.js"));
for (const [code, entry] of Object.entries(TIERLEXIKON)) {
  const text = [
    `Tier von ${code}: ${entry.tier} (${entry.lateinisch || ""})`,
    entry.intro,
    ...(Array.isArray(entry.fakten) ? entry.fakten.map((f) => (typeof f === "string" ? f : f.text || JSON.stringify(f))) : []),
  ]
    .filter(Boolean)
    .join("\n");
  chunks.push({ code, source: "tierlexikon", text });
}

// 2. Situationskompass – ein Chunk pro Subtyp (alle Situationen zusammengefasst)
const { SITUATIONSKOMPASS } = await import(path.join(dataDir, "situationskompass.js"));
const situationLabels = Object.fromEntries(SITUATIONSKOMPASS.situationen.map((s) => [s.id, s.label]));
for (const [code, situationen] of Object.entries(SITUATIONSKOMPASS.eintraege)) {
  const parts = [];
  for (const [sitId, inhalt] of Object.entries(situationen)) {
    const label = situationLabels[sitId] || sitId;
    parts.push(`--- ${label} ---`);
    if (inhalt.autopilot) parts.push(`Autopilot: ${inhalt.autopilot}`);
    if (inhalt.bewusstheit) parts.push(`Bewusstheit: ${inhalt.bewusstheit}`);
    if (inhalt.uebung) parts.push(`Übung: ${inhalt.uebung}`);
  }
  chunks.push({ code, source: "situationskompass", text: parts.join("\n") });
}

// 3. Beziehungspaarungen – ein Chunk pro Paarung
const { BEZIEHUNGS_PAARUNGEN } = await import(path.join(dataDir, "beziehungspaarungen.js"));
for (const p of BEZIEHUNGS_PAARUNGEN) {
  const text = [
    `Beziehung ${p.a} + ${p.b}: ${p.dynamik || ""}`,
    p.gefahr ? `Gefahr: ${p.gefahr}` : "",
    p.chance ? `Chance: ${p.chance}` : "",
    p.kurztipp ? `Kurztipp: ${p.kurztipp}` : "",
    p.vertiefung ? p.vertiefung : "",
  ]
    .filter(Boolean)
    .join("\n");
  chunks.push({ code: `BEZIEHUNG-${p.a}-${p.b}`, source: "beziehungspaarungen", text });
}

// 4. Verhalten – ein Chunk pro Thema (mit allen 9 Typen darin)
const { VERHALTEN } = await import(path.join(dataDir, "verhalten.js"));
for (const [themaKey, thema] of Object.entries(VERHALTEN)) {
  const parts = [thema.title, thema.intro].filter(Boolean);
  if (thema.typen) {
    for (const [typ, inhalt] of Object.entries(thema.typen)) {
      parts.push(`--- Typ ${typ} ---`);
      parts.push(typeof inhalt === "string" ? inhalt : JSON.stringify(inhalt));
    }
  }
  chunks.push({ code: `VERHALTEN-${themaKey}`, source: "verhalten", text: parts.join("\n") });
}

// 5. Differenzierungen – ein Chunk pro Typ-Paar
const { DIFFERENZIERUNGEN } = await import(path.join(dataDir, "differenzierungen.js"));
for (const [pair, entry] of Object.entries(DIFFERENZIERUNGEN)) {
  const text = typeof entry === "string" ? entry : entry.text || JSON.stringify(entry);
  chunks.push({ code: `DIFF-${pair}`, source: "differenzierungen", text });
}

const outPath = path.join(__dirname, "knowledge-more.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} zusätzliche Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
