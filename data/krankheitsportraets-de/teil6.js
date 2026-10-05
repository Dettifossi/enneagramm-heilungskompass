import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function anthonyHopkinsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-anthony-hopkins-portrait.jpg" alt="Anthony Hopkins" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anthony Hopkins</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · geb. 1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Anthony Hopkins</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-anthony-hopkins">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort kurz umrissen wird: eine schwere Alkoholerkrankung, die
        Hopkins 1975 an einen Wendepunkt brachte – seither lebt er, nach eigener Aussage,
        ununterbrochen nüchtern.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hopkins</strong> ist dem <strong>selbsterhaltenden Typ 1 mit
        Neunerflügel</strong> zugeordnet. Die SE1 sucht Sicherheit durch Kontrolle und
        Disziplin; der Neunerflügel bringt Gelassenheit und die Fähigkeit hinzu, einmal
        gefasste Prinzipien geduldig und ohne großes Aufheben durchzuhalten. Genau diese
        Kombination – stille, unbeirrbare Disziplin – bestimmte, wie Hopkins über
        Jahrzehnte mit seiner eigenen Suchterkrankung umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrelanger Alkoholkonsum in den 1960er- und 1970er-Jahren:</strong>
        Hopkins beschrieb später selbst, dass Alkohol über Jahre ein zunehmend
        beherrschendes Element seines Lebens und seiner beginnenden Schauspielkarriere
        war.</p>
        <p class="vb-intro"><strong>b) Ein selbst beschriebener Tiefpunkt:</strong>
        Nach eigener Schilderung erreichte die Erkrankung 1975 einen Punkt, an dem Hopkins
        sich an einen einschneidenden Wendepunkt erinnert, der ihn zur Abstinenz bewog.</p>
        <p class="vb-intro"><strong>c) Entscheidung für vollständige Abstinenz:</strong>
        Hopkins traf die Entscheidung, vollständig auf Alkohol zu verzichten – keine
        schrittweise Reduzierung, sondern ein klarer Schnitt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Über 50 Jahre durchgehende Nüchternheit:</strong>
        Nach eigenen Angaben blieb Hopkins seit 1975 ununterbrochen nüchtern – ein
        Zeitraum von inzwischen fünf Jahrzehnten.</p>
        <p class="vb-intro"><strong>b) Wiederholte öffentliche Erwähnung der eigenen Geschichte:</strong>
        Hopkins sprach in Interviews über die Jahrzehnte hinweg wiederholt offen über
        seine frühere Alkoholerkrankung und die eigene Abstinenz.</p>
        <p class="vb-intro"><strong>c) Ungebrochene, sogar wachsende künstlerische Produktivität:</strong>
        Die international bedeutendsten Rollen seiner Karriere entstanden nach 1975 –
        die Abstinenz fiel zeitlich mit dem Aufstieg zu Weltruhm zusammen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein dramatisiertes Bekenntnis, sondern nüchterne Feststellung:</strong>
        Hopkins sprach über seine Suchtgeschichte in der Regel sachlich, ohne die eigene
        Geschichte zum zentralen Element seiner öffentlichen Person zu machen.</p>
        <p class="vb-intro"><strong>b) Disziplinierte tägliche Routinen:</strong>
        Berichten zufolge pflegt Hopkins bis heute feste, disziplinierte Tagesabläufe –
        ein Muster, das mit seiner langjährigen Abstinenz in Einklang steht.</p>
        <p class="vb-intro"><strong>c) Weiterhin aktiv im hohen Alter:</strong>
        Auch mit über 85 Jahren blieb Hopkins schauspielerisch aktiv, ohne die eigene
        Arbeitsdisziplin sichtbar zu reduzieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Vorbild für langfristige Abstinenz:</strong>
        Hopkins' über fünfzigjährige Nüchternheit wird in Medienberichten regelmäßig als
        außergewöhnlich langer, stabiler Genesungsweg hervorgehoben.</p>
        <p class="vb-intro"><strong>b) Keine erkennbare Zäsur im künstlerischen Werk:</strong>
        Anders als bei manchen anderen Suchtgeschichten zeigt Hopkins' Filmografie keinen
        Bruch, sondern einen kontinuierlichen Aufstieg nach dem Wendepunkt 1975.</p>
        <p class="vb-intro"><strong>c) Öffentliche Ermutigung anderer Betroffener:</strong>
        Hopkins' offene, aber unaufgeregte Art, über seine Geschichte zu sprechen, wurde
        wiederholt als ermutigendes Beispiel für andere Menschen mit Suchterkrankungen
        aufgegriffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle als Antwort auf die eigene Sucht:</strong>
        Dieselbe SE1-Überzeugung, dass Sicherheit durch Disziplin entsteht, bestimmte
        Hopkins' Reaktion auf die eigene Alkoholerkrankung – ein klarer, kontrollierter
        Schnitt statt eines schrittweisen, unsicheren Prozesses.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die geduldige, unaufgeregte Durchhaltung:</strong>
        Die Gelassenheit des Neunerflügels zeigte sich darin, dass Hopkins seine
        Abstinenz über Jahrzehnte ohne öffentliches Drama durchhielt – stille Beharrlichkeit
        statt dramatischer Rückfälle und Wiederaufstiege.</p>
        <p class="vb-intro"><strong>c) Prinzipientreue, die keine Ausnahmen kennt:</strong>
        Die für die Eins typische Prinzipientreue erklärt, warum Hopkins seit dem
        einmal gefassten Entschluss offenbar keine Rückfälle öffentlich bekannt gemacht
        hat.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kontrolle, die zum lebenslangen Prinzip wurde:</strong>
        Hopkins' gesamtes späteres Leben und Werk ist von einer Disziplin geprägt, die
        sich in derselben Konsequenz zeigt wie sein einmal gefasster Entschluss zur
        Abstinenz – die Kontrolle über den eigenen Körper wurde zum Fundament seiner
        gesamten weiteren Karriere.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer</a> (ebenfalls SE1w9) reagierte auf den schweren Autounfall 1917 und die
        spätere NS-Verfolgung mit derselben stillen, unbeirrbaren Disziplin, ohne die
        eigene Verletzlichkeit öffentlich zum Thema zu machen; Hopkins reagierte auf seine
        eigene Suchterkrankung mit einer strukturell verwandten Haltung – ein einmal
        gefasster Entschluss, konsequent und ohne öffentliches Aufheben durchgehalten.
        Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Krankheitsporträt zu Konrad Adenauer</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Hopkins' Fall zeigen lässt, ist ein
        Muster im Umgang mit einer überwundenen Sucht, das bei einer ausgeprägten
        selbsterhaltenden Eins mit Neunerflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hopkins kennt sein eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins mit Neunerflügel hält reflexhaft an einmal gefassten
        Prinzipien fest, statt sie je infrage zu stellen, und lebt genau dieses Muster
        seit fünf Jahrzehnten unverändert aus. Wer die eigene Neigung zu unbedingter
        Prinzipientreue nicht als Muster erkennt, profitiert dennoch oft gerade davon,
        wenn das Prinzip die richtige Richtung hat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Eins mit Neunerflügel erklärt bei <strong>Anthony
        Hopkins</strong> vieles am Umgang mit der eigenen Suchterkrankung: ein Mann, dessen
        Sicherheit auf Disziplin beruht, verwandelte einen einzigen Wendepunkt in fünf
        Jahrzehnte ununterbrochene Konsequenz – der Adler, der einmal Kurs genommen hat und
        seither nicht mehr abweicht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsporträt: Konrad Adenauer (SE1w9) – dieselbe stille Prinzipientreue"},
        {route:"beruehmte-heinz-ruehmann", label:"Porträt: Heinz Rühmann (SE1w9) – ebenfalls Schauspieler, dieselbe stille Disziplin"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function byronKatieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-byron-katie-portrait.jpg" alt="Byron Katie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Byron Katie</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · geb. 1942</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Byron Katie</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-byron-katie">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um ihre Methode
        "The Work". Diese Seite vertieft ein Kapitel, das dort knapp angedeutet wird: eine
        Jahrzehnte andauernde, schwere Depression mit Agoraphobie in den 1960er- bis
        1980er-Jahren, aus der heraus sie 1986 den entscheidenden Wendepunkt ihres Lebens
        beschreibt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Byron Katie</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet. Die SX6 sucht Sicherheit, indem sie der eigenen Angst frontal
        begegnet, statt ihr auszuweichen; der Siebenerflügel bringt eine rastlose,
        appetitive Suche nach dem nächsten Verständnis hinzu. Genau diese Kombination –
        die eigene Angst nicht zu vermeiden, sondern sich ihr direkt zu stellen –
        bestimmte, wie sie schließlich aus ihrer eigenen, jahrzehntelangen Depression
        herausfand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginnende schwere Depression in den 1960er-Jahren:</strong>
        Byron Katie beschreibt in eigenen Schilderungen eine sich über Jahre verschärfende
        Depression, die schließlich in Verzweiflung und Suizidgedanken mündete.</p>
        <p class="vb-intro"><strong>b) Zunehmende Agoraphobie:</strong>
        Zur Depression gesellte sich eine ausgeprägte Angst vor dem Verlassen des eigenen
        Zuhauses, die ihren Alltag über Jahre stark einschränkte.</p>
        <p class="vb-intro"><strong>c) Zehn Jahre nahezu durchgehende Verzweiflung:</strong>
        Nach eigener Schilderung erstreckte sich diese Phase über etwa ein Jahrzehnt,
        bevor es 1986 zu einer entscheidenden Wende kam.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Aufenthalt in einer Einrichtung für Essstörungen:</strong>
        Byron Katie beschreibt einen einschneidenden Moment 1986 in einer solchen
        Einrichtung, in dem sich ihre innere Verfassung grundlegend veränderte.</p>
        <p class="vb-intro"><strong>b) Ein selbst beschriebenes "Aufwachen":</strong>
        Sie beschreibt diesen Moment als abruptes Ende der jahrelangen Verzweiflung und
        Beginn einer radikal veränderten Sichtweise auf die eigenen Gedanken.</p>
        <p class="vb-intro"><strong>c) Entwicklung einer eigenen Methode aus der Erfahrung:</strong>
        Aus dieser persönlichen Krise heraus entwickelte sie die später weltweit
        verbreitete Fragemethode "The Work".</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ausführliche schriftliche Verarbeitung:</strong>
        Byron Katie beschreibt ihre depressive Phase und den Wendepunkt in mehreren
        eigenen Büchern sehr detailliert – kein verschwiegenes, sondern ein zentrales
        Kapitel ihrer öffentlichen Biografie.</p>
        <p class="vb-intro"><strong>b) Die Krise als Ausgangspunkt der späteren Lehre:</strong>
        Anders als bei vielen anderen Krankheitsverläufen wird die frühere Depression bei
        ihr nicht verdrängt, sondern als notwendiger Ursprung der eigenen Methode erzählt.</p>
        <p class="vb-intro"><strong>c) Weltweite Verbreitung der aus der Krise entstandenen Methode:</strong>
        "The Work" wird seither international in Workshops und Büchern gelehrt – direkt
        zurückgeführt auf die eigene, überwundene Verzweiflung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Krise, die zur Grundlage einer Lehre wurde:</strong>
        Byron Katies eigene Depression und ihr Ende bilden bis heute den zentralen
        Referenzpunkt, mit dem sie ihre Methode einführt und erklärt.</p>
        <p class="vb-intro"><strong>b) Große öffentliche Reichweite:</strong>
        Millionen Menschen weltweit kamen über Bücher, Workshops und Seminare mit "The
        Work" in Berührung – einer Methode, die unmittelbar aus einer persönlichen
        psychischen Krise hervorging.</p>
        <p class="vb-intro"><strong>c) Keine Rückkehr zur früheren depressiven Verfassung:</strong>
        In eigenen späteren Darstellungen beschreibt sie den Wendepunkt 1986 als
        dauerhaft, nicht als vorübergehende Besserung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Angst, die frontal statt ausweichend angegangen wurde:</strong>
        Dieselbe SX6-Energie, die Angst nicht vermeidet, sondern direkt konfrontiert,
        zeigte sich in Byron Katies radikaler Infragestellung der eigenen Gedanken, statt
        sie länger zu verdrängen.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und der Hunger nach neuem Verständnis:</strong>
        Die appetitive Energie des Siebenerflügels zeigte sich darin, dass aus der
        persönlichen Krise sofort eine neue, weit ausgreifende Methode entstand, statt bei
        der bloßen persönlichen Genesung stehenzubleiben.</p>
        <p class="vb-intro"><strong>c) Direkte Konfrontation statt schrittweiser Bewältigung:</strong>
        Der von ihr beschriebene abrupte, radikale Wendepunkt passt zur SX6-typischen
        Neigung, sich der eigenen Angst nicht allmählich, sondern in einem entschiedenen
        Moment zu stellen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der die eigene Angst schließlich befragte, statt ihr zu glauben:</strong>
        Byron Katies gesamte spätere Lehre beruht auf dem Infragestellen belastender
        Gedanken – eine Methode, die direkt aus dem Umgang mit den eigenen, über zehn Jahre
        quälenden Gedanken während ihrer Depression entstand.</p>
        <p class="vb-intro"><strong>b) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu Depression
        oder Agoraphobie führt – <strong>jeder Mensch kann jede psychische Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Byron Katies Fall zeigen
        lässt, ist ein Muster im Umgang mit einer überwundenen psychischen Krise, das bei
        einer ausgeprägten sexuellen Sechs mit Siebenerflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) Die unbewusste Fixierung als eigener Faktor:</strong>
        Byron Katie kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die sexuelle
        Sechs mit Siebenerflügel begegnet reflexhaft der eigenen Angst frontal, statt ihr
        auszuweichen, und genau dieses Muster prägt ihre Lehre bis heute, Jahrzehnte nach
        dem eigenen Wendepunkt. Wer die eigene Neigung zur direkten Konfrontation mit der
        Angst nicht als Muster erkennt, wiederholt dennoch oft genau diesen Mechanismus,
        wenn eine neue Krise auftritt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sechs mit Siebenerflügel erklärt bei <strong>Byron Katie</strong>
        vieles am Verlauf ihrer eigenen psychischen Krise: eine Frau, deren gesamte
        spätere Lehre auf der direkten Konfrontation mit belastenden Gedanken beruht,
        fand genau diesen Weg zuerst in der eigenen, zehnjährigen Verzweiflung – der
        Wolf, der sich der Bedrohung nicht entzieht, sondern ihr entgegentritt, bis sie
        sich als bloßer Gedanke entpuppt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-byron-katie", label:"Porträt: Byron Katie (SX6w7)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function davidBowieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-bowie-portrait.jpg" alt="David Bowie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Bowie</p>
        <p class="krim-portrait-typ">SO1w2 · Sozialer Typ 1 mit Zweierflügel · 1947–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Bowie</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-david-bowie">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur am Rande
        vorkommt: 18 Monate lang kämpfte Bowie im Verborgenen gegen Leberkrebs, ohne dass
        Öffentlichkeit oder die meisten seiner engsten Mitarbeiter davon wussten – und
        verwandelte die Diagnose in sein letztes, bewusst komponiertes Werk.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bowie</strong> ist der <strong>sozialen Eins mit Zweierflügel</strong>
        zugeordnet. Naranjo beschrieb die soziale Eins als den Subtyp, der seinen
        Vollkommenheitsanspruch nicht primär nach innen, sondern an das Kollektiv richtet – als
        Botschaft, als Korrektiv, als bewusst gesetztes Beispiel. Der Zweierflügel bringt echte
        menschliche Wärme hinzu, die Fähigkeit, nicht nur für ein Ideal zu kämpfen, sondern
        anderen Menschen konkret etwas zu geben – auch im eigenen Sterben blieb Bowie dieser
        Geste treu.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nach außen gerichtet, auf Wirkung bedacht:</strong>
        Bowies Blick galt zeitlebens der Frage, welche Botschaft er der Öffentlichkeit
        vermitteln wollte – diese Haltung veränderte sich auch angesichts der eigenen
        Sterblichkeit nicht.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Erzählung bis zuletzt:</strong>
        Statt die Diagnose öffentlich zu machen oder sie dem Zufall der Gerüchteküche zu
        überlassen, entschied Bowie, wann, wie und in welcher künstlerischen Form die Welt
        davon erfahren sollte.</p>
        <p class="vb-intro"><strong>c) Verschlüsselte statt direkte Kommunikation:</strong>
        Anders als bei anderen Krankheitsporträts dieses Kompasses, in denen Betroffene ihre
        Diagnose direkt benannten, wählte Bowie den Umweg über Kunst – ein für die soziale Eins
        typischer Weg, eine Botschaft nicht roh, sondern in eine bewusst geformte Aussage zu
        kleiden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Diagnose als Auftakt zu einem letzten Projekt:</strong>
        2014 wurde bei Bowie Leberkrebs diagnostiziert. Statt sich zurückzuziehen, begann er
        unmittelbar mit der Arbeit an einem letzten großen künstlerischen Statement.</p>
        <p class="vb-intro"><strong>b) Radikale Geheimhaltung:</strong>
        Selbst enge Mitarbeiter und Musiker, die mit ihm im Studio saßen, wussten über weite
        Strecken nichts von der Diagnose – eine für die soziale Eins ungewöhnliche, aber
        bewusste Entscheidung: Die private Krankheit sollte die öffentliche Botschaft nicht
        überschatten.</p>
        <p class="vb-intro"><strong>c) Zwei parallele letzte Werke:</strong>
        Neben dem Album <em>Blackstar</em> entstand zeitgleich das Musical <em>Lazarus</em>
        (2015) – beide Werke kreisen unverkennbar um Tod, Abschied und Verwandlung, Jahre bevor
        die Öffentlichkeit den Grund dafür kannte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Blackstar als bewusst gesetzter Schlusspunkt:</strong>
        Das Album erschien am 8. Januar 2016, an Bowies 69. Geburtstag – zwei Tage vor seinem
        Tod. Der Zeitpunkt war kein Zufall, sondern letzte, präzise Regie über die eigene
        Geschichte.</p>
        <p class="vb-intro"><strong>b) Lazarus als unverhüllte Selbstdeutung:</strong>
        Im Video zur Single <em>Lazarus</em> liegt Bowie in einem Krankenbett, mit
        verbundenen Augen, und singt: &bdquo;Look up here, I'm in heaven.&ldquo; Erst nach
        seinem Tod erkannte die Öffentlichkeit, wie unmittelbar dieses Bild seine tatsächliche
        Situation beschrieb.</p>
        <p class="vb-intro"><strong>c) Produzent Tony Visconti als Mitwisser:</strong>
        Nur ein kleiner, ausgewählter Kreis um Produzent Tony Visconti wusste von der Diagnose
        und half, das letzte Werk exakt so zu gestalten, wie Bowie es sich vorstellte – ein
        letztes Beispiel seiner lebenslangen Fähigkeit, andere Künstler in sein Projekt
        einzubinden, ohne selbst die Kontrolle abzugeben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das sich erst nach dem Tod vollständig erschloss:</strong>
        Erst als am 10. Januar 2016 Bowies Tod bekannt wurde, verstand die Öffentlichkeit
        <em>Blackstar</em> als das, was es tatsächlich war – ein bewusst komponiertes
        Abschiedswerk, kein gewöhnliches Album.</p>
        <p class="vb-intro"><strong>b) Kritische Neubewertung binnen Stunden:</strong>
        Musikkritiker, die das Album zwei Tage zuvor noch als rätselhaft und düster
        beschrieben hatten, lasen es nach der Todesnachricht neu – ein seltener Fall, in dem
        sich die öffentliche Deutung eines Kunstwerks binnen 48 Stunden vollständig
        verschob.</p>
        <p class="vb-intro"><strong>c) Eine letzte Botschaft an ein globales Publikum:</strong>
        Mit <em>Blackstar</em> gelang Bowie noch einmal genau das, was sein gesamtes Werk
        auszeichnete: einen Raum zu öffnen, den vorher niemand betreten hatte – diesmal den
        Raum des öffentlich gestalteten eigenen Sterbens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Höchste Schaffenskraft trotz fortschreitender Krankheit:</strong>
        In den letzten 18 Lebensmonaten produzierte Bowie zwei vollständige, komplexe Werke –
        ein Arbeitspensum, das viele gesunde Künstler nicht erreichen.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Sterben und künstlerischer Aussage:</strong>
        Für Bowie gab es keine Trennung zwischen dem eigenen körperlichen Verfall und dem
        Inhalt seiner Kunst – beides wurde zu ein und demselben letzten Statement.</p>
        <p class="vb-intro"><strong>c) Energie, die bis zum letzten Moment kanalisiert blieb:</strong>
        Auch als der Körper zunehmend schwächer wurde, blieb die kreative Energie auf ein
        einziges, klar umrissenes Ziel gerichtet – das fertige, veröffentlichte Werk.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) 18 Monate im Verborgenen:</strong>
        Von der Diagnose 2014 bis zu seinem Tod am 10. Januar 2016 hielt Bowie seine
        Erkrankung nahezu vollständig geheim – nur ein enger Kreis von Vertrauten wusste
        davon.</p>
        <p class="vb-intro"><strong>b) Zwei Tage zwischen Werk und Tod:</strong>
        <em>Blackstar</em> erschien am 8. Januar 2016, Bowie starb am 10. Januar – ein zeitlicher
        Abstand, der zeigt, wie präzise er den Zeitpunkt der Veröffentlichung noch selbst
        bestimmte, während sein Körper bereits im Sterben lag.</p>
        <p class="vb-intro"><strong>c) Verschlüsselung statt Ankündigung:</strong>
        Anders als Ronald Reagan, der seine Diagnose in einem direkten Brief an die
        Öffentlichkeit richtete, wählte Bowie den entgegengesetzten Weg: Er verschlüsselte die
        eigene Sterblichkeit in Musik, Text und Bild, statt sie unmittelbar auszusprechen – für
        die soziale Eins typisch, deren Botschaften an das Kollektiv selten roh, sondern fast
        immer kunstvoll geformt daherkommen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine letzte Verwandlung?</strong>
        Bowies gesamtes künstlerisches Leben bestand aus einer Kette bewusster Verwandlungen –
        Ziggy Stardust, der Thin White Duke, der Berliner Elektronik-Experimentator –, jede
        davon ein Raum, den er für andere öffnete, lange bevor sie wussten, dass sie ihn
        brauchten. Die eigene Sterblichkeit wurde zu seiner letzten, konsequentesten
        Verwandlung: Er inszenierte sein eigenes Sterben nicht als privaten Verfall, sondern
        als ein weiteres, letztes öffentliches Statement, komponiert mit derselben Präzision
        wie jede Rolle zuvor. Für eine soziale Eins, deren Leidenschaft der Zorn ist – der
        unbedingte Wille, etwas Wichtiges korrekt und vollständig an die Welt weiterzugeben –
        liegt es nahe, gerade im eigenen Tod die letzte, radikalste Form dieses Musters zu
        lesen: Selbst das Unausweichliche wurde nicht dem Zufall überlassen, sondern bis zur
        letzten Sekunde gestaltet. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu Krebserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Bowies Fall zeigen lässt, ist ein Muster, das bei dem
        Bedürfnis, selbst die eigene Sterblichkeit noch als bewusst gestaltete Botschaft an ein
        Publikum zu formen, in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bowie kannte sein eigenes Muster nicht – die soziale Eins mit Zweierflügel will die eigene Wirkung bis zuletzt kontrollieren und gestalten, und genau das tat er, indem er die tödliche Diagnose zu seinem letzten, makellos komponierten Werk verarbeitete, statt sich öffentlich verletzlich zu zeigen. Wer das eigene Kontrollbedürfnis nicht als Muster erkennt, gestaltet noch den eigenen Tod, statt ihn einfach geschehen zu lassen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Bowies</strong> soziale Eins mit Zweierflügel setzte sich bis zuletzt in der
        eigenen Erkrankung fort: eine Diagnose, die er nicht direkt aussprach, sondern in
        sein letztes, kunstvoll geformtes Werk verwandelte, und ein Sterben, das er bis zum
        letzten Tag selbst inszenierte, statt es dem Zufall zu überlassen. Die Gans, die ihr
        Leben lang für die Formation anderer rief, öffnete mit ihrem letzten Ruf noch einmal
        einen Raum, den vorher niemand betreten hatte – den Raum des öffentlich gestalteten
        eigenen Todes.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-david-bowie", label:"Porträt: David Bowie (SO1w2) – Lebenswerk"},
        {route:"krankheitsportraets-steve-jobs", label:"Krankheitsporträt: Steve Jobs (SO1w2) – gleiches Muster: Kontrolle über die eigene Krankheit"},
        {route:"krankheitsportraets-ronald-reagan", label:"Krankheitsporträt: Ronald Reagan (SO9w8) – Gegenmodell: direkte statt verschlüsselte Offenlegung"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

export function elvisPresleyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elvis-presley-portrait.jpg" alt="Elvis Presley" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elvis Presley</p>
        <p class="krim-portrait-typ">SX2w3 · Sexueller Typ 2 mit Dreierflügel · 1935–1977</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kamel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Tierentsprechung: Kamel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elvis Presley</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elvis-presley">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier rückt ein Kapitel in den Vordergrund, das dort kaum berührt wird: ein
        über ein Jahrzehnt eskalierender körperlicher Verfall durch Medikamentenabhängigkeit,
        der 1977 mit nur 42 Jahren zu seinem Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Elvis</strong> ist dem <strong>sexuellen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SX2 richtet die Fürsorge und Verführungskraft der Zwei ganz auf die
        eine, exklusive Verbindung – auf das Publikum als kollektiven Liebespartner, dem
        vollständige Hingabe gilt. Der Dreierflügel bringt den unbedingten Willen zum
        sichtbaren Erfolg hinzu, verbunden mit der Weigerung, dem Publikum je ein Nachlassen
        der eigenen Strahlkraft zuzumuten. Genau dieses Muster trieb Elvis noch auf die Bühne,
        als sein Körper längst zusammenbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Das Publikum vor dem eigenen Körper:</strong>
        Elvis' Blick galt bis zuletzt der Frage, was sein Publikum von ihm erwartete – nicht
        der Frage, was sein Körper noch leisten konnte.</p>
        <p class="vb-intro"><strong>b) Verfall, der auf der Bühne unübersehbar wurde:</strong>
        Seine frühere Begleiterin Linda Thompson beschrieb seinen Anblick im CBS-Special
        "Elvis in Concert" später als erschreckend – ein Mann, der binnen weniger Monate
        kaum wiederzuerkennen war.</p>
        <p class="vb-intro"><strong>c) Auftreten trotz sichtbarer Erschöpfung:</strong>
        Von der ersten Konzertnacht dieser letzten Tournee in Omaha im Juni 1977 konnte kaum
        Bildmaterial verwendet werden – die Aufführung galt als zu schwach, um sie zu zeigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Wendepunkt im Jahr 1967:</strong>
        Sein Leibarzt George Nichopoulos, genannt "Dr. Nick", begann Elvis 1967 wegen
        Schmerzen zu behandeln – aus heutiger Sicht der Beginn einer sich über ein Jahrzehnt
        steigernden Medikamentenabhängigkeit.</p>
        <p class="vb-intro"><strong>b) Fast 19.000 verschriebene Dosen:</strong>
        In den letzten 31 Monaten vor seinem Tod erhielt Elvis Berichten zufolge rund 19.000
        Dosen verschreibungspflichtiger Medikamente – Sedativa, Amphetamine, Tranquilizer und
        Opioide.</p>
        <p class="vb-intro"><strong>c) Beschleunigung nach der Scheidung 1973:</strong>
        Nach der Trennung von Priscilla Presley im Oktober 1973 verschärften sich Gewichtszunahme
        und Medikamentenkonsum deutlich – ein Einschnitt, den mehrere Quellen als
        Beschleuniger seines Verfalls benennen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein stark vergrößerter Dickdarm:</strong>
        Die Autopsie ergab ein sogenanntes Megakolon – mit fünf bis sechs Zoll Durchmesser
        und acht bis neun Fuß Länge weit über dem Normalmaß, gefüllt mit teils Monate altem
        Stuhl.</p>
        <p class="vb-intro"><strong>b) Ein deutlich vergrößertes Herz:</strong>
        Die Autopsie stellte zudem ein Herz fest, das etwa doppelt so groß war wie normal –
        ein Befund, der auf jahrelange kardiologische Überlastung hindeutet.</p>
        <p class="vb-intro"><strong>c) Vier Krankenhausaufenthalte in fünf Jahren:</strong>
        In seinen letzten fünf Lebensjahren wurde Elvis mehrfach wegen Bluthochdruck und
        Darmkomplikationen stationär behandelt – ohne dass dies seinen Tourplan dauerhaft
        veränderte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Toxikologie mit vierzehn Substanzen:</strong>
        Im Blut wurden nach seinem Tod vierzehn verschiedene Medikamente nachgewiesen, die
        Codein-Konzentration lag rund zehnmal über dem therapeutischen Bereich.</p>
        <p class="vb-intro"><strong>b) Eine bis heute umstrittene offizielle Todesursache:</strong>
        Die Autopsie nannte eine Herzrhythmusstörung auf Basis einer bluthochdruckbedingten
        Herzerkrankung als Todesursache – viele Fachleute sehen dagegen das Zusammenwirken
        mehrerer Medikamente als zentralen Faktor, eine bis heute nicht einheitlich geklärte
        Kontroverse.</p>
        <p class="vb-intro"><strong>c) Ein Arzt, der später seine Approbation verlor:</strong>
        "Dr. Nick" wurde 1980 wegen Überverschreibung angeklagt, aber freigesprochen; 1993
        wurde ihm die ärztliche Zulassung schließlich entzogen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Bühnenpräsenz als letzte Konstante:</strong>
        Selbst als Gesundheit und Körper offensichtlich zusammenbrachen, blieb der Auftritt
        vor Publikum die eine Sache, die Elvis nicht aufgab – die Dreierflügel-Energie der
        SX2 in ihrer kompromisslosesten Form.</p>
        <p class="vb-intro"><strong>b) Medikamente als Mittel, die Bühne zu erreichen:</strong>
        Die verschriebenen Substanzen dienten offenbar zunehmend nicht der Genesung, sondern
        der bloßen Funktionsfähigkeit für den nächsten Auftritt – ein Kreislauf, der sich
        selbst verstärkte.</p>
        <p class="vb-intro"><strong>c) Das Kamel, das seine letzte Reserve für das Publikum aufbrauchte:</strong>
        Die Hingabe an die eine große Beziehung – an das Publikum als Ganzes – wurde bis zum
        Schluss aufrechterhalten, selbst als der Körper längst keine Reserven mehr besaß.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Jahrzehnt schleichender Eskalation:</strong>
        Von den ersten Verschreibungen 1967 bis zu seinem Tod 1977 zieht sich eine
        durchgehende, sich stetig verschärfende Linie durch Elvis' letztes Lebensjahrzehnt.</p>
        <p class="vb-intro"><strong>b) Auftreten statt Rückzug, bis zum Ende:</strong>
        Anders als bei Krankheitsporträts, in denen sich Betroffene zumindest zeitweise aus
        der Öffentlichkeit zurückzogen, tourte Elvis nahezu ununterbrochen weiter – ein
        Verhalten, das eher in Richtung des Stresspunkts der SX2, der Acht, verweist:
        trotziges Weitermachen trotz eindeutiger Warnsignale, statt Kontrolle abzugeben.</p>
        <p class="vb-intro"><strong>c) Sichtbarer Verfall, öffentlich kaum benannt:</strong>
        Der körperliche Zustand war für sein Umfeld unübersehbar, wurde aber lange nicht
        offen thematisiert – eine kollektive Verleugnung, die zum Fortbestehen des Musters
        beitrug.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Herz und Darm?</strong>
        Für eine sexuelle Zwei mit Dreierflügel, deren gesamte Identität an der einen
        großen, hingebungsvollen Verbindung zum Publikum hing, liegt eine Deutung nahe: Das
        Herz, Organ der Zuwendung und Hingabe, und der Darm, Organ der Verarbeitung dessen,
        was von außen aufgenommen wird, versagten gemeinsam – als hätte ein Leben, das
        ausschließlich auf das Geben an andere ausgerichtet war, irgendwann nichts mehr für
        sich selbst übrig gehabt, um zu verarbeiten oder zu verkraften. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Zwei zwangsläufig zu
        Medikamentenabhängigkeit oder Herz-Kreislauf-Erkrankungen führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Elvis' Fall zeigen lässt, ist ein Muster, das bei der kompromisslosen
        Priorisierung der Bühnenpräsenz über die eigenen körperlichen Warnsignale hinweg in
        der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Presley kannte sein eigenes Muster nicht – die sexuelle Zwei mit Dreierflügel lebt für die unmittelbare Verbindung mit dem Publikum, und genau dieser Antrieb hielt ihn auf Tournee, während sein Körper sichtbar zusammenbrach. Wer das eigene Bedürfnis nach Verbindung nicht als Muster erkennt, tauscht die eigene Gesundheit gegen den nächsten Applaus.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Elvis'</strong> sexueller Typ 2 mit Dreierflügel fand seine letzte,
        konsequenteste Ausprägung in der eigenen Erkrankung: eine über ein Jahrzehnt eskalierende
        Medikamentenabhängigkeit, ein Körper, der auf der Bühne bis zuletzt für ein
        Publikum funktionieren musste, und ein Tod 1977, dessen genaue Ursache bis heute
        diskutiert wird. Das Kamel, das seine letzte Kraft für die eine große Verbindung
        aufbrauchte, die es nie aufzugeben bereit war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elvis-presley", label:"Porträt: Elvis Presley (SX2w3) – Lebenswerk"},
        {route:"krankheitsportraets-sammy-davis-jr", label:"Krankheitsporträt: Sammy Davis Jr. (SX2w3)"},
        {route:"krankheitsportraets-giacomo-casanova", label:"Krankheitsporträt: Giacomo Casanova (SX2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx2", label:"Subtyp-Profil SX2"},
      ])}
    </div>
  `);
}

export function franzSchubertKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-schubert-portrait.jpg" alt="Franz Schubert – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Schubert</p>
        <p class="krim-portrait-typ">SE6w5 · Selbsterhaltender Typ 6 mit Fünferflügel · 1797–1828</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Schubert</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-franz-schubert">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk. Diese
        Seite rückt ein Kapitel ins Zentrum, das dort nur nebenbei erwähnt wird: Im Spätsommer 1822
        infizierte sich Schubert vermutlich mit Syphilis. Über sechs Jahre komponierte er
        zwischen Erschöpfungsphasen und Rückfällen einige seiner bedeutendsten Werke, ehe
        er 1828 im Alter von nur 31 Jahren starb – als offizielle Todesursache galt damals
        Typhus, während die medizinhistorische Forschung bis heute auch Spätfolgen der
        Syphilis und der damals üblichen quecksilberhaltigen Behandlung diskutiert.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schubert</strong> ist dem <strong>selbsterhaltenden Typ 6 mit
        Fünferflügel</strong> zugeordnet. Naranjo nannte die selbsterhaltende Sechs
        <em>Wärme</em>: Sicherheit entsteht nicht durch Kontrolle oder Regeln, sondern durch
        echte, enge menschliche Zugehörigkeit – ein kleiner, verlässlicher Kreis, der
        Geborgenheit gibt. Der Fünferflügel bringt Rückzug und intellektuelle Verarbeitung
        hinzu: Schuberts engster Kreis, die Schubertiaden im privaten Rahmen, wurde zum Ort,
        an dem sich Angst und Sehnsucht in Musik verwandeln ließen, während er sich
        öffentlich fast unsichtbar hielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Infektion im Spätsommer 1822:</strong>
        Schubert infizierte sich vermutlich im Herbst oder Winter 1822 mit Syphilis, erste
        Symptome zeigten sich im Dezember desselben Jahres – zu einer Zeit, als er bereits
        an der <em>Unvollendeten</em> arbeitete.</p>
        <p class="vb-intro"><strong>b) Klinikeinweisung im Februar 1823:</strong>
        Starke Stimmungsschwankungen, Kopfschmerzen und Schwindel führten im Februar 1823 zu
        einer Einweisung ins Wiener Allgemeine Krankenhaus, wo die Diagnose gestellt wurde –
        ein junger Komponist, der plötzlich mit einer stigmatisierten, unheilbaren Krankheit
        konfrontiert war.</p>
        <p class="vb-intro"><strong>c) Behandlung, die die Lage eher verschlimmerte:</strong>
        Die damals übliche Therapie mit quecksilberhaltigen Präparaten trug nach heutigem
        medizinischem Verständnis eher zur weiteren Schwächung seines Körpers bei, als ihn
        zu heilen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Sechs Jahre zwischen Erholung und Rückfall:</strong>
        Von 1823 bis zu seinem Tod 1828 wechselten sich bei Schubert Phasen relativer
        Erholung mit erneuten Krankheitsschüben ab – ein unsicherer, nie ganz stabiler
        Gesundheitszustand über seine letzten sechs Lebensjahre.</p>
        <p class="vb-intro"><strong>b) Enorme kompositorische Produktivität trotz Krankheit:</strong>
        Ausgerechnet in diesen Jahren entstanden <em>Die schöne Müllerin</em> (1823), die
        <em>Winterreise</em> (1827) sowie die letzten großen Klaviersonaten und das
        Streichquintett (1828) – Werke, die bis heute zu seinen bedeutendsten zählen.</p>
        <p class="vb-intro"><strong>c) Rückzug in den engsten Kreis:</strong>
        Statt sich öffentlich über seine Erkrankung zu äußern, zog sich Schubert zunehmend
        in den geschützten Rahmen der Schubertiaden zurück – private Musikabende im Kreis
        enger Freunde, in denen er seine neuesten Werke zuerst vorstellte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Arbeit bis wenige Tage vor dem Tod:</strong>
        Laut seinem Freund Josef von Spaun korrigierte Schubert noch im November 1828, kurz
        vor seinem Tod, den zweiten Teil der <em>Winterreise</em> – Komponieren blieb bis
        zuletzt sein zentraler Halt.</p>
        <p class="vb-intro"><strong>b) Ein enger Kreis als einziges Sicherheitsnetz:</strong>
        Während seine Krankheit fortschritt, blieb der engste Freundeskreis um ihn herum
        nahezu konstant – kein Ausbau öffentlicher Kontakte, sondern eine noch stärkere
        Verdichtung des bereits bestehenden, vertrauten Kreises.</p>
        <p class="vb-intro"><strong>c) Musikalische statt öffentliche Verarbeitung:</strong>
        Wo andere ihre Krankheit vielleicht öffentlich thematisiert hätten, verarbeitete
        Schubert Angst, Erschöpfung und Todesnähe fast ausschließlich in seiner Musik – am
        deutlichsten in der resignativen, oft düsteren Tonsprache der <em>Winterreise</em>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Spätwerk von ungewöhnlicher Tiefe:</strong>
        Die Werke seiner letzten sechs Lebensjahre gelten heute vielfach als sein
        bedeutendstes Schaffen – eine Reife und emotionale Tiefe, die viele Musikhistoriker
        direkt mit der Erfahrung seiner Krankheit in Verbindung bringen.</p>
        <p class="vb-intro"><strong>b) Ein Tod mit ungeklärter Ursache:</strong>
        Als offizielle Todesursache wurde 1828 Typhus angegeben. Bis heute diskutiert die
        medizinhistorische Forschung, ob nicht vielmehr Spätfolgen der Syphilis, verstärkt
        durch die quecksilberhaltige Behandlung, die eigentliche oder mitverursachende
        Ursache waren – eine bis heute ungelöste Frage der Musik- und Medizingeschichte.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das seinen engen Kreis überdauerte:</strong>
        Was in den Wiener Schubertiaden vor kleinem, vertrautem Publikum entstand, gehört
        heute zum Kernrepertoire der klassischen Musik weltweit – der geschützte Rahmen
        wurde nachträglich zur globalen Bühne.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Angst, die zu Musik wurde:</strong>
        Statt sich von der Angst vor der eigenen, unheilbaren Krankheit lähmen zu lassen,
        kanalisierte Schubert sie in kompositorische Arbeit – ein für die selbsterhaltende
        Sechs typisches Muster: Sicherheit wird aktiv hergestellt, nicht passiv erwartet.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Rückzugsraum:</strong>
        Die zunehmende Innerlichkeit und Zurückgezogenheit seiner letzten Jahre passt zum
        Fünferflügel, der Distanz zur Außenwelt schafft, um innere Prozesse ungestört
        verarbeiten zu können.</p>
        <p class="vb-intro"><strong>c) Wärme im kleinen, nicht im großen Rahmen:</strong>
        Öffentlich blieb Schubert zurückhaltend, fast unsichtbar; im Kreis seiner
        Schubertiaden dagegen war er präsent, offen, tragend – Wärme, die sich nur im
        geschützten, vertrauten Raum entfaltete.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Sechs Jahre mit dem Wissen um die eigene Sterblichkeit:</strong>
        Von der Diagnose 1823 bis zu seinem Tod 1828 lebte Schubert mit dem Wissen, an einer
        zu seiner Zeit unheilbaren Krankheit zu leiden – ein Umstand, der sich in der
        zunehmend dunklen, resignativen Tonsprache seiner Spätwerke, allen voran der
        <em>Winterreise</em>, immer wieder als musikwissenschaftliche Deutung findet.</p>
        <p class="vb-intro"><strong>b) Der enge Kreis als einzige öffentliche Bühne:</strong>
        Statt seine Krankheit oder seine Ängste einem breiten Publikum mitzuteilen, blieb
        der intime Rahmen der Schubertiaden der einzige Ort, an dem er sich zeigte – Wärme
        und Sicherheit im kleinen, vertrauten Kreis, nicht in der Öffentlichkeit.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Krankheit, die zur Isolation zwang?</strong>
        Für eine selbsterhaltende Sechs mit Fünferflügel, deren Sicherheit aus einem engen,
        verlässlichen Kreis stammt, lässt sich in einer stigmatisierten, kaum
        aussprechbaren Krankheit eine Zuspitzung des eigenen Lebensmusters lesen: Der
        Rückzug, der ohnehin ihre Grundstrategie war, wurde durch die Krankheit noch
        verstärkt – und gerade aus dieser verstärkten Innerlichkeit entstand ein Spätwerk
        von außergewöhnlicher emotionaler Tiefe. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sechs mit Fünferflügel
        zwangsläufig zu solchen Krankheitsverläufen führt – <strong>jeder Mensch kann jede
        Krankheit bekommen, unabhängig vom Subtyp.</strong> Zudem ist die genaue
        Todesursache bis heute unter Musik- und Medizinhistorikern umstritten (Typhus versus
        Syphilis-Spätfolgen). Was sich an Schuberts Fall zeigen lässt, ist ein Muster im
        Umgang mit Krankheit, das bei einer ausgeprägten selbsterhaltenden Sechs mit
        Fünferflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schubert kannte sein eigenes Muster nicht – die selbsterhaltende Sechs mit Fünferflügel sucht Sicherheit im vertrauten kleinen Kreis und im eigenen Schaffen, und genau dorthin zog er sich mit fortschreitender Krankheit zurück, statt sich professionelle Hilfe außerhalb dieses Kreises zu holen. Wer das eigene Rückzugsmuster nicht kennt, verwechselt den vertrauten Schutzraum mit tatsächlicher Sicherheit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sechs mit Fünferflügel bestätigt sich bei <strong>Franz
        Schubert</strong> noch einmal in der Art, wie er mit seiner sechsjährigen
        Krankheitsgeschichte umging: kein öffentliches Bekenntnis, sondern Rückzug in den
        engsten, vertrauten Kreis – und aus dieser erzwungenen Innerlichkeit heraus einige
        seiner tiefsten, bis heute meistgespielten Werke. Das Kaninchen, das seine Angst und
        Sehnsucht nach Geborgenheit in Musik verwandelte, blieb öffentlich fast unsichtbar
        und wurde gerade dadurch unsterblich.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-franz-schubert", label:"Porträt: Franz Schubert (SE6w5) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se6", label:"Subtyp-Profil SE6"},
      ])}
    </div>
  `);
}

export function friedrichSchillerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-schiller-portrait.jpg" alt="Friedrich Schiller" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Schiller</p>
        <p class="krim-portrait-typ">SX6w5 · Sexueller Typ 6 mit Fünferflügel · 1759–1805</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedrich Schiller</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-friedrich-schiller">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier steht ein Kapitel im Mittelpunkt, das dort kaum zur Sprache kommt:
        eine seit der Kindheit anfällige Konstitution, ein vermutlich während des
        Medizinstudiums erworbener Tuberkulose-Keim und vierzehn Jahre Arbeit gegen einen
        Körper, der bereits 1791 lebensbedrohlich zusammengebrochen war.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schiller</strong> ist der <strong>sexuellen Sechs mit Fünferflügel</strong>
        zugeordnet. Naranjo beschrieb die SX6 als Kontratyp der Sechs: Statt sich vor Bedrohung
        zurückzuziehen, begegnet sie ihr mit demonstrativer Stärke. Der Fünferflügel bringt
        analytische Tiefe und die Fähigkeit, sich in Arbeit und Struktur zu vertiefen, bis
        keine Kraft mehr übrig ist – ein Muster, das sich bis in Schillers letzte, von
        fortschreitender Krankheit gezeichnete Lebensjahre nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der eigene Körper als weiterer Gegner, dem man sich stellt:</strong>
        Schillers Blick auf die eigene, fortschreitende Krankheit war derselbe wie auf jede
        andere Bedrohung seines Lebens – nicht ausweichen, sondern weiterarbeiten, als ließe
        sich der Verfall durch Willenskraft aufhalten.</p>
        <p class="vb-intro"><strong>b) Warnzeichen als Hindernis, nicht als Grenze:</strong>
        Schon an der Karlsschule lag der junge Schiller wiederholt wegen Husten und
        Lungenkatarrhen im Krankenzimmer – ein früher Hinweis auf eine fragile Konstitution,
        die er zeitlebens nicht als Grenze, sondern als weiteres Hindernis behandelte.</p>
        <p class="vb-intro"><strong>c) Nächte, die dem Tag abgerungen wurden:</strong>
        Goethe bemerkte über Schillers Arbeitsweise bewundernd und zugleich besorgt: „Seine
        durchwachten Nächte haben unseren Tag erhellt" – eine Beobachtung, die zeigt, wie sehr
        Schillers Umfeld die Kosten seiner Arbeitsweise bereits ahnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein möglicher Ursprung während des Medizinstudiums:</strong>
        Während seines erzwungenen Medizinstudiums an der Karlsschule obduzierte Schiller
        einen Kommilitonen, der an Lungentuberkulose gestorben war. Historiker und Mediziner
        gehen davon aus, dass er sich in dieser Zeit den Krankheitskeim zuzog, der ihn fortan
        begleitete.</p>
        <p class="vb-intro"><strong>b) Raubbau am eigenen Körper als Lebensstil:</strong>
        Schiller arbeitete oft die ganze Nacht durch, ernährte sich unregelmäßig und
        schlecht und litt unter chronischen Verdauungsproblemen und wiederkehrenden
        Infekten – eine Lebensweise, die seine ohnehin fragile Konstitution zusätzlich
        schwächte.</p>
        <p class="vb-intro"><strong>c) Der Zusammenbruch von 1791:</strong>
        Mit 32 Jahren erlitt Schiller die ersten wiederkehrenden, lebensbedrohlichen Anfälle
        von schwerem Fieber, heftigem Husten mit Blutauswurf und Ohnmachten – vermutlich
        schwere Schübe der Tuberkulose. Er erholte sich danach nie wieder vollständig.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vierzehn Jahre Arbeit gegen den eigenen Verfall:</strong>
        Nach 1791 lebte und arbeitete Schiller weitere vierzehn Jahre unter dem ständigen
        Druck der fortschreitenden Krankheit – und schrieb ausgerechnet in dieser Zeit sein
        bedeutendstes Alterswerk: die Wallenstein-Trilogie, Maria Stuart, Die Jungfrau von
        Orleans und Wilhelm Tell.</p>
        <p class="vb-intro"><strong>b) Rascher Verfall im Frühjahr 1805:</strong>
        Nach einem Theaterbesuch am 1. Mai 1805 erlitt Schiller einen schweren Zusammenbruch
        mit Fieberkrämpfen. Acht Tage später, am 9. Mai 1805, starb er im Alter von nur 45
        Jahren an einer akuten Lungenentzündung.</p>
        <p class="vb-intro"><strong>c) Ein Obduktionsbefund, der selbst die behandelnden Ärzte erschütterte:</strong>
        Die Obduktion am Tag nach seinem Tod ergab einen völlig zerstörten, vernarbten und
        fest mit dem Herzbeutel verwachsenen rechten Lungenflügel, stark angegriffene, „fast
        aufgelöste" Nieren und einen altersuntypisch zurückgebildeten Herzmuskel.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Arzturteil, das Fassungslosigkeit ausdrückte:</strong>
        Der behandelnde Arzt fasste den Zustand des verstorbenen Dichters in dem später oft
        zitierten Satz zusammen: „Bei diesen Umständen muss man sich wundern, wie der arme
        Mann so lange hat leben können."</p>
        <p class="vb-intro"><strong>b) Ein geschwächter Körper, getragen von einer der willensstärksten Konstitutionen des Enneagramms:</strong>
        Der Obduktionsbefund zeigt, dass Schillers Organismus über Jahre hinweg auf einem
        Bruchteil seiner eigentlichen Funktionsfähigkeit weiterarbeitete. Medizinisch lässt
        sich das kaum durch den Körper selbst erklären – wohl aber durch die mentale
        Willenskraft der sexuellen Sechs, die unter den 27 Subtypen des Enneagramms zu den
        willensstärksten zählt. Nicht der geschwächte Körper hielt durch, sondern das
        Prinzip, das ihn trotz allem weiter antrieb – genau das, was den behandelnden Arzt so
        erstaunte.</p>
        <p class="vb-intro"><strong>c) Kreativität, die mit dem Verfall parallel zunahm:</strong>
        Statt nachzulassen, entstanden gerade in den letzten, von Krankheit gezeichneten
        Lebensjahren einige seiner reifsten und bedeutendsten Werke – ein Befund, der viele
        Zeitgenossen und spätere Biografen ratlos zurückließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Angriff statt Rückzug:</strong>
        Wie er einst dem Herzog Karl Eugen und der Zensur die Stirn geboten hatte, begegnete
        Schiller auch der eigenen Krankheit nicht mit Rückzug, sondern mit fortgesetzter,
        kompromissloser Arbeit.</p>
        <p class="vb-intro"><strong>b) Energie, die bis zur physiologischen Erschöpfung reichte:</strong>
        Die durchwachten Nächte, von Goethe bewundernd beschrieben, waren zugleich ein
        fortlaufender Raubbau – Energie, die dem eigenen Körper buchstäblich entzogen wurde, um
        das Werk voranzutreiben.</p>
        <p class="vb-intro"><strong>c) Kein Innehalten bis zum letzten Zusammenbruch:</strong>
        Noch acht Tage vor seinem Tod besuchte Schiller ein Theater – ein Leben, das bis
        buchstäblich zum letzten möglichen Moment nach außen gerichtet blieb, statt sich
        zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine fragile Konstitution seit der Kindheit:</strong>
        Bereits als Kind galt Schiller als zart und anfällig – ein Muster, das sich durch die
        Jahre an der Karlsschule mit wiederholten Lungenkatarrhen fortsetzte, lange bevor die
        eigentliche Erkrankung ausbrach.</p>
        <p class="vb-intro"><strong>b) Vierzehn Jahre zwischen Zusammenbruch und Tod:</strong>
        Vom ersten lebensbedrohlichen Anfall 1791 bis zu seinem Tod 1805 lebte Schiller
        anderthalb Jahrzehnte mit einer Krankheit, die er nie öffentlich in den Mittelpunkt
        stellte, sondern die er durch fortgesetzte Arbeit gewissermaßen überschrieb.</p>
        <p class="vb-intro"><strong>c) Konfrontation statt Schonung als durchgehendes Muster:</strong>
        Anders als Karl Lagerfeld (SO3w4), der seine Krankheit hinter einem makellosen Bild
        verbarg, oder David Bowie (SO1w2), der sie künstlerisch verschlüsselte, verbarg Schiller seine Krankheit
        nicht – er ignorierte sie schlicht durch fortgesetzte, unvermindert intensive Arbeit,
        bis der Körper keine weitere Konfrontation mehr zuließ.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Lunge, das Organ der Stimme?</strong>
        Der Obduktionsbefund zeigt einen Lungenflügel, der über Jahre hinweg vernarbte und
        schließlich vollständig funktionsunfähig wurde. Für eine sexuelle Sechs, deren
        gesamtes Werk aus dem lauten, kompromisslosen Widerspruch gegen Tyrannei und
        Unterdrückung bestand – deren Stimme selbst zur Waffe wurde –, liegt eine Deutung
        nahe: ausgerechnet das Organ, das Stimme, Atem und Widerstand physisch trägt, wurde
        Schauplatz eines jahrzehntelangen, unsichtbaren Kampfes, den er nie durch Rückzug,
        sondern immer nur durch Weiterarbeiten zu gewinnen versuchte, bis buchstäblich kein
        Atem mehr blieb. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Schillers Fall zeigen lässt, ist ein
        Muster, das bei dem Bedürfnis, Bedrohung – auch die eigene Sterblichkeit – nicht durch
        Rückzug, sondern durch fortgesetzte Konfrontation zu bewältigen, in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schiller kannte sein eigenes Muster nicht – die sexuelle Sechs begegnet Bedrohung reflexhaft mit Konfrontation statt mit Schonung, und genau das trieb ihn vierzehn Jahre lang gegen den eigenen körperlichen Verfall weiterzuarbeiten, statt der Krankheit auch nur einmal nachzugeben. Wer das eigene Konfrontationsmuster nicht kennt, kämpft weiter, selbst wenn Rückzug die gesündere Antwort wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Schillers</strong> sexuelle Sechs mit
        Fünferflügel noch einmal ablesen: eine seit der Kindheit fragile Konstitution, ein
        wahrscheinlich im Medizinstudium erworbener Krankheitskeim und vierzehn Jahre
        kompromissloser Arbeit gegen einen zunehmend zerstörten Körper, bis am 9. Mai 1805
        buchstäblich kein Widerstand mehr möglich war. Der Wolf, der der Bedrohung – der
        Zensur wie der eigenen Sterblichkeit – nie auswich, sondern ihr bis zur letzten
        Konsequenz die Stirn bot.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-friedrich-schiller", label:"Porträt: Friedrich Schiller (SX6w5) – Lebenswerk"},
        {route:"beruehmte-johann-wolfgang-von-goethe", label:"Porträt: Johann Wolfgang von Goethe (SO7w6) – enger Freund und Briefpartner"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – Gegenmodell: Verbergen statt Konfrontation"},
        {route:"krankheitsportraets-otto-von-bismarck", label:"Krankheitsporträt: Otto von Bismarck (SX6w5) – gleicher Subtyp, gegenläufige Ausprägung"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function gretaThunbergKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-greta-thunberg-portrait.jpg" alt="Greta Thunberg" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Greta Thunberg</p>
        <p class="krim-portrait-typ">SE2w1 · Selbsterhaltender Typ 2 mit Einserflügel · geb. 2003</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Greta Thunberg</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-greta-thunberg">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: eine schwere depressive Episode mit
        Essstörung und selektivem Mutismus im Alter von etwa elf Jahren, mehrere Monate vor
        der Diagnose von Asperger-Syndrom und Zwangsstörung.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Thunberg</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Einserflügel</strong>
        zugeordnet. Die SE2 nimmt Bedrohungen der eigenen Existenzgrundlage unmittelbar
        körperlich wahr, statt sie zu abstrahieren; der Einserflügel bringt eine moralische
        Klarheit hinzu, die keine Kompromisse zulässt. Genau diese Kombination – eine als
        existenziell erlebte Bedrohung, gekoppelt mit der Unfähigkeit, sich mit einer aus
        eigener Sicht unerträglichen Realität zu arrangieren – bestimmte den Verlauf ihrer
        eigenen psychischen Krise.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn im Alter von etwa acht Jahren:</strong>
        Nach eigener und familiärer Schilderung begann Thunberg bereits im Grundschulalter
        zu verstehen, welche Ausmaße der Klimawandel hat – ein Wissen, das sie zunehmend
        belastete, während ihre Umgebung kaum reagierte.</p>
        <p class="vb-intro"><strong>b) Zunehmender Rückzug im Alter von elf Jahren:</strong>
        Um das Jahr 2014 verschlechterte sich ihr Zustand deutlich: Sie aß kaum noch, verlor
        erheblich an Gewicht und sprach zeitweise fast gar nicht mehr.</p>
        <p class="vb-intro"><strong>c) Diagnose einer schweren Depression:</strong>
        Ärzte diagnostizierten eine schwere depressive Episode, begleitet von einer
        Essstörung und selektivem Mutismus – einem Zustand, in dem Sprechen in bestimmten
        Situationen nicht mehr möglich ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Monatelanger Schulausfall:</strong>
        Über mehrere Monate hinweg konnte Thunberg nach Angaben ihrer Familie nicht regelmäßig
        die Schule besuchen.</p>
        <p class="vb-intro"><strong>b) Spätere Diagnose von Asperger-Syndrom und Zwangsstörung:</strong>
        Im weiteren Verlauf wurden zusätzlich Asperger-Syndrom und eine Zwangsstörung
        diagnostiziert – Diagnosen, die Thunberg später selbst öffentlich als Teil ihrer
        Identität beschrieb, nicht als Makel.</p>
        <p class="vb-intro"><strong>c) Familiäre Begleitung als zentraler Faktor:</strong>
        Ihre Eltern, insbesondere ihre Mutter, beschrieben in einem gemeinsam verfassten
        Buch ausführlich, wie die gesamte Familie ihren Alltag über Monate an Gretas Zustand
        ausrichtete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Handeln als Ausweg aus der Krise:</strong>
        Nach eigener Aussage begann sich ihr Zustand erst zu bessern, als sie begann, sich
        aktiv für den Klimaschutz einzusetzen – zunächst innerhalb der Familie, dann
        öffentlich.</p>
        <p class="vb-intro"><strong>b) Der Schulstreik als konkretisierter Handlungsimpuls:</strong>
        Der Schulstreik vor dem schwedischen Reichstag im August 2018 markierte den Punkt, an
        dem aus innerer Belastung eine nach außen gerichtete, strukturierte Handlung wurde.</p>
        <p class="vb-intro"><strong>c) Offener Umgang mit der eigenen Geschichte seither:</strong>
        Anders als viele öffentliche Personen sprach Thunberg von Beginn an offen über diese
        Krise, statt sie zu verschweigen oder zu verharmlosen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für ein selten offen thematisiertes Muster:</strong>
        Thunbergs Offenheit über Depression, Essstörung und Neurodivergenz bei einer so
        jungen, öffentlich extrem sichtbaren Person löste international Diskussionen über
        psychische Gesundheit bei Jugendlichen aus.</p>
        <p class="vb-intro"><strong>b) Verknüpfung von persönlicher Krise und politischem Engagement:</strong>
        Für viele wurde ihre Geschichte zum Beispiel dafür, wie aus einer individuellen
        psychischen Krise eine globale Bewegung entstehen kann, ohne dass die Krise selbst
        verklärt wird.</p>
        <p class="vb-intro"><strong>c) Anhaltende öffentliche Neugier auf ihre Diagnosen:</strong>
        Bis heute wird Thunbergs Neurodivergenz in Medien immer wieder aufgegriffen – von ihr
        selbst konsequent als Stärke, nicht als Einschränkung dargestellt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Existenzielle statt abstrakte Wahrnehmung der Bedrohung:</strong>
        Die SE2-typische Unmittelbarkeit zeigte sich schon in der Kindheit: Der Klimawandel
        war für die junge Greta keine ferne Nachricht, sondern eine körperlich spürbare
        Bedrohung der eigenen Zukunft – genau jene Direktheit, die Jahre später ihre gesamte
        öffentliche Sprache prägen sollte.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und die Unmöglichkeit der Verdrängung:</strong>
        Während andere Kinder das Wissen um den Klimawandel verdrängen oder relativieren
        konnten, ließ der Einserflügel bei Thunberg keinen Kompromiss mit der als falsch
        erkannten Realität zu – ein Muster, das die Krise verschärfte, bevor es später zur
        Quelle ihrer Entschlossenheit wurde.</p>
        <p class="vb-intro"><strong>c) Vom stummen Rückzug zur lauten Stimme:</strong>
        Der selektive Mutismus – das Verstummen angesichts einer unerträglichen Realität –
        und die spätere, weltweit gehörte Stimme sind zwei Seiten desselben Musters: Solange
        keine Handlung möglich schien, verstummte sie; sobald Handlung möglich wurde, sprach
        sie so klar wie kaum jemand sonst.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme, die erst verstummte, bevor sie zur lautesten wurde:</strong>
        Thunbergs gesamtes öffentliches Wirken beruht auf der Fähigkeit, unbequeme Wahrheiten
        unmissverständlich auszusprechen – bevor sie diese Stimme fand, verlor sie sie
        vollständig, als dieselbe Wahrheit noch keinen Ausweg zuließ.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet das Schweigen und der Hunger?</strong>
        Für eine selbsterhaltende Zwei mit Einserflügel, deren gesamtes späteres Wirken auf
        unmittelbarer, körperlich gespürter Dringlichkeit beruhte, liegt eine Deutung nahe:
        Ausgerechnet die beiden Grundfunktionen, mit denen der Körper sich Gehör verschafft
        – Sprechen und Essen – wurden vorübergehend zum Ort, an dem sich die als unerträglich
        erlebte Bedrohung ausdrückte. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Depression und Essstörung führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Thunbergs Fall zeigen lässt,
        ist ein Muster im Umgang mit einer als existenziell erlebten Bedrohung, das bei einer
        ausgeprägten selbsterhaltenden Zwei mit Einserflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Thunberg kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die selbsterhaltende
        Zwei mit Einserflügel erlebt Bedrohungen der eigenen Existenzgrundlage reflexhaft als
        unmittelbar körperlich, statt frühzeitig einen Ausgleich zwischen Dringlichkeit und
        Selbstfürsorge zu finden, und lebt genau dieses Muster bis heute weitgehend
        unverändert aus. Wer die eigene Neigung, existenzielle Bedrohungen ungefiltert am
        eigenen Körper auszutragen, nicht als Muster erkennt, riskiert, dass sich die Krise
        wiederholt, sobald keine Handlungsmöglichkeit mehr sichtbar ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 2 mit Einserflügel erklärt bei <strong>Greta Thunberg</strong>
        vieles am Verlauf ihrer psychischen Krise: ein Mädchen, das eine globale Bedrohung so
        unmittelbar körperlich erlebte wie kaum jemand sonst, verstummte zunächst vollständig
        – und fand seine Stimme erst wieder, als aus stiller Verzweiflung konkretes Handeln
        wurde. Das Flusspferd, das erst regungslos im Wasser verharrte, bevor es den ganzen
        Strom umlenkte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-greta-thunberg", label:"Porträt: Greta Thunberg (SE2w1)"},
        {route:"krankheitsportraets-natascha-kampusch", label:"Krankheitsporträt: Natascha Kampusch (SE2w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function honoreDeBalzacKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-honore-de-balzac-portrait.jpg" alt="Honoré de Balzac" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Honoré de Balzac</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · 1799–1850</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Honoré de Balzac</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-honore-de-balzac">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, seine Herkunft und seine
        Typstruktur im Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort nur gestreift
        wird: dem jahrzehntelangen Raubbau am eigenen Körper durch Arbeitswahn, Koffeinexzess und
        Schlafmangel – und der Herzinsuffizienz mit tödlicher Gangrän, an der Balzac fünf Monate
        nach seiner Hochzeit starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Balzac</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden nicht nach außen, sondern hält es zäh und allein aus –
        bei Balzac hieß das: Schulden mit Sätzen abtragen, Nacht für Nacht, ohne der eigenen
        Erschöpfung nachzugeben. Der Dreierflügel gab dieser Zähigkeit ein Ziel, das über das bloße
        Überleben hinausging – gesellschaftlichen Rang, sichtbaren Erfolg –, und genau dieses Ziel
        ließ ihn die Warnsignale des eigenen Körpers über Jahrzehnte hinweg überhören.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Tagesrhythmus, der auf Dauer keinen Körper schont:</strong>
        Schon in den 1830er-Jahren, kaum dreißigjährig, hatte sich Balzacs berüchtigter Arbeitsrhythmus
        etabliert: ein kurzes Abendessen, ein Nickerchen bis Mitternacht, dann ununterbrochenes
        Schreiben bis weit in den Vormittag – 15 bis 18 Stunden am Stück, Nacht für Nacht, über
        Jahrzehnte hinweg.</p>
        <p class="vb-intro"><strong>b) Der Kaffee als Motor und als Gift zugleich:</strong>
        Um wach zu bleiben, trank Balzac gewaltige Mengen extrem starken, teils fast ungenießbar
        konzentrierten schwarzen Kaffees – Zeitgenossen und spätere Biografen berichten von Dutzenden
        Tassen an einem einzigen Arbeitstag. Er beschrieb selbst, wie der Kaffee ihn wachhielt, wenn
        der Körper längst hätte schlafen wollen – eine Substanz, die er wortwörtlich seiner
        Gesundheit abrang.</p>
        <p class="vb-intro"><strong>c) Ein Körper, der früh sichtbar aus dem Gleichgewicht geriet:</strong>
        Schon in mittleren Jahren wird Balzac von Zeitgenossen als zunehmend beleibt beschrieben –
        eine Folge des sitzenden Arbeitsstils, der unregelmäßigen, oft hastigen Mahlzeiten und des
        fehlenden Ausgleichs zur nächtlichen Dauerbelastung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine über anderthalb Jahrzehnte fortschreitende Herzschwäche:</strong>
        Medizinhistorische Untersuchungen zu Balzacs Krankengeschichte gehen davon aus, dass sich
        bereits gut eineinhalb Jahre vor seinem Tod eine deutliche Verschlechterung abzeichnete –
        mit zunehmender Atemnot, die auf eine fortschreitende Verdickung der Herzkammerwand
        (Ventrikelhypertrophie) zurückgeführt wird, und schweren Wassereinlagerungen in den Beinen.</p>
        <p class="vb-intro"><strong>b) Die Beinödeme und ein riskanter Eingriff:</strong>
        Um die massiven Flüssigkeitsansammlungen in den Beinen zu lindern, ließen Balzacs Ärzte
        wiederholt einen Trokar – ein spitzes chirurgisches Instrument – einsetzen, um die
        angestaute Flüssigkeit abzuleiten. Ohne die späteren Möglichkeiten der Desinfektion und ohne
        Antibiotika drang durch diese wiederholten Einstiche eine Infektion in die offenen Wunden ein.</p>
        <p class="vb-intro"><strong>c) Aus der Infektion wird Gangrän:</strong>
        Diese Infektion entwickelte sich zu einer Gangrän an den Beinen – dem Gewebetod, der
        Balzacs geschwächten Kreislauf in seinen letzten Lebenswochen zusätzlich überforderte und
        letztlich zur Todesursache wurde, gemeinsam mit der zugrundeliegenden Herzinsuffizienz.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Arbeit bis zur physischen Grenze, auch nach ersten Warnzeichen:</strong>
        Selbst als sich die gesundheitlichen Probleme bereits deutlich bemerkbar machten, reduzierte
        Balzac sein Arbeitspensum kaum – die Schulden, die sein Werk erst in diesem Umfang hatten
        entstehen lassen, verlangten weiterhin nach neuen Seiten, neuen Verträgen, neuen Vorschüssen.</p>
        <p class="vb-intro"><strong>b) Ein Leben zwischen Hańska und der Schreibpflicht:</strong>
        In den letzten Jahren vor der Hochzeit mit Ewelina Hańska pendelte Balzac wiederholt
        zwischen Paris und der Ukraine – strapaziöse Reisen, die seinen bereits geschwächten Körper
        zusätzlich belasteten, während er parallel weiterschrieb, um die eigene finanzielle und
        gesellschaftliche Position vor der lang ersehnten Heirat zu sichern.</p>
        <p class="vb-intro"><strong>c) Die Heirat als kurzes Aufatmen:</strong>
        Am 14. März 1850 heiratete Balzac Ewelina Hańska in der Ukraine – nach siebzehn Jahren
        Briefwechsel endlich am Ziel. Doch die Rückreise nach Paris im Frühsommer 1850 war bereits
        von einer sich dramatisch verschlechternden Gesundheit überschattet; von einem Neuanfang mit
        geregeltem Leben, der seinem Körper Erholung verschafft hätte, konnte keine Rede mehr sein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein rasanter Verfall in den letzten Monaten:</strong>
        In den letzten drei Lebensmonaten verschlechterte sich Balzacs Zustand nach übereinstimmenden
        Quellen dramatisch – zunehmende Atemnot, wachsende Erschöpfung und die fortschreitende
        Gangrän machten ihn zunehmend bettlägerig.</p>
        <p class="vb-intro"><strong>b) Der Besuch Victor Hugos:</strong>
        Victor Hugo, von Balzacs Frau herbeigerufen, besuchte den Sterbenden am 18. August 1850 und
        hielt seine Beobachtungen später schriftlich fest: Balzac habe auf einem Sofa gelegen, sein
        Gesicht dunkel verfärbt, kaum noch fähig, sich zu erheben – nur die Augen hätten noch Leben
        gezeigt. Wenige Stunden später war Balzac tot.</p>
        <p class="vb-intro"><strong>c) Ein Nachruf, der das Ausmaß fasste:</strong>
        Hugo hielt zwei Tage später, am 20. August 1850, die Grabrede und würdigte Balzac als einen
        der größten Schriftsteller seiner Epoche – ein öffentliches Echo, das im deutlichen Kontrast
        zu den letzten, von Schmerz und körperlichem Verfall geprägten Wochen stand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zähigkeit, die sich gegen den eigenen Körper richtete:</strong>
        Dieselbe SE4-Zähigkeit, die Balzac befähigte, jahrzehntelang gegen seine Schulden
        anzuschreiben, richtete sich in den letzten Lebensjahren unvermindert gegen die Signale des
        eigenen Körpers – Erschöpfung, Atemnot, Schwellungen wurden nicht als Grund zur Umkehr
        gelesen, sondern als weiteres Hindernis, das es zu überwinden galt.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als Verstärker, nicht als Bremse:</strong>
        Statt den Status, den er sich mühsam erschrieben hatte, zu genießen, trieb der
        statusbewusste Dreierflügel Balzac weiter an, noch mehr zu leisten, noch mehr abzusichern –
        auch als der Preis dafür der eigene Körper war.</p>
        <p class="vb-intro"><strong>c) Ein Muster, das sich in der Ehe verschärfte statt löste:</strong>
        In seinen letzten Lebensjahren zeigt sich bei Balzac ein Zug, der über das reine SE4-Muster
        hinausgeht: eine wachsende, fast anklammernde emotionale Abhängigkeit von Hańskas
        Zuwendung und Anerkennung, verstärkt durch die jahrelange Ungewissheit um die Heirat und die
        eigene finanzielle Not. Die Vier bewegt sich unter chronischem Stress entlang ihrer
        Stresslinie zur Zwei – und genau dieses Muster einer bedürftigen, um Nähe und Bestätigung
        ringenden Zuwendung lässt sich in den späten Briefen an Hańska ablesen, ohne dass sich
        Balzacs Kerntyp dadurch verändert hätte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Lady Diana (SE4w3):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady Diana</a>,
        ebenfalls SE4w3, zeigt sich bei Balzac das für diesen Subtyp typische Muster: Das Leiden
        wird nicht laut nach außen getragen, sondern jahrelang allein und zäh ausgehalten, während
        nach außen unvermindert Leistung – bei Diana öffentliche Fassade, bei Balzac literarische
        Produktivität – gezeigt wird. Bei Diana bricht sich das Leiden Bahn in einer über Jahre
        verschwiegenen Bulimie, bei Balzac in einem über Jahrzehnte fortgesetzten Raubbau am eigenen
        Körper, der niemandem verborgen blieb und dennoch nicht gestoppt wurde – zwei Varianten
        derselben SE4-Grundbewegung: durchhalten, statt aufzugeben.</p>
        <p class="vb-intro"><strong>b) Eine über Jahrzehnte gewachsene Erschöpfung, keine plötzliche Katastrophe:</strong>
        Von den ersten nächtelangen Schreibmarathons in den 1830er-Jahren bis zur Gangrän der
        letzten Lebenswochen zieht sich eine durchgehende Linie stetiger, selbstgewählter
        Überlastung – kein einzelnes Ereignis, sondern ein über zwanzig Jahre wiederholtes Muster.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, ein gemeinsamer Ursprung:</strong>
        Der exzessive Kaffeekonsum und der chronische Schlafmangel lassen sich als zwei Seiten
        derselben Strategie lesen: den eigenen Körper so lange wie möglich funktionsfähig zu halten,
        um die selbstgesetzte, letztlich nie endende Arbeitspflicht zu erfüllen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Herz?</strong>
        Für eine selbsterhaltende Vier, deren Instinkt eigentlich auf Sicherung des eigenen
        Überlebens gerichtet ist, liegt eine Deutung nahe: Ausgerechnet das Organ, das im
        übertragenen Sinn für Ausdauer, Kraft und das ständige, unbemerkte Weitergeben steht, wurde
        bei Balzac über Jahrzehnte bis zur Erschöpfung beansprucht – während der Dreierflügel dafür
        sorgte, dass diese Erschöpfung nach außen möglichst lange nicht sichtbar wurde. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang,
        und wird im <a href="javascript:void(0)" data-route="psychosomatik/herzinsuffizienz">Psychosomatik-Register
        zur Herzinsuffizienz</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu Herzinsuffizienz
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Balzacs Fall zeigen lässt, ist ein Muster, das bei der Neigung, Erschöpfung
        stumm auszuhalten statt ihr nachzugeben, in der Praxis immer wieder auffällt – eine von
        vielen möglichen Erklärungen, kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Balzac kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch gar nicht. Die selbsterhaltende Zähigkeit, die ihn befähigte,
        gegen seine Schulden anzuschreiben, kannte für ihn keinen eingebauten Warnmechanismus, der
        ihn rechtzeitig hätte innehalten lassen; im Gegenteil, jedes körperliche Warnsignal wurde in
        genau derselben Logik verarbeitet, mit der er auch finanzielle Rückschläge behandelte: als
        weiteres Hindernis, das man zäh durcharbeitet statt ihm nachzugeben. Wer das eigene
        Erschöpfungsmuster nicht kennt, kann es auch nicht rechtzeitig unterbrechen – bei Balzac
        endete das erst mit dem Tod, fünf Monate nach der Hochzeit, auf die er siebzehn Jahre
        gewartet hatte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Balzacs</strong> Krankengeschichte zeigt sich die selbsterhaltende Vier mit
        Dreierflügel von ihrer kompromisslosesten Seite: eine Zähigkeit, die ein literarisches
        Jahrhundertwerk hervorbrachte – und dieselbe Zähigkeit, die den eigenen Körper über
        Jahrzehnte hinweg bis zur Erschöpfung forderte, ohne innezuhalten. Die Taube, die
        siebzehn Jahre lang unbeirrt ihre Botschaft trug, erreichte ihr Ziel am 14. März 1850 –
        und starb fünf Monate später, am 18. August 1850, an Herzinsuffizienz und der daraus
        entstandenen Gangrän, im Alter von 51 Jahren.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-honore-de-balzac", label:"Porträt: Honoré de Balzac (SE4w3) – Lebenswerk"},
        {route:"krankheitsportraets-lady-diana", label:"Krankheitsporträt: Lady Diana (SE4w3) – gleicher Subtyp"},
        {route:"krankheitsportraets-t-e-lawrence", label:"Krankheitsporträt: T. E. Lawrence (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik/herzinsuffizienz", label:"Psychosomatik-Register: Herzinsuffizienz"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function johannesBrahmsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-johannes-brahms-portrait.jpg" alt="Johannes Brahms" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johannes Brahms</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1833–1897</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Johannes Brahms</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-johannes-brahms">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine jahrzehntelange
        Treue zur Familie Schumann. Diese Seite vertieft ein Kapitel, das dort nur angedeutet
        wird: eine Leberkrankung, an der bereits sein Vater gestorben war, und die Brahms selbst
        nur elf Monate nach dem Tod seiner engsten Freundin Clara Schumann dahinraffte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Brahms</strong> ist der <strong>selbsterhaltenden Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Appetit</em>: Frieden im Vertrauten, in der
        immer gleichen Gewohnheit. Der Achterflügel gibt dieser Gelassenheit eine unerschütterliche
        Standfestigkeit. Genau dieses Muster – Beharren im Gewohnten, bis eine äußere
        Erschütterung es aufbricht – lässt sich bis in seinen Krankheitsverlauf
        nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Die erschöpfende Reise zu Clara Schumanns Beerdigung:</strong>
        Als Clara Schumann im Mai 1896 starb, verpasste der bereits selbst gesundheitlich
        angeschlagene Brahms auf der überstürzten Reise nach Bonn mehrere Zuganschlüsse und
        musste Teile der Strecke im falschen Zug zurücklegen – er traf erschöpft und zu spät
        zur Beisetzung ein.</p>
        <p class="vb-intro"><strong>b) Sichtbare Gelbfärbung kurz danach:</strong>
        Noch im selben Sommer bemerkten Freunde eine ungewohnte Gelbfärbung seiner Haut und eine
        zunehmende Erschöpfung, die Brahms zunächst herunterspielte.</p>
        <p class="vb-intro"><strong>c) Eine Diagnose, die an den eigenen Vater erinnerte:</strong>
        Ende 1896 oder Anfang 1897 wurde bei Brahms eine schwere Lebererkrankung
        festgestellt – dieselbe Krankheit, an der bereits sein Vater Johann Jakob Brahms
        gestorben war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kein Rückzug von öffentlichen Verpflichtungen:</strong>
        Trotz der Diagnose zog sich Brahms nicht aus dem öffentlichen Leben zurück, sondern
        nahm weiterhin an Konzerten teil, solange es seine Kräfte zuließen.</p>
        <p class="vb-intro"><strong>b) Zunehmender, kaum thematisierter Verfall:</strong>
        Sein engster Kreis bemerkte den fortschreitenden Gewichtsverlust und die wachsende
        Erschöpfung – Brahms selbst sprach kaum darüber, ganz in der Art der selbsterhaltenden
        Neun, die Beschwerlichkeiten eher aussitzt als bespricht.</p>
        <p class="vb-intro"><strong>c) Festhalten an den vertrauten Ritualen, solange es ging:</strong>
        Auch in den letzten Monaten hielt Brahms an seinem gewohnten Rhythmus – Stammlokale,
        Zigarre, feste Tagesabläufe – fest, so lange es seine schwindende Kraft eben zuließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der letzte öffentliche Auftritt am 7. März 1897:</strong>
        Brahms besuchte in Wien eine Aufführung seiner 4. Sinfonie, sichtbar geschwächt und
        kaum noch in der Lage, die Treppen zu seiner Loge zu steigen. Das Publikum bereitete
        ihm eine lang anhaltende, tief bewegte Ovation nach jedem Satz – viele im Saal weinten,
        weil allen klar war, dass sie ihn zum letzten Mal sahen.</p>
        <p class="vb-intro"><strong>b) Bemerkenswerte Fassung angesichts des nahen Todes:</strong>
        Freunde und Weggefährten berichteten übereinstimmend von einer stillen Gelassenheit,
        mit der Brahms sein eigenes Sterben in den letzten Wochen hinnahm.</p>
        <p class="vb-intro"><strong>c) Tod am 3. April 1897 in Wien:</strong>
        Johannes Brahms starb im Alter von 63 Jahren – nur elf Monate nach Clara Schumann, deren
        Verlust seinen eigenen körperlichen Verfall mit beschleunigt haben dürfte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: David Hume</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-david-hume">David Hume</a>
        (SE9w8) begegnete seiner tödlichen Krankheit – in seinem Fall einer chronischen
        Darmerkrankung – mit bemerkenswerter Gelassenheit statt Kampf oder Verzweiflung. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">eigenes
        Krankheitsporträt</a> zeigt dieselbe elefantenhafte Ruhe wie bei Brahms: Der
        Achterflügel gibt der selbsterhaltenden Neun eine Standfestigkeit, die auch dem eigenen
        Tod ohne Ausweichen begegnen kann – kein dramatischer Kampf, sondern ein stilles
        Weitertragen des Gewohnten bis zuletzt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der einem anderen Tod unmittelbar folgte:</strong>
        Dass Brahms nur elf Monate nach Clara Schumann starb, wurde von Zeitgenossen und
        Nachwelt gleichermaßen als kaum zufällige Fügung gedeutet – vierzig Jahre Treue endeten
        beinahe gleichzeitig auf beiden Seiten.</p>
        <p class="vb-intro"><strong>b) Eine Ovation, die zum Abschied wurde:</strong>
        Die Ovation nach seiner 4. Sinfonie im März 1897 gilt bis heute als einer der
        bewegendsten Momente der Konzertgeschichte – ein Publikum, das seinem sterbenden
        Komponisten noch einmal seine Anerkennung entgegenbrachte.</p>
        <p class="vb-intro"><strong>c) Ein stilles Ende ohne Dramatik:</strong>
        Anders als mancher Künstlertod, der sich zur Legende auflädt, blieb Brahms' Sterben
        bemerkenswert unspektakulär – passend zu einem Mann, der zeitlebens das Vertraute dem
        Auffälligen vorzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ein Fixpunkt, der plötzlich fehlte:</strong>
        Die selbsterhaltende Neun findet ihre Stabilität im Vertrauten – Clara Schumanns Tod
        entzog Brahms genau diesen letzten, über vierzig Jahre gewachsenen Fixpunkt, und der
        Körper folgte kurz darauf.</p>
        <p class="vb-intro"><strong>b) Beharren im Gewohnten bis zur Erschöpfung:</strong>
        Statt sich nach der Diagnose zu schonen, hielt Brahms an seinen gewohnten
        Verpflichtungen fest – dieselbe Trägheit, die ihn 21 Jahre an einer Sinfonie feilen
        ließ, ließ ihn auch angesichts des eigenen Todes nicht von seinen Ritualen abweichen.</p>
        <p class="vb-intro"><strong>c) Der Achterflügel, der auch im Sterben nicht auswich:</strong>
        Dieselbe unerschütterliche Standfestigkeit, mit der Brahms einst im „Streit der
        Romantiker" seine Position hielt, zeigte sich noch einmal in der stillen, unbeirrten
        Art, mit der er dem eigenen Tod entgegensah.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die im Vertrauten der Familie wurzelte:</strong>
        Dass Brahms an derselben Leberkrankheit starb wie sein Vater, passt auf eine bittere
        Weise zum Kernthema der selbsterhaltenden Neun: Selbst im Krankheitsverlauf zeigte sich
        etwas zutiefst Familiäres, Wiederkehrendes, statt eines völlig neuen, fremden
        Schicksals.</p>
        <p class="vb-intro"><strong>b) Der Bruch im Vertrauten als Auslöser:</strong>
        Die selbsterhaltende Neun lebt vom verlässlichen Ritual – Clara Schumanns Tod und die
        chaotische, erschöpfende Reise zu ihrer Beerdigung waren genau jene Störung des
        Gewohnten, die Brahms' bis dahin verborgene Krankheit sichtbar werden ließ.</p>
        <p class="vb-intro"><strong>c) Keine Flucht, kein Kampf – nur stilles Weitertragen:</strong>
        Wie bei David Hume findet sich auch bei Brahms kein verzweifelter Kampf gegen die
        Krankheit und kein dramatischer Rückzug, sondern ein Weitertragen der gewohnten Rituale
        bis an die Grenze der eigenen Kraft.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Leber?</strong>
        Für eine selbsterhaltende Neun mit Achterflügel, deren tiefstes Bedürfnis in der ruhigen
        Verarbeitung und Bewahrung des Vertrauten liegt, liegt eine Deutung nahe: Ausgerechnet
        jenes Organ, das im Körper für Verarbeitung, Entgiftung und das ruhige Funktionieren im
        Hintergrund zuständig ist, wurde bei Brahms – wie schon bei seinem Vater – zum
        Schauplatz des Verfalls. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Lebererkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Brahms' Fall zeigen lässt, ist ein Muster
        im Umgang mit einer tödlichen Diagnose, das bei einer ausgeprägten selbsterhaltenden
        Neun mit Achterflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Brahms kannte sein eigenes Muster nicht – die selbsterhaltende Neun mit Achterflügel
        findet Sicherheit im Vertrauten und trägt Belastungen lange schweigend mit, statt sie
        anzusprechen oder sich zu schonen. Genau das tat er, als er trotz sichtbarer
        Erschöpfung an seinen Verpflichtungen festhielt, statt die eigene Erkrankung ernst zu
        nehmen. Wer die eigene Neigung, Beschwerden auszusitzen statt sie zu benennen, nicht
        als Muster kennt, verpasst den Moment, in dem rechtzeitige Schonung noch etwas hätte
        bewirken können.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Brahms'</strong> selbsterhaltende Neun mit
        Achterflügel noch einmal ablesen: eine Krankheit, die im Vertrauten der eigenen Familie
        wurzelte, ein Zusammenbruch des Gewohnten, der erst durch den Verlust der engsten
        Freundin sichtbar wurde, und ein stilles, unspektakuläres Ende, das dem gelebten Leben
        aufs Wort entsprach. Der Elefant, der vierzig Jahre lang nichts vergaß – und der die
        Welt nur elf Monate nach der Frau verließ, der seine Treue am längsten gegolten hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8) – Lebenswerk"},
        {route:"krankheitsportraets-robert-schumann", label:"Krankheitsporträt: Robert Schumann (SX7w8) – Brahms besuchte ihn regelmäßig in Endenich"},
        {route:"krankheitsportraets-david-hume", label:"Krankheitsporträt: David Hume (SE9w8) – dieselbe elefantenhafte Gelassenheit"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsporträt: Hans-Dietrich Genscher (SE9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

export function julianAssangeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-julian-assange-portrait.jpg" alt="Julian Assange" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julian Assange</p>
        <p class="krim-portrait-typ">SO9w1 · Sozialer Typ 9 mit Einserflügel · geb. 1971</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Julian Assange</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-julian-assange">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Gründung von WikiLeaks und den
        Kampf um radikale Transparenz. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: über sieben Jahre nahezu vollständiger Isolation in der
        ecuadorianischen Botschaft in London, gefolgt von weiteren fünf Jahren in
        britischer Hochsicherheitshaft – mit ausführlich dokumentierten körperlichen und
        psychischen Folgen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Assange</strong> ist dem <strong>sozialen Typ 9 mit Einserflügel</strong>
        zugeordnet. Die SO9 verschmilzt vollständig mit einer Idee, die größer ist als die
        eigene Person; der Einserflügel bringt einen unbeirrbaren moralischen Kompass hinzu,
        der keine Kompromisse duldet. Genau diese Kombination – das Festhalten an einem
        Prinzip, komme was wolle – bestimmte auch, wie lange Assange die eigene Isolation
        ertrug, bevor die gesundheitlichen Folgen unübersehbar wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zuflucht in der Botschaft ab Juni 2012:</strong>
        Assange suchte im Juni 2012 Zuflucht in der ecuadorianischen Botschaft in London,
        um einer Auslieferung nach Schweden zu entgehen – ohne zu wissen, dass daraus fast
        sieben Jahre nahezu vollständiger Isolation werden sollten.</p>
        <p class="vb-intro"><strong>b) Kein Zugang zu Tageslicht oder Außenbereich über Jahre:</strong>
        Nach Angaben behandelnder Ärzte hatte Assange über fünfeinhalb Jahre hinweg keinen
        Zugang zu direktem Sonnenlicht, angemessener Belüftung oder Außenraum – auf rund 30
        Quadratmetern nutzbarer Wohnfläche.</p>
        <p class="vb-intro"><strong>c) Erste dokumentierte psychische Belastungssymptome:</strong>
        Bereits während der Botschaftsjahre dokumentierten behandelnde Ärzte schwere Angst,
        pathologisches Stresslevel, Dissoziation und depressive Symptome.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Neuropsychologische Beeinträchtigungen:</strong>
        Medizinische Untersuchungen dokumentierten neuropsychologische Beeinträchtigungen,
        geschwächte Knochen, verminderte Immunfunktion sowie ein erhöhtes Risiko für
        Herz-Kreislauf-Erkrankungen und Krebs.</p>
        <p class="vb-intro"><strong>b) Chronische Schmerzen und posttraumatische Belastung:</strong>
        Zu den dokumentierten Symptomen zählten außerdem chronische Schmerzen sowie eine
        posttraumatische Belastungsstörung, verbunden mit suizidalen Gedanken in
        besonders schweren Phasen.</p>
        <p class="vb-intro"><strong>c) Verweigerter oder erschwerter Zugang zu medizinischer Versorgung:</strong>
        Über 60 Ärztinnen und Ärzte wandten sich in einem offenen Brief an das britische
        Innenministerium und dokumentierten eine über Jahre wiederholte Verweigerung
        angemessener medizinischer Versorgung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verhaftung und Verlegung nach Belmarsh 2019:</strong>
        Nach dem Entzug des Botschaftsasyls im April 2019 wurde Assange verhaftet und in
        das britische Hochsicherheitsgefängnis Belmarsh verlegt, wo er bis zu seiner
        Freilassung 2024 blieb.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte ärztliche Warnungen während der Haft:</strong>
        Auch während der Haft in Belmarsh warnten untersuchende Ärztinnen und Ärzte
        wiederholt vor einem „gefährlichen" Gesundheitszustand und einer sich weiter
        verschlechternden Verfassung.</p>
        <p class="vb-intro"><strong>c) Freilassung nach Schuldeingeständnis im Juni 2024:</strong>
        Nach über zwölf Jahren zwischen Botschaftsasyl und Haft bekannte sich Assange im
        Juni 2024 in einem Deal mit US-Behörden in einem Anklagepunkt schuldig und kam
        frei – er kehrte anschließend nach Australien zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Internationale medizinische und juristische Aufmerksamkeit:</strong>
        Fachzeitschriften wie The Lancet und zahlreiche Ärzteverbände thematisierten
        öffentlich die gesundheitlichen Folgen der Isolationshaft – ein seltener Fall, in
        dem ein Einzelschicksal zum Gegenstand medizinischer Fachdebatten wurde.</p>
        <p class="vb-intro"><strong>b) Symbolfigur über die eigene Person hinaus:</strong>
        Assanges gesundheitlicher Verfall wurde zum zentralen Argument in der öffentlichen
        Debatte um Pressefreiheit und die Grenzen staatlicher Verfolgung investigativer
        Journalisten.</p>
        <p class="vb-intro"><strong>c) Kein vollständiger Rückzug von der eigenen Sache:</strong>
        Trotz der dokumentierten gesundheitlichen Folgen distanzierte sich Assange zu
        keinem Zeitpunkt öffentlich von den Grundüberzeugungen, die zu seiner Isolation
        geführt hatten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit der Idee bis zur Selbstaufgabe:</strong>
        Dieselbe SO9-Neigung, sich vollständig mit einer größeren Sache zu verschmelzen,
        die Assanges gesamtes Engagement für WikiLeaks trug, bestimmte auch, wie lange er
        die eigene Isolation ertrug, bevor die körperlichen Warnsignale unübersehbar
        wurden.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und das Festhalten am Prinzip trotz Kosten:</strong>
        Die unbeirrbare Prinzipientreue des Einserflügels erklärt, warum Assange über
        Jahre keinen Kompromiss einging, der seine Freiheit früher hätte sichern können –
        das Prinzip wog schwerer als die eigene körperliche Verfassung.</p>
        <p class="vb-intro"><strong>c) Trägheit als Schutzmuster, das zur Falle wurde:</strong>
        Die für die Neun typische Tendenz, unangenehme Realitäten auszublenden statt aktiv
        gegenzusteuern, könnte mit erklären, warum die gesundheitlichen Warnzeichen über
        Jahre nicht zu einem früheren, geordneten Rückzug aus der Situation führten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Selbst, das sich vollständig einer Sache unterordnete:</strong>
        Assanges gesamte Identität war seit der Gründung von WikiLeaks untrennbar mit der
        Idee radikaler Transparenz verwoben – die jahrelange Isolation traf ausgerechnet
        jenes Selbst, das sich nie als eigenständig von dieser Mission verstanden hatte,
        und ließ es fast bis zum Zerbrechen kommen.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Isolation und Bewegungsentzug?</strong>
        Für einen sozialen Neuner mit Einserflügel, dessen gesamte Identität auf
        Zugehörigkeit zu einer größeren Sache beruht, liegt eine Deutung nahe: Ausgerechnet
        der vollständige Entzug von Außenkontakt und Bewegungsfreiheit bedrohte genau jene
        Fähigkeit zur Verschmelzung mit einer Gemeinschaft, aus der die SO9 ihre Identität
        bezieht – ein erzwungener Rückwurf auf ein Selbst, das kaum je unabhängig von einer
        größeren Sache existiert hatte. Diese Deutung ist eine plausible Interpretation,
        kein belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Isolationsfolgen
        führt – <strong>jeder Mensch kann jede Krankheit oder gesundheitliche Folge
        erleiden, unabhängig vom Subtyp.</strong> Was sich an Assanges Fall zeigen lässt,
        ist ein Muster im Umgang mit erzwungener Isolation, das bei einer ausgeprägten
        sozialen Neun mit Einserflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Assange kennt sein eigenes Muster nicht als Enneagramm-Struktur – die soziale Neun
        mit Einserflügel verschmilzt reflexhaft mit der eigenen Sache, statt die eigene
        körperliche Warnung je als Grund zum Rückzug anzuerkennen, und genau dieses Muster
        lebte er über mehr als ein Jahrzehnt praktisch unverändert aus. Wer die eigene
        Neigung, sich vollständig in einer Mission aufzulösen, nicht als Muster erkennt,
        kann auch angesichts eindeutiger körperlicher Warnzeichen nicht rechtzeitig
        gegensteuern.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Neun mit Einserflügel erklärt bei <strong>Julian Assange</strong> vieles
        am Verlauf seiner eigenen gesundheitlichen Krise: ein Mann, dessen gesamte
        Identität mit einer Idee verschmolz, die größer war als er selbst, ließ sich von
        Jahren dokumentierter körperlicher und psychischer Belastung nicht von seinem
        Prinzip abbringen – der Büffel, der den Kopf senkt und weitergeht, auch wenn der
        eigene Körper längst zu wanken begonnen hat.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-julian-assange", label:"Porträt: Julian Assange (SO9w1) – Gründer von WikiLeaks"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

export function konradAdenauerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-konrad-adenauer-portrait.jpg" alt="Konrad Adenauer" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Konrad Adenauer</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · 1876–1967</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Konrad Adenauer</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-konrad-adenauer">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort weitgehend außen vor bleibt:
        ein schwerer Autounfall 1917, der sein Gesicht lebenslang veränderte, gefolgt von
        Verfolgung und Haft unter den Nationalsozialisten sowie den gesundheitlichen
        Einbrüchen seines letzten Lebensjahres.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Adenauer</strong> ist der <strong>selbsterhaltenden Eins mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet den Vollkommenheitsanspruch der Eins auf das eigene,
        unmittelbare Überleben und Funktionieren – Ordnung, Kontrolle und moralische
        Korrektheit als Schutz vor Chaos und Verletzlichkeit. Der Neunerflügel bringt eine
        ruhige, unerschütterlich wirkende Präsenz hinzu, hinter der sich Anspannung oft lange
        verbirgt – ein Muster, das sich bis in Adenauers äußerlich stets kontrollierte Haltung
        nach einem im wörtlichen Sinne zertrümmerten Gesicht nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kontrolle über das eigene Erscheinungsbild als Lebensprinzip:</strong>
        Nach dem Unfall, der sein Gesicht dauerhaft veränderte, arbeitete Adenauer sein
        gesamtes weiteres Leben an einer öffentlichen Erscheinung von unerschütterlicher
        Ruhe und Autorität – das genaue Gegenteil der erlittenen Verwundbarkeit.</p>
        <p class="vb-intro"><strong>b) Wachsamkeit als Grundhaltung:</strong>
        Ob nach dem Unfall, während der Verfolgung durch die Nationalsozialisten oder im hohen
        Amt – Adenauers Blick galt stets der Frage, welche Gefahr als Nächstes drohen könnte,
        und wie ihr durch Vorsicht und Struktur zu begegnen sei.</p>
        <p class="vb-intro"><strong>c) Öffentliche Fassung trotz privater Erschütterung:</strong>
        Selbst in den Monaten der Gestapo-Verfolgung 1944 hielt Adenauer nach eigener
        Aussage seine Haltung gegenüber den Verhörenden als "scharf, aber korrekt" –
        eine kontrollierte Contenance, die auch unter existenziellem Druck nicht zusammenbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein schwerer Autounfall 1917:</strong>
        Der Dienstwagen des damals 41-jährigen Kölner Beigeordneten Adenauer kollidierte mit
        einer Straßenbahn. Jochbein und Nasenbein brachen, der Unterkiefer wurde zertrümmert
        und ausgerenkt, mehrere Zähne gingen verloren, die Sehkraft war beeinträchtigt, dazu
        kamen tiefe Kopfwunden.</p>
        <p class="vb-intro"><strong>b) Monatelange Rekonstruktion:</strong>
        Es folgten ein monatelanger Krankenhausaufenthalt und mehrere rekonstruktive
        Operationen am Gesicht. Die markanten, eingefallenen Gesichtszüge, für die Adenauer
        später bekannt wurde, sind zu einem erheblichen Teil direkte Unfallfolge – keine
        gewöhnliche Alterserscheinung.</p>
        <p class="vb-intro"><strong>c) Verfolgung ab 1933:</strong>
        Nach der Machtübernahme der Nationalsozialisten wurde Adenauer als Kölner
        Oberbürgermeister abgesetzt und aus Köln verwiesen; er fand zeitweise Zuflucht in der
        Abtei Maria Laach. Im Juni 1934, im Umfeld des sogenannten Röhm-Putsches, folgte eine
        zweitägige Gestapo-Haft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Flucht und erneute Verhaftung 1944:</strong>
        Wegen einer perniziösen Anämie zunächst als haftuntauglich eingestuft und ins
        Krankenhaus verlegt, gelang Adenauer im September 1944 mit einem gefälschten
        Transportschein die Flucht. Er tauchte in einer Pension bei Hachenburg unter, wurde
        jedoch wieder aufgegriffen.</p>
        <p class="vb-intro"><strong>b) Zwei Monate Gestapo-Gefängnis Brauweiler:</strong>
        Von Ende September bis Ende November 1944 saß Adenauer im Gestapo-Gefängnis
        Brauweiler ein. Seine Zelle lag direkt über dem Verhörraum – nachts hörte er die
        Misshandlung anderer Gefangener und verbrachte, wie er selbst beschrieb,
        schweißgebadete Nächte unter psychischer Belastung.</p>
        <p class="vb-intro"><strong>c) Das Trauma der eigenen Familie:</strong>
        Seine Frau Auguste, unter Verhör zur Preisgabe seines Fluchtortes gezwungen, versuchte
        aus Schuldgefühlen sich das Leben zu nehmen. Sie wurde rechtzeitig gerettet, starb
        jedoch 1948 an den Spätfolgen – ein Leid, das die gesamte Familie Adenauer
        lebenslang begleitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Bemerkenswerte Vitalität trotz allem:</strong>
        Trotz Unfall, Verfolgung und Haft amtierte Adenauer von 1949 bis 1963 als
        Bundeskanzler – bis ins Alter von 87 Jahren galt er als außergewöhnlich
        arbeitsfähig und vital.</p>
        <p class="vb-intro"><strong>b) Zwei Herzinfarkte im Frühjahr 1967:</strong>
        Am 29. März 1967 erlitt der 91-Jährige einen ersten Herzinfarkt, über Ostern folgte
        ein zweiter. Sein Körper, der jahrzehntelang bemerkenswert stabil funktioniert hatte,
        begann in den letzten Lebenswochen rasch nachzulassen.</p>
        <p class="vb-intro"><strong>c) Tod nach kurzer letzter Erkrankung:</strong>
        Auf die Herzinfarkte folgte eine grippale Bronchitis, die sich zu einer Lungenentzündung
        entwickelte. Konrad Adenauer starb am 19. April 1967 im Alter von 91 Jahren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Wiederaufbau als Lebensmuster:</strong>
        So wie sein Gesicht nach 1917 chirurgisch wiederhergestellt wurde, baute Adenauer nach
        1945 buchstäblich einen zerstörten Staat wieder auf – ein Muster von Rekonstruktion
        nach Zerstörung, das sich durch sein gesamtes Leben zieht.</p>
        <p class="vb-intro"><strong>b) Kontrolle als Energiequelle unter Druck:</strong>
        Die Fähigkeit, unter existenzieller Bedrohung – Unfall, Verfolgung, Haft – äußerlich
        gefasst zu bleiben, war keine Abwesenheit von Angst, sondern eine trainierte,
        disziplinierte Kanalisierung der eigenen Anspannung in kontrolliertes Handeln.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus dem Amt:</strong>
        Die Energie der SE1w9 richtete sich bis ins hohe Alter auf dieselbe Grundhaltung:
        Ordnung schaffen, Verantwortung tragen, nicht aufgeben, solange die Aufgabe nicht
        erfüllt ist.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Verletzung, kein fortschreitendes Leiden:</strong>
        Anders als bei den meisten anderen Krankheitsporträts dieses Kompasses steht bei
        Adenauer am Anfang keine schleichende Erkrankung, sondern ein einmaliges, plötzliches
        Trauma – der Autounfall von 1917 –, dessen körperliche und wohl auch psychische
        Folgen ihn jedoch lebenslang begleiteten.</p>
        <p class="vb-intro"><strong>b) Eine zweite Erschütterung, zwei Jahrzehnte später:</strong>
        Wo der Unfall 1917 den Körper traf, trafen Verfolgung und Haft 1933/34 und 1944 die
        Existenz und die Familie – zwei sehr unterschiedliche, aber strukturell verwandte
        Erfahrungen von plötzlichem Kontrollverlust, denen Adenauer beide Male mit äußerer
        Fassung begegnete.</p>
        <p class="vb-intro"><strong>c) Ein Körper, der bis zum Schluss funktionierte:</strong>
        Erst mit 91 Jahren, im Frühjahr 1967, versagte der Körper endgültig – nach
        Jahrzehnten, in denen er trotz früher Verletzung bemerkenswert stabil geblieben war.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Gesicht?</strong>
        Bei einer selbsterhaltenden Eins, deren gesamtes Lebensprinzip auf Kontrolle,
        Korrektheit und makelloser äußerer Haltung beruht, liegt eine Deutung nahe: Der
        Unfall traf ausgerechnet jenen Körperteil, über den Autorität, moralische Integrität
        und öffentliches Auftreten am unmittelbarsten vermittelt werden – das Gesicht. Statt
        sich zurückzuziehen, verwandelte Adenauer die sichtbaren Narben in das Gegenteil von
        Schwäche: ein Gesicht, das zu einem der bekanntesten und autoritätsstiftendsten
        Erscheinungsbilder der deutschen Nachkriegsgeschichte wurde. Diese Deutung ist eine
        plausible Interpretation, kein historisch belegter Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu Unfällen
        oder Verletzungen führt – <strong>jeder Mensch kann jede Krankheit oder Verletzung
        erleiden, unabhängig vom Subtyp.</strong> Was sich an Adenauers Fall zeigen lässt, ist
        ein Muster, das bei dem Bedürfnis, gerade nach erlittener Verwundbarkeit äußere
        Kontrolle und Ordnung wiederherzustellen, in der Praxis immer wieder auffällt – eine
        von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Adenauer kannte sein eigenes Muster nicht – die selbsterhaltende Eins mit Neunerflügel verwandelt Verletzung reflexhaft in kontrollierte äußere Ordnung, und genau das tat er, als er die Narben seines Unfalls zum Ausdruck disziplinierter Autorität formte, statt sich die dahinterliegende Erschütterung einzugestehen. Wer das eigene Kontrollmuster nicht kennt, hält die Fassade so lange aufrecht, dass selbst nahestehende Menschen die tatsächliche Belastung kaum erahnen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Eins mit Neunerflügel prägt <strong>Adenauers</strong> Leben bis in
        die eigene Verletzungs- und Verfolgungsgeschichte hinein: ein 1917 zertrümmertes
        Gesicht, das er zum Ausdruck kontrollierter Autorität umformte, zwei Jahrzehnte
        später Verfolgung und Haft, denen er mit derselben äußeren Fassung begegnete, und ein
        Körper, der bis zum 91. Lebensjahr bemerkenswert stabil blieb. Der Adler, der nach
        jedem Sturz wieder aufstieg – nicht unversehrt, aber ungebrochen in seiner
        Entschlossenheit, Ordnung wiederherzustellen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-konrad-adenauer", label:"Porträt: Konrad Adenauer (SE1w9) – Lebenswerk"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Krankheitsporträt: Astrid Lindgren (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function ludwigWittgensteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-wittgenstein-portrait.jpg" alt="Ludwig Wittgenstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig Wittgenstein</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · 1889–1951</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ludwig Wittgenstein</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-wittgenstein">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, den Adler als Tiermotiv und
        seine Typstruktur im Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort nur
        gestreift wird: der Prostatakrebs-Diagnose vom Dezember 1949, den Monaten unklarer
        Erschöpfung davor, und den letzten anderthalb Jahren bis zu seinem Tod 1951.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Wittgenstein</strong> ist der <strong>selbsterhaltenden Eins mit Neunerflügel</strong>
        zugeordnet. Die SE1 misst sich unablässig an einem inneren Maßstab von Integrität und
        Vollständigkeit – Krankheit ist für diesen Subtyp nicht einfach ein körperliches Ereignis,
        sondern eine Art Beweis der eigenen Unvollkommenheit, dem mit Disziplin und möglichst
        wenig öffentlicher Klage begegnet wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Monatelange, unklare Erschöpfung:</strong>
        Bereits Monate vor der eigentlichen Diagnose litt Wittgenstein an einer Erschöpfung, die
        zunächst nicht eindeutig zugeordnet werden konnte – ein Zustand, den er, seinem Muster
        entsprechend, lange herunterspielte, statt ihn zum zentralen Thema zu machen.</p>
        <p class="vb-intro"><strong>b) Eine erste, falsche Fährte:</strong>
        Ein Arzt in Dublin diagnostizierte zunächst eine Blutarmut und verschrieb Eisen- und
        Leberpräparate – eine Behandlung, die das eigentliche Problem nicht traf und die Klärung
        zusätzlich verzögerte.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten trotz spürbarer Schwäche:</strong>
        Auch in dieser Phase unklarer gesundheitlicher Beschwerden setzte Wittgenstein seine
        philosophische Arbeit fort – ein Innehalten allein wegen unspezifischer Erschöpfung kam für
        ihn nicht infrage, solange keine eindeutige Diagnose vorlag.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Diagnose im Dezember 1949:</strong>
        Erst im Dezember 1949 wurde die tatsächliche Ursache gefunden: Prostatakrebs, zu diesem
        Zeitpunkt bereits mit Metastasen in der Wirbelsäule – eine Diagnose, die von vornherein
        keine Aussicht auf Heilung mehr bot.</p>
        <p class="vb-intro"><strong>b) Eine Hormonbehandlung mit hohem Preis:</strong>
        Die eingeleitete Hormontherapie (Stilböstrol) sollte das Fortschreiten verlangsamen –
        brachte aber über dreizehn, vierzehn Monate hinweg einen Zustand mit sich, in dem
        Wittgenstein sich selbst als nahezu unfähig zu denken beschrieb.</p>
        <p class="vb-intro"><strong>c) Der Verlust des eigenen Werkzeugs:</strong>
        Für einen Mann, dessen gesamte Identität auf der Schärfe des eigenen Denkens beruhte, war
        dieser vorübergehende Verlust der Denkfähigkeit vermutlich schwerer zu ertragen als die
        Diagnose selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Klage:</strong>
        Wittgenstein sprach auch im Angesicht der unheilbaren Diagnose kaum öffentlich über sein
        Leiden – ganz im Einklang mit dem SE1w9-Muster, Schwäche nicht zur Schau zu stellen,
        sondern in Zurückgezogenheit zu verarbeiten.</p>
        <p class="vb-intro"><strong>b) Reisen zwischen Wien, Oxford und Cambridge:</strong>
        Die letzten beiden Lebensjahre verbrachte er wechselnd zwischen Wien, Oxford und Cambridge
        – kein Rückzug ins Krankenbett, sondern ein Leben, das trotz der Diagnose in Bewegung
        blieb.</p>
        <p class="vb-intro"><strong>c) Arbeit bis fast zuletzt:</strong>
        Selbst in dieser Phase setzte Wittgenstein seine philosophische Arbeit fort, so gut es die
        Kräfte zuließen – das Manuskript, das später als <em>Über Gewissheit</em> veröffentlicht
        wurde, entstand in genau diesen letzten Monaten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug zu seinem Arzt:</strong>
        In seinen letzten Wochen zog Wittgenstein, der zuvor jahrzehntelang selbst kaum ein
        eigenes Zuhause im herkömmlichen Sinn unterhielt, in das Haus seines Arztes Dr. Edward
        Bevan in Cambridge – eine seltene Geste des Sich-Anvertrauens für einen Mann, der Nähe
        selten zuließ.</p>
        <p class="vb-intro"><strong>b) Ein bewusstes letztes Fest:</strong>
        Kurz vor seinem Tod bat er Mrs. Bevan, sein bevorstehendes Ende noch nicht mit ihm zu
        besprechen, und feierte, soweit möglich, seinen zweiundsechzigsten Geburtstag im April
        1951 – Normalität als letzter Akt der Selbstkontrolle.</p>
        <p class="vb-intro"><strong>c) Tod am 29. April 1951:</strong>
        Ludwig Wittgenstein starb zwei Tage nach seinem Geburtstag im Haus seines Arztes in
        Cambridge. Seine letzten überlieferten Worte: »Sagt ihnen, ich hatte ein wunderbares
        Leben.«</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">5. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Robert De Niro (SE1w9):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-robert-de-niro">Robert
        De Niro</a>, ebenfalls SE1w9, war es dieselbe Krankheit – Prostatakrebs –, die hier auf
        zwei gegensätzliche Weisen verarbeitet wurde. De Niro ließ seine 2003 diagnostizierte
        Erkrankung zügig und diskret behandeln und überlebte; bei Wittgenstein wurde die Diagnose
        deutlich später gestellt, zu einem Zeitpunkt, an dem Heilung nicht mehr möglich war – zwei
        Varianten derselben SE1-Grundhaltung, körperliche Warnsignale möglichst lange nicht zum
        zentralen Thema zu machen, nur mit unterschiedlichem Ausgang.</p>
        <p class="vb-intro"><strong>b) Gesundheit als weiteres Feld des eigenen Anspruchs:</strong>
        Für eine SE1 ist der eigene Körper kein neutraler Schauplatz, sondern ein weiteres Feld, auf
        dem sich der innere Anspruch an Integrität und Vollständigkeit misst. Eine Krankheit, die
        sich nicht kontrollieren oder durch Disziplin abwenden lässt, stellt diesen Anspruch auf
        eine Weise infrage, die für die SE1 kaum erträglich ist – und genau deshalb oft lange
        verdrängt oder heruntergespielt wird, bis eine eindeutige Diagnose keine Ausflucht mehr
        zulässt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Verlust der Denkfähigkeit?</strong>
        Für einen Mann, dessen gesamtes Selbstverständnis auf der Schärfe des eigenen Denkens
        beruhte, liegt eine Deutung nahe: Die Hormonbehandlung traf ausgerechnet das Werkzeug, mit
        dem Wittgenstein zeitlebens seinen eigenen, unerbittlichen Anspruch an Klarheit
        verwirklicht hatte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu Krebserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Wittgensteins Fall zeigen lässt, ist ein Muster im Umgang mit unklaren
        körperlichen Warnsignalen, das bei einer ausgeprägten selbsterhaltenden Eins immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Wittgenstein kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten noch nicht. Die SE1-Neigung, Schwäche nicht zum zentralen Thema zu machen, kannte
        für ihn keinen eingebauten Warnmechanismus, der ihn zu einer früheren, gründlicheren
        Abklärung der monatelangen Erschöpfung hätte bewegen können. Wer das eigene Muster, Klagen
        möglichst zu vermeiden, nicht kennt, kann es auch nicht rechtzeitig durchbrechen – bei
        Wittgenstein blieb bis zuletzt offen, ob eine frühere Diagnose etwas am Verlauf geändert
        hätte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">6. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Wittgensteins</strong> selbsterhaltende Eins
        mit Neunerflügel noch einmal ablesen: monatelang heruntergespielte Erschöpfung, eine späte,
        unheilbare Diagnose, und eine letzte Lebensphase, die trotz allem von Arbeit, Bewegung und
        einem bewusst gewählten, würdevollen Abschied geprägt war – bis hin zu den eigenen, sorgsam
        gewählten letzten Worten. Der Adler, der bis zuletzt allein seine Kreise zog, selbst als der
        eigene Körper längst nicht mehr mithalten konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ludwig-wittgenstein", label:"Porträt: Ludwig Wittgenstein (SE1w9) – Lebenswerk"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – gleicher Subtyp, gleiche Krankheit"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function martinLutherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-martin-luther-portrait.jpg" alt="Martin Luther" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Martin Luther</p>
        <p class="krim-portrait-typ">SX1w2 · Sexueller Typ 1 mit Zweierflügel · 1483–1546</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Martin Luther</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-martin-luther">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, die Schwarze Mamba als Tiermotiv und
        seine Typstruktur im Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort nur gestreift
        wird: der Dekade zwischen 1535 und seinem Tod 1546, in der sich zunehmende Herz-Kreislauf-Probleme,
        Nierensteine und Schwindelanfälle mit schweren, wiederkehrenden depressiven Episoden verschränkten –
        seinen eigenen »Anfechtungen«.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Luther</strong> ist der <strong>sexuellen Eins mit Zweierflügel</strong>
        zugeordnet. Die SX1 richtet ihren unerbittlichen Vollkommenheitsanspruch mit missionarischer Wucht
        auf eine einzige Sache – bei Luther die reine Lehre. Der Zweierflügel bringt die Sorge um konkrete
        Menschen hinzu, aber auch die Tendenz, die eigene Erschöpfung hinter dem Weiterfunktionieren für
        andere zu verbergen, statt sie sich selbst einzugestehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Anfechtungen bereits im Kloster:</strong>
        Schon als junger Augustinermönch litt Luther unter dem, was er selbst »Anfechtungen« nannte –
        Anfälle tiefster Verzweiflung, Schuld- und Todesangst, die ihn trotz strengster Bußpraxis nie
        verließen. Das Muster war also lange vor der Reformation angelegt, nicht erst eine Folge ihrer
        Belastungen.</p>
        <p class="vb-intro"><strong>b) Erste körperliche Beschwerden ab den 1520er-Jahren:</strong>
        Parallel zu den Anfangsjahren der reformatorischen Bewegung mehrten sich bei Luther Klagen über
        Verdauungsbeschwerden und Nierensteine – Symptome, die er kaum je zum Anlass nahm, sein Arbeitspensum
        zu drosseln.</p>
        <p class="vb-intro"><strong>c) Ein Leben ohne erkennbare Erholungsphasen:</strong>
        Zwischen Predigten, Vorlesungen, Bibelübersetzung, umfangreicher Korrespondenz und permanenter
        theologischer Kontroverse blieb für Luther kaum eine Phase wirklicher Entlastung – ein Betrieb, der
        sich über Jahrzehnte fortsetzte, ohne dass äußere Erfolge die innere Anspannung milderten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Wendepunkt nach 1527:</strong>
        Historiker verorten einen deutlichen Einschnitt um das Jahr 1527: Von da an lässt sich bei Luther
        eine wiederkehrende Verbindung zwischen Kreislaufproblemen und depressiven Verstimmungen erkennen,
        die sich fortan gegenseitig verstärkten, statt unabhängig voneinander aufzutreten.</p>
        <p class="vb-intro"><strong>b) Wachsende gesundheitliche Instabilität:</strong>
        Zeitgenössische wie spätere medizinhistorische Einschätzungen beschreiben Luther in den Jahren nach
        1527 als zunehmend labil – Phasen intensiver Schaffenskraft wechselten sich mit Einbrüchen ab, die
        Körper und Psyche gleichermaßen betrafen.</p>
        <p class="vb-intro"><strong>c) Die Dekade 1535 bis 1545 als Höhepunkt:</strong>
        Diese zehn Jahre gelten als die Phase, in der Krankheit und Depression bei Luther am dichtesten
        zusammenfielen – Herzbeschwerden, Schwindelanfälle und quälende Selbstzweifel, die sich gegenseitig
        befeuerten, statt sich abzuwechseln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) »Ich bin's nicht«:</strong>
        In seinen dunkelsten Momenten soll Luther nach Überlieferung am Boden liegend und weinend
        ausgerufen haben, er sei »es nicht« – ein Ausdruck radikaler Selbstentfremdung, der weit über
        gewöhnliche Erschöpfung hinausgeht.</p>
        <p class="vb-intro"><strong>b) Kein Rückzug aus der Öffentlichkeit:</strong>
        Anders als mancher andere Kranke seiner Zeit zog sich Luther trotz dieser Zustände nicht aus dem
        öffentlichen Leben zurück – Predigten, Vorlesungen und Streitschriften liefen auch in den
        schwersten Jahren nahezu ungebremst weiter.</p>
        <p class="vb-intro"><strong>c) Eine Krankengeschichte, die er selbst dokumentierte:</strong>
        Luthers eigene Briefe und die Aufzeichnungen seines Umfelds – vor allem die späteren »Tischreden« –
        machen seine Leiden ungewöhnlich gut belegbar, weit über das hinaus, was von den meisten Zeitgenossen
        seines Standes überliefert ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Zunehmende Schwindelanfälle in den letzten Jahren:</strong>
        In seinem letzten Lebensjahrzehnt kamen wiederkehrende Schwindelanfälle hinzu, die rückblickend
        als mögliche Menière-Erkrankung gedeutet werden – ein weiteres Symptom, das Luther nie ernsthaft
        von seiner Arbeit abhielt.</p>
        <p class="vb-intro"><strong>b) Eine letzte Reise trotz sichtbarer Schwäche:</strong>
        Im Winter 1546 reiste der bereits gesundheitlich schwer angeschlagene Luther nach Eisleben, um
        einen Erbschaftsstreit zwischen den Grafen von Mansfeld zu schlichten – eine Aufgabe, die er
        trotz erkennbarer Erschöpfung nicht delegierte.</p>
        <p class="vb-intro"><strong>c) Tod in der Geburtsstadt:</strong>
        Martin Luther starb am 18. Februar 1546 in Eisleben, vermutlich an Herzversagen oder einem
        Schlaganfall – in derselben Stadt, in der er 63 Jahre zuvor geboren worden war.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">5. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Robbie Williams (SX1w2):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-robbie-williams">Robbie
        Williams</a>, ebenfalls SX1w2, zeigt sich bei Luther das für diesen Subtyp typische Muster einer
        tief sitzenden, jahrzehntelangen Depression. Die Ausprägung ist jedoch gegenläufig: Williams
        externalisierte seine Erschöpfung über Sucht und öffentliche Zusammenbrüche; Luther kanalisierte
        seine Anfechtungen fast vollständig nach innen und in weitere theologische Arbeit – zwei Varianten
        derselben SX1-Grundhaltung, der eigenen Erschöpfung nie nachzugeben, nur mit entgegengesetztem
        äußerem Ausdruck: Offenlegung bei Williams, Weiterarbeiten bis zur Erschöpfung bei Luther.</p>
        <p class="vb-intro"><strong>b) Zwei sich verstärkende Leiden statt eines einzelnen Ereignisses:</strong>
        Anders als bei manchem anderen Krankheitsporträt gibt es bei Luther keinen einzelnen dramatischen
        Wendepunkt, sondern eine sich über die Dekade 1535 bis 1545 stetig verdichtende Wechselwirkung aus
        körperlichem und seelischem Verfall, die sich gegenseitig nährte, statt unabhängig voneinander zu
        verlaufen.</p>
        <p class="vb-intro"><strong>c) Eine Verschiebung Richtung Stresspunkt:</strong>
        Der Stresspunkt der Eins ist die Vier. In den beschriebenen Symptomen der letzten Lebensjahre –
        Melancholie, radikale Selbstentfremdung, quälender Selbstzweifel statt der für die Eins typischeren
        moralischen Gewissheit – lässt sich eine Verschiebung entlang der Stresslinie erkennen, wie sie bei
        chronischem, jahrzehntelangem Druck typisch ist. Der Kerntyp blieb dabei unverändert die sexuelle
        Eins mit Zweierflügel – doch die Symptomatik der letzten Lebensjahre trägt zunehmend Vierer-Züge.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Herz?</strong>
        Für einen Mann, dessen gesamte Theologie um den Begriff des Glaubens »von Herzen« kreiste – nicht
        um äußerliches Werk, sondern um innere Gewissheit –, liegt eine Deutung nahe: ausgerechnet das
        Organ, das im übertragenen Sinn für die eigene innere Gewissheit steht, wurde in den letzten
        Lebensjahren zum Schauplatz eines Verfalls, der sich mit keiner noch so festen Überzeugung
        aufhalten ließ. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu Herzleiden oder Depression
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Luthers Fall zeigen lässt, ist ein Muster, das bei dem Zwang, den eigenen Eifer niemals
        auszusetzen, in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Luther kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen Lebzeiten
        noch nicht. Sein Eifer, der keine Halbheiten duldete, kannte für ihn keinen eingebauten
        Warnmechanismus, der ihn rechtzeitig zu einer Verlangsamung hätte bewegen können; im Gegenteil,
        die eigene Erschöpfung wurde offenbar in derselben Logik verarbeitet wie jede theologische
        Auseinandersetzung zuvor: als etwas, dem man mit noch mehr Einsatz begegnet, statt ihm nachzugeben.
        Wer das eigene Muster, niemals aufzuhören, nicht kennt, kann es auch nicht rechtzeitig durchbrechen
        – bei Luther endete das erst mit dem Tod, am 18. Februar 1546.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">6. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Luthers</strong> sexuelle Eins mit Zweierflügel noch
        einmal ablesen: eine Dekade zunehmender Herz-Kreislauf-Probleme, die sich untrennbar mit
        wiederkehrenden Anfechtungen verwoben, und ein Eifer, der bis zuletzt keine Pause zuließ – noch die
        letzte Reise nach Eisleben trat er im Dienst einer Sache an, nicht im Dienst der eigenen Genesung.
        Die Schwarze Mamba, die bis zum letzten Atemzug zubiss, auch als der eigene Körper längst nicht
        mehr mithalten konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-martin-luther", label:"Porträt: Martin Luther (SX1w2) – Lebenswerk"},
        {route:"krankheitsportraets-robbie-williams", label:"Krankheitsporträt: Robbie Williams (SX1w2) – gleicher Subtyp"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

export function napoleonBonaparteKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-napoleon-bonaparte-portrait.jpg" alt="Napoleon Bonaparte" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Napoleon Bonaparte</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 1769–1821</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Napoleon Bonaparte</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-napoleon-bonaparte">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier steht ein Kapitel im Zentrum, das dort nur eine Fußnote ist:
        über Jahrzehnte wiederkehrende Magenbeschwerden, ihre dramatische Zuspitzung im Exil
        auf St. Helena und Napoleons Tod 1821 an einem Magenkarzinom – derselben Krankheit,
        an der wahrscheinlich auch sein Vater starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Napoleon</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SO2 richtet die Fürsorge der Zwei nicht auf eine einzelne Beziehung,
        sondern auf ein ganzes Kollektiv – Napoleon investierte, wie Naranjo es beschreibt,
        nicht in Rücklagen, sondern in Beziehung und Loyalität im großen Maßstab. Der
        Dreierflügel bringt unbedingten Ehrgeiz und die Weigerung hinzu, sich von Schwäche –
        auch der eigenen körperlichen – aufhalten zu lassen. Genau dieses Muster lässt sich
        bis in seine letzten, von Schmerzen gezeichneten Lebensjahre nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der eigene Körper als Nebensache neben der Mission:</strong>
        Napoleons Blick galt zeitlebens dem großen Ganzen – dem Feldzug, dem Reich, der
        eigenen historischen Rolle. Körperliche Beschwerden wurden konsequent nachrangig
        behandelt, solange sie die Handlungsfähigkeit nicht vollständig lähmten.</p>
        <p class="vb-intro"><strong>b) Funktionieren trotz Schmerz als Führungsanspruch:</strong>
        Berichten zufolge saß Napoleon am Morgen der Schlacht von Waterloo, am 18. Juni 1815,
        trotz akuter Beschwerden bereits um acht Uhr angezogen und beritten im Sattel – ein
        Führungsanspruch, der keine sichtbare Schwäche duldete.</p>
        <p class="vb-intro"><strong>c) Körperlicher Verfall im Exil als letzte, unausweichliche Realität:</strong>
        Erst auf St. Helena, fern jeder Bühne, wich diese Haltung zunehmend einem Körper, der
        sich der reinen Willenskraft nicht länger fügte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Magenbeschwerden über Jahre:</strong>
        Schon vor seinem Exil sind bei Napoleon gelegentliche Magen- und
        Verdauungsbeschwerden dokumentiert – der genaue Beginn lässt sich in den erhaltenen
        Quellen nicht präzise datieren, doch das Muster zog sich durch weite Teile seines
        Erwachsenenlebens.</p>
        <p class="vb-intro"><strong>b) Eine historisch umstrittene Episode bei Waterloo:</strong>
        Sein Bruder Jérôme berichtete später, Napoleon habe an diesem Tag unter akut
        entzündeten Hämorrhoiden und Blasenbeschwerden gelitten. Die These, dies habe seine
        taktischen Entscheidungen und damit die Niederlage beeinflusst, ist in der
        Geschichtsschreibung populär, aber umstritten und nicht abschließend belegt.</p>
        <p class="vb-intro"><strong>c) Zunehmendes Gewicht in den späteren Jahren:</strong>
        Rekonstruktionen anhand erhaltener Kleidungsstücke zeigen eine deutliche
        Gewichtszunahme von rund 67 auf etwa 90 Kilogramm zwischen 1808 und 1820 – ein
        Kontrollverlust über den eigenen Körper, der seiner sonstigen Disziplin
        entgegenstand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verschlechterung ab 1818:</strong>
        Im Exil auf St. Helena verstärkten sich ab 1818 Übelkeit, Magenschmerzen und
        Harnprobleme. Ab September 1820 folgten häufigere Attacken mit Erbrechen, Fieber und
        Appetitlosigkeit; im Dezember 1820 konnte Napoleon kaum noch gehen.</p>
        <p class="vb-intro"><strong>b) Rapider Verfall in den letzten Lebensmonaten:</strong>
        Zwischen Oktober 1820 und Februar 1821 verschlechterte sich sein Zustand dramatisch:
        anhaltende Bauchschmerzen, Erbrechen, eine ausgeprägte Abneigung gegen Fleisch,
        Schluckbeschwerden, Nachtschweiß und fortschreitende Schwäche. Im letzten Lebensjahr
        verlor er etwa elf Kilogramm.</p>
        <p class="vb-intro"><strong>c) Tod am 5. Mai 1821:</strong>
        Napoleon starb im Alter von 51 Jahren auf St. Helena. Die Autopsie ergab ein
        infiltrativ-ulzeratives Magenkarzinom mit einer arrosiven Blutung als wahrscheinlicher
        unmittelbarer Todesursache – ein heute in der medizinhistorischen Forschung breit
        akzeptierter Befund.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine widerlegte Verschwörungstheorie:</strong>
        Die lange populäre Theorie, Napoleon sei mit Arsen vergiftet worden, gilt heute durch
        mehrere unabhängige moderne Gewebeanalysen als weitgehend widerlegt – erhöhte
        Arsenwerte werden eher auf zeittypische Umweltbelastungen zurückgeführt, nicht auf
        gezielte Vergiftung.</p>
        <p class="vb-intro"><strong>b) Ein wissenschaftlicher Konsens, der die Legende überdauert hat:</strong>
        Anders als die Vergiftungstheorie ist die Diagnose Magenkrebs autopsiebasiert und
        gilt in der Fachwelt als solide belegt – eine nüchterne, aber weniger dramatische
        Erklärung als die jahrzehntelang kursierende Mordthese.</p>
        <p class="vb-intro"><strong>c) Die Waterloo-These als Sinnbild seines gesamten Krankheitsverlaufs:</strong>
        Ob körperliche Beschwerden tatsächlich die Schlacht beeinflussten oder nicht – die
        Erzählung selbst zeigt exemplarisch, wie sehr Napoleons Körper und sein historisches
        Handeln in der öffentlichen Wahrnehmung untrennbar miteinander verwoben wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Funktionieren bis zur Grenze des Erträglichen:</strong>
        Die Bereitschaft, trotz akuter Schmerzen im Sattel zu sitzen und eine Schlacht zu
        führen, zeigt die Dreierflügel-Energie der SO2 in Reinform: Leistung wird erbracht,
        bis der Körper buchstäblich nicht mehr kann.</p>
        <p class="vb-intro"><strong>b) Der Verlust der Bühne als eigentlicher Wendepunkt:</strong>
        Erst als mit dem Exil auch das Publikum, für das Napoleon lebte, verschwand, begann
        der körperliche Verfall sich ungebremst zu zeigen – als hätte die Energie der
        sozialen Zwei zuvor den Körper mitgetragen.</p>
        <p class="vb-intro"><strong>c) Der Golden Retriever, der bis zuletzt für ein Ganzes kämpfte:</strong>
        Selbst im Angesicht des eigenen körperlichen Verfalls diktierte Napoleon auf St.
        Helena seine Memoiren – ein letzter Versuch, weiter für ein Publikum, eine
        Nachwelt, zu wirken.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein über Jahrzehnte wiederkehrendes Muster:</strong>
        Von gelegentlichen Magenbeschwerden in den Feldzugsjahren bis zum tödlichen Karzinom
        auf St. Helena zieht sich eine erkennbare, wenn auch lange nicht ernst genommene
        Linie durch Napoleons Erwachsenenleben.</p>
        <p class="vb-intro"><strong>b) Eine auffällige familiäre Parallele:</strong>
        Napoleons Vater Carlo Buonaparte starb 1785 nach Jahren zunehmender Schwäche
        ebenfalls an Magenkrebs. Napoleon selbst äußerte auf St. Helena die Furcht, das
        gleiche Schicksal wie sein Vater zu teilen – eine Furcht, die sich bewahrheitete.</p>
        <p class="vb-intro"><strong>c) Der Körper als letzter Ort, der sich nicht kommandieren ließ:</strong>
        Ein Mann, der ganze Armeen und halb Europa befehligte, konnte den eigenen Magen
        nicht befehligen – ein Kontrast, der Napoleons letzte Lebensjahre auf St. Helena
        prägte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Magen?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren gesamte Identität an sichtbarer
        Leistung und der Fürsorge für ein großes Kollektiv hing, liegt eine Deutung nahe: Der
        Magen ist das Organ, das buchstäblich verdauen muss, was von außen kommt – bei
        Napoleon jahrzehntelang ein Übermaß an Verantwortung, Druck und ungebremstem Ehrgeiz,
        ohne dass je Raum für Verdauung im übertragenen Sinn blieb. Dass ausgerechnet dieses
        Organ am Ende versagte, in einem Exil, das ihm zum ersten Mal in seinem Leben nichts
        mehr zu verdauen ließ als die eigene Vergangenheit, liest sich als konsequenter
        Abschluss dieses Musters. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu
        Magenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Napoleons Fall zeigen lässt, ist ein
        Muster, das bei der kompromisslosen Priorisierung von Leistung und Fürsorge für ein
        großes Ganzes über die eigenen körperlichen Signale hinweg in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Napoleon kannte sein eigenes Muster nicht – die soziale Zwei mit Dreierflügel verdrängt die eigene Verwundbarkeit zugunsten der nächsten großen Aufgabe, und genau das ließ ihn jahrzehntelange Magenbeschwerden ignorieren, selbst als sie sein strategisches Urteilsvermögen bei Waterloo beeinträchtigt haben könnten. Wer das eigene Verdrängungsmuster nicht kennt, riskiert am Ende genau das, wofür er alles andere geopfert hat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Dreierflügel bestätigt sich bei <strong>Napoleon</strong> noch
        einmal in der eigenen Erkrankung: über Jahrzehnte hingenommene Magenbeschwerden,
        eine umstrittene, aber sinnbildliche Episode bei Waterloo, und ein Tod 1821, der
        exakt das familiäre Muster seines Vaters wiederholte. Der Golden Retriever, der
        ganze Armeen mobilisierte, bis der eigene Körper die letzte, unüberwindbare
        Front wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-napoleon-bonaparte", label:"Porträt: Napoleon Bonaparte (SO2w3) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function oprahWinfreyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-oprah-winfrey-portrait.jpg" alt="Oprah Winfrey – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Oprah Winfrey</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · geb. 1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Oprah Winfrey</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-oprah-winfrey">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihren Weg von der Armut in Mississippi
        zum eigenen Medienimperium. Im Vordergrund dieser Seite steht ein Kapitel, das dort nur
        kurz angerissen wird: die Kindheit, in der Oprah Winfrey ab etwa ihrem neunten
        Lebensjahr über mehrere Jahre von mehreren Familienmitgliedern und Bekannten sexuell
        missbraucht wurde, mit 14 Jahren schwanger wurde und ihr Kind wenige Wochen nach der
        Geburt verlor – und wie sie diese Geschichte Jahrzehnte später zu einem zentralen,
        öffentlich gemachten Teil ihrer Medienarbeit machte. Diese Seite verzichtet bewusst auf
        Details der Taten selbst und konzentriert sich auf Offenlegung, Verarbeitung und
        Wirkung.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Oprah Winfrey</strong> ist dem <strong>selbsterhaltenden Typ 2 mit
        Dreierflügel</strong> zugeordnet. Naranjo nannte die selbsterhaltende Zwei <em>Me
        First</em>: Die eigene Überlebensfähigkeit muss zuerst gesichert sein, bevor Fürsorge
        für andere überhaupt möglich wird. Der Dreierflügel gibt dieser Fürsorge ein
        unübersehbares, öffentliches Format – bei Oprah Winfrey die Entscheidung, die eigene
        verwundbarste Geschichte nicht zu verbergen, sondern sie vor einem Millionenpublikum
        zum Werkzeug der Heilung für andere zu machen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Kindheit zwischen mehreren Haushalten:</strong>
        Oprah Winfrey wuchs in den ersten Lebensjahren in Armut bei ihrer Großmutter in
        ländlichem Mississippi auf, bevor sie zwischen den Haushalten ihrer Mutter in Milwaukee
        und ihres Vaters in Nashville wechselte – ein instabiles Umfeld ohne durchgehenden
        Schutz.</p>
        <p class="vb-intro"><strong>b) Missbrauch ab etwa neun Jahren:</strong>
        Wie Oprah Winfrey selbst öffentlich berichtet hat, wurde sie im Alter von etwa neun
        Jahren erstmals von einem Verwandten sexuell missbraucht – der Beginn einer mehrjährigen
        Phase, in der mehrere Familienmitglieder und Bekannte der Familie sie missbrauchten.</p>
        <p class="vb-intro"><strong>c) Ein Geheimnis, das sie über Jahre allein trug:</strong>
        Sie sprach über diese Erfahrungen jahrelang mit niemandem – ein Schweigen, das sie
        selbst später als eine der schwersten Lasten ihrer Jugend beschrieb, verstärkt durch
        das Gefühl, in der eigenen Notlage niemandem vertrauen zu können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fortgesetzter Missbrauch bis ins Teenageralter:</strong>
        Der Missbrauch setzte sich nach eigener Aussage bis zu ihrem vierzehnten Lebensjahr
        fort, verübt von mehreren Tätern aus dem nahen familiären und bekanntschaftlichen
        Umfeld – nicht ein einzelnes Ereignis, sondern ein über Jahre wiederholtes Muster.</p>
        <p class="vb-intro"><strong>b) Schwangerschaft mit 14 Jahren:</strong>
        Mit 14 Jahren wurde Oprah Winfrey schwanger. Aus Scham verheimlichte sie die
        Schwangerschaft so lange wie möglich, bis sie durch körperliche Anzeichen offensichtlich
        wurde.</p>
        <p class="vb-intro"><strong>c) Der Tod des Sohnes wenige Wochen nach der Geburt:</strong>
        Ihr Sohn kam zu früh zur Welt und starb wenige Wochen nach der Geburt im Krankenhaus –
        ein Verlust, über den sie öffentlich erst Jahrzehnte später ausführlicher sprach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die öffentliche Offenlegung am 10. November 1986:</strong>
        In einer Sendung ihrer eigenen Talkshow zum Thema sexueller Missbrauch, in der Betroffene
        und Täter zu Wort kamen, machte Oprah Winfrey live vor Millionen Zuschauerinnen und
        Zuschauern öffentlich, dass sie selbst als Kind Missbrauchsopfer gewesen war – ein
        damals seltener, öffentlicher Bruch des Schweigens durch eine derart bekannte Person.</p>
        <p class="vb-intro"><strong>b) Ein Verwandter verkauft die Geschichte 1990 an ein Boulevardblatt:</strong>
        1990 wandte sich ein Familienmitglied an die Boulevardpresse und verkaufte Details über
        Winfreys Teenagerschwangerschaft – eine erneute, diesmal ungewollte Offenlegung, die sie
        zwang, öffentlich weiter zu ihrer Geschichte zu stehen, statt sie zu leugnen.</p>
        <p class="vb-intro"><strong>c) Engagement für den National Child Protection Act:</strong>
        1991 sagte Oprah Winfrey vor dem Justizausschuss des US-Senats aus und setzte sich unter
        Bezug auf ihre eigene Geschichte für eine bundesweite Datenbank verurteilter
        Kindesmissbraucher ein. Das Gesetz wurde 1993 unterzeichnet und im Volksmund als
        „Oprah Bill" bekannt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Talkshow, die Trauma zum wiederkehrenden Thema machte:</strong>
        Über die Jahrzehnte griff <em>The Oprah Winfrey Show</em> das Thema Kindesmissbrauch
        und dessen Folgen immer wieder auf – nicht als einmaliges Bekenntnis, sondern als
        dauerhafter Bestandteil ihrer journalistischen und therapeutischen Arbeit vor der
        Kamera.</p>
        <p class="vb-intro"><strong>b) Bücher und Reflexionen als zweite Bühne:</strong>
        In Interviews, ihrem Magazin und Büchern wie <em>What I Know For Sure</em> kehrte sie
        wiederholt zu den Themen Kindheit, Verletzlichkeit und Heilung zurück – ihre eigene
        Geschichte blieb über Jahrzehnte ein roter Faden ihres öffentlichen Wirkens.</p>
        <p class="vb-intro"><strong>c) Die Oprah Winfrey Leadership Academy for Girls:</strong>
        2007 gründete sie in Südafrika die Oprah Winfrey Leadership Academy for Girls, eine
        Schule für Mädchen aus benachteiligten Verhältnissen – ein Projekt, das ihre eigene
        Erfahrung von Armut und Verletzlichkeit direkt in konkrete Fürsorge für andere Mädchen
        übersetzt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fürsorge, die bei der eigenen Geschichte beginnt:</strong>
        Für eine selbsterhaltende Zwei, deren Fürsorge zuerst bei der eigenen Basis ansetzt,
        wurde die eigene Kindheitsgeschichte selbst zum Ausgangspunkt: Erst indem sie die
        eigene Verletzlichkeit anerkannte und öffentlich machte, konnte sie sie in ein
        Werkzeug für andere verwandeln.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als Antrieb, aus persönlichem Leid ein öffentliches Format zu machen:</strong>
        Statt die Geschichte privat zu halten, machte Oprah Winfrey sie zu einem wiederkehrenden
        Bestandteil ihrer Sendung, ihrer Bücher und ihres politischen Engagements – typisch für
        den Dreierflügel, der auch das schwerste Kapitel in ein sichtbares, wirkungsvolles
        Statement verwandelt, das möglichst viele Menschen erreichen soll.</p>
        <p class="vb-intro"><strong>c) Von der eigenen Verwundung zur strukturellen Veränderung:</strong>
        Dass sie ihre persönliche Geschichte bis vor den US-Senat trug und dort in ein
        konkretes Gesetz zum Schutz anderer Kinder übersetzte, zeigt die typische Bewegung der
        SE2w3: von der eigenen Not zur greifbaren, institutionellen Fürsorge für andere.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Wunde an genau der Stelle, an der später ihre Stärke entstand:</strong>
        Die frühe Erfahrung von Missbrauch, Ohnmacht und Schweigen betraf ausgerechnet jenen
        Bereich – die eigene, verletzlichste Geschichte –, den Oprah Winfrey später zur
        Grundlage ihrer öffentlichen Wirkung machte. Was sie als Kind verbergen musste, wurde
        Jahrzehnte später zur Quelle ihrer größten Wirkmacht.</p>
        <p class="vb-intro"><strong>b) Erst Jahre des Schweigens, dann eine bewusste, wiederholte Offenlegung:</strong>
        Zwischen dem Erleben des Missbrauchs und der ersten öffentlichen Offenlegung 1986 lagen
        rund zwei Jahrzehnte – ein für die selbsterhaltende Zwei typisches Muster: Erst die
        eigene Stabilität und berufliche Basis sichern, bevor die verletzlichste Geschichte
        nach außen getragen wird.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die eigene Kindheitsgeschichte zum wiederkehrenden öffentlichen Thema wurde?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren Fürsorge zuerst bei der eigenen
        Basis ansetzt und die zugleich messbare Wirkung sucht, lässt sich in der wiederholten
        öffentlichen Offenlegung der eigenen Missbrauchsgeschichte eine Zuspitzung des eigenen
        Lebensmusters lesen: Die eigene, tiefste Verletzlichkeit wird nicht länger verborgen,
        sondern – im Dreierflügel-typischen öffentlichen Format – so genutzt, dass sie
        größtmögliche Wirkung für andere entfaltet. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei mit Dreierflügel
        zwangsläufig zu Missbrauchserfahrungen führt oder diese erklärt – <strong>jeder Mensch
        kann unabhängig vom Subtyp Opfer von Missbrauch werden, und kein Subtyp trägt daran
        eine Mitschuld.</strong> Was sich an Oprah Winfreys Fall zeigen lässt, ist ein Muster
        im späteren Umgang mit einer erlittenen Verletzung, das bei einer ausgeprägten
        selbsterhaltenden Zwei mit Dreierflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Oprah Winfrey kannte, wie die meisten Menschen, ihr eigenes Enneagramm-Muster über
        weite Strecken ihres Lebens nicht bewusst. Ohne dieses Wissen lebte sie dennoch genau
        das Muster der selbsterhaltenden Zwei mit Dreierflügel aus: erst die eigene Not
        stillschweigend ertragen, dann – sobald die eigene Basis gesichert war – die
        verletzlichste eigene Geschichte in ein möglichst großes, öffentlich wirksames Format
        verwandeln. Dass sie dieses Muster nicht als Charakterzug erkannte, sondern es einfach
        lebte, erklärt, warum aus einem einzelnen Bekenntnis 1986 über Jahrzehnte ein
        durchgehendes Lebensthema wurde, das Talkshow, Bücher und politisches Engagement
        gleichermaßen prägte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Zwei mit Dreierflügel zeigt sich bei <strong>Oprah Winfrey</strong>
        in der Art, wie sie mit der eigenen Kindheitsgeschichte umging: erst jahrelanges
        Schweigen, um die eigene Basis zu sichern, dann eine bewusste, wiederholte öffentliche
        Offenlegung, die zum Werkzeug der Heilung für Millionen wurde. Das Flusspferd, das
        einst selbst um sein Überleben kämpfen musste, verteidigte sein Revier am Ende nicht
        mehr nur für sich, sondern öffnete es – als sicheres Ufer für alle, die sich in seiner
        Geschichte wiedererkannten.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-oprah-winfrey", label:"Porträt: Oprah Winfrey (SE2w3) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function robertDeNiroKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robert-de-niro-portrait.jpg" alt="Robert De Niro" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert De Niro</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · geb. 1943</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robert De Niro</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-robert-de-niro">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine 2003 diagnostizierte Prostatakrebs-
        Erkrankung, die er weitgehend privat behandeln ließ und nur knapp öffentlich
        kommentierte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>De Niro</strong> ist dem <strong>selbsterhaltenden Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet ihren Anspruch an Genauigkeit nach innen, auf die eigene
        Vorbereitung und Integrität; der Neunerflügel bringt eine Zurückhaltung hinzu, die
        sich nicht öffentlich zeigen muss, um zu wirken. Genau diese Kombination – präzise,
        entschlossene medizinische Behandlung bei gleichzeitiger, fast vollständiger
        öffentlicher Zurückhaltung – bestimmte den Umgang mit der eigenen Krebsdiagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose im Jahr 2003:</strong>
        Bei De Niro wurde 2003 im Rahmen einer Routineuntersuchung Prostatakrebs
        diagnostiziert – ein früher Diagnosezeitpunkt, der eine erfolgreiche Behandlung
        deutlich begünstigte.</p>
        <p class="vb-intro"><strong>b) Keine ausführliche öffentliche Ankündigung:</strong>
        Anders als viele andere Prominente mit vergleichbaren Diagnosen gab De Niro keine
        ausführliche öffentliche Erklärung ab, sondern ließ die Nachricht knapp über
        Medienberichte bekannt werden.</p>
        <p class="vb-intro"><strong>c) Zügige Einleitung der Behandlung:</strong>
        Nach der Diagnose begann De Niro nach übereinstimmenden Berichten zügig mit der
        Behandlung, ohne den Prozess öffentlich zu begleiten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolgreiche Behandlung ohne dauerhafte öffentliche Sichtbarkeit:</strong>
        Die Behandlung verlief nach allen vorliegenden Berichten erfolgreich, ohne dass De
        Niro den Krankheitsverlauf zu einem fortlaufenden öffentlichen Thema machte.</p>
        <p class="vb-intro"><strong>b) Wenige, sehr knappe spätere Erwähnungen:</strong>
        In seltenen späteren Interviews erwähnte De Niro die Erkrankung nur knapp, meist im
        Zusammenhang mit Appellen an andere Männer, sich regelmäßig untersuchen zu lassen.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus der Schauspielarbeit:</strong>
        Anders als bei manchen Kollegen führte die Diagnose zu keiner erkennbaren Unterbrechung
        seiner Filmarbeit – De Niro blieb während und nach der Behandlung kontinuierlich
        aktiv.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Gelegentliche öffentliche Nutzung zur Sensibilisierung:</strong>
        In den Jahren nach seiner Genesung nutzte De Niro vereinzelte öffentliche Anlässe, um
        auf die Bedeutung früher Prostatakrebs-Vorsorgeuntersuchungen hinzuweisen.</p>
        <p class="vb-intro"><strong>b) Keine Krankheitsgeschichte als Teil seines öffentlichen Bildes:</strong>
        Im Unterschied zu Schauspielern, die ihre Krankengeschichte zu einem wiederkehrenden
        Thema in Interviews machten, blieb De Niros Erkrankung ein Randaspekt seiner
        öffentlichen Biografie.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte hohe berufliche Produktivität:</strong>
        In den zwei Jahrzehnten nach der Diagnose drehte De Niro Dutzende weiterer Filme,
        darunter mehrere mit Martin Scorsese, ohne dass die frühere Erkrankung öffentlich
        thematisiert wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Diskrete Aufmerksamkeit statt öffentlicher Kampagne:</strong>
        De Niros knappe, seltene Erwähnungen der eigenen Erkrankung erzeugten dennoch
        punktuelle mediale Aufmerksamkeit für das Thema Prostatakrebs-Vorsorge, ohne dass er
        selbst zur zentralen öffentlichen Stimme des Themas wurde.</p>
        <p class="vb-intro"><strong>b) Keine dramatisierte Genesungserzählung:</strong>
        Anders als bei manch anderer Krebserkrankung Prominenter existiert keine ausführliche,
        emotional aufgeladene öffentliche Erzählung von De Niros Genesungsprozess.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Bild, das von der Erkrankung unberührt blieb:</strong>
        De Niros öffentliches Image blieb von der Krebserkrankung praktisch unberührt – es
        dominierten weiterhin seine Filmrollen und sein handwerklicher Ruf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Präzise Behandlung ohne öffentliche Inszenierung:</strong>
        Die SE1-typische Genauigkeit im Umgang mit der eigenen Sache zeigte sich auch bei der
        Krebsbehandlung: konsequent, zügig eingeleitet, ohne dass der Prozess selbst zum
        Gegenstand öffentlicher Aufmerksamkeit wurde.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und der Rückzug, sobald die Aufgabe erledigt ist:</strong>
        Dieselbe Zurückhaltung, die De Niro nach jedem Filmdreh in die Stille zurückkehren
        lässt, zeigte sich im Umgang mit der eigenen Krankheit: Sobald die Behandlung
        abgeschlossen war, verschwand das Thema fast vollständig aus seiner öffentlichen
        Präsenz.</p>
        <p class="vb-intro"><strong>c) Vorsorge als sachliche Botschaft, nicht als persönliches Bekenntnis:</strong>
        Wenn De Niro die Erkrankung überhaupt erwähnte, geschah dies in Form einer sachlichen
        Empfehlung an andere Männer, nicht als ausführliche persönliche Erzählung – Wahrhaftigkeit
        im Handwerk der Botschaft, ohne unnötige Selbstdarstellung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Meister der Vorbereitung, der die eigene Krankheit ebenso methodisch behandelte:</strong>
        De Niros gesamtes Werk beruht auf akribischer, nahezu wissenschaftlicher Vorbereitung
        – dieselbe Methodik übertrug sich auf den Umgang mit der eigenen Krebsdiagnose: zügig
        erkannt, konsequent behandelt, ohne unnötige öffentliche Dramatisierung.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Parallelen zeigen sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer</a> und
        <a href="javascript:void(0)" data-route="krankheitsportraets-astrid-lindgren">Astrid
        Lindgren</a> (beide ebenfalls SE1w9): Alle drei begegneten gesundheitlichen
        Einschränkungen mit diszipliniertem, praktischem Handeln statt öffentlicher
        Aufmerksamkeit. Bei allen SE1w9ern zeigt sich dasselbe Muster: Die Krankheit wird
        gelöst wie eine Aufgabe – gründlich, aber ohne Bühne.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Prostata, ein stilles, selten thematisiertes Organ?</strong>
        Für einen selbsterhaltenden Typ 1 mit Neunerflügel, dessen gesamtes Werk auf
        methodischer Vorbereitung und zugleich auf öffentlicher Zurückhaltung beruht, liegt
        eine Deutung nahe: Ausgerechnet ein Organ, über das gesellschaftlich selten offen
        gesprochen wird, wurde zum Ort seiner eigenen, ebenso zurückhaltend behandelten
        Erkrankung. Diese Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Prostatakrebs führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an De Niros Fall zeigen lässt, ist ein
        Muster im Umgang mit einer erfolgreich behandelten Erkrankung, das bei einem
        ausgeprägten selbsterhaltenden Typ 1 mit Neunerflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        De Niro kennt sein eigenes Muster nicht als Enneagramm-Struktur – der selbsterhaltende
        Typ 1 mit Neunerflügel hält reflexhaft an der eigenen, stillen Selbstständigkeit fest,
        statt gesundheitliche Themen offen zu teilen, und lebt genau dieses Muster bis heute
        weitgehend unverändert aus. Wer die eigene Neigung, auch ernste Angelegenheiten
        methodisch und ohne öffentliche Aussprache zu erledigen, nicht als Muster erkennt,
        riskiert, dass wichtige gesundheitliche Botschaften an andere unausgesprochen
        bleiben.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Neunerflügel erklärt bei <strong>Robert De
        Niro</strong> vieles am Umgang mit der eigenen Prostatakrebs-Erkrankung: ein Mann,
        dessen gesamtes Handwerk auf präziser, stiller Vorbereitung beruht, behandelte auch
        die eigene Krankheit als eine Aufgabe, die gelöst und dann verlassen werden musste –
        der Adler, der über seinem Revier kreiste, zuschlug, wenn es nötig war, und danach
        wieder in die Stille zurückkehrte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsporträt: Konrad Adenauer (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Krankheitsporträt: Astrid Lindgren (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-ludwig-wittgenstein", label:"Krankheitsporträt: Ludwig Wittgenstein (SE1w9) – gleicher Subtyp, gleiche Krankheit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function salvatoreRiinaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/salvatore-riina-portrait.jpg" alt="Salvatore Riina" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Salvatore Riina</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel · 1930–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Salvatore Riina</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-salvatore-riina">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um seinen Aufstieg zum mächtigsten
        Mafia-Boss Italiens und 23 Jahre im Untergrund. Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: einen mehrjährigen gesundheitlichen Verfall in
        Hochsicherheitshaft, wiederholt abgelehnte Anträge auf Haftverschonung aus
        gesundheitlichen Gründen, und einen Tod 2017 im Krankenhausflügel des Gefängnisses
        von Parma.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Riina</strong> ist der <strong>selbsterhaltenden Acht mit Neunerflügel</strong>
        zugeordnet. Macht ist für die SE8 Sicherheitsinstrument, nicht Bühne – Kontrolle über
        den eigenen Bereich um jeden Preis. Genau diese Weigerung, die eigene Kontrolle
        jemals aufzugeben, bestimmte auch, wie sein Verteidigungsteam bis zuletzt für seine
        Freilassung kämpfte, selbst als sein Körper längst keine Kontrolle mehr zuließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Fortschreitende Nierenerkrankung ab den 2010er-Jahren:</strong>
        In den Jahren vor seinem Tod litt Riina zunehmend an einer chronischen
        Niereninsuffizienz, die regelmäßige medizinische Behandlung in der Haftanstalt
        erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Erste Anträge auf Haftverschonung:</strong>
        Sein Verteidigungsteam beantragte mehrfach eine Aussetzung der Haft aus
        gesundheitlichen Gründen – die Gerichte lehnten dies wiederholt ab und verwiesen auf
        seine fortbestehende Gefährlichkeit als Mafia-Boss.</p>
        <p class="vb-intro"><strong>c) Schlaganfall im Juli 2017:</strong>
        Ein schwerer Schlaganfall versetzte Riina in einen komaähnlichen Zustand, aus dem er
        sich nicht mehr vollständig erholte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Verlegung in den Krankenhausflügel von Parma:</strong>
        Nach dem Schlaganfall wurde Riina in die medizinische Einrichtung des Gefängnisses
        von Parma verlegt, wo schwer kranke Häftlinge unter fortgesetzter
        Hochsicherheitsbewachung behandelt wurden.</p>
        <p class="vb-intro"><strong>b) Erneute, dringlichere Anträge auf Freilassung:</strong>
        Angesichts seines nun offenkundig lebensbedrohlichen Zustands stellte sein
        Verteidigungsteam einen letzten, dringlichen Antrag auf Haftverschonung – auch dieser
        wurde von den zuständigen Gerichten abgelehnt.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis der eigenen Sterblichkeit:</strong>
        Selbst in dieser letzten Phase gibt es keine Berichte über eine öffentliche
        Stellungnahme Riinas selbst, die eine Anerkennung seines nahenden Todes erkennen
        ließ – nur die juristischen Anträge seiner Verteidigung sprachen für ihn.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vollständige Isolation trotz nahenden Todes:</strong>
        Auch im komaähnlichen, sterbenden Zustand blieb Riina formal dem strengen 41-bis-
        Haftregime unterstellt, das für die gefährlichsten Mafia-Häftlinge Italiens
        vorgesehen ist – keine Lockerung, selbst als er längst nicht mehr ansprechbar war.</p>
        <p class="vb-intro"><strong>b) Gerichte bestätigten die fortbestehende Gefährlichkeit:</strong>
        Die wiederholten Ablehnungen der Haftverschonungsanträge stützten sich ausdrücklich
        auf die Einschätzung, dass Riinas symbolische Autorität innerhalb der Cosa Nostra
        auch im Sterben fortbestehe.</p>
        <p class="vb-intro"><strong>c) Tod am 17. November 2017 in Parma:</strong>
        Salvatore Riina starb im Alter von 87 Jahren im Krankenhausflügel des Gefängnisses
        von Parma – 24 Jahre nach seiner Verhaftung, ohne je wieder in Freiheit gewesen zu
        sein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der öffentliche Debatten über Strafvollzug auslöste:</strong>
        Die wiederholte Ablehnung der Haftverschonungsanträge trotz seines offenkundig
        sterbenden Zustands entfachte in Italien eine öffentliche Debatte über die Grenzen
        des Hochsicherheitsregimes bei todkranken Häftlingen.</p>
        <p class="vb-intro"><strong>b) Kein Symbol, keine letzte Geste:</strong>
        Anders als bei manch anderer historischer Figur dieses Kompasses gibt es keine
        überlieferte letzte Botschaft, keine symbolische Geste – nur den stillen, formal
        weiter bewachten Tod eines Mannes, der sein Leben lang jede Kontrolle über sein
        Umfeld behauptet hatte.</p>
        <p class="vb-intro"><strong>c) Ein Begräbnis ohne öffentliche Zeremonie:</strong>
        Anders als bei anderen Mafia-Bossen früherer Generationen fand keine öffentlich
        sichtbare Trauerfeier statt – ein stiller Abgang für einen Mann, dessen Macht sich
        nie durch Repräsentation, sondern durch stille Kontrolle ausdrückte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle bis zum letzten Atemzug – durch die Verteidigung:</strong>
        Dieselbe Weigerung, jemals Kontrolle abzugeben, die Riinas gesamtes Leben prägte,
        zeigte sich noch in den juristischen Anträgen seiner Verteidiger, die bis zuletzt
        für seine Freilassung kämpften – ein letzter, stellvertretender Versuch, dem
        eigenen Schicksal doch noch eine Wendung zu geben.</p>
        <p class="vb-intro"><strong>b) Wenn die selbsterhaltende Acht unter chronischem Stress zur Fünf wird:</strong>
        Sein eigenes Porträt beschreibt bereits, wie seine jahrzehntelange Isolation im
        Untergrund Züge des Stresspunkts Fünf trug – totaler Rückzug, Abschottung,
        Beobachtung statt offener Konfrontation. In seiner letzten Lebensphase, im
        komaähnlichen Zustand des Krankenhausflügels, vollendete sich dieses Muster auf
        buchstäbliche Weise: eine vollständige, physische Isolation von der Welt, die er
        einst kontrollierte – bei unverändertem Kerntyp SE8w9.</p>
        <p class="vb-intro"><strong>c) Keine sichtbare Kapitulation:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über ein öffentliches Eingeständnis von Schwäche oder Reue – die Härte, mit
        der er sein Leben führte, wurde von den Gerichten bis zuletzt als fortbestehend
        eingeschätzt, unabhängig von seinem tatsächlichen körperlichen Zustand.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich der Kontrolle entzog:</strong>
        Riinas gesamtes Leben war von der Überzeugung geprägt, dass sein eigener Bereich –
        Sizilien, die Cosa Nostra, sein Clan – durch Wachsamkeit und Härte vollständig
        beherrschbar sei. Niereninsuffizienz und Schlaganfall waren die ersten Bedrohungen,
        gegen die weder Loyalität noch Einschüchterung halfen.</p>
        <p class="vb-intro"><strong>b) Von der stillen Macht zur stillen Ohnmacht:</strong>
        Ein Mann, dessen gesamte Macht auf unauffälliger, ruhiger Kontrolle beruhte – „keine
        Villen, keine öffentlichen Auftritte, kein Protz", wie es sein eigenes Porträt
        beschreibt –, verbrachte seine letzten Monate in einer Stille, die nicht mehr
        gewählt, sondern erzwungen war.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ein Schlaganfall?</strong>
        Für eine selbsterhaltende Acht mit Neunerflügel, deren gesamte Kraft auf
        wachsamer Beobachtung und der Fähigkeit beruhte, im entscheidenden Moment
        vollständig zu handeln, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das
        Wachsamkeit, Beobachtung und Entscheidungsfähigkeit ermöglichte, wurde zum
        Schauplatz des Verfalls – und versetzte ihn in genau jenen Zustand
        vollständiger Reaktionsunfähigkeit, den er sein Leben lang bei anderen als
        tödliche Schwäche gewertet hätte. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu
        Nierenversagen oder Schlaganfall führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Riinas Fall zeigen lässt, ist
        ein Muster im Umgang mit gesundheitlichem Verfall, das bei einer ausgeprägten
        selbsterhaltenden Acht mit Neunerflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Riina kannte sein eigenes Muster nicht – die selbsterhaltende Acht mit Neunerflügel
        begegnet jeder Bedrohung des eigenen Territoriums reflexhaft mit Kontrolle und
        stiller Härte, statt sich je mit der eigenen Verletzlichkeit auseinanderzusetzen,
        und genau dieses Muster bestimmte noch die juristischen Kämpfe um seine Freilassung
        bis in seine letzten Lebenstage. Wer die eigene Notwendigkeit, jede Kontrolle zu
        behalten, nicht als Muster erkennt, kann sie auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Acht mit Neunerflügel erklärt bei <strong>Riina</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamtes Leben auf stiller,
        unangefochtener Kontrolle über sein Territorium beruhte, verbrachte seine letzten
        Monate in einem Zustand vollständiger, erzwungener Machtlosigkeit – der Orang-Utan,
        der seinen Wald nie durch Prunk, sondern durch bloße Präsenz beherrschte, verlor am
        Ende selbst diese Präsenz.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Salvatore
        Riina wurde in zahlreichen Prozessen wegen Mordes und Mafia-Zugehörigkeit zu
        mehrfacher lebenslanger Haft verurteilt und starb 2017 in Gefangenschaft. Das
        Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-salvatore-riina", label:"Kriminalpsychologie: Salvatore Riina (SE8w9) – Boss der Cosa Nostra"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

export function umbertoEcoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-umberto-eco-portrait.jpg" alt="Dr. Umberto Eco" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Umberto Eco</p>
        <p class="krim-portrait-typ">SE8w7 · Selbsterhaltender Typ 8 mit Siebenerflügel · 1932–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Umberto Eco</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-umberto-eco">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur beiläufig erwähnt wird: eine rund zwei Jahre lang nahezu
        vollständig privat gehaltene Bauchspeicheldrüsenkrebs-Erkrankung, während der Eco
        bis wenige Monate vor seinem Tod im Februar 2016 unvermindert publizierte, lehrte
        und öffentlich auftrat.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Eco</strong> ist dem <strong>selbsterhaltenden Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Die SE8 sichert sich Fülle und Unabhängigkeit, statt sich einer fremden
        Autorität – auch der eigenen Diagnose – zu unterwerfen; der Siebenerflügel bringt
        die Leichtigkeit, mit der Eco selbst eine tödliche Diagnose nicht zum
        beherrschenden Thema seines Lebens werden ließ. Genau diese Kombination – Fülle und
        Genuss bis zuletzt, verbunden mit der Weigerung, sich als kranker Mann zu inszenieren
        – bestimmte den Umgang mit der eigenen Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose rund zwei Jahre vor seinem Tod:</strong>
        Nach übereinstimmenden biografischen Quellen wurde bei Eco etwa zwei Jahre vor
        seinem Tod ein Bauchspeicheldrüsenkarzinom diagnostiziert.</p>
        <p class="vb-intro"><strong>b) Fast vollständige Geheimhaltung im öffentlichen Leben:</strong>
        Anders als bei vielen Prominenten blieb die Diagnose außerhalb seines engsten
        Umfelds weitgehend unbekannt – Eco sprach in Interviews und öffentlichen Auftritten
        praktisch nicht über seine Erkrankung.</p>
        <p class="vb-intro"><strong>c) Unvermindertes literarisches Schaffen:</strong>
        Trotz der Diagnose veröffentlichte Eco 2015 mit „Nullnummer" seinen letzten Roman –
        ein Werk, das keinerlei Anzeichen einer nachlassenden Schaffenskraft erkennen ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte öffentliche Auftritte bis kurz vor dem Tod:</strong>
        Eco hielt Vorträge, gab Interviews und nahm an öffentlichen Diskussionen teil, bis
        wenige Monate vor seinem Tod – ohne dass Beobachter von seiner schweren Erkrankung
        wussten.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Krankheitsnarrative:</strong>
        Im Unterschied zu anderen Intellektuellen seiner Generation machte Eco seine
        Krankheit nie zum Gegenstand eines Essays, einer Kolumne oder eines Interviews –
        eine bewusste Entscheidung zur Trennung von Werk und privatem Leiden.</p>
        <p class="vb-intro"><strong>c) Familiäre statt öffentliche Begleitung:</strong>
        Die letzten Monate verbrachte Eco im Kreis seiner Familie in Mailand, weitgehend
        abgeschirmt von öffentlicher Aufmerksamkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 19. Februar 2016 in Mailand:</strong>
        Umberto Eco starb im Alter von 84 Jahren in seiner Wohnung in Mailand, umgeben von
        seiner Familie.</p>
        <p class="vb-intro"><strong>b) Weltweite Anteilnahme nach der offiziellen Bekanntgabe:</strong>
        Erst mit der Todesnachricht wurde die Öffentlichkeit über die Krebserkrankung
        informiert – für viele Leser und Kollegen eine Überraschung, da Eco bis zuletzt
        keinerlei Rückzug angedeutet hatte.</p>
        <p class="vb-intro"><strong>c) Kein Abschiedswerk im engeren Sinne:</strong>
        Anders als manche Autoren, die im Angesicht des Todes ein explizites Vermächtniswerk
        verfassen, hinterließ Eco kein Buch, das offen als Abschied von der eigenen
        Sterblichkeit gelesen werden konnte – „Nullnummer" bleibt ein Roman über
        Medienmanipulation, kein Krankheitsbuch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Trauer und Würdigung:</strong>
        Ecos Tod löste international Nachrufe und Würdigungen aus, die vor allem sein
        enzyklopädisches Werk und seine intellektuelle Neugier bis ins hohe Alter
        hervorhoben.</p>
        <p class="vb-intro"><strong>b) Überraschung über das Ausmaß der Geheimhaltung:</strong>
        Zahlreiche Weggefährten äußerten sich überrascht, wie vollständig Eco seine Krankheit
        vor der Öffentlichkeit und sogar vor Teilen seines beruflichen Umfelds verborgen
        hatte.</p>
        <p class="vb-intro"><strong>c) Ein Bild ungebrochener Vitalität bis zuletzt:</strong>
        Das öffentliche Bild, das von Eco bis zu seinem Tod bestand, war das eines
        unermüdlich neugierigen, produktiven Intellektuellen – nicht das eines schwer
        kranken Mannes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fülle statt Rückzug als Antwort auf die Diagnose:</strong>
        Die SE8-typische Überzeugung, dass Sicherheit aus Fülle entsteht, zeigte sich darin,
        dass Eco seine Produktivität, seine Lektüren, seine Sammlungen und seine öffentlichen
        Auftritte trotz der Diagnose nicht reduzierte, sondern bis zuletzt fortführte.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Weigerung, sich als Kranker zu inszenieren:</strong>
        Dieselbe Leichtigkeit, mit der Eco selbst über Semiotik und Trivialkultur mit
        derselben Neugier schrieb, zeigte sich im Umgang mit der eigenen Krankheit als
        bewusste Entscheidung, die eigene Sterblichkeit nicht zum öffentlichen Thema zu
        machen.</p>
        <p class="vb-intro"><strong>c) Kontrolle durch Diskretion statt durch Konfrontation:</strong>
        Anders als eine konfrontativere Acht wählte Eco nicht den offenen Kampf gegen die
        Krankheit als öffentliche Geste, sondern die vollständige Kontrolle über die
        Information selbst – Macht durch Schweigen statt durch Auftritt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Sammler der Fülle, der die eigene Endlichkeit nicht sammeln ließ:</strong>
        Ecos gesamtes Werk beruhte auf der Überzeugung, dass Wissen, Bücher und Erfahrung
        sich unbegrenzt anhäufen lassen – ausgerechnet die eine Grenze, die sich nicht
        aufschieben ließ, blieb aus seinem öffentlichen Werk vollständig ausgespart.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die Bauchspeicheldrüse, das stille Organ?</strong>
        Für einen selbsterhaltenden Typ 8 mit Siebenerflügel, dessen gesamtes Lebensprinzip
        Fülle, Genuss und die enzyklopädische Aneignung der Welt war, liegt eine Deutung
        nahe: Ausgerechnet ein Organ, das lange symptomlos bleibt und sich jeder frühen
        Kontrolle entzieht, wurde zum Ort einer Krankheit, die Eco bis zuletzt nicht öffentlich
        zu kontrollieren versuchte, sondern schlicht verschwieg. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu
        Bauchspeicheldrüsenkrebs führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Ecos Fall zeigen lässt, ist
        ein Muster im Umgang mit einer tödlichen Diagnose, das bei einem ausgeprägten
        selbsterhaltenden Typ 8 immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Eco kannte sein eigenes Muster nicht als Enneagramm-Struktur – der selbsterhaltende
        Typ 8 hält reflexhaft an der eigenen Souveränität über die persönliche Information
        fest, statt die eigene Verwundbarkeit rechtzeitig mit anderen zu teilen, und lebte
        genau dieses Muster bis zum letzten Werk unverändert aus. Wer die eigene Neigung, die
        Kontrolle über das eigene Bild um jeden Preis zu wahren, nicht als Muster erkennt,
        riskiert, dass die Wahrheit erst mit dem Tod selbst ans Licht kommt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 8 mit Siebenerflügel erklärt bei <strong>Umberto Eco</strong>
        vieles am Umgang mit der eigenen Krankheit: ein Mann, dessen gesamtes Werk auf der
        lustvollen Fülle des Wissens beruhte, behandelte auch die eigene tödliche Diagnose als
        privates Territorium, das niemand betreten durfte – der Orang-Utan, der bis zuletzt in
        seinem Baum thronte und niemanden sehen ließ, dass der Ast bereits brach.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-umberto-eco", label:"Porträt: Umberto Eco (SE8w7)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

export function winstonChurchillKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-winston-churchill-portrait.jpg" alt="Winston Churchill – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Winston Churchill</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel · 1874–1965</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Winston Churchill</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-winston-churchill">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur
        im Allgemeinen. Hier geht es ausschließlich um zwei Kapitel, die dort nur beiläufig
        angesprochen werden: seine lebenslange, wiederkehrende Depression, die er selbst
        &bdquo;the black dog&ldquo; nannte, und einen schweren Schlaganfall im Juni 1953, den
        er im Amt des Premierministers wochenlang vor Öffentlichkeit, Presse und weiten Teilen
        des eigenen Kabinetts verbergen ließ.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Churchill</strong> ist der <strong>selbsterhaltenden Acht mit Neunerflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-golda-meir">Golda Meir</a>
        in diesem Kompass. Naranjo nannte die selbsterhaltende Acht <em>Satisfacción</em>:
        Sicherheit entsteht durch kompromisslose Verteidigung des eigenen Territoriums und die
        Weigerung, Schwäche zu zeigen. Der Neunerflügel bringt die Ausdauer hinzu, eine
        Position über Jahre zu halten, ohne vorschnell zu triumphieren oder aufzugeben – bei
        Churchill auch im Umgang mit der eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Konfrontativ, direkt, prüfend:</strong>
        Churchills Blick in Reden und Bildmaterial war stets nach außen gerichtet, bereit zum
        Widerstand – der typische &bdquo;Orang-Utan-Blick&ldquo; der Acht, der keine Schwäche
        zulässt.</p>
        <p class="vb-intro"><strong>b) Nach außen unerschütterlich, nach innen verborgen:</strong>
        Öffentlich zeigte Churchill nie Zweifel oder Angst – die Depression, die ihn
        lebenslang begleitete, und den Schlaganfall von 1953 verbarg er mit derselben
        Entschlossenheit, mit der er politische Gegner bekämpfte.</p>
        <p class="vb-intro"><strong>c) Wachsam gegenüber jedem Anzeichen von Kontrollverlust:</strong>
        Wo eine öffentlich sichtbare Schwäche seine Autorität hätte untergraben können,
        reagierte Churchill mit sofortiger Informationskontrolle – typisch selbsterhaltende
        Acht: das eigene Territorium umfasst auch das Bild, das andere von einem haben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Das Amt als Territorium, das verteidigt wird:</strong>
        Auch mit fortschreitendem Alter und sichtbar nachlassender Gesundheit dachte Churchill
        nicht an Rücktritt – die Downing Street war Territorium, das eine SE8 nicht freiwillig
        räumt.</p>
        <p class="vb-intro"><strong>b) Appetit als Lebensprinzip:</strong>
        Zigarren, Whisky, opulentes Essen bis ins hohe Alter – die selbsterhaltende Acht
        sichert sich Fülle und Intensität, ungeachtet medizinischer Warnungen.</p>
        <p class="vb-intro"><strong>c) Kontrolle über die eigene Erzählung:</strong>
        Mit Hilfe des Pressemagnaten Lord Beaverbrook und loyaler Ärzte steuerte Churchill
        gezielt, was über seinen Gesundheitszustand öffentlich wurde – die Acht bestimmt
        selbst, welches Bild von ihr in die Welt geht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Durchhalten trotz sichtbaren Verfalls:</strong>
        Nach dem Schlaganfall im Juni 1953 war Churchills linke Körperseite tagelang gelähmt,
        seine Sprache beeinträchtigt – dennoch führte er das Land wenige Wochen später wieder,
        als sei nichts geschehen.</p>
        <p class="vb-intro"><strong>b) Ausdauer statt Eile, dank Neunerflügel:</strong>
        Wo eine SE8w7 vielleicht ungeduldig auf schnelle Genesung gedrängt hätte, ließ sich
        Churchill Zeit für seine Erholung – im Verborgenen, aber ohne die Position
        aufzugeben.</p>
        <p class="vb-intro"><strong>c) Loyale Komplizenschaft als Schutzschild:</strong>
        Kabinettsmitglieder, Ärzte und Journalisten, die von der Schwere des Schlaganfalls
        wussten, hielten geschlossen dicht – ein Netzwerk, das Churchills Territorium mit
        verteidigte, ohne dass er es aktiv erzwingen musste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Unangreifbar wirkend, selbst in der Schwäche:</strong>
        Der Öffentlichkeit blieb der Schlaganfall zu Lebzeiten weitgehend unbekannt – Churchill
        erschien bis zuletzt als der Fels, der er sein wollte.</p>
        <p class="vb-intro"><strong>b) Respekt durch demonstrierte Unbeugsamkeit:</strong>
        Gerade weil er keine Schwäche zeigte, wuchs der Mythos um seine Unerschütterlichkeit –
        ein Effekt, den die SE8 bewusst oder unbewusst kultiviert.</p>
        <p class="vb-intro"><strong>c) Ein Bild, das bis heute nachwirkt:</strong>
        Erst Jahrzehnte nach seinem Tod wurde das volle Ausmaß seiner gesundheitlichen Krisen
        öffentlich bekannt – ein Beleg dafür, wie vollständig die Informationskontrolle
        funktioniert hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kompromisslose Verausgabung:</strong>
        Churchill arbeitete, rauchte und trank bis ins hohe Alter mit derselben Intensität wie
        in jungen Jahren – die SE8 kennt kaum Mäßigung, solange die eigene Kraft trägt.</p>
        <p class="vb-intro"><strong>b) Der schwarze Hund als Gegenpol:</strong>
        Die wiederkehrende Depression stand in scharfem Kontrast zur öffentlichen Fassade –
        eine innere Erschöpfung, die er zeitlebens fast vollständig privat hielt.</p>
        <p class="vb-intro"><strong>c) Kontrolle bis zur Erschöpfung des Körpers:</strong>
        Der Wille, die eigene Schwäche zu beherrschen statt ihr nachzugeben, forderte seinen
        Tribut – mehrere Schlaganfälle und zunehmende körperliche Gebrechlichkeit prägten
        seine letzten Lebensjahre.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Der schwarze Hund, ein Leben lang:</strong>
        Churchill litt wiederkehrend an schweren depressiven Episoden, die er selbst
        &bdquo;the black dog&ldquo; nannte. Er sprach nur selten offen darüber – ein seltenes
        Eingeständnis von Schwäche bei einem Mann, der öffentlich nie eine zeigte.</p>
        <p class="vb-intro"><strong>b) Ein verborgener Schlaganfall im Amt:</strong>
        Am 23. Juni 1953 erlitt Churchill während eines Abendessens in der Downing Street
        einen schweren Schlaganfall. Sein Kabinett wurde nur teilweise informiert, der
        Öffentlichkeit gegenüber sprach man von &bdquo;Erschöpfung&ldquo;. Er zog sich für
        Wochen zur Erholung zurück, ohne dass sein Amt oder seine Autorität ernsthaft in Frage
        gestellt wurden.</p>
        <p class="vb-intro"><strong>c) Rückkehr in Amt und Öffentlichkeit als Beweis der Stärke:</strong>
        Im Oktober 1953 hielt Churchill – gegen den Rat seiner Ärzte, aber mit sichtbar
        wiederhergestellter Kraft – eine Parteikonferenzrede, die als Beweis diente, dass er
        weiterhin regierungsfähig war. Die selbsterhaltende Acht demonstriert Stärke nicht
        durch Worte, sondern durch die schiere Tatsache des Weitermachens.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="krankheitsportraets-golda-meir">Golda Meir</a>
        (SE8w9) führte ihr Land als Premierministerin, während sie eine schwere Krankheit
        (Lymphdrüsenkrebs) über Jahre weitgehend geheim hielt und ihr Amt nicht aufgab. Bei
        beiden zeigt sich dasselbe SE8-Muster: Die eigene Position wird verteidigt wie
        Territorium – Krankheit ist kein Grund, sie freiwillig zu räumen, sondern eine
        Information, die man selbst kontrolliert.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet das Gehirn?</strong>
        Ein Schlaganfall trifft genau jenes Organ, das über Kontrolle, Sprache und
        Handlungsfähigkeit entscheidet – für eine selbsterhaltende Acht, deren gesamte
        Identität auf ungebrochener Selbstbehauptung beruht, ist kaum ein Organversagen
        bedrohlicher denkbar. Dass Churchill ausgerechnet dort getroffen wurde, wo Befehl und
        Wille entstehen, und dass er genau diesen Kontrollverlust am konsequentesten von allen
        Beschwerden seines Lebens verbarg, liest sich als Zuspitzung seines gesamten
        Lebensmusters: Wo die SE8 keine Schwäche duldet, war der Schlaganfall der radikalste
        Angriff auf das eigene Territorium, den sein Körper ihm zufügen konnte – und er
        antwortete mit derselben Waffe, die er sein Leben lang eingesetzt hatte: Verschweigen,
        Weitermachen, keine Kapitulation. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu
        Schlaganfällen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Churchills Fall zeigen lässt, ist ein Muster, das bei
        kompromissloser Verteidigung der eigenen Unangreifbarkeit in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Churchill kannte sein eigenes Muster nicht – die selbsterhaltende Acht duldet keine Schwäche, schon gar nicht die eigene, und verbarg deshalb selbst einen schweren Schlaganfall vor der Öffentlichkeit, statt kürzerzutreten. Wer die eigene Unverwundbarkeits-Fixierung nicht kennt, verwechselt Verbergen mit Stärke, bis der Körper die Rechnung präsentiert.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Churchill</strong> trug die selbsterhaltende Acht mit Neunerflügel auch durch die
        eigene Erkrankung: eine lebenslange Weigerung, Schwäche zu
        zeigen, eine vollständige Kontrolle über das eigene öffentliche Bild und ein
        Schlaganfall, den er mit derselben Unbeugsamkeit bekämpfte, die ihn 1940 zum Symbol
        des Widerstands gemacht hatte. Der Orang-Utan, der auf dem Ast blieb, während der
        Sturm tobte, hielt auch fest, als der Sturm im eigenen Körper tobte – bis fast
        niemand davon erfuhr.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-winston-churchill", label:"Porträt: Winston Churchill (SE8w9) – Lebenswerk"},
        {route:"krankheitsportraets-golda-meir", label:"Krankheitsporträt: Golda Meir (SE8w9) – dieselbe Verbergungsstrategie"},
        {route:"krankheitsportraets-helmut-kohl", label:"Krankheitsporträt: Helmut Kohl (SE8w9) – dasselbe Muster verborgener Verwundbarkeit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

export function blaisePascalKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-blaise-pascal-portrait.jpg" alt="Blaise Pascal" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Blaise Pascal</p>
        <p class="krim-portrait-typ">SX5w6 · Sexueller Typ 5 mit Sechserflügel · 1623–1662</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Igel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Tierentsprechung: Igel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Blaise Pascal</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-blaise-pascal">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein wissenschaftliches und
        philosophisches Werk. Dieses Porträt vertieft ein Kapitel, das dort nur
        gestreift wird: eine praktisch lebenslange, nie eindeutig diagnostizierte
        Krankheit, die sich in den letzten Lebensjahren mit einer radikalen religiösen
        Selbstkasteiung verband und mit nur 39 Jahren zum Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Pascal</strong> ist dem <strong>sexuellen Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SX5 sucht Sicherheit über eine intensive, fast verschmelzende
        Vertiefung in ein einziges Thema – bei Pascal wechselte dieses Thema im Lauf
        des Lebens von Mathematik und Physik zu einer ebenso kompromisslosen religiösen
        Hingabe. Der Sechserflügel bringt eine tiefe Sehnsucht nach absoluter,
        unerschütterlicher Gewissheit hinzu. Genau diese Kombination aus Verschmelzung
        und Sicherheitssuche prägte auch seinen Umgang mit der eigenen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Kind ohne stabile Gesundheit:</strong>
        Pascal galt schon als Kind als kränklich; Zeitgenossen berichten von früh
        einsetzenden Verdauungsbeschwerden und einer insgesamt zarten Konstitution,
        die sein gesamtes weiteres Leben prägen sollte.</p>
        <p class="vb-intro"><strong>b) Der Beginn der ständigen Schmerzen mit achtzehn:</strong>
        Ab etwa seinem achtzehnten Lebensjahr, so überliefern es mehrere Biografen,
        verging kaum noch ein Tag ohne Schmerzen – heftige Kopfschmerzen, Verdauungsleiden
        und quälende Schlaflosigkeit wurden zu ständigen Begleitern.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten trotz der Beschwerden:</strong>
        Ungeachtet dieser Beschwerden entwickelte Pascal bereits mit neunzehn Jahren
        die erste mechanische Rechenmaschine der Geschichte (die ›Pascaline‹) und
        führte parallel bahnbrechende physikalische Experimente zu Druck und Vakuum durch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die ›Nacht des Feuers‹ 1654:</strong>
        In der Nacht vom 23. auf den 24. November 1654 erlebte Pascal ein intensives
        religiöses Erweckungserlebnis, das er auf einem Zettel festhielt, den er
        bis zu seinem Tod in sein Gewand eingenäht trug – ein radikaler Wendepunkt,
        der seine spätere Hinwendung zum Jansenismus einleitete.</p>
        <p class="vb-intro"><strong>b) Rückzug aus Wissenschaft und Gesellschaft:</strong>
        In den folgenden Jahren zog sich Pascal zunehmend aus dem wissenschaftlichen
        Betrieb und dem Pariser Gesellschaftsleben zurück, verschenkte einen Großteil
        seines Besitzes und lebte zeitweise in klösterlicher Zurückgezogenheit.</p>
        <p class="vb-intro"><strong>c) Ein selbst auferlegtes Bußwerkzeug:</strong>
        Überlieferungen zufolge trug Pascal in seinen letzten Lebensjahren zeitweise
        einen mit spitzen Nägeln versehenen Gürtel unter der Kleidung und stieß sich
        diesen bei aufkommenden eitlen Gedanken bewusst in die Seite.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Eine letzte, unvollendete Verteidigungsschrift des Glaubens:</strong>
        In seinen letzten Lebensjahren arbeitete Pascal an einer umfassenden
        Rechtfertigung des christlichen Glaubens, die postum als ›Pensées‹
        (›Gedanken‹) veröffentlicht wurde – ein Fragment gebliebenes, aber bis
        heute einflussreiches philosophisches Werk.</p>
        <p class="vb-intro"><strong>b) Aufnahme einer fremden, armen Familie ins eigene Haus:</strong>
        Kurz vor seinem Tod nahm der schwerkranke Pascal eine mittellose Familie
        bei sich auf, um sie persönlich zu pflegen und zu versorgen – und zog
        selbst in ein kleineres Zimmer, um ihnen sein Bett zu überlassen.</p>
        <p class="vb-intro"><strong>c) Ablehnung ärztlicher Annehmlichkeiten:</strong>
        Zeitgenössische Berichte schildern, dass Pascal medizinische Behandlung
        und persönlichen Komfort bewusst zurückwies, sofern sie seiner Vorstellung
        christlicher Demut zu widersprechen schienen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein heftiger Krampfanfall als unmittelbare Todesursache:</strong>
        Pascal starb am 19. August 1662 im Alter von nur 39 Jahren nach einem
        schweren Krampfanfall, dem mehrere Wochen zunehmender Schwäche vorausgegangen waren.</p>
        <p class="vb-intro"><strong>b) Eine bis heute umstrittene Diagnose:</strong>
        Die bei der Autopsie festgestellten Magenläsionen und Auffälligkeiten am
        Gehirn werden von medizinhistorischer Seite bis heute unterschiedlich gedeutet
        – diskutiert werden unter anderem eine Darmtuberkulose, ein bösartiger
        Magentumor mit Hirnmetastasen oder eine seltene genetische Erkrankung.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das die eigene Lebenszeit weit überdauerte:</strong>
        Sowohl seine mathematischen und physikalischen Entdeckungen als auch die
        ›Pensées‹ prägen bis heute jeweils die Naturwissenschaft und die
        Religionsphilosophie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung als Strategie, mit dem eigenen Leiden umzugehen:</strong>
        Die für die sexuelle Fünf typische Strategie, sich vollständig in ein Thema
        zu vertiefen, bis die Grenze zwischen sich selbst und der Sache verschwimmt,
        zeigte sich bei Pascal zunächst in der Wissenschaft, später in der Religion
        – beides Wege, dem eigenen körperlichen Leiden eine höhere Bedeutung zu geben.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel als Suche nach unerschütterlicher Gewissheit:</strong>
        Die Radikalität von Pascals spätem Glauben – keine halben Zugeständnisse,
        keine Kompromisse – trägt deutlich die Handschrift des Sechserflügels: eine
        Sicherheit, die keinen Zweifel mehr zulässt, weil Zweifel selbst als
        bedrohlich erlebt wird.</p>
        <p class="vb-intro"><strong>c) Körperlicher Schmerz als Bestätigung der eigenen Ernsthaftigkeit:</strong>
        Die bewusste Selbstkasteiung lässt sich auch als Versuch lesen, durch
        physisches Leiden die eigene innere Hingabe unanfechtbar zu machen –
        Schmerz als Beweis, nicht als bloße Last.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit ohne gesunde Vergleichsphase:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses lässt
        sich bei Pascal kaum eine längere Phase wirklicher Gesundheit ausmachen –
        das Leiden begleitete praktisch sein gesamtes bewusstes Erwachsenenleben.</p>
        <p class="vb-intro"><strong>b) Zwei Vertiefungsphasen, ein Muster:</strong>
        Sowohl die Jahre der mathematisch-physikalischen Genieleistungen als auch
        die spätere religiöse Radikalisierung zeigen dieselbe Grundstruktur: völlige,
        kompromisslose Hingabe an eine einzige Sache, bis zur Selbstaufgabe.</p>
        <p class="vb-intro"><strong>c) Eine letzte Tat der Fürsorge trotz eigener Schwäche:</strong>
        Dass der todkranke Pascal kurz vor seinem Ende noch eine fremde Familie
        bei sich aufnahm und ihr sein eigenes Bett überließ, zeigt, wie sehr auch
        im körperlichen Verfall die Hingabe an eine höhere Sache Vorrang vor der
        eigenen Bequemlichkeit behielt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Kopf und Verdauung?</strong>
        Für eine sexuelle Fünf mit Sechserflügel, deren Sicherheit aus intensivem
        Denken und unerschütterlicher Gewissheit entsteht, liegt eine Deutung nahe:
        Ausgerechnet die Organe, die für Denken (Kopf) und Verarbeiten (Verdauung)
        stehen, wurden bei Pascal zum Ort chronischen Leidens – als könne das, was
        am intensivsten genutzt wurde, dem eigenen Anspruch nie ganz standhalten.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Fünf zwangsläufig zu
        chronischen Kopf- oder Verdauungsleiden führt – <strong>jeder Mensch kann
        jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an
        Pascals Fall zeigen lässt, ist ein Muster, das bei radikaler, alles
        verschlingender Vertiefung in eine einzige Sache in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Pascal kannte sein eigenes Enneagramm-Muster nicht – die sexuelle Fünf mit
        Sechserflügel sucht Sicherheit fast reflexhaft in radikaler, kompromissloser
        Verschmelzung mit einer einzigen Sache, statt einen maßvolleren Mittelweg
        zuzulassen. Genau dieses Muster bestimmte sein Leben bis zuletzt: erst restlos in
        der Wissenschaft, dann restlos im Glauben, nie in einer Balance dazwischen.
        Wer die eigene Neigung zur radikalen Verschmelzung nicht als Muster erkennt,
        verwechselt sie leicht mit reiner Tugend, selbst wenn der eigene Körper
        längst erschöpft ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Pascals</strong> kurzem, von Krankheit durchzogenem Leben lässt
        sich die sexuelle Fünf mit Sechserflügel in einer ihrer radikalsten Formen
        studieren: ein Leben ohne echte gesunde Phase, zwei aufeinanderfolgende
        Vertiefungen ohne jeden Mittelweg, und eine letzte Geste der Fürsorge, die
        selbst die eigene Schwäche noch der höheren Sache unterordnete. Der Igel,
        der sich nie entrollte, sondern nur die Richtung wechselte, in die er sich
        vollständig verschloss.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-blaise-pascal", label:"Porträt: Blaise Pascal (SX5w6) – Lebenswerk"},
        {route:"krankheitsportraets-friedrich-nietzsche", label:"Krankheitsporträt: Friedrich Nietzsche (SX5w4) – verwandter Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx5", label:"Subtyp-Profil SX5"},
      ])}
    </div>
  `);
}

export function diegoVelazquezKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-diego-velazquez-portrait.jpg" alt="Diego Velázquez" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Diego Velázquez</p>
        <p class="krim-portrait-typ">SX9w1 · Sexueller Typ 9 mit Einserflügel · 1599–1660</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Diego Velázquez</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-diego-velazquez">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein malerisches Lebenswerk,
        allen voran ›Las Meninas‹. Diese Seite geht näher auf das ein, was dort
        nur knapp erwähnt wird: seinen plötzlichen Tod binnen einer Woche, unmittelbar
        nachdem er sich für eine letzte, erschöpfende höfische Pflicht vollständig
        verausgabt hatte.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Velázquez</strong> ist dem <strong>sexuellen Typ 9 mit Einserflügel</strong>
        zugeordnet. Die SX9 sucht Erfüllung über völlige Verschmelzung mit einer
        einzelnen intensiven Beziehung oder Aufgabe, verliert dabei aber leicht die
        eigenen Grenzen und Bedürfnisse aus dem Blick. Der Einserflügel bringt einen
        hohen, oft perfektionistischen Anspruch an die eigene Sorgfalt hinzu. Genau
        diese Kombination aus grenzenloser Hingabe und perfektionistischem Anspruch
        führte Velázquez am Ende buchstäblich bis zur völligen Erschöpfung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte im Dienst eines einzigen Hofes:</strong>
        Velázquez trat bereits 1623 in den Dienst des spanischen Königs Philipp IV.
        und blieb diesem Hof – ohne nennenswerte Unterbrechung – bis zu seinem Tod
        fast vier Jahrzehnte lang treu, in stetig wachsender Verantwortung.</p>
        <p class="vb-intro"><strong>b) Eine wachsende Doppelbelastung:</strong>
        Neben seiner Malerei übernahm Velázquez zunehmend höfische Verwaltungsaufgaben,
        zuletzt das Amt des königlichen Kammerherrn (aposentador mayor), das ihn mit
        der gesamten logistischen Organisation höfischer Großereignisse betraute.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Schonung trotz zunehmenden Alters:</strong>
        Auch mit über sechzig Jahren zeigte Velázquez keine Anzeichen, kürzerzutreten
        – im Gegenteil, seine letzte große Aufgabe sollte die anspruchsvollste seines
        gesamten Lebens werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Organisation einer königlichen Hochzeit:</strong>
        1660 wurde Velázquez mit der gesamten zeremoniellen Organisation der Vermählung
        der Infantin María Teresa mit König Ludwig XIV. von Frankreich betraut – einem
        der aufwendigsten diplomatischen Großereignisse seiner Zeit auf der Fasaneninsel
        an der französisch-spanischen Grenze.</p>
        <p class="vb-intro"><strong>b) Wochen ununterbrochener logistischer Schwerstarbeit:</strong>
        Zeitgenössische Quellen beschreiben wochenlange, bis ins kleinste Detail
        durchorganisierte Vorbereitungen – Ausstattung, Dekoration, Protokoll, Transport
        eines gesamten Hofstaats – die Velázquez persönlich verantwortete.</p>
        <p class="vb-intro"><strong>c) Rückkehr nach Madrid, erschöpft:</strong>
        Nach Abschluss der Feierlichkeiten kehrte Velázquez sichtlich erschöpft nach
        Madrid zurück – ohne dass ihm, soweit überliefert, eine Erholungspause zugestanden
        worden wäre.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Plötzliches hohes Fieber wenige Tage nach der Rückkehr:</strong>
        Nur kurz nach seiner Rückkehr nach Madrid erkrankte Velázquez an hohem Fieber
        – vermutlich, so die heute plausibelste Deutung, eine fieberhafte Infektion,
        die seinen bereits erschöpften Körper überforderte.</p>
        <p class="vb-intro"><strong>b) Keine Zeit für eine längere Krankheitsphase:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses gab es bei
        Velázquez keine Vorwarnzeit von Monaten oder Jahren – zwischen sichtbarer
        Erschöpfung und Tod lag nur etwa eine Woche.</p>
        <p class="vb-intro"><strong>c) Bis zuletzt kaum Klagen überliefert:</strong>
        Aus den überlieferten Quellen geht keine ausgeprägte Klage über die eigene
        Erschöpfung hervor – Velázquez scheint seine Verausgabung als selbstverständlichen
        Teil seiner Pflicht hingenommen zu haben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 6. August 1660:</strong>
        Velázquez starb in Madrid, nur wenige Tage nach den ersten Fieberanzeichen,
        im Alter von 61 Jahren – kaum sechs Monate nachdem er die Hochzeitszeremonie
        auf der Fasaneninsel erfolgreich zu Ende gebracht hatte.</p>
        <p class="vb-intro"><strong>b) Ein letztes großes Werk kurz zuvor vollendet:</strong>
        Nur wenige Jahre vor seinem Tod hatte Velázquez mit ›Las Meninas‹ (1656) sein
        heute berühmtestes Gemälde geschaffen – ein Werk, das bis heute als einer der
        Höhepunkte der abendländischen Malerei gilt.</p>
        <p class="vb-intro"><strong>c) Der plötzliche Tod als Schock für den Hof:</strong>
        Sein unerwartetes Ableben nach jahrzehntelangem, unauffällig zuverlässigem
        Dienst traf den spanischen Hof sichtlich unvorbereitet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit einer Aufgabe bis zur Selbstauflösung:</strong>
        Die für die sexuelle Neun typische Strategie, sich vollständig mit einer
        einzelnen intensiven Aufgabe oder Beziehung zu verschmelzen, zeigte sich bei
        Velázquez in seiner jahrzehntelangen, fast bedingungslosen Identifikation mit
        dem Hofdienst – bis zur völligen Erschöpfung der eigenen Reserven.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel als unsichtbarer Antrieb zur Perfektion:</strong>
        Der außergewöhnlich hohe Organisationsanspruch, den die Zeitgenossen an der
        Hochzeitszeremonie beobachteten, trägt deutlich die Handschrift des
        Einserflügels: nichts sollte dem Zufall überlassen bleiben.</p>
        <p class="vb-intro"><strong>c) Kein Wahrnehmen der eigenen Erschöpfung als Warnsignal:</strong>
        Typisch für die Neun ist eine geringe Wahrnehmung eigener Bedürfnisse und
        Grenzen – Velázquez scheint seine sinkenden Kräfte bis zuletzt nicht als
        ernstzunehmendes Warnsignal gedeutet zu haben.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vier Jahrzehnte ohne erkennbare Grenzen:</strong>
        Über seine gesamte Hofkarriere hinweg lässt sich kaum eine Episode erkennen,
        in der Velázquez erkennbar eigene Grenzen setzte oder Aufgaben zurückwies –
        ein durchgehendes Muster grenzenloser Verfügbarkeit.</p>
        <p class="vb-intro"><strong>b) Die letzte Aufgabe als Steigerung, nicht als Ausnahme:</strong>
        Die Fasaneninsel-Zeremonie war keine untypische Episode, sondern die
        konsequente Fortsetzung und Steigerung eines lebenslangen Musters völliger
        Selbstverausgabung im Dienst anderer.</p>
        <p class="vb-intro"><strong>c) Kein Übergang, sondern ein abrupter Bruch:</strong>
        Statt eines allmählichen, über Jahre erkennbaren Verfalls zeigt Velázquez'
        Fall einen abrupten Bruch – erschöpft, aber äußerlich funktionsfähig, dann
        binnen Tagen tot.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein plötzliches Fieber?</strong>
        Für eine sexuelle Neun mit Einserflügel, deren Selbstwahrnehmung ohnehin
        strukturell hinter der Wahrnehmung anderer zurücktritt, liegt eine Deutung
        nahe: Der Körper meldete sich nicht schleichend, weil er über Jahrzehnte
        gelernt hatte, überhört zu werden – erst als die Reserven vollständig
        aufgebraucht waren, zeigte sich die Erschöpfung schlagartig und unübersehbar.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Neun zwangsläufig zu
        plötzlichem Fiebertod führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Velázquez' Fall zeigen
        lässt, ist ein Muster, das beim grenzenlosen Verschmelzen mit einer Aufgabe
        bis zur völligen Selbstvergessenheit in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Velázquez kannte sein eigenes Enneagramm-Muster nicht – die sexuelle Neun mit
        Einserflügel verschmilzt fast reflexhaft mit einer übernommenen Aufgabe, bis
        die eigenen Grenzen darin völlig verschwinden, statt rechtzeitig innezuhalten.
        Genau dieses Muster trug ihn bis zuletzt: eine letzte, perfekt ausgeführte
        Pflicht, die keinen Raum mehr für die eigene Erschöpfung ließ. Wer die eigene
        Neigung zur grenzenlosen Verschmelzung nicht als Muster erkennt, verwechselt
        sie leicht mit reiner Pflichttreue, selbst wenn der eigene Körper längst an
        seine Grenzen stößt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Velázquez'</strong> plötzlichem Tod lässt sich die sexuelle Neun
        mit Einserflügel in einer ihrer stillsten, aber eindrücklichsten Formen
        studieren: vier Jahrzehnte grenzenlose Verfügbarkeit, eine letzte, perfekt
        organisierte Pflichterfüllung als Höhepunkt statt als Ausnahme, und ein Körper,
        der erst meldete, als nichts mehr übrig war. Das Faultier, das sich nie
        ausruhte, bis es für immer zur Ruhe kam.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-diego-velazquez", label:"Porträt: Diego Velázquez (SX9w1) – Lebenswerk"},
        {route:"krankheitsportraets-hundertwasser", label:"Krankheitsporträt: Friedensreich Hundertwasser (SX9w8) – verwandter Subtyp"},
        {route:"krankheitsportraets-juergen-drews", label:"Krankheitsporträt: Jürgen Drews (SX9w8) – dieselbe grenzenlose Verfügbarkeit, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

export function adamSmithKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-adam-smith-portrait.jpg" alt="Adam Smith" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adam Smith</p>
        <p class="krim-portrait-typ">SO1w9 · Sozialer Typ 1 mit Neunerflügel · 1723–1790</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Adam Smith</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-adam-smith">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein ökonomisches Lebenswerk.
        Im Zentrum dieser Seite steht, was dort nur beiläufig erwähnt wird: ein
        jahrzehntelanges, chronisches Verdauungsleiden und eine letzte, radikale
        Geste kurz vor seinem Tod, mit der er sein eigenes unveröffentlichtes Werk
        fast vollständig vernichten ließ.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Smith</strong> ist dem <strong>sozialen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SO1 misst sich und ihr Umfeld an hohen, oft universell
        gedachten moralischen und intellektuellen Maßstäben – nicht aus persönlicher
        Eitelkeit, sondern aus dem Bedürfnis, dem Richtigen zu dienen. Der Neunerflügel
        bringt eine friedliche, zurückhaltende Note hinzu, die Konflikte eher vermeidet
        als sucht. Genau diese Kombination aus hohem Anspruch und stiller
        Zurückhaltung prägte auch Smiths Umgang mit der eigenen Gesundheit und
        seinem eigenen literarischen Nachlass.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein von Zeitgenossen beschriebener ›hypochondrischer‹ Zug:</strong>
        Bereits während seiner Zeit als Professor in Glasgow beschrieben Bekannte
        Smith als jemanden mit auffälliger gesundheitlicher Selbstbeobachtung –
        eine Einschätzung, die spätere Historiker jedoch zunehmend als tatsächliche
        chronische Beschwerden statt reiner Einbildung deuten.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Verdauungsbeschwerden ab mittlerem Alter:</strong>
        Über weite Strecken seines Erwachsenenlebens litt Smith an wiederkehrenden
        Magen- und Darmbeschwerden, die seine Arbeitsfähigkeit zeitweise erheblich
        einschränkten.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten trotz der Beschwerden:</strong>
        Ungeachtet dieser wiederkehrenden Beschwerden vollendete Smith sowohl seine
        ›Theorie der ethischen Gefühle‹ (1759) als auch sein Hauptwerk ›Der
        Wohlstand der Nationen‹ (1776), das die moderne Nationalökonomie begründete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Leben in enger Bindung an die eigene Mutter:</strong>
        Smith blieb zeitlebens unverheiratet und lebte über weite Strecken seines
        Erwachsenenlebens mit seiner Mutter zusammen, die ihn bis kurz vor seinem
        eigenen Tod überlebte.</p>
        <p class="vb-intro"><strong>b) Sprichwörtliche Zerstreutheit als Kehrseite intensiver Gedankenarbeit:</strong>
        Zahlreiche überlieferte Anekdoten schildern Smith als notorisch geistesabwesend
        im Alltag – ein Zug, der eng mit seiner Fähigkeit zu tiefer, konzentrierter
        gedanklicher Durchdringung komplexer Zusammenhänge verbunden war.</p>
        <p class="vb-intro"><strong>c) Zunehmende körperliche Schwäche in den letzten Lebensjahren:</strong>
        Ab Ende der 1780er-Jahre verschlechterte sich Smiths Gesundheitszustand
        spürbar, mit anhaltenden Verdauungsproblemen, die schließlich in einen
        vermuteten Darmverschluss mündeten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Bitte, unveröffentlichte Manuskripte zu verbrennen:</strong>
        Kurz vor seinem Tod bat Smith enge Freunde eindringlich darum, fast alle
        seine unveröffentlichten Manuskripte zu vernichten – eine Bitte, der seine
        Testamentsvollstrecker letztlich nachkamen.</p>
        <p class="vb-intro"><strong>b) Der eigene Anspruch als Maßstab bis zuletzt:</strong>
        Nach überlieferten Aussagen wollte Smith verhindern, dass unfertige,
        seinem eigenen hohen Anspruch nicht genügende Gedanken postum
        veröffentlicht werden könnten.</p>
        <p class="vb-intro"><strong>c) Ein letztes geselliges Beisammensein trotz Schwäche:</strong>
        Noch wenige Tage vor seinem Tod empfing der bereits sehr geschwächte Smith
        Freunde zu einem letzten gemeinsamen Abendessen, bei dem er sich, so die
        Überlieferung, für sein vermeintlich unvollendetes Lebenswerk entschuldigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 17. Juli 1790:</strong>
        Adam Smith starb in Edinburgh im Alter von 67 Jahren, nach Jahren
        wiederkehrender Verdauungsbeschwerden, die sich zuletzt zu einem vermuteten
        Darmverschluss zuspitzten.</p>
        <p class="vb-intro"><strong>b) Ein Werk, das die eigene Zeit weit überdauerte:</strong>
        ›Der Wohlstand der Nationen‹ gilt bis heute als Gründungstext der modernen
        Wirtschaftswissenschaft und prägt ökonomisches Denken weltweit.</p>
        <p class="vb-intro"><strong>c) Ein für immer verlorener Teil seines Denkens:</strong>
        Durch die Vernichtung seiner unveröffentlichten Manuskripte ist ein
        erheblicher Teil von Smiths spätem Denken – darunter geplante Werke zu
        Recht und Regierung – für die Nachwelt unwiederbringlich verloren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der eigene Körper als Objekt strenger Selbstbeobachtung:</strong>
        Die für die soziale Eins typische Neigung, sich selbst nach hohen Maßstäben
        zu beurteilen, richtete sich bei Smith auch auf den eigenen Körper – eine
        wache, fast prüfende Aufmerksamkeit für die eigenen körperlichen Zustände.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel als stille Zurückhaltung im Umgang mit Beschwerden:</strong>
        Statt seine Beschwerden lautstark zu thematisieren, scheint Smith sie eher
        still ertragen zu haben – eine Zurückhaltung, die typisch für den
        Neunerflügel ist, der Konfrontation, auch mit dem eigenen Körper, meidet.</p>
        <p class="vb-intro"><strong>c) Kontrolle über das eigene Bild bis zum letzten Moment:</strong>
        Die Vernichtung der unfertigen Manuskripte lässt sich als letzter,
        entschiedener Akt der Einser-Kontrolle über das eigene öffentliche Bild
        lesen – lieber gar nichts als etwas, das dem eigenen Anspruch nicht genügt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine über Jahrzehnte von Zeitgenossen belächelte Beschwerde:</strong>
        Was Smiths Umfeld lange als bloße Hypochondrie abtat, erweist sich aus
        heutiger Sicht als ernstzunehmendes, chronisches körperliches Leiden – ein
        Missverständnis, das ihm zu Lebzeiten kaum Entlastung verschaffte.</p>
        <p class="vb-intro"><strong>b) Arbeit als Konstante trotz wiederkehrender Beschwerden:</strong>
        Sowohl in Phasen relativer Gesundheit als auch in Phasen deutlicher
        Beschwerden setzte Smith seine intellektuelle Arbeit mit bemerkenswerter
        Konstanz fort, bis kurz vor seinem Tod.</p>
        <p class="vb-intro"><strong>c) Ein letzter Akt der Kontrolle statt der Übergabe:</strong>
        Statt sein unfertiges Werk der Nachwelt zur Beurteilung zu überlassen, wählte
        Smith die vollständige Kontrolle durch Vernichtung – ein Muster, das sich
        durch sein gesamtes Verhältnis zum eigenen, stets kritisch geprüften Werk zieht.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Verdauung?</strong>
        Für eine soziale Eins mit Neunerflügel, deren innerer Kritiker permanent
        prüft, ob das eigene Handeln dem hohen Anspruch genügt, liegt eine Deutung
        nahe: Das Verdauungssystem – das, was aufgenommen, geprüft und verarbeitet
        wird, bevor es freigegeben oder verworfen wird – wurde bei Smith zum
        Austragungsort ebenjenes inneren Prüfprozesses, den er auch auf sein eigenes
        Denken anwandte. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu
        Verdauungsleiden führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Smiths Fall zeigen lässt, ist
        ein Muster, das beim ständigen inneren Prüfen und Bewerten des eigenen
        Denkens und Handelns in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Smith kannte sein eigenes Enneagramm-Muster nicht – die soziale Eins mit
        Neunerflügel prüft fast reflexhaft das eigene Handeln und Denken an einem
        hohen, oft unerreichbaren Maßstab, statt sich selbst auch Unvollkommenes
        zuzugestehen. Genau dieses Muster bestimmte ihn bis zuletzt unkorrigiert: lieber die
        vollständige Vernichtung des eigenen unfertigen Werks als dessen mögliche
        Unzulänglichkeit der Nachwelt zu offenbaren. Wer die eigene Neigung zur
        permanenten Selbstprüfung nicht als Muster erkennt, verwechselt sie leicht
        mit reiner Sorgfalt, selbst wenn der eigene Körper längst Alarm schlägt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Adam Smiths</strong> letzten Lebensjahren lässt sich die soziale
        Eins mit Neunerflügel in einer ihrer stillsten Formen studieren: eine über
        Jahrzehnte lange belächelte, tatsächlich aber reale körperliche Beschwerde,
        eine bis zuletzt ungebrochene Arbeitsdisziplin und ein letzter, radikaler
        Akt der Kontrolle über das eigene, nie ganz genügende Werk. Die Gans, die
        selbst im eigenen Nachlass noch penibel Ordnung schuf.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-adam-smith", label:"Porträt: Adam Smith (SO1w9) – Lebenswerk"},
        {route:"krankheitsportraets-jordan-peterson", label:"Krankheitsporträt: Dr. Jordan Peterson (SO1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-helmut-schmidt", label:"Krankheitsporträt: Helmut Schmidt (SO1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

export function josephHaydnKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-joseph-haydn-portrait.jpg" alt="Joseph Haydn" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Joseph Haydn</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel · 1732–1809</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Joseph Haydn</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-joseph-haydn">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches
        Lebenswerk. Dieses Porträt vertieft ein Kapitel, das dort nur gestreift
        wird: seinen körperlichen Verfall in den letzten Lebensjahren und die
        bewegende letzte Geste, mit der er noch im Angesicht des Todes für sein
        Hauspersonal da war.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Haydn</strong> ist dem <strong>selbsterhaltenden Typ 3 mit
        Zweierflügel</strong> zugeordnet. Die SE3 sucht Sicherheit über
        nachweisbare, verlässliche Tüchtigkeit im eigenen überschaubaren Bereich
        – bei Haydn ein Leben lang die eigene kompositorische Arbeit. Der
        Zweierflügel bringt eine warme, fürsorgliche Note hinzu, die sich nach
        innen, auf das eigene kleine Umfeld richtet. Genau diese Kombination aus
        Tüchtigkeit und stiller Fürsorge zeigte sich noch in seinen allerletzten
        Lebenstagen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte ungebrochener Schaffenskraft:</strong>
        Nach jahrzehntelangem Dienst am Hof der Fürsten Esterházy und internationalem
        Ruhm durch seine Londoner Sinfonien komponierte Haydn Ende der 1790er-Jahre
        mit ›Die Schöpfung‹ und ›Die Jahreszeiten‹ zwei seiner umfangreichsten und
        anspruchsvollsten Werke überhaupt.</p>
        <p class="vb-intro"><strong>b) Erste Erschöpfungszeichen nach diesen Großwerken:</strong>
        Nach Fertigstellung von ›Die Jahreszeiten‹ 1801 berichtete Haydn selbst von
        tiefer körperlicher Erschöpfung – ein Werk, das er später als übermäßig
        anstrengend für seine damals bereits nachlassenden Kräfte beschrieb.</p>
        <p class="vb-intro"><strong>c) Zunehmendes Nachlassen ab etwa 1803:</strong>
        Ab etwa 1803 wurde Haydn zunehmend arbeitsunfähig – seine letzten geplanten
        Werke, darunter ein Streichquartett, blieben unvollendete Fragmente.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fortschreitende Wassersucht:</strong>
        In den folgenden Jahren entwickelte Haydn eine zunehmende Wassersucht
        (Ödembildung, vor allem in den Beinen) – eine damals häufige Alterserkrankung,
        die seine Mobilität immer stärker einschränkte.</p>
        <p class="vb-intro"><strong>b) Rückzug aus dem öffentlichen Musikleben:</strong>
        Haydn zog sich zunehmend aus dem aktiven Musikleben zurück, empfing aber
        weiterhin regelmäßig Besucher und Bewunderer in seinem Wiener Haus.</p>
        <p class="vb-intro"><strong>c) Ein letzter großer öffentlicher Auftritt 1808:</strong>
        Im März 1808 nahm der bereits stark geschwächte Haydn an einer Aufführung
        seiner ›Schöpfung‹ zu seinen Ehren teil und wurde dabei von der anwesenden
        Prominenz, darunter Beethoven, tief gerührt gefeiert – seine letzte
        öffentliche Erscheinung dieser Art.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Beschießung Wiens im Mai 1809:</strong>
        Im Mai 1809 belagerten und beschossen napoleonische Truppen Wien; der Legende
        nach schlug eine Kanonenkugel in unmittelbarer Nähe von Haydns Haus ein.</p>
        <p class="vb-intro"><strong>b) Dreimaliges Spielen der eigenen Kaiserhymne:</strong>
        Trotz seiner schweren Erkrankung setzte sich Haydn während der Beschießung
        der Überlieferung nach dreimal ans Klavier, um die von ihm selbst komponierte
        österreichische Kaiserhymne (›Gott erhalte Franz den Kaiser‹) zu spielen –
        um sein verängstigtes Hauspersonal zu beruhigen.</p>
        <p class="vb-intro"><strong>c) Fürsorge für andere trotz eigener Todesnähe:</strong>
        Diese Geste galt nicht ihm selbst, sondern erkennbar der Beruhigung derer,
        die um ihn herum waren – eine Handlung der Fürsorge mitten in der eigenen
        schwersten Krankheitsphase.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 31. Mai 1809:</strong>
        Joseph Haydn starb wenige Tage nach der Beschießung Wiens im Alter von 77
        Jahren, in einer Stadt, die zu diesem Zeitpunkt unter französischer
        Besatzung stand.</p>
        <p class="vb-intro"><strong>b) Ein Ehrengeleit trotz Kriegszustand:</strong>
        Trotz der angespannten politischen Lage ließ der französische General ein
        Ehrenwachkommando an Haydns Sterbehaus aufstellen – ein Zeichen des
        Respekts, das die Grenzen der Kriegsparteien überschritt.</p>
        <p class="vb-intro"><strong>c) Ein Lebenswerk von prägender Wirkung:</strong>
        Haydns kompositorisches Werk – als ›Vater der Sinfonie‹ und des
        Streichquartetts – prägte die Wiener Klassik grundlegend und wirkte auf
        Zeitgenossen wie Mozart und den jungen Beethoven direkt ein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Tüchtigkeit bis an die Grenze der eigenen Kraft:</strong>
        Die für die selbsterhaltende Drei typische Strategie, den eigenen Wert über
        nachweisbare Leistung zu sichern, zeigte sich bei Haydn bis zuletzt – selbst
        die Komposition von ›Die Jahreszeiten‹ jenseits der eigenen Kräfte war
        Ausdruck dieses tief verankerten Musters.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel als Fürsorge im eigenen kleinen Kreis:</strong>
        Die Sorge um sein verängstigtes Hauspersonal während der Beschießung Wiens
        zeigt deutlich die warme, nach innen gerichtete Fürsorge des Zweierflügels
        – gerichtet nicht auf ein großes Publikum, sondern auf die ihm nahestehenden
        Menschen.</p>
        <p class="vb-intro"><strong>c) Beruhigung durch die vertraute eigene Leistung:</strong>
        Bezeichnend ist, dass Haydn ausgerechnet zur eigenen kompositorischen
        Leistung griff, um in einer bedrohlichen Situation Sicherheit zu vermitteln
        – die vertraute Tüchtigkeit als Anker, selbst im eigenen Sterben.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Verfall erst nach Jahrzehnten ungebrochener Schaffenskraft:</strong>
        Anders als bei manchen anderen Krankheitsporträts dieses Kompasses setzte
        Haydns Verfall erst sehr spät ein, nach einem außergewöhnlich langen Leben
        beständiger, hoher Produktivität.</p>
        <p class="vb-intro"><strong>b) Die letzten Großwerke als Wendepunkt:</strong>
        Die eigene Einschätzung Haydns, ›Die Jahreszeiten‹ habe ihn über seine
        Kräfte hinaus beansprucht, markiert einen klar erkennbaren Übergang von
        ungebrochener Schaffenskraft zu beginnendem körperlichem Verfall.</p>
        <p class="vb-intro"><strong>c) Fürsorge als letzte verbliebene Ausdrucksform:</strong>
        Als die eigene Kraft für neue Kompositionen nicht mehr ausreichte, blieb
        Haydn die vertraute Musik als Mittel der Fürsorge für andere erhalten –
        ein Muster, das sich bis in die letzten Lebenstage durchhielt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Wassersucht?</strong>
        Für eine selbsterhaltende Drei mit Zweierflügel, deren Sicherheit aus
        sichtbarer, verlässlicher Leistung entsteht, liegt eine Deutung nahe: Die
        Wassersucht – eine Erkrankung, bei der sich der Körper buchstäblich mit dem
        füllt, was er nicht mehr verarbeiten und ausscheiden kann – korrespondiert
        mit einem Leben, das über Jahrzehnte hinweg nie eine echte Verschnaufpause
        kannte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        Wassersucht führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Haydns Fall zeigen lässt, ist ein
        Muster, das bei jahrzehntelanger, kaum unterbrochener Leistungserbringung in
        der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Haydn kannte sein eigenes Enneagramm-Muster nicht – die selbsterhaltende
        Drei mit Zweierflügel sichert den eigenen Wert fast reflexhaft über
        beständige, nachweisbare Leistung, statt sich rechtzeitig Ruhephasen
        zuzugestehen. Genau dieses Muster hielt sich bis zuletzt unverändert: noch im
        eigenen Sterben griff er zur vertrauten musikalischen Leistung, um für
        andere da zu sein, statt selbst umsorgt zu werden. Wer die eigene Neigung
        zur ständigen Leistungserbringung nicht als Muster erkennt, verwechselt sie
        leicht mit reiner Berufung, selbst wenn der eigene Körper längst erschöpft ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Haydns</strong> letzten Lebensjahren lässt sich die
        selbsterhaltende Drei mit Zweierflügel in einer ihrer berührendsten Formen
        studieren: Jahrzehnte ungebrochener Schaffenskraft, ein körperlicher Verfall,
        der erst spät, aber dann unaufhaltsam einsetzte, und eine letzte Geste der
        Fürsorge, die selbst unter Kanonendonner nicht der eigenen Angst, sondern
        der Beruhigung anderer galt. Der Waschbär, der bis zuletzt für sein Rudel
        sorgte, selbst als die eigenen Kräfte längst erschöpft waren.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-joseph-haydn", label:"Porträt: Joseph Haydn (SE3w2) – Lebenswerk"},
        {route:"krankheitsportraets-sadhguru", label:"Krankheitsporträt: Sadhguru (SE3w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-enrico-caruso", label:"Krankheitsporträt: Enrico Caruso (SE3w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

export function fionaAppleKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fiona-apple-portrait.jpg" alt="Fiona Apple" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fiona Apple</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · geb. 1977</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fiona Apple</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-fiona-apple">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um ihr
        musikalisches Werk und ihre radikale Verweigerung, sich dem Musikbetrieb anzupassen.
        Diese Seite blickt genauer auf ein Kapitel, das dort nur angedeutet wird: eine
        Magersucht als Teenagerin, eine seit der Kindheit bestehende Zwangsstörung und
        wiederkehrende, teils isolierende Angstzustände.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Apple</strong> ist dem <strong>sozialen Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SO4 trägt den Schmerz der Vier als Scham vor der Gemeinschaft; der
        Fünferflügel gibt ihr die Fähigkeit, sich aus dem Feld der Bewertung in stille,
        intensive Innenschau zurückzuziehen. Genau diese Kombination – die eigene Scham nicht
        verstecken, sondern schonungslos in Worte fassen, dies aber erst nach langem, sehr
        privatem Rückzug – bestimmte den Umgang mit Essstörung, Zwangsstörung und Angst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginnende Essstörung als Teenagerin:</strong>
        Apple entwickelte als Teenagerin eine Magersucht, die sie später selbst mit der
        Vergewaltigung im Alter von zwölf Jahren in Verbindung brachte – ein Versuch, über
        den eigenen Körper zumindest die Kontrolle zurückzugewinnen, die ihr durch das
        Trauma genommen worden war.</p>
        <p class="vb-intro"><strong>b) Frühe zwanghafte Rituale:</strong>
        Bereits in der Kindheit entwickelte Apple wiederkehrende Zwangshandlungen – unter
        anderem Zähl- und Kontrollrituale –, die sie erst deutlich später öffentlich als
        Ausdruck einer Zwangsstörung (OCD) benannte.</p>
        <p class="vb-intro"><strong>c) Wiederkehrende Angstzustände:</strong>
        Parallel dazu berichtete Apple von Phasen ausgeprägter Angst, die sich in
        zunehmender sozialer Isolation und dem Rückzug aus öffentlichen Verpflichtungen
        äußerten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Jahrelange Phasen völligen öffentlichen Rückzugs:</strong>
        Zwischen ihren Alben liegen oft sechs bis acht Jahre Stille – Phasen, die von starker
        Zurückgezogenheit und, nach eigenen Angaben, von Angst geprägt waren.</p>
        <p class="vb-intro"><strong>b) Offener Umgang mit der eigenen Zwangsstörung in Interviews:</strong>
        In späteren Interviews, insbesondere rund um die Veröffentlichung von ›Fetch the Bolt
        Cutters‹ 2020, sprach Apple detailliert über ihre lebenslangen Zwangsrituale, ohne sie
        zu beschönigen oder zu verharmlosen.</p>
        <p class="vb-intro"><strong>c) Enge, fast symbiotische Bindung an ihre Hunde:</strong>
        Apple sagte 2012 mitten in einer laufenden Südamerika-Tournee Konzerte ab, um bei
        ihrer sterbenden Hündin Janet zu bleiben – eine Entscheidung, die sie öffentlich mit
        der Notwendigkeit begründete, in diesem Moment für das Tier da zu sein, das ihr über
        Jahre hinweg emotionalen Halt gegeben hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Musik als direkte Verarbeitung von Essstörung und Trauma:</strong>
        Apples Songtexte verarbeiten die eigene Essstörung, die Vergewaltigung und die
        Zwangsstörung wiederholt direkt und unverblümt, statt sie zu verschlüsseln oder zu
        umschreiben.</p>
        <p class="vb-intro"><strong>b) Kein therapeutisches Schweigen, sondern öffentliche Sprache:</strong>
        Statt die eigenen psychischen Kämpfe ausschließlich in Therapie zu verarbeiten, machte
        Apple sie wiederholt zum Gegenstand ihrer künstlerischen Arbeit und ihrer
        öffentlichen Aussagen.</p>
        <p class="vb-intro"><strong>c) Extreme Detailarbeit als möglicher Ausdruck der Zwangsstruktur:</strong>
        Ihre aufwendige, oft jahrelange Studioarbeit mit ungewöhnlichen Klangquellen – von
        Küchengeräten bis zu Percussion aus den Knochen ihres verstorbenen Hundes – zeigt eine
        Detailversessenheit, die Beobachter wiederholt mit ihrer beschriebenen
        Zwangsstruktur in Verbindung brachten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Kritischer Erfolg trotz oder wegen der Offenheit:</strong>
        ›Fetch the Bolt Cutters‹ wurde 2020 zu einem der höchstbewerteten Alben der
        Musikkritik-Geschichte – gerade jene Offenheit über Scham, Zwang und Angst, die Apple
        zuvor isoliert hatte, wurde zum Kern ihrer künstlerischen Wirkung.</p>
        <p class="vb-intro"><strong>b) Enthemmende Wirkung auf andere Betroffene:</strong>
        Apples unverblümte Sprache über Essstörung und Zwangsstörung trug dazu bei, diese
        Themen einem breiten Publikum zugänglicher zu machen, jenseits klinischer oder
        beschönigender Darstellungen.</p>
        <p class="vb-intro"><strong>c) Anhaltendes öffentliches Interesse an ihrem Rückzug selbst:</strong>
        Auch ihre Phasen der Stille und Isolation wurden Teil der öffentlichen Wahrnehmung
        ihrer Person – nicht als Abwesenheit, sondern als eigener, bedeutungsvoller Teil ihres
        Werks.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Scham, die zur Sprache statt zum Schweigen wird:</strong>
        Die SO4-typische Bewegung – die eigene Scham nicht zu verstecken, sondern ihr
        zuvorzukommen, indem man sie selbst ausspricht – zeigt sich bei Apple direkt in der
        Verarbeitung von Essstörung und Zwangsstörung als Songmaterial statt als verschwiegenes
        Privatleiden.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und der Rückzug als notwendige Werkstatt:</strong>
        Dieselbe Struktur, die Apple zwischen ihren Alben jahrelang schweigen lässt, bestimmte
        auch den Umgang mit ihren psychischen Krisen: Rückzug nicht als Flucht, sondern als
        Raum, in dem die eigene Wahrheit erst reifen kann, bevor sie geteilt wird.</p>
        <p class="vb-intro"><strong>c) Zwang als äußerste Form der Detailkontrolle:</strong>
        Die Zwangsstörung lässt sich als extreme Zuspitzung derselben Kontrollbedürftigkeit
        lesen, die auch Apples akribische Studioarbeit prägt – bei der SO4w5 äußert sich der
        Wunsch nach Ordnung nicht nach außen als Forderung an andere, sondern nach innen als
        Ritual.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme radikaler Ehrlichkeit, deren eigener Körper und Geist zum Kampfplatz wurden:</strong>
        Apples gesamtes künstlerisches Selbstverständnis beruht auf schonungsloser
        Selbstoffenbarung. Ausgerechnet der eigene Körper (Essstörung) und die eigenen
        Gedanken (Zwangsstörung) wurden zu den Orten, an denen diese Offenheit am schwersten
        zu erreichen war.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-cohen">Leonard
        Cohen (SO4w5)</a>: Auch bei ihm bestimmte eine lebenslange psychische Erkrankung – bei
        Cohen schwere Depression – das gesamte Werk, und auch er verarbeitete sie nicht im
        Verborgenen, sondern direkt in seiner Kunst. Bei beiden SO4w5 zeigt sich dasselbe
        Muster: chronisches psychisches Leiden wird nicht therapeutisch stillschweigend
        verwaltet, sondern zum offen geteilten Kern des eigenen Werks.</p>
        <p class="vb-intro"><strong>c) Wenn die Vier unter chronischem Stress zur Zwei wird:</strong>
        Apples Entscheidung 2012, eine laufende Tournee für ihre sterbende Hündin
        abzubrechen, fällt durch eine für die sonst introvertierte, auf die eigene Innenschau
        konzentrierte SO4w5 ungewöhnliche Intensität der Fürsorge für ein anderes Wesen auf.
        Wer über Jahre in chronischer psychischer Belastung lebt, bewegt sich zunehmend
        entlang seiner Stresslinie in Richtung seines Stresspunkts – bei der Vier ist das die
        Zwei. Diese außergewöhnlich intensive, fast aufopfernde Fürsorge in einem
        Krisenmoment erinnert an die Hingabe-Logik des Stresspunkts, nicht an die sonst
        stärker nach innen gerichtete Introspektion des Kerntyps – bei unverändertem
        Kerntyp SO4w5.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Körper und Denken selbst?</strong>
        Für eine soziale Vier, deren gesamtes künstlerisches Werk auf radikaler
        Selbstoffenbarung beruht, liegt eine Deutung nahe: Ausgerechnet jene Bereiche, die am
        unmittelbarsten mit dem eigenen Selbst verbunden sind – der eigene Körper bei der
        Essstörung, die eigenen Gedanken bei der Zwangsstörung –, wurden zum Ort, an dem
        Kontrolle am schwersten zu behalten war. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Essstörungen oder
        Zwangsstörungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Apples Fall zeigen lässt, ist ein Muster
        im Umgang mit chronischem psychischem Leiden, das bei einer ausgeprägten sozialen
        Vier mit Fünferflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Apple kennt ihr eigenes Muster vermutlich nicht als Enneagramm-Struktur – die soziale
        Vier mit Fünferflügel hält reflexhaft an radikaler Selbstoffenbarung nach langem,
        privatem Rückzug fest, statt psychisches Leiden auch einmal ohne den Umweg über
        künstlerische Verarbeitung einfach behandeln zu lassen. Wer die eigene Neigung, jede
        innere Krise erst in Isolation zu durchleben und dann restlos offenzulegen, nicht als
        Muster erkennt, riskiert, sich selbst frühere, direktere Unterstützung vorzuenthalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Vier mit Fünferflügel erklärt bei <strong>Fiona Apple</strong> vieles am
        Umgang mit Essstörung, Zwangsstörung und Angst: eine Künstlerin, deren gesamtes Werk
        auf dem Prinzip beruht, die eigene Scham nicht zu verstecken, sondern ihr durch
        radikale Offenheit zuvorzukommen – und die genau dieses Prinzip auch auf die
        dunkelsten, privatesten Kapitel ihres eigenen Körpers und Denkens anwandte. Das
        Gürteltier, das sich einrollt, um dann mit umso schärferer Klarheit wieder
        hervorzutreten.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-fiona-apple", label:"Porträt: Fiona Apple (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-leonard-cohen", label:"Krankheitsporträt: Leonard Cohen (SO4w5) – gleicher Subtyp"},
        {route:"krankheitsportraets-edvard-munch", label:"Krankheitsporträt: Edvard Munch (SO4w5) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function williamJamesKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-william-james-portrait.jpg" alt="William James" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. William James</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1842–1910</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>William James</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-william-james">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Begründer der
        amerikanischen Psychologie und Mitbegründer des Pragmatismus. Hier geht es um zwei
        gesundheitliche Kapitel, die dort nur gestreift werden: eine existenzielle
        psychosomatische Krise in seinen Zwanzigerjahren und ein über zwölf Jahre
        fortschreitendes Herzleiden, das 1910 zu seinem Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>James</strong> ist der <strong>sozialen Drei mit Viererflügel</strong>
        zugeordnet. Die soziale Drei wird als <em>Verstärkungstyp</em> bezeichnet – Bedeutung
        entsteht über sichtbare Wirkung und Leistung im sozialen Raum, nicht über stille
        Zurückgezogenheit. Der Viererflügel bringt zusätzlich eine existenzielle Tiefe und
        Empfindsamkeit mit, die dazu neigt, Krisen nicht auszusitzen, sondern sie – wie bei
        James biografisch belegt – bis an den Rand des Erträglichen auszuleben, bevor eine
        Wende gesucht wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der auf eine ungeklärte Berufsfrage antwortet:</strong>
        Nach einem abgebrochenen Malereistudium und dem Wechsel zur Medizin an der Harvard
        Medical School zeigten sich bei James Ende der 1860er-Jahre erste Rückenschmerzen,
        Augenprobleme und Verdauungsbeschwerden – zu einem Zeitpunkt, an dem sein beruflicher
        Weg noch völlig offen war.</p>
        <p class="vb-intro"><strong>b) Schlaflosigkeit als ständiger Begleiter:</strong>
        Parallel zu den körperlichen Beschwerden entwickelte sich eine anhaltende
        Schlaflosigkeit, die James selbst in Briefen an Freunde und in seinem Tagebuch
        wiederholt festhielt.</p>
        <p class="vb-intro"><strong>c) Eine Reise nach Deutschland ohne Genesung:</strong>
        1867/68 reiste James zur Kur und zum Studium nach Deutschland – ein Versuch, dem
        Leiden räumlich zu entkommen, der jedoch keine dauerhafte Besserung brachte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine Depression bis an den Rand des Suizids:</strong>
        In seinen Tagebucheinträgen aus dieser Zeit beschrieb James Zustände tiefster
        Verzweiflung; spätere Biografen und teils James selbst (in stark verschlüsselter,
        autobiografisch gelesener Form in ›The Varieties of Religious Experience‹) legen nahe,
        dass er in diesen Jahren zeitweise an Suizid dachte.</p>
        <p class="vb-intro"><strong>b) Keine eindeutige körperliche Diagnose:</strong>
        Die Ärzte seiner Zeit fanden keine einzelne organische Ursache für die Kombination aus
        Rückenschmerzen, Augenproblemen, Verdauungsstörungen und Erschöpfung – ein Bild, das
        aus heutiger Sicht stark psychosomatisch gedeutet wird.</p>
        <p class="vb-intro"><strong>c) Familiäre Häufung ähnlicher Leiden:</strong>
        James' Schwester Alice James war zeitlebens von schwerer, nie eindeutig diagnostizierter
        Krankheit gezeichnet, sein Vater Henry James Sr. hatte selbst eine existenzielle Krise
        durchlebt – ein familiäres Muster, das die eigene Krise zusätzlich rahmte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Wende durch eine philosophische Lektüre, nicht durch Medizin:</strong>
        Am 30. April 1870 notierte James in sein Tagebuch, die Lektüre des französischen
        Philosophen Charles Renouvier über den freien Willen habe ihm gezeigt, dass er selbst
        entscheiden könne, an die eigene Handlungsfähigkeit zu glauben – nicht ein
        medizinisches Mittel, sondern ein gedanklicher Entschluss brachte die entscheidende
        Wende.</p>
        <p class="vb-intro"><strong>b) Ein zweites, spät auftretendes Leiden am Herzen:</strong>
        Bei einer anstrengenden Bergwanderung in den Adirondack Mountains im Sommer 1898 zog
        sich James nach eigener und ärztlicher Einschätzung eine dauerhafte Überlastung des
        Herzens zu, von der er sich nie mehr vollständig erholte.</p>
        <p class="vb-intro"><strong>c) Arbeit als Antwort auf die Warnung:</strong>
        Statt sein Arbeitstempo grundlegend zu drosseln, hielt James in den folgenden zwölf
        Jahren an einem intensiven Pensum aus Lehre, Vortragsreisen und Buchprojekten fest,
        darunter die Gifford Lectures in Edinburgh (1901/02) und mehrere weitere große Werke.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Zwei Jahrzehnte zwischen zwei Krisen:</strong>
        Zwischen der existenziellen Krise der Zwanzigerjahre und dem Herzleiden ab 1898 liegt
        fast ein ganzes produktives Berufsleben – James' fruchtbarste, öffentlich wirksamste
        Schaffensphase fällt in genau diese Zwischenzeit.</p>
        <p class="vb-intro"><strong>b) Reisen nach Europa auf der Suche nach Linderung:</strong>
        In seinen letzten Lebensjahren reiste James mehrfach nach Europa, unter anderem zu
        einer Kur nach Bad Nauheim, einem damals renommierten Zentrum der Herzbehandlung – ein
        Versuch, die fortschreitende Erkrankung in den Griff zu bekommen, ohne die eigene
        akademische und öffentliche Tätigkeit vollständig aufzugeben.</p>
        <p class="vb-intro"><strong>c) Rückkehr in die Heimat als letzter Weg:</strong>
        Im Sommer 1910 kehrte James, gesundheitlich zunehmend geschwächt, von einer letzten
        Europareise in sein Sommerhaus in Chocorua, New Hampshire, zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die frühe Krise als Motor der späteren Schaffenskraft:</strong>
        Gerade die überwundene existenzielle Krise der Zwanzigerjahre scheint bei James zu
        einer besonders intensiven, breit gefächerten späteren Schaffensenergie geführt zu
        haben – als müsse die einst gewonnene Handlungsfähigkeit fortlaufend unter Beweis
        gestellt werden.</p>
        <p class="vb-intro"><strong>b) Kein sichtbarer Rückzug trotz Diagnose:</strong>
        Anders als bei Karl Lagerfeld (SO3w4), der seine Erkrankung fast vollständig verbarg,
        war James' Herzleiden im engeren akademischen Umfeld durchaus bekannt – dennoch
        reduzierte er sein öffentliches und wissenschaftliches Engagement über Jahre kaum
        sichtbar, bevor die letzten Monate eine deutliche Verschlechterung zeigten.</p>
        <p class="vb-intro"><strong>c) Das Tempo hält bis kurz vor dem Ende:</strong>
        Noch in den letzten Lebensmonaten arbeitete James an Manuskripten und Korrespondenz –
        ein für die soziale Drei typisches Muster, die eigene Wirksamkeit so lange wie möglich
        aufrechtzuerhalten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Die erste Krise: Körper als Stellvertreter einer ungelösten Lebensfrage:</strong>
        Die Kombination aus Rückenschmerzen, Augenproblemen, Verdauungsstörungen und
        Schlaflosigkeit in James' Zwanzigerjahren trat exakt in der Phase auf, in der seine
        berufliche Richtung – Malerei, Medizin, Naturwissenschaft, Philosophie – noch völlig
        ungeklärt war. Für eine soziale Drei, deren Selbstwert eng mit sichtbarer, anerkannter
        Wirksamkeit verknüpft ist, kann eine solche Phase beruflicher Orientierungslosigkeit
        besonders bedrohlich wirken – der Körper reagierte, bevor eine gedankliche Lösung
        gefunden war.</p>
        <p class="vb-intro"><strong>b) Die Wende: ein Gedanke statt ein Medikament:</strong>
        Bezeichnend ist, dass die entscheidende Wende nicht durch eine medizinische Behandlung,
        sondern durch eine philosophische Einsicht kam – den bewussten Entschluss, an den
        eigenen freien Willen zu glauben. Für den Viererflügel, der Bedeutung in Tiefe und
        Echtheit sucht, war die Lösung folgerichtig keine oberflächliche Symptombehandlung,
        sondern eine grundsätzliche innere Neuausrichtung.</p>
        <p class="vb-intro"><strong>c) Die zweite Krise: das Herz als Preis für ununterbrochene Leistung:</strong>
        Die Überlastung des Herzens 1898 traf James mitten in seiner produktivsten
        Schaffensphase – ausgerechnet das Organ, das im übertragenen Sinn für Antrieb und
        Einsatzbereitschaft steht, gab nach, ohne dass James sein Tempo daraufhin dauerhaft
        drosselte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet zwölf weitere Jahre Weiterarbeit?</strong>
        Für eine soziale Drei mit Viererflügel, deren Selbstwert und Lebenssinn eng an
        sichtbare, wirksame Arbeit gebunden sind, liegt eine Deutung nahe: ein Innehalten nach
        der ersten Warnung hätte bedeutet, die eigene Wirksamkeit – und damit einen zentralen
        Teil der eigenen Identität – infrage zu stellen. Stattdessen wurde die Arbeit
        fortgesetzt, bis der Körper endgültig keine Fortsetzung mehr zuließ. Diese Deutung wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Herzerkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an James' Fall zeigen lässt, ist ein Muster, das bei dem
        Drang, produktive Wirksamkeit auch gegen eindeutige Warnzeichen des eigenen Körpers
        aufrechtzuerhalten, in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        William James kannte sein eigenes Enneagramm-Muster nicht – die soziale Drei bemisst
        Selbstwert an sichtbarer Wirksamkeit, und genau das ließ ihn nach der Herzüberlastung
        von 1898 zwölf weitere Jahre in nahezu unvermindertem Tempo weiterarbeiten, statt
        rechtzeitig grundlegend kürzerzutreten. Wer das eigene Bedürfnis, ununterbrochen
        wirksam zu bleiben, nicht als Muster erkennt, riskiert, genau jenes Organ zu
        überlasten, das die eigene Schaffenskraft überhaupt erst trägt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>James'</strong> soziale Drei mit Viererflügel zeigt sich in zwei
        gegensätzlichen, aber verwandten Krisen: einer existenziellen Krise der Jugend, die er
        durch einen bewussten Gedanken – nicht durch Medizin – überwand, und einem
        körperlichen Herzleiden im Alter, das er trotz früher Warnung zwölf Jahre lang durch
        unvermindertes Arbeitstempo beantwortete, statt es ernsthaft zu drosseln. Der Gepard,
        der eine Verletzung übersteht, indem er sein Tempo hält – bis das Tempo selbst nicht
        mehr zu halten ist.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-william-james", label:"Porträt: William James (SO3w4) – Lebenswerk"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – gleicher Subtyp"},
        {route:"krankheitsportraets-sean-connery", label:"Krankheitsporträt: Sean Connery (SO3w4) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function helmutSchmidtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/helmut-schmidt-portrait.jpg" alt="Helmut Schmidt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Helmut Schmidt</p>
        <p class="krim-portrait-typ">SO1w9 · Sozialer Typ 1 mit Neunerflügel · 1918–2015</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Helmut Schmidt</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-helmut-schmidt">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Kanzlerschaft und sein
        Krisenmanagement. Im Zentrum dieser Seite steht, was dort nur am Rande erwähnt
        wird: eine jahrzehntelange, öffentlich zur Schau gestellte Nikotinabhängigkeit,
        die trotz peripherer arterieller Verschlusskrankheit („Raucherbein"),
        Zehenamputationen und Herzschrittmacher bis fast an sein Lebensende fortgesetzt wurde.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schmidt</strong> ist dem <strong>sozialen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SO1 lebt aus der Überzeugung, selbst am besten zu wissen, was
        richtig ist, und trägt diesen Anspruch nach außen als moralisch-intellektuelle
        Instanz. Der Neunerflügel bringt eine unaufgeregte, fast phlegmatische
        Unerschütterlichkeit hinzu, die sich weder von Kritik noch von ärztlichem Rat
        beeindrucken lässt. Genau diese Kombination aus Rechthaberei und äußerer Ruhe
        prägte auch Schmidts jahrzehntelangen Umgang mit dem eigenen Zigarettenkonsum.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Zigarettenkonsum, der zum Markenzeichen wurde:</strong>
        Schmidt rauchte bereits als junger Mann regelmäßig und machte daraus nie ein
        Geheimnis – Mentholzigaretten begleiteten ihn durch seine gesamte politische
        Laufbahn, sichtbar auch in Fernsehinterviews und Bundestagsdebatten.</p>
        <p class="vb-intro"><strong>b) Ein erster ernster Warnschuss 1981:</strong>
        Im Oktober 1981, mitten in seiner Kanzlerschaft, setzte sein Herz für rund
        30 Sekunden aus, bevor es von selbst wieder zu schlagen begann – ein Ereignis,
        das ihm wenig später einen Herzschrittmacher einbrachte.</p>
        <p class="vb-intro"><strong>c) Weiterrauchen trotz Schrittmacher:</strong>
        Statt diesen Vorfall zum Anlass für einen Rauchstopp zu nehmen, führte Schmidt
        seinen Zigarettenkonsum nach dem Eingriff nahezu unverändert fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rauchen als Ausdruck des eigenen Willens:</strong>
        Ein ihm zugeschriebener, sinngemäßer Ausspruch – „Willen braucht man und
        Zigaretten" – bringt auf den Punkt, wie sehr Schmidt seinen Konsum als
        Bestandteil der eigenen Willensstärke verstand, nicht als Schwäche.</p>
        <p class="vb-intro"><strong>b) Öffentliche Uneinsichtigkeit gegenüber Kritik:</strong>
        Ärztliche Warnungen und öffentliche Kritik an seinem Rauchen quittierte er
        über Jahrzehnte mit derselben kühlen, unbeeindruckten Direktheit, die auch
        seine politischen Entscheidungen kennzeichnete.</p>
        <p class="vb-intro"><strong>c) Fortsetzung der Gewohnheit bis ins hohe Alter:</strong>
        Auch als gefragter Elder Statesman und Mitherausgeber der „Zeit" rauchte
        Schmidt öffentlich weiter, selbst in Situationen, in denen es gesetzlich
        längst untersagt war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Diagnose einer peripheren arteriellen Verschlusskrankheit:</strong>
        In seinen letzten Lebensjahren wurde bei Schmidt ein sogenanntes „Raucherbein"
        festgestellt – ein durch Arterienverkalkung verengtes Gefäß im rechten Bein,
        dessen Hauptrisikofaktor Rauchen ist.</p>
        <p class="vb-intro"><strong>b) Zehenamputationen als Folge der Durchblutungsstörung:</strong>
        Die fortschreitende Verschlusskrankheit machte im Lauf der Zeit mehrere
        Zehenamputationen erforderlich.</p>
        <p class="vb-intro"><strong>c) Eine Gefäßoperation im Jahr seines Todes:</strong>
        Anfang 2015 unterzog sich Schmidt einer weiteren Gefäßoperation am Bein –
        von deren Folgen er sich nach übereinstimmenden Berichten nie mehr vollständig
        erholte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 10. November 2015:</strong>
        Helmut Schmidt starb im Alter von 96 Jahren in Hamburg an multiplem
        Organversagen, nachdem sich sein Zustand nach der Operation und einer
        anschließenden Infektion dramatisch verschlechtert hatte.</p>
        <p class="vb-intro"><strong>b) Ein Rauchstopp erst in den letzten Lebenswochen:</strong>
        Erst im Krankenhaus, in den letzten rund zehn Tagen seines Lebens, rauchte
        Schmidt nach jahrzehntelangem Konsum nicht mehr – nicht aus freier
        Entscheidung, sondern weil sein Zustand es nicht mehr zuließ.</p>
        <p class="vb-intro"><strong>c) Ein politisches Vermächtnis, das von der Gesundheitsfrage unberührt blieb:</strong>
        Sein Ansehen als besonnener Krisenmanager der Sturmflut 1962 und des
        Deutschen Herbstes 1977 blieb von seinem öffentlich bekannten Rauchen
        weitgehend unberührt – für viele Zeitgenossen gehörte die Zigarette
        untrennbar zum Bild des unbeirrbaren Staatsmanns.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle durch Festhalten statt durch Aufgeben:</strong>
        Für die soziale Eins bedeutet Kontrolle in erster Linie, an der eigenen,
        als richtig erkannten Linie festzuhalten – bei Schmidt richtete sich das
        auch auf eine Gewohnheit, deren Schädlichkeit ihm nachweislich bekannt war.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel als Quelle der äußeren Gelassenheit:</strong>
        Die für den Neunerflügel typische Unerschütterlichkeit erlaubte es Schmidt,
        Kritik an seinem Rauchen mit derselben phlegmatischen Ruhe zu begegnen, mit
        der er auch politische Angriffe parierte – Konfrontation wurde nicht gesucht,
        aber auch nicht gescheut, wenn sie unausweichlich war.</p>
        <p class="vb-intro"><strong>c) Öffentliche Konsequenz als Selbstbestätigung:</strong>
        Indem er sein Rauchen nie versteckte, sondern offen weiterführte, bestätigte
        Schmidt sich selbst in der einsertypischen Überzeugung, die eigene
        Entscheidung sei die richtige – unabhängig davon, was andere dazu sagten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine öffentlich bekannte Sucht ohne öffentliche Selbstkritik:</strong>
        Anders als viele Prominente mit Suchterkrankungen sprach Schmidt sein
        Rauchen nie als Problem an, das er überwinden wollte, sondern als
        bewusste, souveräne Entscheidung – bis zuletzt.</p>
        <p class="vb-intro"><strong>b) Weiterarbeiten und Weiterrauchen als Doppelkonstante:</strong>
        Politisches Kommentieren und Zigarettenkonsum blieben über Jahrzehnte
        gleichermaßen konstant – beides Ausdruck derselben unbeirrbaren
        Grundhaltung, die weder von Erfolg noch von Kritik abhängig war.</p>
        <p class="vb-intro"><strong>c) Ein Kontrollmuster, das sich gegen den eigenen Körper richtete:</strong>
        Die gleiche Konsequenz, mit der Schmidt politische Krisen bewältigte, wandte
        er auch auf die eigene Gewohnheit an – nur dass die Konsequenz hier nicht dem
        eigenen Wohlergehen diente, sondern ihm zuwiderlief.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Gefäße?</strong>
        Für eine soziale Eins mit Neunerflügel, deren Selbstbild eng an
        Unerschütterlichkeit und Rechthaben geknüpft ist, liegt eine Deutung nahe:
        Die Gefäße – die Bahnen, über die der Körper mit Sauerstoff und Nährstoffen
        versorgt wird – gerieten bei Schmidt buchstäblich zum Austragungsort eines
        Konflikts zwischen bewusstem Willen und tatsächlicher körperlicher Grenze.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu
        Gefäßerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Schmidts Fall zeigen lässt, ist ein
        Muster, das beim kompromisslosen Festhalten an der eigenen, für richtig
        befundenen Linie in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schmidt kannte sein eigenes Enneagramm-Muster nicht – die soziale Eins mit
        Neunerflügel verwechselt kompromisslose Konsequenz leicht mit Charakterstärke,
        auch dort, wo sie sich gegen den eigenen Körper richtet. Genau dieses Muster
        bestimmte ihn bis zuletzt unkorrigiert: Erst als der Körper selbst keine Wahl
        mehr ließ, endete der jahrzehntelange Konsum – nicht durch eigene Einsicht,
        sondern durch physische Erschöpfung. Wer die eigene Neigung zur
        selbstbestätigenden Kompromisslosigkeit nicht als Muster erkennt, verwechselt
        sie leicht mit reiner Willensstärke, selbst wenn der eigene Körper längst
        unübersehbare Zeichen setzt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Helmut Schmidts</strong> jahrzehntelangem Zigarettenkonsum lässt
        sich die soziale Eins mit Neunerflügel in einer ihrer hartnäckigsten Formen
        studieren: eine öffentlich zur Schau gestellte, nie infrage gestellte
        Gewohnheit, eine Kritik-Immunität, die aus derselben Quelle wie sein
        politisches Krisenmanagement schöpfte, und ein Körper, der erst dort eine
        Grenze setzte, wo der eigene Wille es nie tat. Die Gans, die die Formation
        bis zum eigenen Zusammenbruch nicht verließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-helmut-schmidt", label:"Porträt: Helmut Schmidt (SO1w9) – Kanzlerschaft"},
        {route:"krankheitsportraets-adam-smith", label:"Krankheitsporträt: Adam Smith (SO1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-jordan-peterson", label:"Krankheitsporträt: Dr. Jordan Peterson (SO1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

export function wimThoelkeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wim-thoelke-portrait.jpg" alt="Wim Thoelke" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wim Thoelke</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel · 1927–1995</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Wim Thoelke</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-wim-thoelke">Porträt in der Rubrik Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Rolle als Moderator von
        „Der Große Preis" und um sein verborgenes Doppelleben aus Pilotenschein,
        Unternehmertum und Blockflötenalbum. Diese Seite vertieft ein Kapitel, das dort nur
        am Rande erwähnt wird: eine über Jahre fortschreitende Herzerkrankung, eine
        Bypass-Operation, die ihn nie mehr vollständig erholen ließ, und ein Tod 1995 zu
        Hause bei Wiesbaden.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Thoelke</strong> ist dem <strong>selbsterhaltenden Typ 3 mit Viererflügel</strong>
        zugeordnet – dem Kontratyp der Drei, der Sicherheit nicht über Glanz, sondern über
        nachweisbare, verlässliche Leistung sucht. Der Viererflügel zeigt sich bei ihm als ein
        privates, nie öffentlich gemachtes Innenleben voller ungewöhnlicher Projekte. Genau
        diese Trennung zwischen kompetenter öffentlicher Fassade und verborgenem Innenleben
        setzte sich bis in den Umgang mit der eigenen Herzkrankheit fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Karriere unter wachsender körperlicher Belastung:</strong>
        Über Jahrzehnte trug Thoelke gleichzeitig die Hauptmoderation einer der größten
        deutschen Fernsehshows, zahlreiche unternehmerische Nebenprojekte und ein aktives
        Pilotenleben – ein Arbeitspensum, das schon vor jeder Diagnose eine erhebliche
        Dauerbelastung für Herz und Kreislauf bedeutete.</p>
        <p class="vb-intro"><strong>b) Diagnose einer fortgeschrittenen koronaren Herzerkrankung:</strong>
        Im März 1991 unterzog sich Thoelke einer Dreifach-Bypass-Operation – ein deutliches
        Zeichen dafür, dass sich seine Herzgefäße bereits erheblich verengt hatten, lange bevor
        die Öffentlichkeit davon erfuhr.</p>
        <p class="vb-intro"><strong>c) Rückkehr auf die Bühne trotz sichtbarer Schwäche:</strong>
        Schon bei der 200. Ausgabe von „Der Große Preis" im April 1991 moderierte er wieder –
        nun sitzend statt stehend, ein kleines, aber unübersehbares Zugeständnis an einen
        Körper, der nicht mehr derselbe war wie vor der Operation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fast lückenloses Durcharbeiten trotz Operation:</strong>
        In 18 Jahren und 220 Ausgaben von „Der Große Preis" fehlte Thoelke nach eigenen
        Angaben nur ein einziges Mal – auch die Monate nach seiner Bypass-Operation bildeten
        dabei keine echte Ausnahme.</p>
        <p class="vb-intro"><strong>b) Sichtbar schmaler werdende Erscheinung:</strong>
        In den Jahren nach 1991 wirkte Thoelke im Fernsehen zunehmend abgemagert – ein
        körperliches Zeichen, das dem Millionenpublikum auffiel, ohne dass die Sendung selbst
        je offen über seinen Gesundheitszustand sprach.</p>
        <p class="vb-intro"><strong>c) Letzter Auftritt vor der Kamera im Dezember 1992:</strong>
        Am 10. Dezember 1992 stand Thoelke ein letztes Mal vor der Kamera, bevor er sich in
        eine Spezialklinik begab – zunächst für eine geplante Behandlung von mindestens acht
        Wochen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein Abschied ohne große öffentliche Erklärung:</strong>
        Der Wechsel von der aktiven Moderation in die Klinikbehandlung verlief ohne
        dramatische Pressekonferenz oder ausführliche öffentliche Erklärung – Thoelke verließ
        die Bühne so unauffällig, wie er sie Jahrzehnte lang bespielt hatte.</p>
        <p class="vb-intro"><strong>b) Streit um die eigene Nachfolge:</strong>
        Parallel zum Rückzug aus der aktiven Moderation kam es zu Auseinandersetzungen mit der
        ZDF-Leitung über die künftige Ausrichtung der Sendung, bevor die Moderation schließlich
        an Hans-Joachim Kulenkampff überging.</p>
        <p class="vb-intro"><strong>c) Tod am 26. November 1995 zu Hause bei Wiesbaden:</strong>
        Wim Thoelke starb im Alter von 68 Jahren nach einem Schwächeanfall in seinem
        Wohnhaus – rund drei Jahre nach seinem letzten Fernsehauftritt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Bernie Madoff</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch bei <a href="javascript:void(0)" data-route="krankheitsportraets-bernie-madoff">Bernie
        Madoff</a> (SE3w4) betraf dieselbe Grundhaltung den Umgang mit der eigenen
        Sterblichkeit: Er hielt bis zuletzt an äußerer Beherrschtheit fest, während sein Körper
        längst nicht mehr kontrollierbar war. Bei Thoelke zeigt sich eine eng verwandte, aber
        eigene Ausprägung desselben Musters: nicht Diskretion um ihrer selbst willen, sondern
        der beharrliche Wille, die eigene Funktion – hier: den Sendeplatz, die Verlässlichkeit
        gegenüber dem Publikum – so lange wie irgend möglich aufrechtzuerhalten, selbst gegen
        den erkennbaren Widerstand des eigenen Körpers.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild, das kaum Risse zeigte:</strong>
        Für das Publikum blieb Thoelke bis zu seinem letzten Auftritt im Wesentlichen der
        verlässliche, kompetente Moderator – erst im Rückblick fügen sich die einzelnen
        Anzeichen zu einem klaren Krankheitsverlauf zusammen.</p>
        <p class="vb-intro"><strong>b) Ein Karriereende, das mit einem Konflikt zusammenfiel:</strong>
        Dass sein Rückzug aus der aktiven Moderation zeitlich mit Differenzen über die
        Zukunft der Sendung zusammenfiel, verlieh seinem Abschied zusätzlich eine gewisse
        Bitterkeit, die über die reine gesundheitliche Notwendigkeit hinausging.</p>
        <p class="vb-intro"><strong>c) Ein Tod im vertrauten Umfeld statt in der Öffentlichkeit:</strong>
        Anders als sein jahrzehntelanges Berufsleben, das ganz auf ein Millionenpublikum
        ausgerichtet war, endete sein Leben still, im eigenen Zuhause, fernab jeder Kamera.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Funktionieren als Selbstbeweis bis an die Grenze:</strong>
        Die fast lückenlose Präsenz über 220 Sendungen hinweg, selbst nach einer
        Dreifach-Bypass-Operation, zeigt eine Energie, die sich noch im Krankheitsfall über
        nachweisbare Leistung definierte, statt sich Schonung zuzugestehen.</p>
        <p class="vb-intro"><strong>b) Ein Körper, der die Grenze zog, wo der Wille es nicht tat:</strong>
        Erst der eigene, sichtbar geschwächte Körper erzwang 1992 das, was Thoelke selbst
        offenbar nicht von sich aus in Erwägung zog: ein Ende der aktiven Moderation.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis von Erschöpfung:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        überlieferten Aussagen, in denen Thoelke selbst offen über Angst, Erschöpfung oder
        Zweifel im Zusammenhang mit seiner Erkrankung sprach.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Beruf, der auf Verlässlichkeit gebaut war – ein Herz, das genau daran zerbrach:</strong>
        Thoelkes gesamte Karriere beruhte auf der Vorstellung, ein ruhender, verlässlicher Pol
        zu sein, auf den sich ein Millionenpublikum jederzeit verlassen konnte – ausgerechnet
        das Organ, das im übertragenen Sinn für Beständigkeit und Tragfähigkeit steht, gab
        unter dieser jahrzehntelangen Dauerbelastung als erstes nach.</p>
        <p class="vb-intro"><strong>b) Zwei getrennte Leben bis zum Schluss:</strong>
        So wie Thoelke sein privates Innenleben aus Pilotenschein, Unternehmertum und Musik nie
        öffentlich machte, blieb auch seine Herzkrankheit über Jahre eine private
        Angelegenheit, die sich dem Millionenpublikum nur in kleinen, kaum kommentierten
        Zeichen zeigte – eine sitzende statt stehende Moderation, ein schmaler gewordenes
        Gesicht.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz?</strong>
        Für eine selbsterhaltende Drei mit Viererflügel, deren tiefere emotionale Intensität
        zeitlebens hinter einer sachlichen, kompetenten Fassade verborgen blieb, liegt eine
        Deutung nahe: Ausgerechnet jenes Organ, das im übertragenen Sinn für Gefühl und
        Verbundenheit steht, wurde zum Schauplatz des Verfalls – bei einem Mann, dessen
        eigentliche emotionale Tiefe zeitlebens keinen öffentlichen Raum erhielt. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        Herzerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Thoelkes Fall zeigen lässt, ist ein Muster im Umgang
        mit der eigenen körperlichen Belastungsgrenze, das bei einer ausgeprägten
        selbsterhaltenden Drei mit Viererflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Thoelke kannte sein eigenes Muster nicht – die selbsterhaltende Drei mit Viererflügel
        beweist ihren Wert reflexhaft über nachweisbare, ununterbrochene Leistung, auch wenn der
        eigene Körper längst deutliche Warnzeichen sendet, und genau dieses Muster lebte er bis
        in seine letzten aktiven Jahre unverändert aus, ohne öffentlich eine andere Form des
        Umgangs mit der eigenen Erschöpfung zu entwickeln. Wer das eigene Bedürfnis, sich über
        Funktion zu beweisen, nicht als Muster erkennt, kann davon auch dann nicht ablassen,
        wenn der eigene Körper längst etwas anderes verlangt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Wim Thoelkes Krankheitsverlauf liest sich wie die Kehrseite seiner Fernsehkarriere:
        derselbe Waschbär, der zwei Jahrzehnte lang als ruhiger, verlässlicher Anker eine ganze
        Sendung trug, hielt still an dieser Rolle fest, bis der eigene Körper keine andere Wahl
        mehr zuließ. Ein Mann, der Millionen Zuschauern Sicherheit gab, fand für sein eigenes,
        schwächer werdendes Herz zuletzt nur noch die stille Rückkehr ins eigene Zuhause.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, keine medizinische Diagnose.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-wim-thoelke", label:"Porträt: Wim Thoelke (SE3w4) – Der Große Preis"},
        {route:"krankheitsportraets-bernie-madoff", label:"Krankheitsporträt: Bernie Madoff (SE3w4) – gleicher Subtyp"},
        {route:"krankheitsportraets-osho", label:"Krankheitsporträt: Osho (SE3w4) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}
