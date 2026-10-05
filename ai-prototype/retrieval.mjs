// Reine Retrieval-Logik ohne Node-Abhängigkeiten (fs etc.) —
// läuft sowohl lokal (Node) als auch im Cloudflare Worker.

// Häufige Füllwörter, die in praktisch jedem Textblock vorkommen und daher
// beim reinen Wort-Overlap-Scoring nichtssagende Treffer erzeugen
// (z.B. "tell me about X" matcht sonst zufällig lange, generische Texte
// stärker als kurze, thematisch genau passende Chunks).
const STOPWORDS = new Set([
  "dass", "auch", "eine", "einen", "einer", "eines", "sich", "sind", "wird", "werden",
  "kann", "kannst", "könnte", "haben", "hast", "hat", "wenn", "aber", "oder", "nicht",
  "mehr", "sehr", "noch", "schon", "immer", "diese", "dieser", "dieses", "welche",
  "welcher", "welches", "über", "unter", "durch", "bitte", "bist", "kannst", "gibt",
  "about", "there", "their", "these", "those", "which", "would", "could", "should",
  "please", "tell", "give", "know", "what", "when", "where", "your", "you're",
  "does", "with", "that", "this", "have", "will", "just", "like", "into", "than",
  "then", "them", "some", "such", "more", "most", "very", "much", "many", "list",
]);

// Kleine Synonym-/Begriffs-Normalisierung: Nutzerfragen verwenden oft andere
// Wörter als die Wissensbasis. Jedes gefundene Wort wird durch alle Begriffe
// derselben Gruppe ERGÄNZT (nicht ersetzt) - erhöht die Trefferchance, ohne
// echte Treffer zu verwässern.
const SYNONYM_GROUPS = [
  ["verbrecher", "kriminell", "straftäter", "mörder", "serienmörder", "täter"],
  ["criminal", "criminals", "murderer", "murderers", "killer", "killers", "offender", "offenders"],
  ["land", "länder", "staat", "staaten", "nation", "nationen"],
  ["country", "countries", "nation", "nations"],
  ["beziehung", "partnerschaft", "paarung", "paar"],
  ["relationship", "partnership", "pairing", "couple"],
  ["beruf", "berühmt", "prominent", "persönlichkeit"],
  ["famous", "celebrity", "prominent", "personality"],
  ["tier", "tierarchetyp", "tiersymbol"],
  ["animal", "creature"],
];
const SYNONYM_MAP = new Map();
for (const group of SYNONYM_GROUPS) {
  for (const word of group) {
    SYNONYM_MAP.set(word, group);
  }
}

function tokenize(str, { minLen = 4, useStopwords = true } = {}) {
  const raw = (str.toLowerCase().match(/[a-zäöüß]+/g) || []).filter(
    (w) => w.length >= minLen && (!useStopwords || !STOPWORDS.has(w))
  );
  const expanded = new Set(raw);
  for (const w of raw) {
    const group = SYNONYM_MAP.get(w);
    if (group) for (const syn of group) expanded.add(syn);
  }
  return [...expanded];
}

// Wörter, die auf eine Sammel-/Listen-Frage hindeuten ("alle Länder von Typ X",
// "welche Kriminellen...", "list all...") - dort reichen 5 Treffer oft nicht,
// weil die Antwort mehrere Chunks gleichzeitig braucht.
const COLLECTION_HINTS = /\balle\b|\ball\b|\bwelche\b|\bwhich\b|\blist\b|\bliste\b/i;

function scoreChunks(question, chunks, tokenizeOpts) {
  const qTokens = new Set(tokenize(question, tokenizeOpts));
  const qUpper = question.toUpperCase();

  const typMatch = question.match(/typ\w*\s*(\d)/i);
  const boostedCode = typMatch ? `LAND-TYP${typMatch[1]}` : null;

  const subtypeCodes = qUpper.match(/S[EOX][1-9]/g) || [];
  const beziehungCodes = new Set();
  if (subtypeCodes.length >= 2) {
    for (let i = 0; i < subtypeCodes.length; i++) {
      for (let j = i + 1; j < subtypeCodes.length; j++) {
        beziehungCodes.add(`BEZIEHUNG-${subtypeCodes[i]}-${subtypeCodes[j]}`);
        beziehungCodes.add(`BEZIEHUNG-${subtypeCodes[j]}-${subtypeCodes[i]}`);
      }
    }
  }

  return chunks.map((chunk) => {
    let score = 0;
    if (qUpper.includes(chunk.code)) score += 10;
    if (boostedCode && chunk.code === boostedCode) score += 50;
    if (beziehungCodes.has(chunk.code)) score += 50;
    const chunkTokenSet = new Set(tokenize(chunk.text, tokenizeOpts));
    for (const t of qTokens) {
      if (chunkTokenSet.has(t)) score += 1;
    }
    return { ...chunk, score };
  });
}

export function retrieveRelevantChunks(question, chunks, topN = 5) {
  const isCollectionQuery = COLLECTION_HINTS.test(question);
  const effectiveTopN = isCollectionQuery ? Math.max(topN, 10) : topN;

  let scored = scoreChunks(question, chunks, { minLen: 4, useStopwords: true });
  let hits = scored.filter((c) => c.score > 0);

  // Fallback: nichts gefunden -> zweiter, lockerer Versuch (kürzere Wörter erlaubt,
  // kein Stoppwort-Filter), bevor die App "weiß ich nicht" antwortet.
  if (hits.length === 0) {
    scored = scoreChunks(question, chunks, { minLen: 3, useStopwords: false });
    hits = scored.filter((c) => c.score > 0);
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, effectiveTopN);
}
