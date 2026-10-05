// Berechnet für alle Enzyklopädie-Chunks Embeddings via Gemini
// gemini-embedding-001 (768 Dimensionen, kostenlos) und schreibt sie als
// NDJSON, das per `wrangler vectorize insert` hochgeladen wird.
//
// Quelle: ai-prototype/enzyklopaedie-private/chunks.json (git-ignoriert)
// Aufruf: node ai-prototype/embed-enzyklopaedie.mjs
// Erzeugt: ai-prototype/enzyklopaedie-private/vectors-enzyklopaedie.ndjson (git-ignoriert)
// Danach hochladen (NICHT committen):
//   cd ai-prototype/worker
//   npx wrangler vectorize insert kompass-enzyklopaedie-de --file=../enzyklopaedie-private/vectors-enzyklopaedie.ndjson

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const envPath = path.join(rootDir, ".env");
const envText = fs.readFileSync(envPath, "utf-8");
const apiKeyMatch = envText.match(/^GEMINI_API_KEY=(.+)$/m);
const API_KEY = apiKeyMatch?.[1]?.trim();
if (!API_KEY) {
  console.error("GEMINI_API_KEY fehlt in .env");
  process.exit(1);
}

const MODEL = "gemini-embedding-001";
const DIMENSIONS = 768;
const MAX_CHARS = 3500;
const DELAY_MS = 1200;

const PRIVATE_DIR = path.join(rootDir, "ai-prototype/enzyklopaedie-private");
const IN_PATH = path.join(PRIVATE_DIR, "chunks.json");
const OUT_PATH = path.join(PRIVATE_DIR, "vectors-enzyklopaedie.ndjson");

// Vectorize-IDs sind auf 64 Byte begrenzt - der volle Quellpfad (z.B.
// "Band 5/SO3 - Gepard__12") sprengt das leicht. Fortlaufender Index
// genügt als ID, der Quellpfad steht ohnehin in den Metadaten.
function safeId(source, index) {
  return `enz_${index}`;
}

async function embedOne(text) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:embedContent?key=${API_KEY}`;
  const body = {
    model: `models/${MODEL}`,
    content: { parts: [{ text: text.slice(0, MAX_CHARS) }] },
    outputDimensionality: DIMENSIONS,
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`${res.status}: ${errText.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.embedding.values;
}

async function embedWithRetry(text) {
  let attempt = 0;
  while (true) {
    try {
      return await embedOne(text);
    } catch (err) {
      attempt++;
      if (attempt > 4) throw err;
      const is429 = err.message?.includes("429");
      await new Promise((r) => setTimeout(r, is429 ? 15000 * attempt : 1500 * attempt));
    }
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

if (!fs.existsSync(IN_PATH)) {
  console.error(`Chunks nicht gefunden: ${IN_PATH}`);
  console.error("Zuerst ausführen: node ai-prototype/chunk-enzyklopaedie.mjs");
  process.exit(1);
}

const chunks = JSON.parse(fs.readFileSync(IN_PATH, "utf-8"));

// Fortsetzbar: bereits geschriebene IDs überspringen, falls ein vorheriger
// Lauf durch Rate-Limit/Abbruch unterbrochen wurde.
const alreadyDone = new Set();
if (fs.existsSync(OUT_PATH)) {
  const lines = fs.readFileSync(OUT_PATH, "utf-8").split("\n").filter(Boolean);
  for (const line of lines) {
    try {
      alreadyDone.add(JSON.parse(line).id);
    } catch {}
  }
}

const out = fs.createWriteStream(OUT_PATH, { flags: "a" });
let done = alreadyDone.size;
let failed = 0;

for (let i = 0; i < chunks.length; i++) {
  const chunk = chunks[i];
  const id = safeId(chunk.source, chunk.chunkIndex);
  if (alreadyDone.has(id)) continue;

  try {
    const values = await embedWithRetry(chunk.text);
    const record = {
      id,
      values,
      metadata: { source: chunk.source, text: chunk.text.slice(0, 900) },
    };
    out.write(JSON.stringify(record) + "\n");
    done++;
  } catch (err) {
    failed++;
    console.warn(`\n  Fehlgeschlagen: ${chunk.source}#${chunk.chunkIndex} - ${err.message?.slice(0, 150)}`);
  }
  process.stdout.write(`\rEnzyklopädie: ${done}/${chunks.length} (${failed} Fehler)`);
  await sleep(DELAY_MS);
}
out.end();
await new Promise((r) => out.on("finish", r));

console.log(`\nEnzyklopädie: ${done} Vektoren geschrieben nach ${OUT_PATH} (${failed} Fehler in diesem Lauf)`);
console.log("\nFertig. Jetzt hochladen (NICHT committen):");
console.log("  cd ai-prototype/worker");
console.log("  npx wrangler vectorize insert kompass-enzyklopaedie-de --file=../enzyklopaedie-private/vectors-enzyklopaedie.ndjson");
