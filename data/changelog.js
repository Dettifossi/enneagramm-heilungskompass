// Neue Inhalte – wird auf dem Startbildschirm angezeigt, wenn Einträge neuer als letzter Besuch sind.
// Format: { date: "JJJJ-MM-TT", text: "Deutscher Text", text_en: "English text" }
// Neueste Einträge oben. Datum als ISO-String (wird alphabetisch verglichen).
var CHANGELOG = [
  {
    date: "2026-07-20",
    text: "Neues Porträt: Meg Ryan (SX3w4) – Schauspielerin, Regisseurin. Hollywoods Liebling der 1990er – der Pfau, der mehr wollte als seine Rolle.",
    text_en: "New portrait: Meg Ryan (SX3w4) – actress, director. Hollywood's sweetheart of the 1990s – the peacock who wanted more than its role.",
    route: "beruehmte-meg-ryan"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Lena Meyer-Landrut (SX3w2) – Sängerin, ESC-Gewinnerin 2010. Der Pfau, der nicht weiß, wie schön er ist.",
    text_en: "New portrait: Lena Meyer-Landrut (SX3w2) – singer, ESC winner 2010. The peacock who doesn't know how beautiful it is.",
    route: "beruehmte-lena-meyer-landrut"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Karl Lagerfeld (SO3w4) – Mode-Ikone, Creative Director von Chanel und Fendi. Der Gepard, der sich selbst in ein Symbol verwandelt hat.",
    text_en: "New portrait: Karl Lagerfeld (SO3w4) – fashion icon, Creative Director of Chanel and Fendi. The cheetah who transformed himself into a symbol.",
    route: "beruehmte-karl-lagerfeld"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Sahra Wagenknecht (SO3w2) – Politikerin, BSW-Gründerin, Buchautorin. Der Gepard, der nicht nur sprintet, sondern auch weiß, wohin.",
    text_en: "New portrait: Sahra Wagenknecht (SO3w2) – politician, BSW founder, author. The cheetah that doesn't just sprint, but knows where it's going.",
    route: "beruehmte-sahra-wagenknecht"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: David L. Rathmer (SE3w4) – Enneagramm-Profiler, Gründer der Ennea Scholars Academy, Mitentwickler des Kompass. Der Waschbär, der im Licht arbeitet.",
    text_en: "New portrait: David L. Rathmer (SE3w4) – Enneagram profiler, founder of Ennea Scholars Academy, co-developer of the Compass. The raccoon that works in the light.",
    route: "beruehmte-david-l-rathmer"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Wolodymyr Selenskyj (SE3w2) – Kontratyp der Drei, der Waschbär, der den Helden spielt",
    text_en: "New portrait: Volodymyr Zelensky (SE3w2) – Countertype of the Three, the raccoon playing the hero",
    route: "beruehmte-wolodymyr-selenskyj"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Pamela Reif (SX2w3) – Millionen Verbindungen durch einen Bildschirm, Verführung als Verbindungskunst",
    text_en: "New portrait: Pamela Reif (SX2w3) – millions of connections through a screen, seduction as the art of connection",
    route: "beruehmte-pamela-reif"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Monika Gruber (SX2w1) – Bayerns schärfste Verführerin zur Wahrheit, Humor als Heimat, das Kamel mit Haltung",
    text_en: "New portrait: Monika Gruber (SX2w1) – Bavaria's sharpest seductress to truth, humour as home, the camel with conviction",
    route: "beruehmte-monika-gruber"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Will Smith (SO2w3) – Fresh Prince, Ali, Oscar 2022. Der Golden Retriever, der die Welt umarmen will",
    text_en: "New portrait: Will Smith (SO2w3) – Fresh Prince, Ali, Oscar 2022. The Golden Retriever who wants to embrace the world",
    route: "beruehmte-will-smith"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Prof. Dr. Sucharit Bhakdi (SO2w1) – der Golden Retriever, der Alarm schlägt, weil er die Gesellschaft liebt",
    text_en: "New portrait: Prof. Dr. Sucharit Bhakdi (SO2w1) – the Golden Retriever sounding the alarm out of love for society",
    route: "beruehmte-sucharit-bhakdi"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Klaus Kinski (SX1w9) – Kontratyp der Eins, Aguirre, Nosferatu, Fitzcarraldo. Die Schwarze Mamba des deutschen Kinos",
    text_en: "New portrait: Klaus Kinski (SX1w9) – Countertype of One, Aguirre, Nosferatu, Fitzcarraldo. The Black Mamba of German cinema",
    route: "beruehmte-klaus-kinski"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Marie-Agnes Strack-Zimmermann (SX1w9) – die Schwarze Mamba der deutschen Politik: scharf, beharrlich, prinzipientreu",
    text_en: "New portrait: Marie-Agnes Strack-Zimmermann (SX1w9) – the Black Mamba of German politics: sharp, persistent, principled",
    route: "beruehmte-marie-agnes-strack-zimmermann"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Jamie Lee Curtis (SX1w2) – Oscar 2023, Nüchternheit und die Schwarze Mamba, die keine Heuchelei erträgt",
    text_en: "New portrait: Jamie Lee Curtis (SX1w2) – Oscar 2023, sobriety and the Black Mamba that tolerates no hypocrisy",
    route: "beruehmte-jamie-lee-curtis"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Jürgen Klopp (SO1w2) – Trainer, Motivator, die Gans, die ihrer Formation glaubt",
    text_en: "New portrait: Jürgen Klopp (SO1w2) – coach, motivator, the goose that believes in its formation",
    route: "beruehmte-juergen-klopp"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Marie Kondo (SE1w2) – KonMari, \"Löst es Freude aus?\" und der Adler als Ordnungsprinzip",
    text_en: "New portrait: Marie Kondo (SE1w2) – KonMari, \"Does it spark joy?\" and the eagle as principle of order",
    route: "beruehmte-marie-kondo"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Queen Elizabeth II. (SE1w9) – 70 Jahre Pflicht, Stille als Stärke, der Adler auf seinem Posten",
    text_en: "New portrait: Queen Elizabeth II. (SE1w9) – 70 years of duty, silence as strength, the eagle at her post",
    route: "beruehmte-queen-elizabeth-ii"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Uli Hoeneß (SE2w3) – Fußballweltmeister, Bayern-Präsident und Flusspferd",
    text_en: "New portrait: Uli Hoeneß (SE2w3) – football world champion, Bayern president and hippopotamus",
    route: "beruehmte-uli-hoeness"
  },
  {
    date: "2026-07-20",
    text: "Neues Porträt: Gloria von Thurn und Taxis (SE2w1) – Fürstin, Matriarchin und Flusspferd",
    text_en: "New portrait: Gloria von Thurn und Taxis (SE2w1) – princess, matriarch and hippopotamus",
    route: "beruehmte-gloria-von-thurn-und-taxis"
  },
  {
    date: "2026-07-20",
    text: "Neuer Wissens-Artikel: Enneagramm vs. andere Persönlichkeitsmodelle – Big Five, MBTI, DISG und mehr im Vergleich",
    text_en: "New knowledge article: Enneagram vs. other personality models – Big Five, MBTI, DISC and more compared",
    route: "persoenlichkeitsmodelle-vergleich"
  },
  {
    date: "2026-07-19",
    text: "Neue Rubrik: Enneagramm meets Hom\xf6opathie – 9 Patientenf\xe4lle aus der Praxis der Enneagramm-Hom\xf6opathie",
    text_en: "New section: Enneagram meets Homeopathy – 9 patient cases from the practice of Enneagram Homeopathy",
    route: "enneagramm-homoeopathie"
  },
  {
    date: "2026-07-19",
    text: "Neues Porträt: Boris Becker (SX7w8) – Tennislegende und Schimpanse mit Achterflügel",
    text_en: "New portrait: Boris Becker (SX7w8) – tennis legend and chimpanzee with Eight wing",
    route: "beruehmte-boris-becker"
  },
  {
    date: "2026-07-19",
    text: "Neuer Kriminalfall: Boris Becker – Der Fall eines Weltstars",
    text_en: "New criminal case: Boris Becker – the case of a world star",
    route: "kriminalpsychologie-boris-becker"
  },
  {
    date: "2026-07-20",
    text: "Neue Rubrik: Enneagramm meets Astrologie – 8 Horoskop-Analysen berühmter Persönlichkeiten",
    text_en: "New section: Enneagram meets Astrology – 8 horoscope analyses of famous personalities",
    route: "enneagramm-astrologie"
  },
  {
    date: "2026-07-19",
    text: "Übersetzen-Funktion für Rezensionen eingeführt",
    text_en: "Translation feature added for reviews"
  }
];
