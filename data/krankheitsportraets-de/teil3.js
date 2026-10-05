import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function albertEinsteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-albert-einstein-portrait.jpg" alt="Albert Einstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Albert Einstein</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1879–1955</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Albert Einstein</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-albert-einstein">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: ein
        über sechseinhalb Jahre bekanntes, nur notdürftig stabilisiertes
        Bauchaortenaneurysma und die bewusste Entscheidung, es 1955 nicht mehr operieren zu
        lassen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Einstein</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 sucht Sicherheit über Wissen und intellektuelle Autorität
        innerhalb einer Gemeinschaft von Gleichgesinnten, nicht über emotionale Nähe. Der
        Viererflügel bringt eine melancholische, existenzielle Tiefe hinzu – eine Nähe zu den
        großen Fragen von Sinn, Endlichkeit und Bedeutung. Genau diese Kombination aus
        distanzierter Rationalität und existenzieller Tiefe prägt auch Einsteins Umgang mit
        seiner eigenen Sterblichkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Zufallsfund bei einer Untersuchung:</strong>
        Im Dezember 1948 suchte Einstein wegen wiederkehrender Bauchschmerzen den
        Thoraxchirurgen Dr. Rudolph Nissen auf, der bei einer explorativen Operation (ein
        chirurgischer Eingriff zur Ursachenklärung, ohne dass vorab feststand, was er finden
        würde) ein großes Bauchaortenaneurysma entdeckte (eine krankhafte Aussackung der
        Hauptschlagader, die jederzeit reißen kann).</p>
        <p class="vb-intro"><strong>b) Eine Notlösung statt Heilung:</strong>
        Da Aortentransplantate damals noch nicht existierten, umwickelte Nissen das
        Aneurysma mit Cellophan – eine Fremdkörperreaktion sollte die Aortenwand fibrotisch
        verdicken und so vorübergehend stabilisieren. Eine echte Heilung war das nicht.</p>
        <p class="vb-intro"><strong>c) Ein Wissen, das den Alltag kaum veränderte:</strong>
        In den folgenden Jahren arbeitete Einstein nach außen sichtbar unvermindert weiter –
        über einen bewussten Umgang mit dem Risiko im Alltag ist wenig überliefert, was zur
        SO5-typischen Trennung von Wissen und emotionaler Verarbeitung passt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Sechseinhalb Jahre mit einer bekannten Zeitbombe:</strong>
        Von der Diagnose im Dezember 1948 bis zu seinem Tod im April 1955 lebte Einstein mit
        einem Aneurysma, das jederzeit reißen konnte – palliativ stabilisiert, aber nie
        kurativ behandelt.</p>
        <p class="vb-intro"><strong>b) Ein akuter Zusammenbruch im April 1955:</strong>
        Am 12. April 1955 erlitt Einstein erneut Bauchschmerzen; Dr. Frank Glenn, Chefchirurg
        am New York Hospital, diagnostizierte ein undichtes Aneurysma und empfahl eine
        Resektion – eine damals neue, riskante Operationstechnik.</p>
        <p class="vb-intro"><strong>c) Eine bewusste Ablehnung der Operation:</strong>
        Einstein lehnte den Eingriff ab. So ist überliefert: "I want to go when I want. It is
        tasteless to prolong life artificially. I have done my share, it is time to go. I
        will do it elegantly." (›Ich will gehen, wenn ich will. Es ist geschmacklos, das
        Leben künstlich zu verlängern. Ich habe meinen Teil getan, es ist Zeit zu gehen. Ich
        werde es mit Würde tun.‹)</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Eine unvollendete Rede neben dem Krankenbett:</strong>
        Im Princeton Hospital hatte Einstein einen unfertigen Entwurf einer Fernsehansprache
        zum siebten Jahrestag des Staates Israel bei sich – Arbeit, die er bis zuletzt nicht
        aufgab.</p>
        <p class="vb-intro"><strong>b) Gleichungen bis zur letzten Nacht:</strong>
        Nach seinem Tod fand das Pflegepersonal neun Seiten handschriftlicher Notizen mit
        Gleichungen zur einheitlichen Feldtheorie, mit Bleistift auf gelbem Papier
        geschrieben – seine letzte, nie abgeschlossene wissenschaftliche Suche.</p>
        <p class="vb-intro"><strong>c) Kein Abschied, keine große Geste:</strong>
        Einstein bereitete sich auf seinen Tod nicht mit Reden an Angehörige vor, sondern
        arbeitete weiter, als sei nichts anders als sonst – für die SO5 typisch: Rückzug in
        die Sache statt in die Emotion.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 18. April 1955:</strong>
        Einstein starb im Princeton Hospital an einer inneren Blutung durch die Ruptur des
        Aneurysmas, im Alter von 76 Jahren.</p>
        <p class="vb-intro"><strong>b) Eine Entscheidung, die bis heute diskutiert wird:</strong>
        Die Ablehnung der Operation gilt bis heute als eines der bekanntesten Beispiele für
        eine bewusste, selbstbestimmte Haltung zum eigenen Lebensende in der
        Wissenschaftsgeschichte.</p>
        <p class="vb-intro"><strong>c) Ein Nachleben, das er nicht kontrollieren konnte:</strong>
        Der Pathologe Thomas Harvey entnahm bei der Autopsie ohne Erlaubnis der Familie
        Einsteins Gehirn, in der Hoffnung, spätere Forschung könne daraus seine Intelligenz
        erklären – eine Kontroverse, die bis heute nachwirkt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle durch Wissen statt durch Handeln:</strong>
        Die SO5-typische Strategie, Sicherheit über Verstehen statt über Eingreifen zu
        gewinnen, zeigte sich bis zuletzt: Einstein analysierte seine Lage nüchtern und traf
        eine informierte Entscheidung, statt sich dem medizinischen System auszuliefern.</p>
        <p class="vb-intro"><strong>b) Rückzug in die Arbeit statt in die Angst:</strong>
        Statt sich mit der Endlichkeit emotional auseinanderzusetzen, vertiefte er sich bis
        zum letzten bewussten Moment in Gleichungen und Texte – die vertraute Zuflucht in
        die Sache.</p>
        <p class="vb-intro"><strong>c) Die eigene Verschleierung, selbst gewählt:</strong>
        Wo andere sich dem Zufall oder dem medizinischen Eingriff überlassen hätten, behielt
        Einstein bis zuletzt die Deutungshoheit über den eigenen Tod – eine letzte Form von
        Autonomie.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben der distanzierten Beobachtung:</strong>
        Schon lange vor der Diagnose war Einstein für seine Fähigkeit bekannt, selbst die
        größten menschlichen Umbrüche – zwei Weltkriege, Emigration, öffentlicher Ruhm – mit
        bemerkenswerter innerer Distanz zu betrachten.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre bekannte, aber nie verdrängte Bedrohung:</strong>
        Von der Diagnose 1948 bis zum Tod 1955 zieht sich eine durchgehende Linie aus Wissen
        um die eigene Sterblichkeit, die weder verheimlicht noch dramatisiert wurde – sie
        wurde schlicht zur Kenntnis genommen.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahr wie jedes andere:</strong>
        Bis zum akuten Zusammenbruch im April 1955 unterschied sich sein Alltag nach außen
        kaum von den Jahren zuvor – Arbeit, Korrespondenz, Forschung, ohne sichtbare
        Dramatisierung der eigenen Lage.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Aorta?</strong>
        Für eine soziale Fünf mit Viererflügel, deren Sicherheit über rationale Distanz und
        intellektuelle Kontrolle entsteht, liegt eine Deutung nahe: Ausgerechnet jenes Gefäß,
        das den gesamten Organismus mit Leben versorgt und dessen Versagen keine Warnung
        gibt, wurde zum Ort einer Bedrohung, die sich der Kontrolle entzog – während Einstein
        genau darauf mit der einzigen ihm verbliebenen Form von Kontrolle reagierte: der
        bewussten Entscheidung, sie nicht zu bekämpfen. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu Gefäßerkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Einsteins Fall zeigen lässt, ist ein Muster, das bei dem
        Bedürfnis, existenzielle Bedrohung über rationale Distanz statt über emotionale
        Bewältigung zu verarbeiten, in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Einstein kannte sein eigenes Muster nicht – die soziale Fünf mit Viererflügel bestimmt lieber selbst über die eigenen Bedingungen, als sich fremder Kontrolle zu unterwerfen, und genau das zeigte sich in seiner bewussten Ablehnung einer erneuten Operation. Wer die eigene Autonomiebedürftigkeit nicht als Muster erkennt, verwechselt sie leicht mit reiner Vernunft, obwohl auch die eigene Fixierung mitentscheidet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Einsteins</strong> letzten Jahren lässt sich die soziale Fünf mit
        Viererflügel noch einmal in aller Klarheit ablesen: eine über Jahre bekannte, nie
        verdrängte Bedrohung, eine nüchterne, informierte Entscheidung gegen den Eingriff, und
        eine Arbeit an den großen Fragen des Universums, die bis zur letzten Nacht nicht
        endete. Der Oktopus, der die Tinte selbst wählte – und der noch im Sterben nach der
        einen Formel suchte, die alles erklären würde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-albert-einstein", label:"Porträt: Albert Einstein (SO5w4) – Lebenswerk"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Krankheitsporträt: Leonardo da Vinci (SO5w4) – dasselbe Muster ungebremsten Schaffens"},
        {route:"krankheitsportraets-stephen-hawking", label:"Krankheitsporträt: Stephen Hawking (SO5w6) – dasselbe Muster ungebremster Arbeit bis zuletzt"},
        {route:"krankheitsportraets-hannah-arendt", label:"Krankheitsporträt: Hannah Arendt (SO5w4) – dasselbe Muster: Warnung zur Kenntnis genommen, nicht befolgt"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function bernieMadoffKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/bernie-madoff-portrait.jpg" alt="Bernie Madoff" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bernie Madoff</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel · 1938–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Bernie Madoff</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-bernie-madoff">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um das größte Ponzi-System der Geschichte
        und seine Typstruktur als stiller, unauffälliger Betrüger. Diese Seite vertieft ein
        Kapitel, das dort nur am Rande erwähnt wird: eine unheilbare Nierenerkrankung im
        Gefängnis, mehrfach abgelehnte Gesuche um vorzeitige Entlassung, und einen Tod 2021
        in Bundeshaft.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Madoff</strong> ist dem <strong>selbsterhaltenden Typ 3 mit Viererflügel</strong>
        zugeordnet – dem Kontratyp der Drei, der sich nicht laut und glamourös inszeniert,
        sondern still, seriös und vertrauenswürdig. Der Viererflügel verleiht ein Gespür für
        das Besondere und den exklusiven Zirkel. Genau diese stille, kontrollierte Inszenierung
        setzte sich bis in seinen Umgang mit der eigenen tödlichen Erkrankung fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Chronische gesundheitliche Probleme während der Haft:</strong>
        In den Jahren nach seiner Verurteilung 2009 entwickelte Madoff im Gefängnis eine
        fortschreitende Nierenerkrankung sowie Bluthochdruck und Herz-Kreislauf-Probleme.</p>
        <p class="vb-intro"><strong>b) Diagnose als unheilbare Nierenerkrankung:</strong>
        Ärzte diagnostizierten schließlich eine Niereninsuffizienz im Endstadium – eine
        Erkrankung, die ohne regelmäßige Dialyse und letztlich eine Transplantation tödlich
        verlaufen musste.</p>
        <p class="vb-intro"><strong>c) Fortschreitende Verschlechterung ohne öffentliche Dramatik:</strong>
        Wie schon während seines Betrugs drang über Jahre hinweg kaum etwas über seinen
        körperlichen Zustand nach außen – Madoff blieb, auch krank, ein Mann ohne Bühne.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Mehrfache Gesuche um vorzeitige Entlassung:</strong>
        Madoffs Anwälte beantragten wiederholt eine sogenannte „compassionate release" –
        eine vorzeitige Haftentlassung aus gesundheitlichen Gründen – und begründeten dies mit
        seiner unheilbaren Nierenerkrankung.</p>
        <p class="vb-intro"><strong>b) Ärztliche Prognose von unter 18 Monaten Lebenszeit:</strong>
        Im Zusammenhang mit einem dieser Gesuche 2020 attestierten Ärzte ihm eine
        Lebenserwartung von weniger als 18 Monaten.</p>
        <p class="vb-intro"><strong>c) Ablehnung aller Entlassungsgesuche:</strong>
        Ein zuständiges Gericht lehnte die Anträge auf vorzeitige Entlassung ab – Madoff sollte
        seine Strafe, wie ursprünglich verhängt, bis zum Tod in Haft verbüßen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Dialysebehandlungen im Gefängniskrankenhaus:</strong>
        In seinen letzten Lebensjahren war Madoff auf regelmäßige Dialysebehandlungen
        angewiesen, die in der medizinischen Einrichtung der Bundesstrafanstalt Butner
        durchgeführt wurden.</p>
        <p class="vb-intro"><strong>b) Vereinzelte späte Interviews mit gemischten Tönen:</strong>
        In seinen letzten Lebensjahren gab Madoff einige wenige Interviews, in denen er
        teils Bedauern äußerte, teils aber auch weiterhin die eigene Rolle relativierte.</p>
        <p class="vb-intro"><strong>c) Tod am 14. April 2021 in Butner, North Carolina:</strong>
        Bernie Madoff starb im Alter von 82 Jahren in der Bundesstrafanstalt Butner – etwas
        mehr als zwölf Jahre nach seiner Verhaftung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Osho</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-osho">Osho</a> (SE3w4) litt über
        Jahrzehnte an chronischen, nie ganz eindeutig geklärten Beschwerden, ohne diese je
        wirklich offenzulegen. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-osho">eigenes
        Krankheitsporträt</a> zeigt dasselbe SE3w4-Muster wie bei Madoff: Die eigene
        körperliche Realität wird so kontrolliert und diskret behandelt wie das eigene
        öffentliche Bild – bis zuletzt bleibt die Deutungshoheit über die eigene Geschichte
        beim Betroffenen selbst, nicht bei einer Öffentlichkeit, der man Einblick gewährt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der kaum öffentliche Anteilnahme fand:</strong>
        Wie schon bei anderen Fällen dieser Rubrik reagierte die Öffentlichkeit auf Madoffs Tod
        überwiegend nüchtern bis distanziert – die Erinnerung an die Opfer seines Betrugs
        überwog jedes Mitgefühl für sein Leiden.</p>
        <p class="vb-intro"><strong>b) Ein letztes Gesuch, das zum Symbol wurde:</strong>
        Die Ablehnung seines Antrags auf vorzeitige Entlassung wurde in der öffentlichen
        Wahrnehmung auch als Zeichen dafür gelesen, dass für die größten Finanzverbrechen der
        Geschichte keine Kulanz gelten sollte.</p>
        <p class="vb-intro"><strong>c) Ein Ende ohne das Nest, das er einst gebaut hatte:</strong>
        Der Mann, der jahrzehntelang Sicherheit und Vertrauen inszenierte, starb ohne Familie
        an seiner Seite – beide Söhne waren zu diesem Zeitpunkt bereits tot.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Keine Spur, auch im Krankenbett nicht:</strong>
        Dieselbe Fähigkeit, jahrzehntelang unauffällig zu bleiben, bestimmte auch, wie wenig
        über seinen Gesundheitszustand öffentlich bekannt wurde.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Erzählung bis zuletzt:</strong>
        Auch die wenigen Interviews aus seinen letzten Jahren wirkten weniger wie spontane
        Geständnisse als wie eine weitere, sorgfältig gewählte Inszenierung.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Zusammenbruch der Fassade:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine Berichte
        über ein sichtbares Zerbrechen von Madoffs kontrolliertem Auftreten – die Maske blieb,
        soweit bekannt, bis zum Ende an ihrem Platz.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zuletzt das kontrollierte Nest selbst wurde:</strong>
        Madoffs ganzes Leben war von dem Versuch geprägt, Sicherheit und Stabilität zu
        inszenieren und abzuschirmen – im Gefängnis richtete sich dieselbe Kontrollhaltung
        notgedrungen auf einen Körper, der sich medizinisch nicht mehr stabilisieren ließ.</p>
        <p class="vb-intro"><strong>b) Diskretion auch in der eigenen Verletzlichkeit:</strong>
        Genau wie Madoff seinen Betrug jahrzehntelang ohne Aufsehen betrieb, drang auch über
        seine Krankheit kaum mehr an die Öffentlichkeit als das medizinisch Notwendige für die
        Gerichtsverfahren um seine Haftentlassung.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Nieren?</strong>
        Für eine selbsterhaltende Drei mit Viererflügel, deren gesamtes Leben um die Frage
        kreiste, was hereingelassen und was ferngehalten wird, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das im Körper für die Filterung und das saubere Trennen von
        Wertvollem und Abfall zuständig ist, wurde zum Schauplatz des Verfalls – bei einem
        Mann, dessen gesamtes System auf der buchhalterischen Trennung von echten und
        gefälschten Konten beruhte. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        Nierenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Madoffs Fall zeigen lässt, ist ein Muster
        im Umgang mit der eigenen Sterblichkeit, das bei einer ausgeprägten selbsterhaltenden
        Drei mit Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Madoff kannte sein eigenes Muster nicht – die selbsterhaltende Drei mit Viererflügel
        schützt ihr Nest reflexhaft durch Kontrolle und Diskretion, auch wenn das Nest längst
        nur noch aus Fassade besteht, und genau dieses Muster lebte er bis in seine letzten
        Lebensjahre unverändert aus, ohne öffentlich eine andere Form des Umgangs mit der
        eigenen Verletzlichkeit zu entwickeln. Wer das eigene Bedürfnis nach kontrollierter
        Sicherheit nicht als Muster erkennt, kann es auch im eigenen Sterben nicht loslassen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Madoffs</strong> selbsterhaltende Drei mit
        Viererflügel noch einmal ablesen: eine Krankheit, die so diskret verlief wie sein
        jahrzehntelanger Betrug, ein letztes Gesuch um Gnade, das abgelehnt wurde, und ein Tod
        ohne die Familie, die sein Nest einst gewesen war. Der Waschbär, der bis zuletzt keine
        Spur hinterließ – und dessen eigener Körper am Ende der einzige Ort war, den er nicht
        mehr kontrollieren konnte.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Die Taten
        Madoffs sind rechtskräftig verurteilt – das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-bernie-madoff", label:"Kriminalpsychologie: Bernie Madoff (SE3w4) – größter Anlagebetrug der Geschichte"},
        {route:"krankheitsportraets-osho", label:"Krankheitsporträt: Osho (SE3w4) – dieselbe Diskretion über den eigenen Körper"},
        {route:"krankheitsportraets-wim-thoelke", label:"Krankheitsporträt: Wim Thoelke (SE3w4) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

export function christiaanBarnardKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-christiaan-barnard-portrait.jpg" alt="Christiaan Barnard" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Christiaan Barnard</p>
        <p class="krim-portrait-typ">SO3w2 · Sozialer Typ 3 mit Zweierflügel · 1922–2001</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Christiaan Barnard</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-christiaan-barnard">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um die
        erste erfolgreiche Herztransplantation der Geschichte 1967. Diese Seite vertieft
        ein Kapitel, das dort knapp erwähnt wird: eine seit 1956 bestehende rheumatoide
        Arthritis, die 1983 ausgerechnet seine chirurgischen Hände zwang, die Karriere zu
        beenden.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Barnard</strong> ist dem <strong>sozialen Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die SO3 sucht Anerkennung durch herausragende, öffentlich sichtbare
        Leistung; der Zweierflügel bringt Wärme und den Wunsch hinzu, im Dienst anderer zu
        glänzen. Genau diese Kombination – Leistung als Existenzgrundlage – bestimmte, wie
        Barnard mit dem schrittweisen Verlust der eigenen chirurgischen Fähigkeiten umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose während der Facharztausbildung in den USA 1956:</strong>
        Bereits während seiner postgradualen Ausbildung in den USA wurde bei Barnard
        rheumatoide Arthritis diagnostiziert – Jahre bevor er zum weltbekannten
        Herzchirurgen wurde.</p>
        <p class="vb-intro"><strong>b) Zunehmender Befall der Hände:</strong>
        Über die Jahrzehnte griff die Erkrankung zunehmend auf die Hände über – jenes
        Werkzeug, mit dem Barnard 1967 Geschichte schrieb.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte chirurgische Tätigkeit trotz Diagnose:</strong>
        Trotz der bekannten Erkrankung operierte Barnard über Jahrzehnte weiter, auch nach
        seiner weltberühmten ersten Transplantation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Frühzeitiges Ende der chirurgischen Laufbahn 1983:</strong>
        Die rheumatoide Arthritis in den Händen zwang Barnard 1983 zum Ausscheiden als
        Leiter der Abteilung für Herz-Thorax-Chirurgie in Kapstadt.</p>
        <p class="vb-intro"><strong>b) Wechsel in andere Rollen:</strong>
        Nach dem Ende der Operationstätigkeit half Barnard beim Aufbau eines neuen
        Transplantationsinstituts am Baptist Medical Center in Oklahoma City mit.</p>
        <p class="vb-intro"><strong>c) Literarische Verarbeitung der eigenen Krankheit:</strong>
        Barnard verfasste unter anderem das Buch "Christiaan Barnard's Program for Living
        with Arthritis" – die eigene Krankheit wurde zum Gegenstand seines Schreibens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte öffentliche Präsenz nach dem Karriereende:</strong>
        Auch nach 1983 blieb Barnard eine international bekannte, gefragte Figur – Vorträge,
        Bücher, mediale Präsenz ersetzten die Operationstätigkeit.</p>
        <p class="vb-intro"><strong>b) Umfangreiches schriftstellerisches Spätwerk:</strong>
        Barnard verfasste in seinen letzten beiden Lebensjahrzehnten eine weitere
        Autobiografie ("The Second Life") sowie zahlreiche Romane und Gesundheitsbücher.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Klage über den Verlust:</strong>
        Berichten zufolge sprach Barnard selten öffentlich über den emotionalen Verlust,
        den das Ende seiner chirurgischen Laufbahn für ihn bedeutete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein zweites öffentliches Leben nach der Chirurgie:</strong>
        Barnard gelang der Übergang von der aktiven Chirurgenkarriere zu einer ebenso
        sichtbaren zweiten Karriere als Autor und Redner.</p>
        <p class="vb-intro"><strong>b) Symbolische Ironie, die international beachtet wurde:</strong>
        Dass ausgerechnet die Hände des ersten Herztransplantations-Chirurgen der Welt
        versagten, wurde in zahlreichen Nachrufen und Biografien als bittere Pointe seines
        Lebens hervorgehoben.</p>
        <p class="vb-intro"><strong>c) Vermächtnis, das über die Chirurgie hinausreicht:</strong>
        Barnards öffentliches Bild blieb auch nach 1983 von Kompetenz und Autorität
        geprägt – nun im Bereich des Schreibens statt des Operierens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Leistung als fortgesetzte Existenzgrundlage:</strong>
        Dieselbe SO3-Überzeugung, dass Wert durch sichtbare Leistung entsteht, bestimmte
        auch Barnards Reaktion auf das erzwungene Karriereende – kein Rückzug, sondern der
        rasche Aufbau einer neuen, ebenso sichtbaren Rolle.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und der Dienst am Patienten in neuer Form:</strong>
        Die Zuwendung des Zweierflügels zeigte sich darin, dass Barnard sein Wissen nun in
        Büchern für Patienten mit derselben Krankheit weitergab, statt sich ganz
        zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Verarbeitung des eigenen Verlusts:</strong>
        Die SO3-typische Fokussierung auf das nächste sichtbare Ziel könnte erklären,
        warum Barnard selten öffentlich über die persönliche Trauer um seine
        Chirurgenkarriere sprach.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Hände, die zum Werkzeug des Ruhms und dann der Krankheit wurden:</strong>
        Barnards gesamter Weltruhm beruhte auf der Präzision seiner Hände – ausgerechnet
        diese Hände wurden über Jahrzehnte hinweg zum Ort der fortschreitenden
        Erkrankung, bis sie ihm die Fortsetzung seines Lebenswerks verwehrten.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-xiv">Ludwig
        XIV.</a> (ebenfalls SO3w2) litt jahrzehntelang an Gicht, ohne seine öffentliche
        Rolle als Sonnenkönig aufzugeben; Barnard reagierte auf seine eigene chronische
        Erkrankung mit derselben Grundhaltung – die sichtbare, öffentliche Rolle wurde
        nicht aufgegeben, sondern in neuer Form fortgeführt. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-xiv">Krankheitsporträt zu Ludwig XIV.</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Hände?</strong>
        Für einen sozialen Dreier mit Zweierflügel, dessen gesamter Ruhm auf der
        Präzision seiner Hände beruhte, liegt eine Deutung nahe: Ausgerechnet jenes
        Werkzeug, das ihm weltweite Anerkennung verschaffte, wurde zum Ort der
        Einschränkung. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu rheumatoider
        Arthritis führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Barnards Fall zeigen lässt, ist ein Muster im
        Umgang mit dem Verlust der eigenen Leistungsfähigkeit, das bei einer ausgeprägten
        sozialen Drei mit Zweierflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Barnard kannte sein eigenes Muster nicht – die soziale Drei mit Zweierflügel
        ersetzt reflexhaft eine verlorene sichtbare Rolle durch eine neue, statt den
        eigenen Verlust je öffentlich zu verarbeiten, und genau dieses Muster lebte er bis
        zu seinem Tod unverändert aus. Wer die eigene Notwendigkeit, sichtbar zu leisten,
        nicht als Muster erkennt, kann den Verlust der eigenen Fähigkeiten nicht wirklich
        betrauern, sondern nur ersetzen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Zweierflügel erklärt bei <strong>Christiaan Barnard</strong>
        vieles am Umgang mit der eigenen Erkrankung: ein Mann, dessen Weltruhm auf der
        Präzision seiner Hände beruhte, ersetzte den Verlust dieser Hände durch eine neue
        sichtbare Rolle als Autor – der Gepard, der nicht mehr rennen kann, aber lernt,
        auf andere Weise vorne zu bleiben.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-christiaan-barnard", label:"Porträt: Christiaan Barnard (SO3w2)"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Krankheitsporträt: Ludwig XIV. (SO3w2) – dieselbe fortgeführte öffentliche Rolle"},
        {route:"krankheitsportraets-dmitri-hvorostovsky", label:"Krankheitsporträt: Dmitri Hvorostovsky (SO3w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function drewBarrymoreKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-drew-barrymore-portrait.jpg" alt="Drew Barrymore" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Drew Barrymore</p>
        <p class="krim-portrait-typ">SO7w8 · Sozialer Typ 7 mit Achterflügel · geb. 1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Drew Barrymore</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-drew-barrymore">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort beiläufig behandelt wird: eine bereits im Kindesalter beginnende
        Suchterkrankung, die 1988 zu einer Einweisung in eine Entzugsklinik führte – im
        Alter von erst 13 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Barrymore</strong> ist dem <strong>sozialen Typ 7 mit Achterflügel</strong>
        zugeordnet. Die SO7 opfert eigenen unmittelbaren Genuss zugunsten einer größeren
        Idee; der Achterflügel bringt Durchsetzungskraft und die Fähigkeit hinzu, auch
        aus tiefen Krisen heraus die Kontrolle über das eigene Leben zurückzugewinnen.
        Genau diese Kombination – aus einer frühen Krise heraus eine neue, öffentlich
        sichtbare Rolle zu erschaffen – bestimmte, wie Barrymore mit ihrer Kindheitssucht
        umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Früher Kontakt mit Alkohol und Drogen im Kindesalter:</strong>
        Barrymore, bereits als Kleinkind ein gefragter Kinderstar, kam nach eigenen
        Schilderungen schon im Grundschulalter in ein Umfeld mit Alkohol und späterem
        Drogenkonsum.</p>
        <p class="vb-intro"><strong>b) Zunehmend außer Kontrolle geratener Konsum:</strong>
        Ihre Autobiografie "Little Girl Lost" beschreibt eine rasch eskalierende
        Suchtentwicklung bereits vor dem Teenageralter.</p>
        <p class="vb-intro"><strong>c) Einweisung in eine Entzugsklinik 1988:</strong>
        Im Alter von 13 Jahren wurde Barrymore in eine Einrichtung zur Suchtbehandlung
        eingewiesen – ein für Kinderstars dieser Zeit öffentlich seltenes Ereignis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Öffentliche Verarbeitung im eigenen Buch:</strong>
        Statt die Kindheitssucht zu verbergen, verarbeitete Barrymore sie bereits mit 14
        Jahren in einer eigenen Autobiografie.</p>
        <p class="vb-intro"><strong>b) Emanzipation von den eigenen Eltern:</strong>
        Im Zusammenhang mit dieser Krise wurde Barrymore mit 14 Jahren rechtlich von
        ihrer Mutter emanzipiert – ein weiterer öffentlich dokumentierter Einschnitt
        dieser Zeit.</p>
        <p class="vb-intro"><strong>c) Schrittweiser Wiederaufbau der Karriere:</strong>
        In den folgenden Jahren baute Barrymore ihre Schauspielkarriere systematisch
        wieder auf, bis hin zu eigenen Produktionsfirmen und späteren Erfolgen als
        Filmemacherin.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wiederholte öffentliche Reflexion über die eigene Geschichte:</strong>
        Barrymore sprach auch als erwachsene Schauspielerin und spätere Talkshow-Moderatorin
        wiederholt offen über ihre Kindheitssucht.</p>
        <p class="vb-intro"><strong>b) Aufbau einer neuen öffentlichen Rolle als Talkshow-Host:</strong>
        Mit ihrer eigenen Tagesshow schuf sich Barrymore eine neue Plattform, in der
        persönliche Offenheit – auch über die eigene Vergangenheit – zum zentralen Element
        wurde.</p>
        <p class="vb-intro"><strong>c) Keine Rückkehr in die frühere Suchtdynamik:</strong>
        In öffentlichen Aussagen beschreibt Barrymore die überstandene Kindheitssucht als
        abgeschlossenes, aber prägendes Kapitel ihres Lebens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine der bekanntesten Kindheitssuchtgeschichten Hollywoods:</strong>
        Barrymores frühe Krise gehört zu den am ausführlichsten öffentlich dokumentierten
        Suchtgeschichten eines ehemaligen Kinderstars.</p>
        <p class="vb-intro"><strong>b) Ein Karriereverlauf ohne dauerhaften Bruch:</strong>
        Trotz der frühen Krise entwickelte sich Barrymore zu einer der kommerziell
        erfolgreichsten Schauspielerinnen und Produzentinnen ihrer Generation.</p>
        <p class="vb-intro"><strong>c) Öffentliche Rolle als Stimme für Offenheit:</strong>
        Barrymores Bereitschaft, offen über die eigene Vergangenheit zu sprechen, wurde
        wiederholt als ermutigendes Beispiel für andere Betroffene aufgegriffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Flucht nach vorn statt Stillstand:</strong>
        Dieselbe SO7-Energie, die immer neue Möglichkeiten sucht, statt in einer Krise zu
        verharren, bestimmte Barrymores raschen Übergang von der Entzugsklinik zurück in
        eine aktive, sichtbare Karriere.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die Rückeroberung der eigenen Kontrolle:</strong>
        Die Durchsetzungskraft des Achterflügels zeigte sich in der rechtlichen
        Emanzipation von den eigenen Eltern mit 14 Jahren – ein früher, entschlossener
        Akt der Selbstbestimmung.</p>
        <p class="vb-intro"><strong>c) Offenheit als Form der Kontrolle über die eigene Geschichte:</strong>
        Statt die Kindheitssucht verbergen zu lassen, erzählte Barrymore sie selbst zuerst
        – ein Muster, das sich durch ihre gesamte spätere öffentliche Karriere zieht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kindheit, die zu früh mit Erwachsenenrisiken konfrontiert wurde:</strong>
        Barrymores gesamte spätere Karriere ist von der Erfahrung geprägt, bereits als
        Kind ohne ausreichenden Schutz in ein Erwachsenenumfeld geraten zu sein – die
        eigene Krise wurde zum Ausgangspunkt eines bewussteren, selbstbestimmteren
        weiteren Lebens.</p>
        <p class="vb-intro"><strong>b) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig zu
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Barrymores Fall zeigen lässt, ist ein
        Muster im Umgang mit einer überwundenen Kindheitssucht, das bei einer
        ausgeprägten sozialen Sieben mit Achterflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) Die unbewusste Fixierung als eigener Faktor:</strong>
        Barrymore kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die soziale
        Sieben mit Achterflügel verwandelt reflexhaft eine überstandene Krise in neue,
        sichtbare Bewegung nach vorn, statt bei ihr stehenzubleiben, und lebt genau
        dieses Muster bis heute aus. Wer die eigene Neigung, aus Krisen sofort neue
        Projekte zu machen, nicht als Muster erkennt, überspringt manchmal einen
        notwendigen Moment der Ruhe.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Achterflügel erklärt bei <strong>Drew Barrymore</strong>
        vieles am Umgang mit ihrer eigenen Kindheitssucht: eine Frau, die schon mit 14
        Jahren die eigene Geschichte selbst erzählte, statt sie verschweigen zu lassen –
        der Biber, der den eingerissenen Damm nicht beklagt, sondern von Grund auf neu
        baut.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-drew-barrymore", label:"Porträt: Drew Barrymore (SO7w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function fransDeWaalKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frans-de-waal-portrait.jpg" alt="Frans de Waal" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frans de Waal</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel · 1948–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frans de Waal</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-frans-de-waal">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um sein
        Lebenswerk als Primatenforscher. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: eine im August 2023 diagnostizierte Magenkrebserkrankung, an der
        er im März 2024 starb, nachdem er bis wenige Monate zuvor weitergearbeitet hatte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>de Waal</strong> ist dem <strong>sexuellen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SX7 sucht Intensität durch das ständige Erschließen neuer
        Erfahrungsräume; der Sechserflügel bringt Loyalität gegenüber der eigenen Arbeit
        und ihrem Umfeld hinzu. Genau diese Kombination – ungebremstes Weiterarbeiten bis
        an eine harte, kurze Frist – bestimmte, wie de Waal auf seine Krebsdiagnose
        reagierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose im August 2023:</strong>
        De Waal erhielt im August 2023 die Diagnose Magenkrebs – etwa sieben Monate vor
        seinem Tod.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte öffentliche Termine trotz Diagnose:</strong>
        Im Herbst 2023 nahm de Waal weiterhin an öffentlichen Veranstaltungen teil, unter
        anderem an einem Gespräch mit Isabella Rossellini in New York.</p>
        <p class="vb-intro"><strong>c) Auftritt bei einem internationalen Philosophiefestival:</strong>
        Im Juni 2023 sprach de Waal beim Philosophiefestival phil.COLOGNE in Deutschland –
        kurz vor oder unmittelbar nach der Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zuversicht trotz ungünstiger Prognose:</strong>
        Noch im November 2023 äußerte sich de Waal nach Berichten hoffnungsvoll über den
        eigenen Krankheitsverlauf, trotz einer insgesamt schwierigen Prognose.</p>
        <p class="vb-intro"><strong>b) Kein öffentlicher Rückzug von der eigenen Arbeit:</strong>
        Es gibt keine Hinweise darauf, dass de Waal seine Forschungs- oder
        Veröffentlichungstätigkeit nach der Diagnose bewusst beendete.</p>
        <p class="vb-intro"><strong>c) Tod am 14. März 2024:</strong>
        De Waal starb im Alter von 75 Jahren an seinem Wohnsitz in Stone Mountain,
        Georgia, an den Folgen des Magenkrebses.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein vergleichsweise kurzer, aber intensiver Krankheitsverlauf:</strong>
        Zwischen Diagnose und Tod lagen nur rund sieben Monate – ein deutlich kürzerer
        Zeitraum als bei den meisten anderen Krankheitsporträts dieses Kompasses.</p>
        <p class="vb-intro"><strong>b) Ein umfangreiches, bis zuletzt aktuelles Lebenswerk:</strong>
        De Waals letztes Buch, "Different: Gender Through the Eyes of a Primatologist",
        war erst 2022 erschienen – kurz vor seiner Diagnose.</p>
        <p class="vb-intro"><strong>c) Weltweite Würdigung nach seinem Tod:</strong>
        Nachrufe in Fachzeitschriften, großen Zeitungen und wissenschaftlichen
        Institutionen würdigten de Waal unmittelbar nach seinem Tod als einen der
        einflussreichsten Verhaltensforscher seiner Generation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der die öffentliche Wahrnehmung kaum überschattete:</strong>
        Trotz der kurzen, ernsten Erkrankung blieb de Waals öffentliches Bild bis zuletzt
        von seinem wissenschaftlichen Werk geprägt, nicht von der Krankheit.</p>
        <p class="vb-intro"><strong>b) Internationale Trauer in der Wissenschaftswelt:</strong>
        Kolleginnen und Kollegen weltweit würdigten de Waal als prägende Figur der
        Primatenforschung und der Verhaltensbiologie insgesamt.</p>
        <p class="vb-intro"><strong>c) Fortwirkendes Werk über den Tod hinaus:</strong>
        De Waals Bücher und Forschungsergebnisse blieben nach seinem Tod ein zentraler
        Bezugspunkt der Debatte über Tierverhalten, Emotion und Moral.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Intensität, die sich auch der Diagnose nicht beugte:</strong>
        Dieselbe SX7-Energie, die de Waals gesamtes Forscherleben trug, bestimmte auch
        seine letzten Monate – öffentliche Auftritte und Zuversicht statt Rückzug.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die Treue zum eigenen Lebenswerk:</strong>
        Die Loyalität des Sechserflügels zeigte sich darin, dass de Waal seinem
        Forschungsfeld und seinem wissenschaftlichen Umfeld bis kurz vor seinem Tod treu
        blieb.</p>
        <p class="vb-intro"><strong>c) Zuversicht als eigene Form der Intensität:</strong>
        Die berichtete Hoffnung trotz schwieriger Prognose passt zur SX7-typischen
        Neigung, sich auch in Krisen auf die positive Möglichkeit zu konzentrieren, statt
        auf das Worst-Case-Szenario.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Forscherleben, das bis zuletzt nach vorn gerichtet blieb:</strong>
        De Waals gesamtes wissenschaftliches Werk war von der Überzeugung geprägt, dass
        es immer noch mehr zu verstehen gibt – die Krebsdiagnose änderte diese
        Grundhaltung in den verbleibenden Monaten nicht erkennbar.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard
        Bernstein</a> und
        <a href="javascript:void(0)" data-route="krankheitsportraets-morgan-freeman">Morgan
        Freeman</a> (beide ebenfalls SX7w6) reagierten auf ihre eigenen chronischen
        Erkrankungen mit derselben Grundhaltung wie de Waal – kein Rückzug, sondern
        Weiterarbeit trotz spürbarer körperlicher Grenze. Mehr dazu in den
        Krankheitsporträts zu
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard Bernstein</a>
        und
        <a href="javascript:void(0)" data-route="krankheitsportraets-morgan-freeman">Morgan Freeman</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Magen?</strong>
        Für einen sexuellen Siebener mit Sechserflügel, dessen gesamtes Wirken auf der
        unermüdlichen Aufnahme und Verarbeitung neuer Erfahrungen und Erkenntnisse
        beruhte, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das im übertragenen
        Sinn für Aufnahme und Verdauung von allem Neuen steht, wurde zum Ort einer
        Erkrankung, die den lebenslang unstillbaren Appetit des Forschers auf verstörende
        Weise spiegelte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu
        Krebserkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an de Waals Fall zeigen lässt, ist ein
        Muster im Umgang mit einer schweren, kurzfristigen Diagnose, das bei einem
        ausgeprägten sexuellen Siebener mit Sechserflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        De Waal kannte sein eigenes Muster nicht – die sexuelle Sieben mit Sechserflügel
        sucht reflexhaft die volle, ungefilterte Erfahrung und Weiterarbeit, statt eine
        schwere Diagnose je zum Anlass für einen frühen Rückzug zu nehmen, und lebte
        genau dieses Muster bis zu seinem Tod unverändert aus. Wer die eigene
        Intensitätssuche nicht als Muster erkennt, kann auch angesichts einer kurzen,
        schweren Prognose nicht innehalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sieben mit Sechserflügel erklärt bei <strong>Frans de Waal</strong>
        vieles am Verlauf seiner letzten Lebensmonate: ein Mann, dessen gesamtes Werk auf
        der unstillbaren Suche nach neuem Verständnis beruhte, blieb dieser Suche bis
        kurz vor seinem Tod treu – der Schimpanse, der bis zum letzten Ast weiterklettert,
        weil dort immer noch etwas Neues zu entdecken sein könnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-frans-de-waal", label:"Porträt: Frans de Waal (SX7w6)"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Krankheitsporträt: Leonard Bernstein (SX7w6) – dasselbe Muster ungebremsten Weiterarbeitens"},
        {route:"krankheitsportraets-morgan-freeman", label:"Krankheitsporträt: Morgan Freeman (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

export function freudKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sigmund-freud-portrait.jpg" alt="Dr. Sigmund Freud – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Sigmund Freud</p>
        <p class="krim-portrait-typ">SO6w5 · Sozialer Typ 6 mit Fünferflügel · 1856–1939</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Erdmännchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so6.jpg" alt="Tierentsprechung: Erdmännchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO6")};left:${tierAvatarLeft("SO6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sigmund Freud</strong>, Begründer der Psychoanalyse, ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-sigmund-freud">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur
        im Allgemeinen. Hier geht es ausschließlich um ein Kapitel seines Lebens, das dort
        nur nebenbei erwähnt wird: Ab 1923 – Freud war 67 – wurde bei ihm Krebs im Mund- und
        Kieferbereich diagnostiziert, Folge seines jahrzehntelangen, exzessiven
        Zigarrenkonsums (bis zu 20 am Tag). Es folgten über 30 Operationen in 16 Jahren, eine
        entstellende Gesichtsprothese, die er selbst &bdquo;das Monster&ldquo; nannte, chronische
        Schmerzen – und die Weigerung, das Rauchen oder die Arbeit aufzugeben. 1939,
        im Londoner Exil, unheilbar und unter Qualen, bat er seinen Arzt Max Schur um eine
        tödliche Morphindosis. Schur gewährte sie – einer der bekanntesten Fälle
        ärztlich assistierten Sterbens der Medizingeschichte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Freud</strong> ist der <strong>Sozialen Sechs mit Fünferflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-immanuel-kant">Immanuel Kant</a>
        in diesem Kompass. Naranjo nannte die soziale Sechs den Subtyp der <em>Pflicht</em>:
        Sicherheit entsteht durch Zugehörigkeit zu einer Gemeinschaft mit klaren Regeln und
        durch das Erfüllen einer Aufgabe, die größer ist als man selbst – bei Freud die
        psychoanalytische Bewegung, die er gründete, leitete und bis zuletzt verteidigte.
        Der Fünferflügel bringt die charakteristische intellektuelle Systematik und ein tiefes
        Bedürfnis nach geistiger Klarheit hinzu – genau das Bedürfnis, das später über seinen
        Umgang mit Schmerz und Sterben entscheiden sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Analytisch und unbestechlich:</strong>
        Freuds Blick zerlegte, ordnete, deutete – auf Patienten, auf Kultur, auf sich selbst.
        Nichts blieb an der Oberfläche stehen, alles wurde auf eine dahinterliegende
        Struktur hin befragt. Das ist der Fünferflügel: Verstehen als Sicherheit.</p>
        <p class="vb-intro"><strong>b) Wachsam gegenüber Verrat und Abweichung:</strong>
        Freud registrierte genau, wer der Bewegung treu blieb und wer sich entfernte – Jungs
        und Adlers Abspaltungen erlebte er nicht als intellektuelle Differenz, sondern als
        Bruch eines Bundes. Typisch sechsertypische Wachsamkeit gegenüber der eigenen
        Gruppe.</p>
        <p class="vb-intro"><strong>c) Unnahbar, um Klarheit zu wahren:</strong>
        Schweigen, Abstinenz, die Couch statt Augenkontakt – Freuds analytisches Setting
        schuf bewusst Distanz. Das ist kein Desinteresse, sondern der Fünferflügel, der
        Beobachtungsraum braucht, um überhaupt sehen zu können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Bewegung als Schutzraum:</strong>
        Freud gründete nicht nur eine Methode, sondern eine Institution – die Wiener, später
        die Internationale Psychoanalytische Vereinigung. Sicherheit fand die soziale Sechs
        nicht im Alleingang, sondern im Aufbau einer Gemeinschaft Gleichgesinnter.</p>
        <p class="vb-intro"><strong>b) Unbequeme Wahrheit als Pflicht:</strong>
        Sexualität als Triebkraft der Psyche, das Unbewusste als eigentliches Zentrum des
        Seelenlebens: Das waren keine bequemen Thesen im Wien der Jahrhundertwende. Freud
        vertrat sie trotzdem – Pflicht zur Wahrheit wog schwerer als das Bedürfnis nach
        Zustimmung.</p>
        <p class="vb-intro"><strong>c) Das System als Schutz vor Zweifel:</strong>
        Triebtheorie, Strukturmodell, Traumdeutung – ein über Jahrzehnte hin geschlossenes
        theoretisches Gebäude. Der Fünferflügel ermöglichte diese Systematik; die soziale
        Sechs brauchte sie als festen Boden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Loyalität einfordern und geben:</strong>
        Wer der Bewegung treu blieb, konnte auf Freuds Rückhalt zählen; wer eigene Wege
        ging, verlor ihn. Das ist die Sechs, für die Zugehörigkeit keine Nebensache,
        sondern das Fundament der eigenen Sicherheit ist.</p>
        <p class="vb-intro"><strong>b) Autorität aufbauen – und ihr misstrauen:</strong>
        Freud wurde selbst zur Autorität, blieb aber zeitlebens wachsam gegenüber Kritik von
        außen, während er innerhalb der Bewegung selbst zunehmend autoritär auftrat. Das
        Schicksalsmuster der Sechs: Autoritäten errichten und zugleich fürchten, was
        geschieht, wenn sie fallen.</p>
        <p class="vb-intro"><strong>c) Präzision statt Intuition:</strong>
        Seine Werke entstanden nicht aus spontaner Eingebung, sondern aus jahrelangem
        Beobachten, Sammeln, Ordnen. Fünferflügel-Systematik, angewendet auf das
        Unbewusste selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Respektiert und tief umstritten:</strong>
        Freud veränderte für immer, wie Menschen über sich selbst denken – und wurde
        zugleich lebenslang von Fachkollegen und Kirche gleichermaßen angefeindet. Die
        soziale Sechs, die unbequeme Wahrheiten vertritt, polarisiert fast zwangsläufig.</p>
        <p class="vb-intro"><strong>b) Autoritätsperson mit Kontrollbedürfnis:</strong>
        Innerhalb seiner Bewegung erwartete er Gefolgschaft und reagierte auf Abweichung mit
        Ausschluss – eine Orthodoxie, die er selbst zu hinterfragen nicht immer bereit war.</p>
        <p class="vb-intro"><strong>c) Vertrauen durch nachweisbare Systematik:</strong>
        Anhänger folgten ihm nicht aus Charisma allein, sondern weil sein theoretisches
        Gebäude in sich stimmig wirkte – der Fünferflügel verlangt sich selbst diese
        Kohärenz ab, bevor er sie von anderen erwartet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rastlose Systemarbeit:</strong>
        Freud schrieb, praktizierte und korrespondierte in einem enormen Pensum über
        Jahrzehnte – die Sechs, die durch stetige Pflichterfüllung Sicherheit erzeugt.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Person und Bewegung:</strong>
        Sein Selbstverständnis war untrennbar mit der Psychoanalyse verbunden – Angriffe auf
        die Theorie erlebte er wie Angriffe auf sich selbst.</p>
        <p class="vb-intro"><strong>c) Kontrolle statt Vertrauen als Grundhaltung:</strong>
        Wo eine entspanntere Sechs lernt, der Gruppe und dem Leben mehr zu vertrauen, hielt
        Freud lebenslang selbst die Fäden in der Hand – auch im Umgang mit dem eigenen
        Körper, wie sich in seiner Krankheit besonders deutlich zeigt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Sechzehn Jahre, dreißig Operationen:</strong>
        <strong>Freud</strong> rauchte seit seiner Jugend Zigarren, oft bis zu 20 am Tag – trotz
        wiederholter Warnungen, trotz eigener Herzprobleme in jüngeren Jahren, trotz der
        1923 gestellten Krebsdiagnose. Er rauchte weiter, bis kurz vor seinem Tod. Über
        30 Operationen folgten, eine Gaumenprothese, die Sprechen und Essen zur Qual machte
        und die er selbst &bdquo;das Monster&ldquo; nannte.</p>
        <p class="vb-intro"><strong>b) Klarheit wichtiger als Schmerzfreiheit:</strong>
        Freud lehnte über weite Strecken wirksame Schmerzmittel ab und begnügte sich mit
        Aspirin – aus Sorge, stärkere Mittel könnten seine Denkfähigkeit trüben. Das ist der
        Fünferflügel in seiner reinsten, gefährlichsten Form: geistige Klarheit als
        höchstes Gut, dem selbst die eigene Schmerzfreiheit untergeordnet wird. Die soziale
        Sechs braucht diese Klarheit außerdem, um weiterhin Wache halten zu können – über
        die eigene Theorie, über die Bewegung, über die eigenen Patienten.</p>
        <p class="vb-intro"><strong>c) Die Sucht, die man nicht aufgibt, weil sie zur Arbeit gehört:</strong>
        Freud selbst beschrieb das Zigarrenrauchen als unverzichtbar für seine Denkfähigkeit
        und Produktivität. Hier zeigt sich eine paradoxe Seite der sonst so pflichtbewussten
        Sechs: Während sie äußeren Autoritäten (Ärzten, Warnungen, dem eigenen Körper)
        gegenüber eigentlich wachsam ist, vertraute Freud in dieser einen Sache lieber dem
        eigenen Urteil als dem der Medizin – weil das Aufgeben der Zigarre gleichbedeutend
        gewesen wäre mit dem Aufgeben der eigenen Funktionsfähigkeit, und damit der Pflicht,
        die sein Leben trug.</p>
        <p class="vb-intro"><strong>d) Ein kontrolliertes Ende:</strong>
        Anders als bei Molière (SO7w6), der seine Krankheit bis zum erzwungenen Zusammenbruch
        verdrängte, blieb Freud sich seiner Diagnose von Anfang an bewusst – typisch für die
        wache, nie ganz sorglose Sechs. Als 1939 keine Behandlung mehr half, bat er seinen
        Arzt Max Schur ausdrücklich um eine tödliche Morphindosis. Auch das Sterben wollte er
        nicht dem Zufall überlassen, sondern selbst bestimmen – die Sechs, die bis zuletzt
        die Kontrolle über die eigene Sicherheit behält, diesmal als bewusste Entscheidung
        über den letzten Moment.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet der Mund?</strong>
        Der Mund war bei Freud das Organ zweier zentraler Funktionen zugleich: der Sprache, mit
        der er seine Theorien lehrte, verteidigte und Autorität behauptete, und der Zigarre,
        seinem wichtigsten Beruhigungsmittel gegen die Grundangst, die unter der rastlosen
        Wachsamkeit der Sechs liegt. Ausgerechnet das Organ, mit dem er sowohl seine
        intellektuelle Sicherheit (Sprechen, Lehren, Deuten) als auch seine emotionale
        Sicherheit (die orale Beruhigung durch die Zigarre) herstellte, wurde zum Ort der
        tödlichen Erkrankung – eine Deutung, die im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet wird.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sechs zwangsläufig zu Krebserkrankungen führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Freuds Fall zeigen lässt, ist ein Muster, das bei einer Gewohnheit, die eng
        mit der eigenen Identität und Funktionsfähigkeit verwoben ist, in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Freud kannte sein eigenes Muster nicht bewusst – die Wachsamkeit der sozialen Sechs trieb ihn dazu, auch mit fortschreitendem Krebs an der geistigen Kontrolle über sein Lebenswerk festzuhalten, statt sich Linderung zu erlauben. Wer die eigene Angst um den Verlust der Kontrolle nicht als Muster erkennt, sucht Sicherheit in genau der Härte, die den Körper zusätzlich erschöpft.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Bei <strong>Freud</strong> zeigt sich die soziale Sechs mit Fünferflügel noch einmal in
        aller Deutlichkeit: geistige Klarheit als höchstes Gut, Loyalität zur
        eigenen Sache über die eigenen Bedürfnisse gestellt, und selbst im Angesicht des
        Todes noch der Wunsch, die Kontrolle zu behalten statt sich dem Ungewissen zu
        überlassen. Wo Molière seine Krankheit verdrängte, bis der Körper sie ihm auf offener
        Bühne aufzwang, sah Freud seiner Diagnose von Anfang an klar ins Auge – und
        entschied bis zum letzten Atemzug selbst, was er dafür zu opfern bereit war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-sigmund-freud", label:"Porträt: Sigmund Freud (SO6w5) – Lebenswerk"},
        {route:"beruehmte-immanuel-kant", label:"Porträt: Immanuel Kant (SO6w5)"},
        {route:"krankheitsportraets-immanuel-kant", label:"Krankheitsporträt: Immanuel Kant (SO6w5) – dasselbe Muster der Selbstkontrolle"},
        {route:"krankheitsportraets-moliere", label:"Krankheitsporträt: Molière (SO7w6)"},
        {route:"krankheitsportraets-woody-allen", label:"Krankheitsporträt: Woody Allen (SE6w7) – verwandte Hypochondrie, andere Instinktantwort"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so6", label:"Subtyp-Profil SO6"},
      ])}
    </div>
  `);
}

export function georgeGershwinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-george-gershwin-portrait.jpg" alt="George Gershwin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">George Gershwin</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · 1898–1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>George Gershwin</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-george-gershwin">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk, von
        „Rhapsody in Blue" bis „Porgy and Bess". Diese Seite blendet ein anderes Kapitel auf, das
        dort nur am Rande vorkommt: die letzten Monate seines Lebens, in denen ein bösartiger
        Hirntumor zunächst als Erschöpfung und Nervosität fehlgedeutet wurde, bis er am
        11. Juli 1937 im Alter von nur 38 Jahren daran starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Gershwin</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SO7 stellt ihre überschäumende Energie in den Dienst eines größeren
        Ideals und flieht dabei reflexhaft vor jedem Anzeichen von Stillstand oder Schmerz –
        auch vor den eigenen Warnsignalen des Körpers. Der Sechserflügel bringt zwar
        systematische Wachsamkeit gegenüber äußeren Risiken hinzu, doch diese Wachsamkeit
        galt bei Gershwin fast ausschließlich seiner Musik, nicht seiner Gesundheit. Genau
        diese Kombination aus rastloser Fluchtbewegung und blinder Stelle für den eigenen
        Körper prägte den fatalen Verlauf seiner letzten Lebensmonate.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein seltsamer Geruch, der niemand sonst wahrnahm:</strong>
        Ab Anfang 1937 berichtete Gershwin wiederholt, er rieche verbranntes Gummi – eine
        Geruchshalluzination, die medizinisch als typisches Frühsymptom bestimmter
        Hirntumoren gilt, damals aber niemandem etwas sagte.</p>
        <p class="vb-intro"><strong>b) Kopfschmerzen, die als Nervosität abgetan wurden:</strong>
        Zunehmende, teils heftige Kopfschmerzen, Konzentrationsstörungen und
        Koordinationsprobleme wurden von Ärzten und Freunden monatelang als psychosomatisch
        gedeutet – Überarbeitung, Erschöpfung durch den Umzug nach Hollywood, nervöse
        Anspannung vor neuen Filmprojekten.</p>
        <p class="vb-intro"><strong>c) Ein wachsendes Gefühl, dass etwas nicht stimmte:</strong>
        Gershwin selbst äußerte gegenüber engen Freunden zunehmend die Sorge, ernsthaft
        krank zu sein, ließ sich aber von mehreren Ärzten beruhigen, die keine organische
        Ursache finden konnten – und arbeitete währenddessen weiter an neuen Kompositionen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Zusammenbruch am Set:</strong>
        Am 9. Juli 1937 verlor Gershwin während der Arbeit an den MGM-Studios kurzzeitig das
        Bewusstsein. Erst jetzt wurde eine gründliche neurologische Untersuchung eingeleitet.</p>
        <p class="vb-intro"><strong>b) Eine Diagnose, die zu spät kam:</strong>
        Ärzte diagnostizierten ein Glioblastom, einen besonders aggressiven, bösartigen
        Hirntumor. Eine Notoperation am 11. Juli 1937 im Cedars of Lebanon Hospital in Los
        Angeles konnte den Tumor nicht mehr wirksam entfernen.</p>
        <p class="vb-intro"><strong>c) Tod noch am selben Tag:</strong>
        Gershwin starb wenige Stunden nach der Operation, am 11. Juli 1937, im Alter von 38
        Jahren – für Familie, Freunde und die amerikanische Musikwelt ein Schock, der
        keinerlei Vorwarnzeit gelassen hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Weiterarbeiten trotz Warnsignalen:</strong>
        Selbst mit spürbar zunehmenden Symptomen komponierte Gershwin in seinen letzten
        Lebensmonaten in Hollywood unvermindert weiter an Filmmusik – unter anderem für
        „Shall We Dance" und „A Damsel in Distress" mit Fred Astaire.</p>
        <p class="vb-intro"><strong>b) Kein Rückzug, sondern noch mehr Gesellschaft:</strong>
        Weggefährten berichteten, dass Gershwin auch in den Monaten wachsender
        gesundheitlicher Beschwerden ein aktives, geselliges Leben führte, weiterhin
        Partys besuchte und veranstaltete – als könne die eigene gesellschaftliche
        Präsenz die körperlichen Warnzeichen überstimmen.</p>
        <p class="vb-intro"><strong>c) Fehldiagnosen, die auf Fluchtverhalten interpretiert wurden:</strong>
        Einige der behandelnden Ärzte vermuteten zunächst eine psychosomatische Ursache
        oder sogar eine Hysterie-Diagnose, teils weil Gershwins äußere Fassade so wenig auf
        eine ernsthafte körperliche Erkrankung schließen ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein abruptes Ende mitten im Schaffen:</strong>
        Gershwin starb auf dem Höhepunkt seines Erfolgs, mit zahlreichen unvollendeten
        Projekten und Plänen für weitere Bühnen- und Filmwerke.</p>
        <p class="vb-intro"><strong>b) Landesweite Trauer:</strong>
        Sein Tod löste eine Welle öffentlicher Trauer in den USA aus; Radiosender
        unterbrachen ihr Programm, um die Nachricht zu verkünden, und zahlreiche Kollegen
        widmeten ihm in den folgenden Wochen Gedenkkonzerte.</p>
        <p class="vb-intro"><strong>c) Nachträgliche medizinische Aufarbeitung:</strong>
        Erst Jahrzehnte später wurde in der medizinischen Fachliteratur breiter diskutiert,
        wie typisch Gershwins frühe Symptome – insbesondere die Geruchshalluzinationen –
        tatsächlich für Hirntumoren waren, und wie leicht sie damals fehlgedeutet wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Flucht nach vorn statt Innehalten:</strong>
        Die SO7-typische Strategie, drohendem Schmerz durch immer neue Projekte und
        Aktivität auszuweichen, zeigte sich bei Gershwin bis zuletzt: Je mehr Symptome
        auftraten, desto mehr füllte er seinen Terminkalender.</p>
        <p class="vb-intro"><strong>b) Wachsamkeit am falschen Ort:</strong>
        Der Sechserflügel richtete seine Vorsicht auf die eigene künstlerische Legitimität
        – die Suche nach Lehrern, die Sorge um die Qualität seiner Werke –, nicht auf die
        eigene körperliche Verfassung. Diese Fehlallokation von Wachsamkeit ist ein
        Muster, das bei SO7w6-Persönlichkeiten immer wieder zu beobachten ist.</p>
        <p class="vb-intro"><strong>c) Geselligkeit als Ablenkung:</strong>
        Statt sich mit den eigenen Ängsten vor einer ernsthaften Erkrankung
        auseinanderzusetzen, suchte Gershwin verstärkt Gesellschaft – die vertraute
        SO7-Strategie, unangenehme innere Zustände durch äußere Anregung zu überdecken.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben ohne echte Pausen:</strong>
        Schon lange vor den ersten Symptomen war Gershwin für seine praktisch pausenlose
        Produktivität bekannt – mehrere Projekte gleichzeitig, kaum je wirkliche
        Erholungsphasen, ein Terminkalender, der keine Leere zuließ.</p>
        <p class="vb-intro"><strong>b) Monate mit ignorierten Warnzeichen:</strong>
        Von den ersten Geruchshalluzinationen Anfang 1937 bis zum Kollaps im Juli desselben
        Jahres verstrichen mehrere Monate, in denen Gershwin selbst, sein Umfeld und
        mehrere Ärzte die Symptome konsequent verharmlosten.</p>
        <p class="vb-intro"><strong>c) Ein letztes Halbjahr voller neuer Projekte:</strong>
        Statt sich zurückzuziehen, begann Gershwin in genau dieser Zeit neue
        Filmmusik-Aufträge in Hollywood – ein weiteres Kapitel wurde aufgeschlagen, statt
        das bereits begonnene zur Ruhe kommen zu lassen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Gehirn?</strong>
        Für eine soziale Sieben mit Sechserflügel, deren gesamte Identität am
        unaufhörlichen Hervorbringen neuer Ideen hängt, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das ununterbrochen neue Musik, neue Pläne, neue
        Begeisterung produzierte, wurde zum Ort einer Erkrankung, die sich jeder
        Kontrolle entzog – während die für die SO7 typische Flucht nach vorn genau in dem
        Organ ihre Grenze fand, das diese Flucht überhaupt erst ermöglichte. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig zu
        Hirntumoren führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Gershwins Fall zeigen lässt, ist ein Muster, das
        bei der Flucht vor Stillstand und der Fehlallokation von Wachsamkeit in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Gershwin kannte sein eigenes Enneagramm-Muster nicht – die soziale Sieben mit
        Sechserflügel flieht fast reflexhaft vor jedem Anzeichen von Stillstand oder
        Bedrohung in neue Projekte und gesellschaftliche Aktivität, statt innezuhalten und
        die eigenen Warnsignale ernst zu nehmen. Genau das lebte er bis zuletzt ungebremst
        aus: mehr Termine statt weniger, mehr Gesellschaft statt Rückzug, mehr neue Musik
        statt der einen dringend nötigen ärztlichen Abklärung. Wer die eigene
        Fluchtbewegung nicht als Muster erkennt, verwechselt sie leicht mit reinem
        Tatendrang, selbst wenn der eigene Körper längst Alarm schlägt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Gershwins</strong> letzten Lebensmonaten lässt sich die soziale Sieben
        mit Sechserflügel in einer ihrer erschütterndsten Formen ablesen: monatelang
        fehlgedeutete Warnsignale, ein Terminkalender, der bis zum Kollaps keine Lücke
        zuließ, und eine Wachsamkeit, die sich auf alles außer die eigene Gesundheit
        richtete. Der Biber, der so lange weiterbaute, bis der eigene Bau ihn unter sich
        begrub.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-george-gershwin", label:"Porträt: George Gershwin (SO7w6) – Lebenswerk"},
        {route:"krankheitsportraets-nikola-tesla", label:"Krankheitsporträt: Nikola Tesla (SO7w6) – gleicher Subtyp, entgegengesetzter Verlauf"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function hansDietrichGenscherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hans-dietrich-genscher-portrait.jpg" alt="Hans-Dietrich Genscher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans-Dietrich Genscher</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1927–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hans-Dietrich Genscher</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hans-dietrich-genscher">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: ein über Jahre bestehendes Herzleiden, an
        dessen Folgen Genscher im März 2016 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Genscher</strong> ist dem <strong>selbsterhaltenden Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SE9 sucht Sicherheit durch Beharrlichkeit und Kontinuität, auch im
        Umgang mit der eigenen Gesundheit; der Achterflügel bringt eine ruhige, aber
        unverkennbare Entschlossenheit hinzu, die sich nicht wegdrängen lässt. Genau diese
        Kombination – geduldige Kontinuität im Amt, verbunden mit der Weigerung, sich von
        gesundheitlichen Rückschlägen aus dem öffentlichen Leben drängen zu lassen –
        bestimmte den Umgang mit dem eigenen Herzleiden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein über Jahre bekanntes Herzleiden:</strong>
        Genscher war nach übereinstimmenden biografischen Quellen über Jahre herzkrank – ein
        Umstand, der seinem politischen Umfeld bekannt war, aber öffentlich nie zu einem
        zentralen Thema wurde.</p>
        <p class="vb-intro"><strong>b) Kein öffentlicher Rückzug wegen der Erkrankung:</strong>
        Trotz des bekannten Herzleidens setzte Genscher seine politische und öffentliche
        Tätigkeit über Jahrzehnte fort, ohne die eigene Gesundheit zum Gegenstand öffentlicher
        Debatten zu machen.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes öffentliches Engagement bis ins hohe Alter:</strong>
        Auch nach seinem Rücktritt als Außenminister 1992 blieb Genscher als Elder Statesman
        der deutschen Außenpolitik präsent, mit Vorträgen, Interviews und diplomatischen
        Beratungen bis weit in sein neuntes Lebensjahrzehnt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zurückhaltung bei gesundheitlichen Details:</strong>
        Anders als manche Zeitgenossen machte Genscher Details zu seinem Herzleiden nie zum
        Gegenstand ausführlicher öffentlicher Schilderungen – die genaue Art und der Verlauf
        der Erkrankung blieben weitgehend privat.</p>
        <p class="vb-intro"><strong>b) Ein Leben, das bis zuletzt von Kontinuität geprägt war:</strong>
        Genschers letzte Lebensjahre waren, soweit öffentlich bekannt, von derselben ruhigen
        Beständigkeit geprägt, die seine gesamte politische Laufbahn kennzeichnete – kein
        dramatischer öffentlicher Bruch, kein plötzlicher Rückzug.</p>
        <p class="vb-intro"><strong>c) Zunehmende gesundheitliche Fragilität im hohen Alter:</strong>
        In den letzten Lebensjahren wurde Genschers gesundheitliche Verfassung nach Angaben
        seines Umfelds zunehmend fragiler, ohne dass dies öffentlich stark thematisiert
        wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 31. März 2016 in Wachtberg:</strong>
        Hans-Dietrich Genscher starb im Alter von 89 Jahren an den Folgen seines Herzleidens
        in seinem Wohnort Wachtberg bei Bonn.</p>
        <p class="vb-intro"><strong>b) Staatsakt mit weltweiter Anteilnahme:</strong>
        Sein Tod löste international Nachrufe und Trauerbekundungen aus – ein Staatsakt
        würdigte seine Rolle bei der deutschen Wiedervereinigung und der europäischen
        Entspannungspolitik.</p>
        <p class="vb-intro"><strong>c) Würdigung eines diplomatischen Lebenswerks bis zum Ende:</strong>
        Nachrufe betonten durchgängig sein diplomatisches Lebenswerk, während seine private
        gesundheitliche Geschichte nur am Rande erwähnt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild ungebrochener Präsenz:</strong>
        Bis kurz vor seinem Tod blieb das öffentliche Bild Genschers das eines aktiven,
        präsenten Elder Statesman – nicht das eines von langjähriger Krankheit gezeichneten
        Mannes.</p>
        <p class="vb-intro"><strong>b) Keine nachträgliche Dramatisierung der Erkrankung:</strong>
        Auch in Nachrufen und Würdigungen wurde das Herzleiden nicht zu einem zentralen
        Erzählelement seines Lebens gemacht – es blieb ein stiller, fast beiläufiger
        Bestandteil seiner Biografie.</p>
        <p class="vb-intro"><strong>c) Fortwirken seines diplomatischen Vermächtnisses:</strong>
        Genschers Rolle bei der deutschen Einheit und der europäischen Entspannungspolitik
        blieb nach seinem Tod das prägende öffentliche Bild, unabhängig von seiner privaten
        gesundheitlichen Geschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontinuität als Antwort auf die eigene Erkrankung:</strong>
        Die SE9-typische Suche nach Sicherheit durch Beharrlichkeit zeigte sich auch im
        Umgang mit dem eigenen Herzleiden: Genscher ließ die Krankheit nicht zum Anlass für
        einen dramatischen Rückzug werden, sondern setzte sein öffentliches Wirken in
        gewohnter Kontinuität fort.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die stille Entschlossenheit:</strong>
        Dieselbe ruhige, aber unverkennbare Entschlossenheit, mit der Genscher jahrzehntelang
        zwischen den Fronten des Kalten Krieges vermittelte, zeigte sich im Umgang mit der
        eigenen Gesundheit als Weigerung, sich von der Erkrankung aus dem öffentlichen Leben
        drängen zu lassen.</p>
        <p class="vb-intro"><strong>c) Diskretion statt öffentlicher Inszenierung:</strong>
        Dass Genscher Details zu seinem Herzleiden nie öffentlich ausbreitete, passt zur
        SE9w8-Neigung, private Angelegenheiten diskret zu behandeln, während die öffentliche
        Rolle unverändert weitergeführt wird.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Brückenbauer zwischen Machtblöcken, der auch die eigene Krankheit ruhig überbrückte:</strong>
        Genschers gesamtes Lebenswerk beruhte auf der Fähigkeit, Spannungen auszuhalten,
        ohne sie eskalieren zu lassen – genau diese Haltung übertrug sich auch auf den Umgang
        mit dem eigenen Herzleiden: kein Kampf, keine Dramatisierung, sondern beharrliche
        Fortsetzung des gewohnten Weges.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Parallelen zeigen sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">David Hume</a>
        und
        <a href="javascript:void(0)" data-route="krankheitsportraets-johannes-brahms">Johannes
        Brahms</a> (beide ebenfalls SE9w8): Alle drei begegneten einer fortschreitenden
        Erkrankung mit derselben ruhigen, fast gelassenen Beharrlichkeit, ohne die
        Erkrankung zum zentralen öffentlichen Thema zu machen. Bei allen SE9w8ern zeigt sich
        dasselbe Muster: Sicherheit durch Kontinuität, auch angesichts des eigenen
        körperlichen Verfalls.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz, das Organ der stillen Vermittlung?</strong>
        Für einen selbsterhaltenden Typ 9 mit Achterflügel, dessen gesamtes Lebenswerk auf
        der stillen Vermittlung zwischen verfeindeten Lagern beruhte, liegt eine Deutung
        nahe: Ausgerechnet jenes Organ, das im Volksmund für Verbindung und Ausgleich steht,
        wurde zum Ort der eigenen körperlichen Belastung. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Herzleiden führt – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig
        vom Subtyp.</strong> Was sich an Genschers Fall zeigen lässt, ist ein Muster im
        Umgang mit einer langjährigen Erkrankung, das bei einem ausgeprägten
        selbsterhaltenden Typ 9 mit Achterflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Genscher kannte sein eigenes Muster nicht als Enneagramm-Struktur – der
        selbsterhaltende Typ 9 mit Achterflügel hält reflexhaft an der eigenen Kontinuität
        fest, auch gegenüber der eigenen Krankheit, statt rechtzeitig kürzerzutreten, und
        lebte genau dieses Muster bis zu seinem Tod unverändert aus. Wer die eigene Neigung,
        gesundheitliche Warnsignale mit stiller Beharrlichkeit zu überdecken, nicht als Muster
        erkennt, riskiert, dass die Krankheit unbemerkt über Jahre fortschreitet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 9 mit Achterflügel erklärt bei <strong>Hans-Dietrich
        Genscher</strong> vieles am Umgang mit dem eigenen Herzleiden: ein Mann, dessen
        gesamtes Lebenswerk der stillen Vermittlung zwischen verfeindeten Lagern galt,
        begegnete auch der eigenen Krankheit mit derselben ruhigen Kontinuität – der Elefant,
        der bis zuletzt in seinem eigenen Rhythmus weiterging, ohne das Tempo für die
        Krankheit zu ändern.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Porträt: Hans-Dietrich Genscher (SE9w8)"},
        {route:"krankheitsportraets-david-hume", label:"Krankheitsporträt: David Hume (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-johannes-brahms", label:"Krankheitsporträt: Johannes Brahms (SE9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

export function isaacNewtonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-isaac-newton-portrait.jpg" alt="Isaac Newton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Isaac Newton</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel · 1642/43–1727</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Isaac Newton</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-isaac-newton">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein jahrzehntelang geheim gehaltenes
        Wissen und sein bahnbrechendes physikalisches Werk. Diese Seite vertieft ein Kapitel,
        das dort nur am Rande erwähnt wird: einen schweren Nervenzusammenbruch 1693,
        vermutlich durch jahrzehntelange, ungeschützte alchemistische Experimente mit
        Quecksilber ausgelöst.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Newton</strong> ist dem <strong>sozialen Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SO5 sammelt Wissen und hortet es, kontrolliert dosiert für die
        Gemeinschaft freigegeben; der Sechserflügel bringt Sicherheitsbedürfnis und
        institutionelle Kontrolle hinzu. Genau diese Kombination – jahrzehntelange, im
        Verborgenen betriebene Experimente ohne jede Vorsichtsmaßnahme – bestimmte auch,
        wie sich seine gesundheitliche Krise entwickelte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte an alchemistischen Experimenten:</strong>
        Über mehr als drei Jahrzehnte arbeitete Newton in seinem privaten Labor an
        alchemistischen Versuchen, verfasste mehr als eine Million Wörter zu Rezepturen und
        Deutungen alter Texte, und hantierte dabei regelmäßig mit Quecksilber und anderen
        giftigen Substanzen ohne jeglichen Schutz.</p>
        <p class="vb-intro"><strong>b) Zunehmende Schlaflosigkeit im Frühjahr 1693:</strong>
        In den Monaten vor seinem eigentlichen Zusammenbruch berichteten Zeitgenossen von
        Newtons zunehmend unregelmäßigem Schlaf und einer wachsenden Gereiztheit in seiner
        Korrespondenz.</p>
        <p class="vb-intro"><strong>c) Erste paranoide Anzeichen in Briefen:</strong>
        Newton begann, in Briefen an enge Freunde und Wissenschaftskollegen Andeutungen zu
        machen, die auf ein wachsendes Misstrauen gegenüber seinem Umfeld schließen ließen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Anschuldigungen gegen enge Freunde:</strong>
        Im September 1693 schrieb Newton an John Locke und Samuel Pepys, zwei seiner engsten
        Vertrauten, Briefe voller wirrer Vorwürfe – er beschuldigte Locke, ihn „mit Frauen
        verstricken" zu wollen, und bat Pepys um Verzeihung für Dinge, die er ihm angeblich
        angetan habe, ohne diese zu benennen.</p>
        <p class="vb-intro"><strong>b) Monatelanger Rückzug aus der wissenschaftlichen Korrespondenz:</strong>
        Nach diesen Vorfällen unterbrach Newton für mehrere Monate nahezu jede
        wissenschaftliche Kommunikation – ein auffälliger Bruch in seinem sonst
        umfangreichen Briefwechsel.</p>
        <p class="vb-intro"><strong>c) Spätere, teilweise Entschuldigungen:</strong>
        Als sich sein Zustand besserte, entschuldigte sich Newton bei Locke und erklärte
        seinen Zustand mit Schlafmangel – ohne die alchemistischen Experimente selbst je
        als mögliche Ursache zu benennen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vollständige Erholung innerhalb eines Jahres:</strong>
        Anders als bei chronisch verlaufenden Fällen erholte sich Newton innerhalb von etwa
        einem Jahr weitgehend von der akuten Krise und nahm seine wissenschaftliche Arbeit
        und Korrespondenz wieder auf.</p>
        <p class="vb-intro"><strong>b) Keine Aufgabe der alchemistischen Praxis:</strong>
        Trotz der durchlebten Krise gibt es keine Hinweise darauf, dass Newton seine
        alchemistischen Experimente danach grundlegend änderte oder aus Vorsicht einschränkte
        – die Praxis, die vermutlich zur Vergiftung beigetragen hatte, wurde nicht in Frage
        gestellt.</p>
        <p class="vb-intro"><strong>c) Spätere moderne Analysen bestätigten hohe Schwermetallwerte:</strong>
        Untersuchungen von Haarproben, die Newton zugeschrieben werden, zeigten Jahrhunderte
        später ungewöhnlich hohe Konzentrationen von Quecksilber, Blei und Arsen – ein
        indirekter, aber deutlicher Hinweis auf die Belastung durch seine jahrzehntelange
        Laborarbeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Erklärung der Krise:</strong>
        Newton äußerte sich zeitlebens nicht öffentlich über die Vorfälle von 1693 – der
        Zusammenbruch blieb, wie so vieles in seinem Leben, im privaten Briefwechsel
        verborgen, statt öffentlich verarbeitet zu werden.</p>
        <p class="vb-intro"><strong>b) Fortsetzung seiner öffentlichen Karriere trotz der Krise:</strong>
        Nur wenige Jahre später, 1696, übernahm Newton die Leitung der Royal Mint und 1703
        die Präsidentschaft der Royal Society – Ämter, die höchste geistige Klarheit und
        institutionelle Kontrolle voraussetzten.</p>
        <p class="vb-intro"><strong>c) Ein langes Leben trotz der Belastung:</strong>
        Newton starb erst 1727, im Alter von 84 Jahren – die Vergiftungskrise von 1693
        blieb, soweit bekannt, eine einmalige akute Episode, keine chronisch fortschreitende
        Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das verborgene Experimentieren, das sich selbst gefährdete:</strong>
        Dieselbe Neigung, Wissen und Forschung im Verborgenen zu betreiben, die Newtons
        gesamtes Leben prägte, bestimmte auch, dass niemand seine gefährliche
        alchemistische Praxis je begrenzte oder hinterfragte – die Kontrolle über das eigene
        Wissen bedeutete auch, dass niemand vor den Risiken warnen konnte.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und das Misstrauen als Symptom:</strong>
        Die paranoiden Anschuldigungen gegen Locke und Pepys lassen sich auch als extreme
        Zuspitzung des ohnehin wachen, sicherheitsorientierten Sechserflügels lesen – unter
        toxischer Belastung wandte sich dasselbe Muster, das sonst institutionelle Kontrolle
        suchte, gegen die engsten Vertrauten selbst.</p>
        <p class="vb-intro"><strong>c) Rückkehr zur gewohnten Verschlossenheit statt Offenlegung:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses folgte auf die Krise
        kein öffentliches Bekenntnis oder eine Verhaltensänderung – Newton kehrte zu genau
        jener Verschlossenheit zurück, die schon vor der Krise sein gesamtes Leben geprägt
        hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der sich in der eigenen Verborgenheit vergiftete:</strong>
        Newtons gesamtes Leben war von der Überzeugung geprägt, dass Wissen im Verborgenen
        am sichersten entwickelt wird – seine alchemistischen Experimente waren die
        konsequenteste Anwendung dieses Prinzips, und zugleich die gefährlichste, weil
        niemand von außen auf die toxischen Risiken hinweisen konnte.</p>
        <p class="vb-intro"><strong>b) Kontrolle über Wissen, aber nicht über die eigene Gesundheit:</strong>
        Ein Mann, der jeden Aspekt seiner Forschung akribisch kontrollierte – wann, wie und
        ob überhaupt etwas veröffentlicht wurde –, hatte über die physischen Folgen seiner
        eigenen Experimente keinerlei Kontrolle, weil er sie gar nicht als Risiko
        einordnete.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Geist?</strong>
        Für eine soziale Fünf mit Sechserflügel, deren gesamte Kraft auf klarem, geordnetem
        Denken beruhte, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das ihm die
        Kontrolle über sein gesamtes geheimes Wissen ermöglichte, wurde durch die toxische
        Fracht seiner eigenen Forschung zeitweise selbst außer Kontrolle gebracht – ein
        Angriff der Sache, die er am meisten schützen wollte, auf das Werkzeug, mit dem er
        sie schützte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu
        Schwermetallvergiftung oder psychischer Krise führt – <strong>jeder Mensch kann jede
        Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Newtons Fall zeigen
        lässt, ist ein Muster im Umgang mit selbst auferlegter Gefährdung durch geheime
        Forschung, das bei einer ausgeprägten sozialen Fünf mit Sechserflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Newton kannte sein eigenes Muster nicht – die soziale Fünf mit Sechserflügel
        sichert reflexhaft die vollständige Kontrolle über das eigene Wissen und dessen
        Weitergabe, statt die eigene körperliche Gefährdung je in Frage zu stellen, und
        genau dieses Muster lebte er auch nach seiner Krise unverändert weiter aus. Wer die
        eigene Notwendigkeit, jedes Wissen im Verborgenen zu entwickeln, nicht als Muster
        erkennt, kann sie auch angesichts der eigenen Gefährdung nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Sechserflügel erklärt bei <strong>Newton</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der
        kontrollierten, geheimen Entwicklung von Wissen beruhte, geriet ausgerechnet durch
        diese Geheimhaltung selbst außer Kontrolle – der Oktopus, der sein eigenes
        Verborgenes so lange nicht offenlegte, bis es beinahe seinen eigenen Verstand
        forderte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-isaac-newton", label:"Porträt: Isaac Newton (SO5w6) – Physiker und Mathematiker"},
        {route:"krankheitsportraets-stephen-hawking", label:"Krankheitsporträt: Stephen Hawking (SO5w6) – gleicher Subtyp, gleicher Lehrstuhl"},
        {route:"krankheitsportraets-cg-jung", label:"Krankheitsporträt: Carl Gustav Jung (SO5w6) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function johnWayneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-john-wayne-portrait.jpg" alt="John Wayne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Wayne</p>
        <p class="krim-portrait-typ">SX8w7 · Sexueller Typ 8 mit Siebenerflügel · 1907–1979</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>John Wayne</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-john-wayne">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht zur Sprache kommt: eine
        Lungenkrebs-Erkrankung 1964, die Wayne öffentlich zum Kampf erklärte, und eine zweite,
        tödliche Krebsdiagnose 1979.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Wayne</strong> ist der <strong>sexuellen Acht mit Siebenerflügel</strong>
        zugeordnet. Die SX8 lebt ihre Intensität ungefiltert und körperlich aus – sie sucht
        nicht die diplomatische Mitte, sondern den vollen, unmittelbaren Ausdruck von Kraft und
        Willen. Der Siebenerflügel bringt zusätzlichen Schwung und die Weigerung hinzu,
        innezuhalten – ein Muster, das sich bis in Waynes öffentlich inszenierten Kampf gegen
        die eigene Krankheit nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelanges starkes Rauchen:</strong>
        Wayne rauchte über Jahrzehnte hinweg bis zu sechs Packungen Zigaretten pro Tag – ein
        Konsum, der sein Krebsrisiko drastisch erhöhte, den er aber lange nicht als Bedrohung
        behandelte.</p>
        <p class="vb-intro"><strong>b) Diagnose im September 1964:</strong>
        1964 wurde bei Wayne Lungenkrebs diagnostiziert. Sein linker Lungenflügel sowie zwei
        Rippen mussten in einer aufwendigen Operation entfernt werden.</p>
        <p class="vb-intro"><strong>c) Öffentliche Erklärung des Kampfes:</strong>
        Statt die Diagnose zu verbergen, ging Wayne 1965 mit ihr an die Öffentlichkeit und
        bezeichnete seinen Kampf gegen die Krankheit als „The Big C" – Krebs sollte, wie jeder
        andere Gegner in seinen Filmen, direkt benannt und bekämpft werden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rückkehr vor die Kamera trotz eines Lungenflügels:</strong>
        Bereits wenige Monate nach der schweren Operation kehrte Wayne zu Dreharbeiten zurück –
        mit deutlich eingeschränkter Lungenkapazität, aber ohne öffentlich sichtbare
        Einschränkung seiner Rollenwahl.</p>
        <p class="vb-intro"><strong>b) Eine Symbolfigur für Krebsaufklärung:</strong>
        Waynes offener Umgang mit seiner Diagnose machte ihn zu einem der bekanntesten
        öffentlichen Gesichter im Kampf gegen Krebs in den USA der 1960er- und 1970er-Jahre –
        er engagierte sich aktiv für Aufklärungsarbeit.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte körperliche Schwerstarbeit im Film:</strong>
        Auch nach der Operation drehte Wayne weiter körperlich fordernde Western- und
        Actionrollen, oft mit sichtbarer Anstrengung, aber ohne die Rollenauswahl grundlegend
        zu ändern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fünfzehn Jahre nach der ersten Diagnose:</strong>
        Nach der Lungenkrebs-Operation 1964 lebte Wayne fünfzehn weitere Jahre, in denen er
        seine Filmkarriere fortsetzte, darunter seinen einzigen Oscar-gewinnenden Auftritt in
        „True Grit" (1969).</p>
        <p class="vb-intro"><strong>b) Eine zweite Krebsdiagnose im Januar 1979:</strong>
        Im Januar 1979 wurde bei Wayne Magenkrebs diagnostiziert. Bei der folgenden Operation
        wurde sein gesamter Magen entfernt.</p>
        <p class="vb-intro"><strong>c) Tod am 11. Juni 1979:</strong>
        Wayne starb im Alter von 72 Jahren im UCLA Medical Center an den Folgen der
        Magenkrebs-Erkrankung – knapp fünf Monate nach der zweiten Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentlicher Kampf, der zum Vorbild wurde:</strong>
        Waynes Offenheit über seine erste Krebserkrankung ermutigte viele andere Betroffene,
        ihre eigene Diagnose nicht länger zu verschweigen – ein seltener Fall, in dem
        Offenheit statt Verbergung das prägende Muster war.</p>
        <p class="vb-intro"><strong>b) Zwei Krebsarten, ein Lebensstil:</strong>
        Sowohl der Lungen- als auch der spätere Magenkrebs stehen im Zusammenhang mit
        Waynes jahrzehntelangem, intensivem Tabakkonsum – ein Risiko, das er trotz der ersten
        Diagnose nie grundlegend änderte.</p>
        <p class="vb-intro"><strong>c) Eine Karriere, die bis zuletzt weiterging:</strong>
        Wayne drehte seinen letzten Film, „The Shootist" – bezeichnenderweise über einen
        todkranken Revolverhelden –, erst 1976, drei Jahre vor seinem Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Krebs als benannter Gegner:</strong>
        Wo andere Prominente ihre Erkrankung verbargen, benannte Wayne seinen Krebs explizit
        als Feind, den es zu besiegen galt – die sexuelle Acht, die Bedrohung nicht meidet,
        sondern direkt konfrontiert, auch wenn der Gegner der eigene Körper ist.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel als Antrieb zur schnellen Rückkehr:</strong>
        Die rasche Rückkehr vor die Kamera nach der Lungenoperation zeigt den Siebenerflügel in
        Reinform: Stillstand war für Wayne keine Option, selbst mit nur noch einem
        Lungenflügel.</p>
        <p class="vb-intro"><strong>c) Öffentliche Stärke als Fortsetzung der Leinwandfigur:</strong>
        Der Kampf gegen „The Big C" wurde von der Öffentlichkeit fast wie eine Fortsetzung
        seiner Filmrollen wahrgenommen – der Duke, der auch der eigenen Sterblichkeit die
        Stirn bot.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Fünfzehn Jahre zwischen erster Diagnose und Tod:</strong>
        Von der Lungenkrebs-Diagnose 1964 bis zu seinem Tod 1979 lebte Wayne fünfzehn Jahre mit
        dem Wissen um die eigene Sterblichkeit – ohne sein öffentliches Leben oder seine
        Rollenwahl grundlegend zu verändern.</p>
        <p class="vb-intro"><strong>b) Konfrontation statt Verbergung als durchgehendes Muster:</strong>
        Anders als Karl Lagerfeld (SO3w4) oder Michael Jackson (SO4w3), die ihre Krankheit
        hinter einer makellosen Fassade verbargen, machte Wayne seine Diagnose öffentlich und
        stilisierte sie zu einem weiteren Kampf, den es zu gewinnen galt – die sexuelle Acht,
        die Bedrohung nicht versteckt, sondern benennt.</p>
        <p class="vb-intro"><strong>c) Zwei verschiedene Organe, derselbe Lebensstil:</strong>
        Dass sowohl Lunge als auch Magen betroffen waren, verweist auf denselben
        zugrundeliegenden Risikofaktor – ein Lebensstil, der auf Intensität statt auf
        Mäßigung ausgerichtet war, auch nach der ersten Warnung.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet zwei aufeinanderfolgende Krebserkrankungen?</strong>
        Für eine sexuelle Acht mit Siebenerflügel, deren gesamtes Selbstverständnis auf
        ungebremster Intensität und Tempo beruht, liegt eine Deutung nahe: Der Körper, der
        jahrzehntelang ohne Mäßigung beansprucht wurde, meldete sich gleich zweimal – und
        Wayne begegnete beiden Malen mit derselben direkten Konfrontation, nie mit Rückzug
        oder Mäßigung. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht zwangsläufig zu Krebserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Waynes Erkrankungen sind zudem eng mit einem klassischen Risikofaktor verbunden
        (jahrzehntelanges starkes Rauchen), nicht rein psychosomatisch zu erklären. Was sich an
        seinem Fall zeigen lässt, ist ein Muster im öffentlichen Umgang mit eigener Krankheit,
        das bei einer ausgeprägten sexuellen Acht mit Siebenerflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Wayne kannte sein eigenes Muster nicht – die sexuelle Acht mit Siebenerflügel begegnet
        Bedrohung mit direkter Konfrontation und ungebremstem Tempo, und genau das ließ ihn
        trotz der ersten Krebsdiagnose seinen intensiven Lebensstil im Kern unverändert
        fortsetzen, statt grundlegend gegenzusteuern. Wer das eigene Muster, jede Bedrohung
        körperlich niederzuringen statt sie zum Anlass für Mäßigung zu nehmen, nicht kennt,
        riskiert, dass derselbe Gegner ein zweites Mal zurückkehrt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Waynes</strong> sexuelle Acht mit
        Siebenerflügel noch einmal ablesen: eine öffentlich ausgetragene erste Krebsschlacht
        1964, fünfzehn weitere Lebensjahre in unverändertem Tempo, und eine zweite,
        tödliche Diagnose 1979, die er mit derselben direkten Haltung annahm wie die erste.
        Das Krokodil, das „The Big C" wie jeden anderen Gegner beim Namen nannte – und das am
        Ende zweimal antreten musste, um denselben Kampf zu führen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-john-wayne", label:"Porträt: John Wayne (SX8w7) – Lebenswerk"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – Gegenmodell: Verbergen statt Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

export function karlLagerfeldKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-karl-lagerfeld-portrait.jpg" alt="Karl Lagerfeld" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Karl Lagerfeld</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1933–2019</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Karl Lagerfeld</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-karl-lagerfeld">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort ausgespart bleibt:
        eine Krebserkrankung, die er nach übereinstimmenden Berichten jahrelang selbst vor
        engsten Vertrauten geheim hielt, bis er im Februar 2019 im Alter von 85 Jahren starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Lagerfeld</strong> ist der <strong>sozialen Drei mit Viererflügel</strong>
        zugeordnet. Die soziale Drei wird als <em>Verstärkungstyp</em> bezeichnet – sie ist nicht
        einfach erfolgreich, sie <em>ist</em> der Erfolg, den sie verkörpert, und das Bild, das
        sie von sich zeigt, muss lückenlos intakt bleiben. Der Viererflügel bringt ein feines
        Gespür für Ästhetik und Inszenierung hinzu, aber auch eine tiefe Scham vor allem, was
        dieses makellose Bild beschädigen könnte – Krankheit und Alter gehören für diese
        Kombination zu den am schwersten zuzulassenden Themen überhaupt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Das Bild vor der Wahrheit:</strong>
        Lagerfelds öffentlicher Blick galt zeitlebens der Frage, welches Bild von ihm nach
        außen sichtbar wurde – diese Priorität änderte sich auch angesichts einer
        fortschreitenden Erkrankung nicht.</p>
        <p class="vb-intro"><strong>b) Schwäche als das eine nicht verhandelbare Tabu:</strong>
        Wo andere Krankheitsporträts dieses Kompasses von Betroffenen erzählen, die ihre
        Diagnose irgendwann bewusst offenlegten, wählte Lagerfeld den entgegengesetzten Weg:
        Gerüchte über seinen Gesundheitszustand wurden aus seinem Umfeld aktiv dementiert.</p>
        <p class="vb-intro"><strong>c) Kontrolle bis zur letzten sichtbaren Geste:</strong>
        Als er im Januar 2019 erstmals bei einer Chanel-Show fehlte, schickte er eine
        Videobotschaft an Weggefährten, um Sorgen zu zerstreuen – selbst der Rückzug wurde
        noch einmal inszeniert, nicht einfach hingenommen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine widersprüchliche Diagnose:</strong>
        Zum Zeitpunkt seines Todes kursierte in den Medien die Angabe
        Bauchspeicheldrüsenkrebs, offiziell von Chanel oder der Familie jedoch nie bestätigt.
        Ende 2019 erklärte sein langjähriger persönlicher Assistent Sébastien Jondeau, Lagerfeld
        habe tatsächlich an Prostatakrebs gelitten, diagnostiziert bereits 2015 – die genaue
        Krebsart bleibt bis heute nicht zweifelsfrei geklärt.</p>
        <p class="vb-intro"><strong>b) Fast vier Jahre vollständige Geheimhaltung:</strong>
        Nach Jondeaus Darstellung wussten selbst engste Familienangehörige nicht von der 2015
        gestellten Diagnose – eine Geheimhaltung, die weit über das hinausgeht, was in anderen
        Krankheitsporträts dieses Kompasses dokumentiert ist.</p>
        <p class="vb-intro"><strong>c) 35 Jahre ohne einen einzigen Fehltermin:</strong>
        Seit seinem Amtsantritt bei Chanel 1983 hatte Lagerfeld keine einzige Schlussverbeugung
        einer Show verpasst – bis zum Januar 2019, wenige Wochen vor seinem Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Das erste sichtbare Zeichen von Schwäche:</strong>
        Bei der Chanel-Haute-Couture-Show am 22. Januar 2019 fehlte Lagerfeld erstmals seit 35
        Jahren beim Schlussapplaus; offiziell wurde "Erschöpfung" als Grund genannt, Virginie
        Viard vertrat ihn.</p>
        <p class="vb-intro"><strong>b) Der radikale Gewichtsverlust als Kontrollakt, nicht als Gesundheitsprojekt:</strong>
        Ab 2000/2001 verlor Lagerfeld innerhalb von rund 13 Monaten etwa 42 Kilogramm mit
        einer eigens vermarkteten Diät – nicht aus gesundheitlicher Sorge, sondern weil er in
        die schmal geschnittenen Anzüge eines jüngeren Designers passen wollte. Ein derart
        schneller Gewichtsverlust gilt medizinisch grundsätzlich als riskant.</p>
        <p class="vb-intro"><strong>c) Rigide Selbstkontrolle bis in den Schlaf:</strong>
        Lagerfeld betonte wiederholt öffentlich, exakt sieben Stunden zu schlafen und ohne
        Wecker aufzuwachen: "Ich schlafe sieben Stunden. Ich wache nicht vorher auf – das Haus
        kann zusammenbrechen, aber ich schlafe meine sieben Stunden." Selbst der Schlaf wurde
        zum disziplinierten, kontrollierten Ritual erklärt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der die Modewelt unvorbereitet traf:</strong>
        Weil Gesundheitssorgen aus seinem Umfeld noch wenige Wochen zuvor zurückgewiesen
        worden waren, kam die Nachricht von Lagerfelds Tod am 19. Februar 2019 für die
        Öffentlichkeit überraschend, obwohl sein Körper offenbar längst gezeichnet war.</p>
        <p class="vb-intro"><strong>b) Bis heute keine offizielle Bestätigung der Todesursache:</strong>
        Weder Chanel noch die Familie haben je eine offizielle Diagnose bestätigt – ein
        letzter, konsequenter Akt der Bilderhaltung, der über den Tod hinausreicht.</p>
        <p class="vb-intro"><strong>c) Ein Arbeitspensum ohne erkennbaren Rückzug:</strong>
        Bis zuletzt betreute Lagerfeld parallel bis zu acht Kollektionen jährlich für Chanel
        sowie mehrere für Fendi – kein dokumentierter Rückzug vor dem Januar 2019.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die öffentliche Rolle als Schutzschild:</strong>
        Solange die Rolle des makellos funktionierenden Modezaren aufrechterhalten werden
        konnte, schien auch die Energie dafür vorhanden – das Bild trug den Körper, nicht
        umgekehrt.</p>
        <p class="vb-intro"><strong>b) Erschöpfung als einzig zugelassene Erklärung:</strong>
        Selbst als der Rückzug unübersehbar wurde, blieb die offizielle Sprachregelung im
        Rahmen des Kontrollierbaren – "Erschöpfung" statt Krankheit, ein Begriff, der
        Schwäche zeitlich begrenzt, nicht bedrohlich erscheinen lässt.</p>
        <p class="vb-intro"><strong>c) Kein Tempowechsel bis zur letzten Show:</strong>
        Die Energie der SO3w4 richtete sich bis zuletzt auf denselben Antrieb, der Lagerfelds
        gesamte Karriere prägte: keine Kollektion, keinen Auftritt, kein Bild zuzulassen, das
        nicht der eigenen Inszenierung entsprach.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Diagnose 2015, geheim gehalten bis zum Tod:</strong>
        Laut Aussage seines langjährigen persönlichen Assistenten Sébastien Jondeau erhielt
        Lagerfeld bereits 2015 eine Krebsdiagnose – vier Jahre, die er offenbar nutzte, um nach
        außen den Anschein völliger Unversehrtheit aufrechtzuerhalten.</p>
        <p class="vb-intro"><strong>b) Aktives Dementi statt Offenlegung:</strong>
        Anders als Ronald Reagan (SO9w8), der seine Diagnose in einem direkten Brief an die
        Öffentlichkeit richtete, oder David Bowie (SO1w2), der sie in Kunst verschlüsselte,
        wählte Lagerfeld eine dritte Variante: das schlichte Zurückweisen jeder Andeutung von
        Krankheit, so lange wie irgend möglich.</p>
        <p class="vb-intro"><strong>c) Ein einziges sichtbares Zeichen, vier Wochen vor dem Tod:</strong>
        Erst das Fehlen bei der Chanel-Show im Januar 2019 – nach 35 Jahren lückenloser
        Präsenz – ließ öffentlich erahnen, was intern längst bekannt gewesen sein muss.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein Organ, das im Verborgenen arbeitet?</strong>
        Sowohl die Bauchspeicheldrüse als auch die Prostata – die beiden konkurrierenden
        Diagnosen – zählen zu den Organen, die lange Zeit ohne äußerlich sichtbare Symptome
        erkranken können, oft erst in fortgeschrittenem Stadium bemerkt werden. Für eine
        soziale Drei mit Viererflügel, deren gesamtes Lebenswerk auf der lückenlosen
        Aufrechterhaltung eines makellosen äußeren Bildes beruhte, liegt eine Deutung nahe:
        ausgerechnet ein Organ zu erkranken, das selbst im Verborgenen liegt und keine
        sichtbaren Warnzeichen sendet, passt zu einem Leben, in dem alles Innere – Zweifel,
        Schwäche, Alter, Angst – strikt hinter einer makellosen äußeren Fassade verborgen
        blieb. Der Körper erkrankte an einer Stelle, die so unsichtbar war wie die Wahrheit,
        die er ein Leben lang verbarg. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Krebserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Lagerfelds Fall zeigen lässt, ist ein Muster, das bei dem
        Bedürfnis, jede Schwäche restlos vor der Öffentlichkeit zu verbergen, in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Lagerfeld kannte sein eigenes Muster nicht – die soziale Drei hält das öffentliche Bild um jeden Preis aufrecht, und genau das ließ ihn eine Krebsdiagnose fast vier Jahre lang selbst vor engsten Vertrauten geheim halten, statt sein Tempo auch nur einmal zu drosseln. Wer das eigene Bedürfnis nach makelloser öffentlicher Erscheinung nicht als Muster erkennt, verbirgt selbst die eigene Sterblichkeit dahinter.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Lagerfelds</strong> soziale Drei mit Viererflügel blieb bis zuletzt auch in der
        eigenen Erkrankung spürbar: eine Diagnose, die vermutlich fast vier Jahre lang
        selbst vor der eigenen Familie verborgen blieb, ein öffentliches Bild, das bis auf
        eine einzige Ausnahme vier Wochen vor dem Tod makellos intakt gehalten wurde, und eine
        Todesursache, die bis heute nie offiziell bestätigt wurde. Der Gepard, der sein Tempo
        bis zur letzten sichtbaren Sekunde hielt – und sich erst dann zurückzog, als kein
        weiterer Sprint mehr möglich war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-karl-lagerfeld", label:"Porträt: Karl Lagerfeld (SO3w4) – Lebenswerk"},
        {route:"beruehmte-teresa-von-avila", label:"Porträt: Teresa von Ávila (SO3w4) – ebenfalls Weiterarbeit trotz schwerer Krankheit"},
        {route:"krankheitsportraets-sean-connery", label:"Krankheitsporträt: Sean Connery (SO3w4) – gleicher Subtyp"},
        {route:"krankheitsportraets-william-james", label:"Krankheitsporträt: William James (SO3w4) – gleicher Subtyp"},
        {route:"krankheitsportraets-david-bowie", label:"Krankheitsporträt: David Bowie (SO1w2) – ebenfalls Geheimhaltung, aber künstlerisch verschlüsselt statt dementiert"},
        {route:"krankheitsportraets-ronald-reagan", label:"Krankheitsporträt: Ronald Reagan (SO9w8) – Gegenmodell: direkte Offenlegung statt Dementi"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function leonardBernsteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonard-bernstein-portrait.jpg" alt="Leonard Bernstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonard Bernstein</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel · 1918–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonard Bernstein</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-leonard-bernstein">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Dirigent, Komponist
        und Pädagoge und seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das
        dort nur angedeutet wird: ein jahrzehntelanger, nahezu grenzenloser Raubbau am eigenen
        Körper, der 1990 in einer fortgeschrittenen Lungenerkrankung und einem abrupten Tod
        gipfelte – wenige Tage, nachdem er sich öffentlich vom Dirigieren zurückgezogen hatte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bernstein</strong> ist dem <strong>sexuellen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Suggestibilität</em>: die vollständige
        Verschmelzung mit einer Idee, einem Moment oder einer Begeisterung, mit einer Intensität,
        die keine halben Bindungen kennt. Der Sechserflügel bringt eine bindungsorientierte,
        fast missionarische Fürsorge hinzu. Genau diese Maßlosigkeit – die Leidenschaft der
        Sieben – wurde ihm am Ende körperlich zum Verhängnis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kettenrauchen von Jugend an:</strong>
        Bernstein rauchte über Jahrzehnte hinweg bis zu vier Packungen Zigaretten täglich –
        eine Gewohnheit, die er trotz seines öffentlichen Status als Gesundheitswarnung nie
        ernsthaft infrage stellte.</p>
        <p class="vb-intro"><strong>b) Exzessiver Alkoholkonsum als ständiger Begleiter:</strong>
        Zeitgenossen berichteten übereinstimmend von einem hohen, über Jahrzehnte
        durchgehaltenen Alkoholkonsum, der neben dem Rauchen zum festen Bestandteil seines
        Alltags gehörte.</p>
        <p class="vb-intro"><strong>c) Zunehmende Atemprobleme ab den 1970er-Jahren:</strong>
        Schon Jahre vor der eigentlichen Diagnose bemerkten Weggefährten eine spürbar
        nachlassende körperliche Belastbarkeit bei Konzerten und Proben – ein Warnzeichen, das
        im Trubel seines Arbeitspensums unterging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unvermindertes Arbeitspensum trotz Diagnose:</strong>
        Als bei ihm ein fortschreitendes Lungenemphysem diagnostiziert wurde, änderte Bernstein
        seinen Lebensstil kaum – er dirigierte weiterhin international, komponierte und
        unterrichtete am Tanglewood Music Center.</p>
        <p class="vb-intro"><strong>b) Fortgesetztes Rauchen trotz ärztlicher Warnungen:</strong>
        Auch nach der Diagnose gab Bernstein das Rauchen nicht auf – ein Verhalten, das sein
        Umfeld wiederholt, aber vergeblich zu ändern versuchte.</p>
        <p class="vb-intro"><strong>c) Zunehmende Erschöpfung bei öffentlichen Auftritten:</strong>
        In den letzten Lebensjahren fiel Kollegen und Publikum eine wachsende körperliche
        Erschöpfung auf, die Bernstein konsequent überspielte, statt sie ernst zu nehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Hustenanfall beim letzten Konzert:</strong>
        Am 19. August 1990 dirigierte Bernstein in Tanglewood das Boston Symphony Orchestra in
        Beethovens 7. Sinfonie – gegen den ausdrücklichen Rat seiner Ärzte. Mitten im letzten
        Satz musste er wegen eines schweren Hustenanfalls abbrechen; sein Assistent Carl
        St.Clair übernahm, um das Konzert zu Ende zu bringen.</p>
        <p class="vb-intro"><strong>b) Rücktritt vom Dirigieren am 9. Oktober 1990:</strong>
        Sieben Wochen nach diesem Zusammenbruch gab Bernstein öffentlich seinen endgültigen
        Rückzug vom Dirigieren bekannt.</p>
        <p class="vb-intro"><strong>c) Tod am 14. Oktober 1990:</strong>
        Nur fünf Tage nach der Rücktrittsankündigung starb Leonard Bernstein in seiner New
        Yorker Wohnung an Herzversagen infolge seiner fortgeschrittenen Lungenerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Abschied, der kaum Zeit zum Abschied ließ:</strong>
        Die knappe Zeitspanne von nur fünf Tagen zwischen Rücktritt und Tod bedeutete, dass die
        Öffentlichkeit den Ernst seines Zustands erst rückblickend wirklich begriff.</p>
        <p class="vb-intro"><strong>b) Nachrufe voller Bewunderung, wenig Thematisierung der Krankheit:</strong>
        Die Würdigungen nach seinem Tod konzentrierten sich fast ausschließlich auf sein
        musikalisches Erbe – die schweren letzten Monate blieben ein Randthema.</p>
        <p class="vb-intro"><strong>c) Ein letztes Konzert, das zum Symbol wurde:</strong>
        Dass er trotz ärztlichen Rats auftrat und mitten im Konzert aufgeben musste, wurde in
        der Rückschau immer wieder als Sinnbild seiner lebenslangen Kompromisslosigkeit
        erzählt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kein Innehalten bis zuletzt:</strong>
        Seine gesamte Karriere war von der Unfähigkeit geprägt, ein Projekt, eine Rolle oder
        eine Bühne aufzugeben – genau dieses Muster setzte sich bis in seine letzten Wochen
        fort, als es längst um die eigene Gesundheit ging.</p>
        <p class="vb-intro"><strong>b) Ärztlicher Rat gegen den eigenen Antrieb:</strong>
        Die dringende Warnung seiner Ärzte vor dem Konzert am 19. August 1990 ignorierte er –
        absagen hätte für ihn einer Kapitulation vor der eigenen Sterblichkeit gleichgekommen,
        die er nicht bereit war zu akzeptieren.</p>
        <p class="vb-intro"><strong>c) Kein geordneter Rückzug, sondern ein abruptes Ende:</strong>
        Statt eines ruhigen, geplanten Ausklangs endete sein Leben in einem plötzlichen
        Zusammenbruch mitten in der Aktivität – der Schimpanse, der bis zur letzten Sekunde am
        Pult stand.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Drei Jahrzehnte Raubbau am eigenen Körper:</strong>
        Von der Jugend bis zum Tod – vier Packungen Zigaretten täglich, exzessiver
        Alkoholkonsum, kaum Schlaf und ein Arbeitspensum, das mehrere parallele Karrieren
        umfasste. Die Leidenschaft der Sieben, die <strong>Völlerei</strong>, kannte bei
        Bernstein keine Bremse.</p>
        <p class="vb-intro"><strong>b) Ein Herz, das buchstäblich keine Pause kannte:</strong>
        Sein Tod durch Herzversagen, ausgelöst durch die fortgeschrittene Lungenerkrankung, war
        die körperliche Konsequenz eines Lebens, das die eigenen Belastungsgrenzen nie ernst
        genommen hatte.</p>
        <p class="vb-intro"><strong>c) Wenn die Sieben unter chronischem Stress zur Eins wird:</strong>
        Als die Ärzte ihm eindringlich vom Konzert am 19. August 1990 abrieten, verweigerte er
        nicht aus spielerischer Siebener-Leichtigkeit, sondern aus einer fast starren,
        pflichtbewussten Weigerung, das Programm zu ändern. Wer über Jahrzehnte in
        chronischem Raubbau am eigenen Körper lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Sieben ist das die Eins. Genau
        dieses rigide „Ich ziehe es durch, komme was wolle" in seinen letzten Lebenswochen
        wirkt weniger nach der freien Wahlfreiheit der gesunden Sieben als nach der starren
        Pflichterfüllung ihres Stresspunkts – bei unverändertem Kerntyp SX7w6.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Lunge?</strong>
        Für eine sexuelle Sieben, deren gesamte Lebendigkeit sich im Atem und in der
        körperlichen Ekstase am Dirigentenpult ausdrückte – er sprang, warf sich buchstäblich
        in die Musik hinein –, liegt eine Deutung nahe: Ausgerechnet jenes Organ, das ihm die
        körperliche Intensität ermöglichte, mit der er ganze Orchester mitriss, wurde zum
        Schauplatz des Verfalls. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Bernsteins Fall zeigen lässt, ist ein
        Muster im Umfeld einer Krankheit, das bei einer ausgeprägten sexuellen Sieben immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bernstein lebte zu einer Zeit, als das Enneagramm als modernes Persönlichkeitsmodell in
        Kalifornien gerade erst entstand – nichts deutet darauf hin, dass er sein eigenes
        Muster je bewusst kannte. Die Maßlosigkeit der Sieben bestimmte sein Leben völlig unkorrigiert:
        Rauchen, Trinken, ein Arbeitspensum ohne Grenzen wurden nicht als wiederkehrendes
        Muster erkannt, sondern einfach als Hindernisse behandelt, die es zu überspielen galt.
        Wer die eigene Rastlosigkeit nicht als Muster kennt, kann rechtzeitig auch nicht
        gegensteuern, wenn der eigene Körper längst deutliche Warnsignale sendet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Bernsteins</strong> sexuelle Sieben mit
        Sechserflügel noch einmal ablesen: eine Maßlosigkeit, die keine Grenze kannte, bis der
        eigene Körper die Grenze setzte, und ein letztes Konzert, bei dem er buchstäblich bis
        zum letzten Atemzug am Pult stand. Der Schimpanse, der eine ganze Karriere lang jeden
        Saal mit seiner Intensität mitriss – und dessen eigener Körper am Ende der Einzige war,
        der sich diesem Sog widersetzte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-leonard-bernstein", label:"Porträt: Leonard Bernstein (SX7w6) – Lebenswerk"},
        {route:"krankheitsportraets-morgan-freeman", label:"Krankheitsporträt: Morgan Freeman (SX7w6)"},
        {route:"krankheitsportraets-frans-de-waal", label:"Krankheitsporträt: Frans de Waal (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

export function mariahCareyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mariah-carey-portrait.jpg" alt="Mariah Carey" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mariah Carey</p>
        <p class="krim-portrait-typ">SE7w8 · Selbsterhaltende Typ 7 mit Achterflügel · geb. 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Mariah Carey</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-mariah-carey">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: eine 2001 diagnostizierte bipolare Störung Typ II, die Carey über
        17 Jahre hinweg geheim hielt, bevor sie 2018 öffentlich darüber sprach.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Carey</strong> ist dem <strong>selbsterhaltenden Typ 7 mit
        Achterflügel</strong> zugeordnet. Die SE7 sichert sich praktische Vorräte an
        Möglichkeiten für den Ernstfall; der Achterflügel bringt Durchsetzungskraft und
        die Fähigkeit hinzu, die eigene Verwundbarkeit lange zu kontrollieren. Genau diese
        Kombination – jahrelange, disziplinierte Kontrolle über das eigene öffentliche
        Bild – bestimmte, wie lange Carey ihre Diagnose privat hielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zusammenbruch im Juli 2001:</strong>
        Carey erschien am 25. Juli 2001 in manischem Zustand im Haus ihrer Mutter und wurde
        daraufhin in eine Klinik in Westchester County, New York, eingewiesen.</p>
        <p class="vb-intro"><strong>b) Behandlung in mehreren Kliniken:</strong>
        Es folgte ein zwölftägiger Aufenthalt im Silver Hill Hospital in Connecticut,
        Anfang September 2001 eine weitere Einweisung am UCLA Medical Center.</p>
        <p class="vb-intro"><strong>c) Diagnose bipolare Störung Typ II:</strong>
        Im Rahmen dieser Behandlungen wurde bei Carey eine bipolare Störung Typ II
        diagnostiziert – eine Diagnose, die sie zunächst nicht akzeptieren wollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) 17 Jahre öffentliches Schweigen:</strong>
        Carey behielt die Diagnose fast zwei Jahrzehnte für sich, aus Angst, "jemand könnte
        es aufdecken", wie sie später selbst beschrieb.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte künstlerische Produktivität:</strong>
        Trotz der unbehandelten oder nur teilweise behandelten Erkrankung veröffentlichte
        Carey in den folgenden Jahren weiterhin Alben und tourte international.</p>
        <p class="vb-intro"><strong>c) Isolation als beschriebene Begleiterscheinung:</strong>
        Carey beschrieb die Zeit vor ihrer Offenlegung selbst als geprägt von "Verleugnung
        und Isolation".</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Offenlegung im April 2018:</strong>
        In einem Interview mit dem People-Magazin sprach Carey erstmals öffentlich über
        ihre Diagnose und den langen Weg dorthin.</p>
        <p class="vb-intro"><strong>b) Betonung von Behandlung statt Dramatisierung:</strong>
        Carey beschrieb, sie habe sich "positive Menschen" um sich versammelt und sei zur
        Musik zurückgekehrt – ein pragmatischer, lösungsorientierter Ton statt einer
        dramatischen Krankengeschichte.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte Karriere nach der Offenlegung:</strong>
        Auch nach 2018 blieb Carey musikalisch und öffentlich aktiv, ohne sich aus dem
        Rampenlicht zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Breite mediale Resonanz auf die Offenlegung:</strong>
        Careys Interview wurde international aufgegriffen und trug zur öffentlichen
        Enttabuisierung bipolarer Störungen bei.</p>
        <p class="vb-intro"><strong>b) Ein zweigeteiltes öffentliches Bild:</strong>
        Für die Öffentlichkeit blieb Carey über fast zwei Jahrzehnte primär als
        Popikone sichtbar – die psychische Erkrankung dahinter war unsichtbar, bis sie es
        selbst entschied.</p>
        <p class="vb-intro"><strong>c) Kontrolle über den Zeitpunkt der eigenen Geschichte:</strong>
        Carey bestimmte selbst, wann und wie ihre Diagnose öffentlich wurde – kein
        erzwungenes Bekanntwerden durch Dritte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Vorräte an Kontrolle statt sichtbarer Verwundbarkeit:</strong>
        Dieselbe SE7-Logik, sich für den Ernstfall abzusichern, zeigte sich bei Carey als
        jahrelange, sorgfältige Kontrolle darüber, was über die eigene Gesundheit nach
        außen drang.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die lange Verweigerung von Schwäche:</strong>
        Die Durchsetzungskraft des Achterflügels erklärt, warum Carey die Diagnose fast
        zwei Jahrzehnte lang nicht öffentlich zuließ – Kontrolle über das eigene Bild wog
        schwerer als frühe Offenheit.</p>
        <p class="vb-intro"><strong>c) Ein selbstbestimmter Moment der Offenheit:</strong>
        Als Carey sich schließlich öffnete, geschah dies zu einem selbst gewählten
        Zeitpunkt und in einem selbst gewählten Rahmen – Kontrolle blieb auch im Akt der
        Offenlegung erhalten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme, die auch das eigene Innenleben lange verbarg:</strong>
        Careys gesamte öffentliche Karriere beruhte auf makelloser Kontrolle über Stimme
        und Bild – ausgerechnet das eigene, unkontrollierbare Innenleben musste über
        Jahre verborgen bleiben, damit dieses Bild intakt blieb.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Francis
        Bacon</a> (ebenfalls SE7w8) verarbeitete sein exzessives, selbstzerstörerisches
        Leben lange, ohne öffentlich über die dahinterliegende Verzweiflung zu sprechen;
        Carey hielt ihre eigene psychische Erkrankung mit derselben Grundhaltung geheim –
        Kontrolle über das öffentliche Bild, bis die eigenen Bedingungen für Offenheit
        erfüllt waren. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Krankheitsporträt zu Francis Bacon</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        bipolaren Störungen führt – <strong>jeder Mensch kann jede psychische Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Careys Fall zeigen lässt,
        ist ein Muster im Umgang mit einer belastenden Diagnose, das bei einer
        ausgeprägten selbsterhaltenden Sieben mit Achterflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Carey kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Sieben mit Achterflügel kontrolliert reflexhaft, was von der
        eigenen Verwundbarkeit nach außen dringt, statt sie je früher offenzulegen, und
        lebt genau dieses Muster bis heute in modifizierter Form weiter aus. Wer die
        eigene Neigung, Kontrolle über das eigene Bild zu behalten, nicht als Muster
        erkennt, trägt eine schwere Diagnose entsprechend länger allein.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sieben mit Achterflügel erklärt bei <strong>Mariah
        Carey</strong> vieles am Umgang mit der eigenen Diagnose: eine Frau, deren
        gesamte öffentliche Existenz auf Kontrolle über das eigene Bild beruhte, hielt die
        eigene Verwundbarkeit fast zwei Jahrzehnte unter Kontrolle – der Gorilla, der erst
        dann zeigt, was ihn wirklich bewegt, wenn er selbst dazu bereit ist.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-mariah-carey", label:"Porträt: Mariah Carey (SE7w8)"},
        {route:"krankheitsportraets-francis-bacon", label:"Krankheitsporträt: Francis Bacon (SE7w8) – dasselbe lange Verbergen"},
        {route:"krankheitsportraets-elton-john", label:"Krankheitsporträt: Elton John (SE7w6) – gleicher Kerntyp, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

export function morganFreemanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-morgan-freeman-portrait.jpg" alt="Morgan Freeman" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Morgan Freeman</p>
        <p class="krim-portrait-typ">SX7w6 · Sexueller Typ 7 mit Sechserflügel · geb. 1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Morgan Freeman</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-morgan-freeman">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: Ein schwerer Autounfall 2008 hinterließ eine Fibromyalgie mit
        chronischen Nervenschmerzen im linken Arm – ein Zustand, mit dem Freeman seither
        öffentlich sichtbar lebt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Freeman</strong> ist dem <strong>sexuellen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SX7 sucht Intensität in unmittelbarer, persönlicher Bindung; der
        Sechserflügel bringt Loyalität und die Fähigkeit, mit Rückschlägen ruhig
        umzugehen. Genau diese Kombination – ungebremstes Weiterarbeiten, verbunden mit
        stiller Loyalität gegenüber dem eigenen Handwerk – bestimmte, wie Freeman auf die
        chronischen Schmerzen reagierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Autounfall 2008:</strong>
        Freemans Wagen überschlug sich auf einer Landstraße nahe seinem Wohnsitz im
        Mississippi-Delta; er und seine Beifahrerin wurden schwer verletzt.</p>
        <p class="vb-intro"><strong>b) Operation an der linken Hand:</strong>
        Die Verletzungen machten eine Operation an der linken Hand notwendig, verbunden
        mit bleibenden Nervenschäden.</p>
        <p class="vb-intro"><strong>c) Diagnose Fibromyalgie in der Folgezeit:</strong>
        In den Monaten nach dem Unfall wurde bei Freeman Fibromyalgie diagnostiziert –
        eine chronische Schmerzerkrankung, die sich vor allem im linken Arm zeigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Kompressionshandschuh als ständiger Begleiter:</strong>
        Seither trägt Freeman bei öffentlichen Auftritten regelmäßig einen
        Kompressionshandschuh an der linken Hand – medizinisch notwendig, nicht modisch.</p>
        <p class="vb-intro"><strong>b) Offene Beschreibung der Schmerzen:</strong>
        In einem viel zitierten Interview beschrieb Freeman den Schmerz als
        "unerträglich", der "den Arm hoch und runter" schieße.</p>
        <p class="vb-intro"><strong>c) Unveränderte Schauspielkarriere:</strong>
        Trotz der Diagnose drehte Freeman in den folgenden Jahren weiterhin zahlreiche
        Filme, ohne die eigene Arbeitslast erkennbar zu reduzieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Normalisierung statt Verheimlichung:</strong>
        Freeman sprach wiederholt offen über die Fibromyalgie, statt sie zu verbergen –
        ein für Prominente seiner Generation eher untypischer Umgang mit chronischem
        Schmerz.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte körperlich anspruchsvolle Rollen:</strong>
        Auch nach der Diagnose übernahm Freeman weiterhin Rollen, die körperliche
        Präsenz und lange Drehzeiten erforderten.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus der Öffentlichkeit:</strong>
        Freeman blieb medial sichtbar, gab weiterhin Interviews und nahm öffentliche
        Auszeichnungen entgegen, den sichtbaren Handschuh stets Teil des Bildes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Symbol, das zur Marke wurde:</strong>
        Der Handschuh wurde in Medienberichten wiederholt zum sichtbaren Erkennungszeichen
        – ein stilles, aber unübersehbares Zeugnis der eigenen Verletzlichkeit.</p>
        <p class="vb-intro"><strong>b) Aufmerksamkeit für eine oft unsichtbare Krankheit:</strong>
        Freemans Offenheit trug dazu bei, Fibromyalgie – eine Erkrankung, die von außen
        oft nicht erkennbar ist – einem breiten Publikum bekannter zu machen.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Zäsur in der Karriere:</strong>
        Freemans Filmografie zeigt auch nach 2008 keinen erkennbaren Bruch in Umfang oder
        Anspruch der übernommenen Rollen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Intensität, die sich nicht bremsen lässt:</strong>
        Dieselbe SX7-Energie, die nach unmittelbarer, ungefilterter Erfahrung sucht,
        bestimmte auch Freemans Reaktion auf den chronischen Schmerz – Weiterarbeiten
        statt Rückzug.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die stille Loyalität zum eigenen Handwerk:</strong>
        Die Loyalität des Sechserflügels zeigte sich darin, dass Freeman seinem Beruf und
        seinem Publikum treu blieb, statt sich aus gesundheitlichen Gründen zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Offenheit als eigene Form der Intensität:</strong>
        Statt den Schmerz zu verstecken, machte Freeman ihn zum Teil seiner öffentlichen
        Präsenz – auch das eine Form ungefilterter, direkter Erfahrung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Hand, die zum Werkzeug und zur Wunde wurde:</strong>
        Für einen Schauspieler, dessen Präsenz auch auf Gestik und Körpersprache beruht,
        traf die Verletzung ausgerechnet jenes Werkzeug, mit dem er seine Rollen körperlich
        auslebt.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard
        Bernstein</a> (ebenfalls SX7w6) rauchte trotz eines fortschreitenden
        Lungenemphysems bis kurz vor seinem Tod weiter und dirigierte fast bis zuletzt;
        Freeman reagierte auf seine eigene chronische Erkrankung mit derselben
        Grundhaltung – keine Reduzierung des eigenen Tempos, sondern Weiterarbeiten trotz
        spürbarer körperlicher Grenze. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Krankheitsporträt zu Leonard Bernstein</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu chronischen
        Schmerzerkrankungen führt – <strong>jeder Mensch kann jede Krankheit oder
        Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich an Freemans Fall
        zeigen lässt, ist ein Muster im Umgang mit chronischem Schmerz, das bei einer
        ausgeprägten sexuellen Sieben mit Sechserflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Freeman kennt sein eigenes Muster nicht als Enneagramm-Struktur – die sexuelle
        Sieben mit Sechserflügel sucht reflexhaft die volle, ungefilterte Erfahrung, statt
        chronischen Schmerz je zum Anlass für ein langsameres Tempo zu nehmen, und lebt
        genau dieses Muster seit über anderthalb Jahrzehnten unverändert aus. Wer die
        eigene Intensitätssuche nicht als Muster erkennt, kann auch angesichts
        chronischer Schmerzen nicht innehalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sieben mit Sechserflügel erklärt bei <strong>Morgan Freeman</strong>
        vieles am Umgang mit der eigenen Fibromyalgie: ein Mann, dessen gesamte Präsenz auf
        unmittelbarer Intensität beruht, macht aus dem sichtbaren Kompressionshandschuh
        kein Geheimnis – der Schimpanse, der weiter durchs Geäst klettert, auch mit einem
        schmerzenden Arm.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-morgan-freeman", label:"Porträt: Morgan Freeman (SX7w6)"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Krankheitsporträt: Leonard Bernstein (SX7w6) – dasselbe Muster ungebremsten Weiterarbeitens"},
        {route:"krankheitsportraets-frans-de-waal", label:"Krankheitsporträt: Frans de Waal (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

export function nikolaTeslaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nikola-tesla-portrait.jpg" alt="Nikola Tesla" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nikola Tesla</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · 1856–1943</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Nikola Tesla</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-nikola-tesla">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein bahnbrechendes technisches
        Lebenswerk und seine Vision einer kostenlosen Energieversorgung für die ganze
        Menschheit. Diese Seite vertieft ein Kapitel, das dort nur am Rande erwähnt wird: eine
        fortschreitende Zwangsstörung mit ausgeprägter Keimphobie, die ihn über Jahrzehnte
        zunehmend in völlige Isolation trieb, bis er verarmt und fast vergessen allein in
        einem New Yorker Hotelzimmer starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Tesla</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SO7 stellt die eigene Genusssucht zurück, um einer größeren Mission zu
        dienen – bei Tesla war das eine kostenlose Energieversorgung der gesamten Menschheit;
        der Sechserflügel übersetzt Wachsamkeit und Sorge in Kontrolle, Ordnung und Rituale.
        Genau diese Kombination bestimmte auch, wie sich seine fortschreitende Zwangsstörung
        entwickelte: nicht als plötzlicher Einbruch, sondern als immer strengeres, selbst
        auferlegtes System zur Kontrolle einer als überfordernd erlebten Außenwelt – und als
        Verschiebung Richtung des Stresspunkts der Sieben, der Eins: aus rastloser
        Erfindungslust wurde zunehmend starre Rigidität.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zwangshandlungen bereits in mittleren Lebensjahren dokumentiert:</strong>
        Zeitgenossen berichteten von Teslas Gewohnheit, seine Schritte beim Gehen zu zählen
        und das Volumen seiner Suppe zu berechnen, bevor er sie aß – Verhaltensweisen, die
        sich über Jahre zu einem festen Ritual verdichteten.</p>
        <p class="vb-intro"><strong>b) Zwang zur Teilbarkeit durch drei:</strong>
        Tesla arbeitete fast ausschließlich mit Zahlen, die durch drei teilbar waren;
        Abweichungen davon lösten bei ihm nachweislich massives Unbehagen aus – ein frühes
        Anzeichen einer sich verfestigenden Zwangsstruktur.</p>
        <p class="vb-intro"><strong>c) Zunehmende Angst vor Keimen:</strong>
        Bereits in seinen mittleren Jahren begann Tesla, Türklinken und Handschläge zu
        meiden und sich stundenlang die Hände zu waschen – eine Keimphobie, die sich mit den
        Jahrzehnten weiter verschärfte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Verlust des Wardenclyffe Tower als Wendepunkt:</strong>
        Als J.P. Morgan seine finanzielle Unterstützung zurückzog, weil Tesla plante,
        drahtlose Energie kostenlos zu verteilen, verlor er sein Lebenswerk – ein Einschnitt,
        nach dem sich sein Rückzug aus der Gesellschaft spürbar beschleunigte.</p>
        <p class="vb-intro"><strong>b) Umzüge von Hotel zu Hotel:</strong>
        In seinen letzten Lebensjahrzehnten lebte Tesla isoliert in einer Reihe von New
        Yorker Hotelzimmern, oft, weil er die Rechnungen nicht mehr bezahlen konnte und
        umziehen musste.</p>
        <p class="vb-intro"><strong>c) Astronomische Ausgaben für verletzte Tauben:</strong>
        Trotz zunehmender Armut gab Tesla erhebliche Summen aus, um verletzte oder kranke
        Tauben in seinem Zimmer gesund zu pflegen – eine der letzten verbliebenen Formen von
        Fürsorge, die er sich noch erlaubte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vollständiger Rückzug aus menschlicher Nähe:</strong>
        Tesla blieb zeitlebens unverheiratet und beschrieb intime Nähe ausdrücklich als
        Störung seiner Konzentration – in seinen letzten Jahren bestand sein soziales Leben
        praktisch ausschließlich aus der Fütterung von Tauben im Park.</p>
        <p class="vb-intro"><strong>b) Die weiße Taube als einzige verbliebene Bindung:</strong>
        Unter den vielen Tauben, die er pflegte, entwickelte Tesla eine besonders intensive
        Bindung zu einer einzelnen weißen Taube, die er als „die Liebe seines Lebens"
        bezeichnete – eine Formulierung, die er auch gegenüber Journalisten wörtlich
        wiederholte.</p>
        <p class="vb-intro"><strong>c) Tod im Alter von 86 Jahren, allein im Hotelzimmer:</strong>
        Tesla starb am 7. Januar 1943 in seinem Zimmer im New Yorker Hotel New Yorker – erst
        Tage später wurde sein Tod von einer Zimmermädchen entdeckt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Verarmt und fast vergessen gestorben:</strong>
        Der Mann, dessen Wechselstromsystem bis heute Milliarden Haushalte weltweit versorgt,
        starb hoch verschuldet und weitgehend aus der öffentlichen Wahrnehmung
        verschwunden.</p>
        <p class="vb-intro"><strong>b) Posthume Beschlagnahmung seiner Unterlagen:</strong>
        Unmittelbar nach seinem Tod beschlagnahmte das FBI seine wissenschaftlichen
        Aufzeichnungen aus Sorge, sie könnten militärisch relevante Technologien enthalten –
        ein letzter, unfreiwilliger öffentlicher Auftritt eines Mannes, der die Öffentlichkeit
        zeitlebens gemieden hatte.</p>
        <p class="vb-intro"><strong>c) Posthume Anerkennung erst Jahrzehnte später:</strong>
        Erst in den folgenden Jahrzehnten wurde Teslas Beitrag zur modernen Technik
        umfassend gewürdigt – zu spät, um ihm selbst noch die Anerkennung zu geben, die sein
        Werk verdient hätte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Mission bis zur völligen Isolation verteidigt:</strong>
        Dieselbe radikale Konsequenz, mit der Tesla an seiner Vision einer kostenlosen
        Energieversorgung für die ganze Menschheit festhielt, bestimmte auch, wie vollständig
        er sich am Ende von jeder menschlichen Nähe abschnitt – die SO7 hält an der eigenen
        Mission fest, auch wenn der Preis dafür die eigene Verbindung zur Welt ist.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und das System als letzter Schutzraum:</strong>
        Seine Zwangshandlungen – das Zählen, die Teilbarkeit durch drei, die Keimvermeidung
        – waren keine zufälligen Marotten, sondern ein immer engmaschigeres System zur
        Kontrolle einer Welt, die für ihn zunehmend bedrohlich wurde. Wo der gesunde
        Sechserflügel Wachsamkeit in verlässliche Loyalität zur eigenen Sache übersetzt, wurde
        bei Tesla das Kontrollsystem selbst zum einzigen verlässlichen Halt.</p>
        <p class="vb-intro"><strong>c) Eine einzelne Bindung statt eines Gemeinschaftsprojekts:</strong>
        Anders als es für die soziale Sieben typisch wäre – Sinn und Bindung über ein
        gemeinsames Projekt oder eine Gruppe zu finden –, ersetzte Tesla das gesamte
        menschliche Beziehungsnetz nicht durch eine neue Gemeinschaft, sondern durch eine
        einzige, außergewöhnlich intensive Bindung – die weiße Taube trug das gesamte
        Gewicht dessen, was für andere Menschen ein ganzes soziales Leben ausmacht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der sich vor dem Verlust seiner Mission schützte:</strong>
        Teslas gesamtes Leben war von der Überzeugung geprägt, dass seine Vision einer
        Energieversorgung für die ganze Menschheit schutzbedürftig war – seine Zwangsstörung
        lässt sich als das immer strengere System lesen, mit dem er diesen Schutz
        aufrechtzuerhalten versuchte, bis das System selbst zur Isolation wurde.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Umgebung als Ersatz für Kontrolle über Nähe:</strong>
        Ein Mann, der intime menschliche Nähe explizit als Bedrohung seiner Konzentration
        beschrieb, entwickelte stattdessen eine immer detailliertere Kontrolle über seine
        physische Umgebung – Zahlen, Keime, Rituale –, die genau jene Sicherheit versprach,
        die menschliche Beziehungen ihm nicht bieten konnten.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Kontakt zur Außenwelt?</strong>
        Für eine soziale Sieben mit Sechserflügel, deren gesamte Kraft auf einer Mission für
        die Menschheit als Ganzes beruhte, liegt eine Deutung nahe: Ausgerechnet der
        unmittelbare körperliche Kontakt zur Außenwelt – Türklinken, Handschläge, andere
        Menschen – wurde zum Schauplatz der Angst, während die innere, selbst konstruierte
        Gedankenwelt der einzige Ort blieb, an dem er sich vollständig sicher fühlte. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig zu
        Zwangsstörungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Teslas Fall zeigen lässt, ist ein Muster
        im Umgang mit fortschreitender psychischer Isolation, das bei einer ausgeprägten
        sozialen Sieben mit Sechserflügel unter chronischem Stress immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Tesla kannte sein eigenes Muster nicht – die soziale Sieben mit Sechserflügel
        verteidigt reflexhaft die eigene Mission gegen jede als bedrohlich erlebte Störung,
        statt die eigene Isolation je als Muster zu erkennen, und genau dieses Muster lebte er
        bis zu seinem einsamen Tod unverändert aus. Wer die eigene Notwendigkeit, die eigene
        Mission um jeden Preis zu schützen, nicht als Muster erkennt, kann sie auch angesichts
        der eigenen Vereinsamung nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Sechserflügel erklärt bei <strong>Tesla</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf einer Mission
        für die ganze Menschheit beruhte, verteidigte diese Mission so konsequent, dass am
        Ende kein Mensch mehr nah genug herankam – der Biber, der der ganzen Menschheit
        unbegrenzte Energie schenken wollte, und dessen eigenes Herz zuletzt nur noch an
        einem einzigen Vogel hing.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-nikola-tesla", label:"Porträt: Nikola Tesla (SO7w6) – Erfinder"},
        {route:"krankheitsportraets-moliere", label:"Krankheitsporträt: Molière (SO7w6) – gleicher Subtyp"},
        {route:"krankheitsportraets-george-gershwin", label:"Krankheitsporträt: George Gershwin (SO7w6) – gleicher Subtyp, entgegengesetzter Verlauf"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function peterFalkKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-peter-falk-portrait.jpg" alt="Peter Falk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Peter Falk</p>
        <p class="krim-portrait-typ">SO9w1 · Sozialer Typ 9 mit Einserflügel · 1927–2011</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Peter Falk</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-peter-falk">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Columbo-Darsteller und
        seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht zur
        Sprache kommt: eine Alzheimer-Diagnose 2007, die seine letzten Lebensjahre prägte, und
        ein öffentlich ausgetragener Sorgerechtsstreit um seine Pflege, der dem Grundmuster
        seines gesamten Lebens diametral entgegenstand.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Falk</strong> ist dem <strong>sozialen Typ 9 mit Einserflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Teilnahme</em>: die Fähigkeit, sich in
        jede Gruppe einzufügen und dort Frieden zu finden, ohne die eigene Identität zu
        verlieren. Der Einserflügel bringt einen stillen, unerschütterlichen inneren Kompass
        hinzu. Genau dieses Bedürfnis nach Harmonie und Zugehörigkeit geriet in seinen letzten
        Lebensjahren in einen bitteren Konflikt, den er selbst nicht mehr moderieren konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Anzeichen kognitiven Abbaus ab Mitte der 2000er-Jahre:</strong>
        Nach Angaben aus seinem Umfeld zeigte Falk bereits einige Jahre vor der offiziellen
        Diagnose erste Anzeichen von Gedächtnisproblemen, die zunächst als altersbedingte
        Vergesslichkeit gedeutet wurden.</p>
        <p class="vb-intro"><strong>b) Diagnose im Jahr 2007:</strong>
        2007 wurde bei Falk offiziell eine fortschreitende Demenz diagnostiziert, die
        später in gerichtlichen Dokumenten als Alzheimer-Erkrankung bestätigt wurde.</p>
        <p class="vb-intro"><strong>c) Rückzug aus der Öffentlichkeit:</strong>
        Mit fortschreitender Erkrankung zog sich Falk zunehmend aus öffentlichen Auftritten
        zurück – ein stiller Abschied ohne große Ankündigung, passend zu einem Mann, der nie
        das Rampenlicht gesucht hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein gerichtlich bestellter Vormund:</strong>
        2008 beantragte seine Ehefrau Shera Falk gerichtlich die Vormundschaft über seine
        Angelegenheiten – ein Schritt, der angesichts der fortschreitenden Erkrankung als
        notwendig erachtet wurde.</p>
        <p class="vb-intro"><strong>b) Ein öffentlicher Streit um Besuchsrechte:</strong>
        In der Folge entbrannte ein gerichtlicher Streit zwischen Shera Falk und Catherine
        Falk, seiner Tochter aus erster Ehe, um deren Zugang zu ihrem erkrankten Vater – ein
        Konflikt, der in der Presse ausführlich verfolgt wurde.</p>
        <p class="vb-intro"><strong>c) Ein Leben, das zunehmend fremdbestimmt wurde:</strong>
        Wo Falk zeitlebens selbst entschieden hatte, mit wem er Zeit verbrachte, lag diese
        Entscheidung in seinen letzten Jahren zunehmend bei anderen – eine Umkehrung, die dem
        Kern seiner Persönlichkeit widersprach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortschreitender Verlust der Erinnerung an die eigene Karriere:</strong>
        Berichten aus seinem nahen Umfeld zufolge erkannte Falk in den letzten Jahren seine
        eigene berühmteste Rolle streckenweise nicht mehr wieder – ein besonders
        schmerzhaftes Detail bei einem Mann, dessen halbes Leben mit dieser einen Figur
        verbunden war.</p>
        <p class="vb-intro"><strong>b) Rückzug in die häusliche Pflege:</strong>
        Die letzten Lebensjahre verbrachte Falk weitgehend zurückgezogen in seinem Haus in
        Beverly Hills, umsorgt von seiner Frau und einem kleinen, festen Kreis an
        Pflegepersonal.</p>
        <p class="vb-intro"><strong>c) Tod am 23. Juni 2011:</strong>
        Peter Falk starb im Alter von 83 Jahren in seinem Haus in Beverly Hills an den Folgen
        seiner Alzheimer-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentlicher Streit über einen Mann, der nie stritt:</strong>
        Der Sorgerechtskonflikt um Falks letzte Lebensjahre wurde in den Medien breit
        diskutiert – ein auffälliger Kontrast zu dem Bild des zugewandten, nie
        konfliktsuchenden Mannes, das er zeitlebens verkörpert hatte.</p>
        <p class="vb-intro"><strong>b) Ein Nachruf, der die Krankheit kaum erwähnte:</strong>
        In den öffentlichen Würdigungen nach seinem Tod stand fast ausschließlich sein
        Lebenswerk als Columbo im Vordergrund – die Alzheimer-Jahre blieben ein eher
        stilles, nachträglich bekannt gewordenes Kapitel.</p>
        <p class="vb-intro"><strong>c) Ein Bild, das trotz allem bestehen blieb:</strong>
        Trotz der Krankheit und des Familienstreits blieb das öffentliche Bild Peter Falks
        weitgehend unverändert: der bodenständige, neugierige, nie überhebliche Mann, der er
        zeitlebens gewesen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrollverlust über das eigene Umfeld:</strong>
        Wo Falk sein ganzes Leben lang die Fähigkeit besaß, sich selbst in jede Umgebung
        einzufügen und dort Frieden zu stiften, konnte er in seinen letzten Jahren nicht mehr
        vermitteln, als genau dieser Frieden um ihn herum zerbrach.</p>
        <p class="vb-intro"><strong>b) Ein Konflikt, den die Krankheit selbst erst ermöglichte:</strong>
        Der Sorgerechtsstreit entstand nicht trotz, sondern wegen der Erkrankung – erst der
        Verlust seiner eigenen Entscheidungsfähigkeit öffnete den Raum für einen Konflikt,
        den er zu Lebzeiten nie zugelassen hätte.</p>
        <p class="vb-intro"><strong>c) Stille bis zuletzt:</strong>
        Trotz des öffentlichen Streits um ihn drang aus dem Zentrum des Geschehens selbst
        kaum etwas nach außen – Falk blieb, wie er es zeitlebens gewesen war, die ruhige
        Mitte, um die sich anderes bewegte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vier Jahre zwischen Diagnose und Tod:</strong>
        Von der Diagnose 2007 bis zu seinem Tod 2011 lebte Falk vier Jahre mit einer
        Krankheit, die genau jene Fähigkeit angriff, die sein ganzes Leben und seine
        berühmteste Rolle geprägt hatte: aufmerksame, wache Präsenz.</p>
        <p class="vb-intro"><strong>b) Ein Sorgerechtsstreit als Gegenbild zum eigenen Lebensmuster:</strong>
        Falks gesamtes Leben war von der Fähigkeit geprägt, Konflikte zu entschärfen, statt
        sie zu befeuern. Der öffentliche Streit um seine Pflege in den letzten Lebensjahren
        war das genaue Gegenteil – ein Konflikt, der ohne seine aktive Vermittlung
        eskalierte.</p>
        <p class="vb-intro"><strong>c) Ein Gedächtnis, das die eigene Lebensleistung mit sich nahm:</strong>
        Für einen Mann, dessen Columbo-Figur von geduldiger, präziser Beobachtungsgabe lebte,
        liegt in einer Krankheit, die genau diese Fähigkeiten zuerst angreift, eine besonders
        bittere Zuspitzung.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Gedächtnis?</strong>
        Für eine soziale Neun mit Einserflügel, deren gesamte Identität auf der Fähigkeit
        beruhte, jede Situation aufmerksam zu erfassen und einzuordnen, liegt eine Deutung
        nahe: Ausgerechnet jenes Organ, das ihm ermöglichte, sich in jede Umgebung
        einzufühlen und dabei doch klar zu urteilen, wurde zum Schauplatz des Verfalls – und
        hinterließ ein Umfeld, das ohne seine vermittelnde Präsenz in offenen Streit verfiel.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Alzheimer führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Falks Fall zeigen lässt, ist ein Muster im Umfeld einer Krankheit, das bei
        einer ausgeprägten sozialen Neun immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Falk kannte sein eigenes Muster nicht – die soziale Neun findet ihren Frieden darin,
        sich in jede Umgebung einzufügen und dort still zu vermitteln, ohne je selbst im
        Zentrum eines Konflikts zu stehen. Gerade weil er diese vermittelnde Rolle nie
        bewusst als eigenes Muster erkannte, sondern einfach lebte, konnte er sie in dem
        Moment nicht mehr schützen, in dem die Krankheit ihm genau diese Fähigkeit nahm. Wer
        das eigene Bedürfnis nach Harmonie nicht als Muster kennt, kann es auch nicht aktiv
        absichern, wenn die Umstände es am dringendsten brauchen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Falks</strong> soziale Neun mit
        Einserflügel noch einmal ablesen: eine Krankheit, die genau jene aufmerksame,
        vermittelnde Präsenz zerstörte, die sein ganzes Leben und seine berühmteste Rolle
        trug, und ein Familienstreit, der ausbrach, sobald diese Präsenz nicht mehr da war,
        um ihn zu verhindern. Der Büffel, der sich sein Leben lang in jede Herde einfügte –
        und dessen eigene Herde erst zerstritten war, als er selbst nicht mehr vermitteln
        konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-peter-falk", label:"Porträt: Peter Falk (SO9w1) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

export function ronaldReaganKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ronald-reagan-portrait.jpg" alt="Ronald Reagan – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ronald Reagan</p>
        <p class="krim-portrait-typ">SO9w8 · Sozialer Typ 9 mit Achterflügel · 1911–2004</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ronald Reagan</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ronald-reagan">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur kurz erwähnt
        wird: 1994 gab Reagan öffentlich bekannt, an Alzheimer zu erkranken sein – in einem
        handschriftlichen Brief an die amerikanische Öffentlichkeit, der bis heute als einer
        der bewegendsten politischen Abschiedstexte der jüngeren US-Geschichte gilt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Reagan</strong> ist der <strong>sozialen Neun mit Achterflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-wilma-mankiller">Wilma Mankiller</a>
        in diesem Kompass. Naranjo nannte die soziale Neun <em>Partizipation</em>: Sie erlebt
        sich selbst am vollständigsten als Teil eines größeren Ganzen und gibt anderen das
        Gefühl, ebenfalls dazuzugehören. Der Achterflügel bringt die Direktheit und den Mut
        hinzu, im entscheidenden Moment klar zu sprechen – eine Klarheit, die ihm ausgerechnet
        im Umgang mit der eigenen Diagnose besonders deutlich gelang.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nach außen gerichtet, auf Zugehörigkeit bedacht:</strong>
        Reagans Blick suchte stets die Verbindung zum Publikum, zur Nation, zum Gegenüber –
        auch als er selbst wusste, dass ihm diese Fähigkeit zunehmend entgleiten würde.</p>
        <p class="vb-intro"><strong>b) Klarheit im entscheidenden Moment:</strong>
        Der Abschiedsbrief von 1994 ist in seiner Direktheit bemerkenswert – kein Ausweichen,
        keine beschönigende Sprache, sondern eine klare, öffentliche Benennung der eigenen
        Diagnose. Der Achterflügel ermöglichte genau diese Offenheit, wo viele andere
        Politiker seiner Generation eine Krankheit dieser Art verschwiegen hätten.</p>
        <p class="vb-intro"><strong>c) Rückzug aus der Öffentlichkeit, ohne Bitterkeit:</strong>
        Nach der Diagnose zog sich Reagan fast vollständig aus dem öffentlichen Leben zurück –
        typisch soziale Neun: kein Kampf um die eigene Sichtbarkeit, sondern ein stiller
        Abschied von der Bühne.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Diagnose als später Einschnitt:</strong>
        Reagan war zum Zeitpunkt der Diagnose 1994 bereits fünf Jahre aus dem Amt geschieden –
        die Krankheit traf ihn in einer Lebensphase, die eigentlich als ruhiger Ausklang einer
        bewegten Karriere gedacht war.</p>
        <p class="vb-intro"><strong>b) Öffentliche Offenheit als bewusste Entscheidung:</strong>
        Reagan hätte die Diagnose ebenso gut privat halten können. Dass er sie öffentlich
        machte, folgte demselben Impuls, mit dem er als Präsident Zugehörigkeit stiftete –
        auch im eigenen Leiden wollte er die Nation nicht ausschließen.</p>
        <p class="vb-intro"><strong>c) Zehn Jahre fast vollständiger Rückzug:</strong>
        Von der Diagnose 1994 bis zu seinem Tod 2004 verbrachte Reagan die meiste Zeit
        außerhalb der Öffentlichkeit, gepflegt von seiner Frau Nancy Reagan.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) &bdquo;Die Reise in den Sonnenuntergang meines Lebens&ldquo;:</strong>
        Diese Formulierung aus dem Abschiedsbrief wurde zu einem der meistzitierten Sätze der
        amerikanischen Politikgeschichte – eine Sprache, die selbst die eigene Krankheit noch
        in ein Bild von Zugehörigkeit und Frieden übersetzte, statt in Kampf oder Verzweiflung.</p>
        <p class="vb-intro"><strong>b) Ein Vermächtnis für die Forschung:</strong>
        Reagans öffentliche Offenlegung trug wesentlich dazu bei, das gesellschaftliche Tabu um
        Alzheimer zu verringern und die Forschungsfinanzierung in den USA zu erhöhen – ein
        Nutzen für die Gemeinschaft, der über sein eigenes Schicksal hinausreichte.</p>
        <p class="vb-intro"><strong>c) Nancy Reagan als beständige Konstante:</strong>
        Die enge, jahrzehntelange Bindung zu seiner Frau blieb bis zuletzt der zentrale Halt –
        typisch soziale Neun: Identität, die sich aus verlässlicher Zugehörigkeit speist,
        nicht aus Eigenständigkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Bild, das im kollektiven Gedächtnis blieb:</strong>
        Der Abschiedsbrief prägt bis heute, wie sich Amerikaner an Reagans letzte Lebensjahre
        erinnern – nicht als Verfall, sondern als würdevoller, bewusst gewählter Rückzug.</p>
        <p class="vb-intro"><strong>b) Enttabuisierung einer stigmatisierten Krankheit:</strong>
        Zu einer Zeit, in der Demenzerkrankungen kaum öffentlich thematisiert wurden, machte
        Reagans Offenheit die Krankheit gesellschaftsfähiger – ein seltener Fall, in dem
        persönliches Leiden direkt gemeinschaftlichen Nutzen stiftete.</p>
        <p class="vb-intro"><strong>c) Ein Nachruf, der schon zu Lebzeiten begann:</strong>
        Weil die letzten zehn Lebensjahre kaum öffentlich sichtbar waren, verschob sich
        Reagans öffentliches Bild bereits vor seinem Tod 2004 in Richtung eines historischen
        Vermächtnisses statt einer noch aktiven Figur.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug statt Widerstand:</strong>
        Anders als manche Krankheitsporträts dieses Kompasses, in denen die Betroffenen bis
        zuletzt kämpften, zeigt Reagans Fall die andere Seite der Neun: ein friedliches
        Loslassen, sobald der Rückzug unausweichlich wurde.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Person und Amt löste sich auf:</strong>
        Die Krankheit trennte schrittweise, was Reagans Identität einst ausgemacht hatte – die
        enge Verbindung zwischen der eigenen Person und der Rolle, ein ganzes Land zu
        repräsentieren.</p>
        <p class="vb-intro"><strong>c) Stille als letzte Botschaft:</strong>
        Die zunehmende öffentliche Unsichtbarkeit selbst wurde zur Aussage – ein Mann, der
        einst durch reine Präsenz wirkte, zog sich am Ende so leise zurück, wie er einst
        aufgetreten war.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein zehnjähriger, öffentlich angekündigter Abschied:</strong>
        Reagan verkündete seine Diagnose 1994 selbst und lebte danach zehn weitere Jahre mit
        fortschreitender Alzheimer-Erkrankung, bis zu seinem Tod 2004 im Alter von 93 Jahren.</p>
        <p class="vb-intro"><strong>b) Der Brief als letzte große Kommunikationsleistung:</strong>
        Der handschriftliche Brief vom 5. November 1994 war zugleich Abschied und letzte
        politische Kommunikationsleistung eines Mannes, der als &bdquo;der große
        Kommunikator&ldquo; in die Geschichte einging – eine letzte, bewusste Botschaft an die
        Gemeinschaft, bevor die Fähigkeit dazu selbst verloren ging.</p>
        <p class="vb-intro"><strong>c) Öffentliche Offenheit statt Verheimlichung:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses, in denen die
        Erkrankung über Jahre verborgen blieb, entschied sich Reagan für den umgekehrten Weg –
        typisch soziale Neun: Die eigene Diagnose wurde selbst zu einem Akt der Zugehörigkeit,
        geteilt mit einer ganzen Nation.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-wilma-mankiller">Wilma
        Mankiller</a> (SO9w8) führte ihre Gemeinschaft durch ihr wichtigstes Jahrzehnt, während
        ihr eigener Körper sie mehrfach an den Rand des Todes brachte – Myasthenia gravis,
        Nierenerkrankung, Krebs. Bei beiden zeigt sich dasselbe SO9w8-Muster: Die eigene
        Erkrankung wird nicht zum Rückzugsgrund von der Gemeinschaft, sondern in irgendeiner
        Form mit ihr geteilt – bei Mankiller durch beharrliches Weiterführen trotz Krankheit,
        bei Reagan durch die bewusste, öffentliche Offenlegung der eigenen Diagnose.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet das Gedächtnis?</strong>
        Reagans gesamte politische Wirkung beruhte auf seiner Fähigkeit, Menschen ein Gefühl
        von Zugehörigkeit zu vermitteln – sich selbst als Teil eines größeren Ganzen zu
        erleben und dieses Gefühl auf andere zu übertragen. Alzheimer greift exakt jene
        Fähigkeit an, die dafür die Voraussetzung ist: das Gedächtnis, das eigene Leben, die
        eigene Geschichte, die eigenen Bindungen als zusammenhängendes Ganzes zu erleben. Für
        eine soziale Neun, deren Identität sich aus dem Aufgehen in etwas Größerem speist,
        liegt es nahe, gerade in einer Krankheit, die das Selbst allmählich aus der eigenen
        Lebensgeschichte löst, eine Zuspitzung des eigenen Lebensmusters zu lesen: Wo die SO9
        sich Zeit ihres Lebens in Gemeinschaft und Zugehörigkeit auflöst, um Frieden zu finden,
        löste sich am Ende auch die Erinnerung an diese Zugehörigkeit selbst auf – nicht mehr
        freiwillig gewählt, sondern unaufhaltsam. Diese Deutung wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Alzheimer oder
        anderen Demenzerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Reagans Fall zeigen lässt, ist ein Muster,
        das bei Identität, die sich primär aus Zugehörigkeit speist, in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Reagan kannte sein eigenes Muster nicht – doch die soziale Neun, die Konflikt und Aufmerksamkeit eher meidet, wich der eigenen Diagnose diesmal nicht aus, sondern machte sie in einem persönlichen Brief öffentlich, bevor sie sich endgültig aus dem Rampenlicht zurückzog. Auch das kann unbewusstes Musterverhalten sein: der eine bewusste Akt der Offenheit, gefolgt vom vertrauten Rückzug in die Stille.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Neun mit Achterflügel zeigt sich bei <strong>Reagan</strong> auch im Umgang
        mit der eigenen Erkrankung: eine öffentliche, mutige Offenlegung der eigenen Diagnose,
        ein friedlicher Rückzug statt eines Kampfes, und eine Krankheit, die ausgerechnet jene
        Fähigkeit auflöste, auf der sein gesamtes Lebenswerk beruhte – die Verbindung zu
        anderen als Teil des eigenen Selbst zu erleben. Der Büffel, der eine ganze Nation
        zusammenhielt, verlor am Ende die Erinnerung an sich selbst – und wurde gerade durch
        diese letzte, offene Geste noch einmal zu dem, was er sein Leben lang war: ein Mann,
        der andere nicht ausschloss, selbst im eigenen Verfall nicht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ronald-reagan", label:"Porträt: Ronald Reagan (SO9w8) – Lebenswerk"},
        {route:"beruehmte-wilma-mankiller", label:"Porträt: Wilma Mankiller (SO9w8)"},
        {route:"krankheitsportraets-willy-brandt", label:"Krankheitsporträt: Willy Brandt (SO9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

export function stephenHawkingKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-stephen-hawking-portrait.jpg" alt="Stephen Hawking" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Stephen Hawking</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel · 1942–2018</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Stephen Hawking</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-stephen-hawking">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein wissenschaftliches Lebenswerk,
        von der Hawking-Strahlung bis zu „Eine kurze Geschichte der Zeit". Diese Seite folgt
        einer Spur, die dort nur kurz angedeutet wird: die Amyotrophe Lateralsklerose
        (ALS), eine fortschreitende Erkrankung der Nervenzellen, die Muskeln zunehmend
        lähmt. Mit 21 Jahren diagnostiziert und mit einer Lebenserwartung von zwei Jahren
        konfrontiert, lebte er noch 55 weitere Jahre – bei vollständigem Verlust der
        willkürlichen Muskelkontrolle, aber ungebrochener geistiger Schärfe bis zuletzt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hawking</strong> ist dem <strong>sozialen Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SO5 sucht Sicherheit über Wissen, das sie mit einer größeren
        Gemeinschaft teilt – nicht als Zurückgezogener, sondern als jemand, der sein
        Verstehen öffentlich zugänglich macht. Der Sechserflügel bringt systematische
        Wachsamkeit und die Fähigkeit hinzu, verlässliche, getestete Systeme aufzubauen und
        einem kleinen, treuen Kreis zu vertrauen. Genau diese Kombination aus öffentlichem
        Wissensauftrag und methodischer Systembildung prägte auch Hawkings Umgang mit
        seiner eigenen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Stolpern und undeutliches Sprechen:</strong>
        Im letzten Studienjahr in Oxford, um 1962/63, bemerkte der einundzwanzigjährige
        Hawking zunehmende Ungeschicklichkeit – er stolperte ohne erkennbaren Grund, und
        seine Sprache wurde bei einem Weihnachtsbesuch zuhause merklich undeutlicher.</p>
        <p class="vb-intro"><strong>b) Eine niederschmetternde Diagnose:</strong>
        Nach mehrwöchigen Untersuchungen im St. Bartholomew's Hospital in London
        diagnostizierten die Ärzte 1963 ALS und gaben ihm eine Lebenserwartung von etwa
        zwei bis drei weiteren Jahren.</p>
        <p class="vb-intro"><strong>c) Eine kurze Phase der Verzweiflung, dann Rückkehr zur Arbeit:</strong>
        Hawking selbst berichtete später von einer Phase tiefer Depression nach der
        Diagnose – gefolgt von der bewussten Entscheidung, sich wieder seiner Doktorarbeit
        über die Kosmologie zuzuwenden, solange ihm noch Zeit blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein langsamer, aber unaufhaltsamer Verlust der Muskelkontrolle:</strong>
        Über die folgenden Jahrzehnte verlor Hawking schrittweise die Kontrolle über Arme,
        Beine und schließlich fast alle willkürlichen Muskeln – ab Mitte der 1960er-Jahre
        zunehmend auf einen Rollstuhl angewiesen.</p>
        <p class="vb-intro"><strong>b) Der Verlust der eigenen Stimme:</strong>
        1985 erkrankte Hawking während eines Forschungsaufenthalts in Genf an einer
        Lungenentzündung; die notwendige Tracheotomie (ein operativer Luftröhrenschnitt)
        rettete sein Leben, kostete ihn aber unwiderruflich seine natürliche Sprechfähigkeit.</p>
        <p class="vb-intro"><strong>c) Eine Stimme aus dem Computer:</strong>
        Ein Sprachsynthesizer, zunächst über einen Handschalter, später über einen einzigen
        beweglichen Wangenmuskel gesteuert, wurde zu seinem einzigen verbliebenen
        Kommunikationskanal – mit der inzwischen weltberühmten, monotonen synthetischen
        Computerstimme, die er bewusst beibehielt, selbst als natürlicher klingende
        Alternativen verfügbar wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein Bestseller trotz fast völliger Lähmung:</strong>
        1988, bereits weitgehend gelähmt und auf den Sprachsynthesizer angewiesen,
        veröffentlichte Hawking mit „Eine kurze Geschichte der Zeit" eines der
        meistverkauften populärwissenschaftlichen Bücher überhaupt – Millionen Exemplare in
        über vierzig Sprachen.</p>
        <p class="vb-intro"><strong>b) Ein verlässliches System aus Menschen und Technik:</strong>
        Um weiterarbeiten zu können, baute Hawking über Jahrzehnte ein sorgfältig
        eingespieltes, sehr kleines Team aus Pflegekräften, technischen Assistenten und
        Doktoranden auf, die sein Kommunikationssystem warteten und ihn rund um die Uhr
        begleiteten – ein hochgradig systematisiertes, auf Verlässlichkeit statt auf
        Spontaneität ausgelegtes Lebensmodell.</p>
        <p class="vb-intro"><strong>c) Öffentliche Präsenz statt Rückzug:</strong>
        Statt sich mit fortschreitender Krankheit aus der Öffentlichkeit zurückzuziehen,
        suchte Hawking sie zunehmend aktiv: Vorträge, Fernsehauftritte, sogar Gastauftritte
        in „Raumschiff Enterprise" und „The Big Bang Theory" sowie 2007 ein
        Schwerelosigkeitsflug in einem umgebauten Flugzeug – Wissen und Erfahrung sollten
        geteilt werden, nicht privat bleiben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) 55 Jahre gegen jede medizinische Prognose:</strong>
        Statt der ursprünglich prognostizierten zwei bis drei Jahre lebte Hawking bis zum
        14. März 2018 – ein außergewöhnlich langer Krankheitsverlauf, dessen genaue Gründe
        bis heute nicht vollständig geklärt sind.</p>
        <p class="vb-intro"><strong>b) Der Lucasian Chair bis zur Pensionierung:</strong>
        Von 1979 bis 2009 hatte Hawking den Lucasian Chair for Mathematics in Cambridge
        inne, denselben Lehrstuhl, den einst Isaac Newton (SO5w6) besetzte – eine
        institutionelle Kontinuität über Jahrhunderte hinweg, für die eine soziale Fünf mit
        Sechserflügel ein besonderes Gespür hat: Zugehörigkeit zu einer verlässlichen,
        geprüften Institution statt zu flüchtigem persönlichem Ruhm.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Vermächtnis über den Tod hinaus:</strong>
        Hawkings Asche wurde in der Westminster Abbey neben den Gräbern von Isaac Newton
        und Charles Darwin (SE5w6) beigesetzt – eine posthume Zugehörigkeit zu genau jener
        Gemeinschaft großer Wissenschaftler, der er sich zeitlebens verbunden fühlte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Sicherheit durch geteiltes Wissen statt durch Rückzug:</strong>
        Anders als eine selbsterhaltende oder sexuelle Fünf, die sich eher zurückzieht,
        suchte Hawking mit fortschreitender Krankheit den Kontakt zu einem möglichst großen
        Publikum – die SO5-typische Überzeugung, dass Wissen erst durch Teilen seinen vollen
        Wert entfaltet.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel als Systembauer:</strong>
        Die methodische, akribisch getestete Konstruktion seines Kommunikationssystems –
        vom Handschalter bis zum wangenmuskelgesteuerten Sprachcomputer – trägt deutlich die
        Handschrift des Sechserflügels: kein spontanes Improvisieren, sondern der geduldige
        Aufbau eines Systems, auf das man sich verlassen kann, gemeinsam mit einem kleinen,
        loyalen Kreis von Vertrauten.</p>
        <p class="vb-intro"><strong>c) Kontrolle durch Verstehen des eigenen Zustands:</strong>
        Hawking sprach öffentlich selten über seine Krankheit als persönliches Leid,
        sondern eher analytisch, fast wie über ein weiteres physikalisches Phänomen –
        die vertraute SO5-Strategie, existenzielle Bedrohung über intellektuelle Distanz zu
        verarbeiten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Diagnose direkt am Beginn des Erwachsenenlebens:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses, in denen sich
        eine Krankheit erst über Jahrzehnte in ein bereits gelebtes Leben einschleicht,
        stand Hawkings gesamtes Erwachsenenleben von Beginn an im Zeichen der Diagnose –
        seine wissenschaftliche Karriere und seine Krankheit begannen praktisch gleichzeitig.</p>
        <p class="vb-intro"><strong>b) Eine über Jahrzehnte bekannte, nie verdrängte Grenze:</strong>
        Von der Diagnose 1963 bis zu seinem Tod 2018 lebte Hawking mit einer Krankheit, die
        er weder verheimlichte noch dramatisierte – sie wurde, ähnlich wie bei Albert
        Einstein (SO5w4), zur Kenntnis genommen und in ein funktionierendes System aus
        Arbeit und Alltag eingebaut.</p>
        <p class="vb-intro"><strong>c) Arbeit als Konstante über jede körperliche Veränderung hinweg:</strong>
        Ob mit noch beweglichen Händen in den 1960er-Jahren oder Jahrzehnte später mit
        einem einzigen kontrollierbaren Wangenmuskel – die physikalische Forschung selbst
        blieb über all diese Stufen des Verlusts hinweg die tragende Konstante.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das motorische Nervensystem?</strong>
        Für eine soziale Fünf mit Sechserflügel, deren Sicherheit über Systeme aus Wissen
        und verlässlicher Struktur entsteht, liegt eine Deutung nahe: Ausgerechnet jenes
        System, das Denken in Handeln übersetzt – die Nervenbahnen, die den Körper steuern
        – verlor zunehmend seine Funktion, während der Geist selbst von der Krankheit
        vollständig verschont blieb. Die Antwort darauf war exemplarisch SO5w6: der Bau
        eines neuen, künstlichen Übersetzungssystems zwischen Denken und Mitteilen, das
        ebenso verlässlich funktionieren sollte wie zuvor der eigene Körper. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang,
        und wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu neurologischen
        Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Hawkings Fall zeigen lässt, ist ein Muster, das bei
        dem Bedürfnis, Kontrollverlust durch den Aufbau neuer, verlässlicher Systeme zu
        kompensieren, in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hawking kannte sein eigenes Enneagramm-Muster nicht – die soziale Fünf mit
        Sechserflügel sucht Sicherheit fast reflexhaft im Aufbau geprüfter, verlässlicher
        Systeme und im geteilten Wissen einer größeren Gemeinschaft, statt sich der
        körperlichen Bedrohung mit offener emotionaler Verarbeitung zu stellen. Genau das
        lebte er ungebremst: ein immer ausgefeilteres technisches System, ein immer
        größeres Publikum – nicht aus Berechnung, sondern aus einem Muster, das er selbst
        nie als solches erkannte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Hawkings</strong> 55 Jahren mit ALS lässt sich die soziale Fünf mit
        Sechserflügel in einer ihrer eindrücklichsten Formen studieren: eine Diagnose, die
        nie verheimlicht, aber auch nie dramatisiert wurde, ein sorgfältig gebautes System
        aus Technik und Vertrauenspersonen, das den fortschreitenden Kontrollverlust
        auffing, und ein Wissensauftrag, der bis zur letzten Möglichkeit der Mitteilung
        nicht endete. Der Oktopus, dessen Körper ihm Stück für Stück genommen wurde – und
        der trotzdem einen Weg fand, seine acht Arme durch ein einziges technisches System
        zu ersetzen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-stephen-hawking", label:"Porträt: Stephen Hawking (SO5w6) – Lebenswerk"},
        {route:"krankheitsportraets-isaac-newton", label:"Krankheitsporträt: Isaac Newton (SO5w6) – gleicher Subtyp, gleicher Lehrstuhl"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsporträt: Albert Einstein (SO5w4) – dasselbe Muster ungebremster Arbeit bis zuletzt"},
        {route:"krankheitsportraets-cg-jung", label:"Krankheitsporträt: Carl Gustav Jung (SO5w6) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function warrenBuffettKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-warren-buffett-portrait.jpg" alt="Warren Buffett – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Warren Buffett</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · geb. 1930</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Warren Buffett</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-warren-buffett">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Investor und seine
        Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht vorkommt:
        Im April 2012 gab Buffett, damals 81 Jahre alt, in einem offenen Brief an die
        Aktionärinnen und Aktionäre von Berkshire Hathaway bekannt, dass bei ihm ein
        Prostatakrebs im Frühstadium diagnostiziert worden war. Er ließ sich behandeln, führte
        das Unternehmen währenddessen unverändert weiter und meldete wenige Monate später den
        erfolgreichen Abschluss der Therapie. Diese Seite ordnet ausdrücklich <strong>nicht</strong>
        ein: Eine Krebserkrankung steht in keinem ursächlichen Zusammenhang mit Persönlichkeit
        oder Subtyp – jeder Mensch kann unabhängig von seinem Enneagramm-Muster daran erkranken.
        Im Mittelpunkt steht stattdessen, <em>wie</em> ein ausgeprägter selbsterhaltender Typ 5
        mit einer solchen Diagnose umging.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Buffett</strong> ist dem <strong>selbsterhaltenden Typ 5 mit Sechserflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Marie Curie</a>
        in diesem Kompass. Naranjo nannte die selbsterhaltende Fünf die <em>Burg</em>: Sicherheit
        entsteht durch Rückzug in einen selbst kontrollierten, überschaubaren Raum, in dem Wissen
        und Fakten die eigentliche Grundlage bilden – nicht Gefühl oder Dramatik. Der
        Sechserflügel bringt zusätzlich die Neigung, jede Situation zuerst nüchtern auf ihr
        tatsächliches Risiko abzuklopfen, statt in Panik oder Verdrängung zu verfallen. Genau
        diese Haltung bestimmte auch, wie Buffett seiner eigenen Krebsdiagnose begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Bluttest als Auslöser:</strong>
        Die Diagnose begann mit einem routinemäßigen Bluttest, der einen erhöhten PSA-Wert
        zeigte – ein Befund ohne spürbare Symptome, der erst durch eine anschließende Biopsie zur
        gesicherten Diagnose wurde.</p>
        <p class="vb-intro"><strong>b) Diagnose an einem Mittwoch, Folgeuntersuchungen am Donnerstag:</strong>
        Nach eigener Schilderung erhielt Buffett die Diagnose an einem Mittwoch, bereits am
        folgenden Tag fanden weitere Scans statt – ein zügiges, sachliches Vorgehen ohne
        erkennbare Schockstarre.</p>
        <p class="vb-intro"><strong>c) Stage I – ein frühes Stadium:</strong>
        Der Prostatakrebs wurde im Stadium I diagnostiziert, also in einem frühen, gut
        behandelbaren Stadium – eine Tatsache, die Buffett in seiner öffentlichen Kommunikation
        von Anfang an in den Vordergrund stellte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Bekanntgabe per Aktionärsbrief:</strong>
        Statt die Diagnose zu verbergen oder über Umwege durchsickern zu lassen, teilte Buffett
        sie am 17./18. April 2012 direkt und in eigenen Worten in einem offenen Brief an die
        Berkshire-Hathaway-Aktionärinnen und -Aktionäre mit – ein für einen CEO ungewöhnlich
        direkter, unaufgeregter Umgang mit einer gesundheitlichen Krise.</p>
        <p class="vb-intro"><strong>b) „Nicht im Entferntesten lebensbedrohlich":</strong>
        Sein eigenes Zitat lautete sinngemäß, die Erkrankung sei „not remotely life-threatening
        or even debilitating in any meaningful way" – eine bewusst nüchterne Einordnung, die
        Dramatisierung von vornherein vermied.</p>
        <p class="vb-intro"><strong>c) „Ich fühle mich großartig":</strong>
        Buffett ergänzte, er fühle sich „großartig – als wäre ich in meiner normalen,
        ausgezeichneten gesundheitlichen Verfassung", und sein Energielevel liege bei „100
        Prozent" – eine Formulierung, die eher an einen Geschäftsbericht als an eine
        Krankheitsmitteilung erinnert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zwei Monate tägliche Bestrahlung statt Operation:</strong>
        Buffett entschied sich gemeinsam mit seinen Ärzten für eine zweimonatige Behandlung mit
        täglicher Strahlentherapie, Beginn Mitte Juli 2012 im Nebraska Medical Center – kein
        operativer Eingriff, sondern ein planbarer, gleichmäßiger Ablauf.</p>
        <p class="vb-intro"><strong>b) 44 Bestrahlungssitzungen bis zum Abschluss:</strong>
        Am 14. September 2012 meldete Buffett öffentlich den Abschluss der Behandlung: „Today I
        had my 44th and last day of radiation" – eine schlichte, fast buchhalterische Bilanz
        eines mehrmonatigen Prozesses.</p>
        <p class="vb-intro"><strong>c) Keine Unterbrechung der Führungsrolle:</strong>
        Während der gesamten Behandlungszeit betonte Buffett, weiterhin normal als
        Vorstandsvorsitzender von Berkshire Hathaway zu arbeiten – keine Vertretung, keine
        sichtbare Einschränkung seiner Führungsaufgaben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ruhe an den Kapitalmärkten:</strong>
        Weil Buffett Diagnose, Behandlungsplan und Prognose selbst, frühzeitig und mit klaren
        Fakten kommunizierte, blieb die Reaktion der Investoren und der Berkshire-Aktie
        vergleichsweise gelassen – Unsicherheit wurde durch Information ersetzt, bevor sie sich
        aufbauen konnte.</p>
        <p class="vb-intro"><strong>b) Ein Vorbild für sachliche Krankheitskommunikation:</strong>
        Medien beschrieben Buffetts Umgang mit der Diagnose wiederholt als bemerkenswert
        unaufgeregt – ein öffentlicher Kontrapunkt zu Fällen, in denen prominente Erkrankungen
        über Jahre verschwiegen oder dramatisiert werden.</p>
        <p class="vb-intro"><strong>c) Kein Bruch im Alltag:</strong>
        Weder sein bekannter Lebensrhythmus noch seine öffentliche Präsenz veränderten sich
        während der Behandlung sichtbar – dieselbe Routine, dieselbe Arbeit, derselbe Ton.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fakten statt Gefühl als erste Reaktion:</strong>
        Für eine selbsterhaltende Fünf, deren Sicherheit aus genauem Wissen entsteht, lag die
        naheliegende erste Reaktion auf die Diagnose nicht in emotionaler Verarbeitung, sondern
        in der raschen Klärung der Fakten: Welches Stadium, welche Behandlung, welche Prognose.
        Erst danach folgte die Mitteilung nach außen.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel als Risikoabwägung im Krankheitsfall:</strong>
        Derselbe Sechserflügel, der bei Buffetts Investitionsentscheidungen zuerst nach dem
        Risiko fragt, zeigte sich auch hier: eine schnelle, nüchterne Einschätzung, dass die
        Diagnose kein existenzielles Risiko darstellte, gefolgt von einer planbaren, verlässlichen
        Behandlung statt überstürzter Schritte.</p>
        <p class="vb-intro"><strong>c) Die Burg bleibt bewohnt, nicht verrammelt:</strong>
        Anders als ein Rückzug aus der Öffentlichkeit, den man von einer verschlossenen Fünf
        erwarten könnte, öffnete Buffett die Burg für diese eine Mitteilung bewusst – nicht aus
        Bedürfnis nach Nähe, sondern weil Transparenz gegenüber den Aktionären ihm als
        sachlich richtige, kalkulierte Entscheidung erschien.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Diagnose, behandelt wie ein Geschäftsbericht:</strong>
        Buffetts gesamte öffentliche Sprache zur eigenen Erkrankung – Zahlen, Fristen,
        Wahrscheinlichkeiten, ein klarer Zeitplan bis zum Abschluss der Behandlung – folgte
        demselben nüchternen Duktus, mit dem er sonst Bilanzen und Marktrisiken einordnet.</p>
        <p class="vb-intro"><strong>b) Die gleiche Eule, die auch beim Geld nicht in Panik verfällt:</strong>
        Buffett wurde berühmt für seinen Rat, ängstlich zu sein, wenn andere gierig sind, und
        gierig, wenn andere ängstlich sind – eine Haltung, die Ruhe gerade dann verlangt, wenn
        die Lage bedrohlich wirkt. Genau diese Ruhe zeigte er auch gegenüber der eigenen
        Diagnose: kein Alarmismus, sondern eine kühle Einschätzung der tatsächlichen Lage.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet diese unaufgeregte Offenheit?</strong>
        Für eine selbsterhaltende Fünf mit Sechserflügel, deren Sicherheit aus Fakten und
        kontrollierter Kommunikation entsteht, liegt eine Deutung nahe: Die öffentliche
        Bekanntgabe war selbst ein Akt der Risikominimierung – lieber die eigene, klare Version
        der Fakten liefern, als Raum für Spekulation und unkontrollierte Gerüchte zu lassen.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf mit Sechserflügel
        zwangsläufig zu Prostatakrebs führt oder ihn erklärt – <strong>jeder Mensch kann jede
        Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Buffetts Fall zeigen
        lässt, ist ein Muster im Umgang mit einer Krebsdiagnose, das bei einer ausgeprägten
        selbsterhaltenden Fünf mit Sechserflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Buffett kannte, wie die meisten Menschen, sein eigenes Enneagramm-Muster über weite
        Strecken seines Lebens nicht bewusst. Ohne dieses Wissen lebte er dennoch jahrzehntelang
        unverändert die Leidenschaft der selbsterhaltenden Fünf aus: Genügsamkeit,
        Ressourcenschonung und eine auffällige Distanz gegenüber Warnsignalen des eigenen
        Körpers. Sein bekannter Lebensstil – tägliche Fastfood-Frühstücke, große Mengen Cherry
        Coke, kaum sportliche Betätigung – blieb über Jahrzehnte unverändert, obwohl er sich
        längst jede erdenkliche Alternative hätte leisten können. Dass ausgerechnet dieser
        körperlich wenig gepflegte Lebensstil ihn dennoch weit über die neunzig Jahre alt werden
        ließ, ändert nichts daran, dass hier dieselbe SE5-Beharrlichkeit sichtbar wird, mit der
        Buffett auch seine Investitionsprinzipien jahrzehntelang unverändert beibehielt: einmal
        als richtig erkannte Routinen werden nicht aus Rücksicht auf den eigenen Körper
        hinterfragt, sondern schlicht fortgesetzt. Dass er trotzdem so lange gesund blieb, ist
        Glück und Konstitution, kein Beleg für die Klugheit dieser Routine.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Fünf mit Sechserflügel zeigt sich bei <strong>Warren Buffett</strong>
        in der Art, wie er einer Krebsdiagnose begegnete: sachlich, faktenbasiert, ohne
        Dramatisierung – und mit derselben ruhigen Offenheit, mit der er sonst seine
        Aktionärsbriefe schreibt. Die Eule, die ihr Leben lang genau hinschaute, richtete
        denselben klaren Blick auch auf die eigene Diagnose – und kehrte, sobald die Behandlung
        abgeschlossen war, unverändert an ihren Platz zurück.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-warren-buffett", label:"Porträt: Warren Buffett (SE5w6) – Lebenswerk"},
        {route:"krankheitsportraets-marie-curie", label:"Krankheitsporträt: Marie Curie (SE5w6) – sachlich bis zur eigenen Warnung"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

export function yayoiKusamaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-yayoi-kusama-portrait.jpg" alt="Yayoi Kusama" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Yayoi Kusama</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · 1929–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Yayoi Kusama</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-yayoi-kusama">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen, mit einem kurzen Verweis auf ihr Leben in der psychiatrischen Klinik. Diese
        Seite vertieft dieses Kapitel: eine seit früher Kindheit bestehende psychische
        Erkrankung mit Halluzinationen und Depersonalisation, eine belastete Kindheit, mehrere
        Suizidversuche und ein bis zu ihrem Tod im August 2026 andauerndes Leben in einer
        psychiatrischen Klinik seit 1977.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kusama</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SE2 richtet die Fürsorge-Energie der Zwei zuerst auf das eigene
        Überleben; der Dreierflügel bringt den unbedingten Willen hinzu, aus der eigenen Not
        heraus sichtbar zu werden und etwas zu leisten. Genau diese Kombination – die eigene
        psychische Erkrankung nicht zu verstecken, sondern sie zur Grundlage eines
        welterfolgreichen Lebenswerks zu machen – bestimmte bis zuletzt ihren Umgang mit der
        eigenen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Halluzinationen bereits im Vorschulalter:</strong>
        Kusama berichtete, bereits als kleines Kind visuelle und akustische Halluzinationen
        erlebt zu haben – Blumenmuster, die zu ihr sprachen, endlose Netze aus Punkten, die sich
        über ihr gesamtes Blickfeld legten.</p>
        <p class="vb-intro"><strong>b) Eine belastete, lieblose Kindheit:</strong>
        Ihre Mutter, aus einer wohlhabenden Familie in Matsumoto, riss Kusamas frühe Zeichnungen
        wiederholt in Stücke und schickte das Kind wiederholt los, um den untreuen Vater bei
        seinen Affären auszuspionieren – ein familiäres Umfeld, das der jungen Kusama kaum Halt
        bot.</p>
        <p class="vb-intro"><strong>c) Zeichnen als erste, spontane Reaktion:</strong>
        Statt an den Visionen zu zerbrechen, begann Kusama bereits als Kind, diese
        Halluzinationen zeichnerisch festzuhalten – ein Verhalten, das sie selbst später als
        <em>Selbstauslöschung</em> bezeichnete: sich selbst so lange wiederholend in das eigene
        Muster einzuzeichnen, bis die Angst vor der Auflösung nachließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Diagnose einer Zwangsneurose:</strong>
        Kusama wurde mit einer obsessiv-zwanghaften Störung diagnostiziert; nach eigener
        Aussage lehnte sie die häufig kolportierte Fremdzuschreibung einer manisch-depressiven
        Psychose ab und führte ihre Symptome unter anderem auf eine Schilddrüsenerkrankung
        zurück.</p>
        <p class="vb-intro"><strong>b) Depersonalisation als zusätzliches Symptom:</strong>
        Neben den Halluzinationen litt Kusama an einer Depersonalisationsstörung (japanisch
        <em>rijinshō</em>, wörtlich „Getrennt-Person-Symptom") – dem Gefühl, sich selbst und die
        eigene Umgebung als fremd, unwirklich oder aufgelöst wahrzunehmen.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes künstlerisches Arbeiten trotz akuter Symptome:</strong>
        Auch in New York, wo sie ab 1958 mittellos und ohne Englischkenntnisse lebte, produzierte
        sie trotz wiederkehrender psychischer Krisen ein enormes Werk – Malerei, Skulptur,
        Happenings, Mode – als arbeite sie gegen die eigene Auflösung an.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Mehrere Suizidversuche in den frühen 1970er-Jahren:</strong>
        Nach Jahren extremer künstlerischer wie finanzieller Belastung in New York und dem
        wachsenden Gefühl kommerziellen Scheiterns unternahm Kusama mehrere Suizidversuche, bevor
        sie sich zur Rückkehr nach Japan entschloss.</p>
        <p class="vb-intro"><strong>b) Rückkehr nach Japan 1973, körperlich und psychisch erschöpft:</strong>
        Kusama kehrte 1973 erschöpft und gesundheitlich angeschlagen nach Japan zurück – eine
        Rückkehr, die zunächst weniger einem Neuanfang als einem Rückzug aus einem Leben glich,
        das sie fast zerstört hätte.</p>
        <p class="vb-intro"><strong>c) Freiwillige Einweisung in die Psychiatrie 1977:</strong>
        1977 ließ sich Kusama freiwillig in das Seiwa-Krankenhaus für psychisch Kranke in Tokio
        einweisen – eine bewusste Entscheidung für einen schützenden Rahmen statt für ein Leben
        in unkontrollierter Krise.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Fast fünfzig Jahre in freiwilliger stationärer Behandlung:</strong>
        Kusama lebte bis zu ihrem Tod im August 2026, im Alter von 97 Jahren, in derselben
        psychiatrischen Klinik – eine der längsten bekannten freiwilligen psychiatrischen
        Aufenthaltszeiten einer international bekannten Künstlerpersönlichkeit.</p>
        <p class="vb-intro"><strong>b) Tägliche Arbeit trotz und mit der Erkrankung:</strong>
        Von der Klinik aus ging Kusama bis zuletzt fast täglich zu Fuß in ihr nahegelegenes
        Atelier, um zu arbeiten – die Krankheit hat ihr Schaffen nie beendet, sondern wurde zu
        dessen strukturierendem Rahmen.</p>
        <p class="vb-intro"><strong>c) Offener Umgang statt Verschweigen:</strong>
        Anders als viele andere Porträts in diesem Kompass zeigt Kusamas Fall eine Person, die
        ihre psychische Erkrankung nicht über Jahrzehnte verbirgt, sondern öffentlich benennt und
        explizit zum Ausgangspunkt ihres künstlerischen Werks erklärt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Flusspferd, das sein Element nie verlassen hat:</strong>
        So wie das Flusspferd ohne ständigen Wasserkontakt nicht bestehen kann, beschreibt
        Kusama das Malen selbst als überlebensnotwendig – kein künstlerisches Konzept, sondern
        die einzige Bedingung, unter der sie psychisch bestehen kann.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und der Wille, die eigene Krankheit sichtbar zu machen:</strong>
        Statt die Erkrankung zu verstecken, verwandelte der Dreierflügel sie in ein öffentlich
        kommuniziertes, welterfolgreiches künstlerisches Programm – die begehbaren <em>Infinity
        Mirror Rooms</em> lassen Millionen Besucher für wenige Minuten genau jene Erfahrung der
        Auflösung nachempfinden, die Kusama selbst ihr ganzes Leben begleitet.</p>
        <p class="vb-intro"><strong>c) Selbstfürsorge durch bewusst gewählte Struktur:</strong>
        Die freiwillige Einweisung 1977 ist reine SE2-Logik: Statt weiter unkontrolliert der
        eigenen Fragilität ausgeliefert zu sein, wählte Kusama aktiv einen schützenden Rahmen, in
        dem Fürsorge für sich selbst überhaupt erst möglich wurde.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur Sprache des Werks selbst wurde:</strong>
        Bei kaum einer anderen Person in diesem Kompass verschmelzen Krankheit und Werk so
        vollständig: Die endlosen Punktmuster, für die Kusama weltberühmt ist, sind keine
        nachträgliche künstlerische Interpretation ihrer Halluzinationen, sondern deren direkte,
        unveränderte Wiedergabe.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Frida Kahlo:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida Kahlo (ebenfalls SE2w3)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren Lebensgeschichte ein
        fast identisches Grundmuster zeigt: eine selbsterhaltende Zwei mit Dreierflügel, deren
        Kunst nicht trotz, sondern direkt aus einer schweren, lebenslangen körperlichen bzw.
        psychischen Belastung entsteht – bei Kahlo aus chronischen Unfallfolgen und Schmerz, bei
        Kusama aus Halluzinationen und Depersonalisation. Beide machten das eigene Leiden nicht
        zum Geheimnis, sondern explizit zum Bildmotiv, und beide erreichten damit Weltruhm, der
        gerade auf dieser schonungslosen Offenheit beruht.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die Wahrnehmung selbst, bei einer Künstlerin, deren Beruf das Sehen ist?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren gesamtes künstlerisches
        Überleben davon abhängt, das eigene Innenleben in sichtbare Form zu übersetzen, liegt
        eine Deutung nahe: Ausgerechnet die Wahrnehmung selbst – das Sehen, das Erkennen der
        Grenze zwischen dem eigenen Körper und der Welt – wurde bei Kusama zum Ort der
        Erkrankung. Diese Deutung ist eine plausible Interpretation, kein belegter medizinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Halluzinationen oder Depersonalisation führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Kusamas Fall zeigen lässt, ist ein
        Muster im Umgang mit einer lebenslangen psychischen Erkrankung, das bei einer
        ausgeprägten selbsterhaltenden Zwei mit Dreierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Kusama ihr eigenes Enneagramm-Muster je bewusst kannte.
        Dennoch zeigt gerade ihr Fall eine seltene Ausnahme innerhalb dieses Musters: Statt die
        eigene Notlage über Jahrzehnte zu verdrängen oder zu verstecken, wie es viele andere
        SE2w3-Porträts in diesem Kompass zeigen, machte sie die Erkrankung selbst sehr früh zum
        offenen Zentrum ihres Handelns. Das ersetzt kein bewusstes Wissen um das eigene
        Enneagramm-Muster – aber es zeigt, dass der selbsterhaltende Instinkt der Zwei, richtig
        genutzt, auch zu einer außergewöhnlich klarsichtigen Form der Selbstfürsorge führen
        kann.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Kusamas</strong> selbsterhaltende Zwei mit
        Dreierflügel noch einmal ablesen: eine seit der Kindheit bestehende psychische
        Erkrankung, die sie weder verschwiegen noch sich von ihr zerstören ließ, sondern in ein
        bis zuletzt weitergeführtes, welterfolgreiches Werk verwandelte. Kusama starb am 14.
        August 2026 im Alter von 97 Jahren – fast fünfzig Jahre nach ihrer freiwilligen
        Einweisung, in derselben Klinik, aus der heraus sie bis zuletzt in ihr Atelier ging. Das
        Flusspferd, das sein Wasser nie verlassen hat – und gerade darin zu einer der
        einflussreichsten Stimmen der zeitgenössischen Kunst wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-yayoi-kusama", label:"Porträt: Yayoi Kusama (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function franciscoDeGoyaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-francisco-de-goya-portrait.jpg" alt="Francisco de Goya" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francisco de Goya</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · 1746–1828</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Francisco de Goya</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-francisco-de-goya">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen Aufstieg zum Ersten Hofmaler der
        spanischen Krone und seine kompromisslose künstlerische Wahrheit. Hier steht ein Kapitel
        im Mittelpunkt, das dort nur eine Randbemerkung blieb: eine schwere, bis heute nicht
        restlos geklärte Erkrankung 1793, die ihn taub zurückließ, und eine zweite
        lebensbedrohliche Krise 1819, die er in einem seiner eindringlichsten Gemälde direkt
        festhielt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Goya</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 schleudert inneres Erleben nach außen statt es zu verbergen; der
        Dreierflügel sorgt dafür, dass diese Intensität sichtbar und wirksam wird. Genau diese
        Kombination bestimmte auch seinen Umgang mit der eigenen Krankheit: nicht Verschweigen,
        sondern die unmittelbare Übersetzung von Leiden in ein Bild – bis in die eigenen vier
        Wände hinein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Plötzlicher Zusammenbruch 1793:</strong>
        Auf einer Reise nach Cádiz erlitt Goya im Alter von 46 Jahren eine schwere fieberhafte
        Erkrankung, die ihn monatelang ans Bett fesselte und sein bisheriges Leben abrupt
        unterbrach.</p>
        <p class="vb-intro"><strong>b) Ein breites, verwirrendes Symptombild:</strong>
        Kopfschmerzen, Schwindel, Halluzinationen, Sehstörungen und anhaltendes Ohrensausen
        traten gemeinsam auf – ein Bild, das Ärzte bis heute unterschiedlich deuten, von
        Bleivergiftung über eine Autoimmunerkrankung bis zu einer schweren Infektion.</p>
        <p class="vb-intro"><strong>c) Bleibende Taubheit als Folge:</strong>
        Die meisten akuten Symptome klangen im Lauf der folgenden Monate ab – die Taubheit
        blieb und begleitete Goya für den Rest seines 35 Jahre langen weiteren Lebens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rückzug aus der Lehrtätigkeit, nicht aus der Kunst:</strong>
        Goya gab seine Leitungsfunktion an der Akademie San Fernando auf, weil ihm die
        Taubheit das Unterrichten unmöglich machte – seine eigene malerische Produktion lief
        davon unberührt in unvermindertem Tempo weiter.</p>
        <p class="vb-intro"><strong>b) Eine zweite lebensbedrohliche Krise 1819:</strong>
        Mit 73 Jahren erkrankte Goya erneut schwer und wurde von seinem Arzt Eugenio García
        Arrieta gerettet – ein Ereignis, das er im selben Jahr in dem Gemälde
        "Selbstporträt mit Dr. Arrieta" festhielt, mit einer Widmung, die dem Arzt ausdrücklich
        für die Rettung seines Lebens dankt.</p>
        <p class="vb-intro"><strong>c) Krankheit wird direkt zu Bildmaterial:</strong>
        Anders als viele andere Künstler seiner Zeit verbarg Goya seine eigene Verletzlichkeit
        nicht hinter einer idealisierten Fassade, sondern malte sich selbst mit geöffnetem Mund,
        halb geschlossenen Augen und schmerzverkrampften Händen – ein Bild akuter Schwäche,
        ohne jede Beschönigung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein Haus, das seinen Namen vorwegnahm:</strong>
        1819, kurz vor seiner zweiten schweren Erkrankung, zog Goya in ein Landhaus außerhalb
        Madrids, das bereits vor seinem Einzug "Quinta del Sordo" hieß – wörtlich "Landhaus des
        Gehörlosen" (nicht zu verwechseln mit dem Vogel "Taube": gemeint ist hier "taub" als
        Substantiv, also der gehörlose Mann), benannt nach einem früheren, längst verstorbenen
        Besitzer, der ebenfalls taub gewesen war. Ein Zufall, den Goya sich nicht ausgesucht
        hatte, der aber sein eigenes Leben in den folgenden Jahren treffend beschrieb.</p>
        <p class="vb-intro"><strong>b) Die Wände als letzte, ungefragte Leinwand:</strong>
        In diesem Haus malte der bereits fast vollständig ertaubte Goya, ohne Auftrag und ohne
        Absicht auf eine Öffentlichkeit, die 14 "Schwarzen Gemälde" direkt auf die Wände seines
        Ess- und Wohnzimmers – ein Werk, das offenbar nur für ihn selbst bestimmt war.</p>
        <p class="vb-intro"><strong>c) Freiwilliges Exil trotz fortgeschrittenen Alters:</strong>
        1824, mit 78 Jahren, verließ Goya Spanien nach der Rückkehr der absolutistischen
        Herrschaft und zog nach Bordeaux – eine Entscheidung, die seine gesundheitliche
        Verletzlichkeit in den letzten Lebensjahren zusätzlich erhöhte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ungebrochenes Schaffen bis in die letzten Monate:</strong>
        Selbst in Bordeaux, körperlich stark geschwächt, fertigte Goya weiterhin Zeichnungen und
        Gemälde an – darunter das ungewöhnliche Spätwerk "Die Melkerin von Bordeaux", das
        Kunsthistoriker bereits als Vorwegnahme impressionistischer Maltechnik lesen.</p>
        <p class="vb-intro"><strong>b) Ein letzter, rascher Verfall:</strong>
        In seinen letzten beiden Lebenswochen erlitt Goya vermutlich eine Serie von
        Schlaganfällen, die zu fortschreitender Lähmung führten, bevor er am 16. April 1828 in
        Bordeaux starb.</p>
        <p class="vb-intro"><strong>c) Tod fernab der Heimat, mit 82 Jahren:</strong>
        Er starb im selbstgewählten Exil, weit entfernt vom spanischen Hof, dem er einst als
        Erster Hofmaler gedient hatte – ein Ende, das seine lebenslange Bereitschaft
        widerspiegelte, die eigene Unabhängigkeit über Sicherheit und Anerkennung zu stellen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kein Verstecken, sondern unmittelbare Übersetzung in Bildform:</strong>
        Dieselbe Fähigkeit, inneres Erleben ungefiltert nach außen zu wenden, die Goyas
        gesamtes Werk als Hofmaler und Kritiker seiner Zeit prägte, bestimmte auch seinen
        Umgang mit der eigenen Krankheit: Statt sie zu verbergen, machte er sie im
        "Selbstporträt mit Dr. Arrieta" zum ausdrücklichen Bildgegenstand.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und der Wille, gesehen zu werden – auch in der Schwäche:</strong>
        Wo eine introvertiertere Vier ihr Leiden vielleicht ganz für sich behalten hätte, ließ
        der Dreierflügel Goya auch seine eigene Verletzlichkeit zu einem Werk werden, das
        Betrachter bis heute unmittelbar berührt.</p>
        <p class="vb-intro"><strong>c) Rückzug ins eigene Haus statt Rückzug aus der Arbeit:</strong>
        Nach der Ertaubung zog sich Goya aus dem gesellschaftlichen Leben und der Lehre zurück,
        nicht aber aus seiner künstlerischen Schaffenskraft – die "Quinta del Sordo" wurde zum
        Ort, an dem sich seine Intensität ungebremst, nur ohne Publikum, weiter entlud.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zum unmittelbaren Bildgegenstand wurde:</strong>
        Goyas gesamtes Werk beruhte auf der schonungslosen Übersetzung von Wahrgenommenem in
        Bildsprache – Adel, Krieg, Aberglaube, und schließlich auch die eigene, alternde Verletzlichkeit
        wurden ohne Beschönigung festgehalten. Seine Krankheit war keine Ausnahme von diesem
        Prinzip, sondern seine konsequenteste, persönlichste Anwendung.</p>
        <p class="vb-intro"><strong>b) Die Taubheit als paradoxe Verstärkung, nicht als Dämpfung:</strong>
        Was man bei anderen Künstlern als Rückzug erwarten könnte, wirkte bei Goya gegenteilig:
        seine Bilder wurden nach der Ertaubung dunkler, direkter, kompromissloser – als hätte der
        Verlust des Gehörs die visuelle Intensität nach innen konzentriert, statt sie zu
        dämpfen.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Gehör?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren gesamte Kraft auf der unmittelbaren
        Verwandlung von Wahrnehmung in sichtbaren Ausdruck beruhte, liegt eine Deutung nahe:
        Ausgerechnet jener Sinn, der am unmittelbarsten mit der Außenwelt in Verbindung steht
        und am ehesten zu Rückzug hätte führen können, wurde zum Ausgangspunkt eines noch
        direkteren, noch unmittelbareren visuellen Ausdrucks. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu Gehörverlust führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Goyas Fall zeigen lässt, ist ein Muster im Umgang mit einem einschneidenden
        körperlichen Verlust, das bei einer ausgeprägten sexuellen Vier mit Dreierflügel
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Goya kannte sein eigenes Muster nicht – die sexuelle Vier mit Dreierflügel wandelt
        reflexhaft jede Erfahrung, auch die schmerzhafteste, in unmittelbaren sichtbaren
        Ausdruck um, statt sie je still zu verarbeiten, und genau dieses Muster lebte er bis in
        seine letzten Lebensmonate in Bordeaux unverändert aus. Wer die eigene Notwendigkeit,
        jede Erfahrung nach außen zu wenden, nicht als Muster erkennt, hört auch im eigenen
        Verstummen nicht auf, sie auszuleben.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Vier mit Dreierflügel erklärt bei <strong>Goya</strong> vieles am Verlauf
        seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der unmittelbaren
        Verwandlung von Wahrnehmung in sichtbaren Ausdruck beruhte, machte selbst sein eigenes
        Leiden zum Bildgegenstand – der Chihuahua, der auch ertaubt nicht verstummte, sondern
        auf den eigenen Wänden weiterbellte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-francisco-de-goya", label:"Porträt: Francisco de Goya (SX4w3) – Hofmaler und Chronist"},
        {route:"krankheitsportraets-voltaire", label:"Krankheitsporträt: Voltaire (SX4w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function alanTuringKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alan-turing-portrait.jpg" alt="Alan Turing – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alan Turing</p>
        <p class="krim-portrait-typ">SX5w4 · Sexueller Typ 5 mit Viererflügel · 1912–1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Igel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Tierentsprechung: Igel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alan Turing</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-alan-turing">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Pionierarbeit als Mathematiker und Kryptoanalytiker.
        Im Vordergrund dieser Seite steht ein anderes Kapitel: 1952 wurde Turing wegen homosexueller Handlungen
        verurteilt, die im Vereinigten Königreich zu dieser Zeit strafbar waren. Statt Gefängnis wählte er eine
        gerichtlich verordnete Hormonbehandlung (Östrogen-Injektionen, umgangssprachlich „chemische Kastration"),
        die über ein Jahr andauerte und erhebliche körperliche und psychische Folgen hatte. Er starb 1954 an einer
        Zyanidvergiftung, offiziell als Suizid eingestuft.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Turing</strong> ist dem <strong>sexuellen Typ 5 mit Viererflügel</strong> zugeordnet. Die
        sexuelle Fünf sucht nach Naranjo Vertrauen und vollständige Hingabe an eine einzige Idee oder Person,
        statt sich in Distanz zurückzuziehen wie die anderen Fünfer-Subtypen. Der Viererflügel bringt emotionale
        Tiefe und ein Gefühl des Andersseins hinzu – Turings vollständige Hingabe an sein mathematisches Denken war
        untrennbar mit dem Gefühl verbunden, in einer Gesellschaft zu leben, die ihn für sein Wesen kriminalisierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Anzeige nach einem Einbruch:</strong>
        1952 erstattete Turing Anzeige wegen eines Einbruchs in seine Wohnung – im Zuge der Ermittlungen kam seine
        Beziehung zu einem jungen Mann ans Licht, was zur Anklage wegen „grober Unsittlichkeit" führte.</p>
        <p class="vb-intro"><strong>b) Die Wahl zwischen Gefängnis und Behandlung:</strong>
        Vor die Wahl zwischen Haftstrafe und einer einjährigen Hormonbehandlung gestellt, entschied sich Turing für
        Letztere, um seine wissenschaftliche Arbeit fortsetzen zu können.</p>
        <p class="vb-intro"><strong>c) Beginn der Östrogen-Behandlung:</strong>
        Die synthetische Östrogen-Behandlung, die seine Libido unterdrücken sollte, begann 1952 und führte bereits
        in den ersten Monaten zu Gynäkomastie (Brustwachstum) und Gewichtszunahme.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Verlust der Sicherheitsfreigabe:</strong>
        Als Folge der Verurteilung wurde Turing seine Sicherheitsfreigabe für die Arbeit mit dem
        Geheimdienst GCHQ entzogen – eine Arbeit, die zuvor einen zentralen Teil seiner Identität als
        Wissenschaftler ausgemacht hatte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der wissenschaftlichen Arbeit trotz allem:</strong>
        Trotz der Behandlung und der gesellschaftlichen Ächtung setzte Turing seine Forschung zu mathematischer
        Biologie (Morphogenese) fort – ein Rückzug in ein rein intellektuelles, von Menschen relativ unabhängiges
        Feld.</p>
        <p class="vb-intro"><strong>c) Zunehmende gesellschaftliche Isolation:</strong>
        Die öffentliche Bekanntheit der Verurteilung in seinem unmittelbaren Umfeld verstärkte eine bereits
        vorhandene Tendenz zum Rückzug aus sozialen Kontakten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein öffentliches Klagen:</strong>
        Turing sprach nach außen kaum über die erlittene Behandlung oder ihre Folgen – ein für die sexuelle Fünf
        typisches Muster, innere Erfahrungen nicht auszustellen, sondern in sich zu verarbeiten.</p>
        <p class="vb-intro"><strong>b) Rückzug in symbolische, private Rituale:</strong>
        Freunde berichteten von einem zunehmend introvertierten, in sich gekehrten Verhalten in seinen letzten
        Lebensmonaten.</p>
        <p class="vb-intro"><strong>c) Der vergiftete Apfel als letztes Symbol:</strong>
        Neben seinem Bett fand sich ein teilweise gegessener, mit Zyanid präparierter Apfel – ein Bild, das bis
        heute stark mit seinem Andenken verknüpft ist, dessen genaue Bedeutung jedoch nie restlos geklärt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Verlust für die Wissenschaft mit nur 41 Jahren:</strong>
        Turings Tod beendete eine Karriere, die bereits die Grundlagen der modernen Informatik gelegt und einen
        entscheidenden Beitrag zur Entschlüsselung der deutschen Enigma-Verschlüsselung im Zweiten Weltkrieg
        geleistet hatte.</p>
        <p class="vb-intro"><strong>b) Offizielle Entschuldigung erst Jahrzehnte später:</strong>
        Die britische Regierung entschuldigte sich erst 2009 offiziell, 2013 erfolgte eine königliche Begnadigung
        – Turing selbst erlebte weder das eine noch das andere.</p>
        <p class="vb-intro"><strong>c) Symbol für staatlich sanktionierte Verfolgung:</strong>
        Sein Fall wurde zu einem der bekanntesten Beispiele für die strafrechtliche Verfolgung Homosexueller im
        20. Jahrhundert und prägt bis heute Debatten über nachträgliche Gerechtigkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug ins rein Intellektuelle als Schutzraum:</strong>
        Für die sexuelle Fünf mit Viererflügel wird das eigene Denken zum letzten unantastbaren Rückzugsort, wenn
        die äußere Welt bedrohlich wird – Turing vertiefte sich in seiner Krise noch stärker in abstrakte
        mathematische Fragen.</p>
        <p class="vb-intro"><strong>b) Keine Suche nach öffentlicher Solidarität:</strong>
        Statt öffentlich für seine Rechte zu kämpfen, verarbeitete Turing die Erfahrung fast ausschließlich
        privat – typisch für die introvertierte, mit sich selbst ringende Fünf.</p>
        <p class="vb-intro"><strong>c) Die Viererflügel-Note der stillen Verzweiflung:</strong>
        Der Viererflügel zeigt sich im tief empfundenen Gefühl des Andersseins, das durch die staatliche
        Verfolgung eine erdrückende äußere Bestätigung erhielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine von außen auferlegte, keine selbstgewählte Krankheitsgeschichte:</strong>
        Anders als bei den meisten anderen Fällen dieses Kompasses war Turings „Behandlung" keine Erkrankung im
        eigentlichen Sinn, sondern eine strafrechtlich erzwungene medizinische Maßnahme mit krankmachender Wirkung.</p>
        <p class="vb-intro"><strong>b) Rückzug als einzige verbliebene Handlungsmöglichkeit:</strong>
        Für eine sexuelle Fünf, deren Sicherheit im Vertrauen zu wenigen, ausgewählten Menschen und Ideen liegt,
        bedeutete die öffentliche Bloßstellung einen fundamentalen Angriff auf die eigene Schutzstrategie.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Rückzug ins Schweigen?</strong>
        Für eine sexuelle Fünf mit Viererflügel, die Vertrauen nur sehr selektiv vergibt, lässt sich das nahezu
        vollständige Schweigen über die erlittene Behandlung als letzte verbliebene Form der Selbstbestimmung
        lesen – wenn der Körper und die rechtliche Stellung bereits fremdbestimmt sind, bleibt die innere Welt der
        einzige noch kontrollierbare Raum. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Fünf mit Viererflügel zwangsläufig zu einem solchen Ende
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Turings Fall ist
        vor allem das Ergebnis staatlicher Verfolgung, nicht primär psychosomatisch zu erklären. Was sich an seinem
        Fall zeigen lässt, ist ein Muster im Umgang mit erzwungenem Leiden, das bei einer ausgeprägten sexuellen
        Fünf mit Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Turing kannte, wie die meisten Menschen, sein Enneagramm-Muster nicht bewusst. Ohne dieses Wissen verarbeitete
        er die erzwungene Behandlung fast ausschließlich im Rückzug, statt sich Unterstützung von außen zu holen –
        ein Zug, der ihm in seiner wissenschaftlichen Arbeit half, ihn in der persönlichen Krise aber zusätzlich
        isolierte. Wer das eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt, wiederholt es, bis
        keine andere Möglichkeit mehr bleibt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Fünf mit Viererflügel bestätigt sich bei <strong>Alan Turing</strong> in der Art, wie er auf
        die erzwungene Behandlung reagierte: mit stillem Rückzug in die eigene Gedankenwelt statt mit öffentlichem
        Widerstand. Der Igel, der sich einrollt, wenn die Welt zur Bedrohung wird, fand am Ende keinen Weg mehr
        zurück in die Offenheit – aber sein wissenschaftliches Werk überdauerte die Verfolgung, die ihn selbst
        nicht überleben ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-alan-turing", label:"Porträt: Alan Turing (SX5w4) – Lebenswerk"},
        {route:"krankheitsportraets-jean-jacques-rousseau", label:"Krankheitsporträt: Jean-Jacques Rousseau (SX5w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx5", label:"Subtyp-Profil SX5"},
      ])}
    </div>
  `);
}

export function franzVonAssisiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-von-assisi-portrait.jpg" alt="Franz von Assisi – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz von Assisi</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · 1181/82–1226</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz von Assisi</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-franz-von-assisi">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Ordensgründer. Im Vordergrund dieser
        Seite steht seine gesundheitliche Zuspitzung in den letzten Lebensjahren: eine fortschreitende Erblindung
        (vermutlich durch Trachom, verstärkt durch Fastenpraxis und Reisen im Nahen Osten), die 1224 nach eigenem
        Bericht und dem seiner Gefährten aufgetretenen Wundmale (Stigmata) sowie chronische Verdauungs- und
        Magenbeschwerden, die ihn zunehmend schwächten. Er starb 1226 im Alter von nur 44 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Franz von Assisi</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong> zugeordnet.
        Naranjo nannte die soziale Sieben den Kontratyp der Sieben: rastloses Bauen im Dienst der Gemeinschaft,
        nicht im Dienst des eigenen Genusses. Der Sechserflügel bringt Loyalität zu einer Sache oder Gemeinschaft
        hinzu – Franz gründete mit dem Franziskanerorden eine Institution, die weit über seinen eigenen Tod
        hinaus Bestand haben sollte, und blieb ihr auch mit fortschreitender Erblindung treu ergeben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Augenprobleme nach einer Reise in den Nahen Osten:</strong>
        Nach seiner Reise nach Ägypten und ins Heilige Land während des Fünften Kreuzzugs (1219) verschlechterte
        sich sein Augenlicht zunehmend – vermutlich durch eine dort erworbene Trachom-Infektion.</p>
        <p class="vb-intro"><strong>b) Verstärkung durch radikale Askese:</strong>
        Seine strenge, selbst auferlegte Fastenpraxis und der Verzicht auf jeglichen Komfort verschlimmerten die
        körperliche Schwächung zusätzlich.</p>
        <p class="vb-intro"><strong>c) Zunehmende Lichtempfindlichkeit:</strong>
        Zeitgenössische Berichte beschreiben eine wachsende Unfähigkeit, Tageslicht zu ertragen, Jahre vor
        seinem Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Stigmata von La Verna 1224:</strong>
        Zwei Jahre vor seinem Tod berichteten Franz und seine Gefährten von Wundmalen an Händen, Füßen und
        Seite, die den Kreuzigungswunden Christi ähnelten – ein Ereignis, das seinen Gesundheitszustand
        zusätzlich belastete.</p>
        <p class="vb-intro"><strong>b) Nahezu vollständige Erblindung:</strong>
        In seinen letzten beiden Lebensjahren war Franz nach übereinstimmenden Quellen praktisch blind.</p>
        <p class="vb-intro"><strong>c) Chronische Magen- und Verdauungsbeschwerden:</strong>
        Hinzu kamen anhaltende Magenprobleme, die zeitgenössische Biografen auf die jahrzehntelange, extreme
        Askese zurückführten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Sonnengesang trotz nahezu vollständiger Blindheit:</strong>
        In genau dieser Phase körperlichen Verfalls verfasste Franz 1224/25 seinen berühmten „Sonnengesang" –
        eines seiner bekanntesten Werke, entstanden nicht trotz, sondern mitten in der eigenen Krankheit.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Reisetätigkeit trotz Schwäche:</strong>
        Auch nach den ersten Anzeichen der Erblindung unternahm Franz weiterhin Reisen, um seinen Orden zu
        besuchen und zu ermutigen.</p>
        <p class="vb-intro"><strong>c) Verzicht auf verfügbare Behandlung:</strong>
        Erst spät und auf Drängen seiner Gefährten ließ sich Franz notdürftig medizinisch behandeln – seine
        eigene Haltung stellte den Dienst an der Gemeinschaft über die eigene Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod mit nur 44 Jahren:</strong>
        Franz starb am 3. Oktober 1226 in der Portiuncula-Kapelle bei Assisi, geschwächt von Jahren
        fortschreitender Erblindung und körperlichen Verfalls.</p>
        <p class="vb-intro"><strong>b) Heiligsprechung bereits zwei Jahre später:</strong>
        Bereits 1228 wurde Franz heiliggesprochen – seine Krankheitsgeschichte wurde Teil der Erzählung von
        seiner Hingabe bis zum letzten Atemzug.</p>
        <p class="vb-intro"><strong>c) Ein Orden, der ihn überdauerte:</strong>
        Der von ihm gegründete Franziskanerorden besteht bis heute mit weltweit Hunderttausenden Mitgliedern in
        verschiedenen Zweigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Schöpferische Aktivität trotz körperlichem Verfall:</strong>
        Für die soziale Sieben ist Stillstand kaum erträglich – selbst nahezu erblindet und geschwächt, schuf
        Franz mit dem Sonnengesang eines seiner bedeutendsten Werke.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel als Treue zur eigenen Gemeinschaft:</strong>
        Die fortgesetzten Besuche bei seinen Ordensbrüdern trotz Erblindung zeigen die Loyalität des
        Sechserflügels – die Bindung an die Gemeinschaft wog schwerer als die eigene Schonung.</p>
        <p class="vb-intro"><strong>c) Warnsignale zugunsten der Mission übergangen:</strong>
        Wie bei anderen Fällen der sozialen Sieben in diesem Kompass wurden frühe körperliche Warnsignale lange
        zugunsten der fortgesetzten Reise- und Gründungstätigkeit übergangen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kette sich verstärkender Leiden über gut ein Jahrzehnt:</strong>
        Von den ersten Augenproblemen nach 1219 bis zum Tod 1226 verlief Franz' Gesundheit in einer stetig
        fortschreitenden Verschlechterung, die er nie zum Anlass für Rückzug aus seiner Mission nahm.</p>
        <p class="vb-intro"><strong>b) Dienst an der Gemeinschaft bis zur völligen Erschöpfung:</strong>
        Für die soziale Sieben mit Sechserflügel steht die Sache – hier der Orden und seine Botschaft – über der
        eigenen körperlichen Unversehrtheit.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Erblindung und Erschöpfung, nicht Rückzug?</strong>
        Für eine soziale Sieben mit Sechserflügel, deren Sicherheit im beharrlichen Bauen an etwas Größerem
        liegt, lässt sich das Ignorieren der eigenen körperlichen Grenzen als Zuspitzung des eigenen
        Lebensmusters lesen: Die Mission durfte nicht enden, solange noch Kraft für sie vorhanden war. Diese
        Deutung wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben mit Sechserflügel zwangsläufig zu Erblindung führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Franz' Erblindung ist
        zudem eng mit einer wahrscheinlichen Infektionskrankheit und radikaler Askese verbunden, nicht rein
        psychosomatisch zu erklären. Was sich an seinem Fall zeigen lässt, ist ein Muster im Umgang mit
        fortschreitender Krankheit, das bei einer ausgeprägten sozialen Sieben mit Sechserflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Franz von Assisi kannte, wie fast alle Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen
        fand seine Hingabe an die eigene Mission keine Grenze, statt der fortschreitenden Erblindung
        rechtzeitig Rechnung zu tragen – ein Zug, der sein geistliches Werk unsterblich machte, ihn selbst aber
        weit vor seiner Zeit verzehrte. Wer das eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht
        kennt, wiederholt es, bis der Körper die Grenze setzt, die der Mensch selbst nicht zog.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Sechserflügel bestätigt sich bei <strong>Franz von Assisi</strong> in der
        Beharrlichkeit, mit der er seine Mission trotz fortschreitender Erblindung und körperlichen Verfalls
        fortsetzte – bis hin zu einem seiner bedeutendsten Werke, entstanden im nahezu vollständigen Dunkel. Der
        Biber baute bis zuletzt an seinem Werk, auch als die eigenen Augen ihm längst den Blick darauf
        verweigerten.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-franz-von-assisi", label:"Porträt: Franz von Assisi (SO7w6) – Lebenswerk"},
        {route:"krankheitsportraets-epikur", label:"Krankheitsporträt: Epikur (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function epikurKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-epikur-portrait.jpg" alt="Epikur – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Epikur</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · 341–270 v. Chr.</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Epikur</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-epikur">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Begründer des Epikureismus. Im
        Vordergrund dieser Seite steht seine letzte Lebensphase: Nach antiken Quellen (überliefert u. a. bei
        Diogenes Laertios) litt Epikur an schmerzhaften Nierensteinen und Harnverhalt, an denen er nach
        wochenlangem Leiden im Alter von 71 Jahren starb – begleitet von einem erhaltenen, an seinen Freund
        Idomeneus gerichteten Abschiedsbrief.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Epikur</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong> zugeordnet. Die soziale
        Sieben baut rastlos an etwas, das über die eigene Person hinausreicht – bei Epikur die Philosophenschule
        „Der Garten" und eine ganze Lehrtradition. Der Sechserflügel bringt Loyalität zu Freunden und einer
        gemeinsamen Gemeinschaft hinzu – sein letzter Brief galt nicht der eigenen Klage, sondern der Erinnerung
        an gemeinsam geführte philosophische Gespräche.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Schmerzhafte Nierensteine im Alter:</strong>
        Nach antiker Überlieferung entwickelte Epikur in seinen letzten Lebensjahren zunehmend schmerzhafte
        Nierensteine.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Lehrtätigkeit trotz Schmerzen:</strong>
        Trotz der beginnenden Beschwerden setzte er seine Arbeit im „Garten", seiner Philosophenschule in Athen,
        fort.</p>
        <p class="vb-intro"><strong>c) Zunehmender Harnverhalt:</strong>
        In der letzten Krankheitsphase kam nach den Quellen ein schmerzhafter Harnverhalt hinzu, der seine
        letzten zwei Lebenswochen prägte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein warmes Bad als einzige Linderung:</strong>
        Diogenes Laertios berichtet, Epikur habe sich in ein Bad mit warmem Wasser gesetzt, um etwas Erleichterung
        zu finden, kurz bevor er ungemischten Wein trank und seine Freunde bat, sich an seine Lehren zu
        erinnern.</p>
        <p class="vb-intro"><strong>b) Kein Verzicht auf philosophische Klarheit:</strong>
        Auch in äußerster körperlicher Not soll Epikur seine geistige Klarheit bis zuletzt bewahrt haben.</p>
        <p class="vb-intro"><strong>c) Der Abschiedsbrief an Idomeneus:</strong>
        In seinem letzten, überlieferten Brief beschreibt Epikur seine Schmerzen als „unerträglich", zugleich
        aber ausgeglichen durch „die Freude der Seele bei der Erinnerung an unsere Gespräche".</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die eigene Philosophie als Bewältigungsinstrument:</strong>
        Epikur wandte im eigenen Sterben genau die Prinzipien an, die er lehrte – Schmerz wird nicht verdrängt,
        aber durch Erinnerung an Freundschaft und Freude relativiert.</p>
        <p class="vb-intro"><strong>b) Kein Rückzug von der Gemeinschaft:</strong>
        Bis zuletzt blieb der Kontakt zu seinen Schülern und Freunden im „Garten" zentral für ihn.</p>
        <p class="vb-intro"><strong>c) Ein letztes Testament für die Schule:</strong>
        In seinem Testament regelte Epikur die Fortführung seiner Schule über seinen Tod hinaus – ein
        Vermächtnis, das der Gemeinschaft galt, nicht nur der eigenen Erinnerung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod im Jahr 270 v. Chr.:</strong>
        Epikur starb im Alter von 71 Jahren – für die Antike ein vergleichsweise hohes Alter.</p>
        <p class="vb-intro"><strong>b) Fortbestand der Schule über Jahrhunderte:</strong>
        Der „Garten" bestand nach seinem Tod noch Jahrhunderte fort und beeinflusste unter anderem den
        römischen Dichter Lukrez.</p>
        <p class="vb-intro"><strong>c) Der Sterbebericht als Teil der Lehre selbst:</strong>
        Die Art seines Sterbens wurde von Anhängern selbst als praktische Demonstration seiner eigenen
        Philosophie überliefert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Weiterlehren, solange irgend möglich:</strong>
        Für die soziale Sieben bleibt die eigene Mission auch im Angesicht des körperlichen Verfalls zentral –
        Epikur unterrichtete, solange es die Kräfte zuließen.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel als Treue zur Gemeinschaft im Sterben:</strong>
        Sein letzter Brief galt nicht der eigenen Klage, sondern der Erinnerung an gemeinsame Gespräche – ein
        Ausdruck der loyalen Bindung an Freunde, die der Sechserflügel hinzufügt.</p>
        <p class="vb-intro"><strong>c) Sinnstiftung statt Verzweiflung im Angesicht des Schmerzes:</strong>
        Statt sich dem Schmerz kampflos zu ergeben, verwandelte Epikur sein eigenes Sterben in eine letzte,
        gelebte Lehre.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein kurzer, aber gut überlieferter letzter Krankheitsverlauf:</strong>
        Die letzten Wochen von Epikurs Leben gehören zu den am detailliertesten überlieferten Sterbeberichten der
        antiken Philosophie.</p>
        <p class="vb-intro"><strong>b) Gemeinschaft als Trost bis zum letzten Atemzug:</strong>
        Für eine soziale Sieben mit Sechserflügel bleibt die Bindung an die eigene Gemeinschaft auch im Sterben
        der zentrale Halt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Erinnerung an Gespräche statt an den eigenen Schmerz?</strong>
        Für eine soziale Sieben mit Sechserflügel, deren Sicherheit im Dienst an einer Gemeinschaft liegt, lässt
        sich diese letzte Geste als konsequente Fortsetzung des eigenen Lebensmusters lesen: Auch im eigenen
        Sterben blieb die Aufmerksamkeit auf die anderen gerichtet, nicht auf sich selbst. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben mit Sechserflügel zwangsläufig zu Nierensteinen führt
        – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Epikurs
        Fall zeigen lässt, ist ein Muster im Umgang mit Schmerz und nahendem Tod, das bei einer ausgeprägten
        sozialen Sieben mit Sechserflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Epikur kannte naturgemäß kein Enneagramm-Modell. Ohne dieses Wissen lebte er sein Muster – Sinnstiftung
        und Gemeinschaftsbindung selbst im eigenen Leiden – bis zum letzten Atemzug konsequent aus, ohne es als
        Muster zu erkennen, sondern als philosophische Haltung zu verstehen. Wer das eigene Muster erkennt, kann
        bewusst gegensteuern; Epikur kannte es nicht, lebte es aber in einer Form, die bis heute als vorbildlich
        gilt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Sechserflügel bestätigt sich bei <strong>Epikur</strong> in der Konsequenz, mit der
        er die eigene Philosophie noch im eigenen Sterben lebte – nicht die eigene Klage, sondern die Erinnerung
        an gemeinsame Gespräche stand im letzten Brief im Vordergrund. Der Biber baute bis zum letzten Moment an
        seinem Werk, indem er selbst sein eigenes Sterben zu dessen Bestätigung machte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-epikur", label:"Porträt: Epikur (SO7w6) – Lebenswerk"},
        {route:"krankheitsportraets-franz-von-assisi", label:"Krankheitsporträt: Franz von Assisi (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function klaraVonAssisiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-klara-von-assisi-portrait.jpg" alt="Klara von Assisi – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Klara von Assisi</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel · 1194–1253</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Klara von Assisi</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-klara-von-assisi">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk als Gründerin des Klarissenordens. Im
        Vordergrund dieser Seite steht eine chronische Krankheit, die sie nach übereinstimmenden Quellen die
        letzten rund 27 bis 29 Jahre ihres Lebens weitgehend an ihr Bett fesselte – die genaue Diagnose ist
        historisch nicht gesichert, Vermutungen reichen von einer chronischen Autoimmunerkrankung bis zu den
        Folgen jahrzehntelanger extremer Askese.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Klara von Assisi</strong> ist dem <strong>selbsterhaltenden Typ 3 mit Zweierflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Drei den Kontratyp der Drei: Können statt Glänzen,
        Bescheidenheit statt Selbstinszenierung – bei gleichbleibender innerer Energie und Funktionsfähigkeit.
        Der Zweierflügel bringt Fürsorge für andere hinzu – Klara leitete ihren Orden über Jahrzehnte weiter,
        obwohl sie selbst chronisch krank und bettlägerig war, und sorgte sich dabei sichtbar mehr um ihre
        Mitschwestern als um sich selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn nach Jahren strenger Askese:</strong>
        Nach über einem Jahrzehnt radikalen Verzichts – kaum Nahrung, Schlaf auf dem bloßen Boden, Barfußgehen –
        begann sich Klaras Gesundheit spürbar zu verschlechtern.</p>
        <p class="vb-intro"><strong>b) Zunehmende körperliche Schwäche:</strong>
        Zeitgenössische Quellen beschreiben eine fortschreitende allgemeine Schwäche, die ihre Beweglichkeit
        zunehmend einschränkte.</p>
        <p class="vb-intro"><strong>c) Weiterführung ihrer Aufgaben trotz erster Symptome:</strong>
        Trotz erster gesundheitlicher Warnzeichen leitete Klara ihren Orden zunächst unvermindert weiter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nahezu drei Jahrzehnte Bettlägerigkeit:</strong>
        Von etwa 1224 bis zu ihrem Tod 1253 war Klara nach überwiegender Quellenlage weitgehend bettlägerig –
        knapp drei Jahrzehnte ihres 59-jährigen Lebens.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Leitung des Ordens vom Krankenbett aus:</strong>
        Trotz ihrer Bettlägerigkeit leitete sie den von ihr gegründeten Orden der „Armen Damen" (später
        Klarissen) weiter bis zu ihrem Tod.</p>
        <p class="vb-intro"><strong>c) Ein letzter Kampf um die Ordensregel:</strong>
        Auf dem Sterbebett erreichte sie 1253 die päpstliche Bestätigung ihrer eigenen, besonders strengen
        Ordensregel – zwei Tage vor ihrem Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Funktionsfähigkeit trotz chronischer Krankheit:</strong>
        Anders als bei einer öffentlich inszenierten Erkrankung blieb Klara trotz ihrer Bettlägerigkeit
        organisatorisch und geistlich voll wirksam – die Krankheit wurde nie zum Rückzug aus der Verantwortung.</p>
        <p class="vb-intro"><strong>b) Sorge um die Gemeinschaft statt um sich selbst:</strong>
        Überlieferungen betonen wiederholt, dass Klara sich noch auf dem Sterbebett stärker um das Wohlergehen
        ihrer Mitschwestern sorgte als um die eigenen Schmerzen.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Klagen über die eigene Krankheit:</strong>
        Ihre Krankheit wurde von ihr selbst nie als Leidensgeschichte in den Vordergrund gestellt, sondern
        weitgehend still ertragen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod 1253, zwei Tage nach der päpstlichen Bestätigung:</strong>
        Klara starb am 11. August 1253, wenige Tage nachdem Papst Innozenz IV. ihre Ordensregel offiziell
        bestätigt hatte – ein Ziel, das sie fast dreißig Jahre lang trotz Krankheit verfolgt hatte.</p>
        <p class="vb-intro"><strong>b) Heiligsprechung bereits zwei Jahre später:</strong>
        Bereits 1255 wurde Klara heiliggesprochen.</p>
        <p class="vb-intro"><strong>c) Ein bis heute bestehender Orden:</strong>
        Der Klarissenorden besteht bis heute weltweit mit tausenden Mitgliedern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Funktionieren statt Zusammenbrechen:</strong>
        Für die selbsterhaltende Drei bedeutet Krankheit keinen Grund, die eigene Aufgabe aufzugeben – Klara
        hielt ihre Leitungsfunktion über nahezu drei Jahrzehnte chronischer Krankheit aufrecht.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel als Sorge um andere im eigenen Leiden:</strong>
        Die wiederholt überlieferte Sorge um ihre Mitschwestern statt um sich selbst zeigt die fürsorgliche Note
        des Zweierflügels, selbst unter extremer eigener Belastung.</p>
        <p class="vb-intro"><strong>c) Kein Bedürfnis nach sichtbarem Mitleid:</strong>
        Anders als Subtypen, die Krankheit öffentlich zur Schau stellen, verlangte Klara nach den Quellen kaum
        nach Aufmerksamkeit für das eigene Leiden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Fast drei Jahrzehnte ununterbrochener chronischer Krankheit:</strong>
        Kaum ein anderer Fall in diesem Kompass zeigt eine derart lange, kontinuierliche Krankheitsphase bei
        gleichzeitig fortgeführter Führungsrolle.</p>
        <p class="vb-intro"><strong>b) Funktion und Verantwortung trotz völliger körperlicher Einschränkung:</strong>
        Für eine selbsterhaltende Drei, deren Identität eng mit dem eigenen Funktionieren verknüpft ist, blieb
        die Leitungsrolle auch im bettlägerigen Zustand zentral.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Festhalten an der Verantwortung trotz Bettlägerigkeit?</strong>
        Für eine selbsterhaltende Drei mit Zweierflügel, deren Sicherheit im eigenen, verlässlichen Funktionieren
        und in der Fürsorge für andere liegt, lässt sich das Festhalten an der Ordensleitung trotz fast völliger
        körperlicher Einschränkung als Zuspitzung des eigenen Lebensmusters lesen: Selbst der Körper durfte die
        Funktion nicht vollständig außer Kraft setzen. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei mit Zweierflügel zwangsläufig zu chronischer
        Bettlägerigkeit führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Klaras Erkrankung steht zudem im Zusammenhang mit jahrzehntelanger extremer Askese, nicht rein
        psychosomatisch zu erklären. Was sich an ihrem Fall zeigen lässt, ist ein Muster im Umgang mit
        chronischer Krankheit, das bei einer ausgeprägten selbsterhaltenden Drei mit Zweierflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Klara kannte, wie fast alle Menschen ihrer Zeit, kein Enneagramm-Modell. Ohne dieses Wissen setzte sich ihr
        Muster – Funktionieren und Fürsorge selbst unter extremer körperlicher Belastung – unwidersprochen durch, statt
        sich selbst frühzeitig Schonung zuzugestehen. Wer das eigene Muster erkennt, kann bewusst gegensteuern;
        wer es nicht kennt, funktioniert weiter, bis der Körper keine andere Wahl mehr lässt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Drei mit Zweierflügel bestätigt sich bei <strong>Klara von Assisi</strong> in der
        Beharrlichkeit, mit der sie ihre Führungsrolle fast drei Jahrzehnte lang trotz chronischer,
        bettlägerig machender Krankheit aufrechterhielt – bis zum letzten Erfolg, der Bestätigung ihrer
        Ordensregel, zwei Tage vor ihrem Tod. Der Waschbär arbeitete leise weiter, auch als der eigene Körper
        längst nicht mehr mitspielte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-klara-von-assisi", label:"Porträt: Klara von Assisi (SE3w2) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

export function jeanJacquesRousseauKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jean-jacques-rousseau-portrait.jpg" alt="Jean-Jacques Rousseau – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jean-Jacques Rousseau</p>
        <p class="krim-portrait-typ">SX5w4 · Sexueller Typ 5 mit Viererflügel · 1712–1778</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Igel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Tierentsprechung: Igel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jean-Jacques Rousseau</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jean-jacques-rousseau">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Philosoph. Im Vordergrund dieser Seite
        stehen zwei ineinandergreifende Krankheitslinien: ein über Jahrzehnte dokumentiertes chronisches
        Harnleiden (vermutlich eine angeborene Fehlbildung der Harnwege) mit wiederkehrenden schmerzhaften
        Episoden, sowie ein zunehmender, in seinen letzten Lebensjahren stark ausgeprägter Verfolgungswahn, den
        er selbst in seinen „Bekenntnissen" und den „Träumereien eines einsamen Spaziergängers" verarbeitete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Rousseau</strong> ist dem <strong>sexuellen Typ 5 mit Viererflügel</strong> zugeordnet – demselben
        Subtyp wie Friedrich Nietzsche und Alan Turing in diesem Kompass. Die sexuelle Fünf sucht vollständige,
        fast verschmelzende Hingabe an eine ausgewählte Idee oder wenige Menschen. Der Viererflügel bringt
        emotionale Intensität und ein tiefes Gefühl des Andersseins hinzu – Rousseaus radikale Introspektion in
        den „Bekenntnissen", eines der ersten wirklich intimen Selbstporträts der europäischen Literatur, zeigt
        genau diese Kombination.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Chronische Harnbeschwerden von Jugend an:</strong>
        Rousseau berichtete zeitlebens von wiederkehrenden, schmerzhaften Problemen beim Wasserlassen, die ihn
        bereits in jungen Jahren begleiteten.</p>
        <p class="vb-intro"><strong>b) Erste Anzeichen von Misstrauen gegenüber früheren Weggefährten:</strong>
        Ab den 1750er-Jahren entwickelte sich ein zunehmendes Misstrauen gegenüber ehemaligen Freunden und
        Förderern, darunter Diderot und andere Aufklärer.</p>
        <p class="vb-intro"><strong>c) Verschärfung nach der Veröffentlichung von ›Émile‹ 1762:</strong>
        Nach der Verurteilung und Verbrennung seines Werks „Émile" und der folgenden Flucht durch Europa
        verstärkte sich sowohl das körperliche Leiden als auch das Misstrauen erheblich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ausgeprägter Verfolgungswahn in den letzten Lebensjahren:</strong>
        Rousseau war überzeugt, Opfer einer weitreichenden Verschwörung ehemaliger Freunde, Philosophen und
        Regierungen zu sein – eine Überzeugung, die sein gesamtes Spätwerk durchzieht.</p>
        <p class="vb-intro"><strong>b) Anhaltendes chronisches Harnleiden:</strong>
        Die körperlichen Beschwerden bestanden parallel zum psychischen Leiden bis zu seinem Tod fort.</p>
        <p class="vb-intro"><strong>c) Radikaler Rückzug aus dem gesellschaftlichen Leben:</strong>
        In seinen letzten Lebensjahren zog sich Rousseau zunehmend aus dem literarischen und gesellschaftlichen
        Leben von Paris zurück, unternahm einsame botanische Spaziergänge.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Literarische Verarbeitung statt Verdrängung:</strong>
        Statt sein Misstrauen und seine Ängste zu verbergen, machte Rousseau sie explizit zum Gegenstand seiner
        „Bekenntnisse" und der „Träumereien eines einsamen Spaziergängers" – radikale Offenheit über die eigene
        innere Verfassung.</p>
        <p class="vb-intro"><strong>b) Rückzug in die Natur als Zuflucht:</strong>
        Botanik und einsame Wanderungen wurden für ihn zum wichtigsten Rückzugsort vor einer als feindlich
        erlebten Gesellschaft.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes Schreiben trotz Verfolgungswahn:</strong>
        Auch in tiefstem Misstrauen gegenüber nahezu jedem in seinem Umfeld setzte Rousseau seine
        schriftstellerische Arbeit fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod 1778 in Ermenonville:</strong>
        Rousseau starb 1778 auf dem Landsitz eines Gönners, kurz nach Fertigstellung der „Träumereien" – nach
        heutiger Einschätzung wahrscheinlich an einem Schlaganfall oder Herzversagen.</p>
        <p class="vb-intro"><strong>b) Ein hinterlassenes Werk radikaler Selbstoffenbarung:</strong>
        Die „Bekenntnisse" gelten bis heute als eines der einflussreichsten autobiografischen Werke der
        europäischen Literaturgeschichte.</p>
        <p class="vb-intro"><strong>c) Nachträgliche Rehabilitierung:</strong>
        1794, sechzehn Jahre nach seinem Tod, wurden seine sterblichen Überreste in das Panthéon in Paris
        überführt – eine posthume Anerkennung, die er zu Lebzeiten nie erfuhr.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug als Schutzreaktion:</strong>
        Für die sexuelle Fünf ist der Rückzug aus einer als bedrohlich erlebten Welt die naheliegendste
        Schutzstrategie – Rousseaus zunehmende Isolation in den letzten Lebensjahren zeigt dieses Muster in
        extremer Form.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel als radikale emotionale Offenlegung:</strong>
        Statt sein inneres Erleben zu verbergen, machte Rousseau es in den „Bekenntnissen" zum literarischen
        Hauptgegenstand – eine für den Viererflügel typische Bereitschaft, die eigene emotionale Wahrheit
        schonungslos offenzulegen.</p>
        <p class="vb-intro"><strong>c) Körperliches Leiden als Verstärker des Misstrauens:</strong>
        Das anhaltende, schmerzhafte Harnleiden dürfte die ohnehin vorhandene Neigung zu Misstrauen und
        Rückzug zusätzlich verstärkt haben.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Zwei parallele Leidenslinien über Jahrzehnte:</strong>
        Das chronische Harnleiden und der zunehmende Verfolgungswahn verliefen bei Rousseau über Jahrzehnte
        parallel und verstärkten sich vermutlich gegenseitig.</p>
        <p class="vb-intro"><strong>b) Rückzug als durchgängige Konstante:</strong>
        Für eine sexuelle Fünf, deren Sicherheit im selektiven Vertrauen zu wenigen Menschen liegt, wurde der
        fortschreitende Vertrauensverlust zu nahezu jedem im eigenen Umfeld zu einer existenziellen Bedrohung.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Verfolgungswahn und Rückzug?</strong>
        Für eine sexuelle Fünf mit Viererflügel, deren Schutzstrategie im Rückzug und deren emotionale Tiefe im
        Gefühl des Andersseins liegt, lässt sich der zunehmende Verfolgungswahn als Zuspitzung des eigenen
        Lebensmusters lesen: Wo Vertrauen zur einzigen Form von Nähe wird, wird der Verlust dieses Vertrauens
        existenziell bedrohlich. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Fünf mit Viererflügel zwangsläufig zu Verfolgungswahn
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Rousseaus
        Verfolgungswahn ist zudem teilweise durch reale Konflikte (Bücherverbrennung, Ausweisungen, öffentliche
        Anfeindungen) mitbegründet, nicht rein psychosomatisch zu erklären. Was sich an seinem Fall zeigen
        lässt, ist ein Muster im Umgang mit chronischem Leiden und wachsendem Misstrauen, das bei einer
        ausgeprägten sexuellen Fünf mit Viererflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Rousseau kannte, wie alle Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen bestimmte sein
        Muster aus Rückzug und tiefem Misstrauen ungehindert sein Leben, statt es als wiederkehrendes eigenes Verhalten
        zu erkennen und ihm bewusst gegenzusteuern – ein Zug, der ihm literarisch beispiellose Offenheit
        ermöglichte, ihn persönlich aber zunehmend isolierte. Wer das eigene Muster erkennt, kann bewusst
        gegensteuern; wer es nicht kennt, wiederholt es, bis kaum noch jemand übrig bleibt, dem vertraut wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Fünf mit Viererflügel bestätigt sich bei <strong>Jean-Jacques Rousseau</strong> in der
        Konsequenz, mit der er sowohl sein körperliches Leiden als auch sein wachsendes Misstrauen literarisch
        radikal offenlegte, statt es zu verbergen. Der Igel, der sich einrollt, wenn die Welt zur Bedrohung wird,
        fand in der schriftstellerischen Selbstoffenbarung einen Weg, das eigene Innere trotz allem sichtbar zu
        machen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jean-jacques-rousseau", label:"Porträt: Jean-Jacques Rousseau (SX5w4) – Lebenswerk"},
        {route:"krankheitsportraets-alan-turing", label:"Krankheitsporträt: Alan Turing (SX5w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx5", label:"Subtyp-Profil SX5"},
      ])}
    </div>
  `);
}

export function arthurRimbaudKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-arthur-rimbaud-portrait.jpg" alt="Arthur Rimbaud – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arthur Rimbaud</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · 1854–1891</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Arthur Rimbaud</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-arthur-rimbaud">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Dichter und späterer Kaufmann in
        Afrika. Im Vordergrund dieser Seite steht seine letzte Krankheitsphase: 1891 wurde bei Rimbaud ein
        Knochentumor (vermutlich ein Synovialsarkom) im rechten Knie diagnostiziert, der zur Amputation des
        Beins in Marseille führte. Er starb nur wenige Monate später, im November 1891, im Alter von 37 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Rimbaud</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong> zugeordnet. Die
        sexuelle Vier kennt keine Halbheiten – ihre Intensität wird vollständig gelebt, ohne Kompromiss. Der
        Dreierflügel bringt Ehrgeiz und die Fähigkeit hinzu, sich radikal neu zu erfinden – nach seinem Rückzug
        aus der Dichtung mit nur 21 Jahren baute sich Rimbaud in Afrika ein komplett neues Leben als Kaufmann
        auf. Genau diese kompromisslose Konsequenz zeigte sich auch im Umgang mit seiner tödlichen Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Schmerzen im rechten Knie in Äthiopien:</strong>
        Ende 1890/Anfang 1891 klagte Rimbaud, der zu dieser Zeit als Kaufmann in Harar (Äthiopien) lebte, über
        zunehmende Schmerzen und eine Schwellung im rechten Knie.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Arbeit trotz Schmerzen:</strong>
        Trotz der Schmerzen setzte er seine Handelsgeschäfte zunächst fort, in der Hoffnung, es handle sich um
        eine vorübergehende Beschwerde.</p>
        <p class="vb-intro"><strong>c) Eine schmerzhafte Reise zur Küste:</strong>
        Als die Schmerzen unerträglich wurden, ließ sich Rimbaud über zwölf Tage auf einer improvisierten
        Trage 300 Kilometer zur Küste nach Zeila transportieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Diagnose und Amputation in Marseille:</strong>
        Nach seiner Ankunft in Marseille im Mai 1891 wurde ihm das rechte Bein oberhalb des Knies amputiert –
        die Ärzte diagnostizierten einen bösartigen Knochentumor.</p>
        <p class="vb-intro"><strong>b) Kurzer Aufenthalt bei der Familie:</strong>
        Nach der Operation reiste Rimbaud zu seiner Familie nach Roche, kehrte aber schon wenige Wochen später
        aufgrund anhaltender Schmerzen und weiterer Komplikationen nach Marseille zurück.</p>
        <p class="vb-intro"><strong>c) Rasche Ausbreitung der Erkrankung:</strong>
        Der Krebs breitete sich in den folgenden Monaten weiter aus, vermutlich mit Metastasen, die zunehmende
        Lähmungserscheinungen verursachten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ungeschönte Briefe an die Familie:</strong>
        In seinen letzten Lebensmonaten schrieb Rimbaud an seine Schwester Isabelle und seine Mutter
        bemerkenswert direkte, schonungslose Briefe über sein Leiden, ohne es zu beschönigen.</p>
        <p class="vb-intro"><strong>b) Pläne für die Rückkehr nach Afrika bis zuletzt:</strong>
        Selbst im fortgeschrittenen Krankheitsstadium plante Rimbaud noch eine Rückkehr in seine Handelsgeschäfte
        in Afrika – ein Zeichen seiner kompromisslosen Weigerung, sich der Krankheit zu ergeben.</p>
        <p class="vb-intro"><strong>c) Kein Rückgriff auf sein dichterisches Frühwerk:</strong>
        Trotz seiner Berühmtheit als Dichter sprach Rimbaud in seinen letzten Monaten so gut wie nie über seine
        literarische Vergangenheit – seine Aufmerksamkeit galt bis zuletzt seinem neuen Leben als Kaufmann.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod im November 1891:</strong>
        Rimbaud starb am 10. November 1891 im Krankenhaus von Marseille, betreut von seiner Schwester Isabelle,
        im Alter von nur 37 Jahren.</p>
        <p class="vb-intro"><strong>b) Postumer literarischer Ruhm:</strong>
        Erst nach seinem Tod wuchs sein Ruhm als einer der einflussreichsten Dichter der Moderne stetig weiter,
        weit über das hinaus, was er zu Lebzeiten erlebte.</p>
        <p class="vb-intro"><strong>c) Ein bis heute rätselhafter Bruch:</strong>
        Der radikale Bruch zwischen seiner kurzen, intensiven Dichterkarriere und seinem späteren Leben als
        Händler bleibt bis heute Gegenstand literaturwissenschaftlicher Deutung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Keine Halbheiten, auch nicht im Leiden:</strong>
        Für die sexuelle Vier gibt es kein gemäßigtes Ertragen – Rimbauds ungeschönte, direkte Briefe über sein
        Leiden zeigen dieselbe Kompromisslosigkeit, die schon seine Dichtung und später seinen Lebensbruch nach
        Afrika prägte.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als Weigerung aufzugeben:</strong>
        Die fortgesetzten Pläne für eine Rückkehr nach Afrika trotz fortgeschrittener Krankheit zeigen den
        zielstrebigen, nie aufgebenden Ehrgeiz des Dreierflügels – selbst im Angesicht des Todes wurde nicht
        resigniert.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit statt Beschönigung:</strong>
        Wie bei Francisco de Goya, der seine Krankheit ungeschminkt ins Bild setzte, zeigt sich bei Rimbaud eine
        seltene Offenheit im Umgang mit dem eigenen Leiden – kein Verschweigen, sondern eine schonungslose
        Beschreibung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein extrem kurzer, aber radikaler Krankheitsverlauf:</strong>
        Von den ersten Schmerzen bis zum Tod vergingen weniger als ein Jahr – eine kurze, aber durch die
        Amputation und die schonungslose eigene Beschreibung besonders eindringliche letzte Lebensphase.</p>
        <p class="vb-intro"><strong>b) Konsequenz bis zum Schluss:</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren Leben bereits von radikalen Brüchen und kompromissloser
        Konsequenz geprägt war, fügt sich der Umgang mit der eigenen tödlichen Erkrankung nahtlos in dieses
        Muster ein.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ungeschönte Offenheit statt Verdrängung?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren Identität auf vollständiger, unverstellter Intensität
        beruht, lässt sich die schonungslose Offenheit in den letzten Briefen als konsequente Fortsetzung des
        eigenen Lebensmusters lesen: Auch das eigene Sterben durfte nicht beschönigt werden. Diese Deutung wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier mit Dreierflügel zwangsläufig zu Knochenkrebs führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Rimbauds
        Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen Diagnose, das bei einer ausgeprägten
        sexuellen Vier mit Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Rimbaud kannte, wie die meisten Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen brach sich
        seine Kompromisslosigkeit auch im eigenen Sterben ungehindert Bahn, statt sich selbst Schonung oder Trost
        in Beschönigung zuzugestehen – ein Zug, der seiner Dichtung und seinem späteren Leben dieselbe radikale
        Wucht verlieh, ihm aber auch in seiner letzten Lebensphase keine mildernde Distanz erlaubte. Wer das
        eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt, lebt es bis zum letzten Brief
        unverändert weiter.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Vier mit Dreierflügel bestätigt sich bei <strong>Arthur Rimbaud</strong> in der
        kompromisslosen Offenheit, mit der er selbst in den letzten Monaten seines Lebens über sein Leiden
        schrieb, und in der zielstrebigen Weigerung, seine Pläne für die Zukunft trotz tödlicher Diagnose
        aufzugeben. Der Chihuahua kennt keine Halbheiten – auch nicht im eigenen Sterben.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-arthur-rimbaud", label:"Porträt: Arthur Rimbaud (SX4w3) – Lebenswerk"},
        {route:"krankheitsportraets-jean-paul-sartre", label:"Krankheitsporträt: Jean-Paul Sartre (SX4w5)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function paulGauguinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-paul-gauguin-portrait.jpg" alt="Paul Gauguin – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Paul Gauguin</p>
        <p class="krim-portrait-typ">SX8w7 · Sexueller Typ 8 mit Siebenerflügel · 1848–1903</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Paul Gauguin</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-paul-gauguin">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Maler des Postimpressionismus. Im
        Vordergrund dieser Seite steht sein gesundheitlicher Verfall in den letzten Lebensjahren auf Tahiti und
        den Marquesas-Inseln: eine Syphilis-Infektion mit fortschreitenden Symptomen, ein Suizidversuch mit
        Arsen 1897/98, offene, schlecht heilende Beinwunden sowie eine schwere Herzschwäche, an der er 1903 im
        Alter von 54 Jahren starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Gauguin</strong> ist dem <strong>sexuellen Typ 8 mit Siebenerflügel</strong> zugeordnet. Die
        sexuelle Acht sucht Intensität in kompromisslosem, unmittelbarem Handeln, nicht in Zurückhaltung. Der
        Siebenerflügel bringt Rastlosigkeit und den Wunsch nach immer neuen Erfahrungsräumen hinzu – Gauguins
        radikaler Bruch mit seinem bürgerlichen Leben in Frankreich und sein wiederholter Aufbruch in immer
        entlegenere Teile der Südsee zeigen genau diese Kombination. Genau diese Rastlosigkeit setzte sich auch
        im selbstzerstörerischen Umgang mit der eigenen Gesundheit fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Infektion nach der Ankunft in Tahiti:</strong>
        Wenige Jahre nach seiner Ankunft in Tahiti 1891 zeigte Gauguin erste Anzeichen einer
        Syphilis-Infektion, deren genauer Zeitpunkt der Ansteckung nicht sicher belegt ist.</p>
        <p class="vb-intro"><strong>b) Zunehmende Herzprobleme:</strong>
        Parallel dazu entwickelte sich eine fortschreitende Herzschwäche, die seine körperliche Belastbarkeit
        zunehmend einschränkte.</p>
        <p class="vb-intro"><strong>c) Offene Wunden an den Beinen:</strong>
        Chronische, schlecht heilende Geschwüre an den Beinen, vermutlich eine Folge der Syphilis, machten ihm
        das Gehen zunehmend schwer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Suizidversuch mit Arsen 1897/98:</strong>
        Nach dem Tod seiner Tochter Aline und in finanzieller sowie körperlicher Notlage unternahm Gauguin
        einen Suizidversuch mit Arsen, den er überlebte.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Arbeit trotz körperlichem Verfall:</strong>
        Trotz der Schmerzen und der zunehmenden Immobilität malte Gauguin weiter, unter anderem sein
        großformatiges Hauptwerk ›Woher kommen wir? Was sind wir? Wohin gehen wir?‹, das er kurz nach dem
        Suizidversuch vollendete.</p>
        <p class="vb-intro"><strong>c) Umzug auf die abgelegeneren Marquesas-Inseln:</strong>
        1901 zog Gauguin trotz seines schlechten Gesundheitszustands noch weiter von der Zivilisation weg, auf
        die noch entlegeneren Marquesas-Inseln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Konfliktbereitschaft bis zuletzt:</strong>
        Auch krank und geschwächt legte sich Gauguin auf den Marquesas-Inseln mit der katholischen Kirche und
        den französischen Kolonialbehörden an, unter anderem wegen seiner Unterstützung der einheimischen
        Bevölkerung gegen koloniale Willkür.</p>
        <p class="vb-intro"><strong>b) Selbstmedikation statt ärztlicher Behandlung:</strong>
        Gauguin behandelte seine Schmerzen weitgehend in Eigenregie, unter anderem mit Morphium und Alkohol,
        statt sich in regelmäßige ärztliche Behandlung zu begeben.</p>
        <p class="vb-intro"><strong>c) Keine Rückkehr nach Europa trotz Krankheit:</strong>
        Trotz wiederholter gesundheitlicher Krisen entschied sich Gauguin bewusst gegen eine Rückkehr nach
        Frankreich, wo eine bessere medizinische Versorgung verfügbar gewesen wäre.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod 1903 auf den Marquesas-Inseln:</strong>
        Gauguin starb am 8. Mai 1903 auf Hiva Oa, vermutlich an einem Herzinfarkt als Folge seiner
        fortgeschrittenen Syphilis-Erkrankung – weit entfernt von Familie und europäischer Kunstwelt.</p>
        <p class="vb-intro"><strong>b) Postumer Ruhm als Wegbereiter der Moderne:</strong>
        Erst nach seinem Tod wurde Gauguins Werk als eine der zentralen Wegbereitungen für den Expressionismus
        und die moderne Malerei umfassend anerkannt.</p>
        <p class="vb-intro"><strong>c) Ein bis heute umstrittenes Erbe:</strong>
        Sein Umgang mit jungen einheimischen Frauen auf Tahiti und den Marquesas-Inseln, teils minderjährig,
        wird in der heutigen Forschung kritisch und unumwunden als Missbrauch eingeordnet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kompromissloses Handeln auch gegen den eigenen Körper:</strong>
        Für die sexuelle Acht ist Zurückhaltung fremd – Gauguins Weigerung, sich zu schonen oder medizinische
        Hilfe zu suchen, zeigt dieselbe kompromisslose Direktheit, die auch seine Konflikte mit Kirche und
        Kolonialverwaltung prägte.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel als Flucht nach vorn, immer weiter weg:</strong>
        Der Umzug auf die noch entlegeneren Marquesas-Inseln trotz sich verschlechternder Gesundheit zeigt die
        Rastlosigkeit des Siebenerflügels – nicht Rückzug zur Genesung, sondern weiterer Aufbruch.</p>
        <p class="vb-intro"><strong>c) Schöpferische Kraft bis zum Äußersten:</strong>
        Kurz nach seinem Suizidversuch vollendete Gauguin eines seiner bedeutendsten Werke – die schöpferische
        Intensität ließ sich selbst durch die eigene Verzweiflung nicht stoppen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein über ein Jahrzehnt anhaltender körperlicher Verfall:</strong>
        Von den ersten Symptomen nach 1891 bis zu seinem Tod 1903 verlief Gauguins Gesundheit in einer stetigen
        Verschlechterung, die er nie zum Anlass für eine geordnete medizinische Behandlung nahm.</p>
        <p class="vb-intro"><strong>b) Selbstzerstörung statt Selbstschonung:</strong>
        Für eine sexuelle Acht mit Siebenerflügel, deren Sicherheit im unmittelbaren, kompromisslosen Handeln
        liegt, wurde die eigene Krankheit nicht zum Anlass für Vorsicht, sondern für eine weitere Flucht nach
        vorn.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Flucht in noch größere Abgeschiedenheit?</strong>
        Für eine sexuelle Acht mit Siebenerflügel, deren Identität auf kompromissloser Autonomie und
        ständig neuen Erfahrungsräumen beruht, lässt sich der Umzug auf die noch entlegeneren Marquesas-Inseln
        trotz Krankheit als Zuspitzung des eigenen Lebensmusters lesen: Rückzug zur Schonung wäre einem
        Eingeständnis von Schwäche gleichgekommen, das dieser Subtyp kaum zulässt. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht mit Siebenerflügel zwangsläufig zu Syphilis oder
        Herzversagen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Gauguins Erkrankung steht zudem in engem Zusammenhang mit einer nachweisbaren Infektion, nicht rein
        psychosomatisch zu erklären. Was sich an seinem Fall zeigen lässt, ist ein Muster im Umgang mit
        fortschreitender Krankheit, das bei einer ausgeprägten sexuellen Acht mit Siebenerflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Gauguin kannte, wie die meisten Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen trieben
        ihn seine kompromisslose Autonomie und sein Rastlosigkeitsdrang ungezügelt voran, statt sich rechtzeitig
        medizinische Hilfe oder Ruhe zu gönnen – ein Zug, der seinem Werk eine einzigartige Radikalität verlieh,
        ihn selbst aber weit vor seiner Zeit verzehrte. Wer das eigene Muster erkennt, kann bewusst
        gegensteuern; wer es nicht kennt, flieht weiter, bis der Körper keine Flucht mehr zulässt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Acht mit Siebenerflügel bestätigt sich bei <strong>Paul Gauguin</strong> in der
        kompromisslosen Weigerung, sich der eigenen Krankheit durch Rückzug oder ärztliche Fürsorge zu beugen –
        stattdessen floh er immer weiter in die Abgeschiedenheit, bis der Körper keine weitere Flucht mehr
        zuließ. Das Krokodil kennt keinen geordneten Rückzug – nur das Weiterschwimmen, bis die Kraft
        endgültig versiegt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-paul-gauguin", label:"Porträt: Paul Gauguin (SX8w7) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

export function trumanCapoteKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-truman-capote-portrait.jpg" alt="Truman Capote – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Truman Capote</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 1924–1984</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Truman Capote</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-truman-capote">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Schriftsteller. Im Vordergrund dieser
        Seite steht sein gesundheitlicher Verfall in den letzten rund zehn Lebensjahren: chronischer Alkohol-
        und Medikamentenmissbrauch, der sich nach der Veröffentlichung eines Kapitels aus seinem unvollendeten
        Roman ›Erhörte Gebete‹ 1975/76 dramatisch verschärfte. Capote starb 1984 im Alter von 59 Jahren an den
        Folgen einer Leberkrankheit, mitverursacht durch eine Kombination mehrerer Medikamente und Alkohol.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Capote</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong> zugeordnet. Die soziale
        Zwei sucht Zugehörigkeit und Bedeutung durch enge Bindung an eine Gemeinschaft – bei Capote der
        exklusive Kreis wohlhabender New Yorker Society-Frauen, die er selbst seine ›Schwäne‹ nannte. Der
        Dreierflügel bringt Ehrgeiz und ein Gespür für öffentliche Wirkung hinzu. Genau dieser Kreis wurde ihm
        zum Verhängnis, als er ihn literarisch verriet – und der Verlust dieser Zugehörigkeit fiel zeitlich fast
        exakt mit dem Beginn seines massiven körperlichen Verfalls zusammen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Alkoholkonsum bereits in den 1960er-Jahren:</strong>
        Schon während der jahrelangen Recherche zu ›Kaltblütig‹ (1959–1965) trank Capote nach eigenen und
        fremden Berichten regelmäßig erheblich, um mit der emotionalen Belastung der Recherche umzugehen.</p>
        <p class="vb-intro"><strong>b) Zunehmender Tablettenkonsum:</strong>
        In den frühen 1970er-Jahren kamen verschreibungspflichtige Beruhigungs- und Schlafmittel hinzu, die er
        zunehmend mit Alkohol kombinierte.</p>
        <p class="vb-intro"><strong>c) Erste sichtbare Ausfälle in der Öffentlichkeit:</strong>
        Bereits Mitte der 1970er-Jahre häuften sich öffentliche Auftritte, bei denen Capote sichtbar
        alkoholisiert oder unter Medikamenteneinfluss wirkte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Bruch mit den ›Schwänen‹ 1975/76:</strong>
        Als Esquire ein Kapitel aus ›Erhörte Gebete‹ veröffentlichte, das kaum verschlüsselte, intime
        Details aus dem Leben seiner engsten Society-Freundinnen preisgab, wandten sich fast alle von ihnen
        vollständig von ihm ab.</p>
        <p class="vb-intro"><strong>b) Dramatische Verschärfung von Sucht und Isolation:</strong>
        Nach diesem sozialen Bruch verschärften sich sein Alkohol- und Medikamentenkonsum sowie seine soziale
        Isolation erheblich – der Roman selbst blieb unvollendet.</p>
        <p class="vb-intro"><strong>c) Mehrere Klinikaufenthalte:</strong>
        In den späten 1970er- und frühen 1980er-Jahren durchlief Capote mehrere Entzugsbehandlungen, die jedoch
        keine dauerhafte Besserung brachten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Selbstinszenierung trotz sichtbarem Verfall:</strong>
        Auch in seinen letzten Lebensjahren suchte Capote weiterhin Talkshow-Auftritte und öffentliche
        Aufmerksamkeit, selbst als sein körperlicher und geistiger Zustand offensichtlich beeinträchtigt war.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte, erfolglose Versuche, ›Erhörte Gebete‹ zu vollenden:</strong>
        Trotz des sozialen Verrats, den die bereits veröffentlichten Kapitel bedeuteten, arbeitete Capote bis
        zu seinem Tod immer wieder an dem Roman, ohne ihn abzuschließen.</p>
        <p class="vb-intro"><strong>c) Suche nach neuer Zugehörigkeit statt Rückzug:</strong>
        Statt sich nach dem Bruch mit den ›Schwänen‹ zurückzuziehen, suchte Capote fieberhaft neue soziale
        Anschlüsse und Bühnen, oft mit wachsendem Erfolgsdruck und wachsender Verzweiflung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod im August 1984:</strong>
        Capote starb am 25. August 1984 im Haus von Joanne Carson in Los Angeles an einer Leberkrankheit,
        mitverursacht durch die Kombination mehrerer Medikamente mit Alkohol – offiziell als ›Phlebothrombose,
        kompliziert durch multiple Drogenintoxikation‹ dokumentiert.</p>
        <p class="vb-intro"><strong>b) ›Erhörte Gebete‹ blieb unvollendet:</strong>
        Der Roman, der seinen sozialen Untergang eingeleitet hatte, wurde postum 1986 in fragmentarischer Form
        veröffentlicht.</p>
        <p class="vb-intro"><strong>c) Ein Ruf, der sich nie mehr erholte:</strong>
        Capotes literarischer Ruf erholte sich zu Lebzeiten nie mehr vollständig von dem 1975/76 ausgelösten
        sozialen Bruch, trotz seines bereits gesicherten Platzes in der amerikanischen Literaturgeschichte durch
        ›Kaltblütig‹ und ›Frühstück bei Tiffany‹.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verlust der Gemeinschaft als existenzielle Erschütterung:</strong>
        Für die soziale Zwei ist Zugehörigkeit zu einer Gemeinschaft zentral für die eigene Bedeutung – der
        Bruch mit den ›Schwänen‹ traf Capote nicht nur sozial, sondern in seinem tiefsten Selbstverständnis.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als verzweifelter Kampf um neue Bühnen:</strong>
        Statt sich zurückzuziehen, suchte Capote weiterhin öffentliche Auftritte – der Ehrgeiz des
        Dreierflügels ließ ihn auch im Verfall nicht von der Bühne abtreten.</p>
        <p class="vb-intro"><strong>c) Sucht als Reaktion auf den Verlust von Zugehörigkeit:</strong>
        Der zeitliche Zusammenhang zwischen dem sozialen Bruch 1975/76 und der dramatischen Verschärfung seiner
        Sucht legt nahe, dass die Substanzen zunehmend den Verlust der eigenen Gemeinschaft kompensieren
        sollten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein knapp zehnjähriger Verfall nach einem klar datierbaren Auslöser:</strong>
        Anders als bei vielen anderen Fällen dieses Kompasses lässt sich Capotes gesundheitlicher Niedergang
        auf einen präzise datierbaren sozialen Bruch zurückführen – die Veröffentlichung von 1975/76.</p>
        <p class="vb-intro"><strong>b) Sucht als Ersatz für verlorene Zugehörigkeit:</strong>
        Für eine soziale Zwei, deren Sicherheit im Eingebundensein in eine Gemeinschaft liegt, kann der abrupte
        Verlust dieser Gemeinschaft eine existenzielle Leere hinterlassen, die durch Substanzen kompensiert
        wird.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der eigene Verrat an der eigenen Gemeinschaft?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren Ehrgeiz Anerkennung durch ein möglichst großes Publikum
        sucht, lässt sich die literarische Preisgabe der ›Schwäne‹ als Konflikt zweier eigener Bedürfnisse
        lesen: die Zugehörigkeit zur exklusiven Gemeinschaft versus die Ambition, das eigene Meisterwerk um
        jeden Preis zu vollenden. Der körperliche Verfall danach lässt sich als Reaktion auf diesen
        selbstverursachten, unauflösbaren Konflikt lesen. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei mit Dreierflügel zwangsläufig zu Suchterkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an
        Capotes Fall zeigen lässt, ist ein Muster im Umgang mit dem Verlust zentraler Zugehörigkeit, das bei
        einer ausgeprägten sozialen Zwei mit Dreierflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Capote kannte, wie die meisten Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen lebte er
        seinen Ehrgeiz und sein Bedürfnis nach Zugehörigkeit ungebremst gegeneinander aus, statt den Konflikt
        zwischen beiden rechtzeitig zu erkennen und bewusst zu steuern – ein Zug, der ihm literarischen Ruhm
        einbrachte, ihn aber zugleich in eine Sucht trieb, aus der er sich nicht mehr befreite. Wer das eigene
        Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt, sucht in der Substanz, was die verlorene
        Gemeinschaft nicht mehr geben kann.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Zwei mit Dreierflügel bestätigt sich bei <strong>Truman Capote</strong> in der Wucht, mit
        der der Verlust seiner engsten Gemeinschaft seinen körperlichen und geistigen Verfall beschleunigte –
        und in seiner fortgesetzten, verzweifelten Suche nach neuer öffentlicher Bühne statt Rückzug. Der Golden
        Retriever, der ohne sein Rudel nicht sein kann, fand nach dem Bruch mit den ›Schwänen‹ keinen Weg mehr
        zurück in eine tragfähige Zugehörigkeit.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-truman-capote", label:"Porträt: Truman Capote (SO2w3) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function edgarAllanPoeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-edgar-allan-poe-portrait.jpg" alt="Edgar Allan Poe – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Edgar Allan Poe</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · 1809–1849</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Edgar Allan Poe</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-edgar-allan-poe">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Schriftsteller. Im Vordergrund dieser
        Seite steht sein körperlicher und geistiger Verfall in den letzten Lebenswochen: Poe wurde am 3. Oktober
        1849 in Baltimore in verwirrtem, delirierendem Zustand und fremder Kleidung aufgefunden. Er starb vier
        Tage später, am 7. Oktober 1849, im Krankenhaus, ohne dass die genaue Todesursache je zweifelsfrei
        geklärt wurde – Theorien reichen von Alkoholvergiftung über Tollwut bis zu Kohlenmonoxidvergiftung.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Poe</strong> ist dem <strong>sozialen Typ 4 mit Fünferflügel</strong> zugeordnet – demselben
        Subtyp wie Gustav Mahler in diesem Kompass. Die soziale Vier trägt das eigene Anderssein sichtbar in
        eine Gemeinschaft, die sie zugleich fasziniert und ausschließt. Der Fünferflügel bringt intellektuelle
        Systematik hinzu – Poes literaturtheoretische Essays über Konstruktion und Wirkung von Erzählungen
        zeigen dieselbe analytische Durchdringung, die auch seine düsteren Themen strukturierte. Genau diese
        Kombination aus sichtbarem Anderssein und intellektueller Kontrolle prägte auch seinen Umgang mit der
        eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Alkoholprobleme bereits in jungen Jahren:</strong>
        Poe kämpfte bereits während seiner Militärzeit und seines kurzen Studiums an der University of Virginia
        mit Alkoholproblemen, die ihn wiederholt in finanzielle und berufliche Schwierigkeiten brachten.</p>
        <p class="vb-intro"><strong>b) Der Tod seiner Frau Virginia 1847:</strong>
        Der Tod seiner Frau Virginia an Tuberkulose 1847 stürzte Poe in eine tiefe Depression, aus der er sich
        nie wieder vollständig erholte.</p>
        <p class="vb-intro"><strong>c) Zunehmend erratisches Verhalten:</strong>
        In den beiden Jahren nach Virginias Tod berichteten Bekannte von zunehmend unberechenbarem Verhalten
        und wiederholten Alkoholexzessen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Auffinden in verwirrtem Zustand:</strong>
        Am 3. Oktober 1849 wurde Poe vor einer Wahllokal-Kneipe in Baltimore in fremder, schlecht sitzender
        Kleidung und geistig verwirrtem Zustand gefunden.</p>
        <p class="vb-intro"><strong>b) Unfähigkeit, sich verständlich zu machen:</strong>
        Im Krankenhaus konnte Poe kaum kohärent sprechen und keine Auskunft darüber geben, was in den Tagen
        zuvor mit ihm geschehen war – bis heute eine der großen ungeklärten Lücken seiner Biografie.</p>
        <p class="vb-intro"><strong>c) Rascher Verfall über vier Tage:</strong>
        Sein Zustand verschlechterte sich innerhalb weniger Tage dramatisch, begleitet von Fieber und
        Halluzinationen, bis zu seinem Tod am 7. Oktober 1849.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Literarische Verarbeitung von Tod und Verfall als Lebensthema:</strong>
        Schon Jahrzehnte vor seinem eigenen mysteriösen Tod hatte Poes Werk sich obsessiv mit Themen wie
        vorzeitiger Beerdigung, Verfall und dem Zerfall des Geistes beschäftigt – etwa in ›Der Untergang des
        Hauses Usher‹ oder ›Das verräterische Herz‹.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte schriftstellerische Arbeit trotz Chaos:</strong>
        Trotz seines zunehmend instabilen Lebens in den letzten beiden Jahren veröffentlichte Poe weiterhin
        Gedichte und Essays, darunter kurz vor seinem Tod ›Annabel Lee‹.</p>
        <p class="vb-intro"><strong>c) Verheimlichung statt Behandlung des eigenen Alkoholproblems:</strong>
        Poe unternahm zwar zeitweise Versuche zur Abstinenz, sprach aber öffentlich kaum offen über das Ausmaß
        seiner Alkoholabhängigkeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod mit nur 40 Jahren:</strong>
        Poe starb am 7. Oktober 1849 im Washington College Hospital in Baltimore, ohne dass die genaue
        Todesursache je zweifelsfrei festgestellt wurde.</p>
        <p class="vb-intro"><strong>b) Einer der bekanntesten ungeklärten Todesfälle der Literaturgeschichte:</strong>
        Bis heute diskutieren Historiker und Mediziner Theorien von Alkoholvergiftung über Tollwut, Epilepsie
        und Kohlenmonoxidvergiftung bis zu einem sogenannten ›Cooping‹ (Wahlbetrug durch Zwangsalkoholisierung).</p>
        <p class="vb-intro"><strong>c) Postumer literarischer Einfluss:</strong>
        Poes Werk wurde erst nach seinem Tod umfassend als Begründung der modernen Kurzgeschichte und der
        Detektivliteratur anerkannt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Sichtbares Anderssein, unsichtbares Leiden:</strong>
        Für die soziale Vier zeigt sich das eigene Anderssein oft sichtbar nach außen – bei Poe in seinem
        literarischen Werk –, während das tatsächliche persönliche Leiden, die Alkoholabhängigkeit, weitgehend
        im Verborgenen blieb.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als intellektuelle Distanzierung vom eigenen Schmerz:</strong>
        Poes literaturtheoretische Schriften, die den emotionalen Effekt einer Geschichte fast mathematisch
        analysierten, zeigen den Fünferflügel als Versuch, das eigene, oft überwältigende Gefühlsleben
        intellektuell zu ordnen.</p>
        <p class="vb-intro"><strong>c) Rätselhafter letzter Rückzug statt öffentlicher Klage:</strong>
        Die letzten Tage vor seinem Tod bleiben bis heute ein Rätsel – ein für die soziale Vier ungewöhnliches
        Verschwinden aus der eigenen Erzählung, gerade weil sein Werk sonst so sehr von Kontrolle über die
        eigene Darstellung geprägt war.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein über Jahrzehnte latentes, in den letzten Wochen eskalierendes Leiden:</strong>
        Poes Alkoholproblem begleitete ihn über sein gesamtes Erwachsenenleben, bevor es sich in den letzten
        Tagen zu einer tödlichen Krise zuspitzte.</p>
        <p class="vb-intro"><strong>b) Sichtbares literarisches Werk, verborgenes persönliches Leiden:</strong>
        Für eine soziale Vier, deren Bedeutung oft aus dem sichtbaren Zurschaustellen des eigenen Andersseins
        entsteht, blieb das tatsächliche persönliche Leiden – die Sucht – paradoxerweise weitgehend unsichtbar.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ein bis heute ungeklärtes Verschwinden?</strong>
        Für eine soziale Vier mit Fünferflügel, deren Bedeutung stark an die eigene, kontrollierte Erzählung
        gebunden ist, lässt sich das rätselhafte Verschwinden seiner letzten Tage als Bruch mit dem eigenen
        Lebensmuster lesen: Gerade der Mann, der Tod und Verfall literarisch bis ins Detail kontrollierte,
        verlor die Kontrolle über die eigene letzte Geschichte vollständig. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier mit Fünferflügel zwangsläufig zu Alkoholismus oder
        einem ungeklärten Tod führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Poes Alkoholabhängigkeit ist zudem eine eigenständige Erkrankung mit eigener
        Krankheitsdynamik, nicht rein psychosomatisch zu erklären. Was sich an seinem Fall zeigen lässt, ist ein
        Muster im Umgang mit verborgenem persönlichen Leiden bei gleichzeitig sichtbarer künstlerischer
        Beschäftigung mit denselben Themen, das bei einer ausgeprägten sozialen Vier mit Fünferflügel immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Poe kannte, wie die meisten Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen verarbeitete
        er Tod und Verfall literarisch bis zur Meisterschaft, während er sein eigenes, tatsächliches Leiden nie
        in derselben Klarheit ansprach oder behandeln ließ – ein Zug, der seinem Werk eine einzigartige, bis
        heute nachwirkende Kraft verlieh, ihm selbst aber keinen Weg aus der eigenen Sucht öffnete. Wer das
        eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt, verarbeitet die eigene Not im
        Werk, statt sie im eigenen Leben zu behandeln.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Vier mit Fünferflügel bestätigt sich bei <strong>Edgar Allan Poe</strong> im auffälligen
        Kontrast zwischen einem Werk, das Tod und Verfall bis ins kleinste Detail literarisch kontrollierte, und
        einem tatsächlichen persönlichen Leiden, das bis in seine letzten, bis heute rätselhaften Tage
        weitgehend verborgen blieb. Das Gürteltier trug seine literarische Rüstung meisterhaft zur Schau – was
        darunter lag, blieb bis zum Ende sein eigenes, ungelöstes Geheimnis.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-edgar-allan-poe", label:"Porträt: Edgar Allan Poe (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-gustav-mahler", label:"Krankheitsporträt: Gustav Mahler (SO4w5)"},
        {route:"krankheitsportraets-leonard-cohen", label:"Krankheitsporträt: Leonard Cohen (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function jeanPaulSartreKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jean-paul-sartre-portrait.jpg" alt="Jean-Paul Sartre – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jean-Paul Sartre</p>
        <p class="krim-portrait-typ">SX4w5 · Sexueller Typ 4 mit Fünferflügel · 1905–1980</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jean-Paul Sartre</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jean-paul-sartre">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Philosoph und Schriftsteller. Im
        Vordergrund dieser Seite steht sein jahrzehntelanger Amphetamin-Missbrauch (Corydrane, ein damals
        rezeptfrei erhältliches Aufputschmittel), mit dem er seine enorme Schreibleistung befeuerte, sowie seine
        fortschreitende Erblindung in den letzten Lebensjahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Sartre</strong> ist dem <strong>sexuellen Typ 4 mit Fünferflügel</strong> zugeordnet. Die
        sexuelle Vier kennt keine Halbheiten – ihre Intensität wird vollständig gelebt. Der Fünferflügel bringt
        intellektuelle Systematik hinzu: Sartre nutzte die Substanz gezielt, um sein monumentales philosophisches
        Werk mit maximaler geistiger Schärfe voranzutreiben, nicht zur Zerstreuung. Genau diese Kombination aus
        kompromissloser Intensität und intellektueller Zielstrebigkeit prägte seinen Umgang mit der eigenen
        Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn des Corydrane-Konsums in den 1950er-Jahren:</strong>
        Sartre begann in den 1950er-Jahren, das amphetaminhaltige Mittel Corydrane einzunehmen, um seine
        Konzentrationsfähigkeit beim Schreiben zu steigern.</p>
        <p class="vb-intro"><strong>b) Extreme Dosierungen bei der Arbeit an der ›Kritik der dialektischen
        Vernunft‹:</strong> Nach eigenen Angaben nahm Sartre bei der Arbeit an diesem monumentalen Werk in den
        frühen 1960er-Jahren teils bis zu zwanzig Tabletten am Tag – ein Vielfaches der empfohlenen Dosis.</p>
        <p class="vb-intro"><strong>c) Erste Anzeichen von Sehschwäche:</strong>
        Parallel dazu entwickelte sich bei Sartre eine fortschreitende Verschlechterung seines Augenlichts,
        teilweise mit dem Substanzmissbrauch, teilweise mit eigenständigen altersbedingten Ursachen in
        Verbindung gebracht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Offener Umgang mit dem eigenen Substanzkonsum:</strong>
        Anders als viele andere Fälle sprach Sartre in Interviews und Gesprächen mit Simone de Beauvoir
        vergleichsweise offen über seinen Corydrane-Konsum und dessen Rolle in seinem Schaffensprozess.</p>
        <p class="vb-intro"><strong>b) Fast vollständige Erblindung in den 1970er-Jahren:</strong>
        Ab Mitte der 1970er-Jahre verlor Sartre nahezu vollständig sein Augenlicht, was ihn zwang, seine
        schriftstellerische Arbeitsweise grundlegend zu verändern.</p>
        <p class="vb-intro"><strong>c) Fortsetzung der intellektuellen Arbeit trotz Blindheit:</strong>
        Trotz der Erblindung setzte Sartre seine philosophische und politische Arbeit fort, unter anderem durch
        diktierte Gespräche und Interviews.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Substanz als Werkzeug für maximale Intensität, nicht als Flucht:</strong>
        Für Sartre diente Corydrane nicht der Zerstreuung, sondern der Steigerung der eigenen geistigen
        Schärfe – eine kompromisslose Ausrichtung auf die eigene intellektuelle Leistung.</p>
        <p class="vb-intro"><strong>b) Keine Verheimlichung, aber auch keine Änderung des Verhaltens:</strong>
        Obwohl er offen über die Risiken sprach, änderte Sartre seinen Konsum über Jahre kaum, selbst als
        gesundheitliche Folgen bereits sichtbar wurden.</p>
        <p class="vb-intro"><strong>c) Anpassung der Arbeitsweise statt Rückzug nach der Erblindung:</strong>
        Statt sich nach dem Verlust seines Augenlichts aus dem öffentlichen intellektuellen Leben
        zurückzuziehen, fand Sartre neue Wege, weiterhin am politischen und philosophischen Diskurs
        teilzunehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod 1980 in Paris:</strong>
        Sartre starb am 15. April 1980 in Paris an einem Lungenödem, nach Jahrzehnten intensiver körperlicher
        Selbstausbeutung durch Substanzmissbrauch, Alkohol und Nikotin.</p>
        <p class="vb-intro"><strong>b) Eines der umfangreichsten philosophischen Werke des 20. Jahrhunderts:</strong>
        Trotz – oder gerade wegen – seines exzessiven Arbeitsstils hinterließ Sartre ein außergewöhnlich
        umfangreiches philosophisches, literarisches und politisches Werk.</p>
        <p class="vb-intro"><strong>c) Eine der größten Beerdigungen der französischen Geschichte:</strong>
        An Sartres Beerdigung nahmen schätzungsweise 50.000 Menschen teil – ein Ausdruck seiner enormen
        kulturellen und intellektuellen Bedeutung für Frankreich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Keine Halbheiten, auch nicht im Substanzkonsum:</strong>
        Für die sexuelle Vier gibt es kein gemäßigtes Maß – Sartres extreme Corydrane-Dosierungen zeigen
        dieselbe kompromisslose Intensität, die auch sein philosophisches Denken prägte.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Rechtfertigung durch intellektuelle Leistung:</strong>
        Anders als bei rein hedonistischem Substanzmissbrauch diente die Droge bei Sartre einem klar
        definierten intellektuellen Ziel – der Fünferflügel rahmte den Konsum als Werkzeug der geistigen
        Durchdringung, nicht als Genuss.</p>
        <p class="vb-intro"><strong>c) Offenheit ohne Verhaltensänderung:</strong>
        Sartres Bereitschaft, offen über seinen Substanzkonsum zu sprechen, ohne ihn deshalb zu ändern, zeigt
        eine für die sexuelle Vier typische radikale Ehrlichkeit gegenüber sich selbst, die jedoch nicht
        automatisch in Verhaltensänderung mündet.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte kompromissloser körperlicher Selbstausbeutung:</strong>
        Von den 1950er-Jahren bis zu seinem Tod 1980 lebte Sartre in einem Muster extremer körperlicher
        Selbstausbeutung im Dienst seiner intellektuellen Produktion.</p>
        <p class="vb-intro"><strong>b) Die Substanz als Verlängerung der eigenen Intensität, nicht als Flucht
        vor ihr:</strong> Für eine sexuelle Vier mit Fünferflügel, deren Identität auf vollständiger,
        unverstellter Intensität und intellektueller Durchdringung beruht, diente die Droge der Verstärkung
        dieser beiden Grundzüge, nicht ihrer Betäubung.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Offenheit ohne Konsequenz?</strong>
        Für eine sexuelle Vier mit Fünferflügel, deren Ehrlichkeit sich selbst gegenüber Priorität vor der
        eigenen Schonung hat, lässt sich Sartres Verhalten als konsequente Fortsetzung des eigenen
        Lebensmusters lesen: Die eigene Wahrheit auszusprechen war wichtiger, als aus ihr praktische
        Konsequenzen für die eigene Gesundheit zu ziehen. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier mit Fünferflügel zwangsläufig zu Substanzmissbrauch
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an
        Sartres Fall zeigen lässt, ist ein Muster im Umgang mit selbstgewählter körperlicher Belastung im
        Dienst einer intellektuellen Mission, das bei einer ausgeprägten sexuellen Vier mit Fünferflügel immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Sartre kannte, wie die meisten Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen bestimmte
        seine kompromisslose intellektuelle Intensität ungehindert sein Handeln, statt den eigenen Substanzkonsum
        rechtzeitig zu begrenzen – ein Zug, der ihm eines der umfangreichsten philosophischen Werke des
        Jahrhunderts ermöglichte, ihn selbst aber Augenlicht und Gesundheit kostete. Wer das eigene Muster
        erkennt, kann bewusst gegensteuern; wer es nicht kennt, verlängert die eigene Intensität so lange, bis
        der Körper die Grenze setzt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Vier mit Fünferflügel bestätigt sich bei <strong>Jean-Paul Sartre</strong> in der
        kompromisslosen Intensität, mit der er Substanzen zur Steigerung seiner intellektuellen Leistung
        einsetzte, und in der radikalen Offenheit, mit der er darüber sprach, ohne sein Verhalten deshalb zu
        ändern. Der Chihuahua kennt keine Halbheiten – auch nicht im Dienst des eigenen Denkens.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jean-paul-sartre", label:"Porträt: Jean-Paul Sartre (SX4w5) – Lebenswerk"},
        {route:"krankheitsportraets-arthur-rimbaud", label:"Krankheitsporträt: Arthur Rimbaud (SX4w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function leonardCohenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonard-cohen-portrait.jpg" alt="Leonard Cohen – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonard Cohen</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · 1934–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonard Cohen</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-leonard-cohen">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Musiker und Dichter. Im Vordergrund
        dieser Seite stehen zwei Kapitel seiner Gesundheitsgeschichte: seine lebenslange, öffentlich immer
        wieder thematisierte Depression, die ihn unter anderem zu einem fünfjährigen Aufenthalt in einem
        Zen-Kloster bewog, sowie Wirbelkompressionsfrakturen in seinen letzten Lebensjahren, die ihn zwangen,
        sein letztes Album ›You Want It Darker‹ sitzend und unter erheblichen Schmerzen aufzunehmen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Cohen</strong> ist dem <strong>sozialen Typ 4 mit Fünferflügel</strong> zugeordnet – demselben
        Subtyp wie Gustav Mahler und Edgar Allan Poe in diesem Kompass. Die soziale Vier trägt das eigene
        Anderssein sichtbar in eine Gemeinschaft, die sie zugleich fasziniert und ausschließt. Der Fünferflügel
        bringt eine kontemplative, oft spirituell-intellektuelle Suche nach Struktur hinzu – Cohens
        jahrzehntelange Zen-Praxis und seine sprachlich extrem verdichtete, disziplinierte Lyrik zeigen genau
        diese Kombination. Beide Gesundheitskapitel spiegeln diese Grundhaltung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Depression bereits in jungen Jahren:</strong>
        Cohen beschrieb in zahlreichen Interviews, dass depressive Episoden ihn bereits seit seiner Jugend
        begleiteten, oft als eine Art dauerhafter, gedämpfter Grundzustand.</p>
        <p class="vb-intro"><strong>b) Rückzug ins Zen-Kloster in den 1990er-Jahren:</strong>
        1994 zog sich Cohen für fünf Jahre in das Mount-Baldy-Zen-Zentrum zurück, wo er 1996 als Mönch ordiniert
        wurde – ein direkter Versuch, seiner lebenslangen Depression mit spiritueller Disziplin zu begegnen.</p>
        <p class="vb-intro"><strong>c) Erste körperliche Alterserscheinungen ab den 2010er-Jahren:</strong>
        In seinen letzten Lebensjahren entwickelten sich zunehmende Rückenprobleme, die sich später als
        Wirbelkompressionsfrakturen herausstellten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Finanzieller Betrug durch die eigene Managerin 2004:</strong>
        Nach seiner Rückkehr aus dem Kloster entdeckte Cohen, dass seine langjährige Managerin einen Großteil
        seines Vermögens veruntreut hatte – ein Schock, der ihn im Alter von 73 Jahren zu einer der
        umfangreichsten Welttourneen seiner Karriere zwang.</p>
        <p class="vb-intro"><strong>b) Wirbelkompressionsfrakturen in den letzten Lebensjahren:</strong>
        In seinen letzten beiden Lebensjahren erlitt Cohen mehrere Wirbelkompressionsfrakturen, die ihm das
        Stehen und Gehen erheblich erschwerten.</p>
        <p class="vb-intro"><strong>c) Aufnahme des letzten Albums unter Schmerzen:</strong>
        Sein letztes Studioalbum ›You Want It Darker‹ (2016) nahm Cohen weitgehend im Sitzen auf, da ihm
        längeres Stehen aufgrund seiner Rückenschmerzen kaum mehr möglich war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Offener Umgang mit der eigenen Depression in Interviews:</strong>
        Anders als viele andere Künstler seiner Generation sprach Cohen wiederholt und mit bemerkenswerter
        Klarheit über seine Depression, ohne sie zu dramatisieren oder zu verharmlosen.</p>
        <p class="vb-intro"><strong>b) Spirituelle Disziplin statt medikamentöser Behandlung:</strong>
        Cohen suchte primär über Meditation und klösterliche Disziplin einen Umgang mit seiner Depression, nicht
        primär über pharmakologische Behandlung.</p>
        <p class="vb-intro"><strong>c) Fortsetzung der künstlerischen Arbeit trotz körperlichem Verfall:</strong>
        Trotz seiner Wirbelfrakturen und starker Schmerzen vollendete Cohen sein letztes Album vollständig und
        veröffentlichte es nur wenige Wochen vor seinem Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod im November 2016:</strong>
        Cohen starb am 7. November 2016 in Los Angeles im Schlaf, infolge eines Sturzes in Kombination mit
        Leukämie, die er der Öffentlichkeit nie mitgeteilt hatte.</p>
        <p class="vb-intro"><strong>b) Ein Album als bewusster Abschied:</strong>
        ›You Want It Darker‹, dessen Titelsong explizit Themen von Tod und Hingabe verarbeitet, erschien nur
        17 Tage vor Cohens Tod – von vielen Kritikern rückblickend als bewusster künstlerischer Abschied
        gedeutet.</p>
        <p class="vb-intro"><strong>c) Späte kommerzielle und kritische Anerkennung:</strong>
        Die durch den finanziellen Betrug erzwungene Welttournee ab 2008 brachte Cohen im hohen Alter größere
        kommerzielle Erfolge und Anerkennung als weite Teile seiner früheren Karriere.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Sichtbares Anderssein durch offene Sprache über innere Schwere:</strong>
        Für die soziale Vier zeigt sich das eigene Anderssein oft sichtbar nach außen – bei Cohen durch seine
        ungewöhnlich klare, öffentliche Sprache über seine Depression, die ihn von vielen Zeitgenossen
        unterschied.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Suche nach Struktur und Disziplin:</strong>
        Der Rückzug ins Zen-Kloster zeigt den Fünferflügel in seiner reinsten Form – eine strukturierte,
        beinahe wissenschaftlich-disziplinierte Herangehensweise an ein zutiefst emotionales Problem.</p>
        <p class="vb-intro"><strong>c) Vollendung des Werks trotz körperlichem Verfall:</strong>
        Die Fertigstellung von ›You Want It Darker‹ trotz starker Schmerzen zeigt dieselbe Konsequenz, mit der
        Cohen sein ganzes Leben lang an seiner künstlerischen Aufgabe festhielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein lebenslanges, offen thematisiertes Leiden neben einem spät
        auftretenden körperlichen Verfall:</strong> Cohens Depression begleitete ihn über sein gesamtes
        Erwachsenenleben, während die Wirbelfrakturen erst in den letzten beiden Lebensjahren hinzukamen –
        zwei getrennte, aber ineinandergreifende Kapitel seiner Gesundheitsgeschichte.</p>
        <p class="vb-intro"><strong>b) Spirituelle Verarbeitung statt reiner Behandlung:</strong>
        Für eine soziale Vier mit Fünferflügel, deren Bedeutung aus der sichtbaren Verarbeitung des eigenen
        Andersseins entsteht, wurde die Depression nicht nur behandelt, sondern zum zentralen Thema seines
        spirituellen und künstlerischen Weges.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ein letztes Album über Tod und Hingabe?</strong>
        Für eine soziale Vier mit Fünferflügel, deren Identität eng mit der kontrollierten künstlerischen
        Verarbeitung des eigenen Erlebens verbunden ist, lässt sich die bewusste Fertigstellung von ›You Want
        It Darker‹ als konsequenter Abschluss des eigenen Lebensmusters lesen: Das eigene Sterben wurde,
        anders als bei Edgar Allan Poe, nicht zum ungeklärten Rätsel, sondern zum letzten, bewusst gestalteten
        künstlerischen Werk. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch ausführlicher
        entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier mit Fünferflügel zwangsläufig zu Depression oder
        Wirbelfrakturen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Cohens Fall zeigen lässt, ist ein Muster im Umgang mit lebenslangem psychischem Leiden und
        spätem körperlichem Verfall, das bei einer ausgeprägten sozialen Vier mit Fünferflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a> ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Cohen kannte, wie die meisten Menschen seiner Zeit, kein Enneagramm-Modell. Ohne dieses Wissen suchte er
        über Jahrzehnte spirituelle statt strukturierter medizinischer Wege im Umgang mit seiner Depression,
        was ihm tiefe künstlerische Einsichten ermöglichte, ihm aber auch keinen vollständigen Ausweg aus dem
        eigenen Leiden bot. Wer das eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt,
        verarbeitet die eigene Schwere ein Leben lang künstlerisch, statt sie vollständig aufzulösen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Vier mit Fünferflügel bestätigt sich bei <strong>Leonard Cohen</strong> in der Klarheit, mit
        der er sein lebenslanges psychisches Leiden öffentlich sprachlich verarbeitete, und in der Konsequenz,
        mit der er sein letztes Werk trotz schwerem körperlichem Verfall bewusst zu einem Abschied gestaltete.
        Das Gürteltier trug seine Rüstung aus Worten bis zuletzt – und nutzte sie, um genau das sichtbar zu
        machen, was andere verbergen würden.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-leonard-cohen", label:"Porträt: Leonard Cohen (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-gustav-mahler", label:"Krankheitsporträt: Gustav Mahler (SO4w5)"},
        {route:"krankheitsportraets-edgar-allan-poe", label:"Krankheitsporträt: Edgar Allan Poe (SO4w5)"},
        {route:"krankheitsportraets-fiona-apple", label:"Krankheitsporträt: Fiona Apple (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}
