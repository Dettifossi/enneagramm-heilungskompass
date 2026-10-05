import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function bryanJohnsonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bryan-johnson-portrait.jpg" alt="Bryan Johnson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bryan Johnson</p>
        <p class="krim-portrait-typ">SX5w6 · Sexueller Typ 5 mit Sechserflügel · Kontratyp der Fünf</p>
        <p class="krim-portrait-subtitle">Unternehmer, Biohacker, geb. 1977 – Gründer von Braintree, ›Project Blueprint‹ – Tierentsprechung: Igel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Igel, der seinen eigenen Verfall vermisst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bryan Johnson wurde 1977 in Provo, Utah, geboren und wuchs im nahegelegenen Springville in einem religiös geprägten mormonischen Umfeld auf. Seine Kindheit war alles andere als geschützt: Sein Vater kämpfte über 25 Jahre mit einer Drogenabhängigkeit, sein Stiefvater zeigte früh Anzeichen einer Alzheimer-Erkrankung, die Ehe der Eltern zerbrach. Johnson selbst beschrieb später ein Jahrzehnt schwerer Depression. Nach einem Studienabschluss an der Brigham Young University und einem MBA der University of Chicago gründete er 2007 das Zahlungsdienstleistungsunternehmen Braintree, das er 2013 für 800 Millionen Dollar an PayPal verkaufte.</p>
          <p class="vb-intro">Der <strong>Igel</strong> ist das Tier des sexuellen Typs 5 – ein stilles, wachsames Wesen, das die Welt aus geschützter Distanz erkundet und sich nur bei absolutem Vertrauen öffnet. Seit 2021 betreibt Johnson unter dem Namen ›Project Blueprint‹ das wohl akribischste Selbstvermessungsprojekt eines Menschen überhaupt: tägliche Messung Dutzender Organfunktionen, über 100 Nahrungsergänzungsmittel pro Tag, strikt veganer Ernährungsplan, rigorose Trainingsroutinen und experimentelle Therapien – mit dem erklärten Ziel, biologisches Altern messbar zu verlangsamen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Fünf: Vertrauen als Fundament, Rückzug als Norm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Fünf (SX5)</strong> ist nach Naranjo der Kontratyp der Fünf: Die Leidenschaft des Geizes zeigt sich hier am wenigsten offensichtlich, weil die sexuelle Energie die Fünf aus ihrer Isolation herauszieht und nach der einen, tragenden Verbindung suchen lässt. Naranjo nannte diesen Subtyp <em>Vertrauen</em> – doch dieses Vertrauen gilt nur wenigen Auserwählten, niemals der breiten Öffentlichkeit. Bei Johnson zeigt sich das in einem auffälligen Kontrast: Er ist medial hochpräsent, dokumentiert öffentlich buchstäblich jeden Blutwert seines Körpers – und beschreibt zugleich sein eigenes soziales Leben als nahezu nicht existent – seine romantischen Beziehungen seien der eigenen Datenerhebung vollständig untergeordnet.</p>
          <p class="vb-intro">Was öffentlich wie radikale Transparenz wirkt, ist bei genauerem Hinsehen eine sehr typische SX5-Bewegung: Nicht das eigene Innenleben wird geteilt, sondern ein exakt kontrolliertes, äußeres System aus Messwerten. Die eigentliche Person dahinter – Beziehungen, Zweifel, das subjektive Erleben – bleibt so unzugänglich wie beim klassischen Fünfer-Rückzug, nur dass sich Johnson diesmal hinter einer Wand aus Daten statt hinter verschlossenen Türen verschanzt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Bedrohungsanalyse als Lebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> bringt der sexuellen Fünf ein tiefes Sicherheitsbedürfnis und ein systematisches Denken in Bedrohungsszenarien. Bei Johnson lässt sich das direkt an ›Project Blueprint‹ ablesen: Jedes Organ wird als potenzielle Schwachstelle behandelt, jeder Biomarker als Frühwarnsystem gegen eine Bedrohung, die alle Menschen betrifft – den eigenen körperlichen Verfall. Statt vage auf ein langes Leben zu hoffen, baut die SX5w6 ein engmaschiges Kontrollsystem, das nichts dem Zufall überlässt.</p>
          <p class="vb-intro">Dieselbe Systematik prägte bereits seine unternehmerische Laufbahn: Mit Kernel gründete er ein Unternehmen für Gehirn-Computer-Schnittstellen, mit dem OS Fund (der Name spielt auf ›Operating System‹ an – ein Wagniskapitalfonds, der gezielt in die technologischen ›Betriebssysteme‹ der Zukunft investiert) einen Fonds, der gezielt in frühe, riskante Wissenschafts- und Technologieprojekte investiert – stets mit dem Blick auf das, was die Zukunft bedrohen oder verändern könnte, und stets mit einem kleinen, engen Kreis von Vertrauten statt breiter öffentlicher Rechenschaft.</p>
        </blockquote>

        <h2 class="vb-section">4. Die tatsächliche Leistung: Zahlungsinfrastruktur, die tatsächlich funktionierte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bevor Johnson zum bekanntesten Biohacker der Welt wurde, baute er mit Braintree eine der zuverlässigsten Zahlungsinfrastrukturen ihrer Zeit auf. In einer Branche, die für träge, schwerfällige Systeme bekannt war, setzte Braintree auf entwicklerfreundliche APIs und eine Systemarchitektur, die eine Downtime für Wartungsarbeiten praktisch ausschloss – Händler mussten Zahlungen rund um die Uhr entgegennehmen können, ohne Unterbrechung. 2012 übernahm Braintree den mobilen Bezahldienst Venmo, bis 2013 verarbeitete das Unternehmen jährlich zwölf Milliarden Dollar an Zahlungen, vier Milliarden davon mobil.</p>
          <p class="vb-intro">Diese Zuverlässigkeit war kein Zufall, sondern exakt die SX5w6-Handschrift: kompromisslose technische Sorgfalt im Verborgenen, damit das System von außen wie selbstverständlich funktioniert. Erst dieser wirtschaftliche Erfolg verschaffte Johnson die finanziellen Mittel, die sein späteres, noch radikaleres Projekt der Selbstoptimierung erst möglich machten.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Fünf mit Sechserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX5w6 zeigt sich in Johnsons außergewöhnlicher Fähigkeit zur Fokussierung: ›Project Blueprint‹ hat, unabhängig von der Bewertung im Einzelnen, eine öffentliche Debatte über messbare, datengestützte Gesundheitsvorsorge losgetreten, die es ohne seine Radikalität in dieser Form nicht gäbe. Die Dokumentation, dass sein biologisches Alterungstempo laut eigenen Messungen so langsam wie bei keinem bislang untersuchten Menschen verläuft, ist zumindest ein bemerkenswertes Selbstexperiment.</p>
          <p class="vb-intro">Das Schicksalsmuster der Fünf ist <strong>Geiz</strong> – das Zurückhalten, das Nicht-Teilen aus der Angst, durch Geben weniger zu werden. Bei Johnson zeigt sich das in einer bemerkenswerten Asymmetrie: Öffentlich teilt er beinahe jeden Messwert seines Körpers, doch sein eigentliches Innenleben – Beziehungen, Selbstzweifel, das, was das Projekt ihn emotional kostet – bleibt so gut wie unzugänglich. Kritiker bemängeln zudem die Isolation, in die das Protokoll ihn treibt: ein Leben, das fast vollständig der eigenen Optimierung untergeordnet ist, mit wenig Raum für das, wofür ein längeres Leben eigentlich gelebt werden könnte.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Kontrollsystem zur gelebten Verbindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Fünf führt von der Überzeugung <em>Ich habe nicht genug, um zu geben</em> zur Erkenntnis <em>Was ich bin, reicht – auch ohne vollständige Kontrolle über jede Variable.</em> Für die SX5w6 bedeutet das, das Vertrauen, das sie dem engsten Kreis oder dem eigenen Messsystem entgegenbringt, langsam auch auf ungeplante, unkontrollierbare menschliche Nähe auszudehnen – ohne sie vorher in Daten übersetzen zu müssen.</p>
          <p class="vb-intro">Ein aufschlussreicher Vergleich innerhalb desselben Subtyps ist <a href="javascript:void(0)" data-route="beruehmte-mark-zuckerberg">Mark Zuckerberg</a> (SX5w6): Auch bei ihm zeigt sich dieselbe Konstruktion kontrollierter, engmaschiger Systeme als Ersatz für offene, unvorhersehbare Verbindung – bei Zuckerberg im sozialen Netzwerk, bei Johnson im eigenen Körper. Mehr dazu im <a href="javascript:void(0)" data-route="beruehmte-mark-zuckerberg">Porträt zu Mark Zuckerberg</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx5", label:"SX5 – Der Igel: Subtyp-Profil"},
        {route:"beruehmte-mark-zuckerberg", label:"Porträt: Mark Zuckerberg (SX5w6)"},
        {route:"beruehmte-edward-snowden", label:"Porträt: Edward Snowden (SX5w6)"},
      ])}
    </div>
  `);
}

export function helgeSchneiderPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-helge-schneider-portrait.jpg" alt="Helge Schneider – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Helge Schneider</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexueller Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Musiker, Komiker und Regisseur, geb. 1955 &ndash; Tierentsprechung: Faultier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Faultier auf der Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Faultier</strong> ist das Tier der sexuellen Neun &ndash; ein Tier, das sich nicht abgrenzt, sondern verschmilzt: mit der Stimmung, mit dem Moment, mit dem Publikum. Helge Schneider, geboren 1955 in Mülheim an der Ruhr, betritt die Bühne ohne festes Programm und ohne Manifest &ndash; was geschieht, entsteht im Moment selbst, aus einer Verschmelzung mit der jeweiligen Stimmung des Abends, nicht aus einem vorher festgelegten Plan.</p>
          <p class="vb-intro">Er selbst versteht sich in erster Linie als Jazzmusiker, nicht als Komiker &ndash; als Kind hörte er Louis Armstrong im Radio, später verliebte er sich in die Musik Thelonious Monks, nachdem ihn allein schon das Plattencover tief beeindruckt hatte. Diese frühe, fast wortlose Verschmelzung mit seinen musikalischen Vorbildern trägt sein gesamtes Werk bis heute.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Neun: Verschmelzung statt Standpunkt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Neun (SX9)</strong> sucht nach Naranjo Erfüllung durch vollständige Verschmelzung &ndash; mit einer Person, einer Stimmung, einem Moment &ndash; statt durch einen klar behaupteten eigenen Standpunkt. Schneider verweigert sich konsequent jeder Erklärung seines Schaffens: keine großen Programme, keine Manifest-Texte. Wer etwas verstehen will, muss hinschauen &ndash; nicht lesen. Dieses Schweigen ist kein Ausweichen, sondern Schutz der eigenen künstlerischen Freiheit vor jeder Vereinnahmung durch fremde Deutungen.</p>
          <p class="vb-intro">Auf der Bühne schafft er Situationen, in denen das Publikum selbst entscheiden muss, ob es sich auf das Geschehen einlässt oder nicht &ndash; musikalische Passagen illustrieren nichts, sie tragen; Pausen dürfen bewusst länger dauern, als es dramaturgische Konventionen erlauben würden. Genau das ist die SX9-Logik: Es wird kein Weg vorgegeben, sondern ein Raum geöffnet, in den das Publikum sich hineinbegeben kann &ndash; oder eben nicht.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Disziplin hinter dem scheinbaren Chaos</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel</strong> gibt der sexuellen Neun eine verborgene, aber unverkennbare Strenge. Was auf der Bühne wie reiner Zufall wirkt, ist in Wirklichkeit das Ergebnis jahrzehntelanger musikalischer Übung &ndash; sein Timing, seine Struktur, seine Improvisation sind kein Zufallsprodukt, sondern Resultat harter Arbeit. Genau diese Kombination aus scheinbarer Beliebigkeit und tatsächlicher, nie zur Schau gestellter Präzision macht die SX9w1 aus.</p>
          <p class="vb-intro">Auch sein Verhältnis zum Ruhrgebiet, in dem er aufwuchs, spiegelt diesen Flügel: Können wird dort nicht ausgestellt, sondern genutzt. Statt seinen Erfolg zu inszenieren, wurde Schneider gerade durch Zurückhaltung sichtbar &ndash; eine stille, aber unnachgiebige Haltung, die sich auch daran zeigte, dass er während der Pandemie schlicht nicht auftrat, wenn die äußeren Bedingungen seinen Anspruch an Nähe und Unmittelbarkeit nicht erfüllten. Haltung zeigt sich im Handeln, nicht im Statement.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Vom Radio-Kind zum Kult-Musiker</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Den kommerziellen Durchbruch schaffte Schneider 1992 mit dem Album ›Guten Tach‹, 1994 wurde er einem breiten Fernsehpublikum bekannt &ndash; ›Katzeklo‹ stieg in die deutschen Charts ein. Bis heute lässt er sich weder als reiner Musiker noch als klassischer Komiker einordnen; seine Spezialität liegt in der Gleichzeitigkeit von Ernsthaftigkeit und Spiel. Er provoziert und überrascht mit einem absurden Humor, den sich sonst wohl niemand trauen würde.</p>
          <p class="vb-intro">Sein heterogenes Publikum teilt sich einen Raum, ohne dass Einigkeit verlangt würde &ndash; sein Werk verbindet, ohne zu vereinen. Auch das Lachen selbst wird bei ihm verzögert und wahlweise, nie ein reiner Reflex. Genau darin zeigt sich die SX9-Fähigkeit, einen gemeinsamen Raum zu schaffen, in dem Verschiedenes nebeneinander bestehen kann, ohne dass jemand zu einer Position gezwungen würde.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Neun mit Einserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX9w1 zeigt sich bei Schneider in der Fähigkeit, aus reiner Verschmelzung mit dem Moment etwas zu schaffen, das kein festgelegtes Konzept je erreichen könnte &ndash; eine Kunst, die lebendig bleibt, weil sie sich nie selbst erklärt und nie zur Formel erstarrt.</p>
          <p class="vb-intro">Das Schicksalsmuster der Neun ist die <strong>Selbstvergessenheit</strong> &ndash; bei der SX9 gewendet in eine Auflösung der eigenen Konturen zugunsten der Verschmelzung mit dem Publikum, der Musik, dem Moment. Der Einserflügel bewahrt Schneider davor, in reiner Beliebigkeit zu verschwinden, indem er der Verschmelzung eine unsichtbare, aber spürbare Struktur unterlegt &ndash; ohne diese Struktur würde aus der Verschmelzung bloßes Chaos, keine Kunst.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Faultier, das genau weiß, wann es sich Zeit lässt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Helge Schneiders Karriere zeigt die sexuelle Neun mit Einserflügel in einer besonders eigenwilligen Form: eine Kunst, die sich jeder Erklärung verweigert und gerade dadurch ihre Freiheit bewahrt, getragen von einer Disziplin, die sich nie in den Vordergrund drängt. Das Faultier hetzt nicht &ndash; aber wenn es sich bewegt, dann mit einer Präzision, die jahrzehntelange Übung verrät.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/sx9", label:"SX9 – Das Faultier: Subtyp-Profil"},
          {route:"kriminalpsychologie-wolfgang-beltracchi", label:"Kriminalpsychologie: Wolfgang Beltracchi (SX9w1) – ebenfalls Verschmelzung mit fremden künstlerischen Vorbildern, hier als Kunstfälschung"},
          {route:"beruehmte-sophie-marceau", label:"Porträt: Sophie Marceau (SX9w1)"},
          {route:"beruehmte-adam-sandler", label:"Porträt: Adam Sandler (SX9w1) – dieselbe Präzision hinter scheinbarer Beiläufigkeit"},
        ])}
      </div>
    </div>
  `);
}

export function ajeetKaurPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ajeet-kaur-portrait.jpg" alt="Ajeet Kaur – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ajeet Kaur</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle">US-amerikanische Sängerin und Mantra-Künstlerin &ndash; Tierentsprechung: Gürteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Gürteltier, das sich in die Musik zurückzog</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier der sozialen Vier &ndash; ein Wesen, das sein Anderssein nicht verbirgt, sondern sichtbar auf der Haut trägt, während sein empfindsames Inneres darunter geschützt bleibt. Die US-amerikanische Sängerin Ajeet Kaur, bürgerlich Siobhan Moore, wuchs in den Wäldern und Bergen von New Hampshire auf, mit einem Elternhaus, das gleichermaßen von der Sikh-Tradition und dem römisch-katholischen Glauben geprägt war. Mit acht Jahren wurde bei ihr Hashimoto-Thyreoiditis diagnostiziert, eine chronische Autoimmunerkrankung der Schilddrüse &ndash; eine frühe körperliche Erfahrung von Andersartigkeit, die ihr gesamtes weiteres Leben begleiten sollte.</p>
          <p class="vb-intro">Bereits im Mutterleib kam sie über ihre Familie mit Kundalini-Yoga in Berührung. Mit elf Jahren erlebte sie bei einem von Yogi Bhajan geleiteten Frauen-Camp in New Mexico, wie sehr Musik einen ganzen Raum von Menschen heben kann &ndash; ein Moment, der sie zur Überzeugung brachte, nichts anderes tun zu wollen, als heilende Schwingung durch Klang weiterzugeben. Mit sechzehn begann sie ihre Kundalini-Yoga-Lehrerausbildung.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Heilung als gemeinschaftlicher Akt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> sucht ihren Wert nicht im reinen Rückzug, sondern in einer besonderen Rolle innerhalb einer Gemeinschaft &ndash; hier: der weltweiten Kundalini-Yoga- und Mantra-Gemeinschaft. Mit ihrem Debütalbum &bdquo;Sacred Waters&ldquo; (2013) und &bdquo;At the Temple Door&ldquo; (2014), auf dem unter anderem die bekannte Chant-Künstlerin Snatam Kaur mitwirkte, positionierte sich Ajeet Kaur als eigenständige Stimme innerhalb eines Genres, dem sie zugleich treu blieb. Sie tourt bis heute sowohl mit der eigenen Band als auch gemeinsam mit Snatam Kaur &ndash; eine Zugehörigkeit, die nie zur bloßen Anpassung wird.</p>
          <p class="vb-intro">Ihre eigene, ganz persönliche Krankheitsgeschichte floss dabei direkt in ihre öffentliche Rolle als Heilerin durch Musik ein: &bdquo;Mantra und Musik waren immer ein großer Teil davon, wie ich mit meiner eigenen Gesundheit umgehe&ldquo;, sagte sie einmal. Für die soziale Vier ist das typisch: Das eigene Leid wird nicht verborgen, sondern zur Grundlage einer Rolle, die anderen dient &ndash; und genau darin gesehen zu werden.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Musik als Zufluchtsort statt als Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> verleiht der Vier eine introvertierte, rückzugsorientierte Note &ndash; die eigene Gefühlswelt wird nicht ausgestellt, sondern in einen geschützten Innenraum verlagert, aus dem heraus erst später etwas nach außen dringt. Ajeet Kaur beschreibt Musik explizit in genau diesen Begriffen: &bdquo;Musik war für mich immer ein Zufluchtsort. Ein Ort, an dem ich verschwinden und mich wieder mit einem tieferen, ruhigeren Teil von mir selbst verbunden fühlen kann. Ich ziehe mich schon seit meiner Kindheit auf diese Weise in die Musik zurück, und tue es bis heute.&ldquo;</p>
          <p class="vb-intro">Diese Sprache des Rückzugs &ndash; nicht des Auftritts &ndash; ist die reinste Ausprägung der SO4w5: Kunst und Musik als &bdquo;die größten Heiler, Lehrer und Therapeuten&ldquo; ihres Lebens, wie sie selbst sagt, nicht primär als Mittel der Selbstdarstellung. Die Bühne existiert, aber sie ist Nebeneffekt eines im Kern privaten, meditativen Prozesses.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w5 ist die Fähigkeit, <strong>eigenes Leiden in eine Quelle der Heilung für andere</strong> zu verwandeln &ndash; Ajeet Kaurs frühe Krankheitserfahrung wurde nicht zur bloßen Einschränkung, sondern zum Ausgangspunkt eines künstlerischen Weges, der seit Jahrzehnten Menschen weltweit in Konzerten und Workshops begleitet. Aus einer sehr persönlichen Verletzlichkeit entstand eine Rolle, die anderen echten Trost bietet.</p>
          <p class="vb-intro">Der Schatten der sozialen Vier mit Fünferflügel zeigt sich, wo der Rückzug in die Musik zur einzigen verfügbaren Bewältigungsstrategie wird &ndash; wo eine chronische Krankheit lebenslang mitgetragen werden muss und die introvertierte, meditative Verarbeitung mitunter schwerer zugänglich bleibt als ein direkterer, offener Umgang mit Schmerz und Verletzlichkeit im Alltag.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Gürteltier, das seine Verletzlichkeit zum Klang machte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ajeet Kaur bleibt eine der eigenständigsten Stimmen der zeitgenössischen Mantra- und Kundalini-Musikszene &ndash; eine Künstlerin, die ihre chronische Krankheit nie zum Geheimnis machte, sondern zur Quelle einer Musik, die explizit als Heilmittel verstanden werden will. Ihr Weg zeigt, wie aus früher körperlicher Verletzlichkeit ein Lebenswerk entstehen kann, das anderen genau diese Verletzlichkeit als etwas Teilbares, nicht Beschämendes zeigt.</p>
          <p class="vb-intro">Das Gürteltier, das seinen Panzer nicht aus Härte baute, sondern aus Klang &ndash; das ist das bleibende Bild der sozialen Vier mit Fünferflügel: Verletzlichkeit, die sich nicht zur Schau stellt, sondern sich zurückzieht, um von dort aus, in aller Stille, andere zu berühren.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
        {route:"lebensmusterkompass/so4", label:"Lebensmusterkompass: SO4 – Gürteltier"},
        {route:"beruehmte-mariella-superina", label:"Porträt: Dr. Mariella Superina (SO4w5)"},
        {route:"beruehmte-lauren-gardner", label:"Porträt: Prof. Lauren Gardner (SO4w5)"},
      ])}
    </div>
  `);
}

export function annaAndersonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-anna-anderson-portrait.jpg" alt="Anna Anderson – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anna Anderson</p>
        <p class="krim-portrait-typ">SE3w4 &middot; Selbsterhaltende Typ 3 mit Viererfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Ber\xfchmteste Hochstaplerin der Geschichte, 1896&ndash;1984 &ndash; Tierentsprechung: Waschb\xe4r</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Waschb\xe4r</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschb\xe4r</strong> ist das Tier der selbsterhaltenden Drei &ndash; ein Tier, das man leicht untersch\xe4tzt. Kein lauter Auftritt, keine B\xfchne, sondern findige H\xe4nde, ein wacher Blick f\xfcr das, was gebraucht wird, und die F\xe4higkeit, sich aus fast nichts eine Existenz zu bauen. Anna Anderson hat genau das getan &ndash; nur dass das &bdquo;Nichts&ldquo;, aus dem sie sich eine Existenz baute, eine fremde Identit\xe4t war.</p>
          <p class="vb-intro">1920 wurde eine junge Frau nach einem Selbstmordversuch aus einem Berliner Kanal gerettet und in eine Nervenheilanstalt eingeliefert. Wenig sp\xe4ter begann sie zu behaupten, sie sei Anastasia Romanowa, die j\xfcngste Tochter des letzten russischen Zaren &ndash; angeblich die einzige \xdcberlebende der Ermordung der Zarenfamilie 1918. Unter dem Namen Anna Anderson lebte sie fortan Jahrzehnte von der Unterst\xfctzung wohlhabender Gl\xe4ubiger, die von ihrer Geschichte \xfcberzeugt waren.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Drei: Absicherung als Lebensprojekt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Drei (SE3)</strong> ist nach Naranjo der Subtyp, den er &bdquo;Sicherheit&ldquo; nannte &ndash; keine Drei, die auf der gro\xdfen B\xfchne gl\xe4nzen will, sondern eine, die unerm\xfcdlich am materiellen Fundament arbeitet, oft im Hintergrund, oft unterschätzt. Bei Anna Anderson trat dieses Muster in einer extremen, tragischen Form hervor: Ihr eigentliches Ziel war nie \xf6ffentlicher Ruhm um seiner selbst willen, sondern die dauerhafte Versorgung durch andere &ndash; Wohnung, Nahrung, medizinische Betreuung, ein Leben ohne die Armut, aus der sie vermutlich kam.</p>
          <p class="vb-intro">Die Identit\xe4t als Anastasia war dabei nicht der Zweck, sondern das Mittel. Jahrzehntelang zog sie von einem G\xf6nnerhaushalt zum n\xe4chsten, immer dort, wo Glaube und Mitgef\xfchl noch Unterst\xfctzung bedeuteten. 1968, kurz bevor ihr US-Visum ablief, heiratete sie den Historiker John Manahan &ndash; eine pragmatische Verbindung, die ihr den dauerhaften Aufenthalt in den USA sicherte. Genau diese N\xfcchternheit im Kern einer scheinbar romantischen Geschichte ist die Handschrift der SE3.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererfl\xfcgel: Die tragische Einzigartigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eine SE3 mit schw\xe4cher ausgepr\xe4gtem Viererfl\xfcgel h\xe4tte vermutlich eine unauff\xe4lligere Legende gew\xe4hlt. Bei Anderson trat stattdessen eine ausgepr\xe4gte Anziehung zum Dramatischen, zum Einzigartigen, zum unwiederholbar Tragischen hervor: nicht irgendeine \xdcberlebende, sondern die letzte Tochter eines ausgel\xf6schten Kaiserhauses &ndash; gezeichnet von einem Trauma, das niemand sonst je erlebt hatte. Diese Erz\xe4hlung bot eine Identit\xe4t, die weit \xfcber gew\xf6hnliches Leid hinausging.</p>
          <p class="vb-intro">Ihr tats\xe4chliches Leben st\xfctzte diese Rolle auf erschreckende Weise: mehrere psychiatrische Klinikaufenthalte, Suizidversuche, extreme Stimmungsschwankungen, ein Leben in st\xe4ndiger emotionaler Ausnahmesituation. Ob echtes Trauma, erlernte Rolle oder beides ineinander verwoben &ndash; der Viererfl\xfcgel lieferte die innere Tiefe, die aus einer blo\xdfen Behauptung eine glaubw\xfcrdig gelebte, tragische Identit\xe4t machte.</p>
        </blockquote>

        <h2 class="vb-section">4. Der l\xe4ngste Zivilprozess der deutschen Geschichte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ab 1938 versuchte Anderson vor Gericht, ihre Identit\xe4t als Anastasia rechtlich anerkennen zu lassen, um Anspr\xfcche auf das Romanow-Erbe geltend zu machen. Der Prozess zog sich \xfcber 32 Jahre hin und wurde zum l\xe4ngsten Zivilverfahren der deutschen Rechtsgeschichte. 1970 best\xe4tigte das Oberlandesgericht Karlsruhe das Urteil der Vorinstanz: Ihre Identit\xe4t konnte weder bewiesen noch widerlegt werden.</p>
          <p class="vb-intro">Wichtig f\xfcr die Einordnung: Es handelte sich um ein Zivilverfahren um Erbanspr\xfcche, nicht um einen Strafprozess. Anna Anderson wurde nie wegen Betrugs oder eines anderen Delikts strafrechtlich angeklagt oder verurteilt &ndash; genau deshalb steht sie hier unter &bdquo;Ber\xfchmte Pers\xf6nlichkeiten&ldquo; und nicht unter &bdquo;Kriminalpsychologie&ldquo;. Ihr Fall bleibt eine Grenzfigur: eine Frau, deren Anspruch nie gerichtlich als Betrug festgestellt wurde, obwohl er sich sp\xe4ter als falsch erwies.</p>
        </blockquote>

        <h2 class="vb-section">5. Die DNA-Aufl\xf6sung: Franziska Schanzkowska</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Erst 1994, zehn Jahre nach Andersons Tod, brachte ein DNA-Test aus erhaltenem Gewebematerial Klarheit: Ihre mitochondriale DNA stimmte weder mit den Romanow-Überresten noch mit lebenden Verwandten der Zarenfamilie überein &ndash; wohl aber mit einem Großneffen der polnischen Fabrikarbeiterin Franziska Schanzkowska, die 1920 spurlos verschwunden war, zur selben Zeit, als Anna Anderson auftauchte.</p>
          <p class="vb-intro">Die SE3 investiert enorme Energie darin, eine Identit\xe4t abzusichern, die tr\xe4gt &ndash; bis zuletzt, \xfcber den eigenen Tod hinaus. Selbst als die Wissenschaft ihr widersprach, hatte Anderson die Rolle so lange und so konsequent gelebt, dass sich Legende und Person kaum noch trennen lie\xdfen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Waschb\xe4r, der sich eine Krone baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Anna Andersons Geschichte zeigt die SE3w4 in ihrer extremsten, ambivalentesten Form: die pragmatische, unerm\xfcdliche Arbeit an der eigenen Absicherung, verbunden mit einer Identit\xe4t von solcher tragischer Tiefe, dass Millionen Menschen ihr acht Jahrzehnte lang glauben schenkten &ndash; oder glauben wollten. Ob sie selbst irgendwann an ihre eigene Geschichte glaubte, bleibt offen. Vielleicht war genau das der Punkt: Die Grenze zwischen \xdcberlebensstrategie und gelebter Wahrheit verschwimmt, wenn man eine Rolle lange genug spielt.</p>
          <p class="vb-intro">Der Waschb\xe4r baut sich aus dem, was vorhanden ist, ein funktionierendes Auskommen &ndash; geschickt, unauff\xe4llig, \xfcberlebensf\xe4hig unter widrigsten Bedingungen. Anna Anderson baute sich aus einem Trauma, einem verschwundenen Namen und einer untergegangenen Dynastie eine Existenz, die \xfcber sechs Jahrzehnte trug. Das ist keine bewundernswerte Leistung. Aber es ist eine, die zeigt, wozu die selbsterhaltende Drei mit Viererfl\xfcgel unter extremem Druck f\xe4hig ist.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-judit-polgar", label:"Portr\xe4t: Judit Polg\xe1r (SE3w4)"},
          {route:"kriminalpsychologie-frank-abagnale-jr", label:"Kriminalpsychologie: Frank Abagnale Jr. (SO7w6) – Der Hochstapler"},
        ])}
      </div>
    </div>
  `);
}

export function billKaulitzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bill-kaulitz-portrait.jpg" alt="Bill Kaulitz – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bill Kaulitz</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexueller Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Deutscher Musiker, Model &amp; Designer, geb. 1989 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt &ndash; und verhält sich wie die größte. Er fürchtet nichts, bellt, wenn nötig, und zeigt keine Scheu vor dem, was größer ist als er. Kaum jemand hat diesen Kontrast so konsequent zur eigenen Bühnenfigur gemacht wie Bill Kaulitz: schmal, oft in auffälligstem Make-up und schrillster Garderobe, und dabei nie um eine provokante Aussage verlegen.</p>
          <p class="vb-intro">Der deutsche Musiker Bill Kaulitz wurde am 1. September 1989 in Leipzig geboren, zehn Minuten nach seinem eineiigen Zwillingsbruder Tom (SE2w3). Als die beiden sechs waren, trennten sich die Eltern; mit sieben kam die Scheidung. In Loitsche bei Magdeburg, wo die Familie danach aufwuchs, war der junge Bill mit ungewöhnlichem Aussehen und ungewöhnlicher Stimme alles andere als unauffällig &ndash; ein früher Ausgangspunkt für ein Leben, das nie leise verlaufen sollte. Auch Tom wird in diesem Kompass in einem eigenen Porträt behandelt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Sich messen, um gesehen zu werden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> trägt den Schmerz der Vier in unmittelbare persönliche Intensität. Naranjo nannte diesen Subtyp <em>Rivalität</em> &ndash; die brennende Überzeugung, dass andere haben, was einem selbst verweigert wurde, verbunden mit dem Impuls, sich zu messen, zu übertreffen, aufzufallen. Bill Kaulitz' Stimme war schon als Kind ungewöhnlich hoch und durchdringend &ndash; ein Merkmal, das ihn von Gleichaltrigen unterschied, statt ihn anzugleichen, und das er nie zu verstecken versuchte.</p>
          <p class="vb-intro">Mit Tokio Hotel und dem Debütalbum <em>Schrei</em> (2005) sowie der Single <em>Durch den Monsun</em>, die es binnen eines Monats auf Platz eins der deutschen Charts schaffte, verwandelte Bill genau diese Andersartigkeit in ein öffentliches Statement statt in ein Versteck. Die SX4 weiß: Halbherzig ist keine Option &ndash; und Bill Kaulitz hat dieses Prinzip über zwei Jahrzehnte konsequent gelebt, von der schwarz-weißen Frontmann-Ästhetik der frühen Bandjahre bis zu den immer wieder neu erfundenen, glitzernden Looks seiner späteren öffentlichen Auftritte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Vom Frontmann zur Mode-Ikone</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sexuellen Vier die Fähigkeit, das Innere nach außen zu wenden und in Wirkung zu verwandeln, statt in der eigenen Intensität zu versinken. Karl Lagerfeld engagierte Bill Kaulitz bereits vor mehr als zehn Jahren für eine mehrteilige Fotostrecke in der deutschen <em>Vogue</em>, 2010 modelte er für das Label Dsquared2, 2019 gründete er mit „Magdeburg &ndash; Los Angeles" seine eigene Modemarke &ndash; benannt nach genau den beiden Orten, zwischen denen sein Leben sich seither aufspannt.</p>
          <p class="vb-intro">Auch abseits der Musik zeigt sich dieser Antrieb: 2021 moderierte er die ProSieben-Show <em>Perfect Shot</em>, 2023 gewann er das Finale von Joko Winterscheidts <em>Wer stiehlt mir die Show?</em>. Der Dreierflügel fragt immer wieder: Wie mache ich aus dem, was mich innerlich bewegt, ein Bild, das niemand übersehen kann? Bei Bill Kaulitz ist die Antwort seit über zwanzig Jahren dieselbe &ndash; nur die Bühne wechselt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4w3 ist die Fähigkeit, das eigene Anderssein nicht zu verbergen, sondern es so konsequent auszustellen, dass daraus Identität und Wirkung zugleich entstehen. Bill Kaulitz lebt offen queer und äußert sich in Interviews, im gemeinsamen Podcast mit seinem Bruder und in der Öffentlichkeit unverstellt zu seiner Identität &ndash; eine Sichtbarkeit, die für viele junge queere Fans in Deutschland zur Orientierungsfigur wurde.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das Gefühl, dass anderen etwas Wesentliches gegeben wurde, das einem selbst fehlt. Bei der SX4w3 kann dieser Neid zum ständigen Bedürfnis werden, sich sichtbar von anderen abzuheben, statt Ruhe in der eigenen Einzigartigkeit zu finden. Kaulitz' immer wieder neu erfundenes Erscheinungsbild &ndash; von der schwarzen Frontmann-Uniform der Anfangsjahre bis zu den glitzernden, oft androgynen Looks späterer Jahre &ndash; zeigt diese rastlose Suche ebenso wie seine kreative Stärke.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Intensität als roter Faden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bill Kaulitz' Karriere lässt sich als eine einzige, fortlaufende Übersetzung innerer Intensität in äußere Form lesen: die durchdringende Stimme, die schon als Kind auffiel, wurde zur Frontmann-Präsenz von Tokio Hotel; das provokante Erscheinungsbild wurde zur eigenen Modemarke; die Offenheit zur eigenen Identität wurde zur öffentlichen Stimme für queere Sichtbarkeit. Gemeinsam mit seinem Zwillingsbruder Tom betreibt er seit 2021 den mit dem Deutschen Podcast Award ausgezeichneten Podcast <em>Kaulitz Hills &ndash; Senf aus Hollywood</em> &ndash; dieselbe enge familiäre Bindung, die auch Toms eigenes Porträt prägt, bleibt bis heute die Konstante hinter aller öffentlichen Verwandlung.</p>
          <p class="vb-intro">Der Chihuahua ist kein Tier der Masse. Er ist ein Tier der Intensität &ndash; klein, laut, unübersehbar, und darunter empfindlich und bindungsintensiv. Bill Kaulitz' Weg vom auffälligen Kind aus Loitsche zur international sichtbaren Mode- und Musikfigur zeigt genau dieses Muster: Wer sich nicht verstecken kann, findet irgendwann heraus, wie man das Auffallen selbst zur Kunst macht.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx4", label:"SX4 – Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-tom-kaulitz", label:"Portrait: Tom Kaulitz (SE2w3) – Zwillingsbruder"},
        {route:"beruehmte-heidi-klum", label:"Portrait: Heidi Klum (SX3w4) – Schwägerin"},
        {route:"beruehmte-freddie-mercury", label:"Portrait: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-billie-eilish", label:"Portrait: Billie Eilish (SX4w3)"},
      ])}
    </div>
  `);
}

export function carlWeathersPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-carl-weathers-portrait.jpg" alt="Carl Weathers – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Carl Weathers</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Sozialer Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">US-amerikanischer Schauspieler &amp; Regisseur, 1948&ndash;2024 &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; ein Tier, das seine Rolle im Ensemble nicht als zweite Wahl versteht, sondern als eigene, oft entscheidende Kraft. Carl Weathers wurde nie zum größten Star der Filme, in denen er mitspielte, und wurde doch zu einer ihrer unverzichtbarsten Figuren – als Gegenspieler, Mentor oder charismatischer Nebendarsteller, dessen Präsenz die Hauptfiguren um ihn herum erst vollständig machte.</p>
          <p class="vb-intro">Carl Weathers wurde am 14. Januar 1948 in New Orleans, Louisiana, geboren und war zunächst ein erfolgreicher Football-Spieler an der San Diego State University sowie kurzzeitig bei den Oakland Raiders, bevor er 1974 seine Sportkarriere beendete. Der Wechsel vom Mannschaftssport zur Schauspielerei war für ihn kein Bruch, sondern eine Fortsetzung derselben Rolle: Teil eines größeren Ganzen zu sein, in dem man verlässlich seinen Beitrag leistet.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Der Gegenspieler, der eine ganze Filmreihe trägt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte die <strong>soziale Zwei (SO2)</strong> <em>Ehrgeiz</em>: Sie will nicht zwingend im Zentrum stehen, sondern durch ihre Wirkung auf das Ganze unentbehrlich werden. Als Weathers 1976 zum Vorsprechen für <em>Rocky</em> kam, bemerkte er nach einer gemeinsamen Leseprobe mit Sylvester Stallone, man solle ihm doch einen „echten Schauspieler" zur Seite stellen – ohne zu wissen, dass Stallone sowohl Drehbuchautor als auch Hauptdarsteller war. Genau diese unbekümmerte Direktheit überzeugte Stallone und brachte ihm die Rolle des Apollo Creed ein.</p>
          <p class="vb-intro">Als Apollo Creed in vier <em>Rocky</em>-Filmen war Weathers nie die Hauptfigur – und doch ist die gesamte Reihe ohne seinen Gegenspieler kaum denkbar. Seine Energie diente konsequent dazu, die Geschichte um ihn herum größer zu machen, statt sie an sich zu ziehen: die soziale Zwei, die ihren Wert nicht an der eigenen Größe misst, sondern daran, was sie für das Gesamtwerk möglich macht.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Vom Football-Profi zur mehrfach neu erfundenen Karriere</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sozialen Zwei den Antrieb, aus jeder Rolle sichtbaren, wiedererkennbaren Erfolg zu formen. Nach Apollo Creed spielte Weathers den Elitesoldaten Dillon neben Arnold Schwarzenegger in <em>Predator</em> und den früheren Golfprofi Chubbs Peterson in <em>Happy Gilmore</em> – zwei völlig unterschiedliche Register, die jeweils zu unvergesslichen Nebenfiguren wurden.</p>
          <p class="vb-intro">Im hohen Alter fand er mit der Rolle des Greef Karga in <em>The Mandalorian</em> ein drittes großes Comeback, das ihm 2021 eine Emmy-Nominierung einbrachte – und übernahm zugleich die Regie mehrerer Episoden der Serie. Der Dreierflügel sorgt dafür, dass eine Karriere sich immer wieder neu erfindet, statt sich auf einer einzigen Rolle auszuruhen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w3 liegt in der Fähigkeit, über Jahrzehnte hinweg verlässlich Rollen zu übernehmen, die andere strahlen lassen, ohne dabei selbst an Präsenz zu verlieren. Weathers' Wechsel von der Schauspielerei zur Regie im letzten Karriereabschnitt zeigt, wie sich dieselbe Energie mit zunehmender Reife auch hinter die Kamera verlagern kann – vom Getragenwerden zum aktiven Tragen einer jüngeren Besetzung.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, für das Gelingen des Ganzen unentbehrlich zu sein. Bei der SO2w3 kann sich das mit dem Bedürfnis verbinden, in jeder neuen Rolle erneut zu beweisen, dass man noch gebraucht wird – ein Antrieb, der über eine fast fünfzigjährige Karriere hinweg zu bemerkenswerter Vielseitigkeit führte, aber selten Anlass zur Ruhe gab.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Vom Oakland-Raiders-Profi zum unverzichtbaren Nebendarsteller Hollywoods</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von der Football-Karriere über Apollo Creed, Dillon und Chubbs Peterson bis zu Greef Karga und der eigenen Regiearbeit zieht sich ein roter Faden durch Weathers' Werk: die Bereitschaft, in jedem Team, jeder Besetzung, jeder Geschichte eine tragende, aber nie um sich selbst kreisende Rolle einzunehmen.</p>
          <p class="vb-intro">Der Golden Retriever muss nicht der Star der Show sein, um unentbehrlich zu werden. Carl Weathers, der am 1. Februar 2024 im Alter von 76 Jahren starb, hinterließ eine Karriere, die genau das bewies: dass sich ein Vermächtnis nicht an der Größe der eigenen Rolle bemisst, sondern daran, wie sehr man das Ganze getragen hat.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-bruno-mars", label:"Portrait: Bruno Mars (SO2w3)"},
        {route:"beruehmte-ayo-edebiri", label:"Portrait: Ayo Edebiri (SO2w3)"},
      ])}
    </div>
  `);
}

export function cristianoRonaldoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cristiano-ronaldo-portrait.jpg" alt="Cristiano Ronaldo – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Cristiano Ronaldo</p>
        <p class="krim-portrait-typ">SO3w2 &middot; Sozialer Typ 3 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Fu\u00dfballspieler, geb. 1985 &ndash; Tierentsprechung: Gepard</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gepard</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gepard</strong> ist das Tier der sozialen Drei &ndash; und es ist das schnellste Tier der Erde. Nicht das st\u00e4rkste, nicht das gr\u00f6\u00dfte. Das schnellste. Was den Gepard auszeichnet, ist nicht rohe Kraft, sondern Pr\u00e4zision: jede Bewegung optimiert, jede Energie auf das Ziel gerichtet, keine Verschwendung, keine Ablenkung. Der Gepard jagt nicht mit Geduld wie der L\u00f6we &ndash; er jagt mit Tempo, mit Technik, mit dem absoluten Willen, der Erste zu sein.</p>
          <p class="vb-intro">Cristiano Ronaldo ist der Gepard unverfälscht. F\u00fcnf Weltfu\u00dfballer-Titel, f\u00fcnf Champions-League-Siege, \u00fcber 900 Karrieretore &ndash; Zahlen, die nicht aus Talent allein entstehen, sondern aus einem Antrieb, der sich jedem bekannt ist, der ihn je beobachtet hat: Er will der Beste sein. Nicht einer der Besten. Der Beste. Der Gepard schl\u00e4ft nicht auf seinen Lorbeeren. Er trainiert, w\u00e4hrend andere feiern.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Drei: Erfolg als Botschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Drei (SO3)</strong> ist der Verst\u00e4rkungstyp der Drei &ndash; derjenige Subtyp, bei dem Eitelkeit und Leistungsdrang am sichtbarsten werden. W\u00e4hrend die selbsterhaltende Drei Leistung nach innen richtet und lieber im Hintergrund arbeitet, braucht die soziale Drei die B\u00fchne. Nicht aus Selbstgef\u00e4lligkeit, sondern weil Anerkennung &ndash; \u00f6ffentliche, kollektive, messbare Anerkennung &ndash; der tiefste Treibstoff ist. Die SO3 fragt: <em>Sehen mich alle? Wei\u00df die Welt, was ich geleistet habe?</em></p>
          <p class="vb-intro">Bei Cristiano Ronaldo ist diese Energie in jedem Jubel sichtbar. Das ber\u00fchmte &bdquo;Siuuu&ldquo;, der gereckte Arm, der Blick ins Stadion &ndash; das hat einen klaren Grund. Das ist die SO3, die den Moment der Anerkennung vollst\u00e4ndig auskosten will. Kein Tor ohne Feier. Keine Leistung ohne Best\u00e4tigung. Nicht weil er eitel w\u00e4re im leeren Sinn &ndash; sondern weil die \u00f6ffentliche Anerkennung f\u00fcr die soziale Drei so wesentlich ist wie Wasser f\u00fcr das Pflanzenwachstum.</p>
          <p class="vb-intro">Die SO3 misst sich an anderen &ndash; und braucht Ma\u00dfst\u00e4be, um sich zu orientieren. Ronaldos jahrzehntelanger Wettbewerb mit Lionel Messi ist das vielleicht reinste Beispiel daf\u00fcr in der Sportgeschichte: Zwei M\u00e4nner, die sich gegenseitig zu H\u00f6chstleistungen antreiben, weil keiner der Zweite sein will. F\u00fcr die SO3 ist Konkurrenz kein Stress &ndash; sie ist Treibstoff.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: Der Star, der auch Bruder ist</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> bringt der sozialen Drei eine entscheidende menschliche Dimension: den echten Impuls zur Verbindung, zur F\u00fcrsorge, zur Loyalit\u00e4t. Eine SO3 mit schwach ausgeprägtem Zweierflügel könnte kalt wirken – ein Erfolgsautomat, der alles dem Ergebnis unterordnet. Ein stark ausgeprägter Zweierflügel wärmt dieses Bild von innen: Hier ist jemand, dem andere wirklich wichtig sind.</p>
          <p class="vb-intro">Ronaldos Beziehung zu seiner Familie ist daf\u00fcr das deutlichste Zeichen. Er hat seine Mutter aus der Armut geholt, seinen Sohn Cristiano Jr. offen in sein Leben integriert, spricht in Interviews regelm\u00e4\u00dfig \u00fcber seine Herkunft aus Madeira, \u00fcber die schwierigen Jahre der Kindheit, \u00fcber den fr\u00fch verstorbenen Vater. Die SO3 allein w\u00fcrde diese Geschichten vielleicht strategisch einsetzen. Der Zweierfl\u00fcgel macht sie echt: Das sind keine PR-Momente &ndash; das ist ein Mensch, der wei\u00df, wo er herkommt, und der diejenigen, die ihn geliebt haben, nicht vergisst.</p>
          <p class="vb-intro">Der Zweierfl\u00fcgel erkl\u00e4rt auch Ronaldos Verh\u00e4ltnis zu seinen Mannschaften. Er ist kein einsamer Wolf &ndash; er will, dass alle mitgewinnen. Er jubelt mit seinen Mitspielern, tr\u00e4gt Trikots mit ihren Namen, lobt \u00f6ffentlich. Das Gepard-Tempo bleibt &ndash; aber der Zweierfl\u00fcgel sorgt daf\u00fcr, dass der Zieleinlauf gemeinsam gefeiert wird.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO3 ist ihr Antrieb zur Exzellenz. Cristiano Ronaldo hat den Fu\u00dfball mitdefiniert, was es bedeutet, sich professionell auf Sport einzulassen: sein Ern\u00e4hrungsregime, sein Schlafrhythmus, sein Training nach dem Training. Er hat eine Generation von Spielern inspiriert, die verstanden haben: Talent reicht nicht. Wille entscheidet. Das ist die SO3 in ihrer heilsamsten Form &ndash; als Vorbild f\u00fcr das, was m\u00f6glich ist, wenn man sich vollst\u00e4ndig einem Ziel widmet.</p>
          <p class="vb-intro">Das Schicksalsmuster der Drei ist die <strong>Eitelkeit / T\u00e4uschung</strong> &ndash; das tiefe Bed\u00fcrfnis, als erfolgreich wahrgenommen zu werden, auch wenn die innere Realit\u00e4t anders aussieht. Bei der SO3 \u00e4u\u00dfert sich das als Schwierigkeit, Niederlagen wirklich anzunehmen. Ronaldo hat in Momenten der Kritik oder des sportlichen Misserfolgs gelegentlich Reaktionen gezeigt, die mehr \u00fcber das Innenleben der Drei verraten als \u00fcber die Situation selbst: Wut, R\u00fcckzug, das Bed\u00fcrfnis nach Rechtfertigung. Der Gepard, der verliert, leidet.</p>
          <p class="vb-intro">Der Zweierfl\u00fcgel bringt die Gefahr, die eigene Gro\u00dfz\u00fcgigkeit als Teil des eigenen Bildes zu nutzen &ndash; unbewusst, aber wirksam. Die Grenze zwischen echtem Geben und dem Bed\u00fcrfnis, als gebend gesehen zu werden, ist f\u00fcr die SO3w2 eine lebenslange Frage.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Siegen zum Sein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Drei f\u00fchrt von der Frage <em>Was habe ich erreicht?</em> zur Erkenntnis <em>Ich bin &ndash; jenseits aller Siege.</em> F\u00fcr die SO3 bedeutet das einen besonders schweren Schritt: loszulassen, dass die Anzahl der Troph\u00e4en etwas \u00fcber den eigenen Wert aussagt. Der Gepard, der aufgeh\u00f6rt hat zu rennen, muss lernen: Ich bin auch dann, wenn kein Stadion jubelt.</p>
          <p class="vb-intro">Cristiano Ronaldo n\u00e4hert sich dem Ende einer beispiellosen Karriere &ndash; und die Frage, wer er ist, wenn der Fu\u00dfball endet, ist vielleicht die tiefste, die er je beantworten muss. Der Zweierfl\u00fcgel gibt ihm dabei einen Vorsprung: Die Liebe zu seiner Familie, zu seinen Kindern, zu den Menschen, die ihn nicht wegen seiner Tore lieben, ist ein Fundament, das bleibt. Darauf kann eine Identit\u00e4t gebaut werden, die gr\u00f6\u00dfer ist als jede Bestenliste.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so3", label:"SO3 \u2013 Der Gepard: Subtyp-Profil"},
        {route:"beruehmte-kai-pflaume", label:"Portr\u00e4t: Kai Pflaume (SX3w2)"},
        {route:"beruehmte-virgil-van-dijk", label:"Portr\u00e4t: Virgil van Dijk (SO3w2) \u2013 ebenfalls Weltklasse-Fu\u00dfballer, derselbe Subtyp"},
      ])}
    </div>
  `);
}

export function dietmarBaerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dietmar-baer-portrait.jpg" alt="Dietmar Bär" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dietmar Bär</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler, geb. 1961 – seit 1997 »Kommissar Ballauf« im Kölner Tatort – Tierentsprechung: Elefant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Elefant</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Elefant</strong> ist das Tier der selbsterhaltenden Neun – massig, gemütlich, an sein eigenes Terrain und seine Herde gebunden, und dabei überraschend bestimmt, sobald es wirklich darauf ankommt. Kein anderes Tier verkörpert so treffend das Bild eines Mannes, der seit 1997 als Kommissar Max Ballauf im Kölner „Tatort" ermittelt: bodenständig, ohne Starallüren, mit einer Vorliebe fürs Deftige, Direkte – und mit einem Ruhepunkt, der sich nicht so leicht aus der Bahn werfen lässt.</p>
          <p class="vb-intro">Dietmar Bär, 1961 in Köln geboren, ist seit fast drei Jahrzehnten mit derselben Rolle verbunden – eine der längsten Ermittler-Konstanten im deutschen Fernsehen überhaupt. Der Elefant zieht nicht um. Er bleibt an seinem Wasserloch, in seiner Herde, in seiner Stadt – und genau diese Beständigkeit, nicht spektakuläre Wandlungsfähigkeit, ist die eigentliche Stärke, die Bär öffentlich verkörpert.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Neun: Komfort als Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Neun (SE9)</strong> richtet die neunertypische Suche nach Frieden nicht primär auf die Gruppe (wie die soziale Neun) oder auf die eine Verschmelzung (wie die sexuelle Neun), sondern auf das eigene, unmittelbare Wohlbefinden: Essen, Gewohnheiten, das vertraute Zuhause, ein Leben ohne unnötige Reibung. Bär spricht in Interviews auffällig oft und mit sichtlichem Vergnügen übers Kochen und Essen, über Köln als seinen festen Lebensmittelpunkt, über die Bedeutung von Ritualen und Vertrautem im Alltag.</p>
          <p class="vb-intro">Das ist kein Zufall, sondern der Kern der SE9: Sicherheit entsteht nicht durch soziale Anerkennung oder eine einzelne intensive Bindung, sondern durch die Pflege des eigenen, unmittelbaren Komforts. Genau diese Bodenständigkeit überträgt sich fast eins zu eins auf Ballauf – einen Ermittler, der nie den großen Auftritt sucht, sondern lieber im vertrauten Kölner Milieu bleibt, in dem er sich auskennt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterflügel: Deutlichkeit ohne Drohgebärde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterflügel (w8)</strong> gibt der selbsterhaltenden Neun etwas, das einer SE9 mit schwach ausgeprägtem Achterflügel oft fehlt: eine direkte, unverblümte Art, klare Kante, wenn es nötig ist. In Interviews wirkt Bär nicht diplomatisch-zurückhaltend, sondern warmherzig, aber auch bestimmt und offen – er sagt, was er denkt, ohne dabei aggressiv oder konfrontativ zu wirken.</p>
          <p class="vb-intro">Das unterscheidet die SE9w8 von der reinen, ungeflügelten Neun: Die Bequemlichkeit bleibt das Fundament, aber sie wird nicht zur Konfliktvermeidung um jeden Preis. Sein langjähriges Engagement als UNICEF-Botschafter zeigt dieselbe Mischung – kein lautstarker Aktivismus, sondern beständiges, verlässliches Eintreten für eine Sache, verbunden mit einer klaren, unmissverständlichen Haltung, wenn es um Kinderrechte geht.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Rolle: Ballauf als verlängerter Arm der eigenen Bodenständigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Max Ballauf ist im Kölner „Tatort" der emotionalere, direktere der beiden Ermittler – einer, der auch mal laut wird, der seine Meinung unumwunden sagt, der sich mit seinem Kollegen Schenk auf eine Weise reibt und versteht, die über die Jahrzehnte fast familiär wirkt. Diese Konstellation funktioniert im Fernsehen nur deshalb so glaubwürdig, weil sie nicht nur gespielt, sondern von zwei Schauspielern getragen wird, die sich seit Jahrzehnten tatsächlich verbunden sind.</p>
          <p class="vb-intro">Bär selbst hat wiederholt betont, dass ihm die reale Freundschaft mit seinem Schauspielkollegen wichtiger sei als jede einzelne Folge – eine Aussage, die genau ins SE9-Muster passt: Beständigkeit, Vertrautheit und die Pflege eines eingespielten, verlässlichen Umfelds wiegen schwerer als kurzfristige Anerkennung oder ein einzelner großer Erfolg.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Mensch hinter Ballauf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Abseits der Kamera engagiert sich Bär seit vielen Jahren als Botschafter für UNICEF Deutschland und setzt sich öffentlich für Kinderrechte ein – ein Engagement, das er nicht mit großer Geste, sondern mit stetiger Präsenz über Jahre hinweg pflegt. Er wird in Porträts und Interviews regelmäßig als humorvoll, gesellig und ausgesprochen genussorientiert beschrieben – jemand, der die kleinen, sinnlichen Freuden des Alltags bewusst zelebriert, statt sie als selbstverständlich hinzunehmen.</p>
          <p class="vb-intro">Auffällig ist zudem, wie konsequent Bär trotz jahrzehntelanger Prominenz eine private, weitgehend unaufgeregte Öffentlichkeitsrolle gepflegt hat – kaum Skandale, kaum Homestorys, kaum das Bedürfnis, sich über die eigentliche Arbeit hinaus zu inszenieren. Das ist die stille Konsequenz der selbsterhaltenden Neun: Der eigene Komfort und die eigene Ruhe sind ihr wichtiger als zusätzliche Sichtbarkeit.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Elefant, der bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Fast drei Jahrzehnte in derselben Rolle, in derselben Stadt, an der Seite desselben Kollegen – das ist im schnelllebigen Fernsehgeschäft eine seltene Konstante, und sie speist sich aus genau der Eigenschaft, die den Elefanten auszeichnet: Beständigkeit ist keine Einschränkung, sondern eine Kraftquelle. Der Achterflügel sorgt dafür, dass diese Beständigkeit nie zur Passivität wird, sondern von einer klaren, direkten Haltung getragen bleibt.</p>
          <p class="vb-intro">Sein Schauspielkollege und langjähriger Weggefährte ist <a href="javascript:void(0)" data-route="beruehmte-klaus-j-behrendt">Klaus J. Behrendt</a> (SE6w5), der im Kölner „Tatort" den ruhigeren, vorsichtigeren Kommissar Schenk verkörpert. Beide sind Selbsterhaltungs-Typen, beide meiden auf ihre eigene Art das Rampenlicht – Bär durch die Pflege des eigenen Komforts, Behrendt durch wachsame Zurückhaltung. Mehr zu dieser Verbindung im <a href="javascript:void(0)" data-route="beruehmte-klaus-j-behrendt">Porträt zu Klaus J. Behrendt</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-klaus-j-behrendt", label:"Porträt: Klaus J. Behrendt (SE6w5) – sein Tatort-Partner Schenk"},
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se9", label:"SE9 – Der Elefant: Subtyp-Profil"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8)"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Porträt: Hans-Dietrich Genscher (SE9w8)"},
      ])}
    </div>
  `);
}

export function eminemPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-eminem-portrait.jpg" alt="Eminem \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Eminem</p>
        <p class="krim-portrait-typ">SX1w2 &middot; Sexueller Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Rapper &amp; Songwriter, geb. 1972 &ndash; Marshall Bruce Mathers III, \u201eSlim Shady\u201c &ndash; Tierentsprechung: Schwarze Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> ist das Tier der sexuellen Eins &ndash; blitzschnell, pr\u00e4zise, kompromisslos, ohne Umweg zwischen Empfinden und Aussage. Marshall Bruce Mathers III, geboren am 17. Oktober 1972 in St. Joseph, Missouri, wuchs in st\u00e4ndig wechselnden Wohnverh\u00e4ltnissen zwischen Missouri und dem Detroiter Vorort Warren auf &ndash; mit einer alleinerziehenden Mutter, einem abwesenden Vater und einer Kindheit, die immer wieder von Umz\u00fcgen und Mobbing gepr\u00e4gt war. Mit siebzehn brach er die High School ab.</p>
          <p class="vb-intro">Bevor die Welt ihn kannte, k\u00e4mpfte er sich in den Battle-Rap-Kreisen von Detroit hoch, vor allem im legend\u00e4ren Hip-Hop Shop &ndash; einem Umfeld, in dem jede Schw\u00e4che sofort ausgenutzt wird und nur derjenige besteht, der schneller, h\u00e4rter und wahrer zuschl\u00e4gt als der Gegner. Genau dort, im direkten verbalen Duell, zeigt sich die Mamba am reinsten: Sie bei\u00dft nicht aus Bosheit, sondern weil sie nicht anders kann, wenn Unwahrheit oder Schw\u00e4che sichtbar werden.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Eifer als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> richtet ihren Vollkommenheitsanspruch nicht auf \u00e4u\u00dfere Ordnung, sondern auf Intensit\u00e4t: auf das vollst\u00e4ndige, ungesch\u00f6nte Zeigen dessen, was wahr ist &ndash; in einer Sache, einer Beziehung, einer Mission, mit voller Wucht statt allgemein verteilt. Naranjo nannte diesen Subtyp <em>Zeal</em> &ndash; Eifer, eine gesteigerte, kompromisslose Form von Emp\u00f6rung und Perfektionsanspruch, die sich mit missionarischer Kraft auf ein einziges Ziel konzentriert.</p>
          <p class="vb-intro">Kaum ein Rapper hat dieses Muster so konsequent in seiner Technik ausgelebt wie Eminem: eine schonungslose, oft w\u00fctende, hochpr\u00e4zise Reimtechnik, die keine halben S\u00e4tze duldet und jede Silbe auf Wirkung pr\u00fcft. 1997 fiel er beim Rap Olympics in Los Angeles Dr. Dre (SO2w3) auf, der ihn kurz darauf unter Vertrag nahm &ndash; nicht wegen einer gef\u00e4lligen Oberfl\u00e4che, sondern wegen einer Intensit\u00e4t, die sich nicht verstellen lie\u00df.</p>
          <p class="vb-intro">Seine Kompromisslosigkeit zeigt sich auch in der schonungslosen Wahrhaftigkeit, mit der er die eigenen Fehler in seinen Texten verarbeitet &ndash; Drogensucht, die gescheiterte Ehe mit Kim Scott, die schwierige Kindheit, der Konflikt mit der eigenen Mutter. Nichts wird besch\u00f6nigt, nichts weichgesp\u00fclt. Und dieselbe Intensit\u00e4t trieb ihn auch in seine Fehden: der \u00f6ffentliche Konflikt mit Boygroups und Kollegen der sp\u00e4ten 1990er, die Battle-Rap-Sch\u00e4rfe, die er nie ganz ablegte, selbst als er l\u00e4ngst zum gr\u00f6\u00dften Solok\u00fcnstler seines Genres geworden war.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: Der Vater hinter der Maske</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> gibt der sexuellen Eins eine zweite, \u00fcberraschend f\u00fcrsorgliche Note: das Bed\u00fcrfnis, f\u00fcr jemanden da zu sein, sich zu k\u00fcmmern, Verantwortung zu \u00fcbernehmen. Bei Eminem zeigt sich das am deutlichsten in seiner Rolle als alleinerziehender Vater seiner Tochter Hailie Jade, geboren 1995 &ndash; ein Thema, das in seinen Songs immer wieder auftaucht, von z\u00e4rtlichen Widmungen bis zu offenen Eingest\u00e4ndnissen eigener Unzul\u00e4nglichkeit als Vater.</p>
          <p class="vb-intro">Auch seine \u00f6ffentliche Verarbeitung der eigenen Drogenabh\u00e4ngigkeit tr\u00e4gt diese Zweier-Note: Nach einer schweren Medikamenten\u00fcberdosis im Jahr 2007 &ndash; er stand damals kurz vor dem Tod &ndash; ging er seit April 2008 den Weg der N\u00fcchternheit, absolvierte ein Zw\u00f6lf-Schritte-Programm und sprach seither wiederholt \u00f6ffentlich \u00fcber seine Sucht, unter anderem um anderen Betroffenen als Sponsor beizustehen. Das ist keine reine Selbstoffenbarung mehr, sondern ein Zur\u00fcckfinden zur Verantwortung f\u00fcr seine Familie &ndash; der Zweierfl\u00fcgel, der die H\u00e4rte der Mamba in F\u00fcrsorge \u00fcbersetzt.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Durchbruch: Slim Shady und die Marshall Mathers LP</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1999 ver\u00f6ffentlichte Eminem <em>The Slim Shady LP</em>, sein Durchbruchsalbum unter Dr. Dres neu gegr\u00fcndetem Label Aftermath Entertainment &ndash; ein Werk, das ihn mit einer aggressiven, oft schockierenden Kunstfigur bekannt machte, hinter der sich zugleich eine schonungslose Selbstanalyse verbarg. 2000 folgte <em>The Marshall Mathers LP</em>, das \u00fcber neunzehn Millionen Mal verkauft wurde, den Grammy f\u00fcr das beste Rap-Album gewann und bis heute als eines der einflussreichsten Alben der Genregeschichte gilt.</p>
          <p class="vb-intro">2003 gewann er mit \u201eLose Yourself\u201c aus dem Film <em>8 Mile</em> den Oscar f\u00fcr den besten Filmsong &ndash; als erster Hip-Hop-K\u00fcnstler \u00fcberhaupt. Es folgten weitere Grammys, insgesamt f\u00fcnfzehn im Laufe seiner Karriere, und mit den Alben <em>Relapse</em> (2009) und <em>Recovery</em> (2010) verarbeitete er erstmals n\u00fcchtern seinen eigenen Absturz und Wiederaufstieg &ndash; die Eins, die sich selbst am unerbittlichsten pr\u00fcft.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins hei\u00dft <strong>Zorn</strong> &ndash; und bei Eminem zeigte er sich lange nach beiden Seiten: nach au\u00dfen in Battle-Rap-Fehden und \u00f6ffentlichen Konflikten, nach innen in einer Sucht, die ihn 2007 beinahe das Leben kostete. Die sexuelle Eins ertr\u00e4gt keine Halbheiten, auch nicht im eigenen Umgang mit sich selbst &ndash; was diese Intensit\u00e4t zur St\u00e4rke macht, kann sich ungebremst auch gegen die eigene Gesundheit richten.</p>
          <p class="vb-intro">Der Zweierfl\u00fcgel bewahrte ihn davor, in dieser H\u00e4rte allein zu bleiben: Die Verantwortung f\u00fcr Hailie, die \u00f6ffentlich gemachte Verletzlichkeit rund um seine N\u00fcchternheit, die Rolle als Mentor f\u00fcr andere S\u00fcchtige &ndash; all das zeigt eine Mamba, die bei\u00dft, aber danach auch h\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Wahrhaftigkeit ohne Filter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Eminem der Popkultur gegeben hat, ist eine radikale Absage an die gegl\u00e4ttete Popstar-Fassade: dass Wut, Scham, Sucht und Vaterliebe im selben Song stehen d\u00fcrfen, ohne dass eines das andere widerlegt. Das ist das Geschenk der SX1w2 &ndash; die Weigerung, sich zu verstellen, kombiniert mit dem Bed\u00fcrfnis, f\u00fcr die Menschen da zu sein, die einem am wichtigsten sind.</p>
          <p class="vb-intro">Die Schwarze Mamba mit Zweierfl\u00fcgel bei\u00dft nicht, um zu verletzen &ndash; sie bei\u00dft, weil sie keine L\u00fcge ertr\u00e4gt, auch nicht die eigene, h\u00e4lt danach aber auch inne und sucht die N\u00e4he, die sie durch diese Ehrlichkeit erst m\u00f6glich macht.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx1", label:"SX1 \u2013 Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-robbie-williams", label:"Portr\u00e4t: Robbie Williams (SX1w2)"},
        {route:"beruehmte-dr-dre", label:"Portr\u00e4t: Dr. Dre (SO2w3) \u2013 sein Entdecker und Mentor"},
        {route:"beruehmte-martin-luther", label:"Portr\u00e4t: Martin Luther (SX1w2)"},
      ])}
    </div>
  `);
}

export function friedrichMerzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-merz-portrait.jpg" alt="Friedrich Merz" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Merz</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Sozialer Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Bundeskanzler &amp; Politiker, geb. 1955 &ndash; Tierentsprechung: Gans</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Gans</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist das Tier der sozialen Eins &ndash; und es ist ein Tier, das nicht dekoriert, sondern funktioniert. Keine Eleganz um der Eleganz willen. Keine Scheu vor Konflikten, wenn das Revier verteidigt werden muss. Die Gans fliegt in Formation, h\u00e4lt die Ordnung aufrecht und warnt die Gruppe, wenn etwas nicht stimmt. Wer sie untersch\u00e4tzt, erlebt eine \u00dcberraschung.</p>
          <p class="vb-intro">Der deutsche Politiker Friedrich Merz ist eine Erscheinung, die polarisiert &ndash; und das nicht zuf\u00e4llig. Er sagt, was er denkt. Er benennt, was er f\u00fcr falsch h\u00e4lt. Er hat keine Angst vor unbequemen Positionen. Das ist kein Stilmittel &ndash; das ist Struktur. Die Gans weicht nicht aus, wenn sie \u00fcberzeugt ist, das Richtige zu tun.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Ordnung als Berufung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> ist der Subtyp, der seinen Perfektionismus nach au\u00dfen richtet &ndash; auf Gesellschaft, Institutionen, kollektive Werte. Nicht das eigene Leben steht im Mittelpunkt, sondern die Frage: Wie m\u00fcsste die Welt beschaffen sein, damit sie gerecht und geordnet funktioniert? Die SO1 tr\u00e4gt ein inneres Regelwerk, das sie auf alles anwendet &ndash; auf Gesetze, auf Haushaltspolitik, auf das Verhalten anderer Politiker.</p>
          <p class="vb-intro">Naranjo nannte diesen Subtyp <em>Inadaptability</em> &ndash; Unnachgiebigkeit gegen\u00fcber dem, was abweicht. Die SO1 hat Schwierigkeiten damit, Kompromisse mit dem zu machen, was sie f\u00fcr strukturell falsch h\u00e4lt. Das macht sie zur konsequentesten Reformerin unter den Einser-Subtypen &ndash; und zur unbequemsten Gespr\u00e4chspartnerin.</p>
          <p class="vb-intro">Friedrich Merz verk\u00f6rpert diese Energie ungefiltert. Als Jurist, als Wirtschaftspolitiker, als CDU-Vorsitzender und jetzt als Bundeskanzler: Ihm geht es immer um das Prinzip. Um Haushaltsdisziplin als moralische Frage. Um die Grenze als rechtliche Pflicht. Um den Staat als Ordnungsrahmen, der gehalten werden muss. Das ist keine Ideologie. Das ist der Blick der sozialen Eins auf die Welt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Ruhe im Inneren, Klarheit nach au\u00dfen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> ver\u00e4ndert die soziale Eins auf subtile, aber entscheidende Weise. Eine SO1 mit schwach ausgeprägtem Neunerflügel kann hitzig, anklagend, moralisierend wirken – der Zorn liegt nah an der Oberfläche. Ein stark ausgeprägter Neunerflügel kühlt diese Energie ab. Er bringt eine gewisse Gelassenheit, eine F\u00e4higkeit zur Ruhe, die die Botschaft der Eins stabiler und weniger angreifbar macht.</p>
          <p class="vb-intro">Der Neunerfl\u00fcgel f\u00fcgt auch eine Qualit\u00e4t hinzu, die man bei Merz h\u00e4ufig beobachtet: die F\u00e4higkeit, lange zu warten. Die Neun ist geduldig &ndash; fast zu geduldig manchmal. Merz hat jahrelang auf seine politische Stunde gewartet, nach der \u00c4ra Merkel im Hintergrund gearbeitet, sich nicht verbiegen lassen. Das ist nicht die Energie eines Einser-K\u00e4mpfers mit schwach ausgepr\u00e4gtem Neunerfl\u00fcgel. Das ist die geduldige Beharrlichkeit der SO1w9er.</p>
          <p class="vb-intro">Gleichzeitig kann der Neunerfl\u00fcgel die Schattenseiten der Neun einbringen: Sturheit, Abschottung gegen abweichende Perspektiven, eine Tendenz, den inneren Widerstand nach au\u00dfen zu verschweigen &ndash; bis er sich pl\u00f6tzlich entl\u00e4dt. Wer Friedrich Merz kennt, erkennt auch das.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO1 ist ihre Integrit\u00e4t. Friedrich Merz ist ein Politiker, dem man abnimmt, dass er wirklich von dem \u00fcberzeugt ist, was er sagt. Ob man seiner Meinung ist oder nicht &ndash; die Haltung wirkt echt. Das ist in einer Zeit zunehmend strategischer Kommunikation ein seltenes Gut.</p>
          <p class="vb-intro">Der Schatten der SO1 ist der <strong>Zorn</strong> &ndash; und die \u00dcberzeugung, das Richtige zu wissen. Die soziale Eins neigt dazu, moralische \u00dcberlegenheit mit faktischer \u00dcberlegenheit zu verwechseln. Sie sieht klar, wie die Dinge sein sollten &ndash; und verliert dabei manchmal den Blick daf\u00fcr, dass andere Perspektiven ebenfalls ihre Berechtigung haben. Das Schicksalsmuster der Eins ist nicht B\u00f6swilligkeit. Es ist Verblendung durch Gewissheit.</p>
          <p class="vb-intro">Bei Merz zeigt sich das in Momenten, in denen pointierte Aussagen mehr Schaden angerichtet haben als geplant &ndash; nicht weil sie gelogen waren, sondern weil sie das Prinzip \u00fcber den Kontext stellten. Die Gans warnt laut. Manchmal zu laut f\u00fcr den Moment.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Richter zum Baumeister</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Richten zum Bauen. Von der Frage <em>Was ist falsch?</em> zur Frage <em>Was ist m\u00f6glich?</em> Die wachsende Eins beh\u00e4lt ihre Ma\u00dfst\u00e4be &ndash; aber sie lernt, dass Ordnung nicht durch Kontrolle entsteht, sondern durch Vertrauen. Dass das Gute nicht nur in der Korrektur liegt, sondern auch im Zulassen.</p>
          <p class="vb-intro">Friedrich Merz hat als Bundeskanzler eine B\u00fchne, die der SO1w9er selten bekommt: Gestaltungsmacht. Die Frage ist, ob die Energie der sozialen Eins sich vom Diagnostizieren zum Erschaffen verschiebt. Ob die Gans, die jahrzehntelang gewarnt hat, jetzt auch bauen kann. Das w\u00e4re der Weg &ndash; vom strengen W\u00e4chter zum stillen Architekten einer Ordnung, die tr\u00e4gt.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so1", label:"SO1 \u2013 Die Gans: Subtyp-Profil"},
        {route:"beruehmte-angelina-jolie", label:"Portr\u00e4t: Angelina Jolie (SO1w2)"},
        {route:"beruehmte-marcel-reich-ranicki", label:"Portr\u00e4t: Marcel Reich-Ranicki (SO1w9)"},
      ])}
    </div>
  `);
}

export function gretaGarboPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-greta-garbo-portrait.jpg" alt="Greta Garbo" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Greta Garbo</p>
        <p class="krim-portrait-typ">SX5w4 &middot; Sexueller Typ 5 mit Viererfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, 1905&ndash;1990 &ndash; Hollywood-Ikone des Stummfilms und fr\u00fchen Tonfilms &ndash; Tierentsprechung: Igel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Igel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Igel</strong> ist das Tier der sexuellen F\u00fcnf &ndash; stachelig und unnahbar nach au\u00dfen, von einer W\u00e4rme durchdrungen, die sich nur den ganz Wenigen zeigt, die nah genug herankommen. Kaum eine Hollywood-Figur verk\u00f6rpert dieses Bild so vollst\u00e4ndig wie Greta Garbo. Auf der Leinwand strahlte sie eine Intensit\u00e4t aus, die ganze Kinos\u00e4le verstummen lie\u00df &ndash; im wirklichen Leben zog sie sich mit 36 Jahren, auf dem H\u00f6hepunkt ihres Ruhms, vollst\u00e4ndig aus der \u00d6ffentlichkeit zur\u00fcck und blieb es fast f\u00fcnfzig Jahre lang, bis zu ihrem Tod 1990.</p>
          <p class="vb-intro">Die schwedische Schauspielerin Greta Lovisa Gustafsson, geboren 1905 in Stockholm, wuchs in \u00e4rmlichen Verh\u00e4ltnissen auf, wurde vom schwedischen Regisseur Mauritz Stiller entdeckt und ging mit ihm nach Hollywood. Innerhalb weniger Jahre wurde sie zum gr\u00f6\u00dften weiblichen Filmstar ihrer Zeit &ndash; und zu einer der konsequentesten Einsiedlerinnen der Filmgeschichte. Kein Widerspruch, sondern die beiden Seiten derselben F\u00fcnf: das restlose Eintauchen in die eine, intensive Begegnung vor der Kamera und der ebenso radikale R\u00fcckzug davor und danach.</p>
        </blockquote>

        <h2 class="vb-section">2. \u201eI want to be let alone\u201c &ndash; nicht allein, sondern in Ruhe gelassen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kein Satz ist enger mit Greta Garbo verkn\u00fcpft als das ihr zugeschriebene \u201eIch m\u00f6chte allein sein\u201c. Sie selbst hat dieser Version widersprochen &ndash; und die Korrektur ist der eigentliche Schl\u00fcssel zu ihrem Typus: <em>\u201eI never said, \u201aI want to be alone.\u2018 I only said, \u201aI want to be let alone.\u2018 There is all the difference.\u201c</em> (\u201eIch habe nie gesagt: \u201aIch will allein sein.\u2018 Ich sagte nur: \u201aIch will in Ruhe gelassen werden.\u2018 Das ist ein himmelweiter Unterschied.\u201c)</p>
          <p class="vb-intro">Das ist keine Nuance, sondern die gesamte Grundstrategie der F\u00fcnf in einem Satz: Es geht nicht um Isolation als Selbstzweck, sondern um den Schutz begrenzter innerer Ressourcen vor einer Welt, die grenzenlos viel davon einfordert. Die F\u00fcnf zieht sich nicht zur\u00fcck, weil sie Menschen ablehnt &ndash; sie zieht sich zur\u00fcck, um \u00fcberhaupt noch etwas von sich zu haben, das sie den wenigen Menschen geben kann, die ihr wirklich etwas bedeuten. Garbos Pr\u00e4zisierung ist damit fast ein enneagrammatisches Lehrst\u00fcck: der Unterschied zwischen R\u00fcckzug aus Ersch\u00f6pfung und R\u00fcckzug aus Ablehnung.</p>
        </blockquote>

        <h2 class="vb-section">3. Die sexuelle F\u00fcnf: Intensit\u00e4t statt Distanz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle F\u00fcnf (SX5)</strong> unterscheidet sich grundlegend von der k\u00fchlen, auf Sicherheit bedachten selbsterhaltenden F\u00fcnf. Sie tr\u00e4gt eine fast vulkanische Sehnsucht nach absoluter Verbindung in sich &ndash; gepaart mit einer ebenso starken Angst vor Verletzlichkeit. Naranjo beschreibt diesen Subtyp als \u201eVertrauen\u201c oder \u201eTransparenz\u201c: Die SX5 \u00f6ffnet sich, aber nur dort, wo sie sich restlos sicher f\u00fchlt &ndash; und dann mit einer Intensit\u00e4t, die alle anderen F\u00fcnfer-Subtypen \u00fcbertrifft.</p>
          <p class="vb-intro">Genau diese Qualit\u00e4t war Garbos Markenzeichen als Schauspielerin: die ber\u00fchmte Nahaufnahme, in der ihr Blick eine fast hypnotische, zutiefst private Vertrautheit erzeugte &ndash; als spr\u00e4che sie nur mit einer einzigen Person im ganzen Saal. Zeitgenossen und Filmhistoriker beschrieben genau dieses Paradox: \u00e4u\u00dferlich unnahbar und r\u00e4tselhaft, im Moment der Begegnung von einer verzehrenden, kompromisslosen Pr\u00e4senz. Kein Zufall, dass ihre gr\u00f6\u00dften Rollen &ndash; Mata Hari, Anna Karenina, Kameliendame &ndash; Frauen zeigten, die sich der Welt verweigerten, aber f\u00fcr die eine gro\u00dfe, absolute Liebe alles opferten.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Viererfl\u00fcgel: Melancholie als Ausdrucksform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererfl\u00fcgel (w4)</strong> gab Garbos F\u00fcnfer-Kern jene melancholische, \u00e4sthetische Tiefe, f\u00fcr die sie nach wie vor gefeiert wird. Anders als eine 5w6, die eher analytisch-strukturiert wirkt, verwandelte Garbo existenziellen Schmerz in Kunst &ndash; nicht durch dramatische Zurschaustellung, sondern durch eine stille, fast schwerm\u00fctige Intensit\u00e4t, die durch die Kamera hindurch direkt beim Publikum ankam. Als der Tonfilm viele Stummfilmstars scheitern lie\u00df, faszinierte Garbos rauchige, tiefe Stimme und ihr bedeutungsschweres Schweigen die Menschen nur noch mehr.</p>
          <p class="vb-intro">Diese Kombination erkl\u00e4rt, warum sie in der \u00f6ffentlichen Wahrnehmung oft f\u00e4lschlich als Typ 4 gelesen wurde: Dramatik, Sch\u00f6nheit, Weltschmerz. Doch das Fundament ihres Verhaltens spricht f\u00fcr die F\u00fcnf: Nicht das Verlangen der Vier, endlich verstanden zu werden, sondern die Schutzstrategie der F\u00fcnf, die eigene Energie so sorgf\u00e4ltig zu rationieren, dass sie erhalten bleibt &ndash; verst\u00e4rkt und veredelt durch die \u00e4sthetische Tiefe des Viererfl\u00fcgels.</p>
        </blockquote>

        <h2 class="vb-section">5. Der R\u00fcckzug: Schutz der Intensit\u00e4t, nicht Flucht vor ihr</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1941, nach dem kommerziellen Misserfolg des Films <em>Die Frau mit den zwei Gesichtern</em>, zog sich Garbo aus dem Filmgesch\u00e4ft zur\u00fcck &ndash; und kam nie wieder zur\u00fcck, obwohl ihr \u00fcber die folgenden Jahrzehnte immer wieder Rollen angeboten wurden. Sie lebte fortan zur\u00fcckgezogen in New York, unternahm getarnt mit Sonnenbrille und Hut lange, einsame Spazierg\u00e4nge durch die Stadt, mied Partys, Smalltalk und die Hollywood-\u00d6ffentlichkeit fast vollst\u00e4ndig &ndash; klassisches Verhalten der F\u00fcnf: die Welt beobachten, ohne selbst beobachtet zu werden.</p>
          <p class="vb-intro">Doch eine SX5 zieht sich nicht zur\u00fcck, weil sie N\u00e4he ablehnt. \u00dcber Jahrzehnte hinweg unterhielt Garbo hochintensive, fast geheime Verbindungen zu einer kleinen Zahl ausgew\u00e4hlter Menschen &ndash; etwa zur Dichterin Mercedes de Acosta oder zu ihrem fr\u00fchen Mentor und Weggef\u00e4hrten Mauritz Stiller. Kein Widerspruch zum R\u00fcckzug, sondern dessen eigentlicher Sinn: Die kommerzielle, \u00f6ffentliche Welt entweihte f\u00fcr sie das Private und Heilige. Der R\u00fcckzug sch\u00fctzte nicht die Abwesenheit von Gef\u00fchl, sondern seine Reinheit.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten der sexuellen F\u00fcnf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX5w4 ist ihre F\u00e4higkeit, in der einen Begegnung &ndash; ob mit einem Menschen oder, wie bei Garbo, mit einer Filmkamera und einem Millionenpublikum &ndash; eine Tiefe und Wahrhaftigkeit zu erzeugen, die keine Distanz zul\u00e4sst. Genau das machte Garbo zur Legende: Man empfand ihre Pr\u00e4senz als absolut echt, obwohl sie selbst so gut wie nichts von sich preisgab.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Konsequenz, mit der die F\u00fcnf den Stecker zieht, sobald sie sich ausgenutzt oder blo\u00dfgestellt f\u00fchlt: Garbos R\u00fcckzug 1941 war endg\u00fcltig, kompromisslos, ohne Interviews, ohne Erkl\u00e4rungen, ohne ein einziges Wort zu viel. Kein Z\u00f6gern, kein halber Ausstieg &ndash; die typische Radikalit\u00e4t der F\u00fcnf, die lieber ganz verschwindet, als die eigene Energie weiter unkontrolliert abflie\u00dfen zu lassen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx5", label:"SX5 \u2013 Der Igel: Subtyp-Profil"},
        {route:"beruehmte-frederic-chopin", label:"Portr\u00e4t: Fr\u00e9d\u00e9ric Chopin (SX5w4)"},
        {route:"beruehmte-tilda-swinton", label:"Portr\u00e4t: Tilda Swinton (SX5w4)"},
        {route:"beruehmte-andy-warhol", label:"Portr\u00e4t: Andy Warhol (SX5w4)"},
      ])}
    </div>
  `);
}

export function hermannHessePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hermann-hesse-portrait.jpg" alt="Hermann Hesse" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hermann Hesse</p>
        <p class="krim-portrait-typ">SE5w6 &middot; Selbsterhaltender Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Schriftsteller, Nobelpreisträger, 1877&ndash;1962 &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule im Tessiner Garten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier des Typs 5 &ndash; ein Wesen, das sich zurückzieht, um klar zu sehen, das seinen Lebensraum eng hält und darin bis in die letzte Ecke vertraut ist. Kaum ein Schriftsteller hat diese Rückzugslogik so konsequent gelebt wie Hermann Hesse: 1919, mitten in der Nachkriegskrise, verließ er Deutschland und trennte sich von seiner ersten Ehefrau Maria Bernoulli und den drei gemeinsamen Söhnen, um allein nach Montagnola im Tessin zu ziehen, in ein kleines Haus namens Casa Camuzzi. Dort lebte er die folgenden vierzig Jahre &ndash; zurückgezogen, mit Garten, Aquarellfarben und einem streng gehüteten Tagesablauf, den kaum jemand von außen durchbrechen durfte.</p>
          <p class="vb-intro">Der deutsch-schweizerische Schriftsteller Hermann Hesse wurde 1877 in Calw geboren, als Sohn eines Missionars in einem streng pietistischen Elternhaus, das ihm früh das Gefühl vermittelte, anders zu sein als von ihm erwartet. Mit fünfzehn brach er aus dem Klosterseminar Maulbronn aus, erlitt eine schwere Krise und wurde zeitweise in eine Nervenheilanstalt eingewiesen. Diese frühe Erfahrung, dass die Welt der Institutionen und Erwartungen nicht sein Ort war, prägte eine lebenslange Bewegung nach innen &ndash; weg von Gemeinschaften, hin zu einem selbst gebauten, genau kontrollierten inneren Raum.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Fünf: Die Burg im Tessin</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Fünf (SE5)</strong> nennt Naranjo <em>Burg</em>: Das eigene Territorium wird zur Festung, die den Zugriff der Welt so weit wie möglich beschränkt. Hesses Leben in Montagnola folgte genau diesem Muster. Er baute sich einen streng geregelten Tagesrhythmus aus Schreiben, Gärtnern und Malen, empfing Besucher nur nach vorheriger Absprache und zog sich, wenn die Kräfte nicht reichten, wochenlang völlig zurück. Zeitschriften, Manuskripte und Briefe stapelten sich in seinem Arbeitszimmer &ndash; ein Territorium, in dem jedes Ding seinen Platz hatte und das er niemandem überließ.</p>
          <p class="vb-intro">Gleichzeitig unterhielt Hesse einen der umfangreichsten Briefwechsel der deutschen Literaturgeschichte &ndash; über 35.000 Briefe sind überliefert. Das ist die typische Lösung der SE5 für das Näheproblem: Kontakt findet statt, aber gefiltert, auf Distanz, in der eigenen Zeit und im eigenen Tempo. Der Brief erlaubt Verbindung, ohne die Burg öffnen zu müssen. Nach seinem Nervenzusammenbruch 1916 unterzog er sich zudem einer Psychoanalyse bei einem Schüler C. G. Jungs, Josef Bernhard Lang &ndash; auch das eine sehr fünferhafte Strategie: die eigene innere Unordnung nicht in Beziehungen, sondern in einem klar umrissenen, therapeutischen Rahmen zu untersuchen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Die wache Sorge um die Welt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der selbsterhaltenden Fünf eine wache, oft ängstliche Aufmerksamkeit für Bedrohungen &ndash; und ein waches Misstrauen gegenüber jeder Form von Massenbewegung. Als 1914 der Erste Weltkrieg ausbrach, äußerte sich Hesse in dem Essay "O Freunde, nicht diese Töne!" scharf gegen den grassierenden Kriegsjubel unter deutschen Intellektuellen &ndash; eine Position, die ihm in der Heimat den Ruf des Vaterlandsverräters einbrachte und ihn endgültig zum Außenseiter machte. Er zog sich daraufhin noch weiter zurück, half zwar praktisch bei der Betreuung deutscher Kriegsgefangener in der Schweiz, mied aber jede politische Vereinnahmung.</p>
          <p class="vb-intro">Dieselbe wache Vorsicht zeigte sich in den 1930er-Jahren: Aus sicherer Schweizer Distanz beobachtete Hesse den Aufstieg des Nationalsozialismus mit wachsender Beunruhigung, unterstützte verfolgte und emigrierte Kollegen wie Thomas Mann und Peter Weiss mit Briefen, Rezensionen und Kontakten &ndash; blieb aber selbst im geschützten Rückzugsort. Der Sechserflügel sorgt sich um die Welt, ohne sich ihr auszusetzen: Wachsamkeit als Schutzhaltung, nicht als Aufruf zum Handeln. Als Verstärkungstyp der Fünf treibt die selbsterhaltende Fünf ihre Wissens- und Erkenntnissuche nicht gemäßigt, sondern intensiviert aus &ndash; bei Hesse äußerte sich das in einer lebenslangen, fast obsessiven Beschäftigung mit östlicher Philosophie, Psychoanalyse und der eigenen inneren Entwicklung, die er in immer neuen Anläufen literarisch verarbeitete.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Der Einzelne zwischen zwei Welten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hesses zentrales literarisches Thema ist genau das Grunddilemma der SE5: der Konflikt zwischen dem Rückzug in die eigene innere Welt und der Sehnsucht, dennoch Teil von etwas Größerem zu sein. In "Siddhartha" (1922) sucht ein Einzelner abseits aller Lehrmeinungen und Gemeinschaften seinen eigenen Weg zur Erkenntnis. In "Der Steppenwolf" (1927) zerreißt sich ein Mann zwischen bürgerlicher Sehnsucht nach Zugehörigkeit und der Gewissheit, für die Gesellschaft nicht gemacht zu sein &ndash; ein Bild, in dem sich Generationen von Außenseitern wiedererkannten.</p>
          <p class="vb-intro">"Das Glasperlenspiel" (1943), sein letztes großes Werk, verlegt diesen Konflikt in eine ferne Zukunft: eine Gelehrtenprovinz, völlig von der Welt abgeschottet, in der reines Wissen zum Selbstzweck wird &ndash; bis der Protagonist erkennt, dass auch diese vollkommene Burg der Wirklichkeit standhalten muss. 1946 erhielt Hesse für dieses Werk den Nobelpreis für Literatur, den er, seiner Rückzugslogik treu, nicht persönlich in Stockholm entgegennahm.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE5w6 zeigt sich in der Klarheit und Redlichkeit von Hesses Selbstbeobachtung: Kaum ein Schriftsteller hat die innere Zerrissenheit des modernen Menschen so genau und ohne Beschönigung beschrieben. Seine Bücher wurden gerade deshalb zu Kultwerken ganzer Generationen &ndash; von der deutschen Jugendbewegung der 1920er bis zur amerikanischen Gegenkultur der 1960er &ndash;, weil sie dem Gefühl des Nicht-Dazugehörens eine Sprache gaben, ohne es zu verklären.</p>
          <p class="vb-intro">Der Schatten liegt im Preis dieses Rückzugs: Hesses erste Ehe mit Maria Bernoulli zerbrach unter anderem an seiner Unfähigkeit, dauerhafte Nähe auszuhalten; seine Beziehung zu seinen drei Söhnen blieb zeitlebens distanziert. Migräneanfälle, Augenleiden und wiederkehrende depressive Krisen begleiteten ihn durch sein ganzes Leben &ndash; die Burg schützte ihn vor der Welt, aber sie konnte die eigene innere Unruhe nicht auflösen, sondern nur einen Rahmen geben, in dem er sie literarisch bearbeiten konnte.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Eule, die bis zuletzt im Garten blieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Auch im Alter änderte Hesse sein Leben kaum: Er blieb in Montagnola, pflegte seinen Garten, malte Aquarelle der Tessiner Landschaft und schrieb weiterhin Briefe an Leser aus aller Welt, die in seinen Büchern etwas von sich selbst wiedererkannt hatten. Am 9. August 1962 starb er dort im Schlaf, im Alter von 85 Jahren &ndash; an dem Ort, den er sich selbst als sicheren Rückzugsraum gebaut hatte, und den er, anders als Descartes am Ende seines Lebens, nie mehr verließ.</p>
          <p class="vb-intro">Was blieb, ist ein Werk, das Millionen Menschen begleitet hat, die sich selbst als Außenseiter empfanden &ndash; und das zeigt, dass aus dem radikalen Rückzug der Eule nicht nur Isolation, sondern auch eine Sprache für das entstehen kann, was Gemeinschaft allein nicht auszudrücken vermag: der Weg des Einzelnen zu sich selbst.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se5", label:"SE5 – Die Eule: Subtyp-Profil"},
        {route:"beruehmte-rene-descartes", label:"Porträt: René Descartes (SE5w6)"},
        {route:"beruehmte-spinoza", label:"Porträt: Baruch de Spinoza (SE5w6)"},
        {route:"beruhmte-philosophen", label:"Schaubild: Berühmte Philosophen im Enneagramm"},
        {route:"krankheitsportraets-hermann-hesse", label:"Krankheitsporträt: Hermann Hesse (SE5w6) – Migräne und Depression"},
      ])}
    </div>
  `);
}

export function jacquelineMarsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jacqueline-mars-portrait.jpg" alt="Jacqueline Mars – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jacqueline Mars</p>
        <p class="krim-portrait-typ">SE8w7 &middot; Selbsterhaltender Typ 8 mit Siebenerfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Unternehmerin &amp; Milliard\xe4rin, geb. 1939 in Newark, New Jersey</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Orang-Utan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Orang-Utan</strong> ist das Tier des selbsterhaltenden Typs 8 &ndash; und kein Bild trifft Jacqueline Mars genauer. Der Orang-Utan ist der solit\u00e4rste der Menschenaffen: Er braucht kein Rudel, keine B\u00fchne, keine Best\u00e4tigung. Er lebt in seinem eigenen Rhythmus, auf seinem eigenen Territorium, umgeben von dem, was er \u00fcber Jahrzehnte angesammelt hat. Wer ihn nicht st\u00f6rt, bekommt ihn nie zu Gesicht. Und das ist genau so beabsichtigt.</p>
          <p class="vb-intro">Die US-amerikanische Unternehmerin Jacqueline Mars, 1939 in Newark geboren, ist Enkelin von Frank C. Mars, dem Gr\u00fcnder des gleichnamigen S\u00fc\u00dfwarenkonzerns, und Tochter von Forrest Mars Sr., der das Unternehmen zur Weltgr\u00f6\u00dfe ausbaute. Sie besitzt gemeinsam mit ihren Br\u00fcdern John und Forrest jr. zu etwa je einem Drittel Mars, Incorporated &ndash; eines der gr\u00f6\u00dften Privatunternehmen der Welt. Ihr Verm\u00f6gen wird auf \u00fcber 30 Milliarden Dollar gesch\u00e4tzt. \u00d6ffentliche Interviews gibt sie seit Jahrzehnten so gut wie keine.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Acht: Satisfaktion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Acht (SE8)</strong> dr\xfcckt die Leidenschaft der Acht &ndash; die <em>Wollust</em> &ndash; durch Besitz, Ressourcensicherung und sinnliche F\u00fclle aus. Naranjo nannte diesen Subtyp <em>Satisfacci\xf3n</em>: Befriedigung als Lebensprinzip. Die SE8 will haben, was sie braucht &ndash; und sie baut sich die Strukturen, die daf\xfcr sorgen, dass sie es auch hat. Nicht morgen. Dauerhaft.</p>
          <p class="vb-intro">Jacqueline Mars lebte dieses Prinzip mit einer Konsequenz, die man von au\xdfen fast nicht wahrnimmt &ndash; weil sie es so erf\xfcllt hat, dass kein Drama mehr n\xf6tig ist. Das Unternehmen l\xe4uft. Das Territorium ist gesichert. Die SE8 braucht keine Kameras, um zu kontrollieren; sie braucht Strukturen, die funktionieren. Mars, Incorporated ist seit Generationen in Familienbesitz und b\xf6rsennotiert war das Unternehmen nie &ndash; das ist keine Laune, das ist eine SE8-Entscheidung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\xfcgel: Die Lust am Leben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\xfcgel</strong> verleiht der selbsterhaltenden Acht eine Qualität, die eine SE8 mit schwach ausgeprägtem Siebenerflügel nicht immer zeigt: Leichtigkeit, Neugier und die Bereitschaft, das Leben vollst\u00e4ndig zu genie\u00dfen. Die SE8w7 sammelt nicht nur &ndash; sie kostet aus. Reisen, Genuss, Abwechslung, der Appetit auf das Sinnliche in seiner ganzen Breite: Das ist der Siebenerfl\u00fcgel, der das Territorium der Acht mit Farben f\u00fcllt.</p>
          <p class="vb-intro">Jacqueline Mars ist passionierte Reiterin und lebt auf einem Anwesen in The Plains, Virginia &ndash; dem Herzst\u00fcck der amerikanischen Pferdezuchtregion. Die Pferdewelt ist eine Welt f\u00fcr sich: traditionsbewusst, exklusiv, weit ab vom Scheinwerferlicht. Sie engagierte sich jahrelang im Smithsonian Institution Board of Regents &ndash; auch dort: Kennerschaft statt Selbstdarstellung. Der Siebenerfl\u00fcgel sucht nicht die B\u00fchne; er sucht die Qualit\u00e4t.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Das Mars-Imperium</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mars, Incorporated ist das weltgr\u00f6\u00dfte S\u00fc\u00dfwarenunternehmen und einer der bedeutendsten Tierfutterproduzenten der Welt: M&amp;M's, Snickers, Twix, Milky Way, Skittles, Pedigree, Whiskas. Umsatz: \u00fcber 45 Milliarden Dollar j\xe4hrlich. Das Unternehmen blieb seit seiner Gr\u00fcndung 1911 vollst\u00e4ndig in Familienbesitz &ndash; keine Aktien, keine Analysten, keine Quartalsberichte f\xfcr die \xd6ffentlichkeit. Privatheit als Gesch\xe4ftsprinzip.</p>
          <p class="vb-intro">Jacqueline Mars sa\xdf im Aufsichtsrat des Unternehmens und war an zentralen strategischen Entscheidungen beteiligt, auch wenn ihr Bruder Forrest jr. lange die operative F\xfchrung \xfcbernahm. Ihr Einfluss war real &ndash; und diskret. Das ist keine Bescheidenheit; das ist die SE8w7 in ihrer reifen Form: Macht aus\xfcben, ohne sich daf\xfcr legitimieren zu m\xfcssen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Macht ohne Gesicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE8w7 ist ihre <strong>souver\xe4ne Unabh\xe4ngigkeit</strong>. Jacqueline Mars braucht weder Applaus noch Rechtfertigung. Sie besitzt eines der gr\u00f6\u00dften Privatverm\u00f6gen der Welt &ndash; und lebt ein Leben, das sie selbst gestaltet: Pferde, Natur, Kennerschaft, stille Einflussnahme. Die SE8w7 in ihrer besten Form ist nicht laut; sie ist vollst\u00e4ndig.</p>
          <p class="vb-intro">Der Schatten: Die Unsichtbarkeit, die die SE8 sch\u00fctzt, macht sie auch unkontrollierbar &ndash; im Guten wie im Schlechten. Was ein Unternehmen dieser Gr\xf6\xdfe bewegt, bleibt weitgehend im Verborgenen: Lieferketten, Arbeitsbedingungen, politischer Einfluss. Wer nie \u00f6ffentlich Rechenschaft ablegt, muss das auch nie. Das ist die Kehrseite der SE8-Strategie: Das Territorium ist gesichert &ndash; aber niemand wei\xdf genau, wie.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Orang-Utan, der nie gesehen werden muss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jacqueline Mars ist eine der reichsten Frauen der Welt &ndash; und eine der unbekanntesten. Das ist keine F\u00fcgung und keine Sch\u00fcchternheit. Das ist die SE8w7 in vollendeter Form: das Territorium gesichert, die Ressourcen gesichert, das Leben in vollen Z\xfcgen genossen &ndash; und das alles ohne eine einzige Pressekonferenz. Der Orang-Utan braucht keine Zuschauer. Er thront in seinem Baum, weit \u00fcber dem L\xe4rm der Welt, und wei\xdf genau, was er hat.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-umberto-eco", label:"Portr\xe4t: Umberto Eco (SE8w7)"},
          {route:"beruehmte-golda-meir", label:"Portr\xe4t: Golda Meir (SE8w9)"},
          {route:"beruehmte-toni-morrison", label:"Portr\xe4t: Toni Morrison (SE8w9)"},
        ])}
      </div>
    </div>
  `);
}

export function jjLiuPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jj-liu-portrait.jpg" alt="J. J. Liu – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">J. J. Liu</p>
        <p class="krim-portrait-typ">SE2w1 &middot; Selbsterhaltender Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Profi-Pokerspielerin, geb. 1965 in Taipeh, Taiwan &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Tier, das nicht durch Tempo oder Lautstärke beeindruckt, sondern durch die schiere Ausdauer, mit der es an seinem Platz bleibt, auch wenn die Umstände unangenehm werden. Es zieht sich nicht zurück, sobald es unbequem wird. Es bleibt, weil Bleiben seine Stärke ist.</p>
          <p class="vb-intro">J. J. Liu bewies diese Ausdauer 2007 beim WPT Bay 101 Shooting Star Championship auf eindrückliche Weise: Sie spielte stundenlang unter erheblichen körperlichen Schmerzen bis zum Ende des damals längsten TV-Finaltischs der WPT-Geschichte &ndash; und erreichte mit Platz zwei die bis dahin beste Platzierung, die je eine Frau bei einem WPT-Championship-Event erzielt hatte. Das Flusspferd verlässt sein Wasser nicht, wenn es schwierig wird. Es bleibt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Sicherung der eigenen Position</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> richtet ihre Energie zuerst auf die eigene, konkrete Existenzsicherung, bevor sie sich nach außen wendet. Naranjo nannte diesen Subtyp <em>Me First</em>: nicht aus Egoismus, sondern weil die SE2 erst eine tragfähige eigene Basis braucht, um langfristig bestehen zu können.</p>
          <p class="vb-intro">Liu vollzog 2004 einen radikalen Schnitt: Nach Jahren als erfolgreiche Teilzeitspielerin gab sie ihre gesicherte Karriere als Softwareingenieurin im Silicon Valley vollständig auf, um sich dem Pokersport zu widmen &ndash; ein Schritt, der erst nach jahrelanger, sorgfältiger Prüfung der eigenen Fähigkeiten erfolgte, nicht aus spontanem Enthusiasmus. Diese besonnene, aber konsequente Absicherung der eigenen Existenzgrundlage, bevor der große Schritt gewagt wird, ist der Kern der SE2-Bewegung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Strategie als innere Ordnung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der selbsterhaltenden Zwei ein inneres Regelwerk, ein System, an dem sie sich unabhängig vom unmittelbaren Ergebnis orientieren kann. Er verwandelt Intuition in Methode und macht aus Fürsorge für die eigene Position eine diszipliniert verfolgte Strategie.</p>
          <p class="vb-intro">Liu selbst führt ihren analytischen Erfolg am Pokertisch auf die bewusste Anwendung strategischer Prinzipien aus Sun Tzus <em>Die Kunst des Krieges</em> zurück &ndash; ein philosophisches, in sich geschlossenes Regelwerk, das sie auf ihr Spiel überträgt. Auch ihr Weg vom Ingenieursberuf zum Pokerprofi zeigt diese Denkweise: Sie erkannte früh, dass ihr logischer und mathematischer Verstand ihr am Tisch einen strukturellen Vorteil verschaffen konnte, und baute darauf systematisch auf, statt auf Glück oder Instinkt allein zu vertrauen.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Taipeh ins Silicon Valley zum Final Table</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Liu zog aus Taiwan in die USA, um an der Bradley University in Illinois einen Master-Abschluss in Computertechnik zu erwerben, und arbeitete anschließend als Softwareingenieurin. Erst ein Besuch im Bay 101 Casino in San Jose führte sie zum Poker &ndash; ein Umweg über eine völlig andere Karriere, bevor sie ihre eigentliche Stärke fand.</p>
          <p class="vb-intro">Neben ihrem legendären zweiten Platz beim WPT Bay 101 2007 gewann sie 2006 die WPT Ladies Night IV im Heads-up gegen Kelli Griggs und erreichte 2005 Platz vier beim WPT Five Diamond World Poker Classic. Mit kumulierten Turniergewinnen von über vier Millionen US-Dollar zählt sie zu den erfolgreichsten Pokerspielerinnen der Geschichte; 2012 wurde sie in die Women in Poker Hall of Fame aufgenommen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2w1 ist die Verbindung aus Zähigkeit und innerer Ordnung: die Fähigkeit, unter Druck und selbst unter körperlichem Schmerz an der eigenen Strategie festzuhalten, statt sich von der Situation überwältigen zu lassen. Lius Auftreten am Tisch &ndash; elegant, kultiviert, unaufgeregt &ndash; zeigt diese reife Form der SE2-Energie: Stärke, die keine Show braucht.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, sich die eigene Position durch Können und Beharrlichkeit verdient zu haben. Der Einserflügel kann diesen Stolz in strenge Selbstkontrolle verwandeln: die Gefahr, jede Entscheidung am eigenen inneren Regelwerk zu messen und wenig Raum für Spontaneität oder Fehler zuzulassen. Bei einem Spiel, das auch Variabilität und Anpassungsfähigkeit erfordert, kann diese Strenge ebenso Stärke wie Einschränkung sein.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-franka-potente", label:"Porträt: Franka Potente (SE2w1)"},
      ])}
    </div>
  `);
}

export function juliusCaesarPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-julius-caesar-portrait.jpg" alt="Julius Caesar" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julius Caesar</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Sozialer Typ 2 mit Dreierfl\u00fcgel &middot; Herztyp</p>
        <p class="krim-portrait-subtitle">100&ndash;44 v. Chr. &ndash; Feldherr, Staatsmann, Diktator auf Lebenszeit &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever, der ein Weltreich umarmte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; zugewandt, gro\u00dfz\u00fcgig, unwiderstehlich darauf aus, gebraucht und geliebt zu werden. Kaum eine historische Gestalt zeigt dieses Muster so deutlich wie Julius Caesar. Seine Zeitgenossen berichten \u00fcbereinstimmend von einem Mann, der Menschen im Sturm gewann: durch Charme, durch Freigebigkeit, durch die F\u00e4higkeit, jedem Einzelnen das Gef\u00fchl zu geben, f\u00fcr ihn pers\u00f6nlich wichtig zu sein &ndash; ob Legion\u00e4r, Senator oder r\u00f6mischer Stra\u00dfenp\u00f6bel.</p>
          <p class="vb-intro">Der r\u00f6mische Feldherr Julius Caesar, geboren 100 v. Chr. in eine altehrw\u00fcrdige, aber verarmte Patrizierfamilie, verschuldete sich in jungen Jahren bewusst und dramatisch, um \u00f6ffentliche Spiele zu finanzieren, Schulden von Verb\u00fcndeten zu \u00fcbernehmen und Wohltaten zu verteilen. Wo ein sparsamer Stratege R\u00fccklagen gebildet h\u00e4tte, investierte die soziale Zwei in Beziehung. Das Kapital, das er aufbaute, war kein Geld &ndash; es war Zuneigung, Loyalit\u00e4t, Schuldigkeit. Und dieses Kapital zahlte sich am Ende in Legionen und Konsulaten aus.</p>
        </blockquote>

        <h2 class="vb-section">2. SO2: Ehrgeiz als Form der Liebe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte die soziale Zwei <strong>Ehrgeiz</strong> &ndash; und bei Caesar verschmilzt dieser Ehrgeiz nahtlos mit seiner F\u00fcrsorge f\u00fcrs Volk. Er wollte nicht nur Rom dienen: Er wollte der Unentbehrlichste sein, der Wohlt\u00e4ter, ohne den nichts mehr ginge. Seine ber\u00fchmte <em>clementia</em>, die Gnade gegen\u00fcber besiegten Gegnern, war weit mehr als politisches Kalk\u00fcl &ndash; sie war der SO2-Reflex pur: Wer verzeiht, bindet. Wer rettet, wird gebraucht. Wer gro\u00dfz\u00fcgig ist, wird geliebt.</p>
          <p class="vb-intro">Diese Logik zieht sich durch sein gesamtes \u00f6ffentliches Wirken: die spektakul\u00e4ren Gladiatorenspiele und Volksfeste, die er aus eigener Tasche finanzierte, die Landverteilung an mittellose Veteranen und B\u00fcrger, der Schuldenerlass f\u00fcr hoch verschuldete R\u00f6mer w\u00e4hrend der B\u00fcrgerkriegswirren. Jede dieser Gesten war zugleich Politik und Liebesbeweis &ndash; ein Angebot: <em>Ich sorge f\u00fcr euch. Ich sehe euch. Geh\u00f6rt zu mir.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Inszenierung im Dienst der Verbindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> macht aus dem warmherzigen Wohlt\u00e4ter einen Meister der Selbstdarstellung. Caesars <em>Commentarii de Bello Gallico</em>, sein eigener Feldzugsbericht \u00fcber den Gallischen Krieg, ist eines der fr\u00fchesten Beispiele bewusster politischer Imagepflege der Weltgeschichte &ndash; in der dritten Person geschrieben, um sachlich und heldenhaft zugleich zu wirken. Der Dreierfl\u00fcgel gab ihm die B\u00fchnenpr\u00e4senz, den strategischen Instinkt f\u00fcr Wirkung, die F\u00e4higkeit, jeden Sieg sofort in Erz\u00e4hlung zu verwandeln, bevor andere die Deutungshoheit \u00fcbernehmen konnten.</p>
          <p class="vb-intro">Gleichzeitig tr\u00e4gt dieser Fl\u00fcgel dieselbe Gefahr wie bei jedem SO2w3er: die Verwechslung von \u00f6ffentlichem Bild und innerem Kern. Je mehr Ehren Caesar annahm &ndash; der purpurne Umhang, der goldene Stuhl im Senat, schlie\u00dflich der Titel <em>dictator perpetuo</em>, Diktator auf Lebenszeit &ndash; desto mehr verschmolz die Rolle des unentbehrlichen Wohlt\u00e4ters mit der eines Herrschers, der keine Gleichen mehr neben sich duldete.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Iden des M\u00e4rz: Als der Golden Retriever betrogen wurde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der 15. M\u00e4rz 44 v. Chr. ist ein typologisches Dokument von ersch\u00fctternder Klarheit. Unter den Attent\u00e4tern, die Caesar im Senat mit dreiundzwanzig Dolchstichen t\u00f6teten, war Marcus Junius Brutus &ndash; ein Mann, den Caesar zuvor pers\u00f6nlich begnadigt, gef\u00f6rdert und mit \u00c4mtern ausgestattet hatte, obwohl Brutus im B\u00fcrgerkrieg auf der Gegenseite gestanden hatte. F\u00fcr die soziale Zwei ist genau das der tiefste denkbare Bruch: Der Mensch, den man rettete, um Verbindung zu sichern, wird zum Werkzeug der eigenen Vernichtung.</p>
          <p class="vb-intro">Doch schon der Weg dorthin zeigt den typischen Stresspunkt der Zwei: Unter Druck geht der Typ 2 in seinen <strong>Achter-Stresspunkt</strong> &ndash; und genau dieses Muster durchzieht Caesars letzte Lebensjahre. Aus dem Wohlt\u00e4ter, der Beziehung durch Geben sicherte, wurde zunehmend ein Mann, der Kontrolle \u00fcber den Staat beanspruchte, ohne noch auf Widerspruch aus dem Senat zu h\u00f6ren. Die Ehrungen, die er annahm, wirkten auf viele nicht mehr wie Dank, sondern wie Anspruch. Der Golden Retriever, der einst um Zuneigung warb, begann, sie als selbstverst\u00e4ndlich vorauszusetzen &ndash; und genau das machte ihn f\u00fcr seine Gegner verwundbar und in ihren Augen gef\u00e4hrlich.</p>
          <p class="vb-intro">Zeitgen\u00f6ssische \u00dcberlieferungen berichten, Caesar habe seine Leibwache in den Wochen zuvor bewusst reduziert &ndash; ein Vertrauen in die eigene Unentbehrlichkeit, das f\u00fcr einen SO2w3er typisch ist: <em>Man wird mir doch nichts tun, ich habe doch f\u00fcr alle gesorgt.</em> Es war dieses Vertrauen, das ihn schlie\u00dflich schutzlos zur\u00fccklie\u00df.</p>
        </blockquote>

        <h2 class="vb-section">5. Energetische Wirkung: Sonne \u00fcber der Republik</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Caesars Wirkung auf seine Zeitgenossen war von sonnenhafter Strahlkraft: Legion\u00e4re folgten ihm \u00fcber Jahre in K\u00e4lte, Hunger und Gefahr, weil er selbst mit ihnen marschierte, ihre Namen kannte, ihre Loyalit\u00e4t mit sp\u00fcrbarer, pers\u00f6nlicher Zuwendung erwiderte. Er betrat einen Raum &ndash; ob Feldlager oder Senat &ndash; und wurde zum Zentrum, um das sich alles ordnete. Das war keine kalte Machttechnik. Es war die echte, warme Energie eines Menschen, der in Verbindung lebte und aus Verbindung Kraft sch\u00f6pfte.</p>
          <p class="vb-intro">Und doch: Hinter dieser Sonne lag der lange Schatten der Zwei, die Leidenschaft <strong>Stolz</strong> &ndash; der Glaube, gebraucht werden zu m\u00fcssen, um wertvoll zu sein, und die Schwierigkeit, jemals genug zu haben. Caesar hatte Ruhm, Macht, die Liebe des Volkes &ndash; und dennoch dr\u00e4ngte ihn dieselbe innere Logik immer weiter: zu einem weiteren Feldzug, einem weiteren Titel, einer weiteren Geste der Gro\u00dfz\u00fcgigkeit. Die Frage, ob er ohne all das noch geliebt worden w\u00e4re, blieb f\u00fcr ihn selbst wohl unbeantwortbar.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Ein Reich, das alle einschlie\u00dft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Julius Caesar der Welt hinterlie\u00df, l\u00e4sst sich nicht auf Feldz\u00fcge reduzieren. Er reformierte den r\u00f6mischen Kalender zum Julianischen Kalender, der mit geringen Anpassungen bis in die Gegenwart in Gebrauch ist. Er weitete das r\u00f6mische B\u00fcrgerrecht auf Provinzbewohner aus, die zuvor nie dazugeh\u00f6rt hatten &ndash; eine zutiefst SO2-typische Geste: Verbindung schaffen, Menschen einschlie\u00dfen, die Grenze zwischen "wir" und "die anderen" aufl\u00f6sen. Seine \u00f6ffentlichen Bauprojekte, allen voran das Forum Caesaris, waren Geschenke an ein Volk, das er als seine gro\u00dfe, weite Familie verstand.</p>
          <p class="vb-intro">So zeigt sich die SO2w3 in ihrer reifsten Form: ein Mensch, dessen pers\u00f6nliches Bed\u00fcrfnis nach Zugeh\u00f6rigkeit sich in Strukturen verwandelte, die Jahrhunderte \u00fcberdauerten. Der Golden Retriever mit dem Dreierfl\u00fcgel kann ein Reich einen &ndash; wenn er lernt, dass wahre Zugeh\u00f6rigkeit nicht erk\u00e4mpft und nicht durch immer neue Beweise gesichert werden muss, sondern einfach ist.</p>
        </blockquote>

        <p class="vb-intro">Die wiederkehrenden, von antiken Quellen bezeugten Anf\u00e4lle, die Caesar zeitlebens verschwieg, werden ausf\u00fchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-julius-caesar">Krankheitsportr\u00e4t zu Caesar</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"krankheitsportraets-julius-caesar", label:"Krankheitsportr\u00e4t: Julius Caesar (SO2w3)"},
        {route:"subtype/so2", label:"SO2 &ndash; Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-will-smith", label:"Portr\u00e4t: Will Smith (SO2w3)"},
        {route:"beruehmte-jesus-christus", label:"Portr\u00e4t: Jesus Christus (SO2w1)"},
        {route:"beruehmte-eva-peron", label:"Portr\u00e4t: Eva Per\u00f3n (SO2w3)"},
        {route:"beruehmte-truman-capote", label:"Portr\u00e4t: Truman Capote (SO2w3)"},
      ])}
    </div>
  `);
}

export function kollegahPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-kollegah-portrait.jpg" alt="Kollegah – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kollegah</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Rapper, K\u00fcnstler &amp; Unternehmer, geb. 1984 &ndash; 2016 zum Islam \u00fcbergetreten &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Raubtier, das nicht aus Bosheit t\u00f6tet, sondern aus Notwendigkeit. Er lebt in Hierarchien, er k\u00e4mpft um seine Position, und er zeigt seine Z\u00e4hne, nicht weil er Freude am Schmerz hat, sondern weil er wei\u00df: Wer sich nicht durchsetzt, wird verdr\u00e4ngt. Der Wolf hat Angst &ndash; und er verwandelt diese Angst in Kraft.</p>
          <p class="vb-intro">Der deutsche Rapper Kollegah &ndash; b\u00fcrgerlicher Name Felix Antoine Blume, geb. 1984 in Singen &ndash; ist dieser Wolf. Einer der kommerziell erfolgreichsten deutschen Rapper \u00fcberhaupt, bekannt f\u00fcr ein k\u00fcnstlerisches Alter Ego, das nach au\u00dfen hin keine Schw\u00e4che kennt: der Boss, der Zuh\u00e4lter-Bar\u00f3n, die \u00fcberlegene Figur, die jeden Gegner wegfl\u00fcstert. Aber das Alter Ego ist eine R\u00fcstung. Darunter liegt die Frage, die alle Sechser kennen: <em>Bin ich wirklich sicher? Bin ich wirklich stark genug?</em></p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke als Gegenangst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Feigheit am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit R\u00fcckzug, sondern mit Angriff. <em>Ich bin gef\u00e4hrlich &ndash; also bin ich sicher.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Kraft, Dominanz und Intensit\u00e4t, weil sie wei\u00df, was es bedeutet, schwach zu sein &ndash; und weil sie sich geschworen hat, nie wieder dort zu sein.</p>
          <p class="vb-intro">Kollegahs gesamtes k\u00fcnstlerisches Projekt ist eine Inszenierung dieser Gegenangst. Das Boss-Narrativ, die Muskeln, die Statussymbole, die Sprache der Dominanz &ndash; alles dient dazu, eine Aura der Unverwundbarkeit zu erzeugen. Wer die SX6 kennt, erkennt das Muster sofort: Je mehr jemand seine St\u00e4rke demonstriert, desto mehr sagt er dar\u00fcber, was er zu verbergen versucht. Der Wolf, der seine Rei\u00dfz\u00e4hne zeigt, wei\u00df genau, warum.</p>
          <p class="vb-intro">Das Rudel der SX6 ist klein und loyal. Kollegah arbeitete jahrelang eng mit Farid Bang zusammen &ndash; enneagrammtypologisch ein ganz anderes Profil: Farid Bang ist selbsterhaltender Typ 7 mit Achterfl\u00fcgel (SE7w8), kein Kontratyp, sondern ein Siebener, der seinen Hunger nach Erleben und Intensit\u00e4t mit der Direktheit des Achters verbindet. Zwei v\u00f6llig verschiedene Charakterstrukturen, die sich im Ergebnis erg\u00e4nzten: der Wolf, der aus Angst angreift, und der Siebener, der aus Lust provoziert. Das Projekt <em>Jung, brutal, gutaussehend</em> (2013) ist das Dokument dieser Allianz: ein Album, das Provokation zum Kunstprinzip erhob.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Der Handwerker</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine Pr\u00e4zision, die ihren Stil von blo\u00dfer Provokation unterscheidet. Die SX6w5 k\u00e4mpft nicht nur mit Lautst\u00e4rke &ndash; sie k\u00e4mpft mit Technik. <em>Ich will nicht nur gef\u00e4hrlich wirken. Ich will der Beste sein. Ich will es beweisen k\u00f6nnen.</em></p>
          <p class="vb-intro">Kollegah ist, bei aller inhaltlichen Kontroversi\u00e4t, handwerklich einer der pr\u00e4zisesten Rapper der deutschsprachigen Szene. Mehrsilbige Reime, komplexe Kadenzen, die f\u00fcr die deutsche Sprache ungew\u00f6hnlich sind, eine Dichte an W\u00f6rtern pro Takt, die wenige erreichen. Er hat das Rappen studiert wie ein Fach &ndash; analysiert, systematisiert, optimiert. Das ist der F\u00fcnferfl\u00fcgel: Wissen als Werkzeug, Handwerk als Schutzschild. <em>Was ich kann, kann mir niemand nehmen.</em></p>
          <p class="vb-intro">Der F\u00fcnferfl\u00fcgel erkl\u00e4rt auch Kollegahs \u00fcberraschend tiefe Auseinandersetzung mit Religion. Seine Konversion zum Islam 2016 kam nicht aus dem Nichts. Der SX6w5 sucht ein stabiles Fundament f\u00fcr seine Weltsicht &ndash; ein System, dem er vertrauen kann, das ihn tr\u00e4gt. Die F\u00fcnf im Fl\u00fcgel macht ihn zum Forscher: Er liest, analysiert, entwickelt Positionen. Auch das ist eine Form der K\u00e4mpfernatur der Sechs: Ich brauche etwas, das standh\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist ihre F\u00e4higkeit, Intensit\u00e4t in Leistung zu verwandeln. Kollegah hat aus einer Startposition ohne Netzwerk und ohne Plattform heraus eine der erfolgreichsten Karrieren im deutschen Hip-Hop aufgebaut. F\u00fcnf Nummer-eins-Alben in Serie, mehrfacher Echo-Gewinner, eines der meistgeh\u00f6rten Acts der deutschen Musikgeschichte. Das ist nicht Gl\u00fcck. Das ist die SX6w5: gnadenlos diszipliniert, gnadenlos fokussiert, gnadenlos auf Kontrolle bedacht.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Feigheit</strong> &ndash; und die Kontrareaktion der SX6 darauf ist Provokation. Wenn Provokation aber zum Selbstzweck wird, verliert sie ihre Grenze. Der Echo-Skandal 2018 &ndash; antisemitische Textzeilen auf dem gemeinsamen Album mit Farid Bang, die zum R\u00fcckgabe-Eklat f\u00fchrten &ndash; ist das d\u00fcsterste Kapitel in Kollegahs \u00f6ffentlichem Leben. Was als \u00c4sthetik der Grenz\u00fcberschreitung begann, wurde zur realen Verletzung. Der Wolf, der nicht mehr wei\u00df, wohin mit seinen Z\u00e4hnen.</p>
          <p class="vb-intro"><em>Hinweis: Das Portr\u00e4t analysiert die Pers\u00f6nlichkeitsstruktur. Antisemitische Texte sind nicht relativierbar &ndash; sie werden hier nicht verteidigt, sondern eingeordnet: als \u00dcberschreitung eines Musters, das in seinem Ursprung aus Angst und Gegenangst entsteht.</em></p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: St\u00e4rke ohne R\u00fcstung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich?</em> zur Erkenntnis <em>Ich brauche diesen Schutz nicht.</em> F\u00fcr die SX6w5 bedeutet das, die R\u00fcstung abzulegen &ndash; nicht weil man schwach ist, sondern weil man stark genug ist, ohne sie aufzutreten. Der Boss-Charakter ist eine Antwort auf eine innere Not. Wenn diese Not geh\u00f6rt wird, braucht es den Charakter nicht mehr.</p>
          <p class="vb-intro">Kollegahs sp\u00e4teres Schaffen zeigt Spuren dieses Weges. Die Konversion, die bewusste Auseinandersetzung mit Grenzen, die \u00f6ffentliche Distanzierung von bestimmten \u00c4sthetiken &ndash; das sind keine Br\u00fcche, sondern Bewegungen. Der Wolf, der beginnt, sein Rudel nicht mehr durch Z\u00e4hnezeigen zu f\u00fchren, sondern durch Ruhe und Richtung. Die St\u00e4rke bleibt. Die Angst dahinter wird kleiner.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-alice-schwarzer", label:"Portr\u00e4t: Alice Schwarzer (SX6w5)"},
        {route:"beruehmte-skylar-grey", label:"Portr\u00e4t: Skylar Grey (SX6w5) – ebenfalls Musik"},
      ])}
    </div>
  `);
}

export function leonardoDiCaprioPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonardo-dicaprio-portrait.jpg" alt="Leonardo DiCaprio" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonardo DiCaprio</p>
        <p class="krim-portrait-typ">SX1w2 &middot; Sexueller Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Klimaaktivist, geb. 1974 &ndash; Tierentsprechung: Schwarze Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> ist das Tier der sexuellen Eins &ndash; und es ist ein Tier, das unter Druck steht. Nicht \u00e4u\u00dferlich. Innerlich. Die Schwarze Mamba ist pr\u00e4zise, schnell und unerbittlich. Wenn sie zuschl\u00e4gt, dann nicht aus Brutalit\u00e4t, sondern aus einem Impuls, der sich nicht mehr aufhalten l\u00e4sst. Sie ist das Tier eines Wesens, das an sich selbst die h\u00f6chsten Ma\u00dfst\u00e4be anlegt &ndash; und das diese Ma\u00dfst\u00e4be mit einer Intensit\u00e4t verfolgt, die andere kaum nachvollziehen k\u00f6nnen.</p>
          <p class="vb-intro">Der US-amerikanische Schauspieler Leonardo DiCaprio hat sich f\u00fcr jede Rolle seines Lebens in Zonen begeben, in die kaum ein anderer Schauspieler freiwillig geht. Rohes Fleisch gegessen. Im Schnee geschlafen. Sprachen gelernt, K\u00f6rper transformiert, Jahrzehnte in Figuren investiert. Das ist kein Ehrgeiz. Das ist der Biss der Mamba: vollst\u00e4ndig, pr\u00e4zise, ohne Halbheiten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Perfektion als inniges Feuer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> ist in der Enneagramm-Tradition der intensivste aller Einser-Subtypen. W\u00e4hrend die selbsterhaltende Eins ihre Perfektion nach innen richtet und die soziale Eins die Welt reformieren will, kanalisiert die SX1 ihren Zorn und ihre Leidenschaft in den direkten, pers\u00f6nlichen Kontakt &ndash; in die Beziehung, das Projekt, die Sache, der sie sich verschrieben hat. Naranjo nannte diesen Subtyp <em>Jealousy</em> &ndash; Eifersucht: eine brennende Intensit\u00e4t im Erleben dessen, was sie liebt oder ablehnt.</p>
          <p class="vb-intro">Bei Leonardo DiCaprio zeigt sich das in einer lebenslangen, fast besessenen Beziehung zu seiner Kunst. Er w\u00e4hlt Rollen, die etwas von ihm verlangen, das \u00fcber technisches K\u00f6nnen weit hinausgeht. Howard Hughes in <em>The Aviator</em> &ndash; er hat Zwangsst\u00f6rungen am eigenen Leib erlebt. Hugh Glass in <em>The Revenant</em> &ndash; er hat echte K\u00e4lte, echte Ersch\u00f6pfung, echten Schmerz als Material benutzt. Die SX1 kann nicht halbherzig sein. Sie muss vollst\u00e4ndig darin sein &ndash; oder gar nicht.</p>
          <p class="vb-intro">Dasselbe Feuer zeigt sich in seinem Klimaaktivismus. Seit den 1990er Jahren engagiert sich DiCaprio f\u00fcr den Schutz der Erde &ndash; nicht als Beiwerk, sondern als zweite Lebensachse. Die Leonardo DiCaprio Foundation hat \u00fcber 100 Millionen Dollar in Umweltschutzprojekte investiert. Das ist die SX1 in ihrem Licht: leidenschaftlich, pr\u00e4zise, kompromisslos.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: W\u00e4rme hinter dem Feuer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> ver\u00e4ndert die sexuelle Eins auf entscheidende Weise. Eine SX1 mit schwach ausgeprägtem Zweierflügel kann verzehrend wirken – hitzig, fordernd, schwer zugänglich in ihrer Intensität. Ein stark ausgeprägter Zweierflügel bringt eine natürliche Wärme ins Spiel: das echte Interesse am anderen, die Freude am Geben, die F\u00e4higkeit, andere in die eigene Welt einzuladen statt sie auf Abstand zu halten.</p>
          <p class="vb-intro">Bei DiCaprio zeigt sich der Zweierfl\u00fcgel in der Art, wie er mit Regisseuren und Kollegen arbeitet. Seine langj\u00e4hrige Zusammenarbeit mit Martin Scorsese &ndash; f\u00fcnf Filme, eine echte kreative Freundschaft &ndash; ist kein strategisches B\u00fcndnis. Es ist Zuneigung. Die SX1w2er baut tiefe, loyale Verbindungen zu den Menschen, denen sie vertraut. Und sie verteidigt diese Verbindungen mit derselben Intensit\u00e4t, mit der sie alles andere verfolgt.</p>
          <p class="vb-intro">Auch in seinen Beziehungen zur Umweltbewegung tr\u00e4gt der Zweierfl\u00fcgel: DiCaprio spricht nicht nur &ndash; er verbindet sich. Er bringt Wissenschaftler, Aktivisten und Politiker zusammen. Der SX1w2er will nicht nur recht haben. Er will, dass die richtigen Menschen sich finden.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX1 ist ihre Tiefe. Leonardo DiCaprio hat kein breites Werk &ndash; er hat ein intensives. Jede Rolle ist ein Eintauchen. Kein Durchschnitt, kein Mittelma\u00df. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> &ndash; und bei der SX1 ist dieser Zorn lebendig, nah an der Oberfl\u00e4che, manchmal kaum zu b\u00e4ndigen. Die Intensit\u00e4t, die DiCaprio in Rollen wie Jordan Belfort oder Calvin Candie verwandelt, kommt nicht aus dem Nichts. Sie kommt aus einem inneren Feuer, das auch im Alltag brennt.</p>
          <p class="vb-intro">Der Schatten liegt in der Perfektion als Gef\u00e4ngnis. Die SX1 kann so hohe Ma\u00dfst\u00e4be haben, dass sie sich selbst nicht genug ist &ndash; auch dann nicht, wenn die Welt ihr applaudiert. DiCaprio hat f\u00fcnfmal vergeblich auf den Oscar gewartet. Bei der sechsten Nominierung &ndash; f\u00fcr <em>The Revenant</em>, 2016 &ndash; gewann er endlich. In seiner Rede sprach er \u00fcber den Klimawandel, nicht \u00fcber sich selbst. Das ist die SX1: Auch im Moment des Triumphes steht das Prinzip vor der Person.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Feuer zur Freiheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Heiterkeit. Von der Forderung zur Akzeptanz. Die wachsende Eins lernt: Ich muss nicht perfekt sein, um vollst\u00e4ndig zu sein. Das Gute entsteht nicht nur durch Kontrolle &ndash; manchmal entsteht es auch durch Loslassen.</p>
          <p class="vb-intro">F\u00fcr die SX1 bedeutet das einen besonderen Schritt: die eigene Intensit\u00e4t annehmen, ohne von ihr regiert zu werden. Das Feuer der Mamba nicht l\u00f6schen &ndash; aber lernen, auch in seiner Stille zu ruhen. Leonardo DiCaprio ist noch auf diesem Weg. Das Engagement bleibt. Die Leidenschaft bleibt. Aber vielleicht kommt ein Moment, in dem die Mamba nicht mehr zuschlagen muss, um zu wissen, wer sie ist.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx1", label:"SX1 \u2013 Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-christoph-waltz", label:"Portr\u00e4t: Christoph Waltz (SE1w2)"},
        {route:"beruehmte-faye-dunaway", label:"Portr\u00e4t: Faye Dunaway (SX1w2) \u2013 ebenfalls Schauspielerin, derselbe Subtyp"},
      ])}
    </div>
  `);
}

export function marcelProustPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marcel-proust-portrait.jpg" alt="Marcel Proust – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marcel Proust</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Franz\u00f6sischer Schriftsteller, 1871&ndash;1922 &ndash; Tierentsprechung: G\u00fcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\u00fcrteltier im korkverkleideten Zimmer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\u00fcrteltier</strong> ist das Tier der sozialen Vier &ndash; es sucht die Gesellschaft, die Salons, das gesellschaftliche Beobachtungsfeld, und tr\u00e4gt sein empfindsames Innenleben dabei offen zur Schau, selbst wenn es sich \u00e4u\u00dferlich zur\u00fcckzieht, um \u00fcber das Gesehene zu schreiben.</p>
          <p class="vb-intro">Der französische Schriftsteller Marcel Proust wurde 1871 in Auteuil bei Paris geboren, litt von fr\u00fcher Kindheit an unter schwerem Asthma und einer au\u00dfergew\u00f6hnlichen k\u00f6rperlichen Empfindlichkeit, die sein gesamtes Leben pr\u00e4gte. In seiner Jugend und als junger Mann war er ein eifriger Salonbesucher der Pariser Oberschicht &ndash; er beobachtete Adel und B\u00fcrgertum mit regelrecht wissenschaftlicher Genauigkeit, bevor er sich, zunehmend krank, in sein legend\u00e4res, mit Kork ausgekleidetes Schlafzimmer zur\u00fcckzog, um die letzten 13 Jahre seines Lebens fast ausschlie\u00dflich dort mit dem Schreiben seines Lebenswerks zu verbringen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Die Gesellschaft als B\u00fchne des eigenen Andersseins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> braucht die Gruppe, um sich an ihr zu reiben und ihre eigene Besonderheit zu erkennen &ndash; Proust verbrachte Jahre als anerkannter, aber stets leicht au\u00dfenstehender Beobachter der Pariser High Society, fasziniert von deren Ritualen und Eitelkeiten, ohne je ganz dazuzugeh\u00f6ren. Als homosexueller Mann in einer Zeit strenger gesellschaftlicher Tabus lebte er in st\u00e4ndiger Spannung zwischen \u00f6ffentlicher Fassade und geheimem Selbst &ndash; ein Thema, das sein Werk implizit und explizit durchzieht.</p>
          <p class="vb-intro">Sein Lebenswerk &bdquo;Auf der Suche nach der verlorenen Zeit&ldquo; (1913&ndash;1927, sieben B\u00e4nde) ist im Kern die detaillierte Sezierung genau dieser Gesellschaft, aus der Perspektive eines Beobachters, der zugleich Teil von ihr ist und sich doch nie ganz zugeh\u00f6rig f\u00fchlt &ndash; die klassische Position der sozialen Vier.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\u00fcnferfl\u00fcgel: Die Erinnerung als Wissenschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> verleiht der Vier eine analytische, fast wissenschaftliche Distanz zum eigenen Erleben &ndash; das Gef\u00fchl wird nicht nur durchlebt, sondern bis in die feinsten Ver\u00e4stelungen seziert und in Sprache gefasst. Prousts ber\u00fchmteste literarische Erfindung, die &bdquo;Madeleine-Episode&ldquo;, in der der Geschmack eines in Tee getauchten Geb\u00e4ckst\u00fccks eine ganze verlorene Kindheit wachruft, ist genau das: eine mikroskopisch genaue Analyse, wie unwillk\u00fcrliche Erinnerung (die &bdquo;m\u00e9moire involontaire&ldquo;) funktioniert.</p>
          <p class="vb-intro">Sein gesamtes, \u00fcber 4000 Seiten umfassendes Werk ist von dieser Systematik gepr\u00e4gt: Ein einziger Satz kann sich \u00fcber mehrere Seiten erstrecken, jede Beobachtung wird in ihre psychologischen, sozialen und philosophischen Bestandteile zerlegt. Diese Kombination aus tiefstem Gef\u00fchl und schier endloser analytischer Pr\u00e4zision ist die Signatur der SO4w5 in ihrer reinsten literarischen Form.</p>
        </blockquote>

        <h2 class="vb-section">4. Ein Lebenswerk gegen die Zeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Proust arbeitete an seinem Hauptwerk bis zu seinem Tod, korrigierte noch auf dem Sterbebett Druckfahnen, w\u00e4hrend seine Gesundheit sich rapide verschlechterte. Der erste Band, &bdquo;Combray&ldquo; (Teil von &bdquo;Auf der Suche nach der verlorenen Zeit&ldquo;), wurde zun\u00e4chst von mehreren renommierten Verlagen abgelehnt, bevor Proust ihn 1913 auf eigene Kosten ver\u00f6ffentlichte &ndash; ein Wagnis, das sich mit dem zweiten Band, der 1919 den Prix Goncourt gewann, endg\u00fcltig auszahlte.</p>
          <p class="vb-intro">Sein gesamtes Sp\u00e4twerk entstand unter dem Bewusstsein der eigenen Sterblichkeit: Proust wusste, dass seine Lungenkrankheit ihn fr\u00fch t\u00f6ten w\u00fcrde, und arbeitete mit einer Intensit\u00e4t, die kaum Pausen zulie\u00df &ndash; eine Wettlauf gegen die Zeit, um das eigene, in der Erinnerung gefundene Leben vollst\u00e4ndig festzuhalten, bevor es zu sp\u00e4t war.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w5 ist die F\u00e4higkeit, <strong>fl\u00fcchtige, subjektive Erinnerung in eine universelle, minuti\u00f6s durchdachte Kunstform</strong> zu verwandeln &ndash; Prousts Werk gilt nach wie vor als einer der bedeutendsten Romane der Weltliteratur, weil es zeigt, wie das scheinbar Kleinste (der Geschmack eines Geb\u00e4cks) das Gr\u00f6\u00dfte (eine ganze verlorene Welt) enthalten kann.</p>
          <p class="vb-intro">Der Schatten zeigte sich in seiner zunehmenden sozialen Isolation und Hypochondrie &ndash; Proust zog sich immer weiter aus dem direkten Leben zur\u00fcck, um es aus der Distanz umso genauer beschreiben zu k\u00f6nnen, bis sein korkverkleidetes Zimmer buchst\u00e4blich zu seiner ganzen Welt wurde. Die Kehrseite der sozialen Vier mit F\u00fcnferfl\u00fcgel: Die analytische Distanz, die das Schreiben erm\u00f6glicht, kann das gelebte Leben selbst zunehmend verdr\u00e4ngen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das G\u00fcrteltier, das die verlorene Zeit wiederfand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Marcel Proust starb 1922 in Paris, kurz nachdem er die letzten Seiten seines Lebenswerks vollendet hatte &ndash; die letzten B\u00e4nde wurden posthum ver\u00f6ffentlicht. Was als Beobachtung einer verg\u00e4nglichen Gesellschaft begann, wurde zu einer der tiefgr\u00fcndigsten Untersuchungen von Zeit, Erinnerung und Identit\u00e4t in der gesamten Literaturgeschichte.</p>
          <p class="vb-intro">Das G\u00fcrteltier, das sich aus der Gesellschaft zur\u00fcckzog, um sie umso genauer zu verstehen, und das seine eigene, fl\u00fcchtige Erinnerung in ein unverg\u00e4ngliches literarisches Bauwerk verwandelte &ndash; das ist das bleibende Bild der sozialen Vier mit F\u00fcnferfl\u00fcgel: Beobachtung, die zur Ewigkeit wird.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 \u2013 Das G\u00fcrteltier: Subtyp-Profil"},
        {route:"beruehmte-gustav-mahler", label:"Portr\xe4t: Gustav Mahler (SO4w5)"},
        {route:"beruehmte-john-lennon", label:"Portr\xe4t: John Lennon (SO4w5)"},
        {route:"beruehmte-edvard-munch", label:"Portr\xe4t: Edvard Munch (SO4w5) \u2013 dieselbe R\xfcckzugslogik bei fortbestehender Zugeh\xf6rigkeit"},
        {route:"krankheitsportraets-gustav-mahler", label:"Krankheitsportr\u00e4t: Gustav Mahler (SO4w5) \u2013 Parallele zu Prousts Wettlauf gegen die Zeit"},
        {route:"krankheitsportraets-marcel-proust", label:"Krankheitsportr\u00e4t: Marcel Proust (SO4w5) \u2013 lebenslanges Asthma"},
        {route:"beruehmte-michael-stipe", label:"Portr\u00e4t: Michael Stipe (SO4w5)"},
        {route:"beruehmte-alice-miller", label:"Portr\u00e4t: Alice Miller (SO4w5)"},
        {route:"beruehmte-ole-nymoen", label:"Portr\u00e4t: Ole Nymoen (SO4w5)"},
      ])}
    </div>
  `);
}

export function matthiasSchweighoeferPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-matthias-schweighoefer-portrait.jpg" alt="Matthias Schweigh\u00f6fer – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Matthias Schweigh\u00f6fer</p>
        <p class="krim-portrait-typ">SX2w1 &middot; Sexueller Typ 2 mit Einserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspieler &amp; Regisseur, geb. 1981 &ndash; Tierentsprechung: Kamel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kamel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kamel</strong> ist das Tier der sexuellen Zwei &ndash; und es ist ein Tier, das tr\u00e4gt. Nicht weil es muss. Sondern weil Tragen seine Art ist, Verbindung herzustellen. Das Kamel \u00fcberquert W\u00fcsten, gibt seine Energie in den Dienst des Weges, und verlangt dabei wenig zur\u00fcck. Aber es ist kein Lasttier ohne Eigenleben. Das Kamel hat W\u00fcrde. Es hat W\u00e4rme. Und wer je einem Kamel begegnet ist, wei\u00df: Es schaut einen an &ndash; direkt, neugierig, ohne Scheu.</p>
          <p class="vb-intro">Matthias Schweigh\u00f6fer tr\u00e4gt. Er tr\u00e4gt Projekte, Ensemble, Publikum. Als Schauspieler bringt er eine unmittelbare W\u00e4rme in jede Rolle, die er spielt &ndash; ob komisch, dramatisch oder verletzlich. Als Regisseur nimmt er seine Crew mit, als w\u00e4re jedes Set eine Gemeinschaft, die er zusammenh\u00e4lt. Das Kamel zieht nicht einfach durch die W\u00fcste. Es sorgt daf\u00fcr, dass alle ankommen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Zwei: Anziehung als Lebensthema</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Zwei (SX2)</strong> ist in der Enneagramm-Tradition der Subtyp, der die Energie der Zwei direkt in den Raum zwischen zwei Menschen lenkt. Nicht in die gro\u00dfe Gruppe wie die soziale Zwei, nicht in die eigene Existenzsicherung wie die selbsterhaltende Zwei &ndash; sondern in die direkte, pers\u00f6nliche, manchmal elektrisierende Verbindung. Naranjo nannte diesen Subtyp <em>Aggressivit\u00e4t</em> &ndash; nicht im aggressiven Sinn, sondern als aktives, vorw\u00e4rtsdr\u00e4ngendes Zugehen auf den anderen. Die SX2 wartet nicht. Sie geht auf dich zu.</p>
          <p class="vb-intro">Bei Matthias Schweigh\u00f6fer zeigt sich das in einer seltenen Qualit\u00e4t: Er macht aus Begegnung ein Erlebnis. Ob in Interviews, auf der B\u00fchne oder im Film &ndash; er schafft sofort N\u00e4he. Nicht durch Strategie, sondern durch echtes Interesse. Die SX2 ist fasziniert vom Gegen\u00fcber. Sie will wissen, wer du bist. Sie will, dass du wei\u00dft, wer sie ist. Aus dieser gegenseitigen Neugier entsteht eine W\u00e4rme, die ansteckt.</p>
          <p class="vb-intro">Sein k\u00fcnstlerisches Werk tr\u00e4gt dieselbe Energie. Vom romantischen Kom\u00f6dienformat bis zur internationalen Netflix-Produktion <em>Army of Thieves</em> &ndash; Schweigh\u00f6fer erz\u00e4hlt immer von Verbindung. Von zwei Menschen, die sich finden. Von dem, was zwischen ihnen entsteht. Das ist kein Nebenmotiv. Das ist die SX2, die ihre innerste Frage in Kunst verwandelt: <em>Kann ich wirklich gesehen werden? Kann ich wirklich lieben?</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserfl\u00fcgel: Haltung hinter der Herzlichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserfl\u00fcgel (w1)</strong> bringt der sexuellen Zwei eine wichtige innere Achse: das Bewusstsein f\u00fcr Qualit\u00e4t, f\u00fcr das Richtige, f\u00fcr Verantwortung. Eine SX2 mit schwach ausgeprägtem Einserflügel könnte sich in der Intensität des Kontakts verlieren – immer auf der Suche nach dem nächsten Verbindungsmoment, ohne einen stabilen inneren Kompass. Ein stark ausgeprägter Einserflügel gibt ihr Substanz. Er sagt: <em>Es reicht nicht, geliebt zu werden. Es kommt auch darauf an, wie.</em></p>
          <p class="vb-intro">Bei Matthias Schweigh\u00f6fer zeigt sich der Einserfl\u00fcgel in seinem Anspruch an sich selbst. Er ist nicht nur Darsteller, er ist Regisseur, Produzent, Unternehmer &ndash; und nimmt diese Rollen ernst. Die Qualit\u00e4t seiner Arbeit liegt ihm am Herzen, nicht nur das Ergebnis. Er hat sich mehrfach \u00f6ffentlich \u00fcber Ersch\u00f6pfung und die Grenzen seiner Belastbarkeit ge\u00e4u\u00dfert &ndash; auch das ist Einser-Energie: die Pflicht, gut zu machen, was man tut, auch wenn es kostet.</p>
          <p class="vb-intro">Der Einserfl\u00fcgel macht aus der SX2 jemanden, der nicht nur verbindet, sondern auch Verantwortung \u00fcbernimmt. Schweigh\u00f6fer ist in der deutschen Filmlandschaft ein Mensch, dem viele vertrauen &ndash; Kollegen, Crew, Publikum. Dieses Vertrauen kommt nicht von ungef\u00e4hr. Es ist der Einserfl\u00fcgel, der daf\u00fcr sorgt, dass auf die Herzlichkeit auch Verl\u00e4sslichkeit folgt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX2 ist ihre Unmittelbarkeit. Matthias Schweigh\u00f6fer erreicht Menschen direkt &ndash; ohne Umwege, ohne Distanz. Er hat eine F\u00e4higkeit, Filme zu machen, die nicht \u00fcber dem Publikum stehen, sondern mit ihm sprechen. Das ist ein seltenes Geschenk, und es kommt aus dem Kern der sexuellen Zwei: der echten Sehnsucht nach Kontakt.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die tiefe \u00dcberzeugung, geliebt werden zu m\u00fcssen, und die Schwierigkeit, eigene Bed\u00fcrfnisse zu benennen, solange man gibt. Bei der SX2 \u00e4u\u00dfert sich das besonders intensiv: Die Verbindung zum anderen kann so wichtig werden, dass die eigene Mitte dar\u00fcber verloren geht. Wer f\u00fcr andere da ist, muss irgendwann fragen, wer f\u00fcr ihn da ist.</p>
          <p class="vb-intro">Schweigh\u00f6fer hat in Interviews \u00fcber Phasen gesprochen, in denen er sich \u00fcberdehnt hat &ndash; zu viel gegeben, zu wenig empfangen. Das ist die Kehrseite des Kamels: Es tr\u00e4gt so lange, bis es nicht mehr kann. Und dann braucht es selbst Wasser.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Geben zum Empfangen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Zwei f\u00fchrt von der Frage <em>Werde ich geliebt?</em> zur Erkenntnis <em>Ich bin liebenswert &ndash; auch ohne zu geben.</em> F\u00fcr die SX2 bedeutet das einen besonders pers\u00f6nlichen Schritt: zuzulassen, dass der andere auch tr\u00e4gt. Sich nicht nur zu verbinden, sondern sich auch zu empfangen. Das Kamel darf auch trinken.</p>
          <p class="vb-intro">Matthias Schweigh\u00f6fer ist auf diesem Weg &ndash; und die Offenheit, mit der er dar\u00fcber spricht, was ihn kostet und was ihm gibt, ist selbst ein Zeichen davon. Die SX2, die gelernt hat, auch um Hilfe zu bitten, verliert nichts von ihrer W\u00e4rme. Sie gewinnt etwas: das Wissen, dass Verbindung in beide Richtungen flie\u00dfen darf.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx2", label:"SX2 \u2013 Das Kamel: Subtyp-Profil"},
        {route:"beruehmte-nina-chuba", label:"Portr\u00e4t: Nina Chuba (SO2w3)"},
      ])}
    </div>
  `);
}

export function mosesPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-moses-portrait.jpg" alt="Moses" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Moses</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Prophet, Gesetzgeber, ca. 13. Jh. v. Chr. (biblische \u00dcberlieferung) &ndash; Anf\u00fchrer des Exodus &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier der sexuellen Sechs &ndash; ein Tier, das Gefahr nicht meidet, sondern ihr entgegentritt, sobald es sein Rudel bedroht sieht. Kein Zufallstier f\u00fcr eine Gestalt, die zun\u00e4chst alles tut, um einer Berufung zu entgehen, und die dann, einmal \u00fcberzeugt, furchtlos dem m\u00e4chtigsten Herrscher ihrer Zeit gegen\u00fcbertritt. Moses, der \u00dcberlieferung des zweiten Buches Mose (Exodus) nach als Kind der versklavten Hebr\u00e4er geboren und im Haus des Pharaos aufgewachsen, floh nach einem Totschlag in die W\u00fcste Midian und lebte dort jahrzehntelang als Hirte &ndash; zur\u00fcckgezogen, unauff\u00e4llig, weit weg von jeder Macht.</p>
          <p class="vb-intro">Erst am brennenden Dornbusch, in der Einsamkeit der W\u00fcste, wird er mit einer Aufgabe konfrontiert, die alles \u00fcbersteigt, was er sich zutraut: sein Volk aus der Sklaverei \u00c4gyptens zu befreien. Kein Held, der sich freiwillig meldet, sondern ein Mann, der sich der Berufung mit aller Kraft widersetzt &ndash; und genau darin liegt der Schl\u00fcssel zu seinem Typus.</p>
        </blockquote>

        <h2 class="vb-section">2. Der Dornbusch: Zweifel als erste Reaktion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Berufungsszene am Dornbusch ist eines der eindr\u00fccklichsten Zeugnisse enneagrammatischer Sechser-Dynamik in der gesamten \u00dcberlieferung. Nach der biblischen Erz\u00e4hlung widerspricht Moses nicht einmal, sondern gleich viermal: \u201eWer bin ich, dass ich zum Pharao gehen sollte?" &ndash; \u201eSie werden mir nicht glauben." &ndash; \u201eIch bin nicht redegewandt, ich bin schwer von Mund und schwer von Zunge." &ndash; und schlie\u00dflich, unverbl\u00fcmt: \u201eSende doch, wen du sonst senden willst." Erst nach wiederholter Zusicherung g\u00f6ttlicher Unterst\u00fctzung, einschlie\u00dflich Wunderzeichen zur Beglaubigung, nimmt er die Aufgabe an.</p>
          <p class="vb-intro">Das ist keine Feigheit, sondern die klassische Struktur der Sechs: Sie pr\u00fcft, zweifelt, sucht Absicherung, bevor sie handelt &ndash; nicht aus Schw\u00e4che, sondern weil sie die Tragweite einer Entscheidung von Anfang an mitdenkt. Anders als eine Acht oder eine Drei, die sich einer Aufgabe impulsiv stellen w\u00fcrde, braucht die Sechs die Gewissheit, dass die Grundlage tr\u00e4gt, bevor sie den ersten Schritt tut.</p>
        </blockquote>

        <h2 class="vb-section">3. Die sexuelle Sechs: Vom Zweifel zur Furchtlosigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist der Kontratyp unter den Sechsern &ndash; jener Subtyp, der die f\u00fcr Typ 6 charakteristische Angst nicht durch Vorsicht und R\u00fcckversicherung bew\u00e4ltigt, sondern durch das Gegenteil: durch St\u00e4rke, Konfrontation und den demonstrativen Beweis, dass die Angst keine Macht \u00fcber einen hat. Naranjo nannte diesen Subtyp \u201eSt\u00e4rke/Sch\u00f6nheit" &ndash; die Sechs, die furchtloser wirkt als jeder andere Typ, weil sie ihre eigene Furcht am aktivsten bek\u00e4mpft.</p>
          <p class="vb-intro">Genau dieses Muster zeigt sich bei Moses nach der Berufung: Er, der sich am Dornbusch viermal gewunden hatte, tritt nun wiederholt und ohne erkennbares Z\u00f6gern vor den Pharao &ndash; den m\u00e4chtigsten Herrscher der bekannten Welt &ndash; und fordert die Freilassung eines ganzen versklavten Volkes. Kein einmaliger Auftritt, sondern ein wiederholtes Zur\u00fcckkehren trotz wiederholter Ablehnung, trotz eskalierender Bedrohung. Die kontraphobische Sechs k\u00e4mpft nicht trotz der Angst, sondern gerade weil sie die Angst nicht \u00fcber sich bestimmen lassen will.</p>
        </blockquote>

        <h2 class="vb-section">4. Der F\u00fcnferfl\u00fcgel: R\u00fcckzug vor dem Sturm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> zeigt sich bei Moses in den Jahrzehnten vor der Berufung: vierzig Jahre als Hirte in der W\u00fcste Midian, fernab jeder \u00d6ffentlichkeit, jeder Macht, jedes gesellschaftlichen Einflusses &ndash; eine Zeit des R\u00fcckzugs, der Beobachtung, des Verarbeitens. Anders als ein 6w7er, der seine Unsicherheit eher durch Aktivit\u00e4t und Ablenkung \u00fcberspielen w\u00fcrde, sucht der F\u00fcnferfl\u00fcgel Distanz und Klarheit, bevor er sich wieder der Welt zuwendet.</p>
          <p class="vb-intro">Diese Kombination erkl\u00e4rt, warum Moses als F\u00fchrungsfigur eine eigent\u00fcmliche Doppelnatur tr\u00e4gt: einerseits der distanzierte, fast introvertierte Denker, der Gott lieber im Zwiegespr\u00e4ch auf dem Berg begegnet als der Menge; andererseits der entschlossene Konfrontative, sobald die Sache klar ist. Der F\u00fcnferfl\u00fcgel liefert die Tiefe und die Zur\u00fcckgezogenheit, die kontraphobische Sechs die Durchsetzungskraft, sobald der R\u00fcckzug vorbei ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Zorn des Wolfs: Impulsivit\u00e4t als Schattenseite</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die kontraphobische Sechs zeigt ihre Schattenseite in spontanen, oft harten Ausbr\u00fcchen, wenn sie sich provoziert oder verraten f\u00fchlt. Schon vor der Berufung t\u00f6tet Moses einen \u00e4gyptischen Aufseher, den er einen hebr\u00e4ischen Sklaven schlagen sieht &ndash; eine impulsive, ungeplante Gewalttat, die ihn zur Flucht zwingt. Jahrzehnte sp\u00e4ter, als er vom Berg Sinai zur\u00fcckkehrt und sein Volk beim Tanz um das Goldene Kalb vorfindet, zerschmettert er in einem Zornesausbruch die frisch empfangenen Gesetzestafeln.</p>
          <p class="vb-intro">Beide Szenen zeigen dieselbe Struktur: kein kalkuliertes Machtkalk\u00fcl wie bei einer Acht, sondern eine pl\u00f6tzliche, fast \u00fcberw\u00e4ltigende Reaktion auf empfundenen Verrat oder Unrecht &ndash; typisch f\u00fcr die Sechs, deren tiefstes Bed\u00fcrfnis nach Verl\u00e4sslichkeit und Loyalit\u00e4t verletzt wird. Der Wolf, der bei\u00dft, wenn das Rudel die gemeinsame Ordnung bricht, die er gerade erst m\u00fchsam errichtet hat.</p>
        </blockquote>

        <h2 class="vb-section">6. Vierzig Jahre W\u00fcste: Sicherheit durch Regel und Gesetz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die vierzig Jahre des Exodus durch die W\u00fcste sind aus enneagrammatischer Sicht eine einzige gro\u00dfe Sechser-Bewegung: ein Volk, das st\u00e4ndig zwischen Vertrauen und Zweifel schwankt, das sich zur\u00fcck nach \u00c4gypten sehnt, sobald die Lage unsicher wird, und das durch klare, verbindliche Regeln &ndash; die Zehn Gebote, das gesamte mosaische Gesetzeswerk &ndash; erst zu einer stabilen Gemeinschaft wird. Kein Zufall, dass ausgerechnet ein 6er-Anf\u00fchrer diesem Volk nicht eine Vision, sondern ein Regelwerk als Fundament gibt: Gesetz als \u00e4u\u00dferer Anker f\u00fcr eine innerlich verunsicherte Gruppe.</p>
          <p class="vb-intro">Moses selbst bleibt w\u00e4hrend dieser gesamten Zeit die Instanz, die immer wieder zwischen Volk und Gott vermittelt, die Zusicherungen einholt, die B\u00fcndnisse (Bund) erneuert &ndash; die klassische Sechser-Funktion des Vertrauensankers, der selbst nie ganz frei von Zweifel ist, aber gerade deshalb versteht, wie sehr andere diese Sicherheit brauchen.</p>
        </blockquote>

        <h2 class="vb-section">7. Licht und Schatten der sexuellen Sechs</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist ihre F\u00e4higkeit, aus tiefem Zweifel heraus zu wachsender Furchtlosigkeit zu gelangen &ndash; nicht durch Verdr\u00e4ngung der Angst, sondern durch ihre bewusste \u00dcberwindung im Dienst einer Sache, an die sie glaubt. Moses' Weg vom widerstrebenden Hirten zum unerschrockenen Gegenspieler des Pharaos ist eines der eindr\u00fccklichsten Beispiele dieser Entwicklung in der gesamten \u00dcberlieferung.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Konsequenz seiner eigenen Pr\u00fcfungsbed\u00fcrftigkeit: Der biblischen Erz\u00e4hlung nach darf Moses das Gelobte Land selbst nicht betreten &ndash; als Strafe daf\u00fcr, dass er in einer Situation des Zweifels am Wasser von Meriba nicht auf die Anweisung vertraute, sondern eigenm\u00e4chtig handelte. Ein Detail, das die zentrale Spannung der Sechs auf den Punkt bringt: das Ringen zwischen dem Bed\u00fcrfnis nach Vertrauen und dem Drang, die Kontrolle selbst in die Hand zu nehmen, bleibt bis zum Ende ungel\u00f6st.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-konfuzius", label:"Portr\u00e4t: Konfuzius (Kong Fuzi) (SO1w2)"},
        {route:"beruehmte-mohammed", label:"Portr\u00e4t: Mohammed ibn Abdullah (SO8w9)"},
      ])}
    </div>
  `);
}

export function ottoVonBismarckPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-otto-von-bismarck-portrait.jpg" alt="Otto von Bismarck \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Otto von Bismarck</p>
        <p class="krim-portrait-typ">SX6w5 &middot; Sexueller Typ 6 mit F\u00fcnferfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Erster Reichskanzler des Deutschen Kaiserreichs, geb. 1815 in Sch\u00f6nhausen, gest. 1898 in Friedrichsruh &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Rudeltier, das seine Position durch St\u00e4rke behauptet und jede Bedrohung des Territoriums mit Z\u00e4hnen beantwortet. Der Wolf vertraut nicht leicht. Er prescht nicht blind vor, sondern beobachtet, wittert, wartet auf den richtigen Moment &ndash; und wenn er zuschl\u00e4gt, dann entschlossen und ohne halbe Sachen.</p>
          <p class="vb-intro">Otto von Bismarck, geboren 1815 auf dem Gut Sch\u00f6nhausen in der Altmark, ist dieser Wolf in seiner reinsten politischen Gestalt. Zeitgenossen beschrieben ihn als \u00bbd\u00e4monisch\u00ab, als \u00bbdiabolisch\u00ab &ndash; Formulierungen, die weniger sein Wesen treffen als das, was er bewusst nach au\u00dfen kehrte: eine Bedrohlichkeit, die keinen Zweifel daran lie\u00df, dass es gef\u00e4hrlich war, sich mit ihm anzulegen. Als seine Mutter starb, war er dreizehn Jahre alt; sein Vater, ein biederer Landjunker, hielt den ambitionslosen, unsteten Sohn zeitlebens f\u00fcr eine Entt\u00e4uschung. Aus diesem doppelten Mangel &ndash; fr\u00fch verlorene N\u00e4he, nie erhaltene Anerkennung &ndash; erwuchs kein R\u00fcckzug, sondern das genaue Gegenteil: eine zwanghafte, lebenslange Suche nach Dominanz und Best\u00e4tigung, die sich niemand mehr entziehen konnte.</p>
          <p class="vb-intro">Sein eigenes Urteil \u00fcber sich selbst best\u00e4tigt, wie viel Kraft es kostete, diese Fassade aufrechtzuerhalten: \u203aIch bin ganz Nerven, sodass Selbstbeherrschung stets die gr\u00f6\u00dfte Aufgabe meines Lebens war.\u2039 Das ist kein Satz eines Mannes ohne Angst. Es ist das Gest\u00e4ndnis eines Wolfes, der seine eigene Nervosit\u00e4t so gr\u00fcndlich hinter Drohgeb\u00e4rden verbarg, dass ganze Generationen von Zeitgenossen und Historikern sie f\u00fcr Kaltbl\u00fctigkeit hielten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Einsch\u00fcchterung statt R\u00fcckzug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Angst und des Zweifels am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Die SX6 begegnet ihrer Angst nicht mit Vorsicht oder Meidung, sondern mit pr\u00e4ventivem Angriff. <em>Wenn ich bedrohlicher bin als die Bedrohung selbst, dann kann mir nichts geschehen.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 sucht Macht, weil sie die Erfahrung von Ohnmacht kennt und sich geschworen hat, ihr nie wieder ausgeliefert zu sein.</p>
          <p class="vb-intro">Bismarcks politisches Handwerkszeug bestand aus genau dieser Logik. Sein bekanntestes Machtinstrument gegen\u00fcber Kaiser Wilhelm I. war die wiederholte R\u00fccktrittsdrohung: Wann immer der Kaiser sich seiner Linie widersetzen wollte, drohte Bismarck mit dem eigenen Abgang &ndash; ein Druckmittel, das er so oft und so wirkungsvoll einsetzte, dass der weit \u00e4ltere Monarch ihm in den meisten strittigen Fragen nachgab, aus Angst, den unentbehrlichen Kanzler tats\u00e4chlich zu verlieren. Das ist kein diplomatisches Nachgeben, das ist Einsch\u00fcchterung als Regierungsstil &ndash; die Drohung wird zur Waffe, weil der offene R\u00fcckzug f\u00fcr die SX6 keine Option ist.</p>
          <p class="vb-intro">Hinzu kam eine ausgepr\u00e4gte Neigung zur Projektion: Bismarck war zutiefst \u00fcberzeugt, von Rivalen und vermeintlichen Verschw\u00f6rern umgeben zu sein &ndash; am Hof, in der Presse, in den Parlamentsfraktionen. Tageb\u00fccher und Korrespondenz belegen ein zwanghaftes Kreisen um m\u00f6glichen Verrat, um vergangene Kr\u00e4nkungen, um imagin\u00e4re Umsturzpl\u00e4ne. Diese Angst wurde nicht introspektiv verarbeitet, sondern nach au\u00dfen projiziert und in Pr\u00e4ventivschl\u00e4ge \u00fcbersetzt: Wer als Gefahr galt, wurde politisch kaltgestellt, bevor er selbst zuschlagen konnte. Sein eigenes Rudel &ndash; ein enger Kreis loyaler Vertrauter wie Albrecht von Roon oder Robert von Keudell &ndash; wurde entsprechend eng gef\u00fchrt und gegen jede Konkurrenz von au\u00dfen verteidigt.</p>
        </blockquote>

        <h2 class="vb-section">3. Warum nicht die Acht? Eine notwendige Abgrenzung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In der Enneagramm-Diskussion wird Bismarck immer wieder als <strong>Selbsterhaltungs-Acht mit Neunerfl\u00fcgel (SE8w9)</strong> gehandelt \u2013 schlie\u00dflich passt die Kompromisslosigkeit, mit der er R\u00fccktrittsdrohungen einsetzte und Rivalen kaltstellte, auf den ersten Blick zum Bild eines Achters, der sein Territorium mit roher Machtdemonstration verteidigt. Bei genauerem Hinsehen tr\u00e4gt diese Zuordnung jedoch nicht.</p>
          <p class="vb-intro">Entscheidend ist Bismarcks eigenes Gest\u00e4ndnis: <em>\u00bbIch bin ganz Nerven, sodass Selbstbeherrschung stets die gr\u00f6\u00dfte Aufgabe meines Lebens war.\u00ab</em> Eine Acht, die ihre Verletzlichkeit typischerweise verdr\u00e4ngt statt sie offen einzugestehen, w\u00fcrde die eigene Nervosit\u00e4t kaum als lebenslanges Kernproblem benennen. Eine Sechs dagegen kennt genau dieses introspektive Ringen mit der eigenen Angst \u2013 bei der SX6 wird es nur nach au\u00dfen in St\u00e4rke verkehrt, nicht verschwiegen.</p>
          <p class="vb-intro">Auch das wiederkehrende Muster der R\u00fcckz\u00fcge nach Varzin und Friedrichsruh \u2013 wochenlang im Bett, geplagt von Nervenleiden, Schlaflosigkeit, Hypochondrie \u2013 passt nicht zu einer Acht, die Bedrohung eher aktiv sucht als sie liegend zu verarbeiten. Und selbst wenn man am Achter-Modell festhalten wollte: Der st\u00e4ndig misstrauische, drohende, nie zur Ruhe kommende Bismarck \u00e4hnelt eher einem impulsiven Siebenerfl\u00fcgel als dem zur\u00fcckhaltenden, konfliktscheuen Neunerfl\u00fcgel \u2013 die SE8w9-These ist damit schon in sich nicht ganz stimmig.</p>
          <p class="vb-intro">Am Ende z\u00e4hlt zudem die Quelle: <strong>Claudio Naranjo</strong> selbst, der Begr\u00fcnder der Subtypenlehre, ordnete Bismarck in seinen Seminaren als sexuelle Sechs ein \u2013 nicht als Acht. Die popul\u00e4re Acht-Zuschreibung erkl\u00e4rt sich eher aus Bismarcks \u00e4u\u00dferem Auftreten als Machtpolitiker als aus einer genaueren Analyse seiner inneren Motivation \u2013 dazu tr\u00e4gt auch seine k\u00f6rperliche F\u00fclle im Alter bei, die ihn auf den zahlreichen Gem\u00e4lden und fr\u00fchen Fotografien fast b\u00e4renhaft wirken l\u00e4sst, ebenso wie die Blickqualit\u00e4t in diesen Portr\u00e4ts: ein Blick, der durchaus St\u00e4rke ausstrahlt, aber eher nach au\u00dfen demonstriert als das eher nach innen gerichtete, ruhigere Kraftgef\u00fchl eines selbsterhaltenden Achters mit Neunerfl\u00fcgel.</p>
        </blockquote>

        <h2 class="vb-section">4. Der F\u00fcnferfl\u00fcgel: Hypochondrie und strategische Tiefe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\u00fcnferfl\u00fcgel (w5)</strong> bringt der sexuellen Sechs eine analytische Tiefe und eine Neigung zum R\u00fcckzug in die eigene Innenwelt, die ihre K\u00e4mpfernatur um eine zweite, stillere Seite erg\u00e4nzt. Die SX6w5 handelt nicht impulsiv &ndash; sie beobachtet, w\u00e4gt ab, durchdenkt Konstellationen weit im Voraus, und zieht sich, wenn die Spannung zu gro\u00df wird, in eine br\u00fctende Isolation zur\u00fcck, statt sie im Au\u00dfen abzureagieren.</p>
          <p class="vb-intro">Bei Bismarck zeigte sich dieser Fl\u00fcgel doppelt: einerseits in einer au\u00dfergew\u00f6hnlichen strategischen Begabung, die europ\u00e4ische M\u00e4chtekonstellationen \u00fcber Jahre hinweg antizipierte und geduldig auf den richtigen Moment hinarbeitete &ndash; nie das Ergebnis blinder Impulsivit\u00e4t, sondern jahrelanger Vorausplanung. Andererseits in einer ausgepr\u00e4gten Hypochondrie und einer Neigung, sich bei Stress tagelang auf seine G\u00fcter zur\u00fcckzuziehen: erst nach Varzin in Hinterpommern, sp\u00e4ter nach Friedrichsruh im Sachsenwald. Dort verbrachte er ganze Phasen im Bett liegend, klagte \u00fcber Nervenleiden, Schlaflosigkeit, Verdauungsbeschwerden &ndash; k\u00f6rperliche Symptome, die eng mit seinem chronischen Misstrauen und seiner Gr\u00fcbelneigung verwoben waren. Der Wolf, der sich in seine H\u00f6hle zur\u00fcckzieht, wenn die Jagd zu viel Kraft gekostet hat, aber von dort aus weiter das ganze Territorium im Blick beh\u00e4lt.</p>
          <p class="vb-intro">Die gesundheitlichen Folgen dieses Musters &ndash; die Ersch\u00f6pfungskrise der fr\u00fchen 1880er-Jahre und die verweigerte Behandlung einer Gangr\u00e4n in seinen letzten Lebensjahren &ndash; werden im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-otto-von-bismarck">Krankheitsportr\u00e4t zu Bismarck</a> ausf\u00fchrlich gedeutet.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Lebenswerk: Blut und Eisen, Reichsgr\u00fcndung, Sozialstaat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1862 zum preu\u00dfischen Ministerpr\u00e4sidenten berufen, formulierte Bismarck in seiner ber\u00fchmten Rede vor dem Budgetausschuss des Abgeordnetenhauses das Programm seiner Politik: nicht Reden und Mehrheitsbeschl\u00fcsse w\u00fcrden die gro\u00dfen Fragen der Zeit entscheiden, sondern \u00bbEisen und Blut\u00ab. Es folgten drei kalkulierte Kriege &ndash; gegen D\u00e4nemark 1864, gegen \u00d6sterreich 1866, gegen Frankreich 1870/71 &ndash;, mit denen er die deutschen Einzelstaaten unter preu\u00dfischer F\u00fchrung zusammenschmiedete. 1871 wurde im Spiegelsaal von Versailles das Deutsche Kaiserreich ausgerufen, Bismarck sein erster Reichskanzler.</p>
          <p class="vb-intro">Nach der Reichsgr\u00fcndung wandelte sich sein Kurs: Deutschland sei nun \u00bbsaturiert\u00ab, weitere territoriale Expansion in Europa unn\u00f6tig &ndash; stattdessen baute er ein komplexes B\u00fcndnissystem auf, das den Frieden auf dem Kontinent sichern sollte. Innenpolitisch f\u00fchrte er den Kulturkampf gegen die katholische Kirche und sp\u00e4ter die Sozialistengesetze gegen die erstarkende Sozialdemokratie &ndash; zugleich aber auch, teils aus genau diesem taktischen Kalk\u00fcl, die weltweit ersten Sozialversicherungen: Krankenversicherung 1883, Unfallversicherung 1884, Alters- und Invalidit\u00e4tsversicherung 1889. Eine fr\u00fche Form des Sozialstaats, die zugleich F\u00fcrsorge und ein Instrument war, um der Arbeiterschaft den Boden f\u00fcr revolution\u00e4re Ideen zu entziehen &ndash; typisch f\u00fcr einen Wolf, der auch F\u00fcrsorge strategisch als Mittel zur Sicherung des eigenen Rudels einsetzte.</p>
          <p class="vb-intro">1890, zwei Jahre nach dem Regierungsantritt des jungen, ungeduldigen Kaisers Wilhelm II., wurde Bismarck entlassen. Eine Karikatur der Zeit fasste den Bruch in vier Worten: \u00bbDer Lotse geht von Bord.\u00ab Der Mann, der drei Jahrzehnte lang durch Drohung und Kalk\u00fcl regiert hatte, konnte den Machtverlust an einen j\u00fcngeren Herrscher nicht durch dieselben Mittel abwenden &ndash; das R\u00fctteln an den F\u00e4den funktionierte nur, solange das Gegen\u00fcber Angst vor dem eigenen Abgang hatte, und Wilhelm II. hatte diese Angst nicht.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w5 ist die F\u00e4higkeit, aus Angst heraus au\u00dfergew\u00f6hnliche strategische Weitsicht zu entwickeln und in Krisen Stabilit\u00e4t zu stiften. Bismarcks B\u00fcndnispolitik nach 1871 hielt Europa fast zwei Jahrzehnte lang in einem fragilen, aber funktionierenden Gleichgewicht &ndash; eine Leistung, die viele seiner Nachfolger nicht fortzuf\u00fchren wussten. Auch seine Sozialgesetzgebung, so taktisch sie gemeint war, wirkte weit \u00fcber ihren urspr\u00fcnglichen Zweck hinaus und wurde zum Vorbild moderner Sozialstaaten.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Angst</strong> &ndash; und die Kontrareaktion der SX6 darauf ist eine H\u00e4rte, die keine Grenze mehr kennt, sobald die wahrgenommene Bedrohung existenziell wird. Der Kulturkampf traf die katholische Kirche und ihre Anh\u00e4nger mit Gesetzen, die Priester inhaftierten und Bist\u00fcmer verwaisen lie\u00dfen; die Sozialistengesetze verboten sozialdemokratische Organisationen, Versammlungen und Publikationen \u00fcber ein Jahrzehnt lang. Beides Ausdruck desselben Musters: Wer als Bedrohung des Rudels &ndash; des jungen Kaiserreichs, der eigenen Machtposition &ndash; identifiziert wurde, wurde mit staatlicher H\u00e4rte bek\u00e4mpft, ungeachtet des Preises f\u00fcr die Betroffenen. Diese Politik ist eigenst\u00e4ndig kritisch zu bewerten, unabh\u00e4ngig von der psychologischen Einordnung, die sie erkl\u00e4rt, aber nicht rechtfertigt.</p>
        </blockquote>

        <h2 class="vb-section">7. Der Heilungsweg: Sicherheit ohne Drohung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der Bedrohung?</em> zur Erkenntnis <em>Ich muss die Welt nicht kontrollieren, um sicher zu sein.</em> F\u00fcr die SX6w5 bedeutet das, St\u00e4rke nicht l\u00e4nger als Drohkulisse zu verstehen, sondern als innere Festigkeit, die kein Gegen\u00fcber mehr einsch\u00fcchtern muss, um sich sicher zu f\u00fchlen.</p>
          <p class="vb-intro">Dieser Weg blieb Bismarck bis zuletzt verwehrt. Auch in den acht Jahren seines Ruhestands in Friedrichsruh, bis zu seinem Tod 1898, hielt er an Misstrauen und Kontrolle fest &ndash; er grollte \u00f6ffentlich gegen seinen kaiserlichen Nachfolger, kommentierte die Tagespolitik unaufgefordert und unvers\u00f6hnlich, und pflegte bis zuletzt das Bild des unentbehrlichen Staatsmanns, dem Unrecht geschehen war. Das Portr\u00e4t endet damit nicht mit einer Auss\u00f6hnung, sondern mit der Feststellung, die f\u00fcr jeden Kontratyp der Sechs gilt: Solange Sicherheit nur durch Drohung und Kontrolle \u00fcber andere gesucht wird, bleibt der Wolf gefangen in genau der Angst, die er zeitlebens zu bek\u00e4mpfen versuchte. Der Weg nach drau\u00dfen f\u00fchrt nicht \u00fcber mehr Macht, sondern \u00fcber das Vertrauen, das Bismarck sein Leben lang zu vermeiden gelernt hatte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-wladimir-putin", label:"Portr\u00e4t: Wladimir Putin (SX6w5)"},
        {route:"beruehmte-friedrich-schiller", label:"Portr\u00e4t: Friedrich Schiller (SX6w5)"},
        {route:"krankheitsportraets-otto-von-bismarck", label:"Krankheitsportr\u00e4t: Otto von Bismarck (SX6w5)"},
      ])}
    </div>
  `);
}

export function rasputinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-rasputin-portrait.jpg" alt="Grigori Rasputin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Grigori Rasputin</p>
        <p class="krim-portrait-typ">SX1w9 &middot; Sexueller Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Wanderm\u00f6nch &amp; Heiler, 1869&ndash;1916 &ndash; Tierentsprechung: Schwarze Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> ist das Tier der sexuellen Eins &ndash; ein Tier, das nicht durch Lautst\u00e4rke wirkt, sondern durch die Unausweichlichkeit ihrer Pr\u00e4senz. Wer ihr zu nahe kommt, sp\u00fcrt eine Intensit\u00e4t, der man sich kaum entziehen kann. Kein Zufallstier: Die Mamba t\u00f6tet nicht aus Wut, sondern aus einem inneren Zwang zur Reinheit &ndash; einer Kraft, die keine halben Sachen kennt.</p>
          <p class="vb-intro">Zeitgenossen des russischen Mystikers Rasputin beschrieben seinen Blick als das erste, was an ihm auffiel &ndash; durchdringend, unm\u00f6glich zu ignorieren, f\u00fcr manche unheimlich, f\u00fcr andere heilend. Petersburger Salondamen berichteten, sie h\u00e4tten sich unter diesem Blick vollst\u00e4ndig gesehen gef\u00fchlt, ausgezogen bis auf den Grund. Das ist die Schwarze Mamba am Werk: kein Charisma, das schmeichelt, sondern eines, das durchdringt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Reinheit als brennendes Verlangen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> ist der intensivste aller Einser-Subtypen. W\u00e4hrend die selbsterhaltende Eins ihre Perfektion nach innen richtet und die soziale Eins die Welt reformieren will, kanalisiert die SX1 ihre Leidenschaft in den unmittelbaren, pers\u00f6nlichen Kontakt &ndash; in die eine Beziehung, das eine Anliegen, die eine Sache, der sie sich mit ganzer Kraft verschreibt. Naranjo nannte diesen Subtyp <em>Jealousy</em> &ndash; eine besitzergreifende Intensit\u00e4t im Erleben dessen, was sie f\u00fcr wahr und rein h\u00e4lt.</p>
          <p class="vb-intro">Rasputins gesamter Weg beginnt mit dieser Logik: Als junger Mann in Sibirien durchlebte er eine religi\u00f6se Krise, die ihn zum Wanderpilger machte &ndash; Kl\u00f6ster, Athos, Jerusalem. Er kehrte mit der \u00dcberzeugung zur\u00fcck, dass wahre Reinheit nicht durch Verzicht, sondern durch das vollst\u00e4ndige Durchleben und \u00dcberwinden der S\u00fcnde erreicht wird. Das ist SX1-Logik in ihrer eigenwilligsten Form: kein sanftes Ideal, sondern ein Feuer, das durch den Widerspruch selbst hindurchmuss, um rein zu werden.</p>
          <p class="vb-intro">Dieselbe Unbedingtheit trug ihn an den Hof. Als der Zarewitsch Alexei an der Bluterkrankheit litt und \u00c4rzte machtlos blieben, wandte sich Zarin Alexandra an Rasputin &ndash; und wiederholt gelang ihm, wo die Medizin scheiterte, eine Linderung der Blutungen. Ob durch Suggestion, Ruhe oder tats\u00e4chliche Gabe: Die SX1 wirft sich mit ihrer ganzen Person in das eine Anliegen, dem sie sich verschrieben hat. F\u00fcr Rasputin war das die Rettung dieses einen Kindes &ndash; und dar\u00fcber die Bindung an die Zarenfamilie, die sein Leben und sein Ende bestimmen sollte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Die Ruhe im Sturm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> ver\u00e4ndert die sexuelle Eins auf entscheidende Weise. Eine SX1 mit schwach ausgeprägtem Neunerflügel kann fordernd, hitzig, kaum zu bändigen wirken. Ein stark ausgeprägter Neunerflügel bringt eine gegenläufige Ruhe ins Spiel &ndash; eine Weite, eine scheinbare Gelassenheit, die das Feuer der Eins nach au\u00dfen abmildert, ohne es zu l\u00f6schen. Nach au\u00dfen: Frieden. Im Inneren: derselbe unerbittliche Drang.</p>
          <p class="vb-intro">Diese Kombination erkl\u00e4rt, warum Rasputin so vielen Menschen so unterschiedlich erschien. Am Hof wirkte er wie ein Fels der Ruhe &ndash; einfach, b\u00e4uerlich, unger\u00fchrt vom h\u00f6fischen Zeremoniell, mit einer Pr\u00e4senz, die beruhigte, wo andere in Panik gerieten. Zugleich lebte er ein Doppelleben aus Exzess und Bu\u00dfe, das keine Ruhe kannte: Trinkgelage, au\u00dfereheliche Beziehungen, religi\u00f6se Verz\u00fcckung im st\u00e4ndigen Wechsel. Der Neunerfl\u00fcgel verschleiert die Intensit\u00e4t der Eins &ndash; macht sie zug\u00e4nglich, warm, fast schl\u00e4frig wirkend &ndash; w\u00e4hrend das eigentliche Feuer unver\u00e4ndert brannte.</p>
          <p class="vb-intro">Auch seine Lehre trug diese Handschrift: Rasputin predigte, dass man der S\u00fcnde nicht ausweichen, sondern sich ihr ruhig, ohne Krampf, hingeben m\u00fcsse, um durch sie hindurch zur Gnade zu finden. Keine einsertypische Strenge, sondern eine neunertypische Gelassenheit gegen\u00fcber dem eigenen Fehlverhalten &ndash; verbunden mit dem unbeirrbaren SX1-Glauben, im Recht zu sein.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX1 ist ihre F\u00e4higkeit zur vollst\u00e4ndigen Hingabe. Rasputins Zuwendung zum kranken Zarewitsch, seine Pr\u00e4senz in Momenten gr\u00f6\u00dfter Not der Zarenfamilie, seine F\u00e4higkeit, Angst durch blo\u00dfe Anwesenheit zu lindern &ndash; das war kein Kalk\u00fcl. Das war die Mamba, die sich ganz in den Dienst einer Sache stellt, der sie sich verschrieben hat.</p>
          <p class="vb-intro">Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> &ndash; und bei der SX1 lebt dieser Zorn nah an der Oberfl\u00e4che, verkleidet als moralische Gewissheit. Rasputins \u00dcberzeugung, ein von Gott gesandter Heiler zu sein, kippte zunehmend in Selbstgerechtigkeit: Er lie\u00df sich am Hof huldigen, mischte sich in Staatsgesch\u00e4fte und Bischofsernennungen ein, umgab sich mit Anh\u00e4ngerinnen, die seine Lehre der Reinigung durch S\u00fcnde w\u00f6rtlich nahmen. Die Presse machte aus ihm eine Sagengestalt der Verderbtheit &ndash; nicht ganz zu Unrecht, aber auch verzerrt durch den Skandal, den seine blo\u00dfe Existenz am Hof ausl\u00f6ste.</p>
          <p class="vb-intro">Am 30. Dezember 1916 wurde er von einer Gruppe adliger Verschw\u00f6rer ermordet, die glaubten, mit seinem Tod die Monarchie retten zu k\u00f6nnen. Die zahlreichen Legenden um seinen Tod &ndash; vergiftet, erschossen, ertr\u00e4nkt, angeblich unm\u00f6glich zu t\u00f6ten &ndash; sagen weniger \u00fcber Rasputin selbst als \u00fcber die Wucht, mit der die SX1-Pr\u00e4senz die Menschen um ihn herum erfasste: Man konnte sich seiner nicht entziehen, selbst im Sterben nicht.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Zwang zur wahren Reinheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Heiterkeit, von der Forderung nach Vollkommenheit zur Annahme dessen, was ist. Die wachsende Eins entdeckt: Reinheit ist kein Zustand, den man erzwingen oder erk\u00e4mpfen muss. Sie ist bereits da, wenn der Kampf gegen sich selbst aufh\u00f6rt.</p>
          <p class="vb-intro">Rasputins Weg blieb ein Weg des Zwangs &ndash; die \u00dcberzeugung, Reinheit nur durch das Durchleben des Exzesses erreichen zu k\u00f6nnen, hielt ihn in einer Schleife gefangen, aus der er nie heraustrat. Der Neunerfl\u00fcgel h\u00e4tte ihm die stille Pr\u00e4senz geben k\u00f6nnen, in der Vollkommenheit nicht mehr bewiesen werden muss. Stattdessen blieb die Mamba bis zuletzt im Angriff: ein Mann, der Heilung brachte und zugleich nie zur eigenen Ruhe fand.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx1", label:"SX1 \u2013 Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-marie-agnes-strack-zimmermann", label:"Portr\u00e4t: Marie-Agnes Strack-Zimmermann (SX1w9)"},
        {route:"beruehmte-jamie-lee-curtis", label:"Portr\u00e4t: Jamie Lee Curtis (SX1w2)"},
      ])}
    </div>
  `);
}

export function samuelHahnemannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-samuel-hahnemann-portrait.jpg" alt="Dr. Samuel Hahnemann – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Samuel Hahnemann</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Sozialer Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Deutscher Arzt, Begr\u00fcnder der Hom\u00f6opathie, 1755&ndash;1843 &ndash; Tierentsprechung: Gans</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Gans, die eine sanftere Medizin forderte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist das Tier der sozialen Eins &ndash; wachsam, unbestechlich, mit einem untr\u00fcglichen Sinn daf\u00fcr, wenn etwas grundlegend falsch l\u00e4uft. Sie duldet keine halben Kompromisse, wenn sie \u00fcberzeugt ist, dass die Ordnung selbst krank ist. Kaum ein Lebenswerk zeigt diese Haltung eindr\u00fccklicher als das von Samuel Hahnemann, der die Heilkunde seiner Zeit f\u00fcr so gef\u00e4hrlich hielt, dass er ihr \u00fcber Jahre den R\u00fccken kehrte &ndash; um am Ende ein eigenes, in sich stimmiges Medizinsystem zu begr\u00fcnden, das bis heute weltweit Millionen Menschen begleitet.</p>
          <p class="vb-intro">Der deutsche Arzt Christian Friedrich Samuel Hahnemann wurde am 10. April 1755 in Mei\u00dfen geboren, als Sohn eines Porzellanmalers. Schon als Kind galt er als au\u00dfergew\u00f6hnlich begabt und wissbegierig; sein Lehrer soll ihm zeitweise erlaubt haben, den Unterricht selbst mitzugestalten. Sein Talent zeigte sich fr\u00fch in einer erstaunlichen Sprachbegabung: Neben Latein und Griechisch beherrschte er im Lauf seines Lebens unter anderem Englisch, Franz\u00f6sisch, Italienisch, Arabisch, Hebr\u00e4isch, Syrisch und Chald\u00e4isch \u2013 eine Vielseitigkeit, die an Universalgelehrte seiner Epoche wie Goethe erinnert. Genau diese Sprachbegabung wurde sp\u00e4ter zu seiner wirtschaftlichen Rettung: \u00dcber Jahre finanzierte er seine Familie als gefragter \u00dcbersetzer medizinischer, chemischer und naturkundlicher Fachliteratur aus dem Englischen und Franz\u00f6sischen. Er studierte Medizin in Leipzig, Wien und Erlangen, wo er 1779 promovierte &ndash; ein Weg, der ihn schnurgerade in den \u00e4rztlichen Berufsstand h\u00e4tte f\u00fchren sollen. Doch was er dort an g\u00e4ngiger Praxis erlebte, lie\u00df ihn nicht mehr los.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Emp\u00f6rung \u00fcber ein krankes System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> sucht Vollkommenheit nicht im privaten Rahmen, sondern im gro\u00dfen gesellschaftlichen Ma\u00dfstab &ndash; sie erkennt Missst\u00e4nde nicht als Einzelf\u00e4lle, sondern als Symptom eines fehlerhaften Systems, das sie zu korrigieren sucht. Die Medizin des ausgehenden 18. Jahrhunderts arbeitete mit Aderl\u00e4ssen, hochdosierten Gaben von Quecksilber und Antimon, Abf\u00fchrmitteln und Brechmitteln &ndash; Verfahren, die Patienten h\u00e4ufig mehr schadeten, als sie halfen. Hahnemann, selbst praktizierender Arzt, war so ersch\u00fcttert von dieser &bdquo;heroischen Medizin&ldquo;, dass er \u00fcber mehrere Jahre die \u00e4rztliche Praxis fast vollst\u00e4ndig aufgab, weil er es nicht mehr verantworten konnte, seinen Patienten zu schaden.</p>
          <p class="vb-intro">Diese \u00dcbersetzert\u00e4tigkeit trug ihn und seine wachsende Familie \u00fcber Jahre hinweg &ndash; ein zur\u00fcckgezogenes, entbehrungsreiches Leben, das die soziale Eins in Kauf nimmt, wenn die Alternative bedeutet, gegen die eigene \u00dcberzeugung zu handeln. Es war exakt diese Haltung, kompromisslose Redlichkeit gegen\u00fcber dem eigenen Gewissen, aus der heraus eine der folgenreichsten medizinischen Entdeckungen der Neuzeit entstand.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Geduld, die ein neues System reifen lie\u00df</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> gibt der Eins eine ausgleichende Ruhe und Beharrlichkeit, die bei schwach ausgeprägtem Neunerflügel fehlen würde &ndash; die F\u00e4higkeit, eine \u00dcberzeugung nicht im Sturm durchzusetzen, sondern \u00fcber Jahrzehnte in aller Gr\u00fcndlichkeit auszuarbeiten, zu pr\u00fcfen, zu verfeinern. Genau das kennzeichnet Hahnemanns Lebenswerk: Von der ersten Ahnung im Jahr 1790 bis zur sechsten und letzten, postum ver\u00f6ffentlichten Auflage seines Hauptwerks <em>Organon der Heilkunst</em> vergingen weit \u00fcber f\u00fcnfzig Jahre unabl\u00e4ssiger Verfeinerung. Kein Dogma, das er einmal verk\u00fcndete und dann verteidigte, sondern ein System, das er zeitlebens weiterentwickelte, korrigierte, pr\u00e4zisierte.</p>
          <p class="vb-intro">Diese geduldige Systematik zeigt sich auch in seiner Arbeitsweise: Hahnemann testete jedes neue Arzneimittel zun\u00e4chst an sich selbst und an gesunden Mitstreitern &ndash; die sogenannten &bdquo;Arzneimittelpr\u00fcfungen&ldquo; &ndash;, bevor er es je einem Patienten verabreichte. Eine methodische Sorgfalt, die seiner Zeit um Jahrzehnte voraus war und die ohne den ruhigen, gr\u00fcndlichen Neunerfl\u00fcgel kaum denkbar gewesen w\u00e4re.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Selbstversuch mit Chinarinde: Die Geburtsstunde der Hom\u00f6opathie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1790, w\u00e4hrend der \u00dcbersetzung eines Arzneibuchs des schottischen Arztes William Cullen, stie\u00df Hahnemann auf eine Erkl\u00e4rung zur Wirkung der Chinarinde (Cinchona) gegen Malaria, die ihn nicht \u00fcberzeugte. Er tat, was seinem Charakter entsprach: Er pr\u00fcfte es selbst nach. Er nahm wiederholt Chinarindenextrakt ein &ndash; und entwickelte dabei Symptome, die dem Krankheitsbild der Malaria selbst erstaunlich \u00e4hnelten: Fieber, Fr\u00f6steln, Gliederschmerzen. Ein Stoff, der die Krankheit heilte, gegen die er half, konnte offenbar bei einem Gesunden ebendiese Symptome hervorrufen.</p>
          <p class="vb-intro">Aus diesem einen, pr\u00e4zise dokumentierten Selbstversuch leitete Hahnemann sein Grundprinzip ab: <em>Similia similibus curentur</em> &ndash; \u00c4hnliches werde durch \u00c4hnliches geheilt. Ein Heilmittel, das bei einem Gesunden bestimmte Symptome ausl\u00f6st, k\u00f6nne, in stark verd\u00fcnnter Form gegeben, bei einem Kranken mit ebendiesen Symptomen Heilung f\u00f6rdern. Diese Beobachtung, aus akribischer Selbstbeobachtung geboren, wurde zum Fundament eines Medizinsystems, das der Menschheit nach wie vor erhalten geblieben ist &ndash; ein Beleg daf\u00fcr, wie viel eine einzelne, ehrlich durchgef\u00fchrte Pr\u00fcfung bewirken kann, wenn sie von einer Eins mit unbedingtem Wahrheitsanspruch durchgef\u00fchrt wird.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Organon: Ein System von seltener Klarheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1810 ver\u00f6ffentlichte Hahnemann das <em>Organon der Heilkunst</em>, sein zentrales Werk, in dem er die Prinzipien der Hom\u00f6opathie systematisch niederlegte: das \u00c4hnlichkeitsprinzip, die Individualisierung jeder Behandlung auf das genaue Symptombild des einzelnen Patienten, und die Methode der Potenzierung &ndash; die schrittweise Verd\u00fcnnung eines Wirkstoffs verbunden mit kr\u00e4ftigem Versch\u00fctteln (Succussion), wodurch nach seiner \u00dcberzeugung die Heilkraft des Mittels freigesetzt und verst\u00e4rkt wird, w\u00e4hrend unerw\u00fcnschte Nebenwirkungen zur\u00fccktreten. Er pr\u00e4gte f\u00fcr sein System auch den Begriff, unter dem es noch heute weltweit bekannt ist: <em>Hom\u00f6opathie</em>, aus dem Griechischen f\u00fcr &bdquo;\u00e4hnliches Leiden&ldquo;.</p>
          <p class="vb-intro">Das Werk ist von einer f\u00fcr seine Zeit ungew\u00f6hnlichen Systematik gepr\u00e4gt &ndash; durchnummerierte Paragrafen, klare Definitionen, ein in sich geschlossenes Regelwerk. Genau die Handschrift der sozialen Eins: Nicht ein loses B\u00fcndel von Beobachtungen, sondern ein Ordnungssystem, das jedem Nachfolger nachvollziehbar dieselben Prinzipien anwenden l\u00e4sst &ndash; eine Struktur, die es der Hom\u00f6opathie erlaubte, sich weit \u00fcber Hahnemanns eigenes Wirken hinaus zu verbreiten und bis in die Gegenwart in eigenst\u00e4ndigen Ausbildungsg\u00e4ngen weltweit gelehrt zu werden.</p>
        </blockquote>

        <h2 class="vb-section">6. Widerstand der Apotheker: Der Preis der \u00dcberzeugung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hahnemanns Praxis, seine Arzneien selbst herzustellen und direkt an die Patienten abzugeben, statt sie \u00fcber Apotheken verschreiben zu lassen, brachte ihn in direkten wirtschaftlichen Konflikt mit dem Leipziger Apothekerstand. 1820 wurde ihm per Gerichtsbeschluss das Selbstdispensieren in Leipzig untersagt &ndash; ein herber R\u00fcckschlag f\u00fcr einen Mann, der sein gesamtes System auf der exakten Kontrolle \u00fcber Herstellung und Verabreichung seiner Mittel aufgebaut hatte.</p>
          <p class="vb-intro">Doch die soziale Eins, verst\u00e4rkt durch den Neunerfl\u00fcgel, gibt nicht auf, sie sucht einen neuen Weg. Herzog Ferdinand von Anhalt-K\u00f6then, selbst von Hahnemanns Methode \u00fcberzeugt, lud ihn ein, sich in K\u00f6then niederzulassen und gew\u00e4hrte ihm dort das Recht zum Selbstdispensieren. Vierzehn Jahre lang, von 1821 bis 1835, praktizierte und lehrte Hahnemann in K\u00f6then ungest\u00f6rt &ndash; eine Zeit, in der die Hom\u00f6opathie sich \u00fcber Deutschland hinaus in ganz Europa und den USA zu verbreiten begann, getragen von \u00c4rzten, die seine Schriften gelesen hatten und seiner Methode folgten.</p>
        </blockquote>

        <h2 class="vb-section">7. Die Cholera-Epidemien: Bew\u00e4hrung in der Not</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als 1831 die Cholera gro\u00dfe Teile Europas erfasste, ver\u00f6ffentlichte Hahnemann, mittlerweile \u00fcber siebzig Jahre alt und noch bevor die Seuche Deutschland in vollem Umfang erreichte, die Schrift <em>&bdquo;Sichere Heilung und Verh\u00fctung der orientalischen Cholera&ldquo;</em> \u2013 eine detaillierte Behandlungsanleitung, die vor allem den fr\u00fchzeitigen Einsatz von Camphora in der Anfangsphase empfahl, je nach weiterem Symptomverlauf erg\u00e4nzt durch Mittel wie Cuprum metallicum und Veratrum album.</p>
          <p class="vb-intro">Die dokumentierten Behandlungszahlen aus dieser Zeit sind eindr\u00fccklich: Im Hom\u00f6opathischen Spital Wien verzeichnete Dr. Wilhelm Fleischmann 1836 bei 732 Cholera-Erkrankten eine Sterblichkeitsrate von 33 Prozent (244 Todesf\u00e4lle) \u2013 in den \u00fcbrigen Wiener Krankenh\u00e4usern lag sie im selben Zeitraum bei 66 bis 70 Prozent. W\u00e4hrend der Epidemie von 1854 in Neapel behandelte Dr. Rocco Rubini im Hospital Reale Albergo dei Poveri 200 Cholera-Patienten nach Hahnemanns Anweisungen \u2013 kein einziger Patient starb. Im selben Jahr wurden bei einem Ausbruch unter Schweizer Soldaten in Neapel 166 Erkrankte im dortigen hom\u00f6opathischen Institut behandelt; alle 166 \u00fcberlebten, w\u00e4hrend von 17 Soldaten desselben Regiments, die in die regul\u00e4re Milit\u00e4rklinik eingeliefert wurden, 15 starben \u2013 eine Sterblichkeit von 88 Prozent. Und in London verzeichnete das dortige London Homeopathic Hospital w\u00e4hrend der Cholera-Epidemie von 1854 eine Sterblichkeitsrate von nur 16,4 Prozent, gegen\u00fcber 51,8 Prozent in den konventionell gef\u00fchrten Krankenh\u00e4usern der Stadt \u2013 Zahlen aus einem offiziellen Bericht an das London Board of Health, der bezeichnenderweise nicht in die ver\u00f6ffentlichte Endfassung des Ausschussberichts aufgenommen wurde. In der zusammengefassten Auswertung europ\u00e4ischer und amerikanischer hom\u00f6opathischer \u00c4rzte \u00fcber mehrere Epidemiewellen zwischen 1831 und 1854 lag die Sterblichkeitsrate hom\u00f6opathisch behandelter Patienten im Schnitt bei 7 bis 10 Prozent, w\u00e4hrend die allgemeine Sterblichkeit unter konventioneller Behandlung zwischen 40 und 60 Prozent verzeichnet wurde.</p>
          <p class="vb-intro">Diese historischen Zeugnisse trugen erheblich dazu bei, der jungen Hom\u00f6opathie in einer der gr\u00f6\u00dften Gesundheitskrisen des 19. Jahrhunderts \u00f6ffentliches Vertrauen zu verschaffen und ihre rasche Verbreitung in Europa und den USA zu bef\u00f6rdern. F\u00fcr die soziale Eins ist das die eigentliche Best\u00e4tigung: Nicht der abstrakte Systemstreit z\u00e4hlt, sondern die konkrete Bew\u00e4hrung im Ernstfall, wenn Menschenleben auf dem Spiel stehen. Hahnemann selbst verstand seine gesamte Arbeit als Dienst an einer leidenden Menschheit &ndash; eine Haltung, die dem ihm innewohnenden Prinzip der sozialen Eins zutiefst entsprach: Prinzipientreue, die sich nicht in der Theorie ersch\u00f6pft, sondern sich an der Wirkung im Leben der Kranken misst.</p>
        </blockquote>

        <h2 class="vb-section">8. Sp\u00e4ter Ruhm: Paris und die zweite Ehe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1835, im Alter von achtzig Jahren, heiratete Hahnemann die deutlich j\u00fcngere franz\u00f6sische Malerin M\u00e9lanie d'Hervilly und \u00fcbersiedelte mit ihr nach Paris. Was wie ein ungew\u00f6hnlicher Lebensabschnitt f\u00fcr einen Mann seines Alters wirkt, wurde zu einer der erfolgreichsten Phasen seines Wirkens: In Paris behandelte er bis zu seinem Tod eine gro\u00dfe, oft wohlhabende und einflussreiche Patientenschaft, unter ihnen Angeh\u00f6rige des Adels, und genoss endlich die gesellschaftliche Anerkennung, die ihm in Deutschland lange verwehrt geblieben war.</p>
          <p class="vb-intro">Am 2. Juli 1843 starb Samuel Hahnemann in Paris im Alter von 88 Jahren &ndash; ein f\u00fcr seine Zeit au\u00dfergew\u00f6hnlich hohes Lebensalter, das er selbst gern als lebenden Beweis f\u00fcr die Wirksamkeit seiner Methode anf\u00fchrte. Er wurde auf dem Friedhof P\u00e8re Lachaise beigesetzt, wo sein Grabmal auch heute noch von Anh\u00e4ngern der Hom\u00f6opathie aus aller Welt besucht wird.</p>
        </blockquote>

        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;justify-content:center;margin:1.2rem 0 0.4rem;">
          <img src="./assets/portraits/beruehmte-samuel-hahnemann-grab-1.jpg" alt="Hahnemanns Grabmal auf dem Friedhof P\u00e8re Lachaise, Paris" loading="lazy" style="width:140px;height:140px;object-fit:cover;border-radius:10px;border:2px solid #8b5e3c;box-shadow:0 3px 12px rgba(0,0,0,0.22);" />
          <img src="./assets/portraits/beruehmte-samuel-hahnemann-grab-2.jpg" alt="Hahnemanns Grabmal auf dem Friedhof P\u00e8re Lachaise, Paris" loading="lazy" style="width:140px;height:140px;object-fit:cover;border-radius:10px;border:2px solid #8b5e3c;box-shadow:0 3px 12px rgba(0,0,0,0.22);" />
          <img src="./assets/portraits/beruehmte-samuel-hahnemann-grab-3.jpg" alt="Hahnemanns Grabmal auf dem Friedhof P\u00e8re Lachaise, Paris" loading="lazy" style="width:140px;height:140px;object-fit:cover;border-radius:10px;border:2px solid #8b5e3c;box-shadow:0 3px 12px rgba(0,0,0,0.22);" />
        </div>
        <p style="text-align:center;font-size:0.8rem;color:var(--muted);margin:0 0 1.2rem;font-style:italic;">Das Grabmal Samuel Hahnemanns, Friedhof P\u00e8re Lachaise, Paris \u2013 eigene Aufnahmen von einem Besuch vor Ort.</p>

        <h2 class="vb-section">9. Verm\u00e4chtnis: Eine Heilkunde, die Millionen bis auf den heutigen Tag begleitet</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO1w9 ist die F\u00e4higkeit, aus tiefer Emp\u00f6rung \u00fcber ein fehlerhaftes System heraus geduldig und methodisch etwas grundlegend Neues aufzubauen &ndash; nicht im Affekt, sondern in jahrzehntelanger, akribischer Kleinarbeit. Was Hahnemann als einsamer Kritiker der &bdquo;heroischen Medizin&ldquo; seiner Zeit begann, ist heute ein weltweit praktiziertes Heilsystem: Nach Sch\u00e4tzungen der Weltgesundheitsorganisation nutzen mehrere hundert Millionen Menschen in \u00fcber achtzig L\u00e4ndern hom\u00f6opathische Mittel, in L\u00e4ndern wie Indien ist die Hom\u00f6opathie fester Bestandteil des offiziellen Gesundheitssystems, und auch in Deutschland, Frankreich und vielen weiteren L\u00e4ndern geh\u00f6rt sie seit Generationen zur gelebten Gesundheitskultur unz\u00e4hliger Familien.</p>
          <p class="vb-intro">Auch die aktuelle Forschung liefert Hinweise darauf, dass die Wirkung der Hom\u00f6opathie \u00fcber einen reinen Placebo-Effekt hinausgeht: Eine 2023 im Fachjournal <em>Systematic Reviews</em> ver\u00f6ffentlichte Meta-Synthese von Dr. Harald J. Hamre und seinem Team wertete s\u00e4mtliche bisherigen systematischen \u00dcbersichtsarbeiten zu placebokontrollierten Hom\u00f6opathie-Studien aus \u2013 in f\u00fcnf von sechs umfassenden Meta-Analysen zeigte sich ein statistisch signifikanter Vorteil hom\u00f6opathischer Behandlung gegen\u00fcber Placebo, der auch bei strenger Beschr\u00e4nkung auf methodisch hochwertige Studien in der Mehrheit der Analysen bestehen blieb. Bereits 1997 war Dr. Klaus Linde mit seinem Team in der renommierten Fachzeitschrift <em>The Lancet</em> zu einem \u00e4hnlichen Schluss gekommen: Ihre Auswertung von 89 klinischen Studien ergab, dass sich die beobachteten klinischen Wirkungen der Hom\u00f6opathie statistisch nicht allein durch den Placebo-Effekt erkl\u00e4ren lassen.</p>
          <p class="vb-intro">Sein bleibendes Verm\u00e4chtnis ist dabei mehr als die Summe seiner Arzneimittelbilder: Er stellte als einer der Ersten das Individuum mit seinem einzigartigen Symptombild in den Mittelpunkt der Behandlung, forderte eine sanfte, den K\u00f6rper nicht zus\u00e4tzlich schw\u00e4chende Medizin zu einer Zeit, in der Aderlass und Quecksilber als Standard galten, und begr\u00fcndete mit der systematischen Arzneimittelpr\u00fcfung am gesunden Menschen ein methodisches Vorgehen, das seiner Epoche weit voraus war. Die Gans, die einst allein gegen die etablierte \u00c4rzteschaft ihrer Zeit aufbegehrte, hat eine Formation hinterlassen, die bis heute Millionen von Menschen auf ihrem Weg zur Gesundheit begleitet &ndash; ein Verm\u00e4chtnis, dem sich auch dieser Kompass mit seinen hom\u00f6opathischen Empfehlungen zu jedem der 27 Subtypen ausdr\u00fccklich verpflichtet f\u00fchlt.</p>
        </blockquote>

      </div>
      <a class="book-tip" href="https://www.verlagshausrathmer.com/homoeopathie.html" target="_blank" rel="noopener">
        <span class="book-tip__icon">\ud83c\udf3f</span>
        <div class="book-tip__text">
          <strong>F\u00fcr Fachleute: \u00bbHom\u00f6opathie &amp; Naturheilkunde\u00ab</strong>
          <span>Fachb\u00fccher, Repertorien und Lehrmaterial f\u00fcr Hom\u00f6opathen und Heilpraktiker \u2013 die gesamte hom\u00f6opathische Fachliteratur im Verlagshaus Rathmer.</span>
        </div>
        <span class="book-tip__arrow">\u2192</span>
      </a>
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "Das weltweit umfangreichste hom\u00f6opathische Gem\u00fctsrepertorium \u2013 1568 Seiten, 20.000 Rubriken.", "Rathmer\u2019s Repertorium")}
      ${bookTip("der-kern-der-heilmittel-the-core-of-the-remedies-gebunden", "Das geistige Wesen der 500 wichtigsten hom\u00f6opathischen Arzneimittel \u2013 \u00fcber 8.500 Single-Rubriken.", "Der Kern der Heilmittel")}
      ${bookTip("enneagramm-homoeopathie-band-1", "Die Grundlage der Enneagramm-Hom\u00f6opathie \u2013 wie Pers\u00f6nlichkeitstyp und Heilmittelwahl zusammenh\u00e4ngen.", "Enneagramm-Hom\u00f6opathie \u2013 Band 1")}
      ${bookTip("enneagramm-homoeopathie-band-2", "Vertiefung und Erweiterung: Die 27 Subtypen und ihre individuellen hom\u00f6opathischen Heilmittel.", "Enneagramm-Hom\u00f6opathie \u2013 Band 2")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-enneagramm-aromatherapie", "9 Typen, 9 Urwunden, 9 Seelend\u00fcfte \u2013 Naturheilkunde im Enneagramm.", "Die Enneagramm-Aromatherapie")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      <div class="vb-section" style="max-width:100%;margin-top:1rem;">
        <h3 style="font-size:0.95rem;font-weight:700;margin:0 0 .6rem;color:var(--muted);">Fanartikel</h3>
        <a class="book-tip" href="https://www.redbubble.com/de/i/tasse/Samuel-Hahnemann-Begr%C3%BCnder-der-Hom%C3%B6opathie-%C3%84hnlichkeitsprinzip-von-DetlefRathmer/41189412/7yqg" target="_blank" rel="noopener sponsored">
          <span class="book-tip__icon">\u2615</span>
          <div class="book-tip__text">
            <strong>Samuel-Hahnemann-Tasse \u2013 \u00bbSimilia similibus curentur\u00ab</strong>
            <span>Das \u00c4hnlichkeitsprinzip der Hom\u00f6opathie auf einer sch\u00f6nen wei\u00dfen Tasse mit Hahnemann-Portr\u00e4t \u2013 bei Redbubble bestellen.</span>
          </div>
          <span class="book-tip__arrow">\u2192</span>
        </a>
        <a class="book-tip" href="https://www.redbubble.com/de/i/tasse/Ber%C3%BChmte-%C3%84rzte-Therapeuten-Psychologen-Enneagramm-von-DetlefRathmer/41318557/7yqg" target="_blank" rel="noopener sponsored">
          <span class="book-tip__icon">\u2615</span>
          <div class="book-tip__text">
            <strong>Tasse \u00bbBer\u00fchmte \u00c4rzte, Therapeuten, Psychologen\u00ab</strong>
            <span>Neun bedeutende Heiler des Enneagramms auf einer Tasse vereint \u2013 darunter Hahnemann selbst \u2013 bei Redbubble bestellen.</span>
          </div>
          <span class="book-tip__arrow">\u2192</span>
        </a>
      </div>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so1", label:"SO1 \u2013 Die Gans: Subtyp-Profil"},
        {route:"enneagramm-homoeopathie", label:"Enneagramm meets Hom\u00f6opathie \u2013 9 Praxisf\u00e4lle"},
        {route:"beruehmte-adam-smith", label:"Portr\u00e4t: Adam Smith (SO1w9)"},
        {route:"beruehmte-friedrich-merz", label:"Portr\u00e4t: Friedrich Merz (SO1w9)"},
        {route:"beruehmte-george-vithoulkas", label:"Portr\u00e4t: Prof. George Vithoulkas (SO3w4) \u2013 bedeutender Hom\u00f6opath des 20. Jahrhunderts"},
      ])}
    </div>
  `);
}

export function sundarPichaiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sundar-pichai-portrait.jpg" alt="Sundar Pichai – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sundar Pichai</p>
        <p class="krim-portrait-typ">SE6w5 &middot; Selbsterhaltender Typ 6 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">CEO von Google und Alphabet, geb. 1972 &ndash; Tierentsprechung: Kaninchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kaninchen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kaninchen</strong> ist das Tier des selbsterhaltenden Typs 6 &ndash; wachsam, liebenswert, anpassungsf\xe4hig. Es l\xe4uft nicht auf Konfrontation zu. Es h\xf6rt, bevor es sich bewegt. Es baut Netzwerke aus Vertrauen, kennt jeden Fluchtweg in seinem Revier &ndash; und bleibt genau dann ruhig, wenn andere in Panik geraten, weil es die Lage l\xe4ngst analysiert hat, bevor sie eskalierte.</p>
          <p class="vb-intro">Der indisch-amerikanische Manager Sundar Pichai ist seit 2015 CEO von Google und seit 2019 CEO von Alphabet &ndash; dem Konzern, zu dem Google geh\xf6rt. Er leitet eines der m\u00e4chtigsten Technologieunternehmen der Welt, ohne je laut zu werden. Kein Tweet, der provoziert. Keine Aussage, die spaltet. Kein Schritt, der nicht abgesichert ist. In einer Branche voller Egomanen ist Pichai das Kaninchen: immer pr\xe4sent, selten greifbar, \xfcberlebensf\xe4hig auf eine Art, die man erst versteht, wenn man genauer hinschaut.</p>
        </blockquote>

        <h2 class="vb-section">2. Die W\xe4rme: Sicherheit durch Zugeh\xf6rigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den selbsterhaltenden Typ 6 die <strong>W\xe4rme</strong> &ndash; weil dieser Subtyp Sicherheit nicht durch Regeln oder Konfrontation sucht, sondern durch menschliche N\xe4he. Die SE6 bindet sich an Menschen, Gruppen und Institutionen, denen sie vertrauen kann. Sie ist liebenswert, kollegial, verl\u00e4sslich &ndash; und dadurch unentbehrlich. Wer sich sicher f\xfchlt, weil er gebraucht wird, muss keine Angst haben, verlassen zu werden.</p>
          <p class="vb-intro">Pichai kam 2004 als Produktmanager zu Google &ndash; und blieb. Microsoft bot ihm die CEO-Position an. Twitter umwarb ihn. Er lehnte ab. Nicht weil Google das beste Angebot machte, sondern weil er dort Wurzeln geschlagen hatte. Der selbsterhaltende Sechser kennt dieses Gef\xfchl: Man verl\u00e4sst nicht, was man kennt und dem man vertraut. Das w\xe4re gef\xe4hrlicher als neue Wege zu gehen.</p>
          <p class="vb-intro">Seine F\xfchrungsqualit\xe4t gr\u00fcndet auf genau dieser Eigenschaft. Er ist bekannt daf\xfcr, zuzuh\xf6ren, bevor er entscheidet. Teams arbeiten gerne mit ihm &ndash; er dominiert keine Sitzung, er moderiert sie. Er ist der Mann, dem Ingenieure, Produktmanager und Investoren gleichzeitig vertrauen, weil er keiner Seite weh tut. Das ist W\xe4rme als Strategie: Sicherheit durch Unentbehrlichkeit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Stille Tiefe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> bringt dem selbsterhaltenden Sechser etwas, das man von au\u00dfen nicht sofort erkennt: analytische Tiefe, Introversion und die F\xe4higkeit, sich in Sachfragen zu vertiefen, bevor man spricht. Die SE6w5 redet nicht, um zu \xfcberzeugen. Sie h\xf6rt zu, um zu verstehen. Und wenn sie spricht, hat sie die Argumente bereits von mehreren Seiten durchdacht.</p>
          <p class="vb-intro">Pichai ist bekannt f\xfcr sein ph\xe4nomenales Ged\xe4chtnis. Mitarbeiter berichten, dass er sich Namen, Zahlen und Details aus Meetings Monate sp\xe4ter noch genau erinnert. Das ist kein Talent &ndash; das ist die SE6w5 in Aktion: permanente Informationsverarbeitung, weil Information Sicherheit bedeutet. Wer alles wei\u00df, kann von nichts \xfcberrascht werden.</p>
          <p class="vb-intro">Aufgewachsen in Madurai, Tamil Nadu, in einer Familie ohne gro\xdfes Verm\xf6gen &ndash; sein Vater schlief mit ihm als Kind auf dem Fu\xdfboden, bis die Familie sich Betten leisten konnte &ndash; hat Pichai diesen Antrieb fr\xfch entwickelt: Wissen ist der Weg nach oben. IIT Kharagpur, Stanford, Wharton &ndash; das MBA-Studium brach er ab, als Google ihn 2004 einstellte. Der F\xfcnferfl\xfcgel sagt: Wenn ich genug wei\u00df, bin ich sicher. Das Kaninchen nickt.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Chrome bis Gemini</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Pichais Karriere bei Google ist die Geschichte eines Mannes, der nie laut war &ndash; und trotzdem alles ver\xe4nderte. 2008 leitete er die Entwicklung von <strong>Google Chrome</strong>. Heute hat Chrome einen Marktanteil von \xfcber 60 Prozent unter den Browsern weltweit &ndash; ein Projekt, das intern als zu riskant galt und gegen das sich Teile des Managements stellten. Pichai setzte es durch. Still, beharrlich, mit Zahlen.</p>
          <p class="vb-intro">Danach: Chrome OS, Google Drive, Google Maps, die Neuausrichtung des Android-\xd6kosystems. 2015 ernannte ihn Larry Page zum CEO von Google &ndash; und 2019, als Alphabet als Holdingstruktur weiter ausgebaut wurde, r\xfcckte Pichai an die Spitze des gesamten Konzerns. Er ist heute der h\xf6chstbezahlte CEO eines der f\xfcnf wertvollsten Unternehmen der Welt.</p>
          <p class="vb-intro">Unter seiner F\xfchrung hat Google den KI-Wettbewerb mit <strong>Gemini</strong> (ehemals Bard) aufgenommen &ndash; sp\xe4t, hektisch, unter Druck durch ChatGPT. Pichai kommentierte den Moment ruhig. Intern, berichten Mitarbeiter, war der Druck enorm. Das ist die SE6w5 in der Krise: nach au\u00dfen ruhig, innen in h\xf6chster Alarmbereitschaft. Das Kaninchen l\xe4uft nicht sofort davon. Erst kalkuliert es s\xe4mtliche Risiken.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE6w5 ist ihre <strong>Zuverl\xe4ssigkeit</strong> &ndash; die F\xe4higkeit, in turbulenten Situationen der ruhende Pol zu sein. Pichai hat Google durch mehrere Krisen gef\xfchrt &ndash; politischen Gegenwind, Kartellverfahren, den KI-Umbruch &ndash; ohne je die Fassung zu verlieren. Mitarbeiter loben seine Zug\xe4nglichkeit, sein Zuh\xf6ren, seine Konstanz. Das ist die SE6w5 in ihrer besten Form: Stabilit\xe4t als F\xfchrungsqualit\xe4t.</p>
          <p class="vb-intro">Der Schatten: Im Januar 2023 entlie\xdf Alphabet rund <strong>12.000 Mitarbeiter</strong> &ndash; zw\xf6lf Prozent der Belegschaft, die gr\xf6\xdfte Massenentlassung in der Geschichte des Unternehmens. Pichai erk\xe4rte in einer E-Mail, er trage die Verantwortung pers\u00f6nlich. In demselben Gesch\xe4ftsjahr erhielt er eine Gesamtverg\xfctung von rund 226 Millionen Dollar. Das ist der Schatten der SE6w5: die W\xe4rme, die nach innen strahlt, kann nach au\u00dfen k\xfchl werden &ndash; wenn das System, dem man dient, es verlangt.</p>
          <p class="vb-intro">Die Leidenschaft der Sechs ist die <strong>Angst</strong> &ndash; und beim selbsterhaltenden Subtyp zeigt sie sich als chronische Absicherung. Pichai sichert sich ab: in Formulierungen, in Konsens, in der Vermeidung von Polarisierung. Das sch\xfctzt ihn. Es sch\xfctzt Google. Und manchmal verschleiert es, was wirklich entschieden wurde &ndash; und von wem.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Kaninchen, das bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Sundar Pichai ist verheiratet mit Anjali Pichai, die er w\xe4hrend seines Ingenieurstudiums am IIT Kharagpur kennenlernte &ndash; seiner Jugendliebe. Sie haben zwei Kinder. \xdcber sein Privatleben ist wenig bekannt; er spricht selten dar\xfcber. Das Kaninchen beh\xe4lt sein Revier f\xfcr sich.</p>
          <p class="vb-intro">Was bleibt, ist das Bild eines Mannes, der in einer der lautesten Branchen der Welt durch Stille gewann. Der nicht provozierte, sondern \xfcberzeugte. Der nicht dominierte, sondern Ausdauer zeigte. In einer Technologiewelt, die Gr\xfc\xdfenwahn belohnt, ist Sundar Pichai der Beweis, dass auch das Kaninchen \xfcberlebt &ndash; manchmal l\xe4nger als der L\xf6we, der neben ihm sitzt.</p>
          <p class="vb-intro">Das ist die SE6w5: Beharrlichkeit durch Vertrauen, Tiefe durch Zur\xfcckhaltung, Sicherheit durch Kompetenz. Und die stille Gewissheit, dass man nicht laut sein muss, um geh\xf6rt zu werden.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/se6", label:"SE6 \u2013 Das Kaninchen: Subtyp-Profil"},
        {route:"beruehmte-herbert-kickl", label:"Portr\xe4t: Herbert Kickl (SE6w5)"},
        {route:"beruehmte-malaika-mihambo", label:"Portr\xe4t: Malaika Mihambo (SE6w5)"},
      ])}
    </div>
  `);
}

export function trumanCapotePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-truman-capote-portrait.jpg" alt="Truman Capote" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Truman Capote</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Sozialer Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">1924&ndash;1984 &ndash; US-amerikanischer Schriftsteller, „In Cold Blood" (dt. „Kaltblütig") &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever, der jede Tür öffnete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; zugewandt, warmherzig, unwiderstehlich darauf aus, gebraucht und geliebt zu werden. Truman Capote, geboren 1924 in New Orleans, wuchs weitgehend von seinen Eltern verlassen bei Verwandten in Alabama auf &ndash; eine frühe Erfahrung des Nicht-Gewolltseins, die sich in ein lebenslanges, geradezu unstillbares Bedürfnis verwandelte, überall dazuzugehören und für jeden unentbehrlich zu sein.</p>
          <p class="vb-intro">Schon als junger Mann in New York schmeichelte er sich mit einer Mischung aus Witz, Charme und aufmerksamer Zuwendung in die exklusivsten Zirkel der Stadt ein &ndash; Verleger, Society-Damen, Filmstars. Der Golden Retriever wedelt sich nicht zufällig ins Herz einer Gesellschaft; er beobachtet genau, wen er wie für sich gewinnen kann, und Capote beherrschte dieses Spiel wie kaum ein Zweiter.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Zugehörigkeit als Lebensprojekt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> sucht Zugehörigkeit nicht in einer einzelnen Beziehung, sondern im größeren gesellschaftlichen Feld. Naranjo nannte diesen Subtyp <em>Ambition</em> &ndash; den Drang, durch Wirkung und Präsenz in der Gemeinschaft unentbehrlich zu werden. Bei Capote zeigte sich das in einem Netzwerk intensivster Freundschaften mit den sogenannten „Swans" &ndash; einer Gruppe wohlhabender, mächtiger New Yorker Gesellschaftsdamen wie Babe Paley, denen er sich als vertrautester Freund, Berater und Beichtvater andiente.</p>
          <p class="vb-intro">Diese Freundschaften waren keine oberflächliche Bekanntschaft. Capote hörte stundenlang zu, teilte intimste Geheimnisse, wurde zur emotionalen Stütze in Ehekrisen und Familiendramen &ndash; und wob sich damit tief in das Leben dieser Frauen ein. Der Golden Retriever geht nicht neben dem Rudel her, er wird selbst zu seinem Zentrum.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Der Schriftsteller als Ereignis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sozialen Zwei den Antrieb zur sichtbaren Wirkung, zum inszenierten Auftritt, zum Beweis durch öffentliches Bild. Bei Capote äußerte sich das in einem beispiellosen Talent zur Selbstvermarktung: schrille Kleidung, eine unverkennbare, oft nachgeahmte Sprechweise, provokante Fernsehauftritte. Sein <em>Black and White Ball</em> (wörtlich „Schwarz-Weiß-Ball", nach der strengen Kleiderordnung benannt) von 1966 im Plaza Hotel gilt bis heute als eine der legendärsten Society-Veranstaltungen des zwanzigsten Jahrhunderts &ndash; eine Party, die er selbst kuratierte, um genau zu zeigen, wie mächtig sein soziales Netzwerk geworden war.</p>
          <p class="vb-intro">Auch sein literarisches Meisterwerk trägt diese Handschrift: <em>In Cold Blood</em> (dt. „Kaltblütig", 1966) rekonstruiert minutiös den vierfachen Mord an der Farmerfamilie Clutter im ländlichen Kansas 1959 sowie Fahndung, Gerichtsverfahren und Hinrichtung der beiden Täter &ndash; ein Tatsachenroman, für den Capote Jahre damit verbrachte, sich in die Gemeinde des Tatorts und in eine intensive persönliche Beziehung zu einem der beiden verurteilten Mörder hineinzuarbeiten, eine Nähe, die weit über journalistische Recherche hinausging. Der Dreierflügel wollte nicht nur ein Buch schreiben, er wollte ein literarisches Ereignis erschaffen, das ihn selbst unsterblich machte &ndash; und mit dem „New Journalism" (der Verbindung journalistischer Fakten mit literarischen Erzähltechniken) schließlich eine ganze literarische Gattung.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w3 ist eine seltene Gabe des Zuhörens, gepaart mit der Fähigkeit, daraus große Kunst zu formen. Capotes <em>In Cold Blood</em> gilt bis heute als Meilenstein des literarischen Erzähljournalismus &ndash; ein Werk, das nur entstehen konnte, weil er Menschen wirklich nahekam, ihr Vertrauen gewann und ihre Geschichten mit echter Aufmerksamkeit erfasste.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die tiefe Überzeugung, unentbehrlich zu sein, und die Schwierigkeit, die eigene Bedürftigkeit dahinter zu erkennen. Bei Capote wurde daraus 1975 eine folgenschwere Grenzüberschreitung: Er veröffentlichte in Esquire das Kapitel „La Côte Basque 1965" aus seinem geplanten Roman <em>Answered Prayers</em> (dt. „Erhörte Gebete") &ndash; darin verarbeitete er, kaum verschlüsselt, die intimsten Geheimnisse genau jener „Swans", die ihm jahrelang blind vertraut hatten. Ehebrüche, Morde, Familiengeheimnisse &ndash; alles, was man ihm anvertraut hatte, goss er in literarische Form.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Verrat, der das Rudel zerbrach</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Reaktion war verheerend. Fast über Nacht verstießen ihn die „Swans" &ndash; Freundinnen von Jahrzehnten, denen er sich als treuester Vertrauter präsentiert hatte, sprachen nie wieder ein Wort mit ihm. Babe Paley, seine engste Freundin, verzieh ihm bis zu ihrem Tod 1978 nicht. Capote selbst zeigte sich ehrlich überrascht über die Konsequenzen &ndash; ein Muster, das für die soziale Zwei typisch ist: Wer glaubt, durch grenzenlose Hingabe unantastbar geworden zu sein, kann kaum begreifen, dass genau diese Hingabe auch verraten werden kann.</p>
          <p class="vb-intro">Der Verlust seines Rudels traf ihn ins Mark. Ohne die Zugehörigkeit, die sein gesamtes Leben getragen hatte, verfiel Capote zunehmend Alkohol und Tabletten, vollendete <em>Answered Prayers</em> nie und starb 1984 im Alter von 59 Jahren &ndash; ein Golden Retriever, der sein eigenes Rudel verloren hatte, weil er es für eine Geschichte geopfert hatte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Nähe, die Literatur wurde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Truman Capote hinterließ, lässt sich nicht auf einen einzelnen Skandal reduzieren. Er prägte mit dem New Journalism eine literarische Form, in der Fakten mit erzählerischer Kunstfertigkeit verschmelzen, und schrieb mit <em>In Cold Blood</em> eines der einflussreichsten Werke der amerikanischen Literatur des zwanzigsten Jahrhunderts.</p>
          <p class="vb-intro">Das ist die zwiespältige Gabe der SO2w3 in ihrer ungeschminktesten Form: eine Nähe zu Menschen, die tief genug ging, um daraus große Kunst zu schaffen &ndash; und die gleichzeitig so hungrig nach Wirkung war, dass sie diese Nähe am Ende selbst zerstörte. Der Golden Retriever, der ins Rudel wollte, weil er es liebte &ndash; und es verlor, weil er es zugleich brauchte, um bewundert zu werden.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-julius-caesar", label:"Porträt: Julius Caesar (SO2w3)"},
        {route:"beruehmte-eva-peron", label:"Porträt: Eva Perón (SO2w3)"},
        {route:"beruehmte-kamala-harris", label:"Porträt: Kamala Harris (SO2w3)"},
      ])}
    </div>
  `);
}

export function wilsonGonzalezOchsenknechtPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wilson-gonzalez-ochsenknecht-portrait.jpg" alt="Wilson Gonzalez Ochsenknecht – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wilson Gonzalez Ochsenknecht</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Deutscher Schauspieler &amp; Musiker, geb. 1990 &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Wesen, das sein Revier fest im engsten Familienverbund aufbaut und von dort aus in die Welt hinauswächst. Wilson Gonzalez Ochsenknecht trägt dieses Muster bereits im Namen: benannt nach der Soul-Legende Wilson Pickett, mit dem augenzwinkernden Zusatz Gonzalez als Verweis auf die Zeichentrickfigur Speedy Gonzales &ndash; ein Name, der von Anfang an von der Vorliebe und dem Humor seiner Eltern erzählt.</p>
          <p class="vb-intro">Der deutsche Schauspieler Wilson Gonzalez Ochsenknecht wurde am 18. März 1990 in München geboren, als ältester Sohn von Uwe und Natascha Ochsenknecht. Gemeinsam mit seinem zwei Jahre jüngeren Bruder Jimi Blue und der später geborenen Schwester Cheyenne wuchs er in einer Familie auf, in der Schauspiel und öffentliche Sichtbarkeit von Anfang an zum Alltag gehörten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Der erste Schritt gemeinsam mit dem Vater</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> nennt Naranjo <em>Me First</em>: Fürsorge richtet sich zuerst auf die eigene, konkrete Basis und den engsten Kreis, bevor sie sich nach außen wendet. Bei Wilson Gonzalez Ochsenknecht war dieser Kreis von Beginn an die eigene Familie: Mit zehn Jahren stand er erstmals gemeinsam mit seinem Vater Uwe und seinem Bruder Jimi Blue in Doris Dörries <em>Erleuchtung garantiert</em> vor der Kamera &ndash; der erste berufliche Schritt geschah nicht allein, sondern buchstäblich Seite an Seite mit den engsten Bezugspersonen.</p>
          <p class="vb-intro">Bekannt wurde er wenig später mit der Kinderfilmreihe <em>Die Wilden Kerle</em>, in der er gemeinsam mit Jimi Blue eine ganze Generation deutscher Kinogänger prägte. Dieses Prinzip setzt sich bis heute fort: Seit gut einem Jahr ist er selbst Vater, und nach eigener Aussage werden Drehs und Projekte inzwischen immer zuerst mit Blick auf seine Tochter geplant &ndash; „alles andere wird erst mal hintangestellt". Die engste familiäre Basis bleibt der Ausgangspunkt für jede berufliche Entscheidung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Vom Kinderstar zum Mehrfach-Künstler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Zwei den Antrieb, aus einer gesicherten Basis heraus sichtbaren, öffentlichkeitswirksamen Erfolg in mehreren Feldern aufzubauen. Zwischen 2006 und 2007 besuchte Wilson Gonzalez Ochsenknecht die California Art Academy in Los Angeles und sammelte dort neben dem Schauspiel auch erste Erfahrungen im Musikgeschäft; im Mai 2008 erschien mit <em>Cookie</em> sein erstes Album im Alternative-Pop-Rock-Genre.</p>
          <p class="vb-intro">Seither hat er sich über die reine Schauspielrolle hinaus zum Mehrfach-Künstler entwickelt: als Musiker, als Entwickler eigener Serienformate und 2025 mit der Hauptrolle in der ZDF-Sitcom <em>Späti</em> auch wieder verstärkt vor der Kamera. Der Dreierflügel fragt immer wieder: Wie baue ich aus dem, was ich kann, mehrere sichtbare Standbeine, statt mich auf eines zu beschränken?</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2w3 ist die Fähigkeit, aus einer kindlichen Karriere, die eng mit der eigenen Familie verwoben war, eine eigenständige, vielseitige künstlerische Identität zu entwickeln, ohne die familiäre Basis dabei zu verlieren. Wilson Gonzalez Ochsenknecht sagt selbst, dass durch die gemeinsame Reality-Doku <em>Diese Ochsenknechts</em> „ein positiveres Bild" der Familie entstanden sei &ndash; ein aktiver Beitrag zur eigenen Familienerzählung, statt sie anderen zu überlassen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, durch die eigene Fürsorge und den eigenen Einsatz unentbehrlich zu sein. Bei der SE2w3 kann dieser Stolz zur Notwendigkeit werden, mehrere Rollen gleichzeitig auszufüllen &ndash; Schauspieler, Musiker, Serienentwickler, Vater &ndash;, statt sich auf eine zu konzentrieren. Dass er inzwischen bewusst Prioritäten setzt und Projekte der eigenen Tochter unterordnet, zeigt eine reife Form dieses Musters: Fürsorge, die sich selbst begrenzt, statt sich zu verzetteln.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Eine Karriere, die mit der Familie beginnt und mit ihr weiterwächst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Wilson Gonzalez Ochsenknechts Weg lässt sich als durchgehende Linie lesen: der erste Filmauftritt gemeinsam mit Vater und Bruder, der Durchbruch mit <em>Die Wilden Kerle</em> an der Seite von Jimi Blue, die Rückkehr zur eigenen Familiengeschichte in der Reality-Doku, und heute die eigene Vaterschaft als neuer Fixpunkt aller beruflichen Entscheidungen.</p>
          <p class="vb-intro">Das Flusspferd baut sein Revier nicht allein, sondern gemeinsam mit dem eigenen Rudel aus, und lässt dieses Rudel dabei mitwachsen. Wilson Gonzalez Ochsenknechts Karriere vom Kinderstar zum Mehrfach-Künstler und Vater zeigt genau dieses Muster: Erfolg, der nie losgelöst von der Familie gedacht wird, sondern immer in Beziehung zu ihr.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Brüder-Parallele: Zwei Wege durch dieselbe Fixierung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><strong>Derselbe erste Schritt, zur selben Zeit:</strong> Bei den meisten Geschwistern mit ähnlichen Berufswegen liegt zwischen den jeweils ersten Erfolgen ein zeitlicher Abstand oder ein eigener, getrennter Weg zur Öffentlichkeit. Bei Wilson Gonzalez und seinem zwei Jahre jüngeren Bruder Jimi Blue Ochsenknecht (SE2w3) nicht: Beide standen im Jahr 2000 gemeinsam, vor derselben Kamera, mit demselben Vater zum ersten Mal in einem Film. Die eigene berufliche Identität entstand bei beiden nicht neben der Familie, sondern buchstäblich aus ihr heraus, am selben Ort, im selben Moment &ndash; ein Muster, das für die selbsterhaltende Zwei charakteristisch ist: Sicherheit und erste Sichtbarkeit werden nicht allein erobert, sondern im engsten Kreis gemeinsam betreten.</p>
          <p class="vb-intro"><strong>Zwei Standbeine, fast im gleichen Rhythmus:</strong> Auch der Dreierflügel zeigt sich bei beiden Brüdern in fast identischem Timing: Jimi Blue veröffentlichte 2007 sein Album <em>Mission Blue</em>, Wilson Gonzalez folgte 2008 mit <em>Cookie</em> &ndash; beide bauten sich, kaum ein Jahr auseinander, neben der Schauspielkarriere eine zweite, öffentlich sichtbare Bühne als Musiker auf, statt sich auf ein einziges Feld festzulegen. Wie sich dieses gemeinsame Grundmuster auch in Krisenphasen und in der gemeinsamen Familienbühne der Reality-Doku <em>Diese Ochsenknechts</em> fortsetzt, zeigt das Porträt von Jimi Blue Ochsenknecht (SE2w3).</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-jimi-blue-ochsenknecht", label:"Portrait: Jimi Blue Ochsenknecht (SE2w3) – Bruder"},
        {route:"beruehmte-uwe-ochsenknecht", label:"Portrait: Uwe Ochsenknecht (SX6w7) – Vater"},
        {route:"beruehmte-natascha-ochsenknecht", label:"Portrait: Natascha Ochsenknecht (SO8w7) – Mutter"},
        {route:"beruehmte-cheyenne-ochsenknecht", label:"Portrait: Cheyenne Ochsenknecht (SE3w4) – Schwester"},
      ])}
    </div>
  `);
}

export function takashiMurakamiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-takashi-murakami-portrait.jpg" alt="Takashi Murakami – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Takashi Murakami</p>
        <p class="krim-portrait-typ">SE7w8 &middot; Selbsterhaltender Typ 7 mit Achterfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Japanischer K\xfcnstler &amp; Unternehmer, geb. 1962 in Tokio &ndash; Tierentsprechung: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gorilla, der eine ganze Warenwelt um sich herum baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier des selbsterhaltenden Typs 7 &ndash; ein Tier von enormer Kraft, das im Verband lebt und dessen Reichweite sich \xfcber ein ganzes Territorium erstreckt. Takashi Murakami, 1962 in Tokio geboren, promovierte an der Tokyo University of the Arts in Nihonga, der traditionellen japanischen Malerei &ndash; einer streng reglementierten, jahrhundertealten Disziplin. Doch statt in dieser Tradition zu verharren, wandte er sich der japanischen Otaku- und Anime-Kultur zu und begr\xfcndete daraus die Kunstrichtung \xbbSuperflat\xab, die die Grenze zwischen hoher Kunst, Anime und Konsumgut bewusst einebnet.</p>
          <p class="vb-intro">2001 gr\xfcndete er die Firma Kaikai Kiki Co., ein regelrechtes Kunst-Produktionsstudio nach dem Vorbild von Andy Warhols \xbbFactory\xab, das inzwischen \xfcber hundert Mitarbeiter besch\xe4ftigt und neben Murakamis eigener Kunst auch Merchandise, Modekollaborationen und die Karrieren junger japanischer K\xfcnstler betreut. Der Gorilla, der sein Territorium nicht dem Zufall \xfcberl\xe4sst, sondern systematisch mit Fülle bef\xfcllt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die versteckte Acht: Eine Merchandise-Imperium als praktische Fülle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dieser Subtyp sichert sich, anders als die soziale oder sexuelle Sieben, nicht über ein geteiltes Wissenssystem oder eine einzelne intensive Bindung, sondern über konkreten, greifbaren Genuss und praktische Fülle im eigenen, unmittelbaren Umfeld &ndash; bei Murakami zeigt sich das in einem Imperium, das weit \xfcber Galerien und Museen hinausreicht: Plüschfiguren, Schl\xfcsselanh\xe4nger, Skateboards, Parfums und limitierte Sneaker-Editionen tragen seine wiederkehrenden Motive, allen voran die l\xe4chelnde Blume aus der Werkserie \xbbFlower of Life\xab.</p>
          <p class="vb-intro">2003 gestaltete er f\xfcr Louis Vuitton unter Kreativdirektor Marc Jacobs eine ganze Handtaschenkollektion mit bunten Monogramm-Motiven &ndash; eine der kommerziell erfolgreichsten Kollaborationen der Modegeschichte, die Murakami vom Kunstwelt-Insider zu einem global bekannten Namen machte. Die Fülle der selbsterhaltenden Sieben bleibt bei Murakami nicht abstrakt, sondern wird in Hunderte konkrete, k\xe4ufliche Produkte übersetzt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterflügel: Kompromisslose Kontrolle über das eigene Territorium</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Diese Durchsetzungskraft ist die Gabe des Achterfl\xfcgels an die selbsterhaltende Sieben – ohne ihn fehlte genau diese H\xe4rte. Murakami f\xfchrt Kaikai Kiki mit einer Strenge, die in Interviews und Medienberichten wiederholt als hart und fordernd beschrieben wurde &ndash; lange Arbeitszeiten, hohe Erwartungen an Pr\xe4zision, ein Studio, das nach eigenen strikten Regeln funktioniert. Der Gorilla, der sein Rudel nicht mit Sanftheit, sondern mit klaren, unnachgiebigen Strukturen zusammenh\xe4lt.</p>
          <p class="vb-intro">Auch sein \xf6ffentliches Auftreten als Kunsttheoretiker ist konfrontativ angelegt: Sein \xbbSuperflat\xab-Manifest von 2000 griff die etablierte westliche Kunstwelt direkt an, indem es deren Hierarchie zwischen \xbbhoher\xab und \xbbniedriger\xab Kunst als willk\xfcrliche, letztlich koloniale Setzung entlarvte &ndash; eine offensive, keine defensive Positionierung. Wo die Sieben ausweicht, wenn Widerstand entsteht, sucht die SE7w8 die Konfrontation, auch auf der Ebene der Kunsttheorie selbst.</p>
        </blockquote>

        <h2 class="vb-section">4. Von Kanye West bis zum Museum: Ein Territorium ohne Grenzen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2007 gestaltete Murakami das Albumcover von Kanye Wests \xbbGraduation\xab &ndash; ein weiterer Schritt in eine popkulturelle Sph\xe4re, die klassische Galeriek\xfcnstler traditionell meiden. Sp\xe4ter folgten Kollaborationen mit Pharrell Williams, Virgil Abloh und Billie Eilish. Gleichzeitig blieb Murakami im Hochkultur-Betrieb pr\xe4sent: gro\xdfe Einzelausstellungen im Brooklyn Museum, im Mori Art Museum Tokio und zahlreichen weiteren internationalen H\xe4usern.</p>
          <p class="vb-intro">2002 gr\xfcndete er zudem die Kunstmesse GEISAI, um jungen, unbekannten japanischen K\xfcnstlern eine Plattform ohne die \xfcblichen Galerie-Gatekeeper zu bieten &ndash; eine eigene, von ihm kontrollierte Infrastruktur, die zugleich F\xf6rderung und Territorialanspruch ist. Der Gorilla, der nicht nur sein eigenes Revier bef\xfcllt, sondern gleich ein ganzes \xd6kosystem um sich herum aufbaut.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Sieben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE7w8 zeigt sich in Murakamis F\xe4higkeit, aus der eigenen F\xfclle-Suche eine tragf\xe4hige Struktur zu schaffen, die Dutzenden Mitarbeitern und jungen K\xfcnstlern ein Auskommen bietet und zugleich die starre Trennung zwischen \xbbernster\xab Kunst und Populärkultur weltweit sichtbar aufgel\xf6st hat &ndash; ein Einfluss, der weit \xfcber die eigene K\xfcnstlerkarriere hinausreicht.</p>
          <p class="vb-intro">Der Schatten zeigt sich in wiederholten Berichten \xfcber die harten Arbeitsbedingungen bei Kaikai Kiki sowie in der Kritik, Murakami habe die eigene künstlerische Handschrift so konsequent in ein kommerzielles Franchise verwandelt, dass die Grenze zwischen Kunst und reiner Markenverwertung streckenweise vollst\xe4ndig verschwindet. Die kompromisslose Reviersicherung der Achterfl\xfcgel-Sieben zeigt sich hier nicht in Gewalt, sondern in einer Marktkontrolle, die keinen Bereich &ndash; von der Galerie bis zum Schl\xfcsselanh\xe4nger &ndash; ungenutzt l\xe4sst.</p>
        </blockquote>

        <h2 class="vb-section">6. Vermächtnis: Der Gorilla, der die Grenze zwischen Kunst und Ware einriss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Murakami bleibt bis heute aktiv &ndash; als K\xfcnstler, als Unternehmer, als F\xf6rderer einer ganzen Generation japanischer K\xfcnstler unter dem Dach seiner eigenen Firma. Sein Werk hat den globalen Kunstmarkt nachhaltig ver\xe4ndert: Die Vorstellung, dass ein K\xfcnstler gleichzeitig Museumsstar und Modelabel-Partner sein kann, ohne an k\xfcnstlerischer Glaubw\xfcrdigkeit zu verlieren, ist zu einem gro\xdfen Teil sein Verdienst.</p>
          <p class="vb-intro">Wie Francis Bacon (SE7w8, siehe <a href="javascript:void(0)" data-route="beruehmte-francis-bacon">Portr\xe4t</a>), der sein gesamtes Wissen in ein einziges, gro\xdfes Reformprojekt goss, verwandelte auch Murakami seine Fülle-Suche in ein Territorium, das weit \xfcber die eigene Person hinausreicht &ndash; nur dass sein Territorium keine Bibliothek, sondern ein globales Warenuniversum ist. Der Gorilla, der sein Revier so gr\xfcndlich bef\xfcllte, dass es l\xe4ngst die Grenzen der Kunstwelt selbst gesprengt hat.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/se7", label:"SE7 &ndash; Der Gorilla: Subtyp-Profil"},
        {route:"beruehmte-francis-bacon", label:"Portr\xe4t: Francis Bacon (SE7w8)"},
        {route:"beruehmte-christoph-kolumbus", label:"Portr\xe4t: Christoph Kolumbus (SE7w8)"},
        {route:"beruehmte-suzan-lori-parks", label:"Portr\xe4t: Suzan-Lori Parks (SE7w8)"},
      ])}
    </div>
  `);
}

export function alanWattsPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/alan-watts-portrait.jpg" alt="Alan Watts – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alan Watts</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Sozialer Typ 4 mit Dreierfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Britisch-amerikanischer Philosoph und spiritueller Lehrer, 1915–1973 – Tierentsprechung: G\xfcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\xfcrteltier, das seine Fassade wechselte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\xfcrteltier</strong> ist das Tier der sozialen Vier – es sucht die Gesellschaft, das Publikum, die B\xfchne, um daran das eigene Anderssein zu sch\xe4rfen, tr\xe4gt sein empfindsames Inneres dabei aber sichtbar nach au\xdfen. Alan Watts, 1915 im englischen Chislehurst geboren, entdeckte bereits mit elf Jahren \xfcber Fu-Manchu-Romane sein Interesse an China, trat mit f\xfcnfzehn der Buddhist Lodge in London bei und wurde mit siebzehn bereits Herausgeber von deren Zeitschrift „The Middle Way".</p>
          <p class="vb-intro">Doch statt geradlinig beim Buddhismus zu bleiben, studierte er Theologie und wurde 1945 anglikanischer Priester – eine Rolle, die er 1950 wieder verlie\xdf, um nach Kalifornien zu ziehen und sich der Vermittlung östlicher Philosophie zu widmen. Diese fr\xfche Kette an \xf6ffentlichen Rollenwechseln – Buddhist, Priester, dann Zen-Popularisierer – ist bereits die Blaupause f\xfcr sein gesamtes Leben: die stete Suche nach der Rolle, in der sich das eigene Anderssein am wirkungsvollsten zeigen l\xe4sst.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Andersartigkeit als \xf6ffentliche B\xfchne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> braucht die Gruppe, um sich an ihr zu reiben und die eigene Besonderheit sichtbar zu machen – Watts tat genau das, indem er sich zeitlebens zwischen den Welten bewegte: weder ganz Ost noch ganz West, weder akademischer Gelehrter noch Kirchenmann, weder Guru noch bloßer Entertainer, sondern etwas dazwischen, das es vorher so nicht gab. Er besetzte eine Nische, die er sich selbst schuf, und wurde darin zur unverwechselbaren Stimme f\xfcr eine ganze Generation.</p>
          <p class="vb-intro">Sein Wohnort ab Mitte der 1960er – abwechselnd ein Hausboot in Sausalito und eine H\xfctte am Mount Tamalpais – wurde zum Treffpunkt einer ganzen Gegenkultur-Szene: legend\xe4re Partys mit Timothy Leary, Allen Ginsberg und Gary Snyder fanden dort statt. Die Vier sucht nicht die Distanz zur Gemeinschaft, sondern deren N\xe4he, solange sie darin die eigene Einzigartigkeit best\xe4tigt findet.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\xfcgel: Der „philosophische Entertainer"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\xfcgel (w3)</strong> verleiht der Vier ein ausgepr\xe4gtes Gesp\xfcr f\xfcr Wirkung, Publikum und Vermarktung – das eigene innere Erleben wird nicht nur ausgedr\xfcckt, sondern bewusst in eine ansprechende, verk\xe4ufliche Form gebracht. Watts nannte sich selbst offen einen „philosophical entertainer" – kein Gelehrter, der Distanz zum Publikum h\xe4lt, sondern jemand, der komplexe \xf6stliche Philosophie durch Witz, Bilder und Paradoxien radiotauglich und massenkompatibel machte.</p>
          <p class="vb-intro">Seine jahrzehntelange Medienpr\xe4senz – die Radioreihe „The Great Books of Asia", sp\xe4ter die Fernsehserie „Eastern Wisdom and Modern Life" – zeigt genau diese Dreierfl\xfcgel-Signatur: \xf6ffentliche Sichtbarkeit als bewusst gepflegtes Instrument, nicht als Nebeneffekt. Kritiker warfen ihm sogar „spirituelles Marketing" vor – ein Vorwurf, der nur bei jemandem entsteht, der sein Image und dessen kommerzielles Potenzial genau im Blick hat.</p>
        </blockquote>

        <h2 class="vb-section">4. Zwischen \xf6ffentlichem Glanz und privatem Chaos</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">W\xe4hrend Watts \xf6ffentlich als gelassener Vermittler \xf6stlicher Weisheit auftrat, war sein Privatleben, wie es ein Beobachter formulierte, „turbulent, vielleicht eher chaotisch": zwei gescheiterte Ehen, eine dritte Ehe im Sog von Alkoholismus, hohe Unterhaltszahlungen, die ihn in seinen letzten Lebensjahren zu \xfcbermäßiger Arbeit und Tourneen zwangen. Dieser Kontrast zwischen makelloser \xf6ffentlicher Rolle und ungel\xf6ster privater Unruhe ist typisch f\xfcr die SO4w3: Das nach au\xdfen kultivierte Bild kann sich vom tats\xe4chlichen inneren Zustand weit entfernen, ohne dass dies dem \xf6ffentlichen Auftreten sofort anzusehen w\xe4re.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 ist die F\xe4higkeit, <strong>zutiefst pers\xf6nliches, existenzielles Suchen in eine breit zug\xe4ngliche, wirkungsvolle Form zu \xfcbersetzen</strong> – Watts machte komplexe \xf6stliche Konzepte einer ganzen Generation zug\xe4nglich, ohne sie zu verflachen, und pr\xe4gte damit ma\xdfgeblich, wie der Westen bis heute \xfcber Zen, Tao und Meditation spricht.</p>
          <p class="vb-intro">Der Schatten zeigte sich in genau jener Kluft zwischen \xf6ffentlichem Image und privatem Zustand: Ein Mann, der anderen half, Gelassenheit zu finden, rang selbst zeitlebens mit Alkohol, gescheiterten Beziehungen und finanziellem Druck. Die Dreierfl\xfcgel-Gefahr der SO4 liegt genau hier – die perfektionierte \xf6ffentliche Rolle kann so viel Energie binden, dass die private Wirklichkeit dahinter unbearbeitet bleibt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Auftritt, der l\xe4nger nachhallte als das Leben dahinter</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Alan Watts starb 1973 im Alter von 58 Jahren in Marin County, Kalifornien. Seine Radiovortr\xe4ge werden bis heute millionenfach gestreamt, seine B\xfccher weiterhin gelesen – seine \xf6ffentliche Stimme hat sein tats\xe4chliches Leben in gewisser Weise \xfcberdauert.</p>
          <p class="vb-intro">Wer wissen will, wie eine soziale Vier mit Dreierfl\xfcgel ihre eigene Zerrissenheit in eine Bühne verwandelt, auf der Millionen Menschen etwas über sich selbst lernen – findet in Watts’ Lebenslauf die Blaupause dafür, und zugleich die Warnung, dass die perfekt inszenierte Rolle die eigene Unruhe dahinter nicht automatisch auflöst.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 – Das G\xfcrteltier: Subtyp-Profil"},
        {route:"beruehmte-cat-stevens", label:"Portr\xe4t: Cat Stevens / Yusuf Islam (SO4w3) – ebenfalls eine radikale spirituelle Neuerfindung"},
        {route:"beruehmte-hans-christian-andersen", label:"Portr\xe4t: Hans Christian Andersen (SO4w3)"},
        {route:"beruehmte-heinrich-heine", label:"Portr\xe4t: Heinrich Heine (SO4w3)"},
      ])}
    </div>
  `);
}

export function bastianSchweinsteigerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bastian-schweinsteiger-portrait.jpg" alt="Bastian Schweinsteiger – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bastian Schweinsteiger</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Sozialer Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Fußballer, geb. 1984 &ndash; Tierentsprechung: Büffel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Büffel, der nie allein lief</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Büffel</strong> ist das Tier des sozialen Typs 9 – ein Tier, das nicht als Einzeltier auftritt, sondern seine Kraft aus der Herde bezieht, mit der es verschmilzt. Bastian Schweinsteiger wurde über zwei Jahrzehnte zum Inbegriff dieses Musters: Mittelfeldspieler des FC Bayern München, Kapitän der deutschen Nationalmannschaft, Weltmeister 2014 – und dabei über die gesamte Karriere hinweg jemand, der auffällig selten über sich selbst sprach, fast immer über die Mannschaft.</p>
          <p class="vb-intro">Das Bild, das von ihm bleibt, ist kein Solo-Moment. Es ist das eines blutüberströmten Gesichts im WM-Finale 2014 gegen Argentinien – verletzt, weitergespielt, bis der Pokal in der Hand der ganzen Mannschaft lag, nicht in seiner allein.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Neun: Identität durch Zugehörigkeit, nicht durch die einzelne Person</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte diesen Subtyp den der <strong>›Teilhabe‹</strong>: Das eigene Selbst tritt nicht als Einzelperson auf, sondern verschmilzt mit einer Gruppe, einer Idee, einer größeren Sache. Bei Schweinsteiger zeigte sich das in einer über die gesamte Karriere bemerkenswert konstanten Bescheidenheit gegenüber dem eigenen Star-Status – trotz Weltklasse-Niveau, trotz Kapitänsbinde, trotz eines Champions-League-Titels 2013, sprach er in Interviews fast durchgängig von „wir", selten von „ich".</p>
          <p class="vb-intro">Diese Grundhaltung teilt er mit Tom Hanks (ebenfalls SO9w1), dessen legendäre Angewohnheit, die Namen aller Crewmitglieder am Set zu lernen, exakt dasselbe Prinzip zeigt: Die eigene Bedeutung entsteht nicht aus dem Star-Status, sondern aus dem reibungslosen Aufgehen im gemeinsamen Ganzen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Disziplin und Prinzipientreue statt bloßer Anpassung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel</strong> verleiht der sozialen Neun eine zusätzliche Note von Disziplin, Ordnungssinn und einem inneren Anspruch an das eigene Spiel, die über bloßes Mitschwimmen hinausgeht. Schweinsteigers akribische Trainingsdisziplin, sein taktisches Verständnis im Mittelfeld und sein Ruf als „Musterprofi" – trotz jahrelanger Verletzungsprobleme, die er konsequent durchtrainierte, statt aufzugeben – zeigen diesen Einser-Anteil deutlich.</p>
          <p class="vb-intro">Ohne den Flügel bliebe die Neun eher ein reines Aufgehen in der Gruppe. Mit dem Einserflügel kommt ein zusätzlicher, innerer Maßstab hinzu: nicht nur dazugehören, sondern es auch richtig machen – ein Motiv, das sich durch seine gesamte, ungewöhnlich lange Karriere auf höchstem Niveau zieht.</p>
        </blockquote>

        <h2 class="vb-section">4. Ruhige Führung, der die Mannschaft folgte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als Kapitän führte Schweinsteiger nie durch Lautstärke oder demonstrative Ansagen. Weggefährten und Trainer beschrieben ihn wiederholt als ruhenden Pol in der Kabine – jemand, der durch Präsenz und Verlässlichkeit wirkte, nicht durch Dominanz. Genau dieses Muster beschreibt der Lebensmusterkompass bei Ronald Reagan: „Der Büffel führt nicht durch Befehl, sondern durch Bewegung: Wenn er läuft, läuft die Herde mit."</p>
          <p class="vb-intro">Auch die 2010 begonnene Wandlung vom offensiven Flügelspieler zum zentralen Mittelfeldregisseur unter Louis van Gaal vollzog sich ohne öffentliches Drama – eine stille Anpassung an die Bedürfnisse der Mannschaft, die seine Karriere erst auf ihren Höhepunkt brachte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO9w1 zeigt sich in Schweinsteigers Fähigkeit, eine ganze Mannschaft über Jahre zusammenzuhalten, ohne sich selbst in den Mittelpunkt zu stellen – eine seltene Konstante in einem Sport, der Einzelkönner oft über das Kollektiv stellt.</p>
          <p class="vb-intro">Der Schatten zeigt sich darin, wie lange er körperliche Warnsignale schweigend ertrug: Über Jahre spielte er mit chronischen Knie- und Sprunggelenksproblemen weiter, bis der Körper 2015/16 zunehmend Tribut forderte – ein geduldiges Tragen der Last, wie es der Kompass bei Nick Leeson und Willy Brandt beschreibt, nur hier in sportlicher statt politischer Form.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Büffel, der die Herde nie verließ</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bastian Schweinsteigers Karriere zeigt die soziale Neun mit Einserflügel in ihrer erfolgreichsten Form: ein Spieler von Weltklasse, dessen größte Stärke nie die eigene Bühne war, sondern das Ganze, dem er diente. Der Büffel brüllt nicht – er trägt die Herde, bis sie gemeinsam ankommt.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/so9", label:"SO9 – Der Büffel: Subtyp-Profil"},
          {route:"beruehmte-tom-hanks", label:"Porträt: Tom Hanks (SO9w1) – ebenfalls SO9w1"},
        ])}
      </div>
    </div>
  `);
}

export function virgilVanDijkPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-virgil-van-dijk-portrait.jpg" alt="Virgil van Dijk – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Virgil van Dijk</p>
        <p class="krim-portrait-typ">SO3w2 &middot; Sozialer Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Fußballprofi, Kapitän von Liverpool FC und der niederländischen Nationalmannschaft, geb. 1991 &ndash; Tierentsprechung: Gepard</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gepard, der fast nicht mehr aufwachte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gepard</strong> beweist seine Stärke erst, wenn die Bedrohung real war. Virgil van Dijk, 1991 in Breda geboren, wurde als junger Spieler von mehreren niederländischen Vereinen wegen körperlicher Zweifel abgelehnt, bevor er über die Jugendakademien von Willem II und FC Groningen den Weg ins Profigeschäft fand. Mit 20 Jahren, noch bei Groningen, erkrankte er nach einem Ligaspiel an einer zunächst verkannten Blinddarmentzündung, die sich zu einer lebensbedrohlichen Bauchfellentzündung mit Nierenversagen auswuchs – er verlor über zwölf Kilogramm, verbrachte fast zwei Wochen im Krankenhaus und unterschrieb während der Behandlung ein Testament.</p>
          <p class="vb-intro">Sein damaliger Jugendtrainer Dick Lukkien sieht in dieser Erfahrung bis heute den Auslöser für die Mentalität, die van Dijk später zum Champions-League-Sieger und Ballon-d'Or-Kandidaten machte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Drei: Der teuerste Verteidiger der Welt als Kapitän zweier Nationen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Drei (SO3)</strong> sucht nach Naranjo Ansehen dort, wo Erfolg öffentlich messbar ist – und kaum ein Bereich im Fußball macht Wert so unmittelbar sichtbar wie ein Transferrekord. 2018 wechselte van Dijk für rund 84,5 Millionen Euro zum FC Liverpool – zu diesem Zeitpunkt die höchste je für einen Verteidiger gezahlte Ablösesumme. Statt sich mit der reinen Ablösesumme zu begnügen, übernahm er 2023 die Kapitänsbinde bei Liverpool und führte die Mannschaft 2024/25 zur 20. englischen Meisterschaft; bereits 2018 war er zum Kapitän der niederländischen Nationalmannschaft ernannt worden, die er 2024 bis ins EM-Halbfinale führte.</p>
          <p class="vb-intro">Sichtbare Führung ist bei van Dijk kein Nebeneffekt, sondern erklärtes Prinzip: Er beschreibt Körpersprache selbst als „eine der ersten Botschaften, die ein Kapitän auf dem Platz sendet" – Ruhe wird bewusst als Führungsinstrument eingesetzt, nicht zufällig gelebt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Die Frau, die schon vor dem Ruhm da war</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel</strong> verleiht der sozialen Drei eine persönliche, beziehungsorientierte Note – Status wird nicht isoliert verfolgt, sondern eingebettet in enge, verlässliche Bindungen. Van Dijks Ehefrau Rike Nooitgedagt, seine Partnerin bereits aus Jugendtagen in Breda, gab ihre eigene Karriere als Fashion-Sales-Managerin auf, um mit ihm nach Glasgow zu ziehen, als er zu Celtic wechselte – lange bevor Ruhm oder Geld absehbar waren.</p>
          <p class="vb-intro">Van Dijk selbst beschreibt seine Familie – Rike und die vier gemeinsamen Kinder – als das, was ihm „Balance und Perspektive" gebe, weil „das Leben viel größer ist als Fußball." Auf dem Platz zeigt sich derselbe Zug in seiner ununterbrochenen Kommunikation mit Mitspielern: ständige Anweisungen, Ermutigung, das bewusste Zusammenhalten der Formation – Führung, die sich um andere kümmert, statt nur die eigene Position zu sichern.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Vom Beinahe-Ausscheiden zur Weltklasse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von Groningen über Celtic Glasgow bis zum Rekordwechsel zu Liverpool zieht sich eine durchgehende Aufwärtslinie: Champions-League-Sieg 2019, Premier-League-Meisterschaft mit Vereinsrekord von 99 Punkten 2019/20, die Kapitänsbinde bei Klub und Nationalmannschaft. Van Dijk selbst fasst seinen Weg so zusammen: „Meine Mentalität kommt aus dem, was ich über die Jahre erlebt habe. Ich habe für jeden Schritt hart gearbeitet. Ich hatte nie einen leichten Weg dorthin."</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Drei mit Zweierflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO3w2 zeigt sich bei van Dijk in einer Führungsqualität, die Status und Fürsorge nicht gegeneinander ausspielt: Der sichtbarste Verteidiger seiner Generation ist zugleich derjenige, der seine Mitspieler durch ständige verbale Unterstützung durch das Spiel trägt. Kritiker wie Ruud Gullit und Marco van Basten warfen ihm zeitweise vor, zu „arrogant" oder „zu entspannt" zu wirken – worauf van Dijk öffentlich reagierte, ohne seine Ruhe zu verlieren.</p>
          <p class="vb-intro">Der Schatten der Drei zeigt sich in der Notwendigkeit, Erfolg dauerhaft messbar zu halten – Transferrekord, Trophäensammlung, Kapitänsbinde bei zwei Mannschaften gleichzeitig. Der Zweierflügel mildert das, indem er Erfolg nie losgelöst von den Menschen sucht, die ihn tragen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Gepard, der die Herde nie aus den Augen verlor</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Virgil van Dijks Weg zeigt die soziale Drei mit Zweierflügel in einer besonders eindrücklichen Form: sichtbarer, messbarer Erfolg auf der größten Bühne des Weltfußballs, getragen von einer Frau, die vor dem Ruhm da war, und einer Führung, die sich nie nur um die eigene Position kümmert. Der Gepard jagt am schnellsten, wenn er weiß, dass das Rudel hinter ihm steht.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/so3", label:"SO3 – Der Gepard: Subtyp-Profil"},
          {route:"beruehmte-cristiano-ronaldo", label:"Porträt: Cristiano Ronaldo (SO3w2) – ebenfalls Weltklasse-Fußballer, derselbe Subtyp"},
          {route:"beruehmte-christiaan-barnard", label:"Porträt: Dr. Christiaan Barnard (SO3w2)"},
          {route:"beruehmte-will-yun-lee", label:"Porträt: Will Yun Lee (SO3w2)"},
          {route:"beruehmte-leon-goretzka", label:"Porträt: Leon Goretzka (SO3w4) – ebenfalls Fußballprofi"},
        ])}
      </div>
    </div>
  `);
}

export function haraldVPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-harald-v-portrait.jpg" alt="König Harald V." class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">König Harald V.</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">König von Norwegen 1991–2026, 1937–2026 – Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins – ein Tier, das seinen Posten nicht verlässt, keine Bühne braucht und keine Zustimmung sucht. Harald wurde 1937 als Sohn von Kronprinz Olav und Prinzessin Märtha auf dem Gut Skaugum geboren. Als die deutsche Wehrmacht 1940 Norwegen besetzte, floh die königliche Familie – die Kindheitsjahre verbrachte er im Exil in Schweden und den USA, unter anderem in Washington, wo er 1945 hinter Franklin D. Roosevelt bei dessen vierter Amtseinführung stand.</p>
          <p class="vb-intro">1957 starb sein Großvater König Haakon VII., und Harald wurde mit zwanzig Jahren Kronprinz. Er studierte an der Militärakademie und am Balliol College in Oxford Geschichte, Wirtschaft und Politik. Als sein Vater am 17. Januar 1991 starb, bestieg er den Thron – der erste in Norwegen geborene Monarch seit 1387. Fünfunddreißig Jahre lang blieb er auf diesem Posten, bis zu seinem Tod am 28. August 2026 im Alter von 89 Jahren.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Der Eid, der nicht verhandelbar war</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> trägt ihren Perfektionsanspruch nicht nach außen, sondern nach innen – Naranjo nannte diesen Subtyp <em>Worry</em>, Besorgnis: die ständige innere Frage, ob man der eigenen Aufgabe wirklich gerecht wird. Bei Harald V. zeigte sich das in einer Konsequenz, die selbst für einen Monarchen ungewöhnlich war: Trotz Blasenkrebs (2003), zweier Herzoperationen (2005 und 2020), mehrerer Beinoperationen, wiederholter Atemwegsinfekte, zweimaliger Covid-Erkrankung und eines dauerhaften Herzschrittmachers (2024) dachte er nie ernsthaft an Abdankung. Auf die Frage der Presse antwortete er sinngemäß, er stehe zu seinem Verfassungseid – auf Lebenszeit.</p>
          <p class="vb-intro">Genau das ist die SE1: keine öffentlich zur Schau gestellte Pflichterfüllung, sondern eine private, innerlich getragene Verpflichtung, die auch dann gilt, wenn niemand sie einfordert. Der eigene Körper wurde zur Nebensache, solange der Eid noch zu halten war.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Neun Jahre warten, ohne zu kämpfen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> gibt der selbsterhaltenden Eins etwas, das eine SE1 mit schwächer ausgeprägtem Neunerflügel nicht in demselben Maß hätte: die Fähigkeit, an einer als richtig erkannten Entscheidung ruhig, ohne Eskalation, aber auch ohne Nachgeben festzuhalten. Harald lernte die Bürgerliche Sonja Haraldsen 1959 kennen. Sein Vater lehnte eine Verbindung mit einer Nicht-Adligen zunächst entschieden ab. Es folgten neun Jahre – kein offener Bruch, kein Skandal, sondern ein stilles, unbewegliches Beharren, bis Harald 1968 erklärte, er werde entweder Sonja heiraten oder gar nicht. Sein Vater gab nach.</p>
          <p class="vb-intro">Dieselbe Qualität trug seine fast sechzig Jahre währende Segelleidenschaft: drei Olympia-Teilnahmen (1964, 1968, 1972), WM-Gold 1987, WM-Bronze 1988, Gründungspräsident des norwegischen Segelverbands, aktiv bis 2022. Kein lauter Sport, sondern eine einzige, über ein ganzes Leben gepflegte, ruhige Disziplin – der Neunerflügel braucht seinen Anker, und er fand ihn auf dem Wasser.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn als stille Beharrlichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins heißt <strong>Zorn</strong> – bei der SE1w9 nicht als sichtbare Härte, sondern als unerbittliche innere Disziplin, die niemand von außen bemerkt. Bei Harald V. äußerte sich das gerade nicht in Strenge, sondern im Gegenteil: Er wurde als „Großvater der Nation" geliebt, mit ruhigem Humor und beruhigender Präsenz bei der Neujahrssturmflut 1992, den Anschlägen von Utøya 2011 und der Corona-Pandemie. Der Zorn der Eins richtete sich nach innen, gegen die eigene Nachlässigkeit – nicht gegen andere.</p>
          <p class="vb-intro">Am deutlichsten zeigt sich dieses Muster in seiner Jubiläumsrede von 2016: „Norweger sind Mädchen, die Mädchen lieben, Jungen, die Jungen lieben … Norweger glauben an Gott, Allah, das Universum und nichts." Keine Anklage, keine Konfrontation – sondern der stille moralische Anspruch der Eins, das Richtige zu benennen, getragen vom Neunerflügel in einer Form, die niemanden ausschloss.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist eine Beständigkeit, die über Jahrzehnte trägt, ohne sich in den Vordergrund zu drängen. Harald V. hielt fünfunddreißig Jahre lang die Mitte eines Landes, das sich um ihn herum wandelte – Ölboom, EU-Debatten, gesellschaftliche Öffnung, Pandemie –, ohne je selbst zum Streitpunkt zu werden. Als am Tag seines Todes rund 10.000 Menschen mit Blumen und Fahnen an den Straßen Oslos standen, zeigte sich, wie tief diese stille Verlässlichkeit gewirkt hatte.</p>
          <p class="vb-intro">Der Schatten der SE1w9 liegt darin, dass die innere Pflichterfüllung auch dann weitergeht, wenn der Körper längst nach Ruhe verlangt. Harald V. hätte spätestens nach dem zweiten Herzeingriff 2020 zurücktreten können, wie es andere europäische Monarchen taten. Er tat es nicht. Der Adler blieb auf seinem Felsen, bis es keine andere Möglichkeit mehr gab.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Adler, der seinen Posten nie verließ</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">König Harald V. verkörperte die selbsterhaltende Eins mit Neunerflügel in einer Form, die auffällige Parallelen zu <a href="#beruehmte-queen-elizabeth-ii">Queen Elizabeth II. (SE1w9)</a> aufweist: ein Amt auf Lebenszeit, das bis zum letzten Atemzug ausgefüllt wurde; eine öffentliche Zurückhaltung, die nie als Kälte, sondern als Verlässlichkeit gedeutet wurde; ein privater Anker – bei Elizabeth die Corgis und Balmoral, bei Harald der Segelsport und die neun geduldig durchgehaltenen Jahre bis zur eigenen Eheschließung.</p>
          <p class="vb-intro">Nach 35 Jahren auf dem Thron folgte ihm sein Sohn Haakon als König nach. Der Adler hat seinen Felsen verlassen – aber die Verlässlichkeit, für die er stand, bleibt das, woran sich ein ganzes Land noch lange erinnern wird.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Adler: Subtyp-Profil"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Porträt: Queen Elizabeth II. (SE1w9)"},
        {route:"beruehmte-sting", label:"Porträt: Sting (SE1w9)"},
        {route:"beruehmte-reinhold-messner", label:"Porträt: Reinhold Messner (SE1w9)"},
      ])}
    </div>
  `);
}

export function ninaDobrevPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nina-dobrev-portrait.jpg" alt="Nina Dobrev – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nina Dobrev</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Sozialer Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, geb. 1989 &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever, der ein ganzes Set zusammenhielt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei: warm, unwiderstehlich darauf ausgerichtet, ein ganzes Umfeld für sich zu gewinnen. Nina Dobrev wurde 1989 in Sofia, Bulgarien, geboren und wanderte im Alter von zwei Jahren mit ihrer Familie nach Kanada aus, wo sie in Toronto aufwuchs. Ihren Durchbruch hatte sie 2009 als Elena Gilbert – und in einer Doppelrolle als Katherine Pierce – in ›The Vampire Diaries‹.</p>
          <p class="vb-intro">Schon während der sechs Jahre am Set wurde sie öffentlich als eine der zugänglichsten, wärmsten Figuren ihrer Generation in Hollywood beschrieben – jemand, der sich mit Fans, Kolleginnen und Kollegen gleichermaßen tief verbunden fühlte. Der Golden Retriever sucht nicht die eine exklusive Bindung, sondern die Wärme eines ganzen Kreises.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Unentbehrlich für die Gruppe, nicht für eine Person</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> sucht Bedeutung nicht in einer einzelnen, exklusiven Beziehung, sondern in ihrer Unentbehrlichkeit für ein größeres Kollektiv. Naranjo nannte diesen Subtyp <em>Ambition</em>: den Antrieb, sich über den Nutzen für eine ganze Gruppe unverzichtbar zu machen. Als ihre reale Beziehung mit Co-Star Ian Somerhalder während der laufenden Produktion endete, gelang es Dobrev, die professionelle Zusammenarbeit und die Chemie vor der Kamera ohne sichtbare Verwerfungen fortzusetzen – eine Loyalität gegenüber dem gesamten Ensemble und der Produktion, die über die private Enttäuschung gestellt wurde.</p>
          <p class="vb-intro">Auch ihr öffentliches Bild ist geprägt von einem auffällig großen, eng verbundenen Freundeskreis aus der Filmbranche, mit dem sie regelmäßig öffentlich sichtbare gemeinsame Unternehmungen teilt. Die soziale Zwei fühlt sich am stärksten dort, wo sie für eine ganze Gemeinschaft spürbar wichtig ist – nicht in stiller Zweisamkeit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Sichtbarer Erfolg als Bestätigung der eigenen Bedeutung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sozialen Zwei eine zielgerichtete, erfolgsorientierte Note. Dobrev verließ ›The Vampire Diaries‹ 2015 nach der sechsten Staffel bewusst auf dem Höhepunkt der Serie, um sich neuen Projekten und einer Filmkarriere zuzuwenden, statt sich mit einer bereits etablierten Rolle zufriedenzugeben. Über die Schauspielerei hinaus investierte sie in mehrere Unternehmen, unter anderem in die Modemarke Represent, und baute sich so ein zweites, unternehmerisches Standbein auf.</p>
          <p class="vb-intro">Diese Verbindung aus Fürsorge für die Gruppe und sichtbarem, messbarem Erfolg ist typisch für die SO2w3: Bedeutung entsteht nicht nur durch emotionale Nähe, sondern auch durch nach außen erkennbare Leistung, die die eigene Unentbehrlichkeit zusätzlich untermauert.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Stolz als Bedürfnis, für alle wichtig zu sein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Zwei heißt <strong>Stolz</strong> – die Überzeugung, für das Gelingen des Ganzen unentbehrlich zu sein. Bei Dobrev zeigt sich das in ihrem intensiven, öffentlich sichtbaren Engagement für ihre Fangemeinde: Sie gilt als eine der zugänglichsten Prominenten in den sozialen Medien, die regelmäßig direkt mit Followern interagiert, statt Distanz zu wahren.</p>
          <p class="vb-intro">Dieser Stolz zeigt sich nicht als Arroganz, sondern als tief verankertes Bedürfnis, für möglichst viele Menschen gleichzeitig spürbar präsent und wichtig zu sein – ein Antrieb, der Wärme erzeugt, aber auch kaum Pausen von der ständigen Verfügbarkeit für andere zulässt.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Krise als Spiegel: Verletzlichkeit öffentlich geteilt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2022 erlitt Dobrev bei einem Dirtbike-Unfall Brüche an der Wirbelsäule. Statt sich zur Genesung zurückzuziehen, dokumentierte sie den Heilungsprozess offen in den sozialen Medien – mit Fotos aus dem Krankenhaus, ehrlichen Beschreibungen der Rückschläge und durchgehend positivem, dankbarem Ton gegenüber ihrer Community.</p>
          <p class="vb-intro">Aus Enneagramm-Perspektive ist das keine bloße Offenheit, sondern die Konsequenz des Musters: Für die soziale Zwei bleibt auch die eigene Verletzlichkeit ein Anlass, die Verbindung zur Gruppe zu vertiefen, statt sich aus ihr zurückzuziehen – selbst im Krankenbett bleibt die Gemeinschaft der Bezugspunkt.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Wärme, die eine ganze Fangemeinde trug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nina Dobrev bleibt eine der Schauspielerinnen, deren größte Stärke nicht allein im schauspielerischen Handwerk liegt, sondern in der Fähigkeit, ein ganzes Ensemble, eine Fangemeinde und ein berufliches Netzwerk gleichzeitig emotional zu tragen. Von ›The Vampire Diaries‹ bis zu ihren unternehmerischen Projekten zieht sich dasselbe Muster: Erfolg, der immer auch als geteilte Leistung einer Gemeinschaft verstanden wird.</p>
          <p class="vb-intro">Das ist die soziale Zwei mit Dreierflügel in ihrer wärmsten Form: ein Golden Retriever, der seine eigene Bedeutung nicht in der einen Beziehung sucht, sondern darin, für ein ganzes Umfeld spürbar unentbehrlich zu sein.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-carl-weathers", label:"Porträt: Carl Weathers (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Porträt: Will Smith (SO2w3)"},
        {route:"beruehmte-usain-bolt", label:"Porträt: Usain Bolt (SO2w3)"},
      ])}
    </div>
  `);
}

export function joshSafdiePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-josh-safdie-portrait.jpg" alt="Josh Safdie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Josh Safdie</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">US-amerikanischer Regisseur, Autor und Produzent, geb. 1984 – Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber, der ganze Welten kartiert</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier der sozialen Sieben: rastlos, systematisch, immer damit beschäftigt, ein größeres Ganzes zu erschaffen, von dem am Ende alle profitieren sollen. Josh Safdie, geboren 1984 in New York, wurde gemeinsam mit seinem jüngeren Bruder Benny als eine Hälfte der „Safdie Brothers" bekannt – mit Filmen wie ›Good Time‹ (2017) und ›Uncut Gems‹ (2019), die New York als fiebrige, fast unerträglich dichte Nervensystem-Landschaft zeigen. Wo <a href="javascript:void(0)" data-route="beruehmte-benny-safdie">sein Bruder Benny</a> (SO4w5) sich in die stille, präzise Detailarbeit zurückzieht, drängt Josh nach außen: in neue Milieus, neue Communitys, neue Obsessionen, die er komplett durchdringen will, bevor er sie verfilmt.</p>
          <p class="vb-intro">Über ein Jahrzehnt recherchierte er gemeinsam mit Benny im New Yorker Diamond District, bevor ›Uncut Gems‹ entstand – nicht aus akademischem Interesse, sondern weil sein Vater selbst dort gearbeitet hatte und Josh diese Welt von innen kennenlernen wollte, komplett mit ihren eigenen Regeln, ihrer eigenen Sprache, ihrer eigenen Logik.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Die eigene Begeisterung der Gemeinschaft zurückgeben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo beschreibt die soziale Sieben über das Thema <em>Opfer</em>: Statt die eigene Lust an immer neuen Erfahrungen rein privat auszuleben, wird sie in den Dienst einer größeren Sache oder Gemeinschaft gestellt – ein idealistischer Kopfmensch, der seine Wissbegier in ein Projekt für andere übersetzt. Genau das beschreibt Safdies eigene Erklärung seiner Faszination für Subkulturen: Sie interessierten ihn, weil sie „meist auf eine größere Kultur verweisen – entweder in ihrer Ablehnung dieser Kultur oder in der Ablehnung durch sie". Das ist keine bloße Neugier, sondern der Versuch, das Einzelphänomen sofort gedanklich in einen größeren gesellschaftlichen Zusammenhang einzuordnen.</p>
          <p class="vb-intro">Diese Übersetzung von persönlicher Faszination in ein Projekt für ein größeres Publikum zeigt sich durchgängig: die reale Straßendrogenszene um Arielle Holmes in ›Heaven Knows What‹, das Kautionsagenten-Milieu in ›Good Time‹, jetzt die Tischtennis-Hustler-Welt in ›Marty Supreme‹. Safdie besetzte die Juweliere des Diamond District sogar mit sich selbst im Film – nicht um sich an ihrer Welt zu bedienen, sondern um ihr mit größtmöglicher Genauigkeit eine Bühne zu geben.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Zwei Jahrzehnte Treue statt ständig neuer Bündnisse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel</strong> zeigt sich bei Safdie nicht in der Zurückhaltung, sondern in der Beständigkeit seiner engsten Bindungen. Mit Ronald Bronstein, den er 2007 beim SXSW-Festival kennenlernte, verbindet ihn bis heute eine der zentralen kreativen Partnerschaften seines Lebens – gemeinsam gründeten sie die Produktionsfirma Central Pictures, gemeinsam schrieben und schnitten sie ›Good Time‹, ›Uncut Gems‹ und ›Marty Supreme‹. Schauspielerin Eleonore Hendricks, Kameramann Sean Price Williams und Darsteller Buddy Duress kehren über mehrere Filme hinweg immer wieder zurück – eine Art gefundene Wahlfamilie, die sich über fast zwei Jahrzehnte kaum verändert hat.</p>
          <p class="vb-intro">Wo eine sozial ausgerichtete Sieben mit Achterflügel eher neue Allianzen erobern und dominieren würde, sucht Safdie die verlässliche, tief verwurzelte Bindung an einen festen Kreis von Vertrauten – Sicherheit durch Kontinuität, nicht durch ständig wechselnde neue Beziehungen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Der Hustle, der einen selbst zu besitzen beginnt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben heißt <strong>Völlerei</strong> – der rastlose Griff nach immer mehr Erfahrung, immer neuen Möglichkeiten, aus Angst, etwas zu verpassen. Über seinen 2025 erschienenen Film ›Marty Supreme‹ sagte Safdie selbst: „Es geht um einen Jungen, der denkt, er habe den Hustle unter Kontrolle – bis er merkt, dass der Hustle ihn besitzt." Das ist eine seltene, offene Selbstreflexion über die eigene Falle: die rastlose Verausgabung, die eigentlich der eigenen Erweiterung dienen sollte, kippt irgendwann in eine Getriebenheit um, die sich verselbstständigt.</p>
          <p class="vb-intro">Auf einem Set während der Dreharbeiten zu ›Marty Supreme‹ soll Safdie einem Mitwirkenden das Handy abgenommen haben, weil dieser während einer Szene live postete – seine Anweisung: „Geh rein in die Szene. Hör auf, dein Leben zu dokumentieren, und fang an, es zu leben." Auch das ist typische Siebener-Logik: die permanente gedankliche Distanz durch Dokumentation, Planung und Vorausschau soll überwunden werden zugunsten des vollen, ungebremsten Eintauchens in den Moment.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Sieben mit Sechserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO7w6 zeigt sich darin, wie Safdie seine Begeisterung für übersehene amerikanische Subkulturen nicht für sich behält, sondern über Jahre in Beziehungsarbeit investiert, um sie mit Würde auf die Leinwand zu bringen – die Juweliere des Diamond District wurden zu Freunden, nicht nur zu Rechercheobjekten, und blieben es auch nach Drehschluss.</p>
          <p class="vb-intro">Der Schatten liegt in der Kehrseite derselben Intensität: Die Bereitschaft, für die größere Wahrheit einer Szene an reale Grenzen zu gehen, hat wiederholt zu kontroversen Vorfällen am Set geführt – frühere Weggefährten kritisierten, dass die Jagd nach Authentizität mitunter „zu einem zu hohen Preis" erkauft worden sei. Die soziale Sieben verwechselt in ihrer Schattenseite leicht die eigene Mission mit dem Recht, andere für diese Mission über Gebühr zu beanspruchen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Zwei Brüder, zwei Wege durch dieselbe Stadt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Über ein Jahrzehnt lang war Josh Safdie öffentlich untrennbar mit seinem Bruder Benny verbunden. 2024 trennten sich die beiden beruflich – nach eigener Aussage einvernehmlich, als „natürliche Weiterentwicklung dessen, was wir beide erkunden wollen". Mit ›Marty Supreme‹ (2025) drehte Josh zum ersten Mal seit ›The Pleasure of Being Robbed‹ (2008) wieder allein, mit vier Oscar-Nominierungen als Ergebnis – nahezu zeitgleich mit Bennys eigenem Alleingang ›The Smashing Machine‹, der ihm den Silbernen Löwen in Venedig einbrachte.</p>
          <p class="vb-intro">Zwei Brüder, die aus demselben New York, demselben geteilten Kindheitsmilieu zwischen Queens und Manhattan kamen und über ein Jahrzehnt gemeinsam Filme drehten – und die sich am Ende doch in zwei sehr unterschiedliche Enneagramm-Muster auffächerten: Bennys stille, zurückgezogene Detailversessenheit der sozialen Vier gegen Joshs nach außen gerichtete, gemeinschaftsstiftende Rastlosigkeit der sozialen Sieben. Beide fanden ihre eigene Stimme erst wirklich, als sie aufhörten, sie gemeinsam zu suchen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so7", label:"SO7 – Der Biber: Subtyp-Profil"},
        {route:"beruehmte-benny-safdie", label:"Porträt: Benny Safdie (SO4w5) – der Bruder, mit dem Josh über ein Jahrzehnt gemeinsam Regie führte"},
        {route:"kriminalpsychologie-frank-abagnale-jr", label:"Kriminalporträt: Frank Abagnale Jr. (SO7w6)"},
      ])}
    </div>
  `);
}

export function gabiGarciaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gabi-garcia-portrait.jpg" alt="Gabi Garcia – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gabi Garcia</p>
        <p class="krim-portrait-typ">SO8w7 · Sozialer Typ 8 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Brasilianische Kampfsportlerin, geb. 1985 – Tierentsprechung: Löwe</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Löwe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Löwe</strong> ist das Tier der sozialen Acht – ein Tier, dessen bloße körperliche Präsenz schon Respekt erzwingt, bevor überhaupt ein Kampf beginnt. Bei Gabrielle „Gabi" Garcia, geboren 1985 in Porto Alegre, ist dieses Bild fast wörtlich zu nehmen: Mit 1,87 Meter und muskulösen 95 Kilogramm überragt sie fast jede Gegnerin im Frauen-Kampfsport körperlich – eine Statur, die im Sport, in dem Gewichtsklassen sonst alles regeln, zur eigenen Kategorie wurde.</p>
          <p class="vb-intro">Als Jugendliche spielte sie zunächst Volleyball, Handball und Feldhockey, bevor ihr Onkel sie mit etwa 13 Jahren, kurz nach dem Umzug der Familie nach São Paulo, ans Brazilian Jiu-Jitsu heranführte. Sie stand bereits kurz vor dem Abschluss eines Studiums im Bereich Werbung und Marketing, als sie sich entschied, ganz auf den Kampfsport zu setzen – eine Entscheidung, die sie zur dominantesten Wettkämpferin in der Geschichte des weiblichen Jiu-Jitsu machen sollte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Acht: Stärke im Dienst der Frauen im Kampfsport</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die soziale Acht setzt ihre Kraft nicht für sich allein ein, sondern stellt sie in den Dienst einer Gruppe, mit der sie sich verbunden fühlt. Bei Gabi Garcia ist das der gesamte Frauen-Kampfsport: Das Guinness-Buch der Rekorde würdigt sie nicht nur als Wettkämpferin, sondern ausdrücklich als Pionierin, Mentorin und Verfechterin der Stärkung von Frauen im Kampfsport – eine Rolle, die sie über Jahre aktiv ausfüllte, in einer Sportart, die lange fast ausschließlich von Männern dominiert wurde.</p>
          <p class="vb-intro">Neun Weltmeistertitel im Brazilian Jiu-Jitsu, drei ADCC-Weltmeisterschaften in der Gewichtsklasse über 60 Kilogramm und die Aufnahme in die IBJJF Hall of Fame – diese Bilanz entstand nicht im luftleeren Raum, sondern als sichtbarer Beweis dafür, was Frauen im Kampfsport erreichen können, wenn ihnen der Raum dafür gegeben wird. Die Acht kämpft, aber sie kämpft, um Türen offen zu halten, die andere danach durchschreiten können.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Die Bühne der großen Show</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel (w7)</strong> bringt der sozialen Acht eine Lust an Auftritt, Show und Grenzüberschreitung, die reine Kampfsport-Disziplin allein nicht erklärt. Garcias Wechsel 2015 vom eher sachlichen Turnier-Jiu-Jitsu ins japanische MMA-Promotion RIZIN – bekannt für seine spektakuläre, fast theatralische Inszenierung von Kämpfen – passt genau zu dieser Flügel-Note: keine stille Zurückhaltung, sondern die große, glanzvolle Bühne.</p>
          <p class="vb-intro">Mit einer makellosen MMA-Bilanz von 6 Siegen bei nur einem Unentschieden (No Contest) unter RIZIN zeigte sie, dass sich Ernsthaftigkeit und Inszenierung nicht ausschließen müssen. Die Sieben liebt das Neue, das Aufregende, das nicht Alltägliche – und genau das fand Garcia, als sie ihre bereits etablierte Dominanz im Jiu-Jitsu noch einmal in eine völlig neue, publikumswirksamere Arena trug.</p>
        </blockquote>

        <h2 class="vb-section">4. Die tatsächliche Leistung: Dominanz über zwei Kampfsportarten hinweg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Garcia tatsächlich auszeichnet, ist nicht allein ihre physische Größe, sondern die technische Beherrschung des Bodenkampfs, die sie sich unter Fabio Gurgel im renommierten Alliance-Jiu-Jitsu-Team in São Paulo erarbeitete: präzise Hebel- und Würgetechniken, ein Ringkampf-Fundament, das ihre Gegnerinnen selten kontern konnten, und eine über ein Jahrzehnt praktisch ungebrochene Serie internationaler Titel. Neun Weltmeistertitel entstehen nicht durch Körpergröße allein, sondern durch jahrelange, hochspezialisierte Detailarbeit an Übergängen, Stellungswechseln und Kontrolle am Boden.</p>
          <p class="vb-intro">Diese Substanz zeigte sich auch beim Übergang ins MMA: Statt sich allein auf ihre Grösse zu verlassen, übertrug sie ihre Bodenkampf-Präzision erfolgreich in ein Format, das zusätzlich Schlagtechnik und Stand-up-Fähigkeiten verlangt – eine Anpassungsleistung, die reine physische Dominanz allein nicht erklärt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht zeigt sich bei Garcia die SO8w7 als jemand, der die eigene außergewöhnliche Kraft konsequent für ein größeres Anliegen einsetzt – die Sichtbarkeit und Akzeptanz von Frauen im Kampfsport – statt sie nur zur eigenen Profilierung zu nutzen.</p>
          <p class="vb-intro">Der Schatten der Acht zeigt sich in der Kehrseite ihrer physischen Überlegenheit: Kritiker warfen ihr wiederholt vor, im MMA gegen Gegnerinnen mit deutlich weniger Erfahrung oder ungünstigeren physischen Voraussetzungen anzutreten – ein Vorwurf, der die Grenze zwischen fairer sportlicher Dominanz und erdrückender Übermacht berührt. Eine Acht, deren Stärke so groß ist, dass sie selbst zur Streitfrage wird, läuft Gefahr, dass der ursprüngliche Dienst an der Sache – Frauen im Kampfsport sichtbar zu machen – hinter der Debatte um die eigene Unbesiegbarkeit zurücktritt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Acht führt von der Frage <em>Muss ich stärker sein als alle anderen, um zu zählen?</em> zur Erkenntnis <em>Wahre Stärke zeigt sich darin, anderen Raum zu geben, statt ihn vollständig auszufüllen.</em> Garcias erklärte Rolle als Mentorin – nicht nur als unbesiegte Wettkämpferin – deutet genau in diese Richtung: Stärke, die sich auch daran misst, wie viel Raum sie für andere öffnet.</p>
          <p class="vb-intro">Ihr Rückzug vom aktiven Wettkampf, angekündigt bei der IBJJF-Weltmeisterschaft 2021, markiert einen bewussten Übergang – vom Kämpfen für die eigene Bilanz hin zum Weiterwirken als Vorbild einer ganzen Generation von Kampfsportlerinnen. Der Löwe, der nicht mehr jeden Kampf selbst bestreiten muss, um sein Rudel zu schützen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so8", label:"SO8 – Der Löwe: Subtyp-Profil"},
        {route:"beruehmte-carsten-stahl", label:"Porträt: Carsten Stahl (SO8w7)"},
        {route:"beruehmte-jon-hamm", label:"Porträt: Jon Hamm (SO8w7)"},
        {route:"beruehmte-sokrates", label:"Porträt: Sokrates (SO8w7)"},
      ])}
    </div>
  `);
}

export function viktorFranklPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-viktor-frankl-portrait.jpg" alt="Viktor Frankl – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Viktor Frankl</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Psychiater, Neurologe und Begründer der Logotherapie, 1905&ndash;1997 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler, der seine Höhe im Stillen erklomm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> fliegt allein und hält hohe Standards – an sich selbst, nicht an andere. Viktor Frankl, 1905 in Wien geboren, leitete bereits 1928 bis 1930 kostenlose Jugendberatungsstellen, die in Wien die Zahl der Schülerselbstmorde zur Zeugniszeit auf null senkten. Von 1933 bis 1937 verantwortete er den Frauen-Suizidpräventions-Pavillon der Wiener Heil- und Pflegeanstalt Am Steinhof mit rund 3.000 behandelten Patientinnen jährlich – eine stille, konkrete Praxis, lange bevor sein Name weltweit bekannt wurde.</p>
          <p class="vb-intro">Nach dem „Anschluss" 1938 übernahm er die Neurologie des Wiener Rothschild-Spitals, des letzten Hauses, das noch jüdische Patienten behandeln durfte – und fälschte dort unter Lebensgefahr Diagnosen, um Patienten vor der NS-„Euthanasie" zu schützen. Kein öffentlicher Widerstand, keine Geste für ein Publikum: eine private, riskante Konsequenz, die niemand sehen musste, damit sie zählte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Sinn finden statt Sinn verkünden</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionsanspruch nicht auf öffentliche Korrektheit, sondern auf die eigene, meist unbeobachtete Lebensführung. Naranjo nannte diesen Subtyp <em>Worry</em> – Sorge um das Richtige im ganz Praktischen. Bei Frankl zeigt sich das darin, dass seine Kernüberzeugung – der Mensch finde Sinn, statt ihn zu erfinden – keine abstrakte Philosophie blieb, sondern in konkrete klinische Technik übersetzt wurde: die paradoxe Intention und die Dereflexion, beide bis heute in der Verhaltenstherapie im Einsatz.</p>
          <p class="vb-intro">1944 wurde er nach Auschwitz deportiert; das 250 Seiten starke Manuskript seiner Logotherapie-Theorie, das seine Frau Tilly ihm in das Futter seines Mantels eingenäht hatte, wurde bei der Ankunft beschlagnahmt. Statt den Verlust zu beklagen, rekonstruierte Frankl die Theorie aus dem Gedächtnis – zunächst auf gestohlenen Zetteln im Lager, nach der Befreiung als vollständiges Buch. Neun Monate nach seiner Befreiung diktierte er „…trotzdem Ja zum Leben sagen" in nur neun Tagen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Überzeugung ohne Kanzelton</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel</strong> dämpft bei der Eins die scharfe, öffentlich korrigierende Kante und ersetzt sie durch eine ruhige, humorvoll gebrochene Gelassenheit. Frankl verstand Humor ausdrücklich als Werkzeug der inneren Distanzierung, nicht als Bühnennummer – eine Fähigkeit, die er selbst noch im Lager kultivierte, um dem eigenen Leiden nicht vollständig ausgeliefert zu sein. Kollegen und Schüler beschrieben ihn durchweg als ernsthaften, warmherzigen Kliniker und Lehrer, nicht als dramatischen Auftrittsmenschen.</p>
          <p class="vb-intro">Diese Zurückhaltung zeigte sich noch in seinem Privatleben in den Bergen: Seine zweite Frau Eleonore erinnerte sich, dass er beim Klettern „einfach nur Viktor" gewesen sei – ein echter Freund unter Gleichen, kein Ausnahmemensch, der seine Bedeutung demonstrieren musste. Mit 67 Jahren erwarb er noch den Flugschein, mit über 80 stieg er weiterhin in die Berge – stille, körperliche Disziplin, die niemandem etwas beweisen musste.</p>
        </blockquote>

        <h2 class="vb-section">4. Handwerkliche Substanz: Die dritte Wiener Schule der Psychotherapie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Frankls eigentliche fachliche Leistung liegt in der methodischen Schärfe, mit der er die Logotherapie von bloßer Lebenshilfe-Philosophie abgrenzte. Als „Dritte Wiener Schule" nach Freuds Willen zur Lust und Adlers Willen zur Macht postulierte er den Willen zum Sinn als primäre menschliche Antriebskraft – dabei betonte er klinisch präzise, dass Sinn gefunden werden müsse, in Arbeit, Liebe oder unausweichlichem Leiden, nicht beliebig erfunden werden könne. Dieser Unterschied trennte seinen Ansatz scharf von einem rein relativistischen Existenzialismus.</p>
          <p class="vb-intro">Sein Werk blieb dabei kein abgeschlossenes Lebenswerk der mittleren Jahre: Er lehrte bis ins hohe Alter an Universitäten von Wien bis Harvard und Stanford, veröffentlichte über Jahrzehnte hinweg kontinuierlich neue Bücher und Vorträge – eine diszipliniert fortgesetzte fachliche Praxis, kein einmaliger Geniestreich.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins mit Neunerflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 zeigt sich in Frankls Fähigkeit, eine existenzielle Grundüberzeugung nicht zu predigen, sondern in eigener, überprüfbarer Praxis vorzuleben – von der Diagnosefälschung im Rothschild-Spital bis zur täglichen klinischen Arbeit über Jahrzehnte. Seine zweite Ehe mit der praktizierenden Katholikin Eleonore, in der Synagoge und Kirche, Weihnachten und Chanukka gleichberechtigt nebeneinander standen, zeigt dieselbe undogmatische, unaufgeregte Konsequenz im Privaten.</p>
          <p class="vb-intro">Der Schatten der Eins zeigt sich in der stillen Härte, mit der eigene Maßstäbe auch unter extremstem Druck aufrechterhalten werden mussten – Frankl verlor im Holocaust seine erste Frau Tilly, seine Eltern und seinen Bruder, während er selbst vier verschiedene Lager überlebte. Dass er aus genau dieser Erfahrung heraus eine ganze Therapieschule entwickelte, statt an ihr zu zerbrechen, ist ebenso Ausdruck des Musters wie seine Gefahr: der Zwang, selbst im größten Leid noch Sinn finden zu müssen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom stillen Anspruch zur gelassenen Gewissheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit – von der Frage <em>Lebe ich richtig genug?</em> zur Erkenntnis <em>Mein Anspruch an mich selbst braucht kein Publikum, um wahr zu sein.</em> Frankl lebte diese Reife bis ins hohe Alter: Er starb 1997 im Alter von 92 Jahren, nachdem er sein Leben lang an derselben praktischen Überzeugung festgehalten hatte, ohne sie je zur lauten Mission zu machen.</p>
          <p class="vb-intro">Ein aufschlussreicher Vergleich ist <a href="javascript:void(0)" data-route="beruehmte-reinhold-messner">Reinhold Messner</a> (SE1w9) – auch bei ihm verbindet sich körperliche Disziplin bis ins hohe Alter mit einer öffentlichen Zurückhaltung, die den eigenen Anspruch nie zur Show macht. Mehr dazu im <a href="javascript:void(0)" data-route="beruehmte-reinhold-messner">Porträt zu Reinhold Messner</a>.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

      </div>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Adler: Subtyp-Profil"},
        {route:"lebensmusterkompass/se1", label:"Lebensmusterkompass: SE1 – Adler"},
        {route:"beruehmte-reinhold-messner", label:"Porträt: Reinhold Messner (SE1w9)"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
      ])}
    </div>
  `);
}

export function palinaRojinskiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-palina-rojinski-portrait.jpg" alt="Palina Rojinski – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Palina Rojinski</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexueller Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Moderatorin, Schauspielerin und DJane, geb. 1985 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der sechs Stunden täglich trainierte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> trägt sein ganzes Innenleben nach außen, auch wenn sein Körper kaum Platz dafür zu bieten scheint: jede Regung sofort sichtbar, jede Empfindung in voller Lautstärke, kein Rest an Zurückhaltung. Palina Rojinski kennt dieses Verhältnis nicht erst aus der Öffentlichkeit, sondern aus einem Trainingssaal: Mit vier Jahren begann sie in Leningrad mit rhythmischer Sportgymnastik, sechs Stunden täglich, bis sie als Jugendliche zweifache Deutsche Meisterin bei den Juniorinnen wurde – ein kleiner Körper, über Jahre auf maximale Ausdruckskraft trainiert.</p>
          <p class="vb-intro">Rojinski wurde am 21. April 1985 in Leningrad, dem heutigen Sankt Petersburg, geboren und kam im März 1991, kurz vor ihrem sechsten Geburtstag, als jüdische Kontingentflüchtlingsfamilie nach Berlin. Mit vierzehn musste sie den Sport wegen chronischer Knieprobleme aufgeben; nach einigen Übergangsjahren im Tanz machte sie in Berlin Abitur und begann ein Literatur- und Geschichtsstudium an der Humboldt-Universität – drei Semester, bevor sie 2009 als Sidekick von Joko Winterscheidt und Klaas Heufer-Umlauf bei MTV Home vor die Kamera wechselte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Intensität, die nicht leiser werden will</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> nennt Naranjo ›Konkurrenzneid‹: Sie sucht Bedeutung nicht im Rückzug, sondern in einer Intensität, die auffällt und sich im Vergleich mit anderen beweisen will. Im Rückblick auf ihre ersten Jahre vor der Kamera beschrieb Rojinski im Podcast ›Hotel Matze‹ ein überwiegend von Männern geprägtes Umfeld und sich selbst als ›so traurig am Anfang meiner Karriere‹ – eine Traurigkeit, die sie nicht lähmte, sondern antrieb: ›Es war gut, dass ich traurig war, weil sie mich dazu gebracht hat, dass ich noch viel intensiver mich damit beschäftigt hab.‹ Die sexuelle Vier verwandelt Schmerz nicht in Rückzug, sondern in verstärkten Einsatz.</p>
          <p class="vb-intro">Dieselbe Intensität erklärt, warum Rojinski sich bis heute gegen ein bestimmtes Klischee wehrt: ›Ich werde immer noch sehr oft unterschätzt‹, sagte sie im selben Gespräch – eine Zuschreibung, die sie auf das Bild einer modisch gekleideten, attraktiven Frau zurückführt, der man Tiefe nicht ohne Weiteres zutraut. Ihre Reaktion bleibt typisch für die Vier: kein öffentliches Aufbegehren, sondern beharrliches Weiterarbeiten an der eigenen Kompetenz. Hinter der omnipräsenten Fernsehfigur steht, nach eigener Aussage, ein anderer Mensch: ›Im Rampenlicht selber nichts. Ich mag das Rampenlicht gar nicht so gerne. Ich bin eigentlich eher schüchtern.‹ Die sexuelle Vier baut die auffälligste Bühne ausgerechnet dort, wo sie sich selbst am wenigsten zu Hause fühlt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Aus einer Bühne werden fünf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der Vier ein strategisches Gespür dafür, wie sich Intensität in tragfähige, wiedererkennbare Formate übersetzen lässt. Nach den MTV- und VIVA-Jahren wurde Rojinski ab 2013 als feste Sidekick-Figur bei ›Circus HalliGalli‹ einem breiten Publikum bekannt und etablierte sich parallel als Schauspielerin: 2015 in der Hauptrolle neben Elyas M'Barek in ›Traumfrauen‹, 2016 in ›Willkommen bei den Hartmanns‹, seit 2024 als feste Jurorin bei ›The Masked Singer‹. Dabei wird oft übersehen, dass die körperliche Präzision, mit der sie durch Dauerproben, Slapstick-Elemente und spontane Live-Aktionen navigierte, kein Zufall ist, sondern das Erbe von zehn Jahren Hochleistungssport: ein Körpergefühl, das unter Termindruck, Kameras und improvisierter Komik ebenso diszipliniert funktioniert wie einst auf der Wettkampffläche.</p>
          <p class="vb-intro">Noch deutlicher zeigt sich der Dreierflügel in der schieren Zahl eigenständiger Marken, die Rojinski parallel aufbaute: eine DJ-Karriere unter dem Namen ›Palina Power‹, der Podcast ›Podkinski‹ (2019–2021) mit Gästen wie Guido Maria Kretschmer und Sylvie Meis, das Astrologie-Projekt ›Astrolinski‹ mit eigener Modelinie, dazu der Bestseller ›Folge deinen Sternen‹ (2022). Keine dieser Spuren ersetzt die andere – die sexuelle Vier mit Dreierflügel vervielfältigt die Bühne, statt sich auf eine einzige festzulegen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX4w3 liegt darin, eine frühe, auch schmerzhafte Fremdheit – als Kind einer russisch-jüdischen Einwandererfamilie, als junge Frau in einem männerdominierten Fernsehbetrieb – nicht zu verbergen, sondern in eine über anderthalb Jahrzehnte tragfähige, vielfach diversifizierte öffentliche Karriere zu verwandeln. 2018 kehrte Rojinski als Reporterin der Sendung ›Unser Russland‹ zur Fußball-WM ausdrücklich zu ihrer eigenen Herkunftsgeschichte zurück, statt sie unsichtbar zu lassen.</p>
          <p class="vb-intro">Der Schatten zeigt sich darin, dass dieselbe Intensität, die beruflich trägt, privat fast vollständig abgeschirmt bleibt. Über ihre Beziehungen spricht Rojinski praktisch nie; als sie sich Anfang 2022 im Gespräch mit der ›Süddeutschen Zeitung‹ unabsichtlich zu ihrer Verlobung verplapperte, bestätigte dies erst im Nachhinein ihr Management. Die sexuelle Vier öffnet sich öffentlich in beinahe jeder Hinsicht – außer in der einen, die ihr am wichtigsten ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Chihuahua nach dem Training</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Trainingssaal, in dem eine Vierjährige lernte, ihre volle Intensität in eine kontrollierte Form zu bringen, existiert längst nicht mehr – die Bühnen, auf denen dieselbe Intensität heute sichtbar wird, haben sich seither vervielfacht: Fernsehstudio, DJ-Pult, Buchcover, Modelabel. Was bleibt, ist genau jenes Prinzip, das Naranjo der sexuellen Vier zuschreibt: ein kleiner Rahmen, der nie ganz ausreicht, um zu fassen, was darin an Energie steckt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Tierporträts – jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte – Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx4", label:"SX4 – Der Chihuahua: Subtyp-Profil"},
        {route:"lebensmusterkompass/sx4", label:"Lebensmusterkompass: SX4 – Chihuahua"},
        {route:"beruehmte-paris-hilton", label:"Porträt: Paris Hilton (SX4w3) – dieselbe Tierentsprechung, dieselbe öffentliche Kunstfigur als Schutzschild"},
        {route:"beruehmte-david-garrett", label:"Porträt: David Garrett (SX4w3)"},
        {route:"beruehmte-billie-eilish", label:"Porträt: Billie Eilish (SX4w3)"},
      ])}
    </div>
  `);
}
