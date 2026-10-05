// Extrahiert das Psychosomatik-Register (PSYCHOSOMATIK_KRANKHEITEN) direkt aus
// app.js zu zitierfähigen Wissens-Chunks. Diese Inhalte liegen als eigenes
// Objektliteral im Code (nicht in data/*.js), daher analoges Verfahren wie bei
// extract-portraits.mjs: Objektkörper anhand Klammerbalance ausschneiden,
// als JS auswerten, dann in Klartext-Chunks umwandeln (ein Chunk pro
// Krankheitsbild, damit der Wegweiser bei "Herzinfarkt" & Co. treffsicher
// die passende Passage findet).
//
// Aufruf: node ai-prototype/extract-psychosomatik.mjs
// Erzeugt: ai-prototype/knowledge-psychosomatik.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function extractObjectLiteral(src, constName) {
  const declRegex = new RegExp(`const ${constName} = (\\{|\\[)`, "m");
  const startMatch = declRegex.exec(src);
  if (!startMatch) return null;
  const openChar = startMatch[1];
  const closeChar = openChar === "{" ? "}" : "]";
  const bodyStart = startMatch.index + startMatch[0].length - 1; // inkl. öffnendem Zeichen
  let depth = 0;
  let i = bodyStart;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === openChar) depth++;
    else if (ch === closeChar) {
      depth--;
      if (depth === 0) { i++; break; }
    }
  }
  return src.slice(bodyStart, i);
}

function evalLiteral(text) {
  // Reines Objekt-/Array-Literal aus String-, Zahl- und Booleanwerten – kein
  // ausführbarer Code, daher unproblematisch per new Function auszuwerten.
  return new Function(`return (${text});`)();
}

function buildChunks(KRANKHEITEN, KATEGORIEN, langLabel) {
  const kategorieLabel = Object.fromEntries((KATEGORIEN || []).map((k) => [k.key, k.label]));
  const chunks = [];
  for (const [slug, k] of Object.entries(KRANKHEITEN)) {
    const parts = [
      `${k.titel} (${langLabel === "en" ? "Psychosomatics Register" : "Psychosomatik-Register"}${kategorieLabel[k.kategorie] ? " · " + kategorieLabel[k.kategorie] : ""})`,
      k.kurz,
      k.definition ? `Definition: ${k.definition}` : "",
      k.symptome && k.symptome.length ? `Typische Symptome: ${k.symptome.join("; ")}` : "",
      k.notfall ? `Notfall-Hinweis: ${k.notfall}` : "",
      k.disclaimer ? k.disclaimer : "",
      k.einleitung ? k.einleitung : "",
    ];
    if (Array.isArray(k.typen)) {
      for (const t of k.typen) {
        parts.push(`--- Typ ${t.typ}: ${t.titel} ---`);
        if (Array.isArray(t.varianten)) {
          for (const v of t.varianten) {
            parts.push(`${v.code}: ${v.text}`);
          }
        }
      }
    }
    if (k.abschluss) parts.push(k.abschluss);
    const text = parts.filter(Boolean).join("\n");
    chunks.push({ code: `PSYCHOSOMATIK-${slug.toUpperCase()}`, source: "psychosomatik", text });
  }
  return chunks;
}

const appJs = fs.readFileSync(path.join(rootDir, "app.js"), "utf-8");
const kategorienText = extractObjectLiteral(appJs, "PSYCHOSOMATIK_KATEGORIEN");
const krankheitenText = extractObjectLiteral(appJs, "PSYCHOSOMATIK_KRANKHEITEN");

if (!krankheitenText) {
  console.warn("PSYCHOSOMATIK_KRANKHEITEN nicht in app.js gefunden – überspringe.");
  fs.writeFileSync(path.join(__dirname, "knowledge-psychosomatik.json"), "[]");
  process.exit(0);
}

const KATEGORIEN = kategorienText ? evalLiteral(kategorienText) : [];
const KRANKHEITEN = evalLiteral(krankheitenText);
const chunks = buildChunks(KRANKHEITEN, KATEGORIEN, "de");

const outPath = path.join(__dirname, "knowledge-psychosomatik.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} Psychosomatik-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
