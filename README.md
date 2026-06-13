# Enneagramm-Kompass MVP

Statischer Web-App-Prototyp für den Enneagramm-Kompass nach dem Modell von David und Detlef Rathmer.

## Aktueller Entwicklungsstand

- Einstieg unter `#start` mit neu gestalteter Enneagramm-Kompass-Symbolik.
- Dashboard-Beispielprofil: `SX6 · Der Mutige`.
- Tierbild `Wolf` ist bewusst zurückgenommen und als Hintergrund-Resonanzbild formuliert.
- Deutsche Umlaute und typografische deutsche Schreibweise werden in den App-Texten verwendet.
- Die Bibliothek enthält jetzt die Übersicht `Die Grundformel des Rathmer-Enneagramms` als Hintergrundkarte.
- Wissensbasis-Seite unter `#knowledge` zeigt aktuell 12 Subtyp-Karten:
  `SE1`, `SO1`, `SX1`, `SE2`, `SO2`, `SX2`, `SE3`, `SO3`, `SX3`, `SE4`, `SO4`, `SX4`.
- Die Wissensbasis-Anzeige in dieser MVP-Datei ist noch ein sichtbarer Prototyp. Die vollständiger strukturierten Daten liegen im separaten Knowledge-Prototype-Ordner.

## Dateien

- `index.html`: Einstiegspunkt der statischen Web-App, inklusive Cache-Buster für aktuelle Assets.
- `styles.css`: responsive Gestaltung, Startseite, Dashboard, Karten, Wissensbasis und Kompass-Visual.
- `app.js`: SPA-Routing, Beispielprofil `SX6`, Bibliothekseinträge und sichtbarer Wissensbasis-Prototyp.
- `assets/grundformel-rathmer-enneagramm.jpg`: gesicherte Übersichtsgrafik zur Grundformel des Rathmer-Enneagramms.
- `assets/sx6-wolf.png`: aktuelles Resonanzbild für das Beispielprofil.
- `package.json`: Startskripte für lokale Vorschau.

## Lokal starten

```bash
cd /Users/detlefrathmer/Documents/Codex/2026-06-02/files-mentioned-by-the-user-eingef/outputs/enneagramm-kompass-mvp
npm start
```

Dann im Browser öffnen:

```text
http://localhost:4174/#start
```

Direkt ohne npm:

```bash
python3 -m http.server 4174
```

Falls Port `4174` belegt ist, kann alternativ Port `4173` verwendet werden:

```bash
npm run start:4173
```

## Routen

- `#start`: Einstieg und Profilöffnung.
- `#dashboard`: Tageskompass für `SX6`.
- `#reflection`: Reflexionsnotiz mit lokaler Speicherung.
- `#path`: Muster und Entwicklungsrichtung.
- `#tools`: erste Körper- und Reflexionswerkzeuge.
- `#library`: Hintergrundwissen zum Modell.
- `#knowledge`: sichtbarer Datenbank-Prototyp mit Typ 1 bis Typ 5.

## Technische Hinweise

Die App ist derzeit bewusst ohne Build-Schritt angelegt. Sie kann später in eine Vite-, React- oder Svelte-Struktur überführt werden, sobald die Datenarchitektur stabiler ist.

Der nächste technische Schritt wäre, `app.js` zu entlasten und die Wissensbasis direkt aus JSON-Dateien zu laden oder in TypeScript-Datenobjekte zu überführen.
