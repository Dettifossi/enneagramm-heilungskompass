// Situationskompass – Bewusste Impulse für konkrete Lebenssituationen
// Struktur je Eintrag: autopilot | bewusstheit | uebung
export const SITUATIONSKOMPASS = {

  situationen: [
    { id: "erschoepfung",    label: "Erschöpfung & Burnout",       icon: "🔋" },
    { id: "konflikt",        label: "Konflikt & Streit",            icon: "⚡" },
    { id: "einsamkeit",      label: "Einsamkeit & Rückzug",         icon: "🌑" },
    { id: "entscheidung",    label: "Entscheidungsstress",          icon: "⚖️" },
    { id: "beziehungskrise", label: "Beziehungskrise",              icon: "💔" },
    { id: "selbstzweifel",   label: "Selbstzweifel & innere Kritik",icon: "🌫️" },
    { id: "verlust",         label: "Verlust & Trauer",             icon: "🍂" },
    { id: "ueberforderung",  label: "Überforderung & Druck",        icon: "🌊" },
    { id: "stagnation",      label: "Stagnation & innere Leere",    icon: "🪨" },
  ],

  eintraege: {

    "SE1": {
      erschoepfung: {
        autopilot: `Wenn Erschöpfung sich zeigt, antwortet der innere Antreiber mit noch mehr Disziplin. Ausruhen fühlt sich falsch an – fast wie eine moralische Verfehlung. Der innere Kritiker flüstert: "Du hast noch nicht genug getan" – und der Körper gehorcht, lange über seine Grenzen hinaus.`,
        bewusstheit: `Was wäre, wenn der Körper gerade nicht dein Feind ist, sondern dein ehrlichster Zeuge? Erschöpfung kann auch bedeuten: du hast wirklich gegeben – und das darf jetzt einfach so sein.`,
        uebung: `Setz dich für fünf Minuten hin, ohne Absicht. Wenn Gedanken kommen, die dich antreiben – benenne sie leise: "Das ist der Antreiber." Mehr nicht. Beobachte, was passiert, wenn du ihnen nicht folgst.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die innere Überzeugung, im Recht zu sein, zur unüberwindlichen Mauer. Argumente des anderen werden geprüft und für unzureichend befunden. Der Ton wird sachlicher, kühler, schneidender – als ob Präzision überzeugender wäre als Empathie.`,
        bewusstheit: `Ist es möglich, dass der andere auch etwas Richtiges sieht – und du es gerade nicht hören kannst, weil dein innerer Richter schon das Urteil gefällt hat?`,
        uebung: `Höre dem anderen einmal zu Ende, ohne innerlich schon die Gegenposition zu formulieren. Halte inne, bevor du antwortest. Frage dich: Was ist das Berechtigte an dem, was er sagt?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird nicht als Bedürfnis wahrgenommen, sondern als Zeichen, dass man selbst irgendwo versagt hat. Statt Kontakt zu suchen, zieht man sich noch weiter zurück – und arbeitet. Wenn man beschäftigt ist, muss man das Alleinsein nicht fühlen.`,
        bewusstheit: `Was wäre es, jetzt nicht produktiv zu sein – sondern einfach Gesellschaft zu brauchen? Darf ein Mensch wie du Einsamkeit empfinden, ohne dass das ein Fehler ist?`,
        uebung: `Melde dich heute bei jemandem – nicht weil du helfen kannst oder etwas zu berichten hast, sondern weil dir die Verbindung fehlt. Sag das ruhig auch so. Übe, Bedürftigkeit als menschlich zu erleben.`
      },
      entscheidung: {
        autopilot: `Jede Entscheidung wird zum Prüfstand: Welche Option ist wirklich richtig? Die eigene Messlatte liegt hoch, und weil keine Wahl makellos ist, zieht sich der Prozess. Man analysiert, vergleicht, zweifelt – und handelt erst, wenn man sich sicher ist, dass man später nichts bereuen muss.`,
        bewusstheit: `Was wäre, wenn es keine perfekte Entscheidung gibt – nur eine, die du mit dem besten verfügbaren Wissen triffst und dann nach Kräften lebst?`,
        uebung: `Setze dir eine feste Entscheidungsfrist – nicht länger als zwei Tage. Schreibe die zwei realistischsten Optionen auf, wähle eine und schliesse die Überlegung damit bewusst ab. Vollständigkeit ist hier kein Ziel, nur ein Hindernis.`
      },
      beziehungskrise: {
        autopilot: `Die eigene Kritik am anderen wird schärfer – man zieht innerlich Bilanz: Was stimmt hier nicht, wer hat Fehler gemacht? Der Ton wird kühler, präziser, gerechter. Man zieht sich zurück, bis der andere das Problem einsieht und korrigiert.`,
        bewusstheit: `Bist du gerade der Richter dieser Beziehung – oder ihr Teilnehmer? Was bräuchtest du, um wieder ein Gespräch zu werden statt ein Urteil?`,
        uebung: `Nenne dem anderen eine Sache, die du an ihm wirklich schätzt – aufrichtig, ohne Vorbehalt. Dann erst sprich, was dich belastet. Beobachte, wie sich die Atmosphäre verändert.`
      },
      selbstzweifel: {
        autopilot: `Der innere Kritiker meldet sich unaufgefordert: Das war nicht gut genug. Du hättest besser sein sollen. So geht man das nicht an. Der Selbstzweifel nimmt die Form moralischer Selbstanklagen an – und der Massstab liegt immer einen Schritt höher als das Erreichte.`,
        bewusstheit: `Spricht gerade dein innerer Richter – oder du selbst? Und wäre das Urteil dieses Richters wirklich gerecht, wenn er über jemand anderen gefällt würde?`,
        uebung: `Schreibe einen Satz, der mit „Ich habe heute gut gemacht, dass …“ beginnt. Nicht die Leistung – etwas Menschliches. Lass den Satz stehen, ohne ihn zu relativieren.`
      },
      verlust: {
        autopilot: `Verlust wird als Aufgabe begriffen: Man hält sich zusammen, organisiert, funktioniert. Die Trauer gilt als Schwäche oder als Kontrollverlust. Innerlich zieht man sich hinter Pflicht und Tüchtigkeit zurück.`,
        bewusstheit: `Was wäre, wenn Trauer kein Zeichen von Schwäche ist – sondern ein Zeichen, dass etwas wirklich bedeutsam war? Was verlierst du, wenn du die Trauer fernhältst?`,
        uebung: `Setz dich heute mit einem Gegenstand oder einer Erinnerung, die zum Verlust gehört. Lass fünf Minuten zu, was kommt – ohne es zu beurteilen, ohne es zu korrigieren.`
      },
      ueberforderung: {
        autopilot: `Bei Überforderung steigert sich der innere Druck: Mehr Disziplin, mehr Kontrolle, mehr Perfektion. Man versucht, sich durch Anstrengung aus dem Druck herauszuarbeiten – und macht ihn damit größer.`,
        bewusstheit: `Was wäre, wenn du heute nicht mehr leistest – sondern weniger? Was wäre das Mindeste, das wirklich reicht?`,
        uebung: `Schreibe drei Dinge auf, die du heute weglassen oder delegieren kannst. Nicht verschieben – wirklich streichen oder abgeben. Dann tue es.`
      },
      stagnation: {
        autopilot: `Stagnation fühlt sich wie Versagen an: Man ist nicht produktiv genug, macht keine Fortschritte, stagniert. Der innere Richter meldet sich: Du solltest weiter sein. Man treibt sich an statt innezuhalten.`,
        bewusstheit: `Was wäre, wenn diese Stille nicht Stillstand ist – sondern Vorbereitung? Was würde entstehen, wenn du nicht kämpfst, sondern wartest?`,
        uebung: `Gib dem heutigen Tag eine einzige, bescheidene Aufgabe. Nur eine. Wenn sie erledigt ist, darf der Tag genug sein – ohne Nachklapp, ohne Zusatz.`
      },
    },

    "SO1": {
      erschoepfung: {
        autopilot: `Die eigene Erschöpfung wird dem Einsatz für das Richtige geopfert. Solange die Sache wichtig ist, rechtfertigt sie den Preis. Der Körper sendet Signale – das Gewissen aber sagt: "Jetzt ist nicht die Zeit dafür."`,
        bewusstheit: `Für welche Werte kämpfst du gerade – und bist du noch wirklich präsent für sie? Wer leidet darunter, dass du erschöpft bist, aber weitermachst?`,
        uebung: `Schreibe heute eine bewusste Nicht-Liste: Was wirst du heute nicht tun? Beobachte, welcher Widerstand dabei entsteht – und ob dieser Widerstand wirklich von dir kommt oder von einem älteren Bild davon, wer du sein sollst.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird auf Werte und Prinzipien verwiesen – auf das, was gerecht, fair und richtig für alle wäre. Die eigene Position wird weniger als persönliche Meinung formuliert, sondern als objektive Norm. Wer anderer Meinung ist, scheint gegen das Prinzip selbst zu verstossen.`,
        bewusstheit: `Spreche ich gerade für ein Prinzip – oder für mich? Und wäre die Situation anders, wenn ich als Person spreche statt als Hüter einer Norm?`,
        uebung: `Formuliere deinen Standpunkt im Konflikt einmal ohne Berufung auf Regeln oder Werte: „Ich möchte ...” statt „Es wäre richtig, dass ...”. Beobachte, wie sich das anfühlt.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird als Zeichen interpretiert, dass man nicht genug für die Gemeinschaft tut oder nicht gut genug ist. Man engagiert sich mehr, übernimmt mehr Verantwortung – in der Hoffnung, durch Nützlichkeit dazuzugehören.`,
        bewusstheit: `Gehörst du dazu, weil du nützlich bist – oder weil du du bist? Und wer wäre für dich da, wenn du nichts leisten könntest?`,
        uebung: `Suche heute Kontakt zu einer Person – nicht um etwas zu leisten, sondern einfach um da zu sein. Erlaube, dass das reicht.`
      },
      entscheidung: {
        autopilot: `Man sucht nach der Entscheidung, die für alle richtig ist – die gerecht, fair und vor den Werten vertretbar ist. Persönliche Präferenzen werden dabei kaum gehört. Wenn keine Option dem Ideal entspricht, entsteht innere Zerrissenheit.`,
        bewusstheit: `Darf die Entscheidung auch für dich richtig sein – nicht nur für alle anderen? Was würdest du wählen, wenn niemand zuschauen würde?`,
        uebung: `Frage dich vor der Entscheidung: Was will ich eigentlich? Schreibe die Antwort auf, bevor du denkst, was du wählen solltest. Lass den persönlichen Impuls als legitime Stimme im Raum stehen.`
      },
      beziehungskrise: {
        autopilot: `Man kämpft für das Prinzipielle: Was wäre fair, was wäre richtig für beide? Die persönliche Verletzung tritt hinter die Frage nach dem richtigen Verhalten zurück. Man verhandelt Prinzipien statt Gefühle.`,
        bewusstheit: `Was wäre, wenn du gerade nicht für ein Prinzip sprichst – sondern für dich? Wie würde sich das anfühlen, und was würdest du dann sagen?`,
        uebung: `Sprich heute einen Satz, der mit „Ich fühle mich gerade..." beginnt – ohne das sofort in eine Forderung oder ein Prinzip zu verwandeln. Nur das Gefühl, ohne Rahmen.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt daran, ob man genug für die richtige Sache getan hat. War das wirklich prinzipientreu? Hätte man anders handeln müssen? Die innere Stimme bewertet retrospektiv jede Entscheidung gegen ein hoch gesetztes Ideal.`,
        bewusstheit: `Was wäre, wenn du heute genug getan hast – nicht perfekt, aber aufrichtig? Darf das für heute reichen?`,
        uebung: `Schreibe auf, was du heute wirklich getan hast – ohne Bewertung. Dann lies es vor wie eine neutrale Beschreibung: das ist, was war. Nicht mehr, nicht weniger.`
      },
      verlust: {
        autopilot: `Man trägt weiter, auch im Verlust: Was muss noch erledigt werden, was ist meine Pflicht gegenüber anderen? Der eigene Schmerz wird nach hinten geschoben, weil andere gerade mehr zu brauchen scheinen.`,
        bewusstheit: `Wessen Schmerz beachtest du gerade – den der anderen oder deinen eigenen? Darf dein Verlust auch Raum haben?`,
        uebung: `Schreibe heute auf, was du verloren hast – nicht was andere verloren haben, sondern du. Nur du. Dann lies es laut vor, auch wenn es schwer fällt.`
      },
      ueberforderung: {
        autopilot: `Man übernimmt mehr Verantwortung als realistisch ist: für das Richtige einzustehen kostet Kraft, aber aufzuhören fühlt sich wie Versagen an. Man reibt sich auf, weil die Sache es verlangt.`,
        bewusstheit: `Wofür bist du wirklich verantwortlich – und wofür nicht? Gibt es etwas, das du heute ehrlich loslassen kannst?`,
        uebung: `Wähle heute eine Aufgabe oder Verantwortung, die eigentlich nicht dir gehört. Gib sie zurück – ohne Erklärung, ohne Entschuldigung. Nur: Das ist nicht meins.`
      },
      stagnation: {
        autopilot: `Stagnation erzeugt Schuldgefühle: Ich tue nicht genug für die Sache, für andere, für das Richtige. Man versucht, sich durch Pflichterfüllung aus der inneren Leere herauszuarbeiten – was die Leere nicht füllt.`,
        bewusstheit: `Was wäre, wenn das Innehalten selbst gerade das Richtige ist – nicht Flucht, sondern notwendige Pause?`,
        uebung: `Erlaube dir heute, einen Tag zu leben ohne großes Ziel. Beobachte, was in der Stille auftaucht – ohne es sofort in Pflicht zu verwandeln.`
      },
    },

    "SX1": {
      erschoepfung: {
        autopilot: `Wenn die Energie nachlässt, steigt die innere Anforderung. Mehr Perfektion, mehr Einsatz, mehr Intensität – als ob man sich durch Willen aus der Erschöpfung herausarbeiten könnte. Unfertiges wird kaum toleriert.`,
        bewusstheit: `Was wäre es, jetzt gerade unfertig zu sein – und das nicht zu korrigieren? Welches Bild von dir selbst würde dabei ins Wanken geraten?`,
        uebung: `Lass heute bewusst etwas unvollendet. Bleibe einen Moment bei dem Unbehagen, das dabei entsteht. Atme. Beobachte, wie dein inneres System reagiert – ohne einzugreifen.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Intensität größer, nicht kleiner. Der Massstab, den man an sich selbst anlegt, wird jetzt an den anderen angelegt. Kritik kann scharf, direkt und verletzend wirken – ohne dass man es so meint.`,
        bewusstheit: `Was wäre, wenn der andere diesen hohen Massstab gerade nicht erfüllen kann – und das nicht Böswilligkeit ist, sondern einfach menschlich?`,
        uebung: `Halte im nächsten Konfliktmoment inne, bevor du deinen Standpunkt formulierst. Frage dich: Welchen Ton wähle ich gerade – und welchen würde ich wählen, wenn der andere mein bestes Ich erwartete?`
      },
      einsamkeit: {
        autopilot: `Die Einsamkeit wird als persönliches Versagen erlebt – als Zeichen, dass man nicht intensiv genug, nicht vollkommen genug war. Der innere Kritiker schlägt zu: Du hast etwas falsch gemacht, deshalb bist du allein.`,
        bewusstheit: `Ist Einsamkeit wirklich ein Zeichen von Versagen – oder ist sie manchmal einfach ein menschlicher Zustand, der nichts über deinen Wert sagt?`,
        uebung: `Schreibe auf, was du dir von einer Verbindung gerade wirklich wünschst. Dann: Könntest du dir selbst einen Teil davon geben? Einen Moment der eigenen Zugewandtheit.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird zum Qualitätsproblem: Keine Option ist gut genug. Mit intensiver Genauigkeit werden Schwächen analysiert, Alternativen durchgespielt. Je größer die Entscheidung, desto unbarmherziger der innere Richter.`,
        bewusstheit: `Gibt es eine Option, die gut genug ist – nicht perfekt, aber aufrichtig? Was würde passieren, wenn du dir erlaubst, mit dieser Unsicherheit zu leben?`,
        uebung: `Benenne laut, was du wirklich willst – nicht die fehlerfreieste Option, sondern die, die sich am lebendigsten anfühlt. Dann entscheide dich dafür und verpflichte dich, die Entscheidung nicht rückgängig zu machen.`
      },
      beziehungskrise: {
        autopilot: `Die Anforderungen an den anderen steigen: Warum ist er nicht besser, wahrhaftiger, konsequenter? Die Intensität des eigenen Ideals wird zum Maßstab, an dem die Beziehung scheitert. Innerlich wächst der Schmerz, äußerlich die Kälte.`,
        bewusstheit: `Fordert dein innerer Richter gerade mehr, als ein Mensch leisten kann? Was wäre, wenn du den anderen so nimmst, wie er ist – heute, in diesem Moment?`,
        uebung: `Sage dem anderen einen Satz ohne Forderung und ohne Bewertung: „Ich wünsche mir, dass wir ..." und fülle ihn mit etwas Einfachem, Erreichbarem. Nicht dem Ideal – dem Möglichen.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel kommt als innere Erschütterung: Bin ich wirklich so, wie ich sein sollte? War das echt? Hätte ich tiefer, konsequenter, wahrhaftiger sein sollen? Die Intensität des Zweifels kann sich gegen einen selbst richten.`,
        bewusstheit: `Was wäre, wenn du gerade gut genug bist – nicht perfekt, aber wirklich? Und was wäre, wenn der Zweifel selbst ein Zeichen ist, dass du dir etwas bedeutest?`,
        uebung: `Schreib einen Brief an dich selbst – ohne Kritik, ohne Forderung. Nur: Was ich an mir schätze, auch wenn es mir schwer fällt. Lies ihn laut vor.`
      },
      verlust: {
        autopilot: `Verlust löst intensive Reaktionen aus: Schuldgefühle (Hätte ich mehr tun können?), Zorn auf sich selbst oder die Situation, die Suche nach dem Fehler. Der Schmerz wird in Selbstkritik umgewandelt statt getrauert.`,
        bewusstheit: `Was wäre, wenn dieser Verlust kein Fehler war – weder deiner noch ein anderer? Darf Trauer einfach Trauer sein, ohne Schuldige?`,
        uebung: `Schreibe heute einen Abschiedsbrief an das, was du verloren hast. Kein Urteil, keine Erklärung. Nur: Was warst du mir, und was nehme ich mit.`
      },
            ueberforderung: {
        autopilot: `Die Intensität des Drucks wird zur Herausforderung: Man kämpft dagegen an, hält höhere Maßstäbe, weigert sich, die Anforderungen zu reduzieren. Der Perfektionismus wird bei Überforderung nicht kleiner, sondern schärfer.`,
        bewusstheit: `Was wäre, wenn gut genug in dieser Situation wirklich gut genug ist? Welchen Preis zahlst du für das Ideal?`,
        uebung: `Erledige heute eine Aufgabe bewusst auf 80 % – nicht schlechter als nötig, aber ohne die letzten 20 % Perfektion. Beobachte, was das auslöst.`
      },
      stagnation: {
        autopilot: `Stagnation trifft als Intensitätsverlust: Wenn das Feuer fehlt, wenn nichts mehr wirklich zählt, wird das als persönliches Versagen erlebt. Man sucht nach dem Fehler in sich selbst.`,
        bewusstheit: `Was wäre, wenn das Feuer gerade Pause macht – und nicht erloschen ist? Muss jede Phase intensiv sein?`,
        uebung: `Sitz heute still – ohne Aufgabe, ohne Ziel, ohne Bewertung. Zehn Minuten. Lass die Stille einfach da sein. Beobachte, was sich darunter regt.`
      },
    },

    "SE2": {
      erschoepfung: {
        autopilot: `Die eigene Erschöpfung wird verborgen, weil Bedürftigkeit die Verbindung zu anderen gefährden könnte. Nach außen hin bleibt man freundlich, hilfsbereit, zugewandt – bis der Körper nicht mehr mitspielen will.`,
        bewusstheit: `Was brauchst du gerade wirklich – nicht was du geben könntest, sondern was du selbst brauchst? Und wann hast du dir das zuletzt wirklich gefragt?`,
        uebung: `Formuliere einen einzigen Satz, der mit "Ich brauche gerade..." beginnt. Sprich ihn laut aus – auch wenn niemand zuhört. Beobachte, wie er sich in deinem Körper anfühlt.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die eigene Verletzung eher gezeigt als der eigentliche Bedarf benannt. Man zieht sich zurück, wird still oder sendet indirekte Signale – in der Hoffnung, der andere möge von selbst verstehen, was falsch gelaufen ist.`,
        bewusstheit: `Was brauchst du wirklich in diesem Konflikt – und hast du es klar und direkt gesagt, oder hoffst du, dass man es errät?`,
        uebung: `Formuliere einmal direkt, was du brauchst oder was dich verletzt hat – in einem einzigen klaren Satz, ohne Umwege. Beobachte, ob das schwerer ist als das Schweigen.`
      },
      einsamkeit: {
        autopilot: `Wenn Einsamkeit entsteht, wird sofort Fürsorge mobilisiert: Wem kann ich jetzt helfen? Durch das Geben wird Verbindung hergestellt. Aber unter dem Helfen bleibt das Alleinsein unberührt.`,
        bewusstheit: `Hilfst du gerade, weil du magst – oder weil du die Einsamkeit nicht aushalten willst? Was wäre, wenn du heute einfach empfangen dürftest?`,
        uebung: `Ruf jemanden an – nicht um zu helfen, sondern um zu sagen: Ich vermisse dich. Beobachte, wie sich das anfühlt, die Bedürftigkeit direkt auszusprechen.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung dreht sich darum, was die andere Person braucht oder erwartet. Die eigene Stimme tritt zurück. Man wählt die Option, die am meisten Zuneigung sichert – ohne sich zu fragen, was man selbst will.`,
        bewusstheit: `Für wen triffst du gerade diese Entscheidung wirklich? Und was würdest du wählen, wenn dir niemand dabei zuschauen würde?`,
        uebung: `Schreibe auf, was du wählen würdest, wenn alle anderen schon zufrieden wären. Diese Antwort ist deine eigene. Lasse sie einen Moment stehen, bevor du sie verwirfst.`
      },
      beziehungskrise: {
        autopilot: `Man gibt noch mehr – Aufmerksamkeit, Fürsorge, Zeit – in der Hoffnung, die Krise durch Geben zu überbrücken. Wenn das nicht wirkt, wächst die Verletzung still. Man zieht sich zurück, wartet auf Anerkennung, die nicht kommt.`,
        bewusstheit: `Was brauchst du gerade in dieser Beziehung – wirklich du, nicht der andere? Und hast du das klar ausgesprochen?`,
        uebung: `Sage dem anderen direkt, was du brauchst – nicht was du geben willst, nicht was du erwartest. Ein einziger klarer Satz: „Ich brauche gerade ..." Beobachte, was das auslöst.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel dreht sich um Liebenswürdigkeit: Bin ich wirklich gut genug – als Person, nicht als Helferin? Wenn der andere sich zurückzieht oder nicht dankt, bestätigt das einen alten Verdacht: Ich bin nur dann etwas wert, wenn ich gebe.`,
        bewusstheit: `Was wäre, wenn du auch dann liebenswert wärst, wenn du gerade nichts gibst – nichts tust, nichts leistest? Gibt es jemanden, der dich so sieht?`,
        uebung: `Lass heute jemanden etwas für dich tun – ohne es zu erwidern, ohne dich sofort zu bedanken. Beobachte, ob du das aushalten kannst, und was dabei in dir vorgeht.`
      },
      verlust: {
        autopilot: `Verlust wird durch Helfen bewältigt: Man sorgt für andere, die trauern – und merkt kaum, dass man selbst trauert. Der Schmerz tritt hinter die Fürsorge zurück, bis er sich irgendwann in Erschöpfung oder Bitterkeit meldet.`,
        bewusstheit: `Wer trauert für dich – und lässt du das zu? Gibt es jemanden, bei dem du heute deinen eigenen Schmerz ablegen darfst?`,
        uebung: `Bitte heute jemanden, einfach nur bei dir zu sein – ohne Ratschlag, ohne Ablenkung. Nur Gesellschaft im Schmerz. Lass das geschehen.`
      },
      ueberforderung: {
        autopilot: `Überforderung kommt, weil man zu vielen Menschen Ja gesagt hat. Statt zu begrenzen, gibt man noch mehr – in der Hoffnung, dass die anderen es dann gut finden. Die Erschöpfung wächst still unter der Fürsorge.`,
        bewusstheit: `Wie viele Neins hättest du heute sagen können – und hast es nicht getan? Was hindert dich daran?`,
        uebung: `Sag heute einmal Nein – zu einer konkreten Bitte, die dir zu viel ist. Kurz und freundlich: „Das schaffe ich gerade nicht." Beobachte, was passiert.`
      },
                  stagnation: {
        autopilot: `Stagnation trifft als Intensitätsverlust: Wenn das Feuer fehlt, wenn nichts mehr wirklich zählt, wird das als persönliches Versagen erlebt. Man sucht nach dem Fehler in sich selbst.`,
        bewusstheit: `Was wäre, wenn das Feuer gerade Pause macht – und nicht erloschen ist? Muss jede Phase intensiv sein?`,
        uebung: `Sitz heute still – ohne Aufgabe, ohne Ziel, ohne Bewertung. Zehn Minuten. Lass die Stille einfach da sein. Beobachte, was sich darunter regt.`
      },
    },

    "SO2": {
      erschoepfung: {
        autopilot: `Weitermachen, weil man gebraucht wird. Die Erschöpfung gilt als Zeichen der eigenen Wichtigkeit – wer so müde ist, muss wirklich viel getragen haben. Innehalten würde bedeuten, nicht mehr unverzichtbar zu sein.`,
        bewusstheit: `Wer wärst du in diesem Moment, wenn niemand deine Hilfe bräuchte? Was bliebe von dir übrig, wenn alle Verbindungen gerade pausieren?`,
        uebung: `Verbring eine Stunde ohne Kontakt nach außen – keine Nachrichten, keine Anfragen, keine Erkundigungen. Beobachte, welche Gefühle auftauchen, und wie dein inneres System auf diese ungewohnte Stille reagiert.`
      },
      konflikt: {
        autopilot: `Im Konflikt taucht leise die Bilanz auf: Was ich für dich getan habe. Nicht immer ausgesprochen, aber spürbar. Die Erwartung, dass der andere das anerkennt, steht unsichtbar im Raum.`,
        bewusstheit: `Erwartest du gerade Dankbarkeit – und vermischst du das mit dem eigentlichen Konfliktthema? Was wäre der Kern des Streits, wenn die Bilanz nicht zählen würde?`,
        uebung: `Lass in diesem Konflikt die Vergangenheit aus dem Gespräch. Bleibe beim Jetzt: Was ist das eigentliche Thema – heute, in diesem Moment?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird zum Anlass, noch mehr zu geben, noch sichtbarer zu werden – in Gruppen, Kreisen, Netzwerken. Wenn man überall gebraucht wird, kann man nicht wirklich allein sein. Aber das Alleinsein bleibt, tief darunter.`,
        bewusstheit: `Wie viele dieser Verbindungen kennen wirklich dich – und nicht nur das, was du für sie tust? Mit wem bist du einfach du?`,
        uebung: `Schreibe heute einer einzigen Person, der du dich wirklich nah fühlst, eine persönliche Nachricht – nicht als Organisatorin, nicht als Helferin. Einfach als du.`
      },
      entscheidung: {
        autopilot: `Man sucht den Konsens – wählt, was die Gruppe gut fände, was zur Rolle passt, was die wichtigsten Beziehungen intakt hält. Die eigene Meinung wird dabei so gründlich zurückgestellt, dass man selbst nicht mehr sicher ist, was man eigentlich will.`,
        bewusstheit: `Was würde die Gruppe entscheiden – und was würdest du entscheiden? Kennst du den Unterschied gerade noch?`,
        uebung: `Triff diese Entscheidung zuerst alleine und in Stille. Schreibe auf, was herauskommt, bevor du mit jemand anderem sprichst. Dann vergleiche.`
      },
      beziehungskrise: {
        autopilot: `Man versucht, die Krise durch Beratung, Hilfe und Fürsorglichkeit zu überbrücken – für alle anderen. Die eigene Verletzung bleibt unausgesprochen. Man weiß genau, was der andere braucht, und weiß kaum, was man selbst braucht.`,
        bewusstheit: `Löst du die Beziehungskrise durch Helfen – oder durch echtes Dabeisein? Was wäre, wenn du gerade nichts tun würdest und nur da wärst?`,
        uebung: `Halte in dieser Krise inne und frage den anderen: „Wie geht es dir wirklich?" Dann höre zu – ohne Rat, ohne Lösung, ohne Angebot. Nur zuhören.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt daran, ob man wirklich wichtig ist – nicht nur nützlich. Wenn niemand fragt, wie es einem geht, bestätigt das die innere Befürchtung: Ohne Geben wäre ich unsichtbar.`,
        bewusstheit: `Wer kennt dich – nicht was du tust, sondern wer du bist? Und hast du jemandem in letzter Zeit wirklich erlaubt, dich zu sehen?`,
        uebung: `Ruf heute jemanden an und sag: „Ich brauche ein Gespräch – nicht um zu helfen, sondern weil ich gehört werden möchte." Beobachte, wie sich das anfühlt.`
      },
      verlust: {
        autopilot: `Man trägt die Trauer anderer mit – und vergisst dabei die eigene. Die Gemeinschaft gibt Halt, aber man selbst steht am Rand: immer verfügbar, selten sichtbar im eigenen Schmerz.`,
        bewusstheit: `Was trägst du gerade – für dich oder für die Gruppe? Gibt es einen Ort, an dem du deinen eigenen Verlust zeigen darfst?`,
        uebung: `Suche heute einen Moment der Stille, nur für dich und deinen Verlust. Kein Gespräch, keine Aufgabe. Nur du und das, was du wirklich verloren hast.`
      },
      ueberforderung: {
        autopilot: `Man ist für alle da und vergisst sich selbst. Die Gruppe braucht Unterstützung, also gibt man sie – auch wenn man selbst leer ist. Der eigene Akku wird nicht aufgeladen, weil das egoistisch wirken würde.`,
        bewusstheit: `Was brauchst du gerade – wirklich du, nicht die Gruppe? Und hast du dir das heute schon gegönnt?`,
        uebung: `Reserviere heute eine Stunde nur für dich – keine Aufgaben, keine anderen Menschen. Tu etwas, das dich auffüllt. Beobachte, ob du das zulassen kannst.`
      },
      stagnation: {
        autopilot: `Ohne Gemeinschaft und Bestätigung fühlt sich das Leben leer an. Man sucht neue Aufgaben, neue Menschen, neue Gruppen – um die Leere zu füllen statt ihr zu begegnen.`,
        bewusstheit: `Was bleibt, wenn keine Gruppe dich braucht? Gibt es etwas in dir, das auch ohne Bestätigung von Wert ist?`,
        uebung: `Verbringe heute einen Abend allein – ohne soziale Medien, ohne Verabredung. Beobachte, was in der Stille auftaucht. Was brauchst du wirklich?`
      },
    },

    "SX2": {
      erschoepfung: {
        autopilot: `Die Erschöpfung entsteht durch intensives Geben in der Verbindung – und wenn die Verbindung nicht das zurückgibt, was erhofft wird, wird noch mehr investiert. Die Intensität steigt, während die Energie sinkt.`,
        bewusstheit: `Was würde passieren, wenn du gerade nichts von dir gibst – wenn du einfach empfängst? Kannst du das zulassen, ohne es sofort erwidern zu wollen?`,
        uebung: `Lass dich heute von jemandem etwas geben – eine Geste, ein Wort, ein Angebot. Nimm es an, ohne sofort zu erwidern. Bleib einen Moment in dem Gefühl des reinen Empfangens.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die emotionale Intensität hochgefahren. Die Frage dahinter: Liebst du mich wirklich? Siehst du mich? Vorwürfe können leidenschaftlich und direkt sein – und manchmal den anderen überfordern.`,
        bewusstheit: `Was willst du mit dieser Intensität gerade eigentlich sagen? Und wäre es möglich, das direkt und einfach auszusprechen – ohne dramatischen Rahmen?`,
        uebung: `Sprich einmal in ruhigem Ton aus, was du dir wünschst – nicht was der andere falsch gemacht hat. Beobachte, ob Ruhe etwas verändert.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird als Mangel an Verschmelzung empfunden – als ob die Verbindung nicht intensiv genug ist oder der andere nicht wirklich da ist. Der Impuls: Noch intensiver werden, noch tiefer gehen, noch mehr fordern.`,
        bewusstheit: `Ist die Einsamkeit ein Zeichen, dass die Verbindung fehlt – oder ist sie auch ein Signal, dass du gerade dir selbst fremd bist?`,
        uebung: `Sitz heute eine Weile allein – bewusst, als Wahl. Frage dich: Wer bin ich, wenn niemand mich spiegelt? Was ist von mir übrig, wenn die Verbindung gerade pausiert?`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird auf den wichtigsten Menschen hin ausgerichtet: Was würde er wählen? Was bringt uns einander näher? Die eigene Stimme verstummt unter dem Gewicht der Verbindung.`,
        bewusstheit: `Welchen Teil dieser Entscheidung triffst du für dich – und welchen Teil triffst du für die Beziehung? Und bist du dir sicher, dass der andere das auch so will?`,
        uebung: `Triff die Entscheidung für dich allein – dann teile sie dem anderen mit. Nicht als Frage, sondern als Information. Beobachte, wie sich das anfühlt.`
      },
      beziehungskrise: {
        autopilot: `Die Intensität steigt: Man fordert mehr Ehrlichkeit, mehr Nähe, mehr wirkliche Verbindung. Wenn der andere das nicht geben kann oder will, kommt der Rückzug – tief, verletzend, lang. Darunter liegt die Frage: Werde ich wirklich geliebt?`,
        bewusstheit: `Was wäre, wenn der andere gerade gibt, was er geben kann – und das kein Zeichen von Gleichgültigkeit ist, sondern von Grenze? Kannst du das von hier aus sehen?`,
        uebung: `Frage den anderen: „Was kannst du mir in dieser Krise wirklich geben?" Nicht was du willst – was er kann. Dann höre die Antwort, ohne sie zu werten.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf die Kernfrage: Bin ich für diese Person wirklich begehrenswert? Wenn er nicht antwortet, nicht fragt, nicht zeigt – dann stimmt etwas mit mir nicht. Die innere Kritik wird zur Selbstzerstörung.`,
        bewusstheit: `Ist der Rückzug des anderen ein Zeichen über deinen Wert – oder ein Zeichen über seinen Zustand? Kannst du beides voneinander trennen?`,
        uebung: `Schreibe auf, was an dir liebenswert ist – nicht was du dem anderen gibst, sondern was du für dich selbst bist. Lies es, wenn der Zweifel am lautesten ist.`
      },
      verlust: {
        autopilot: `Der Verlust trifft am tiefsten, wenn er eine zentrale Beziehung betrifft. Der Schmerz wird in Hingabe umgewandelt: Man sucht Nähe, gibt sich vollständig – oder zieht sich ins Gegenteil zurück, als Schutz vor weiterer Verletzung.`,
        bewusstheit: `Was brauchst du gerade wirklich – Nähe oder Raum? Und kannst du das, was du brauchst, klar aussprechen?`,
        uebung: `Schreibe heute einen Brief an den Menschen oder das, was du verloren hast. Sag alles, was du nie sagen konntest. Kein Publikum, keine Erwartung – nur Wahrheit.`
      },
      ueberforderung: {
        autopilot: `Überforderung entsteht durch die Intensität des Gebens in der wichtigsten Beziehung: Man gibt alles, erwartet alles – und wenn das Gleichgewicht kippt, erschöpft man sich durch Nachgeben oder durch Rückzug.`,
        bewusstheit: `Was gibst du gerade, das du selbst gar nicht hast? Und was würde es bedeuten, hier Grenzen zu ziehen?`,
        uebung: `Sag dem wichtigsten Menschen heute konkret, was du gerade brauchst – nicht was du geben kannst. Nur das: „Ich brauche gerade …" Und lass ihn antworten.`
      },
      stagnation: {
        autopilot: `Ohne intensive Verbindung fühlt sich das Leben flach und bedeutungslos an. Man sucht die nächste Begegnung, die nächste tiefe Verbindung – als Gegenmittel zur Leere.`,
        bewusstheit: `Was wäre, wenn die Leere gerade ein Atemraum ist – kein Zeichen, dass etwas falsch ist? Darf Stille auch Stille sein?`,
        uebung: `Sitz heute still mit dir selbst. Zwanzig Minuten, ohne Kontakt nach außen. Frage dich: Was will ich wirklich – jenseits der nächsten Verbindung?`
      },
    },

    "SE3": {
      erschoepfung: {
        autopilot: `Der Griff zur nächsten Aufgabe kommt automatisch. Erschöpfung wird als Effizienzproblem behandelt, nicht als Ruhebedürfnis. Die Lösung: besser organisieren, schneller werden, die Aufgaben umstrukturieren.`,
        bewusstheit: `Was passiert mit dir – dem Menschen hinter den Aufgaben – wenn die Aufgaben pausieren? Wer bist du, wenn du gerade nicht leistest?`,
        uebung: `Sitz für eine kurze Zeit ohne Bildschirm, ohne Aufgabe. Beobachte, wie schnell dein Geist zur nächsten Aufgabe wandert – und was darunter liegt, wenn er es nicht tut.`
      },
      konflikt: {
        autopilot: `Im Konflikt liegt der Impuls, ihn schnell zu lösen oder zu übergehen. Emotionen bremsen die Effizienz – also werden sie eher beiseitegelegt. Der Konflikt soll enden, damit man wieder vorankommen kann.`,
        bewusstheit: `Was wird gerade übergangen, weil es die Lösung verlangsamen würde? Und wäre es nicht effizienter, den eigentlichen Kern anzusprechen?`,
        uebung: `Erlaube dir, einen Moment länger im Konflikt zu bleiben, als du es gewohnt bist. Frage dich: Was ist noch nicht gesagt, was wichtig wäre?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum wahrgenommen, weil man beschäftigt ist. Wenn sie sich meldet, ist die Antwort: mehr Termine, mehr Projekte, mehr Kontakte. Verbindung als Effizienzproblem – optimieren statt fühlen.`,
        bewusstheit: `Wann hast du zuletzt echten Kontakt gespürt – nicht Networking, nicht Koordination, sondern wirkliche Verbindung? Wie lange ist das her?`,
        uebung: `Verabrede dich mit jemandem – ohne Agenda. Kein Ziel, kein Ergebnis. Nur Zeit miteinander. Beobachte, wie sich das anfühlt.`
      },
      entscheidung: {
        autopilot: `Man wählt die Option, die am besten aussieht und am schnellsten zum Ziel führt. Entscheidungen werden getroffen, um voranzukommen – nicht um inne zu halten. Zweifel werden übersprungen, weil sie die Energie bremsen.`,
        bewusstheit: `Triffst du diese Entscheidung, weil sie richtig ist – oder weil du wieder in Bewegung kommen willst? Gibt es etwas, das du übersiehst, weil du nicht innehalten möchtest?`,
        uebung: `Halte die Entscheidung für 24 Stunden an. Frage dich am nächsten Morgen nochmals: Ist das immer noch die richtige Wahl? Wenn ja – dann handle.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird als Problem behandelt, das effizient gelöst werden muss. Man analysiert, schlägt Lösungen vor, möchte weiterkommen. Die eigentliche emotionale Dimension – was der andere wirklich fühlt, was man selbst fühlt – wird übersprungen.`,
        bewusstheit: `Was wird gerade gelöst – das Problem oder die Beziehung? Und weiß der andere, dass du wirklich da bist – nicht nur funktional?`,
        uebung: `Lege die Lösungen für einen Moment beiseite. Frage nur: „Wie geht es dir wirklich?" Und dann: warte, bis die echte Antwort kommt.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel tarnt sich als Leistungsproblem: Ich habe nicht gut genug abgeschnitten, war nicht effizient genug, habe mich schlecht präsentiert. Die tiefere Frage – Bin ich genug? – bleibt unausgesprochen unter den Aufgaben.`,
        bewusstheit: `Was wäre, wenn du gerade nichts leisten würdest – was bliebe von dir übrig? Und wäre das genug?`,
        uebung: `Sitz heute fünf Minuten ohne Aufgabe. Wenn der Selbstzweifel kommt, benenne ihn: „Das ist der Leistungszweifel." Dann frage: Was bin ich, wenn er recht hat – und was bin ich, wenn er unrecht hat?`
      },
      verlust: {
        autopilot: `Verlust wird durch Aktivität überbrückt: Das nächste Projekt, die nächste Aufgabe, das nächste Ziel. Der Schmerz gilt als Hindernis für Produktivität. Irgendwann bricht er an unerwarteter Stelle durch.`,
        bewusstheit: `Was wäre, wenn du heute nichts leistest – nur trauerst? Was würde das über dich aussagen, und ist das wirklich wahr?`,
        uebung: `Nimm dir heute eine Stunde ohne Aufgabe. Wenn der Schmerz kommt, lass ihn. Wenn er nicht kommt, sitz trotzdem in der Stille. Beides ist erlaubt.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird ignoriert oder als Anreiz benutzt: Mehr Effizienz, bessere Systeme, schnellere Prozesse. Man optimiert sich durch den Druck, statt innezuhalten. Irgendwann streikt der Körper.`,
        bewusstheit: `Was wäre, wenn Innehalten heute das Produktivste wäre, was du tun kannst? Was kostet dich das Weitermachen wirklich?`,
        uebung: `Lege heute eine bewusste Pause ein – kein Arbeiten, kein Optimieren, keine Planung. Zwanzig Minuten. Sitz. Beobachte, wie lange es dauert, bis du unruhig wirst.`
      },
      stagnation: {
        autopilot: `Ohne Aufgaben und Erfolge droht Identitätsverlust: Wer bin ich, wenn ich gerade nichts leiste? Die Stagnation wird mit neuen Projekten bekämpft statt ausgehalten.`,
        bewusstheit: `Wer bist du, wenn du gerade nichts erreichst? Gibt es etwas an dir, das unabhängig von Leistung besteht?`,
        uebung: `Schreibe heute auf: Wer bin ich – ohne meine Leistungen, ohne meine Erfolge, ohne meine Ziele? Lass die Antwort kommen, auch wenn sie zunächst leer wirkt.`
      },
    },

    "SO3": {
      erschoepfung: {
        autopilot: `Das Image muss aufrechterhalten werden – auch wenn die Energie fehlt. Nach außen hin läuft alles. Erschöpfung zeigt sich nicht, weil sie das Bild beschädigen würde. Man performt weiter, bis man wirklich nicht mehr kann.`,
        bewusstheit: `Welches Bild von dir hältst du gerade aufrecht – und für wen? Wer würde dich noch sehen, wenn dieses Bild einen Moment fiele?`,
        uebung: `Gestehe dir gegenüber ehrlich ein, wie es dir wirklich geht. Kein Rahmen, kein Publikum. Nur du und dein tatsächlicher Zustand – benenne ihn, ohne ihn sofort zu korrigieren.`
      },
      konflikt: {
        autopilot: `Im Konflikt rückt schnell die Frage in den Vordergrund: Wie wirke ich dabei? Die Verteidigung des eigenen Bildes kann wichtiger werden als die Lösung des eigentlichen Problems.`,
        bewusstheit: `Verteidigst du dich gerade – oder verteidigst du dein Bild? Was wäre, wenn du den Unterschied klar hättest?`,
        uebung: `Frage dich im Konflikt: Was würde ich sagen, wenn es keine Zuschauer gäbe? Sprich dann aus diesem Ort heraus.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit ist schwer zu ertragen, weil man das Gefühl hat, ohne Publikum zu verschwinden. Der Impuls: sichtbarer werden, mehr leisten, das Bild aufpolieren – solange die anderen einen sehen, ist man vorhanden.`,
        bewusstheit: `Bist du auch ohne Publikum jemand? Was bleibt von dir, wenn niemand zuschaut?`,
        uebung: `Verbringe heute Zeit mit dir – ohne Spiegel, ohne Auftritt. Schreibe auf, wer du bist, wenn niemand zuschaut. Nicht deine Errungenschaften – du.`
      },
      entscheidung: {
        autopilot: `Man entscheidet nach Außenwirkung: Was kommt gut an? Was stärkt das Bild? Die innere Frage ist weniger Was ist richtig? und mehr Was wirkt gut? – was die Entscheidung manchmal in eine Richtung zieht, die von innen nicht wirklich stimmt.`,
        bewusstheit: `Was würdest du wählen, wenn es niemand sehen würde – kein Image, keine Reaktion der anderen, kein Applaus? Kennst du diese Antwort?`,
        uebung: `Schreibe die Entscheidung auf, die du vor dir selbst als richtig erkennst – auch wenn sie nicht beeindruckend wirkt. Dann überlege, ob du den Mut hast, sie trotzdem zu treffen.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird nach außen unsichtbar gehalten – das Bild der Beziehung muss stimmen. Intern arbeitet man an einer Lösung, die das Image rettet. Was der andere wirklich fühlt, tritt hinter die Frage zurück: Wie stehen wir da?`,
        bewusstheit: `Trägst du gerade die Krise dieser Beziehung – oder trägst du das Bild der Beziehung? Und weißt du, was der andere wirklich braucht?`,
        uebung: `Führe heute ein Gespräch, das nichts löst und nichts optimiert – nur ehrlich fragt: Wie geht es uns wirklich? Ohne Reparaturimpuls. Nur wahrnehmen.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel dreht sich ums Bild: Komme ich wirklich gut an? Sehen sie mich richtig? Der innere Kritiker vergleicht das eigene Image mit dem der anderen und findet immer eine Lücke.`,
        bewusstheit: `Was wäre, wenn du gerade nicht das Bild verteidigst, sondern einfach da bist? Würde irgendjemand, der dir wirklich nahe ist, dich dann weniger schätzen?`,
        uebung: `Sag heute jemandem, dem du vertraust, ehrlich, wie es dir geht – ohne Image, ohne Optimierung. Nur die Wahrheit. Beobachte, was das in dir bewegt.`
      },
      verlust: {
        autopilot: `Man zeigt sich stark, auch in der Trauer: Das Bild des Funktionierens bleibt aufrecht. Innerlich läuft der Schmerz weiter – aber er hat keinen Auftritt, weil er das Bild stört.`,
        bewusstheit: `Was würden die wichtigsten Menschen in deinem Leben sagen, wenn du heute Schwäche zeigen würdest? Und wäre das wirklich so schlimm?`,
        uebung: `Sag heute einem Menschen, dem du vertraust, wie es dir wirklich geht – ohne das Bild zu schützen. Nur die Wahrheit über deinen Schmerz.`
      },
      ueberforderung: {
        autopilot: `Man zeigt nach außen Kompetenz und Kontrolle, auch wenn innen alles zu viel wird. Das Bild des Funktionierens bleibt aufrecht – bis der Zusammenbruch unvermeidlich kommt.`,
        bewusstheit: `Was würde passieren, wenn du heute jemandem sagst, dass es zu viel ist? Würde das wirklich das Bild zerstören – oder nur ehrlich machen?`,
        uebung: `Sag heute einem Menschen, dem du vertraust: „Es ist gerade zu viel." Nur das. Kein Plan, keine Lösung. Beobachte, was sich danach verändert.`
      },
      stagnation: {
        autopilot: `Stagnation bedroht das Bild: Man wirkt nicht mehr dynamisch, vorwärtsgewandt, erfolgreich. Man versucht, den Stillstand nach außen zu verbergen – und erschöpft sich dabei.`,
        bewusstheit: `Was wäre, wenn du heute jemandem sagst, dass du gerade festhängst? Würde das wirklich das Bild zerstören?`,
        uebung: `Gesteh heute einem Menschen, dem du vertraust: „Ich weiß gerade nicht, wohin." Nur das. Kein Plan, keine Lösung. Beobachte, was dann passiert.`
      },
    },

    "SX3": {
      erschoepfung: {
        autopilot: `Die Erschöpfung wird überspielt durch Intensität und Charisma – besonders gegenüber dem Menschen, der einem wichtig ist. Man gibt das Bild des Starken, des Unverzichtbaren. Loslassen fühlt sich wie Verlieren an.`,
        bewusstheit: `Was würde dein wichtigster Mensch sehen, wenn du dich gerade nicht verstellst? Und wäre das so schlimm?`,
        uebung: `Teile mit jemandem, dem du nahe bist, ehrlich mit, wie erschöpft du bist – nicht als Schwäche verkleidet, sondern als Tatsache. Beobachte, was das in dir und in der Verbindung bewegt.`
      },
      konflikt: {
        autopilot: `Im Konflikt entsteht ein Gewinnimpuls. Es geht nicht mehr nur um das Thema – sondern darum, die bessere Position zu halten. Argumente werden eingesetzt wie Werkzeuge, um den anderen zu überzeugen oder zu übertrumpfen.`,
        bewusstheit: `Willst du gerade Recht behalten – oder willst du verstanden werden? Das ist nicht dasselbe.`,
        uebung: `Lass in diesem Konflikt einmal die stärkste Position des anderen gelten. Sage laut: „Da hast du recht.” Beobachte, was das in dir auslöst.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bestätigt ein tiefes inneres Bild: Ich bin letztlich nicht begehrenswert. Der Impuls: noch charismatischer werden, noch attraktiver, noch faszinierender – solange der andere begehrt, ist man nicht allein.`,
        bewusstheit: `Was wäre, wenn jemand dich in diesem Moment mögen würde – einfach so, ohne Fassade? Könntest du das glauben?`,
        uebung: `Schreib heute auf, was du an dir selbst magst – nicht was du kannst, nicht was du leistest. Was ist liebenswert an dir, auch im Alleinsein?`
      },
      entscheidung: {
        autopilot: `Man entscheidet auf den wichtigsten Menschen hin: Was beeindruckt ihn? Was macht mich in seinen Augen attraktiver, wertvoller, unverzichtbarer? Die eigene Stimme wird dabei kaum gehört.`,
        bewusstheit: `Entscheidest du gerade für dich – oder für das Bild, das du beim anderen erzeugen willst? Was wäre deine Wahl, wenn niemand sie bewertet?`,
        uebung: `Schreibe auf, was du wählen würdest, wenn diese Person die Entscheidung nie erfahren würde. Diese Antwort ist näher an dir selbst.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird zur Probe: Steht er wirklich zu mir? Hält die Verbindung, wenn es schwierig wird? Man fordert Nähe, Klarheit, Bekenntnis – und wenn der andere nicht liefert, zieht man sich zurück oder eskaliert.`,
        bewusstheit: `Was wäre, wenn der andere in dieser Krise einfach überfordert ist – und das kein Zeichen ist, dass er dich nicht liebt?`,
        uebung: `Frage den anderen heute konkret: „Was brauchst du gerade von mir – in einem Satz?" Dann höre zu, ohne zu werten.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf Attraktivität und Wirkung beim wichtigsten Menschen: Bin ich wirklich fesselnd genug für ihn? Verblasst meine Anziehung? Der innere Kritiker vergleicht und findet immer einen Mangel.`,
        bewusstheit: `Was wäre, wenn der andere dich nicht wegen deiner Wirkung liebt – sondern wegen dir? Und kannst du das in diesem Moment glauben?`,
        uebung: `Frage den anderen heute: „Was schätzt du an mir – nicht was ich tue, sondern wer ich bin?“ Höre die Antwort, ohne sie sofort zu relativieren.`
      },
      verlust: {
        autopilot: `Verlust – vor allem von Beziehungen oder Status – trifft tief. Man reagiert mit Rückzug oder mit verstärkter Anstrengung: Noch besser werden, noch attraktiver, noch unersetzbarer.`,
        bewusstheit: `Was wäre, wenn du in diesem Verlust nicht mehr oder besser werden musst – sondern einfach trauern darfst? Was bleibt, wenn du aufhörst zu glänzen?`,
        uebung: `Schreibe heute auf, was dieser Verlust dir wirklich bedeutet – nicht was er für dein Bild bedeutet, sondern was er für dich als Mensch bedeutet.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird in Leistung für die wichtigste Person investiert: Man will beeindrucken, unersetztbar sein, glänzen – auch wenn man innerlich schon am Limit ist.`,
        bewusstheit: `Was wäre, wenn der andere dich auch dann schätzt, wenn du gerade nicht glänzt? Darf das sein?`,
        uebung: `Sag dem wichtigsten Menschen heute ehrlich, wie es dir geht – ohne Hochglanz, ohne Leistung. Nur: „Ich bin gerade erschöpft." Dann schau, was er antwortet.`
      },
      stagnation: {
        autopilot: `Stagnation fühlt sich wie das Ende der Anziehungskraft an: Man verliert das Glänzen, die Energie, die Wirkung. Der Rückzug oder die Suche nach neuem Feuer beginnt.`,
        bewusstheit: `Was wäre, wenn der andere dich auch in der stillen Phase schätzt – ohne Glanz, ohne Leistung? Darf das sein?`,
        uebung: `Verbring heute Zeit mit dem wichtigsten Menschen – ohne Inszenierung, ohne Leistung. Nur da sein. Beobachte, was dann zwischen euch entsteht.`
      },
    },

    "SE4": {
      erschoepfung: {
        autopilot: `Die Erschöpfung wird in Stille ertragen. Man klagt nicht, man zeigt wenig – aber man leidet. Der Rückzug nach innen wird stärker, und irgendwo bestätigt die Erschöpfung ein altes Bild: das Leben ist schwer, und man trägt es eben.`,
        bewusstheit: `Trägst du diese Erschöpfung alleine, weil du glaubst, dass niemand sie wirklich verstehen würde? Was wäre, wenn jemand sie tragen könnte – zusammen mit dir?`,
        uebung: `Schreibe auf, was du gerade trägst – ohne Schönreden, ohne Relativieren. Lies es dann laut vor, als würdest du es einem guten Menschen erzählen. Beobachte, wie sich das verändert.`
      },
      konflikt: {
        autopilot: `Im Konflikt zieht man sich nach innen zurück. Die Verletzung wird getragen, manchmal lange, ohne dass der andere erfährt, wie tief sie sitzt. Aussen wenig – innen viel.`,
        bewusstheit: `Was trägst du gerade in dir, das der andere nicht weiss – und was würde passieren, wenn du es sagst?`,
        uebung: `Benenne einmal, was dich verletzt hat – ruhig, klar, ohne Dramatik. Nur: „Das hat mich verletzt, weil ...” Lass den Satz offen, wenn nötig.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird still ertragen – und gleichzeitig vertieft. Man wendet sich nach innen, pflegt die Melancholie, schreibt, träumt, fühlt. Das Alleinsein bekommt eine dunkle Schönheit, die den Kontakt nach außen noch schwerer macht.`,
        bewusstheit: `Schützt dich der Rückzug gerade – oder hält er dich dort, wo du leidest? Was wäre der erste kleine Schritt nach draußen?`,
        uebung: `Schreibe einen Brief an jemanden, den du vermisst – und schicke ihn ab. Kein langer Text. Nur: Ich denke an dich.`
      },
      entscheidung: {
        autopilot: `Jede Option wird innerlich aufgeladen: Was bedeutet diese Wahl über mich? Was geht für immer verloren, wenn ich mich anders entscheide? Die Entscheidung wird zur existenziellen Frage, statt zu einer konkreten Wahl.`,
        bewusstheit: `Wie viel Bedeutung lädst du auf diese Entscheidung? Und ist sie wirklich so endgültig – oder fühlt sie sich nur so an?`,
        uebung: `Schreibe auf, was du verlieren würdest – bei jeder Option. Dann schreibe auf, was du gewinnen würdest. Lass beide Listen gleichwertig nebeneinander stehen.`
      },
      beziehungskrise: {
        autopilot: `Man trägt die Krise still – innerlich sehr viel, äußerlich wenig. Die Verletzung wird gehalten, manchmal über Wochen. Wenn sie sich dann äußert, kommt sie tief und schwer.`,
        bewusstheit: `Trägst du diese Krise allein, weil du glaubst, dass der andere sie nicht wirklich verstehen kann – oder hast du es wirklich versucht?`,
        uebung: `Sag dem anderen heute in einem ruhigen Moment, was dich in der Beziehung gerade wirklich bewegt – nicht die Anklage, den eigentlichen Schmerz. Nur einen Satz.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel ist existenziell: Ich bin grundlegend anders, und anders bedeutet: defekt. Das innere Narrativ vertieft sich: Andere haben es leichter, für sie ist das Leben zugänglicher. Ich bin zu viel oder zu wenig – nie genau richtig.`,
        bewusstheit: `Was wäre, wenn „anders sein“ keine Defizit-Aussage ist – sondern einfach eine Beschreibung? Wer hat gesagt, dass anders gleich falsch ist?`,
        uebung: `Schreibe drei Dinge auf, die an deiner Art zu sein wertvoll sind – nicht trotz deiner Tiefe, sondern wegen ihr. Lies sie laut vor und lass sie einen Moment gelten.`
      },
      verlust: {
        autopilot: `Verlust wird tief gefühlt und oft allein getragen. Der Schmerz wird zum Kern der Identität: Ich bin derjenige, der verliert, dem etwas fehlt. Die Trauer kann sich verfestigen statt zu durchfließen.`,
        bewusstheit: `Was wäre, wenn dieser Verlust dich nicht definiert – sondern nur berührt? Und gibt es etwas jenseits des Schmerzes, das auch zu dir gehört?`,
        uebung: `Schreibe heute auf: Was habe ich durch diesen Verlust erfahren, das ich vorher nicht wusste? Nicht um den Schmerz zu verschönern – um das Ganze zu sehen.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird intensiv erlebt und oft allein getragen. Der Druck mischt sich mit Selbstvorwürfen: Warum schaffe ich das nicht? Andere scheinen das leichter zu tragen. Die Isolation wächst.`,
        bewusstheit: `Was wäre, wenn dein Empfinden des Drucks nicht bedeutet, dass du schwächer bist – sondern dass du tiefer fühlst? Was täte dir jetzt wirklich gut?`,
        uebung: `Schreibe heute auf, was gerade zu viel ist – ehrlich, ohne Selbstkritik. Dann lies es vor wie ein Bericht: Das ist, was ist. Nicht mehr, nicht weniger.`
      },
      stagnation: {
        autopilot: `Stagnation und innere Leere sind vertraut – und gefährlich. Man versinkt in ihr, macht sie zur Wohnstatt. Die Sehnsucht nach Intensität bleibt, aber die Energie, sie zu suchen, fehlt.`,
        bewusstheit: `Was wäre, wenn diese Leere nicht das Ende ist – sondern ein Raum, in dem etwas Neues entsteht? Was könnte gerade keimen?`,
        uebung: `Schaffe heute etwas Kleines – ein Satz, ein Bild, eine Zeile. Nicht für andere. Nur um dem Schweigen etwas entgegenzusetzen. Das genügt.`
      },
    },

    "SO4": {
      erschoepfung: {
        autopilot: `Die Erschöpfung wird sichtbar – und gleichzeitig mit Scham begleitet. Man vergleicht sich mit anderen, die scheinbar leichter durch das Leben kommen. Die Erschöpfung bestätigt das Gefühl, irgendwie zurückzubleiben.`,
        bewusstheit: `Was wäre, wenn deine Erschöpfung kein Zeichen von Minderwertigkeit wäre, sondern ein Zeichen dafür, dass du wirklich intensiv lebst? Würde sich etwas verschieben, wenn du sie so betrachtetest?`,
        uebung: `Schreibe heute einen einzigen Satz über deine Erschöpfung – nicht als Klage, sondern als neutrale Beobachtung. "Ich bin erschöpft" – und dann atme. Mehr nicht.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Verletzung gross und sichtbar. Man fühlt sich missverstanden, abgewertet, nicht gesehen – und das bestätigt ein tiefes inneres Bild. Der Vergleich mit anderen kann auftauchen: Beim anderen ist das nie so ein Problem.`,
        bewusstheit: `Sprichst du gerade über diesen konkreten Konflikt – oder über etwas Älteres, das dieser Moment berührt hat?`,
        uebung: `Trenne das Heutige vom Alten: Was ist genau in diesem Gespräch passiert – beschrieben in einem sachlichen Satz? Dann erst: Was hat es berührt?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bestätigt den Vergleich: Andere haben echte Verbindungen, anderen gelingt das Dazugehören. Man zieht sich zurück und beobachtet von außen, wie das Leben der anderen verläuft – und spürt den Schmerz des Abstands.`,
        bewusstheit: `Was siehst du bei anderen, das du dir für dich selbst wünschst? Und wie viel davon ist wirklich unerreichbar – oder nur unversucht?`,
        uebung: `Tu heute etwas, das Verbindung möglich macht – auch wenn es sich unvollkommen anfühlt. Eine Nachricht schicken, ein Gespräch beginnen. Nicht perfekt. Nur echt.`
      },
      entscheidung: {
        autopilot: `Man beobachtet, was andere wählen – und vergleicht sich. Was wählt jemand wie ich? Was wählen die, die dazugehören? Die eigene Stimme wird kaum gehört, weil sie immer schon im Vergleichsmodus ist.`,
        bewusstheit: `Was möchtest du – ohne Vergleich, ohne Referenzrahmen? Gibt es eine Ahnung in dir, die du immer wieder übertönst?`,
        uebung: `Frage dich: Was würde ich wählen, wenn ich nie wüsste, was andere in dieser Situation wählen? Schreibe diese Antwort auf und halte daran fest.`
      },
      beziehungskrise: {
        autopilot: `Man vergleicht – mit anderen Paaren, anderen Verbindungen, einem idealisierten Bild. Diese Beziehung fühlt sich in der Krise wie ein Zeichen an: Andere haben es leichter, bei mir stimmt etwas nicht.`,
        bewusstheit: `Was wäre, wenn diese Beziehung gerade genau so ist, wie Beziehungen manchmal sein können – schwierig, unfertig, und trotzdem real? Was würdest du dann tun?`,
        uebung: `Schreibe auf, was diese Beziehung dir schon gegeben hat – konkret, nicht ideell. Dann tritt mit dieser Liste in das Gespräch, das nötig ist.`
      },
      selbstzweifel: {
        autopilot: `Man vergleicht sich – und verliert dabei immer. Andere scheinen sicherer, selbstverständlicher, normaler. Der Selbstzweifel bestätigt: Bei mir fehlt etwas, das andere haben.`,
        bewusstheit: `Was wäre, wenn der Vergleich gerade nicht fair ist – weil du deinen Innenraum mit dem Außenbild der anderen vergleichst? Was weißt du wirklich über ihr Innenleben?`,
        uebung: `Schreib heute auf, was dich – ganz konkret – von anderen unterscheidet und was daran wertvoll ist. Nicht den Mangel. Den Beitrag.`
      },
      verlust: {
        autopilot: `Man fühlt den Verlust tief – und vergleicht: Andere verlieren auch, aber bei mir ist es anders, schwerer, einsamer. Der Schmerz erhält eine besondere Färbung, die zugleich verbindet und isoliert.`,
        bewusstheit: `Was wäre, wenn dein Schmerz weder kleiner noch größer ist als der anderer – sondern einfach deiner? Wie würde es sich anfühlen, ihn ohne Vergleich zu tragen?`,
        uebung: `Such heute jemanden, der ebenfalls verloren hat – ohne zu vergleichen. Hört euch gegenseitig zu. Lass den anderen Schmerz neben deinem stehen, nicht gegen ihn.`
      },
      ueberforderung: {
        autopilot: `Man vergleicht sich: Andere scheinen mit demselben Druck besser umzugehen. Der Selbstzweifel unter der Überforderung macht sie schwerer. Man zieht sich zurück statt zu bitten.`,
        bewusstheit: `Was wäre, wenn du heute um Hilfe bittest – nicht weil du schwach bist, sondern weil du ein Mensch mit Grenzen bist?`,
        uebung: `Bitte heute konkret eine Person um Unterstützung – eine spezifische Aufgabe, eine klare Bitte. Kein allgemeines „Ich bin überfordert", sondern: „Kannst du … übernehmen?"`
      },
      stagnation: {
        autopilot: `Stagnation aktiviert den Vergleich: Andere bewegen sich, wachsen, erleben. Ich stehe still. Der Schmerz darüber verfestigt sich zur Überzeugung: Mir fehlt etwas Grundlegendes.`,
        bewusstheit: `Was wäre, wenn andere gerade auch stillstehen – du es nur nicht siehst? Und was ist in dir vorhanden, auch jetzt?`,
        uebung: `Schreibe heute drei Dinge auf, die in dir lebendig sind – nicht was du tust, was du bist: eine Eigenschaft, ein Wert, eine Fähigkeit. Lass sie gelten.`
      },
    },

    "SX4": {
      erschoepfung: {
        autopilot: `Wenn Erschöpfung kommt, steigen die Anforderungen – an sich selbst und an andere. Intensität wird als Mittel gegen die innere Leere eingesetzt. Man fordert mehr, erwartet mehr, gibt mehr – bis gar nichts mehr geht.`,
        bewusstheit: `Was steht hinter der Intensität gerade? Ist es Leidenschaft – oder ist es die Angst vor dem, was da wäre, wenn alles ruhiger würde?`,
        uebung: `Halte inne in einem intensiven Moment und frage dich: Was fühle ich wirklich – unter der Intensität? Atme einmal tief. Benenne das, was auftaucht, ohne es sofort zu verwandeln.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird mehr Tiefe, mehr Ehrlichkeit, mehr Intensität gefordert. Oberflächliche Lösungen werden abgelehnt. Der andere soll wirklich sehen, worum es geht – und das erzeugt manchmal Druck.`,
        bewusstheit: `Ist das Niveau der Intensität, das du gerade einforderst, wirklich für den anderen erreichbar – oder übersteigst du es in einer Weise, die ihn eher wegtreibt?`,
        uebung: `Formuliere das, was du wirklich brauchst, in einfachen Worten – ohne dramatischen Rahmen. Nicht was der andere tun sollte, sondern was du brauchst.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit trifft besonders tief, weil die Sehnsucht nach Verschmelzung so stark ist. Gleichzeitig schützt man sich davor: Wenn niemand nah ist, kann niemand verletzen. Der Rückzug schützt und isoliert zugleich.`,
        bewusstheit: `Hältst du Abstand, weil du Ruhe brauchst – oder weil Nähe dich ängstigt? Was wäre, wenn du beides gleichzeitig wahr sein lässt?`,
        uebung: `Erlaube dir heute, jemandem gegenüber ein Stück Verletzlichkeit zu zeigen. Nicht alles – nur einen echten Moment. Beobachte, was das in der Verbindung bewegt.`
      },
      entscheidung: {
        autopilot: `Jede Wahl wird zum Ringen: Welche Option ist wirklich echt, wirklich ich? Keine Option fühlt sich vollständig an, jede hat etwas Unzulängliches. Die Entscheidung dreht sich im Kreis der Idealvorstellung.`,
        bewusstheit: `Gibt es eine Option, die sich am lebendigsten anfühlt – auch wenn sie nicht ideal ist? Und was wäre, wenn das genug wäre?`,
        uebung: `Wähle die Option, die sich im Körper am stimmigsten anfühlt – nicht die, die das Denken als richtig ausweist. Dann stehe dazu, auch wenn sie unvollkommen ist.`
      },
      beziehungskrise: {
        autopilot: `Die Krise löst intensive Forderungen aus: mehr Echtheit, mehr Tiefe, mehr Ehrlichkeit – jetzt. Der andere kommt damit nicht mit. Das bestätigt den Verdacht: Niemand kann wirklich halten, was ich brauche.`,
        bewusstheit: `Ist das, was du gerade forderst, wirklich das, was die Krise braucht – oder ist es das, was du dir schon immer gewünscht hast und nie bekommen hast?`,
        uebung: `Nenne dem anderen genau eine Sache, die du dir jetzt wünschst – konkret, erreichbar, heute. Nicht das Ganze, nur diesen einen Schritt.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel wird intensiv und dunkel: Bin ich wirklich authentisch? Habe ich mich verloren? War das, was ich gezeigt habe, wirklich echt – oder eine Rolle? Die innere Kritik sucht nach Unwahrheit in der eigenen Tiefe.`,
        bewusstheit: `Was wäre, wenn dein Zweifel selbst ein Zeichen deiner Echtheit ist – denn nur wer wirklich fühlt, zweifelt so tief? Könnte das auch wahr sein?`,
        uebung: `Schreibe auf, was du in diesem Moment wirklich fühlst – ohne es zu formen, ohne es zu schönen. Roher Text. Das ist du. Das ist real.`
      },
      verlust: {
        autopilot: `Verlust wird mit großer Intensität erlebt. Der Schmerz kann alles überfluten – Kunst, Rückzug, intensive Gespräche werden zum Kanal. Manchmal wird das Leiden selbst zur Verbindung: Wer tiefer fühlt, lebt echter.`,
        bewusstheit: `Was wäre, wenn der Schmerz auch dann echt ist, wenn er leiser wird? Muss Trauer immer intensiv sein, um wahr zu sein?`,
        uebung: `Gestalte heute etwas aus dem Verlust – ein Bild, eine Zeile, eine Collage. Nicht um es zu zeigen. Nur um dem Schmerz eine Form zu geben, die ihn trägt.`
      },
      ueberforderung: {
        autopilot: `Überforderung bricht intensiv durch: entweder als kreativer Exzess, als emotionaler Ausbruch oder als totaler Rückzug. Die Stimmung kippt – von brennend zu erloschen.`,
        bewusstheit: `Was brauchst du in diesem Moment – Rückzug oder Verbindung? Und weißt du, wer dir das geben kann?`,
        uebung: `Gib dem Druck heute eine Form: schreibe, zeichne, bewege dich. Nicht um das Problem zu lösen – um die Energie zu entladen, damit du klarer siehst.`
      },
      stagnation: {
        autopilot: `Ohne Intensität fühlt sich das Leben tot an. Man greift nach dem nächsten emotionalen Erlebnis, der nächsten Tiefe, dem nächsten Schmerz oder der nächsten Begeisterung – nur um nicht in der Leere zu sitzen.`,
        bewusstheit: `Was wäre, wenn die Stille gerade das intensivste Erlebnis ist – wenn du ihr wirklich begegnest?`,
        uebung: `Sitz heute zwanzig Minuten mit der Leere – ohne sie zu füllen, ohne wegzugehen. Dann schreibe einen Satz: Was habe ich in der Stille gehört?`
      },
    },

    "SE5": {
      erschoepfung: {
        autopilot: `Der Rückzug wird noch tiefer. Man minimiert Kontakt, Anforderungen, äußere Reize – in der Hoffnung, dass die Stille Energie zurückbringt. Aber die Erschöpfung sitzt tiefer, und der Rückzug gibt nur kurzfristig Erleichterung.`,
        bewusstheit: `Wofür sparst du deine Energie gerade auf? Und ist das, wofür du sie sparst, wirklich das, was du jetzt brauchst?`,
        uebung: `Setz dich in absolute Stille – ohne Buch, ohne Plan, ohne Analyse. Beobachte, was kommt. Nicht verstehen wollen – nur wahrnehmen.`
      },
      konflikt: {
        autopilot: `Im Konflikt kommt der Rückzug. Man braucht Abstand, Zeit, Stille – um zu verarbeiten, was passiert ist. Nach aussen wirkt das kalt oder desinteressiert, obwohl innen viel in Bewegung ist.`,
        bewusstheit: `Braucht der andere gerade ein Signal von dir, dass du noch da bist – auch wenn du Zeit zum Verarbeiten brauchst?`,
        uebung: `Sage dem anderen kurz, was du brauchst: „Ich brauche etwas Zeit, um das zu verarbeiten. Ich komme wieder.” Das schliesst die Verbindung, anstatt sie abzuschneiden.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit ist für den SE5 fast ein Normalzustand – bekannt, kontrolliert, irgendwie sicher. Man schützt die eigene Energie, minimiert Anforderungen. Aber irgendwo bleibt ein leises Gefühl von Abgeschnittensein.`,
        bewusstheit: `Ist dieser Rückzug gerade Erholung – oder Vermeidung? Gibt es jemanden, den du vermisst, ohne es dir einzugestehen?`,
        uebung: `Plane heute einen kleinen, konkreten Kontaktmoment – kurz, dosiert, auf deinen Bedingungen. Nicht weil du musst, sondern weil Verbindung dich auch nährt.`
      },
      entscheidung: {
        autopilot: `Man braucht mehr Information, mehr Zeit, mehr Analyse – bevor eine Entscheidung fällt. Der innere Impuls: Wenn ich nur genug weiß, werde ich sicher nicht falsch liegen. Aber genug weiß man nie.`,
        bewusstheit: `Ab welchem Punkt hättest du genug Informationen – und gibt es diesen Punkt wirklich? Was würde passieren, wenn du jetzt entscheidest, mit dem, was du weißt?`,
        uebung: `Setze eine Informationsgrenze: Erlaube dir noch eine Quelle, ein Gespräch, eine Analyse. Dann entscheide – auch wenn sich das Wissen noch unvollständig anfühlt.`
      },
      beziehungskrise: {
        autopilot: `Man zieht sich zurück – braucht Abstand, Stille, Zeit. Der andere erlebt das als Gleichgültigkeit oder Kälte, was die Krise oft verschärft. Innen wird viel verarbeitet, was nach außen kaum sichtbar ist.`,
        bewusstheit: `Braucht der andere gerade ein Signal, dass du noch da bist – auch wenn du Abstand brauchst? Was wäre das kleinste Zeichen, das du ihm geben könntest?`,
        uebung: `Schreibe dem anderen eine kurze Nachricht, auch wenn du noch nicht reden kannst: „Ich bin noch da. Ich brauche etwas Zeit. Ich komme wieder." Das hält die Verbindung.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel nimmt die Form von Inkompetenz-Angst an: Ich weiß nicht genug, habe nicht genug verstanden, bin nicht kompetent genug für diese Situation. Der Rückzug in mehr Analyse gibt Sicherheit – aber löst den Zweifel nicht.`,
        bewusstheit: `Was wäre, wenn du für diese Situation kompetent genug bist – mit dem, was du bereits weißt? Was würde sich verändern, wenn du dieser Einschätzung vertraust?`,
        uebung: `Entscheide oder handle einmal ohne weitere Vorbereitung. Benenne danach, was gut war – nicht was fehlte. Baue so ein anderes inneres Erzählmuster auf.`
      },
      verlust: {
        autopilot: `Verlust wird innerlich verarbeitet, oft ohne es zu zeigen. Man denkt über den Verlust nach, analysiert ihn – aber die emotionale Tiefe bleibt privat, manchmal so privat, dass sie sich nicht entfalten kann.`,
        bewusstheit: `Was wäre, wenn du heute den Verlust nicht nur verstehst – sondern ihn auch fühlst? Gibt es einen Menschen, dem du das zeigen könntest?`,
        uebung: `Schreibe heute in einem unzensiert-privaten Text auf, was du verloren hast und was du fühlst. Keine Analyse, keine Erklärung – nur Empfindung in Worten.`
      },
      ueberforderung: {
        autopilot: `Überforderung führt zum Rückzug: Man braucht Raum, Zeit, Stille. Soziale Anforderungen werden reduziert. Das gibt kurzfristig Erholung – aber wenn der Rückzug zu lang wird, wächst die Isolation.`,
        bewusstheit: `Wie viel Rückzug brauchst du wirklich – und ab wann schadet er? Gibt es jemanden, dem du heute kurz sagst, wie es dir geht?`,
        uebung: `Schreibe heute eine Liste: Was kann ich wirklich weglassen? Was muss ich tun? Was kann ich delegieren? Dann handle nach dieser Liste – nicht nach dem Gefühl.`
      },
      stagnation: {
        autopilot: `Stagnation führt zu mehr Rückzug: Man liest, denkt, sammelt – aber handelt nicht. Die Analyse der Stagnation ersetzt das Durchbrechen. Der Rückzug wird zur komfortablen Gewohnheit.`,
        bewusstheit: `Was wäre der kleinste mögliche Schritt nach außen – nicht der perfekte, der kleinste? Was wäre, wenn du ihn heute gehst?`,
        uebung: `Wähle heute eine Sache, die du schon lange weißt, aber nicht getan hast. Tu sie in zwanzig Minuten. Nicht vorbereiten – einfach anfangen.`
      },
    },

    "SO5": {
      erschoepfung: {
        autopilot: `Man zieht sich von sozialen Verpflichtungen zurück und taucht tiefer in Wissen oder Analyse ein. Das fühlt sich produktiv an – ist aber oft ein Weg, der Erschöpfung nicht direkt zu begegnen.`,
        bewusstheit: `Was würde passieren, wenn du gerade nichts analysierst, nichts verstehst, nichts weißt – sondern einfach bist? Wie lange kannst du das aushalten?`,
        uebung: `Verbring zwanzig Minuten in der Natur, ohne Ziel, ohne inneren Vortrag, ohne Buch. Beobachte, was mit deinem Geist passiert, wenn er keine Aufgabe hat.`
      },
      konflikt: {
        autopilot: `Im Konflikt tritt die Analyse in den Vordergrund. Man versucht, die Situation zu verstehen, Muster zu erkennen, rational zu klären – während der emotionale Gehalt des Konflikts unberührt bleibt.`,
        bewusstheit: `Analysierst du gerade den Konflikt – oder bist du wirklich dabei? Was fühlst du, wenn du aufhörst zu analysieren?`,
        uebung: `Sage dem anderen einmal, wie du dich in diesem Konflikt fühlst – nicht was du denkst. Ein Satz: „Ich fühl gerade ...”`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit Wissen befüllt – Bücher, Analysen, Konzepte. Man zieht sich in den Intellekt zurück und gibt der Einsamkeit einen Rahmen: Ich forsche, also bin ich da. Aber die Leere unter dem Denken bleibt.`,
        bewusstheit: `Was sucht dein Geist gerade, das das Wissen nicht geben kann? Gibt es eine Verbindung, die du dir wünschst, aber nicht aussprichst?`,
        uebung: `Tausche heute ein Buch gegen ein Gespräch – mit jemandem, dem du dich intellektuell verbunden fühlst. Nicht um zu analysieren. Um wirklich da zu sein.`
      },
      entscheidung: {
        autopilot: `Man sucht nach dem theoretisch schlüssigsten System, dem Modell, das die Entscheidung logisch auflöst. Die Analyse wird gründlicher, umfassender – aber die Entscheidung selbst verzögert sich immer weiter.`,
        bewusstheit: `Gibt es unter all der Analyse eine stille Ahnung, was du wirklich willst? Und wäre es möglich, dieser Ahnung zu folgen – auch ohne das perfekte System dahinter?`,
        uebung: `Schreibe die Entscheidungsfrage auf ein Blatt Papier. Dann schreibe in zwei Minuten, ohne nachzudenken, die erste Antwort die kommt. Lies sie. Das ist oft nah an der Wahrheit.`
      },
      beziehungskrise: {
        autopilot: `Man analysiert die Krise: Was ist schiefgelaufen? Welche Muster liegen zugrunde? Die Analyse gibt Struktur – aber sie ersetzt das Gespräch nicht, das eigentlich nötig wäre.`,
        bewusstheit: `Du verstehst die Krise vielleicht besser als du sie erlebst. Was wäre, wenn du gerade weniger analysierst und mehr einfach da bist – mit dem anderen, in diesem Moment?`,
        uebung: `Setz dich mit dem anderen zusammen – ohne Analyse, ohne Erklärung. Nur: „Wie geht es dir?" und dann: wirklich zuhören, ohne das Gespräch in ein Modell zu übersetzen.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf das Denken selbst: Ist mein Modell wirklich richtig? Habe ich etwas übersehen? Die Analyse beginnt, sich gegen sich selbst zu richten – man zweifelt an den eigenen Schlussfolgerungen.`,
        bewusstheit: `Gibt es eine Ebene jenseits des Denkens, auf der du weißt, was gilt? Was sagt dir die ruhige Stille, wenn du aufhörst zu analysieren?`,
        uebung: `Verbring heute zwanzig Minuten ohne intellektuelle Aktivität. Dann frage dich: Was denke ich eigentlich – nicht analytisch, sondern einfach? Schreibe das auf.`
      },
      verlust: {
        autopilot: `Man tritt innerlich zurück: Der Verlust wird beobachtet statt durchgefühlt. Man sammelt Gedanken, liest über Trauer, versteht den Prozess – aber hält Abstand zur eigenen emotionalen Realität.`,
        bewusstheit: `Was wäre, wenn du heute nicht über Trauer nachdenkst, sondern einfach trauerst? Was würde das ermöglichen?`,
        uebung: `Geh heute für eine halbe Stunde spazieren, ohne Ziel und ohne Gedanken-Aufgabe. Lass kommen, was kommt – auch den Schmerz. Er darf da sein.`
      },
      ueberforderung: {
        autopilot: `Man zieht sich ins Denken zurück: analysiert die Überforderung, entwickelt Systeme, liest über Stressmanagement. Das gibt das Gefühl von Kontrolle – aber löst den Druck selten wirklich.`,
        bewusstheit: `Was wäre, wenn du heute nicht über die Überforderung nachdenkst, sondern konkret eine Sache davon erledigst oder loslässt?`,
        uebung: `Wähle heute die eine Aufgabe, die am meisten drückt. Mache sie als erstes, ohne weitere Planung. Nur anfangen. Beobachte, wie sich das anfühlt.`
      },
      stagnation: {
        autopilot: `Man zieht sich ins Denken zurück und beobachtet die Stagnation von außen: analysiert, kategorisiert, versteht. Aber das Verstehen der Leere hebt sie nicht auf – es verlängert sie.`,
        bewusstheit: `Was wäre, wenn du heute aufhörst zu analysieren und einfach etwas tust – irgendetwas Kleines, Konkretes, Jetzt?`,
        uebung: `Geh heute nach draußen und mach etwas mit den Händen: Gärtnern, Kochen, etwas Basteln. Kein Nachdenken. Nur tun und fühlen, was entsteht.`
      },
    },

    "SX5": {
      erschoepfung: {
        autopilot: `Der Rückzug aus der Verbindung beginnt – auch aus der, die einem wichtig ist. Man braucht Stille und Raum, aber dieser Rückzug verschärft die innere Isolation, anstatt sie aufzulösen.`,
        bewusstheit: `Ziehst du dich gerade von Menschen zurück, um Energie zu sparen – oder entgehst du damit auch dem, was Verbindung dir jetzt geben könnte?`,
        uebung: `Schreibe einen kurzen Brief an jemanden, dem du nahestehst – auch wenn du ihn nicht absendest. Lass darin dein echtes Inneres sprechen. Beobachte, was das in dir bewegt.`
      },
      konflikt: {
        autopilot: `Im Konflikt zeigt sich entweder überraschende Intensität – eine plötzliche, tiefe Reaktion – oder vollständiges Abschalten. Beide Extreme können den anderen verwirren.`,
        bewusstheit: `Was passiert in dir gerade, bevor du dich abschaltest – oder bevor die Intensität ausbricht? Gibt es einen Moment dazwischen?`,
        uebung: `Bleibe in der Mitte: weder abschalten noch ausbrechen. Sage, was du wahrnimmst: „Ich merke, dass ich mich gerade entziehen will.” Mehr nicht.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit löst eine intensive Suche nach Verbindung aus – aber nur der richtigen, der wirklich echten. Oberflächlicher Kontakt fühlt sich schlechter an als Alleinsein. Die hohe Messlatte macht Verbindung selten.`,
        bewusstheit: `Wartest du auf die perfekte Verbindung – und übsiehst dabei die Menschen, die wirklich da sind? Was brauchst du wirklich von einer Verbindung?`,
        uebung: `Such heute Kontakt zu jemandem, ohne die Tiefe vorauszusetzen. Lass die Verbindung sein, was sie gerade ist – auch wenn sie unvollkommen ist.`
      },
      entscheidung: {
        autopilot: `Man wartet auf Gewissheit, auf das unzweifelhafte Zeichen, auf den Moment, in dem die richtige Option klar ist. Die Wartezeit wird länger. Und weil keine Option sich vollständig sicher anfühlt, verschiebt man weiter.`,
        bewusstheit: `Wie viel Gewissheit brauchst du wirklich, um zu entscheiden – und gibt es diese Gewissheit überhaupt? Was wäre, wenn du einfach wählst und dir dann vertraust?`,
        uebung: `Entscheide dich jetzt – mit dem, was du hast. Schreibe die Wahl auf und sage laut: Ich habe entschieden. Beobachte, wie sich das anfühlt.`
      },
      beziehungskrise: {
        autopilot: `Man zieht sich vollständig zurück oder sucht genau die richtige Verbindung – jetzt, intensiv. Mittelmäßiger Kontakt fühlt sich in der Krise schlechter an als Alleinsein.`,
        bewusstheit: `Wäre die Person, die gerade da ist – auch wenn sie nicht perfekt passt – vielleicht genug, um diesen Moment gemeinsam zu tragen?`,
        uebung: `Melde dich bei jemandem, der dir nahestehend ist – nicht mit dem Anspruch auf die perfekte Begegnung, sondern einfach: Ich brauche gerade Verbindung.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel betrifft die Verbindung: Bin ich wirklich in der Lage, diese tiefe Verbindung zu halten, die ich mir wünsche? Bin ich zu intensiv, zu seltsam, zu fordernd? Der Rückzug schützt vor der Antwort.`,
        bewusstheit: `Was wäre, wenn du genau die richtige Person für eine tiefe Verbindung bist – und gerade zu wenig davon zeigst?`,
        uebung: `Zeige heute dem Menschen, dem du nahestehst, etwas Echtes von dir – ohne es vorher zu filtern. Einen echten Gedanken, eine echte Empfindung. Beobachte, was dann passiert.`
      },
      verlust: {
        autopilot: `Verlust in tiefen Beziehungen trifft besonders stark – und wird besonders geschützt. Man zieht sich zurück, verarbeitet allein, lässt niemanden nah. Der Rückzug schützt, aber verlängert die Isolation.`,
        bewusstheit: `Gibt es einen Menschen, dem du heute sagen könntest, was du verloren hast – ohne alles erklären zu müssen? Nur zeigen.`,
        uebung: `Melde dich heute bei einem Menschen, dem du vertraust – nicht um zu reden, sondern um nicht allein zu sein. Sag nur: „Ich trauere gerade. Kannst du in der Nähe sein?"`
      },
      ueberforderung: {
        autopilot: `Überforderung entsteht, wenn Außenwelt und Beziehungsanforderungen zu viel werden. Man zieht sich in intensive Gedankenwelten oder Einzelprojekte zurück – und verliert den Kontakt zur Realität der Anforderungen.`,
        bewusstheit: `Was ist die eine konkrete Sache, die du heute erledigen musst – jenseits aller Gedankenwelten? Kannst du das priorisieren?`,
        uebung: `Setz dir heute ein konkretes Zeitlimit: Zwei Stunden für die wichtigste Aufgabe. Danach eine Stunde für dich. Halte beides ein.`
      },
      stagnation: {
        autopilot: `Ohne intensive Verbindung oder tiefes Projekt fühlt sich alles flach an. Man wartet auf das eine Thema, die eine Begegnung, die alles wieder lebendig macht – und verpasst das, was jetzt da ist.`,
        bewusstheit: `Was ist gerade da – auch wenn es nicht das Intensivste ist? Gibt es etwas Kleines, das einen Schritt wert wäre?`,
        uebung: `Melde dich heute bei einem Menschen, der dir wichtig ist – nur kurz, ohne Anspruch auf Tiefe. Manchmal beginnt das Lebendige mit einem kleinen Kontakt.`
      },
    },

    "SE6": {
      erschoepfung: {
        autopilot: `Der Körper sendet Erschöpfungssignale – und der Geist beginnt sofort, sie zu analysieren. Sind das normale Zeichen der Müdigkeit oder etwas Besorgniserregendes? Die Suche nach Sicherheit in der Unsicherheit kostet weitere Energie.`,
        bewusstheit: `Was wäre, wenn du den Erschöpfungssignalen deines Körpers ohne Analyse vertrauen würdest – einfach als Tatsache: Ich bin jetzt müde, und das reicht als Antwort?`,
        uebung: `Wenn ein Gedanke kommt, der deine Erschöpfung analysieren oder absichern will, benenne ihn leise: "Das ist der Sicherheitsimpuls." Atme. Lass ihn ziehen, ohne ihm zu folgen.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann Angst entstehen – Angst vor dem Verlust der Beziehung, vor dem Chaos, vor dem Falschen. Das zeigt sich entweder als Absicherungssuche oder als Verhärtung: Ich bin im Recht und werde das verteidigen.`,
        bewusstheit: `Was fürchtest du gerade wirklich hinter diesem Konflikt? Und ist diese Befürchtung wirklich das, was gerade passiert?`,
        uebung: `Trenne das eigentliche Konfliktthema von der Angst darunter. Nenne die Angst leise bei Namen – und dann erst: Was ist das eigentliche Thema?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit aktiviert die Angst: Ist das normal? Habe ich etwas falsch gemacht? Werde ich ausgeschlossen? Der Geist beginnt zu analysieren und abzusichern, anstatt einfach Verbindung zu suchen.`,
        bewusstheit: `Was wäre, wenn die Einsamkeit einfach eine Pause ist – kein Zeichen einer Gefahr, kein Zeichen eines Fehlers?`,
        uebung: `Melde dich bei jemandem, dem du vertraust – nicht mit einer Frage, sondern mit einer Einladung: Lass uns Zeit miteinander verbringen. Vertrau dem Impuls, ohne ihn vorher zu analysieren.`
      },
      entscheidung: {
        autopilot: `Entscheidungen lösen Katastrophendenken aus: Was, wenn das falsch ist? Was sind die schlimmsten Konsequenzen? Der Geist entwickelt Szenarien, die die Entscheidung immer risikoreicher erscheinen lassen.`,
        bewusstheit: `Wie wahrscheinlich ist das schlimmste Szenario wirklich – und hast du schon einmal eine Entscheidung getroffen und überlebt, die sich damals auch so anfühlte?`,
        uebung: `Schreibe das schlimmste Szenario auf. Dann schreibe, was du in diesem Fall tun würdest. Wenn du das weißt, hat die Angst weniger Macht über die Entscheidung.`
      },
      beziehungskrise: {
        autopilot: `Die Angst dominiert: Verliere ich diese Beziehung? Bin ich schuld? Was denken andere darüber? Man sucht Sicherheit durch Rückfragen, Absicherung, Analyse – und macht die Krise dadurch oft größer.`,
        bewusstheit: `Was weißt du gerade wirklich – und was befürchtest du nur? Und gibt es jemanden, dem du vertraust, der dir helfen könnte, das zu trennen?`,
        uebung: `Sprich mit dem anderen ruhig und direkt: „Ich mache mir Sorgen um uns. Wie siehst du das?" Dann höre die Antwort, ohne sie sofort zu bewerten oder zu katastrophisieren.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel ist von Angst gespeist: Bin ich wirklich sicher, dass ich das richtig mache? Was, wenn ich falsch liege? Was, wenn andere das durchschauen? Die innere Kritik lädt jede Unsicherheit mit Bedrohung auf.`,
        bewusstheit: `Was wäre, wenn du unsicher sein darfst – und das trotzdem kein Zeichen ist, dass etwas grundlegend falsch mit dir ist?`,
        uebung: `Wenn der Selbstzweifel auftaucht, benenne ihn laut: „Das ist Angst, nicht Wahrheit." Dann frage dich: Was würde ein ruhiger, wohlmeinender Beobachter sagen?`
      },
      verlust: {
        autopilot: `Verlust löst Angst aus: Was kommt jetzt? Wie sicher bin ich noch? Der Schmerz mischt sich mit Sorge um die Zukunft. Man sucht Sicherheit, Rat, Bestätigung – statt die Trauer direkt zu begegnen.`,
        bewusstheit: `Was wäre, wenn du heute die Sorge um die Zukunft beiseitestellst – nur für eine Stunde – und einfach trauerst, was jetzt ist?`,
        uebung: `Schreibe auf: Was habe ich verloren, und was ist trotzdem noch da? Nicht um den Schmerz zu minimieren – um das Fundament zu sehen, das trägt.`
      },
      ueberforderung: {
        autopilot: `Überforderung aktiviert Angst: Was, wenn ich es nicht schaffe? Was, wenn etwas schiefgeht? Man sucht Absicherung, fragt andere, plant doppelt. Der Druck wächst mit der Sorge.`,
        bewusstheit: `Was ist das Schlimmste, das wirklich passieren kann – und wie wahrscheinlich ist das? Was wäre realistisch betrachtet genug?`,
        uebung: `Schreibe heute auf: Was muss ich wirklich tun, und was befürchte ich nur, tun zu müssen? Trenne beides. Handle nur nach der ersten Liste.`
      },
      stagnation: {
        autopilot: `Stagnation löst Angst aus: Was, wenn das immer so bleibt? Was, wenn ich den Anschluss verliere? Die Sorge um die Zukunft macht den Stillstand schwerer. Man sucht Sicherheit in Plänen statt im Jetzt.`,
        bewusstheit: `Was wäre, wenn du gerade weder voranschreitest noch zurückfällst – sondern Kraft sammelst? Kann der Stillstand auch das sein?`,
        uebung: `Schreibe heute auf: Was ist gerade stabil in meinem Leben? Nicht was fehlt – was trägt. Lies die Liste dreimal.`
      },
    },

    "SO6": {
      erschoepfung: {
        autopilot: `Die Pflichten bleiben – auch wenn die Energie fehlt. Das System trägt einen: man folgt den Routinen, den Strukturen, den Erwartungen. Aufhören würde bedeuten, das System oder die Gemeinschaft zu enttäuschen.`,
        bewusstheit: `Welche Pflichten trägst du gerade, weil du sie wirklich für richtig hältst – und welche trägst du, weil du Angst vor den Konsequenzen des Nicht-Tragens hast?`,
        uebung: `Wähle heute eine einzige Pflicht bewusst aus und frage dich: Tue ich das aus innerer Überzeugung – oder aus Angst? Lass die Antwort auftauchen, ohne sofort zu handeln.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird auf das verwiesen, was üblich ist, was die Gruppe erwartet, was die Regeln sagen. Die eigene Position wird weniger als persönliche Meinung formuliert, sondern als das, was man eben tut.`,
        bewusstheit: `Was ist deine eigene Meinung in diesem Konflikt – unabhängig von dem, was andere erwarten oder was die Norm sagt?`,
        uebung: `Formuliere deinen Standpunkt einmal ganz persönlich: „Ich persönlich möchte ...” Beobachte, wie sich das anfühlt.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit innerhalb der Gruppe fühlt sich paradox an: Man ist umgeben von Menschen, und trotzdem allein. Das Zugehörigkeitsgefühl fehlt, obwohl man dazugehört. Die Suche nach dem richtigen System, der richtigen Gemeinschaft geht weiter.`,
        bewusstheit: `Suchst du Zugehörigkeit durch das Erfüllen von Erwartungen – oder durch echtes Zeigen, wer du bist? Wissen die Menschen in deiner Gruppe, was dich wirklich bewegt?`,
        uebung: `Erzähle heute jemandem aus deiner Gruppe etwas wirklich Persönliches – keine Meinung über die Gruppe, sondern etwas über dich. Beobachte, wie das die Verbindung verändert.`
      },
      entscheidung: {
        autopilot: `Man sucht Sicherheit durch Gruppenentscheid: Was würde die Gemeinschaft wählen? Was ist der Konsens? Die eigene Position verschwindet hinter dem, was das System gutheißt.`,
        bewusstheit: `Was würdest du wählen, wenn du nicht die Zustimmung der Gruppe bräuchtest? Gibt es eine Meinung in dir, die du noch nicht laut gesagt hast?`,
        uebung: `Teile deine eigene Position mit – auch wenn sie vom Gruppenkonsens abweicht. Sage sie als persönliche Meinung, nicht als Wahrheit. Beobachte, was das in dir auslöst.`
      },
      beziehungskrise: {
        autopilot: `Man fragt die Gruppe: Was würden andere an meiner Stelle tun? Was ist normal, was ist vertretbar? Die eigene Einschätzung der Krise tritt zurück zugunsten des kollektiven Urteils.`,
        bewusstheit: `Was weißt du selbst – in dir, ruhig, unabhängig von anderen – über diese Beziehungssituation? Diese Stimme hat das meiste Recht.`,
        uebung: `Schreibe auf, wie du die Krise einschätzt – ohne Ratschläge zu suchen, ohne Vergleich. Nur du, deine Wahrnehmung, deine Einschätzung. Dann entscheide, wie du handeln möchtest.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt, ob man dem System, der Gruppe, den Erwartungen gerecht wird. Bin ich wirklich loyal genug? Tue ich das Richtige? Der Selbstzweifel bindet sich an das kollektive Urteil: Was würde die Gruppe denken?`,
        bewusstheit: `Wessen Meinung fragst du gerade innerlich ab – und vertraust du dabei auch dir selbst? Was würdest du einschätzen, wenn du niemanden fragen könntest?`,
        uebung: `Fälle heute eine kleine Einschätzung oder Entscheidung ohne Rücksprache. Dann beobachte: War die Welt davon abhängig? Und: War deine Einschätzung so falsch?`
      },
      verlust: {
        autopilot: `Man sucht in der Gemeinschaft Halt: Rituale, Gruppen, Traditionen helfen. Aber manchmal bleibt der eigene Schmerz unter dem kollektiven Rahmen verborgen, weil es einfacher ist zu tragen als zu fühlen.`,
        bewusstheit: `Gibt es in diesem Verlust etwas, das nur dir gehört – und das du noch nicht wirklich gefühlt hast?`,
        uebung: `Nimm dir heute eine halbe Stunde allein – keine Gruppe, keine Gemeinschaft. Nur du und dein Verlust. Dann komm zurück und sag einem Menschen einen Satz darüber.`
      },
      ueberforderung: {
        autopilot: `Man übernimmt Verantwortung für das System, die Gruppe, die Erwartungen anderer – und vergisst die eigenen Grenzen. Treu und verlässlich bis zur Erschöpfung.`,
        bewusstheit: `Was übernimmst du gerade, das nicht dein Job ist? Und was wäre der erste Schritt, das zurückzugeben?`,
        uebung: `Sprich heute mit jemandem im Team oder der Gruppe: „Ich brauche Unterstützung bei …" Benenne konkret, was du brauchst. Lass andere teilhaben.`
      },
      stagnation: {
        autopilot: `Ohne Gruppenaufgabe oder Systemzugehörigkeit droht Orientierungsverlust: Was ist meine Rolle? Wozu gehöre ich? Man sucht nach Struktur und Anschluss statt nach innerer Richtung.`,
        bewusstheit: `Was wäre, wenn du gerade nicht wegen einer Gruppe oder Struktur wichtig bist – sondern für sich selbst? Was trägst du in dir?`,
        uebung: `Tue heute etwas, das nur dir gehört – kein Projekt für die Gruppe, kein Beitrag für andere. Nur für dich. Beobachte, wie sich das anfühlt.`
      },
    },

    "SX6": {
      erschoepfung: {
        autopilot: `Die Erschöpfung schlägt um in Aggression oder plötzliche Überaktivität – man kämpft gegen sie an, statt sie anzuerkennen. Oder der Einbruch kommt unvermittelt und überrascht einen selbst.`,
        bewusstheit: `Was sagst du dir gerade, um nicht innehalten zu müssen? Und wovor schützt dieses Weiterkämpfen dich eigentlich?`,
        uebung: `Halte an einem Punkt des Tages bewusst inne – nicht weil du musst, sondern weil du es wählst. Bleibe einen Moment in dieser gewählten Stille. Beobachte, was auftaucht.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann die Energie nach aussen schlagen – konfrontativ, direkt, herausfordernd. Manchmal testet man dabei, ob der andere wirklich standhalt. Das kann eskalieren.`,
        bewusstheit: `Testest du den anderen gerade – und was erhoffst du dir, was dabei passiert? Vertraust du dem Ergebnis, egal wie es ausgeht?`,
        uebung: `Bevor du konfrontierst: Frage einmal nach, statt zu fordern. „Ich verstehe das gerade nicht – was meinst du damit?” Beobachte, ob das den Raum öffnet.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit erzeugt Misstrauen: Warum sind die anderen nicht da? Was steckt dahinter? Man scannt die Situation nach Gefahren und zieht sich gleichzeitig heraus – was die Einsamkeit verstärkt.`,
        bewusstheit: `Misstraust du gerade dem Alleinsein – oder misstraust du den Menschen, die nicht da sind? Was würde passieren, wenn du dem Impuls zur Verbindung vertraust?`,
        uebung: `Teste heute das Vertrauen: Melde dich bei jemandem, ohne vorher zu wissen, wie er reagiert. Lass offen, was kommt.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden entweder mutig und konfrontativ getroffen – gegen den Strom, gegen die Erwartung – oder endlos aufgeschoben, weil die Gefahr jeder Option analysiert wird. Beides kann lähmen.`,
        bewusstheit: `Entscheidest du gerade aus Stärke – oder gegen eine Angst? Und wäre die Entscheidung dieselbe, wenn die Angst nicht da wäre?`,
        uebung: `Frage dich: Was würde ich wählen, wenn ich weder Angst vor dem Falschen noch den Impuls hätte, mutig zu wirken? Diese neutrale Antwort ist oft die richtige.`
      },
      beziehungskrise: {
        autopilot: `Entweder eskaliert die Krise – man kämpft, konfrontiert, macht den anderen für alles verantwortlich – oder man flüchtet: neue Aktivitäten, andere Kontakte, alles außer dem eigentlichen Gespräch.`,
        bewusstheit: `Schützt das Kämpfen oder Flüchten gerade dich – oder vertieft es die Krise? Was wäre, wenn du einen Moment einfach stehenbleibst?`,
        uebung: `Sage dem anderen ruhig, was dich verletzt hat – ohne Vorwurf, ohne Drama. Nur: „Das hat mich getroffen, weil..." Mehr nicht. Beobachte, was dann passiert.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel kippt leicht in Misstrauen: Stimmt das wirklich, was ich denke? Und wenn es stimmt – bin ich dann mutig genug, es zu tun? Oder zu feige? Man zweifelt an der Einschätzung und an der eigenen Reaktion auf sie.`,
        bewusstheit: `Was weißt du gerade – nicht was du befürchtest? Und was würde ein mutiger, aber ruhiger Mensch in deiner Lage jetzt tun?`,
        uebung: `Triff heute eine kleine, klare Entscheidung ohne langes Abwägen. Dann stehe dazu, auch wenn Zweifel kommt. Beobachte: Was passiert wirklich?`
      },
      verlust: {
        autopilot: `Verlust erzeugt innere Zerrissenheit: Der Schmerz ist da, aber man zweifelt an ihm. War das wirklich so wichtig? Hätte ich es verhindern können? Die Trauer kippt zwischen Intensität und Selbstzweifel.`,
        bewusstheit: `Was wäre, wenn dein Schmerz berechtigt ist – ohne Rechtfertigung, ohne Vergleich? Er ist einfach da. Das reicht.`,
        uebung: `Schreibe heute einen Satz: „Ich trauere um …, weil …" Lass ihn stehen, ohne ihn zu hinterfragen. Das ist genug.`
      },
      ueberforderung: {
        autopilot: `Überforderung erzeugt Zerrissenheit: einerseits kämpft man dagegen an (konterphobisch), andererseits lähmt die Angst das Handeln. Man wechselt zwischen Überforderungs-Angriff und Erstarrung.`,
        bewusstheit: `Was wäre der nächste kleine, sichere Schritt – nicht die ganze Lösung, nur der nächste Schritt?`,
        uebung: `Schreibe die drei dringendsten Aufgaben auf. Dann tue die erste – nur die erste. Alles andere existiert für jetzt nicht. Beobachte, was das löst.`
      },
      stagnation: {
        autopilot: `Stagnation kippt zwischen Lähmung und Aufbegehren: Entweder man kämpft dagegen an und rennt los, oder man erstarrt. Die innere Leere wird selten einfach ausgehalten.`,
        bewusstheit: `Was wäre, wenn du heute weder kämpfst noch lähmst – sondern einfach sitzt und schaust, was kommt?`,
        uebung: `Halte heute inmitten der Leere inne. Zehn Minuten ohne Ablenkung. Dann frage: Was meldet sich leise aus der Tiefe? Schreibe es auf.`
      },
    },

    "SE7": {
      erschoepfung: {
        autopilot: `Die Ablenkung nimmt zu. Noch eine Aktivität, noch ein Erlebnis, noch ein Gespräch – alles, um nicht bei der Erschöpfung anzukommen. Das funktioniert kurzfristig und erschöpft langfristig noch mehr.`,
        bewusstheit: `Wohin flüchtest du gerade – und was würdest du spüren, wenn du nicht flüchten würdest?`,
        uebung: `Sitz für zehn Minuten ohne Ablenkung. Wenn der Impuls kommt, etwas zu tun oder zu wechseln – beobachte ihn. Benenne ihn: "Das ist der Fluchtimpuls." Bleib.`
      },
      konflikt: {
        autopilot: `Im Konflikt tritt der Reframing-Impuls in Kraft: Das halb volle Glas wird betont, das Problem heruntergespielt, das Thema umgeleitet. Man möchte den Konflikt auflösen – ohne wirklich in ihn hineinzugehen.`,
        bewusstheit: `Was wird gerade unter dem Humor oder der Umlenkung vergraben – und was wäre, wenn du es liessest, oben zu bleiben?`,
        uebung: `Bleibe einmal bei einem unangenehmen Konfliktmoment, ohne ihn aufzuhellen oder umzulenken. Halte den Raum offen. Beobachte, was dann kommt.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird weggelenkt – neue Pläne, neue Ideen, neue Ablenkungen. Man redet sich ein, dass man das Alleinsein mag, dass man Freiheit braucht. Darunter liegt manchmal eine Sehnsucht, die man sich nicht eingestehen möchte.`,
        bewusstheit: `Was wäre, wenn du die Einsamkeit nicht wegoptimierst, sondern einen Moment wirklich darin sitzt? Was kommt dann?`,
        uebung: `Sitz heute zehn Minuten ohne Plan, ohne nächste Idee. Lass die Stille kommen. Was zeigt sich, wenn das Rauschen aufhört?`
      },
      entscheidung: {
        autopilot: `Man springt schnell zur Entscheidung – um die Optionen offenzuhalten, um das Unbehagen des Wartens zu vermeiden. Gleichzeitig werden die Alternativen im Hinterkopf behalten. Man hat entschieden, aber noch nicht wirklich losgelassen.`,
        bewusstheit: `Hast du diese Entscheidung wirklich getroffen – oder hältst du sie noch offen? Was wäre, wenn du sie jetzt wirklich abschliesst?`,
        uebung: `Entscheide dich – und schließe die Tür zu den Alternativen bewusst. Sage laut: Diese Option lasse ich los. Beobachte, was das in dir auslöst.`
      },
      beziehungskrise: {
        autopilot: `Man reframt die Krise: „Das ist nur eine schwierige Phase", „Wir wachsen gerade", „Das wird besser." Die eigentliche Spannung wird umgedeutet statt angeschaut. Der andere fühlt sich damit nicht gehört.`,
        bewusstheit: `Was wäre, wenn du die Krise einmal so stehenlässt, wie sie ist – ohne sie aufzuhellen? Was würdest du dann sehen und sagen?`,
        uebung: `Sag dem anderen: „Ich merke, dass es gerade nicht gut läuft zwischen uns." Ohne Lösung, ohne positiven Rahmen. Nur die Wahrnehmung, klar und direkt.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird schnell wegoptimiert: Das wird besser, ich schaffe das, kein Grund zur Sorge. Aber darunter liegt manchmal eine tiefere Frage, die nie gestellt wird: Bin ich wirklich genug – wenn der Glanz weg ist?`,
        bewusstheit: `Was wäre, wenn du den Selbstzweifel einmal wirklich sitzenließest – nur für einen Moment, ohne ihn zu lösen? Was zeigt er dir?`,
        uebung: `Schreibe auf, was du gerade an dir bezweifelst – ehrlich, ohne es aufzuhellen. Dann frage dich: Was ist an diesem Zweifel ein echter Hinweis, und was ist Angst in Verkleidung?`
      },
      verlust: {
        autopilot: `Verlust wird schnell neu gerahmt: Es wird besser, ich lerne daraus, das war vielleicht gut so. Die Reframing-Strategie schützt vor dem vollen Schmerz – und manchmal vor dem, was er sagen will.`,
        bewusstheit: `Was wäre, wenn du diesen Verlust heute nicht neu rahmst – sondern einfach verlierst? Was würde das zeigen?`,
        uebung: `Sitz heute zehn Minuten mit dem, was du verloren hast – ohne es umzudeuten, ohne es zu bereichern. Nur: Das ist weg. Das schmerzt. Lass das stimmen.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird weggeredet oder umgelenkt: Es gibt noch so viele spannende Möglichkeiten, neue Ideen, andere Projekte. Der Druck wird durch Ablenkung gemindert statt gelöst.`,
        bewusstheit: `Was wäre, wenn du heute bei dem bleibst, was gerade drückt – ohne weiterzuziehen zur nächsten Idee? Was zeigt sich dann?`,
        uebung: `Wähle heute die eine Aufgabe, die am längsten wartet. Setz einen Timer auf 45 Minuten. Nur diese Aufgabe. Kein Wechseln, kein Ablenken. Dann sieh, was du geschafft hast.`
      },
      stagnation: {
        autopilot: `Stagnation wird als unerträglich empfunden: Man springt zur nächsten Idee, zum nächsten Erlebnis, zum nächsten Plan. Die Leere wird sofort gefüllt, bevor sie etwas sagen kann.`,
        bewusstheit: `Was wäre, wenn du die Leere heute nicht füllst – und wartest, was sie zeigt? Was hast du bisher vielleicht überhört?`,
        uebung: `Sitz heute eine halbe Stunde ohne Plan, ohne Ziel, ohne Ablenkung. Wenn die Unruhe kommt, bleib. Beobachte, was sich darunter zeigt.`
      },
    },

    "SO7": {
      erschoepfung: {
        autopilot: `Man opfert sich weiter für die Gruppe, die Aufgabe, die Gemeinschaft – weil das dem eigenen Schmerz eine höhere Bedeutung gibt. Die Erschöpfung bekommt einen edlen Rahmen, der das Innehalten überflüssig erscheinen lässt.`,
        bewusstheit: `Für wen opferst du dich gerade – und wäre es für diese Menschen wirklich gut, wenn du dich weiter erschöpfst?`,
        uebung: `Formuliere heute einen einzigen Satz, der mit "Ich tue das für mich, weil..." beginnt – nicht für die Gruppe, nicht für andere. Beobachte, ob und wie schwer das fällt.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Versöhnung, das gute Ende schnell in den Blick genommen – manchmal bevor der eigentliche Schmerz wirklich da war. Man möchte wieder in den hellen Raum.`,
        bewusstheit: `Wäre es erlaubt, dass dieser Konflikt noch eine Weile daürt – und dass das in Ordnung ist?`,
        uebung: `Bleibe eine Weile im Unbehagen des Konflikts, ohne zur Lösung zu drängen. Frage den anderen: „Was brauchst du gerade?” Höre wirklich zu.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bekommt einen höheren Sinn: Man widmet sich der Gemeinschaft, einem Projekt, einer Idee. Die eigene Einsamkeit verschwindet im Dienst an etwas Größerem. Aber darunter bleibt die Sehnsucht nach echter persönlicher Verbindung.`,
        bewusstheit: `Wem bist du gerade nah – wirklich nah, als Mensch, nicht als Mitstreiter? Gibt es jemanden, der dich kennt, nicht nur schätzt?`,
        uebung: `Suche heute eine persönliche Begegnung – ohne Projektbezug, ohne Gruppenrahmen. Einfach zwei Menschen miteinander. Beobachte, was das in dir bewegt.`
      },
      entscheidung: {
        autopilot: `Man rahmt die Entscheidung so, dass jede Option positiv klingt – ein inneres Reframing, das die Wahl leichter erscheinen lässt. Aber darunter bleibt die ungelöste Frage, welche Option wirklich die richtige ist.`,
        bewusstheit: `Was wäre, wenn du die Entscheidung einmal ohne positiven Rahmen anschaust? Was würdest du dann sehen – und was würdest du dann wählen?`,
        uebung: `Schreibe auf, was an jeder Option wirklich schwierig ist. Dann wähle trotzdem. Nicht weil es leicht ist – sondern weil es dich weiterbringt.`
      },
      beziehungskrise: {
        autopilot: `Man widmet sich der Gemeinschaft, einer Idee, einem Projekt – und die persönliche Beziehungskrise bekommt einen höheren Rahmen. Was zwischen zwei Menschen wirklich gesagt werden muss, bleibt ungesagt.`,
        bewusstheit: `Versteckst du dich gerade hinter einer größeren Aufgabe – um der Stille dieser einen Beziehung nicht begegnen zu müssen?`,
        uebung: `Verbring heute Zeit mit diesem Menschen – nur ihr beide, ohne Aufgabe, ohne Projekt. Lass das entstehen, was entstehen muss.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird in einen höheren Sinn gebettet: Vielleicht ist dieser Schmerz Teil des Weges. Vielleicht wachse ich gerade. Die Reframing-Strategie schützt davor, den Zweifel wirklich zu fühlen.`,
        bewusstheit: `Was wäre, wenn dieser Zweifel gerade einfach Zweifel ist – ohne höheren Sinn, ohne Wachstums-Rahmen? Was würdest du dann tun?`,
        uebung: `Sitz heute zehn Minuten mit dem Zweifel – ohne ihn zu transformieren. Benenne ihn: „Ich zweifle gerade daran, dass …“ Dann atme. Das reicht.`
      },
      verlust: {
        autopilot: `Verlust wird in Bedeutung gekleidet: Vielleicht war das sein Sinn. Vielleicht wächst man daran. Die Sinnsuche hilft – aber manchmal zu früh, bevor der Schmerz wirklich da war.`,
        bewusstheit: `Was wäre, wenn dieser Verlust noch keinen Sinn hat – und das gerade in Ordnung ist? Darf Trauer sinnlos sein, bevor sie sinnvoll wird?`,
        uebung: `Schreibe heute auf, was du verloren hast – ohne Sinn, ohne Moral, ohne Wachstum. Nur: Das war, und jetzt ist es nicht mehr. Wie fühlt sich das an?`
      },
      ueberforderung: {
        autopilot: `Man visioniert sich aus dem Druck heraus: Das alles wird bald besser, das große Bild ist ja sinnvoll. Die Energie fließt in Ideen und Pläne – während die konkrete Überforderung bleibt.`,
        bewusstheit: `Was muss heute konkret erledigt werden – jenseits aller Visionen? Welche eine Sache bringt dich heute wirklich weiter?`,
        uebung: `Schreibe heute eine Liste mit maximal drei Aufgaben. Nur drei. Erledige sie, bevor du neue planst. Beobachte, wie befriedigend das ist.`
      },
      stagnation: {
        autopilot: `Man überbrückt die Leere mit Visionen und Plänen: Das nächste große Projekt, das nächste Abenteuer, der nächste Sinn. Die Stagnation bleibt unsichtbar hinter den Ideen.`,
        bewusstheit: `Was wäre, wenn du heute keine neue Vision entwirfst – sondern mit dem Jetzt sitzt? Was ist gerade wirklich da?`,
        uebung: `Verbringe heute einen Abend ohne Planung. Kein Notizbuch, kein Brainstorming. Nur: Was ist jetzt? Lass die Antwort still entstehen.`
      },
    },

    "SX7": {
      erschoepfung: {
        autopilot: `Die nächste Begeisterung, das nächste Projekt, die nächste intensive Verbindung – immer weiter. Erschöpfung wird mit Stimulation überschrieben. Der Motor läuft, auch wenn der Tank leer ist.`,
        bewusstheit: `Was käme zum Vorschein, wenn du aufhören würdest, das nächste Feuer zu suchen? Was liegt unter der Begeisterung, die du gerade verfolgst?`,
        uebung: `Setze heute eine einzige Begeisterung bewusst auf Pause. Sitz mit der Stille, die dann entsteht. Beobachte, was auftaucht – ohne es sofort in das nächste Vorhaben zu verwandeln.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann die Energie plötzlich sehr gross werden – leidenschaftlich, überzeugt, fast begeistert für die eigene Position. Und dann, genauso plötzlich, lässt das Interesse nach, und man ist gedanklich schon woanders.`,
        bewusstheit: `Nimmst du den Konflikt des anderen wirklich ernst – auch wenn dein Interesse daran schon nachlässt?`,
        uebung: `Bleibe bei dem Thema bis zum Ende – auch wenn es aufgehört hat, spannend zu sein. Frage: „Haben wir das wirklich geklärt?”`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit dem nächsten Abenteuer, dem nächsten intensiven Erlebnis oder der nächsten leidenschaftlichen Verbindung überschrieben. Solange es Funken gibt, fühlt man sich lebendig und verbunden.`,
        bewusstheit: `Was wäre, wenn du heute bei einer einzigen Verbindung bleibst – und sie vertiefst, statt sie zu wechseln? Was könnte da entstehen?`,
        uebung: `Wähle eine Beziehung, die dir wichtig ist, und investiere heute bewusst in sie – ein Gespräch, ein Moment der wirklichen Präsenz. Kein Ablenken, kein nächstes Thema.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird auf die intensive Verbindung hin ausgerichtet: Was hält uns zusammen? Was stärkt das, was uns verbindet? Eigene Bedürfnisse und langfristige Perspektiven können dabei aus dem Blick geraten.`,
        bewusstheit: `Entscheidest du gerade für die Verbindung – oder für dich in der Verbindung? Gibt es einen Unterschied, und kennst du ihn?`,
        uebung: `Frage dich: Was würde ich wählen, wenn diese Verbindung nicht auf dem Spiel stünde? Nimm diese Antwort als eine der Stimmen in deiner Entscheidung.`
      },
      beziehungskrise: {
        autopilot: `Die Krise der Beziehung wird zum Alles-oder-Nichts: Entweder es stimmt alles – oder es endet. Man fordert vollständige Klarheit, vollständiges Bekenntnis, vollständige Präsenz. Nuancen werden nicht toleriert.`,
        bewusstheit: `Was wäre, wenn diese Beziehung gerade weder perfekt noch beendet ist – sondern einfach in einem schwierigen Moment? Gibt es einen Raum dazwischen, den du noch nicht betrachtet hast?`,
        uebung: `Frage den anderen, ohne sofort zu werten: „Was brauchst du von mir – konkret, heute?" Dann antworte mit dem, was du geben kannst. Nicht dem, was ideal wäre – dem, was wirklich möglich ist.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird mit der nächsten Begeisterung überschrieben: eine neue Idee, ein neues Projekt, eine neue Verbindung. Die Intensität schützt vor der Stille, in der der Zweifel gehört werden müsste.`,
        bewusstheit: `Was würdest du hören, wenn du die Begeisterung einen Moment pausierst und wirklich zuhörst – in dich hinein?`,
        uebung: `Halt heute inne, bevor du zur nächsten Idee springst. Frage dich in der Stille: Was bezweifle ich gerade – wirklich? Lass die Antwort kommen, ohne sie sofort zu lösen.`
      },
      verlust: {
        autopilot: `Verlust erzeugt intensive Reaktionen: Schmerz, der schnell in neue Intensität umschlägt – ein neues Erlebnis, ein neuer Mensch, eine neue Idee. Die Energie zieht weiter, bevor die Trauer sich setzen kann.`,
        bewusstheit: `Was wäre, wenn du heute bei dem bleibst, was du verloren hast – ohne weiterzuziehen? Was zeigt sich, wenn du stillhältst?`,
        uebung: `Bleib heute einen Moment bei der Erinnerung an das Verlorene. Kein Ablenken, kein Weitergehen. Nur: Ich war hier, das war wirklich. Ich vermisse es.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird mit Intensität bekämpft: Man taucht tiefer in das ein, was Freude macht, springt zu neuen Erlebnissen, sucht die nächste Energie. Der Druck bleibt im Hintergrund, bis er bricht.`,
        bewusstheit: `Was wäre, wenn du heute die Energie, die du in neue Erlebnisse steckst, in die liegengebliebene Aufgabe lenkst?`,
        uebung: `Wähle heute eine Aufgabe, die du immer wieder hinausschiebst. Erledige sie in einem Zug – dann gönn dir etwas Schönes als echte Belohnung danach.`
      },
      stagnation: {
        autopilot: `Ohne Intensität fühlt sich das Leben schal an: Man sucht das nächste Hochgefühl, die nächste Begegnung, das nächste Feuer. Die Leere ist kaum auszuhalten.`,
        bewusstheit: `Was wäre, wenn die Stille gerade ein Atemraum ist und nicht das Gegenteil von Leben? Was würdest du hören, wenn du stillhältst?`,
        uebung: `Bleib heute bei einer einzigen, einfachen Aktivität – kochen, gehen, zeichnen – und sei vollständig dabei. Kein Wechseln. Beobachte, ob sich etwas öffnet.`
      },
    },

    "SE8": {
      erschoepfung: {
        autopilot: `Mehr Kontrolle, mehr Einsatz, mehr Willen – das ist die automatische Antwort auf Erschöpfung. Schwäche zeigen ist keine Option. Der Körper wird durch Willenskraft überspielt, bis er sich Gehör verschafft.`,
        bewusstheit: `Was würde es bedeuten, gerade schwach zu sein – nur für diesen einen Moment, in dir selbst, ohne dass es jemand sieht?`,
        uebung: `Leg dich bewusst hin – nicht aus Erschöpfung, sondern als freie Entscheidung. Bleibe fünf Minuten ohne Bewegungsdrang. Beobachte, wie dein inneres System auf diese gewählte Passivität reagiert.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird Macht eingesetzt – klar, direkt, manchmal überwältigend. Man will Klarheit erzwingen, das Feld ordnen, die Sache beenden. Andere können sich dabei überrollt fühlen.`,
        bewusstheit: `Kämpfst du gerade um das Thema – oder um die Kontrolle? Was wäre, wenn du den Konflikt nicht gewinnen müsstest?`,
        uebung: `Mache im Konflikt einen Schritt zurück – buchstäblich oder bildlich. Gib dem anderen Raum zu sprechen, ohne zu unterbrechen. Beobachte, was dabei entsteht.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird nicht leicht zugegeben – sie fühlt sich wie Schwäche an. Man bleibt aktiv, unabhängig, stark. Aber darunter liegt manchmal eine tiefe Sehnsucht nach jemandem, dem man sich wirklich zeigen kann.`,
        bewusstheit: `Gibt es jemanden, dem du dich wirklich zeigen könntest – ohne Stärke zu performen? Und lässt du das zu?`,
        uebung: `Suche heute die Nähe einer Person, der du vertraust – nicht um etwas zu tun oder zu schaffen. Nur um da zu sein. Zusammen. Beobachte, was das in dir auslöst.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden schnell und klar getroffen – Zögern gilt als Schwäche. Man handelt, bevor alle Informationen da sind, weil Abwarten sich falsch anfühlt. Manchmal wird eine schlechte Entscheidung lieber verteidigt als revidiert.`,
        bewusstheit: `Was wäre, wenn du diese Entscheidung einen Moment pausierst – nicht aus Angst, sondern aus Stärke? Wer trifft die bessere Wahl: der, der sofort handelt, oder der, der erst wirklich hinschaut?`,
        uebung: `Warte 24 Stunden, bevor du diese Entscheidung umsetzt. Frage dich am nächsten Tag: Ist das immer noch meine Wahl? Wenn ja – dann handle mit voller Kraft.`
      },
      beziehungskrise: {
        autopilot: `Man kämpft oder schneidet ab. Entweder wird der Konflikt direkt und hart angegangen – oder man zieht sich hinter Stärke zurück, zeigt nichts, macht weiter. Beides lässt wenig Raum für echte Verbindung.`,
        bewusstheit: `Was wäre, wenn du in dieser Krise einen Schritt auf den anderen zu machst – ohne Schwäche, aber ohne Rüstung? Was würde sich dann zwischen euch bewegen?`,
        uebung: `Sage dem anderen heute etwas Echtes – nicht die Forderung, nicht die Stärke. Etwas, das zeigt, dass du wirklich da bist: „Mir liegt diese Beziehung wirklich am Herzen."`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel existiert – wird aber nicht gezeigt. Nach außen: Stärke, Kontrolle, Entschlossenheit. Innen: manchmal eine tiefe Frage, ob man wirklich so stark ist, wie man wirkt. Diese Frage wird bekämpft statt beantwortet.`,
        bewusstheit: `Was wäre, wenn du den Zweifel nicht bekämpfst, sondern einmal stehenlässt? Stärke schließt Zweifel nicht aus – sie besteht trotzdem.`,
        uebung: `Schreib heute einen Satz, der mit „Ich bin unsicher, ob …" beginnt – nur für dich, kein Publikum. Dann lies ihn. Das ist auch du.`
      },
      verlust: {
        autopilot: `Verlust löst Widerstand aus: Man kämpft, verdrängt, überwältigt den Schmerz mit Stärke. Trauer fühlt sich wie Schwäche an – also wird sie bekämpft. Das kostet Kraft, ohne zu heilen.`,
        bewusstheit: `Was wäre, wenn Trauer keine Schwäche ist – sondern ein Zeichen, dass dir etwas wirklich wichtig war? Kann das stark sein?`,
        uebung: `Erlaube dir heute, traurig zu sein – nicht wütend, nicht stark, nur traurig. Zehn Minuten, in Stille. Du musst das niemandem zeigen. Nur dir selbst erlauben.`
      },
      ueberforderung: {
        autopilot: `Überforderung zeigt sich als Verdichtung: mehr Energie, mehr Kontrolle, mehr Druck auf andere und sich selbst. Man kämpft sich durch statt zu priorisieren. Der Körper meldet sich irgendwann.`,
        bewusstheit: `Was wäre, wenn du heute nicht mehr Druck erzeugst – sondern Dinge weglässt? Was ist wirklich nicht dringend?`,
        uebung: `Streiche heute drei Dinge von der Liste, die du heute tun wolltest. Nicht verschieben – wirklich loslassen. Dann beobachte: Ist etwas eingebrochen?`
      },
      stagnation: {
        autopilot: `Stagnation wird nicht geduldet: Man kämpft dagegen an, erzeugt Druck, sucht das nächste Ziel. Stillstand fühlt sich wie Schwäche an. Die Energie richtet sich gegen die Leere – und erschöpft sich.`,
        bewusstheit: `Was wäre, wenn du die Stagnation heute nicht bekämpfst – sondern sie einfach da sein lässt? Was würde das bedeuten?`,
        uebung: `Erlaube dir heute, nichts zu bewegen. Einen halben Tag ohne Agenda, ohne Druck, ohne Kämpfen. Beobachte, was in der Stille entsteht, wenn du nicht kämpfst.`
      },
    },

    "SO8": {
      erschoepfung: {
        autopilot: `Man trägt weiter für die Gruppe – schützt, führt, organisiert. Die eigene Erschöpfung wird hinter Stärke verborgen, weil die anderen einen brauchen. Innehalten bedeutet, die Schutzfunktion zu gefährden.`,
        bewusstheit: `Wer schützt dich gerade? Und wäre es so schlimm, das heute einmal zuzulassen?`,
        uebung: `Teile mit jemandem aus deinem inneren Kreis ehrlich mit, wie es dir geht – ohne Führungsgestus, ohne Schutzimpuls. Einfach: "Ich bin gerade erschöpft." Beobachte, was das in dir und im anderen bewegt.`
      },
      konflikt: {
        autopilot: `Im Konflikt, der jemanden betrifft, der zur eigenen Gruppe gehört, kann die Reaktion sehr schnell und sehr gross werden. Schutz geht über Verhältnismäßigkeit. Die Energie ist sofort voll da.`,
        bewusstheit: `Ist das, was gerade passiert, wirklich eine Bedrohung – oder reagiert dein Schutzimpuls auf etwas, das er als Bedrohung liest, ohne es wirklich zu prüfen?`,
        uebung: `Bevor du eingreifst: Frage zuerst die betroffene Person, was sie braucht. Vielleicht braucht sie etwas anderes als Schutz.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit zeigt sich als Schutzbedürfnis für andere – man umgibt sich mit der eigenen Gruppe, sorgt für sie, hält sie zusammen. Das eigene Alleinsein wird im Dienst für andere aufgelöst.`,
        bewusstheit: `Wer sorgt für dich – nicht als Führungskraft, nicht als Beschützer, sondern als Mensch? Gibt es jemanden, dem du das erlaubst?`,
        uebung: `Erlaube dir heute, von jemandem umsorgt zu werden – auch wenn es sich ungewohnt anfühlt. Nimm Fürsorge an, ohne sie sofort zu erwidern.`
      },
      entscheidung: {
        autopilot: `Man entscheidet für die Gruppe – was hält sie zusammen, was schützt sie, was stärkt die gemeinsame Position? Die eigene Präferenz wird dem kollektiven Nutzen untergeordnet, manchmal ohne es zu merken.`,
        bewusstheit: `Entscheidest du gerade für die Gruppe – und würdest du dasselbe wählen, wenn es nur um dich ginge? Kennst du den Unterschied?`,
        uebung: `Sprich die Entscheidung zuerst mit dir selbst durch: Was will ich? Dann: Was braucht die Gruppe? Dann entscheide, welche Stimme hier wirklich führen soll.`
      },
      beziehungskrise: {
        autopilot: `Man schützt die eigenen Leute – und wer in diesem Kreis zur Bedrohung wird, wird konfrontiert oder ausgeschlossen. Beziehungskrisen innerhalb des Schutzkreises werden manchmal übersehen, weil man nach außen schaut.`,
        bewusstheit: `Gibt es jemanden in deinem engsten Kreis, dem du gerade nicht wirklich zugehört hast – weil du beschäftigt warst mit Schützen statt mit Verbinden?`,
        uebung: `Sitz heute mit dieser Person zusammen – ohne Schutzimpuls, ohne Führungsgestus. Frage einfach: „Wie geht es dir und uns?" Dann höre zu.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird zur Bedrohung erklärt: Er wird bekämpft, weggedrückt, durch noch mehr Einsatz für die Gruppe überwältigt. Wer an sich selbst zweifelt, schützt die anderen noch mehr – als würde das den Zweifel auslöschen.`,
        bewusstheit: `Was wäre, wenn du den Zweifel nicht bekämpfst, sondern der Person zeigst, der du wirklich vertraust – und mit ihr darüber sprichst?`,
        uebung: `Sag heute jemandem, dem du wirklich vertraust, was du bezweifelst. Nicht als Schwäche verpackt – als Tatsache: „Ich bin gerade unsicher, ob …" Lass die Antwort kommen.`
      },
      verlust: {
        autopilot: `Man trägt die Trauer der Gruppe mit und hält dabei die eigene zurück. Stärke für andere – das ist die Rolle. Der eigene Schmerz bleibt ungesehen, weil er die Stärke gefährdet.`,
        bewusstheit: `Wer trägt deinen Schmerz – wenn du gerade alle anderen trägst? Gibt es einen Menschen, dem du heute deine Trauer zeigen kannst?`,
        uebung: `Suche heute einen Menschen, dem du wirklich vertraust, und sage: „Ich trauere gerade." Nur das. Keine Erklärung, keine Stärke. Lass ihn antworten.`
      },
      ueberforderung: {
        autopilot: `Man übernimmt Verantwortung für die Gruppe über die eigenen Grenzen hinaus: Wer führt, gibt nicht nach. Der eigene Erschöpfungszustand wird ignoriert oder vor anderen verborgen.`,
        bewusstheit: `Was wäre, wenn du als Führungsperson heute Grenzen setzt – und damit ein Beispiel gibst statt Schwäche zu zeigen?`,
        uebung: `Delegiere heute eine konkrete Aufgabe, die du normalerweise selbst übernehmen würdest. Sage klar, was du brauchst. Lass den anderen es erledigen – ohne zu kontrollieren.`
      },
      stagnation: {
        autopilot: `Ohne Kampf oder Schutzaufgabe für die Gruppe fehlt der Antrieb. Man sucht nach einem neuen Feind, einer neuen Herausforderung, einem neuen Projekt – um die Leere zu überbrücken.`,
        bewusstheit: `Was wäre, wenn Stärke heute nicht im Kämpfen liegt – sondern im Innehalten und Zuhören? Was würde die Stille dir sagen?`,
        uebung: `Setz dich heute mit jemandem aus der Gruppe zusammen – nicht um zu führen oder zu schützen, sondern um zu hören: Wie geht es euch? Was braucht ihr?`
      },
    },

    "SX8": {
      erschoepfung: {
        autopilot: `Die Intensität bleibt, auch wenn die Energie fehlt. Man kämpft, hält, fordert – und spürt nicht, wie tief die Erschöpfung wirklich geht. Der Körper wird herausgefordert statt gehört.`,
        bewusstheit: `Unter welcher Intensität liegt gerade Erschöpfung – und was müsstest du loslassen, um sie wirklich zu spüren?`,
        uebung: `Lege für einen Moment alle Intensität ab. Atme langsam. Fühle, wie erschöpft du wirklich bist – ohne das sofort zu bekämpfen. Benenne es einfach: "Das bin ich gerade."`
      },
      konflikt: {
        autopilot: `Im Konflikt gibt es kein Halten mehr – die volle Energie ist sofort da, direkt, intensiv, fordernd. Kein Schritt zurück. Das kann klären – und es kann zerstören.`,
        bewusstheit: `Nimmst du dir einen Moment, bevor du mit voller Kraft einsteigst – nur um zu prüfen, ob das die richtige Situation für diese Energie ist?`,
        uebung: `Atme einmal durch, bevor du antwortest – nicht um dich zurückzuhalten, sondern um zu wählen. Was sagst du, wenn du wählst statt reagierst?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit löst einen tiefen Hunger nach Verschmelzung aus – nach einer Verbindung, die alles umfasst und ausfüllt. Wenn diese Verbindung fehlt, entsteht ein nagender innerer Mangel.`,
        bewusstheit: `Was brauchst du wirklich in diesem Moment – Verschmelzung, oder einfach echten Kontakt? Gibt es eine Person, bei der echtes Da-sein genug wäre?`,
        uebung: `Suche heute eine einfache körperliche Nähe – ein Gespräch, ein gemeinsames Schweigen, ein Spaziergang nebeneinander. Nicht Intensität, sondern Präsenz.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden impulsiv und mit voller Kraft getroffen – oder auf den wichtigsten Menschen hin ausgerichtet: Was passt zu uns, zu dieser Verbindung? Die eigene, stille Stimme geht in der Intensität unter.`,
        bewusstheit: `Was willst du – du selbst, ruhig und klar – in dieser Entscheidung? Gibt es eine Antwort in dir, die du noch nicht wirklich gehört hast?`,
        uebung: `Geh für einen kurzen Spaziergang allein. Frage dich dabei: Was würde ich wählen, wenn niemand davon wüsste? Dann schreibe die Antwort auf.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird mit Intensität überwältigt – man kämpft voll, fordert vollständige Klärung, Verschmelzung, Verbindlichkeit. Wenn der andere das nicht halten kann, kommt der totale Rückzug.`,
        bewusstheit: `Ist das, was du gerade forderst, wirklich das, was die Beziehung braucht – oder ist es das, was du innerlich schon immer gesucht hast? Gibt es einen Unterschied?`,
        uebung: `Nenne dem anderen heute einen konkreten Wunsch: „Ich wünsche mir, dass ..." – und fülle ihn mit etwas Erreichbarem. Nicht dem Ideal. Dem Möglichen.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel kommt als Erschütterung – und wird sofort mit Intensität beantwortet: mehr Energie, mehr Entschlossenheit, mehr Kraft. Aber der eigentliche Zweifel bleibt darunter unberührt.`,
        bewusstheit: `Was würdest du hören, wenn du die Intensität einen Moment loslässt – und einfach da bist, mit dem Zweifel, ohne ihn zu bekämpfen?`,
        uebung: `Geh heute in absolute Stille – kein Gespräch, keine Musik, kein Handy – für zwanzig Minuten. Lass kommen, was kommt. Benenne es danach in einem Satz.`
      },
      verlust: {
        autopilot: `Verlust erzeugt intensive Energie: Zorn, Schmerz, Trauer – alles kommt gleichzeitig und mit voller Wucht. Das kann überwältigend sein. Die Intensität schützt manchmal davor, die Verletzlichkeit wirklich zu spüren.`,
        bewusstheit: `Was liegt unter dem Zorn oder der Intensität? Was ist der stille Kern dieses Verlustes – jenseits der Wucht?`,
        uebung: `Geh heute in Stille – kein Gespräch, keine Musik. Frage dich: Was vermisse ich wirklich? Lass die Antwort leise kommen. Sie muss nicht laut sein.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird mit Intensität beantwortet: Man drängt durch, kämpft, gibt nicht nach. Die Grenze zwischen gesundem Durchbeißen und selbstschädigendem Druck verschwimmt.`,
        bewusstheit: `Wo ist gerade die Grenze zwischen kraftvoll und selbstschädigend? Was würde ein Mentor, dem du vertraust, dir heute raten?`,
        uebung: `Halte heute einmal inne, bevor du eine Entscheidung unter Druck triffst. Drei Atemzüge. Dann entscheide. Beobachte, ob die Entscheidung anders wird.`
      },
      stagnation: {
        autopilot: `Ohne Intensität und Gegner fühlt sich das Leben flach an. Man sucht das nächste Feuer, den nächsten Konflikt, die nächste Herausforderung – nur um lebendig zu sein.`,
        bewusstheit: `Was wäre, wenn Lebendigkeit auch in der Stille möglich ist – ohne Kampf, ohne Feuer? Was bleibt von dir, wenn alles ruhig ist?`,
        uebung: `Geh heute allein in die Natur – ohne Ziel, ohne Aufgabe. Sitz irgendwo und lass die Stille kommen. Frage dich: Was bin ich, wenn ich nicht kämpfe?`
      },
    },

    "SE9": {
      erschoepfung: {
        autopilot: `Man greift zu den vertrauten Tröstungen: Gewohnheiten, Rückzug, das Dämpfen des Unruhegefühls. Die Erschöpfung wird betäubt, aber nicht gehört. Alles läuft weiter – im Autopiloten.`,
        bewusstheit: `Was betäubst du gerade – und was würdest du hören, wenn du einen Moment wirklich innehieltest?`,
        uebung: `Lass eine der vertrauten Gewohnheiten heute bewusst aus. Sitz mit dem Unbehagen, das dann entsteht. Frage dich in aller Stille: Was will gerade wirklich gehört werden?`
      },
      konflikt: {
        autopilot: `Im Konflikt liegt der Impuls, ihn zu vermeiden, abzumildern, zu beschwören. Man gibt nach, stimmt zu, macht sich kleiner – um den Frieden zu wahren. Innen sammelt sich dabei etwas an, das irgendwann herausbricht.`,
        bewusstheit: `Was verschluckst du gerade – und wie lange geht das noch gut?`,
        uebung: `Sage einmal eine klare, ruhige Meinung in diesem Konflikt – nicht um zu kämpfen, sondern weil du eine Meinung hast. Beobachte, was passiert, wenn du auftauchst.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit Gewohnheiten aufgefüllt: Fernsehen, Essen, Scrollen, Dösen. Man betäubt das Alleinsein, ohne es wirklich zu fühlen. Der Rückzug macht sich unsichtbar, weil er so vertraut ist.`,
        bewusstheit: `Was betäubst du gerade – und was würde auftauchen, wenn du es wirklich fühlen würdest?`,
        uebung: `Mach heute eine Gewohnheit bewusst: Bevor du zum Handy greifst oder den Fernseher einschaltest, halte einen Moment inne. Was brauchst du wirklich? Und ist das, was du gleich tun wirst, wirklich das?`
      },
      entscheidung: {
        autopilot: `Man entscheidet nicht wirklich – man lässt entscheiden. Die Situation, die Gewohnheit, der Zufall übernehmen. Man folgt dem Weg des geringsten Widerstands, ohne bewusst zu wählen.`,
        bewusstheit: `Hast du diese Entscheidung getroffen – oder ist sie einfach passiert? Was wäre es, einmal wirklich zu wählen, auch wenn das Unbehagen kostet?`,
        uebung: `Setze dir einen klaren Entscheidungsmoment: Heute, um [Uhrzeit], treffe ich diese Wahl. Halte diesen Moment ein. Schreibe auf, was du gewählt hast und warum.`
      },
      beziehungskrise: {
        autopilot: `Man hofft, dass die Krise sich von selbst auflöst. Man wartet ab, weicht aus, macht anderes – und die Spannung zwischen den Beteiligten wächst, weil sie nie wirklich angesprochen wird.`,
        bewusstheit: `Löst sich das gerade wirklich auf – oder verdrängt du es und hoffst, es wird weniger? Was würde passieren, wenn du heute das Gespräch initiierst?`,
        uebung: `Sage dem anderen heute: „Ich möchte mit dir über etwas sprechen, das mich beschäftigt." Nur dieser Satz. Dann schau, was kommt.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird betäubt: Ich bin doch in Ordnung, das wird sich schon legen. Man greift zu Gewohnheiten, zieht sich zurück, macht weiter – und die innere Stimme, die etwas sagen will, verstummt im Alltag.`,
        bewusstheit: `Was würdest du hören, wenn du die Gewohnheiten einen Moment weglegst und wirklich fragst: Wie geht es mir eigentlich – ehrlich?`,
        uebung: `Schreibe heute auf, was dein innerer Kritiker sagt – und dann schreibe daneben, was ein wohlwollender Freund sagen würde. Lass beide Stimmen nebeneinander stehen.`
      },
      verlust: {
        autopilot: `Verlust wird in Routine eingebettet: Man macht weiter, betäubt sich mit dem Alltag, schiebt den Schmerz auf. Der Verlust sitzt irgendwo, aber er bekommt keinen Raum, weil Raum sich gefährlich anfühlt.`,
        bewusstheit: `Was trägst du mit dir, das noch keinen Raum hatte? Was wäre, wenn du heute nur zehn Minuten für deinen Schmerz reservierst?`,
        uebung: `Sitz heute mit einem Foto oder einer Erinnerung an das Verlorene. Zehn Minuten. Lass kommen, was kommt – auch Tränen, auch Leere, auch Stille. Alles darf sein.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird still getragen: Man macht weiter, sagt nichts, hofft dass es von selbst besser wird. Der Druck sammelt sich, bis er in Erschöpfung oder plötzlichem Rückzug mündet.`,
        bewusstheit: `Was trägst du gerade, das du eigentlich nicht allein tragen solltest? Gibt es jemanden, dem du heute sagen könntest, was zu viel ist?`,
        uebung: `Schreibe heute auf: Was ist zu viel? Was davon kannst du abgeben? Sag einer Person konkret, was du brauchst – auch wenn es sich seltsam anfühlt.`
      },
      stagnation: {
        autopilot: `Stagnation ist vertraut und fast bequem: Man macht weiter im Trott, meidet Entscheidungen, schiebt auf. Die Leere wird durch Routine betäubt statt durchbrochen.`,
        bewusstheit: `Was wäre, wenn du heute eine kleine, klare Entscheidung triffst – nicht die große, nur eine kleine? Was würde das verändern?`,
        uebung: `Wähle heute etwas, das du schon lange aufgeschoben hast. Mach den ersten Schritt – nur den ersten. Fünf Minuten. Dann schau, was passiert.`
      },
    },

    "SO9": {
      erschoepfung: {
        autopilot: `Man macht weiter mit allem, weil aufhören bedeuten würde, Wellen zu schlagen. Man passt sich an, fügt sich ein, sagt Ja – und spürt kaum, wie die eigene Kraft dabei schwindet.`,
        bewusstheit: `Wessen Erwartungen erfüllst du gerade, obwohl du erschöpft bist? Und wessen Erwartung ist es eigentlich wirklich?`,
        uebung: `Sage heute einmal bewusst Nein zu einer Anfrage oder Erwartung – auch einer kleinen. Beobachte, welcher innere Widerstand entsteht, und wo er sitzt.`
      },
      konflikt: {
        autopilot: `Im Konflikt übernimmt man die Perspektiven aller Beteiligten und versucht zu vermitteln, zu verbinden, zu glätten. Die eigene Position verschwindet dabei oft. Am Ende weiss man nicht mehr genau, wo man selbst steht.`,
        bewusstheit: `Was ist deine eigene Meinung in diesem Konflikt – nicht die ausgewogene Synthese, sondern wirklich deine?`,
        uebung: `Formuliere einmal nur deinen eigenen Standpunkt, ohne die Position des anderen einzubeziehen. Nur: „Ich denke ...” und dann ein klarer Satz.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum als solche erkannt – man verschmilzt mit der Umgebung, der Stimmung, dem Alltag. Das Alleinsein läuft im Hintergrund, während man sich mit dem Außen beschäftigt. Erst in ruhigen Momenten taucht es auf.`,
        bewusstheit: `Wann hast du zuletzt wirklich für dich selbst Kontakt gesucht – nicht weil es sich ergab, nicht weil jemand anderes es wollte, sondern weil du es dir gewünscht hast?`,
        uebung: `Initiiere heute selbst eine Begegnung – nicht abwarten, bis jemand kommt. Wähle aktiv. Beobachte, wie sich das anfühlt, wenn du aus dir heraus auf jemanden zugehst.`
      },
      entscheidung: {
        autopilot: `Man passt sich an: Was erwartet die Gruppe? Was wäre verträglich für alle? Die eigene Stimme wird dabei so weit zurückgestellt, dass sie selbst kaum mehr zu hören ist.`,
        bewusstheit: `Was würdest du wählen, wenn du nur für dich selbst entscheidest – nicht als Teil der Gruppe, nicht als jemand, der Harmonie hält? Gibt es diese Stimme in dir?`,
        uebung: `Schreibe auf, was du willst – ohne Rücksicht auf andere. Nicht um es sofort umzusetzen, sondern um es zu kennen. Diese Stimme hat ein Recht, gehört zu werden.`
      },
      beziehungskrise: {
        autopilot: `Man passt sich an, vermittelt, übernimmt alle Perspektiven – und verliert dabei die eigene. Die Krise wird durch Vermittlung aufgelöst, statt durch Klärung. Niemand weiß, was man selbst eigentlich will.`,
        bewusstheit: `Was willst du in dieser Beziehung – wirklich du, nicht als Kompromiss, nicht als Synthese? Gibt es diese Antwort in dir?`,
        uebung: `Sag dem anderen einmal klar, was dir an dieser Beziehung wichtig ist – nicht als Forderung, sondern als eigene Wahrheit: „Mir ist wichtig, dass ..." Lass ihn antworten.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel führt dazu, dass man sich noch stärker anpasst: Wenn ich nur genug tue, was die anderen brauchen, wird der Zweifel kleiner. Aber er wächst, weil die eigene Stimme dabei immer leiser wird.`,
        bewusstheit: `Wessen Erwartungen versucht dein innerer Kritiker gerade zu erfüllen – und sind das wirklich deine eigenen Maßstäbe?`,
        uebung: `Frage dich heute: Was würde ich tun, wenn ich mir selbst gegenüber genauso fürsorglich wäre wie gegenüber anderen? Tue dann eine einzige Sache davon.`
      },
      verlust: {
        autopilot: `Man trauert still in der Gruppe mit, passt den Schmerz an das Kollektiv an. Der eigene Verlust verschmilzt mit dem gemeinsamen – und die persönliche Tiefe bleibt unberührt.`,
        bewusstheit: `Was verlierst du ganz persönlich – nicht die Gruppe, nicht die Gemeinschaft, sondern du? Gibt es einen eigenen Schmerz darunter?`,
        uebung: `Schreibe heute auf, was dieser Verlust speziell für dich bedeutet – nicht für die anderen, nicht für die Gruppe. Nur deine Sicht. Nur dein Schmerz.`
      },
      ueberforderung: {
        autopilot: `Man harmonisiert unter Druck: nickt zu, übernimmt, gibt nach – um den Frieden zu wahren. Die eigene Überforderung bleibt unsichtbar, weil Konflikte vermieden werden.`,
        bewusstheit: `Was hast du heute zugestimmt, das eigentlich zu viel war? Und was wäre ein freundliches, klares Nein gewesen?`,
        uebung: `Sag heute in einer Situation, wo es zu viel wird, ruhig und freundlich: „Das kann ich gerade nicht übernehmen." Nur diesen Satz. Kein Aber, keine Entschuldigung.`
      },
      stagnation: {
        autopilot: `Man lebt für die Harmonie der Gruppe und verliert dabei den eigenen Impuls: Wohin will ich? Was will ich? Diese Fragen bleiben im Hintergrund, weil die Gruppe Orientierung gibt.`,
        bewusstheit: `Was willst du – du selbst, ganz für dich, ohne Rücksicht auf die Gruppe? Gibt es einen eigenen Wunsch, der schon lange wartet?`,
        uebung: `Schreibe heute auf: Wenn ich allein entscheiden dürfte, ohne jemanden zu enttäuschen – was würde ich als nächstes tun? Dann überleg, ob du den ersten Schritt wagen kannst.`
      },
    },

    "SX9": {
      erschoepfung: {
        autopilot: `Man verschmilzt mit dem Partner, mit der Umgebung, mit dem Strom des Alltags – und merkt kaum, wie erschöpft man ist. Die Grenze zwischen eigener Erschöpfung und der Energie des anderen verschwimmt.`,
        bewusstheit: `Was von dieser Erschöpfung gehört wirklich dir – und was trägst du von anderen? Kannst du das in diesem Moment unterscheiden?`,
        uebung: `Setze dich alleine, ohne Verbindung nach außen. Frage dich: Wie geht es mir – mir allein, in diesem Moment? Lass die Antwort kommen, ohne sie sofort zu teilen.`
      },
      konflikt: {
        autopilot: `Im Konflikt verschmilzt man entweder mit der Energie des anderen – nimmt seine Aufgebrachtheit an, trägt sie mit – oder zieht sich in eine schwer erreichbare Stille zurück. Beides ist eine Form des Verlorenseins.`,
        bewusstheit: `Was denkst und fühlst du – du selbst – gerade in diesem Konflikt? Nicht der andere, nicht die Energie des anderen: du.`,
        uebung: `Sage einmal in aller Stille, was du in diesem Konflikt möchtest – auch wenn es dem anderen widerspricht. Nur für dich, laut: „Ich möchte ...”`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum als solche erkannt – man verschmilzt mit der Umgebung, der Stimmung, dem Alltag. Das Alleinsein läuft im Hintergrund, während man sich mit dem Außen beschäftigt. Erst in ruhigen Momenten taucht es auf.`,
        bewusstheit: `Wann hast du zuletzt wirklich für dich selbst Kontakt gesucht – nicht weil es sich ergab, nicht weil jemand anderes es wollte, sondern weil du es dir gewünscht hast?`,
        uebung: `Initiiere heute selbst eine Begegnung – nicht abwarten, bis jemand kommt. Wähle aktiv. Beobachte, wie sich das anfühlt, wenn du aus dir heraus auf jemanden zugehst.`
      },
      entscheidung: {
        autopilot: `Man übernimmt die Entscheidung des wichtigsten Menschen – verschmilzt mit ihr, macht sie zur eigenen. Das eigene Wollen ist so leise, dass es kaum zu hören ist, und manchmal weiß man nicht mehr, was man selbst eigentlich wollte.`,
        bewusstheit: `Welche Entscheidung triffst du hier wirklich – deine eigene, oder eine, die du von jemandem anderen übernommen hast? Gibt es einen Unterschied?`,
        uebung: `Geh allein, ohne Handy, kurz nach draußen. Frage dich: Was würde ich in dieser Sache wählen, wenn ich heute komplett alleine wäre? Schreibe das auf, bevor du wieder zurückkommst.`
      },
      beziehungskrise: {
        autopilot: `Man verschmilzt mit der Stimmung des anderen, trägt seine Krise mit, verliert sich im Erleben des anderen – und merkt kaum, was man selbst braucht oder denkt. Die Beziehung kriselt, und man ist dabei und doch nicht ganz da.`,
        bewusstheit: `Was brauchst du in dieser Beziehungskrise – du selbst, getrennt vom anderen? Gibt es etwas in dir, das noch nicht gehört wurde?`,
        uebung: `Geh kurz allein nach draußen. Frage dich: Was wünsche ich mir für uns – nur von mir aus, ohne den anderen einzubeziehen? Dann komm zurück und teile es.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel löst sich im anderen auf: Man übernimmt die Sichtweise des Partners – wenn er okay ist, bin ich okay. Wenn er zweifelt, zweifle ich auch. Die eigene Einschätzung fehlt, weil die Grenze verschwommen ist.`,
        bewusstheit: `Was denkst du – du selbst, unabhängig vom anderen – über dich in diesem Moment? Gibt es eine eigene Stimme, die das beurteilen kann?`,
        uebung: `Schreib heute drei Sätze über dich, die nur aus dir kommen – ohne Bezug zum anderen. „Ich bin jemand, der …“ Lass sie stehen als deine eigene Beschreibung.`
      },
      verlust: {
        autopilot: `Verlust einer zentralen Beziehung bringt tiefe Orientierungslosigkeit: Ohne den anderen weiß man kaum, wer man ist. Man sucht Halt, schmiegt sich an das Vertraute – und die eigene Trauer bleibt diffus.`,
        bewusstheit: `Wer bist du, wenn du allein mit diesem Verlust bist – ohne den anderen, ohne eine Aufgabe? Was ist da?`,
        uebung: `Geh heute allein nach draußen, ohne Telefon. Lass die Stille kommen. Frage dich: Was fühle ich wirklich – ganz für mich, ohne Bezug zu jemand anderem?`
      },
      ueberforderung: {
        autopilot: `Überforderung entsteht, wenn die Grenzen zum wichtigsten Menschen oder zur Umgebung fehlen. Man übernimmt alles, was kommt – und verliert den Faden zur eigenen Kapazität.`,
        bewusstheit: `Was von dem, was du gerade trägst, gehört wirklich dir – und was hast du übernommen, weil es niemand sonst trug?`,
        uebung: `Mache heute eine Liste: Meine Aufgaben – und Aufgaben, die ich übernommen habe. Dann wähle eine aus der zweiten Liste und gib sie zurück oder lass sie liegen.`
      },
      stagnation: {
        autopilot: `Stagnation entsteht, wenn die Grenzen zum anderen fehlen: Man bewegt sich im Rhythmus des Partners, ohne eigene Richtung zu haben. Die innere Leere bleibt diffus und unbenannt.`,
        bewusstheit: `Was willst du – unabhängig vom anderen? Gibt es eine eigene Richtung in dir, die du schon lange nicht gehört hast?`,
        uebung: `Schreibe heute drei Sätze, die mit „Ich will …" beginnen – ganz für dich, ohne den anderen einzubeziehen. Lass sie stehen. Das ist deine Richtung.`
      },
    },

  }
};
