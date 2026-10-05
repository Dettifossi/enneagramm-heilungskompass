// Englisches Gegenstück zu extract-psychosomatik.mjs. Liest direkt aus
// en/bundle.js (kein app.js-Zwischenschritt bei EN, siehe CLAUDE.md).
//
// Aufruf: node ai-prototype/extract-en-psychosomatik.mjs
// Erzeugt: ai-prototype/knowledge-en-psychosomatik.json

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
  const bodyStart = startMatch.index + startMatch[0].length - 1;
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
  return new Function(`return (${text});`)();
}

function buildChunks(KRANKHEITEN, KATEGORIEN) {
  const kategorieLabel = Object.fromEntries((KATEGORIEN || []).map((k) => [k.key, k.label]));
  const chunks = [];
  for (const [slug, k] of Object.entries(KRANKHEITEN)) {
    const parts = [
      `${k.titel} (Psychosomatics Register${kategorieLabel[k.kategorie] ? " · " + kategorieLabel[k.kategorie] : ""})`,
      k.kurz,
      k.definition ? `Definition: ${k.definition}` : "",
      k.symptome && k.symptome.length ? `Typical symptoms: ${k.symptome.join("; ")}` : "",
      k.notfall ? `Emergency notice: ${k.notfall}` : "",
      k.disclaimer ? k.disclaimer : "",
      k.einleitung ? k.einleitung : "",
    ];
    if (Array.isArray(k.typen)) {
      for (const t of k.typen) {
        parts.push(`--- Type ${t.typ}: ${t.titel} ---`);
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

const enBundle = fs.readFileSync(path.join(rootDir, "en", "bundle.js"), "utf-8");
const kategorienText = extractObjectLiteral(enBundle, "PSYCHOSOMATIK_KATEGORIEN");
const krankheitenText = extractObjectLiteral(enBundle, "PSYCHOSOMATIK_KRANKHEITEN");

if (!krankheitenText) {
  console.warn("PSYCHOSOMATIK_KRANKHEITEN nicht in en/bundle.js gefunden – überspringe.");
  fs.writeFileSync(path.join(__dirname, "knowledge-en-psychosomatik.json"), "[]");
  process.exit(0);
}

const KATEGORIEN = kategorienText ? evalLiteral(kategorienText) : [];
const KRANKHEITEN = evalLiteral(krankheitenText);
const chunks = buildChunks(KRANKHEITEN, KATEGORIEN);

const outPath = path.join(__dirname, "knowledge-en-psychosomatik.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} EN-Psychosomatik-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
