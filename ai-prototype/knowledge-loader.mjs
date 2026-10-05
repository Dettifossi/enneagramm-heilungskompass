// Lädt alle Wissens-Dateien (data/subtypes/, data/knowledge/) und zerlegt sie
// in kleine, zitierfähige Chunks mit Metadaten (Subtyp-Code, Quelle).
// Kein echtes JS-Parsing nötig — für den Prototyp reicht String-Extraktion.

import fs from "node:fs";
import path from "node:path";

const SUBTYPE_CODES = [
  "se1", "so1", "sx1", "se2", "so2", "sx2", "se3", "so3", "sx3",
  "se4", "so4", "sx4", "se5", "so5", "sx5", "se6", "so6", "sx6",
  "se7", "so7", "sx7", "se8", "so8", "sx8", "se9", "so9", "sx9",
];

function extractPlainText(jsSource) {
  const matches = jsSource.match(/"([^"\\]|\\.)*"/g) || [];
  return matches
    .map((s) => s.slice(1, -1))
    .filter((s) => s.length > 15 && !s.startsWith("assets/") && !s.includes(".jpeg") && !s.includes(".png"))
    .join("\n");
}

export function loadAllKnowledge(rootDir) {
  const chunks = [];

  for (const code of SUBTYPE_CODES) {
    const upperCode = code.toUpperCase();

    const subtypePath = path.join(rootDir, "data", "subtypes", `${code}.js`);
    if (fs.existsSync(subtypePath)) {
      const source = fs.readFileSync(subtypePath, "utf-8");
      chunks.push({
        code: upperCode,
        source: "subtypes",
        text: extractPlainText(source),
      });
    }

    const knowledgePath = path.join(rootDir, "data", "knowledge", `${code}.js`);
    if (fs.existsSync(knowledgePath)) {
      const source = fs.readFileSync(knowledgePath, "utf-8");
      chunks.push({
        code: upperCode,
        source: "knowledge",
        text: extractPlainText(source),
      });
    }
  }

  return chunks;
}

// --- Einfache Keyword-Retrieval (kein Embeddings-API-Call nötig für den Prototyp) ---
function tokenize(str) {
  return (str.toLowerCase().match(/[a-zäöüß]+/g) || []).filter((w) => w.length > 3);
}

export function retrieveRelevantChunks(question, chunks, topN = 5) {
  const qTokens = new Set(tokenize(question));
  const qUpper = question.toUpperCase();

  const scored = chunks.map((chunk) => {
    let score = 0;
    // Direkter Treffer, wenn der Subtyp-Code (z.B. "SE1") explizit in der Frage steht
    if (qUpper.includes(chunk.code)) score += 10;

    const chunkTokens = tokenize(chunk.text);
    const chunkTokenSet = new Set(chunkTokens);
    for (const t of qTokens) {
      if (chunkTokenSet.has(t)) score += 1;
    }
    return { ...chunk, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .filter((c) => c.score > 0);
}
