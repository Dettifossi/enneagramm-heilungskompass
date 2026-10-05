import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function aiWeiweiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ai-weiwei-portrait.jpg" alt="Ai Weiwei" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ai Weiwei</p>
        <p class="krim-portrait-typ">SE2w3 · Selbsterhaltender Typ 2 mit Dreierflügel · geb. 1957</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Flusspferd</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Tierentsprechung: Flusspferd" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ai Weiwei</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-ai-weiwei">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein künstlerisches und
        aktivistisches Lebenswerk. Diese Seite vertieft ein Kapitel, das dort nur gestreift
        wird: Im August 2009 wurde Ai Weiwei von der chinesischen Polizei in Chengdu
        krankenhausreif geschlagen, erlitt dadurch eine Hirnblutung und musste sich wenige
        Wochen später in München einer Notoperation unterziehen – seither leidet er unter
        chronischen Kopfschmerzen.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Ai Weiwei</strong> ist dem <strong>selbsterhaltenden Typ 2 mit
        Dreierflügel</strong> zugeordnet. Die SE2 sorgt sich direkt und körperlich um
        andere, zuerst um die eigene Handlungsfähigkeit; der Dreierflügel bringt den Hunger
        nach Sichtbarkeit und größtmöglicher Reichweite hinzu. Genau diese Kombination –
        Fürsorge, die sich nicht zurückzieht, sondern öffentlich sichtbar wird – bestimmte
        auch, wie Ai Weiwei mit der erlittenen Polizeigewalt und ihren Folgen umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Angriff in Chengdu im August 2009:</strong>
        Ai Weiwei war nach Chengdu gereist, um als Zeuge im Prozess gegen den Aktivisten
        Tan Zuoren auszusagen, der wie er die Erdbebenopfer von Sichuan untersucht hatte.
        Polizisten drangen nachts in sein Hotelzimmer ein und schlugen ihn.</p>
        <p class="vb-intro"><strong>b) Zunächst unbemerkte innere Verletzung:</strong>
        Äußerlich zeigten sich zunächst keine dramatischen Spuren – die eigentliche
        Verletzung, eine innere Hirnblutung, blieb tagelang unentdeckt.</p>
        <p class="vb-intro"><strong>c) Diagnose erst Wochen später in Deutschland:</strong>
        Erst im September 2009, während der Vorbereitung einer Ausstellung in München,
        wurde bei starken Kopfschmerzen eine Hirnblutung festgestellt, die eine sofortige
        Notoperation erforderlich machte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Erfolgreiche Notoperation in München:</strong>
        Die Ärzte in München operierten Ai Weiwei umgehend und konnten die akute
        Lebensgefahr abwenden.</p>
        <p class="vb-intro"><strong>b) Chronische Kopfschmerzen als bleibende Folge:</strong>
        Seit dem Vorfall leidet Ai Weiwei nach eigenen Angaben wiederkehrend unter starken
        Kopfschmerzen – eine dauerhafte körperliche Erinnerung an die Gewalt, der er
        ausgesetzt war.</p>
        <p class="vb-intro"><strong>c) Keine Distanzierung von seiner Arbeit:</strong>
        Statt sich aus Sorge um die eigene Gesundheit aus der aktivistischen Arbeit
        zurückzuziehen, setzte Ai Weiwei seine öffentliche Kritik an der chinesischen
        Regierung nach der Genesung unvermindert fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die Verletzung wurde zum Kunstwerk:</strong>
        Ai Weiwei dokumentierte die eigene Verletzung öffentlich, unter anderem mit dem
        provokanten Selbstporträt-Titel "Fuck Off" und Röntgenbild-artigen Darstellungen
        seines eigenen Kopfes – die eigene Verwundbarkeit wurde nicht verborgen, sondern zum
        Beweisstück gegen die staatliche Gewalt gemacht.</p>
        <p class="vb-intro"><strong>b) Rechtliche Gegenwehr trotz Risiko:</strong>
        Ai Weiwei versuchte, die verantwortlichen Polizisten juristisch zur Rechenschaft zu
        ziehen – ein Vorgehen, das in China erhebliche persönliche Risiken barg und
        letztlich erfolglos blieb, ihn aber nicht von weiteren Klagen abhielt.</p>
        <p class="vb-intro"><strong>c) Zunehmende staatliche Überwachung und Repression:</strong>
        In den Jahren nach dem Vorfall verschärfte sich der Druck des chinesischen Staates
        weiter, bis hin zur 81-tägigen Inhaftierung 2011 – ein eskalierendes Muster, in dem
        die Hirnblutung von 2009 im Rückblick als früher Wendepunkt erscheint.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Internationale Aufmerksamkeit für den Fall:</strong>
        Die Münchner Notoperation und ihre Umstände wurden international ausführlich
        berichtet und machten den Fall Ai Weiwei einem breiten westlichen Publikum bekannt,
        das seine Kunst zuvor kaum kannte.</p>
        <p class="vb-intro"><strong>b) Ein Ereignis, das sein Werk mitprägte:</strong>
        Die eigene Verletzung wurde zu einem wiederkehrenden Motiv in Ai Weiweis späterem
        Werk – ein Beleg dafür, dass persönlich erlittene Gewalt bei ihm nie privat blieb,
        sondern konsequent in öffentliche künstlerische Aussage überführt wurde.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug trotz eskalierender Bedrohung:</strong>
        Weder die Kopfverletzung noch die spätere Inhaftierung 2011 brachten Ai Weiwei dazu,
        seine kritische öffentliche Haltung aufzugeben – erst der eingezogene Reisepass
        zwang ihn 2015 faktisch zum Exil.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Fürsorge, die aus der eigenen Verletzung Handlung macht:</strong>
        Dieselbe SE2-Überzeugung, dass Anteilnahme sich in konkreter, sichtbarer Handlung
        äußern muss, bestimmte auch, wie Ai Weiwei mit der eigenen Verletzung umging – nicht
        durch stilles Verarbeiten, sondern durch öffentliche Dokumentation und künstlerische
        Verarbeitung.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die maximale Reichweite des eigenen Leidens:</strong>
        Wo eine andere Person die eigene Verletzung privat gehalten hätte, suchte Ai Weiwei
        aktiv die größtmögliche Öffentlichkeit dafür – dieselbe Logik, mit der er auch seine
        Kunstwerke stets auf maximale mediale Reichweite hin anlegte.</p>
        <p class="vb-intro"><strong>c) Stolz, der sich der Gewalt nicht beugt:</strong>
        Die Leidenschaft der Zwei, gerichtet auf die eigene Unentbehrlichkeit und
        Wirkmächtigkeit, zeigte sich in der Weigerung, die erlittene Gewalt als Niederlage
        zu behandeln – sie wurde stattdessen zum Beweisstück der eigenen moralischen
        Position gegenüber dem Staat.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zum Beweismittel wurde:</strong>
        Für Ai Weiwei, dessen gesamtes Schaffen darauf beruht, verschwiegene Wahrheiten
        sichtbar zu machen, traf die Gewalt gegen seinen eigenen Körper genau jenen Nerv –
        die Hirnblutung wurde nicht verdrängt, sondern in dieselbe Logik der Sichtbarmachung
        überführt, die schon die 5.196 Namen der Erdbebenopfer geprägt hatte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida
        Kahlo</a> (ebenfalls SE2w3) verwandelte die Schmerzen ihres eigenen, durch einen
        Busunfall dauerhaft verletzten Körpers systematisch in ihr künstlerisches
        Hauptthema, statt das Leiden zu verbergen; Ai Weiwei reagierte auf die ihm
        zugefügte Gewalt mit derselben Grundhaltung – der eigene verletzte Körper wird nicht
        versteckt, sondern zum zentralen, öffentlich sichtbaren Werkstoff. Beide Fälle
        zeigen dasselbe SE2w3-Muster: Der eigene Schmerz wird nicht privatisiert, sondern
        mit dem Dreierflügel-Hunger nach Reichweite in ein möglichst großes Publikum
        getragen. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Krankheitsporträt zu Frida Kahlo</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Kopf?</strong>
        Für eine selbsterhaltende Zwei mit Dreierflügel, deren gesamte Wirkung auf
        Wahrnehmung, Kommunikation und der eigenen Stimme beruht, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, mit dem er dachte, sprach und die Welt beobachtete, wurde
        zum Ort der Gewalt – eine direkte Bedrohung seines wichtigsten Werkzeugs als
        Aktivist und Künstler. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Zwei zwangsläufig zu
        Polizeigewalt und Hirnblutung führt – <strong>jeder Mensch kann jede Krankheit oder
        Verletzung erleiden, unabhängig vom Subtyp.</strong> Was sich an Ai Weiweis Fall
        zeigen lässt, ist ein Muster im Umgang mit erlittener Gewalt, das bei einer
        ausgeprägten selbsterhaltenden Zwei mit Dreierflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Ai Weiwei kennt sein eigenes Muster nicht – die selbsterhaltende Zwei mit
        Dreierflügel verwandelt reflexhaft eigenes Leid in sichtbare, öffentliche Handlung,
        statt es je privat zu verarbeiten, und genau dieses Muster lebt er seit der
        Hirnblutung unverändert aus. Wer die eigene Notwendigkeit, Leid in Reichweite zu
        verwandeln, nicht als Muster erkennt, kann auch angesichts einer lebensbedrohlichen
        Verletzung nicht innehalten, um sich zu schonen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Zwei mit Dreierflügel erklärt bei <strong>Ai Weiwei</strong>
        vieles am Umgang mit der eigenen Verletzung: ein Mann, dessen gesamtes Schaffen
        darauf beruht, Verschwiegenes sichtbar zu machen, lässt sich selbst von einer
        Hirnblutung nicht zum Schweigen bringen – das Flusspferd, das seine Wunde nicht
        versteckt, sondern mitten im Revier zeigt, damit niemand sie übersehen kann.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-ai-weiwei", label:"Porträt: Ai Weiwei (SE2w3) – das Flusspferd"},
        {route:"krankheitsportraets-frida-kahlo", label:"Krankheitsporträt: Frida Kahlo (SE2w3) – dasselbe Muster sichtbaren Leidens"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se2", label:"Subtyp-Profil SE2"},
      ])}
    </div>
  `);
}

export function astridLindgrenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-astrid-lindgren-portrait.jpg" alt="Astrid Lindgren" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Astrid Lindgren</p>
        <p class="krim-portrait-typ">SE1w9 · Selbsterhaltender Typ 1 mit Neunerflügel · 1907–2002</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Adler</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Tierentsprechung: Adler" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Astrid Lindgren</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-astrid-lindgren">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine fortschreitende Makuladegeneration im
        hohen Alter, die sie zwang, ihre jahrzehntelange Arbeitsroutine des Schreibens
        vollständig aufzugeben.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Lindgren</strong> ist dem <strong>selbsterhaltenden Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SE1 richtet ihren Perfektionismus auf die eigene Arbeitsdisziplin;
        der Neunerflügel gibt ihr die Fähigkeit, sich anzupassen und selbst tiefgreifende
        Verluste ohne öffentliches Aufsehen zu verarbeiten. Genau diese Kombination – der
        Verlust des zentralen Arbeitswerkzeugs, verbunden mit der stillen Anpassung an neue
        Arbeitsweisen statt öffentlicher Klage – bestimmte den Umgang mit der eigenen
        Erblindung im Alter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Nachlassende Sehkraft im hohen Alter:</strong>
        Nach übereinstimmenden biografischen Quellen begann Lindgrens Sehkraft in ihren
        letzten Lebensjahrzehnten spürbar nachzulassen – ein schleichender Prozess, der ihre
        über Jahrzehnte etablierte Arbeitsroutine zunehmend erschwerte.</p>
        <p class="vb-intro"><strong>b) Diagnose einer altersbedingten Makuladegeneration:</strong>
        Bei Lindgren wurde eine fortschreitende Makuladegeneration diagnostiziert, eine
        Augenerkrankung, die das scharfe Sehen im Zentrum des Gesichtsfelds zunehmend
        beeinträchtigt.</p>
        <p class="vb-intro"><strong>c) Zunehmende Schwierigkeiten beim Schreiben und Lesen:</strong>
        Die Erkrankung machte es ihr im Lauf der Jahre immer schwerer, ihre gewohnte
        Arbeitsweise – handschriftliche Stenografie am Morgen, anschließendes Abtippen –
        fortzusetzen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nahezu vollständige Erblindung in den letzten Lebensjahren:</strong>
        In ihren letzten Lebensjahren war Lindgren nach übereinstimmenden Berichten praktisch
        blind – eine Einschränkung, die sie öffentlich kaum thematisierte.</p>
        <p class="vb-intro"><strong>b) Umstellung auf Diktate statt Schreiben:</strong>
        Um weiterhin schreiben zu können, stellte Lindgren ihre Arbeitsweise auf Diktate um –
        sie sprach Texte, die von ihrer langjährigen Sekretärin niedergeschrieben wurden,
        statt sie selbst zu Papier zu bringen.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Rückzug wegen der Erkrankung:</strong>
        Trotz der Sehbehinderung setzte Lindgren ihr öffentliches Engagement, insbesondere
        für den Tierschutz, bis in ihre letzten Lebensjahre fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Fortgesetztes Tierschutz-Engagement trotz Erblindung:</strong>
        Ihr entscheidendes öffentliches Engagement für die „Lex Lindgren" 1988 fand statt, als
        ihre Sehkraft bereits erheblich eingeschränkt war – ein Beweis dafür, dass die
        Erkrankung ihre Wirksamkeit nicht einschränkte.</p>
        <p class="vb-intro"><strong>b) Keine ausführliche öffentliche Thematisierung:</strong>
        Anders als bei manchen prominenten Persönlichkeiten mit vergleichbaren Erkrankungen
        machte Lindgren ihre Erblindung nie zu einem öffentlichen Anliegen oder einer
        Kampagne – sie blieb ein privater Umstand, der ihr Wirken praktisch, aber nicht
        öffentlich prägte.</p>
        <p class="vb-intro"><strong>c) Tod im Alter von 94 Jahren:</strong>
        Lindgren starb 2002 in Stockholm, nach Jahren, in denen sie trotz nahezu vollständiger
        Erblindung ihre öffentliche Wirksamkeit aufrechterhalten hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Nationale Trauer bei ihrem Tod:</strong>
        Ihr Begräbnis wurde live im schwedischen Fernsehen übertragen – ein Ausdruck der
        immensen nationalen Bedeutung, die weit über ihre gesundheitlichen Einschränkungen
        hinausreichte.</p>
        <p class="vb-intro"><strong>b) Kein öffentliches Bild einer kranken alten Frau:</strong>
        Das öffentliche Bild Lindgrens blieb bis zu ihrem Tod von Wirksamkeit und moralischer
        Autorität geprägt, nicht von der eigenen körperlichen Einschränkung.</p>
        <p class="vb-intro"><strong>c) Nachträgliche biografische Würdigung der Anpassungsleistung:</strong>
        Erst spätere Biografien würdigten ausführlicher, welche Anpassungsleistung es
        bedeutete, im hohen Alter eine völlig neue Arbeitsweise zu erlernen, ohne dabei an
        Wirksamkeit einzubüßen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Disziplin, die sich an neue Umstände anpasste:</strong>
        Die SE1-typische Arbeitsdisziplin zeigte sich auch im Umgang mit der Erblindung:
        Lindgren gab das Schreiben nicht auf, sondern fand eine neue, ebenso diszipliniert
        durchgehaltene Methode – das Diktat.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die stille Anpassung statt öffentlicher Klage:</strong>
        Dieselbe Zurückhaltung, mit der Lindgren zeitlebens ihr Privatleben vor der
        Öffentlichkeit schützte, zeigte sich im Umgang mit der Erblindung als bewusste
        Entscheidung, die eigene Einschränkung nicht zum öffentlichen Thema zu machen.</p>
        <p class="vb-intro"><strong>c) Wirksamkeit trotz Einschränkung als Fortsetzung des eigenen Musters:</strong>
        Dass sie ihr wichtigstes politisches Engagement – den Tierschutz – gerade in den
        Jahren fortsetzte, als ihre Sehkraft am stärksten eingeschränkt war, passt zur
        SE1w9-Überzeugung, dass die eigene Aufgabe wichtiger ist als die eigene Bequemlichkeit
        oder Sichtbarkeit der eigenen Grenzen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Autorin genauer Beobachtung, die die Fähigkeit zu sehen verlor:</strong>
        Lindgrens gesamtes Werk beruhte auf genauer Beobachtung – der kindlichen Welt, der
        gesellschaftlichen Ungerechtigkeit, der eigenen Manuskripte als Lektorin. Ausgerechnet
        das Sehvermögen, das diese Genauigkeit ermöglichte, versagte ihr im Alter.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer (SE1w9)</a>: Auch Adenauer blieb trotz erheblicher körperlicher
        Beeinträchtigung bis ins hohe Alter bemerkenswert wirksam, ohne die eigene
        gesundheitliche Belastung zum öffentlichen Thema zu machen. Bei beiden SE1w9ern zeigt
        sich dasselbe Muster: eine körperliche Einschränkung wird durch Disziplin und stille
        Anpassung kompensiert, statt sie öffentlich zu verhandeln.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Augen, das Werkzeug der genauen Beobachtung?</strong>
        Für eine selbsterhaltende Eins mit Neunerflügel, deren gesamtes Werk auf präziser
        Beobachtung und disziplinierter Genauigkeit beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das die Grundlage ihrer Arbeitsweise war, wurde zum Ort des
        körperlichen Verlusts. Diese Deutung ist eine plausible Interpretation, kein belegter
        klinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Eins zwangsläufig zu
        Makuladegeneration führt – <strong>jeder Mensch kann jede Erkrankung entwickeln,
        unabhängig vom Subtyp.</strong> Was sich an Lindgrens Fall zeigen lässt, ist ein
        Muster im Umgang mit einer altersbedingten körperlichen Einschränkung, das bei einer
        ausgeprägten selbsterhaltenden Eins mit Neunerflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Lindgren kannte ihr eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Eins mit Neunerflügel hält reflexhaft an der eigenen Disziplin und
        stillen Anpassung fest, statt körperliche Verluste offen zu benennen, und lebte genau
        dieses Muster bis zu ihrem Tod unverändert aus. Wer die eigene Neigung, körperliche
        Einschränkungen ohne öffentliche Aussprache zu kompensieren, nicht als Muster
        erkennt, riskiert, dass die eigene Belastung unsichtbar bleibt, auch wenn Unterstützung
        möglich wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Der selbsterhaltende Typ 1 mit Neunerflügel erklärt bei <strong>Astrid
        Lindgren</strong> vieles am Umgang mit der eigenen Erblindung: eine Frau, deren
        gesamtes Werk auf genauer Beobachtung beruhte, fand eine neue, ebenso diszipliniert
        durchgehaltene Form, weiterzuwirken, als ihr das Sehvermögen selbst versagte – der
        Adler, der auch ohne den vollen Blick weiterhin wusste, wohin er fliegen musste.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-astrid-lindgren", label:"Porträt: Astrid Lindgren (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Krankheitsporträt: Konrad Adenauer (SE1w9) – gleicher Subtyp"},
        {route:"krankheitsportraets-robert-de-niro", label:"Krankheitsporträt: Robert De Niro (SE1w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se1", label:"Subtyp-Profil SE1"},
      ])}
    </div>
  `);
}

export function charlesMansonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/charles-manson-portrait.jpg" alt="Charles Manson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Manson</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · 1934–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Manson</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-charles-manson">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um die Tate-LaBianca-Morde 1969 und seine
        Typstruktur als Sektenführer. Diese Seite vertieft ein Kapitel, das dort nur am Rande
        erwähnt wird: eine Darmkrebserkrankung, die in seinem letzten Haftjahr diagnostiziert
        wurde und an deren Folgen er 2017 im Alter von 83 Jahren im Gefängniskrankenhaus starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Manson</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet – dem Kontratyp der Sechs, der Angst nicht durch Anpassung, sondern durch
        offensive Stärke überspielt. Der Siebenerflügel verleiht Charisma und
        Begeisterungsfähigkeit, die im Krankheitsfall in dieselbe kompromisslose
        Kontrollhaltung mündete, die sein ganzes Leben prägte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Krankenhausaufenthalt im Januar 2017 wegen Magen-Darm-Blutungen:</strong>
        Anfang 2017 musste Manson aus dem Corcoran State Prison in ein Krankenhaus verlegt
        werden – ein erster deutlicher Hinweis auf eine ernsthafte Erkrankung.</p>
        <p class="vb-intro"><strong>b) Diagnose einer Darmkrebserkrankung:</strong>
        Im Zusammenhang mit diesem Krankenhausaufenthalt wurde bei Manson Darmkrebs
        diagnostiziert – nach Medienberichten lehnte er zeitweise eine Operation ab.</p>
        <p class="vb-intro"><strong>c) Kaum öffentliche Reaktion aus dem Gefängnis:</strong>
        Über den Verlauf seiner Erkrankung drang aus dem Gefängnis wenig nach außen – Manson
        blieb, wie zeitlebens, ein Mann, der Kontrolle über die eigene Darstellung behielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Schwäche zugelassen:</strong>
        Manson gab auch nach der Diagnose weiterhin Interviews und ließ sich fotografieren –
        ein Verhalten, das seiner gesamten Selbstinszenierung als unangreifbarer Anführer
        entsprach.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte Verweigerung von Reue oder Rückzug:</strong>
        Bis in seine letzten Lebensmonate zeigte Manson keinerlei öffentliche Reue für die
        Morde von 1969 – die Krankheit veränderte diese Grundhaltung nicht.</p>
        <p class="vb-intro"><strong>c) Erneute Krankenhauseinweisung im November 2017:</strong>
        Wenige Tage vor seinem Tod wurde Manson wegen einer akuten Verschlechterung seines
        Zustands erneut aus der Haftanstalt in ein Krankenhaus in Kern County verlegt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 19. November 2017:</strong>
        Charles Manson starb im Alter von 83 Jahren in einem Krankenhaus in Kern County,
        Kalifornien – die unmittelbare Todesursache wurde als Herzversagen angegeben, als
        zugrunde liegende Erkrankung galt der Darmkrebs.</p>
        <p class="vb-intro"><strong>b) 48 Jahre nach den Morden, 46 Jahre in Haft:</strong>
        Zwischen den Tate-LaBianca-Morden 1969 und seinem Tod lagen fast fünf Jahrzehnte, davon
        verbrachte Manson den überwiegenden Teil in verschiedenen kalifornischen
        Haftanstalten.</p>
        <p class="vb-intro"><strong>c) Kein Begnadigungsgesuch, keine späte Reue:</strong>
        Anders als manche verurteilte Straftäter, die im Angesicht des Todes um Vergebung
        baten, hielt Manson bis zuletzt an seiner Selbstdarstellung als unbeugsamer Außenseiter
        fest.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod, der kaum Anteilnahme auslöste:</strong>
        Im Gegensatz zu den meisten anderen Krankheitsporträts dieses Kompasses löste Mansons
        Tod in der Öffentlichkeit überwiegend Erleichterung und Genugtuung aus, keine Trauer –
        eine Reaktion, die seine Taten erklärt, ohne sie zu rechtfertigen.</p>
        <p class="vb-intro"><strong>b) Ein Nachruf voller Distanz:</strong>
        Medienberichte über seinen Tod konzentrierten sich fast ausschließlich auf die Morde
        von 1969 – die Krankheit selbst blieb eine Randnotiz eines Lebens, das ohnehin schon
        vollständig durch die Taten definiert war.</p>
        <p class="vb-intro"><strong>c) Ein Ende ohne Publikum, anders als sein Leben:</strong>
        Der Mann, der einst ganze Gruppen um sich scharte und den Gerichtssaal zur Bühne
        machte, starb weitgehend unbeachtet in einem Krankenhausbett – ein auffälliger
        Kontrast zu seiner lebenslangen Inszenierung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Keine Schwäche, auch im Sterben nicht:</strong>
        Dieselbe Kontrollhaltung, mit der Manson jahrzehntelang seine Anhänger und später sein
        öffentliches Bild steuerte, bestimmte auch, wie wenig über seinen Krankheitsverlauf
        nach außen drang.</p>
        <p class="vb-intro"><strong>b) Verweigerung als letzte Machtdemonstration:</strong>
        Die berichtete anfängliche Ablehnung einer Operation passt zum Muster des Kontratyps:
        selbst der eigene Körper sollte sich seiner Entscheidung unterordnen, nicht umgekehrt.</p>
        <p class="vb-intro"><strong>c) Kein Zusammenbruch der Fassade:</strong>
        Anders als bei manchen anderen Krankheitsverläufen dieses Kompasses gibt es keine
        Berichte über einen sichtbaren, öffentlichen Zusammenbruch von Mansons kontrolliertem
        Selbstbild – die Fassade hielt, soweit bekannt, bis zum Ende.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kontrolle, die bis zum Körper reichte:</strong>
        Mansons gesamtes Leben war von dem Versuch geprägt, Kontrolle über andere Menschen zu
        gewinnen, um die eigene tiefe Angst vor Ohnmacht zu überspielen – im Angesicht seiner
        tödlichen Krankheit richtete sich dieselbe Kontrollhaltung notgedrungen nach innen, auf
        einen Körper, der sich nicht mehr steuern ließ.</p>
        <p class="vb-intro"><strong>b) Keine Öffnung, keine Wandlung durch die Krankheit:</strong>
        Anders als bei vielen anderen Krankheitsporträts dieses Kompasses findet sich bei
        Manson kein Hinweis auf eine innere Wandlung, Reue oder Öffnung angesichts des nahenden
        Todes – das Muster des Kontratyps blieb bis zuletzt intakt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Darm?</strong>
        Für eine sexuelle Sechs, deren gesamtes Leben von der Frage bestimmt war, wem man
        vertrauen und wen man kontrollieren kann, liegt eine Deutung nahe: Ausgerechnet jenes
        Organsystem, das im Körper für Verdauung im Sinne von Verarbeitung und Loslassen
        steht, wurde zum Schauplatz einer Krankheit, die sich – anders als Manson selbst –
        keiner Kontrolle unterordnen ließ. Diese Deutung ist eine plausible Interpretation,
        kein belegter historischer Kausalzusammenhang, und wird im Psychosomatik-Register
        dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu
        Darmerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Mansons Fall zeigen lässt, ist ein Muster im Umgang
        mit der eigenen Sterblichkeit, das bei einer destruktiv ausgeprägten sexuellen Sechs
        mit Siebenerflügel auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Manson kannte sein eigenes Muster nicht – die sexuelle Sechs als Kontratyp überspielt
        Angst reflexhaft durch Kontrolle und Angriff, statt sie je bei sich selbst zu erkennen,
        und genau dieses Muster lebte er bis zur letzten Lebenswoche unverändert aus, ohne je
        eine andere Möglichkeit des Umgangs mit der eigenen Verletzlichkeit zu entwickeln. Wer
        das eigene Bedürfnis nach Kontrolle nicht als Muster erkennt, kann es auch im Angesicht
        des eigenen Todes nicht loslassen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Mansons</strong> sexuelle Sechs mit
        Siebenerflügel noch einmal ablesen: keine Öffnung, keine Reue, keine sichtbare
        Verwundbarkeit – nur eine Kontrollhaltung, die sich bis zum letzten Atemzug gegen den
        eigenen, unaufhaltsam versagenden Körper richtete. Der Wolf, der sein Rudel durch Angst
        zusammenhielt – und der am Ende allein und weitgehend unbeachtet starb.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. Charles
        Manson wurde 1971 wegen Mordes und Verschwörung verurteilt und starb 2017 in Haft. Das
        Enneagramm erklärt, es rechtfertigt nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-charles-manson", label:"Kriminalpsychologie: Charles Manson (SX6w7) – Tate-LaBianca-Morde"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function dollyPartonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dolly-parton-portrait.jpg" alt="Dolly Parton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dolly Parton</p>
        <p class="krim-portrait-typ">SX3w4 · Sexueller Typ 3 mit Viererflügel · 1946–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Pfau</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Tierentsprechung: Pfau" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dolly Parton</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-dolly-parton">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        bereits in den frühen 1980er-Jahren diagnostizierte Endometriose mit anschließender
        Teilhysterektomie, jahrzehntelang wiederkehrende gesundheitliche Krisen bis hin zu
        Nierensteinen, und ein letzter, rasch verlaufender Kampf gegen Krebs, an dem sie am
        25. August 2026 im Alter von 80 Jahren starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Parton</strong> ist dem <strong>sexuellen Typ 3 mit Viererflügel</strong>
        zugeordnet. Die SX3 macht persönliche Anziehungskraft und unmittelbare Präsenz zur
        Lebensaufgabe; der Viererflügel bringt eine emotionale Tiefe hinzu, die die reine
        Bühnenfigur mit einer sehr persönlichen, oft schmerzhaften Innenwelt rückbindet. Genau
        dieses Muster – nach außen unaufhörlich strahlen, während im Inneren über Jahrzehnte
        eine ernste körperliche Belastung verschwiegen wird – bestimmte auch ihren Umgang mit
        der eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Abdominale Schmerzen und Blutungen ab den frühen 1980er-Jahren:</strong>
        Parton litt zunehmend unter starken Unterleibsschmerzen und Blutungen, die sie
        wiederholt ins Krankenhaus brachten – Beschwerden, die sie lange Zeit hinter ihrem
        öffentlichen Terminkalender zu verbergen versuchte.</p>
        <p class="vb-intro"><strong>b) Eine abgesagte Tour 1982 als erstes sichtbares Zeichen:</strong>
        Erst als sich ihr Zustand so weit verschlechterte, dass ein Weitermachen unmöglich
        wurde, sagte sie eine geplante Tournee ab – ein seltener, öffentlich sichtbarer Bruch in
        einer ansonsten makellos durchgehaltenen Arbeitsdisziplin.</p>
        <p class="vb-intro"><strong>c) Diagnose Endometriose:</strong>
        Die Ursache der Beschwerden wurde schließlich als Endometriose identifiziert – eine
        chronische, oft sehr schmerzhafte Erkrankung, bei der sich gebärmutterschleimhautähnliches
        Gewebe außerhalb der Gebärmutter ansiedelt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Teilhysterektomie 1985 im Alter von 36 Jahren:</strong>
        Um die gynäkologischen Probleme zu behandeln, unterzog sich Parton mit 36 Jahren einer
        Teilhysterektomie – ein eingreifender Schritt, den sie zu diesem Zeitpunkt noch weitgehend
        aus der Öffentlichkeit heraushielt.</p>
        <p class="vb-intro"><strong>b) Ungewollte Kinderlosigkeit als Folge:</strong>
        Sie und ihr Mann Carl Dean hatten sich früh in der Ehe Kinder gewünscht und trafen keine
        Verhütungsmaßnahmen, hatten sogar schon Namen ausgesucht – doch es kam nie zu einer
        ausgetragenen Schwangerschaft. Die Hysterektomie beendete diese Möglichkeit endgültig.
        Parton äußerte sich später wiederholt bewegt zu diesem Thema, ordnete es aber meist rasch
        in eine positive Erzählung ein – etwa als Grund, warum sie sich seither wie eine „Patin
        aller Kinder" ihrer erweiterten Familie und der Öffentlichkeit fühle.</p>
        <p class="vb-intro"><strong>c) Eine schwere depressive Phase danach:</strong>
        Parton sprach Jahre später offen darüber, dass die Operation eine „wirklich schlimme
        Zeit" für sie war und sie in eine Depression stürzte – eine seltene Einlassung hinter die
        sonst so makellos gepflegte Fassade.</p>
        <p class="vb-intro"><strong>d) Weiterarbeit trotz gesundheitlicher Einschränkungen:</strong>
        Schon kurz nach der schwersten Krise kehrte sie ins Rampenlicht zurück – Musik, Film,
        Fernsehen liefen nahezu ohne sichtbare Unterbrechung weiter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Wiederkehrende Nierensteine und weitere Krankenhausaufenthalte:</strong>
        Über die folgenden Jahrzehnte kam es wiederholt zu gesundheitlichen Krisen, darunter
        schmerzhafte Nierensteine, die Parton offen thematisierte, sobald sie einmal öffentlich
        geworden waren.</p>
        <p class="vb-intro"><strong>b) Verschobene, dann endgültig abgesagte Las-Vegas-Residency:</strong>
        Eine für 2025 geplante Konzertreihe in Las Vegas wurde zunächst wegen „gesundheitlicher
        Herausforderungen" auf September 2026 verschoben und schließlich im Mai 2026 ganz
        abgesagt.</p>
        <p class="vb-intro"><strong>c) Dehydrierung und Schwindel als letzte öffentliche Erklärung:</strong>
        Per Videoschalte aus Nashville erklärte Parton, ihr Arzt habe ihr wegen Dehydrierung und
        Schwindel von Reisen abgeraten – deshalb verpasste sie im August 2026 sogar die
        Eröffnung der neuen Achterbahn „NightFlight Expedition" in ihrem eigenen Freizeitpark
        Dollywood.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Jahrzehntelanges Strahlen über einer verborgenen Krankengeschichte:</strong>
        Zwischen der Diagnose Anfang der 1980er-Jahre und den letzten Lebensmonaten liegen über
        vierzig Jahre, in denen Partons öffentliches Bild fast ausschließlich von Glanz, Humor
        und Energie geprägt blieb – die gesundheitliche Vorgeschichte blieb weitgehend im
        Hintergrund.</p>
        <p class="vb-intro"><strong>b) Ein später Tod ihres Mannes als Wendepunkt:</strong>
        Nach dem Tod ihres Mannes Carl Dean im März 2025 räumte Parton öffentlich ein, während
        der Pflegezeit die eigene Gesundheit vernachlässigt zu haben – einer der wenigen Momente,
        in denen sie die eigene Verletzlichkeit direkt benannte, statt sie zu überspielen.</p>
        <p class="vb-intro"><strong>c) Krebsdiagnose und rascher Verlauf:</strong>
        Nach Angaben ihres Umfelds erlag Parton am 25. August 2026 einer kurz zuvor
        diagnostizierten Krebserkrankung – ein Verlauf, der öffentlich kaum Zeit ließ, sich auf
        das Ausmaß der Erkrankung einzustellen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Präsenz aufrechterhalten, koste es, was es wolle:</strong>
        Die SX3-typische Überzeugung, dass Präsenz und Wirkung nach außen aufrechterhalten
        werden müssen, zeigte sich bis in die letzten Lebensmonate: Selbst gesundheitliche
        Absagen wurden mit Humor, Herzlichkeit und einer gepflegten Bühnenfigur verkündet, nie
        mit sichtbarer Verzweiflung.</p>
        <p class="vb-intro"><strong>b) Der Viererflügel und die seltenen Momente echter Offenheit:</strong>
        Dieselbe emotionale Tiefe, die ihr Songwriting seit Jahrzehnten prägte, zeigte sich auch
        im Umgang mit der eigenen Krankheit: selten, aber wenn, dann mit ungewöhnlicher
        Direktheit – etwa beim Eingeständnis der Depression nach der Hysterektomie oder der
        vernachlässigten eigenen Gesundheit während der Pflege ihres Mannes.</p>
        <p class="vb-intro"><strong>c) Kontrolle über das eigene Bild bis zuletzt:</strong>
        Auch die letzten öffentlichen Gesundheitsupdates erfolgten in ihren eigenen Worten, in
        ihrem eigenen Ton – keine unautorisierten Enthüllungen, sondern eine bis zuletzt selbst
        gesteuerte Kommunikation, ganz im Sinne einer SX3, die die eigene Wirkung nie aus der
        Hand gibt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die exakt am Ort der bühnentauglichen Weiblichkeit ansetzte:</strong>
        Partons gesamte öffentliche Figur baute auf einer betont weiblichen, körperbetonten
        Inszenierung auf. Ausgerechnet eine gynäkologische Erkrankung, die diesen körperlichen
        Kern unmittelbar betraf, wurde zur jahrzehntelangen, meist verschwiegenen Begleiterin
        ihrer Karriere.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Marilyn Monroe:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-marilyn-monroe">Marilyn Monroe (ebenfalls SX3w4)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren jahrelang hinter dem
        makellosen Image verborgene Krankheit exakt dieselbe Diagnose trägt: Endometriose. Zwei
        sexuelle Dreier mit Viererflügel, zwei durch Ausstrahlung und Weiblichkeit geprägte
        öffentliche Figuren, zwei Frauen, die dieselbe schmerzhafte gynäkologische Erkrankung
        über Jahre lang hinter einer makellos gepflegten Bühnenpräsenz verbargen. Auch die Folge
        ist bei beiden dieselbe: ungewollte Kinderlosigkeit – bei Monroe durch mindestens drei
        dokumentierte Fehlgeburten, bei Parton durch die 1985 vorgenommene Teilhysterektomie. Der
        Unterschied liegt im Ausgang: Während Monroes Geschichte 1962 abrupt und jung endete,
        lebte und arbeitete Parton noch weitere vier Jahrzehnte mit den Folgen ihrer Diagnose
        weiter, bevor eine andere Erkrankung am Ende ihres Lebens stand.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet der Unterleib, bei einer Frau, deren gesamtes Image auf Weiblichkeit baut?</strong>
        Für eine sexuelle Drei mit Viererflügel, deren beruflicher Kern die bewusst
        inszenierte, betont weibliche Präsenz ist, liegt eine Deutung nahe: Ausgerechnet jener
        Körperbereich, der ihre öffentliche Identität am unmittelbarsten trägt, wurde zum
        Schauplatz einer jahrzehntelangen, meist verschwiegenen Belastung. Diese Deutung ist eine
        plausible Interpretation, kein belegter medizinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Drei zwangsläufig zu gynäkologischen
        Erkrankungen oder Krebs führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Partons Fall zeigen lässt, ist ein Muster im
        Umgang mit einer über Jahrzehnte verschwiegenen körperlichen Belastung, das bei einer
        ausgeprägten sexuellen Drei mit Viererflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass
        nach und nach im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Parton ihr eigenes Enneagramm-Muster je bewusst kannte –
        wie die meisten Menschen kannte sie das System vermutlich gar nicht. Die
        Leidenschaft der Drei, die Täuschung durch permanente Selbstinszenierung, bestimmte über
        Jahrzehnte unwidersprochen ihr Handeln: Schmerzen, Operationen und spätere Erschöpfung wurden hinter
        Humor und einer makellos gepflegten Bühnenfigur verborgen, statt als wiederkehrendes
        Muster erkannt und rechtzeitig ernst genommen zu werden. Erst der Tod ihres Mannes 2025
        brachte sie dazu, öffentlich einzuräumen, die eigene Gesundheit über Jahre
        vernachlässigt zu haben – zu einem Zeitpunkt, an dem der eigene Körper bereits erschöpft
        war.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Partons</strong> sexuelle Drei mit
        Viererflügel noch einmal ablesen: eine Karriere, die über vierzig Jahre hinweg
        körperliche Krisen, Operationen und Erschöpfung hinter einer makellos strahlenden
        Bühnenfigur verbarg, und ein Lebensende, das erst kurz vor dem Tod öffentlich sichtbar
        wurde. Der Pfau, der sein Federkleid bis fast zuletzt entfaltete – und dessen stillste,
        verletzlichste Momente erst dann sichtbar wurden, als das Rad sich nicht mehr schlagen
        ließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-dolly-parton", label:"Porträt: Dolly Parton (SX3w4) – Lebenswerk"},
        {route:"krankheitsportraets-marilyn-monroe", label:"Krankheitsporträt: Marilyn Monroe (SX3w4)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx3", label:"Subtyp-Profil SX3"},
      ])}
    </div>
  `);
}

export function francisBaconKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-francis-bacon-portrait.jpg" alt="Francis Bacon" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francis Bacon</p>
        <p class="krim-portrait-typ">SE7w8 · Selbsterhaltender Typ 7 mit Achterflügel · 1561–1626</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Francis Bacon</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-francis-bacon">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein philosophisches Lebenswerk, seinen
        politischen Aufstieg und Fall. Hier geht es ausschließlich um ein Kapitel, das dort nur
        gestreift wird: eine über Jahrzehnte chronische Gesundheit voller Gicht, Nierensteinen
        und Verdauungsbeschwerden – und einen Tod, der sich wie die letzte, tödliche Konsequenz
        seines eigenen Forscherdrangs liest.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bacon</strong> ist der <strong>selbsterhaltenden Sieben mit Achterflügel</strong>
        zugeordnet. Naranjo nannte diesen Subtyp die "versteckte Acht": eine Sieben, die ihre
        Neugier und Genussfähigkeit mit der Durchsetzungskraft und Direktheit der Acht
        verbindet, ohne diese offen zur Schau zu stellen. Genau diese Kombination aus
        unstillbarem Forscherdrang und der Weigerung, vor körperlichen Grenzen
        zurückzuschrecken, prägte auch seinen Umgang mit der eigenen Gesundheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine fragile Konstitution von Jugend an:</strong>
        Zeitgenössische Berichte beschreiben Bacon bereits als jungen Mann als kränklich und
        anfällig – eine körperliche Zerbrechlichkeit, die in auffälligem Kontrast zu seinem
        unermüdlichen intellektuellen und politischen Tatendrang stand.</p>
        <p class="vb-intro"><strong>b) Wiederkehrende Gichtanfälle seit dem mittleren Lebensalter:</strong>
        Ab seinen Vierzigern litt Bacon zunehmend an schmerzhaften Gichtschüben, die ihn
        zeitweise ans Bett fesselten – eine Erkrankung, die damals eng mit übermäßigem Genuss
        von Fleisch und Wein in Verbindung gebracht wurde, dem Lebensstil eines Mannes, der am
        Hof und in der Politik nie zurückhaltend auftrat.</p>
        <p class="vb-intro"><strong>c) Nierensteine als ständiger Begleiter:</strong>
        Parallel zur Gicht dokumentieren Bacons eigene Aufzeichnungen wiederkehrende, quälende
        Nierenstein-Koliken, die ihn über Jahre begleiteten und seine juristische wie
        wissenschaftliche Arbeit immer wieder unterbrachen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Krankheit als Randnotiz im überfüllten Terminkalender:</strong>
        Trotz der wiederkehrenden Beschwerden finden sich in Bacons Briefen kaum Klagen über
        die eigene Gesundheit – Krankheit wurde knapp erwähnt und dann zur nächsten Aufgabe
        übergegangen, nie zum zentralen Thema gemacht.</p>
        <p class="vb-intro"><strong>b) Ein Mann, der seine eigene Medizin praktizierte:</strong>
        Bacon experimentierte selbst mit Ernährung, Heilkräutern und Lebensweisen, um seine
        Beschwerden zu lindern – seine "Sylva Sylvarum", eine posthum veröffentlichte Sammlung
        naturkundlicher Beobachtungen, enthält zahlreiche Notizen zu Gesundheit, Langlebigkeit
        und Körperpflege, die vermutlich auch aus eigener Betroffenheit entstanden.</p>
        <p class="vb-intro"><strong>c) Finanzielle Sorgen als zusätzliche Last:</strong>
        Zeit seines Lebens verschuldet trotz hoher Ämter und beträchtlicher Einkünfte, lebte
        Bacon in einem chronischen Spannungsfeld zwischen Repräsentationszwang und
        finanzieller Unsicherheit – ein Dauerstress, der seine körperliche Verfassung
        vermutlich zusätzlich belastete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Sturz von 1621 als zusätzliche Belastung:</strong>
        Die Anklage wegen Bestechlichkeit, die Amtsenthebung und die kurze Haft im Tower
        trafen einen bereits gesundheitlich angeschlagenen Mann in seinen Sechzigern –
        Zeitgenossen berichteten von einem sichtbaren körperlichen Verfall in den Monaten nach
        dem politischen Fall.</p>
        <p class="vb-intro"><strong>b) Rückzug aufs Land, nicht Rückzug von der Arbeit:</strong>
        Nach dem Verlust seiner Ämter zog sich Bacon auf sein Landgut Gorhambury zurück – doch
        statt sich zu schonen, arbeitete er in den folgenden fünf Jahren so intensiv wie kaum
        zuvor an seinen wissenschaftlichen Werken, oft bis in die frühen Morgenstunden.</p>
        <p class="vb-intro"><strong>c) Die letzte Kutschfahrt im Winter 1626:</strong>
        Auf dem Weg nach Highgate bei London kam Bacon im eisigen Winterwetter die Idee, ob
        Kälte den Verwesungsprozess verzögern könnte – ein Gedanke, dem er sofort, ohne
        Rücksicht auf die Witterung, experimentell nachging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Das Hühnchen-Experiment:</strong>
        Bacon hielt die Kutsche an, kaufte ein Hühnchen von einer Bäuerin und stopfte es
        eigenhändig mit Schnee aus, um zu testen, ob Kälte Fäulnis verhindern könne – ein
        früher, ernsthafter Versuch zur Lebensmittelkonservierung, Jahrhunderte vor der
        modernen Kühltechnik.</p>
        <p class="vb-intro"><strong>b) Zu krank für die Heimreise:</strong>
        Bei dem Experiment zog sich Bacon eine schwere Erkältung zu, die sich rasch
        verschlimmerte. Er war zu geschwächt, um zu seinem eigenen Haus zurückzukehren, und
        wurde stattdessen ins nahegelegene Haus von Lord Arundel gebracht.</p>
        <p class="vb-intro"><strong>c) Tod innerhalb weniger Tage:</strong>
        Am 9. April 1626 starb Francis Bacon in Arundels Haus an einer Bronchitis oder
        Lungenentzündung, die aus der Erkältung entstanden war – nur wenige Tage nach dem
        Experiment, das seinen Tod auslöste.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Achterflügel, der auch die eigene Schwäche ignorierte:</strong>
        Dieselbe Durchsetzungskraft, die Bacon durch politische Ämter und wissenschaftliche
        Großprojekte trug, ließ ihn auch über die eigenen körperlichen Warnsignale
        hinweggehen – Gicht, Nierensteine und ein bereits geschwächter Zustand hielten ihn
        nicht davon ab, sich im Winter einem spontanen Experiment auszusetzen.</p>
        <p class="vb-intro"><strong>b) Neugier ohne eingebaute Notbremse:</strong>
        Die selbsterhaltende Sieben sucht Sicherheit normalerweise durch Vorsicht und
        praktische Vorsorge – bei Bacon wich diese Vorsicht in seinem letzten Lebensjahrzehnt
        zunehmend der reinen Entdeckerlust, die keine Rücksicht mehr auf die eigene
        Verfassung nahm.</p>
        <p class="vb-intro"><strong>c) Arbeit als einziges verbliebenes Terrain:</strong>
        Nach dem Verlust seiner politischen Macht verlagerte sich die ganze Energie der SE7w8
        auf das letzte Feld, das ihm blieb – die eigene Forschung –, mit einer Intensität, die
        keine Grenze mehr zu kennen schien.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben in chronischem Schmerz, kaum thematisiert:</strong>
        Jahrzehntelange Gicht und Nierensteine begleiteten Bacon durch seine gesamte
        politische und wissenschaftliche Karriere, ohne dass er ihnen in seinen Schriften
        nennenswerten Raum gab – Krankheit war für ihn ein Hindernis, das man umging, nicht
        ein Thema, das man auslebte.</p>
        <p class="vb-intro"><strong>b) Ein Tod, der zum Sinnbild des ganzen Lebens wurde:</strong>
        Kaum ein anderes Krankheitsporträt dieses Kompasses zeigt eine derart wörtliche
        Übereinstimmung zwischen Lebensmuster und Todesursache: Bacon starb nicht trotz,
        sondern wegen seines unstillbaren Forscherdrangs – die gleiche Eigenschaft, die sein
        gesamtes Werk trug, wurde ihm im entscheidenden Moment zum Verhängnis.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Erkältung?</strong>
        Für eine selbsterhaltende Sieben mit Achterflügel, deren Sicherheit traditionell aus
        praktischer Vorsorge und körperlicher Robustheit gespeist wird, liegt eine Deutung
        nahe: Ausgerechnet eine banale, vermeidbare Erkältung – kein dramatisches Leiden,
        sondern eine Nachlässigkeit im Angesicht der eigenen Neugier – wurde zur tödlichen
        Konsequenz einer Lebenshaltung, die praktische Vorsicht der Entdeckerfreude
        systematisch unterordnete. Diese Deutung wird im Psychosomatik-Register dieses
        Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        derartigen Unfällen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Bacons Fall zeigen lässt, ist ein Muster,
        das bei ungebremster Neugier in der Praxis immer wieder auffällt – eine von vielen
        möglichen Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bacon kannte sein eigenes Muster nicht – die selbsterhaltende Sieben mit Achterflügel verfolgt jede neue Idee bis zur letzten Konsequenz, ohne die eigene körperliche Verletzlichkeit mitzudenken, und genau das führte dazu, dass ausgerechnet ein spontanes Experiment in Winterkälte ihm den Tod brachte. Wer den eigenen Wissensdrang nicht als Muster erkennt, unterschätzt, wie leicht Neugier zur eigenen Gefährdung werden kann.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Bacons</strong> letzten Lebensjahren lässt sich die selbsterhaltende Sieben
        mit Achterflügel in ihrer konsequentesten Form ablesen: eine über Jahrzehnte
        chronische, kaum beklagte körperliche Bürde, die der unstillbaren Entdeckerfreude nie
        wirklich Einhalt gebot – bis ein einziges spontanes Experiment im eisigen Winter zum
        letzten wurde. Der Gorilla, der bis zum letzten Atemzug nach der nächsten Entdeckung
        griff – und im Sterben noch ein Experiment machte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-francis-bacon", label:"Porträt: Francis Bacon (SE7w8) – Lebenswerk"},
        {route:"krankheitsportraets-christoph-kolumbus", label:"Krankheitsporträt: Christoph Kolumbus (SE7w8)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

export function fredericChopinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frederic-chopin-portrait.jpg" alt="Frédéric Chopin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frédéric Chopin</p>
        <p class="krim-portrait-typ">SX5w4 · Sexueller Typ 5 mit Viererflügel · 1810–1849</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Igel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Tierentsprechung: Igel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frédéric Chopin</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-frederic-chopin">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein kompositorisches Lebenswerk und seine
        Typstruktur. Diese Seite vertieft ein Thema, das dort kurz angeschnitten wird: eine
        Tuberkulose-Erkrankung, die ihn vermutlich schon als jungen Mann begleitete, sich nach
        dem Zerbrechen seiner Beziehung zu George Sand 1847 dramatisch beschleunigte und ihn mit
        neununddreißig Jahren das Leben kostete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Chopin</strong> ist der <strong>sexuellen Fünf mit Viererflügel</strong>
        zugeordnet – demselben Subtyp wie <a href="javascript:void(0)" data-route="beruehmte-friedrich-nietzsche">Friedrich Nietzsche</a>.
        Naranjo nannte diesen Subtyp <em>Vertrauen</em>: Die SX5 sucht nicht Distanz, sondern die
        eine Verbindung, die alles trägt. Der Viererflügel macht aus Verschlossenheit Kunst – ein
        Muster, das sich bis in Chopins körperlichen Verfall nachverfolgen lässt, der genau dann
        einsetzte, als diese eine Verbindung zerbrach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine zarte Konstitution seit der Kindheit:</strong>
        Schon als Kind galt Chopin als kränklich und schmächtig – wiederkehrende Erkältungen und
        Atembeschwerden begleiteten ihn durch die Jugend in Warschau, lange bevor sich eine
        eigentliche Diagnose stellen ließ.</p>
        <p class="vb-intro"><strong>b) Erste ernsthafte Warnzeichen in den zwanziger Lebensjahren:</strong>
        Bereits kurz nach seiner Übersiedlung nach Paris 1831 berichteten Freunde und Ärzte von
        Hustenanfällen, Erschöpfungszuständen und gelegentlichem Blutauswurf – Symptome, die
        rückblickend als frühe Tuberkulose gedeutet werden.</p>
        <p class="vb-intro"><strong>c) Die Katastrophe von Mallorca:</strong>
        Im Winter 1838/39 reiste Chopin mit George Sand nach Mallorca, in der Hoffnung, das
        milde Klima werde seiner Gesundheit guttun. Stattdessen verschlechterte sich sein
        Zustand dramatisch: Örtliche Ärzte diagnostizierten eine ansteckende Lungenkrankheit,
        der Vermieter kündigte ihnen daraufhin die Unterkunft, und die Familie musste in ein
        feuchtes, kaltes Kartäuserkloster in Valldemossa umziehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Komposition trotz akuter Krankheitsschübe:</strong>
        Gerade in den Wochen der schwersten körperlichen Krise auf Mallorca komponierte Chopin
        einen Großteil seiner <em>Préludes op. 28</em> – eines seiner dichtesten, introspektivsten
        Werke, entstanden buchstäblich am Krankenbett.</p>
        <p class="vb-intro"><strong>b) Ein Jahrzehnt zwischen Schüben und Erholung:</strong>
        Während der gesamten 1840er-Jahre wechselten sich bei Chopin Phasen relativer Stabilität
        mit akuten Krankheitsschüben ab – begleitet von Gewichtsverlust, chronischer Müdigkeit
        und zunehmender Atemnot bei körperlicher Anstrengung.</p>
        <p class="vb-intro"><strong>c) Öffentliche Auftritte trotz sichtbarer Schwäche:</strong>
        Freunde und Zeitgenossen beschrieben Chopin bei seinen seltenen Konzerten zunehmend als
        blass, hager und kurzatmig – ein Kontrast, der umso deutlicher wurde, je makelloser seine
        Musik trotz alledem blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der Einbruch nach der Trennung 1847:</strong>
        Nach dem bitteren Ende seiner neunjährigen Beziehung zu George Sand im Jahr 1847 verfiel
        Chopins Gesundheit rapide. Er komponierte kaum noch – als hätte die Verbindung, die seine
        schöpferische Kraft getragen hatte, auch seine körperlichen Reserven mit sich
        genommen.</p>
        <p class="vb-intro"><strong>b) Die letzte Reise nach England:</strong>
        1848, bereits schwer geschwächt, reiste Chopin dennoch nach London und Schottland, um
        Konzerte zu geben und Unterricht zu erteilen. Zeitgenossen beschrieben ihn danach als
        kaum wiederzuerkennen – erschöpft bis zur Erschöpfung.</p>
        <p class="vb-intro"><strong>c) Die letzten Monate in Paris:</strong>
        Zurück in Paris verschlechterte sich sein Zustand im Laufe des Jahres 1849 weiter. Freunde
        und seine Schwester Ludwika, die eigens aus Warschau anreiste, pflegten ihn in seinen
        letzten Wochen, während er zunehmend ans Bett gefesselt war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Tod mit neununddreißig Jahren:</strong>
        Chopin starb am 17. Oktober 1849 in Paris an den Folgen der fortgeschrittenen
        Tuberkulose. Sein letzter Wunsch war, dass bei seiner Beerdigung Mozarts Requiem gespielt
        werden solle.</p>
        <p class="vb-intro"><strong>b) Zwei Jahrzehnte zwischen ersten Anzeichen und Tod:</strong>
        Von den ersten Symptomen in den frühen 1830er-Jahren bis zu seinem Tod 1849 lebte Chopin
        fast zwei Jahrzehnte mit einer Krankheit, die sein kompositorisches Schaffen nie
        vollständig zum Erliegen brachte – bis zur Trennung von George Sand, die den letzten
        Einbruch beschleunigte.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das trotz allem nie an Präzision verlor:</strong>
        Selbst in den Jahren zunehmender körperlicher Schwäche blieb Chopins Musik von derselben
        Verdichtung und Zurückhaltung geprägt, die sein gesamtes Schaffen auszeichnete – kein
        Ton zu viel, auch nicht am Krankenbett.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Geiz der Fünf, angewandt auf die eigene Energie:</strong>
        Wo andere Menschen mit fortschreitender Krankheit ihre Kräfte auf viele Bereiche
        verteilen, bündelte Chopin die wenige Energie, die ihm blieb, fast ausschließlich auf
        die Komposition – der Igel, der sich zusammenrollt und nur das Nötigste nach außen
        gibt.</p>
        <p class="vb-intro"><strong>b) Der körperliche Einbruch als Spiegel der einen zerbrochenen Verbindung:</strong>
        Der rapide gesundheitliche Verfall nach der Trennung von George Sand 1847 zeigt, wie eng
        bei der SX5 körperliche Kraft und die eine tragende Beziehung miteinander verwoben sind –
        zerbricht die Verbindung, folgt der körperliche Einbruch auf dem Fuß.</p>
        <p class="vb-intro"><strong>c) Komposition bis zur physischen Grenze:</strong>
        Noch in den letzten Lebensmonaten unterrichtete und komponierte Chopin, so gut es seine
        schwindenden Kräfte zuließen – der eine offene Kanal, durch den sich alles entlud, blieb
        bis zuletzt geöffnet.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Krankheit, die das ganze Erwachsenenleben begleitete:</strong>
        Von ersten Anzeichen in der Jugend über die Katastrophe von Mallorca bis zum Tod 1849
        zieht sich die Tuberkulose als ständiger, nie ganz verschwundener Begleiter durch
        Chopins gesamtes künstlerisches Schaffen.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Auch <a href="javascript:void(0)" data-route="beruehmte-friedrich-nietzsche">Friedrich Nietzsche</a>
        (SX5w4) brach körperlich zusammen, kurz nachdem seine eine entscheidende Verbindung
        zerbrochen war – bei Nietzsche der Bruch mit Lou Salomé 1883, bei Chopin die Trennung
        von George Sand 1847. Bei beiden zeigt sich dasselbe SX5w4-Muster: Die eine Verbindung,
        die alles trägt, ist zugleich das, wovon die körperliche und schöpferische Kraft
        abhängt – zerbricht sie, folgt der körperliche Einbruch auf dem Fuß. Diese Parallele wird
        auch im <a href="javascript:void(0)" data-route="krankheitsportraets-friedrich-nietzsche">Krankheitsporträt zu Nietzsche</a>
        aufgegriffen.</p>
        <p class="vb-intro"><strong>c) Rückzug statt Konfrontation als durchgehendes Muster:</strong>
        Anders als Ludwig van Beethoven (SX6w5) oder Friedrich Schiller (SX6w5), die ihrer
        Krankheit mit offener Konfrontation begegneten, zog sich Chopin – ganz wie es für die
        sexuelle Fünf typisch ist – mit fortschreitender Krankheit zunehmend in kleinere, private
        Kreise zurück, statt öffentlich dagegen anzukämpfen.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Lunge?</strong>
        Für eine sexuelle Fünf, deren Kraft sich fast ausschließlich in einem einzigen, eng
        begrenzten Kanal bündelt, liegt eine Deutung nahe: Ausgerechnet die Lunge – der Atem, der
        Grundlage jeder Lebensäußerung, auch der musikalischen – wurde zum Schauplatz eines
        Kampfes, den Chopin nie öffentlich austrug, sondern in seine Musik hinein verdichtete.
        Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch ausführlicher
        entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Fünf zwangsläufig zu
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Chopins Fall zeigen lässt, ist ein Muster,
        das bei der engen Verknüpfung von körperlicher Kraft und der einen tragenden Verbindung
        in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Chopin kannte sein eigenes Muster nicht – die sexuelle Fünf bündelt Kraft und Hingabe auf die eine tragende Verbindung, ohne dass ihm bewusst war, wie sehr seine körperliche Kraft an genau dieser einen Verbindung hing. Wer das eigene Muster nicht kennt, sieht auch nicht, wie eng die eigene Vitalität an eine einzige Bindung geknüpft ist, bis der Verlust sie mit sich reißt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Chopins</strong> sexuelle Fünf mit
        Viererflügel noch einmal ablesen: eine seit der Jugend schwelende Tuberkulose, die sich
        genau dann dramatisch beschleunigte, als die eine tragende Verbindung seines Lebens
        zerbrach, und die ihn am 17. Oktober 1849 das Leben kostete. Der Igel, der seine wenige
        verbliebene Kraft bis zuletzt in den einen offenen Kanal bündelte, durch den alles
        strömte, was in ihm war.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-frederic-chopin", label:"Porträt: Frédéric Chopin (SX5w4) – Lebenswerk"},
        {route:"krankheitsportraets-friedrich-nietzsche", label:"Krankheitsporträt: Friedrich Nietzsche (SX5w4) – dieselbe SX5w4-Parallele"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Krankheitsporträt: Ludwig van Beethoven (SX6w5) – Gegenmodell: offene Konfrontation"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx5", label:"Subtyp-Profil SX5"},
      ])}
    </div>
  `);
}

export function genesisPOrridgeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-genesis-p-orridge-portrait.jpg" alt="Genesis P-Orridge" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Genesis P-Orridge</p>
        <p class="krim-portrait-typ">SX8w9 · Sexueller Typ 8 mit Neunerflügel · 1950–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Krokodil</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Tierentsprechung: Krokodil" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Genesis P-Orridge</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-genesis-p-orridge">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten. Diese Seite vertieft ein
        Kapitel, das dort nicht behandelt wird: eine über Jahre verlaufende Leukämie-Erkrankung, während der Genesis bis kurz vor dem Tod im März 2020 weiter künstlerisch
        aktiv blieb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Genesis</strong> ist dem <strong>sexuellen Typ 8 mit Neunerflügel</strong>
        zugeordnet. Die SX8 will das Ganze, ohne Kompromiss, auch im Umgang mit dem eigenen
        Körper; der Neunerflügel bringt eine ruhende, ausdauernde Kraft hinzu, die nicht
        explosiv, sondern beharrlich wirkt. Genau diese Kombination – kompromisslose
        Weigerung, sich der Krankheit unterzuordnen, verbunden mit stiller, langer Ausdauer
        – bestimmte den Verlauf der eigenen Leukämie-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose einer chronischen Leukämie:</strong>
        Nach Angaben von Weggefährten wurde bei Genesis eine chronische Form der Leukämie
        diagnostiziert, die zunächst über Jahre relativ stabil verlief.</p>
        <p class="vb-intro"><strong>b) Fortgesetzte künstlerische und rituelle Praxis:</strong>
        Trotz der Diagnose setzte Genesis Auftritte, Ausstellungen und die eigene
        okkult-künstlerische Praxis über Jahre nahezu unvermindert fort.</p>
        <p class="vb-intro"><strong>c) Weitgehende Zurückhaltung gegenüber breiter Öffentlichkeit:</strong>
        Die Erkrankung wurde nicht zu einem zentralen öffentlichen Thema, sondern blieb
        gegenüber der breiten Öffentlichkeit lange im Hintergrund, während enge Freunde und
        Mitstreiter informiert waren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fortschreiten zu einer akuten Krankheitsphase:</strong>
        In den letzten Lebensjahren verschärfte sich die Erkrankung, was wiederholte
        Klinikaufenthalte und intensivere Behandlungen erforderlich machte.</p>
        <p class="vb-intro"><strong>b) Fortsetzung von Projekten trotz Krankenhausaufenthalten:</strong>
        Auch während Behandlungsphasen arbeitete Genesis nach Berichten von Mitarbeitenden
        weiter an Musik- und Kunstprojekten, teils direkt aus dem Krankenbett heraus.</p>
        <p class="vb-intro"><strong>c) Öffentliche Anteilnahme aus der Musik- und Kunstszene:</strong>
        In den letzten Monaten vor dem Tod äußerten zahlreiche Weggefährten und Fans aus der
        Industrial- und Experimentalmusik-Szene öffentlich ihre Anteilnahme und Unterstützung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Tod am 14. März 2020 in New York:</strong>
        Genesis P-Orridge starb im Alter von 70 Jahren an den Folgen der Leukämie-Erkrankung, in der Wohnung, die eng mit der verstorbenen Partnerin Lady Jaye
        verbunden war.</p>
        <p class="vb-intro"><strong>b) Weltweite Trauer in der Musik- und Kunstwelt:</strong>
        Der Tod löste international Nachrufe aus, die Genesis' Einfluss auf Industrial
        Music, Performancekunst und Gegenkultur würdigten.</p>
        <p class="vb-intro"><strong>c) Postume Fortführung des künstlerischen Vermächtnisses:</strong>
        Nach dem Tod wurden weitere, teils bereits vorbereitete Werke veröffentlicht,
        darunter Musik und Kunstprojekte, an denen Genesis bis zuletzt gearbeitet hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Würdigung eines kompromisslosen Lebenswerks:</strong>
        In Nachrufen wurde wiederholt betont, dass Genesis bis zuletzt der eigenen
        künstlerischen Radikalität treu blieb, ohne die Krankheit zum bestimmenden Narrativ
        des eigenen Werks zu machen.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Inszenierung des Krankheitsverlaufs:</strong>
        Anders als bei manchen Künstlern wurde die Leukämie nicht zu einem zentralen
        Bestandteil der öffentlichen Selbstdarstellung – die Kunst blieb im Vordergrund, nicht
        das Leiden.</p>
        <p class="vb-intro"><strong>c) Fortwirken des Pandrogeny-Projekts über den Tod hinaus:</strong>
        Das gemeinsam mit Lady Jaye begonnene Pandrogeny-Projekt – die körperliche
        Verschmelzung zweier Menschen zu einem Wesen – wird bis heute als eigenständiges
        Kunstwerk diskutiert, unabhängig vom Tod beider Beteiligter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Besitzergreifung, angewandt auf die eigene Krankheit:</strong>
        Die SX8-typische Weigerung, sich irgendetwas kampflos zu unterwerfen, zeigte sich
        auch im Umgang mit der Leukämie: Genesis ließ die Krankheit nicht zum Diktator des
        eigenen Lebens werden, sondern arbeitete bis zuletzt mit derselben Intensität weiter.</p>
        <p class="vb-intro"><strong>b) Der Neunerflügel und die stille Ausdauer im Krankheitsverlauf:</strong>
        Dieselbe ruhende, nicht-explosive Kraft, die Genesis' jahrzehntelanges Werk trug,
        zeigte sich auch im Umgang mit der Erkrankung: kein lautes öffentliches Ringen,
        sondern eine stille, beharrliche Fortsetzung der eigenen Arbeit trotz fortschreitender
        Krankheit.</p>
        <p class="vb-intro"><strong>c) Keine Trennung zwischen Kunst und Krankheit:</strong>
        Für Genesis war die eigene körperliche Verwundbarkeit nie vollständig vom
        künstlerischen Werk zu trennen – schon das Pandrogeny-Projekt hatte den eigenen
        Körper als Material der Kunst verwendet; die Leukämie wurde so zu einer weiteren,
        letzten Form dieser Verschmelzung von Leben und Werk.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Künstler der Grenzauflösung, konfrontiert mit der letzten unauflösbaren Grenze:</strong>
        Genesis' gesamtes Werk kreiste um die Auflösung von Grenzen – zwischen Körpern,
        Geschlechtern, Kunst und Leben. Ausgerechnet die Krankheit stellte eine Grenze dar,
        die sich nicht durch Kunst, Ritual oder Willenskraft auflösen ließ.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-ruth-bader-ginsburg">Ruth
        Bader Ginsburg (SX8w9)</a>: Auch Ginsburg weigerte sich über Jahre, mehrfachen
        Krebsdiagnosen nachzugeben, und blieb bis kurz vor dem Tod im Amt aktiv. Bei beiden
        SX8w9ern zeigt sich dasselbe Muster: eine kompromisslose Weigerung, die eigene
        Lebensaufgabe der Krankheit unterzuordnen, getragen von einer stillen, langen
        Ausdauer statt lauten öffentlichen Kampfes.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Blut, der Stoff der Verschmelzung selbst?</strong>
        Für eine sexuelle Acht mit Neunerflügel, deren gesamtes Werk um körperliche
        Verschmelzung und Grenzauflösung kreiste, liegt eine Deutung nahe: Ausgerechnet eine
        Erkrankung des Blutes – jenes Stoffes, der im Körper alle Grenzen überwindet und
        alles verbindet – wurde zum Ort des eigenen körperlichen Zusammenbruchs. Diese
        Deutung ist eine plausible Interpretation, kein belegter klinischer Kausalzusammenhang,
        und wird im Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Acht zwangsläufig zu Leukämie führt –
        <strong>jeder Mensch kann jede Erkrankung entwickeln, unabhängig vom Subtyp.</strong>
        Was sich an Genesis' Fall zeigen lässt, ist ein Muster im Umgang mit einer
        fortschreitenden Erkrankung, das bei einer ausgeprägten sexuellen Acht mit
        Neunerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Genesis kannte das eigene Muster nicht als Enneagramm-Struktur – die sexuelle Acht
        mit Neunerflügel hält reflexhaft an der eigenen Kompromisslosigkeit fest, auch
        gegenüber der eigenen Sterblichkeit, statt rechtzeitig innezuhalten, und lebte genau
        dieses Muster bis zum letzten Tag unverändert aus. Wer die eigene Neigung, keine
        Grenze – auch nicht die des eigenen Körpers – anzuerkennen, nicht als Muster
        erkennt, riskiert, dass der Körper am Ende die einzige Grenze setzt, die sich nicht
        mehr auflösen lässt.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Acht mit Neunerflügel erklärt bei <strong>Genesis P-Orridge</strong>
        vieles am Umgang mit der eigenen Leukämie: ein Künstler, dessen gesamtes Werk der
        Auflösung von Grenzen galt, begegnete auch der letzten, unüberwindbaren Grenze mit
        derselben kompromisslosen Intensität – das Krokodil, das bis zum letzten Tag nicht
        stillhielt, sondern weiterarbeitete, während die Krankheit selbst zur letzten
        Verschmelzung von Leben und Werk wurde.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-genesis-p-orridge", label:"Porträt: Genesis P-Orridge (SX8w9)"},
        {route:"krankheitsportraets-ruth-bader-ginsburg", label:"Krankheitsporträt: Ruth Bader Ginsburg (SX8w9) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx8", label:"Subtyp-Profil SX8"},
      ])}
    </div>
  `);
}

export function hansChristianAndersenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hans-christian-andersen-portrait.jpg" alt="Hans Christian Andersen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans Christian Andersen</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel · 1805–1875</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hans Christian Andersen</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-hans-christian-andersen">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, seine Herkunft und seine
        Typstruktur im Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort nur gestreift
        wird: der lebenslangen Hypochondrie, den quälenden Zahnproblemen und der Krebserkrankung,
        an der Andersen 1875 starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Andersen</strong> ist dem <strong>sozialen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SO4 trägt ihre Scham über das eigene Anderssein in die Gruppe hinein und
        sucht dort unablässig Bestätigung; der Dreierflügel verstärkt dieses Bedürfnis zu aktivem
        Streben nach öffentlicher Anerkennung. Bei Andersen zeigte sich das in einer bemerkenswerten
        Diskrepanz: eine tief empfundene, oft übertriebene Sorge um den eigenen Körper, die er nach
        außen kaum zeigte, solange ein Publikum ihn brauchte – und die erst hervortrat, sobald keine
        Bühne mehr in Sicht war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine lebenslange Hypochondrie, gut dokumentiert in Briefen und Tagebüchern:</strong>
        Andersen führte über Jahrzehnte detaillierte Tagebücher, in denen kleinste körperliche
        Beschwerden – ein Ziehen im Bauch, ein leichtes Fieber, eine Erkältung – mit auffälliger
        Ausführlichkeit und Sorge festgehalten wurden. Zeitgenossen und spätere Biografen sind sich
        einig, dass diese Selbstbeobachtung weit über das übliche Maß hinausging.</p>
        <p class="vb-intro"><strong>b) Die berühmte Angst, lebendig begraben zu werden:</strong>
        Andersen trug zeitlebens einen Zettel bei sich mit der Bitte, man möge ihm nach dem
        vermeintlichen Tod die Pulsadern öffnen, um sicherzugehen, dass er wirklich gestorben sei –
        eine der bestbezeugten Einzelheiten seiner Hypochondrie, die er selbst wiederholt
        gegenüber Freunden erwähnte.</p>
        <p class="vb-intro"><strong>c) Quälende Zahnprobleme von früh an:</strong>
        Schon in mittleren Jahren litt Andersen unter starken, wiederkehrenden Zahnschmerzen und
        einem fortschreitenden Zahnverlust, den er in Briefen mehrfach als große Qual beschrieb –
        ein Leiden, das ihn zeitlebens begleitete und das er trotz seiner sonstigen Gesundheitssorge
        lange kaum professionell behandeln ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Ein folgenschwerer Sturz im Jahr 1872:</strong>
        Im Frühjahr 1872 stürzte Andersen aus dem Bett und verletzte sich schwer – ein Ereignis, das
        Biografen übereinstimmend als Wendepunkt seiner letzten Lebensjahre beschreiben. Von diesem
        Sturz erholte er sich nie wieder vollständig.</p>
        <p class="vb-intro"><strong>b) Fortschreitende Erschöpfung und Gewichtsverlust:</strong>
        In den folgenden drei Jahren verschlechterte sich sein Gesundheitszustand stetig – wachsende
        Erschöpfung, Appetitlosigkeit und ein deutlicher körperlicher Verfall, den enge Freunde in
        Briefen dokumentierten.</p>
        <p class="vb-intro"><strong>c) Die Diagnose:</strong>
        Andersens Ärzte gingen von einer Krebserkrankung der Leber aus – eine Einschätzung, die auf
        den beobachteten Symptomen beruhte, ohne die diagnostischen Möglichkeiten, die heutige
        Medizin zur Verfügung hätte. Die genaue Art der Erkrankung lässt sich aus heutiger Sicht
        nicht mehr mit letzter Sicherheit rekonstruieren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Pflege im Haus befreundeter Familien:</strong>
        In seinen letzten Lebensjahren wurde Andersen von der befreundeten Kaufmannsfamilie Melchior
        gepflegt, zunächst in Kopenhagen, später in deren Landhaus Rolighed – ein Zeichen dafür, wie
        sehr der kinderlose, unverheiratete Andersen am Ende seines Lebens auf die Zugehörigkeit zu
        einer ihn tragenden Gemeinschaft angewiesen war, die er sich selbst nie in Form einer
        eigenen Familie hatte schaffen können.</p>
        <p class="vb-intro"><strong>b) Weiterhin öffentliche Präsenz trotz Schwäche:</strong>
        Auch nach dem Sturz 1872 nahm Andersen, solange es seine Kräfte zuließen, weiterhin an
        gesellschaftlichen Anlässen teil und pflegte seinen Briefwechsel mit Prominenten und
        Bewunderern – das Bedürfnis nach sichtbarer Zugehörigkeit ließ sich selbst durch
        fortschreitende Krankheit kaum dämpfen.</p>
        <p class="vb-intro"><strong>c) Ein langsames, öffentlich begleitetes Sterben:</strong>
        Andersens letzte Lebensmonate wurden in der dänischen Öffentlichkeit aufmerksam verfolgt;
        Zeitungen berichteten regelmäßig über seinen Gesundheitszustand – für die soziale Vier mit
        Dreierflügel, die zeitlebens nach öffentlicher Anteilnahme gesucht hatte, eine Situation, in
        der ihm genau das zuteilwurde, wonach er sich sein Leben lang gesehnt hatte, wenn auch
        unter den bittersten Umständen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der Tod am 4. August 1875:</strong>
        Hans Christian Andersen starb am 4. August 1875 im Alter von 70 Jahren in Rolighed, dem
        Landhaus der Familie Melchior bei Kopenhagen, umgeben von den Menschen, die ihm in seinen
        letzten Jahren am nächsten standen.</p>
        <p class="vb-intro"><strong>b) Ein Staatsbegräbnis als letzte öffentliche Bestätigung:</strong>
        Andersens Beerdigung wurde zu einem Ereignis nationaler Trauer, an dem auch der dänische
        König und die königliche Familie teilnahmen – die späte, endgültige Bestätigung der
        gesellschaftlichen Zugehörigkeit, um die sich der soziale Vierer mit Dreierflügel sein
        ganzes Leben lang bemüht hatte.</p>
        <p class="vb-intro"><strong>c) Ein Nachruhm, der die eigene Unsicherheit weit überdauerte:</strong>
        Innerhalb weniger Jahrzehnte nach seinem Tod wurde Andersen zum meistübersetzten dänischen
        Schriftsteller aller Zeiten – ein Ausmaß an weltweiter Anerkennung, das die zeitlebens
        nagende Sorge, nicht wirklich dazuzugehören, im Rückblick als tragische Fehleinschätzung
        erscheinen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Hypochondrie als umgelenkte Zugehörigkeitssorge:</strong>
        Die für Andersen so charakteristische Sorge um den eigenen Körper lässt sich als eine nach
        innen gerichtete Variante seiner eigentlichen Grundangst lesen: nicht wirklich gesehen,
        nicht wirklich gebraucht, nicht wirklich zugehörig zu sein. Die minutiöse Beobachtung
        kleinster körperlicher Signale gab dieser diffusen Sorge ein konkretes, kontrollierbares
        Objekt.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel als Motor der Weiterarbeit trotz Schwäche:</strong>
        Derselbe Dreierflügel, der Andersen zeitlebens antrieb, öffentlich sichtbar zu bleiben, ließ
        ihn auch nach dem Sturz 1872 nicht kampflos aufgeben – noch in geschwächtem Zustand suchte
        er weiterhin Kontakt zu Bewunderern und Förderern, als könne öffentliche Zuwendung die
        fortschreitende Krankheit aufhalten.</p>
        <p class="vb-intro"><strong>c) Die Zahnschmerzen als verdrängtes, weil unglamouröses Leiden:</strong>
        Auffällig ist der Kontrast zwischen Andersens ausführlicher Sorge um dramatischere,
        erzählbare Beschwerden und seinem jahrzehntelangen Hinnehmen der Zahnschmerzen – ein Leiden
        ohne öffentliche Bühne, das ihm vermutlich zu profan erschien, um es in seine sorgfältig
        gepflegte Selbstdarstellung als sensibler, leidender Künstler einzubauen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Michael Jackson (SO4w3):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Michael Jackson</a>,
        ebenfalls SO4w3, zeigt sich bei Andersen das für diesen Subtyp typische Muster: die
        sorgfältig gepflegte öffentliche Rolle – bei Jackson der makellose King of Pop, bei Andersen
        der sensible, weltweit gefeierte Märchendichter – wird bis zuletzt aufrechterhalten, während
        das eigentliche körperliche Leiden im Hintergrund verläuft. Bei Jackson war es die über
        Jahrzehnte verheimlichte Schmerzmittelabhängigkeit, bei Andersen die stumm ausgehaltenen
        Zahnschmerzen neben der ausführlich dokumentierten, aber letztlich hilflosen Sorge um alles
        andere – zwei Varianten derselben SO4w3-Grundbewegung: das Bild nach außen wahren, das
        eigene Innere zurückstellen.</p>
        <p class="vb-intro"><strong>b) Eine über Jahrzehnte gewachsene Sorge, kein plötzlicher Einbruch:</strong>
        Von den frühesten dokumentierten Tagebucheinträgen über kleinste Beschwerden bis zum
        tatsächlichen Krankheitsverlauf nach 1872 zieht sich eine durchgehende Linie: Andersens
        Körper war ihm sein Leben lang ein Objekt intensiver, oft übertriebener Aufmerksamkeit –
        bevor die reale Erkrankung sie schließlich einholte.</p>
        <p class="vb-intro"><strong>c) Zwei Leiden, ein gemeinsamer blinder Fleck:</strong>
        Die ausführlich dokumentierte Hypochondrie und die kaum erwähnten, tatsächlich behandlungsbedürftigen
        Zahnprobleme lassen sich als zwei Seiten derselben Schieflage lesen: Aufmerksamkeit floss
        dorthin, wo sie erzählbar und damit sozial verwertbar war – nicht notwendig dorthin, wo der
        Körper sie am dringendsten gebraucht hätte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Leber?</strong>
        Für eine soziale Vier, deren Grundthema die Frage ist, ob sie in der Gemeinschaft wirklich
        ihren Platz hat, liegt eine Deutung nahe: Die Leber gilt in vielen psychosomatischen
        Traditionen als das Organ der verarbeiteten, oft auch der zurückgehaltenen Emotion – bei
        einem Menschen, der zeitlebens mehr fühlte, als er in einer für seine Zeit akzeptablen Form
        zeigen konnte, und der bis zuletzt kontrollierte, was von seinem Inneren nach außen drang,
        ist das ein naheliegendes Bild. Diese Deutung ist eine plausible Interpretation, kein
        belegter historischer Kausalzusammenhang, und wird im
        <a href="javascript:void(0)" data-route="psychosomatik/leberkrebs">Psychosomatik-Register
        zu Leberkrebs</a> dieses Kompasses ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier mit Dreierflügel zwangsläufig zu
        Lebererkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Andersens Fall zeigen lässt, ist ein Muster, das bei der
        Neigung, erzählbares Leiden ausführlich zu dokumentieren und unglamouröses Leiden zu
        übergehen, in der Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen,
        kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Andersen kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten in dieser Form noch gar nicht. Die Sehnsucht nach Zugehörigkeit, die ihn ein Leben
        lang antrieb, öffentlich sichtbar und geliebt zu sein, kannte für ihn keinen eingebauten
        Warnmechanismus, der zwischen erzählbarem und tatsächlich dringlichem Leiden unterschieden
        hätte; im Gegenteil, jedes körperliche Signal wurde in derselben Logik verarbeitet, mit der
        er auch soziale Signale verarbeitete: als etwas, das entweder zur eigenen Geschichte passte
        oder eben nicht. Wer das eigene Muster nicht kennt, kann es auch nicht rechtzeitig
        unterbrechen – bei Andersen bedeutete das ein Leben, das an ausführlich dokumentierter Sorge
        um kleine Beschwerden reich war und an tatsächlicher Fürsorge für den eigenen, real
        leidenden Körper arm blieb, bis die Krankheit, die ihn schließlich das Leben kostete, keine
        Ausflucht mehr zuließ.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Andersens</strong> Krankengeschichte zeigt sich die soziale Vier mit Dreierflügel
        von ihrer widersprüchlichsten Seite: eine lebenslange, minutiös dokumentierte Sorge um den
        eigenen Körper – und ein tatsächliches Leiden, das sich erst zeigte, als keine Bühne mehr
        half. Das Gürteltier, das sich sein Leben lang nach Zugehörigkeit sehnte, erhielt sie am
        Ende in Form eines Staatsbegräbnisses – am 4. August 1875, im Alter von 70 Jahren, an den
        Folgen einer vermuteten Krebserkrankung der Leber.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-hans-christian-andersen", label:"Porträt: Hans Christian Andersen (SO4w3) – Lebenswerk"},
        {route:"krankheitsportraets-michael-jackson", label:"Krankheitsporträt: Michael Jackson (SO4w3) – dieselbe Verbergungsstrategie"},
        {route:"krankheitsportraets-heinrich-heine", label:"Krankheitsporträt: Heinrich Heine (SO4w3)"},
        {route:"psychosomatik/leberkrebs", label:"Psychosomatik-Register: Leberkrebs"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function immanuelKantKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-immanuel-kant-portrait.jpg" alt="Immanuel Kant" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Immanuel Kant</p>
        <p class="krim-portrait-typ">SO6w5 · Sozialer Typ 6 mit Fünferflügel · 1724–1804</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Erdmännchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so6.jpg" alt="Tierentsprechung: Erdmännchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO6")};left:${tierAvatarLeft("SO6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Immanuel Kant</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-immanuel-kant">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen streng getakteten Tagesablauf und
        sein architektonisches philosophisches System. Diese Seite vertieft ein Kapitel, das
        dort nur am Rande erwähnt wird: eine lebenslange, extrem dokumentierte Hypochondrie
        mit chronischer Atembeklemmung, die er durch ein eisernes, selbst entwickeltes
        Gesundheitsregime zu beherrschen versuchte, sowie einen geistigen Verfall in seinen
        letzten Lebensjahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Kant</strong> ist dem <strong>sozialen Typ 6 mit Fünferflügel</strong>
        zugeordnet. Die SO6 sucht Sicherheit durch Pflicht, Ordnung und feste Struktur; der
        Fünferflügel verwandelt Wachsamkeit in ein durchdachtes System. Genau diese
        Kombination bestimmte auch, wie er mit seiner eigenen körperlichen Verletzlichkeit
        umging: nicht durch ärztliche Behandlung im gewöhnlichen Sinne, sondern durch ein
        selbst erdachtes, streng befolgtes Regelwerk zur Beherrschung des eigenen Körpers
        durch den Willen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Chronische Atembeklemmung seit jungen Jahren:</strong>
        Kant litt bereits als junger Mann an einer als „Enge der Brust" beschriebenen
        Atembeschwerde, die ihn sein gesamtes Erwachsenenleben begleitete und die er selbst
        in philosophischen Schriften thematisierte.</p>
        <p class="vb-intro"><strong>b) Ausgeprägte Sorge um die eigene Verdauung:</strong>
        Zeitgenossen berichteten von Kants akribischer Beschäftigung mit seiner Ernährung und
        Verdauung – ein Thema, das in seinem Alltag und seiner Korrespondenz auffällig oft
        auftauchte.</p>
        <p class="vb-intro"><strong>c) Frühe Entwicklung strenger gesundheitlicher Routinen:</strong>
        Schon in mittleren Lebensjahren begann Kant, seinen Tagesablauf – Aufstehen,
        Spaziergänge, Mahlzeiten – so exakt zu regulieren, dass er zur Grundlage seines
        gesamten weiteren Lebens wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Philosophische Verarbeitung der eigenen Hypochondrie:</strong>
        In seiner späten Schrift „Der Streit der Fakultäten" (1798) widmete Kant einen
        eigenen Abschnitt der Frage, wie der Wille körperliche Krankheitsgefühle durch reine
        Willensanstrengung beherrschen könne – eine direkte, theoretische Verarbeitung seiner
        eigenen lebenslangen Beschwerden.</p>
        <p class="vb-intro"><strong>b) Strikte Verweigerung von Abweichungen von der Routine:</strong>
        Besucher und Freunde berichteten, dass Kant selbst kleine Störungen seines
        Tagesablaufs als potenziell gesundheitsgefährdend empfand und mit Nachdruck
        vermied.</p>
        <p class="vb-intro"><strong>c) Tägliche Tischgesellschaft als gesundheitliche Notwendigkeit:</strong>
        Kant bestand auf ausgedehnter, mehrstündiger Gesellschaft beim Mittagessen – eine
        Routine, die er selbst als notwendig für sein seelisches und körperliches
        Gleichgewicht beschrieb, nicht nur als gesellige Gewohnheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Beginnender geistiger Verfall ab Mitte der 1790er-Jahre:</strong>
        In seinen letzten Lebensjahren begann sich bei Kant eine zunehmende geistige
        Verlangsamung bemerkbar zu machen, die sein enges Umfeld und Biografen wie Thomas
        De Quincey später dokumentierten.</p>
        <p class="vb-intro"><strong>b) Fortsetzung der Routine trotz sichtbaren Verfalls:</strong>
        Auch als sein Gedächtnis und seine Auffassungsgabe nachließen, versuchte Kant,
        seinen gewohnten Tagesablauf so lange wie möglich unverändert fortzusetzen.</p>
        <p class="vb-intro"><strong>c) Tod am 12. Februar 1804 in Königsberg:</strong>
        Kant starb im Alter von 79 Jahren, nach Jahren zunehmender körperlicher und
        geistiger Schwäche, in der Stadt, die er praktisch nie verlassen hatte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Philosoph, dessen Krankengeschichte zur Quelle wurde:</strong>
        Kants eigene Auseinandersetzung mit seiner Hypochondrie floss unmittelbar in sein
        Spätwerk ein – ein seltener Fall, in dem chronisches Leiden nicht verschwiegen,
        sondern zum Gegenstand philosophischer Reflexion selbst wurde.</p>
        <p class="vb-intro"><strong>b) Ein Begräbnis mit ungewöhnlicher öffentlicher Anteilnahme:</strong>
        Trotz seines zurückgezogenen Lebens versammelte sich bei seinem Tod eine
        außergewöhnlich große Menschenmenge in Königsberg – ein später öffentlicher Ausdruck
        von Anerkennung für einen Mann, der nie um Sichtbarkeit gerungen hatte.</p>
        <p class="vb-intro"><strong>c) Ein Lebenswerk, das trotz der Beschwerden vollendet wurde:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses hinderte Kants
        chronisches Leiden ihn nicht daran, sein gesamtes philosophisches System noch zu
        Lebzeiten vollständig auszuarbeiten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Routine als Schutzsystem gegen den eigenen Körper:</strong>
        Dieselbe Suche nach Sicherheit durch feste, verlässliche Struktur, die Kants
        gesamtes Leben prägte, bestimmte auch, wie er seiner eigenen körperlichen
        Verletzlichkeit begegnete – nicht durch Hingabe an ärztliche Autorität, sondern
        durch ein selbst entwickeltes System, dem er mit derselben Konsequenz vertraute wie
        seiner Philosophie.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und die Theoretisierung des eigenen Leidens:</strong>
        Kants philosophische Abhandlung über die Beherrschung von Krankheitsgefühlen durch
        den Willen zeigt genau jene Fünfer-Bewegung, mit der auch seine Erkenntnistheorie
        entstand: das Unbeherrschbare wird nicht einfach erlitten, sondern in ein
        begriffliches System übersetzt, das Kontrolle verspricht.</p>
        <p class="vb-intro"><strong>c) Verlässlichkeit bis zuletzt, auch im Verfall:</strong>
        Anders als bei einem plötzlichen gesundheitlichen Einbruch zeigte sich bei Kant ein
        allmähliches, über Jahre erkennbares Nachlassen – ein Muster, das seiner
        lebenslangen Vorliebe für Vorhersehbarkeit selbst im eigenen körperlichen Niedergang
        entsprach.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der durch Willenskraft beherrscht werden sollte:</strong>
        Kants gesamtes Leben war von der Überzeugung geprägt, dass Sicherheit durch
        konsequente Selbstdisziplin und feste Regeln erreichbar ist – seine Hypochondrie war
        keine Ausnahme von diesem Prinzip, sondern dessen konsequenteste Anwendung auf den
        eigenen Körper.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Sigmund Freud</a>
        (ebenfalls SO6w5) rauchte trotz diagnostiziertem Kieferkrebs unbeirrt weiter und
        unterzog sich über 30 Operationen, um geistig klar zu bleiben; Kant entwickelte
        Jahrzehnte zuvor ein ebenso rigides System, um seine chronische Atembeklemmung durch
        reine Willensanstrengung zu beherrschen. Beide Fälle zeigen dasselbe SO6w5-Muster:
        Sicherheit gegenüber dem eigenen, als bedrohlich erlebten Körper wird nicht durch
        Hingabe an äußere medizinische Autorität gesucht, sondern durch ein selbst
        entwickeltes, streng befolgtes System der Kontrolle. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Krankheitsporträt zu Sigmund Freud</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Atmung?</strong>
        Für eine soziale Sechs mit Fünferflügel, deren gesamte Sicherheit auf
        vorhersehbarer, kontrollierter Routine beruhte, liegt eine Deutung nahe: Ausgerechnet
        jene körperliche Funktion, die am wenigsten bewusster Kontrolle unterliegt – der
        Atem –, wurde zum Schauplatz seiner lebenslangen Sorge, während sein Denksystem
        gleichzeitig versuchte, genau diese Unkontrollierbarkeit begrifflich einzuhegen.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Sechs zwangsläufig zu Hypochondrie
        oder Atembeschwerden führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Kants Fall zeigen lässt, ist ein Muster
        im Umgang mit körperlicher Verletzlichkeit, das bei einer ausgeprägten sozialen
        Sechs mit Fünferflügel immer wieder auffällt – eine von vielen möglichen Deutungen,
        kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Kant kannte sein eigenes Muster nicht – die soziale Sechs mit Fünferflügel sichert
        reflexhaft die eigene Sicherheit durch selbst entwickelte, streng befolgte Systeme,
        statt sich der eigenen körperlichen Verletzlichkeit je ohne diese Kontrolle zu
        stellen, und genau dieses Muster lebte er bis in seine letzten, vom geistigen
        Verfall geprägten Lebensjahre unverändert aus. Wer die eigene Notwendigkeit, jede
        Unsicherheit durch ein System zu bändigen, nicht als Muster erkennt, kann sie auch
        im eigenen körperlichen und geistigen Niedergang nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Sechs mit Fünferflügel erklärt bei <strong>Kant</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Sicherheit auf
        vorhersehbarer Struktur beruhte, versuchte, selbst seinen eigenen, unkontrollierbaren
        Körper in ein System aus Regeln und Willenskraft zu fassen – das Erdmännchen, das
        noch die eigene Atemnot mit derselben Disziplin zu bewachen versuchte, mit der es
        sein ganzes Leben lang Wache gehalten hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-immanuel-kant", label:"Porträt: Immanuel Kant (SO6w5) – Philosoph"},
        {route:"krankheitsportraets-sigmund-freud", label:"Krankheitsporträt: Sigmund Freud (SO6w5) – dasselbe Muster der Selbstkontrolle"},
        {route:"krankheitsportraets-woody-allen", label:"Krankheitsporträt: Woody Allen (SE6w7) – verwandte Hypochondrie, andere Instinktantwort"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so6", label:"Subtyp-Profil SO6"},
      ])}
    </div>
  `);
}

export function johnGottiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/john-gotti-portrait.jpg" alt="John Gotti" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Gotti</p>
        <p class="krim-portrait-typ">SO8w7 · Sozialer Typ 8 mit Siebenerflügel · 1940–2002</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Löwe</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Tierentsprechung: Löwe" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>John Gotti</strong> ist bereits als
        <a href="javascript:void(0)" data-route="kriminalpsychologie-john-gotti">kriminalpsychologisches Porträt</a>
        in diesem Kompass vertreten – dort geht es um seinen Aufstieg zum Boss der Gambino-Familie
        und seine Typstruktur als „Teflon-Don". Diese Seite vertieft ein Kapitel, das dort nur am
        Rande erwähnt wird: eine Kehlkopfkrebs-Diagnose 1998 in Isolationshaft, ein Kampf gegen
        die Krankheit ohne jedes öffentliche Eingeständnis von Schwäche, und einen Tod 2002 in
        Bundeshaft.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Gotti</strong> ist dem <strong>sozialen Typ 8 mit Siebenerflügel</strong>
        zugeordnet. Naranjo beschrieb diesen Subtyp als den der Freundschaft und Bruderschaft:
        Herrschaft, die sich als Schutz des eigenen Rudels versteht. Der Siebenerflügel bringt
        Genuss, Glanz und die Freude am Rampenlicht hinzu. Genau diese Weigerung, Schwäche
        zuzugeben, bestimmte auch, wie Gotti seiner tödlichen Krankheit begegnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose im Hochsicherheitsgefängnis 1998:</strong>
        Sechs Jahre nach seiner Verurteilung zu lebenslanger Haft wurde bei Gotti Kehlkopfkrebs
        diagnostiziert – zu diesem Zeitpunkt saß er bereits in strenger Isolationshaft.</p>
        <p class="vb-intro"><strong>b) Operation und zunächst scheinbarer Erfolg:</strong>
        Nach einer ersten Behandlung schien die Krankheit zunächst zurückgedrängt – Berichte aus
        dieser Zeit sprachen von einer vorübergehenden Besserung seines Zustands.</p>
        <p class="vb-intro"><strong>c) Rückkehr der Krankheit kurze Zeit später:</strong>
        Der Krebs kehrte zurück und breitete sich aus – ein Verlauf, der sich über die
        folgenden Jahre bis zu seinem Tod fortsetzte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Verlegung in ein Gefängniskrankenhaus:</strong>
        Mit fortschreitender Erkrankung wurde Gotti in die medizinische Einrichtung der
        Bundesstrafanstalt Springfield, Missouri, verlegt, die auf die Behandlung schwer
        kranker Häftlinge spezialisiert ist.</p>
        <p class="vb-intro"><strong>b) Kaum öffentliche Bilder der Krankheit:</strong>
        Anders als bei seinen früheren, bewusst inszenierten öffentlichen Auftritten drangen
        aus dieser Zeit nur wenige Bilder oder Berichte nach außen – der Mann, der einst das
        Rampenlicht suchte, verschwand zunehmend aus der Öffentlichkeit.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Eingeständnis von Schwäche:</strong>
        In den seltenen Berichten aus dieser Zeit finden sich keine Hinweise darauf, dass
        Gotti seine Krankheit als Schwäche anerkannte oder öffentlich thematisierte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Extreme Isolation während der Behandlung:</strong>
        Gotti verbrachte seine letzten Haftjahre in Einzelhaft mit stark eingeschränktem
        Besuchsrecht – ausgerechnet ein Mann, dessen gesamtes Leben auf Sichtbarkeit und
        Gefolgschaft ausgerichtet war, verbrachte seine letzten Jahre fast vollständig
        abgeschnitten.</p>
        <p class="vb-intro"><strong>b) Der Niedergang des eigenen Reichs im Hintergrund:</strong>
        Während Gotti erkrankte, verlor die Gambino-Familie unter seinem Sohn zunehmend an
        Einfluss – der König konnte sein Reich von der Isolationszelle aus nicht mehr
        schützen.</p>
        <p class="vb-intro"><strong>c) Tod am 10. Juni 2002 in Springfield, Missouri:</strong>
        John Gotti starb im Alter von 61 Jahren im Bundesgefängnis – fast genau zehn Jahre
        nach seiner Verurteilung zu lebenslanger Haft.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Begräbnis, das noch einmal an den früheren Glanz erinnerte:</strong>
        Trotz behördlicher Bedenken versammelten sich Tausende auf den Straßen von Queens, um
        dem Trauerzug zu folgen – ein letztes Aufflackern der Loyalität, die Gotti zu Lebzeiten
        für sich beanspruchte.</p>
        <p class="vb-intro"><strong>b) Ein Tod fernab der Bühne, die er einst suchte:</strong>
        Der Mann, der Kameras zuwinkte und Journalisten empfing, starb isoliert in einem
        Gefängniskrankenhaus – ein scharfer Kontrast zu seinem öffentlichen Selbstbild.</p>
        <p class="vb-intro"><strong>c) Ein Erbe, das ihn nicht überlebte:</strong>
        Sein Sohn versuchte, das Familienimperium fortzuführen, scheiterte jedoch – das Reich
        des Löwen überlebte seinen König nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Schwäche, die nicht gezeigt werden durfte:</strong>
        Dieselbe Weigerung, jemals Verletzlichkeit einzugestehen, die Gottis gesamtes
        öffentliches Auftreten prägte, bestimmte auch, wie wenig über seine Krankheit nach
        außen drang.</p>
        <p class="vb-intro"><strong>b) Wenn die Acht unter chronischem Stress zur Fünf wird:</strong>
        Die extreme Isolation seiner letzten Jahre – erzwungen durch die Haftbedingungen, aber
        durch sein Schweigen über die eigene Krankheit noch verstärkt – zeigt ein Muster, das
        über die übliche Dominanz der Acht mit Siebenerflügel hinausgeht. Wer unter
        chronischem Druck lebt, bewegt sich zunehmend entlang seiner Stresslinie in Richtung
        seines Stresspunkts – bei der Acht ist das die Fünf. Der Rückzug aus der
        Öffentlichkeit, das Verschwinden aus dem Rampenlicht, das er einst so bewusst gesucht
        hatte, erinnert eher an die abgeschottete Zurückgezogenheit ihres Stresspunkts als an
        die offene, raumgreifende Präsenz des Kerntyps – bei unverändertem Kerntyp SO8w7.</p>
        <p class="vb-intro"><strong>c) Kein öffentlicher Zusammenbruch der Fassade:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine Berichte
        über ein sichtbares Zerbrechen von Gottis kontrolliertem Auftreten – die Löwenhaltung
        blieb, soweit bekannt, bis zum Ende bestehen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der sich nicht mehr beherrschen ließ:</strong>
        Gottis gesamtes Leben war von der Überzeugung geprägt, dass Stärke und Kontrolle jede
        Bedrohung abwehren können – der Krebs war die erste Bedrohung, gegen die weder
        Loyalität noch Einschüchterung halfen.</p>
        <p class="vb-intro"><strong>b) Isolation als Umkehrung des eigenen Lebensmusters:</strong>
        Ein Mann, der sein ganzes Leben lang die Nähe seines Rudels suchte und brauchte, verbrachte
        seine letzten Jahre in erzwungener Einzelhaft – eine Umkehrung, die seinem Kernthema
        diametral entgegenstand.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der Kehlkopf?</strong>
        Für eine soziale Acht mit Siebenerflügel, deren gesamte Macht auf der eigenen Stimme,
        der eigenen Präsenz und dem eigenen Auftritt beruhte, liegt eine Deutung nahe:
        Ausgerechnet jenes Organ, das ihm Befehle erteilen, Loyalität einfordern und sich in
        der Öffentlichkeit Gehör verschaffen ließ, wurde zum Schauplatz des Verfalls – und
        nahm ihm buchstäblich die Stimme, mit der er sein Reich einst regiert hatte. Diese
        Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Acht zwangsläufig zu Kehlkopfkrebs führt
        – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong>
        Was sich an Gottis Fall zeigen lässt, ist ein Muster im Umgang mit einer tödlichen
        Diagnose, das bei einer ausgeprägten sozialen Acht mit Siebenerflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Gotti kannte sein eigenes Muster nicht – die soziale Acht mit Siebenerflügel begegnet
        jeder Bedrohung reflexhaft mit Kontrolle und ungebrochener Stärke nach außen, statt sie
        je als eigene Verletzlichkeit anzuerkennen, und genau dieses Muster lebte er bis in
        seine letzten Haftjahre unverändert aus. Wer die eigene Unfähigkeit, Schwäche
        zuzugeben, nicht als Muster erkennt, kann sie auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Acht mit Siebenerflügel erklärt bei <strong>Gotti</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Macht auf Sichtbarkeit und
        Stimme beruhte, verlor beides gleichzeitig – die Stimme an den Krebs, die Sichtbarkeit
        an die Isolationshaft. Der Löwe, der niemals im Verborgenen operieren wollte – und der
        seine letzten Jahre ausgerechnet dort verbrachte, unsichtbar für die Welt, die ihn
        einst bewunderte.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Hinweis:</strong> Dieses Porträt dient der tiefenpsychologischen Analyse. Die
        Typzuordnung ist eine psychologische Hypothese, kein historisches Urteil. John Gotti
        wurde 1992 wegen Mordes, Erpressung und Racketeering zu lebenslanger Haft ohne
        Bewährung verurteilt und starb 2002 in Haft. Das Enneagramm erklärt, es rechtfertigt
        nicht.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"kriminalpsychologie-john-gotti", label:"Kriminalpsychologie: John Gotti (SO8w7) – Boss der Gambino-Familie"},
        {route:"krankheitsportraets-fritz-perls", label:"Krankheitsporträt: Fritz Perls (SO8w7) – dieselbe Weigerung, Schwäche zuzugeben"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so8", label:"Subtyp-Profil SO8"},
      ])}
    </div>
  `);
}

export function junkoTabeiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-junko-tabei-portrait.jpg" alt="Junko Tabei" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Junko Tabei</p>
        <p class="krim-portrait-typ">SE7w6 · Selbsterhaltende Typ 7 mit Sechserflügel · 1939–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Junko Tabei</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-junko-tabei">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihre Besteigung des Mount Everest
        1975 als erste Frau überhaupt. Diese Seite vertieft ein Kapitel, das dort nur
        gestreift wird: eine 2012 diagnostizierte Bauchfellkrebserkrankung, mit der sie
        bis zu ihrem Tod 2016 weiter Berge bestieg.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Tabei</strong> ist dem <strong>selbsterhaltenden Typ 7 mit
        Sechserflügel</strong> zugeordnet. Die SE7 sichert sich Vorräte an Erfahrung und
        Möglichkeiten für den Ernstfall; der Sechserflügel bringt Loyalität und
        Pflichtgefühl gegenüber einer größeren Aufgabe hinzu. Genau diese Kombination –
        praktische, unerschütterliche Weiterarbeit trotz Bedrohung – bestimmte, wie Tabei
        mit ihrer eigenen Krebserkrankung umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose Bauchfellkrebs 2012:</strong>
        Im Alter von 73 Jahren erhielt Tabei die Diagnose eines fortgeschrittenen
        Bauchfellkrebses – einer seltenen und oft schwer behandelbaren Krebsform.</p>
        <p class="vb-intro"><strong>b) Keine öffentliche Ankündigung eines Rückzugs:</strong>
        Trotz der ernsten Diagnose gab es keine Ankündigung, die eigene Bergsteigertätigkeit
        einzustellen.</p>
        <p class="vb-intro"><strong>c) Fortsetzung der Jugendprojekte nach Fukushima:</strong>
        Tabei setzte ihr Engagement für junge Menschen aus den vom Erdbeben und der
        Atomkatastrophe 2011 betroffenen Regionen fort, denen sie gemeinsame
        Bergbesteigungen ermöglichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Weitere Gipfelbesteigungen bis 2015:</strong>
        Nach der Diagnose bestieg Tabei noch Berge in Niger, Luxemburg, Belgien und Oman –
        Länder, deren jeweils höchste Erhebung sie noch erreichen wollte.</p>
        <p class="vb-intro"><strong>b) Über 150 bestiegene Berge in 76 Ländern insgesamt:</strong>
        Über ihr gesamtes Leben hinweg bestieg Tabei mehr als 150 Berge in 76 Ländern –
        eine Zahl, die sich auch nach der Diagnose weiter erhöhte.</p>
        <p class="vb-intro"><strong>c) Vierjähriger Krankheitsverlauf:</strong>
        Zwischen Diagnose 2012 und Tod 2016 lagen vier Jahre, in denen Tabei sowohl
        behandelt wurde als auch aktiv blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Öffentliches Auftreten trotz Erkrankung:</strong>
        Tabei nahm weiterhin an Vorträgen und öffentlichen Terminen teil, ohne die eigene
        Diagnose in den Mittelpunkt zu stellen.</p>
        <p class="vb-intro"><strong>b) Praktische statt dramatisierende Kommunikation:</strong>
        Berichte über ihre letzten Lebensjahre beschreiben einen sachlichen, unaufgeregten
        Umgang mit der eigenen Erkrankung, passend zu ihrem insgesamt pragmatischen Naturell.</p>
        <p class="vb-intro"><strong>c) Tod im Oktober 2016:</strong>
        Tabei starb im Alter von 77 Jahren, vier Jahre nach der Diagnose, nachdem sie bis
        kurz zuvor aktiv geblieben war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Vermächtnis, das die Krankheit nicht dominierte:</strong>
        Tabeis öffentliches Bild blieb bis zum Tod von ihrer Pionierleistung als
        Bergsteigerin geprägt, nicht von der Krebserkrankung.</p>
        <p class="vb-intro"><strong>b) Vorbildwirkung über den eigenen Tod hinaus:</strong>
        Ihr Umgang mit der Diagnose wurde in Nachrufen wiederholt als Beispiel für
        ungebrochene Tatkraft im Angesicht schwerer Krankheit gewürdigt.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes Engagement bis zuletzt:</strong>
        Ihre Arbeit mit jungen Menschen aus den Katastrophenregionen setzte sie bis kurz
        vor ihrem Tod fort.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Vorräte an Erfahrung, die bis zuletzt gesammelt wurden:</strong>
        Dieselbe SE7-Logik, sich Erfahrungen und Möglichkeiten als Absicherung
        anzueignen, bestimmte auch Tabeis Reaktion auf die Krebsdiagnose – weiterhin
        Gipfel sammeln, statt sich zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die Pflicht gegenüber der jungen Generation:</strong>
        Die Loyalität des Sechserflügels zeigte sich in der fortgesetzten Arbeit mit
        jungen Menschen aus Fukushima – eine Verpflichtung, die auch die eigene Krankheit
        nicht aufhielt.</p>
        <p class="vb-intro"><strong>c) Praktische Nüchternheit statt dramatischer Inszenierung:</strong>
        Tabeis sachlicher Umgang mit der eigenen Diagnose passt zur SE7-typischen
        Neigung, Bedrohungen praktisch zu handhaben, statt sie zum großen öffentlichen
        Thema zu machen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der weiter erklomm, was er sich vorgenommen hatte:</strong>
        Tabeis gesamtes Leben war von der praktischen Überzeugung geprägt, dass Ziele
        erreicht werden, solange der Körper es zulässt – die Krebsdiagnose änderte diese
        Grundhaltung nicht, sie verkürzte nur den verbleibenden Zeitraum.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-larry-king">Larry
        King</a> (ebenfalls SE7w6) moderierte trotz zahlreicher eigener
        Gesundheitskrisen jahrzehntelang weiter, ohne sein Arbeitspensum grundlegend zu
        reduzieren; Tabei reagierte auf ihre eigene Krebsdiagnose mit derselben
        Grundhaltung – praktisches Weitermachen statt Rückzug. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-larry-king">Krankheitsporträt zu Larry King</a>.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben zwangsläufig zu
        Krebserkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Tabeis Fall zeigen lässt, ist ein
        Muster im Umgang mit einer schweren Diagnose, das bei einer ausgeprägten
        selbsterhaltenden Sieben mit Sechserflügel immer wieder auffällt – eine von vielen
        möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem
        Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Tabei kannte ihr eigenes Muster nicht – die selbsterhaltende Sieben mit
        Sechserflügel sammelt reflexhaft weiter Erfahrungen und erfüllt übernommene
        Verpflichtungen, statt eine schwere Diagnose je zum Anlass für einen geordneten
        Rückzug zu nehmen, und genau dieses Muster lebte sie bis zu ihrem Tod unverändert
        aus. Wer die eigene Neigung, weiterzumachen, nicht als Muster erkennt, kann auch
        angesichts einer Krebsdiagnose nicht innehalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sieben mit Sechserflügel erklärt bei <strong>Junko
        Tabei</strong> vieles am Verlauf ihrer eigenen Erkrankung: eine Frau, deren
        gesamtes Leben auf praktischer Zielverfolgung beruhte, ließ sich selbst von einer
        Krebsdiagnose nicht vom nächsten Gipfel abhalten – der Gorilla, der weiterklettert,
        solange die Kraft reicht.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-junko-tabei", label:"Porträt: Junko Tabei (SE7w6)"},
        {route:"krankheitsportraets-larry-king", label:"Krankheitsporträt: Larry King (SE7w6) – dasselbe praktische Weitermachen"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

export function larryKingKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-larry-king-portrait.jpg" alt="Larry King – Porträt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Larry King</p>
        <p class="krim-portrait-typ">SE7w6 · Selbsterhaltender Typ 7 mit Sechserflügel · 1933–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Tierentsprechung: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Larry King</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-larry-king">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als Talkshow-Moderator.
        Im Vordergrund dieser Seite steht ein Kapitel, das dort nur angerissen wird: King erlitt 1987
        einen schweren Herzinfarkt und eine Fünffach-Bypass-Operation, überstand später
        Prostata- und Lungenkrebs (beide 2017), einen weiteren Herzinfarkt mit
        Stent-Behandlung (2019) und einen Schlaganfall mit mehrwöchigem Koma – ehe er 2021
        im Alter von 87 Jahren an einer Sepsis infolge einer COVID-19-Erkrankung starb.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>King</strong> ist dem <strong>selbsterhaltenden Typ 7 mit
        Sechserflügel</strong> zugeordnet. Naranjo nannte die selbsterhaltende Sieben
        <em>Familie</em>: Sie schafft sich ihr eigenes Nest – einen Kreis aus Menschen,
        Ritualen und Freuden, der ihr Sicherheit gibt, nicht durch Kontrolle wie die Acht
        oder Regeln wie die Eins, sondern durch Verbindung und Geborgenheit. Der
        Sechserflügel bringt Loyalität und Wachsamkeit hinzu – Kings jahrzehntelange
        Sendung wurde selbst zu einer Art beständiger Familie, die er trotz wiederholter
        schwerer Erkrankungen kaum aufgeben wollte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein schwerer Herzinfarkt mit 54:</strong>
        1987 erlitt King einen schweren Herzinfarkt, gefolgt von einer
        Fünffach-Bypass-Operation – ein einschneidendes Ereignis mitten in seiner aufsteigenden
        Karriere als landesweit bekannter Talkshow-Moderator.</p>
        <p class="vb-intro"><strong>b) Eine Stiftung als direkte Reaktion:</strong>
        Kurz nach seiner Genesung gründete King die Larry King Cardiac Foundation, die
        bedürftigen Herzpatienten finanzielle Unterstützung bietet – die eigene Krankheit
        wurde direkt in ein Projekt für andere übersetzt.</p>
        <p class="vb-intro"><strong>c) Eine chronische Erkrankung kommt hinzu:</strong>
        1995 kam die Diagnose Typ-2-Diabetes hinzu – eine weitere dauerhafte gesundheitliche
        Belastung neben der bereits bestehenden Herzerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwei Krebsdiagnosen im selben Jahr:</strong>
        2017, im Alter von 84 Jahren, wurde bei King sowohl Prostatakrebs als auch
        Lungenkrebs diagnostiziert – Letzterer erforderte die operative Entfernung eines
        Tumors aus der Lunge.</p>
        <p class="vb-intro"><strong>b) Ein weiterer Herzinfarkt und ein Schlaganfall:</strong>
        2019 erlitt King einen erneuten Herzinfarkt, behandelt mit Stents in den
        Herzkranzgefäßen, gefolgt wenige Monate später von einem Schlaganfall, der ihn
        mehrere Wochen ins Koma versetzte.</p>
        <p class="vb-intro"><strong>c) Weiterhin medial aktiv bis in die späten 2010er-Jahre:</strong>
        Trotz dieser Häufung schwerer Diagnosen moderierte King bis kurz vor seinem Tod die
        Sendung <em>Larry King Now</em> auf Ora TV/Hulu – über sechzig Jahre journalistische
        Tätigkeit, unterbrochen, aber nie beendet von der eigenen Krankheitsgeschichte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Rückkehr ins Studio nach jeder Krise:</strong>
        Nach dem Herzinfarkt 1987, nach den Krebsdiagnosen 2017, nach Herzinfarkt und
        Schlaganfall – King kehrte jedes Mal zu seiner Sendung zurück, solange es körperlich
        irgend möglich war.</p>
        <p class="vb-intro"><strong>b) Die Sendung als beständiger, sicherer Rahmen:</strong>
        Über Jahrzehnte war das Studio, das Gespräch, das immer gleiche Format sein
        verlässlicher Ankerpunkt – für die selbsterhaltende Sieben mit Sechserflügel wurde
        die eigene Arbeit selbst zu einer Art Familie, die Sicherheit gab.</p>
        <p class="vb-intro"><strong>c) Offener Umgang mit der eigenen Herzkrankheit:</strong>
        Statt seine Herzerkrankung zu verbergen, machte King sie öffentlich und gründete
        eine Stiftung dafür – Krankheit wurde zu einem Thema, über das er offen sprach,
        nicht zu etwas, das er versteckte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Vermächtnis der medizinischen Unterstützung:</strong>
        Die Larry King Cardiac Foundation existiert bis heute und hat seit ihrer Gründung
        vielen bedürftigen Herzpatienten geholfen – eine direkte, bleibende Folge seiner
        eigenen Diagnose von 1987.</p>
        <p class="vb-intro"><strong>b) Über sechzig Jahre mediale Präsenz trotz wiederholter Krisen:</strong>
        Kings journalistische Karriere überspannte mehr als sechs Jahrzehnte, obwohl er ab
        seinem 54. Lebensjahr mit einer ununterbrochenen Kette gesundheitlicher Krisen lebte
        – Herzinfarkte, Diabetes, zwei Krebsdiagnosen, Schlaganfall.</p>
        <p class="vb-intro"><strong>c) Ein Tod, der zum Symbol wurde:</strong>
        Kings Tod im Januar 2021 an den Folgen von COVID-19 wurde international breit
        wahrgenommen – ein weiterer Fall, in dem eine ohnehin bereits stark vorbelastete
        Gesundheit einer neuen Erkrankung nicht mehr standhielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Weitermachen als Grundreflex:</strong>
        Nach jeder einzelnen Diagnose kehrte King zur Arbeit zurück, sobald es körperlich
        möglich war – ein für die selbsterhaltende Sieben typisches Muster: Das eigene Nest,
        hier die tägliche Sendung, wird nicht kampflos aufgegeben.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel als Wachsamkeit gegenüber dem eigenen Körper:</strong>
        Die Gründung der Cardiac Foundation und der offene Umgang mit der eigenen
        Herzkrankheit zeigen eine wache, vorausschauende Haltung gegenüber Gefahr – typisch
        für den Sechserflügel, der Risiken nicht verdrängt, sondern aktiv adressiert.</p>
        <p class="vb-intro"><strong>c) Öffentlichkeit als Ausdrucksform der eigenen Krankheitserfahrung:</strong>
        Statt seine gesundheitlichen Probleme zu verschweigen, machte King sie explizit zum
        Thema – ein Ausdruck der selbsterhaltenden Sieben, die auch Schwierigkeiten in ein
        gemeinschaftlich geteiltes Anliegen verwandelt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Kette gesundheitlicher Krisen über 34 Jahre:</strong>
        Vom Herzinfarkt 1987 bis zur tödlichen COVID-19-Erkrankung 2021 lebte King mehr als
        drei Jahrzehnte mit wiederkehrenden, ernsthaften gesundheitlichen Bedrohungen – und
        kehrte nach jeder einzelnen zur Arbeit zurück.</p>
        <p class="vb-intro"><strong>b) Die eigene Sendung als Familienersatz, der Sicherheit gab:</strong>
        Für einen Mann, dessen berufliches Leben aus jahrzehntelangen Nachtsendungen und
        beständigem Kontakt mit Gästen bestand, wurde die Arbeit selbst zu jenem
        verlässlichen Nest, das Naranjo für die selbsterhaltende Sieben beschrieb.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine Kette von Erkrankungen, die das eigene Nest bedrohten?</strong>
        Für eine selbsterhaltende Sieben mit Sechserflügel, deren Sicherheit an einem
        beständigen, vertrauten Rahmen hängt, lässt sich in der wiederholten Bedrohung
        dieses Rahmens durch eigene Krankheit eine Zuspitzung des eigenen Lebensmusters
        lesen: Jede neue Diagnose war ein Angriff auf das eigene Nest – und jedes Mal
        kehrte King so schnell wie möglich in dieses Nest zurück, um es nicht kampflos
        aufzugeben. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sieben mit Sechserflügel
        zwangsläufig zu solchen Krankheitsketten führt – <strong>jeder Mensch kann jede
        Krankheit bekommen, unabhängig vom Subtyp.</strong> Kings gesundheitliche Probleme
        sind zudem eng mit klassischen kardiovaskulären Risikofaktoren verbunden
        (jahrzehntelanges Rauchen bis in die 1980er-Jahre, jahrzehntelanger Workaholismus mit
        Nachtschichten), nicht rein psychosomatisch zu erklären. Was sich an seinem Fall
        zeigen lässt, ist ein Muster im Umgang mit wiederholter Krankheit, das bei einer
        ausgeprägten selbsterhaltenden Sieben mit Sechserflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        King kannte, wie die meisten Menschen, sein Enneagramm-Muster nicht bewusst. Ohne dieses Wissen fand seine Leidenschaft und Motivation keinerlei Widerstand, statt dass rechtzeitig die Notbremse gezogen wurde – ein Zug, der ihn beruflich groß machte, ihn zugleich aber immer wieder über die Grenze seiner Gesundheit trieb. Wer das eigene Muster erkennt, kann bewusst gegensteuern; wer es nicht kennt, wiederholt es, bis der Körper die Grenze setzt, die der Mensch selbst nicht zog.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sieben mit Sechserflügel bestätigt sich bei <strong>Larry
        King</strong> noch einmal in der Beharrlichkeit, mit der er nach jeder einzelnen von
        vier Jahrzehnten gesundheitlicher Krisen zu seinem eigenen Nest, seiner Sendung,
        zurückkehrte. Der Gorilla, der jedes Gespräch zu einem sicheren Ort machte, verteidigte
        bis zuletzt genau diesen einen Ort – bis eine Krankheit kam, die selbst diese über
        Jahrzehnte bewahrte Sicherheit nicht mehr zuließ.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-larry-king", label:"Porträt: Larry King (SE7w6) – Lebenswerk"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se7", label:"Subtyp-Profil SE7"},
      ])}
    </div>
  `);
}

export function marcelProustKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marcel-proust-portrait.jpg" alt="Marcel Proust" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marcel Proust</p>
        <p class="krim-portrait-typ">SO4w5 · Sozialer Typ 4 mit Fünferflügel · 1871–1922</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marcel Proust</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Diese Seite vertieft ein Kapitel, das dort angedeutet wird: ein
        lebenslanges, schweres Asthma, das ihn zunehmend in sein legendäres, korkverkleidetes
        Zimmer zwang und ihn schließlich mit nur 51 Jahren tötete – während er buchstäblich bis
        zum letzten Atemzug an seinem Lebenswerk arbeitete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Proust</strong> ist dem <strong>sozialen Typ 4 mit Fünferflügel</strong>
        zugeordnet. Die soziale Vier braucht die Gruppe, um an ihr die eigene, tragische
        Einzigartigkeit sichtbar auszuleben, statt im Verborgenen zu leiden. Der Fünferflügel
        bringt den Drang hinzu, das eigene Erleben nicht nur zu durchleben, sondern analytisch
        bis in die feinsten Verästelungen zu sezieren. Genau dieses Muster lässt sich bis in
        seinen Umgang mit der eigenen Krankheit nachverfolgen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der erste schwere Asthmaanfall mit neun Jahren:</strong>
        1880 erlitt Proust bei einem Spaziergang im Bois de Boulogne einen schweren
        Asthmaanfall, der ihn fast erstickte – von diesem Moment an begleitete ihn die
        Krankheit bis zu seinem Tod.</p>
        <p class="vb-intro"><strong>b) Eine außergewöhnliche körperliche Empfindlichkeit:</strong>
        Schon als Kind reagierte Proust extrem auf Staub, Blütenpollen und Parfüm – Auslöser,
        die für die meisten Menschen harmlos waren, aber bei ihm lebensbedrohliche
        Atemnot auslösen konnten.</p>
        <p class="vb-intro"><strong>c) Ein Leben, das sich zunehmend nach der Krankheit richtete:</strong>
        Schon in jungen Jahren musste Proust seinen Alltag – Reisen, Verabredungen,
        gesellschaftliche Verpflichtungen – nach den Launen seines Asthmas ausrichten, lange
        bevor er sich vollständig zurückzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Rückzug ins korkverkleidete Zimmer:</strong>
        Um sich gegen Straßenlärm, Staub und Pollen abzuschirmen, ließ Proust sein
        Schlafzimmer am Boulevard Haussmann mit Kork auskleiden und verbrachte dort die letzten
        Jahre seines Lebens fast ausschließlich.</p>
        <p class="vb-intro"><strong>b) Umgekehrter Tagesrhythmus:</strong>
        Proust schlief tagsüber und arbeitete nachts, wenn die Stadt ruhiger und die Luft
        weniger reizend war – ein Rhythmus, der seine soziale Isolation weiter vertiefte.</p>
        <p class="vb-intro"><strong>c) Selbstmedikation mit fragwürdigen Mitteln:</strong>
        Proust behandelte seine Anfälle mit Räucherpulvern, Koffein- und
        Adrenalin-Injektionen sowie einer Vielzahl damals gängiger, teils zweifelhafter Mittel
        – eine verzweifelte, lebenslange Selbstbehandlung ohne wirksame medizinische Therapie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ein Wettlauf gegen die Zeit:</strong>
        Proust wusste, dass seine Lungenkrankheit ihn früh töten würde, und arbeitete an
        „Auf der Suche nach der verlorenen Zeit" mit einer Intensität, die kaum Pausen zuließ –
        das Werk musste vollendet werden, bevor der Körper endgültig versagte.</p>
        <p class="vb-intro"><strong>b) Korrekturen auf dem Sterbebett:</strong>
        Noch in seinen letzten Lebenstagen korrigierte Proust Druckfahnen und diktierte
        Ergänzungen – die Arbeit am Werk endete buchstäblich erst mit seinem letzten Atemzug.</p>
        <p class="vb-intro"><strong>c) Tod am 18. November 1922 in Paris:</strong>
        Proust starb im Alter von 51 Jahren an einer Lungenentzündung, die sich aus einer
        Bronchitis auf seiner durch Jahrzehnte des Asthmas geschwächten Lunge entwickelt hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">Eine Parallele im gleichen Subtyp: Gustav Mahler</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch <a href="javascript:void(0)" data-route="beruehmte-gustav-mahler">Gustav Mahler</a>
        (SO4w5) wusste – in seinem Fall durch eine Herzklappenerkrankung –, dass er bald sterben
        würde, und verwandelte dieses Wissen in sein eindringlichstes Spätwerk, statt sich zu
        schonen. Sein
        <a href="javascript:void(0)" data-route="krankheitsportraets-gustav-mahler">eigenes Krankheitsporträt</a>
        zeigt dasselbe SO4w5-Muster wie bei Proust: Das Bewusstsein der eigenen Sterblichkeit
        wird nicht verdrängt, sondern in einen Wettlauf gegen die Zeit verwandelt, der das
        Spätwerk zur eindringlichsten Aussage des gesamten Schaffens macht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das um seinen eigenen Tod wusste:</strong>
        Kaum ein anderes literarisches Großwerk entstand so bewusst im Wissen um die eigene
        begrenzte Zeit – die Sterblichkeit des Autors ist in „Auf der Suche nach der verlorenen
        Zeit" spürbar mitgeschrieben.</p>
        <p class="vb-intro"><strong>b) Posthume Vollendung:</strong>
        Die letzten Bände des Werks wurden erst nach Prousts Tod veröffentlicht – er hatte das
        Manuskript im Wesentlichen fertiggestellt, aber die letzte redaktionelle Politur blieb
        anderen überlassen.</p>
        <p class="vb-intro"><strong>c) Ein Rückzug, der zur literarischen Methode wurde:</strong>
        Was als körperliche Notwendigkeit begann – die Isolation im korkverkleideten Zimmer –,
        wurde zur Bedingung seines Schreibens: erst aus der Distanz zur Gesellschaft heraus
        konnte er sie so genau beschreiben.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Gürteltier, das sich einpanzerte, um zu überleben:</strong>
        Der Kork an den Wänden war buchstäblich ein Panzer gegen die Außenwelt – eine
        Schutzhülle, die Proust brauchte, um überhaupt schreiben zu können.</p>
        <p class="vb-intro"><strong>b) Dringliche Bedürftigkeit statt distanzierter Beobachtung:</strong>
        In seinen letzten kranken Jahren verlangte Proust von seiner Haushälterin Céleste
        Albaret ständige Erreichbarkeit, auch mitten in der Nacht – ein fast klammerndes
        Bedürfnis nach Nähe und Fürsorge, das der sonst distanziert-analytischen Beobachterrolle
        der Vier mit Fünferflügel entgegenlief.</p>
        <p class="vb-intro"><strong>c) Analytische Distanz bis zum Schluss:</strong>
        Selbst im eigenen Sterben blieb Proust der genaue Beobachter – er soll auf dem
        Totenbett Notizen zum eigenen körperlichen Verfall diktiert haben, in der Absicht, sie
        für eine Sterbeszene seines Romans zu verwenden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Über vier Jahrzehnte mit derselben Krankheit:</strong>
        Von seinem neunten Lebensjahr bis zu seinem Tod mit 51 begleitete das Asthma jede Phase
        seines Lebens – kein plötzlicher Einbruch, sondern eine lebenslange, sich stetig
        verschärfende Beziehung zur eigenen Verletzlichkeit.</p>
        <p class="vb-intro"><strong>b) Wenn die Vier unter chronischem Stress zur Zwei wird:</strong>
        Die zunehmend dringliche, fast klammernde Bedürftigkeit nach der ständigen
        Erreichbarkeit seiner Haushälterin in den letzten Lebensjahren zeigt ein Muster, das
        über die übliche Zurückgezogenheit der Vier mit Fünferflügel hinausgeht. Wer über
        Jahrzehnte in chronischer Krankheit lebt, bewegt sich zunehmend entlang seiner
        Stresslinie in Richtung seines Stresspunkts – bei der Vier ist das die Zwei. Genau
        dieses bedürftige, um Fürsorge werbende Verhalten in seinen letzten kranken Jahren
        erinnert eher an die Zwei als an die sonst distanziert-analytische Grundhaltung der
        Fünferflügel-Vier – bei unverändertem Kerntyp SO4w5.</p>
        <p class="vb-intro"><strong>c) Rückzug als Schutz und als Kunstform zugleich:</strong>
        Das korkverkleidete Zimmer war zugleich medizinische Notwendigkeit und literarisches
        Laboratorium – die Isolation, die der Körper erzwang, wurde zur Bedingung für das
        Werk, das ohne sie nie in dieser Tiefe hätte entstehen können.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet die Atmung?</strong>
        Für eine soziale Vier, deren gesamte künstlerische Existenz auf der Fähigkeit beruht,
        sich der Welt auszusetzen und sie zugleich mit analytischer Distanz zu erfassen, liegt
        eine Deutung nahe: Ausgerechnet jenes Organ, das die unmittelbarste Verbindung zur
        Außenwelt herstellt, der Atem, wurde zur Quelle permanenter Bedrohung – und zwang
        Proust in einen Rückzug, der seine Beobachterrolle noch verschärfte, statt sie
        aufzulösen. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Asthma führt –
        <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom Subtyp.</strong> Was
        sich an Prousts Fall zeigen lässt, ist ein Muster im Umgang mit einer chronischen
        Krankheit, das bei einer ausgeprägten sozialen Vier mit Fünferflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Proust kannte sein eigenes Muster nicht – die soziale Vier mit Fünferflügel verwandelt
        Leiden reflexhaft in analytisch durchdrungene Kunst, statt sich zu schonen, und genau
        das tat er bis zur letzten Zeile seines Lebenswerks. Wer die eigene Neigung, sich
        selbst und die eigene Krankheit vor allem als Beobachtungsmaterial zu behandeln, nicht
        als Muster erkennt, kann sie auch nicht rechtzeitig durch echte Selbstfürsorge
        ausgleichen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Prousts</strong> soziale Vier mit
        Fünferflügel noch einmal ablesen: eine lebenslange Krankheit, die zur Bedingung eines
        der bedeutendsten Werke der Weltliteratur wurde, und ein Autor, der noch auf dem
        Sterbebett das eigene Sterben zu literarischem Material machte. Das Gürteltier, das
        sich einpanzerte, um in der Abgeschiedenheit umso genauer hinsehen zu können – und
        dessen letzter Blick dem eigenen Tod galt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-marcel-proust", label:"Porträt: Marcel Proust (SO4w5) – Lebenswerk"},
        {route:"krankheitsportraets-gustav-mahler", label:"Krankheitsporträt: Gustav Mahler (SO4w5) – derselbe Wettlauf gegen die Zeit"},
        {route:"krankheitsportraets-edvard-munch", label:"Krankheitsporträt: Edvard Munch (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function michaelSchumacherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-schumacher-portrait.jpg" alt="Michael Schumacher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Schumacher</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · geb. 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Schumacher</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-michael-schumacher">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk als siebenmaliger
        Formel-1-Weltmeister und seine Typstruktur im Allgemeinen, mit einem kurzen Verweis auf
        den Skiunfall 2013. Diese Seite vertieft dieses Kapitel: ein schweres
        Schädel-Hirn-Trauma, mehrere Notoperationen, monatelanges künstliches Koma – und eine
        seither beispiellos konsequente, von der Familie durchgesetzte vollständige
        Abschottung der Öffentlichkeit von seinem Gesundheitszustand.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schumacher</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet. Als Kontratyp der Sechs begegnet die SX6 der eigenen Angst nicht mit
        Rückzug, sondern mit Angriff – Sicherheit entsteht durch das Dominieren der Gefahr,
        nicht durch ihre Vermeidung. Genau dieses Muster – Kontrolle über die Bedrohung
        gewinnen, notfalls durch vollständige Abschottung – bestimmt bis heute den Umgang
        seines engsten Umfelds mit seiner Krankheit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Der Sturz am 29. Dezember 2013:</strong>
        Schumacher fuhr beim Skifahren im französischen Méribel mit seinem damals
        vierzehnjährigen Sohn Mick abseits der markierten Piste, verlor die Kontrolle und
        stürzte über Felsen – ein Unfall, der zunächst harmlos wirkte, sich aber innerhalb von
        Minuten als lebensbedrohlich herausstellte.</p>
        <p class="vb-intro"><strong>b) Ein Helm, der den Aufprall nicht vollständig abfangen konnte:</strong>
        Trotz Helms erlitt Schumacher beim Aufprall auf einen Felsen ein schweres
        Schädel-Hirn-Trauma – Berichten zufolge könnte eine am Helm befestigte Kamerahalterung
        zur Schwere der Verletzung beigetragen haben.</p>
        <p class="vb-intro"><strong>c) Sofortiger Transport in eine spezialisierte Klinik:</strong>
        Schumacher wurde umgehend in das auf Schädel-Hirn-Traumata spezialisierte
        Universitätsklinikum Grenoble gebracht, wo eine neurochirurgische Notbehandlung
        eingeleitet wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Mehrere Notoperationen zur Druckentlastung:</strong>
        Die behandelnden Ärzte Jean-François Payen und Stephan Chabardes entfernten in
        mehreren Eingriffen ein Hämatom und arbeiteten primär daran, den lebensgefährlichen
        Hirndruck durch die entstandenen Einblutungen und Ödeme zu senken.</p>
        <p class="vb-intro"><strong>b) Monatelanges künstliches Koma:</strong>
        Um dem Gehirn die bestmögliche Erholung zu ermöglichen, wurde Schumacher über Wochen
        und Monate in einem künstlichen Koma gehalten – ein Zustand, der weit über die für
        Schädel-Hirn-Traumata übliche Dauer hinausging und den Ernst der Verletzung
        widerspiegelte.</p>
        <p class="vb-intro"><strong>c) Verlegung und Entlassung im Juni 2014:</strong>
        Erst im Juni 2014, rund ein halbes Jahr nach dem Unfall, wurde Schumacher aus der
        stationären Behandlung entlassen – zunächst in eine Spezialklinik in Lausanne, später
        in die häusliche Pflege im Kreis seiner Familie.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Eine beispiellose mediale Abschottung:</strong>
        Seit seiner Entlassung 2014 hat die Familie – allen voran seine Frau Corinna – keine
        einzige medizinische Detailauskunft über seinen Gesundheitszustand öffentlich gemacht,
        eine Konsequenz, die in der Geschichte prominenter Krankheitsfälle ihresgleichen
        sucht.</p>
        <p class="vb-intro"><strong>b) Wenige, sorgfältig dosierte Lebenszeichen:</strong>
        Vereinzelte Aussagen aus dem engsten Umfeld – etwa Corinna Schumachers Satz „Er ist
        hier, er ist anders, aber er ist da" – sind über Jahre praktisch die einzigen
        öffentlichen Informationen geblieben, ergänzt durch knappe Bemerkungen von Bruder Ralf
        Schumacher oder Tochter Gina Maria.</p>
        <p class="vb-intro"><strong>c) Rechtliche Schritte gegen Spekulationen:</strong>
        Die Familie ging wiederholt juristisch gegen Medien vor, die unautorisierte Berichte,
        Fotos oder – in einem Fall 2023 – ein KI-generiertes Interview über seinen Zustand
        veröffentlichten, und setzte damit die Abschottung auch aktiv durch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Der öffentlichste Mensch des Motorsports wird zum unsichtbarsten:</strong>
        Kaum ein Kontrast könnte größer sein als der zwischen dem Schumacher, der jahrzehntelang
        im grellen Scheinwerferlicht der Formel 1 stand, und dem Mann, über den seit über zehn
        Jahren praktisch nichts mehr an die Öffentlichkeit dringt.</p>
        <p class="vb-intro"><strong>b) Spekulationen als Dauerzustand:</strong>
        Die vollständige Informationssperre hat über die Jahre ein anhaltendes mediales Vakuum
        geschaffen, das immer wieder durch unbestätigte Gerüchte – etwa über
        Stammzelltherapien in Paris – gefüllt wurde, ohne dass die Familie diese je bestätigte
        oder dementierte.</p>
        <p class="vb-intro"><strong>c) Ein Dokumentarfilm als einziger autorisierter Einblick:</strong>
        Die 2021 erschienene Netflix-Dokumentation „Schumacher" bot erstmals einen von der
        Familie autorisierten, aber weiterhin sehr zurückhaltenden Rückblick auf sein Leben –
        ohne aktuelle Bilder oder Informationen zu seinem gegenwärtigen Zustand zu zeigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Wolf, dessen Rudel jetzt für ihn kämpft:</strong>
        Die SX6-typische Strategie, Bedrohung durch Dominanz statt durch Rückzug zu begegnen,
        zeigt sich hier verschoben auf die Familie: Wo Schumacher selbst nicht mehr kämpfen
        kann, übernimmt sein engstes Umfeld exakt dieselbe kompromisslose Haltung – Kontrolle
        über die Bedrohung (in diesem Fall: die Öffentlichkeit) durch Härte statt durch
        Nachgeben.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und der Rückgriff auf das schönste Bild:</strong>
        Statt eines aktuellen, möglicherweise belastenden Bildes wählt sein Umfeld konsequent
        die Erinnerung an den siegreichen, lebendigen Schumacher – eine Haltung, die zur
        Fähigkeit des Siebenerflügels passt, selbst im Angesicht von Verlust an der Freude und
        am Licht festzuhalten, statt sich in der Schwere zu verlieren.</p>
        <p class="vb-intro"><strong>c) Absolute Konsequenz statt halber Maßnahmen:</strong>
        Wie schon in seiner aktiven Karriere kennt auch der Umgang mit seiner Krankheit keine
        halben Lösungen: keine teilweise Offenheit, kein gelegentliches Update, sondern eine
        vollständige, über ein Jahrzehnt konsequent durchgehaltene Abschottung – die SX6w7 in
        ihrer radikalsten, jetzt stellvertretend von der Familie gelebten Form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Vom Kopf, der jede Kurve auswendig kannte, zum Kopf, der geschützt werden muss:</strong>
        Schumachers gesamte Karriere beruhte auf einem außergewöhnlich präzisen, hochtrainierten
        Kopf – Streckenkenntnis, Reaktionsgeschwindigkeit, taktisches Denken. Ausgerechnet
        dieses Organ wurde beim Sturz 2013 zum Ort der schwersten Verletzung.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet außerhalb der Piste, bei einem Mann, dessen ganzes Leben Risikokontrolle war?</strong>
        Für eine sexuelle Sechs, deren gesamtes Berufsleben aus der präzisen, hochtrainierten
        Kontrolle extremer Geschwindigkeit auf abgesperrten Rennstrecken bestand, liegt eine
        Deutung nahe: Der folgenschwere Unfall ereignete sich ausgerechnet in einem
        unkontrollierten, nicht abgesicherten Umfeld – abseits der Piste, ohne die Sicherheitsnetze
        eines Formel-1-Cockpits. Diese Deutung ist eine plausible Interpretation, kein belegter
        medizinischer oder biografischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu schweren Unfällen
        führt – <strong>jeder Mensch kann jeden Unfall erleiden und jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Schumachers Fall zeigen lässt, ist ein
        Muster im Umgang mit einer plötzlichen, existenziellen Krise, das bei einer
        ausgeprägten sexuellen Sechs mit Siebenerflügel und ihrem engsten Umfeld immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Schumacher oder seine Familie sein Enneagramm-Muster je
        bewusst kannten. Dennoch lässt sich an seinem Fall ablesen, wie tief das
        SX6-typische Prinzip „Sicherheit durch Kontrolle der Bedrohung" auch nach der
        Katastrophe fortwirkt – nicht mehr im Cockpit, sondern in der radikalen, bis heute
        durchgehaltenen Kontrolle darüber, was die Welt über ihn erfahren darf. Wer sein Leben
        lang gelernt hat, Gefahr durch Dominanz zu begegnen, überträgt dieses Muster auch dann,
        wenn die Gefahr nicht mehr die Rennstrecke, sondern die Öffentlichkeit selbst ist.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Schumachers</strong> sexuelle Sechs mit
        Siebenerflügel noch einmal ablesen: eine plötzliche, existenzielle Bedrohung, der mit
        derselben Kompromisslosigkeit begegnet wird, die einst seine Karriere prägte – nur dass
        die Kontrolle jetzt nicht mehr ihm selbst gehört, sondern von seinem Rudel
        stellvertretend ausgeübt wird. Der Wolf, der einst das Tempo der ganzen Formel 1
        vorgab, wird seit über zehn Jahren von genau jenem Rudel geschützt, das er sich selbst
        aufgebaut hatte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-michael-schumacher", label:"Porträt: Michael Schumacher (SX6w7) – Lebenswerk"},
        {route:"krankheitsportraets-avril-lavigne", label:"Krankheitsporträt: Avril Lavigne (SX6w7) – gleicher Subtyp, entgegengesetzte Bewältigungsstrategie"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function neilArmstrongKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-neil-armstrong-portrait.jpg" alt="Neil Armstrong" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Neil Armstrong</p>
        <p class="krim-portrait-typ">SE6w5 · Selbsterhaltender Typ 6 mit Fünferflügel · 1930–2012</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Neil Armstrong</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-neil-armstrong">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um seine
        Landung auf dem Mond 1969 und seinen anschließenden Rückzug ins Private. Diese
        Seite vertieft ein Kapitel, das dort kurz gestreift wird: eine über zwei
        Jahrzehnte bestehende koronare Herzkrankheit, die 2012 zu einer Bypass-Operation
        und kurz darauf zu seinem Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Armstrong</strong> ist dem <strong>selbsterhaltenden Typ 6 mit
        Fünferflügel</strong> zugeordnet. Die SE6 sucht Sicherheit durch Routine und
        ein vertrautes, kontrolliertes Umfeld; der Fünferflügel bringt den Rückzug ins
        Fachliche und die Überzeugung hinzu, dass Sicherheit vor allem durch Wissen und
        Beherrschung entsteht, nicht durch soziale Offenlegung. Genau diese Kombination –
        ein ruhiges, zurückgezogenes Leben, in dem selbst die eigene Erkrankung als
        rein technisches, privat zu lösendes Problem behandelt wird – bestimmte, wie
        Armstrong mit seiner jahrelangen Herzkrankheit umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Herzinfarkt 1991 beim Skifahren:</strong>
        Im Alter von 61 Jahren erlitt Armstrong beim Skifahren in Aspen, Colorado, einen
        Herzinfarkt – das früheste dokumentierte kardiale Ereignis, gut zwei Jahrzehnte
        vor seinem Tod.</p>
        <p class="vb-intro"><strong>b) Weitgehend zurückgezogenes Leben ohne öffentliche Berichte über die Erkrankung:</strong>
        Passend zu seinem ohnehin öffentlichkeitsscheuen Lebensstil drang über die
        folgenden zwei Jahrzehnte wenig über seinen tatsächlichen Gesundheitszustand nach
        außen.</p>
        <p class="vb-intro"><strong>c) Fortschreitende koronare Herzkrankheit über zwei Jahrzehnte:</strong>
        Der Herzinfarkt 1991 markierte den Beginn einer chronischen, sich über Jahre
        weiter entwickelnden koronaren Herzerkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Nicht bestandener Belastungstest im August 2012:</strong>
        Am 6. August 2012 fiel Armstrong bei einem kardiologischen Belastungstest auf –
        ein akuter Hinweis auf mehrere Verengungen der Herzkranzgefäße.</p>
        <p class="vb-intro"><strong>b) Notfall-Vierfach-Bypass-Operation:</strong>
        Wenige Tage später unterzog sich Armstrong einer dringlichen Vierfach-Bypass-
        Operation an den Herzkranzgefäßen.</p>
        <p class="vb-intro"><strong>c) Komplikationen nach der Operation:</strong>
        Nach der zunächst erfolgreich verlaufenen Operation traten Komplikationen auf, an
        denen Armstrong am 25. August 2012 starb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Keine öffentliche Ankündigung der Operation im Vorfeld:</strong>
        Passend zu Armstrongs lebenslanger Zurückhaltung gegenüber der Öffentlichkeit gab
        es vor der Operation keine breite mediale Vorabberichterstattung.</p>
        <p class="vb-intro"><strong>b) Familiäre statt öffentliche Kommunikation:</strong>
        Informationen über seinen Gesundheitszustand kamen überwiegend über die eigene
        Familie, nicht über selbst initiierte öffentliche Stellungnahmen.</p>
        <p class="vb-intro"><strong>c) Spätere juristische Aufarbeitung der Behandlung:</strong>
        Nach seinem Tod führte die Behandlung zu einem millionenschweren juristischen
        Vergleich, der Fragen zur medizinischen Versorgung nach der Operation aufwarf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein weltweit beachteter Todesfall:</strong>
        Armstrongs Tod nach der Operation löste internationale Anteilnahme aus – als
        erster Mensch auf dem Mond blieb er bis zuletzt eine globale Symbolfigur.</p>
        <p class="vb-intro"><strong>b) Nachträgliche mediale Aufarbeitung der Behandlung:</strong>
        Fachmedien und Gesundheitsjournalisten diskutierten nach seinem Tod ausführlich
        die Umstände der Operation und der anschließenden Komplikationen.</p>
        <p class="vb-intro"><strong>c) Ein öffentliches Bild, das von Zurückhaltung geprägt blieb:</strong>
        Auch die Berichterstattung über seine letzte Krankheit blieb im Vergleich zu
        anderen Prominenten ungewöhnlich zurückhaltend – passend zu seinem gesamten
        öffentlichen Auftreten.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug als Sicherheitsstrategie, auch bei der eigenen Krankheit:</strong>
        Dieselbe SE6-Neigung, Sicherheit im Vertrauten und Zurückgezogenen zu suchen, die
        Armstrongs gesamtes Leben nach 1969 prägte, bestimmte auch, wie wenig über seine
        eigentliche Herzerkrankung nach außen drang.</p>
        <p class="vb-intro"><strong>b) Der Fünferflügel und die Behandlung der eigenen Krankheit als Fachfrage:</strong>
        Der Rückzug ins Fachliche, den der Fünferflügel mitbringt, zeigte sich darin,
        dass Armstrong sich der riskanten Operation offenbar wie einem technischen
        Problem näherte – sachlich, ohne öffentlich sichtbares Drama, ohne emotionale
        Inszenierung.</p>
        <p class="vb-intro"><strong>c) Kontrolle durch Zurückhaltung statt durch Offenlegung:</strong>
        Anders als andere SE6-Porträts dieses Kompasses, die ihre Angst in Sprache
        übersetzen, kontrollierte Armstrong seine eigene Verletzlichkeit vor allem durch
        Schweigen – eine Kontrolle, die der Fünferflügel durch Wissen und Distanz sucht,
        nicht durch Nähe.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Herz, das so still blieb wie sein späteres Leben:</strong>
        Armstrongs gesamtes Leben nach der Mondlandung war von dem Wunsch geprägt,
        unauffällig zu bleiben – seine über zwei Jahrzehnte bestehende Herzkrankheit
        blieb, passend zu diesem Muster, bis zuletzt weitgehend unsichtbar für die
        Öffentlichkeit.</p>
        <p class="vb-intro"><strong>b) Ein Kontrast im gleichen Kerntyp, anderer Flügel:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-woody-allen">Woody
        Allen</a> (SE6w7, mit Siebenerflügel) übersetzte seine eigene, meist imaginierte
        Gesundheitsangst jahrzehntelang öffentlich in Sprache und Komik – er trat mit
        seiner Neurose bewusst in die Öffentlichkeit. Armstrong, mit demselben Kerntyp,
        aber Fünferflügel statt Siebenerflügel, ging mit seiner tatsächlichen, realen
        Herzerkrankung den entgegengesetzten Weg – er machte sie mit sich selbst aus,
        ohne sie je zum Thema zu machen. Derselbe SE6-Kern, dieselbe Grundangst vor dem
        eigenen Körper, aber zwei völlig verschiedene Flügel-Antworten: der Siebenerflügel
        sucht die Bühne, der Fünferflügel den Rückzug. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-woody-allen">Krankheitsporträt zu Woody Allen</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet das Herz?</strong>
        Für einen selbsterhaltenden Sechser mit Fünferflügel, dessen gesamtes Leben auf
        der Übersetzung von Können in stille, verlässliche Kompetenz beruhte, liegt eine
        Deutung nahe: Ausgerechnet jenes Organ, das im übertragenen Sinn für Mut und
        Hingabe steht, wurde zum Ort einer Erkrankung, die er – ganz Fünferflügel – wie
        ein rein technisches Problem behandelte, das mit niemandem geteilt werden musste.
        Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sechs zwangsläufig zu
        Herzkrankheiten führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Armstrongs Fall zeigen lässt, ist ein
        Muster im Umgang mit einer verschwiegenen chronischen Erkrankung, das bei einer
        ausgeprägten selbsterhaltenden Sechs mit Fünferflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Armstrong kannte sein eigenes Muster nicht – die selbsterhaltende Sechs mit
        Fünferflügel sucht reflexhaft Sicherheit im Rückzug und im Verschweigen der
        eigenen Verwundbarkeit, statt sie öffentlich zu machen, und genau dieses Muster
        lebte er bis zu seinem Tod unverändert aus. Wer die eigene Neigung zum stillen
        Rückzug nicht als Muster erkennt, verpasst mitunter den Moment, in dem eine
        offenere Kommunikation über die eigene Gesundheit hilfreich gewesen wäre.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sechs mit Fünferflügel erklärt bei <strong>Neil
        Armstrong</strong> vieles am Umgang mit seiner eigenen Herzkrankheit: ein Mann,
        dessen gesamtes Leben nach dem Mond von Rückzug und Zurückhaltung geprägt war,
        trug auch seine reale körperliche Bedrohung überwiegend im Stillen – das
        Kaninchen, das seinen Bau bis zum letzten Atemzug nicht verlassen wollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-neil-armstrong", label:"Porträt: Neil Armstrong (SE6w5)"},
        {route:"krankheitsportraets-woody-allen", label:"Krankheitsporträt: Woody Allen (SE6w7) – gleicher Kerntyp, entgegengesetzter Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se6", label:"Subtyp-Profil SE6"},
      ])}
    </div>
  `);
}

export function ottoVonBismarckKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-otto-von-bismarck-portrait.jpg" alt="Otto von Bismarck" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Otto von Bismarck</p>
        <p class="krim-portrait-typ">SX6w5 · Sexueller Typ 6 mit Fünferflügel · 1815–1898</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Otto von Bismarck</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-otto-von-bismarck">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk, den Wolf als Tiermotiv und
        seine Typstruktur im Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort nur
        gestreift wird: der Erschöpfungskrise und dem massiven Übergewicht Anfang der 1880er-Jahre,
        der radikalen Behandlung durch Dr. Ernst Schweninger – und der verweigerten Behandlung
        einer Gangrän am Fuß, die zu seinen letzten Lebenswochen 1898 führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Bismarck</strong> ist der <strong>sexuellen Sechs mit Fünferflügel</strong>
        zugeordnet. Naranjo beschrieb die SX6 als Kontratyp der Sechs: Statt sich vor Bedrohung
        zurückzuziehen, begegnet sie ihr mit demonstrativer Stärke – auch wenn die Bedrohung der
        eigene, alternde Körper ist. Der Fünferflügel bringt eine Neigung zu Hypochondrie und
        Rückzug in die eigene Innenwelt, die bei Bismarck in einer strikten Trennung zwischen dem,
        was er öffentlich zeigte, und dem, was er körperlich wirklich durchmachte, sichtbar wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der Jahrzehnte politischer Dauerspannung aufsummierte:</strong>
        Bereits Ende der 1870er-Jahre war Bismarcks Gewicht auf rund 123 Kilogramm angestiegen –
        die Summe jahrzehntelanger Bewältigungsstrategien gegen chronischen Stress: reichhaltiges
        Essen, starkes Rauchen und erheblicher Alkoholkonsum, während er zugleich Reichsgründung,
        Kulturkampf und Sozialistengesetze im Zaum hielt.</p>
        <p class="vb-intro"><strong>b) Nur noch zwei Stunden Arbeitsfähigkeit am Tag:</strong>
        Anfang der 1880er-Jahre schätzte Bismarck selbst ein, nur noch etwa zwei Stunden täglich
        wirklich arbeitsfähig zu sein – für einen Mann, der drei Jahrzehnte lang Europas
        Mächtekonstellationen im Kopf jonglierte, ein dramatischer Einbruch, den er lange Zeit
        nicht öffentlich eingestand.</p>
        <p class="vb-intro"><strong>c) Ein zeitgenössisch belegter Griff zu starken Mitteln:</strong>
        Der Tagebucheintrag einer Bekannten aus dem Jahr 1872 erwähnt, dass der Kanzler Morphium
        nahm – ein früher Hinweis darauf, dass Bismarck gegen Schlaflosigkeit, Nervenleiden und
        Schmerzen bereits Jahre vor der offenen Erschöpfungskrise zu starken Mitteln griff, statt
        die zugrunde liegende Überlastung anzugehen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Weg zu Dr. Schweninger über den eigenen Sohn:</strong>
        Bismarck kam über seinen Sohn Wilhelm, der selbst unter adipositasbedingten Herz- und
        Gichtproblemen litt, mit dem jungen bayerischen Arzt Ernst Schweninger in Kontakt – 1882
        brachte Wilhelm ihn auf das Gut Varzin in Hinterpommern, im Frühsommer 1883 übernahm
        Schweninger die Behandlung des Kanzlers.</p>
        <p class="vb-intro"><strong>b) Ein einfaches, aber radikal konsequentes Regime:</strong>
        Schweningers Rezept war schlicht: Bewegung an frischer Luft, einfache, reduzierte
        Ernährung, deutlich weniger Alkohol und regelmäßiger Schlaf – gegen den erklärten
        Widerstand der etablierten Hofärzte, die auf klassischere Kuren gesetzt hatten.</p>
        <p class="vb-intro"><strong>c) Rund 20 Kilogramm in wenigen Jahren:</strong>
        Von rund 123 Kilogramm im Jahr 1879 sank Bismarcks Gewicht bis 1884 auf etwa 100
        Kilogramm – ein für die Zeit spektakulärer Erfolg, der Schweninger 1884 die Berufung zum
        Leiter der Berliner Dermatologie-Klinik und zum außerordentlichen Professor einbrachte,
        auf Bismarcks eigenes Betreiben hin.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Vertrauen, das nur wenigen Menschen je zuteilwurde:</strong>
        Dass Bismarck – ein Mann, dessen politischer Stil auf tiefem, chronischem Misstrauen
        beruhte – sich einem jungen, in Hofkreisen zunächst belächelten Außenseiterarzt derart
        rückhaltlos anvertraute, ist für die SX6w5 bemerkenswert: Vertrauen wird selten vergeben,
        aber wenn es vergeben wird, dann kompromisslos.</p>
        <p class="vb-intro"><strong>b) Deutlich gesteigerte Aktivität nach der Kur:</strong>
        Nach der erfolgreichen Behandlung wurde Bismarck spürbar aktiver und belastbarer – die
        radikale Umstellung wirkte, wo Jahrzehnte an Selbstüberforderung den Körper zuvor an den
        Rand der Handlungsunfähigkeit gebracht hatten.</p>
        <p class="vb-intro"><strong>c) Ein Muster, das sich nach 1890 wiederholte:</strong>
        Nach der erzwungenen Entlassung 1890 zog sich Bismarck endgültig nach Friedrichsruh
        zurück – wieder mit Klagen über Nervenleiden, Schlaflosigkeit und Verdauungsbeschwerden,
        wieder in der für den Fünferflügel typischen Rückzugshaltung, sobald die politische Bühne
        ihm entzogen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine zweite, endgültige Verschlechterung ab Mitte 1897:</strong>
        Bismarcks Ärzte diagnostizierten Mitte 1897 eine sogenannte Altersbrand-Erkrankung –
        eine chronische Durchblutungsstörung, die zum schmerzhaften Absterben von Gewebe am Fuß
        führte und im Sommer 1898 zunehmend das gesamte Krankheitsbild bestimmte.</p>
        <p class="vb-intro"><strong>b) Rollstuhl, Fieber und wachsende Atemnot:</strong>
        Ab Sommer 1898 verschlechterte sich sein Zustand rasch: Bismarck war zunehmend an den
        Rollstuhl gebunden, litt unter Fieber und einer hinzukommenden Lungenentzündung mit
        schwerer Atemnot – ein körperlicher Verfall, der binnen weniger Wochen jede Genesung
        unmöglich machte.</p>
        <p class="vb-intro"><strong>c) Ein Tod kurz nach Mitternacht:</strong>
        Otto von Bismarck starb am 30. Juli 1898 kurz nach Mitternacht in seinem Schlafzimmer in
        Friedrichsruh, im Alter von 83 Jahren – an den Folgen von Gangrän, Lungenentzündung und
        schweren Verdauungsstörungen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Offenheit für genau einen Vertrauten:</strong>
        Dass ausgerechnet Schweninger, ein junger Außenseiter ohne höfischen Rückhalt, zum
        einzigen Arzt wurde, dem Bismarck wirklich folgte, zeigt die SX6w5 in ihrer seltenen,
        gesunden Form: Kontrolle abzugeben, wenn das Vertrauen wirklich verdient scheint.</p>
        <p class="vb-intro"><strong>b) Dieselbe Härte, die zuvor politische Gegner traf, nun gegen den eigenen Körper:</strong>
        Die Kompromisslosigkeit, mit der Bismarck einst gegen Kulturkampf-Gegner und
        Sozialdemokraten vorging, richtete sich in den letzten Lebensjahren auch gegen die
        eigenen Warnsignale – Schmerzen und Funktionsverlust wurden möglichst lange verdrängt,
        statt ernst genommen zu werden.</p>
        <p class="vb-intro"><strong>c) Rückzug statt öffentlicher Schwäche:</strong>
        Wie schon in früheren Erschöpfungsphasen zog sich Bismarck auch in seiner letzten
        Krankheit weitgehend aus der Öffentlichkeit zurück, statt Schwäche sichtbar werden zu
        lassen – der Fünferflügel, der die Verletzlichkeit lieber hinter verschlossenen Türen in
        Friedrichsruh verbarg als vor Publikum.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Parallele im selben Subtyp – Friedrich Schiller (SX6w5):</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-friedrich-schiller">Friedrich
        Schiller</a>, ebenfalls SX6w5, zeigt sich bei Bismarck das für diesen Subtyp typische
        Grundmuster: der Bedrohung – auch der eigenen Sterblichkeit – nicht mit Rückzug, sondern
        mit Konfrontation zu begegnen. Die Ausprägung ist jedoch gegenläufig: Schiller
        konfrontierte seine Krankheit, indem er bis zur physischen Erschöpfung weiterarbeitete;
        Bismarck konfrontierte die eigene Gangrän, indem er ihre Behandlung verweigerte – zwei
        Varianten derselben SX6-Grundhaltung, der eigenen Verwundbarkeit nie nachzugeben, nur mit
        entgegengesetztem äußerem Ausdruck: Aktivität bei Schiller, Verweigerung bei Bismarck.</p>
        <p class="vb-intro"><strong>b) Zwei getrennte Krisen, ein wiederkehrendes Muster:</strong>
        Zwischen der Erschöpfungskrise der frühen 1880er-Jahre und der tödlichen Gangrän der
        späten 1890er-Jahre liegen anderthalb Jahrzehnte – doch beide Male reagierte Bismarcks
        Körper auf jahrelang aufgestaute politische Anspannung, und beide Male stand am Anfang
        ein Zustand, den er selbst lange heruntergespielt hatte, bevor überhaupt reagiert wurde.</p>
        <p class="vb-intro"><strong>c) Warum die Behandlung durch Schweninger gelang, während die Gangrän-Behandlung scheiterte:</strong>
        Der entscheidende Unterschied lässt sich am Vertrauen festmachen: 1883 übergab sich
        Bismarck fast bedingungslos in die Hände eines einzelnen Arztes, dem er persönlich
        vertraute. In seinen letzten Lebensjahren, isolierter und misstrauischer als je zuvor
        gegenüber der offiziellen Ärzteschaft am Hof seines Nachfolgers Wilhelm II., fehlte
        offenbar genau diese Vertrauensbeziehung, die 1883 den Ausschlag gegeben hatte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet der Fuß, das Organ des eigenen Standpunkts?</strong>
        Für eine sexuelle Sechs, deren gesamtes politisches Handwerk darauf beruhte, den eigenen
        Standpunkt notfalls mit Drohung und Härte zu behaupten, liegt eine Deutung nahe:
        ausgerechnet das Organ, das im übertragenen Sinn für den eigenen, unerschütterlichen
        Stand steht, wurde in den letzten Lebensjahren zum Schauplatz eines Verfalls, den
        Bismarck – anders als jede politische Bedrohung zuvor – nicht durch Kontrolle oder
        Gegenangriff abwenden konnte. Die Weigerung, sich behandeln zu lassen, liest sich als
        letzter Versuch, wenigstens die Deutungshoheit über den eigenen, unaufhaltsam
        verfallenden Körper zu behalten – Kontrolle über die eigene Verletzlichkeit dadurch zu
        wahren, dass man sie leugnet, statt sie behandeln zu lassen. Diese Deutung ist eine
        plausible Interpretation, kein belegter historischer Kausalzusammenhang.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu Durchblutungsstörungen
        oder Gangrän führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Bismarcks Fall zeigen lässt, ist ein Muster, das bei dem
        Bedürfnis, Schwäche – auch die eigene körperliche – nicht einzugestehen, in der Praxis
        immer wieder auffällt – eine von vielen möglichen Erklärungen, kein Urteil.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Bismarck kannte sein eigenes Enneagramm-Muster nicht – das Konzept existierte zu seinen
        Lebzeiten noch nicht. Die Kontrareaktion der sexuellen Sechs, jeder Bedrohung mit Härte
        statt mit Rückzug zu begegnen, kannte für ihn keinen eingebauten Warnmechanismus, der ihn
        rechtzeitig zur Behandlung hätte bewegen können; im Gegenteil, das eigene, absterbende
        Gewebe wurde offenbar in derselben Logik verarbeitet wie jede andere Bedrohung seines
        Lebens zuvor: als etwas, dem man nicht nachgibt, sondern dem man die Stirn bietet, notfalls
        auch durch bloßes Ignorieren. Wer das eigene Muster, Schwäche nie zuzugeben, nicht kennt,
        kann es auch nicht rechtzeitig durchbrechen – bei Bismarck endete das erst mit dem Tod, am
        30. Juli 1898.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Krankheitsverlauf lässt sich <strong>Bismarcks</strong> sexuelle Sechs mit
        Fünferflügel noch einmal ablesen: eine Erschöpfungskrise der frühen 1880er-Jahre, die er
        nur durch fast bedingungslose Vertrauensvergabe an einen einzelnen Arzt überwand, und eine
        Gangrän der späten 1890er-Jahre, deren Behandlung er verweigerte, bis am 30. Juli 1898
        kein Widerstand mehr möglich war. Der Wolf, der einmal lernte, sich einem Einzelnen
        anzuvertrauen – und der dieses Vertrauen am Ende seines Lebens niemandem mehr entgegenbringen
        konnte, nicht einmal der eigenen Verletzlichkeit gegenüber.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-otto-von-bismarck", label:"Porträt: Otto von Bismarck (SX6w5) – Lebenswerk"},
        {route:"krankheitsportraets-friedrich-schiller", label:"Krankheitsporträt: Friedrich Schiller (SX6w5) – gleicher Subtyp"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function romySchneiderKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-romy-schneider-portrait.jpg" alt="Romy Schneider" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Romy Schneider</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel · 1938–1982</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Romy Schneider</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-romy-schneider">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um ihr Lebenswerk und ihre Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: eine
        schwere Nierenoperation, jahrelanger, zuletzt außer Kontrolle geratener Alkohol- und
        Tablettenkonsum, der Suizid ihres ersten Mannes 1979, der tragische Tod ihres Sohnes
        David 1981 – und ihr eigener, bis heute nicht restlos geklärter Tod 1982 im Alter von
        nur 43 Jahren.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Schneider</strong> ist dem <strong>sozialen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SO4 trägt den Schmerz der Vier in die soziale Dimension – Scham, das
        tiefe Gefühl, nicht gut genug für die Welt zu sein, in der man lebt. Der Dreierflügel
        treibt zugleich unaufhörlich zu Leistung und öffentlicher Präsenz. Genau dieser
        Widerspruch – die Bühne brauchen und an ihr zugrunde gehen – bestimmte auch ihren
        letzten Lebensabschnitt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Eine schwere Nierenoperation:</strong>
        Schneider musste sich einer ernsten Nierenoperation unterziehen, von der sie sich nach
        Einschätzung von Weggefährten nie vollständig erholte – ein körperlicher Einschnitt, der
        ihre ohnehin fragile Konstitution weiter schwächte.</p>
        <p class="vb-intro"><strong>b) Der Suizid ihres ersten Mannes 1979:</strong>
        Ihr erster Ehemann, der Regisseur Harry Meyen und Vater ihres Sohnes David, nahm sich am
        15. April 1979 in Hamburg das Leben – ein Verlust, der Schneider tief erschütterte, noch
        bevor die eigentliche Tragödie ihres Lebens folgen sollte.</p>
        <p class="vb-intro"><strong>c) Jahrelange, zunehmend unkontrollierte Diäten, Alkohol- und Tablettenkonsum:</strong>
        Bereits vor den großen Verlusten der letzten Lebensjahre begleiteten strenge Diäten,
        Alkohol und Beruhigungsmittel Schneiders Alltag über zwei Jahrzehnte hinweg – ein
        Muster, das sich in den letzten Jahren zunehmend verschärfte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Der Tod ihres Sohnes David am 5. Juli 1981:</strong>
        Der vierzehnjährige David verletzte sich beim Klettern über einen spitzen Zaun am Haus
        von Schneiders Lebensgefährten tödlich und starb an den Folgen einer Operation zur
        Behebung der inneren Verletzungen – ein Schlag, von dem sich Schneider öffentlich sichtbar
        nie wieder erholte.</p>
        <p class="vb-intro"><strong>b) Eskalierender Alkoholkonsum als Betäubung:</strong>
        Nach Davids Tod trank Schneider nach übereinstimmenden Berichten aus ihrem Umfeld stark,
        offenkundig in dem Versuch, den Schmerz über den Verlust zu betäuben – bei mehreren
        Dreharbeiten in dieser Zeit erschien sie alkoholisiert oder blieb den Sets ganz fern.</p>
        <p class="vb-intro"><strong>c) Weiterarbeit trotz sichtbaren Zusammenbruchs:</strong>
        Statt sich zurückzuziehen, arbeitete Schneider auch in dieser Zeit weiter vor der Kamera
        – ihr letzter Film, <em>La Passante du Sans-Souci</em>, entstand kurz vor ihrem Tod, mit
        einer Rolle, die ihre eigene Erschöpfung kaum noch verbergen konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Gefunden am Schreibtisch, in der Nacht zum 29. Mai 1982:</strong>
        Ihr damaliger Lebensgefährte, der Filmproduzent Laurent Pétin, fand Schneider frühmorgens
        zusammengebrochen an ihrem Schreibtisch in ihrer Pariser Wohnung – neben ihr ein
        unvollendeter, handschriftlicher Brief.</p>
        <p class="vb-intro"><strong>b) Offizielle Todesursache Herzversagen, keine Obduktion:</strong>
        Als offizielle Todesursache wurde Herzversagen festgestellt; eine Obduktion fand nicht
        statt – ein Umstand, der bis heute Spekulationen über die genauen Umstände ihres Todes
        nährt, darunter auch die nie belegte Vermutung eines Suizids durch Tabletten.</p>
        <p class="vb-intro"><strong>c) Ein Geflecht mehrerer erschöpfender Faktoren:</strong>
        Biografen beschreiben ihren Tod übereinstimmend als Ergebnis mehrerer zusammenwirkender
        Belastungen: der Schmerz über David, die Folgen der Nierenoperation, zwei Jahrzehnte
        strenger Diäten sowie Alkohol- und Tablettenkonsum – keine einzelne Ursache, sondern ein
        Körper, der sich nach Jahren der Überforderung erschöpft zurückzog.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein öffentliches Bild, das den privaten Zerfall lange überstrahlte:</strong>
        Für das Publikum blieb Schneider bis zuletzt der glanzvolle europäische Filmstar – die
        wachsende private Krise wurde erst nach ihrem Tod in ihrer vollen Tragweite sichtbar.</p>
        <p class="vb-intro"><strong>b) Nur zehneinhalb Monate zwischen den beiden Todesfällen:</strong>
        Zwischen Davids Tod im Juli 1981 und Romy Schneiders eigenem Tod im Mai 1982 lagen keine
        elf Monate – eine so kurze Zeitspanne, dass die Öffentlichkeit den Zusammenhang zwischen
        beiden Ereignissen kaum übersehen konnte.</p>
        <p class="vb-intro"><strong>c) Ein bis heute nachwirkender Mythos:</strong>
        Die ungeklärten Umstände ihres Todes – keine Obduktion, ein unvollendeter Brief, Jahre
        der öffentlich sichtbaren Erschöpfung – haben Romy Schneiders letzte Lebensjahre zu einem
        der meistdiskutierten Kapitel der europäischen Filmgeschichte gemacht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Das Gürteltier, das sich nach außen weiter zeigte, während es innen zusammenbrach:</strong>
        Die SO4-typische Scham – das Gefühl, der eigenen Rolle und den Erwartungen anderer nicht
        zu genügen – ließ Schneider auch im tiefsten privaten Schmerz weiter vor der Kamera
        erscheinen, statt sich offen zurückzuziehen.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die Unfähigkeit, die Bühne loszulassen:</strong>
        Derselbe Antrieb, der ihre Karriere über Jahrzehnte trug – Leistung, Professionalität,
        das Bedürfnis, gebraucht zu werden –, ließ sie auch dann noch drehen, als ihr Körper und
        ihre Psyche längst erschöpft waren.</p>
        <p class="vb-intro"><strong>c) Betäubung statt sichtbarer Verzweiflung:</strong>
        Statt öffentlich zusammenzubrechen, betäubte sie den Schmerz mit Alkohol und
        Tabletten – eine stille, nach innen gerichtete Bewältigungsstrategie, die dem
        Rückzugsmuster des Gürteltiers entspricht: sich einrollen, statt sich zu zeigen.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Panzer, der zuletzt nur noch nach außen hielt:</strong>
        Schneiders gesamtes öffentliches Bild beruhte auf einer makellosen, glanzvollen Fassade
        – genau diese Fassade hielt bis fast zuletzt, während sich dahinter über Jahre eine
        körperliche und seelische Erschöpfung aufbaute, die niemand von außen ganz ermessen
        konnte.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>Eine auffällige Parallele im selben Subtyp – Michael Jackson:</strong>
        Bemerkenswert ist, dass mit <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Michael Jackson (ebenfalls SO4w3)</a>
        eine weitere Persönlichkeit in diesem Kompass vertreten ist, deren Krankengeschichte
        auffällig ähnlich verläuft: beide sozialen Vierer mit Dreierflügel, beide mit einer
        über Jahre gepflegten öffentlichen Fassade aus Leistung und Perfektion, beide mit einer
        wachsenden Abhängigkeit von Substanzen – bei Jackson Schmerz- und Schlafmittel, bei
        Schneider Alkohol und Tabletten –, die den unerträglichen inneren Schmerz betäuben
        sollten, statt ihn sichtbar zu machen. Und beide starben in einem medizinisch nie ganz
        eindeutig geklärten Zusammenhang aus genau dieser Selbstmedikation heraus.</p>
        <p class="vb-intro"><strong>b) Warum ausgerechnet das Herz, bei einer Frau, deren ganzes Leben dem Fühlen gewidmet war?</strong>
        Für eine soziale Vier, deren gesamtes künstlerisches Werk auf der Fähigkeit beruhte,
        Gefühl ungefiltert zuzulassen und zu zeigen, liegt eine Deutung nahe: Ausgerechnet jenes
        Organ, das im Enneagramm für das Herzzentrum und die emotionale Tiefe steht, wurde zum
        Schauplatz des endgültigen Zusammenbruchs, nachdem es über Jahrzehnte mehr Gefühl
        getragen hatte, als ein Mensch verarbeiten kann. Diese Deutung ist eine plausible
        Interpretation, kein belegter medizinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>c) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu Herzversagen oder
        Suchterkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig
        vom Subtyp.</strong> Was sich an Schneiders Fall zeigen lässt, ist ein Muster im Umgang
        mit unbewältigtem Verlust, das bei einer ausgeprägten sozialen Vier mit Dreierflügel
        immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) Die unbewusste Fixierung als eigener Faktor:</strong>
        Nichts deutet darauf hin, dass Schneider ihr eigenes Enneagramm-Muster je bewusst kannte
        – das System war zu ihren Lebzeiten noch kaum verbreitet. Die Scham und der
        Neid der Vier bestimmten über Jahrzehnte ungehindert ihr Verhalten: Statt den eigenen Schmerz früh
        anzuerkennen und sich Hilfe zu holen, hielt sie an der öffentlichen Fassade fest und
        betäubte das, was dahinter lag. Wer die eigene Wunde nicht als wiederkehrendes Muster
        erkennt, kann ihr auch nicht rechtzeitig begegnen, wenn gleich zwei existenzielle
        Verluste – der Vater ihres Sohnes 1979, ihr Sohn selbst 1981 – kurz hintereinander
        eintreffen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Auch am Ende ihres Lebens lässt sich <strong>Romy Schneiders</strong> soziale Vier mit
        Dreierflügel noch einmal ablesen: eine Frau, die bis zuletzt vor der Kamera stand,
        während sie innerlich unter dem Gewicht zweier existenzieller Verluste zusammenbrach,
        und deren Tod – ungeklärt, ohne Obduktion, mit einem unvollendeten Brief neben sich –
        selbst zu einem letzten, offen gebliebenen Kapitel ihrer Geschichte wurde. Das
        Gürteltier, das sich der Welt bis zum letzten Dreh zeigte – und sich dann, ganz allein,
        endgültig einrollte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-romy-schneider", label:"Porträt: Romy Schneider (SO4w3) – Lebenswerk"},
        {route:"krankheitsportraets-michael-jackson", label:"Krankheitsporträt: Michael Jackson (SO4w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function spinozaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-spinoza-portrait.jpg" alt="Baruch de Spinoza" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Baruch de Spinoza</p>
        <p class="krim-portrait-typ">SE5w6 · Selbsterhaltender Typ 5 mit Sechserflügel · 1632–1677</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Eule</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Tierentsprechung: Eule" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Baruch de Spinoza</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-spinoza">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen radikalen Rückzug aus jeder
        Gemeinschaft und sein streng systematisches philosophisches Werk. Diese Seite vertieft
        ein Kapitel, das dort nur am Rande erwähnt wird: eine chronische Lungenerkrankung,
        vermutlich durch jahrzehntelanges Einatmen von Glasstaub beim Linsenschleifen
        verursacht – ausgerechnet durch das Handwerk, das ihm seine geistige Unabhängigkeit
        sicherte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Spinoza</strong> ist dem <strong>selbsterhaltenden Typ 5 mit Sechserflügel</strong>
        zugeordnet. Die SE5 hortet Energie, Raum und Zeit für das eigene Denken – „Burg", wie
        Naranjo diesen Subtyp nannte. Genau dieses Prinzip radikaler Selbstgenügsamkeit
        bestimmte auch, wie er mit seiner fortschreitenden Krankheit umging: kein Rückzug aus
        dem Handwerk, das ihn krank machte, sondern konsequente Fortsetzung, solange die
        Unabhängigkeit dadurch gesichert blieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Jahrzehnte an der Werkbank:</strong>
        Nach seinem Ausschluss aus der jüdischen Gemeinde Amsterdams 1656 verdiente Spinoza
        seinen Lebensunterhalt fast ausschließlich als Schleifer optischer Linsen – eine
        präzise Handarbeit, die er über mehr als zwei Jahrzehnte täglich ausübte.</p>
        <p class="vb-intro"><strong>b) Feiner Glasstaub als ständiger Begleiter:</strong>
        Das Schleifen von Linsen erzeugte feinen, eingeatmeten Glasstaub – eine Belastung, die
        sich erst nach Jahren gesundheitlich bemerkbar machte, in einer Zeit, in der die
        Gefahren solcher Feinstäube für die Lunge noch unbekannt waren.</p>
        <p class="vb-intro"><strong>c) Zunehmende Atembeschwerden in den letzten Lebensjahren:</strong>
        In den Jahren vor seinem Tod verschlechterte sich sein Gesundheitszustand spürbar –
        ein schleichender Verfall, der sich mit seiner unveränderten Arbeitsweise überschnitt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Keine Änderung der Lebensweise:</strong>
        Trotz fortschreitender Erkrankung gibt es keine Hinweise darauf, dass Spinoza sein
        Handwerk aufgab oder wesentlich einschränkte – die tägliche Arbeit an der Werkbank
        blieb bis zuletzt Teil seines zurückgezogenen, selbstgenügsamen Lebens.</p>
        <p class="vb-intro"><strong>b) Kaum Klagen in den erhaltenen Briefen:</strong>
        In seiner Korrespondenz mit einem kleinen Kreis vertrauter Gelehrter finden sich
        auffallend wenige Hinweise auf seinen körperlichen Zustand – die Burg der SE5 hielt
        auch die eigene Krankheit weitgehend im Inneren verborgen.</p>
        <p class="vb-intro"><strong>c) Fortgesetzte philosophische Arbeit bis zum Ende:</strong>
        Sein Hauptwerk, die Ethica, war zum Zeitpunkt seines Todes im Wesentlichen fertig –
        die Krankheit unterbrach die philosophische Arbeit nicht, sie beendete sie erst mit
        dem Tod selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Kein Arztbesuch dokumentiert, kein Behandlungsversuch überliefert:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über ärztliche Konsultationen oder Behandlungsversuche – ein zurückgezogenes
        Leben ohne festen sozialen Anschluss bedeutete offenbar auch ein Leben ohne
        medizinische Begleitung im heutigen Sinne.</p>
        <p class="vb-intro"><strong>b) Der Tod traf ihn mitten in der Arbeit:</strong>
        Spinoza starb am 21. Februar 1677 in Den Haag, offenbar plötzlich innerhalb eines
        kurzen Zeitraums verschärfter Symptome – nicht nach einer langen, öffentlich
        sichtbaren Leidensphase, sondern nach Jahren stiller, kaum dokumentierter
        Verschlechterung.</p>
        <p class="vb-intro"><strong>c) Nur 44 Jahre alt:</strong>
        Er starb ungewöhnlich jung für sein intellektuelles Vermächtnis – ein Leben, das nach
        heutigem Verständnis noch Jahrzehnte philosophischer Arbeit hätte umfassen können.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Werk, das erst nach dem Tod erschien:</strong>
        Freunde veröffentlichten noch im Todesjahr seine „Opera Posthuma", darunter die
        Ethica – ein Werk, das er selbst zu Lebzeiten nie unter eigenem Namen hatte drucken
        lassen, aus Furcht vor genau jener Verfolgung, die ihn schon den Bann seiner Gemeinde
        gekostet hatte.</p>
        <p class="vb-intro"><strong>b) Kein öffentliches Zeugnis des Leidens:</strong>
        Anders als bei später berühmten Philosophen, die ihre eigene Krankheit reflektierten
        oder literarisch verarbeiteten, findet sich in Spinozas erhaltenem Werk kaum
        Auseinandersetzung mit dem eigenen körperlichen Verfall.</p>
        <p class="vb-intro"><strong>c) Ein stiller Tod, ein lautes Nachleben:</strong>
        Der unmittelbare Tod blieb nahezu unbemerkt außerhalb seines kleinen Freundeskreises
        – die Wirkung seines Denkens entfaltete sich erst Generationen später, von Leibniz
        bis Einstein.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Die Burg, die auch die eigene Krankheit einschloss:</strong>
        Dieselbe radikale Selbstgenügsamkeit, die Spinozas gesamtes Leben prägte, bestimmte
        auch, wie wenig von seinem körperlichen Verfall nach außen drang – Krankheit wurde,
        wie alles andere, in die eigene, geschützte Innenwelt aufgenommen, statt geteilt.</p>
        <p class="vb-intro"><strong>b) Der Sechserflügel und die Treue zum eigenen Prinzip:</strong>
        Die Weigerung, das Handwerk aufzugeben, das ihn krank machte, zeigt dieselbe
        Systemtreue, die ihn 1673 einen sicheren Lehrstuhl in Heidelberg ablehnen ließ – die
        Unabhängigkeit, die das Linsenschleifen sicherte, wog schwerer als die gesundheitliche
        Gefahr, die es mit sich brachte.</p>
        <p class="vb-intro"><strong>c) Keine sichtbare Verzweiflung, kein sichtbarer Kampf:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses gibt es keine
        Berichte über einen öffentlichen oder auch nur brieflich dokumentierten Kampf gegen
        die eigene Sterblichkeit – die Eule zog sich zurück, wie sie es ihr ganzes Leben lang
        getan hatte.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der für die Unabhängigkeit bezahlte:</strong>
        Spinozas gesamtes Leben war von der Überzeugung geprägt, dass ungestörtes Denken nur
        durch radikale Selbstgenügsamkeit gesichert werden kann – das Linsenschleifen war der
        Preis dieser Unabhängigkeit, und am Ende zugleich ihre tödliche Kehrseite.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Fast 260 Jahre später starb <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">Marie Curie</a>
        (ebenfalls SE5w6) an aplastischer Anämie – eine direkte Folge jahrzehntelanger,
        ungeschützter Arbeit mit radioaktiven Stoffen, deren Gefahr sie selbst mit erforscht
        hatte. Beide starben an einer Krankheit, die unmittelbar aus dem eigenen Handwerk
        erwuchs, das ihnen zugleich ihre tiefste intellektuelle Erfüllung und Unabhängigkeit
        sicherte – eine auffällige Parallele zwischen zwei selbsterhaltenden Fünfern, die ihr
        Lebenswerk buchstäblich mit der eigenen Gesundheit bezahlten. Mehr dazu im
        <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">Krankheitsporträt zu Marie Curie</a>.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet die Lunge?</strong>
        Für eine selbsterhaltende Fünf mit Sechserflügel, deren gesamte Kraft auf der
        Fähigkeit beruhte, sich in eine geschützte, ungestörte Innenwelt zurückzuziehen, liegt
        eine Deutung nahe: Ausgerechnet jenes Organ, das den Atem – die unmittelbarste,
        elementarste Verbindung zur Außenwelt – ermöglichte, wurde zum Schauplatz des
        Verfalls, verursacht durch die eigene, freiwillig gewählte Isolation an der
        Werkbank. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Fünf zwangsläufig zu
        Lungenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Spinozas Fall zeigen lässt, ist ein Muster
        im Umgang mit gesundheitlicher Gefährdung durch die eigene Arbeit, das bei einer
        ausgeprägten selbsterhaltenden Fünf mit Sechserflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Spinoza kannte sein eigenes Muster nicht – die selbsterhaltende Fünf mit
        Sechserflügel sichert reflexhaft die eigene Unabhängigkeit und ungestörte Innenwelt,
        statt die eigene körperliche Verletzlichkeit je offen anzuerkennen, und genau dieses
        Muster lebte er bis in seine letzten Lebensjahre unverändert aus. Wer die eigene
        Notwendigkeit, die schützende Burg um jeden Preis aufrechtzuerhalten, nicht als
        Muster erkennt, kann sie auch angesichts der eigenen Sterblichkeit nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Fünf mit Sechserflügel erklärt bei <strong>Spinoza</strong>
        vieles am Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte
        Unabhängigkeit auf der stillen, präzisen Arbeit an der Werkbank beruhte, bezahlte
        genau dafür mit seiner Gesundheit – die Eule, die sich so weit zurückzog, dass selbst
        die eigene Krankheit kaum sichtbar wurde, bevor sie ihr endgültig die Luft nahm.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-spinoza", label:"Porträt: Baruch de Spinoza (SE5w6) – Philosoph"},
        {route:"krankheitsportraets-marie-curie", label:"Krankheitsporträt: Marie Curie (SE5w6) – tödliche Folge der eigenen Forschung"},
        {route:"krankheitsportraets-hermann-hesse", label:"Krankheitsporträt: Hermann Hesse (SE5w6) – dieselbe Rückzugslogik, andere Krankheit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se5", label:"Subtyp-Profil SE5"},
      ])}
    </div>
  `);
}

export function voltaireKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-voltaire-portrait.jpg" alt="Voltaire" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Voltaire</p>
        <p class="krim-portrait-typ">SX4w3 · Sexueller Typ 4 mit Dreierflügel · 1694–1778</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Tierentsprechung: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Voltaire</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-voltaire">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seinen lebenslangen Kampf gegen
        religiöse und politische Willkür und seine Rolle als geistiger Vater der
        Aufklärung. Diese Seite vertieft ein Kapitel, das dort nur am Rande erwähnt wird:
        jahrzehntelange chronische Verdauungs- und Blasenleiden, die er in seiner
        umfangreichen Korrespondenz obsessiv dokumentierte, ohne dass sie seine
        außergewöhnliche Produktivität je bremsten.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Voltaire</strong> ist dem <strong>sexuellen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SX4 erlebt Schmerz mit unmittelbarer, persönlicher Intensität; der
        Dreierflügel wendet dieses Innere nach außen, in sichtbare Wirkung. Genau diese
        Kombination bestimmte auch, wie er mit seinen chronischen Leiden umging: nicht durch
        Rückzug, sondern durch endlose, fast literarische Beschreibung – und ungebremste
        Weiterarbeit trotz allem.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Erste Klagen bereits in jungen Jahren:</strong>
        Schon in seinen Zwanzigern begann Voltaire in Briefen an Freunde regelmäßig über
        Verdauungsbeschwerden zu klagen – ein Muster, das sich durch sein gesamtes
        erwachsenes Leben zog.</p>
        <p class="vb-intro"><strong>b) Chronische Blasen- und Nierenprobleme:</strong>
        Über Jahrzehnte hinweg litt er wiederkehrend an schmerzhaften Blasen- und
        vermutlichen Nierensteinbeschwerden, die ihn zeitweise stark einschränkten.</p>
        <p class="vb-intro"><strong>c) Eine schier endlose Liste weiterer Beschwerden:</strong>
        Kopfschmerzen, Fieberschübe, Hautausschläge und allgemeine Erschöpfungszustände
        ergänzten über die Jahre ein Bild chronischer, nie ganz verschwindender
        gesundheitlicher Beeinträchtigung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Exzessive Dokumentation in der eigenen Korrespondenz:</strong>
        Von den über 20.000 erhaltenen Briefen Voltaires handelt ein auffällig großer Teil
        von seinem eigenen körperlichen Zustand – detailliert, oft dramatisch, an Ärzte,
        Freunde und Bewunderer gleichermaßen gerichtet.</p>
        <p class="vb-intro"><strong>b) Wiederholte Todesankündigungen, die sich nicht bewahrheiteten:</strong>
        Mehrfach kündigte Voltaire in Briefen sein nahes Ende an, das dann über Jahrzehnte
        nicht eintrat – ein Muster, das ihm schon zu Lebzeiten den Ruf eines notorischen
        Hypochonders einbrachte.</p>
        <p class="vb-intro"><strong>c) Keine erkennbare Unterbrechung seines Schaffens:</strong>
        Trotz der ständigen Klagen erschienen in denselben Jahrzehnten Hunderte von Werken –
        Theaterstücke, philosophische Schriften, Streitschriften, Korrespondenz – in einem
        Tempo, das kaum auf einen tatsächlich arbeitsunfähigen Mann schließen lässt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Ungewöhnlich hohes Alter für seine Zeit:</strong>
        Trotz jahrzehntelanger Klagen über seinen körperlichen Verfall erreichte Voltaire ein
        Alter von 83 Jahren – weit über der durchschnittlichen Lebenserwartung des 18.
        Jahrhunderts.</p>
        <p class="vb-intro"><strong>b) Rückkehr nach Paris trotz Warnungen:</strong>
        1778 reiste der bereits schwer gezeichnete Voltaire, entgegen ärztlichem Rat, nach 28
        Jahren Exil zurück nach Paris, um dort die triumphale Aufführung seines letzten
        Theaterstücks zu erleben.</p>
        <p class="vb-intro"><strong>c) Rascher körperlicher Verfall nach der Rückkehr:</strong>
        Die Aufregung und Anstrengung der triumphalen Rückkehr, verbunden mit seinem
        bereits geschwächten Zustand, beschleunigte in den folgenden Wochen seinen
        endgültigen körperlichen Zusammenbruch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Tod mitten im Triumph:</strong>
        Voltaire starb am 30. Mai 1778 in Paris, nur Wochen nach seiner gefeierten Rückkehr –
        ein Ende, das seinem gesamten Leben entsprach: dramatisch, öffentlich, und bis
        zuletzt im Zentrum der Aufmerksamkeit.</p>
        <p class="vb-intro"><strong>b) Verweigertes kirchliches Begräbnis:</strong>
        Die katholische Kirche verweigerte ihm zunächst ein christliches Begräbnis – ein
        letzter, öffentlicher Konflikt, der sein lebenslanges Ringen mit religiöser Autorität
        über den Tod hinaus fortsetzte.</p>
        <p class="vb-intro"><strong>c) Posthume Rehabilitierung als Symbolfigur:</strong>
        Erst 1791, während der Französischen Revolution, wurden seine sterblichen Überreste
        unter großem öffentlichem Jubel ins Panthéon überführt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Schmerz, der zur literarischen Bühne wurde:</strong>
        Dieselbe Fähigkeit, das eigene innere Erleben unmittelbar nach außen zu wenden, die
        Voltaires gesamtes öffentliches Wirken prägte, bestimmte auch, wie er über seine
        Krankheiten sprach – nicht verschwiegen, sondern ausführlich, dramatisch,
        literarisch inszeniert.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die Weigerung, sich bremsen zu lassen:</strong>
        Anders als eine introvertiertere Vier hätte reagieren können, ließ sich Voltaire von
        seinen chronischen Leiden nie von der Arbeit abhalten – der Dreierflügel wusste, dass
        Wirkung nur durch fortgesetzte Sichtbarkeit entsteht, Krankheit hin oder her.</p>
        <p class="vb-intro"><strong>c) Kein Rückzug, sondern eine letzte öffentliche Bühne:</strong>
        Anders als bei manch anderem Krankheitsverlauf dieses Kompasses endete Voltaires
        Leben nicht in stillem Rückzug, sondern in einem letzten, bewusst gesuchten
        öffentlichen Triumph, der seinen körperlichen Verfall beschleunigte, statt ihn zu
        verzögern.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Körper, der zur Bühne des eigenen Erlebens wurde:</strong>
        Voltaires gesamtes Leben war von der Überzeugung geprägt, dass jedes Erleben –
        Kränkung, Ungerechtigkeit, auch körperliches Leiden – unmittelbar und mit voller
        Intensität ausgedrückt werden musste. Seine chronischen Beschwerden waren keine
        Ausnahme von diesem Prinzip, sondern seine konsequenteste Anwendung.</p>
        <p class="vb-intro"><strong>b) Hypochondrie als Ausdrucksform, nicht als Schwäche:</strong>
        Was Zeitgenossen als übertriebene Wehleidigkeit belächelten, lässt sich aus
        heutiger Sicht auch als Ausdruck der SX4-Intensität lesen: das eigene Leiden wurde
        nicht kleingeredet, sondern in seiner vollen, oft dramatisierten Wirklichkeit
        wahrgenommen und mitgeteilt.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Magen, Darm und Blase?</strong>
        Für eine sexuelle Vier mit Dreierflügel, deren gesamte Kraft auf der unmittelbaren
        Verwandlung von innerem Erleben in öffentliche Wirkung beruhte, liegt eine Deutung
        nahe: Ausgerechnet jene Organe, die am unmittelbarsten körperliches Unbehagen
        signalisieren, wurden zum bevorzugten Schauplatz seiner endlosen
        Selbstbeobachtung – ein Körper, der beständig meldete, was die Seele längst
        empfand. Diese Deutung ist eine plausible Interpretation, kein belegter historischer
        Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Vier zwangsläufig zu chronischen
        Verdauungs- oder Blasenleiden führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Was sich an Voltaires Fall zeigen lässt,
        ist ein Muster im Umgang mit chronischem körperlichem Unbehagen, das bei einer
        ausgeprägten sexuellen Vier mit Dreierflügel immer wieder auffällt – eine von
        vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird in
        diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Voltaire kannte sein eigenes Muster nicht – die sexuelle Vier mit Dreierflügel
        wandelt reflexhaft jedes innere Erleben in unmittelbaren, öffentlichen Ausdruck um,
        statt Beschwerden je still für sich zu behalten, und genau dieses Muster lebte er
        bis in seine letzten Lebenswochen unverändert aus. Wer die eigene Notwendigkeit,
        jedes Erleben mit voller Intensität auszudrücken, nicht als Muster erkennt, kann sie
        auch im eigenen Sterben nicht ablegen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Vier mit Dreierflügel erklärt bei <strong>Voltaire</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamte Kraft auf der
        unmittelbaren, öffentlichen Verwandlung von innerem Erleben beruhte, machte selbst
        sein eigenes Leiden zu einem lebenslang fortgeschriebenen Text – der Chihuahua, der
        noch im Krankenbett bellte, statt zu schweigen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-voltaire", label:"Porträt: Voltaire (SX4w3) – Philosoph der Aufklärung"},
        {route:"krankheitsportraets-francisco-de-goya", label:"Krankheitsporträt: Francisco de Goya (SX4w3)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx4", label:"Subtyp-Profil SX4"},
      ])}
    </div>
  `);
}

export function woodyAllenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-woody-allen-portrait.jpg" alt="Woody Allen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Woody Allen</p>
        <p class="krim-portrait-typ">SE6w7 · Selbsterhaltender Typ 6 mit Siebenerflügel · geb. 1935</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Kaninchen</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Tierentsprechung: Kaninchen" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Woody Allen</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-woody-allen">Porträt berühmter Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein umfangreiches filmisches
        Lebenswerk. Diese Seite vertieft ein Kapitel, das dort oberflächlich behandelt wird: eine
        jahrzehntelange, öffentlich zelebrierte Hypochondrie, die er selbst lieber als
        „Alarmismus" bezeichnet – und die sein Leben und Werk seit den 1950er-Jahren
        ununterbrochen begleitet.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Woody Allen</strong> ist dem <strong>selbsterhaltenden Typ 6 mit
        Siebenerflügel</strong> zugeordnet. Die SE6 sucht Sicherheit durch Routine und ein
        eng vertrautes Umfeld; der Siebenerflügel übersetzt die Angst sofort in Sprache,
        Tempo und Witz, statt in ihr zu erstarren. Genau diese Kombination – Angst, die
        nie ganz verschwindet, aber ständig in Worte, Pointen und Arbeit verwandelt wird –
        bestimmte auch, wie Allen mit seiner eigenen Gesundheitsangst umging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Beginn der Psychoanalyse um 1957–1959:</strong>
        Nach eigenen Angaben begann Allen seine analytische Behandlung bereits Ende der
        1950er-Jahre, in jungen Jahren als aufstrebender Comedy-Autor – ein Startpunkt, der
        sich über Jahrzehnte fortsetzen sollte.</p>
        <p class="vb-intro"><strong>b) Über 35 Jahre ununterbrochene Psychoanalyse:</strong>
        Nach eigener Aussage befand sich Allen mehr als 35 Jahre lang in analytischer
        Behandlung – nicht mit dem Ziel, geheilt zu werden, sondern um die eigene Angst
        systematisch zu verstehen und in Worte zu fassen.</p>
        <p class="vb-intro"><strong>c) Frühe Verarbeitung im eigenen Werk:</strong>
        Bereits in seinen frühen Filmen und Stand-up-Programmen der 1960er- und
        1970er-Jahre wird die eigene Gesundheitsangst zum wiederkehrenden komödiantischen
        Material, lange bevor er öffentlich explizit darüber schrieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Kleinste Symptome werden zu Katastrophen:</strong>
        Allen beschreibt, dass selbst spröde Lippen bei ihm sofort den Verdacht auf einen
        Hirntumor, Lungenkrebs oder – in einem selbst geschilderten Fall – Rinderwahnsinn
        auslösen können.</p>
        <p class="vb-intro"><strong>b) Selbstbezeichnung als „Alarmist", nicht als Hypochonder:</strong>
        Allen bestand darauf, dass er keine eingebildeten Leiden erfinde, sondern reale,
        harmlose Symptome sofort maximal katastrophisch deute – eine feine, aber von ihm
        selbst betonte Unterscheidung.</p>
        <p class="vb-intro"><strong>c) Ausgeprägte Flugangst und Angst vor engen Räumen:</strong>
        Neben der Gesundheitsangst im engeren Sinn prägten auch Flugangst, die Angst vor
        Aufzügen und geschlossenen Räumen sein Alltagsleben über Jahrzehnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Der New-York-Times-Essay vom 12. Januar 2013:</strong>
        In einem viel beachteten Meinungsbeitrag beschrieb Allen seine Gesundheitsangst
        selbst ausführlich – darunter die Sorge um die eigenen Sexualpheromone, das
        Für-tot-Erklären schlafender Männer und die Vermutung, seine eigentliche Angst gelte
        gar nicht bestimmten Krankheiten, sondern schlicht dem Tod selbst.</p>
        <p class="vb-intro"><strong>b) Konsequente Weigerung, sich beruhigen zu lassen:</strong>
        Nach eigener Schilderung genügt bei ihm meist ein Aspirin oder etwas Kalamin-Lotion
        als tatsächliche Behandlung – doch die Panik davor bleibt jedes Mal unverändert
        stark, unabhängig von der harmlosen Realität des Symptoms.</p>
        <p class="vb-intro"><strong>c) Hypochondrie als durchgehendes Filmthema:</strong>
        Figuren mit ausgeprägter Gesundheitsangst, oft von Allen selbst gespielt, ziehen
        sich durch sein gesamtes Werk – von frühen Komödien bis in seine späten Filme
        hinein bleibt das Thema präsent.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Markenzeichen statt eines verborgenen Leidens:</strong>
        Anders als viele andere Krankheitsverläufe dieses Kompasses wurde Allens
        Gesundheitsangst nie verschwiegen, sondern von Anfang an zum öffentlich bekannten,
        sogar vermarkteten Teil seiner künstlerischen Identität.</p>
        <p class="vb-intro"><strong>b) Ungebremste Schaffenskraft trotz jahrzehntelanger Angst:</strong>
        Über fünf Jahrzehnte drehte Allen fast im Jahresrhythmus einen neuen Film – die
        Gesundheitsangst bremste die schiere Menge seines Schaffens zu keinem Zeitpunkt
        erkennbar.</p>
        <p class="vb-intro"><strong>c) Ein Publikum, das sich in der eigenen Angst wiedererkannte:</strong>
        Generationen von Zuschauern fanden in Allens offen ausgestellter Neurose eine Form
        von Trost – die eigene Angst wurde durch seine Kunst nicht pathologisiert, sondern
        normalisiert.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Angst, die sofort in Sprache verwandelt wird:</strong>
        Dieselbe SE6w7-Mechanik, die seine gesamte komödiantische Stimme trägt, bestimmte
        auch seinen Umgang mit der eigenen Gesundheitsangst – nicht Verdrängung, sondern
        sofortige Übersetzung in Wortschwall, Pointe und Selbstanalyse.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Flucht nach vorn ins nächste Projekt:</strong>
        Statt bei einem einzelnen Gesundheitsschrecken innezuhalten, trieb der
        Siebenerflügel Allen immer weiter zum nächsten Film, zum nächsten Klarinettenabend
        – Arbeit als Bewegung gegen den Stillstand, den die Sechs am meisten fürchtet.</p>
        <p class="vb-intro"><strong>c) Verstehen als Beruhigungsstrategie:</strong>
        Die über 35 Jahre fortgesetzte Psychoanalyse zeigt die typische SE6-Haltung: Die
        eigene Angst wird nicht bekämpft, sondern systematisch kartiert und in Worte
        gefasst – Verstehen als Weg, mit ihr weiterzuleben, statt sie loszuwerden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Angst, die zum Lebenswerk wurde:</strong>
        Für Allen war die eigene Gesundheitsangst nie ein Randphänomen, sondern von Beginn
        an das eigentliche Material seiner Kunst – ein Leben lang blieb sie sichtbar,
        nie verborgen, immer wieder neu in Sprache übersetzt.</p>
        <p class="vb-intro"><strong>b) Eine verwandte, aber andere Ausprägung als bei Kant und Freud:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-immanuel-kant">Immanuel
        Kant</a> und <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Sigmund
        Freud</a> (beide SO6w5) litten ebenfalls unter ausgeprägter, jahrzehntelanger
        Gesundheitsangst – doch als soziale Sechser suchten beide Sicherheit durch strenge,
        selbst entworfene Systeme und Routinen, die sie kaum öffentlich zur Schau stellten.
        Allens selbsterhaltende Sechs mit Siebenerflügel zeigt dieselbe Grundangst in einer
        anderen Übersetzung: nicht verborgene Selbstkontrolle, sondern öffentlich
        ausgestellte, komödiantisch verarbeitete Offenheit. Dieselbe Wurzel – die
        Sechser-Angst vor dem eigenen Körper –, zwei sehr unterschiedliche Instinkt-Antworten
        darauf.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet der eigene Körper?</strong>
        Für eine selbsterhaltende Sechs, deren gesamte Sicherheit auf der sorgfältigen
        Kontrolle des eigenen, nächsten Umfelds beruht, liegt eine Deutung nahe: Der eigene
        Körper ist das unmittelbarste, am wenigsten kontrollierbare Territorium überhaupt –
        jedes noch so kleine Anzeichen einer Störung bedroht genau jene Sicherheit, auf die
        sich der Selbsterhaltungsinstinkt am stärksten konzentriert. Diese Deutung ist eine
        plausible Interpretation, kein belegter klinischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der selbsterhaltenden Sechs zwangsläufig zu
        ausgeprägter Hypochondrie führt – <strong>jeder Mensch kann jedes psychische oder
        körperliche Muster entwickeln, unabhängig vom Subtyp.</strong> Was sich an Allens
        Fall zeigen lässt, ist ein Muster im Umgang mit Gesundheitsangst, das bei einer
        ausgeprägten selbsterhaltenden Sechs mit Siebenerflügel immer wieder auffällt – eine
        von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild wird
        in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Allen kennt sein eigenes Muster nicht als Enneagramm-Struktur – die
        selbsterhaltende Sechs mit Siebenerflügel übersetzt reflexhaft jede Bedrohung des
        eigenen Körpers in Sprache und Bewegung, statt sie je zur Ruhe kommen zu lassen, und
        genau dieses Muster lebt er seit über sechs Jahrzehnten praktisch unverändert aus. Wer
        die eigene Neigung, Angst sofort in Wortschwall und Arbeit zu verwandeln, nicht als
        Muster erkennt, kann auch mit über neunzig Jahren nicht innehalten, um sie einfach
        auszuhalten.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die selbsterhaltende Sechs mit Siebenerflügel erklärt bei <strong>Woody Allen</strong>
        vieles am Umgang mit der eigenen Gesundheitsangst: ein Mann, dessen gesamtes Werk
        auf der Übersetzung von Angst in Sprache beruht, macht aus jedem noch so kleinen
        Symptom Material statt Stillstand – das Kaninchen, das nie aufhört, wachsam zu sein,
        aber gelernt hat, aus der eigenen Wachsamkeit seit sechs Jahrzehnten Kunst zu machen.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-woody-allen", label:"Porträt: Woody Allen (SE6w7) – das Kaninchen"},
        {route:"krankheitsportraets-immanuel-kant", label:"Krankheitsporträt: Immanuel Kant (SO6w5) – verwandte Hypochondrie, andere Instinktantwort"},
        {route:"krankheitsportraets-sigmund-freud", label:"Krankheitsporträt: Sigmund Freud (SO6w5)"},
        {route:"krankheitsportraets-neil-armstrong", label:"Krankheitsporträt: Neil Armstrong (SE6w5) – gleicher Kerntyp, entgegengesetzter Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/se6", label:"Subtyp-Profil SE6"},
      ])}
    </div>
  `);
}

export function heinrichHeineKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-heinrich-heine-portrait.jpg" alt="Heinrich Heine" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Heinrich Heine</p>
        <p class="krim-portrait-typ">SO4w3 · Sozialer Typ 4 mit Dreierflügel · 1797–1856</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gürteltier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Tierentsprechung: Gürteltier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Heinrich Heine</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-heinrich-heine">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein literarisches Werk und seine
        Typstruktur im Allgemeinen. Im Zentrum dieser Seite steht das Kapitel, das seine
        letzten acht Lebensjahre prägte: eine fortschreitende, bis heute nicht sicher
        diagnostizierte Lähmung, die er selbst seine "Matratzengruft" nannte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Heine</strong> ist dem <strong>sozialen Typ 4 mit Dreierflügel</strong>
        zugeordnet. Die SO4 verarbeitet das eigene Anderssein nicht durch Rückzug, sondern
        durch die ständige Suche nach Bestätigung vor einem Publikum. Der Dreierflügel
        verwandelt diese Suche in aktive Sichtbarkeit. Genau dieses Muster bestimmte auch,
        wie Heine mit einer Krankheit umging, die ihn buchstäblich ans Bett fesselte, ohne
        dass sie seine öffentliche Stimme verstummen ließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein plötzlicher Zusammenbruch im Mai 1848:</strong>
        Im Mai 1848 legte sich Heine in seiner Pariser Wohnung ins Bett, aus dem er nie
        wieder aufstehen sollte &ndash; den Beginn einer fortschreitenden Lähmung, die
        vermutlich durch eine Degeneration des Rückenmarks verursacht wurde.</p>
        <p class="vb-intro"><strong>b) Lähmung von der Brust abwärts:</strong>
        Die Krankheit machte ihn zunehmend bewegungsunfähig &ndash; von der Brust abwärts
        gelähmt, verlor er die Kontrolle über weite Teile seines eigenen Körpers.</p>
        <p class="vb-intro"><strong>c) Erblindung auf einem Auge:</strong>
        Ein Auge erblindete vollständig; das verbliebene konnte er nur benutzen, wenn ihm
        jemand &ndash; oder er selbst mit einer Hand &ndash; das Lid anhob, während er mit der
        anderen Hand schrieb.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Eine bis heute umstrittene Diagnose:</strong>
        Heine selbst war überzeugt, an einer venerischen Krankheit zu leiden. Spätere
        Untersuchungen brachten unterschiedliche Erklärungen ins Spiel &ndash; darunter
        Neurosyphilis, Multiple Sklerose und, nach einer Haaranalyse von 1997, eine
        chronische Bleivergiftung. Eine sichere Diagnose gibt es bis heute nicht.</p>
        <p class="vb-intro"><strong>b) Krämpfe, Kopfschmerzen und ein zehrender Husten:</strong>
        Zu der Lähmung kamen quälende Krämpfe, pochende Kopfschmerzen und ein anhaltender
        Husten hinzu, die nur durch Opium und Morphium gelindert werden konnten.</p>
        <p class="vb-intro"><strong>c) Diktieren statt Schreiben:</strong>
        Als selbst das mühsame Offenhalten des Augenlids nicht mehr ausreichte, ging Heine
        dazu über, seine Texte zu diktieren &ndash; das Schreiben endete, das Dichten nicht.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) "Romanzero" (1851), geschrieben aus dem Bett:</strong>
        Sein dritter großer Gedichtband entstand vollständig während der Krankheit &ndash;
        voller Klagen und schonungsloser Reflexionen über die menschliche Existenz, gilt er
        bis heute als einer seiner bedeutendsten.</p>
        <p class="vb-intro"><strong>b) Ein Gedicht mit dem Titel "Morphine":</strong>
        Heine verarbeitete die eigene Abhängigkeit von Schmerzmitteln direkt literarisch
        &ndash; die Droge, die ihn am Leben hielt, wurde selbst zum Gegenstand seiner Kunst.</p>
        <p class="vb-intro"><strong>c) Besucher bis zuletzt empfangen:</strong>
        Trotz seines Zustands empfing Heine weiterhin Gäste in seiner "Matratzengruft" &ndash;
        unter ihnen Prominente seiner Zeit &ndash; und führte Gespräche mit demselben scharfen
        Witz, für den er zeitlebens bekannt war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Acht Jahre ohne Aufstehen:</strong>
        Von Mai 1848 bis zu seinem Tod im Februar 1856 verließ Heine sein Bett kein einziges
        Mal &ndash; eine der längsten dokumentierten Leidenszeiten eines bedeutenden
        Schriftstellers seiner Epoche.</p>
        <p class="vb-intro"><strong>b) Tod am 17. Februar 1856:</strong>
        Heine starb im Alter von 58 Jahren in Paris. Sein letzter überlieferter Ausspruch an
        seine betende Frau &ndash; "Gott wird mir verzeihen, das ist sein Beruf" &ndash; blieb
        sein Witz bis zum Ende.</p>
        <p class="vb-intro"><strong>c) Ein Werk, das die Krankheit überdauerte:</strong>
        Die in der Matratzengruft entstandenen späten Gedichte gelten heute als ein
        eigenständiger, oft als reifster bezeichneter Abschnitt seines Gesamtwerks.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Körper wird unsichtbar, die Stimme bleibt sichtbar:</strong>
        Während sein Körper zunehmend handlungsunfähig wurde, verstärkte sich paradoxerweise
        die öffentliche Präsenz seiner Stimme &ndash; genau die SO4w3-Dynamik, die Sichtbarkeit
        als Bestätigung der eigenen Bedeutung braucht, fand im Diktat einen letzten Kanal.</p>
        <p class="vb-intro"><strong>b) Der Dreierflügel und die Weigerung zu verstummen:</strong>
        Wo Rückzug und Schweigen naheliegend gewesen wären, entschied sich Heine für das
        Gegenteil: Besucher empfangen, diktieren, weiter Witz zeigen &ndash; die Bühne wurde
        kleiner, aber nie verlassen.</p>
        <p class="vb-intro"><strong>c) Leiden, das zu Literatur wurde, statt es zu verschweigen:</strong>
        Statt seine Qualen zu verbergen, machte Heine sie explizit zum Gegenstand seiner
        Gedichte &ndash; das eigene Leiden wurde, wie schon seine jüdisch-christliche
        Zerrissenheit zuvor, zu einem offen verhandelten Thema statt einem verborgenen Makel.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben, das nie ganz zugehörig war, endet in völliger Isolation:</strong>
        Heines gesamtes Leben war von der Frage geprägt, ob er wirklich dazugehörte &ndash;
        zur jüdischen Gemeinschaft, zur christlichen Mehrheitsgesellschaft, zum deutschen
        Kulturkreis im französischen Exil. Die Krankheit verschärfte diese Grundfrage bis
        zur physischen Konsequenz: ans Bett gefesselt, von der Welt fast vollständig
        abgeschnitten, blieb ihm nur noch die eigene Stimme als Brücke nach draußen.</p>
        <p class="vb-intro"><strong>b) Witz als letztes Mittel der Zugehörigkeit:</strong>
        Sein berühmter Sarkasmus bis zum Sterbebett war kein bloßer Charakterzug, sondern
        die letzte verbliebene Form, mit der Welt in Verbindung zu bleiben, nachdem der
        Körper fast alle anderen Kanäle verschlossen hatte.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet Nerven und Augen?</strong>
        Für eine soziale Vier mit Dreierflügel, deren gesamtes Selbstverständnis auf
        Sichtbarkeit und Wahrgenommenwerden beruhte, liegt eine Deutung nahe: Ausgerechnet
        jene Organe, die unmittelbar mit Wahrnehmen und Wahrgenommenwerden verbunden sind
        &ndash; die Augen, die sehen, und das Nervensystem, das die Verbindung zur Außenwelt
        trägt &ndash; wurden zum Ort der Krankheit. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Vier zwangsläufig zu neurologischen
        Erkrankungen führt &ndash; <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Heines Fall zeigen lässt, ist ein Muster
        im Umgang mit existenzieller Isolation, das bei einer ausgeprägten sozialen Vier mit
        Dreierflügel auffällt &ndash; eine von vielen möglichen Deutungen, kein Urteil. Das
        entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Heine kannte sein eigenes Muster nicht &ndash; die soziale Vier mit Dreierflügel
        braucht ein Publikum, um die eigene Bedeutung zu bestätigen, und genau dieses
        Bedürfnis lebte er bis in die letzten Wochen seines Lebens aus, indem er Besucher
        empfing und diktierte, statt sich in Stille zurückzuziehen. Wer die eigene
        Sehnsucht nach Sichtbarkeit nicht als Muster erkennt, verwechselt sie leicht mit
        reiner Schaffenskraft, obwohl auch die eigene Fixierung mitentscheidet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Parallele im gleichen Subtyp – Edvard Munch (SO4w5):</strong>
        Eine auffällige Parallele findet sich im
        <a href="javascript:void(0)" data-route="krankheitsportraets-edvard-munch">Krankheitsporträt Edvard Munchs</a>
        – ebenfalls eine soziale Vier, dort mit Fünferflügel. Wo Heine seine Lähmung in
        Gedichten verarbeitete, malte Munch jede seiner Krisen &ndash; Grippe, Augenkrankheit,
        Handverletzung &ndash; in Selbstporträts. Zwei verschiedene Flügel derselben sozialen
        Vier, dasselbe Grundmuster: Sichtbarkeit als Bewältigungsstrategie statt Verbergen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Vier mit Dreierflügel erklärt bei <strong>Heine</strong> vieles am
        Verlauf seiner eigenen Erkrankung: ein Mann, dessen gesamtes Selbstverständnis von
        Sichtbarkeit und Zugehörigkeit abhing, verlor fast seinen ganzen Körper an die
        Krankheit &ndash; und verteidigte bis zum letzten Atemzug die eine Verbindung, die
        ihm blieb: seine Stimme. Das Gürteltier, das sich in der Matratzengruft nicht
        einrollte, sondern weiterhin nach außen sprach.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-heinrich-heine", label:"Porträt: Heinrich Heine (SO4w3) – Lebenswerk"},
        {route:"krankheitsportraets-hans-christian-andersen", label:"Krankheitsporträt: Hans Christian Andersen (SO4w3)"},
        {route:"krankheitsportraets-romy-schneider", label:"Krankheitsporträt: Romy Schneider (SO4w3)"},
        {route:"krankheitsportraets-edvard-munch", label:"Krankheitsporträt: Edvard Munch (SO4w5) – dieselbe Bewältigungsstrategie, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so4", label:"Subtyp-Profil SO4"},
      ])}
    </div>
  `);
}

export function juergenDrewsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-juergen-drews-portrait.jpg" alt="Jürgen Drews" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jürgen Drews</p>
        <p class="krim-portrait-typ">SX9w8 · Sexueller Typ 9 mit Achterflügel · geb. 1945</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Faultier</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Tierentsprechung: Faultier" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jürgen Drews</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-juergen-drews">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um seine Karriere als Schlagersänger
        und um seine jahrzehntelange Ehe mit Ramona. Im Zentrum steht hier, was dort nur knapp
        erwähnt wird: seine 2022 öffentlich gemachte Diagnose der
        Nervenkrankheit Polyneuropathie und den stillen, unspektakulären Umgang damit.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Drews</strong> ist dem <strong>sexuellen Typ 9 mit Achterflügel</strong>
        zugeordnet. Die SX9 sucht Erfüllung über völlige Verschmelzung mit einer einzelnen
        intensiven Beziehung oder Aufgabe, verliert dabei aber leicht die eigenen
        Bedürfnisse und Warnsignale des eigenen Körpers aus dem Blick. Der Achterflügel
        bringt eine untypische Konfrontationsbereitschaft hinzu, die auch unbequeme
        Wahrheiten offen ausspricht, statt sie zu beschönigen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Taubheitsgefühle über Jahre kaum thematisiert:</strong>
        Polyneuropathie beginnt typischerweise schleichend, mit Kribbeln, Taubheit und
        nachlassender Kraft in Händen und Füßen – Symptome, die sich über Jahre hinweg
        langsam verstärken, bevor sie unübersehbar werden.</p>
        <p class="vb-intro"><strong>b) Ein Terminkalender, der keine Pause kannte:</strong>
        Auch als die ersten Beschwerden längst spürbar gewesen sein dürften, blieb Drews
        über Jahre im vollen Bühnen- und Tourbetrieb – Auftritte, Interviews, das
        sommerliche Mallorca-Programm, ohne erkennbare Verlangsamung.</p>
        <p class="vb-intro"><strong>c) Keine öffentliche Vorwarnung:</strong>
        Anders als bei manch anderem Krankheitsporträt dieses Kompasses gab es keine
        Phase öffentlich sichtbaren Rückzugs im Vorfeld – die Diagnose wurde erst
        bekannt, als der Bühnenabschied bereits beschlossen war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Diagnose Polyneuropathie:</strong>
        2022 gab Drews öffentlich bekannt, an der unheilbaren Nervenkrankheit
        Polyneuropathie zu leiden, die Taubheit, Schmerzen und Muskelschwund verursacht,
        und kündigte in diesem Zusammenhang seinen Bühnenabschied an.</p>
        <p class="vb-intro"><strong>b) Ein vergleichsweise milder, kontrollierter Verlauf:</strong>
        Nach eigenen Angaben verläuft die Erkrankung bei ihm vergleichsweise mild und
        lässt sich medizinisch einigermaßen kontrollieren – kein dramatischer
        Zusammenbruch, sondern ein Leiden, mit dem er lernte umzugehen.</p>
        <p class="vb-intro"><strong>c) Trotzdem: Weiterarbeit statt Rückzug:</strong>
        Trotz der Diagnose und des angekündigten Bühnenabschieds veröffentlichte Drews
        2025, mit 80 Jahren, ein neues Album und gab weiterhin Interviews – der
        angekündigte Rückzug wurde nie zu einem vollständigen Verstummen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) „Ich bin müde, aber nicht fertig":</strong>
        Im ZDF-Sommerinterview 2025 fasste Drews seinen Zustand in diesem einen Satz
        zusammen – eine nüchterne, fast beiläufige Formulierung ohne jede Dramatik,
        typisch für den Umgang der Neun mit dem eigenen Leiden.</p>
        <p class="vb-intro"><strong>b) Gerüchte statt Klarheit:</strong>
        Die öffentliche Zurückhaltung schuf über Jahre einen Nährboden für wiederholte
        Todesgerüchte im Internet – Drews selbst reagierte darauf nie mit großer
        Empörung, sondern mit stiller Gelassenheit.</p>
        <p class="vb-intro"><strong>c) Keine Inszenierung als Kampf:</strong>
        Anders als in vielen öffentlichen Krankheitsgeschichten prominenter Menschen
        stilisierte Drews seine Erkrankung nie zu einem Kampf, den es zu gewinnen gilt –
        sie blieb ein Umstand, mit dem weitergelebt wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein Bühnenabschied, der keiner wurde:</strong>
        Der 2022 angekündigte Rückzug von der Bühne blieb ein gleitender Übergang statt
        eines endgültigen Schlusspunkts – Interviews, ein neues Album, gelegentliche
        Auftritte blieben Teil seines Lebens.</p>
        <p class="vb-intro"><strong>b) Die Familie als tragende Konstante:</strong>
        Ehefrau Ramona und Tochter Joelina blieben durch die gesamte Zeit an seiner
        Seite – dieselbe enge Bindung, die schon sein berufliches Leben über Jahrzehnte
        prägte, trug ihn auch durch die gesundheitliche Phase.</p>
        <p class="vb-intro"><strong>c) Öffentliche Anteilnahme trotz Zurückhaltung:</strong>
        Obwohl Drews selbst kaum Dramatik in seine Krankengeschichte legte, löste jede
        seiner spärlichen öffentlichen Äußerungen dazu großes mediales Echo aus – ein
        Fanpublikum, das seit Jahrzehnten emotional an ihm hängt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Verschmelzung mit der Rolle bis zuletzt:</strong>
        Die für die sexuelle Neun typische Strategie, sich mit einer Aufgabe oder einem
        Publikum zu verschmelzen, zeigte sich bei Drews darin, dass selbst eine
        fortschreitende Nervenkrankheit die Bindung an Bühne und Fans nicht vollständig
        durchtrennte.</p>
        <p class="vb-intro"><strong>b) Der Achterflügel als unverblümte Offenheit:</strong>
        Dass Drews weder seine Krankheit beschönigte noch sein eigenes Erfolgsmilieu
        schonte, trägt die Handschrift des Achterflügels: nicht Verdrängung, sondern
        eine klare, manchmal unbequeme Direktheit, auch gegenüber sich selbst.</p>
        <p class="vb-intro"><strong>c) Geringe Neigung, das eigene Leiden zur Bühne zu machen:</strong>
        Typisch für die Neun ist die Zurückhaltung, die eigene Not laut zu artikulieren
        – Drews' spärliche, nüchterne Aussagen zu seiner Krankheit passen genau in
        dieses Muster.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Leben, das schon vor der Diagnose auf Beständigkeit baute:</strong>
        Dieselbe Ehe seit 1994, dasselbe Mallorca-Publikum seit den 1990er-Jahren,
        dasselbe Genre seit Jahrzehnten – Drews' Lebensmuster war lange vor der
        Erkrankung von Konstanz geprägt, nicht von ständigem Neuanfang.</p>
        <p class="vb-intro"><strong>b) Die Krankheit als Fortsetzung, nicht als Bruch:</strong>
        Anders als ein dramatischer Einschnitt fügt sich die Polyneuropathie nahtlos in
        dieses Muster ein: Auch mit ihr macht Drews im Grunde weiter wie zuvor, nur mit
        angepasstem Tempo statt mit vollständigem Rückzug.</p>
        <p class="vb-intro"><strong>c) Eine Parallele zu Diego Velázquez, ebenfalls SX9 in diesem Kompass, anderer Flügel:</strong>
        Wie bei <a href="javascript:void(0)" data-route="krankheitsportraets-diego-velazquez">Diego Velázquez</a>,
        der noch mit über sechzig Jahren keine Anzeichen zeigte, kürzerzutreten, und
        bis zur völligen Erschöpfung im Dienst blieb, zeigt sich auch bei Drews eine
        geringe Neigung, rechtzeitig eine Pause einzulegen. Der entscheidende
        Unterschied liegt nicht nur im Verlauf – wo Velázquez' Körper sich erst
        schlagartig, binnen einer Woche, meldete, verläuft Drews' Erkrankung langsam
        und diagnostiziert –, sondern auch im Flügel: Wo der Einserflügel Velázquez'
        Erschöpfung in stiller Pflichterfüllung verbarg, äußert sich Drews' Achterflügel
        offen und direkt, auch über die eigene Schwäche. Das Grundmuster, dem eigenen
        Publikum und der eigenen Aufgabe treu zu bleiben, auch wenn der Körper längst
        Grenzen anmeldet, verbindet beide Fälle dennoch.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet eine Nervenkrankheit?</strong>
        Für eine sexuelle Neun, deren Selbstwahrnehmung ohnehin strukturell hinter der
        Wahrnehmung anderer zurücktritt, liegt eine Deutung nahe: Ausgerechnet ein
        Leiden, das die körperliche Wahrnehmung selbst betrifft – Taubheit statt
        Schmerz, ein Nachlassen des Spürens –, passt zu einem Menschen, der die eigenen
        Signale ohnehin gewohnt ist zu überhören. Diese Deutung ist eine plausible
        Interpretation, kein belegter historischer Kausalzusammenhang, und wird im
        Psychosomatik-Register dieses Kompasses noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Neun zwangsläufig zu
        Nervenerkrankungen führt – <strong>jeder Mensch kann jede Krankheit bekommen,
        unabhängig vom Subtyp.</strong> Was sich an Drews' Fall zeigen lässt, ist ein
        Muster, das beim ruhigen Weitermachen trotz körperlicher Warnsignale in der
        Praxis immer wieder auffällt – eine von vielen möglichen Erklärungen, kein
        Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach
        im <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Drews kennt sein eigenes Enneagramm-Muster mit großer Wahrscheinlichkeit nicht – Genaues lässt sich darüber naturgemäß nicht wissen. Die sexuelle Neun mit
        Achterflügel verschmilzt fast reflexhaft mit Publikum und Werk und übergeht
        dabei leicht die eigenen körperlichen Warnsignale, statt rechtzeitig
        innezuhalten. Genau das bestimmte über Jahrzehnte unkorrigiert seinen Alltag: ein volles
        Bühnenprogramm ohne erkennbare Pausen, bis der Körper selbst die Grenze setzte.
        Wer die eigene Neigung zur grenzenlosen Verschmelzung nicht als Muster erkennt,
        verwechselt sie leicht mit reiner Liebe zum Beruf, selbst wenn der eigene Körper
        längst Warnsignale sendet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Jürgen Drews'</strong> Umgang mit seiner Polyneuropathie lässt sich
        die sexuelle Neun mit Achterflügel in einer ihrer offensten Formen studieren:
        keine beschönigte Krankheitserzählung, sondern ein unverblümtes Weitermachen –
        dieselbe Frau, dasselbe Publikum, dasselbe Genre, jetzt eben mit Taubheit in den
        Nerven statt mit voller Kraft, offen benannt statt verschwiegen. Das Faultier
        bleibt auf seinem Ast, auch wenn der Ast selbst zu spüren aufhört – und sagt es
        auch laut.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-juergen-drews", label:"Porträt: Jürgen Drews (SX9w8) – Lebenswerk"},
        {route:"krankheitsportraets-diego-velazquez", label:"Krankheitsporträt: Diego Velázquez (SX9w1) – dieselbe grenzenlose Verfügbarkeit, anderer Flügel"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx9", label:"Subtyp-Profil SX9"},
      ])}
    </div>
  `);
}

export function avrilLavigneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-avril-lavigne-portrait.jpg" alt="Avril Lavigne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Avril Lavigne</p>
        <p class="krim-portrait-typ">SX6w7 · Sexueller Typ 6 mit Siebenerflügel · geb. 1984</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Tierentsprechung: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Avril Lavigne</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-avril-lavigne">Porträt
        berühmter Persönlichkeiten</a> in diesem Kompass vertreten – dort geht es um ihre
        Musikkarriere und ihren konfrontativen Umgang mit dem Popstar-Image ihrer Zeit. Im
        Zentrum dieser Seite steht ein anderes Kapitel: eine monatelange, lebensbedrohliche
        Borreliose-Erkrankung, die 2014 begann.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Lavigne</strong> ist dem <strong>sexuellen Typ 6 mit Siebenerflügel</strong>
        zugeordnet. Als Kontratyp der Sechs begegnet die SX6 der eigenen Angst nicht mit
        Rückzug, sondern mit direkter Konfrontation; der Siebenerflügel gibt ihr die
        Fähigkeit, selbst schwerste Erfahrungen mit einer gewissen Selbstironie und
        Zukunftsorientierung zu verarbeiten, statt sich in der Schwere zu verlieren. Genau
        diese Kombination – die Krankheit direkt benennen, statt sie zu verstecken, und sie
        anschließend in ein positives, zukunftsgerichtetes Projekt verwandeln – bestimmte den
        Umgang mit der eigenen Borreliose-Erkrankung.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Rätselhafte, sich verschlimmernde Erschöpfung:</strong>
        2014 entwickelte Lavigne eine zunehmende, zunächst nicht erklärbare Erschöpfung, die
        binnen weniger Wochen zu vollständiger Bettlägerigkeit führte.</p>
        <p class="vb-intro"><strong>b) Monatelange diagnostische Unsicherheit:</strong>
        Mehrere Ärzte konnten die Ursache zunächst nicht bestimmen, was die Situation für
        Lavigne und ihr Umfeld zusätzlich belastete.</p>
        <p class="vb-intro"><strong>c) Diagnose Borreliose im Oktober 2014:</strong>
        Erst im Oktober 2014 wurde bei ihr eine durch einen Zeckenbiss übertragene Borreliose
        diagnostiziert – eine Erklärung, die nach Monaten der Ungewissheit endlich Klarheit
        brachte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Fünf Monate vollständige Bettlägerigkeit:</strong>
        Lavigne war rund fünf Monate lang bettlägerig, konnte zeitweise weder sprechen noch
        sich bewegen oder selbstständig duschen.</p>
        <p class="vb-intro"><strong>b) Die Überzeugung, sterben zu müssen:</strong>
        In einem späteren Interview bei ›Good Morning America‹ (2015) beschrieb sie, in
        dieser Zeit überzeugt gewesen zu sein, sie werde sterben – eine existenzielle
        Bedrohung, die sie zunächst weitgehend privat verarbeitete.</p>
        <p class="vb-intro"><strong>c) Zunächst kein öffentliches Bekenntnis:</strong>
        Rund ein Jahr lang hielt Lavigne die Erkrankung weitgehend aus der Öffentlichkeit
        heraus, bevor sie sich entschied, offen darüber zu sprechen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Offenes Interview statt fortgesetzter Verheimlichung:</strong>
        2015 entschied sich Lavigne, die Krankheit öffentlich zu machen, und beschrieb
        detailliert und unverblümt, wie nah sie dem Tod gewesen war.</p>
        <p class="vb-intro"><strong>b) Gründung der Avril Lavigne Foundation:</strong>
        Aus der eigenen Erfahrung heraus gründete sie eine Stiftung, die junge Menschen mit
        chronischen Erkrankungen und Behinderungen unterstützt – eine direkte Übersetzung des
        eigenen Leidens in konkretes Handeln für andere.</p>
        <p class="vb-intro"><strong>c) Musik als Verarbeitung statt Verdrängung:</strong>
        Ihr 2019 erschienenes Album ›Head Above Water‹, insbesondere der gleichnamige
        Titelsong, verarbeitet die Erkrankung direkt und explizit – Zeilen über das Ringen mit
        dem eigenen Ertrinken wurden als unmittelbare Reaktion auf die Nahtoderfahrung
        verstanden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Breite mediale Aufmerksamkeit für eine oft übersehene Krankheit:</strong>
        Lavignes öffentliche Offenheit trug dazu bei, Borreliose und die oft langwierige,
        schwer zu diagnostizierende Krankheitsgeschichte Betroffener einem großen Publikum
        bekannt zu machen.</p>
        <p class="vb-intro"><strong>b) Kommerzieller und kritischer Erfolg von ›Head Above Water‹:</strong>
        Das Album, das direkt aus der Krankheitserfahrung hervorging, wurde zu einem ihrer
        erfolgreichsten Werke seit Jahren.</p>
        <p class="vb-intro"><strong>c) Fortgesetztes öffentliches Engagement:</strong>
        Auch Jahre nach der akuten Erkrankung blieb Lavigne über ihre Stiftung öffentlich mit
        dem Thema chronische Krankheit verbunden, statt das Kapitel nach der Genesung
        abzuschließen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Wolf, der die Bedrohung schließlich direkt benennt:</strong>
        Die SX6-typische Strategie, Bedrohung nicht durch Rückzug, sondern durch direkte
        Konfrontation zu bewältigen, zeigte sich auch hier – nur zeitlich verschoben: Nach der
        anfänglichen, existenziell bedingten Schockstarre wandte sich Lavigne der Krankheit
        aktiv zu, statt sie weiter zu verschweigen.</p>
        <p class="vb-intro"><strong>b) Der Siebenerflügel und die Verwandlung von Leid in Zukunftsprojekt:</strong>
        Statt in der Krankheitsgeschichte zu verharren, übersetzte Lavigne die Erfahrung in
        zwei zukunftsgerichtete Projekte – ein neues Album und eine eigene Stiftung. Das passt
        zur Fähigkeit des Siebenerflügels, selbst aus einer existenziellen Krise heraus neue,
        positive Möglichkeiten zu entwickeln, statt in der Schwere zu verharren.</p>
        <p class="vb-intro"><strong>c) Keine halbe Offenheit:</strong>
        Wie schon in ihrer öffentlichen Auseinandersetzung mit Kritikern kannte auch ihr
        Umgang mit der eigenen Krankheit keine halben Lösungen: kein diskretes Andeuten,
        sondern ein vollständiges, unverblümtes Interview über die Nahtoderfahrung – die
        SX6w7 in ihrer direktesten Form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Eine Stimme, die plötzlich verstummte:</strong>
        Lavignes gesamte Karriere beruhte auf ihrer Stimme und körperlichen Bühnenpräsenz.
        Ausgerechnet diese Fähigkeiten – sprechen, sich bewegen – waren es, die ihr die
        Krankheit zeitweise vollständig raubte.</p>
        <p class="vb-intro"><strong>b) Eine Parallele im gleichen Subtyp:</strong>
        Eine Parallele zeigt sich bei
        <a href="javascript:void(0)" data-route="krankheitsportraets-michael-schumacher">Michael
        Schumacher (SX6w7)</a>: Auch bei ihm traf eine plötzliche, existenzielle Krise einen
        Menschen, dessen gesamtes Berufsleben auf körperlicher Kontrolle beruhte. Der
        entscheidende Unterschied liegt im Umgang danach: Wo Schumachers Umfeld die Bedrohung
        durch vollständige Abschottung kontrollierte, wählte Lavigne den entgegengesetzten Weg
        derselben SX6w7-Logik – Kontrolle durch vollständige Offenlegung statt durch
        Verschweigen.</p>
        <p class="vb-intro"><strong>c) Wenn die Sechs unter chronischem Stress zur Drei wird:</strong>
        In den Monaten unmittelbar nach ihrer Genesung fällt eine für die sonst so direkte,
        konfrontative SX6 ungewöhnliche Verschiebung auf: ein verstärkter Fokus auf sichtbaren
        beruflichen Erfolg – ein neues Album, eine öffentlichkeitswirksame Stiftungsgründung –,
        fast als müsse die überstandene Verletzlichkeit durch schnell sichtbare Leistung
        wettgemacht werden. Wer über Monate in einer existenziellen Krise lebt, bewegt sich
        entlang seiner Stresslinie in Richtung seines Stresspunkts – bei der Sechs ist das die
        Drei. Dieser verstärkte Fokus auf Image und Erfolg direkt nach der Genesung erinnert
        an die Leistungslogik des Stresspunkts, nicht an die reine Konfrontationsfreude des
        Kerntyps – bei unverändertem Kerntyp SX6w7.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet ein Zeckenbiss, unsichtbar und schleichend?</strong>
        Für eine sexuelle Sechs, deren gesamte Strategie auf dem direkten Erkennen und
        Konfrontieren sichtbarer Bedrohungen beruht, liegt eine Deutung nahe: Die Krankheit,
        die sie traf, war das genaue Gegenteil einer sichtbaren, konfrontierbaren Gefahr – ein
        unsichtbarer, monatelang nicht diagnostizierbarer Erreger, dem man sich nicht direkt
        entgegenstellen konnte. Diese Deutung ist eine plausible Interpretation, kein belegter
        medizinischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Sechs zwangsläufig zu Borreliose oder
        vergleichbaren Erkrankungen führt – <strong>jeder Mensch kann jede Krankheit
        entwickeln, unabhängig vom Subtyp.</strong> Was sich an Lavignes Fall zeigen lässt,
        ist ein Muster im Umgang mit einer existenziellen, zunächst unsichtbaren Bedrohung,
        das bei einer ausgeprägten sexuellen Sechs mit Siebenerflügel immer wieder auffällt –
        eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende Krankheitsbild
        wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Lavigne kennt ihr eigenes Muster vermutlich nicht als Enneagramm-Struktur – die
        sexuelle Sechs mit Siebenerflügel hält reflexhaft an direkter Konfrontation und der
        Verwandlung von Leid in sichtbare Leistung fest, statt sich auch einfach nur erholen
        zu dürfen, ohne sofort wieder etwas daraus machen zu müssen. Wer die eigene Neigung,
        selbst existenzielle Krisen unmittelbar in neue Projekte zu übersetzen, nicht als
        Muster erkennt, riskiert, sich selbst die notwendige Zeit für reine Erholung ohne
        Zielrichtung zu verweigern.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Sechs mit Siebenerflügel erklärt bei <strong>Avril Lavigne</strong>
        vieles am Umgang mit der eigenen Borreliose-Erkrankung: eine Frau, die eine
        unsichtbare, existenzielle Bedrohung zunächst nicht direkt fassen konnte, verwandelte
        sie, sobald sie benennbar war, in offene Konfrontation und anschließend in ein
        zukunftsgerichtetes Werk. Der Wolf, der die Bedrohung nicht mehr fliehen musste, sobald
        er sie endlich sehen konnte.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-avril-lavigne", label:"Porträt: Avril Lavigne (SX6w7) – Lebenswerk"},
        {route:"krankheitsportraets-michael-schumacher", label:"Krankheitsporträt: Michael Schumacher (SX6w7) – gleicher Subtyp"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx6", label:"Subtyp-Profil SX6"},
      ])}
    </div>
  `);
}

export function steveJobsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-steve-jobs-portrait.jpg" alt="Steve Jobs" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Steve Jobs</p>
        <p class="krim-portrait-typ">SO1w2 · Sozialer Typ 1 mit Zweierflügel · 1955–2011</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Gans</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Tierentsprechung: Gans" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Steve Jobs</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-steve-jobs">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk bei Apple, NeXT und Pixar.
        Hier rückt ein Kapitel in den Mittelpunkt, das dort nur am Rande erwähnt wird: die 2003
        gestellte Diagnose eines seltenen, grundsätzlich gut behandelbaren neuroendokrinen
        Tumors der Bauchspeicheldrüse – und die neun Monate, in denen Jobs die empfohlene
        Operation zugunsten eigener, alternativer Ansätze hinauszögerte, bevor der Krebs 2009
        auf die Leber übergriff und schließlich 2011 zu seinem Tod führte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Jobs</strong> ist der <strong>sozialen Eins mit Zweierflügel</strong>
        zugeordnet. Naranjo beschrieb die soziale Eins als den Subtyp, der seinen
        Vollkommenheitsanspruch nicht primär nach innen, sondern an Systeme und das große Bild
        dessen richtet, wie etwas sein sollte. Genau dieser Anspruch – es gibt einen richtigen
        und einen falschen Weg – galt bei Jobs auch für die eigene Krankheit: Er entschied sich
        zunächst gegen die schulmedizinisch empfohlene Operation und für einen strengen,
        selbst zusammengestellten Ansatz aus veganer Diät, Akupunktur, Kräutermitteln und
        spirituellen Praktiken.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein Zufallsbefund bei einer Routineuntersuchung:</strong>
        Im Oktober 2003 wurde bei einer CT-Untersuchung der Nieren zufällig ein Tumor an der
        Bauchspeicheldrüse entdeckt – ein neuroendokriner Tumor, eine seltene und im Vergleich
        zum weit aggressiveren Pankreas-Adenokarzinom deutlich besser behandelbare Krebsform.</p>
        <p class="vb-intro"><strong>b) Die ärztliche Empfehlung: sofortige Operation:</strong>
        Jobs' Ärzte rieten zur umgehenden chirurgischen Entfernung des Tumors – bei dieser
        Tumorart eine Behandlung mit guten Heilungschancen, wenn sie frühzeitig erfolgt.</p>
        <p class="vb-intro"><strong>c) Die Entscheidung dagegen:</strong>
        Statt der Operation zuzustimmen, entschied sich Jobs für neun Monate für einen eigenen,
        streng befolgten Ansatz aus veganer Ernährung, Akupunktur, pflanzlichen Nahrungsergänzungsmitteln
        und Beratungen bei spirituellen Heilern – eine Entscheidung, die er nach eigenen, klar
        gesetzten Prinzipien traf, nicht aus Verdrängung oder Angst vor dem Thema selbst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Die Operation folgt neun Monate später:</strong>
        Erst im Juli 2004, nachdem bildgebende Verfahren ein Wachstum des Tumors zeigten,
        stimmte Jobs einer Whipple-Operation (partielle Entfernung von Bauchspeicheldrüse,
        Zwölffingerdarm und Gallenblase) zu.</p>
        <p class="vb-intro"><strong>b) Rückkehr in den Apple-Alltag trotz der Diagnose:</strong>
        Bereits wenige Wochen nach der Operation kehrte Jobs in seine Führungsrolle bei Apple
        zurück und trieb die Entwicklung von iPhone und iPad mit demselben kompromisslosen
        Qualitätsanspruch voran wie zuvor.</p>
        <p class="vb-intro"><strong>c) Eine Lebertransplantation 2009:</strong>
        Als der Krebs auf die Leber übergriff, unterzog sich Jobs im April 2009 in Memphis,
        Tennessee, einer Lebertransplantation – ein Eingriff, den er zunächst öffentlich nur
        vage als „Hormonungleichgewicht" kommunizierte, bevor die tatsächliche Ursache bekannt
        wurde.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Die eigene Gesundheit nach eigenen Maßstäben ordnen:</strong>
        Jobs behandelte die Entscheidung über seine Krebstherapie nicht als medizinische
        Frage, die er an Fachleute delegierte, sondern als eine, die er nach eigens gesetzten
        Prinzipien selbst kontrollieren wollte – dieselbe Haltung, mit der er jedes
        Apple-Produkt bis ins letzte Detail selbst bestimmte.</p>
        <p class="vb-intro"><strong>b) Öffentliche Kommunikation nur in kontrollierten Dosen:</strong>
        Über Jahre hinweg gab Jobs nur minimale, sorgfältig formulierte Informationen über
        seinen Gesundheitszustand heraus – etwa während eines Apple-Events 2008, als er
        sichtbar abgemagert erschien, während das Unternehmen dies öffentlich auf eine
        „häufige Erkältung" zurückführte.</p>
        <p class="vb-intro"><strong>c) Arbeit bis an die Grenze der körperlichen Möglichkeiten:</strong>
        Auch nach der Lebertransplantation und mehreren krankheitsbedingten Auszeiten (2009,
        2011) blieb Jobs bis kurz vor seinem Tod inhaltlich in Produktentscheidungen
        eingebunden, bevor er im August 2011 als CEO zurücktrat.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Eine spätere, selbst eingeräumte Reue:</strong>
        Jobs bezeichnete die neun Monate der verzögerten Operation gegenüber seinem Biografen
        Walter Isaacson später selbst als Fehler – ein seltenes Eingeständnis bei einem Mann,
        der eigene Entscheidungen sonst kaum öffentlich infrage stellte.</p>
        <p class="vb-intro"><strong>b) Acht Jahre zwischen Diagnose und Tod:</strong>
        Von der ersten Diagnose 2003 bis zu seinem Tod am 5. Oktober 2011 im Alter von 56
        Jahren lagen acht Jahre, in denen Jobs parallel zur fortschreitenden Erkrankung einige
        der einflussreichsten Produkte der jüngeren Technikgeschichte auf den Markt brachte.</p>
        <p class="vb-intro"><strong>c) Ein Rücktritt erst, als die Kontrolle nicht mehr zu halten war:</strong>
        Erst als seine körperliche Verfassung eine aktive Führung endgültig unmöglich machte,
        übergab Jobs die Position des CEO an Tim Cook – bis dahin hielt er an der eigenen
        Kontrolle über das Unternehmen fest, so lange es irgend ging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der eigene Maßstab als Kompass, auch in der Krise:</strong>
        Die neun Monate alternativer Behandlung waren keine Verweigerung aus Angst, sondern
        Ausdruck derselben Überzeugung, mit der Jobs auch Apple führte: dass es einen
        richtigen Weg gibt, den er selbst finden und verantworten muss, statt ihn einfach zu
        übernehmen.</p>
        <p class="vb-intro"><strong>b) Der Zweierflügel als Sorge um Kontrolle über die eigene Wirkung:</strong>
        Die dosierte, zurückhaltende öffentliche Kommunikation über seine Krankheit zeigt den
        Zweierflügel: Es ging nicht um Verheimlichung aus Scham, sondern um die bewusste
        Steuerung dessen, welches Bild von ihm und Apple nach außen entstehen sollte.</p>
        <p class="vb-intro"><strong>c) Arbeit als Fortsetzung des eigenen Prinzips bis zuletzt:</strong>
        Dass Jobs auch nach der Transplantation und mehreren Auszeiten in zentrale
        Produktentscheidungen eingebunden blieb, zeigt dieselbe soziale Eins, die ihren
        Anspruch an Qualität und Kontrolle nicht der eigenen Krankheit unterordnete, sondern
        bis zur physischen Grenze aufrechterhielt.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Derselbe Perfektionsanspruch, auf die eigene Gesundheit übertragen:</strong>
        Wo Jobs bei Apple keine Kompromisse bei Qualität duldete, wandte er dasselbe Prinzip
        auf seine Krebstherapie an – nicht der schnellste oder sicherste Weg zählte für ihn,
        sondern der Weg, den er selbst als den richtigen erkannt hatte.</p>
        <p class="vb-intro"><strong>b) Eine auffällige Parallele: David Bowie, ebenfalls SO1w2</strong> –
        auch dessen <a href="javascript:void(0)" data-route="krankheitsportraets-david-bowie">Krankheitsporträt in diesem Kompass</a>
        zeigt denselben Grundzug: Statt die eigene Krebsdiagnose einer äußeren Autorität oder
        der Öffentlichkeit zur Deutung zu überlassen, verwandelte Bowie sie in sein bewusst
        komponiertes letztes Album ›Blackstar‹ – bei beiden SO1w2-Männern wurde die eigene
        Sterblichkeit zu einem Vorgang, den sie selbst gestalten, statt ihn nur zu erleiden.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet eine verzögerte Behandlung?</strong>
        Für eine soziale Eins mit Zweierflügel, deren Selbstverständnis daran hängt, den
        richtigen Weg selbst zu erkennen und zu gehen, lässt sich in der neunmonatigen
        Verzögerung eine Zuspitzung des eigenen Lebensmusters lesen: Auch die eigene Diagnose
        wurde zunächst wie ein weiteres Problem behandelt, für das eine eigene, bessere Lösung
        gefunden werden musste, statt die medizinische Standardempfehlung ungeprüft zu
        übernehmen. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Eins mit Zweierflügel zwangsläufig zu
        verzögerten Behandlungsentscheidungen führt – <strong>jeder Mensch kann jede Krankheit
        bekommen, unabhängig vom Subtyp.</strong> Neuroendokrine Pankreastumoren treten
        unabhängig von Persönlichkeitsstruktur auf, und Jobs' spätere Erkenntnis, die
        Verzögerung sei ein Fehler gewesen, zeigt, dass er selbst diesen Zusammenhang erkannte.
        Was sich an seinem Fall zeigen lässt, ist ein Muster im Umgang mit der eigenen
        Diagnose, das bei einer ausgeprägten sozialen Eins mit Zweierflügel immer wieder
        auffällt – eine von vielen möglichen Deutungen, kein Urteil. Das entsprechende
        Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Jobs kannte, wie die meisten Menschen, sein Enneagramm-Muster nicht bewusst. Ohne
        dieses Wissen lebte er seine Überzeugung, den richtigen Weg selbst erkennen und
        bestimmen zu müssen, ungebremst auch auf die eigene Krebsdiagnose aus, statt der
        ärztlichen Empfehlung zu folgen und rechtzeitig die Notbremse zu ziehen – ein Zug, der
        ihn beruflich zu außergewöhnlichen Leistungen trieb, ihm bei der eigenen Gesundheit
        aber möglicherweise wertvolle Zeit kostete. Wer das eigene Muster erkennt, kann bewusst
        gegensteuern; wer es nicht kennt, wiederholt es, bis der Körper die Grenze setzt, die
        der Mensch selbst nicht zog.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die soziale Eins mit Zweierflügel bestätigt sich bei <strong>Steve Jobs</strong> noch
        einmal in der Konsequenz, mit der er selbst die eigene Krebstherapie nach eigenen
        Prinzipien statt nach ärztlicher Empfehlung gestaltete. Die Gans, die für ihre
        Überzeugung nie auswich, verteidigte auch im Angesicht der eigenen Sterblichkeit ihren
        Anspruch, den richtigen Weg selbst zu bestimmen – bis eine Krankheit kam, bei der genau
        dieser Anspruch sie neun entscheidende Monate kostete.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-steve-jobs", label:"Porträt: Steve Jobs (SO1w2) – Lebenswerk"},
        {route:"krankheitsportraets-david-bowie", label:"Krankheitsporträt: David Bowie (SO1w2)"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so1", label:"Subtyp-Profil SO1"},
      ])}
    </div>
  `);
}

export function davidHockneyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-hockney-portrait.jpg" alt="David Hockney" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Hockney</p>
        <p class="krim-portrait-typ">SO5w4 · Sozialer Typ 5 mit Viererflügel · 1937–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Oktopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Tierentsprechung: Oktopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Hockney</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-david-hockney">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um sein Lebenswerk und seine Typstruktur im
        Allgemeinen. Dieses Porträt widmet sich einem Kapitel, das dort kaum vorkommt: ein seit
        den 1970er-Jahren fortschreitender Hörverlust und ein Schlaganfall 2012, den er zuerst
        daran bemerkte, dass er Sätze nicht mehr zu Ende bringen konnte.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Hockney</strong> ist dem <strong>sozialen Typ 5 mit Viererflügel</strong>
        zugeordnet. Die SO5 sucht Sicherheit über Wissen und ein eigenständiges Verständnis der
        Welt, das sie der Gemeinschaft zur Verfügung stellt. Der Viererflügel bringt eine
        melancholische, individualistische Note hinzu – das Bedürfnis, die eigene Wahrnehmung
        in eine unverwechselbare, persönliche Form zu bringen. Genau dieses Verhältnis von
        Wahrnehmung und Ausdruck prägt auch Hockneys Umgang mit dem eigenen Hörverlust und dem
        Schlaganfall.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Ein schleichender Verlust seit den 1970er-Jahren:</strong>
        Hockneys Hörvermögen verschlechterte sich über Jahrzehnte hinweg allmählich, ohne ein
        einzelnes dramatisches Ereignis – ein Verlust, der sich eher einschlich, als dass er
        hereinbrach.</p>
        <p class="vb-intro"><strong>b) Spätere Hörgeräte als sichtbares Zeichen:</strong>
        Erst deutlich später griff Hockney zu Hörgeräten – ein äußerlich sichtbares Eingeständnis
        einer Einschränkung, die er lange Zeit vor allem mit sich selbst ausmachte.</p>
        <p class="vb-intro"><strong>c) Ein plötzliches zweites Ereignis 2012:</strong>
        Jahrzehnte nach den ersten Anzeichen des Hörverlusts kam 2012 ein Schlaganfall hinzu –
        bemerkt zunächst nicht über ein körperliches Symptom, sondern darüber, dass er
        angefangene Sätze nicht mehr zu Ende bringen konnte.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) Zwei verschiedene Sinne, zwei verschiedene Zeiträume:</strong>
        Der Hörverlust zog sich über Jahrzehnte, der Schlaganfall traf ihn dagegen abrupt – zwei
        völlig unterschiedliche Verlaufsformen körperlicher Einschränkung in ein und demselben
        Leben.</p>
        <p class="vb-intro"><strong>b) Sprache betroffen, nicht die Hand:</strong>
        Anders als bei manchen anderen Schlaganfallfällen blieb bei Hockney offenbar die
        Fähigkeit zu zeichnen und zu malen erhalten – betroffen war der sprachliche Ausdruck,
        nicht der bildnerische.</p>
        <p class="vb-intro"><strong>c) Erholung statt dauerhafter Lähmung:</strong>
        Hockney erholte sich vom Schlaganfall so weit, dass er sein künstlerisches Schaffen
        fortsetzen konnte – anders als etwa bei Leonardo da Vinci, dessen Schlaganfall eine
        dauerhafte Lähmung der rechten Hand hinterließ.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Das Sehen bleibt, das Hören schwindet:</strong>
        Für einen Künstler, dessen gesamtes Lebenswerk der Frage galt, wie Menschen wirklich
        sehen, blieb ausgerechnet der visuelle Sinn intakt, während der auditive sich
        zurückzog – eine Verschiebung, die seine ohnehin stark visuelle, nach innen gerichtete
        Konzentration eher verstärkt als gestört haben dürfte.</p>
        <p class="vb-intro"><strong>b) Ein neues Medium kurz vor und nach der Krise:</strong>
        Hockney begann bereits mit 72 Jahren, also kurz vor dem Schlaganfall, mit dem iPad als
        Kunstmedium zu arbeiten, und führte diese Arbeit danach unvermindert fort – eine
        Fortsetzung der eigenen Bildsprache über die gesundheitliche Zäsur hinweg, statt eines
        Bruchs.</p>
        <p class="vb-intro"><strong>c) Kein öffentliches Drama um die eigene Einschränkung:</strong>
        Weder der Hörverlust noch der Schlaganfall wurden von Hockney zu einem zentralen
        öffentlichen Thema seines Schaffens gemacht – er arbeitete weiter, ohne die eigene
        Krankheitsgeschichte in den Vordergrund zu stellen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Ein langes Weiterarbeiten bis ins hohe Alter:</strong>
        Hockney blieb bis in seine Achtzigerjahre künstlerisch aktiv, mit Ausstellungen und
        neuen Werken, die weit über den Zeitpunkt seiner gesundheitlichen Einschränkungen
        hinausreichten.</p>
        <p class="vb-intro"><strong>b) Tod 2026 im Alter von 88 Jahren:</strong>
        Hockney starb 2026 im Alter von 88 Jahren „friedlich zu Hause", wie sein Sprecher
        mitteilte. Eine offizielle, konkrete Todesursache wurde nicht bestätigt.</p>
        <p class="vb-intro"><strong>c) Spekulationen ohne belegte Grundlage:</strong>
        In Medienberichten kursierten Vermutungen über einen möglichen Zusammenhang mit
        langjährigem Tabakkonsum, seinem Alter oder früheren gesundheitlichen Problemen – all
        das blieb jedoch unbestätigte Spekulation, keine offiziell festgestellte Todesursache.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Rückzug ins Visuelle statt ins Soziale:</strong>
        Ein fortschreitender Hörverlust erschwert typischerweise gerade das beiläufige,
        soziale Gespräch – für eine soziale Fünf, die ohnehin über Beobachtung und Wissen
        Sicherheit sucht, kann das die eigene Konzentration auf das visuelle, innere Erleben
        noch verstärken, statt sie zu unterbrechen.</p>
        <p class="vb-intro"><strong>b) Der Schlaganfall trifft die Sprache, nicht das Bild:</strong>
        Dass ausgerechnet die verbale Ausdrucksfähigkeit betroffen war, während die bildnerische
        erhalten blieb, passt zu einer Persönlichkeit, deren eigentliche, unverwechselbare
        Sprache ohnehin nie in erster Linie das gesprochene Wort war, sondern das Bild.</p>
        <p class="vb-intro"><strong>c) Weiterarbeiten als Form der Selbstvergewisserung:</strong>
        Die rasche Rückkehr zur künstlerischen Arbeit nach dem Schlaganfall lässt sich als
        typische Fünfer-Reaktion lesen: Sicherheit nicht durch emotionale Verarbeitung des
        Schreckens, sondern durch die Rückkehr in die vertraute, kompetente Tätigkeit.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Ein Künstler des Sehens verliert das Hören:</strong>
        Über Jahrzehnte war Hockneys gesamtes Werk der Frage gewidmet, wie Menschen wirklich
        sehen. Dass ausgerechnet ein anderer Sinn – das Gehör – nachließ, während das Sehen bis
        zuletzt sein zentrales Werkzeug blieb, ist eine auffällige, wenn auch nicht kausal
        beweisbare Fügung.</p>
        <p class="vb-intro"><strong>b) Zwei Einschränkungen, eine durchgehende Antwort:</strong>
        Sowohl auf den schleichenden Hörverlust als auch auf den plötzlichen Schlaganfall
        reagierte Hockney erkennbar auf dieselbe Weise: Rückkehr zur Arbeit, kein öffentliches
        Drama, keine sichtbare Zäsur im Werk.</p>
        <p class="vb-intro"><strong>c) Ein neues Medium als Fortsetzung, nicht als Bruch:</strong>
        Dass die iPad-Zeichnungen zeitlich unmittelbar um den Schlaganfall herum entstanden,
        liest sich weniger als Reaktion auf die Krankheit denn als deren konsequente
        Fortsetzung – dieselbe Neugier auf neue Werkzeuge des Sehens, die sein ganzes Leben
        bestimmt hatte.</p>
        <p class="vb-intro"><strong>d) Warum ausgerechnet Gehör und Sprache?</strong>
        Für eine soziale Fünf mit Viererflügel, deren Sicherheit über eine eigene, unverwechselbare
        Wahrnehmung und deren Ausdruck über das Bild statt über das gesprochene Wort entsteht,
        liegt eine Deutung nahe: Ausgerechnet jene Kanäle, die den unmittelbaren, sozialen
        Austausch tragen – Hören und Sprechen –, schwächten sich ab, während der eigentliche,
        introvertiert-visuelle Zugang zur Welt intakt blieb und sogar bis ins hohe Alter neue
        Ausdrucksformen fand. Diese Deutung ist eine plausible Interpretation, kein belegter
        historischer Kausalzusammenhang, und wird im Psychosomatik-Register dieses Kompasses
        noch ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>e) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sozialen Fünf zwangsläufig zu Hörverlust oder
        Schlaganfall führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Was sich an Hockneys Fall zeigen lässt, ist ein Muster, das bei dem
        Bedürfnis, Sicherheit über die eigene visuelle Wahrnehmung statt über sozialen Austausch
        zu gewinnen, in der Praxis immer wieder auffällt – eine von vielen möglichen
        Erklärungen, kein Urteil. Das entsprechende Krankheitsbild wird in diesem Kompass nach
        und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Die unbewusste Fixierung als eigener Faktor:</strong>
        Hockney kannte sein eigenes Enneagramm-Muster nicht – die soziale Fünf mit Viererflügel
        sucht Sicherheit lieber über die eigene, unverwechselbare Wahrnehmung als über direkten
        sozialen Austausch, und genau dahin verschob sich sein Leben mit fortschreitendem
        Hörverlust ganz von selbst, ohne dass er dagegen ansteuerte. Wer die eigene
        Rückzugstendenz nicht als Muster erkennt, verwechselt sie leicht mit bloßem
        Älterwerden, obwohl auch die eigene Fixierung mitentscheidet.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        An <strong>Hockneys</strong> letzten Lebensjahrzehnten lässt sich die soziale Fünf mit
        Viererflügel noch einmal klar ablesen: ein schleichender Verlust des Gehörs, der die
        ohnehin starke visuelle Konzentration eher vertiefte als störte, ein Schlaganfall, der
        ausgerechnet die Sprache traf und die Bildsprache verschonte, und ein unvermindertes
        Weiterarbeiten bis ins neunte Lebensjahrzehnt. Der Oktopus, der einen Arm verlor und mit
        den übrigen einfach weiterzeichnete.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-david-hockney", label:"Porträt: David Hockney (SO5w4) – Lebenswerk"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Krankheitsporträt: Leonardo da Vinci (SO5w4) – Schlaganfall, weiter gearbeitet"},
        {route:"krankheitsportraets-albert-einstein", label:"Krankheitsporträt: Dr. Albert Einstein (SO5w4) – dasselbe Muster ungebremsten Schaffens"},
        {route:"krankheitsportraets-hannah-arendt", label:"Krankheitsporträt: Hannah Arendt (SO5w4) – Warnung zur Kenntnis genommen, nicht befolgt"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/so5", label:"Subtyp-Profil SO5"},
      ])}
    </div>
  `);
}

export function guntherVonHagensKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; Alle Krankheitsporträts</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gunther-von-hagens-portrait.jpg" alt="Gunther von Hagens" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gunther von Hagens</p>
        <p class="krim-portrait-typ">SX1w9 · Sexueller Typ 1 mit Neunerflügel · 1945–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Tierentsprechung: Schwarze Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Tierentsprechung: Schwarze Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Gunther von Hagens</strong> ist bereits als
        <a href="javascript:void(0)" data-route="beruehmte-gunther-von-hagens">Porträt unter Berühmte Persönlichkeiten</a>
        in diesem Kompass vertreten – dort geht es um die Erfindung der Plastination und sein
        Lebenswerk ›Körperwelten‹. Im Mittelpunkt steht hier, was dort kaum Raum findet: sein
        fast zwei Jahrzehnte dauerndes Leben mit Parkinson, das am 24. Juli 2026 mit seinem Tod
        durch eine Hirnblutung endete.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Typzuordnung:</strong>
        <strong>Von Hagens</strong> ist dem <strong>sexuellen Typ 1 mit Neunerflügel</strong>
        zugeordnet. Die SX1 begegnet existenzieller Bedrohung nicht mit Rückzug, sondern mit
        derselben kompromisslosen Inbrunst, mit der sie ihr Lebenswerk verfolgt – bei von Hagens
        zeigte sich das darin, dass er seine Diagnose erst öffentlich machte, als er selbst
        entschieden hatte, wie er damit umgehen wollte. Der Neunerflügel hielt selbst angesichts
        einer unheilbaren, fortschreitenden Erkrankung die jahrzehntelange Beharrlichkeit
        aufrecht, die schon seinen Institutionenaufbau kennzeichnete.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Erste Anzeichen</h3>
        <p class="vb-intro"><strong>a) Diagnose 2008, zwei Jahre lang verschwiegen:</strong>
        Von Hagens erhielt die Parkinson-Diagnose bereits 2008, teilte sie aber zunächst nur
        seiner Familie und seinem engsten Umfeld mit. Erst 2010, in einer langen Ansprache an
        seine Mitarbeiter im Plastinarium Guben, machte er die Erkrankung öffentlich – zwei Jahre
        Zeit, in denen er offenbar selbst erst einen eigenen Umgang mit der Diagnose finden
        musste, bevor er sie preisgab.</p>
        <p class="vb-intro"><strong>b) Ein Tremor, der ausgerechnet die Präzision bedrohte:</strong>
        Erste sichtbare Symptome waren Zittern in der linken Hand – eine besonders bittere
        Ironie bei einem Mann, dessen gesamtes Lebenswerk auf äußerster manueller Präzision im
        Umgang mit menschlichem Gewebe beruhte.</p>
        <p class="vb-intro"><strong>c) Die Stimme als Verhandlungsmasse zwischen Bewegung und Sprache:</strong>
        Ein bei ihm implantierter Hirnschrittmacher (Tiefe Hirnstimulation) konnte den Tremor
        unterdrücken, wenn die Stromstärke erhöht wurde – dann verschlechterte sich jedoch seine
        Sprache zu einem kaum verständlichen Murmeln. Bei niedrigerer Einstellung sprach er
        nahezu normal, musste dafür aber das Zittern der linken Hand in Kauf nehmen: ein
        technisch erzwungener Tausch zwischen zwei Fähigkeiten, die für seine öffentliche Rolle
        als Lehrer und Redner gleichermaßen unverzichtbar waren.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. Allgemeine Merkmale</h3>
        <p class="vb-intro"><strong>a) „Sieben aktive Arbeitsjahre" als selbst gesetzte Frist:</strong>
        Bei der öffentlichen Bekanntgabe 2010 sagte von Hagens, die Diagnose habe ihn in eine
        „existenzielle Verwirrung" gestürzt, und er könne realistischerweise mit sieben aktiven
        Arbeitsjahren rechnen, bevor er vollständig arbeitsunfähig werde – eine nüchterne,
        fast klinische Selbsteinschätzung der eigenen Endlichkeit.</p>
        <p class="vb-intro"><strong>b) Vorausschauender Rückzug aus der operativen Leitung:</strong>
        In Erwartung der für Parkinson typischen fortschreitenden Verschlechterung kündigte er
        an, den Betrieb in Guben schrittweise zu verkleinern, statt die Kontrolle bis zur
        Handlungsunfähigkeit festzuhalten – eine bewusste, geplante Übergabe statt eines
        erzwungenen Zusammenbruchs.</p>
        <p class="vb-intro"><strong>c) Die Familie übernimmt, während er noch lebt:</strong>
        Seine Frau Angelina Whalley leitete das Heidelberger Institut für Plastination und
        kuratierte die Ausstellungen weiter, sein Sohn Rurik von Hagens wurde CEO von Von Hagens
        Plastination – eine Nachfolge, die er nach eigener Aussage mit Stolz an ihn weitergab,
        nicht widerwillig abgab.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Wesentliche Eigenschaften</h3>
        <p class="vb-intro"><strong>a) Weiterarbeiten, solange es körperlich ging:</strong>
        Statt sich mit der Diagnose zurückzuziehen, blieb von Hagens so lange wie irgend möglich
        in seiner Rolle als öffentliches Gesicht seines Lebenswerks aktiv – dieselbe
        Kompromisslosigkeit, mit der er zuvor gegen Aufsichtsbehörden und Kirchen angetreten war,
        richtete sich nun gegen den eigenen körperlichen Verfall.</p>
        <p class="vb-intro"><strong>b) Kein Verschweigen, aber auch keine Selbstinszenierung als Opfer:</strong>
        Von Hagens sprach offen über seine Erkrankung, ohne sie zum zentralen Thema seiner
        öffentlichen Auftritte zu machen – eine Offenheit, die eher informierte als um Mitleid
        warb.</p>
        <p class="vb-intro"><strong>c) Die eigene Endlichkeit wird zum letzten Ausstellungsstück:</strong>
        Bereits mit 65 Jahren erklärte er einer deutschen Zeitung, sein plastinierter Körper
        solle dereinst „in einladender Pose am Eingang meiner Ausstellung stehen", damit er seine
        Gäste „auch nach meinem Tod begrüßen" könne – eine Absicht, die er bis zuletzt
        aufrechterhielt.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Gesamtwirkung</h3>
        <p class="vb-intro"><strong>a) Vom Provokateur zum öffentlich sterbenden Lehrer:</strong>
        Ein Mann, der Jahrzehnte lang mit spektakulären, oft skandalträchtigen Auftritten für
        Aufsehen sorgte, verbrachte seine letzten anderthalb Jahrzehnte in einer viel leiseren,
        aber ebenso öffentlichen Rolle: als jemand, der die eigene, fortschreitende Erkrankung so
        transparent behandelte wie zuvor die anatomischen Körper seiner Ausstellungen.</p>
        <p class="vb-intro"><strong>b) Der Tod durch Hirnblutung als abrupter Schlusspunkt:</strong>
        Nach fast zwei Jahrzehnten mit Parkinson starb von Hagens letztlich nicht am
        Parkinson-Verlauf selbst, sondern an einer Hirnblutung – ein plötzliches Ende nach einem
        langen, absehbaren Abbauprozess, der seiner eigenen Prognose von 2010 nahekam, aber
        anders verlief, als er es sich selbst vorgestellt hatte.</p>
        <p class="vb-intro"><strong>c) Der letzte Wunsch als offene Frage:</strong>
        Seine Familie hat bestätigt, seinen Wunsch nach der eigenen Plastination zu respektieren;
        da eine vollständige Plastination eines menschlichen Körpers Monate bis Jahre dauert,
        bleibt offen, wann – und in welcher Form – dieser letzte, radikal konsequente Wunsch
        öffentlich sichtbar wird.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetische Wirkung</h3>
        <p class="vb-intro"><strong>a) Der Neunerflügel als Ausdauer über Jahrzehnte statt einer Geste:</strong>
        Wo eine reinere sexuelle Eins die Diagnose vielleicht zum Anlass eines einzelnen,
        dramatischen öffentlichen Auftritts gemacht hätte, verteilte von Hagens seinen Umgang mit
        der Krankheit über fast zwei Jahrzehnte – dieselbe w9-Weite, die schon seinen
        Institutionenaufbau geprägt hatte.</p>
        <p class="vb-intro"><strong>b) Die Schwarze Mamba, die sich nicht verkriecht:</strong>
        Auch mit fortschreitender Erkrankung blieb von Hagens im Kern seiner öffentlichen Rolle
        präsent, statt sich – wie es viele in seiner Situation tun – vollständig aus dem
        öffentlichen Leben zurückzuziehen.</p>
        <p class="vb-intro"><strong>c) Kontrolle über die Deutung der eigenen Krankheit:</strong>
        Von Hagens bestimmte selbst, wann, wie und in welchem Umfang über seine Erkrankung
        gesprochen wurde – dieselbe SX1-Inbrunst, die eigene Wahrheit zu verteidigen, richtete
        sich hier auf die Deutungshoheit über den eigenen körperlichen Verfall.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Die Krankheit als roter Faden</h3>
        <p class="vb-intro"><strong>a) Fast zwei Jahrzehnte zwischen Diagnose und Tod:</strong>
        Von der Diagnose 2008 bis zum Tod 2026 vergingen achtzehn Jahre, in denen sich die
        Erkrankung schrittweise ausweitete – von einem Tremor in der linken Hand über zunehmende
        Sprach- und Bewegungseinschränkungen bis zur schrittweisen Übergabe der operativen
        Leitung an Frau und Sohn.</p>
        <p class="vb-intro"><strong>b) Die eigene Ausstellung als letzter verbliebener Ausdrucksraum:</strong>
        Wie schon in gesunden Jahrzehnten blieb die eigene Ausstellung, der eigene Körper als
        Lehrmittel, auch im Verfall von Hagens' zentrales Ausdrucksmittel – der Plan zur
        Selbstplastination ist dafür der letzte, radikalste Beleg.</p>
        <p class="vb-intro"><strong>c) Warum ausgerechnet ein Angriff auf Bewegung und Sprache?</strong>
        Für eine sexuelle Eins, deren gesamte öffentliche Identität auf manueller Präzision im
        Präparationssaal und auf rednerischer Überzeugungskraft vor Publikum beruhte, lässt sich
        in Parkinson – einer Erkrankung, die genau diese beiden Fähigkeiten angreift – eine
        besonders existenzielle Bedrohung lesen: Die beiden Werkzeuge, mit denen von Hagens
        zeitlebens seine Inbrunst nach außen trug, waren genau das, was ihm zuletzt zunehmend
        entglitt. Diese Deutung wird im Psychosomatik-Register dieses Kompasses noch
        ausführlicher entfaltet.</p>
        <p class="vb-intro"><strong>d) Einordnung ohne Determinismus:</strong>
        Das heißt nicht, dass das Muster der sexuellen Eins mit Neunerflügel zwangsläufig zu
        Parkinson führt – <strong>jeder Mensch kann jede Krankheit bekommen, unabhängig vom
        Subtyp.</strong> Von Hagens' Erkrankung ist eng mit einem neurodegenerativen Prozess
        verbunden, der medizinisch unabhängig von Persönlichkeitsmustern auftritt, nicht rein
        psychosomatisch zu erklären. Was sich an seinem Fall zeigen lässt, ist ein Muster im
        Umgang mit einer solchen Diagnose, das bei einer ausgeprägten sexuellen Eins mit
        Neunerflügel immer wieder auffällt – eine von vielen möglichen Deutungen, kein Urteil.
        Das entsprechende Krankheitsbild wird in diesem Kompass nach und nach im
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatik-Register</a>
        ausgearbeitet.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) Die unbewusste Fixierung als eigener Faktor:</strong>
        Von Hagens kannte, wie die meisten Menschen seiner Zeit, sein Enneagramm-Muster nicht
        bewusst. Ohne dieses Wissen blieb ihm auch der Zugang zu einer bewussten Unterscheidung
        zwischen der eigenen, lebenslangen Inbrunst und dem inneren Zwang verwehrt, selbst
        angesichts einer unheilbaren Diagnose keine Kontrolle über das eigene Narrativ
        abzugeben – er verarbeitete sein Schicksal auf die einzige Weise, die er kannte: durch
        Weiterarbeit und öffentliche Selbstbestimmung, statt sich frühzeitig auch einen privaten,
        ungeplanten Umgang mit der eigenen Sterblichkeit zuzugestehen. Wer das eigene Muster
        erkennt, kann bewusst gegensteuern; wer es nicht kennt, bleibt seinem Muster so
        ausgeliefert, wie von Hagens es bis in seine letzten Lebensjahre war.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Fazit</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Die sexuelle Eins mit Neunerflügel schließt sich bei <strong>Gunther von Hagens</strong>
        zu einem einzigen, geraden Bogen: Ein Leben lang machte er den toten Körper öffentlich
        sichtbar – und beschloss, seinen eigenen dereinst genauso zu behandeln, statt die eigene
        Sterblichkeit privat und verborgen zu verarbeiten. Die Schwarze Mamba, die selbst im
        eigenen Verfall keine Distanz zum eigenen Lebenswerk zuließ, sondern beides bis zuletzt zu
        einem einzigen, konsequenten Ganzen verschmolz.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"Alle Krankheitsporträts"},
        {route:"beruehmte-gunther-von-hagens", label:"Porträt: Gunther von Hagens (SX1w9) – Lebenswerk"},
        {route:"krankheitsportraets-johann-sebastian-bach", label:"Krankheitsporträt: Johann Sebastian Bach (SX1w9) – gleicher Subtyp, dieselbe Beharrlichkeit trotz Angriff auf die eigene Kernfähigkeit"},
        {route:"psychosomatik", label:"Psychosomatik-Register"},
        {route:"subtype/sx1", label:"Subtyp-Profil SX1"},
      ])}
    </div>
  `);
}
