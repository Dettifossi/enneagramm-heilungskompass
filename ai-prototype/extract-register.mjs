// Extrahiert das Register (Begriffe/Themen/Routen der App) zu Wissens-Chunks,
// damit der Wegweiser "wo finde ich X"-Fragen beantworten und auf die passende
// Seite verweisen kann.
// Aufruf: node ai-prototype/extract-register.mjs
// Erzeugt: ai-prototype/knowledge-register.json

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const { registerEntries } = await import(path.join(rootDir, "data", "register.js"));

const chunks = registerEntries.map((entry, i) => ({
  code: `REGISTER-${i}`,
  source: "register",
  text: `In der App gibt es die Seite/den Begriff "${entry.term}" (erreichbar über die Route #${entry.route}). Beschreibung: ${entry.description}`,
}));

const outPath = path.join(__dirname, "knowledge-register.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} Register-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
