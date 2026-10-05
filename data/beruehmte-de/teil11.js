import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft, animalResearcherMatchBlock } from "../../bundle.js";

export function cgJungPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cg-jung-portrait.jpg" alt="Carl Gustav Jung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Carl Gustav Jung</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Schweizer Psychiater, 1875–1961 – Begründer der Analytischen Psychologie – Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus, der das Unbewusste kartierte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Carl Gustav Jung wurde 1875 in Kesswil am Bodensee als Sohn eines evangelisch-reformierten Pfarrers geboren. Bereits als Kind zeigte er eine ausgeprägte Innerlichkeit und ein starkes Interesse an Träumen, Mythen und religiösen Fragen. Von 1895 bis 1900 studierte er Medizin an der Universität Basel, mit besonderem Interesse an Psychiatrie – einem Fachgebiet, das zu dieser Zeit innerhalb der Medizin noch wenig angesehen war und das die meisten seiner Kommilitonen mieden. Direkt nach dem Studienabschluss trat er 1900 eine Stelle als Assistenzarzt am Burghölzli in Zürich unter Eugen Bleuler an und entwickelte in den folgenden Jahren gemeinsam mit Franz Riklin den Wortassoziationstest, der ihm erste empirische Belege für unbewusste seelische Inhalte lieferte.</p>
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier der sozialen Fünf – hochintelligent, ein Meister der Problemlösung, der sein komplexes Denken so formt, dass andere daran teilhaben können. Jung baute über Jahrzehnte ein enzyklopädisches System aus Mythologie, Alchemie, Religionsgeschichte und Psychiatrie auf – nicht um es für sich zu behalten, sondern um es einer wachsenden Gemeinschaft von Schülern und Patienten zugänglich zu machen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Fünf: Wissen als Vermächtnis für die Gemeinschaft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Fünf (SO5)</strong> sucht Sicherheit nicht im reinen Rückzug, sondern darin, durch Wissen für eine größere Gemeinschaft unentbehrlich zu werden. Naranjo nannte diesen Subtyp <em>Totem</em>: Das Verstehen wird wie ein Erbe behandelt, das erst durch Weitergabe seinen vollen Wert entfaltet. Bei Jung zeigt sich das in seinem gesamten Lebenswerk – Archetypen, kollektives Unbewusstes, Individuation –, das er nicht als privates Gedankengebäude behandelte, sondern in Vorträgen, Seminaren und den jährlichen Eranos-Tagungen in Ascona kontinuierlich an einen wachsenden Kreis von Interessierten weitergab.</p>
          <p class="vb-intro">1916 gründete er gemeinsam mit seiner Frau Emma den Psychologischen Club Zürich, 1948 das C.G.-Jung-Institut Zürich – beides bewusst als Institutionen angelegt, die seine Lehre über seinen eigenen Tod hinaus tragen sollten. Wissen, das im engen Kreis bleibt, war für die SO5 nie das Ziel; die Gemeinschaft der Lernenden war der eigentliche Zweck.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Vom Kronprinzen zum eigenen System</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel (w6)</strong> gibt der sozialen Fünf ein tiefes Bedürfnis nach verlässlicher Struktur und eine ausgeprägte Loyalitäts-Autoritäts-Dynamik. Bei Jung zeigt sich das in seiner Beziehung zu Sigmund Freud besonders deutlich: Jung selbst schrieb an Freud, er wolle dessen Freundschaft „nicht als eine unter Gleichen, sondern als eine zwischen Vater und Sohn" erleben – Freud wiederum bezeichnete ihn als seinen „Kronprinzen" und designierten Nachfolger. Diese Anlehnung an eine schützende Autorität ist die typische Sechser-Sicherheitssuche.</p>
          <p class="vb-intro">Der Bruch von 1913, von Historikern als „symbolischer Vatermord" beschrieben, zeigt die andere Seite desselben Musters: die kontraphobische Rebellion gegen genau die Autorität, der zuvor vertraut wurde, sobald sich diese als nicht mehr tragfähig erweist. Was danach folgte, war typisch für den Sechserflügel – kein loser Ausstieg, sondern der systematische Aufbau eines eigenen, institutionell abgesicherten Gegenentwurfs mit eigener Ausbildung, eigenem Club, eigener Zeitschrift.</p>
        </blockquote>

        <h2 class="vb-section">4. Die tatsächliche Leistung: Der Wortassoziationstest und der empirische Beweis des Unbewussten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jungs konkreter wissenschaftlicher Beitrag ist oft weniger bekannt als seine späteren, spekulativeren Theorien zu Archetypen und Synchronizität: der am Burghölzli entwickelte Wortassoziationstest. Versuchspersonen bekamen Reizwörter vorgelegt, Jung maß Reaktionszeiten und – gemeinsam mit Frederick Peterson – über ein Galvanometer auch physiologische Reaktionen der Haut. Auffällige Verzögerungen oder körperliche Reaktionen bei bestimmten Wörtern markierten das, was Jung „Komplexe" nannte: autonome, emotional aufgeladene Gedanken- und Erinnerungscluster, die unbewusst wirken.</p>
          <p class="vb-intro">Das war 1907 die erste wiederholbare, messbare empirische Bestätigung dafür, dass unbewusste psychische Inhalte tatsächlich existieren und sich objektiv nachweisen lassen – nicht durch Hypnose oder philosophische Spekulation, sondern durch reproduzierbare Daten. Diese Methode lieferte zugleich die technische Grundlage, auf der später der Polygraph (Lügendetektor) aufbaute, und begründete Jungs Ruf lange bevor er sich der Mythologie und Alchemie zuwandte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Fünf mit Sechserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w6 zeigt sich in Jungs Fähigkeit, aus radikal disparaten Wissensfeldern – Psychiatrie, Mythologie, Alchemie, östliche Religionen – ein kohärentes, lehrbares System zu bauen, das bis heute Ausbildungsinstitute auf der ganzen Welt trägt. Seine „Konfrontation mit dem Unbewussten" (1913–1918), dokumentiert im postum veröffentlichten ›Roten Buch‹, verwandelte er nicht in privates Leiden allein, sondern in die konzeptuelle Grundlage seines gesamten späteren Werks.</p>
          <p class="vb-intro">Der Schatten zeigt sich in seinem Umgang mit engen Beziehungen: Neben seiner Ehe mit Emma Jung, mit der er fünf Kinder hatte, unterhielt Jung jahrzehntelang eine offen geduldete Beziehung zu seiner ehemaligen Patientin und späteren Analytikerin Toni Wolff – ein Arrangement, das seine Autorität als Begründer der eigenen Schule offenbar auch auf das Private ausdehnte. Auch seine frühere, in ihrer Grenzüberschreitung bis heute diskutierte Beziehung zu Sabina Spielrein, ebenfalls zunächst seine Patientin, zeigt dieselbe Tendenz: Nähe wurde innerhalb des selbst geschaffenen Systems verhandelt, nicht außerhalb davon gesucht.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg: Vom Wissenssystem zur gelebten Ganzheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Fünf führt von der Überzeugung <em>Ich habe nicht genug, um zu geben</em> zur Erkenntnis <em>Was ich bin, reicht – auch ohne vollständiges Verstehen.</em> Für die SO5w6 bedeutet das, das eigene System nicht länger als einzige Quelle der Sicherheit zu behandeln, sondern sich auch dem auszusetzen, was sich nicht restlos in Theorie fassen lässt.</p>
          <p class="vb-intro">Bemerkenswert ist, dass Jungs eigenes Spätwerk genau diese Bewegung vollzieht: Sein Konzept der Individuation beschreibt ausdrücklich keinen abgeschlossenen Lehrsatz, sondern einen lebenslangen, nie vollständig systematisierbaren Prozess der Ganzwerdung. Ein aufschlussreicher Vergleich innerhalb desselben Subtyps ist <a href="javascript:void(0)" data-route="beruehmte-stephen-hawking">Stephen Hawking</a> (SO5w6): Auch bei ihm zeigt sich dieselbe Verbindung aus enzyklopädischem Systembau und dem verlässlichen, institutionell abgesicherten Rahmen, in dem dieses Wissen an eine breite Öffentlichkeit weitergegeben wurde. Mehr dazu im <a href="javascript:void(0)" data-route="beruehmte-stephen-hawking">Porträt zu Stephen Hawking</a>.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-stephen-hawking", label:"Porträt: Stephen Hawking (SO5w6)"},
        {route:"beruehmte-georg-wilhelm-friedrich-hegel", label:"Porträt: Georg Wilhelm Friedrich Hegel (SO5w6)"},
        {route:"beruehmte-isaac-newton", label:"Porträt: Isaac Newton (SO5w6)"},
      ])}
    </div>
  `);
}

export function alexanderBommesPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alexander-bommes-portrait.jpg" alt="Alexander Bommes – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alexander Bommes</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Sozialer Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Deutscher Fernsehmoderator &amp; ehem. Handball-Profi, geb. 1976 in Kiel &ndash; Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier des sozialen Typs 7 &ndash; er baut nicht für sich allein, sondern schafft Strukturen und Formate, die einem breiten Publikum dienen, und ist dabei selten mit nur einem Projekt zufrieden. Alexander Bommes moderiert seit Jahren gleich mehrere feste Fernsehformate parallel – ein rastloses Nebeneinander, das genau diese Bibernatur widerspiegelt.</p>
          <p class="vb-intro">Alexander Bommes wurde am 21. Januar 1976 in Kiel geboren und spielte von Jugend an Handball, zunächst in der Zweitligamannschaft seines Heimatvereins, ab 1999 in der Handball-Bundesliga für TSV Bayer Dormagen und ab 2001 für den VfL Gummersbach. Parallel zur aktiven Sportlerkarriere begann er 1997 ein Jurastudium in Kiel – zwei anspruchsvolle Wege gleichzeitig zu verfolgen, war für ihn von Beginn an kein Widerspruch, sondern Normalzustand.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Vom Profisport zum Dienst am Publikum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sieben (SO7)</strong> nennt Naranjo <em>Sacrifice</em>: Sie opfert die eigene, unmittelbare Freude zugunsten einer größeren Sache. Ende 2007 beendete Bommes seine Handballkarriere und entschied sich, statt der juristischen Laufbahn nach seinem ersten Staatsexamen ein Journalismus-Volontariat beim NDR zu beginnen – ein bewusster Bruch mit dem naheliegenden, sicheren Weg zugunsten einer neuen Aufgabe im Dienst der Öffentlichkeit.</p>
          <p class="vb-intro">Von Ende 2007 bis 2015 führte er durch das <em>Hamburger Journal</em> und arbeitete als Sportreporter, bevor er 2011 zum festen Moderationsteam der ARD-<em>Sportschau am Sonntag</em> hinzukam. Der Biber baut nicht für den eigenen Ruhm, sondern weil er glaubt, dass ein verlässliches, gut aufbereitetes Programm einem großen Publikum dient – eine über Jahrzehnte konstante Fürsorge für die Zuschauer, die ihn Woche für Woche einschalten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Sicherheit vor dem großen Sprung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel</strong> gibt der sozialen Sieben eine Qualität, die im Kontrast zu ihrer Vielseitigkeit steht: Vorsicht, Loyalität gegenüber Institutionen, das Bedürfnis nach einem verlässlichen Rahmen. Bommes vollzog den Wechsel vom Handball zum Journalismus nicht abrupt, sondern erst nach dem Abschluss seines ersten juristischen Staatsexamens – ein abgesicherter Schritt, kein Sprung ins Ungewisse.</p>
          <p class="vb-intro">Noch deutlicher zeigt sich dieser Flügel in seiner langjährigen Bindung an denselben Sender: Vom Volontariat beim NDR über das Hamburger Journal bis zur ARD-Sportschau und der seit 2012 von ihm geleiteten Quizshow <em>Gefragt – Gejagt</em> blieb Bommes über fast zwei Jahrzehnte demselben institutionellen Umfeld treu, statt zwischen Sendern und Formaten zu springen. Der Biber baut lieber innerhalb eines bewährten, tragfähigen Ufers, als das sichere Terrain vorschnell zu verlassen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Maßlosigkeit als Formatvielfalt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben heißt <strong>Völlerei</strong> oder <strong>Maßlosigkeit</strong>: der unstillbare Appetit auf immer neue Möglichkeiten. Bei Bommes zeigt sich das nicht in Sprunghaftigkeit, sondern in der Fähigkeit, über Jahre hinweg mehrere anspruchsvolle Formate gleichzeitig zu bespielen – Live-Sportmoderation, tägliches Nachrichtenjournal und eine wöchentliche Quizshow, jedes mit eigenen Anforderungen an Tempo, Ton und Vorbereitung.</p>
          <p class="vb-intro">Im Mai 2025 gab Bommes bekannt, seine Tätigkeit als Live-Sportmoderator bei der ARD-Sportschau zu beenden, um sich neuen Themen zu widmen – ein Wechsel, der weniger Rückzug als Fortsetzung derselben Maßlosigkeit ist: Auch nach fast zwei Jahrzehnten in einem festen Format bleibt der Appetit auf neue Aufgaben ungebrochen, solange er innerhalb desselben vertrauten institutionellen Rahmens bleibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Vom Bundesliga-Handballer zum verlässlichen Gesicht der ARD</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von der Handball-Bundesliga über das Jurastudium und das Volontariat beim NDR bis zu fast zwei Jahrzehnten als festes Gesicht der ARD zieht sich ein roter Faden durch Bommes' Werdegang: Wechsel, die immer erst nach einer soliden Grundlage vollzogen wurden, nie aus dem Affekt.</p>
          <p class="vb-intro">Der Biber baut kontinuierlich, ohne innezuhalten, aber immer auf festem Grund. Alexander Bommes' Weg vom Profisportler über den Journalisten bis zum Quizshow-Moderator zeigt diesen Antrieb in seiner konstruktivsten Form: Vielseitigkeit, die sich nie von der Verlässlichkeit eines vertrauten institutionellen Rahmens löst.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so7", label:"SO7 – Der Biber: Subtyp-Profil"},
        {route:"beruehmte-jules-verne", label:"Portrait: Jules Verne (SO7w6)"},
        {route:"beruehmte-frank-rosell", label:"Portrait: Prof. Dr. Frank Rosell (SO7w6)"},
        {route:"beruehmte-carolin-kebekus", label:"Portrait: Carolin Kebekus (SO7w6)"},
        {route:"beruehmte-gregor-gysi", label:"Portrait: Dr. Gregor Gysi (SO7w6)"},
      ])}
    </div>
  `);
}

export function aristotelesPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-aristoteles-portrait.jpg" alt="Aristoteles" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Aristoteles</p>
        <p class="krim-portrait-typ">SE1w9 \u00b7 Selbsterhaltender Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Griechischer Philosoph, 384\u2013322 v. Chr. \u2013 Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler \u00fcber der Akademie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> fliegt allein, hoch genug, um das ganze Feld zu \u00fcberblicken, bevor er sich auf einen einzelnen Punkt konzentriert. Er sucht keine Best\u00e4tigung im Get\u00fcmmel \u2013 er sucht \u00dcbersicht, Ordnung, den klaren Blick auf das Ganze. Kein Denker der Antike verk\u00f6rpert dieses Prinzip so vollst\u00e4ndig wie Aristoteles.</p>
          <p class="vb-intro">Der griechische Philosoph Aristoteles, geboren 384 v. Chr. in Stagira, kam mit siebzehn Jahren an Platons Akademie in Athen und blieb dort fast zwanzig Jahre \u2013 erst als Sch\u00fcler, dann als eigenst\u00e4ndiger Denker. Sp\u00e4ter wurde er Lehrer Alexanders des Gro\u00dfen und gr\u00fcndete schlie\u00dflich seine eigene Schule, das Lykeion. Sein Werk umfasst nahezu jedes Wissensgebiet seiner Zeit: Logik, Physik, Biologie, Ethik, Politik, Poetik, Metaphysik \u2013 ein Lebenswerk von einer Systematik, die bis in die Gegenwart die westliche Wissenschaft pr\u00e4gt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Die goldene Mitte als Lebensform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> tr\u00e4gt ihre Ma\u00dfst\u00e4be nicht nach au\u00dfen, um andere zu belehren \u2013 sie richtet sie zuerst an sich selbst, mit einer stillen, oft unsichtbaren Strenge. Naranjo nannte diesen Subtyp <em>Worry</em> \u2013 Besorgnis: die st\u00e4ndige, leise Frage, ob man es wirklich richtig macht. Bei Aristoteles zeigt sich das in einem der einflussreichsten ethischen Konzepte der Philosophiegeschichte: der <strong>goldenen Mitte</strong> (Mesotes), dem Prinzip, dass jede Tugend zwischen zwei Extremen liegt \u2013 Mut zwischen Feigheit und Tollk\u00fchnheit, Gro\u00dfz\u00fcgigkeit zwischen Geiz und Verschwendung.</p>
          <p class="vb-intro">Das ist reine SE1-Signatur: kein moralischer Kreuzzug gegen die Welt, sondern die stille, kontinuierliche Selbstkorrektur, die richtige Balance im eigenen Handeln zu finden und zu halten. Anders als sein Lehrer Platon, der nach ewigen, abstrakten Ideen jenseits der sichtbaren Welt suchte, verankerte Aristoteles seine Ethik in der gelebten Praxis: Tugend entsteht nicht durch Einsicht allein, sondern durch <em>Gew\u00f6hnung</em> \u2013 durch das beharrliche, t\u00e4gliche Ein\u00fcben des Richtigen, bis es zur zweiten Natur wird.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Das ganze Feld im Blick</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> f\u00fcgt der Einser-Energie eine seltene Weite hinzu: die F\u00e4higkeit, nicht nur ein Detail perfekt zu ordnen, sondern ein ganzes Feld zugleich zu \u00fcberblicken und zu integrieren. Genau das unterscheidet Aristoteles von einem blo\u00dfen Systematiker \u2013 er wollte nicht nur einzelne Fragen kl\u00e4ren, sondern die gesamte bekannte Welt in ein zusammenh\u00e4ngendes Ordnungssystem bringen.</p>
          <p class="vb-intro">Seine Methode war dabei erstaunlich undogmatisch f\u00fcr einen Einser-Subtyp: Er sezierte Tiere, beobachtete Naturph\u00e4nomene, sammelte politische Verfassungen griechischer Stadtstaaten \u2013 empirische Beobachtung statt reiner Spekulation. Diese ruhige, geduldige Weite des Neunerfl\u00fcgels erlaubte ihm, mit derselben Gelassenheit \u00fcber Logik, Biologie und Dichtkunst zu schreiben, ohne sich in einem einzigen Kampfplatz der Ideen zu verk\u00e4mpfen \u2013 ein Adler, der das ganze Territorium vermisst, bevor er es ordnet.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist die F\u00e4higkeit, <strong>Ordnung ohne H\u00e4rte</strong> zu schaffen \u2013 ein System, das die Welt nicht in starre Regeln zw\u00e4ngt, sondern die richtige Mitte f\u00fcr jede Situation sucht. Aristoteles' Logik, seine Kategorienlehre und seine Ethik sind auch heute noch Grundpfeiler des westlichen Denkens, gerade weil sie auf Ausgewogenheit statt auf Dogma zielen.</p>
          <p class="vb-intro">Der Schatten zeigte sich am Ende seines Lebens: Nach dem Tod Alexanders des Gro\u00dfen 336 v. Chr. schlug den Athenern eine Welle antimakedonischer Stimmung entgegen, die sich gegen Aristoteles als fr\u00fcheren Lehrer des Alexander richtete. Er floh aus Athen mit den Worten, er wolle nicht zulassen, dass die Stadt sich \u201eein zweites Mal an der Philosophie vers\u00fcndige" \u2013 eine Anspielung auf die Hinrichtung des Sokrates. Die selbsterhaltende Eins w\u00e4hlt in der Krise selten den offenen Widerstand: Sie zieht sich zur\u00fcck, bevor der Konflikt eskaliert, auch wenn das wie stilles Nachgeben wirkt.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der Strenge zur Gelassenheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn \u00fcber das eigene und fremde Unvollkommensein zur Gelassenheit \u2013 dem Vertrauen, dass die Welt auch ohne permanente Korrektur ihren richtigen Lauf finden kann. Aristoteles selbst beschrieb diesen Zustand in seiner Ethik als <em>Eudaimonia</em>, das gelingende, in sich ruhende Leben, das aus der \u00dcbung der Tugend \u00fcber Zeit erw\u00e4chst \u2013 nicht aus einem einzelnen perfekten Moment.</p>
          <p class="vb-intro">Sein letztes Lebensjahr in der freiwilligen Verbannung, fern von Athen, zeigt die reifste Seite der SE1w9: keine Bitterkeit, kein letzter Kampf um Rechtfertigung, sondern der ruhige R\u00fcckzug eines Adlers, der wei\u00df, dass sein Werk f\u00fcr sich selbst spricht.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Verm\u00e4chtnis: Ordnung, die Jahrtausende tr\u00e4gt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kaum ein Denker hat das abendl\u00e4ndische Wissen so grundlegend geordnet wie Aristoteles \u2013 seine Logik blieb \u00fcber zwei Jahrtausende das Fundament wissenschaftlicher Schlussfolgerungen, seine Ethik pr\u00e4gt bis auf den heutigen Tag Debatten \u00fcber das gute Leben, seine Biologie legte den Grundstein f\u00fcr die systematische Naturbeobachtung.</p>
          <p class="vb-intro">Der Adler, der die goldene Mitte suchte und das gesamte Feld des Wissens ordnete, ohne es in starre Extreme zu zwingen \u2013 das ist das bleibende Bild der selbsterhaltenden Eins mit Neunerfl\u00fcgel: kompromisslose Genauigkeit, getragen von der Weite, alles im Zusammenhang zu sehen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Adler: Subtyp-Profil"},
        {route:"beruehmte-sting", label:"Portr\xe4t: Sting (SE1w9)"},
        {route:"beruehmte-konrad-adenauer", label:"Portr\xe4t: Konrad Adenauer (SE1w9)"},
        {route:"beruehmte-alexander-der-grosse", label:"Porträt: Alexander der Große (SO2w3)"},
        {route:"beruehmte-thomas-von-aquin", label:"Porträt: Thomas von Aquin (SE9w8) – verschmolz seine Logik mit der christlichen Theologie"},
        {route:"beruhmte-philosophen", label:"Schaubild: Ber\xfchmte Philosophen im Enneagramm"},
      ])}
    </div>
  `);
}

export function borisBeckerPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="./assets/portraits/astrologie-boris-becker-foto.jpg" alt="Boris Becker" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Boris Becker</p>
        <p class="krim-portrait-typ">SX7w8 &middot; Sexueller Typ 7 mit Achterfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Tennisprofi, geb. 1967 &ndash; Dreifacher Wimbledon-Sieger, Olympiasieger &ndash; Tierentsprechung: Schimpanse</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Schimpanse</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Schimpanse</strong> ist das Tier des sexuellen Typs 7 &ndash; und Boris Becker ist ein Schimpanse in seiner reinsten, st\u00fcrmischsten Form. Der Schimpanse braucht Intensit\u00e4t: Wettkampf, Kontakt, Triumph. Er lebt im Jetzt, geht volles Risiko und liebt das Spiel mehr als den Plan. 1985, mit 17 Jahren, betrat Boris Becker den Centre Court in Wimbledon als Unbekannter &ndash; und verlie\u00df ihn als j\u00fcngsten Wimbledon-Sieger aller Zeiten. Der Schimpanse hatte zugeschlagen. Und die Welt schaute zu.</p>
          <p class="vb-intro">Was den Schimpansen ausmacht, ist nicht seine Kraft allein &ndash; es ist seine Unmittelbarkeit. Der deutsche Tennisspieler Boris Becker war nie ein taktischer Spieler. Er war ein explosiver. Sein Aufschlag war Donner, sein Netzangriff war Risiko, sein Spiel war Spektakel. Das ist der Schimpanse in voller Entfaltung: kein Kalk\u00fcl, kein Z\u00f6gern &ndash; nur der Moment, der alles ist.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Sieben: Intensit\u00e4t als Identit\u00e4t</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Sieben (SX7)</strong> sucht den vollst\u00e4ndigen Rausch &ndash; die ultimative Erfahrung, die totale Verschmelzung mit dem, was das Leben zu bieten hat. Naranjo nannte diesen Subtyp <em>Suggestibility</em>: die F\u00e4higkeit, sich selbst und andere in den Strudel eines Erlebnisses hineinzurei\u00dfen. Die SX7 ist ansteckend, magnetisch, unwiderstehlich.</p>
          <p class="vb-intro">Boris Becker hat ein Jahrzehnt lang Menschen in diese Qualit\u00e4t hineingezogen. Nicht nur als Spieler, sondern als Pers\u00f6nlichkeit: lauter als andere, offener als andere, strahlender als andere. Das ist kein Stilmittel. Das ist die SX7 in ihrer nat\u00fcrlichen Verfassung. Sie braucht keine B\u00fchne, um zu leuchten &ndash; sie bringt die B\u00fchne mit.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Achterfl\u00fcgel: Der K\u00e4mpfer im Schimpansen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Achterfl\u00fcgel</strong> gibt der sexuellen Sieben etwas Entscheidendes: H\u00e4rte. Bei schwach ausgepr\u00e4gtem Achterfl\u00fcgel kann die Sieben ausweichen, verhandeln, charmieren. Der Achterfl\u00fcgel k\u00e4mpft. Er gibt nicht nach. Er bei\u00dft sich durch. Boris Becker hat Matches gewonnen, die er normalerweise verloren h\u00e4tte &ndash; weil er sich geweigert hat, diese Realit\u00e4t anzuerkennen. Das ist der Achterfl\u00fcgel der sexuellen Sieben: die Weigerung, das Spiel zu verlieren, bevor der letzte Punkt gespielt ist.</p>
          <p class="vb-intro">Dieser Fl\u00fcgel war auf dem Platz sein gr\u00f6\u00dftes Geschenk. Er gab Becker etwas, das Siebener mit schwach ausgeprägtem Achterflügel selten besitzen: Standhaftigkeit unter Druck. W\u00e4hrend andere Spieler in schwierigen Momenten taktierten oder zur\u00fcckwichen, eskalierte Becker. Er erh\u00f6hte das Risiko, wenn er eigentlich h\u00e4tte konservativ spielen sollen. Er servierte Asse, wenn seine Gegner auf Sicherheit spielten. Diese F\u00e4higkeit, im entscheidenden Moment nicht kleiner zu werden, sondern gr\u00f6\u00dfer &ndash; das ist der Achterfl\u00fcgel in seiner unverfälschtesten Gestalt.</p>
          <p class="vb-intro">Au\u00dferhalb des Platzes wurde dieser Fl\u00fcgel zur Falle. Der Achterfl\u00fcgel der Sieben glaubt, dass Regeln f\u00fcr andere gelten. Dass Konsequenzen aufgehoben werden, wenn man nur entschlossen genug ist. Im Tennis funktioniert das: Willenskraft kann einen Matchball abwenden. Im Leben und vor Gericht nicht. Diese \u00dcberzeugung hat Becker durch seine ganze Karriere getragen &ndash; und sie hat ihn in der Krise vollst\u00e4ndig im Stich gelassen.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: V\u00f6llerei als Lebensform</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Sieben hei\u00dft <strong>V\u00f6llerei</strong> oder auch <strong>Ma\u00dflosigkeit</strong>: der unstillbare Hunger nach mehr. Bei der sexuellen Sieben richtet sich dieser Hunger auf Erlebnisse, Intensit\u00e4t, den n\u00e4chsten H\u00f6hepunkt. Becker hat nicht gespart. Er hat gelebt &ndash; gro\u00df, laut, verschwenderisch. H\u00e4user, Partys, Aff\u00e4ren, Investments, Auftritte. Die Sieben vertraut darauf, dass es immer weitergeht, weil es immer weitergegangen ist.</p>
          <p class="vb-intro">Wenn diese Ma\u00dflosigkeit auf unbegrenzte Mittel trifft, ist sie ein Fest. Wenn die Mittel enden und die Ma\u00dflosigkeit bleibt, entsteht eine Katastrophe. Becker hat jahrelang so gelebt, als h\u00e4tten die goldenen Jahre nie geendet. Das Enneagramm sieht darin keine Charakterschw\u00e4che &ndash; sondern das Muster einer Sieben, die gelernt hat, dass Intensit\u00e4t das Schmerzmittel schlechthin ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Der Mann, der den Moment mitrei\u00dft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Boris Becker dem deutschen Sport &ndash; und einer ganzen Generation &ndash; gegeben hat, ist nicht messbar in Titeln allein. Er hat Menschen mitgenommen. Er hat aus einem Samstagabend in Wimbledon einen nationalen Augenblick gemacht. Das ist das Geschenk der SX7w8: Enthusiasmus, der sich \u00fcbertr\u00e4gt; Freude, die ansteckt; ein Ja zum Leben, das andere aufweckt.</p>
          <p class="vb-intro">Der Schimpanse mit Achterfl\u00fcgel ist, in seiner gesunden Auspr\u00e4gung, der Mensch, der sagt: das ist m\u00f6glich, und ich beweise es dir jetzt, hier, in diesem Moment. Das ist Boris Becker am 7. Juli 1985. Der Rest seines Lebens ist die Frage, ob er lernen kann, wer er ist, wenn dieser Moment vorbei ist &ndash; und wie er sein kann, ohne ihn zur\u00fcckzuholen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"astrologie-boris-becker", label:"Astrologie-Analyse: Boris Becker (SX7w8)"},
        {route:"kriminalpsychologie-boris-becker", label:"Kriminalfall: Boris Becker (SX7w8)"},
        {route:"subtype/sx7", label:"SX7 \u2013 Der Schimpanse: Subtyp-Profil"},
        {route:"beruehmte-serena-williams", label:"Portr\u00e4t: Serena Williams (SX7w8)"},
      ])}
    </div>
  `);
}

export function catStevensPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cat-stevens-portrait.jpg" alt="Cat Stevens / Yusuf Islam" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Cat Stevens / Yusuf Islam</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Britischer Musiker, geb. 1948 – Tierentsprechung: Gürteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Gürteltier auf zwei Bühnen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier des sozialen Typs 4 – es verbirgt sein Anderssein nicht, sondern trägt es sichtbar vor Publikum, selbst wenn dieses Anderssein die eigene Identität grundlegend verändert. Kaum eine Biografie zeigt das so eindrücklich wie die von Steven Demetre Georgiou, geboren 1948 in London: erst als Cat Stevens einer der erfolgreichsten Singer-Songwriter der frühen 1970er, dann als Yusuf Islam ein öffentlicher Fürsprecher seines neuen Glaubens – zwei Identitäten, zwei Bühnen, ein und dasselbe Grundmuster.</p>
          <p class="vb-intro">1976 geriet Stevens vor der Küste Malibus in eine gefährliche Strömung und glaubte, zu ertrinken. Dieses Beinahe-Ertrinken wurde zum Auslöser einer radikalen Suche nach der eigenen, wahren Identität – jenseits von Ruhm, jenseits der Oberfläche, die die Welt von ihm sah.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Die Suche nach dem wahren Ich vor Publikum</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> trägt ihre Andersartigkeit nicht im Verborgenen, sondern in die Gruppe hinein – sie sucht die eigene, wahre Identität, und macht diese Suche selbst zum öffentlichen Thema. Nach seinem Beinahe-Ertrinken durchlief Stevens verschiedene spirituelle Wege, bevor er sich – beeinflusst durch seinen zum Islam konvertierten Bruder David und ein geschenktes Exemplar des Korans – 1977 formell zum Islam bekannte und den Namen Yusuf annahm: die arabische Form von Josef, dessen Geschichte von Versuchung, Verrat und Neuanfang er als Spiegel seines eigenen Weges durch die „Versuchungen des Ruhms" beschreibt.</p>
          <p class="vb-intro">Diese Umbenennung war kein privater, stiller Akt. Yusuf Islam erzählt seine eigene Geschichte seither immer wieder öffentlich – in Interviews, Vorträgen, Reden – als Beweis dafür, dass der Glaube Antworten und Frieden bieten kann. Das ist die soziale Vier in Reinform: die eigene, tief persönliche Transformation wird nicht verborgen, sondern zur Botschaft für andere.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Von der Popkarriere zur Mission</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sozialen Vier Zielstrebigkeit, Struktur und die Fähigkeit, aus innerem Erleben sichtbare, messbare Ergebnisse zu formen. Bereits als Cat Stevens zeigte sich das: Alben wie „Tea for the Tillerman" (1970) und „Teaser and the Firecat" (1971) machten ihn zu einem der meistverkauften Künstler seiner Zeit – introspektive, persönliche Texte, verpackt in makellos produzierte, kommerziell erfolgreiche Songs.</p>
          <p class="vb-intro">Nach seiner Konversion übertrug sich dieselbe Zielstrebigkeit auf eine neue Mission: 1983 gründete er eine muslimische Grundschule in London, half später beim Aufbau der Hilfsorganisation Muslim Aid, die in Afrika, Asien und Europa aktiv wurde. Statt sich zurückzuziehen, baute er Institutionen auf – Schule, Organisation, öffentliche Präsenz. 2006 kehrte er schließlich unter dem Namen Yusuf/Cat Stevens auch musikalisch zurück. Der Dreierflügel der SO4 sucht nicht die stille Innenschau, sondern die sichtbare, strukturierte Umsetzung der eigenen Wahrheit in der Welt.</p>
        </blockquote>

        <h2 class="vb-section">4. Zwei Identitäten, ein Muster</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Stevens/Yusuf von vielen anderen Prominenten unterscheidet, die sich religiös neu orientierten, ist die Konsequenz, mit der er den Bruch vollzog: Er verließ die Musikindustrie für fast drei Jahrzehnte fast vollständig, verkaufte seine Gitarren, konzentrierte sich auf Familie, Glaube und wohltätige Arbeit. Kein halber Rückzug, kein Nebenbei – die neue Identität ersetzte die alte fast vollständig, bevor beide sich 2006 wieder annäherten.</p>
          <p class="vb-intro">Diese Radikalität selbst ist typisch für die soziale Vier: Wenn die eigene Andersartigkeit erkannt wird, wird sie nicht als Facette neben anderen integriert, sondern zum neuen Zentrum der eigenen Identität gemacht – öffentlich, sichtbar, unübersehbar.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 zeigt sich in der Fähigkeit, aus einer existenziellen Krise – dem Beinahe-Ertrinken, der Sinnkrise des Ruhms – eine tragfähige, jahrzehntelang gelebte neue Identität zu formen, die zugleich anderen Menschen als Orientierung diente: Millionen Zuhörer bei Cat Stevens, viele Gläubige und Bedürftige durch die Arbeit von Yusuf Islam.</p>
          <p class="vb-intro">Der Schatten zeigt sich in den öffentlichen Kontroversen, die seine Konversion begleiteten – darunter 1989 missverständliche, später von ihm selbst relativierte Äußerungen zur Fatwa gegen Salman Rushdie, die seinem Ruf jahrelang schadeten. Für die SO4w3 gilt: Wer die eigene Wahrheit so öffentlich und kompromisslos vertritt, riskiert, dass jedes Wort auf die Goldwaage gelegt wird – und dass Nuancen im öffentlichen Bild verloren gehen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Das Gürteltier mit zwei Namen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Cat Stevens/Yusuf Islam bleibt bis heute eine der seltenen Figuren der Popkultur, die einen vollständigen Identitätswechsel öffentlich vollzogen und beide Identitäten am Ende miteinander versöhnten, statt eine zu verleugnen. 2014 wurde er in die Rock and Roll Hall of Fame aufgenommen – als Cat Stevens gewürdigt für ein Werk, das er als Yusuf Islam nie verleugnete.</p>
          <p class="vb-intro">Das Gürteltier, das seine Wahrheit nie verbarg, auch wenn sie sich radikal veränderte – das ist das bleibende Bild der sozialen Vier mit Dreierflügel: die eigene Transformation nicht im Stillen zu vollziehen, sondern sie mit derselben Zielstrebigkeit in die Welt zu tragen, mit der zuvor der Ruhm gesucht wurde.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
        {route:"beruehmte-michael-jackson", label:"Porträt: Michael Jackson (SO4w3)"},
        {route:"beruehmte-til-schweiger", label:"Porträt: Til Schweiger (SO4w3)"},
        {route:"beruehmte-romy-schneider", label:"Porträt: Romy Schneider (SO4w3)"},
        {route:"beruehmte-alan-watts", label:"Porträt: Alan Watts (SO4w3) – ebenfalls eine radikale spirituelle Neuerfindung"},
      ])}
    </div>
  `);
}

export function danBrownPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dan-brown-portrait.jpg" alt="Dan Brown" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dan Brown</p>
        <p class="krim-portrait-typ">SE1w2 &middot; Selbsterhaltender Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schriftsteller, geb. 1964 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> sieht Muster, wo andere nur Einzelteile erkennen. Er kreist hoch \u00fcber der Landschaft, verbindet, was am Boden getrennt erscheint, und st\u00f6\u00dft erst herab, wenn er absolut sicher ist. Genau das ist die literarische Handschrift von Dan Brown: Symbole, Codes, verborgene Verbindungen zwischen Kunst, Geschichte und Religion &ndash; sichtbar gemacht durch einen Blick, der alles zugleich \u00fcberschaut.</p>
          <p class="vb-intro">Der US-amerikanische Schriftsteller Dan Brown war, bevor er Schriftsteller wurde, Musiker und Songwriter, ohne durchschlagenden Erfolg. Der Wendepunkt kam erst mit \u201eDiabolus" und vor allem mit seinem Roman \u00fcber Symbolik und verborgene Codes, der ihn 2003 weltber\u00fchmt machte. Auch hier: Jahre des Kreisens, dann der pr\u00e4zise Sturzflug im richtigen Moment.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Recherche als innere Pflicht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihr Vollkommenheitsstreben nicht nach au\u00dfen auf die Welt, sondern nach innen auf die eigene Vorbereitung, das eigene Handwerk, die eigene Sorgfalt. Naranjo nannte diesen Subtyp <em>Worry</em> &ndash; Besorgnis. Die SE1 fragt sich unabl\u00e4ssig: Habe ich alles bedacht? Stimmt jedes Detail? Halte ich der Pr\u00fcfung stand?</p>
          <p class="vb-intro">Bei Dan Brown zeigt sich das in einer regelrecht sprichw\u00f6rtlichen Recherche-Disziplin. F\u00fcr seine Romane bereist er Schaupl\u00e4tze selbst, befragt Fachleute aus Kunstgeschichte, Kryptographie und Theologie, und \u00fcberarbeitet Manuskripte \u00fcber Jahre hinweg. Sein Tagesablauf gilt als streng durchgetaktet: fr\u00fcher Schreibbeginn, feste Pausen, ein beinahe kl\u00f6sterliches Arbeitsritual. Das ist kein Perfektionismus als Attit\u00fcde &ndash; das ist die innere Stimme der Eins, die sagt: <em>Es muss stimmen, bevor es die Welt sieht.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: Verst\u00e4ndlichkeit als Geschenk an den Leser</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> \u00f6ffnet die strenge, nach innen gerichtete Eins nach au\u00dfen: Er verleiht die F\u00e4higkeit, zu geben, zug\u00e4nglich zu machen, andere mitzunehmen. Mit schwach ausgepr\u00e4gtem Zweierfl\u00fcgel k\u00f6nnte die Eins ihr Fachwissen f\u00fcr sich behalten, akademisch und unnahbar bleiben. Der Zweierfl\u00fcgel dr\u00e4ngt darauf, es zu teilen &ndash; verst\u00e4ndlich, spannend, mitrei\u00dfend.</p>
          <p class="vb-intro">Genau darin liegt Browns literarisches Erfolgsrezept: hochkomplexe Themen aus Kunstgeschichte, Symbolik und Theologie werden in kurze, fast schon atemlose Kapitel verpackt, die auch fachfremde Leser mitrei\u00dfen. Der SE1w2er will nicht nur richtig liegen &ndash; er will, dass andere daran teilhaben k\u00f6nnen. Die Pr\u00e4zision des Adlers, verschenkt an ein Millionenpublikum.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1 ist un\u00fcbersehbar: au\u00dfergew\u00f6hnliche Sorgfalt, verl\u00e4ssliches Handwerk, ein Qualit\u00e4tsanspruch, der Vertrauen schafft. Browns B\u00fccher verkaufen sich seit \u00fcber zwei Jahrzehnten in zweistelligen Millionenauflagen &ndash; ein Beleg daf\u00fcr, dass Leser sich auf diese Sorgfalt verlassen.</p>
          <p class="vb-intro">Der Schatten ist die andere Seite derselben M\u00fcnze: Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> &ndash; bei der SE1 meist nach innen gewendet, als best\u00e4ndige Selbstkritik. Brown wurde von Literaturkritikern \u00fcber Jahre hinweg scharf angegriffen, wegen seines Stils ebenso wie wegen historischer Ungenauigkeiten in seinen Romanen. F\u00fcr eine Eins, deren gesamtes Selbstverst\u00e4ndnis auf Korrektheit ruht, ist genau das die empfindlichste Stelle: der Vorwurf, doch nicht gr\u00fcndlich genug gewesen zu sein.</p>
          <p class="vb-intro">Dass er trotz dieser Kritik unbeirrt weiterschreibt, weiter recherchiert, weitere B\u00fccher mit derselben akribischen Sorgfalt vorlegt, zeigt einen SE1er, der gelernt hat, seinem eigenen Ma\u00dfstab zu vertrauen &ndash; auch wenn die \u00f6ffentliche Meinung ihm widerspricht.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der Sorge zur stillen Gewissheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins f\u00fchrt vom Zorn zur Stille, von der st\u00e4ndigen Sorge zur ruhigen Gewissheit: Das, was mit Sorgfalt gemacht wurde, darf f\u00fcr sich selbst sprechen. Es braucht keine st\u00e4ndige Nachpr\u00fcfung mehr.</p>
          <p class="vb-intro">Dan Brown verk\u00f6rpert diesen Weg in seiner schieren Best\u00e4ndigkeit. Jahrzehnte harter Recherche-Arbeit, wiederkehrende \u00f6ffentliche Kritik &ndash; und dennoch ein Werk, das ungebrochen weiterw\u00e4chst. Der Adler l\u00e4sst sich von Gegenwind nicht aus der Bahn werfen. Er kennt seine Flugh\u00f6he. Er wei\u00df, wonach er sucht &ndash; und wann er gefunden hat, was er suchte.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se1", label:"SE1 \u2013 Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-christoph-waltz", label:"Christoph Waltz \u2013 SE1w2"},
      ])}
    </div>
  `);
}

export function donaldTrumpPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-donald-trump-portrait.jpg" alt="Donald J. Trump" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Donald J. Trump</p>
        <p class="krim-portrait-typ">SX8w7 &middot; Sexueller Typ 8 mit Siebenerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Unternehmer, 45. &amp; 47. US-Pr\u00e4sident, geb. 1946 &ndash; Tierentsprechung: Krokodil</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Krokodil</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Krokodil</strong> ist das Tier des sexuellen Typs 8 &ndash; und kaum ein Bild trifft Donald Trump besser. Das Krokodil ist das \u00e4lteste Raubtier der Erde: geduldig im Warten, blitzschnell im Zugriff, unbeeindruckt von Kritik und \u00fcberaus schwer zu bezwingen. Es zieht andere an \u2013 und wer zu nah kommt, merkt: Das war keine Einladung zur Freundschaft.</p>
          <p class="vb-intro">Trump hat genau diese Qualit\u00e4t. Er dominiert R\u00e4ume, zieht Kameras an, ist nie neutral \u2013 immer provokant, immer laut, immer im Zentrum. Jahrzehntelang war er Medienthema, bevor er Politiker wurde. Er hat die Regeln des \u00f6ffentlichen Auftretens nicht gebrochen \u2013 er hat sie neu geschrieben, so wie das Krokodil die Regeln im Wasser setzt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Acht: Besitzergreifung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Acht (SX8)</strong> ist nach Naranjo der Subtyp, den er <em>Besitzergreifung</em> nannte &ndash; auf Englisch <em>Possession</em>. Die sexuelle Acht will nicht schlichter Sieger sein, sie will alles: die volle Aufmerksamkeit, die bedingungslose Loyalit\u00e4t, den totalen Eindruck. Die SX8 ist leidenschaftlich, intensiv und immer auf der Suche nach der n\u00e4chsten Herausforderung, die gro\u00df genug ist, um sie wirklich zu f\u00fcllen.</p>
          <p class="vb-intro">Trumps Leben liest sich wie eine SX8-Biografie: Immobilienimperium, Casinobetrieb, Fernsehshow (<em>The Apprentice</em>), Pr\u00e4sidentschaft, erneute Pr\u00e4sidentschaft. Kein Stillstand, kein R\u00fcckzug, keine ruhige Gr\u00f6\u00dfe. Immer der n\u00e4chste Deal, die n\u00e4chste Eskalation, das n\u00e4chste Projekt, das gr\u00f6\u00dfer ist als das letzte. Die SX8 h\u00f6rt nicht auf, weil sie nicht aufh\u00f6ren kann.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Siebenerfl\u00fcgel: Die Lust am Spiel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerfl\u00fcgel</strong> verleiht der sexuellen Acht eine besondere Energie: Leichtigkeit, Humor, Risikobereitschaft und eine gewisse Spielfreude, die die hohe Kraft des Achterkerns aufhellt. Die SX8w7 ist nicht nur Angreifer &ndash; sie ist auch Entertainer. Sie wei\u00df, wie man ein Publikum h\u00e4lt. Sie schleudert Einzeiler, dreht die Wahrheit so, dass sie wie Show wirkt, und geniesst das Spektakel des Streits.</p>
          <p class="vb-intro">Trump ist kein Politiker im klassischen Sinn &ndash; er ist eine Figur. Seine Rallyes sind Auftritte, seine Interviews sind Ringk\u00e4mpfe, seine Tweets sind Performances. Der Siebenerfl\u00fcgel gibt ihm die Energie, das alles zu genie\u00dfen. Ihm ist nicht unwohl dabei. Er liebt es. Das unterscheidet die SX8w7 von der rein destruktiven Kraft: Es macht ihr Spa\u00df.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Wollust als Intensit\u00e4t</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Acht heisst <strong>Wollust</strong> \u2013 aber nicht im engeren Sinn. Es ist ein Hunger nach dem Ganzen, nach Intensit\u00e4t, nach dem ungefilterten Leben. Die sexuelle Acht richtet diesen Hunger auf eine Person, auf ein Projekt, auf eine Vision. Und sie duldet keine Halbherzigkeiten.</p>
          <p class="vb-intro">Bei Trump zeigt sich das in seiner Beziehung zur Marke Trump selbst: Er hat nicht einfach Gesch\u00e4fte gemacht \u2013 er hat <em>Trump</em> zur Marke gemacht, zu einem Versprechen f\u00fcr Gr\u00f6\u00dfe, Luxus und Sieg. Der Name auf den Hochh\u00e4usern, die Goldfarbe, der Superlativ als Standard: alles Ausdruck einer Leidenschaft, die nicht unterscheiden kann zwischen sich selbst und dem, was sie besitzt. Das ist die SX8 in Reinform.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Geschenk: Mut zum Unm\u00f6glichen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was die SX8w7 in ihrer besten Version verk\u00f6rpert, ist echter Mut: die F\u00e4higkeit, gegen jede Erwartung anzutreten, keine Niederlage als endg\u00fcltig zu akzeptieren und in einem Spiel mitzuspielen, das alle anderen f\u00fcr verloren halten. Trump hat zweimal das Pr\u00e4sidentenamt errungen \u2013 das zweite Mal nach einer Niederlage, zwei Amtsenthebungsverfahren und mehreren Strafprozessen. Das ist keine Kleinigkeit.</p>
          <p class="vb-intro">Das Geschenk der SX8w7 ist diese Unerschrockenheit: die Weigerung, klein beizugeben, die Energie, die aus dem Kampf selbst entsteht, und die Bereitschaft, sich zu zeigen \u2013 komplett und unverh\u00fcllt, mit allen Widerspr\u00fcchen. Das Krokodil taucht nicht unter. Es bleibt an der Oberfl\u00e4che. Sichtbar, unbeweglich, immer bereit.</p>
        </blockquote>

      </div>
            ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx8", label:"SX8 \u2013 Das Krokodil: Subtyp-Profil"},
        {route:"beruehmte-bud-spencer", label:"Portr\u00e4t: Bud Spencer (SO8w9)"},
        {route:"beruehmte-michelle-obama", label:"Portr\u00e4t: Michelle Obama (SO8w7)"},
        {route:"beruehmte-markus-soeder", label:"Portr\u00e4t: Markus S\u00f6der (SX8w9) \u2013 dieselbe Grundintensit\u00e4t, ausgleichenderer Fl\u00fcgel"},
      ])}
    </div>
  `);
}

export function evaPeronPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-eva-peron-portrait.jpg" alt="Eva Perón" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Eva Perón</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Sozialer Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">1919&ndash;1952 &ndash; Argentinische First Lady, Schauspielerin, Wohltäterin &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever aus der Provinz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; zugewandt, unwiderstehlich darauf aus, gebraucht zu werden, und bereit, alles für das Rudel zu geben, dem es sich zugehörig fühlt. Kaum eine Biografie zeigt das so kompromisslos wie die der Eva Duarte, geboren 1919 als uneheliche Tochter in ärmlichen Verhältnissen in Los Toldos, einer argentinischen Provinzstadt. Mit fünfzehn zog sie nach Buenos Aires, um Schauspielerin zu werden &ndash; nicht aus reiner Eitelkeit, sondern aus dem tiefen Bedürfnis, gesehen und gebraucht zu werden, in einer Stadt, die eine mittellose junge Frau zunächst kaum wahrnahm.</p>
          <p class="vb-intro">1944 lernte sie Oberst Juan Domingo Perón bei einem Wohltätigkeitsereignis für Erdbebenopfer kennen &ndash; ein Treffen, das symbolisch für ihr gesamtes weiteres Leben stehen sollte: Fürsorge für andere als der Ort, an dem sich ihr eigenes Schicksal entschied. Der Golden Retriever hatte sein Rudel gefunden &ndash; und mit ihm eine Bühne, auf der Hingabe und Sichtbarkeit keinen Widerspruch mehr bildeten.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Die Armen als eigenes Volk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> richtet die Zuwendung der Zwei nicht auf einzelne Personen, sondern auf die Gemeinschaft als Ganzes. Naranjo nannte diesen Subtyp <em>Ambition</em> &ndash; den Drang, durch Wirkung im größeren Feld unentbehrlich zu werden. Als First Lady baute Eva Perón die <em>Fundación Eva Perón</em> auf, eine gigantische Wohlfahrtsorganisation, die Krankenhäuser, Schulen, Waisenhäuser und Altenheime errichtete und Millionen von Armen &ndash; den <em>descamisados</em>, den „Hemdlosen" &ndash; direkte Hilfe leistete, oft in persönlichen Audienzen, bei denen sie stundenlang Bittsteller empfing.</p>
          <p class="vb-intro">Diese Hingabe war nie leise. Eva Perón hielt glühende Reden, in denen sie sich selbst als Brücke zwischen dem „Volk" und ihrem Mann inszenierte &ndash; „Ich werde wiederkommen, und ich werde Millionen sein", sagte sie sinngemäß in einer ihrer letzten öffentlichen Reden. Der Golden Retriever bellt nicht von der Bühne herab, er geht mitten ins Getümmel &ndash; genau das tat sie, wenn sie durch die Armenviertel fuhr und persönlich Geschenke verteilte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Von der Schauspielerin zum Mythos</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der sozialen Zwei den Antrieb zur sichtbaren Wirkung, zur Inszenierung, zum Beweis durch öffentliches Bild. Bei Eva Perón verschmilzt dieser Flügel mit ihrer früheren Karriere als Radio- und Filmschauspielerin auf eine Weise, die kaum zu trennen ist: Sie brachte die Bühnenpräsenz der Darstellerin direkt in die Politik &ndash; kunstvoll arrangierte Auftritte, edle Roben und Schmuck als bewusste Botschaft an ein Volk, dem sie zeigen wollte, dass auch eine Frau aus der Unterschicht ganz oben ankommen kann, sorgfältig komponierte Reden, ein selbst geschriebenes Buch (<em>La razón de mi vida</em>, deutsch etwa „Der Sinn meines Lebens"), das ihr eigenes Leben zur politischen Erzählung formte.</p>
          <p class="vb-intro">Der Dreierflügel wollte nicht nur helfen &ndash; er wollte, dass die Hilfe sichtbar, unvergesslich, mythisch wurde. Aus der reinen SO2-Fürsorge entstand so „Evita": ein Markenname, eine Ikone, eine politische Erzählfigur, die größer war als die Person dahinter. Dieselbe Energie, die Julius Caesar (SO2w3) seinen eigenen Feldzugsbericht in der dritten Person schreiben ließ, trieb Eva Perón dazu, ihr eigenes Leben zur ergreifenden Heldinnengeschichte umzuschreiben.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w3 ist eine Fürsorge, die tatsächlich Millionen erreichte: Frauenwahlrecht in Argentinien 1947 maßgeblich durch ihren persönlichen Einsatz durchgesetzt, konkrete materielle Hilfe für Menschen, die zuvor von keiner Regierung wahrgenommen wurden. Das ist keine leere Geste &ndash; es ist Wirkung, die sich in Lebensrealitäten änderte.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die tiefe Überzeugung, unentbehrlich zu sein, kombiniert mit der Schwierigkeit, eigene Bedürftigkeit zuzulassen. Bei Eva Perón zeigte sich das in einer wachsenden Unduldsamkeit gegenüber Kritik: Oppositionelle Zeitungen wurden geschlossen, politische Gegner­innen und Gegner unter Druck gesetzt, die Grenze zwischen persönlicher Fürsorge und politischer Kontrolle verschwamm zusehends. Wer sich selbst als unentbehrliche Retterin des Volkes versteht, kann Widerspruch schwer als legitim anerkennen &ndash; er wird schnell zum Verrat an denen, für die man doch alles gibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Tod als letzte Inszenierung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eva Perón erkrankte Anfang der 1950er-Jahre an Gebärmutterhalskrebs, verschwieg lange Zeit den Ernst ihres Zustands vor der Öffentlichkeit und sogar teilweise vor sich selbst, um weiter für ihr Volk präsent zu sein &ndash; bei ihrer letzten öffentlichen Rede im Juni 1951 musste sie sich an Perón stützen, unter einem Mantel verbargen sich bereits Stützkorsette gegen den fortgeschrittenen körperlichen Verfall. Sie starb am 26. Juli 1952 im Alter von nur 33 Jahren.</p>
          <p class="vb-intro">Selbst ihr Tod wurde zur größten Inszenierung ihres Lebens: Der Körper wurde einbalsamiert, um dauerhaft öffentlich verehrt werden zu können &ndash; Millionen Menschen zogen tagelang an ihrem aufgebahrten Leichnam vorbei. Die soziale Zwei mit Dreierflügel wollte, dass ihre Hingabe die eigene Sterblichkeit überdauert &ndash; und genau das gelang: Der Mythos „Evita" ist bis heute lebendiger als die historische Person Eva Duarte je war.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Zugehörigkeit, die überdauert</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Eva Perón hinterließ, lässt sich nicht auf ein politisches Programm reduzieren. Sie veränderte, wie eine Frau aus einfachsten Verhältnissen öffentliche Macht beanspruchen konnte, und hinterließ mit dem Peronismus eine politische Bewegung, die Argentinien bis heute prägt &ndash; weit über ihren frühen Tod hinaus.</p>
          <p class="vb-intro">Das ist das Geschenk der SO2w3 in ihrer eindrücklichsten Form: Hingabe, die sich nicht mit stillem Wirken zufriedengibt, sondern so sichtbar wird, dass sie Generationen überdauert. Der Golden Retriever, der nicht nur ins Rudel zurückkehrt, sondern selbst zur Legende wird, an die sich das Rudel noch Jahrzehnte später erinnert.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-julius-caesar", label:"Porträt: Julius Caesar (SO2w3)"},
        {route:"beruehmte-kamala-harris", label:"Porträt: Kamala Harris (SO2w3)"},
        {route:"beruehmte-truman-capote", label:"Porträt: Truman Capote (SO2w3)"},
        {route:"beruehmte-benjamin-disraeli", label:"Porträt: Benjamin Disraeli (SO2w3)"},
        {route:"beruehmte-lea-michele", label:"Porträt: Lea Michele (SO2w3)"},
        {route:"beruehmte-mira-murati", label:"Porträt: Mira Murati (SO2w3)"},
        {route:"beruehmte-mata-hari", label:"Porträt: Mata Hari (SX2w3)"},
      ])}
    </div>
  `);
}

export function fritzWepperPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fritz-wepper-portrait.jpg" alt="Fritz Wepper" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fritz Wepper</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler, 1941–2024 – Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> ist kein hektischer Jäger. Er kreist ruhig, ausdauernd, über weite Strecken hinweg – und genau dieses lange, geduldige Kreisen beschreibt Fritz Weppers über sechs Jahrzehnte währende Schauspielkarriere treffender als jeder spektakuläre Durchbruch. Wepper wurde 1941 in München geboren; sein Vater Friedrich galt seit 1944 im Russlandfeldzug als vermisst und kehrte nie aus dem Krieg zurück. Schon mit neun Jahren stand er für den Bayerischen Rundfunk vor dem Mikrofon, wurde in den 1950er Jahren durch Auftritte in zahlreichen Kinderfilmen zum Kinderstar – eine öffentliche Laufbahn, die begann, bevor er den Verlust seines Vaters überhaupt verarbeiten konnte.</p>
          <p class="vb-intro">Aus dieser frühen Prägung erwuchs eine Karriere von seltener Kontinuität, nicht eine des schnellen Ruhms. Der Adler, der als Kind bereits zu fliegen begann, aber sein ganzes Leben lang lieber kreiste, statt sich in den Sturzflug zu stürzen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Verlässlichkeit über Jahrzehnte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihr Vollkommenheitsstreben nach innen: auf die eigene Disziplin, das eigene Handwerk, die eigene Verlässlichkeit. Naranjo nannte diesen Subtyp <em>Worry</em> – Besorgnis, gepaart mit einem fast unerschütterlichen Arbeitsethos. Wepper lieferte diese Verlässlichkeit über ein halbes Jahrhundert: 24 Jahre lang, von 1974 bis 1998, spielte er als Harry Klein den Assistenten an der Seite von <a href="#beruehmte-horst-tappert">Horst Tappert (SE3w2)</a> in ›Derrick‹, danach fast zwei weitere Jahrzehnte, von 2002 bis 2021, den Bürgermeister Wöller in ›Um Himmels Willen‹ – 260 Folgen, eine der langlebigsten deutschen Fernsehserien überhaupt.</p>
          <p class="vb-intro">Zwei Rollen, fast 45 Jahre am Stück, ohne größere Unterbrechung: Diese Kontinuität ist kein Zufall, sondern die stille Logik der SE1 – wer einmal Vertrauen aufgebaut hat, verteidigt es durch beständige, wiederholte Zuverlässigkeit, nicht durch ständige Neuerfindung.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Die zweite Rolle als Lebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> bringt der selbsterhaltenden Eins Ruhe und Gleichmut statt Getriebenheit. Die SE1w9 muss niemanden von etwas überzeugen und sucht selten das Rampenlicht. Bemerkenswert an Weppers Karriere ist, dass er in beiden seiner prägendsten Rollen bewusst die zweite Geige spielte: Harry Klein war der Assistent, nicht der ermittelnde Oberinspektor; der Bürgermeister Wöller war Nebenfigur neben den Ordensschwestern im Zentrum der Serie. Kein Drang, die Hauptrolle zu beanspruchen, sondern die stille Bereitschaft, eine tragende, aber nie im Vordergrund stehende Funktion über Jahrzehnte auszufüllen.</p>
          <p class="vb-intro">Auch abseits der Bühne trat Wepper selten mit Kontroversen oder Skandalen in Erscheinung – eine öffentliche Zurückhaltung, die zu seiner beständigen, unaufgeregten Bildschirmpräsenz passte. Der Neunerflügel trägt Frieden nach innen, statt Aufmerksamkeit nach außen zu suchen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Eins</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 ist offensichtlich: außergewöhnliche Verlässlichkeit über Jahrzehnte, zwei der langlebigsten Fernsehserien Deutschlands getragen, ohne dass die Qualität je nachließ. Millionen Zuschauer verbanden mit Wepper über Generationen hinweg dasselbe Gefühl von Vertrautheit und Verlässlichkeit.</p>
          <p class="vb-intro">Der Schatten liegt tiefer verborgen als bei reaktiveren Subtypen. Das Schicksalsmuster der Eins ist der <strong>Zorn</strong> – bei der SE1w9 durch den Neunerflügel gedämpft, fast betäubt. Der frühe Verlust des Vaters im Krieg, über den er kaum öffentlich sprach, und der Tod seines jüngeren Bruders, des Schauspielers Elmar Wepper, nur wenige Monate vor seinem eigenen Tod 2024, deuten auf eine stille, selten offen verarbeitete Trauer hin – typisch für einen Subtyp, der eigene Bedürfnisse eher hinter der nächsten Aufgabe verschwinden lässt, als sie direkt zu benennen.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Von der stillen Pflicht zur echten Ruhe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt vom Zorn zur Gelassenheit – bei der SE1w9 von der erzwungenen, arbeitsbedingten Ruhe zur echten, selbstgewählten Ruhe. Wepper verkörperte diesen Weg auf seine eigene, unspektakuläre Art: ein Leben lang dieselbe verlässliche Präsenz, ohne den Drang, sich neu zu erfinden oder in den Vordergrund zu drängen.</p>
          <p class="vb-intro">Der Adler, der als Kind zu fliegen begann und sein ganzes Leben lang in ruhigen, weiten Kreisen blieb, statt sich je in einen spektakulären Sturzflug zu stürzen – das ist das bleibende Bild dieses Subtyps: Beständigkeit, die keinen Applaus braucht, um wertvoll zu sein.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Besorgte: Subtyp-Profil"},
        {route:"beruehmte-horst-tappert", label:"Porträt: Horst Tappert (SE3w2) – Derrick-Partner"},
        {route:"beruehmte-ken-follett", label:"Porträt: Ken Follett (SE1w9)"},
        {route:"beruehmte-astrid-lindgren", label:"Porträt: Astrid Lindgren (SE1w9)"},
        {route:"beruehmte-reinhold-wuerth", label:"Porträt: Reinhold Würth (SE1w9)"},
        {route:"beruehmte-armin-mueller-stahl", label:"Porträt: Armin Mueller-Stahl (SE1w9) – ebenfalls deutscher Schauspieler"},
      ])}
    </div>
  `);
}

export function hannahEmdePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hannah-emde-portrait.jpg" alt="Hannah Emde – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hannah Emde</p>
        <p class="krim-portrait-typ">SO2w1 &middot; Sozialer Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Tierärztin, Artenschützerin &amp; Moderatorin, geb. 1992 &ndash; Terra X: Faszination Erde &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; ein Tier, das Verbindung nicht als Aufgabe begreift, sondern als Wesensart. Freundlich, engagiert, mit einer Wärme, die niemanden ausschließt. Der Golden Retriever drängt sich nicht auf, aber er ist da, sobald er gebraucht wird &ndash; und wenn es ernst wird, zeigt sich hinter der Herzlichkeit erstaunliche Ausdauer und Einsatzbereitschaft.</p>
          <p class="vb-intro">Die deutsche Tierärztin und Moderatorin Hannah Emde, geboren 1992 in Bonn, verkörpert genau dieses Bild: Nach dem Abitur ging sie über den Freiwilligendienst weltwärts für zwölf Monate auf die Philippinen, studierte anschließend Tiermedizin an der Tierärztlichen Hochschule Hannover und schloss 2019 als approbierte Tierärztin ab. Wer ihren Werdegang verfolgt, sieht keine geradlinige Fernsehkarriere, sondern eine Biografie, die sich Schritt für Schritt in den Dienst einer größeren Sache gestellt hat.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Fürsorge, die viele erreichen will</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> lenkt die Energie der Zwei nicht auf einzelne, persönliche Bindungen, sondern auf das größere Feld: Gemeinschaft, Öffentlichkeit, gesellschaftliche Wirkung. Naranjo nannte diesen Subtyp <em>Ambition</em> &ndash; nicht Ehrgeiz um seiner selbst willen, sondern der Antrieb, für möglichst viele etwas zu bewirken. Die SO2 fragt nicht nur: <em>Wie kann ich diesem einen Menschen helfen?</em>, sondern: <em>Wie kann ich unentbehrlich für das große Ganze werden?</em></p>
          <p class="vb-intro">Bei Hannah Emde zeigt sich das in einer bemerkenswerten Verdopplung ihres Engagements: 2017, mit gerade einmal 25 Jahren, gründete sie den gemeinnützigen Verein <em>Nepada Wildlife e.V.</em>, der Artenschutz durch Umweltbildung, tiermedizinische Arbeit, Forschung und Öffentlichkeitsarbeit fördert &ndash; noch bevor ihr Studium abgeschlossen war. Von 2021 bis 2023 arbeitete sie zusätzlich als Tierärztin und Beraterin bei der Deutschen Gesellschaft für Internationale Zusammenarbeit (GIZ) an einem One-Health-Vorhaben und half beim Aufbau der internationalen Allianz gegen Gesundheitsrisiken im Wildtierhandel mit.</p>
          <p class="vb-intro">Seit April 2024 moderiert sie die ZDF-Reihe <em>Terra X: Faszination Erde</em> und erreicht damit ein Millionenpublikum &ndash; die konsequente Fortsetzung derselben Bewegung: Was als persönliches Engagement in einem einzelnen Verein begann, wird zur Bühne, auf der Artenschutz einer breiten Öffentlichkeit nahegebracht wird. Bereits 2022 lief ihre sechsteilige Dokuserie in der ARD Mediathek, in der sie Menschen traf, die sich in Namibia für den Artenschutz einsetzen &ndash; auch hier stand nicht sie selbst im Mittelpunkt, sondern die Geschichten derer, die vor Ort etwas bewegen.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Fachliche Gründlichkeit statt bloßer Sympathie</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel (w1)</strong> gibt der sozialen Zwei eine innere Achse, die bei schwächer ausgeprägtem Einserflügel nicht von selbst vorhanden ist: den Anspruch, es fachlich richtig zu machen, nicht nur sympathisch zu wirken. Wo eine SO2 mit schwächerem Einserflügel sich stärker auf Ausstrahlung und Beliebtheit verlassen könnte, verlangt die Eins ein solides fachliches Fundament, bevor überhaupt eine Bühne betreten wird.</p>
          <p class="vb-intro">Bei Hannah Emde ist dieser Flügel unübersehbar: Sie moderiert Naturdokumentationen nicht als Quereinsteigerin, sondern als approbierte Tierärztin mit einem abgeschlossenen Studium an einer der renommiertesten veterinärmedizinischen Hochschulen Deutschlands. Ihre Mitarbeit an einem internationalen One-Health-Vorhaben zur Bekämpfung von Gesundheitsrisiken im Wildtierhandel ist keine PR-Geste, sondern echte fachpolitische Arbeit. Das ist die SO2w1: die Warmherzigkeit der Zwei, verbunden mit dem inneren Anspruch der Eins, dass Engagement für Tiere und Natur auf echtem Wissen basieren muss, nicht nur auf gutem Willen.</p>
          <p class="vb-intro">Auch die Gründung von Nepada Wildlife e.V. noch während des Studiums zeigt diese Verbindung: nicht abwarten, bis die Ausbildung vollständig abgeschlossen ist, aber auch nicht ohne Struktur handeln &ndash; sondern von Anfang an einen Verein mit klarem Auftrag, mit Bildungsarbeit, Forschung und tiermedizinischer Praxis aufbauen. Die Eins sorgt dafür, dass aus gutem Willen tragfähige Strukturen werden.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w1 ist ihre Fähigkeit, Fürsorge in Reichweite zu übersetzen: nicht nur einem einzelnen Tier zu helfen, sondern durch Bildung, Forschung und mediale Präsenz eine Wirkung zu erzielen, die weit über die eigene Praxis hinausgeht. Hannah Emdes Weg vom Vereinsgründungsprojekt zur bundesweiten Fernsehmoderatorin zeigt, wie aus persönlichem Engagement eine Plattform wird, ohne dass die fachliche Substanz verlorengeht.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; das tiefe Bedürfnis, gebraucht und unentbehrlich zu sein. Bei der SO2w1 zeigt sich das als hoher, oft selbst auferlegter Anspruch: das Gefühl, dem Vertrauen, das ihr als Gesicht des Artenschutzes im deutschen Fernsehen entgegengebracht wird, jederzeit gerecht werden zu müssen. Eine solche Kombination aus öffentlicher Sichtbarkeit und fachlichem Perfektionsanspruch kann tragen &ndash; sie kann aber auch erschöpfen, wenn der eigene Wert zu eng an ständige Beweisführung gekoppelt bleibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Vom Behandlungstisch zur Bildschirmpräsenz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Wechsel von der praktizierenden Tierärztin und Vereinsgründerin zur bekannten Fernsehmoderatorin bedeutet für Hannah Emde nicht den Abschied vom eigentlichen Beruf, sondern dessen Erweiterung: Statt ausschließlich am einzelnen Tier zu arbeiten, nutzt sie die Reichweite des Fernsehens, um Artenschutz einem Millionenpublikum verständlich zu machen. Die SO2w1 begegnet dieser Vergrößerung der Bühne nicht mit Distanz zur fachlichen Wurzel, sondern bringt genau diese Wurzel mit auf den Bildschirm.</p>
          <p class="vb-intro">Dabei bleibt die soziale Ausrichtung spürbar: In ihren Formaten stehen selten sie selbst, sondern immer wieder die Tiere, die Ökosysteme und die Menschen vor Ort im Mittelpunkt &ndash; ganz wie schon in ihrer ARD-Dokuserie über Namibias Artenschützer. Der Golden Retriever trägt die Aufmerksamkeit, die er bekommt, weiter zu denen, die sie eigentlich verdienen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Fachwissen, das Nähe schafft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Hannah Emde in ihre Arbeit einbringt, ist eine seltene Kombination: die Wärme, die ein Millionenpublikum für Naturthemen begeistert, und die fachliche Tiefe einer approbierten Tierärztin, die weiß, wovon sie spricht. Das ist das Geschenk der SO2w1 &ndash; ein Golden Retriever, der nicht nur Sympathie weckt, sondern der weiß, dass echtes Vertrauen erst entsteht, wenn Fürsorge und Fachwissen zusammenkommen.</p>
          <p class="vb-intro">In einer Medienlandschaft, die Naturthemen oft auf schöne Bilder reduziert, fällt Hannah Emde durch das Gegenteil auf: durch die Bereitschaft, ihre eigentliche fachliche Arbeit &ndash; Vereinsarbeit, internationale Gesundheitspolitik, tierärztliche Praxis &ndash; nicht hinter der Fernsehpräsenz zu verstecken, sondern sie zum Fundament zu machen. Der Golden Retriever läuft nicht voraus, um bewundert zu werden. Er läuft, weil es für die Sache, der er dient, gebraucht wird &ndash; und genau das macht ihn glaubwürdig.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-barack-obama", label:"Portrait: Barack Obama (SO2w1)"},
        {route:"beruehmte-albert-schweitzer", label:"Portrait: Dr. Albert Schweitzer (SO2w1)"},
        {route:"beruehmte-marisa-abela", label:"Portrait: Marisa Abela (SO2w1)"},
      ])}
    </div>
  `);
}

export function hughGrantPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hugh-grant-portrait.jpg" alt="Hugh Grant – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hugh Grant</p>
        <p class="krim-portrait-typ">SO4w3 &middot; Sozialer Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Britischer Schauspieler, geb. 1960 &ndash; Tierentsprechung: Gürteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Gürteltier mit dem stotternden Charme</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier der sozialen Vier &ndash; ein Wesen, das sein Anderssein nicht verbirgt, sondern sichtbar auf der Haut trägt. Anders als seine introvertierten Artgenossen versteckt sich diese Vier nicht im eigenen Panzer, sondern macht ihn zum Markenzeichen &ndash; als Beweis der eigenen Einzigartigkeit, auf einer Bühne, die alle sehen können.</p>
          <p class="vb-intro">Der britische Schauspieler Hugh Grant wurde 1960 in London geboren, studierte Englische Literatur in Oxford und stand dort bereits auf der Theaterbühne, bevor er sich zaghaft dem Film zuwandte. Sein internationaler Durchbruch kam erst 1994, mit Mitte dreißig, in &bdquo;Vier Hochzeiten und ein Todesfall&ldquo; &ndash; eine Rolle, die eine ganz bestimmte Figur prägte: den charmant stotternden, sich ständig entschuldigenden Englishman, der vor lauter Selbstzweifel kaum einen Satz zu Ende bringt. Diese eine, unverwechselbare Nuance wurde zu seinem Markenzeichen &ndash; und zur Blaupause seiner gesamten frühen Karriere.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Vier: Die eigene Unbeholfenheit als Alleinstellungsmerkmal</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Vier (SO4)</strong> lebt ihre Andersartigkeit nicht im Verborgenen, sondern sucht die Gruppe, um genau dort als die besondere Ausnahme wahrgenommen zu werden. Grant baute seine gesamte frühe Karriere auf einer einzigen, hochspezifischen Andersartigkeit auf: der eigenen, öffentlich zur Schau gestellten sozialen Unbeholfenheit. In &bdquo;Notting Hill&ldquo;, &bdquo;Bridget Jones&ldquo; und &bdquo;Tatsächlich... Liebe&ldquo; spielte er Variationen derselben Figur: liebenswert, aber strukturell unsicher, unfähig, seine eigenen Gefühle geradeheraus auszusprechen.</p>
          <p class="vb-intro">Grant selbst hat diese Selbstwahrnehmung immer wieder öffentlich bestätigt: Er beschrieb sich als &bdquo;terribly insecure&ldquo; und sagte, er habe sein ganzes Leben lang befürchtet, jeder Film könnte sein letzter sein. Für die soziale Vier ist genau das typisch: Die eigene Verletzlichkeit wird nicht versteckt, sondern in ein wiedererkennbares Bild verwandelt, das ein Millionenpublikum fasziniert &ndash; und das zugleich beweist, wie sehr man sich von der Masse selbstsicherer Leinwandhelden unterscheidet.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Die kalkulierte Neuerfindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> verleiht der Vier die Fähigkeit, das eigene Bild nicht nur zu fühlen, sondern es gezielt zu vermarkten und bei Bedarf neu zu erfinden. Als Grant selbst befand, er sei &bdquo;zu alt und zu hässlich und zu dick&ldquo; geworden, um weiter den romantischen Helden zu spielen, vollzog er eine der bemerkenswertesten Image-Wenden Hollywoods: Er wurde zum Charakterdarsteller für schillernde Bösewichte und komplexe Nebenfiguren &ndash; der eitle Kinderbuchautor in &bdquo;Paddington 2&ldquo;, der windige Anwalt in &bdquo;The Gentlemen&ldquo;, der Politiker Jeremy Thorpe in &bdquo;A Very English Scandal&ldquo;, für den er eine Emmy-Nominierung erhielt.</p>
          <p class="vb-intro">Diese bewusste, strategische Neupositionierung &ndash; weg vom liebenswerten Stotterer, hin zum abgründigen Charakterdarsteller &ndash; ist die reinste Ausprägung der SO4w3: Die Vier fühlt die eigene Vergänglichkeit des alten Images, der Dreierflügel setzt daraus eine neue, erfolgreiche Performance in Szene, statt in der alten Rolle zu verharren.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Preis der öffentlichen Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">1995, auf dem Höhepunkt seines Ruhms, wurde Grant in Los Angeles verhaftet, nachdem er in einem parkenden Auto mit einer Sexarbeiterin angetroffen worden war &ndash; ein persönlicher Tiefpunkt, der jede Boulevardzeitung der Welt füllte. Statt sich zurückzuziehen, ging Grant wenige Tage später live in die &bdquo;Tonight Show&ldquo; zu Jay Leno und stellte sich der öffentlichen Demütigung direkt: mit genau jener selbstironischen, verlegenen Offenheit, die schon seine Filmfigur ausmachte. Der Auftritt gilt bis heute als eines der geschicktesten Krisen-Interviews der Promigeschichte &ndash; und rettete seine Karriere, statt sie zu beenden.</p>
          <p class="vb-intro">Für die soziale Vier mit Dreierflügel wurde ausgerechnet der tiefste persönliche Fehltritt zu einer öffentlichen Bühne: Die Scham wurde nicht verborgen, sondern in Echtzeit in eine Performance verwandelt, die das Publikum überzeugte &ndash; ein Muster, das sich Jahrzehnte später in Grants viel diskutierten, bewusst unbequemen Interviewauftritten wiederholt, etwa bei den Oscars 2023, die als &bdquo;deliciously awkward&ldquo; (deutsch: »herrlich unangenehm«) durch die sozialen Medien gingen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 ist die Fähigkeit, <strong>tiefe Unsicherheit in wirkungsvolle Kunst</strong> zu verwandeln &ndash; aus einer einzigen, ehrlich empfundenen Schwäche eine Figur zu formen, die ein Millionenpublikum über Jahrzehnte hinweg liebt. Grants beste Rollen leben genau von diesem Wagnis: der eigenen Verlegenheit nicht auszuweichen, sondern sie zur komischen wie berührenden Kunstform zu machen.</p>
          <p class="vb-intro">Der Schatten zeigt sich in einer chronischen, öffentlich eingestandenen Selbstabwertung: Grant bezeichnete sich selbst wiederholt als das &bdquo;dumme&ldquo; Familienmitglied und sprach von &bdquo;marginally less self-hatred&ldquo; (deutsch: »geringfügig weniger Selbsthass«), seit er nicht mehr auf die romantische Rolle festgelegt sei. Die Kehrseite der SO4w3: Wenn die eigene Unsicherheit zum verlässlichsten Kapital wird, kann echte Selbstannahme hinter der perfekt kalkulierten Selbstironie verschwinden &ndash; und mancher Interviewpartner bekommt statt Charme nur noch die abweisende, gereizte Seite dieser Fassade zu sehen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Gürteltier, das seine Unsicherheit zur Signatur machte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Hugh Grant bleibt einer der wenigen Schauspieler, die zwei komplett unterschiedliche Karrierephasen zu jeweils eigenständigen Erfolgen gemacht haben &ndash; erst als der stotternde romantische Held eines ganzen Genres, dann als einer der interessantesten Charakterdarsteller seiner Generation. Beide Phasen speisen sich aus derselben Quelle: der Bereitschaft, die eigene Unbeholfenheit und Unsicherheit nicht zu verstecken, sondern sichtbar zu machen.</p>
          <p class="vb-intro">Das Gürteltier, das seine verletzlichste Seite nie verbarg, sondern sie erst zum Markenzeichen des liebenswerten Stotterers und später zur Grundlage abgründiger Charakterrollen machte &ndash; das ist das bleibende Bild der sozialen Vier mit Dreierflügel: Verletzlichkeit, die sich neu erfindet, statt zu verschwinden.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
        {route:"beruehmte-johnny-depp", label:"Portr\xe4t: Johnny Depp (SO4w3)"},
        {route:"beruehmte-til-schweiger", label:"Portr\xe4t: Til Schweiger (SO4w3)"},
      ])}
    </div>
  `);
}

export function jamieleecurtisPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jamie-lee-curtis-portrait.jpg" alt="Jamie Lee Curtis" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jamie Lee Curtis</p>
        <p class="krim-portrait-typ">SX1w2 &middot; Sexueller Typ 1 mit Zweierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Schauspielerin &amp; Aktivistin, geb. 1958 &ndash; Tierentsprechung: Schwarze Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> ist das Tier der sexuellen Eins &ndash; und kein Tier trifft Jamie Lee Curtis so genau. Die Schwarze Mamba ist eine der giftigsten Schlangen der Welt, blitzschnell, pr\u00e4zise und vollkommen kompromisslos. Sie greift nicht aus Aggression an &ndash; sie handelt aus einem inneren Gesetz heraus. Was falsch ist, wird benannt. Was unecht ist, wird abgelehnt. Was stimmt, wird mit vollem Einsatz verteidigt.</p>
          <p class="vb-intro">Die US-amerikanische Schauspielerin Jamie Lee Curtis, geboren 1958 als Tochter der Hollywood-Legenden Tony Curtis und Janet Leigh, wuchs in einer Welt auf, in der Sch\u00f6nheit, Ruhm und Schein das Ma\u00df aller Dinge waren &ndash; und entwickelte fr\u00fch einen inneren Widerstand gegen genau das. Ihre Karriere begann 1978 mit John Carpenters <em>Halloween</em>: ein Horrorfilm, eine Scream Queen &ndash; und eine junge Frau, die von Anfang an mehr wollte als das, was das Genre ihr anbot.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Leidenschaft als inneres Feuer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> ist der Subtyp der Eins, der seinen Perfektionsanspruch nicht auf sich selbst oder auf das Kollektiv richtet, sondern auf Intensit\u00e4t &ndash; auf vollst\u00e4ndige Pr\u00e4senz, vollst\u00e4ndige Authentizit\u00e4t, vollst\u00e4ndige Ehrlichkeit in allem, was z\u00e4hlt. Naranjo nannte diesen Subtyp <em>Zeal</em>: Inbrunst, Eifer, ein brennendes Verlangen nach dem Echten.</p>
          <p class="vb-intro">Jamie Lee Curtis lebt diesen Subtyp mit einer Offenheit, die in Hollywood selten ist. Sie sprach als eine der ersten Schauspielerinnen \u00f6ffentlich \u00fcber ihre Sucht: 22 Jahre lang war sie abh\u00e4ngig von Opiaten, seit 1999 ist sie n\u00fcchtern. Sie sprach \u00fcber das Scheitern von Ehen, \u00fcber die Herausforderungen der Mutterschaft, \u00fcber die Absurdit\u00e4t von Sch\u00f6nheitsidealen. Nicht als Beichte &ndash; sondern als Bekenntnis: <em>Das Echte ist mehr wert als der Schein.</em></p>
          <p class="vb-intro">2021 lie\u00df sie sich f\u00fcr das Magazin <em>AARP</em> ohne Retusche, ohne Schminke, ohne Inszenierung fotografieren. F\u00fcr eine Schauspielerin in einer Branche, in der Altern als Makel gilt, war das ein Akt. F\u00fcr eine SX1 war es selbstverst\u00e4ndlich.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierfl\u00fcgel: F\u00fcrsorge als zweite Kraft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierfl\u00fcgel (w2)</strong> verleiht der sexuellen Eins etwas Entscheidendes: echte Zugewandtheit. Die SX1w2 ist nicht nur kompromisslos in eigener Sache &ndash; sie sorgt, sie f\u00fcrsorgt, sie steht anderen bei. Die Intensit\u00e4t der sexuellen Eins wird durch den Zweierfl\u00fcgel nach au\u00dfen gerichtet: nicht als Kontrolle, sondern als Verbindung.</p>
          <p class="vb-intro">Als ihre Tochter Ruby sich als transgender outete, trat Jamie Lee Curtis sofort \u00f6ffentlich an ihre Seite &ndash; bedingungslos, laut, klar. Als langj\u00e4hrige Schirmherrin von Kinderkrankenh\u00e4usern engagiert sie sich seit Jahrzehnten f\u00fcr kranke Kinder. Ihre Freundschaften &ndash; besonders die legend\u00e4re mit John Cleese und der Rest des <em>A Fish Called Wanda</em>-Casts &ndash; sind bekannt f\u00fcr ihre Tiefe und Dauerhaftigkeit. Die Schwarze Mamba bei\u00dft f\u00fcr andere ebenso wie f\u00fcr sich selbst.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn als Reinigungsfeuer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins hei\u00dft <strong>Zorn</strong> &ndash; und bei der SX1w2 brennt er besonders hell, weil er mit der Intensit\u00e4t des sexuellen Subtyps verbunden ist. Jamie Lee Curtis hat keine Scheu, diesen Zorn zu zeigen: gegen die Filmindustrie, die Frauen jenseits der vierzig unsichtbar macht; gegen Sch\u00f6nheitsindustrien, die Unsicherheit verkaufen; gegen eine Gesellschaft, die S\u00fcchtige verurteilt statt unterst\u00fctzt.</p>
          <p class="vb-intro">Dieser Zorn ist nicht destruktiv. Er ist reinigend. Er r\u00e4umt auf. Die SX1 ertr\u00e4gt keine Heuchelei &ndash; und sie schweigt auch nicht dar\u00fcber. Was Jamie Lee Curtis von vielen anderen unterscheidet: Sie zeigt den Zorn und die W\u00e4rme gleichzeitig. Nicht abwechselnd, sondern zusammen. Die Mamba und der Zweierfl\u00fcgel sind kein Widerspruch.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Oscar und das Geschenk der sp\u00e4ten Bl\u00fcte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2023 gewann Jamie Lee Curtis den Oscar als beste Nebendarstellerin f\u00fcr <em>Everything Everywhere All at Once</em> &ndash; im Alter von 64 Jahren, nach fast f\u00fcnfzig Jahren Karriere. Es war ihr erster Oscar. Ihre Dankesrede war so, wie man es von einer SX1w2 erwartet: direkt, emotional, vollst\u00e4ndig pr\u00e4sent. Sie weinte. Sie lachte. Sie sprach \u00fcber ihre Eltern, ihre N\u00fcchternheit, ihre Familie.</p>
          <p class="vb-intro">Dieser Moment ist das Symbol ihres Lebensweges: nicht fr\u00fch und gl\u00e4nzend, sondern gereift, echt und vollst\u00e4ndig. Die Schwarze Mamba braucht keine B\u00fchne, um sich zu beweisen &ndash; aber wenn die B\u00fchne kommt, ist sie bereit. Und wenn sie spricht, meint sie es.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Echtheit als Einladung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Jamie Lee Curtis der Welt gegeben hat, l\u00e4sst sich in einem Satz zusammenfassen: Sie hat bewiesen, dass man sich nicht verbiegen muss, um zu bestehen. Nicht in Hollywood, nicht in der \u00d6ffentlichkeit, nicht im Alter. Das ist das Geschenk der SX1w2: das Feuer, das nicht erlischt, wenn es sich zeigt &ndash; sondern gerade dann am hellsten brennt.</p>
          <p class="vb-intro">Die Schwarze Mamba weicht nicht aus. Sie ist vollst\u00e4ndig da, vollst\u00e4ndig sie selbst &ndash; und der Zweierfl\u00fcgel sorgt daf\u00fcr, dass diese Vollst\u00e4ndigkeit anderen Mut macht. Nicht als Vorbild im klassischen Sinne, sondern als lebendiger Beweis: <em>Das Echte h\u00e4lt l\u00e4nger als der Schein.</em></p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx1", label:"SX1 \u2013 Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-leonardo-dicaprio", label:"Portr\u00e4t: Leonardo DiCaprio (SX1w2)"},
        {route:"beruehmte-christoph-waltz", label:"Portr\u00e4t: Christoph Waltz (SE1w2)"},
        {route:"krankheitsportraets-jamie-lee-curtis", label:"Krankheitsportr\u00e4t: Jamie Lee Curtis (SX1w2) \u2013 Opiatabh\u00e4ngigkeit"},
      ])}
    </div>
  `);
}

export function johannSebastianBachPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-johann-sebastian-bach-portrait.jpg" alt="Johann Sebastian Bach" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johann Sebastian Bach</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel · Kontratyp der Eins</p>
        <p class="krim-portrait-subtitle">Deutscher Komponist und Organist, 1685–1750 – Tierentsprechung: Schwarze Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> wirkt nach außen unauffällig, fast zurückgezogen – bis sie sich in ihrer Integrität verletzt sieht. Dann reagiert sie mit einer Präzision und Kompromisslosigkeit, die niemanden im Zweifel lässt. Johann Sebastian Bach trug genau dieses Doppelgesicht: ein ganzes Leben lang der stille, pflichtbewusste Kirchenmusiker nach außen – und ein Mann, der keine Sekunde zögerte, wenn seine musikalischen Überzeugungen infrage gestellt wurden.</p>
          <p class="vb-intro">Der deutsche Komponist Johann Sebastian Bach wuchs, früh verwaist – beide Eltern starben vor seinem zehnten Geburtstag –, bei seinem älteren Bruder Johann Christoph auf, der ihm den Zugang zu einer wertvollen Notensammlung verweigerte. Der junge Bach kopierte sie heimlich, monatelang, bei Mondlicht – ein früher Beleg für die Inbrunst, mit der er sich das aneignete, was ihm rechtmäßig zustand, koste es, was es wolle, selbst die eigenen Augen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Inbrunst und der Kontratyp</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> ist der <strong>Kontratyp der Eins</strong> – der Subtyp, der am wenigsten nach Moralapostel aussieht und es doch am kompromisslosesten ist. Naranjo nannte diesen Subtyp <em>Zeal</em> – Inbrunst: ein brennendes Verlangen, dem Vollkommenen möglichst nahezukommen, ungefilterter und direkter als bei jedem anderen Einser-Subtyp. Bach lebte diese Inbrunst nicht in Worten, sondern in einer schier unerschöpflichen schöpferischen Intensität – über 1000 erhaltene Werke, oft eine vollständige Kantate pro Woche über Jahre hinweg.</p>
          <p class="vb-intro">Mit 20 Jahren wanderte er von Arnstadt aus rund 400 Kilometer zu Fuß nach Lübeck, um den berühmten Organisten Dieterich Buxtehude spielen zu hören – und blieb, statt der genehmigten vier Wochen, gleich vier Monate, sein Amt in Arnstadt und die Konsequenzen bereitwillig riskierend. Das ist die sexuelle Eins: Wenn etwas des vollen Einsatzes würdig ist, gibt es kein halbherziges Maß.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Beharrlichkeit hinter dem Feuer</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> verleiht der Intensität der sexuellen Eins eine eigentümliche Ausdauer – ein stilles, fast unauffälliges Beharren, das sich nicht durch Widerstand entmutigen lässt. 1717, in Weimar, verlangte Bach so hartnäckig seine Entlassung aus dem Dienst des Herzogs Wilhelm Ernst, um eine bessere Stelle in Köthen anzutreten, dass dieser ihn kurzerhand einen Monat lang einsperren ließ. Bach gab nicht nach – und trat nach seiner Freilassung, unehrenhaft entlassen, die neue Stelle trotzdem an.</p>
          <p class="vb-intro">Diese Beharrlichkeit trug ihn auch durch 27 Jahre als Thomaskantor in Leipzig, ein Amt, das er trotz permanenter Reibung mit dem Stadtrat nie aufgab, sondern von innen heraus, Woche für Woche, mit neuer Musik füllte. Der Neunerflügel hält die Eins nicht zurück – er verankert ihr Feuer an einem Ort, bis die Aufgabe restlos durchdrungen ist.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn als moralisches Urteil</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins heißt <strong>Zorn</strong> – und bei der SX1w9 entlädt er sich dort, wo die eigenen hohen Ansprüche verletzt werden. 1705, noch in Arnstadt, beschimpfte Bach einen Fagottisten namens Geyersbach als "Zippelfagottisten" (Lumpen-Fagottisten), weil dieser seine Orgelbegleitung kritisiert hatte – der Streit eskalierte zu einer Schlägerei auf offener Straße, für die sich Bach vor dem Konsistorium rechtfertigen musste. Auch seine Chorleitung wurde gerügt: Er ließ die Choräle mit derart kunstvollen, "wunderlichen Variationen" verzieren, dass die Gemeinde nicht mehr mitsingen konnte – ein früher Beleg dafür, dass Bach künstlerische Perfektion selten dem Konsens unterordnete.</p>
          <p class="vb-intro">In Leipzig setzte sich dieses Muster fort: Sein Beschwerdedokument "Entwurff einer wohlbestallten Kirchenmusic" (1730) listet schonungslos die Missstände auf, unter denen seine Musik nach seiner Auffassung litt – zu wenige, zu schlecht ausgebildete Musiker, mangelnde Unterstützung des Rates. Kein privater Groll, sondern ein sachliches, kompromissloses Urteil darüber, was der Sache – der Musik zur Ehre Gottes – zustand.</p>
        </blockquote>

        <h2 class="vb-section">5. Soli Deo Gloria: Inbrunst als geistliche Disziplin</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Über viele seiner Manuskripte schrieb Bach die Kürzel "J.J." (Jesu Juva – Jesus, hilf) an den Anfang und "S.D.G." (Soli Deo Gloria – Allein Gott die Ehre) an das Ende. Das war keine fromme Floskel, sondern der Kern seiner sexuellen Eins: Musik war für ihn kein Ausdruck des eigenen Genies, sondern eine geistliche Pflicht, die es mit äußerster Genauigkeit zu erfüllen galt. Perfektion war für Bach nicht Ehrgeiz, sondern Gottesdienst.</p>
          <p class="vb-intro">Diese Ernsthaftigkeit übertrug sich auch auf seine Familie: Mit zwei Ehefrauen hatte er 20 Kinder, von denen er mehrere selbst rigoros im Komponieren unterrichtete – Carl Philipp Emanuel, Wilhelm Friedemann und Johann Christian Bach wurden später selbst bedeutende Komponisten. Der Neunerflügel zeigt sich hier in der stillen, häuslichen Konstanz eines Familienlebens, das dem lauten öffentlichen Ringen um seine Ämter diametral entgegenstand.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Unbeugsame, der zu Lebzeiten kaum erkannt wurde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Zu Lebzeiten galt Bach vor allem als hervorragender Organist, weniger als der Komponist, als den ihn die Nachwelt kennt. Erst 1829, fast 80 Jahre nach seinem Tod, brachte der junge Felix Mendelssohn Bartholdy die Matthäus-Passion wieder zur Aufführung und löste damit die Bach-Renaissance aus, die bis auf den heutigen Tag anhält. Der stille Kirchenmusiker aus Leipzig wurde postum zu dem Maßstab, an dem sich Generationen von Komponisten – darunter Beethoven (SX6w5) und Brahms (SE9w8) – maßen.</p>
          <p class="vb-intro">Das Vermächtnis der SX1w9 liegt genau in dieser Spannung: eine Inbrunst, die keine Anerkennung brauchte, um sich vollständig zu geben, und ein Beharren, das genau wusste, dass die eigentliche Prüfung nicht der Applaus der Zeitgenossen, sondern die Musik selbst war. Die Schwarze Mamba, die niemand fürchten musste, außer derjenige, der ihre Maßstäbe verriet.</p>
        </blockquote>

        <p class="vb-intro">Die über Jahre fortschreitende Erblindung und die beiden missglückten Augenoperationen kurz vor seinem Tod 1750 werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-johann-sebastian-bach">Krankheitsporträt zu Bach</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"krankheitsportraets-johann-sebastian-bach", label:"Krankheitsporträt: Johann Sebastian Bach (SX1w9)"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8) – von Bachs Formstrenge geprägt"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Porträt: Ludwig van Beethoven (SX6w5)"},
        {route:"beruehmte-wolfgang-amadeus-mozart", label:"Porträt: Wolfgang Amadeus Mozart (SE2w3) – studierte seine Fugenkunst"},
        {route:"subtype/sx1", label:"SX1 – Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-udo-lindenberg", label:"Porträt: Udo Lindenberg (SX1w9)"},
      ])}
    </div>
  `);
}

export function kamalaHarrisPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-kamala-harris-portrait.jpg" alt="Kamala Harris" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kamala Harris</p>
        <p class="krim-portrait-typ">SO2w3 &middot; Sozialer Typ 2 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Politikerin, ehem. Vizepr\u00e4sidentin der USA, geb. 1964 &ndash; Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Golden Retriever</strong> ist das Tier der sozialen Zwei &ndash; ein Tier, das Zugeh\u00f6rigkeit sucht, indem es sich f\u00fcr die Gemeinschaft einsetzt. Freundlich, engagiert, auf Verbindung ausgerichtet. Der Golden Retriever will gebraucht werden &ndash; nicht von einem Einzelnen, sondern von vielen. Er l\u00e4uft voraus, schaut zur\u00fcck, sammelt die Gruppe ein. Und wenn es hart auf hart kommt, zeigt sich, dass hinter der Warmherzigkeit ein z\u00e4her Wille steckt.</p>
          <p class="vb-intro">Die US-amerikanische Politikerin Kamala Harris, geboren 1964 in Oakland als Tochter einer indischen Krebsforscherin und eines jamaikanischen \u00d6konomen, wuchs in einem Elternhaus auf, das von B\u00fcrgerrechtsaktivismus gepr\u00e4gt war &ndash; ihre Mutter nahm sie schon als Kleinkind zu Demonstrationen mit. Aus dieser fr\u00fchen Pr\u00e4gung wurde eine Karriere, die sich fast l\u00fcckenlos um eine Frage drehte: Wie kann ich f\u00fcr die Gemeinschaft wirksam werden?</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Zwei: Dienst als politische Berufung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Zwei (SO2)</strong> richtet die Energie der Zwei nicht auf einzelne pers\u00f6nliche Bindungen, sondern auf das gr\u00f6\u00dfere Feld: Gemeinschaft, \u00d6ffentlichkeit, gesellschaftliche Wirkung. Naranjo nannte diesen Subtyp <em>Ambition</em> &ndash; nicht Ehrgeiz um seiner selbst willen, sondern der Antrieb, durch Einfluss und Sichtbarkeit mehr f\u00fcr viele bewirken zu k\u00f6nnen. Die SO2 fragt: <em>Wie kann ich in dieser Gemeinschaft unentbehrlich werden?</em></p>
          <p class="vb-intro">Kamala Harris' gesamter Werdegang folgt dieser Logik: Staatsanw\u00e4ltin, Attorney General von Kalifornien, US-Senatorin, Vizepr\u00e4sidentin. Sie hat sich immer wieder f\u00fcr \u00c4mter entschieden, in denen sie unmittelbar f\u00fcr andere handeln konnte &ndash; als Ankl\u00e4gerin f\u00fcr Opfer, als Senatorin f\u00fcr W\u00e4hlerinnen und W\u00e4hler, als Vizepr\u00e4sidentin f\u00fcr ein ganzes Land. Ihr Wahlkampfmotto <em>For the People</em>, das sie aus ihrer Zeit als Staatsanw\u00e4ltin \u00fcbernahm, bringt die SO2-Haltung auf den Punkt: Handeln im Namen der Gemeinschaft, nicht im eigenen.</p>
          <p class="vb-intro">Auch ihre Art, \u00f6ffentlich aufzutreten &ndash; das Lachen, die Umarmungen, das Bed\u00fcrfnis, mit m\u00f6glichst vielen Menschen pers\u00f6nlich in Kontakt zu treten &ndash; ist typische SO2-Energie. Der Golden Retriever bellt nicht von der B\u00fchne herab. Er geht ins Publikum, sch\u00fcttelt H\u00e4nde, h\u00f6rt zu.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Wirksamkeit als Beweis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> gibt der sozialen Zwei etwas Entscheidendes: den Antrieb zur sichtbaren Leistung, zum messbaren Erfolg, zum Beweis, dass die eigene Arbeit wirkt. Eine SO2 mit schwach ausgeprägtem Dreierflügel könnte sich im Dienst an anderen verlieren. Ein stark ausgeprägter Dreierflügel setzt Ziele, verlangt Ergebnisse, will ankommen und nicht nur unterwegs sein.</p>
          <p class="vb-intro">Bei Kamala Harris zeigt sich das in einer Reihe historischer Premieren: erste Frau, erste schwarze und erste Person s\u00fcdasiatischer Abstammung als Attorney General von Kalifornien, als US-Senatorin aus Kalifornien in dieser Kombination, als Vizepr\u00e4sidentin der Vereinigten Staaten. Der Dreierfl\u00fcgel l\u00e4sst sich nicht mit dem zweiten Platz zufriedengeben &ndash; er fragt: Wie weit kann das noch gehen? Wer kann davon noch profitieren?</p>
          <p class="vb-intro">Dieser Fl\u00fcgel hat auch seinen Preis. Kritiker warfen Harris w\u00e4hrend ihrer Zeit als Staatsanw\u00e4ltin vor, zu sehr auf harte Bilanzen gesetzt zu haben &ndash; Verurteilungsquoten, H\u00e4rte gegen\u00fcber Bew\u00e4hrungsverst\u00f6\u00dfen &ndash; Themen, die sie sp\u00e4ter selbst kritisch reflektierte. Der Dreierfl\u00fcgel der SO2 kann Erfolg mit Wirksamkeit verwechseln, auch dort, wo F\u00fcrsorge eigentlich mehr Nachsicht verlangt h\u00e4tte.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sozialen Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO2w3 ist ihre F\u00e4higkeit, echtes Engagement mit strategischer Wirksamkeit zu verbinden. Kamala Harris hat als Staatsanw\u00e4ltin Programme zur Resozialisierung junger Erstt\u00e4ter aufgebaut, sich f\u00fcr Verbraucherschutz und gegen Hypothekenbetrug eingesetzt &ndash; Themen, die selten Schlagzeilen machen, aber unmittelbar Menschen helfen. Das ist die SO2 in ihrer konstruktivsten Form: Wirkung, die nicht auf Applaus wartet.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; das tiefe Bed\u00fcrfnis, gebraucht und unentbehrlich zu sein. Bei der SO2w3 \u00e4u\u00dfert sich das als der Druck, jede Rolle perfekt auszuf\u00fcllen, jede Erwartung zu erf\u00fcllen &ndash; als Vizepr\u00e4sidentin, als Pr\u00e4sidentschaftskandidatin, als Symbolfigur f\u00fcr mehrere gesellschaftliche Gruppen gleichzeitig. Diese Vielfachbelastung an Repr\u00e4sentation ist eine reale Last, die viele SO2w3-Pers\u00f6nlichkeiten in \u00f6ffentlichen \u00c4mtern tragen &ndash; und die selten offen angesprochen wird.</p>
          <p class="vb-intro">Kritiker haben Harris vorgeworfen, ihre Positionen je nach politischem Klima anzupassen. Aus der SO2-Perspektive l\u00e4sst sich das auch anders lesen: der best\u00e4ndige Versuch, die Verbindung zu m\u00f6glichst vielen unterschiedlichen Gruppen nicht zu verlieren &ndash; eine St\u00e4rke, die zur Schw\u00e4che wird, wenn die eigene Klarheit dar\u00fcber verloren geht, wof\u00fcr man selbst steht.</p>
        </blockquote>

        <h2 class="vb-section">5. Die Kandidatur 2024: Dienst unter Zeitdruck</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Als Pr\u00e4sident Biden im Sommer 2024 seinen R\u00fcckzug aus dem Rennen erkl\u00e4rte, \u00fcbernahm Kamala Harris innerhalb weniger Tage die F\u00fchrung der demokratischen Kampagne &ndash; ohne Vorwarnung, ohne Vorbereitungszeit, unter enormem \u00f6ffentlichem Druck. F\u00fcr eine SO2w3 ist das die ultimative Bew\u00e4hrungsprobe: die Gemeinschaft ruft, und sie antwortet, egal wie kurz die Frist ist.</p>
          <p class="vb-intro">Ihre Kampagne war gepr\u00e4gt von einer auff\u00e4lligen Betonung von Gemeinschaft und Zusammenhalt &ndash; <em>We are not going back</em> &ndash; und von unerm\u00fcdlichem pers\u00f6nlichem Einsatz, Kundgebung um Kundgebung. Der Golden Retriever mit Dreierfl\u00fcgel l\u00e4uft auch dann noch, wenn die Kr\u00e4fte l\u00e4ngst ersch\u00f6pft sein m\u00fcssten &ndash; weil das Rudel es braucht.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Wirksamer Dienst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Kamala Harris in die amerikanische Politik eingebracht hat, l\u00e4sst sich nicht auf Wahlergebnisse reduzieren: die \u00d6ffnung h\u00f6chster \u00c4mter f\u00fcr Menschen, die zuvor nicht dort vertreten waren, und eine Vorstellung von politischem Dienst, die pers\u00f6nliche N\u00e4he zu den Menschen nie aufgeben wollte, selbst auf der gr\u00f6\u00dftm\u00f6glichen B\u00fchne.</p>
          <p class="vb-intro">Das ist das Geschenk der SO2w3: Engagement, das sich nicht mit stillem Wirken zufriedengibt, sondern sichtbar werden will, damit es mehr Menschen erreicht. Der Golden Retriever, der nicht nur wedelt, sondern rennt &ndash; weil er wei\u00df, dass irgendwo am anderen Ende jemand auf ihn wartet.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so2", label:"SO2 \u2013 Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-nina-chuba", label:"Portr\u00e4t: Nina Chuba (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Portr\u00e4t: Will Smith (SO2w3)"},
        {route:"beruehmte-barack-obama", label:"Portr\u00e4t: Barack Obama (SO2w1)"},
        {route:"beruehmte-eva-peron", label:"Portr\u00e4t: Eva Per\u00f3n (SO2w3)"},
        {route:"beruehmte-truman-capote", label:"Portr\u00e4t: Truman Capote (SO2w3)"},
        {route:"beruehmte-mira-murati", label:"Portr\u00e4t: Mira Murati (SO2w3)"},
      ])}
    </div>
  `);
}

export function krisMarshallPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-kris-marshall-portrait.jpg" alt="Kris Marshall – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Kris Marshall</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexueller Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler, geb. 1973 &ndash; Tierentsprechung: Faultier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Faultier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Faultier</strong> ist das Tier des sexuellen Typs 9 &ndash; ein Tier, das sich, wo immer es hingesetzt wird, mit genau diesem einen Ast vollständig verbindet, statt ständig einen besseren zu suchen. Es passt sich nicht an die Umgebung an, um aufzufallen &ndash; es verbindet sich mit ihr, bis kaum noch ein Unterschied zwischen ihm und dem Baum besteht.</p>
          <p class="vb-intro">Der britische Schauspieler Kris Marshall, geboren am 1. April 1973 in Bath, Somerset, musste diese Fähigkeit zur vollständigen Verbindung schon als Kind immer wieder neu aufbringen. Sein Vater Glyn Marshall war Navigator bei der Royal Air Force, brachte es bis zum Squadron Leader und diente im Queen&#8217;s Flight &ndash; ein Beruf, der die Familie durch wechselnde Postierungen führte, unter anderem nach Hongkong und Kanada. Bis zu seinem zehnten Lebensjahr sprach Kris mit kanadischem Akzent. Als er zwölf war, ließen sich seine Eltern scheiden; anschließend besuchte er die Wells Cathedral School als Internatsschüler &ndash; wieder ein neuer Ort, wieder eine neue, diesmal sehr strikt geordnete Umgebung, in die er sich einfügen musste.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Neun: Wenige Bindungen, dafür sehr lange gehalten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Neun (SX9)</strong> ist nach Naranjo der Subtyp der <em>Vereinigung</em>: die Sehnsucht, sich nicht oberflächlich zu beteiligen, sondern in einer einzigen Bindung, einem einzigen Werk vollständig aufzugehen. Bei einem Kind, das immer wieder neue Länder, neue Schulen, neue Bezugspersonen kennenlernen musste, ist eine solche Sehnsucht nach dem einen, verlässlichen Ankerpunkt keine abstrakte Typtheorie, sondern eine sehr nachvollziehbare Reaktion auf eine unstete Kindheit.</p>
          <p class="vb-intro">Genau dieses Muster zieht sich durch Kris Marshalls gesamte Karriere: Von 2000 bis 2011 spielte er in der BBC-Sitcom <em>My Family</em> über elf Jahre hinweg denselben Charakter, Nick Harper. Parallel dazu war er über ein Jahrzehnt lang das Gesicht derselben britischen Werbekampagne, als Praktikant &bdquo;Kevin&ldquo; für BT/EE. Auch <em>Death in Paradise</em>, in dem er von 2014 bis 2017 den Ermittler DI Humphrey Goodman spielte, hielt er vier Staffeln lang durch, bevor er sich &ndash; nach eigenen, öffentlich bekannten Angaben &ndash; aus familiären Gründen von der Serie verabschiedete. Wo andere Schauspieler bewusst zwischen vielen Rollen wechseln, um ihre Bandbreite zu zeigen, wählt Marshall wenige Bindungen &ndash; und hält sie dafür ungewöhnlich lange.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Die stille Ordnung nach dem Auseinanderfallen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eine SX9 mit schwächer ausgeprägtem Einserflügel hätte die vielen Brüche der Kindheit &ndash; wechselnde Länder, Scheidung der Eltern, Internat &ndash; vermutlich mit reiner Anpassungsbereitschaft durchlebt: sich einfach treiben lassen, ohne inneren Halt. Bei Marshall trat stattdessen früh etwas anderes hervor, das sich bis heute durch sein öffentliches Auftreten zieht: eine stille, unaufgeregte Disziplin, ein Bedürfnis nach klarer eigener Ordnung, gerade weil die äußeren Umstände so oft wechselten. Das strikt geregelte Internatsleben nach der Scheidung fiel bei ihm nicht auf unfruchtbaren Boden, sondern auf eine Persönlichkeit, die genau diese Struktur brauchte, um sich selbst zu halten.</p>
          <p class="vb-intro">Im öffentlichen Auftreten zeigt sich derselbe Zug: Kris Marshall gilt im britischen Showbusiness als auffällig zurückhaltend &ndash; kaum Homestorys, kaum Klatschspalten-Präsenz, kaum das übliche Interview-Karussell rund um große Rollen. Das ist kein Ausweichen aus Angst, sondern ein selbst gesetzter Maßstab: nicht mehr von sich preisgeben, als nötig ist. Und wenn eine Grenze erreicht ist &ndash; wie beim Punkt, an dem die Dreharbeiten in der Karibik mit der eigenen Familie kollidierten &ndash; wird sie nicht lange verhandelt, sondern klar gezogen und die Konsequenz ruhig vollzogen. Das ist der Einserflügel: kein lautes Prinzip, sondern eine leise, aber unumstößliche innere Linie.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Rolle als Echo: Humphrey Goodman</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Wie oft bei Schauspielern, die eine Rolle spielen, die ihnen besonders gut liegt, lässt sich auch bei Kris Marshalls bekanntester Figur, DI Humphrey Goodman in <em>Death in Paradise</em>, eine Resonanz zur eigenen Grundhaltung erkennen &ndash; nicht als Identität, aber als Echo. Goodman wirkt äußerlich chaotisch, stolpert durch die Hitze der Karibik im vollen Anzug, verliert ständig Gegenstände. Doch in der Sache selbst bleibt er unbestechlich genau: Er löst jeden Fall zu Ende, lässt sich nicht mit einer bequemen, halbfertigen Lösung abspeisen, besteht auf Gerechtigkeit für Verdächtige und Opfer gleichermaßen.</p>
          <p class="vb-intro">Diese Kombination &ndash; äußere Unordnung bei gleichzeitig unverrückbarer innerer Gründlichkeit &ndash; ist die Rolle als Beleg, nicht als Ersatz für die Person: Sie zeigt dasselbe Muster, das sich in Marshalls tatsächlicher Karriere klarer zeigt als in jeder einzelnen Figur &ndash; die Fähigkeit, sich äußerlich unauffällig zu verhalten, während innen ein sehr genauer, sehr beständiger Maßstab regiert.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX9w1 ist ihre <strong>Fähigkeit, aus wiederholter äußerer Instabilität eine verlässliche innere Ordnung zu bauen</strong> &ndash; und diese Ordnung dann über Jahrzehnte durchzuhalten, ohne dass sie zur Starre wird. Marshalls elf Jahre bei <em>My Family</em>, sein Jahrzehnt als &bdquo;Kevin&ldquo;, seine vier Staffeln als Humphrey Goodman zeigen dieselbe Konstante: Verlässlichkeit, die nicht auf Zwang beruht, sondern auf einem selbst gewählten inneren Maßstab.</p>
          <p class="vb-intro">Der Schatten zeigt sich in der Kehrseite dieser früh erlernten Selbstdisziplin: Wer als Kind lernte, sich in jeder neuen Umgebung durch innere Ordnung zu schützen, tut sich womöglich schwer, Kontrolle abzugeben oder sich auf echtes Chaos einzulassen. Die Zurückhaltung, die im Showbusiness als Stärke wirkt, kann im Privaten auch bedeuten, dass Nähe erst zugelassen wird, wenn die eigene Ordnung sie nicht gefährdet.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Faultier, das die Familie wählt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Kris Marshall verließ <em>Death in Paradise</em> 2017 nach eigenen Angaben, um mehr Zeit mit seiner Familie zu verbringen &ndash; und wiederholte damit, im Erwachsenenleben, dieselbe Bewegung, die ihn als Kind geprägt hatte: dort Stabilität zu suchen, wo sie am meisten zählt, statt sich von äußerem Erfolg forttragen zu lassen. Wo sein eigener Vater durch RAF-Postierungen oft abwesend war, entschied sich Marshall bewusst gegen dasselbe Muster.</p>
          <p class="vb-intro">Das Faultier hängt nicht, weil es sich nicht bewegen könnte &ndash; es hängt, weil es sich, einmal angekommen, ganz auf seine Umgebung einlässt. Kris Marshalls Leben liest sich wie dieses Bild in Menschengestalt: ein Kind, das lernen musste, sich immer wieder neu zu verwurzeln, und ein Erwachsener, der aus dieser Erfahrung eine stille, sehr beständige Ordnung gemacht hat &ndash; wenige Bindungen, dafür welche, die halten.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/sx9", label:"SX9 – Das Faultier: Subtyp-Profil"},
          {route:"beruehmte-keanu-reeves", label:"Portrait: Keanu Reeves (SX9w1)"},
          {route:"beruehmte-jane-goodall", label:"Portrait: Dr. Jane Goodall (SX9w1)"},
          {route:"beruehmte-craig-foster", label:"Porträt: Craig Foster (SX9w1)"},
          {route:"beruehmte-sophie-marceau", label:"Portrait: Sophie Marceau (SX9w1)"},
          {route:"beruehmte-ed-sheeran", label:"Portrait: Ed Sheeran (SX9w1) – dieselbe ruhige Ausstrahlung"},
          {route:"beruehmte-mads-mikkelsen", label:"Porträt: Mads Mikkelsen (SX9w1)"},
        ])}
      </div>
    </div>
  `);
}

export function lisaAntoniPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-lisa-antoni-portrait.jpg" alt="Lisa Antoni – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lisa Antoni</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Österreichische Musical-Darstellerin, geb. in Wien &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; ein Tier, das seine ganze Kraft dort entfaltet, wo es sich sicher und verwurzelt fühlt. Lisa Antoni, in Wien geboren und aufgewachsen, fand diesen sicheren Grund im Wiener Musicaltheater – ihr erster großer Auftritt als Mary Vetsera in der deutschsprachigen Erstaufführung von <em>Rudolf – Affaire Mayerling</em> wurde zum Startpunkt einer Karriere, die eng mit ihrer Heimatstadt verbunden blieb.</p>
          <p class="vb-intro">Der Cast-Mitschnitt dieser Produktion erreichte in Österreich Platin-Status – ein früher, konkreter Beleg dafür, dass Antonis Stimme und Präsenz ein breites Publikum erreichten, noch bevor sie zu einer der gefragtesten Musical-Darstellerinnen im deutschsprachigen Raum wurde.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Fürsorge durch verlässliches Handwerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> nennt Naranjo <em>Me First</em>: Sie sichert sich Nähe und Zugehörigkeit durch konkrete, verlässliche Leistung im vertrauten Umfeld, nicht durch große öffentliche Gesten. Antonis Karriere liest sich wie ein Beleg für diese Haltung – Rollen in <em>Into the Woods</em>, <em>Rebecca</em>, <em>The Witches of Eastwick</em>, <em>Next to Normal</em>, <em>Showboat</em>, <em>Artus – Excalibur</em>, <em>The Addams Family</em> und <em>How to Succeed in Business Without Really Trying</em> in Österreich, Deutschland und der Schweiz.</p>
          <p class="vb-intro">Statt sich auf eine einzelne große Rolle zu konzentrieren, baute sie über Jahre ein breites, verlässliches Repertoire innerhalb der deutschsprachigen Musicalszene auf – Fürsorge für das eigene Handwerk, ausgedrückt durch stetige, hochwertige Arbeit statt durch spektakuläre Einzelauftritte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Die große Bühne als sichtbarer Höhepunkt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Zwei den Antrieb, aus einer soliden, breiten Basis heraus doch die großen, öffentlichkeitswirksamen Rollen zu suchen. Für Antoni war das die Rolle der Christine Daaé in <em>Das Phantom der Oper</em> am Ronacher Theater in Wien – eine der bekanntesten weiblichen Hauptrollen im internationalen Musicalrepertoire, auf einer der größten Bühnen ihrer Heimatstadt.</p>
          <p class="vb-intro">Diese Rolle bündelt beides: die verlässliche, handwerkliche Basis eines breiten Repertoires und den sichtbaren, öffentlich anerkannten Erfolg einer der begehrtesten weiblichen Musicalrollen überhaupt.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der selbsterhaltenden Zwei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE2w3 liegt in der Fähigkeit, aus stetiger, verlässlicher Arbeit im vertrauten Umfeld heraus auch die großen, sichtbaren Rollen zu erreichen – Antonis Weg von der ersten großen Rolle in Wien bis zur Christine Daaé zeigt eine Karriere, die sich Schritt für Schritt aus solidem Handwerk heraus aufbaute.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> &ndash; die Überzeugung, für das Gelingen einer Produktion durch die eigene verlässliche Leistung unentbehrlich zu sein. Bei der SE2w3 kann sich das mit dem Wunsch verbinden, in möglichst vielen verschiedenen, öffentlich sichtbaren Rollen zu bestehen – eine Stärke, die zu einem breiten Repertoire führt, aber auch die Frage aufwirft, wie viel Raum für die eine, ganz eigene Signaturrolle bleibt.</p>
        </blockquote>

        <h2 class="vb-section">5. Das Werk: Von Mary Vetsera zu Christine Daaé</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von der Mary Vetsera in <em>Rudolf – Affaire Mayerling</em> über ein breites Repertoire im deutschsprachigen Musicaltheater bis zur Christine Daaé am Ronacher zieht sich ein roter Faden durch Antonis Werk: verlässliche, handwerklich fundierte Arbeit, die sich Schritt für Schritt zu den größten Rollen des Genres vorarbeitete.</p>
          <p class="vb-intro">Das Flusspferd verlässt sein angestammtes Gewässer nicht, um zu gefallen – es vertieft seine Verbindung dazu, mit jeder neuen Rolle. Lisa Antonis Weg von der Wiener Musicalbühne zu einer der bekanntesten Frauenrollen des internationalen Repertoires veranschaulicht dieses Prinzip par excellence: Erfolg, der aus stetiger Verlässlichkeit erwächst, nicht aus einem einzigen großen Sprung.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-nate-dogg", label:"Portrait: Nate Dogg (SE2w3)"},
        {route:"beruehmte-mickey-rourke", label:"Portrait: Mickey Rourke (SE2w3)"},
      ])}
    </div>
  `);
}

export function marieAgnesStrackZimmermannPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marie-agnes-strack-zimmermann-portrait.jpg" alt="Marie-Agnes Strack-Zimmermann" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marie-Agnes Strack-Zimmermann</p>
        <p class="krim-portrait-typ">SX1w9 &middot; Sexueller Typ 1 mit Neunerfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Politikerin (FDP), geb. 1958 &ndash; Bundeswehr, Ukraine, Europa &ndash; Tierentsprechung: Schwarze Mamba</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Schwarze Mamba</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Schwarze Mamba</strong> ist das Tier der sexuellen Eins &ndash; blitzschnell, pr\u00e4zise und vollkommen kompromisslos. Sie greift nicht aus Aggression an, sondern aus einem inneren Gesetz heraus: Was falsch ist, wird benannt. Was unecht ist, wird abgelehnt. Was stimmt, wird verteidigt &ndash; mit allem, was zur Verf\u00fcgung steht.</p>
          <p class="vb-intro">Die deutsche Politikerin Marie-Agnes Strack-Zimmermann, geboren 1958 in D\u00fcsseldorf, ist eine der direktesten Politikerinnen, die der Deutsche Bundestag in den letzten Jahrzehnten erlebt hat. Als Vorsitzende des Verteidigungsausschusses wurde sie zum sch\u00e4rfsten \u00f6ffentlichen Mahner f\u00fcr eine ausreichende Ausstattung der Bundeswehr und f\u00fcr klare Unterst\u00fctzung der Ukraine &ndash; zu einem Zeitpunkt, als viele Politikerkollegen noch auf Ausgewogenheit setzten. Die Mamba wartet nicht, bis alle einverstanden sind.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Eins: Inbrunst als Antrieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Eins (SX1)</strong> richtet ihren Perfektionsanspruch nicht auf das eigene Umfeld oder die Gesellschaft als Ganzes, sondern auf Intensit\u00e4t: auf vollst\u00e4ndige Pr\u00e4senz, vollst\u00e4ndige Ehrlichkeit, vollst\u00e4ndige Konsequenz in dem, was sie als richtig erkennt. Naranjo nannte diesen Subtyp <em>Zeal</em> &ndash; Inbrunst: ein brennendes Verlangen, das Echte vom Falschen zu trennen.</p>
          <p class="vb-intro">Strack-Zimmermann hat dieses Muster in der politischen Arena ausgelebt wie kaum jemand sonst. Ihre Auftritte im Bundestag und in Talkshows sind f\u00fcr ihren direkten, kompromisslosen Ton bekannt &ndash; sie spricht nicht um den hei\u00dfen Brei, sie benennt. Sie hat keine Angst vor Unpopularit\u00e4t. Wenn sie \u00fcberzeugt ist, dass etwas falsch l\u00e4uft, sagt sie es &ndash; laut, klar, wiederholbar. Die SX1 ertr\u00e4gt keine halben Antworten auf echte Fragen.</p>
          <p class="vb-intro">Ihr Engagement f\u00fcr die Ukraine-Unterst\u00fctzung war von Anfang an nicht taktisch, sondern moralisch: ein Land wird angegriffen, eine Demokratie ist in Gefahr, und wer das sieht, muss handeln. Das ist keine Au\u00dfenpolitik. Das ist das innere Gesetz der sexuellen Eins.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\u00fcgel: Beharrlichkeit als zweite Kraft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\u00fcgel (w9)</strong> verleiht der sexuellen Eins eine Qualit\u00e4t, die auf den ersten Blick \u00fcberrascht: Ausdauer. Die Neun ist geduldig. Sie h\u00e4lt durch. Nicht weil sie gleichg\u00fcltig ist, sondern weil sie wei\u00df, dass manche Dinge Zeit brauchen &ndash; und dass Kontinuit\u00e4t oft mehr bewirkt als Dramatik.</p>
          <p class="vb-intro">Dieser Fl\u00fcgel erkl\u00e4rt, warum Strack-Zimmermann trotz aller Konfrontationsbereitschaft ihre Partei und Koalitionen nicht destabilisiert hat. Sie k\u00e4mpft &ndash; aber sie verwaltet den Kampf strategisch. Der Neunerfl\u00fcgel bringt eine gewisse Erdung in die Intensit\u00e4t der sexuellen Eins: nicht weicher, aber best\u00e4ndiger. Die Mamba, die nicht nur blitzschnell ist, sondern auch geduldig wartet, bis der Moment stimmt.</p>
          <p class="vb-intro">Diese Kombination &ndash; SX1-Feuer mit w9-Beharrlichkeit &ndash; macht sie zu einer politischen K\u00e4mpferin, die sich nicht verausgabt. Sie brennt, aber sie brennt gleichm\u00e4\u00dfig.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn als politisches Instrument</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins hei\u00dft <strong>Zorn</strong> &ndash; und bei der SX1w9 ist er zugleich scharf und kontrolliert. Strack-Zimmermann hat keine Scheu, in \u00f6ffentlichen Debatten die Stimme zu erheben, den Finger zu heben. Wenn sie im Bundestag den Eindruck hat, dass Unwahrheiten gesagt oder Verantwortung verweigert werden, dann kommt die Mamba.</p>
          <p class="vb-intro">Dieser Zorn ist nicht pers\u00f6nlich. Er ist prinzipienbasiert. Er richtet sich gegen das Falsche, nicht gegen die Person &ndash; auch wenn beides von au\u00dfen nicht immer leicht zu unterscheiden ist. Der Neunerfl\u00fcgel sorgt daf\u00fcr, dass der Zorn nicht unkontrolliert eskaliert, sondern an den richtigen Stellen platziert wird. Pr\u00e4zision statt Explosion.</p>
        </blockquote>

        <h2 class="vb-section">5. Europa als gr\u00f6\u00dferer Rahmen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2024 wechselte Strack-Zimmermann ins Europaparlament und \u00fcbernahm den Vorsitz des Verteidigungsausschusses &ndash; diesmal auf europ\u00e4ischer Ebene. Das ist kein Karriereschritt, das ist eine Konsequenz: Die sexuelle Eins, die erkannt hat, dass die Herausforderung gr\u00f6\u00dfer ist als eine nationale Arena.</p>
          <p class="vb-intro">Der Neunerfl\u00fcgel zeigt sich hier in seiner konstruktiven Seite: die F\u00e4higkeit, \u00fcber Grenzen hinaus zu denken, B\u00fcndnisse zu halten, Kontinuit\u00e4t zu bewahren. Die Mamba auf europ\u00e4ischer B\u00fchne &ndash; die Geschwindigkeit ist dieselbe, der Aktionsradius gr\u00f6\u00dfer.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Klarheit als Schutz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Marie-Agnes Strack-Zimmermann der politischen Debatte gibt, ist selten geworden: Klarheit. Nicht Vereinfachung &ndash; Klarheit. Die Bereitschaft zu sagen, was ist, auch wenn es unbequem ist. Die SX1w9 ertr\u00e4gt keine Unsch\u00e4rfe, wenn es ums Wesentliche geht.</p>
          <p class="vb-intro">Das ist das Geschenk der Schwarzen Mamba mit Neunerfl\u00fcgel: Sie bringt Feuer <em>und</em> Best\u00e4ndigkeit. Sie k\u00e4mpft &ndash; und sie h\u00e4lt durch. In einer Zeit, in der politische Positionen sich schnell drehen, ist das kein kleines Angebot.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/sx1", label:"SX1 \u2013 Die Schwarze Mamba: Subtyp-Profil"},
        {route:"beruehmte-queen-elizabeth-ii", label:"Portr\u00e4t: Queen Elizabeth II. (SE1w9)"},
        {route:"beruehmte-jamie-lee-curtis", label:"Portr\u00e4t: Jamie Lee Curtis (SX1w2)"},
      ])}
    </div>
  `);
}

export function michaelJacksonPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-jackson-portrait.jpg" alt="Michael Jackson – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Jackson</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Sänger, Tänzer &amp; Komponist, 1958–2009 – Tierentsprechung: Gürteltier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Gürteltier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Gürteltier</strong> ist das Tier des sozialen Typs 4 – gepanzert nach außen, weich im Inneren. Kaum ein Bild trifft Michael Jackson genauer: ein Künstler, der auf der Bühne unangreifbar wirkte – makellos choreografiert, in glitzernde Kostüme gehüllt, hinter einer Maske aus Perfektion – und der zugleich in Interviews immer wieder von tiefer Einsamkeit sprach.</p>
          <p class="vb-intro">Kein Musiker des 20. Jahrhunderts hat die Popkultur so vollständig neu definiert. Und kaum ein Musiker hat gleichzeitig so offen davon gesprochen, sich fremd zu fühlen – in der eigenen Familie, im eigenen Ruhm, in der eigenen Haut. Das Gürteltier zeigt der Welt seine Rüstung. Was darunter liegt, zeigt es fast niemandem.</p>
        </blockquote>

        <h2 class="vb-section">2. Scham als stille Triebkraft: Die gestohlene Kindheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>soziale Typ 4 (SO4)</strong> ist der Verstärkungstyp der Vier: Er trägt seine Leidenschaft des Neids nach innen – als <strong>Scham</strong>. Das Lebensgefühl der SO4 ist ein tiefes Mangelbewusstsein: Die anderen haben etwas Selbstverständliches, das mir fehlt. Bei Michael Jackson lässt sich dieses Gefühl bis in die früheste Kindheit zurückverfolgen.</p>
          <p class="vb-intro">Geboren 1958 in Gary, Indiana, als siebtes von neun Kindern, stand er mit fünf Jahren bereits auf der Bühne – zunächst mit seinen Brüdern in den Jackson 5, unter dem strengen, oft gewaltsamen Regime seines Vaters Joseph Jackson. Michael selbst beschrieb später wiederholt, wie er als Kind geschlagen und beschimpft wurde, wenn eine Choreografie nicht saß. Es gab kaum Raum für Spiel, für Freundschaften, für eine gewöhnliche Kindheit. Was andere Kinder selbstverständlich hatten, hatte er nie: <em>Ich habe nie wirklich Kind sein dürfen</em>, sagte er in mehreren Interviews. Genau das ist die Wunde der SO4 – nicht der Mangel an Erfolg, sondern der Mangel an etwas, das für alle anderen normal zu sein scheint.</p>
          <p class="vb-intro">Neverland, die Ranch, die er sich später als Erwachsener baute – mit Karussell, Zoo, Kino und Achterbahn –, lässt sich aus dieser Perspektive lesen als der Versuch, das nachzuholen, was in der eigenen Kindheit fehlte. Die SO4 sucht nicht Reichtum um seiner selbst willen. Sie sucht das, was sie nie hatte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Die Perfektion der Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> verleiht der sozialen Vier etwas, das sie allein nicht hätte: Bühnenpräsenz, Ehrgeiz, die Fähigkeit, aus innerem Schmerz makellose Leistung zu formen. Die SO4w3 fühlt die Scham – und tritt trotzdem auf, mit einer Präzision, die keinen Fehler duldet.</p>
          <p class="vb-intro">Michael Jacksons Karriere ist diese Verbindung in Reinform. <em>Thriller</em> (1982) wurde mit über 70 Millionen verkauften Exemplaren zum meistverkauften Album der Geschichte. Der Moonwalk, erstmals 1983 bei der Motown-25-Jubiläumsshow gezeigt, wurde zur Ikone. Jede Choreografie, jedes Musikvideo, jeder Bühnenauftritt war bis ins letzte Detail durchdacht – Proben von zehn, zwölf Stunden waren für ihn normal. Der Dreierflügel liefert die Disziplin und den Ehrgeiz, die Vier darunter liefert die Tiefe, die aus reiner Perfektion echte Kunst macht.</p>
          <p class="vb-intro">Doch die Bühne war für Jackson mehr als Beruf. Sie war der einzige Ort, an dem er sich sicher fühlte. <em>Wenn ich auf der Bühne bin, ist das der einzige Ort, an dem ich wirklich glücklich bin</em>, sagte er einmal. Für die SO4w3 ist der Applaus nicht Eitelkeit – er ist die kurzzeitige Linderung eines Gefühls, das sonst nie ganz verschwindet.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Preis der Sichtbarkeit: Bild und Verwandlung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Über die Jahrzehnte veränderte sich Jacksons äußeres Erscheinungsbild so grundlegend, dass es selbst zum Gesprächsthema wurde – mehrere Operationen an Nase und Kinn, eine zunehmend hellere Hautfarbe, die er später auf die Hautkrankheit <em>Vitiligo</em> zurückführte, eine Pigmentstörung, die er 1993 gegenüber Oprah Winfrey öffentlich machte. Die Öffentlichkeit reagierte über Jahre mit Spott statt mit Verständnis.</p>
          <p class="vb-intro">Für die soziale Vier ist das äußere Bild nie neutral. Es ist die sichtbare Oberfläche eines inneren Gefühls von Unzulänglichkeit – und der Versuch, genau dieses Gefühl von außen zu korrigieren. Je tiefer die Scham, desto größer der Drang, am eigenen Erscheinungsbild zu arbeiten, bis es endlich stimmt. Bei Jackson traf dieser Mechanismus auf eine beispiellose öffentliche Beobachtung: Jede Veränderung wurde fotografiert, kommentiert, verspottet – und verstärkte damit genau das Gefühl, nie richtig zu sein, das die Veränderung eigentlich lindern sollte.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO4w3 ist ihre Fähigkeit, aus tiefstem persönlichem Schmerz etwas zu schaffen, das Millionen Menschen berührt – und ihn zugleich in ein Anliegen zu verwandeln, das über die eigene Person hinausweist. Jackson gründete die Stiftung <em>Heal the World</em>, spendete nach Schätzungen mehrerer Quellen über seine Karriere hinweg hunderte Millionen Dollar an wohltätige Zwecke und setzte sich öffentlich für Kinder in Not ein. Für die SO4 ist das kein Widerspruch zur eigenen Bedürftigkeit, sondern ihre direkteste Ausdrucksform: das zu geben, was man selbst am meisten vermisst hat.</p>
          <p class="vb-intro">Der Schatten seines Lebens lässt sich nicht ausblenden: 1993 wurde erstmals der Vorwurf des sexuellen Missbrauchs eines Kindes gegen ihn erhoben, der Fall wurde außergerichtlich beigelegt, ohne dass eine Schuld festgestellt wurde. 2005 stand Jackson wegen ähnlicher Vorwürfe vor Gericht und wurde in allen Anklagepunkten freigesprochen. Nach seinem Tod erhoben zwei Männer in der Dokumentation <em>Leaving Neverland</em> (2019) erneut schwere Vorwürfe aus ihrer Kindheit. Die Wahrheit hinter diesen widersprüchlichen Darstellungen lässt sich im Rahmen dieses Porträts nicht klären – sie bleibt Gegenstand öffentlicher Auseinandersetzung. Was sich enneagrammatisch beschreiben lässt, ist lediglich das Muster: ein Mann, der sein Leben lang versuchte, die eigene verlorene Kindheit in der Nähe von Kindern nachzuholen – auf eine Weise, die für manche anrührend und für andere zutiefst beunruhigend war.</p>
        </blockquote>

        <h2 class="vb-section">6. Tod und Vermächtnis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Michael Jackson starb am 25. Juni 2009 in Los Angeles im Alter von 50 Jahren an akutem Herzstillstand, ausgelöst durch eine Überdosis des Narkosemittels Propofol, das ihm sein Leibarzt Conrad Murray zur Behandlung seiner Schlaflosigkeit verabreicht hatte – wenige Wochen vor Beginn seiner geplanten Comeback-Konzertreihe <em>This Is It</em> in London. Murray wurde 2011 wegen fahrlässiger Tötung verurteilt.</p>
          <p class="vb-intro">Was bleibt, ist ein musikalisches Erbe, das die Popkultur bis heute prägt, und eine Biografie, die zeigt, wie eng bei der sozialen Vier mit Dreierflügel Genie und Schmerz miteinander verwoben sein können. Das Gürteltier trug seine Rüstung bis zuletzt – glänzend, unangreifbar, bewundert von Millionen. Was darunter lag, blieb bis zum Schluss weitgehend verborgen.</p>
          <p class="vb-intro">Die fünfundzwanzigjährige Kette aus Schmerzmittelgabe, Schlaflosigkeit und schließlich tödlicher Propofol-Abhängigkeit wird ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Krankheitsporträt zu Jackson</a> gedeutet.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"krankheitsportraets-michael-jackson", label:"Krankheitsporträt: Michael Jackson (SO4w3)"},
          {route:"subtype/so4", label:"SO4 – Das Gürteltier: Subtyp-Profil"},
          {route:"beruehmte-til-schweiger", label:"Portrait: Til Schweiger (SO4w3)"},
          {route:"beruehmte-romy-schneider", label:"Portrait: Romy Schneider (SO4w3)"},
          {route:"beruehmte-cat-stevens", label:"Portrait: Cat Stevens / Yusuf Islam (SO4w3)"},
          {route:"beruehmte-hans-christian-andersen", label:"Portrait: Hans Christian Andersen (SO4w3)"},
          {route:"beruehmte-heinrich-heine", label:"Portrait: Heinrich Heine (SO4w3)"},
          {route:"beruehmte-fabian-kahl", label:"Portrait: Fabian Kahl (SO4w3)"},
          {route:"beruehmte-eddie-redmayne", label:"Portrait: Eddie Redmayne (SO4w3)"},
        ])}
      </div>
    </div>
  `);
}

export function napoleonBonapartePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-napoleon-bonaparte-portrait.jpg" alt="Napoleon Bonaparte" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Napoleon Bonaparte</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · Herztyp</p>
        <p class="krim-portrait-subtitle">1769–1821 – Feldherr, Kaiser der Franzosen, Gesetzgeber – Tierentsprechung: Golden Retriever</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Golden Retriever, der einen Kontinent umarmen wollte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Claudio Naranjo, der Begründer der modernen Enneagramm-Subtypenlehre, ordnete Napoleon Bonaparte in seinen Seminaren und Schriften der <strong>sozialen Zwei</strong> zu – dem Golden Retriever, der Verbindung, Bedeutung und Bewunderung sucht. Das überrascht beim ersten Hinsehen: Die populäre Enneagramm-Schule würde in Napoleon intuitiv eher den Typ 8 (den Herausforderer) oder Typ 3 (den Leistungsträger) vermuten. Naranjo aber blickte tiefer, auf die Leidenschaft und Fixierung hinter dem Handeln – und die soziale Zwei ist in ihrem Kern keineswegs nur die zurückhaltende Helferin im Hintergrund. Sie strebt nach Einfluss, Bedeutung und Bewunderung auf der ganz großen Bühne, getrieben von <strong>Stolz</strong> und dem unbewussten Wunsch, unentbehrlich und mächtig zu sein.</p>
          <p class="vb-intro">Der französische Feldherr Napoleon Bonaparte, geboren 1769 auf Korsika in eine verarmte, aber stolze Adelsfamilie, machte seinen gesellschaftlichen Aufstieg nicht durch Rückzug und Berechnung, sondern durch schiere persönliche Wirkung: Er kannte die Namen seiner Soldaten, sprach sie direkt an, ließ sich mitten unter ihnen sehen, teilte ihre Strapazen. Wo ein reiner Machttyp Distanz und Furcht kultiviert hätte, investierte Napoleon in Beziehung – und genau diese Fähigkeit, ganze Armeen an sich zu binden, war der eigentliche Grund seines beispiellosen Aufstiegs vom korsischen Provinzoffizier zum Kaiser der Franzosen.</p>
        </blockquote>

        <h2 class="vb-section">2. SO2: Ehrgeiz als Form der Liebe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte die soziale Zwei <strong>Ehrgeiz</strong> – und bei Napoleon verschmilzt dieser Ehrgeiz untrennbar mit dem Verlangen nach Bewunderung und Zugehörigkeit. Er wollte nicht nur Frankreich dienen: Er wollte der Unentbehrliche sein, ohne den nichts mehr ginge, der Vater der Nation, der Retter der Revolution vor sich selbst. Sein enormer Perfektionismus in der Selbstinszenierung – vom Krönungsgemälde bis zu den sorgfältig verfassten Bulletins von der Front – war weit mehr als reine Propaganda. Es war der SO2-Reflex ungefiltert: Wer bewundert wird, gehört dazu. Wer unentbehrlich ist, wird nicht verlassen.</p>
          <p class="vb-intro">Diese Logik durchzieht sein gesamtes Wirken als Herrscher: die Reform des Bildungswesens, der Aufbau eines leistungsbezogenen Beamtentums, die Gründung der Ehrenlegion als Auszeichnung für Verdienst statt Geburtsadel. Jede dieser Maßnahmen war zugleich Regierungskunst und ein Angebot an das Volk: <em>Ich sorge für euch. Ich sehe eure Leistung. Ihr gehört zu mir.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Inszenierung im Dienst der Verbindung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> machte aus dem verbindungssuchenden Wohltäter einen Meister der Selbstdarstellung. Napoleons unbändiger Geltungsdrang, seine Krönung zum Kaiser in Anwesenheit des Papstes, seine bewusste Stilisierung zum Erben der römischen Cäsaren, sein Fokus auf Erfolg, Status und äußeren Glanz sowie seine enorme organisatorische Effizienz – all das trägt die Handschrift des Dreierflügels. Sein berühmtestes zivilisatorisches Erbe, der <em>Code Napoléon</em>, war zugleich juristisches Meisterwerk und Denkmal seiner selbst: ein Gesetzeswerk, das seinen Namen trägt und auch heute noch in Teilen Europas fortwirkt.</p>
          <p class="vb-intro">Gleichzeitig trägt dieser Flügel dieselbe Gefahr wie bei jedem SO2w3er: die Verwechslung von öffentlichem Bild und innerem Kern. Je mehr Ehren Napoleon annahm – die Kaiserkrone, die Umgestaltung ganz Europas nach seinem Bild, die Heirat mit einer habsburgischen Erzherzogin zur dynastischen Legitimation – desto mehr verschmolz die Rolle des unentbehrlichen Wohltäters mit der eines Herrschers, der keine Gleichen mehr neben sich duldete. Energetisch lässt sich diese Entwicklung schon hier als Vorbote des Achter-Stresspunkts lesen: Unter dauerhaftem Stress übernehmen Menschen mit der Zeit zunehmend die Verhaltensmuster ihres Stresspunkt-Typs, ohne dabei selbst zu diesem Typ zu werden.</p>
        </blockquote>

        <h2 class="vb-section">4. Waterloo und St. Helena: Als der Golden Retriever verlassen wurde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Jahre 1812 bis 1815 sind ein typologisches Dokument von erschütternder Klarheit. Der Russlandfeldzug, die Völkerschlacht bei Leipzig, schließlich Waterloo – jede dieser Niederlagen ging mit dem schrittweisen Rückzug von Verbündeten und Marschällen einher, die Napoleon zuvor persönlich erhoben und mit Titeln, Ländereien und Vertrauen ausgestattet hatte. Für die soziale Zwei ist genau das der tiefste denkbare Bruch: Menschen, die man förderte, um Verbindung zu sichern, wenden sich ab, wenn das Blatt sich wendet.</p>
          <p class="vb-intro">Schon der Weg dorthin zeigt den typischen Stresspunkt der Zwei: Unter Druck geht der Typ 2 in seinen <strong>Achter-Stresspunkt</strong> – und genau dieses Muster durchzieht Napoleons letzte Regierungsjahre. Aus dem charismatischen Feldherrn, der Verbindung durch persönliche Nähe sicherte, wurde zunehmend ein Mann, der immer rücksichtsloser um Kontrolle kämpfte, Ratschläge zurückwies und Frankreichs Jugend in einem Feldzug nach dem anderen verheizte. Die endgültige Verbannung nach St. Helena, fernab jeder Bühne, jedes Publikums, jeder Möglichkeit, wieder zu wirken und geliebt zu werden, traf die soziale Zwei an ihrer verwundbarsten Stelle: der Isolation ohne jede Verbindung.</p>
        </blockquote>

        <h2 class="vb-section">5. Energetische Wirkung: Ein Magnet für Loyalität</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Napoleons Wirkung auf seine Zeitgenossen war von seltener Anziehungskraft: Soldaten folgten ihm über Jahre durch Kälte, Hunger und Gefahr, weil er selbst mit ihnen marschierte, ihre Entbehrungen teilte, ihre Loyalität mit spürbarer, persönlicher Zuwendung erwiderte. Als er 1815 aus der Verbannung auf Elba zurückkehrte, genügte sein bloßes Erscheinen, um ganze Regimenter, die zu seiner Verhaftung ausgesandt worden waren, kampflos auf seine Seite zu ziehen – ein historisch fast beispielloser Beweis persönlicher Bindungskraft.</p>
          <p class="vb-intro">Und doch: Hinter diesem Magnetismus lag der lange Schatten der Zwei, die Leidenschaft <strong>Stolz</strong> – der Glaube, gebraucht und bewundert werden zu müssen, um wertvoll zu sein, und die Schwierigkeit, jemals genug zu haben. Napoleon hatte Ruhm, Macht, die Bewunderung eines Kontinents – und dennoch drängte ihn dieselbe innere Logik immer weiter: zu einem weiteren Feldzug, einer weiteren Krone, einer weiteren Geste der Größe. Die Frage, ob er ohne all das noch geliebt worden wäre, blieb wohl auch für ihn selbst unbeantwortbar.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Institutionen, die überdauerten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Napoleon der Welt hinterließ, lässt sich nicht auf Feldzüge reduzieren. Der Code Napoléon prägt bis auf den heutigen Tag das Zivilrecht weiter Teile Europas und Lateinamerikas. Er reformierte das Bildungssystem, die Verwaltung und das Steuerwesen Frankreichs so grundlegend, dass viele dieser Strukturen bis in die Gegenwart fortbestehen. Die Ehrenlegion, die Verdienst statt Geburt auszeichnete, war eine zutiefst SO2-typische Geste: Zugehörigkeit über Leistung statt über Herkunft definieren, Menschen einschließen, die zuvor nie dazugehört hätten.</p>
          <p class="vb-intro">Hier erreicht die SO2w3 ihre größte Tragweite: ein Mensch, dessen persönliches Bedürfnis nach Bedeutung und Zugehörigkeit sich in Institutionen verwandelte, die Jahrhunderte überdauerten. Der Golden Retriever mit dem Dreierflügel kann einen Kontinent neu ordnen – wenn er lernt, dass wahre Zugehörigkeit nicht erobert und nicht durch immer neue Beweise gesichert werden muss, sondern einfach ist.</p>
        </blockquote>

        <p class="vb-intro">Die über Jahrzehnte wiederkehrenden Magenbeschwerden und Napoleons Tod 1821 an einem Magenkarzinom werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-napoleon-bonaparte">Krankheitsporträt zu Napoleon</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"krankheitsportraets-napoleon-bonaparte", label:"Krankheitsporträt: Napoleon Bonaparte (SO2w3)"},
        {route:"subtype/so2", label:"SO2 – Der Golden Retriever: Subtyp-Profil"},
        {route:"beruehmte-julius-caesar", label:"Porträt: Julius Caesar (SO2w3)"},
        {route:"beruehmte-will-smith", label:"Porträt: Will Smith (SO2w3)"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Porträt: Ludwig van Beethoven (SX6w5) – dem er ursprünglich die Eroica widmen wollte"},
      ])}
    </div>
  `);
}

export function paulGauguinPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-paul-gauguin-portrait.jpg" alt="Paul Gauguin – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Paul Gauguin</p>
        <p class="krim-portrait-typ">SX8w7 · Sexueller Typ 8 mit Siebenerflügel</p>
        <p class="krim-portrait-subtitle">Französischer Maler, 1848–1903 – Tierentsprechung: Krokodil</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Krokodil</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Krokodil</strong> ist das Tier des sexuellen Typs 8 – es wartet nicht ab, ob ihm ein Territorium zusteht, es nimmt es. Paul Gauguin lebte genau danach: Er verließ mit sechsunddreißig Jahren ohne Umschweife einen sicheren bürgerlichen Beruf, seine Frau und fünf Kinder, um sich vollständig der Malerei zu widmen – kein zögerlicher Übergang, sondern ein einziger, entschlossener Schnitt. In der etablierten Enneagramm-Literatur wird Gauguin meist als Vier geführt, als der romantisch leidende, unverstandene Künstler. Sein tatsächliches Verhalten – die kompromisslose Eroberung neuer Territorien, die kühle Grenzsetzung gegenüber Nähe, der offene Widerstand gegen jede Autorität bis zum Tod – zeichnet jedoch das Bild einer sexuellen Acht mit Siebenerflügel.</p>
          <p class="vb-intro">Was das Krokodil ergreift, hält es fest. Was es nicht mehr will, lässt es fallen, ohne zurückzublicken. Gauguins Leben – vom Pariser Börsenparkett über die bretonische Provinz, Panama, Arles, bis in die Südsee – liest sich wie eine Kette solcher Ergreifungen und solcher abrupten Abbrüche.</p>
        </blockquote>

        <h2 class="vb-section">2. Peru: eine frühe Fremdheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Paul Gauguin wurde 1848 in Paris geboren, in eine politisch bewegte Familie: Seine Großmutter mütterlicherseits, Flora Tristan, war eine bekannte frühsozialistische Schriftstellerin und Frauenrechtlerin. Wegen der politischen Unruhen nach dem Staatsstreich Napoleons III. floh die Familie 1849 nach Peru, zur Verwandtschaft der Mutter; der Vater starb während der Überfahrt. Gauguin verbrachte die ersten sieben Lebensjahre in Lima, in einem wohlhabenden, von Dienstpersonal geprägten Haushalt, bevor die Familie 1855 nach Frankreich zurückkehrte.</p>
          <p class="vb-intro">Diese frühe Erfahrung einer fremden, exotisch erlebten Welt – und ihr abrupter Verlust bei der Rückkehr ins bürgerliche Frankreich – hinterließ bei Gauguin eine lebenslange Rastlosigkeit, die sich nie mit einem einzigen Ort zufriedengab. Mit siebzehn heuerte er bei der Handelsmarine an, bereiste Südamerika und das Mittelmeer, diente später in der französischen Marine – erste Ausschläge eines Musters, das sich sein ganzes Leben lang wiederholen sollte: aufbrechen, sobald ein Ort seinen Reiz verloren hatte.</p>
        </blockquote>

        <h2 class="vb-section">3. Die Börse, die zu eng war</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Nach seiner Marinezeit wurde Gauguin 1871 Börsenmakler in Paris, heiratete 1873 die Dänin Mette Gad und lebte über ein Jahrzehnt lang ein finanziell komfortables bürgerliches Leben mit fünf gemeinsamen Kindern. Nebenbei begann er zu malen, sammelte impressionistische Werke, lernte Camille Pissarro kennen und stellte ab 1879 mit den Impressionisten aus. Der Börsencrash von 1882 traf ihn hart – doch statt sich in der Finanzwelt neu zu behaupten, nutzte Gauguin die Krise als Anlass für einen radikalen Schnitt: 1884/85 gab er den Beruf vollständig auf.</p>
          <p class="vb-intro">Er schickte Mette mit den Kindern zu ihrer Familie nach Kopenhagen und widmete sich fortan ganz der Malerei – ohne verlässliches Einkommen, ohne gesicherte Zukunft. Für die sexuelle Acht ist das kein Verzweiflungsakt, sondern eine souveräne Grenzziehung: Das bürgerliche Leben war ein Territorium, das seinen Appetit nicht mehr befriedigte, also verließ er es, ohne lange zu verhandeln.</p>
        </blockquote>

        <h2 class="vb-section">4. Die sexuelle Acht: Besitz</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Acht (SX8)</strong> ist nach Naranjo der Subtyp, den er <em>Besitz</em> nannte – auf Englisch <em>Possession</em>. Sie will keine distanzierte Verbindung, sondern vollständige Verschmelzung, mit einem Menschen, einem Ort, einer Idee. Was sie berührt, will sie ganz. Gauguin lebte das in seiner Malerei ebenso wie in seinen Beziehungen: Er beanspruchte für sich eine völlig neue, von ihm selbst gesetzte künstlerische Sprache – flächige Farben, symbolische Bildsprache, bewusster Bruch mit der impressionistischen Wiedergabe der sichtbaren Welt – und beanspruchte diese Autorität, ohne um Anerkennung zu bitten.</p>
          <p class="vb-intro">Auch in seinen Beziehungen zeigte sich dieses Muster ungeschönt: Auf Tahiti und später den Marquesas ging Gauguin mehrere Verbindungen mit sehr jungen einheimischen Frauen ein, darunter die vierzehnjährige Teha'amana, die er in „Noa Noa" später literarisch verklärte. Er infizierte sich mit Syphilis und gab die Krankheit nachweislich an mehrere Partnerinnen weiter – ein Verhalten, das die Schattenseite der SX8-Besitzergreifung in aller Härte zeigt: Nähe wird genommen, nicht ausgehandelt, Konsequenzen für andere werden dabei kaum mitgedacht.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Siebenerflügel: rastlose Eroberung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Siebenerflügel</strong> verleiht der sexuellen Acht Appetit und Neugier auf das nächste Territorium, sobald das vorherige erobert ist. Kaum ein Künstlerleben zeigt diese Rastlosigkeit so deutlich wie Gauguins endlose Kette von Aufbrüchen: die bretonische Künstlerkolonie Pont-Aven, 1887 ein selbst gewählter, entbehrungsreicher Arbeitseinsatz beim Bau des Panamakanals, um die Überfahrt zu finanzieren, anschließend Martinique, 1888 Arles, 1891 die erste Reise nach Tahiti, 1893 eine kurze, finanziell gescheiterte Rückkehr nach Frankreich, 1895 die endgültige Abreise in die Südsee, zuletzt die Marquesas-Insel Hiva Oa.</p>
          <p class="vb-intro">Eine sexuelle Acht mit Neunerflügel hätte sich vermutlich irgendwo eingerichtet und dort verwurzelt. Gauguin tat das Gegenteil: Kaum hatte ein Ort seinen Reiz verloren oder seine Erwartungen enttäuscht, brach er auf – nicht aus Verzweiflung, sondern aus demselben Appetit auf das nächste, noch unberührtere Territorium, der ihn schon als jungen Matrosen angetrieben hatte.</p>
        </blockquote>

        <h2 class="vb-section">6. Arles: Van Gogh und die Grenze der Acht</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Oktober 1888 folgte Gauguin, nach monatelangem Drängen, der Einladung Vincent van Goghs (SE4w5) nach Arles, wo dieser von einer gemeinsamen Künstlerkolonie im „Gelben Haus" träumte. Van Gogh, dessen selbsterhaltende Vier ihr tiefstes Gefühlsleben in stiller, intensiver Nähe zu verarbeiten suchte, erlebte die neun gemeinsamen Wochen als leidenschaftliche, oft nächtelange Debatten über Kunst. Gauguin dagegen empfand genau diese Intensität zunehmend als Bedrängnis – zeitgenössische Berichte beschreiben ihn in dieser Zeit als reserviert, distanziert, zunehmend gereizt.</p>
          <p class="vb-intro">Das ist der entscheidende Unterschied zwischen den beiden Subtypen: Eine Vier hätte auf die Nähe mit eigenem Leid oder Rückzug in die eigene Innenwelt reagiert. Die Acht reagiert mit Grenzsetzung – kühl, kontrolliert, ohne sich von der emotionalen Intensität des Gegenübers mitreißen zu lassen. Am Abend des 23. Dezember 1888 eskalierte die Spannung; Gauguin verließ Arles unmittelbar danach, während Van Gogh sich in derselben Nacht einen Teil seines Ohrs abschnitt. Gauguin selbst distanzierte sich zeitlebens auffällig sachlich von dem Ereignis – ein weiteres Indiz für eine Acht, die auch in einer dramatischen Krise die eigene Kontrolle nicht verliert, während sie gleichzeitig die Kontrolle über die Situation längst verlassen hatte.</p>
        </blockquote>

        <h2 class="vb-section">7. Tahiti und die Marquesas: der letzte Widerstand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">In seinen letzten Lebensjahren auf den Marquesas-Inseln geriet Gauguin in offenen, öffentlichen Konflikt mit der Kolonialverwaltung und der katholischen Kirche – er verteidigte die einheimische Bevölkerung gegen als ungerecht empfundene Steuern und Vorschriften, veröffentlichte ein eigenes, bewusst provokantes Satireblatt namens „Le Sourire" und geriet dafür wiederholt in juristische Auseinandersetzungen, zuletzt drohte ihm eine Gefängnisstrafe. Selbst gesundheitlich schwer angeschlagen, gab er diesen Widerstand nicht auf.</p>
          <p class="vb-intro">Das ist ebenfalls typisch SX8: Die Acht weicht der Konfrontation mit Autorität nicht aus, selbst wenn sie sie objektiv nicht mehr gewinnen kann. Nicht das leise, in sich gekehrte Leiden einer Vier, sondern der offene, bis zuletzt geführte Kampf gegen eine als illegitim empfundene Macht.</p>
        </blockquote>

        <h2 class="vb-section">8. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX8w7 ist ihre kompromisslose Erneuerungskraft: Gauguin brach mit der impressionistischen Wiedergabe der sichtbaren Welt und öffnete der Malerei den Weg zum Symbolismus und zur Moderne – ein Bruch, der spätere Künstler wie Matisse und die Fauvisten direkt beeinflusste. Seine Bereitschaft, ein gesichertes bürgerliches Leben vollständig aufzugeben, um dieser eigenen künstlerischen Vision zu folgen, zeugt von genau der Kompromisslosigkeit, die die sexuelle Acht auszeichnet.</p>
          <p class="vb-intro">Der Schatten ist derselbe Zug, ohne Rücksicht auf die, die zurückblieben: eine verlassene Familie, minderjährige Partnerinnen in kolonialer Abhängigkeit, eine Krankheit, die er wissentlich weitergab. Die reife SX8w7 lernt, Besitzergreifung durch echte Verbundenheit zu ersetzen. Bei Gauguin, soweit die Quellen zeigen, blieb dieser Schritt weitgehend aus.</p>
        </blockquote>

        <h2 class="vb-section">9. Tod und Vermächtnis</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Paul Gauguin starb 1903, geschwächt von Syphilis und weiteren gesundheitlichen Leiden, allein in seiner Hütte auf Hiva Oa – bis zuletzt im offenen Konflikt mit der Kolonialverwaltung, unbeugsam bis zum Tod. Kein versöhnlicher Rückzug, kein stilles Einlenken: Das Krokodil verteidigte sein Territorium bis zum letzten Atemzug.</p>
          <p class="vb-intro">Was bleibt, ist ein Werk, das die Kunstgeschichte grundlegend veränderte – und eine Biografie, die zeigt, wozu dieselbe Kraft fähig ist: zu einer der folgenreichsten künstlerischen Neuerungen der Moderne und zu rücksichtsloser Erschöpfung derer, die ihm zu nahe kamen, allen voran Vincent van Gogh. Die sexuelle Acht mit Siebenerflügel kennt keine halben Sachen – weder im Aufbrechen noch im Ergreifen.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-vincent-van-gogh", label:"Porträt: Vincent van Gogh (SE4w5) – der Konflikt in Arles"},
          {route:"beruehmte-pablo-picasso", label:"Porträt: Pablo Picasso (SX8w7)"},
          {route:"beruehmte-donald-trump", label:"Porträt: Donald J. Trump (SX8w7)"},
          {route:"subtype/sx8", label:"SX8 – Das Krokodil: Subtyp-Profil"},
        ])}
      </div>
    </div>
  `);
}

export function rihannaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-rihanna-portrait.jpg" alt="Rihanna" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Rihanna</p>
        <p class="krim-portrait-typ">SX4w3 &middot; Sexueller Typ 4 mit Dreierfl\xfcgel</p>
        <p class="krim-portrait-subtitle">S\xe4ngerin, Unternehmerin, geb. 1988, Barbados &ndash; Tierentsprechung: Chihuahua</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Chihuahua aus Barbados</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Chihuahua</strong> ist die kleinste Hunderasse der Welt &ndash; und das Tier, das am wenigsten beeindruckt davon ist. Er bellt, wenn er will. Er stellt sich hin, wenn er will. Er l\xe4sst sich nicht einsch\xfcchtern durch Gr\xf6\xdfe, durch Lautst\xe4rke, durch Erwartung. Hinter dieser Keckheit steckt aber kein blo\xdfes Auftrumpfen &ndash; sondern ein Wesen von tiefer Empfindlichkeit, das gelernt hat, sich zu sch\xfctzen, indem es sich nichts anmerken l\xe4sst. Der Chihuahua liebt intensiv, leiden leidenschaftlich und h\xe4lt sich an dem fest, dem er vertraut.</p>
          <p class="vb-intro">Die barbadische Sängerin Robyn Rihanna Fenty kommt aus Bridgetown, Barbados &ndash; einer kleinen karibischen Insel, die die Welt kaum auf dem Schirm hatte, als ein 15-j\xe4hriges M\xe4dchen vor einem amerikanischen Musikproduzenten vorsang. Was folgte, ist einer der bemerkenswertesten Aufstiege in der Geschichte der Popmusik: vom Kind aus dem Karibik zur globalsten Entertainerin ihrer Generation, zur Unternehmerin, die eine Milliarden-Industrie aufgebaut hat &ndash; und dabei nie aufgeh\xf6rt hat, sie selbst zu sein. Das ist der Chihuahua: klein, woher er kommt. Unaufhaltsam, wohin er geht.</p>
          <p class="vb-intro">Rihannas Kindheit war kein Idyll. Ihr Vater k\xe4mpfte mit Alkohol- und Drogenabh\xe4ngigkeit, die Eltern trennten sich, als sie elf Jahre alt war. Die Gro\xdfst\xe4dte der Welt &ndash; New York, Los Angeles, London &ndash; waren ihr damals so fern wie ein anderer Planet. Was sie hatte, war eine Stimme, ein Wille und die Bereitschaft, alles daf\xfcr zu tun. Das ist nicht Gl\xfcck. Das ist der Stoff, aus dem die sexuelle Vier gemacht ist.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Vier: Rivalit\xe4t als Lebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Vier (SX4)</strong> ist in der Enneagramm-Tradition der Subtyp, der den Schmerz der Vier nicht nach innen tr\xe4gt, sondern nach au\xdfen wendet &ndash; als Intensit\xe4t, als Verlangen, als Feuer. Naranjo nannte diesen Subtyp <em>Rivalit\xe4t</em>: die brennende \xdcberzeugung, dass andere haben, was einem selbst vorenthalten wurde &ndash; und der Antrieb, sie zu \xfcbertreffen, zu \xfcberbieten, zu \xfcberstrahlen. Das ist kein niedriger Neid. Es ist der Motor eines Menschen, der seine eigene Tiefe sp\xfcrt und wei\xdf: Ich verdiene mehr als das, was man mir zugedacht hat.</p>
          <p class="vb-intro">Diese Energie ist \xfcberall in Rihannas Werk sp\xfcrbar. <em>Umbrella</em> ist keine einfache Hymne &ndash; es ist ein Versprechen von radikaler Loyalit\xe4t unter Bedingungen, die andere davonlaufen lassen. <em>We Found Love</em> feiert das Gef\xfchl, das so gro\xdf ist, dass es fast wehtut. <em>Diamonds</em> spricht von einer Sehnsucht, die sich nicht kleinmachen l\xe4sst. Und <em>Stay</em> &ndash; einer der pers\xf6nlichsten Songs ihres Katalogs &ndash; zeigt eine Frau, die sich in etwas Zerst\xf6rerisches verlieben kann und das wei\xdf und trotzdem bleibt: das Paradox der SX4, das zwischen Verlangen und Vernunft zerrieben wird und dennoch nicht aufgibt.</p>
          <p class="vb-intro">Das Kapitel um Chris Brown (2009) ist nicht zu umgehen, wenn man Rihanna verstehen will. Chris Brown war damals &ndash; wie Rihanna &ndash; ein junger R&amp;B-Star, die beiden f\xfchrten seit 2008 eine \xf6ffentliche Beziehung. In der Nacht vor der Grammy-Verleihung 2009 griff er sie in einem Auto k\xf6rperlich an und verletzte sie schwer. Der Vorfall wurde angezeigt, Brown bekannte sich schuldig &ndash; und das Bild von Rihannas Verletzungen, das an die Presse gelangte, ging um die Welt. Sie war 21 Jahre alt.</p>
          <p class="vb-intro">Die SX4 tr\xe4gt ihre Wunden nicht versteckt wie die SE4 &ndash; sie wird sichtbar damit konfrontiert, ob sie will oder nicht. Rihanna hat sich danach nicht weggeduckt. Sie hat sich neu aufgebaut &ndash; mit Wut, mit Schmerz, mit dem Album <em>Rated R</em>, das klingt wie eine Klinge: dunkel, kantig, unverf\u00e4lscht. Das ist SX4: der Schmerz wird nicht begraben. Er wird zu Kunst.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\xfcgel: Aus Gef\xfchl wird Marke</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\xfcgel (w3)</strong> gibt der sexuellen Vier etwas Entscheidendes: die F\xe4higkeit, das eigene Erleben nicht nur zu empfinden, sondern zu gestalten &ndash; und in Wirkung zu verwandeln. Wo eine SX4 mit schwächerem Dreierflügel im Feuer der eigenen Emotionen versinken könnte, bringt ein stark ausgeprägter Dreierflügel Ambition, Handwerk und ein feines Gesp\xfcr daf\xfcr, was wirkt. Diese Kombination macht aus intensivem Erleben eine Karriere &ndash; und aus einer Karriere ein Imperium.</p>
          <p class="vb-intro">Der w3 ist in Rihannas gesamter \xe4sthetischer Entwicklung sp\xfcrbar: die pr\xe4zise Kalkulation des Images, das sich mit jedem Album ver\xe4ndert hat. Von der s\xfc\xdfen karibischen Pop-Newcomerin \xfcber die aufgew\xfchlte, dunkle Energie von <em>Rated R</em> bis hin zur unbek\xfcmmerten Sinnlichkeit von <em>Loud</em> und schlie\xdflich zur reifen, eigenst\xe4ndigen Meisterschaft von <em>Anti</em> &ndash; jede Phase war eine bewusste Neuerfindung. Die SX4 f\xfchlt sich echt. Der w3 sorgt daf\xfcr, dass das Echte auch ankommt.</p>
          <p class="vb-intro">Besonders deutlich wird das in <em>Anti</em> (2016), Rihannas siebtem und bislang letztem Studioalbum. Es ist das erste, das vollst\xe4ndig ihre eigene Vision tr\xe4gt: kein Formatradio-Kompromiss, keine vorhersehbare Single-Struktur. <em>Anti</em> klingt wie jemand, der aufgeh\xf6rt hat, um Erlaubnis zu fragen. Das ist das Beste, was der Dreierfl\xfcgel der SX4 geben kann: die Werkzeuge, um das Innerste in eine Form zu bringen, die niemand ignorieren kann.</p>
        </blockquote>

        <h2 class="vb-section">4. Fenty Beauty und die Revolution der Sch\xf6nheit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">2017 ver\xe4nderte Rihanna die Kosmetikindustrie mit einem einzigen Produktlaunch: <strong>Fenty Beauty</strong> &ndash; 40 Foundation-T\xf6ne, von Elfenbein bis zum tiefsten Dunkelbraun. Was selbstverst\xe4ndlich klingt, war es nicht: Die Branche hatte Jahrzehnte lang dunklere Hauttinten als Nischenprodukt behandelt oder ignoriert. Rihanna hat das nicht als Marketingstrategie formuliert. Sie hat es als Selbstverst\xe4ndlichkeit behandelt &ndash; und damit die Unverst\xe4ndlichkeit der Industrie blo\xdfgestellt.</p>
          <p class="vb-intro">Diese Geste zeigt zutiefst das Muster der SX4w3: Die SX4 wei\xdf aus eigener Erfahrung, was es bedeutet, nicht gesehen zu werden. Die SX4 aus Barbados, die auf Schritt und Tritt mit einem Sch\xf6nheitsideal konfrontiert war, das nicht ihr Gesicht abbildete, hat diese Erfahrung nicht vergessen &ndash; sie hat sie in ein Gesch\xe4ftsmodell verwandelt. Und der Dreierfl\xfcgel hat daf\xfcr gesorgt, dass dieses Modell so pr\xe4zise und konsequent ausgef\xfchrt wurde, dass die Konkurrenz innerhalb weniger Monate nachziehen musste.</p>
          <p class="vb-intro">Savage X Fenty, ihre Dessous-Linie, f\xfchrte denselben Gedanken weiter: alle K\xf6rperformen, alle Hautfarben, alle Gr\xf6\xdfen als Norm &ndash; nicht als Ausnahme. Das ist nicht nur wohlgemeint. Das ist Vision. Und ihre kurzlebige, aber historisch bedeutsame Modemarke Fenty bei LVMH (erstes neues Modehaus des Konzerns seit Christian Lacroix 1987) zeigte, dass Rihanna nicht in Kategorien denkt &ndash; sie denkt in Ebenen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten: Das Feuer, das tr\xe4gt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Schicksalsmuster der Vier ist der <strong>Neid</strong> &ndash; nicht als Missgunst, sondern als das tiefe Gef\xfchl, dass andere eine Vollst\xe4ndigkeit besitzen, die einem selbst fehlt. Bei der SX4 tr\xe4gt dieser Neid ein pers\xf6nlicheres, sch\xe4rferes Gesicht: <em>Du hast, was mir vorenthalten wurde &ndash; und ich werde dich \xfcbertreffen.</em> Dieser Antrieb hat Rihanna weit gebracht. Aber er hat auch seinen Preis.</p>
          <p class="vb-intro">Die Jahre zwischen <em>Anti</em> (2016) und dem Super-Bowl-Auftritt (2023) waren sieben Jahre Stille als Musikerin &ndash; sieben Jahre, in denen Rihanna Kinder gebar, Unternehmen f\xfchrte und offenbar nicht das Bed\xfcrfnis hatte, f\xfcr die Musik zur\xfcckzukehren, bis die Bedingungen ihre eigenen waren. Als sie beim Super Bowl LVII auftrat &ndash; sichtbar schwanger, nach sieben Jahren Pause, allein auf einer schwebenden Plattform, ein halbes Dutzend riesiger Screens, kein Gaststar &ndash; war das eine Erkl\xe4rung ohne Worte: <em>Ich brauche keine Erlaubnis. Ich erscheine, wenn ich bereit bin.</em></p>
          <p class="vb-intro">Das Licht der SX4w3 liegt in dieser F\xe4higkeit zur vollst\xe4ndigen Selbstbestimmung &ndash; auch um den Preis des Unverst\xe4ndnisses. Der Schatten liegt in der Gefahr, das Feuer nach innen zu wenden: wenn die Rivalit\xe4t sich gegen einen selbst richtet, wenn der Anspruch \xfcberw\xe4ltigt, wenn die Intensit\xe4t keine Richtung mehr hat. Rihanna hat beides gekannt. Und sie ist, bisher, jedes Mal zur\xfcckgekommen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Chihuahua, der sich selbst geh\xf6rt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Vier f\xfchrt von der Frage <em>Warum bin ich nicht wie die anderen?</em> zur Erkenntnis <em>Das, was ich bin, ist einmalig &ndash; und es ist meins.</em> F\xfcr die SX4w3 bedeutet das, die Rivalit\xe4t nicht aufzugeben, sondern sie zu l\xe4utern: nicht mehr k\xe4mpfen, weil man sich beweisen muss, sondern gestalten, weil man etwas zu sagen hat. Diese Verschiebung ist leise &ndash; aber sie ver\xe4ndert alles.</p>
          <p class="vb-intro">In Rihannas Biografie l\xe4sst sich dieser Weg ahnen. Die fr\xfche S\xe4ngerin hat K\xe4mpfe ausgefochten &ndash; mit der Industrie, mit der \xd6ffentlichkeit, mit den Erwartungen, die an sie herangetragen wurden. Die sp\xe4tere Rihanna hat aufgeh\xf6rt zu k\xe4mpfen und angefangen zu gestalten. Fenty Beauty ist kein Kampf gegen die Sch\xf6nheitsindustrie &ndash; es ist ein Entwurf, wie Sch\xf6nheit sein k\xf6nnte. <em>Anti</em> ist kein Protest gegen das Formatradio &ndash; es ist ein Vorschlag, was Musik sein k\xf6nnte, wenn man aufh\xf6rt, um Erlaubnis zu fragen.</p>
          <p class="vb-intro">Der Chihuahua aus Bridgetown hat die Welt nicht durch Gr\xf6\xdfe erobert. Er hat sie durch Intensit\xe4t ver\xe4ndert &ndash; durch die Weigerung, kleiner zu sein, als er ist, und durch die Bereitschaft, genau das zu zeigen, was die meisten verbergen w\xfcrden. Was bleibt, ist eine Stimme, ein Gesicht und eine Haltung, die man nicht vergisst. Das ist die sexuelle Vier mit Dreierfl\xfcgel. Das ist Rihanna.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/sx4", label:"SX4 \u2013 Der Chihuahua: Subtyp-Profil"},
        {route:"beruehmte-freddie-mercury", label:"Portr\xe4t: Freddie Mercury (SX4w3)"},
        {route:"beruehmte-billie-eilish", label:"Portr\xe4t: Billie Eilish (SX4w3)"},
      ])}
    </div>
  `);
}

export function serdarSomuncuPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-serdar-somuncu-portrait.jpg" alt="Serdar Somuncu" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Serdar Somuncu</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel</p>
        <p class="krim-portrait-subtitle">Kabarettist, Regisseur &amp; Autor, geb. 1968 – Tierentsprechung: Waschbär</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Waschbär</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Waschbär</strong> ist das Tier der selbsterhaltenden Drei – ein Tier, das mit unermüdlichem Fleiß im Verborgenen arbeitet, bevor es sich zeigt, und das seine Sicherheit aus nachweisbarem Handwerk zieht. Serdar Somuncu wurde 1968 in Istanbul geboren und zog schon als Kleinkind mit seiner Familie nach Deutschland, wo er in Neuss aufwuchs. Bevor er als Kabarettist bekannt wurde, durchlief er eine gründliche musikalische und schauspielerische Ausbildung: von 1984 bis 1986 studierte er am Konservatorium für Musik in Maastricht, von 1986 bis 1992 Schlagzeug an der Staatlichen Hochschule für Musik in Wuppertal, anschließend von 1992 bis 1995 Schauspiel und Regie in Frankfurt am Main.</p>
          <p class="vb-intro">Über 100 Theaterstücke inszenierte er, bevor sein eigentlicher öffentlicher Durchbruch kam – Jahre disziplinierter, oft unsichtbarer Vorarbeit, bevor sich das eigentliche, öffentlich sichtbare Werk zeigte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Drei: Substanz statt Provokation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Drei (SE3)</strong> ist der Kontratyp der Drei – der Subtyp, der Sicherheit nicht durch öffentliches Image, sondern durch nachweisbare, überprüfbare Kompetenz sucht. Naranjo nannte diesen Subtyp <em>Sicherheit</em>: Man wird nicht bewundert, weil man sich gut verkauft, sondern weil man tatsächlich liefert, was man verspricht. Somuncus Durchbruch 1996 mit der szenischen Lesung aus Hitlers ›Mein Kampf‹ war kein plumper Skandal-Auftritt, sondern eine dramaturgisch präzise gearbeitete Auseinandersetzung, die den ›Schrecken durch Konfrontation‹ aus dem Text nehmen sollte.</p>
          <p class="vb-intro">Sein eigener Anspruch dahinter war klar formuliert: ›Wer über Mein Kampf lacht, hat verstanden, was für ein Unsinn da drinsteht.‹ Über 1.500 Aufführungen in ganz Europa folgten, mit mehr als einer halben Million Zuschauern – keine kurzfristige Provokation, sondern ein über Jahrzehnte tragfähiges Werk, dessen Wirkung sich durch stetige Wiederholung und handwerkliche Genauigkeit erst voll entfaltete.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Zweierflügel: Auftreten trotz persönlichem Risiko</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Zweierflügel (w2)</strong> verleiht der selbsterhaltenden Drei einen echten Impuls, sich für andere einzusetzen, selbst wenn es persönliche Kosten mit sich bringt. Wegen der ›Mein Kampf‹-Lesungen erhielt Somuncu wiederholt Drohungen von Neonazis und trat zeitweise unter Polizeischutz und mit kugelsicherer Weste auf – kein einmaliger Vorfall, sondern eine über Jahre anhaltende Belastung, die er in Kauf nahm, weil er von der Wirkung seiner Arbeit überzeugt war.</p>
          <p class="vb-intro">Diese Überzeugung bestätigte sich: Bis heute erhält Somuncu Briefe von Menschen, die die Lesungen als entscheidenden Wendepunkt in ihrem Leben beschreiben. Der Zweierflügel zeigt sich hier nicht als bloße Sympathiewerbung, sondern als konkrete, über Jahrzehnte gepflegte Verbindung zu einem Publikum, das durch seine Arbeit tatsächlich verändert wurde.</p>
        </blockquote>

        <h2 class="vb-section">4. Die kugelsichere Weste als Symbol</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Statt die Lesungen nach den ersten Drohungen einzustellen, entschied sich Somuncu, unter erhöhtem Sicherheitsaufwand weiterzumachen – eine nüchterne, wenig glamouröse Entscheidung, die keine öffentliche Heldenpose war, sondern die konsequente Fortsetzung einer als richtig erkannten Arbeit unter widrigen Bedingungen.</p>
          <p class="vb-intro">Diese Episode zeigt die typische SE3w2-Haltung: keine große öffentliche Geste, sondern die stille, beharrliche Weiterführung einer Aufgabe, deren Wert sich am tatsächlichen Ergebnis misst – Sicherheit und Substanz, nicht Show, auch unter Bedrohung.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE3w2 ist die Fähigkeit, <strong>gründliche handwerkliche Vorbereitung mit echtem Engagement für andere</strong> zu verbinden – Somuncus jahrzehntelange musikalische und schauspielerische Ausbildung bildete das Fundament für ein Werk, das über eine halbe Million Menschen europaweit direkt erreichte und nachweislich verändert hat.</p>
          <p class="vb-intro">Das Schicksalsmuster der Drei ist die <strong>Eitelkeit</strong> – bei der SE3 subtiler als bei den lauteren Dreier-Subtypen, aber dennoch vorhanden: das Bedürfnis, den eigenen Wert durch immer neue, überprüfbare Wirkung zu bestätigen. Somuncus konsequentes Festhalten an einem riskanten, jahrzehntelang fortgesetzten Format zeigt, wie viel Kraft es kostet, den eigenen Anspruch an Substanz auch unter äußerem Druck nicht aufzugeben.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Waschbär, der Aufklärung zum Lebenswerk machte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Serdar Somuncu gehört zu den prägendsten Figuren der deutschen Kabarettszene – nicht wegen einer einzelnen provokanten Aktion, sondern wegen eines über Jahrzehnte fortgesetzten, handwerklich fundierten Werks, das historische Aufklärung mit künstlerischer Präzision verband.</p>
          <p class="vb-intro">Vom klassisch ausgebildeten Schlagzeuger über den Regisseur von mehr als hundert Theaterstücken bis zum Kabarettisten, der über 1.500 Mal aus ›Mein Kampf‹ las, auch unter kugelsicherer Weste: Das ist die selbsterhaltende Drei mit Zweierflügel in ihrer reifsten Form – Substanz, die sich nicht in Provokation erschöpft, sondern in tatsächlicher, über Jahrzehnte bewiesener Wirkung fortsetzt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se3", label:"SE3 – Der Waschbär: Subtyp-Profil"},
        {route:"beruehmte-bastian-pastewka", label:"Porträt: Bastian Pastewka (SE3w2)"},
        {route:"beruehmte-lang-lang", label:"Porträt: Lang Lang (SE3w2)"},
        {route:"beruehmte-michael-dell", label:"Porträt: Michael Dell (SE3w2)"},
      ])}
    </div>
  `);
}

export function teresaVonAvilaPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-teresa-von-avila-portrait.jpg" alt="Teresa von \u00c1vila" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Teresa von \u00c1vila</p>
        <p class="krim-portrait-typ">SO3w4 &middot; Sozialer Typ 3 mit Viererfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">1515&ndash;1582 &ndash; Mystikerin, Ordensreformerin, Kirchenlehrerin &ndash; Tierentsprechung: Gepard</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Gepard, der ein Ordensreich gr\u00fcndete</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Gepard</strong> ist das Tier der sozialen Drei &ndash; das schnellste Tier der Erde, gebaut f\u00fcr sichtbaren, unbestreitbaren Erfolg. Kaum eine historische Gestalt au\u00dferhalb von Politik und B\u00fchne verk\u00f6rpert dieses Muster so eindr\u00fccklich wie Teresa von \u00c1vila. Mit chronisch schwacher Gesundheit, in einer Zeit, in der Frauen kaum \u00f6ffentlich in Erscheinung treten durften, baute sie binnen zwei Jahrzehnten ein Netzwerk von siebzehn reformierten Kl\u00f6stern quer durch Spanien auf &ndash; eine institutionelle Leistung, die selbst gesunde M\u00e4nner ihrer Zeit kaum vollbracht h\u00e4tten.</p>
          <p class="vb-intro">Die spanische Mystikerin Teresa von \u00c1vila, geboren 1515 in \u00c1vila als Tochter einer wohlhabenden Kaufmannsfamilie mit j\u00fcdischen Wurzeln, trat mit zwanzig Jahren gegen den Willen ihres Vaters in den Karmelitinnenorden ein. Doch der regul\u00e4re Klosteralltag gen\u00fcgte ihr bald nicht mehr. Sie wollte nicht einfach Nonne sein &ndash; sie wollte den Orden erneuern, sichtbar, sp\u00fcrbar, unwiderlegbar. Der Gepard bleibt nicht im Rudel zur\u00fcck. Er sprintet voraus, w\u00e4hrend andere im gewohnten Tempo weitergehen.</p>
        </blockquote>

        <h2 class="vb-section">2. SO3: Reform als sichtbares Werk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Drei (SO3)</strong> lebt nicht f\u00fcr einzelne, private Erfolge &ndash; sie braucht ein Werk, das \u00f6ffentlich sichtbar wird und Bestand hat. Naranjo beschrieb diesen Subtyp als denjenigen, bei dem Ehrgeiz sich am unverstelltesten mit dem Bed\u00fcrfnis nach Anerkennung durch ein gr\u00f6\u00dferes Ganzes verbindet. Bei Teresa richtete sich dieser Ehrgeiz nicht auf pers\u00f6nlichen Ruhm im weltlichen Sinn, sondern auf ein Ziel, das noch gr\u00f6\u00dfer war: die Reform eines ganzen Ordens, sichtbar in Stein, Regel und Gemeinschaft.</p>
          <p class="vb-intro">Ihre Reise durch Spanien, oft in einem klapprigen Ochsenkarren, meist krank, immer unter Zeitdruck, um ein weiteres Kloster zu gr\u00fcnden, ist SO3-Energie in Reinform: Sie wartete nicht auf ideale Bedingungen. Sie schuf Institutionen &ndash; das <em>Convento de San Jos\u00e9</em> in \u00c1vila 1562 als erstes, dann Medina del Campo, Malag\u00f3n, Valladolid, Toledo, und so weiter, bis ihr Werk ein sichtbares, un\u00fcbersehbares Netz \u00fcber das ganze Land legte. Jedes neue Kloster war ein Beweis: <em>Die Reform lebt. Sie wirkt. Man kann sie nicht mehr ignorieren.</em></p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererfl\u00fcgel: Die innerste Burg der Seele</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererfl\u00fcgel (w4)</strong> gibt der sozialen Drei eine Tiefe, die reines institutionelles Wirken \u00fcbersteigt &ndash; das Bed\u00fcrfnis, als einzigartige, unverwechselbare innere Welt wahrgenommen zu werden, nicht nur als Reformerin. Genau diese Tiefe zeigt sich in Teresas Schriften: <em>Die innere Burg</em> beschreibt die Seele als einen kristallenen Palast mit sieben ineinanderliegenden Wohnungen, durch die der Mensch zur Vereinigung mit Gott vordringt &ndash; ein Bild von poetischer, fast literarischer Symbolkraft, weit entfernt von trockener Dogmatik.</p>
          <p class="vb-intro">Ihre mystischen Erfahrungen waren von einer Intensit\u00e4t, die sie selbst kaum in Worte fassen konnte &ndash; allen voran die sogenannte <em>Transverberation</em>: die Vision eines Engels, der ihr Herz mit einem goldenen, feuerspitzen Pfeil durchbohrte, ein Schmerz von solcher S\u00fc\u00dfe, dass sie ihn sich, wie sie schrieb, ewig gew\u00fcnscht h\u00e4tte. Gian Lorenzo Bernini verewigte diesen Moment zwei Generationen sp\u00e4ter in seiner Marmorskulptur <em>Die Verz\u00fcckung der heiligen Teresa</em> &ndash; ein Werk, das noch heute zugleich als eines der bedeutendsten sakralen Kunstwerke Europas gefeiert und wegen seiner unverhohlen sinnlichen Darstellung kontrovers diskutiert wird. Das innerste, pers\u00f6nlichste Erlebnis der Viererfl\u00fcgel-Mystikerin wurde zum \u00f6ffentlichsten Kunstwerk ihrer Zeit.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Jahre der L\u00e4hmung: Als der Gepard nicht mehr laufen konnte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mit dreiundzwanzig Jahren erlitt Teresa eine schwere Erkrankung, vermutlich eine Form der Katalepsie, die sie \u00fcber Monate in einen todes\u00e4hnlichen Starrezustand versetzte &ndash; man hielt sie zeitweise f\u00fcr tot und hatte bereits ein Grab vorbereitet. Sie blieb danach \u00fcber drei Jahre teilweise gel\u00e4hmt, unf\u00e4hig, selbstst\u00e4ndig zu gehen. F\u00fcr die soziale Drei, deren Wert sich \u00fcber sichtbares Wirken definiert, ist v\u00f6llige k\u00f6rperliche Ohnmacht eine der tiefsten denkbaren Krisen: Der Gepard, der nicht mehr laufen kann, ist f\u00fcr einen Moment kein Gepard mehr.</p>
          <p class="vb-intro">Genau in dieser Zeit zeigt sich der typische Stresspunkt der Drei: Unter Druck geht der Typ 3 in seinen <strong>Neuner-Stresspunkt</strong> &ndash; R\u00fcckzug, Selbstzweifel, ein Verschwinden aus der eigenen Handlungsf\u00e4higkeit. Jahrzehntelang begleiteten Teresa qu\u00e4lende Selbstzweifel, ob ihre mystischen Erfahrungen tats\u00e4chlich von Gott stammten oder, wie sie selbst f\u00fcrchtete, vom Teufel eingegeben sein k\u00f6nnten. Sie unterwarf sich wiederholt der Pr\u00fcfung durch Beichtv\u00e4ter und geriet ins Visier der spanischen Inquisition, die ihre <em>Vida</em>, ihre Autobiografie, jahrelang unter Verschluss hielt und pr\u00fcfte, bevor sie freigegeben wurde.</p>
          <p class="vb-intro">Sie schrieb diese Autobiografie explizit auf Anweisung ihrer geistlichen Begleiter &ndash; damit diese, und notfalls die Inquisition selbst, \u00fcber ihre Rechtgl\u00e4ubigkeit urteilen konnten. Die soziale Drei, die Anerkennung durch ein gr\u00f6\u00dferes Ganzes braucht, unterstellte sich damit der h\u00e4rtesten verf\u00fcgbaren \u00f6ffentlichen Pr\u00fcfung ihrer Zeit &ndash; und bestand sie.</p>
        </blockquote>

        <h2 class="vb-section">5. Energetische Wirkung: Tempo im Dienst der Erneuerung</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Teresas Wirkung auf ihre Zeitgenossen war von fast schon unb\u00e4ndigem Tempo gepr\u00e4gt: Sie gr\u00fcndete, verhandelte, schrieb Briefe an K\u00f6nige und Bisch\u00f6fe, reiste weiter, obwohl sie oft fieberkrank und ersch\u00f6pft war. Zeitgenossen beschrieben eine Frau von scharfem Verstand, praktischem Organisationstalent und einem trockenen, oft selbstironischen Humor &ndash; keine entr\u00fcckte Heilige, sondern eine energiegeladene Reformerin, die Widerst\u00e4nde mit derselben Entschlossenheit \u00fcberwand wie \u00e4u\u00dfere Hindernisse.</p>
          <p class="vb-intro">Und doch: Hinter diesem Tempo lag der lange Schatten der Drei, die Leidenschaft <strong>Eitelkeit</strong> &ndash; nicht im Sinne von Prunksucht, sondern als die Notwendigkeit, das eigene Werk permanent als rechtgl\u00e4ubig, als erfolgreich, als unanfechtbar zu erweisen. Teresa musste während ihres ganzen Lebens beweisen, dass sie keine Betr\u00fcgerin, keine H\u00e4retikerin, keine der zahlreichen <em>alumbradas</em> war, die die Inquisition in jenen Jahrzehnten verfolgte. Die Frage, ob sie ohne diesen st\u00e4ndigen Rechtfertigungsdruck dieselbe Klarheit \u00fcber ihre eigene innere Welt gefunden h\u00e4tte, bleibt offen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Eine Sprache f\u00fcr das Innerste</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Teresa von \u00c1vila der Welt hinterlie\u00df, l\u00e4sst sich nicht auf siebzehn Klostergr\u00fcndungen reduzieren. Mit <em>Die innere Burg</em>, <em>Der Weg der Vollkommenheit</em> und ihrer Autobiografie schuf sie eine der eindr\u00fccklichsten Sprachen f\u00fcr mystische Erfahrung in der Geschichte der Weltliteratur &ndash; verfasst von einer Frau, in einer Zeit, in der Frauen theologisches Schreiben fast g\u00e4nzlich verwehrt war. 1970, fast vierhundert Jahre nach ihrem Tod, wurde sie gemeinsam mit Katharina von Siena als erste Frau \u00fcberhaupt zur <em>Kirchenlehrerin</em> erhoben &ndash; jener h\u00f6chsten Anerkennung, die die katholische Kirche f\u00fcr theologisches Wirken vergibt.</p>
          <p class="vb-intro">So zeigt sich die SO3w4 in ihrer weitesten Wirkung: eine Frau, deren Bed\u00fcrfnis nach sichtbarer, unanfechtbarer Anerkennung sich mit einer Tiefe verband, die Jahrhunderte \u00fcberdauerte. Der Gepard mit dem Viererfl\u00fcgel kann eine ganze geistliche Tradition neu begr\u00fcnden &ndash; wenn er lernt, dass das Innerste, das er zu sch\u00fctzen versucht, gerade dann am st\u00e4rksten wirkt, wenn er es teilt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/so3", label:"SO3 &ndash; Der Gepard: Subtyp-Profil"},
        {route:"beruehmte-sean-connery", label:"Portr\u00e4t: Sean Connery (SO3w4)"},
        {route:"beruehmte-karl-lagerfeld", label:"Portr\u00e4t: Karl Lagerfeld (SO3w4)"},
        {route:"beruehmte-gottfried-wilhelm-leibniz", label:"Porträt: Gottfried Wilhelm Leibniz (SO3w4)"},
        {route:"krankheitsportraets-teresa-von-avila", label:"Krankheitsporträt: Teresa von Ávila – Scheintod & Lähmung"},
      ])}
    </div>
  `);
}

export function uliHoenessPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\u00fchmte Pers\u00f6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-uli-hoeness-portrait.jpg" alt="Uli Hoene\u00df" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Uli Hoene\u00df</p>
        <p class="krim-portrait-typ">SE2w3 &middot; Selbsterhaltender Typ 2 mit Dreierfl\u00fcgel</p>
        <p class="krim-portrait-subtitle">Fu\u00dfballprofi, Manager &amp; Pr\u00e4sident des FC Bayern M\u00fcnchen, geb. 1952 &ndash; Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei &ndash; und Uli Hoene\u00df ist dieses Tier in seiner kompromisslosesten Auspr\u00e4gung. Das Flusspferd braucht kein Publikum. Es braucht sein Revier: das Wasser, das es kennt, die Ufer, die ihm geh\u00f6ren, die Grenzen, die es mit jedem Gramm seines K\u00f6rpers markiert und verteidigt. Es wirkt gutm\u00fctig &ndash; bis jemand zu nah kommt. Dann zeigt es, was wirklich in ihm steckt.</p>
          <p class="vb-intro">Der deutsche Fu\u00dfballfunktion\u00e4r Uli Hoene\u00df ist seit mehr als f\u00fcnfzig Jahren der FC Bayern M\u00fcnchen. Nicht als Angestellter, nicht als Funktion\u00e4r &ndash; sondern als Mensch, der diesen Verein als sein Revier begriffen und mit einer Energie aufgebaut hat, die in der deutschen Fu\u00dfballgeschichte ihresgleichen sucht. Er hat als Spieler gewonnen, als Manager aufgebaut, als Pr\u00e4sident gef\u00fchrt &ndash; und nach dem tiefsten Sturz seines Lebens ist er zur\u00fcckgekehrt. Das Flusspferd steht auf.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: F\u00fcrsorge als \u00dcberlebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> ist der Subtyp der Zwei, der seine Energie am direktesten auf das eigene \u00dcberleben und das \u00dcberleben dessen richtet, was ihm am n\u00e4chsten ist. Naranjo nannte diesen Subtyp <em>Me First</em>: die Zwei, die ihre eigenen Bed\u00fcrfnisse benennt, ihr Territorium kennt und sch\u00fctzt &ndash; nicht durch R\u00fcckzug, sondern durch Pr\u00e4senz. Die SE2 ist die konkreteste, erdn\u00e4chste, am wenigsten romantisierende der drei Zweier-Varianten. Sie handelt. Sie sorgt. Sie sichert ab.</p>
          <p class="vb-intro">Bei Uli Hoene\u00df zeigt sich das in einer F\u00fcrsorge, die nicht abstrakt ist, sondern pers\u00f6nlich und handfest. Er hat Spieler in Krisen angerufen, Familien geholfen, Transfers pers\u00f6nlich begleitet, Konflikte gel\u00f6st &ndash; nicht weil es zur Stellenbeschreibung geh\u00f6rte, sondern weil er es so verstand: Der FC Bayern ist eine Familie, und er ist derjenige, der diese Familie zusammenh\u00e4lt. Diese Art von F\u00fcrsorge ist keine Schw\u00e4che. Sie ist Macht &ndash; die Macht dessen, der wei\u00df, dass Zusammenhalt das Fundament von allem ist.</p>
          <p class="vb-intro">Dabei war Hoene\u00df nie ein Mann der gro\u00dfen Gesten f\u00fcr die Galerie. Was er tat, tat er direkt, oft diskret, manchmal ruppig. Das ist die SE2: keine elegante Diplomatie, sondern das unmittelbare Eingreifen dessen, der sich verantwortlich f\u00fchlt &ndash; und dieses Verantwortungsgef\u00fchl nicht delegiert.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierfl\u00fcgel: Erfolg als zweite Natur</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierfl\u00fcgel (w3)</strong> gibt der selbsterhaltenden Zwei etwas, das eine SE2 mit schwach ausgeprägtem Dreierflügel nicht von selbst hat: den Hunger nach messbarem Erfolg, nach Ergebnissen, nach dem Beweis, dass die eigene Arbeit wirkt. Die Drei misst sich an Zahlen, Titeln, Siegen. Sie braucht den Beweis &ndash; nicht f\u00fcr andere, sondern f\u00fcr sich selbst. In Kombination mit der SE2 entsteht jemand, der gleichzeitig tief f\u00fcrsorglich und gnadenlos zielorientiert ist.</p>
          <p class="vb-intro">Uli Hoene\u00df hat den FC Bayern von einem soliden Bundesligaclub zu einem der wirtschaftlich und sportlich erfolgreichsten Fu\u00dfballclubs der Welt gemacht. Er hat das nicht als Vision formuliert &ndash; er hat es getan. Jahrestitel, Champions-League-Siege, Rekordums\u00e4tze, Weltklasse-Transfers. Der Dreierfl\u00fcgel l\u00e4sst keine Mittelm\u00e4\u00dfigkeit zu. Er fragt immer: Wie gut war das wirklich? Und kann es noch besser werden?</p>
          <p class="vb-intro">Dieser Fl\u00fcgel hat aber auch seinen Schatten. Der Dreierfl\u00fcgel der SE2 neigt dazu, Erfolg mit Selbstwert gleichzusetzen: Ich bin, was ich leiste. Wenn die Leistung ausbleibt, wenn die Kontrolle entgleitet, kann das Fundament schwanken. Die Steueraff\u00e4re 2013 war f\u00fcr Hoene\u00df nicht nur ein juristisches Problem &ndash; sie war ein Einbruch in das Bild, das er von sich selbst hatte: der Mann, der alles im Griff hat.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Stolz als Antriebskraft</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Zwei hei\u00dft <strong>Stolz</strong> &ndash; und bei der SE2w3 nimmt dieser Stolz eine besondere Form an: Er richtet sich nicht auf pers\u00f6nliche Bewunderung, sondern auf das Werk. Auf das, was entstanden ist durch die eigene H\u00e4nde Arbeit, durch jahrzehntelanges Engagement, durch die Summe aller Entscheidungen. Dieser Stolz ist berechtigt &ndash; und er ist zugleich eine Falle, wenn er zur Bedingung f\u00fcr den eigenen Wert wird.</p>
          <p class="vb-intro">Uli Hoene\u00df hat den FC Bayern nicht als Job betrachtet. Er hat ihn als Lebenswerk begriffen. Das ist der Stolz der SE2w3 in seiner reinsten Form: kein Narzissmus, sondern die tiefe \u00dcberzeugung, dass das, was man aufgebaut hat, einmalig ist &ndash; und dass man selbst unentbehrlich f\u00fcr seinen Erhalt ist. Diese \u00dcberzeugung hat ihn angetrieben. Und sie hat es ihm schwer gemacht, loszulassen.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Sturz und die R\u00fcckkehr: Das Flusspferd steht auf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Steueraff\u00e4re von 2013 und das anschlie\u00dfende Gef\u00e4ngnisurteil &ndash; dreieinhalb Jahre, von denen er etwa die H\u00e4lfte absa\u00df &ndash; war ein Einschnitt, der jeden anderen vielleicht gebrochen h\u00e4tte. Hoene\u00df hat sich dem Verfahren gestellt, hat seine Schuld \u00f6ffentlich eingestanden, hat die Strafe angenommen. Das ist keine Selbstverst\u00e4ndlichkeit. Es ist die SE2 in ihrer reifen Form: Verantwortung \u00fcbernehmen &ndash; auch dann, wenn es schmerzt.</p>
          <p class="vb-intro">Was nach der Entlassung folgte, war das Kapitel, das ihn vielleicht am meisten definiert. Er kehrte zur\u00fcck &ndash; nicht triumphierend, sondern geerdet. Er \u00fcbernahm wieder das Amt des Pr\u00e4sidenten. Der FC Bayern empfing ihn. Das Flusspferd war ins Wasser zur\u00fcckgekehrt. Und wer gedacht hatte, er w\u00fcrde kleiner zur\u00fcckkommen, hatte das Tier untersch\u00e4tzt.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Geschenk: Ein Verein als Lebenswerk</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Uli Hoene\u00df dem deutschen Fu\u00dfball &ndash; und dem FC Bayern M\u00fcnchen im Besonderen &ndash; gegeben hat, l\u00e4sst sich nicht auf Titel reduzieren. Er hat gezeigt, dass ein Fu\u00dfballclub mehr sein kann als ein Gesch\u00e4ftsmodell: eine Gemeinschaft mit Haltung, mit Treue, mit einem Selbstverst\u00e4ndnis, das \u00fcber die Saison hinausgeht. Spieler, die in Krisen gerieten, haben von ihm gesprochen wie von einem Vater. Mitarbeiter, die Jahrzehnte blieben, weil sie wussten, dass jemand f\u00fcr sie einsteht. Das ist das Geschenk der SE2w3: Loyalit\u00e4t, die tr\u00e4gt.</p>
          <p class="vb-intro">Das Flusspferd sch\u00fctzt sein Revier &ndash; aber es sch\u00fctzt auch die, die darin leben. Uli Hoene\u00df hat den FC Bayern nicht f\u00fcr sich gebaut. Er hat ihn f\u00fcr das gebaut, was er in ihm sah: eine Gemeinschaft, die Bestand hat. Das ist sein Lebenswerk. Und daran wird sich wenig \u00e4ndern &ndash; auch wenn das Flusspferd irgendwann den Flusslauf wechselt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe \u2013 Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist \u2013 Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich \u2013 wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\u00f6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\u00fchmten Pers\u00f6nlichkeiten"},
        {route:"subtype/se2", label:"SE2 \u2013 Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-jan-ullrich", label:"Portr\u00e4t: Jan Ullrich (SE2w3)"},
        {route:"beruehmte-gloria-von-thurn-und-taxis", label:"Portr\u00e4t: Gloria von Thurn und Taxis (SE2w1)"},
      ])}
    </div>
  `);
}

export function wolfgangAmadeusMozartPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wolfgang-amadeus-mozart-portrait.jpg" alt="Wolfgang Amadeus Mozart" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wolfgang Amadeus Mozart</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Österreichischer Komponist, 1756–1791 – Tierentsprechung: Flusspferd</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Flusspferd</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Flusspferd</strong> ist das Tier der selbsterhaltenden Zwei – ein Wesen, das nach außen verspielt und gutmütig wirkt, sich aber mit ungeahnter Wucht behauptet, sobald sein Revier oder seine Nächsten bedroht sind. Wolfgang Amadeus Mozart passte selten in das Bild des überirdisch schwebenden Genies, das die Nachwelt aus ihm gemacht hat – er war ein Mensch von enormer Direktheit, körperlicher Lebensfreude und einem sehr konkreten Gespür dafür, was er zum Überleben brauchte.</p>
          <p class="vb-intro">Der österreichische Komponist Wolfgang Amadeus Mozart, geboren 1756 in Salzburg, wurde von seinem Vater Leopold, selbst Komponist und ehrgeiziger Manager seines Sohnes, ab dem sechsten Lebensjahr durch die Höfe Europas gereicht – Paris, London, Den Haag, Italien. Ein Kind, das lernen musste, sich selbst und seine Familie durch die eigene Begabung abzusichern, bevor es überhaupt eine Kindheit außerhalb der Bühne kannte.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Zwei: Fürsorge als Überlebensprinzip</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Zwei (SE2)</strong> nennt Naranjo <em>Me First</em>: die Zwei, die ihre eigenen Bedürfnisse kennt und benennt, die sich um das Überleben der eigenen Person und derer sorgt, die ihr am nächsten stehen – konkret, direkt, ohne große Umwege. Mozarts Briefe sind voll davon: Er kümmerte sich intensiv um seine Frau Constanze, um Freunde in Not, um Schüler, denen er unentgeltlich Unterricht gab, obwohl er selbst oft in finanzieller Bedrängnis steckte.</p>
          <p class="vb-intro">Gleichzeitig war Mozart einer der ungeniertesten Briefeschreiber der Musikgeschichte: Die sogenannten "Bäsle-Briefe" an seine Cousine Maria Anna Thekla strotzen vor derbem, fäkalem Humor – eine Direktheit, die nichts mit höfischer Etikette zu tun hatte, sondern mit dem unmittelbaren, körperlichen Lebensgefühl der SE2. Fürsorge und Ausgelassenheit lagen bei ihm nah beieinander, beides Ausdruck derselben erdverbundenen Präsenz.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Der Beweis auf der Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Zwei den Hunger nach sichtbarem, messbarem Erfolg – die Bühne, den Applaus, den Beweis der eigenen Unentbehrlichkeit. Mozart brach 1781 öffentlichkeitswirksam mit dem Salzburger Fürsterzbischof, um sich in Wien als freischaffender Künstler zu behaupten – ein Wagnis, das nur jemand einging, der seinem eigenen Marktwert vertraute.</p>
          <p class="vb-intro">In Wien organisierte er eigene Subskriptionskonzerte, komponierte am laufenden Band Klavierkonzerte für den eigenen Auftritt als Solist, und suchte Zeit seines Lebens nach einer möglichst prestigeträchtigen Hofanstellung. Der Dreierflügel der SE2 fragt nicht nur "Wie sichere ich das Überleben?", sondern auch "Wie beweise ich, dass ich der Beste bin?" – und Mozart bewies es, Werk für Werk, oft in schwindelerregendem Tempo. Die Ouvertüre zu "Don Giovanni" soll er in der Nacht vor der Uraufführung geschrieben haben.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Stolz zwischen Genie und Existenzangst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Zwei heißt <strong>Stolz</strong> – bei der SE2w3 gerichtet auf das eigene Können und dessen sichtbaren Ertrag. Mozart wusste um seinen Wert und äußerte ihn selbstbewusst, manchmal zum Verdruss seiner Zeitgenossen. Doch dieser Stolz stand in ständiger Spannung zu einer sehr realen finanziellen Unsicherheit: Trotz beachtlicher Einnahmen lebte er oft über seine Verhältnisse, verschickte in seinen letzten Lebensjahren wiederholt Bittbriefe um Kredite an seinen Logenbruder Michael Puchberg.</p>
          <p class="vb-intro">Das ist die Kehrseite der SE2w3: Wenn der eigene Wert am sichtbaren Erfolg hängt, wird jede Durststrecke zur existenziellen Bedrohung. Mozart kompensierte das nicht mit Rückzug, sondern mit noch mehr Arbeit, noch mehr Kompositionen, noch mehr Auftritten – das Flusspferd, das sein Revier notfalls durch schiere Ausdauer verteidigt.</p>
        </blockquote>

        <h2 class="vb-section">5. Bach, Beethoven und Schubert: Begegnungen über die Zeit hinweg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Anfang der 1780er Jahre entdeckte Mozart in der Wiener Bibliothek des Barons Gottfried van Swieten die Fugenkunst Johann Sebastian Bachs (SX1w9) – eine Begegnung, die sein Spätwerk grundlegend veränderte. Er arrangierte Bach-Fugen für Streichtrio, und die kontrapunktische Strenge, die er dabei studierte, mündete in Werke wie das Finale der "Jupitersinfonie" oder die c-Moll-Messe. Die Inbrunst der sexuellen Eins traf hier auf die Bühnenpräsenz der selbsterhaltenden Zwei – und beide fanden in der reinen Form der Fuge einen gemeinsamen Nenner.</p>
          <p class="vb-intro">Der Überlieferung nach soll der junge Ludwig van Beethoven (SX6w5) 1787 in Wien vor Mozart vorgespielt haben; ob Mozarts oft zitierter Ausspruch, dieser Junge werde "der Welt noch zu reden geben", historisch verbürgt ist, bleibt umstritten – die Begegnung selbst gilt als plausibel. Beethovens 3. Klavierkonzert in c-Moll folgt jedenfalls unverkennbar dem Vorbild von Mozarts Klavierkonzert Nr. 24 in derselben Tonart, ein stiller Dialog zwischen Wolf und Flusspferd über die Zeit der Wiener Klassik hinweg. Franz Schubert (SE6w5), 1797 geboren, konnte Mozart nie persönlich begegnen – er kam sechs Jahre nach dessen Tod zur Welt. Doch seine Tagebücher zeugen von einer fast religiösen Verehrung für Mozarts Musik, die er als tröstenden Lichtblick in dunklen Zeiten beschrieb. Das Kaninchen fand im verstorbenen Flusspferd einen Trost, den die eigene Gegenwart ihm oft verweigerte.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Das Requiem und die Fülle eines kurzen Lebens</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Mozart starb 1791 mit nur 35 Jahren, wahrscheinlich an den Folgen einer rheumatischen Fiebererkrankung, und wurde in einem Wiener Schachtgrab beigesetzt – damals übliche Praxis, keine Folge von Armut, wie der Mythos später behauptete. Sein letztes Werk, das Requiem, blieb unvollendet und wurde nach seinem Tod von seinem Schüler Franz Xaver Süßmayr abgeschlossen – in Auftrag gegeben von einem anonymen Grafen, der es unter eigenem Namen aufführen wollte. Selbst im Tod blieb Mozarts Werk Gegenstand fremder Inszenierung.</p>
          <p class="vb-intro">In nur 35 Lebensjahren hinterließ er über 600 Werke – eine Fülle, die die Ausdauer und den Ehrgeiz der SE2w3 in ihrer reinsten, unermüdlichsten Form zeigt. Das Flusspferd mit Dreierflügel: fürsorglich bis zur eigenen Erschöpfung, stolz auf das Geschaffene, und unaufhörlich getrieben von der Frage, ob das nächste Werk den eigenen Wert erneut beweisen würde. Die Antwort der Nachwelt kam, wie so oft bei diesem Subtyp, erst nach seinem Tod – dafür umso lauter.</p>
        </blockquote>

        <p class="vb-intro">Die seit der Kindheit immer wiederkehrende Kette fieberhafter Erkrankungen und Mozarts plötzlicher Tod 1791 werden ausführlich im eigenen <a href="javascript:void(0)" data-route="krankheitsportraets-wolfgang-amadeus-mozart">Krankheitsporträt zu Mozart</a> gedeutet.</p>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"krankheitsportraets-wolfgang-amadeus-mozart", label:"Krankheitsporträt: Wolfgang Amadeus Mozart (SE2w3)"},
        {route:"beruehmte-johann-sebastian-bach", label:"Porträt: Johann Sebastian Bach (SX1w9) – dessen Fugenkunst er studierte"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Porträt: Ludwig van Beethoven (SX6w5) – der ihm möglicherweise vorspielte"},
        {route:"beruehmte-franz-schubert", label:"Porträt: Franz Schubert (SE6w5) – der ihn zeitlebens verehrte"},
        {route:"beruehmte-joseph-haydn", label:"Porträt: Joseph Haydn (SE3w2) – enger Freund und bewunderter Kollege"},
        {route:"subtype/se2", label:"SE2 – Das Flusspferd: Subtyp-Profil"},
        {route:"beruehmte-uli-hoeness", label:"Porträt: Uli Hoeneß (SE2w3)"},
        {route:"beruehmte-yayoi-kusama", label:"Porträt: Yayoi Kusama (SE2w3)"},
        {route:"beruehmte-nero", label:"Porträt: Nero (SE2w3) – Kaiser und Bühnenkünstler"},
      ])}
    </div>
  `);
}

export function albertoMariniPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alberto-marini-portrait.jpg" alt="Alberto Marini – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alberto Marini</p>
        <p class="krim-portrait-typ">SE6w5 &middot; Selbsterhaltender Typ 6 mit F\xfcnferfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Italienisch-spanischer Drehbuchautor &amp; Regisseur, geb. 1972 in Turin &ndash; Tierentsprechung: Kaninchen</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Kaninchen, das sich ein neues Zuhause baute</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Kaninchen</strong> ist das Tier des selbsterhaltenden Typs 6 &ndash; wachsam, anpassungsf\xe4hig, auf der Suche nach einem verl\xe4sslichen Ort, an dem es Wurzeln schlagen kann. Alberto Marini, 1972 in Turin geboren, zog 1999 nach Barcelona &ndash; und blieb. \xdcber ein Vierteljahrhundert lang wurde die katalanische Stadt zu seinem eigentlichen kreativen Zuhause, dem Ort, von dem aus er sich als Drehbuchautor im spanischen Genrekino etablierte, weit entfernt von seiner italienischen Herkunft.</p>
          <p class="vb-intro">Kein Zufall, dass ausgerechnet das enge, vertraute Terrain zum zentralen Motiv seiner bekanntesten Arbeiten wurde: ein Wohnhaus unter Quarant\xe4ne, eine Wohnung, in der sich nachts jemand einschleicht, eine Stadt, die zur Bedrohung wird, sobald das Vertraute nicht mehr sicher ist. Das Kaninchen, das genau wei\xdf, wie zerbrechlich Sicherheit sein kann, sobald sie einmal durchbrochen wird.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Sechs: W\xe4rme in langj\xe4hrigen Arbeitsb\xfcndnissen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Sechs (SE6)</strong> ist nach Naranjo der Subtyp, den er <em>W\xe4rme</em> nannte: Sicherheit entsteht nicht durch Kontrolle von au\xdfen, sondern durch verl\xe4ssliche, \xfcber Jahre gewachsene Bindungen. Bei Marini zeigt sich dieses Muster in seiner jahrzehntelangen Zusammenarbeit mit dem Regisseur Jaume Balaguer\xf3: Zun\xe4chst als Koproduzent an dessen Horrorfilm \xbb[Rec]\xab (2007) beteiligt, entwickelte er sich stetig zum Drehbuchautor weiter und schrieb 2011 das gefeierte Skript zu \xbbMientras duermes\xab &ndash; deutscher Titel \xbbSleep Tight\xab &ndash;, wieder unter Balaguer\xf3s Regie.</p>
          <p class="vb-intro">Keine kurzlebige Zusammenarbeit, sondern ein \xfcber Jahre gewachsenes Vertrauensverh\xe4ltnis, aus dem heraus Marini sich schrittweise gr\xf6\xdfere kreative Verantwortung erarbeitete &ndash; vom Produzenten zum alleinigen Drehbuchautor, bis hin zu seinem eigenen Regiedeb\xfct mit dem Horrorfilm \xbbSummer Camp\xab (2015, deutscher Titel \xbbCamp \u2013 T\xf6dliche Ferien\xab). Sicherheit durch bew\xe4hrte N\xe4he statt durch den spektakul\xe4ren Alleingang.</p>
        </blockquote>

        <h2 class="vb-section">3. Der F\xfcnferfl\xfcgel: Pr\xe4zise Konstruktion statt intuitiver Improvisation</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>F\xfcnferfl\xfcgel (w5)</strong> gibt der selbsterhaltenden Sechs eine analytische, konstruktive K\xfchle, die sich bei Marini im rein handwerklichen Aufbau seiner Drehb\xfccher zeigt. Sein preisgekr\xf6ntes Skript zu \xbbMientras duermes\xab (Bester Drehbuch-Preis bei den Gaud\xed Awards 2012) funktioniert nicht \xfcber spontane Schockmomente, sondern \xfcber eine minuti\xf6s konstruierte Spannung: Ein Hausmeister, der das vertraute, sichere Zuhause seiner Bewohnerinnen systematisch, Schritt f\xfcr Schritt, von innen unterwandert.</p>
          <p class="vb-intro">Auch sein Skript zu \xbbEl Desconocido\xab (2015, international auch als \xbbRetribution\xab bekannt, deutscher Titel ebenfalls \xbbEl Desconocido\xab), das ihm eine Goya-Nominierung f\xfcr das beste Originaldrehbuch einbrachte, folgt demselben Prinzip: eine streng durchkonstruierte, in Echtzeit ablaufende Bedrohung, bei der jede Regel des Spiels von Anfang an feststeht. Die Sechs, die Sicherheit nicht im Chaos, sondern in der pr\xe4zisen, nachvollziehbaren Konstruktion sucht &ndash; und genau diese Konstruktion dann nutzt, um beim Publikum genau die Unsicherheit auszul\xf6sen, die sie selbst zu vermeiden sucht. Ein klassischer psychologischer Abwehrmechanismus, die Projektion, die gerade bei der selbsterhaltenden Sechs als Verst\xe4rkungstyp besonders ausgepr\xe4gt auftritt \u2013 die Sechs, die ihre eigene Angst, meist unbewusst, in besonders starkem Ma\xdfe nach au\xdfen tr\xe4gt.</p>
        </blockquote>

        <h2 class="vb-section">4. Wenn das Vertraute zur Bedrohung wird: Das wiederkehrende Motiv</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Schon fr\xfch, mit dem Drehbuch zu \xbbRomasanta\xab (2004, deutscher Titel \xbbRomasanta \u2013 Im Schatten des Werwolfs\xab, nach einer wahren Geschichte um einen spanischen Serienm\xf6rder des 19. Jahrhunderts), etablierte Marini ein Thema, das sich durch sein gesamtes Werk zieht: die Angst, die nicht von au\xdfen kommt, sondern sich bereits im eigenen, sicher geglaubten Umfeld eingenistet hat. Bei \xbb[Rec]\xab ist es das eigene Wohnhaus, das zur Falle wird; bei \xbbMientras duermes\xab ist es der freundliche Hausmeister, dem man vertraut.</p>
          <p class="vb-intro">Genau das ist die Schattenseite der SE6-Angst, in Genrekino verwandelt: die Sorge, dass ausgerechnet der Ort, an dem man sich am sichersten f\xfchlt, in Wahrheit nie sicher war. Marini schreibt nicht \xfcber ferne, exotische Bedrohungen &ndash; er schreibt \xfcber den Einbruch der Gefahr in das Allervertrauteste, immer wieder, aus wechselnden Blickwinkeln.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Sechs</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE6w5 zeigt sich in Marinis F\xe4higkeit, aus der eigenen, tief verstandenen Angst vor dem Verlust von Sicherheit pr\xe4zise konstruierte, international erfolgreiche Genrewerke zu schaffen &ndash; Filme, die nicht auf platte Schockeffekte setzen, sondern auf die langsame, unentrinnbare Erosion des Vertrauten.</p>
          <p class="vb-intro">Der Schatten des Schicksalsmusters der Sechs, der <strong>Zweifel</strong>, zeigt sich in der Wahl seiner Antagonisten: Fast durchweg Figuren, die selbst aus tiefem Misstrauen und dem zwanghaften Bed\xfcrfnis nach Kontrolle handeln &ndash; der Hausmeister in \xbbMientras duermes\xab, der seine eigene, verzerrte Sicherheit erst dadurch herstellt, dass er anderen jede Sicherheit nimmt. Eine Umkehrung, die zeigt, wie nah Sicherheitsstreben und Kontrollzwang beieinanderliegen k\xf6nnen, wenn sie ins Extreme kippen.</p>
        </blockquote>

        <h2 class="vb-section">6. Verm\xe4chtnis: Das Kaninchen, das seine eigene H\xf6hle grub</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Vom Koproduzenten \xfcber den preisgekr\xf6nten Drehbuchautor bis zum Regisseur seines eigenen Films &ndash; Marinis Karriere verlief nicht sprunghaft, sondern als stetiger, gut abgesicherter Aufbau, jeder Schritt auf dem vorherigen aufbauend, jede neue Verantwortung erst \xfcbernommen, nachdem Vertrauen und Erfahrung sie trugen. \xdcber ein Vierteljahrhundert blieb Barcelona dabei sein fester Ausgangspunkt.</p>
          <p class="vb-intro">Wie Fjodor Dostojewski und Huang Yong Ping (beide SE6w5, siehe <a href="javascript:void(0)" data-route="beruehmte-fjodor-dostojewski">Portr\xe4t</a> bzw. <a href="javascript:void(0)" data-route="beruehmte-huang-yong-ping">Portr\xe4t</a>) fand auch Marini seine Sicherheit nicht in st\xe4ndiger Ver\xe4nderung, sondern im beharrlichen Festhalten an bew\xe4hrten Bindungen und einem selbst gew\xe4hlten Zuhause. Das Kaninchen, das sich nicht auf offenem Feld beweist, sondern seine eigene, sichere H\xf6hle gr\xe4bt &ndash; und von dort aus Geschichten \xfcber genau das erz\xe4hlt, was passiert, wenn diese H\xf6hle nicht mehr sicher ist.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe &ndash; Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist &ndash; Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich &ndash; wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/se6", label:"SE6 &ndash; Das Kaninchen: Subtyp-Profil"},
        {route:"beruehmte-fjodor-dostojewski", label:"Portr\xe4t: Fjodor Dostojewski (SE6w5)"},
        {route:"beruehmte-huang-yong-ping", label:"Portr\xe4t: Huang Yong Ping (SE6w5)"},
        {route:"beruehmte-karl-lauterbach", label:"Portr\xe4t: Karl Lauterbach (SE6w5)"},
      ])}
    </div>
  `);
}

export function helmutSchmidtPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Ber\xfchmte Pers\xf6nlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/helmut-schmidt-portrait.jpg" alt="Helmut Schmidt – Portr\xe4t" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Helmut Schmidt</p>
        <p class="krim-portrait-typ">SO1w9 &middot; Sozialer Typ 1 mit Neunerfl\xfcgel</p>
        <p class="krim-portrait-subtitle">Deutscher Bundeskanzler, 1918–2015 – Tierentsprechung: Gans</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Gans, die im Sturm die Formation hielt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist das Tier der sozialen Eins – geordnet, diszipliniert, mit einem untr\xfcglichen Gesp\xfcr daf\xfcr, wie etwas richtig gemacht wird, und bereit, in der eigenen Formation Verantwortung zu \xfcbernehmen, sobald es darauf ankommt. Helmut Schmidt, 1918 in Hamburg geboren, wurde genau in solchen Momenten zur pr\xe4genden Figur der bundesdeutschen Nachkriegsgeschichte: als Hamburger Innensenator w\xe4hrend der Sturmflut vom Februar 1962, als er binnen weniger Stunden rund 40.000 Helfer mobilisierte und koordinierte – und dabei, wie er sp\xe4ter selbst einr\xe4umte, „wissentlich und willentlich" gegen das Grundgesetz verstie\xdf, indem er ohne rechtliche Grundlage sogar Bundeswehreinheiten anforderte, weil die Lage keinen Aufschub duldete.</p>
          <p class="vb-intro">Von 1974 bis 1982 war er Bundeskanzler der Bundesrepublik Deutschland – eine Amtszeit, die von wirtschaftlichen Krisen, dem RAF-Terror und sicherheitspolitischen Weichenstellungen gepr\xe4gt war, und in der er sich den Ruf des unerschrockenen Krisenmanagers endg\xfcltig erarbeitete.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Verstand statt Visionen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> tr\xe4gt ihre inneren Ma\xdfst\xe4be von Richtig und Falsch nach au\xdfen und verlangt von der Welt, dass sie nach Vernunft und Ordnung funktioniert. Schmidt verk\xf6rperte das in Reinform: k\xfchle Sachlichkeit, ein ausgepr\xe4gter Widerwille gegen alles Sch\xf6ngeistige oder Visionäre, eine fast schon sprichwörtliche Direktheit. Sein bekanntester – und von ihm selbst später als „pampige Antwort auf eine dusselige Frage" bezeichneter – Ausspruch bringt diese Haltung auf den Punkt: „Wer Visionen hat, sollte zum Arzt gehen."</p>
          <p class="vb-intro">Dahinter steckt der Kern der Einser-Moral: nicht das Gro\xdfe, Schw\xe4rmerische z\xe4hlt, sondern das korrekt Durchdachte, das nachpr\xfcfbar Richtige. Schmidt, Wirtschaftsexperte und Mitbegr\xfcnder des Europ\xe4ischen W\xe4hrungssystems sowie der Weltwirtschaftsgipfel ab 1975, war stolz darauf, Probleme mit dem Verstand statt mit dem Bauchgef\xfchl zu l\xf6sen – eine Haltung, die ihm international den Ruf des „Weltökonomen" einbrachte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerfl\xfcgel: Unerschütterlichkeit im Sturm</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerfl\xfcgel (w9)</strong> verleiht der Eins eine bemerkenswerte \xe4u\xdfere Ruhe – der moralische Ernst bleibt, doch er \xe4u\xdfert sich nicht in lautem Rechthaben, sondern in unaufgeregter, fast phlegmatischer Standhaftigkeit unter Druck. Genau diese Kombination beschrieb Schmidt selbst, als er r\xfcckblickend von zwei Momenten seiner politischen Laufbahn sprach, die ihm „extreme Situationen, schnelle Entscheidungen" abverlangten, ohne dass ihm „ein Gesetz oder andere Richtlinien" Halt geben konnten – die Sturmflut 1962 und der Deutsche Herbst 1977.</p>
          <p class="vb-intro">Im Herbst 1977, nach der Entf\xfchrung des Arbeitgeberpr\xe4sidenten Hanns Martin Schleyer durch die RAF, blieb Schmidt hart: Er lehnte den Austausch inhaftierter RAF-F\xfchrungsmitglieder ab und erkl\xe4rte, der Staat m\xfcsse „mit der gebotenen Härte" reagieren. Als RAF-Sympathisanten wenig sp\xe4ter die Lufthansa-Maschine „Landshut" nach Mogadischu entf\xfchrten, um denselben Austausch zu erzwingen, ordnete Schmidt die St\xfcrmung durch die GSG 9 an – erfolgreich, mit allen 86 Geiseln gerettet. Schleyer selbst wurde von seinen Entf\xfchrern ermordet. Diese Entscheidung, gegen enormen emotionalen Druck an der eigenen Linie festzuhalten, ohne dabei laut oder theatralisch zu werden, ist die Neunerfl\xfcgel-Signatur der SO1 in ihrer reinsten Form: Festigkeit ohne Dramatik.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Raucher-Kanzler: Direktheit als Markenzeichen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Schmidts \xf6ffentliches Bild war untrennbar mit seinem beinahe permanenten Zigarettenkonsum verbunden – Mentholzigaretten, auch w\xe4hrend Fernsehinterviews und Bundestagsdebatten. Ein Zitat, das seine unerschütterliche Priorit\xe4tensetzung zusammenfasst, lautet sinngem\xe4\xdf: „Willen braucht man und Zigaretten." Diese \xf6ffentlich zur Schau gestellte Konsequenz gegen\xfcber der eigenen Gewohnheit, unbeeindruckt von \xe4rztlichem Rat oder \xf6ffentlicher Kritik, passt zur einsertypischen Überzeugung, selbst am besten zu wissen, was richtig ist.</p>
          <p class="vb-intro">Auch au\xdferhalb des Kanzleramts blieb er dieser Rolle treu: Als Mitherausgeber der Wochenzeitung „Die Zeit" und gefragter Elder Statesman kommentierte er bis ins hohe Alter Weltpolitik und Wirtschaft mit derselben k\xfchlen, oft schroffen Direktheit, die schon seine Kanzlerschaft gepr\xe4gt hatte – eine Rolle, die ihm gesellschaftliche Autorit\xe4t weit \xfcber sein Amt hinaus sicherte, ganz im Sinne der sozialen Ausrichtung der Eins: Bedeutung durch anerkannte moralisch-intellektuelle Instanz, nicht durch Rückzug.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO1w9 ist die F\xe4higkeit, <strong>in extremen Krisen ruhig, konsequent und ohne Selbstinszenierung zu handeln</strong> – Schmidts Umgang mit der Sturmflut und dem Deutschen Herbst gilt bis heute parteiübergreifend als Musterbeispiel besonnener Staatsf\xfchrung unter Druck, gerade weil er dabei nie ins Dramatische oder Selbstdarstellerische abglitt.</p>
          <p class="vb-intro">Der Schatten zeigte sich in einer gewissen Unnachgiebigkeit und einem ausgepr\xe4gten Widerwillen gegen alles, was ihm als schwärmerisch oder unrealistisch erschien – der Visionen-Ausspruch, den er selbst später bereute, zeigt, wie schnell die Einser-Korrektheit in eine reflexhafte, manchmal ungerechte Schroffheit gegen\xfcber anderen Denkweisen kippen kann. Auch der NATO-Doppelbeschluss von 1979, den er ma\xdfgeblich mit vorantrieb, spaltete die eigene Partei und sein Land tief – Konsequenz und Rechthaberei liegen bei der ungesunden Eins nah beieinander.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Gans, die die Formation nie verlie\xdf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Helmut Schmidt starb 2015 im Alter von 96 Jahren in Hamburg. Was als Krisenbew\xe4hrung in der Sturmflut begann, wurde zu einer der pr\xe4gendsten Kanzlerschaften der bundesdeutschen Geschichte – getragen von der \xdcberzeugung, dass Vernunft, Disziplin und n\xfcchterne Pflichterf\xfcllung mehr wert sind als gro\xdfe Visionen.</p>
          <p class="vb-intro">Die Gans, die in den schwersten Stunden die Formation hielt, ohne selbst ins Wanken zu geraten, und die bis ins hohe Alter als moralische Instanz gefragt blieb – das ist das bleibende Bild der sozialen Eins mit Neunerfl\xfcgel: Festigkeit, die nie laut werden musste, um wirksam zu sein.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Pers\xf6nlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle ber\xfchmten Pers\xf6nlichkeiten"},
        {route:"subtype/so1", label:"SO1 – Die Gans: Subtyp-Profil"},
        {route:"krankheitsportraets-helmut-schmidt", label:"Krankheitsporträt: Helmut Schmidt (SO1w9) – jahrzehntelanges Rauchen"},
        {route:"beruehmte-roald-amundsen", label:"Portr\xe4t: Roald Amundsen (SO1w9)"},
        {route:"beruehmte-markus-lanz", label:"Portr\xe4t: Markus Lanz (SO1w9)"},
        {route:"beruehmte-ursula-von-der-leyen", label:"Portr\xe4t: Ursula von der Leyen (SO1w9)"},
        {route:"beruehmte-kurt-georg-kiesinger", label:"Portr\xe4t: Kurt Georg Kiesinger (SO1w9) – Vorgänger im Kanzleramt, derselbe Subtyp"},
        {route:"beruehmte-giorgia-meloni", label:"Portr\xe4t: Giorgia Meloni (SO1w9)"},
        {route:"beruehmte-emmanuel-macron", label:"Portr\xe4t: Emmanuel Macron (SO1w9)"},
        {route:"beruehmte-peter-sage", label:"Porträt: Peter Sage (SO1w9)"},
        {route:"beruehmte-marcel-reich-ranicki", label:"Portr\xe4t: Marcel Reich-Ranicki (SO1w9)"},
      ])}
    </div>
  `);
}

export function rupertSpiraPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-rupert-spira-portrait.jpg" alt="Rupert Spira – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Rupert Spira</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Sozialer Typ 7 mit Sechserflügel</p>
        <p class="krim-portrait-subtitle">Keramikkünstler &amp; spiritueller Lehrer, geb. 1960 &ndash; Tierentsprechung: Biber</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Biber, der nie aufhörte zu bauen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Biber</strong> ist das Tier des sozialen Typs 7 – der Kontratyp der Sieben nach Naranjo: rastloses Bauen im Dienst der Gemeinschaft, nie wirklich fertig, nie im Namen des eigenen Genusses. Rupert Spira begann seine Laufbahn als gefeierter Keramikkünstler, dessen Werke in bedeutenden Sammlungen wie dem Victoria and Albert Museum in London vertreten sind – bevor er sich vollständig der Vermittlung nicht-dualer Weisheit (Advaita Vedanta) widmete.</p>
          <p class="vb-intro">Seit Jahrzehnten hält er Retreats, schreibt Bücher, führt Dialoge und veröffentlicht Videos – ein Werk, das nie als abgeschlossen gilt, sondern sich beständig in neue Formate und Formulierungen fortsetzt, kaum ist eine Fragestellung erschöpfend behandelt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Sieben: Dienst an etwas Größerem als sich selbst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Sieben (SO7)</strong> baut nicht für den eigenen Ruhm, sondern im Dienst einer Idee oder Gemeinschaft, die größer ist als die eigene Person. Bei Spira zeigt sich das im vollständigen Bruch mit einer bereits erfolgreichen Keramikkarriere zugunsten einer Lehrtätigkeit, die keinerlei Garantie auf ähnlichen Erfolg bot – eine Entscheidung, die einzig der Weitergabe eines als wesentlich erkannten Verständnisses diente.</p>
          <p class="vb-intro">Das teilt er mit Jeanne-Marie Guyon (SO7w6), die der Lebensmusterkompass als jemanden beschreibt, der ›ihr gesamtes Leben einem einzigen Bauwerk‹ widmete – ›kein Territorium, keine Macht, kein persönlicher Ruhm, sondern der Dienst an einer geistigen Idee‹. Spiras jahrzehntelange, unermüdliche Lehrtätigkeit in aller Welt zeigt dasselbe Muster: kontinuierliches Bauen an einem geistigen Werk, das über die eigene Biografie hinausreicht.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Sechserflügel: Verwurzelung in einer geprüften Tradition</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Sechserflügel</strong> verleiht der sozialen Sieben eine zusätzliche Note von Loyalität und dem Bedürfnis, das eigene Werk in einer verlässlichen, geprüften Linie zu verankern, statt frei improvisierend zu wirken. Bei Spira zeigt sich das in seiner jahrelangen Ausbildung bei dem Advaita-Lehrer Francis Lucille und in seiner ausdrücklichen Verortung innerhalb der Kaschmir-Shaivismus- und Advaita-Vedanta-Tradition, statt eine völlig eigenständige, traditionslose Lehre zu erfinden.</p>
          <p class="vb-intro">Diese Treue zu einer Linie, kombiniert mit rastlosem eigenem Weiterbauen, zeigt den Sechserflügel in seiner konstruktivsten Form: Sicherheit durch Verwurzelung, nicht durch Stillstand.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Lehre selbst: das „Ich bin" jenseits von Gedanken, Gefühlen und Körperempfindungen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Bei aller biografischen Vielschichtigkeit bleibt der eigentliche Kern von Spiras Lehre erstaunlich einfach – und genau darin liegt ihre Tiefe. Seine zentrale Einladung lautet, die Aufmerksamkeit nicht auf ein neues Ziel zu richten, sondern nach innen zu wenden: weg von Gedanken, Gefühlen, Körperempfindungen und sonstigen wahrnehmbaren Erscheinungen, hin zu jenem schlichten, immer schon vorhandenen Gefühl von „Ich bin", das all diesen wechselnden Inhalten zugrunde liegt. Nicht irgendein neuer, exotischer Zustand, den es erst zu erreichen gilt, sondern das, was ohnehin die ganze Zeit über da war – bevor der nächste Gedanke, das nächste Gefühl, die nächste Körperempfindung sich davorschiebt.</p>
          <p class="vb-intro">Entscheidend ist dabei der Ton, in dem Spira das vermittelt: kein Imperativ wie „Sei jetzt still" oder „Höre auf zu denken", der selbst wieder zu einer weiteren Anstrengung, einem weiteren Tun würde. Stattdessen die Einladung, einfach das zu sein, was man ohnehin immer schon war und immer sein wird – das Ich Bin selbst, nicht als Leistung, sondern als Erkennen eines bereits bestehenden Zustands. Gerade diese Schlichtheit, ganz ohne Technik-Gepäck oder spirituelles Vokabular, macht seine Vermittlung so zugänglich, obwohl der philosophische Unterbau (Kaschmir-Shaivismus, Advaita Vedanta) hochkomplex ist.</p>
        </blockquote>

        <h2 class="vb-section">5. Vollständige innere Klarheit, bevor sie weitergegeben wird</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Spiras Lehrmethode ist geprägt von einer außergewöhnlich präzisen, schrittweisen Begriffsarbeit – bevor ein Konzept an Zuhörer weitergegeben wird, hat er es erkennbar bereits vollständig innerlich durchdrungen. Diese Vorgehensweise deckt sich mit dem Muster, das der Kompass bei Dieter Nuhr (SO7w8) beschreibt: ›Der Biber, der jeden Stein genau prüft, bevor er ihn einsetzt.‹</p>
          <p class="vb-intro">Seine öffentlichen Dialoge, in denen er geduldig auf Fragen aus dem Publikum eingeht, ohne je ungeduldig oder ausweichend zu werden, zeigen dieselbe Sorgfalt: kein improvisiertes Blenden, sondern ein bereits durchdachtes Verständnis, das sich in jeder Antwort neu, aber konsistent entfaltet. Bemerkenswert ist dabei die Spannung zum eigenen Subtyp: Die soziale Sieben baut normalerweise rastlos an immer neuen Konzepten weiter – Spiras eigentliche Botschaft zielt jedoch genau auf das Innehalten jenseits jeder weiteren gedanklichen Konstruktion. Das konzeptuelle Bauen dient hier nicht der Selbstdarstellung, sondern soll sich am Ende selbst überflüssig machen.</p>
        </blockquote>

        <h2 class="vb-section">6. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO7w6 zeigt sich in Spiras Fähigkeit, ein komplexes philosophisches Feld über Jahrzehnte hinweg konsequent und ohne erkennbare Ermüdung weiterzuentwickeln – ein Werk, das mit jedem neuen Buch, jedem neuen Retreat um eine weitere Facette wächst, ohne sich zu wiederholen.</p>
          <p class="vb-intro">Der Schatten der sozialen Sieben zeigt sich dort, wo das rastlose Weiterbauen selbst zum Zwang wird – wo ein Innehalten, ein bewusstes Nichtstun, schwerer fällt als das nächste Projekt zu beginnen, obwohl gerade die von Spira gelehrte Botschaft im Kern genau dieses Innehalten betont.</p>
        </blockquote>

        <h2 class="vb-section">7. Der Handwerker, der vom Ton zum Bewusstsein wechselte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Rupert Spiras Weg zeigt die soziale Sieben mit Sechserflügel in einer ihrer stillsten, aber beharrlichsten Formen: kein lauter Auftritt, sondern jahrzehntelanges, sorgfältiges Bauen an einem geistigen Werk, das einer geprüften Tradition treu bleibt und doch nie aufhört, sich weiterzuentwickeln. Der Biber tauscht das Baumaterial – vom Ton zum Wort –, aber nicht das Bauen selbst.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/so7", label:"SO7 – Der Biber: Subtyp-Profil"},
          {route:"beruehmte-john-ioannidis", label:"Porträt: Prof. Dr. John Ioannidis (SO7w6)"},
          {route:"beruehmte-christian-drosten", label:"Porträt: Prof. Dr. Christian Drosten (SO7w6)"},
          {route:"beruehmte-gregor-gysi", label:"Porträt: Dr. Gregor Gysi (SO7w6)"},
          {route:"praxistipps-heilpraktiker/das-ewige-ich-bin", label:"Praxistipp: Das ewige ›Ich bin‹ jenseits der Fixierung"},
        ])}
      </div>
    </div>
  `);
}

export function jonBonJoviPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jon-bon-jovi-portrait.jpg" alt="Jon Bon Jovi – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jon Bon Jovi</p>
        <p class="krim-portrait-typ">SX9w1 &middot; Sexueller Typ 9 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Musiker, geb. 1962 &ndash; Sänger und Gründer von Bon Jovi &ndash; Tierentsprechung: Faultier</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Das Faultier, das bei einer Bindung blieb</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das <strong>Faultier</strong> ist das Tier der sexuellen Neun – ein Tier, das sich nicht auf viele Kontakte verteilt, sondern vollständig mit einer einzigen, tragenden Bindung verschmilzt. John Francis Bongiovi Jr., 1962 in Perth Amboy, New Jersey, geboren, lernte seine spätere Frau Dorothea Hurley 1980 als Schüler an der Sayreville War Memorial High School kennen. Nach Jahren wechselhafter Beziehung heirateten die beiden 1989 heimlich in einer Hochzeitskapelle in Las Vegas – und sind bis heute, über 35 Jahre später, verheiratet.</p>
          <p class="vb-intro">Dieselbe Verschmelzungsfähigkeit zeigt sich in seiner Band: Bon Jovi wurde 1983 gegründet und besteht in ihrem Kern bis heute – eine der seltenen Rockbands, die über vier Jahrzehnte im Wesentlichen zusammenblieb, statt sich in wechselnden Besetzungen aufzulösen.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Neun: Alle gehören dazu</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Neun (SX9)</strong> sucht nach Naranjo Erfüllung durch vollständige Verschmelzung – mit einem Menschen, aber auch mit einer Gemeinschaft, in der niemand ausgeschlossen bleibt. Seit 2006 betreibt Bon Jovi über die Jon Bon Jovi Soul Foundation gemeinnützige „Soul Kitchen"-Restaurants in New Jersey, die nach dem Prinzip „Pay It Forward" arbeiten: Wer zahlen kann, zahlt einen freien Betrag oder hilft mit; wer nicht zahlen kann, isst trotzdem – ohne dass am Tisch ein Unterschied gemacht wird, wer zu welcher Gruppe gehört.</p>
          <p class="vb-intro">Genau das ist die SX9-Logik in ihrer wohltätigsten Form: Es gibt keine Trennung zwischen „denen, die dazugehören" und „denen, die es nicht tun" – alle sitzen am selben Tisch. Über 275.000 Mahlzeiten wurden auf diese Weise inzwischen serviert, dazu Unterstützung für fast 1.000 Wohneinheiten für obdachlose und bedürftige Menschen in zwölf US-Bundesstaaten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Disziplin, wenn die Stimme versagt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Einserflügel</strong> gibt der sexuellen Neun eine verborgene Strenge, die sich besonders in Krisenmomenten zeigt. Nach enttäuschenden, spürbar schiefen Auftritten auf der US-Tournee 2022 diagnostizierten Ärzte eine fortschreitende Atrophie eines Stimmbands – ein potenziell karrierebeendendes Problem für einen Sänger. Statt aufzugeben, unterzog sich Bon Jovi einer aufwendigen, noch relativ neuen Operationsmethode (medialisierende Thyroplastik), bei der ein Implantat das geschwächte Stimmband von außen stützt.</p>
          <p class="vb-intro">Die eigene Beschreibung dieser Zeit als „herzzerreißend" zeigt, wie ernst ihn der drohende Verlust seiner Stimme traf – doch statt sich zurückzuziehen, arbeitete er diszipliniert auf ein Comeback hin: 2026 kündigte er mit der Band die internationale ›The Forever Tour‹ an. Diese Kombination aus stiller Verschmelzung mit der eigenen Band und dem Publikum und der zähen, unauffälligen Disziplin, die nötig ist, um zurückzukommen, ist typisch SX9w1.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Vom New-Jersey-Jungen zur Stadion-Institution</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Schon als Teenager stand Bon Jovi mit einer zehnköpfigen Coverband namens Atlantic City Expressway auf der Bühne und spielte Songs von New-Jersey-Kollegen wie Bruce Springsteen. Mit dem 1986 erschienenen Album ›Slippery When Wet‹ gelang der endgültige Durchbruch – über 28 Millionen verkaufte Exemplare allein davon, insgesamt mehr als 130 Millionen verkaufte Alben über die gesamte Karriere.</p>
          <p class="vb-intro">Was in all den Jahrzehnten blieb, war weniger die einzelne Hit-Single als die Verlässlichkeit der Verbindung: dieselbe Band, dieselbe Ehefrau, dasselbe New Jersey, aus dem er nie wirklich fortging – auch nicht, als er längst auf den größten Bühnen der Welt stand.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Neun mit Einserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX9w1 zeigt sich bei Bon Jovi in der Fähigkeit, jahrzehntelange Bindungen – zur Ehefrau, zur Band, zu seiner Herkunftsregion – ohne den Anschein von Zwang oder Krampf aufrechtzuerhalten, während gleichzeitig eine tiefe soziale Verantwortung wächst, die niemanden ausschließt.</p>
          <p class="vb-intro">Der Schatten der Neun liegt in der Gefahr, die eigenen Bedürfnisse hinter der Bindung an andere zu vergessen – erkennbar auch daran, wie lange Bon Jovi öffentlich schwieg oder zögerte, bevor er sich der eigenen, stimmlichen Verwundbarkeit stellte und wirklich handelte. Der Einserflügel half am Ende, aus dem stillen Aushalten eine konkrete, diszipliniert verfolgte Lösung zu machen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Sänger, der am selben Tisch sitzen bleibt</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Jon Bon Jovis Weg zeigt die sexuelle Neun mit Einserflügel in einer besonders langlebigen Form: eine Ehe, eine Band und eine Wohltätigkeitsarbeit, die alle auf demselben Prinzip beruhen – Verschmelzung statt Trennung, Zugehörigkeit statt Ausschluss. Das Faultier bewegt sich nicht viel, aber wenn seine Stimme in Gefahr gerät, kämpft es diszipliniert darum, sie zu behalten.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/sx9", label:"SX9 – Das Faultier: Subtyp-Profil"},
          {route:"beruehmte-ed-sheeran", label:"Porträt: Ed Sheeran (SX9w1) – ebenfalls Musiker, dieselbe konzentrierte Bühnenverschmelzung"},
          {route:"beruehmte-ringo-starr", label:"Porträt: Ringo Starr (SX9w1) – dieselbe Verschmelzung mit Ehe und Band"},
          {route:"beruehmte-helge-schneider", label:"Porträt: Helge Schneider (SX9w1)"},
          {route:"beruehmte-sophie-marceau", label:"Porträt: Sophie Marceau (SX9w1)"},
          {route:"beruehmte-david-guetta", label:"Porträt: David Guetta (SX9w1) – ebenfalls Musiker mit langjähriger eigener Institution"},
        ])}
      </div>
    </div>
  `);
}

export function barneyFishwickPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-barney-fishwick-portrait.jpg" alt="Barney Fishwick – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Barney Fishwick</p>
        <p class="krim-portrait-typ">SE4w5 &middot; Selbsterhaltungs-Vier mit Fünferflügel</p>
        <p class="krim-portrait-subtitle">Britischer Schauspieler, Autor und Comedian &ndash; Tierentsprechung: Taube</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Taube, die seit zwanzig Jahren neben demselben Menschen arbeitet</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Taube</strong> braucht keine große Bühne, um treu zu bleiben – sie findet einen verlässlichen Weggefährten und hält daran fest, über Jahrzehnte. Barney Fishwick kennt seinen kreativen Partner Will Hislop seit über zwanzig Jahren; gemeinsam bilden sie das Sketch-Duo GIANTS, das mit drei restlos ausverkauften Edinburgh-Fringe-Programmen und einer Writer's-Guild-Award-Nominierung für den Kurzfilm „A Hard Brexit" auf sich aufmerksam machte.</p>
          <p class="vb-intro">Statt sich auf eine einzelne Bühne oder ein einzelnes Format festzulegen, verteilte Fishwick seine Arbeit über Jahre still auf Radio, Fernsehen und Kino – ein Werk, das mehr durch stetige Kontinuität als durch spektakuläre Einzelmomente wächst.</p>
        </blockquote>

        <h2 class="vb-section">2. Die Selbsterhaltungs-Vier: Die unauffällige Rolle statt der großen Geste</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Selbsterhaltungs-Vier (SE4)</strong> ist nach Naranjo der Kontratyp der Vier: Das eigene Innenleben wird nicht zur Schau gestellt, sondern in beharrlicher, oft unspektakulärer Arbeit verarbeitet. Bei Fishwick zeigt sich das in der Auswahl seiner bekanntesten Filmrolle: Statt einer dramatischen Hauptfigur spielt er in „Living" an der Seite von Bill Nighy den bewusst unscheinbaren, kühl-distanzierten Sohn Michael – eine Rolle, die durch Zurückhaltung wirkt, nicht durch Auftrumpfen.</p>
          <p class="vb-intro">Auch seine Karriere insgesamt folgt diesem Muster: kein einzelner, lauter Durchbruch, sondern eine über Jahre verteilte Reihe kleinerer, sorgfältig gewählter Auftritte – „Showtrial", „House of the Dragon", „Big Boys", „The Buccaneers" –, die sich erst in der Summe zu einem sichtbaren Profil verdichten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Fünferflügel: Das Handwerk hinter der Bühne</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Fünferflügel</strong> verleiht der Selbsterhaltungs-Vier eine intellektuelle, forschende Note – die Verarbeitung findet nicht nur im Fühlen, sondern im genauen, strukturierten Erarbeiten eines Stoffs statt. Fishwick studierte in Oxford und arbeitet neben der Schauspielerei durchgehend als Autor: für BBC-Radioformate wie „The Now Show" und „Newsjack", für die eigens geschriebenen Hörspiele „BBC Radio Fjörd" und „Godsquad" – Letzteres nominiert für einen BBC Audio Drama Award.</p>
          <p class="vb-intro">Das Schreiben für Radio und Hörspiel verlangt gerade jene stille, präzise Detailarbeit im Verborgenen, die der Fünferflügel bevorzugt – ein Handwerk, das lange vor jedem öffentlichen Auftritt allein am Schreibtisch entsteht.</p>
        </blockquote>

        <h2 class="vb-section">4. Das Werk: Zwischen Bühne, Radio und Leinwand</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Von den Edinburgh-Fringe-Erfolgen mit GIANTS über die BBC-Radiocomedys bis zu Filmrollen neben Bill Nighy und in Serien wie „House of the Dragon" zieht sich eine durchgehende Linie: Fishwick bewegt sich zwischen Schreiben und Spielen, zwischen Comedy und Drama, ohne sich auf ein einzelnes Format zu beschränken – stets mit derselben unaufgeregten Sorgfalt.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der Selbsterhaltungs-Vier mit Fünferflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE4w5 zeigt sich bei Fishwick in der Fähigkeit, aus jahrelanger, stiller Detailarbeit ein vielseitiges, aber kohärentes Werk zu formen – als Autor ebenso ernst genommen wie als Darsteller, ohne dass eine Seite die andere überstrahlt.</p>
          <p class="vb-intro">Der Schatten der Vier zeigt sich in der Tendenz, das eigene Profil hinter der Vielzahl kleinerer Projekte zu verstecken, statt es bewusst sichtbar zu machen. Der Fünferflügel kann diese Zurückhaltung verstärken, wenn das genaue Ausarbeiten eines Stoffs zum Rückzug von der eigentlichen Bühne wird.</p>
        </blockquote>

        <h2 class="vb-section">6. Die Taube, die im Hintergrund am genauesten arbeitet</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Barney Fishwicks Weg zeigt die Selbsterhaltungs-Vier mit Fünferflügel in einer besonders stimmigen Form: eine zwanzigjährige kreative Partnerschaft, ein Werk, das über Radio, Bühne und Leinwand verteilt wächst, und eine Vorliebe für die unscheinbare, genau ausgearbeitete Rolle statt der lauten Hauptfigur. Die Taube braucht kein Rampenlicht, um ihre Treue zu beweisen.</p>
          ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
          ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
          ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
        </blockquote>

        ${relatedLinks([
          {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
          {route:"subtype/se4", label:"SE4 – Die Taube: Subtyp-Profil"},
          {route:"beruehmte-charlotte-wells", label:"Porträt: Charlotte Wells (SE4w5) – ebenfalls stille Filmarbeit, derselbe Subtyp"},
          {route:"beruehmte-sally-rooney", label:"Porträt: Sally Rooney (SE4w5)"},
          {route:"beruehmte-michael-david-rosenberg", label:"Porträt: Michael David Rosenberg / Passenger (SE4w3)"},
          {route:"beruehmte-neil-harbisson", label:"Porträt: Neil Harbisson (SE4w5) – ebenfalls jahrelange technische Präzisionsarbeit, derselbe Subtyp"},
        ])}
      </div>
    </div>
  `);
}

export function brianFennellPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-brian-fennell-portrait.jpg" alt="Brian Fennell (SYML) – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Brian Fennell (SYML)</p>
        <p class="krim-portrait-typ">SE4w3 &middot; Selbsterhaltungs-Vier mit Dreierflügel</p>
        <p class="krim-portrait-subtitle">Musiker und Songwriter, geb. 1983 &ndash; Tierentsprechung: Taube</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Taube, die ihren eigenen Ursprung suchte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Taube</strong> ist das Tier der selbsterhaltenden Vier – ein Vogel, der seinen Weg nach Hause findet, selbst wenn er ihn nie bewusst gelernt hat. Brian Leseney Fennell wurde 1983 in Issaquah, Washington, als Sohn zweier walisischer Einwanderer-Teenager geboren und kurz nach der Geburt zur Adoption freigegeben. Schon als Kind erhielt er klassischen Klavierunterricht und trat im Altersheim seiner Großmutter auf – ein früher, stiller Rahmen für Gefühle, die noch keinen anderen Ausdruck fanden.</p>
          <p class="vb-intro">Mit achtzehn, nach dem Tod eines Mitschülers, begann er zu komponieren – nicht als Ausbildungsschritt, sondern als Bewältigung. Die Taube kehrt zu ihrem Ursprung zurück, auch wenn sie ihn nie gekannt hat: Sein Künstlername SYML ist das walisische Wort für ›einfach‹ – eine bewusste Verbeugung vor der Herkunft, die ihm bei der Geburt genommen wurde.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Vier: Schmerz, der leise verarbeitet wird</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Vier (SE4)</strong> trägt die für die Vier typische Sehnsucht nach dem Fehlenden nicht nach außen, sondern verarbeitet sie in stiller, oft handwerklicher Form – Naranjo nannte diesen Subtyp den ›tapferen‹ oder ›stoischen‹ Typus der Vier: Das Leiden wird nicht ausgestellt, sondern in eine tägliche, disziplinierte Praxis verwandelt. Fennell studierte Musikpädagogik mit Schwerpunkt Percussion an der Seattle Pacific University – ein handwerklicher, methodischer Zugang zu einem zutiefst gefühlsbetonten Feld.</p>
          <p class="vb-intro">2021 starb sein Adoptivvater an Krebs. Statt den Verlust zu verdrängen, machte Fennell ihn zum Zentrum seines Schaffens: die EP ›Dim‹ (walisisch für ›nichts‹) und später das Album ›The Day My Father Died‹ (2023) entstanden direkt aus dieser Trauer. ›Das Wort dim beschreibt Trauer perfekt‹, sagte er dazu – ein Thema, zu dem er seither immer wieder zurückkehrt, nicht dramatisch, sondern als wiederkehrende, leise Bearbeitung desselben Schmerzes.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Dreierflügel: Vom Bandmitglied zur eigenen, sichtbaren Marke</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Dreierflügel (w3)</strong> gibt der selbsterhaltenden Vier die Fähigkeit, aus innerem Schmerz ein präsentables, öffentlich erfolgreiches Werk zu formen. 2005 gründete Fennell mit anderen die Band Barcelona, die 2008 einen Plattenvertrag bei Universal erhielt – doch statt in der Gruppenidentität aufzugehen, verließ er sie später, um unter dem eigenen, bewusst gewählten Namen SYML solo weiterzumachen.</p>
          <p class="vb-intro">Die Rechnung ging auf: Sein Song ›Where's My Love‹ wurde nach einer Platzierung in der Serie ›Teen Wolf‹ 2017 zum Hit, zweifach platiniert in den USA, zweifach platiniert in Australien, zweimal Nummer eins in Kanada. Eine zutiefst private, melancholische Komposition wurde zu einem messbaren, weltweiten Erfolg – die Vier liefert das Gefühl, der Dreierflügel sorgt dafür, dass es gehört wird.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Neid als Sehnsucht nach dem, was anderen selbstverständlich scheint</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Vier heißt <strong>Neid</strong> – bei der SE4w3 nicht als Missgunst, sondern als ständiges Ringen um das, was anderen mühelos zuzustehen scheint: eine bekannte Herkunft, eine ungebrochene Familie, ein selbstverständliches Zugehörigkeitsgefühl. Fennells gesamtes musikalisches Werk kreist um genau diese Themen – Adoption, Herkunft, Verlust –, immer wieder neu befragt, nie endgültig aufgelöst.</p>
          <p class="vb-intro">2023 sampelte Lana Del Rey seine Instrumentalkomposition ›I Wanted to Leave‹ für ihren Song ›Paris, Texas‹ – eine späte, öffentliche Bestätigung, dass genau diese leise, selbstgenügsame Klangsprache auch von außen als bedeutsam erkannt wird, ohne dass er selbst je danach gesucht hätte, sich einem größeren Popstar-Apparat anzuschließen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Vier</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE4w3 zeigt sich darin, wie aus einem sehr persönlichen, sogar existenziellen Thema – der eigenen Adoption, dem Verlust des Vaters – ein Werk entsteht, das Millionen Menschen erreicht, ohne dabei an Aufrichtigkeit zu verlieren. Fennell veröffentlichte 2025 mit ›Nobody Lives Here‹ bereits sein drittes Studioalbum – kontinuierliche, disziplinierte Schaffenskraft statt einmaligem Ausbruch.</p>
          <p class="vb-intro">Der Schatten liegt in der Gefahr, sich in genau diesem einen Thema festzusetzen: Trauer, Verlust und Herkunft ziehen sich durch fast sein gesamtes Werk – ein reicher, ehrlicher Fundus, der aber auch zeigt, wie sehr die SE4 im eigenen Schmerz verhaftet bleiben kann, weil sie ihn immer wieder neu vertont, statt ihn irgendwann endgültig hinter sich zu lassen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Die stille Taube, die dennoch gehört wurde</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Brian Fennell lebt mit seiner Frau Marion und den gemeinsamen drei Kindern in der Nähe von Seattle, arbeitet von einem Heimstudio aus – ein bewusst kleiner, geschützter Rahmen für ein Werk, das international gehört wird. Wie <a href="#beruehmte-michael-david-rosenberg">Michael David Rosenberg alias Passenger (SE4w3)</a> zeigt auch Fennell, wie die selbsterhaltende Vier mit Dreierflügel aus stiller, oft trauriger Introspektion messbaren, weltweiten Erfolg formen kann, ohne die eigene Verletzlichkeit dabei zu verlieren.</p>
          <p class="vb-intro">Sein Künstlername bleibt das treffendste Selbstporträt: ›einfach‹ – keine große Bühnenfigur, sondern eine Taube, die trotz ihrer stillen Art ihren Weg zu einem Millionenpublikum gefunden hat.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se4", label:"SE4 – Die Taube: Subtyp-Profil"},
        {route:"beruehmte-michael-david-rosenberg", label:"Porträt: Michael David Rosenberg (Passenger) (SE4w3) – ebenfalls Musiker, derselbe Subtyp"},
        {route:"beruehmte-adele", label:"Porträt: Adele (SE4w3)"},
        {route:"beruehmte-tim-bendzko", label:"Porträt: Tim Bendzko (SE4w3)"},
      ])}
    </div>
  `);
}

export function dustinHoffmanPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dustin-hoffman-portrait.jpg" alt="Dustin Hoffman – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dustin Hoffman</p>
        <p class="krim-portrait-typ">SE1w9 &middot; Selbsterhaltender Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Schauspieler, geb. 1937 &ndash; Tierentsprechung: Adler</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Adler, der sein Handwerk bis zur Erschöpfung perfektionierte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Adler</strong> beobachtet lange, bevor er handelt – und wenn er zuschlägt, dann mit einer Genauigkeit, die keine Wiederholung braucht. Dustin Hoffman, 1937 in Los Angeles geboren, wurde für eine Rollenvorbereitung berühmt, die weit über normales Schauspielhandwerk hinausging: Für ›Marathon Man‹ (1976) hielt er sich tagelang wach und hungerte, um die Erschöpfung seiner Figur wirklich zu spüren, statt sie nur zu spielen.</p>
          <p class="vb-intro">Für ›Rain Man‹ (1988) verbrachte er Wochen mit autistischen Menschen, um sich möglichst genau in ihre Wahrnehmungswelt hineinzuversetzen. Das ist keine Verschmelzung um der Nähe willen, sondern der Einser-Anspruch, eine Rolle nicht ungefähr, sondern exakt richtig darzustellen – eine Sorgfalt, die keine Abkürzung duldet.</p>
        </blockquote>

        <h2 class="vb-section">2. Die selbsterhaltende Eins: Das eigene Handwerk als Prüfstein</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>selbsterhaltende Eins (SE1)</strong> richtet ihren Perfektionismus nicht auf die Korrektur anderer, sondern nach innen: auf die eigene Vorbereitung, das eigene Handwerk, die eigene Integrität. Bei Hoffman zeigt sich das in einer schier grenzenlosen Wandlungsfähigkeit: Ratso Rizzo in ›Midnight Cowboy‹, Benjamin Braddock in ›Die Reifeprüfung‹, die alleinerziehende Vaterfigur in ›Kramer gegen Kramer‹, die Frau Dorothy Michaels in ›Tootsie‹ – jedes Mal wird die eigene Person dem selbstgesetzten Anspruch an Genauigkeit vollständig untergeordnet, bis von Dustin Hoffman selbst auf der Leinwand kaum noch etwas übrig zu sein scheint.</p>
          <p class="vb-intro">Diese Wandlungen sind nicht Selbstverlust um eines Gegenübers willen, sondern die konsequenteste Form der Einser-Frage: Habe ich diese Rolle wirklich verdient dargestellt, oder nur behauptet? Für Hoffman genügte eine plausible, gut gespielte Annäherung nicht – nur die exakte, selbst erarbeitete Wahrheit der Figur zählte.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Gelassenheit, die bei Bedarf hart wird</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> gibt der Eins eine entspannte, unaufgeregte Außenwirkung – Hoffman wirkt in Interviews oft leichtfüßig, humorvoll, nicht wie ein strenger Perfektionist. Doch sobald die Richtigkeit seiner Vorbereitung infrage gestellt wird, bricht der sonst gut kontrollierte Einser-Zorn ungefiltert durch. Hoffmans Zusammenarbeit mit Sydney Pollack bei ›Tootsie‹ war von andauernden, offen ausgetragenen Konflikten geprägt – Hoffman bestand auf seiner eigenen, monatelang entwickelten Vorbereitung, auch gegen den Widerstand des Regisseurs.</p>
          <p class="vb-intro">Bei ›Marathon Man‹ soll der von Laurence Olivier stammende, inzwischen legendäre Kommentar – Hoffman solle es doch einfach mal mit Schauspielern statt mit echter Erschöpfung versuchen – Hoffmans Methode offen infrage gestellt haben. Diese Konflikte entstanden nicht aus Geltungsbedürfnis, sondern aus der einsertypischen Gewissheit, den fachlich richtigeren Weg gewählt zu haben: Wo eine schwächer ausgeprägte Eins nachgeben würde, verteidigt die SE1w9 ihre Methode, sobald die eigene handwerkliche Korrektheit bedroht scheint.</p>
        </blockquote>

        <h2 class="vb-section">4. Die Leidenschaft: Zorn als Anspruch an die eigene Genauigkeit</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die Leidenschaft der Eins heißt <strong>Zorn</strong> – bei der selbsterhaltenden Variante richtet er sich in erster Linie gegen die eigene Nachlässigkeit, nicht gegen andere. Bei Hoffman ist dieser Zorn kaum je gegen ein Publikum oder eine Gruppe von Kollegen gerichtet, sondern gegen die Vorstellung, eine Rolle könnte weniger als vollständig richtig dargestellt werden: Die monatelange, oft einsame Vorbereitung findet in der stillen Auseinandersetzung mit dem eigenen Anspruch statt, nicht in der Zusammenarbeit mit anderen.</p>
          <p class="vb-intro">Genau wie bei Konrad Adenauer oder Anthony Hopkins (beide SE1w9) zeigt sich hier die Kombination aus Einser-Beharrlichkeit und Neuner-Gelassenheit: eine entspannte, fast unauffällige Grundhaltung im Alltag, verbunden mit der Fähigkeit, für die eigene, als richtig erkannte Methode mit vollem Einsatz einzustehen.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der selbsterhaltenden Eins mit Neunerflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SE1w9 zeigt sich in Hoffmans Fähigkeit, Figuren zu erschaffen, die bis heute als schauspielerische Maßstäbe gelten – zwei Oscars, sieben Nominierungen, eine über sechzig Jahre andauernde Karriere, die nie durch Wiederholung, sondern durch immer neue, akribisch erarbeitete Verwandlung getragen wurde.</p>
          <p class="vb-intro">Der Schatten liegt in der Kehrseite derselben Kompromisslosigkeit: 2017 erhoben mehrere Frauen Vorwürfe unangemessenen Verhaltens gegen Hoffman, die teils Jahrzehnte zurücklagen. Hoffmans öffentliche Reaktionen blieben auffällig knapp und ausweichend – ein Muster, das für die Eins typisch ist, wenn direkte Konfrontation mit eigenem Fehlverhalten droht, das sorgsam aufgebaute Selbstbild der Integrität zu erschüttern.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Ein Adler, der nie zweimal dieselbe Beute wählte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Dustin Hoffman bleibt einer der wandlungsfähigsten Schauspieler seiner Generation – nicht trotz, sondern wegen seiner Unfähigkeit, sich mit einer ungefähren, bloß plausiblen Annäherung an eine Rolle zufriedenzugeben. Von Ratso Rizzo bis Rain Man zieht sich dasselbe Muster: kompromisslose handwerkliche Genauigkeit, verteidigt mit einer Härte, die die ruhige, humorvolle Oberfläche der Neun kaum vermuten lässt.</p>
          <p class="vb-intro">Das ist die selbsterhaltende Eins mit Neunerflügel in ihrer konsequentesten Form: ein Adler, der nicht nachgibt, wenn die Richtigkeit seiner Arbeit bedroht wird, sondern beharrt – für den einen Anspruch, dem eigenen Handwerk nichts schuldig zu bleiben.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/se1", label:"SE1 – Der Adler: Subtyp-Profil"},
        {route:"beruehmte-konrad-adenauer", label:"Porträt: Konrad Adenauer (SE1w9)"},
        {route:"beruehmte-anthony-hopkins", label:"Porträt: Anthony Hopkins (SE1w9)"},
        {route:"beruehmte-stefan-homburg", label:"Porträt: Stefan Homburg (SE1w9)"},
      ])}
    </div>
  `);
}

export function tobiasBeckPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-tobias-beck-portrait.jpg" alt="Tobias Beck" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Tobias Beck</p>
        <p class="krim-portrait-typ">SX2w1 · Sexueller Typ 2 mit Einserflügel</p>
        <p class="krim-portrait-subtitle">Speaker, Trainer & Unternehmer, geb. 1977 – Tierentsprechung: Kamel</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Vom Schulverweis zur ausverkauften Halle</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Tobias Beck, geboren 1977 in Wuppertal, flog aus dem Kindergarten, aus der Grundschule und aus mehreren weiterführenden Schulen, bevor er 1997 doch noch sein Abitur machte. Er studierte Psychologie in Frankfurt und Kommunikationswissenschaft in Duisburg-Essen, arbeitete als Flugbegleiter und baute nebenbei ein Direktvertriebsgeschäft mit über 1.900 Vertriebspartnern in acht Ländern auf. 2001 gründete er seine eigene Akademie und trainierte seither hunderttausende Menschen live auf der Bühne – heute mit Auszeichnungen wie dem Publikumspreis ›Speaker of the Year‹ (2018, 2019) und Kunden wie Volkswagen, Ernst & Young und Bugatti.</p>
          <p class="vb-intro">Das <strong>Kamel</strong>, Tier der sexuellen Zwei, trägt nicht, weil es muss, sondern weil Tragen für dieses Tier eine Form ist, Verbindung herzustellen – und es speichert seine Energie, um sie dann in einem einzigen, vollständigen Ausbruch zu geben. Genau diese Bewegung beschreibt Becks eigenen Weg: Ein junger Mann, der in etlichen Institutionen als schwer vermittelbar galt, verwandelt genau diese Erfahrung Jahrzehnte später in ein Bühnenformat, das tausende Menschen gleichzeitig in Bewegung bringt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Zwei: Ein ganzer Saal, aber jeder fühlt sich persönlich gemeint</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte den Subtyp der sexuellen Zwei <em>Aggressivität</em> – nicht im feindseligen Sinn, sondern als das aktive, vorwärtsdrängende Zugehen auf den anderen, das keine Distanz zwischen sich und dem Gegenüber duldet. Die SX2 wartet nicht, bis sie angesprochen wird. Sie geht auf dich zu, sieht dich an, und macht aus der Begegnung ein Ereignis. Beck selbst formuliert sein Lebensmotto in genau dieser Logik: ›Verdienen kommt immer von Dienen.‹ Sein Anspruch ist nicht, ein Publikum zu unterhalten, sondern jeden Einzelnen darin so zu erreichen, dass er sich unmittelbar angesprochen fühlt.</p>
          <p class="vb-intro">Diese Fähigkeit, aus einer Halle voller Fremder tausende einzelne persönliche Begegnungen zu machen, gilt als eine der Kernkompetenzen erfolgreicher Bühnenredner überhaupt – und bei kaum jemandem im deutschsprachigen Raum wird sie so unmittelbar sichtbar wie bei Beck: direkter Blickkontakt, direkte Anrede, keine Distanz zwischen Bühne und erster Reihe. Sein erklärtes Ziel formuliert er so: ›Menschen auf die Bühne zu bringen, damit sie mit ihrer Botschaft andere berühren können.‹ Auch als Trainer gibt er dieses Prinzip weiter, statt es für sich zu behalten.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Einserflügel: Die Pflicht, es besser zu machen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Eine SX2 mit schwach ausgeprägtem Einserflügel könnte in der reinen Intensität des Kontakts aufgehen, ohne einen klaren moralischen Kompass. Ein stark ausgeprägter Einserflügel bringt stattdessen ein zweites Element mit: den Anspruch, dass es nicht reicht, gemocht zu werden – es kommt darauf an, ob das, was vermittelt wird, auch stimmt und trägt. Bei Beck zeigt sich das in einem durchgängig konfrontativen Zug seiner Arbeit: Er umschmeichelt sein Publikum nicht, sondern hält ihm unbequeme Wahrheiten vor Augen, verbunden mit der klaren Erwartung, dass jeder Einzelne mehr aus sich machen kann und soll.</p>
          <p class="vb-intro">Auch sein eigener Werdegang trägt diese Struktur: Aus einem jungen Mann mit Lernschwierigkeiten und mehreren Schulverweisen wurde nicht irgendein Motivationsredner, sondern einer, der mit fast schon missionarischem Ernst darauf besteht, dass persönliche Weiterentwicklung Disziplin und harte Arbeit verlangt – nicht bloß gute Gefühle. Der Einserflügel liefert damit die Substanz hinter der Bühnenpräsenz: Verführung allein würde ein Publikum vielleicht kurzfristig mitreißen, aber der moralische Anspruch dahinter ist es, der aus einem einzelnen Abend eine Verpflichtung macht, an der sich die Zuschauer messen lassen sollen.</p>
        </blockquote>

        <h2 class="vb-section">4. Licht und Schatten der sexuellen Zwei mit Einserflügel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht dieser Kombination ist die seltene Fähigkeit, große Menschenmengen unmittelbar und persönlich zu erreichen, ohne dabei beliebig zu werden – der Einserflügel sorgt dafür, dass hinter der Nähe auch ein Anspruch steht, dem man folgen kann. Genau darin liegt vermutlich auch ein Teil des Erfolgs: Beck vermittelt nicht nur das Gefühl, gesehen zu werden, sondern auch eine klare Richtung, in die diese Aufmerksamkeit führen soll.</p>
          <p class="vb-intro">Das Schicksalsmuster der Zwei ist der <strong>Stolz</strong> – die tiefe Überzeugung, für andere unentbehrlich sein zu müssen, und die Schwierigkeit, die eigene Bedürftigkeit zuzugeben, solange man selbst gibt. In Kombination mit dem Einserflügel kann daraus eine besonders intensive Form der Erschöpfung entstehen: Wer nicht nur verbinden, sondern auch moralisch recht behalten will, trägt eine doppelte Last. Beck hat öffentlich über Krisen und Rückschläge gesprochen, unter anderem in seinem Buch ›Das kleine Buch der Krisen‹ – ein Hinweis darauf, dass auch das Kamel, das speichert und dann alles auf einmal gibt, irgendwann selbst an die Grenze seiner Kapazität stößt.</p>
        </blockquote>

        <h2 class="vb-section">5. Der Heilungsweg: Vom Beweisen zum Vertrauen</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Zwei führt von der Frage <em>Werde ich gebraucht?</em> zur Erkenntnis <em>Ich bin liebenswert, auch ohne mich unentbehrlich zu machen.</em> Für die SX2 mit Einserflügel bedeutet das einen doppelten Schritt: nicht nur zuzulassen, dass die eigene Bedürftigkeit sichtbar wird, sondern auch loszulassen, dass jede Botschaft moralisch wasserdicht und jede Begegnung ein voller Erfolg sein muss.</p>
          <p class="vb-intro">Ein aufschlussreicher Vergleich innerhalb desselben Subtyps ist <a href="javascript:void(0)" data-route="beruehmte-monika-gruber">Monika Gruber</a> (SX2w1) – auch bei ihr entsteht Wirkung aus derselben Kombination von unmittelbarer, persönlicher Ansprache und einem klaren, oft konfrontativen moralischen Standpunkt. Mehr dazu im <a href="javascript:void(0)" data-route="beruehmte-monika-gruber">Porträt zu Monika Gruber</a>. Becks eigener Podcast, in dem er unter anderem gemeinsam mit seinem Vater Horst Beck offen über die eigene Familiengeschichte spricht, zeigt einen Schritt in genau diese Richtung: das Kamel, das nicht nur trägt, sondern sich auch einmal selbst zeigt.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx2", label:"SX2 – Das Kamel: Subtyp-Profil"},
        {route:"beruehmte-monika-gruber", label:"Porträt: Monika Gruber (SX2w1)"},
        {route:"beruehmte-matthias-schweighoefer", label:"Porträt: Matthias Schweighöfer (SX2w1)"},
        {route:"beruehmte-clueso", label:"Porträt: Clueso (SX2w1)"},
      ])}
    </div>
  `);
}

export function corneliaFunkePortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cornelia-funke-portrait.jpg" alt="Cornelia Funke – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Cornelia Funke</p>
        <p class="krim-portrait-typ">SO1w9 · Sozialer Typ 1 mit Neunerflügel</p>
        <p class="krim-portrait-subtitle">Deutsche Schriftstellerin, geb. 1958 – Tierentsprechung: Gans</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Die Gans, die erst diente, bevor sie erzählte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>Gans</strong> ist das Tier der sozialen Eins – diszipliniert, verlässlich, mit einem klaren Gespür dafür, was in der eigenen Formation und der größeren Gemeinschaft gebraucht wird. Cornelia Funke, 1958 in Dorsten geboren, begann ihren beruflichen Weg nicht als Schriftstellerin, sondern als ausgebildete Diplompädagogin: Nach dem Studium arbeitete sie als Sozialarbeiterin auf dem Bauspielplatz Tegelsbarg in Hamburg, mit Kindern, die es im Leben oft nicht leicht hatten.</p>
          <p class="vb-intro">Erst nebenberuflich, während sie parallel Buchillustration studierte, begann sie fremde Kindergeschichten zu illustrieren – und entdeckte dabei, dass ihr die Geschichten anderer Autoren zu den eigenen Bildern nicht gefielen. Mit 28 Jahren wurde sie freischaffende Autorin und Illustratorin zugleich; 1988 erschien ihr erstes selbst illustriertes Kinderbuch, ›Die große Drachensuche‹.</p>
        </blockquote>

        <h2 class="vb-section">2. Die soziale Eins: Talente im Dienst einer Aufgabe</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>soziale Eins (SO1)</strong> misst sich an einem hohen, oft moralisch aufgeladenen Maßstab und sucht Bedeutung nicht in persönlicher Bühnenpräsenz, sondern im korrekten, verantwortungsvollen Einsatz der eigenen Fähigkeiten für ein größeres Ganzes. Funke selbst beschrieb ihre Zeit auf dem Bauspielplatz als prägende Erkenntnis: Man müsse mit den Talenten, die man mitbekommen hat, auch tatsächlich etwas anfangen, um glücklich zu sein – eine fast pflichtethische Haltung gegenüber der eigenen Begabung, lange bevor diese Begabung zu Weltruhm führte.</p>
          <p class="vb-intro">Dieselbe Grundhaltung zeigt sich bis heute in ihrem Engagement für Organisationen wie ›Bärenherz‹ (ein Kinderhospiz), ›Smile Train‹, die ›African Millennium Foundation‹ und ›exilio‹, einen Verein, der sich für Migranten, Geflüchtete und Folterüberlebende einsetzt. Die Eins nutzt Erfolg nicht als Selbstzweck, sondern als Hebel, um sich für das einzusetzen, was ihr richtig erscheint.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Neunerflügel: Sechs Jahre an einer Welt, ohne sich zu verzetteln</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Neunerflügel (w9)</strong> bringt der sozialen Eins eine stille Ausdauer, die sich nicht in lautem Ehrgeiz erschöpft, sondern in geduldigem, gleichmäßigem Weiterarbeiten über lange Zeiträume. Die Tintenwelt-Trilogie, an der Funke von 2001 bis 2007 arbeitete, ist dafür das deutlichste Beispiel: sechs Jahre an einer einzigen, detailreich ausgearbeiteten Fantasiewelt, ohne dass die öffentliche Erwartung nach dem Welterfolg von ›Herr der Diebe‹ sie zu einer überstürzten Fortsetzung drängte.</p>
          <p class="vb-intro">Diese Neunerflügel-Gelassenheit zeigt sich auch darin, wie wenig Funke öffentlich um die eigene Person inszeniert – trotz über 60 veröffentlichter Bücher, Übersetzungen in mehr als 50 Sprachen und einem Platz unter den 100 einflussreichsten Persönlichkeiten des Jahres 2005 laut TIME Magazine bleibt ihr öffentliches Auftreten vergleichsweise zurückhaltend, das Werk von Cornelia Funke spricht lauter als die Autorin selbst.</p>
        </blockquote>

        <h2 class="vb-section">4. Die tatsächliche Leistung: Weltliteratur aus deutscher Kinderbuchtradition</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Funke tatsächlich auszeichnet, ist die seltene Fähigkeit, komplexe, mehrbändige Fantasiewelten mit einer inneren stofflichen Konsequenz zu bauen, die auch nach Millionen verkauften Exemplaren stimmig bleibt: In der Tintenwelt-Trilogie funktioniert die zentrale Idee – Figuren, die beim Vorlesen aus Büchern in die reale Welt treten und umgekehrt Menschen in die Bücher hineingezogen werden – als durchdachtes Regelsystem, nicht als beliebiger Fantasy-Kniff. ›Herr der Diebe‹ stand 2002 zwanzig Wochen lang auf der Bestsellerliste der New York Times und verkaufte sich allein im englischsprachigen Raum eine Million Mal – für eine deutschsprachige Kinderbuchautorin ein damals seltener internationaler Durchbruch.</p>
          <p class="vb-intro">Über 30 Millionen verkaufte Bücher weltweit entstehen nicht durch Marketing allein, sondern durch erzählerisches Handwerk: dichte, sinnlich konkrete Weltenbeschreibungen, glaubwürdige junge Hauptfiguren und ein Gespür dafür, Kindern und Jugendlichen anspruchsvolle Themen – Verlust, Identität, moralische Grauzonen – zuzutrauen, ohne sie zu überfordern.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Im Licht zeigt sich bei Funke die SO1w9 als jemand, der außergewöhnliches Talent konsequent in geduldige, jahrelange Detailarbeit übersetzt und den daraus entstehenden Erfolg wieder in gesellschaftliches Engagement zurückfließen lässt – Pflichtgefühl, das nicht erstarrt, sondern trägt.</p>
          <p class="vb-intro">Der Schatten der Eins zeigt sich in der eigenen hohen Messlatte: Funke äußerte sich wiederholt selbstkritisch über frühe eigene Werke und überarbeitete auch bereits veröffentlichte Bücher für Neuauflagen – ein Perfektionismus, der bei der ungesunden Eins leicht in nie enden wollende Selbstkorrektur kippen kann, statt ein Werk irgendwann als fertig anzuerkennen.</p>
        </blockquote>

        <h2 class="vb-section">6. Der Heilungsweg</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der Heilungsweg der Eins führt von der Frage <em>Genügt das, was ich geschaffen habe, meinem eigenen Anspruch?</em> zur Erkenntnis <em>Es ist bereits gut, so wie es ist.</em> Funkes Weg vom Bauspielplatz zur Weltautorin liest sich als Weg, bei dem der pflichtbewusste Einsatz der eigenen Talente nie aufgehört hat – nur ihr Wirkungsradius wuchs von einzelnen Kindern auf einem Hamburger Spielplatz zu Millionen Lesern weltweit.</p>
          <p class="vb-intro">Dass sie einen erheblichen Teil dieses Erfolgs wieder in Kinderhospize, Bildung für Geflüchtete und den Schutz von Folterüberlebenden investiert, zeigt die reife Neunerflügel-Seite: Erfolg wird nicht gehortet oder zur Schau gestellt, sondern ruhig und beständig weitergegeben – die Gans, die nie vergaß, warum sie einst auf dem Bauspielplatz anfing.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so1", label:"SO1 – Die Gans: Subtyp-Profil"},
        {route:"beruehmte-helmut-schmidt", label:"Porträt: Helmut Schmidt (SO1w9)"},
        {route:"beruehmte-roald-amundsen", label:"Porträt: Roald Amundsen (SO1w9)"},
        {route:"krankheitsportraets-adam-smith", label:"Krankheitsporträt: Adam Smith (SO1w9)"},
      ])}
    </div>
  `);
}

export function gordonRamsayPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gordon-ramsay-portrait.jpg" alt="Gordon Ramsay" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gordon Ramsay</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel</p>
        <p class="krim-portrait-subtitle">Sternekoch, geb. 1966 – Tierentsprechung: Pfau</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Pfau</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Pfau</strong> ist das Tier der sexuellen Drei – charismatisch, intensiv, mit einem untrüglichen Gespür dafür, wie er wirkt, und dem Bedürfnis, dieses Wirken bewusst und laut einzusetzen. Gordon Ramsay wurde 1966 im schottischen Johnstone geboren und wuchs in einer von häufigen Umzügen und einem alkoholkranken, phasenweise gewalttätigen Vater geprägten Kindheit auf. Er flüchtete sich in den Fußball und spielte in der Jugend bei den Glasgow Rangers, bis eine schwere Knieverletzung diesen Weg als Teenager beendete.</p>
          <p class="vb-intro">Diese frühe, öffentlich gemachte Verwundbarkeit – ein zerbrochener erster Lebenstraum, eine Kindheit, über die er später ausführlich in Memoiren und Dokumentationen sprach, statt sie zu verschweigen – ist bereits ein erstes Signal für die emotionale Tiefe, die unter der lautstarken Fassade liegt.</p>
        </blockquote>

        <h2 class="vb-section">2. Die sexuelle Drei: Leistung als intensives, öffentliches Spektakel</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Die <strong>sexuelle Drei (SX3)</strong> sucht Bestätigung nicht über stille, wiederholbare Verlässlichkeit wie die SE3, sondern über intensive, oft dramatisch zugespitzte Zuwendung und direkten Vergleich – der Beste zu sein, spürbar und unübersehbar, im unmittelbaren Gegenüber. Nach der Kochausbildung bei Marco Pierre White und Albert Roux in London sowie bei Guy Savoy und Joël Robuchon in Frankreich übernahm Ramsay 1993 die Küche des Londoner Restaurants Aubergine, das er innerhalb weniger Jahre auf zwei Michelin-Sterne brachte. 1998 eröffnete er sein eigenes Restaurant, das binnen drei Jahren den dritten Stern erhielt.</p>
          <p class="vb-intro">Aus dieser fachlichen Basis heraus wurde er zum Gesicht von Formaten wie ›Hell's Kitchen‹ und ›Kitchen Nightmares‹ – Sendungen, die ihren Kern nicht aus distanzierter Bewertung ziehen, sondern aus direkter, lauter, persönlicher Konfrontation mit einzelnen Köchen und Betreibern vor laufender Kamera. Genau das ist reine SX3-Handschrift: Leistung wird nicht leise abgeliefert, sondern im unmittelbaren, oft hitzigen Gegenüber ausgetragen. Eine auffällige Parallele findet sich bei <a href="javascript:void(0)" data-route="beruehmte-dieter-bohlen">Dieter Bohlen (SX3w4)</a>: Auch er baute seine öffentliche Rolle als schonungsloser Jury-Kommentator bei DSDS auf exakt demselben Prinzip auf – Bewertung nicht als distanziertes Urteil, sondern als lautes, direktes Gegenüber vor laufender Kamera.</p>
        </blockquote>

        <h2 class="vb-section">3. Die fachliche Substanz: Klassische Technik als Fundament der Show</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Ramsays TV-Konfrontationen von reiner Inszenierung unterscheidet, ist die zugrundeliegende fachliche Strenge: eine klassisch-französische Ausbildung in Saucenlehre, Schmortechniken und Reduktionen, kombiniert mit einer präzisen, ingredienzfokussierten Teller-Ästhetik, die bewusst auf Überladung verzichtet. Über seine Karriere hinweg erwarben seine Restaurants kumuliert mehr als zwanzig Michelin-Sterne, aktuell hält er acht Sterne über mehrere Standorte.</p>
          <p class="vb-intro">Der harte Ton in seinen Küchen speist sich aus einer strikten Mise-en-place-Kultur und praktisch null Fehlertoleranz in der Ausführung – seine Wut auf Fernsehsendungen ist selten reine Show, sondern die sichtbare Spitze eines tatsächlich sehr hohen technischen Anspruchs, den er zuerst an sich selbst stellt.</p>
        </blockquote>

        <h2 class="vb-section">4. Der Viererflügel: Verwundbarkeit hinter der lauten Fassade</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> zeigt sich bei Ramsay in einer für sein öffentliches Image überraschenden Bereitschaft zur emotionalen Introspektion. Statt die Gewalt und Instabilität seiner Kindheit zu verdrängen, verarbeitete er sie öffentlich in seiner Autobiografie ›Humble Pie‹ und in zahlreichen Interviews – mit der expliziten Aussage, er nutze ›diese furchtbare Beziehung‹ zum eigenen Vater bewusst als Antrieb, selbst ein besserer Vater zu sein. Das ist keine reine Leistungserzählung, sondern eine bewusst gezogene emotionale Konsequenz.</p>
          <p class="vb-intro">Auch sein Marathon-Debüt 2001 begründete er ausdrücklich mit dem frühen Tod seines Vaters – eine emotionale, nicht rein sportliche Motivation. Aus diesem einen Lauf wurde über die Jahre eine intensive Ironman-Triathlon-Praxis, die er inzwischen gemeinsam mit Ehefrau Tana und Tochter Tilly als ›Iron Family‹ betreibt: Leistung wird so zu einem gemeinsam durchlebten, emotional aufgeladenen Beziehungsspektakel statt zu einer reinen Solo-Karriereleistung – typische SX3-Dynamik, verstärkt durch die Vierer-Tiefe, die dem Ganzen eine persönliche, biografisch verwurzelte Bedeutung gibt statt bloßer Status-Demonstration.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sexuellen Drei</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SX3w4 ist die Fähigkeit, <strong>Intensität und Perfektionsanspruch in ansteckende Energie</strong> zu verwandeln – ein 2025er Ironman-Comeback nach einem schweren Fahrradunfall 2024, mit emotionalem Zieleinlauf an der Seite seiner Familie, zeigt diese Verbindung aus Härte und echter Gefühlsbeteiligung in ihrer positivsten Form.</p>
          <p class="vb-intro">Der Schatten zeigt sich in wiederkehrenden Konflikten: mehrere Restaurantschließungen, Klagen von Mitarbeitern wegen Arbeitsrechtsverstößen, ein Rechtsstreit mit einem Geschäftspartner über zehn Millionen Dollar sowie der Vorwurf einer ›Kitchen Nightmares‹-Betreiberin, ihre Darstellung sei inszeniert und übertrieben worden. Diese Muster – Konflikte um Kontrolle, Vertragsauslegung und einen sehr harten Umgangston mit Personal – sind die Kehrseite derselben Intensität, die auf der Bühne begeistert: Was als Antrieb zu Höchstleistung wirkt, kann im Alltag schnell zu kompromissloser Härte gegenüber anderen kippen.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Der Pfau, der seine Wunde zur Bühne machte</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Gordon Ramsay steht für eine seltene Kombination: fachlich fundierte Spitzenküche, die durch mediale Lautstärke einem Millionenpublikum vertraut wurde, ohne dass die Substanz dahinter verlorenging. Anders als viele TV-Köche, deren Ausbildung hinter der Kamerapräsenz zurücktritt, bleibt bei Ramsay das klassische Handwerk jederzeit sichtbar – die Konfrontation ist Ausdruck echten Anspruchs, nicht dessen Ersatz.</p>
          <p class="vb-intro">Vom Jungen mit zerbrochenem Fußballtraum und gewaltgeprägter Kindheit zum lautstarken Gesicht der internationalen Spitzengastronomie: Das ist die sexuelle Drei mit Viererflügel in ihrer öffentlichsten Form – Intensität, die nie aufhört, auch die eigene Wunde mitzutragen, statt sie hinter einer glatten Fassade zu verstecken.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/sx3", label:"SX3 – Der Pfau: Subtyp-Profil"},
        {route:"beruehmte-lana-del-rey", label:"Porträt: Lana Del Rey (SX3w4)"},
        {route:"beruehmte-marilyn-monroe", label:"Porträt: Marilyn Monroe (SX3w4)"},
        {route:"beruehmte-madonna", label:"Porträt: Madonna (SX3w4)"},
        {route:"beruehmte-dieter-bohlen", label:"Porträt: Dieter Bohlen (SX3w4)"},
        {route:"beruehmte-michael-mina", label:"Porträt: Michael Mina (SE3w2)"},
        {route:"beruehmte-paul-bocuse", label:"Porträt: Paul Bocuse (SE3w4)"},
      ])}
    </div>
  `);
}

export function dmitriSchostakowitschPortraitPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("Berühmte Persönlichkeiten")}
      <div id="js-back-target" data-route="beruehmte-persoenlichkeiten" style="display:none;"></div>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-schostakowitsch-portrait.jpg" alt="Dmitri Schostakowitsch – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Schostakowitsch</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Sozialer Typ 5 mit Viererflügel</p>
        <p class="krim-portrait-subtitle">Sowjetischer Komponist, 1906–1975 &ndash; Tierentsprechung: Oktopus</p>
      </div>
      <div class="page-content">

        <h2 class="vb-section">1. Der Oktopus im Panzer eines Systems</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Oktopus</strong> ist das Tier des sozialen Typs 5 – ein Wesen, das mit acht Armen gleichzeitig greift, hochintelligent reagiert und sich doch, sobald Gefahr droht, in eine schützende Höhle zurückzieht oder hinter einer Tarnfarbe verschwindet. Dmitri Schostakowitsch, geboren am 25. September 1906 in St. Petersburg, zeigte sein außergewöhnliches musikalisches Talent früh: Mit neunzehn Jahren legte er am Leningrader Konservatorium seine Erste Symphonie als Abschlussarbeit vor – ein Werk, das binnen kurzer Zeit international aufgeführt wurde und ihn praktisch über Nacht bekannt machte.</p>
          <p class="vb-intro">Doch dieser frühe Ruhm fiel in eine Zeit, die für einen Künstler mit öffentlicher Stimme lebensgefährlich werden konnte. Schostakowitsch verbrachte sein gesamtes Erwachsenenleben in einem politischen System, das seine Kunst zugleich brauchte und misstraute – eine Spannung, die seinen gesamten Werdegang prägte wie bei kaum einem anderen Komponisten des 20. Jahrhunderts.</p>
        </blockquote>

        <h2 class="vb-section">2. Das Totem: Musik im Dienst eines Systems, das größer ist als er selbst</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Naranjo nannte den <strong>sozialen Fünfer</strong> das <strong>Totem</strong>: Wissen und Können werden nicht als Privatbesitz gehütet, sondern einem größeren System oder einer größeren Sache zur Verfügung gestellt – Bedeutung entsteht durch die eigene Funktion innerhalb dieses Systems. Ab 1960 übernahm Schostakowitsch, unter erheblichem politischem Druck, den Vorsitz des Komponistenverbands der Russischen SFSR und blieb bis 1968 in dieser Funktion – eine Rolle, die ihn offiziell zum höchsten musikalischen Repräsentanten eines ganzen Landes machte.</p>
          <p class="vb-intro">Diese Funktion war für ihn kein Ehrenamt im herkömmlichen Sinn, sondern eine konkrete Verwaltungsaufgabe innerhalb eines riesigen staatlichen Apparats: Förderanträge, Nachwuchskomponisten, offizielle Vertretung der sowjetischen Musik im Ausland. Der Oktopus fand seinen Platz nicht außerhalb des Systems, sondern mitten darin – als derjenige, dessen Spezialwissen das System am Laufen hielt.</p>
        </blockquote>

        <h2 class="vb-section">3. Der Viererflügel: Die private Wahrheit im Code</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Der <strong>Viererflügel (w4)</strong> gibt der sozialen Fünf das Bedürfnis, Erkenntnis nicht rein abstrakt zu formulieren, sondern mit der eigenen, oft schmerzhaften persönlichen Wahrheit zu verbinden. Ab seinem Violinkonzert (1947/48) bis zu seiner letzten, 15. Symphonie (1971) webte Schostakowitsch ein viertöniges Monogramm in seine Musik: das DSCH-Motiv, die Tonfolge D–Es–C–H. In der deutschen Notenschrift steht ›Es‹ für das E♭ und ›H‹ für unser h (b-natur); als Buchstaben gelesen ergibt die Folge D-S-C-H – die Initialen von Dmitri SCHostakowitsch in deutscher Umschrift. Im 8. Streichquartett (1960) durchzieht dieses Motiv buchstäblich jeden einzelnen Satz.</p>
          <p class="vb-intro">Ein System, das keine offene persönliche Aussage duldete, bekam auf diese Weise trotzdem eine – nur eben verschlüsselt, nur für die hörbar, die den Code kannten. Genau das ist Viererflügel-Logik: Die tiefste, individuellste Wahrheit verschwindet nicht, sie verlagert sich nur in eine Form, die vordergründig unverfänglich bleibt.</p>
        </blockquote>

        <h2 class="vb-section">4. Die fachliche Substanz: Kontrapunkt als gelebter Wettkampf mit Bach</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Was Schostakowitsch handwerklich auszeichnete, zeigt sich konkret im August 1950: Als Jurymitglied beim Leipziger Bach-Wettbewerb anlässlich von dessen 200. Todestag erlebte er, wie die 26-jährige Tatjana Nikolajewa alle 48 Präludien und Fugen aus Bachs ›Wohltemperiertem Klavier‹ auf Zuruf spielen konnte und damit die Goldmedaille gewann. Beeindruckt von dieser lebendigen kontrapunktischen Beherrschung begann er bereits am 10. Oktober 1950 mit einem eigenen Zyklus von 24 Präludien und Fugen, Op. 87 – eine Fuge und ein Präludium für jede der 24 Dur- und Molltonarten, fertiggestellt am 23. Februar 1951, uraufgeführt von Nikolajewa selbst im Dezember 1952 in Leningrad.</p>
          <p class="vb-intro">Einen vollständigen, technisch anspruchsvollen Zyklus in diesem Tempo zu schreiben, der zugleich jede einzelne Tonart kontrapunktisch durchdringt, ist keine bloße Fleißleistung, sondern der konkrete Beweis einer Beherrschung der strengen Fugentechnik, die seit Bach kaum ein Komponist in dieser Vollständigkeit demonstriert hatte. Die 7. Symphonie ›Leningrader‹ wiederum zeigte seine orchestrale Meisterschaft von einer anderen Seite: Am 9. August 1942, mitten in der monatelangen Belagerung Leningrads, führten die wenigen überlebenden, teils stark ausgehungerten Musiker des Leningrader Rundfunkorchesters – drei starben während der Proben – das Werk zum ersten Mal in der Stadt selbst auf, verstärkt durch Militärmusiker, nach monatelangen Proben, die immer wieder unterbrochen werden mussten, weil Musiker vor Hunger und Kälte ohnmächtig wurden.</p>
        </blockquote>

        <h2 class="vb-section">5. Licht und Schatten der sozialen Fünf</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Das Licht der SO5w4 zeigt sich in genau dieser Leningrader Aufführung: Musik als Funktion innerhalb eines größeren Überlebenskampfes, über Lautsprecher sogar in Richtung der belagernden deutschen Truppen übertragen – Wissen und Können vollständig in den Dienst einer Gemeinschaft gestellt, die buchstäblich ums Überleben kämpfte.</p>
          <p class="vb-intro">Der Schatten der Fünf ist der <strong>Geiz</strong> – bei Schostakowitsch zeigte er sich nicht als Zurückhalten von Wissen, sondern als radikale Trennung zwischen öffentlicher Funktion und privater Wahrheit. Nach der anonymen Pravda-Kampagne ›Chaos statt Musik‹ im Januar 1936, direkt von Stalin veranlasst, schlief er laut seinem Biografen Solomon Volkow wochenlang angezogen mit einem gepackten Koffer unter dem Bett, in ständiger Erwartung der nächtlichen Verhaftung. 1960 musste er, um offiziell den Vorsitz des Komponistenverbands übernehmen zu können, der Kommunistischen Partei beitreten – eine Entscheidung, die ihn laut seinem Sohn Maxim zu Tränen rührte und bei der er seiner Frau gegenüber von ›Erpressung‹ sprach. Der Oktopus hortete seine eigentliche Wahrheit so gründlich, dass sie bis heute nur im Code – dem DSCH-Monogramm, den doppelbödigen Symphonien – wirklich greifbar wird.</p>
        </blockquote>

        <h2 class="vb-section">6. Das Vermächtnis: Vier Buchstaben, die überlebt haben</h2>
        <blockquote class="vb-blockquote">
          <p class="vb-intro">Am 9. August 1975 starb Dmitri Schostakowitsch in Moskau. Seine Musik wird bis heute auf zwei Ebenen gehört: als offizielles sowjetisches Repertoire, aufgeführt von den größten Orchestern der Welt, und zugleich als ein Werk voller verschlüsselter persönlicher Aussagen, über deren genaue Bedeutung Musikwissenschaftler bis heute streiten – nicht zuletzt wegen der posthum 1979 veröffentlichten, in ihrer Echtheit umstrittenen ›Erinnerungen‹ (im Original ›Testimony‹), die Solomon Volkow als Schostakowitschs geheime Memoiren präsentierte.</p>
          <p class="vb-intro">Das DSCH-Motiv selbst überlebte seinen Schöpfer: Komponisten wie Benjamin Britten griffen es als Hommage auf. Der Oktopus, der sein Leben lang zwischen offizieller Funktion und verborgener Wahrheit navigierte, hinterließ am Ende vier Töne, die genau das taten, wofür im Leben kein Raum war – offen seinen Namen zu tragen.</p>
        </blockquote>

      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "Die neun Typen in ihrer Tiefe – Schutzmuster, Leidenschaften und der Weg zur Essenz.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 Subtypen: Leidenschaften, Schutzstrategien und Heilungswege aus der therapeutischen Praxis.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("die-27-persoenlichkeiten-des-enneagramms", "27 Charakterprofile im Vergleich – wie sich die Subtypen desselben Typs voneinander unterscheiden.", "Die 27 Persönlichkeiten des Enneagramms")}
      ${relatedLinks([
        {route:"beruehmte-persoenlichkeiten", label:"Alle berühmten Persönlichkeiten"},
        {route:"subtype/so5", label:"SO5 – Der Oktopus: Subtyp-Profil"},
        {route:"beruehmte-albert-einstein", label:"Porträt: Albert Einstein (SO5w4)"},
        {route:"beruehmte-hannah-arendt", label:"Porträt: Hannah Arendt (SO5w4)"},
        {route:"beruehmte-lise-meitner", label:"Porträt: Lise Meitner (SO5w4)"},
        {route:"beruehmte-david-hockney", label:"Porträt: David Hockney (SO5w4)"},
        {route:"beruehmte-leonardo-da-vinci", label:"Porträt: Leonardo da Vinci (SO5w4)"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8) – Komponist, 21 Jahre an der 1. Symphonie"},
      ])}
    </div>
  `);
}
