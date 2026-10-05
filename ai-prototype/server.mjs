// Lokaler Prototyp-Server: simuliert die spätere Serverless-Function.
// POST /api/ask { question } -> { answer, sources }
//
// Start: node ai-prototype/server.mjs
// Dann Browser öffnen: ai-prototype/test.html

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAllKnowledge, retrieveRelevantChunks } from "./knowledge-loader.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function loadEnv(envPath) {
  const content = fs.readFileSync(envPath, "utf-8");
  const env = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    env[trimmed.slice(0, idx).trim()] = trimmed.slice(idx + 1).trim();
  }
  return env;
}

const env = loadEnv(path.join(rootDir, ".env"));
const API_KEY = env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Kein GEMINI_API_KEY in .env gefunden.");
  process.exit(1);
}

console.log("Lade Wissensbasis...");
const allChunks = loadAllKnowledge(rootDir);
console.log(`${allChunks.length} Wissens-Chunks geladen (${new Set(allChunks.map((c) => c.code)).size} Subtypen).`);

const SYSTEM_INSTRUCTION = `Du bist der Wissens-Assistent des Enneagramm-Heilungskompass von Detlef Rathmer.
Beantworte Fragen AUSSCHLIESSLICH auf Basis der bereitgestellten Quellentexte.
Wenn die Antwort nicht in den Quellen steht, sag das ehrlich, statt zu spekulieren oder zu erfinden.
Antworte auf Deutsch, freundlich und klar. Nenne am Ende in Klammern die verwendeten Subtyp-Codes als Quellenangabe.`;

async function askGemini(question, chunks) {
  const context = chunks
    .map((c) => `--- Quelle: ${c.code} (${c.source}) ---\n${c.text}`)
    .join("\n\n");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;
  const body = {
    systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
    contents: [{ role: "user", parts: [{ text: `Kontext:\n${context}\n\nFrage: ${question}` }] }],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini API Fehler ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "(keine Antwort erhalten)";
}

const server = http.createServer(async (req, res) => {
  // CORS für lokalen Test
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/api/ask") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { question } = JSON.parse(body);
        if (!question || typeof question !== "string") {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Feld 'question' fehlt." }));
          return;
        }

        const relevant = retrieveRelevantChunks(question, allChunks, 5);
        if (relevant.length === 0) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              answer: "Dazu finde ich in der Wissensbasis keine passenden Inhalte.",
              sources: [],
            })
          );
          return;
        }

        const answer = await askGemini(question, relevant);
        const sources = [...new Set(relevant.map((c) => c.code))];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ answer, sources }));
      } catch (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

const PORT = 8787;
server.listen(PORT, () => {
  console.log(`Prototyp-Server läuft auf http://localhost:${PORT}`);
  console.log(`Test-UI: ai-prototype/test.html im Browser öffnen (lokal).`);
});
