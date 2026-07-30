# Checkpoint: Überarbeitung Enneagramm-Filmempfehlungen (nicht deployed, nur Plan)

Stand: 2026-07-31. app.js ist NICHT verändert – dieser Checkpoint ist reine Planung
für den nächsten Anlauf. Rohdaten liegen in diesem Ordner:
- `filme_original_270.json` — alle 270 aktuellen Film-Einträge (title, year, text) pro Subtyp, extrahiert aus app.js
- `filme_de_titles.json` — 52 bestätigte deutsche Kinotitel (title -> deutscher Titel), nur wo ich mir sicher bin

## Auftrag (vom Nutzer, 4 Punkte)

1. **Keine Film-Dopplungen mehr über die 27 Subtypen.** Jeder Film darf nur in EINER Subtyp-Liste stehen (der besten thematischen Passung). Aktuell: 42 Filme sind mehrfach verwendet (bis zu 4x, z.B. "A Star Is Born").
2. **Elvis-Film von SX3 zu SX2 verschieben** (Elvis Presley ist im Kompass als SX2w3 getypt). Ersatzfilm für SX3 finden.
3. **Deutsche Kinotitel statt englischer Titel in der DE-App**, Format "Deutscher Titel (Original)" — nur wenn sich die Titel unterscheiden. EN-App bleibt unverändert (existiert für Filme-Rubrik noch gar nicht).
4. **Catch Me If You Can von SX7 zu SO7 verschieben** (passt besser, im Zuge von Punkt 1).

## Analyse abgeschlossen: welche 42 Filme wo dupliziert sind + Entscheidung "behalten bei"

(vollständige Liste mit alten Fundstellen wurde interaktiv erarbeitet — bei Bedarf neu ableiten via
`grep -n '"S[EOX][1-9]":' app.js` und die Python-Analyse aus der Session, oder direkt aus
`filme_original_270.json` neu berechnen: für jeden Titel alle Codes sammeln, die ihn enthalten.)

Kurzfassung der Keep-Entscheidungen (Titel → bleibt bei Subtyp X, wird woanders entfernt):
- A Beautiful Mind→SE5, A Star Is Born→SX4, About Time→SX2, About a Boy→SE2, Amour→SE4,
  Arrival→SO5, Call Me by Your Name→SX4, Captain Fantastic→SE6, Chef→SE7, Erin Brockovich→SO1,
  Eternal Sunshine→SX4, Fifty Shades of Grey→SX9 (Dakota Johnson Match), Good Will Hunting→SX5,
  Her→SX9, Hidden Figures→SO2, Invictus→SO9, Julie & Julia→SE1, La La Land→SX2,
  Little Miss Sunshine→SE6, Lost in Translation→SX5, Manchester by the Sea→SE4, Marriage Story→SX1,
  Moneyball→SE3, Nebraska→SE9, Nomadland→SE3, Phantom Thread→SX1, Room→SE6,
  School of Rock→SE2 (Jack Black Match), Selma→SO1, Spotlight→SO1, Sully→SE1, The Blind Side→SE2,
  The Intern→SE1, The Post→SO1, The Pursuit of Happyness→SO2 (Will Smith Match), The Report→SO1,
  The Revenant→SX1 (DiCaprio Match), The Secret Life of Walter Mitty→SE7, The Social Network→SO3,
  The Theory of Everything→SX5, Whiplash→SX1, Yes Man→SX7

## Neue Ersatzfilme pro Subtyp (bereits ausgewählt, Texte noch zu schreiben)

- **SE1** (+2): The Wife (2017), 45 Years (2015)
- **SX1** (+1): Fatal Attraction (1987)
- **SE2** (+2): Wonder (2017), Life as We Know It (2010)
- **SX2** (+Elvis, +1): Say Anything... (1989)
- **SE3** (+4): Margin Call (2011), Boiler Room (2000), American Made (2017), War Dogs (2016)
- **SO3** (+2): The Iron Lady (2011), Miss Sloane (2016)
- **SX3** (Elvis raus, +2): Yesterday (2019), Judy (2019)
- **SE4** (+3): The Hours (2002), Rabbit Hole (2010), A Single Man (2009)
- **SO4** (+1): Mean Girls (2004)
- **SX4** (+1): Shame (2011)
- **SE5** (+6, fast Neuaufbau): Leave No Trace (2018), Nell (1994), Cast Away (2000), Tracks (2013), The Machinist (2004), Wendy and Lucy (2008)
- **SO5** (+4): Interstellar (2014), Gifted (2017), Radioactive (2019), The Aeronauts (2019)
- **SX5** (+5): Before Sunset (2004), Adaptation (2002), Lars and the Real Girl (2007), Robot & Frank (2012), The Skeleton Twins (2014)
- **SE6** (+3): Panic Room (2002), The Road (2009), Take Shelter (2011)
- **SO6** (+6, fast Neuaufbau): Bridge of Spies (2015), The Insider (1999), 13 Hours (2016), United 93 (2006), Deepwater Horizon (2016), Captain Phillips (2013)
- **SX6** (+1): Prisoners (2013)
- **SE7** (+1): Big Night (1996)
- **SO7** (Catch Me If You Can rein, +1): Dolemite Is My Name (2019)
- **SX7** (Catch Me If You Can raus, +5): The Truman Show (1998), Ferris Bueller's Day Off (1986), Good Morning Vietnam (1987), Roman Holiday (1953), The Fisher King (1991)
- **SO8** (+1): Malcolm X (1992)
- **SX8** (+1): Damage (1992)
- **SE9** (+1): Local Hero (1983)
- unverändert (0 neue nötig): SO1, SO2, SE8, SO9, SX9

## Nächste Schritte (in dieser Reihenfolge)

1. Für jeden neuen Film oben: 2-3 Sätze Text schreiben (Psychologie der Figur, warum genau dieser Subtyp — nicht nur Handlung, siehe frühere Nutzer-Vorgabe).
2. Komplettes ENNEAGRAMM_FILME-Objekt in app.js neu zusammensetzen: alte Texte für "kept"-Filme aus `filme_original_270.json` wiederverwenden, neue Texte einsetzen, deutsche Titel aus `filme_de_titles.json` anwenden (Format: title-Feld wird z.B. `"Der Teufel trägt Prada (The Devil Wears Prada)"`, bei Titeln ohne DE-Override bleibt Original-Titel stehen, ohne Klammerzusatz).
3. Dedup-Check per Skript verifizieren (jeder Titel darf nur 1x vorkommen über alle 27 Subtypen).
4. In app.js einsetzen, `node --check`, `cp app.js bundle.js`, lokal testen (Tier-Override `localStorage.setItem('enneagramm-kompass:tier','heilwissen')`, Route `enneagramm-filme-typ-N` für alle 9 Typen stichprobenartig prüfen).
5. Changelog-Eintrag, Versions-Bumps (index.html `?v=`, sw.js BUNDLE_VERSION, APP_BUILD in app.js/bundle.js, version.json) — Checkliste in SECOND_BRAIN.md.
6. Commit + push.
7. Live auf kompass.verlagshausrathmer.com verifizieren.
8. Erst danach: EN-Version der Filme-Rubrik bauen (separates, noch nicht begonnenes Vorhaben).

## Wichtiger Hinweis zu deutschen Titeln

Ich habe nur 52 Titel mit Übersetzung versehen, bei denen ich mir wirklich sicher bin.
Bei den übrigen ~164 (unveränderten + neuen) Filmen bleibt der Originaltitel stehen,
weil viele US-Filme in Deutschland ohnehin unter dem englischen Titel liefen (z.B.
"Whiplash", "Room", "Nightcrawler") — dort wäre eine Klammer-Wiederholung redundant.
Bei Unsicherheit lieber Originaltitel lassen als einen falschen deutschen Titel erfinden.
Der Nutzer könnte diese Liste im nächsten Anlauf gegenlesen wollen.
