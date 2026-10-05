// Zerlegt die extrahierten Fließtext-Dateien der Profiling-Enzyklopädie
// (ai-prototype/enzyklopaedie-private/raw-text/) in sinnvolle, in sich
// abgeschlossene Text-Abschnitte (Chunks) für die Wissensbasis.
//
// Chunking-Strategie: zunächst an Absätzen (Leerzeilen) trennen, dann
// benachbarte Absätze zu Chunks von ~350-550 Wörtern zusammenfassen, ohne
// mitten in einem Absatz zu schneiden. Das hält thematisch Zusammengehöriges
// beisammen (wichtig für die Qualität der späteren Suche).
//
// Ausgabe: ai-prototype/enzyklopaedie-private/chunks.json
//   [{ source: "Band 11/SE1 vs SO1", chunkIndex: 0, text: "..." }, ...]
//
// Aufruf: node ai-prototype/chunk-enzyklopaedie.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const IN_DIR = path.join(rootDir, "ai-prototype/enzyklopaedie-private/raw-text");
const OUT_PATH = path.join(rootDir, "ai-prototype/enzyklopaedie-private/chunks.json");

const TARGET_WORDS = 450;
const MAX_WORDS = 600;

function walkTxt(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walkTxt(full));
    else if (e.isFile() && e.name.endsWith(".txt")) files.push(full);
  }
  return files;
}

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function chunkText(text) {
  // pdftotext -raw erhält keine Absatz-Leerzeilen (alles ein Strom von
  // Zeilen mit einfachem \n) - deshalb wird auf Satzebene statt Absatzebene
  // getrennt. Zusätzlich gelten Zeilen, die wie Überschriften/Nummerierungen
  // aussehen (z.B. "1. Blickqualität"), als bevorzugte Bruchstellen.
  const normalized = text.replace(/\s+/g, " ").trim();

  // Sätze grob an Satzzeichen + Großbuchstabe/Ziffer trennen.
  const sentences = normalized
    .split(/(?<=[.!?:])\s+(?=[A-ZÄÖÜ0-9•-])/)
    .map((s) => s.trim())
    .filter(Boolean);

  const chunks = [];
  let current = [];
  let currentWords = 0;

  for (const sentence of sentences) {
    const sWords = wordCount(sentence);
    const isHeading = /^(\d+\.\s|[IVXLC]+\.\s|•)/.test(sentence);

    if (isHeading && currentWords >= TARGET_WORDS * 0.5 && current.length) {
      chunks.push(current.join(" "));
      current = [];
      currentWords = 0;
    }

    if (currentWords + sWords > MAX_WORDS && current.length) {
      chunks.push(current.join(" "));
      current = [sentence];
      currentWords = sWords;
    } else {
      current.push(sentence);
      currentWords += sWords;
      if (currentWords >= TARGET_WORDS) {
        chunks.push(current.join(" "));
        current = [];
        currentWords = 0;
      }
    }
  }
  if (current.length) chunks.push(current.join(" "));

  return chunks;
}

if (!fs.existsSync(IN_DIR)) {
  console.error(`Ordner mit extrahiertem Text nicht gefunden: ${IN_DIR}`);
  console.error("Zuerst ausführen: node ai-prototype/extract-enzyklopaedie.mjs");
  process.exit(1);
}

const files = walkTxt(IN_DIR);
console.log(`${files.length} Textdateien gefunden.\n`);

const allChunks = [];
for (const filePath of files) {
  const source = path.relative(IN_DIR, filePath).replace(/\.txt$/, "");
  const text = fs.readFileSync(filePath, "utf-8");
  const chunks = chunkText(text);
  chunks.forEach((chunkText, i) => {
    allChunks.push({ source, chunkIndex: i, text: chunkText });
  });
}

fs.writeFileSync(OUT_PATH, JSON.stringify(allChunks, null, 2), "utf-8");

const totalWords = allChunks.reduce((sum, c) => sum + wordCount(c.text), 0);
console.log(`${allChunks.length} Chunks erzeugt aus ${files.length} Dateien.`);
console.log(`Durchschnittlich ${Math.round(totalWords / allChunks.length)} Wörter pro Chunk.`);
console.log(`Geschrieben nach ${OUT_PATH}`);
