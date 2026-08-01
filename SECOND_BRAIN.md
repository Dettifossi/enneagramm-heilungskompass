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

Standardformat: **6 Kapitel** (normale Länge). Der Nutzer sagt explizit Bescheid, wenn ein Porträt mehr Kapitel haben soll (z. B. besondere Ausführlichkeit) — ohne anderslautende Anweisung immer 6 Kapitel verwenden. Feste Kapitelstruktur, die sich in allen bisherigen Porträts bewährt hat:

1. **Das Tier** — Tierentsprechung des Subtyps einführen (Wesenszüge des Tiers), dann Brücke zur Person: wie sie dieses Tier verkörpert. 2 Absätze.
2. **Der [Instinkt] [Typ]: [griffiger Untertitel]** — Kernbeschreibung des Subtyps (SE/SO/SX + Zahl), inkl. Naranjo-Zitat zur Subtyp-Bezeichnung (siehe Sprachregeln unten). 2–3 Absätze, an der Person konkretisiert.
3. **Der [Zahl]erflügel: [griffiger Untertitel]** — wie der Flügel die Subtyp-Energie verändert/ergänzt, an der Person konkretisiert. 2–3 Absätze.
4. **[Konkretes Kapitel zu einem einzelnen Lebensereignis/Werk/Fallbeispiel]** — kein generisches Typ-Kapitel mehr, sondern eine spezifische Episode aus der Biografie, die die Subtyp-Dynamik exemplarisch zeigt (z. B. ein bestimmtes Album, ein Skandal, eine Lebenswende). 1–2 Absätze.
5. **Licht und Schatten der [Instinkt] [Typ]** — Licht-Absatz, dann Schicksalsmuster/Leidenschaft (bei Vieren: Neid) + Schatten des Grundtyps an der Person, dann Schatten des Flügels an der Person. 3 Absätze.
6. **Der Heilungsweg: [griffiger Untertitel]** — generische Heilungsweg-Formel des Grundtyps ("Von der Frage X zur Erkenntnis Y"), dann wie sich das bei der Person zeigt/zeigte. 2 Absätze.

Danach: `bookTip`-Dreierblock (immer dieselben drei Bücher: `wer-du-wirklich-bist-band-1`, `die-verborgene-dynamik-der-27-subtypen`, `die-27-persoenlichkeiten-des-enneagramms`) und `relatedLinks` (Übersicht, Subtyp-Profil-Link, 1–3 verwandte Porträts desselben Subtyps).

### Sprachregeln (immer beachten, auch bei neuen Kapiteln)

- **Naranjo ist verstorben** (war der Lehrer des Nutzers) — immer Präteritum: "Naranjo nannte diesen Subtyp …" / engl. "Naranjo called this subtype …", NIE Präsens ("nennt"/"calls").
- **Naranjo-Bezeichnungen der 27 Subtypen vor Verwendung verifizieren**, nicht aus altem Code-Bestand übernehmen (dort gibt es noch unkorrigierte Fehler). Bekannte korrekte Begriffe: SE4/SP4 = "tenacity"/"Zähigkeit" (nicht "Rücksichtslosigkeit"/"Recklessness"); SO4 = "shame"/"Scham"; SX3 = "Masculinity/Femininity". Umgangssprachliche Trias für Typ 4: SE4/SP4 = "Glad Four", SO4 = "Sad Four", SX4 = "Mad Four" — bei thematisch passenden Porträts (z. B. wenn zwei Vieren unterschiedlicher Subtypen verglichen werden) gerne erwähnen.
- **Genitiv bei "Typ":** "Tier des sozialen/selbsterhaltenden/sexuellen **Typs** N" — nicht "Typ N" (Genitiv-s nicht vergessen). Ausnahme: Appositionen wie "des Reformers Typ 1" (da "Reformers" bereits Genitiv ist).
- Ist verstorben? Sterbejahr im Untertitel/Teaser ergänzen ("1934–2025" statt "geb. 1934") und Kapitel 4–6 nötigenfalls ins Präteritum setzen.
- **Keine erfundenen Fakten.** Bei unbekannten/unklaren Personen (z. B. Newcomer, regionale Persönlichkeiten) vor dem Schreiben recherchieren (WebSearch), nicht raten — Foto-Dateiname allein ist kein Beleg für Identität/Beruf (Fallbeispiel: "Javier Parisi" sah im Foto aus wie John Lennon, weil er dessen weltweit bekanntester Doppelgänger ist — das wäre ohne Recherche nicht auffindbar gewesen).

### Arbeitsschritte

Beide Sprachversionen müssen bei jedem neuen Porträt gepflegt werden, sonst entstehen Diskrepanzen (siehe Robbie-Williams-Vorfall, 2026-07-30):

1. Foto nach `assets/portraits/beruehmte-<route>-portrait.jpg`. Meist schon quadratisch (2048×2048) vom Nutzer geliefert — mit `sips -g pixelWidth -g pixelHeight` prüfen.
2. Referenz-Portrait desselben Subtyps/Tiers im Code suchen (`awk` über `BERUEHMT_PORTRAITS`-Array nach `subtyp` filtern) für Ton/Struktur.
3. Portrait-Funktion **an der richtigen Stelle im Code** einfügen: direkt neben/nach einem bestehenden Portrait desselben Subtyps, damit die spätere `BERUEHMT_PORTRAITS`-Einsortierung (Schritt 4) zusammenhängend bleibt (die Übersicht gruppiert nach Subtyp-Code in Array-Reihenfolge — bei Lücken entstehen doppelte Gruppenköpfe).
4. `BERUEHMT_PORTRAITS`-Eintrag (Register-Objekt mit `route`, `name`, `added`, `subtyp`, `heading`, `teaser`, `tags`, `gender`) **direkt neben einem Eintrag desselben Subtyps** einfügen — Reihenfolge nach dem Einfügen mit `awk` verifizieren.
5. Routen-Dispatch-Zeile ergänzen (`"beruehmte-<route>": <funktionName>PortraitPage,`).
6. `data/register.js`: Eintrag in DE- **und** EN-Sektion (Suchindex) — alphabetisch nach `term` einsortieren (Sektionen sind über weite Strecken alphabetisch, aber nicht durchgängig streng — an der lokalen Umgebung orientieren).
7. `data/changelog.js`: neuer Eintrag **ganz oben** in der Liste (neueste zuerst), fortlaufende `version`-Nummer, `date`, `text` (DE) + `text_en` (EN), `route`.
8. Schritte 2–5 identisch in `en/bundle.js` wiederholen (**hat keine eigene Quelldatei** — direkt übersetzen und bearbeiten, inkl. gegenseitigem `relatedLinks`-Verweis, falls das Porträt mit einem bestehenden thematisch verwandt ist, z. B. gleicher Subtyp/gleiches Ereignis).
9. `cp app.js bundle.js` (DE-Bundle synchronisieren) + `node -c bundle.js` und `node -c en/bundle.js` (Syntax-Check).
10. **Alle drei Versions-Marker hochzählen** (leicht zu vergessen, da an drei verschiedenen Stellen):
    - `index.html` / `en/index.html`: `bundle.js?v=inhalt-vXXX` (siehe Deploy-Checkliste oben)
    - `index.html` / `en/index.html`: `data/changelog.js?v=XX` — **eigener, separater Cache-Buster**, unabhängig vom Bundle-Marker. Wird leicht vergessen, weil `changelog.js` selbst außerhalb von `bundle.js` liegt — führt sonst dazu, dass die "Neuerungen"-Anzeige in der App veraltet bleibt, obwohl der Rest schon aktuell ist.
    - `sw.js` / `en/sw.js`: `BUNDLE_VERSION` (Service-Worker-Konstante, löst den Auto-Reload auf dem Handy/PWA aus)
11. Kurzer lokaler Test beider Sprachversionen (`beruehmte-persoenlichkeiten`-Übersicht: Anzahl, Reihenfolge, neues Porträt sichtbar; Detailseite DE + EN aufrufen).
12. Committen (aussagekräftige Message) und **erst nach Bestätigung durch den Nutzer** `git push origin main` (Live-Domain läuft über GitHub Pages, Quelle Branch `main`).
13. Nach dem Push: Deploy-Status über `gh api repos/Dettifossi/enneagramm-heilungskompass/pages/builds/latest` pollen, bis `status:"built"`, dann mit `curl` gegen die Live-Domain (`kompass.verlagshausrathmer.com`) verifizieren, dass Inhalt wirklich angekommen ist — GitHub-Pages-Deploys brauchen oft 1–2 Minuten nach dem Push.
