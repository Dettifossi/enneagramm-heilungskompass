// Extrahiert LAENDER_REGIONEN aus en/bundle.js (dort bereits vollstaendig
// englischer Fließtext) zu Wissens-Chunks + 9 Typ-Sammel-Übersichten.
// Aufruf: node ai-prototype/extract-en-laender.mjs
// Erzeugt: ai-prototype/knowledge-en-laender.json

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(rootDir, "en", "bundle.js"), "utf-8");

const startMarker = "const LAENDER_REGIONEN = ";
const startIdx = src.indexOf(startMarker);
const bodyStart = startIdx + startMarker.length;
let depth = 1;
let i = bodyStart + 1;
while (depth > 0 && i < src.length) {
  if (src[i] === "[") depth++;
  else if (src[i] === "]") depth--;
  i++;
}
const literal = src.slice(bodyStart, i);
const context = { module: { exports: {} } };
vm.createContext(context);
const LAENDER_REGIONEN = vm.runInContext(`(${literal})`, context);

const chunks = [];
const byTyp = {};

for (const region of LAENDER_REGIONEN) {
  for (const land of region.laender) {
    chunks.push({
      code: `LAND-${land.iso}`,
      source: "laender-en",
      text: `Country assignment: ${land.name} (${region.region}) is assigned to Enneagram type ${land.typ}. ${land.text}${land.unsicher ? " (Note: assignment marked as uncertain.)" : ""}`,
    });
    (byTyp[land.typ] ||= []).push(land.name);
  }
}

for (const typ of Object.keys(byTyp).sort()) {
  chunks.push({
    code: `LAND-TYP${typ}`,
    source: "laender-en",
    text: `Countries assigned to Enneagram Type ${typ}: ${byTyp[typ].join(", ")}.`,
  });
}

const outPath = path.join(__dirname, "knowledge-en-laender.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} EN-Laender-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
