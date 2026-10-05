# Sprache & Stil

- App-Texte auf Deutsch, mit korrekten Umlauten und deutscher Typografie.
- Bei JS-Strings: keine deutschen Anführungszeichen `„"` wenn das schließende `"` U+0022 ist — Syntaxfehler. Stattdessen `›...‹` für Zitate innerhalb von Strings verwenden.
- **Anrede in Praxistipps vom Heilpraktiker:** Kein direktes Sie/Du in den Übungsanleitungen — neutraler, unpersönlicher Instruktionsstil (Infinitiv/Passiv, z. B. „den Ball langsam rollen", „tief in den Bauch atmen"), analog zu Faszienübungen für die Rumpfgesundheit. Rahmentext, Einleitung und „Wichtiger Hinweis"-Box bleiben beim **Sie**. Einheitlichkeit über alle Artikel der Rubrik hinweg hat Vorrang vor einem Coaching-Ton in einzelnen Artikeln.
- **Englische Eigennamen/Titel in deutschen Texten nicht übersetzen.** Titel von Filmen, Serien, Songs, Alben, Büchern, Drehbüchern usw., die im Original englisch sind, bleiben in der deutschen Fassung unübersetzt im Original (z. B. "Sling Blade", "Baby Cobra", "Beef" — nicht "Speckseite" oder Ähnliches). Das ist Standard für dieses Projekt und muss nicht bei jedem Porträt neu korrigiert werden.
- **Fremdsprachige Zitate und Werktitel immer mit kurzer Erklärung/Übersetzung versehen — in der jeweiligen Zielsprache des Textes.** Der durchschnittliche Nutzer spricht weder Englisch noch Französisch/Italienisch o. Ä. auf einem Niveau, das ein unübersetztes Zitat oder einen unübersetzten Operntitel versteht. Deshalb gilt für **jede** Rubrik (Berühmte Persönlichkeiten, Krankheitsporträts, Kriminalpsychologie, Astrologie-Analysen, …):
  - In **deutschen** Texten: Ein wörtliches **englisches** Zitat (z. B. aus einer Quelle wie "his obsession with honoring his commitments") bekommt direkt danach eine kurze deutsche Erklärung/Übersetzung, z. B. mit Gedankenstrich abgesetzt: „›obsession with honoring his commitments and fear of disappointing his fans‹ – seine Besessenheit, Verpflichtungen einzuhalten, und seine Angst, seine Fans zu enttäuschen". Ebenso **nicht-englische, nicht-deutsche** Werktitel (Opern, Filme, Bücher in Französisch, Italienisch, Latein usw., z. B. "L'elisir d'amore", "La Juive") bekommen die deutsche Übersetzung in Klammern direkt dahinter: "›L'elisir d'amore‹ (›Der Liebestrank‹)". Das gilt nicht für Titel, die im deutschen Sprachgebrauch ohnehin unübersetzt geläufig sind (z. B. Filmtitel, die auch im deutschen Kino unter Originaltitel liefen — siehe Regel oben zu englischen Titeln).
  - In **englischen** Texten: Englische Zitate bleiben unübersetzt (Originalsprache = Zielsprache). Aber **nicht-englische** Werktitel (Französisch, Italienisch usw.) bekommen ebenfalls eine kurze englische Übersetzung in Klammern dahinter, z. B. "'La Juive' ('The Jewess')" — englischsprachige Nutzer verstehen Französisch/Italienisch in der Regel genauso wenig wie deutschsprachige.
  - Faustregel: Jedes Zitat/jeder Titel, der nicht in der Sprache der aktuellen Textfassung (DE oder EN) steht, braucht eine kurze Klammer-Erklärung in genau dieser Sprache.

# Psychosomatik-Register — Textvielfalt pro Subtyp über eine ganze Kategorie hinweg (Pflichtprüfung vor jedem Commit)

Beim Schreiben der 27 Subtyp-Texte (`typen`-Array) für ein neues Krankheitsbild ist es nicht ausreichend, nur **innerhalb** dieser einen Krankheit auf variierte Formulierungen zu achten. Der eigentliche Fehler, der real aufgetreten ist (Kategorie Verdauungssystem, August 2026): Für denselben Subtyp-Code (z. B. SO4) wurde über 11 verschiedene Krankheiten hinweg praktisch derselbe Satzbau-Schablone wiederverwendet, nur mit ausgetauschtem Substantiv am Ende (z. B. „Die soziale Vier macht ihr Leiden sichtbar und findet darin einen gewissen Ausdruck – dieser Ausdruck nach außen kann als Ventil wirken, das der rein körperlichen X zumindest teilweise entgegenwirkt …" — zehnmal fast wortgleich). Nutzer prüfen typischerweise gezielt ihren eigenen Subtyp über mehrere Krankheiten hinweg (z. B. alle SO4-Texte im Verdauungssystem) — genau dort fällt die Wiederholung sofort auf, auch wenn jede einzelne Krankheitsseite für sich genommen gut variiert wirkt.

**Pflichtschritt vor dem finalen Commit einer Kategorie (oder bei Verdacht):** Für jeden der 27 Subtyp-Codes die Texte über alle Krankheiten der Kategorie hinweg extrahieren und die ersten ~6 Wörter auf Wiederholung prüfen, z. B.:
```bash
python3 -c "
import re
from collections import Counter
with open('bundle.js', encoding='utf-8') as f:
    content = f.read()
start = content.index('  ERSTE_KRANKHEIT: {')
end_block = content.index('\n  },\n', content.index('  LETZTE_KRANKHEIT: {'))
region = content[start:end_block]
codes = ['SE1','SO1','SX1','SE2','SO2','SX2','SE3','SO3','SX3','SE4','SO4','SX4',
         'SE5','SO5','SX5','SE6','SO6','SX6','SE7','SO7','SX7','SE8','SO8','SX8',
         'SE9','SO9','SX9']
for code in codes:
    texts = re.findall(r'\{ code: \"%s\", text: \"([^\"]+)\" \}' % code, region)
    prefixes = [' '.join(t.split()[:6]) for t in texts]
    most_common, cnt = Counter(prefixes).most_common(1)[0]
    if cnt >= 3:
        print(f'{code}: {cnt}/{len(texts)} teilen: {most_common!r}')
"
```
Jeder Treffer mit `cnt >= 3` ist ein Fehler und muss behoben werden, bevor die Kategorie als abgeschlossen gilt — auch wenn das bedeutet, bereits committete Krankheiten dieser Kategorie nachträglich zu überarbeiten.

**Vorbeugung beim Schreiben selbst:** Beim Verfassen einer neuen Krankheit im `typen`-Array bewusst im Kopf behalten (oder kurz nachschlagen), mit welcher Formulierung derselbe Subtyp-Code in den bereits geschriebenen Krankheiten derselben Kategorie begonnen hat, und aktiv eine andere Konstruktion wählen — anderer Satzanfang, andere grammatische Struktur (z. B. nicht immer „Die soziale X macht/lebt/hält …", sondern auch mal mit einer Beobachtung, einem Bild, einer Frage, einer Gegenüberstellung beginnen). Diese Pflicht gilt zusätzlich zur bereits bestehenden Regel, dass die Einleitungssätze innerhalb einer einzigen Krankheit nicht wortgleich aus der letzten Krankheit desselben Subtyps kopiert werden dürfen (siehe `feedback_tier_einleitung_variieren` in der Memory) — hier geht es um die zusätzliche, größere Gefahrenzone über eine ganze Kategorie (10+ Krankheiten) hinweg, die leicht übersehen wird, weil man beim Schreiben einer einzelnen Krankheit nicht mehr alle vorherigen Krankheiten der Kategorie im Blick hat.
