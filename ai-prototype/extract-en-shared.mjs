// Extrahiert die EN-Felder aus den gemeinsam von DE+EN genutzten Datendateien
// (data/beziehungspaarungen.js, data/differenzierungen.js, data/situationskompass.js,
// data/register.js) - diese Dateien enthalten bereits englische Textfelder
// (dynamikEN, textEN, autopilotEN, registerEntriesEN, ...).
// Aufruf: node ai-prototype/extract-en-shared.mjs
// Erzeugt: ai-prototype/knowledge-en-shared.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const { BEZIEHUNGS_PAARUNGEN } = await import(path.join(rootDir, "data", "beziehungspaarungen.js"));
const { DIFFERENZIERUNGEN } = await import(path.join(rootDir, "data", "differenzierungen.js"));
const { SITUATIONSKOMPASS } = await import(path.join(rootDir, "data", "situationskompass.js"));
const { registerEntriesEN } = await import(path.join(rootDir, "data", "register.js"));

const chunks = [];

// Beziehungspaarungen (378 Kombinationen)
for (const p of BEZIEHUNGS_PAARUNGEN) {
  if (!p.dynamikEN) continue; // ohne EN-Felder überspringen
  chunks.push({
    code: `BEZIEHUNG-${p.a}-${p.b}`,
    source: "beziehungspaarungen-en",
    text: `Relationship pairing ${p.a} + ${p.b}. Dynamic: ${p.dynamikEN}. Risk: ${p.gefahrEN || ""}. Opportunity: ${p.chanceEN || ""}. Tip: ${p.kurztippEN || ""}. In depth: ${p.vertiefungEN || ""}. Tip for ${p.a}: ${p.tippAen || ""}. Tip for ${p.b}: ${p.tippBen || ""}`,
  });
  chunks.push({
    code: `BEZIEHUNG-${p.b}-${p.a}`,
    source: "beziehungspaarungen-en",
    text: `Relationship pairing ${p.b} + ${p.a}. Dynamic: ${p.dynamikEN}. Risk: ${p.gefahrEN || ""}. Opportunity: ${p.chanceEN || ""}. Tip: ${p.kurztippEN || ""}. In depth: ${p.vertiefungEN || ""}. Tip for ${p.b}: ${p.tippBen || ""}. Tip for ${p.a}: ${p.tippAen || ""}`,
  });
}

// Differenzierungen (36 Typ-Paare), Objekt keyed "1-2" -> {text, textEN, ...}
for (const [pairKey, d] of Object.entries(DIFFERENZIERUNGEN || {})) {
  if (!d.textEN) continue;
  chunks.push({
    code: `DIFF-EN-${pairKey}`,
    source: "differenzierungen-en",
    text: `Differentiation between Type ${pairKey.replace("-", " and Type ")}: ${d.textEN}`,
  });
}

// Situationskompass: { situationen: [...], eintraege: { SE1: { erschoepfung: {...}, ... } } }
const situLabelById = {};
for (const s of SITUATIONSKOMPASS.situationen || []) {
  situLabelById[s.id] = s.labelEN || s.label;
}
for (const [subtypeCode, situationen] of Object.entries(SITUATIONSKOMPASS.eintraege || {})) {
  for (const [situId, entry] of Object.entries(situationen || {})) {
    if (!entry || !entry.autopilotEN) continue;
    chunks.push({
      code: `SITUATION-EN-${situId}-${subtypeCode.toUpperCase()}`,
      source: "situationskompass-en",
      text: `Situation "${situLabelById[situId] || situId}" for subtype ${subtypeCode.toUpperCase()}. Autopilot: ${entry.autopilotEN} Awareness: ${entry.bewusstheitEN || ""} Exercise: ${entry.uebungEN || ""}`,
    });
  }
}

// Register (bereits eigene EN-Liste)
registerEntriesEN.forEach((entry, i) => {
  chunks.push({
    code: `REGISTER-EN-${i}`,
    source: "register-en",
    text: `The app has a page/term "${entry.term}" (reachable via route #${entry.route}). Description: ${entry.description}`,
  });
});

const outPath = path.join(__dirname, "knowledge-en-shared.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} EN-Shared-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
