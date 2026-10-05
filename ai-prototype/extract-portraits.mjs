// Extrahiert Porträt-Wissen aus app.js für die Wegweiser-Wissensbasis.
//
// WICHTIG (31.08.2026 geändert): Für berühmte Persönlichkeiten, Kriminalpsychologie-Fälle,
// Krankheitsporträts und Bibel-Porträts wird NICHT mehr der volle Funktionskörper
// (ausformulierter Fließtext, oft 5-15 KB pro Porträt) extrahiert, sondern nur der
// strukturierte Kurz-Teaser aus den jeweiligen Arrays (BERUEHMT_PORTRAITS,
// KRIMINAL_PORTRAITS, KRANKHEITS_PORTRAITS, BIBEL_PORTRAITS) — analog zum bereits
// bestehenden, deutlich schlankeren EN-Verfahren (extract-en-portraits.mjs).
// Grund: Der Cloudflare-Workers-Free-Plan begrenzt die Worker-Größe auf 3 MiB;
// die Vollzitat-Variante hatte allein für DE-Porträts ~5 MB erzeugt und damit die
// Wegweiser-Wissensbasis insgesamt über die Grenze getrieben (siehe Vorfall 31.08.2026,
// ausgelöst durch Überschreiten bei Hinzufügen neuer Porträts). Die Teaser sind bereits
// dicht geschriebene Zusammenfassungen (Name, Subtyp, Kernfakten) und für die RAG-Suche
// des Chatbots ausreichend – nur Astrologie-Porträts (kein eigenes Array, sondern volle
// Seitenfunktionen) werden weiterhin wie zuvor per Funktionskörper-Extraktion erfasst,
// da sie ohnehin deutlich kleiner sind als die anderen Kategorien.
//
// Aufruf: node ai-prototype/extract-portraits.mjs
// Erzeugt: ai-prototype/knowledge-portraits.json

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const appJs = fs.readFileSync(path.join(rootDir, "app.js"), "utf-8");

function extractConst(name) {
  const startMarker = `const ${name} = `;
  const startIdx = appJs.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`${name} nicht gefunden`);
  const bodyStart = startIdx + startMarker.length;
  let depth = 1;
  let i = bodyStart + 1;
  while (depth > 0 && i < appJs.length) {
    if (appJs[i] === "[") depth++;
    else if (appJs[i] === "]") depth--;
    i++;
  }
  const literal = appJs.slice(bodyStart, i);
  const context = { module: { exports: {} } };
  vm.createContext(context);
  return vm.runInContext(`(${literal})`, context);
}

const BERUEHMT_PORTRAITS = extractConst("BERUEHMT_PORTRAITS");
const KRIMINAL_PORTRAITS = extractConst("KRIMINAL_PORTRAITS");
const KRANKHEITS_PORTRAITS = extractConst("KRANKHEITS_PORTRAITS");
const BIBEL_PORTRAITS = extractConst("BIBEL_PORTRAITS");

const chunks = [];

for (const p of BERUEHMT_PORTRAITS) {
  chunks.push({
    code: `PORTRAIT-${p.route}`,
    source: "portraits",
    text: `Porträt: ${p.heading || p.name} (Subtyp ${p.subtyp}). ${p.teaser || ""}`,
  });
}

for (const p of KRIMINAL_PORTRAITS) {
  chunks.push({
    code: `PORTRAIT-${p.route}`,
    source: "portraits",
    text: `Kriminalpsychologie-Fall: ${p.heading || p.name} (Subtyp ${p.subtyp}). ${p.teaser || ""}`,
  });
}

for (const p of KRANKHEITS_PORTRAITS) {
  chunks.push({
    code: `PORTRAIT-${p.route}`,
    source: "portraits",
    text: `Krankheitsporträt: ${p.heading || p.name} (Subtyp ${p.subtyp}) – ${p.krankheit || ""}. ${p.teaser || ""}`,
  });
}

for (const p of BIBEL_PORTRAITS) {
  chunks.push({
    code: `PORTRAIT-${p.route}`,
    source: "portraits",
    text: `Bibel-Porträt: ${p.heading || p.name} (Subtyp ${p.subtyp}). ${p.teaser || ""}`,
  });
}

console.log(
  `Teaser-Porträts: ${BERUEHMT_PORTRAITS.length} berühmte, ${KRIMINAL_PORTRAITS.length} Kriminal, ${KRANKHEITS_PORTRAITS.length} Krankheit, ${BIBEL_PORTRAITS.length} Bibel`
);

// Astrologie-Porträts liegen als eigene, volle Seitenfunktionen vor (kein Array) —
// weiterhin per Funktionskörper-Extraktion wie bisher, analog zum EN-Verfahren.
const astroRouteMap = new Map();
const astroRouteRegex = /"(astrologie-[a-z0-9-]+)":\s*([a-zA-Z0-9]+),/g;
let am;
while ((am = astroRouteRegex.exec(appJs))) {
  astroRouteMap.set(am[2], am[1]);
}

let astroCount = 0;
for (const funcName of astroRouteMap.keys()) {
  const funcStartRegex = new RegExp(`^function ${funcName}\\(\\) \\{`, "m");
  const startMatch = funcStartRegex.exec(appJs);
  if (!startMatch) continue;
  const bodyStart = startMatch.index + startMatch[0].length;
  let depth = 1;
  let i = bodyStart;
  while (depth > 0 && i < appJs.length) {
    const ch = appJs[i];
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
    i++;
  }
  const body = appJs.slice(bodyStart, i - 1);

  let text = body
    .replace(/return shell\(`/, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\$\{(?:[^{}]|\{[^{}]*\})*\}/g, " ") // ${...}-Interpolationen inkl. einer Verschachtelungsebene raus
    .replace(/&middot;/g, "·")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length < 80) continue;
  if (text.length > 4000) text = text.slice(0, 4000) + " …"; // Sicherheitsdeckel gegen erneutes Aufblähen

  const route = astroRouteMap.get(funcName);
  const readableName = funcName
    .replace(/Page$/, "")
    .replace(/([A-Z])/g, " $1")
    .trim();

  chunks.push({
    code: `PORTRAIT-${route}`,
    source: "portraits",
    text: `Astrologie-Porträt: ${readableName}. ${text}`,
  });
  astroCount++;
}
console.log(`Astrologie-Porträts (Volltext, gedeckelt): ${astroCount}`);

const outPath = path.join(__dirname, "knowledge-portraits.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} Porträt-Chunks geschrieben nach ${outPath}`);
console.log(`Dateigröße: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
