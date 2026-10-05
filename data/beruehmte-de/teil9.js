import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function albertEinsteinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-albert-einstein-portrait.jpg" alt="Dr. Albert Einstein – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Albert Einstein</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Sozialer Typ 5 mit Vierer\u00adfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Physiker, Nobelpreistr\u00e4ger, 1879&ndash;1955 &ndash; Begr\u00fcnder der Relativit\u00e4tstheorie &ndash; Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">
        <p class="vb-intro" style="text-align:center;font-style:italic;">
          Ein eigenes <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Krankheitsportr\u00e4t</a>
          widmet sich Einsteins \u00fcber Jahre bekanntem Bauchaortenaneurysma und seiner bewussten Entscheidung gegen eine erneute Operation 1955.
        </p>

        <h2 class="vb-section">1. Der Oktopus, der im Stillen die Formeln des Universums entschl\u00fcsselte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen F\u00fcnf &ndash; das intelligenteste wirbellose Tier der Erde, das in Systemen denkt, still im Verborgenen agiert und mit erstaunlicher Pr\u00e4zision auf Zusammenh\u00e4nge reagiert, die andere gar nicht wahrnehmen. Kein Zufallstier f\u00fcr einen Mann, der die grundlegendsten Gesetze des Universums entschl\u00fcsselte &ndash; nicht im Labor, nicht im lauten akademischen Getriebe, sondern zun\u00e4chst weitgehend allein, in stiller Konzentration.</p>
          <p class="vb-intro">Der deutsch-amerikanische Physiker Albert Einstein wurde am 14. M\u00e4rz 1879 in Ulm geboren. In der Schule galt er keineswegs als \u00dcberflieger &ndash; sein Lehrer soll ihm vorausgesagt haben, aus ihm werde &bdquo;nie etwas Rechtes&ldquo;. Nach dem Studium fand er zun\u00e4chst keine akademische Anstellung und arbeitete ab 1902 als technischer Experte dritter Klasse am Schweizer Patentamt in Bern &ndash; eine Position, die ihm gerade genug Zeit und Ruhe lie\u00df, um sich abends und an Wochenenden seinen eigenen physikalischen Gedanken zu widmen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale F\u00fcnf: Wissen als Gabe an die Menschheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale F\u00fcnf (SO5)</strong> sucht nicht Wissen um seiner selbst willen, sondern will die \u00fcbergeordneten, universellen Gesetze verstehen und daraus einen bleibenden Beitrag f\u00fcr die Gemeinschaft leisten &ndash; sie wird zur Expertin, deren Erkenntnisse am Ende allen zugutekommen sollen. Genau das ist die Struktur von Einsteins &bdquo;Wunderjahr&ldquo; 1905: Als unbekannter Patentangestellter ver\u00f6ffentlichte er binnen weniger Monate vier Arbeiten &ndash; zur Lichtquantenhypothese, zur Brownschen Bewegung, zur speziellen Relativit\u00e4tstheorie und zur \u00c4quivalenz von Masse und Energie (E = mc&sup2;) &ndash; die die Physik grundlegend ver\u00e4nderten.</p>
          <p class="vb-intro">Bezeichnend ist, dass er diese Erkenntnisse nicht zur\u00fcckhielt, sondern sofort zur Ver\u00f6ffentlichung und Diskussion in die wissenschaftliche Gemeinschaft gab &ndash; und sp\u00e4ter, ab 1914 in Berlin und ab 1933 in Princeton, aktiv lehrte, korrespondierte und Generationen von Physikern pr\u00e4gte. Die soziale F\u00fcnf will nicht im Elfenbeinturm bleiben; sie will, dass ihr Wissen wirkt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Vierer-Fl\u00fcgel: Gedankenexperimente als innere Bilderwelt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Vierer-Fl\u00fcgel (w4)</strong> verleiht der sozialen F\u00fcnf eine ausgepr\u00e4gte innere Bilderwelt und eine unkonventionelle, oft emotional aufgeladene Vorstellungskraft &ndash; ganz anders als das n\u00fcchterne Formeldenken, das man einem Physiker gemeinhin zuschreibt. Einstein selbst beschrieb seine wichtigsten Durchbr\u00fcche als <em>Gedankenexperimente</em>: Er stellte sich vor, neben einem Lichtstrahl herzureiten, oder in einem fensterlosen, frei fallenden Aufzug zu stehen &ndash; bildhafte, fast meditative Vorstellungen, aus denen erst sp\u00e4ter die mathematische Formulierung folgte.</p>
          <p class="vb-intro">Auch sein \u00e4u\u00dferes Erscheinungsbild trug diese Vier-Note: das wilde, ungeb\u00e4ndigte Haar, die bewusste Ablehnung von Konventionen (Socken empfand er zeitlebens als \u00fcberfl\u00fcssig), die Liebe zur Musik &ndash; er spielte leidenschaftlich Geige und sagte, er denke oft in Musik. Kein reiner Systematiker, sondern ein F\u00fcnfer, dessen analytisches Denken sich in einer intensiven, bildreichen Innenwelt entz\u00fcndete.</p>
        </blockquote>

        <h2 class="vb-section">4. Weltruhm und gesellschaftliche Verantwortung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1919 best\u00e4tigte eine britische Sonnenfinsternis-Expedition unter Arthur Eddington die von Einstein 1915 vorhergesagte Lichtablenkung durch die Sonne &ndash; \u00fcber Nacht wurde der bis dahin nur Fachleuten bekannte Physiker zum weltweit gefeierten Genie. Die soziale F\u00fcnf, pl\u00f6tzlich ins grelle Licht der \u00d6ffentlichkeit ger\u00fcckt, reagierte typisch: Sie nutzte die neue Reichweite, um ihr Wissen in den Dienst gr\u00f6\u00dferer gesellschaftlicher Anliegen zu stellen. Einstein engagierte sich f\u00fcr Pazifismus, f\u00fcr die Gr\u00fcndung der Hebr\u00e4ischen Universit\u00e4t Jerusalem und warnte \u00f6ffentlich vor nationalistischer Kriegstreiberei.</p>
          <p class="vb-intro">1939 unterschrieb er &ndash; auf Dr\u00e4ngen von Kollegen und in Sorge vor einer deutschen Atombombe &ndash; einen Brief an Pr\u00e4sident Roosevelt, der das amerikanische Atomprogramm mit anstie\u00df. Nach dem Abwurf der Bomben \u00fcber Hiroshima und Nagasaki setzte er sich bis zu seinem Tod f\u00fcr nukleare Abr\u00fcstung und internationale Kontrolle der Atomkraft ein &ndash; die soziale F\u00fcnf, die ihr Wissen einst freigegeben hatte und nun die Verantwortung f\u00fcr dessen Folgen mittrug.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w4 ist die F\u00e4higkeit, komplexeste, universelle Zusammenh\u00e4nge in Bilder zu fassen, die auch Laien ber\u00fchren &ndash; kaum ein Wissenschaftler ist nach wie vor so sehr Symbol f\u00fcr &bdquo;Genie&ldquo; schlechthin wie Einstein. Sein Wissen blieb nie abstrakt: Es floss in \u00f6ffentliche Verantwortung, in politisches Engagement, in eine Haltung, die Erkenntnis stets an ihre gesellschaftlichen Folgen zur\u00fcckband.</p>
          <p class="vb-intro">Der Schatten zeigt sich im Privaten: Seine erste Ehe mit der Physikerin Mileva Mari\u0107, die ihn in den Jahren vor 1905 mit eigenem physikalischen Sachverstand begleitete, endete 1919 in Scheidung; sein j\u00fcngerer Sohn Eduard erkrankte an Schizophrenie und verbrachte einen Gro\u00dfteil seines Lebens in psychiatrischer Behandlung, kaum besucht vom ber\u00fchmten Vater. Die soziale F\u00fcnf, die sich ganz der gro\u00dfen, universellen Aufgabe verschreibt, kann genau daran im Nahbereich der eigenen Familie scheitern &ndash; N\u00e4he und Verf\u00fcgbarkeit fielen Einstein sp\u00fcrbar schwerer als das Verstehen kosmischer Gesetze.</p>
        </blockquote>

        <h2 class="vb-section">6. Verm\u00e4chtnis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Albert Einstein starb am 18. April 1955 in Princeton. Seine Formel E = mc&sup2; ist noch heute eine der bekanntesten wissenschaftlichen Gleichungen \u00fcberhaupt &ndash; ein Symbol daf\u00fcr, wie ein einzelner, still arbeitender Geist die Sicht der gesamten Menschheit auf Raum, Zeit und Materie ver\u00e4ndern kann.</p>
          <p class="vb-intro">Der Oktopus, der im Patentamt begann, Systeme zu entschl\u00fcsseln, die niemand sonst sah, hinterlie\u00df eine Formation, die bis in die Gegenwart nachwirkt: nicht nur in der modernen Physik, sondern als Sinnbild daf\u00fcr, dass Genie sich nicht immer in geraden Bahnen zeigt &ndash; manchmal beginnt es in einem stillen B\u00fcro, mit einem Gedankenexperiment und dem festen Willen einer sozialen F\u00fcnf, das Verstandene mit der Welt zu teilen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so5", label:"SO5 \u2013 Der Oktopus: Subtyp-Profil"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsportr\u00e4t: Albert Einstein (SO5w4)"},
        {route:"astrologie-albert-einstein", label:"Astrologie-Portr\u00e4t: Albert Einstein (SO5w6)"},
        {route:"beruehmte-guenther-jauch", label:"Portr\u00e4t: G\u00fcnther Jauch (SO5w6)"},
        {route:"beruehmte-stephen-hawking", label:"Portr\u00e4t: Stephen Hawking (SO5w6)"},
        {route:"beruehmte-hannah-arendt", label:"Portr\u00e4t: Hannah Arendt (SO5w4) \u2013 auffallend \u00e4hnliche Blickqualit\u00e4t und Gesichtsz\u00fcge trotz unterschiedlichen Geschlechts"},
        {route:"beruehmte-lise-meitner", label:"Portr\u00e4t: Lise Meitner (SO5w4) \u2013 Physikerin, Flucht aus Nazi-Deutschland"},
        {route:"beruehmte-buddha", label:"Portr\u00e4t: Siddhartha Gautama (Buddha) (SO5w4)"},
      ])}
    </div>
  `);
}

export function annikaVonMutiusPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-annika-von-mutius-portrait.jpg" alt="Dr. Annika von Mutius – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Annika von Mutius</p>
        <p class="krim-portrait-typ">SE3w4 &middot; Selbsterhaltender Typ 3 mit Viererflügel</p>
        <p class="krim-portrait-subtitle">Deutsche Unternehmerin, Gründerin von Empion &ndash; Tierentsprechung: Waschbär</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Waschbär</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschbär</strong> ist das Tier der selbsterhaltenden Drei &ndash; ein Tier, das lieber ein funktionierendes System baut als ein Schaufenster. Es zeigt nicht, was es kann, sondern lässt das Ergebnis für sich sprechen, während im Verborgenen längst die eigentliche Arbeit läuft.</p>
          <p class="vb-intro">Die deutsche Unternehmerin Dr. Annika von Mutius wuchs in Koblenz auf, in einer Familie, die ein Unternehmen zur Drahtverarbeitung führte &ndash; ein solider, handwerklich geprägter Familienbetrieb, kein Umfeld, das nach großer Bühne verlangte. Sie promovierte in Mathematik an der WHU in Vallendar, empfand die akademische Laufbahn dann aber als zu abstrakt und ging stattdessen für vier Jahre als Head of Product zu Multiply Labs ins Silicon Valley &ndash; ein Umweg über reine Praxis, bevor sie den eigenen Weg fand.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Drei: Substanz statt Inszenierung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Drei (SE3)</strong> ist der Kontratyp der Drei &ndash; der Subtyp, der Leistung nicht nach außen zur Schau stellt, sondern nach innen richtet: auf Sicherheit, Kompetenz, handwerkliche Meisterschaft. Die SE3 fragt nicht <em>Wie werde ich gesehen?</em>, sondern <em>Was kann ich wirklich?</em></p>
          <p class="vb-intro">Im Dezember 2021 gründete von Mutius gemeinsam mit Larissa Leitner das HR-Tech-Start-up Empion &ndash; eine Plattform, die per Künstlicher Intelligenz Bewerbende und Unternehmen nicht nur nach Qualifikation, sondern nach Werten, Skills und Persönlichkeitsmerkmalen zusammenbringt. Statt auf lautes Marketing zu setzen, baute das Team über Jahre an der eigentlichen technischen Substanz des Matchings &ndash; mit dem Ergebnis, dass Empion heute mit Konzernen wie Procter &amp; Gamble und den Volksbanken arbeitet, neun Millionen US-Dollar an Finanzierung einsammelte und den Wettbewerber Zalvus übernahm.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Der eigene Weg zwischen Familienunternehmen und Start-up</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> bringt der selbsterhaltenden Drei eine Frage, die reine Kompetenz übersteigt: <em>Was bedeutet mein Weg &ndash; jenseits dessen, was von mir erwartet wird?</em> Von Mutius beschreibt ihre eigene Position selbst als ein Leben &bdquo;zwischen den Stühlen&ldquo; &ndash; zwischen dem soliden, handwerklich geprägten Familienunternehmen ihrer Eltern und der volatilen, oft überinszenierten Start-up-Welt, der sie sich mit Empion verschrieben hat, ohne in ihr aufzugehen.</p>
          <p class="vb-intro">Bezeichnend ist ihr eigener Rückblick auf das Gründerinnendasein: Sie stellte öffentlich fest, dass mit dem Wachstum eines Start-ups der persönliche Erfolg an Bedeutung verliert &ndash; eine für die reine SE3w2 untypische Beobachtung, die zeigt, wie sehr der Viererflügel die eigene Rolle immer wieder an einer tieferen, persönlichen Bedeutungsfrage misst, statt sich allein an Wachstumszahlen zu orientieren. 2024 wurde sie zusätzlich in den Vorstand des KI-Bundesverbands gewählt &ndash; eine öffentliche Rolle, die sie dennoch mit derselben nüchternen, unaufgeregten Handwerklichkeit ausfüllt wie ihre unternehmerische Arbeit.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE3w4 ist ihre Fähigkeit, aus reinem Handwerk echte Einzigartigkeit zu schöpfen. Von Mutius baute mit Empion ein Produkt, dessen Kern &ndash; die algorithmische Passung von Werten statt bloßer Qualifikation &ndash; tatsächlich funktionieren musste, bevor es überhaupt vermarktbar wurde. Ihre Auszeichnungen, darunter Forbes &bdquo;30 Under 30 Europe&ldquo; und das Handelsblatt-Ranking &bdquo;Menschen des Jahres&ldquo;, folgten der Substanz, nicht umgekehrt.</p>
          <p class="vb-intro">Das Schicksalsmuster der Drei ist die <strong>Eitelkeit / Täuschung</strong> &ndash; bei der SE3w4 subtil als das Bedürfnis, als einzigartig und unverwechselbar zu gelten, während man zugleich vermeidet, sich selbst als Person in den Vordergrund zu stellen. Der Viererflügel bringt seinen eigenen Schatten mit: die ständige Notwendigkeit, sich von jeder vorgezeichneten Erwartung &ndash; ob Familienunternehmen oder reine Start-up-Logik &ndash; abzugrenzen und einen völlig eigenen Maßstab zu setzen, was auf Dauer isolierend wirken kann.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Beweisen zum Weitergeben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Drei führt von der Frage <em>Was habe ich geleistet?</em> zur Erkenntnis <em>Ich bin &ndash; jenseits aller Leistung.</em> Für die SE3w4 zeigt sich das darin, dass der eigene Wert nicht mehr am nächsten Finanzierungsmeilenstein hängt, sondern an der Wahrhaftigkeit des eigenen Weges.</p>
          <p class="vb-intro">Von Mutius' eigene Beobachtung, dass persönlicher Erfolg beim Wachsen eines Unternehmens an Bedeutung verliert, liest sich wie ein früher Schritt genau auf diesem Weg &ndash; ein Waschbär, der sein Handwerk nicht mehr als Beweis der eigenen Ausnahmestellung braucht, sondern als etwas, das über die eigene Person hinausweist: ein Unternehmen, das anderen Menschen zu einem passenderen Arbeitsplatz verhilft, statt nur die eigene Gründerinnen-Geschichte zu erzählen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se3", label:"SE3 – Der Waschbär: Subtyp-Profil"},
        {route:"beruehmte-judit-polgar", label:"Porträt: Judit Polgár (SE3w4)"},
        {route:"beruehmte-tony-shalhoub", label:"Porträt: Tony Shalhoub (SE3w4)"},
        {route:"beruehmte-cheyenne-ochsenknecht", label:"Porträt: Cheyenne Ochsenknecht (SE3w4)"},
      ])}
    </div>
  `);
}

export function blaisePascalPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-blaise-pascal-portrait.jpg" alt="Blaise Pascal" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Blaise Pascal</p>
        <p class="krim-portrait-typ">SX5w6 &middot; Sexueller Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Mathematiker, Physiker, Philosoph, 1623&ndash;1662 &ndash; Tierentsprechung: Igel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Igel, der sich einmal ganz öffnete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Igel</strong> ist das Tier der sexuellen Fünf: scheu, zurückhaltend, mit eingezogenen Stacheln der Welt gegenüber &ndash; und doch fähig zu einer Intensität, die alle anderen Fünfer-Subtypen übertrifft, sobald er sich einem einzigen Wesen oder einer einzigen Idee wirklich öffnet. Anders als die selbsterhaltende Fünf, die sich in ihrem Rückzugsraum verschanzt, oder die soziale Fünf, die ihr Wissen der Öffentlichkeit zur Verfügung stellt, sucht der Igel die radikale, fast unerträgliche Nähe zu dem Einen, dem er vertraut.</p>
          <p class="vb-intro">Blaise Pascal, geboren 1623 in Clermont-Ferrand, war genau dieser Igel: ein kränkliches, hochbegabtes Kind, das sich schon früh dem gewöhnlichen Umgang mit Gleichaltrigen entzog, weil sein Vater ihm jede körperliche Anstrengung untersagte &ndash; und das seine ganze Energie stattdessen in eine einzige, alles verzehrende Konzentration lenkte. Mit elf Jahren schrieb er eine eigene Abhandlung über Schallwellen, mit sechzehn einen Aufsatz über Kegelschnitte, der selbst Descartes verblüffte. Was von außen wie Genialität aussah, war aus der Nähe betrachtet ein Junge, der sich in eine einzige Sache so tief vergrub, dass die übrige Welt verblasste.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Fünf: Vertrauen statt Vermeidung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Wo die selbsterhaltende Fünf ihre knappen Ressourcen hortet und die soziale Fünf ihr Wissen zur Schau stellt, kehrt die sexuelle Fünf die typische Fünfer-Bewegung um: Statt sich vor der Welt zu schützen, sucht sie das eine Gegenüber, dem sie sich ganz zumuten kann. Naranjo nennt dieses Gegenprinzip <em>Vertrauen</em> &ndash; die paradoxe Fähigkeit eines ansonsten distanzierten Typs, sich in einer einzigen Beziehung oder Idee radikal zu exponieren, während er allen anderen gegenüber verschlossen bleibt.</p>
          <p class="vb-intro">Bei Pascal zeigte sich das doppelt: einmal wissenschaftlich, in seiner fast besessenen Hingabe an einzelne Probleme &ndash; den Druck von Flüssigkeiten, die Wahrscheinlichkeitsrechnung, die erste mechanische Rechenmaschine der Welt, die er mit neunzehn Jahren baute, um seinem Vater die mühsame Steuerberechnung zu erleichtern. Und einmal religiös, in der berühmten „Nacht des Feuers" vom 23. November 1654: einem plötzlichen, überwältigenden mystischen Erlebnis, das er auf einem Zettel festhielt, den er zeitlebens in sein Wams eingenäht trug &ndash; gefunden erst nach seinem Tod. „Feuer. Gott Abrahams, Gott Isaaks, Gott Jakobs, nicht der Philosophen und Gelehrten. Gewissheit, Gewissheit, Gefühl, Freude, Friede." Kein kühles Argument, sondern die totale, kompromisslose Hingabe des Igels, der sich einmal ganz öffnet &ndash; und danach nie mehr derselbe ist.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Die Suche nach dem tragfähigen Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Sechserflügel bringt der Fünf ein Element, das die reine Fünf allein nicht hätte: das Bedürfnis nach einem verlässlichen, geprüften Fundament, gegen das sich jeder Gedanke absichern lässt. Wo eine Fünf mit stärkerem Viererflügel introspektiv-melancholisch bleibt, sucht die Fünf mit Sechserflügel die Systematik, die Wachsamkeit gegenüber dem eigenen Zweifel, die geordnete Struktur, in der sich Erkenntnis absichern lässt, bevor sie ausgesprochen wird.</p>
          <p class="vb-intro">Genau diese Handschrift trägt Pascals berühmteste Wette: das <em>Pari pascalien</em>, die Pascalsche Wette. Sie ist kein religiöses Bekenntnis, sondern eine kühle, geradezu buchhalterische Risikoabwägung &ndash; man solle an Gott glauben, weil der mögliche Gewinn (ewige Glückseligkeit) den möglichen Verlust (ein endliches Leben in Demut) bei Weitem übersteige, selbst wenn die Existenz Gottes ungewiss bleibe. Das ist der Sechserflügel bei der Arbeit: Selbst die tiefste existenzielle Frage wird in ein Sicherheitskalkül übersetzt, in dem der Zweifel nicht verdrängt, sondern strukturell eingepreist wird. Auch seine posthum veröffentlichten <em>Pensées</em> lesen sich so &ndash; als eine Sammlung einzelner, in sich abgesicherter Denkfragmente, die den Zweifel nicht überwinden, sondern ihm eine Struktur geben.</p>
        </blockquote>

        <h2 class="vb-section">4. Der denkende Schilfhalm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kaum ein Satz fasst die Fünfer-Position so präzise wie Pascals berühmtestes Bild: „Der Mensch ist nur ein Schilfrohr, das schwächste in der Natur, aber er ist ein denkendes Schilfrohr." Der Mensch ist körperlich unbedeutend, der fünfertypischen Erfahrung von Verletzlichkeit und begrenzter Energie ausgeliefert &ndash; und doch, gerade durch das Denken, dem gesamten Universum, das ihn zerdrücken könnte, überlegen. Das ist die Kernkompensation der Fünf: die Erschöpfbarkeit des Körpers durch die Unerschöpflichkeit des Geistes auszugleichen.</p>
          <p class="vb-intro">Pascals Gesundheit war zeitlebens fragil &ndash; chronische Kopfschmerzen, Verdauungsprobleme, vermutlich eine Kombination aus Tuberkulose und einer neurologischen Erkrankung, die ihn zunehmend schwächte. Er starb 1662 mit nur 39 Jahren, nachdem er in seinen letzten Lebensjahren zunehmend asketisch lebte: er verzichtete auf Gewürze im Essen, band sich einen Gürtel mit Stacheln um die Hüfte, den er sich in Momenten der Eitelkeit noch fester zuzog. Das ist die Schattenseite des Igels mit Sechserflügel unter chronischem Stress &ndash; die Sicherheitssuche kippt in selbstauferlegte Strenge, die Rückzugstendenz der Fünf wird zur physischen Selbstkasteiung.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Fünf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht ist die SX5w6 fähig zu einer Intensität der Hingabe, die anderen Fünfer-Subtypen fehlt &ndash; eine Konzentration, die nicht bei der reinen Beobachtung stehen bleibt, sondern sich einem Gegenstand, einer Idee oder einem Glauben ganz überlässt, ohne die intellektuelle Schärfe zu verlieren. Pascals Werk lebt von genau dieser Kombination: mathematische Präzision, gepaart mit einer religiösen Erfahrung, die er nicht relativierte, sondern mit derselben Konsequenz verfolgte wie zuvor seine physikalischen Experimente.</p>
          <p class="vb-intro">Im Schatten zeigt sich die Kehrseite: die Enge, mit der sich der Igel an das eine Fundament klammert, sobald der Sechserflügel die Kontrolle übernimmt. Pascals zunehmender Rückzug aus der wissenschaftlichen Welt nach seiner religiösen Erfahrung, sein Bruch mit früheren Weggefährten, seine wachsende Strenge gegen sich selbst &ndash; all das sind Anzeichen einer Fünf, die ihre Sicherheit nicht mehr im offenen Denken, sondern in der immer engeren Verteidigung eines einmal gefundenen Fundaments sucht.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Schilfrohr zur tragenden Wurzel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Fünf führt von der Frage <em>Habe ich genug verstanden, um sicher zu sein?</em> zur Erkenntnis <em>Verstehen entsteht nicht durch Rückzug, sondern durch Hingabe an das, was ich nicht vollständig kontrollieren kann.</em> Für die SX5w6 bedeutet das, das eine gefundene Fundament nicht zur Festung gegen jeden weiteren Zweifel zu machen, sondern es als das zu nehmen, was es für den jungen Pascal einmal war: ein Ausgangspunkt für offenes Denken, nicht sein Endpunkt.</p>
          <p class="vb-intro">Einordnung ohne Determinismus: Auch bei Pascal gilt, dass niemand allein aufgrund seines Enneagramm-Subtyps chronisch krank wird &ndash; seine Leiden hatten eigene, unabhängige körperliche Ursachen. Bemerkenswert bleibt dennoch, wie konsequent sich sein Umgang mit Krankheit und Sterblichkeit in sein Denkmuster einfügte: Statt die eigene Hinfälligkeit zu verdrängen, machte er sie &ndash; ganz Fünf, ganz Igel &ndash; zum Ausgangspunkt einer der bekanntesten philosophischen Formeln der Geistesgeschichte. Pascal kannte sein eigenes Enneagramm-Muster natürlich nicht bewusst; seine Leidenschaft nach Sicherheit durch geprüftes Wissen fand keine Grenze, bis sie sich buchstäblich in seinen Körper eingrub &ndash; nicht aus Schuld, sondern weil ihm die Sprache fehlte, um das eigene Muster als Muster zu erkennen, statt es als Schicksal hinzunehmen. Seine Krankheitsgeschichte und die letzten Lebensjahre werden im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-blaise-pascal">Krankheitsporträt zu Pascal</a> noch ausführlicher gedeutet.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"krankheitsportraets-blaise-pascal", label:"Krankheitsporträt: Blaise Pascal (SX5w6)"},
        {route:"subtype/sx5", label:"SX5 – Der Igel: Subtyp-Profil"},
        {route:"beruehmte-xu-bing", label:"Porträt: Xu Bing (SE5w4)"},
      ])}
    </div>
  `);
}

export function carolinePetersPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-caroline-peters-portrait.jpg" alt="Caroline Peters – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Caroline Peters</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexueller Typ 7 mit Sechserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, geb. 1971 in K\u00f6ln</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Schimpanse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Schimpanse</strong> ist das intelligenteste und ausdrucksst\u00e4rkste Tier des Waldes &ndash; und das unberechenbarste. Er lernt durch Beobachtung und Nachahmung, wechselt blitzschnell zwischen Verspieltem und Ernstem, zwischen Z\u00e4rtlichkeit und Intensit\u00e4t. Sein Gesicht ist ein Instrument; sein K\u00f6rper erz\u00e4hlt, auch wenn er schweigt. Und er braucht die Gemeinschaft &ndash; nicht als Hintergrund, sondern als B\u00fchne.</p>
          <p class="vb-intro">Die deutsche Schauspielerin Caroline Peters wurde 1971 in K\u00f6ln geboren und studierte Schauspiel an der Hochschule f\u00fcr Musik und Theater Hamburg. Wer sie in einer Szene erlebt &ndash; ob als tapsige Ermittlerin in der Eifel oder in einer Trag\u00f6die auf der Burgtheater-B\u00fchne &ndash;, versteht sofort: Diese Frau denkt nicht nach, ob sie eine Figur spielt. Sie ist die Figur. Der Schimpanse, der sich in jeden verwandeln kann &ndash; und dabei nie vergisst, wer er selbst ist.</p>
        </blockquote>

        <h2 class="vb-section">2. Der sexuelle Siebener: Rausch der Verwandlung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sexuellen Typ 7 die <strong>Suggestibilit\u00e4t</strong> &ndash; die F\u00e4higkeit, sich von einer Idee, einer Person, einer Welt so vollst\u00e4ndig faszinieren zu lassen, dass man selbst darin versinkt. Der SX7er sucht nicht \u00dcberfluss wie der SE7er und nicht Zugeh\u00f6rigkeit wie der SO7er &ndash; er sucht Intensit\u00e4t: den Moment, in dem alles andere aufh\u00f6rt zu existieren, weil die Begegnung, die Rolle, das Spiel alles in sich saugt.</p>
          <p class="vb-intro">Peters lebt diesen Impuls auf der B\u00fchne und auf der Leinwand vollst\u00e4ndig aus. Sie wechselt m\u00fchelos zwischen den Welten: Fernsehkom\u00f6die und Burgtheater, Slapstick und Ibsen, K\u00f6ln und Wien. Die SX7-Energie macht sie zur Meisterin der Verwandlung &ndash; nicht weil sie eine Technik anwendet, sondern weil sie sich wirklich hineinziehen l\u00e4sst. Das ist der Unterschied zwischen K\u00f6nnen und Faszination.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\u00fcgel: Das Gewissen des Abenteuers</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\u00fcgel</strong> gibt dem sexuellen Siebener eine Qualität, die einen SX7er mit schwach ausgeprägtem Sechserflügel erdet: Loyalität, W\u00e4rme und ein leises Sensorium f\u00fcr das, was tr\u00e4gt. Wo eine SX7 mit schwach ausgeprägtem Sechserflügel von Faszinosum zu Faszinosum springt, fragt ein stark ausgeprägter Sechserflügel: <em>Geh\u00f6re ich dazu? Bin ich wirklich gut genug f\u00fcr das, was ich tue?</em></p>
          <p class="vb-intro">Peters ist seit Jahren festes Ensemblemitglied des Burgtheaters Wien &ndash; eines der angesehensten deutschsprachigen Theater der Welt. Das ist keine Entscheidung einer SX7 mit schwachem Sechserflügel; das ist der stark ausgeprägte Sechserflügel, der Wurzeln schlägt. Gleichzeitig kehrte sie mehrfach zu <em>Mord mit Aussicht</em> zur\u00fcck &ndash; einer Rolle, die sie h\u00e4tte l\u00e4ngst hinter sich lassen k\u00f6nnen. Loyalit\u00e4t zu Figuren, H\u00e4usern und Kollegen: das ist der w6 bei der Arbeit.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Sophie Haas zum Burgtheater</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><em>Mord mit Aussicht</em> (ARD, 2008&ndash;2012, Neuauflage 2021&ndash;2023) machte Caroline Peters bundesweit bekannt: als Sophie Haas, die K\u00f6lner Gro\u00dfstadtermittlerin, die in ein verschlafenes Dorf in der Eifel strafversetzt wird und dort auf eine Welt trifft, f\u00fcr die ihr Stadtmensch-Gehirn nicht ausger\u00fcstet ist. Die Figur war eine Meisterleistung physischer Kom\u00f6die &ndash; Timing, K\u00f6rpereinsatz, Reaktion &ndash; und zugleich herzlicher, als die Figur nach au\u00dfen wirkte.</p>
          <p class="vb-intro">Parallel dazu spielt Peters am Burgtheater Wien klassische und zeitgen\u00f6ssische Rollen &ndash; von Ibsen bis Jelinek, von Shakespeare bis Handke. F\u00fcr ihre Mitwirkung in dem Film <em>Oh Boy</em> (2012) erhielt sie den Grimme-Preis. Ihre Arbeit zeigt, was die SX7-Energie in ihrer besten Form kann: Die Grenzen zwischen Ernst und Komik, zwischen Hochkultur und Popul\u00e4rformat, sind f\u00fcr sie keine Grenzen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Wenn der Witz zu tief geht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX7w6 ist ihre <strong>Unersch\u00f6pflichkeit</strong>. Peters wirkt nie abgearbeitet, nie routiniert. Jede Szene scheint so zu entstehen, als w\u00fcrde sie sie zum ersten Mal erleben &ndash; das ist das Geschenk der Faszination. Ihr Humor ist k\u00f6rperlich, pr\u00e4zise und nie zynisch; er entsteht aus dem Inneren der Figur, nicht aus der Distanz zu ihr.</p>
          <p class="vb-intro">Der Schatten: Der SX7er lebt f\u00fcr den Moment &ndash; und der Moment geht vorbei. Die Gefahr ist nicht das Scheitern, sondern das Verwischen: Wer sich in jede Figur vollst\u00e4ndig hineinziehen l\u00e4sst, fragt sich irgendwann, wo die Figur aufh\u00f6rt und man selbst beginnt. Der Sechserfl\u00fcgel h\u00e4lt dagegen &ndash; mit Loyalit\u00e4t, mit Burgtheater, mit Zugeh\u00f6rigkeit. Aber die Frage bleibt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Schimpanse, der nie derselbe bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Caroline Peters ist eine der vielseitigsten Schauspielerinnen des deutschsprachigen Theaters und Fernsehens &ndash; und das liegt nicht daran, dass sie besonders viele Rollen gespielt hat. Es liegt daran, dass sie wirklich anders ist in jeder von ihnen. Das ist der Schimpanse: immer in Bewegung, immer neugierig, immer bereit, sich neu zu erfinden. Und doch in jedem Moment vollst\u00e4ndig anwesend.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-thomas-gottschalk", label:"Portr\u00e4t: Thomas Gottschalk (SX7w6)"},
        {route:"beruehmte-ina-mueller", label:"Portr\u00e4t: Ina M\u00fcller (SX7w8)"},
        {route:"beruehmte-jasmin-paolini", label:"Portr\u00e4t: Jasmin Paolini (SE7w6)"},
        {route:"beruehmte-ida-pfeiffer", label:"Portr\u00e4t: Ida Pfeiffer (SX7w6) \u2013 ebenfalls derselbe Subtyp"},
        ])}
      </div>
    </div>
  `);
}

export function cynthiaMossPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cynthia-moss-portrait.jpg" alt="Dr. Cynthia Moss – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Cynthia Moss</p>
        <p class="krim-portrait-typ">SE9w1 &middot; Selbsterhaltender Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Verhaltensbiologin, geb. 1940 &ndash; Gründerin des Amboseli Elephant Research Project &ndash; Tierentsprechung: Elefant</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Elefant, der ein Leben lang bei den Elefanten blieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Elefant</strong> ist das Tier der selbsterhaltenden Neun &ndash; majestätisch, tief geerdet, friedlich, getragen von Weisheit, Gedächtnis und unerschütterlicher Loyalität, beständig im Hintergrund wirkend statt sich in den Vordergrund zu drängen. Dr. Cynthia Moss verkörpert dieses Prinzip so vollständig, dass es kaum ein treffenderes Bild in diesem Kompass gibt: Die amerikanische Verhaltensbiologin gilt als unbestrittene Grande Dame der Elefantenforschung.</p>
          <p class="vb-intro">1972 gründete sie gemeinsam mit Harvey Croze das Amboseli Elephant Research Project in Kenia &ndash; und leitet es bis heute, über fünfzig Jahre später. Sie hat einzelne Elefantenfamilien und ihre Matriarchinnen über mehr als fünf Jahrzehnte lückenlos begleitet: dieselben Tiere, dieselbe Region, derselbe stille, unerschütterliche Fokus, Jahrzehnt um Jahrzehnt. Das ist keine Karriere unter mehreren. Das ist ein einziges, ungeteiltes Lebenswerk.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Neun: Beständigkeit als Lebensform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Neun (SE9)</strong> sucht Frieden und Sicherheit durch Beständigkeit, durch das Vertraute, durch das geduldige Verweilen bei dem, was sich als richtig erwiesen hat. Moss lebt dieses Prinzip in einer Radikalität, die selbst unter Feldforschern selten ist: Auf die Frage, wer den größten Einfluss auf ihr Leben gehabt habe, antwortet sie schlicht mit dem Namen einer Elefantin &ndash; Echo, einer Matriarchin, die sie über Jahrzehnte begleitete.</p>
          <p class="vb-intro">›Ich kann mir nicht vorstellen, die Elefanten zu verlassen. Sie bedeuten mir alles‹, sagt Moss über sich selbst &ndash; ein Satz, der weniger von wissenschaftlichem Ehrgeiz spricht als von einer tiefen, beständigen Bindung, die ein ganzes Leben trägt. Bücher wie ›Elephant Memories‹ machten der Welt erstmals bewusst, wie tief das Gefühlsleben, die Trauer und die soziale Intelligenz von Elefanten reicht &ndash; nicht durch spektakuläre Einzelbeobachtungen, sondern durch jahrzehntelange, geduldige Kontinuität.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Prinzipientreue statt Konfrontation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der selbsterhaltenden Neun eine klare, methodische Prinzipientreue &ndash; im Unterschied zum konfrontativeren, impulsiveren Achterflügel. Moss vertritt ihre Positionen zum Schutz der Elefanten unmissverständlich direkt: Auf die Frage nach der Bedrohungslage antwortet sie knapp mit ›Ja‹, und sie fordert unumwunden, dass Regierungen jeden Elfenbeinhandel verbieten müssten. Doch diese Klarheit äußert sich nicht als lautstarke Konfrontation, sondern als beharrliche, institutionelle Arbeit über Organisationen und wissenschaftliche Kanäle &ndash; über Jahrzehnte aufgebaute Kooperationen statt einmaliger dramatischer Auftritte.</p>
          <p class="vb-intro">Genau das ist der Unterschied zum Achterflügel: Wo eine SE9w8 eher aus dem Bauch heraus und mit größerer Wucht eingreifen würde, arbeitet Moss methodisch, sorgfältig, evidenzbasiert &ndash; eine über fünfzig Jahre durchgehaltene wissenschaftliche Genauigkeit, die selbst dann nicht ins Wanken gerät, wenn die eigene Position politisch unbequem ist. Prinzipientreue, nicht Konfrontation, ist ihr Instrument.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE9w1 ist die Fähigkeit, <strong>ein ganzes Leben ungeteilt einem einzigen, beständigen Thema zu widmen</strong> &ndash; Moss' Forschung veränderte grundlegend, wie die Welt über das Innenleben von Elefanten denkt, und ihr Amboseli-Projekt ist heute die längste ununterbrochene Studie an frei lebenden Elefanten überhaupt.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Kehrseite dieser Beständigkeit: ein Leben, das sich fast vollständig um ein einziges Thema, einen einzigen Ort, dieselben wenigen vertrauten Wesen organisiert. Wo andere Karrierewege, Themen oder Regionen wechseln, um sich weiterzuentwickeln, bleibt die SE9w1 dort, wo Vertrauen bereits gewachsen ist &ndash; eine Stärke, die zugleich eine bewusste Absage an alles Neue, Unvertraute ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Elefant, der die Elefanten nie verließ</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Cynthia Moss der Welt gibt, ist nicht nur wissenschaftliches Wissen über eine Tierart, sondern der lebende Beweis, dass Beständigkeit selbst eine Form von Größe sein kann. Ihr Lebenswerk zeigt, wie ein einziges Thema, geduldig über ein halbes Jahrhundert verfolgt, tiefer trägt als jede kurzlebige Vielfalt.</p>
          <p class="vb-intro">Was am Ende bleibt, ist eine Biografie, die sich kaum treffender denken lässt: eine Frau, deren archetypisches Tier der Elefant ist, die ihr gesamtes erwachsenes Leben im Einklang mit genau diesen friedlichen, tief geerdeten Riesen verbrachte &ndash; nicht durch Distanz und Wechsel, sondern durch ein halbes Jahrhundert ungebrochener, treuer Präsenz.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${bookTip("enneagramm-zoo", "27 Tierporträts – jedes Subtyp-Tier mit Charakter, Biologie und Enneagramm-Bezug.", "Enneagramm-Zoo")}
      ${bookTip("archetypen-der-tiere-im-enneagramm", "Die archetypischen Tiere der 9 Typen als innere Landkarte – Bilder, die sofort wirken.", "Archetypen der Tiere im Enneagramm")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se9", label:"SE9 – Der Elefant: Subtyp-Profil"},
        {route:"lebensmusterkompass/se9", label:"Lebensmusterkompass: SE9 – Elefant"},
        {route:"beruehmte-laozi", label:"Porträt: Laotse (Laozi) (SE9w1)"},
        {route:"beruehmte-baerbel-bas", label:"Porträt: Bärbel Bas (SE9w1)"},
        {route:"tierforscher-uebereinstimmung", label:"Tierforscher-Übereinstimmung: weitere Beispiele"},
      ])}
      ${animalResearcherMatchBlock("beruehmte-cynthia-moss")}
    </div>
  `);
}

export function dirkRossmannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dirk-rossmann-portrait.jpg" alt="Dirk Rossmann \u2013 Portr\u00e4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dirk Rossmann</p>
        <p class="krim-portrait-typ">SO5w6 \u00b7 Sozialer Typ 5 mit Sechserfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Unternehmer, Gr\u00fcnder der Drogeriemarktkette ROSSMANN, geb. 1946 \u2013 Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus mit dem Fahrrad</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier des sozialen Typs 5 \u2013 ein Tier ohne festes Zentrum, das mit mehreren Armen gleichzeitig operiert, sich seinem Umfeld anpasst und dabei nie ganz zu fassen ist. Dirk Ro\u00dfmann wurde am 7. September 1946 in Hannover geboren, als Sohn eines Drogisten in zweiter Generation, der starb, als Dirk zw\u00f6lf Jahre alt war. Noch im selben Jahr zeigte sich das Muster zum ersten Mal ganz konkret: Der Zw\u00f6lfj\u00e4hrige nahm donnerstags bei den Nachbarn Bestellungen f\u00fcr Drogeriewaren aus dem Laden seiner Mutter, die diesen nun allein weiterf\u00fchrte, entgegen und lieferte sie freitags mit dem Fahrrad aus \u2013 zehn Prozent g\u00fcnstiger, als sie im Laden gekostet h\u00e4tten. Ein kleines System, selbst gebaut, das mehrere hundert Mark im Monat einbrachte, lange bevor daraus ein Unternehmen wurde. Mit f\u00fcnfundzwanzig, 1972, er\u00f6ffnete er in Hannover den ersten deutschen Selbstbedienungs-Drogeriemarkt auf 120 Quadratmetern \u2013 neben einem Bestattungsunternehmen gelegen, was er selbst sp\u00e4ter mit trockenem Humor kommentierte.</p>
          <p class="vb-intro">Das Prinzip Selbstbedienung war in der deutschen Drogeriebranche 1972 eine Neuerfindung des Systems, nicht blo\u00df eine Filialer\u00f6ffnung. Genau das ist die soziale F\u00fcnf im Licht: Sie beobachtet ein bestehendes System lange und genau, erkennt seine Schwachstelle \u2013 hier die bediente Theke, an der jeder Kunde einzeln bedient werden musste \u2013 und baut daraus ein neues, effizienteres System, das sie dann mit vielen Armen gleichzeitig in die Fl\u00e4che tr\u00e4gt. Aus einem Laden wurden \u00fcber die folgenden Jahrzehnte mehrere tausend M\u00e4rkte in mehreren europ\u00e4ischen L\u00e4ndern.</p>
        </blockquote>

        <h2 class="vb-section">2. Das Totem: Wissen, das die Gemeinschaft tr\u00e4gt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sozialen Typ 5 das <strong>Totem</strong> \u2013 die Verkn\u00fcpfung von Wissen mit Zugeh\u00f6rigkeit und Ansehen. Anders als die introvertierte SE5, die ihr Wissen eher zur\u00fcckh\u00e4lt, tr\u00e4gt die SO5 es aktiv in die Gemeinschaft hinein und wird dadurch zur Instanz. Ro\u00dfmann ist daf\u00fcr ein Lehrbuchfall: Er gibt regelm\u00e4\u00dfig Interviews \u00fcber Unternehmensf\u00fchrung, hat eine vielgelesene Autobiografie ver\u00f6ffentlicht und spricht \u00f6ffentlich \u00fcber sein Gesch\u00e4ftsmodell \u2013 ohne dabei ins Rampenlicht der Prominenz im klassischen Sinn zu dr\u00e4ngen. Das Wissen wird geteilt, damit es der Gemeinschaft \u2013 Mitarbeitenden, Nachfolgern, Lesern \u2013 n\u00fctzt.</p>
          <p class="vb-intro">Auch sein F\u00fchrungsstil folgt diesem Muster: Ro\u00dfmann ist in Themenzentrierter Interaktion (TZI) ausgebildet, einem Konzept zur Arbeit in Gruppen, das soziales Lernen und pers\u00f6nliche Entwicklung f\u00f6rdern soll, und praktiziert t\u00e4glich autogenes Training zur Entspannung. Beides sind Werkzeuge, mit denen die soziale F\u00fcnf ihr System \u2013 hier: das Unternehmen mit seinen Zehntausenden Mitarbeitenden \u2013 bewusst und methodisch steuert, statt es dem Zufall zu \u00fcberlassen. Sein B\u00fcro gilt als schlicht, im Unternehmen herrscht kein Krawattenzwang \u2013 N\u00e4he durch Zug\u00e4nglichkeit, nicht durch Distanzlosigkeit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\u00fcgel: \u203aNiemals aufgeben\u2039</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\u00fcgel (w6)</strong> bringt der sozialen F\u00fcnf ein tiefes Bed\u00fcrfnis nach Verl\u00e4sslichkeit, Loyalit\u00e4t und einem tragf\u00e4higen System, dem man vertrauen kann. 1996 stand Ro\u00dfmann an einem doppelten Abgrund: Er hatte sich privat an der B\u00f6rse verspekuliert, das Unternehmen stand vor der Insolvenz, und im selben Jahr erlitt er einen Herzinfarkt. Statt aufzugeben, schrieb er pers\u00f6nliche Briefe an zwanzig Gl\u00e4ubigerbanken \u2013 siebzehn lie\u00dfen sich \u00fcberzeugen, ihre Kredite zu verl\u00e4ngern. Das Unternehmen \u00fcberlebte.</p>
          <p class="vb-intro">Sein seither vielzitiertes Credo lautet sinngem\u00e4\u00df, niemals aufzugeben. Das ist der w6-Zug in Reinform: nicht die abenteuerlustige Neuerfindung um jeden Preis, sondern das z\u00e4he Festhalten am tragf\u00e4higen System, das Bem\u00fchen um Vertrauen bei denen, die es einem entgegenbringen. In einem Interview betonte Ro\u00dfmann, wie sehr sein Handeln auf gegenseitigem Vertrauen aufbaue \u2013 eine Aussage, die man sich von einer SO5 ohne ausgepr\u00e4gten Sechserfl\u00fcgel so kaum vorstellen kann, da dort Distanz eher als Schutz vor Verletzlichkeit dient. Die Bodenst\u00e4ndigkeit und Nahbarkeit, mit der Ro\u00dfmann intern wie extern auftritt, ist ebenfalls ein Sechser-Zug: Loyalit\u00e4t nach unten und oben, nicht nur nach au\u00dfen sichtbares Wissen.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Oktopus, der \u00fcber sich selbst schreibt, ohne es zu wissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das verbl\u00fcffendste Kapitel in Ro\u00dfmanns Biografie liegt nicht im Handel, sondern in der Literatur. Ab 2020 ver\u00f6ffentlichte er, ab dem zweiten Band gemeinsam mit dem Journalisten Ralf Hoppe, eine \u00d6ko-Thriller-Trilogie mit dem Titel <strong>\u203aDie Oktopus-Reihe\u2039</strong>: <em>Der neunte Arm des Oktopus</em> (2020, Platz eins der Spiegel-Bestsellerliste), <em>Der Zorn des Oktopus</em> (2021) und <em>Das dritte Herz des Oktopus</em> (2023). Alle drei behandeln den Klimawandel als zentrales Thema \u2013 Ro\u00dfmanns erkl\u00e4rtes pers\u00f6nliches Anliegen.</p>
          <p class="vb-intro">Der Oktopus ist in diesem Kompass die Tierentsprechung genau des Subtyps, den Ro\u00dfmann selbst verk\u00f6rpert: SO5. Er w\u00e4hlte diesen Titel nicht mit Blick auf eine Typologie, die er vermutlich nie zu Gesicht bekommen hat \u2013 und traf trotzdem, dreimal hintereinander, exakt sein eigenes Tiertotem. Noch pr\u00e4ziser wird die Parallele beim dritten Band: <em>Das dritte Herz des Oktopus</em> trifft w\u00f6rtlich eine der Tierfakten-Zeilen, die diesem Kompass f\u00fcr den SO5-Oktopus zugeordnet sind \u2013 \u203aOktopusse haben drei Herzen \u2013 zwei pumpen Blut zu den Kiemen, eines zum restlichen K\u00f6rper. Die SO5 hat mehrere Zentren. Sie operiert auf verschiedenen Ebenen gleichzeitig.\u2039 Ro\u00dfmann, der als Unternehmer, Autor, Stifter und Familienvater tats\u00e4chlich auf mehreren Ebenen gleichzeitig operiert, hat mit seinem Buchtitel unbewusst genau das Bild gew\u00e4hlt, das sein eigenes psychologisches Muster am treffendsten beschreibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk jenseits der Regale</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Ro\u00dfmann ist Mitbegr\u00fcnder der Deutschen Stiftung Weltbev\u00f6lkerung, die sich auf Sexualaufkl\u00e4rung und Familienplanung konzentriert, mit einem Schwerpunkt in Ostafrika. Auch hier zeigt sich das Totem-Muster der SO5: Wissen \u2013 \u00fcber K\u00f6rper, Verh\u00fctung, Familienplanung \u2013 wird als Gr\u00f6\u00dfe verstanden, die Gemeinschaften strukturell ver\u00e4ndert, wenn man sie zug\u00e4nglich macht. Es ist keine impulsive Wohlt\u00e4tigkeit, sondern ein langfristig angelegtes System, das \u00fcber Jahrzehnte tr\u00e4gt \u2013 genau die Art von Engagement, die dem Sechserfl\u00fcgel Sicherheit gibt.</p>
          <p class="vb-intro">Auch die Unternehmensnachfolge folgte diesem Muster: Ro\u00dfmann \u00fcbergab die operative F\u00fchrung schrittweise, blieb aber als Gesellschafter und pr\u00e4gende Figur im Hintergrund pr\u00e4sent \u2013 nicht als abrupter R\u00fcckzug, sondern als geordneter \u00dcbergang in einem System, das er selbst \u00fcber Jahrzehnte gebaut hatte.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht zeigt sich die SO5w6 bei Ro\u00dfmann als Systembauer, der sein Wissen nicht horten, sondern in tragf\u00e4hige Strukturen \u00fcbersetzen will \u2013 ein Drogeriemarkt-Konzept, ein F\u00fchrungsstil, eine Stiftung, eine Romantrilogie. \u00dcberall dieselbe Bewegung: erkennen, ordnen, weitergeben, damit es tr\u00e4gt.</p>
          <p class="vb-intro">Der Schatten der F\u00fcnf ist <strong>Geiz/Habsucht</strong> \u2013 zwei Seiten derselben Bewegung: Geiz h\u00e4lt fest, was schon da ist, Habsucht will heimlich mehr, weil Sicherheit \u00fcber Besitz definiert wird. Bei der SO5w6 zeigt sich das oft weniger als Kn\u00e4userigkeit im Alltag \u2013 dort wirkt sie eher kontrolliert und zur\u00fcckhaltend \u2013 als vielmehr als stille Anziehung durch die Aussicht auf zus\u00e4tzliche Sicherheit. Genau diese Habsucht-Seite kann die sonst so vorsichtige F\u00fcnf paradoxerweise in Risiken hineinziehen, die ihrem eigentlichen Naturell widersprechen: Die private B\u00f6rsenspekulation, die Ro\u00dfmann 1996 fast in den Ruin trieb, war kein Ausbruch aus dem Geiz, sondern dessen Kehrseite \u2013 der Versuch, \u00fcber den vertrauten Rahmen des eigenen Systems (das Drogerie-Gesch\u00e4ft) hinaus schnell noch mehr Sicherheit anzuh\u00e4ufen, auf einem Feld (dem Finanzmarkt), das er nicht in gleicher Tiefe durchschaute.</p>
        </blockquote>

        <h2 class="vb-section">7. Der Oktopus, der weiterschreibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dirk Ro\u00dfmann ist heute weit \u00fcber achtzig und noch immer \u00f6ffentlich pr\u00e4sent \u2013 als pr\u00e4gende Figur im Hintergrund des Unternehmens, als Stifter, als Autor. Sein Weg von der kleinen Drogerie neben dem Bestattungsunternehmen bis zur europ\u00e4ischen Handelskette liest sich wie eine klassische SO5-Biografie: langsamer Aufbau von Wissen und System, das doppelte Beinaheversagen 1996, das den Sechserfl\u00fcgel sichtbar machte, und schlie\u00dflich die sp\u00e4te literarische Wende, in der er \u2013 ohne es zu ahnen \u2013 sein eigenes Tiertotem gleich dreifach zu Papier brachte.</p>
          <p class="vb-intro">Das ist die soziale F\u00fcnf mit Sechserfl\u00fcgel in ihrer reifsten Form: ein System bauen, das andere tr\u00e4gt. Daran festhalten, wenn es wankt. Und am Ende, ohne es geplant zu haben, selbst zum Bild dessen werden, was man immer war.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so5", label:"SO5 \u2013 Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-guenther-jauch", label:"Portr\u00e4t: G\u00fcnther Jauch (SO5w6)"},
        {route:"beruehmte-eckhard-freise", label:"Portr\u00e4t: Eckhard Freise (SO5w6)"},
        {route:"beruehmte-isaac-newton", label:"Portr\u00e4t: Isaac Newton (SO5w6)"},
      ])}
    </div>
  `);
}

export function epikurPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-epikur-portrait.jpg" alt="Epikur" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Epikur</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Philosoph, 341–270 v. Chr. – Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber, der einen Garten für alle baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier der sozialen Sieben – er baut nicht für sich allein, sondern für eine Gemeinschaft, und ist nie wirklich fertig. Epikur wurde 341 v. Chr. auf Samos geboren, studierte in Athen und an mehreren Orten Kleinasiens, bevor er um 306 v. Chr. in Athen ein Grundstück kaufte, das als „Der Garten" (Kepos) in die Philosophiegeschichte einging. Dort baute er über Jahrzehnte eine lebendige Wohn- und Lerngemeinschaft auf, in der Freunde, Schüler, Frauen und sogar Sklaven gleichberechtigt zusammenlebten und philosophierten – für die damalige Zeit eine radikal offene Konstruktion.</p>
          <p class="vb-intro">Anders als die meisten großen Denker seiner Zeit suchte Epikur keine politische Karriere und keine öffentliche Bühne in der athenischen Demokratie. Sein Lebenswerk war der Garten selbst – ein fortlaufendes Bauprojekt aus Texten, Regeln und einer wachsenden Gemeinschaft, das er bis zu seinem Tod nie als abgeschlossen betrachtete.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Freude im Dienst der Gemeinschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sozialen Typ 7 das <strong>Opfer</strong> beziehungsweise den <strong>Märtyrer</strong> – dieser Subtyp stellt die eigene Genusssucht zurück, um sich einer größeren Gemeinschaft oder Idee zu widmen. Epikur gilt bis heute vielen als Philosoph der Zügellosigkeit – ein gründliches Missverständnis. Er lehrte nicht Völlerei, sondern die Kunst, das wirklich Angenehme zu wählen und unnötigen Schmerz zu meiden: Freundschaft, einfache Nahrung, ein ruhiges Gewissen wiegen bei ihm schwerer als Reichtum oder Ruhm.</p>
          <p class="vb-intro">Statt seine Einsichten für sich zu behalten oder als Privatvergnügen zu genießen, verbrachte er sein gesamtes Erwachsenenleben damit, den Garten aufzubauen, zu unterrichten und in unzähligen Briefen Freunde und Schüler in ganz Griechenland an seiner Philosophie teilhaben zu lassen. Sein eigenes Glück blieb an das Glück der Gemeinschaft gebunden – die eigene Zurückgezogenheit gab er auf für ein geteiltes gutes Leben, ganz im Sinne dessen, was Naranjo beim sozialen Siebener als Opfer bezeichnete.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Verlässliche Regeln für ein gutes Leben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Sieben ein Bedürfnis nach verlässlichen Kriterien und stabilen Strukturen, an denen sich Vertrauen festmachen lässt. Epikur entwickelte mit seiner „Kanonik" ein regelrechtes Prüfsystem für Erkenntnis – klare Kriterien, anhand derer sich wahre von falscher Wahrnehmung unterscheiden ließ, damit seine Schüler nicht im Ungewissen tappen mussten. Auch seine Ethik war kein loses Ideensammelsurium, sondern ein durchdachtes Regelwerk: eine Hierarchie der Bedürfnisse, feste Prinzipien, an denen man sich orientieren konnte.</p>
          <p class="vb-intro">Diese Sechser-Note zeigte sich auch im Aufbau des Gartens selbst: eine Gemeinschaft mit klaren, verlässlichen Regeln des Zusammenlebens, in der neue Mitglieder wussten, woran sie waren. Nicht wilde, ungebremste Marktbeschickerei durch neue Ideen, sondern ein stabiles System, dem man vertrauen konnte, gerade weil es keine Überraschungen barg.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Tod im Garten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In seinen letzten Lebensjahren litt Epikur an schmerzhaften Nierensteinen, vermutlich verbunden mit weiteren Beschwerden im Unterleib. Überliefert ist, dass er die letzten Tage seines Lebens trotz starker Schmerzen in einem warmen Bad verbrachte und dabei ungewöhnlich gefasst blieb. In seinem letzten erhaltenen Brief an einen Freund schrieb er, dass die Erinnerung an gemeinsame philosophische Gespräche ihm mehr Freude bereite als der Schmerz ihm nehmen könne.</p>
          <p class="vb-intro">Bis zuletzt blieb er in seiner Rolle als Lehrer und Freund präsent – kein einsamer Rückzug aus der Gemeinschaft, sondern ein Sterben mitten im eigenen, sorgfältig aufgebauten Bau. Der Biber, der noch am eigenen Damm arbeitet, während das Wasser längst über ihm zusammenschlägt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO7w6 ist die Fähigkeit, <strong>eine tragfähige, verlässliche Gemeinschaft aufzubauen, die dem einzelnen echten Halt gibt</strong> – der Garten überdauerte Epikurs eigenen Tod um Jahrhunderte und wurde zu einer der einflussreichsten philosophischen Schulen der Antike. Seine radikale Offenheit gegenüber Frauen und Sklaven war für seine Zeit ein stiller, aber wirkungsvoller Bruch mit gesellschaftlichen Konventionen.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Kehrseite dieses Gemeinschaftsprojekts: Wer sein gesamtes Selbstverständnis an eine selbst gegründete Institution bindet, riskiert, die eigene Person hinter dem System verschwinden zu lassen. Über Epikurs privates Innenleben abseits seiner Rolle als Lehrer und Systemgründer ist erstaunlich wenig überliefert – als wäre der Mensch hinter dem Garten selbst zur Nebensache geworden.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Biber, dessen Garten ihn überlebte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Epikur gehört zu den einflussreichsten Philosophen der Antike – nicht weil er lauter argumentierte als andere, sondern weil er eine Gemeinschaft baute, die seine eigenen Lehren tatsächlich lebbar machte, über seinen Tod hinaus.</p>
          <p class="vb-intro">Die Erinnerung an einen Mann, der ein Missverständnis seines eigenen Namens bis heute trägt – „epikureisch" steht im Volksmund für Genusssucht, während Epikur selbst Bescheidenheit und Freundschaft lehrte –, das ist das bleibende Bild dieses Subtyps: ein Biber, der einen Garten für andere baute, in dem am Ende auch er selbst in Frieden sterben konnte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so7", label:"SO7 – Der Biber: Subtyp-Profil"},
        {route:"lebensmusterkompass/so7", label:"Lebensmusterkompass: SO7 – Biber"},
        {route:"beruehmte-nikola-tesla", label:"Porträt: Nikola Tesla (SO7w6)"},
        {route:"beruehmte-rowan-atkinson", label:"Porträt: Rowan Atkinson (SO7w6)"},
        {route:"beruehmte-franz-von-assisi", label:"Porträt: Franz von Assisi (SO7w6)"},
        {route:"beruehmte-george-gershwin", label:"Porträt: George Gershwin (SO7w6)"},
        {route:"krankheitsportraets-moliere", label:"Krankheitsporträt: Molière (SO7w6)"},
      ])}
    </div>
  `);
}

export function friedrichSchillerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-schiller-portrait.jpg" alt="Friedrich Schiller" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Schiller</p>
        <p class="krim-portrait-typ">SX6w5 · Sexueller Typ 6 mit Fünferflügel</p>
        <p class="krim-portrait-subtitle">Dichter, Dramatiker, Historiker, 1759–1805 – Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf, der der Zensur die Zähne zeigte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 – ein Rudeltier, das Bedrohung nicht meidet, sondern ihr direkt entgegentritt. Kaum ein Dichter der deutschen Literaturgeschichte verkörpert dieses Muster so unverkennbar wie Friedrich Schiller, dessen frühes Werk ein einziger, offener Angriff auf die Tyrannei seiner Zeit war – geschrieben unter den Augen genau jener Autorität, gegen die es sich richtete.</p>
          <p class="vb-intro">Geboren 1759 in Marbach am Neckar als Sohn eines Militärarztes, wurde der junge Schiller mit vierzehn Jahren gegen seinen und den Willen seiner Eltern in die Karlsschule des württembergischen Herzogs Karl Eugen gezwungen – eine militärisch strenge Kadettenanstalt, in der er, statt Theologie, gegen seine Neigung Medizin studieren musste. Aus dieser jahrelangen erzwungenen Unterordnung unter eine willkürliche Autorität entstand ein Grundmuster, das sein gesamtes Werk durchzieht: die Weigerung, sich einer Macht zu beugen, die er als ungerecht empfand.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Stärke als Gegenangst gegen den Herzog</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs – statt sich vor Bedrohung zurückzuziehen, tritt sie ihr mit demonstrativer Stärke entgegen. Schiller lebte das schon als Student: Heimlich, gegen die Regeln der Karlsschule, verfasste er sein erstes Drama "Die Räuber" – eine so aufrührerische Anklage gegen Willkürherrschaft und gesellschaftliche Erstarrung, dass es 1782 bei der Uraufführung in Mannheim das Publikum zu Tränen und Tumult trieb.</p>
          <p class="vb-intro">Um der Uraufführung selbst beizuwohnen, verließ Schiller Württemberg ohne die Erlaubnis des Herzogs – eine offene Regelverletzung, für die er kurzzeitig inhaftiert und mit einem Schreibverbot für alles außer medizinischen Schriften belegt wurde. Statt sich zu fügen, floh er wenige Monate später in einer Nacht- und Nebelaktion aus Württemberg, mittellos, ohne gesicherte Zukunft, nur um sich der Zensur des Herzogs endgültig zu entziehen. Der Wolf, der lieber das eigene Rudel und die eigene Sicherheit verlässt, als sich einer Autorität zu unterwerfen, die er nicht mehr respektieren kann.</p>
          <p class="vb-intro">Diese Konfrontationsbereitschaft blieb sein Leben lang Programm: Seine Dramen "Kabale und Liebe" und "Don Karlos" führen erneut Tyrannei, Machtmissbrauch und den Kampf des Einzelnen um Freiheit und Würde vor – nie als abstrakte Theorie, sondern als zugespitzter, oft lebensgefährlicher Konflikt zwischen Individuum und Obrigkeit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Rückzug in Theorie, Geschichte und System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel (w5)</strong> gibt der sexuellen Sechs analytische Tiefe und die Fähigkeit, sich in ein durchdachtes Gedankengebäude zurückzuziehen, bis jede Position argumentativ abgesichert ist. Nach den stürmischen Jugenddramen wandte sich Schiller zunehmend der Geschichtsschreibung und der Philosophie zu: 1789 wurde er, ohne akademischen Doktortitel, auf Empfehlung Goethes zum Professor für Geschichte in Jena berufen.</p>
          <p class="vb-intro">In seinen "Briefen über die ästhetische Erziehung des Menschen" entwickelte er, ausgehend von Kant (SO6w5, ebenfalls in diesem Kompass porträtiert), ein systematisches philosophisches Konzept, wie der Mensch durch Kunst und Schönheit zu innerer Freiheit finden könne – eine hochkomplexe, jahrelang durchdachte Theorie, kein spontaner Gefühlsausbruch. Der Fünferflügel verwandelte den jungen Wutdramatiker in einen der präzisesten Denker seiner Zeit, ohne dass die Wachsamkeit und Kampfbereitschaft der Sechs je verschwand – sie verlagerte sich nur vom offenen Konflikt in die argumentative Verteidigung einer Idee.</p>
        </blockquote>

        <h2 class="vb-section">4. Dem eigenen Körper die Stirn geboten: Die letzten vierzehn Jahre</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1791 erlitt Schiller eine schwere, vermutlich mit Tuberkulose zusammenhängende Krankheitskrise mit hohem Fieber und Krämpfen, die ihn beinahe das Leben kostete und von der er sich nie vollständig erholte. Statt sich zurückzuziehen, arbeitete er die verbleibenden vierzehn Lebensjahre unter dem ständigen Druck einer fortschreitenden Erkrankung – und schrieb in genau dieser Zeit sein bedeutendstes Alterswerk: die "Wallenstein"-Trilogie, "Maria Stuart", "Die Jungfrau von Orleans" und "Wilhelm Tell".</p>
          <p class="vb-intro">Freunde berichteten, Schiller habe nachts oft nur mit Hilfe von starkem Kaffee und Champagner weiterarbeiten können, wenn der Körper längst hätte aufgeben wollen. Das ist die SX6w5 in ihrer kompromisslosesten Form: nicht dem eigenen Verfall auszuweichen, sondern ihm mit derselben Härte zu begegnen, mit der Schiller einst dem Herzog Karl Eugen begegnet war.</p>
        </blockquote>

        <h2 class="vb-section">5. Goethe: Zwei Bautypen im gemeinsamen Gespräch</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1794 begann die enge Freundschaft zwischen Schiller und Johann Wolfgang von Goethe (SO7w6) – eine der folgenreichsten Künstlerbeziehungen der deutschen Literaturgeschichte. Über mehr als tausend erhaltene Briefe hinweg diskutierten die beiden Ästhetik, Dramaturgie und Philosophie, gaben gemeinsam die Zeitschrift "Die Horen" heraus und verfassten gemeinsam die scharfzüngigen "Xenien" gegen literarische Gegner.</p>
          <p class="vb-intro">Wo Goethes soziale Sieben rastlos neue Bauwerke in alle Richtungen errichtete, ohne je fertig zu werden, verteidigte Schillers sexuelle Sechs mit Fünferflügel eine begrenzte Zahl zentraler Überzeugungen mit unerbittlicher, kompromissloser Konsequenz – zwei sehr unterschiedliche Energien, die sich gegenseitig zu Höchstleistungen anspornten. Als Schiller 1805 mit nur 45 Jahren starb, schrieb Goethe, ihm sei "die Hälfte seines Daseins" genommen worden – ein Satz, der zeigt, wie sehr auch der rastlose Biber den kompromisslosen Wolf als unersetzlichen Gefährten brauchte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Eine Ode, die zur Weltsprache der Freiheit wurde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Schillers 1785 verfasstes Gedicht "An die Freude" wurde 1824 von Ludwig van Beethoven (SX6w5) – demselben Subtyp wie Schiller selbst – im Finalsatz seiner Neunten Symphonie vertont und avancierte später zur Europahymne: ein Wolf, der die Worte eines anderen Wolfes zur universellen Botschaft von Freiheit und Brüderlichkeit machte.</p>
          <p class="vb-intro">Schiller starb 1805 in Weimar, erschöpft von vierzehn Jahren Arbeit gegen den eigenen zerfallenden Körper. Das ist das Vermächtnis der SX6w5: eine Energie, die sich weder von einem Herzog noch von der eigenen Sterblichkeit zum Schweigen bringen ließ, sondern beides als Bedrohung erkannte, der man sich stellt – nicht, vor der man flieht. Der Wolf, der bis zur letzten Zeile kämpfte, für Freiheit, für Würde, für die eigene, nicht verhandelbare Stimme.</p>
        </blockquote>

        <p class="vb-intro">Die seit der Kindheit fragile Konstitution und die vierzehn Jahre Arbeit gegen den eigenen, zunehmend zerstörten Körper werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-friedrich-schiller">Krankheitsporträt zu Schiller</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"krankheitsportraets-friedrich-schiller", label:"Krankheitsporträt: Friedrich Schiller (SX6w5)"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-johann-wolfgang-von-goethe", label:"Porträt: Johann Wolfgang von Goethe (SO7w6) – enger Freund und Briefpartner"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Porträt: Ludwig van Beethoven (SX6w5) – vertonte Schillers ›Ode an die Freude‹"},
        {route:"beruehmte-skylar-grey", label:"Porträt: Skylar Grey (SX6w5)"},
      ])}
    </div>
  `);
}

export function guentherJauchPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-guenther-jauch-portrait.jpg" alt="G\xfcnther Jauch – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">G\xfcnther Jauch</p>
        <p class="krim-portrait-typ">SO5w6 &middot; Sozialer Typ 5 mit Sechserfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Moderator, Journalist, Produzent, geb. 1956 &ndash; Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus aus M\xfcnster</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier des sozialen Typs 5 &ndash; hochintelligent, mit acht Armen gleichzeitig greifend, dabei kaum zu fassen. Er tarnt sich perfekt. Er lebt in der Tiefe, auch wenn er an der Oberfl\xe4che erscheint. Und er h\xe4lt sein Revier mit einer Pr\xe4zision, die man von au\xdfen nicht erkennt, weil er nie aufgeregt wirkt.</p>
          <p class="vb-intro">Der deutsche Moderator G\xfcnther Jauch ist seit \xfcber drei\u00dfig Jahren das bekannteste Gesicht des deutschen Fernsehens &ndash; und vermutlich der meistgesehene Moderator, den die Bundesrepublik je hervorgebracht hat. Wer wird Million\xe4r? l\xe4uft seit 1999. <em>stern TV</em> moderierte er von 1990 bis 2011. Den ARD-Sonntagstalk f\xfchrte er von 2011 bis 2015. Und trotzdem wissen die meisten Menschen, die seine Sendungen gesehen haben, kaum etwas \xfcber ihn. Das ist Absicht. Das ist System.</p>
        </blockquote>

        <h2 class="vb-section">2. Das Totem: Wissen als Schl\xfcssel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sozialen Typ 5 das <strong>Totem</strong> &ndash; die Verkn\xfcpfung von Wissen mit Zugeh\xf6rigkeit und Ansehen. Die SO5 teilt Wissen mit der Gemeinschaft und wird dadurch zur Instanz. Im Licht ist das Beruf und Berufung. Im Schatten wird das Wissen zum Tor, das nur derjenige \xf6ffnen kann, der es kontrolliert.</p>
          <p class="vb-intro"><em>Wer wird Million\xe4r?</em> ist das perfekte Format f\xfcr die soziale F\xfcnf: Eine Sendung, in der Wissen buchst\xe4blich Geld wert ist. Jauch sitzt als Totemfigur an der Schaltstelle &ndash; er wei\xdf die Antworten, er liest sie vom Teleprompter ab, er bewertet Kandidaten, er entscheidet das Tempo. Das Publikum im Studio, der Telefonjoker, die Freunde, die gefragt werden d\xfcrfen &ndash; all das ist ein soziales System, das Jauch moderiert. Und im Zentrum dieses Systems sitzt er: ruhig, informiert, unaufgeregt. Der Oktopus in seinem Element.</p>
          <p class="vb-intro">Jauch studierte Rechtswissenschaften und Politikwissenschaft &ndash; in M\xfcnster und sp\xe4ter an der LMU M\xfcnchen &ndash; und brach das Studium ab, als der Bayerische Rundfunk ihn als Volont\xe4r \xfcbernahm. Er wechselte nicht zum Fernsehen, weil er die Uni abgehakt hatte. Er wechselte, weil er einen direkteren Weg ins Wissens-\xd6kosystem gefunden hatte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\xfcgel: Das Format als Heimat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserfl\xfcgel (w6)</strong> bringt der sozialen F\xfcnf ein tiefes Bed\xfcrfnis nach Stabilit\xe4t und Verl\xe4sslichkeit. Nicht Abenteuer, sondern Kontinuit\xe4t. Nicht Disruption, sondern das bew\xe4hrte System. Im Licht ist das Treue und Qualit\xe4t. Im Schatten ist es die Weigerung, sich zu erneuern &ndash; das Festhalten an Strukturen, weil man sich darin sicher f\xfchlt.</p>
          <p class="vb-intro">Jauch ist das Bild dieser Kontinuit\xe4t. <em>Wer wird Million\xe4r?</em> l\xe4uft seit 1999 &ndash; mit demselben Moderator, demselben Stuhl, derselben Musik, denselben Regeln. In einer Fernsehlandschaft, die sich alle f\xfcnf Jahre neu erfindet, ist das ein Statement. Er selbst sagte einmal sinngem\xe4\xdf, er m\xf6ge Formate, die er versteht und in denen er sich auskennt. Das klingt schlicht. Es ist es nicht. Es ist die SO5w6: Sicherheit durch Wiederholung, Verl\xe4sslichkeit als Professionalit\xe4t.</p>
          <p class="vb-intro">Auch seine Ehe belegt das Muster: Verheiratet mit Thea Jauch, geborene D\xf6rholt, seit 1990 &ndash; vier T\xf6chter, dasselbe Haus in Potsdam. Der Sechserfl\xfcgel schafft Strukturen, in denen das Private sicher bleibt, weil es unsichtbar bleibt.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Zwischen Million\xe4rsfrage und Montag</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro"><em>stern TV</em>, das er 1990 \xfcbernahm und zwei Jahrzehnte lang moderierte, war anderes Terrain: Reportagen, Enth\xfcllungen, gesellschaftskritische Beitr\xe4ge. Jauch f\xfchrte die Sendung mit derselben K\xfchle, mit der er sp\xe4ter Million\xe4re befragte &ndash; ohne Emotion, mit pr\xe4zisen Fragen, ohne dem Gegen\xfcber zu nahe zu treten. Das ist die SO5: N\xe4he durch Distanz, Verbindung durch Professionalit\xe4t.</p>
          <p class="vb-intro">Den ARD-Sonntagabendtalk &ndash; <em>G\xfcnther Jauch</em>, 2011 bis 2015 &ndash; gab er nach vier Jahren auf. Er erkl\xe4rte, das Format habe sich ersch\xf6pft. Viele fragten, ob er sich gemeint hatte. Die soziale F\xfcnf verliert den Sinn f\xfcr ein System, wenn sie sp\xfcrt, dass es nicht mehr tr\xe4gt. Dann l\xe4sst sie los &ndash; ruhig, ohne Drama, ohne \xd6ffentlichkeit.</p>
          <p class="vb-intro">Daneben f\xfchrte er \xfcber seine Produktionsfirma i&amp;u TV, sp\xe4ter an RTL verkauft, eine Vielzahl von Formaten in die Sendelandschaft ein. Der Oktopus greift mit mehreren Armen zugleich &ndash; und l\xe4sst sich nicht auf einen reduzieren.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Das Private bleibt privat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jauch ist nicht auf Social Media. Er gibt selten Interviews \xfcber sich selbst &ndash; nur \xfcber seine Sendungen. Er lebt in einer Villa am Heiligen See in Potsdam, deren Grundst\xfcck hinter Mauern liegt. Er hat vier T\xf6chter, deren Namen er jahrelang nicht in der \xd6ffentlichkeit nannte. Das ist keine Privatheit aus Angst. Das ist die <strong>Burg der SO5</strong> in ihrer sozialen Form: Ich bin unter euch, ich gebe euch Wissen, ich moderiere eure Gesellschaft &ndash; aber mich selbst gebe ich nicht.</p>
          <p class="vb-intro">Der Schatten der F\xfcnf ist der <strong>Geiz</strong> &ndash; nicht nur mit Geld, sondern mit sich selbst. Mit dem, was man \xfcber sich preisgeben w\xfcrde. Jauch ist ein Mann, der Jahrzehnte lang Kandidaten in existenzielle Druck-Situationen gebracht hat, ihre Reaktionen studiert, ihre Schwei\u00dfausbr\u00fcche kommentiert &ndash; und dabei selbst vollkommen undurchdringlich blieb. Der Oktopus, der beobachtet und ver\xe4ndert, w\xe4hrend er selbst unsichtbar bleibt.</p>
          <p class="vb-intro">Im Licht hingegen: Ein Moderator, der nie einen Kandidaten vorgef\u00fchrt hat. Der nie \xfcber jemanden gelacht hat. Der mit einer Freundlichkeit moderiert, die nicht gespielt wirkt. Das ist die SO5 im besten Sinne: Wissen teilen, ohne zu dominieren. Begleiten, ohne zu \xfcberw\u00e4ltigen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Oktopus, der nicht kleiner wird</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">G\xfcnther Jauch ist 2024 achtundsechzig Jahre alt &ndash; und moderiert noch immer <em>Wer wird Million\xe4r?</em>. Das Fernsehen hat sich um ihn herum mehrfach neu erfunden. Formate kamen und gingen. Moderatoren wurden entdeckt, verheizt und ersetzt. Jauch blieb.</p>
          <p class="vb-intro">Das ist das Bild, das bleibt: Ein Mann, der nicht laut ist, der nicht treibt, der nicht dr\xe4ngt. Der einfach da ist. Der seinen Platz h\xe4lt, sein Wissen gibt, seine Fragen stellt &ndash; und nach der Sendung nach Potsdam f\xe4hrt. Hinter die Mauern. In die Stille. Zum Oktopus in seiner Tiefe.</p>
          <p class="vb-intro">Das ist die soziale F\xfcnf: Pr\xe4senz ohne \xdcbergabe. Sichtbarkeit ohne Offenbarung. Und die stille Gewissheit, dass man mehr wei\u00df, als man zeigt &ndash; und dass das vollkommen ausreicht.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/so5", label:"SO5 \u2013 Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-bill-gates", label:"Portr\xe4t: Bill Gates (SO5w6)"},
        {route:"beruehmte-dirk-rossmann", label:"Portr\xe4t: Dirk Rossmann (SO5w6) \u2013 schrieb unwissentlich eine Buchreihe \u00fcber sein eigenes Tiertotem"},
        {route:"beruehmte-eckhard-freise", label:"Portr\xe4t: Eckhard Freise (SO5w6) \u2013 erster Million\xe4r bei Wer wird Million\xe4r?"},
        {route:"beruehmte-simone-de-beauvoir", label:"Portr\xe4t: Simone de Beauvoir (SO5w6)"},
      ])}
    </div>
  `);
}

export function honoreDeBalzacPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-honore-de-balzac-portrait.jpg" alt="Honoré de Balzac" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Honoré de Balzac</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Französischer Schriftsteller, 1799–1850 – Tierentsprechung: Taube</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Taube</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Taube</strong> trägt Botschaften über weite Strecken und kehrt zurück, selbst durch Sturm – zäh im Kern, auch wenn sie zart wirkt. Sie ist kein Tier der lauten Geste, sondern eines, das sich durch Beharrlichkeit beweist, durch das, was es unbeirrbar von einem Ort zum anderen trägt. Honoré Balssa – erst später nannte er sich Balzac, noch später Honoré de Balzac – wurde 1799 in Tours geboren, Sohn eines Beamten aus einfachen südfranzösischen Verhältnissen, der es unter Ludwig XVI. und Napoleon (SO2w3) zum Verwaltungsbeamten gebracht hatte, und einer deutlich jüngeren Mutter aus einer wohlhabenden Pariser Tuchhändlerfamilie. Die Mutter, die ihre Mutterpflicht eher als Pflicht denn als Zuneigung empfand, gab den Vierjährigen zunächst zu einer Amme, dann, mit acht Jahren, ins Internat von Vendôme, wo er nach eigener späterer Aussage jahrelang kaum Besuch von den Eltern erhielt.</p>
          <p class="vb-intro">Diese frühe Erfahrung von Zurückweisung, still ertragen statt laut beklagt, ist der Boden, auf dem die selbsterhaltende Vier wächst. Die Taube lernte, ihre Sehnsucht nach Zugehörigkeit nicht einzufordern, sondern in eine innere Welt zu verlegen, die niemand ihr nehmen konnte – und die er später, Zeile um Zeile, zu Papier bringen sollte: fast einhundert Romane und Erzählungen, zusammengefasst unter dem Titel <em>La Comédie humaine</em> (Die menschliche Komödie), ein Gesamtwerk von einer Dichte und einem Umfang, wie ihn kaum ein anderer Schriftsteller seiner Zeit erreichte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Vier: Zähigkeit als Überlebensform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Vier (SE4)</strong> ist der Kontratyp der Vier: Sie zieht das eigene Leiden nicht in dramatische Selbstdarstellung, sondern hält es aus – allein, in stiller Härte gegen sich selbst. Naranjo nannte diesen Subtyp <em>Zähigkeit</em> (im Original: <em>tenacity</em>) – kein lautes Aufbegehren gegen das Schicksal, sondern ein zähes Weitermachen, das dem eigenen Schmerz keine Bühne gibt. Bei kaum einem Schriftsteller zeigt sich diese Zähigkeit so konkret wie bei Balzac: Um seine drückenden Schulden abzutragen – Folge gescheiterter Geschäftsversuche, etwa einer Druckerei und eines Verlags, sowie eines aufwendigen Lebensstils weit über seine Verhältnisse – schrieb er über Jahrzehnte hinweg nächtelang, oft 15 bis 18 Stunden am Stück.</p>
          <p class="vb-intro">Sein Tagesrhythmus war berüchtigt: ein kurzes Abendessen, ein Nickerlchen bis Mitternacht, dann ununterbrochenes Schreiben bis weit in den Vormittag hinein, angetrieben von gewaltigen Mengen starken schwarzen Kaffees – Dutzende Tassen, die er über die Jahre wortwörtlich seiner Gesundheit abrang. Das war kein Luxusmotiv, kein Streben nach müheloser Anerkennung, sondern reine Überlebensenergie: Die SE4 kämpft ihren Schmerz allein aus, bevor sie ihn zeigt, und bei Balzac hieß dieser Kampf, Schulden mit Sätzen abzutragen, einen nach dem anderen, Nacht für Nacht.</p>
          <p class="vb-intro">Der selbsterhaltende Instinkt richtet die Vier auf die eigene Stabilität – bei Balzac paradox gebrochen: Er lebte in ständiger finanzieller Instabilität, doch die Disziplin, mit der er dagegen anschrieb, war von unerschütterlicher Konsequenz. Kritiker seiner Zeit wie spätere Biografen sind sich einig, dass gerade der Druck der Schulden den ungeheuren Umfang seines Werks mit hervorbrachte – die Zähigkeit der SE4, die aus der Not eine lebenslange Schreibpraxis machte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Das erfundene „de"</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Vier ein ausgeprägtes Statusbewusstsein – den Wunsch, die eigene innere Welt nicht nur zu bewahren, sondern sichtbar in gesellschaftlichen Rang zu übersetzen. Bei Balzac zeigt sich das denkbar deutlich: Er stammte aus bürgerlichen Verhältnissen, doch schon als junger Mann begann er, seinen Familiennamen Balssa zu Balzac zu verändern und sich schließlich ein Adelsprädikat anzueignen, das ihm nicht zustand – aus Honoré Balzac wurde Honoré de Balzac, ohne jede genealogische Grundlage. Zeitgenossen und spätere Biografen beschreiben ihn geradezu als besessen vom Gedanken an gesellschaftlichen Aufstieg und aristokratischen Glanz.</p>
          <p class="vb-intro">Diese Besessenheit blieb nicht beim Namen: Balzac kleidete sich, wenn seine Mittel es zuließen, extravagant, sammelte Antiquitäten weit über seine finanziellen Möglichkeiten hinaus und pflegte einen Lebensstil, der eher zu einem Adligen als zu einem verschuldeten Schriftsteller passte – genau jene Ausgaben, die seine Schulden immer weiter anwachsen ließen und ihn zugleich zwangen, noch mehr zu schreiben. Der Dreierflügel verwandelt die introvertierte Tiefe der SE4 nicht in Rückzug, sondern in Ambition: Balzac wollte nicht nur innerlich einzigartig sein, er wollte, dass diese Einzigartigkeit gesehen, anerkannt, in gesellschaftlichem Rang bestätigt wurde – und schrieb dafür ein Gesamtwerk, das genau diese Welt aus Aufstieg, Geld und gesellschaftlichem Ehrgeiz in allen Facetten seziert, von <em>Le Père Goriot</em> bis <em>Eugénie Grandet</em>.</p>
        </blockquote>

        <h2 class="vb-section">4. Ewelina Hańska: Die Botschaft, die ihr Ziel fast nicht erreichte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1832 erhielt Balzac einen anonymen, bewundernden Brief aus dem fernen Osteuropa, unterzeichnet mit „L'Étrangère" – die Fremde. Dahinter verbarg sich Ewelina Hańska, eine polnische Gräfin, verheiratet mit einem deutlich älteren Adligen. Es begann ein Briefwechsel, der siebzehn Jahre andauern sollte – über weite Strecken die einzige Form der Nähe, die die beiden sich erlauben konnten, unterbrochen von seltenen, kurzen Zusammentreffen in ganz Europa. In dieser jahrzehntelangen Fernbeziehung liegt ein Aufblitzen sexuell-instinkttypischer Intensität, eine Verschmelzung über die Distanz hinweg, die die selbsterhaltende Grundausrichtung Balzacs nicht ersetzte, sondern als starke Nebenfarbe begleitete.</p>
          <p class="vb-intro">Als Hańskas Ehemann 1841 starb, hoffte Balzac auf eine baldige Heirat – doch es dauerte weitere neun Jahre, geprägt von Balzacs wachsenden Schulden, seiner sich verschlechternden Gesundheit und den langwierigen rechtlichen und familiären Verwicklungen um Hańskas Vermögen. Erst am 14. März 1850 heirateten die beiden, in der Ukraine, nach siebzehn Jahren Briefwechsel – die Taube, die ihre Botschaft endlich am Ziel abliefern konnte, nachdem sie einen Großteil ihres Lebens dafür gebraucht hatte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE4w3 liegt in der Fähigkeit, aus einer zutiefst persönlichen, oft schmerzhaften inneren Welt ein Werk zu schaffen, das über die eigene Lebenszeit hinaus wirkt. Balzacs <em>La Comédie humaine</em> – knapp einhundert vollendete Werke, dazu zahlreiche unvollendete Fragmente – gilt bis heute als eines der ambitioniertesten literarischen Projekte überhaupt: der Versuch, die gesamte französische Gesellschaft seiner Zeit in einem einzigen, riesigen, persönlich durchdrungenen Panorama einzufangen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> – das tiefe Gefühl, dass anderen etwas mitgegeben wurde, das einem selbst fehlt. Bei Balzac äußerte sich das als lebenslanges Ringen um Anerkennung, Status und materielle Sicherheit, die ihm die eigene Herkunft und die frühe familiäre Kälte vorenthalten hatten. Der Dreierflügel verschärfte dieses Ringen: Der erfundene Adelstitel, die kostspieligen Antiquitäten, die geschäftlichen Fehlspekulationen – all das war der Versuch, ein inneres Gefühl des Mangels durch äußeren Glanz zu kompensieren, und trieb ihn zugleich in immer neue Schulden, die wiederum noch mehr Schreibarbeit erforderten.</p>
          <p class="vb-intro">Der Schatten dieser Konstellation zeigte sich am deutlichsten in den letzten Lebensjahren: Jahrzehntelanger Raubbau an der eigenen Gesundheit – exzessiver Kaffeekonsum, chronischer Schlafmangel, Übergewicht und fortschreitende Herzprobleme – forderten ihren Preis. Fünf Monate nach der lang ersehnten Hochzeit mit Hańska starb Balzac am 18. August 1850 in Paris, im Alter von nur 51 Jahren, im Beisein seiner Mutter – jener Frau, deren frühe Zurückweisung einst den Ausgangspunkt seiner lebenslangen Suche nach Anerkennung gebildet hatte.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Von der erkämpften Anerkennung zur Selbstannahme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier führt von der Frage <em>Warum fehlt mir, was andere haben?</em> zur Erkenntnis <em>Was ich bin, ist genug – und ist einmalig.</em> Für die SE4w3 bedeutet das, den eigenen Wert nicht länger an äußeren Glanz, an einen erfundenen Titel oder an die nächste vollendete Seite zu knüpfen, sondern die eigene Tiefe als bereits ausreichend anzuerkennen.</p>
          <p class="vb-intro">Balzacs Leben zeigt, wie schwer dieser Schritt fällt, wenn die frühe Zurückweisung nie bewusst verarbeitet wird, sondern nur in immer neue Arbeit, immer neue Schulden, immer neuen äußeren Ehrgeiz umgeleitet wird. Und doch liegt gerade in seinem Spätwerk, in der jahrzehntelangen, geduldigen Verbindung zu Hańska und in der schieren Tiefe seines literarischen Blicks auf die menschliche Natur auch ein Aufblitzen dessen, was die geheilte Vier vermag: die eigene Einzigartigkeit nicht mehr beweisen zu müssen, sondern sie einfach zu leben – und in Balzacs Fall, sie der Nachwelt als eines der größten literarischen Vermächtnisse zu hinterlassen, das die französische Literatur kennt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      <p class="vb-intro" style="max-width:100%;">
        Die gesundheitlichen Folgen dieses jahrzehntelangen Raubbaus – Koffeinexzess, Schlafmangel,
        Übergewicht und die fortschreitende Herzinsuffizienz, die schließlich zu seinem Tod führte –
        werden im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-honore-de-balzac">Krankheitsporträt</a>
        ausführlich gedeutet.
      </p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se4", label:"SE4 – Die Taube: Subtyp-Profil"},
        {route:"beruehmte-adele", label:"Porträt: Adele (SE4w3)"},
        {route:"beruehmte-lady-diana", label:"Porträt: Lady Diana (SE4w3)"},
        {route:"beruehmte-cecily-brown", label:"Porträt: Cecily Brown (SE4w3)"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Krankheitsporträt: Honoré de Balzac (SE4w3) – Herzinsuffizienz"},
      ])}
    </div>
  `);
}

export function jamesCordenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-james-corden-portrait.jpg" alt="James Corden – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">James Corden</p>
        <p class="krim-portrait-typ">SO6w7 &middot; Sozialer Typ 6 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspieler, Moderator &amp; Produzent, geb. 1978 &ndash; Tierentsprechung: Erdm\u00e4nnchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Erdm\u00e4nnchen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Erdm\u00e4nnchen</strong> lebt nicht f\u00fcr sich allein. Es lebt f\u00fcr die Gruppe, mit der Gruppe, durch die Gruppe. Es ist selten das gr\u00f6\u00dfte Tier im Rudel, aber immer das, das am meisten daf\u00fcr tut, dass alle zusammenbleiben. Es organisiert, es sorgt sich, es holt andere mit ins Boot &ndash; oder, in diesem Fall, mit ins Auto.</p>
          <p class="vb-intro">Der britische Moderator James Corden hat aus genau diesem Impuls ein Weltformat gemacht: In \u2039Carpool Karaoke\u203a setzt er sich mit den gr\u00f6\u00dften Popstars der Welt in ein Auto, singt mit ihnen mit, lacht mit ihnen, macht aus einer Autofahrt einen gemeinsamen Moment, den Millionen Menschen mitf\u00fchlen. Kein Interview im klassischen Sinn, sondern eine Einladung: Komm rein, sing mit, sei Teil davon. Das ist das Erdm\u00e4nnchen bei der Arbeit &ndash; es holt die Gruppe zusammen, auch wenn die Gruppe gerade aus einem Weltstar und einer Kamera besteht.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sechs: Zugeh\u00f6rigkeit als B\u00fchne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sechs (SO6)</strong> ist nach Naranjo der Subtyp, den er <em>Pflicht</em> nannte: Sicherheit entsteht durch Zugeh\u00f6rigkeit zu einer Gruppe, durch das verl\u00e4ssliche Erf\u00fcllen einer Rolle innerhalb des Kollektivs. Anders als die F\u00fcnf oder die Vier sucht die SO6 nicht die Distanz oder die Abgrenzung &ndash; sie sucht die Verbindung, das gemeinsame Erlebnis, den Moment, in dem alle im selben Raum sind.</p>
          <p class="vb-intro">Cordens gesamte Karriere ist eine Bewegung hin zu genau diesem Prinzip. Er begann im britischen Ensembletheater, schrieb und spielte in der Sitcom \u2039Gavin &amp; Stacey\u203a mit &ndash; einem Format, das im Kern von nichts anderem handelt als von Familie, Freundschaft und Zugeh\u00f6rigkeit in einer englischen Kleinstadt. Als er 2015 die \u2039Late Late Show\u203a in den USA \u00fcbernahm, baute er sie nicht als Solo-Vehikel f\u00fcr seinen eigenen Witz, sondern als Ort der Begegnung: G\u00e4ste, die miteinander spielen, singen, kochen, sich blamieren &ndash; gemeinsam. Corden moderiert nicht \u00fcber der Gruppe. Er moderiert mitten in ihr.</p>
          <p class="vb-intro">Diese Pflicht zur Verbindung zeigt sich auch darin, wie sehr Corden auf Ensemblearbeit setzt: Als Produzent seiner eigenen Formate stellt er ganze Teams zusammen, h\u00e4lt sie \u00fcber Jahre zusammen, dankt ihnen \u00f6ffentlich. F\u00fcr die SO6 ist der eigene Erfolg nie ein Solo-Projekt. Er ist immer das Ergebnis einer Gruppe, der man dient und die einen tr\u00e4gt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Begeisterung als Einladung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel (w7)</strong> bringt der sozialen Sechs Tempo, Leichtigkeit und die F\u00e4higkeit, aus jeder Situation ein Fest zu machen. Wo eine SO6 mit schwächerem Siebenerflügel vor allem verlässlich dienen würde, fügt ein stark ausgeprägter Siebenerflügel die Lust an Vielfalt und Show hinzu: Die SO6w7 dient nicht leise im Hintergrund &ndash; sie dient, indem sie die B\u00fchne mit allen teilt und dabei selbst strahlt.</p>
          <p class="vb-intro">Cordens Energie ist explosiv, ansteckend, st\u00e4ndig in Bewegung: Er singt, tanzt, spielt Sketche, moderiert die Grammys und die Tony Awards, produziert Shows, schreibt Drehb\u00fccher. Diese Bandbreite ist der Siebenerfl\u00fcgel in Reinform &ndash; nicht die stille Tiefe des F\u00fcnferfl\u00fcgels, sondern die Weite, die immer neue Formen, neue Formate, neue Verbindungen sucht. \u2039Carpool Karaoke\u203a selbst ist der Siebenerfl\u00fcgel als Konzept: ein improvisiertes, spontanes, freudiges Format, das aus einer einfachen Idee eine unersch\u00f6pfliche Quelle f\u00fcr Gemeinschaftserlebnisse macht.</p>
          <p class="vb-intro">Wo Herbert Gr\u00f6nemeyer (SO6w7) seinen Siebenerfl\u00fcgel nutzt, um nach Verlusten wieder aufzustehen und weiterzumachen, nutzt Corden ihn, um permanent Gelegenheiten zur Verbindung zu erschaffen. Beide sind Erdm\u00e4nnchen mit Vorw\u00e4rtsdrang &ndash; nur richtet sich Cordens Energie weniger auf die eigene Heilung als auf das st\u00e4ndige Zusammenbringen anderer.</p>
        </blockquote>

        <h2 class="vb-section">4. Vom Ensemble-Darsteller zur globalen Late-Night-B\u00fchne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Corden wuchs in einer Musikerfamilie in der englischen Grafschaft Buckinghamshire auf und fand fr\u00fch zum Ensembletheater. Mit \u2039Gavin &amp; Stacey\u203a (ab 2007, gemeinsam mit Ruth Jones geschrieben) gelang ihm ein nationaler Publikumserfolg, der von Anfang an auf einem Kollektiv beruhte: eine Sitcom \u00fcber zwei Familien, die zusammenwachsen. 2011 gewann er einen Tony Award f\u00fcr seine Hauptrolle in \u2039One Man, Two Guvnors\u203a &ndash; einer Farce, die vom Chaos des Dienens an zwei Herren gleichzeitig lebt.</p>
          <p class="vb-intro">2015 \u00fcbernahm Corden \u00fcberraschend die \u2039Late Late Show\u203a von CBS &ndash; ein Brite in einem urklassisch amerikanischen Format. Statt sich an das bestehende Muster anzupassen, erfand er es neu: \u2039Carpool Karaoke\u203a wurde binnen weniger Jahre zu einem der meistgesehenen Late-Night-Formate der Welt, mit G\u00e4sten von Adele bis Paul McCartney. Millionen von Menschen sahen zu, wie ein Moderator und ein Weltstar in einem engen Auto gemeinsam sangen &ndash; ein Bild radikaler Zugeh\u00f6rigkeit, ohne B\u00fchne, ohne Distanz.</p>
          <p class="vb-intro">2023 beendete Corden die Show nach acht Jahren freiwillig, um zu seiner Familie nach London zur\u00fcckzukehren. Kein Karriereeinbruch, keine Krise &ndash; eine bewusste Entscheidung f\u00fcr die Gruppe, die ihm am n\u00e4chsten steht. Das Erdm\u00e4nnchen kehrt zur\u00fcck ins eigene Revier, wenn die Familie ruft.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Sechs</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO6w7 ist ihre <strong>F\u00e4higkeit, Verbindung zu stiften, wo vorher keine war</strong>. Corden hat ein Format erfunden, das Weltstars und Millionenpublikum in einem gemeinsamen, unpr\u00e4tenti\u00f6sen Moment zusammenbringt &ndash; ohne die \u00fcbliche Distanz zwischen Star und Zuschauer. Kollegen und G\u00e4ste beschreiben ihn immer wieder als warmherzig, pr\u00e4sent, jemanden, der andere zum Strahlen bringt, statt sich selbst in den Mittelpunkt zu stellen.</p>
          <p class="vb-intro">Der Schatten der SO6w7 liegt im Gegenteil dieser W\u00e4rme: In den Bem\u00fchungen, es allen recht zu machen und st\u00e4ndig sichtbar Gemeinschaft zu stiften, kann die Fassade der Freundlichkeit br\u00fcchig werden, wenn der Druck steigt. Corden geriet mehrfach in die Kritik &ndash; etwa wegen Berichten \u00fcber unh\u00f6fliches Verhalten gegen\u00fcber Restaurantpersonal 2022, die er \u00f6ffentlich korrigierte und sich daf\u00fcr entschuldigte. F\u00fcr die SO6 ist das eine typische Bruchstelle: Die Sorge um die Gruppe nach au\u00dfen kann in Momenten der eigenen Ersch\u00f6pfung nach innen kippen &ndash; und genau dort zeigt sich, wie ernst es mit der eigenen F\u00fcrsorge tats\u00e4chlich ist.</p>
          <p class="vb-intro">Das ist die Spannung der SO6w7: Der Wunsch, alle mitzunehmen, kann in \u00dcberforderung kippen &ndash; und die eigene Ersch\u00f6pfung wird dann sichtbar genau dort, wo die Fassade der st\u00e4ndigen Verbindlichkeit am d\u00fcnnsten ist.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Verbindung ohne Ersch\u00f6pfung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Bin ich der Gruppe genug?</em> zur Erkenntnis <em>Ich muss nicht st\u00e4ndig beweisen, dass ich dazugeh\u00f6re &ndash; ich geh\u00f6re bereits dazu.</em> F\u00fcr die SO6w7 bedeutet das, nicht jede Gelegenheit zur Verbindung ergreifen zu m\u00fcssen, sondern auch Pausen zuzulassen, ohne die Sorge, dadurch aus der Gemeinschaft zu fallen.</p>
          <p class="vb-intro">Cordens R\u00fcckkehr nach London, weg vom nonstop-Rhythmus der amerikanischen Late-Night-Industrie, hin zu seiner Familie, liest sich wie genau dieser Schritt: das Erdm\u00e4nnchen, das erkennt, dass die wichtigste Wache nicht die vor der gro\u00dfen Kamera ist, sondern die f\u00fcr die eigenen Kinder. Er moderiert weiterhin, produziert, tritt auf &ndash; aber aus einer Position, die nicht mehr beweisen muss, sondern einfach da sein darf. Das ist die reife SO6w7: Verbindung stiften, weil es Freude macht &ndash; nicht, weil man sonst Angst hat, allein zu sein.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so6", label:"SO6 \u2013 Das Erdm\u00e4nnchen: Subtyp-Profil"},
        {route:"beruehmte-herbert-groenemeyer", label:"Portr\u00e4t: Herbert Gr\u00f6nemeyer (SO6w7)"},
        {route:"beruehmte-jonah-hill", label:"Portr\u00e4t: Jonah Hill (SO6w7)"},
      ])}
    </div>
  `);
}

export function joeNavarroPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-joe-navarro-portrait.jpg" alt="Joe Navarro – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Joe Navarro</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Sozialer Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Kubanisch-US-amerikanischer Autor &amp; ehem. FBI-Agent, geb. 1953 in Cienfuegos, Kuba &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; ein Tier, das seine eigenen, schwer erkämpften Fähigkeiten am Ende an eine ganze Gemeinschaft weitergeben will. Joe Navarros Interesse an Körpersprache entstand nicht aus akademischer Neugier, sondern aus purer Notwendigkeit: Als junger kubanischer Flüchtling in Miami, der die englische Sprache noch nicht beherrschte, lernte er, Menschen über ihre Körpersignale statt über Worte zu verstehen.</p>
          <p class="vb-intro">Joe Navarro wurde am 26. Mai 1953 in Cienfuegos, Kuba, geboren. Was als überlebensnotwendige Fähigkeit eines sprachlich isolierten Kindes begann, wurde zur Grundlage einer außergewöhnlichen Karriere – mit 23 Jahren wurde er persönlich vom FBI rekrutiert und zu einem der jüngsten Agenten in der Geschichte der Behörde.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Eine Überlebensfähigkeit wird zum Geschenk an Millionen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte die <strong>soziale Zwei (SO2)</strong> <em>Ambition</em>: den Antrieb, durch Einfluss und Wissen für ein ganzes Kollektiv zu sorgen. Navarro arbeitete 25 Jahre lang als FBI-Sonderagent im Bereich Spionageabwehr und Verhaltensanalyse und gehörte zu den sechs Gründungsmitgliedern des elitären Behavioral Analysis Program der Behörde – als einziger Agent mit ausgewiesener Expertise in Körpersprache.</p>
          <p class="vb-intro">2008 veröffentlichte er <em>What Every Body Is Saying</em>, das zum internationalen Bestseller in 27 Sprachen wurde. Was einst eine persönliche Überlebensstrategie eines isolierten Kindes war, wurde damit zu einem Werkzeug, das Millionen von Menschen weltweit zugänglich gemacht wurde – die SO2 in ihrer klarsten Form: individuelles Wissen, das zum Geschenk an ein globales Publikum wird.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Wissenschaftliche Systematik statt bloßer Anekdoten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sozialen Zwei eine innere Achse aus Sorgfalt und dem Bedürfnis, Wissen fundiert statt beliebig weiterzugeben. Navarros akademischer Werdegang – ein Bachelor der Brigham Young University und ein Master der Salve Regina University – bildet das Fundament seiner Arbeit, die er als Gastprofessor an der Saint Leo University und regelmäßiger Referent an der Harvard Business School fortsetzt.</p>
          <p class="vb-intro">Seine Position als einziger Körpersprache-Experte im FBI-Verhaltensanalyseprogramm zeigt denselben Anspruch: Verhaltensbeobachtung sollte systematisch und überprüfbar sein, nicht intuitiv geraten. Der Einserflügel verlangt, dass ein derart mächtiges Wissen – Menschen lesen zu können – auf einem soliden, methodischen Fundament ruht.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w1 liegt in der Fähigkeit, eine aus persönlicher Not entstandene Fähigkeit systematisch aufzuarbeiten und einem breiten Publikum zugänglich zu machen, statt sie als privaten Vorteil zu behalten. Navarros Weg vom sprachlich isolierten Flüchtlingskind zum weltweit anerkannten Experten für nonverbale Kommunikation zeigt, wie sich eine ursprüngliche Verwundbarkeit in eine universell nützliche Gabe verwandeln lässt.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, durch das eigene Wissen für andere unentbehrlich zu sein. Bei der SO2w1 kann sich das mit einem hohen Anspruch an die eigene Autorität verbinden, der aus jahrzehntelanger, hart erarbeiteter Expertise gespeist wird und wenig Raum für Beliebigkeit lässt.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Vom sprachlosen Kind zum weltweit gefragten Verhaltensexperten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von den ersten, überlebensnotwendigen Beobachtungen eines Kindes ohne Sprache über 25 Jahre FBI-Dienst bis zum internationalen Bestseller in 27 Sprachen zieht sich ein roter Faden durch Navarros Werk: eine persönliche Notwendigkeit, die in systematisches Wissen und schließlich in ein Geschenk an ein Millionenpublikum verwandelt wurde.</p>
          <p class="vb-intro">Der Golden Retriever wedelt nicht um der Aufmerksamkeit willen, sondern weil er spürt, wo im Rudel Orientierung fehlt. Joe Navarros Weg von einem Jungen, der die Sprache seiner neuen Heimat noch nicht sprach, zu einem weltweit anerkannten Lehrer für das Lesen menschlichen Verhaltens zeigt diesen Antrieb in seiner konstruktivsten Form: Wissen, das aus Not geboren wurde und zur Fürsorge für viele wurde.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-david-lurey", label:"Portrait: David Lurey (SO2w1)"},
        {route:"beruehmte-anastasia-barner", label:"Portrait: Anastasia Barner (SO2w1)"},
      ])}
    </div>
  `);
}

export function junkoTabeiPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-junko-tabei-portrait.jpg" alt="Junko Tabei – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Junko Tabei</p>
        <p class="krim-portrait-typ">SE7w6 &middot; Selbsterhaltende Typ 7 mit Sechserfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Bergsteigerin, 1939&ndash;2016 &ndash; erste Frau auf dem Mount Everest &ndash; Tierentsprechung: Gorilla</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gorilla</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gorilla</strong> ist das Tier der selbsterhaltenden Sieben &ndash; kr\xe4ftig, bodenst\xe4ndig, in sich ruhend, mit einer Ausdauer, die nicht auf spektakul\xe4re Gesten angewiesen ist. Junko Tabei, 1939 in Japan geboren, wurde 1975 als erste Frau bekannt, die den Gipfel des Mount Everest erreichte &ndash; und 1992 als erste Frau, die die &bdquo;Seven Summits&ldquo;, die h\xf6chsten Berge aller sieben Kontinente, bestieg.</p>
          <p class="vb-intro">Ihr Everest-Aufstieg begann mit einer Beinahe-Katastrophe: Eine Lawine verschüttete ihr Lager auf 6.300 Metern, Tabei wurde bewusstlos ausgegraben &ndash; und erreichte wenige Tage sp\xe4ter dennoch den Gipfel. Sie starb 2016 an Krebs, nachdem sie bis kurz vor ihrem Tod weiter Berge bestiegen hatte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sieben: Fülle durch beharrliches Tun</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sieben (SE7)</strong> ist nach Naranjo die bodenst\xe4ndigste der drei Siebener-Subtypen &ndash; keine rastlose Reiselust wie die sexuelle Sieben, keine B\xfchnenpr\xe4senz wie die soziale Sieben, sondern eine pragmatische, auf konkrete Ziele gerichtete Ausdauer. Tabei kam aus einfachen Verh\xe4ltnissen, war als Kind kr\xe4nklich und schw\xe4chlich &ndash; und fand im Bergsteigen eine Praxis, die ihr genau jene k\xf6rperliche und seelische Stabilit\xe4t gab, die ihr sonst fehlte.</p>
          <p class="vb-intro">In Japan der 1960er-Jahre war es f\xfcr Frauen unerh\xf6rt, ernsthaft Bergsteigen zu betreiben &ndash; Tabei wurde von M\xe4nnern in Kletterclubs abgewiesen und h\xf6rte, sie solle sich lieber um Kinder k\xfcmmern statt um Berge. 1969 gr\xfcndete sie stattdessen den &bdquo;Ladies Climbing Club&ldquo;, Japans ersten Frauen-Bergsteigerverein, unter dem Motto: &bdquo;Lasst uns gemeinsam ins Ausland gehen, aus eigener Kraft.&ldquo;</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserfl\xfcgel: Gemeinschaft statt Einzelg\xe4ngertum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eine SE7 mit schw\xe4cher ausgepr\xe4gtem Sechserfl\xfcgel h\xe4tte ihre Bergtouren m\xf6glicherweise als Einzelg\xe4ngerin bestritten. Bei Tabei trat stattdessen eine ausgepr\xe4gte Bindung an Gemeinschaft und Team hervor: Die Everest-Expedition 1975 war eine rein japanische Frauenexpedition, die sie mitorganisierte &ndash; finanziert unter anderem durch Sponsoring von Zeitungen und einem Bierhersteller, weil traditionelle Geldgeber eine Frauenexpedition nicht ernst nahmen.</p>
          <p class="vb-intro">Auch als Mutter zweier Kinder blieb sie dem Bergsteigen treu, organisierte Kinderbetreuung mit anderen M\xfcttern aus dem Kletterclub und normalisierte damit fr\xfch, dass Mutterschaft und Hochleistungssport sich nicht ausschlie\xdfen m\xfcssen. Der Sechserfl\xfcgel zeigt sich hier als F\xe4higkeit, sich verl\xe4sslich in ein Netzwerk einzubinden, statt allein zu operieren &ndash; Loyalit\xe4t zur Gruppe als Fundament der eigenen Leistung.</p>
          <p class="vb-intro">Dass Tabei wiederholt eigene Gruppen und Vereine gr\xfcndete, k\xf6nnte auf den ersten Blick f\xfcr eine soziale statt eine selbsterhaltende Sieben sprechen &ndash; trifft bei ihr jedoch nicht zu. Naranjo beschrieb die selbsterhaltende Sieben als jenen Subtyp, der auffallend h\xe4ufig enge, fast famili\xe4re Clanstrukturen (Clanbildung) um sich bildet, in Extremf\xe4llen sogar mit mafi\xf6s anmutenden Loyalit\xe4tsmustern &ndash; nicht aus sozialem Geltungsbed\xfcrfnis wie bei der SO7, sondern weil genau diese verl\xe4ssliche, familienhafte Gruppe die eigene materielle und emotionale Sicherheit tr\xe4gt. Der &bdquo;Ladies Climbing Club&ldquo; war keine \xf6ffentliche B\xfchne, sondern ein Schutz- und Versorgungsnetzwerk im Sinne der SE7 &ndash; nach innen gerichtet, nicht nach au\xdfen.</p>
        </blockquote>

        <h2 class="vb-section">4. Nach dem Everest: Der stille zweite Teil</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Anders als man es von einer &bdquo;Rekordjägerin&ldquo; erwarten w\xfcrde, geriet Tabei nach ihrem Weltruhm nicht in st\xe4ndige Selbstinszenierung. Sie bestieg weiterhin systematisch die h\xf6chsten Berge aller Kontinente, ohne dabei den medialen Trubel zu suchen, und widmete sich zunehmend dem Umweltschutz &ndash; insbesondere der Vermüllung der Bergpfade am Everest, die durch den wachsenden Tourismus entstand.</p>
          <p class="vb-intro">Sie studierte im hohen Alter noch Umweltwissenschaften und setzte sich f\xfcr den Schutz der Bergwelt ein, die ihr so viel gegeben hatte. Das ist die SE7w6 in ihrer reifsten Form: Die anf\xe4ngliche pers\xf6nliche Ausdauer wandelt sich in Verantwortung f\xfcr die Sache, die gr\xf6\xdfer ist als die eigene Leistung.</p>
        </blockquote>

        <h2 class="vb-section">5. Bergsteigen bis zum Schluss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2012 wurde bei Tabei Bauchfellkrebs diagnostiziert. Statt sich zur\xfcckzuziehen, organisierte sie weiterhin Bergtouren f\xfcr junge Menschen, die vom Erdbeben und Tsunami 2011 betroffen waren, und bestieg selbst weiter Berge, so lange es ihr Zustand erlaubte &ndash; zuletzt den Fuji, drei Monate vor ihrem Tod 2016.</p>
          <p class="vb-intro">Diese Beharrlichkeit bis zum letzten Moment ist typisch f\xfcr die SE7: Freude und Sinn liegen nicht in einem einzelnen gro\xdfen Ereignis, sondern in der fortgesetzten, verl\xe4sslichen Aus\xfcbung dessen, was N\xe4hrstoff f\xfcr die eigene Vitalit\xe4t ist &ndash; bis zuletzt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Gorilla, der Frauen den Weg auf den Gipfel bahnte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Junko Tabeis Leben zeigt die selbsterhaltende Sieben mit Sechserfl\xfcgel in ihrer eindrucksvollsten Form: pragmatische Ausdauer statt spektakul\xe4rer Geste, Gemeinschaft statt Einzelg\xe4ngertum, beharrliches Weitermachen statt einmaligem Triumph. Sie wurde nicht ber\xfchmt, weil sie den Nervenkitzel suchte, sondern weil sie eine Sache, die ihr Halt gab, konsequent bis zum Ende lebte.</p>
          <p class="vb-intro">Der Gorilla bleibt in seinem Revier und verteidigt es beharrlich, ohne laut zu sein &ndash; genau das tat Tabei f\xfcr Frauen im Bergsport: Sie er\xf6ffnete keinen einzelnen spektakul\xe4ren Weg, sondern baute ein dauerhaftes Fundament, auf dem Generationen von Bergsteigerinnen nach ihr aufbauen konnten.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-jeanne-calment", label:"Portr\xe4t: Jeanne Calment (SE7w6)"},
        {route:"beruehmte-larry-king", label:"Portr\xe4t: Larry King (SE7w6)"},
        {route:"krankheitsportraets-junko-tabei", label:"Krankheitsporträt: Junko Tabei (SE7w6) – Krebs und weitere Gipfel"},
        {route:"beruehmte-elton-john", label:"Porträt: Elton John (SE7w6)"},
        ])}
      </div>
    </div>
  `);
}

export function konradAdenauerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-konrad-adenauer-portrait.jpg" alt="Konrad Adenauer – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Konrad Adenauer</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Erster Bundeskanzler der Bundesrepublik Deutschland, 1876&ndash;1967 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler \u00fcber den Tr\u00fcmmern</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; er baut sein Nest hoch \u00fcber dem Boden, fernab von Chaos und Zufall, und \u00fcberblickt von dort sein Revier mit unbestechlicher Klarheit. Er handelt selten aus dem Impuls heraus; sein Flug ist berechnet, seine Beute sorgf\u00e4ltig anvisiert, sein Territorium mit \u00e4u\u00dferster Sorgfalt verteidigt.</p>
          <p class="vb-intro">Der deutsche Politiker Konrad Adenauer wurde 1876 in K\u00f6ln geboren, studierte Jura, wurde 1917 K\u00f6lner Oberb\u00fcrgermeister &ndash; ein Amt, das er mit disziplinierter Arbeitsmoral und gro\u00dfem st\u00e4dtebaulichem Weitblick ausf\u00fcllte, unter anderem mit der Anlage des K\u00f6lner Gr\u00fcng\u00fcrtels. 1933 wurde er von den Nationalsozialisten aus dem Amt gedr\u00e4ngt, mehrfach verhaftet, musste zeitweise untertauchen. Nach dem Krieg, im Alter von bereits 73 Jahren, begann seine eigentliche historische Rolle: 1949 wurde er erster Bundeskanzler der neu gegr\u00fcndeten Bundesrepublik Deutschland &ndash; und blieb es 14 Jahre lang, bis 1963.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Ordnung als \u00dcberlebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> sucht Sicherheit durch Kontrolle, Sparsamkeit und minuti\u00f6se Vorsorge &ndash; sie baut sich, oft im Stillen, ein solides Fundament, auf das sie sich in der Krise verlassen kann. Adenauer war f\u00fcr seine fast asketische Disziplin und seinen sprichw\u00f6rtlichen Flei\u00df bekannt: Er stand jeden Tag vor sechs Uhr auf, arbeitete strukturiert bis in den sp\u00e4ten Abend, kontrollierte Akten und Details pers\u00f6nlich, wo andere l\u00e4ngst delegiert h\u00e4tten.</p>
          <p class="vb-intro">Diese Ordnungsliebe \u00fcbertrug er auf den Wiederaufbau eines v\u00f6llig zerst\u00f6rten Landes: Die Wirtschaftspolitik der sozialen Marktwirtschaft unter Ludwig Erhard, die er als Kanzler st\u00fctzte und absicherte, war genau dieses Prinzip im gro\u00dfen Ma\u00dfstab &ndash; Freiheit des Marktes, aber eingebettet in feste, verl\u00e4ssliche Regeln und soziale Sicherungen. Aus den Tr\u00fcmmern von 1945 entstand binnen weniger Jahre das &bdquo;Wirtschaftswunder&ldquo; &ndash; eine geordnete, disziplinierte Aufbauleistung, die zur Grundlage der westdeutschen Stabilit\u00e4t wurde.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Geduld und Verl\u00e4sslichkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> mildert die Strenge, die bei schwach ausgepr\u00e4gtem Neunerfl\u00fcgel sch\u00e4rfer bliebe, zu einer bed\u00e4chtigeren, geduldigeren Haltung &ndash; Prinzipientreue wird nicht laut verk\u00fcndet, sondern still und beharrlich durchgehalten. Adenauers legend\u00e4re Langsamkeit &ndash; seine Gegner nannten ihn sp\u00f6ttisch &bdquo;den Alten&ldquo; &ndash; war in Wahrheit eine bewusste Strategie: Er lie\u00df sich nie zu \u00fcberst\u00fcrzten Entscheidungen dr\u00e4ngen, pr\u00fcfte, wartete den richtigen Moment ab und hielt dann unbeirrbar an seiner einmal gefassten Linie fest.</p>
          <p class="vb-intro">Sein ber\u00fchmtestes Prinzip, die &bdquo;Politik der Westbindung&ldquo; &ndash; die feste, unumkehrbare Verankerung der jungen Bundesrepublik in der NATO und im westlichen B\u00fcndnis &ndash; verfolgte er \u00fcber Jahre hinweg gegen erhebliche innenpolitische Widerst\u00e4nde, ohne sich von Kritik beirren zu lassen. Kein spektakul\u00e4rer Coup, sondern z\u00e4he, geduldige Beharrlichkeit &ndash; die Eins mit der Gelassenheit der Neun im R\u00fccken.</p>
        </blockquote>

        <h2 class="vb-section">4. Vers\u00f6hnung als Prinzipiensache</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1963 unterzeichnete Adenauer gemeinsam mit dem franz\u00f6sischen Pr\u00e4sidenten Charles de Gaulle den \u00c9lys\u00e9e-Vertrag &ndash; die Grundlage der deutsch-franz\u00f6sischen Auss\u00f6hnung nach drei Kriegen innerhalb von siebzig Jahren. F\u00fcr einen Mann, der die beiden Weltkriege als Erwachsener miterlebt hatte, war dies kein taktisches Man\u00f6ver, sondern die konsequente Umsetzung einer moralischen \u00dcberzeugung: dass dauerhafter Frieden nur durch feste, verbindliche Vertr\u00e4ge und nicht durch blo\u00dfe Absichtserkl\u00e4rungen gesichert werden kann.</p>
          <p class="vb-intro">Ebenso konsequent verfolgte er die Politik der Wiedergutmachung gegen\u00fcber Israel und dem j\u00fcdischen Volk &ndash; das Luxemburger Abkommen von 1952 sicherte trotz erheblichen innenpolitischen Widerstands Entsch\u00e4digungszahlungen zu. F\u00fcr die selbsterhaltende Eins ist das typisch: Eine einmal als richtig erkannte Verpflichtung wird nicht verhandelt, sondern durchgehalten, komme, was wolle.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist die F\u00e4higkeit, <strong>Prinzipientreue mit Geduld</strong> zu verbinden &ndash; eine Ordnung, die nicht erzwungen, sondern \u00fcber Jahre hinweg beharrlich und verl\u00e4sslich aufgebaut wird. Adenauers Verm\u00e4chtnis &ndash; eine stabile, im Westen verankerte Demokratie &ndash; verdankt sich genau dieser Mischung aus unbeirrbarer Prinzipientreue und der Bereitschaft, geduldig auf den richtigen Moment zu warten.</p>
          <p class="vb-intro">Der Schatten zeigte sich in seiner mitunter autorit\u00e4ren Amtsf\u00fchrung &ndash; Kritiker sprachen von einer &bdquo;Kanzlerdemokratie&ldquo;, in der Adenauer Entscheidungen zunehmend an Kabinett und Parlament vorbei traf. Auch sein Umgang mit der eigenen Nachfolge war von dieser Kontrollneigung gepr\u00e4gt: Er blieb deutlich l\u00e4nger im Amt, als es die eigene Partei f\u00fcr klug hielt, und tat sich schwer, Macht abzugeben. Die Kehrseite der selbsterhaltenden Eins mit Neunerfl\u00fcgel: Die Sorge um Stabilit\u00e4t kann in eine Unf\u00e4higkeit umschlagen, den eigenen R\u00fcckzug rechtzeitig und geordnet zu vollziehen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Adler, der ein Land wieder flugf\u00e4hig machte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Konrad Adenauer starb 1967 in Rh\u00f6ndorf, im Alter von 91 Jahren &ndash; bis kurz vor seinem Tod politisch interessiert und aktiv. Sein Amtsantritt als Kanzler im Alter von 73 Jahren, mitten in den Tr\u00fcmmern eines besiegten Landes, gilt noch heute als eines der ungew\u00f6hnlichsten politischen Comebacks der deutschen Geschichte.</p>
          <p class="vb-intro">Der Adler, der sp\u00e4t noch einmal aufstieg, nachdem sein Nest zerst\u00f6rt worden war, und der von dort, in ruhiger, unbeirrbarer H\u00f6he, ein zerbrochenes Land St\u00fcck f\u00fcr St\u00fcck wieder aufbaute &ndash; das ist das bleibende Bild der selbsterhaltenden Eins mit Neunerfl\u00fcgel: Ordnung, die nicht aus H\u00e4rte entsteht, sondern aus geduldiger, prinzipientreuer Sorgfalt.</p>
        </blockquote>

        <p class="vb-intro">Der schwere Autounfall von 1917, der sein Gesicht lebenslang ver\u00e4nderte, sowie die Verfolgung und Haft unter den Nationalsozialisten werden ausf\u00fchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Krankheitsportr\u00e4t zu Adenauer</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsportr\u00e4t: Konrad Adenauer (SE1w9)"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Adler: Subtyp-Profil"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portr\xe4t: Queen Elizabeth II. (SE1w9)"},
        {route:"beruehmte-helmut-kohl", label:"Portr\xe4t: Helmut Kohl (SE8w9) \u2013 Bundeskanzler"},
      ])}
    </div>
  `);
}

export function lindaLeinweberPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-linda-leinweber-portrait.jpg" alt="Linda Leinweber" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Linda Leinweber</p>
        <p class="krim-portrait-typ">SX4w5 &middot; Sexueller Typ 4 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Psychologin, Autorin, Coach, geb. 1988 &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua, der hinschauen gelernt hat</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist das Tier der sexuellen Vier: klein von Gestalt, gro\xdf im Innenleben, und mit einer Intensit\xe4t ausgestattet, die nichts Halbes kennt. Der Chihuahua liebt tief, f\xfchlt sch\xe4rfer als die meisten um ihn herum und l\xe4sst sich nicht einsch\xfcchtern &ndash; aber er ist auch empfindlich, verletzlich und auf Verbindung angewiesen wie kaum ein anderes Tier. Was er aufgebaut hat, sch\xfctzt er. Was er gef\xfchlt hat, vergisst er nicht. Und was er einmal verstanden hat, gibt er weiter.</p>
          <p class="vb-intro">Die deutsche Linda-Marlen Leinweber ist Psychologin, Autorin, Coach und Gr\xfcnderin der Online-Plattform Poise &ndash; und eine der prononciertesten deutschen Stimmen im Bereich mentale Gesundheit und Pr\xe4vention. Ihr Weg dorthin f\xfchrte nicht durch die Theorie, sondern durch das eigene Erleben: durch Jahre, in denen sie selbst sprachlos gegen\xfcber dem stand, was ihr K\xf6rper und ihre Psyche ihr mitteilten. Diese Biografie ist keine Randnotiz. Sie ist das Fundament.</p>
          <p class="vb-intro">Was Linda Leinweber von vielen anderen Psychologinnen und Coaches unterscheidet, ist diese Verbindung: Sie spricht nicht von au\xdfen \xfcber Schmerz. Sie spricht aus einem Inneren, das diesen Schmerz kennt &ndash; und das gelernt hat, ihn zu lesen. Das ist SX4w5: Tiefe, die sich nicht sch\xe4mt. Erkenntnis, die sich nicht versteckt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\xe4t gegen die Verharmlosung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> ist in der Enneagramm-Tradition der Subtyp, der den Schmerz der Vier nicht nach innen tr\xe4gt, sondern nach au\xdfen wendet &ndash; als Intensit\xe4t, als Verlangen, als Feuer. Naranjo nannte diesen Subtyp <em>Rivalit\xe4t</em>: die brennende \xdcberzeugung, dass anderen etwas gegeben wurde, was einem selbst vorenthalten wurde &ndash; und der Antrieb, dagegen anzutreten, \xfcbertreffen zu wollen, sich zu beweisen. Bei der SX4 bleibt dieser Antrieb nicht abstrakt. Er richtet sich auf etwas Konkretes &ndash; auf einen Menschen, auf ein System, auf eine Ungerechtigkeit.</p>
          <p class="vb-intro">Bei Linda Leinweber hat sich diese Energie einen klaren Gegner gesucht: die Verharmlosung psychischer Not. Die Vorstellung, dass Angst und Panik \xfcberwindbar seien, wenn man sich nur mehr zusammenrei\xdft. Die Idee, dass Burnout eine Frage der Disziplin sei und nicht des Systems. Dass Pr\xe4vention Luxus sei und nicht Vernunft. Gegen diese Haltung &ndash; die sie nicht zuletzt an sich selbst erlebt hat, in den Jahren mit Panikattacken und Ersch\u00f6pfung &ndash; richtet sie ihre Arbeit wie ein Gegengewicht.</p>
          <p class="vb-intro">Die eigene Krise war der Wendepunkt. Linda Leinweber war bereits als Model t\xe4tig, hatte Psychologie in K\xf6ln und Berlin studiert, als sie am eigenen Leib erlebte, was es bedeutet, wenn das Nervensystem kollabiert: Panikattacken, Druck, das Gef\xfchl, in einem Hamsterrad zu sitzen, das sie selbst aufgebaut hatte. Diese Erfahrung hat sie nicht begraben. Sie hat sie zur Grundlage ihrer gesamten beruflichen Ausrichtung gemacht. Das ist SX4: Der Schmerz wird nicht verwaltet. Er wird zum Kompass.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Die Analytikerin hinter der Stimme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> bringt der sexuellen Vier etwas Entscheidendes: den analytischen Blick, den Hunger nach Verst\xe4ndnis, die F\xe4higkeit, das eigene Erleben nicht nur zu f\xfchlen, sondern zu durchdringen. Die SX4 allein k\xf6nnte in der Intensit\xe4t des eigenen Empfindens stecken bleiben &ndash; der F\xfcnferfl\xfcgel zieht sie in die Beobachtung, in die Theorie, in das Handwerk. Er sagt: <em>F\xfchlen reicht nicht &ndash; man muss auch verstehen.</em></p>
          <p class="vb-intro">Linda Leinwebers Ausbildungsweg tr\xe4gt diese Handschrift: Psychologiestudium, systemische Organisationsberatung, zertifiziertes Coaching, Hypnosetherapie. Das ist keine Sammlung von Zertifikaten &ndash; das ist ein F\xfcnferfl\xfcgel, der von einem Werkzeug zum n\xe4chsten wandert, weil keines allein ausreicht. Die Hypnosetherapie f\xe4llt dabei besonders auf: Sie setzt dort an, wo klassische Gespr\xe4chstherapie an ihre Grenzen st\xf6\xdft &ndash; im tiefen Unterbewusstsein, im K\xf6rperged\xe4chtnis, in den Mustern, die sich nicht durch Einsicht allein aufl\xf6sen lassen. Wer diesen Weg geht, denkt in Tiefen.</p>
          <p class="vb-intro">Der F\xfcnferfl\xfcgel zeigt sich auch in Leinwebers Publikationsarbeit. Ihr Buch <em>Frei und trotzdem verbunden</em> &ndash; ein Titel, der selbst schon ein Paradox denkt &ndash; widmet sich Beziehungsdynamiken, Bindungsmustern und Konfliktl\xf6sungen. Das ist kein Ratgeberbuch im klassischen Sinne: kein &bdquo;10 Schritte zur besseren Beziehung&ldquo;, sondern ein Versuch zu verstehen, warum Menschen in immer denselben Mustern stecken &ndash; und was es braucht, um herauszufinden. Das ist die SX4w5 in ihrem besten Element: Tiefe, die anderen n\xfctzt.</p>
        </blockquote>

        <h2 class="vb-section">4. Poise und die Vision der Pr\xe4vention</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mit <strong>Poise</strong> hat Linda Leinweber eine Plattform geschaffen, die ihren Ansatz institutionell verankert: ein interdisziplin\xe4res Team aus Psychologinnen, Psychotherapeutinnen und Coaches, das psychologische Beratung und Begleitung online zug\xe4nglich macht. Der Name ist dabei mit Bedacht gewählt &ndash; <em>Poise</em> bedeutet auf Englisch Gleichgewicht, Haltung, innere Stabilit\xe4t. Nicht Drama. Nicht spektakul\xe4re Heilung. Sondern: das Ma\xdf, das tr\xe4gt. Wer etwas tiefer gr\xe4bt, entdeckt: Das englische <em>poise</em> und das englische <em>poison</em> teilen dieselbe Wurzel &ndash; das altfranz\xf6sische <em>poison</em> bedeutete urspr\xfcnglich Trank, Gebr\xe4u, Gift. Der Name tr\xe4gt also beides in sich: Gleichgewicht und Gegengift. Und wenn man wei\xdf, dass die unbewusste SX4 in ihrer Blickqualit\xe4t durchaus etwas Toxisches in sich tragen kann &ndash; eine Intensit\xe4t, die verbrennt, eine Rivalit\xe4t, die nagt, eine Leidenschaft, die kippt &ndash; dann erh\xe4lt der Plattformname eine zweite Lesart: <em>Poise</em> als bewusst gew\xe4hltes Gegen-Bild zum eigenen Schatten. Das Gleichgewicht als Antwort auf das, was aus dem Gleichgewicht geraten kann.</p>
          <p class="vb-intro">Der pr\xe4ventive Ansatz ist dabei zentral: Leinweber m\xf6chte Menschen erreichen, bevor die Krise da ist. Bevor der Burnout kommt, bevor die Panikst\xf6rung sich etabliert, bevor die Beziehung zerbricht. Das ist ein zutiefst systemischer Gedanke &ndash; und er erkl\xe4rt, warum sie auch in der Unternehmensberatung aktiv ist: B2B-Workshops, Mental-Health-Konzepte f\xfcr F\xfchrungskr\xe4fte, strukturelle Pr\xe4vention statt individuelle Feuerwehr. Der Chihuahua, der nicht wartet, bis das Haus brennt.</p>
          <p class="vb-intro">\xdcber ihren Instagram-Kanal (<em>@psychologin_lindaleinweber</em>) und ihren Podcast <em>Das Wunder Frau</em> erreicht sie ein breites Publikum jenseits der Klinik. Dieses Engagement f\xfcr Entstigmatisierung &ndash; die Botschaft, dass psychische Gesundheit kein Luxusthema ist, sondern eine Grundfrage des Lebens &ndash; ist ihre konsequenteste politische Haltung. Nicht im Parlament, sondern dort, wo Haltungen sich bilden: im Alltag der Menschen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Das Feuer, das versteht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; das tiefe, oft unbewusste Gef\xfchl, dass anderen eine Vollst\xe4ndigkeit geschenkt wurde, die einem selbst fehlt. Bei der SX4 tr\xe4gt dieser Neid ein pers\xf6nlicheres Gesicht: nicht das Schielen auf den Besitz anderer, sondern der Stich, wenn jemand anderes ungezwungen das sein darf, was man selbst so schwer zu sein findet. Leicht, frei, unbelastet. Die SX4 kennt das Gef\xfchl, schwerer zu sein als die anderen &ndash; und sie hat Wege gefunden, damit zu arbeiten.</p>
          <p class="vb-intro">Das Licht der SX4w5 liegt in ihrer F\xe4higkeit, die eigene Dunkelheit produktiv zu machen &ndash; nicht als Performance, sondern als echten Dienst. Linda Leinweber hilft nicht, weil sie es soll. Sie hilft, weil sie wei\xdf, wie es ist, wenn einem nicht geholfen wurde. Dieser Unterschied ist sp\xfcrbar. Menschen, die aus eigener Erfahrung helfen, geben etwas anders weiter als solche, die nur kognitiv gelernt haben wie.</p>
          <p class="vb-intro">Der Schatten: Der F\xfcnferfl\xfcgel neigt zum R\xfcckzug, zur \xdcberarbeitung von Gedanken, zum Zur\xfcckhalten, bis alles wirklich durchdacht ist. Die SX4 hingegen dr\u00e4ngt nach Verbindung, nach Resonanz, nach dem unmittelbaren Kontakt. Diese innere Spannung &ndash; zwischen Analyse und Ausdruck, zwischen Tiefe und Ber\xfchrung &ndash; ist das Produktivste, was die Kombination SX4w5 erzeugt. Und mitunter das Anstrengendste.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der anderen den Weg zeigt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\xfchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Das, was ich bin, ist einmalig &ndash; und es ist meins.</em> F\xfcr die SX4w5 bedeutet das, die eigene Intensit\xe4t nicht zu temperieren, sondern zu richten &ndash; nicht gegen sich selbst, nicht gegen die Welt, sondern auf das, was m\xf6glich ist.</p>
          <p class="vb-intro">Linda Leinweber hat diesen Weg in ihrer Biografie beschritten. Vom eigenen Erleben der Panikattacken zur fundierten Ausbildung, von der Ausbildung zur Plattform, von der Plattform zur \xf6ffentlichen Stimme f\xfcr mentale Gesundheit. Das ist kein Selbstoptimierungsprojekt. Das ist eine Vier, die gelernt hat, ihr Inneres nicht zu verstecken, sondern zu tragen &ndash; und die dieses Tragen in ein Handwerk verwandelt hat, das anderen n\xfctzt.</p>
          <p class="vb-intro">Der Chihuahua aus Altm\xfcnster am Traunsee hat keine Angst vor gro\xdfen Gef\xfchlen. Er hat gelernt, sie zu lesen. Das ist die sexuelle Vier mit F\xfcnferfl\xfcgel. Das ist Linda Leinweber.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-ana-de-armas", label:"Portr\xe4t: Ana de Armas (SX4w5)"},
        {route:"beruehmte-claude-debussy", label:"Portr\xe4t: Claude Debussy (SX4w5)"},
      ])}
    </div>
  `);
}

export function mariacarlaBosconoPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mariacarla-boscono-portrait.jpg" alt="Mariacarla Boscono – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mariacarla Boscono</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Italienisches Model, geb. 1980 in Rom &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Tier, dessen wahre Kraft sich erst zeigt, wenn eine enge, verlässliche Verbindung entstanden ist. Mariacarla Boscono, 1980 in Rom geboren, wurde bereits mit 15 Jahren beim Festivalbar 1995 entdeckt und unterschrieb bei Piero Piazzi von Ricardo Gay in Mailand – ein früher Start, der jedoch erst durch eine einzige, jahrzehntelange Verbindung zu ihrer eigentlichen Bedeutung fand.</p>
          <p class="vb-intro">2005 setzte sie einen Weltrekord: Innerhalb von zwei Wochen lief sie auf mehr als 70 Laufstegen in Mailand, New York und Paris – eine enorme körperliche und terminliche Leistung, die zeigt, wie sehr Boscono bereit war, sich in ihrem gewählten Metier vollständig zu verausgaben.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Fürsorge durch eine einzige, tiefe kreative Bindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> nennt Naranjo <em>Me First</em>: Nähe entsteht zuerst in einer einzigen, sehr engen Verbindung, bevor sie sich nach außen ausweitet. Ab 2005 begann Boscono eine Zusammenarbeit mit Designer und bestem Freund Riccardo Tisci, die dabei half, die ästhetische Identität von Givenchy mitzuprägen, bis Tisci das Haus 2017 verließ.</p>
          <p class="vb-intro">Diese Partnerschaft ging weit über eine gewöhnliche Muse-Designer-Beziehung hinaus – Boscono wurde über mehr als ein Jahrzehnt zur festen, verlässlichen kreativen Bezugsperson für Tisci, sowohl bei Givenchy als auch später bei Burberry. Fürsorge, ausgedrückt durch jahrelange, treue kreative Präsenz an der Seite eines einzigen engen Vertrauten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Die sichtbarste Muse der internationalen Modewelt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Zwei den Antrieb, aus einer engen, verlässlichen Basis heraus doch größtmögliche öffentliche Sichtbarkeit zu suchen. Boscono erschien in Kampagnen für Chanel, La Perla, Dior, Saint Laurent und Prada und zierte Cover von Vogue Italia, LOVE Magazine, Vogue China, Glamour Italy und Harper's Bazaar Spain.</p>
          <p class="vb-intro">Ihr Weltrekord von über 70 Laufstegauftritten in zwei Wochen ist die konkreteste Verkörperung dieses Antriebs: maximale, öffentlich messbare Präsenz, erreicht durch dieselbe Frau, die zugleich ihre engste kreative Bindung über mehr als ein Jahrzehnt hinweg unverändert pflegte.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2w3 liegt in der Fähigkeit, eine einzige, tiefe kreative Partnerschaft – mit Riccardo Tisci – über mehr als ein Jahrzehnt zu tragen und gleichzeitig zu einer der international sichtbarsten Musen der Modewelt zu werden, ohne diese enge Bindung dafür aufzugeben.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, für den kreativen Erfolg eines anderen unentbehrlich zu sein. Bei der SE2w3 kann sich das mit einer Identität verbinden, die eng an eine einzige zentrale Beziehung gebunden bleibt – eine Stärke, solange diese Beziehung Bestand hat, aber auch eine Verwundbarkeit, sollte sie einmal enden, wie sich 2017 mit Tiscis Weggang von Givenchy zeigte.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Von Festivalbar 1995 zur Muse zweier Modehäuser</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von der Entdeckung mit 15 Jahren über den Weltrekord von 2005 bis zur mehr als zehnjährigen Zusammenarbeit mit Riccardo Tisci bei Givenchy und Burberry zieht sich ein roter Faden durch Bosconos Werk: außergewöhnliche öffentliche Sichtbarkeit, getragen von einer einzigen, tiefen und dauerhaften kreativen Bindung.</p>
          <p class="vb-intro">Das Flusspferd verlässt sein angestammtes Gewässer nicht, um zu gefallen – es verteidigt seine engste Verbindung, während es sein Revier nach außen erweitert. Mariacarla Bosconos Weg von Rom zur internationalen Muse zweier großer Modehäuser ist dieser Antrieb in Reinform: Weltruhm, der aus der Treue zu einer einzigen, engen kreativen Partnerschaft erwuchs.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-quentin-tarantino", label:"Portrait: Quentin Tarantino (SE2w3)"},
        {route:"beruehmte-mickey-rourke", label:"Portrait: Mickey Rourke (SE2w3)"},
      ])}
    </div>
  `);
}

export function melanieKreisPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-melanie-kreis-portrait.jpg" alt="Melanie Kreis – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Melanie Kreis</p>
        <p class="krim-portrait-typ">SO6w5 &middot; Sozialer Typ 6 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Finanzvorst\xe4ndin (CFO) der DHL Group, geb. 1971 in Bonn &ndash; Tierentsprechung: Erdm\xe4nnchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Erdm\xe4nnchen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Erdm\xe4nnchen</strong> lebt in Gruppen, die ohne Zusammenhalt nicht \xfcberleben k\xf6nnen. Es ist wachsam, kooperativ und kennt seine Aufgabe im Kollektiv. Immer h\xe4lt eines Wache, w\xe4hrend die anderen fressen, graben, spielen. Das Erdm\xe4nnchen selbst braucht kein Rampenlicht &ndash; es braucht die Gruppe. Und die Gruppe braucht es. Das ist die soziale Sechs: Sicherheit entsteht durch Zugeh\xf6rigkeit, durch verl\xe4ssliches Dienen, durch das Wissen, dass man seinen Platz erf\xfcllt.</p>
          <p class="vb-intro">Die deutsche Managerin Melanie Kreis ist CFO der DHL Group &ndash; einem der gr\xf6\xdften Logistikkonzerne der Welt. Sie verantwortet die Finanzen eines DAX-Unternehmens mit Ums\xe4tzen in Milliardenh\u00f6he und Mitarbeitern in \xfcber 220 L\xe4ndern. Und doch: Wenn Journalisten sie beschreiben, f\xe4llt selten das Wort Ego. Sie wird beschrieben als zuverl\xe4ssig, pr\xe4zise, analytisch &ndash; und als jemand, der f\xfcr den Konzern arbeitet, nicht f\xfcr den eigenen Auftritt. Das ist das Erdm\xe4nnchen: Es h\xe4lt Wache. Nicht f\xfcr sich. F\xfcr die Gruppe.</p>
        </blockquote>

        <h2 class="vb-section">2. Die Pflicht: Sicherheit durch Verantwortung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sozialen Typ 6 die <strong>Pflicht</strong> &ndash; weil Sicherheit f\xfcr diesen Subtyp daraus entsteht, einen Beitrag zu leisten, dem Kollektiv zu dienen, gebraucht zu werden. Die <strong>soziale Sechs (SO6)</strong> folgt Strukturen nicht blind &ndash; sie versteht sie als Rahmen, der Verl\xe4sslichkeit schafft. Regeln, Systeme, Verantwortlichkeiten: Dinge, auf die man sich beziehen kann. Die SO6 sucht nicht die B\xfchne. Sie sucht die Aufgabe.</p>
          <p class="vb-intro">Kreis hat ihre Karriere nicht als Sprung nach oben geplant, sondern als Reihe von Verantwortlichkeiten, die sie \xfcbernommen hat. 1997 begann sie bei McKinsey &amp; Company &ndash; einem Ort, der analytische Sorgfalt und strukturiertes Denken verlangt. 2004 wechselte sie zur Deutschen Post AG, wo sie in der Konzernentwicklung arbeitete und ma\xdfgeblich an der Integration der \xfcbernommenen Exel-Gruppe beteiligt war. 2014 \xfcbernahm sie Personalverantwortung im Vorstand, 2016 wurde sie Finanzvorst\xe4ndin. Kein Schritt davon war ein PR-Move. Jeder Schritt war eine Erweiterung der Verantwortung.</p>
          <p class="vb-intro">Dass sie als eine der wenigen Frauen an der Spitze eines DAX-40-Konzerns steht, sagt sie selbst selten laut. Es ist einfach so &ndash; ein Nebenprodukt der Arbeit, nicht ihr Ziel. Das ist die SO6: Wer seinen Platz wirklich ausf\xfcllt, muss nicht dar\xfcber reden.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Analyse als Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> bringt der sozialen Sechs etwas Entscheidendes: analytische Tiefe, Pr\xe4zision und das Vertrauen in Wissen als Grundlage jeder Entscheidung. Wo eine SO6 mit schw\xe4cherem F\xfcnferfl\xfcgel Sicherheit durch Zugeh\xf6rigkeit sucht, f\xfcgt ein stark ausgepr\xe4gter F\xfcnferfl\xfcgel eine weitere Schicht hinzu &ndash; die \xdcberzeugung, dass man nur dann verl\xe4sslich f\xfcr andere sein kann, wenn man die Dinge wirklich versteht. Die SO6w5 pr\xfcft, bevor sie vertraut. Und sie vertraut, wenn die Analyse stimmt.</p>
          <p class="vb-intro">Kreis hat Physik studiert &ndash; zuerst an der Westf\xe4lischen Wilhelms-Universit\xe4t M\xfcnster, dann mit einem Master of Science an der State University of New York at Stony Brook. Physik ist das Fach der Pr\xe4zision: keine Annahme ohne Beweis, kein Modell ohne Verifikation. Anschlie\xdfend erg\xe4nzte sie ihren Horizont durch einen MBA am INSEAD in Frankreich. Zwei Welten: das exakte Denken der Naturwissenschaften und das strategische Denken der Wirtschaft. Diese Kombination hat System &ndash; sie ist die SO6w5 in Ausbildung: Erst verstehen. Dann handeln. Dann verl\xe4sslich sein.</p>
          <p class="vb-intro">In Gesch\xe4ftsberichten, Analystenkonferenzen und Investorengespr\xe4chen ist Kreis bekannt f\xfcr eine Sprache, die klar und n\xfcchtern bleibt. Keine \xdcbertreibungen, keine leeren Versprechen. Das ist der F\xfcnferfl\xfcgel als Kommunikationsprinzip: Sag, was du wei\u00dft. Und sag es pr\xe4zise.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von der Physik zum DAX-Konzern</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als CFO der DHL Group verantwortet Kreis das globale Finanzmanagement eines Unternehmens mit \xfcber 590.000 Mitarbeitern und Ums\xe4tzen von rund 84 Milliarden Euro. Sie steuert Controlling, Accounting, Investor Relations und Risikomanagement &ndash; Funktionen, die in einem globalen Konzern nicht nur Zahlen bedeuten, sondern strategische Orientierung. Sie ist die Person, die Vorstand und Investoren jederzeit mit einer klaren Analyse versorgen muss: Wo stehen wir? Was kostet es? Wo liegen die Risiken?</p>
          <p class="vb-intro">Sie wurde mehrfach als <em>CFO des Jahres</em> ausgezeichnet und z\xe4hlt regelm\xe4\xdfig zu den einflussreichsten Managerinnen Deutschlands &ndash; von Wirtschaftsmagazinen wie dem <em>Manager Magazin</em> und dem <em>Handelsblatt</em> bis zu internationalen Listen. Aber was in Interviews auff\xe4llt, ist nicht der Ehrgeiz, sondern die Haltung: Kreis spricht \xfcber das Unternehmen, \xfcber Strukturen, \xfcber Prozesse &ndash; und selten \xfcber sich selbst. Das ist das Erdm\xe4nnchen: Es ist immer Teil der Gruppe. Auch wenn es gerade das Gesicht der Gruppe ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Die W\xe4chterin im Vorstand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO6w5 ist ihre <strong>Integrit\xe4t</strong>. Kreis hat in einem Umfeld re\xfcssiert, das Frauen in F\xfchrungspositionen nach wie vor strukturell erschwert &ndash; nicht durch laute Selbstdarstellung, sondern durch beharrliche Kompetenz. Sie ist Vorbild, ohne es anzustreben. Pr\xe4sent, ohne aufzufallen. Wirksam, ohne zu poltern. Das ist die SO6: Stabilit\xe4t als Botschaft, Verl\xe4sslichkeit als F\xfchrungsprinzip.</p>
          <p class="vb-intro">Der Schatten der SO6w5 liegt in der Gefahr, sich zu sehr an bestehende Strukturen zu binden &ndash; und Ver\xe4nderung als Bedrohung zu erleben, statt als Gestaltungsraum. Ein globaler Logistikkonzern bewegt sich in einer Welt rasanter Transformation: Digitalisierung, Automatisierung, geopolitische Unsicherheiten, der Wandel ganzer Lieferketten. Die SO6 kann in solchen Momenten zu sehr auf das Bew\xe4hrte setzen. Und der F\xfcnferfl\xfcgel kann dazu neigen, sich in Analyse zu verlieren, statt zu entscheiden. Die Spannung zwischen Gr\xfcndlichkeit und Geschwindigkeit ist das innere Terrain der SO6w5 in der F\xfchrungsrolle.</p>
          <p class="vb-intro">Wer Melanie Kreis \xf6ffentlich beobachtet, sieht keine solchen Z\xf6germomente. Was man sieht, ist eine Frau, die wei\xdf, was sie tut. Und die wei\xdf, warum.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Erdm\xe4nnchen, das Wache h\xe4lt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Melanie Kreis ist kein Name, der in Talkshows auftaucht. Sie gibt selten Interviews, die \xfcber das Fachliche hinausgehen. Sie schreibt keine Bestseller \xfcber F\xfchrung und Resilienz. Sie h\xe4lt Wache &ndash; f\xfcr einen der gr\xf6\xdften Logistikkonzerne der Welt, der t\xe4glich Millionen von Paketen und Briefen bewegt und dabei auf pr\xe4zise Finanzkontrolle angewiesen ist wie auf Luft.</p>
          <p class="vb-intro">Das ist die SO6w5: kein Mensch der gro\xdfen Geste, aber einer der gro\xdfen Verl\xe4sslichkeit. Eine, die das System versteht &ndash; und deshalb darin gestalten kann. Eine, die analysiert, bevor sie entscheidet. Eine, die Verantwortung tr\xe4gt, ohne davon zu sprechen. Das Erdm\xe4nnchen h\xe4lt Wache. Leise. Pr\xe4zise. Unbedingt.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/so6", label:"SO6 \u2013 Das Erdm\xe4nnchen: Subtyp-Profil"},
        {route:"beruehmte-sigmund-freud", label:"Portr\xe4t: Sigmund Freud (SO6w5)"},
      ])}
    </div>
  `);
}

export function muhammadAliPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-muhammad-ali-portrait.jpg" alt="Muhammad Ali – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Muhammad Ali</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Sozialer Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">US-amerikanischer Boxweltmeister &amp; Bürgerrechtler, 1942&ndash;2016 &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; ein Tier, dessen Auftreten Räume größer macht und das seine Kraft für alle um sich herum einsetzt, nicht nur für sich selbst. Kaum jemand hat diese Doppelnatur so sichtbar gemacht wie Muhammad Ali: der lauteste, selbstbewussteste Sportler seiner Zeit &ndash; und zugleich einer, der seine öffentliche Bühne konsequent für die Sache der schwarzen Bevölkerung Amerikas einsetzte.</p>
          <p class="vb-intro">Cassius Marcellus Clay Jr. wurde am 17. Januar 1942 in Louisville, Kentucky, geboren, in einer Zeit und einem Ort, in der Rassentrennung Alltag war. 1964 gewann er als 22-Jähriger den Weltmeistertitel im Schwergewicht, trat der Nation of Islam bei und nahm den Namen Muhammad Ali an &ndash; ein Bruch mit dem, was von einem jungen schwarzen Boxer erwartet wurde, und der erste sichtbare Ausdruck einer Haltung, die sein gesamtes weiteres Leben prägen sollte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Der eigene Ruhm im Dienst einer ganzen Gemeinschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> lenkt ihre Fürsorge nicht auf einzelne Beziehungen, sondern auf gesellschaftliche Wirksamkeit. Naranjo nannte diesen Subtyp <em>Ambition</em>: den Antrieb, durch Einfluss und öffentliche Präsenz für ein ganzes Kollektiv zu sorgen. Alis berühmter Ausspruch <em>Warum sollten sie mich bitten, eine Uniform anzuziehen und zehntausend Meilen von zu Hause entfernt Bomben auf braune Menschen in Vietnam zu werfen, während sogenannte Neger in Louisville wie Hunde behandelt und ihnen einfachste Menschenrechte verweigert werden?</em> macht diesen Antrieb explizit: Sein Widerstand galt nicht der eigenen Sicherheit, sondern der Ungerechtigkeit gegenüber einer ganzen Bevölkerungsgruppe.</p>
          <p class="vb-intro">1974 kämpfte Ali beim legendären <em>Rumble in the Jungle</em> in Kinshasa, Zaire, gegen George Foreman um den Weltmeistertitel zurück &ndash; ein Ereignis, das weit über den Sport hinausging und als Feier schwarzen Selbstbewusstseins und schwarzer Größe verstanden wurde. Ali nutzte seine Bühne, wo immer er konnte, um eine ganze Gemeinschaft sichtbar zu machen, nicht nur sich selbst.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Prinzipientreue trotz höchstem persönlichen Preis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sozialen Zwei eine innere Achse aus moralischer Überzeugung, die auch dann nicht wankt, wenn sie alles kostet. 1967 verweigerte Ali als amtierender Weltmeister öffentlich den Militärdienst im Vietnamkrieg &ndash; eine Entscheidung, die ihm den Titel, seinen Pass und die Boxlizenz kostete, ihn in die prozessuale Unsicherheit einer Verurteilung stürzte und ihn mitten in seinen sportlich stärksten Jahren aus dem Ring verbannte.</p>
          <p class="vb-intro">Über vier Jahre lang, bis das Oberste Gericht der USA seine Verurteilung 1971 aufhob, blieb Ali seiner Haltung treu, obwohl ihm die Rückkehr längst hätte einfacher gemacht werden können. Der Einserflügel zeigt sich hier in seiner reinsten Form: Prinzip vor Vorteil, auch wenn der Preis die eigene Karriere in ihrer produktivsten Phase war.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w1 liegt in der Fähigkeit, persönlichen Ruhm nicht für sich zu behalten, sondern in Rückenwind für eine ganze Bewegung zu verwandeln. Auch nach seiner aktiven Karriere blieb Ali dieser Linie treu: Er engagierte sich humanitär weltweit, wurde 1998 UN-Friedensbotschafter und entzündete 1996 trotz fortgeschrittener Parkinson-Erkrankung mit zitternder Hand die olympische Flamme in Atlanta &ndash; ein Bild, das seine Verletzlichkeit öffentlich machte, ohne seine Würde preiszugeben.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, für das Wohl anderer unentbehrlich zu sein. Bei der SO2w1 kann sich das mit einem lautstarken Selbstbewusstsein verbinden, das leicht als reine Eitelkeit missverstanden wird: Sätze wie <em>Ich bin der Größte</em> waren bei Ali nie nur Selbstinszenierung, sondern Teil einer bewussten Strategie, einer ganzen unterdrückten Gemeinschaft vorzuleben, dass Stolz kein Privileg der Mächtigen sein muss.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Vom lautesten Boxer der Welt zum weltweiten Botschafter der Würde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Drei Weltmeistertitel im Schwergewicht, eine Karriere, die den Sport neu definierte, und Jahrzehnte humanitären Engagements bis zu seinem Tod am 3. Juni 2016 machten aus Ali eine der bekanntesten Persönlichkeiten des 20. Jahrhunderts &ndash; nicht trotz, sondern gerade wegen seiner Bereitschaft, den eigenen Ruhm konsequent für andere einzusetzen.</p>
          <p class="vb-intro">Der Golden Retriever bellt nicht aus Angst, sondern weil ihm die Menschen um ihn herum wichtig sind. Alis Weg vom lautesten Mund im Ring bis zum weltweit anerkannten Symbol für Würde unter widrigsten Bedingungen demonstriert dieses Muster eindrücklich: Ruhm nicht als Selbstzweck, sondern als Werkzeug, mit dem sich für weit mehr Menschen sorgen lässt, als je einzeln erreichbar wären.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-katharina-tempel", label:"Portrait: Dr. Katharina Tempel (SO2w1)"},
        {route:"beruehmte-bob-marley", label:"Portrait: Bob Marley (SO2w1)"},
        {route:"beruehmte-alexander-gerst", label:"Portrait: Alexander Gerst (SO2w1)"},
        {route:"krankheitsportraets-muhammad-ali", label:"Krankheitsporträt: Muhammad Ali (SO2w1)"},
        {route:"bibel-jesus", label:"Bibel-Porträt: Jesus (SO2w1)"},
      ])}
    </div>
  `);
}

export function pamelaReifPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-pamela-reif-portrait.jpg" alt="Pamela Reif" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Pamela Reif</p>
        <p class="krim-portrait-typ">SX2w3 &middot; Sexueller Typ 2 mit Dreierfl\u00fcgel &middot; Herztyp</p>
        <p class="krim-portrait-subtitle">Fitness-Influencerin, Unternehmerin, geb. 1996 &ndash; Millionen Verbindungen durch einen Bildschirm &ndash; Tierentsprechung: Kamel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kamel, das durch den Bildschirm reicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kamel</strong> ist das Tier der sexuellen Zwei &ndash; geduldig, ausdauernd, in der Lage, unter extremen Bedingungen f\u00fcr andere bereitzustehen. Das Kamel speichert. Es tr\u00e4gt Ressourcen in sich, die es dann genau dann freigibt, wenn andere sie am n\u00f6tigsten brauchen &ndash; in der W\u00fcste, auf der langen Reise, wenn keine andere Hilfe in Sicht ist. Das ist das Bild, das Pamela Reif millionenfach auf Bildschirmen verk\u00f6rpert: die Frau, die da ist &ndash; immer, p\u00fcnktlich, mit einer neuen \u00dcbung, einem neuen Plan, einem ruhigen Blick, der sagt: Ich begleite dich.</p>
          <p class="vb-intro">Die deutsche Pamela Reif, geboren 1996 in Karlsruhe, startete 2012 mit sechzehn Jahren auf Instagram. Was als Hobby begann, wurde zu einem der erfolgreichsten Fitness-Imperien Europas: Millionen Abonnenten auf Instagram und YouTube, die <em>Pam App</em>, der Bestseller <em>You Deserve This</em>, Kollektionen, Markenkooperationen &ndash; und dahinter ein Mensch, der all das nicht prim\u00e4r als Business betrachtet, sondern als Verbindungsangebot. Das Kamel kennt die W\u00fcste. Es wei\u00df, wie lange die Reise dauert. Und es gibt trotzdem alles, was es hat.</p>
        </blockquote>

        <h2 class="vb-section">2. SX2: Verf\u00fchrung durch den Bildschirm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte die sexuelle Zwei <strong>Verf\u00fchrung</strong> &ndash; die F\u00e4higkeit, andere durch emotionale N\u00e4he und intensive Pr\u00e4senz zu sich zu ziehen. Was bei der sexuellen Zwei entsteht, ist kein distanziertes Sender-Empf\u00e4nger-Verh\u00e4ltnis, sondern das Gef\u00fchl einer echten, pers\u00f6nlichen Begegnung. Das Besondere bei Pamela Reif: Sie schafft diese Qualit\u00e4t durch einen Bildschirm. Menschen, die ihre Videos verfolgen, haben nicht das Gef\u00fchl, einem Workout-Programm zu folgen &ndash; sie haben das Gef\u00fchl, mit jemandem zu trainieren, der sie kennt, der f\u00fcr sie da ist, der sie nicht aufgibt.</p>
          <p class="vb-intro">Ihr Blick in die Kamera ist direkt und einladend zugleich. Keine performative Aufgeregtheit, keine aufgesetzte Motivation &ndash; sondern eine ruhige, intensive Zugewandtheit, die typisch f\u00fcr die SX2 ist. Die sexuelle Zwei sucht nicht die Masse. Sie sucht die eine Person &ndash; und Pamela Reif hat die F\u00e4higkeit, bei Millionen Menschen gleichzeitig das Gef\u00fchl zu erzeugen, genau diese eine Person zu sein. Das ist selten. Das ist Verf\u00fchrung im tiefsten Enneagramm-Sinn: nicht unbedingt Manipulation, sondern echte Verbindungskunst.</p>
          <p class="vb-intro">Dazu geh\u00f6rt auch die Bereitschaft zur Selbstaufopferung, die das PDF ihrer Pers\u00f6nlichkeitsanalyse betont: Pamela investiert enorm viel Zeit und Energie &ndash; nicht um sich selbst zu zeigen, sondern um anderen das Beste zu geben. Die SX2 erf\u00fcllt sich durch das Geben. Und wenn das Geben zur\u00fcckkommt &ndash; als Kommentar, als Dankbarkeit, als geteiltes Video &ndash;, ist das keine Belohnung. Es ist die Antwort auf die tiefste Frage der Zwei: Bin ich wirklich wichtig f\u00fcr dich?</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Perfektion als Liebesbeweis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> bringt der leidenschaftlichen Verbindungsenergie der SX2 eine zweite Dimension: Leistung, Bild, Qualit\u00e4t. Die Drei will nicht nur verbinden &ndash; sie will <em>gl\u00e4nzen</em>. Sie will, dass das, was sie gibt, auch so gut ist, dass es gesehen wird. Bei Pamela Reif zeigt sich das in der au\u00dfergew\u00f6hnlichen Qualit\u00e4t ihrer Inhalte: pr\u00e4zise produziert, \u00e4sthetisch stimmig, handwerklich durchdacht. Jedes Video, jede Kollaboration, jede Seite der App tr\u00e4gt die Handschrift eines Menschen, der Exzellenz nicht als Selbstdarstellung, sondern als Respekt dem Publikum gegen\u00fcber versteht.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel ist auch der Grund, warum Pamela Reif nicht nur bei einer Sache bleibt. Die Drei diversifiziert, expandiert, entwickelt &ndash; immer mit dem Ziel, den Kreis derer zu erweitern, die sie erreichen kann. App, Buch, Marke, Kooperation: Das ist kein Eitelkeitsprojekt, das ist die SX2w3 bei der Arbeit &ndash; je gr\u00f6\u00dfer die Reichweite, desto mehr Menschen kann die Verbindungssehnsucht erf\u00fcllen.</p>
        </blockquote>

        <h2 class="vb-section">4. Gesamtwirkung: Stille Kraft, die bewegt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Wer Pamela Reifs Videos sieht, begegnet keiner lauten Pers\u00f6nlichkeit. Sie dr\u00e4ngt sich nicht auf, sie schreit nicht, sie \u00fcbertreibt nicht. Ihre Energie ist ruhig &ndash; aber sie ist da. Vollst\u00e4ndig da. Der Blick, die Haltung, die Pr\u00e4zision der Bewegung: alles kommuniziert dasselbe &ndash; <em>Ich mache das mit dir. Du schaffst das.</em> Das ist die stille Kraft des Kamels: keine Dramatik, keine Geste, aber eine Verl\u00e4sslichkeit, die tiefer wirkt als jede Inszenierung.</p>
          <p class="vb-intro">Das Publikum sp\u00fcrt das. Millionen Menschen haben ihre Workout-Routine an Pamela Reif ausgerichtet &ndash; nicht weil ihre Videos die spektakul\u00e4rsten sind, sondern weil sie das Gef\u00fchl erzeugen, nicht allein zu sein. Das ist der Kern der SX2w3-Wirkung: sanfte Pr\u00e4senz, die st\u00e4rkt.</p>
        </blockquote>

        <h2 class="vb-section">5. Energetische Wirkung: Emotionale Intensit\u00e4t hinter der Ruhe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Obwohl Pamela nach au\u00dfen oft ausgeglichen und gelassen wirkt, schwingt in ihren Inhalten eine hohe emotionale Intensit\u00e4t mit &ndash; die Intensit\u00e4t der sexuellen Zwei, die in jeder Interaktion eine echte Begegnung sucht. Diese Energie ist verbindend: Sie zieht das Publikum nicht als Konsumenten an, sondern als Mitreisende auf einer gemeinsamen Reise zu einem ges\u00fcnderen, bewussteren Leben.</p>
          <p class="vb-intro">Der Dreierfl\u00fcgel gibt dieser Energie Form und Richtung &ndash; er kanalisiert die leidenschaftliche Verbindungssehnsucht der SX2 in konkrete, qualit\u00e4tsvolle Angebote. Das Ergebnis ist eine Energie, die gleichzeitig motiviert und tr\u00f6stet: Du musst nicht perfekt sein. Aber ich gehe mit dir.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Fitnessinhalte als Beziehungsangebot</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Pamela Reif der Welt gibt, ist mehr als Fitness. Sie hat einer Generation gezeigt, dass der eigene K\u00f6rper kein Feind ist, den man bezwingen muss, sondern ein Zuhause, das man einladen kann &ndash; mit W\u00fcrde, mit Ausdauer, mit Freude. <em>You Deserve This</em> ist nicht nur ein Buchtitel: Es ist die Botschaft der SX2w3 an alle, die das Gef\u00fchl kennen, f\u00fcr F\u00fcrsorge erst etwas leisten zu m\u00fcssen.</p>
          <p class="vb-intro">Das Kamel kennt die W\u00fcste. Es wei\u00df, wie man tr\u00e4gt. Und es wei\u00df, dass auch die l\u00e4ngste Reise einen Moment hat, in dem man ankommt &ndash; und einfach dankbar ist, nicht allein gewesen zu sein. Das ist Pamela Reif. Das ist die SX2w3 auf ihrer h\u00f6chsten Ausdrucksstufe.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx2", label:"SX2 &ndash; Das Kamel: Subtyp-Profil"},
        {route:"beruehmte-monika-gruber", label:"Portr\u00e4t: Monika Gruber (SX2w1)"},
        {route:"beruehmte-matthias-schweighoefer", label:"Portr\u00e4t: Matthias Schweigh\u00f6fer (SX2w1)"},
        {route:"beruehmte-anastasiia-metelkina", label:"Portr\u00e4t: Anastasiia Metelkina (SX2w3)"},
      ])}
    </div>
  `);
}

export function reinholdWuerthPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-reinhold-wuerth-portrait.jpg" alt="Reinhold Würth" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Reinhold Würth</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Unternehmer, geb. 1935 – Tierentsprechung: Weißkopfseeadler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler, der aus einem kleinen Nest ein Imperium baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Weißkopfseeadler</strong> ist das Tier der selbsterhaltenden Eins: Er baut sein Nest über Jahrzehnte hinweg immer weiter aus, Stück für Stück, bis es Tonnen wiegen kann – kein spontaner Wurf, sondern beharrliche, geduldige Vermehrung dessen, was schon trägt. Er handelt selten aus dem Impuls heraus, sein Territorium verteidigt er mit äußerster Sorgfalt, und sein Blick ist auf Ordnung und Kontrolle gerichtet, nicht auf Show.</p>
          <p class="vb-intro">Reinhold Würth, geboren 1935 in Öhringen, übernahm 1954 mit neunzehn Jahren nach dem plötzlichen Tod seines Vaters dessen kleinen Schraubengroßhandel mit zwei Angestellten. Aus diesem winzigen Nest baute er über sieben Jahrzehnte hinweg einen der größten Handelskonzerne Europas: die Würth-Gruppe, heute mit weit über 400 Gesellschaften in mehr als 80 Ländern und mehr als 85.000 Beschäftigten. Kein einzelner spektakulärer Coup, sondern jahrzehntelange, systematische Ausdehnung, ein Land nach dem anderen, ein Vertriebsweg nach dem anderen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Ordnung als Existenzgrundlage</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die selbsterhaltende Eins richtet ihren Perfektionsanspruch nicht primär auf die große Bühne, sondern auf das eigene, ganz konkrete Fundament: die eigene Existenz, das eigene Unternehmen, die eigene Familie sollen in bester Ordnung sein. Der Blick ist dabei, wie es das Buch beschreibt, prüfend und zielgerichtet – ein Scannen der unmittelbaren Umgebung darauf, ob alles sicher und stabil ist.</p>
          <p class="vb-intro">Genau dieses Prinzip prägt Würths gesamte Unternehmensgeschichte. Sein Kerngeschäft – Schrauben, Dübel, Montagetechnik – ist buchstäblich die Branche der Präzision und der kleinen, aber unverzichtbaren Teile, ohne die nichts zusammenhält. Würth gilt als Verfechter der klassischen „schwäbischen Tugenden": Fleiß, Sparsamkeit, Zuverlässigkeit, Understatement. Er lebt vergleichsweise zurückgezogen für einen Milliardär, meidet die große mediale Selbstinszenierung und legt größten Wert auf die langfristige, generationenübergreifende Stabilität seines Familienunternehmens – 1987 übertrug er die Anteile bereits vollständig in eine Familienstiftung, um genau diese Stabilität über seinen eigenen Tod hinaus abzusichern.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Beharrlichkeit ohne lautes Aufbegehren</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Neunerflügel dämpft bei der Eins die konfrontative Schärfe, die eine Eins mit Zweierflügel eher zeigt, und ersetzt sie durch eine ruhigere, ausgleichende, geduldig-beharrliche Grundhaltung. Statt lautstark zu korrigieren oder zu missionieren, wirkt die SE1w9 eher wie ein stiller Beobachter, der auf Details achtet und Ordnung eher durch beständiges Vorbild als durch Konfrontation herstellt.</p>
          <p class="vb-intro">Würths öffentliches Auftreten passt genau in dieses Bild: kein lautstarker, polarisierender Wirtschaftsführer, sondern ein bedächtiger, in Interviews auffallend ruhiger Patriarch, dessen Autorität aus jahrzehntelanger Konsequenz erwächst, nicht aus Inszenierung. Sein bekanntes Lächeln in Fotos wirkt entspannt und zugewandt, nicht auftrumpfend – eine Warmherzigkeit, die leicht mit einem Zweierflügel verwechselt werden kann, tatsächlich aber die ruhigere, versöhnlichere Note des Neunerflügels trägt.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Mäzen als zweites Lebenswerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Neben dem Unternehmen baute Würth über Jahrzehnte eine der größten privaten Kunstsammlungen Europas auf – mit heute über 18.500 Werken – und errichtete mehrere eigene Museen, um diese Sammlung öffentlich zugänglich zu machen, allen voran die Kunsthalle Würth in Schwäbisch Hall. Auch das ist ein Ausdruck der SE1w9-Grundhaltung: nicht die eigene Person soll glänzen, sondern das, was aufgebaut wurde, soll Bestand haben und anderen zugutekommen – Ordnung und Fürsorge, in ein bleibendes Werk übersetzt statt in flüchtige Selbstdarstellung.</p>
          <p class="vb-intro">Auch sein Engagement für berufliche Bildung – die Würth-Gruppe bildet seit Jahrzehnten in großem Umfang selbst aus – folgt demselben Muster: Struktur schaffen, die über die eigene Lebenszeit hinausreicht, statt kurzfristigen Gewinn zu maximieren.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht zeigt sich bei Würth eine seltene Kombination aus unternehmerischer Konsequenz und stiller Genügsamkeit – ein Milliardär, der sein Vermögen überwiegend in Substanz investierte, nicht in Repräsentation, und der frühzeitig eine Nachfolgeregelung traf, die sein Lebenswerk vor Zerfall nach seinem Tod schützen soll.</p>
          <p class="vb-intro">Im Schatten zeigt sich die Kehrseite, die für die selbsterhaltende Eins typisch ist: ein hoher, oft unausgesprochener Erwartungsdruck an die eigene Umgebung und das eigene Unternehmen, verbunden mit einer Neigung, Kontrolle nicht abzugeben, selbst wenn formale Übergaben – wie die frühe Einbringung in die Familienstiftung – bereits erfolgt sind. Der Neunerflügel kann dabei auch bedeuten, notwendige Konflikte zu lange zu vermeiden, aus Sorge, die mühsam aufgebaute Ordnung zu gefährden.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Kontrollieren zum Vertrauen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt von der Frage <em>Ist alles wirklich in Ordnung, oder muss ich noch mehr sichern?</em> zur Erkenntnis <em>Was solide aufgebaut ist, trägt auch dann, wenn ich nicht jedes Detail selbst kontrolliere.</em> Für die SE1w9 bedeutet das, die eigene Beharrlichkeit nicht als endlose Absicherung zu verstehen, sondern als das, was sie bereits ist: ein tragfähiges Fundament, dem man auch ohne permanente Kontrolle vertrauen darf.</p>
          <p class="vb-intro">Würths eigener Schritt in diese Richtung war die frühzeitige Übertragung seines Unternehmens in eine Familienstiftung – eine Geste, die genau diesem Prinzip folgt: Struktur so solide zu bauen, dass sie über die eigene Kontrolle hinaus Bestand hat. Der Adler, der sein Nest so sorgfältig gebaut hat, dass es auch dann noch trägt, wenn er selbst nicht mehr über ihm kreist.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-fritz-wepper", label:"Porträt: Fritz Wepper (SE1w9)"},
        {route:"beruehmte-ken-follett", label:"Porträt: Ken Follett (SE1w9)"},
        {route:"beruehmte-astrid-lindgren", label:"Porträt: Astrid Lindgren (SE1w9)"},
      ])}
    </div>
  `);
}

export function scarlettJohanssonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-scarlett-johansson-portrait.jpg" alt="Scarlett Johansson – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Scarlett Johansson</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin &amp; Produzentin, geb. 1984 &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 &ndash; ein Tier von enormer Pr\u00e4senz, das genau sp\u00fcrt, wann es N\u00e4he zulassen kann und wann es sein Territorium verteidigen muss. Der Wolf zeigt selten Schw\u00e4che nach au\u00dfen. Er tr\u00e4gt seine Wachsamkeit in der Haltung, im Blick, in der Art, wie er einen Raum betritt &ndash; nicht laut, aber un\u00fcbersehbar.</p>
          <p class="vb-intro">Die US-amerikanische Schauspielerin Scarlett Johansson, geboren 1984 in New York City, ist dieser Wolf. Seit ihrem Deb\u00fct als Kind in <em>The Horse Whisperer</em> und ihrem Durchbruch mit <em>Lost in Translation</em> (2003) hat sie sich als eine der intensivsten Pr\u00e4senzen des Weltkinos etabliert &ndash; eine Schauspielerin, die selten viel sagen muss, um einen Raum zu f\u00fcllen. Diese Intensit\u00e4t kommt nicht von ungef\u00e4hr. Sie ist die Signatur des Wolfes: eine Kraft, die sp\u00fcrbar ist, bevor ein Wort f\u00e4llt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: St\u00e4rke als Schutzschild</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der Sechs &ndash; der Subtyp, in dem die Leidenschaft der Angst und des Zweifels am wenigsten sichtbar ist, weil sie in ihr Gegenteil verkehrt wird. Statt sich zur\u00fcckzuziehen, tritt die SX6 nach vorn. <em>Wenn ich stark genug wirke, kann mir niemand zu nahe kommen.</em> Naranjo nannte diesen Subtyp <em>St\u00e4rke</em>: Die SX6 begegnet der eigenen Verletzlichkeit, indem sie eine Fassade von Unangreifbarkeit errichtet.</p>
          <p class="vb-intro">Bei Johansson zeigt sich das in einer Karriere voller Rollen, die genau diese Spannung verk\u00f6rpern: die k\u00fchle, t\u00f6dlich pr\u00e4zise Black Widow im Marvel Cinematic Universe, die selbstbewusste Femme fatale in <em>Match Point</em>, die kontrollierte KI-Stimme in <em>Her</em>, deren emotionale Tiefe sich nur in Nuancen zeigt. Immer wieder Figuren, die St\u00e4rke performen, w\u00e4hrend darunter etwas Verletzliches, Suchendes liegt &ndash; genau das Muster der SX6, das Innere hinter einer R\u00fcstung aus Pr\u00e4senz zu verbergen.</p>
          <p class="vb-intro">Auch privat hat Johansson ihr Rudel klein und gesch\u00fctzt gehalten. Trotz jahrzehntelanger globaler Bekanntheit hat sie ihr Privatleben &ndash; drei Ehen, ihre Tochter und ihren Sohn &ndash; konsequent aus dem Blitzlicht ferngehalten, soweit das f\u00fcr einen der bekanntesten Filmstars der Welt m\u00f6glich ist. Der Wolf gibt nur preis, was er selbst entscheidet preiszugeben.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Vielseitigkeit und Tempo</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel (w7)</strong> bringt der sexuellen Sechs eine Leichtigkeit und Vielseitigkeit, die bei schwach ausgepr\u00e4gtem Siebenerfl\u00fcgel so nicht da w\u00e4re. Die SX6w7 k\u00e4mpft nicht nur &ndash; sie sucht auch die Abwechslung, das n\u00e4chste Projekt, die n\u00e4chste Herausforderung, bevor die vorherige ausgesch\u00f6pft ist. <em>Stillstand ist gef\u00e4hrlicher als Bewegung.</em></p>
          <p class="vb-intro">Johanssons Filmografie ist ein Musterbeispiel f\u00fcr diesen Fl\u00fcgel: Arthouse-Kino (<em>Lost in Translation</em>, <em>Under the Skin</em>), Blockbuster-Action (<em>Black Widow</em>, <em>Lucy</em>), Stimmarbeit (<em>Her</em>), ernstes Drama (<em>Marriage Story</em>, f\u00fcr das sie 2020 gleich zwei Oscar-Nominierungen erhielt), Satire (<em>Jojo Rabbit</em>) &ndash; kaum ein Genre, das sie ausgelassen hat. Dazu kommt ihr Engagement als Produzentin und ihr Ausflug in die Musik mit dem Album <em>Anywhere I Lay My Head</em> (2008). Der Siebenerfl\u00fcgel verwandelt die Wachsamkeit der Sechs in Neugier: Wer sich st\u00e4ndig weiterbewegt, gibt der Angst keine Zeit, sich festzusetzen.</p>
        </blockquote>

        <h2 class="vb-section">4. Karriere: Vom Kinderstar zur meistkassierenden Schauspielerin</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Johanssons Weg vom Kinderdarstellerinnen-Dasein zur, nach Kinokasseneinspielungen gerechnet, meistkassierenden Schauspielerin der Filmgeschichte ist eine Geschichte konsequenter Neuerfindung. Nach dem kritischen Erfolg von <em>Lost in Translation</em> und <em>Girl with a Pearl Earring</em> etablierte sie sich zun\u00e4chst als anspruchsvolle Charakterdarstellerin, bevor sie 2010 mit <em>Iron Man 2</em> als Natasha Romanoff / Black Widow in das Marvel Cinematic Universe eintrat &ndash; eine Rolle, die sie \u00fcber ein Jahrzehnt und neun Filme hinweg pr\u00e4gte, bis zu ihrem eigenen Solofilm <em>Black Widow</em> (2021).</p>
          <p class="vb-intro">Diese Doppelbewegung &ndash; ernsthaftes Autorenkino neben physisch fordernder Blockbuster-Action &ndash; ist typisch f\u00fcr die SX6w7: die F\u00e4higkeit, in v\u00f6llig unterschiedlichen Registern zu bestehen, ohne sich auf ein einziges Bild festlegen zu lassen. Der Wolf, der in jedem Rudel eine andere Rolle einnehmen kann, ohne seine Kernidentit\u00e4t zu verlieren.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 ist ihre F\u00e4higkeit, unter Druck Pr\u00e4senz zu zeigen &ndash; die Bereitschaft, sich physisch und emotional in eine Rolle zu werfen, ohne sich zu schonen. Johanssons Trainingsintensit\u00e4t f\u00fcr actionlastige Rollen, ihre Bereitschaft, in <em>Marriage Story</em> eine schmerzhafte Scheidung mit schonungsloser Offenheit darzustellen, ihr Eintreten f\u00fcr gerechte Bezahlung von Schauspielerinnen in Hollywood: All das zeugt von der Bereitschaft, sich der Bedrohung zu stellen, statt ihr auszuweichen.</p>
          <p class="vb-intro">Das Schicksalsmuster der Sechs ist die <strong>Angst</strong> &ndash; und bei der SX6w7 zeigt sich die Schattenseite oft als Kontrollbed\u00fcrfnis \u00fcber das eigene Bild, das in juristischen Auseinandersetzungen m\u00fcndete: Ihr \u00f6ffentlicher Streit mit Disney 2021 um die Streaming-Auswertung von <em>Black Widow</em> war eine der seltenen Gelegenheiten, bei denen der sonst so sorgf\u00e4ltig gesch\u00fctzte Wolf \u00f6ffentlich die Z\u00e4hne zeigte &ndash; ein Kampf um Anerkennung und Kontrolle, ausgetragen mit derselben Direktheit, die sie sonst nur ihren Rollen vorbeh\u00e4lt.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: St\u00e4rke, die nicht mehr sch\u00fctzen muss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Sechs f\u00fchrt von der Frage <em>Wie sch\u00fctze ich mich vor der n\u00e4chsten Bedrohung?</em> zur Erkenntnis <em>Ich bin bereits sicher genug, um mich zu zeigen.</em> F\u00fcr die SX6w7 bedeutet das, die R\u00fcstung der st\u00e4ndigen Bewegung und Selbstinszenierung abzulegen &ndash; und Verletzlichkeit nicht nur zu spielen, sondern zuzulassen.</p>
          <p class="vb-intro">Rollen wie die in <em>Marriage Story</em>, in der Johansson eine Frau spielt, die sich selbst neu erfinden muss, deuten genau diese Richtung an: nicht die n\u00e4chste Rolle als Flucht, sondern als ehrlicher Ausdruck. Der Wolf, der nicht mehr k\u00e4mpfen muss, um sicher zu sein &ndash; sondern der wei\u00df, dass seine St\u00e4rke l\u00e4ngst bewiesen ist.</p>
        </blockquote>

      </div>
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx6", label:"SX6 \u2013 Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-anke-engelke", label:"Portr\u00e4t: Anke Engelke (SX6w7)"},
      ])}
    </div>
  `);
}

export function taylorSwiftPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-taylor-swift-portrait.jpg" alt="Taylor Swift – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Taylor Swift</p>
        <p class="krim-portrait-typ">SX5w4 &middot; Sexueller Typ 5 mit Viererfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">S\u00e4ngerin, Songwriterin &amp; Musikproduzentin, geb. 1989 &ndash; Tierentsprechung: Igel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Igel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Igel</strong> ist das Tier des sexuellen Typs 5 &ndash; ein kleines, nachtaktives Wesen, das sich bei Gefahr blitzschnell zusammenrollt und ein Geflecht aus Stacheln zeigt. Wer ihn kennt, wei\u00df: Darunter ist etwas au\u00dferordentlich Weiches. Aber man muss Vertrauen aufgebaut haben, um es zu ber\u00fchren. Der Igel erkundet die Welt neugierig und intensiv &ndash; wenn er sich sicher f\u00fchlt. Andernfalls: Kugel. Stacheln. Warten.</p>
          <p class="vb-intro">Die US-amerikanische Sängerin Taylor Swift ist dieser Igel. Eine der meistgeh\u00f6rten K\u00fcnstlerinnen der Welt, mit einem Werk, das aus pers\u00f6nlichsten Erfahrungen destilliert ist &ndash; und zugleich eine Frau, die au\u00dferordentlich kontrolliert damit umgeht, was sie wirklich von sich preisgibt. Die Musik ist das Innere. Alles andere ist die Oberfl\u00e4che. Und die Stacheln sind aus Worten gemacht.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle F\u00fcnf: Vertrauen als Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle F\u00fcnf (SX5)</strong> ist nach Naranjo der <strong>Kontratyp</strong> der F\u00fcnf: Hier zeigt sich die Leidenschaft des Geizes am wenigsten offensichtlich &ndash; weil die sexuelle Energie die F\u00fcnf aus ihrer Isolation herauszieht und nach tiefer, intensiver Verbindung suchen l\u00e4sst. Naranjo nannte diesen Subtyp <em>Vertrauen</em>: Die SX5 sucht die eine Verbindung, die alles tr\u00e4gt &ndash; den Partner, den Freund, das Publikum &ndash; dem sie sich wirklich \u00f6ffnen kann. Aber diese \u00d6ffnung gilt nur f\u00fcr wenige. F\u00fcr den Rest: Stacheln.</p>
          <p class="vb-intro">Bei Taylor Swift zeigt sich das in der Art, wie sie N\u00e4he organisiert. \u00d6ffentlich ist sie \u00fcberall &ndash; in den Charts, auf B\u00fchnen, in den Schlagzeilen. Aber was sie wirklich denkt, f\u00fchlt, glaubt: das steht in den Songs. Nicht in Interviews. Nicht in Social Media. In den Texten, in den Vault Tracks, in den Easter Eggs, die nur diejenigen entschl\u00fcsseln k\u00f6nnen, die wirklich zuh\u00f6ren. Das ist SX5: Ich gebe alles preis &ndash; aber nur f\u00fcr die, die die Sprache sprechen.</p>
          <p class="vb-intro">Das Horten der F\u00fcnf zeigt sich bei Swift in einem anderen Bereich: dem Horten von Kontrolle. Als ihr fr\u00fcheres Label ihre ersten sechs Alben an den Manager Scooter Braun verkaufte, ohne sie zu fragen, reagierte sie nicht mit Resignation. Sie nahm ihre Alben neu auf &ndash; eines nach dem anderen, unter dem Zusatz <em>Taylor's Version</em> &ndash; und rief ihre Fans dazu auf, nur noch diese Versionen zu streamen. Das ist die SX5 im Kampf um ihr ureigenes Werk: <em>Das hier geh\u00f6rt mir. Ich hole es zur\u00fcck.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererfl\u00fcgel: Die Poetin der eigenen Welt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererfl\u00fcgel (w4)</strong> bringt der sexuellen F\u00fcnf eine charakteristische Tiefe: das Bed\u00fcrfnis, das Einzigartige zu benennen, das Unsagbare in Sprache zu fassen, die eigene Erfahrung als etwas zu behandeln, das Bedeutung verdient. Die SX5w4 lebt nicht nur &ndash; sie beobachtet, wie sie lebt, und verwandelt das Beobachtete in Kunst.</p>
          <p class="vb-intro">Taylor Swifts Songwriting ist das reinste Beispiel daf\u00fcr. Sie schreibt nicht \u00fcber abstrakte Gef\u00fchle &ndash; sie schreibt \u00fcber bestimmte Momente, bestimmte Menschen, bestimmte Dezemberabende. Sie dokumentiert obsessiv: Tageb\u00fccher, geheime Notizen, versteckte Hinweise in Albumartworks. Das ist der Viererfl\u00fcgel: <em>Ich muss festhalten, was war. Weil es sonst verloren geht. Weil es bedeutsam ist, auch wenn es niemand sieht.</em></p>
          <p class="vb-intro">Der Viererfl\u00fcgel erkl\u00e4rt auch Swifts F\u00e4higkeit zur k\u00fcnstlerischen Neuerfindung. Von Country zu Pop zu Indie-Folk zu Electropop &ndash; jedes Album ist eine neue Identit\u00e4t, ein neuer Blick auf sich selbst. Das ist keine Marketingstrategie. Das ist die SX5w4: immer auf der Suche nach dem Bild, das noch genauer trifft, was innen ist.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX5w4 ist ihre F\u00e4higkeit, das Innen in Au\u00dfen zu verwandeln &ndash; pers\u00f6nliche Erfahrungen in Kunst, die Millionen ber\u00fchrt. Taylor Swifts Songs haben eine Pr\u00e4zision, die nur aus echter Beobachtung kommt: der richtige Schuh auf dem falschen Boden, das falsche L\u00e4cheln zum richtigen Zeitpunkt. Das ist das Geschenk der Igelin: Sie sieht, wo andere wegsehen.</p>
          <p class="vb-intro">Das Schicksalsmuster der F\u00fcnf ist der <strong>Geiz</strong> &ndash; und bei der SX5 zeigt er sich als Kontrollsucht \u00fcber das eigene Bild. Swifts Verh\u00e4ltnis zur \u00d6ffentlichkeit ist ambivalent: Sie inszeniert sich mit enormem Aufwand, aber immer auf eigenen Bedingungen. Narrative, die nicht passen, werden in Songs verarbeitet &ndash; und damit endg\u00fcltig definiert. <em>Ich entscheide, wie diese Geschichte erz\u00e4hlt wird.</em></p>
          <p class="vb-intro">Der Viererfl\u00fcgel bringt die Gefahr der Selbstbezogenheit: wenn die eigene Erfahrung so sehr zum Zentrum wird, dass andere haupts\u00e4chlich als Material vorkommen. Songs \u00fcber Ex-Partner, die sie nicht gefragt hat &ndash; das ist ein Grenzbereich, den Swift selbst immer wieder ber\u00fchrt.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Horten zum Vertrauen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der F\u00fcnf f\u00fchrt von der Frage <em>Habe ich genug?</em> zur Erkenntnis <em>Ich bin genug &ndash; auch ohne Kontrolle \u00fcber alles.</em> F\u00fcr die SX5w4 bedeutet das, das Vertrauen, das sie in ihren engsten Kreis legt, langsam auch in die Welt zu verl\u00e4ngern: nicht jede Geschichte selbst zu erz\u00e4hlen, nicht jeden Angriff in einen Song zu gie\u00dfen, nicht jede Deutungshoheit zu behalten.</p>
          <p class="vb-intro">Der Igel, der sich zusammenrollt, sch\u00fctzt sich &ndash; aber er erkundet die Welt nicht. Taylor Swift hat in ihrem Werk immer wieder Momente der echten \u00d6ffnung gefunden: <em>folklore</em> und <em>evermore</em>, geschrieben im Lockdown, ohne Publikum, ohne Inszenierung &ndash; nur Worte und Gitarre. Das ist die SX5w4 auf ihrem Heilungsweg: Wenn die Stacheln fallen, kommt das Weichste raus. Und das ist das St\u00e4rkste.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx5", label:"SX5 \u2013 Der Igel: Subtyp-Profil"},
        {route:"beruehmte-christian-raetsch", label:"Portr\u00e4t: Christian R\u00e4tsch (SE5w4)"},
        {route:"beruehmte-tilda-swinton", label:"Porträt: Tilda Swinton (SX5w4)"},
      ])}
    </div>
  `);
}

export function udoJuergensPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-udo-juergens-portrait.jpg" alt="Udo J\u00fcrgens – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Udo J\u00fcrgens</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Selbsterhaltender Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">\u00d6sterreichischer S\u00e4nger und Komponist, 1934&ndash;2014 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler mit dem l\u00e4ngsten Atem des Schlagers</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist das Tier der selbsterhaltenden Eins &ndash; er baut sein Werk mit \u00e4u\u00dferster Sorgfalt, diszipliniert und beharrlich, hoch \u00fcber dem schnelllebigen Trubel, und \u00fcberblickt sein Handwerk mit unbestechlicher Genauigkeit. Kaum ein K\u00fcnstler verk\u00f6rpert diese lebenslange, disziplinierte Beharrlichkeit so sehr wie Udo J\u00fcrgens.</p>
          <p class="vb-intro">Der österreichische Sänger Udo J\u00fcrgen Bockelmann wurde 1934 in Klagenfurt geboren, begann bereits als Kind Klavier und Trompete zu spielen und komponierte mit 14 Jahren seinen ersten Schlager. Trotz jahrelanger R\u00fcckschl\u00e4ge &ndash; er nahm \u00fcber zehn Jahre lang an Talentwettbewerben und Auswahlverfahren teil, bevor sich sein Durchbruch einstellte &ndash; hielt er unbeirrt an seiner musikalischen Disziplin fest: t\u00e4gliches Klavier\u00fcben, akribisches Feilen an Melodien und Texten, ein nahezu handwerklicher Anspruch an die eigene Kunst.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Perfektion als Lebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> sucht Sicherheit durch akribische Disziplin und einen hohen, oft unerbittlichen Anspruch an die eigene Arbeit &ndash; sie baut sich ihr Werk Stein f\u00fcr Stein auf, mit \u00e4u\u00dferster Sorgfalt und Ausdauer. J\u00fcrgens war bekannt f\u00fcr seinen fast schon legend\u00e4ren Arbeitsethos: \u00dcber sechs Jahrzehnte hinweg komponierte er mehr als 1.000 Lieder, viele davon selbst am Klavier durchkomponiert, mit einem untr\u00fcglichen Gesp\u00fcr f\u00fcr Melodie und Struktur.</p>
          <p class="vb-intro">Sein internationaler Durchbruch gelang 1966 mit &bdquo;Merci, Ch\u00e9rie&ldquo;, mit dem er f\u00fcr \u00d6sterreich den Eurovision Song Contest gewann &ndash; nach mehreren gescheiterten Anl\u00e4ufen in den Jahren zuvor. Diese jahrelange, unbeirrbare Beharrlichkeit trotz wiederholten Scheiterns ist die reinste Auspr\u00e4gung der selbsterhaltenden Eins: Nicht aufgeben, weiter feilen, bis die eigene hohe Messlatte erreicht ist.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: W\u00e4rme im Dienst des Publikums</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> verleiht der strengen Eins eine warme, zugewandte, fast schon f\u00fcrsorgliche Note &ndash; die Perfektion wird nicht k\u00fchl zur Schau gestellt, sondern in den Dienst einer emotionalen Verbindung zum Publikum gestellt. J\u00fcrgens' Lieder &ndash; von &bdquo;Griechischer Wein&ldquo; (1974) bis &bdquo;Mit 66 Jahren&ldquo; (1977) &ndash; erz\u00e4hlten von Sehnsucht, Alltagsmenschen, Migration und Altersw\u00fcrde, immer mit einer sp\u00fcrbaren Zuneigung zu den Menschen, \u00fcber die er sang.</p>
          <p class="vb-intro">Diese f\u00fcrsorgliche Grundhaltung zeigte sich auch in seinem sozialen Engagement: J\u00fcrgens gr\u00fcndete 1989 die Udo-J\u00fcrgens-Stiftung zur Unterst\u00fctzung von Kindern in Not und setzte sich Zeit seines Lebens f\u00fcr soziale und politische Themen ein, etwa mit dem Lied &bdquo;Der ganz normale Wahnsinn&ldquo; (1996) \u00fcber die Herausforderungen alleinerziehender M\u00fctter. Der Zweierfl\u00fcgel gab seiner disziplinierten Eins damit ein Ziel jenseits der reinen k\u00fcnstlerischen Perfektion: Menschen ber\u00fchren und ihnen etwas geben.</p>
        </blockquote>

        <h2 class="vb-section">4. Sechs Jahrzehnte auf der B\u00fchne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">J\u00fcrgens stand bis kurz vor seinem Tod auf der B\u00fchne &ndash; seine letzte gro\u00dfe Tournee &bdquo;Mitten im Leben&ldquo; f\u00fchrte ihn 2014 durch ausverkaufte Hallen, im Alter von 80 Jahren. Diese Konstanz \u00fcber sechs Jahrzehnte hinweg, ohne nennenswerten Karriereeinbruch, ist im deutschsprachigen Schlager- und Chansongesch\u00e4ft praktisch einzigartig und spiegelt die unersch\u00fctterliche Arbeitsdisziplin der selbsterhaltenden Eins wider.</p>
          <p class="vb-intro">Bezeichnend f\u00fcr seinen hohen k\u00fcnstlerischen Anspruch: J\u00fcrgens verstand sich nie nur als Schlagers\u00e4nger, sondern komponierte auch Musicals (&bdquo;Ich war noch niemals in New York&ldquo;, 2007) und ein Ballett, und er lie\u00df sich nie auf eine bequeme, sich wiederholende Formel festlegen, sondern erneuerte sein musikalisches Handwerk immer wieder von Grund auf.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w2 ist die F\u00e4higkeit, <strong>h\u00f6chste handwerkliche Disziplin mit echter menschlicher W\u00e4rme</strong> zu verbinden &ndash; J\u00fcrgens' Musik war nie nur technisch perfekt, sondern immer auch sp\u00fcrbar auf Verbindung mit dem Publikum ausgerichtet, was ihm eine bis auf den heutigen Tag ungebrochene Popularit\u00e4t \u00fcber Generationen hinweg sicherte.</p>
          <p class="vb-intro">Der Schatten zeigte sich in einem hohen, mitunter kompromisslosen Perfektionsanspruch an sich selbst und andere, sowie in einem Privatleben, das von mehreren gescheiterten Ehen und Beziehungen gepr\u00e4gt war &ndash; der st\u00e4ndige Fokus auf das eigene Werk forderte seinen Tribut im pers\u00f6nlichen Bereich. Die Kehrseite der selbsterhaltenden Eins mit Zweierfl\u00fcgel: Die F\u00fcrsorge flie\u00dft oft leichter in die Kunst und ins Publikum als in die engsten privaten Beziehungen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Adler, der bis zuletzt komponierte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Udo J\u00fcrgens starb 2014 im Alter von 80 Jahren, wenige Wochen nach einem seiner letzten Konzerte &ndash; bis zuletzt aktiv, diszipliniert, schaffend. Sein Werk von mehr als 1.000 Kompositionen bleibt fester Bestandteil des deutschsprachigen Musikkanons, von Generation zu Generation weitergetragen.</p>
          <p class="vb-intro">Der Adler, der \u00fcber sechs Jahrzehnte hinweg mit unbeirrbarer Disziplin an seinem Werk feilte und dabei nie die W\u00e4rme f\u00fcr sein Publikum verlor &ndash; das ist das bleibende Bild der selbsterhaltenden Eins mit Zweierfl\u00fcgel: Perfektion, die nicht kalt bleibt, sondern Menschen ber\u00fchrt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Adler: Subtyp-Profil"},
        {route:"beruehmte-dan-brown", label:"Portr\xe4t: Dan Brown (SE1w2)"},
        {route:"beruehmte-marie-kondo", label:"Portr\xe4t: Marie Kondo (SE1w2)"},
        {route:"beruehmte-robert-oppenheimer", label:"Portr\xe4t: J. Robert Oppenheimer (SE1w2)"},
      ])}
    </div>
  `);
}

export function winstonChurchillPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-winston-churchill-portrait.jpg" alt="Winston Churchill – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Winston Churchill</p>
        <p class="krim-portrait-typ">SE8w9 &middot; Selbsterhaltender Typ 8 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Britischer Staatsmann, Premierminister 1940&ndash;1945 &amp; 1951&ndash;1955, 1874&ndash;1965 &ndash; Tierentsprechung: Orang-Utan</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Orang-Utan</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Orang-Utan</strong> ist das Tier des selbsterhaltenden Typs 8 &ndash; massiv, geduldig, kaum aus der Ruhe zu bringen. Er braucht kein Publikum, um seine Kraft zu beweisen; er sitzt einfach da, wo er sitzt, und wer ihn verdr\u00e4ngen will, muss ihn erst einmal bewegen. Sein K\u00f6rper ist gebaut, um zu bleiben &ndash; nicht um zu fliehen.</p>
          <p class="vb-intro">Der britische Staatsmann Winston Churchill, 1874 auf Schloss Blenheim geboren, war genau dieser Orang-Utan: k\u00f6rperlich massig, in der \u00d6ffentlichkeit oft untersch\u00e4tzt, politisch mehrfach f\u00fcr gescheitert erkl\u00e4rt &ndash; und doch immer wieder da, wenn es darauf ankam. Als Gro\u00dfbritannien 1940 vor der Invasion durch Nazi-Deutschland stand, war es dieser Mann, kein anderer, der auf dem Ast blieb, w\u00e4hrend der Sturm tobte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Acht: Das Recht auf Widerstand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Acht (SE8)</strong> dr\u00fcckt die Leidenschaft der Acht &ndash; die <em>Wollust</em>, den Hunger nach uneingeschr\u00e4nkter Intensit\u00e4t &ndash; durch Selbstbehauptung und die unbedingte Sicherung des eigenen \u00dcberlebens aus. Naranjo nannte diesen Subtyp <em>Satisfacci\u00f3n</em>. Die SE8 verteidigt, was ihr geh\u00f6rt, mit einer Sturheit, die keine Verhandlung kennt, sobald die Existenz selbst bedroht ist.</p>
          <p class="vb-intro">Churchills ber\u00fchmteste Rede, gehalten am 4. Juni 1940 vor dem Unterhaus, ist der reinste Ausdruck einer SE8: \u201eWe shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender." (deutsche \u00dcbersetzung: \u201eWir werden an den Str\u00e4nden k\u00e4mpfen, wir werden auf den Landepl\u00e4tzen k\u00e4mpfen, wir werden in den Feldern und in den Stra\u00dfen k\u00e4mpfen, wir werden in den H\u00fcgeln k\u00e4mpfen; wir werden niemals kapitulieren.") Kein Kompromissangebot, keine Verhandlungsbereitschaft mit Hitler, die viele im Kabinett damals noch f\u00fcr vern\u00fcnftig hielten. Nur das nackte Recht, weiterzuexistieren &ndash; und die Weigerung, es aufzugeben.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Die F\u00e4higkeit zu warten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel</strong> gibt der selbsterhaltenden Acht etwas, das einer Acht mit schwach ausgeprägtem Neunerflügel fehlt: Ausdauer \u00fcber Jahre hinweg, die F\u00e4higkeit, eine unpopul\u00e4re Position zu halten, ohne sofort zu triumphieren oder zu resignieren. Die SE8w9 k\u00e4mpft nicht in einer einzigen Schlacht &ndash; sie h\u00e4lt die Linie, so lange es n\u00f6tig ist.</p>
          <p class="vb-intro">W\u00e4hrend der gesamten 1930er Jahre warnte Churchill, weitgehend isoliert und von der eigenen Partei bel\u00e4chelt, vor der Aufr\u00fcstung Nazi-Deutschlands &ndash; ein jahrelanger Ruf in der W\u00fcste, den kaum jemand h\u00f6ren wollte. Als Neville Chamberlains Appeasement-Politik 1938/39 scheiterte, war es dieser Neunerfl\u00fcgel, Geduld gepaart mit Sturheit, der Churchill bef\u00e4higte, genau in diesem Moment bereitzustehen &ndash; nicht zu fr\u00fch verbraucht, nicht zu sp\u00e4t gekommen.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von Gallipoli zur Downing Street</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Churchills politische Karriere war alles andere als eine gerade Linie. Als Marineminister trug er die Verantwortung f\u00fcr das Desaster von Gallipoli 1915, das ihn f\u00fcr Jahre ins politische Abseits stellte. Er wechselte mehrfach die Partei, wurde nach dem Ersten Weltkrieg als Kriegstreiber verspottet, verlor 1929 sein Amt und verbrachte die 1930er Jahre in dem, was Historiker seine \u201eWildernis Years" nennen &ndash; die Wildnisjahre.</p>
          <p class="vb-intro">Am 10. Mai 1940, dem Tag, an dem Deutschland die Niederlande, Belgien und Frankreich \u00fcberfiel, wurde Churchill Premierminister &ndash; nicht weil er beliebt war, sondern weil das Land in seiner dunkelsten Stunde einen Orang-Utan brauchte, keinen Diplomaten. Er organisierte die Evakuierung von D\u00fcnkirchen, hielt w\u00e4hrend der Luftschlacht um England die Nerven, als deutsche Bomben n\u00e4chtlich auf London fielen, und schmiedete mit Roosevelt und Stalin die Allianz, die den Krieg schlie\u00dflich gewann.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE8w9 ist ihre <strong>unersch\u00fctterliche Standhaftigkeit</strong> in existenziellen Krisen. Churchills Reden waren keine rhetorischen Kunstst\u00fccke &ndash; sie waren Ausdruck einer Kraft, die real war und die ein ganzes Volk sp\u00fcrte. Er verlangte nichts von den Briten, was er nicht selbst vorlebte: durchhalten, weitermachen, niemals aufgeben.</p>
          <p class="vb-intro">Der Schatten zeigt sich in einer R\u00fccksichtslosigkeit, die im Zweifel \u00fcber Menschenleben hinwegging: Die Entscheidungen w\u00e4hrend der Bengalischen Hungersnot 1943, bei der Millionen Menschen starben, w\u00e4hrend Getreide f\u00fcr das Milit\u00e4r und Gro\u00dfbritannien reserviert blieb, werfen bis in die Gegenwart einen dunklen Schatten auf sein Erbe. Die selbsterhaltende Acht verteidigt kompromisslos das eigene Territorium &ndash; und kann dabei blind werden f\u00fcr das Leid derer, die au\u00dferhalb dieses Territoriums liegen.</p>
        </blockquote>

        <h2 class="vb-section">6. Eine Gegenmeinung: Claudio Naranjo und der selbsterhaltende Neuner</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo, einer der einflussreichsten Enneagramm-Lehrer und Lehrer des Autors dieser App, ordnete Churchill in seinem Buchprojekt zu Typ 9 („E9 Book – Psychospiritual Laziness") abweichend als <strong>selbsterhaltenden Neuner mit Achterflügel (SE9w8)</strong> ein. Sein Argument: Churchills massige physische Präsenz, sein lebenslanger „Appetit" (Zigarren, Alkohol, opulentes Essen) und seine scheinbar rastlose Aktivität – Malen, stundenlanges Steinelegen in Chartwell, das Schreiben monumentaler Memoiren – seien in Wahrheit Ablenkungsmanöver eines Neuners, der so die Konfrontation mit seiner eigenen inneren Leere und dem „Black Dog" vermeide. Die Härte, die man landläufig als Achter-Merkmal liest, sei bei Churchill eher eine stoische, konservative Kraft, die einen fragilen inneren Status quo verteidige – kein Kampf aus Lust an der Konfrontation, sondern ein Kampf um einen „sicheren Hafen".</p>
          <p class="vb-intro">Diese Sichtweise wurde hier bewusst geprüft, statt sie unkommentiert zu übernehmen oder zu verwerfen – letztlich überzeugt sie jedoch nicht. Naranjos eigenes Abgrenzungskriterium liefert selbst das stärkste Gegenargument: Ein Neuner kämpft, um einen bestehenden, sicheren Zustand zu bewahren; ein Achter kämpft, um eine Position durchzusetzen, auch gegen den Widerstand aller. Churchills entscheidende Tat – der jahrelange, einsame Widerstand gegen Chamberlains Appeasement-Politik in den 1930ern – war exakt keine Verteidigung eines Status quo, sondern der bewusste Bruch mit ihm: gegen die eigene Partei, gegen den bequemeren, sicheren Weg einer Verhandlungslösung mit Hitler. Das ist, nach Naranjos eigener Definition, Achter-Verhalten, kein Neuner-Verhalten. Auch die zitierten Aktivitäten wirken bei genauerem Hinsehen weniger nach neunerhafter Zerstreuung als nach achterhafter Kanalisierung überschüssiger Kraft in eine neue Arena der Beherrschung, wenn die politische verschlossen war – er baute etwa große Teile der Mauern von Chartwell eigenhändig, mit derselben imperialen Akribie wie seine Politik. Und in Bild- und Tondokumenten seiner Reden ist Gestik und Mimik – direkt, konfrontativ, ungeduldig – deutlich achterhafter als neunerhaft.</p>
          <p class="vb-intro">Grundsätzlich gehört die Abgrenzung SE8w9 gegen SE9w8 zu den anspruchsvollsten Unterscheidungen der gesamten Enneagrammtypologie – beide Subtypen können nach außen ruhig, geduldig und stur zugleich wirken, und die Verhaltensbelege allein reichen oft nicht aus, um sie sicher zu trennen. Bei lebenden Menschen hilft hier vor allem eine Fähigkeit, die sich nicht an einem Wochenende, sondern erst über Monate gezielter Übung erlernen lässt: die genaue Analyse der <strong>Blickqualität</strong>. Ist der Blick nach außen gerichtet, konfrontativ, prüfend, bereit zum Widerstand – der typische „Orang-Utan-Blick" der Acht? Oder ist er nach innen gewandt, schwer, träge und selbstvergessen – der ruhende „Elefantenblick" der Neun? Diese Unterscheidungsfähigkeit ist Teil der vertieften Typisierungsausbildung, wie sie u. a. David L. Rathmer lehrt, und gilt als eine der subtilsten, aber verlässlichsten Diagnosemethoden, weil im Blick sich die intrinsische Motivation und Leidenschaft eines Menschen oft unmittelbarer zeigt als in seinem äußeren Verhalten. Bei Churchill selbst, ausgewertet über verfügbares Bild- und Filmmaterial seiner Reden, bestätigt diese Blickanalyse den nach außen gerichteten, konfrontativen Achter-Blick – ein weiteres, unabhängiges Argument für SE8w9.</p>
        </blockquote>

        <h2 class="vb-section">7. Der Orang-Utan, der den Ast nicht loslie\u00df</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Acht f\u00fchrt von der Wollust zur Unschuld &ndash; von der zwanghaften Behauptung der eigenen St\u00e4rke zu einer Kraft, die auch verletzlich sein darf. Churchill selbst nannte seine wiederkehrenden Depressionen \u201ethe black dog", den schwarzen Hund, der ihn sein ganzes Leben lang begleitete &ndash; ein seltenes Eingest\u00e4ndnis von Schw\u00e4che bei einem Mann, der \u00f6ffentlich nie eine zeigte.</p>
          <p class="vb-intro">1953 erhielt er den Literaturnobelpreis f\u00fcr sein historisches und biografisches Gesamtwerk, darunter seine sechsb\u00e4ndige Geschichte des Zweiten Weltkriegs. Er starb 1965 im Alter von 90 Jahren, gefolgt von einem der l\u00e4ngsten Staatsbegr\u00e4bnisse der britischen Geschichte. Der Orang-Utan, der in der dunkelsten Stunde seines Landes auf dem Ast blieb, w\u00e4hrend andere fielen &ndash; und der auch heute noch als Symbol daf\u00fcr steht, dass ein einzelner Mensch, der sich weigert nachzugeben, den Lauf der Geschichte ver\u00e4ndern kann.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      <p class="vb-intro">Der 1953 im Amt erlittene, wochenlang verheimlichte Schlaganfall und die lebenslange Depression \u2013 &bdquo;the black dog&ldquo; \u2013 werden ausf\u00fchrlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">Krankheitsportr\u00e4t zu Churchill</a> gedeutet.</p>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se8", label:"SE8 \u2013 Der Orang-Utan: Subtyp-Profil"},
        {route:"beruehmte-golda-meir", label:"Portr\u00e4t: Golda Meir (SE8w9)"},
        {route:"beruehmte-helmut-kohl", label:"Portr\u00e4t: Helmut Kohl (SE8w9) \u2013 ebenfalls Staatsmann, derselbe Subtyp"},
        {route:"krankheitsportraets-winston-churchill", label:"Krankheitsportr\u00e4t: Winston Churchill (SE8w9)"},
        {route:"krankheitsportraets-golda-meir", label:"Krankheitsporträt: Golda Meir (SE8w9)"},
        {route:"bibel-der-hauptmann-unter-dem-kreuz", label:"Bibel-Porträt: Der Hauptmann unter dem Kreuz (SE8w9)"},
      ])}
    </div>
  `);
}

export function huangYongPingPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-huang-yong-ping-portrait.jpg" alt="Huang Yong Ping – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Huang Yong Ping</p>
        <p class="krim-portrait-typ">SE6w5 &middot; Selbsterhaltender Typ 6 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Chinesisch-franz\xf6sischer K\xfcnstler, 1954&ndash;2019 &ndash; Tierentsprechung: Kaninchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kaninchen, das dem Zufall die Kontrolle \xfcberlie\xdf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kaninchen</strong> ist das Tier des selbsterhaltenden Typs 6 &ndash; wachsam, anpassungsf\xe4hig, auf der Suche nach einem verl\xe4sslichen Grund, dem es vertrauen kann, wenn die Welt selbst keine Sicherheit bietet. Huang Yong Ping, 1954 in Xiamen (Amoy) an der s\xfcdchinesischen K\xfcste geboren, studierte an der Zhejiang Academy of Fine Arts in Hangzhou, bevor er 1986 in seiner Heimatstadt die Gruppe \xbbXiamen Dada\xab mitbegr\xfcndete &ndash; eine der radikalsten Str\xf6mungen der chinesischen Avantgarde, die nach einer Ausstellung ihre eigenen Werke \xf6ffentlich verbrannte.</p>
          <p class="vb-intro">Doch anders als der westliche Dadaismus, der auf Zerst\xf6rung und Provokation um ihrer selbst willen zielte, suchte Huang in diesem radikalen Akt etwas, das ihm selbst Sicherheit gab: ein System, das gr\xf6\xdfer war als die eigene, unsichere Autorenschaft. Das Kaninchen, das nicht auf die eigene St\xe4rke vertraut, sondern auf etwas Verl\xe4ssliches au\xdferhalb seiner selbst.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sechs: W\xe4rme als Vertrauen in ein altes System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sechs (SE6)</strong> ist nach Naranjo der Subtyp, den er <em>W\xe4rme</em> nannte: Sicherheit entsteht nicht durch Kontrolle oder Regeln, sondern durch das Vertrauen in etwas Verl\xe4ssliches, Vertrautes. Bei Huang zeigte sich dieses Vertrauen nicht vorrangig in menschlichen Bindungen, sondern in einem uralten chinesischen Ordnungssystem: dem I Ging (Yijing), dem \xbbBuch der Wandlungen\xab. \xdcber Jahrzehnte lie\xdf er W\xfcrfel, Drehr\xe4der und Zufallsmechanismen nach den Prinzipien des I Ging dar\xfcber entscheiden, welche Form, Farbe oder Anordnung ein Werk annehmen sollte.</p>
          <p class="vb-intro">Das ber\xfchmteste Beispiel dieser Haltung ist sein Werk \xbbA History of Chinese Painting and a Concise History of Modern Painting Washed in a Washing Machine for Two Minutes\xab (1987): Er legte zwei kanonische Kunstgeschichtsb\xfccher &ndash; eines \xfcber chinesische, eines \xfcber westliche Malerei &ndash; zusammen in eine Waschmaschine, bis nur noch ein papierener Brei \xfcbrig blieb. Keine pers\xf6nliche Setzung, keine k\xfcnstlerische Willk\xfcr &ndash; sondern ein vertrautes, \xe4u\xdferes Verfahren, das die Entscheidung \xfcbernimmt, wo die eigene Autorit\xe4t zu unsicher erscheint.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Distanz durch System statt durch N\xe4he</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> gibt der selbsterhaltenden Sechs eine intellektuelle, systematisierende K\xfchle, die eine reine 6w7 selten in dieser Konsequenz zeigt. Huangs lebenslange Auseinandersetzung mit Zen-Buddhismus, Taoismus und der Philosophie Wittgensteins sowie seine Bewunderung f\xfcr John Cages Zufallskompositionen zeigen genau diese F\xfcnfer-N\xfcchternheit: das Bed\xfcrfnis, die eigene, unsichere Subjektivit\xe4t hinter einem nachvollziehbaren, beinahe wissenschaftlichen Verfahren verschwinden zu lassen.</p>
          <p class="vb-intro">Wo eine reine Sechs mit schw\xe4cher ausgepr\xe4gtem F\xfcnferfl\xfcgel eher die N\xe4he einer Gruppe oder eines Mentors suchen w\xfcrde, um sich sicher zu f\xfchlen, suchte Huang die Sicherheit in einem intellektuell durchdrungenen, distanzierten System: nicht Menschen als Anker, sondern eine jahrtausendealte Methode, die verl\xe4sslicher schien als jede pers\xf6nliche Bindung.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Exil: Loyalit\xe4t zum vertrauten Kreis in der Fremde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1989 reiste Huang nach Paris, um an der wegweisenden Ausstellung \xbbMagiciens de la Terre\xab im Centre Pompidou teilzunehmen. W\xe4hrend seines Aufenthalts ereignete sich das Massaker am Platz des Himmlischen Friedens. Statt nach China zur\xfcckzukehren, entschied sich Huang zu bleiben &ndash; eine Entscheidung, die ihn f\xfcr den Rest seines Lebens zum Exilanten machte, fern der vertrauten Umgebung, aus der seine SE6-W\xe4rme urspr\xfcnglich ihre Sicherheit bezog.</p>
          <p class="vb-intro">Bezeichnend f\xfcr die SE6 ist, wie er auf diesen Bruch reagierte: nicht mit Anpassung an die neue Umgebung um jeden Preis, sondern mit dem Festhalten an einem kleinen, verl\xe4sslichen Kreis chinesischer K\xfcnstler und Denker im Pariser Exil sowie an denselben philosophischen Systemen, die ihn schon in Xiamen getragen hatten. Das Kaninchen, das seine Sicherheit nicht im neuen Territorium sucht, sondern in dem, was es aus der Heimat mitgenommen hat.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Sechs</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE6w5 zeigt sich in Huangs F\xe4higkeit, aus einem zutiefst pers\xf6nlichen Bed\xfcrfnis nach Verl\xe4sslichkeit ein Werk von universeller Kraft zu schaffen: Installationen wie \xbbTh\xe9\xe2tre du Monde\xab &ndash; ein schildkr\xf6tenf\xf6rmiger K\xe4fig voller Insekten und Reptilien, die sich gegenseitig fressen &ndash; \xfcbersetzen die eigene Suche nach einem tragf\xe4higen System in ein Bild der gesamten Weltordnung.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Kontroverse, die genau dieses Werk 2017 im Guggenheim Museum ausl\xf6ste: Nach massiven Protesten von Tierschutzorganisationen und Morddrohungen gegen das Museumspersonal wurde die Arbeit aus der Ausstellung entfernt. Das Schicksalsmuster der Sechs, der <strong>Zweifel</strong>, zeigt sich hier gespiegelt: Ein System, dem der K\xfcnstler bedingungslos vertraute &ndash; das kontrollierte Zufallsprinzip als \xfcbergeordnete Ordnung &ndash; geriet in Konflikt mit einer \xf6ffentlichen Autorit\xe4t, die dieses Vertrauen nicht teilte.</p>
        </blockquote>

        <h2 class="vb-section">6. Verm\xe4chtnis: Das Kaninchen, das bis zuletzt an der Ordnung baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Huang Yong Ping starb am 20. Oktober 2019 pl\xf6tzlich an einer Hirnblutung in Ivry-sur-Seine bei Paris &ndash; mitten in den Vorbereitungen zu einer gro\xdfen Retrospektive im Palais de Tokyo, die posthum unter dem Titel \xbbPeaux de banane\xab er\xf6ffnet wurde. Bis zuletzt hielt er an demselben Grundprinzip fest, das sein gesamtes Werk getragen hatte: der \xdcberzeugung, dass ein \xe4u\xdferes, verl\xe4ssliches System mehr Wahrheit birgt als die eigene, isolierte Entscheidung.</p>
          <p class="vb-intro">Wie Fjodor Dostojewski (SE6w5, siehe <a href="javascript:void(0)" data-route="beruehmte-fjodor-dostojewski">Portr\xe4t</a>) fand auch Huang seine Sicherheit nicht in \xe4u\xdferer Anpassung, sondern im unersch\xfctterlichen Festhalten an einem inneren Bezugssystem, das ihn durch Vertreibung, Kontroverse und Exil trug. Das Kaninchen, das seine W\xe4rme nicht in der Anpassung an neues Terrain fand, sondern in der Treue zu dem, was sich \xfcber Jahrtausende bereits bew\xe4hrt hatte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/se6", label:"SE6 &ndash; Das Kaninchen: Subtyp-Profil"},
        {route:"beruehmte-fjodor-dostojewski", label:"Portr\xe4t: Fjodor Dostojewski (SE6w5)"},
        {route:"beruehmte-alberto-marini", label:"Portr\xe4t: Alberto Marini (SE6w5)"},
        {route:"beruehmte-karl-lauterbach", label:"Portr\xe4t: Karl Lauterbach (SE6w5)"},
      ])}
    </div>
  `);
}

export function edvardMunchPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/edvard-munch-portrait.jpg" alt="Edvard Munch – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Edvard Munch</p>
        <p class="krim-portrait-typ">SO4w5 &middot; Sozialer Typ 4 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Norwegischer Maler und Grafiker, 1863–1944 – Tierentsprechung: G\xfcrteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das G\xfcrteltier, das seine Wunden ausstellte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>G\xfcrteltier</strong> ist das Tier der sozialen Vier – es zieht sich nicht aus der Welt zur\xfcck, sondern tr\xe4gt sein empfindsames Inneres bewusst in die \xd6ffentlichkeit, selbst wenn es sich dabei einen harten Panzer zulegt. Edvard Munch, 1863 in L\xf8ten geboren, verlor mit f\xfcnf Jahren seine Mutter und mit vierzehn seine \xe4ltere Schwester Sophie – beide an Tuberkulose. Sein Vater, ein streng religi\xf6ser Milit\xe4rarzt, deutete das Ungl\xfcck als g\xf6ttliche Strafe und verfiel danach in schwere Depressionen. Der junge Munch gab sich selbst die Schuld an den Krankheiten.</p>
          <p class="vb-intro">Statt dieses Leid zu verbergen, machte er es zeitlebens zum erkl\xe4rten Gegenstand seiner \xf6ffentlichen Kunst. Er nannte sich selbst den „Anatom der Seele“ – eine Rolle, die er nicht im Verborgenen, sondern auf der \xf6ffentlichen B\xfchne der europ\xe4ischen Kunstszene ausf\xfcllte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Das eigene Leid als \xf6ffentliches Bekenntnis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> stellt ihre Andersartigkeit nicht heimlich zur Schau, sondern macht sie zum Gegenstand einer bewussten Auseinandersetzung mit der Gemeinschaft, der sie zugleich zugewandt bleibt. Munchs Lebenswerk, der „Lebensfries“ – eine \xfcber Jahrzehnte gewachsene Bilderfolge zu Liebe, Angst, Eifersucht und Tod – war explizit als \xf6ffentliches Gesamtbekenntnis konzipiert, nicht als private Verarbeitung. „Der Schrei“, „Das kranke Kind“, „Eifersucht“ – all das waren keine verborgenen Skizzen, sondern Ausstellungsst\xfccke, mit denen er sein Publikum bewusst konfrontierte.</p>
          <p class="vb-intro">Am 5. November 1892 er\xf6ffnete der Verein Berliner K\xfcnstler Munch eine Einzelausstellung – und schloss sie nach wenigen Tagen wieder, weil das Publikum die Bilder als grotesk und skandal\xf6s empfand. Der „Fall Munch“ wurde zum Stadtgespr\xe4ch, Munch selbst amtierte den Skandal mit sichtlichem Vergn\xfcgen und blieb, mit Unterbrechungen, bis 1908 in Berlin – mitten im Zentrum genau jener Kunstszene, die ihn zugleich abgelehnt hatte. Genau das ist die soziale Vier: nicht die Distanz zur Gemeinschaft, sondern die bewusste Reibung an ihr, bei fortbestehender Zugeh\xf6rigkeit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Die eigene Angst als Gegenstand der Analyse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> verleiht der Vier eine analytische Distanz zum eigenen Gef\xfchl – das Leid wird nicht nur durchlebt, sondern systematisch seziert und in immer neuen Fassungen untersucht. Munch malte zentrale Motive wie „Der Schrei“ oder „Die Kranke“ – sein Bild der sterbenden Schwester Sophie – \xfcber Jahrzehnte hinweg in zahlreichen Varianten neu, als w\xfcrde er ein und dasselbe seelische Ph\xe4nomen aus immer wieder anderen Blickwinkeln vermessen.</p>
          <p class="vb-intro">Sein eigenes Zitat bringt diese Haltung auf den Punkt: „Wie viel verdanke ich doch in meiner Kunst dem Leiden … Ohne Lebensangst und Krankheit w\xe4re ich ein Schiff ohne Ruder gewesen.“ Das ist keine bloße Klage, sondern eine fast klinische Feststellung – die Fünferflügel-typische Beobachtung des eigenen Leids als notwendiges Material, nicht nur als Schmerz.</p>
        </blockquote>

        <h2 class="vb-section">4. Zusammenbruch, R\xfcckzug – und die Gemeinschaft, der er zugewandt blieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1902 verlor Munch bei einem Streit mit seiner damaligen Verlobten Tulla Larsen durch einen Revolverschuss ein Fingerglied der linken Hand. 1908 folgte, nach jahrelangem Alkoholmissbrauch und wachsender innerer Erschöpfung, ein schwerer Nervenzusammenbruch – Munch begab sich freiwillig in eine Kopenhagener Nervenklinik. Danach lebte er strikt abstinent und mit einem fast asketischen Gesundheitsregime, das er bis zu seinem Tod durchhielt.</p>
          <p class="vb-intro">Ab 1916 zog er sich auf sein Gut Ekely bei Oslo zur\xfcck – \xe4hnlich wie Marcel Proust (SO4w5) sich in sein korkverkleidetes Zimmer zur\xfcckzog, blieb aber, anders als es der Begriff „R\xfcckzug“ vermuten l\xe4sst, weiterhin international ausstellend und mit der europ\xe4ischen Kunstwelt verbunden. Seine Bilder betrachtete er als eine Art eigene „Kinder“ – er trennte sich nur ungern von ihnen und h\xe4ufte auf Ekely eine gewaltige private Sammlung an. Als er 1944 starb, fand man auf dem Anwesen, in Nebengeb\xe4uden und teils im Freien, rund 1.000 Gem\xe4lde, 15.400 Druckgrafiken und 4.500 Aquarelle und Zeichnungen – sein gesamtes Lebenswerk, das er der Stadt Oslo vermachte. Kinderlos und weitgehend allein lebend, vermachte er sein Lebenswerk nicht an eine Familie, sondern an genau jene Gemeinschaft, der er sich zeitlebens sowohl entzogen als auch zugewandt gef\xfchlt hatte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w5 ist die F\xe4higkeit, <strong>pers\xf6nliches Leid in ein universelles, \xf6ffentlich wirksames Bildvokabular zu \xfcbersetzen</strong> – „Der Schrei“ gilt bis heute als eines der bekanntesten Sinnbilder existenzieller Angst weltweit, weil Munch etwas zutiefst Pers\xf6nliches in eine Form goss, in der sich Millionen Menschen wiedererkennen konnten.</p>
          <p class="vb-intro">Der Schatten zeigte sich in der famili\xe4ren Vorbelastung, der er sich nie ganz entziehen konnte: Sowohl Gro\xdfvater als auch Vater litten unter Melancholie, seine Schwester Laura verbrachte gro\xdfe Teile ihres Lebens wegen einer Psychose in psychiatrischen Kliniken. Munchs eigene Todesangst, sein Hang zu Alkohol und der Zusammenbruch von 1908 zeigen die Kehrseite der sozialen Vier mit F\xfcnferfl\xfcgel: Die Distanz, die die k\xfcnstlerische Analyse des eigenen Leids erm\xf6glicht, kann irgendwann selbst zur Erschöpfung werden.</p>
        </blockquote>

        <h2 class="vb-section">6. Das G\xfcrteltier, das der Nachwelt seine Wunden hinterlie\xdf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Edvard Munch starb 1944 im Alter von 80 Jahren auf Ekely. Was als famili\xe4res Trauma und pers\xf6nliche Todesangst begann, wurde zu einem der einflussreichsten Werke der modernen Kunstgeschichte – ein Werk, das er der \xd6ffentlichkeit nie vorenthielt, sondern bewusst zur Schau stellte, um genau darin verstanden zu werden.</p>
          <p class="vb-intro">Das G\xfcrteltier, das seinen Panzer aus Angst und Krankheit nicht verbarg, sondern zum sichtbarsten Merkmal seines gesamten Werks machte, und das am Ende sein ganzes Lebenswerk der Gemeinschaft \xfcberließ, der er zeitlebens sowohl fern als auch zugewandt geblieben war – das ist das bleibende Bild der sozialen Vier mit F\xfcnferfl\xfcgel.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/so4", label:"SO4 – Das G\xfcrteltier: Subtyp-Profil"},
        {route:"beruehmte-marcel-proust", label:"Portr\xe4t: Marcel Proust (SO4w5) – dieselbe R\xfcckzugslogik bei fortbestehender Zugeh\xf6rigkeit"},
        {route:"beruehmte-gustav-mahler", label:"Portr\xe4t: Gustav Mahler (SO4w5)"},
        {route:"beruehmte-leonard-cohen", label:"Portr\xe4t: Leonard Cohen (SO4w5)"},
        {route:"beruehmte-michael-stipe", label:"Portr\xe4t: Michael Stipe (SO4w5)"},
        {route:"beruehmte-alice-miller", label:"Portr\xe4t: Alice Miller (SO4w5)"},
      ])}
    </div>
  `);
}

export function irisBerbenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-iris-berben-portrait.jpg" alt="Iris Berben – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Iris Berben</p>
        <p class="krim-portrait-typ">SX3w2 &middot; Sexueller Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Schauspielerin, geb. 1950 &ndash; Tierentsprechung: Pfau</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Pfau, der sich nie auf ein Federkleid beschränkte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Pfau</strong> ist das Tier des sexuellen Typs 3 – ein Tier, dessen Erfolg untrennbar mit persönlicher Anziehungskraft und Wirkung verbunden ist. Iris Berben, 1950 in Detmold als Tochter eines Gastronomen-Ehepaars geboren, verbrachte eine unruhige Kindheit zwischen Hamburg, Essen und mehreren Internaten, bevor sie mit siebzehn ihre Schauspielkarriere in einem Experimentalfilm begann.</p>
          <p class="vb-intro">Seit über fünfzig Jahren ist sie eine feste Größe des deutschen Film- und Fernsehgeschäfts – von komödiantischen Anfängen über die charakterstarke Kriminalreihe „Rosa Roth" (1994–2013) bis zur „Grande Dame des deutschen Films". Kein Pfau bleibt in einem einzigen Federkleid: Berben hat sich über Jahrzehnte immer wieder neu erfunden, ohne je die Grundfarbe ihrer öffentlichen Wirkung zu verlieren.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Drei: Anziehungskraft als eigenes Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Drei (SX3)</strong> sucht nach Naranjo Erfolg über die eigene Anziehungskraft, über die Fähigkeit, im Gegenüber Wirkung zu erzielen. Berben wurde über Jahrzehnte mit Superlativen wie „schönste Frau Deutschlands" oder „erotischste Schauspielerin" belegt – eine öffentliche Zuschreibung, die sie selbst bewusst umdeutete: Den Begriff „sexy" mag sie nicht, weil er von außen an sie herangetragen wird; „sinnlich" trifft es für sie besser, weil es sich auf Gefühl bezieht statt auf fremde Zuschreibung.</p>
          <p class="vb-intro">Ihr eigener Satz „Erotik hört nie auf, sie wird nur anders besetzt" zeigt die SX3-Reife in Reinform: Anziehungskraft wird mit dem Alter nicht abgelegt, sondern neu definiert – über Klugheit, Ironie und Selbstsicherheit statt über rein äußere Attribute. Das ist keine Verteidigung der Jugend, sondern die aktive Neuformulierung dessen, worüber die eigene Wirkung entsteht.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Wirkung im Dienst einer Sache</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel</strong> verleiht der sexuellen Drei eine zusätzliche Fürsorglichkeit, die die eigene Anziehungskraft in den Dienst eines größeren Anliegens stellt, statt sie ausschließlich für sich selbst zu nutzen. Eine Reise nach Israel 1967 wurde für Berben zum prägenden Wendepunkt – seither engagiert sie sich konsequent gegen Antisemitismus und für Demokratie, wofür sie 2002 den Leo-Baeck-Preis des Zentralrats der Juden in Deutschland erhielt.</p>
          <p class="vb-intro">Genau diese Verbindung – öffentliche Präsenz, die sich selbst nicht genügt, sondern in gesellschaftliches Engagement übersetzt wird – ist die Handschrift des Zweierflügels: Die eigene Strahlkraft wird geteilt und für andere eingesetzt, nicht nur zur eigenen Bestätigung verwendet.</p>
        </blockquote>

        <h2 class="vb-section">4. Stil als bewusste Reduktion</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Berben beschreibt ihren eigenen Stil als „mühelose Eleganz" mit bewusster Reduktion bei Kaufentscheidungen – kein Übermaß an Selbstinszenierung, sondern eine kuratierte, kontrollierte Form von Wirkung. Über ihre Vorstellung von Männlichkeit sagt sie: „Männlichkeit ist nicht unbedingt der Sixpack, aber ich mag Männer, die wie ein Mann aussehen und wie ein Mann reagieren" – eine klare, selbstbewusste Präferenz statt vager Anpassung an gängige Erwartungen.</p>
          <p class="vb-intro">Diese Klarheit über die eigene Wirkung, gepaart mit über hundert Filmrollen in fünf Jahrzehnten, zeigt eine SX3, die ihre Anziehungskraft nicht dem Zufall überlässt, sondern als eigenständiges, gepflegtes Handwerk begreift.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX3w2 zeigt sich bei Berben darin, dass sie ihre öffentliche Wirkung konsequent mit echtem gesellschaftlichem Engagement verband, statt sie ausschließlich zur eigenen Bestätigung zu nutzen – der Leo-Baeck-Preis steht dafür ebenso wie ihr jahrzehntelanges Eintreten gegen Antisemitismus.</p>
          <p class="vb-intro">Der Schatten der Drei liegt in der Gefahr, den eigenen Wert vollständig an die von außen wahrgenommene Wirkung zu knüpfen – eine Falle, der Berben durch ihre bewusste Neudefinition von Erotik und Anziehungskraft im Alter aktiv entgegenwirkte, statt sich dagegen zu wehren oder sie zu verleugnen.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Schauspielerin, die Wirkung neu erfand statt sie zu verteidigen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Iris Berbens Karriere zeigt die sexuelle Drei mit Zweierflügel über fünfzig Jahre hinweg in ihrer reifsten Form: Anziehungskraft, die sich mit dem Leben verändert statt zu erstarren, und öffentliche Präsenz, die sich immer wieder für eine Sache jenseits der eigenen Person einsetzte. Der Pfau zeigt nicht immer dasselbe Rad – aber er hört nie auf, es mit Absicht zu zeigen.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx3", label:"SX3 – Der Pfau: Subtyp-Profil"},
        {route:"beruehmte-brigitte-bardot", label:"Porträt: Brigitte Bardot (SX3w2) – ebenfalls Schauspielerin"},
        {route:"beruehmte-brigitte-macron", label:"Porträt: Brigitte Macron (SX3w2)"},
        {route:"beruehmte-linda-evans", label:"Porträt: Linda Evans (SX3w2)"},
        ])}
      </div>
    </div>
  `);
}

export function reinholdMessnerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-reinhold-messner-portrait.jpg" alt="Reinhold Messner – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Reinhold Messner</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Extrembergsteiger, Autor &amp; Museumsgründer, geb. 1944 &ndash; Tierentsprechung: Weißkopfseeadler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Weißkopfseeadler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Weißkopfseeadler</strong> ist das Tier der selbsterhaltenden Eins &ndash; ein Tier, das nicht durch Kraftdemonstration beeindruckt, sondern durch die Präzision, mit der es Höhen erreicht, in denen die meisten anderen nicht überleben. Reinhold Messner, geboren 1944 in Südtirol, begann bereits mit fünf Jahren zu klettern und unternahm seither weit über hundert Expeditionen in Gebirge und Wüsten.</p>
          <p class="vb-intro">Als erster Mensch bestieg er alle 14 Achttausender der Erde, den Mount Everest 1978 gemeinsam mit Peter Habeler als Erster ohne Flaschensauerstoff und 1980 sogar im Alleingang. Keine dieser Leistungen entstand aus Draufgängertum &ndash; jede war das Ergebnis jahrelanger, akribischer Vorbereitung, bei der ein einziger Fehler den Tod bedeutet hätte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Perfektion als Überlebensstrategie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionsanspruch nach innen: auf die eigene Vorbereitung, die eigene Disziplin, die eigene Fehlerlosigkeit. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; eine ständige, produktive Sorge, ob man dem eigenen Anspruch wirklich genügt. Bei einem Extrembergsteiger in Todeszonen jenseits von 8.000 Metern ist diese Eigenschaft keine Charakterschwäche, sondern buchstäblich lebensrettend.</p>
          <p class="vb-intro">Diese Ernsthaftigkeit wurde 1970 auf tragische Weise geprüft: Bei der gemeinsamen Erstbesteigung der Rupalwand des Nanga Parbat mit seinem Bruder Günther starb dieser beim Abstieg über die Diamirwand. Reinhold verlor durch schwere Erfrierungen sieben Zehen. Statt sich zurückzuziehen, verarbeitete er die Tragödie über Jahrzehnte in akribischer Aufarbeitung, unter anderem in seinem Buch „Der nackte Berg" (2002) &ndash; erst 2005 wurden Günthers sterbliche Überreste gefunden, was seine eigene, oft angezweifelte Darstellung der Ereignisse endlich bestätigte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Die Stille der Berge</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> lenkt die strenge Einser-Energie in die weite, ungestörte Stille der Natur statt in lautes Konkurrenzdenken. Messners bevorzugte Form des Bergsteigens war stets der Alleingang oder die kleine, unabhängige Seilschaft ohne Sauerstoffgeräte und ohne die Logistik großer Expeditionen &ndash; eine bewusste Reduktion auf das Wesentliche, die eher nach innerer Ruhe sucht als nach äußerem Spektakel.</p>
          <p class="vb-intro">Auch sein späteres Lebenswerk zeigt diese integrierende, in sich ruhende Note: Mit den sechs Standorten des Messner Mountain Museum in Südtirol schuf er keinen Ort der Selbstinszenierung, sondern ein Museum, das die Beziehung des Menschen zum Berg über Kulturen und Jahrhunderte hinweg erzählt &ndash; Synthese statt Wettbewerb.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Vom Gipfelstürmer zum Chronisten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1986 vollendete Messner als erster Mensch die Besteigung aller 14 Achttausender, alle ohne zusätzlichen Sauerstoff. Parallel dazu entstand ein schriftstellerisches Werk von mehr als 80 Büchern, das seine Expeditionen nicht als reine Heldengeschichten erzählt, sondern immer wieder auch Zweifel, Angst und Scheitern offenlegt.</p>
          <p class="vb-intro">Nach dem Ende seiner aktiven Bergsteigerkarriere führte er sein Leben auf Schloss Juval in Südtirol als Landwirt und Museumsgründer weiter, engagierte sich zeitweise als Europaabgeordneter für Umweltthemen und blieb seinem Grundthema treu: die genaue, unbestechliche Auseinandersetzung mit den Grenzen des menschlich Machbaren.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht der selbsterhaltenden Eins mit Neunerflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 zeigt sich bei Messner in der Verbindung von äußerster körperlicher Disziplin mit einer inneren Gelassenheit, die auch unter Extrembelastung nicht kippte. Seine Leistungen entstanden nicht aus Geltungssucht, sondern aus dem unbestechlichen eigenen Anspruch, eine Sache wirklich richtig zu machen &ndash; bis an die physiologische Grenze dessen, was ein Mensch ohne zusätzlichen Sauerstoff in großer Höhe leisten kann.</p>
          <p class="vb-intro">Der Schatten liegt in der Härte, mit der die Eins Fehler bewertet &ndash; auch die eigenen: Jahrzehntelang musste sich Messner öffentlichen Zweifeln an seiner Darstellung von Günthers Tod stellen, bevor der Fund der sterblichen Überreste 2005 ihn bestätigte. Der Weißkopfseeadler, der lieber die eigene Genauigkeit gegen anhaltenden Zweifel verteidigte, als sich der bequemeren, aber ungenauen Version zu fügen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"astrologie-reinhold-messner", label:"Enneagramm meets Astrologie: Reinhold Messner (SE1w9)"},
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-dieter-lange", label:"Porträt: Dieter Lange (SE1w9) – ähnliche Blickqualität"},
        {route:"beruehmte-robert-de-niro", label:"Porträt: Robert De Niro (SE1w9)"},
        {route:"beruehmte-herman-van-veen", label:"Porträt: Herman van Veen (SE1w9)"},
        {route:"beruehmte-henning-baum", label:"Porträt: Henning Baum (SE1w9)"},
        {route:"beruehmte-viktor-frankl", label:"Porträt: Viktor Frankl (SE1w9)"},
        {route:"beruehmte-juergen-klinsmann", label:"Porträt: Jürgen Klinsmann (SE1w9)"},
      ])}
    </div>
  `);
}

export function zoeKravitzPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-zoe-kravitz-portrait.jpg" alt="Zoë Kravitz – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Zoë Kravitz</p>
        <p class="krim-portrait-typ">SO3w2 &middot; Sozialer Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Schauspielerin und Musikerin, geb. 1988 &ndash; Tierentsprechung: Gepard</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gepard, der auf jedem Terrain Anerkennung suchte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gepard</strong> jagt nicht wahllos – er wählt genau das Terrain, auf dem seine Geschwindigkeit am sichtbarsten zur Geltung kommt. Zoë Kravitz, 1988 in Venice, Kalifornien geboren als einziges Kind von Lisa Bonet und Lenny Kravitz, baute sich über die Jahre nicht nur eine Schauspielkarriere auf, sondern eroberte nacheinander mehrere anerkannte Terrains: Musik mit den Bands Elevator Fight und Lolawolf, dann 2024 mit ›Blink Twice‹ auch die Regie – ein Debüt, das Kritiker als „kühn und einprägsam" beschrieben und das sie „ins Terrain der Regisseure, die man im Auge behalten sollte" katapultierte.</p>
          <p class="vb-intro">Diese Vielseitigkeit ist kein Zufall, sondern ein Muster: Erfolg soll nicht nur in einem Bereich, sondern über mehrere anerkannte Felder hinweg sichtbar werden.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Drei: Anerkennung im Vergleich, nicht im Alleingang</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Drei (SO3)</strong> sucht nach Naranjo Ansehen und Erfolg innerhalb einer Gruppe oder eines Vergleichsmaßstabs – Eitelkeit im Sinne eines ständigen Sich-Messens an einem geteilten Ideal, nicht die unmittelbare Wirkung im einzelnen Moment. Bei Kravitz zeigt sich die Schattenseite dieses Musters bereits mit dreizehn Jahren: Sie entwickelte eine Ess-Störung, weil sie sich fortlaufend mit Models und Frauen aus Zeitschriften verglich – ein sozial vermitteltes Schönheitsideal, an dem sie sich maß, nicht ein spontaner, unmittelbarer Impuls.</p>
          <p class="vb-intro">Später machte sie diese Erfahrung öffentlich: „Man konnte meinen Brustkorb sehen." Statt das Thema zu verschweigen, sprach sie wiederholt offen über Körperbild und Essstörungen in der Unterhaltungsindustrie – eine Umwandlung der eigenen sozialen Vergleichswunde in ein Anliegen, das anderen Frauen helfen soll.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Fürsorge als Antrieb hinter dem Ehrgeiz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel</strong> gibt der sozialen Drei eine zugewandte, unterstützende Note, die sich bei Kravitz in ihrem Engagement für Körperpositivität, psychische Gesundheit und Vielfalt in Hollywood zeigt. Sie beschränkt sich nicht darauf, selbst erfolgreich zu sein, sondern setzt sich sichtbar dafür ein, dass andere – vor allem junge Frauen mit ähnlichen Erfahrungen – sich weniger allein fühlen.</p>
          <p class="vb-intro">Auch privat trägt diese Wärme: Nach der Scheidung ihrer Eltern 1993 blieb sie mit beiden eng verbunden, wuchs zwischen Miami und New York zwischen Mutter und Vater auf – und heute pflegt die gesamte, mehrfach zusammengesetzte Patchwork-Familie um Lisa Bonet, Jason Momoa und Lenny Kravitz einen auffällig herzlichen Umgang miteinander, den Zoë selbst aktiv mitträgt.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Von der Nebenrolle zur eigenen Regie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach ersten Rollen in ›X-Men: First Class‹ und der ›Divergent‹-Reihe etablierte sich Kravitz mit ›Mad Max: Fury Road‹, ›Big Little Lies‹ und ›High Fidelity‹ (für das sie einen Black Reel Award erhielt) als vielseitige, ernstzunehmende Schauspielerin, bevor sie 2022 als Catwoman in ›The Batman‹ eine ihrer bislang größten Rollen übernahm.</p>
          <p class="vb-intro">Mit ›Blink Twice‹ erweiterte sie ihr Terrain 2024 endgültig um die Regie – ein Schritt, der zeigt, wie konsequent sie ihren Status nicht auf ein einzelnes Feld begrenzen wollte, sondern in mehreren, jeweils hoch angesehenen Disziplinen gleichzeitig Anerkennung suchte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Drei mit Zweierflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO3w2 zeigt sich bei Kravitz in der Fähigkeit, aus dem eigenen, sehr persönlichen Kampf mit gesellschaftlichen Schönheitsidealen eine öffentliche, warmherzige Botschaft zu machen, die anderen tatsächlich hilft, statt die eigene Verletzlichkeit zu verstecken.</p>
          <p class="vb-intro">Der Schatten der Drei zeigt sich in der frühen, fast zwanghaften Selbstvergleichs-Spirale, die zur Essstörung führte – ein Muster, das entsteht, wenn der eigene Wert zu stark an ein von außen gesetztes, geteiltes Ideal gekoppelt wird, statt an ein inneres Maß.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Schauspielerin, die sich mehrfach neu bewies</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zoë Kravitz' Weg zeigt die soziale Drei mit Zweierflügel in einer besonders vielseitigen Form: Anerkennung wurde nie in nur einem Bereich gesucht, sondern über Schauspiel, Musik und Regie hinweg – begleitet von einer echten Fürsorge für andere, die aus der eigenen, öffentlich gemachten Verletzlichkeit erwuchs. Der Gepard wechselt das Terrain, aber er hört nie auf zu laufen.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so3", label:"SO3 – Der Gepard: Subtyp-Profil"},
        {route:"beruehmte-lenny-kravitz", label:"Porträt: Lenny Kravitz (SX3w2) – ihr Vater"},
        {route:"beruehmte-cristiano-ronaldo", label:"Porträt: Cristiano Ronaldo (SO3w2)"},
        {route:"beruehmte-sahra-wagenknecht", label:"Porträt: Sahra Wagenknecht (SO3w2)"},
        ])}
      </div>
    </div>
  `);
}

export function louiseHayPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-louise-hay-portrait.jpg" alt="Louise Hay – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Louise Hay</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexueller Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Selbsthilfe-Autorin, Gründerin von Hay House, 1926&ndash;2017 &ndash; Tierentsprechung: Wolf</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Wolf, der der Angst den Krieg erklärte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Wolf</strong> ist das Tier des sexuellen Typs 6 – ein Tier, das Bedrohung nicht meidet, sondern ihr direkt ins Auge sieht. Louise Hay, 1926 als Helen Vera Lunney in Armut in Los Angeles geboren, erlebte als Fünfjährige sexuellen Missbrauch durch einen Nachbarn und wuchs mit einem gewalttätigen Stiefvater auf. Mit fünfzehn brach sie die Schule ab, mit sechzehn brachte sie ein Kind zur Welt, das zur Adoption freigegeben wurde. Wenig später verließ sie ihr Zuhause – eine Kindheit, in der Angst nicht die Ausnahme, sondern der Normalzustand war.</p>
          <p class="vb-intro">Statt sich von dieser Angst dauerhaft lähmen zu lassen, baute Hay ihr gesamtes späteres Leben auf der Überzeugung auf, dass genau diese Angst besiegbar sei – nicht durch Vermeidung, sondern durch direkte, wiederholte Konfrontation mit ihr. Der Wolf verkriecht sich nicht; er lernt, der Bedrohung mit erhobenem Kopf zu begegnen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sechs: Angst als Gegner, der besiegt werden muss</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sechs (SX6)</strong> begegnet Bedrohung nach Naranjo nicht mit Rückzug, sondern mit Gegenangriff – Sicherheit entsteht durch aktives Bezwingen der eigenen Furcht, nicht durch Anpassung an sie. Hays gesamtes Lebenswerk lässt sich als eine einzige, jahrzehntelange Konfrontationsstrategie gegen die Angst lesen: ihre Affirmationstechnik forderte Menschen dazu auf, sich täglich, laut und wiederholt gegen die eigene Furcht und Selbstverachtung zu stellen, statt sie zu verdrängen.</p>
          <p class="vb-intro">Als bei ihr 1977/78 ein als unheilbar geltender Gebärmutterhalskrebs diagnostiziert wurde, lehnte sie eine konventionelle Behandlung ab und begegnete der eigenen Todesangst mit genau derselben Frontalkonfrontation, die sie auch anderen predigte – durch Vergebungsarbeit, Ernährungsumstellung und tägliche Affirmationen. Ob dieser Ansatz die tatsächliche Ursache ihrer Genesung war, ist medizinisch nicht belegt; entscheidend für die Typisierung ist die Haltung dahinter: keine Kapitulation vor der Angst, sondern der Versuch, sie mit bloßer Willenskraft zu besiegen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Aus dem Dunkel ins grenzenlos Positive</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> zeigt sich bei Hay in der auffälligen Breite und dem ungebrochenen Optimismus ihres Wirkens. Statt sich auf ein einzelnes Trauma-Thema zu beschränken, entwickelte sie ein universelles System, das buchstäblich jede körperliche Beschwerde – von Akne bis Krebs – auf ein psychologisches Muster zurückführte und damit lösbar erscheinen ließ. Diese Tendenz, jede Dunkelheit sofort in eine hoffnungsvolle, umsetzbare Botschaft zu verwandeln, ist reine Siebener-Energie, verbunden mit der sexuellen Sechs, die genau diese Hoffnung als Waffe gegen die eigene Furcht einsetzt.</p>
          <p class="vb-intro">Auch der 1984 gegründete Verlag Hay House, der bis 2015 über 130 Autoren unter Vertrag hatte und weit über Hays eigenes Thema hinaus in Ernährung, Spiritualität, Wirtschaft und Selbsthilfe hineinwirkte, zeigt dieselbe siebenertypische Weite: nie bei einem Thema stehen bleiben, immer neue Facetten des positiven Denkens erschließen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die „Hayrides": Angst mit den Ängstlichsten gemeinsam bezwingen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mitte der 1980er-Jahre, auf dem Höhepunkt der AIDS-Epidemie und der gesellschaftlichen Stigmatisierung Betroffener, gründete Hay in West Hollywood die Selbsthilfegruppe „Hayrides" – zunächst für eine Handvoll, später für über 800 überwiegend schwule Männer, die mit der Diagnose und der nahenden eigenen Sterblichkeit konfrontiert waren. Sie ging damit direkt in einen Raum, den die meiste Öffentlichkeit aus Angst mied, und stellte sich der kollektiven Todesfurcht einer ganzen Generation.</p>
          <p class="vb-intro">Diese Bereitschaft, sich der größten gesellschaftlichen Angst ihrer Zeit direkt und öffentlich entgegenzustellen, statt ihr auszuweichen, ist der wohl deutlichste Ausdruck der sexuellen Sechs in ihrem Wirken – nicht Rückzug vor dem Unaussprechlichen, sondern aktive, wiederholte Konfrontation damit, Woche für Woche, gemeinsam mit den Betroffenen selbst.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Sechs mit Siebenerflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX6w7 zeigt sich in dem echten Trost, den Hay hunderten sterbenden Männern in einer Zeit spendete, in der Kirchen, Familien und selbst Teile des Gesundheitssystems sich von ihnen abwandten – eine konkrete, gelebte Form von Mut gegen kollektive Angst.</p>
          <p class="vb-intro"><strong>Wichtiger Hinweis:</strong> Hays Kernthese, wonach körperliche Krankheiten grundsätzlich auf mangelnde Selbstliebe oder ungelöste emotionale Muster zurückzuführen seien, ist wissenschaftlich nicht belegt und in der Fachwelt umstritten – sie birgt das Risiko, Erkrankten die Schuld an der eigenen Krankheit zuzuschreiben und von notwendiger medizinischer Behandlung abzuhalten. Diese Schattenseite zeigt, wie aus dem Sechser-Bedürfnis, die Angst durch ein geschlossenes Erklärungssystem zu bezwingen, eine Vereinfachung werden kann, die komplexe medizinische Realität ausblendet.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Wolf, der Millionen die Angst nehmen wollte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Louise Hay starb 2017 im Alter von 90 Jahren, nachdem ihr Buch „Heile deinen Körper" (You Can Heal Your Life, 1984) weltweit über 50 Millionen Mal verkauft worden war und Hay House zu einem der einflussreichsten Selbsthilfe-Verlage der Welt geworden war. Vom missbrauchten Kind zur Gründerin eines globalen Imperiums der Selbstliebe – ihr ganzes Leben blieb ein Versuch, aus der eigenen, tiefsten Angst heraus anderen Menschen die ihrige zu nehmen.</p>
          <p class="vb-intro">Ein Vergleich im selben Subtyp-Feld dieses Kompasses: <a href="javascript:void(0)" data-route="beruehmte-eva-mendes">Eva Mendes</a> (SX6w7) zeigt ein verwandtes Muster – vom ängstlichen Kind einer Einwandererfamilie zum selbstbewussten Sexsymbol, indem sie der eigenen Angst nicht auswich, sondern sich ihr direkt stellte.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx6", label:"SX6 – Der Wolf: Subtyp-Profil"},
        {route:"beruehmte-eva-mendes", label:"Porträt: Eva Mendes (SX6w7) – ebenfalls derselbe Subtyp"},
        {route:"beruehmte-heather-thomas", label:"Porträt: Heather Thomas (SX6w7)"},
        ])}
      </div>
    </div>
  `);
}

export function haraldLeschPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-harald-lesch-portrait.jpg" alt="Harald Lesch – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Harald Lesch</p>
        <p class="krim-portrait-typ">SE5w6 &middot; Selbsterhaltender Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Astrophysiker, Wissenschaftskommunikator, geb. 1960 &ndash; Tierentsprechung: Eule</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Eule, die sich weigerte, Wissenschaft zu vereinfachen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Eule</strong> ist das Tier der selbsterhaltenden Fünf: Sie hortet ihr Wissen, bis es wirklich tragfähig ist, und zeigt sich erst dann, wenn nichts mehr fehlt. Harald Lesch, geboren 1960 in Gießen, studierte Physik, Mathematik und Philosophie und ist seit 1995 Professor für theoretische Astrophysik an der Ludwig-Maximilians-Universität München – zusätzlich hält er einen Lehrstuhl für Naturphilosophie an der Hochschule für Philosophie München, einer von Jesuiten getragenen Einrichtung.</p>
          <p class="vb-intro">Von 1998 bis 2015 moderierte er über 200 Folgen von ›alpha-Centauri‹, in denen er komplexe physikalische Fragen in aller Ausführlichkeit erklärte, statt sie auf Schlagzeilenformat zu kürzen. Die Eule zeigt sich erst, wenn die Erklärung vollständig ist – nicht früher.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Fünf: Wissen horten, bis es tragfähig ist</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Fünf (SE5)</strong> zieht sich zurück, um ihre begrenzten inneren Ressourcen zu schützen – sie gibt nichts preis, das nicht restlos durchdacht ist. Lesch gilt als notorisch akribisch in der Vorbereitung seiner Sendungen und Vorträge und äußert sich in Interviews wiederholt frustriert über oberflächliche, verkürzende Medienformate, die komplexe wissenschaftliche Sachverhalte auf plakative Halbwahrheiten reduzieren.</p>
          <p class="vb-intro">Über sein Privatleben spricht er trotz jahrzehntelanger Fernsehpräsenz auffällig wenig – anders als viele Fernsehpersönlichkeiten seiner Bekanntheit hält er seine Familie konsequent aus der Öffentlichkeit heraus. Die selbsterhaltende Fünf teilt ihre kostbare innere Energie nur dort, wo sie es für unbedingt notwendig hält – im fachlichen Vortrag, nicht im privaten Bekenntnis.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Wachsamkeit vor der Katastrophe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> verstärkt bei der Fünf das Bedürfnis nach Absicherung und die Wachsamkeit gegenüber Gefahren, die andere noch nicht sehen. Bei Lesch zeigt sich das in seinem jahrzehntelangen, unermüdlichen öffentlichen Engagement zu Klimawandel, Ressourcenknappheit und den Grenzen des Wirtschaftswachstums – Themen, bei denen er immer wieder eindringlich vor gesellschaftlichen und ökologischen Kipppunkten warnt, lange bevor sie im öffentlichen Bewusstsein angekommen waren.</p>
          <p class="vb-intro">Auch sein zusätzlicher Lehrstuhl für Naturphilosophie an einer kirchlich getragenen Institution zeigt diese Sechser-Note: eine bewusst gewählte, institutionell abgesicherte Verankerung in einem traditionsreichen, verlässlichen Rahmen, statt sich ausschließlich der ungebundenen, medialen Wissenschaftskommunikation auszusetzen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Geiz als Schutz der eigenen, begrenzten Energie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Fünf heißt <strong>Geiz</strong> – gemeint ist damit nicht in erster Linie materieller Geiz, sondern das Zurückhalten der eigenen Energie, Zeit und Aufmerksamkeit vor allem, was diese knappe Ressource unnötig verbrauchen würde. Lesch lehnt öffentlichkeitswirksame, aber fachlich seichte Auftritte konsequent ab und investiert seine begrenzte Energie stattdessen in tief durchdachte, oft lange Erklärformate.</p>
          <p class="vb-intro">In viral gewordenen Fernsehmomenten wird er sichtbar emotional, wenn wissenschaftlicher Konsens durch Verschwörungstheorien oder Pseudowissenschaft infrage gestellt wird – eine der wenigen Situationen, in denen die sonst kontrollierte Eule ihre Zurückhaltung kurzzeitig aufgibt, weil aus ihrer Sicht ihr kostbarstes Gut, gesichertes Wissen, angegriffen wird.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Krise als Spiegel: Wenn die Eule laut wird</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die SE5w6 hat eine Schwachstelle: Ihre sonst so kontrollierte Zurückhaltung kann in offenen Ärger umschlagen, wenn eine Bedrohung ihres Wissensfundaments unmittelbar spürbar wird. Mehrere von Leschs Fernsehauftritten, in denen er sich sichtlich erregt gegen Klimawandelleugnung oder unwissenschaftliche Behauptungen wendet, verbreiteten sich viral im Internet – ein für die sonst so gefasste Eule ungewöhnlicher Kontrollverlust.</p>
          <p class="vb-intro">Aus Enneagramm-Perspektive ist das keine Inkonsequenz, sondern die Konsequenz des Musters: Für die SE5w6 ist verlässliches, geprüftes Wissen die eigentliche Sicherheit – wird sie durch Falschbehauptungen untergraben, reagiert selbst die zurückhaltendste Eule mit unverstellter Vehemenz.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Tiefe statt Verkürzung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Harald Lesch bleibt einer der einflussreichsten Wissenschaftskommunikatoren des deutschsprachigen Raums – nicht, weil er sich dem Tempo und der Verkürzung des Fernsehformats anpasste, sondern weil er beharrlich auf Tiefe bestand. Mit ›alpha-Centauri‹, ›Leschs Kosmos‹ und zahllosen Beiträgen für ›Terra X‹ erreichte er Millionen Menschen mit einer Gründlichkeit, die im Fernsehen selten geworden ist.</p>
          <p class="vb-intro">Das ist die selbsterhaltende Fünf mit Sechserflügel in ihrer reinsten Form: eine Eule, die ihr Wissen nicht leichtfertig preisgibt, sondern nur dann, wenn es vollständig durchdacht ist – und die genau dann laut wird, wenn dieses mühsam gesicherte Wissen selbst infrage gestellt wird.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se5", label:"SE5 – Die Eule: Subtyp-Profil"},
        {route:"beruehmte-carl-friedrich-gauss", label:"Porträt: Carl Friedrich Gauß (SE5w6)"},
      ])}
    </div>
  `);
}

export function herfriedMuenklerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-herfried-muenkler-portrait.jpg" alt="Herfried Münkler" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Herfried Münkler</p>
        <p class="krim-portrait-typ">SO6w7 &middot; Sozialer Typ 6 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Politikwissenschaftler, geb. 1951 &ndash; Tierentsprechung: Erdmännchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Erdmännchen, das nicht auf dem Stein bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Herfried Münkler, 1951 in Friedberg (Hessen) geboren, hatte von 1992 bis 2018 den Lehrstuhl für Ideengeschichte und Theorie der Politik an der Berliner Humboldt-Universität inne. Wer sein Werk überblickt – vom "Großen Krieg" über "Imperien" bis zu "Die Deutschen und ihre Mythen" – sieht sofort: Hier hält ein Erdmännchen Wache, das nicht auf dem einen hohen Stein verharrt, sondern zwischen den Themen springt, sobald sich irgendwo im Feld eine neue Gefahr oder ein neues Deutungsproblem zeigt.</p>
          <p class="vb-intro">Münkler ist gefragter Talkshow-Gast, ständiger Gesprächspartner großer Zeitungen, Mitglied im Beirat der Bundesakademie für Sicherheitspolitik – ein Netzwerk aus Medien, Politik und Wissenschaft, das er mit sichtbarem Tempo bespielt. Genau diese Mischung aus Wachsamkeit und öffentlicher Reichweite ist die Handschrift der sozialen Sechs mit Siebenerflügel.</p>
        </blockquote>

        <h2 class="vb-section">2. Die Pflicht: Sicherheit durch das Deuten der Gefahr, nicht durch Rückzug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sozialen Typ 6 die <strong>Pflicht</strong> – Sicherheit entsteht durch Dienst an der Gemeinschaft, durch das Bereitstellen von Orientierung in unübersichtlichen Zeiten. Münklers Lebensthema ist genau das: Er prägte den Begriff der "asymmetrischen Kriege" und analysierte in "Die neuen Kriege", wie sich Gewalt jenseits klassischer Staatenkonflikte organisiert – Wissen, das er nicht in der Fachliteratur vergraben ließ, sondern in Talkshows, Essays und Bestsellern in die öffentliche Debatte trug.</p>
          <p class="vb-intro">Wo eine SO6w5 wie seine langjährige Schülerin Grit Straßenberger Sicherheit durch die stille, systematisierende Vertiefung in einen akademischen Kanon sucht, sucht die SO6w7 Sicherheit durch das laute Einordnen der Gefahr für ein möglichst breites Publikum – nicht zurückgezogen, sondern mitten im Geschehen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerflügel: Tempo, Themenvielfalt, Streitlust</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel (w7)</strong> zeigt sich bei Münkler in der schieren Breite und Geschwindigkeit seines Werks: Kriegstheorie, Imperiengeschichte, deutsche Mythen, Elitenforschung, Machiavelli – Themen, die eine SO6 mit stark ausgeprägtem Fünferflügel eher nacheinander in großer Tiefe bearbeiten würde, verarbeitet Münkler nahezu parallel, in schneller Folge neuer Bücher und öffentlicher Wortmeldungen.</p>
          <p class="vb-intro">Auch seine Bereitschaft, öffentlich anzuecken – etwa in der kontrovers geführten Debatte um den "Münkler-Watch"-Blog seiner eigenen Studierenden 2015 – passt zu diesem Flügel: kein Rückzug ins Stille, sondern eine Auseinandersetzung mitten in der Öffentlichkeit. Wo der Fünferflügel die Energie nach innen in Systematisierung lenkt, richtet der Siebenerflügel sie nach außen: in Reichweite, Debatte, das nächste dringende Thema.</p>
        </blockquote>

        <h2 class="vb-section">4. Lehrer und Schülerin: Zwei Erdmännchen, zwei Wachformen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2004 promovierte Grit Straßenberger bei Münkler an der Humboldt-Universität mit einer Arbeit über Hannah Arendt, Michael Walzer und Martha Nussbaum – magna cum laude. Die Verbindung ist mehr als biografische Fußnote: Beide teilen dasselbe Kernthema, die Frage nach legitimer und gefährlicher Autorität, doch sie leben es in entgegengesetzter Flügelfärbung. Der Lehrer trägt seine Wachsamkeit mit Tempo und öffentlichem Auftritt hinaus, die Schülerin vertieft sie still im akademischen Kanon.</p>
          <p class="vb-intro">Genau diese Ergänzung – der eine warnt öffentlich und schnell, die andere prüft langsam und gründlich – lässt sich als Muster einer akademischen Übertragung lesen, bei der die charakterliche Grundausrichtung (soziale Sechs) erhalten bleibt, während sich die Ausdrucksform über die Generation hinweg zur anderen Flügelseite verschiebt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Sechs mit Siebenerflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO6w7 zeigt sich in Münklers Fähigkeit, komplexe historische und sicherheitspolitische Zusammenhänge so zugänglich zu formulieren, dass sie weit über die Fachwelt hinaus gehört werden – ein Wächter, der die Gemeinschaft tatsächlich erreicht.</p>
          <p class="vb-intro">Der Schatten liegt in der Gefahr, dass die eigene Deutungsfreude zur ständigen öffentlichen Positionierung wird, die gelegentlich mehr Widerspruch erzeugt, als sie befriedet – wie sich in der "Münkler-Watch"-Kontroverse zeigte. Wo eine SO6w5 zu lange im Stillen prüft, kann die SO6w7 riskieren, mit zu vielen gleichzeitigen Wortmeldungen an Tiefenschärfe zu verlieren.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Erdmännchen, das seine Schülerin auf den Stein stellte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zwei Erdmännchen, dieselbe Kernfrage nach legitimer und gefährlicher Autorität – zwei völlig verschiedene Wege, sie zu leben: Herfried Münkler (SO6w7) hält Wache, indem er mit Tempo und Reichweite hinausträgt, was er sieht. Grit Straßenberger (SO6w5), seine Schülerin, hält Wache, indem sie sich tief in den akademischen Kanon eingräbt und von dort aus prüft.</p>
          <p class="vb-intro">Am Ende bleibt das Bild einer Übertragung, die selten so klar zu beobachten ist: ein Lehrer, der lautstark warnt, und eine Schülerin, die genau dieselbe Wache still fortsetzt – zwei Antworten auf dieselbe Frage, wie eine Gemeinschaft ihre Freiheit bewahrt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so6", label:"SO6 – Das Erdmännchen: Subtyp-Profil"},
        {route:"beruehmte-grit-strassenberger", label:"Porträt: Prof. Dr. Grit Straßenberger (SO6w5)"},
        {route:"beruehmte-anne-applebaum", label:"Porträt: Anne Applebaum (SO6w7)"},
        {route:"beruehmte-donata-hopfen", label:"Porträt: Donata Hopfen (SO6w7)"},
      ])}
    </div>
  `);
}

export function antonZeilingerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-anton-zeilinger-portrait.jpg" alt="Anton Zeilinger – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Anton Zeilinger</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Quantenphysiker, geb. 1945 – Nobelpreis für Physik 2022 – Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus, der mit acht Armen nach der Verschränkung tastete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen Fünf – ein Wesen, das mit mehreren Armen gleichzeitig tastet, prüft und verbindet, bevor es zupackt. Bei Anton Zeilinger zeigt sich dieses Bild direkt im Gegenstand seiner Forschung: Verschränkte Photonen, die – einmal miteinander verbunden – ihren Zustand über beliebige Entfernungen aufeinander abgestimmt halten, ganz gleich, wie weit die Arme auseinandergezogen werden. Ein Forscherleben, das genau dieser Verbindung nachgeht: nicht dem einzelnen Teilchen, sondern dem, was zwei Teilchen über jede Distanz hinweg miteinander verknüpft.</p>
          <p class="vb-intro">Zeilinger wurde 1945 in Ried im Innkreis geboren, studierte Physik und Mathematik in Wien und promovierte am Atominstitut bei Helmut Rauch. Von 1999 bis 2013 war er Professor für Experimentalphysik an der Universität Wien, von 2004 bis 2013 Direktor des Instituts für Quantenoptik und Quanteninformation (IQOQI) und von 2013 bis 2022 Präsident der Österreichischen Akademie der Wissenschaften. Ein Weg, der sich über Jahrzehnte von der einzelnen Messung zur institutionellen Verantwortung für ein ganzes Wissenschaftssystem ausdehnte.</p>
        </blockquote>

        <h2 class="vb-section">2. Das Totem: Wissen, das eine ganze Akademie trug</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo nannte den sozialen Typ 5 das <strong>Totem</strong> – die Verknüpfung von Wissen mit Zugehörigkeit und Ansehen. Die SO5 hält ihr Wissen nicht zurück wie die introvertierte SE5, sondern trägt es in die Gemeinschaft, wird dadurch zur Instanz. Zeilinger lebte dieses Muster in zwei Richtungen zugleich: Als jahrelanger, unermüdlicher Fürsprecher für die Förderung der Grundlagenforschung trug er Wissen über die eigene Disziplin hinaus in Politik und Öffentlichkeit – und als Präsident der Akademie der Wissenschaften übernahm er die Verantwortung für das ganze System, das dieses Wissen trägt und weitergibt.</p>
          <p class="vb-intro">Auch als Wissenschaftskommunikator zeigt sich das Totem-Muster: In seinen Vorträgen bemüht sich Zeilinger erkennbar, komplexe Quantenphysik für Laien verständlich zu machen, statt sie im Fachzirkel zu belassen. Wissen, das der ganzen Gesellschaft zur Verfügung gestellt wird, nicht nur der eigenen Zunft – das Totem in seiner offenen, mitteilenden Form.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Das Team als tragfähiges System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> bringt der sozialen Fünf ein tiefes Bedürfnis nach Verlässlichkeit und einem tragfähigen System, dem man vertrauen kann. Genau das beschreibt Zeilinger selbst als Grundlage seiner Forschung: Seine Arbeit funktioniere „nur als Team" – eine Idee, oft aus der Gruppe oder von ihm selbst, werde gemeinsam diskutiert und dadurch „unglaublich geschärft". Jede Idee werde in seiner Gruppe zunächst grundsätzlich positiv aufgenommen, bevor sie geprüft wird.</p>
          <p class="vb-intro">Das ist Sechserflügel-Wissenschaft im besten Sinn: kein einsamer Durchbruch eines Einzelnen, sondern ein verlässliches, über Jahre aufgebautes Vertrauenssystem innerhalb der Forschungsgruppe, das schwierige, oft gegenintuitive Quantenexperimente erst möglich macht. Sicherheit entsteht nicht durch Kontrolle von außen, sondern durch ein tragfähiges Miteinander nach innen.</p>
          <p class="vb-intro">Eine Facette bleibt dabei bemerkenswert: Zeilinger bezeichnet sich selbst als „Romantiker" und betont, echte wissenschaftliche Innovation entstehe nicht durch reine Logik, sondern erst dort, wo Intuition ins Spiel komme – eine Sprache, die eher nach Viererflügel klingt als nach Sechser. Bei näherem Hinsehen bleibt sie aber ein einzelner Farbton, kein tragendes Muster: Weder zeigt sich die für den Vierer typische Betonung der eigenen Andersartigkeit noch ein Rückzug aus dem Team zugunsten individueller Selbstinszenierung. Die Intuition bleibt bei ihm eingebettet in das verlässliche, gemeinschaftliche System – ein Sechser, der sich auch für das Unberechenbare öffnet, ohne dafür seine Grundstruktur zu verlassen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die tatsächliche Leistung: Verschränkung, Teleportation, Nobelpreis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zeilinger gilt als Pionier der Übertragung von Quanteninformation zwischen Photonen. 1998 gelang seinem Team erstmals die Quantenteleportation: die Übertragung eines Quantenzustands von einem Teilchen auf ein anderes, entferntes Teilchen – nicht durch physischen Transport, sondern durch die Eigenschaften der Verschränkung selbst. Im Oktober 2022 erhielt er gemeinsam mit Alain Aspect und John F. Clauser den Nobelpreis für Physik für bahnbrechende Experimente mit verschränkten Photonen, die grundlegende Fragen der Quantenmechanik experimentell entschieden. Er ist der vierte österreichische Physik-Nobelpreisträger nach Erwin Schrödinger, Victor Franz Hess und Wolfgang Pauli.</p>
          <p class="vb-intro">Diese Leistung liegt jenseits jeder Enneagramm-Deutung – sie ist reine physikalische Präzisionsarbeit, über Jahrzehnte gegen erhebliche experimentelle Widerstände erarbeitet. Was der Fünfer-Rahmen zusätzlich sichtbar macht, ist die Art, wie dieses Wissen anschließend behandelt wurde: nicht als Herrschaftswissen, sondern als etwas, das über Institut, Akademie und Öffentlichkeit hinweg geteilt und weitergetragen wurde.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Fünf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht zeigt sich bei Zeilinger die SO5w6 als jemand, der Kompetenz systematisch in tragfähige Strukturen überführt: ein Forschungsteam, ein Institut, eine ganze Akademie. Wissen wird nicht gehortet, sondern in ein System eingebaut, das über die eigene Person hinaus Bestand hat – die reife Form des Totems.</p>
          <p class="vb-intro">Der Schatten der Fünf ist <strong>Geiz</strong> – das Zurückhalten, nicht von Wissen, sondern von sich selbst als Person. Bei einer öffentlich derart sichtbaren Figur wie Zeilinger zeigt sich das eher subtil: Im Vordergrund stehen durchweg die Sache, das Experiment, das Institut – seltener die eigene Person jenseits der fachlichen Rolle. Ein Muster, das der Fünf hilft, in einem jahrzehntelangen, öffentlichkeitswirksamen Forscherleben nicht auszubrennen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Horten zum Teilen aus Fülle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Fünf führt von der Frage <em>Reicht mein Wissen, meine Energie, meine Zeit überhaupt?</em> zur Erkenntnis <em>Ich habe genug, um zu geben, ohne mich zu verlieren.</em> Zeilingers Weg von der einzelnen Messung im Labor zur Verantwortung für eine ganze Akademie liest sich wie eine gelungene Annäherung an diese Erkenntnis: Wissen, das nicht mehr geschützt werden muss, sondern in Institutionen, Teams und öffentliche Vorträge fließen darf.</p>
          <p class="vb-intro">Dass er sein Engagement für die Grundlagenforschung auch nach dem Karrierehöhepunkt Nobelpreis unvermindert fortsetzte, zeigt eine Fünf, die gelernt hat, aus Fülle zu geben statt aus Mangel zu horten – der Oktopus, dessen Arme sich nicht mehr zurückziehen müssen, sobald sie einmal ausgestreckt sind.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-guenther-jauch", label:"Porträt: Günther Jauch (SO5w6)"},
        {route:"beruehmte-eckhard-freise", label:"Porträt: Eckhard Freise (SO5w6)"},
        {route:"beruehmte-dirk-rossmann", label:"Porträt: Dirk Rossmann (SO5w6)"},
      ])}
    </div>
  `);
}

export function mariaCallasPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-maria-callas-portrait.jpg" alt="Maria Callas – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Maria Callas</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Sopranistin, 1923–1977 – Wegbereiterin der Bel-canto-Renaissance – Tierentsprechung: Waschbär</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Waschbär, der sich eine Stimme neu erarbeitete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschbär</strong> ist das Tier der selbsterhaltenden Drei – ein Tier, das aus wenig geschickten Händen ein funktionierendes System baut, still und beharrlich, ohne auf günstige Startbedingungen zu warten. Maria Callas wurde 1923 in New York als Kind griechischer Einwanderer geboren, wuchs unter einer fordernden Mutter auf, die früh erkannte, dass die Stimme der Tochter etwas Besonderes war – und ab da keinen Zweifel daran ließ, dass daraus etwas werden musste. Mit dreizehn zog die Familie nach Athen, wo Callas am Konservatorium bei Elvira de Hidalgo eine Ausbildung begann, die zur Grundlage ihres gesamten späteren Könnens wurde.</p>
          <p class="vb-intro">Wie Enrico Caruso (SE3w2, siehe <a href="javascript:void(0)" data-route="beruehmte-enrico-caruso">Porträt</a>) – ebenfalls ein selbsterhaltender Dreier mit Zweierflügel – war auch bei Callas keine Rede von müheloser Begabung: Was später wie natürliche Größe wirkte, war das Ergebnis jahrelanger, oft schmerzhafter technischer Arbeit an einer Stimme, die erst durch Disziplin zu dem wurde, was die Musikwelt revolutionierte.</p>
        </blockquote>

        <h2 class="vb-section">2. Kontratyp: Können statt Glänzen – eine Figur, die sich selbst neu baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte die selbsterhaltende Drei den <strong>Kontratyp</strong> der Drei: Statt auf Selbstinszenierung zu setzen, zeigt sich bei ihr bodenständige, oft schmerzhaft ehrliche Arbeit an der eigenen Substanz. Bei Callas zeigt sich dieses Muster in einer der bekanntesten Selbsttransformationen der Operngeschichte: Zwischen 1953 und 1954 verlor sie durch diszipliniertes, radikales Durchhalten etwa 36 Kilogramm – nicht als Marketingmaßnahme, sondern aus dem inneren Anspruch, ihre Bühnenfigur so vollständig zu beherrschen wie ihre Technik.</p>
          <p class="vb-intro">Ihr eigenes Verständnis von Erfolg war unmissverständlich handwerklich: Sie studierte das Libretto so gründlich wie die Partitur, arbeitete Rollen bis in kleinste dramatische Details aus, statt sich auf reine Stimmschönheit zu verlassen. Genau das ist die reife Kontratyp-Drei: nicht die glänzendste Naturstimme ihrer Zeit besitzen, sondern durch Arbeit an Technik und Interpretation zur prägendsten Sängerin des Jahrhunderts werden.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Hingabe an Lehrerin, Rolle und Publikum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel (w2)</strong> bringt der selbsterhaltenden Drei ein tiefes Bedürfnis nach persönlicher Verbindung – nicht nach öffentlicher Bewunderung, sondern nach echter Nähe zu wenigen zentralen Menschen und zur Rolle selbst. Callas' Bindung an ihre Lehrerin Elvira de Hidalgo blieb zeitlebens prägend; die dort erlernte Bel-canto-Technik trug sie durch ihre gesamte Karriere. Auch ihre spätere, öffentlich vielbeachtete Beziehung zu Aristoteles Onassis zeigt dasselbe Muster: das Bedürfnis der Drei nach echter, exklusiver Zuwendung, nicht nach diffuser Bewunderung einer Masse.</p>
          <p class="vb-intro">Diese Hingabe zeigte sich auch in ihrer Arbeit selbst: Kolleginnen und Regisseure beschrieben, wie vollständig sie sich in jede Partie hineingab, bis Sängerin und Rolle kaum mehr zu trennen waren – eine fast persönliche Beziehung zu den Figuren, die sie verkörperte, nicht bloße technische Interpretation.</p>
        </blockquote>

        <h2 class="vb-section">4. Die tatsächliche Leistung: Die Bel-canto-Renaissance</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Callas gilt als die einflussreichste Sopranistin des 20. Jahrhunderts, weil sie eine seit rund 75 Jahren vernachlässigte Gesangstradition wiederbelebte: den Bel canto der Frühromantik. Werke von Bellini (<em>Norma</em>, <em>La sonnambula</em>), Donizetti (<em>Anna Bolena</em>, <em>Lucia di Lammermoor</em>) und Rossini, die aus dem gängigen Repertoire fast verschwunden waren, brachte sie mit einer Kombination aus technischer Beweglichkeit, enormem Stimmumfang und schauspielerischer Intensität zurück auf die großen Bühnen der Welt – und veränderte damit dauerhaft, was von einer Operndiva erwartet wurde: nicht mehr allein schöner Klang, sondern die vollständige Verschmelzung von Gesang und dramatischer Wahrhaftigkeit.</p>
          <p class="vb-intro">Diese Leistung liegt jenseits jeder Enneagramm-Deutung – reine musikalische und darstellerische Pionierarbeit. Was der Subtyp-Rahmen zusätzlich sichtbar macht, ist, wie sehr diese Leistung aus beharrlicher technischer Arbeit entstand und nicht aus müheloser Begabung, wie es der öffentliche Mythos oft nahelegte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht zeigt sich bei Callas die SE3w2 als eine Künstlerin, die reale Substanz über bloßen Glanz stellte – die eigene Stimme, den eigenen Körper, die eigene Interpretation Jahr für Jahr diszipliniert weiterentwickelte, statt sich auf natürliche Begabung zu verlassen.</p>
          <p class="vb-intro">Der Schatten der Drei ist <strong>Eitelkeit</strong> – nicht Selbstverliebtheit, sondern das Verwechseln des eigenen Werts mit der geleisteten Vorstellung. Die mediale Zuspitzung zur unnahbaren ›Diva‹ – Rivalität mit Renata Tebaldi, öffentlich ausgetragene Konflikte – stand oft im scharfen Gegensatz zu einer Frau, die privat unter enormem Druck stand, die eigene technische Perfektion aufrechtzuerhalten. Der radikale Gewichtsverlust, der ihrer Karriere zunächst Auftrieb gab, schwächte nach Einschätzung vieler Stimmexperten später die körperliche Basis ihrer Stimme – Kontrolle über das äußere Bild, erkauft mit der Substanz, die sie eigentlich schützen wollte.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Beweisen zum echten Wert</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Drei führt von der Frage <em>Bin ich nur wertvoll, wenn ich glänzend bestehe?</em> zur Erkenntnis <em>Mein Wert liegt nicht in der Vorstellung, sondern in mir selbst.</em> Callas' Karriere liest sich als eindrucksvolle, aber auch tragische Annäherung an diese Frage: eine Künstlerin, die durch reine Arbeit eine ganze Operntradition zurückholte, deren Stimme aber genau an dem Punkt zu leiden begann, an dem äußere Kontrolle wichtiger wurde als innere Substanz.</p>
          <p class="vb-intro">Dass sie bis zuletzt an der eigenen Perfektion festhielt, selbst als die Stimme sie nicht mehr vollständig trug, zeigt die ungelöste Seite dieses Musters. Ihr bleibendes Vermächtnis – eine ganze Generation von Sängerinnen und Sängern, die den Bel canto ihretwegen wiederentdeckten – ist zugleich der Beweis, dass die harte, disziplinierte Arbeit des Waschbären am Ende trägt, auch wenn der Weg dorthin sie selbst erschöpfte.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se3", label:"SE3 – Der Waschbär: Subtyp-Profil"},
        {route:"beruehmte-enrico-caruso", label:"Porträt: Enrico Caruso (SE3w2)"},
      ])}
    </div>
  `);
}

export function henryShukmanPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-henry-shukman-portrait.jpg" alt="Henry Shukman – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Henry Shukman</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Sozialer Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Zen-Lehrer, Dichter und Schriftsteller, geb. 1962 in Oxford &ndash; Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber, der erst suchte, bevor er baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier der sozialen Sieben: wach, in ständiger Bewegung – jedoch nie ziellos, sondern immer auf ein Bauwerk hin, das größer ist als er selbst. Henry Shukman wurde 1962 in Oxford als Sohn zweier Universitätsprofessoren geboren, wuchs jedoch mit chronischem Ekzem, Angst und Depression auf, die ihn bereits in der Kindheit begleiteten. Mit neunzehn Jahren erlebte er ein spontanes spirituelles Erwachen – ein Ereignis, das er selbst über Jahrzehnte hinweg erst allmählich zu verstehen und zu integrieren lernte.</p>
          <p class="vb-intro">Bevor er zum Zen-Lehrer wurde, arbeitete Shukman als Posaunist, als Fischtrawler-Matrose und als Reiseschriftsteller – drei völlig unterschiedliche Lebenswege, die er nacheinander mit vollem Einsatz verfolgte. Sein erstes Buch, ›Sons of the Moon‹ (1989), beschrieb eine Reise durch die entlegensten Regionen Boliviens; es folgten ›Travels with my Trombone‹ über ein Jahr als Calypso- und Salsa-Musiker in der Karibik und Kolumbien sowie ›Savage Pilgrims‹, eine Spurensuche nach D. H. Lawrence in New Mexico – demselben Bundesstaat, in dem Shukman Jahrzehnte später sein geistiges Zuhause finden sollte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Vielfalt im Dienst einer größeren Sache</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sieben (SO7)</strong> ist der Kontratyp der Sieben – anders als die selbsterhaltende oder sexuelle Sieben lebt sie ihre Maßlosigkeit nicht als persönlichen Genuss, sondern verwandelt sie in Pflichterfüllung und Dienst an einem größeren Ganzen. Bei Shukman zeigt sich das in einem geradezu lehrbuchhaften Übergang: Aus der ruhelosen Suche der frühen Lebensjahre – Musik, Seefahrt, Reiseschriftstellerei, Romane, Gedichte – wurde über Jahrzehnte hinweg eine einzige, disziplinierte Ausbildung in einer traditionellen Zen-Linie, die 2010 in seiner offiziellen Ernennung zum Lehrer durch Yamada Roshi gipfelte.</p>
          <p class="vb-intro">2012 übernahm er die geistliche Leitung des Mountain Cloud Zen Center in Santa Fe und baute es über elf Jahre hinweg zu einem festen spirituellen Zentrum aus. Parallel dazu gründete er ›The Way‹, eine Meditations-App, die traditionelle Zen-Praxis einem globalen, digitalen Publikum zugänglich macht – dieselbe Vielfalt an Ausdrucksformen wie in seiner Reiseschriftsteller-Zeit, nun jedoch konsequent auf ein einziges Ziel ausgerichtet: anderen Menschen einen Weg zur eigenen Heilung zu eröffnen.</p>
        </blockquote>

        <h2 class="vb-section">3. Handwerkliche Substanz: Preisgekrönte Lyrik vor der spirituellen Laufbahn</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Lange bevor Shukman als Zen-Lehrer bekannt wurde, hatte er sich bereits als ernstzunehmender Schriftsteller etabliert: Sein Lyrikdebüt ›In Dr No's Garden‹ (1995) gewann den Jerwood Aldeburgh First Collection Prize, eine der bedeutendsten britischen Auszeichnungen für lyrische Debütbände. Seine Belletristik wurde mit einem Arts-Council-Preis ausgezeichnet und für den renommierten O.-Henry-Award nominiert – keine Nebentätigkeit eines spirituellen Lehrers, sondern eine eigenständige literarische Laufbahn mit fachlicher Anerkennung.</p>
          <p class="vb-intro">Diese Verbindung aus dichterischer Präzision und spiritueller Praxis ist kein Zufall: Shukmans frühe Liebe zur chinesischen Zen-Dichtung war einer der Wege, die ihn überhaupt erst zur Meditation führten. Sein 2019 erschienenes Memoir ›One Blade of Grass‹ verbindet beide Stränge explizit – literarisches Handwerk im Dienst der Beschreibung eines inneren Heilungswegs.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Sechserflügel: Wachsamkeit und Bindung an eine überlieferte Linie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> bringt in die begeisterte SO7-Energie ein Element von Loyalität und Vorsicht gegenüber vorschneller Selbstermächtigung. Statt sein spontanes Erwachen mit neunzehn Jahren sofort zur eigenen Lehrautorität zu erklären, unterstellte sich Shukman über Jahrzehnte der Anleitung mehrerer anerkannter Lehrer – Roshis John Gaynor, Joan Rieck, Ruben Habito und schließlich Yamada Roshi, internationaler Abt der Sanbo-Zen-Linie – bevor er selbst 2010 offiziell autorisiert wurde.</p>
          <p class="vb-intro">Diese Geduld, sich einer über Generationen überlieferten Struktur unterzuordnen, statt die eigene, unmittelbare Erfahrung sofort zu verkünden, zeigt die w6-Wachsamkeit in Reinform: Vertrauen wird nicht der eigenen Intuition allein, sondern einer geprüften, verlässlichen Linie entgegengebracht.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Sieben mit Sechserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO7w6 zeigt sich darin, eine frühe, überwältigende Erfahrung nicht impulsiv zu vermarkten, sondern sie über Jahrzehnte in eine belastbare, für viele Menschen zugängliche Lehre zu übersetzen – von der Einzelerfahrung zur skalierbaren App mit globaler Reichweite.</p>
          <p class="vb-intro">Die Leidenschaft der Sieben ist <strong>Maßlosigkeit</strong> – bei der sozialen Sieben äußert sie sich als rastloses Sammeln neuer Rollen und Ausdrucksformen. Shukmans Weg vom Posaunisten über den Fischtrawler-Matrosen und Reiseschriftsteller bis zum Zen-Lehrer ließe sich auch als eine Flucht vor der eigenen, kindlich erworbenen Angst und Depression lesen – ein rastloses Ausprobieren neuer Identitäten, bis eine davon tief genug trug, um die zugrunde liegende Not tatsächlich zu heilen, statt sie nur zu überdecken.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Von der Flucht zur Lehre</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Henry Shukman verwandelte eine Kindheit voller körperlicher und seelischer Not sowie ein frühes, überwältigendes spirituelles Erlebnis über Jahrzehnte in eine strukturierte, überprüfbare Lehre – zugänglich sowohl im traditionellen Retreat-Format als auch über eine moderne App für ein digitales Millionenpublikum.</p>
          <p class="vb-intro">Ein aufschlussreicher Vergleich ist <a href="javascript:void(0)" data-route="beruehmte-franz-von-assisi">Franz von Assisi</a> (SO7w6) – auch bei ihm verwandelte sich eine frühe existenzielle Krise über Jahre in eine dauerhafte, weithin wirksame spirituelle Institution. Mehr dazu im <a href="javascript:void(0)" data-route="beruehmte-franz-von-assisi">Porträt zu Franz von Assisi</a>.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

      </div>
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so7", label:"SO7 – Der Biber: Subtyp-Profil"},
        {route:"lebensmusterkompass/so7", label:"Lebensmusterkompass: SO7 – Biber"},
        {route:"beruehmte-franz-von-assisi", label:"Porträt: Franz von Assisi (SO7w6)"},
        {route:"beruehmte-sigourney-weaver", label:"Porträt: Sigourney Weaver (SO7w6)"},
        {route:"beruehmte-billy-bob-thornton", label:"Porträt: Billy Bob Thornton (SO7w6)"},
      ])}
    </div>
  `);
}

export function madsMikkelsenPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mads-mikkelsen-portrait.jpg" alt="Mads Mikkelsen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mads Mikkelsen</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexueller Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">geb. 1965 – dänischer Schauspieler, Hannibal Lecter, Le Chiffre, Cannes-Bester-Darsteller – Tierentsprechung: Faultier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Faultier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Faultier</strong> ist das Tier des sexuellen Typs 9 – ein Tier, das sich mit dem einen Ast, auf dem es sitzt, vollständig verbindet, statt ständig nach einem besseren zu suchen. Mads Mikkelsen, geboren 1965 im Kopenhagener Arbeiterviertel Østerbro als Sohn eines Bankangestellten und einer Apothekenangestellten, verbrachte fast ein Jahrzehnt nicht als Schauspieler, sondern als Turner und Tänzer, bevor er überhaupt vor eine Kamera trat. Diese Jahre disziplinierter körperlicher Ausbildung prägen bis heute jede seiner Rollen.</p>
          <p class="vb-intro">Erst über die Tanzausbildung an der dänischen Nationalen Schule für darstellende Kunst fand er zur Schauspielerei – kein früher, lauter Ruf nach der Bühne, sondern ein allmähliches Hineinwachsen in ein Medium, in dem sich seine körperliche Disziplin auf neue Weise ausdrücken konnte. Genau dieser ruhige, unspektakuläre Übergang ist typisch für das Faultier: Es wechselt den Ast nicht aus Ehrgeiz, sondern weil sich eine neue, stimmigere Verbindung ergibt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die eigentliche Leistung: Minimalismus als Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Mikkelsen von vielen seiner Schauspielkollegen unterscheidet, ist eine radikal ökonomische Darstellungsweise: kaum überflüssige Gesten, kaum demonstrative Mimik, dafür eine körperliche Präzision, die direkt aus seiner Tänzer- und Turnervergangenheit stammt. Als Le Chiffre in „Casino Royale" (2006) genügte ihm ein blutender Tränenkanal statt großer Wutausbrüche, um Bedrohlichkeit zu erzeugen; als Hannibal Lecter in der gleichnamigen NBC-Serie (2013–2015) baute er Grauen fast ausschließlich über Stille, Tempo und Blickführung auf, nicht über Lautstärke.</p>
          <p class="vb-intro">Für „Die Jagd" (Jagten, 2012), in dem er einen zu Unrecht der Pädophilie verdächtigten Kindergärtner spielte, erhielt er in Cannes die Auszeichnung als bester Darsteller – eine Rolle, die fast ausschließlich über unterdrückte, nach innen gerichtete Verzweiflung funktioniert, nicht über große Ausbrüche. Diese Fähigkeit, mit minimalen äußeren Mitteln maximale innere Intensität zu vermitteln, ist keine Marotte, sondern über Jahrzehnte trainiertes Handwerk – körperliche Disziplin, die zu schauspielerischer Präzision wurde.</p>
        </blockquote>

        <h2 class="vb-section">3. Die sexuelle Neun: Magnetismus statt Lautstärke</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Neun (SX9)</strong> ist nach Naranjo der Subtyp der <em>Vereinigung</em>: die Sehnsucht, sich nicht oberflächlich zu verteilen, sondern in der einen Begegnung, der einen Verbindung vollständig aufzugehen. Bei Mikkelsen zeigt sich das in einer Bildschirmpräsenz, die Kritiker immer wieder als „hypnotisch" oder „magnetisch" beschreiben, obwohl er kaum je die Stimme erhebt – eine ruhige Intensität, die das Publikum näher heranzieht, statt es mit Lautstärke zu überwältigen.</p>
          <p class="vb-intro">Privat lebt er seit 1987 mit der Choreografin Hanne Jacobsen zusammen, mit der er zwei Kinder hat – eine seit Jahrzehnten stabile, kaum öffentlich thematisierte Verbindung, die genau dem SX9-Muster entspricht: wenige, dafür sehr tief gehende Bindungen statt eines breiten, oberflächlichen Beziehungsnetzes.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Einserflügel: Disziplin als Fundament</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> zeigt sich bei Mikkelsen in der fast asketischen Disziplin, mit der er seinen Körper als Instrument behandelt – Jahre als Leistungsturner und Tänzer, bevor überhaupt eine Schauspielkarriere begann, und ein bis heute kontrollierter, präziser Bewegungsapparat, der ihm ungewöhnlich physische Rollen erlaubt, vom Wikinger-Krieger bis zum stuntkoordinationslastigen Actionfilm.</p>
          <p class="vb-intro">Auch sein öffentliches Auftreten trägt diese leise, unumstößliche Ordnung: Mikkelsen gilt als auffällig zurückhaltend gegenüber dem üblichen Hollywood-Rummel, lebt weiterhin in Dänemark statt in Los Angeles und hält sein Privatleben konsequent aus der Öffentlichkeit heraus. Kein lautes Prinzip, sondern eine selbst gesetzte, ruhig durchgehaltene Grenze – genau die Einser-Note, die dem Faultier eine feste innere Struktur gibt, ohne die reine Entspannung der Neun zu verlieren.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Neun</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX9w1 zeigt sich in Mikkelsens Fähigkeit, aus radikaler Zurückhaltung eine eigene, unverwechselbare schauspielerische Sprache zu machen – in einer Branche, die oft auf große Gesten setzt, wurde gerade seine Stille zum Markenzeichen, von Hannibal Lecter bis zum berühmten, fast tänzerischen Schlusstanz in „Der Rausch" (Druk, 2020), der seine ursprüngliche Tanzausbildung noch einmal öffentlich sichtbar machte.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Kehrseite dieser Zurückhaltung: Wer sich so konsequent aus dem öffentlichen Rummel heraushält, läuft Gefahr, echte Nähe erst dann zuzulassen, wenn die eigene, sorgfältig gehütete Ordnung dadurch nicht gefährdet wird. Die gleiche Disziplin, die seine Rollen so kraftvoll macht, kann im Privaten auch als Distanz erlebt werden – ein Preis, den das Faultier für seine vollständige Verbindung mit dem einen, ausgewählten Ast zahlt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx9", label:"SX9 – Das Faultier: Subtyp-Profil"},
        {route:"beruehmte-keanu-reeves", label:"Portrait: Keanu Reeves (SX9w1)"},
        {route:"beruehmte-kris-marshall", label:"Porträt: Kris Marshall (SX9w1)"},
        {route:"beruehmte-sophie-marceau", label:"Portrait: Sophie Marceau (SX9w1)"},
      ])}
    </div>
  `);
}
