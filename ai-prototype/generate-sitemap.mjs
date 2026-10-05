// Baut sitemap.xml aus ai-prototype/generated-routes.json (Output von
// generate-prerendered-pages.mjs) + den beiden Startseiten.
// Aufruf: node ai-prototype/generate-sitemap.mjs (nach generate-prerendered-pages.mjs)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const SITE = "https://kompass.verlagshausrathmer.com";
const TODAY = new Date().toISOString().slice(0, 10);

const { de, en } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "generated-routes.json"), "utf-8")
);

function urlEntry(loc, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [];

entries.push(`  <url>
    <loc>${SITE}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />
  </url>`);

entries.push(`  <url>
    <loc>${SITE}/en/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/" />
  </url>`);

for (const route of de) entries.push(urlEntry(`${SITE}/${route}/`, "0.6"));
for (const route of en) entries.push(urlEntry(`${SITE}/en/${route}/`, "0.5"));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, "sitemap.xml"), xml, "utf-8");
console.log(`sitemap.xml geschrieben: ${entries.length} URLs (${de.length} DE + ${en.length} EN + 2 Startseiten).`);
