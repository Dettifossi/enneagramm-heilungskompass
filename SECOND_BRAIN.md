# Second Brain — Enneagramm-Heilungskompass

Detailwissen zum Projekt. Nur bei Bedarf lesen (nicht bei jeder Anfrage einlesen) — `CLAUDE.md` enthält die Kernregeln, die immer gelten.

## Technik

- Statische SPA: HTML/CSS/JS, kein Framework, kein Build.
- Routen u. a.: `#start`, `#knowledge`, `#subtype/<code>` (z. B. `#subtype/SE1`).
- Lokal starten: `python3 -m http.server 4174`.
- CSS-Variablen: `--copper`, `--paper`, `--ink`, `--muted`, `--line`.
- Neue Inhalte in `data/subtypes/` oder `data/knowledge/`, NIE zurück in `de.js`.
- `bundle.js` (DE) ist eine 1:1-Kopie von `app.js` — kein separater Build-Schritt. Nach Änderungen an `app.js`: `cp app.js bundle.js`. **`build-bundle.py` NICHT verwenden** — das Skript erzeugt ein veraltetes, inkompatibles Bundle-Format und zerstört die App.
- `en/bundle.js` hat **keine eigene Quelldatei** — es wird direkt bearbeitet (Übersetzung + Anpassung analog zu `app.js`).

## Deploy-Checkliste: Versions-Query IMMER mit hochzählen

Bei jeder inhaltlichen Änderung an `bundle.js` oder `en/bundle.js` (neues Porträt, Bugfix, Datenänderung) müssen folgende Versionsnummern synchron hochgezählt werden — sonst liefern Browser/CDN alte gecachte Bundles aus, was zu widersprüchlichen Anzeigen (falsche Porträt-Anzahl, fehlende Inhalte) führt:

- `index.html`: `<script type="module" src="bundle.js?v=inhalt-vXXX">` — Zahl erhöhen
- `en/index.html`: `<script type="module" src="./bundle.js?v=inhalt-vXXX">` — Zahl erhöhen (eigene, unabhängige Zählung)

Diese beiden Versions-Checks sind selbstheilend (lesen ihre eigene Version per `import.meta.url` aus), müssen also NICHT mehr manuell synchronisiert werden — die `?v=`-Query in den `index.html`-Dateien ist aber weiterhin der einzige Cache-Buster und muss bei jeder Änderung angehoben werden.

Separat davon existiert ein zweiter Mechanismus (`APP_BUILD`-Konstante ganz oben in `app.js`/`bundle.js`/`en/bundle.js`, verglichen mit `version.json`/`en/version.json`). Auch dieser sollte bei größeren Deploys mit hochgezählt werden, ist aber seit 2026-07-30 mit einem Session-Guard gegen Reload-Loops abgesichert, falls die Zahlen doch mal auseinanderlaufen.

## Großdatei-Regel

- Wächst eine Datei über ~50.000 Token: aktiv darauf hinweisen und Aufteilung nach demselben Muster vorschlagen (Einzeldateien + Index), bevor weitergearbeitet wird.

## Inhaltsregeln

- **Keine erfundenen Zuordnungen.** Fachliche Inhalte nur aus belegten Quellen übernehmen.
- Anhänge / Originalquellen haben Vorrang.
- Unsichere Inhalte als `needs_review` markieren — nicht erfinden, nicht raten.
- Zwei getrennte Ebenen sauber halten: **Leidenschaft** und **Wunde** (`woundBehindPassion`). Nicht vermischen.

## Neues Promi-Porträt anlegen (DE + EN)

Beide Sprachversionen müssen bei jedem neuen Porträt gepflegt werden, sonst entstehen Diskrepanzen (siehe Robbie-Williams-Vorfall, 2026-07-30):

1. Foto nach `assets/portraits/beruehmte-<route>-portrait.jpg`.
2. Portrait-Funktion + Register-Eintrag + Routen-Dispatch in `app.js` (DE).
3. `data/register.js`: Eintrag in DE- **und** EN-Sektion (Suchindex).
4. `data/changelog.js`: neuer Eintrag.
5. Portrait-Funktion (übersetzt) + Register-Eintrag + Routen-Dispatch in `en/bundle.js` (EN) — hat keine eigene Quelldatei, direkt bearbeiten.
6. `cp app.js bundle.js` (DE-Bundle synchronisieren).
7. Versions-Query in `index.html` und `en/index.html` hochzählen (siehe oben).
8. Kurzer lokaler Test beider Sprachversionen (`beruehmte-persoenlichkeiten`-Übersicht: Anzahl, Reihenfolge, neues Porträt sichtbar).
