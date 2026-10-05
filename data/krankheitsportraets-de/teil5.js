import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function angelinaJolieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-angelina-jolie-portrait.jpg" alt="Angelina Jolie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Angelina Jolie</p>
        <p class="krim-portrait-typ">SO1w2 · Sozialer Typ 1 mit Zweierflügel · geb. 1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Angelina Jolie</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-angelina-jolie">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: eine 2013 öffentlich gemachte
        vorbeugende doppelte Mastektomie aufgrund einer BRCA1-Genmutation, gefolgt 2015 von
        der Entfernung von Eierstöcken und Eileitern – beides bewusst öffentlich
        kommuniziert.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jolie</strong> ist dem <strong>sozialen Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SO1 kann nicht nicht-handeln, wenn Handlung möglich ist – auch bei
        der eigenen Gesundheit; der Zweierflügel bringt das direkte, persönliche Mitgefühl
        hinzu, das aus einer privaten medizinischen Entscheidung eine öffentliche Botschaft
        macht. Genau diese Kombination – Pflicht zum Richtigen, verbunden mit dem Wunsch,
        anderen durch die eigene Offenheit zu nützen – bestimmte den Umgang mit der eigenen
        genetischen Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Belastete Familiengeschichte:</strong>
        Jolies Mutter Marcheline Bertrand starb 2007 an Eierstockkrebs im Alter von 56
        Jahren, ihre Großmutter mütterlicherseits an Eierstockkrebs, ihre Tante an
        Brustkrebs – eine familiäre Häufung, die einen genetischen Test nahelegte.</p>
        <p class="vb-intro"><strong>b) Nachweis der BRCA1-Genmutation:</strong>
        Ein Gentest bestätigte bei Jolie eine Mutation im BRCA1-Gen, die das Risiko für
        Brust- und Eierstockkrebs statistisch erheblich erhöht.</p>
        <p class="vb-intro"><strong>c) Ärztlich geschätztes Risiko von rund 87 Prozent:</strong>
        Nach ärztlicher Einschätzung lag ihr persönliches Risiko, im Laufe ihres Lebens an
        Brustkrebs zu erkranken, bei etwa 87 Prozent, das Risiko für Eierstockkrebs bei etwa
        50 Prozent.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Präventive doppelte Mastektomie 2013:</strong>
        Zwischen Februar und April 2013 unterzog sich Jolie einer vorbeugenden doppelten
        Mastektomie mit anschließender Rekonstruktion, um das Brustkrebsrisiko drastisch zu
        senken.</p>
        <p class="vb-intro"><strong>b) Öffentliche Ankündigung per Zeitungsessay:</strong>
        Statt die Operation privat zu halten, veröffentlichte Jolie im Mai 2013 einen
        ausführlichen Essay in der New York Times unter dem Titel „My Medical Choice", in
        dem sie ihre Entscheidung und deren medizinische Grundlage detailliert erklärte.</p>
        <p class="vb-intro"><strong>c) Entfernung von Eierstöcken und Eileitern 2015:</strong>
        Zwei Jahre später, im März 2015, ließ Jolie zusätzlich präventiv ihre Eierstöcke und
        Eileiter entfernen, nachdem ein Bluttest erhöhte Werte gezeigt hatte, die auf eine
        beginnende Krebserkrankung hindeuten konnten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein tatsächlicher Krebsbefund:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses handelte es sich
        bei Jolie nicht um eine bereits bestehende Krebserkrankung, sondern um eine rein
        präventive Entscheidung aufgrund eines statistisch erhöhten Risikos.</p>
        <p class="vb-intro"><strong>b) Zweiter Essay zur Eierstockoperation:</strong>
        Auch die Entfernung von Eierstöcken und Eileitern begleitete Jolie 2015 mit einem
        weiteren öffentlichen Essay in der New York Times, in dem sie den Entscheidungsweg
        erneut offenlegte.</p>
        <p class="vb-intro"><strong>c) Nachweisbarer Effekt auf öffentliche Wahrnehmung:</strong>
        Nach Jolies Essay von 2013 registrierten Ärzte weltweit einen deutlichen Anstieg von
        Anfragen zu BRCA-Gentests – ein Phänomen, das später als „Angelina-Jolie-Effekt"
        bekannt wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale und medizinische Aufmerksamkeit:</strong>
        Jolies Entscheidungen lösten internationale Berichterstattung aus und wurden in
        zahlreichen Studien als Fallbeispiel für den Einfluss prominenter Gesundheitsoffenheit
        auf das Präventionsverhalten der Allgemeinbevölkerung untersucht.</p>
        <p class="vb-intro"><strong>b) Kontroverse um Zugänglichkeit und Kosten:</strong>
        Der „Angelina-Jolie-Effekt" führte auch zu einer öffentlichen Debatte darüber, dass
        präventive Gentests und Operationen nicht allen Frauen gleichermaßen zugänglich
        sind – eine Diskussion, die Jolie selbst in ihren Essays mit aufgriff.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes öffentliches Engagement:</strong>
        Jolie setzt ihr humanitäres und filmisches Engagement seither unverändert fort, ohne
        dass die präventiven Eingriffe ihr öffentliches Leben sichtbar einschränkten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Handeln, weil Handlung möglich ist:</strong>
        Die SO1-typische Überzeugung, dass Unrecht – auch ein erhöhtes gesundheitliches
        Risiko – nicht einfach hingenommen werden darf, wenn eine Handlungsmöglichkeit
        besteht, prägte Jolies Entscheidung für die präventiven Operationen von Beginn an.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die bewusste Öffentlichkeit:</strong>
        Dieselbe Verbindung aus Haltung und Herz, die Jolies humanitäres Engagement prägt,
        zeigte sich auch hier: Statt die Operationen privat zu halten, machte sie sie
        öffentlich, weil andere Frauen davon profitieren könnten – Fürsorge als Handlung,
        nicht als Gefühl.</p>
        <p class="vb-intro"><strong>c) Pflicht zur Sichtbarkeit statt Rückzug:</strong>
        Wo andere eine derart intime medizinische Entscheidung privat gehalten hätten,
        veröffentlichte Jolie zwei ausführliche Essays – ein Muster, das ihrem gesamten
        öffentlichen Wirken entspricht: Das Richtige tun und es sichtbar machen, nicht um
        Bewunderung zu ernten, sondern weil Sichtbarkeit selbst als Verpflichtung erlebt
        wird.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kämpferin gegen Unrecht, die auch das genetische Risiko als Unrecht behandelte:</strong>
        Jolies gesamtes öffentliches Wirken beruht auf der Überzeugung, dass sichtbares
        Unrecht ein Handeln erfordert – bei der eigenen genetischen Diagnose übertrug sie
        genau diese Haltung auf den eigenen Körper: ein statistisches Risiko wurde zu einer
        Sache, gegen die aktiv vorgegangen werden musste.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Brust und Eierstöcke, die Organe der weiblichen Fürsorge?</strong>
        Für eine soziale Eins mit Zweierflügel, deren gesamtes Lebenswerk um Mutterschaft,
        Fürsorge für fremde Kinder und den Schutz von Verwundbaren kreist, liegt eine Deutung
        nahe: Ausgerechnet jene Organe, die im Volksmund für Mutterschaft und weibliche
        Fürsorge stehen, wurden zum Gegenstand einer präventiven, öffentlich gemachten
        Entscheidung. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins zwangsläufig zu genetisch
        bedingten Krebsrisiken führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Jolies Fall zeigen lässt, ist ein Muster
        im Umgang mit einem gesundheitlichen Risiko, das bei einer ausgeprägten sozialen Eins
        mit Zweierflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Jolie kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die soziale Eins mit
        Zweierflügel kann reflexhaft nicht nicht-handeln, wenn eine Gefahr erkannt ist, und
        macht aus privaten Entscheidungen fast zwangsläufig öffentliche Botschaften. Wer die
        eigene Neigung, jede erkannte Gefahr sofort in sichtbares Handeln zu übersetzen,
        nicht als Muster erkennt, riskiert, dass kaum Raum bleibt, eine schwierige
        Entscheidung erst einmal privat zu verarbeiten, bevor sie zur öffentlichen Aufgabe
        wird.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 1 mit Zweierflügel erklärt bei <strong>Angelina Jolie</strong> vieles
        am Umgang mit ihrem genetischen Risiko: eine Frau, deren gesamtes öffentliches
        Wirken der Sichtbarmachung von Unrecht gilt, machte auch ihre eigene präventive
        Entscheidung zu einer öffentlichen Botschaft – die Gans, die selbst im eigenen
        Körper kein Risiko unbeachtet ließ und die Formation dadurch stärker machte, dass sie
        offen über die eigene Verwundbarkeit sprach.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-angelina-jolie", label:"Porträt: Angelina Jolie (SO1w2)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

export function bobMarleyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bob-marley-portrait.jpg" alt="Bob Marley" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bob Marley</p>
        <p class="krim-portrait-typ">SO2w1 · Sozialer Typ 2 mit Einserflügel · 1945–1981</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Bob Marley</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-bob-marley">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: ein 1977 entdecktes malignes Melanom an
        der Zehe, dessen dringend empfohlene Amputation Marley aus religiösen Gründen
        ablehnte – eine Entscheidung, die seinen frühen Tod im Alter von 36 Jahren
        mitbestimmte.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Marley</strong> ist dem <strong>sozialen Typ 2 mit Einserflügel</strong>
        zugeordnet. Die SO2 stellt ihre Fürsorge in den Dienst eines größeren Anliegens,
        nicht der eigenen Person; der Einserflügel gibt dieser Fürsorge eine moralische
        Gewissheit, die keinen Kompromiss kennt. Genau diese Kombination – die eigene
        Gesundheit dem übergeordneten Auftrag und der religiösen Überzeugung
        unterzuordnen – bestimmte den Verlauf seiner Krankheit bis zum Tod.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verletzung beim Fußballspielen 1977:</strong>
        Eine Verletzung an der großen Zehe des rechten Fußes, die zunächst als
        Sportverletzung galt, heilte nicht wie erwartet ab.</p>
        <p class="vb-intro"><strong>b) Diagnose eines malignen Melanoms:</strong>
        Ärzte diagnostizierten ein akrolentiginöses malignes Melanom – eine besonders
        aggressive Hautkrebsform, die häufig an Händen und Füßen auftritt und dort oft spät
        erkannt wird.</p>
        <p class="vb-intro"><strong>c) Dringende Empfehlung zur Amputation:</strong>
        Die behandelnden Ärzte rieten zur Amputation der Zehe, um eine Ausbreitung des
        Tumors zu verhindern – eine aus medizinischer Sicht dringliche Maßnahme.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ablehnung der Amputation aus religiösen Gründen:</strong>
        Marley lehnte den Eingriff ab, da der Rastafari-Glaube die Unversehrtheit des
        Körpers als heilig ansieht – eine Entscheidung, die er trotz der ärztlichen
        Dringlichkeit nicht revidierte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung des Tourprogramms:</strong>
        Statt sich behandeln zu lassen, setzte Marley seine intensive Tour- und
        Aufnahmetätigkeit über Jahre nahezu unverändert fort.</p>
        <p class="vb-intro"><strong>c) Ausbreitung des Krebses über mehrere Jahre:</strong>
        In den folgenden Jahren metastasierte der Krebs unbemerkt in Lunge, Leber und
        Gehirn, bis die Erkrankung 1980 nicht mehr zu übersehen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Zusammenbruch beim Joggen im September 1980:</strong>
        Während einer Tour durch die USA brach Marley beim Joggen im Central Park
        zusammen – ein Ereignis, das den fortgeschrittenen Zustand seiner Erkrankung
        öffentlich sichtbar machte.</p>
        <p class="vb-intro"><strong>b) Letzter öffentlicher Auftritt kurz danach:</strong>
        Nur wenige Tage später gab Marley in Pittsburgh sein letztes Konzert, ohne dass das
        Publikum vom Ausmaß seiner Erkrankung wusste.</p>
        <p class="vb-intro"><strong>c) Erfolglose Behandlungsversuche in Deutschland:</strong>
        Anschließend suchte Marley eine alternative Krebsbehandlung bei einem Arzt in
        Bayern auf, die den fortgeschrittenen Krebs jedoch nicht mehr aufhalten konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 11. Mai 1981 in Miami:</strong>
        Bob Marley starb im Alter von nur 36 Jahren auf dem Rückweg von der Behandlung in
        Deutschland nach Jamaika, in einem Krankenhaus in Miami.</p>
        <p class="vb-intro"><strong>b) Weltweite Trauer und posthumer Ruhm:</strong>
        Marleys Tod löste weltweite Trauer aus und markierte zugleich den Beginn eines bis
        heute ungebrochenen posthumen Ruhms als globale Reggae-Ikone.</p>
        <p class="vb-intro"><strong>c) Bis heute diskutierte Entscheidung:</strong>
        Marleys Ablehnung der Amputation wird bis heute als eines der bekanntesten Beispiele
        dafür diskutiert, wie religiöse Überzeugung eine medizinisch dringend gebotene
        Behandlung verhindern kann.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fürsorge für ein ganzes Volk, nicht für sich selbst:</strong>
        Die SO2-typische Ausrichtung auf ein größeres Anliegen zeigte sich auch im Umgang
        mit der eigenen Krankheit: Marley setzte seine Tourneen fort, weil die Botschaft für
        die Vielen wichtiger schien als die eigene Gesundheit.</p>
        <p class="vb-intro"><strong>b) Der Einserflügel und die unbedingte religiöse Überzeugung:</strong>
        Dieselbe Kompromisslosigkeit, mit der Marley zwei Tage nach dem Attentat 1976 mit
        der Kugel im Arm auftrat, zeigte sich im Umgang mit der Krebsdiagnose als Weigerung,
        eine als religiös falsch erkannte Behandlung überhaupt in Erwägung zu ziehen.</p>
        <p class="vb-intro"><strong>c) Der eigene Körper als Teil einer größeren Ordnung:</strong>
        Für Marley war der eigene Körper nicht getrennt von seinem Glauben zu betrachten –
        die Weigerung, sich amputieren zu lassen, war keine Verdrängung der Krankheit,
        sondern die konsequente Anwendung derselben moralischen Gewissheit, die auch seine
        Musik trug.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann, der für die Unversehrtheit eines Volkes kämpfte und die eigene Unversehrtheit über sein Leben stellte:</strong>
        Marleys gesamtes Werk kreiste um die Versöhnung, Heilung und Würde eines
        unterdrückten Volkes – ausgerechnet er stellte die religiöse Vorstellung der eigenen
        körperlichen Unversehrtheit über die medizinisch dringend gebotene Behandlung, bis
        die Krankheit sich seiner Kontrolle entzog.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine auffällige Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-muhammad-ali">Muhammad
        Ali (SO2w1)</a>: Auch Ali ignorierte über Jahre gesundheitliche Warnzeichen im
        Boxsport, weil eine als moralisch richtig erkannte Sache – bei Ali der Kampf im
        Ring, bei Marley die religiöse Überzeugung – wichtiger erschien als die eigene
        körperliche Unversehrtheit. Bei beiden SO2w1ern zeigt sich dasselbe Muster: eine
        Gewissheit, im Recht zu sein, die auch das eigene Leben der übergeordneten Sache
        unterordnet.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Zehe, der Kontaktpunkt zur Erde?</strong>
        Für eine soziale Zwei mit Einserflügel, deren gesamtes Werk um Verwurzelung,
        Herkunft und die Rückkehr zu den eigenen Wurzeln kreiste, liegt eine Deutung nahe:
        Ausgerechnet jener Körperteil, der den Kontakt zum Boden herstellt, wurde zum
        Ausgangspunkt einer Krankheit, die er nicht rechtzeitig behandeln ließ. Diese Deutung
        ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu einer verweigerten
        Krebsbehandlung führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Marleys Fall zeigen lässt, ist ein Muster
        im Umgang mit einer lebensbedrohlichen Diagnose, das bei einem ausgeprägten sozialen
        Typ 2 mit Einserflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Marley kannte sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 2
        mit Einserflügel hält reflexhaft an der eigenen moralischen Gewissheit fest, statt
        die eigene Verwundbarkeit rechtzeitig ernst zu nehmen, und lebte genau dieses Muster
        bis zum Tod unverändert aus. Wer die eigene Neigung, eine als richtig erkannte
        Überzeugung über die eigene körperliche Sicherheit zu stellen, nicht als Muster
        erkennt, riskiert, dass genau diese Überzeugung das eigene Leben verkürzt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 2 mit Einserflügel erklärt bei <strong>Bob Marley</strong> vieles am
        Verlauf seiner Krankheit: ein Mann, dessen gesamtes Werk der Heilung eines Volkes
        galt, unterwarf die eigene Heilung derselben unbedingten religiösen Überzeugung, die
        ihn weltberühmt gemacht hatte – der Golden Retriever, der bis zuletzt für andere da
        war und die eigene Wunde nicht rechtzeitig versorgen ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-bob-marley", label:"Porträt: Bob Marley (SO2w1)"},
        {route:"krankheitsportraets-muhammad-ali", label:"Krankheitsporträt: Muhammad Ali (SO2w1) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function claudioNaranjoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-claudio-naranjo-portrait.jpg" alt="Dr. Claudio Naranjo – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Claudio Naranjo</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1932–2019</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dr. Claudio Naranjo</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-claudio-naranjo">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – als der chilenische Psychiater, der die 27 Subtypen
        des Enneagramms begründete, auf denen dieser gesamte Kompass aufbaut. Diese Seite
        beleuchtet ein Kapitel, das dort nur angedeutet wird: In seinen letzten Lebensjahren
        litt Naranjo an Parkinson – sichtbar in zunehmender Gang- und Sprechschwierigkeit
        sowie einem unwillkürlichen Armzittern, das bei seinem letzten öffentlichen Auftritt
        auf der World Ayahuasca Conference 2019 in Girona deutlich zu sehen war. Wenige
        Wochen später, am 12. Juli 2019, starb er im Alter von 86 Jahren in Berkeley,
        Kalifornien. Die öffentliche Dokumentation seiner Erkrankung ist dünner als bei den
        anderen Krankheitsporträts dieses Kompasses – die hier versammelten Fakten stammen
        aus Berichten von Teilnehmenden seiner letzten Vorträge, nicht aus einer offiziell
        bestätigten Diagnosehistorie.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Naranjo</strong> selbst ordnete sich der <strong>sozialen Fünf mit
        Viererflügel</strong> zu. Er nannte die soziale Fünf <em>Totem</em>: Wissen wird nicht
        privat gehortet, sondern der Gemeinschaft zur Verfügung gestellt – als Vermächtnis,
        als Lehre, als Beitrag zu einem größeren Ganzen. Der Viererflügel gibt dieser Haltung
        eine introspektive, oft melancholische Tiefe. Sein Lebenswerk – die systematische
        Weitergabe des Enneagramms an Generationen von Schülerinnen und Schülern in den
        SAT-Seminaren – ist genau diese Signatur: Wissen, das nicht für sich behalten,
        sondern konsequent weitergegeben wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Sichtbare Symptome erst spät öffentlich geworden:</strong>
        Über den genauen Beginn von Naranjos Parkinson-Erkrankung gibt es keine gesicherten
        öffentlichen Angaben – sichtbar wurde sie vor allem in seinen letzten Lebensjahren,
        als Gang und Sitzhaltung zunehmend eingeschränkt waren.</p>
        <p class="vb-intro"><strong>b) Stimme und Bewegung betroffen:</strong>
        Teilnehmende seiner letzten Vorträge berichten von Sprechschwierigkeiten und
        eingeschränkter Mobilität – zwei Kernsymptome fortgeschrittenen Parkinsons.</p>
        <p class="vb-intro"><strong>c) Der Gedanke, es könnte der letzte Auftritt sein:</strong>
        Naranjo soll erwogen haben, an der World Ayahuasca Conference 2019 in Girona gar
        nicht mehr teilzunehmen, mit dem Gefühl, es könnte sein letzter großer öffentlicher
        Auftritt werden – eine Ahnung, die sich wenige Monate später bestätigte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein letzter Vortrag trotz sichtbarer Symptome:</strong>
        Bei seinem letzten öffentlichen Vortrag in Girona war ein unwillkürliches
        Armzittern deutlich sichtbar – Naranjo hielt den Vortrag dennoch, statt aus
        gesundheitlichen Gründen abzusagen.</p>
        <p class="vb-intro"><strong>b) Ein Lebensthema bis zum Schluss präsent:</strong>
        Sein letzter öffentlicher Auftritt widmete sich der Frage, ob Ayahuasca zur Heilung
        globaler Probleme beitragen könne – ein Thema, das seine jahrzehntelange Verbindung
        von Psychotherapie, Spiritualität und gesellschaftlichem Wandel bündelte.</p>
        <p class="vb-intro"><strong>c) Tod wenige Wochen später:</strong>
        Am 12. Juli 2019 starb Naranjo im Alter von 86 Jahren in seinem Zuhause in Berkeley
        – wenige Wochen nach diesem letzten öffentlichen Auftritt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentlicher Auftritt trotz sichtbarer Schwäche:</strong>
        Statt sich angesichts fortschreitender körperlicher Einschränkungen aus der
        Öffentlichkeit zurückzuziehen, entschied sich Naranjo, seine Lehre auch mit
        sichtbar zitternder Hand fortzusetzen.</p>
        <p class="vb-intro"><strong>b) Lehre als Lebensinhalt bis zuletzt:</strong>
        Naranjos gesamtes Spätwerk war von dem Wunsch geprägt, sein Wissen möglichst
        vollständig an die nächste Generation weiterzugeben – ein Antrieb, der sich auch in
        seinem letzten Lebensjahr nicht abschwächte.</p>
        <p class="vb-intro"><strong>c) Zurückhaltung gegenüber der eigenen Krankheit:</strong>
        Es gibt keine bekannten öffentlichen Äußerungen Naranjos, in denen er selbst
        ausführlich über seine Parkinson-Erkrankung spricht – ein Schweigen, das im
        Kontrast zu seiner sonstigen Offenheit über innere Prozesse steht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Lebenswerk, das die eigene Krankheit überdauert:</strong>
        Die 27 Subtypen, die Naranjo aus der Arbeit Oscar Ichazos weiterentwickelte und
        systematisierte, bilden bis heute die Grundlage zahlloser Enneagramm-Anwendungen
        weltweit – auch dieses Kompasses.</p>
        <p class="vb-intro"><strong>b) Ein letzter Auftritt als bewegender Abschluss:</strong>
        Sein Vortrag in Girona 2019 wird von Teilnehmenden bis heute als besonders
        eindringlich beschrieben – nicht trotz, sondern gerade wegen der sichtbaren
        körperlichen Verletzlichkeit, mit der er gehalten wurde.</p>
        <p class="vb-intro"><strong>c) Ein Tod ohne große öffentliche Inszenierung:</strong>
        Naranjos Tod im Juli 2019 wurde in Fachkreisen und unter seinen zahllosen Schülern
        weltweit gewürdigt, blieb medial aber vergleichsweise zurückhaltend – passend zu
        einem Mann, dessen Wirkung sich vor allem innerhalb einer engagierten Fachgemeinschaft
        entfaltete, weniger im breiten öffentlichen Rampenlicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Wissen als letzte Energiequelle:</strong>
        Selbst als Körper und Stimme ihm zunehmend Grenzen setzten, blieb die Weitergabe von
        Wissen Naranjos zentraler Antrieb – typisch für die soziale Fünf, deren Identität
        eng mit ihrem Beitrag zu einer Wissensgemeinschaft verbunden ist.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel als Quelle innerer Tiefe im Alter:</strong>
        Die introspektive, oft melancholische Note des Viererflügels dürfte sich gerade in den
        letzten Lebensjahren verstärkt gezeigt haben – ein Bewusstsein der eigenen
        Endlichkeit, das sich mit dem Wunsch verband, das eigene Werk noch abzurunden.</p>
        <p class="vb-intro"><strong>c) Öffentlichkeit als letzter Akt der Weitergabe:</strong>
        Der letzte Vortrag in Girona lässt sich als bewusster letzter Akt des Teilens lesen
        – Wissen, das bis zur physischen Grenze weitergegeben wurde, ganz im Sinne des
        Totem-Prinzips, das Naranjo selbst für die soziale Fünf beschrieb.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Erkrankung, die genau die Werkzeuge der Lehre betraf:</strong>
        Naranjos gesamtes Wirken beruhte auf Sprache und körperlicher Präsenz in Seminaren –
        ausgerechnet Stimme und Bewegung, die Grundwerkzeuge seiner jahrzehntelangen
        Lehrtätigkeit, wurden durch Parkinson zunehmend eingeschränkt.</p>
        <p class="vb-intro"><strong>b) Weitermachen bis zur physischen Grenze:</strong>
        Statt sich angesichts der sichtbaren Symptome zurückzuziehen, hielt Naranjo seinen
        letzten großen Vortrag – ein Muster, das zu seiner eigenen Beschreibung der sozialen
        Fünf als Wissensvermittlerin passt, die ihren Beitrag zur Gemeinschaft nicht
        vorzeitig abbricht.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Krankheit, die Stimme und Bewegung nahm?</strong>
        Für eine soziale Fünf mit Viererflügel, deren Identität und Lebenssinn eng mit der
        Weitergabe von Wissen an eine Gemeinschaft verknüpft sind, lässt sich im
        fortschreitenden Verlust von Sprache und Bewegung eine Zuspitzung des eigenen
        Lebensmusters lesen: Der Körper, der jahrzehntelang das Vehikel der Lehre war, wurde
        selbst zum letzten Prüfstein dafür, wie weit sich Wissen noch weitergeben lässt, wenn
        die Mittel dafür zunehmend fehlen. Diese Deutung wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus – und mit besonderer Vorsicht:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf mit Viererflügel zwangsläufig zu
        Parkinson führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Anders als bei den übrigen Krankheitsporträts dieses Kompasses ist
        die öffentliche Quellenlage zu Naranjos Erkrankung ausgesprochen dünn: Es gibt keine
        bestätigte Diagnosehistorie, keine offiziellen medizinischen Angaben, nur Berichte
        von Teilnehmenden seines letzten Vortrags. Dieses Porträt beruht entsprechend auf
        weniger gesicherten Quellen als die anderen und sollte mit dieser Einschränkung
        gelesen werden. Das entsprechende Krankheitsbild wird in diesem Kompass nach und
        nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Naranjo kannte sein eigenes Muster besser als die meisten Menschen – und doch lebte er die soziale Fünf mit ihrem Bedürfnis, Wissen bis zuletzt weiterzugeben, bis in seinen letzten öffentlichen Vortrag hinein aus, statt sich angesichts fortschreitender Parkinson-Symptome zurückzuziehen. Selbst bewusstes Wissen um das eigene Muster schützt nicht automatisch davor, es bis zur körperlichen Grenze zu leben.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Fünf mit Viererflügel bestätigt sich bei <strong>Claudio Naranjo</strong>
        noch einmal darin, wie er selbst mit fortschreitender körperlicher Einschränkung
        umging: kein Rückzug, sondern ein letzter, sichtbar mühevoller Akt der Weitergabe
        seines Wissens an eine Gemeinschaft, die er selbst jahrzehntelang aufgebaut hatte.
        Der Oktopus, der sein Wissen nicht für sich behielt, sondern der Welt schenkte,
        reichte es bis in seine letzten Lebensmonate weiter – mit zitternder Hand, aber
        ungebrochenem Willen zu lehren.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-claudio-naranjo", label:"Porträt: Dr. Claudio Naranjo (SO5w4) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function elonMuskKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elon-musk-portrait.jpg" alt="Elon Musk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elon Musk</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · geb. 1971</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elon Musk</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-elon-musk">Porträt berühmter
        Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein Kapitel,
        das dort nicht behandelt wird: Musks öffentliches Bekenntnis zum Asperger-Syndrom,
        das er 2021 live im US-Fernsehen bekannt gab.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Musk</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SO7 opfert die eigene Zurückhaltung für eine größere Vision und scheut
        keine Bühne, wenn es der Sache dient; der Sechserflügel bringt eine Wachsamkeit
        hinzu, die auch das eigene Anderssein offen benennt, statt es zu verbergen. Genau
        diese Kombination – eine private Diagnose, die auf der größtmöglichen öffentlichen
        Bühne verkündet wird – bestimmte den Umgang mit dem eigenen Asperger-Syndrom.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Auffälligkeiten bereits in der Kindheit:</strong>
        Nach eigener und familiärer Schilderung zeigte Musk bereits als Kind Verhaltensweisen,
        die rückblickend als typisch für das Asperger-Syndrom gelten, darunter intensive,
        eng fokussierte Interessen und soziale Schwierigkeiten.</p>
        <p class="vb-intro"><strong>b) Keine formale Diagnose in jungen Jahren:</strong>
        Eine formale Diagnose erfolgte nach eigener Aussage nicht in der Kindheit, sondern
        erst deutlich später im Erwachsenenleben.</p>
        <p class="vb-intro"><strong>c) Jahrzehntelange öffentliche Wahrnehmung als „exzentrisch":</strong>
        Vor der Offenlegung wurde Musks ungewöhnliches öffentliches Auftreten – ungefilterte
        Kommentare, ungewöhnlicher Humor, direkte Art – von Medien häufig lediglich als
        exzentrisch beschrieben, ohne Bezug zu einer neurologischen Grundlage.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Öffentliche Bekanntgabe am 8. Mai 2021:</strong>
        Musk gab die Diagnose live als Moderator der US-Sketch-Show „Saturday Night Live"
        bekannt – vor einem Millionenpublikum, in einem unterhaltsamen, selbstironischen
        Rahmen statt in einem ernsten Interview.</p>
        <p class="vb-intro"><strong>b) Erste bekannte Aspberger-Offenlegung eines Milliardärs dieser Größenordnung:</strong>
        Musk gilt als einer der ersten sehr prominenten Unternehmer, die eine
        Autismus-Spektrum-Diagnose öffentlich und in dieser Form bekannt machten.</p>
        <p class="vb-intro"><strong>c) Verbindung mit Selbstreflexion zu sozialem Verhalten:</strong>
        In derselben Sendung reflektierte Musk offen darüber, dass er manchmal Schwierigkeiten
        habe, soziale Signale zu lesen – eine für ihn ungewöhnlich direkte Selbstauskunft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Positive und kritische mediale Reaktionen zugleich:</strong>
        Die Offenlegung löste sowohl Anerkennung für die Offenheit als auch kritische
        Stimmen aus, die den unterhaltsamen Rahmen als unpassend für ein ernstes Gesundheitsthema
        empfanden.</p>
        <p class="vb-intro"><strong>b) Keine Veränderung des öffentlichen Auftretens danach:</strong>
        Nach der Offenlegung änderte Musk sein öffentliches Auftreten – provokante Aussagen,
        ungefilterte Kommentare auf Social Media – nicht erkennbar; die Diagnose wurde nicht
        zum Anlass einer neuen öffentlichen Zurückhaltung.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte extreme Arbeitsintensität:</strong>
        Musks bekanntermaßen enorme Arbeitsbelastung über mehrere Unternehmen hinweg blieb
        nach der Offenlegung unverändert bestehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite Aufmerksamkeit für Autismus im Erwachsenenalter:</strong>
        Die Offenlegung trug international zur Sichtbarkeit von spät diagnostiziertem Autismus
        bei Erwachsenen bei, insbesondere in beruflichen Spitzenpositionen.</p>
        <p class="vb-intro"><strong>b) Neubewertung früherer öffentlicher Auftritte:</strong>
        Nach der Offenlegung deuteten viele Kommentatoren frühere, als ungewöhnlich
        wahrgenommene öffentliche Auftritte Musks rückblickend im Licht der Diagnose neu.</p>
        <p class="vb-intro"><strong>c) Keine dauerhafte Verankerung als zentrales öffentliches Thema:</strong>
        Trotz der breiten anfänglichen Aufmerksamkeit blieb das Asperger-Syndrom in der
        Folgezeit kein durchgängig präsentes Thema in Musks öffentlicher Kommunikation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die größtmögliche Bühne statt stiller Offenlegung:</strong>
        Die SO7-typische Überzeugung, dass die eigene Botschaft möglichst viele Menschen
        erreichen soll, zeigte sich exemplarisch: Statt eines diskreten Interviews wählte
        Musk die größtmögliche mediale Plattform für die Offenlegung.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die offene Benennung des eigenen Andersseins:</strong>
        Dieselbe Wachsamkeit, mit der Musk gesellschaftliche Risiken öffentlich benennt,
        zeigte sich hier als Bereitschaft, auch die eigene neurologische Andersartigkeit
        offen zu thematisieren, statt sie hinter einem glatten öffentlichen Bild zu
        verbergen.</p>
        <p class="vb-intro"><strong>c) Unterhaltung als Vehikel für eine ernste Botschaft:</strong>
        Dass die Offenlegung in einem komödiantischen Format erfolgte, passt zur SO7-typischen
        Fähigkeit, auch schwierige Themen in eine zugängliche, positive Erzählung zu
        verwandeln, statt sie als reine Last darzustellen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Mann des Unaufhörlichen Bauens, dessen eigenes Denken anders funktioniert als das der meisten:</strong>
        Musks gesamtes öffentliches Wirken beruht auf einer außergewöhnlichen Fähigkeit zu
        intensiver, fokussierter Konzentration auf einzelne Probleme – genau jene kognitive
        Eigenart, die sein Lebenswerk trägt, ist zugleich Teil derselben neurologischen
        Struktur, die er als Asperger-Syndrom benannte.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die soziale Wahrnehmung, bei einem Mann mit derart öffentlicher Rolle?</strong>
        Für einen sozialen Typ 7 mit Sechserflügel, dessen gesamtes Wirken auf öffentlicher
        Sichtbarkeit und der Fähigkeit beruht, große Menschenmengen zu begeistern, liegt eine
        Deutung nahe: Ausgerechnet jene kognitive Eigenart, die das Lesen sozialer Signale
        erschwert, betrifft einen Mann, dessen berufliches Leben untrennbar mit öffentlicher
        Kommunikation verbunden ist. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig mit dem
        Asperger-Syndrom verbunden ist – <strong>jeder Mensch kann jede Form
        neurologischer Andersartigkeit entwickeln, unabhängig vom Subtyp.</strong> Was sich
        an Musks Fall zeigen lässt, ist ein Muster im Umgang mit einer spät benannten
        neurologischen Diagnose, das bei einem ausgeprägten sozialen Typ 7 mit Sechserflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Musk kennt sein eigenes Muster nicht als Enneagramm-Struktur – der soziale Typ 7 mit
        Sechserflügel hält reflexhaft an der Überzeugung fest, dass die größtmögliche
        öffentliche Bühne der richtige Ort für jede Botschaft ist, auch für die eigene
        neurologische Diagnose, und lebt genau dieses Muster bis heute weitgehend unverändert
        aus. Wer die eigene Neigung, persönliche Themen unmittelbar in öffentliche
        Inszenierung zu verwandeln, nicht als Muster erkennt, riskiert, dass ernste
        Themen in der Unterhaltung untergehen, statt die ihnen angemessene Tiefe zu
        erreichen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der soziale Typ 7 mit Sechserflügel erklärt bei <strong>Elon Musk</strong> vieles am
        Umgang mit dem eigenen Asperger-Syndrom: ein Mann, dessen gesamtes öffentliches
        Wirken auf größtmöglicher Sichtbarkeit beruht, wählte auch für die eigene
        neurologische Diagnose die größte verfügbare Bühne – der Biber, der selbst die
        eigene Andersartigkeit nicht verbirgt, sondern sie zu einem weiteren, öffentlich
        sichtbaren Teil seines Bauwerks macht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-elon-musk", label:"Porträt: Elon Musk (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function franzLisztKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-liszt-portrait.jpg" alt="Franz Liszt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Liszt</p>
        <p class="krim-portrait-typ">SX7w8 · Sexueller Typ 7 mit Achterflügel · 1811–1886</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schimpanse</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Tierentsprechung: Schimpanse" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Liszt</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-franz-liszt">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Klaviervirtuose und
        Komponist und seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das
        dort kurz thematisiert wird: Herzschwäche, Wassersucht und fortschreitende Erblindung in
        seinen letzten Lebensjahren, die ihn nicht zum Innehalten brachten, sondern bis nach
        Bayreuth trieben, wo er 1886 an einer Lungenentzündung starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Liszt</strong> ist dem <strong>sexuellen Typ 7 mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp <em>Suggestibilität</em>: die vollständige
        Hingabe an das, was begeistert, ohne Vorbehalt oder Bremse. Der Achterflügel bringt die
        Bereitschaft zum offenen Kampf statt zum Ausweichen hinzu. Genau diese Maßlosigkeit –
        die Leidenschaft der Sieben – bestimmte auch, wie Liszt mit seiner eigenen,
        fortschreitenden Krankheit umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Fortschreitende Herzschwäche und Wassersucht ab den 1870er-Jahren:</strong>
        Schon Jahre vor seinem Tod litt Liszt zunehmend an Herzbeschwerden und Ödemen
        („Wassersucht"), die seine körperliche Belastbarkeit spürbar einschränkten.</p>
        <p class="vb-intro"><strong>b) Fortschreitende Erblindung eines Auges:</strong>
        Grauer Star ließ Liszts Sehkraft auf einem Auge in seinen letzten Lebensjahren
        zunehmend nachlassen – für einen Pianisten und Dirigenten eine erhebliche
        Beeinträchtigung, die er kaum thematisierte.</p>
        <p class="vb-intro"><strong>c) Unverändertes Reisepensum trotz der Beschwerden:</strong>
        Trotz seiner gesundheitlichen Probleme hielt Liszt an seiner „vie trifurquée" fest –
        einem Leben, das er beharrlich zwischen Weimar, Rom und Budapest aufteilte, mit
        ständigem Unterrichten, Reisen und öffentlichen Auftritten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kein Rückzug vom Unterrichten und Reisen:</strong>
        Liszt unterrichtete bis in seine letzten Lebensjahre Hunderte Schüler und reiste
        weiterhin unermüdlich zwischen seinen drei Wohnorten – eine Lebensweise, die er trotz
        nachlassender Kräfte nicht einschränkte.</p>
        <p class="vb-intro"><strong>b) Zunehmender Alkoholkonsum in den letzten Lebensjahren:</strong>
        Zeitgenossen berichteten besorgt von einem wachsenden Cognac-Konsum, der mit
        depressiven Verstimmungen und den zahlreichen persönlichen Verlusten seiner späten
        Jahre in Verbindung gebracht wurde.</p>
        <p class="vb-intro"><strong>c) Depressive Phasen nach schweren persönlichen Verlusten:</strong>
        Der frühe Tod seines Sohnes Daniel 1859 und seiner Tochter Blandine 1862 hinterließ
        tiefe Spuren, die sich in den letzten Lebensjahren zunehmend mit den körperlichen
        Beschwerden vermischten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Reise nach Bayreuth im Juli 1886:</strong>
        Trotz sich rapide verschlechternder Gesundheit reiste der bereits schwer kranke Liszt
        zu den von seinem Schwiegersohn Richard Wagner begründeten Festspielen, um seine
        Tochter Cosima zu unterstützen.</p>
        <p class="vb-intro"><strong>b) Teilnahme an einer Aufführung trotz Fieber:</strong>
        Bereits mit einer schweren Erkältung und Fieber geschwächt, bestand Liszt darauf, eine
        Aufführung von „Tristan und Isolde" zu besuchen – gegen den ausdrücklichen Rat der
        behandelnden Ärzte, die ihm strikte Bettruhe verordnet hatten.</p>
        <p class="vb-intro"><strong>c) Tod am 31. Juli 1886 in Bayreuth:</strong>
        Franz Liszt starb im Alter von 74 Jahren an einer Lungenentzündung, mitten im Zentrum
        jener Festspiele, die untrennbar mit seinem eigenen musikalischen Erbe verbunden waren.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Robert Schumann</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-robert-schumann">Robert
        Schumann</a> (SX7w8) kannte diese Unfähigkeit, eine Intensität rechtzeitig zu bremsen –
        bei ihm eskalierte sie in den Sprung in den Rhein 1854. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-robert-schumann">eigenes
        Krankheitsporträt</a> zeigt dasselbe SX7w8-Muster wie bei Liszt: eine Hingabefähigkeit
        ohne eingebaute Bremse, die sich, wenn sie an eine Grenze stößt, nicht in Rückzug,
        sondern in eine weitere Zuspitzung entlädt – bei Liszt die Reise nach Bayreuth trotz
        schwerer Krankheit, bei Schumann der verzweifelte Sprung ins eiskalte Wasser.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod mitten im eigenen Vermächtnis:</strong>
        Dass Liszt ausgerechnet bei den Bayreuther Festspielen starb, die ohne seine
        Unterstützung Wagners und seine familiäre Verbindung zu Cosima kaum in dieser Form
        existiert hätten, wirkt wie eine bittere Pointe seines Lebens.</p>
        <p class="vb-intro"><strong>b) Ein Ende, das lange unterschätzt wurde:</strong>
        Weil Liszt seine Beschwerden über Jahre kaum öffentlich thematisierte und weiterhin
        unterrichtete und reiste, wurde der Ernst seines Zustands von seinem Umfeld erst in den
        letzten Wochen wirklich erkannt.</p>
        <p class="vb-intro"><strong>c) Eine letzte, kompromisslose Geste:</strong>
        Die Teilnahme an der Aufführung trotz Fieber und ärztlichem Verbot wurde im Nachhinein
        oft als letzte, typische Geste eines Mannes gedeutet, der sich nie von äußeren Grenzen
        hatte einschränken lassen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kein Kürzertreten bis zuletzt:</strong>
        Dieselbe unerschöpfliche Begeisterungsfähigkeit, die Liszt jahrzehntelang durch ganz
        Europa trieb, ließ ihn auch angesichts massiver gesundheitlicher Warnsignale nicht
        innehalten.</p>
        <p class="vb-intro"><strong>b) Ärztlicher Rat gegen den eigenen Antrieb:</strong>
        Die Weigerung, dem Rat seiner Ärzte zu folgen und die Aufführung auszulassen, zeigt
        denselben Achterflügel-Trotz, der Liszt einst dazu brachte, sich öffentlich gegen die
        etablierte Leipziger Musikwelt zu stellen – Widerstand macht ihn nur entschlossener.</p>
        <p class="vb-intro"><strong>c) Kein geordneter Rückzug, sondern ein Zusammenbruch mitten im Geschehen:</strong>
        Statt eines ruhigen Lebensabends endete Liszts Leben mitten im Zentrum eines
        öffentlichen Ereignisses – der Schimpanse, der bis zuletzt im Geschehen blieb, statt
        sich zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Jahre wachsender Beschwerden, die das Lebenstempo nicht bremsten:</strong>
        Herzschwäche, Wassersucht und Erblindung entwickelten sich über Jahre – doch Liszts
        Reise- und Arbeitspensum blieb bis fast zum Schluss praktisch unverändert. Die
        Leidenschaft der Sieben, die <strong>Völlerei</strong>, kannte auch angesichts des
        eigenen körperlichen Verfalls keine Bremse.</p>
        <p class="vb-intro"><strong>b) Alkohol als stille Begleiterscheinung der Maßlosigkeit:</strong>
        Der zunehmende Cognac-Konsum seiner letzten Jahre passt in dasselbe Muster wie sein
        gesamtes Leben: Intensität als Antwort auf jede Erfahrung, auch auf Trauer und
        körperlichen Verfall, statt Rückzug oder Schonung.</p>
        <p class="vb-intro"><strong>c) Wenn die Sieben unter chronischem Stress zur Eins wird:</strong>
        Dass Liszt trotz Fieber und ausdrücklichem ärztlichem Verbot auf den Besuch der
        Aufführung bestand, wirkt weniger wie die spielerische Wahlfreiheit der gesunden Sieben
        als wie eine fast pflichtbewusste, rigide Weigerung nachzugeben. Wer über Jahre in
        chronischem körperlichem Verfall lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Sieben ist das die Eins. Dieses
        unnachgiebige „Ich lasse mich davon nicht abhalten" in seinen letzten Lebenswochen
        erinnert an die starre Pflichterfüllung des Stresspunkts, nicht an die Leichtigkeit
        des Kerntyps – bei unverändertem Kerntyp SX7w8.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Herz und Lunge?</strong>
        Für eine sexuelle Sieben, deren gesamte Lebenskraft sich in unermüdlicher, körperlicher
        Präsenz auf der Bühne und in ständigem Reisen ausdrückte, liegt eine Deutung nahe:
        Ausgerechnet jene Organe, die Ausdauer und Durchhaltevermögen ermöglichten, wurden zum
        Schauplatz des Verfalls – als hätte der Körper irgendwann die Rechnung für ein Leben
        ohne eingebaute Pause präsentiert. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sieben zwangsläufig zu Herz- oder
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Liszts Fall zeigen lässt, ist ein Muster im
        Umgang mit fortschreitender Krankheit, das bei einer ausgeprägten sexuellen Sieben mit
        Achterflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Liszt kannte sein eigenes Muster nicht – die sexuelle Sieben mit Achterflügel lässt
        sich von Widerstand nicht bremsen, sondern erst recht anspornen, und genau dieses
        Muster trieb ihn trotz Herzschwäche, Erblindung und Fieber unbeirrt weiter, statt
        rechtzeitig kürzerzutreten. Wer die eigene Unfähigkeit, eine Grenze zu akzeptieren,
        nicht als wiederkehrendes Muster erkennt, kann sie auch nicht durchbrechen, wenn der
        eigene Körper längst unübersehbare Warnsignale sendet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Liszts</strong> sexuelle Sieben mit
        Achterflügel noch einmal ablesen: Jahre wachsender körperlicher Beschwerden, die das
        Lebenstempo nicht bremsten, und ein letzter, kompromissloser Auftritt gegen ärztlichen
        Rat, der zum Todesstoß wurde. Der Schimpanse, der ganze Säle in Ekstase versetzte – und
        dessen eigener Körper am Ende der einzige war, der ihn endgültig zum Stillstand
        brachte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-franz-liszt", label:"Porträt: Franz Liszt (SX7w8) – Lebenswerk"},
        {route:"krankheitsportraets-robert-schumann", label:"Krankheitsporträt: Robert Schumann (SX7w8) – dieselbe Unfähigkeit, kürzerzutreten"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Krankheitsporträt: Leonard Bernstein (SX7w6) – letztes Konzert gegen ärztlichen Rat"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx7", label:"Subtyp-Profil SX7"},
      ])}
    </div>
  `);
}

export function friedrichNietzscheKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-nietzsche-portrait.jpg" alt="Friedrich Nietzsche" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Nietzsche</p>
        <p class="krim-portrait-typ">SX5w4 · Sexueller Typ 5 mit Viererflügel · 1844–1900</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Igel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Tierentsprechung: Igel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedrich Nietzsche</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-friedrich-nietzsche">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Hier geht es ausschließlich um ein Kapitel, das dort nur flüchtig
        gestreift wird: Über Jahrzehnte begleiteten Nietzsche chronische Migräne, quälende
        Magenbeschwerden und fortschreitende Sehschwäche, bis fast zur Erblindung. Am 3. Januar
        1889 brach er auf einer Turiner Straße zusammen und verbrachte die letzten elf Jahre
        seines Lebens in geistiger Umnachtung – eine Ursache, die bis heute nicht abschließend
        geklärt ist.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Nietzsche</strong> ist der <strong>sexuellen Fünf mit Viererflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-frederic-chopin">Frédéric Chopin</a>
        in diesem Kompass. Naranjo nannte die sexuelle Fünf den Kontratyp der Fünf: Ihr
        Schlüsselbegriff ist <em>Vertrauen</em> – sie sucht nicht Distanz zu allen, sondern
        die eine Verbindung, die alles trägt. Der Viererflügel macht aus dem Schmerz eines
        Bruchs künstlerischen und sprachlichen Ausdruck von unerhörter Intensität.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nach innen gerichtet, radikal ehrlich:</strong>
        Nietzsches Blick suchte die eigene Wahrheit ohne Rücksicht auf Konvention – der
        typische Fünferblick, der sich selbst durchleuchtet, bevor er die Welt beurteilt.</p>
        <p class="vb-intro"><strong>b) Wachsam gegenüber dem eigenen Körper, ohne ihn schonen zu können:</strong>
        Nietzsche führte akribisch Buch über seine Migräneanfälle, Sehstörungen und
        Verdauungsbeschwerden – dieselbe analytische Genauigkeit, mit der er Philosophie
        betrieb, richtete sich auch auf sein eigenes, zunehmend versagendes Nervensystem.</p>
        <p class="vb-intro"><strong>c) Öffentlich nur auf dem Papier, nie im Gespräch:</strong>
        Seine radikalste Selbstoffenbarung, <em>Ecce Homo</em>, entstand kurz vor dem
        Zusammenbruch – die sexuelle Fünf öffnet sich vollständig, aber ausschließlich im
        eigenen Medium, nie im direkten, ungeschützten Kontakt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Rückzug aus dem Amt:</strong>
        1879 gab Nietzsche aus gesundheitlichen Gründen seine Professur in Basel auf – mit
        nur 34 Jahren. Das Aufgeben eines gesicherten Postens war für die sexuelle Fünf
        weniger Verlust als Befreiung: Rückzug ist keine Schwäche, sondern die Voraussetzung
        für das eine, entscheidende Werk.</p>
        <p class="vb-intro"><strong>b) Zehn Jahre auf der Suche nach dem richtigen Klima:</strong>
        Sils-Maria im Sommer, Nizza und Genua im Winter – Nietzsche wanderte von Ort zu Ort,
        stets auf der Suche nach Bedingungen, die seine Beschwerden linderten, oft mit nur
        einem Koffer.</p>
        <p class="vb-intro"><strong>c) Höchste Produktivität trotz körperlichen Verfalls:</strong>
        Ausgerechnet in diesen Jahren radikaler Zurückgezogenheit und fortschreitender
        Krankheit entstanden seine Hauptwerke – <em>Also sprach Zarathustra</em>, <em>Jenseits
        von Gut und Böse</em>, <em>Zur Genealogie der Moral</em>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Krise als Schreibauslöser:</strong>
        Innerhalb weniger Wochen nach dem endgültigen Bruch mit Lou Salomé 1883 schrieb
        Nietzsche den ersten Teil von <em>Also sprach Zarathustra</em> – Schmerz, der sich
        sofort in Sprache verwandelte, statt verdrängt zu werden.</p>
        <p class="vb-intro"><strong>b) Fast völlige Isolation als Lebensform:</strong>
        Ohne akademische Anstellung, ohne feste Bindung, meist allein – die sexuelle Fünf
        erträgt diese Isolation nicht nur, sie braucht sie, um den einen Kanal offen zu
        halten, durch den alles strömt.</p>
        <p class="vb-intro"><strong>c) Der Zusammenbruch als radikalstes Symptom:</strong>
        Am 3. Januar 1889 brach Nietzsche in Turin zusammen, nachdem er – so die Überlieferung
        – einen misshandelten Kutschgaul umarmt hatte. Von diesem Tag an schrieb er nie wieder
        ein philosophisches Werk.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das erst nach dem Zusammenbruch wirkte:</strong>
        Nietzsche starb 1900, ohne je zu erleben, wie sein Denken die Philosophie des
        zwanzigsten Jahrhunderts prägen würde – eine Wirkung, die vollständig posthum
        einsetzte.</p>
        <p class="vb-intro"><strong>b) Verformt durch fremde Hände:</strong>
        Seine Schwester Elisabeth, die ihn in den letzten Jahren pflegte, verfälschte später
        seine Schriften für nationalistische Zwecke – eine bittere Ironie für einen Denker,
        dessen Werk gerade der Vereinnahmung durch fremde Ideologien widersprach.</p>
        <p class="vb-intro"><strong>c) Ein Bild, das bis heute nachwirkt:</strong>
        Der zusammenbrechende Philosoph, der einen misshandelten Gaul umarmt, ist zu einem der
        bekanntesten Bilder der Philosophiegeschichte geworden – ein Symptom, das zur Legende
        wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Geiz mit Energie, nicht mit Geld:</strong>
        Das Schicksalsmuster der Fünf gilt bei der SX5 nicht dem materiellen Besitz, sondern
        der eigenen Kraft – und Nietzsche hatte kaum eine Reserve übrig, die er nicht restlos
        in sein Werk investierte.</p>
        <p class="vb-intro"><strong>b) Verschmelzung von Denken und Leiden:</strong>
        Für Nietzsche gab es keine Trennung zwischen körperlichem Schmerz und philosophischer
        Erkenntnis – manche seiner schärfsten Einsichten entstanden unmittelbar aus Phasen
        akuter Migräne.</p>
        <p class="vb-intro"><strong>c) Rastlose Produktivität bis zur völligen Erschöpfung:</strong>
        In den Jahren vor dem Zusammenbruch schrieb Nietzsche in einem Tempo, das seinen
        Körper offensichtlich überforderte – als spüre er, dass die Zeit, die ihm blieb,
        begrenzt war.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte ungeklärter Beschwerden:</strong>
        Chronische Migräne, quälende Magenbeschwerden, fortschreitende Sehschwäche – die
        genaue Ursache blieb zu Lebzeiten ungeklärt und wird bis heute diskutiert: von einer
        seltenen Erbkrankheit über einen langsam wachsenden Hirntumor bis zu einer damals
        diagnostizierten, aber nie zweifelsfrei belegten Syphilis-Infektion.</p>
        <p class="vb-intro"><strong>b) Elf Jahre Umnachtung nach dem Zusammenbruch:</strong>
        Nach dem 3. Januar 1889 sprach und schrieb Nietzsche nie wieder zusammenhängend. Er
        wurde zunächst von seiner Mutter, nach deren Tod 1897 von seiner Schwester Elisabeth
        gepflegt, bis er 1900 in Weimar starb.</p>
        <p class="vb-intro"><strong>c) Der letzte offene Kanal:</strong>
        Nietzsche hatte sich zeitlebens fast ausschließlich auf dem Papier vollständig
        gezeigt, nie im direkten Gespräch. Als der geistige Zusammenbruch auch diesen letzten
        verbliebenen Kanal verschloss, blieb kein Weg mehr, sich der Welt mitzuteilen.</p>
        <p class="vb-intro"><strong>d) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="krankheitsportraets-frederic-chopin">Frédéric Chopin</a>
        (SX5w4) brach körperlich zusammen, kurz nachdem seine eine entscheidende Verbindung
        zerbrochen war – bei Chopin die Trennung von George Sand 1847, bei Nietzsche der Bruch
        mit Lou Salomé 1883. Bei beiden zeigt sich dasselbe SX5w4-Muster: Die eine Verbindung,
        die alles trägt, ist zugleich das, wovon die körperliche und schöpferische Kraft
        abhängt – zerbricht sie, folgt der körperliche Einbruch auf dem Fuß.</p>
        <p class="vb-intro"><strong>e) Warum ausgerechnet der Kopf?</strong>
        Migräne, Sehschwäche und schließlich der geistige Zusammenbruch trafen bei Nietzsche
        exakt jenes Organ, das für die sexuelle Fünf das Zentrum ihrer gesamten Existenz
        bildet: den Ort, an dem Gedanken entstehen, verdichtet und schließlich in Sprache
        verwandelt werden. Für einen Menschen, der sich der Welt fast ausschließlich über
        seinen Kopf – über das geschriebene Wort – mitteilte, war ein Angriff auf genau dieses
        Organ die radikalstmögliche Bedrohung: nicht nur des Körpers, sondern der einzigen
        Verbindung, die ihm zur Welt noch blieb. Dass ausgerechnet der Verstand selbst
        versagte, bei einem Philosophen, dessen ganzes Werk der Schärfe des Denkens gewidmet
        war, liest sich als bitterste denkbare Zuspitzung seines Lebensmusters. Diese Deutung
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>f) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Fünf zwangsläufig zu neurologischen
        Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Nietzsches Fall zeigen lässt, ist ein Muster, das bei
        totaler Konzentration der eigenen Kraft auf ein einziges geistiges Werk in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nietzsche kannte sein eigenes Muster nicht – die sexuelle Fünf bündelt ihre gesamte Kraft auf den einen Kanal, durch den sich alles entlädt, ohne Rücksicht auf die eigenen Reserven, und genau das trieb ihn dazu, bis zum völligen Zusammenbruch weiterzuschreiben. Wer die eigene Konzentration der Kräfte nicht als Muster erkennt, merkt nicht, wann die letzte Reserve aufgebraucht ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Nietzsches</strong> Erkrankung folgt noch einmal exakt dem Muster der sexuellen
        Fünf mit Viererflügel: radikale Konzentration der eigenen Kraft auf ein
        einziges Werk, eine Isolation, die Voraussetzung statt Mangel war, und ein
        Zusammenbruch, der ausgerechnet das einzige Organ traf, über das er sich der Welt
        jemals mitgeteilt hatte. Der Igel aus Röcken zeigte sich nie vollständig einem Menschen –
        aber Seite für Seite seinem Werk, bis der Kopf selbst, der all das ermöglicht hatte,
        verstummte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-friedrich-nietzsche", label:"Porträt: Friedrich Nietzsche (SX5w4) – Lebenswerk"},
        {route:"beruehmte-frederic-chopin", label:"Porträt: Frédéric Chopin (SX5w4)"},
        {route:"krankheitsportraets-frederic-chopin", label:"Krankheitsporträt: Frédéric Chopin (SX5w4) – dieselbe SX5w4-Parallele"},
        {route:"krankheitsportraets-blaise-pascal", label:"Krankheitsporträt: Blaise Pascal (SX5w6)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx5", label:"Subtyp-Profil SX5"},
      ])}
    </div>
  `);
}

export function goldaMeirKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-golda-meir-portrait.jpg" alt="Golda Meir" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Golda Meir</p>
        <p class="krim-portrait-typ">SE8w9 · Selbsterhaltender Typ 8 mit Neunerflügel · 1898–1978</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Orang-Utan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Tierentsprechung: Orang-Utan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Golda Meir</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-golda-meir">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen, mit einem kurzen Hinweis auf ihre verschwiegene Krebserkrankung. Diese
        Seite vertieft genau dieses Kapitel: eine Lymphdrüsenkrebs-Diagnose, die sie über
        siebzehn Jahre hinweg – auch während ihrer gesamten Amtszeit als Premierministerin –
        weitgehend geheim hielt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Meir</strong> ist der <strong>selbsterhaltenden Acht mit Neunerflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-winston-churchill">Winston Churchill</a>
        in diesem Kompass. Naranjo nannte diesen Subtyp <em>Satisfacción</em>: Sicherheit
        entsteht durch kompromisslose Verteidigung des eigenen Territoriums und die Weigerung,
        Schwäche zu zeigen. Der Neunerflügel bringt Ausdauer und die Fähigkeit hinzu, eine
        Position über Jahre zu halten, ohne sie vorschnell aufzugeben – bei Meir auch im
        Umgang mit der eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der eigene Körper als Privatsache:</strong>
        Meir behandelte gesundheitliche Fragen zeitlebens als etwas, das ausschließlich sie
        selbst und ihren engsten Kreis anging – nie als etwas, das öffentliche Debatte oder
        gar Mitleid verdiente.</p>
        <p class="vb-intro"><strong>b) Diagnose bereits in den 1960er-Jahren:</strong>
        Die genaue Erstdiagnose ihrer Krebserkrankung datieren Quellen unterschiedlich, meist
        auf die späten 1960er-Jahre – also noch vor ihrem Amtsantritt als Premierministerin
        1969.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten als selbstverständliche Reaktion:</strong>
        Von Anfang an war für Meir klar, dass die Diagnose keinen Einfluss auf ihre politische
        Laufbahn haben würde – ein Muster, das sich durch ihre gesamte spätere Amtszeit zog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Regelmäßige, verdeckte Behandlungstermine:</strong>
        Über Jahre nahm Meir wiederkehrende medizinische Behandlungen wahr, die vor der
        Öffentlichkeit und weiten Teilen selbst ihres eigenen Kabinetts verborgen blieben.</p>
        <p class="vb-intro"><strong>b) Ein Amt, das keine Rücksicht auf die Diagnose nahm:</strong>
        Während ihrer Amtszeit als Premierministerin (1969–1974) traf Meir einige der
        folgenreichsten außenpolitischen Entscheidungen ihres Landes – parallel zu einer
        Krankheit, die sie konsequent aus jeder offiziellen Terminplanung heraushielt.</p>
        <p class="vb-intro"><strong>c) Eine kleine Zahl von Eingeweihten:</strong>
        Nur ein enger Kreis aus Familie, Ärzten und wenigen politischen Vertrauten wusste um
        das tatsächliche Ausmaß ihrer Erkrankung – ein Schweigen, das über Jahre hielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Jom-Kippur-Krieg 1973 mitten in der Erkrankung:</strong>
        Die schwersten Wochen ihrer politischen Laufbahn – der Überraschungsangriff Ägyptens
        und Syriens im Oktober 1973 und seine Folgen – trug Meir, ohne die eigene
        Krebserkrankung auch nur ansatzweise öffentlich zu machen.</p>
        <p class="vb-intro"><strong>b) Rücktritt aus politischen, nicht gesundheitlichen Gründen:</strong>
        Als Meir im April 1974 zurücktrat, begründete sie dies mit der politischen
        Verantwortung für die Versäumnisse vor dem Jom-Kippur-Krieg – nicht mit ihrer
        Gesundheit, die zu diesem Zeitpunkt bereits seit Jahren angegriffen war.</p>
        <p class="vb-intro"><strong>c) Tod am 8. Dezember 1978:</strong>
        Meir starb in Jerusalem im Alter von 80 Jahren an den Folgen ihrer Krebserkrankung –
        mehr als ein Jahrzehnt nach der vermuteten Erstdiagnose und vier Jahre nach ihrem
        Rückzug aus dem Amt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine der bestgehüteten Gesundheitsgeschichten ihrer Zeit:</strong>
        Erst nach ihrem Tod wurde das volle Ausmaß und die lange Dauer ihrer Erkrankung
        öffentlich bekannt – ein Beleg dafür, wie konsequent Meir die Kontrolle über diese
        Information behielt.</p>
        <p class="vb-intro"><strong>b) Respekt durch demonstrierte Unbeugsamkeit:</strong>
        Gerade weil sie keine Schwäche zeigte, verstärkte sich ihr Ruf als kompromisslose,
        unerschütterliche Staatsfrau – ein Effekt, den die SE8 bewusst oder unbewusst
        kultiviert.</p>
        <p class="vb-intro"><strong>c) Eine Regierungszeit, die im Rückblick neu gelesen wird:</strong>
        Viele historische Bewertungen ihrer Amtsjahre berücksichtigen erst nachträglich, unter
        welcher gesundheitlichen Last die wichtigsten Entscheidungen tatsächlich getroffen
        wurden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Orang-Utan, der sein Revier auch krank verteidigte:</strong>
        Wo eine öffentlich sichtbare Schwäche ihre Autorität hätte untergraben können, reagierte
        Meir mit derselben stillen, zähen Kontrolle, mit der sie ihr gesamtes politisches Leben
        führte.</p>
        <p class="vb-intro"><strong>b) Kein Raum für Mitleid:</strong>
        Meirs trockener Humor und ihre Direktheit ließen in ihrem Umfeld praktisch keinen Raum
        für Fürsorge um ihre eigene Person – Schwäche wurde weder gezeigt noch eingefordert.</p>
        <p class="vb-intro"><strong>c) Ausdauer statt Eile, dank Neunerflügel:</strong>
        Wo eine SE8 mit stärker ausgeprägtem Siebenerflügel vermutlich ungeduldiger auf die
        eigene Behandlung gedrängt oder schneller resigniert hätte, hielt Meir über Jahre die
        gleiche ruhige, unbeirrte Linie durch.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Siebzehn Jahre zwischen Diagnose und Tod:</strong>
        Von der vermuteten Erstdiagnose in den späten 1960er-Jahren bis zu ihrem Tod 1978 lebte
        Meir fast zwei Jahrzehnte mit einer Krankheit, die ihre politische Laufbahn nach außen
        nie berührte.</p>
        <p class="vb-intro"><strong>b) Amt als Territorium, das nicht kampflos geräumt wird:</strong>
        Auch mit fortschreitender Krankheit dachte Meir nicht daran, ihr Amt aus
        gesundheitlichen Gründen aufzugeben – die Downing Street war für Churchill Territorium,
        das Amt der Premierministerin war es für Meir ebenso.</p>
        <p class="vb-intro"><strong>c) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-winston-churchill">Winston Churchill</a>
        (SE8w9) verbarg als Premierminister eine schwere gesundheitliche Krise – bei ihm ein
        Schlaganfall 1953 – vor Öffentlichkeit und weiten Teilen des eigenen Kabinetts. Bei
        beiden zeigt sich dasselbe SE8-Muster: Die eigene Position wird verteidigt wie
        Territorium – Krankheit ist kein Grund, sie freiwillig zu räumen, sondern eine
        Information, die man selbst kontrolliert. Diese Parallele wird auch im
        <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">Krankheitsporträt zu Churchill</a>
        aufgegriffen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das lymphatische System?</strong>
        Für eine selbsterhaltende Acht, deren gesamte Identität auf der Fähigkeit beruht,
        Bedrohungen von außen abzuwehren, liegt eine Deutung nahe: Ausgerechnet ein Organsystem,
        das den Körper vor äußeren Angreifern schützen soll, wurde selbst zum Schauplatz eines
        über Jahrzehnte verborgenen Kampfes – geführt mit derselben stillen Kontrolle, mit der
        Meir jede andere Bedrohung ihres Lebens behandelte. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Acht zwangsläufig zu
        Lymphdrüsenkrebs führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Meirs Fall zeigen lässt, ist ein Muster im Umgang mit
        der eigenen Krankheit, das bei einer ausgeprägten selbsterhaltenden Acht mit
        Neunerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Meir kannte ihr eigenes Muster nicht – die selbsterhaltende Acht duldet keine Schwäche,
        schon gar nicht die eigene, und verbarg deshalb eine schwere Krebserkrankung über
        siebzehn Jahre, statt sie auch nur einmal öffentlich einzuräumen. Wer die eigene
        Unverwundbarkeits-Fixierung nicht kennt, verwechselt Verbergen mit Stärke – selbst dann,
        wenn ein offener Umgang mit der eigenen Krankheit die eigentlich souveränere Antwort
        gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Meirs</strong> selbsterhaltende Acht mit
        Neunerflügel noch einmal ablesen: eine siebzehn Jahre lang verborgen gehaltene
        Krebserkrankung, eine Amtszeit voller folgenschwerer Entscheidungen, die sie parallel
        zur eigenen Krankheit traf, und ein Rücktritt, den sie mit Politik, nie mit Gesundheit
        begründete. Der Orang-Utan, der langsam klettert, nie fällt und selbst im Angesicht
        einer tödlichen Krankheit niemandem zeigte, wie sehr er wankte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-golda-meir", label:"Porträt: Golda Meir (SE8w9) – Lebenswerk"},
        {route:"krankheitsportraets-winston-churchill", label:"Krankheitsporträt: Winston Churchill (SE8w9) – dieselbe Verbergungsstrategie"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se8", label:"Subtyp-Profil SE8"},
      ])}
    </div>
  `);
}

export function hermannHesseKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hermann-hesse-portrait.jpg" alt="Hermann Hesse" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hermann Hesse</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · 1877–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hermann Hesse</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hermann-hesse">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen radikalen Rückzug ins Tessin und
        sein literarisches Werk über den Einzelnen zwischen zwei Welten. Diese Seite vertieft
        ein Kapitel, das dort nur am Rande erwähnt wird: lebenslange, schwere Migräne,
        chronische Augenleiden und wiederkehrende depressive Krisen, die ihn von der Jugend
        bis ins hohe Alter begleiteten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hesse</strong> ist dem <strong>selbsterhaltenden Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SE5 baut sich eine „Burg" – ein streng kontrolliertes Territorium, das
        Nähe filtert und Belastung fernhält. Genau dieses Prinzip bestimmte auch, wie er mit
        seinen chronischen Leiden umging: nicht durch Behandlung im gewöhnlichen sozialen
        Rahmen, sondern durch selbst gewählte, streng kontrollierte therapeutische und
        literarische Verarbeitung innerhalb der eigenen Burg.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste schwere Krise mit fünfzehn Jahren:</strong>
        Nach seinem Ausbruch aus dem Klosterseminar Maulbronn 1892 erlitt Hesse einen
        schweren psychischen Zusammenbruch und wurde zeitweise in eine Nervenheilanstalt
        eingewiesen – der erste einer lebenslangen Reihe depressiver Krisen.</p>
        <p class="vb-intro"><strong>b) Migräne seit den frühen Erwachsenenjahren:</strong>
        Bereits in seinen Zwanzigern begannen die schweren Migräneanfälle, die ihn fortan
        regelmäßig für Tage arbeitsunfähig machten – ein Leiden, das ihn durch sein gesamtes
        Leben begleitete.</p>
        <p class="vb-intro"><strong>c) Zunehmende Augenprobleme parallel zur Migräne:</strong>
        Chronische Augenleiden traten hinzu und verschärften sich phasenweise so stark, dass
        Lesen und Schreiben – die Grundlage seines gesamten Schaffens – zeitweise kaum
        möglich waren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nervenzusammenbruch 1916:</strong>
        Der Tod seines Vaters, die schwere Erkrankung seines jüngsten Sohnes und die
        zunehmende psychische Krise seiner ersten Frau Maria Bernoulli führten 1916 zu einem
        weiteren, schweren Zusammenbruch.</p>
        <p class="vb-intro"><strong>b) Psychoanalyse als kontrollierter Rahmen:</strong>
        Statt sich sozialen Bindungen zuzuwenden, unterzog sich Hesse einer Psychoanalyse bei
        Josef Bernhard Lang, einem Schüler C. G. Jungs – über 60 Sitzungen innerhalb eines
        streng abgegrenzten, therapeutischen Settings.</p>
        <p class="vb-intro"><strong>c) Rückzug ins Tessin als dauerhafte Lösung:</strong>
        1919 verließ er Deutschland und seine Familie endgültig und zog allein nach
        Montagnola – ein Umzug, der zeitlich unmittelbar auf die schwerste seiner bisherigen
        Krisen folgte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Krisen bis ins hohe Alter:</strong>
        Auch nach dem Umzug ins Tessin blieben depressive Phasen, Migräne und Augenleiden
        Teil seines Alltags – die neue Umgebung linderte die Symptome, beseitigte sie aber
        nicht.</p>
        <p class="vb-intro"><strong>b) Streng kontrollierter Tagesablauf als Bewältigungsstrategie:</strong>
        Hesse organisierte sein Leben um einen exakt geregelten Rhythmus aus Schreiben,
        Gärtnern und Malen – eine Struktur, die ihm half, mit den wiederkehrenden Episoden
        umzugehen, ohne sie öffentlich zu machen.</p>
        <p class="vb-intro"><strong>c) Literarische statt persönliche Verarbeitung:</strong>
        Seine Krisen flossen unmittelbar in sein Werk ein – „Der Steppenwolf" (1927) gilt als
        direkte literarische Verarbeitung einer besonders schweren depressiven Phase in den
        1920er-Jahren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das aus dem eigenen Leiden schöpfte:</strong>
        Gerade weil Hesse seine inneren Krisen so genau und ohne Beschönigung beschrieb,
        fanden sich Generationen von Lesern, die sich selbst als Außenseiter erlebten, in
        seinen Büchern wieder.</p>
        <p class="vb-intro"><strong>b) Ein Nobelpreis, den er nicht persönlich entgegennahm:</strong>
        Als er 1946 den Nobelpreis für Literatur erhielt, reiste er – seiner Rückzugslogik
        treu und möglicherweise auch aus gesundheitlichen Gründen – nicht persönlich nach
        Stockholm.</p>
        <p class="vb-intro"><strong>c) Ein Leben, das trotz allem 85 Jahre währte:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses führten Hesses
        chronische Leiden nicht zu einem frühen Tod – er starb 1962 im Schlaf, im hohen
        Alter, in derselben selbst gewählten Umgebung, die ihn Jahrzehnte zuvor aufgenommen
        hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Burg, die auch die eigene Krankheit filterte:</strong>
        Dieselbe radikale Kontrolle über die eigene Nähe, die Hesses gesamtes Leben prägte,
        bestimmte auch, wie er seine Krisen behandelte – nie in ungefilterten sozialen
        Beziehungen, sondern immer in streng abgegrenzten Rahmen: Therapie, Briefwechsel,
        literarische Verarbeitung.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die wache Sorge um sich selbst:</strong>
        Dieselbe wache, fast ängstliche Aufmerksamkeit, die ihn 1914 scharf gegen den
        Kriegsjubel positionierte, richtete sich auch nach innen – eine ständige Beobachtung
        der eigenen psychischen Verfassung, die ihn frühzeitig professionelle Hilfe suchen
        ließ, statt die Krise zu verdrängen.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Zeugnis, aber ein literarisches:</strong>
        Anders als manch anderer Fall dieses Kompasses sprach Hesse kaum öffentlich über
        seine Leiden – doch sein Werk selbst wurde zum indirekten, ausführlichen Zeugnis
        dieses inneren Kampfes.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Geist, der sich selbst zur Last wurde:</strong>
        Hesses gesamtes Leben war von der Überzeugung geprägt, dass ungestörte Innenschau nur
        durch radikalen Rückzug gesichert werden kann – Migräne, Augenleiden und Depression
        waren Bedrohungen, die sich ausgerechnet in dem Organ manifestierten, das dieser
        Rückzug am meisten brauchte: dem eigenen Kopf.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-spinoza">Baruch de Spinoza</a>
        (ebenfalls SE5w6) starb an einer Lungenerkrankung, die aus seinem eigenen Handwerk
        erwuchs; Hesse litt sein Leben lang an Migräne und Depression, ohne daran zu sterben.
        Beide Fälle zeigen dieselbe Grundstruktur der SE5 aus verschiedenen Blickwinkeln: Wo
        Spinoza sein Leiden fast vollständig verschwieg, verarbeitete Hesse seines
        systematisch in Therapie und Literatur – zwei Varianten desselben Rückzugsmusters,
        eine tödlich, eine lebenslang tragbar. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-spinoza">Krankheitsporträt zu Spinoza</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Kopf und Augen?</strong>
        Für eine selbsterhaltende Fünf mit Sechserflügel, deren gesamte Kraft auf
        Beobachtung, Lesen und intensiver geistiger Verarbeitung beruhte, liegt eine Deutung
        nahe: Ausgerechnet jene Organe, die ihm die stille Beobachtung der Welt und die
        eigene innere Welt ermöglichten, wurden zum Schauplatz wiederkehrenden Leidens – als
        würde die intensive, nach innen gerichtete Beobachtung sich irgendwann gegen das
        eigene Sehen und Denken selbst richten. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu Migräne
        oder Depression führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Hesses Fall zeigen lässt, ist ein Muster
        im Umgang mit chronischem psychischem und körperlichem Leiden, das bei einer
        ausgeprägten selbsterhaltenden Fünf mit Sechserflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hesse kannte sein eigenes Muster nicht – die selbsterhaltende Fünf mit Sechserflügel
        sichert reflexhaft die eigene, kontrollierte Innenwelt, statt sich je vollständig auf
        soziale Unterstützung im Umgang mit der eigenen Krankheit einzulassen, und genau
        dieses Muster lebte er bis ins hohe Alter unverändert aus. Wer die eigene
        Notwendigkeit, jede Krise innerhalb der eigenen Burg zu bewältigen, nicht als Muster
        erkennt, trägt sie ein Leben lang allein.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Fünf mit Sechserflügel erklärt bei <strong>Hesse</strong> vieles
        am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf stiller
        Beobachtung und Verarbeitung beruhte, trug seine schwersten Krisen jahrzehntelang
        allein – die Eule, die selbst im eigenen, sicheren Garten nie ganz zur Ruhe kam.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hermann-hesse", label:"Porträt: Hermann Hesse (SE5w6) – Schriftsteller"},
        {route:"krankheitsportraets-spinoza", label:"Krankheitsporträt: Baruch de Spinoza (SE5w6) – dieselbe Rückzugslogik, andere Krankheit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

export function jamieLeeCurtisKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jamie-lee-curtis-portrait.jpg" alt="Jamie Lee Curtis" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jamie Lee Curtis</p>
        <p class="krim-portrait-typ">SX1w2 · Sexueller Typ 1 mit Zweierflügel · geb. 1958</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jamie Lee Curtis</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jamie-lee-curtis">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nur kurz erwähnt wird: eine 22 Jahre andauernde Opiatabhängigkeit,
        die 1989 nach einer kosmetischen Operation begann und die sie erst 1999 überwand.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Curtis</strong> ist dem <strong>sexuellen Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SX1 duldet keine Heuchelei, auch nicht gegenüber sich selbst; der
        Zweierflügel bringt die Fürsorge hinzu, die schließlich den Anstoß zum Ausstieg gab.
        Genau diese Kombination – jahrelanges heimliches Scheitern an einem selbst
        gesetzten Anspruch, gefolgt von einer radikal ehrlichen, öffentlichen Aufarbeitung –
        bestimmte den Verlauf ihrer Suchterkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verordnung von Opiaten nach kosmetischer Operation 1989:</strong>
        Nach eigener Schilderung erhielt Curtis nach einem kleinen kosmetischen Eingriff an
        den Augenlidern 1989 Opiate verschrieben, die zunächst regulär eingesetzt wurden.</p>
        <p class="vb-intro"><strong>b) Schleichender Übergang zur Abhängigkeit:</strong>
        Aus der ärztlich verordneten Schmerzbehandlung entwickelte sich über Jahre eine
        körperliche Abhängigkeit, die weit über die ursprünglich beabsichtigte Anwendung
        hinausging.</p>
        <p class="vb-intro"><strong>c) Jahrelange, sorgfältig verborgene Fortsetzung:</strong>
        Curtis beschrieb später, wie sie über zehn Jahre lang eine funktionierende
        Fassade aufrechterhielt, während sie heimlich Vicodin nahm – auch gegenüber engsten
        Familienmitgliedern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Entdeckung durch die eigene Schwester:</strong>
        Nach eigener Aussage wurde die Abhängigkeit publik, als sie feststellte, dass sie
        Alkoholika und Medikamente ihrer Schwester genommen hatte – ein Moment, der sie
        zwang, sich der Realität ihrer Sucht zu stellen.</p>
        <p class="vb-intro"><strong>b) Sofortiger Entschluss zur Abstinenz 1999:</strong>
        Curtis beschreibt den 19. Februar 1999 als den Tag, an dem sie zuletzt Opiate oder
        Alkohol konsumierte – ein Datum, das sie seither konsequent als ihren Nüchternheits-Jahrestag begeht.</p>
        <p class="vb-intro"><strong>c) Unterstützung durch familiäre und therapeutische Strukturen:</strong>
        Der Ausstieg gelang nach eigener Schilderung durch eine Kombination aus Therapie,
        Selbsthilfegruppen und dem offenen Rückhalt ihrer Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Frühe öffentliche Offenlegung:</strong>
        Curtis sprach bereits Anfang der 2000er-Jahre öffentlich über ihre Suchterkrankung –
        zu einem Zeitpunkt, an dem Prominente ihre Abhängigkeiten in der Regel noch
        verschwiegen.</p>
        <p class="vb-intro"><strong>b) Engagement für Suchthilfe-Organisationen:</strong>
        Seither unterstützt sie öffentlich Organisationen, die sich für Suchtprävention und
        -behandlung einsetzen, und spricht regelmäßig über den Zusammenhang zwischen
        verschriebenen Schmerzmitteln und Opioidabhängigkeit.</p>
        <p class="vb-intro"><strong>c) Kritik an der Rolle der Pharmaindustrie:</strong>
        Curtis äußerte sich wiederholt kritisch zur Verantwortung von Pharmaunternehmen bei
        der US-amerikanischen Opioidkrise, auch mit Blick auf ihre eigene Erfahrung als
        Patientin.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Anerkennung als eine der ersten offenen Stimmen Hollywoods:</strong>
        Curtis gilt bis heute als eine der ersten großen Hollywood-Schauspielerinnen, die
        offen und ohne Umschweife über eine eigene Suchterkrankung sprach.</p>
        <p class="vb-intro"><strong>b) Über zwei Jahrzehnte anhaltende Nüchternheit:</strong>
        Seit 1999 bezeichnet sich Curtis öffentlich als nüchtern – eine Kontinuität, die sie
        regelmäßig in Interviews und Reden thematisiert, ohne den Kampf zu verklären.</p>
        <p class="vb-intro"><strong>c) Kein Karriereeinschnitt durch die Offenlegung:</strong>
        Anders als befürchtet schadete die öffentliche Offenheit ihrer Karriere nicht –
        Curtis blieb durchgängig aktiv und erreichte mit dem Oscar 2023 sogar den bislang
        größten Erfolg ihrer Laufbahn.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der innere Widerspruch zwischen Anspruch und heimlicher Sucht:</strong>
        Die SX1-typische Unduldsamkeit gegenüber Heuchelei traf bei Curtis auf eine
        Erkrankung, die sie über Jahre selbst zur Heuchlerin machte – ein Widerspruch, der
        die spätere, besonders schonungslose Offenheit miterklärt.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und der Impuls zur Fürsorge nach dem Ausstieg:</strong>
        Sobald Curtis die eigene Abhängigkeit überwunden hatte, richtete sich dieselbe
        Energie, die zuvor nach innen gerichtet war, nach außen: Sie begann, andere
        Betroffene zu unterstützen und öffentlich für Suchtprävention einzutreten.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit als Ausdruck der Leidenschaft:</strong>
        Dass Curtis ihre Sucht nicht nur beendete, sondern aktiv öffentlich machte, passt zur
        SX1-typischen Überzeugung, dass Echtheit mehr zählt als Schein – auch wenn diese
        Echtheit die eigene Schwäche einschließt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Frau, die Echtheit predigt und über zehn Jahre eine Sucht verbarg:</strong>
        Curtis' gesamtes späteres öffentliches Wirken beruht auf der Überzeugung, dass das
        Echte mehr wert ist als der Schein – ausgerechnet sie lebte über zehn Jahre lang
        genau den Schein, den sie später am schärfsten kritisieren sollte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-robbie-williams">Robbie
        Williams (SX1w2)</a>: Auch Williams verbarg eine jahrzehntelange Sucht- und
        Depressionserkrankung hinter einer öffentlich erfolgreichen Fassade, bevor er sich
        radikal offen dazu bekannte. Bei beiden SX1w2ern zeigt sich dasselbe Muster: der
        Anspruch an absolute Echtheit, der die eigene heimliche Sucht umso unerträglicher
        macht, sobald sie erkannt wird – und der dieselbe Intensität später in eine
        schonungslos offene Aufarbeitung verwandelt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Opiate, die chemische Abschwächung der eigenen Intensität?</strong>
        Für eine sexuelle Eins mit Zweierflügel, deren gesamtes Wesen auf vollständiger
        Präsenz und Intensität beruht, liegt eine Deutung nahe: Opiate erzeugen genau jene
        Dämpfung und Distanz zur eigenen Wachheit, die dem SX1-Muster diametral
        entgegensteht – eine Substanz, die das eigene Feuer betäubt, statt es zu nähren.
        Diese Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu
        Opioidabhängigkeit führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Curtis' Fall zeigen lässt, ist ein
        Muster im Umgang mit einer überwundenen Suchterkrankung, das bei einer ausgeprägten
        sexuellen Eins mit Zweierflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Curtis kennt ihr eigenes Muster nicht als Enneagramm-Struktur – die sexuelle Eins mit
        Zweierflügel hält reflexhaft an einem Anspruch absoluter Echtheit fest, was das
        Eingeständnis eigener Schwäche über Jahre besonders schwer macht, und lebte genau
        dieses Muster bis zur erzwungenen Konfrontation mit der eigenen Sucht aus. Wer die
        eigene Neigung, Scheitern länger zu verbergen, je höher der eigene moralische
        Anspruch ist, nicht als Muster erkennt, riskiert, dass die Sucht sich über Jahre
        unbemerkt festsetzt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der sexuelle Typ 1 mit Zweierflügel erklärt bei <strong>Jamie Lee Curtis</strong>
        vieles am Verlauf ihrer Suchterkrankung: eine Frau, deren gesamtes späteres Wirken
        der Echtheit gilt, musste erst selbst über ein Jahrzehnt lang die Erfahrung des
        eigenen Scheins durchleben, bevor sie ihre Wahrheit aussprechen konnte – die Schwarze
        Mamba, die sich selbst am längsten getäuscht hat, bevor sie zur schärfsten Stimme
        gegen genau diese Täuschung wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jamie-lee-curtis", label:"Porträt: Jamie Lee Curtis (SX1w2)"},
        {route:"krankheitsportraets-robbie-williams", label:"Krankheitsporträt: Robbie Williams (SX1w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

export function julesVerneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jules-verne-portrait.jpg" alt="Jules Verne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jules Verne</p>
        <p class="krim-portrait-typ">SO7w6 · Sozialer Typ 7 mit Sechserflügel · 1828–1905</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Biber</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Tierentsprechung: Biber" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jules Verne</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-jules-verne">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein rastloses literarisches
        Weltenbauen. Diese Seite vertieft ein Kapitel, das dort flüchtig behandelt wird: Am
        9. März 1886 schoss sein geistig verwirrter Neffe Gaston zweimal auf ihn, eine
        Kugel blieb dauerhaft im Bein stecken – Verne hinkte fortan bis an sein Lebensende
        und litt später zusätzlich an Diabetes.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jules Verne</strong> ist dem <strong>sozialen Typ 7 mit Sechserflügel</strong>
        zugeordnet. Die SO7 opfert den eigenen unmittelbaren Genuss zugunsten einer größeren
        Idee; der Sechserflügel bringt Vorsicht und Loyalität gegenüber Autoritäten hinzu.
        Genau diese Kombination – der Wille, trotz Rückschlag weiterzubauen, gepaart mit der
        sechsertypischen Neigung, Schwäche eher zu verbergen als offen zuzugeben –
        bestimmte auch, wie Verne mit der dauerhaften Verletzung und ihren Folgen umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Schuss des Neffen am 9. März 1886:</strong>
        Vernes Neffe Gaston, der unter einer nie eindeutig diagnostizierten psychischen
        Erkrankung litt, schoss vor dem Haus in Amiens zweimal auf seinen Onkel. Ein
        Schuss verfehlte ihn, der zweite traf ihn ins linke Schienbein.</p>
        <p class="vb-intro"><strong>b) Eine Kugel, die nie entfernt wurde:</strong>
        Die Kugel steckte zu nah an wichtigen Blutgefäßen, um sie ohne erhebliches Risiko
        zu entfernen – die Ärzte entschieden sich, sie im Bein zu belassen. Verne trug sie
        bis zu seinem Tod mit sich.</p>
        <p class="vb-intro"><strong>c) Sofortige Rückkehr zur Arbeit trotz des Vorfalls:</strong>
        Bereits kurz nach dem Attentat setzte Verne seine schriftstellerische Arbeit
        fort – ein erster Hinweis auf das Muster, das seinen weiteren Umgang mit der
        Verletzung prägen sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein dauerhaftes Hinken:</strong>
        Die Verletzung heilte nie vollständig aus; Verne hinkte für den Rest seines
        Lebens und war in seiner Mobilität zunehmend eingeschränkt.</p>
        <p class="vb-intro"><strong>b) Rückzug von den weiten Reisen:</strong>
        Der Mann, der drei eigene Segelyachten besessen und Europa bereist hatte, gab
        seine ausgedehnten Seereisen nach der Verletzung weitgehend auf und zog sich
        zunehmend nach Amiens zurück.</p>
        <p class="vb-intro"><strong>c) Diabetes in den folgenden Jahren:</strong>
        In den Jahren nach dem Attentat entwickelte Verne zusätzlich Diabetes, der
        seine körperliche Verfassung weiter schwächte, ohne dass er seine schriftstellerische
        Produktivität nennenswert reduzierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kommunalpolitisches Engagement trotz Einschränkung:</strong>
        Statt sich zurückzuziehen, wirkte Verne nach der Verletzung als Stadtrat von
        Amiens und blieb bis ins hohe Alter öffentlich engagiert – ein sicherer, lokal
        begrenzter Rahmen, der zur Sechser-Vorsicht des Flügels passte.</p>
        <p class="vb-intro"><strong>b) Unverminderte literarische Produktion:</strong>
        Auch nach 1886 erschienen weiterhin neue Bände der "Voyages extraordinaires" –
        die Verletzung bremste die Menge seines Schaffens kaum.</p>
        <p class="vb-intro"><strong>c) Zunehmend düsterer Tonfall im Spätwerk:</strong>
        Romane wie "Propeller-Insel" oder spätere, postum veröffentlichte Werke zeigen
        einen spürbar skeptischeren Blick auf den technischen Fortschritt, den Verne in
        jüngeren Jahren noch blauäugig gefeiert hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Familiendrama, das öffentlich kaum thematisiert wurde:</strong>
        Verne sprach in Interviews und Briefen nur zurückhaltend über den Vorfall und
        seinen Neffen, der nach der Tat in eine psychiatrische Anstalt eingewiesen wurde –
        typisch für den Sechserflügel, der lieber Fassung wahrt, als das eigene Leid
        öffentlich auszubreiten.</p>
        <p class="vb-intro"><strong>b) Ein Nationalheld trotz sichtbarer Gebrechlichkeit:</strong>
        Verne wurde zu seinen Lebzeiten trotz seines Hinkens und seiner zunehmenden
        gesundheitlichen Probleme als literarischer Nationalheld gefeiert – die
        körperliche Einschränkung tat seinem öffentlichen Ansehen keinen Abbruch.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das die Verletzung überdauerte:</strong>
        Die "Voyages extraordinaires" wuchsen bis zu Vernes Tod 1905 weiter, teils sogar
        über seinen Tod hinaus durch postum veröffentlichte Manuskripte, die sein Sohn
        Michel überarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Weiterbauen statt Rückzug:</strong>
        Dieselbe Überzeugung, dass das eigene Werk der Welt geschuldet sei, die Vernes
        gesamtes Schaffen trug, bestimmte auch seine Reaktion auf die Verletzung – nicht
        Rückzug ins Private, sondern Fortsetzung der Arbeit, nur eben ortsgebunden statt
        auf hoher See.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und das verschwiegene Familientrauma:</strong>
        Statt öffentlich über den Schuss seines eigenen Neffen zu klagen, hielt Verne
        die Angelegenheit weitgehend privat – dieselbe Loyalität und Zurückhaltung
        gegenüber der eigenen Familie, die sich schon in seiner jahrzehntelangen
        Unterordnung unter seinen Verleger Hetzel gezeigt hatte.</p>
        <p class="vb-intro"><strong>c) Die wachsende Skepsis als sechsertypische Schattenseite:</strong>
        Der zunehmend düstere Ton seines Spätwerks lässt sich als Sechser-Reaktion lesen:
        Die anfängliche, fast naive Technikbegeisterung der SO7 wich einem wachsenden
        Bewusstsein für die Gefahren des eigenen Bauwerks, ausgelöst durch die eigene
        erlebte Verletzlichkeit.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Verletzung, die zum stillen Begleiter wurde:</strong>
        Die im Bein verbliebene Kugel war für Verne buchstäblich ein Teil seines Körpers,
        den er nicht öffentlich thematisierte, aber der sein Gehen und seine Reisefreude
        für den Rest seines Lebens einschränkte – ein Leiden, das er trug, statt es zur
        Schau zu stellen.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-moliere">Molière</a>
        (ebenfalls SO7w6) verschwieg jahrelang sein eigenes Lungenleiden, bevor er auf
        offener Bühne zusammenbrach; Verne verschwieg auf ähnliche Weise das familiäre
        Drama hinter seiner Verletzung und ihre langfristigen Folgen. Beide Fälle zeigen
        dasselbe SO7w6-Muster: Die sechsertypische Vorsicht sorgt dafür, dass persönliches
        Leid eher hinter der Fassade der Weiterarbeit verschwindet, als offen ausgesprochen
        zu werden. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-moliere">Krankheitsporträt zu Molière</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Bein?</strong>
        Für einen sozialen Siebener mit Sechserflügel, dessen ganzes Leben auf Bewegung,
        Reise und dem Erschließen neuer Welten beruhte, liegt eine Deutung nahe: Ausgerechnet
        jenes Körperteil, das ihn einst über Kontinente und auf hohe See getragen hatte,
        wurde zum Ort der dauerhaften Einschränkung – ein Symbol für die erzwungene
        Bodenhaftung eines Mannes, der zeitlebens in die Ferne gebaut hatte. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer Kausalzusammenhang,
        und wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sieben zwangsläufig zu einer
        Schussverletzung durch ein Familienmitglied führt – <strong>jeder Mensch kann
        jede Krankheit oder Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich
        an Vernes Fall zeigen lässt, ist ein Muster im Umgang mit einer dauerhaften
        körperlichen Einschränkung, das bei einer ausgeprägten sozialen Sieben mit
        Sechserflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Verne kannte sein eigenes Muster nicht – die soziale Sieben mit Sechserflügel
        verbirgt reflexhaft eigenes Leid hinter Loyalität, Pflichterfüllung und
        fortgesetzter Arbeit, statt die eigene Verletzlichkeit je offen anzuerkennen, und
        genau dieses Muster lebte er bis in seine letzten Lebensjahre unverändert aus. Wer
        die eigene Neigung, Schwäche zu verbergen, statt sie zu benennen, nicht als Muster
        erkennt, kann sie auch angesichts eines lebensverändernden familiären Traumas
        nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sieben mit Sechserflügel erklärt bei <strong>Jules Verne</strong> vieles
        am Verlauf seiner eigenen Verletzung: ein Mann, der sein ganzes Leben lang neue
        Welten erbaute, ließ sich selbst von der Kugel im eigenen Bein nicht aufhalten –
        der Biber, der weiterbaute, auch als der Damm längst Risse zeigte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-jules-verne", label:"Porträt: Jules Verne (SO7w6) – der Biber, der die Zukunft vorausschrieb"},
        {route:"krankheitsportraets-moliere", label:"Krankheitsporträt: Molière (SO7w6) – dasselbe Muster verschwiegenen Leidens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so7", label:"Subtyp-Profil SO7"},
      ])}
    </div>
  `);
}

export function klausKinskiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-klaus-kinski-portrait.jpg" alt="Klaus Kinski" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Klaus Kinski</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel · 1926–1991</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Klaus Kinski</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-klaus-kinski">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein schauspielerisches Lebenswerk und
        seine Typstruktur im Allgemeinen. Diese Seite vertieft ein Kapitel, das dort nicht
        behandelt wird: eine 1950 dokumentierte psychiatrische Zwangseinweisung mit der
        vorläufigen Diagnose Schizophrenie, eine von Kriegsgefangenschaft und Armut geprägte
        Jugend, und die erst nach seinem Tod öffentlich gewordenen Missbrauchsvorwürfe seiner
        Tochter Pola.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kinski</strong> ist dem <strong>sexuellen Typ 1 mit Neunerflügel</strong>
        zugeordnet, dem Kontratyp der Eins. Naranjo nannte diesen Subtyp <em>Inbrunst</em>:
        eine ungefilterte, kompromisslose moralische Energie, die alle sozialen Filter
        durchbricht. Genau diese schrankenlose Intensität, verbunden mit der Beharrlichkeit
        des Neunerflügels, zieht sich als Muster durch seine gesamte, teils tragische
        Krankengeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine von extremer Armut geprägte Kindheit:</strong>
        Kinski wuchs, geboren 1926 als Nikolaus Günther Nakszyński in Danzig, in bitterer Armut
        auf – eine familiäre Notlage, die er später selbst als prägend für sein gesamtes Leben
        beschrieb.</p>
        <p class="vb-intro"><strong>b) Über ein Jahr Kriegsgefangenschaft:</strong>
        Nach seinem Kriegseinsatz geriet Kinski in britische Gefangenschaft und verbrachte
        rund sechzehn Monate in einem Gefangenenlager, bevor er 1946 nach Deutschland
        zurückkehren konnte.</p>
        <p class="vb-intro"><strong>c) Fristlose Kündigung wegen unberechenbaren Verhaltens:</strong>
        Am renommierten Schlosspark-Theater in Berlin engagiert, wurde Kinski bereits 1947
        wegen seines unvorhersehbaren, schwer kontrollierbaren Auftretens wieder entlassen –
        eines der ersten dokumentierten Anzeichen eines Musters, das sein gesamtes Berufsleben
        begleiten sollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwangseinweisung am 5. September 1950:</strong>
        Der 26-jährige Kinski wurde nach einem Suizidversuch und einem Ausbruch, bei dem er die
        Küche eines Arztes verwüstete und versuchte, eine Ärztin zu würgen, von der Polizei in
        die Wittenauer Heilstätten in Berlin (im Volksmund „Bonnies Ranch") eingeliefert.</p>
        <p class="vb-intro"><strong>b) Vorläufige Diagnose Schizophrenie, später revidiert:</strong>
        Die Akte verzeichnet als vorläufige Diagnose Schizophrenie; die endgültige Einordnung
        lautete später auf Psychopathie – in heutiger Terminologie am ehesten vergleichbar mit
        einer dissozialen bzw. antisozialen Persönlichkeitsstörung.</p>
        <p class="vb-intro"><strong>c) Insulin-Behandlung und Entlassung nach drei Tagen:</strong>
        Kinski erhielt in der Klinik eine Insulinschock-Behandlung, damals ein gängiges,
        drastisches Mittel der Psychiatrie, und wurde auf eigenen Wunsch bereits nach drei
        Tagen wieder entlassen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Legendäre, oft gewalttätige Wutausbrüche am Set:</strong>
        Über Jahrzehnte hinweg war Kinski für seine Ausbrüche bei Dreharbeiten berüchtigt –
        Regisseure und Kollegen berichteten übereinstimmend von Momenten, in denen sein Zorn
        jede professionelle Kontrolle sprengte.</p>
        <p class="vb-intro"><strong>b) Ein öffentlich ausgetragener Konflikt mit Werner Herzog:</strong>
        Die Spannungen während der Dreharbeiten zu <em>Aguirre, der Zorn Gottes</em> und
        <em>Fitzcarraldo</em> eskalierten mehrfach so weit, dass Herzog später öffentlich von
        Morddrohungen berichtete – eine Beziehung, die von beiden Seiten als gleichermaßen
        zerstörerisch wie unverzichtbar beschrieben wurde.</p>
        <p class="vb-intro"><strong>c) Eine 1988 zurückgezogene, 1996 erneut veröffentlichte Autobiografie:</strong>
        Kinskis Autobiografie „Kinski Uncut" musste nach ihrem ersten Erscheinen wegen
        Verleumdungsklagen zurückgezogen werden und erschien erst nach seinem Tod erneut –
        ein Text von schonungsloser, oft verstörender Offenheit über sich selbst und andere.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Rechtsstreit um seine eigene Krankenakte:</strong>
        Erst 2008, siebzehn Jahre nach seinem Tod, wurde die psychiatrische Akte von 1950
        öffentlich bekannt, nachdem das zuständige Klinikarchiv historische Unterlagen
        freigegeben hatte – seine Witwe ging daraufhin juristisch gegen die Veröffentlichung
        vor.</p>
        <p class="vb-intro"><strong>b) Anklagen seiner Tochter nach seinem Tod:</strong>
        2013 veröffentlichte Kinskis Tochter Pola ein Buch, in dem sie ihm wiederholten
        sexuellen Missbrauch in ihrer Kindheit vorwarf – Vorwürfe, die posthum ein neues,
        erschütterndes Licht auf sein Privatleben warfen und bis heute Teil seiner
        öffentlichen Rezeption sind.</p>
        <p class="vb-intro"><strong>c) Ein Lebenswerk, das trotz allem Bestand hat:</strong>
        Trotz der Kontroversen um seine Person gelten seine Filme mit Werner Herzog bis heute
        als Meilensteine der Filmgeschichte – ein Werk, das sich nicht von der Person trennen
        lässt, die es hervorgebracht hat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Mamba, die sich bedroht fühlt und zubeißt:</strong>
        Der Zusammenbruch 1950 – Suizidversuch, Zerstörungswut, der Versuch, eine Ärztin zu
        würgen – zeigt das Muster der sexuellen Eins in seiner ungefiltertsten, gefährlichsten
        Form: ein moralisch-emotionaler Druck, der keine soziale Bremse mehr findet und sich
        körperlich entlädt.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und das jahrzehntelange Festhalten am Muster:</strong>
        Dieselbe Beharrlichkeit, die ihn Jahrzehnte an Werner Herzog band, hielt ihn auch an
        seinem eigenen, sich immer wiederholenden Verhaltensmuster fest – Ausbrüche, die sich
        über ein ganzes Berufsleben in nahezu identischer Form wiederholten, statt sich mit
        der Zeit zu verändern.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit statt Verbergung – mit hohem Preis:</strong>
        Anders als viele andere Personen in diesem Kompass versteckte Kinski seine dunkelsten
        Seiten nicht – seine Autobiografie legt Grausames über sich selbst offen. Doch diese
        schonungslose Offenheit schützte weder ihn noch die Menschen in seinem Umfeld vor den
        Folgen seines Verhaltens.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vom Zorn als moralischem Urteil zum Zorn als Zusammenbruch:</strong>
        Was in seinen Rollen und öffentlichen Auftritten oft als kontrollierte künstlerische
        Intensität erschien, zeigte sich 1950 in seiner reinsten, unkontrollierten Form – als
        akute psychische Krise, die in Gewalt gegen sich selbst und andere mündete.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet ein Zusammenbruch der Kontrolle, bei einem Mann, dessen ganzes Leben um Kontrolle über die eigene Wahrheit kreiste?</strong>
        Für eine sexuelle Eins, deren gesamtes Selbstverständnis auf der kompromisslosen
        Durchsetzung der eigenen moralischen und künstlerischen Standards beruhte, liegt eine
        Deutung nahe: Ausgerechnet der völlige Kontrollverlust – Suizidversuch, Zerstörung,
        körperliche Gewalt – bricht dort durch, wo die innere Anspannung keinen sozial
        akzeptierten Ausweg mehr findet. Diese Deutung ist eine plausible Interpretation, kein
        belegter medizinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu psychiatrischen
        Krisen oder Gewaltverhalten führt – <strong>jeder Mensch kann jede psychische
        Erkrankung entwickeln, unabhängig vom Subtyp.</strong> Was sich an Kinskis Fall zeigen
        lässt, ist ein Muster im Umgang mit ungefilterter moralischer Intensität, das bei einer
        ausgeprägten sexuellen Eins immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil und keine Entschuldigung für sein Verhalten gegenüber anderen.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Kinski sein eigenes Enneagramm-Muster je bewusst kannte
        – das System war zu seinen Lebzeiten kaum verbreitet. Die Inbrunst und der
        Zorn der sexuellen Eins bestimmten sein Leben völlig unkorrigiert, von der psychiatrischen Krise 1950 bis
        zu den Ausbrüchen am Set Jahrzehnte später, ohne dass sich das Muster je grundlegend
        veränderte. Wer die eigene moralische Intensität nicht als wiederkehrendes Muster
        erkennt, kann ihr auch nicht rechtzeitig begegnen – mit Folgen, die weit über ihn
        selbst hinausreichten und, wie die späteren Vorwürfe seiner Tochter zeigen, auch
        andere Menschen schwer belasteten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch an seiner psychiatrischen Vorgeschichte lässt sich <strong>Kinskis</strong>
        sexuelle Eins mit Neunerflügel noch einmal ablesen: eine ungefilterte, kompromisslose
        Intensität, die 1950 in einem akuten Zusammenbruch gipfelte und sich über Jahrzehnte
        hinweg, kaum verändert, in seinem beruflichen wie privaten Leben fortsetzte. Die
        Schwarze Mamba, die nie gelernt hat, ihren Biss zurückzuhalten – mit einem
        Lebenswerk, das bis heute fasziniert, und einer Spur an Verletzungen, die bis heute
        nachwirkt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-klaus-kinski", label:"Porträt: Klaus Kinski (SX1w9) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

export function ludwigVanBeethovenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-van-beethoven-portrait.jpg" alt="Ludwig van Beethoven" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig van Beethoven</p>
        <p class="krim-portrait-typ">SX6w5 · Sexueller Typ 6 mit Fünferflügel · 1770–1827</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ludwig van Beethoven</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-van-beethoven">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Typstruktur und seinen jahrzehntelangen
        Kampf gegen die fortschreitende Taubheit. Hier steht ein Kapitel im Mittelpunkt, das dort
        knapp angerissen wird: eine zweite, parallel verlaufende Erkrankung des übrigen Körpers –
        chronische Bauchleiden, eine mögliche Bleivergiftung und eine Leberzirrhose, die ihn
        schließlich mit 56 Jahren das Leben kostete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Beethoven</strong> ist der <strong>sexuellen Sechs mit Fünferflügel</strong>
        zugeordnet. Naranjo beschrieb die SX6 als Kontratyp der Sechs: Statt sich vor Bedrohung
        zurückzuziehen, begegnet sie ihr mit demonstrativer Stärke. Der Fünferflügel bringt
        analytische Tiefe und die Fähigkeit, sich in Struktur und Arbeit zu vertiefen – ein Muster,
        das sich bis in Beethovens letzte, von zwei parallelen Krankheiten gezeichnete
        Lebensjahre nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Zwei Krankheiten, ein Muster:</strong>
        Neben der fortschreitenden Taubheit, die im Porträt unter Berühmte Persönlichkeiten
        ausführlich gedeutet wird, litt Beethoven Zeit seines Erwachsenenlebens an einer zweiten,
        weit weniger bekannten Krankheitslinie – chronischen Bauchbeschwerden, die er mit
        derselben trotzigen Weiterarbeit beantwortete wie den Hörverlust.</p>
        <p class="vb-intro"><strong>b) Kolikartige Schmerzen schon ab Mitte zwanzig:</strong>
        Bereits um 1798, im selben Zeitraum, in dem die ersten Anzeichen der Taubheit auftraten,
        klagte Beethoven in Briefen über schwere Kolikanfälle, Durchfälle und Verdauungsstörungen –
        ein Leiden, das ihn bis zu seinem Tod begleitete und nie eindeutig diagnostiziert wurde.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten statt Schonung:</strong>
        Freunde und Ärzte drängten wiederholt zu Kuraufenthalten und Diät. Beethoven hielt sich
        selten lange daran – kaum ließ der akute Schub nach, kehrte er zu Kaffee, Wein und
        durchgearbeiteten Nächten zurück.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Verdacht auf Bleivergiftung:</strong>
        Haaranalysen und eine 2023 veröffentlichte DNA-Untersuchung erhaltener Haarlocken sowie
        eines Schädelfragments fanden stark erhöhte Bleiwerte in Beethovens Körper – mögliche
        Quellen reichen von bleihaltigem Wein über medizinische Behandlungen bis zu
        Trinkwasserleitungen. Ob die Bleibelastung tatsächlich zur Taubheit oder zu den späteren
        Leberschäden beitrug, bleibt bis heute wissenschaftlich umstritten.</p>
        <p class="vb-intro"><strong>b) Ein Leben ohne Schonhaltung:</strong>
        Beethoven rauchte nicht, aber trank regelmäßig Wein, oft in Mengen, die seine Ärzte als
        gesundheitsschädlich einstuften – bei einer bereits vorbelasteten Leber ein Muster, das
        den langsamen Verfall über Jahrzehnte beschleunigte, ohne dass er es je grundlegend
        änderte.</p>
        <p class="vb-intro"><strong>c) Gelbsucht und erste Anzeichen der Leberkrankheit:</strong>
        Ab etwa 1821 traten wiederholt Episoden von Gelbsucht auf – ein deutliches Zeichen
        fortschreitender Leberschädigung, das Beethoven wie schon die Taubheit zuvor eher
        verdrängte als in seiner Tragweite ernst nahm.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Zusammenbruch im Dezember 1826:</strong>
        Auf der Rückreise von seinem Bruder Johann geriet Beethoven in einem offenen,
        ungefederten Wagen in klirrende Kälte. Kurz danach erkrankte er an einer schweren
        Lungenentzündung, von der er sich nie mehr erholte – der Auftakt zu seinen letzten
        vier Lebensmonaten.</p>
        <p class="vb-intro"><strong>b) Vier schmerzhafte Bauchpunktionen:</strong>
        Die fortschreitende Leberzirrhose führte zu massiven Wassereinlagerungen im Bauchraum
        (Aszites). Zwischen Dezember 1826 und Februar 1827 musste Beethoven vier Mal unter
        großen Schmerzen operativ punktiert werden, um die angesammelte Flüssigkeit abzulassen –
        bei der letzten Punktion floss die Wunde tagelang unkontrolliert weiter.</p>
        <p class="vb-intro"><strong>c) Der Tod während eines Gewitters:</strong>
        Beethoven starb am 26. März 1827 in Wien, während draußen ein schweres Frühlingsgewitter
        tobte. Der Überlieferung nach öffnete er beim Aufflammen eines Blitzes und einem lauten
        Donnerschlag noch einmal die Augen, ballte die rechte Faust und sank dann zurück – tot.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Obduktionsbefund, der das ganze Ausmaß zeigte:</strong>
        Die Obduktion am Tag nach seinem Tod ergab eine massiv geschrumpfte, knotig vernarbte
        Leber (Zirrhose) sowie schwer geschädigte Nieren – ein Befund, der zeigt, dass der
        Organismus über Jahre auf einem Bruchteil seiner Funktionsfähigkeit weiterarbeitete.</p>
        <p class="vb-intro"><strong>b) Zwei Erkrankungen, die einander verstärkten:</strong>
        Die vollständige Taubheit isolierte Beethoven zunehmend von seinem sozialen Umfeld,
        während die Bauch- und Lebererkrankung seine körperliche Kraft parallel dazu aufzehrte –
        zwei voneinander unabhängige Bedrohungen, denen er mit derselben Haltung begegnete: nicht
        ausweichen, sondern weiterarbeiten.</p>
        <p class="vb-intro"><strong>c) Kompositorische Höchstleistung trotz doppelter Krankheit:</strong>
        Ausgerechnet in den Jahren, in denen beide Krankheiten am weitesten fortgeschritten waren,
        entstanden die späten Streichquartette und die Neunte Symphonie – Werke von einer Tiefe,
        die viele Zeitgenossen zunächst überforderte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kampfhaltung auch gegen den eigenen Körper:</strong>
        Wie er einst Fürst Lichnowsky die Stirn geboten hatte, begegnete Beethoven auch der
        eigenen, doppelten Erkrankung nicht mit Rückzug oder Schonung, sondern mit fortgesetzter,
        kompromissloser Arbeit bis zuletzt.</p>
        <p class="vb-intro"><strong>b) Kraft, die sich gegen den eigenen Zerfall richtete:</strong>
        Selbst nach den schmerzhaften Bauchpunktionen und zunehmender Schwäche diktierte
        Beethoven seinem Neffen Karl noch Briefe und beschäftigte sich mit Plänen für eine
        zehnte Symphonie – Energie, die buchstäblich bis in die letzten Wochen hinein nach außen
        gerichtet blieb.</p>
        <p class="vb-intro"><strong>c) Die geballte Faust als letzte Geste:</strong>
        Ob die Überlieferung vom Blitzschlag im Moment seines Todes historisch exakt ist oder
        nicht – die geballte Faust, mit der Beethoven angeblich starb, ist zum Sinnbild einer
        Haltung geworden, die sein ganzes Leben trug: der Bedrohung, jeder Bedrohung, nicht
        ausweichen, sondern ihr die Stirn bieten.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Zwei Bedrohungen, eine Reaktion:</strong>
        Ob Gehör oder Leber – Beethoven begegnete keiner der beiden fortschreitenden Erkrankungen
        mit Rückzug oder Anpassung des Lebensstils, sondern mit derselben trotzigen
        Weiterarbeit, die schon seinen Umgang mit Adligen und Kritikern prägte.</p>
        <p class="vb-intro"><strong>b) Fast dreißig Jahre zwischen ersten Symptomen und Tod:</strong>
        Von den ersten Kolikanfällen um 1798 bis zu seinem Tod 1827 lebte Beethoven fast drei
        Jahrzehnte mit chronischen Beschwerden, die er nie in den Mittelpunkt seines Lebens
        stellte, sondern die er – ähnlich wie die Taubheit – durch fortgesetzte schöpferische
        Arbeit gewissermaßen überschrieb.</p>
        <p class="vb-intro"><strong>c) Konfrontation statt Schonung als durchgehendes Muster:</strong>
        Anders als Karl Lagerfeld (SO3w4), der seine Krankheit hinter einem makellosen Bild
        verbarg, oder Franz Schubert (SE6w5), der sich zunehmend zurückzog, ignorierte Beethoven
        – ganz wie sein SX6w5-Schicksalsgenosse Friedrich Schiller – seine Krankheit nicht durch
        Verheimlichung, sondern durch fortgesetzte, unvermindert intensive Arbeit, bis der Körper
        keine weitere Konfrontation mehr zuließ.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Gehör und Leber?</strong>
        Für eine sexuelle Sechs, deren gesamtes Leben aus dem direkten, oft kompromisslosen
        Konfrontieren von Bedrohung bestand, liegt eine Deutung nahe: Ausgerechnet zwei zentrale
        Organe – das Gehör, über das er seine Kunst wahrnahm, und die Leber, die den fortgesetzten
        Raubbau an seinem Körper über Jahrzehnte trug – wurden Schauplatz eines doppelten,
        unsichtbaren Kampfes, den er nie durch Rückzug, sondern immer nur durch Weiterarbeiten zu
        gewinnen versuchte. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu Leber- oder
        Gehörerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Beethovens Fall zeigen lässt, ist ein Muster, das bei
        dem Bedürfnis, Bedrohung – auch die eigene Sterblichkeit – nicht durch Rückzug, sondern
        durch fortgesetzte Konfrontation zu bewältigen, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Beethoven kannte sein eigenes Muster nicht – die sexuelle Sechs begegnet jeder Bedrohung mit Konfrontation statt mit Rückzug, und genau das trieb ihn dazu, sowohl der Taubheit als auch dem eigenen körperlichen Verfall mit fortgesetzter, kompromissloser Arbeit zu begegnen, statt sich zu schonen. Wer das eigene Konfrontationsmuster nicht kennt, verwechselt Durchhalten mit der einzig möglichen Antwort auf Bedrohung.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Beethovens</strong> sexuelle Sechs mit
        Fünferflügel noch einmal ablesen: zwei parallel fortschreitende, jahrzehntelange
        Erkrankungen – Taubheit und Leberleiden –, denen er nie mit Rückzug, sondern immer mit
        fortgesetzter, kompromissloser Arbeit begegnete, bis am 26. März 1827 buchstäblich kein
        Widerstand mehr möglich war. Der Wolf, der der Bedrohung – ob Fürst, Kritiker, Taubheit
        oder der eigenen Sterblichkeit – nie auswich, sondern ihr bis zur letzten geballten Faust
        die Stirn bot.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Porträt: Ludwig van Beethoven (SX6w5) – Lebenswerk"},
        {route:"krankheitsportraets-friedrich-schiller", label:"Krankheitsporträt: Friedrich Schiller (SX6w5) – derselbe Subtyp, dieselbe Konfrontationshaltung"},
        {route:"krankheitsportraets-franz-schubert", label:"Krankheitsporträt: Franz Schubert (SE6w5) – Gegenmodell: Rückzug statt Konfrontation"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Krankheitsporträt: Karl Lagerfeld (SO3w4) – Gegenmodell: Verbergen statt Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function marilynMonroeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marilyn-monroe-portrait.jpg" alt="Marilyn Monroe" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marilyn Monroe</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel · 1926–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marilyn Monroe</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-marilyn-monroe">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        jahrelang hinter dem makellosen Image verborgene Endometriose (eine chronische, oft
        sehr schmerzhafte Erkrankung, bei der sich gebärmutterschleimhautähnliches Gewebe
        außerhalb der Gebärmutter ansiedelt), eine eskalierende Schlafmittelabhängigkeit und
        ein Tod 1962, dessen genaue Umstände bis heute umstritten sind.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Monroe</strong> ist dem <strong>sexuellen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die SX3 richtet den Erfolgsanspruch der Drei auf unwiderstehliche
        Anziehungskraft und Faszination im engsten, intimsten Kreis – und lebt zugleich mit
        der tiefen Angst, hinter der Maske leer zu sein. Der Viererflügel bringt eine
        melancholische Tiefe hinzu, die Sehnsucht nach einem authentischen Selbst jenseits der
        Rolle – eine Spannung, die sich bis in Monroes verborgene Krankheitsgeschichte
        nachverfolgen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Schmerz, der hinter dem Image verschwinden musste:</strong>
        Monroes chronische Endometriose-Beschwerden durften das makellose öffentliche Bild
        nie stören – Verträge sollen sie sogar gezielt vor Arbeit während besonders
        schmerzhafter Phasen geschützt haben, ohne dass die Öffentlichkeit je davon erfuhr.</p>
        <p class="vb-intro"><strong>b) Die eigene Erschöpfung als etwas, das nicht sein durfte:</strong>
        Auch als Schlaflosigkeit und Medikamentenkonsum zunahmen, blieb der äußere Auftritt
        bis zuletzt makellos inszeniert – die Kluft zwischen innerem Zustand und öffentlichem
        Bild wuchs Jahr für Jahr.</p>
        <p class="vb-intro"><strong>c) Ein Rückzug, der erst spät sichtbar wurde:</strong>
        Erst 1962, bei den Dreharbeiten zu "Something's Got to Give", wurde der innere
        Zusammenbruch für Außenstehende unübersehbar – vorher war er hinter Professionalität
        und Selbstkontrolle verborgen geblieben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine chronische, nie öffentlich gemachte Erkrankung:</strong>
        Monroe litt ihr gesamtes Erwachsenenleben an Endometriose, wurde mehrfach operiert
        und erlitt mindestens drei dokumentierte Fehlgeburten, darunter eine
        Eileiterschwangerschaft 1957 – keine ihrer Schwangerschaften wurde ausgetragen.</p>
        <p class="vb-intro"><strong>b) Eskalierende Schlafmittelabhängigkeit:</strong>
        Bereits ab den frühen 1950er-Jahren dokumentiert, verschärfte sich der Konsum von
        Barbituraten und Chloralhydrat über die Jahre; ab 1960 verschrieb ihr Psychiater
        Ralph Greenson ihr regelmäßig Nembutal.</p>
        <p class="vb-intro"><strong>c) Eine belastete familiäre Vorgeschichte:</strong>
        Monroes Mutter litt an paranoider Schizophrenie, ihr Großvater mütterlicherseits
        starb an einer Spätfolge einer unbehandelten Syphilis-Infektion in einer Anstalt –
        Monroe selbst fürchtete zeitlebens, wie ein Fluch liege psychische Erkrankung über
        ihrer Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vier Tage in der geschlossenen Psychiatrie:</strong>
        Im Februar 1961 wurde Monroe von ihrer Analytikerin in die Payne Whitney Psychiatric
        Clinic eingewiesen, in der Annahme, dort eine "Ruhekur" zu erhalten. Stattdessen
        landete sie auf einer geschlossenen Station, die sie später mit einem Gefängnis
        verglich – nach vier Tagen wurde sie auf Betreiben von Joe DiMaggio entlassen.</p>
        <p class="vb-intro"><strong>b) Siebzehn versäumte Drehtage:</strong>
        Bei den Dreharbeiten zu "Something's Got to Give" 1962 fehlte Monroe an siebzehn von
        dreißig Drehtagen wegen Krankheit; die Produktion geriet über eine Million Dollar
        über Budget.</p>
        <p class="vb-intro"><strong>c) Entlassung durch das Studio:</strong>
        Am 8. Juni 1962 entließ 20th Century Fox sie wegen "spektakulärer Abwesenheit" und
        verklagte sie auf 750.000 Dollar – eine Wiedereinstellung für den Herbst wurde zwar
        noch ausgehandelt, kam durch ihren Tod aber nicht mehr zustande.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 4./5. August 1962:</strong>
        Monroe wurde tot in ihrem Haus in Brentwood aufgefunden. Die Autopsie stellte eine
        tödliche Kombination aus Nembutal und Chloralhydrat fest – eine Menge, die laut dem
        zuständigen Coroner ausgereicht hätte, um mehrere Menschen zu töten.</p>
        <p class="vb-intro"><strong>b) Eine offiziell bewusst vorsichtige Formulierung:</strong>
        Der Coroner stufte den Tod als "wahrscheinlichen Suizid" ein – nicht als
        zweifelsfreien Suizid. Diese eingebaute Unsicherheit ist Teil des offiziellen
        Befundes selbst, nicht nachträgliche Spekulation.</p>
        <p class="vb-intro"><strong>c) Bis heute unbewiesene Gegentheorien:</strong>
        Neben einer versehentlichen Überdosis und Suizid kursieren bis heute
        Mordtheorien, meist im Kontext angeblicher Affären mit John und Robert Kennedy –
        historiografisch gelten diese als unbewiesen und spekulativ, wurden aber nie
        vollständig widerlegt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Glanz als Überlebensstrategie bis zur Erschöpfung:</strong>
        Die strahlende, faszinierende Öffentlichkeitspersona verlangte Monroe ein Höchstmaß
        an Energie ab, während im Verborgenen Schmerz, Schlaflosigkeit und Medikamentenkonsum
        zunahmen.</p>
        <p class="vb-intro"><strong>b) Ein Rückzug, der wie Kontrollverlust aussah:</strong>
        Die zunehmenden Fehlzeiten am Set 1962 lassen sich auch als Bewegung Richtung des
        Neuner-Stresspunkts der Drei lesen: Rückzug, Verzögerung, ein passives Entgleiten
        statt eines offen ausgetragenen Zusammenbruchs.</p>
        <p class="vb-intro"><strong>c) Der Pfau, dessen Federn zuletzt kaum noch zu tragen waren:</strong>
        Bis zuletzt versuchte Monroe, die öffentliche Erwartung an Glanz und Perfektion zu
        erfüllen, selbst als die eigene Kraft dafür längst nicht mehr ausreichte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kindheit voller Brüche:</strong>
        Elf Pflegefamilien, zeitweise ein Waisenhausaufenthalt und sexueller Missbrauch in
        mindestens drei Pflegefamilien prägten Monroes frühe Jahre – eine Vorgeschichte, die
        sie selbst später mit ihrer psychischen Verletzlichkeit in Verbindung brachte.</p>
        <p class="vb-intro"><strong>b) Eine Krankheit, die zwei Jahrzehnte lang verborgen blieb:</strong>
        Von den ersten dokumentierten Beschwerden bis zu ihrem Tod 1962 zieht sich eine
        durchgehende, aber öffentlich fast vollständig unsichtbare Linie aus chronischem
        Schmerz und zunehmender Medikamentenabhängigkeit.</p>
        <p class="vb-intro"><strong>c) Ein letztes Jahr des offenen Zusammenbruchs:</strong>
        Erst 1962 – Klinikaufenthalt, versäumte Drehtage, Entlassung – wurde sichtbar, was
        zuvor jahrelang hinter der Fassade gehalten worden war.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die reproduktiven Organe?</strong>
        Für eine sexuelle Drei mit Viererflügel, deren öffentliches Image untrennbar mit
        Weiblichkeit, Begehrenswürdigkeit und makelloser Ausstrahlung verbunden war, liegt
        eine Deutung nahe: Ausgerechnet jener Körperbereich, der am unmittelbarsten mit dem
        vermarkteten Bild der Fruchtbarkeit und Verführung verknüpft war, wurde zum Ort
        chronischen, geheim gehaltenen Leidens. Der Schmerz, der am wenigsten zum Image
        passte, war genau der, den sie am längsten verbarg. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei zwangsläufig zu Endometriose
        oder Medikamentenabhängigkeit führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Monroes Fall zeigen lässt, ist
        ein Muster, das bei dem Bedürfnis, Schmerz und Verletzlichkeit hinter einem
        makellosen öffentlichen Bild zu verbergen, in der Praxis immer wieder auffällt –
        eine von vielen möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Monroe kannte ihr eigenes Muster nicht – die sexuelle Drei mit Viererflügel hält das makellose Bild um jeden Preis aufrecht, auch gegenüber sich selbst, und genau das ließ sie eine schmerzhafte Erkrankung jahrelang hinter genau diesem Bild verbergen, statt sich Hilfe zu holen, die die Fassade hätte gefährden können. Wer das eigene Bedürfnis nach einem makellosen Bild nicht als Muster erkennt, opfert diesem Bild am Ende die eigene Gesundheit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Am Beispiel <strong>Monroes</strong> zeigt sich die sexuelle Drei mit Viererflügel
        noch einmal auf besonders schmerzhafte Weise: eine chronische Krankheit, jahrelang
        hinter makellosem Glanz verborgen, eine eskalierende Medikamentenabhängigkeit und ein
        Tod, dessen genaue Umstände bis heute nicht abschließend geklärt sind. Der Pfau,
        dessen Federn der Welt Schönheit zeigten, während dahinter ein erschöpfter,
        schmerzgeplagter Körper um Beachtung rang, die er sich selbst nie erlaubte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-marilyn-monroe", label:"Porträt: Marilyn Monroe (SX3w4) – Lebenswerk"},
        {route:"krankheitsportraets-dolly-parton", label:"Krankheitsporträt: Dolly Parton (SX3w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

export function muhammadAliKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-muhammad-ali-portrait.jpg" alt="Muhammad Ali – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Muhammad Ali</p>
        <p class="krim-portrait-typ">SO2w1 · Sozialer Typ 2 mit Einserflügel · 1942–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Tierentsprechung: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Muhammad Ali</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-muhammad-ali">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Boxer und
        Bürgerrechtler und um seine Typstruktur im Allgemeinen. Diese Seite widmet sich
        einem Kapitel, das dort nur am Rande erwähnt wird: 1984, drei Jahre nach seinem
        Karriereende, wurde bei Ali ein Parkinson-Syndrom diagnostiziert, das viele Ärzte auf
        die wiederholten Kopftreffer seiner zwanzigjährigen Profikarriere zurückführen. Er
        lebte über drei Jahrzehnte mit fortschreitenden Symptomen – verlangsamter Sprache,
        Zittern, maskenhaftem Gesichtsausdruck – und starb 2016 im Alter von 74 Jahren an
        septischem Schock als Folge einer Atemwegserkrankung, die durch die
        Parkinson-Erkrankung begünstigt wurde.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ali</strong> ist der <strong>sozialen Zwei mit Einserflügel</strong>
        zugeordnet. Naranjo nannte die soziale Zwei <em>Ambition</em>: den Antrieb, durch
        Einfluss und öffentliche Präsenz für ein ganzes Kollektiv zu sorgen, nicht nur für
        einzelne Menschen. Der Einserflügel gibt dieser Ambition eine moralische Achse –
        Prinzip vor persönlichem Vorteil, wie sich schon in Alis Widerstand gegen den
        Militärdienst 1967 zeigte. Genau diese Achse hielt auch, als der eigene Körper zur
        größten Prüfung wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Verlangsamte Sprache, ungewohnte Stille:</strong>
        Schon Anfang der 1980er-Jahre, gegen Ende seiner aktiven Karriere, bemerkten
        Journalisten eine zunehmend verlangsamte, undeutliche Sprache bei einem Mann, der
        jahrzehntelang für seine sprachliche Schnelligkeit berühmt gewesen war – der
        Golden Retriever, dessen wichtigstes Werkzeug, die eigene Stimme, als Erstes
        betroffen war.</p>
        <p class="vb-intro"><strong>b) Diagnose nach dem Karriereende:</strong>
        1984, drei Jahre nach seinem letzten Profikampf, bestätigten Ärzte offiziell ein
        Parkinson-Syndrom. Die Diagnose kam nicht plötzlich, sondern nach Jahren erster,
        zunächst uneindeutiger Symptome, die im Ring selbst noch überspielt werden konnten.</p>
        <p class="vb-intro"><strong>c) Öffentliche Sichtbarkeit von Anfang an:</strong>
        Anders als viele Prominente mit einer neurologischen Diagnose zog sich Ali nicht
        zurück, um die Symptome zu verbergen – typisch für die soziale Zwei, deren
        Selbstverständnis untrennbar mit öffentlicher Präsenz verbunden ist.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Über drei Jahrzehnte fortschreitende Symptome:</strong>
        Zittern, Muskelsteifheit, verlangsamte Bewegungen und ein zunehmend maskenhafter
        Gesichtsausdruck prägten Alis letzte drei Lebensjahrzehnte – ein schleichender
        Prozess, der den einst schnellsten Schwergewichtler der Boxgeschichte fundamental
        veränderte.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte weltweite Reisetätigkeit:</strong>
        Trotz fortschreitender Erkrankung reiste Ali weiter um die Welt – 1990 verhandelte
        er in Bagdad persönlich die Freilassung amerikanischer Geiseln vor dem Golfkrieg,
        1998 wurde er UN-Friedensbotschafter. Die Krankheit bremste das Tempo, aber nicht
        die Reichweite seines Engagements.</p>
        <p class="vb-intro"><strong>c) Das Zittern wird zum öffentlichen Bild:</strong>
        1996 entzündete Ali mit sichtbar zitternder Hand die olympische Flamme bei den
        Sommerspielen in Atlanta, vor einem Milliardenpublikum. Statt die Symptome zu
        verstecken, wurde dieser Moment zu einem der bewegendsten Bilder der olympischen
        Geschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Verletzlichkeit als bewusst gezeigtes Bild:</strong>
        Wo andere öffentliche Figuren eine fortschreitende neurologische Erkrankung so lange
        wie möglich verbergen, ließ Ali sich zitternd, verlangsamt und deutlich gezeichnet
        sehen – eine Offenheit, die zur sozialen Zwei passt, deren Wirkung gerade aus dem
        Sichtbarsein für die Gemeinschaft entsteht, nicht aus kontrollierter Distanz.</p>
        <p class="vb-intro"><strong>b) Gründung eines Zentrums für die eigenen Werte:</strong>
        2005 eröffnete das Muhammad Ali Center in Louisville, das sechs Grundwerte –
        Respekt, Zuversicht, Überzeugung, Hingabe, Nächstenliebe und Spiritualität – für
        ein breites Publikum vermitteln soll. Die eigene Biografie, samt Krankheit, wurde
        so zu einem Lehrstück für andere.</p>
        <p class="vb-intro"><strong>c) Familie und Öffentlichkeit gemeinsam an seiner Seite:</strong>
        In den letzten Lebensjahren begleiteten ihn öffentliche Auftritte an der Seite
        seiner Familie – die Erkrankung wurde nicht zur Privatsache erklärt, sondern blieb
        Teil des gemeinsamen, öffentlich sichtbaren Lebens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Vom lautesten zum stillsten Auftritt, gleiche Wirkung:</strong>
        Der Mann, der einst mit Sprüchen wie <em>Ich bin der Größte</em> ganze Stadien
        aufwühlte, erreichte in Atlanta 1996 mit einer einzigen zitternden Geste eine
        Wirkung, die viele als noch bewegender empfanden als seine lautesten Auftritte im
        Ring.</p>
        <p class="vb-intro"><strong>b) Respekt durch gezeigte statt verborgene Schwäche:</strong>
        Gerade weil Ali seine Erkrankung nicht versteckte, wuchs die öffentliche
        Zuneigung zu ihm in seinen letzten Lebensjahrzehnten eher noch, statt
        nachzulassen – ein für die soziale Zwei typischer Effekt: Nähe entsteht, weil sie
        sich zeigte, nicht obwohl sie es tat.</p>
        <p class="vb-intro"><strong>c) Eine Erkrankung, die zum Politikum wurde:</strong>
        Die Debatte über die Ursache seines Parkinson-Syndroms – wiederholte Kopftreffer im
        Boxring – trug maßgeblich zu einer bis heute andauernden öffentlichen Diskussion
        über Kopfverletzungen im Sport bei.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verlangsamung als neue Form der Präsenz:</strong>
        Wo Ali im Ring durch Tempo und Wortgewalt wirkte, wirkte er in den letzten
        Jahrzehnten durch Ruhe und stille Anwesenheit – die Energie der sozialen Zwei
        wanderte von der Lautstärke zur Symbolkraft, ohne an Wirkung zu verlieren.</p>
        <p class="vb-intro"><strong>b) Reisen und Auftritte trotz körperlicher Grenzen:</strong>
        Bis weit in die 2000er-Jahre nahm Ali an Wohltätigkeitsveranstaltungen und
        öffentlichen Terminen teil, auch als ihm Sprechen und Gehen zunehmend schwerfielen –
        Präsenz für die Gemeinschaft blieb Priorität, solange körperlich irgend möglich.</p>
        <p class="vb-intro"><strong>c) Die Familie als verlängerter Arm des öffentlichen Engagements:</strong>
        In den letzten Jahren übernahmen zunehmend seine Frau Lonnie und seine Töchter
        öffentliche Auftritte und Interviews in seinem Namen – die soziale Mission wurde
        weitergetragen, auch als die eigene Stimme kaum noch trug.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zum öffentlichen Lehrstück wurde:</strong>
        Über drei Jahrzehnte hinweg machte Ali seine fortschreitende Erkrankung nicht zur
        privaten Angelegenheit, sondern zu einem sichtbaren Teil seines öffentlichen
        Wirkens – vom ersten spürbaren Sprachverlust in den frühen 1980ern bis zum
        zitternden Fackelträger von Atlanta 1996.</p>
        <p class="vb-intro"><strong>b) Von Prinzipientreue zu körperlicher Standhaftigkeit:</strong>
        Derselbe Einserflügel, der 1967 den Widerstand gegen den Militärdienst trug, zeigte
        sich in den Jahrzehnten der Krankheit als beharrliches Festhalten an öffentlichem
        Engagement, obwohl jede Reise, jeder Auftritt zunehmend Kraft kostete.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Krankheit der Stimme und Bewegung?</strong>
        Parkinson trifft bei Ali ausgerechnet die beiden Werkzeuge, mit denen er sein
        Leben lang für andere gesprochen und sich für andere eingesetzt hatte: die Stimme
        und die Bewegung im Raum. Für eine soziale Zwei, deren gesamte Leidenschaft im
        sichtbaren, hörbaren Wirken für ein Kollektiv liegt, lässt sich in diesem Verlust
        ausgerechnet dieser beiden Fähigkeiten eine Zuspitzung des eigenen Lebensmusters
        lesen: Die Ambition musste sich neue Ausdrucksformen suchen, als Sprache und
        Bewegung nicht mehr wie gewohnt zur Verfügung standen – und fand sie in Symbolen
        wie der zitternden Hand an der olympischen Fackel. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Zwei zwangsläufig zu Parkinson führt
        – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Zudem gilt Alis Parkinson-Syndrom medizinisch als möglicherweise wesentlich durch
        wiederholte Kopftreffer im Boxsport mitverursacht, nicht als rein
        psychosomatisches Geschehen. Was sich an seinem Fall zeigen lässt, ist ein Muster
        im Umgang mit der Krankheit, das bei einer ausgeprägten sozialen Zwei immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ali kannte sein eigenes Muster nicht – die soziale Zwei mit Einerflügel sucht Bedeutung durch öffentlichen Einsatz für andere, und genau dieser Drang hielt ihn im Ring, obwohl wiederholte Kopftreffer längst ihren Tribut forderten. Wer den eigenen Drang, für andere sichtbar einzustehen, nicht als Muster erkennt, überhört die Warnsignale des eigenen Körpers, bis sie unübersehbar werden.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Zwei mit Einserflügel bestätigt sich bei <strong>Muhammad Ali</strong>
        noch einmal in der Art, wie er mit seiner eigenen Krankheit umging: Statt sich aus
        der Öffentlichkeit zurückzuziehen, machte er sein Zittern, seine Verlangsamung und
        seine Verletzlichkeit selbst zu einer Botschaft an die Gemeinschaft, der sein
        ganzes Leben gegolten hatte. Der Golden Retriever, der nie nur für sich selbst
        auftrat, trug seine Krankheit auf dieselbe Bühne wie zuvor seinen Ruhm – bis
        zuletzt sichtbar, bis zuletzt für andere da.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-muhammad-ali", label:"Porträt: Muhammad Ali (SO2w1) – Lebenswerk"},
        {route:"krankheitsportraets-bob-marley", label:"Krankheitsporträt: Bob Marley (SO2w1) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so2", label:"Subtyp-Profil SO2"},
      ])}
    </div>
  `);
}

export function ojSimpsonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/oj-simpson-portrait.jpg" alt="O.J. Simpson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">O.J. Simpson</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1947–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>O.J. Simpson</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-oj-simpson">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um den Mordprozess des Jahrhunderts und seine
        Typstruktur als öffentlich inszenierter „Gepard". Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: eine Prostatakrebs-Diagnose 2023, einen zunächst weitgehend
        vor der Öffentlichkeit verborgenen Krankheitsverlauf, und einen Tod am 10. April 2024.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Simpson</strong> ist dem <strong>sozialen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die soziale Drei baut ihre Identität um das öffentliche Bild; der
        Viererflügel bringt eine Neigung zur Dramatisierung und zur eigenen Erzählung des
        eigenen Leidens hinzu. Genau diese Notwendigkeit, Herr der eigenen Geschichte zu
        bleiben, bestimmte auch, wie er seiner letzten, tödlichen Erkrankung begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose 2023, zunächst nicht öffentlich gemacht:</strong>
        Bei Simpson wurde 2023 Prostatakrebs diagnostiziert – anders als bei seinen früheren
        öffentlichen Auftritten wählte er zunächst, die Diagnose nicht selbst an die
        Öffentlichkeit zu tragen.</p>
        <p class="vb-intro"><strong>b) Weiterhin aktive Präsenz in sozialen Medien:</strong>
        Auch nach der Diagnose postete Simpson weiterhin regelmäßig Videos auf seinen
        Social-Media-Kanälen, in denen er gesund, humorvoll und optimistisch wirkte – ein
        Bild, das seinem tatsächlichen Zustand zu diesem Zeitpunkt bereits widersprach.</p>
        <p class="vb-intro"><strong>c) Verschlechterung im Verlauf des Jahres 2024:</strong>
        Der Krebs verschlechterte sich im Frühjahr 2024 deutlich, was schließlich zu seiner
        Einweisung ins Krankenhaus führte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Familie bestätigte die Diagnose erst nach seinem Tod:</strong>
        Erst mit der offiziellen Todesmitteilung seiner Familie am 11. April 2024 wurde
        öffentlich bekannt, dass Simpson an Prostatakrebs gestorben war – zuvor war die
        Diagnose der breiten Öffentlichkeit nicht bekannt.</p>
        <p class="vb-intro"><strong>b) Letzte Lebensmonate in Las Vegas:</strong>
        Simpson verbrachte seine letzten Monate in seinem Zuhause in Las Vegas, wo er seit
        seiner Haftentlassung 2017 lebte, weitgehend zurückgezogen von den öffentlichen
        Auftritten früherer Jahre.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis der Schwere der Krankheit:</strong>
        Bis zuletzt vermied Simpson öffentliche Aussagen, die den tatsächlichen Ernst seines
        Zustands offenbart hätten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Familie als Verkünderin der eigenen Geschichte:</strong>
        Simpsons Familie wählte die Formulierung, er sei „von seinen Kindern umgeben"
        gestorben – eine letzte, kontrollierte Erzählung, die dem Bild eines versöhnlichen
        Lebensendes entsprach, das er selbst kaum noch mitgestalten konnte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der öffentlichen Selbstdarstellung bis kurz vor dem Ende:</strong>
        Noch wenige Wochen vor seinem Tod veröffentlichte Simpson Videobotschaften, in denen er
        Gerüchte über seinen Gesundheitszustand zurückwies und sich als „noch hier" und aktiv
        präsentierte.</p>
        <p class="vb-intro"><strong>c) Tod am 10. April 2024 in Las Vegas:</strong>
        O.J. Simpson starb im Alter von 76 Jahren an den Folgen seines Prostatakrebses – fast
        genau 30 Jahre nach den Morden, die sein Leben für immer geprägt hatten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine letzte Überraschung für die Öffentlichkeit:</strong>
        Weil die Diagnose so lange verborgen geblieben war, kam die Todesnachricht für die
        meisten Beobachter überraschend – ein letzter Erfolg der jahrelang gepflegten
        Kontrolle über das eigene öffentliche Bild.</p>
        <p class="vb-intro"><strong>b) Gemischte, kontroverse Reaktionen:</strong>
        Die Reaktionen auf seinen Tod fielen gespalten aus – zwischen Nachrufen auf den
        einstigen Football-Star und Erinnerungen an die Morde an Nicole Brown Simpson und Ron
        Goldman, die seinen Namen für immer prägten.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug von der eigenen Erzählung:</strong>
        Selbst die letzten Monate blieben, soweit bekannt, geprägt von demselben Bedürfnis,
        die eigene Geschichte selbst zu erzählen, das sein gesamtes öffentliches Leben
        bestimmt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Bild, das bis zuletzt gepflegt wurde:</strong>
        Dieselbe Notwendigkeit, das öffentliche Bild ungebrochen zu halten, die Simpsons
        gesamtes Leben – vom NFL-Ruhm bis zum Prozess des Jahrhunderts – geprägt hatte,
        bestimmte auch, wie lange er seine Krankheit vor der Öffentlichkeit verbarg.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die eigene Erzählung des Leidens:</strong>
        Anders als eine gesunde, ungeflügelte Drei, die eine Krankheit einfach als Tatsache
        behandeln und weitermachen würde, zeigte sich bei Simpson bis zuletzt das Bedürfnis,
        Autor der eigenen Geschichte zu bleiben – dieselbe Dynamik, die bereits sein
        Abschiedsbrief von 1994 und sein Buch „If I Did It" zeigten, nun angewandt auf die
        eigene Sterblichkeit.</p>
        <p class="vb-intro"><strong>c) Kein sichtbarer öffentlicher Zusammenbruch:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine Berichte
        über ein öffentliches Eingestehen von Schwäche oder Angst vor dem Tod – die
        kontrollierte Fassade blieb, soweit bekannt, bis zum Ende bestehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich der Inszenierung entzog:</strong>
        Simpsons gesamtes Leben war von der Überzeugung geprägt, dass ein makelloses,
        kontrolliertes öffentliches Bild jede Krise überstehen kann – der Krebs war eine
        Bedrohung, die sich dieser Kontrolle zunehmend entzog, bis der Tod selbst zur letzten
        unkontrollierbaren Tatsache wurde.</p>
        <p class="vb-intro"><strong>b) Geheimhaltung als letzte Form der Bildkontrolle:</strong>
        Ein Mann, dessen gesamtes Leben von öffentlicher Sichtbarkeit geprägt war – vom
        Football-Feld bis zur live übertragenen Verfolgungsjagd –, behandelte ausgerechnet
        seine eigene tödliche Krankheit als das Einzige, das der Öffentlichkeit vorenthalten
        blieb.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Prostata?</strong>
        Für eine soziale Drei mit Viererflügel, deren gesamte Identität auf körperlicher
        Leistungsfähigkeit, Männlichkeit und öffentlicher Präsenz beruhte – vom
        Ausnahmesportler zum gefeierten Filmstar –, liegt eine Deutung nahe: Ausgerechnet ein
        Organ, das eng mit männlicher Vitalität und Kontrolle über den eigenen Körper
        verbunden ist, wurde zum Schauplatz des Verfalls, verborgen an einer Stelle, die sich
        öffentlicher Zurschaustellung besonders entzieht. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu Prostatakrebs führt
        – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Simpsons Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen
        Diagnose, das bei einer ausgeprägten sozialen Drei mit Viererflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Simpson kannte sein eigenes Muster nicht – die soziale Drei mit Viererflügel begegnet
        jeder Bedrohung des eigenen Bildes reflexhaft mit Geheimhaltung und kontrollierter
        Selbstdarstellung, statt Schwäche je offen zuzulassen, und genau dieses Muster lebte er
        bis in seine letzten Lebensmonate unverändert aus. Wer die eigene Notwendigkeit,
        Autor der eigenen Geschichte zu bleiben, nicht als Muster erkennt, kann sie auch im
        eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Viererflügel erklärt bei <strong>Simpson</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamtes Leben ein öffentliches
        Schauspiel war, verwandelte ausgerechnet seine letzte, tödliche Rolle in das einzige
        Kapitel, das er nicht mehr selbst inszenieren konnte – und behandelte es deshalb als
        das eine Kapitel, das der Welt verborgen blieb.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. O.J. Simpson
        wurde 1995 im Strafprozess wegen Doppelmordes freigesprochen, 1997 jedoch im
        Zivilverfahren für den Tod seiner Ex-Frau Nicole Brown Simpson und Ron Goldman
        haftbar gemacht. Das Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-oj-simpson", label:"Kriminalpsychologie: O.J. Simpson (SO3w4) – der Prozess des Jahrhunderts"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Krankheitsporträt: Ludwig XIV. (SO3w2) – dieselbe Fassade bis zuletzt"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function robbieWilliamsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robbie-williams-portrait.jpg" alt="Robbie Williams" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robbie Williams</p>
        <p class="krim-portrait-typ">SX1w2 · Sexueller Typ 1 mit Zweierflügel · geb. 1974</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robbie Williams</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-robbie-williams">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort am Rande gestreift wird: eine seit den frühen 1990er-Jahren
        bestehende schwere Depression, verbunden mit einer Sucht nach Alkohol, Kokain und
        Ecstasy, die er 2023 in einer vierteiligen Netflix-Dokumentation ausführlich
        aufarbeitete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Williams</strong> ist dem <strong>sexuellen Typ 1 mit Zweierflügel</strong>
        zugeordnet. Die SX1 richtet den strengen inneren Maßstab der Eins auf eine
        einzelne, intensive Beziehung oder Bühnenpräsenz; der Zweierflügel bringt den
        Wunsch hinzu, für andere unentbehrlich zu sein. Genau diese Kombination – die
        eigene Unzulänglichkeit unerbittlich im Rampenlicht zu spüren, während man
        anderen gefallen will – bestimmte, wie sich Williams' Depression und Sucht über
        Jahrzehnte entwickelten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Depression bereits in jungen Jahren bei Take That:</strong>
        Williams beschreibt in eigenen Interviews, dass Depressionen ihn bereits Anfang
        der 1990er-Jahre, während seiner Zeit bei der Boygroup Take That, erfassten.</p>
        <p class="vb-intro"><strong>b) Alkoholexzesse zur Selbstberuhigung:</strong>
        Nach eigener Schilderung betäubte er sich nach Auftritten regelmäßig mit
        Wodkaflaschen, um die eigene innere Verfassung zu ertragen.</p>
        <p class="vb-intro"><strong>c) Zunehmender Konsum von Kokain und Ecstasy:</strong>
        Zur Alkoholsucht gesellte sich in den folgenden Jahren ein zunehmender Konsum
        harter Drogen, den Williams selbst öffentlich dokumentierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein öffentlicher "nervlicher Zusammenbruch":</strong>
        Williams beschreibt einen Moment vor Tausenden Zuschauern, in dem er nach eigener
        Aussage "einen nervlichen Zusammenbruch vor Publikum" erlebte.</p>
        <p class="vb-intro"><strong>b) Mehrere Entzugsbehandlungen über die Jahre:</strong>
        Williams durchlief im Lauf seiner Karriere wiederholt Behandlungen wegen seiner
        Sucht- und Angsterkrankungen.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte Musikkarriere trotz der Erkrankung:</strong>
        Trotz der beschriebenen Krisen blieb Williams über Jahrzehnte einer der
        kommerziell erfolgreichsten Solokünstler Großbritanniens.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Netflix-Dokumentation 2023:</strong>
        In einer vierteiligen Dokuserie ließ Williams Jahrzehnte an privatem Videomaterial
        auswerten und kommentierte seine eigene Geschichte fünf bis sechs Stunden täglich
        über 25 Drehtage.</p>
        <p class="vb-intro"><strong>b) Selbst beschriebener Prozess als schmerzhaft:</strong>
        Williams bezeichnete den Dreh selbst als "zutiefst, zutiefst schmerzhaft" – ein
        bewusstes, aktives Wiedererleben statt einer distanzierten Rückschau.</p>
        <p class="vb-intro"><strong>c) Offenlegung ohne beschönigende Distanz:</strong>
        Die Dokumentation zeigt Depression, Angststörungen und Suchtverhalten ohne
        erkennbare Verharmlosung – ein ungewöhnlich direktes Selbstporträt für einen
        Weltstar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Breite internationale Aufmerksamkeit:</strong>
        Die Netflix-Serie löste weltweit Berichterstattung aus und trug zur öffentlichen
        Enttabuisierung von Suchterkrankungen bei Popstars bei.</p>
        <p class="vb-intro"><strong>b) Eine Karriere ohne dauerhaften Bruch:</strong>
        Trotz der jahrzehntelangen psychischen Belastung blieb Williams' musikalisches
        Werk und seine öffentliche Präsenz über die gesamte Zeit hinweg umfangreich.</p>
        <p class="vb-intro"><strong>c) Eine zweite Erzählung neben dem Popstar-Image:</strong>
        Neben dem Bild des erfolgreichen Entertainers etablierte sich durch die
        Dokumentation ein zweites, ebenso öffentliches Bild der verletzlichen,
        kämpfenden Person dahinter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der strenge innere Maßstab, der nie erfüllt wird:</strong>
        Dieselbe SX1-Energie, die einen unerbittlichen inneren Maßstab an eine einzige,
        intensive Bühnenbeziehung mit dem Publikum anlegt, bestimmte auch Williams'
        Gefühl, diesem Maßstab nie wirklich zu genügen – eine Quelle der beschriebenen
        Depression.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die Erschöpfung durch das Gefallenwollen:</strong>
        Die Zuwendung des Zweierflügels zeigte sich im Wunsch, das Publikum immer wieder
        neu zu erreichen und zu erfreuen – eine Anstrengung, die zur emotionalen
        Erschöpfung beitrug, die er selbst beschreibt.</p>
        <p class="vb-intro"><strong>c) Radikale Offenheit als spätere Form der Selbstkritik:</strong>
        Die schonungslose Offenlegung der eigenen Geschichte in der Dokumentation passt
        zur SX1-typischen Neigung, auch das eigene Innenleben nach strengen, ehrlichen
        Maßstäben zu prüfen und öffentlich zu machen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Bühne, die nie genug innere Ruhe brachte:</strong>
        Williams' gesamte Karriere war von dem Versuch geprägt, über die Bühne
        Anerkennung und Beruhigung zu finden – ausgerechnet dieser Ort, an dem er am
        sichtbarsten war, wurde zum Schauplatz seiner tiefsten Erschöpfung und
        Selbstzweifel.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet die Stimme betäuben?</strong>
        Für einen sexuellen Einser mit Zweierflügel, dessen gesamte öffentliche
        Existenz auf der eigenen Stimme und dem unmittelbaren Kontakt zum Publikum
        beruht, liegt eine Deutung nahe: Ausgerechnet jenes Werkzeug, mit dem er
        Nähe zum Publikum herstellte und zugleich seinen eigenen, unerbittlichen
        Maßstab performte, wurde durch Alkohol und Drogen betäubt – ein Versuch, den
        inneren Kritiker zum Schweigen zu bringen, der am lautesten gerade dann sprach,
        wenn die Bühne am hellsten leuchtete. Diese Deutung ist eine plausible
        Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins zwangsläufig zu Depression
        oder Sucht führt – <strong>jeder Mensch kann jede psychische Erkrankung
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Williams' Fall zeigen
        lässt, ist ein Muster im Umgang mit dem eigenen, nie erfüllten inneren Maßstab,
        das bei einem ausgeprägten sexuellen Einser mit Zweierflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Williams kennt sein eigenes Muster nicht als Enneagramm-Struktur – die sexuelle
        Eins mit Zweierflügel legt reflexhaft einen unerbittlichen Maßstab an die eigene
        Wirkung auf andere an, statt diesen Maßstab je infrage zu stellen, und lebt genau
        dieses Muster bis heute in modifizierter Form weiter aus. Wer die eigene Neigung
        zum unerbittlichen Selbstanspruch nicht als Muster erkennt, erschöpft sich immer
        wieder an demselben unerreichbaren Ziel.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Eins mit Zweierflügel erklärt bei <strong>Robbie Williams</strong>
        vieles am Verlauf seiner eigenen Depression und Sucht: ein Mann, dessen gesamte
        Bühnenpräsenz auf dem Wunsch beruhte, für ein Publikum unentbehrlich zu sein,
        fand in genau diesem Anspruch die Wurzel seiner tiefsten Erschöpfung – die
        Schwarze Mamba, die auch nach dem lautesten Applaus keine Ruhe findet, weil der
        nächste, noch höhere Maßstab bereits wartet.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-robbie-williams", label:"Porträt: Robbie Williams (SX1w2)"},
        {route:"krankheitsportraets-jamie-lee-curtis", label:"Krankheitsporträt: Jamie Lee Curtis (SX1w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-martin-luther", label:"Krankheitsporträt: Martin Luther (SX1w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}

export function sadhguruKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sadhguru-portrait.jpg" alt="Sadhguru" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sadhguru</p>
        <p class="krim-portrait-typ">SE3w2 · Selbsterhaltender Typ 3 mit Zweierflügel · geb. 1957</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Waschbär</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Tierentsprechung: Waschbär" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sadhguru</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-sadhguru">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft
        ein Kapitel, das dort nur kurz erwähnt wird: eine im März 2024 diagnostizierte
        chronische Hirnblutung, die trotz wochenlanger Kopfschmerzen bis zur Notoperation
        unbehandelt blieb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Sadhguru</strong> ist dem <strong>selbsterhaltenden Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die SE3 investiert ihre Energie in Wirksamkeit statt in Image – auch dann,
        wenn der eigene Körper längst Signale sendet; der Zweierflügel bringt den Antrieb hinzu,
        für andere da zu sein, oft auf Kosten der eigenen Fürsorge für sich selbst. Genau diese
        Kombination – unbeirrtes Funktionieren trotz körperlicher Warnsignale, verbunden mit
        einem Terminkalender, der für niemand anderen unterbrochen wird als für die eigene
        Erkrankung – bestimmte den Verlauf bis zur Diagnose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Wochenlange Kopfschmerzen vor der Diagnose:</strong>
        Nach eigener und ärztlicher Schilderung litt Sadhguru über mehrere Wochen unter
        anhaltenden, sich verschlimmernden Kopfschmerzen, ohne dass er seinen öffentlichen
        Terminkalender unterbrach.</p>
        <p class="vb-intro"><strong>b) Kein sofortiger Rückzug aus der Öffentlichkeit:</strong>
        Trotz zunehmender Beschwerden hielt er weiterhin Vorträge, Reisen und öffentliche
        Auftritte aufrecht, bis die Symptomatik nicht mehr zu ignorieren war.</p>
        <p class="vb-intro"><strong>c) Akute Verschlechterung im März 2024:</strong>
        Erst eine deutliche Zuspitzung der Beschwerden führte schließlich zur ärztlichen
        Untersuchung und zur bildgebenden Diagnostik.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Diagnose: chronisches subdurales Hämatom:</strong>
        Eine MRT-Untersuchung ergab eine chronische Blutung unter der harten Hirnhaut von
        etwa drei bis vier Wochen Dauer, überlagert von einer frischen Nachblutung der
        vorangegangenen ein bis zwei Tage.</p>
        <p class="vb-intro"><strong>b) Notfalloperation am 17. März 2024:</strong>
        Aufgrund der akuten Verschlechterung wurde Sadhguru umgehend operiert, um den
        Druck auf das Gehirn zu entlasten.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare äußere Ursache:</strong>
        Anders als bei vielen subduralen Hämatomen ließ sich kein eindeutiger auslösender
        Sturz oder Unfall feststellen – die Isha Foundation kommunizierte öffentlich, dass die
        genaue Ursache unklar blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rasche postoperative Genesung:</strong>
        Nach der Operation erholte sich Sadhguru nach öffentlichen Angaben schnell und kehrte
        binnen weniger Wochen zu einem Teil seiner Aktivitäten zurück.</p>
        <p class="vb-intro"><strong>b) Öffentliche Kommunikation durch die eigene Organisation:</strong>
        Die Isha Foundation informierte in mehreren offiziellen Mitteilungen über Diagnose,
        Operation und Genesungsverlauf – eine für einen spirituellen Lehrer ungewöhnlich
        transparente medizinische Kommunikation.</p>
        <p class="vb-intro"><strong>c) Fortsetzung des öffentlichen Wirkens kurz danach:</strong>
        Bereits kurze Zeit nach dem Eingriff nahm Sadhguru wieder öffentliche Termine wahr,
        wenn auch zunächst in reduziertem Umfang.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Weltweite mediale Aufmerksamkeit:</strong>
        Die Nachricht von der Notoperation eines der bekanntesten spirituellen Lehrer der
        Gegenwart löste international Berichterstattung und eine Welle öffentlicher
        Anteilnahme aus.</p>
        <p class="vb-intro"><strong>b) Fragen nach der Selbstwahrnehmung eines Gesundheitslehrers:</strong>
        Da Sadhguru selbst regelmäßig über Körperbewusstsein und Selbstfürsorge lehrt, warf
        der Vorfall bei manchen Beobachtern die Frage auf, warum die eigenen Warnsignale so
        lange ignoriert wurden.</p>
        <p class="vb-intro"><strong>c) Keine grundsätzliche Neuausrichtung des Lebensstils:</strong>
        Trotz der Warnung durch die eigene Erkrankung setzte Sadhguru sein intensives
        Reise- und Vortragsprogramm nach der Genesung im Wesentlichen fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Funktionieren als Standardreaktion auf Schmerz:</strong>
        Die SE3-typische Ausrichtung auf Wirksamkeit statt Selbstinszenierung zeigte sich
        auch darin, dass Sadhguru wochenlange Kopfschmerzen nicht zum Anlass für einen
        Rückzug nahm, sondern seinen Terminkalender unverändert fortführte.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel und die offene Kommunikation nach außen:</strong>
        Dass die Isha Foundation die Diagnose und Behandlung transparent öffentlich machte,
        passt zur Zweierflügel-typischen Zuwendung: Selbst im eigenen medizinischen
        Ausnahmezustand blieb der Impuls erhalten, die Millionen Anhänger nicht im
        Ungewissen zu lassen, sondern einzubeziehen.</p>
        <p class="vb-intro"><strong>c) Schnelle Rückkehr in die Wirksamkeit:</strong>
        Die rasche Wiederaufnahme öffentlicher Termine nach der Operation folgt demselben
        SE3-Muster wie das Ignorieren der Symptome zuvor: Selbstwert über Funktionieren, kaum
        Raum für eine längere Pause.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Lehrer der Körperwahrnehmung, der die eigenen Warnsignale überging:</strong>
        Sadhgurus gesamtes Werk kreist um die Idee, den eigenen Körper und Geist bewusst
        wahrzunehmen und zu kultivieren – ausgerechnet er ignorierte wochenlange
        Kopfschmerzen, bis eine Notoperation unausweichlich wurde.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet der Kopf, das Zentrum seiner Lehre?</strong>
        Für einen selbsterhaltenden Typ 3 mit Zweierflügel, dessen gesamte öffentliche
        Autorität auf innerer Klarheit und bewusster Körperbeherrschung beruhte, liegt eine
        Deutung nahe: Ausgerechnet jenes Organ, mit dem er Millionen Menschen "inneres
        Engineering" lehrte, wurde zum Ort einer über Wochen unbemerkt fortschreitenden
        Blutung. Diese Deutung ist eine plausible Interpretation, kein belegter klinischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Drei zwangsläufig zu
        Hirnblutungen führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Sadhgurus Fall zeigen lässt, ist ein
        Muster im Umgang mit körperlichen Warnsignalen, das bei einem ausgeprägten
        selbsterhaltenden Typ 3 immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Sadhguru kennt sein eigenes Muster nicht als Enneagramm-Struktur – der
        selbsterhaltende Typ 3 hält reflexhaft am eigenen Funktionieren fest, statt
        körperliche Warnsignale rechtzeitig ernst zu nehmen, und lebt genau dieses Muster bis
        heute weitgehend unverändert aus. Wer die eigene Neigung, Beschwerden dem
        Terminkalender unterzuordnen, nicht als Muster erkennt, riskiert, dass der Körper die
        Pause selbst erzwingt – notfalls durch einen Zusammenbruch.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 3 mit Zweierflügel erklärt bei <strong>Sadhguru</strong> vieles
        am Verlauf seiner Erkrankung: ein Mann, dessen gesamte öffentliche Autorität auf
        innerer Klarheit und ungebrochener Wirksamkeit beruhte, musste selbst die Erfahrung
        machen, dass wochenlanges Funktionieren körperliche Warnsignale nicht zum
        Verschwinden bringt – der Waschbär, der so lange weitermachte, bis der Körper die
        Notbremse zog.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-sadhguru", label:"Porträt: Sadhguru (SE3w2)"},
        {route:"krankheitsportraets-joseph-haydn", label:"Krankheitsporträt: Joseph Haydn (SE3w2)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se3", label:"Subtyp-Profil SE3"},
      ])}
    </div>
  `);
}

export function teresaVonAvilaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-teresa-von-avila-portrait.jpg" alt="Teresa von Ávila" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Teresa von Ávila</p>
        <p class="krim-portrait-typ">SO3w4 · Sozialer Typ 3 mit Viererflügel · 1515–1582</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Teresa von Ávila</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-teresa-von-avila">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk als Mystikerin und
        Ordensreformerin. Im Fokus dieser Seite steht ein Kapitel, das dort nur am Rande auftaucht:
        Im Sommer 1539, mit 23 Jahren, erlitt Teresa nach einer misslungenen Laienbehandlung
        gegen eine vermutete Malariaerkrankung einen so schweren kataleptischen Zustand,
        dass sie vier Tage lang für tot gehalten wurde. Nach dem Erwachen folgten fast drei
        Jahre weitgehender Lähmung – eine Zeit, aus der heraus sich ihre ersten tiefen
        mystischen Erfahrungen entwickelten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Teresa</strong> ist der <strong>sozialen Drei mit Viererflügel</strong>
        zugeordnet. Die soziale Drei gilt als der Verstärkungstyp der Dreier-Reihe:
        Ehrgeiz und Leistungsstreben richten sich hier am unverstelltesten auf ein Werk, das
        von einer größeren Gemeinschaft anerkannt wird – bei Teresa nicht persönlicher Ruhm,
        sondern die sichtbare Reform eines ganzen Ordens. Der Viererflügel gibt dieser
        Leistungsorientierung eine ungewöhnliche Tiefe: Ehrgeiz verbindet sich mit
        Introspektion, Sehnsucht und der Fähigkeit, aus innerem Erleben heraus zu schreiben
        und zu handeln.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine schwere Erkrankung mit 23 Jahren:</strong>
        1538 erkrankte Teresa so ernsthaft, dass ihr Vater sie zur Behandlung aus dem Kloster
        holte – die Vermutung der Ärzte lautete Malaria. Statt Besserung brachte eine
        experimentelle Behandlung durch eine Laienheilerin in Becedas eine deutliche
        Verschlechterung ihres Zustands.</p>
        <p class="vb-intro"><strong>b) Der Zusammenbruch vom 15. August 1539:</strong>
        An diesem Tag erlitt Teresa einen schweren kataleptischen Anfall. Zeugen berichteten
        später, man habe ihr Wachs auf die Augenlider getropft, ohne jede Reaktion zu
        erhalten – ihre Zunge war vom eigenen Biss verletzt. Vier Tage lang wurde sie für
        tot gehalten.</p>
        <p class="vb-intro"><strong>c) Fast drei Jahre eingeschränkter Bewegungsfähigkeit:</strong>
        Nach dem Erwachen konnte Teresa zeitweise nur einen Finger der rechten Hand bewegen.
        Ein Zustand weitgehender Lähmung und starker Schmerzempfindlichkeit hielt bis in ihr
        25. Lebensjahr an – ausgerechnet in dieser erzwungenen Stille begann sie mit
        täglichem mentalem Gebet.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Aus Lähmung wird ein neuer Weg:</strong>
        Die lange Genesungszeit, in der ihr Körper kaum gehorchte, wurde zum Ausgangspunkt
        ihrer mystischen Praxis. Das mentale Gebet, das sie während der Bewegungsunfähigkeit
        entwickelte, blieb für den Rest ihres Lebens ihr zentrales geistliches Werkzeug.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Schwäche- und Ohnmachtsphasen:</strong>
        Auch nach ihrer weitgehenden Genesung begleiteten sie zeitlebens Phasen von Schwäche
        und Ohnmacht. Die moderne medizinhistorische Forschung diskutiert bis heute
        kontrovers, ob es sich dabei um epileptische Anfälle, psychogene Episoden oder um
        das handelte, was Teresa selbst als religiöse Ekstase beschrieb.</p>
        <p class="vb-intro"><strong>c) Erst nach der Krankheit beginnt das eigentliche Werk:</strong>
        Ihre Reform des Karmeliterordens und die Gründung von siebzehn Klöstern begannen
        erst Jahrzehnte nach dieser existenziellen Krise – ein Werk, das ohne die lange
        Zeit erzwungener Stille kaum denkbar gewesen wäre.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Sichtbares Werk trotz fragilem Körper:</strong>
        Siebzehn reformierte Klöster gegründet, unter den Augen der Inquisition, mit einem
        Körper, der ihr zeitlebens Schwäche und Anfälle bescherte – die soziale Drei lässt
        sich von körperlicher Fragilität nicht von einem öffentlich wirksamen Werk abhalten.</p>
        <p class="vb-intro"><strong>b) Schreiben als Brücke zwischen innerer Tiefe und öffentlicher Wirkung:</strong>
        Mit der <em>Inneren Burg</em> schuf Teresa eines der einflussreichsten Werke der
        christlichen Mystik – der Viererflügel liefert die introspektive Tiefe, die soziale
        Drei sorgt dafür, dass dieses innere Erleben eine Form findet, die eine ganze
        Gemeinschaft von Gläubigen erreicht.</p>
        <p class="vb-intro"><strong>c) Unter Beobachtung, aber nicht zum Schweigen gebracht:</strong>
        Trotz Verfolgung durch die Inquisition und trotz wiederkehrender gesundheitlicher
        Krisen setzte Teresa ihre Reformarbeit fort, bis sie ein ganzes Netzwerk reformierter
        Klöster aufgebaut hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Von vier Tagen Scheintod zur Kirchenlehrerin:</strong>
        Die Frau, die 1539 vier Tage lang für tot gehalten wurde, wurde 1970 postum zur
        ersten weiblichen Kirchenlehrerin der katholischen Kirche erhoben – eine der
        höchsten Anerkennungen, die die Kirche vergibt.</p>
        <p class="vb-intro"><strong>b) Ein Werk, das die eigene Krankheitszeit übersteht und überdauert:</strong>
        Die <em>Innere Burg</em> und ihre Autobiografie werden bis heute als zentrale Texte
        der christlichen Mystik gelesen – entstanden aus einem Leben, das von wiederkehrender
        körperlicher Schwäche geprägt war, nicht trotz ihrer Abwesenheit.</p>
        <p class="vb-intro"><strong>c) Anerkennung, die weit über die eigene Lebenszeit hinausreicht:</strong>
        Siebzehn von ihr gegründete Klöster, ein bis heute aktiver reformierter Orden – die
        soziale Drei erreicht mit Teresa genau das, worauf ihr Antrieb zielt: ein Werk, das
        von einer Gemeinschaft weitergetragen wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Erzwungene Stille als Quelle, nicht als Bremse:</strong>
        Wo eine Krankheit für viele das Ende produktiven Wirkens bedeutet hätte, wurde sie
        für Teresa zum Ausgangspunkt ihrer bedeutendsten geistigen Entwicklung – die
        Viererflügel-Introspektion verwandelte erzwungene Passivität in inneren Reichtum.</p>
        <p class="vb-intro"><strong>b) Vom Krankenbett zur Klostergründerin:</strong>
        Der Weg von fast vollständiger Lähmung zur energischen Reformerin, die über
        Jahrzehnte ein ganzes Ordensnetzwerk aufbaute, zeigt eine bemerkenswerte
        Wiederherstellung von Handlungskraft, die weit über die ursprüngliche körperliche
        Verfassung hinausging.</p>
        <p class="vb-intro"><strong>c) Innere Erfahrung, äußerlich sichtbar gemacht:</strong>
        Die mystischen Zustände, die in der Zeit ihrer Krankheit begannen, wurden nie rein
        privat gehalten, sondern in Schrift und Ordensregel öffentlich – typisch für die
        soziale Drei, deren innerstes Erleben letztlich immer auf Wirkung nach außen zielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Der Wendepunkt eines ganzen Lebens:</strong>
        Ohne die schwere Erkrankung von 1538/39 und die anschließende, fast dreijährige
        Lähmung wäre Teresas mentales Gebet – der Ursprung ihrer gesamten mystischen
        Theologie – in dieser Form vermutlich nie entstanden.</p>
        <p class="vb-intro"><strong>b) Von körperlicher Ohnmacht zu geistiger Souveränität:</strong>
        Die Zeit, in der ihr Körper ihr fast vollständig den Dienst versagte, war zugleich
        die Zeit, in der sie begann, sich eine innere geistige Welt zu erschließen, die
        später zur Grundlage eines ganzen Ordensreformwerks wurde.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Lähmung, die zur inneren Burg führte?</strong>
        Für eine soziale Drei mit Viererflügel, deren Antrieb zwischen sichtbarer öffentlicher
        Wirkung und introspektiver Tiefe changiert, lässt sich in dieser Abfolge – erst
        vollständige körperliche Ohnmacht, dann eine der einflussreichsten spirituellen
        Autorinnen der Geschichte – eine Zuspitzung des eigenen Lebensmusters lesen: Der
        Körper musste erst vollständig verstummen, damit die introspektive Stimme laut
        genug werden konnte, um später ein öffentliches Lebenswerk zu tragen. Diese Deutung
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei mit Viererflügel zwangsläufig zu
        solchen Krankheitsverläufen führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Zudem sind die genauen medizinischen
        Ursachen von Teresas Zusammenbruch bis heute nicht abschließend geklärt (Malaria,
        Epilepsie und psychogene Deutungen stehen nebeneinander). Was sich an ihrem Fall
        zeigen lässt, ist ein Muster, das bei einer ausgeprägten sozialen Drei mit
        Viererflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Teresa kannte ihr eigenes Muster nicht – doch gerade der erzwungene körperliche Stillstand nach der schweren Erkrankung von 1539 zwang die sonst auf Leistung und sichtbaren Erfolg ausgerichtete soziale Drei zu jener inneren Sammlung, aus der ihr mentales Gebet erwuchs. Nicht jede Krise bestätigt das Muster nur negativ – manchmal zwingt der Körper zu genau der Umkehr, die das bewusste Wissen um das eigene Muster freiwillig hätte einleiten können.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Drei mit Viererflügel bestätigt sich bei <strong>Teresa von Ávila</strong>
        noch einmal in der Umwandlung schwerster körperlicher Ohnmacht in ein Werk von
        bleibender öffentlicher Wirkung: vier Tage Scheintod, fast drei Jahre Lähmung – und
        daraus siebzehn Klostergründungen und ein Text, der bis heute gelesen wird. Der
        Gepard, dessen tiefste Vision zum berühmtesten Kunstwerk ihrer Zeit wurde, musste
        erst vollständig zum Stillstand kommen, bevor er seinen eigentlichen Lauf fand.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-teresa-von-avila", label:"Porträt: Teresa von Ávila (SO3w4) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function wilmaMankillerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wilma-mankiller-portrait.jpg" alt="Wilma Mankiller – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wilma Mankiller</p>
        <p class="krim-portrait-typ">SO9w8 · Sozialer Typ 9 mit Achterflügel · 1945–2010</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Büffel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Tierentsprechung: Büffel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Wilma Mankiller</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-wilma-mankiller">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk als erste weibliche
        Principal Chief der Cherokee Nation. Im Mittelpunkt dieser Seite steht ein Kapitel,
        das dort nur beiläufig erwähnt wird: Mankiller lebte über drei Jahrzehnte mit einer polyzystischen
        Nierenerkrankung, überstand zwei Nierentransplantationen (1990 und 1998, letztere
        mit ihrer Nichte als Spenderin), ein Lymphom (1996) und Brustkrebs (1999) – und
        starb 2010 im Alter von 64 Jahren an einem im Stadium IV diagnostizierten
        Bauchspeicheldrüsenkrebs.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Mankiller</strong> ist der <strong>sozialen Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die soziale Neun <em>Teilnahme</em>: Das eigene Ich tritt
        zurück, damit ein größeres Anliegen wachsen kann – Identität entsteht nicht aus
        persönlicher Profilierung, sondern aus der Verschmelzung mit einer Gemeinschaft. Der
        Achterflügel gibt dieser Neun eine seltene Kampfkraft: Sie verschmilzt nicht nur mit
        der Gemeinschaft, sie verteidigt sie auch mit sichtbarer Entschlossenheit – eine
        Kombination, die sich in ihrem Umgang mit der eigenen Krankheit ebenso zeigte wie
        in ihrer Politik.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine Diagnose lange vor dem höchsten Amt:</strong>
        Bereits 1980, fünf Jahre bevor sie 1985 zur ersten weiblichen Principal Chief der
        Cherokee Nation aufstieg, wurde bei Mankiller Myasthenia gravis diagnostiziert, eine
        neuromuskuläre Autoimmunerkrankung, die erfolgreich behandelt werden konnte.</p>
        <p class="vb-intro"><strong>b) Eine genetische Erkrankung im Hintergrund:</strong>
        Parallel dazu manifestierte sich zunehmend eine polyzystische Nierenerkrankung, die
        sie ihr ganzes Erwachsenenleben begleitete – eine stille, fortschreitende Belastung,
        die ihre gesamte Amtszeit als Principal Chief (1985–1995) überschattete, ohne dass
        sie deshalb öffentlich zurücktrat.</p>
        <p class="vb-intro"><strong>c) Rückblick als Ursprung der eigenen Stärke:</strong>
        In ihrer Autobiografie <em>Mankiller: A Chief and Her People</em> beschrieb sie ihre
        Krankheitsgeschichte selbst explizit als Teil dessen, was sie <em>die Kraft, mit
        Widrigkeiten umzugehen</em> nannte – keine externe Deutung, sondern ihre eigene
        Einordnung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwei Nierentransplantationen im Amt und danach:</strong>
        1990 erhielt Mankiller ihre erste Spenderniere; 1998, nach erneutem Nierenversagen,
        eine zweite – diesmal spendete ihre eigene Nichte. Beide Male kehrte sie nach der
        Genesung zu ihrer öffentlichen Arbeit zurück.</p>
        <p class="vb-intro"><strong>b) Lymphom mitten in der aktiven Zeit:</strong>
        1996 kam die Diagnose Lymphom hinzu, behandelt mit mehreren Runden Chemo- und
        Strahlentherapie – eine weitere schwere Erkrankung, die zur bereits bestehenden
        Nierenproblematik hinzutrat, ohne ihr öffentliches Engagement zu beenden.</p>
        <p class="vb-intro"><strong>c) Brustkrebs als dritte große Diagnose:</strong>
        1999 folgte eine Brustkrebsdiagnose, behandelt mit Operation und Bestrahlung. Vier
        schwere Erkrankungen in weniger als zwei Jahrzehnten – Mankillers Körper trug eine
        Krankheitslast, die in keinem Verhältnis zu ihrer öffentlichen Präsenz und
        Aktivität stand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Im Amt bleiben, obwohl es leichter gewesen wäre zu gehen:</strong>
        Trotz der frühen Myasthenia-gravis-Diagnose und der sich entwickelnden
        Nierenerkrankung führte Mankiller die Cherokee Nation zehn Jahre lang durch eine
        Phase des wirtschaftlichen und kulturellen Wiederaufbaus – ein für den Achterflügel
        typisches Festhalten am übernommenen Auftrag, koste es, was es wolle.</p>
        <p class="vb-intro"><strong>b) Krankheit als kollektive, nicht private Erfahrung:</strong>
        Mankiller sprach öffentlich über ihre gesundheitlichen Herausforderungen und nutzte
        sie, um Aufmerksamkeit für Gesundheitsversorgung in indigenen Gemeinschaften zu
        schaffen – für die soziale Neun ist auch die eigene Krankheit letztlich ein Anliegen
        der Gemeinschaft, nicht nur der eigenen Person.</p>
        <p class="vb-intro"><strong>c) Weiterarbeit nach dem Amt:</strong>
        Nach 1995 blieb sie als Autorin, Aktivistin und gefragte Rednerin aktiv, obwohl
        Lymphom und Brustkrebs erst noch bevorstanden – ein Leben, das sich nie ganz aus
        der Öffentlichkeit zurückzog, egal welche neue Diagnose kam.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine Amtszeit, die trotz Krankheit als Erfolg gilt:</strong>
        Mankillers zehn Jahre als Principal Chief werden bis heute als eine der prägendsten
        Führungsperioden der Cherokee Nation gewürdigt – ihre gesundheitlichen Belastungen
        blieben dabei fast unsichtbar im öffentlichen Bild ihrer Amtszeit.</p>
        <p class="vb-intro"><strong>b) Vier Diagnosen, ein durchgehendes öffentliches Leben:</strong>
        Myasthenia gravis, Nierenversagen, Lymphom, Brustkrebs – jede einzelne dieser
        Diagnosen hätte einen Rückzug aus der Öffentlichkeit rechtfertigen können. Mankiller
        wählte stattdessen bei jeder von ihnen, weiterzumachen.</p>
        <p class="vb-intro"><strong>c) Eine letzte Diagnose ohne Rückzugsoption:</strong>
        Als im März 2010 Bauchspeicheldrüsenkrebs im Stadium IV diagnostiziert wurde, blieb
        kaum Zeit für eine weitere Behandlungsrunde – sie starb am 6. April 2010, wenige
        Wochen nach der Diagnose, in der Nähe von Tahlequah, Oklahoma.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kraft, die sich aus der Gemeinschaft speiste:</strong>
        Mankiller beschrieb ihre eigene Widerstandsfähigkeit wiederholt als etwas, das sie
        aus der Verbundenheit mit ihrem Volk zog, nicht aus individueller Willenskraft
        allein – typisch für die soziale Neun, deren Kraftquelle das Kollektiv ist.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel als Motor gegen Rückzug:</strong>
        Wo eine soziale Neun mit nicht so stark ausgeprägtem Achterflügel sich angesichts
        wiederholter schwerer Diagnosen eher zurückgezogen hätte, hielt der Achterflügel
        Mankiller im aktiven Kampf – gegen die Krankheit ebenso wie für die politischen
        Anliegen ihres Volkes.</p>
        <p class="vb-intro"><strong>c) Öffentliche Sichtbarkeit als bewusste Wahl:</strong>
        Statt ihre Erkrankungen zu verbergen, machte Mankiller sie explizit zum Thema in
        Reden und Schriften über Gesundheitsversorgung für indigene Gemeinschaften – Krankheit
        wurde zu einem weiteren Feld ihres politischen Engagements.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kette von Diagnosen über drei Jahrzehnte:</strong>
        1980 Myasthenia gravis, danach fortschreitendes Nierenversagen mit zwei
        Transplantationen (1990, 1998), 1996 ein Lymphom, 1999 Brustkrebs, 2010 schließlich
        Bauchspeicheldrüsenkrebs – kaum ein Jahrzehnt ihres Erwachsenenlebens blieb ohne
        eine neue, ernsthafte Diagnose.</p>
        <p class="vb-intro"><strong>b) Das eigene Leben als Beispiel für Beharrlichkeit:</strong>
        Mankiller nutzte explizit die eigene Krankheitsgeschichte, um anderen Mut zu machen
        – ein Ausdruck des Achterflügels, der Schwäche nicht verbirgt, sondern als
        Kampfmaterial einsetzt, das anderen Kraft geben kann.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der eigene Körper zum wiederkehrenden Schlachtfeld wurde:</strong>
        Für eine soziale Neun mit Achterflügel, deren Identität untrennbar mit dem Dienst an
        einer Gemeinschaft verbunden ist, lässt sich in der wiederholten körperlichen
        Erschöpfung eine Zuspitzung des eigenen Lebensmusters lesen: Der Körper, der immer
        wieder für andere eingesetzt wurde, geriet selbst immer wieder unter Beschuss – und
        wurde jedes Mal aufs Neue verteidigt, nicht aufgegeben. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Neun mit Achterflügel zwangsläufig zu
        solchen Krankheitsketten führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Mankillers Fall zeigen lässt, ist ein
        Muster im Umgang mit wiederholter schwerer Krankheit, das bei einer ausgeprägten
        sozialen Neun mit Achterflügel immer wieder auffällt – eine von vielen möglichen
        Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Mankiller kannte ihr eigenes Muster nicht – die soziale Neun mit Achterflügel ordnet die eigene Bedürftigkeit der Sache der Gemeinschaft unter, und genau das ließ sie zwei Nierentransplantationen und mehrere Krebsdiagnosen überstehen, ohne ihr Amt aufzugeben. Wer das eigene Verschmelzen mit einer größeren Sache nicht als Muster erkennt, übersieht auch das eigene Recht, sich einmal zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Neun mit Achterflügel bestätigt sich bei <strong>Wilma Mankiller</strong>
        noch einmal in der Art, wie sie mit einer nahezu ununterbrochenen Kette schwerer
        Krankheiten umging: nie als Rückzugsgrund, immer als weiteres Feld, auf dem sie für
        ihre Gemeinschaft sichtbar blieb. Der Büffel, der eine ganze Nation trug, trug am
        Ende auch die eigene, jahrzehntelange Krankheitsgeschichte mit derselben
        unbeirrbaren Kampfkraft, mit der er zuvor für sein Volk eingetreten war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-wilma-mankiller", label:"Porträt: Wilma Mankiller (SO9w8) – Lebenswerk"},
        {route:"krankheitsportraets-willy-brandt", label:"Krankheitsporträt: Willy Brandt (SO9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so9", label:"Subtyp-Profil SO9"},
      ])}
    </div>
  `);
}

export function sammyDavisJrKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sammy-davis-jr-portrait.jpg" alt="Sammy Davis Jr." class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sammy Davis Jr.</p>
        <p class="krim-portrait-typ">SX2w3 · Sexueller Typ 2 mit Dreierflügel · 1925–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kamel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Tierentsprechung: Kamel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sammy Davis Jr.</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-sammy-davis-jr">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein sechs Jahrzehnte umspannendes
        Lebenswerk und seine Typstruktur im Allgemeinen. Hier rückt in den Mittelpunkt,
        was dort nur beiläufig erwähnt wird: die im Spätsommer 1989 diagnostizierte
        Krebserkrankung, die er der Öffentlichkeit lange verbarg, während er weiter auftrat –
        bis zu seinem Tod im Mai 1990 im Alter von 64 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Sammy Davis Jr.</strong> ist dem <strong>sexuellen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SX2 richtet die Fürsorge und Verführungskraft der Zwei ganz auf die
        eine, exklusive Verbindung – bei Davis auf sein Publikum, seine Rat-Pack-Freunde und
        die Bühne selbst. Der Dreierflügel bringt den unbedingten Willen zum sichtbaren
        Auftritt hinzu, verbunden mit der Weigerung, dem Publikum je ein Nachlassen der
        eigenen Leistungsfähigkeit zuzumuten. Genau dieses Muster hielt Davis noch auf der
        Bühne, als seine Diagnose längst feststand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Kratzen im Hals, das nicht verschwand:</strong>
        Im Spätsommer 1989 fanden Ärzte bei Davis einen Tumor im Rachenraum – ein Befund,
        der zunächst mit acht Wochen Strahlentherapie behandelt wurde und zeitweise Wirkung
        zu zeigen schien.</p>
        <p class="vb-intro"><strong>b) Auftreten trotz Diagnose:</strong>
        Obwohl die Diagnose bereits feststand, moderierte Davis am Labor-Day-Wochenende 1989
        den New Yorker Teil von Jerry Lewis' Muscular-Dystrophy-Telethon – 24 Stunden auf
        Sendung, ohne dass sein Zustand öffentlich thematisiert wurde.</p>
        <p class="vb-intro"><strong>c) Jerry Lewis' Rückblick:</strong>
        Jerry Lewis erinnerte sich später: "Sammy hat den Telethon im vergangenen September
        gemacht und wusste, wie seine Prognose aussah … Er wusste, dass er Krebs hatte, aber
        er war 24 Stunden auf Sendung."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine vermeintliche Zahnfleischentzündung:</strong>
        Anfang 1990 wurde ein zunächst als Zahnfleischinfektion eingeordneter Befund im
        Mundraum als größerer, inoperabler Tumor erkannt.</p>
        <p class="vb-intro"><strong>b) Ein Körper, der seit dem dritten Lebensjahr auf Sendung war:</strong>
        Sechs Jahrzehnte nahezu ununterbrochener Auftritte – Vaudeville, Las Vegas, Broadway,
        Fernsehen – hinterließen einen Körper, der kaum je zur Ruhe gekommen war, bevor die
        Krankheit ihn endgültig einholte.</p>
        <p class="vb-intro"><strong>c) Entlassung sechs Wochen vor dem Tod:</strong>
        Als sich sein Zustand verschlechterte, wurde Davis aus dem Cedars-Sinai Medical
        Center entlassen, um seine letzten Wochen zu Hause zu verbringen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Acht Monate zwischen Diagnose und Tod:</strong>
        Von den ersten Symptomen im Spätsommer 1989 bis zu seinem Tod am 16. Mai 1990 lag
        eine rund achtmonatige Krankheitsspanne, in der Davis zunächst weiter öffentlich in
        Erscheinung trat.</p>
        <p class="vb-intro"><strong>b) Ein Tod im Schlaf, um 5:59 Uhr:</strong>
        Davis starb im Schlaf, in seinem Zuhause in Beverly Hills, umgeben von seiner
        Familie – ein stiller Abschluss nach einem Leben, das fast nie still gewesen war.</p>
        <p class="vb-intro"><strong>c) Sieben Millionen Dollar Schulden:</strong>
        Nach zwei gescheiterten Ehen und jahrzehntelangen Suchtkämpfen hinterließ Davis
        Berichten zufolge einen Schuldenberg von rund sieben Millionen Dollar – ein Leben,
        das materiell so viel gegeben hatte, dass am Ende kaum etwas für ihn selbst übrig
        blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Die letzte große Bühne, wissentlich bespielt:</strong>
        Der Telethon-Auftritt 1989 war keine Unwissenheit, sondern eine bewusste
        Entscheidung, das Publikum nicht mit der eigenen Diagnose zu belasten – ein Akt
        äußerster SX2-Hingabe, der zugleich die eigene Gesundheit weiter aufs Spiel setzte.</p>
        <p class="vb-intro"><strong>b) Ein Vermächtnis aus Vielseitigkeit und Verausgabung:</strong>
        Dieselbe Fähigkeit, sich in jede Disziplin – Gesang, Tanz, Schauspiel – vollständig
        zu geben, die Davis' Karriere über sechs Jahrzehnte trug, ließ kaum Raum, rechtzeitig
        innezuhalten, als der Körper längst Warnsignale sandte.</p>
        <p class="vb-intro"><strong>c) Öffentliche Trauer, private Erschöpfung:</strong>
        Nach seinem Tod würdigte eine ganze Branche einen der vielseitigsten Entertainer des
        20. Jahrhunderts – während im Hintergrund ein finanziell und körperlich erschöpfter
        Mann zurückblieb, der bis zuletzt kaum für sich selbst gesorgt hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Publikum als letzte Konstante:</strong>
        Selbst mit feststehender Diagnose blieb der Auftritt vor Publikum das eine, das
        Davis nicht aufgab – die Dreierflügel-Energie der SX2 in ihrer kompromisslosesten
        Form.</p>
        <p class="vb-intro"><strong>b) Verbergen als letzte Form der Fürsorge:</strong>
        Das bewusste Verschweigen der eigenen Diagnose vor dem Publikum lässt sich als
        letzte, äußerste Ausprägung der SX2-Fürsorge lesen: selbst im eigenen Sterben noch
        das Wohl des Gegenübers über das eigene Leiden zu stellen.</p>
        <p class="vb-intro"><strong>c) Das Kamel, das bis zur letzten Vorstellung trug:</strong>
        Die Hingabe an die eine große Verbindung – an das Publikum als Ganzes – wurde bis
        zuletzt aufrechterhalten, selbst als der Körper längst keine Reserven mehr besaß.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben, das mit drei Jahren zu geben begann:</strong>
        Vom ersten Bühnenauftritt als Kleinkind bis zu seinem letzten Telethon 1989 zieht
        sich eine durchgehende Linie kompromisslosen Gebens durch Davis' gesamtes Leben –
        eine Linie, die sich am Ende auch gegen die eigene Gesundheit richtete.</p>
        <p class="vb-intro"><strong>b) Auftreten statt Rückzug, bis zuletzt:</strong>
        Wie bei vielen Krankheitsporträts dieses Kompasses zieht sich auch bei Davis auffällig
        wenig Rückzug durch die letzten Lebensmonate – stattdessen ein Weitermachen, das eher
        in Richtung des Stresspunkts der SX2, der Acht, verweist: kompromissloses
        Durchhalten trotz eindeutiger Warnsignale, statt Kontrolle abzugeben.</p>
        <p class="vb-intro"><strong>c) Sichtbares Leiden, öffentlich lange verschwiegen:</strong>
        Der körperliche Zustand blieb Familie und engstem Umfeld nicht verborgen, wurde aber
        gegenüber der Öffentlichkeit bewusst zurückgehalten – eine Verleugnung nach außen,
        die das Weitermachen erst möglich machte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Rachen und Mund?</strong>
        Für eine sexuelle Zwei mit Dreierflügel, deren gesamtes Instrument Stimme, Gesang und
        Ausdruck war, liegt eine Deutung nahe: Ausgerechnet jenes Organ, mit dem Davis sechs
        Jahrzehnte lang Verbindung zu seinem Publikum herstellte, versagte am Ende – als
        hätte ein Leben, das ganz auf das Geben durch Stimme und Ausdruck ausgerichtet war,
        keine Kapazität mehr übrig gehabt, das eigene Leiden auszusprechen. Diese Deutung ist
        eine plausible Interpretation, kein belegter historischer Kausalzusammenhang, und
        wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Zwei zwangsläufig zu Krebserkrankungen
        im Rachen- oder Mundraum führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Davis' Fall zeigen lässt, ist ein Muster,
        das bei der kompromisslosen Priorisierung des Auftritts über die eigenen
        körperlichen Warnsignale hinweg in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Davis kannte sein eigenes Enneagramm-Muster nicht – die sexuelle Zwei mit
        Dreierflügel lebt für die unmittelbare Verbindung zu einem Publikum und für den
        sichtbaren, makellosen Auftritt, und genau dieser Antrieb hielt ihn 1989 noch 24
        Stunden auf Sendung, während in seinem Körper längst ein Tumor wuchs. Wer das eigene
        Bedürfnis nach Verbindung und Anerkennung nicht als Muster erkennt, tauscht die
        eigene Gesundheit gegen den nächsten Applaus – nicht aus Schuld, sondern aus
        Unwissenheit über das eigene Muster.</p>
      </div>

      <div class="vb-section" style="background:rgba(74,127,145,0.08);border-left:3px solid #4a7f91;padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:1.5rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:#2e5a68;">Parallele im selben Subtyp: Sammy Davis Jr. und Elvis Presley</h3>
        <p class="vb-intro">Unter den SX2w3-Porträts dieses Kompasses findet sich mit
        <a href="javascript:void(0)" data-route="krankheitsportraets-elvis-presley">Elvis Presley</a>
        eine auffällig ähnliche Dynamik. Beide waren Entertainer, deren gesamte Identität an
        der unmittelbaren Verbindung zum Publikum hing; beide traten weiter auf, obwohl ihr
        Körper längst erkennbar zusammenbrach; beide starben mit deutlich verkürzter
        Lebenserwartung – Presley mit 42, Davis mit 64 Jahren. Der entscheidende Unterschied
        liegt im Verbergen: Wo Presleys Verfall auf der Bühne für sein Umfeld unübersehbar
        wurde, gelang es Davis, seine Diagnose fast bis zuletzt aktiv vor der Öffentlichkeit
        zu verbergen – dieselbe Priorisierung des Auftritts über die eigene Gesundheit, nur
        in einer noch kontrollierteren, nach außen kaum sichtbaren Form.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Sammy Davis Jr.'</strong> sexueller Typ 2 mit Dreierflügel fand seine letzte,
        konsequenteste Ausprägung in der eigenen Erkrankung: ein Tumor, der über acht Monate
        hinweg lange verschwiegen wurde, ein 24-stündiger Telethon-Auftritt trotz feststehender
        Diagnose, und ein Tod 1990 mit nur 64 Jahren, nach sechs Jahrzehnten fast
        ununterbrochenen Gebens. Das Kamel, das bis zur letzten Vorstellung trug, auch als es
        selbst niemanden mehr hatte, der es trug.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-sammy-davis-jr", label:"Porträt: Sammy Davis Jr. (SX2w3) – Lebenswerk"},
        {route:"krankheitsportraets-elvis-presley", label:"Krankheitsporträt: Elvis Presley (SX2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx2", label:"Subtyp-Profil SX2"},
      ])}
    </div>
  `);
}

export function giacomoCasanovaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-giacomo-casanova-portrait.jpg" alt="Giacomo Casanova" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Giacomo Casanova</p>
        <p class="krim-portrait-typ">SX2w3 · Sexueller Typ 2 mit Dreierflügel · 1725–1798</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kamel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Tierentsprechung: Kamel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Giacomo Casanova</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-giacomo-casanova">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein rastloses Leben quer durch
        Europa und seine zwölfbändigen Memoiren. Dieses Porträt vertieft ein Kapitel,
        das dort nur am Rande erwähnt wird: die jahrzehntelangen Geschlechtskrankheiten,
        die er selbst in seinen Memoiren offen beschrieb, und den quälenden
        Harnwegsinfekt, an dem er 1798 als verarmter Bibliothekar in der böhmischen
        Provinz starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Casanova</strong> ist dem <strong>sexuellen Typ 2 mit Dreierflügel</strong>
        zugeordnet. Die SX2 sucht Nähe über die intensive, persönliche Hingabe an den
        einen Menschen, der gerade vor ihr steht – bei Casanova äußerte sich das
        zeitlebens als endlose Reihe einzelner, echter Begegnungen statt kühler
        Berechnung. Der Dreierflügel bringt den Antrieb hinzu, aus dieser Wirkung ein
        sichtbares Lebenswerk zu formen – am deutlichsten in den Memoiren, die er als
        alter, kranker Mann noch verfasste, um dem eigenen Leben ein bleibendes Bild
        zu geben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Wiederholte Geschlechtskrankheiten über Jahrzehnte:</strong>
        In seinen eigenen Memoiren beschreibt Casanova offen mehrere Episoden von
        Gonorrhoe, Schanker sowie mindestens eine Syphilis- und eine Herpes-Erkrankung
        – Folgen eines Lebens mit vielen intensiven, wechselnden Begegnungen.</p>
        <p class="vb-intro"><strong>b) Keine dauerhafte Genesung, sondern wiederkehrende Episoden:</strong>
        Die Beschwerden verschwanden jeweils zeitweise, kehrten jedoch über die
        Jahrzehnte immer wieder zurück – ein Muster, das sich durch sein gesamtes
        Erwachsenenleben zieht, ohne dass es ihn dauerhaft ausbremste.</p>
        <p class="vb-intro"><strong>c) Unvermindertes Reisetempo trotz der Beschwerden:</strong>
        Selbst während wiederkehrender Krankheitsphasen setzte Casanova sein
        rastloses Leben quer durch Europa fort – Paris, Wien, St. Petersburg, Madrid –,
        ohne die eigene Gesundheit zum zentralen Thema zu machen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rückzug nach Dux 1785:</strong>
        Mit sechzig Jahren nahm der mittlerweile mittellose Casanova die Stelle als
        Bibliothekar von Graf Waldstein auf Schloss Dux in Böhmen an – ein bewusster
        Bruch mit dem rastlosen Leben, das ihn zuvor durch fast jede bedeutende Stadt
        Europas geführt hatte.</p>
        <p class="vb-intro"><strong>b) Zunehmende Isolation und Streit mit dem Personal:</strong>
        In Dux fühlte sich Casanova vom Schlosspersonal verspottet und unverstanden;
        zeitgenössische Berichte schildern endlose Streitereien um Kaffee, Suppe und
        die eigene Würde – ein scharfer Kontrast zu seinem früheren Leben als
        gefeierter Gesellschafter der einflussreichsten Höfe Europas.</p>
        <p class="vb-intro"><strong>c) Die Memoiren als Lebensprojekt der letzten Jahre:</strong>
        In genau dieser Isolation begann Casanova, seine ›Histoire de ma vie‹ zu
        verfassen – rund 1.800 handschriftliche Seiten, entstanden aus der
        Rückschau eines kranken, alternden Mannes auf ein Leben voller Begegnungen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein hartnäckiger Harnwegsinfekt als letzte Erkrankung:</strong>
        In seinen letzten Lebensmonaten litt Casanova an einem sich verschlimmernden,
        vermutlich als Spätfolge der jahrzehntelangen Geschlechtskrankheiten
        einzuordnenden Harnwegsinfekt, der zunehmend seine gesamte Kraft aufzehrte.</p>
        <p class="vb-intro"><strong>b) Kein spektakuläres, sondern ein zermürbendes Ende:</strong>
        Anders als die dramatischen Wendepunkte seines früheren Lebens – die Flucht
        aus den Bleikammern des Dogenpalastes, die europaweiten Skandale – verlief sein
        Tod still, in einem einzigen Zimmer eines böhmischen Schlosses, weit entfernt
        von den großen Höfen, die er einst bereist hatte.</p>
        <p class="vb-intro"><strong>c) Tod am 4. Juni 1798 mit 73 Jahren:</strong>
        Casanova starb, von der Krankheit sichtlich geschwächt, in Dux – nach eigenen,
        überlieferten letzten Worten soll er als Philosoph gelebt und als Christ zu
        sterben versucht haben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das den eigenen Tod weit überdauerte:</strong>
        Die ›Histoire de ma vie‹ wurde erst Jahrzehnte nach Casanovas Tod
        veröffentlicht und gilt heute als eines der bedeutendsten Zeitdokumente des
        europäischen 18. Jahrhunderts – ein Werk, das aus den letzten, kranken
        Lebensjahren eines vereinsamten Mannes entstand.</p>
        <p class="vb-intro"><strong>b) Der Name als Gattungsbegriff:</strong>
        Sein Name wurde postum zum Synonym für den Verführer schlechthin – eine
        Verkürzung, die dem vielschichtigen, in seinen letzten Jahren kranken und
        einsamen Mann kaum gerecht wird.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Inszenierung des eigenen Sterbens:</strong>
        Anders als sein früheres Leben, das er selbst so sorgfältig zur Schau
        gestellt hatte, verlief sein Tod fast unbemerkt von der großen europäischen
        Öffentlichkeit, die ihn einst gefeiert hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Folgen intensiver Nähe als körperliches Vermächtnis:</strong>
        Die für die sexuelle Zwei typische Hingabe an unzählige einzelne, echte
        Begegnungen hinterließ bei Casanova nicht nur emotionale, sondern auch
        körperliche Spuren – die wiederkehrenden Geschlechtskrankheiten als direkte
        Folge eines Lebens, das ganz auf persönliche Nähe ausgerichtet war.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und das letzte große Projekt:</strong>
        Dass Casanova ausgerechnet in seiner kränksten, isoliertesten Lebensphase das
        umfangreichste Werk seines Lebens schuf, passt zum Dreierflügel: Auch als der
        Körper versagte, blieb der Antrieb bestehen, aus dem eigenen Leben ein
        sichtbares, bleibendes Ergebnis zu formen.</p>
        <p class="vb-intro"><strong>c) Vom gefeierten Gesellschafter zum einsamen Kranken:</strong>
        Der Kontrast zwischen einem Leben, das fast ausschließlich aus Begegnungen mit
        anderen Menschen bestand, und einem Tod in fast völliger Isolation lässt sich
        als bitterste Konsequenz derselben Energie lesen, die ihn zeitlebens
        angetrieben hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit als direkte Folge des Lebensmusters selbst:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses steht hier
        kein zufälliges Leiden neben dem Lebensmuster, sondern ein Leiden, das aus
        genau der Lebensweise entstand, die Casanovas SX2w3-Prägung ausmachte –
        die körperliche Kehrseite jahrzehntelanger intensiver Nähe zu vielen Menschen.</p>
        <p class="vb-intro"><strong>b) Rückzug in Isolation als Bruch mit dem eigenen Muster:</strong>
        Für einen Mann, dessen gesamtes Leben auf unmittelbare persönliche Begegnung
        ausgerichtet war, bedeutete das erzwungene, kranke Rückzugsleben in Dux eine
        besonders schmerzhafte Umkehrung des eigenen Grundmusters.</p>
        <p class="vb-intro"><strong>c) Die Memoiren als Ersatz für die fehlende Nähe:</strong>
        Wo die reale Begegnung mit Menschen in den letzten Lebensjahren fehlte, trat
        das Schreiben über frühere Begegnungen an ihre Stelle – als könne die
        sexuelle Zwei die eigene Hingabe an andere nicht aufgeben, sondern nur noch
        in der Rückschau weiterleben.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Harnwege?</strong>
        Für eine sexuelle Zwei mit Dreierflügel, deren gesamtes Lebenswerk auf
        intensiver körperlicher wie emotionaler Nähe zu anderen beruhte, liegt eine
        Deutung nahe: Ausgerechnet jenes Körpersystem, über das sich diese Nähe am
        unmittelbarsten vollzog, wurde bei Casanova am Ende zum Ort chronischen
        Leidens. Diese Deutung ist eine plausible Interpretation, kein belegter
        medizinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Zwei zwangsläufig zu
        Geschlechtskrankheiten oder Harnwegsleiden führt – <strong>jeder Mensch kann
        jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an
        Casanovas Fall zeigen lässt, ist ein Muster, das bei einer besonders intensiv
        gelebten sexuellen Zwei in der Praxis immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Casanova kannte sein eigenes Enneagramm-Muster nicht – die sexuelle Zwei mit
        Dreierflügel hält reflexhaft an der intensiven Hingabe an einzelne Menschen
        fest, statt rechtzeitig auf die körperlichen Warnsignale zu achten, und lebte
        genau dieses Muster jahrzehntelang unverändert aus, bevor sich die Folgen in
        den letzten, isolierten Lebensjahren körperlich Bahn brachen. Wer die eigene
        Neigung, sich immer wieder vollständig auf neue Begegnungen einzulassen,
        nicht als Muster erkennt, riskiert, dass der eigene Körper irgendwann die
        Rechnung für Jahrzehnte ungebremster Hingabe präsentiert.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Zwei mit Dreierflügel erklärt bei <strong>Giacomo Casanova</strong>
        vieles am Verlauf seiner letzten Lebensjahre: ein Mann, dessen gesamtes Leben
        der intensiven, persönlichen Nähe zu unzähligen einzelnen Menschen galt, trug
        die körperlichen Folgen dieser Lebensweise jahrzehntelang mit sich, bis sie
        ihn in völliger Isolation einholten – und verwandelte genau diese letzte,
        einsame Phase noch einmal in sein bleibendstes Werk. Das Kamel, das am Ende
        allein durch die Wüste der eigenen Erinnerungen zog.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-giacomo-casanova", label:"Porträt: Giacomo Casanova (SX2w3) – Lebenswerk"},
        {route:"krankheitsportraets-elvis-presley", label:"Krankheitsporträt: Elvis Presley (SX2w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx2", label:"Subtyp-Profil SX2"},
      ])}
    </div>
  `);
}

export function edvardMunchKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/edvard-munch-portrait.jpg" alt="Edvard Munch" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Edvard Munch</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · 1863–1944</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Edvard Munch</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-edvard-munch">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein malerisches Werk und seine
        Typstruktur im Allgemeinen. Im Zentrum dieser Seite steht die Kette gesundheitlicher
        Krisen, die sein Leben von der Kindheit bis ins hohe Alter begleitete: chronische
        Todesangst, ein schwerer Nervenzusammenbruch, eine lebensbedrohliche Grippeerkrankung
        und eine fast erblindende Augenkrankheit im letzten Lebensjahrzehnt.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Munch</strong> ist dem <strong>sozialen Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SO4 macht das eigene Anderssein öffentlich zum Thema, statt es zu
        verbergen; der Fünferflügel verleiht dieser Öffentlichkeit eine analytische, fast
        klinische Distanz zum eigenen Leiden. Genau dieses Muster bestimmte, wie Munch mit
        jeder seiner Erkrankungen umging: nie als privates Geheimnis, sondern immer wieder
        als Gegenstand systematischer künstlerischer Selbstbeobachtung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine von Tod und Krankheit überschattete Kindheit:</strong>
        Munchs Mutter starb an Tuberkulose, als er fünf war; seine ältere Schwester Sophie
        folgte zehn Jahre später, mit fünfzehn, an derselben Krankheit. Munch selbst war ein
        kränkliches Kind, das von früh an mit der eigenen Sterblichkeit konfrontiert war.</p>
        <p class="vb-intro"><strong>b) Eine familiäre Vorbelastung, die er nie abschütteln konnte:</strong>
        Sowohl Großvater als auch Vater litten unter schweren Melancholien; seine Schwester
        Laura verbrachte große Teile ihres Lebens wegen einer Psychose in psychiatrischen
        Kliniken. Munch wuchs mit dem Gefühl auf, diese Anfälligkeit könne auch ihn treffen.</p>
        <p class="vb-intro"><strong>c) Eine Verletzung in der linken Hand, die zum Trauma wurde:</strong>
        1902 verlor er bei einem Streit mit seiner Verlobten Tulla Larsen durch einen
        Revolverschuss ein Fingerglied – ein Ereignis, das er in mehreren Selbstporträts,
        unter anderem als „Marat"-Motiv, künstlerisch verarbeitete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Nervenzusammenbruch von 1908:</strong>
        Nach Jahren exzessiven Alkoholkonsums und wachsender innerer Erschöpfung erlitt Munch
        in Kopenhagen einen schweren körperlichen und psychischen Zusammenbruch – mit
        akustischen Halluzinationen und einer Lähmung der linken Körperseite.</p>
        <p class="vb-intro"><strong>b) Acht Monate in der Nervenklinik von Dr. Daniel Jacobson:</strong>
        Munch litt unter Platzangst, Depression mit Verfolgungswahn und Suizidgedanken, war
        alkoholabhängig und missbrauchte Schlaf- und Aufputschmittel. Behandelt wurde er mit
        Diäten, Bädern, Frischluftkuren, Psychotherapie und einer nicht-krampfauslösenden
        Elektrotherapie mit schwachen Strömen.</p>
        <p class="vb-intro"><strong>c) Vollständige Abstinenz als Wendepunkt:</strong>
        Nach seiner Entlassung 1909 lebte Munch strikt alkoholabstinent – eine Konsequenz,
        die zur spürbaren, dauerhaften Besserung seines Zustands beitrug.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Spanische Grippe 1918/19:</strong>
        Munch, der sich zeitlebens vor Influenza fürchtete, erkrankte im Winter 1918/19
        lebensbedrohlich. Statt die Krankheit zu verbergen, malte er sich selbst –
        abgemagert, erschöpft, teils im Fieberdelirium – in mehreren Selbstporträts, darunter
        „Selbstbildnis mit Spanischer Grippe" und „Selbstbildnis nach Influenza".</p>
        <p class="vb-intro"><strong>b) Eine Augenkrankheit im Jahr 1930:</strong>
        Im Herbst 1930 riss die Netzhaut seines rechten Auges ein, Blut trat in den
        Glaskörper – nachdem das linke Auge bereits 1904 durch eine Schlägerei erheblich an
        Sehkraft verloren hatte, drohte ihm nun die vollständige Erblindung.</p>
        <p class="vb-intro"><strong>c) Wissenschaftliche Selbstbeobachtung statt Verzweiflung:</strong>
        Statt sich zurückzuziehen, begann Munch, die eigenen Sehstörungen zu zeichnen – die
        „entoptischen" Phänomene innerhalb des eigenen Auges, darunter nebelhafte, faserartige
        Schatten, die zeitweise die Form eines Vogelkopfes mit Flügeln annahmen. Aus dieser
        Beobachtung entstand unter anderem das Aquarell „Netzhaut-Sinnestäuschung".</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Vier verschiedene Krisen über sieben Jahrzehnte:</strong>
        Von der Kindheitstraumatisierung über den Nervenzusammenbruch 1908 und die
        Spanische Grippe 1918/19 bis zur Augenkrankheit 1930 zieht sich gesundheitliche
        Bedrohung wie ein roter Faden durch Munchs gesamtes Leben.</p>
        <p class="vb-intro"><strong>b) Ein hohes Lebensalter trotz allem:</strong>
        Munch starb 1944 im Alter von 80 Jahren – ein Leben, das trotz wiederholter,
        teils lebensbedrohlicher Krisen ungewöhnlich lang währte.</p>
        <p class="vb-intro"><strong>c) Krankheit als durchgehendes Bildmotiv:</strong>
        Von „Das kranke Kind" (seiner sterbenden Schwester Sophie gewidmet) bis zu den
        Spätwerken zur eigenen Augenkrankheit zieht sich die künstlerische Verarbeitung
        von Krankheit als eigenständiges Thema durch sein gesamtes Œuvre.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Fünferflügel unter Höchstbelastung – aus Leiden wird Forschung:</strong>
        Als 1930 die Erblindung drohte, reagierte Munch nicht mit Rückzug, sondern mit fast
        klinischer Neugier – er begann, die eigenen Sehstörungen systematisch zu dokumentieren,
        als würde er sich selbst wie ein Forschungsobjekt betrachten. Das ist die typische
        Fünferflügel-Antwort auf Bedrohung: Distanz durch Beobachtung statt durch Gefühl.</p>
        <p class="vb-intro"><strong>b) Der „kritische Kommentator" in seiner verkopften Spielart:</strong>
        Die soziale Vier wird in ihrer negativen Fixierung auch als „kritischer Kommentator"
        beschrieben – wer die eigene Andersartigkeit stark auslebt, sieht leicht überall das
        Unzulängliche und wird nörgelnd-unzufrieden. Bei Munch verband sich das mit dem
        Fünferflügel zu einer auffällig verkopften, emotional zurückgehaltenen Variante dieses
        Musters: Statt sich in Klage zu ergehen, hielt er die eigene Unzulänglichkeit – die
        drohende Erblindung – in der fast wissenschaftlichen Systematik seiner „entoptischen"
        Zeichnungen fest: präzise, wiederholt, dokumentarisch genau, statt impulsiv-emotional
        wie sonst für die Vier charakteristisch.</p>
        <p class="vb-intro"><strong>c) Öffentliche Kunst statt privates Leiden:</strong>
        Jede seiner Krisen – die Handverletzung, die Grippe, die Augenkrankheit – wurde zum
        Gegenstand öffentlich ausgestellter Selbstporträts, nie zu einem verschwiegenen
        privaten Kapitel.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im gleichen Subtyp – Heinrich Heine (SO4w3):</strong>
        Munchs Umgang mit Krankheit findet eine auffällige Parallele im
        <a href="javascript:void(0)" data-route="krankheitsportraets-heinrich-heine">Krankheitsporträt Heinrich Heines</a>
        – ebenfalls eine soziale Vier, dort mit Dreierflügel. Wo Heine seine acht Jahre
        währende Lähmung nicht verschwieg, sondern in Gedichten wie „Morphine" direkt zum
        literarischen Thema machte und bis zuletzt Besucher empfing, tat Munch dasselbe mit
        dem Pinsel: Grippe, Augenkrankheit, die verletzte Hand – jede Krise wurde zum
        Ausstellungsstück statt zum verborgenen Makel. Zwei verschiedene Flügel derselben
        sozialen Vier, dasselbe Grundmuster: Sichtbarkeit als Bewältigungsstrategie.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet Nerven und Augen?</strong>
        Für eine soziale Vier, deren gesamtes Selbstverständnis auf öffentlicher Sichtbarkeit
        beruht, liegt eine Deutung nahe: Ausgerechnet die Organe, die unmittelbar mit
        Wahrnehmen und Wahrgenommenwerden verbunden sind – die Augen, die sehen, und das
        Nervensystem, das die innere Erregung reguliert – wurden bei Munch wiederholt zum Ort
        der Krankheit. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Nerven- oder
        Augenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Munchs Fall zeigen lässt, ist ein Muster
        im Umgang mit wiederholter gesundheitlicher Bedrohung, das bei einer ausgeprägten
        sozialen Vier mit Fünferflügel auffällt – eine von vielen möglichen Deutungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Munch kannte sein eigenes Enneagramm-Muster nicht – die soziale Vier mit
        Fünferflügel verarbeitet existenzielle Bedrohung durch analytische Beobachtung und
        öffentliche Darstellung, statt durch stille Zurückgezogenheit. Genau dieses Muster
        bestimmte unbewusst und unwidersprochen sein Leben: Jede neue Krise wurde zu neuem künstlerischem
        Material, statt dass er rechtzeitig lernte, sich auch einmal ganz zurückzuziehen und
        auszuruhen. Wer die eigene Sehnsucht nach analytischer Distanz nicht als Muster
        erkennt, verwechselt sie leicht mit reiner künstlerischer Neugier, obwohl auch die
        eigene Fixierung mitentscheidet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Vier mit Fünferflügel erklärt bei <strong>Munch</strong> vieles am
        Verlauf seiner wiederholten Erkrankungen: ein Mann, der sein ganzes Leben lang von
        Krankheit und Tod umgeben war, verwandelte jede neue Krise in ein Objekt
        analytischer künstlerischer Beobachtung, statt sie zu verbergen. Das Gürteltier, das
        seinen Panzer aus Angst und Krankheit nie versteckte, sondern zum sichtbarsten
        Merkmal seines gesamten Werks machte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-edvard-munch", label:"Porträt: Edvard Munch (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-heinrich-heine", label:"Krankheitsporträt: Heinrich Heine (SO4w3) – dieselbe Bewältigungsstrategie, anderer Flügel"},
        {route:"krankheitsportraets-marcel-proust", label:"Krankheitsporträt: Marcel Proust (SO4w5) – lebenslanges Asthma"},
        {route:"krankheitsportraets-fiona-apple", label:"Krankheitsporträt: Fiona Apple (SO4w5) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function philCollinsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-phil-collins-portrait.jpg" alt="Phil Collins" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Phil Collins</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · geb. 1951</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Phil Collins</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-phil-collins">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um sein
        Lebenswerk als Musiker und Schlagzeuger. Diese Seite widmet sich einem Aspekt, der dort
        nur am Rande erwähnt wird: eine Nervenschädigung an den Händen, die ihn zwang, das
        Schlagzeugspielen aufzugeben, gefolgt von einer schweren Wirbelsäulenverletzung, die
        ihn zeitweise gehunfähig machte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Collins</strong> ist dem <strong>selbsterhaltenden Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet ihren Perfektionismus auf die eigene Arbeitsdisziplin und
        das eigene Handwerk; der Neunerflügel gibt ihr die Fähigkeit, körperliche Verluste
        ohne lautes öffentliches Aufsehen zu verarbeiten und sich pragmatisch anzupassen.
        Genau diese Kombination – der Verlust des zentralen Arbeitswerkzeugs, verbunden mit
        der stillen, disziplinierten Anpassung an neue Umstände statt öffentlicher Klage –
        bestimmte den Umgang mit der eigenen Nerven- und Wirbelsäulenerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Taubheitsgefühle in den Händen:</strong>
        Bereits in den frühen 2000er-Jahren bemerkte Collins zunehmende Taubheit und
        Kraftverlust in den Händen, die sich zunächst schleichend, aber stetig verstärkten.</p>
        <p class="vb-intro"><strong>b) Diagnose einer Nervenschädigung 2007:</strong>
        2007 wurde bei ihm eine Nervenschädigung diagnostiziert, die das Halten von
        Trommelstöcken zunehmend erschwerte und schließlich unmöglich machte.</p>
        <p class="vb-intro"><strong>c) Aufgabe des Schlagzeugspielens:</strong>
        Collins musste daraufhin das Schlagzeugspielen, das Fundament seiner musikalischen
        Identität seit seiner Jugend, weitgehend aufgeben – ein Verlust, über den er sich in
        Interviews auffällig sachlich äußerte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Schwerer Sturz mit Wirbelsäulenverletzung 2015:</strong>
        2015 stürzte Collins schwer und zog sich eine Verletzung der Wirbelsäule zu, die
        mehrere Operationen erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Zeitweise Gehunfähigkeit ohne Hilfsmittel:</strong>
        In der Folge konnte er zeitweise nicht mehr ohne Krücken oder fremde Unterstützung
        gehen – eine gravierende Einschränkung für einen Künstler, dessen gesamte Karriere auf
        Bühnenpräsenz beruhte.</p>
        <p class="vb-intro"><strong>c) Kein vollständiger Rückzug von der Bühne:</strong>
        Trotz dieser massiven körperlichen Einschränkung zog sich Collins nicht vollständig
        aus dem öffentlichen Musikleben zurück, sondern suchte nach Wegen, weiterhin
        aufzutreten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die ›Not Dead Yet‹-Tournee 2017–2019:</strong>
        Von 2017 bis 2019 tourte Collins unter dem selbstironisch gewählten Titel ›Not Dead
        Yet‹ – sitzend, mit einem Gehstock neben sich auf der Bühne, während sein Sohn Nic
        Collins am Schlagzeug übernahm.</p>
        <p class="vb-intro"><strong>b) Öffentliche Offenheit statt Verschweigen:</strong>
        Anders als manche Künstler in vergleichbarer Lage verschwieg Collins seine
        körperlichen Einschränkungen nicht, sondern sprach in Interviews offen über
        Krücken, Gehhilfen und die Unmöglichkeit, wieder Schlagzeug zu spielen.</p>
        <p class="vb-intro"><strong>c) Autobiografie ›Not Dead Yet‹ 2016:</strong>
        Kurz vor der Tournee veröffentlichte Collins seine Autobiografie unter demselben
        Titel, in der er ungewöhnlich offen über gesundheitliche Rückschläge, aber auch über
        sein Bedauern über verpasste Familienzeit während seiner Karriere schrieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ausverkaufte Konzerte trotz sitzender Performance:</strong>
        Die ›Not Dead Yet‹-Tournee war trotz oder gerade wegen der ungewöhnlichen,
        sitzenden Präsentationsform international ausverkauft und kommerziell erfolgreich.</p>
        <p class="vb-intro"><strong>b) Kein Imageverlust durch sichtbare Einschränkung:</strong>
        Anders als befürchtet schadete die sichtbare körperliche Einschränkung seinem
        öffentlichen Ansehen nicht – im Gegenteil, sie wurde von vielen als Ausdruck
        besonderer Beharrlichkeit gewertet.</p>
        <p class="vb-intro"><strong>c) Fortsetzung der Genesis-Reunion 2020–2022:</strong>
        Trotz fortbestehender körperlicher Einschränkungen setzte Collins die
        Genesis-Reunion-Tournee ›The Last Domino?‹ bis 2022 fort, ebenfalls überwiegend
        sitzend.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Disziplin, die sich an neue Umstände anpasste:</strong>
        Die SE1-typische Arbeitsdisziplin zeigte sich auch im Umgang mit der eigenen
        körperlichen Einschränkung: Collins gab das Musizieren nicht auf, sondern fand eine
        neue, ebenso diszipliniert durchgehaltene Form – das sitzende Konzert mit seinem Sohn
        am Schlagzeug.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die pragmatische Anpassung statt öffentlicher Klage:</strong>
        Dieselbe Zurückhaltung, mit der Collins zeitlebens vor Selbstinszenierung
        zurückschreckte, zeigte sich im Umgang mit der eigenen Krankheit als bewusste
        Entscheidung, die eigene Einschränkung sachlich zu benennen, statt sie zum Drama zu
        machen.</p>
        <p class="vb-intro"><strong>c) Selbstironie als Ventil statt Verdrängung:</strong>
        Dass er die Tournee selbst ›Not Dead Yet‹ nannte, passt zur SE1w9-Fähigkeit, auch
        schwerwiegende eigene Einschränkungen mit einer gewissen trockenen Distanz zu
        benennen, statt sie zu dramatisieren oder zu verschweigen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Schlagzeuger, dessen Werkzeug die eigenen Hände waren:</strong>
        Collins' gesamte musikalische Identität begann am Schlagzeug – Präzision, Timing und
        körperliche Kontrolle waren sein ursprüngliches Handwerk. Ausgerechnet die Hände, die
        dieses Handwerk ermöglichten, versagten ihm im mittleren Lebensalter.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-astrid-lindgren">Astrid
        Lindgren (SE1w9)</a>: Auch bei ihr versagte im Alter genau jenes Organ – die Augen –,
        das ihr gesamtes Lebenswerk der genauen Beobachtung trug, und auch sie reagierte nicht
        mit öffentlicher Klage, sondern mit einer neuen, ebenso disziplinierten Arbeitsweise
        (Diktat statt Schreiben, sitzendes Konzert statt Schlagzeug). Bei beiden SE1w9ern zeigt
        sich dasselbe Muster: Der Verlust des zentralen Arbeitswerkzeugs wird durch Disziplin
        und pragmatische Anpassung kompensiert, statt öffentlich verhandelt zu werden.</p>
        <p class="vb-intro"><strong>c) Wenn die Eins unter chronischem Stress zur Vier wird:</strong>
        Collins' Autobiografie ›Not Dead Yet‹ (2016) fällt durch einen für die sonst so
        sachliche, disziplinierte SE1 ungewöhnlichen Ton auf: ausführliche, introspektive
        Passagen über Bedauern, Einsamkeit und das Gefühl, als Vater und Ehemann versagt zu
        haben. Wer über Jahre in chronischer körperlicher Belastung lebt, bewegt sich
        zunehmend entlang seiner Stresslinie in Richtung seines Stresspunkts – bei der Eins
        ist das die Vier. Diese ungewohnt melancholische, nach innen gerichtete
        Selbstbefragung in seinen späteren Lebensjahren erinnert an die gefühlsbetonte
        Rückschau des Stresspunkts, nicht an die sachliche Pflichterfüllung des Kerntyps – bei
        unverändertem Kerntyp SE1w9.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Hände und Wirbelsäule?</strong>
        Für einen selbsterhaltenden Einser, dessen gesamte berufliche Identität auf
        körperlicher Präzision und diszipliniertem Timing am Instrument beruhte, liegt eine
        Deutung nahe: Ausgerechnet jene körperlichen Strukturen, die diese Präzision
        ermöglichten – Hände und Wirbelsäule als Träger von Haltung und Bewegung –, wurden zum
        Ort des Kontrollverlusts. Diese Deutung ist eine plausible Interpretation, kein
        belegter klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Nervenschädigungen oder Wirbelsäulenverletzungen führt – <strong>jeder Mensch kann
        jede Erkrankung entwickeln, unabhängig vom Subtyp.</strong> Was sich an Collins' Fall
        zeigen lässt, ist ein Muster im Umgang mit einer schwerwiegenden körperlichen
        Einschränkung, das bei einer ausgeprägten selbsterhaltenden Eins mit Neunerflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Collins kennt sein eigenes Muster vermutlich nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins mit Neunerflügel hält reflexhaft an der eigenen Disziplin und
        stillen Anpassung fest, statt körperliche Verluste offen als das zu benennen, was sie
        sind, und lebt genau dieses Muster seit Jahrzehnten unverändert aus. Wer die
        eigene Neigung, körperliche Grenzen ohne öffentliche Aussprache zu kompensieren, nicht
        als Muster erkennt, riskiert, dass die eigene Belastung unsichtbar bleibt, auch wenn
        Unterstützung oder Entlastung möglich wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Neunerflügel erklärt bei <strong>Phil
        Collins</strong> vieles am Umgang mit der eigenen Nerven- und
        Wirbelsäulenerkrankung: ein Musiker, dessen gesamtes Handwerk auf körperlicher
        Präzision beruhte, fand eine neue, ebenso diszipliniert durchgehaltene Form,
        weiterzuwirken, als ihm genau diese Präzision selbst versagte – der Adler, der auch
        ohne die volle Kontrolle über die eigenen Hände wusste, wohin er fliegen musste.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-phil-collins", label:"Porträt: Phil Collins (SE1w9) – Lebenswerk"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Krankheitsporträt: Astrid Lindgren (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-alain-delon", label:"Krankheitsporträt: Alain Delon (SE1w2) – gleicher Kerntyp, anderer Flügel"},
        {route:"krankheitsportraets-arnold-schwarzenegger", label:"Krankheitsporträt: Arnold Schwarzenegger (SE1w2) – gleicher Kerntyp, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function connieChiuKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-connie-chiu-portrait.jpg" alt="Connie Chiu" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Connie Chiu</p>
        <p class="krim-portrait-typ">SE4w5 · Selbsterhaltender Typ 4 mit Fünferflügel · geb. 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Taube</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Tierentsprechung: Taube" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Connie Chiu</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-connie-chiu">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um ihre
        Doppelkarriere als Model und Jazzsängerin. Diese Seite blickt genauer auf die
        körperliche Grundlage dieser Geschichte: einen angeborenen Albinismus, verbunden mit
        lebenslanger Lichtempfindlichkeit, erhöhtem Hautkrebsrisiko und eingeschränkter
        Sehkraft.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Chiu</strong> ist dem <strong>selbsterhaltenden Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die SE4 ist nach Naranjo der Kontratyp der Vier: Statt das eigene
        Anderssein zur Schau zu stellen, wird es beharrlich heruntergespielt und praktisch
        bewältigt; der Fünferflügel gibt ihr eine strukturierte, beobachtende Distanz zum
        eigenen Erleben. Genau diese Kombination – die körperliche Besonderheit sachlich
        benennen, statt sie zu dramatisieren, und sie in zwei parallel aufgebaute Karrieren zu
        übersetzen – bestimmte den Umgang mit dem eigenen Albinismus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Angeboren, als einziges von vier Kindern:</strong>
        Chiu wurde 1969 in Hongkong als einziges von vier Kindern ihrer chinesischen Familie
        mit Albinismus geboren – einer genetisch bedingten, angeborenen Störung der
        Melaninbildung.</p>
        <p class="vb-intro"><strong>b) Extreme Lichtempfindlichkeit in Hongkongs Klima:</strong>
        Die intensive Sonneneinstrahlung Hongkongs stellte für Chiu aufgrund der mit
        Albinismus verbundenen Licht- und UV-Empfindlichkeit von Haut und Augen eine
        erhebliche gesundheitliche Belastung dar.</p>
        <p class="vb-intro"><strong>c) Umzug nach Schweden als gesundheitliche Schutzmaßnahme:</strong>
        Mit sieben Jahren zog die Familie nach Schweden – eine bewusste, unspektakuläre
        Entscheidung, um sie vor der intensiven Sonne Hongkongs zu schützen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Lebenslanger Sonnenschutz als tägliche Notwendigkeit:</strong>
        Menschen mit Albinismus tragen ein deutlich erhöhtes Hautkrebsrisiko und sind auf
        konsequenten Sonnenschutz angewiesen – eine Einschränkung, die Chius gesamten Alltag
        und ihre berufliche Tätigkeit vor der Kamera und auf der Bühne mitprägte.</p>
        <p class="vb-intro"><strong>b) Eingeschränkte Sehkraft trotz Modelkarriere:</strong>
        Albinismus geht häufig mit verminderter Sehschärfe und Nystagmus einher – eine
        Einschränkung, die in auffälligem Kontrast zu einem Beruf steht, der visuelle
        Präsenz und räumliche Orientierung auf dem Laufsteg verlangt.</p>
        <p class="vb-intro"><strong>c) Wiederholte Provokationen wegen des äußeren Erscheinungsbilds:</strong>
        Chiu berichtete, wiederholt provoziert und unter anderem nach einem
        Horrorfilm-Charakter „Weißhaarige Teufelsfrau" gerufen worden zu sein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Relativierung statt Anklage in der öffentlichen Sprache:</strong>
        Chiu beschrieb die Provokationen auffallend nüchtern: „Ich wurde in der Schule nicht
        gemobbt, aber hin und wieder versuchen Leute, mich zu provozieren oder aufzuregen" –
        eine Formulierung, die relativiert statt anklagt.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Reduktion auf die Diagnose:</strong>
        Chiu ließ sich in Interviews nie auf die Rolle „das erste Albino-Model" reduzieren,
        sondern verwies stattdessen konsequent auf ihre doppelte künstlerische Laufbahn als
        Model und Jazzsängerin.</p>
        <p class="vb-intro"><strong>c) Analytische statt emotionale Reflexion über Vorurteile:</strong>
        Ihre öffentlichen Aussagen über Reaktionen auf ihr Äußeres bleiben auffallend
        analytisch: „Es liegt in der menschlichen Natur, Vorurteile zu haben ... Ich habe es
        immer bevorzugt, dort zu sein, wo sich viele verschiedene Menschen mischen."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Pionierrolle in der Modebranche:</strong>
        Chius Debüt bei Jean Paul Gaultier mit 24 Jahren machte sie zum ersten bekannten Model
        mit Albinismus in der internationalen Modebranche – eine Sichtbarkeit, die weit über
        ihre eigene Karriere hinaus wirkte.</p>
        <p class="vb-intro"><strong>b) Vorbildfunktion für andere Betroffene:</strong>
        Auf die Frage, was sie einem Kind mit Albinismus raten würde, antwortete sie schlicht:
        „Glaub an dich selbst" – ein Satz, der seither in Berichten über Albinismus wiederholt
        zitiert wird.</p>
        <p class="vb-intro"><strong>c) Anhaltende zweite Karriere als Jazzsängerin:</strong>
        Parallel zur Modelkarriere etablierte sich Chiu mit Auftritten bei großen
        Veranstaltungen und in Jazzclubs als eigenständige Sängerin – eine zweite,
        gleichrangige künstlerische Identität, nicht nur ein Zusatz zur ersten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Herunterspielen statt Dramatisieren:</strong>
        Die SE4-typische Kontratyp-Bewegung – das eigene Anderssein nicht zur Schau zu
        stellen, sondern beharrlich zu relativieren – zeigt sich bei Chiu direkt in ihrer
        auffallend sachlichen Sprache über Provokationen und die eigene körperliche
        Besonderheit.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und die zwei durchdachten Karrieren:</strong>
        Dieselbe strukturierte, beobachtende Distanz, die Chius analytische Reflexion über
        Vorurteile prägt, zeigt sich auch im systematischen Aufbau zweier paralleler,
        handwerklich anspruchsvoller Karrieren statt einer einzigen, lauten
        Selbstinszenierung.</p>
        <p class="vb-intro"><strong>c) Stille Feststellung statt Anspruch auf Mitleid:</strong>
        „Ich glaube, ich wusste immer, dass ich anders bin, aber ich fühle mich genau wie
        jeder andere" – eine Formulierung, die weder die Krankheit verleugnet noch sie zum
        Zentrum der eigenen Identität macht, sondern beides gleichzeitig hält.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Beruf des Sichtbarwerdens, aufgebaut auf eingeschränkter Sicht:</strong>
        Chius gesamte erste Karriere beruhte darauf, gesehen zu werden – auf dem Laufsteg,
        vor der Kamera. Ausgerechnet die eigene Sehkraft, durch den Albinismus vermindert,
        stand dabei in ständigem Kontrast zu dieser beruflichen Anforderung.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="beruehmte-neil-harbisson">Neil Harbisson
        (SE4w5)</a>, der mit angeborener Achromatopsie (vollständiger Farbenblindheit) eine
        ebenfalls angeborene, sichtbare Sinnesbesonderheit nicht verbarg, sondern zur
        Grundlage einer eigenständigen technologischen und künstlerischen Karriere machte.
        Bei beiden SE4w5 zeigt sich dasselbe Muster: eine angeborene körperliche Besonderheit
        wird weder versteckt noch zur alleinigen Identität, sondern durch beharrliche,
        strukturierte Arbeit in eine eigenständige berufliche Laufbahn übersetzt.</p>
        <p class="vb-intro"><strong>c) Keine Stresspunkt-Verschiebung, da keine chronisch fortschreitende Krise:</strong>
        Anders als bei Krankheitsverläufen mit zunehmender Verschlechterung ist Chius
        Albinismus eine von Geburt an konstante, nicht fortschreitende Eigenschaft. Eine
        Verschiebung entlang der Stresslinie in Richtung des Stresspunkts der Vier – der Zwei
        – lässt sich an ihrem öffentlich dokumentierten Leben nicht ablesen; ihr Umgang mit
        der eigenen Besonderheit blieb über Jahrzehnte bemerkenswert konstant.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Augen und die Haut?</strong>
        Für eine selbsterhaltende Vier, deren erste Karriere auf visueller Präsenz vor der
        Kamera beruhte, liegt eine Deutung nahe: Ausgerechnet jene Organe, die für diesen
        Beruf zentral sind – die Augen für die Sehkraft, die Haut als sichtbarste Fläche des
        Körpers –, waren von der angeborenen Besonderheit betroffen. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Vier zwangsläufig mit
        Albinismus oder vergleichbaren angeborenen Besonderheiten zusammenhängt –
        <strong>jeder Mensch kann mit jeder angeborenen Eigenschaft geboren werden,
        unabhängig vom Subtyp.</strong> Was sich an Chius Fall zeigen lässt, ist ein Muster im
        Umgang mit einer angeborenen, sichtbaren körperlichen Besonderheit, das bei einer
        ausgeprägten selbsterhaltenden Vier mit Fünferflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Chiu kennt ihr eigenes Muster vermutlich nicht als Enneagramm-Struktur – die
        selbsterhaltende Vier mit Fünferflügel hält reflexhaft an Herunterspielen und
        analytischer Distanz zur eigenen Besonderheit fest, statt Provokationen offen als
        das zu benennen, was sie sind. Wer die eigene Neigung, verletzende Reaktionen anderer
        stets zu relativieren, statt sie auch einmal direkt zu benennen, nicht als Muster
        erkennt, riskiert, dass die eigene Verletzlichkeit dauerhaft unsichtbar bleibt, selbst
        wenn eine klarere Grenzziehung möglich und angemessen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 4 mit Fünferflügel erklärt bei <strong>Connie Chiu</strong>
        vieles am Umgang mit dem eigenen Albinismus: eine Frau, deren körperliche Besonderheit
        andere zum Anstarren brachte, verwandelte diese Besonderheit nicht in eine laute
        Anklage, sondern in die ruhige Grundlage zweier eigenständiger künstlerischer
        Karrieren. Die Taube, die im hellsten Licht am ruhigsten bleibt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-connie-chiu", label:"Porträt: Connie Chiu (SE4w5) – Lebenswerk"},
        {route:"beruehmte-neil-harbisson", label:"Porträt: Neil Harbisson (SE4w5) – gleicher Subtyp, ebenfalls angeborene Sinnesbesonderheit"},
        {route:"krankheitsportraets-virginia-woolf", label:"Krankheitsporträt: Virginia Woolf (SE4w5) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se4", label:"Subtyp-Profil SE4"},
      ])}
    </div>
  `);
}

export function charlesLaughtonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-charles-laughton-portrait.jpg" alt="Charles Laughton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Laughton</p>
        <p class="krim-portrait-typ">SE9w8 · Selbsterhaltender Typ 9 mit Achterflügel · 1899–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Elefant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Tierentsprechung: Elefant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Laughton</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-charles-laughton">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Schauspielkarriere, seine verheimlichte
        Homosexualität und seine lebenslange Scham über sein Äußeres. Diese Seite blendet all das aus
        und richtet den Blick allein auf einen metastasierenden Nieren- und Blasenkrebs, dessen
        Vorboten er über Jahre kaum wahrnehmbar in den Alltag einbaute, bevor die Erkrankung 1962
        binnen weniger Monate tödlich verlief.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Laughton</strong> ist der <strong>selbsterhaltenden Neun mit Achterflügel</strong>
        zugeordnet. Naranjo nannte die selbsterhaltende Neun <em>Appetit</em>: Sicherheit durch
        Gewohnheit und körperlichen Komfort als Puffer gegen eine tiefer liegende innere Leere. Der
        Achterflügel gibt dieser Neun eine verborgene Substanz, die im Ruhezustand kaum sichtbar
        ist. Genau diese Kombination aus Verdrängung durch Gewohnheit und stiller körperlicher
        Widerstandskraft prägte, wie Laughton mit seinem eigenen körperlichen Verfall umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Körper, den er zeitlebens mied:</strong>
        Laughton hatte schon Jahrzehnte vor seiner Krebsdiagnose ein zutiefst gestörtes Verhältnis
        zu seinem eigenen Körper, den er als hässlich empfand und den er nach eigener Aussage kaum
        im Spiegel betrachten konnte – eine Grundhaltung, die es ihm erschwerte, körperliche
        Warnsignale ernst zu nehmen, statt sie zu verdrängen.</p>
        <p class="vb-intro"><strong>b) Sichtbar nachlassende Gesundheit bereits Ende der 1950er-Jahre:</strong>
        Bei seinem Auftritt als König Lear 1959 am Shakespeare Memorial Theatre in Stratford-upon-Avon
        wirkte Laughton bereits deutlich geschwächt und erschöpft – er absolvierte die körperlich
        fordernde Rolle dennoch bis zum Ende, statt die Warnzeichen seines Körpers zum Anlass für
        eine gründliche Untersuchung zu nehmen.</p>
        <p class="vb-intro"><strong>c) Ein vermeintlicher Bandscheibenvorfall im Juli 1962:</strong>
        Erst als er im Juli 1962 wegen starker Rückenschmerzen ins Cedars of Lebanon Hospital
        eingeliefert wurde, ursprünglich mit der Verdachtsdiagnose eines Bandscheibenvorfalls,
        stellte sich heraus, dass der Wirbeleinbruch tatsächlich durch Knochenmetastasen eines
        bereits weit fortgeschrittenen Nieren- und Blasenkrebses verursacht war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine Erkrankung, die erst durch einen anderen Befund entdeckt wurde:</strong>
        Nicht der Krebs selbst, sondern die vermeintlich harmlosere Rückenproblematik brachte
        Laughton überhaupt erst ins Krankenhaus – ohne die akuten Schmerzen wäre die zugrunde
        liegende Krebserkrankung wohl noch länger unentdeckt geblieben.</p>
        <p class="vb-intro"><strong>b) Ein monatelanger Krankenhausaufenthalt bis November 1962:</strong>
        Laughton blieb nach der Diagnose bis November 1962 stationär, bevor er nach Hause entlassen
        wurde – ein langer, öffentlich kaum kommentierter Rückzug aus dem Leben, das er zuvor als
        Schauspieler und Gesellschaftsfigur geführt hatte.</p>
        <p class="vb-intro"><strong>c) Ein Sterben ohne volle Kenntnis der eigenen Diagnose:</strong>
        Nach Berichten aus seinem Umfeld wusste Laughton bis kurz vor seinem Tod nicht mit letzter
        Klarheit, wie ernst seine Erkrankung tatsächlich war – eine damals verbreitete Praxis, todkranken
        Patienten die volle Wahrheit vorzuenthalten, die bei Laughton auf eine Persönlichkeit traf, die
        ohnehin selten aktiv nach unbequemen Wahrheiten über sich selbst fragte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Elsa Lanchester als stabilisierender Anker bis zuletzt:</strong>
        Seine Frau Elsa Lanchester, mit der er seit 1929 in einer auf gegenseitigem Respekt statt
        auf romantischer Leidenschaft beruhenden Ehe verbunden war, blieb bis zu seinem Tod an
        seiner Seite und organisierte die Pflege in seinen letzten Monaten.</p>
        <p class="vb-intro"><strong>b) Weiterarbeiten trotz sichtbarer körperlicher Erschöpfung:</strong>
        Statt frühzeitig kürzerzutreten, nahm Laughton auch in den Jahren erkennbar nachlassender
        Gesundheit noch anspruchsvolle Rollen an – eine Fortsetzung derselben Routine, die ihm
        zeitlebens Halt gegeben hatte, auch als der Körper längst andere Signale sendete.</p>
        <p class="vb-intro"><strong>c) Ein Koma vor dem Tod, kein bewusster Abschied:</strong>
        In seinen letzten Tagen fiel Laughton in ein Koma, aus dem er nicht mehr erwachte – ein
        Ende, das ihm die aktive Auseinandersetzung mit dem eigenen Sterben, der er zeitlebens aus
        dem Weg gegangen war, in gewisser Weise auch am Schluss ersparte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein plötzliches Ende nach jahrelang unterschwelligem Verfall:</strong>
        Was von außen wie ein relativ plötzlicher gesundheitlicher Einbruch im Sommer 1962 wirkte,
        war in Wirklichkeit das Ergebnis einer Krankheit, die sich vermutlich über Jahre unbemerkt
        entwickelt hatte, während Laughton seinen gewohnten Alltag so lange wie möglich fortsetzte.</p>
        <p class="vb-intro"><strong>b) Tod am 15. Dezember 1962 in Hollywood:</strong>
        Charles Laughton starb im Alter von 63 Jahren in seinem Haus in Hollywood – seine Asche
        wurde im Forest Lawn Memorial Park beigesetzt.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Auseinandersetzung mit der eigenen Sterblichkeit:</strong>
        Anders als manch anderes Krankheitsporträt dieses Kompasses hinterließ Laughton keine
        Zeugnisse eines bewussten Ringens mit dem eigenen Tod – die Krankheit blieb, wie schon seine
        Homosexualität, größtenteils unausgesprochen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der körperlichen Schmerz lange kompensierte:</strong>
        Dieselbe verborgene Substanz, die Laughton erlaubte, seine anspruchsvollsten Rollen noch mit
        sichtbar nachlassenden Kräften durchzustehen, verzögerte vermutlich auch die Konfrontation mit
        der eigenen ernsten Erkrankung – Kraft, die genutzt wurde, um weiterzumachen, nicht um genauer
        hinzusehen.</p>
        <p class="vb-intro"><strong>b) Appetit, der sich in Gewohnheit statt in Sorge um den Körper flüchtete:</strong>
        Die selbsterhaltende Neun sucht Frieden im Vertrauten – bei Laughton bedeutete das, an
        Kochkunst, Kunstsammlung und gewohnten Arbeitsroutinen festzuhalten, während der eigene Körper
        längst ernsthaft erkrankt war.</p>
        <p class="vb-intro"><strong>c) Ein Sterben, das ihm die aktive Konfrontation weitgehend ersparte:</strong>
        Dass Laughton bis zuletzt nicht die volle Wahrheit über seine Diagnose kannte und schließlich
        im Koma starb, passt zu einem Lebensmuster, das eine direkte, bewusste Auseinandersetzung mit
        unangenehmen Wahrheiten über sich selbst konsequent vermied.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der über Jahre ignoriert wurde:</strong>
        Laughtons sichtbar nachlassende Gesundheit bereits 1959 bei seinem Lear in Stratford und die
        erst 1962 gestellte, da bereits weit fortgeschrittene Diagnose zeigen dieselbe Grundstrategie:
        Warnsignale des eigenen Körpers so lange wie möglich in den gewohnten Alltag einbauen, statt
        sie aktiv zu untersuchen.</p>
        <p class="vb-intro"><strong>b) Die Parallele zu Laughtons eigenem Lebensmusterkompass-Fingerabdruck:</strong>
        Genau dieses Muster – Trägheit als Selbstvergessenheit statt als aktives Ankämpfen – findet
        sich bereits in seinem Porträt unter Berühmte Persönlichkeiten beschrieben: ein Sich-Einrichten
        im gewohnten Komfort, das sich hier bis in den Umgang mit der eigenen tödlichen Erkrankung
        fortsetzte.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine lange unentdeckte Krebserkrankung?</strong>
        Für eine selbsterhaltende Neun mit Achterflügel, deren tiefstes Bedürfnis darin besteht, im
        Vertrauten Frieden zu finden und unangenehme innere wie äußere Signale zu dämpfen, liegt eine
        Deutung nahe: Ausgerechnet eine Krankheit, die sich lange ohne eindeutige Warnsignale entwickelt
        und sich hinter einem vermeintlich harmloseren Befund verbarg, traf bei Laughton auf einen Mann,
        der sein Leben lang lieber im Vertrauten blieb, als genauer hinzusehen. Diese Deutung wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Neun zwangsläufig zu Krebs führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was sich an
        Laughtons Fall zeigen lässt, ist ein Muster, das bei tiefer, gewohnheitsbasierter Verdrängung in
        der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Laughton kannte sein eigenes Enneagramm-Muster nicht, und so blieb seine Neuner-Trägheit
        völlig ungebremst wirksam: Statt frühzeitig eine ernsthafte ärztliche Abklärung seiner
        körperlichen Erschöpfung zu suchen, hielt er an seinen gewohnten Rollen, seinem gewohnten Alltag
        fest, bis der Körper selbst die Entscheidung traf. Nicht aus Schuld, sondern aus Unwissenheit
        über das eigene Muster – und genau das erklärt, warum sich bei ihm eine schwere Krebserkrankung
        über Jahre unbehelligt entfalten konnte, statt rechtzeitig erkannt und behandelt zu werden.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Charles Laughtons</strong> Krankheitsgeschichte lässt sich die selbsterhaltende Neun
        mit Achterflügel in ihrer verletzlichsten Form ablesen: ein Mann, der seinen eigenen Körper
        zeitlebens mied, dessen Warnsignale über Jahre in den gewohnten Alltag einbaute und schließlich
        an einer Krankheit starb, deren volles Ausmaß er nach Berichten seines Umfelds bis zuletzt nicht
        kannte. Der Elefant, der auch die eigene Sterblichkeit lieber nicht genau ansah.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-charles-laughton", label:"Porträt: Charles Laughton (SE9w8) – Lebenswerk"},
        {route:"krankheitsportraets-margaret-rutherford", label:"Krankheitsporträt: Margaret Rutherford (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-david-hume", label:"Krankheitsporträt: David Hume (SE9w8) – gleicher Subtyp"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Krankheitsporträt: Hans-Dietrich Genscher (SE9w8) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
      ])}
    </div>
  `);
}

export function dmitriHvorostovskyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-hvorostovsky-portrait.jpg" alt="Dmitri Hvorostovsky" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Hvorostovsky</p>
        <p class="krim-portrait-typ">SO3w2 · Sozialer Typ 3 mit Zweierflügel · 1962–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gepard</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Tierentsprechung: Gepard" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dmitri Hvorostovsky</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-dmitri-hvorostovsky">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine internationale Opernkarriere.
        Im Zentrum dieser Seite steht, was dort nur am Rande erwähnt wird: die letzten
        zweieinhalb Jahre seines Lebens nach der Diagnose eines Glioblastoms, eines
        besonders aggressiven Hirntumors, und die Konsequenz, mit der er sein öffentliches
        Bild bis fast zum Schluss aufrechterhielt.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hvorostovsky</strong> ist dem <strong>sozialen Typ 3 mit Zweierflügel</strong>
        zugeordnet. Die SO3 misst ihren Wert an öffentlich sichtbarer Anerkennung; der
        Zweierflügel bringt eine warme Zuwendung zum Publikum hinzu, die reinen Ehrgeiz
        übersteigt. Genau diese Kombination bestimmte, wie er mit seiner Erkrankung
        umging: nicht durch Rückzug, sondern durch einen bis zuletzt fortgesetzten,
        öffentlich sichtbaren Auftritt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Keine dokumentierten Warnzeichen vor 2015:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses gibt es bei
        Hvorostovsky keine belegten gesundheitlichen Auffälligkeiten in den Jahrzehnten
        vor der Diagnose – seine Stimme und sein Auftreten galten bis kurz zuvor als
        makellos.</p>
        <p class="vb-intro"><strong>b) Diagnose im Juni 2015:</strong>
        Im Juni 2015 wurde bei ihm ein Glioblastom festgestellt, ein besonders
        aggressiver und schnell wachsender Hirntumor. Er sagte daraufhin alle
        Auftritte bis August ab.</p>
        <p class="vb-intro"><strong>c) Sofortige, aber befristete öffentliche Zurücknahme:</strong>
        Die erste Reaktion war ein klar begrenzter Rückzug – keine unbestimmte Pause,
        sondern eine Absage mit festem Enddatum, an dem er die Bühne wieder
        einzunehmen gedachte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Rückkehr zur Met noch im selben Jahr:</strong>
        Bereits im September 2015 – nur drei Monate nach der Diagnose – kehrte er an
        die Metropolitan Opera zurück, um als Graf di Luna in ›Il trovatore‹ drei
        Vorstellungen an der Seite Anna Netrebkos zu singen.</p>
        <p class="vb-intro"><strong>b) Öffentlich zuversichtliche Sprache:</strong>
        In einem vielzitierten Interview berichtete er, seine Ärzte hätten ihm gesagt:
        ›Sie werden nicht sterben.‹ Diese Aussage prägte über Monate seine öffentliche
        Kommunikation über die eigene Erkrankung.</p>
        <p class="vb-intro"><strong>c) Weiterhin aktives Konzertprogramm 2016:</strong>
        Trotz laufender Behandlung setzte er ein reduziertes, aber weiterhin
        internationales Konzertprogramm fort, statt sich vollständig aus der
        Öffentlichkeit zurückzuziehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Absage aller szenischen Auftritte im Dezember 2016:</strong>
        Behandlungsbedingte Gleichgewichtsstörungen zwangen ihn, alle vollständig
        inszenierten Opernauftritte abzusagen – eine erste, deutlich sichtbare
        Verschiebung von der großen Bühne zu kleineren, konzertanten Formaten.</p>
        <p class="vb-intro"><strong>b) Die unangekündigte Rückkehr im Mai 2017:</strong>
        Trotz dieser Einschränkung stand er am 7. Mai 2017 überraschend bei der
        50-Jahre-Gala der Met auf der Bühne und sang die Arie ›Cortigiani, vil
        razza dannata‹ aus Verdis ›Rigoletto‹ vor 4.000 Zuschauern.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Abschied von der aktiven Karriere:</strong>
        Es gab keinen formellen, angekündigten Rücktritt – die Auftritte endeten
        schlicht, als der Körper es nicht mehr zuließ, nicht durch eine bewusste,
        kommunizierte Entscheidung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod am 22. November 2017:</strong>
        Hvorostovsky starb im Alter von 55 Jahren in London, zweieinhalb Jahre nach
        der Diagnose.</p>
        <p class="vb-intro"><strong>b) Eine Karriere, die bis fast zum Schluss öffentlich sichtbar blieb:</strong>
        Zwischen Diagnose und Tod lagen weiterhin internationale Auftritte,
        Konzertmitschnitte und Medienpräsenz – die Erkrankung wurde nie zum alleinigen
        öffentlichen Thema seiner letzten Lebensjahre.</p>
        <p class="vb-intro"><strong>c) Würdigung durch die internationale Opernwelt:</strong>
        Sein Tod löste weltweite Nachrufe aus, die nicht nur seine stimmliche
        Leistung, sondern ausdrücklich auch die Art würdigten, wie er mit der
        Erkrankung öffentlich umgegangen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Kontrolle über das eigene Bild als Bewältigungsstrategie:</strong>
        Für die soziale Drei bedeutet Krankheit vor allem eine Bedrohung des
        öffentlichen Bildes – die konsequente Rückkehr auf die Bühne, so oft es
        irgend möglich war, lässt sich als Versuch lesen, dieses Bild aktiv zu
        steuern, statt es dem Krankheitsverlauf zu überlassen.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel als Motivation für das Publikum, nicht nur für sich selbst:</strong>
        Die Rückkehr zur Met wirkte nie wie reine Trotzreaktion, sondern wie eine
        bewusste Geste an ein Publikum, dem er noch etwas geben wollte – Wärme und
        Verbindung blieben auch im Angesicht der Krankheit die erklärte Priorität.</p>
        <p class="vb-intro"><strong>c) Die zuversichtliche Sprache als öffentlich gepflegtes Narrativ:</strong>
        Das wiederholt zitierte ›Sie werden nicht sterben‹ diente auch als
        Rahmenerzählung, die Publikum und Kollegen ein Bild von Kontrolle und
        Zuversicht vermittelte, unabhängig vom tatsächlichen medizinischen Verlauf.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Erkrankung, die nie zum alleinigen öffentlichen Bild wurde:</strong>
        Anders als bei manch anderer Persönlichkeit, deren letzte Lebensjahre
        vollständig von der Krankheit dominiert wurden, blieb bei Hvorostovsky die
        Bühnenpräsenz bis fast zuletzt das öffentlich vorherrschende Bild.</p>
        <p class="vb-intro"><strong>b) Auftritte als Konstante trotz fortschreitender Erkrankung:</strong>
        Vom September 2015 bis zum Mai 2017 blieben öffentliche Auftritte eine feste
        Größe – reduziert im Umfang, aber nie vollständig aufgegeben.</p>
        <p class="vb-intro"><strong>c) Ein letzter, bewusst gewählter großer Moment statt eines stillen Abschieds:</strong>
        Die Met-Gala im Mai 2017 lässt sich als letzte, selbst gewählte Gelegenheit
        lesen, sich noch einmal im vollen Bühnenlicht zu zeigen – kein zufälliger,
        sondern ein sorgfältig platzierter öffentlicher Moment.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet das Gehirn?</strong>
        Für eine soziale Drei mit Zweierflügel, deren gesamtes Selbstverständnis an
        Kontrolle über das eigene öffentliche Bild und an unmittelbare Verbindung
        mit dem Publikum geknüpft ist, liegt eine Deutung nahe: Ein Tumor, der
        ausgerechnet Gleichgewicht und motorische Kontrolle beeinträchtigt, trifft
        die Fähigkeit, sich souverän und makellos auf der Bühne zu bewegen – also
        exakt jenes Instrument, über das die Drei ihr Bild steuert. Diese Deutung
        ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Drei zwangsläufig zu
        Hirntumoren führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Glioblastome entstehen unabhängig von
        Persönlichkeitsmustern; die hier beschriebene Deutung betrifft
        ausschließlich den Umgang mit der Erkrankung, nicht ihre Ursache. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hvorostovsky kannte sein eigenes Enneagramm-Muster nicht – die soziale Drei
        mit Zweierflügel verwechselt die konsequente Aufrechterhaltung des eigenen
        Bildes leicht mit reiner Kunstliebe oder Pflichtgefühl gegenüber dem
        Publikum, ohne die eigene Erschöpfung dabei ausreichend anzuerkennen. Genau
        dieses Muster bestimmte ihn bis zuletzt unkorrigiert: Ein formeller Abschied
        von der Bühne, der die eigene Verletzlichkeit offen benannt hätte, fand nie
        statt – stattdessen endete die Karriere so, wie sie begonnen hatte, mit dem
        Bild des makellosen Auftritts.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Dmitri Hvorostovskys</strong> letzten zweieinhalb Lebensjahren lässt
        sich die soziale Drei mit Zweierflügel in einer ihrer eindrücklichsten Formen
        studieren: eine tödliche Diagnose, die nie zum alleinigen öffentlichen Bild
        wurde, eine Rückkehr auf die große Bühne noch drei Monate nach der Diagnose
        und ein letzter, selbst gewählter Auftritt im vollen Scheinwerferlicht. Der
        Gepard, der seinen letzten Sprint nicht dem Krankenbett, sondern noch einmal
        der Bühne widmete.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-dmitri-hvorostovsky", label:"Porträt: Dmitri Hvorostovsky (SO3w2) – Opernkarriere"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Krankheitsporträt: Ludwig XIV. (SO3w2) – gleicher Subtyp"},
        {route:"krankheitsportraets-christiaan-barnard", label:"Krankheitsporträt: Christiaan Barnard (SO3w2) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so3", label:"Subtyp-Profil SO3"},
      ])}
    </div>
  `);
}

export function dmitriSchostakowitschKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-schostakowitsch-portrait.jpg" alt="Dmitri Schostakowitsch" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Schostakowitsch</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1906–1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dmitri Schostakowitsch</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-dmitri-schostakowitsch">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, das verschlüsselte
        DSCH-Monogramm und das Leben zwischen öffentlicher Funktion und privater Wahrheit. Dieses
        Porträt widmet sich dem Kapitel, das dort nur am Rand vorkommt: einem über zwei Jahrzehnte
        fortschreitenden, nie sicher eingeordneten Nervenleiden der rechten Hand – und das bei
        einem ausgebildeten Pianisten –, mehreren Herzinfarkten, Knochenbrüchen beider Beine und
        dem Lungenkrebs eines lebenslangen Rauchers.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schostakowitsch</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 stellt Wissen und Können in den Dienst einer größeren Sache und findet
        Sicherheit in der eigenen Funktion innerhalb eines Systems; der Viererflügel verlagert die
        tiefste, persönlichste Wahrheit in eine verschlüsselte, aber unverwechselbare Form. Diese
        Typisierung stützt sich auf die frühen und mittleren Lebensjahre (Funktionsübernahme,
        Monogramm-Code, Rückzug in die Arbeit), nicht auf das Krankheitsbild der Spätzeit – siehe
        dazu den Abschnitt zum Stresspunkt unten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein schleichender Beginn Mitte der 1950er-Jahre:</strong>
        Nach den vorliegenden medizinhistorischen Darstellungen begannen die Beschwerden etwa 1954
        mit nachlassender körperlicher Belastbarkeit und gelegentlichen Stürzen – noch ohne
        erkennbares Krankheitsbild.</p>
        <p class="vb-intro"><strong>b) Die rechte Hand wird unzuverlässig:</strong>
        Bis 1958 war die rechte Hand deutlich geschwächt und von Missempfindungen
        (Kribbeln, sogenannte Parästhesien) begleitet. Schwere Gegenstände ließen sich nicht mehr
        heben, selbst alltägliche Handgriffe wie das Zähneputzen oder das Aufhängen des Mantels
        an einem Haken fielen schwer.</p>
        <p class="vb-intro"><strong>c) Wechselnde Diagnosen:</strong>
        1965 vermutete ein sowjetischer Neurologe eine chronische Poliomyelitis (Kinderlähmung
        beziehungsweise deren Spätfolgen). Andere Fachärzte erwogen eine Motoneuronerkrankung
        (fortschreitender Untergang der für die Bewegung zuständigen Nervenzellen, etwa die
        amyotrophe Lateralsklerose), eine rein motorische Neuropathie (Nervenschädigung), eine
        Syringomyelie (Höhlenbildung im Rückenmark) oder einen Bandscheibenschaden der
        Halswirbelsäule. Vor der Zeit von Computer- und Kernspintomographie ließ sich das kaum
        unterscheiden; bis heute gilt sein Nervenleiden als nicht zweifelsfrei geklärt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Mehrere Baustellen zugleich:</strong>
        Das Krankheitsbild war kein einzelnes Leiden, sondern ein Nebeneinander von Nervenerkrankung,
        Herzerkrankung, wiederholten Knochenbrüchen und am Ende einer Krebserkrankung der Lunge.</p>
        <p class="vb-intro"><strong>b) Herzinfarkte:</strong>
        1966 erlitt er einen Herzinfarkt, der einen etwa zweimonatigen Klinikaufenthalt nach sich
        zog; ein weiterer Infarkt folgte um 1970/71 (die Quellen nennen hier unterschiedliche
        Jahre), ein weiterer in den letzten Lebensmonaten, nach manchen Darstellungen ein dritter am Todestag selbst.</p>
        <p class="vb-intro"><strong>c) Stürze mit Knochenbrüchen:</strong>
        Infolge der Gangunsicherheit stürzte er mehrfach und brach sich dabei beide Beine.</p>
        <p class="vb-intro"><strong>d) Der Weg nach Kurgan:</strong>
        Im Februar 1970 flog er nach Kurgan in Westsibirien, wo der Orthopäde Gawriil Ilisarow –
        später weltweit bekannt durch den nach ihm benannten Ringfixateur, ein äußeres Gerüst zur
        Knochenheilung und -verlängerung – seine Hände und Füße behandelte. Schostakowitsch
        berichtete von täglicher Besserung. Bemerkenswert ist die Haltung dahinter: Der Körper wurde
        wie ein defektes Instrument zur technischen Reparatur gebracht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein Pianist verliert die Verlässlichkeit seiner rechten Hand:</strong>
        Schostakowitsch war ausgebildeter Konzertpianist und nahm 1927 am Internationalen
        Chopin-Wettbewerb in Warschau teil, wo er ein Ehrendiplom erhielt. Dass ausgerechnet die
        rechte Hand – im Klavierspiel meist die melodieführende – schwächer wurde, traf ihn an
        der Stelle, an der sich Können unmittelbar in Klang verwandelt.</p>
        <p class="vb-intro"><strong>b) Zigaretten und Wodka bis zuletzt:</strong>
        Er rauchte über Jahrzehnte stark, vor allem die in der Sowjetunion verbreiteten Papirossi
        (Zigaretten mit langem Pappmundstück), und trank regelmäßig Wodka. Trotz seiner
        chronischen Erkrankungen gab er beides Berichten zufolge nie dauerhaft auf.</p>
        <p class="vb-intro"><strong>c) Dauerhafte innere Anspannung:</strong>
        Zeitgenossen beschrieben ihn häufig als außergewöhnlich nervös und angespannt. Nach der
        Pravda-Kampagne vom Januar 1936 lebte er jahrelang in der Erwartung nächtlicher
        Verhaftung (siehe das Lebenswerk-Porträt) – eine jahrzehntelange Grundspannung, die den
        Körper nach heutigem Verständnis nicht unberührt lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Komponieren im Krankenhaus:</strong>
        Seine 14. Symphonie für Sopran, Bass, Streichorchester und Schlagzeug entstand im Frühjahr
        1969 während eines Klinikaufenthalts: ein Zyklus aus elf Vertonungen von Gedichten, die
        sämtlich vom Tod handeln.</p>
        <p class="vb-intro"><strong>b) Das Spätwerk als Bilanz:</strong>
        Das Streichquartett Nr. 15 (1974) besteht aus sechs ineinander übergehenden langsamen Sätzen
        (Adagios). Seine letzte Komposition, die Sonate für Bratsche und Klavier op. 147, vollendete
        er am 5. Juli 1975 – gut einen Monat vor seinem Tod. Am Sterbebett soll er noch die
        Korrekturfahnen gelesen haben.</p>
        <p class="vb-intro"><strong>c) Tod am 9. August 1975 in Moskau:</strong>
        Als Todesursache wird meist ein Lungenkrebs genannt, der auf das lebenslange Rauchen zurückgeführt
        wird; manche Darstellungen nennen zusätzlich einen dritten Herzinfarkt am Todestag. Der
        Zeitpunkt der Krebsdiagnose wird in den Quellen unterschiedlich angegeben – ein
        gesichertes, einheitliches Bild gibt es hier nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Körper als nachrangiger Diener der Leistung:</strong>
        Die soziale Fünf, das Totem, bezieht ihre Sicherheit aus der Funktion, die sie innerhalb
        eines Systems erfüllt. Der Körper wird dabei leicht zum bloßen Träger der Arbeit, der
        möglichst wenig Aufmerksamkeit beansprucht – so lange, bis er sie sich selbst verschafft.</p>
        <p class="vb-intro"><strong>b) Je schwächer der Körper, desto offener die Innenwelt:</strong>
        Im Spätwerk – 14. Symphonie, Streichquartett Nr. 15, Bratschensonate – tritt das Thema des
        Viererflügels, Vergänglichkeit und Tod, deutlicher und weniger verschlüsselt hervor als in
        den Jahrzehnten zuvor. Während die äußere Funktion bröckelte, wurde die private Wahrheit
        hörbarer.</p>
        <p class="vb-intro"><strong>c) Betäubung als Rhythmus des Alltags:</strong>
        Zigaretten und Wodka lassen sich als Versuch lesen, die dauerhafte innere Spannung zu
        dämpfen, ohne die Lebensführung selbst zu ändern – ein Ventil, das den Körper zusätzlich
        belastete.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Die Hand als Werkzeug der Weitergabe:</strong>
        Für eine soziale Fünf besteht Bedeutung darin, Können an eine Gemeinschaft weiterzugeben.
        Die Hand ist das unmittelbarste Werkzeug dieser Weitergabe – sie spielt, schreibt, notiert.
        Dass sich das Leiden ausgerechnet dort zuerst zeigte, ist eine auffällige, aber nicht
        kausal beweisbare Fügung.</p>
        <p class="vb-intro"><strong>b) Lunge und Rauch – Rückzug mit Qualm:</strong>
        Der Rückzug in die Höhle ist das Grundmuster des Oktopus. Das Rauchen hat dem
        Rückzug eine Art tragbare Höhle gegeben: ein selbst erzeugter Dunstschleier, der Abstand
        zur Umgebung schafft und zugleich beruhigt. Dass am Ende ein Lungenleiden stand, ist
        medizinisch durch das lebenslange Rauchen ausreichend erklärt; die Deutung als
        Muster ist eine zusätzliche, ergänzende Lesart.</p>
        <p class="vb-intro"><strong>c) Der Stresspunkt: Wenn die Fünf in Richtung Sieben rutscht:</strong>
        Wer über Jahrzehnte unter chronischem Druck lebt, bewegt sich entlang der Stresslinie
        zunehmend auf den Stresspunkt zu – bei der Fünf ist das die Sieben. Zeigen ließe sich das
        an den späteren Lebensjahren: Betäubung durch Nikotin und Alkohol, nervöse Unruhe,
        Flucht in Ablenkung statt konzentrierter Rückzug. Der Kerntyp bleibt dabei unverändert
        SO5w4; die Siebenerzüge sind Stresszeichen, kein Typwechsel. Wer das Krankheitsbild der
        Spätzeit allein betrachtete, könnte ihn leicht fälschlich bei der Sieben verorten.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet diese Organsysteme?</strong>
        Eine plausible, aber nicht belegte Deutung: Bei der sozialen Fünf mit Viererflügel
        lastet die ganze Spannung auf der Trennung von öffentlicher Funktion und verborgener
        Wahrheit. Ein Leben unter Dauerbeobachtung, 1936 beginnend, ist ein Dauerstressor; Rauchen
        und chronische Anspannung gelten allgemein als Risikofaktoren für Herz- und
        Gefäßerkrankungen. Die Hand als Werkzeug und die Lunge als Organ des Rückzugs treffen dann
        zwei Orte, an denen sich das Muster – Leistung durch Funktion, Beruhigung durch Rückzug –
        körperlich abbildet. Das ist eine Interpretation, kein historisch belegter
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu Nervenleiden, Herzinfarkt
        oder Lungenkrebs führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was Schostakowitschs Fall zeigt, ist ein wiederkehrendes Muster: Sicherheit
        durch Funktion, Beruhigung durch Rückzug und Betäubung – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Schostakowitsch kannte sein Enneagramm-Muster nicht. Seine Lebensstrategie – Rückzug in
        Funktion und Code, Beruhigung durch Rauch und Wodka – wirkte deshalb ungebremst. Die
        Warnsignale des Körpers, die schwache Hand seit 1958, der Herzinfarkt 1966, behandelte er wie
        technische Störungen, die sich beheben lassen (Kurgan), nicht als Aufforderung, das
        Muster selbst zu ändern. Wer nicht weiß, dass sein Rückzug zugleich Spannungsregulation
        ist, hält die Zigarette für eine Gewohnheit statt für ein Ventil. Das ist keine
        Schuld, sondern Unwissenheit über das eigene Muster.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Parallelen im selben Subtyp</h3>
        <p class="vb-intro"><strong>a) Hannah Arendt – derselbe Jahrgang, dasselbe Jahr des Todes:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-hannah-arendt">Hannah Arendt</a>
        (SO5w4) wurde wie Schostakowitsch 1906 geboren und starb 1975 – im Dezember, vier
        Monate nach ihm. Beide waren lebenslange Kettenraucher, beide erlitten Herzinfarkte, und bei
        beiden blieb das Rauchen trotz schwerer Herzerkrankung bestehen. Arendt stieg nach ihrem ersten
        Infarkt lediglich auf mildere Zigaretten um; Schostakowitsch gab Berichten zufolge Zigaretten
        und Wodka nie dauerhaft auf. Der Unterschied: Arendt starb nach einem kurzen Verlauf, er nach
        zwei Jahrzehnten schleichender Erkrankung.</p>
        <p class="vb-intro"><strong>b) Leonardo da Vinci – die Hand, auf die es ankam:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonardo-da-vinci">Leonardo</a>
        (SO5w4) verlor nach einem Schlaganfall die Verlässlichkeit der rechten Hand, stellte auf die
        linke um und arbeitete weiter. Auch Schostakowitsch arbeitete trotz der geschwächten
        rechten Hand bis in die letzten Wochen. Bei beiden wird die Hand nicht zum Ende der Arbeit,
        sondern zur Hürde, die sich umgehen lässt.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) Albert Einstein – Arbeit am Sterbebett:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Einstein</a>
        (SO5w4) arbeitete bis in die letzte Nacht an Gleichungen; Schostakowitsch korrigierte
        am Sterbebett die Druckfahnen seiner letzten Sonate. Das Muster des ungebremsten Weiterarbeitens
        trägt sich über alle drei Fälle hinweg.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">8. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Schostakowitschs</strong> Krankengeschichte lässt sich die soziale Fünf mit
        Viererflügel noch einmal klar ablesen: eine Hand, die dem Pianisten und Komponisten
        schwächer wurde, ein Körper, der wie ein defektes Instrument zur Reparatur nach Sibirien
        geflogen wurde, Rauch und Wodka als tragbare Höhle, und ein Spätwerk, das über den Tod
        spricht, solange die Kraft reicht. Der Oktopus, der sich in seine Höhle zurückzog und dort
        weiterkomponierte, solange ihm eine Hand gehorchte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-dmitri-schostakowitsch", label:"Porträt: Dmitri Schostakowitsch (SO5w4) – Lebenswerk"},
        {route:"krankheitsportraets-hannah-arendt", label:"Krankheitsporträt: Hannah Arendt (SO5w4) – gleicher Jahrgang, gleiches Sterbejahr, Rauchen"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Krankheitsporträt: Leonardo da Vinci (SO5w4) – rechte Hand, weitergearbeitet"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsporträt: Dr. Albert Einstein (SO5w4) – Arbeit bis zuletzt"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}
