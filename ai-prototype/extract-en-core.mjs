// Extrahiert SUBTYPES_EN und WOUNDS_EN direkt aus en/bundle.js (dort als
// plain consts, nicht exportiert) zu kombinierten Subtyp-Wissens-Chunks -
// das englische Gegenstück zu den DE-Dateien data/subtypes/*.js + data/knowledge/*.js.
// Aufruf: node ai-prototype/extract-en-core.mjs
// Erzeugt: ai-prototype/knowledge-en-core.json

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(rootDir, "en", "bundle.js"), "utf-8");

function extractConst(name) {
  const startMarker = `const ${name} = `;
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`${name} nicht gefunden`);
  const bodyStart = startIdx + startMarker.length;
  const openChar = src[bodyStart];
  const closeChar = openChar === "{" ? "}" : "]";
  let depth = 1;
  let i = bodyStart + 1;
  while (depth > 0 && i < src.length) {
    if (src[i] === openChar) depth++;
    else if (src[i] === closeChar) depth--;
    i++;
  }
  const literal = src.slice(bodyStart, i);
  const context = { module: { exports: {} } };
  vm.createContext(context);
  const value = vm.runInContext(`(${literal})`, context);
  return value;
}

const SUBTYPES_EN = extractConst("SUBTYPES_EN");
const WOUNDS_EN = extractConst("WOUNDS_EN");

const codes = Object.keys(SUBTYPES_EN);
const chunks = [];

function joinArr(v) {
  return Array.isArray(v) ? v.join(" ") : v;
}

for (const key of codes) {
  const code = key.toUpperCase(); // "se1" -> "SE1"
  const s = SUBTYPES_EN[key] || {};
  const w = WOUNDS_EN[key] || {};
  const parts = [];
  if (s.lifeTheme) parts.push(`Life theme: ${joinArr(s.lifeTheme)}`);
  if (s.unconsciousStrategy) parts.push(`Unconscious strategy: ${joinArr(s.unconsciousStrategy)}`);
  if (s.integrationPath) parts.push(`Path of integration: ${joinArr(s.integrationPath)}`);
  if (s.integratedState) parts.push(`Integrated state: ${joinArr(s.integratedState)}`);
  if (s.turningPoint) parts.push(`Turning point: ${joinArr(s.turningPoint)}`);
  if (s.integrationSentence) parts.push(`Integration sentence: ${s.integrationSentence}`);
  if (w.passion) parts.push(`Passion: ${w.passion}`);
  if (w.belief) parts.push(`Core belief: ${w.belief}`);
  if (w.wound) parts.push(`Wound: ${w.wound}`);
  if (w.compensation) parts.push(`Compensation strategy: ${w.compensation}`);
  if (w.sufferingCycle) parts.push(`Suffering cycle: ${w.sufferingCycle}`);
  if (w.healingDirection) parts.push(`Direction of healing: ${w.healingDirection}`);
  if (w.remedy) parts.push(`Remedies (for orientation only, not medical advice): ${w.remedy}`);

  chunks.push({
    code,
    source: "subtype-core-en",
    text: `Subtype ${code}. ${parts.join(" ")}`,
  });
}

const outPath = path.join(__dirname, "knowledge-en-core.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} EN-Subtyp-Kern-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
