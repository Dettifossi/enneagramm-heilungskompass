// Zählt Kriminal-, Krankheits-, Berühmte-Persönlichkeiten- und Astrologie-Porträts in bundle.js
// und schreibt die auf den nächsten Hunderter abgerundete Gesamtzahl in die Marketing-Textzeile
// ("Über NNN Porträts ...") von index.html, en/index.html und allen generierten SEO-Klon-Seiten.
// Wird automatisch vom post-commit-Hook aufgerufen, sobald sich bundle.js ändert – keine manuelle
// Zahlen-Pflege mehr nötig.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const bundleSrc = fs.readFileSync(path.join(ROOT, "bundle.js"), "utf8");

function countArray(name) {
  const start = bundleSrc.indexOf(`const ${name} = [`);
  if (start === -1) throw new Error(`Array ${name} nicht gefunden`);
  const braceStart = bundleSrc.indexOf("[", start);
  let depth = 0, end = -1;
  for (let i = braceStart; i < bundleSrc.length; i++) {
    if (bundleSrc[i] === "[") depth++;
    else if (bundleSrc[i] === "]") { depth--; if (depth === 0) { end = i; break; } }
  }
  const slice = bundleSrc.slice(braceStart, end + 1);
  return (slice.match(/route\s*:\s*"/g) || []).length;
}

const counts = {
  KRIMINAL_PORTRAITS: countArray("KRIMINAL_PORTRAITS"),
  KRANKHEITS_PORTRAITS: countArray("KRANKHEITS_PORTRAITS"),
  BERUEHMT_PORTRAITS: countArray("BERUEHMT_PORTRAITS"),
  ASTROLOGIE_PORTRAITS: countArray("ASTROLOGIE_PORTRAITS"),
};
const total = Object.values(counts).reduce((a, b) => a + b, 0);
const rounded = Math.floor(total / 100) * 100;

console.log("Porträt-Zählung:", counts, "→ Summe:", total, "→ gerundet:", rounded);

const DE_LINE_RE = /<li>Über \d+\+? Porträts (?:und Fallanalysen: berühmte Persönlichkeiten, Kriminalfälle, Krankheitsbilder(?:,| und) Astrologie|berühmter Persönlichkeiten aus Enneagramm-Sicht)<\/li>/;
const DE_LINE_NEW = `<li>Über ${rounded} Porträts und Fallanalysen: berühmte Persönlichkeiten, Kriminalfälle, Krankheitsbilder, Astrologie</li>`;

const EN_LINE_RE = /<li>Over \d+\+? (?:portraits and case studies: famous personalities, criminal cases, illness portraits, astrology|portraits of famous personalities from an Enneagram perspective)<\/li>/;
const EN_LINE_NEW = `<li>Over ${rounded} portraits and case studies: famous personalities, criminal cases, illness portraits, astrology</li>`;

let filesChanged = 0;

function updateFile(filePath, re, replacement) {
  const content = fs.readFileSync(filePath, "utf8");
  if (!re.test(content)) return false;
  const updated = content.replace(re, replacement);
  if (updated === content) return false;
  fs.writeFileSync(filePath, updated, "utf8");
  return true;
}

// Haupt-App
if (updateFile(path.join(ROOT, "index.html"), DE_LINE_RE, DE_LINE_NEW)) filesChanged++;
if (updateFile(path.join(ROOT, "en/index.html"), EN_LINE_RE, EN_LINE_NEW)) filesChanged++;

// Automatisch generierte SEO-Klon-Seiten (index.html in Unterordnern, beliebig verschachtelt,
// z. B. beruehmte-xy/index.html oder tierlexikon/se4/index.html)
const SKIP_DIRS = new Set([".git", ".claude", "node_modules", "bundle-parts", "ai-prototype"]);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name));
    } else if (entry.isFile() && entry.name === "index.html" && dir !== ROOT) {
      if (updateFile(path.join(dir, entry.name), DE_LINE_RE, DE_LINE_NEW)) filesChanged++;
    }
  }
}
walk(ROOT);

console.log(`Fertig: ${filesChanged} Datei(en) aktualisiert.`);
