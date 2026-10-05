# Wegweiser (KI-Assistent) — Wissensbasis-Aktualität

Der „Wegweiser" ist ein Cloudflare-Worker-Chatbot (`ai-prototype/worker/`), der Fragen zur App per RAG über `ai-prototype/worker/knowledge.json` (DE) und `knowledge-en.json` (EN) beantwortet. Diese Dateien werden aus `app.js`/`data/*.js` (DE) bzw. `en/bundle.js`/`data/*.js` (EN) generiert.

**Kritisch:** `app.js` ist **nur eine Kopie von `bundle.js`** (per `cp bundle.js app.js`), rein für Lesbarkeit/Diffs in den `extract-*.mjs`-Skripten. `bundle.js` bleibt die tatsächliche Quelle — **niemals `app.js` direkt bearbeiten**, die Änderung geht beim nächsten Sync verloren. Die EN-Extraktion liest dagegen direkt aus `en/bundle.js` (kein Zwischenschritt nötig).

**Automatisierung:** Der Git-`post-commit`-Hook (`.git/hooks/post-commit`) übernimmt bei jedem Commit, der `bundle.js`, `en/bundle.js` oder `data/*.js` verändert, automatisch:
1. `cp bundle.js app.js` (Sync)
2. `bash ai-prototype/update-knowledge.sh` (Wissensbasis DE+EN neu bauen)
3. `bash ai-prototype/deploy-wegweiser.sh` (Worker neu deployen — **Pflichtschritt**, da `knowledge.json` per statischem Import zur Deploy-Zeit eingebettet wird; ein reiner Datei-Commit aktualisiert die Live-Instanz *nicht*)
4. Ergebnis als Folgecommit `[wissensbasis-auto]`

Das läuft automatisch bei jedem Commit über die üblichen Workflows in diesem Projekt — keine manuelle Aktion nötig. Nur bei Änderungen **außerhalb** von git (z. B. direktes Editieren auf einem Server) müsste `bash ai-prototype/update-knowledge.sh && bash ai-prototype/deploy-wegweiser.sh` manuell nachgeholt werden.

Die Vectorize-Embeddings (`ai-prototype/embed-and-upsert.mjs`, `vectors-de/en.ndjson`) sind eine separate, semantische Suchebene und aktuell eine **pausierte Baustelle** — nicht Teil der Automatisierung, absichtlich nicht angefasst, um keine inkonsistenten IDs im Cloudflare-Vectorize-Index zu erzeugen. Die Keyword-basierte Suche über `knowledge.json` funktioniert unabhängig davon zuverlässig.
