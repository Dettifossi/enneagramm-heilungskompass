# CLAUDE.md — Enneagramm-Heilungskompass

## 1. Sparsamer Umgang mit Dateizugriffen

- Lies niemals eine komplette Datei vollständig ein, wenn nur ein kleiner Abschnitt relevant ist. Nutze gezielte Suche (grep, Zeilenbereiche) statt vollständiger Dateilektüre.
- Bei `en/bundle.js` und `bundle.js` (beide sehr groß): für Prüfungen/Verifikation bevorzugt `grep -n`/`sed -n 'X,Yp'` statt des Read-Tools verwenden — spart bei jeder Prüfung mehrere tausend Tokens.
- Shell-Befehle laufen über den `rtk`-Hook (siehe `~/.claude/RTK.md`), das ist bereits automatisch tokenoptimiert — keine zusätzliche Aktion nötig, nur `rtk gain` bei Bedarf zur Kontrolle nutzen.
- Die Projektstruktur ist modularisiert:
  - `data/subtypes/` – ein File pro Subtyp (27 Dateien, z. B. `se1.js`, `so4.js`, `sx9.js`), zusammengeführt über `data/subtypes/index.js`
  - `data/knowledge/` – ein File pro Subtyp mit ausführlichem Wissensinhalt (27 Dateien), zusammengeführt über `data/knowledge/index.js`
- Bei Anfragen zu einem bestimmten Subtyp (z. B. „SE1"): **ausschließlich** die jeweilige Einzeldatei in `data/subtypes/` bzw. `data/knowledge/` öffnen und bearbeiten. `index.js`-Dateien und andere Subtyp-Dateien nicht anfassen, außer ausdrücklich verlangt.
- Neue Inhalte zu einem Subtyp gehören in die jeweilige Einzeldatei — **niemals** zurück in eine zentrale Sammeldatei wie `de.js`.

## 2. Antwortverhalten

- Knapp und konkret. Keine Wiederholungen, keine ausführlichen Zusammenfassungen, außer ausdrücklich gewünscht.
- Bei Code-Änderungen niemals den vollständigen Dateiinhalt zurückgeben — nur den geänderten Ausschnitt (Diff-Stil).
- Verifikationsschritte (Syntax-Check, Zeilenzahl-Abgleich) knapp im Terminal ausgeben lassen, nicht das Ergebnis nochmal im Chat ausformulieren.
- Bei mehrdeutigen Anfragen (z. B. unklarer Dateipfad): kurz nachfragen, statt das gesamte Verzeichnis zu durchsuchen.

## 3. Großdatei-Regel

- Wächst eine Datei über ~50.000 Token: aktiv darauf hinweisen und Aufteilung nach demselben Muster vorschlagen (Einzeldateien + Index), bevor weitergearbeitet wird.

## 4. Tests

- Nach strukturellen Änderungen (neue Dateien, Importe): kurzer lokaler Funktionstest (`python3 -m http.server 4174`), um sicherzustellen, dass die App weiterhin lädt.
- Bei reinen Textänderungen: kein Test nötig.

## Technik

- Statische SPA: HTML/CSS/JS, kein Framework, kein Build.
- Routen u. a.: `#start`, `#knowledge`, `#subtype/<code>` (z. B. `#subtype/SE1`).
- Lokal starten: `python3 -m http.server 4174`.
- CSS-Variablen: `--copper`, `--paper`, `--ink`, `--muted`, `--line`.
- Neue Inhalte in `data/subtypes/` oder `data/knowledge/`, NIE zurück in `de.js`.

## Register & Suchfunktion — Pflichtschritt bei jedem neuen Inhalt

**Suche = Register.** Beide greifen auf `data/register.js` zurück (`registerEntries`-Array).

**Jede neue Seite / jedes neue Portrait MUSS sofort in `data/register.js` eingetragen werden**, bevor committed wird. Sonst ist der Inhalt weder in der Suchfunktion noch im alphabetischen Register auffindbar.

Eintrag-Format:
```js
{ term: "Anzeigename",  route: "hash-route-ohne-#",  description: "Kurzbeschreibung ~80 Zeichen" },
```

- **Portraits (beruehmte-*):** `description` beginnt mit `"Portrait: SUBTYPCODE · Subtyp · Kurzinfo"`
- **Kriminalportraits:** Eintrag unter `// Kriminalpsychologie – fehlende Portraits`; zusätzlich prüfen ob `KRIMINAL_PORTRAITS`-Array in bundle.js den Eintrag hat (diese haben ein eigenes Such-Rendering)
- **Schaubilder:** `description` beginnt mit `"Schaubild: …"`
- **Astrologie-Portraits:** `description` beginnt mit `"Astrologie-Portrait: …"`

**Kontrollbefehl** (vor dem Commit ausführen, um Lücken zu finden):
```bash
python3 -c "
import re
t=open('bundle.js',encoding='utf-8').read()
rr=set(re.findall(r'\"([a-z][a-z0-9\-/]+)\"\s*:\s*\w+Page\b',t))
rf=open('data/register.js',encoding='utf-8').read()
rg=set(re.findall(r'route\s*:\s*\"([^\"]+)\"',rf))
ex={'beruehmte-persoenlichkeiten','favoriten','beruehmte-obama'}
miss=[r for r in sorted(rr-rg) if r not in ex]
print(f'Fehlend im Register: {len(miss)}')
[print(\" \",r) for r in miss]
"
```

## Inhaltsregeln

- **Keine erfundenen Zuordnungen.** Fachliche Inhalte nur aus belegten Quellen übernehmen.
- Anhänge / Originalquellen haben Vorrang.
- Unsichere Inhalte als `needs_review` markieren — nicht erfinden, nicht raten.
- Zwei getrennte Ebenen sauber halten: **Leidenschaft** und **Wunde** (`woundBehindPassion`). Nicht vermischen.

## Sprache & Stil

- App-Texte auf Deutsch, mit korrekten Umlauten und deutscher Typografie.
- Bei JS-Strings: keine deutschen Anführungszeichen `„"` wenn das schließende `"` U+0022 ist — Syntaxfehler. Stattdessen `›...‹` für Zitate innerhalb von Strings verwenden.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
