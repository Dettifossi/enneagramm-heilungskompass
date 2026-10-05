// Extrahiert LAENDER_REGIONEN aus app.js (Zeilen mit "const LAENDER_REGIONEN = [" bis "];")
// und wandelt sie in zitierfähige Wissens-Chunks um: einen Chunk pro Land.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const appJs = fs.readFileSync(path.join(rootDir, "app.js"), "utf-8");

const startMarker = "const LAENDER_REGIONEN = [";
const startIdx = appJs.indexOf(startMarker);
if (startIdx === -1) throw new Error("LAENDER_REGIONEN nicht gefunden");
const endMarker = "\n];";
const endIdx = appJs.indexOf(endMarker, startIdx);
if (endIdx === -1) throw new Error("Ende von LAENDER_REGIONEN nicht gefunden");

const arraySource = appJs.slice(startIdx + startMarker.length - 1, endIdx + endMarker.length - 1); // "[ ... ]"
const context = { result: null };
vm.createContext(context);
vm.runInContext(`result = ${arraySource}`, context);
const LAENDER_REGIONEN = context.result;

const TYP_NAMEN = {
  1: "Typ 1 (Der Perfektionist / Reformer)",
  2: "Typ 2 (Der Helfer / Geber)",
  3: "Typ 3 (Der Erfolgsorientierte / Macher)",
  4: "Typ 4 (Der Individualist / Romantiker)",
  5: "Typ 5 (Der Beobachter / Forscher)",
  6: "Typ 6 (Der Loyale / Skeptiker)",
  7: "Typ 7 (Der Enthusiast / Abenteurer)",
  8: "Typ 8 (Der Herausfordernde / Chef)",
  9: "Typ 9 (Der Vermittler / Bewahrer)",
};

const chunks = [];
for (const region of LAENDER_REGIONEN) {
  for (const land of region.laender) {
    chunks.push({
      code: `LAND-${land.iso}`,
      source: "laenderzuordnungen",
      text: `${land.name} (${region.region}) ist im Enneagramm-Heilungskompass ${TYP_NAMEN[land.typ] || "Typ " + land.typ} zugeordnet${land.unsicher ? " (als unsicher/umstritten markiert)" : ""}. Begründung: ${land.text}`,
    });
  }
}

// Zusätzlich: eine kompakte Übersichtsliste "welche Länder haben Typ X" pro Typ,
// damit Sammel-Fragen ("alle Länder mit Typ 3") ohne Duchsuchen aller Einzel-Chunks beantwortbar sind.
for (let typ = 1; typ <= 9; typ++) {
  const laenderDesTyps = [];
  for (const region of LAENDER_REGIONEN) {
    for (const land of region.laender) {
      if (land.typ === typ) laenderDesTyps.push(land.name);
    }
  }
  chunks.push({
    code: `LAND-TYP${typ}`,
    source: "laenderzuordnungen-uebersicht",
    text: `Liste aller Länder, die im Enneagramm-Heilungskompass ${TYP_NAMEN[typ]} zugeordnet sind (${laenderDesTyps.length} Länder): ${laenderDesTyps.join(", ")}.`,
  });
}

const outPath = path.join(__dirname, "knowledge-laender.json");
fs.writeFileSync(outPath, JSON.stringify(chunks));
console.log(`${chunks.length} Länder-Chunks geschrieben nach ${outPath} (${LAENDER_REGIONEN.reduce((s, r) => s + r.laender.length, 0)} Länder gesamt).`);
