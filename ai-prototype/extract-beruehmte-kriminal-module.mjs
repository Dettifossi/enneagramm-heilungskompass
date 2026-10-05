// Phase 1b der bundle.js-Modularisierung: extrahiert alle *PortraitPage()-
// Funktionen der Rubriken "Berühmte Persönlichkeiten" und "Kriminalpsychologie"
// (identifiziert über die Routen-Map) in separate Dateien unter
// data/beruehmte-de/ bzw. data/kriminal-de/.
// Aufruf: node ai-prototype/extract-beruehmte-kriminal-module.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const bundlePath = path.join(rootDir, "bundle.js");
let src = fs.readFileSync(bundlePath, "utf-8");

function extractFunctionBody(text, startIdx) {
  let depth = 1;
  let i = startIdx + 1;
  while (depth > 0 && i < text.length) {
    if (text[i] === "{") depth++;
    else if (text[i] === "}") depth--;
    i++;
  }
  return i;
}

// 1) Routen-Map lesen, um Funktionsnamen ihrer Kategorie zuzuordnen
const routeMapRegex = /"([a-z0-9-]+)":\s*(\w+PortraitPage),/g;
const routeOf = new Map(); // funcName -> category ("beruehmte" | "kriminalpsychologie")
let rm;
while ((rm = routeMapRegex.exec(src))) {
  const [, route, fn] = rm;
  if (route.startsWith("beruehmte-") && !routeOf.has(fn)) routeOf.set(fn, "beruehmte");
  else if (route.startsWith("kriminalpsychologie-")) routeOf.set(fn, "kriminalpsychologie");
}

// 2) Alle *PortraitPage-Funktionen finden (ohne Krankheitsporträts)
const funcRegex = /^function (\w*PortraitPage)\(\) \{/gm;
const found = [];
let m;
while ((m = funcRegex.exec(src))) {
  const name = m[1];
  if (/rankheitsportraet/i.test(name)) continue;
  const category = routeOf.get(name) || "beruehmte"; // Fallback: beruehmte (z.B. Molière-Sonderfall)
  const sigStart = m.index;
  const braceStart = m.index + m[0].length - 1;
  const endIdx = extractFunctionBody(src, braceStart);
  found.push({ name, category, sigStart, endIdx, full: src.slice(sigStart, endIdx) });
}
console.log(`Gefunden: ${found.length} Berühmte/Kriminal-Portrait-Funktionen`);

const byCategory = { beruehmte: [], kriminalpsychologie: [] };
found.forEach(f => byCategory[f.category].push(f));
console.log(`  beruehmte: ${byCategory.beruehmte.length}, kriminalpsychologie: ${byCategory.kriminalpsychologie.length}`);

const IMPORT_LINE = `import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";\n\n`;

function writeGroups(list, dirName, groupSize) {
  list.sort((a, b) => a.name.localeCompare(b.name));
  const groupCount = Math.ceil(list.length / groupSize);
  const groups = Array.from({ length: groupCount }, () => []);
  list.forEach((f, i) => groups[i % groupCount].push(f));
  const outDir = path.join(rootDir, "data", dirName);
  fs.mkdirSync(outDir, { recursive: true });
  const importLines = [];
  groups.forEach((group, idx) => {
    const fileName = `teil${idx + 1}.js`;
    const bodyText = group.map(f => "export " + f.full).join("\n\n");
    fs.writeFileSync(path.join(outDir, fileName), IMPORT_LINE + bodyText + "\n", "utf-8");
    console.log(`  data/${dirName}/${fileName}: ${group.length} Funktionen`);
    importLines.push(`import { ${group.map(f => f.name).join(", ")} } from "./data/${dirName}/${fileName}";`);
  });
  return importLines;
}

const beruehmteImports = writeGroups(byCategory.beruehmte, "beruehmte-de", 25);
const kriminalImports = writeGroups(byCategory.kriminalpsychologie, "kriminal-de", 25);

// 3) Funktionskörper aus bundle.js entfernen (rückwärts)
const foundByPos = [...found].sort((a, b) => b.sigStart - a.sigStart);
for (const f of foundByPos) {
  let end = f.endIdx;
  if (src[end] === "\n") end++;
  src = src.slice(0, f.sigStart) + src.slice(end);
}

// 4) Import-Block an den Dateianfang setzen
const allImportLines = [...beruehmteImports, ...kriminalImports].join("\n");
src = allImportLines + "\n\n" + src;

// 5) animalResearcherMatchBlock + ANIMAL_RESEARCHER_MATCHES zusätzlich exportieren
src = src.replace(/^function animalResearcherMatchBlock\(/m, "export function animalResearcherMatchBlock(");
src = src.replace(/^const ANIMAL_RESEARCHER_MATCHES = \[/m, "export const ANIMAL_RESEARCHER_MATCHES = [");
// animalResearcherMatchBlock selbst braucht ANIMAL_RESEARCHER_MATCHES nur lokal, kein Re-Import nötig,
// da beide in derselben Datei (bundle.js) bleiben.

fs.writeFileSync(bundlePath, src, "utf-8");
console.log("bundle.js aktualisiert.");
