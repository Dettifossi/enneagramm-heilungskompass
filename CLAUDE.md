# CLAUDE.md — Enneagramm-Kompass (App)

> **Aktiver Ordner:** `~/Desktop/enneagramm-kompass-arbeitskopie` (Git-Repo).
> Nicht verwechseln mit den Kopien (`… Kopie`, `… Kopie 2`) oder `enneagramm-kompass-mvp` —
> die sind Sicherungen/ältere Stände und **nicht** der Arbeitsstand.

## Ziel des Projekts
Interaktive Web-App / digitales Kartenset zum **Rathmer-Enneagramm** (Modell von David & Detlef
Rathmer). Langfristige Vision: ein wachsender **„Lebenswerk-Kompass"**, der durch das Gesamtwerk
(Bücher, 27 Subtypen, Wissensbasis) führt — inklusive Werk-Register und Verweissystem.
Auch „Heilungskompass" genannt.

## Technik
- Statische **Single-Page-App: HTML/CSS/JS, kein Framework, kein Build**.
- `index.html` (Einstieg, Cache-Buster), `app.js` (SPA-Routing), `styles.css`, Daten in `data/de.js`, Medien in `assets/`.
- Routen u. a.: `#start`, `#knowledge`, **`#subtype/<code>`** (z. B. `#subtype/SE1`).
- Lokal starten: `npm start` (→ `python3 -m http.server 4174`) oder direkt `python3 -m http.server 4174`; Fallback-Port 4173.
- Hinweis: `package.json` `name` lautet historisch noch `enneagramm-kompass-mvp`.

## Inhaltsregeln — ZENTRAL und verbindlich
- **Keine erfundenen Zuordnungen.** Fachliche Inhalte (Subtypen, Leidenschaften, Wunden, Heilmittel)
  nur aus **belegten Quellen** übernehmen: die Bücher, die 27 Subtyp-Datensätze, die Original-Anhänge.
- **Anhänge / Originalquellen haben Vorrang** vor abgeleiteten oder generierten Texten.
- Unsichere oder unbelegte Inhalte **als `needs_review` markieren — nicht erfinden, nicht raten.**
- **Zwei getrennte Ebenen** sauber halten: **Leidenschaft** und **Wunde**
  (Feld `woundBehindPassion`, die „7er-Kette"). Nicht vermischen.
- Subtyp-Detailseite folgt der **SE1-Blaupause** (Aufbau in mehreren „Räumen"); Verweise ins Werk-Register pflegen.

## Sprache & Stil
- App-Texte auf **Deutsch**, mit korrekten Umlauten und deutscher Typografie.

## Arbeitsweise
- Vor inhaltlichen Änderungen prüfen, ob eine belegte Quelle existiert; sonst `needs_review`.
- Mehrere fast identische Ordner existieren — **immer im `…-arbeitskopie`-Ordner arbeiten** und nicht versehentlich eine Kopie bearbeiten.
