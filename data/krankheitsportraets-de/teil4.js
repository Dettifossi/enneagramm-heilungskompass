import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function cgJungKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cg-jung-portrait.jpg" alt="Carl Gustav Jung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Carl Gustav Jung</p>
        <p class="krim-portrait-typ">SO5w6 · Sozialer Typ 5 mit Sechserflügel · 1875–1961</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Carl Gustav Jung</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-cg-jung">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein wissenschaftliches Lebenswerk und
        die Analytische Psychologie. Diese Seite beleuchtet, was dort weitgehend unerwähnt bleibt:
        der schwere Herzinfarkt von 1944 mit der ausführlich dokumentierten Nahtoderfahrung,
        die sein gesamtes Spätwerk prägte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jung</strong> ist dem <strong>sozialen Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SO5 verarbeitet existenzielle Erfahrungen typischerweise, indem sie
        sie sofort in ein mitteilbares, lehrbares System übersetzt – bei Jung zeigte sich das
        exakt so: Aus einer lebensbedrohlichen Embolie und einem Herzinfarkt entstand keine
        private Krise allein, sondern binnen weniger Jahre die konzeptuelle Grundlage seines
        gesamten Spätwerks, das er wiederum in Vorträgen und Schriften an seine Schülerschaft
        weitergab.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Sturz auf Eis im Februar 1944:</strong>
        Am 11. Februar 1944 rutschte der 68-jährige Jung auf Eis aus und brach sich das
        Wadenbein – ein zunächst harmlos wirkender Unfall, der ihn ans Krankenhausbett fesselte.</p>
        <p class="vb-intro"><strong>b) Eine Embolie durch das ruhiggestellte Bein:</strong>
        Rund zehn Tage später, noch in der Klinik, löste sich durch die Immobilisierung des
        gebrochenen Beins ein Blutgerinnsel, das eine Embolie und in der Folge einen schweren
        Herzinfarkt auslöste.</p>
        <p class="vb-intro"><strong>c) Ein Zustand nahe am Tod:</strong>
        Jung geriet in einen kritischen, lebensbedrohlichen Zustand, aus dem er nach eigener
        späterer Schilderung nur durch das entschlossene Eingreifen seines behandelnden Arztes
        zurückkehrte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine ausführlich dokumentierte Vision:</strong>
        Während des kritischen Zustands erlebte Jung eine Serie intensiver, später von ihm
        selbst minutiös aufgezeichneter Visionen – unter anderem das Gefühl, tausend Meilen
        über der Erde zu schweben und Meere, Kontinente und den Himalaya in bläulichem Licht
        zu erkennen.</p>
        <p class="vb-intro"><strong>b) Ein Steintempel als Schwelle:</strong>
        In der Vision näherte sich Jung einem Steintempel auf einem Meteoriten, in dem er den
        eigentlichen Sinn seines Lebens hätte erfahren sollen – bis ihn der Geist seines
        behandelnden Arztes zurück ins irdische Leben rief.</p>
        <p class="vb-intro"><strong>c) Widerwillen gegen die Rückkehr:</strong>
        Jung beschrieb ausdrücklich einen Widerwillen dagegen, ins Leben zurückzukehren – und
        eine tiefe Erschütterung darüber, dass sein Arzt, wie er es deutete, das eigene Leben
        für seine Rettung geopfert habe.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Sofortige schriftliche Verarbeitung während der Genesung:</strong>
        Noch während der monatelangen Rekonvaleszenz begann Jung, seine Erfahrungen in Briefen
        und Aufzeichnungen systematisch festzuhalten – keine stille private Verarbeitung,
        sondern der Beginn einer mitteilbaren Deutung.</p>
        <p class="vb-intro"><strong>b) Eine explizite Neubewertung des eigenen Schicksals:</strong>
        Jung schrieb später, erst nach dieser Krankheit habe er verstanden, wie wichtig es sei,
        das eigene Schicksal zu verstehen – eine Aussage, die die Erfahrung unmittelbar in
        seine Theoriebildung zur Individuation einordnete.</p>
        <p class="vb-intro"><strong>c) Siebzehn weitere, wissenschaftlich intensive Lebensjahre:</strong>
        Jung starb erst 1961, siebzehn Jahre nach dem Infarkt, und nutzte diese Zeit für einige
        seiner umfangreichsten Alterswerke, darunter ›Mysterium Coniunctionis‹ – keine
        Rückzugsphase, sondern eine Phase intensivierter systematischer Arbeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Die Nahtoderfahrung als vielzitiertes Referenzbeispiel:</strong>
        Jungs Schilderung gilt bis heute als eine der detailliertesten frühen Beschreibungen
        einer Nahtoderfahrung aus wissenschaftlichem Umfeld und wird in der einschlägigen
        Literatur regelmäßig zitiert.</p>
        <p class="vb-intro"><strong>b) Verstärkter Einfluss von Mystik und Alchemie im Spätwerk:</strong>
        Nach 1944 verschob sich der Schwerpunkt seiner Arbeit sichtbar stärker in Richtung
        Alchemie, Religionsgeschichte und die Frage nach dem, was den Tod überdauert – ein
        thematischer Bruch, der sich direkt auf die Krise zurückführen lässt.</p>
        <p class="vb-intro"><strong>c) Eine bis heute diskutierte Deutungsfrage:</strong>
        Ob Jungs Visionen als neurologisches Phänomen eines schwer geschädigten Gehirns oder
        als genuine transzendente Erfahrung zu verstehen sind, bleibt unter Medizinern,
        Neurowissenschaftlern und Jung-Anhängern bis heute umstritten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Sechserflügel als Suche nach einer verlässlichen Deutung:</strong>
        Statt die Erfahrung als offenes Rätsel stehen zu lassen, ordnete Jung sie zügig in ein
        festes Deutungssystem ein – typisch für den Sechserflügel, der Unsicherheit durch
        Struktur und Erklärung zu bannen sucht.</p>
        <p class="vb-intro"><strong>b) Der Oktopus, der auch die eigene Grenzerfahrung teilt:</strong>
        Jung hielt seine Visionen nicht geheim, sondern beschrieb sie ausführlich in Briefen
        und später öffentlich in seiner Autobiografie – Wissen über die eigene Grenzerfahrung
        wurde, wie schon sein Fachwissen zuvor, zum Beitrag für eine größere Gemeinschaft.</p>
        <p class="vb-intro"><strong>c) Rückkehr in intensivierte, nicht reduzierte Systemarbeit:</strong>
        Statt sich nach der Krise zurückzuziehen, vertiefte Jung seine ohnehin enzyklopädische
        Arbeit noch – die soziale Fünf sucht Sicherheit im Ausbau des eigenen Wissenssystems,
        auch und gerade nach einer existenziellen Erschütterung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein einzelnes, scharf datierbares Ereignis mit jahrzehntelanger Nachwirkung:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses handelt es sich bei
        Jung nicht um ein über Jahre verschwiegenes Leiden, sondern um ein einziges, genau
        datierbares Ereignis, dessen intellektuelle Verarbeitung sich über die restlichen
        siebzehn Lebensjahre erstreckte.</p>
        <p class="vb-intro"><strong>b) Vom körperlichen Beinahe-Tod zur theoretischen Systembildung:</strong>
        Wie schon bei seinem Wortassoziationstest Jahrzehnte zuvor verwandelte Jung eine
        zunächst rein körperliche, unkontrollierbare Erfahrung in ein geordnetes,
        weitervermittelbares Deutungssystem – dasselbe Grundmuster, nur diesmal ausgelöst durch
        die eigene Sterblichkeit statt durch ein Laborexperiment.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Nahtoderfahrung dieses Ausmaßes?</strong>
        Für eine soziale Fünf mit Sechserflügel, deren Sicherheit auf einem verlässlichen,
        durchdachten System beruht, lässt sich in einer Erfahrung, die jedes bisherige System
        radikal infrage stellt, eine besonders existenzielle Herausforderung lesen: Jung
        begegnete ihr nicht mit Rückzug, sondern mit dem für die SO5 typischen Reflex, gerade
        das Unfassbarste in ein neues, mitteilbares Wissensgebäude zu verwandeln. Diese Deutung
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf mit Sechserflügel zwangsläufig zu
        einer Embolie oder einem Herzinfarkt führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Jungs Herzinfarkt ist eng mit einem
        klassischen, rein körperlichen Risikofaktor verbunden – der Immobilisierung nach einem
        Knochenbruch –, nicht rein psychosomatisch zu erklären. Was sich an seinem Fall zeigen
        lässt, ist ein Muster im Umgang mit einer existenziellen Krise, das bei einer
        ausgeprägten sozialen Fünf mit Sechserflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Jung kannte, anders als die meisten Menschen seiner Zeit, tatsächlich ein
        psychologisches Modell seines eigenen Verhaltens – doch das Enneagramm selbst war ihm
        nicht bekannt. Ohne dieses spezifische Wissen blieb ihm der Blick darauf verwehrt, dass
        sein sofortiges Bedürfnis, die Nahtoderfahrung in ein festes System zu übersetzen,
        selbst ein typgebundenes Muster war und nicht nur eine neutrale wissenschaftliche
        Reaktion. Wer das eigene Muster erkennt, kann bewusst wählen, wann Deutung hilft und
        wann sie vorschnell ist; wer es nicht kennt, deutet automatisch, wie Jung es tat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Sechserflügel zeigt sich bei <strong>Carl Gustav Jung</strong> in
        einer letzten, großen Volte: Eine Erfahrung, die ihn fast das Leben kostete und jedes
        bisherige Wissenssystem an seine Grenzen brachte, wurde nicht zum Anlass des Rückzugs,
        sondern zur Grundlage seiner produktivsten Schaffensperiode. Der Oktopus, der schon sein
        eigenes Sterben in ein Wissen verwandelte, das er mit anderen teilte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-cg-jung", label:"Porträt: Carl Gustav Jung (SO5w6) – Lebenswerk"},
        {route:"krankheitsportraets-stephen-hawking", label:"Krankheitsporträt: Stephen Hawking (SO5w6) – gleicher Subtyp"},
        {route:"krankheitsportraets-isaac-newton", label:"Krankheitsporträt: Isaac Newton (SO5w6) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function alexanderDerGrosseKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alexander-der-grosse-portrait.jpg" alt="Alexander der Große" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alexander der Große</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 356–323 v. Chr.</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alexander der Große</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-alexander-der-grosse">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Feldherr und
        Reichsgründer und seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das
        dort knapp skizziert wird: einen plötzlichen, bis heute nicht sicher geklärten
        Krankheitsverlauf, der ihn im Juni 323 v. Chr. in Babylon innerhalb weniger Tage tötete –
        nach einem Jahrzehnt, in dem sein Körper nie wirklich zur Ruhe gekommen war.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Alexander</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Ehrgeiz</em>: grenzenlose Hingabe an eine
        große Sache, verbunden mit dem Bedürfnis, unentbehrlich zu sein. Der Dreierflügel bringt
        die Weigerung hinzu, sich von Schwäche – auch der eigenen körperlichen – je aufhalten zu
        lassen. Genau diese Weigerung lässt sich bis in seinen letzten, überstürzten
        Krankheitsverlauf nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der elf Jahre nie wirklich Rast fand:</strong>
        Von 334 bis 323 v. Chr. befand sich Alexander in ununterbrochenem Feldzug – durch
        Wüsten, über Gebirge, mehrfach schwer verwundet, unter anderem durch einen Pfeil, der
        bei der Belagerung von Multan seine Lunge durchbohrte.</p>
        <p class="vb-intro"><strong>b) Exzessiver Alkoholkonsum, besonders nach 324 v. Chr.:</strong>
        Antike Quellen berichten übereinstimmend von ausgedehnten Trinkgelagen, die sich nach
        dem Tod seines engsten Gefährten Hephaistion noch steigerten.</p>
        <p class="vb-intro"><strong>c) Zunehmende Erschöpfung im Frühjahr 323 v. Chr.:</strong>
        Nach der Rückkehr nach Babylon häuften sich laut Überlieferung Berichte über
        Fieberschübe und nachlassende Kraft – im Trubel der Planung eines neuen Feldzugs gegen
        Arabien kaum beachtet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Trinkgelage kurz vor dem Zusammenbruch:</strong>
        In der Nacht zum 2. Juni 323 v. Chr. nahm Alexander an einem ausgedehnten Trinkgelage zu
        Ehren seines Freundes Nearchos teil – danach klagte er über stechende Schmerzen.</p>
        <p class="vb-intro"><strong>b) Fieber, das nicht mehr abklang:</strong>
        In den folgenden Tagen stieg sein Fieber kontinuierlich, während er weiterhin versuchte,
        tägliche militärische und administrative Pflichten zu erfüllen.</p>
        <p class="vb-intro"><strong>c) Fortschreitender Kräfteverfall bis zur Sprachlosigkeit:</strong>
        Laut den überlieferten königlichen Tagebüchern (Ephemerides) konnte er sich in den
        letzten Tagen nicht mehr artikulieren, empfing seine Offiziere aber noch stumm, jeden
        Einzelnen, an seinem Sterbebett.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zehn bis zwölf Tage Krankheitsverlauf:</strong>
        Von den ersten Symptomen bis zum Tod vergingen nur rund zehn bis zwölf Tage – ein
        rasanter Verfall bei einem Mann, der ein Jahrzehnt lang als nahezu unbesiegbar gegolten
        hatte.</p>
        <p class="vb-intro"><strong>b) Die Soldaten wollten ihn noch einmal sehen:</strong>
        Der Überlieferung nach ließ Alexander, obwohl er kaum noch sprechen konnte, seine
        Soldaten einzeln an seinem Bett vorbeiziehen, um jedem noch ein letztes Zeichen zu
        geben.</p>
        <p class="vb-intro"><strong>c) Tod am 10. oder 11. Juni 323 v. Chr. in Babylon:</strong>
        Alexander starb im Alter von nur 32 Jahren, ohne einen volljährigen, unbestrittenen
        Nachfolger zu benennen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine SO2w3-Parallele: Julius Caesar</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Unter den <a href="javascript:void(0)" data-route="krankheitsportraets-julius-caesar">Krankheitsporträts</a>
        dieses Kompasses findet sich mit
        <a href="javascript:void(0)" data-route="beruehmte-julius-caesar">Julius Caesar (SO2w3)</a>
        ein auffällig ähnlicher Fall: Auch Caesar litt – nach übereinstimmenden antiken Quellen
        vermutlich an Epilepsie – und verbarg diese Schwäche zeitlebens, statt sie öffentlich
        zuzugeben. Bei beiden Männern zeigt sich derselbe Dreierflügel-Reflex: Schwäche, auch die
        eigene körperliche, darf das sorgfältig aufgebaute Bild von Unbesiegbarkeit nicht
        beschädigen. Alexander ging noch einen Schritt weiter als Caesar – er ignorierte
        Warnsignale nicht nur, sondern trieb seinen Körper aktiv über jede vernünftige Grenze
        hinaus, bis kein Verbergen mehr nötig war, weil der Zusammenbruch selbst öffentlich
        wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Reich ohne Erben:</strong>
        Sein Tod ohne klare Nachfolgeregelung stürzte das gesamte von ihm eroberte Weltreich in
        jahrzehntelange Nachfolgekriege unter seinen Feldherren, die sogenannten
        Diadochenkämpfe.</p>
        <p class="vb-intro"><strong>b) Jahrhunderte an Spekulation über die Todesursache:</strong>
        Von Malaria über Typhus bis zu einer Vergiftung durch enge Vertraute – bis heute gibt es
        keine gesicherte Diagnose, nur konkurrierende Theorien.</p>
        <p class="vb-intro"><strong>c) Ein Mythos, der den kranken Körper überstrahlte:</strong>
        In der Nachwelt trat die Krankheit selbst fast vollständig hinter dem Mythos des
        unbesiegbaren Eroberers zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Golden Retriever, der bis zuletzt Nähe suchte:</strong>
        Selbst sprachlos und dem Tod nahe, empfing er noch jeden einzelnen Soldaten – dieselbe
        Verbindungssuche, die sein ganzes Leben trug, blieb bis zum letzten Atemzug erhalten.</p>
        <p class="vb-intro"><strong>b) Ein Körper, der die Grenzenlosigkeit nicht mehr mittragen konnte:</strong>
        Elf Jahre ohne wirkliche Rast, mehrere schwere Kriegsverletzungen und exzessiver
        Alkoholkonsum trafen an einem einzigen Punkt zusammen.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug, sondern Weiterplanen bis zum Umkippen:</strong>
        Noch während erste Fieberschübe ihn schwächten, arbeitete er an den Vorbereitungen für
        den nächsten Feldzug – Stillstand kam für ihn nicht infrage.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Der Glaube, unbesiegbar sein zu müssen:</strong>
        Die Leidenschaft der Zwei, <strong>Stolz</strong>, zeigte sich bei Alexander als
        Weigerung, jemals innezuhalten – elf Jahre Feldzug ohne echte Erholungsphase, mehrfach
        schwer verwundet, immer wieder an vorderster Front.</p>
        <p class="vb-intro"><strong>b) Der Verlust Hephaistions als Wendepunkt:</strong>
        Nach dem Tod seines engsten Gefährten 324 v. Chr. rutschte Alexander in seinen
        Achter-Stresspunkt – unnachgiebiger, härter, mit exzessivem Trinken als Ausdruck seines
        Schmerzes. Genau in dieser Phase begann sich das Muster zu verdichten, das wenige Monate
        später in seinen körperlichen Zusammenbruch mündete.</p>
        <p class="vb-intro"><strong>c) Ein letztes Trinkgelage als möglicher Auslöser:</strong>
        Antike Quellen sehen im Trinkgelage zu Ehren des Nearchos kurz vor seinem Tod einen
        möglichen Auslöser oder zumindest Verstärker seiner Erkrankung – ob Alkoholvergiftung,
        eine begünstigte Infektion oder reiner Zufall, ist bis heute ungeklärt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein plötzlicher, rätselhafter Zusammenbruch?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren gesamtes Selbstbild auf Unbesiegbarkeit und
        grenzenloser Hingabe an die eigene Mission beruhte, liegt eine Deutung nahe: Ausgerechnet
        ein Körper, der niemals „genug" kannte, brach zusammen, ohne dass sein Träger selbst je
        „genug" gesagt hätte. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu einem plötzlichen
        Kollaps führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Alexanders Fall zeigen lässt, ist ein Muster im Umfeld einer
        Krankheit, das bei einer ausgeprägten sozialen Zwei mit Dreierflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Alexander lebte über zwei Jahrtausende vor der Entstehung des Enneagramms als modernem
        Persönlichkeitsmodell – er kannte sein eigenes Muster nicht bewusst. Seine Weigerung,
        jemals eine Grenze zu akzeptieren – weder die des eigenen Körpers noch, zuvor, die
        geografische am Fluss Hyphasis, die ihm erst seine eigenen Soldaten aufzwangen – wurde
        nie als wiederkehrendes Verhaltensmuster erkannt, sondern einfach als Wesensmerkmal eines
        „geborenen Eroberers" gelebt. Wer die eigene Grenzenlosigkeit nicht als Muster kennt,
        kann sie auch nicht rechtzeitig zügeln, wenn der eigene Körper längst an seine Grenzen
        stößt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Alexanders</strong> soziale Zwei mit
        Dreierflügel noch einmal ablesen: ein Körper, der elf Jahre lang keine Grenze
        akzeptierte, und ein Zusammenbruch, der so plötzlich und rätselhaft blieb wie das Leben
        selbst grenzenlos gewesen war. Der Golden Retriever, der bis zur letzten Sekunde
        Verbindung suchte – und dessen eigener Körper am Ende die einzige Grenze setzte, die er
        sich selbst nie gesetzt hätte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-alexander-der-grosse", label:"Porträt: Alexander der Große (SO2w3) – Lebenswerk"},
        {route:"krankheitsportraets-julius-caesar", label:"Krankheitsporträt: Julius Caesar (SO2w3) – verborgene Epilepsie"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function billieEilishKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-billie-eilish-portrait.jpg" alt="Billie Eilish" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Billie Eilish</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · geb. 2001</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Billie Eilish</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-billie-eilish">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nur beiläufig erwähnt wird: das Tourette-Syndrom, das sie über
        Jahre vor der Öffentlichkeit verbarg, bevor sie es 2018 selbst bestätigte, sowie eine
        schwere depressive Phase mit Selbstverletzung im Teenageralter.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Eilish</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 trägt Schmerz roh und ungefiltert nach außen; der Dreierflügel
        gibt ihr zugleich das Gespür dafür, wie viel davon öffentlich gezeigt werden kann,
        ohne die eigene Wirkung zu gefährden. Genau diese Kombination – kompromisslose
        Ehrlichkeit in der Musik, verbunden mit strategischer Zurückhaltung bei bestimmten
        gesundheitlichen Themen – bestimmte den Umgang mit dem eigenen Tourette-Syndrom und
        der eigenen Depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Tics bereits im Kindesalter:</strong>
        Nach eigener Aussage bemerkte Eilish erste Tics bereits als Kind, lange bevor eine
        Diagnose gestellt wurde oder das Thema öffentlich bekannt war.</p>
        <p class="vb-intro"><strong>b) Diagnose des Tourette-Syndroms:</strong>
        Eilish wurde mit dem Tourette-Syndrom diagnostiziert, einer neurologischen Störung,
        die sich durch unwillkürliche Bewegungen und Lautäußerungen zeigt.</p>
        <p class="vb-intro"><strong>c) Beginn einer depressiven Phase in der frühen Jugend:</strong>
        Parallel dazu beschrieb sie später in der Dokumentation „The World's a Little
        Blurry" (2021) eine schwere depressive Episode, die etwa im Alter von zwölf Jahren
        begann.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Jahrelange bewusste Geheimhaltung des Tourette-Syndroms:</strong>
        Eilish hielt die Diagnose über Jahre vor der Öffentlichkeit geheim, aus Sorge, auf
        die Erkrankung reduziert oder in Interviews ständig danach gefragt zu werden.</p>
        <p class="vb-intro"><strong>b) Selbstverletzendes Verhalten als Teil der depressiven Phase:</strong>
        In derselben Dokumentation sprach sie offen über selbstverletzendes Verhalten
        während dieser Zeit sowie über anhaltende Suizidgedanken.</p>
        <p class="vb-intro"><strong>c) Körperbildbezogene Belastung durch öffentliche Aufmerksamkeit:</strong>
        Die mit vierzehn Jahren einsetzende öffentliche Aufmerksamkeit verstärkte nach
        eigener Schilderung ein bereits angespanntes Verhältnis zum eigenen Körper.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliche Bestätigung des Tourette-Syndroms 2018:</strong>
        Eilish bestätigte die Diagnose erstmals öffentlich in einem Interview 2018, nachdem
        Fans Videoaufnahmen ihrer Tics online diskutiert hatten.</p>
        <p class="vb-intro"><strong>b) Offener Umgang mit Missverständnissen:</strong>
        Seither erklärt sie wiederholt in Interviews, wie sich Tourette bei ihr äußert, und
        korrigiert öffentlich gängige Fehlvorstellungen über die Erkrankung.</p>
        <p class="vb-intro"><strong>c) Ausführliche Dokumentation der depressiven Phase:</strong>
        Die 2021 veröffentlichte Dokumentation begleitet Eilish über mehrere Jahre und zeigt
        auch unbearbeitete Aufnahmen aus der Zeit der schwersten depressiven Episode.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für ein wenig bekanntes Krankheitsbild:</strong>
        Eilishs Offenheit über Tourette trug international dazu bei, Missverständnisse über
        die Erkrankung abzubauen, da sie eine der bekanntesten öffentlichen Personen mit
        dieser Diagnose ist.</p>
        <p class="vb-intro"><strong>b) Positive Resonanz auf die Dokumentation:</strong>
        Die schonungslose Offenheit der Dokumentation über Depression und
        Selbstverletzung wurde von Kritikern und jungen Fans gleichermaßen als
        außergewöhnlich ehrlich gewürdigt.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte künstlerische Verarbeitung:</strong>
        Themen wie Körperbild, psychische Gesundheit und der Druck öffentlicher
        Aufmerksamkeit blieben zentrale Motive ihrer späteren Alben, ohne dass die
        Erkrankungen selbst zum Vermarktungsthema wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ungefilterte Offenheit in der Musik, Zurückhaltung beim Tourette-Syndrom:</strong>
        Die SX4-typische Kompromisslosigkeit zeigte sich in Eilishs Texten uneingeschränkt –
        beim Tourette-Syndrom hingegen entschied sie sich über Jahre bewusst für
        Zurückhaltung, aus Sorge vor Reduktion auf die Diagnose.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die kontrollierte öffentliche Offenlegung:</strong>
        Als Eilish sich schließlich zur Tourette-Diagnose äußerte, geschah das nicht
        spontan, sondern in einem kontrollierten Interviewrahmen – dieselbe strategische
        Präzision, mit der der Dreierflügel auch ihre musikalische Karriere prägte.</p>
        <p class="vb-intro"><strong>c) Die Dokumentation als Form kontrollierter Verletzlichkeit:</strong>
        Dass die tiefste Offenlegung der eigenen depressiven Phase in einem sorgfältig
        produzierten Dokumentarfilm erfolgte statt in einem spontanen Interview, passt zur
        SX4w3-Dynamik: rohe Ehrlichkeit, aber in eine wirkungsvolle Form gebracht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme kompromissloser Ehrlichkeit, die eine Diagnose jahrelang verschwieg:</strong>
        Eilishs gesamtes Werk beruht auf der Weigerung, irgendetwas zu beschönigen –
        ausgerechnet das Tourette-Syndrom blieb über Jahre die eine Ausnahme von diesem
        Prinzip, bis sie selbst entschied, wann und wie es öffentlich würde.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-freddie-mercury">Freddie
        Mercury (SX4w3)</a>: Auch Mercury verbarg eine gesundheitliche Diagnose über Jahre
        vor der Öffentlichkeit, bevor er sie schließlich zu einem selbst gewählten Zeitpunkt
        bestätigte. Bei beiden SX4w3ern zeigt sich dasselbe Muster: die Kontrolle über den
        eigenen Offenlegungszeitpunkt wird zur letzten verbleibenden Form der
        Selbstbestimmung angesichts einer Diagnose, die man sich nicht ausgesucht hat.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet unwillkürliche Bewegungen, bei einer Künstlerin präziser Kontrolle?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren gesamtes Werk auf der präzisen
        Kontrolle über Bild, Ton und Auftritt beruht, liegt eine Deutung nahe: Ausgerechnet
        eine neurologische Störung, die sich durch unkontrollierbare Bewegungen und Laute
        äußert, traf eine Künstlerin, deren öffentliches Bild von perfekt orchestrierter
        Selbstinszenierung lebt. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu Tourette-Syndrom
        oder Depression führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Eilishs Fall zeigen lässt, ist ein
        Muster im Umgang mit einer nicht selbst gewählten gesundheitlichen Diagnose, das bei
        einer ausgeprägten sexuellen Vier mit Dreierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Eilish kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die sexuelle Vier mit
        Dreierflügel hält reflexhaft an der Kontrolle darüber fest, wann und wie das eigene
        Innenleben gezeigt wird, auch wenn das bedeutet, eine belastende Diagnose über Jahre
        allein zu tragen, und lebt genau dieses Muster bis heute weitgehend unverändert aus.
        Wer die eigene Neigung, Offenheit strikt zu terminieren und zu inszenieren, nicht als
        Muster erkennt, riskiert, dass gerade die Themen, die am dringendsten Unterstützung
        bräuchten, am längsten verborgen bleiben.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der sexuelle Typ 4 mit Dreierflügel erklärt bei <strong>Billie Eilish</strong> vieles
        am Umgang mit Tourette-Syndrom und Depression: eine Künstlerin, deren gesamtes Werk
        auf kompromissloser Ehrlichkeit beruht, entschied bei den eigenen gesundheitlichen
        Diagnosen bewusst selbst, wann diese Ehrlichkeit einsetzte – der Chihuahua, der
        nicht lauter werden muss, um gehört zu werden, sondern nur so ehrlich, wie er selbst
        es zulassen kann.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-billie-eilish", label:"Porträt: Billie Eilish (SX4w3)"},
        {route:"krankheitsportraets-freddie-mercury", label:"Krankheitsporträt: Freddie Mercury (SX4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function claudeDebussyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-claude-debussy-portrait.jpg" alt="Claude Debussy" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Claude Debussy</p>
        <p class="krim-portrait-typ">SX4w5 · Sexueller Typ 4 mit Fünferflügel · 1862–1918</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Claude Debussy</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-claude-debussy">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk und seine
        Typstruktur. Diese Seite vertieft ein Kapitel, das dort nicht zur Sprache kommt: eine
        Darmkrebs-Diagnose 1909, ein fast neunjähriger, zunehmend schmerzhafter
        Krankheitsverlauf während des Ersten Weltkriegs und ein Tod inmitten der deutschen
        Beschießung von Paris.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Debussy</strong> ist der <strong>sexuellen Vier mit Fünferflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Rivalität</em>: die brennende Überzeugung,
        dass die bestehende Ordnung einem etwas Wesentliches vorenthält, verbunden mit dem
        Antrieb, dagegen anzutreten. Der Fünferflügel bringt die Fähigkeit hinzu, sich in Arbeit
        und Struktur zu vertiefen, bis keine Kraft mehr bleibt – ein Muster, das sich bis in
        Debussys Umgang mit der eigenen tödlichen Krankheit nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Symptome bereits 1908:</strong>
        Ab 1908 klagte Debussy zunehmend über Verdauungsbeschwerden und Blutungen – Symptome,
        die er zunächst als vorübergehend abtat, während er weiter komponierte und dirigierte.</p>
        <p class="vb-intro"><strong>b) Diagnose 1909:</strong>
        1909 wurde bei Debussy Darmkrebs diagnostiziert. Er hielt die Diagnose weitgehend
        privat und setzte seine kompositorische Arbeit sowie öffentliche Auftritte als
        Dirigent und Pianist fort.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten trotz erster Behandlungen:</strong>
        Schon in den ersten Jahren nach der Diagnose unterzog sich Debussy wiederholt
        schmerzhaften Behandlungen, ohne seine Konzerttätigkeit und Kompositionsarbeit
        grundlegend einzuschränken.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Radium-Behandlungen ab 1915:</strong>
        Ab 1915 unterzog sich Debussy mehreren Radium-Behandlungen gegen den fortschreitenden
        Krebs – eine damals neuartige, äußerst schmerzhafte Therapieform mit ungewissem
        Erfolg.</p>
        <p class="vb-intro"><strong>b) Eine Operation im Dezember 1915:</strong>
        Im Dezember 1915 unterzog sich Debussy einer der ersten Kolostomie-Operationen in
        Frankreich – ein Eingriff, der ihn körperlich stark schwächte, seinen kompositorischen
        Ehrgeiz jedoch nicht brach.</p>
        <p class="vb-intro"><strong>c) Komposition trotz sich verschlechternder Gesundheit:</strong>
        In den Jahren nach der Operation komponierte Debussy weiter, darunter seine letzten
        großen Kammermusikwerke – entstanden in Phasen zunehmender Schmerzen und
        Erschöpfung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein letzter öffentlicher Auftritt unter Kriegsbedingungen:</strong>
        Im September 1917, bereits schwer von der Krankheit gezeichnet, gab Debussy eines
        seiner letzten Konzerte in Paris – während die Stadt unter dem Bombardement der
        deutschen Armee stand.</p>
        <p class="vb-intro"><strong>b) Rascher Verfall im Frühjahr 1918:</strong>
        In den ersten Monaten des Jahres 1918 verschlechterte sich Debussys Zustand dramatisch.
        Er war zunehmend ans Bett gefesselt, während die sogenannte Pariser Kanone die Stadt
        aus fast 130 Kilometern Entfernung beschoss.</p>
        <p class="vb-intro"><strong>c) Tod am 25. März 1918:</strong>
        Debussy starb in seiner Wohnung in Paris im Alter von 55 Jahren, während die Stadt
        unter deutschem Artilleriebeschuss lag. Wegen der Kriegslage fand seine Beerdigung
        unter kleinem Rahmen statt – ein stiller Abschied inmitten des Kriegslärms.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Fast neun Jahre zwischen Diagnose und Tod:</strong>
        Von der Diagnose 1909 bis zu seinem Tod 1918 lebte Debussy fast neun Jahre mit einer
        fortschreitenden, zunehmend schmerzhaften Krankheit, ohne sein kompositorisches
        Schaffen vollständig aufzugeben.</p>
        <p class="vb-intro"><strong>b) Ein Spätwerk, geprägt von Verlust und Schmerz:</strong>
        Debussys letzte Kompositionen – entstanden während der schlimmsten Kriegsjahre und der
        fortschreitenden Krankheit – tragen eine Klarheit und Zurückhaltung, die viele
        Musikhistoriker als bewussten Rückzug auf das Wesentliche lesen.</p>
        <p class="vb-intro"><strong>c) Krankheit und Krieg als paralleler roter Faden:</strong>
        Debussys letzte Lebensjahre verliefen parallel zum Ersten Weltkrieg – seine persönliche
        Krankheitsgeschichte und der Zusammenbruch der europäischen Ordnung, die er zeitlebens
        in Frage gestellt hatte, endeten fast im selben Moment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rivalität, gerichtet gegen die eigene Sterblichkeit:</strong>
        So wie Debussy sein Leben lang gegen die etablierte Musikwelt ankämpfte, kämpfte er
        auch gegen die fortschreitende Krankheit – nicht durch Verdrängung, sondern durch
        fortgesetztes, kompromissloses Schaffen.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Rückzugsort in der Krankheit:</strong>
        Je kränker Debussy wurde, desto mehr zog er sich in die eigene kompositorische Arbeit
        zurück – dieselbe Vertiefung in Struktur und Klang, die ihn schon als jungen Komponisten
        auszeichnete, wurde nun zum Ort, an dem der Schmerz für Stunden verschwand.</p>
        <p class="vb-intro"><strong>c) Ein letztes Konzert als Trotzreaktion:</strong>
        Sein Auftritt 1917 unter Kriegsbedingungen, schwer krank, zeigt dieselbe Haltung, die
        sein gesamtes Werk durchzog: sich nicht von äußeren Umständen – ob Kritikern oder
        Kanonen – die eigene Musik diktieren zu lassen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Neun Jahre zwischen Diagnose und Tod:</strong>
        Von 1909 bis 1918 lebte Debussy mit einer Krankheit, die er nie öffentlich in den
        Mittelpunkt seines Lebens stellte, sondern die er durch fortgesetzte kompositorische
        Arbeit gewissermaßen überschrieb.</p>
        <p class="vb-intro"><strong>b) Konfrontation statt Rückzug aus der Öffentlichkeit:</strong>
        Anders als Karl Lagerfeld (SO3w4) oder Michael Jackson (SO4w3), die ihre Krankheit
        hinter einer makellosen Fassade verbargen, zog sich Debussy zwar körperlich zurück,
        gab aber bis zuletzt öffentliche Konzerte – eine eigene, zwischen Konfrontation und
        Rückzug liegende Form des Umgangs mit der eigenen Sterblichkeit.</p>
        <p class="vb-intro"><strong>c) Ein Tod, der mit dem Zusammenbruch einer Epoche zusammenfiel:</strong>
        Dass Debussy ausgerechnet während der Beschießung von Paris starb, verstärkt den
        Eindruck eines Lebens, dessen private und historische Krisen bis zuletzt
        ineinandergriffen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Darm?</strong>
        Für eine sexuelle Vier, deren gesamtes Werk aus der Verdauung und Verwandlung von
        Schmerz in Kunst bestand, liegt eine Deutung nahe: Ausgerechnet das Organ, das im
        wörtlichsten Sinn verdaut, wurde zum Schauplatz eines Kampfes, den Debussy nie
        öffentlich austrug, sondern in seine Musik hinein verdichtete. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu Darmkrebs führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Debussys Fall zeigen lässt, ist ein Muster im Umgang mit der eigenen Krankheit,
        das bei einer ausgeprägten sexuellen Vier mit Fünferflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Debussy kannte sein eigenes Muster nicht – die sexuelle Vier verwandelt Schmerz
        reflexhaft in Werk statt in Schonung, und genau das ließ ihn auch angesichts einer
        tödlichen Diagnose weiterarbeiten, weiterdirigieren, weiterauftreten, statt sich Zeit
        für die eigene Genesung zu nehmen. Wer das eigene Muster, Schmerz sofort in Ausdruck zu
        verwandeln, nicht kennt, verpasst möglicherweise den Moment, in dem Innehalten die
        klügere Antwort gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Debussys</strong> sexuelle Vier mit
        Fünferflügel noch einmal ablesen: eine fast neunjährige Krankheit, die er nie
        öffentlich zum Zentrum seines Lebens machte, ein letztes Konzert unter Kanonendonner
        und ein Tod, der mit dem Zusammenbruch einer ganzen Epoche zusammenfiel. Der Chihuahua,
        der der Musik beibrachte zu schweben, auch als der eigene Körper längst nicht mehr
        tragen konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-claude-debussy", label:"Porträt: Claude Debussy (SX4w5) – Lebenswerk"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – Gegenmodell: Verbergen statt Auftreten"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function elizabethBarrettBrowningKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elizabeth-barrett-browning-portrait.jpg" alt="Elizabeth Barrett Browning" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elizabeth Barrett Browning</p>
        <p class="krim-portrait-typ">SX9w8 &middot; Sexueller Typ 9 mit Achterflügel &middot; 1806&ndash;1861</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elizabeth Barrett Browning</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elizabeth-barrett-browning">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr dichterisches Lebenswerk und die
        Flucht nach Italien. Hier geht es ausschließlich um ein Kapitel, das dort nur gestreift
        wird: eine jahrzehntelange, nie eindeutig diagnostizierte chronische Krankheit, verbunden
        mit einer über Jahrzehnte fortgeführten Opiumbehandlung – und die Frage, was es bedeutet,
        wenn eine sexuelle Neun buchstäblich gegen die eigene Bewusstlosigkeit ankämpfen muss.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Barrett Browning</strong> ist der <strong>sexuellen Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die sexuelle Neun <em>Verschmelzung</em>: die Sehnsucht, in
        einem einzigen Gegenüber vollständig aufzugehen. Der Achterflügel gibt dieser
        Verschmelzung eine Kraft, die sich notfalls kämpferisch behauptet, statt sich einfach nur
        anzupassen. Genau dieses Wechselspiel – jahrzehntelange, medikamentös vertiefte
        Bewusstlosigkeit gegenüber dem eigenen Leben, unterbrochen von einem einzigen, radikal
        wachen Akt der Selbstbehauptung – prägte Barrett Brownings gesamten Krankheitsverlauf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste chronische Beschwerden in der Jugend:</strong>
        Ab etwa ihrem fünfzehnten Lebensjahr litt Elizabeth Barrett an anhaltenden Schmerzen,
        vermutlich im Zusammenhang mit einer Rückenverletzung – möglicherweise Folge eines
        Reitunfalls –, die bis heute medizinhistorisch nicht abschließend geklärt ist.</p>
        <p class="vb-intro"><strong>b) Frühe Verordnung von Opium:</strong>
        Schon als junge Frau verschrieben ihr die Ärzte Laudanum (Opiumtinktur) gegen die
        Schmerzen – ein damals gängiges, aber stark abhängig machendes Mittel, das sie bis an ihr
        Lebensende begleiten sollte.</p>
        <p class="vb-intro"><strong>c) Verschlechterung durch eine Lungenerkrankung:</strong>
        Parallel zu den Rückenbeschwerden entwickelte sich eine chronische Lungenschwäche, die
        die Familie 1838 dazu bewog, sie zur Kur in das mildere Klima von Torquay an der
        englischen Südküste zu schicken.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine bis heute nicht eindeutig rekonstruierbare Diagnose:</strong>
        Medizinhistoriker diskutieren als mögliche Ursachen unter anderem eine Wirbelsäulenerkrankung,
        eine frühe Form der Tuberkulose oder eine funktionelle, durch chronischen Schmerz und
        familiäre Enge verstärkte Erkrankung – eine moderne, eindeutige Diagnose lässt sich aus
        den historischen Quellen nicht mehr gewinnen.</p>
        <p class="vb-intro"><strong>b) Jahrzehntelange Opiumabhängigkeit als eigenständiges Krankheitsbild:</strong>
        Anders als bei den meisten Krankheitsporträts dieses Kompasses trat neben die ursprüngliche
        körperliche Erkrankung ein zweites, selbst erzeugtes Leiden: die medikamentöse
        Dauerbehandlung mit Opium führte zu einer physischen Abhängigkeit, die ihr Leben über
        Jahrzehnte mitbestimmte.</p>
        <p class="vb-intro"><strong>c) Ein Trauma, das die Krankheit vertiefte:</strong>
        1840 ertrank ihr geliebter Bruder Edward bei einem Segelunglück vor Torquay – wenige
        Wochen, nachdem er gegen den Willen ihres Vaters bei ihr geblieben war, um sie zu
        pflegen. Elizabeth machte sich für seinen Tod mitverantwortlich und zog sich danach für
        Jahre noch weiter aus dem Leben zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Über zwanzig Jahre kaum aus dem eigenen Zimmer heraus:</strong>
        Nach dem Tod ihres Bruders verschärfte sich ihre Isolation im Elternhaus in der Londoner
        Wimpole Street erheblich – Zeitgenossen beschrieben sie als eine Frau, die ihr Zimmer
        kaum noch verließ, das Bett fast nie und Besuch fast nur noch liegend empfing.</p>
        <p class="vb-intro"><strong>b) Ein Leben, das sich zunehmend im Halbschlaf abspielte:</strong>
        Die tägliche Opiumdosis dämpfte nicht nur den Schmerz, sondern auch die Wachheit – Barrett
        selbst beschrieb in Briefen Phasen benommener Müdigkeit, die sie von ihrer Umwelt
        abschnitten, lange bevor irgendjemand das Wort Abhängigkeit dafür benutzt hätte.</p>
        <p class="vb-intro"><strong>c) Und mitten darin: eine ungebrochene literarische Produktivität:</strong>
        Ausgerechnet aus diesem Zustand heraus entstanden einige ihrer bekanntesten Werke – ein
        Befund, der Ärzte und Biografen bis heute beschäftigt, wie viel geistige Klarheit neben
        der körperlichen und medikamentösen Schwäche erhalten blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Die Flucht 1846 als körperlicher Wendepunkt:</strong>
        Nach der heimlichen Heirat und der Übersiedlung nach Italien besserte sich Barrett
        Brownings Gesundheit spürbar – wärmeres Klima, ein selbstbestimmtes Leben und die
        Distanz zum Vaterhaus wirkten sich messbar positiv aus, auch wenn die Opiumeinnahme
        bestehen blieb.</p>
        <p class="vb-intro"><strong>b) Vier Fehlgeburten und ein überlebendes Kind:</strong>
        In Italien erlitt sie mehrere Fehlgeburten, bevor 1849 ihr Sohn Robert Wiedeman Barrett
        Browning (genannt „Pen“) gesund zur Welt kam – für eine Frau ihres damaligen
        Gesundheitszustands ein medizinisch bemerkenswertes Ereignis.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahrzehnt zwischen Schaffenskraft und Verfall:</strong>
        Die 1850er-Jahre brachten sowohl ihr politisch engagiertestes Werk als auch einen
        erneuten, schleichenden gesundheitlichen Verfall, der sich in den letzten Lebensjahren
        deutlich beschleunigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der aus dem Nebel heraus handelte:</strong>
        Die Entscheidung zur Flucht 1846 traf eine Frau, die seit Jahren in einem Zustand
        medikamentöser Gedämpftheit lebte – und die trotzdem in der Lage war, einen
        hochriskanten, monatelang geheim gehaltenen Plan bis ins Detail durchzuziehen. Das ist
        die Signatur des Achterflügels: Kraft, die auch durch Nebel hindurch handlungsfähig
        bleibt.</p>
        <p class="vb-intro"><strong>b) Verschmelzung, die sich gegen die eigene Bewusstlosigkeit richtete:</strong>
        Die sexuelle Neun sucht Verschmelzung – bei Barrett Browning geschah das über zwanzig
        Jahre lang vor allem als Verschmelzung mit der eigenen Passivität, dem Krankenzimmer, der
        Dämpfung. Die Bindung an Robert Browning war die erste Verschmelzung, die sie aus dieser
        Bewusstlosigkeit heraus- statt weiter hineinzog.</p>
        <p class="vb-intro"><strong>c) Eine Wachheit, die nur im äußersten Ernstfall auftauchte:</strong>
        Auffällig ist, wie punktuell sich ihre Kraft zeigte – nicht als dauerhafte Rebellion gegen
        die eigene Situation, sondern als ein einziger, hochkonzentrierter Ausbruch, wenn wirklich
        alles auf dem Spiel stand. Dazwischen blieb die vertraute Dämpfung bestehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur wörtlichen Bewusstlosigkeit wurde:</strong>
        Die sexuelle Neun trägt als Schattenseite die Gefahr, sich so vollständig anzupassen und
        zu verschmelzen, dass die eigene Wachheit dem Leben gegenüber verloren geht – bei kaum
        einem anderen Porträt dieses Kompasses wird dieses Muster so konkret körperlich, wie bei
        einer Frau, deren tägliche Opiumdosis genau diese Unbewusstheit über Jahrzehnte hinweg
        buchstäblich chemisch verstärkte.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel als der Teil, der aufwachte:</strong>
        Wäre Elizabeth Barrett eine sexuelle Neun ohne ausgeprägten Achterflügel gewesen, hätte
        diese jahrzehntelange Dämpfung vermutlich bis zum Ende angehalten. Stattdessen brach
        genau in dem Moment, in dem die eine Bindung – die einzige, die für sie zählte – bedroht
        war, eine Entschlossenheit durch, die stark genug war, den eigenen Nebel zu durchbrechen
        und einen Fluchtplan bis zum letzten Detail umzusetzen. Die Krankheit forderte den
        Achterflügel geradezu heraus, sich zu zeigen.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Opium?</strong>
        Für eine sexuelle Neun, deren tiefstes Muster die Verschmelzung mit dem Anderen bis zur
        Auflösung der eigenen Grenzen ist, liegt eine Deutung nahe: Opium erzeugt chemisch genau
        jenen Zustand der Entgrenzung und gedämpften Wachheit, den die sexuelle Neun psychisch
        ohnehin anstrebt – eine Substanz, die dem eigenen Muster nicht entgegenwirkt, sondern es
        potenziert. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Das Stresspunkt-Mittel, verordnet an eine Neun:</strong>
        Aus Sicht der Enneagramm-Homöopathie, wie sie in diesem Kompass verwendet wird, ist Opium
        (Schlafmohn) das homöopathische Heilmittel des Typs 6 – der Stresspunkt der Neun. Ein
        homöopathisches Stresspunkt-Mittel ist bei einem anderen Typ nie neutral: Es verstärkt
        genau jenes Muster, in das der Mensch unter Belastung ohnehin abgleitet – bei der Neun ist
        das die Passivität, die Schläfrigkeit, die Unbewusstheit gegenüber dem eigenen Leben.
        Barrett Browning erhielt über Jahrzehnte, medizinisch begründet als Schmerzmittel,
        ausgerechnet jenes Mittel, das ihr eigenes Notfallmuster nicht auflöste, sondern
        chemisch vertiefte – aus enneagrammhomöopathischer Sicht denkbar ungünstig, auch wenn die
        damalige Medizin von dieser Zuordnung naturgemäß nichts wissen konnte.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Neun zwangsläufig zu Abhängigkeitserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Barrett Brownings Fall zeigen lässt, ist ein Muster, das bei tiefer
        Verschmelzungsneigung in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Barrett Browning kannte ihr eigenes Muster nicht – die sexuelle Neun mit Achterflügel verschmilzt leicht mit dem Willen anderer, statt den eigenen Weg zu gehen, und genau das hielt sie über zwanzig Jahre in der Isolation des Vaterhauses und in der Opiumabhängigkeit gefangen. Erst die eine intensive Verbindung, die sie schließlich aus diesem Haus herausriss, durchbrach ein Muster, das ihr selbst nie bewusst war.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Barrett Brownings</strong> Krankengeschichte lässt sich die sexuelle Neun mit
        Achterflügel in einer besonders klaren Zuspitzung ablesen: eine über Jahrzehnte
        vertiefte, auch chemisch erzeugte Bewusstlosigkeit gegenüber dem eigenen Leben – und ein
        einziger, radikal wacher Akt, der genau diese Dämpfung durchbrach, als die eine Bindung
        auf dem Spiel stand, die zählte. Das Faultier, das die meiste Zeit im Halbschlaf hängt –
        und in dem einen Moment, in dem es darauf ankommt, mit aller Kraft zugreift.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elizabeth-barrett-browning", label:"Porträt: Elizabeth Barrett Browning (SX9w8) – Lebenswerk"},
        {route:"beruehmte-lucy-cooke", label:"Porträt: Lucy Cooke (SX9w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

export function franzKafkaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-kafka-portrait.jpg" alt="Franz Kafka" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Kafka</p>
        <p class="krim-portrait-typ">SE5w4 · Selbsterhaltender Typ 5 mit Viererflügel · 1883–1924</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Kafka</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-franz-kafka">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur kurz erwähnt
        wird: Ab 1917 litt Kafka an Tuberkulose. In seinen letzten Lebensmonaten griff die
        Krankheit auf den Kehlkopf über und machte ihm das Sprechen so unerträglich schmerzhaft,
        dass er zuletzt nur noch über handschriftliche Zettel mit seiner Umgebung
        kommunizieren konnte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kafka</strong> ist der <strong>selbsterhaltenden Fünf mit Viererflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Fünf die <em>Burg</em>: Das eigene
        Territorium wird zur Festung, die den Zugriff der Welt so weit wie möglich beschränkt.
        Der Viererflügel bringt ein Gespür für das Einzigartige am eigenen inneren Erleben
        hinzu – auch am eigenen Leiden, das Kafka nie nur als medizinisches Faktum, sondern
        stets auch als Ausdruck seiner inneren Zerrissenheit deutete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nach innen gerichtet, unbestechlich genau:</strong>
        Kafkas Blick auf die eigene Krankheit war derselbe wie auf seine literarischen Figuren
        – schonungslos präzise, ohne sich selbst zu schonen oder die eigene Lage zu
        beschönigen.</p>
        <p class="vb-intro"><strong>b) Krankheit als Bestätigung eines Verdachts:</strong>
        In Briefen deutete Kafka die Tuberkulose-Diagnose fast erleichtert – als hätte sein
        Körper endlich ausgesprochen, was sein Geist längst wusste. Der Fünferblick erkennt
        auch im eigenen Verfall noch ein Muster, das sich einordnen lässt.</p>
        <p class="vb-intro"><strong>c) Rückzug bis zur völligen Sprachlosigkeit:</strong>
        Als die Krankheit den Kehlkopf befiel, verlor Kafka buchstäblich seine Stimme – die
        Burg der SE5 erreichte hier ihre radikalste Form – nicht mehr von ihm selbst errichtet,
        sondern ihm vom Schicksal auferlegt, und ebenso wenig mehr zu überwinden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Diagnose als später Einschnitt:</strong>
        1917 wurde bei Kafka Tuberkulose diagnostiziert, im Alter von 34 Jahren – ein
        Wendepunkt, der ihm zunehmend Rückzugsgründe lieferte, die er zuvor nur psychologisch
        hatte begründen müssen.</p>
        <p class="vb-intro"><strong>b) Die Krankheit als Argument gegen Bindung:</strong>
        Bereits vor der Diagnose hatte Kafka zwei Verlobungen mit Felice Bauer gelöst, weil ihm
        die Ehe wie eine Bedrohung seiner literarischen Existenz erschien. Die Tuberkulose
        lieferte ihm später ein zusätzliches, kaum anfechtbares Argument gegen jede dauerhafte
        Nähe.</p>
        <p class="vb-intro"><strong>c) Sanatorien statt Öffentlichkeit:</strong>
        Die letzten Lebensjahre verbrachte Kafka überwiegend in Sanatorien – ein äußerlich
        erzwungener, innerlich aber vertrauter Rückzug aus der Welt, die er zeitlebens
        gemieden hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Schreiben bis zur physischen Grenze:</strong>
        Auch in den letzten Lebensmonaten korrigierte Kafka noch Druckfahnen und arbeitete an
        der Erzählung <em>Ein Hungerkünstler</em> – deren Titelfigur sich zu Tode fastet, weil
        sie nie die Nahrung fand, die ihr schmeckte, ein Bild, das sich mit Kafkas eigenem,
        durch die Krankheit erzwungenen Verhungern auf beklemmende Weise überschneidet.</p>
        <p class="vb-intro"><strong>b) Kommunikation nur noch auf Papier:</strong>
        In den letzten Wochen konnte Kafka nicht mehr sprechen und verständigte sich
        ausschließlich über handschriftliche Zettel – eine Situation, die sein gesamtes
        literarisches Schaffen, das fast ausschließlich im Schreiben und nie im direkten
        Gespräch stattfand, auf tragische Weise beim Wort nahm.</p>
        <p class="vb-intro"><strong>c) Milena Jesenská an seiner Seite:</strong>
        Trotz seines Rückzugsmusters ließ Kafka in seiner letzten Lebensphase Milena
        Jesenská so nah an sich heran wie kaum einen anderen Menschen – ein seltener Bruch der
        sonst so konsequent verteidigten Burg.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das erst nach dem Tod wirkte:</strong>
        Kafka starb 1924 weitgehend unbekannt als Schriftsteller – die Wucht seines Werks
        entfaltete sich vollständig erst posthum, durch Max Brods Weigerung, es wie gewünscht
        zu vernichten.</p>
        <p class="vb-intro"><strong>b) Krankheit als literarisches Echo:</strong>
        Themen wie Verfall, Bestrafung und Ausgeliefertsein an den eigenen Körper durchziehen
        Kafkas Werk schon vor der Diagnose – die Tuberkulose bestätigte, wirkungsvoller als
        jede Interpretation, ein Grundmuster, das er lange vorher literarisch vorweggenommen
        hatte.</p>
        <p class="vb-intro"><strong>c) Stille, die zur Stimme wurde:</strong>
        Der Mensch, der im Sterben buchstäblich verstummte, wurde postum zu einer der
        einflussreichsten literarischen Stimmen des zwanzigsten Jahrhunderts – eine Ironie, die
        Kafka selbst kaum hätte erfinden können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Schaffenskraft trotz fortschreitendem Verfall:</strong>
        Selbst als Essen und Sprechen zur Qual wurden, arbeitete Kafka weiter an seinen Texten
        – die Energie floss bis zuletzt dorthin, wo für ihn die eigentliche Existenz stattfand.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Körper und literarischem Motiv:</strong>
        Für Kafka gab es keine klare Trennung zwischen dem eigenen körperlichen Verfall und den
        Themen seines Werks – beides durchdrang sich gegenseitig, ohne dass er es künstlich
        trennen musste.</p>
        <p class="vb-intro"><strong>c) Rückzug als einzig verbliebene Handlungsmöglichkeit:</strong>
        Wo dem Körper immer weniger Handlungsspielraum blieb, zog sich Kafka noch tiefer in das
        Schreiben zurück – die letzte, ihm verbliebene Form von Kontrolle.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Sieben Jahre mit einer tödlichen Diagnose:</strong>
        1917 mit Tuberkulose diagnostiziert, starb Kafka 1924 im Alter von nur 40 Jahren in
        einem Sanatorium bei Wien – sieben Jahre, in denen die Krankheit sein Leben zunehmend
        bestimmte, ohne dass er sein literarisches Schaffen aufgab.</p>
        <p class="vb-intro"><strong>b) Der Hungerkünstler als Vorwegnahme:</strong>
        In seiner letzten vollendeten Erzählung, <em>Ein Hungerkünstler</em>, lässt Kafka eine
        Figur verhungern, weil sie nie fand, was ihr schmeckte – kurz darauf machte die
        fortschreitende Kehlkopf-Tuberkulose auch Kafka selbst das Essen so schmerzhaft, dass
        er buchstäblich verhungerte.</p>
        <p class="vb-intro"><strong>c) Ein Rückzugsargument, das er sich nie wünschen musste:</strong>
        Kafka hatte sein Leben lang Nähe mit dem Verweis auf seine literarische Existenz
        gemieden. Die Tuberkulose lieferte ihm, ungewollt, ein Argument, das niemand mehr
        infrage stellen konnte – die Burg der SE5, diesmal nicht selbst errichtet, sondern vom
        eigenen Körper endgültig vollendet.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Kehlkopf?</strong>
        Kafkas gesamtes literarisches Werk kreist um Figuren, die sich einem übermächtigen,
        undurchschaubaren System gegenüber nicht verständlich machen können – Josef K. in
        <em>Der Prozess</em> erfährt nie, wessen er beschuldigt wird, der Landvermesser in
        <em>Das Schloss</em> erreicht die Behörde nie, die über ihn entscheidet. Dass
        ausgerechnet Kafkas eigene Krankheit sich zuletzt in seinem Kehlkopf festsetzte und ihm
        buchstäblich die Stimme nahm, liest sich als bitterste denkbare Zuspitzung dieses
        Grundmusters: der Mensch, dessen Figuren ein Leben lang nicht gehört wurden, verlor am
        Ende auch selbst die physische Fähigkeit, gehört zu werden – und musste seine letzten
        Worte, wie seine Figuren ihre letzten Hoffnungen, buchstäblich zu Papier bringen, statt
        sie aussprechen zu können. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu
        Tuberkulose oder anderen Erkrankungen der Atemwege führt – <strong>jeder Mensch kann
        jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Kafkas Fall zeigen
        lässt, ist ein Muster, das bei radikalem Rückzug aus zwischenmenschlicher Nähe in der
        Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kafka kannte sein eigenes Muster nicht – die selbsterhaltende Fünf mit Viererflügel zieht sich mit fortschreitender Bedrohung noch tiefer in die eigene innere Welt zurück, und genau das tat er, bis ihm am Ende nur noch handschriftliche Zettel blieben, um sich mitzuteilen. Wer das eigene Rückzugsmuster nicht kennt, merkt nicht, wie weit es sich zuspitzen kann, bevor keine Kommunikation mehr möglich ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Was <strong>Kafka</strong> als selbsterhaltende Fünf mit Viererflügel ausmachte, wird an
        seiner eigenen Erkrankung noch einmal greifbar: ein Rückzug, der zur Lebensform wurde, ein Leiden,
        das er nie von seinem Werk trennte, und eine Krankheit, die ihm ausgerechnet jenes
        Organ nahm, mit dem er sich der Welt hätte verständlich machen können – während seine
        Figuren genau dasselbe Schicksal literarisch vorweggenommen hatten. Die Eule, die im
        Dunkeln schrieb, um von niemandem gesehen zu werden, verstummte am Ende auch im
        wörtlichen Sinn – und wurde gerade dadurch zu einer der gehörtesten Stimmen der
        Literaturgeschichte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-franz-kafka", label:"Porträt: Franz Kafka (SE5w4) – Lebenswerk"},
        {route:"astrologie-franz-kafka", label:"Enneagramm meets Astrologie: Franz Kafka (SE5w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

export function fridaKahloKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frida-kahlo-portrait.jpg" alt="Frida Kahlo" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frida Kahlo</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · 1907–1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frida Kahlo</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-frida-kahlo">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr künstlerisches Lebenswerk und ihre
        Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nur gestreift
        wird: rund 30 Operationen über fast drei Jahrzehnte, eine Beinamputation kurz vor ihrem
        Tod, und ein Leben, das sich buchstäblich weigerte, sich vom eigenen Körper besiegen zu
        lassen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kahlo</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Dreierflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Me First</em>: Die SE2 muss sich selbst
        zuerst versorgen, um überhaupt für andere da sein zu können. Der Dreierflügel bringt
        den Willen hinzu, gesehen zu werden – das eigene Leiden nicht zu verstecken, sondern zu
        gestalten und zu zeigen. Genau dieses Muster durchzieht ihren gesamten
        Krankheitsverlauf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kinderlähmung mit sechs Jahren:</strong>
        1913 erkrankte Kahlo an Polio, die ihr rechtes Bein dauerhaft schwächte und dünner
        wachsen ließ – Mitschüler verspotteten sie deswegen als „Frida pata de palo" (Frida
        Stelzbein).</p>
        <p class="vb-intro"><strong>b) Der Busunfall von 1925:</strong>
        Mit achtzehn Jahren erlitt Kahlo einen katastrophalen Unfall, als eine Straßenbahn den
        Bus rammte, in dem sie saß – eine Eisenstange durchbohrte ihr Becken, ihre Wirbelsäule
        brach an drei Stellen, ihr rechtes Bein an elf Stellen.</p>
        <p class="vb-intro"><strong>c) Eine Prognose, die ihr das Gehen und Kinder absprach:</strong>
        Ärzte gaben ihr zunächst kaum Überlebenschancen und rechneten später damit, dass sie
        nie wieder würde gehen oder Kinder bekommen können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rund 30 Operationen über fast drei Jahrzehnte:</strong>
        Von 1925 bis kurz vor ihrem Tod 1954 unterzog sich Kahlo Dutzenden Eingriffen an
        Wirbelsäule, Becken und Bein – ein medizinischer Dauerzustand, der nie wirklich endete.</p>
        <p class="vb-intro"><strong>b) Lebenslange Korsetts und Stützkonstruktionen:</strong>
        Über weite Strecken ihres Lebens trug Kahlo Gips- und später Stahlkorsette, die ihren
        Rumpf stabilisierten – sie bemalte einige davon später selbst und machte sie so zu
        einem Teil ihrer Kunst.</p>
        <p class="vb-intro"><strong>c) Mehrere Fehlgeburten durch die Unfallschäden:</strong>
        Die Beckenverletzungen des Unfalls führten zu mehreren Fehlgeburten, die Kahlo in
        schonungslos direkten Werken wie „Henry Ford Hospital" verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Ausstellungseröffnung im eigenen Bett:</strong>
        1953, bei ihrer einzigen Einzelausstellung in Mexiko, ließ sich die bereits schwer
        kranke Kahlo mit dem Krankenwagen zur Galerie bringen und empfing die Gäste liegend in
        ihrem eigenen, dort aufgestellten Himmelbett.</p>
        <p class="vb-intro"><strong>b) Amputation des rechten Unterschenkels 1953:</strong>
        Nach Jahren fortschreitender Durchblutungsstörungen musste Kahlos rechtes Bein wegen
        Wundbrands unterhalb des Knies amputiert werden – ein Einschnitt, der sie tief in eine
        Depression stürzte.</p>
        <p class="vb-intro"><strong>c) Tod am 13. Juli 1954 in Mexiko-Stadt:</strong>
        Frida Kahlo starb offiziell an einer Lungenembolie im Alter von 47 Jahren – manche
        Historiker vermuten bis heute einen möglichen Suizid durch Überdosis, ohne dass dies je
        zweifelsfrei geklärt wurde.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Nusrat Fateh Ali Khan und Mozart</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Sowohl <a href="javascript:void(0)" data-route="beruehmte-nusrat-fateh-ali-khan">Nusrat
        Fateh Ali Khan</a> als auch
        <a href="javascript:void(0)" data-route="beruehmte-wolfgang-amadeus-mozart">Wolfgang
        Amadeus Mozart</a> (beide SE2w3) arbeiteten und traten bis kurz vor ihrem Tod öffentlich
        auf, obwohl ihr Körper längst schwer erkrankt war. Ihre
        <a href="javascript:void(0)" data-route="krankheitsportraets-nusrat-fateh-ali-khan">Krankheitsporträts</a>
        zeigen dasselbe SE2w3-Muster wie bei Kahlo: Rückzug ist keine Option, solange die
        eigene Kraft noch für einen letzten Auftritt reicht – auch wenn dieser Auftritt, wie
        bei Kahlos Ausstellungseröffnung im eigenen Bett, den Körper selbst zum Kunstwerk
        macht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das ohne den Unfall nie entstanden wäre:</strong>
        Kahlo selbst sagte sinngemäß, sie male sich selbst, weil sie so oft allein sei und weil
        sie das Objekt sei, das sie am besten kenne – ihr Lebenswerk ist untrennbar mit ihrem
        Krankheitsverlauf verwoben.</p>
        <p class="vb-intro"><strong>b) Eine Ausstellung, die zur Legende wurde:</strong>
        Die Bild einer schwerkranken Künstlerin, die die eigene Ausstellungseröffnung vom
        eigenen Krankenbett aus zelebrierte, wurde zu einem der bekanntesten Bilder der
        Kunstgeschichte des 20. Jahrhunderts.</p>
        <p class="vb-intro"><strong>c) Ein Tod, dessen genaue Umstände offenbleiben:</strong>
        Die bis heute ungeklärte Frage, ob ihr Tod ein natürliches Ende oder ein bewusster
        letzter Akt war, spiegelt die Unmöglichkeit, Kahlos Verhältnis zu Schmerz und Kontrolle
        auf eine einfache Formel zu bringen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Flusspferd, das sein Revier bis zuletzt verteidigte:</strong>
        Selbst mit amputiertem Bein und tiefer Depression gab Kahlo das Malen nicht auf –
        dieselbe Fürsorge, die sie zuerst sich selbst schuldete, hielt sie bis zum Ende am
        Werk.</p>
        <p class="vb-intro"><strong>b) Schmerz, der zum Bild und damit sichtbar wurde:</strong>
        Statt ihr Leiden zu verbergen, malte Kahlo offen gezeigte Operationsnarben, Korsette
        und medizinische Instrumente – der Dreierflügel, der aus privatem Schmerz ein
        öffentliches Bild formte, bis in die eigene Krankheitsgeschichte hinein.</p>
        <p class="vb-intro"><strong>c) Ein letzter Tagebucheintrag zwischen Schmerz und Lebenswillen:</strong>
        „Ich hoffe, der Abgang ist fröhlich – und ich hoffe, nie wiederzukommen", schrieb Kahlo
        kurz vor ihrem Tod – kein Satz der Resignation, sondern einer, der beides zugleich
        hielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Fast drei Jahrzehnte im Ausnahmezustand des eigenen Körpers:</strong>
        Von ihrem 18. Lebensjahr bis zu ihrem Tod mit 47 kannte Kahlo kaum eine Phase ohne
        Schmerzen, Operationen oder Korsette – kein plötzlicher Einbruch, sondern ein
        lebenslanger, sich stetig zuspitzender Ausnahmezustand.</p>
        <p class="vb-intro"><strong>b) Die Weigerung, sich zurückzuziehen:</strong>
        Das Schicksalsmuster der Zwei ist der Stolz – die Überzeugung, sich selbst und anderen
        unentbehrlich zu sein, auch unter größter Belastung. Kahlo hielt öffentliche Auftritte
        aufrecht, selbst als ihr Körper längst an seine Grenzen gestoßen war.</p>
        <p class="vb-intro"><strong>c) Der eigene Körper als erstes und letztes Kunstwerk:</strong>
        Von den ersten Selbstporträts im Krankenbett bis zur Ausstellungseröffnung im eigenen
        Bett schloss sich ein Kreis: Kahlos Kunst begann mit dem eigenen, verletzten Körper und
        endete mit ihm.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der eigene Körper als Leinwand?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren tiefstes Bedürfnis darin
        besteht, sich zuerst selbst zu versorgen und dieses Leiden dann sichtbar zu gestalten,
        liegt eine Deutung nahe: Ausgerechnet ein Körper, der beinahe fünfzig Jahre lang
        Schmerz produzierte, wurde zur ergiebigsten Quelle ihres gesamten künstlerischen
        Schaffens – Leiden, das nicht verdrängt, sondern zum zentralen Thema gemacht wurde.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        chronischen Körperschäden führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Kahlos Fall zeigen lässt, ist ein Muster im
        Umgang mit chronischem Leiden, das bei einer ausgeprägten selbsterhaltenden Zwei mit
        Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kahlo kannte das Enneagramm als modernes Persönlichkeitsmodell nicht – es entstand erst
        Jahrzehnte nach ihrem Tod in seiner heutigen Form. Sie lebte den Zwang, sich zuerst
        selbst zu versorgen und dann dieses Leiden sichtbar zu machen, völlig unbewusst aus –
        nicht als Strategie, sondern als einzige ihr bekannte Weise, mit einem Leben voller
        Schmerz umzugehen. Wer das eigene Muster, Leiden erst durchleben und dann gestalten zu
        müssen, nicht kennt, kann sich selbst auch nicht die Pause gönnen, die echte Heilung
        manchmal erfordert hätte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Kahlos</strong> selbsterhaltende Zwei mit
        Dreierflügel noch einmal ablesen: ein Körper, der fast drei Jahrzehnte lang Schmerz
        produzierte, und eine Frau, die diesen Schmerz nie verdrängte, sondern zur zentralen
        Sprache ihrer Kunst machte. Das Flusspferd, das sein Wasser nie verlassen konnte – und
        das gerade darin lernte, bis zum letzten Atemzug zu gestalten, statt nur zu
        überleben.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-frida-kahlo", label:"Porträt: Frida Kahlo (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-yayoi-kusama", label:"Krankheitsporträt: Yayoi Kusama (SE2w3) – Kunst aus psychischem statt körperlichem Leiden"},
        {route:"krankheitsportraets-nusrat-fateh-ali-khan", label:"Krankheitsporträt: Nusrat Fateh Ali Khan (SE2w3) – dieselbe Weigerung zurückzuweichen"},
        {route:"krankheitsportraets-wolfgang-amadeus-mozart", label:"Krankheitsporträt: Wolfgang Amadeus Mozart (SE2w3)"},
        {route:"krankheitsportraets-ai-weiwei", label:"Krankheitsporträt: Ai Weiwei (SE2w3) – Gewalt, die zum Kunstwerk wurde"},
        {route:"krankheitsportraets-mr-t", label:"Krankheitsporträt: Mr. T (SE2w3) – Körper als sichtbares Zeugnis"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function giacomoPucciniKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-giacomo-puccini-portrait.jpg" alt="Giacomo Puccini" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Giacomo Puccini</p>
        <p class="krim-portrait-typ">SX8w7 · Sexueller Typ 8 mit Siebenerflügel · 1858–1924</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Giacomo Puccini</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-giacomo-puccini">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Opernkomponist.
        Diese Seite widmet sich einem Kapitel, das dort nur knapp gestreift wird: 1924, mitten in
        der Arbeit an seiner letzten Oper <em>Turandot</em>, wurde bei Puccini, einem
        starken Zigarrenraucher, Kehlkopfkrebs diagnostiziert. Eine radikale Radiumbehandlung
        in Brüssel nahm ihm die Stimme, wenige Tage später starb er an einem Herzinfarkt als
        Komplikation der Behandlung – <em>Turandot</em> blieb unvollendet.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Puccini</strong> ist dem <strong>sexuellen Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Naranjo nannte die sexuelle Acht <em>Besitz</em> – auf Englisch
        <em>Possession</em>: Sie will keine distanzierte Verbindung, sondern die vollständige
        Verschmelzung mit dem, was sie berührt. Der Siebenerflügel bringt Genusssucht und
        Ablenkungsbedürfnis hinzu – kompromisslose Leidenschaft nicht nur auf der Bühne,
        sondern auch im Leben selbst, mit Rennwagen, Jagd und einem öffentlichen
        Eifersuchtsskandal.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein verschluckter Knochen als scheinbar harmloser Auslöser:</strong>
        1923, während der Arbeit an <em>Turandot</em>, verschluckte sich Puccini
        angeblich an einem Gänseknochen – danach begannen wiederkehrende
        Kehlkopfentzündungen, Ohrenschmerzen und Schluckbeschwerden.</p>
        <p class="vb-intro"><strong>b) Zunehmende Heiserkeit im Februar 1924:</strong>
        Halsschmerzen und Dysphonie verstärkten sich so weit, dass eine Halsschwellung den
        Hemdkragen nicht mehr schließen ließ – ein Symptom, das der langjährige starke
        Raucher zunächst herunterspielte.</p>
        <p class="vb-intro"><strong>c) Mehrere Fachärzte, eine wachsende Gewissheit:</strong>
        Im Laufe des Jahres 1924 konsultierte Puccini mehrere Spezialisten in Florenz. Am
        3. November verwies eine gemeinsame Konsultation ihn an einen Strahlentherapeuten
        in Brüssel – die Diagnose Kehlkopfkrebs stand fest.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Weiterkomponieren trotz fortschreitender Symptome:</strong>
        Auch als sich die Beschwerden verstärkten, arbeitete Puccini weiter an
        <em>Turandot</em> – der Wille, das Werk fertigzustellen, ließ sich von der
        körperlichen Verschlechterung zunächst nicht bremsen.</p>
        <p class="vb-intro"><strong>b) Eine radikale, damals hochmoderne Behandlung:</strong>
        Am 24. November 1924 setzte der Brüsseler Spezialist Dr. Louis Ledoux sieben
        radioaktive Radium-Nadeln direkt in Puccinis Kehlkopftumor ein – ein knapp
        vierstündiger Eingriff unter Lokalanästhesie, begleitet von einer Tracheotomie
        (einem Luftröhrenschnitt) und einer Magensonde.</p>
        <p class="vb-intro"><strong>c) Verlust der Stimme nach dem Eingriff:</strong>
        Nach der Behandlung konnte Puccini nicht mehr sprechen, weil die Nadeln seine
        Stimmbänder blockierten. In einer schriftlichen Notiz an Angehörige beschrieb er das
        Gefühl, als hätte er <em>Bajonette im Hals</em>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die eigene Diagnose lange verdrängt:</strong>
        Puccini verschwieg die Schwere seiner Erkrankung lange gegenüber sich selbst und
        seinem Umfeld – ein Verhaltensmuster, das mehrfach als sein größter Fehler im
        Umgang mit der Krankheit beschrieben wurde.</p>
        <p class="vb-intro"><strong>b) Volle Intensität bis zum radikalen Eingriff:</strong>
        Statt eine schonendere, langsamere Behandlung zu wählen, unterzog er sich der zu
        dieser Zeit aggressivsten verfügbaren Therapieform – kompromisslose Intensität, die
        typisch für die sexuelle Acht auch im Umgang mit der eigenen Krankheit blieb.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das er nicht loslassen wollte:</strong>
        Bis zuletzt blieb <em>Turandot</em> sein zentrales Anliegen – die Vollendung dieser
        Oper war ihm wichtiger als Schonung oder Zurückhaltung angesichts der eigenen
        fortschreitenden Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Herzinfarkt als tödliche Komplikation:</strong>
        Am 28. November 1924, wenige Tage nach dem Eingriff, erlitt Puccini einen
        Herzinfarkt; er starb am folgenden Tag in Brüssel im Alter von 66 Jahren.</p>
        <p class="vb-intro"><strong>b) Eine Oper, die ohne ihr Ende bleibt:</strong>
        <em>Turandot</em> blieb unvollendet, das Schlussduett fehlte. Franco Alfano
        vollendete die Oper später nach Puccinis Skizzen; bei der Uraufführung 1926 unter
        Toscanini brach der Dirigent bewusst genau an der Stelle ab, an der Puccinis eigene
        Musik endete.</p>
        <p class="vb-intro"><strong>c) Ein Tod, der zum Mahnbeispiel wurde:</strong>
        In späteren Rückblicken gilt Puccinis langes Verschweigen der eigenen Diagnose als
        eine der folgenreichsten Fehlentscheidungen seines letzten Lebensjahres – eine
        Lehre, die bis heute in Diskussionen über den Umgang mit Krebsdiagnosen zitiert
        wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Volle Intensität, keine halben Schritte:</strong>
        Die Entscheidung für die radikalste verfügbare Behandlung statt eines vorsichtigeren
        Vorgehens passt zur sexuellen Acht, die Verschmelzung und volle Intensität sucht,
        auch im Umgang mit der eigenen Krankheit.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel als Fluchtreflex vor der Realität:</strong>
        Das lange Verdrängen der eigenen Diagnose lässt sich mit dem Siebenerflügel in
        Verbindung bringen, der unangenehme Realität eher meidet, als sich ihr frühzeitig
        zu stellen.</p>
        <p class="vb-intro"><strong>c) Arbeit als Fluchtpunkt bis zuletzt:</strong>
        <em>Turandot</em> blieb bis zum Eingriff sein zentraler Energiefokus – die
        kompositorische Arbeit hielt seine Aufmerksamkeit von der eigenen körperlichen
        Verschlechterung ab, solange es irgend ging.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die genau das Werkzeug traf, für das er lebte:</strong>
        Puccinis gesamtes Werk baute auf der menschlichen Stimme auf – ausgerechnet der
        Kehlkopf, das Organ, das Stimme überhaupt erst möglich macht, wurde zum Ort seiner
        tödlichen Erkrankung.</p>
        <p class="vb-intro"><strong>b) Verschweigen bis zuletzt:</strong>
        Statt sich früh der Realität der Diagnose zu stellen, verdrängte Puccini sie über
        Monate – eine Verzögerung, die spätere Beobachter explizit als seinen
        folgenreichsten Fehler benennen.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die radikalste, kompromissloseste Behandlung?</strong>
        Für eine sexuelle Acht mit Siebenerflügel, deren Leidenschaft auf volle,
        unmittelbare Intensität zielt, lässt sich in der Wahl der aggressivsten verfügbaren
        Therapieform eine Zuspitzung des eigenen Lebensmusters lesen: kein zögerliches
        Herantasten, sondern der volle, kompromisslose Zugriff – selbst wenn dieser
        Zugriff am Ende tödlich verlief. Diese Deutung wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht mit Siebenerflügel zwangsläufig
        zu Kehlkopfkrebs führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Puccinis Erkrankung ist zudem medizinisch klar mit
        seinem langjährigen, starken Zigarrenkonsum in Verbindung zu bringen, nicht rein
        psychosomatisch zu erklären. Was sich an seinem Fall zeigen lässt, ist ein Muster im
        Umgang mit der eigenen Krankheit, das bei einer ausgeprägten sexuellen Acht mit
        Siebenerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Puccini kannte sein eigenes Muster nicht – die sexuelle Acht mit Siebenerflügel drängt auf Intensität und Vollendung um jeden Preis, und genau dieser Drang hielt ihn trotz Kehlkopfkrebs an der Arbeit an Turandot fest, bis eine radikale Behandlung ihm buchstäblich die Stimme nahm. Wer den eigenen Drang zur Vollendung nicht als Muster erkennt, überhört auch die Warnsignale des eigenen Körpers.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Acht mit Siebenerflügel bestätigt sich bei <strong>Giacomo
        Puccini</strong> noch einmal im Umgang mit seiner eigenen Erkrankung: lange
        verdrängt, dann mit der radikalsten verfügbaren Behandlung kompromisslos
        angegangen, bis der Eingriff selbst tödlich wurde. Das Krokodil, das kompromisslose
        Leidenschaft auf der Bühne wie im Leben lebte, verteidigte sein Werk – die
        Vollendung von <em>Turandot</em> – bis in die letzten Tage, auch als der eigene
        Körper längst keinen Aufschub mehr zuließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-giacomo-puccini", label:"Portrait: Giacomo Puccini (SX8w7) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

export function helmutKohlKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-helmut-kohl-portrait.jpg" alt="Helmut Kohl" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Helmut Kohl</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel · 1930–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Helmut Kohl</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-helmut-kohl">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine 16 Jahre als Bundeskanzler und
        die deutsche Wiedervereinigung. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: Ein schwerer Sturz im Februar 2008 beendete abrupt Kohls
        öffentliches Leben und machte ihn für die letzten neun Jahre bis zu seinem Tod 2017
        weitgehend pflegebedürftig.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kohl</strong> ist dem <strong>selbsterhaltenden Typ 8 mit Neunerflügel</strong>
        zugeordnet. Die SE8 investiert ihre Kraft in die kompromisslose Sicherung des eigenen
        Terrains und engsten Umfelds; der Neunerflügel bringt Geduld und die Fähigkeit hinzu, Kontrolle über
        lange Zeiträume ohne sichtbare Anstrengung zu halten. Genau diese Kombination –
        Führungswille, gepaart mit der neunertypischen Neigung, die eigene Verwundbarkeit
        möglichst aus dem öffentlichen Blick zu halten – bestimmte auch, wie das Umfeld
        seine letzten Lebensjahre gestaltete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Sturz im Februar 2008:</strong>
        Kohl stürzte in seinem Haus in Ludwigshafen-Oggersheim schwer und zog sich eine
        Kopfverletzung zu, die eine Notoperation erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Dauerhafte körperliche Folgen:</strong>
        Nach dem Sturz war Kohl auf einen Rollstuhl angewiesen und konnte sich nicht mehr
        selbstständig fortbewegen – ein radikaler Bruch für einen Mann, dessen physische
        Präsenz jahrzehntelang Teil seiner politischen Wirkung gewesen war.</p>
        <p class="vb-intro"><strong>c) Weitgehender Verlust der Sprache:</strong>
        Die Verletzung schränkte auch Kohls Sprechfähigkeit erheblich ein – der einst für
        seine bedächtige, aber wortgewaltige Pfälzer Rhetorik bekannte Kanzler konnte sich
        fortan nur noch eingeschränkt verständlich machen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fast völliger Rückzug aus der Öffentlichkeit:</strong>
        Nach dem Sturz zeigte sich Kohl kaum noch öffentlich – ein starker Kontrast zu
        seinem jahrzehntelangen Bedürfnis, als zentrale Figur sichtbar zu bleiben.</p>
        <p class="vb-intro"><strong>b) Rund-um-die-Uhr-Pflege im eigenen Haus:</strong>
        Kohl verbrachte seine letzten Lebensjahre in häuslicher Pflege in Oggersheim, betreut
        von seiner zweiten Ehefrau Maike Kohl-Richter, die den Zugang zu ihm streng
        kontrollierte.</p>
        <p class="vb-intro"><strong>c) Öffentlich gewordener Streit um seine Betreuung:</strong>
        Kohls Söhne aus erster Ehe berichteten später öffentlich, ihnen sei der Kontakt zu
        ihrem Vater in dieser Zeit erschwert oder verwehrt worden – ein familiärer Konflikt,
        der weit über Kohls Tod hinaus die öffentliche Debatte um sein Erbe prägte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wenige, sorgfältig kontrollierte öffentliche Auftritte:</strong>
        Die seltenen Male, die Kohl nach 2008 noch öffentlich in Erscheinung trat – etwa
        2014 beim Besuch des französischen Präsidenten François Hollande – waren streng
        kontrollierte, kurze Momente, keine spontanen Auftritte mehr.</p>
        <p class="vb-intro"><strong>b) Kontroverse um sein politisches Erbe zu Lebzeiten:</strong>
        Noch während seiner Pflegebedürftigkeit erschien 2014 ein Buch mit angeblich
        vertraulichen Kohl-Zitaten seines früheren Ghostwriters, gegen dessen Veröffentlichung
        Kohl juristisch vorging – ein letzter, geschwächter Kampf um die Kontrolle über die
        eigene Geschichte.</p>
        <p class="vb-intro"><strong>c) Ein Staatsakt außerhalb der üblichen Form:</strong>
        Nach seinem Tod 2017 fand erstmals in der Geschichte der Bundesrepublik ein
        „Europäischer Trauerakt" im Europaparlament in Straßburg statt – eine besondere
        Würdigung, die Kohls Lebenswerk für die europäische Einigung unterstrich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein politisches Erbe, das den Verfall überdauerte:</strong>
        Trotz neun Jahren weitgehender Unsichtbarkeit blieb Kohls historische Bedeutung als
        „Kanzler der Einheit" in der öffentlichen Wahrnehmung ungebrochen.</p>
        <p class="vb-intro"><strong>b) Ein Familienstreit, der öffentlich ausgetragen wurde:</strong>
        Der Konflikt zwischen Kohls zweiter Ehefrau und seinen Söhnen aus erster Ehe um
        Zugang, Pflege und später auch das Erbe wurde in deutschen Medien ausführlich
        diskutiert und überschattete die letzten Lebensjahre erheblich.</p>
        <p class="vb-intro"><strong>c) Eine kontrollierte letzte Ruhestätte:</strong>
        Kohl wurde nicht neben seiner ersten Frau Hannelore, sondern auf eigenen Wunsch auf
        dem Gelände der Speyerer Domvorhalle beigesetzt – eine Entscheidung, die von seinen
        Söhnen als weiterer Ausdruck der Kontrolle seiner zweiten Frau über sein Lebensende
        kritisiert wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle behalten, auch als der Körper sie verweigerte:</strong>
        Dieselbe Überzeugung, dass die Fäden in der eigenen Hand bleiben müssen, die Kohls
        gesamte politische Laufbahn trug, bestimmte auch die Organisation seiner letzten
        Lebensjahre – nicht offene Verletzlichkeit, sondern ein streng kontrollierter,
        weitgehend abgeschirmter Rückzug.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das Aussitzen des eigenen Verfalls:</strong>
        Kohls legendäre Fähigkeit, Konflikte auszusitzen, statt sie öffentlich auszutragen,
        zeigte sich noch einmal in seinen letzten Jahren – kein öffentliches Ringen um
        Fassung, sondern ein stiller, fast unsichtbarer Rückzug hinter verschlossenen Türen.</p>
        <p class="vb-intro"><strong>c) Die Loyalitätsfalle als Wiederholung eines bekannten Musters:</strong>
        Wie schon in der CDU-Spendenaffäre, in der Kohl treue Netzwerke über Transparenz
        stellte, geriet auch seine letzte Lebensphase in eine Situation, in der enge
        persönliche Bindung – zu seiner zweiten Frau – wichtiger wurde als der offene Zugang
        für andere, die ihm nahestanden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Orang-Utan, dessen Revier ihn nicht mehr sehen durfte:</strong>
        Kohls gesamte politische Existenz beruhte auf Sichtbarkeit, Präsenz und persönlicher
        Kontrolle über sein Netzwerk – der Sturz 2008 bedrohte ausgerechnet diese Sichtbarkeit,
        während die Kontrolle über sein unmittelbares Umfeld paradoxerweise erhalten blieb,
        nur eben in anderer Hand.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">Winston Churchill</a>
        (ebenfalls SE8w9) verbarg 1953 im Amt einen schweren Schlaganfall wochenlang vor
        Öffentlichkeit und weiten Teilen des eigenen Kabinetts, statt die eigene Verwundbarkeit
        offenzulegen; Kohl reagierte auf seine eigene, weit dramatischere
        körperliche Einschränkung mit einer strukturell ähnlichen Haltung – nicht durch
        öffentliches Klagen, sondern durch stille Fortsetzung der Kontrolle über das eigene
        Umfeld, so weit es die Umstände noch zuließen. Beide Fälle zeigen dasselbe
        SE8w9-Muster: Die Acht mit Neunerflügel gibt die Kontrolle über das eigene
        Terrain und Umfeld selbst angesichts massiver körperlicher Einschränkung nicht
        leichtfertig auf. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">Krankheitsporträt zu Winston Churchill</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Bewegung und Sprache?</strong>
        Für einen selbsterhaltenden Achter mit Neunerflügel, dessen gesamte Macht auf physischer
        Präsenz und der Fähigkeit beruhte, mit bedächtiger, aber wirkungsvoller Rhetorik
        Räume zu füllen, liegt eine Deutung nahe: Ausgerechnet jene beiden Fähigkeiten –
        sich zu bewegen und zu sprechen –, die seine jahrzehntelange politische Wirkung
        trugen, wurden zum Ort der Einschränkung. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu einem Sturz mit
        dauerhafter Lähmung führt – <strong>jeder Mensch kann jede Krankheit oder
        Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich an Kohls Fall zeigen
        lässt, ist ein Muster im Umgang mit plötzlichem, massivem Kontrollverlust, das bei
        einer ausgeprägten selbsterhaltenden Acht mit Neunerflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kohl kannte sein eigenes Muster nicht – die selbsterhaltende Acht mit Neunerflügel hält
        reflexhaft an der Kontrolle über das eigene Umfeld fest, statt die eigene
        Verletzlichkeit je offen zuzulassen, und genau dieses Muster bestimmte, wie sein
        letztes Lebensjahrzehnt organisiert wurde. Wer die eigene Notwendigkeit, die Fäden
        in der Hand zu behalten, nicht als Muster erkennt, kann sie auch angesichts
        vollständiger körperlicher Abhängigkeit nicht ablegen – sie verlagert sich dann nur
        von der eigenen Person auf die engste Vertrauensperson.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Acht mit Neunerflügel erklärt bei <strong>Helmut Kohl</strong> vieles am
        Verlauf seiner letzten Lebensjahre: ein Mann, dessen gesamte Macht auf Präsenz und
        Kontrolle beruhte, verlor beides fast vollständig – und doch blieb, geduldig und
        unsichtbar im Hintergrund organisiert, genau jene Kontrolle über sein unmittelbares
        Umfeld erhalten, die sein ganzes Leben geprägt hatte. Der Orang-Utan, der nicht mehr
        auftreten konnte, aber sein Revier bis zuletzt nicht wirklich verließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-helmut-kohl", label:"Porträt: Helmut Kohl (SE8w9) – Kanzler der Einheit"},
        {route:"krankheitsportraets-winston-churchill", label:"Krankheitsporträt: Winston Churchill (SE8w9) – dasselbe Muster verborgener Verwundbarkeit"},
        {route:"krankheitsportraets-galarrwuy-yunupingu", label:"Krankheitsporträt: Galarrwuy Yunupingu (SE8w9) – dasselbe Muster, Kontrolle trotz körperlichen Verfalls"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

export function jamesLevineKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-james-levine-portrait.jpg" alt="James Levine" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">James Levine</p>
        <p class="krim-portrait-typ">SE9w1 · Selbsterhaltender Typ 9 mit Einserflügel · 1943–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>James Levine</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-james-levine">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein musikalisches Lebenswerk an der
        Metropolitan Opera und, im letzten Abschnitt, um die 2017 öffentlich gewordenen
        Missbrauchsvorwürfe. Hier geht es ausschließlich um ein davon getrenntes Kapitel: eine
        über Jahrzehnte fortschreitende Parkinson-Erkrankung und schwere Rückenleiden, die ihn
        zunehmend körperlich einschränkten, während er weiter dirigierte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Levine</strong> ist der <strong>selbsterhaltenden Neun mit Einserflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Neun <em>Appetit</em>: die Sehnsucht,
        vollständig in etwas zu wohnen, das nährt und trägt. Der Einserflügel gibt dieser
        Sehnsucht einen inneren Maßstab, der keine Abkürzungen duldet. Genau diese Kombination
        aus tiefer Verwurzelung und unnachgiebigem Anspruch an sich selbst prägte auch, wie
        Levine mit einem Körper umging, der ihm zunehmend die Kontrolle entzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Tremorsymptome bereits in den 1990er-Jahren:</strong>
        Kollegen und Orchestermitglieder bemerkten schon früh ein leichtes Zittern in Levines
        Händen, das er über Jahre hinweg weitgehend verbarg und nicht öffentlich thematisierte.</p>
        <p class="vb-intro"><strong>b) Rückenprobleme als frühes Warnsignal:</strong>
        Parallel zu den ersten neurologischen Anzeichen häuften sich bei Levine schwere
        Rückenbeschwerden, die mehrere operative Eingriffe notwendig machten und ihn wiederholt
        für längere Zeit von der Bühne fernhielten.</p>
        <p class="vb-intro"><strong>c) Ein Sturz 2006 als erster gravierender Einschnitt:</strong>
        Bei einem Sturz während eines Konzertes in Boston zog sich Levine einen Rotatorenmanschettenriss
        zu – ein Vorfall, der die zunehmende körperliche Verwundbarkeit erstmals öffentlich
        sichtbar machte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Parkinson-Diagnose, jahrelang privat gehalten:</strong>
        Levine erhielt die Diagnose Parkinson vermutlich bereits in den 1990er-Jahren, machte sie
        aber erst 2013 öffentlich – ein Muster der Geheimhaltung, das sich durch weite Teile
        seiner Karriere zog.</p>
        <p class="vb-intro"><strong>b) Ein schwerer Sturz 2011 als Wendepunkt:</strong>
        Ein Sturz während der Sommerpause 2011 führte zu einer schweren Rückenmarksverletzung,
        die eine Notoperation erforderlich machte und Levine für fast zwei Jahre komplett von
        der Bühne fernhielt.</p>
        <p class="vb-intro"><strong>c) Zunehmende Abhängigkeit von technischen Hilfsmitteln:</strong>
        Die Metropolitan Opera baute eigens einen motorisierten Rollstuhl-Lift, um Levine auf
        das Podium zu bringen – ein sichtbares Zeichen dafür, wie sehr sich sein Körper von
        seinem Willen, weiter zu dirigieren, entkoppelt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Dirigieren im Sitzen, mit minimaler Handbewegung:</strong>
        In seinen letzten aktiven Jahren dirigierte Levine sitzend, mit stark eingeschränkter
        Armbeweglichkeit – er kommunizierte mit dem Orchester zunehmend über Blickkontakt und
        Mimik statt über die klassische Dirigierbewegung.</p>
        <p class="vb-intro"><strong>b) Kein Rückzug, sondern Anpassung:</strong>
        Statt sich aus der aktiven Leitung zurückzuziehen, passte Levine seine Arbeitsweise
        immer wieder neu an die fortschreitende Erkrankung an – ein Muster, das über Jahrzehnte
        anhielt, bis die körperlichen Grenzen keine weitere Anpassung mehr zuließen.</p>
        <p class="vb-intro"><strong>c) Öffentliche Zurückhaltung trotz sichtbarer Symptome:</strong>
        Auch nachdem der Tremor und die eingeschränkte Mobilität für das Publikum unübersehbar
        geworden waren, sprach Levine selbst kaum öffentlich über seine Erkrankung – ein
        Schweigen, das zur selbsterhaltenden Neun passt, die Schwäche lieber in sich trägt, als
        sie auszusprechen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Rückkehr nach zwei Jahren Pause:</strong>
        2013 kehrte Levine, nun dauerhaft im Rollstuhl, an die Metropolitan Opera zurück – ein
        Comeback, das in der Klassikwelt als bemerkenswerter Ausdruck von Beharrlichkeit
        gewürdigt wurde.</p>
        <p class="vb-intro"><strong>b) Das Ende der aktiven Karriere 2017/2018:</strong>
        Levines Vertrag mit der Met endete 2018 – offiziell im Zusammenhang mit den
        Missbrauchsermittlungen, doch bereits zuvor hatte seine fortschreitende Erkrankung seine
        Möglichkeiten, das Orchester zu leiten, spürbar eingeschränkt.</p>
        <p class="vb-intro"><strong>c) Tod 2021 an den Folgen der Parkinson-Erkrankung:</strong>
        James Levine starb am 9. März 2021 in Palm Springs, Kalifornien, offiziell an den
        Komplikationen seiner langjährigen Parkinson-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Einserflügel, der keine Kompromisse mit der Krankheit einging:</strong>
        Levines innerer Anspruch an musikalische Präzision blieb auch dann bestehen, als sein
        Körper diese Präzision zunehmend erschwerte – der Wille zur Richtigkeit ließ sich von
        der Erkrankung nicht aufweichen.</p>
        <p class="vb-intro"><strong>b) Appetit, der sich an die veränderten Bedingungen anpasste:</strong>
        Die selbsterhaltende Neun sucht Vollständigkeit im Vertrauten – Levine fand diese
        Vollständigkeit weiterhin in der Musik, auch als der Zugang zu ihr immer eingeschränkter
        wurde, und bewahrte sich dadurch eine Form von innerer Stabilität.</p>
        <p class="vb-intro"><strong>c) Ein Territorium, das er bis zuletzt verteidigte:</strong>
        Wie beim Elefanten, der sein Revier nicht kampflos aufgibt, blieb die Met für Levine bis
        zum erzwungenen Ende sein Zuhause – der Rückzug kam nicht aus eigenem Entschluss, sondern
        wurde ihm von außen und von seinem eigenen Körper zugleich auferlegt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Vierteljahrhundert stiller Anpassung:</strong>
        Von den ersten Tremorsymptomen in den 1990er-Jahren bis zu seinem Tod 2021 zieht sich
        die fortschreitende Parkinson-Erkrankung wie ein roter Faden durch Levines gesamte
        späte Karriere – begleitet von schweren, wiederholten Rückenverletzungen.</p>
        <p class="vb-intro"><strong>b) Geheimhaltung als durchgängiges Muster:</strong>
        Ähnlich wie bei anderen Krankheitsporträts dieses Kompasses hielt Levine seine
        Diagnose über Jahre privat – ein Verhalten, das sich bei der selbsterhaltenden Neun
        besonders deutlich zeigt: Stabilität nach außen zu wahren, auch wenn im Inneren längst
        etwas ins Wanken geraten war.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Kontrolle über den eigenen Körper?</strong>
        Für eine selbsterhaltende Neun mit Einserflügel, deren tiefstes Bedürfnis die
        vollständige, ungestörte Verschmelzung mit ihrem Territorium ist, liegt eine Deutung
        nahe: Ausgerechnet eine Krankheit, die schrittweise die Kontrolle über die eigenen
        Bewegungen raubt, traf einen Mann, dessen gesamte Identität an der präzisen,
        körperlichen Beherrschung eines Orchesters hing. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Parkinson führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Levines Fall zeigen lässt, ist ein Muster, das bei stiller,
        anpassungsbereiter Beharrlichkeit trotz fortschreitendem Kontrollverlust in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Levine kannte sein eigenes Muster nicht – die selbsterhaltende Neun mit Einerflügel vermeidet lieber jede Aufmerksamkeit auf die eigene Schwäche, und genau das ließ ihn erste Tremorsymptome jahrelang privat verbergen, statt frühzeitig kürzerzutreten. Wer das eigene Vermeidungsmuster nicht kennt, verschiebt die notwendige Entscheidung, bis sie ihm von außen abgenommen wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Levines</strong> jahrzehntelanger Parkinson-Erkrankung lässt sich die
        selbsterhaltende Neun mit Einserflügel in ihrer beharrlichsten Form ablesen: eine
        stille, über Jahre verborgene Anpassung an fortschreitenden Kontrollverlust, ein
        unnachgiebiger innerer Anspruch, der sich von der Krankheit nicht erweichen ließ, und
        ein Territorium, das erst aufgegeben wurde, als kein Verbleiben mehr möglich war. Der
        Elefant, der sein Haus bewohnte, bis der eigene Körper und die äußeren Umstände ihm
        keine andere Wahl mehr ließen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-james-levine", label:"Porträt: James Levine (SE9w1) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

export function jordanPetersonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jordan-peterson-portrait.jpg" alt="Dr. Jordan Peterson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Jordan Peterson</p>
        <p class="krim-portrait-typ">SO1w9 · Sozialer Typ 1 mit Neunerflügel · geb. 1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jordan Peterson</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jordan-peterson">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur knapp angerissen wird: eine schwere
        Benzodiazepin-Abhängigkeit, die 2019/2020 in einen künstlich herbeigeführten
        Entzugskoma in Russland gipfelte, nachdem westliche Kliniken ihm nicht mehr
        helfen konnten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Peterson</strong> ist dem <strong>sozialen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SO1 trägt ihren Zorn als gesellschaftliches Anliegen, nicht als
        privaten Groll; der Neunerflügel bringt eine ruhige, geduldige Überzeugungskraft
        hinzu, die auch schwierige Botschaften ausdauernd wiederholt. Genau diese
        Kombination – Ordnung predigen, während im eigenen Leben das Chaos tobte –
        bestimmte den Verlauf seiner eigenen Suchterkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verordnung von Benzodiazepinen nach familiärer Krise:</strong>
        Nach eigener Schilderung erhielt Peterson Benzodiazepine ärztlich verordnet, unter
        anderem im Zusammenhang mit der schweren, seltenen Autoimmunerkrankung seiner
        Tochter Mikhaila und der damit verbundenen Belastung.</p>
        <p class="vb-intro"><strong>b) Schleichend zunehmende körperliche Abhängigkeit:</strong>
        Über die Zeit entwickelte sich eine physische Abhängigkeit, die nach eigener
        Aussage weit über die ursprünglich beabsichtigte Anwendung hinausging.</p>
        <p class="vb-intro"><strong>c) Verschärfung durch eine unerwartete Reaktion 2019:</strong>
        Eine paradoxe, extreme Reaktion auf eine Dosisanpassung im Frühjahr 2019 löste
        eine akute gesundheitliche Krise mit schweren Entzugssymptomen aus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolglose Behandlungsversuche in mehreren Ländern:</strong>
        Nach Angaben seiner Tochter Mikhaila, die den Fall öffentlich dokumentierte,
        suchten sie Behandlung in mehreren Kliniken in Nordamerika, ohne dass eine
        wirksame Linderung des Entzugs erreicht werden konnte.</p>
        <p class="vb-intro"><strong>b) Extreme Entzugssymptome, darunter Akathisie:</strong>
        Peterson berichtete später öffentlich über quälende Zustände, unter anderem eine
        als Akathisie beschriebene, kaum erträgliche innere Unruhe.</p>
        <p class="vb-intro"><strong>c) Reise nach Russland zur letzten Behandlungsoption:</strong>
        Ende 2019 reiste die Familie nach Russland, wo eine Klinik eine Behandlung
        anbot, die in westlichen Ländern zu diesem Zeitpunkt nicht verfügbar war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Künstlich herbeigeführtes Koma zur Entzugsbehandlung:</strong>
        In Moskau wurde Peterson nach Angaben seiner Tochter in ein induziertes Koma
        versetzt, um den schwersten Teil des körperlichen Entzugs zu überstehen.</p>
        <p class="vb-intro"><strong>b) Monatelanger, öffentlich weitgehend unsichtbarer Rückzug:</strong>
        Über weite Strecken dieser Krise verschwand Peterson fast vollständig aus der
        Öffentlichkeit – ein starker Kontrast zu seiner sonst omnipräsenten medialen
        Rolle.</p>
        <p class="vb-intro"><strong>c) Öffentliche Dokumentation durch die eigene Tochter:</strong>
        Mikhaila Peterson berichtete während und nach der Krise ausführlich in eigenen
        Videos über den Verlauf – eine ungewöhnlich offene Begleitung einer
        Suchterkrankung durch ein Familienmitglied.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale Aufmerksamkeit:</strong>
        Petersons Krise wurde international ausführlich berichtet – für viele eine
        überraschende Wendung im Leben einer Figur, die öffentlich für Selbstdisziplin
        und Ordnung stand.</p>
        <p class="vb-intro"><strong>b) Verzögerte, aber vollständige Rückkehr in die Öffentlichkeit:</strong>
        Nach monatelanger Genesung kehrte Peterson 2020/2021 schrittweise zu Vorträgen,
        Interviews und Veröffentlichungen zurück.</p>
        <p class="vb-intro"><strong>c) Offene spätere Verarbeitung in Interviews:</strong>
        Peterson sprach in den folgenden Jahren wiederholt öffentlich über die Krise,
        ohne sie zu verharmlosen oder auszublenden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Ordnung predigen, während das eigene Leben aus den Fugen geriet:</strong>
        Dieselbe SO1-Überzeugung, dass Chaos gefährlich und Ordnung eine moralische
        Pflicht ist, stand in scharfem Kontrast zu der Zeit, in der Peterson selbst die
        Kontrolle über den eigenen Körper verlor.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das lange Aushalten, bevor Hilfe gesucht wurde:</strong>
        Die geduldige, auf Dauer angelegte Überzeugungskraft des Neunerflügels zeigte
        sich auch darin, dass die Familie über Monate verschiedene Behandlungswege
        ausprobierte, bevor der radikale Schritt nach Russland unternommen wurde.</p>
        <p class="vb-intro"><strong>c) Offenheit als späte Form der Prinzipientreue:</strong>
        Dass Peterson die eigene Krise später öffentlich und ungeschönt beschrieb, passt
        zur SO1-typischen Überzeugung, dass Wahrheit – auch die unbequeme, eigene –
        ausgesprochen werden muss.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Verstand, der Ordnung predigte, während der Körper sie verlor:</strong>
        Petersons gesamtes öffentliches Werk beruht auf der Überzeugung, dass Struktur
        und Selbstdisziplin über das Chaos siegen können – ausgerechnet er geriet in eine
        körperliche Krise, in der genau diese Kontrolle vollständig verloren ging.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet der Verstand, der klarste zu denken behauptete?</strong>
        Für einen sozialen Einser mit Neunerflügel, dessen gesamte öffentliche Autorität
        auf rationaler Klarheit und geordnetem Denken beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, mit dem er Millionen Menschen Ordnung predigte, wurde
        durch die Medikamentenabhängigkeit selbst zum Ort des Kontrollverlusts. Diese
        Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu
        Medikamentenabhängigkeit führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Petersons Fall zeigen
        lässt, ist ein Muster im Umgang mit einer überwundenen Abhängigkeitskrise, das
        bei einem ausgeprägten sozialen Einser mit Neunerflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Peterson kennt sein eigenes Muster nicht als Enneagramm-Struktur – die soziale
        Eins mit Neunerflügel hält reflexhaft an der eigenen Ordnungsforderung fest,
        statt die eigene Verwundbarkeit rechtzeitig einzugestehen, und lebte genau dieses
        Muster bis zur akuten Krise unverändert aus. Wer die eigene Neigung, Kontrolle
        um jeden Preis aufrechtzuerhalten, nicht als Muster erkennt, riskiert, dass die
        Kontrolle erst im vollständigen Zusammenbruch endet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 1 mit Neunerflügel erklärt bei <strong>Jordan Peterson</strong>
        vieles am Verlauf seiner eigenen Abhängigkeitskrise: ein Mann, dessen gesamte
        öffentliche Autorität auf Ordnung und Selbstdisziplin beruhte, musste selbst die
        Erfahrung des vollständigen Kontrollverlusts durchleben, bevor er wieder Boden
        unter den Füßen fand – die Gans, die aus der Formation fiel und erst nach einem
        induzierten Koma zurück in den Schwarm fand.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jordan-peterson", label:"Porträt: Dr. Jordan Peterson (SO1w9)"},
        {route:"krankheitsportraets-adam-smith", label:"Krankheitsporträt: Adam Smith (SO1w9)"},
        {route:"krankheitsportraets-helmut-schmidt", label:"Krankheitsporträt: Helmut Schmidt (SO1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

export function karlMarxKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-karl-marx-portrait.jpg" alt="Karl Marx" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Karl Marx</p>
        <p class="krim-portrait-typ">SO8w9 · Sozialer Typ 8 mit Neunerflügel · 1818–1883</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Karl Marx</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-karl-marx">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seinen jahrzehntelangen
        Kampf gegen den Kapitalismus. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine über Jahrzehnte chronische, extrem schmerzhafte Hauterkrankung, die
        ihn buchstäblich am Sitzen hinderte, während er am "Kapital" schrieb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Marx</strong> ist der <strong>sozialen Acht mit Neunerflügel</strong>
        zugeordnet. Naranjo nannte die soziale Acht <em>Solidarität</em>: Kraft im Dienst der
        Unterdrückten. Der Neunerflügel bringt Geduld und die Fähigkeit, ein gewaltiges System
        über Jahrzehnte gedanklich zu durchdringen, statt impulsiv zu handeln. Genau diese
        stille, unerbittliche Beharrlichkeit trug Marx auch durch einen Körper, der sich ihm
        über Jahrzehnte hinweg schmerzhaft widersetzte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Hautbeschwerden schon in den 1840er-Jahren:</strong>
        Bereits in seinen Zwanzigern klagte Marx in Briefen über wiederkehrende Furunkel und
        Hautentzündungen – ein Leiden, das ihn von diesem Zeitpunkt an nie wieder ganz verließ.</p>
        <p class="vb-intro"><strong>b) Verschärfung im Londoner Exil:</strong>
        Mit dem Umzug nach London 1849, unter beengten Wohnverhältnissen, chronischem
        Geldmangel und schlechter Ernährung, nahmen die Hautbeschwerden deutlich an Häufigkeit
        und Schwere zu – ein Muster, das viele Ärzte seiner Zeit mit den Lebensbedingungen des
        Exils in Verbindung brachten.</p>
        <p class="vb-intro"><strong>c) Ein Leiden, das er selbst schonungslos benannte:</strong>
        In Briefen an Friedrich Engels beschrieb Marx seine Beschwerden mit erstaunlicher
        Offenheit und schwarzem Humor – ein früher Hinweis darauf, dass er die Krankheit nicht
        verdrängte, sondern sie, wie so vieles andere, in sein politisches Selbstverständnis
        einordnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Karbunkel an den schmerzhaftesten Stellen:</strong>
        Marx litt über Jahrzehnte an schweren, eitrigen Furunkeln und Karbunkeln – vor allem an
        Gesäß, Rücken und im Genitalbereich –, die medizinhistorisch heute häufig als Hidradenitis
        suppurativa gedeutet werden, eine chronisch-entzündliche Erkrankung der Schweißdrüsen.</p>
        <p class="vb-intro"><strong>b) Monatelange Schreibunterbrechungen:</strong>
        In besonders schweren Phasen konnte Marx wochenlang nicht sitzen und musste im Stehen
        oder auf der Seite liegend arbeiten – die Fertigstellung des ersten Bandes von "Das
        Kapital" verzögerte sich dadurch wiederholt um Monate.</p>
        <p class="vb-intro"><strong>c) Ein Netz weiterer chronischer Beschwerden:</strong>
        Neben den Karbunkeln dokumentieren seine Briefe und die Berichte seines Arztes
        chronische Bronchitis, Leberbeschwerden, Rheuma, Kopfschmerzen und wiederkehrende
        Augenentzündungen, vermutlich verstärkt durch nächtliches Arbeiten bei schlechtem
        Kerzenlicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der berühmte Galgenhumor gegenüber der Bourgeoisie:</strong>
        Überliefert ist ein Ausspruch Marx' gegenüber Engels, er hoffe, die Bourgeoisie werde
        sich seiner Karbunkel bis an ihr Lebensende erinnern – eine Formulierung, die den
        eigenen körperlichen Schmerz direkt mit seinem politischen Kampf verknüpfte.</p>
        <p class="vb-intro"><strong>b) Familientragödien als zusätzliche Last:</strong>
        Drei seiner sieben Kinder starben in jungen Jahren, teils an den Folgen der Armut, in
        der die Familie lebte – ein Kummer, der sich nach Berichten von Zeitgenossen auch
        körperlich auf Marx' Gesundheitszustand auswirkte.</p>
        <p class="vb-intro"><strong>c) Arbeit trotz Diagnose, nicht wegen ihrer Abwesenheit:</strong>
        Anders als bei manch anderem Krankheitsporträt dieses Kompasses war sich Marx seiner
        chronischen Beschwerden voll bewusst – er verbarg sie nicht, sondern integrierte sie in
        seinen Alltag als ständigen, nie ganz überwundenen Gegner.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der erste Band von "Das Kapital" 1867:</strong>
        Trotz jahrelanger, durch Krankheit bedingter Unterbrechungen vollendete Marx den ersten
        Band seines Hauptwerks – ein Kraftakt, der auch als Sieg über den eigenen, oft
        widerspenstigen Körper gelesen werden kann.</p>
        <p class="vb-intro"><strong>b) Die Bände zwei und drei blieben unvollendet:</strong>
        Die Fortsetzung des "Kapitals" wurde von Marx nie abgeschlossen; erst Friedrich Engels
        stellte die weiteren Bände nach Marx' Tod aus dessen Notizen zusammen – ein Hinweis
        darauf, wie sehr die chronische Krankheit sein Lebenswerk am Ende doch begrenzte.</p>
        <p class="vb-intro"><strong>c) Zunehmende Isolation in den letzten Lebensjahren:</strong>
        In seinen letzten Jahren, geschwächt durch Bronchitis und wiederkehrende
        Lungenentzündungen, zog sich Marx zunehmend aus dem öffentlichen politischen Leben
        zurück und war auf die Pflege durch seine Tochter Eleanor und Engels angewiesen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Neunerflügel, der auch den Körper stillhielt:</strong>
        Dieselbe stille, unerbittliche Beharrlichkeit, mit der Marx über Jahrzehnte an seinem
        Systemwerk arbeitete, zeigte sich auch im Umgang mit der eigenen Krankheit – kein
        dramatisches Aufbegehren, sondern zähes Weiterarbeiten trotz wiederkehrender,
        monatelanger Rückschläge.</p>
        <p class="vb-intro"><strong>b) Wut, die den Körper nach innen richtete:</strong>
        Die soziale Acht kämpft normalerweise nach außen, gegen sichtbare Feinde und
        Ungerechtigkeit – bei Marx richtete sich ein Teil dieser Intensität, medizinhistorisch
        diskutiert, möglicherweise auch nach innen, in Form chronischer, entzündlicher
        Körperreaktionen.</p>
        <p class="vb-intro"><strong>c) Die Löwen-Energie im Krankenzimmer:</strong>
        Selbst ans Bett gefesselt, ließ Marx laut Berichten von Besuchern kaum von seiner Arbeit
        ab – Bücher, Zeitungen und Notizen blieben griffbereit, auch wenn er zeitweise kaum
        sitzen konnte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leiden, das über vier Jahrzehnte begleitete:</strong>
        Von den ersten dokumentierten Furunkeln in den 1840er-Jahren bis zu seinem Tod 1883
        zieht sich die chronische Hauterkrankung wie ein roter Faden durch Marx' gesamtes
        erwachsenes Leben – parallel zu seinem gesamten literarischen und politischen
        Lebenswerk.</p>
        <p class="vb-intro"><strong>b) Ein Körper, der sich weigerte, sich niederzuwerfen:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses ist hier keine
        Geheimhaltung dokumentiert – Marx sprach offen über seine Beschwerden, verarbeitete sie
        sogar humoristisch, und ließ sich von ihnen dennoch nie vollständig aufhalten.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Haut?</strong>
        Für eine soziale Acht mit Neunerflügel, deren Kampfgeist sich normalerweise nach außen,
        gegen konkrete Ungerechtigkeit richtet, liegt eine Deutung nahe: Ausgerechnet die Haut –
        die Grenze zwischen Innen und Außen, zwischen dem Körper und der feindlichen Welt, gegen
        die Marx sein ganzes Leben kämpfte – wurde selbst zum Schauplatz eines chronischen,
        schmerzhaften Konflikts. Diese Deutung wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu Hauterkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Marx' Fall zeigen lässt, ist ein Muster, das bei chronisch nach außen
        gerichtetem Kampfgeist in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Marx kannte sein eigenes Muster nicht – die soziale Acht duldet keine Unterbrechung der eigenen Mission, und genau das ließ ihn über vier Jahrzehnte trotz schmerzhafter Karbunkel unbeirrt an seinem Lebenswerk weiterarbeiten, statt sich die nötige Schonung zuzugestehen. Wer das eigene Durchhaltemuster nicht kennt, verwechselt Nachgeben mit Niederlage, selbst wenn der eigene Körper längst innehalten müsste.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Marx'</strong> chronischer Krankheitsgeschichte lässt sich die soziale Acht
        mit Neunerflügel in ihrer zähesten Form ablesen: ein Körper, der über Jahrzehnte
        rebellierte, ein Kampfgeist, der sich davon nie ganz aufhalten ließ, und eine Arbeit,
        die trotz monatelanger Schmerzphasen zu einem der einflussreichsten Werke der
        Geistesgeschichte wurde. Der Löwe, der aus dem Krankenbett heraus weiterschrieb – weil
        Stillstand für ihn keine Option war, selbst wenn der eigene Körper ihn dazu zwingen
        wollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-karl-marx", label:"Porträt: Karl Marx (SO8w9) – Lebenswerk"},
        {route:"krankheitsportraets-winston-churchill", label:"Krankheitsporträt: Winston Churchill (SE8w9)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

export function leonardoDaVinciKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonardo-da-vinci-portrait.jpg" alt="Leonardo da Vinci" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonardo da Vinci</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1452–1519</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonardo da Vinci</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-leonardo-da-vinci">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine grenzenlose Neugier und sein
        universelles Werk zwischen Kunst und Wissenschaft. Diese Seite vertieft ein Kapitel,
        das dort nur am Rande erwähnt wird: einen Schlaganfall in seinen letzten Lebensjahren,
        der ihm die rechte Hand lähmte, ohne dass er deshalb aufhörte zu arbeiten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Leonardo</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 stellt ihr Wissen der Gemeinschaft zur Verfügung, statt es zu
        horten; der Viererflügel verleiht diesem Wissen eine tiefe ästhetische und emotionale
        Dimension. Genau diese Kombination – der unbedingte Wille, weiter zu wirken und zu
        gestalten – bestimmte auch, wie er auf seine körperliche Einschränkung in den letzten
        Lebensjahren reagierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Schlaganfall um 1517:</strong>
        In seinen letzten Lebensjahren, während seiner Zeit am Hof des französischen Königs
        Franz I. in Amboise, erlitt Leonardo vermutlich einen Schlaganfall, der eine
        Lähmung seiner rechten Körperseite zur Folge hatte.</p>
        <p class="vb-intro"><strong>b) Gelähmte rechte Hand:</strong>
        Zeitgenössische Berichte, darunter der venezianische Gesandte Antonio de Beatis, der
        Leonardo 1517 besuchte, beschrieben ausdrücklich, dass seine rechte Hand gelähmt
        war und er nicht mehr mit der gewohnten Präzision malen konnte.</p>
        <p class="vb-intro"><strong>c) Fortbestehende geistige Klarheit trotz körperlicher Einschränkung:</strong>
        Dieselben Berichte betonten zugleich, dass Leonardos Geist und seine Fähigkeit,
        Skizzen anzufertigen und andere anzuleiten, von der Lähmung unberührt blieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Umstellung auf die linke Hand:</strong>
        Leonardo war ohnehin von Natur aus linkshändig veranlagt und hatte zeitlebens viele
        seiner Notizen und Skizzen mit der linken Hand angefertigt – ein Umstand, der ihm
        half, trotz der gelähmten rechten Hand weiter zeichnend tätig zu sein.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der Arbeit an der Mona Lisa:</strong>
        Selbst nach dem Schlaganfall arbeitete Leonardo Berichten zufolge weiter an
        Gemälden wie der Mona Lisa – ein Werk, das er ohnehin nie an einen Auftraggeber
        auslieferte, sondern bis zu seinem Tod als eigenes, nie ganz abgeschlossenes Projekt
        behielt.</p>
        <p class="vb-intro"><strong>c) Weiterhin aktiv als Berater und Lehrer:</strong>
        Am französischen Hof wirkte Leonardo trotz seiner körperlichen Einschränkung weiter
        als Planer, Ingenieur und geschätzter Gesprächspartner des Königs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rückzug ins Schloss Clos Lucé:</strong>
        König Franz I. stellte Leonardo für seine letzten Lebensjahre das Schloss Clos Lucé
        nahe Amboise zur Verfügung – ein geschützter Rahmen, der ihm trotz seiner
        gesundheitlichen Einschränkung weiteres Arbeiten und Nachdenken ermöglichte.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Notizbucharbeit bis zuletzt:</strong>
        Leonardos über 13.000 Seiten Notizbücher wuchsen auch in dieser letzten Lebensphase
        weiter – Beobachtungen, Skizzen und Überlegungen, die er trotz der körperlichen
        Einschränkung nicht aufgab.</p>
        <p class="vb-intro"><strong>c) Tod am 2. Mai 1519 in Amboise:</strong>
        Leonardo starb im Alter von 67 Jahren in Frankreich, fern seiner italienischen
        Heimat, im Dienst des französischen Königs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Nachlass, der die Lähmung überdauerte:</strong>
        Die späten Notizbücher und unvollendeten Projekte aus seinen letzten Lebensjahren
        zeigen keinen erkennbaren Bruch in Leonardos intellektueller Schaffenskraft, trotz
        der körperlichen Einschränkung.</p>
        <p class="vb-intro"><strong>b) Eine posthume Legende um seinen Tod:</strong>
        Der französische Maler Ingres schuf Jahrhunderte später ein berühmtes, historisch
        nicht belegtes Gemälde, das zeigt, wie Leonardo in den Armen von König Franz I.
        stirbt – ein Bild, das seinen Status als verehrter Hofgelehrter bis in die
        Nachwelt hinein festigte.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das trotz Unvollständigkeit wirkte:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses hinderte die
        Lähmung Leonardo nicht daran, sein wohl berühmtestes Werk, die Mona Lisa, bis zu
        seinem Tod fortlaufend weiterzuentwickeln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Wissen und Schaffen als unaufhörlicher Auftrag:</strong>
        Dieselbe Überzeugung, dass Wissen und Können der Welt zur Verfügung gestellt werden
        müssen, die Leonardos gesamtes Leben prägte, bestimmte auch, wie er auf seine
        körperliche Einschränkung reagierte – nicht mit Rückzug, sondern mit der
        Umstellung auf die ohnehin vorhandene linke Hand, um weiter beitragen zu können.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die Weigerung, das unvollendete Werk aufzugeben:</strong>
        Leonardos lebenslange Neigung, Werke nie ganz abzuschließen, traf in seinen letzten
        Jahren auf eine neue, körperliche Grenze – doch statt die Mona Lisa endgültig
        beiseitezulegen, blieb sie bis zuletzt sein Begleitprojekt, dieselbe tiefe,
        emotionale Bindung an das eigene Werk, die den Viererflügel auszeichnet.</p>
        <p class="vb-intro"><strong>c) Kontinuität statt abruptem Bruch:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über eine plötzliche, dramatische Verhaltensänderung nach dem
        Schlaganfall – Leonardo passte seine Methode an, ohne sein grundlegendes
        Arbeitsprinzip aufzugeben.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der dem Anspruch des Geistes nicht mehr ganz folgen konnte:</strong>
        Leonardos gesamtes Leben war von der Überzeugung geprägt, dass Verstehen und
        Gestalten untrennbar zusammengehören – der Schlaganfall bedrohte ausgerechnet jenes
        körperliche Werkzeug, mit dem er dieses Verstehen sichtbar machte, ohne jedoch das
        Verstehen selbst zu berühren.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Albert Einstein</a>
        (ebenfalls SO5w4) lebte über sechseinhalb Jahre mit einem bekannten,
        lebensbedrohlichen Bauchaortenaneurysma und arbeitete bis kurz vor seinem Tod
        weiter, ohne sich von der Diagnose bremsen zu lassen; Leonardo reagierte auf seine
        eigene körperliche Einschränkung mit derselben Haltung – nicht Rückzug, sondern
        Anpassung der Methode bei unverändertem geistigem Schaffensdrang. Beide Fälle zeigen
        dasselbe SO5w4-Muster: Das eigene Wissen und Werk der Welt zur Verfügung zu stellen,
        wiegt schwerer als die eigene körperliche Bedrohung. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Krankheitsporträt zu Albert Einstein</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die schaffende Hand?</strong>
        Für eine soziale Fünf mit Viererflügel, deren gesamte Kraft auf der Übersetzung von
        Erkenntnis in sichtbares, geteiltes Werk beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes körperliche Werkzeug, mit dem er sein Wissen der Welt sichtbar
        machte, wurde zum Schauplatz der Einschränkung – und zwang ihn, auf die andere,
        ebenfalls geübte Hand auszuweichen, statt aufzugeben. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu einem
        Schlaganfall führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Leonardos Fall zeigen lässt, ist ein Muster im
        Umgang mit körperlicher Einschränkung im Alter, das bei einer ausgeprägten sozialen
        Fünf mit Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Leonardo kannte sein eigenes Muster nicht – die soziale Fünf mit Viererflügel
        stellt reflexhaft ihr Wissen und Werk der Welt zur Verfügung, statt die eigene
        körperliche Verletzlichkeit je als Grund zum Aufhören anzuerkennen, und genau dieses
        Muster lebte er bis in seine letzten Lebensmonate unverändert aus. Wer die eigene
        Notwendigkeit, weiter zu wirken und beizutragen, nicht als Muster erkennt, kann sie
        auch angesichts der eigenen körperlichen Grenzen nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Viererflügel erklärt bei <strong>Leonardo</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der Übersetzung
        von Erkenntnis in sichtbares Werk beruhte, ließ sich selbst von einer gelähmten Hand
        nicht aufhalten – der Oktopus, der einen seiner acht Arme verlor und trotzdem
        weiterzeichnete, bis der letzte Atemzug kam.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-leonardo-da-vinci", label:"Porträt: Leonardo da Vinci (SO5w4) – Universalgelehrter"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsporträt: Albert Einstein (SO5w4) – dasselbe Muster ungebremsten Schaffens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function marieCurieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marie-curie-portrait.jpg" alt="Marie Curie – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Marie Curie</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · 1867–1934</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marie Curie</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur am Rande
        vorkommt: Jahrzehntelange, ungeschützte Arbeit mit radioaktiven Stoffen – ohne Handschuhe, ohne
        Bleiabschirmung, mit Radiumproben in der Kitteltasche, weil das Leuchten im Dunkeln sie
        faszinierte. 1934 starb Curie an aplastischer Anämie, einer direkten Folge dieser
        Strahlenbelastung. Ihre Laborjournale sind bis heute so radioaktiv, dass sie nur in
        bleiausgekleideten Kästen aufbewahrt und mit Schutzkleidung eingesehen werden dürfen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Curie</strong> ist der <strong>selbsterhaltenden Fünf mit Sechserflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-charles-darwin">Charles Darwin</a>
        in diesem Kompass. Naranjo nannte die selbsterhaltende Fünf das <em>Refugium</em>:
        Sicherheit entsteht durch Rückzug in einen selbst kontrollierten Raum, in dem Wissen und
        Kompetenz die eigentliche Existenzgrundlage bilden – bei Curie das Labor, in dem sie
        buchstäblich lebte. Der Sechserflügel bringt die loyale Bindung an eine Sache hinzu, die
        größer ist als man selbst – bei Curie die Überzeugung, dass ihre Forschung der
        Menschheit dient, koste es, was es wolle.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Genau, ausdauernd, unbestechlich:</strong>
        Curies Blick richtete sich auf das, was andere übersahen – unsichtbare Strahlung in
        tonnenweise Pechblende, gesucht mit bloßer Handarbeit über Jahre hinweg. Das ist der
        Fünferblick: Wahrheit liegt nicht an der Oberfläche, sondern muss mühsam freigelegt
        werden.</p>
        <p class="vb-intro"><strong>b) Nach außen wachsam, nach innen blind:</strong>
        Für Messfehler, ungenaue Daten und methodische Schwächen hatte Curie keine Toleranz –
        doch für die fortschreitenden Warnsignale des eigenen Körpers (Erschöpfung,
        Fingerverätzungen, grauer Star) blieb ihr Blick auffällig unscharf.</p>
        <p class="vb-intro"><strong>c) Zurückhaltend, sobald der Ruhm beginnt:</strong>
        Große Auftritte, Ehrungen, öffentliche Bühnen mied Curie, wo immer möglich – ihr Blick
        galt dem Labor, nicht dem Publikum. Typisch selbsterhaltende Fünf: Aufmerksamkeit als
        Ablenkung von der eigentlichen Arbeit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Askese als Lebensform:</strong>
        Schon als Studentin in Paris reduzierte Curie Nahrung, Heizung und Komfort auf das
        Nötigste, um sich das Studium zu leisten – eine Genügsamkeit, die sie ihr Leben lang
        beibehielt, auch als sie es sich längst nicht mehr hätte leisten müssen.</p>
        <p class="vb-intro"><strong>b) Kompetenz statt Beziehung als Sicherheitsanker:</strong>
        Nicht Anerkennung, nicht Zugehörigkeit gaben Curie Halt, sondern das genaue Wissen um
        ihr Fachgebiet – ein Fundament, das ihr niemand nehmen konnte.</p>
        <p class="vb-intro"><strong>c) Das Labor als Refugium:</strong>
        Ein notdürftig eingerichteter Schuppen wurde über Jahre zum eigentlichen Zuhause – ein
        selbst kontrollierter Raum, in dem die Außenwelt mit ihren Ansprüchen keinen Zugriff
        hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Loyalität über den Tod hinaus:</strong>
        Nach Pierre Curies Tod 1906 übernahm Marie nicht nur seine Professur, sondern führte die
        gemeinsame Forschung mit derselben Beharrlichkeit fort – der Sechserflügel als
        Bindungskraft, die Verlust in Fortsetzung verwandelt.</p>
        <p class="vb-intro"><strong>b) Dienst an einer Sache, die größer ist als man selbst:</strong>
        Die mobilen Röntgeneinheiten im Ersten Weltkrieg, die Ausbildung von rund 150
        Röntgenassistentinnen – Wissen wurde konsequent in konkreten Nutzen für andere
        übersetzt, nicht als privates Verdienst gehortet.</p>
        <p class="vb-intro"><strong>c) Sturheit, wo Vorsicht angebracht wäre:</strong>
        Curie und ihre Zeitgenossen verstanden die Gefahren radioaktiver Strahlung nur
        unvollständig – doch selbst als erste Vermutungen aufkamen, änderte sie ihre
        Arbeitsweise kaum. Das ist die Kehrseite des Refugiums: Wer sich selbst genug ist,
        braucht auch keine Warnung von außen anzunehmen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Unerreichbares Vorbild:</strong>
        Als einzige Person der Geschichte mit Nobelpreisen in zwei unterschiedlichen
        Naturwissenschaften wirkt Curie bis heute wie eine Ausnahmeerscheinung – genau diese
        Wirkung baute sie sich durch stille, unermüdliche Ausdauer selbst auf.</p>
        <p class="vb-intro"><strong>b) Zurückhaltend, aber unbeugsam:</strong>
        Curie mied die große Bühne, ließ sich aber in der Sache von niemandem beirren – eine
        Kombination, die selbsterhaltende Fünfen oft unterschätzbar erscheinen lässt, bis sich
        ihre Beharrlichkeit als stärker erweist als lauter Widerstand.</p>
        <p class="vb-intro"><strong>c) Vertrauen durch nachweisbare Leistung:</strong>
        Ihr Ansehen erwuchs nicht aus Charisma, sondern aus Ergebnissen, die sich nicht
        wegdiskutieren ließen – der Fünferblick verlangt sich selbst diese Beweisbarkeit ab.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Sparsamer Umgang mit der eigenen Energie – außer im Labor:</strong>
        Curie lebte in nahezu allem genügsam, verausgabte sich aber im Labor ohne erkennbare
        Grenze – Energie floss dorthin, wo die eigentliche Sicherheit lag.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Person und Forschung:</strong>
        Ihre Identität war untrennbar mit der Arbeit verbunden – eine Trennung zwischen
        &bdquo;Marie Curie&ldquo; und &bdquo;der Forschung&ldquo; ergab für sie keinen Sinn.</p>
        <p class="vb-intro"><strong>c) Rückzug statt Regeneration:</strong>
        Statt sich zu schonen, zog sich Curie bei Erschöpfung noch tiefer ins Labor zurück –
        eine Bewegung, die kurzfristig Sicherheit gab, langfristig aber zur eigenen Zerstörung
        beitrug.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Das unsichtbare Gift:</strong>
        Curie trug Radiumproben in der Kitteltasche, weil sie das Leuchten im Dunkeln
        faszinierte, bewahrte kontaminierte Notizbücher ungeschützt auf und arbeitete
        jahrzehntelang ohne Handschuhe oder Bleiabschirmung. Ihre Finger waren vernarbt und
        verätzt, sie entwickelte grauen Star und chronische Erschöpfung – Symptome, die sie
        konsequent der harten Arbeit zuschrieb, nicht der Strahlung, deren Gefahr sie selbst
        mit erforscht hatte.</p>
        <p class="vb-intro"><strong>b) Selbstverzicht wird Krankheitsverleugnung:</strong>
        Dieselbe asketische Haltung, mit der Curie als Studentin auf Heizung und ausreichende
        Nahrung verzichtete, wandte sie später unbewusst auf ihre Krankheitssymptome an: Der
        eigene Körper war Nebensache, solange die Arbeit weiterging. Das Refugium der
        selbsterhaltenden Fünf schützt vor der Außenwelt – aber es schützt nicht vor Gefahren,
        die man selbst ins eigene Refugium hineinträgt.</p>
        <p class="vb-intro"><strong>c) Loyalität zur Sache über den eigenen Körper:</strong>
        Der Sechserflügel band Curie an die Überzeugung, dass ihre Forschung der Menschheit
        diente – eine Pflicht, die schwerer wog als die eigene Sicherheit. Sie forschte weiter,
        auch als sich ihr Gesundheitszustand sichtbar verschlechterte, bis sie 1934 in einem
        Sanatorium in den Savoyer Alpen an aplastischer Anämie starb.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-charles-darwin">Charles Darwin</a>
        (SE5w6) lebte jahrzehntelang mit einer chronischen, nie eindeutig diagnostizierten
        Krankheit, zog sich dafür immer tiefer in sein selbst kontrolliertes Refugium in Down
        House zurück und ließ sich von ihr kaum von seiner Forschungsarbeit abhalten. Bei
        beiden zeigt sich dasselbe SE5-Muster: Der Rückzug in die eigene Kompetenz schützt
        wirksam vor der Welt – aber er macht es zugleich leichter, die eigenen körperlichen
        Warnsignale zu übergehen, weil Aufmerksamkeit für den Körper als Ablenkung von der
        eigentlichen Sache empfunden wird.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet das Knochenmark?</strong>
        Aplastische Anämie bedeutet, dass das Knochenmark aufhört, neue Blutzellen zu
        produzieren – der Körper stellt buchstäblich seine eigene Ressourcenproduktion ein.
        Bei einer selbsterhaltenden Fünf, deren gesamte Strategie darin besteht, mit
        minimalem Verbrauch auszukommen und Ressourcen zu horten statt sie laufend zu
        erneuern, liest sich das wie eine körperliche Zuspitzung des eigenen Grundmusters: Wo
        die SE5 psychisch spart, um nicht zu verarmen, versagte bei Curie am Ende
        ausgerechnet das Organ, das für Nachschub hätte sorgen sollen. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu
        Strahlenschäden oder ähnlichen Erkrankungen führt – <strong>jeder Mensch kann jede
        Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an Curies Fall zeigen
        lässt, ist ein Muster, das bei einer totalen Hingabe an die eigene Arbeit in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Curie kannte ihr eigenes Muster nicht – der Geiz der selbsterhaltenden Fünf ließ sie über Jahrzehnte lieber auf Schutzmaßnahmen verzichten als Ressourcen und Zeit von der eigentlichen Forschung abzuzweigen. Wer die eigene Sparsamkeit an der eigenen Sicherheit nicht als Muster erkennt, unterschätzt die Gefahr, die genau daraus entsteht.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Curies</strong> selbsterhaltende Fünf mit Sechserflügel lässt sich an ihrer
        eigenen Erkrankung noch einmal ablesen: radikale Genügsamkeit, ein Refugium aus Wissen und
        Kompetenz, und eine Loyalität zur eigenen Sache, die stärker wog als jedes Warnsignal
        des eigenen Körpers. Die Eule, die im Dunkeln sieht, was andere übersehen, übersah am
        Ende ausgerechnet das, was ihr am nächsten war – die Strahlung, die sie selbst
        sichtbar gemacht hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-marie-curie", label:"Porträt: Marie Curie (SE5w6) – Lebenswerk"},
        {route:"beruehmte-charles-darwin", label:"Porträt: Charles Darwin (SE5w6)"},
        {route:"krankheitsportraets-charles-darwin", label:"Krankheitsporträt: Charles Darwin (SE5w6)"},
        {route:"krankheitsportraets-sigmund-freud", label:"Krankheitsporträt: Sigmund Freud (SO6w5)"},
        {route:"krankheitsportraets-spinoza", label:"Krankheitsporträt: Baruch de Spinoza (SE5w6) – tödliche Folge des eigenen Handwerks"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

export function mrTKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mr-t-portrait.jpg" alt="Mr. T – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mr. T</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · geb. 1952</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Mr. T</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-mr-t">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen Weg vom Leibwächter zum Filmstar
        und Wrestling-Idol. Im Vordergrund dieser Seite steht ein Kapitel, das dort nur kurz
        angerissen wird: Im September 1995, auf dem Höhepunkt seines Ruhms, wurde bei Mr. T
        ein seltenes T-Zell-Lymphom diagnostiziert, eine Krebserkrankung des Blutes. Er
        unterzog sich Bestrahlung und Chemotherapie, zog sich für einige Jahre spürbar aus der
        Öffentlichkeit zurück und wurde später zu einem Fürsprecher für Krebsvorsorge und
        Glaubensfragen im Umgang mit schwerer Krankheit.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Mr. T</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Dreierflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Zwei <em>Me First</em>: Fürsorge beginnt
        bei der eigenen körperlichen Basis und dem engsten Kreis, bevor sie sich nach außen
        richtet. Der Dreierflügel gibt dieser Fürsorge ein unübersehbares, öffentliches Bild –
        bei Mr. T zunächst als bezahlter Leibwächter, später als Muskelberg mit Mohawk und
        Goldketten, dessen körperliche Präsenz selbst zur Marke wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine kleine Wunde am Ohr:</strong>
        Im September 1995 bemerkte Mr. T beim Abnehmen eines Diamantohrrings eine kleine, nicht
        heilende Wunde am Ohr – ausgerechnet an jener Stelle, die durch seine markanten
        Ohrringe und Ketten Teil seines unverwechselbaren öffentlichen Bildes war.</p>
        <p class="vb-intro"><strong>b) Zwei Wochen bis zum Arztbesuch:</strong>
        Erst zwei Wochen später suchte er einen Arzt auf, wurde an einen Dermatologen
        überwiesen und erhielt nach einer Biopsie die Diagnose eines seltenen T-Zell-Lymphoms
        – einer Krebserkrankung des Blutes.</p>
        <p class="vb-intro"><strong>c) Ein Name, der zur Krankheit passte:</strong>
        Mr. T kommentierte die Diagnose später mit einem trockenen Wortwitz – „Krebs mit
        meinem Namen darauf, personalisierter Krebs" –, eine erste öffentliche Reaktion, die
        seine Fürsorge-Rolle nicht aufgab, sondern sofort mit Humor in Kontakt trat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Bestrahlung und Chemotherapie:</strong>
        Zur Behandlung des T-Zell-Lymphoms unterzog sich Mr. T Bestrahlung und Chemotherapie,
        begleitet von CT-Untersuchungen und einer Knochenmarkpunktion, um den Verlauf der
        Erkrankung zu überwachen.</p>
        <p class="vb-intro"><strong>b) Rückzug aus der Öffentlichkeit:</strong>
        Nach der Diagnose zog sich Mr. T für mehrere Jahre spürbar aus dem öffentlichen Leben
        zurück – ein Bruch mit der bis dahin permanenten, plakativen Präsenz, mit der er zuvor
        Filme, Fernsehserien und Wrestling-Auftritte bestritten hatte.</p>
        <p class="vb-intro"><strong>c) Der Glaube als tragende Kraft:</strong>
        Mr. T beschrieb später öffentlich, sein Vertrauen in Gott sei durch die Krankheit „wie
        das von Hiob" geprüft worden – eine religiöse Deutung, die ihm half, die Behandlung
        durchzustehen, ohne die eigene Stärke ganz aufzugeben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Remission über Jahrzehnte:</strong>
        Mr. T blieb nach der Behandlung über viele Jahre in Remission und bezeichnet sich seit
        seiner Genesung öffentlich als Krebsüberlebenden – ein Status, den er nicht verschweigt,
        sondern aktiv in seine spätere öffentliche Rolle einbaut.</p>
        <p class="vb-intro"><strong>b) Krankenbesuche bei kranken Kindern:</strong>
        Seit seiner eigenen Erkrankung besucht Mr. T regelmäßig krebskranke Kinder in
        Krankenhäusern, um ihnen Mut zuzusprechen – dieselbe Schutzfunktion, mit der seine
        Karriere als Leibwächter einst begann, nun übertragen auf die Verletzlichsten.</p>
        <p class="vb-intro"><strong>c) Vom Entertainer zum spirituellen Redner:</strong>
        Nach der Erkrankung verlagerte sich sein öffentliches Auftreten zunehmend hin zu
        Vorträgen mit geistlich-motivierendem Inhalt, in denen er seinen Glauben und seine
        Krankengeschichte offen teilt, statt allein auf frühere Filmrollen zu setzen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein zweites öffentliches Bild neben dem ersten:</strong>
        Neben dem Muskelberg mit Mohawk aus <em>Rocky III</em> und <em>Das A-Team</em> entstand
        durch die Krankengeschichte ein zweites, ruhigeres öffentliches Bild: der gläubige
        Krebsüberlebende, der anderen Kranken Mut zuspricht.</p>
        <p class="vb-intro"><strong>b) Eine reduzierte, aber nicht beendete Karriere:</strong>
        Mr. T blieb nach seinem Rückzug weiterhin gelegentlich in Film, Fernsehen und
        Reality-Formaten präsent, jedoch in deutlich geringerer Taktung als in den Jahren vor
        1995 – die Krankheit veränderte das Tempo seiner Karriere, ohne sie zu beenden.</p>
        <p class="vb-intro"><strong>c) Eine Marke, die um eine Bedeutungsebene reicher wurde:</strong>
        Mohawk und Goldketten blieben sein Erkennungszeichen, wurden aber durch die
        Krankengeschichte um eine zweite Ebene ergänzt – nicht mehr nur Symbol körperlicher
        Stärke, sondern auch Symbol des Überlebens einer lebensbedrohlichen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fürsorge, die sich neu ausrichtet:</strong>
        Für eine selbsterhaltende Zwei, deren Kern die Fürsorge für den eigenen engen Kreis ist,
        bedeutete die eigene Verletzlichkeit eine Verschiebung: Statt fremde Körper zu schützen
        wie einst als Leibwächter, musste Mr. T lernen, den eigenen Körper als schutzbedürftig
        anzuerkennen.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als Antrieb, aus der Krankheit ein sichtbares Zeugnis zu machen:</strong>
        Statt die Erkrankung privat zu halten, machte Mr. T sie zu einem öffentlichen Thema –
        typisch für den Dreierflügel, der auch ein schweres Kapitel in ein sichtbares,
        wiedererkennbares Statement verwandelt, das andere erreichen soll.</p>
        <p class="vb-intro"><strong>c) Rückzug als vorübergehende, nicht dauerhafte Reaktion:</strong>
        Der mehrjährige Rückzug aus der Öffentlichkeit war kein endgültiger Abschied, sondern
        eine Phase der Genesung, nach der die grundlegende Ausrichtung auf Fürsorge – nun mit
        neuem Fokus auf kranke Kinder und Glaubensfragen – wieder in den Vordergrund trat.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b4832e 10%, var(--paper));border:1.5px solid #b4832e;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:#7a5510;">Parallele: Der Körper als Bühne des Leidens – Frida Kahlo (SE2w3)</h3>
        <p class="vb-intro">Unter den SE2w3-Krankheitsporträts dieses Kompasses findet sich mit
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida Kahlo</a>
        eine Parallele, die wirklich trägt: Beide machten den eigenen, von Krankheit
        gezeichneten Körper zu einem öffentlich sichtbaren Teil ihrer Kunst beziehungsweise
        ihres Auftretens, statt ihn zu verbergen. Bei Kahlo wurde der versehrte Körper zum
        zentralen Motiv ihrer Gemälde; bei Mr. T wurde der zuvor als reine Kraftquelle
        inszenierte Körper – Mohawk, Muskeln, Ketten – nach der Diagnose öffentlich als
        verletzlich anerkannt, ohne dass er dabei aufhörte, gezeigt zu werden. In beiden Fällen
        blieb der Körper im Zentrum der öffentlichen Selbstdarstellung, nur seine Bedeutung
        verschob sich: vom reinen Symbol der Stärke zum Symbol des Überlebens.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit an genau der Stelle des eigenen Markenzeichens:</strong>
        Die erste sichtbare Läsion trat ausgerechnet am Ohr auf – jener Körperstelle, die durch
        auffälligen Schmuck ohnehin schon Teil von Mr. Ts unverwechselbarem öffentlichem Bild
        war. Der Körper, mit dem er zuvor andere beschützt und sich selbst als unverwundbare
        Ikone inszeniert hatte, wurde zur Quelle der eigenen Bedrohung.</p>
        <p class="vb-intro"><strong>b) Rückzug, um die eigene Basis wiederherzustellen:</strong>
        Statt die Erkrankung öffentlich zu verhandeln, während sie noch akut war, zog sich Mr.
        T zunächst zurück – ein für die selbsterhaltende Zwei typisches Muster: Erst die
        eigene, körperliche und familiäre Basis sichern, bevor wieder nach außen gewirkt wird.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Krankheit, die den eigenen Körper als Schutzschild infrage stellte?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren gesamte öffentliche Identität auf
        körperlicher Stärke und einem unverwechselbaren äußeren Bild beruht, lässt sich in einer
        Krebserkrankung, die genau diesen Körper angriff, eine Zuspitzung des eigenen
        Lebensmusters lesen: Die Instanz, die zuvor andere schützte und sich selbst als
        unangreifbar zeigte, musste lernen, die eigene Verletzlichkeit nicht länger zu
        verbergen, sondern – im Dreierflügel-typischen öffentlichen Format – sichtbar zu machen.
        Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch ausführlicher
        entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei mit Dreierflügel
        zwangsläufig zu einer Krebserkrankung führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Ein T-Zell-Lymphom hat eigene, komplexe
        medizinische Ursachen, die mit dem Charakterprofil einer Person nichts zu tun haben.
        Was sich an Mr. Ts Fall zeigen lässt, ist ein Muster im Umgang mit der eigenen
        Krankheit, das bei einer ausgeprägten selbsterhaltenden Zwei mit Dreierflügel immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Mr. T kannte, wie die meisten Menschen, sein Enneagramm-Muster nicht bewusst. Ohne
        dieses Wissen lebte er über Jahre eine körperliche Selbstinszenierung aus, die keinen
        Raum für sichtbare Schwäche vorsah – vom Leibwächter über den Filmstar bis zum
        Wrestling-Kämpfer war sein Körper durchgehend Beweis und Schutzschild zugleich. Erst
        die eigene Krebsdiagnose zwang ihn, diese Rolle zu unterbrechen und die eigene
        Verletzlichkeit erstmals öffentlich zuzulassen. Wer das eigene Muster erkennt, kann
        bewusst gegensteuern; wer es nicht kennt, wiederholt es, bis der Körper die Grenze
        setzt, die der Mensch selbst nicht zog.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Zwei mit Dreierflügel bestätigt sich bei <strong>Mr. T</strong>
        darin, wie er auf die eigene Krebsdiagnose reagierte: erst Rückzug, um die eigene Basis
        zu sichern, dann ein bewusst öffentlich gemachtes zweites Kapitel als gläubiger
        Krebsüberlebender und Fürsprecher für kranke Kinder. Das Flusspferd, das einst fremde
        Körper beschützte und den eigenen als unverwundbar inszenierte, musste seine Stärke neu
        definieren – nicht als Abwesenheit von Verletzlichkeit, sondern als Fähigkeit, sie zu
        überstehen und andere daran teilhaben zu lassen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-mr-t", label:"Porträt: Mr. T (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3) – Körper als sichtbares Zeugnis"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function nusratFatehAliKhanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nusrat-fateh-ali-khan-portrait.jpg" alt="Nusrat Fateh Ali Khan" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nusrat Fateh Ali Khan</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · 1948–1997</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Nusrat Fateh Ali Khan</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-nusrat-fateh-ali-khan">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort beiläufig erwähnt wird:
        eine über Jahre fortschreitende, lange verschwiegene Diabetes-Erkrankung, die im
        August 1997 mit seinem plötzlichen Tod im Alter von nur 48 Jahren endete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Nusrat Fateh Ali Khan</strong> ist der <strong>selbsterhaltenden Zwei mit
        Dreierflügel</strong> zugeordnet. Naranjo beschrieb die SE2 als <em>Me First</em> – den
        Subtyp, der zuerst für das eigene Überleben und das der ihm am nächsten Stehenden sorgt,
        bevor er sich weiter nach außen wendet. Der Dreierflügel gibt dieser Fürsorge einen
        zusätzlichen, unbedingten Antrieb: den Beweis der eigenen Unentbehrlichkeit durch
        sichtbare Leistung – ein Muster, das sich bis in seine letzten, von hunderten Alben und
        unzähligen Live-Auftritten geprägten Lebensjahre hinein nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der von Anfang an im Dienst der Familientradition stand:</strong>
        Schon als Kind übernahm Khan die körperlich fordernde Rolle des Tabla-Spielers in der
        Gruppe seines Vaters, bevor er nach dessen frühem Tod selbst zum Sänger wurde – der
        eigene Körper war von Beginn an Werkzeug einer Aufgabe, die größer war als er selbst.</p>
        <p class="vb-intro"><strong>b) Stundenlange, atemlose Auftritte als Normalzustand:</strong>
        Khans Ruf gründete auch auf minutenlangen, kraftvollen Improvisationen und einem
        Stimmumfang von über drei Oktaven – eine Leistung, die den Körper über Jahrzehnte
        hinweg an die Grenze der Belastbarkeit brachte, ohne dass Erholung als notwendiger Teil
        dieser Arbeit galt.</p>
        <p class="vb-intro"><strong>c) Ein Gewicht, das mit dem Ruhm mitwuchs:</strong>
        Mit zunehmendem internationalem Erfolg wuchs auch Khans Körpergewicht auf bis zu rund
        135 Kilogramm – eine Entwicklung, die in den 1990er-Jahren öffentlich sichtbar wurde,
        ohne dass sie sein Arbeitspensum spürbar bremste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Diabetes als über Jahre unterschätzte Grunderkrankung:</strong>
        Khan litt über einen längeren Zeitraum an Diabetes, die mit dem starken Übergewicht in
        Wechselwirkung stand und zunehmend die Nierenfunktion beeinträchtigte – eine chronische
        Erkrankung, die im Schatten der öffentlichen Erfolge kaum Beachtung fand.</p>
        <p class="vb-intro"><strong>b) Ein Diskografie-Umfang, der keine Pause kannte:</strong>
        Parallel zur fortschreitenden Erkrankung erschienen weiterhin, Jahr für Jahr, neue
        Alben und Kollaborationen – von Peter Gabriels Real-World-Label bis zu Filmmusik-Beiträgen
        für Hollywood-Produktionen – ein Arbeitspensum, das keine Rücksicht auf den eigenen
        Gesundheitszustand nahm.</p>
        <p class="vb-intro"><strong>c) Zweimal wöchentlich Dialyse als letzte Rettung:</strong>
        Als die Nieren dem Diabetes nicht mehr standhielten, war Khan in den letzten Lebensjahren
        auf eine Dialysebehandlung zweimal pro Woche angewiesen, um seine Nierenfunktion
        überhaupt noch aufrechtzuerhalten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Eine Reise zur eigenen Rettung, die zu spät kam:</strong>
        Am 11. August 1997 befand sich Khan auf dem Weg von Lahore nach Los Angeles, wo eine
        Nierentransplantation geplant war – doch bereits in London musste er wegen akuten
        Nieren- und Leberversagens ins Krankenhaus eingeliefert werden.</p>
        <p class="vb-intro"><strong>b) Kontaminierte Dialyse als zusätzlicher, fataler Faktor:</strong>
        Ärzte im Cromwell Hospital in London machten eine Hepatitis-Infektion für die
        Verschlechterung seines Zustands mitverantwortlich – vermutlich durch nicht ausreichend
        steriles Dialyse-Equipment während seiner Behandlung in Pakistan zugezogen.</p>
        <p class="vb-intro"><strong>c) Tod am 16. August 1997:</strong>
        Fünf Tage nach seiner Einlieferung starb Nusrat Fateh Ali Khan im Alter von 48 Jahren an
        akutem Herzversagen, als direkte Folge des kombinierten Nieren- und Leberversagens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Erkrankung, die lange keine öffentliche Aufmerksamkeit erhielt:</strong>
        Im Gegensatz zu vielen anderen Krankheitsverläufen in diesem Kompass wurde Khans
        Diabetes-Erkrankung zu Lebzeiten kaum öffentlich thematisiert – sie blieb, ähnlich wie
        bei vielen Menschen mit dieser Volkskrankheit, im Verborgenen, bis der Körper keine
        weitere Kompensation mehr leisten konnte.</p>
        <p class="vb-intro"><strong>b) Zwei sich verstärkende Krankheitsprozesse:</strong>
        Anders als bei einer einzelnen, klar abgrenzbaren Erkrankung trafen bei Khan zwei
        Prozesse aufeinander: die langsame, jahrelange Zerstörung der Nierenfunktion durch
        Diabetes und eine akute, durch die Behandlung selbst verursachte Hepatitis-Infektion –
        eine Kombination, die den ohnehin geschwächten Körper endgültig überforderte.</p>
        <p class="vb-intro"><strong>c) Kein Kurzverlauf, sondern eine über Jahre verschleppte Entwicklung:</strong>
        Auch wenn der unmittelbare Zusammenbruch im August 1997 rasch verlief, lag ihm eine über
        Jahre fortschreitende, unbehandelt gebliebene Stoffwechselerkrankung zugrunde – kein
        plötzliches Unglück, sondern der Endpunkt einer langen Entwicklung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Höchstleistung trotz eines Körpers, der längst warnte:</strong>
        Dass Khan bis in seine letzten Lebensjahre hinein ein Arbeitspensum von hunderten Alben
        und unzähligen Live-Auftritten aufrechterhielt, während sein Körper zunehmend auf
        Dialyse angewiesen war, zeigt die Ausdauer der SE2w3 in ihrer rastlosesten Form.</p>
        <p class="vb-intro"><strong>b) Eine Nachfolge, die noch zu Lebzeiten gesichert wurde:</strong>
        Bereits vor seinem Tod begann Khan, seinen Neffen Rahat Fateh Ali Khan als Nachfolger
        auszubilden – dieselbe Fürsorge für die Kontinuität der Familientradition, mit der seine
        eigene Karriere einst am Grab seines Vaters begonnen hatte, setzte sich bis in die
        eigene Krankheitsgeschichte hinein fort.</p>
        <p class="vb-intro"><strong>c) Das Flusspferd, das sein Revier bis zur völligen Erschöpfung verteidigte:</strong>
        Die Energie der SE2w3 richtete sich bis zuletzt auf denselben Antrieb, der Khans ganzes
        Leben prägte: die übernommene Aufgabe, eine sechshundert Jahre alte Tradition am Leben
        zu erhalten, nicht ruhen zu lassen, auch wenn der eigene Körper längst an seine Grenzen
        stieß.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stoffwechselerkrankung, die mit dem Erfolg mitwuchs:</strong>
        Khans Diabetes entwickelte sich parallel zu seinem internationalen Durchbruch in den
        späten 1980er- und 1990er-Jahren – je größer die Reichweite seiner Auftritte, desto
        weniger Raum blieb offenbar für die eigene Gesundheit.</p>
        <p class="vb-intro"><strong>b) Dialyse als Symbol einer Fürsorge, die sich selbst nie galt:</strong>
        Zweimal wöchentlich musste sein eigenes Blut künstlich gereinigt werden, während er
        weiterhin für ein Publikum sang, das ihn brauchte – eine Umkehrung, die das Grundmuster
        der SE2 fast wörtlich spiegelt: ein Leben lang für andere sorgen, bis der eigene Körper
        buchstäblich fremde Hilfe braucht, um zu funktionieren.</p>
        <p class="vb-intro"><strong>c) Die Reise zur Rettung als letzte, tragische Pointe:</strong>
        Dass Khan ausgerechnet auf dem Weg zu einer Nierentransplantation zusammenbrach, die ihm
        weitere Jahre hätte schenken können, macht die Geschichte besonders bitter – die Rettung
        war in Reichweite, doch der Körper hatte keine Reserven mehr, um sie zu erreichen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Nieren?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren ganzes Leben von der Frage
        bestimmt war, wie sie das eigene Überleben durch immer neue, sichtbare Beweise der
        eigenen Unentbehrlichkeit sichert, liegt eine Deutung nahe: Die Niere ist das Organ, das
        im Stillen filtert, ausgleicht, entgiftet – eine Funktion, die niemand sieht, solange sie
        funktioniert. Ein System, das nie gelernt hatte, sich selbst Erholung zuzugestehen,
        verlor am Ende genau die Fähigkeit, im Verborgenen für das eigene Gleichgewicht zu
        sorgen, mit der es sein Leben lang für andere gesorgt hatte.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Nierenerkrankungen oder Diabetes führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Khans Fall zeigen lässt, ist ein
        Muster, das bei dem Bedürfnis, das eigene Überleben unablässig durch neue Beweise zu
        sichern, in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Khan kannte sein eigenes Muster nicht – die selbsterhaltende Zwei mit Dreierflügel stellt die eigenen Bedürfnisse notorisch hinter die der anderen zurück, und genau das ließ ihn jahrelang eine fortschreitende Diabetes unbehandelt lassen, während er unermüdlich für sein Publikum sang. Wer das eigene Zurückstellen der eigenen Bedürfnisse nicht als Muster erkennt, merkt die Erschöpfung erst, wenn der Körper endgültig versagt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Zwei mit Dreierflügel erklärt bei <strong>Nusrat Fateh Ali Khan</strong>
        vieles am Verlauf seiner eigenen Erkrankung: ein Körper, der über Jahrzehnte im Dienst
        einer sechshundert Jahre alten Familientradition stand und dabei nie lernte, sich selbst
        dieselbe Fürsorge entgegenzubringen, die er einem ganzen Publikum schenkte – bis er im
        August 1997, auf dem Weg zur eigenen Rettung, keine weitere Leistung mehr aufbringen
        konnte. Das Flusspferd, das sein Revier bis zur letzten Sekunde verteidigte, auch als
        die eigene Kraft längst erschöpft war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-nusrat-fateh-ali-khan", label:"Porträt: Nusrat Fateh Ali Khan (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-wolfgang-amadeus-mozart", label:"Krankheitsporträt: Wolfgang Amadeus Mozart (SE2w3)"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3) – dieselbe Weigerung zurückzuweichen"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function richardRamirezKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/richard-ramirez-portrait.jpg" alt="Richard Ramírez" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Richard Ramírez</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel · 1960–2013</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Richard Ramírez</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-richard-ramirez">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um seine Mordserie als „Night Stalker" und
        seine bewusste Selbstmythologisierung. Diese Seite vertieft ein Kapitel, das dort nur am
        Rande erwähnt wird: eine Diagnose des B-Zell-Lymphoms, einen jahrelangen Krankheitsverlauf
        in der Todeszelle, und einen Tod 2013 vor der Vollstreckung seines Todesurteils.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ramírez</strong> ist dem <strong>sexuellen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die sexuelle Drei will unvergesslich sein; der Viererflügel macht Dunkelheit
        und Einzigartigkeit zum Kern des Selbstbilds. Genau dieses Bedürfnis, eine unauslöschliche
        Figur zu bleiben, bestimmte auch, wie er seiner tödlichen Krankheit in der Todeszelle
        begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose des B-Zell-Lymphoms in Haft:</strong>
        Nach Jahren in der Todeszelle des San-Quentin-Gefängnisses wurde bei Ramírez ein
        B-Zell-Lymphom diagnostiziert, eine bösartige Erkrankung des lymphatischen Systems.</p>
        <p class="vb-intro"><strong>b) Verlegung in ein Gefängniskrankenhaus:</strong>
        Mit fortschreitender Erkrankung wurde er in die medizinische Einrichtung des Marin
        County Jail in Greenbrae verlegt, wo unheilbar kranke Häftlinge behandelt wurden.</p>
        <p class="vb-intro"><strong>c) Fortschreitende Verschlechterung über Monate:</strong>
        Der Krankheitsverlauf zog sich über einen längeren Zeitraum hin, mit sichtbarer
        körperlicher Verschlechterung, die sich seinem letzten öffentlichen Erscheinungsbild
        im Gerichtssaal deutlich entgegensetzte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kaum öffentliche Berichterstattung über den Zustand:</strong>
        Anders als bei seinem inszenierten Auftreten während des Prozesses drangen aus der Zeit
        seiner Erkrankung nur wenige Details nach außen.</p>
        <p class="vb-intro"><strong>b) Fortgesetzter Kontakt zu seiner Ehefrau:</strong>
        Ramírez war seit 1996 mit Doreen Lioy verheiratet, die ihn während des Prozesses
        kennengelernt hatte; der Kontakt zu ihr bestand nach verfügbaren Berichten bis zuletzt
        fort, auch wenn Details zur Beziehung in seinen letzten Lebensjahren spärlich dokumentiert
        sind.</p>
        <p class="vb-intro"><strong>c) Kein bekannter öffentlicher Auftritt mehr nach der Diagnose:</strong>
        Nach Jahrzehnten in der Todeszelle, in denen er zeitweise noch Interviews gab, gibt es
        aus der eigentlichen Krankheitsphase keine bekannten weiteren öffentlichen Äußerungen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fast drei Jahrzehnte Wartezeit auf die Vollstreckung:</strong>
        Ramírez war seit seinem Todesurteil 1989 in der Todeszelle, ohne dass es zur
        Vollstreckung kam – Kaliforniens langwieriges Berufungsverfahren ließ ihm faktisch
        Jahrzehnte Zeit, in denen die Krankheit ihn schließlich einholte.</p>
        <p class="vb-intro"><strong>b) Der Tod kam der Vollstreckung zuvor:</strong>
        Er starb, bevor sein Todesurteil je vollstreckt wurde – eine Tatsache, die von
        Beobachtern damals ausdrücklich als Kontrast zu seinem jahrzehntelang aufrechterhaltenen
        Bild als „unsterblicher" Night Stalker vermerkt wurde.</p>
        <p class="vb-intro"><strong>c) Tod am 7. Juni 2013 in Greenbrae, Kalifornien:</strong>
        Richard Ramírez starb im Alter von 53 Jahren an den Folgen seines Lymphoms – fast 28
        Jahre nach dem Ende seiner Mordserie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein stiller Tod nach einer lauten Karriere:</strong>
        Der Mann, der im Gerichtssaal das Victory-Zeichen zeigte und das Pentagramm auf der
        Handfläche vorführte, starb ohne vergleichbare Inszenierung – ein scharfer Kontrast zu
        seinem öffentlichen Selbstbild.</p>
        <p class="vb-intro"><strong>b) Kaum mediale Aufmerksamkeit für die letzte Phase:</strong>
        Anders als der breite mediale Rummel um Prozess und Verurteilung erregte sein
        tatsächlicher Tod vergleichsweise wenig unmittelbare Berichterstattung über die letzten
        Monate seines Lebens.</p>
        <p class="vb-intro"><strong>c) Ein Mythos, der überlebte, ohne dass die Person es tat:</strong>
        Sein Name blieb in der Kriminalgeschichte präsent – als Symbol, als kulturelle
        Referenz –, während die Person selbst in vergleichsweiser Stille an einer Krankheit
        starb, die nichts mit der von ihm gepflegten Ikonografie zu tun hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Pfau, dessen Rad sich nicht mehr entfalten ließ:</strong>
        Dieselbe Suche nach einem unverwechselbaren, unvergesslichen Bild, die Ramírez'
        gesamtes öffentliches Auftreten prägte, fand in der Krankheit keinen Raum mehr – ein
        Lymphom bietet keine Bühne.</p>
        <p class="vb-intro"><strong>b) Wenn die sexuelle Drei unter chronischem Stress zur Neun wird:</strong>
        Die jahrzehntelange Isolation der Todeszelle, verschärft durch die fortschreitende
        Krankheit, zeigt ein Muster, das mit dem in seinem eigenen Porträt beschriebenen
        Stresspunkt der SX3 übereinstimmt: die Neun, mit ihrer Betäubung und Dissoziation. Wer
        unter chronischem Druck lebt, bewegt sich zunehmend entlang seiner Stresslinie in
        Richtung seines Stresspunkts. Das weitgehende öffentliche Verstummen seiner letzten
        Lebensjahre – nach Jahrzehnten bewusster Selbstinszenierung – erinnert eher an die
        entrückte innere Abwesenheit ihres Stresspunkts als an die auf Wirkung ausgerichtete
        Präsenz des Kerntyps – bei unverändertem Kerntyp SX3w4.</p>
        <p class="vb-intro"><strong>c) Kein neuer Mythos aus der Krankheit selbst:</strong>
        Anders als frühere Phasen seines Lebens, in denen er jedes Detail seines Auftretens
        kontrollierte, gibt es keine Hinweise darauf, dass er versuchte, auch seine Krankheit
        zu einem Teil seiner Selbstinszenierung zu machen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der der Inszenierung entglitt:</strong>
        Ramírez' gesamtes öffentliches Leben war von der bewussten Erschaffung eines Bildes
        geprägt, das Furcht und Aufmerksamkeit gleichermaßen band – das Lymphom war eine
        Bedrohung, die sich jeder Kontrolle und jeder Inszenierung entzog.</p>
        <p class="vb-intro"><strong>b) Eine Krankheit ohne Symbolkraft für den eigenen Mythos:</strong>
        Ein Mann, der jedes Detail seines Auftretens – Kleidung, Gesten, Symbole – bewusst
        wählte, starb an einer Erkrankung, die sich keiner der von ihm gepflegten
        Bedeutungsebenen zuordnen ließ – ein stilles Ende ohne Drehbuch.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Lymphsystem?</strong>
        Für eine sexuelle Drei mit Viererflügel, deren gesamte Kraft auf der intensiven,
        exklusiven Bindung an einen einzelnen fixierten Blick beruhte, liegt eine Deutung
        nahe: Ausgerechnet jenes System, das den Körper unsichtbar durchzieht und ihn von
        innen heraus schützen soll, wurde zum Schauplatz des Verfalls – ein Gegenbild zu
        seiner nach außen gerichteten, hochsichtbaren Selbstinszenierung. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei zwangsläufig zu Lymphdrüsenkrebs
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Ramírez' Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen
        Diagnose, das bei einer ausgeprägten sexuellen Drei mit Viererflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ramírez kannte sein eigenes Muster nicht – die sexuelle Drei mit Viererflügel sucht
        reflexhaft nach einem Bild, das unauslöschlich bleibt, statt sich je mit der eigenen
        Vergänglichkeit auseinanderzusetzen, und genau dieses Streben lebte er über Jahrzehnte
        unverändert aus, bis die Krankheit ihm die Kontrolle über die eigene Erzählung
        endgültig entzog. Wer die eigene Suche nach Unsterblichkeit im Bild nicht als Muster
        erkennt, kann sie auch angesichts der eigenen Sterblichkeit nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Drei mit Viererflügel erklärt bei <strong>Ramírez</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, der Jahrzehnte damit verbrachte, sich
        selbst zum unauslöschlichen Bild zu machen, starb schließlich an einer Krankheit, die
        sich seiner Inszenierung vollständig entzog – der Pfau, dessen Rad sich am Ende nicht
        mehr entfalten ließ.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Richard
        Ramírez wurde 1989 in 13 Anklagepunkten des Mordes schuldig gesprochen und zum Tode
        verurteilt. Das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-richard-ramirez", label:"Kriminalpsychologie: Richard Ramírez (SX3w4) – der Night Stalker"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

export function ruthBaderGinsburgKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ruth-bader-ginsburg-portrait.jpg" alt="Ruth Bader Ginsburg – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ruth Bader Ginsburg</p>
        <p class="krim-portrait-typ">SX8w9 · Sexueller Typ 8 mit Neunerflügel · 1933–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ruth Bader Ginsburg</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ruth-bader-ginsburg">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur kurz zur
        Sprache kommt: Über zwei Jahrzehnte hinweg überstand Ginsburg vier
        Krebserkrankungen an insgesamt drei verschiedenen, sehr unterschiedlichen Organen – Darmkrebs 1999, Bauchspeicheldrüsenkrebs 2009, Lungenkrebs 2018 und
        erneut Bauchspeicheldrüsenkrebs 2019/2020 – ohne ihr Amt am Supreme Court auch nur einen
        Tag freiwillig zu räumen. Sie starb 2020 im Amt, wenige Wochen vor einer
        Präsidentschaftswahl, deren Ausgang über ihre Nachfolge entscheiden würde.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ginsburg</strong> ist der <strong>sexuellen Acht mit Neunerflügel</strong>
        zugeordnet. Naranjo nannte die sexuelle Acht <em>Besitz</em>: Sie will nicht nur
        siegen, sondern die vollständige, unverhandelbare Verbindung zu dem, wofür sie steht.
        Der Neunerflügel bringt Geduld und Ausdauer hinzu – die SX8w9 schlägt nicht sofort zu
        wie die SX8w7, sie wartet, bis der Moment vollständig ist, und hält dann fest, was sie
        einmal erreicht hat, mit einer Beharrlichkeit, die auch von schwerer Krankheit kaum zu
        erschüttern war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Präzise, unbeeindruckt von Gegenwehr:</strong>
        Ginsburgs Blick richtete sich auf das Wesentliche, ohne sich von Lärm oder Widerstand
        ablenken zu lassen – der Krokodilblick, der geduldig wartet und dann mit absoluter
        Präzision zuschlägt.</p>
        <p class="vb-intro"><strong>b) Nach außen unerschütterlich, nach innen kämpfend:</strong>
        Über Jahre hinweg saß Ginsburg im Gerichtssaal, kurz nach Chemotherapie-Sitzungen,
        ohne dass ihre Erkrankung öffentlich sichtbar wurde. Ihr Blick verriet nichts von dem,
        was ihr Körper gerade durchlief.</p>
        <p class="vb-intro"><strong>c) Wachsam gegenüber jedem Anzeichen, das Amt zu verlieren:</strong>
        Politischer Druck, freiwillig zurückzutreten, um einer demokratischen Nachfolge Platz
        zu machen, prallte an ihr ab – typisch sexuelle Acht: Das eigene Territorium wird
        nicht aus strategischer Vorsicht geräumt, sondern verteidigt, bis es nicht mehr geht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Vier Krebserkrankungen, ein Amt:</strong>
        Darmkrebs, zweimal Bauchspeicheldrüsenkrebs, Lungenkrebs – über zwei Jahrzehnte hinweg
        kehrte die Krankheit in immer neuer Form zurück. Ginsburg reagierte jedes Mal mit
        Behandlung, Genesung und Rückkehr ins Amt, nie mit Rückzug.</p>
        <p class="vb-intro"><strong>b) Körperliches Training als Statement:</strong>
        Ginsburgs öffentlich bekanntes, intensives Fitnessprogramm mit Liegestützen und
        Planks bis ins hohe Alter wurde zum Symbol ihrer physischen Unbeugsamkeit – ein
        bewusst kultiviertes Gegenbild zur Zerbrechlichkeit, die man ihr aufgrund von Alter
        und Krankheit unterstellte.</p>
        <p class="vb-intro"><strong>c) Arbeit ohne Unterbrechung:</strong>
        Selbst nach Operationen und während laufender Chemotherapien verpasste Ginsburg kaum
        eine mündliche Verhandlung – Krankheit wurde als Umstand behandelt, der die Arbeit
        begleitet, nicht als Grund, sie zu unterbrechen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Weigerung, das Feld zu räumen:</strong>
        Trotz jahrelangen politischen Drucks, während der Obama-Regierung zurückzutreten, um
        eine demokratische Nachfolge zu sichern, blieb Ginsburg im Amt – eine Entscheidung,
        die nach ihrem Tod 2020 zur umstrittensten ihrer Karriere wurde.</p>
        <p class="vb-intro"><strong>b) Ausdauer statt Eile, dank Neunerflügel:</strong>
        Wo eine SX8w7 vielleicht impulsiv reagiert hätte, verarbeitete Ginsburg jede neue
        Diagnose mit derselben geduldigen Beharrlichkeit, mit der sie jahrzehntelang auf die
        richtigen Rechtsfälle gewartet hatte.</p>
        <p class="vb-intro"><strong>c) Öffentliche Zurückhaltung, private Konsequenz:</strong>
        Ginsburg sprach öffentlich selten ausführlich über ihre Erkrankungen – sie ließ ihre
        Anwesenheit im Amt selbst sprechen, statt Mitleid oder Aufmerksamkeit für ihren
        Gesundheitszustand zu suchen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Unerschütterlich wirkend, trotz wiederholter Krankheit:</strong>
        Für die Öffentlichkeit blieb Ginsburg bis kurz vor ihrem Tod die unbeugsame &bdquo;Notorious
        RBG&ldquo; – ein Bild, das ihre eigene Zurückhaltung über die Schwere ihrer Erkrankungen
        maßgeblich mit aufgebaut hatte.</p>
        <p class="vb-intro"><strong>b) Respekt durch demonstrierte Beständigkeit:</strong>
        Gerade weil sie trotz wiederholter Krebsdiagnosen weiterarbeitete, wuchs der Mythos
        um ihre Unerschütterlichkeit – ein Effekt, den die SX8 durch reines Durchhalten
        erzeugt, ohne ihn aktiv zu inszenieren.</p>
        <p class="vb-intro"><strong>c) Eine Nachfolge, die zur nationalen Frage wurde:</strong>
        Ihr Tod wenige Wochen vor der Wahl 2020 löste eine der umstrittensten
        Richterbesetzungen der US-Geschichte aus – ein Beleg dafür, wie sehr ihr Verbleib im
        Amt bis zuletzt politisches Gewicht trug.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kompromisslose Verausgabung für die Sache:</strong>
        Ginsburg arbeitete bis in ihre letzten Lebenswochen an Urteilsbegründungen – die SX8
        kennt kaum Schonung, solange die eigene Kraft für die Sache reicht, für die sie steht.</p>
        <p class="vb-intro"><strong>b) Trennung von Person und Amt kaum möglich:</strong>
        Ihr Selbstverständnis war untrennbar mit ihrer Rolle am Gericht verbunden – ein
        Rückzug hätte sich angefühlt wie die Aufgabe eines Teils ihrer selbst.</p>
        <p class="vb-intro"><strong>c) Kontrolle über den eigenen Körper durch Disziplin:</strong>
        Das strenge Fitnessprogramm war auch ein Versuch, die Kontrolle zu behalten, die die
        Krankheit ihr wiederholt zu entreißen drohte – Disziplin als Antwort auf körperliche
        Verwundbarkeit.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Vierteljahrhundert im Ausnahmezustand:</strong>
        1999 Darmkrebs, 2009 Bauchspeicheldrüsenkrebs, 2018 Lungenkrebs, 2019 erneut
        Bauchspeicheldrüsenkrebs – Ginsburg lebte mehr als zwanzig Jahre lang mit der
        wiederkehrenden Gewissheit, dass ihr Körper sie erneut angreifen könnte. Jedes Mal
        kehrte sie nach Behandlung ins Amt zurück.</p>
        <p class="vb-intro"><strong>b) Öffentliche Untertreibung, private Realität:</strong>
        Ginsburgs Büro kommunizierte neue Diagnosen meist knapp und sachlich, oft erst nach
        erfolgter Behandlung. Diese kontrollierte Informationspolitik ähnelt dem Muster, das
        sich auch bei anderen Machtträgern findet, die ihre Position nicht durch den Anschein
        von Schwäche gefährden wollen.</p>
        <p class="vb-intro"><strong>c) Das Amt als Territorium, das nicht verhandelbar ist:</strong>
        Selbst als sich 2019 und 2020 ihr Gesundheitszustand sichtbar verschlechterte, lehnte
        Ginsburg jeden Gedanken an einen Rücktritt ab. Für die sexuelle Acht ist das erreichte
        Territorium – hier: der Sitz am höchsten Gericht der Vereinigten Staaten – etwas, das
        man verteidigt, nicht freiwillig übergibt, solange noch Kraft dafür da ist.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der wiederkehrende Kampf?</strong>
        Vier Krebserkrankungen an insgesamt drei verschiedenen, sehr unterschiedlichen Organen lassen sich nicht auf
        ein einzelnes Organsymbol zuspitzen wie bei anderen Krankheitsporträts dieses Kompasses
        – ihr roter Faden liegt woanders: im Muster der wiederholten Invasion und Abwehr selbst.
        Krebs ist medizinisch betrachtet eine Invasion des eigenen Körpers durch entartete,
        körperfremd gewordene Zellen – eine Grenzverletzung des eigenen Territoriums von
        innen. Für eine sexuelle Acht, deren gesamte Leidenschaft um Besitz, Grenzverteidigung
        und die Weigerung kreist, etwas Erkämpftes wieder herzugeben, liegt es nahe, gerade in
        dieser wiederholten körperlichen Grenzverletzung eine Zuspitzung des eigenen
        Lebensmusters zu lesen: Ginsburg reagierte auf jede neue Diagnose nicht mit Rückzug,
        sondern mit derselben Haltung, mit der sie ihr Amt gegen politischen Druck
        verteidigte – Territorium wird nicht aufgegeben, gleich ob der Angriff von außen oder
        von innen kommt. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht zwangsläufig zu Krebserkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Ginsburgs Fall zeigen lässt, ist ein Muster, das bei
        kompromissloser Verteidigung des eigenen Territoriums in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ginsburg kannte ihr eigenes Muster nicht – die sexuelle Acht hält an der einmal eingenommenen Position fest, komme was wolle, und genau dieses Beharrungsvermögen ließ sie vier Krebsdiagnosen überstehen, ohne das Amt freiwillig aufzugeben. Wer die eigene Unbeugsamkeit nicht als Muster erkennt, hält auch dann noch durch, wenn Nachgeben der gesündere Weg wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Acht mit Neunerflügel bestätigt sich bei <strong>Ginsburg</strong> noch
        einmal in ihrer eigenen Erkrankung: vier Krebserkrankungen, vier Rückkehrungen ins Amt,
        und eine Weigerung, das eigene Territorium aufzugeben, die sich gegen politischen Druck
        ebenso richtete wie gegen den eigenen, wiederholt erkrankten Körper. Das Krokodil, das
        geduldig wartet und dann mit absoluter Präzision zuschlägt, verteidigte bis zuletzt
        genau das eine Revier, das ihr am wichtigsten war – bis der Körper selbst keine
        Verteidigung mehr zuließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ruth-bader-ginsburg", label:"Porträt: Ruth Bader Ginsburg (SX8w9) – Lebenswerk"},
        {route:"krankheitsportraets-genesis-p-orridge", label:"Krankheitsporträt: Genesis P-Orridge (SX8w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

export function tELawrenceKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-t-e-lawrence-portrait.jpg" alt="T. E. Lawrence" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">T. E. Lawrence (Lawrence von Arabien)</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · 1888–1935</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>T. E. Lawrence</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-t-e-lawrence">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um den Wüstenkrieg, den selbst mitgeschaffenen
        Weltruhm-Mythos und den Rückzug unter falschem Namen. Im Fokus steht hier ein Abschnitt,
        der dort nur am Rande erscheint: den letzten dreizehn Lebensjahren, geprägt von
        chronischer Depression, Selbsthass und einer bis heute von Biografen als
        posttraumatische Belastungsstörung gedeuteten Nachwirkung der Gefangennahme in Deraa 1917.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Lawrence</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden nicht nach außen, sondern hält es zäh und allein aus –
        bei Lawrence hieß das: über die Erfahrung von Deraa öffentlich fast vollständig zu
        schweigen und sie stattdessen in einem einzigen, immer wieder neu geschriebenen
        Buchkapitel zu verarbeiten. Der Dreierflügel, der ihn zuvor zum Mitgestalter des eigenen
        Heldenmythos gemacht hatte, kehrte sich in diesen Jahren um: Statt weiter nach Sichtbarkeit
        zu streben, arbeitete Lawrence fortan aktiv daran, aus dem öffentlichen Bild zu verschwinden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Die Rückkehr aus dem Krieg als Bruch, nicht als Erleichterung:</strong>
        Nach Kriegsende und der Pariser Friedenskonferenz 1919, auf der Lawrence sich vergeblich
        für die arabische Unabhängigkeit einsetzte, zog er sich zunehmend von der Öffentlichkeit
        zurück. Zeitgenossen beschreiben einen sichtbar veränderten Mann – reizbarer, unruhiger,
        unfähig, in der zivilen Nachkriegswelt einen Platz für sich zu finden.</p>
        <p class="vb-intro"><strong>b) Der freiwillige Abstieg 1922:</strong>
        Auf dem Höhepunkt seines Weltruhms gab Lawrence seinen Offiziersrang auf und meldete sich
        unter dem falschen Namen „John Hume Ross" als einfacher Rekrut bei der Royal Air Force –
        niedrigster Dienstgrad, ärmlichste Unterkunft. Für Biografen ist dieser Schritt eines der
        deutlichsten frühen Anzeichen einer tiefen inneren Krise, die er selbst nie öffentlich als
        Krankheit benannte.</p>
        <p class="vb-intro"><strong>c) Der immer wieder neu geschriebene Bericht:</strong>
        Das Manuskript zu „Die sieben Säulen der Weisheit" verlor Lawrence 1919 an einem
        Bahnhof beinahe vollständig, schrieb es aus dem Gedächtnis neu und überarbeitete es in den
        Folgejahren mehrfach grundlegend – ein jahrelanges, zwanghaft wirkendes Ringen um die
        richtige Fassung der eigenen Kriegserfahrung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Dreizehn Jahre anhaltende Depression:</strong>
        Historiker beschreiben Lawrences letzte dreizehn Lebensjahre, von 1922 bis zu seinem Tod
        1935, als durchgehend geprägt von Depression, Selbsthass und Angstzuständen – kein
        vorübergehender Tiefpunkt, sondern ein anhaltender psychischer Zustand.</p>
        <p class="vb-intro"><strong>b) Symptome, die auf eine posttraumatische Belastungsstörung hindeuten:</strong>
        Der Psychiater und Lawrence-Biograf John E. Mack kommt in seiner vielzitierten Studie
        „A Prince of Our Disorder" (1976) zu dem Schluss, dass Lawrences Symptome – gedrückte
        Stimmung, ein zerstörtes Selbstbild, emotionaler Rückzug, erhöhte Verletzlichkeit – dem
        Bild einer schweren, unbehandelten Traumafolgestörung entsprechen, ausgelöst durch die
        Ereignisse von Deraa.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Schweigen bei gleichzeitiger literarischer Offenlegung:</strong>
        Während Lawrence im persönlichen Umgang kaum über Deraa sprach, widmete er dem Ereignis in
        „Die sieben Säulen der Weisheit" ein eigenes, quälend detailliertes Kapitel – die einzige
        Form, in der er sich der Erfahrung überhaupt näherte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein selbst organisiertes Bestrafungsritual:</strong>
        Ab 1923 vereinbarte Lawrence mit einem befreundeten Unteroffizier, John Bruce, in
        unregelmäßigen Abständen ausgepeitscht zu werden – ein Ritual, das er selbst detailliert
        vorgab und über Jahre fortsetzte. Biografen deuten es einhellig als Selbstbestrafung im
        Zusammenhang mit der in Deraa erlittenen Erniedrigung.</p>
        <p class="vb-intro"><strong>b) Der Verzicht auf Einnahmen aus dem eigenen Werk:</strong>
        Die reguläre Ausgabe von „Die sieben Säulen der Weisheit" (1926) sowie die gekürzte
        Fassung „Revolt in the Desert" verkauften sich gut – Lawrence spendete jedoch große Teile
        der Einnahmen wohltätigen Zwecken, statt sie für sich selbst zu nutzen.</p>
        <p class="vb-intro"><strong>c) Der zweite Namenswechsel:</strong>
        Nachdem die Presse ihn 1923 als „John Hume Ross" enttarnt hatte, wechselte Lawrence in den
        Tank Corps, diesmal unter dem Namen „T. E. Shaw" – ein erneuter Versuch, unter einer neuen
        Identität weiter unsichtbar zu bleiben, statt in die Öffentlichkeit zurückzukehren, die ihn
        einst gefeiert hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug nach Clouds Hill:</strong>
        In seinen letzten Lebensjahren zog sich Lawrence in ein kleines, bewusst einfach
        eingerichtetes Cottage namens Clouds Hill in Dorset zurück – ein Leben in größtmöglicher
        Zurückgezogenheit, weit entfernt vom Weltruhm, den er einst mitgeschaffen hatte.</p>
        <p class="vb-intro"><strong>b) Sichtbar gealtert und von Selbstzweifeln gezeichnet:</strong>
        Zeitgenossen, die Lawrence kurz vor seinem Tod trafen, beschrieben ihn als deutlich
        gealtert, niedergeschlagen und von anhaltenden Selbstzweifeln geplagt – ein auffälliger
        Kontrast zu dem energiegeladenen jungen Offizier der Kriegsjahre.</p>
        <p class="vb-intro"><strong>c) Der Motorradunfall als abruptes Ende:</strong>
        Am 13. Mai 1935 wich Lawrence auf seinem Motorrad zwei Fahrradfahrern auf einer schmalen
        Straße in Dorset aus, stürzte schwer und starb sechs Tage später, am 19. Mai 1935, an den
        Folgen seiner Kopfverletzungen – ohne belegten Zusammenhang mit seinem psychischen Zustand,
        aber am Ende eines Lebens, das von den letzten Kriegsjahren an von innerer Krise geprägt war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zähigkeit, die sich gegen den eigenen Körper und die eigene Psyche richtete:</strong>
        Dieselbe SE4-Zähigkeit, die Lawrence befähigte, wochenlange Wüstenmärsche und den Verlust
        des eigenen Manuskripts auszuhalten, richtete sich in den Nachkriegsjahren unvermindert
        gegen die eigenen seelischen Wunden – Erschöpfung und Verzweiflung wurden nicht als Grund
        zur Umkehr gelesen, sondern in immer strengere Selbstdisziplin und Selbststrafe übersetzt.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel in umgekehrter Richtung:</strong>
        Beim jungen Lawrence trieb der Dreierflügel den Aufbau eines glanzvollen öffentlichen
        Bildes an (siehe Berühmte-Persönlichkeiten-Porträt). In den Nachkriegsjahren kehrte sich
        dieselbe Kraft ins Gegenteil: Statt Sichtbarkeit zu suchen, arbeitete Lawrence aktiv an der
        eigenen Unsichtbarkeit – zwei falsche Namen, niedrigste Ränge, der Verzicht auf Tantiemen.
        Der Wunsch, das eigene Bild zu kontrollieren, blieb derselbe; nur das Ziel drehte sich um
        180 Grad, von maximaler Sichtbarkeit zu maximaler Verschwindung.</p>
        <p class="vb-intro"><strong>c) Das Auspeitschen als körperlich gewordene Selbstverurteilung:</strong>
        Das über Jahre fortgesetzte Ritual mit John Bruce lässt sich als direkte körperliche
        Übersetzung des inneren Urteils lesen, das die selbsterhaltende Vier in solchen Krisen über
        sich selbst fällt: nicht genug gewesen zu sein, um Deraa zu verhindern oder unbeschadet zu
        überstehen – und dieses Gefühl in eine buchstäbliche, selbst gewählte Strafe zu übersetzen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Honoré de Balzac und Lady Diana (SE4w3):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-honore-de-balzac">Honoré
        de Balzac</a> und <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady
        Diana</a>, beide ebenfalls SE4w3, zeigt sich bei Lawrence das für diesen Subtyp typische
        Muster: Das Leiden wird nicht laut nach außen getragen, sondern über Jahre allein und zäh
        ausgehalten, während nach außen möglichst lange Fassung gewahrt bleibt. Bei Diana bricht
        sich das Leiden Bahn in einer verschwiegenen Bulimie, bei Balzac in fortgesetztem
        körperlichem Raubbau, bei Lawrence in einem selbst organisierten Bestrafungsritual und dem
        Rückzug unter falschem Namen – drei Varianten derselben SE4-Grundbewegung: durchhalten,
        statt aufzugeben oder um Hilfe zu bitten.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre gewachsene Krise, kein einzelner Zusammenbruch:</strong>
        Von der ersten spürbaren Verhaltensänderung 1919 bis zum Motorradunfall 1935 zieht sich
        eine durchgehende Linie – dreizehn Jahre, in denen sich die psychische Belastung nicht
        löste, sondern in immer neue Formen der Selbstkontrolle und Selbststrafe umgeleitet wurde.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, ein gemeinsamer Ursprung:</strong>
        Das Auspeitschen-Lassen und der zweifache Namenswechsel in niedrigste Militärränge lassen
        sich als zwei Seiten derselben Bewältigungsstrategie lesen: die eigene, in Deraa erlittene
        Ohnmacht im Nachhinein selbst zu kontrollieren, statt sie unverarbeitet stehen zu lassen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine gedrückte, sich selbst verurteilende Stimmung?</strong>
        Für eine selbsterhaltende Vier, die ihr Leiden für gewöhnlich schweigend allein trägt, liegt
        eine Deutung nahe: Ein Ereignis wie Deraa, das die eigene Kontrolle über den Körper und die
        eigene Würde von außen gewaltsam durchbrach, trifft die SE4 in ihrem empfindlichsten Punkt –
        und wird, statt mitgeteilt zu werden, in stille Selbstverurteilung verwandelt. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird
        im <a href="javascript:void(0)" data-route="psychosomatik/depression">Psychosomatik-Register
        zur Depression</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu einer
        posttraumatischen Depression führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Lawrences Fall zeigen lässt, ist ein Muster, das
        bei der Neigung, seelisches Leiden stumm auszuhalten statt es zu teilen, in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Lawrence kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch nicht. Die selbsterhaltende Zähigkeit, die ihn befähigte, den
        Wüstenkrieg körperlich zu überstehen und einen Weltruhm-Mythos mitzuerschaffen, kannte für
        ihn keinen eingebauten Warnmechanismus, der ihn nach Deraa rechtzeitig zu professioneller
        Hilfe hätte finden lassen; im Gegenteil, das seelische Trauma wurde in genau derselben
        Logik verarbeitet, mit der er auch körperliche Strapazen im Krieg behandelt hatte: allein
        durchhalten, nicht klagen, keine Schwäche zeigen. Wer das eigene Erschöpfungsmuster nicht
        kennt, kann es auch nicht rechtzeitig unterbrechen – bei Lawrence endete das erst mit
        seinem Tod im Alter von 46 Jahren.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Lawrences</strong> letzten dreizehn Lebensjahren zeigt sich die selbsterhaltende
        Vier mit Dreierflügel von ihrer verletzlichsten Seite: derselbe Mensch, der einen
        Weltruhm-Mythos mitgestaltete, arbeitete danach ebenso entschlossen an der eigenen
        Unsichtbarkeit – zwei falsche Namen, niedrigste Ränge, ein selbst organisiertes
        Bestrafungsritual. Die Taube, die einst Botschaften über die Wüste trug, verstummte in den
        eigenen letzten Jahren fast vollständig – bis sie am 19. Mai 1935, sechs Tage nach einem
        Motorradunfall in Dorset, im Alter von 46 Jahren für immer schwieg.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-t-e-lawrence", label:"Porträt: T. E. Lawrence (SE4w3) – Lebenswerk"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Krankheitsporträt: Honoré de Balzac (SE4w3) – gleicher Subtyp"},
        {route:"krankheitsportraets-lady-diana", label:"Krankheitsporträt: Lady Diana (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik/depression", label:"Psychosomatik-Register: Depression"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function willyBrandtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-willy-brandt-portrait.jpg" alt="Willy Brandt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Willy Brandt</p>
        <p class="krim-portrait-typ">SO9w8 · Sozialer Typ 9 mit Achterflügel · 1913–1992</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Willy Brandt</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-willy-brandt">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nicht behandelt wird: wiederkehrende schwere depressive Episoden während
        seiner gesamten politischen Laufbahn, die er weitgehend privat hielt, sowie die
        Darmkrebs-Erkrankung, an der er 1992 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Brandt</strong> ist dem <strong>sozialen Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SO9 hält als Kontratyp der Neun äußerlich Kurs und Aktivität
        aufrecht, auch wenn innerlich Erschöpfung droht; der Achterflügel gibt die Kraft,
        nach außen entschlossen zu wirken, selbst wenn im Verborgenen ein Zusammenbruch
        drohte. Genau diese Kombination – nach außen unerschütterliche Präsenz, nach innen
        wiederkehrende schwere Erschöpfungskrisen – bestimmte den Verlauf seiner
        gesundheitlichen Geschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste dokumentierte depressive Episode um 1958:</strong>
        Biografen beschreiben eine erste schwere depressive Krise während seiner Zeit als
        Regierender Bürgermeister von Berlin, ausgelöst durch die politische und persönliche
        Belastung der Berlin-Krise.</p>
        <p class="vb-intro"><strong>b) Wiederkehrendes Muster über Jahrzehnte:</strong>
        Weitere Episoden folgten in Phasen extremer politischer Belastung, dokumentiert unter
        anderem von seinem Biografen Peter Merseburger, der Brandts Tendenz zu Phasen
        tiefer Erschöpfung und Rückzugs ausführlich beschrieb.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Thematisierung zu Lebzeiten in dieser Form:</strong>
        Zu seinen Amtszeiten wurden diese Krisen in der Öffentlichkeit nicht als
        eigenständiges Krankheitsbild benannt, sondern meist als vorübergehende
        Erschöpfung oder Krankheit umschrieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Schwerste Krise im Zusammenhang mit der Guillaume-Affäre 1974:</strong>
        Als sein enger Mitarbeiter Günter Guillaume 1974 als DDR-Spion enttarnt wurde, geriet
        Brandt nach übereinstimmenden biografischen Quellen in eine tiefe persönliche Krise,
        die seinen Rücktritt als Bundeskanzler begleitete.</p>
        <p class="vb-intro"><strong>b) Rückzug statt öffentlicher Erklärung:</strong>
        Anstatt die eigene psychische Belastung öffentlich zu benennen, trat Brandt formal
        wegen der Guillaume-Affäre zurück – ein Rücktrittsgrund, der öffentlich klarer
        kommuniziert werden konnte als die eigene Erschöpfung.</p>
        <p class="vb-intro"><strong>c) Diagnose von Darmkrebs in den 1990er-Jahren:</strong>
        Anfang der 1990er-Jahre wurde bei Brandt Darmkrebs diagnostiziert, an dem er nach
        kurzer Krankheit starb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte politische Aktivität trotz privater Krisen:</strong>
        Trotz der depressiven Episoden blieb Brandt über Jahrzehnte hinweg politisch aktiv –
        als SPD-Vorsitzender bis 1987, als Vorsitzender der Sozialistischen Internationale
        bis zu seinem Tod.</p>
        <p class="vb-intro"><strong>b) Tod am 8. Oktober 1992 in Unkel:</strong>
        Willy Brandt starb im Alter von 78 Jahren an den Folgen des Darmkrebses in seinem
        Wohnort Unkel am Rhein.</p>
        <p class="vb-intro"><strong>c) Staatsbegräbnis mit weltweiter Anteilnahme:</strong>
        Sein Tod löste international Trauer aus – zahlreiche Staats- und Regierungschefs
        nahmen am Staatsbegräbnis teil, das seine Bedeutung für die deutsche und europäische
        Nachkriegsgeschichte würdigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Nachträgliche biografische Aufarbeitung der depressiven Episoden:</strong>
        Erst nach seinem Tod wurde in umfassenden Biografien das Ausmaß seiner
        wiederkehrenden depressiven Krisen systematisch dokumentiert und in den Kontext
        seiner politischen Erfolge gestellt.</p>
        <p class="vb-intro"><strong>b) Ein Bild ungebrochener Stärke in der öffentlichen Erinnerung:</strong>
        Das öffentliche Gedächtnis an Brandt bleibt bis heute vor allem von Bildern
        entschlossener Stärke geprägt – dem Kniefall von Warschau, der Ostpolitik –, während
        die privaten Krisen erst durch spätere historische Forschung sichtbar wurden.</p>
        <p class="vb-intro"><strong>c) Keine Verklärung der eigenen Krankheit:</strong>
        Weder die depressiven Episoden noch die Krebserkrankung wurden nachträglich zu
        einem zentralen Bestandteil seines öffentlichen Vermächtnisses – dieses bleibt bis
        heute von seinem politischen Werk dominiert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Kontratyp, der auch im Zusammenbruch weiterlief:</strong>
        Die SO9-typische Umkehrung der eigenen Trägheit in äußere Aktivität zeigte sich
        gerade in den Krisenjahren: Selbst in Phasen tiefster Erschöpfung reiste, verhandelte
        und sprach Brandt weiter, statt sich offen zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die Fassade der Unerschütterlichkeit:</strong>
        Dieselbe Kraft, die Brandt gegen den öffentlichen Widerstand zur Ostpolitik standhalten
        ließ, sorgte auch dafür, dass die eigene psychische Erschöpfung nach außen kaum
        sichtbar wurde – Stärke als Rüstung, auch gegenüber sich selbst.</p>
        <p class="vb-intro"><strong>c) Ein formaler Rücktrittsgrund statt einer persönlichen Erklärung:</strong>
        Dass Brandt 1974 wegen der Guillaume-Affäre zurücktrat, statt die eigene
        Erschöpfung öffentlich zu benennen, passt zum SO9w8-Muster: Handeln bleibt sichtbar,
        das eigene Innenleben bleibt verborgen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann des Friedens, der den eigenen inneren Frieden am seltensten fand:</strong>
        Brandts gesamtes politisches Werk galt der Versöhnung und dem äußeren Frieden –
        ausgerechnet der eigene innere Frieden blieb ihm über Jahrzehnte durch wiederkehrende
        Erschöpfungskrisen verwehrt, die er nie öffentlich beim Namen nannte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Parallelen zeigen sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-wilma-mankiller">Wilma
        Mankiller</a> und
        <a href="javascript:void(0)" data-route="krankheitsportraets-ronald-reagan">Ronald
        Reagan</a> (beide ebenfalls SO9w8): Alle drei hielten ihr öffentliches Amt trotz
        erheblicher gesundheitlicher Belastung so lange wie möglich aufrecht, statt sich
        vorzeitig zurückzuziehen. Bei allen SO9w8ern zeigt sich dasselbe Muster: die äußere
        Aktivität als Gegenkraft zur eigenen Erschöpfung, bis der Körper selbst die Grenze
        setzt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Darm, das Organ der stillen Verarbeitung?</strong>
        Für einen sozialen Typ 9 mit Achterflügel, dessen gesamtes Leben von der Umkehrung
        innerer Erschöpfung in äußere Aktivität geprägt war, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das im Körper unbemerkt und ohne bewusste Kontrolle
        verarbeitet, wurde zum Ort der letzten Erkrankung – eine Krankheit, die, ähnlich wie
        die depressiven Episoden zuvor, lange im Verborgenen fortschritt. Diese Deutung ist
        eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun zwangsläufig zu Depression oder
        Darmkrebs führt – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig
        vom Subtyp.</strong> Was sich an Brandts Fall zeigen lässt, ist ein Muster im Umgang
        mit innerer Erschöpfung, das bei einem ausgeprägten sozialen Typ 9 mit Achterflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Brandt kannte sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 9
        mit Achterflügel verwandelt innere Erschöpfung reflexhaft in äußere Aktivität, statt
        rechtzeitig innezuhalten und die eigene Grenze anzuerkennen, und lebte genau dieses
        Muster über Jahrzehnte unverändert aus. Wer die eigene Neigung, Erschöpfung durch
        Handeln zu überdecken, statt sie zu benennen, nicht als Muster erkennt, riskiert,
        dass der Körper irgendwann die Pause erzwingt, die der Wille nie zugelassen hat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 9 mit Achterflügel erklärt bei <strong>Willy Brandt</strong> vieles
        am Verlauf seiner gesundheitlichen Geschichte: ein Mann, dessen gesamtes Wirken dem
        äußeren Frieden galt, fand den eigenen inneren Frieden über Jahrzehnte nicht – der
        Büffel, der durch jede Krise weiterlief, bis der Körper selbst am Ende die letzte,
        unausweichliche Ruhe erzwang.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-willy-brandt", label:"Porträt: Willy Brandt (SO9w8)"},
        {route:"krankheitsportraets-wilma-mankiller", label:"Krankheitsporträt: Wilma Mankiller (SO9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-ronald-reagan", label:"Krankheitsporträt: Ronald Reagan (SO9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

export function brigitteBardotKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-brigitte-bardot-portrait.jpg" alt="Brigitte Bardot" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Brigitte Bardot</p>
        <p class="krim-portrait-typ">SX3w2 · Sexueller Typ 3 mit Zweierflügel · 1934–2025</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Brigitte Bardot</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-brigitte-bardot">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihre Filmkarriere und ihr
        jahrzehntelanges Wirken als Tierschutzaktivistin. Dieses Porträt vertieft ein
        Kapitel, das dort nur am Rande erwähnt wird: ihre letzten Lebensmonate, geprägt
        von einer nie öffentlich benannten Krebserkrankung, zwei Operationen und einem
        selbstbewussten Umgang mit den eigenen Todesgerüchten bis kurz vor ihrem
        tatsächlichen Tod am 28. Dezember 2025.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bardot</strong> ist dem <strong>sexuellen Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die SX3 macht unmittelbare, magnetische Präsenz zum Lebensthema –
        bei Bardot äußerte sich das zeitlebens als Weigerung, sich zu verstecken, auch
        dort nicht, wo Verletzlichkeit sichtbar wurde. Der Zweierflügel bringt eine echte
        Fürsorgeenergie hinzu, die sich bei ihr zunächst den eigenen Tieren zuwandte und
        sich in den letzten Lebensmonaten auf den eigenen Körper richtete – mit
        derselben unnachgiebigen Direktheit, mit der sie ihr ganzes Leben lang öffentlich
        aufgetreten war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelange, öffentlich bekannte Rückenprobleme:</strong>
        Bardot litt bereits seit vielen Jahren an schweren Rückenschmerzen, die
        wiederholt Thema von Presseberichten waren, ohne dass sie deswegen ihr Engagement
        für den Tierschutz oder ihre öffentlichen Auftritte grundsätzlich einschränkte.</p>
        <p class="vb-intro"><strong>b) Ein erster ernster Krankenhausaufenthalt im Oktober 2025:</strong>
        Im Oktober 2025 wurde Bardot wegen einer als „ernst" beschriebenen Erkrankung und
        eines kleineren Eingriffs ins Krankenhaus eingeliefert – ein Ereignis, das erste
        öffentliche Sorge um ihren Gesundheitszustand auslöste.</p>
        <p class="vb-intro"><strong>c) Eigenhändiges Dementi kursierender Todesgerüchte:</strong>
        Noch im selben Monat sah sich die damals 91-Jährige gezwungen, online kursierende
        falsche Berichte über ihren angeblichen Tod persönlich zurückzuweisen – ein
        Auftritt, der zeigte, wie sehr sie auch schwer krank die Kontrolle über die
        eigene öffentliche Erzählung behalten wollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine Krebsdiagnose ohne öffentlich benannten Typ:</strong>
        Ihr Ehemann Bernard d'Ormale bestätigte nach ihrem Tod, dass Bardot an Krebs
        erkrankt war, nannte aber zu keinem Zeitpunkt die genaue Diagnose – eine bewusste
        Entscheidung für Privatsphäre inmitten eines öffentlichen Lebens.</p>
        <p class="vb-intro"><strong>b) Zwei Operationen innerhalb weniger Monate:</strong>
        Berichten zufolge unterzog sich Bardot zwei Operationen im Zusammenhang mit ihrer
        Krebserkrankung, während gleichzeitig ihre chronischen Rückenschmerzen weiter
        bestanden und ihren Gesamtzustand zusätzlich schwächten.</p>
        <p class="vb-intro"><strong>c) Rückzug an den vertrauten Ort La Madrague:</strong>
        In ihren letzten Lebensmonaten zog sich Bardot an ihr langjähriges Anwesen La
        Madrague in Saint-Tropez zurück – denselben Ort, an dem sie über Jahrzehnte
        hinweg verletzte Tiere gepflegt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 28. Dezember 2025 in vertrauter Umgebung:</strong>
        Bardot starb im Alter von 91 Jahren in ihrem Haus in La Madrague – nicht in einer
        Klinik, sondern an dem Ort, der über Jahrzehnte das Zentrum ihres zweiten,
        tierschützerischen Lebens gewesen war.</p>
        <p class="vb-intro"><strong>b) Keine Inszenierung des eigenen Sterbens:</strong>
        Anders als bei mancher öffentlichen Figur wurde ihr Tod nicht vorab angekündigt
        oder begleitet – nach dem Dementi der Todesgerüchte im Oktober blieb es bis zur
        tatsächlichen Nachricht im Dezember bei ihrer gewohnten, unnachgiebigen Präsenz
        in der Öffentlichkeit.</p>
        <p class="vb-intro"><strong>c) Weltweite Anteilnahme über Film- und Tierschutzkreise hinaus:</strong>
        Nachrufe würdigten sowohl ihre Filmkarriere der 1950er- und 60er-Jahre als auch
        ihr jahrzehntelanges Engagement für Tiere – zwei Lebensphasen, die in der
        öffentlichen Erinnerung gleichermaßen Gewicht erhielten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Vermächtnis, das über die eigene Person hinausreicht:</strong>
        Die von ihr 1986 gegründete Fondation Brigitte Bardot bleibt nach ihrem Tod
        aktiv und setzt ihre Kampagnen gegen Pelzhandel, Robbenjagd und Massentierhaltung
        fort – ein Wirken, das ihren eigenen Tod überdauert.</p>
        <p class="vb-intro"><strong>b) Zwiespältige öffentliche Erinnerung:</strong>
        Nachrufe griffen wiederholt die Spannung zwischen ihrem Lebenswerk im Tierschutz
        und ihren in späteren Jahrzehnten mehrfach gerichtlich verurteilten Äußerungen
        zu Einwanderung und Islam auf – ein Erbe, das bis zuletzt nicht widerspruchsfrei war.</p>
        <p class="vb-intro"><strong>c) Eine der letzten großen Ikonen des klassischen europäischen Kinos:</strong>
        Mit ihrem Tod verlor das europäische Filmerbe der Nachkriegszeit eine seiner
        prägendsten und zugleich umstrittensten Figuren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Direktheit auch im eigenen Sterben:</strong>
        Die für die sexuelle Drei typische Weigerung, sich hinter einer Fassade zu
        verstecken, zeigte sich bei Bardot bis zuletzt darin, dass sie kursierende
        Falschmeldungen über ihren Tod nicht stillschweigend hinnahm, sondern selbst
        öffentlich widersprach.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die gewahrte Privatsphäre der Diagnose:</strong>
        Dass die genaue Krebsart nie öffentlich benannt wurde, lässt sich auch als
        Ausdruck des Zweierflügels lesen: Fürsorge richtete sich zeitlebens nach außen,
        auf die Tiere, die sie schützte – die eigene Verletzlichkeit dagegen blieb, anders
        als ihr öffentliches Bild, bewusst geschützter, privater Raum.</p>
        <p class="vb-intro"><strong>c) Der vertraute Ort als letzter Rückzugsraum:</strong>
        Dass Bardot in La Madrague starb, an demselben Ort, an dem sie über Jahrzehnte
        Tieren Zuflucht gegeben hatte, lässt sich als konsequente letzte Geste lesen –
        der Pfau, der sein Rad nicht mehr für ein Publikum entfaltet, sondern sich dorthin
        zurückzieht, wo seine Fürsorge zuerst begann.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Frau, die zeitlebens die Kontrolle über die eigene Erzählung behielt:</strong>
        Von ihrem abrupten Rückzug aus dem Filmgeschäft 1973 bis zu ihrem persönlichen
        Dementi der eigenen Todesgerüchte im Oktober 2025 zieht sich ein Muster durch
        Bardots Leben: Sie überließ entscheidende Wendepunkte ihrer eigenen Geschichte
        nie vollständig anderen.</p>
        <p class="vb-intro"><strong>b) Zwei Fürsorgephasen, dieselbe Konsequenz:</strong>
        Wie sie sich einst mit den eigenen Händen um verletzte und ausgesetzte Tiere
        kümmerte, ohne diese Aufgabe zu delegieren, ging sie offenbar auch mit der
        eigenen Krankheit um: kein öffentliches Klagen, keine Delegation an eine
        kontrollierte PR-Erzählung, sondern eine private, direkte Auseinandersetzung bis
        zuletzt.</p>
        <p class="vb-intro"><strong>c) Eine öffentliche Person, die im entscheidenden Moment privat blieb:</strong>
        Dass weder die genaue Krebsart noch der exakte Krankheitsverlauf öffentlich
        benannt wurden, obwohl Bardot zeitlebens für ihre Direktheit bekannt war, zeigt
        eine bewusste Grenze: Fürsorge und Präsenz galten öffentlich vor allem den
        Tieren, die eigene Verletzlichkeit blieb geschützter, privater Raum.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Rücken zuerst?</strong>
        Für eine sexuelle Drei mit Zweierflügel, deren gesamtes Lebenswerk auf
        aufrechter, unmittelbarer Präsenz beruhte – vor der Kamera wie später vor der
        Öffentlichkeit als Aktivistin –, liegt eine Deutung nahe: Ausgerechnet jenes
        Körperteil, das im übertragenen Sinn für Haltung und Rückgrat steht, wurde bei
        Bardot über Jahrzehnte zum Ort chronischen Leidens. Diese Deutung ist eine
        plausible Interpretation, kein belegter medizinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei mit Zweierflügel
        zwangsläufig zu chronischen Rückenleiden oder Krebserkrankungen führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Bardots Fall zeigen lässt, ist ein Muster im Umgang mit einer
        fortschreitenden Erkrankung, das bei einer ausgeprägten sexuellen Drei mit
        Zweierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bardot kannte ihr eigenes Enneagramm-Muster nicht – die sexuelle Drei mit
        Zweierflügel hält reflexhaft an der eigenen, unmittelbaren Präsenz fest, statt
        Schwäche oder Verletzlichkeit rechtzeitig einzugestehen, und lebte genau dieses
        Muster bis zuletzt unverändert aus: öffentlich direkt und unnachgiebig, privat
        mit der eigenen Krankheit allein. Wer die eigene Neigung, niemals Kontrolle über
        die eigene Erzählung abzugeben, nicht als Muster erkennt, riskiert, dass echte
        Fürsorge für sich selbst erst ganz am Ende überhaupt Raum bekommt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Drei mit Zweierflügel erklärt bei <strong>Brigitte Bardot</strong>
        vieles am Verlauf ihrer letzten Lebensmonate: eine Frau, deren gesamtes Leben
        von unmittelbarer, unverstellter Präsenz geprägt war, behielt auch im
        Angesicht der eigenen Sterblichkeit die Kontrolle über die eigene Geschichte –
        dementierte Gerüchte selbst, wählte den eigenen Rückzugsort, und ließ die Welt
        nur so viel wissen, wie sie selbst preisgeben wollte. Der Pfau, der sein Rad ein
        letztes Mal nicht für ein Publikum entfaltete, sondern für sich selbst schloss.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-brigitte-bardot", label:"Porträt: Brigitte Bardot (SX3w2) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

export function christophKolumbusKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-christoph-kolumbus-portrait.jpg" alt="Christoph Kolumbus" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Christoph Kolumbus</p>
        <p class="krim-portrait-typ">SE7w8 · Selbsterhaltender Typ 7 mit Achterflügel · um 1451–1506</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Christoph Kolumbus</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-christoph-kolumbus">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine jahrelange Vorsorge vor der ersten
        Atlantiküberquerung und seine Härte als Statthalter. Diesmal richtet sich der Blick auf
        ein Kapitel, das dort nur am Rande erscheint: eine quälende, nie ganz geklärte
        Gelenkerkrankung, die ihn in seinen letzten acht Lebensjahren zunehmend fesselte – und
        die ihn dennoch nie davon abhielt, eine vierte, letzte Atlantiküberquerung anzutreten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kolumbus</strong> ist der <strong>selbsterhaltenden Sieben mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp die "versteckte Acht": eine Sieben, die ihre
        praktische Vorsorge mit der Durchsetzungskraft und Härte der Acht verbindet. Genau
        diese Kombination aus zäher, jahrelanger Absicherung und der Weigerung, vor
        körperlichen Grenzen zurückzuschrecken, prägte auch seinen Umgang mit der eigenen
        Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein plötzlicher Anfall im Sommer 1498:</strong>
        Während seiner dritten Reise wurde Kolumbus, damals einundvierzig, von heftigen
        Schmerzen in den Beinen befallen, begleitet von hohem Fieber – zeitgenössisch als
        "Gicht" bezeichnet, obwohl das Beschwerdebild dafür ungewöhnlich verlief.</p>
        <p class="vb-intro"><strong>b) Blutende, entzündete Augen sechs Wochen später:</strong>
        Wenige Wochen nach dem ersten Anfall entzündeten sich Kolumbus' Augen und begannen zu
        bluten, sein Sehvermögen verschlechterte sich merklich – ein Symptomkomplex, den
        moderne Mediziner rückblickend als mögliches Reiter-Syndrom deuten, eine reaktive
        Arthritis nach einer bakteriellen Infektion, die er sich auf einer seiner Reisen
        zugezogen haben könnte.</p>
        <p class="vb-intro"><strong>c) Erste Bettlägerigkeit inmitten der Kolonialverwaltung:</strong>
        Ausgerechnet in einer Phase, in der Hispaniola von Aufständen und Verwaltungschaos
        erschüttert wurde, war Kolumbus zeitweise zu krank, um die Amtsgeschäfte selbst zu
        führen – ein erster, erzwungener Bruch in seinem sonst ununterbrochenen Tatendrang.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Schübe statt einmaliger Episode:</strong>
        Die Gelenkschmerzen kehrten in den folgenden Jahren immer wieder zurück, mit
        Phasen relativer Besserung, gefolgt von erneuten, oft wochenlangen Anfällen –
        ein Muster, das sich bis zu seinem Tod fortsetzte.</p>
        <p class="vb-intro"><strong>b) Kaum dokumentierte Klagen, viel dokumentierte Aktivität:</strong>
        In Kolumbus' eigenen Briefen an die spanische Krone nimmt die eigene Krankheit
        auffallend wenig Raum ein, verglichen mit ausführlichen Schilderungen zu Rechten,
        Ansprüchen und den nächsten geplanten Unternehmungen.</p>
        <p class="vb-intro"><strong>c) Ein Körper, der zunehmend nicht mehr mithielt:</strong>
        Zeitgenossen beschrieben Kolumbus in seinen letzten Lebensjahren als gealtert und
        gezeichnet – ein auffälliger Kontrast zu dem energiegeladenen Seefahrer früherer
        Jahre.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Rückkehr in Ketten 1500 als zusätzliche Belastung:</strong>
        Kurz nach den ersten schweren Krankheitsschüben wurde Kolumbus wegen Beschwerden über
        seine Tyrannei als Statthalter abgesetzt und in Ketten nach Spanien zurückgebracht –
        eine Demütigung, die auf einen bereits geschwächten Körper traf.</p>
        <p class="vb-intro"><strong>b) Die vierte Reise trotz fortgeschrittener Krankheit:</strong>
        Statt sich zu schonen, drängte Kolumbus 1502, mit einundfünfzig Jahren und deutlich
        beeinträchtigter Beweglichkeit, auf eine vierte Atlantiküberquerung – gegen den Rat
        derer, die seinen Zustand kannten.</p>
        <p class="vb-intro"><strong>c) Monatelang ans Bett gefesselt vor der Karibikküste:</strong>
        Während dieser letzten Reise war Kolumbus zeitweise so schwer von Fieber und
        Gelenkschmerzen gezeichnet, dass er die Kommandobrücke nicht mehr verlassen konnte und
        Anweisungen liegend erteilte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Jahr auf Jamaika, gestrandet und krank:</strong>
        Nach dem Verlust seiner Schiffe strandete Kolumbus 1503/04 für fast ein Jahr auf
        Jamaika – gezeichnet von Fieberschüben und Gelenkschmerzen, während er gleichzeitig
        eine Meuterei unter der eigenen Mannschaft niederschlagen musste.</p>
        <p class="vb-intro"><strong>b) Rückkehr nach Spanien, aber kein Ende des Kampfes:</strong>
        Nach der Rückkehr im November 1504 war Kolumbus körperlich stark geschwächt – doch
        statt sich zurückzuziehen, verbrachte er seine letzten anderthalb Lebensjahre damit,
        unermüdlich um die Wiederherstellung seiner vertraglich zugesicherten Titel und
        Einnahmen zu kämpfen.</p>
        <p class="vb-intro"><strong>c) Tod am 20. Mai 1506 in Valladolid:</strong>
        Kolumbus starb im Alter von etwa fünfundfünfzig Jahren, vermutlich an den
        Spätfolgen der jahrelangen Gelenkentzündung in Kombination mit Herzversagen –
        überzeugt bis zuletzt, einen Seeweg nach Asien und nicht einen neuen Kontinent
        gefunden zu haben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der auch die eigene Schwäche ignorierte:</strong>
        Dieselbe Durchsetzungskraft, die Kolumbus durch jahrelange Ablehnung an den
        europäischen Höfen und durch Meutereien auf See trug, ließ ihn auch über die
        eigenen körperlichen Warnsignale hinweggehen – eine vierte Reise trotz fortgeschrittener
        Krankheit war für ihn keine Frage, sondern eine Selbstverständlichkeit.</p>
        <p class="vb-intro"><strong>b) Vorsorge für das Territorium, nicht für den eigenen Körper:</strong>
        Die selbsterhaltende Sieben sichert sich normalerweise durch praktische Vorsorge ab –
        bei Kolumbus richtete sich diese Vorsorge fast ausschließlich auf Titel, Verträge und
        Ansprüche, kaum auf die eigene Gesundheit, die dabei zur Nebensache wurde.</p>
        <p class="vb-intro"><strong>c) Kampf um Anerkennung als letztes verbliebenes Terrain:</strong>
        Nach dem Verlust der Statthalterschaft verlagerte sich die ganze Energie der SE7w8
        auf den Kampf um die Wiederherstellung seiner Rechte – mit einer Unnachgiebigkeit, die
        auch der eigene, sichtbar verfallende Körper nicht bremsen konnte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die nie zum Rückzugsgrund wurde:</strong>
        Acht Jahre lang begleiteten wiederkehrende Gelenkentzündungen, Fieberschübe und
        zeitweise Erblindungserscheinungen Kolumbus – ohne dass er daraus je die Konsequenz
        zog, seine Unternehmungen einzuschränken oder sich Ruhe zu gönnen.</p>
        <p class="vb-intro"><strong>b) Ein Tod, der zum Sinnbild eines unnachgiebigen Lebens wurde:</strong>
        Kolumbus starb nicht im Ruhestand, sondern mitten im Kampf um seine Rechte – ein
        Territorium, das er, wie schon zu Lebzeiten sein geographisches, bis zum letzten
        Atemzug nicht aufgeben wollte.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Gelenkerkrankung?</strong>
        Für eine selbsterhaltende Sieben mit Achterflügel, deren Stärke traditionell in
        körperlicher Robustheit und praktischer Beweglichkeit liegt, trifft eine
        fortschreitende, bewegungseinschränkende Gelenkerkrankung einen empfindlichen Punkt:
        Sie greift genau die Fähigkeit an, die diesen Subtyp sonst auszeichnet – tatkräftig
        und uneingeschränkt handlungsfähig zu bleiben. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        derartigen Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Kolumbus' Fall zeigen lässt, ist ein Muster,
        das bei ungebremster Reviersicherung in der Praxis immer wieder auffällt – eine von
        vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kolumbus kannte sein eigenes Muster nicht – die selbsterhaltende Sieben mit
        Achterflügel verteidigt ihr beanspruchtes Terrain, ob geographisch oder vertraglich,
        auch dann noch unnachgiebig, wenn der eigene Körper längst Grenzen setzt, und genau
        das trieb ihn dazu, noch mit fortgeschrittener Krankheit eine vierte Ozeanüberquerung
        anzutreten und bis zum Tod um seine Titel zu kämpfen, statt kürzerzutreten. Wer den
        eigenen Drang, das einmal beanspruchte Revier nie herzugeben, nicht als Muster
        erkennt, unterschätzt, wie sehr er den eigenen Körper dabei aufreibt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Kolumbus'</strong> letzten acht Lebensjahren lässt sich die selbsterhaltende
        Sieben mit Achterflügel in ihrer unnachgiebigsten Form ablesen: eine fortschreitende,
        kaum beklagte Gelenkerkrankung, die weder eine vierte Atlantiküberquerung noch den
        jahrelangen Kampf um die eigenen Rechte je verhinderte. Der Gorilla, der sein Revier
        bis zum letzten Atemzug verteidigt – auch dann noch, wenn der eigene Körper längst
        nicht mehr mithält.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-christoph-kolumbus", label:"Porträt: Christoph Kolumbus (SE7w8) – Lebenswerk"},
        {route:"krankheitsportraets-francis-bacon", label:"Krankheitsporträt: Francis Bacon (SE7w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

export function michaelBerrymanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-berryman-portrait.jpg" alt="Michael Berryman" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Berryman</p>
        <p class="krim-portrait-typ">SX9w8 · Sexueller Typ 9 mit Achterflügel · geb. 1948</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Berryman</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-michael-berryman">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Schauspielkarriere als
        Horror-Ikone. Diese Seite beleuchtet näher, was dort nur kurz anklingt:
        das Leben mit der angeborenen hypohidrotischen ektodermalen Dysplasie und den
        Umgang mit Mobbing, Neugier und Anstarren, der daraus über Jahrzehnte wurde.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Berryman</strong> ist dem <strong>sexuellen Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SX9 sucht Erfüllung über völlige Verschmelzung mit einer
        einzelnen intensiven Beziehung oder Aufgabe. Der Achterflügel bringt eine
        untypische Konfrontationsbereitschaft hinzu, die unbequeme Wahrheiten offen
        ausspricht, statt sie zu verschweigen – wichtig zu betonen: Seine Erkrankung
        selbst ist eine rein genetische, angeborene Fehlbildung ohne jeden Bezug zum
        Enneagramm-Muster; analysiert wird hier ausschließlich der Umgang damit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Diagnose von Geburt an:</strong>
        Anders als bei den meisten anderen Krankheitsporträts dieses Kompasses gab es
        bei Berryman keine schleichende Entwicklung – die hypohidrotische ektodermale
        Dysplasie war von Geburt an sichtbar: fehlende Schweißdrüsen, fehlendes
        Kopfhaar, fehlende Fingernägel, ein charakteristisch geformtes Gesicht.</p>
        <p class="vb-intro"><strong>b) Frühe Konfrontation mit fremden Blicken:</strong>
        Schon als Kind war er permanent Blicken, Fragen und Getuschel ausgesetzt –
        eine Situation, der er sich, anders als viele Betroffene, nie durch Rückzug
        entzog.</p>
        <p class="vb-intro"><strong>c) Die Highschool als Wendepunkt:</strong>
        Nach eigener Aussage lernte er erst in der Highschool „was Ignoranz, Vorurteil
        und Grausamkeit wirklich bedeuten" – eine Zeit intensiven Mobbings, die bei
        vielen zu dauerhaftem sozialem Rückzug geführt hätte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Diagnose ektodermale Dysplasie:</strong>
        Eine seltene, vererbte, unheilbare genetische Störung der Entwicklung von Haut,
        Haaren, Zähnen, Nägeln und Schweißdrüsen – im Fall von Berryman verantwortlich
        für sein unverwechselbares, in der Filmwelt später sehr gefragtes Aussehen.</p>
        <p class="vb-intro"><strong>b) Keine Behandlung, die das Grundbild ändert:</strong>
        Die Erkrankung ließ und lässt sich nicht heilen oder grundlegend verändern –
        Berryman lebte sein gesamtes Leben mit genau dem Gesicht, das ihm gegeben war,
        ohne die Option, es kosmetisch grundlegend zu verändern.</p>
        <p class="vb-intro"><strong>c) Von der Belastung zum Kapital:</strong>
        Statt das Aussehen als reines Handicap zu behandeln, machte er es aktiv zum
        Zentrum seiner beruflichen Identität – ein Weg, den nur eine Minderheit der
        Betroffenen mit sichtbaren genetischen Besonderheiten überhaupt einschlägt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Blumenladen von Venice Beach:</strong>
        Statt eine Tätigkeit im Hintergrund zu suchen, arbeitete der junge Berryman an
        einem offenen Verkaufstresen, für jeden Kunden sichtbar – dort entdeckte ihn
        1975 Filmproduzent George Pal.</p>
        <p class="vb-intro"><strong>b) Die zitierte Erwiderung auf Mobbing:</strong>
        „Du bist ein Feigling, und wenn wir die Körper tauschen könnten, hättest du die
        Chance, eine Seele wachsen zu lassen und der ‚Menschheit' beizutreten. Ich
        bemitleide dein kleinherziges Leben." – eine direkte, konfrontative Antwort
        statt eines stillen Erduldens.</p>
        <p class="vb-intro"><strong>c) Bewusste Berufswahl im Horrorgenre:</strong>
        Statt Rollen zu suchen, die sein Aussehen kaschieren, wählte er ausgerechnet
        ein Genre, in dem genau dieses Aussehen zum zentralen Element der Rolle wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine jahrzehntelange Karriere statt einer einzigen Rolle:</strong>
        Von ›Einer flog über das Kuckucksnest‹ (1975) über ›The Hills Have Eyes‹ (1977)
        bis zu Auftritten in ›Star Trek‹ und ›The X-Files‹ – ein durchgehendes
        Filmschaffen, das nie versuchte, die genetische Besonderheit zu verstecken.</p>
        <p class="vb-intro"><strong>b) Die Convention-Bühne als zweites Zuhause:</strong>
        Bis heute ist er fester Bestandteil der Horror- und Fan-Convention-Szene, wo er
        Fans persönlich begegnet, statt sich hinter Distanz zu schützen.</p>
        <p class="vb-intro"><strong>c) Engagement über die eigene Person hinaus:</strong>
        Berryman engagiert sich öffentlich für Menschen mit Behinderungen und für
        Umweltschutz – eine Ausweitung seiner eigenen Erfahrung auf ein breiteres
        gesellschaftliches Anliegen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit dem eigenen, ungewöhnlichen Bild:</strong>
        Statt eine Kluft zwischen dem eigenen Ich und dem öffentlichen Bild zu
        empfinden, verschmolz Berryman beide vollständig – die für die sexuelle Neun
        typische Auflösung der Grenze zwischen Selbst und Rolle.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel als Schutzschild statt als Waffe gegen andere:</strong>
        Seine direkte, konfrontative Art richtete sich fast ausschließlich gegen
        konkrete Angriffe – nicht als generelle Aggression, sondern als punktgenaue
        Selbstbehauptung im Moment der Kränkung.</p>
        <p class="vb-intro"><strong>c) Gelassenheit als Grundzustand zwischen den Konfrontationen:</strong>
        Zwischen den wenigen dokumentierten scharfen Erwiderungen liegt eine über
        Jahrzehnte beobachtete, durchgehende Ruhe im persönlichen Kontakt – neunertypisch,
        mit dem Achterflügel als punktueller Ausnahme.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Ausgangslage, die es so bei keinem anderen Porträt dieses Kompasses gibt:</strong>
        Während die meisten Krankheitsporträts hier einen Verlauf über Lebensjahre oder
        -jahrzehnte zeigen, war Berrymans körperliche Besonderheit von der ersten
        Minute an da – kein Ereignis, sondern eine Ausgangsbedingung des gesamten
        Lebens.</p>
        <p class="vb-intro"><strong>b) Die Reaktion darauf als das eigentliche Muster:</strong>
        Nicht die Erkrankung selbst, sondern der lebenslange Umgang mit ihr zeigt die
        sexuelle Neun mit Achterflügel: das Verschmelzen mit dem eigenen Bild bis zur
        Untrennbarkeit, unterbrochen von punktuellen, scharfen Konfrontationen bei
        konkreten Angriffen.</p>
        <p class="vb-intro"><strong>c) Wichtiger Unterschied zu anderen Krankheitsporträts:</strong>
        Bei praktisch allen übrigen Krankheitsporträts dieses Kompasses lässt sich
        fragen, ob ein bestimmtes Lebensmuster den Krankheitsverlauf mitgeprägt haben
        könnte. Bei einer angeborenen genetischen Fehlbildung wie der ektodermalen
        Dysplasie stellt sich diese Frage nicht – die Erkrankung selbst hat keinerlei
        Bezug zum Enneagramm-Muster. Was das Enneagramm hier sichtbar macht, ist
        ausschließlich, wie unterschiedlich Menschen desselben Ausgangsbefunds darauf
        reagieren können – und warum ausgerechnet dieses Muster aus Verschmelzung und
        gelegentlicher Konfrontation zu einer öffentlichen, erfüllten Karriere führte,
        wo andere sich zurückgezogen hätten.</p>
        <p class="vb-intro"><strong>d) Eine Parallele zu François Damiens, ebenfalls SX9w8 in diesem Kompass:</strong>
        Wie bei <a href="javascript:void(0)" data-route="beruehmte-francois-damiens">François Damiens</a>,
        der sein Privatleben radikal abschirmt, aber beruflich in jede Rolle
        verschmilzt, zeigt sich auch bei Berryman dieselbe Kombination: völlige
        berufliche Sichtbarkeit des ungewöhnlichen Äußeren bei gleichzeitig klaren,
        selbstbestimmten Grenzen gegenüber Angriffen.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Einordnung ohne Determinismus:</strong>
        Diese Einordnung ist noch entschiedener zu betonen als bei anderen
        Krankheitsporträts dieses Kompasses: <strong>Die genetische Grundlage von
        Berrymans Aussehen hat nichts mit seinem Enneagramm-Subtyp zu tun</strong> – jeder
        Mensch jedes Subtyps kann mit jeder genetischen Besonderheit geboren werden.
        Was das Enneagramm hier beschreibt, ist ausschließlich das bemerkenswerte
        Bewältigungsmuster, mit dem Berryman aus einer nicht selbst gewählten
        Ausgangslage eine erfüllte, öffentlichkeitswirksame Existenz formte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Michael Berrymans</strong> Umgang mit seiner angeborenen ektodermalen
        Dysplasie lässt sich die sexuelle Neun mit Achterflügel in einer besonders
        ermutigenden Form studieren: keine Krankengeschichte im klassischen Sinn,
        sondern die Geschichte einer vollständigen Verschmelzung mit dem eigenen,
        ungewöhnlichen Bild – getragen von einer Direktheit, die sich niemals klein
        machen ließ. Das Faultier zeigt sein Gesicht der Welt, unverändert, und
        antwortet nur dann scharf, wenn die Welt es dafür verhöhnt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-michael-berryman", label:"Porträt: Michael Berryman (SX9w8) – Lebenswerk"},
        {route:"beruehmte-francois-damiens", label:"Porträt: François Damiens (SX9w8) – ebenfalls ungewöhnliches Äußeres zum Beruf gemacht"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

export function alainDelonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alain-delon-portrait.jpg" alt="Alain Delon" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alain Delon</p>
        <p class="krim-portrait-typ">SE1w2 · Selbsterhaltender Typ 1 mit Zweierflügel · 1935–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alain Delon</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-alain-delon">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um sein
        Lebenswerk als Schauspieler. Diese Seite geht näher auf einen Teil seiner
        Biografie ein, der dort nur knapp erwähnt wird: einen Schlaganfall 2019, eine spätere
        Leukämie-Diagnose und den öffentlich diskutierten Wunsch, notfalls selbstbestimmt über
        das eigene Lebensende zu entscheiden.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Delon</strong> ist dem <strong>selbsterhaltenden Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SE1 richtet ihren Perfektionismus auf die eigene Disziplin und
        Kontrolle über das eigene Bild; der Zweierflügel gibt ihr die Fähigkeit zu tiefer,
        aber streng auf einen sehr engen Kreis begrenzter Zuneigung. Genau diese Kombination –
        Würde und Kontrolle über die eigene Erscheinung, verbunden mit Rückzug in den engsten
        privaten Kreis statt öffentlicher Klage – bestimmte den Umgang mit Schlaganfall und
        Leukämie in seinen letzten Lebensjahren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Schlaganfall 2019:</strong>
        2019 erlitt Delon einen Schlaganfall, der ihn zu einem längeren Klinikaufenthalt
        zwang und seine körperliche Mobilität dauerhaft einschränkte.</p>
        <p class="vb-intro"><strong>b) Operation in der Schweiz:</strong>
        Er wurde in einer Schweizer Klinik behandelt und operiert – die genauen medizinischen
        Details hielt er, seiner lebenslangen Zurückhaltung entsprechend, weitgehend privat.</p>
        <p class="vb-intro"><strong>c) Zunehmender Rückzug aus öffentlichen Auftritten:</strong>
        Nach dem Schlaganfall reduzierte Delon seine öffentlichen Auftritte spürbar, ohne dies
        ausführlich zu kommentieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Spätere Leukämie-Diagnose:</strong>
        In den folgenden Jahren kam eine Leukämie-Erkrankung hinzu, die sein gesundheitlicher
        Zustand zusätzlich belastete.</p>
        <p class="vb-intro"><strong>b) Rückzug auf das eigene Anwesen in Douchy:</strong>
        Delon verbrachte seine letzten Lebensjahre weitgehend zurückgezogen auf seinem
        Landgut in Douchy, umgeben von seinen Hunden, statt in der Öffentlichkeit oder in
        einer Klinik.</p>
        <p class="vb-intro"><strong>c) Öffentlich diskutierter Wunsch nach Sterbehilfe:</strong>
        Sein Sohn Anthony Delon bestätigte 2023 öffentlich, dass sein Vater für den Fall
        unerträglichen Leidens über eine begleitete Sterbehilfe in der Schweiz nachgedacht
        hatte – eine Aussage, die international für Aufsehen sorgte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Selbstinszenierung als Kranker:</strong>
        Anders als manche Prominente in vergleichbarer Lage machte Delon seine Krankheit nie
        zu einem öffentlichen Thema oder einer Kampagne – sie blieb ein privater Umstand.</p>
        <p class="vb-intro"><strong>b) Familiäre Streitigkeiten um seine Pflege:</strong>
        In seinen letzten Lebensjahren kam es zu öffentlich bekannt gewordenen Spannungen
        zwischen seinen Kindern über die Frage, wer sich in welcher Form um seine Pflege
        kümmern sollte – ein seltener Bruch in der ansonsten kontrollierten öffentlichen
        Fassade.</p>
        <p class="vb-intro"><strong>c) Tod am 18. August 2024:</strong>
        Delon starb im Alter von 88 Jahren auf seinem Anwesen in Douchy, umgeben von seiner
        Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Trauer und Würdigung:</strong>
        Sein Tod löste weltweite Nachrufe aus, die ihn als eine der prägendsten Figuren des
        europäischen Kinos würdigten – die gesundheitliche Vorgeschichte blieb dabei
        weitgehend im Hintergrund.</p>
        <p class="vb-intro"><strong>b) Kein öffentliches Bild eines leidenden alten Mannes:</strong>
        Das öffentliche Bild Delons blieb bis zuletzt von Kontrolle und Würde geprägt, nicht
        von sichtbarem Leiden.</p>
        <p class="vb-intro"><strong>c) Nachträgliche Debatte über Sterbehilfe:</strong>
        Die Enthüllung seines Sterbehilfe-Wunsches durch seinen Sohn löste in Frankreich eine
        breitere öffentliche Debatte über selbstbestimmtes Sterben aus, die über seinen
        eigenen Fall hinausreichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle bis zum letzten möglichen Moment:</strong>
        Die SE1-typische Disziplin zeigte sich auch im Umgang mit der eigenen Sterblichkeit:
        Delon wollte selbst dann noch die Kontrolle über sein eigenes Ende behalten, wenn der
        Körper diese Kontrolle sonst verweigert hätte.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und der Rückzug in den engsten Kreis:</strong>
        Dieselbe Struktur, mit der Delon zeitlebens seine tiefste Zuneigung auf einen sehr
        kleinen Kreis – seine Hunde, wenige enge Freunde – konzentrierte, bestimmte auch, wie
        er seine letzten Lebensjahre verbrachte: nicht in der Öffentlichkeit, sondern auf dem
        eigenen Anwesen, umgeben von genau diesem engsten Kreis.</p>
        <p class="vb-intro"><strong>c) Zorn gegen Kontrollverlust statt gegen die Krankheit selbst:</strong>
        Der öffentlich gewordene Wunsch nach Sterbehilfe passt zur SE1w2-Logik: Nicht das
        Leiden selbst war die größte Bedrohung, sondern die Vorstellung, die Kontrolle über
        das eigene Bild und die eigene Würde zu verlieren.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann kontrollierter Präsenz, dem der eigene Körper die Kontrolle entzog:</strong>
        Delons gesamte Schauspielkunst beruhte auf körperlicher Beherrschung und einer fast
        undurchdringlichen äußeren Kontrolle. Ausgerechnet Schlaganfall und Leukämie griffen
        genau diese körperliche Selbstbeherrschung an, die sein ganzes öffentliches Bild
        trug.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Kerntyp, anderem Flügel:</strong>
        Ein eigentlicher SE1w2-Parallelfall liegt in diesem Kompass noch nicht vor. Eine
        Parallele im gleichen Kerntyp zeigt sich jedoch bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-phil-collins">Phil
        Collins (SE1w9)</a>: Auch bei ihm reagierte eine schwerwiegende körperliche
        Einschränkung nicht mit öffentlicher Klage, sondern mit disziplinierter, stiller
        Anpassung. Der Unterschied liegt im Flügel: Wo Collins’ Neunerflügel eine pragmatische,
        fast unauffällige Weiterarbeit ermöglichte, zeigte sich bei Delons Zweierflügel der
        Rückzug in den engsten privaten Kreis – dieselbe SE1-Kontrolle, aber mit
        unterschiedlicher Zielrichtung.</p>
        <p class="vb-intro"><strong>c) Wenn die Eins unter chronischem Stress zur Vier wird:</strong>
        In seinen letzten Lebensjahren zeigte Delon in seltenen, sehr zurückhaltenden
        öffentlichen Äußerungen einen ungewöhnlich introspektiven, fast melancholischen Ton
        über Einsamkeit, Alter und die eigene Endlichkeit – ein Ton, der von seiner sonst so
        kontrollierten, sachlichen Fassade abwich. Wer über Jahre in chronischer
        gesundheitlicher Belastung lebt, bewegt sich zunehmend entlang seiner Stresslinie in
        Richtung seines Stresspunkts – bei der Eins ist das die Vier. Diese
        gefühlsbetonte, nach innen gerichtete Rückschau in seinen letzten Lebensjahren erinnert
        an die melancholische Introspektion des Stresspunkts, nicht an die sachliche
        Pflichterfüllung des Kerntyps – bei unverändertem Kerntyp SE1w2.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Gehirn und Blut?</strong>
        Für einen selbsterhaltenden Einser, dessen gesamte öffentliche Wirkung auf
        körperlicher Beherrschung und kontrollierter Präsenz beruhte, liegt eine Deutung nahe:
        Ausgerechnet jene Systeme, die diese Kontrolle im Kern trugen – das Gehirn als Sitz
        der Beherrschung, das Blut als Grundlage der körperlichen Vitalität –, wurden zum Ort
        des Kontrollverlusts. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Schlaganfall oder Leukämie führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Delons Fall zeigen lässt, ist
        ein Muster im Umgang mit fortschreitender, lebensbedrohlicher Krankheit, das bei einer
        ausgeprägten selbsterhaltenden Eins mit Zweierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Delon kannte sein eigenes Muster vermutlich nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins mit Zweierflügel hält reflexhaft an Kontrolle über das eigene
        Bild und Rückzug in den engsten Kreis fest, statt Leiden öffentlich zu benennen, und
        lebte genau dieses Muster bis zu seinem Tod unverändert aus. Wer die eigene Neigung,
        Verletzlichkeit ausschließlich hinter Kontrolle zu verbergen, nicht als Muster
        erkennt, riskiert, dass die eigene Belastung selbst im engsten Kreis unsichtbar
        bleibt, auch wenn offener Austausch Entlastung bringen könnte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Zweierflügel erklärt bei <strong>Alain
        Delon</strong> vieles am Umgang mit Schlaganfall und Leukämie: ein Mann, dessen
        gesamtes öffentliches Bild auf körperlicher Kontrolle beruhte, verteidigte diese
        Kontrolle bis zuletzt – notfalls sogar über den eigenen Todeszeitpunkt selbst – und
        zog sich, statt öffentlich zu leiden, in den engsten Kreis derer zurück, die er
        wirklich an sich heranließ. Der Adler, der sein Revier bis zum letzten Tag selbst
        bestimmte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-alain-delon", label:"Porträt: Alain Delon (SE1w2) – Lebenswerk"},
        {route:"krankheitsportraets-arnold-schwarzenegger", label:"Krankheitsporträt: Arnold Schwarzenegger (SE1w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-phil-collins", label:"Krankheitsporträt: Phil Collins (SE1w9) – gleicher Kerntyp, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function eltonJohnKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elton-john-portrait.jpg" alt="Elton John" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elton John</p>
        <p class="krim-portrait-typ">SE7w6 · Selbsterhaltender Typ 7 mit Sechserflügel · geb. 1947</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elton John</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elton-john">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um sein
        musikalisches Lebenswerk und seine Bühnenpersönlichkeit. Diese Seite blickt genauer auf
        ein Kapitel, das dort nur kurz gestreift wird: zwei Jahrzehnte Kokain- und
        Alkoholsucht, begleitet von Bulimie, bis zu seinem Klinikaufenthalt 1990.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>John</strong> ist dem <strong>selbsterhaltenden Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SE7 sichert sich Sicherheit nicht durch Zurückhaltung, sondern durch
        aktiven Genuss und Selbstversorgung; der Sechserflügel gibt ihr die Fähigkeit, sich
        über eine feste, loyale Bindung zu stabilisieren. Genau diese Kombination – Flucht in
        grenzenlosen Konsum, bis eine einzige, tiefe Bindung den Ausschlag zur Umkehr gab –
        bestimmte den gesamten Verlauf seiner Suchterkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginnender Kokainkonsum im Zuge des Weltruhms:</strong>
        Mit dem raschen kommerziellen Erfolg der 1970er-Jahre begann John zunehmend Kokain zu
        konsumieren, parallel zu einem bereits bestehenden, exzessiven Alkoholkonsum.</p>
        <p class="vb-intro"><strong>b) Zusätzliche Bulimie-Erkrankung:</strong>
        Neben der Substanzabhängigkeit entwickelte John eine Bulimie-Erkrankung, die über
        Jahre unbehandelt blieb.</p>
        <p class="vb-intro"><strong>c) Zunehmende Eskalation über zwei Jahrzehnte:</strong>
        Die Kombination aus Kokain, Alkohol und Bulimie verschärfte sich über rund zwanzig
        Jahre, ohne dass John professionelle Hilfe in Anspruch nahm.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Wendepunkt am Sterbebett eines Freundes:</strong>
        Am 8. April 1990 saß John am Sterbebett des sechzehnjährigen Ryan White, eines an AIDS
        erkrankten Jugendlichen, mit dem er eine enge Freundschaft aufgebaut hatte.</p>
        <p class="vb-intro"><strong>b) Freiwillige Klinikeinweisung:</strong>
        Wenige Monate danach, am 29. Juli 1990, checkte sich John selbst in die Parkside
        Lutheran Hospital in Chicago ein – eine der wenigen Kliniken, die damals Bulimie
        zusammen mit Kokain- und Alkoholsucht behandeln konnten.</p>
        <p class="vb-intro"><strong>c) Dauerhafte Abstinenz seit der Behandlung:</strong>
        Seit diesem Klinikaufenthalt 1990 blieb John durchgehend nüchtern – eine bis heute
        andauernde, öffentlich dokumentierte Abstinenz von über drei Jahrzehnten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Erstes vollständig nüchtern aufgenommenes Album:</strong>
        Sein Album ›The One‹ (1992) nahm er zum ersten Mal vollständig nüchtern auf – ein
        Prozess, den er selbst rückblickend als ungewohnt schwierig beschrieb.</p>
        <p class="vb-intro"><strong>b) Gründung der Elton John AIDS Foundation:</strong>
        1992 gründete John die Elton John AIDS Foundation, direkt motiviert durch die
        Freundschaft mit Ryan White und die eigene Genesung.</p>
        <p class="vb-intro"><strong>c) Offene öffentliche Rückblicke auf die Suchtjahre:</strong>
        In späteren Interviews und seiner Autobiografie ›Me‹ (2019) sprach John wiederholt
        detailliert über die eigene Sucht, ohne sie zu beschönigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine der größten AIDS-Stiftungen der Welt:</strong>
        Die Elton John AIDS Foundation hat inzwischen über 600 Millionen Dollar für
        HIV-Programme in mehr als 55 Ländern gesammelt.</p>
        <p class="vb-intro"><strong>b) Öffentliche Vorbildwirkung für Suchtgenesung:</strong>
        Johns offener Umgang mit seiner eigenen, über drei Jahrzehnte andauernden Abstinenz
        trug dazu bei, Suchterkrankung bei Prominenten öffentlich enttabuisieren zu helfen.</p>
        <p class="vb-intro"><strong>c) Kreative Kontinuität trotz und nach der Sucht:</strong>
        Trotz der Suchtjahre blieb Johns musikalischer Output über Jahrzehnte bemerkenswert
        konstant, mit der ›Farewell Yellow Brick Road‹-Tournee (2018–2023) als kommerziell
        erfolgreichster Tournee der Musikgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Sucht als extremste Form der SE7-Selbstversorgung:</strong>
        Die SE7-typische Strategie, Sicherheit durch aktiven Genuss statt durch Verzicht zu
        gewinnen, kippte bei John über zwei Jahrzehnte in eine Sucht, die genau dasselbe
        Grundprinzip – immer mehr, nie genug – bis zur Selbstzerstörung weiterführte.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die rettende Bindung:</strong>
        Dieselbe Fähigkeit zur loyalen Bindung, die den Sechserflügel auszeichnet, wurde zum
        entscheidenden Wendepunkt: Nicht abstrakte Einsicht, sondern die konkrete, persönliche
        Bindung an einen sterbenden Freund gab den Ausschlag zur Umkehr.</p>
        <p class="vb-intro"><strong>c) Strukturierte Institution statt spontaner Genuss nach der Genesung:</strong>
        Nach der Genesung übersetzte John dieselbe Energie, die zuvor in grenzenlosen Konsum
        floss, in den Aufbau einer dauerhaften, verlässlichen Stiftungsstruktur – Fülle, die
        jetzt anderen zugutekommt, statt sich selbst zu verzehren.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Bühnenfigur grenzenloser Fülle, die an derselben Fülle fast zugrunde ging:</strong>
        Johns gesamte Bühnenidentität beruhte auf demonstrativem Überfluss – Federn, Kostüme,
        Brillen. Ausgerechnet dieses Grundprinzip der Fülle wurde in den Suchtjahren zur
        lebensbedrohlichen Falle.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-mariah-carey">Mariah
        Carey (SE7w8)</a>: Auch bei ihr bestimmte eine über Jahre verschwiegene psychische
        Erkrankung – bei Carey eine bipolare Störung – das Leben hinter der öffentlichen
        Fassade, bevor sie sich Jahre später öffentlich dazu bekannte. Bei beiden SE7 zeigt
        sich dasselbe Muster: Die nach außen demonstrierte Fülle und Lebensfreude verdeckt
        über Jahre eine ernste, private Krise, bis diese schließlich öffentlich anerkannt und
        bearbeitet wird.</p>
        <p class="vb-intro"><strong>c) Wenn die Sieben unter chronischem Stress zur Eins wird:</strong>
        Johns Beschreibung der ersten nüchternen Albumaufnahme – diszipliniert, kontrolliert,
        ungewohnt schwierig – und der strikten, bis heute nie unterbrochenen Abstinenz seit
        1990 zeigt eine für die sonst genussorientierte SE7 ungewöhnliche Rigidität. Wer über
        Jahre in chronischer Suchtbelastung lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Sieben ist das die Eins. Diese
        strikte, unnachgiebige Selbstdisziplin nach der Genesung erinnert an die
        Prinzipientreue des Stresspunkts, nicht an die spontane Genussfreude des Kerntyps –
        bei unverändertem Kerntyp SE7w6.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Substanzen und Nahrung?</strong>
        Für eine selbsterhaltende Sieben, deren gesamte Strategie auf aktivem Genuss und
        Selbstversorgung beruhte, liegt eine Deutung nahe: Ausgerechnet jene Mittel, die
        kurzfristig am unmittelbarsten Fülle und Sicherheit versprachen – Substanzen, Nahrung
        –, wurden zum Ort, an dem diese Strategie sich selbst zerstörte. Diese Deutung ist
        eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Johns Fall zeigen lässt, ist ein Muster im
        Umgang mit einer schweren Suchterkrankung, das bei einer ausgeprägten
        selbsterhaltenden Sieben mit Sechserflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        John kennt sein eigenes Muster vermutlich nicht als Enneagramm-Struktur – die
        selbsterhaltende Sieben mit Sechserflügel hält reflexhaft an der Strategie fest,
        Sicherheit durch Fülle statt durch Verzicht zu gewinnen, bis diese Strategie sich
        selbst ins Gegenteil verkehrt. Wer die eigene Neigung, jede innere Leere sofort mit
        äußerer Fülle zu füllen, nicht als Muster erkennt, riskiert, dass genau diese Strategie
        irgendwann von einer Ressource zu einer lebensbedrohlichen Gefahr wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 7 mit Sechserflügel erklärt bei <strong>Elton John</strong>
        vieles am Verlauf seiner Suchterkrankung: ein Mann, dessen gesamte Bühnenidentität auf
        grenzenloser Fülle beruhte, geriet über zwei Jahrzehnte in eine Sucht, die genau
        dasselbe Prinzip bis zur Selbstzerstörung weiterführte – bis eine einzige, tiefe
        Bindung zu einem sterbenden Freund den Ausschlag zur Umkehr gab. Der Gorilla, der sein
        Revier aus Überfluss schließlich für andere statt nur für sich selbst nutzte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elton-john", label:"Porträt: Elton John (SE7w6) – Lebenswerk"},
        {route:"krankheitsportraets-larry-king", label:"Krankheitsporträt: Larry King (SE7w6) – gleicher Subtyp"},
        {route:"krankheitsportraets-mariah-carey", label:"Krankheitsporträt: Mariah Carey (SE7w8) – gleicher Kerntyp, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

export function enricoCarusoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-enrico-caruso-portrait.jpg" alt="Enrico Caruso" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Enrico Caruso</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel · 1873–1921</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Enrico Caruso</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-enrico-caruso">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen Aufstieg vom Gießereiarbeiter zum
        Weltstar und seine legendäre Großzügigkeit. Diese Seite widmet sich einem ganz anderen
        Kapitel seines Lebens: einer eitrigen Rippenfellentzündung, die er über Wochen
        weitersingend ignorierte, bis sieben Operationen und ein letzter, fataler Rückschlag in
        Neapel ihn mit 48 Jahren das Leben kosteten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Caruso</strong> ist der <strong>selbsterhaltenden Drei mit Zweierflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Drei den <em>Kontratyp der Drei</em>:
        Sicherheit entsteht über demonstrierte Kompetenz und Verlässlichkeit, nicht über
        Selbstinszenierung. Der Zweierflügel gibt dieser Drei eine warme, beziehungsorientierte
        Note. Genau diese Kombination aus zwanghafter Verlässlichkeit und dem Bedürfnis, niemanden
        zu enttäuschen, prägte, wie Caruso mit seiner eigenen tödlichen Erkrankung umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Schlag mit der Bühnensäule, der zunächst folgenlos schien:</strong>
        Im Dezember 1920 traf ihn während einer Vorstellung von ›Samson und Dalila‹ eine
        herabfallende Bühnensäule im Rücken, über der linken Niere. Wenige Tage später entwickelte
        er einen hartnäckigen Husten und einen dumpfen Schmerz in der Seite.</p>
        <p class="vb-intro"><strong>b) Eine Fehldiagnose, die ihn bühnentauglich erklärte:</strong>
        Sein Arzt diagnostizierte eine harmlose Nervenentzündung (›intercostal neuralgia‹) und
        erklärte ihn trotz anhaltender Schmerzen, die bereits seine Stimmführung und Bewegungen
        beeinträchtigten, für bühnentauglich.</p>
        <p class="vb-intro"><strong>c) Ein Blutsturz auf offener Bühne am 11. Dezember 1920:</strong>
        Während einer Vorstellung von ›L'elisir d'amore‹ (›Der Liebestrank‹) an der Brooklyn Academy of Music erlitt
        Caruso einen Blutsturz, die Vorstellung wurde nach dem ersten Akt abgebrochen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Drei weitere Vorstellungen trotz sichtbarer Erkrankung:</strong>
        Statt sich nach dem Blutsturz zurückzuziehen, gab ein sichtlich kranker Caruso noch drei
        weitere Vorstellungen an der Met, die letzte am 24. Dezember 1920 als Eléazar in Halévys
        ›La Juive‹ (›Die Jüdin‹).</p>
        <p class="vb-intro"><strong>b) Die korrekte Diagnose erst nach unerträglichen Schmerzen:</strong>
        Am Weihnachtstag wurden die Schmerzen in seiner Seite so unerträglich, dass er schrie.
        Erst dann erhielt Caruso die korrekte Diagnose: eine eitrige Rippenfellentzündung mit
        Empyem (Eiteransammlung im Brustraum).</p>
        <p class="vb-intro"><strong>c) Sieben Operationen, eine davon mit Rippenentfernung:</strong>
        Es folgten sieben chirurgische Eingriffe, um Flüssigkeit aus Brustkorb und Lunge
        abzulassen – bei der schwersten Operation wurde ihm ein Teil einer Rippe entfernt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rückkehr nach Neapel zur Genesung:</strong>
        Nach der schwersten Operation kehrte Caruso zur Erholung in seine Heimatstadt Neapel
        zurück – ein Rückzug an den Ort, an dem seine Karriere begonnen hatte, nun um sein Leben
        zu retten statt um es aufzubauen.</p>
        <p class="vb-intro"><strong>b) Eine scheinbare Genesung, die täuschte:</strong>
        Laut seiner Frau Dorothy Caruso schien er sich zunächst zu erholen. Er ließ sich jedoch
        von einem örtlichen Arzt unter unhygienischen Bedingungen untersuchen, woraufhin sich sein
        Zustand dramatisch verschlechterte.</p>
        <p class="vb-intro"><strong>c) Morphium im Hotel Vesuvio:</strong>
        In seiner letzten Nacht im Hotel Vesuvio in Neapel verschlechterte sich sein Zustand
        alarmierend; man verabreichte ihm Morphium, damit er schlafen konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 2. August 1921 in Neapel:</strong>
        Nach einer Reihe erfolgloser Operationen starb Enrico Caruso im Alter von 48 Jahren in
        Neapel – die genaue Todesursache bleibt bis heute umstritten, mit Theorien von einem
        Empyem bis zu einer Bauchfellentzündung durch einen geplatzten subphrenischen Abszess.</p>
        <p class="vb-intro"><strong>b) Acht Monate zwischen erstem Warnsignal und Tod:</strong>
        Von der herabfallenden Bühnensäule im Dezember 1920 bis zu seinem Tod im August 1921
        vergingen acht Monate – eine Zeitspanne, in der er zunächst weiterarbeitete, dann sieben
        Operationen über sich ergehen ließ, ohne dass die Erkrankung je vollständig unter
        Kontrolle gebracht werden konnte.</p>
        <p class="vb-intro"><strong>c) Ein Karriereende, das nie als solches geplant war:</strong>
        Anders als bei vielen anderen Künstlern gab es keinen bewussten Abschied von der Bühne –
        die letzte Vorstellung am 24. Dezember 1920 war als eine von vielen weiteren gedacht, nicht
        als Schlusspunkt einer Karriere.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Zweierflügel, der Verpflichtungen wichtiger nahm als den eigenen Körper:</strong>
        Dieselbe warme, verlässliche Zuwendung zu anderen, die Caruso zu einem der großzügigsten
        Stars seiner Zeit machte, verlangte von ihm auch, sein Publikum nicht zu enttäuschen –
        selbst als sein Körper längst deutliche Warnsignale sendete.</p>
        <p class="vb-intro"><strong>b) Kompetenz, die keinen Raum für Schwäche ließ:</strong>
        Die selbsterhaltende Drei findet Sicherheit darin, zu funktionieren. Ein Arzt, der ihn für
        bühnentauglich erklärte, traf bei Caruso auf eine Persönlichkeit, die ohnehin nicht danach
        fragte, ob sie aufhören durfte, sondern nur, ob sie weitermachen konnte.</p>
        <p class="vb-intro"><strong>c) Ein letzter Rückzug ins Vertraute, der nicht mehr half:</strong>
        Dass Caruso zur Genesung ausgerechnet nach Neapel zurückkehrte, in die Stadt seiner
        Herkunft und seines Aufstiegs, passt zu einer Persönlichkeit, die Sicherheit im Vertrauten
        sucht – diesmal jedoch vergeblich, da eine unhygienische Behandlung vor Ort seinen Zustand
        weiter verschlechterte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Arbeit bis zum Zusammenbruch, kein bewusstes Aufhören:</strong>
        Carusos Weg von der herabfallenden Bühnensäule über den Blutsturz auf offener Bühne bis
        zu drei weiteren Vorstellungen trotz sichtbarer Krankheit zeigt dieselbe Grundstrategie:
        Verpflichtungen erfüllen, bis der eigene Körper keine Wahl mehr lässt.</p>
        <p class="vb-intro"><strong>b) Die Parallele zu Carusos eigenem Lebensmusterkompass-Fingerabdruck:</strong>
        Genau dieses Muster – Sicherheit durch Verlässlichkeit und Funktionieren statt durch
        Rücksicht auf sich selbst – findet sich bereits in seinem Porträt unter Berühmte
        Persönlichkeiten beschrieben: Quellen benennen ausdrücklich seine ›obsession with honoring
        his commitments and fear of disappointing his fans‹ &ndash; seine Besessenheit, Verpflichtungen
        einzuhalten, und seine Angst, seine Fans zu enttäuschen &ndash; als wahrscheinliche Todesursache.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine über Wochen ignorierte Rippenfellentzündung?</strong>
        Für eine selbsterhaltende Drei mit Zweierflügel, deren tiefstes Bedürfnis darin besteht,
        durch Kompetenz und Verlässlichkeit Sicherheit zu erzeugen, liegt eine Deutung nahe:
        Ausgerechnet eine Krankheit, die zunächst als harmlos fehldiagnostiziert wurde und sich
        durch bloßes Weitermachen verschleiern ließ, traf bei Caruso auf einen Mann, dessen
        gesamte Identität am reibungslosen Funktionieren hing. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu tödlichen
        Krankheitsverläufen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Carusos Fall zeigen lässt, ist ein Muster, das bei
        zwanghafter Verlässlichkeit in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Caruso kannte sein eigenes Enneagramm-Muster nicht und hatte deshalb auch keinen Grund,
        seiner Dreier-Verlässlichkeit je bewusst Grenzen zu setzen: Statt nach dem ersten Blutsturz
        die Bühne zu verlassen, hielt er an seinen Verpflichtungen fest, bis der Körper selbst keine
        Wahl mehr ließ. Nicht
        aus Schuld, sondern aus Unwissenheit über das eigene Muster – und genau das erklärt, warum
        eine zunächst behandelbare Erkrankung über Wochen eskalieren konnte, statt frühzeitig
        ernst genommen und konsequent auskuriert zu werden.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Enrico Carusos</strong> Krankheitsgeschichte lässt sich die selbsterhaltende
        Drei mit Zweierflügel in ihrer verletzlichsten Form ablesen: ein Mann, der einen Blutsturz
        auf offener Bühne mit drei weiteren Vorstellungen beantwortete, sieben Operationen über
        sich ergehen ließ und schließlich in der Stadt seiner Herkunft starb, ohne dass sein
        letzter Auftritt je als Abschied gedacht war. Der Waschbär, der bis zuletzt funktionierte
        – bis der eigene Körper die letzte Entscheidung traf.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-enrico-caruso", label:"Porträt: Enrico Caruso (SE3w2) – Lebenswerk"},
        {route:"krankheitsportraets-joseph-haydn", label:"Krankheitsporträt: Joseph Haydn (SE3w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-sadhguru", label:"Krankheitsporträt: Sadhguru (SE3w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-klara-von-assisi", label:"Krankheitsporträt: Klara von Assisi (SE3w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
      ])}
    </div>
  `);
}
