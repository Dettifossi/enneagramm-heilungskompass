// Erzeugt für jede Route aus data/register.js eine statische HTML-Snapshot-Seite
// (z.B. /subtype/se1/index.html), damit Suchmaschinen pro Unterseite ein
// eigenes <title>/<meta description> sehen statt nur die Startseite.
// Technik: Kopie von index.html/en/index.html + <base href> (macht alle
// relativen Asset-Pfade unabhängig von der Verzeichnistiefe) + Inline-Script,
// das location.hash VOR dem Laden von bundle.js setzt, sodass die normale
// App sofort die richtige Unterseite rendert (kein separater Rendering-Pfad,
// keine Divergenz zur echten App).
//
// Aufruf: node ai-prototype/generate-prerendered-pages.mjs
// Danach: python3 -m http.server 4174 zum lokalen Test, dann committen.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// data/register.js ist ein ES-Modul, das seinerseits von anderen Dateien
// importiert wird, die hier nicht gebraucht werden. Wir laden es minimal-invasiv
// per dynamic import (funktioniert, da register.js selbst keine externen
// Non-JSON-Abhängigkeiten hat).
const { registerEntries, registerEntriesEN } = await import(
  path.join(rootDir, "data/register.js")
);

const SITE = "https://kompass.verlagshausrathmer.com";

function sanitizeRoute(route) {
  // Nur a-z0-9-/ erlauben, keine .. o.ä. - Register-Routen sind alle sauber,
  // aber sicherheitshalber verifizieren statt blind vertrauen.
  if (!/^[a-z0-9/_-]+$/.test(route)) {
    throw new Error(`Unsichere Route übersprungen: ${route}`);
  }
  return route;
}

function buildPage(template, { route, title, description, canonical, base }) {
  let html = template;

  html = html.replace(/<head>/, `<head>\n    <base href="${base}">`);

  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>${escapeHtml(title)}</title>`
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Hash VOR dem ersten Skript setzen, damit die App beim Laden direkt die
  // richtige Route rendert (app.js liest location.hash beim Start).
  html = html.replace(
    /<head>/,
    `<head>\n    <script>if (!location.hash) location.hash = ${JSON.stringify(
      "#" + route
    )};</script>`
  );

  return html;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function writePage(outDir, html) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
}

function run() {
  const deTemplate = fs.readFileSync(path.join(rootDir, "index.html"), "utf-8");
  const enTemplate = fs.readFileSync(path.join(rootDir, "en/index.html"), "utf-8");

  const generatedRoutes = { de: [], en: [] };
  let skipped = 0;
  let duplicates = 0;

  // Mehrere Register-Einträge können auf dieselbe Route zeigen (z.B. "Typ 1"
  // und "Wut" beide auf subtype/se1) - erster Treffer gewinnt (meist der
  // spezifischere/bessere Titel), spätere Duplikate werden ignoriert statt
  // die Datei stillschweigend zu überschreiben.
  function dedupeByRoute(entries) {
    const seen = new Set();
    const result = [];
    for (const entry of entries) {
      if (seen.has(entry.route)) {
        duplicates++;
        continue;
      }
      seen.add(entry.route);
      result.push(entry);
    }
    return result;
  }

  for (const entry of dedupeByRoute(registerEntries)) {
    try {
      const route = sanitizeRoute(entry.route);
      const canonical = `${SITE}/${route}/`;
      const html = buildPage(deTemplate, {
        route,
        title: `${entry.term} – Enneagramm-Heilungskompass`,
        description: entry.description,
        canonical,
        base: `${SITE}/`,
      });
      writePage(path.join(rootDir, route), html);
      generatedRoutes.de.push(route);
    } catch (err) {
      skipped++;
      console.warn(`DE übersprungen (${entry.route}): ${err.message}`);
    }
  }

  for (const entry of dedupeByRoute(registerEntriesEN)) {
    try {
      const route = sanitizeRoute(entry.route);
      const canonical = `${SITE}/en/${route}/`;
      const html = buildPage(enTemplate, {
        route,
        title: `${entry.term} – Enneagram Healing Compass`,
        description: entry.description,
        canonical,
        base: `${SITE}/en/`,
      });
      writePage(path.join(rootDir, "en", route), html);
      generatedRoutes.en.push(route);
    } catch (err) {
      skipped++;
      console.warn(`EN übersprungen (${entry.route}): ${err.message}`);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, "generated-routes.json"),
    JSON.stringify(generatedRoutes, null, 2),
    "utf-8"
  );

  console.log(
    `DE: ${generatedRoutes.de.length} Seiten, EN: ${generatedRoutes.en.length} Seiten erzeugt (${skipped} übersprungen, ${duplicates} Duplikat-Routen ignoriert).`
  );
  console.log(`Routenliste für sitemap.xml gespeichert: ai-prototype/generated-routes.json`);
}

run();
