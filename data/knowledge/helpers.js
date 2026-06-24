// helpers.js — Hilfsfunktionen fuer die Knowledge-Dateien
// Diese Funktionen wurden aus data/de.js extrahiert, um zirkulaere Importe zu vermeiden.
// Die Knowledge-Dateien sind ES-Module und koennen nicht auf de.js zurueckgreifen.

export function type1MediaGroups(subtypeCode, subtypeSong = {}) {
  return [
    {
      title: `${subtypeCode} · Seite 3 · Praxis, Vertiefung und Songs`,
      note: "Diese Gruppe entspricht dem Medienblock auf Seite 3: Praxislinks, Flügelvideo und die sechs Song-/Affirmationsfelder.",
      resources: [
        { title: "Spezielle Bewusstseinsübungen für die 9 Enneagrammtypen", category: "Praxis", scope: "Typ 1", youtubeVideoId: "Uf0kxyZ6xYM" },
        { title: "Dynamische Darstellung der 9 Enneagrammtypen von Detlef Rathmer", category: "Vertiefung", scope: "Typ 1", youtubePlaylistId: "PLDDseEKkCveWAYP0nH_UrwOKDhB1LJtkM" },
        { title: "Songs about the Art of Living · Playlist zur Bewusstseinserweiterung", category: "Playlist", scope: "Typ 1", youtubePlaylistId: "PLDDseEKkCveWvOzNGbRjzij2wGDZzgmJ3" },
        { title: "Typ 1 mit 9er- und 2er-Flügel", category: "Flügel", scope: "Typ 1", youtubeVideoId: "Wna7pH0SFkU" },
        { title: "Typ 1 · deutscher Song: Alles muss stimmen", category: "Song 1", scope: "Typ 1", youtubeVideoId: "fekERgl63IY" },
        { title: "Typ 1 · englischer Song: Everything Must Be Right", category: "Song 2", scope: "Type 1", youtubeVideoId: "aO3eixcmnnA" },
        subtypeSong.deId
          ? { title: `${subtypeCode} · deutscher subtypspezifischer Song`, category: "Song 3", scope: subtypeCode, youtubeVideoId: subtypeSong.deId }
          : { title: `${subtypeCode} · deutscher subtypspezifischer Song`, category: "Song 3", scope: subtypeCode, pending: true },
        subtypeSong.enId
          ? { title: `${subtypeSong.enCode || subtypeCode} · englischer subtypspezifischer Song`, category: "Song 4", scope: subtypeSong.enCode || subtypeCode, youtubeVideoId: subtypeSong.enId }
          : { title: `${subtypeSong.enCode || subtypeCode} · englischer subtypspezifischer Song`, category: "Song 4", scope: subtypeSong.enCode || subtypeCode, pending: true },
        subtypeSong.biblicalId
          ? { title: `${subtypeCode} · archetypisch-biblischer Song`, category: "Song 5", scope: subtypeCode, youtubeVideoId: subtypeSong.biblicalId }
          : { title: `${subtypeCode} · archetypisch-biblischer Song`, category: "Song 5", scope: subtypeCode, pending: true },
        subtypeSong.affirmationsId
          ? { title: `${subtypeCode} · 100 heilsame Affirmationen`, category: "Affirmationen", scope: subtypeCode, youtubeVideoId: subtypeSong.affirmationsId }
          : { title: `${subtypeCode} · 100 heilsame Affirmationen`, category: "Affirmationen", scope: subtypeCode, pending: true },
      ],
    },
    {
      title: `${subtypeCode} · Seite 4 · Heilmittel-Kompass`,
      note: "Diese Gruppe gehört zur Heilungsseite: Homöopathie, Enneagramm-Homöopathie, Healing Music und Homöopathie-Songmaterial.",
      resources: [
        { title: "Zur Wirkweise der Homöopathie", category: "Wissen", scope: "Homöopathie", youtubeVideoId: "AcYotzwZ3po" },
        { title: "Zur Wirkweise der Enneagramm-Homöopathie", category: "Wissen", scope: "Typ 1", youtubeVideoId: "qSwv9ghfLPE" },
        { title: "Typ 1 · Relaxing & Healing Music · Album 24", category: "Musik", scope: "Typ 1", youtubeVideoId: "mumR1QESNzQ" },
        { title: "Songs zum Wesen der Homöopathie", category: "Playlist", scope: "Homöopathie", youtubePlaylistId: "PLDDseEKkCveUN1An0u_qdTjjg_JLtOf0S" },
      ],
    },
  ];
}

export function type2VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 2 · Überblick",
      caption: "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-2/type-2-overview.jpeg",
      alt: "Typ 2 Überblick mit Grundthema Liebe und Anerkennung",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene fuer die weitere Extraktion.`,
      src: `assets/knowledge/type-2/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-2-Kartenset`,
    })),
  ];
}

export function type2SourceCoverage(subtypeCode) {
  return [
    {
      page: "Typ 2 · Überblick",
      status: "basis_angelegt",
      blocks: [
        "Grundthema",
        "Stirnspannung",
        "Blickfokus",
        "Mundlinie",
        "Kiefer & Nacken",
        "Körperorganisation",
        "Spaltung / innerer Konflikt",
        "Typische Haltung & Ausdruck",
        "Verkörperte Signatur",
        "Integrationsweg",
        "Organismusfrage",
        "Blickqualität",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Archetypisches Tier",
      ],
    },
    {
      page: `${subtypeCode} · Seite 1`,
      status: "basis_angelegt",
      blocks: [
        "Grundthema",
        "weiblicher Prototyp",
        "männlicher Prototyp",
        "Organismusfrage",
        "Blickqualität",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Verkörperte Signatur",
        "Grundtension",
        "Integrationsweg",
        "Tierentsprechung",
        "Ressourcenfeld",
      ],
    },
    {
      page: `${subtypeCode} · Seite 2`,
      status: "basis_angelegt",
      blocks: [
        "2-Punkte-Integration",
        "Punkt 1",
        "Punkt 2",
        "Vorgehensweise",
        "Prototypen",
        "Lebensthema",
        "unbewusste Strategie",
        "Integration",
        "Kernsatz",
      ],
    },
    {
      page: `${subtypeCode} · Seite 3`,
      status: "basis_angelegt",
      blocks: [
        "Problem",
        "Wendepunkt",
        "Integration",
        "Körperarbeit",
        "Akupressur",
        "Atemimpuls",
        "Vollkommen still sitzen",
        "mentale & emotionale Haltung",
        "Flügel",
        "Medien- und Songfelder",
      ],
    },
    {
      page: `${subtypeCode} · Seite 4`,
      status: "basis_angelegt",
      blocks: [
        "Heilmittel-Kompass",
        "homöopathisches Einzelmittel",
        "Thema",
        "Wirkung auf Lebenskraft und Leidenschaft",
        "Mineralstoffimpuls",
        "Bachblüte",
        "Edelstein",
        "Tee",
        "Leidenschaft",
        "innere Motivation",
        "Healing Music",
      ],
    },
    {
      page: `${subtypeCode} · Seite 5`,
      status: "basis_angelegt",
      blocks: [
        "Integrationspotenzial",
        "archetypische Essenz",
        "verkörperte Qualität",
        "Nervensystem-Regulation",
        "Beziehungsebene",
        "neue Fähigkeiten",
        "Integrationssatz",
        "Bewusstseinsraum",
        "Ausstrahlung",
      ],
    },
  ];
}

export const type2OverviewModule = {
  title: "Typ 2 · Grundkarte",
  intro:
    "Die Typ-2-Grundkarte bildet die gemeinsame Grundlage aller Zweier-Subtypen. Im Zentrum steht das Bedürfnis, geliebt, gebraucht und geschätzt zu werden. Der Körper sucht Kontakt, Resonanz und Beziehungssicherheit.",
  entries: [
    {
      label: "Grundthema",
      text: "Liebe und Anerkennung. Typ 2 richtet sich auf Nähe, Beziehung, Fürsorge und das Bedürfnis aus, für andere bedeutsam zu sein.",
    },
    {
      label: "Organismusfrage",
      text: "Bin ich liebenswert, wenn ich für andere da bin?",
    },
    {
      label: "Leidenschaft",
      text: "Stolz entsteht, wenn der eigene Wert über Geben, Helfen, gebraucht Werden oder emotionale Bedeutung gesichert wird.",
    },
    {
      label: "Innere Motivation",
      text: "Typ 2 möchte Liebe, Bindung, Nähe und Bedeutung erfahren. Hilfe und Zuwendung werden zum Weg, Anerkennung und Verbundenheit zu sichern.",
    },
    {
      label: "Stirnspannung",
      text: "Oft angehoben, sorgenvoll und auf das Gegenüber fokussiert. Die Aufmerksamkeit prüft, was andere brauchen könnten.",
    },
    {
      label: "Blickfokus",
      text: "Kontaktorientiert, warm und suchend. Der Blick sucht Resonanz, Dankbarkeit, Rückmeldung und emotionale Öffnung.",
    },
    {
      label: "Mundlinie",
      text: "Lächelnd, sozial einladend und weich. Der Mund wird zum Beziehungsanker und kann eigene Bedürfnisse überspielen.",
    },
    {
      label: "Kiefer & Nacken",
      text: "Spannung durch Anpassung, Geben und Selbstzurücknahme. Die Haltung geht häufig nach vorn zum anderen.",
    },
    {
      label: "Körperorganisation",
      text: "Öffnung nach außen, Herzenergie aktiv, Schultern getragen, Haltung nach vorn gebend. Brust und Herzraum sind zentrale Spannungs- und Ausdrucksfelder.",
    },
    {
      label: "Spaltung / innerer Konflikt",
      text: "Eigene Bedürfnisse werden zurückgenommen, während die Bedürfnisse anderer überhöht werden.",
    },
    {
      label: "Typische Haltung & Ausdruck",
      text: "Offen, freundlich, hilfsbereit, lächelnd und einladend. Die Gestik betont Nähe, Wärme und positives Feedback.",
    },
    {
      label: "Verkörperte Signatur",
      text: "Ich gebe Liebe, Aufmerksamkeit und Hilfe, um wertvoll und gebraucht zu sein.",
    },
    {
      label: "Integrationsweg",
      text: "Vom Geben ohne Erwartung zu echtem Mitgefühl. Selbstfürsorge kultivieren, eigene Bedürfnisse ernst nehmen und ausdrücken.",
    },
    {
      label: "Blickqualität",
      text: "Warm, verbindend und kontaktaufnehmend. In Integration wird daraus ein mitfühlender Blick, der sich selbst nicht verliert.",
    },
    {
      label: "Mikrospannung",
      text: "Spannung in Augenpartie, Stirn, Mund und Hals-Nacken-Bereich. Die innere Anspannung entsteht häufig aus dem Gefühl, geben zu müssen.",
    },
    {
      label: "Atemrhythmus",
      text: "Eher flach im oberen Brustbereich, gehalten beim Geben oder Leisten. Seufzen kann Enttäuschung oder Überforderung anzeigen.",
    },
    {
      label: "Bewegungsinitiierung",
      text: "Bewegt sich auf andere zu, schnell, hilfsbereit und reaktiv. Pausen fallen schwer, weil Nähe oft über Tun hergestellt wird.",
    },
    {
      label: "Kontaktstil",
      text: "Herzlich, zugewandt und unterstützend. Sucht Nähe und Bindung, kann sich aber selbst verlieren, wenn Liebe erwidert werden soll.",
    },
    {
      label: "Spannungsverteilung",
      text: "Hauptspannung im Brust- und Herzbereich. Nebenspannung in Schultern und Nacken. Unterdrückung betrifft häufig eigene Bedürfnisse.",
    },
    {
      label: "Archetypisches Tier",
      text: "Treuer Hund: Loyalität, Hingabe, Wärme, Schutz, Nähe und Verbundenheit. Er zeigt die Fähigkeit, Liebe zu geben, und erinnert zugleich an Selbstfürsorge.",
    },
    {
      label: "Lebensfeld",
      text: "Lebensthema: Liebe und Anerkennung. Kernsatz: Ich gebe, damit ich geliebt werde. Ressource: Selbstfürsorge entwickeln.",
    },
  ],
};

export function type2ContentModules(subtypeCode) {
  const subtypeModules = {
    SE2: [
      {
        title: "SE2 · Seite 1 · Subtyp-Profil",
        intro:
          "Die SE2 sucht Geborgenheit durch Fürsorge, Versorgung und persönliche Nähe. Die Zuwendung ist warm und schützend, kann aber in Bedürftigkeit, Rückzug oder stiller Erwartung kippen.",
        entries: [
          {
            label: "Grundthema",
            text: "Liebe und Fürsorge im selbsterhaltenden Feld. Die SE2 möchte gebraucht werden und zugleich selbst sicher, umsorgt und geborgen sein.",
          },
          {
            label: "Organismusfrage",
            text: "Wie kann ich durch Fürsorge, Unterstützung und praktische Hilfe dazu beitragen, dass wir alle gut versorgt und in Sicherheit sind?",
          },
          {
            label: "Blickqualität",
            text: "Warm, weich und einladend, aber prüfend: Wer ist sicher für mich? Der Blick sucht Resonanz und Dankbarkeit, öffnet sich aber erst nach Beobachtung.",
          },
          {
            label: "Mikrospannung",
            text: "Leichte Sorge in Stirn und Augen, weicher Mund, wenig Druck im Kiefer. Die Haltung ist schützend, zurückhaltend und zugleich zugewandt.",
          },
          {
            label: "Atemrhythmus",
            text: "Eher flach im Brustbereich. Atem stockt bei Unsicherheit und reguliert sich über Geben, Rückzug und körperliche Nähe.",
          },
          {
            label: "Bewegungsinitiierung",
            text: "Geht nicht sofort auf andere zu, sondern wartet oder prüft zuerst. Handelt aus dem Bedürfnis, gebraucht und verbunden zu sein.",
          },
          {
            label: "Kontaktstil",
            text: "Herzlich, warm und einladend. Gibt, um Beziehung und Sicherheit zu schaffen, sucht Dankbarkeit und gegenseitige Verbindlichkeit.",
          },
          {
            label: "Spannungsverteilung",
            text: "Kopf und Stirn: leichte Sorge. Nacken und Schultern: Schutz. Brustbereich: Wärme und Geben. Bauch: Bedürfnis nach Sicherheit.",
          },
          {
            label: "Tierentsprechung",
            text: "Flusspferd: schützt sein Revier, seine Familie und seine Ressourcen. Es wirkt gemütlich, ist aber stark, loyal und nährend.",
          },
          {
            label: "Ressourcenfeld",
            text: "Herzöffnung, Mitgefühl, Geborgenheit schaffen, praktische Unterstützung, Treue, Loyalität, Wärme und Lebensfreude.",
          },
        ],
      },
      {
        title: "SE2 · Seite 2 · 2-Punkte-Integration",
        intro:
          "Die zentrale Praxis der SE2 verbindet den Herzraum mit dem Oberbauch und inneren Raum. Dadurch wird Fürsorge mit Selbstkontakt verbunden.",
        entries: [
          {
            label: "Punkt 1",
            text: "Herzraum / Brustmitte: Bedürfnis nach Nähe, Verbindung und Resonanz.",
          },
          {
            label: "Punkt 2",
            text: "Oberbauch / innerer Raum: Bedürfnis nach Selbstkontakt, Ruhe und eigener Grenze.",
          },
          {
            label: "Vorgehen",
            text: "Eine Hand auf den Herzraum legen, die andere auf den Oberbauch. Erst Punkt 1, dann Punkt 2 spüren und anschließend beide Felder gleichzeitig wahrnehmen.",
          },
          {
            label: "Lebensthema",
            text: "Du suchst Nähe, Unterstützung und emotionale Sicherheit. Du möchtest gebraucht werden und stellst dabei oft Bedürfnisse anderer über deine eigenen.",
          },
          {
            label: "Unbewusste Strategie",
            text: "Du versuchst, Bindung über Fürsorge und Verfügbarkeit abzusichern. Eigene Wünsche werden zurückgehalten, damit Nähe erhalten bleibt.",
          },
          {
            label: "Integration",
            text: "Du lernst, dich selbst wichtiger zu nehmen und deine Grenzen ernst zu nehmen. Verbindung entsteht durch Selbstfürsorge, Ehrlichkeit und inneres Gleichgewicht.",
          },
          {
            label: "Kernsatz",
            text: "Wenn du deine eigenen Bedürfnisse ernst nimmst, entsteht Nähe ohne Erwartung.",
          },
        ],
      },
      {
        title: "SE2 · Seite 3 · Körperarbeit & Akupressur",
        intro:
          "Die SE2 bewegt sich von Selbstaufgabe zu Selbstfürsorge. Körperarbeit hilft, Fürsorge, Bindung und eigene Grenze wieder zusammenzubringen.",
        entries: [
          {
            label: "Problem",
            text: "Du kümmerst dich um andere, um Nähe und Zuwendung zu erhalten. Dabei übersiehst du leicht deine eigenen Bedürfnisse.",
          },
          {
            label: "Wendepunkt",
            text: "Du erkennst, dass ständiges Kümmern deine eigenen Bedürfnisse unsichtbar machen kann. Du beginnst, dich selbst ernst zu nehmen.",
          },
          {
            label: "Integration",
            text: "Du sorgst für andere, ohne dich selbst zu verlieren. Deine Energie wird nährend und stabil.",
          },
          {
            label: "Körperliche Integration",
            text: "Verbindung / Herz. Die sechs Zugänge sind Gesicht, Hand, Fuß, Bauch, Finger und Ohr.",
          },
          {
            label: "Vollkommen still sitzen",
            text: "Zwei Minuten aufrecht und bequem sitzen. Der Körper darf zeigen, was wesentlich ist, ohne dass sofort geholfen werden muss.",
          },
          {
            label: "Mentale & emotionale Haltung",
            text: "Bei Typ 2 zeigt sich mental ein falscher Überfluss: Ich habe genug Liebe zu geben. Emotional entsteht Stolz, wenn der eigene Wert über Gebrauchtwerden definiert wird.",
          },
          {
            label: "Flügel",
            text: "Typ 2 mit 1er-Flügel betont Pflicht, Verlässlichkeit und gutes Tun. Typ 2 mit 3er-Flügel betont Kontaktfreude, Aktivität und Motivation.",
          },
          {
            label: "Medienfelder",
            text: "Die Seite enthält die vorbereitete Struktur für Typ-2-Songs, Subtyp-Songs, biblische Songs, Affirmationen, Flügel und Vertiefungen.",
          },
        ],
      },
      {
        title: "SE2 · Seite 4 · Heilmittel-Kompass",
        intro:
          "Der Heilmittel-Kompass der SE2 übersetzt Bedürftigkeit, Bindung und emotionale Abhängigkeit in ein heilkundliches Symbolfeld.",
        entries: [
          {
            label: "Homöopathisches Einzelmittel",
            text: "Hyoscyamus niger steht hier für emotionale Abhängigkeit, Besitzanspruch und Angst vor Zurückweisung. Der Weg führt zu selbstloser Liebe und gesunden Grenzen.",
          },
          {
            label: "Thema",
            text: "Das Bedürfnis, gebraucht und geliebt zu werden, wird von einem starken inneren Wunsch nach Nähe und Anerkennung getragen.",
          },
          {
            label: "Wirkung auf Lebenskraft und Leidenschaft",
            text: "Unterstützt symbolisch die Wandlung übermäßiger Bedürftigkeit in emotionale Eigenständigkeit, gesunde Grenzen und freie, liebevolle Zuwendung.",
          },
          {
            label: "Ziel",
            text: "Regulation und Stärkung der Zweier-Lebenskraft: Ausgleich der überschießenden, übertriebenen Herzenergie.",
          },
          {
            label: "Mineralstoff-Impuls",
            text: "Natrium chloratum unterstützt symbolisch die Regulation von Nähe und Rückzug sowie emotionales Gleichgewicht und innere Balance.",
          },
          {
            label: "Bachblüte",
            text: "Chicory fördert bedingungslose Liebe, gesunde Grenzen und emotionale Unabhängigkeit. Die Blüte der Mütterlichkeit.",
          },
          {
            label: "Edelstein",
            text: "Rosenquarz steht für Selbstliebe, Mitgefühl, weiche Herzensbindung und liebevolle Selbstannahme.",
          },
          {
            label: "Tee",
            text: "Rosenblütentee wirkt symbolisch herzöffnend, harmonisierend und sammelnd für Körper, Geist und Seele.",
          },
          {
            label: "Leidenschaft",
            text: "Stolz beim Typ 2 ist innere Selbstüberhöhung, gebraucht zu werden, verbunden mit Schwierigkeit, eigene Bedürftigkeit und Abhängigkeit anzuerkennen.",
          },
          {
            label: "Innere Motivation",
            text: "Das innere Streben nach Nähe, Anerkennung und Gebrauchtwerden ist verbunden mit dem Wunsch, durch Fürsorge Liebe, Bindung und Bedeutung zu erfahren.",
          },
        ],
      },
      {
        title: "SE2 · Seite 5 · Integration",
        intro:
          "Die Integrationsseite der SE2 führt von Selbstaufgabe und Bedürftigkeit zu Selbstfürsorge, Fülle und freier Fürsorge.",
        entries: [
          {
            label: "Integrationspotenzial",
            text: "Selbstfürsorge und Fülle. Wahre Fürsorge beginnt bei dir, denn nur aus einem vollen Herzen kannst du wirklich geben.",
          },
          {
            label: "Archetypische Essenz",
            text: "Die Essenz der SE2 ist Fürsorge. Sie lebt für Nähe und Geborgenheit, in reifer Form aus innerer Fülle statt aus Pflicht.",
          },
          {
            label: "Verkörperte Qualität",
            text: "Warme Ausstrahlung, natürliche Hilfsbereitschaft, gut spürbarer Körper, beruhigende Präsenz, loyale Verbundenheit und Schutzinstinkt.",
          },
          {
            label: "Nervensystem-Regulation",
            text: "Sicherheit im Körper verankern, Grenzen wahrnehmen, Überverantwortung loslassen, sich selbst versorgen und Bedürfnisse klar kommunizieren.",
          },
          {
            label: "Beziehungsebene",
            text: "Liebevolle Zuverlässigkeit, echte Nähe, unterstützende Präsenz, echtes Zuhören, klare gesunde Grenzen und wertschätzende Kommunikation.",
          },
          {
            label: "Neue Fähigkeiten",
            text: "Sich selbst nähren, gesunde Grenzen setzen, Bedürfnisse ausdrücken, Vertrauen in Prozesse, Humor und gerechte Entscheidungen.",
          },
          {
            label: "Integrationssatz",
            text: "Ich bin eine Quelle der Fürsorge, die zuerst mich selbst nährt.",
          },
          {
            label: "Bewusstseinsraum",
            text: "Integration bedeutet, weniger gefallen zu wollen und mehr aus echter Fülle zu geben. Der Wunsch zu helfen wird bewusst und frei.",
          },
          {
            label: "Ausstrahlung",
            text: "Warme Autorität, klare Präsenz, nährende Wärme, geerdete Sanftheit, ordnende Wirkung ohne Druck und menschliche Würde.",
          },
        ],
      },
    ],
    SO2: [
      {
        title: "SO2 · Extraktion im Aufbau",
        intro:
          "Die SO2 ist als Quellenstruktur vollständig sichtbar. Die Tiefenextraktion wird nach dem SE2-Muster gefüllt: Seite 1 Profil, Seite 2 Integration, Seite 3 Körperarbeit, Seite 4 Heilmittel, Seite 5 Integration.",
        entries: [
          {
            label: "Kernrichtung",
            text: "Die soziale Zwei sucht Zugehörigkeit, Anerkennung und Verbindung in Gemeinschaften und muss lernen, Liebe nicht über Nützlichkeit zu sichern.",
          },
          {
            label: "Kernsatz",
            text: "Wenn du nicht gebraucht werden musst, wird deine Liebe frei, großzügig und liebevoll.",
          },
        ],
      },
    ],
    SX2: [
      {
        title: "SX2 · Extraktion im Aufbau",
        intro:
          "Die SX2 ist als Quellenstruktur vollständig sichtbar. Die Tiefenextraktion wird nach dem SE2-Muster gefüllt: Seite 1 Profil, Seite 2 Integration, Seite 3 Körperarbeit, Seite 4 Heilmittel, Seite 5 Integration.",
        entries: [
          {
            label: "Kernrichtung",
            text: "Die sexuelle Zwei sucht intensive Nähe, besondere Resonanz und emotionale Anziehung und muss lernen, Liebe nicht durch Geben oder Verführung sichern zu müssen.",
          },
          {
            label: "Kernsatz",
            text: "Wenn du Liebe nicht erobern musst, kann echte Verbundenheit dich wirklich erreichen.",
          },
        ],
      },
    ],
  };

  return [type2OverviewModule, ...(subtypeModules[subtypeCode] || [])];
}

export function type3VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();

  return [
    {
      title: "Typ 3 · Überblick",
      caption:
        "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-3/type-3-overview.jpeg",
      alt: "Typ 3 Überblick mit Grundthema Erfolg und Wert",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-3/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-3-Kartenset`,
    })),
  ];
}

export function type4VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();

  return [
    {
      title: "Typ 4 · Überblick",
      caption:
        "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-4/type-4-overview.jpeg",
      alt: "Typ 4 Überblick mit Grundthema Einzigartigkeit und Tiefe",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-4/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-4-Kartenset`,
    })),
  ];
}

export function type5VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();

  return [
    {
      title: "Typ 5 · Überblick",
      caption:
        "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-5/type-5-overview.jpeg",
      alt: "Typ 5 Überblick mit Grundthema Wissen und Kompetenz",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-5/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-5-Kartenset`,
    })),
  ];
}


export function type6VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 6 · Überblick",
      caption: "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-6/type-6-overview.jpeg",
      alt: "Typ 6 Überblick mit Grundthema Sicherheit und Vertrauen",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-6/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-6-Kartenset`,
    })),
  ];
}

export function type7VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 7 · Überblick",
      caption: "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-7/type-7-overview.jpeg",
      alt: "Typ 7 Überblick mit Grundthema Freude und Fülle",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-7/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-7-Kartenset`,
    })),
  ];
}

export function type8VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 8 · Überblick",
      caption: "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-8/type-8-overview.jpeg",
      alt: "Typ 8 Überblick mit Grundthema Stärke und Kontrolle",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-8/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-8-Kartenset`,
    })),
  ];
}

export function type9VisualPages(subtypeCode, subtypeTitle) {
  const folder = subtypeCode.toLowerCase();
  return [
    {
      title: "Typ 9 · Überblick",
      caption: "Grundthema, Körperorganisation, Organismusfrage, Spannungsverteilung und Tierarchetyp.",
      src: "assets/knowledge/type-9/type-9-overview.jpeg",
      alt: "Typ 9 Überblick mit Grundthema Frieden und Harmonie",
    },
    ...[1, 2, 3, 4, 5].map((page) => ({
      title: `${subtypeCode} · Seite ${page}`,
      caption: `${subtypeTitle}: Originaltafel ${page} als Quellenebene für die weitere Extraktion.`,
      src: `assets/knowledge/type-9/${folder}/${folder}-page-${page}.jpeg`,
      alt: `${subtypeCode} Seite ${page} aus dem Typ-9-Kartenset`,
    })),
  ];
}
export function type3SourceCoverage(subtypeCode) {
  return [
    {
      page: "Typ 3 · Überblick",
      blocks: [
        "Grundthema",
        "Stirnspannung",
        "Blickfokus",
        "Mundlinie",
        "Kiefer & Nacken",
        "Körperorganisation",
        "Spaltung / innerer Konflikt",
        "Typische Haltung & Ausdruck",
        "Verkörperte Signatur",
        "Integrationsweg",
        "Organismusfrage",
        "Blickqualität",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Archetypisches Tier",
      ],
    },
    {
      page: `${subtypeCode} · Seite 1`,
      blocks: [
        "Grundthema",
        "weiblicher Prototyp",
        "männlicher Prototyp",
        "Organismusfrage",
        "Blickqualität",
        "Mikrospannung",
        "Atemrhythmus",
        "Bewegungsinitiierung",
        "Kontaktstil",
        "Spannungsverteilung",
        "Verkörperte Signatur",
        "Grundtension",
        "Integrationsweg",
        "Tierentsprechung",
        "Ressourcenfeld",
      ],
    },
    {
      page: `${subtypeCode} · Seite 2`,
      blocks: [
        "2-Punkte-Integration",
        "Punkt 1",
        "Punkt 2",
        "Vorgehensweise",
        "Prototypen",
        "Lebensthema",
        "unbewusste Strategie",
        "Integration",
        "Kernsatz",
      ],
    },
    {
      page: `${subtypeCode} · Seite 3`,
      blocks: [
        "Problem",
        "Wendepunkt",
        "Integration",
        "Körperarbeit",
        "Akupressur",
        "Atemimpuls",
        "Vollkommen still sitzen",
        "mentale & emotionale Haltung",
        "Flügel",
        "Medien- und Songfelder",
      ],
    },
    {
      page: `${subtypeCode} · Seite 4`,
      blocks: [
        "Heilmittel-Kompass",
        "homöopathisches Einzelmittel",
        "Thema",
        "Wirkung auf Lebenskraft und Leidenschaft",
        "Mineralstoffimpuls",
        "Bachblüte",
        "Edelstein",
        "Tee",
        "Leidenschaft",
        "innere Motivation",
        "Healing Music",
      ],
    },
    {
      page: `${subtypeCode} · Seite 5`,
      blocks: [
        "Integrationspotenzial",
        "archetypische Essenz",
        "verkörperte Qualität",
        "Nervensystem-Regulation",
        "Beziehungsebene",
        "neue Fähigkeiten",
        "Integrationssatz",
        "Bewusstseinsraum",
        "Ausstrahlung",
      ],
    },
  ];
}

export const type3OverviewModule = {
  title: "Typ 3 · Grundkarte",
  intro:
    "Die Typ-3-Grundkarte bildet die gemeinsame Grundlage aller Dreier-Subtypen. Im Zentrum steht das Bedürfnis, wertvoll, erfolgreich und anerkannt zu sein. Der Körper organisiert sich auf Wirkung, Leistung und sichtbare Kompetenz.",
  entries: [
    {
      label: "Grundthema",
      text: "Erfolg & Wert. Typ 3 richtet Aufmerksamkeit auf Leistung, Wirkung, Anerkennung und die Frage, wie Wert sichtbar bewiesen werden kann.",
    },
    {
      label: "Organismusfrage",
      text: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
    },
    {
      label: "Innerer Konflikt",
      text: "Sein und Schein stehen gegeneinander: Wer ich wirklich bin gegenüber dem Bild, das ich zeigen muss.",
    },
    {
      label: "Körperorganisation",
      text: "Aufrecht, präsent und leistungsbereit. Brust und Lunge aktiv, Schultern weit offen, Energie stark aktiv und nach vorne gerichtet.",
    },
    {
      label: "Blickqualität",
      text: "Fokussiert und zielgerichtet. Der Blick scannt Chancen, bewertet Möglichkeiten und sucht Bestätigung durch Leistung.",
    },
    {
      label: "Mikrospannung",
      text: "Spannung im Stirn- und Kieferbereich, innere Anspannung durch Leistungsdruck und Kontrolle der mimischen Regung.",
    },
    {
      label: "Atemrhythmus",
      text: "Eher flach und schnell, mit Brustatmung bei Aktivität. Seufzen kann bei Druck oder Scheitern auftreten.",
    },
    {
      label: "Bewegungsinitiierung",
      text: "Zielstrebig, effizient und dynamisch. Reagiert auf Chancen und Ziele, bewegt sich, um etwas zu erreichen.",
    },
    {
      label: "Kontaktstil",
      text: "Charismatisch, überzeugend und anpassungsfähig. Sucht Anerkennung und Bewunderung, orientiert sich an Wirkung und Ergebnis.",
    },
    {
      label: "Spannungsverteilung",
      text: "Hauptspannung in Stirn, Kiefer und Nacken. Nebenaktivität im Solarplexus und in den Schultern.",
    },
    {
      label: "Integrationsweg",
      text: "Vom Funktionieren zur Echtheit. Vom äußeren Erfolg zum inneren Wert. Selbstannahme statt Selbstvermarktung.",
    },
    {
      label: "Archetypisches Tier",
      text: "Gepard: Schnelligkeit, Fokus, Eleganz, Zielstrebigkeit, Wettbewerb, Erfolg und Anmut unter Druck.",
    },
  ],
};

export function type3ContentModules(subtypeCode) {
  const profiles = {
    SE3: {
      label: "Selbsterhaltende Drei",
      field: "Leistung und Wirksamkeit in der Selbsterhaltung",
      animal: "Waschbär",
      subtypeQuestion:
        "Wie kann ich wirksam und verlässlich sein, ohne meinen Wert über Leistung und Funktionieren zu beweisen?",
      page2Core:
        "Wenn du aufhörst, nur zu funktionieren, erscheint dein Wert ohne Leistung und Anpassung.",
      page3Path: "Selbsttäuschung -> Authentizität",
      problem:
        "Du passt dich effizient an Erwartungen an, um Sicherheit und Anerkennung zu erhalten; dabei verlierst du leicht den Kontakt zu deinen echten Gefühlen.",
      turningPoint:
        "Du erkennst, dass ständiges Funktionieren dich von deinen echten Gefühlen entfernt.",
      integration:
        "Du handelst klar und wirksam, ohne dich nur über Leistung und Funktionieren zu definieren.",
      page5Title: "Flexibilität & innere Stabilität",
      page5Sentence:
        "Ich passe mich an, ohne mich zu verlieren, und finde Halt in mir selbst.",
    },
    SO3: {
      label: "Soziale Drei",
      field: "Erfolg und Anerkennung im sozialen Umfeld",
      animal: "Gepard",
      subtypeQuestion:
        "Wie kann ich sichtbar wirken und beitragen, ohne mich über Erfolg, Rolle oder Anerkennung zu definieren?",
      page2Core:
        "Wenn du nicht glänzen musst, wird deine Wirkung wahrhaftig, menschlich und stark.",
      page3Path: "Selbsttäuschung -> Authentizität",
      problem:
        "Du orientierst dich stark an Status, Anerkennung und Wirkung; dabei entfernst du dich leicht von deinem inneren Wesen.",
      turningPoint:
        "Du erkennst, dass Status und Anerkennung deinen inneren Wert nicht sichern können.",
      integration:
        "Du nutzt deine Fähigkeiten bewusst, ohne dich über Status und Anerkennung zu definieren.",
      page5Title: "Wirkung & Exzellenz",
      page5Sentence:
        "Ich nutze meine Fähigkeiten zum Wohl des Ganzen und inspiriere andere durch mein echtes Sein.",
    },
    SX3: {
      label: "Sexuelle Drei",
      field: "Ausstrahlung und Wirkung im direkten 1:1-Kontakt",
      animal: "Pfau",
      subtypeQuestion:
        "Wie kann ich anziehend und lebendig sein, ohne mich für Liebe, Resonanz oder Bewunderung inszenieren zu müssen?",
      page2Core:
        "Wenn du dich nicht inszenieren musst, entsteht echte Ausstrahlung aus innerem Wert.",
      page3Path: "Selbsttäuschung -> Authentizität",
      problem:
        "Du möchtest bewundert und begehrt werden, um deinen Wert zu spüren; dabei entsteht leicht eine Rolle statt echter Authentizität.",
      turningPoint:
        "Du erkennst, dass Ausstrahlung und Bewunderung keine echte innere Nähe erzeugen.",
      integration:
        "Du zeigst dich offen und strahlend, ohne eine Rolle aufrechterhalten zu müssen.",
      page5Title: "Wirkung & Anziehung",
      page5Sentence:
        "Ich bin genug, auch wenn ich nicht performe - meine echte Ausstrahlung zieht an.",
    },
  };

  const profile = profiles[subtypeCode];
  if (!profile) return [type3OverviewModule];

  return [
    type3OverviewModule,
    {
      title: `${subtypeCode} · Seite 1 · Subtyp-Profil`,
      intro: `${profile.label}: ${profile.field}. Diese Tafel beschreibt Grundthema, Prototypen, Organismusfrage und die verkörperten Ausdrucksfelder des Subtyps.`,
      entries: [
        {
          label: "Grundthema",
          text: `Leistung & Erfolg. Im Subtypfeld ${profile.field.toLowerCase()} wird Typ-3-Wert vor allem über Wirksamkeit, Kompetenz und sichtbare Resultate organisiert.`,
        },
        {
          label: "Typbedingte Organismusfrage",
          text: "Wie kann ich erfolgreich sein und dabei meinen Wert beweisen?",
        },
        { label: "Subtypvariante", text: profile.subtypeQuestion },
        {
          label: "Blickqualität",
          text: "Wach, prüfend und fokussiert. Die Aufmerksamkeit fragt, was Wirkung erzeugt, was nützt und wie Ziele erreicht werden.",
        },
        {
          label: "Mikrospannung",
          text: "Stirn, Augen, Mund, Kiefer und Haltung halten Leistung, Kontrolle und Präsenz bereit.",
        },
        {
          label: "Atemrhythmus",
          text: "Eher flach im Brustbereich, schneller bei Zielverfolgung, stockend bei Unsicherheit oder Kritik.",
        },
        {
          label: "Tierentsprechung",
          text: `${profile.animal} als archetypisches Resonanzbild des Subtyps.`,
        },
      ],
    },
    {
      title: `${subtypeCode} · Seite 2 · 2-Punkte-Integration`,
      intro:
        "Die zweite Tafel verortet die körperliche Integrationspraxis mit zwei Aufmerksamkeitspunkten und einem Kernsatz für die tägliche Regulation.",
      entries: [
        {
          label: "Punkt 1",
          text: "Stirn / Kopf: Wissen, Verstehen, Wahrnehmung und innere Klarheit.",
        },
        {
          label: "Punkt 2",
          text: "Herzraum / Brustmitte: Nähe, Verbindung und Resonanz.",
        },
        {
          label: "Praxis",
          text: "Eine Hand auf die Stirn oder den Kopf legen, die andere auf den Herzraum. Beide Punkte gleichzeitig wahrnehmen und das gesamte Energiefeld des Körpers einbeziehen.",
        },
        { label: "Kernsatz", text: profile.page2Core },
      ],
    },
    {
      title: `${subtypeCode} · Seite 3 · Transformation`,
      intro:
        "Die dritte Tafel beschreibt Problem, Wendepunkt und Integration sowie die körperliche Praxis über Akupressur, Atemimpuls und stille Präsenz.",
      entries: [
        { label: "Transformationsrichtung", text: profile.page3Path },
        { label: "Problem", text: profile.problem },
        { label: "Wendepunkt", text: profile.turningPoint },
        { label: "Integration", text: profile.integration },
        {
          label: "Körperliche Integration",
          text: "Leistung / Energie: sechs Zugänge über Gesicht, Hand, Fuß, Bauch, Finger und Ohr zur Balance und Regulation.",
        },
        {
          label: "Mentale & emotionale Haltung",
          text: "Typ 3 zeigt mental Selbsttäuschung und emotional Eitelkeit. Der innere Wert kann hinter Leistung, Wirkung und Image verschwinden.",
        },
      ],
    },
    {
      title: `${subtypeCode} · Seite 4 · Heilmittel-Kompass`,
      intro:
        "Die vierte Tafel bündelt die heilkundliche Ebene für Typ 3: homöopathisches Einzelmittel, Mineralstoffimpuls, Bachblüte, Edelstein, Tee, Leidenschaft und Motivation.",
      entries: [
        {
          label: "Homöopathisches Einzelmittel",
          text: "Tarentula hispanica (Spanische Tarantel) als Typ-3-Mittel für Getriebenheit, Leistungsdruck und die Wandlung hin zu Authentizität.",
        },
        {
          label: "Ziel",
          text: "Regulation und Stärkung der Dreier-Lebenskraft: Ausgleich der blockierten, verdrängten Herzenergie.",
        },
        {
          label: "Mineralstoffimpuls",
          text: "Ferrum phosphoricum unterstützt Aktivierung, Antrieb und vitale frische Energie.",
        },
        {
          label: "Bachblüte",
          text: "Vervain unterstützt Authentizität, Ausgleich und Maß.",
        },
        {
          label: "Edelstein",
          text: "Tigerauge steht für Fokus, Klarheit und Selbstvertrauen.",
        },
        {
          label: "Tee",
          text: "Rosmarintee unterstützt Konzentration, Klärung und Energie.",
        },
      ],
    },
    {
      title: `${subtypeCode} · Seite 5 · Integrationspotenzial`,
      intro:
        "Die fünfte Tafel verdichtet das Integrationspotenzial mit archetypischer Essenz, verkörperter Qualität, Beziehungsebene, Bewusstseinsraum und Ausstrahlung.",
      entries: [
        { label: "Integrationspotenzial", text: profile.page5Title },
        { label: "Integrationssatz", text: profile.page5Sentence },
        {
          label: "Verkörperte Qualität",
          text: "Kompetenz und Wirksamkeit verbinden sich mit Echtheit, innerem Wert und menschlicher Präsenz.",
        },
        {
          label: "Nervensystem-Regulation",
          text: "Aktivierung wird bewusst gesteuert, Erholung eingeplant, innerer Druck gelöst und echter Selbstkontakt gestärkt.",
        },
        {
          label: "Beziehungsebene",
          text: "Begegnung auf Augenhöhe, klare Kommunikation, echte Verbindung und Wertschätzung ohne Rollenbild.",
        },
      ],
    },
  ];
}
