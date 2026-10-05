import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function adeleKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-adele-portrait.jpg" alt="Adele" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adele</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · geb. 1988</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Adele</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-adele">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nur beiläufig erwähnt wird: eine schwere postnatale Depression nach der
        Geburt ihres Sohnes 2012, begleitet von Panikattacken, die sie über Jahre nur
        gegenüber engsten Vertrauten offenlegte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Adele</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihren Schmerz still, kämpft ihn allein aus, bevor sie ihn
        zeigt; der Dreierflügel bringt die Disziplin, nach außen dennoch makellos zu
        funktionieren. Genau diese Kombination – innerer Zusammenbruch bei gleichzeitig
        makellos funktionierender öffentlicher Fassade – bestimmte den jahrelang verborgenen
        Verlauf ihrer postnatalen Depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn nach der Geburt ihres Sohnes 2012:</strong>
        Nach eigener Aussage begannen die Symptome kurz nach der Geburt ihres Sohnes Angelo
        im Oktober 2012 – ein Zeitpunkt, der öffentlich als Höhepunkt privaten Glücks
        wahrgenommen wurde.</p>
        <p class="vb-intro"><strong>b) Gefühl völliger Überforderung:</strong>
        Adele beschrieb später in Interviews, sich in den ersten Monaten der Mutterschaft
        als völlig überfordert und von Schuldgefühlen überwältigt erlebt zu haben, weil sie
        die erwartete sofortige mütterliche Verbundenheit nicht spürte.</p>
        <p class="vb-intro"><strong>c) Vollständige Geheimhaltung nach außen:</strong>
        Über Jahre sprach sie öffentlich nicht über diese Zeit – die Diagnose einer
        postnatalen Depression wurde erst 2021, fast ein Jahrzehnt später, in einem
        Vogue-Interview bekannt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Begleitende Panikattacken vor Auftritten:</strong>
        Adele sprach wiederholt über schwere Panikattacken vor Live-Auftritten, die sie
        zeitweise dazu brachten, Konzerte kurz vor Beginn fast abzusagen.</p>
        <p class="vb-intro"><strong>b) Kurzfristige Absage der Las-Vegas-Residency 2022:</strong>
        Einen Tag vor der geplanten Eröffnung ihrer Las-Vegas-Show sagte Adele unter Tränen
        ab, weil das Ergebnis – nach eigener Aussage wegen Lieferproblemen der
        Bühnentechnik – ihrem eigenen Anspruch nicht genügte.</p>
        <p class="vb-intro"><strong>c) Therapiebeginn als Wendepunkt:</strong>
        Nach eigener Schilderung begann sie erst durch eine Psychotherapie, die
        postnatale Depression rückblickend als eigenständige Erkrankung zu erkennen und zu
        benennen, statt sie als persönliches Versagen zu deuten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verarbeitung durch das Album „30":</strong>
        Ihr 2021 erschienenes Album „30" verarbeitet nach eigener Aussage explizit diese
        Zeit – Scheidung, Mutterschaft, Selbstfindung – und markiert den Punkt, an dem sie
        erstmals öffentlich über die Krise sprach.</p>
        <p class="vb-intro"><strong>b) Offenheit ohne Dramatisierung:</strong>
        Anders als eine öffentlich inszenierte Krankheitsgeschichte blieb Adeles Offenlegung
        sachlich und zurückhaltend – im Vogue-Interview beschrieb sie die Erfahrung präzise,
        ohne sie zum zentralen Vermarktungsthema des Albums zu machen.</p>
        <p class="vb-intro"><strong>c) Positive Rückmeldung von Betroffenen:</strong>
        Nach der Veröffentlichung erhielt Adele zahlreiche Rückmeldungen von Müttern, die
        sich durch ihre Offenheit erstmals ermutigt fühlten, über eigene postnatale
        Depressionen zu sprechen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale Aufmerksamkeit für ein Tabuthema:</strong>
        Adeles Offenheit trug international zur Enttabuisierung postnataler Depression bei –
        ein Thema, das gerade bei öffentlich wahrgenommenen „perfekten" Müttern selten offen
        verhandelt wird.</p>
        <p class="vb-intro"><strong>b) Verzögerte statt sofortige Offenlegung:</strong>
        Der fast zehnjährige Abstand zwischen Erkrankung und öffentlicher Offenlegung
        illustriert, wie lange die Krise ausschließlich privat verarbeitet wurde, bevor sie
        überhaupt zur öffentlichen Sprache kam.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte künstlerische Produktivität:</strong>
        Trotz der Krise blieb Adele künstlerisch aktiv und produktiv – die Krise wurde nicht
        zum Karriereeinschnitt, sondern letztlich zum Stoff eines ihrer erfolgreichsten
        Alben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Stiller Kampf statt öffentlicher Klage:</strong>
        Die SE4-typische Zähigkeit zeigte sich exemplarisch: Adele kämpfte die postnatale
        Depression über Jahre allein aus, statt sie öffentlich zu machen – die SE4-Logik,
        nicht zu klagen, sondern erst dann zu sprechen, wenn der Schmerz verarbeitet und in
        eine Form gebracht ist.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die makellose Fassade:</strong>
        Dieselbe Disziplin, die ihre Konzerte und Alben zu kommerziellen Welterfolgen macht,
        sorgte dafür, dass die Krise nach außen über Jahre unsichtbar blieb – erst als das
        Album „30" fertig war, wurde aus dem privaten Kampf eine öffentliche Botschaft.</p>
        <p class="vb-intro"><strong>c) Verarbeitung durch Form, nicht durch Bekenntnis:</strong>
        Adeles Weg aus der Krise führte nicht über ein spontanes öffentliches Geständnis,
        sondern über die Verwandlung des Erlebten in ein fertiges künstlerisches Werk – die
        typische SE4w3-Bewegung vom stillen Innenleben zur wirkungsvollen äußeren Form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme des Herzschmerzes, die den eigenen Herzschmerz am längsten verschwieg:</strong>
        Adeles gesamtes Werk beruht auf der Fähigkeit, privaten Schmerz in universelle Songs
        zu verwandeln – ausgerechnet die eigene postnatale Depression blieb fast ein
        Jahrzehnt lang von diesem Prinzip ausgenommen, bis sie reif genug war, in Form
        gebracht zu werden.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady Diana
        (SE4w3)</a>: Auch Diana verbarg ihre Erkrankung – bei ihr eine Bulimie – jahrelang
        hinter einer makellos funktionierenden öffentlichen Fassade, bevor sie sich Jahre
        später selbst dazu äußerte. Bei beiden SE4w3ern zeigt sich dasselbe Muster: der innere
        Kampf bleibt so lange verborgen, bis er in eine kontrollierte, selbstgewählte Form
        gebracht werden kann.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet nach der Geburt, dem Moment größter erwarteter Nähe?</strong>
        Für eine selbsterhaltende Vier mit Dreierflügel, deren gesamtes Werk um echte,
        unverstellte Gefühlstiefe kreist, liegt eine Deutung nahe: Ausgerechnet der Moment,
        in dem gesellschaftlich die spontanste, unmittelbarste Verbundenheit erwartet wird,
        wurde zum Ort, an dem sich diese Verbundenheit nicht einstellte – eine besonders
        schmerzhafte Konfrontation mit dem eigenen Schicksalsmuster der Vier. Diese Deutung
        ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu
        postnataler Depression führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Adeles Fall zeigen lässt,
        ist ein Muster im Umgang mit einer psychischen Krise, das bei einer ausgeprägten
        selbsterhaltenden Vier mit Dreierflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Adele kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die selbsterhaltende
        Vier mit Dreierflügel hält reflexhaft daran fest, den eigenen Schmerz erst dann zu
        zeigen, wenn er in eine makellose Form gebracht ist, statt sich frühzeitig Hilfe zu
        holen, und lebt genau dieses Muster bis heute weitgehend unverändert aus. Wer die
        eigene Neigung, seelische Krisen erst nach Jahren stiller Verarbeitung überhaupt zu
        benennen, nicht als Muster erkennt, riskiert, dass Hilfe erst kommt, wenn die Krise
        bereits sehr weit fortgeschritten ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 4 mit Dreierflügel erklärt bei <strong>Adele</strong> vieles
        am Verlauf ihrer postnatalen Depression: eine Frau, deren gesamtes Werk private
        Wunden in universelle Songs verwandelt, brauchte fast zehn Jahre, um dieselbe
        Verwandlung auch auf die eigene tiefste Krise anzuwenden – die Taube, die ihre
        Botschaft erst dann nach außen trug, als sie bereit war, sie auch für sich selbst
        anzunehmen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-adele", label:"Porträt: Adele (SE4w3)"},
        {route:"krankheitsportraets-lady-diana", label:"Krankheitsporträt: Lady Diana (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function ashtonKutcherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ashton-kutcher-portrait.jpg" alt="Ashton Kutcher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ashton Kutcher</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · geb. 1978</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ashton Kutcher</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ashton-kutcher">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine seltene Autoimmunerkrankung, an der
        Kutcher zeitweise Seh-, Hör- und Gehfähigkeit verlor, bevor er sie 2023 öffentlich
        machte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kutcher</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SO2 setzt ihre Reichweite gezielt für eine größere Sache ein; der
        Dreierflügel bringt den Antrieb, aus jeder Erfahrung – auch der eigenen Krankheit –
        einen sichtbaren, wirksamen Beitrag zu machen. Genau diese Kombination – zunächst
        vollständige Geheimhaltung, dann eine gezielte, öffentlich wirksame Offenlegung –
        bestimmte den Umgang mit der eigenen Autoimmunerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Plötzlich einsetzende Symptome:</strong>
        Nach eigener Schilderung begannen die Symptome abrupt, mit einem raschen Verlust an
        Gleichgewicht, Sehkraft und Hörvermögen, ohne erkennbare Vorwarnung.</p>
        <p class="vb-intro"><strong>b) Diagnose einer seltenen Form der Vaskulitis:</strong>
        Ärzte diagnostizierten bei Kutcher eine seltene autoimmune Gefäßentzündung, die
        mehrere Sinnesorgane und die Bewegungsfähigkeit gleichzeitig beeinträchtigte.</p>
        <p class="vb-intro"><strong>c) Monatelanger, intensiver Rehabilitationsprozess:</strong>
        Nach eigener Aussage musste er anschließend erneut gehen, sehen und hören lernen –
        ein Prozess, der sich über Monate erstreckte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwei Jahre vollständige Geheimhaltung:</strong>
        Kutcher hielt die Diagnose und die Erkrankung rund zwei Jahre lang vollständig
        privat, bevor er sich öffentlich dazu äußerte.</p>
        <p class="vb-intro"><strong>b) Öffentliche Offenlegung 2023 in einem Podcast-Interview:</strong>
        Erst in einem ausführlichen Interview machte Kutcher die Erkrankung und ihren Verlauf
        detailliert öffentlich – ein bewusst gewählter Rahmen statt einer spontanen
        Enthüllung.</p>
        <p class="vb-intro"><strong>c) Sichtbare, aber nicht vollständig zurückgebildete Folgen:</strong>
        Kutcher beschrieb, dass einige Beeinträchtigungen, insbesondere im Gleichgewichtssinn,
        auch nach der akuten Krankheitsphase bestehen blieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Betonung von Dankbarkeit statt Klage:</strong>
        In seiner öffentlichen Schilderung stellte Kutcher wiederholt die eigene Dankbarkeit
        für das Überleben und die Genesung in den Vordergrund, statt die Erkrankung als
        Opfergeschichte zu erzählen.</p>
        <p class="vb-intro"><strong>b) Positive mediale Resonanz:</strong>
        Die Offenlegung löste breite mediale Aufmerksamkeit und überwiegend positive
        Reaktionen aus, die Kutchers Offenheit und seinen Umgang mit der Krankheit
        würdigten.</p>
        <p class="vb-intro"><strong>c) Fortsetzung öffentlicher Aktivität nach der Offenlegung:</strong>
        Nach dem Interview setzte Kutcher seine schauspielerische und unternehmerische
        Tätigkeit unverändert fort, ohne dass die Krankheit zu einem dauerhaften öffentlichen
        Thema wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für eine seltene Erkrankung:</strong>
        Kutchers Offenheit trug international dazu bei, die Aufmerksamkeit für seltene
        Autoimmunerkrankungen zu erhöhen, über die zuvor kaum öffentlich gesprochen wurde.</p>
        <p class="vb-intro"><strong>b) Verzögerte statt sofortige Offenlegung:</strong>
        Der zweijährige Abstand zwischen Erkrankung und öffentlicher Offenlegung zeigt, wie
        lange die Krise zunächst ausschließlich privat verarbeitet wurde.</p>
        <p class="vb-intro"><strong>c) Keine Verklärung der eigenen Genesung:</strong>
        Kutcher betonte in seiner Schilderung explizit, dass nicht alle Beeinträchtigungen
        vollständig verschwunden seien – eine differenzierte Darstellung statt einer
        glatten Heilungsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Privater Kampf, bevor er öffentlich wird:</strong>
        Die SO2-typische Ausrichtung auf öffentliche Wirksamkeit setzte erst ein, nachdem die
        eigentliche Krise privat durchlebt und überstanden war – die Krankheit selbst blieb
        zunächst außerhalb der öffentlichen Rolle.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die kontrollierte, wirksame Offenlegung:</strong>
        Dieselbe Fähigkeit, aus Sichtbarkeit konkrete Wirkung zu erzeugen, die Kutchers
        Engagement gegen Kinderhandel prägt, zeigte sich auch hier: Die Offenlegung erfolgte
        in einem sorgfältig gewählten Format, das maximale, aber kontrollierte öffentliche
        Wirkung erzielte.</p>
        <p class="vb-intro"><strong>c) Dankbarkeit als öffentliche Botschaft:</strong>
        Dass Kutcher die Erkrankung als Anlass für Dankbarkeit statt für Klage darstellte,
        passt zur SO2-Neigung, auch die eigene Verwundbarkeit in eine positive, für andere
        nützliche Botschaft zu verwandeln.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann öffentlicher Reichweite, der zwei Jahre lang unsichtbar kämpfte:</strong>
        Kutchers gesamtes öffentliches Wirken beruht auf der gezielten Nutzung von
        Sichtbarkeit für einen größeren Zweck – ausgerechnet die eigene existenzielle Krise
        verbrachte er zunächst vollständig außerhalb jeder Öffentlichkeit, bevor er sie zu
        einem bewusst gewählten Zeitpunkt in eine Botschaft verwandelte.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Sehen, Hören und Gehen, die Grundlagen der Wahrnehmung selbst?</strong>
        Für einen sozialen Typ 2 mit Dreierflügel, dessen gesamtes Wirken auf der Fähigkeit
        beruht, gesellschaftliche Missstände wahrzunehmen und sichtbar zu machen, liegt eine
        Deutung nahe: Ausgerechnet jene Sinne, die überhaupt erst Wahrnehmung und öffentliches
        Handeln ermöglichen, versagten ihm zeitweise vollständig. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu Autoimmun­erkrankungen
        führt – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom
        Subtyp.</strong> Was sich an Kutchers Fall zeigen lässt, ist ein Muster im Umgang mit
        einer überwundenen existenziellen Krise, das bei einem ausgeprägten sozialen Typ 2
        mit Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kutcher kennt sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 2
        mit Dreierflügel hält reflexhaft an der Kontrolle über den Zeitpunkt und die Form der
        eigenen Sichtbarkeit fest, auch in existenziellen Krisen, und lebt genau dieses Muster
        bis heute weitgehend unverändert aus. Wer die eigene Neigung, private Krisen erst
        nach vollständiger Verarbeitung öffentlich zu machen, nicht als Muster erkennt,
        riskiert, dass Unterstützung von außen erst kommt, wenn die schwierigste Phase bereits
        vorüber ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Dreierflügel erklärt bei <strong>Ashton Kutcher</strong> vieles
        am Umgang mit der eigenen Autoimmunerkrankung: ein Mann, dessen gesamtes öffentliches
        Wirken auf sichtbarer Wirksamkeit beruht, kämpfte die eigene existenzielle Krise erst
        vollständig privat aus, bevor er sie in eine Botschaft der Dankbarkeit verwandelte –
        der Golden Retriever, der seine tiefste Verwundbarkeit erst dann zeigte, als er sie
        selbst in etwas Nützliches für andere umwandeln konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ashton-kutcher", label:"Porträt: Ashton Kutcher (SO2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function charlesDarwinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-charles-darwin-portrait.jpg" alt="Charles Darwin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Darwin</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · 1809–1882</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Darwin</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-charles-darwin">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur
        im Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort kaum mehr als
        gestreift wird: Ab seiner Rückkehr von der Weltreise auf der <em>HMS Beagle</em> 1836
        litt Darwin fast vierzig Jahre lang unter chronischer Übelkeit, Erbrechen, Herzklopfen,
        Kopfschmerzen und quälender Erschöpfung – Symptome, die zu Lebzeiten nie eindeutig
        diagnostiziert wurden. Bis heute diskutieren Historiker und Mediziner mögliche
        Ursachen, von der Chagas-Krankheit (durch einen Insektenstich in Südamerika) über eine
        seltene Stoffwechselerkrankung bis zu einer überwiegend psychosomatischen Genese.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Darwin</strong> ist der <strong>selbsterhaltenden Fünf mit Sechserflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Marie Curie</a>
        in diesem Kompass. Naranjo nannte die selbsterhaltende Fünf die <em>Burg</em>:
        Sicherheit entsteht durch Rückzug in eine kontrollierte, abgeschottete Umgebung, die
        vor Überwältigung und Energieverlust schützt – bei Darwin Down House, in dem er die
        letzten vierzig Jahre seines Lebens fast ohne Reisen und gesellschaftliche
        Verpflichtungen verbrachte. Der Sechserflügel bringt die wache Vorsicht hinzu, jede
        Konsequenz vorab zu bedenken, bevor man sich exponiert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Geduldig, detailversessen, unbestechlich:</strong>
        Darwins Blick sammelte über Jahrzehnte Beobachtungen, bis kein Einwand mehr Platz
        fand – der Fünferblick, der lieber zu viel als zu wenig prüft, bevor er urteilt.</p>
        <p class="vb-intro"><strong>b) Nach außen wachsam, nach innen unklar:</strong>
        Jede mögliche Reaktion auf seine Theorie hatte Darwin durchdacht – doch die eigenen,
        über Jahrzehnte anhaltenden Krankheitssymptome blieben für ihn selbst und seine Ärzte
        rätselhaft, nie eindeutig eingeordnet.</p>
        <p class="vb-intro"><strong>c) Zurückgezogen, sobald es um die eigene Person geht:</strong>
        Öffentliche Debatten, Vorträge, Auftritte überließ Darwin lieber Verbündeten wie
        Thomas Huxley – &bdquo;Darwins Bulldogge&ldquo; – während er selbst in Down House
        blieb. Typisch selbsterhaltende Fünf: Präsenz kostet Energie, die anderswo gebraucht
        wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein Leben nach striktem Takt:</strong>
        Feste Arbeitszeiten, ein täglicher Rundweg durch den Garten, der <em>Sandwalk</em>,
        kaum spontane Unterbrechungen – die Burg der SE5 lebt von Vorhersehbarkeit als
        Energiequelle.</p>
        <p class="vb-intro"><strong>b) Wissen als einzige verlässliche Sicherheit:</strong>
        Acht Jahre widmete Darwin allein der monografischen Untersuchung von
        Rankenfußkrebsen, bevor er sich an seine große Theorie wagte – Sicherheit durch
        vollständige Beherrschung des Details, nicht durch äußere Bestätigung.</p>
        <p class="vb-intro"><strong>c) Down House als Refugium:</strong>
        Vierzig Jahre ohne nennenswerte Reisen, nach der einen großen Exposition auf der
        Beagle – ein selbst gewählter Rückzugsort, der die Außenwelt auf ein kontrollierbares
        Maß reduzierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zwanzig Jahre Absicherung, bevor er sprach:</strong>
        Die Kerngedanken zur natürlichen Selektion entwickelte Darwin bereits um 1838 –
        veröffentlicht wurden sie erst 1859. Der Sechserflügel füllte die Zwischenzeit mit
        Beweissammlung und dem Durchdenken jeder möglichen Konsequenz.</p>
        <p class="vb-intro"><strong>b) Rücksicht bis zur Selbstverleugnung:</strong>
        Darwin fürchtete, seine tief gläubige Frau Emma mit seinen Gedanken zu verletzen –
        eine Vorsicht, die beinahe dazu geführt hätte, dass Alfred Russel Wallace ihm mit
        einer nahezu identischen Theorie zuvorkam.</p>
        <p class="vb-intro"><strong>c) Überzeugung durch Masse statt Lautstärke:</strong>
        Nicht ein einzelner Geistesblitz, sondern ein kaum zu widerlegender Berg an
        Beobachtungen war Darwins eigentliches Argument – die SE5w6 in ihrer produktivsten
        Form.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Unangreifbar durch Vollständigkeit:</strong>
        Darwins Werk überzeugte, weil es kaum eine Lücke offen ließ – eine Wirkung, die aus
        jahrzehntelanger Vorbereitung erwuchs, nicht aus einem einzelnen überzeugenden
        Moment.</p>
        <p class="vb-intro"><strong>b) Zurückhaltend, aber unerschütterlich in der Sache:</strong>
        Darwin mied die große Bühne, ließ sich in der Substanz seiner Theorie aber von
        niemandem beirren – eine Kombination, die selbsterhaltende Fünfen oft leicht
        unterschätzbar erscheinen lässt.</p>
        <p class="vb-intro"><strong>c) Vertrauen durch Beweisbarkeit:</strong>
        Anhänger folgten ihm nicht aus Charisma, sondern weil die schiere Menge an Belegen
        kaum zu widerlegen war – der Fünferblick verlangt sich selbst diese Beweisbarkeit ab,
        bevor er sie von anderen erwartet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Sparsamer Umgang mit begrenzter Kraft:</strong>
        Darwins gesamter Tagesablauf war darauf ausgerichtet, seine begrenzte Energie auf das
        Wesentliche zu konzentrieren – Reisen, Geselligkeit und öffentliche Auftritte wurden
        konsequent gestrichen.</p>
        <p class="vb-intro"><strong>b) Der Körper als Vollstrecker der Burg:</strong>
        Ob organisch oder psychosomatisch – seine chronischen Beschwerden erzwangen genau
        jenen Rückzug, den die Burg ohnehin verlangte, und lieferten damit eine zusätzliche,
        körperliche Rechtfertigung für den Rückzug von der Welt.</p>
        <p class="vb-intro"><strong>c) Vorsicht, die in Lähmung kippen kann:</strong>
        Der Sechserflügel verwandelte Vorsicht streckenweise in beinahe lähmendes Zögern –
        zwanzig Jahre zwischen Erkenntnis und Veröffentlichung, in denen Darwin fast die
        Urheberschaft an seiner eigenen Lebensleistung verloren hätte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vierzig Jahre ungeklärter Beschwerden:</strong>
        Übelkeit, Erbrechen nach dem Essen, Herzklopfen, Kopfschmerzen, Hautprobleme,
        quälende Erschöpfung – ab 1836 begleiteten Darwin diese Symptome bis kurz vor seinem
        Tod 1882. Zahlreiche Ärzte wurden konsultiert, zahlreiche Kuren versucht, ohne dass je
        eine eindeutige Diagnose gestellt wurde.</p>
        <p class="vb-intro"><strong>b) Die Wasserkur als Ritual der Kontrolle:</strong>
        Darwin unterzog sich wiederholt aufwendigen Hydrotherapie-Kuren in Spezialkliniken –
        strikt getaktete Anwendungen von kaltem Wasser, Wickeln und Bädern nach festem Schema.
        Das ist der Fünferflügel in der Krankheit selbst: Selbst die Behandlung musste
        nachvollziehbar strukturiert und kontrollierbar sein.</p>
        <p class="vb-intro"><strong>c) Rückzug als doppelte Notwendigkeit:</strong>
        Die Krankheit lieferte Darwin einen zusätzlichen, unangreifbaren Grund für den
        Rückzug, den die Burg der SE5 ohnehin verlangte – ob als Ursache oder Folge des
        zurückgezogenen Lebens lässt sich im Nachhinein kaum trennen. Beides verstärkte sich
        gegenseitig über Jahrzehnte.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Marie Curie</a>
        (SE5w6) ordnete den eigenen Körper konsequent der Arbeit unter, bis eine chronische
        Erkrankung – bei ihr eine radiologisch bedingte, bei Darwin eine nie eindeutig
        geklärte – zum festen Bestandteil des Lebens wurde. Bei beiden zeigt sich dasselbe
        SE5-Muster: Der Körper wird zur Nebensache erklärt, solange die eigentliche Arbeit im
        Refugium weiterläuft.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet der Magen?</strong>
        Der Verdauungstrakt ist die eigentliche körperliche Grenze zur Außenwelt: Er
        entscheidet, was hineingelassen und was abgewiesen wird. Bei einer selbsterhaltenden
        Fünf, deren gesamte psychische Strategie im selektiven Filtern äußerer Reize besteht –
        nur so viel Welt hereinlassen, wie sich verarbeiten lässt –, liegt es nahe, genau
        diesen Filter körperlich versagen zu sehen: Darwins Verdauungssystem lehnte
        wiederkehrend ab, was ihm zugeführt wurde, so wie er selbst Reisen, Geselligkeit und
        öffentliche Auftritte konsequent ablehnte. Der Magen wurde zur Festungsmauer, die
        Darwin ohnehin um sich gezogen hatte – nur eben von innen. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu
        chronischen Verdauungsbeschwerden führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Darwins Fall zeigen lässt, ist
        ein Muster, das bei radikalem Rückzug von äußeren Reizen in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Darwin kannte sein eigenes Muster nicht – der radikale Rückzug der selbsterhaltenden Fünf von der Außenwelt, der ihm die nötige Ruhe für sein Lebenswerk verschaffte, dürfte zugleich sein jahrzehntelanges psychosomatisches Leiden mitgetragen haben. Wer den eigenen Rückzug nicht als Schutzmuster erkennt, sieht auch dessen körperlichen Preis nicht.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Fünf mit Sechserflügel zieht sich wie ein roter Faden auch durch
        <strong>Darwins</strong> eigene Erkrankung: ein Leben, radikal reduziert auf das
        Wesentliche, ein Körper, der genau jenen Rückzug erzwang, den die Burg ohnehin
        verlangte, und eine Vorsicht, die zwanzig Jahre lang selbst die eigene Urheberschaft
        gefährdete. Die Eule, die geduldig wartete, bis ihre Erkenntnis unangreifbar war,
        musste zugleich lernen, mit einem Körper zu leben, der sich selbst nie vollständig
        erklären ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-charles-darwin", label:"Porträt: Charles Darwin (SE5w6) – Lebenswerk"},
        {route:"beruehmte-marie-curie", label:"Porträt: Marie Curie (SE5w6)"},
        {route:"krankheitsportraets-marie-curie", label:"Krankheitsporträt: Marie Curie (SE5w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

export function davidHumeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-hume-portrait.jpg" alt="David Hume" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Hume</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1711–1776</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Hume</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-david-hume">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein philosophisches Lebenswerk und seine
        Gelassenheit im Zweifel. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine chronische Darmerkrankung, die ihn in seinen letzten Lebensjahren
        zunehmend schwächte – und die er mit derselben bemerkenswerten Ruhe verarbeitete, mit
        der er zeitlebens philosophiert hatte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hume</strong> ist der <strong>selbsterhaltenden Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Neun <em>Appetit</em>: die Sehnsucht
        nach innerem Frieden und Komfort. Der Achterflügel gibt dieser Gelassenheit eine
        unerschütterliche Standfestigkeit, die auch dem eigenen Tod ohne Ausweichen
        gegenübertreten kann. Genau diese Verbindung aus Ruhe und innerer Festigkeit prägte,
        wie Hume seine letzte, tödliche Krankheit verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Verdauungsbeschwerden ab 1772:</strong>
        Etwa vier Jahre vor seinem Tod bemerkte Hume erste anhaltende Verdauungsstörungen und
        Durchfälle, die er zunächst als vorübergehend abtat und mit gewohnter Gelassenheit
        hinnahm.</p>
        <p class="vb-intro"><strong>b) Stetiger Gewichtsverlust:</strong>
        In den folgenden Jahren magerte Hume, der zeitlebens für seine Vorliebe an gutem Essen
        und geselligen Diners bekannt war, zunehmend ab – ein auffälliger Kontrast zu seinem
        früheren, oft als rundlich beschriebenen Erscheinungsbild.</p>
        <p class="vb-intro"><strong>c) Eine Reise nach Bath zur Kur:</strong>
        1775 reiste Hume ins englische Bath, um die dortigen Heilquellen zur Linderung seiner
        Beschwerden zu nutzen – ein damals übliches, aber letztlich wirkungsloses Mittel gegen
        seine fortschreitende Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine bis heute nicht abschließend geklärte Diagnose:</strong>
        Medizinhistoriker vermuten heute überwiegend ein Darmkarzinom oder eine schwere
        chronisch-entzündliche Darmerkrankung als Ursache von Humes Symptomen – eine
        eindeutige, moderne Diagnose ist aus den historischen Quellen nicht mehr zu
        rekonstruieren.</p>
        <p class="vb-intro"><strong>b) Kontinuierliches Fortschreiten über gut vier Jahre:</strong>
        Anders als bei manch anderem Krankheitsporträt dieses Kompasses gab es bei Hume keine
        dramatischen Wendepunkte oder Krisen – seine Erkrankung entwickelte sich stetig und
        gleichmäßig fortschreitend, ohne größere Rückschläge oder Erholungsphasen.</p>
        <p class="vb-intro"><strong>c) Ungebrochene geistige Klarheit bis zuletzt:</strong>
        Trotz des körperlichen Verfalls blieb Humes intellektuelle Schärfe nach übereinstimmenden
        Zeugenberichten bis in seine letzten Lebenswochen vollständig erhalten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) "Mein eigenes Leben" – die letzte, nüchterne Bilanz:</strong>
        Im April 1776, wenige Monate vor seinem Tod, verfasste Hume die kurze Autobiografie "My
        Own Life" – eine erstaunlich sachliche, fast heitere Rückschau auf sein Leben, in der er
        seine nahende Sterblichkeit nüchtern und ohne jede Dramatik erwähnte.</p>
        <p class="vb-intro"><strong>b) Der Besuch James Boswells im Juli 1776:</strong>
        Der Schriftsteller James Boswell suchte den sterbenden Hume auf, um herauszufinden, ob
        der berühmte Skeptiker angesichts des Todes nicht doch Angst zeige oder zu religiösem
        Glauben zurückfinde.</p>
        <p class="vb-intro"><strong>c) Eine Gelassenheit, die Boswell zutiefst erschütterte:</strong>
        Hume erklärte ruhig, er sehe keinen Grund zur Sorge und rechne mit einer vollständigen
        Auflösung nach dem Tod – eine Haltung, die Boswell, selbst tief religiös, in seinen
        eigenen Tagebüchern als beunruhigend und zugleich bewundernswert beschrieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Gesellige Abende bis kurz vor dem Ende:</strong>
        Selbst in den letzten Wochen empfing Hume weiterhin Freunde zu Gesprächen und kleinen
        Diners in seinem Haus in Edinburgh – der gesellige Lebensstil, der ihn sein ganzes Leben
        ausgezeichnet hatte, wich der Krankheit nicht kampflos.</p>
        <p class="vb-intro"><strong>b) Regelung der eigenen Nachlassangelegenheiten:</strong>
        Hume ordnete seine Papiere und literarischen Angelegenheiten, darunter die postume
        Veröffentlichung der "Dialoge über natürliche Religion", mit derselben nüchternen
        Sorgfalt, mit der er sein gesamtes Werk organisiert hatte.</p>
        <p class="vb-intro"><strong>c) Tod am 25. August 1776 in Edinburgh:</strong>
        David Hume starb in seinem Haus in Edinburgh, im Kreis vertrauter Menschen, im Alter von
        65 Jahren – ohne die theatralische Inszenierung, die manche Zeitgenossen von einem so
        berühmten "gottlosen" Philosophen vielleicht erwartet hätten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der auch im Sterben nicht auswich:</strong>
        Dieselbe Bereitschaft, eine Position bis zum radikalen Ende zu denken, die Humes
        gesamtes philosophisches Werk prägte, zeigte sich auch im Angesicht des Todes – er
        verweigerte sich jeder tröstenden Illusion, ohne dabei bitter oder verzweifelt zu wirken.</p>
        <p class="vb-intro"><strong>b) Appetit, der sich nicht vom nahenden Ende trüben ließ:</strong>
        Die selbsterhaltende Neun sucht Frieden im Vertrauten – Hume fand diesen Frieden bis
        zuletzt in Gesprächen, Büchern und der Gesellschaft von Freunden, auch als sein Körper
        ihn zunehmend im Stich ließ.</p>
        <p class="vb-intro"><strong>c) Keine Flucht, kein Kampf – nur Gleichmut:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses findet sich bei Hume
        weder ein verzweifelter Kampf gegen die Krankheit noch ein resignierter Rückzug –
        stattdessen eine fast meditative Gelassenheit, die seine gesamte Philosophie bereits
        vorweggenommen hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur letzten philosophischen Prüfung wurde:</strong>
        Hume hatte sein ganzes Leben lang für einen skeptischen, illusionslosen Blick auf
        Kausalität, Selbst und Gottesbeweise argumentiert – seine eigene, tödliche Erkrankung
        wurde zur unausweichlichen Gelegenheit, diese Haltung nicht nur zu vertreten, sondern
        tatsächlich zu leben.</p>
        <p class="vb-intro"><strong>b) Kein Wendepunkt, keine Umkehr:</strong>
        Anders als so manche Sterbebett-Bekehrung, die die Nachwelt sich von einem berühmten
        Skeptiker erhofft hätte, blieb Hume bis zum letzten Atemzug seiner philosophischen
        Grundhaltung treu – die Krankheit veränderte seine Überzeugungen nicht, sie bestätigte
        sie.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Darm?</strong>
        Für eine selbsterhaltende Neun mit Achterflügel, deren tiefstes Bedürfnis darin besteht,
        inneren Frieden und Verdauung im wörtlichsten Sinn zu bewahren – die Fähigkeit, alles
        Aufgenommene ruhig zu verarbeiten, ohne sich aus der Fassung bringen zu lassen –, liegt
        eine Deutung nahe: Ausgerechnet das Organ, das für Aufnahme, Verarbeitung und
        Gleichgewicht steht, wurde bei Hume selbst zum Schauplatz eines langsamen, aber
        unaufhaltsamen Verfalls. Diese Deutung wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu
        Darmerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Humes Fall zeigen lässt, ist ein Muster, das bei
        tiefem, philosophisch begründetem Gleichmut in der Praxis immer wieder auffällt – eine
        von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hume kannte sein eigenes Muster nicht – und doch zeigte sich die selbsterhaltende Neun mit Achterflügel gerade in der eigenen Krankheit von ihrer reifsten Seite: statt Bedrohung auszuweichen oder sie zu dramatisieren, verarbeitete er den eigenen Verfall mit derselben gelassenen Klarheit, mit der er sein ganzes Leben Philosophie betrieben hatte. Nicht jedes unbewusst gelebte Muster verschärft das Leiden – manchmal trägt es auch durch, ohne dass der Betroffene je wusste, warum.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Humes</strong> Sterben lässt sich die selbsterhaltende Neun mit
        Achterflügel in ihrer reifsten Form ablesen: eine über vier Jahre fortschreitende,
        tödliche Erkrankung, die weder Kampf noch Verzweiflung, sondern eine seltene,
        philosophisch fundierte Gelassenheit hervorbrachte. Der Elefant, der die Welt so
        verließ, wie er sie durchquert hatte – ungerührt, neugierig, ohne die Bequemlichkeit
        einer Illusion zu brauchen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-david-hume", label:"Porträt: David Hume (SE9w8) – Lebenswerk"},
        {route:"krankheitsportraets-johannes-brahms", label:"Krankheitsporträt: Johannes Brahms (SE9w8) – dieselbe elefantenhafte Gelassenheit"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsporträt: Hans-Dietrich Genscher (SE9w8) – gleicher Subtyp"},
        {route:"beruehmte-james-levine", label:"Porträt: James Levine (SE9w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se9", label:"Subtyp-Profil SE9"},
      ])}
    </div>
  `);
}

export function fjodorDostojewskiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fjodor-dostojewski-portrait.jpg" alt="Fjodor Dostojewski – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fjodor Dostojewski</p>
        <p class="krim-portrait-typ">SE6w5 · Selbsterhaltender Typ 6 mit Fünferflügel · 1821–1881</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fjodor Dostojewski</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-fjodor-dostojewski">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort kurz erwähnt wird:
        Dostojewski litt sein gesamtes erwachsenes Leben lang an Epilepsie – einer Krankheit,
        die er nicht verschwieg, sondern direkt in mehrere seiner bedeutendsten literarischen
        Figuren einschrieb, allen voran Fürst Myschkin in <em>Der Idiot</em>.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Dostojewski</strong> ist der <strong>selbsterhaltenden Sechs mit
        Fünferflügel</strong> zugeordnet – demselben Subtyp wie
        <a href="javascript:void(0)" data-route="beruehmte-franz-schubert">Franz Schubert</a>
        in diesem Kompass. Naranjo nannte die selbsterhaltende Sechs die <em>Wärme</em>: Sie
        sucht Sicherheit nicht durch Konfrontation, sondern durch menschliche Nähe und
        Zugehörigkeit. Der Fünferflügel bringt die analytische Tiefe hinzu, jede Erfahrung –
        auch die eigene Krankheit – bis zum Ende zu durchdenken und literarisch zu
        durchdringen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Wachsam gegenüber jedem Vorzeichen:</strong>
        Dostojewski beschrieb die Sekunden vor einem epileptischen Anfall – die sogenannte
        Aura – mit einer Genauigkeit, die kaum ein anderer Betroffener der Literaturgeschichte
        erreicht hat. Der Fünferflügel analysiert selbst den eigenen Körper bis ins letzte
        Detail.</p>
        <p class="vb-intro"><strong>b) Zwischen Ekstase und Kontrollverlust:</strong>
        In dieser Aura empfand Dostojewski nach eigener Schilderung ein überwältigendes Gefühl
        von Harmonie und Gewissheit – gefolgt von völligem Kontrollverlust im Anfall selbst.
        Genau diese Spannung zwischen absoluter Sicherheit und ihrem plötzlichen Zusammenbruch
        ist der Kern der sechsertypischen Angst.</p>
        <p class="vb-intro"><strong>c) Öffentlich verarbeitet, nicht verschwiegen:</strong>
        Dostojewski verbarg seine Krankheit nicht, sondern übertrug sie direkt auf seine
        Romanfiguren – eine für seine Zeit ungewöhnliche Offenheit gegenüber einer damals stark
        stigmatisierten Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine lebenslange Begleiterin:</strong>
        Schon in jungen Jahren traten die ersten Anfälle auf – Jahrzehnte, bevor Dostojewski
        zum gefeierten Schriftsteller wurde. Die Krankheit war kein spätes Schicksal, sondern
        ein ständiger Begleiter seines gesamten Schaffens.</p>
        <p class="vb-intro"><strong>b) Verschärfung unter existenziellem Druck:</strong>
        Die Anfälle häuften sich in Phasen extremer Belastung – während der Zwangsarbeit in
        Sibirien, während der Spielsucht-Jahre, während finanzieller Not. Die SE6 reagiert auf
        Bedrohung mit erhöhter Wachsamkeit, die sich hier unmittelbar körperlich niederschlug.</p>
        <p class="vb-intro"><strong>c) Literarische Verarbeitung als Konstante:</strong>
        In nahezu jedem großen Roman Dostojewskis taucht die Krankheit in irgendeiner Form auf
        – nicht als bloßes Detail, sondern als zentrales Element der Figurenzeichnung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fürst Myschkin als literarisches Selbstporträt:</strong>
        In <em>Der Idiot</em> (1869) gab Dostojewski seinem Protagonisten dieselbe Krankheit,
        dieselben Auren, dasselbe Schwanken zwischen überirdischer Klarheit und
        gesellschaftlicher Verletzlichkeit – eine der direktesten Selbstverarbeitungen der
        Literaturgeschichte.</p>
        <p class="vb-intro"><strong>b) Präzise medizinische Beobachtung:</strong>
        Dostojewskis Beschreibungen der Aura gelten bis heute unter Neurologen als eines der
        genauesten literarischen Zeugnisse einer Temporallappenepilepsie – der Fünferflügel
        verwandelt eigenes Leiden in beinahe klinische Beobachtung.</p>
        <p class="vb-intro"><strong>c) Die Krankheit als wiederkehrendes Motiv, nicht als Stigma:</strong>
        Statt die Epilepsie zu verbergen, machte Dostojewski sie zu einem wiederkehrenden
        Erzählmotiv – bei Smerdjakow in <em>Die Brüder Karamasow</em> sogar zum zentralen
        Handlungselement.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das Krankheit zur Erkenntnisquelle macht:</strong>
        Dostojewskis Romane gelten bis heute als psychologisch schärfste Literatur des 19.
        Jahrhunderts – gerade weil sein eigenes Leiden unmittelbar in die Figurenpsychologie
        einfloss, statt äußerlich zu bleiben.</p>
        <p class="vb-intro"><strong>b) Anerkennung trotz Stigma:</strong>
        In einer Zeit, in der Epilepsie oft mit moralischer Schwäche oder gar Besessenheit
        gleichgesetzt wurde, machte Dostojewskis offener Umgang die Krankheit literaturfähig,
        ohne sie zu verklären.</p>
        <p class="vb-intro"><strong>c) Ein medizinisches wie literarisches Vermächtnis:</strong>
        Der Begriff der &bdquo;dostojewskischen Epilepsie&ldquo; wird bis heute in der
        neurologischen Fachliteratur verwendet – eine seltene Verschmelzung von literarischem
        und medizinischem Nachruhm.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Schaffenskraft trotz körperlicher Erschöpfung:</strong>
        Nach schweren Anfällen war Dostojewski oft tagelang geschwächt – und kehrte dennoch
        immer wieder mit derselben Intensität zur Arbeit zurück.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Leiden und Werk:</strong>
        Für Dostojewski gab es keine Trennung zwischen der eigenen Krankheitserfahrung und
        seiner Literatur – beides floss unmittelbar ineinander, ohne Distanz.</p>
        <p class="vb-intro"><strong>c) Die Aura als kurzzeitige, trügerische Sicherheit:</strong>
        Das kurze Gefühl absoluter Gewissheit vor dem Anfall lieferte Dostojewski
        möglicherweise selbst einen Maßstab für jene Momente völliger innerer Ruhe, nach denen
        die SE6 ihr ganzes Leben lang sucht – wenn auch um einen hohen körperlichen Preis
        erkauft.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, ein ganzes Leben lang:</strong>
        Schon in jungen Jahren litt Dostojewski an Epilepsie – eine Erkrankung, die ihn bis zu
        seinem Tod 1881 begleitete und deren Ursache zu Lebzeiten nicht behandelbar war.</p>
        <p class="vb-intro"><strong>b) Die berühmte Aura:</strong>
        Dostojewski beschrieb wiederholt, auch in Briefen, das Sekundenbruchteile andauernde
        Gefühl vor einem Anfall als den glücklichsten Moment seines Lebens – eine Empfindung
        vollkommener Harmonie, für die er, wie er selbst schrieb, Jahre seines Lebens gegeben
        hätte.</p>
        <p class="vb-intro"><strong>c) Sofortige literarische Verarbeitung statt Verdrängung:</strong>
        Anders als bei Krankheitsgeschichten, die über Jahre verborgen blieben, verarbeitete
        Dostojewski seine Epilepsie unmittelbar und wiederholt in seinem Werk – am
        eindrücklichsten in der Figur des Fürsten Myschkin, dessen Anfälle Wort für Wort
        Dostojewskis eigenen Erfahrungen nachempfunden sind.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-franz-schubert">Franz
        Schubert</a> (SE6w5) verarbeitete sein tödliches Leiden nicht im Verborgenen, sondern
        im vertrauten Kreis – bei Schubert die Freunde der Schubertiaden, denen er die
        <em>Winterreise</em> vorsang und nach ihrer Reaktion fragte; bei Dostojewski die Leser
        seiner Romane, denen er seine Krankheit über seine Figuren mitteilte. Bei beiden zeigt
        sich dasselbe SE6w5-Muster: Angst und Leiden werden nicht isoliert ertragen, sondern in
        Gemeinschaft – ob real oder literarisch – geteilt und dadurch erträglich gemacht.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet diese Krankheit?</strong>
        Die epileptische Aura, wie Dostojewski sie beschrieb, war das genaue Gegenteil dessen,
        was man von einer Krankheit erwarten würde: ein kurzer Moment vollkommener Gewissheit
        und Harmonie – unmittelbar gefolgt vom totalen Kontrollverlust des eigentlichen
        Anfalls. Für eine selbsterhaltende Sechs, deren gesamtes Leben um die Suche nach
        Sicherheit und die Angst vor deren plötzlichem Zusammenbruch kreist, liegt es nahe,
        genau in dieser Abfolge eine körperliche Zuspitzung des eigenen Lebensmusters zu lesen:
        der eine Moment absoluter Gewissheit, der sich im nächsten Augenblick unaufhaltsam in
        Kontrollverlust auflöst – die Grundangst der Sechs, buchstäblich im eigenen Nervensystem
        durchlebt, wieder und wieder, ein ganzes Leben lang. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sechs zwangsläufig zu Epilepsie
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Dostojewskis Fall zeigen lässt, ist ein Muster, das bei
        unmittelbarer literarischer Verarbeitung existenzieller Angst in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Dostojewski kannte sein eigenes Muster nicht – doch die selbsterhaltende Sechs, die Sicherheit im vertrauten Rahmen sucht, fand ausgerechnet in den immer gleichen epileptischen Anfällen einen paradoxen Ankerpunkt, den er direkt in seine Romanfiguren übertrug, statt die Krankheit als reine Bedrohung zu erleben. Auch das ist eine Form unbewusster Musterintegration: nicht Kampf, sondern Verarbeitung im eigenen Werk.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch in der eigenen Erkrankung bestätigt sich bei <strong>Dostojewski</strong> die
        selbsterhaltende Sechs mit Fünferflügel: eine lebenslange Erkrankung, die er nicht
        verbarg, sondern in seinen bedeutendsten Werken zur Sprache brachte, und eine Aura, die
        in Sekundenbruchteilen genau jene absolute Sicherheit versprach, nach der sein ganzes
        Leben suchte – nur um sie im selben Moment wieder zu verlieren. Das Kaninchen, das
        einst vor dem Erschießungskommando stand, trug seine tiefste Angst zeitlebens auch im
        eigenen Nervensystem – und verwandelte sie, wieder und wieder, in Literatur, die bis
        heute die Angst anderer Menschen verständlicher macht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-fjodor-dostojewski", label:"Porträt: Fjodor Dostojewski (SE6w5) – Lebenswerk"},
        {route:"beruehmte-franz-schubert", label:"Porträt: Franz Schubert (SE6w5)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se6", label:"Subtyp-Profil SE6"},
      ])}
    </div>
  `);
}

export function freddieMercuryKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-freddie-mercury-portrait.jpg" alt="Freddie Mercury" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Freddie Mercury</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · 1946–1991</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Freddie Mercury</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-freddie-mercury">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine fast
        fünf Jahre lang streng geheim gehaltene AIDS-Erkrankung, die er erst einen Tag vor
        seinem Tod 1991 selbst öffentlich bestätigte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Mercury</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 verwandelt persönlichen Schmerz und Sehnsucht in Intensität, die
        andere unmittelbar berührt – auf der Bühne kompromisslos sichtbar. Der Dreierflügel
        bringt die Fähigkeit, dieses Innenleben in beeindruckende öffentliche Wirkung zu
        gießen. Genau diese Spannung zwischen radikaler Selbstoffenbarung auf der Bühne und
        einer ebenso radikal kontrollierten Privatsphäre prägt auch Mercurys
        Krankheitsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Gerüchte, die er nie bestätigte:</strong>
        Ab Mitte der 1980er-Jahre kursierten in der Presse zunehmend Gerüchte über Mercurys
        Gesundheitszustand – er selbst äußerte sich dazu öffentlich nicht, weder bestätigend
        noch dementierend.</p>
        <p class="vb-intro"><strong>b) Eine Diagnose, die Privatsache blieb:</strong>
        Laut den Erinnerungen seines Partners Jim Hutton wurde Mercury im Frühjahr 1987 mit
        HIV diagnostiziert – eine Information, die er über Jahre auch engsten Vertrauten nur
        stückweise mitteilte.</p>
        <p class="vb-intro"><strong>c) Eine Bühnenpräsenz, die keinen Verfall zeigte:</strong>
        Bis zu seinem letzten öffentlichen Auftritt blieb die Diskrepanz zwischen der
        strahlenden Kunstfigur und dem zunehmend geschwächten Körper dahinter für die
        Öffentlichkeit kaum sichtbar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine klare Ansage an die Band:</strong>
        Laut Roger Taylor rief Mercury die Band zu einem Treffen zusammen und sagte
        sinngemäß, sie würden wohl ahnen, was mit ihm los sei – aber es solle "nicht bekannt
        werden" und "keinen Unterschied machen"; er wolle einfach weiterarbeiten, "bis ich
        verdammt noch mal umfalle" (›until I fucking well drop‹), und bat um ihre
        Unterstützung dabei.</p>
        <p class="vb-intro"><strong>b) Weiterarbeiten trotz sichtbarer Schwäche:</strong>
        Bei den Aufnahmen zu "The Show Must Go On" konnte Mercury laut Brian May kaum noch
        stehen, bestand aber darauf zu singen: "He could hardly stand, but he said 'I'll
        fucking do it, darling!'" (›Er konnte kaum stehen, sagte aber: Ich mach das
        verdammt noch mal, Liebling!‹)</p>
        <p class="vb-intro"><strong>c) Ein Album, dessen Veröffentlichung sich verzögerte:</strong>
        "Innuendo", aufgenommen zwischen März 1989 und November 1990, verschob sich wegen
        seines Gesundheitszustands vom ursprünglich geplanten Termin Ende 1990 auf Februar
        1991.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein letztes Video in bewusstem Schwarz-Weiß:</strong>
        Für das am 30. Mai 1991 gedrehte Video zu "These Are the Days of Our Lives" wurde
        bewusst Schwarz-Weiß gewählt, um seinen sichtbaren körperlichen Verfall zu kaschieren
        – später aufgetauchtes Farbmaterial zeigte, wie geschwächt er tatsächlich war.</p>
        <p class="vb-intro"><strong>b) "I still love you" – letzte Worte auf Kamera:</strong>
        Mercury bewegte sich im Video kaum noch und trug die emotionale Wirkung fast
        ausschließlich über Mimik; sein geflüstertes "I still love you" am Ende gilt als
        seine letzten Worte vor laufender Kamera.</p>
        <p class="vb-intro"><strong>c) Eine Presseerklärung einen Tag vor dem Tod:</strong>
        Am 23. November 1991 bestätigte Mercury in einer kurzen Erklärung selbst: "I wish to
        confirm that I have been tested HIV-positive and have AIDS" (›Ich möchte bestätigen,
        dass bei mir HIV positiv getestet wurde und dass ich AIDS habe‹) – nach Jahren
        strikter Geheimhaltung erklärte er, die Zeit sei nun gekommen, dass Freunde und Fans
        weltweit die Wahrheit erfahren sollten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 24. November 1991:</strong>
        Mercury starb einen Tag nach seiner Presseerklärung an einer Bronchopneumonie als
        Folge von AIDS, in seinem Haus in London.</p>
        <p class="vb-intro"><strong>b) Sein Partner Jim Hutton an seiner Seite:</strong>
        Jim Hutton, seit sechs Jahren Mercurys Lebenspartner, war in seinen letzten Stunden
        bei ihm. Wenige Tage zuvor soll Mercury zu ihm gesagt haben: "I never realized you
        were as strong as you are" (›Ich habe nie gemerkt, wie stark du eigentlich bist‹).</p>
        <p class="vb-intro"><strong>c) Ein Konzert, das zum globalen Ereignis wurde:</strong>
        Das Freddie Mercury Tribute Concert am 20. April 1992 in Wembley war innerhalb von
        vier Stunden ausverkauft und erreichte laut Schätzungen bis zu einer Milliarde
        Zuschauer weltweit – die Erlöse begründeten den bis heute aktiven Mercury Phoenix
        Trust.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Vollständige Kontrolle über die eigene Erzählung:</strong>
        Genau die SX4w3-Fähigkeit, das eigene Bild bewusst zu gestalten, ermöglichte es
        Mercury, die Deutungshoheit über seine Krankheit bis zuletzt selbst zu behalten –
        statt sie der Presse zu überlassen.</p>
        <p class="vb-intro"><strong>b) Intensität statt Rückzug:</strong>
        Anders als ein offener Zusammenbruch zeigte sich Mercurys Reaktion auf die Krankheit
        als gesteigerte kreative Intensität – er nutzte die verbleibende Zeit, um so viel
        Musik wie möglich fertigzustellen, statt sich zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Kein Verstummen bis zuletzt:</strong>
        Bis zum letzten möglichen Moment blieb die schöpferische Energie ungebrochen –
        selbst als der Körper längst nicht mehr mithalten konnte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Identität, die schon immer neu erschaffen wurde:</strong>
        Mercury, geboren als Farrokh Bulsara in Sansibar, hatte sich zeitlebens neu erfunden
        – auch gegenüber seinen Eltern verschwieg er sowohl seine Homosexualität als auch
        später seine Erkrankung vollständig.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre verborgene Krankheit:</strong>
        Von den ersten Gerüchten Mitte der 1980er über die Diagnose 1987 bis zur
        Presseerklärung 1991 zieht sich eine durchgehende, aber öffentlich fast vollständig
        kontrollierte Linie – nichts wurde ihm entrissen, alles wurde von ihm selbst
        freigegeben.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahr zwischen Verfall und Schaffenskraft:</strong>
        Gerade 1990/91 – körperlich sichtbar geschwächt – entstanden einige der
        eindringlichsten Aufnahmen seiner Karriere, darunter "The Show Must Go On" und "These
        Are the Days of Our Lives".</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Immunsystem?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren Identität sich über schonungslose
        Selbstoffenbarung auf der Bühne bei gleichzeitiger strikter Kontrolle der eigenen
        Privatsphäre definierte, liegt eine Deutung nahe: Ausgerechnet jenes System, das
        zwischen dem eigenen Selbst und der Außenwelt unterscheidet und schützt, wurde zum
        Ort des Zusammenbruchs – während die öffentliche Kontrolle über das eigene Bild bis
        zuletzt aufrechterhalten wurde. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu AIDS oder anderen
        Immunerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Mercurys Fall zeigen lässt, ist ein
        Muster, das bei dem Bedürfnis, radikale Selbstoffenbarung und strikte
        Privatsphäre-Kontrolle gleichzeitig zu leben, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Mercury kannte sein eigenes Muster nicht – die sexuelle Vier mit Dreierflügel verbirgt die eigene Verletzlichkeit hinter makelloser Bühnenleistung, und genau das ließ ihn seine Diagnose fast fünf Jahre lang geheim halten, während er bis zur völligen Erschöpfung weiterarbeitete. Wer das eigene Verbergungsmuster nicht kennt, hält die Fassade aufrecht, bis buchstäblich keine Kraft mehr bleibt, sie zu halten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Mercurys</strong> Geschichte offenbart sich die sexuelle Vier mit
        Dreierflügel noch einmal mit voller Wucht: eine Krankheit, über Jahre mit
        eiserner Selbstkontrolle verborgen, ein Körper, der zusehends versagte, während die
        Schaffenskraft bis zuletzt ungebrochen blieb, und ein letztes öffentliches Wort, das
        er sich selbst aussuchte, statt es sich nehmen zu lassen. Der Chihuahua, der bis zum
        letzten Atemzug seine eigene Erzählung bestimmte – und dessen Vermächtnis, der
        Mercury Phoenix Trust, bis heute weiterwirkt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-freddie-mercury", label:"Porträt: Freddie Mercury (SX4w3) – Lebenswerk"},
        {route:"krankheitsportraets-billie-eilish", label:"Krankheitsporträt: Billie Eilish (SX4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function fritzPerlsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fritz-perls-portrait.jpg" alt="Fritz Perls" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Fritz Perls</p>
        <p class="krim-portrait-typ">SO8w7 · Sozialer Typ 8 mit Siebenerflügel · 1893–1970</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fritz Perls</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-fritz-perls">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Rolle als Mitbegründer der
        Gestalttherapie. Diese Seite vertieft ein Kapitel, das dort kurz berührt wird: ein
        über Jahre bestehendes Herzleiden, jahrzehntelanges Kettenrauchen und schließlich
        eine Bauchspeicheldrüsenkrebs-Operation, an deren Folgen er 1970 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Perls</strong> ist dem <strong>sozialen Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Die SO8 setzt ihre Kraft offen für den Aufbau und Schutz einer
        Gemeinschaft ein; der Siebenerflügel bringt einen rastlosen Hunger nach voller,
        ungebremster Lebenserfahrung hinzu. Genau diese Kombination – Kraft, die keine
        Schwäche zulässt, gepaart mit dem Siebener-Drang, ständig in Bewegung zu bleiben –
        bestimmte auch, wie Perls mit seinem eigenen, jahrelangen Herzleiden umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Kettenraucher seit dem Krieg:</strong>
        Perls hatte bereits als Achtjähriger seine erste Zigarette geraucht und wurde nach
        eigenen und fremden Schilderungen infolge seiner Erfahrungen im Ersten Weltkrieg
        zum lebenslangen Kettenraucher.</p>
        <p class="vb-intro"><strong>b) Eine Herzschädigung durch eine frühere Operation:</strong>
        Eine Verletzung im Halsbereich im Zusammenhang mit einer Narkose führte über die
        Jahre zu einer bleibenden Herzschwäche, die Perls fortan begleitete.</p>
        <p class="vb-intro"><strong>c) Zunächst kompensierte körperliche Leistungsfähigkeit:</strong>
        Trotz der Herzschädigung blieb Perls über weite Strecken körperlich aktiv – er
        konnte weiterhin gehen, reisen und an anspruchsvollen Workshops teilnehmen, ohne
        dass die Erkrankung sein Leben sichtbar einschränkte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unvermindertes Reisen zwischen Kontinenten:</strong>
        Auch mit dem bekannten Herzleiden im Hintergrund setzte Perls sein rastloses Leben
        zwischen Europa, Südafrika und den USA sowie später zwischen New York, Esalen und
        Kanada praktisch unverändert fort.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Thematisierung der eigenen Krankheit:</strong>
        In seinen Workshops und öffentlichen Auftritten spielte die eigene gesundheitliche
        Verletzlichkeit keine erkennbare Rolle – Perls blieb bis zuletzt die konfrontative,
        körperlich präsente Figur, die er immer gewesen war.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes Rauchen trotz Herzleiden:</strong>
        Berichten zufolge gab Perls das Rauchen trotz seiner bekannten Herzproblematik nie
        vollständig auf – ein Muster, das seine körperliche Verfassung zusätzlich belastete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Gründung eines neuen Projekts kurz vor dem Tod:</strong>
        Noch 1969/1970 gründete Perls ein Gestalt-Kibbutz-Projekt in Kanada – ein neues
        Gemeinschaftsprojekt, begonnen, während seine körperliche Verfassung bereits
        angeschlagen war.</p>
        <p class="vb-intro"><strong>b) Diagnose einer Bauchspeicheldrüsenkrebserkrankung:</strong>
        In seinen letzten Lebensmonaten kam zur bestehenden Herzschwäche eine
        Bauchspeicheldrüsenkrebsdiagnose hinzu, die eine Operation erforderlich machte.</p>
        <p class="vb-intro"><strong>c) Operation im Louis A. Weiss Memorial Hospital in Chicago:</strong>
        Perls unterzog sich der Krebsoperation in Chicago; sein Herz hielt der Belastung
        durch den Eingriff nicht stand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 14. März 1970 in Chicago:</strong>
        Perls starb kurz nach der Operation an akutem Herzversagen – die jahrelang
        kompensierte Herzschwäche gab dem zusätzlichen operativen Stress schließlich nach.</p>
        <p class="vb-intro"><strong>b) Eine der Legende nach typisch schroffe letzte Reaktion:</strong>
        Berichten zufolge blieb Perls auch im Sterben seiner konfrontativen, unmittelbaren
        Art treu und reagierte selbst in den letzten Momenten nicht ausweichend, sondern
        direkt.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Zäsur im öffentlichen Wirken zuvor:</strong>
        Bis in die letzten Monate vor der Operation setzte Perls seine Reise- und
        Vortragstätigkeit unvermindert fort – es gibt keine Hinweise auf einen bewussten
        Rückzug aus gesundheitlichen Gründen vor der akuten Krebsdiagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kraft, die keine Schwäche zeigen darf:</strong>
        Dieselbe SO8-Überzeugung, dass Stärke offen gezeigt werden muss, statt sich zu
        verbergen, bestimmte auch Perls' Umgang mit seinem eigenen Herzleiden – keine
        öffentliche Verwundbarkeit, sondern unveränderte körperliche Präsenz bis kurz vor
        dem Tod.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Weigerung, das Tempo zu drosseln:</strong>
        Der rastlose Hunger nach neuer Erfahrung, der Perls' gesamtes Leben trug, ließ ihn
        selbst mit bekannter Herzschwäche keine ruhigere Gangart einschlagen – noch kurz
        vor seinem Tod gründete er ein neues Gemeinschaftsprojekt, statt kürzerzutreten.</p>
        <p class="vb-intro"><strong>c) Kettenrauchen als körperlicher Ausdruck der Siebener-Unruhe:</strong>
        Das fortgesetzte Rauchen trotz bekannter Herzproblematik lässt sich als Ausdruck
        derselben ungebremsten Siebener-Energie lesen, die auch seinen therapeutischen Stil
        prägte – Genuss und Intensität, ohne Rücksicht auf spätere Konsequenzen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Herz, das nie öffentlich als schwach galt:</strong>
        Perls' gesamtes therapeutisches Auftreten beruhte auf unmittelbarer, körperlicher
        Präsenz und der Weigerung, Ausflüchte oder Schwäche zu akzeptieren – ausgerechnet
        sein eigenes Herz, das genau diese Präsenz trug, wurde über Jahre stillschweigend
        zur Belastung, ohne dass er dies je zum Thema machte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-john-gotti">John Gotti</a>
        (ebenfalls SO8w7) ließ sich 1998 in Isolationshaft mit Kehlkopfkrebs diagnostizieren,
        ohne je ein öffentliches Eingeständnis von Schwäche zuzulassen; Perls reagierte auf
        sein eigenes, weit länger bestehendes Herzleiden mit derselben Grundhaltung – keine
        sichtbare Verletzlichkeit, keine Reduzierung des eigenen Tempos. Beide Fälle zeigen
        dasselbe SO8w7-Muster: Die Acht mit Siebenerflügel lässt sich die eigene Stärke
        durch eine fortschreitende Erkrankung nicht nehmen, bis der Körper selbst die
        Grenze setzt. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-john-gotti">Krankheitsporträt zu John Gotti</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz?</strong>
        Für einen sozialen Achter mit Siebenerflügel, dessen gesamte Wirkung auf offener,
        ungefilterter Kraft und Präsenz beruhte, liegt eine Deutung nahe: Ausgerechnet jenes
        Organ, das im übertragenen Sinn für Kraft, Mut und Lebendigkeit steht, wurde zum
        Ort der stillen, über Jahre verschwiegenen Schwäche. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu einem Herzleiden
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Perls' Fall zeigen lässt, ist ein Muster im Umgang mit
        chronischer körperlicher Belastung, das bei einer ausgeprägten sozialen Acht mit
        Siebenerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Perls kannte sein eigenes Muster nicht – die soziale Acht mit Siebenerflügel
        verwechselt reflexhaft das Verbergen der eigenen Verwundbarkeit mit Stärke, statt
        die eigene körperliche Grenze je anzuerkennen, und genau dieses Muster lebte er bis
        zu seinem Tod unverändert aus. Wer die eigene Unverwundbarkeits-Fixierung nicht als
        Muster erkennt, verwechselt Verbergen mit Stärke, bis der Körper die Rechnung
        präsentiert.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Acht mit Siebenerflügel erklärt bei <strong>Fritz Perls</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Wirkung auf offener,
        ungefilterter Kraft beruhte, verbarg sein eigenes, jahrelanges Herzleiden bis
        zuletzt – der Löwe, der bis zur letzten Konfrontation nicht rastete, auch als sein
        eigenes Herz längst um Ruhe bat.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-fritz-perls", label:"Porträt: Fritz Perls (SO8w7) – Mitbegründer der Gestalttherapie"},
        {route:"krankheitsportraets-john-gotti", label:"Krankheitsporträt: John Gotti (SO8w7) – dieselbe Weigerung, Schwäche zuzugeben"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

export function gustavMahlerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gustav-mahler-portrait.jpg" alt="Gustav Mahler – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gustav Mahler</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · 1860–1911</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Gustav Mahler</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-gustav-mahler">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur
        im Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur knapp
        angedeutet wird: 1907 wurde bei Mahler eine schwere, bakteriell bedingte Herzklappenerkrankung
        (subakute Endokarditis) diagnostiziert – im selben Jahr, in dem er auch seine Tochter
        Maria und seine Position an der Wiener Hofoper verlor. Die Krankheit prägte seine
        letzten vier Lebensjahre und sein Spätwerk bis zu seinem Tod 1911.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Mahler</strong> ist der <strong>sozialen Vier mit Fünferflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">Marcel Proust</a>
        in diesem Kompass. Die soziale Vier sucht die Gruppe, um dort ihre tragische
        Einzigartigkeit sichtbar auszuleben, statt im Verborgenen zu leiden. Der Fünferflügel
        bringt den Drang hinzu, das eigene Gefühlsleben nicht nur zu durchleben, sondern in ein
        gewaltiges, durchkonstruiertes System zu fassen – bei Mahler die Sinfonie als
        &bdquo;Weltentwurf&ldquo;, der am Ende auch die eigene Sterblichkeit einschließen musste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nach innen gerichtet, tief empfindend:</strong>
        Mahlers Blick suchte stets die eigene Gefühlswelt und übersetzte sie unmittelbar in
        Klang – der typische Vierer-Blick, der das Erleben nicht verdrängt, sondern gestaltet.</p>
        <p class="vb-intro"><strong>b) Wachsam gegenüber dem eigenen Herzschlag:</strong>
        Nach der Diagnose 1907 begann Mahler, seinen Puls akribisch zu überwachen – dieselbe
        analytische Genauigkeit, die er sonst seinen Partituren widmete, richtete sich nun auf
        den eigenen Körper.</p>
        <p class="vb-intro"><strong>c) Öffentlich sichtbar, auch im Leid:</strong>
        Anders als Molière (SO7w6), der seine Krankheit verbarg, verarbeitete Mahler seine
        Diagnose unmittelbar und öffentlich – in seinem Werk, vor einem Publikum, das seine
        Musik oft genug verstörte. Das ist SO4-typische Sichtbarkeit, kein einsertypisches
        Verschweigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Dreifachschlag von 1907:</strong>
        Innerhalb weniger Monate verlor Mahler seine Tochter, seine Position an der Wiener
        Hofoper und erhielt die Diagnose seiner eigenen tödlichen Herzkrankheit – die soziale
        Vier verbirgt solches Leid nicht, sondern übersetzt es unmittelbar in Kunst.</p>
        <p class="vb-intro"><strong>b) Ärztliche Einschränkungen als neue Realität:</strong>
        Mahler wurde angewiesen, keinen anstrengenden Sport mehr zu treiben und seine
        körperliche Aktivität drastisch einzuschränken – ein empfindlicher Einschnitt für
        einen Mann, der zuvor stundenlange Bergwanderungen unternommen hatte.</p>
        <p class="vb-intro"><strong>c) Weiterarbeit trotz Diagnose:</strong>
        Statt sich zurückzuziehen, komponierte Mahler in den verbleibenden Jahren einige seiner
        bedeutendsten Werke – &bdquo;Das Lied von der Erde&ldquo;, die Neunte Sinfonie, die
        unvollendete Zehnte. Die Krankheit bremste die Produktivität nicht, sie beschleunigte
        sie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Aberglaube der Neunten:</strong>
        Aus Furcht vor dem &bdquo;Fluch der Neunten&ldquo; – da mehrere große Komponisten nach
        ihrer neunten Sinfonie starben – nummerierte Mahler &bdquo;Das Lied von der Erde&ldquo;
        bewusst nicht als Sinfonie. Die Ironie der Geschichte: Er starb dennoch, kurz nach der
        Vollendung seiner tatsächlichen Neunten und mitten in der Arbeit an der Zehnten.</p>
        <p class="vb-intro"><strong>b) Reisen trotz Schwäche:</strong>
        Auch nach der Diagnose reiste Mahler mehrfach in die USA, um das New Yorker
        Philharmonic Orchestra zu dirigieren – die soziale Vier sucht die Bühne, auch wenn der
        Körper längst Grenzen setzt.</p>
        <p class="vb-intro"><strong>c) Die Krankheit als kompositorisches Material:</strong>
        Statt die Diagnose zu verschweigen oder zu verdrängen, floss sie unmittelbar in seine
        letzten Werke ein – &bdquo;Das Lied von der Erde&ldquo; endet mit dem berühmten,
        mehrfach wiederholten &bdquo;ewig&ldquo;, einem musikalischen Abschied, der als direkte
        Reaktion auf die eigene Sterblichkeit gelesen wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tragik, die zur Kunstform wird:</strong>
        Mahlers Spätwerk gilt bis heute als eine der ergreifendsten Musik der
        Konzertliteratur – gerade weil die eigene Sterblichkeit unmittelbar hörbar wird, statt
        verborgen zu bleiben.</p>
        <p class="vb-intro"><strong>b) Ein Werk, das seiner Zeit voraus war:</strong>
        Zu Lebzeiten vor allem als Dirigent gefeiert, wurde Mahlers kompositorisches Werk erst
        Jahrzehnte nach seinem Tod als bedeutend anerkannt – ein Publikum, das seiner
        radikalen Offenheit erst nachträglich folgen konnte. Das ist typisch für geniale
        Menschen des Subtyps der sozialen Vier: Sie leiten oft bahnbrechende Entwicklungen ein,
        die zu ihren eigenen Lebzeiten nicht anerkannt werden und erst über den eigenen Tod
        hinaus ihre wahre Bedeutung gewinnen – fast so, als würde das Schicksal der SO4, dem
        klassischen Verstärkungstyp der Vier, der seine Leidenschaft des Neids und der
        Missgunst verstärkt auslebt, spiegeln: Wer sein ganzes Leben lang danach
        strebt, ein besonderer Mensch zu sein, erreicht diese besondere Bedeutung gerade dann
        nicht, wenn er sie am unmittelbarsten anstrebt, sondern erst im Nachhinein, unbewusst,
        wenn das eigene Ego nicht mehr im Weg steht. Was man vom Ego her unbedingt anstrebt,
        bekommt man in der Regel nicht oder nicht in dem Maß, wie man es sich wünscht.</p>
        <p class="vb-intro"><strong>c) Sichtbares Leid als Vermächtnis:</strong>
        Anders als bei verheimlichten oder verdrängten Krankheitsgeschichten liegt Mahlers
        letztes Kapitel offen zutage – dokumentiert in Briefen, Erinnerungen von Weggefährten
        und vor allem in der Musik selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verdichtete Schaffenskraft unter Zeitdruck:</strong>
        Das Bewusstsein der eigenen Sterblichkeit beschleunigte statt bremste Mahlers
        Produktivität – die letzten Werke entstanden mit einer Intensität, die kaum Pausen
        zuließ.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Leben und Werk:</strong>
        Für Mahler gab es keine Trennung zwischen der eigenen Krankheitserfahrung und seiner
        Musik – beides floss unmittelbar ineinander, ohne Distanz oder Verzögerung.</p>
        <p class="vb-intro"><strong>c) Rastlosigkeit trotz körperlicher Grenzen:</strong>
        Auch mit eingeschränkter Belastbarkeit dirigierte, reiste und komponierte Mahler bis
        kurz vor seinem Tod – eine Energie, die sich der ärztlichen Vorsicht immer wieder
        widersetzte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Jahr der dreifachen Erschütterung:</strong>
        1907 verlor Mahler binnen weniger Monate seine Tochter Maria, seine Position an der
        Wiener Hofoper durch antisemitisch motivierte Kampagnen, und erhielt die Diagnose einer
        subakuten bakteriellen Endokarditis – eine Herzklappenentzündung, die zu jener Zeit als
        unheilbar galt.</p>
        <p class="vb-intro"><strong>b) Das Zählen des eigenen Pulses:</strong>
        Zeitgenössische Berichte beschreiben, wie Mahler nach der Diagnose begann, seinen
        eigenen Herzschlag akribisch zu kontrollieren und zu zählen – dieselbe analytische
        Präzision, die er mit seinem starken Fünferflügel sonst seinen Partituren widmete,
        wandte sich nun auf das eigene, versagende Organ. Die soziale Vier wird aufgrund einer
        perfektionistischen Neigung, die sie in Richtung ihres Entspannungspunkts, der Eins,
        bewegt, auch als &bdquo;der kritische Kommentator&ldquo; bezeichnet – paradoxerweise:
        Was bei der Eins selbst gesunde, wohlwollende Selbstkorrektur wäre, zeigt sich bei der
        Vier oft schon im Normalzustand als unerbittliche Selbstkritik, nie ganz zufrieden mit
        dem eigenen Werk, ohne dass die Vier deshalb selbst zur Eins wird. Im Krankheitsfall,
        unter dem zunehmenden Energieverlust und den Schicksalsschlägen jener Jahre, verstärkte
        sich dieses Muster auf psychischer Ebene zusätzlich – ein kritischer Kommentator, der
        mit seinem eigenen Werk nie ganz zufrieden war.</p>
        <p class="vb-intro"><strong>c) Kompositorische Verarbeitung statt Verdrängung:</strong>
        Anders als bei Molière (SO7w6) oder Freud (SO6w5), die ihre Krankheit über Jahre
        verbargen, verarbeitete
        Mahler seine Diagnose unmittelbar in seinem Werk – &bdquo;Das Lied von der Erde&ldquo;
        und die Neunte Sinfonie gelten als direkte künstlerische Auseinandersetzung mit dem
        eigenen nahenden Tod. Die soziale Vier verbirgt ihr Leid nicht, sie macht es zum
        zentralen Thema ihrer Kunst.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">Marcel Proust</a>
        (SO4w5) wusste, dass sein lebenslanges Asthma ihn früh töten würde, und arbeitete bis
        zum Sterbebett an seinem Lebenswerk, um es rechtzeitig zu vollenden – sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-marcel-proust">eigenes Krankheitsporträt</a>
        zeigt dasselbe SO4w5-Muster: Das Wissen um die eigene Sterblichkeit wird nicht
        verdrängt, sondern in einen Wettlauf gegen die Zeit verwandelt, der das Spätwerk zur
        eindringlichsten Aussage des gesamten Schaffens macht.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet das Herz?</strong>
        Das Herz ist seit jeher das Symbol für Gefühl, Sehnsucht und emotionale Tiefe – genau
        jene Eigenschaften, auf denen die gesamte Identität der Vier beruht. Für eine soziale
        Vier, deren Leidenschaft und Kunst aus einem übervollen, oft schmerzhaften Gefühlsleben
        gespeist wird, liegt es nahe, gerade in einer Erkrankung des Herzens eine Zuspitzung
        des eigenen Lebensmusters zu lesen: ein Organ, das jahrzehntelang Verlust, Sehnsucht und
        Intensität in Musik übersetzt hatte, versagte am Ende buchstäblich unter dieser Last.
        Mahler beantwortete das nicht mit Rückzug, sondern mit noch dichterer, noch
        unmittelbarerer musikalischer Verarbeitung – bis das Herz, das seine Kunst überhaupt
        erst ermöglicht hatte, selbst zum Thema seiner letzten Werke wurde. Diese Deutung wird
        im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Herzerkrankungen
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Mahlers Fall zeigen lässt, ist ein Muster, das bei
        unmittelbarer künstlerischer Verarbeitung existenziellen Leids in der Praxis immer
        wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Mahler kannte sein eigenes Muster nicht – die soziale Vier verarbeitet Verlust und Bedrohung reflexhaft in Ausdruck statt in Schonung, und so goss er die eigene Herzdiagnose unmittelbar in sein Spätwerk, statt kürzerzutreten. Wer das eigene Muster nicht kennt, verwechselt künstlerische Verarbeitung mit Heilung.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Vier mit Fünferflügel spiegelt sich noch einmal deutlich in
        <strong>Mahlers</strong> eigenem Krankheitsverlauf: existenzielles Leid, das nicht verborgen, sondern in
        monumentale, alles umfassende Kunst verwandelt wird, und ein Herz, das jahrzehntelang
        Sehnsucht und Verlust in Musik übersetzt hatte, bevor es selbst zum letzten,
        eindringlichsten Thema seines Werks wurde. Das Gürteltier, das im Zentrum der Wiener
        Musikwelt stand und doch nie ganz dazugehörte, übersetzte auch sein eigenes Sterben in
        ein Klangbild, das bis heute nachwirkt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-gustav-mahler", label:"Porträt: Gustav Mahler (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-marcel-proust", label:"Krankheitsporträt: Marcel Proust (SO4w5) – derselbe Wettlauf gegen die Zeit"},
        {route:"krankheitsportraets-edgar-allan-poe", label:"Krankheitsporträt: Edgar Allan Poe (SO4w5)"},
        {route:"krankheitsportraets-leonard-cohen", label:"Krankheitsporträt: Leonard Cohen (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function hundertwasserKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hundertwasser-portrait.jpg" alt="Friedensreich Hundertwasser" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedensreich Hundertwasser</p>
        <p class="krim-portrait-typ">SX9w8 · Sexueller Typ 9 mit Achterflügel · 1928–2000</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedensreich Hundertwasser</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hundertwasser">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur beiläufig erwähnt wird: sein jahrelanges Herzleiden, das
        er weitgehend verschwieg, das er nicht schulmedizinisch behandeln ließ, und an dem
        er im Februar 2000 an Bord eines Schiffes starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hundertwasser</strong> ist dem <strong>sexuellen Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SX9 sucht die restlose Verschmelzung mit einem Ideal – bei
        Hundertwasser: der Natur; der Achterflügel bringt die konfrontative Kraft hinzu, die
        das eigene Prinzip notfalls gegen jeden Widerstand durchsetzt. Genau diese
        Kombination – Verschmelzung mit einem naturnahen Ideal, kombiniert mit der
        Weigerung, sich fremder Autorität wie der Schulmedizin zu unterwerfen – bestimmte
        den Umgang mit der eigenen Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Herzleiden, das über Jahre bestand:</strong>
        Nach übereinstimmenden biografischen Quellen litt Hundertwasser in seinen letzten
        Lebensjahren an einer chronischen Herzschwäche, die sein Umfeld kannte, die er selbst
        aber kaum öffentlich thematisierte.</p>
        <p class="vb-intro"><strong>b) Ein Leben zwischen Wien, Neuseeland und dem Ozean:</strong>
        Hundertwasser verbrachte einen großen Teil seiner letzten Jahre auf Reisen zwischen
        seinen Wohnorten, häufig auf langen Schiffsüberfahrten statt per Flugzeug – eine
        bewusste Entscheidung für Langsamkeit statt Eile.</p>
        <p class="vb-intro"><strong>c) Zurückhaltung gegenüber schulmedizinischer Behandlung:</strong>
        Wie bei vielen Naturheilkunde-nahen Zeitgenossen seiner Generation dokumentiert,
        stand Hundertwasser einer aggressiven schulmedizinischen Intervention skeptisch
        gegenüber und bevorzugte einen Lebensstil in möglichst enger Naturverbundenheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unvermindertes Arbeitspensum trotz Erkrankung:</strong>
        Bis zuletzt reiste Hundertwasser für Ausstellungen, Bauprojekte und öffentliche
        Auftritte um die Welt, ohne das Tempo seines Lebens spürbar zu drosseln.</p>
        <p class="vb-intro"><strong>b) Die Schiffsreise als bevorzugte Fortbewegungsart:</strong>
        Er reiste regelmäßig mit dem Ozeandampfer <em>Queen Elizabeth 2</em> zwischen Europa
        und dem Pazifikraum – eine wochenlange, langsame Reiseform, die zu seinem
        Naturideal passte, aber im Ernstfall weit von schneller medizinischer Versorgung
        entfernt war.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Krankheitsdebatte:</strong>
        Anders als manche Zeitgenossen machte Hundertwasser sein Herzleiden nie zu einem
        öffentlichen Thema – es blieb, im Gegensatz zu seinen lautstarken Manifesten zu
        Architektur und Ökologie, eine private Angelegenheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod an Bord der Queen Elizabeth 2:</strong>
        Am 19. Februar 2000 starb Hundertwasser im Alter von 71 Jahren an Herzversagen an
        Bord des Schiffs, auf dem Weg zurück nach Neuseeland – mitten auf dem Pazifik, fernab
        jeder Klinik.</p>
        <p class="vb-intro"><strong>b) Bestattung nach eigenem, ungewöhnlichem Wunsch:</strong>
        Seinem testamentarisch festgelegten Wunsch folgend wurde er auf seinem Grundstück in
        Neuseeland ohne Sarg, in Leinen gehüllt, unter einem Tulpenbaum im „Garten der
        glücklichen Toten" bestattet – die letzte Konsequenz seines Verschmelzungsideals mit
        der Natur.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Ankündigung eines Rückzugs:</strong>
        Bis zu seinem Tod hatte Hundertwasser keine Anzeichen einer bevorstehenden
        Verlangsamung gezeigt – kein angekündigter Ruhestand, kein öffentliches Eingeständnis
        von Schwäche.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der zum Werk passte:</strong>
        Für viele Nachrufe wurde gerade die Umstände seines Todes – auf hoher See, fernab
        der Zivilisation, nach eigenem Wunsch bestattet – als konsequenter Abschluss eines
        Lebens gedeutet, das durchgängig gegen Konvention und für Naturverbundenheit
        gerichtet war.</p>
        <p class="vb-intro"><strong>b) Postumes Vermächtnis unverändert lebendig:</strong>
        Seine Bauten – das Hundertwasserhaus in Wien, die Grüne Zitadelle in Magdeburg, das
        KunstHausWien – blieben nach seinem Tod international besuchte Wahrzeichen und
        prägen bis heute das öffentliche Bild ökologischer Architektur.</p>
        <p class="vb-intro"><strong>c) Keine nachträgliche Verklärung der Krankheit:</strong>
        Anders als bei manchen Künstlern wurde sein Herzleiden nicht Teil der öffentlichen
        Legende – es blieb ein stiller, fast beiläufiger Teil seiner Biografie, während seine
        Manifeste und Bauten die öffentliche Erinnerung dominieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit dem Reisetempo statt Anpassung an die Krankheit:</strong>
        Die SX9-typische Sehnsucht nach Verschmelzung mit einem größeren Ganzen zeigte sich
        auch darin, dass Hundertwasser sein Reisetempo – die langsame Schiffsüberfahrt statt
        des schnellen Fluges – nicht dem gesundheitlichen Risiko unterordnete, sondern seinem
        Naturideal treu blieb.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel und die Weigerung, Schwäche einzugestehen:</strong>
        Dieselbe konfrontative Kraft, mit der Hundertwasser sich bei seinen Nacktreden gegen
        gesellschaftliche Konventionen stellte, zeigte sich im Umgang mit der eigenen
        Krankheit als Weigerung, sich der Autorität der Schulmedizin oder der Erwartung
        eines ruhigeren Lebensstils zu beugen.</p>
        <p class="vb-intro"><strong>c) Die letzte Verschmelzung: Tod auf See, Bestattung in der Erde:</strong>
        Dass sein Leben auf dem Ozean endete und seine letzte Ruhestätte ohne Sarg, direkt in
        der Erde unter einem Baum liegt, lässt sich als äußerste Konsequenz seines
        lebenslangen Verschmelzungsideals lesen – kein Zufall, sondern die letzte
        Konsequenz eines durchgehaltenen Prinzips.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann, der Naturverbundenheit predigte und sich seiner eigenen Natur nicht entzog:</strong>
        Hundertwassers gesamtes Werk beruhte auf der Überzeugung, dass der Mensch sich der
        Natur nicht entgegenstellen, sondern mit ihr verschmelzen soll – auch seinem eigenen
        Körper und dessen Grenzen begegnete er am Ende genau mit dieser Haltung: kein Kampf,
        kein Widerstand, sondern ein Leben bis zum letzten Moment im gewohnten Tempo.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet das Herz?</strong>
        Für eine sexuelle Neun mit Achterflügel, deren gesamtes Werk um das Bild der
        Verschmelzung – Mensch mit Natur, Redner mit Publikum, Name mit Prinzip – kreiste,
        liegt eine Deutung nahe: Ausgerechnet jenes Organ, das im Volksmund für Verbindung
        und Hingabe steht, wurde bei ihm zum Ort des körperlichen Versagens. Diese Deutung
        ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Neun zwangsläufig zu Herzleiden führt
        – <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom
        Subtyp.</strong> Was sich an Hundertwassers Fall zeigen lässt, ist ein Muster im
        Umgang mit einer fortschreitenden Erkrankung, das bei einer ausgeprägten sexuellen
        Neun mit Achterflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hundertwasser kannte sein eigenes Muster nicht als Enneagramm-Struktur – die
        sexuelle Neun mit Achterflügel hält reflexhaft an der Verschmelzung mit dem eigenen
        Ideal fest, statt rechtzeitig innezuhalten, und lebte genau dieses Muster bis zum
        letzten Tag unverändert aus, ohne das eigene Herzleiden je zum zentralen Thema zu
        machen. Wer die eigene Neigung, sich einem größeren Prinzip restlos zu unterwerfen,
        nicht als Muster erkennt, riskiert, dass diese Verschmelzung erst mit dem
        vollständigen körperlichen Zusammenbruch endet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Neun mit Achterflügel erklärt bei <strong>Friedensreich Hundertwasser</strong>
        viel über den Umgang mit der eigenen Krankheit: ein Mann, dessen gesamtes Lebenswerk
        der Verschmelzung mit der Natur galt, akzeptierte am Ende auch das eigene
        Herzversagen als Teil dieses natürlichen Kreislaufs – kein Kampf gegen den Tod,
        sondern das letzte, konsequenteste Verschmelzen des Faultiers mit dem Element, dem
        es sein ganzes Leben gewidmet hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hundertwasser", label:"Porträt: Friedensreich Hundertwasser (SX9w8)"},
        {route:"krankheitsportraets-diego-velazquez", label:"Krankheitsporträt: Diego Velázquez (SX9w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

export function johannSebastianBachKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-johann-sebastian-bach-portrait.jpg" alt="Johann Sebastian Bach" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johann Sebastian Bach</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel · 1685–1750</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Johann Sebastian Bach</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-johann-sebastian-bach">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier wird ausführlich ein Kapitel beleuchtet, das dort nur eine Randnotiz bleibt:
        eine über Jahre fortschreitende Erblindung, zwei missglückte Augenoperationen und Bachs
        Tod wenige Monate danach im Jahr 1750.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bach</strong> ist dem <strong>sexuellen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SX1 richtet den Vollkommenheitsanspruch der Eins nicht auf die ganze
        Welt, sondern mit kompromissloser Intensität auf den engsten Kreis – auf eine einzige
        Sache, eine einzige Berufung, für die keine Mühe zu groß ist. Der Neunerflügel bringt
        eine ruhige, undramatische Beharrlichkeit hinzu: Bach klagte selten, er arbeitete
        weiter – ein Muster, das sich bis in seine letzten, fast erblindeten Lebensmonate
        nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Die Augen als Werkzeug der Hingabe, nicht der Schonung:</strong>
        Schon als Junge kopierte Bach der Überlieferung nach heimlich verbotene Notenblätter
        bei Mondlicht – eine frühe Bereitschaft, die eigene Sehkraft für die Musik aufs Spiel
        zu setzen, lange bevor sie tatsächlich in Gefahr geriet.</p>
        <p class="vb-intro"><strong>b) Nachlassende Sicht als hingenommene Realität, nicht als Alarmsignal:</strong>
        Die zunehmend zittrige, schwer lesbare Handschrift seiner letzten Notenmanuskripte
        dokumentiert eine über Jahre fortschreitende Sehschwäche, die Bach offenbar arbeitend
        durchstand, statt sich frühzeitig zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Konzentration auf das eine Werk trotz schwindender Sicht:</strong>
        Noch in den späten 1740er-Jahren arbeitete Bach an großen, hochkomplexen Kompositionen
        wie der h-Moll-Messe – eine Konzentration auf das Wesentliche, die für die sexuelle
        Eins mit Neunerflügel typisch ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine schleichende Verschlechterung ohne klare Diagnose:</strong>
        Zeitgenössische Quellen dokumentieren keinen genauen Beginn der Augenerkrankung –
        rückblickend wird sie als grauer Star gedeutet, zeitgenössisch aber nie eindeutig
        diagnostiziert.</p>
        <p class="vb-intro"><strong>b) Zwei Operationen im März 1750:</strong>
        Bach unterzog sich zwei Eingriffen durch den reisenden, selbsternannten "Chevalier"
        John Taylor, einen britischen Augenoperateur von zweifelhaftem Ruf. Die angewandte
        Methode, das sogenannte "Couching", verlagerte die getrübte Linse, statt sie zu
        entfernen – ein bereits damals veraltetes, riskantes Verfahren.</p>
        <p class="vb-intro"><strong>c) Vollständige Erblindung nach der zweiten Operation:</strong>
        Nach etwa einer Woche musste erneut operiert werden, da sich der Star zurückbildete.
        Diese zweite Operation führte zur vollständigen Erblindung Bachs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Derselbe Operateur, dasselbe Schicksal bei Händel:</strong>
        Kurz nach Bach operierte John Taylor auch Georg Friedrich Händel – mit ebenfalls
        verheerendem Ausgang. Zwei der bedeutendsten Komponisten des Barock wurden durch
        denselben zweifelhaften "Wunderheiler" erblindet zurückgelassen.</p>
        <p class="vb-intro"><strong>b) Vier Monate zwischen Erblindung und Tod:</strong>
        Am 28. Juli 1750, rund vier Monate nach den Operationen, starb Bach nach einem
        Schlaganfall, dem laut dem 1754 veröffentlichten Nekrolog ein "hitziges Fieber"
        vorausging – vermutlich eine fieberhafte Infektion.</p>
        <p class="vb-intro"><strong>c) Die Kausalität bleibt Deutung, nicht gesicherter Fakt:</strong>
        Ob die Operationen selbst den tödlichen Verlauf auslösten, ist eine in der Forschung
        verbreitete, plausible, aber nicht abschließend bewiesene Verbindung – eine
        moderne Autopsie im heutigen Sinne existiert nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine populäre Legende, die der Forschung nicht standhält:</strong>
        Die romantische Erzählung, Bach sei mitten in der Komposition der letzten Fuge der
        "Kunst der Fuge" gestorben, ist heute widerlegt – das Autograph der letzten,
        unvollendeten Fuge stammt bereits aus den Jahren 1748/49, also von vor der
        Erblindung.</p>
        <p class="vb-intro"><strong>b) Die h-Moll-Messe als plausibleres letztes großes Werk:</strong>
        Der Bach-Forscher Christoph Wolff argumentiert, dass eher die h-Moll-Messe als
        Bachs eigentliches letztes vollendetes Hauptwerk gelten sollte – ein Werk, das er
        offenbar noch mit erheblicher Sehkraft-Einschränkung zu Ende brachte.</p>
        <p class="vb-intro"><strong>c) Eine bis heute diskutierte Rückdiagnose:</strong>
        Manche Forscher vermuten einen fortgeschrittenen Diabetes als Ursache sowohl der
        Sehverschlechterung als auch der schlechten Wundheilung nach der Operation – eine
        moderne Vermutung, keine gesicherte historische Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Arbeit als Konstante trotz nachlassender Sicht:</strong>
        Bach ließ sich von der fortschreitenden Sehschwäche offenbar nicht von seiner
        kompositorischen Arbeit abbringen – ein Ausdruck der Intensität, mit der die
        sexuelle Eins sich der einen, alles überragenden Sache widmet.</p>
        <p class="vb-intro"><strong>b) Neunerflügel-Gelassenheit im Angesicht des Risikos:</strong>
        Die Entscheidung, sich einem riskanten, damals bereits umstrittenen Eingriff zu
        unterziehen, statt mit der Erblindung zu leben, zeigt eine ruhige, fast fatalistische
        Risikobereitschaft – kein dramatischer Kampf, sondern ein stiller Versuch,
        das Problem zu lösen und weiterzuarbeiten.</p>
        <p class="vb-intro"><strong>c) Die Schwarze Mamba, die bis zum letzten Biss präzise blieb:</strong>
        Selbst in den letzten Lebensmonaten, fast vollständig erblindet, blieb Bachs
        kompositorisches Denken offenbar ungebrochen scharf – eine Präzision, die keine
        Behinderung zu trüben vermochte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Risiko, das schon in der Kindheit begann:</strong>
        Der Überlieferung nach kopierte der junge Bach verbotene Notenblätter heimlich bei
        Mondlicht – ein früher, selbst gewählter Raubbau an den eigenen Augen im Dienst der
        Musik, Jahrzehnte bevor die tatsächliche Erblindung eintrat.</p>
        <p class="vb-intro"><strong>b) Jahre schleichenden Verlusts, ohne öffentliches Klagen:</strong>
        Die zunehmend unleserliche Handschrift seiner letzten Manuskripte ist der einzige
        erhaltene Hinweis auf eine Verschlechterung, die Bach offenbar nie in den Mittelpunkt
        seiner eigenen Aufzeichnungen stellte.</p>
        <p class="vb-intro"><strong>c) Zwei Operationen, ein Verlust, vier Monate bis zum Tod:</strong>
        Die zeitliche Nähe zwischen der vollständigen Erblindung im März 1750 und Bachs Tod
        am 28. Juli 1750 ist historisch gut belegt, auch wenn die genaue kausale Kette
        Gegenstand fortlaufender Deutung bleibt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Augen?</strong>
        Für eine sexuelle Eins, deren gesamte Hingabe sich mit kompromissloser Intensität auf
        die eine Sache richtet, der sie sich verschrieben hat, liegt eine Deutung nahe: Die
        Augen waren für Bach zeitlebens das Organ, mit dem er sich seiner Berufung
        unterwarf – im Kerzenlicht kopierend als Kind, über Notenblätter gebeugt als
        Komponist. Dass ausgerechnet dieses Organ am Ende versagte, nachdem er es ein Leben
        lang ohne Rücksicht auf sich selbst beansprucht hatte, liest sich als konsequenter
        Abschluss eines Musters, das schon in der Kindheit angelegt war. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu
        Augenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Bachs Fall zeigen lässt, ist ein Muster,
        das bei der kompromisslosen Hingabe an eine einzige Berufung, ohne Rücksicht auf die
        eigenen körperlichen Grenzen, in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bach kannte sein eigenes Muster nicht – die sexuelle Eins mit Neunerflügel sucht die eine, vollkommene Lösung, und genau dieser Drang nach Perfektion ließ ihn sich zweimal einer riskanten Operation durch denselben zweifelhaften Okulisten unterziehen, statt beim ersten Fehlschlag innezuhalten. Wer das eigene Streben nach der perfekten Lösung nicht als Muster erkennt, wiederholt denselben Fehler, in der Hoffnung, dieses Mal werde es anders.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Bachs</strong> sexueller Typ 1 mit Neunerflügel wird an seiner eigenen
        Erkrankung noch einmal sichtbar: ein Organ, das er als Kind schon riskierte und
        als Erwachsener bis zur vollständigen Erblindung beanspruchte, zwei riskante
        Operationen, denen er sich ruhig und ohne öffentliches Aufsehen unterzog, und ein Tod
        vier Monate später, dessen genaue Ursache bis heute Gegenstand der Forschung ist.
        Die Schwarze Mamba, die selbst im Dunkeln noch komponierte – präzise bis zuletzt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-johann-sebastian-bach", label:"Porträt: Johann Sebastian Bach (SX1w9) – Lebenswerk"},
        {route:"krankheitsportraets-gunther-von-hagens", label:"Krankheitsporträt: Gunther von Hagens (SX1w9) – gleicher Subtyp, dieselbe Beharrlichkeit trotz Angriff auf die eigene Kernfähigkeit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

export function juliusCaesarKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-julius-caesar-portrait.jpg" alt="Julius Caesar" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julius Caesar</p>
        <p class="krim-portrait-typ">SO2w3 · Sozialer Typ 2 mit Dreierflügel · 100–44 v. Chr.</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Julius Caesar</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-julius-caesar">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Diese Seite beleuchtet ein Kapitel, das dort nicht zur Sprache kommt: eine
        wiederkehrende, von antiken Quellen mehrfach bezeugte Krankheit – vermutlich Epilepsie –,
        die Caesar zeitlebens verbarg und die möglicherweise sogar seine Ermordung mit
        begünstigte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Caesar</strong> ist dem <strong>sozialen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SO2 investiert, wie Naranjo beschreibt, nicht in Rücklagen, sondern in
        Beziehung, Bewunderung und Unentbehrlichkeit im großen Maßstab. Der Dreierflügel bringt
        die Weigerung hinzu, sich von Schwäche – auch der eigenen körperlichen – aufhalten zu
        lassen, und die Fähigkeit, jedes Bild von sich selbst aktiv zu gestalten. Genau dieses
        Muster lässt sich bis in Caesars Umgang mit der eigenen, verborgenen Krankheit
        nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Antike Quellen, die übereinstimmend berichten:</strong>
        Sowohl Plutarch als auch Sueton berichten unabhängig voneinander, Caesar habe an der
        „Fallsucht" (morbus comitialis) gelitten – dem antiken Begriff für das, was heute als
        Epilepsie gedeutet wird.</p>
        <p class="vb-intro"><strong>b) Ein Anfall mitten im Feldzug:</strong>
        Plutarch beschreibt einen Anfall während der Schlacht von Thapsus 46 v. Chr., bei dem
        Caesar von seinen Männern vom Schlachtfeld getragen werden musste, während die
        Auseinandersetzung weiterging.</p>
        <p class="vb-intro"><strong>c) Ein zweiter belegter Vorfall in Corduba:</strong>
        Ein weiterer Anfall soll sich 45 v. Chr. in Corduba (heute Córdoba, Spanien) während
        einer öffentlichen Ansprache ereignet haben – ein Zeitpunkt, an dem Zurückhaltung für
        einen Feldherrn vor seinen eigenen Truppen kaum denkbar erschien.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Unklarer Beginn der Erkrankung:</strong>
        Ob die Anfälle Caesar bereits in jungen Jahren begleiteten oder sich erst in seinen
        letzten Lebensjahren entwickelten, lässt sich aus den erhaltenen Quellen nicht sicher
        rekonstruieren – die moderne Forschung diskutiert beide Möglichkeiten.</p>
        <p class="vb-intro"><strong>b) Eine bis heute offene medizinhistorische Debatte:</strong>
        Moderne Mediziner und Historiker diskutieren neben Epilepsie auch alternative
        Erklärungen, darunter wiederholte kleine Schlaganfälle (transitorische ischämische
        Attacken) infolge jahrzehntelanger Feldzugsstrapazen. Eine eindeutige retrospektive
        Diagnose ist über zweitausend Jahre später nicht mehr möglich.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Bestätigung durch Caesar selbst:</strong>
        In keiner erhaltenen eigenen Schrift, auch nicht in den ausführlichen
        <em>Commentarii</em>, erwähnt Caesar die eigene Krankheit auch nur andeutungsweise –
        ein auffälliges Schweigen bei einem Mann, der sonst jedes Detail seines Wirkens
        sorgfältig dokumentieren ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetzte Feldzüge trotz der Anfälle:</strong>
        Weder der Vorfall bei Thapsus noch jener in Corduba hielten Caesar davon ab, seine
        Feldzüge unmittelbar fortzusetzen – beide Male kehrte er binnen kurzer Zeit ins
        Kommando zurück, als sei nichts geschehen.</p>
        <p class="vb-intro"><strong>b) Reduzierte Leibwache in den letzten Monaten:</strong>
        Zeitgenössische Überlieferungen berichten, Caesar habe seine persönliche Wachmannschaft
        in den Wochen vor seiner Ermordung bewusst verringert – ein Verhalten, das manche
        Historiker mit einem abnehmenden Vertrauen in die eigene körperliche Unverwundbarkeit
        in Verbindung bringen, andere schlicht mit politischem Kalkül.</p>
        <p class="vb-intro"><strong>c) Die Ermordung am 15. März 44 v. Chr.:</strong>
        Caesar wurde im Senat von einer Gruppe von Verschwörern mit 23 Dolchstichen getötet –
        ein gewaltsames Ende, das mit der Krankheit selbst nicht direkt in Verbindung steht,
        dessen Vorgeschichte aber von den Fragen nach Caesars Verwundbarkeit und
        Unverwundbarkeit durchzogen ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die zur literarischen Ikone wurde:</strong>
        Shakespeares Drama <em>Julius Caesar</em> (um 1599) dramatisiert einen öffentlichen
        Anfall auf dem Forum – eine Szene, die Caesars „Fallsucht" bis heute im kollektiven
        Bewusstsein verankert, unabhängig von der genauen historischen Faktenlage.</p>
        <p class="vb-intro"><strong>b) Eine mögliche Rolle im Kalkül der Verschwörer:</strong>
        Manche Historiker spekulieren, dass wahrgenommene Anzeichen körperlicher Schwäche –
        neben Caesars zunehmender Machtfülle – das Zeitfenster für das Attentat mit
        beeinflusst haben könnten. Belastbar beweisen lässt sich das nicht.</p>
        <p class="vb-intro"><strong>c) Der Kontrast zwischen öffentlichem Bild und privater Realität:</strong>
        Kaum ein anderer antiker Herrscher hat sein öffentliches Bild so bewusst gestaltet wie
        Caesar – und kaum einer hat eine eigene körperliche Schwäche so konsequent aus diesem
        Bild herausgehalten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Golden Retriever, der keine Schwäche zeigen durfte:</strong>
        Für einen Mann, dessen gesamte Wirkung auf Unentbehrlichkeit und Bewunderung beruhte,
        wäre ein öffentlich anerkanntes Krankheitsbild eine Bedrohung des eigenen Kerns gewesen
        – nicht nur der körperlichen, sondern der emotionalen Sicherheit.</p>
        <p class="vb-intro"><strong>b) Rückkehr ins Kommando als Selbstbeweis:</strong>
        Die beiden belegten Vorfälle bei Thapsus und Corduba folgten demselben Muster: Anfall,
        kurze Unterbrechung, sofortige Rückkehr zur vollen Handlungsfähigkeit – eine
        demonstrative Bestätigung der eigenen Unverwundbarkeit, gerade weil das Gegenteil
        gezeigt worden war.</p>
        <p class="vb-intro"><strong>c) Vertrauen in die eigene Unentbehrlichkeit bis zuletzt:</strong>
        Dieselbe Haltung, die Caesar dazu brachte, seine Leibwache zu reduzieren, weil „man ihm
        doch nichts tun werde, er habe doch für alle gesorgt", zeigt sich bereits im Umgang mit
        der eigenen Krankheit: Verwundbarkeit wurde nicht zugelassen, sondern überspielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Schweigen, das über zweitausend Jahre trägt:</strong>
        Dass ausgerechnet ein Mann, der seine eigene Geschichte in der dritten Person
        niederschrieb, um jedes Detail seines Wirkens zu kontrollieren, seine eigene Krankheit
        nie erwähnte, zeigt, wie tief die Verbergung reichte.</p>
        <p class="vb-intro"><strong>b) Zwei belegte Vorfälle, ein wiederkehrendes Verhalten:</strong>
        Sowohl bei Thapsus als auch in Corduba reagierte Caesar auf denselben Weise: keine
        Unterbrechung der Mission, keine öffentliche Anerkennung der eigenen Grenzen, sofortige
        Rückkehr zur vollen Kontrolle.</p>
        <p class="vb-intro"><strong>c) Konfrontation durch Verbergung statt durch Rückzug:</strong>
        Anders als Ludwig van Beethoven (SX6w5), der seine Krankheit offen bekämpfte, oder
        Franz Schubert (SE6w5), der sich zurückzog, wählte Caesar – ganz wie später sein
        SO2w3-Pendant Napoleon Bonaparte – den dritten Weg: die eigene Krankheit so vollständig
        zu verbergen, dass sie im öffentlichen Bild schlicht nicht existierte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein Zusammenbruch der Kontrolle?</strong>
        Für eine soziale Zwei mit Dreierflügel, deren gesamte Identität an der bewussten
        Gestaltung des eigenen Bildes hing, liegt eine Deutung nahe: Ausgerechnet eine
        Krankheit, die den Körper für Momente der eigenen Kontrolle entzieht und ihn
        öffentlich verwundbar macht, wurde zur größten denkbaren Bedrohung – und musste deshalb
        um jeden Preis aus dem eigenen Narrativ herausgehalten werden. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu Epilepsie oder
        ähnlichen Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Caesars Fall zeigen lässt, ist ein Muster
        im Umgang mit der eigenen Krankheit, das bei einer ausgeprägten sozialen Zwei mit
        Dreierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Caesar kannte sein eigenes Muster nicht – die soziale Zwei mit Dreierflügel kann keine
        Schwäche zulassen, die das selbst geschaffene Bild der Unentbehrlichkeit gefährdet, und
        genau das ließ ihn eine wiederkehrende Krankheit über Jahre verschweigen, statt sie
        auch nur einmal öffentlich einzuräumen. Wer das eigene Bedürfnis nach einem
        makellosen, unverwundbaren Bild nicht als Muster erkennt, verbirgt am Ende genau die
        Verwundbarkeit, die die eigene Sicherheit am nötigsten gebraucht hätte.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Dreierflügel bestätigt sich bei <strong>Caesar</strong> noch
        einmal im Umgang mit der eigenen Krankheit: eine wiederkehrende, von mehreren antiken
        Quellen bezeugte Erkrankung, die er nie öffentlich anerkannte, zwei belegte Anfälle
        mitten im Kommando, aus dem er sich jeweils sofort zurückmeldete, und eine reduzierte
        Leibwache in den letzten Wochen, die zeigt, wie sehr das Vertrauen in die eigene
        Unverwundbarkeit bis zuletzt trug. Der Golden Retriever, der lieber schutzlos blieb,
        als auch nur einen Moment lang verwundbar zu wirken.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-julius-caesar", label:"Porträt: Julius Caesar (SO2w3) – Lebenswerk"},
        {route:"krankheitsportraets-muhammad-ali", label:"Krankheitsporträt: Muhammad Ali – Parkinson"},
        {route:"krankheitsportraets-napoleon-bonaparte", label:"Krankheitsporträt: Napoleon Bonaparte (SO2w3) – dieselbe Verbergungsstrategie"},
        {route:"krankheitsportraets-alexander-der-grosse", label:"Krankheitsporträt: Alexander der Große (SO2w3) – derselbe Dreierflügel-Reflex"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Krankheitsporträt: Ludwig van Beethoven (SX6w5) – Gegenmodell: offene Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function ladyDianaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-lady-diana-portrait.jpg" alt="Lady Diana" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lady Diana</p>
        <p class="krim-portrait-typ">SE4w3 · Selbsterhaltender Typ 4 mit Dreierflügel · 1961–1997</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Lady Diana</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-lady-diana">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine über
        Jahre verschwiegene Bulimie, die sie erst 1995 selbst öffentlich machte, verbunden mit
        Selbstverletzung und postnataler Depression.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Diana</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden – anders als andere Vierer-Subtypen – nicht nach
        außen, sondern hält es still aus, während sie nach außen Stärke zeigt. Der Dreierflügel
        gibt ihr die Fähigkeit, das eigene Erleben in öffentliche Wirksamkeit zu verwandeln –
        genau diese Spannung zwischen verborgenem Leiden und makelloser öffentlicher Fassade
        prägt auch Dianas Krankheitsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Beginn in der Verlobungswoche:</strong>
        Diana beschrieb später selbst, ihre Bulimie habe "in der Woche nach der Verlobung"
        mit Prinz Charles im Februar 1981 begonnen – ausgelöst unter anderem durch eine
        abwertende Bemerkung Charles' zu ihrer Taille sowie den Stress durch seine
        fortbestehende Beziehung zu Camilla Parker Bowles.</p>
        <p class="vb-intro"><strong>b) Ein Muster, das sie selbst als zerstörerisch erkannte:</strong>
        Im Panorama-Interview 1995 nannte Diana die Bulimie selbst "a repetitive pattern which
        is very destructive to yourself" (›ein sich wiederholendes Muster, das sehr
        zerstörerisch für einen selbst ist‹) – ein Kreislauf aus kurzzeitigem Trost und
        anschließendem Ekel, den sie über Jahre allein austrug.</p>
        <p class="vb-intro"><strong>c) Eine Fassade, die lange hielt:</strong>
        Nach außen blieb Diana über Jahre die makellos gestylte Prinzessin – während im
        Verborgenen ein Leiden verlief, von dem selbst ihr nächstes Umfeld lange nichts
        Genaues wusste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Jahrelange Bulimie:</strong>
        Laut Dianas eigenen Schilderungen sowie Andrew Mortons Buch "Diana: Her True Story"
        (1992, für das sie heimlich Interviews gab) zog sich die akute Phase der Erkrankung
        über mehrere Jahre, mit ersten Therapieversuchen ab Ende der 1980er-Jahre.</p>
        <p class="vb-intro"><strong>b) Selbstverletzung als Hilferuf zur falschen Adresse:</strong>
        Diana beschrieb im Panorama-Interview auch Episoden von Selbstverletzung: "you have so
        much pain inside yourself that you try and hurt yourself on the outside because you
        want help, but it's the wrong help you're asking for." (›Man hat so viel Schmerz in
        sich, dass man versucht, sich selbst von außen zu verletzen, weil man Hilfe will – aber
        es ist die falsche Hilfe, um die man bittet.‹)</p>
        <p class="vb-intro"><strong>c) Postnatale Depression nach der Geburt Prinz Williams:</strong>
        Diana litt nach der Geburt ihres ersten Sohnes an postnataler Depression – ein
        Zustand, den ihr Umfeld laut ihrer eigenen Aussage als Instabilität deutete, statt ihn
        als das zu behandeln, was er war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verharmlosung statt Fürsorge:</strong>
        Diana schilderte, aus dem Umfeld von Charles sei durchgeklungen, sie sei "again
        unstable and sick and should be put in a home of some sort ... I was almost an
        embarrassment" (›wieder instabil und krank und sollte irgendwo untergebracht werden
        ... ich war fast schon eine Peinlichkeit‹) – Pathologisierung statt Unterstützung.</p>
        <p class="vb-intro"><strong>b) 1992: die indirekte erste Öffnung:</strong>
        Mit Andrew Mortons Buch gelangten Bulimie, frühere Verzweiflungsmomente im Palast und
        Charles' Beziehung zu Camilla erstmals an die Öffentlichkeit – ohne dass Diana zu
        diesem Zeitpunkt offiziell als Quelle genannt wurde.</p>
        <p class="vb-intro"><strong>c) 1995: die eigene Stimme:</strong>
        Im BBC-Panorama-Interview mit Martin Bashir am 3. November 1995 sprach Diana erstmals
        selbst und direkt öffentlich über Bulimie, Selbstverletzung und die Ehe: "There were
        three of us in this marriage, so it was a bit crowded." (›Wir waren zu dritt in dieser
        Ehe, das war etwas eng.‹)</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein langer, nicht-linearer Weg aus der Krankheit:</strong>
        Ab Ende der 1980er-Jahre erhielt Diana Therapie; Rückfälle gehörten laut Berichten zu
        diesem Prozess dazu, bevor sich eine gewisse Stabilisierung einstellte.</p>
        <p class="vb-intro"><strong>b) Öffentliche Wirkung des Geständnisses:</strong>
        Das Panorama-Interview gilt bis heute als einer der Momente, die das öffentliche
        Sprechen über Essstörungen und psychische Erkrankungen in Großbritannien
        enttabuisierten – weit über den royalen Kontext hinaus.</p>
        <p class="vb-intro"><strong>c) Ein Kontext, der später selbst zum Thema wurde:</strong>
        2021 stellte der Dyson-Report fest, dass Martin Bashir das Interview durch gefälschte
        Dokumente erschlichen hatte – ein Umstand, der die Zustandekommen betrifft, nicht die
        inhaltliche Wahrhaftigkeit von Dianas eigenen Aussagen zu ihrer Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zäh unter der Oberfläche:</strong>
        Genau die SE4-typische Zähigkeit, mit der Diana das Leiden jahrelang allein austrug,
        machte es zugleich so schwer erkennbar für ein Umfeld, das lieber wegsah.</p>
        <p class="vb-intro"><strong>b) Verschärfung durch Camilla:</strong>
        Diana beschrieb selbst, dass sich sowohl Bulimie als auch Selbstverletzung
        verstärkten, wenn Charles die Beziehung zu Camilla wieder aufnahm – das Leiden als
        direkte Reaktion auf wiederholte emotionale Zurückweisung.</p>
        <p class="vb-intro"><strong>c) Die eigene Botschaft, endlich selbst ausgesprochen:</strong>
        Der Dreierflügel, der sonst Botschaften für andere trug, wandte sich 1995 der eigenen
        Geschichte zu – ein seltener Moment, in dem die öffentliche Bühne nicht der Imagepflege,
        sondern der eigenen Wahrheit diente.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Beginn im Moment größter Verunsicherung:</strong>
        Die Bulimie setzte laut Dianas eigener Schilderung genau in der Woche ein, in der sie
        in eine Welt aus Protokoll, Erwartung und einer Ehe mit einer dritten Person im
        Hintergrund eintrat.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre verborgene Erkrankung:</strong>
        Von 1981 bis zur ersten öffentlichen Andeutung 1992 und der direkten Aussage 1995
        zieht sich eine lange Linie aus stillem Leiden hinter der öffentlichen Fassade der
        Prinzessin.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, eine gemeinsame Wurzel:</strong>
        Bulimie und Selbstverletzung beschrieb Diana selbst als verwandte Ausdrucksformen
        desselben inneren Schmerzes – beide verstärkt durch dieselben Auslöser.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Essen und Körper?</strong>
        Für eine selbsterhaltende Vier, deren Instinkt auf das eigene Überleben und die
        eigene Stabilität gerichtet ist, liegt eine Deutung nahe: Ausgerechnet der Bereich, der
        am unmittelbarsten mit Selbstfürsorge und Selbsterhaltung verbunden ist, wurde zum Ort
        des Kontrollverlusts – während gleichzeitig, dank des Dreierflügels, öffentlich makellose
        Kontrolle demonstriert werden musste. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu Bulimie
        führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Dianas Fall zeigen lässt, ist ein Muster, das bei dem Bedürfnis, inneres
        Leiden hinter äußerer Stabilität zu verbergen, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Diana kannte ihr eigenes Muster nicht – die selbsterhaltende Vier mit Dreierflügel verbirgt inneren Schmerz hinter makelloser öffentlicher Erscheinung, und genau das ließ sie eine schwere Essstörung jahrelang verheimlichen, bevor sie sich 1995 selbst dazu bekannte. Wer das eigene Verbergungsmuster nicht kennt, trägt die Last allein, bis die Offenheit selbst zur befreienden Ausnahme wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Dianas</strong> Geschichte lässt sich die selbsterhaltende Vier mit
        Dreierflügel noch einmal in ihrer ganzen Zerrissenheit ablesen: ein über Jahre still
        ertragenes Leiden hinter makelloser öffentlicher Fassade, das erst spät und dann mit
        umso größerer Wirkung ausgesprochen wurde. Die Taube, die lange nur für andere
        Botschaften trug, bis sie 1995 begann, auch die eigene zu tragen. Diana starb 1997 bei
        einem Autounfall in Paris – ein Ereignis, das in keinem belegten Zusammenhang mit
        ihrer früheren Bulimie-Erkrankung steht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-lady-diana", label:"Porträt: Lady Diana (SE4w3) – Lebenswerk"},
        {route:"krankheitsportraets-adele", label:"Krankheitsporträt: Adele (SE4w3) – gleicher Subtyp"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Krankheitsporträt: Honoré de Balzac (SE4w3) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function ludwigXIVKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-xiv-portrait.jpg" alt="Ludwig XIV." class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig XIV. – der Sonnenkönig</p>
        <p class="krim-portrait-typ">SO3w2 · Sozialer Typ 3 mit Zweierflügel · 1638–1715</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ludwig XIV.</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-xiv">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Selbstinszenierung als Sonnenkönig
        und den Bau von Versailles. Diese Seite vertieft ein Kapitel, das dort nur am Rande
        erwähnt wird: Jahrzehnte chronischer Gicht, eine 1686 unter strengster Geheimhaltung
        durchgeführte Operation an einer Analfistel, und einen letzten Kampf gegen Wundbrand,
        an dem er 1715 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ludwig XIV.</strong> ist dem <strong>sozialen Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die soziale Drei lebt für das makellose, öffentlich sichtbare Bild; der
        Zweierflügel bindet Gunst und Nähe als Machtinstrument ein. Genau diese Notwendigkeit
        eines makellosen Bildes bestimmte auch, wie er mit seiner eigenen, jahrzehntelangen
        Krankengeschichte umging – nicht offen, sondern hinter den Kulissen des
        Hofzeremoniells verborgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Gichtanfälle bereits in mittleren Jahren:</strong>
        Ludwig litt schon seit seinen Vierzigern wiederkehrend an schmerzhaften Gichtanfällen,
        die zeitweise sein Gehen erheblich einschränkten – ein Zustand, der ihn über
        Jahrzehnte begleitete.</p>
        <p class="vb-intro"><strong>b) Zahnprobleme mit fatalen Folgen:</strong>
        1685 ließ er sich sämtliche Oberkieferzähne entfernen; eine misslungene Behandlung
        riss dabei ein Loch in seinen Gaumen, das erst nach mehreren schmerzhaften
        Nachoperationen mit einem glühenden Eisen geschlossen werden konnte.</p>
        <p class="vb-intro"><strong>c) Eine Analfistel, die zum Staatsgeheimnis wurde:</strong>
        1686 diagnostizierten seine Ärzte eine schmerzhafte Analfistel – ein Leiden, das
        strikt vor der Öffentlichkeit verborgen blieb, obwohl es sein Sitzen und Reiten
        zunehmend beeinträchtigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die „Grande Opération" im November 1686:</strong>
        Der königliche Chirurg Charles-François Félix führte die bis dahin riskante Operation
        ohne Betäubung durch – Ludwig soll währenddessen kaum einen Laut von sich gegeben
        haben, um seine Fassung vor den anwesenden Höflingen zu wahren.</p>
        <p class="vb-intro"><strong>b) Genesung unter strengster Geheimhaltung:</strong>
        Die wochenlange, schmerzhafte Genesungsphase fand weitgehend unter Ausschluss der
        Öffentlichkeit statt; offizielle Verlautbarungen sprachen bewusst vage von
        „gesundheitlichen Beschwerden".</p>
        <p class="vb-intro"><strong>c) Rückkehr zum vollen Hofzeremoniell trotz Schmerzen:</strong>
        Kaum genesen, nahm Ludwig seine öffentlichen Auftritte, das tägliche Lever und Coucher,
        umgehend wieder in vollem Umfang auf – als sei nichts geschehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelange Fortführung trotz fortschreitender Gicht:</strong>
        Bis ins hohe Alter ließ sich Ludwig, wenn nötig, in einem Rollstuhl oder auf einer
        Sänfte zu öffentlichen Anlässen tragen, statt Auftritte ganz abzusagen.</p>
        <p class="vb-intro"><strong>b) Straffe Weiterführung der Regierungsgeschäfte:</strong>
        Auch in Phasen starker körperlicher Beeinträchtigung leitete er weiterhin täglich
        Ministerräte und Audienzen – ein Rückzug aus der aktiven Regierungsführung kam für ihn
        nicht infrage.</p>
        <p class="vb-intro"><strong>c) Wundbrand im rechten Bein ab August 1715:</strong>
        Wenige Tage vor seinem Tod diagnostizierten die Ärzte einen fortschreitenden Wundbrand
        im Bein – eine Amputation, wie sie später Standard wurde, lehnten die behandelnden
        Ärzte der Zeit als zu riskant ab.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Hof, der von der Krankheit kaum etwas erfuhr:</strong>
        Selbst enge Höflinge erfuhren oft erst im Nachhinein, wie ernst Ludwigs Leiden
        tatsächlich gewesen war – das öffentliche Bild des makellosen Sonnenkönigs blieb bis
        zuletzt weitgehend intakt.</p>
        <p class="vb-intro"><strong>b) Eine letzte Rede an den Urenkel als Nachfolger:</strong>
        Auf dem Sterbebett richtete er eine seltene, fast selbstkritische Mahnung an den
        fünfjährigen Ludwig XV., nicht seinem Beispiel im übertriebenen Bauen und
        Kriegführen zu folgen.</p>
        <p class="vb-intro"><strong>c) Tod am 1. September 1715 in Versailles:</strong>
        Ludwig starb im Alter von 76 Jahren nach 72 Regierungsjahren – länger als jeder andere
        Monarch der europäischen Geschichte, in genau jenem Schloss, das er zum Symbol seiner
        eigenen Unangreifbarkeit gemacht hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Fassade, die keinen Riss zeigen durfte:</strong>
        Dieselbe Notwendigkeit, stets das makellose Bild des Sonnenkönigs zu wahren, die
        Ludwigs gesamte Selbstinszenierung prägte, bestimmte auch, wie konsequent er seine
        eigenen Leiden vor der Öffentlichkeit verbarg.</p>
        <p class="vb-intro"><strong>b) Kontrolle über die eigene Krankengeschichte als letzte Bühne:</strong>
        Selbst die Operation von 1686 – eine der intimsten und schmerzhaftesten Erfahrungen
        seines Lebens – wurde zu einem Vorgang, den er mit derselben disziplinierten
        Beherrschung durchstand, mit der er auch öffentliche Auftritte kontrollierte: kein
        Laut, kein sichtbarer Zusammenbruch vor den anwesenden Höflingen.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug aus der Rolle bis zum letzten Atemzug:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es bei Ludwig
        keine Phase des offenen Rückzugs aus der Öffentlichkeit – die Rolle des Sonnenkönigs
        wurde bis zum Sterbebett aufrechterhalten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich der Inszenierung widersetzte:</strong>
        Ludwigs gesamtes Leben war von der Überzeugung geprägt, dass ein makelloses,
        kontrolliertes Bild jede Situation beherrschbar macht – Gicht, Analfistel und
        schließlich Wundbrand waren Bedrohungen, die sich dieser Kontrolle zunehmend
        entzogen.</p>
        <p class="vb-intro"><strong>b) Geheimhaltung als Fortsetzung der Selbstinszenierung:</strong>
        Ein Mann, der sein ganzes Leben als öffentliches Schauspiel gestaltete, behandelte
        ausgerechnet seine intimsten körperlichen Leiden als das Einzige, das der
        Öffentlichkeit vorenthalten blieb – eine bewusste Lücke in einem sonst lückenlos
        inszenierten Leben.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Bein?</strong>
        Für eine soziale Drei mit Zweierflügel, deren gesamte Macht auf Bewegung, Auftritt und
        physischer Präsenz vor Publikum beruhte, liegt eine Deutung nahe: Ausgerechnet jenes
        Körperteil, das ihn zu Fuß durch Versailles, auf die Jagd und zu öffentlichen
        Zeremonien trug, wurde zum Schauplatz des Verfalls – und beraubte ihn in seinen
        letzten Tagen genau jener Mobilität, die sein gesamtes öffentliches Selbstbild trug.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Gicht oder
        Wundbrand führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Ludwigs Fall zeigen lässt, ist ein Muster im Umgang mit
        chronischer Krankheit, das bei einer ausgeprägten sozialen Drei mit Zweierflügel immer
        wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ludwig kannte sein eigenes Muster nicht – die soziale Drei mit Zweierflügel begegnet
        jeder Bedrohung des eigenen Bildes reflexhaft mit Geheimhaltung und makelloser Fassade,
        statt Schwäche je offen zuzulassen, und genau dieses Muster lebte er bis in seine
        letzten Lebenstage unverändert aus. Wer die eigene Notwendigkeit, stets makellos zu
        erscheinen, nicht als Muster erkennt, kann sie auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Zweierflügel erklärt bei <strong>Ludwig XIV.</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Macht auf einem
        makellosen, öffentlich sichtbaren Bild beruhte, verwandelte selbst seine intimsten
        Leiden in eine streng kontrollierte Kulisse – bis das Bein, das ihn sein Leben lang
        durch Versailles getragen hatte, ihm am Ende die letzte Bühne selbst verwehrte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ludwig-xiv", label:"Porträt: Ludwig XIV. (SO3w2) – der Sonnenkönig"},
        {route:"krankheitsportraets-dmitri-hvorostovsky", label:"Krankheitsporträt: Dmitri Hvorostovsky (SO3w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function michaelJacksonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-jackson-portrait.jpg" alt="Michael Jackson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Jackson</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel · 1958–2009</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Jackson</strong> hat bereits ein
        <a href="javascript:void(0)" data-route="beruehmte-michael-jackson">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass – dort geht es um sein Lebenswerk und seine Typstruktur, einschließlich
        eines kurzen Hinweises auf Vitiligo und den Tod durch Propofol. Diese Seite vertieft genau
        diese Kette: eine Brandverletzung 1984, die zum Ausgangspunkt eines jahrzehntelangen
        Schmerzmittel- und Schlafmittelkonsums wurde und ihn schließlich das Leben kostete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jackson</strong> ist der <strong>sozialen Vier mit Dreierflügel</strong>
        zugeordnet. Die SO4 gilt als Verstärkungstyp der Vier: Die Leidenschaft des
        Neids wird nach innen gewendet und zu Scham – einem tiefen Mangelbewusstsein, das sich am
        eigenen äußeren Bild festmacht. Der Dreierflügel liefert Bühnenpräsenz und Perfektionismus,
        der keinen sichtbaren Makel duldet – ein Muster, das sich bis in seinen Umgang mit
        chronischem Schmerz und Schlaflosigkeit nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Unfall vor laufenden Kameras:</strong>
        Am 27. Januar 1984 fingen bei Dreharbeiten zu einem Pepsi-Werbespot Funken einer
        Pyrotechnik-Effekte Jacksons Haar Feuer. Er erlitt Verbrennungen zweiten und dritten
        Grades an der Kopfhaut, die mehrere Operationen erforderlich machten.</p>
        <p class="vb-intro"><strong>b) Der Beginn der Schmerzmittelgabe:</strong>
        Zur Behandlung der Verbrennungsschmerzen und der folgenden Operationen wurden ihm starke
        Opioid-Schmerzmittel verschrieben – nach übereinstimmenden späteren Berichten aus seinem
        Umfeld der erste Kontakt mit einer Substanzklasse, die ihn bis zu seinem Tod begleitete.</p>
        <p class="vb-intro"><strong>c) Auftreten trotz Schmerzen als Norm:</strong>
        Schon kurz nach dem Unfall kehrte Jackson auf die Bühne zurück, mit sichtbaren
        Kopfhautverletzungen unter Perücke und Make-up verborgen – ein früher Beleg für ein
        Muster, das sein gesamtes späteres Leben prägte: Schmerz wurde nicht gezeigt, sondern
        überspielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Vitiligo als zusätzliche, verschwiegene Belastung:</strong>
        Parallel zu den Schmerzmittelgaben verschlechterte sich ab Mitte der 1980er-Jahre
        zunehmend seine durch Vitiligo fleckig gewordene Haut – eine Autoimmunerkrankung, die
        Pigmentzellen zerstört. Jackson bedeckte die betroffenen Stellen jahrelang mit
        Make-up, bevor er die Diagnose 1993 gegenüber Oprah Winfrey öffentlich machte.</p>
        <p class="vb-intro"><strong>b) Chronische Schlaflosigkeit als eigenständiges Leiden:</strong>
        Ab den 1990er-Jahren berichteten Ärzte, Mitarbeiter und spätere Gerichtsdokumente
        übereinstimmend von einer schweren, therapieresistenten Schlaflosigkeit, die Jackson
        über Jahre hinweg begleitete und die er mit immer stärkeren Mitteln zu bekämpfen
        versuchte.</p>
        <p class="vb-intro"><strong>c) Propofol als Schlafmittel außerhalb jeder medizinischen Norm:</strong>
        Propofol ist ein starkes Narkosemittel, das ausschließlich unter intensivmedizinischer
        Überwachung eingesetzt werden darf – niemals als Schlafmittel im häuslichen Umfeld. Nach
        Zeugenaussagen im späteren Gerichtsverfahren erhielt Jackson es dennoch über Monate
        nächtlich verabreicht, um überhaupt einschlafen zu können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die letzten Vorbereitungen für This Is It:</strong>
        In den Wochen vor seinem Tod probte Jackson intensiv für seine geplante fünfzigteilige
        Comeback-Konzertreihe <em>This Is It</em> in London – trotz zunehmender körperlicher
        Erschöpfung, die Mitarbeiter der Produktion in mehreren späteren Aussagen beschrieben.</p>
        <p class="vb-intro"><strong>b) Der 25. Juni 2009:</strong>
        Sein Leibarzt Conrad Murray verabreichte Jackson in den frühen Morgenstunden Propofol
        gegen die anhaltende Schlaflosigkeit. Jackson erlitt einen akuten Herzstillstand und
        konnte nicht wiederbelebt werden. Er starb im Alter von 50 Jahren, wenige Wochen vor
        dem geplanten Konzertstart.</p>
        <p class="vb-intro"><strong>c) Ein Prozess, der das Ausmaß offenlegte:</strong>
        Conrad Murray wurde 2011 wegen fahrlässiger Tötung verurteilt. Die Gerichtsverhandlung
        legte detailliert offen, wie weit die häusliche Propofol-Gabe von jedem medizinischen
        Standard entfernt war und wie lange dieses Muster bereits bestanden hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Kette, die 1984 begann:</strong>
        Von der ersten Opioid-Verschreibung nach dem Pepsi-Unfall bis zur tödlichen
        Propofol-Gabe 2009 liegen fünfundzwanzig Jahre, in denen sich der Umgang mit Schmerz
        und Schlaflosigkeit schrittweise zu einer lebensgefährlichen Abhängigkeit von
        verschreibungspflichtigen Substanzen entwickelte.</p>
        <p class="vb-intro"><strong>b) Zwei parallele Baustellen am eigenen Körper:</strong>
        Vitiligo veränderte sichtbar, wie Jackson aussah; die Medikamentenabhängigkeit
        veränderte unsichtbar, wie sein Körper funktionierte. Beide Prozesse liefen über
        Jahrzehnte parallel, beide wurden von Jackson lange verborgen, bis die
        Öffentlichkeit sie erzwang oder ein Gerichtsverfahren sie aufdeckte.</p>
        <p class="vb-intro"><strong>c) Arbeit bis zur physischen Grenze:</strong>
        Selbst in den letzten Lebenswochen, körperlich erschöpft und auf Propofol angewiesen,
        um überhaupt zu schlafen, hielt Jackson an den Proben für sein Comeback fest – ein
        Muster, das sich bereits 1984 zeigte, als er kurz nach dem Unfall wieder auf die
        Bühne zurückkehrte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Gürteltier, das den Schmerz hinter der Bühne verbarg:</strong>
        Wie er 1993 zunächst die Vitiligo-Flecken hinter Make-up verbarg, verbarg Jackson auch
        die zunehmende Abhängigkeit von Schmerz- und Schlafmitteln hinter der makellosen
        Fassade des Auftritts – bis beides irgendwann nicht mehr zu verbergen war.</p>
        <p class="vb-intro"><strong>b) Perfektion als Antrieb bis zuletzt:</strong>
        Die Probenprotokolle der letzten Wochen zeigen einen Künstler, der trotz sichtbarer
        Erschöpfung an höchsten eigenen Ansprüchen festhielt – der Dreierflügel, der
        Leistung liefert, auch wenn der Körper längst Alarm schlägt.</p>
        <p class="vb-intro"><strong>c) Abhängigkeit von genau jenen, die schützen sollten:</strong>
        Die häusliche Propofol-Gabe erfolgte durch einen von Jackson selbst engagierten Arzt –
        ein Muster, in dem Nähe und Vertrauen zur Gefahr wurden, weil die Bedürftigkeit nach
        Linderung größer war als jede Vorsicht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Von der sichtbaren zur unsichtbaren Verletzung:</strong>
        Die Brandverletzung von 1984 war öffentlich sichtbar, wurde behandelt und verheilte. Die
        daraus entstandene Medikamentenabhängigkeit blieb über fünfundzwanzig Jahre weitgehend
        unsichtbar – bis zum Tod selbst.</p>
        <p class="vb-intro"><strong>b) Fünfundzwanzig Jahre zwischen Auslöser und Tod:</strong>
        Vom Pepsi-Unfall 1984 bis zu seinem Tod 2009 lebte Jackson ein Vierteljahrhundert mit
        einem Krankheitsverlauf, der nie in einer einzigen Diagnose zusammengefasst wurde, sondern
        sich schrittweise aus Schmerzbehandlung, Schlaflosigkeit und immer stärkeren Mitteln
        zusammensetzte.</p>
        <p class="vb-intro"><strong>c) Verbergen statt Konfrontation als durchgehendes Muster:</strong>
        Anders als Ludwig van Beethoven (SX6w5) oder Friedrich Schiller (SX6w5), die ihrer
        Krankheit mit offener Konfrontation begegneten, oder Franz Schubert (SE6w5), der sich
        zunehmend zurückzog, verbarg Jackson – ganz wie sein SO3w4-Pendant Karl Lagerfeld –
        seine Abhängigkeit hinter einer makellosen öffentlichen Fassade, bis der Körper keine
        weitere Verbergung mehr zuließ.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Haut und Schlaf?</strong>
        Für eine soziale Vier, deren gesamtes Selbstbild an der eigenen äußeren Erscheinung
        hängt, liegt eine Deutung nahe: Ausgerechnet die Haut – das sichtbarste aller Organe –
        und der Schlaf – der Zustand, in dem keine Kontrolle über das eigene Bild mehr möglich
        ist – wurden zum Schauplatz eines Kampfes, den Jackson nie öffentlich austrug, sondern
        hinter geschlossenen Türen zu bewältigen versuchte. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Medikamentenabhängigkeit
        oder Hauterkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Jacksons Fall zeigen lässt, ist ein Muster,
        das bei dem Bedürfnis, ein makelloses äußeres Bild um jeden Preis aufrechtzuerhalten, in
        der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Jackson kannte sein eigenes Muster nicht – die soziale Vier mit Dreierflügel hält das eigene Bild um jeden Preis makellos, auch gegenüber sich selbst, und genau das ließ ihn eine fünfundzwanzigjährige Abhängigkeit hinter genau diesem Bild verbergen, statt sich offen Hilfe zu holen. Wer das eigene Bedürfnis nach einem makellosen Bild nicht als Muster erkennt, opfert diesem Bild am Ende die eigene Gesundheit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Jacksons</strong> soziale Vier mit
        Dreierflügel noch einmal ablesen: eine Brandverletzung, die zum Ausgangspunkt einer
        fünfundzwanzigjährigen, weitgehend verborgenen Abhängigkeit wurde, überlagert von einer
        ebenfalls verheimlichten Hautkrankheit – bis am 25. Juni 2009 beides zusammen keine
        weitere Verbergung mehr zuließ. Das Gürteltier, das seine Rüstung bis zuletzt trug –
        glänzend, unangreifbar nach außen, und innen zunehmend erschöpft von einem Kampf, den
        kaum jemand sah.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-michael-jackson", label:"Porträt: Michael Jackson (SO4w3) – Lebenswerk"},
        {route:"krankheitsportraets-romy-schneider", label:"Krankheitsporträt: Romy Schneider (SO4w3)"},
        {route:"krankheitsportraets-hans-christian-andersen", label:"Krankheitsporträt: Hans Christian Andersen (SO4w3) – dieselbe Verbergungsstrategie"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – dieselbe Verbergungsstrategie"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Krankheitsporträt: Ludwig van Beethoven (SX6w5) – Gegenmodell: offene Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function nataschaKampuschKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-natascha-kampusch-portrait.jpg" alt="Natascha Kampusch" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Natascha Kampusch</p>
        <p class="krim-portrait-typ">SE2w1 · Selbsterhaltender Typ 2 mit Einserflügel · geb. 1988</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Natascha Kampusch</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-natascha-kampusch">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihren Überlebensweg während der
        achtjährigen Gefangenschaft und ihre Typstruktur im Allgemeinen. Diese Seite vertieft ein
        Kapitel, das dort noch nicht behandelt wird: die posttraumatische Belastungsstörung als
        langfristige Folge, und ein schwerer psychischer Zusammenbruch, über den ihre Familie
        erst zwanzig Jahre nach ihrer Befreiung öffentlich sprach.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kampusch</strong> ist dem <strong>selbsterhaltenden Typ 2 mit Einserflügel</strong>
        zugeordnet. Die SE2 sichert unter Bedrohung ihr Überleben durch Anpassung an die
        emotionale Verfassung der mächtigeren Person; der Einserflügel bringt Disziplin und
        selbst auferlegte Struktur als inneren Halt hinzu. Genau dieses Muster – nach außen
        funktionieren, während im Inneren ein enormer Druck weiterwirkt – prägt auch den
        Verlauf ihrer psychischen Gesundheit weit über das Ende der Gefangenschaft hinaus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Acht Jahre extremer Isolation im Kindes- und Jugendalter:</strong>
        Kampusch wurde 1998 im Alter von zehn Jahren entführt und bis 2006 in einem etwa fünf
        Quadratmeter kleinen, fast luftdichten Kellerverlies gefangen gehalten – eine
        Extremsituation genau in den Jahren, die für die psychische Entwicklung eines Kindes
        entscheidend sind.</p>
        <p class="vb-intro"><strong>b) Der Suizid des Täters unmittelbar nach der Flucht:</strong>
        Am Tag ihrer Flucht, dem 23. August 2006, nahm sich ihr Entführer Wolfgang Priklopil das
        Leben – Kampusch verlor damit von einem Tag auf den anderen die einzige Bezugsperson,
        an deren emotionale Verfassung ihr eigenes Überleben acht Jahre lang gekoppelt gewesen
        war.</p>
        <p class="vb-intro"><strong>c) Ein sofortiger Medienrummel ohne Übergangszeit:</strong>
        Direkt nach der Befreiung sah sich Kampusch einem intensiven internationalen
        Medieninteresse ausgesetzt – ohne die Zeit und den geschützten Rahmen, den eine
        Verarbeitung eines derartigen Traumas eigentlich erfordert hätte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Posttraumatische Belastungsstörung als dokumentierte Diagnose:</strong>
        Zu den bekannten psychischen Folgen ihrer Gefangenschaft zählen eine posttraumatische
        Belastungsstörung, soziale Isolation sowie wiederkehrende Angstzustände und
        Depressionen.</p>
        <p class="vb-intro"><strong>b) Psychotherapie als kontinuierlicher Bestandteil ihres Lebens:</strong>
        Kampusch nahm nach ihrer Befreiung psychotherapeutische Begleitung in Anspruch – ein
        fortlaufender Prozess, der öffentlich kaum thematisiert wurde, während gleichzeitig ihr
        äußeres Funktionieren als Autorin und öffentliche Stimme im Vordergrund stand.</p>
        <p class="vb-intro"><strong>c) Öffentliches Funktionieren bei gleichzeitig fortbestehender innerer Belastung:</strong>
        Über viele Jahre gelang es Kampusch, als Autorin, Moderatorin und Aktivistin öffentlich
        aufzutreten, während die psychischen Folgen der Gefangenschaft im Hintergrund
        weiterwirkten – ein Auseinanderklaffen von äußerer Funktionsfähigkeit und innerer
        Belastung, das erst Jahrzehnte später sichtbar wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein schwerer psychischer Zusammenbruch, öffentlich bekannt gemacht durch die Familie:</strong>
        Rund zwei Jahrzehnte nach ihrer Befreiung machte Kampuschs Familie öffentlich, dass sie
        einen schweren Zusammenbruch erlitten habe – ein seltener Schritt, der die bis dahin
        weitgehend private psychische Gesundheitsgeschichte erstmals in vollem Ausmaß ans Licht
        brachte.</p>
        <p class="vb-intro"><strong>b) „Meist in einer eigenen Welt" – die Beschreibung ihrer Schwester:</strong>
        Kampuschs Schwester Claudia Nestelberger beschrieb den Zustand mit den Worten, Natascha
        befinde sich „meist in einer eigenen Welt" und habe sich vollständig zurückgezogen – eine
        Beschreibung, die die Familie selbst als eine Art neuerliche Gefangenschaft einordnete.</p>
        <p class="vb-intro"><strong>c) Eine Dokumentation als bewusster Schritt zur Aufklärung:</strong>
        Die Familie entschied sich, im Rahmen einer ORF-Dokumentation des Journalisten Christoph
        Feurstein („Natascha Kampusch – Gefangen in Freiheit") offen über die Ursachen des
        Zusammenbruchs zu sprechen – in der Hoffnung, damit Verständnis für ihre Situation zu
        schaffen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Trauma, das nicht mit der Befreiung endete:</strong>
        Kampuschs Fall zeigt exemplarisch, dass die eigentliche psychische Verarbeitung eines
        Extremtraumas oft erst lange nach dem äußeren Ende der Bedrohung beginnt – und
        Jahrzehnte andauern kann, weit über den Moment der physischen Rettung hinaus.</p>
        <p class="vb-intro"><strong>b) Die Familie als späte, aber wichtige Stimme:</strong>
        Anders als in den ersten Jahren nach ihrer Befreiung, in denen Kampusch selbst die
        Deutungshoheit über ihre Geschichte behielt, übernahm nun ihre Familie die
        Öffentlichkeitsarbeit – ein Zeichen dafür, wie sehr sich ihr Zustand verändert hatte.</p>
        <p class="vb-intro"><strong>c) Ein Bild, das dem öffentlichen Narrativ der „starken Überlebenden" widerspricht:</strong>
        Jahrelang wurde Kampusch vor allem als Symbol für Widerstandskraft und Selbstbestimmung
        wahrgenommen; der 2026 öffentlich gewordene Zusammenbruch erweitert dieses Bild um eine
        Realität, die viele Betroffene von Extremtraumata teilen: Stärke und anhaltendes Leiden
        schließen einander nicht aus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Flusspferd, das lange unter der Oberfläche funktionierte:</strong>
        Wie das Flusspferd, das den Großteil seines Lebens unsichtbar unter Wasser verbringt,
        hielt Kampusch über Jahre eine äußerlich funktionierende, öffentlich sichtbare Existenz
        aufrecht – während das eigentliche Ausmaß ihrer inneren Belastung verborgen blieb.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und der lange Kampf um Struktur:</strong>
        Dieselbe Selbstdisziplin, die ihr während der Gefangenschaft half, Verstand und
        Identität zu bewahren, ermöglichte ihr über Jahre auch nach der Befreiung ein
        funktionierendes öffentliches Leben – bis diese selbst auferlegte Struktur unter der
        Last des unverarbeiteten Traumas schließlich zusammenbrach.</p>
        <p class="vb-intro"><strong>c) Rückzug als letzte verbliebene Schutzstrategie:</strong>
        Der von ihrer Schwester beschriebene Rückzug „in eine eigene Welt" liest sich als
        Wiederkehr desselben Überlebensmechanismus, der sie einst durch die Gefangenschaft
        trug: sich in einen inneren, geschützten Raum zurückzuziehen, wenn die äußere Welt
        nicht mehr zu bewältigen ist.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Von der äußeren Gefangenschaft zur inneren:</strong>
        Der Ausdruck ihrer Familie, Kampusch befinde sich erneut „in einer Art Gefangenschaft",
        schließt den Kreis auf erschütternde Weise: Die äußere Gefangenschaft endete 2006, doch
        das seelische Muster, unter extremem Druck den Rückzug in einen abgeschotteten
        Innenraum zu suchen, kehrte zwei Jahrzehnte später in veränderter Form zurück.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Greta Thunberg:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-greta-thunberg">Greta Thunberg (ebenfalls SE2w1)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren psychische
        Krisengeschichte ein verwandtes Muster zeigt: eine selbsterhaltende Zwei mit
        Einserflügel, die unter extremem inneren Druck – bei Thunberg im Kindesalter durch eine
        schwere depressive Episode mit selektivem Mutismus, bei Kampusch durch die Spätfolgen
        jahrelanger Gefangenschaft – den Rückzug in eine eigene, von außen kaum zugängliche
        Welt sucht. Bei beiden wird dieser Rückzug erst durch nahestehende Menschen (bei
        Thunberg die Eltern, bei Kampusch ihre Schwester) öffentlich sichtbar gemacht.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet ein Rückzug in eine eigene Welt, bei einer Frau, die jahrelang für Offenheit über ihr Trauma stand?</strong>
        Für eine selbsterhaltende Zwei mit Einserflügel, deren öffentliche Rolle jahrelang auf
        Kontrolle über die eigene Erzählung und Struktur beruhte, liegt eine Deutung nahe:
        Ausgerechnet dort, wo diese Kontrolle und Struktur nicht mehr aufrechtzuerhalten sind,
        bricht dieselbe innere Zuflucht durch, die einst unter Zwang – im Kellerverlies –
        entstanden war. Diese Deutung ist eine plausible Interpretation, kein belegter
        medizinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu einem
        späten psychischen Zusammenbruch nach einem Trauma führt – <strong>jeder Mensch kann
        nach einem Extremtrauma jede Form psychischer Erkrankung entwickeln, unabhängig vom
        Subtyp.</strong> Was sich an Kampuschs Fall zeigen lässt, ist ein Muster im Umgang mit
        unverarbeitetem Trauma, das bei einer ausgeprägten selbsterhaltenden Zwei mit
        Einserflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Kampusch ihr eigenes Enneagramm-Muster je bewusst kannte.
        Über Jahre hielt sie an der Rolle der kontrollierten, funktionierenden Überlebenden
        fest – eine Rolle, die ihrem SE2w1-Muster zutiefst entsprach, aber auch verhinderte,
        dass die eigentliche innere Erschöpfung rechtzeitig erkannt und behandelt wurde. Wer
        das eigene Bedürfnis, unter allen Umständen zu funktionieren, nicht als eigenes Muster
        erkennt, riskiert, dass der Zusammenbruch, den man vermeiden wollte, sich am Ende umso
        gewaltiger Bahn bricht.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am langfristigen Verlauf ihrer psychischen Gesundheit lässt sich <strong>Kampuschs</strong>
        selbsterhaltende Zwei mit Einserflügel noch einmal ablesen: Jahrelanges, diszipliniertes
        Funktionieren nach außen, während im Inneren ein Trauma weiterwirkte, das erst zwei
        Jahrzehnte später in voller Wucht sichtbar wurde. Das Flusspferd, das so lange wie
        möglich unter der Wasseroberfläche blieb – bis selbst diese letzte Form von Kontrolle
        nicht mehr ausreichte, um das zu tragen, was darunter lag.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-natascha-kampusch", label:"Porträt: Natascha Kampusch (SE2w1) – Überlebensweg"},
        {route:"krankheitsportraets-greta-thunberg", label:"Krankheitsporträt: Greta Thunberg (SE2w1)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function oshoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-osho-portrait.jpg" alt="Osho" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Osho</p>
        <p class="krim-portrait-typ">SE3w4 · Selbsterhaltender Typ 3 mit Viererflügel · 1931–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Osho</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-osho">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        Kette chronischer Beschwerden, eine zwölftägige Haft in den USA 1985 und eine bis
        heute ungeklärte Kontroverse um seinen Tod 1990.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Osho</strong> ist der <strong>selbsterhaltenden Drei mit Viererflügel</strong>
        zugeordnet. Die SE3 richtet den Erfolgsanspruch der Drei auf das eigene, konkrete
        Funktionieren und die materielle Absicherung des eigenen Umfelds. Der Viererflügel
        bringt eine ausgeprägte Neigung zur Dramatisierung und Bedeutungsaufladung des
        eigenen Erlebens hinzu – ein Muster, das sich deutlich in der Art zeigt, wie Osho sein
        eigenes Leiden öffentlich einordnete und deutete, statt es zu verschweigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Das eigene Leiden als öffentliche Erzählung:</strong>
        Anders als Betroffene, die ihre Erkrankung verschweigen, machte Osho seinen
        körperlichen Verfall selbst zum Thema seiner Diskurse – eine für die SE3w4 typische
        Verbindung aus Funktionsanspruch und dramatischer Sinnzuschreibung.</p>
        <p class="vb-intro"><strong>b) Funktionieren trotz chronischer Beschwerden:</strong>
        Über Jahre hinweg hielt Osho trotz Diabetes, Asthma und starker Rückenschmerzen ein
        intensives Vortrags- und Reisepensum aufrecht. Als er 1981 seinen indischen Ashram
        verließ und in die USA übersiedelte, wo bald darauf die Kommune Rajneeshpuram in
        Oregon entstand, wurde die Hoffnung auf bessere medizinische Versorgung explizit als
        einer der Gründe für diesen Schritt genannt.</p>
        <p class="vb-intro"><strong>c) Rückzug erst, als kein Funktionieren mehr möglich war:</strong>
        Erst ab 1988 verengten sich seine Diskurse zunehmend, im April 1989 hielt er seinen
        letzten öffentlichen Vortrag – ein später, fast widerstrebender Rückzug aus der
        aktiven Rolle.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Chronische Beschwerden seit den frühen 1970er-Jahren:</strong>
        Während seiner Zeit in Bombay entwickelten sich bei Osho Diabetes, Asthma und diverse
        Allergien, verstärkt durch das feuchte Klima – dazu kamen chronische
        Rückenschmerzen, Erschöpfung und Schlaflosigkeit.</p>
        <p class="vb-intro"><strong>b) Verhaftung im Oktober 1985:</strong>
        Im Zuge der Auflösung seiner Kommune Rajneeshpuram in Oregon wurde Osho am 28.
        Oktober 1985 in North Carolina festgenommen und über rund zwölf Tage durch mehrere
        Gefängnisse transportiert, bevor er gegen eine Kaution von 500.000 Dollar
        freikam und aus den USA ausgewiesen wurde.</p>
        <p class="vb-intro"><strong>c) Neue Symptome nach der Rückkehr nach Indien:</strong>
        Nach seiner Rückkehr Ende 1985 berichtete Osho über Appetitlosigkeit, Übelkeit und
        ein Gefühl der Erschöpfung, das er selbst und sein engstes Umfeld nicht mehr auf die
        früheren chronischen Beschwerden zurückführten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Vergiftungsthese:</strong>
        Oshos persönliche Ärzte und sein Umfeld vermuteten öffentlich eine
        Thallium-Vergiftung während der Haft, möglicherweise über eine bestrahlte Matratze.
        Unabhängige toxikologische Beweise dafür wurden nie vorgelegt; ein US-Anwalt
        bezeichnete die Behauptung als reine Fiktion.</p>
        <p class="vb-intro"><strong>b) Ein kontinuierlicher Verfall ohne unabhängig dokumentierte Diagnose:</strong>
        Zwischen 1987 und 1990 verschlechterte sich Oshos Gesundheitszustand nach
        übereinstimmenden Berichten seines Umfelds kontinuierlich – belastbare, unabhängige
        Arztberichte aus dieser Zeit sind öffentlich nicht zugänglich.</p>
        <p class="vb-intro"><strong>c) Rückzug auf das reine Zusammensein:</strong>
        Nach seinem letzten Diskurs im April 1989 saß Osho nur noch schweigend mit seinen
        Anhängern zusammen, ohne weitere Vorträge zu halten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 19. Januar 1990:</strong>
        Osho starb im Ashram in Pune, Indien, im Alter von 58 Jahren. Die Ärzte nannten
        Herzversagen als Todesursache.</p>
        <p class="vb-intro"><strong>b) Eine Todeserklärung, die die Vergiftungsthese aufgriff:</strong>
        Der Ashram selbst rahmte den Tod in seiner offiziellen Erklärung als Spätfolge der
        vermuteten Vergiftung – eine Deutung, die bis heute nicht unabhängig bestätigt ist.</p>
        <p class="vb-intro"><strong>c) Spätere, ebenfalls ungeklärte Gegenvorwürfe:</strong>
        Jahre später äußerten unter anderem der Journalist Abhay Vaidya und ein beteiligter
        Arzt den Verdacht, Osho sei in seinen letzten Stunden vom Kontakt zu unabhängigen
        Ärzten abgeschirmt worden – auch diese Vorwürfe blieben ohne forensische Klärung, es
        ist zudem nicht dokumentiert, ob überhaupt eine Autopsie stattfand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die eigene Krankheitsgeschichte als letztes großes Narrativ:</strong>
        Statt sein Leiden zu verbergen, verwandelte Osho es in eine öffentliche Erzählung von
        Verfolgung und Widerstand – eine für die SE3w4 charakteristische Verschmelzung von
        Selbstdarstellung und persönlichem Drama.</p>
        <p class="vb-intro"><strong>b) Funktionsfähigkeit bis zur letzten möglichen Grenze:</strong>
        Auch mit fortschreitendem Verfall hielt Osho so lange wie irgend möglich an seiner
        Rolle als Sprecher fest, bevor er sie erst 1989 endgültig aufgab.</p>
        <p class="vb-intro"><strong>c) Der Waschbär, der sein Revier bis zuletzt selbst gestaltete:</strong>
        Selbst die Deutung des eigenen körperlichen Verfalls blieb bis zum Tod Teil seines
        eigenen Narrativs – kein passives Erleiden, sondern eine aktiv mitgeprägte Erzählung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine chronische Vorgeschichte seit den frühen 1970ern:</strong>
        Diabetes, Asthma und Rückenschmerzen begleiteten Osho fast zwei Jahrzehnte, bevor sie
        1985 durch die Haft eine dramatische neue Wendung erhielten.</p>
        <p class="vb-intro"><strong>b) Ein Wendepunkt, dessen Ursache bis heute umstritten ist:</strong>
        Ob die Verschlechterung nach 1985 tatsächlich auf eine Vergiftung während der Haft
        zurückgeht oder eine Fortsetzung der bereits jahrzehntelangen chronischen Beschwerden
        war, lässt sich anhand der öffentlich zugänglichen Quellen nicht abschließend klären.</p>
        <p class="vb-intro"><strong>c) Ein Tod mit drei konkurrierenden Deutungen:</strong>
        Die offizielle Diagnose Herzversagen, die Vergiftungsdeutung des Ashrams und die
        späteren Vorwürfe der Isolation in den letzten Stunden stehen bis heute unversöhnt
        nebeneinander – keine davon ist forensisch bestätigt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine Krankheitsgeschichte voller Deutungen?</strong>
        Für eine selbsterhaltende Drei mit Viererflügel, deren gesamtes Wirken auf der
        eigenen, bedeutungsvoll erzählten Geschichte beruhte, liegt eine Deutung nahe: Selbst
        der eigene körperliche Verfall wurde zu einem Text, der interpretiert, gedeutet und
        weitererzählt werden musste – eine Krankheit, die sich nie auf einen einzigen,
        nüchternen medizinischen Befund reduzieren ließ, sondern bis zuletzt Teil der großen
        Erzählung von Verfolgung und Bedeutung blieb. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        chronischen Erkrankungen oder umstrittenen Todesumständen führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Oshos Fall zeigen lässt, ist ein Muster, das bei der Verschmelzung von
        persönlichem Leiden und öffentlicher Selbstdeutung in der Praxis immer wieder
        auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
Osho kannte das Enneagramm als Lehrsystem sehr genau und griff es in eigenen Vorträgen wiederholt auf – seine bekannte Kernaussage dazu lautete sinngemäß, das Enneagramm zeige die neun Krankheiten des Ego, doch die einzige Heilung dafür sei Meditation. Genau diese Haltung – die eigene Kategorie theoretisch zu kennen, die Landkarte für sich selbst aber für überwunden zu halten, weil man ›am Ziel‹ sei – kann die eigentliche Selbsterkenntnis eher erschweren als erleichtern, gerade bei jemandem mit ausgeprägtem Kultstatus. Ob Osho sein eigenes Muster in der Tiefe tatsächlich erkannte oder es eher nur ahnte, lässt sich nicht abschließend sagen; seine wiederkehrenden, nie ganz aufgeklärten körperlichen Beschwerden legen eher nahe, dass Wissen über ein System nicht automatisch mit echter Selbsterkenntnis gleichzusetzen ist – vor allem dann nicht, wenn das eigene spirituelle Ego mitspielt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Was <strong>Osho</strong> als selbsterhaltende Drei mit Viererflügel prägte, kehrt in
        seiner eigenen Krankengeschichte noch einmal wieder: chronische Beschwerden über Jahrzehnte, eine
        dramatische Zäsur durch Haft und behauptete Vergiftung, und ein Tod 1990, dessen
        Ursache bis heute zwischen drei konkurrierenden Erzählungen schwankt. Der Waschbär,
        der selbst im eigenen Verfall die Deutungshoheit über die eigene Geschichte nicht
        aus der Hand gab.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-osho", label:"Porträt: Osho (SE3w4) – Lebenswerk"},
        {route:"krankheitsportraets-bernie-madoff", label:"Krankheitsporträt: Bernie Madoff (SE3w4) – dieselbe Diskretion über den eigenen Körper"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

export function robertSchumannKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robert-schumann-portrait.jpg" alt="Robert Schumann" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert Schumann</p>
        <p class="krim-portrait-typ">SX7w8 · Sexueller Typ 7 mit Achterflügel · 1810–1856</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robert Schumann</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-robert-schumann">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk und seine
        Typstruktur im Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine psychische Erkrankung, die sich über sein gesamtes Erwachsenenleben
        zog und ihn 1854 in den Rhein und in eine Heilanstalt führte, in der er 1856 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schumann</strong> ist der <strong>sexuellen Sieben mit Achterflügel</strong>
        zugeordnet. Die SX7 sucht die volle, ungebremste Hingabe an das, was sie begeistert –
        an eine Komposition, eine Idee, einen Menschen. Der Achterflügel gibt dieser Hingabe
        Kampfkraft und Durchsetzungswillen: Wo eine reine Sieben ausweicht, bleibt die SX7w8 und
        kämpft. Genau diese Intensität, die sein Leben lang schöpferisch trug, wandte sich in
        seinen letzten Jahren gegen ihn selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein ständiger Ton im Ohr:</strong>
        Schumann berichtete bereits in jungen Jahren von einem beständigen, hohen Ton, den er
        innerlich hörte – eine Art chronischer Tinnitus, der ihn zeitlebens begleitete und den
        er selbst als frühes Anzeichen seiner nervlichen Anfälligkeit deutete.</p>
        <p class="vb-intro"><strong>b) Die erste schwere Krise 1833:</strong>
        Nach dem Tod seines Bruders Julius und seiner Schwägerin erlitt der 23-jährige Schumann
        einen schweren Nervenzusammenbruch mit Todesangst und der wiederkehrenden Furcht, den
        Verstand zu verlieren – Jahrzehnte bevor die Krankheit ihn endgültig einholte.</p>
        <p class="vb-intro"><strong>c) Die Hand, die nicht mehr gehorchte:</strong>
        Um 1832 verlor Schumann durch eine bis heute nicht zweifelsfrei geklärte Verletzung der
        rechten Hand die Fähigkeit, als Konzertpianist aufzutreten. Ob eine mechanische
        Übungsapparatur, eine Nervenschädigung oder eine Nebenwirkung damaliger
        Quecksilberbehandlungen die Ursache war, bleibt bis heute Gegenstand medizinhistorischer
        Debatten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Extreme Wechsel zwischen Hochform und Erschöpfung:</strong>
        Schumanns produktivste Phasen – etwa das "Liederjahr" 1840 mit über 140 Kompositionen –
        wechselten sich mit Phasen tiefer Erschöpfung und Schwermut ab, ein Muster, das
        Musikhistoriker retrospektiv häufig als Hinweis auf eine bipolare Störung deuten.</p>
        <p class="vb-intro"><strong>b) Die Doppelfigur als frühe Selbstdiagnose:</strong>
        Schon in seinen Zwanzigern spaltete Schumann seine Persönlichkeit literarisch in den
        stürmischen Florestan und den träumerischen Eusebius auf – eine Selbstbeobachtung, die
        rückblickend wie eine intuitive Beschreibung der eigenen Stimmungsextreme wirkt, lange
        bevor die Psychiatrie über entsprechende Diagnosekategorien verfügte.</p>
        <p class="vb-intro"><strong>c) Eine bis heute umstrittene Ursachenfrage:</strong>
        Neben der bipolaren Störung diskutiert die medizinhistorische Forschung auch eine
        mögliche Spätfolge einer Syphilis-Infektion als Mitursache seines geistigen Verfalls –
        eine These, die durch Schumanns eigene Tagebucheinträge über frühere Behandlungen
        gestützt, aber nie abschließend bewiesen wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Stimmen, die Musik diktierten:</strong>
        Im Februar 1854 berichtete Schumann, eine engelsgleiche Stimme habe ihm ein musikalisches
        Thema vorgesungen, das er sofort niederschrieb – wenige Tage später verwandelte sich
        dieselbe Stimme in seiner Wahrnehmung in eine dämonische, quälende Erscheinung.</p>
        <p class="vb-intro"><strong>b) Der Sprung in den Rhein:</strong>
        Am 27. Februar 1854 verließ Schumann in einem Anfall völliger Verzweiflung sein Haus in
        Düsseldorf, im Nachthemd, und sprang von der Rheinbrücke in den eisigen Fluss. Fischer
        zogen ihn heraus, kaum am Leben.</p>
        <p class="vb-intro"><strong>c) Die eigene Bitte um Einweisung:</strong>
        Kurz nach dem Selbstmordversuch bat Schumann selbst darum, in eine Heilanstalt gebracht
        zu werden – ein Akt, der noch einen letzten Rest bewusster Selbstkontrolle über eine
        Situation zeigt, die für ihn längst außer Kontrolle geraten war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Zwei Jahre in der Anstalt bei Bonn:</strong>
        Schumann verbrachte die letzten gut zwei Jahre seines Lebens in der privaten
        Heilanstalt des Dr. Franz Richarz in Endenich bei Bonn – weitgehend isoliert von seiner
        Frau Clara, der die Ärzte lange Zeit jeden Besuch untersagten, aus Sorge, ein
        Wiedersehen könnte seinen Zustand weiter verschlechtern.</p>
        <p class="vb-intro"><strong>b) Der junge Brahms als einzige Konstante:</strong>
        Während Clara ferngehalten wurde, besuchte der 20-jährige Johannes Brahms (SE9w8), den Schumann
        wenige Monate zuvor als kommenden Meister gefeiert hatte, ihn regelmäßig in Endenich und
        wurde in dieser Zeit zur engsten Stütze der gesamten Familie.</p>
        <p class="vb-intro"><strong>c) Ein Wiedersehen erst kurz vor dem Tod:</strong>
        Erst als sein Zustand unumkehrbar erschien, erlaubten die Ärzte Clara im Juli 1856
        endlich den Zugang zu ihrem Mann – zwei Tage vor seinem Tod, nach mehr als zwei Jahren
        erzwungener Trennung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die eigene Intensität als Gegner:</strong>
        Dieselbe schrankenlose Hingabefähigkeit, die Schumanns kreative Schübe trug – ganze
        Jahre, die ausschließlich einem einzigen Genre gewidmet waren –, richtete sich in der
        Krise mit derselben Wucht gegen ihn selbst: keine gebremste Traurigkeit, sondern ein
        Sog ohne erkennbaren Boden.</p>
        <p class="vb-intro"><strong>b) Kampf bis zur Erschöpfung:</strong>
        Der Achterflügel, der Schumann Jahre zuvor half, gegen den erklärten Willen seines
        Lehrers Friedrich Wieck um die Heirat mit Clara zu kämpfen, zeigte sich auch in der
        Krankheit als Widerstandskraft, die sich nicht kampflos ergab – bis zum offenen
        Selbstmordversuch reichte diese Gegenwehr, dann kippte sie in die Erschöpfung.</p>
        <p class="vb-intro"><strong>c) Musik bis zuletzt als Ausdrucksform:</strong>
        Auch in Endenich componierte und notierte Schumann zeitweise noch, wenn auch in
        deutlich reduziertem Umfang – die Fähigkeit, innere Zustände unmittelbar in Musik zu
        übersetzen, verließ ihn selbst in der schwersten Phase nicht vollständig.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit ohne gesicherte Diagnose:</strong>
        Bis heute ist unklar, ob Schumann an einer bipolaren Störung, einer schizoaffektiven
        Erkrankung oder den neurologischen Spätfolgen einer Syphilis-Infektion litt – die
        Symptome, die in den Krankenakten von Endenich dokumentiert sind, lassen mehrere
        Deutungen zu, keine gilt als abschließend bewiesen.</p>
        <p class="vb-intro"><strong>b) Die Stresslinie zur Eins:</strong>
        Unter dem chronischen Druck seiner Krankheit rückte Schumann zunehmend entlang seiner
        Stresslinie in Richtung des Einser-Punkts der Sieben: Statt der spielerischen Leichtigkeit
        früherer Jahre zeigte er in den letzten Lebensjahren eine fast zwanghafte
        Selbstverurteilung, die eigene Unzulänglichkeit als moralisches Versagen zu deuten –
        typische Einser-Muster, ohne dass sich sein Kerntyp dadurch änderte.</p>
        <p class="vb-intro"><strong>c) Ein Sog, dem der Achterflügel nicht mehr standhielt:</strong>
        Die Intensität, die Schumann Zeit seines Lebens trug – im Komponieren, im Kampf um
        Clara, in der Begeisterung für Brahms –, kannte keine eingebaute Bremse. Wenn sich diese
        Intensität nach innen richtete, fehlte offenbar der Mechanismus, der sie hätte
        auffangen können.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu psychischer
        Erkrankung führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Schumanns Fall zeigen lässt, ist ein Muster, das bei
        ungebremster, grenzenloser Hingabefähigkeit in der Praxis immer wieder auffällt – eine
        von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schumann kannte sein eigenes Muster nicht – die sexuelle Sieben mit Achterflügel sucht Intensität ohne Grenzen, bis keine Reserve mehr bleibt, und genau das trieb ihn in einen Zustand völliger Verzweiflung, aus dem er selbst um Einweisung in eine Heilanstalt bat. Wer das eigene Bedürfnis nach grenzenloser Intensität nicht als Muster erkennt, merkt erst am Punkt des völligen Zusammenbruchs, dass eine Grenze nötig gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Schumanns</strong> letzten Jahren lässt sich die sexuelle Sieben mit
        Achterflügel in ihrer verletzlichsten Form ablesen: eine Hingabefähigkeit ohne Bremse,
        die sein Leben lang schöpferisch trug und sich am Ende gegen ihn selbst wandte, ein
        letzter, verzweifelter Kampf im eisigen Rhein, und zwei Jahre erzwungener Trennung von
        der Frau, für die er einst gegen die ganze Welt gekämpft hatte. Der Schimpanse, der bis
        zuletzt um Verbindung rang – und sie erst zwei Tage vor seinem Tod noch einmal fand.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-robert-schumann", label:"Porträt: Robert Schumann (SX7w8) – Lebenswerk"},
        {route:"beruehmte-johannes-brahms", label:"Porträt: Johannes Brahms (SE9w8) – von Schumann entdeckt, besuchte ihn regelmäßig in Endenich"},
        {route:"beruehmte-franz-liszt", label:"Porträt: Franz Liszt (SX7w8)"},
        {route:"krankheitsportraets-franz-liszt", label:"Krankheitsporträt: Franz Liszt (SX7w8) – dieselbe Unfähigkeit, kürzerzutreten"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

export function seanConneryKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sean-connery-portrait.jpg" alt="Sean Connery" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sean Connery</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1930–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sean Connery</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-sean-connery">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nicht behandelt wird: eine Demenzerkrankung in seinen letzten Lebensjahren,
        die er und seine Familie weitgehend vor der Öffentlichkeit verborgen hielten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Connery</strong> ist dem <strong>sozialen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die SO3 lebt von einem makellosen öffentlichen Image; der Viererflügel
        verlangt zugleich strikte Kontrolle darüber, was von der eigenen Person überhaupt
        preisgegeben wird. Genau diese Kombination – die Notwendigkeit, das eigene Bild
        makellos zu halten, verbunden mit einer lebenslangen Zurückhaltung gegenüber jeder
        Form von Selbstenthüllung – bestimmte, wie mit der eigenen Demenzerkrankung
        umgegangen wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Rückzug aus der Öffentlichkeit ab Mitte der 2000er:</strong>
        Connerys freiwilliger Rückzug aus dem Schauspielberuf und der Öffentlichkeit fiel
        zeitlich mit dem Beginn gesundheitlicher Veränderungen zusammen, die zu diesem
        Zeitpunkt öffentlich nicht bekannt waren.</p>
        <p class="vb-intro"><strong>b) Ein zunehmend zurückgezogenes Leben auf den Bahamas:</strong>
        In seinen letzten Lebensjahren lebte Connery weitgehend abgeschieden auf den Bahamas,
        mit nur noch sehr seltenen öffentlichen Auftritten.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Krankheitsdiagnose zu Lebzeiten:</strong>
        Zu Lebzeiten machte Connery keine gesundheitliche Diagnose öffentlich – Spekulationen
        über seinen Gesundheitszustand blieben unbestätigt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Bestätigung der Demenzerkrankung erst nach dem Tod:</strong>
        Erst nach Connerys Tod im Oktober 2020 bestätigte sein Sohn Jason öffentlich, dass
        sein Vater in den letzten Lebensjahren an Demenz gelitten hatte.</p>
        <p class="vb-intro"><strong>b) Ein über Jahre verborgen gehaltener Verlauf:</strong>
        Nach Angaben seines Sohnes hatte die Erkrankung bereits mehrere Jahre vor Connerys Tod
        begonnen – ein Zeitraum, in dem in der Öffentlichkeit nichts davon bekannt war.</p>
        <p class="vb-intro"><strong>c) Betreuung im engsten Familienkreis:</strong>
        Connery wurde in seinen letzten Lebensjahren im privaten Rahmen von seiner Familie
        betreut, ohne dass Details davon nach außen drangen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 31. Oktober 2020 auf den Bahamas:</strong>
        Sean Connery starb im Alter von 90 Jahren in seinem Haus auf den Bahamas, im Schlaf,
        umgeben von seiner Familie.</p>
        <p class="vb-intro"><strong>b) Nachträgliche öffentliche Einordnung durch die Familie:</strong>
        Die Bestätigung der Demenzdiagnose durch seinen Sohn erfolgte bewusst erst nach dem
        Tod, als Teil der öffentlichen Würdigung seines Lebens, nicht während der eigentlichen
        Krankheitsphase.</p>
        <p class="vb-intro"><strong>c) Weltweite Trauer um eine Ikone:</strong>
        Sein Tod löste internationale Nachrufe aus, die vor allem sein filmisches Lebenswerk
        würdigten – die Demenzerkrankung wurde darin nur am Rande erwähnt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild, das bis zuletzt intakt blieb:</strong>
        Da die Erkrankung erst posthum bekannt wurde, blieb das öffentliche Bild Connerys zu
        Lebzeiten von der eigentlichen gesundheitlichen Realität seiner letzten Jahre
        unberührt.</p>
        <p class="vb-intro"><strong>b) Überraschung in der öffentlichen Reaktion:</strong>
        Viele Fans und Medien reagierten überrascht auf die nachträgliche Bestätigung, da
        Connerys öffentlich zuletzt gezeigtes Bild keinerlei Hinweise auf die Erkrankung
        enthalten hatte.</p>
        <p class="vb-intro"><strong>c) Würdigung der familiären Diskretion:</strong>
        In Nachrufen wurde teils ausdrücklich die Zurückhaltung der Familie gewürdigt, die
        Connerys letzte Lebensjahre vor öffentlicher Neugier geschützt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle über das eigene Bild bis zuletzt:</strong>
        Die SO3-typische Notwendigkeit, das eigene öffentliche Image makellos zu halten,
        setzte sich auch im Umgang mit der Demenzerkrankung fort: Ein Zustand, der die
        vollständige Kontrolle über sich selbst untergräbt, wurde konsequent von der
        Öffentlichkeit ferngehalten.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und das Misstrauen gegenüber Nähe:</strong>
        Dieselbe Zurückhaltung, mit der Connery zeitlebens sein Privatleben schützte, zeigte
        sich im Umgang mit der eigenen Krankheit als konsequente Entscheidung, selbst engen
        Weggefährten und der Öffentlichkeit diesen Teil seines Lebens nicht zugänglich zu
        machen.</p>
        <p class="vb-intro"><strong>c) Der Sohn als Vermittler der posthumen Wahrheit:</strong>
        Dass die Bestätigung erst nach dem Tod durch den Sohn erfolgte, passt zum SO3w4-Muster:
        Erst wenn das eigene Bild nicht mehr durch die Offenlegung gefährdet werden kann,
        wird die volle Wahrheit zugänglich gemacht.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Meister der kontrollierten Selbstdarstellung, konfrontiert mit dem Verlust jeder Kontrolle:</strong>
        Connerys gesamtes Berufsleben beruhte auf der präzisen Kontrolle darüber, was von ihm
        gezeigt wurde – ausgerechnet eine Erkrankung, die genau diese Kontrolle über den
        eigenen Geist unmöglich macht, traf ihn in seinen letzten Lebensjahren.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-karl-lagerfeld">Karl
        Lagerfeld (SO3w4)</a>: Auch Lagerfeld verbarg eine schwere Diagnose fast bis zuletzt
        vor der Öffentlichkeit, um das eigene, sorgfältig kontrollierte Image nicht zu
        gefährden. Bei beiden SO3w4ern zeigt sich dasselbe Muster: Die eigene Erkrankung wird
        so lange wie möglich vollständig unter Kontrolle der eigenen Selbstdarstellung
        gehalten, statt sie öffentlich zu verhandeln.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Gedächtnis, der Speicher der eigenen Rollen?</strong>
        Für einen sozialen Typ 3 mit Viererflügel, dessen gesamtes Berufsleben aus dem
        präzisen Einstudieren und Verkörpern von Rollen bestand, liegt eine Deutung nahe:
        Ausgerechnet jene kognitive Fähigkeit, die sein gesamtes Lebenswerk trug – das
        Gedächtnis –, wurde zum Ort des Verfalls. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Demenz führt –
        <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom Subtyp.</strong>
        Was sich an Connerys Fall zeigen lässt, ist ein Muster im Umgang mit einer das
        Selbstbild bedrohenden Diagnose, das bei einem ausgeprägten sozialen Typ 3 mit
        Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Connery kannte sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 3
        mit Viererflügel hält reflexhaft an der Kontrolle über das eigene öffentliche Bild
        fest, auch dann, wenn eine Erkrankung eine offene Aussprache dringend nahelegen
        würde, und lebte genau dieses Muster bis zum Tod unverändert aus. Wer die eigene
        Neigung, das eigene Bild um jeden Preis makellos zu halten, nicht als Muster
        erkennt, riskiert, dass die eigene Realität erst posthum ans Licht kommt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 3 mit Viererflügel erklärt bei <strong>Sean Connery</strong> vieles
        am Umgang mit der eigenen Demenzerkrankung: ein Mann, dessen gesamtes Lebenswerk auf
        makelloser Selbstkontrolle beruhte, hielt auch den Verlust dieser Kontrolle bis zum
        Tod vollständig privat – der Gepard, der sich am Ende in die Stille seiner eigenen,
        nie ganz preisgegebenen Welt zurückzog, bevor die Wahrheit überhaupt ans Licht
        kommen konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-sean-connery", label:"Porträt: Sean Connery (SO3w4)"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function knutHamsunKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-knut-hamsun-portrait.jpg" alt="Knut Hamsun" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Knut Hamsun</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel · 1859–1952</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Knut Hamsun</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-knut-hamsun">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein literarisches Lebenswerk und seine
        stilprägende Innovation. Diese Seite widmet sich einer Facette, die dort weitgehend
        ausgespart bleibt: der gesundheitliche Verfall seiner letzten Lebensjahrzehnte – Arteriosklerose, ein Schlaganfall
        mit Aphasie, fast vollständige Taubheit und eine fortschreitende Demenz, die 1945 in einem
        vielbeachteten psychiatrischen Verfahren gegen ihn selbst endete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hamsun</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SE4 verarbeitet Leid nicht durch Austausch mit anderen, sondern durch
        Rückzug und stille Selbstbeobachtung – bei Hamsun zeigte sich das in seinem lebenslangen
        Muster, sich auf den abgelegenen Gutshof Nørholm zurückzuziehen, statt öffentliche
        Erklärungen zu suchen. Der Fünferflügel hielt selbst im eigenen psychiatrischen Verfahren
        die analytische Distanz aufrecht: Sein letztes Buch beobachtet den eigenen Fall fast wie
        von außen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Fortschreitende Arteriosklerose ab den späten 1930er-Jahren:</strong>
        Bereits vor 1940, im neunten Lebensjahrzehnt, zeigte Hamsun deutliche Anzeichen einer
        fortschreitenden Gefäßverkalkung – eine körperliche Grundlage, die seine geistige
        Leistungsfähigkeit zunehmend beeinträchtigte, Jahre bevor die Öffentlichkeit davon Notiz nahm.</p>
        <p class="vb-intro"><strong>b) Ein Schlaganfall mit Sprachverlust 1942:</strong>
        1942 erlitt Hamsun eine erste Gehirnblutung, die eine Aphasie zur Folge hatte –
        einen zeitweisen Verlust der Fähigkeit, Sprache flüssig zu verstehen oder zu produzieren,
        mitten in den Jahren, in denen er sich politisch am weitesten aus dem Fenster lehnte.</p>
        <p class="vb-intro"><strong>c) Fast vollständige Taubheit im hohen Alter:</strong>
        Parallel dazu verschlechterte sich sein Gehör so stark, dass Gespräche zunehmend
        schriftlich geführt werden mussten – eine zusätzliche, sehr konkrete Isolation von seiner
        Umgebung, die sich zu der ohnehin zurückgezogenen Lebensweise gesellte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Hitler-Nachruf im Zustand fortgeschrittener Beeinträchtigung:</strong>
        1945, im Alter von 86 Jahren, verfasste Hamsun einen kurzen, verstörenden Nachruf auf
        Adolf Hitler – eine Handlung, die viele Zeitgenossen zusätzlich zu seiner politischen
        Haltung auch als Symptom eines bereits stark eingeschränkten Urteilsvermögens lasen.</p>
        <p class="vb-intro"><strong>b) Vier Monate psychiatrische Beobachtung 1945/46:</strong>
        Im Oktober 1945 wurde Hamsun in eine psychiatrische Klinik in Oslo eingewiesen und dort
        von den Psychiatern Gabriel Langfeldt und Ørnulv Ødegård über vier Monate hinweg
        untersucht – Monate, die er selbst später als die „schrecklichsten" seines Lebens
        bezeichnete.</p>
        <p class="vb-intro"><strong>c) Ein Gutachten zwischen Freispruch und Verurteilung:</strong>
        Die Gutachter erklärten Hamsun weder zum Zeitpunkt der Untersuchung noch zur Zeit seiner
        umstrittenen Handlungen für unzurechnungsfähig, attestierten ihm aber „dauerhaft
        geschwächte Geisteskräfte" – ein Befund, der weder vollständige Schuldfähigkeit noch
        völlige Entlastung bedeutete und bis heute diskutiert wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein letztes Buch als distanzierte Selbstbeobachtung:</strong>
        1949, mit 90 Jahren, veröffentlichte Hamsun ›Paa gjengrodde Stier‹ (›Auf überwachsenen
        Pfaden‹) – eine literarisch bemerkenswert kontrollierte Schilderung seiner eigenen
        psychiatrischen Begutachtung, verfasst von einem Mann, dem gerade attestiert worden war,
        seine Geisteskräfte seien dauerhaft geschwächt.</p>
        <p class="vb-intro"><strong>b) Rückzug nach Nørholm statt öffentlicher Rechtfertigung:</strong>
        Statt sich öffentlich zu erklären oder um Nachsicht zu bitten, zog sich Hamsun konsequent
        auf seinen abgelegenen Hof zurück – dieselbe Rückzugsbewegung, die sein gesamtes Leben
        als Schriftsteller geprägt hatte, nun unter den Vorzeichen eines Schuldspruchs.</p>
        <p class="vb-intro"><strong>c) Kein Widerruf trotz massivem gesellschaftlichem Druck:</strong>
        Bis zuletzt nahm Hamsun seine politischen Äußerungen nicht vollständig zurück, obwohl
        ihm das öffentliche Ansehen und ein Teil seines Vermögens durch eine hohe Geldstrafe
        genommen wurden – eine Sturheit, die selbst im fortgeschrittenen kognitiven Verfall
        erkennbar blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Vom Nobelpreisträger zum verurteilten Landesverräter:</strong>
        Der Fall vom literarischen Nationalheiligtum (Literaturnobelpreis 1920) zum wegen
        Kollaboration verurteilten, mit einer hohen Geldstrafe belegten alten Mann vollzog sich
        innerhalb weniger Jahre und prägt Hamsuns Nachruhm bis heute stärker als jedes einzelne
        seiner Werke.</p>
        <p class="vb-intro"><strong>b) Eine bis heute umstrittene Gesamteinschätzung:</strong>
        Literaturwissenschaftler und Historiker streiten bis in die Gegenwart darüber, wie stark
        die organische Erkrankung seine späten politischen Entscheidungen tatsächlich erklärt –
        eine Frage, die sich angesichts der Quellenlage nie vollständig klären lässt.</p>
        <p class="vb-intro"><strong>c) Ein Alterswerk, das die Debatte nicht beendete, sondern vertiefte:</strong>
        ›Paa gjengrodde Stier‹ wurde selbst zum Politikum – gefeiert für seine literarische
        Klarheit, zugleich als mögliche Strategie gelesen, sich nachträglich als geistig
        vermindert darzustellen, um einer härteren juristischen Bewertung zu entgehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Fünferflügel als analytischer Beobachter des eigenen Verfalls:</strong>
        Statt sein psychiatrisches Verfahren zu verdrängen oder emotional zu verarbeiten,
        beschrieb Hamsun es literarisch, fast wie ein Außenstehender den eigenen Fall studiert –
        typisch für den Fünferflügel, der auch angesichts der eigenen Auflösung Distanz sucht.</p>
        <p class="vb-intro"><strong>b) Die Taube im Käfig der eigenen Isolation:</strong>
        Taubheit, Rückzug nach Nørholm und die faktische gesellschaftliche Ächtung verstärkten
        sich gegenseitig zu einer nahezu vollständigen Abgeschiedenheit – ein Extremfall jener
        Zurückgezogenheit, die für die selbsterhaltende Vier ohnehin kennzeichnend ist.</p>
        <p class="vb-intro"><strong>c) Beharren auf der eigenen inneren Wahrheit statt auf Zustimmung:</strong>
        Hamsun suchte weder öffentliches Mitleid noch vollständige Rehabilitierung, sondern hielt
        an seiner eigenen, von der Mehrheitsmeinung radikal abweichenden Sicht fest – die
        SE4-Signatur, die eigene Wahrnehmung höher zu gewichten als gesellschaftliche Zustimmung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein jahrzehntelanger organischer Abbau, spät öffentlich sichtbar:</strong>
        Arteriosklerose, Schlaganfall, Aphasie und fortschreitende Taubheit summierten sich über
        mehr als ein Jahrzehnt zu einem körperlichen Verfall, der erst durch die politischen
        Ereignisse von 1945 in aller Schärfe öffentlich wurde.</p>
        <p class="vb-intro"><strong>b) Schreiben als letzter verbliebener Ausdrucksraum:</strong>
        Wie schon in gesunden Jahrzehnten blieb das geschriebene Wort auch im Verfall Hamsuns
        wichtigstes Werkzeug, um Unfassbares in Form zu bringen – ›Paa gjengrodde Stier‹ ist
        dafür der letzte, eindringlichste Beleg.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ein Abbau der eigenen Urteilsfähigkeit?</strong>
        Für eine selbsterhaltende Vier mit Fünferflügel, deren gesamte Identität auf der eigenen,
        genau beobachtenden Wahrnehmung beruht, lässt sich in einem organischen Abbau
        ausgerechnet dieser Fähigkeit eine besonders existenzielle Bedrohung lesen: Worauf Hamsun
        zeitlebens am meisten vertraute – sein eigenes, scharfes Urteil –, war genau das, was
        ihm zuletzt zunehmend entglitt. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier mit Fünferflügel
        zwangsläufig zu einem solchen Verfall führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Hamsuns gesundheitlicher Niedergang ist eng mit
        rein körperlichen, altersbedingten Gefäßveränderungen verbunden, nicht rein
        psychosomatisch zu erklären. Was sich an seinem Fall zeigen lässt, ist ein Muster im
        Umgang mit dem eigenen Verfall, das bei einer ausgeprägten selbsterhaltenden Vier mit
        Fünferflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hamsun kannte, wie die meisten Menschen seiner Zeit, sein Enneagramm-Muster nicht
        bewusst. Ohne dieses Wissen blieb ihm auch der Zugang zu einer bewussten Unterscheidung
        zwischen organischem Verfall und gewachsener Überzeugung verwehrt – er verarbeitete sein
        Schicksal auf die einzige Weise, die er kannte: durch stillen Rückzug und literarische
        Form, statt rechtzeitig fremde Hilfe bei der Einordnung des eigenen Zustands zu suchen.
        Wer das eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt, bleibt
        seinem Verfall so ausgeliefert, wie Hamsun es in seinen letzten Lebensjahrzehnten war.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Vier mit Fünferflügel zeigt sich bei <strong>Knut Hamsun</strong> in
        einer letzten, bitteren Volte: Ein Leben lang vertraute er der eigenen, genauen
        Wahrnehmung mehr als jeder äußeren Stimme – und musste am Ende erleben, wie ausgerechnet
        diese Wahrnehmung von einer organischen Erkrankung unterwandert wurde, ohne dass er selbst
        den Unterschied noch zuverlässig erkennen konnte. Die Taube schrieb bis zuletzt, auch als
        die überwachsenen Pfade des eigenen Geistes kaum noch einen klaren Weg zeigten.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-knut-hamsun", label:"Porträt: Knut Hamsun (SE4w5) – Lebenswerk"},
        {route:"krankheitsportraets-vincent-van-gogh", label:"Krankheitsporträt: Vincent van Gogh (SE4w5) – gleicher Subtyp, Verarbeitung der Krise durch die eigene Kunstform"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function vincentVanGoghKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-vincent-van-gogh-portrait.jpg" alt="Vincent van Gogh" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Vincent van Gogh</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel · 1853–1890</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Vincent van Gogh</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-vincent-van-gogh">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und sein systematisches
        Selbststudium. Im Mittelpunkt steht hier, was dort nur am Rande erscheint:
        den wiederkehrenden psychotischen und mutmaßlich epileptischen Krisen der letzten
        beiden Lebensjahre, dem Ohrschnitt 1888 und dem Tod durch eine vermutlich selbst
        beigebrachte Schussverletzung 1890.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Van Gogh</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SE4 trägt ihr Leiden nicht nach außen, sondern hält es zäh und allein
        aus – bei Van Gogh hieß das: seine Krisen fast nie in Briefen an Theo direkt zu
        benennen, sondern stattdessen über Farbe, Komposition und Bildaufbau zu schreiben,
        selbst wenn er sie unmittelbar nach einem Anfall verfasste. Der Fünferflügel hielt
        selbst inmitten der akuten Krise die analytische Distanz zum eigenen Werk aufrecht –
        Van Gogh malte methodisch weiter, während seine Psyche zunehmend zerbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Leben, das schon früh keine Mitte fand:</strong>
        Van Goghs Jugend war geprägt von wiederholten beruflichen Brüchen – Kunsthändler,
        Lehrer, Laienprediger – und von einer zunehmenden sozialen Isolation. Schon vor seinem
        Wechsel zur Malerei beschrieben Familienangehörige ihn als schwer zugänglich, zu
        Grübeleien neigend und in Beziehungen häufig scheiternd.</p>
        <p class="vb-intro"><strong>b) Absinth, Terpentin und ein ungesunder Lebensstil:</strong>
        In seinen Pariser und Arles-Jahren konsumierte Van Gogh regelmäßig Absinth und lebte
        über weite Strecken von wenig mehr als Brot, Kaffee und Tabak – ein Lebensstil, der
        seinen ohnehin labilen körperlichen und seelischen Zustand zusätzlich schwächte.</p>
        <p class="vb-intro"><strong>c) Erste dokumentierte Verwirrtheitszustände:</strong>
        Bereits vor dem Ereignis vom Dezember 1888 berichten Zeitgenossen von Phasen
        plötzlicher Verwirrtheit und ungewöhnlichen Verhaltens bei Van Gogh – Vorboten dessen,
        was sich in Arles zur offenen Krise zuspitzen sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Ohrschnitt als erster offener Zusammenbruch:</strong>
        Nach dem heftigen Streit mit Paul Gauguin am 23. Dezember 1888 schnitt sich Van Gogh
        einen Teil seines linken Ohrs ab. Zeitgenössische Berichte beschreiben massive
        Verwirrtheit und Erinnerungslücken in den Stunden danach – Van Gogh selbst konnte sich
        später an weite Teile des Vorfalls nicht erinnern.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Krisen in der Heilanstalt:</strong>
        Während seines freiwilligen Aufenthalts in Saint-Paul-de-Mausole bei Saint-Rémy
        (1889–1890) erlitt Van Gogh mehrere weitere schwere Krisen, teils mit Halluzinationen
        und dem Impuls, Farbe zu verschlucken. Sein behandelnder Arzt, Dr. Théophile Peyron,
        diagnostizierte eine Form der Epilepsie – eine der bis heute meistdiskutierten
        historischen Deutungen seines Zustands, neben Hypothesen zu einer bipolaren Störung
        oder einer Borderline-Persönlichkeitsstruktur.</p>
        <p class="vb-intro"><strong>c) Klare Phasen zwischen den Krisen:</strong>
        Bemerkenswert ist, dass Van Gogh zwischen den akuten Episoden meist wieder vollständig
        klar und arbeitsfähig war – in genau diesen Phasen entstanden einige seiner bekanntesten
        Werke, darunter „Sternennacht", direkt aus dem Fenster seines Zimmers in der Anstalt
        gemalt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die freiwillige Einweisung als stille Konsequenz:</strong>
        Statt sich seiner Krise öffentlich zu stellen oder Hilfe im gewohnten sozialen Umfeld
        zu suchen, wählte Van Gogh den stillen Rückzug in die Anstalt – eine strukturierte,
        selbst gewählte Isolation, die ihm zugleich Sicherheit und die Möglichkeit zum
        Weiterarbeiten gab.</p>
        <p class="vb-intro"><strong>b) Ein fast wissenschaftlicher Tagesablauf trotz Krise:</strong>
        Auch in der Anstalt hielt Van Gogh an einer strengen, selbst auferlegten Arbeitsstruktur
        fest – geregelte Mal-Zeiten, systematische Studien der Umgebung, minutiöse
        Farbentscheidungen, dokumentiert in Briefen an Theo, die bis in die Details technischer
        Fragen reichen.</p>
        <p class="vb-intro"><strong>c) Kein Wort der Klage nach außen:</strong>
        Selbst in den Briefen aus der akuten Krisenzeit dominiert bei Van Gogh die sachliche
        Beschreibung seiner Arbeit – nur selten und meist beiläufig erwähnt er die eigene
        Erschöpfung oder Angst, nie in dramatischer oder anklagender Form.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der Umzug nach Auvers-sur-Oise:</strong>
        Im Mai 1890 verließ Van Gogh die Anstalt und zog nach Auvers-sur-Oise, in die Nähe des
        homöopathisch interessierten Arztes Dr. Paul Gachet, der sich um psychisch labile
        Künstler kümmerte. In den letzten zehn Wochen seines Lebens entstanden dort mehr als
        siebzig Gemälde – eine der produktivsten Phasen seines gesamten Lebenswerks.</p>
        <p class="vb-intro"><strong>b) Der 27. Juli 1890:</strong>
        Van Gogh erlitt in der Nähe eines Weizenfelds eine Schussverletzung in der Brust und
        schleppte sich zurück in sein Gasthauszimmer. Die genauen Umstände sind bis heute nicht
        vollständig geklärt, gelten in der Forschung aber überwiegend als Selbstbeibringung.</p>
        <p class="vb-intro"><strong>c) Zwei Tage bis zum Tod:</strong>
        Theo eilte an Vincents Bett, wo dieser am 29. Juli 1890 im Alter von 37 Jahren starb.
        Berichten zufolge sollen seine letzten Worte gewesen sein: „Die Traurigkeit wird ewig
        andauern" – ein letzter, stiller Satz über einen Zustand, den er zeitlebens kaum je laut
        ausgesprochen hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Zähigkeit, die sich zunehmend gegen den eigenen Körper richtete:</strong>
        Dieselbe SE4-Zähigkeit, die Van Gogh befähigte, jahrelange Armut und öffentliche
        Nichtbeachtung unbeirrt zu ertragen, richtete sich in den Krisenjahren zunehmend gegen
        ihn selbst – vom Ohrschnitt bis zur mutmaßlich selbst beigebrachten Schussverletzung.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel als Gegenkraft, nicht als Schutz:</strong>
        Der analytische Fünferflügel hielt bei Van Gogh selbst in tiefster Krise ein
        systematisches, fast wissenschaftliches Arbeiten aufrecht – ein Werk wie „Sternennacht"
        entstand mitten in einer der schwersten Phasen seines Lebens. Der Fünferflügel schützte
        jedoch nicht vor der Krise selbst, sondern gab ihr lediglich eine geordnete, kanalisierte
        Form nach außen.</p>
        <p class="vb-intro"><strong>c) Die Farbe als einzige zugelassene Sprache des Leidens:</strong>
        Während Van Gogh seine innere Not im persönlichen Austausch fast vollständig
        verschwieg, lässt sie sich in der zunehmend aufgewühlten, wirbelnden Bildsprache seiner
        letzten Lebensmonate deutlich ablesen – das Leiden fand seinen einzigen Ausdruck dort,
        wo die selbsterhaltende Vier ihn erlaubte: im Werk, nicht im Wort.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Leiden im Verborgenen, Systemarbeit ungebrochen:</strong>
        Für die selbsterhaltende Vier mit Fünferflügel typisch: eine fortschreitende psychische
        Belastung, die kaum je offen angesprochen wird, während der Fünferflügel parallel dazu
        ein hochgradig systematisches, analytisches Schaffen aufrechterhält. Bei Van Gogh zeigte
        sich das in psychotischen Krisen neben methodisch durchdachter Malerei – das Leiden wird
        stumm ertragen, während die geistige Systemarbeit ungebrochen weiterläuft.</p>
        <p class="vb-intro"><strong>b) Eine über Jahre gewachsene Krise, kein plötzlicher Einbruch:</strong>
        Von den ersten Anzeichen sozialer Isolation in den 1870er-Jahren bis zum Tod 1890 zieht
        sich eine durchgehende Linie zunehmender psychischer Instabilität – keine einzelne
        Katastrophe, sondern ein über rund fünfzehn Jahre gewachsenes Muster.</p>
        <p class="vb-intro"><strong>c) Zwei Symptome, ein gemeinsamer Ursprung:</strong>
        Der Ohrschnitt 1888 und die tödliche Schussverletzung 1890 lassen sich als zwei
        Ausprägungen derselben Grundbewegung lesen: In akuten Krisen richtete sich Van Goghs
        sonst nach innen gewandtes Leiden abrupt und körperlich gegen ihn selbst.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet wiederkehrende Anfälle und Psychosen?</strong>
        Für eine selbsterhaltende Vier, die ihr Leiden für gewöhnlich in stille, kontrollierte
        Bahnen lenkt, liegt eine Deutung nahe: Wenn die eigene Kontrolle über den Verstand
        selbst zeitweise zusammenbricht, trifft das die SE4 in ihrem verletzlichsten Punkt – der
        Fähigkeit, das eigene innere Erleben geordnet zu verarbeiten. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        <a href="javascript:void(0)" data-route="psychosomatik/epilepsie">Psychosomatik-Register
        zur Epilepsie</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu
        wiederkehrenden psychotischen Krisen führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Van Goghs Fall zeigen lässt, ist
        ein Muster, das bei der Neigung, seelisches Leiden allein und schweigend zu verarbeiten,
        in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Van Gogh kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch nicht. Die selbsterhaltende Zähigkeit, die ihn befähigte,
        Armut und öffentliche Ablehnung jahrelang zu ertragen, kannte für ihn keinen
        eingebauten Warnmechanismus, der ihn rechtzeitig zu dauerhafter Hilfe hätte finden
        lassen; im Gegenteil, jede Krise wurde in genau derselben Logik verarbeitet, mit der er
        auch materielle Not behandelte: allein durchhalten, weiterarbeiten, nicht klagen. Wer
        das eigene Erschöpfungsmuster nicht kennt, kann es auch nicht rechtzeitig unterbrechen –
        bei Van Gogh endete das erst mit seinem Tod im Alter von 37 Jahren.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Van Goghs</strong> letzten beiden Lebensjahren zeigt sich die selbsterhaltende
        Vier mit Fünferflügel in ihrer eindrücklichsten Form: eine Psyche, die zunehmend
        zerbrach, während derselbe Mensch mit unveränderter analytischer Genauigkeit
        weitermalte – bis kurz vor seinem Tod entstanden noch Werke von methodischer Klarheit.
        Die Taube, die ihr Leiden zeitlebens kaum in Worte fasste, sprach es stattdessen in
        Farbe – bis sie am 29. Juli 1890, zwei Tage nach der Schussverletzung, im Alter von 37
        Jahren für immer verstummte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-vincent-van-gogh", label:"Porträt: Vincent van Gogh (SE4w5) – Lebenswerk"},
        {route:"krankheitsportraets-virginia-woolf", label:"Krankheitsporträt: Virginia Woolf (SE4w5) – gleicher Subtyp"},
        {route:"krankheitsportraets-knut-hamsun", label:"Krankheitsporträt: Knut Hamsun (SE4w5) – gleicher Subtyp, Verarbeitung der Krise durch die eigene Kunstform"},
        {route:"psychosomatik/epilepsie", label:"Psychosomatik-Register: Epilepsie"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function wolfgangAmadeusMozartKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wolfgang-amadeus-mozart-portrait.jpg" alt="Wolfgang Amadeus Mozart" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wolfgang Amadeus Mozart</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · 1756–1791</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Wolfgang Amadeus Mozart</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-wolfgang-amadeus-mozart">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort am Rande erwähnt wird:
        eine seit der Kindheit immer wiederkehrende Kette fieberhafter Erkrankungen, die im
        Dezember 1791 mit seinem plötzlichen Tod im Alter von nur 35 Jahren endete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Mozart</strong> ist der <strong>selbsterhaltenden Zwei mit Dreierflügel</strong>
        zugeordnet. Naranjo beschrieb die SE2 als <em>Me First</em> – den Subtyp, der zuerst
        für das eigene Überleben und das der ihm am nächsten Stehenden sorgt, bevor er sich
        weiter nach außen wendet. Der Dreierflügel gibt dieser Fürsorge einen zusätzlichen,
        unbedingten Antrieb: den Beweis der eigenen Unentbehrlichkeit durch sichtbare Leistung –
        ein Muster, das sich bis in Mozarts letzte, fieberhaft arbeitsreichen Lebensmonate
        hinein nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erdverbunden statt entrückt:</strong>
        Anders als das Bild des überirdisch schwebenden Genies, das die Nachwelt aus ihm
        machte, richtete sich Mozarts Blick zeitlebens auf sehr konkrete, körperliche Dinge –
        auf Einnahmen, Aufträge, die Gesundheit der eigenen Familie, das eigene Auskommen.</p>
        <p class="vb-intro"><strong>b) Der eigene Körper als zuverlässiger, aber überforderter Resonanzboden:</strong>
        Schon als Kind lernte Mozart, fieberhafte Erschöpfung als vorübergehenden Zustand zu
        behandeln, den man durchsteht, nicht als Warnsignal, dem man nachgibt – eine Haltung,
        die sich durch sein gesamtes Leben zieht.</p>
        <p class="vb-intro"><strong>c) Die Familie fest im Blick, auch im eigenen Verfall:</strong>
        Noch in den letzten Wochen kümmerte sich Mozart um Constanze und die gemeinsamen
        Kinder, um Schüler und Kollegen – die Fürsorge der SE2 setzte nicht aus, als der
        eigene Körper längst Warnsignale sendete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine lebenslange Kette fieberhafter Erkrankungen:</strong>
        Mit elf Jahren erkrankte Mozart an Pocken, die ihn nach Angaben seiner Schwester
        Nannerl neun Tage lang erblinden ließen. 1765/66, während der großen Europatournee,
        erkrankten er und Nannerl lebensbedrohlich an Typhus. Hinzu kamen im Lauf seines
        Lebens wiederholte Scharlach- und rheumatische Fieberschübe sowie chronisch
        wiederkehrende Mandelentzündungen.</p>
        <p class="vb-intro"><strong>b) Drei Großprojekte parallel im letzten Lebensjahr:</strong>
        1791 arbeitete Mozart gleichzeitig an <em>Die Zauberflöte</em>, an <em>La clemenza di
        Tito</em> (unter Zeitdruck für die Prager Krönungsfeierlichkeiten komponiert) und am
        Requiem – einem anonym in Auftrag gegebenen Werk, das er nicht mehr vollenden sollte.</p>
        <p class="vb-intro"><strong>c) Beginn der letzten Erkrankung:</strong>
        Um den 20. November 1791 erkrankte Mozart mit hohem Fieber, Kopfschmerzen, Hautausschlag
        sowie Schmerzen und Schwellungen in Armen und Beinen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rasche Verschlechterung in der zweiten Krankheitswoche:</strong>
        Erbrechen, Durchfall, eine generalisierte Flüssigkeitseinlagerung im ganzen Körper und
        zunehmende Atemnot kamen hinzu – Mozart konnte sich zuletzt nicht mehr allein
        aufsetzen.</p>
        <p class="vb-intro"><strong>b) Arbeit am Requiem bis kurz vor dem Tod:</strong>
        Noch von seinem Krankenbett aus erklärte Mozart seinem Schüler Franz Xaver Süßmayr
        Einzelheiten der Instrumentierung – der Dreierflügel der SE2 ließ selbst im Angesicht
        des eigenen Sterbens nicht vom unvollendeten Musikstück ab.</p>
        <p class="vb-intro"><strong>c) Tod am 5. Dezember 1791:</strong>
        Etwa fünfzehn Tage nach den ersten Symptomen starb Mozart im Alter von 35 Jahren. Die
        Beisetzung in einem Wiener Schachtgrab war damals übliche Praxis, kein Zeichen von
        Armut, wie ein späterer Mythos behauptete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine vage zeitgenössische Diagnose:</strong>
        Der Wiener Totenschein nannte als Ursache "hitziges Frieselfieber" – eine damals
        gebräuchliche Sammelbezeichnung für fieberhafte Ausschlagskrankheiten, keine moderne
        Diagnose.</p>
        <p class="vb-intro"><strong>b) Eine widerlegte Legende:</strong>
        Die bis heute populäre Erzählung einer Vergiftung durch Antonio Salieri – literarisch
        u.a. durch Puschkin und später den Film <em>Amadeus</em> verbreitet – wird von der
        seriösen medizinhistorischen Forschung nicht gestützt und gilt als widerlegt.</p>
        <p class="vb-intro"><strong>c) Die heute plausibelste Erklärung:</strong>
        Eine 2009 veröffentlichte retrospektive Studie zu einer zeitgleichen Wiener
        Streptokokken-Epidemie mit gehäuften Nierenkomplikationen stützt die These einer
        Streptokokken-Infektion mit nachfolgendem rheumatischem Fieber und einer daraus
        entstandenen Nierenentzündung (Glomerulonephritis) als wahrscheinlichste Todesursache.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Höchstleistung trotz einsetzender Erschöpfung:</strong>
        Dass Mozart im selben Jahr, in dem sein Körper bereits erkennbar geschwächt war, drei
        umfangreiche Großwerke gleichzeitig vorantrieb, zeigt die Ausdauer der SE2w3 in ihrer
        rastlosesten Form.</p>
        <p class="vb-intro"><strong>b) Ein Werk, das ohne ihn zu Ende gebracht wurde:</strong>
        Das Requiem blieb bei Mozarts Tod unvollendet und wurde von Süßmayr fertiggestellt –
        selbst im Tod blieb sein letztes Werk Gegenstand fremder Vollendung.</p>
        <p class="vb-intro"><strong>c) Das Flusspferd, das sein Revier bis zur völligen Erschöpfung verteidigte:</strong>
        Die Energie der SE2w3 richtete sich bis zuletzt auf denselben Antrieb, der Mozarts
        ganzes Leben prägte: keinen Auftrag unerfüllt zu lassen, keinen Beweis des eigenen
        Wertes auszulassen, auch wenn der eigene Körper längst an seine Grenzen stieß.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Pocken mit neun Tagen Blindheit:</strong>
        Bereits mit elf Jahren stand Mozarts Körper einer lebensbedrohlichen Erkrankung
        gegenüber, die ihn zeitweise das Augenlicht kostete – ein früher Beleg für eine von
        Kindheit an erhöhte Anfälligkeit.</p>
        <p class="vb-intro"><strong>b) Typhus auf der großen Europatournee:</strong>
        1765/66 erkrankten Wolfgang und Nannerl während der von ihrem Vater organisierten
        Konzertreise durch Europa lebensbedrohlich an Typhus – ein früher Beleg dafür, wie sehr
        die beruflich bedingten Strapazen der Familie Mozart Gesundheit und Überleben direkt
        gegeneinander stellten.</p>
        <p class="vb-intro"><strong>c) Wiederkehrende Scharlach- und rheumatische Fieberschübe:</strong>
        Über die gesamte Kindheit und Jugend hinweg dokumentieren Briefe der Familie
        wiederholte fieberhafte Erkrankungen und chronische Mandelentzündungen – eine
        Konstitution, die nie vollständig zur Ruhe kam.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine Überflutung des eigenen Körpers?</strong>
        Die plausibelste Erklärung für Mozarts Tod beschreibt ein Nierenversagen, bei dem sich
        Flüssigkeit ungehindert im ganzen Körper staut, weil das ausgleichende Organ seine
        Funktion verliert. Für eine selbsterhaltende Zwei mit Dreierflügel, deren ganzes Leben
        von der Frage bestimmt war, wie sie das eigene Überleben durch immer neue, sichtbare
        Beweise der eigenen Unentbehrlichkeit sichert, liegt eine Deutung nahe: ein System, das
        nie gelernt hatte, sich selbst Erholung zuzugestehen, lief zuletzt buchstäblich über.
        Der Körper, der sein ganzes Leben lang zuverlässig funktionierte, obwohl er permanent
        gefordert wurde, konnte die Überlastung am Ende nicht mehr ausgleichen. Diese Deutung
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Nierenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Mozarts Fall zeigen lässt, ist ein Muster,
        das bei dem Bedürfnis, das eigene Überleben unablässig durch neue Beweise zu sichern,
        in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Mozart kannte sein eigenes Muster nicht – die selbsterhaltende Zwei mit Dreierflügel sichert die eigene Existenz durch unablässige Leistung und das Werben um Gönner, und genau dieser Antrieb hielt ihn noch mit hohem Fieber an drei Großwerken gleichzeitig arbeiten, statt sich Ruhe zu gönnen. Wer den eigenen Zwang zur Leistung nicht als Muster erkennt, arbeitet weiter, bis der Körper keine Wahl mehr lässt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Zwei mit Dreierflügel erklärt bei <strong>Mozart</strong> vieles am
        Verlauf seiner eigenen Erkrankung: eine von Kindheit an fiebernde, nie ganz zur
        Ruhe kommende Konstitution, die er ein Leben lang durch schiere Ausdauer und
        unermüdliche Arbeit überspielte – bis der eigene Körper im Dezember 1791 keine weitere
        Leistung mehr aufbringen konnte. Das Flusspferd, das sein Revier bis zur letzten
        Sekunde verteidigte, auch als die eigene Kraft längst erschöpft war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-wolfgang-amadeus-mozart", label:"Porträt: Wolfgang Amadeus Mozart (SE2w3) – Lebenswerk"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3) – dieselbe Weigerung zurückzuweichen"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function hannahArendtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hannah-arendt-portrait.jpg" alt="Hannah Arendt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hannah Arendt</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1906–1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hannah Arendt</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hannah-arendt">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr politisches Denken und ihre
        Typstruktur im Allgemeinen. Hier rückt ein Aspekt in den Vordergrund, der dort kaum
        Erwähnung findet: eine lebenslange Kettenraucherin, deren erster, fast tödlicher
        Herzinfarkt 1974 sie nicht zum Aufhören brachte – mit fatalen Folgen anderthalb Jahre
        später.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Arendt</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 sucht Sicherheit über Wissen und intellektuelle Autorität, nicht
        über äußere Anpassung an medizinischen Rat. Der Viererflügel bringt eine
        existenzielle, oft eigensinnige Tiefe hinzu – eine Weigerung, sich fremden
        Vorgaben zu beugen, auch wenn sie der eigenen Gesundheit dienen. Genau diese
        Kombination prägte, wie sie mit der eigenen Sterblichkeit umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelanges, exzessives Rauchen:</strong>
        Arendt war zeitlebens Kettenraucherin – Chesterfields, Lucky Strikes, Camels,
        dazu gelegentlich Zigarren und Pfeifentabak. Das Rauchen war für sie untrennbar
        mit dem eigenen Denken und Schreiben verbunden.</p>
        <p class="vb-intro"><strong>b) Ein fast tödlicher erster Infarkt 1974:</strong>
        Im Mai 1974 erlitt sie während eines Vortrags in Schottland einen schweren
        Herzinfarkt, der beinahe tödlich verlief. Sie erholte sich, blieb danach aber
        gesundheitlich deutlich angeschlagen.</p>
        <p class="vb-intro"><strong>c) Eine koronare Herzkrankheit als Folge:</strong>
        In den Monaten nach dem ersten Infarkt entwickelte sich eine koronare
        Herzkrankheit, die als direkte Folge des jahrzehntelangen Rauchens gilt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der ärztliche Rat, auf Kools umzusteigen:</strong>
        Nach dem ersten Infarkt riet ihr Arzt zumindest zum Wechsel auf mentholhaltige
        Kools-Zigaretten – ein Kompromissvorschlag, der eine vollständige Raucherentwöhnung
        gar nicht mehr ernsthaft verfolgte.</p>
        <p class="vb-intro"><strong>b) Keine Verhaltensänderung trotz Todesnähe:</strong>
        Arendt setzte das Rauchen nach dem Infarkt fort, wenn auch mit der empfohlenen
        Sorte. Eine grundlegende Umstellung ihres Lebensstils fand nicht statt.</p>
        <p class="vb-intro"><strong>c) Unvermindert fortgesetzte Arbeit:</strong>
        In den anderthalb Jahren zwischen erstem und zweitem Infarkt schrieb sie weiter
        an "Vom Leben des Geistes", ihrem letzten, dreiteilig geplanten Werk – ohne
        erkennbare Verlangsamung ihres Arbeitspensums.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein letzter geselliger Abend:</strong>
        Am 4. Dezember 1975 hatte Arendt Gäste zum Essen in ihrer New Yorker Wohnung
        eingeladen – ein normaler, geselliger Abend, kein Hinweis auf eine bevorstehende
        Krise.</p>
        <p class="vb-intro"><strong>b) Der zweite, tödliche Infarkt beim Kaffeeservieren:</strong>
        Nachdem sie ins Wohnzimmer gewechselt war, um nach dem Essen Kaffee zu servieren,
        erlitt sie einen kurzen Hustenanfall, bevor sie das Bewusstsein verlor.</p>
        <p class="vb-intro"><strong>c) Eine Schreibmaschine mit nur einer Überschrift:</strong>
        In ihrer Schreibmaschine steckte ein Blatt mit der Überschrift "Judging"
        (Urteilen) und zwei Epigraphen, aber ohne weiteren Text – der geplante dritte Teil
        ihres letzten Werks blieb für immer unvollendet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 4. Dezember 1975:</strong>
        Hannah Arendt starb im Alter von 69 Jahren in ihrer New Yorker Wohnung – ihr
        zweiter Herzinfarkt innerhalb von neunzehn Monaten verlief tödlich.</p>
        <p class="vb-intro"><strong>b) Das Rauchen als wahrscheinlicher Hauptfaktor:</strong>
        Ihr jahrzehntelanger, auch nach dem ersten Infarkt fortgesetzter Zigarettenkonsum
        gilt als sehr wahrscheinliche Hauptursache für die koronare Herzkrankheit, die zu
        ihrem Tod führte.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das andere zu Ende bringen mussten:</strong>
        Ihre Freundin, die Schriftstellerin Mary McCarthy, gab das unvollendete
        "Vom Leben des Geistes" postum in zwei Bänden 1977 und 1978 heraus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Wissen um das Risiko, ohne Konsequenz für das Verhalten:</strong>
        Die SO5-typische Trennung von intellektuellem Verstehen und emotional-praktischer
        Umsetzung zeigte sich deutlich: Arendt wusste um die Gefahr, änderte aber nur das
        Nötigste, statt das Rauchen ganz aufzugeben.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die Weigerung, sich fremden Regeln zu unterwerfen:</strong>
        Wie schon in ihrer intellektuellen Haltung gegenüber Kritikern folgte sie auch
        hier nicht blind ärztlichem Rat, sondern traf eine eigene, nur teilweise
        angepasste Entscheidung – Autonomie auch gegen die eigene Gesundheit.</p>
        <p class="vb-intro"><strong>c) Rückzug in die Arbeit statt in die Vorsicht:</strong>
        Statt ihr Leben nach dem ersten Infarkt vorsichtiger zu gestalten, vertiefte sie
        sich weiter in ihr anspruchsvollstes, letztes philosophisches Projekt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Gewohnheit, die zum Denkwerkzeug wurde:</strong>
        Für Arendt war das Rauchen kein bloßes Laster, sondern eng mit dem Akt des
        Denkens und Schreibens selbst verwoben – ein Ritual, das sie über Jahrzehnte
        begleitete und das sie auch angesichts konkreter Lebensgefahr nicht aufgab.</p>
        <p class="vb-intro"><strong>b) Die Warnung, die zur Kenntnis genommen, aber nicht umgesetzt wurde:</strong>
        Von Mai 1974 bis Dezember 1975 lebte sie mit dem vollen Wissen um ihr
        Herzrisiko – ohne es zu verdrängen, aber auch ohne konsequent danach zu handeln.
        Das Wissen blieb intellektuell verarbeitet, nicht verhaltenswirksam.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz?</strong>
        Für eine soziale Fünf mit Viererflügel, deren Sicherheit über rationale Distanz
        und intellektuelle Kontrolle entsteht, liegt eine Deutung nahe: Ausgerechnet jenes
        Organ, das am unmittelbarsten mit Emotion und Lebendigkeit verbunden wird, wurde
        zum Ort einer Bedrohung, die sich der reinen Verstandeskontrolle entzog. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu
        Herz-Kreislauf-Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Arendts Fall zeigen lässt,
        ist ein Muster im Umgang mit einer bekannten Gesundheitsgefahr, das bei einer
        ausgeprägten sozialen Fünf mit Viererflügel auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Arendt kannte ihr eigenes Muster nicht – die soziale Fünf mit Viererflügel
        bestimmt lieber selbst über die eigenen Gewohnheiten, als sich fremder Kontrolle zu
        unterwerfen, und genau das zeigte sich in ihrem nur halbherzigen Wechsel zu
        milderen Zigaretten statt eines vollständigen Verzichts. Wer die eigene
        Autonomiebedürftigkeit nicht als Muster erkennt, verwechselt sie leicht mit einer
        rein rationalen Risikoabwägung, obwohl auch die eigene Fixierung mitentscheidet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Viererflügel erklärt bei <strong>Arendt</strong> vieles am
        Verlauf ihrer eigenen Erkrankung: eine Frau, deren Sicherheit über intellektuelle
        Autonomie entstand, nahm eine bekannte Lebensgefahr wissentlich in Kauf, statt sich
        fremdem Rat vollständig zu unterwerfen. Der Oktopus, der noch beim Kaffeeservieren
        für Gäste arbeitete, dachte und lebte – bis das eigene Herz keine Wahl mehr ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hannah-arendt", label:"Porträt: Hannah Arendt (SO5w4) – Lebenswerk"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsporträt: Albert Einstein (SO5w4) – dasselbe Muster: Warnung zur Kenntnis genommen, nicht befolgt"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function margaretRutherfordKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-margaret-rutherford-portrait.jpg" alt="Margaret Rutherford" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Margaret Rutherford</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1892–1972</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Margaret Rutherford</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-margaret-rutherford">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihre komödiantische Bühnenkarriere und
        die verborgene Substanz hinter der behäbigen Fassade. Hier steht ausschließlich das im
        Mittelpunkt, was dort nur angedeutet bleibt: eine lebenslange schwere Depression, gefolgt
        von einer fortschreitenden Demenz in ihren letzten Lebensjahren – zwei Erkrankungen,
        die sie mit derselben stillen Beharrlichkeit ertrug, mit der sie ihr ganzes Leben in
        vertraute Routinen flüchtete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Rutherford</strong> ist der <strong>selbsterhaltenden Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Neun <em>Appetit</em>: Sicherheit durch
        Gewohnheit und Komfort als Puffer gegen eine tiefer liegende innere Leere. Der
        Achterflügel gibt dieser Neun eine verborgene physische und mentale Substanz, die im
        Ruhezustand kaum sichtbar ist. Genau diese Kombination aus Verdrängung durch Routine
        und stiller innerer Stärke prägte, wie Rutherford sowohl ihre Depression als auch ihre
        spätere Demenzerkrankung verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine durch Katastrophen gezeichnete Kindheit:</strong>
        Rutherfords Vater erschlug ihren Großvater und wurde in eine Anstalt eingewiesen; ihre
        Mutter nahm sich später das Leben, als Rutherford noch ein Kind war – ein Fundament, auf
        dem sich depressive Episoden schon früh anlegten.</p>
        <p class="vb-intro"><strong>b) Erste dokumentierte depressive Episoden im Erwachsenenalter:</strong>
        Bereits in jungen Jahren als Schauspielerin kämpfte Rutherford mit Phasen tiefer
        Niedergeschlagenheit, die sie weitgehend vor Kollegen und Öffentlichkeit verbarg.</p>
        <p class="vb-intro"><strong>c) Elektrokrampftherapie als wiederkehrende Behandlung:</strong>
        Über Jahre hinweg unterzog sie sich mehrfach Elektrokrampftherapie – eine damals
        gängige, aber einschneidende Behandlung schwerer Depressionen, die sie stets diskret
        und ohne öffentliches Aufsehen durchführen ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine Erkrankung, die fast vollständig hinter der Bühnenfigur verschwand:</strong>
        Zeitgenossen und Biografen beschreiben übereinstimmend, wie radikal Rutherfords private
        Leiden von ihrer öffentlichen Persona getrennt blieb – kaum jemand außerhalb ihres
        engsten Kreises ahnte das Ausmaß ihrer Depression.</p>
        <p class="vb-intro"><strong>b) Zwei getrennte Krankheitsphasen über Jahrzehnte:</strong>
        Die depressive Erkrankung begleitete sie über weite Strecken ihres Erwachsenenlebens,
        während die Demenz erst in ihrem letzten Lebensjahrzehnt hinzutrat – zwei
        unterschiedliche, zeitlich klar getrennte Belastungen desselben langen Lebens.</p>
        <p class="vb-intro"><strong>c) Ein Rückzug ins Vertraute statt aktiver Krisenbewältigung:</strong>
        Statt ihre Depression öffentlich zu thematisieren oder aktiv zu bekämpfen, vertiefte sich
        Rutherford in dieselben Rollen, dasselbe Ensemble, dieselbe Ehe – Routine als Zuflucht,
        nicht als Heilmittel.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Stringer Davis als stabilisierender Anker:</strong>
        Ihr Ehemann, der Schauspieler Stringer Davis, den sie 1945 im Alter von 53 Jahren
        heiratete, begleitete sie oft in kleinen Nebenrollen in ihren eigenen Filmen – eine
        Nähe, die ihr durch die schwersten Phasen half, ohne dass die Erkrankung je öffentlich
        benannt wurde.</p>
        <p class="vb-intro"><strong>b) Fürsorge für Gordon Langley Hall trotz eigener Not:</strong>
        Obwohl sie selbst mit schwerer Depression rang, nahm sie den jungen Gordon Langley Hall
        bei sich auf und förderte ihn wie ein eigenes Kind – Fürsorge für andere, während die
        eigene Last verborgen blieb.</p>
        <p class="vb-intro"><strong>c) Erste Anzeichen kognitiven Abbaus in den späten 1960er-Jahren:</strong>
        In ihren letzten Lebensjahren bemerkten Wegbegleiter zunehmende Vergesslichkeit und
        Verwirrtheit, die sich schließlich zu einer fortschreitenden Demenz verdichteten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein letztes Jahrzehnt zwischen Auftritten und Rückzug:</strong>
        Auch mit fortschreitender kognitiver Beeinträchtigung nahm Rutherford noch gelegentlich
        Rollen an, bevor sie sich zunehmend aus dem öffentlichen Leben zurückzog.</p>
        <p class="vb-intro"><strong>b) Pflege durch den engsten Kreis statt öffentlicher Bekanntmachung:</strong>
        Wie schon ihre Depression wurde auch die Demenz weitgehend privat gehalten – Davis und
        wenige enge Vertraute übernahmen die Fürsorge, ohne dass die Öffentlichkeit das ganze
        Ausmaß erfuhr.</p>
        <p class="vb-intro"><strong>c) Tod am 22. Mai 1972 in Chalfont St Peter:</strong>
        Margaret Rutherford starb im Alter von 80 Jahren – ihr Ehemann Stringer Davis folgte ihr
        nur zwei Jahre später, nachdem er sie bis zuletzt gepflegt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der die Fassade jahrzehntelang aufrechterhielt:</strong>
        Dieselbe verborgene Substanz, die Rutherfords komödiantische Bühnenpräsenz trug, hielt
        auch die Trennung zwischen öffentlicher Fröhlichkeit und privatem Leiden über
        Jahrzehnte stabil – eine Leistung, die enorme innere Kraft erforderte.</p>
        <p class="vb-intro"><strong>b) Appetit, der sich in Routine statt in Konfrontation flüchtete:</strong>
        Die selbsterhaltende Neun sucht Frieden im Vertrauten – bei Rutherford wurde diese
        Zuflucht doppelt genutzt: erst gegen die Depression, später unbewusst auch gegen die
        beginnende Verwirrtheit der Demenz.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Kampf, sondern stilles Weitertragen:</strong>
        Anders als bei manch anderem Krankheitsporträt dieses Kompasses findet sich bei
        Rutherford kein dokumentierter Moment der öffentlichen Auseinandersetzung mit der
        eigenen Krankheit – nur das stille, jahrzehntelange Weitertragen einer doppelten Last.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Zwei Krankheiten, ein Muster:</strong>
        Sowohl die Depression als auch die spätere Demenz trafen bei Rutherford auf dieselbe
        Grundstrategie: sich der eigenen Not nicht aktiv zu stellen, sondern sie hinter
        Gewohnheit, Routine und komödiantischer Fassade verschwinden zu lassen.</p>
        <p class="vb-intro"><strong>b) Die Parallele zu Margaret Rutherfords eigenem Lebensmusterkompass-Fingerabdruck:</strong>
        Genau dieses Muster – Trägheit als Selbstvergessenheit statt als aktives Ankämpfen –
        findet sich bereits in ihrem Porträt unter Berühmte Persönlichkeiten beschrieben: ein
        Einschlafen gegenüber der eigenen Not, das sich hier über zwei verschiedene Krankheiten
        hinweg fortsetzte.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Depression und Demenz?</strong>
        Für eine selbsterhaltende Neun mit Achterflügel, deren tiefstes Bedürfnis darin besteht,
        im Vertrauten Frieden zu finden und die eigene innere Wahrnehmung zu dämpfen, liegt eine
        Deutung nahe: Ausgerechnet die beiden Erkrankungen, die das Bewusstsein für die eigene
        innere Realität am stärksten trüben können, trafen bei Rutherford zusammen. Diese
        Deutung wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu Depression
        oder Demenz führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Rutherfords Fall zeigen lässt, ist ein Muster, das bei
        tiefer, gewohnheitsbasierter Verdrängung in der Praxis immer wieder auffällt – eine von
        vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Rutherford kannte ihr eigenes Enneagramm-Muster nicht. Ohne dieses Wissen fehlte ihr jeder
        Anlass, der eigenen Neuner-Trägheit bewusst entgegenzusteuern – stattdessen vertiefte sie
        sich immer weiter in dieselben Rollen, dieselbe Routine, dasselbe Schweigen. Nicht aus
        Schuld, sondern aus Unwissenheit über das eigene Muster – und genau das erklärt, warum
        sich bei ihr zwei verschiedene, das Bewusstsein trübende Erkrankungen über ein ganzes
        Leben hinweg unbehelligt entfalten konnten, statt rechtzeitig erkannt und behandelt zu
        werden.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Margaret Rutherfords</strong> doppelter Krankheitsgeschichte lässt sich die
        selbsterhaltende Neun mit Achterflügel in ihrer verletzlichsten Form ablesen: eine
        lebenslange Depression, gefolgt von einer fortschreitenden Demenz, beide fast
        vollständig hinter einer warmherzigen, komödiantischen Fassade verborgen. Der Elefant,
        der seine Last bis zuletzt trug, ohne sie je öffentlich abzusetzen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-margaret-rutherford", label:"Porträt: Margaret Rutherford (SE9w8) – Lebenswerk"},
        {route:"krankheitsportraets-david-hume", label:"Krankheitsporträt: David Hume (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-johannes-brahms", label:"Krankheitsporträt: Johannes Brahms (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsporträt: Hans-Dietrich Genscher (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-charles-laughton", label:"Krankheitsporträt: Charles Laughton (SE9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
      ])}
    </div>
  `);
}

export function galarrwuyYunupinguKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-galarrwuy-yunupingu-portrait.jpg" alt="Galarrwuy Yunupingu" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Galarrwuy Yunupingu</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel · 1948–2023</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Galarrwuy Yunupingu</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-galarrwuy-yunupingu">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Landrechte-Führer der
        Yolngu. Diese Seite geht einem Aspekt nach, der dort nur am Rande erwähnt wird: eine über Jahrzehnte
        fortschreitende Nierenerkrankung, die ihn zu wiederholten, oft monatelangen Aufenthalten
        fernab seines eigenen Landes zwang – ausgerechnet den Mann, dessen Lebenswerk das Recht
        aller Yolngu war, auf ihrem eigenen Land zu bleiben.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Yunupingu</strong> ist dem <strong>selbsterhaltenden Typ 8 mit Neunerflügel</strong>
        zugeordnet. Die SE8 investiert ihre Kraft in die kompromisslose Sicherung des eigenen
        Terrains; der Neunerflügel bringt Geduld und die Fähigkeit hinzu, über Jahrzehnte an einer
        Aufgabe festzuhalten, ohne sie öffentlich dramatisch zu inszenieren. Genau diese Kombination
        bestimmte auch, wie er mit der eigenen, zunehmend ernsten Erkrankung umging: nicht durch
        offenen Rückzug, sondern durch stille Fortsetzung seiner Führungsrolle, so lange es der
        Körper irgend zuließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine fortschreitende Nierenerkrankung:</strong>
        Über Jahre hinweg verschlechterte sich Yunupingus Nierenfunktion – eine Erkrankung, die im
        Northern Territory unter Aborigines aus entlegenen Gemeinden weit überdurchschnittlich
        häufig auftritt und regelmäßig eine lebenslange Dialysebehandlung oder eine
        Nierentransplantation nötig macht.</p>
        <p class="vb-intro"><strong>b) Kollaps in der Öffentlichkeit 2010:</strong>
        Bereits im Januar 2010 brach Yunupingu in einer Bank in Nhulunbuy zusammen und musste ins
        Krankenhaus gebracht werden – ein erstes öffentlich gewordenes Zeichen des sich
        verschlechternden Gesundheitszustands.</p>
        <p class="vb-intro"><strong>c) Nierentransplantation Ende 2016:</strong>
        Ende 2016 unterzog sich Yunupingu einer Nierentransplantation – ein Eingriff, der ihn für
        längere Zeit von seinem Heimatland in Arnhem Land fort nach Darwin zwang, wo die
        entsprechende medizinische Versorgung verfügbar war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Beinamputation im Juli 2017:</strong>
        Nur wenige Monate nach der Transplantation musste Yunupingu sich einer Amputation des
        Unterschenkels unterziehen – eine der gefürchteten Gefäßkomplikationen, die bei
        langjähriger, fortgeschrittener Nierenerkrankung auftreten können.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Behandlungsaufenthalte in Darwin:</strong>
        In den folgenden Jahren verbrachte Yunupingu wiederholt längere Zeiträume in Darwin zur
        medizinischen Behandlung – fern von dem Land, für dessen rechtlichen Schutz er sein
        gesamtes Erwachsenenleben gekämpft hatte.</p>
        <p class="vb-intro"><strong>c) Ein familiäres Muster:</strong>
        Sein jüngerer Bruder Dr. M. Yunupingu (Mandawuy, Frontmann von Yothu Yindi) war bereits 2013
        im Alter von 56 Jahren an derselben Krankheit gestorben – ein Verlust, der die Schwere und
        familiäre Dimension der Nierenerkrankung innerhalb der Yolngu-Gemeinschaft schmerzhaft
        unterstrich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Weiterführung der Führungsrolle trotz schwerer Erkrankung:</strong>
        Trotz Transplantation und Amputation zog sich Yunupingu nicht aus der Öffentlichkeit
        zurück, sondern blieb in politische Debatten um Landrechte und Verfassungsfragen
        eingebunden, bis weit in seine letzten Lebensjahre hinein.</p>
        <p class="vb-intro"><strong>b) Ein strukturelles Gesundheitsproblem, kein Einzelschicksal:</strong>
        Zum Zeitpunkt seiner Erkrankung lebten im Northern Territory rund 700 Menschen mit
        Nierenversagen im Endstadium, landesweit rund 20.000 – Yunupingus Fall wurde von
        Ärzten und Gesundheitsexperten wiederholt genutzt, um auf die unzureichende
        Dialyseversorgung in entlegenen Regionen Australiens aufmerksam zu machen.</p>
        <p class="vb-intro"><strong>c) Tod nach langer Krankheit 2023:</strong>
        Galarrwuy Yunupingu starb am 3. April 2023 im Alter von 74 Jahren nach langer Krankheit –
        in seinem eigenen Land, wie seine Familie in ihrer Erklärung ausdrücklich betonte: „Er wurde
        auf unserem Land geboren, er lebte sein ganzes Leben auf unserem Land, und er starb auf
        unserem Land."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Landrechte-Erbe, das die Krankheit überdauerte:</strong>
        Trotz Jahren gesundheitlicher Rückschläge blieb Yunupingus historische Bedeutung als
        Architekt der modernen australischen Landrechtsbewegung ungebrochen – seine Krankheit
        schmälerte sein politisches Vermächtnis nicht.</p>
        <p class="vb-intro"><strong>b) Ein öffentlich gewordenes Versorgungsproblem:</strong>
        Sein Fall trug, gemeinsam mit dem Tod seines Neffen, des Musikers Dr. G. Yunupingu
        (Gurrumul, 1971–2017), an ähnlichen, ebenfalls nierenbedingten Komplikationen im Juli
        2017 mit nur 46 Jahren, zu politischem Druck bei, die medizinische Versorgung – vor
        allem Dialyseangebote – in entlegenen Teilen Australiens zu verbessern.</p>
        <p class="vb-intro"><strong>c) Rückkehr aufs eigene Land am Lebensende:</strong>
        Dass Yunupingu, anders als viele Betroffene mit derselben Erkrankung, am Ende auf dem
        eigenen Land sterben konnte, wurde von seiner Familie als eigenständige, bewusst
        hervorgehobene Errungenschaft gewürdigt – ein letztes Echo seines lebenslangen Kampfes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Amputation als erzwungene Grenze für einen Mann des Terrains:</strong>
        Für eine selbsterhaltende Acht, deren gesamtes Selbstverständnis auf physischer Präsenz und
        Bewegungsfähigkeit im eigenen Land beruhte, traf der Verlust eines Beins einen besonders
        empfindlichen Punkt – die körperliche Fähigkeit, das eigene Territorium buchstäblich zu
        durchqueren, wurde eingeschränkt, während der Wille, es zu verteidigen, unverändert blieb.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das Weiterarbeiten trotz allem:</strong>
        Die neunertypische Fähigkeit, eine Aufgabe geduldig über Jahrzehnte fortzuführen, ohne sie
        dramatisch zu inszenieren, zeigte sich auch in der Krankheit selbst: kein öffentliches Klagen,
        sondern ein stilles Weiterarbeiten, so lange es irgend möglich war.</p>
        <p class="vb-intro"><strong>c) Fernbehandlung als Umkehrung des Lebensthemas:</strong>
        Dass ausgerechnet der Mann, der sein Leben der Verteidigung des Rechts widmete, auf dem
        eigenen Land zu bleiben, selbst wiederholt gezwungen war, sein Land für die eigene
        Behandlung zu verlassen, ist eine der bittersten Ironien seiner Biografie.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Orang-Utan, der sein Revier trotz Verlusts nicht aufgab:</strong>
        Yunupingus gesamtes Lebenswerk beruhte auf der unbeirrten Verteidigung von Land und
        Gemeinschaft – die eigene Erkrankung bedrohte ausgerechnet die körperliche Grundlage
        dieser Präsenz, während der Wille zur Verteidigung des Territoriums bis zuletzt bestehen
        blieb.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-helmut-kohl">Helmut Kohl</a>
        (ebenfalls SE8w9) hielt nach seinem schweren Sturz 2008 trotz fast vollständigen
        körperlichen Verfalls an der Kontrolle über sein unmittelbares Umfeld fest, wenn auch aus
        dem Hintergrund; Yunupingu ging noch einen Schritt weiter und blieb selbst nach
        Transplantation und Beinamputation aktiv in seine politische Rolle eingebunden, statt sich
        zurückzuziehen. Beide Fälle zeigen dasselbe SE8w9-Muster: Die Acht mit Neunerflügel gibt
        die Verantwortung für das eigene Terrain selbst angesichts massiver körperlicher
        Einschränkung nicht leichtfertig auf. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-helmut-kohl">Krankheitsporträt zu Helmut Kohl</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Beine?</strong>
        Für einen selbsterhaltenden Achter, dessen gesamte Lebensaufgabe darin bestand, das eigene
        Land buchstäblich zu durchqueren, zu verteidigen und darauf zu bleiben, liegt eine Deutung
        nahe: Ausgerechnet jene körperliche Fähigkeit, die physische Verbindung zum eigenen
        Territorium, wurde zum Ort der Einschränkung. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu einer
        Nierenerkrankung mit Amputation führt – <strong>jeder Mensch kann jede Krankheit erleiden,
        unabhängig vom Subtyp</strong>, und Nierenerkrankungen in entlegenen indigenen Gemeinden
        Australiens haben vor allem strukturelle, gesundheitspolitische Ursachen. Was sich an
        Yunupingus Fall zeigen lässt, ist ein Muster im Umgang mit fortschreitendem
        Kontrollverlust über den eigenen Körper, das bei einer ausgeprägten selbsterhaltenden Acht
        mit Neunerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Yunupingu kannte sein eigenes Enneagramm-Muster nicht – die selbsterhaltende Acht mit
        Neunerflügel hält reflexhaft an der Verantwortung für das eigene Terrain fest, statt
        rechtzeitig die eigene körperliche Notlage über die Aufgabe zu stellen. Genau dieses Muster
        bestimmte, wie er mit der eigenen Erkrankung umging: weiterarbeiten, verhandeln, präsent
        bleiben, statt sich frühzeitig ganz der eigenen Behandlung zu widmen – nicht aus
        Verdrängung im klinischen Sinne, sondern weil die Verantwortung für Land und Gemeinschaft
        in seinem inneren Muster tiefer verankert war als die Sorge um den eigenen Körper.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Acht mit Neunerflügel erklärt bei <strong>Galarrwuy Yunupingu</strong>
        vieles am Verlauf seiner letzten Lebensjahre: ein Mann, dessen gesamtes Lebenswerk auf der
        physischen und rechtlichen Verteidigung seines Landes beruhte, verlor durch
        Nierenerkrankung und Amputation einen Teil der eigenen körperlichen Verbindung zu diesem
        Land – und kämpfte doch bis zuletzt weiter, bis er am Ende genau dort sterben konnte, wofür
        er sein ganzes Leben eingestanden war. Der Orang-Utan, der sein Revier auch im eigenen
        körperlichen Verfall nicht aufgab.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-galarrwuy-yunupingu", label:"Porträt: Galarrwuy Yunupingu (SE8w9) – Landrechte-Führer"},
        {route:"krankheitsportraets-helmut-kohl", label:"Krankheitsporträt: Helmut Kohl (SE8w9) – dasselbe Muster, Kontrolle trotz körperlichen Verfalls"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

export function virginiaWoolfKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-virginia-woolf-portrait.jpg" alt="Virginia Woolf" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Virginia Woolf</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel · 1882–1941</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Virginia Woolf</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-virginia-woolf">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um ihr
        literarisches Werk und ihre Bewusstseinsstrom-Technik. Diese Seite geht näher auf ein
        Kapitel ein, das dort nur knapp umrissen wird: jahrzehntelange, wiederkehrende schwere
        depressive Episoden, die 1941 in ihrem Suizid endeten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Woolf</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SE4 erträgt ihr Leiden stoisch, ohne es öffentlich zur Schau zu
        stellen; der Fünferflügel gibt ihr die Fähigkeit, den eigenen Schmerz analytisch zu
        durchdringen und in ein durchdachtes System zu übersetzen. Genau diese Kombination –
        die Krankheit stumm ertragen, zwischen den Krisen mit uhrwerkgleicher Disziplin
        arbeiten und selbst den letzten Schritt in klarer, durchdachter Prosa vorbereiten –
        bestimmte den gesamten Verlauf ihrer psychischen Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erster Zusammenbruch nach dem Tod der Mutter:</strong>
        Mit dreizehn Jahren erlitt Woolf nach dem Tod ihrer Mutter Julia 1895 ihren ersten
        schweren psychischen Zusammenbruch.</p>
        <p class="vb-intro"><strong>b) Zweiter Zusammenbruch nach dem Tod des Vaters:</strong>
        1904, mit zweiundzwanzig Jahren, folgte nach dem Tod ihres Vaters Leslie Stephen ein
        zweiter, noch schwererer Zusammenbruch, der einen ersten Suizidversuch einschloss.</p>
        <p class="vb-intro"><strong>c) Kindheitstrauma als möglicher Auslöser:</strong>
        In Briefen deutete Woolf später an, dass sexuelle Übergriffe ihrer beiden Halbbrüder
        in der Kindheit zu den tieferen Ursachen ihrer psychischen Erkrankung zählten – ein
        Trauma, das sie erst spät und nur fragmentarisch literarisch verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende schwere depressive Episoden über Jahrzehnte:</strong>
        Woolfs gesamtes Erwachsenenleben war von wiederkehrenden, teils monatelangen
        depressiven Episoden begleitet, die jede schriftstellerische Arbeit zeitweise
        unmöglich machten.</p>
        <p class="vb-intro"><strong>b) Disziplinierte Arbeit zwischen den Krisen:</strong>
        In den Phasen dazwischen schrieb Woolf mit fast geschäftsmännischer Verlässlichkeit
        jeden Vormittag an einem eigens gebauten Stehpult in ihrem Gartenhäuschen in Monk's
        House.</p>
        <p class="vb-intro"><strong>c) Enge ärztliche und familiäre Überwachung:</strong>
        Ihr Ehemann Leonard Woolf organisierte über Jahre eine engmaschige Betreuung, die
        Ruhephasen, Ernährung und Arbeitszeiten regulierte, um erneute Zusammenbrüche
        möglichst zu verhindern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zwei sorgfältig formulierte Abschiedsbriefe:</strong>
        Am 28. März 1941 schrieb Woolf, nach einer sich rapide verschlechternden depressiven
        Episode während der deutschen Luftangriffe auf Großbritannien, zwei Abschiedsbriefe –
        einen an ihren Mann Leonard, einen an ihre Schwester Vanessa Bell.</p>
        <p class="vb-intro"><strong>b) Klare, sachliche statt impulsive Sprache:</strong>
        Beide Briefe sind in ruhiger, fast sachlicher Prosa verfasst, in der sie erklärte,
        dass sie spüre, wie die Krankheit sich erneut ihrer bemächtige und sie diesmal nicht
        mehr genesen werde.</p>
        <p class="vb-intro"><strong>c) Der Tod im Fluss Ouse:</strong>
        Sie füllte ihre Manteltaschen mit Steinen und ging in den Fluss Ouse nahe ihrem
        Zuhause in Sussex – eine durchdachte, vorbereitete Handlung, kein impulsiver
        Ausbruch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein literarisches Werk trotz der Krankheit, nicht dank ihrer Verklärung:</strong>
        Woolfs bedeutendste Romane entstanden in den Phasen relativer Stabilität zwischen den
        Krisen, nicht während der akuten depressiven Episoden selbst.</p>
        <p class="vb-intro"><strong>b) Späteres öffentliches Bewusstsein für psychische Erkrankung:</strong>
        Ihr Tod und die posthum veröffentlichten Tagebücher trugen wesentlich dazu bei, schwere
        Depression als ernstzunehmende Krankheit statt als bloße Charakterschwäche in der
        öffentlichen Wahrnehmung zu verankern.</p>
        <p class="vb-intro"><strong>c) Nachträgliche Debatte über eine mögliche bipolare Störung:</strong>
        Spätere psychiatrische Einordnungen ihrer Biografie diskutieren, ob Woolfs
        Krankheitsverlauf – abwechselnde Phasen extremer Produktivität und tiefer
        Erschöpfung – Merkmale einer bipolaren Störung zeigte, ohne dass eine solche Diagnose
        zu Lebzeiten gestellt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Stilles Ertragen statt öffentlicher Klage:</strong>
        Die SE4-typische Haltung – das eigene Leiden stoisch zu ertragen, ohne es öffentlich
        vorzuführen – zeigte sich bei Woolf darin, dass sie ihre Krankheit fast ausschließlich
        in Tagebüchern und privaten Briefen verarbeitete, nicht in direkten öffentlichen
        Bekenntnissen.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und die Systematisierung des eigenen Leidens:</strong>
        Dieselbe analytische Distanz, die Woolfs Bewusstseinsstrom-Technik hervorbrachte,
        zeigte sich auch im Umgang mit der eigenen Krankheit: eine durchdachte, fast
        wissenschaftlich beobachtende Selbstbeschreibung in Tagebüchern statt spontaner
        emotionaler Entladung.</p>
        <p class="vb-intro"><strong>c) Durchdachte Form bis in den letzten Akt:</strong>
        Selbst ihr Suizid trug die Handschrift der SE4w5: kein impulsiver Ausbruch, sondern
        eine in klarer Prosa vorbereitete, bewusst gewählte Entscheidung.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist geordneter Klarheit, den die eigene Krankheit unregelmäßig machte:</strong>
        Woolfs gesamtes literarisches Werk beruhte auf präziser, durchdachter Kontrolle über
        Sprache und Form. Ausgerechnet ihr eigener Geist – das Werkzeug dieser Kontrolle –
        wurde wiederholt zum Ort, an dem diese Ordnung zusammenbrach.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-vincent-van-gogh">Vincent
        van Gogh (SE4w5)</a>: Auch bei ihm bestimmten wiederkehrende schwere psychische
        Krisen das späte Werk, und auch sein Leben endete durch eine selbst herbeigeführte
        Verletzung. Bei beiden SE4w5 zeigt sich dasselbe Muster: Zwischen den Krisen entsteht
        aus großem Leiden ein außergewöhnlich durchdachtes künstlerisches System, bis die
        Krankheit am Ende die selbst auferlegte Disziplin überwältigt.</p>
        <p class="vb-intro"><strong>c) Wenn die Vier unter chronischem Stress zur Zwei wird:</strong>
        Ihr letzter Brief an Leonard ist bemerkenswert weniger von der eigenen Not als von
        Sorge um sein Wohlergehen geprägt: Sie schrieb, sie könne sein Leben nicht länger
        belasten, ohne sie könne er arbeiten, und sie verdanke ihm alles Glück ihres Lebens.
        Wer über Jahre in chronischer psychischer Belastung lebt, bewegt sich zunehmend
        entlang seiner Stresslinie in Richtung seines Stresspunkts – bei der Vier ist das die
        Zwei. Diese in ihrer letzten, existenziellsten Stunde nach außen statt nach innen
        gerichtete Fürsorge erinnert an die Selbstaufopferung des Stresspunkts, nicht an die
        sonst stark nach innen gerichtete Introspektion des Kerntyps – bei unverändertem
        Kerntyp SE4w5.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der eigene Geist?</strong>
        Für eine selbsterhaltende Vier, deren gesamtes Werk auf der präzisen Kontrolle über
        die eigene Wahrnehmung und Sprache beruhte, liegt eine Deutung nahe: Ausgerechnet
        jenes Organ, das diese Kontrolle ermöglichte – der eigene Geist –, wurde wiederholt
        zum Ort, an dem die Kontrolle am vollständigsten verloren ging. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig zu schweren
        depressiven Erkrankungen führt – <strong>jeder Mensch kann jede Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Woolfs Fall zeigen lässt, ist
        ein Muster im Umgang mit chronischer psychischer Krankheit, das bei einer ausgeprägten
        selbsterhaltenden Vier mit Fünferflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Woolf kannte ihr eigenes Muster nicht als Enneagramm-Struktur – die selbsterhaltende
        Vier mit Fünferflügel hält reflexhaft an stillem Ertragen und analytischer
        Verarbeitung des eigenen Leidens fest, statt frühzeitig direktere Hilfe zu suchen, und
        lebte genau dieses Muster bis zu ihrem Tod unverändert aus. Wer die eigene Neigung,
        psychisches Leiden allein durch disziplinierte Arbeit und stille Introspektion zu
        bewältigen, nicht als Muster erkennt, riskiert, dass die eigene Krankheit unbehandelt
        eskaliert, weil sie nach außen kaum sichtbar wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 4 mit Fünferflügel erklärt bei <strong>Virginia
        Woolf</strong> vieles am Verlauf ihrer psychischen Erkrankung: eine Schriftstellerin,
        deren gesamtes Werk auf der Übersetzung von Leiden in durchdachte literarische Form
        beruhte, ertrug ihre Krankheit über Jahrzehnte still und diszipliniert, bis sie
        selbst ihren letzten Schritt noch einmal mit derselben klaren, durchdachten Prosa
        vorbereitete, mit der sie ihr ganzes Leben lang geschrieben hatte. Die Taube, die ihr
        Leiden bis zuletzt in eine bewusst gewählte, präzise Form brachte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-virginia-woolf", label:"Porträt: Virginia Woolf (SE4w5) – Lebenswerk"},
        {route:"krankheitsportraets-vincent-van-gogh", label:"Krankheitsporträt: Vincent van Gogh (SE4w5) – gleicher Subtyp"},
        {route:"krankheitsportraets-connie-chiu", label:"Krankheitsporträt: Connie Chiu (SE4w5) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function arnoldSchwarzeneggerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-arnold-schwarzenegger-portrait.jpg" alt="Arnold Schwarzenegger" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arnold Schwarzenegger</p>
        <p class="krim-portrait-typ">SE1w2 · Selbsterhaltender Typ 1 mit Zweierflügel · geb. 1947</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Arnold Schwarzenegger</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-arnold-schwarzenegger">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um sein
        Lebenswerk als Bodybuilder, Schauspieler und Politiker. Diese Seite widmet sich einem
        Aspekt, der dort nur kurz erwähnt wird: ein angeborener Herzklappenfehler, der ihn seit
        1997 begleitet und bislang drei offene Herzoperationen sowie 2024 einen Herzschrittmacher
        erforderlich machte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schwarzenegger</strong> ist dem <strong>selbsterhaltenden Typ 1 mit
        Zweierflügel</strong> zugeordnet. Die SE1 richtet ihren Perfektionismus auf die eigene
        körperliche Disziplin und Kontrolle; der Zweierflügel gibt ihr die Fähigkeit, diese
        Kontrolle mit einer nach außen gerichteten, ermutigenden Fürsorge zu verbinden. Genau
        diese Kombination – der eigene Körper als perfekt zu steuerndes Projekt, verbunden mit
        dem späteren Bedürfnis, andere aus der eigenen Erfahrung heraus zu ermutigen – bestimmte
        den jahrzehntelangen Umgang mit der eigenen Herzerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose eines angeborenen Herzklappenfehlers:</strong>
        Schwarzenegger wurde mit einer bikuspiden Aortenklappe geboren – einem angeborenen
        Herzfehler, bei dem die Aortenklappe statt der üblichen drei nur zwei Segel besitzt und
        dadurch im Lauf des Lebens zunehmend undicht oder verengt werden kann.</p>
        <p class="vb-intro"><strong>b) Jahrzehntelanges Training trotz zugrunde liegender Erkrankung:</strong>
        Über all die Jahre seiner Bodybuilding-Karriere, in denen er seinen Körper mit
        extremster Disziplin zu physischer Perfektion formte, trug er bereits einen strukturellen
        Defekt genau jenes Organs in sich, das diese Leistung erst ermöglichte.</p>
        <p class="vb-intro"><strong>c) Erste Operation 1997:</strong>
        Am 16. April 1997 unterzog er sich einer geplanten Operation zum Ersatz der defekten
        Aortenklappe – eine von den Studios im Vorfeld von ›Batman & Robin‹ aus
        Versicherungsgründen verlangte Voraussetzung, die er vor Drehbeginn absolvierte, statt
        sie hinauszuzögern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Bewusste Wahl der Gewebeklappe statt einer mechanischen:</strong>
        Bei der Operation 1997 entschied sich Schwarzenegger gegen eine langlebigere mechanische
        Herzklappe und für eine biologische Gewebeklappe – mit der ausdrücklichen Begründung, eine
        mechanische Klappe könnte seine körperliche Belastbarkeit und sein Training einschränken.</p>
        <p class="vb-intro"><strong>b) Zwölf Chirurgen statt der üblichen vier:</strong>
        Über die Operation selbst berichtete er später: „Normalerweise haben sie vier
        Herzchirurgen im OP. Ich hatte zwölf" – eine Aussage, die weniger von Angst als von
        einer fast stolzen Genauigkeit im Umgang mit dem eigenen Körper zeugt.</p>
        <p class="vb-intro"><strong>c) Notoperation 2018 nach gescheitertem minimalinvasivem Eingriff:</strong>
        2018 war zunächst ein schonenderer Katheter-Eingriff zum Ersatz der Pulmonalklappe
        geplant – der ursprüngliche Klappenersatz von 1997 hatte seine Lebensdauer überschritten.
        Als es dabei zu Komplikationen kam, wurde eine offene Notoperation unumgänglich.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Dritte Operation 2020 in der Cleveland Clinic:</strong>
        2020 folgte ein erneuter Ersatz der Aortenklappe. Schwarzenegger kommentierte den
        Eingriff öffentlich knapp und sachlich: „Dank des Teams der Cleveland Clinic habe ich
        jetzt eine neue Aortenklappe, passend zu meiner neuen Pulmonalklappe."</p>
        <p class="vb-intro"><strong>b) Herzschrittmacher 2024 wegen Narbengewebe:</strong>
        2024 musste ihm wegen eines unregelmäßigen Herzschlags, verursacht durch Narbengewebe
        aus den drei vorangegangenen Operationen, ein Herzschrittmacher eingesetzt werden.</p>
        <p class="vb-intro"><strong>c) „Ein bisschen mehr Maschine":</strong>
        Seinen eigenen Kommentar zum Schrittmacher formulierte er in einem Satz, der seine
        jahrzehntelange öffentliche Identität als „Terminator" direkt aufgreift: „Ich hatte eine
        Operation für einen Herzschrittmacher und wurde ein bisschen mehr zur Maschine."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Keine der drei Operationen verhinderte die Rückkehr ins öffentliche Leben:</strong>
        Nach jeder der drei Operationen – 1997, 2018, 2020 – kehrte Schwarzenegger innerhalb
        kurzer Zeit in sein gewohntes öffentliches und berufliches Leben zurück, ohne sich
        längerfristig zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Offene Kommunikation statt Verschweigen:</strong>
        Anders als viele Prominente in vergleichbarer Lage verschwieg er die einzelnen Eingriffe
        nicht, sondern kommentierte jeden davon öffentlich, meist kurz nach dem jeweiligen
        Krankenhausaufenthalt.</p>
        <p class="vb-intro"><strong>c) Öffentlicher Appell 2024 statt reiner Krankheitsmeldung:</strong>
        Die Ankündigung des Herzschrittmachers verband er direkt mit einem Appell an sein
        Publikum: „Wenn du etwas aus Angst aufschiebst, hoffe ich, dass ich dich dazu inspiriere,
        auf deine Ärzte zu hören und auf dich selbst aufzupassen."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle bis in die Wahl des Klappenmaterials hinein:</strong>
        Die SE1-typische Sorge um die eigene Integrität zeigte sich nicht erst im Umgang mit der
        Diagnose, sondern bereits in der Detailentscheidung von 1997: selbst bei einer
        lebenswichtigen Operation stand die eigene körperliche Leistungsfähigkeit im Zentrum der
        Abwägung, nicht die längere Haltbarkeit der Klappe.</p>
        <p class="vb-intro"><strong>b) Vom eigenen Kontrollbedürfnis zur Fürsorge für andere (Zweierflügel):</strong>
        Der Zweierflügel zeigt sich darin, wie Schwarzenegger seine eigene, jahrzehntelange
        Erfahrung mit der Krankheit 2024 nicht für sich behielt, sondern gezielt in eine
        öffentliche Ermutigung für andere übersetzte, die aus Angst eine Behandlung aufschieben.</p>
        <p class="vb-intro"><strong>c) Selbstironie statt Verdrängung:</strong>
        Der Satz „ein bisschen mehr zur Maschine" verarbeitet die eigene Verletzlichkeit mit
        genau jener trockenen, kontrollierten Selbstironie, die für eine SE1 typisch ist, die
        Schwäche nicht verdrängt, sondern in eine selbst gewählte, disziplinierte Sprache
        übersetzt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zum Lebenswerk wurde – mit einem strukturellen Defekt im Zentrum:</strong>
        Schwarzeneggers gesamte öffentliche Identität beruhte auf der Vorstellung eines
        perfekt kontrollierbaren Körpers. Ausgerechnet das Organ, das diese Kontrolle im
        buchstäblichsten Sinn am Leben hielt – das Herz –, trug von Geburt an einen Defekt in
        sich, den kein Training beheben konnte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-alain-delon">Alain Delon
        (SE1w2)</a>: Auch bei ihm stand am Ende die Frage nach Kontrolle über den eigenen Körper
        im Zentrum – bei Delon nach einem Schlaganfall und einer Leukämie-Diagnose die
        öffentlich diskutierte Forderung nach einem selbstbestimmten Lebensende. Bei beiden
        SE1w2ern zeigt sich dasselbe Grundmuster: Kontrolle über den eigenen Körper wird nicht
        an das Schicksal oder an andere abgegeben, sondern bis zuletzt aktiv beansprucht – bei
        Schwarzenegger durch die Wahl von Operationsmethode und Klappenmaterial, bei Delon durch
        die Forderung nach der eigenen letzten Entscheidung.</p>
        <p class="vb-intro"><strong>c) Dreißig Jahre lang immer der am wenigsten einschränkende Weg:</strong>
        Über drei Jahrzehnte hinweg zieht sich ein durchgängiges Muster: 1997 die Gewebeklappe
        statt der mechanischen, um die eigene Belastbarkeit zu erhalten; 2018 zunächst der
        schonendere Katheter-Eingriff statt der offenen Operation. Erst wenn die weniger
        eingreifende Option an ihre Grenze stieß, akzeptierte er den größeren Eingriff – nie
        umgekehrt.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Herz?</strong>
        Für einen selbsterhaltenden Einser, dessen gesamtes Lebenswerk auf der körperlichen
        Beherrschbarkeit des eigenen Körpers beruhte, liegt eine Deutung nahe: Ausgerechnet
        jenes Organ, das über die eigene körperliche Leistungsfähigkeit entscheidet und sich
        keinem Training unterordnet, wurde zum Ort, an dem sich zeigte, dass nicht jede
        körperliche Grenze durch Disziplin verschiebbar ist. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Herzklappenfehlern führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Die bikuspide Aortenklappe ist zudem ein angeborener,
        rein anatomischer Befund ohne psychosomatischen Ursprung. Was sich an Schwarzeneggers
        Fall zeigen lässt, ist ein Muster im <em>Umgang</em> mit einer schwerwiegenden
        körperlichen Diagnose, das bei einer ausgeprägten selbsterhaltenden Eins mit
        Zweierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schwarzenegger kennt sein eigenes Muster vermutlich nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins hält reflexhaft an der eigenen Kontrolle über Verfahren und
        Entscheidung fest, auch wenn eine frühere, umfassendere Behandlung denkbar gewesen wäre,
        und lebt genau dieses Muster über Jahrzehnte unverändert aus. Wer die eigene Neigung,
        selbst existenzielle medizinische Entscheidungen ausschließlich nach dem Maßstab der
        eigenen Kontrolle und Leistungsfähigkeit zu treffen, nicht als Muster erkennt, riskiert,
        dass genau diese Neigung wiederholt an ihre eigenen Grenzen stößt, wie es bei ihm 2018
        in Form der Notoperation geschah.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Zweierflügel erklärt bei <strong>Arnold
        Schwarzenegger</strong> vieles am Umgang mit der eigenen, jahrzehntelangen
        Herzerkrankung: ein Mann, dessen gesamtes Lebenswerk auf der Beherrschung des eigenen
        Körpers beruhte, traf bei jeder der drei Operationen konsequent die Entscheidung, die
        größtmögliche eigene Kontrolle zu bewahren – und übersetzte diese Erfahrung am Ende
        selbst in eine öffentliche Ermutigung an andere, sich nicht aus Angst der eigenen
        Behandlung zu verweigern. Der Adler, der auch mit einer Maschine im eigenen Herzen
        genau wusste, wie er das Fliegen fortsetzen wollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-arnold-schwarzenegger", label:"Porträt: Arnold Schwarzenegger (SE1w2) – Lebenswerk"},
        {route:"krankheitsportraets-alain-delon", label:"Krankheitsporträt: Alain Delon (SE1w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-phil-collins", label:"Krankheitsporträt: Phil Collins (SE1w9) – gleicher Kerntyp, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}
