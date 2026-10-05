// Einmaliges Migrationsskript (Phase 1 der bundle.js-Modularisierung):
// Extrahiert alle *KrankheitsportraetPage()-Funktionen aus bundle.js in
// separate Dateien unter data/krankheitsportraets-de/, macht bundle.js zu
// einem ES-Modul, das diese Funktionen per import zurückholt.
// Aufruf: node ai-prototype/extract-krankheitsportraets-module.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const bundlePath = path.join(rootDir, "bundle.js");
let src = fs.readFileSync(bundlePath, "utf-8");

function extractFunctionBody(text, startIdx) {
  // startIdx zeigt auf das '{' nach der Funktionssignatur
  let depth = 1;
  let i = startIdx + 1;
  while (depth > 0 && i < text.length) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") depth--;
    i++;
  }
  return i; // Index direkt nach der schließenden '}'
}

// 1) Alle KrankheitsportraetPage-Funktionen finden (Name + vollständiger Quelltext)
const funcRegex = /^function (\w*KrankheitsportraetPage)\(\) \{/gm;
const found = [];
let m;
while ((m = funcRegex.exec(src))) {
  const name = m[1];
  const sigStart = m.index;
  const braceStart = m.index + m[0].length - 1; // Index von '{'
  const endIdx = extractFunctionBody(src, braceStart);
  found.push({ name, sigStart, endIdx, full: src.slice(sigStart, endIdx) });
}
console.log(`Gefunden: ${found.length} Krankheitsporträt-Funktionen`);

// 2) In 6 Gruppen à ~20 Funktionen aufteilen, alphabetisch nach Funktionsname
found.sort((a, b) => a.name.localeCompare(b.name));
const GROUP_COUNT = 6;
const groups = Array.from({ length: GROUP_COUNT }, () => []);
found.forEach((f, i) => groups[i % GROUP_COUNT].push(f));

const outDir = path.join(rootDir, "data", "krankheitsportraets-de");
fs.mkdirSync(outDir, { recursive: true });

const IMPORT_LINE = `import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";\n\n`;

groups.forEach((group, idx) => {
  const fileName = `teil${idx + 1}.js`;
  const body = group.map(f => "export " + f.full).join("\n\n");
  fs.writeFileSync(path.join(outDir, fileName), IMPORT_LINE + body + "\n", "utf-8");
  console.log(`  ${fileName}: ${group.length} Funktionen`);
});

// 3) Funktionskörper aus bundle.js entfernen (rückwärts, damit Indizes stabil bleiben)
const foundByPos = [...found].sort((a, b) => b.sigStart - a.sigStart);
for (const f of foundByPos) {
  // auch eine evtl. leere Zeile direkt danach mitentfernen für sauberen Diff
  let end = f.endIdx;
  if (src[end] === "\n") end++;
  src = src.slice(0, f.sigStart) + src.slice(end);
}

// 4) Import-Block für die zurückgeholten Funktionen an den Dateianfang setzen
const importLines = groups
  .map((group, idx) => {
    const names = group.map(f => f.name).join(", ");
    return `import { ${names} } from "./data/krankheitsportraets-de/teil${idx + 1}.js";`;
  })
  .join("\n");
src = importLines + "\n\n" + src;

// 5) shell/pageHeader/relatedLinks/bookTip/tierAvatarTop/tierAvatarLeft exportieren
const toExport = ["shell", "pageHeader", "relatedLinks", "bookTip", "tierAvatarTop", "tierAvatarLeft"];
for (const fn of toExport) {
  const re = new RegExp(`^function ${fn}\\(`, "m");
  if (!re.test(src)) {
    console.error(`FEHLER: function ${fn}( nicht gefunden!`);
    process.exit(1);
  }
  src = src.replace(re, `export function ${fn}(`);
}

fs.writeFileSync(bundlePath, src, "utf-8");
console.log("bundle.js aktualisiert.");
