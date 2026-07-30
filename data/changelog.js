// Neue Inhalte – wird auf dem Startbildschirm angezeigt, wenn Einträge neuer als letzter Besuch sind.
// Format: { date: "JJJJ-MM-TT", text: "Deutscher Text", text_en: "English text" }
// Neueste Einträge oben. Datum als ISO-String (wird alphabetisch verglichen).
var CHANGELOG = [
    { version: "v761", date: "2026-07-30", text: "Neue Rubrik: Enneagramm-Kunstgalerie – 9 Galerien mit je 6 klassischen Kunstwerken (Dürer bis Matisse), die Leidenschaft und Fixierung jedes Typs spiegeln, mit Kunstwerk-Porträts.", text_en: "New section: Enneagram Art – 9 galleries of 6 classic artworks each (Dürer to Matisse), mirroring each type's passion and fixation, with artwork portraits.", route: "enneagramm-kunst" },
    { version: "v760", date: "2026-07-30", text: "Porträt: Elvis Presley (SX2w3, Kamel) – King of Rock'n'Roll, Sänger und Schauspieler. Hüftschwung als Skandal, grenzenlose Großzügigkeit, ein früher Verlust, der nie ganz heilte.", text_en: "New portrait: Elvis Presley (SX2w3, Camel) – King of Rock'n'Roll, singer and actor. Scandalous hip-shaking, boundless generosity, an early loss that never fully healed.", route: "beruehmte-elvis-presley" },
    { version: "v759", date: "2026-07-30", text: "Porträt: Milow (SX2w1, Kamel) – Sänger und Songwriter. Ayo Technology, Little in the Middle, leise Ehrlichkeit statt lauter Inszenierung.", text_en: "New portrait: Milow (SX2w1, Camel) – singer and songwriter. Ayo Technology, Little in the Middle, quiet honesty instead of loud performance.", route: "beruehmte-milow" },
    { version: "v758", date: "2026-07-30", text: "Porträt: Kamala Harris (SO2w3, Golden Retriever) – Politikerin, ehem. Vizepräsidentin der USA. Dienst als politische Berufung, mehrere historische Premieren.", text_en: "New portrait: Kamala Harris (SO2w3, Golden Retriever) – politician, former US Vice President. Service as political calling, several historic firsts.", route: "beruehmte-kamala-harris" },
    { version: "v757", date: "2026-07-30", text: "Porträt: Marisa Abela (SO2w1, Golden Retriever) – Schauspielerin. Industry, Back to Black, Ensemblegefühl mit Vorbereitungsdisziplin.", text_en: "New portrait: Marisa Abela (SO2w1, Golden Retriever) – actress. Industry, Back to Black, ensemble feeling with rigorous preparation.", route: "beruehmte-marisa-abela" },
    { version: "v756", date: "2026-07-30", text: "Porträt: Oprah Winfrey (SE2w3, Flusspferd) – Moderatorin, Unternehmerin, Philanthropin. Vom Trauma zum Medienimperium, Fürsorge im großen Maßstab.", text_en: "New portrait: Oprah Winfrey (SE2w3, Hippo) – TV host, entrepreneur, philanthropist. From trauma to media empire, care at scale.", route: "beruehmte-oprah-winfrey" },
    { version: "v755", date: "2026-07-30", text: "Porträt: Jack Black (SE2w1, Flusspferd) – Schauspieler und Musiker. School of Rock, Tenacious D, vollkörperliche Hingabe an die Freude.", text_en: "New portrait: Jack Black (SE2w1, Hippo) – actor and musician. School of Rock, Tenacious D, full-body devotion to joy.", route: "beruehmte-jack-black" },
    { version: "v754", date: "2026-07-30", text: "Porträt: Robbie Williams (SX1w2, Schwarze Mamba) – Sänger und Entertainer. Radikale Offenheit über Sucht, Depression und Selbstzweifel, die Erlaubnis, unperfekt geliebt zu werden.", text_en: "New portrait: Robbie Williams (SX1w2, Black Mamba) – singer and entertainer. Radical honesty about addiction, depression and self-doubt, the permission to be loved while imperfect.", route: "beruehmte-robbie-williams" },
    { version: "v753", date: "2026-07-29", text: "Porträt: Grigori Rasputin (SX1w9, Schwarze Mamba) – Wandermönch und Heiler am Zarenhof. Reinheit durch Sünde, ein geheilter Zarewitsch und ein Ende voller Legenden.", text_en: "New portrait: Grigori Rasputin (SX1w9, Black Mamba) – wandering monk and healer at the Tsar's court. Purity through sin, a healed Tsarevich, and a death shrouded in legend.", route: "beruehmte-rasputin" },
    { version: "v752", date: "2026-07-29", text: "Porträt: David Bowie (SO1w2, Gans) – Musiker und kulturelle Grenzgängerfigur. Fünf Jahrzehnte Verwandlung, Großzügigkeit gegenüber anderen Künstlern und eine dunkle Episode Mitte der Siebziger.", text_en: "New portrait: David Bowie (SP1w2, Goose) – musician and cultural boundary-crosser. Five decades of transformation, generosity toward other artists, and a dark episode in the mid-1970s.", route: "beruehmte-david-bowie" },
    { version: "v751", date: "2026-07-29", text: "Porträt: Ursula von der Leyen (SO1w9, Gans) – EU-Kommissionspräsidentin. Krisenmanagement, Pfizergate-Affäre und die Frage nach Rechenschaft.", text_en: "New portrait: Ursula von der Leyen (SP1w9, Goose) – EU Commission President. Crisis management, the Pfizergate affair, and the question of accountability.", route: "beruehmte-ursula-von-der-leyen" },
    { version: "v750", date: "2026-07-28", text: "Porträt: Ken Follett (SE1w9, Adler) – Bestseller-Autor historischer Romane. Über sechzig Jahre schriftstellerische Konstanz. Der Adler, der ruhig weiterkreist.", text_en: "New portrait: Ken Follett (SP1w9, Eagle) – bestselling author of historical novels. Over sixty years of writing consistency. The eagle who keeps calmly circling.", route: "beruehmte-ken-follett" },
    { version: "v749", date: "2026-07-28", text: "Porträt: Dan Brown (SE1w2, Adler) – Bestseller-Autor, bekannt für seine Symbolik-Romane um Robert Langdon. Der Adler, der Codes entschlüsselt.", text_en: "New portrait: Dan Brown (SP1w2, Eagle) – bestselling author, known for his symbology novels featuring Robert Langdon. The eagle who decodes.", route: "beruehmte-dan-brown" },
    { version: "v738", date: "2026-07-26", text: "Geschenk für Sie: Auf der Stille-Seite finden Sie jetzt das komplette erste Kapitel des Hörbuchs Meta-Intelligenz – von Detlef Rathmer selbst gesprochen.", text_en: "A gift for you: the Silence page now includes the complete first chapter of the Meta-Intelligenz audiobook – read by Detlef Rathmer himself.", route: "stille" },
    { version: "v735", date: "2026-07-24", text: "Neu: Gesichts-Scan & Kurzvideo – bereiten Sie Fotos oder ein 2-Minuten-Video für Ihre persönliche Typberatung vor.", text_en: "New: Face Scan & short video – prepare photos or a 2-minute video for your personal type consultation.", route: "gesichts-scan" },
    { version: "v723", date: "2026-07-22", text: "Porträt: Dakota Johnson (SX9w8, Faultier) – Schauspielerin. Fifty Shades, Suspiria, The Lost Daughter. Das Faultier, das beißt.", text_en: "New portrait: Dakota Johnson (SX9w8, Sloth) – actress. Fifty Shades, Suspiria, The Lost Daughter. The sloth that bites.", route: "beruehmte-dakota-johnson" },
    { version: "v722", date: "2026-07-22", text: "Porträt: Iga Świątek (SX9w1, Faultier) – Tennisspielerin. Roland Garros 2020, 2022, 2023, 2024, US Open 2022. Das Faultier, das im Flow fliegt.", text_en: "New portrait: Iga Świątek (SX9w1, Sloth) – tennis player. Roland Garros 2020, 2022, 2023, 2024, US Open 2022. The sloth that flies in the flow.", route: "beruehmte-iga-swiatek" },
    { version: "v721", date: "2026-07-22", text: "Porträt: Ronald Reagan (SO9w8, Büffel) – 40. US-Präsident. Morning in America, Evil Empire. Der Büffel, der lächelt und dem die Herde folgt.", text_en: "New portrait: Ronald Reagan (SO9w8, Buffalo) – 40th US President. Morning in America, Evil Empire. The buffalo who smiles and the herd follows.", route: "beruehmte-ronald-reagan" },
  { version: "v720", date: "2026-07-22", text: "Porträt: Kevin Costner (SO9w1, Büffel) – Schauspieler und Regisseur. Dances with Wolves, Yellowstone. Der Büffel, der für etwas kämpft, das größer ist als er selbst.", text_en: "New portrait: Kevin Costner (SO9w1, Buffalo) – actor and director. Dances with Wolves, Yellowstone. The buffalo who fights for something greater than himself.", route: "beruehmte-kevin-costner" },
    { version: "v717", date: "2026-07-22", text: "Porträt: Angela Merkel (SE9w8, Elefant) – Bundeskanzlerin 2005–2021. Sechzehn Jahre Aussitzen und ein Erbe voller Widersprüche.", text_en: "New portrait: Angela Merkel (SE9w8, Elephant) – Chancellor 2005–2021. Sixteen years of waiting it out and a legacy full of contradictions.", route: "beruehmte-angela-merkel" },
    { version: "v716", date: "2026-07-22", text: "Porträt: James Levine (SE9w1, Elefant) – Dirigent, 40 Jahre Met. Der Elefant, der das Haus bewohnte.", text_en: "New portrait: James Levine (SE9w1, Elephant) – conductor, 40 years at the Met. The elephant that inhabited the house.", route: "beruehmte-james-levine" },
    { version: "v715", date: "2026-07-22", text: "Porträt: Ruth Bader Ginsburg (SX8w9, Krokodil) – US-Bundesrichterin, RBG, Pionierin der Geschlechtergleichstellung. Das Krokodil, das bleibt.", text_en: "New portrait: Ruth Bader Ginsburg (SX8w9, Crocodile) – US Supreme Court Justice, RBG, pioneer of gender equality. The crocodile that remains.", route: "beruehmte-ruth-bader-ginsburg" },
    { version: "v714", date: "2026-07-22", text: "Porträt: Adele Neuhauser (SX8w7, Krokodil) – Bibi Fellner im Tatort, Österreichischer Filmpreis. Das Krokodil, das tanzt.", text_en: "New portrait: Adele Neuhauser (SX8w7, Crocodile) – Bibi Fellner in Tatort, Austrian Film Prize. The crocodile that dances.", route: "beruehmte-adele-neuhauser" },
    { version: "v713", date: "2026-07-22", text: "Porträt: Jamaica Kincaid (SO8w9, Löwe) – Schriftstellerin, Annie John, A Small Place. Der Löwe, der schreibt – Stärke, die nicht laut ist.", text_en: "New portrait: Jamaica Kincaid (SO8w9, Lion) – writer, Annie John, A Small Place. The lion who writes – strength that is not loud.", route: "beruehmte-jamaica-kincaid" },
  { version: "v712", date: "2026-07-22", text: "Portr\xe4t: Carsten Stahl (SO8w7, L\xf6we) – Antimobbingaktivist, Kampfsportler, hunderte Schulbesuche. Der L\xf6we, der in die Schulen geht.", text_en: "New portrait: Carsten Stahl (SO8w7, Lion) – anti-bullying activist, martial artist, hundreds of school visits. The lion who goes into schools.", route: "beruehmte-carsten-stahl" },
    { version: "v711", date: "2026-07-22", text: "Porträt: Jacqueline Mars (SE8w7, Orang-Utan) – Mitinhaberin Mars, Incorporated, Über 30 Mrd. Dollar Vermögen, absolute Privatheit. Der Orang-Utan, der nie gesehen werden muss.", text_en: "New portrait: Jacqueline Mars (SE8w7, Orang-Utan) – co-owner of Mars, Incorporated, $30bn+ fortune, absolute privacy.", route: "beruehmte-jacqueline-mars" },
  {
    date: "2026-07-22",
    text: "Neues Portr\xe4t: Golda Meir (SE8w9) – Premierministerin Israels, Unterzeichnerin der Unabh\xe4ngigkeitserkl\xe4rung, K\xfcchen-Kabinett, Jom-Kippur-Krieg. Der Orang-Utan, der langsam klettert und am Ende h\xf6her sitzt als alle anderen.",
    text_en: "New portrait: Golda Meir (SE8w9) – Prime Minister of Israel, signatory of the Declaration of Independence, kitchen cabinet, Yom Kippur War. The orang-utan who climbs slowly and ends up higher than everyone else.",
    route: "beruehmte-golda-meir"
  },
  {
    date: "2026-07-22",
    text: "Neues Portr\xe4t: Caroline Peters (SX7w6) – Schauspielerin, Mord mit Aussicht, Burgtheater Wien. Der Schimpanse mit Sechserfl\xfcgel: Rausch der Verwandlung, Loyalit\xe4t als Anker.",
    text_en: "New portrait: Caroline Peters (SX7w6) – actress, Mord mit Aussicht, Burgtheater Vienna. The chimpanzee with Six wing: intoxication of transformation, loyalty as anchor.",
    route: "beruehmte-caroline-peters"
  },
  {
    date: "2026-07-22",
    text: "Neues Portr\xe4t: Dieter Nuhr (SO7w8) – Kabarettist, Comedian, Maler. Nuhr im Ersten (ARD). Der Biber mit Achterfl\xfcgel: Komik als Dienst an der \xd6ffentlichkeit, Haltung als Schutzschild.",
    text_en: "New portrait: Dieter Nuhr (SO7w8) – cabaret artist, comedian, painter. Nuhr im Ersten (ARD). The beaver with Eight wing: comedy as service to the public, conviction as shield.",
    route: "beruehmte-dieter-nuhr"
  },
  {
    date: "2026-07-22",
    text: "Neues Portr\xe4t: Rowan Atkinson (SO7w6) – Schauspieler, Komiker. Mr. Bean, Blackadder, Johnny English. Der Biber mit Sechserfl\xfcgel: Zugeh\xf6rigkeit statt Ausbruch, Perfektion als innere Versicherung.",
    text_en: "New portrait: Rowan Atkinson (SO7w6) – actor, comedian. Mr. Bean, Blackadder, Johnny English. The beaver with Six wing: belonging over escape, perfection as inner insurance.",
    route: "beruehmte-rowan-atkinson"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Mariah Carey (SE7w8) – S\xe4ngerin, 18 Nummer-1-Singles, ›All I Want for Christmas Is You‹. Der Gorilla mit Achterfl\xfcgel: Freude als Recht, \xdcberfluss als Heimat, Macht als Schutzschild.",
    text_en: "New portrait: Mariah Carey (SE7w8) – singer, 18 number-one singles, All I Want for Christmas Is You. The gorilla with Eight wing: joy as a right, abundance as home, power as shield.",
    route: "beruehmte-mariah-carey"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Wallace Shawn (SE7w6) – Schauspieler, B\xfchnenautor, Essayist. Vizzini in „Die Prinzessin Braut“, Rex in „Toy Story“. Der Gorilla, der beim Mittagessen \xfcber Kapitalismus und Tod nachdenkt.",
    text_en: "New portrait: Wallace Shawn (SE7w6) – actor, playwright, essayist. Vizzini in The Princess Bride, Rex in Toy Story. The gorilla who thinks about capitalism and death over lunch.",
    route: "beruehmte-wallace-shawn"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Michael Schumacher (SX6w7) – Formel-1-Legende, siebenmaliger Weltmeister. Der Wolf, der Angst in Geschwindigkeit verwandelt hat.",
    text_en: "New portrait: Michael Schumacher (SX6w7) – Formula 1 legend, seven-time world champion. The wolf who turned fear into speed.",
    route: "beruehmte-michael-schumacher"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Donata Hopfen (SO6w7) – Unternehmensberaterin, Digitalstrategin, Ex-CEO der Bild und der DFL. Das Erdm\xe4nnchen, das vorausl\xe4uft – und der Gruppe den Weg freimacht.",
    text_en: "New portrait: Donata Hopfen (SO6w7) – management consultant, digital strategist, former CEO of Bild and DFL. The meerkat that runs ahead – and clears the path for the group.",
    route: "beruehmte-donata-hopfen"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Melanie Kreis (SO6w5) – CFO der DHL Group. Physikerin, McKinsey-Beraterin, DAX-Managerin. Das Erdm\xe4nnchen, das Wache h\xe4lt f\xfcr einen der gr\xf6\xdften Logistikkonzerne der Welt.",
    text_en: "New portrait: Melanie Kreis (SO6w5) – CFO of DHL Group. Physicist, McKinsey consultant, DAX executive. The meerkat standing guard for one of the world's largest logistics groups.",
    route: "beruehmte-melanie-kreis"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Neil Armstrong (SE6w7) – erster Mensch auf dem Mond, 20. Juli 1969. Das Kaninchen, das den gr\xf6\xdften Schritt tat – und danach nur noch nach Hause wollte.",
    text_en: "New portrait: Neil Armstrong (SE6w7) – first human on the moon, July 20, 1969. The rabbit that took the greatest step – and afterwards only wanted to go home.",
    route: "beruehmte-neil-armstrong"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Sundar Pichai (SE6w5) – CEO von Google und Alphabet. Chrome, Android, Gemini. Das Kaninchen, das in einer Branche voller Egomanen durch Stille gewann.",
    text_en: "New portrait: Sundar Pichai (SE6w5) – CEO of Google and Alphabet. Chrome, Android, Gemini. The rabbit that won through silence in an industry full of egomaniacs.",
    route: "beruehmte-sundar-pichai"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Fr\xe9d\xe9ric Chopin (SX5w4) – Komponist, Pianist. Nocturnes, \xc9tuden, Mazurken. Der Igel, der fast nie auftrat – und dessen Musik zweihundert Jahre sp\xe4ter noch klingt.",
    text_en: "New portrait: Fr\xe9d\xe9ric Chopin (SX5w4) – composer, pianist. Nocturnes, \xe9tudes, mazurkas. The hedgehog who almost never performed – and whose music still resonates two hundred years later.",
    route: "beruehmte-frederic-chopin"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: G\xfcnther Jauch (SO5w6) – Moderator, Journalist, Wer wird Million\xe4r?. Der Oktopus, der Jahrzehnte lang das Wissen der Nation moderiert hat – und dabei selbst nie wirklich sichtbar wurde.",
    text_en: "New portrait: G\xfcnther Jauch (SO5w6) – TV presenter, journalist, Who Wants to Be a Millionaire?. The octopus that moderated the nation’s knowledge for decades – while never truly becoming visible himself.",
    route: "beruehmte-guenther-jauch"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Warren Buffett (SE5w6) – Investor, Orakel von Omaha. F\xfcnfhundert Seiten am Tag, dasselbe Haus seit 1958. Die Eule, die wartet, bis sie wirklich verstanden hat.",
    text_en: "New portrait: Warren Buffett (SE5w6) – investor, Oracle of Omaha. Five hundred pages a day, the same house since 1958. The owl that waits until it truly understands.",
    route: "beruehmte-warren-buffett"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Vera F. Birkenbihl (SE5w6) – Trainerin, Buchautorin, Vordenkerin. \xdcber f\xfcnfzig B\xfccher, Millionen Leser, ein System: gehirngerechtes Lernen. Die Eule, die wusste, wie das Denken denkt.",
    text_en: "New portrait: Vera F. Birkenbihl (SE5w6) – trainer, author, visionary. Over fifty books, millions of readers, one system: brain-compatible learning. The owl that knew how thinking thinks.",
    route: "beruehmte-vera-birkenbihl"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Linda Leinweber (SX4w5) – Psychologin, Autorin, Gr\xfcnderin von Poise. Der Chihuahua, der den eigenen Schmerz zur Pr\xe4zision gemacht hat.",
    text_en: "New portrait: Linda Leinweber (SX4w5) – psychologist, author, founder of Poise. The chihuahua who turned her own pain into precision.",
    route: "beruehmte-linda-leinweber"
  },
  {
    date: "2026-07-21",
    text: "Neues Portr\xe4t: Rihanna (SX4w3) – S\xe4ngerin, Unternehmerin. Umbrella, Diamonds, Fenty Beauty. Der Chihuahua aus Barbados, der die Sch\xf6nheitsindustrie auf den Kopf stellte.",
    text_en: "New portrait: Rihanna (SX4w3) – singer, entrepreneur. Umbrella, Diamonds, Fenty Beauty. The chihuahua from Barbados who turned the beauty industry upside down.",
    route: "beruehmte-rihanna"
  },
  {
    date: "2026-07-21",
    text: "Neues Porträt: Karoline Herfurth (SE4w5) – Schauspielerin, Regisseurin. Die Taube, die beobachtet, bevor sie landet – innere Tiefe und künstlerische Präzision.",
    text_en: "New portrait: Karoline Herfurth (SE4w5) – actress, director. The dove that observes before it lands – inner depth and artistic precision.",
    route: "beruehmte-karoline-herfurth"
  },
  {
    date: "2026-07-21",
    text: "Neues Porträt: Tim Bendzko (SE4w3) – Sänger, Songwriter. Die Taube, die das Gewicht des Lebens trägt – und daraus Musik macht.",
    text_en: "New portrait: Tim Bendzko (SE4w3) – singer, songwriter. The dove that carries the weight of life – and turns it into music.",
    route: "beruehmte-tim-bendzko"
  },
  {
    date: "2026-07-21",
    text: "Neu: Geschlecht-Filter bei Berühmte Persönlichkeiten & Kriminalpsychologie – jetzt nach Männlich / Weiblich filtern.",
    text_en: "New: Gender filter on Famous Personalities & Criminal Psychology – filter by Male / Female.",
    route: "beruehmte-persoenlichkeiten"
  },
  {
    date: "2026-07-21",
    text: "Neues Porträt: Meg Ryan (SX3w4) – Schauspielerin, Regisseurin. Hollywoods Liebling der 1990er – der Pfau, der mehr wollte als seine Rolle.",
    text_en: "New portrait: Meg Ryan (SX3w4) – actress, director. Hollywood's sweetheart of the 1990s – the peacock who wanted more than its role.",
    route: "beruehmte-meg-ryan"
  },
  {
    date: "2026-07-21",
    text: "Neues Porträt: Lena Meyer-Landrut (SX3w2) – Sängerin, ESC-Gewinnerin 2010. Der Pfau, der nicht weiß, wie schön er ist.",
    text_en: "New portrait: Lena Meyer-Landrut (SX3w2) – singer, ESC winner 2010. The peacock who doesn't know how beautiful it is.",
    route: "beruehmte-lena-meyer-landrut"
  },
  {
    date: "2026-07-21",
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
