// Extrahiert Fließtext aus allen Kapitel-PDFs der Profiling-Enzyklopädie
// (lokal auf dem Rechner des Autors, NICHT im Repo) und speichert ihn als
// .txt-Dateien in ai-prototype/enzyklopaedie-private/raw-text/ (git-ignoriert).
//
// Nutzt `pdftotext -raw`, das saubereren Text liefert als der Standardmodus
// (behebt Ligatur-Probleme wie "Grundde zite" statt "Grunddefizite").
// Dateien mit sehr wenig extrahiertem Text (< 30 Wörter) werden übersprungen
// und geloggt – das sind meist reine Schaubild-/Diagramm-Seiten ohne echten
// Fließtext, die für die Wissensbasis nicht gebraucht werden.
//
// Aufruf: node ai-prototype/extract-enzyklopaedie.mjs

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const SOURCE_DIR =
  "/Users/detlefrathmer/Desktop/Bücher, Manuskripte & Hörbücher/Enzyklopädie/Fertiges Buch";
const OUT_DIR = path.join(rootDir, "ai-prototype/enzyklopaedie-private/raw-text");
const MIN_WORDS = 30;

function walkPdfs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pdfs = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      pdfs.push(...walkPdfs(full));
    } else if (e.isFile() && e.name.toLowerCase().endsWith(".pdf")) {
      pdfs.push(full);
    }
  }
  return pdfs;
}

function extractText(pdfPath) {
  return execFileSync("pdftotext", ["-raw", pdfPath, "-"], {
    encoding: "utf-8",
    maxBuffer: 20 * 1024 * 1024,
  });
}

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`Quellordner nicht gefunden: ${SOURCE_DIR}`);
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const pdfs = walkPdfs(SOURCE_DIR);
console.log(`${pdfs.length} PDFs gefunden.\n`);

let extracted = 0;
let skipped = 0;
const skippedFiles = [];

for (const pdfPath of pdfs) {
  const rel = path.relative(SOURCE_DIR, pdfPath).replace(/\.pdf$/i, "");
  let text;
  try {
    text = extractText(pdfPath);
  } catch (err) {
    console.warn(`  Fehler bei "${rel}": ${err.message?.slice(0, 150)}`);
    skipped++;
    skippedFiles.push(rel + " (Extraktionsfehler)");
    continue;
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount < MIN_WORDS) {
    skipped++;
    skippedFiles.push(`${rel} (${wordCount} Wörter, vermutlich Schaubild)`);
    continue;
  }

  const outPath = path.join(OUT_DIR, rel + ".txt");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, text, "utf-8");
  extracted++;
}

console.log(`\n${extracted} Dateien extrahiert nach ${OUT_DIR}`);
console.log(`${skipped} Dateien übersprungen (zu wenig Text / vermutlich Schaubilder):`);
for (const f of skippedFiles) console.log(`  - ${f}`);
