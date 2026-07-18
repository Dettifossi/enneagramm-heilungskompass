// Situationskompass – Bewusste Impulse für konkrete Lebenssituationen
// Struktur je Eintrag: autopilot | bewusstheit | uebung
export const SITUATIONSKOMPASS = {

  situationen: [
    { id: "erschoepfung",    label: "Erschöpfung & Burnout", labelEN: "Exhaustion & burnout",       icon: "🔋" },
    { id: "konflikt",        label: "Konflikt & Streit", labelEN: "Conflict & dispute",            icon: "⚡" },
    { id: "einsamkeit",      label: "Einsamkeit & Rückzug", labelEN: "Loneliness & withdrawal",         icon: "🌑" },
    { id: "entscheidung",    label: "Entscheidungsstress", labelEN: "Decision making stress",          icon: "⚖️" },
    { id: "beziehungskrise", label: "Beziehungskrise", labelEN: "Relationship crisis",              icon: "💔" },
    { id: "selbstzweifel",   label: "Selbstzweifel & innere Kritik", labelEN: "Self-doubt & inner criticism",icon: "🌫️" },
    { id: "verlust",         label: "Verlust & Trauer", labelEN: "Loss & grief",             icon: "🍂" },
    { id: "ueberforderung",  label: "Überforderung & Druck", labelEN: "Overwhelm & pressure",        icon: "🌊" },
    { id: "stagnation",      label: "Stagnation & innere Leere", labelEN: "Stagnation & inner emptiness",    icon: "🪨" },
  ],

  eintraege: {

    "SE1": {
      erschoepfung: {
        autopilot: `Wenn Erschöpfung sich zeigt, antwortet der innere Antreiber mit noch mehr Disziplin. Ausruhen fühlt sich falsch an – fast wie eine moralische Verfehlung. Der innere Kritiker flüstert: "Du hast noch nicht genug getan" – und der Körper gehorcht, lange über seine Grenzen hinaus.`,
        bewusstheit: `Was wäre, wenn der Körper gerade nicht dein Feind ist, sondern dein ehrlichster Zeuge? Erschöpfung kann auch bedeuten: du hast wirklich gegeben – und das darf jetzt einfach so sein.`,
        uebung: `Setz dich für fünf Minuten hin, ohne Absicht. Wenn Gedanken kommen, die dich antreiben – benenne sie leise: "Das ist der Antreiber." Mehr nicht. Beobachte, was passiert, wenn du ihnen nicht folgst.`,
        autopilotEN: `Stagnation feels like an absolute failure: you aren't productive enough, you aren't making progress, you're standing still. The inner judge barks: You should be further along. You aggressively drive yourself forward instead of pausing.`,
        bewusstheitEN: `What if this quiet phase isn't a standstill—but a period of preparation? What might emerge if you stopped fighting the current and just waited?`,
        uebungEN: `Give yourself one single, modest task for the day. Just one. Once it is finished, let the day be complete—no post-game analysis, no extra add-ons.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die innere Überzeugung, im Recht zu sein, zur unüberwindlichen Mauer. Argumente des anderen werden geprüft und für unzureichend befunden. Der Ton wird sachlicher, kühler, schneidender – als ob Präzision überzeugender wäre als Empathie.`,
        bewusstheit: `Ist es möglich, dass der andere auch etwas Richtiges sieht – und du es gerade nicht hören kannst, weil dein innerer Richter schon das Urteil gefällt hat?`,
        uebung: `Höre dem anderen einmal zu Ende, ohne innerlich schon die Gegenposition zu formulieren. Halte inne, bevor du antwortest. Frage dich: Was ist das Berechtigte an dem, was er sagt?`,
        autopilotEN: `In a conflict, your inner conviction of being right becomes an immovable wall. The other person's arguments are scrutinized and found wanting. Your tone becomes more matter-of-fact, cooler, and sharper—as if precision were more convincing than empathy.`,
        bewusstheitEN: `Is it possible that the other person sees something valid too—and you just can't hear it right now because your inner judge has already passed sentence?`,
        uebungEN: `Listen to the other person until they are completely finished, without formulating your counterargument in your head. Pause before you respond. Ask yourself: What is the valid point in what they are saying?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird nicht als Bedürfnis wahrgenommen, sondern als Zeichen, dass man selbst irgendwo versagt hat. Statt Kontakt zu suchen, zieht man sich noch weiter zurück – und arbeitet. Wenn man beschäftigt ist, muss man das Alleinsein nicht fühlen.`,
        bewusstheit: `Was wäre es, jetzt nicht produktiv zu sein – sondern einfach Gesellschaft zu brauchen? Darf ein Mensch wie du Einsamkeit empfinden, ohne dass das ein Fehler ist?`,
        uebung: `Melde dich heute bei jemandem – nicht weil du helfen kannst oder etwas zu berichten hast, sondern weil dir die Verbindung fehlt. Sag das ruhig auch so. Übe, Bedürftigkeit als menschlich zu erleben.`,
        autopilotEN: `Loneliness isn't recognized as a human need, but rather as a sign that you have failed somewhere. Instead of reaching out, you withdraw even further—and work. When you're busy, you don't have to feel the loneliness.`,
        bewusstheitEN: `What if you didn't have to be productive right now, but simply needed company? Is a person like you allowed to feel lonely without it being a flaw?`,
        uebungEN: `Reach out to someone today—not because you can help them or have news to share, but simply because you miss the connection. Feel free to say exactly that. Practice experiencing vulnerability as a natural human trait.`
      },
      entscheidung: {
        autopilot: `Jede Entscheidung wird zum Prüfstand: Welche Option ist wirklich richtig? Die eigene Messlatte liegt hoch, und weil keine Wahl makellos ist, zieht sich der Prozess. Man analysiert, vergleicht, zweifelt – und handelt erst, wenn man sich sicher ist, dass man später nichts bereuen muss.`,
        bewusstheit: `Was wäre, wenn es keine perfekte Entscheidung gibt – nur eine, die du mit dem besten verfügbaren Wissen triffst und dann nach Kräften lebst?`,
        uebung: `Setze dir eine feste Entscheidungsfrist – nicht länger als zwei Tage. Schreibe die zwei realistischsten Optionen auf, wähle eine und schliesse die Überlegung damit bewusst ab. Vollständigkeit ist hier kein Ziel, nur ein Hindernis.`,
        autopilotEN: `Every decision becomes a trial: Which option is truly the right one? Your bar is set so high, and since no choice is flawless, the process drags out. You analyze, compare, and doubt—only acting when you are absolutely certain you won't regret anything later.`,
        bewusstheitEN: `What if there is no perfect decision—only one that you make with the best information available, and then live out to the best of your ability?`,
        uebungEN: `Set a firm deadline for your decision—no longer than two days. Write down the two most realistic options, pick one, and consciously close the matter. Completeness isn't the goal here; it's just a roadblock.`
      },
      beziehungskrise: {
        autopilot: `Die eigene Kritik am anderen wird schärfer – man zieht innerlich Bilanz: Was stimmt hier nicht, wer hat Fehler gemacht? Der Ton wird kühler, präziser, gerechter. Man zieht sich zurück, bis der andere das Problem einsieht und korrigiert.`,
        bewusstheit: `Bist du gerade der Richter dieser Beziehung – oder ihr Teilnehmer? Was bräuchtest du, um wieder ein Gespräch zu werden statt ein Urteil?`,
        uebung: `Nenne dem anderen eine Sache, die du an ihm wirklich schätzt – aufrichtig, ohne Vorbehalt. Dann erst sprich, was dich belastet. Beobachte, wie sich die Atmosphäre verändert.`,
        autopilotEN: `Your criticism of the other person sharpens, and you start keeping score: What's wrong here? Who made a mistake? Your tone becomes cooler, more precise, and righteous. You pull back until the other person sees the problem and corrects it.`,
        bewusstheitEN: `Are you currently acting as the judge of this relationship, or as a partner in it? What would it take for you to become a conversation again rather than a verdict?`,
        uebungEN: `Tell the other person one thing you truly appreciate about them—sincerely, with no strings attached. Only then speak about what is weighing on you. Notice how the atmosphere shifts.`
      },
      selbstzweifel: {
        autopilot: `Der innere Kritiker meldet sich unaufgefordert: Das war nicht gut genug. Du hättest besser sein sollen. So geht man das nicht an. Der Selbstzweifel nimmt die Form moralischer Selbstanklagen an – und der Massstab liegt immer einen Schritt höher als das Erreichte.`,
        bewusstheit: `Spricht gerade dein innerer Richter – oder du selbst? Und wäre das Urteil dieses Richters wirklich gerecht, wenn er über jemand anderen gefällt würde?`,
        uebung: `Schreibe einen Satz, der mit „Ich habe heute gut gemacht, dass …“ beginnt. Nicht die Leistung – etwas Menschliches. Lass den Satz stehen, ohne ihn zu relativieren.`,
        autopilotEN: `The inner critic pipes up uninvited: That wasn't good enough. You should have done better. That's not how you handle this. Self-doubt takes the form of moral self-blame—and the bar is always placed one step higher than what you actually achieved.`,
        bewusstheitEN: `Is that your inner judge speaking right now, or is it truly you? And would this judge's verdict really be fair if it were passed on someone else?`,
        uebungEN: `Write down a sentence that begins with, "One thing I did well today was..." Don't focus on an achievement—focus on something human. Let the sentence stand as it is, without downplaying it.`
      },
      verlust: {
        autopilot: `Verlust wird als Aufgabe begriffen: Man hält sich zusammen, organisiert, funktioniert. Die Trauer gilt als Schwäche oder als Kontrollverlust. Innerlich zieht man sich hinter Pflicht und Tüchtigkeit zurück.`,
        bewusstheit: `Was wäre, wenn Trauer kein Zeichen von Schwäche ist – sondern ein Zeichen, dass etwas wirklich bedeutsam war? Was verlierst du, wenn du die Trauer fernhältst?`,
        uebung: `Setz dich heute mit einem Gegenstand oder einer Erinnerung, die zum Verlust gehört. Lass fünf Minuten zu, was kommt – ohne es zu beurteilen, ohne es zu korrigieren.`,
        autopilotEN: `Loss is treated like a task: You hold it together, organize, and function. Grief is viewed as a weakness or a loss of control. Internally, you retreat behind duty and efficiency.`,
        bewusstheitEN: `What if grief isn't a sign of weakness, but a sign that something truly mattered? What do you lose when you keep your grief at arm's length?`,
        uebungEN: `Sit quietly today with an object or a memory connected to your loss. For five minutes, allow whatever comes up to just be there—without judging it, without trying to fix it.`
      },
      ueberforderung: {
        autopilot: `Bei Überforderung steigert sich der innere Druck: Mehr Disziplin, mehr Kontrolle, mehr Perfektion. Man versucht, sich durch Anstrengung aus dem Druck herauszuarbeiten – und macht ihn damit größer.`,
        bewusstheit: `Was wäre, wenn du heute nicht mehr leistest – sondern weniger? Was wäre das Mindeste, das wirklich reicht?`,
        uebung: `Schreibe drei Dinge auf, die du heute weglassen oder delegieren kannst. Nicht verschieben – wirklich streichen oder abgeben. Dann tue es.`,
        autopilotEN: `When you feel overwhelmed, your internal pressure spikes: more discipline, more control, more perfection. You try to work your way out of the pressure through sheer effort—which only makes it heavier.`,
        bewusstheitEN: `What if you didn't do more today, but actually did less? What is the absolute minimum that would truly be enough?`,
        uebungEN: `Write down three things you can drop or delegate today. Don't postpone them—actually cross them off your list or hand them over. Then go ahead and do it.`
      },
      stagnation: {
        autopilot: `Stagnation fühlt sich wie Versagen an: Man ist nicht produktiv genug, macht keine Fortschritte, stagniert. Der innere Richter meldet sich: Du solltest weiter sein. Man treibt sich an statt innezuhalten.`,
        bewusstheit: `Was wäre, wenn diese Stille nicht Stillstand ist – sondern Vorbereitung? Was würde entstehen, wenn du nicht kämpfst, sondern wartest?`,
        uebung: `Gib dem heutigen Tag eine einzige, bescheidene Aufgabe. Nur eine. Wenn sie erledigt ist, darf der Tag genug sein – ohne Nachklapp, ohne Zusatz.`,
        autopilotEN: `Stagnation feels like failure: you aren't productive enough, you aren't making progress, you're stuck. The inner judge chimes in: You should be further along. You push yourself instead of pausing.`,
        bewusstheitEN: `What if this stillness isn't a standstill, but a period of preparation? What might unfold if you stopped fighting the stillness and just waited?`,
        uebungEN: `Give yourself just one single, modest task for today. Only one. Once it's done, let the day be enough—no follow-ups, no extras.`
      },
    },

    "SO1": {
      erschoepfung: {
        autopilot: `Die eigene Erschöpfung wird dem Einsatz für das Richtige geopfert. Solange die Sache wichtig ist, rechtfertigt sie den Preis. Der Körper sendet Signale – das Gewissen aber sagt: "Jetzt ist nicht die Zeit dafür."`,
        bewusstheit: `Für welche Werte kämpfst du gerade – und bist du noch wirklich präsent für sie? Wer leidet darunter, dass du erschöpft bist, aber weitermachst?`,
        uebung: `Schreibe heute eine bewusste Nicht-Liste: Was wirst du heute nicht tun? Beobachte, welcher Widerstand dabei entsteht – und ob dieser Widerstand wirklich von dir kommt oder von einem älteren Bild davon, wer du sein sollst.`,
        autopilotEN: `Stagnation triggers intense guilt: I'm not doing enough for the cause, for others, or for the greater good. You try to work your way out of the internal emptiness by aggressively fulfilling duties—which never actually fills the void.`,
        bewusstheitEN: `What if the act of pausing is exactly what is right for you in this moment—not an act of escapism, but a necessary rest?`,
        uebungEN: `Give yourself permission to live through today without a grand objective. Observe what bubbles up in the quiet—without instantly trying to turn it into a chore.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird auf Werte und Prinzipien verwiesen – auf das, was gerecht, fair und richtig für alle wäre. Die eigene Position wird weniger als persönliche Meinung formuliert, sondern als objektive Norm. Wer anderer Meinung ist, scheint gegen das Prinzip selbst zu verstossen.`,
        bewusstheit: `Spreche ich gerade für ein Prinzip – oder für mich? Und wäre die Situation anders, wenn ich als Person spreche statt als Hüter einer Norm?`,
        uebung: `Formuliere deinen Standpunkt im Konflikt einmal ohne Berufung auf Regeln oder Werte: „Ich möchte ...” statt „Es wäre richtig, dass ...”. Beobachte, wie sich das anfühlt.`,
        autopilotEN: `In conflicts, you default to values and principles—focusing on what is fair, just, and right for everyone. Instead of framing your position as a personal opinion, you present it as an objective norm. Anyone who disagrees seems to be violating the principle itself.`,
        bewusstheitEN: `Am I speaking for a principle right now, or am I speaking for myself? And how might this situation shift if I showed up as a person rather than the guardian of a standard?`,
        uebungEN: `Try stating your position in a conflict without appealing to rules or values. Use "I want..." or "I need..." instead of "It would be right if...". Pay attention to how that feels in your body.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird als Zeichen interpretiert, dass man nicht genug für die Gemeinschaft tut oder nicht gut genug ist. Man engagiert sich mehr, übernimmt mehr Verantwortung – in der Hoffnung, durch Nützlichkeit dazuzugehören.`,
        bewusstheit: `Gehörst du dazu, weil du nützlich bist – oder weil du du bist? Und wer wäre für dich da, wenn du nichts leisten könntest?`,
        uebung: `Suche heute Kontakt zu einer Person – nicht um etwas zu leisten, sondern einfach um da zu sein. Erlaube, dass das reicht.`,
        autopilotEN: `Loneliness is misinterpreted as a sign that you aren't doing enough for the community or that you aren't good enough. You respond by stepping up, taking on more responsibility, and hoping your usefulness will earn you a place to belong.`,
        bewusstheitEN: `Do you belong because you are useful, or simply because you are you? Who would be there for you if you couldn't produce or contribute anything at all?`,
        uebungEN: `Reach out to someone today—not to accomplish anything or offer help, but simply to be there. Give yourself permission to let that be enough.`
      },
      entscheidung: {
        autopilot: `Man sucht nach der Entscheidung, die für alle richtig ist – die gerecht, fair und vor den Werten vertretbar ist. Persönliche Präferenzen werden dabei kaum gehört. Wenn keine Option dem Ideal entspricht, entsteht innere Zerrissenheit.`,
        bewusstheit: `Darf die Entscheidung auch für dich richtig sein – nicht nur für alle anderen? Was würdest du wählen, wenn niemand zuschauen würde?`,
        uebung: `Frage dich vor der Entscheidung: Was will ich eigentlich? Schreibe die Antwort auf, bevor du denkst, was du wählen solltest. Lass den persönlichen Impuls als legitime Stimme im Raum stehen.`,
        autopilotEN: `You search for the decision that is right for everyone—the one that is fair, ethical, and aligns with your values. Personal preferences are barely given a voice. When no option meets the ideal, it creates an agonizing inner tug-of-war.`,
        bewusstheitEN: `Is the decision allowed to be right for you too, and not just for everyone else? What would you choose if absolutely no one were watching?`,
        uebungEN: `Before making a choice, stop and ask yourself: What do I actually want? Write down the answer before your brain chimes in with what you should choose. Allow that personal impulse to exist as a legitimate voice in the room.`
      },
      beziehungskrise: {
        autopilot: `Man kämpft für das Prinzipielle: Was wäre fair, was wäre richtig für beide? Die persönliche Verletzung tritt hinter die Frage nach dem richtigen Verhalten zurück. Man verhandelt Prinzipien statt Gefühle.`,
        bewusstheit: `Was wäre, wenn du gerade nicht für ein Prinzip sprichst – sondern für dich? Wie würde sich das anfühlen, und was würdest du dann sagen?`,
        uebung: `Sprich heute einen Satz, der mit „Ich fühle mich gerade..." beginnt – ohne das sofort in eine Forderung oder ein Prinzip zu verwandeln. Nur das Gefühl, ohne Rahmen.`,
        autopilotEN: `You fight for the underlying principle: What is fair? What is the correct way for both parties to behave? Your personal hurt gets pushed aside in favor of figuring out the "right" conduct. You end up negotiating standards instead of sharing feelings.`,
        bewusstheitEN: `What if you weren't speaking for a principle right now, but strictly for yourself? What would that feel like, and what would you actually say?`,
        uebungEN: `Today, share a single sentence that starts with "Right now, I feel..."—without immediately turning it into a demand, a critique, or a lesson. Just state the emotion, with no framework around it.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt daran, ob man genug für die richtige Sache getan hat. War das wirklich prinzipientreu? Hätte man anders handeln müssen? Die innere Stimme bewertet retrospektiv jede Entscheidung gegen ein hoch gesetztes Ideal.`,
        bewusstheit: `Was wäre, wenn du heute genug getan hast – nicht perfekt, aber aufrichtig? Darf das für heute reichen?`,
        uebung: `Schreibe auf, was du heute wirklich getan hast – ohne Bewertung. Dann lies es vor wie eine neutrale Beschreibung: das ist, was war. Nicht mehr, nicht weniger.`,
        autopilotEN: `You second-guess whether you did enough for the right cause. Were you truly aligned with your principles? Should you have handled it differently? Your inner voice looks backward, evaluating every past decision against an impossibly high ideal.`,
        bewusstheitEN: `What if what you did today was enough—not perfect, but genuine? Can you let that be enough for tonight?`,
        uebungEN: `Write a completely objective list of what you actually did today—zero judgment allowed. Read it back to yourself like a neutral description: this is what happened. No more, no less.`
      },
      verlust: {
        autopilot: `Man trägt weiter, auch im Verlust: Was muss noch erledigt werden, was ist meine Pflicht gegenüber anderen? Der eigene Schmerz wird nach hinten geschoben, weil andere gerade mehr zu brauchen scheinen.`,
        bewusstheit: `Wessen Schmerz beachtest du gerade – den der anderen oder deinen eigenen? Darf dein Verlust auch Raum haben?`,
        uebung: `Schreibe heute auf, was du verloren hast – nicht was andere verloren haben, sondern du. Nur du. Dann lies es laut vor, auch wenn es schwer fällt.`,
        autopilotEN: `Even in the face of loss, you keep carrying the weight: What still needs to get done? What is my duty to others? Your own pain is sidelined because others seem to need more care right now.`,
        bewusstheitEN: `Whose pain are you actually attending to—everyone else's, or your own? Is your loss allowed to take up space too?`,
        uebungEN: `Today, write down what you have lost—not what the group or others lost, but you specifically. Just you. Then read it out loud to yourself, even if it feels difficult.`
      },
      ueberforderung: {
        autopilot: `Man übernimmt mehr Verantwortung als realistisch ist: für das Richtige einzustehen kostet Kraft, aber aufzuhören fühlt sich wie Versagen an. Man reibt sich auf, weil die Sache es verlangt.`,
        bewusstheit: `Wofür bist du wirklich verantwortlich – und wofür nicht? Gibt es etwas, das du heute ehrlich loslassen kannst?`,
        uebung: `Wähle heute eine Aufgabe oder Verantwortung, die eigentlich nicht dir gehört. Gib sie zurück – ohne Erklärung, ohne Entschuldigung. Nur: Das ist nicht meins.`,
        autopilotEN: `You take on more responsibility than is humanly realistic. Standing up for what's right takes immense energy, but stepping back feels like a failure of integrity. You wear yourself down because you believe the cause demands it.`,
        bewusstheitEN: `What are you actually responsible for—and what is truly out of your hands? Is there one thing you can honestly let go of today?`,
        uebungEN: `Choose one task or responsibility today that doesn't actually belong to you. Hand it back—without an explanation, and without an apology. Simply think: This isn't mine to carry.`
      },
      stagnation: {
        autopilot: `Stagnation erzeugt Schuldgefühle: Ich tue nicht genug für die Sache, für andere, für das Richtige. Man versucht, sich durch Pflichterfüllung aus der inneren Leere herauszuarbeiten – was die Leere nicht füllt.`,
        bewusstheit: `Was wäre, wenn das Innehalten selbst gerade das Richtige ist – nicht Flucht, sondern notwendige Pause?`,
        uebung: `Erlaube dir heute, einen Tag zu leben ohne großes Ziel. Beobachte, was in der Stille auftaucht – ohne es sofort in Pflicht zu verwandeln.`,
        autopilotEN: `Stagnation triggers intense guilt: I'm not doing enough for the cause, for others, or for the greater good. You try to work your way out of the inner emptiness by doubling down on duty—but it doesn't fill the void.`,
        bewusstheitEN: `What if this pause is exactly the right thing for you right now? What if it isn't an escape, but a deeply necessary intermission?`,
        uebungEN: `Give yourself permission to live through today without a grand goal. Observe what emerges in the quiet space, without immediately trying to turn it into a task or an obligation.`
      },
    },

    "SX1": {
      erschoepfung: {
        autopilot: `Wenn die Energie nachlässt, steigt die innere Anforderung. Mehr Perfektion, mehr Einsatz, mehr Intensität – als ob man sich durch Willen aus der Erschöpfung herausarbeiten könnte. Unfertiges wird kaum toleriert.`,
        bewusstheit: `Was wäre es, jetzt gerade unfertig zu sein – und das nicht zu korrigieren? Welches Bild von dir selbst würde dabei ins Wanken geraten?`,
        uebung: `Lass heute bewusst etwas unvollendet. Bleibe einen Moment bei dem Unbehagen, das dabei entsteht. Atme. Beobachte, wie dein inneres System reagiert – ohne einzugreifen.`,
        autopilotEN: `Stagnation hits you as a painful loss of intensity. If the fire is missing, or if nothing feels profoundly meaningful, you register it as a personal failure. You instantly start hunting for the flaw within yourself.`,
        bewusstheitEN: `What if the fire is simply resting right now, rather than being extinguished? Does every single season of your life have to be lived at maximum intensity?`,
        uebungEN: `Sit completely still today—with no task, no goal, and no self-evaluation. Do this for ten minutes. Just let the silence be there, and quietly observe whatever stirs beneath it.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Intensität größer, nicht kleiner. Der Massstab, den man an sich selbst anlegt, wird jetzt an den anderen angelegt. Kritik kann scharf, direkt und verletzend wirken – ohne dass man es so meint.`,
        bewusstheit: `Was wäre, wenn der andere diesen hohen Massstab gerade nicht erfüllen kann – und das nicht Böswilligkeit ist, sondern einfach menschlich?`,
        uebung: `Halte im nächsten Konfliktmoment inne, bevor du deinen Standpunkt formulierst. Frage dich: Welchen Ton wähle ich gerade – und welchen würde ich wählen, wenn der andere mein bestes Ich erwartete?`,
        autopilotEN: `In a conflict, your intensity cranks up rather than down. The impossibly high standards you hold for yourself are suddenly turned onto the other person. Your criticism can come across as sharp, blunt, and cutting—even if you don't mean for it to hurt.`,
        bewusstheitEN: `What if the other person simply can't meet that high standard right now—and it's not out of malice, but just because they are human?`,
        uebungEN: `In your next conflict, pause before stating your case. Ask yourself: What tone am I using right now, and what tone would I choose if I wanted to invite the other person into a real connection?`
      },
      einsamkeit: {
        autopilot: `Die Einsamkeit wird als persönliches Versagen erlebt – als Zeichen, dass man nicht intensiv genug, nicht vollkommen genug war. Der innere Kritiker schlägt zu: Du hast etwas falsch gemacht, deshalb bist du allein.`,
        bewusstheit: `Ist Einsamkeit wirklich ein Zeichen von Versagen – oder ist sie manchmal einfach ein menschlicher Zustand, der nichts über deinen Wert sagt?`,
        uebung: `Schreibe auf, was du dir von einer Verbindung gerade wirklich wünschst. Dann: Könntest du dir selbst einen Teil davon geben? Einen Moment der eigenen Zugewandtheit.`,
        autopilotEN: `Loneliness is experienced as a personal failure—a sign that you weren't intense enough, deep enough, or flawless enough. The inner critic attacks: You messed up, and that's why you're alone.`,
        bewusstheitEN: `Is loneliness truly proof of a failure, or is it sometimes just a temporary human condition that has absolutely nothing to do with your worth?`,
        uebungEN: `Write down what you are truly craving from a connection right now. Then ask yourself: Can I offer a piece of that to myself? Give yourself a moment of genuine self-compassion.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird zum Qualitätsproblem: Keine Option ist gut genug. Mit intensiver Genauigkeit werden Schwächen analysiert, Alternativen durchgespielt. Je größer die Entscheidung, desto unbarmherziger der innere Richter.`,
        bewusstheit: `Gibt es eine Option, die gut genug ist – nicht perfekt, aber aufrichtig? Was würde passieren, wenn du dir erlaubst, mit dieser Unsicherheit zu leben?`,
        uebung: `Benenne laut, was du wirklich willst – nicht die fehlerfreieste Option, sondern die, die sich am lebendigsten anfühlt. Dann entscheide dich dafür und verpflichte dich, die Entscheidung nicht rückgängig zu machen.`,
        autopilotEN: `Making a choice becomes an obsession with quality: no option feels good enough. With intense scrutiny, you dissect every weakness and obsess over alternatives. The bigger the decision, the more ruthless your inner judge becomes.`,
        bewusstheitEN: `Is there an option here that is good enough—not perfect, but honest? What would happen if you allowed yourself to move forward alongside this uncertainty?`,
        uebungEN: `State out loud what you actually want—not the most flawless option, but the one that feels the most alive to you. Choose it, and commit to not second-guessing your choice.`
      },
      beziehungskrise: {
        autopilot: `Die Anforderungen an den anderen steigen: Warum ist er nicht besser, wahrhaftiger, konsequenter? Die Intensität des eigenen Ideals wird zum Maßstab, an dem die Beziehung scheitert. Innerlich wächst der Schmerz, äußerlich die Kälte.`,
        bewusstheit: `Fordert dein innerer Richter gerade mehr, als ein Mensch leisten kann? Was wäre, wenn du den anderen so nimmst, wie er ist – heute, in diesem Moment?`,
        uebung: `Sage dem anderen einen Satz ohne Forderung und ohne Bewertung: „Ich wünsche mir, dass wir ..." und fülle ihn mit etwas Einfachem, Erreichbarem. Nicht dem Ideal – dem Möglichen.`,
        autopilotEN: `Your demands on the other person intensify: Why aren't they better, more authentic, more consistent? The sheer weight of your ideal becomes the metric by which the relationship fails. Internally, the pain grows; externally, you turn cold.`,
        bewusstheitEN: `Is your inner judge demanding more than any human being can actually give? What if you met the other person exactly as they are—today, in this very moment?`,
        uebungEN: `Say one thing to your partner that carries no demand and no judgment. Start with, "I hope we can..." and fill it with something simple and within reach. Focus on what is possible, not the ideal.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel kommt als innere Erschütterung: Bin ich wirklich so, wie ich sein sollte? War das echt? Hätte ich tiefer, konsequenter, wahrhaftiger sein sollen? Die Intensität des Zweifels kann sich gegen einen selbst richten.`,
        bewusstheit: `Was wäre, wenn du gerade gut genug bist – nicht perfekt, aber wirklich? Und was wäre, wenn der Zweifel selbst ein Zeichen ist, dass du dir etwas bedeutest?`,
        uebung: `Schreib einen Brief an dich selbst – ohne Kritik, ohne Forderung. Nur: Was ich an mir schätze, auch wenn es mir schwer fällt. Lies ihn laut vor.`,
        autopilotEN: `Self-doubt hits like a seismic shift: Am I really who I should be? Was that real? Should I have been deeper, more consistent, more authentic? The sheer force of this doubt completely turns against you.`,
        bewusstheitEN: `What if you are enough right now—not perfect, but real? And what if the doubt itself is just proof of how deeply you care?`,
        uebungEN: `Write a letter to yourself—no critiques, no demands allowed. Focus only on what you appreciate about yourself, even if it feels hard to write. Read it out loud.`
      },
      verlust: {
        autopilot: `Verlust löst intensive Reaktionen aus: Schuldgefühle (Hätte ich mehr tun können?), Zorn auf sich selbst oder die Situation, die Suche nach dem Fehler. Der Schmerz wird in Selbstkritik umgewandelt statt getrauert.`,
        bewusstheit: `Was wäre, wenn dieser Verlust kein Fehler war – weder deiner noch ein anderer? Darf Trauer einfach Trauer sein, ohne Schuldige?`,
        uebung: `Schreibe heute einen Abschiedsbrief an das, was du verloren hast. Kein Urteil, keine Erklärung. Nur: Was warst du mir, und was nehme ich mit.`,
        autopilotEN: `Loss triggers highly intense reactions: guilt (Should I have done more?), anger at yourself or the situation, and a frantic hunt for what went wrong. Pain is aggressively converted into self-criticism instead of allowed to be grief.`,
        bewusstheitEN: `What if this loss wasn't a mistake—neither yours nor anyone else's? Can grief just be grief, without needing someone to blame?`,
        uebungEN: `Today, write a goodbye letter to what you have lost. No judgments, no explanations. Just write: This is what you meant to me, and this is what I carry forward.`
      },
            ueberforderung: {
        autopilot: `Die Intensität des Drucks wird zur Herausforderung: Man kämpft dagegen an, hält höhere Maßstäbe, weigert sich, die Anforderungen zu reduzieren. Der Perfektionismus wird bei Überforderung nicht kleiner, sondern schärfer.`,
        bewusstheit: `Was wäre, wenn gut genug in dieser Situation wirklich gut genug ist? Welchen Preis zahlst du für das Ideal?`,
        uebung: `Erledige heute eine Aufgabe bewusst auf 80 % – nicht schlechter als nötig, aber ohne die letzten 20 % Perfektion. Beobachte, was das auslöst.`,
        autopilotEN: `The sheer weight of the pressure becomes a battleground. You fight back by holding even higher standards, refusing to dial back your expectations. Under overwhelm, your perfectionism doesn't soften—it gets sharper.`,
        bewusstheitEN: `What if "good enough" is exactly what is required in this situation? What price are you paying to maintain the ideal?`,
        uebungEN: `Today, deliberately do a task at 80% capacity—not sloppy, but without chasing that final 20% of perfection. Notice what that stirs up inside you.`
      },
      stagnation: {
        autopilot: `Stagnation trifft als Intensitätsverlust: Wenn das Feuer fehlt, wenn nichts mehr wirklich zählt, wird das als persönliches Versagen erlebt. Man sucht nach dem Fehler in sich selbst.`,
        bewusstheit: `Was wäre, wenn das Feuer gerade Pause macht – und nicht erloschen ist? Muss jede Phase intensiv sein?`,
        uebung: `Sitz heute still – ohne Aufgabe, ohne Ziel, ohne Bewertung. Zehn Minuten. Lass die Stille einfach da sein. Beobachte, was sich darunter regt.`,
        autopilotEN: `Stagnation feels like a loss of life force. When the fire is missing and nothing seems to matter, you view it as a personal failure and immediately look for the flaw within yourself.`,
        bewusstheitEN: `What if your inner fire is just resting right now, rather than burned out? Does every season of your life have to be intense?`,
        uebungEN: `Sit quietly today for ten minutes—no task, no goal, no evaluation. Just let the stillness be there. Pay attention to whatever is stirring quietly beneath the surface.`
      },
    },

    "SE2": {
      erschoepfung: {
        autopilot: `Die eigene Erschöpfung wird verborgen, weil Bedürftigkeit die Verbindung zu anderen gefährden könnte. Nach außen hin bleibt man freundlich, hilfsbereit, zugewandt – bis der Körper nicht mehr mitspielen will.`,
        bewusstheit: `Was brauchst du gerade wirklich – nicht was du geben könntest, sondern was du selbst brauchst? Und wann hast du dir das zuletzt wirklich gefragt?`,
        uebung: `Formuliere einen einzigen Satz, der mit "Ich brauche gerade..." beginnt. Sprich ihn laut aus – auch wenn niemand zuhört. Beobachte, wie er sich in deinem Körper anfühlt.`,
        autopilotEN: `Stagnation hits you as a painful loss of emotional intensity. When the spark is gone and nothing feels profoundly meaningful, you treat it as a personal failure. You immediately start scanning yourself to figure out what is broken.`,
        bewusstheitEN: `What if the spark is simply resting right now, rather than being extinguished for good? Does every single chapter of your life need to be lived at maximum intensity?`,
        uebungEN: `Sit completely still today—with no task, no goal, and no self-evaluation. Do this for ten minutes. Just let the silence be there, and quietly observe whatever stirs beneath it.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die eigene Verletzung eher gezeigt als der eigentliche Bedarf benannt. Man zieht sich zurück, wird still oder sendet indirekte Signale – in der Hoffnung, der andere möge von selbst verstehen, was falsch gelaufen ist.`,
        bewusstheit: `Was brauchst du wirklich in diesem Konflikt – und hast du es klar und direkt gesagt, oder hoffst du, dass man es errät?`,
        uebung: `Formuliere einmal direkt, was du brauchst oder was dich verletzt hat – in einem einzigen klaren Satz, ohne Umwege. Beobachte, ob das schwerer ist als das Schweigen.`,
        autopilotEN: `In a conflict, you are more likely to display your hurt feelings than to actually state what you need. You withdraw, grow quiet, or drop indirect hints—hoping the other person will figure out on their own what went wrong.`,
        bewusstheitEN: `What is it that you truly need in this conflict? Have you stated it clearly and directly, or are you hoping they will guess it?`,
        uebungEN: `Try stating what you need or what hurt you directly, in a single, clear sentence without any detours. Notice if doing this feels harder than staying silent.`
      },
      einsamkeit: {
        autopilot: `Wenn Einsamkeit entsteht, wird sofort Fürsorge mobilisiert: Wem kann ich jetzt helfen? Durch das Geben wird Verbindung hergestellt. Aber unter dem Helfen bleibt das Alleinsein unberührt.`,
        bewusstheit: `Hilfst du gerade, weil du magst – oder weil du die Einsamkeit nicht aushalten willst? Was wäre, wenn du heute einfach empfangen dürftest?`,
        uebung: `Ruf jemanden an – nicht um zu helfen, sondern um zu sagen: Ich vermisse dich. Beobachte, wie sich das anfühlt, die Bedürftigkeit direkt auszusprechen.`,
        autopilotEN: `The moment loneliness creeps in, your caretaking instincts kick into high gear: Who can I help right now? You use giving as a way to manufacture connection, but beneath the helpfulness, the core loneliness remains untouched.`,
        bewusstheitEN: `Are you helping right now because you genuinely want to, or because you can't bear the weight of being alone? What if you were allowed to simply receive today?`,
        uebungEN: `Call someone today—not to offer help or support, but just to say, "I miss you." Notice how it feels to express your need for connection so directly.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung dreht sich darum, was die andere Person braucht oder erwartet. Die eigene Stimme tritt zurück. Man wählt die Option, die am meisten Zuneigung sichert – ohne sich zu fragen, was man selbst will.`,
        bewusstheit: `Für wen triffst du gerade diese Entscheidung wirklich? Und was würdest du wählen, wenn dir niemand dabei zuschauen würde?`,
        uebung: `Schreibe auf, was du wählen würdest, wenn alle anderen schon zufrieden wären. Diese Antwort ist deine eigene. Lasse sie einen Moment stehen, bevor du sie verwirfst.`,
        autopilotEN: `Your decisions revolve entirely around what the other person needs or expects, while your own voice recedes into the background. You naturally gravitate toward the option that secures the most affection, without stopping to ask what you actually want.`,
        bewusstheitEN: `Who are you really making this decision for? And what would you choose if absolutely no one were watching?`,
        uebungEN: `Write down what you would choose if you knew everyone else was already perfectly happy. That answer belongs entirely to you. Let it sit there for a moment before you dismiss it.`
      },
      beziehungskrise: {
        autopilot: `Man gibt noch mehr – Aufmerksamkeit, Fürsorge, Zeit – in der Hoffnung, die Krise durch Geben zu überbrücken. Wenn das nicht wirkt, wächst die Verletzung still. Man zieht sich zurück, wartet auf Anerkennung, die nicht kommt.`,
        bewusstheit: `Was brauchst du gerade in dieser Beziehung – wirklich du, nicht der andere? Und hast du das klar ausgesprochen?`,
        uebung: `Sage dem anderen direkt, was du brauchst – nicht was du geben willst, nicht was du erwartest. Ein einziger klarer Satz: „Ich brauche gerade ..." Beobachte, was das auslöst.`,
        autopilotEN: `You double down on giving—showering them with attention, care, and time—hoping to bridge the crisis through sheer generosity. When that doesn't work, your resentment grows silently. You pull back and wait for recognition that never comes.`,
        bewusstheitEN: `What do you need in this relationship right now? Truly you, not the other person. And have you actually said it out loud?`,
        uebungEN: `Tell the other person directly what you need—not what you want to give them, and not what you expect from them. Just one clear sentence: "Right now, I need..." Observe what happens next.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel dreht sich um Liebenswürdigkeit: Bin ich wirklich gut genug – als Person, nicht als Helferin? Wenn der andere sich zurückzieht oder nicht dankt, bestätigt das einen alten Verdacht: Ich bin nur dann etwas wert, wenn ich gebe.`,
        bewusstheit: `Was wäre, wenn du auch dann liebenswert wärst, wenn du gerade nichts gibst – nichts tust, nichts leistest? Gibt es jemanden, der dich so sieht?`,
        uebung: `Lass heute jemanden etwas für dich tun – ohne es zu erwidern, ohne dich sofort zu bedanken. Beobachte, ob du das aushalten kannst, und was dabei in dir vorgeht.`,
        autopilotEN: `Your self-doubt centers on your lovability: Are you truly good enough just as a person, separate from your role as a helper? When someone pulls away or forgets to thank you, it triggers an old, familiar fear: I am only worthy if I am giving.`,
        bewusstheitEN: `What if you were deeply lovable even when you aren't giving, doing, or providing anything? Is there anyone in your life who sees you exactly that way?`,
        uebungEN: `Today, let someone do something for you. Don't try to match it, and don't rush to over-compensate with gratitude. Just notice if you can allow yourself to hold that space, and track what comes up inside.`
      },
      verlust: {
        autopilot: `Verlust wird durch Helfen bewältigt: Man sorgt für andere, die trauern – und merkt kaum, dass man selbst trauert. Der Schmerz tritt hinter die Fürsorge zurück, bis er sich irgendwann in Erschöpfung oder Bitterkeit meldet.`,
        bewusstheit: `Wer trauert für dich – und lässt du das zu? Gibt es jemanden, bei dem du heute deinen eigenen Schmerz ablegen darfst?`,
        uebung: `Bitte heute jemanden, einfach nur bei dir zu sein – ohne Ratschlag, ohne Ablenkung. Nur Gesellschaft im Schmerz. Lass das geschehen.`,
        autopilotEN: `You manage loss by shifting into caretaker mode: you look after others who are grieving, barely noticing that you are grieving too. Your own pain gets sidelined by your desire to comfort, until it eventually shows up as exhaustion or bitterness.`,
        bewusstheitEN: `Who is holding space for your grief, and are you actually letting them? Is there someone in your life with whom you can safely set down your pain today?`,
        uebungEN: `Today, ask someone to just be with you—no advice, no distractions. Just quiet companionship in your pain. Let yourself receive that presence.`
      },
      ueberforderung: {
        autopilot: `Überforderung kommt, weil man zu vielen Menschen Ja gesagt hat. Statt zu begrenzen, gibt man noch mehr – in der Hoffnung, dass die anderen es dann gut finden. Die Erschöpfung wächst still unter der Fürsorge.`,
        bewusstheit: `Wie viele Neins hättest du heute sagen können – und hast es nicht getan? Was hindert dich daran?`,
        uebung: `Sag heute einmal Nein – zu einer konkreten Bitte, die dir zu viel ist. Kurz und freundlich: „Das schaffe ich gerade nicht." Beobachte, was passiert.`,
        autopilotEN: `Overwhelm happens because you said yes to too many people. Instead of setting boundaries, you give even more, hoping it will keep everyone happy with you. The exhaustion builds silently beneath your warm exterior.`,
        bewusstheitEN: `How many times could you have said no today, but chose not to? What is really holding you back from doing it?`,
        uebungEN: `Practice saying no today to a specific request that feels like too much for you. Keep it brief and kind: "I can't take that on right now." Observe how it feels to protect your space.`
      },
                  stagnation: {
        autopilot: `Stagnation trifft als Intensitätsverlust: Wenn das Feuer fehlt, wenn nichts mehr wirklich zählt, wird das als persönliches Versagen erlebt. Man sucht nach dem Fehler in sich selbst.`,
        bewusstheit: `Was wäre, wenn das Feuer gerade Pause macht – und nicht erloschen ist? Muss jede Phase intensiv sein?`,
        uebung: `Sitz heute still – ohne Aufgabe, ohne Ziel, ohne Bewertung. Zehn Minuten. Lass die Stille einfach da sein. Beobachte, was sich darunter regt.`,
        autopilotEN: `Stagnation feels like a loss of vitality. When the warmth or the spark is missing and nothing seems to matter, you view it as a personal failure and immediately look for the flaw within yourself.`,
        bewusstheitEN: `What if your inner fire is just resting right now, rather than burned out? Does every phase of your life have to be filled with intense connection or activity?`,
        uebungEN: `Sit quietly today for ten minutes—no task, no goal, no evaluation. Just let the stillness be there. Pay attention to whatever is stirring quietly beneath the surface.`
      },
    },

    "SO2": {
      erschoepfung: {
        autopilot: `Weitermachen, weil man gebraucht wird. Die Erschöpfung gilt als Zeichen der eigenen Wichtigkeit – wer so müde ist, muss wirklich viel getragen haben. Innehalten würde bedeuten, nicht mehr unverzichtbar zu sein.`,
        bewusstheit: `Wer wärst du in diesem Moment, wenn niemand deine Hilfe bräuchte? Was bliebe von dir übrig, wenn alle Verbindungen gerade pausieren?`,
        uebung: `Verbring eine Stunde ohne Kontakt nach außen – keine Nachrichten, keine Anfragen, keine Erkundigungen. Beobachte, welche Gefühle auftauchen, und wie dein inneres System auf diese ungewohnte Stille reagiert.`,
        autopilotEN: `You keep pushing forward because you are needed. Exhaustion is twisted into a badge of your own importance—the logic being that if you're this tired, you must be carrying a massive weight for everyone else. Pausing feels dangerous, as if it means you're no longer indispensable.`,
        bewusstheitEN: `Who would you be in this very moment if nobody needed your help? What is left of you if all your social connections take a temporary back seat?`,
        uebungEN: `Spend an hour completely disconnected from the outside world—no text messages, no checking in, no handling requests. Notice what feelings surface, and pay attention to how your internal system reacts to this unfamiliar stillness.`
      },
      konflikt: {
        autopilot: `Im Konflikt taucht leise die Bilanz auf: Was ich für dich getan habe. Nicht immer ausgesprochen, aber spürbar. Die Erwartung, dass der andere das anerkennt, steht unsichtbar im Raum.`,
        bewusstheit: `Erwartest du gerade Dankbarkeit – und vermischst du das mit dem eigentlichen Konfliktthema? Was wäre der Kern des Streits, wenn die Bilanz nicht zählen würde?`,
        uebung: `Lass in diesem Konflikt die Vergangenheit aus dem Gespräch. Bleibe beim Jetzt: Was ist das eigentliche Thema – heute, in diesem Moment?`,
        autopilotEN: `In a conflict, a silent ledger inevitably appears in your mind: Look at everything I've done for you. It might not be explicitly stated, but it's palpable. The unspoken expectation that the other person should acknowledge your track record fills the room.`,
        bewusstheitEN: `Are you actually craving gratitude right now—and are you muddying the real conflict with it? What would the core issue be if the emotional scoreboard didn't count?`,
        uebungEN: `Leave the past out of the conversation during this conflict. Anchor yourself in the present: What is the actual issue—today, in this exact moment?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird zum Anlass, noch mehr zu geben, noch sichtbarer zu werden – in Gruppen, Kreisen, Netzwerken. Wenn man überall gebraucht wird, kann man nicht wirklich allein sein. Aber das Alleinsein bleibt, tief darunter.`,
        bewusstheit: `Wie viele dieser Verbindungen kennen wirklich dich – und nicht nur das, was du für sie tust? Mit wem bist du einfach du?`,
        uebung: `Schreibe heute einer einzigen Person, der du dich wirklich nah fühlst, eine persönliche Nachricht – nicht als Organisatorin, nicht als Helferin. Einfach als du.`,
        autopilotEN: `Loneliness becomes your cue to give even more and become even more visible within groups, circles, and networks. You tell yourself that if you're needed everywhere, you can't possibly be alone. Yet the deep isolation underneath remains untouched.`,
        bewusstheitEN: `How many of these connections genuinely know you—and not just what you manage or provide for them? Who are you just yourself with?`,
        uebungEN: `Today, send a personal message to just one person you feel truly close to. Don't show up as the organizer, the host, or the helper. Just reach out as you.`
      },
      entscheidung: {
        autopilot: `Man sucht den Konsens – wählt, was die Gruppe gut fände, was zur Rolle passt, was die wichtigsten Beziehungen intakt hält. Die eigene Meinung wird dabei so gründlich zurückgestellt, dass man selbst nicht mehr sicher ist, was man eigentlich will.`,
        bewusstheit: `Was würde die Gruppe entscheiden – und was würdest du entscheiden? Kennst du den Unterschied gerade noch?`,
        uebung: `Triff diese Entscheidung zuerst alleine und in Stille. Schreibe auf, was herauskommt, bevor du mit jemand anderem sprichst. Dann vergleiche.`,
        autopilotEN: `You instinctively search for consensus—choosing what the group would approve of, what fits your social role, or what keeps your most valuable relationships intact. Your personal opinion is sidelined so thoroughly that you lose track of what you actually want.`,
        bewusstheitEN: `What would the group decide, and what would you decide? Are you still able to tell the difference right now?`,
        uebungEN: `Make this decision entirely on your own in silence first. Write down your choice before you talk it over with anyone else. Then compare the two.`
      },
      beziehungskrise: {
        autopilot: `Man versucht, die Krise durch Beratung, Hilfe und Fürsorglichkeit zu überbrücken – für alle anderen. Die eigene Verletzung bleibt unausgesprochen. Man weiß genau, was der andere braucht, und weiß kaum, was man selbst braucht.`,
        bewusstheit: `Löst du die Beziehungskrise durch Helfen – oder durch echtes Dabeisein? Was wäre, wenn du gerade nichts tun würdest und nur da wärst?`,
        uebung: `Halte in dieser Krise inne und frage den anderen: „Wie geht es dir wirklich?" Dann höre zu – ohne Rat, ohne Lösung, ohne Angebot. Nur zuhören.`,
        autopilotEN: `You try to bridge the crisis by offering advice, support, and caretaking—for everyone else involved. Your own hurt remains unexpressed. You know exactly what the other person needs to fix things, but you have no idea what you need.`,
        bewusstheitEN: `Are you trying to solve this relationship crisis by playing the helper, or by genuinely showing up? What would happen if you stopped managing the situation and just sat with it?`,
        uebungEN: `Pause in the middle of this crisis and ask the other person, "How are you really doing?" Then just listen—no advice, no fixes, no offers to help. Just hold the space.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt daran, ob man wirklich wichtig ist – nicht nur nützlich. Wenn niemand fragt, wie es einem geht, bestätigt das die innere Befürchtung: Ohne Geben wäre ich unsichtbar.`,
        bewusstheit: `Wer kennt dich – nicht was du tust, sondern wer du bist? Und hast du jemandem in letzter Zeit wirklich erlaubt, dich zu sehen?`,
        uebung: `Ruf heute jemanden an und sag: „Ich brauche ein Gespräch – nicht um zu helfen, sondern weil ich gehört werden möchte." Beobachte, wie sich das anfühlt.`,
        autopilotEN: `You doubt whether you are truly important to people, rather than just useful. When no one checks in on you, it confirms your deepest internal fear: Without my contribution, I am invisible.`,
        bewusstheitEN: `Who actually knows you—not what you do, but who you are? And have you genuinely allowed anyone to see the real you lately?`,
        uebungEN: `Call someone today and say, "I just need to talk—not to fix anything, but because I need to be heard." Observe how it feels to step out of the strong role.`
      },
      verlust: {
        autopilot: `Man trägt die Trauer anderer mit – und vergisst dabei die eigene. Die Gemeinschaft gibt Halt, aber man selbst steht am Rand: immer verfügbar, selten sichtbar im eigenen Schmerz.`,
        bewusstheit: `Was trägst du gerade – für dich oder für die Gruppe? Gibt es einen Ort, an dem du deinen eigenen Verlust zeigen darfst?`,
        uebung: `Suche heute einen Moment der Stille, nur für dich und deinen Verlust. Kein Gespräch, keine Aufgabe. Nur du und das, was du wirklich verloren hast.`,
        autopilotEN: `You carry the grief of the community, completely forgetting your own. The group gives you a sense of belonging and structure, but you remain out on the perimeter: always available, rarely visible in your own pain.`,
        bewusstheitEN: `Whose pain are you actually carrying right now—yours or the collective's? Is there a safe space where your own loss is allowed to show its face?`,
        uebungEN: `Find a moment of absolute quiet today, exclusively for you and your loss. No processing conversations, no tasks. Just you and what you have genuinely lost.`
      },
      ueberforderung: {
        autopilot: `Man ist für alle da und vergisst sich selbst. Die Gruppe braucht Unterstützung, also gibt man sie – auch wenn man selbst leer ist. Der eigene Akku wird nicht aufgeladen, weil das egoistisch wirken würde.`,
        bewusstheit: `Was brauchst du gerade – wirklich du, nicht die Gruppe? Und hast du dir das heute schon gegönnt?`,
        uebung: `Reserviere heute eine Stunde nur für dich – keine Aufgaben, keine anderen Menschen. Tu etwas, das dich auffüllt. Beobachte, ob du das zulassen kannst.`,
        autopilotEN: `You are there for everyone else, completely bypassing yourself. The group needs your backing, so you give it—even when your own tank is completely empty. Recharging your own battery gets pushed off because it feels selfish.`,
        bewusstheitEN: `What do you need right now—truly you, not the community? And have you given yourself permission to have it today?`,
        uebungEN: `Carve out one hour today entirely for yourself—no tasks, no people, no obligations. Do something that genuinely fills you up. Notice if you feel guilty allowing yourself to take it.`
      },
      stagnation: {
        autopilot: `Ohne Gemeinschaft und Bestätigung fühlt sich das Leben leer an. Man sucht neue Aufgaben, neue Menschen, neue Gruppen – um die Leere zu füllen statt ihr zu begegnen.`,
        bewusstheit: `Was bleibt, wenn keine Gruppe dich braucht? Gibt es etwas in dir, das auch ohne Bestätigung von Wert ist?`,
        uebung: `Verbringe heute einen Abend allein – ohne soziale Medien, ohne Verabredung. Beobachte, was in der Stille auftaucht. Was brauchst du wirklich?`,
        autopilotEN: `Without a community to serve or validation to receive, life feels flat and hollow. You instantly go hunting for new projects, new people, or new groups to join—using activity to fill the void rather than facing it.`,
        bewusstheitEN: `What is left of you when no group needs you? Is there something inside you that holds inherent value, even without an audience?`,
        uebungEN: `Spend an evening entirely by yourself tonight—no social media, no plans. Watch what bubbles up to the surface in the quiet. What is it that you truly need?`
      },
    },

    "SX2": {
      erschoepfung: {
        autopilot: `Die Erschöpfung entsteht durch intensives Geben in der Verbindung – und wenn die Verbindung nicht das zurückgibt, was erhofft wird, wird noch mehr investiert. Die Intensität steigt, während die Energie sinkt.`,
        bewusstheit: `Was würde passieren, wenn du gerade nichts von dir gibst – wenn du einfach empfängst? Kannst du das zulassen, ohne es sofort erwidern zu wollen?`,
        uebung: `Lass dich heute von jemandem etwas geben – eine Geste, ein Wort, ein Angebot. Nimm es an, ohne sofort zu erwidern. Bleib einen Moment in dem Gefühl des reinen Empfangens.`,
        autopilotEN: `Your exhaustion stems from pouring intense energy into a connection—and when that relationship doesn't give back what you hoped for, you double down and invest even more. Your intensity spikes even as your energy drains away.`,
        bewusstheitEN: `What would happen if you didn't give anything of yourself right now—if you simply received? Can you let that happen without immediately feeling the urge to match or return it?`,
        uebungEN: `Today, allow someone to give you something—a gesture, a kind word, an offer of help. Accept it without offering anything in return. Sit for a moment with the raw sensation of pure receiving.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die emotionale Intensität hochgefahren. Die Frage dahinter: Liebst du mich wirklich? Siehst du mich? Vorwürfe können leidenschaftlich und direkt sein – und manchmal den anderen überfordern.`,
        bewusstheit: `Was willst du mit dieser Intensität gerade eigentlich sagen? Und wäre es möglich, das direkt und einfach auszusprechen – ohne dramatischen Rahmen?`,
        uebung: `Sprich einmal in ruhigem Ton aus, was du dir wünschst – nicht was der andere falsch gemacht hat. Beobachte, ob Ruhe etwas verändert.`,
        autopilotEN: `In a conflict, you crank up the emotional intensity. The underlying question driving you is always: Do you really love me? Do you even see me? Your accusations can be incredibly passionate and direct—often completely overwhelming the other person.`,
        bewusstheitEN: `What are you actually trying to say beneath all that intensity? Would it be possible to just state it directly and simply—without the dramatic framework?`,
        uebungEN: `Try speaking what you desire in a completely calm, grounded tone, focusing strictly on your needs rather than what the other person did wrong. Observe whether this quiet approach shifts the dynamic.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird als Mangel an Verschmelzung empfunden – als ob die Verbindung nicht intensiv genug ist oder der andere nicht wirklich da ist. Der Impuls: Noch intensiver werden, noch tiefer gehen, noch mehr fordern.`,
        bewusstheit: `Ist die Einsamkeit ein Zeichen, dass die Verbindung fehlt – oder ist sie auch ein Signal, dass du gerade dir selbst fremd bist?`,
        uebung: `Sitz heute eine Weile allein – bewusst, als Wahl. Frage dich: Wer bin ich, wenn niemand mich spiegelt? Was ist von mir übrig, wenn die Verbindung gerade pausiert?`,
        autopilotEN: `Loneliness is experienced as a painful lack of total fusion—as if the connection isn't intense enough or the other person isn't truly present. Your immediate instinct is to get even more intense, go deeper, and demand more.`,
        bewusstheitEN: `Is this loneliness a sign that the connection is missing, or is it a signal that you are currently disconnected from yourself?`,
        uebungEN: `Sit by yourself for a while today—deliberately, as a conscious choice. Ask yourself: Who am I when no one else is mirroring me? What is left of me when the connection takes a temporary pause?`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird auf den wichtigsten Menschen hin ausgerichtet: Was würde er wählen? Was bringt uns einander näher? Die eigene Stimme verstummt unter dem Gewicht der Verbindung.`,
        bewusstheit: `Welchen Teil dieser Entscheidung triffst du für dich – und welchen Teil triffst du für die Beziehung? Und bist du dir sicher, dass der andere das auch so will?`,
        uebung: `Triff die Entscheidung für dich allein – dann teile sie dem anderen mit. Nicht als Frage, sondern als Information. Beobachte, wie sich das anfühlt.`,
        autopilotEN: `You anchor your decision entirely around the most important person in your life: What would they choose? What will bring us closer together? Your own voice goes completely quiet under the massive weight of the relationship.`,
        bewusstheitEN: `Which part of this decision are you making for yourself, and which part are you making solely for the sake of the relationship? Are you absolutely sure the other person even wants you to sacrifice your preference?`,
        uebungEN: `Make this decision completely on your own first—then simply state it to the other person. Share it as a neutral piece of information, not as a question. Notice how it feels to claim that space.`
      },
      beziehungskrise: {
        autopilot: `Die Intensität steigt: Man fordert mehr Ehrlichkeit, mehr Nähe, mehr wirkliche Verbindung. Wenn der andere das nicht geben kann oder will, kommt der Rückzug – tief, verletzend, lang. Darunter liegt die Frage: Werde ich wirklich geliebt?`,
        bewusstheit: `Was wäre, wenn der andere gerade gibt, was er geben kann – und das kein Zeichen von Gleichgültigkeit ist, sondern von Grenze? Kannst du das von hier aus sehen?`,
        uebung: `Frage den anderen: „Was kannst du mir in dieser Krise wirklich geben?" Nicht was du willst – was er kann. Dann höre die Antwort, ohne sie zu werten.`,
        autopilotEN: `The intensity escalates: you demand more radical honesty, more closeness, more real intimacy. If the other person can't or won't meet you there, you plunge into a deep, icy, punishing withdrawal. Beneath it all lies the core terror: Am I truly loved?`,
        bewusstheitEN: `What if the other person is currently giving you the absolute best they can—and their limitation isn't a sign of indifference, but just a personal boundary? Can you look at it from that perspective?`,
        uebungEN: `Ask your partner directly: "What are you realistically able to give me in this crisis right now?" Focus on what they are capable of, not what you want. Listen to their answer without analyzing or judging it.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf die Kernfrage: Bin ich für diese Person wirklich begehrenswert? Wenn er nicht antwortet, nicht fragt, nicht zeigt – dann stimmt etwas mit mir nicht. Die innere Kritik wird zur Selbstzerstörung.`,
        bewusstheit: `Ist der Rückzug des anderen ein Zeichen über deinen Wert – oder ein Zeichen über seinen Zustand? Kannst du beides voneinander trennen?`,
        uebung: `Schreibe auf, was an dir liebenswert ist – nicht was du dem anderen gibst, sondern was du für dich selbst bist. Lies es, wenn der Zweifel am lautesten ist.`,
        autopilotEN: `Your self-doubt zeroes in on one core question: Am I truly desirable to this person? If they don't respond, don't ask about you, or don't show affection, you conclude that something is fundamentally wrong with you. Your inner critic turns self-destructive.`,
        bewusstheitEN: `Is the other person's withdrawal actually a reflection of your worth, or is it just a reflection of their own internal state? Can you separate the two?`,
        uebungEN: `Write down what makes you inherently lovable—not what you bring to the relationship or give to the other person, but who you are for yourself. Read it over when the doubt starts getting loud.`
      },
      verlust: {
        autopilot: `Der Verlust trifft am tiefsten, wenn er eine zentrale Beziehung betrifft. Der Schmerz wird in Hingabe umgewandelt: Man sucht Nähe, gibt sich vollständig – oder zieht sich ins Gegenteil zurück, als Schutz vor weiterer Verletzung.`,
        bewusstheit: `Was brauchst du gerade wirklich – Nähe oder Raum? Und kannst du das, was du brauchst, klar aussprechen?`,
        uebung: `Schreibe heute einen Brief an den Menschen oder das, was du verloren hast. Sag alles, was du nie sagen konntest. Kein Publikum, keine Erwartung – nur Wahrheit.`,
        autopilotEN: `Loss cuts you to the very core, especially when it involves a central relationship. You try to convert the pain into raw devotion: you chase closeness and surrender yourself completely—or you flip to the exact opposite extreme, locking down as protection against further hurt.`,
        bewusstheitEN: `What do you actually need right now—closeness or space? And can you clearly state what you need without playing a game?`,
        uebungEN: `Today, write a letter to the person or thing you have lost. Say everything you never got the chance to say. There is no audience, no expectations—just your raw truth.`
      },
      ueberforderung: {
        autopilot: `Überforderung entsteht durch die Intensität des Gebens in der wichtigsten Beziehung: Man gibt alles, erwartet alles – und wenn das Gleichgewicht kippt, erschöpft man sich durch Nachgeben oder durch Rückzug.`,
        bewusstheit: `Was gibst du gerade, das du selbst gar nicht hast? Und was würde es bedeuten, hier Grenzen zu ziehen?`,
        uebung: `Sag dem wichtigsten Menschen heute konkret, was du gerade brauchst – nicht was du geben kannst. Nur das: „Ich brauche gerade …" Und lass ihn antworten.`,
        autopilotEN: `Overwhelm is triggered by the sheer intensity of your giving within your primary relationship. You give everything, expect everything, and when the equilibrium tips, you exhaust yourself by completely capitulating or aggressively pulling away.`,
        bewusstheitEN: `What are you trying to give right now that you don't even have in your own emotional tank? What would it look like to draw a firm line here?`,
        uebungEN: `Today, tell the most important person in your life exactly what you need right now—not what you can do for them. Just say: "Right now, I need..." and give them the space to respond.`
      },
      stagnation: {
        autopilot: `Ohne intensive Verbindung fühlt sich das Leben flach und bedeutungslos an. Man sucht die nächste Begegnung, die nächste tiefe Verbindung – als Gegenmittel zur Leere.`,
        bewusstheit: `Was wäre, wenn die Leere gerade ein Atemraum ist – kein Zeichen, dass etwas falsch ist? Darf Stille auch Stille sein?`,
        uebung: `Sitz heute still mit dir selbst. Zwanzig Minuten, ohne Kontakt nach außen. Frage dich: Was will ich wirklich – jenseits der nächsten Verbindung?`,
        autopilotEN: `Without an intense connection to focus on, life feels completely flat, hollow, and meaningless. You immediately go hunting for the next spark, the next deep encounter—using intensity as an antidote to the emptiness.`,
        bewusstheitEN: `What if the emptiness is actually just a quiet breathing room, rather than a sign that something is wrong? Can you let the stillness just be still?`,
        uebungEN: `Sit quietly with yourself today. Twenty minutes, entirely disconnected from the outside world. Ask yourself: What is it that I truly want—outside of my next relationship?`
      },
    },

    "SE3": {
      erschoepfung: {
        autopilot: `Der Griff zur nächsten Aufgabe kommt automatisch. Erschöpfung wird als Effizienzproblem behandelt, nicht als Ruhebedürfnis. Die Lösung: besser organisieren, schneller werden, die Aufgaben umstrukturieren.`,
        bewusstheit: `Was passiert mit dir – dem Menschen hinter den Aufgaben – wenn die Aufgaben pausieren? Wer bist du, wenn du gerade nicht leistest?`,
        uebung: `Sitz für eine kurze Zeit ohne Bildschirm, ohne Aufgabe. Beobachte, wie schnell dein Geist zur nächsten Aufgabe wandert – und was darunter liegt, wenn er es nicht tut.`,
        autopilotEN: `Reaching for the next task happens automatically. Exhaustion is treated as an efficiency problem rather than a need for rest. Your solution: organize better, move faster, restructure the to-do list.`,
        bewusstheitEN: `What happens to you—the human being behind the tasks—when the work pauses? Who are you when you aren't producing anything?`,
        uebungEN: `Sit for a few minutes without a screen and without a task. Observe how quickly your mind drifts to the next thing that needs to get done—and notice what lies underneath when it doesn't.`
      },
      konflikt: {
        autopilot: `Im Konflikt liegt der Impuls, ihn schnell zu lösen oder zu übergehen. Emotionen bremsen die Effizienz – also werden sie eher beiseitegelegt. Der Konflikt soll enden, damit man wieder vorankommen kann.`,
        bewusstheit: `Was wird gerade übergangen, weil es die Lösung verlangsamen würde? Und wäre es nicht effizienter, den eigentlichen Kern anzusprechen?`,
        uebung: `Erlaube dir, einen Moment länger im Konflikt zu bleiben, als du es gewohnt bist. Frage dich: Was ist noch nicht gesagt, was wichtig wäre?`,
        autopilotEN: `In a conflict, your instinct is to resolve it quickly or simply move past it. Emotions put the brakes on efficiency, so they get pushed aside. You just want the conflict to end so everyone can get back to making progress.`,
        bewusstheitEN: `What is being bypassed right now just because it would slow down the solution? And wouldn't it actually be more efficient to address the real root of the issue?`,
        uebungEN: `Allow yourself to stay in a conflict a moment longer than you normally would. Ask yourself: What hasn't been said yet that actually matters?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum wahrgenommen, weil man beschäftigt ist. Wenn sie sich meldet, ist die Antwort: mehr Termine, mehr Projekte, mehr Kontakte. Verbindung als Effizienzproblem – optimieren statt fühlen.`,
        bewusstheit: `Wann hast du zuletzt echten Kontakt gespürt – nicht Networking, nicht Koordination, sondern wirkliche Verbindung? Wie lange ist das her?`,
        uebung: `Verabrede dich mit jemandem – ohne Agenda. Kein Ziel, kein Ergebnis. Nur Zeit miteinander. Beobachte, wie sich das anfühlt.`,
        autopilotEN: `Loneliness is barely registered because you stay so busy. If it does surface, your response is to add more appointments, more projects, and more contacts. Connection is treated like an optimization problem—something to manage rather than to feel.`,
        bewusstheitEN: `When was the last time you felt a genuine sense of contact—not networking, not coordination, but real connection? How long has it been?`,
        uebungEN: `Make plans to hang out with someone—with absolutely no agenda. No goal, no expected outcome. Just time together. Observe how that feels.`
      },
      entscheidung: {
        autopilot: `Man wählt die Option, die am besten aussieht und am schnellsten zum Ziel führt. Entscheidungen werden getroffen, um voranzukommen – nicht um inne zu halten. Zweifel werden übersprungen, weil sie die Energie bremsen.`,
        bewusstheit: `Triffst du diese Entscheidung, weil sie richtig ist – oder weil du wieder in Bewegung kommen willst? Gibt es etwas, das du übersiehst, weil du nicht innehalten möchtest?`,
        uebung: `Halte die Entscheidung für 24 Stunden an. Frage dich am nächsten Morgen nochmals: Ist das immer noch die richtige Wahl? Wenn ja – dann handle.`,
        autopilotEN: `You pick the option that looks best and gets you to the goal the fastest. Decisions are made to keep things moving forward, not to prompt reflection. Doubts are skipped over because they slow down your momentum.`,
        bewusstheitEN: `Are you making this decision because it's truly right, or simply because you want to get moving again? Is there something you're missing because you refuse to pause?`,
        uebungEN: `Put the decision on hold for 24 hours. The next morning, ask yourself again: Is this still the right choice? If it is, then take action.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird als Problem behandelt, das effizient gelöst werden muss. Man analysiert, schlägt Lösungen vor, möchte weiterkommen. Die eigentliche emotionale Dimension – was der andere wirklich fühlt, was man selbst fühlt – wird übersprungen.`,
        bewusstheit: `Was wird gerade gelöst – das Problem oder die Beziehung? Und weiß der andere, dass du wirklich da bist – nicht nur funktional?`,
        uebung: `Lege die Lösungen für einen Moment beiseite. Frage nur: „Wie geht es dir wirklich?" Und dann: warte, bis die echte Antwort kommt.`,
        autopilotEN: `A crisis is treated as a problem that needs to be solved efficiently. You analyze, propose solutions, and try to move past it. The actual emotional dimension—what the other person is truly feeling, and what you are feeling—gets skipped entirely.`,
        bewusstheitEN: `What are you trying to fix right now—the problem, or the relationship? And does the other person know that you are genuinely present, not just functioning?`,
        uebungEN: `Set the solutions aside for a moment. Simply ask: "How are you really doing?" And then, wait until the real answer emerges.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel tarnt sich als Leistungsproblem: Ich habe nicht gut genug abgeschnitten, war nicht effizient genug, habe mich schlecht präsentiert. Die tiefere Frage – Bin ich genug? – bleibt unausgesprochen unter den Aufgaben.`,
        bewusstheit: `Was wäre, wenn du gerade nichts leisten würdest – was bliebe von dir übrig? Und wäre das genug?`,
        uebung: `Sitz heute fünf Minuten ohne Aufgabe. Wenn der Selbstzweifel kommt, benenne ihn: „Das ist der Leistungszweifel." Dann frage: Was bin ich, wenn er recht hat – und was bin ich, wenn er unrecht hat?`,
        autopilotEN: `Self-doubt disguises itself as a performance issue: I didn't do well enough, I wasn't efficient enough, I presented myself poorly. The deeper question—Am I enough?—remains buried under the workload.`,
        bewusstheitEN: `What if you didn't achieve anything right now—what would be left of you? And would that person be enough?`,
        uebungEN: `Sit today for five minutes with no task. When the self-doubt creeps in, label it: "That is performance anxiety." Then ask: Who am I if it's right—and who am I if it's wrong?`
      },
      verlust: {
        autopilot: `Verlust wird durch Aktivität überbrückt: Das nächste Projekt, die nächste Aufgabe, das nächste Ziel. Der Schmerz gilt als Hindernis für Produktivität. Irgendwann bricht er an unerwarteter Stelle durch.`,
        bewusstheit: `Was wäre, wenn du heute nichts leistest – nur trauerst? Was würde das über dich aussagen, und ist das wirklich wahr?`,
        uebung: `Nimm dir heute eine Stunde ohne Aufgabe. Wenn der Schmerz kommt, lass ihn. Wenn er nicht kommt, sitz trotzdem in der Stille. Beides ist erlaubt.`,
        autopilotEN: `Loss is bridged by sheer activity: the next project, the next task, the next goal. Pain is viewed as an obstacle to productivity. Eventually, it breaks through in an entirely unexpected place.`,
        bewusstheitEN: `What if you didn't accomplish anything today, and just grieved? What would that say about you, and is that story actually true?`,
        uebungEN: `Set aside an hour today with no tasks. If the pain comes up, let it. If it doesn't, just sit in the stillness anyway. Both are allowed.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird ignoriert oder als Anreiz benutzt: Mehr Effizienz, bessere Systeme, schnellere Prozesse. Man optimiert sich durch den Druck, statt innezuhalten. Irgendwann streikt der Körper.`,
        bewusstheit: `Was wäre, wenn Innehalten heute das Produktivste wäre, was du tun kannst? Was kostet dich das Weitermachen wirklich?`,
        uebung: `Lege heute eine bewusste Pause ein – kein Arbeiten, kein Optimieren, keine Planung. Zwanzig Minuten. Sitz. Beobachte, wie lange es dauert, bis du unruhig wirst.`,
        autopilotEN: `Being overwhelmed is either ignored or used as fuel: more efficiency, better systems, faster processes. You optimize your way through the pressure instead of stopping. Eventually, your body goes on strike.`,
        bewusstheitEN: `What if pausing today was actually the most productive thing you could possibly do? What is pushing through really costing you?`,
        uebungEN: `Take a deliberate break today—no working, no optimizing, no planning. Just twenty minutes. Sit there, and observe how long it takes before you start feeling restless.`
      },
      stagnation: {
        autopilot: `Ohne Aufgaben und Erfolge droht Identitätsverlust: Wer bin ich, wenn ich gerade nichts leiste? Die Stagnation wird mit neuen Projekten bekämpft statt ausgehalten.`,
        bewusstheit: `Wer bist du, wenn du gerade nichts erreichst? Gibt es etwas an dir, das unabhängig von Leistung besteht?`,
        uebung: `Schreibe heute auf: Wer bin ich – ohne meine Leistungen, ohne meine Erfolge, ohne meine Ziele? Lass die Antwort kommen, auch wenn sie zunächst leer wirkt.`,
        autopilotEN: `Without tasks and successes, you face an identity crisis: Who am I if I'm not achieving anything right now? Stagnation is aggressively fought off with new projects instead of being endured.`,
        bewusstheitEN: `Who are you when you aren't hitting milestones? Is there a part of you that exists completely independent of your performance?`,
        uebungEN: `Today, write down the answer to this question: Who am I without my achievements, without my successes, and without my goals? Let the answer come, even if it feels empty at first.`
      },
    },

    "SO3": {
      erschoepfung: {
        autopilot: `Das Image muss aufrechterhalten werden – auch wenn die Energie fehlt. Nach außen hin läuft alles. Erschöpfung zeigt sich nicht, weil sie das Bild beschädigen würde. Man performt weiter, bis man wirklich nicht mehr kann.`,
        bewusstheit: `Welches Bild von dir hältst du gerade aufrecht – und für wen? Wer würde dich noch sehen, wenn dieses Bild einen Moment fiele?`,
        uebung: `Gestehe dir gegenüber ehrlich ein, wie es dir wirklich geht. Kein Rahmen, kein Publikum. Nur du und dein tatsächlicher Zustand – benenne ihn, ohne ihn sofort zu korrigieren.`,
        autopilotEN: `The image must be maintained at all costs—even when you are completely out of energy. To the outside world, everything is running smoothly. Exhaustion is never shown because it would damage the presentation. You keep performing until you hit an absolute wall.`,
        bewusstheitEN: `What version of yourself are you working so hard to project right now, and for whose benefit? Who would still truly see you if that curtain dropped for just a moment?`,
        uebungEN: `Radically admit to yourself how you are actually doing. No spin, no audience. Just you and your actual, raw state—name it for what it is, without trying to fix it right away.`
      },
      konflikt: {
        autopilot: `Im Konflikt rückt schnell die Frage in den Vordergrund: Wie wirke ich dabei? Die Verteidigung des eigenen Bildes kann wichtiger werden als die Lösung des eigentlichen Problems.`,
        bewusstheit: `Verteidigst du dich gerade – oder verteidigst du dein Bild? Was wäre, wenn du den Unterschied klar hättest?`,
        uebung: `Frage dich im Konflikt: Was würde ich sagen, wenn es keine Zuschauer gäbe? Sprich dann aus diesem Ort heraus.`,
        autopilotEN: `In a conflict, the spotlight quickly shifts to the question: How do I look right now? Defending your image can easily become more important than actually resolving the root issue.`,
        bewusstheitEN: `Are you defending yourself right now, or are you defending your reputation? What would shift if you could clearly see the difference between the two?`,
        uebungEN: `In the middle of a conflict, ask yourself: What would I say right now if there were absolutely no onlookers? Speak directly from that place.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit ist schwer zu ertragen, weil man das Gefühl hat, ohne Publikum zu verschwinden. Der Impuls: sichtbarer werden, mehr leisten, das Bild aufpolieren – solange die anderen einen sehen, ist man vorhanden.`,
        bewusstheit: `Bist du auch ohne Publikum jemand? Was bleibt von dir, wenn niemand zuschaut?`,
        uebung: `Verbringe heute Zeit mit dir – ohne Spiegel, ohne Auftritt. Schreibe auf, wer du bist, wenn niemand zuschaut. Nicht deine Errungenschaften – du.`,
        autopilotEN: `Loneliness is incredibly difficult to tolerate because it feels like you vanish when there's no audience. Your immediate instinct is to become more visible, achieve more, and polish your image—believing that as long as others see you, you exist.`,
        bewusstheitEN: `Do you still exist when the spotlight is turned off? What is left of you when absolutely no one is watching?`,
        uebungEN: `Spend some time with yourself today—no mirrors, no performance. Write down who you are when you don't have an audience. Don't list your achievements; focus strictly on you.`
      },
      entscheidung: {
        autopilot: `Man entscheidet nach Außenwirkung: Was kommt gut an? Was stärkt das Bild? Die innere Frage ist weniger Was ist richtig? und mehr Was wirkt gut? – was die Entscheidung manchmal in eine Richtung zieht, die von innen nicht wirklich stimmt.`,
        bewusstheit: `Was würdest du wählen, wenn es niemand sehen würde – kein Image, keine Reaktion der anderen, kein Applaus? Kennst du diese Antwort?`,
        uebung: `Schreibe die Entscheidung auf, die du vor dir selbst als richtig erkennst – auch wenn sie nicht beeindruckend wirkt. Dann überlege, ob du den Mut hast, sie trotzdem zu treffen.`,
        autopilotEN: `You make decisions based on external optics: What looks good? What enhances my status? The internal question isn't What is right? but rather What plays well?—which often pulls your choices in a direction that doesn't feel true to you.`,
        bewusstheitEN: `What would you choose if no one ever found out—no status points, no external validation, no applause? Do you even know what that answer is?`,
        uebungEN: `Write down the decision that you know deep down is right for you, even if it looks entirely unimpressive on paper. Then, ask yourself if you have the courage to choose it anyway.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird nach außen unsichtbar gehalten – das Bild der Beziehung muss stimmen. Intern arbeitet man an einer Lösung, die das Image rettet. Was der andere wirklich fühlt, tritt hinter die Frage zurück: Wie stehen wir da?`,
        bewusstheit: `Trägst du gerade die Krise dieser Beziehung – oder trägst du das Bild der Beziehung? Und weißt du, was der andere wirklich braucht?`,
        uebung: `Führe heute ein Gespräch, das nichts löst und nichts optimiert – nur ehrlich fragt: Wie geht es uns wirklich? Ohne Reparaturimpuls. Nur wahrnehmen.`,
        autopilotEN: `The crisis is kept completely invisible to the outside world—the optics of the relationship must look perfect. Internally, you work tirelessly on a solution that saves face. What the other person actually feels takes a back seat to the question: How do we look to others?`,
        bewusstheitEN: `Are you currently holding up the weight of this relationship, or are you just holding up the illusion of it? Do you actually know what your partner needs right now?`,
        uebungEN: `Have a conversation today that aims to solve nothing and optimize nothing. Simply ask: "How are we actually doing?" Resist the urge to fix it. Just listen.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel dreht sich ums Bild: Komme ich wirklich gut an? Sehen sie mich richtig? Der innere Kritiker vergleicht das eigene Image mit dem der anderen und findet immer eine Lücke.`,
        bewusstheit: `Was wäre, wenn du gerade nicht das Bild verteidigst, sondern einfach da bist? Würde irgendjemand, der dir wirklich nahe ist, dich dann weniger schätzen?`,
        uebung: `Sag heute jemandem, dem du vertraust, ehrlich, wie es dir geht – ohne Image, ohne Optimierung. Nur die Wahrheit. Beobachte, was das in dir bewegt.`,
        autopilotEN: `Your self-doubt revolves entirely around your image: Am I being well-received? Do they see me the way I want them to? Your inner critic constantly compares your public profile with everyone else's and always finds a gap.`,
        bewusstheitEN: `What if you dropped the defensive exterior right now and just allowed yourself to be present? Would anyone who truly loves you value you any less?`,
        uebungEN: `Tell someone you trust completely exactly how you're doing today—no filters, no positive spin. Just the unvarnished truth. Notice what that shifts inside you.`
      },
      verlust: {
        autopilot: `Man zeigt sich stark, auch in der Trauer: Das Bild des Funktionierens bleibt aufrecht. Innerlich läuft der Schmerz weiter – aber er hat keinen Auftritt, weil er das Bild stört.`,
        bewusstheit: `Was würden die wichtigsten Menschen in deinem Leben sagen, wenn du heute Schwäche zeigen würdest? Und wäre das wirklich so schlimm?`,
        uebung: `Sag heute einem Menschen, dem du vertraust, wie es dir wirklich geht – ohne das Bild zu schützen. Nur die Wahrheit über deinen Schmerz.`,
        autopilotEN: `You stay strong, even in the midst of grief; the appearance of high-level functioning must be maintained. Internally, the pain runs deep, but it isn't allowed center stage because it disrupts the narrative of your competence.`,
        bewusstheitEN: `What would the people who matter most to you say if you showed weakness today? Would the world actually fall apart if you did?`,
        uebungEN: `Confide in someone you trust about how you are truly holding up right now—without trying to protect your image. Just give them the raw truth about your pain.`
      },
      ueberforderung: {
        autopilot: `Man zeigt nach außen Kompetenz und Kontrolle, auch wenn innen alles zu viel wird. Das Bild des Funktionierens bleibt aufrecht – bis der Zusammenbruch unvermeidlich kommt.`,
        bewusstheit: `Was würde passieren, wenn du heute jemandem sagst, dass es zu viel ist? Würde das wirklich das Bild zerstören – oder nur ehrlich machen?`,
        uebung: `Sag heute einem Menschen, dem du vertraust: „Es ist gerade zu viel." Nur das. Kein Plan, keine Lösung. Beobachte, was sich danach verändert.`,
        autopilotEN: `You project absolute competence and total control to the outside world, even when everything inside feels like it's collapsing. The facade of functioning stays up right until a breakdown becomes inevitable.`,
        bewusstheitEN: `What would happen if you admitted to someone today that it's just too much? Would it really destroy your image, or would it just make you human?`,
        uebungEN: `Tell someone you trust explicitly: "It's just too much right now." Stop there. No plan, no immediate solution. Just observe what changes after you say it.`
      },
      stagnation: {
        autopilot: `Stagnation bedroht das Bild: Man wirkt nicht mehr dynamisch, vorwärtsgewandt, erfolgreich. Man versucht, den Stillstand nach außen zu verbergen – und erschöpft sich dabei.`,
        bewusstheit: `Was wäre, wenn du heute jemandem sagst, dass du gerade festhängst? Würde das wirklich das Bild zerstören?`,
        uebung: `Gesteh heute einem Menschen, dem du vertraust: „Ich weiß gerade nicht, wohin." Nur das. Kein Plan, keine Lösung. Beobachte, was dann passiert.`,
        autopilotEN: `Stagnation feels like a direct threat to your image: you no longer look dynamic, forward-moving, or successful. You exhaust yourself trying to camouflage the standstill from the outside world.`,
        bewusstheitEN: `What would happen if you admitted to someone today that you're currently feeling stuck? Would that truly shatter the picture they have of you?`,
        uebungEN: `Confess to someone you trust today: "I honestly don't know where I'm headed right now." Leave out the plan or the fix. Observe what happens next.`
      },
    },

    "SX3": {
      erschoepfung: {
        autopilot: `Die Erschöpfung wird überspielt durch Intensität und Charisma – besonders gegenüber dem Menschen, der einem wichtig ist. Man gibt das Bild des Starken, des Unverzichtbaren. Loslassen fühlt sich wie Verlieren an.`,
        bewusstheit: `Was würde dein wichtigster Mensch sehen, wenn du dich gerade nicht verstellst? Und wäre das so schlimm?`,
        uebung: `Teile mit jemandem, dem du nahe bist, ehrlich mit, wie erschöpft du bist – nicht als Schwäche verkleidet, sondern als Tatsache. Beobachte, was das in dir und in der Verbindung bewegt.`,
        autopilotEN: `You mask your exhaustion with intensity and charisma—especially around the person who matters most to you. You project an image of strength and indispensability. Letting your guard down feels like losing.`,
        bewusstheitEN: `What would the person closest to you see if you stopped pretending right now? And would that really be so terrible?`,
        uebungEN: `Honestly share with someone close to you just how exhausted you are—not disguised as a weakness, but simply stated as a fact. Observe what that shifts inside you and within the connection.`
      },
      konflikt: {
        autopilot: `Im Konflikt entsteht ein Gewinnimpuls. Es geht nicht mehr nur um das Thema – sondern darum, die bessere Position zu halten. Argumente werden eingesetzt wie Werkzeuge, um den anderen zu überzeugen oder zu übertrumpfen.`,
        bewusstheit: `Willst du gerade Recht behalten – oder willst du verstanden werden? Das ist nicht dasselbe.`,
        uebung: `Lass in diesem Konflikt einmal die stärkste Position des anderen gelten. Sage laut: „Da hast du recht.” Beobachte, was das in dir auslöst.`,
        autopilotEN: `In a conflict, an impulse to win takes over. It stops being just about the issue at hand and becomes about maintaining the upper hand. Arguments are weaponized as tools to convince or outmaneuver the other person.`,
        bewusstheitEN: `Do you want to be right in this moment, or do you want to be understood? Those are two very different things.`,
        uebungEN: `For once in this conflict, validate the other person's strongest point. Say out loud, "You're right about that." Observe what that stirs up inside you.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bestätigt ein tiefes inneres Bild: Ich bin letztlich nicht begehrenswert. Der Impuls: noch charismatischer werden, noch attraktiver, noch faszinierender – solange der andere begehrt, ist man nicht allein.`,
        bewusstheit: `Was wäre, wenn jemand dich in diesem Moment mögen würde – einfach so, ohne Fassade? Könntest du das glauben?`,
        uebung: `Schreib heute auf, was du an dir selbst magst – nicht was du kannst, nicht was du leistest. Was ist liebenswert an dir, auch im Alleinsein?`,
        autopilotEN: `Loneliness validates a deep-seated inner narrative: Ultimately, I am not desirable. Your instinct is to become even more charismatic, more attractive, and more fascinating—believing that as long as the other person desires you, you aren't truly alone.`,
        bewusstheitEN: `What if someone could love you in this exact moment—just as you are, without the facade? Could you actually let yourself believe that?`,
        uebungEN: `Today, write down what you appreciate about yourself—not what you can do, and not what you achieve. What is inherently lovable about you, even when you are completely alone?`
      },
      entscheidung: {
        autopilot: `Man entscheidet auf den wichtigsten Menschen hin: Was beeindruckt ihn? Was macht mich in seinen Augen attraktiver, wertvoller, unverzichtbarer? Die eigene Stimme wird dabei kaum gehört.`,
        bewusstheit: `Entscheidest du gerade für dich – oder für das Bild, das du beim anderen erzeugen willst? Was wäre deine Wahl, wenn niemand sie bewertet?`,
        uebung: `Schreibe auf, was du wählen würdest, wenn diese Person die Entscheidung nie erfahren würde. Diese Antwort ist näher an dir selbst.`,
        autopilotEN: `You cater your decisions to the person who matters most to you: What will impress them? What makes me look more attractive, valuable, or indispensable in their eyes? Your own voice is barely even audible.`,
        bewusstheitEN: `Are you making this choice for yourself, or for the image you want to create in their mind? What would you choose if absolutely no one were scoring it?`,
        uebungEN: `Write down what you would choose if this person were never going to find out about your decision. That answer is much closer to your true self.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird zur Probe: Steht er wirklich zu mir? Hält die Verbindung, wenn es schwierig wird? Man fordert Nähe, Klarheit, Bekenntnis – und wenn der andere nicht liefert, zieht man sich zurück oder eskaliert.`,
        bewusstheit: `Was wäre, wenn der andere in dieser Krise einfach überfordert ist – und das kein Zeichen ist, dass er dich nicht liebt?`,
        uebung: `Frage den anderen heute konkret: „Was brauchst du gerade von mir – in einem Satz?" Dann höre zu, ohne zu werten.`,
        autopilotEN: `The crisis becomes a trial: Are they truly committed to me? Does this connection hold up when things get heavy? You demand closeness, clarity, and reassurance—and if the other person doesn't deliver, you either freeze them out or escalate.`,
        bewusstheitEN: `What if the other person is simply overwhelmed by this crisis right now—and it isn't actually a sign that they don't love you?`,
        uebungEN: `Today, ask your partner a specific question: "What do you need from me right now—in a single sentence?" Then just listen, without evaluating their answer.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf Attraktivität und Wirkung beim wichtigsten Menschen: Bin ich wirklich fesselnd genug für ihn? Verblasst meine Anziehung? Der innere Kritiker vergleicht und findet immer einen Mangel.`,
        bewusstheit: `Was wäre, wenn der andere dich nicht wegen deiner Wirkung liebt – sondern wegen dir? Und kannst du das in diesem Moment glauben?`,
        uebung: `Frage den anderen heute: „Was schätzt du an mir – nicht was ich tue, sondern wer ich bin?“ Höre die Antwort, ohne sie sofort zu relativieren.`,
        autopilotEN: `Your self-doubt targets your attractiveness and impact on the person who matters most: Am I truly captivating enough for them? Is my spark fading? Your inner critic constantly compares you to others and always finds a flaw.`,
        bewusstheitEN: `What if the other person doesn't love you for the effect you have on them, but simply for who you are? Can you open yourself up to believing that right now?`,
        uebungEN: `Ask your partner today: "What do you value about me—not what I do, but who I am?" Listen to the answer without immediately deflecting or downplaying it.`
      },
      verlust: {
        autopilot: `Verlust – vor allem von Beziehungen oder Status – trifft tief. Man reagiert mit Rückzug oder mit verstärkter Anstrengung: Noch besser werden, noch attraktiver, noch unersetzbarer.`,
        bewusstheit: `Was wäre, wenn du in diesem Verlust nicht mehr oder besser werden musst – sondern einfach trauern darfst? Was bleibt, wenn du aufhörst zu glänzen?`,
        uebung: `Schreibe heute auf, was dieser Verlust dir wirklich bedeutet – nicht was er für dein Bild bedeutet, sondern was er für dich als Mensch bedeutet.`,
        autopilotEN: `Loss—especially a loss of status or the breakdown of a relationship—hits you deeply. You react by either withdrawing entirely or doubling down on your efforts: trying to be even better, more attractive, and more irreplaceable.`,
        bewusstheitEN: `What if you didn't have to try harder or be better in the face of this loss, but were simply allowed to grieve? What remains when you stop trying to shine?`,
        uebungEN: `Today, write down what this loss actually means to you—not what it means for your image, but what it means to you deeply as a human being.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird in Leistung für die wichtigste Person investiert: Man will beeindrucken, unersetztbar sein, glänzen – auch wenn man innerlich schon am Limit ist.`,
        bewusstheit: `Was wäre, wenn der andere dich auch dann schätzt, wenn du gerade nicht glänzt? Darf das sein?`,
        uebung: `Sag dem wichtigsten Menschen heute ehrlich, wie es dir geht – ohne Hochglanz, ohne Leistung. Nur: „Ich bin gerade erschöpft." Dann schau, was er antwortet.`,
        autopilotEN: `When overwhelmed, you channel that pressure into performing for your primary person: you want to impress them, be irreplaceable, and shine—even when you are internally at your absolute limit.`,
        bewusstheitEN: `What if the other person cherishes you even when you aren't putting on a stellar performance? Are you allowed to just be?`,
        uebungEN: `Tell the person who matters most to you honestly how you are doing today—no polish, no performance. Simply say, "I'm just really overwhelmed right now." Then see how they respond.`
      },
      stagnation: {
        autopilot: `Stagnation fühlt sich wie das Ende der Anziehungskraft an: Man verliert das Glänzen, die Energie, die Wirkung. Der Rückzug oder die Suche nach neuem Feuer beginnt.`,
        bewusstheit: `Was wäre, wenn der andere dich auch in der stillen Phase schätzt – ohne Glanz, ohne Leistung? Darf das sein?`,
        uebung: `Verbring heute Zeit mit dem wichtigsten Menschen – ohne Inszenierung, ohne Leistung. Nur da sein. Beobachte, was dann zwischen euch entsteht.`,
        autopilotEN: `Stagnation feels like the death of your magnetic pull: it feels like you've lost your luster, your energy, and your impact. You immediately start to withdraw or go hunting for a new spark.`,
        bewusstheitEN: `What if the other person values you just as much during this quiet phase—without the high energy and achievements? Can you allow that to be true?`,
        uebungEN: `Spend time with the person who matters most to you today without any staging or performing. Just be in the room together. Observe what naturally unfolds between you.`
      },
    },

    "SE4": {
      erschoepfung: {
        autopilot: `Die Erschöpfung wird in Stille ertragen. Man klagt nicht, man zeigt wenig – aber man leidet. Der Rückzug nach innen wird stärker, und irgendwo bestätigt die Erschöpfung ein altes Bild: das Leben ist schwer, und man trägt es eben.`,
        bewusstheit: `Trägst du diese Erschöpfung alleine, weil du glaubst, dass niemand sie wirklich verstehen würde? Was wäre, wenn jemand sie tragen könnte – zusammen mit dir?`,
        uebung: `Schreibe auf, was du gerade trägst – ohne Schönreden, ohne Relativieren. Lies es dann laut vor, als würdest du es einem guten Menschen erzählen. Beobachte, wie sich das verändert.`,
        autopilotEN: `Exhaustion is endured in silence. You don't complain, you show very little—but you suffer. Your internal withdrawal deepens, and at some level, the exhaustion confirms an old narrative: life is heavy, and this is just the burden you carry.`,
        bewusstheitEN: `Are you carrying this exhaustion alone because you believe no one would truly understand it? What if someone could carry it—right alongside you?`,
        uebungEN: `Write down everything you are carrying right now—no sugarcoating, no downplaying. Then read it out loud, as if you were telling it to a trusted friend. Observe how that shifts things.`
      },
      konflikt: {
        autopilot: `Im Konflikt zieht man sich nach innen zurück. Die Verletzung wird getragen, manchmal lange, ohne dass der andere erfährt, wie tief sie sitzt. Aussen wenig – innen viel.`,
        bewusstheit: `Was trägst du gerade in dir, das der andere nicht weiss – und was würde passieren, wenn du es sagst?`,
        uebung: `Benenne einmal, was dich verletzt hat – ruhig, klar, ohne Dramatik. Nur: „Das hat mich verletzt, weil ...” Lass den Satz offen, wenn nötig.`,
        autopilotEN: `In a conflict, you retreat inward. You carry the hurt, sometimes for a very long time, without the other person ever knowing how deeply it cuts. Very little on the outside—a universe on the inside.`,
        bewusstheitEN: `What are you currently holding inside that the other person has no idea about—and what would happen if you actually said it?`,
        uebungEN: `Name what hurt you, just this once—calmly, clearly, without any drama. Simply say: "That hurt me because..." Leave the sentence open-ended if you need to.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird still ertragen – und gleichzeitig vertieft. Man wendet sich nach innen, pflegt die Melancholie, schreibt, träumt, fühlt. Das Alleinsein bekommt eine dunkle Schönheit, die den Kontakt nach außen noch schwerer macht.`,
        bewusstheit: `Schützt dich der Rückzug gerade – oder hält er dich dort, wo du leidest? Was wäre der erste kleine Schritt nach draußen?`,
        uebung: `Schreibe einen Brief an jemanden, den du vermisst – und schicke ihn ab. Kein langer Text. Nur: Ich denke an dich.`,
        autopilotEN: `Loneliness is quietly endured—and, at the same time, deepened. You turn inward, nurturing the melancholy, writing, dreaming, feeling. The solitude takes on a dark beauty, which makes reaching out to the outside world even harder.`,
        bewusstheitEN: `Is your withdrawal protecting you right now, or is it keeping you trapped where you suffer? What would a single, tiny step outward look like?`,
        uebungEN: `Write a note to someone you miss—and actually send it. It doesn't need to be long. Just: I'm thinking of you.`
      },
      entscheidung: {
        autopilot: `Jede Option wird innerlich aufgeladen: Was bedeutet diese Wahl über mich? Was geht für immer verloren, wenn ich mich anders entscheide? Die Entscheidung wird zur existenziellen Frage, statt zu einer konkreten Wahl.`,
        bewusstheit: `Wie viel Bedeutung lädst du auf diese Entscheidung? Und ist sie wirklich so endgültig – oder fühlt sie sich nur so an?`,
        uebung: `Schreibe auf, was du verlieren würdest – bei jeder Option. Dann schreibe auf, was du gewinnen würdest. Lass beide Listen gleichwertig nebeneinander stehen.`,
        autopilotEN: `Every option becomes loaded with internal meaning: What does this choice say about who I am? What will be lost forever if I choose differently? A simple decision becomes an existential crisis rather than a practical choice.`,
        bewusstheitEN: `How much weight are you forcing onto this decision? And is it truly that final—or does it just feel that way?`,
        uebungEN: `Write down what you would lose with each option. Then write down what you would gain. Let both lists sit side-by-side, giving them equal value.`
      },
      beziehungskrise: {
        autopilot: `Man trägt die Krise still – innerlich sehr viel, äußerlich wenig. Die Verletzung wird gehalten, manchmal über Wochen. Wenn sie sich dann äußert, kommt sie tief und schwer.`,
        bewusstheit: `Trägst du diese Krise allein, weil du glaubst, dass der andere sie nicht wirklich verstehen kann – oder hast du es wirklich versucht?`,
        uebung: `Sag dem anderen heute in einem ruhigen Moment, was dich in der Beziehung gerade wirklich bewegt – nicht die Anklage, den eigentlichen Schmerz. Nur einen Satz.`,
        autopilotEN: `You carry the crisis silently—swallowing an immense amount internally while showing very little on the outside. You hold onto the hurt, sometimes for weeks. When it finally surfaces, it comes out deep, heavy, and intense.`,
        bewusstheitEN: `Are you carrying this crisis alone because you believe the other person can't truly understand it—or have you actually given them a real chance to try?`,
        uebungEN: `In a quiet moment today, tell your partner what is truly weighing on you in the relationship—not an accusation, but the actual core pain. Just one sentence.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel ist existenziell: Ich bin grundlegend anders, und anders bedeutet: defekt. Das innere Narrativ vertieft sich: Andere haben es leichter, für sie ist das Leben zugänglicher. Ich bin zu viel oder zu wenig – nie genau richtig.`,
        bewusstheit: `Was wäre, wenn „anders sein“ keine Defizit-Aussage ist – sondern einfach eine Beschreibung? Wer hat gesagt, dass anders gleich falsch ist?`,
        uebung: `Schreibe drei Dinge auf, die an deiner Art zu sein wertvoll sind – nicht trotz deiner Tiefe, sondern wegen ihr. Lies sie laut vor und lass sie einen Moment gelten.`,
        autopilotEN: `Your self-doubt is existential: I am fundamentally different, and different means defective. The inner narrative deepens: Others have it easier; life is just more accessible to them. I am either too much or not enough—never just right.`,
        bewusstheitEN: `What if "being different" isn't a statement about a deficit—but simply a description? Who decided that different automatically means wrong?`,
        uebungEN: `Write down three things about your way of being that are valuable—not despite your depth, but precisely because of it. Read them out loud and let them carry weight for a moment.`
      },
      verlust: {
        autopilot: `Verlust wird tief gefühlt und oft allein getragen. Der Schmerz wird zum Kern der Identität: Ich bin derjenige, der verliert, dem etwas fehlt. Die Trauer kann sich verfestigen statt zu durchfließen.`,
        bewusstheit: `Was wäre, wenn dieser Verlust dich nicht definiert – sondern nur berührt? Und gibt es etwas jenseits des Schmerzes, das auch zu dir gehört?`,
        uebung: `Schreibe heute auf: Was habe ich durch diesen Verlust erfahren, das ich vorher nicht wusste? Nicht um den Schmerz zu verschönern – um das Ganze zu sehen.`,
        autopilotEN: `Loss is felt deeply and often carried entirely alone. The pain becomes the very core of your identity: I am the one who loses, the one who is lacking. The grief hardens into place instead of moving through you.`,
        bewusstheitEN: `What if this loss doesn't define you, but simply touches you? And is there a part of you beyond the pain that belongs to you, too?`,
        uebungEN: `Today, write down: What did I learn or experience through this loss that I didn't know before? Not to romanticize the pain—but to see the whole picture.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird intensiv erlebt und oft allein getragen. Der Druck mischt sich mit Selbstvorwürfen: Warum schaffe ich das nicht? Andere scheinen das leichter zu tragen. Die Isolation wächst.`,
        bewusstheit: `Was wäre, wenn dein Empfinden des Drucks nicht bedeutet, dass du schwächer bist – sondern dass du tiefer fühlst? Was täte dir jetzt wirklich gut?`,
        uebung: `Schreibe heute auf, was gerade zu viel ist – ehrlich, ohne Selbstkritik. Dann lies es vor wie ein Bericht: Das ist, was ist. Nicht mehr, nicht weniger.`,
        autopilotEN: `Being overwhelmed is felt intensely and usually carried alone. The pressure mixes with self-blame: Why can't I handle this? Others seem to carry this so much more effortlessly. Your isolation grows.`,
        bewusstheitEN: `What if the way you feel this pressure doesn't mean you are weaker—but simply that you feel things more deeply? What would actually comfort you right now?`,
        uebungEN: `Today, write down exactly what is too much—honestly, without any self-criticism. Then read it out loud like a matter-of-fact report: This is what is. No more, no less.`
      },
      stagnation: {
        autopilot: `Stagnation und innere Leere sind vertraut – und gefährlich. Man versinkt in ihr, macht sie zur Wohnstatt. Die Sehnsucht nach Intensität bleibt, aber die Energie, sie zu suchen, fehlt.`,
        bewusstheit: `Was wäre, wenn diese Leere nicht das Ende ist – sondern ein Raum, in dem etwas Neues entsteht? Was könnte gerade keimen?`,
        uebung: `Schaffe heute etwas Kleines – ein Satz, ein Bild, eine Zeile. Nicht für andere. Nur um dem Schweigen etwas entgegenzusetzen. Das genügt.`,
        autopilotEN: `Stagnation and internal emptiness feel familiar—and dangerously comfortable. You sink into them, making them your home. The longing for intensity remains, but you lack the energy to go looking for it.`,
        bewusstheitEN: `What if this emptiness isn't the end—but rather a blank canvas where something new can begin? What might be quietly trying to take root right now?`,
        uebungEN: `Create something small today—a sentence, a sketch, a single line. Not for anyone else. Just to put something out there against the silence. That is enough.`
      },
    },

    "SO4": {
      erschoepfung: {
        autopilot: `Die Erschöpfung wird sichtbar – und gleichzeitig mit Scham begleitet. Man vergleicht sich mit anderen, die scheinbar leichter durch das Leben kommen. Die Erschöpfung bestätigt das Gefühl, irgendwie zurückzubleiben.`,
        bewusstheit: `Was wäre, wenn deine Erschöpfung kein Zeichen von Minderwertigkeit wäre, sondern ein Zeichen dafür, dass du wirklich intensiv lebst? Würde sich etwas verschieben, wenn du sie so betrachtetest?`,
        uebung: `Schreibe heute einen einzigen Satz über deine Erschöpfung – nicht als Klage, sondern als neutrale Beobachtung. "Ich bin erschöpft" – und dann atme. Mehr nicht.`,
        autopilotEN: `Your exhaustion becomes visible—and at the same time, it is accompanied by deep shame. You constantly compare yourself to others who seemingly navigate life with much more ease. The exhaustion only confirms your internal narrative that you are somehow falling behind.`,
        bewusstheitEN: `What if your exhaustion isn't a badge of inadequacy, but rather proof that you live life with true emotional intensity? Would something shift inside you if you looked at it that way?`,
        uebungEN: `Today, write down a single sentence about your exhaustion—not as a complaint, but as a neutral observation. "I am exhausted"—and then take a breath. Nothing more.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Verletzung gross und sichtbar. Man fühlt sich missverstanden, abgewertet, nicht gesehen – und das bestätigt ein tiefes inneres Bild. Der Vergleich mit anderen kann auftauchen: Beim anderen ist das nie so ein Problem.`,
        bewusstheit: `Sprichst du gerade über diesen konkreten Konflikt – oder über etwas Älteres, das dieser Moment berührt hat?`,
        uebung: `Trenne das Heutige vom Alten: Was ist genau in diesem Gespräch passiert – beschrieben in einem sachlichen Satz? Dann erst: Was hat es berührt?`,
        autopilotEN: `In a conflict, your sense of hurt becomes massive and highly visible. You feel deeply misunderstood, dismissed, or unseen—which immediately validates an old internal wound. Comparison creeps in: Other people never seem to struggle with this the way I do.`,
        bewusstheitEN: `Are you actually arguing about this specific conflict right now—or are you reacting to an older pain that this moment has accidentally triggered?`,
        uebungEN: `Separate what is happening today from what belongs to the past. Describe exactly what happened in this conversation in one objective sentence. Only then ask yourself: What old wound did it touch?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bestätigt den Vergleich: Andere haben echte Verbindungen, anderen gelingt das Dazugehören. Man zieht sich zurück und beobachtet von außen, wie das Leben der anderen verläuft – und spürt den Schmerz des Abstands.`,
        bewusstheit: `Was siehst du bei anderen, das du dir für dich selbst wünschst? Und wie viel davon ist wirklich unerreichbar – oder nur unversucht?`,
        uebung: `Tu heute etwas, das Verbindung möglich macht – auch wenn es sich unvollkommen anfühlt. Eine Nachricht schicken, ein Gespräch beginnen. Nicht perfekt. Nur echt.`,
        autopilotEN: `Loneliness fuels the habit of comparison: Others have real connections; others know how to belong. You pull back into the role of the outsider, watching from the fringes as everyone else's lives unfold—and feeling the painful ache of the distance.`,
        bewusstheitEN: `What exactly do you see in others that you secretly wish for yourself? And how much of that is truly out of your reach, and how much is just untried?`,
        uebungEN: `Do one small thing today that makes connection possible—even if it feels awkward or unpolished. Send a quick text, start a casual conversation. Don't worry about it being perfect. Just make it real.`
      },
      entscheidung: {
        autopilot: `Man beobachtet, was andere wählen – und vergleicht sich. Was wählt jemand wie ich? Was wählen die, die dazugehören? Die eigene Stimme wird kaum gehört, weil sie immer schon im Vergleichsmodus ist.`,
        bewusstheit: `Was möchtest du – ohne Vergleich, ohne Referenzrahmen? Gibt es eine Ahnung in dir, die du immer wieder übertönst?`,
        uebung: `Frage dich: Was würde ich wählen, wenn ich nie wüsste, was andere in dieser Situation wählen? Schreibe diese Antwort auf und halte daran fest.`,
        autopilotEN: `You obsess over what choices others are making—and constantly measure yourself against them. What does someone like me choose? What do the people who actually belong choose? Your own true voice is barely audible because your mind is always in comparison mode.`,
        bewusstheitEN: `What is it that you actually want—completely free of comparisons, benchmarks, or reference points? Is there a quiet intuition inside you that you keep drowning out?`,
        uebungEN: `Ask yourself: What would I choose right now if I had absolutely no idea what anyone else would choose in this situation? Write that answer down and anchor yourself to it.`
      },
      beziehungskrise: {
        autopilot: `Man vergleicht – mit anderen Paaren, anderen Verbindungen, einem idealisierten Bild. Diese Beziehung fühlt sich in der Krise wie ein Zeichen an: Andere haben es leichter, bei mir stimmt etwas nicht.`,
        bewusstheit: `Was wäre, wenn diese Beziehung gerade genau so ist, wie Beziehungen manchmal sein können – schwierig, unfertig, und trotzdem real? Was würdest du dann tun?`,
        uebung: `Schreibe auf, was diese Beziehung dir schon gegeben hat – konkret, nicht ideell. Dann tritt mit dieser Liste in das Gespräch, das nötig ist.`,
        autopilotEN: `You fall into the comparison trap—comparing your partnership to other couples, other dynamics, or an idealized fantasy. In a crisis, this relationship feels like definitive proof: Others have it easier; something is fundamentally wrong with me.`,
        bewusstheitEN: `What if this relationship is simply exactly how relationships can be sometimes—messy, unfinished, and yet completely real? What would you do from this vantage point?`,
        uebungEN: `Write down what this relationship has genuinely given you—focusing on concrete examples, not abstract ideals. Take that list with you into the conversation that needs to happen.`
      },
      selbstzweifel: {
        autopilot: `Man vergleicht sich – und verliert dabei immer. Andere scheinen sicherer, selbstverständlicher, normaler. Der Selbstzweifel bestätigt: Bei mir fehlt etwas, das andere haben.`,
        bewusstheit: `Was wäre, wenn der Vergleich gerade nicht fair ist – weil du deinen Innenraum mit dem Außenbild der anderen vergleichst? Was weißt du wirklich über ihr Innenleben?`,
        uebung: `Schreib heute auf, was dich – ganz konkret – von anderen unterscheidet und was daran wertvoll ist. Nicht den Mangel. Den Beitrag.`,
        autopilotEN: `You compare yourself to others—and you always end up losing. Everyone else seems more secure, more grounded, more normal. Your self-doubt whispers a familiar story: I am missing a vital piece that everyone else has.`,
        bewusstheitEN: `What if this comparison is completely unfair because you are comparing your messy internal reality to everyone else's polished external facade? What do you actually know about their inner lives?`,
        uebungEN: `Today, write down what specifically sets you apart from others, and focus on why that difference is valuable. Don't focus on the perceived lack. Focus on your unique contribution.`
      },
      verlust: {
        autopilot: `Man fühlt den Verlust tief – und vergleicht: Andere verlieren auch, aber bei mir ist es anders, schwerer, einsamer. Der Schmerz erhält eine besondere Färbung, die zugleich verbindet und isoliert.`,
        bewusstheit: `Was wäre, wenn dein Schmerz weder kleiner noch größer ist als der anderer – sondern einfach deiner? Wie würde es sich anfühlen, ihn ohne Vergleich zu tragen?`,
        uebung: `Such heute jemanden, der ebenfalls verloren hat – ohne zu vergleichen. Hört euch gegenseitig zu. Lass den anderen Schmerz neben deinem stehen, nicht gegen ihn.`,
        autopilotEN: `You feel loss deeply—and immediately begin to compare: Others lose things too, but for me it's different, heavier, lonelier. Your pain takes on a unique coloring that simultaneously connects you to humanity and isolates you from it.`,
        bewusstheitEN: `What if your pain is neither smaller nor greater than anyone else's—but simply yours to hold? How would it feel to carry it without constantly measuring it?`,
        uebungEN: `Connect with someone today who has also experienced loss—without turning it into a comparison. Just listen to one another. Let their pain sit comfortably alongside yours, rather than competing with it.`
      },
      ueberforderung: {
        autopilot: `Man vergleicht sich: Andere scheinen mit demselben Druck besser umzugehen. Der Selbstzweifel unter der Überforderung macht sie schwerer. Man zieht sich zurück statt zu bitten.`,
        bewusstheit: `Was wäre, wenn du heute um Hilfe bittest – nicht weil du schwach bist, sondern weil du ein Mensch mit Grenzen bist?`,
        uebung: `Bitte heute konkret eine Person um Unterstützung – eine spezifische Aufgabe, eine klare Bitte. Kein allgemeines „Ich bin überfordert", sondern: „Kannst du … übernehmen?"`,
        autopilotEN: `You measure yourself against the room: Others seem to handle this exact same pressure so much better. The self-doubt underlying your overwhelm makes the burden twice as heavy. You withdraw into isolation instead of asking for help.`,
        bewusstheitEN: `What if you reached out for support today—not because you are weak, but because you are a human being with real, valid boundaries?`,
        uebungEN: `Ask one specific person for a tangible piece of help today. Don't just say a general "I'm overwhelmed," but offer a clear request: "Could you take over this specific task for me?"`
      },
      stagnation: {
        autopilot: `Stagnation aktiviert den Vergleich: Andere bewegen sich, wachsen, erleben. Ich stehe still. Der Schmerz darüber verfestigt sich zur Überzeugung: Mir fehlt etwas Grundlegendes.`,
        bewusstheit: `Was wäre, wenn andere gerade auch stillstehen – du es nur nicht siehst? Und was ist in dir vorhanden, auch jetzt?`,
        uebung: `Schreibe heute drei Dinge auf, die in dir lebendig sind – nicht was du tust, was du bist: eine Eigenschaft, ein Wert, eine Fähigkeit. Lass sie gelten.`,
        autopilotEN: `Stagnation triggers the comparison loop: Others are moving, growing, and experiencing life. I am completely stuck. The pain of this realization hardens into a core conviction: I am fundamentally flawed.`,
        bewusstheitEN: `What if the people you are watching are secretly feeling stuck too, and you just can't see it? What alive qualities are still resting inside you right now?`,
        uebungEN: `Today, write down three things that are vibrantly alive within you—not what you do, but who you are. A personality trait, a core value, or an inherent gift. Let them be enough.`
      },
    },

    "SX4": {
      erschoepfung: {
        autopilot: `Wenn Erschöpfung kommt, steigen die Anforderungen – an sich selbst und an andere. Intensität wird als Mittel gegen die innere Leere eingesetzt. Man fordert mehr, erwartet mehr, gibt mehr – bis gar nichts mehr geht.`,
        bewusstheit: `Was steht hinter der Intensität gerade? Ist es Leidenschaft – oder ist es die Angst vor dem, was da wäre, wenn alles ruhiger würde?`,
        uebung: `Halte inne in einem intensiven Moment und frage dich: Was fühle ich wirklich – unter der Intensität? Atme einmal tief. Benenne das, was auftaucht, ohne es sofort zu verwandeln.`,
        autopilotEN: `When exhaustion sets in, your internal demands only escalate—both for yourself and for others. You weaponize emotional intensity as an antidote to inner emptiness. You demand more, expect more, and give more, until you hit an absolute wall.`,
        bewusstheitEN: `What is actually driving all this intensity right now? Is it true passion, or is it a deep-seated fear of what you might discover if everything suddenly became quiet?`,
        uebungEN: `Pause in the middle of a highly intense moment and ask yourself: What am I actually feeling beneath all this electricity? Take a single deep breath. Simply name whatever surfaces, without trying to instantly transform it.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird mehr Tiefe, mehr Ehrlichkeit, mehr Intensität gefordert. Oberflächliche Lösungen werden abgelehnt. Der andere soll wirklich sehen, worum es geht – und das erzeugt manchmal Druck.`,
        bewusstheit: `Ist das Niveau der Intensität, das du gerade einforderst, wirklich für den anderen erreichbar – oder übersteigst du es in einer Weise, die ihn eher wegtreibt?`,
        uebung: `Formuliere das, was du wirklich brauchst, in einfachen Worten – ohne dramatischen Rahmen. Nicht was der andere tun sollte, sondern was du brauchst.`,
        autopilotEN: `In a conflict, you demand more depth, more radical honesty, and more intensity. You reject superficial quick fixes out of hand. You need the other person to truly see what is at stake—which can end up creating immense pressure.`,
        bewusstheitEN: `Is the level of emotional intensity you are demanding realistically achievable for the other person right now, or are you cranking it up so high that it actually drives them away?`,
        uebungEN: `Try stating what you truly need in plain, simple terms—free of any dramatic framing. Focus not on what the other person should be doing, but solely on what you need.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit trifft besonders tief, weil die Sehnsucht nach Verschmelzung so stark ist. Gleichzeitig schützt man sich davor: Wenn niemand nah ist, kann niemand verletzen. Der Rückzug schützt und isoliert zugleich.`,
        bewusstheit: `Hältst du Abstand, weil du Ruhe brauchst – oder weil Nähe dich ängstigt? Was wäre, wenn du beides gleichzeitig wahr sein lässt?`,
        uebung: `Erlaube dir heute, jemandem gegenüber ein Stück Verletzlichkeit zu zeigen. Nicht alles – nur einen echten Moment. Beobachte, was das in der Verbindung bewegt.`,
        autopilotEN: `Loneliness cuts you incredibly deep because your longing for absolute fusion is so powerful. At the same time, you preemptively guard against it: you believe that if no one gets close, no one can hurt you. Your withdrawal serves as both a shield and a prison.`,
        bewusstheitEN: `Are you keeping your distance because you genuinely need peace, or because closeness terrifies you? What if both of those things could be true at the exact same time?`,
        uebungEN: `Give yourself permission to reveal a small piece of true vulnerability to someone today. Not the whole universe—just one authentic moment. Observe what that shifts within the connection.`
      },
      entscheidung: {
        autopilot: `Jede Wahl wird zum Ringen: Welche Option ist wirklich echt, wirklich ich? Keine Option fühlt sich vollständig an, jede hat etwas Unzulängliches. Die Entscheidung dreht sich im Kreis der Idealvorstellung.`,
        bewusstheit: `Gibt es eine Option, die sich am lebendigsten anfühlt – auch wenn sie nicht ideal ist? Und was wäre, wenn das genug wäre?`,
        uebung: `Wähle die Option, die sich im Körper am stimmigsten anfühlt – nicht die, die das Denken als richtig ausweist. Dann stehe dazu, auch wenn sie unvollkommen ist.`,
        autopilotEN: `Every choice turns into an internal battle: Which option is genuinely authentic? Which one is truly me? No path feels entirely whole; each one feels somehow lacking. The decision loops endlessly in the orbit of an impossible ideal.`,
        bewusstheitEN: `Is there an option on the table that simply feels the most alive—even if it isn't perfect? What if that were allowed to be enough?`,
        uebungEN: `Choose the option that resonates most clearly in your body, rather than the one your intellect tries to validate as correct. Then stand by it, unpolished as it may be.`
      },
      beziehungskrise: {
        autopilot: `Die Krise löst intensive Forderungen aus: mehr Echtheit, mehr Tiefe, mehr Ehrlichkeit – jetzt. Der andere kommt damit nicht mit. Das bestätigt den Verdacht: Niemand kann wirklich halten, was ich brauche.`,
        bewusstheit: `Ist das, was du gerade forderst, wirklich das, was die Krise braucht – oder ist es das, was du dir schon immer gewünscht hast und nie bekommen hast?`,
        uebung: `Nenne dem anderen genau eine Sache, die du dir jetzt wünschst – konkret, erreichbar, heute. Nicht das Ganze, nur diesen einen Schritt.`,
        autopilotEN: `A crisis triggers intense, immediate demands from you: more authenticity, more depth, more raw honesty—right now. When the other person can't keep pace, it confirms your oldest suspicion: No one is capable of truly holding the weight of what I need.`,
        bewusstheitEN: `Is what you are demanding right now actually what the crisis requires to heal—or is it what you have always longed for and never managed to receive?`,
        uebungEN: `Tell your partner exactly one thing you want from them right now—something concrete, achievable, and possible today. Not the entire relationship overhaul, just this single step.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel wird intensiv und dunkel: Bin ich wirklich authentisch? Habe ich mich verloren? War das, was ich gezeigt habe, wirklich echt – oder eine Rolle? Die innere Kritik sucht nach Unwahrheit in der eigenen Tiefe.`,
        bewusstheit: `Was wäre, wenn dein Zweifel selbst ein Zeichen deiner Echtheit ist – denn nur wer wirklich fühlt, zweifelt so tief? Könnte das auch wahr sein?`,
        uebung: `Schreibe auf, was du in diesem Moment wirklich fühlst – ohne es zu formen, ohne es zu schönen. Roher Text. Das ist du. Das ist real.`,
        autopilotEN: `Your self-doubt becomes heavy, intense, and dark: Am I actually being authentic? Have I lost myself? Was what I just showed real, or was it just a performance? Your inner critic relentlessly dissects your deep layers, looking for any trace of falsehood.`,
        bewusstheitEN: `What if the very fact that you are doubting is proof of your authenticity? After all, only someone who feels deeply could ever doubt themselves this thoroughly. Could that be true too?`,
        uebungEN: `Write down exactly what you are feeling in this exact moment—without shaping it, without dressing it up. Just raw text. That is you. That is real.`
      },
      verlust: {
        autopilot: `Verlust wird mit großer Intensität erlebt. Der Schmerz kann alles überfluten – Kunst, Rückzug, intensive Gespräche werden zum Kanal. Manchmal wird das Leiden selbst zur Verbindung: Wer tiefer fühlt, lebt echter.`,
        bewusstheit: `Was wäre, wenn der Schmerz auch dann echt ist, wenn er leiser wird? Muss Trauer immer intensiv sein, um wahr zu sein?`,
        uebung: `Gestalte heute etwas aus dem Verlust – ein Bild, eine Zeile, eine Collage. Nicht um es zu zeigen. Nur um dem Schmerz eine Form zu geben, die ihn trägt.`,
        autopilotEN: `You experience loss with overwhelming intensity. The pain can completely flood your world, channeled into art, deep isolation, or heavy conversations. Sometimes, suffering itself becomes a badge of connection: The more deeply I hurt, the more authentically I live.`,
        bewusstheitEN: `What if your pain remains entirely real even as it begins to quiet down? Does grief always have to be deafening to be true?`,
        uebungEN: `Channel something out of your loss today—a drawing, a written line, a collage. Not to show it off to an audience. Simply to give the pain a physical form that can help carry it.`
      },
      ueberforderung: {
        autopilot: `Überforderung bricht intensiv durch: entweder als kreativer Exzess, als emotionaler Ausbruch oder als totaler Rückzug. Die Stimmung kippt – von brennend zu erloschen.`,
        bewusstheit: `Was brauchst du in diesem Moment – Rückzug oder Verbindung? Und weißt du, wer dir das geben kann?`,
        uebung: `Gib dem Druck heute eine Form: schreibe, zeichne, bewege dich. Nicht um das Problem zu lösen – um die Energie zu entladen, damit du klarer siehst.`,
        autopilotEN: `Being overwhelmed breaks through in dramatic waves: either as a sudden creative obsession, a raw emotional outburst, or a total, freezing withdrawal. Your mood swings violently—from burning bright to completely burnt out.`,
        bewusstheitEN: `What is it that you truly need in this exact moment—to pull back into isolation, or to reach out for connection? And do you know who can realistically offer that to you?`,
        uebungEN: `Give the pressure a tangible outlet today: write it out, sketch it, or move your body. Don't try to solve the underlying problem—just discharge the raw energy so you can see clearly again.`
      },
      stagnation: {
        autopilot: `Ohne Intensität fühlt sich das Leben tot an. Man greift nach dem nächsten emotionalen Erlebnis, der nächsten Tiefe, dem nächsten Schmerz oder der nächsten Begeisterung – nur um nicht in der Leere zu sitzen.`,
        bewusstheit: `Was wäre, wenn die Stille gerade das intensivste Erlebnis ist – wenn du ihr wirklich begegnest?`,
        uebung: `Sitz heute zwanzig Minuten mit der Leere – ohne sie zu füllen, ohne wegzugehen. Dann schreibe einen Satz: Was habe ich in der Stille gehört?`,
        autopilotEN: `Without emotional intensity, life feels flat and dead. You instinctively reach for the next heavy experience, the next deep encounter, the next wave of pain or rush of excitement—anything to avoid sitting face-to-face with the void.`,
        bewusstheitEN: `What if the quiet stillness is actually the most intense experience available to you—if you were brave enough to truly meet it?`,
        uebungEN: `Sit quietly with the emptiness today for twenty minutes—without trying to fill it, without trying to escape it. Afterward, write down a single sentence: What did I actually hear in the silence?`
      },
    },

    "SE5": {
      erschoepfung: {
        autopilot: `Der Rückzug wird noch tiefer. Man minimiert Kontakt, Anforderungen, äußere Reize – in der Hoffnung, dass die Stille Energie zurückbringt. Aber die Erschöpfung sitzt tiefer, und der Rückzug gibt nur kurzfristig Erleichterung.`,
        bewusstheit: `Wofür sparst du deine Energie gerade auf? Und ist das, wofür du sie sparst, wirklich das, was du jetzt brauchst?`,
        uebung: `Setz dich in absolute Stille – ohne Buch, ohne Plan, ohne Analyse. Beobachte, was kommt. Nicht verstehen wollen – nur wahrnehmen.`,
        autopilotEN: `Stagnation triggers even more withdrawal: you read, ponder, and hoard information—but you don't take action. Analyzing the stagnation ends up replacing the act of breaking through it. The retreat morphs into a comfortable habit.`,
        bewusstheitEN: `What is the smallest possible step you could take toward the outside world right now—not the perfect step, just the smallest one? What if you took it today?`,
        uebungEN: `Choose one specific thing that you have known how to do for a long time but haven't actually executed. Do it within the next twenty minutes. Do not prepare—just start.`
      },
      konflikt: {
        autopilot: `Im Konflikt kommt der Rückzug. Man braucht Abstand, Zeit, Stille – um zu verarbeiten, was passiert ist. Nach aussen wirkt das kalt oder desinteressiert, obwohl innen viel in Bewegung ist.`,
        bewusstheit: `Braucht der andere gerade ein Signal von dir, dass du noch da bist – auch wenn du Zeit zum Verarbeiten brauchst?`,
        uebung: `Sage dem anderen kurz, was du brauchst: „Ich brauche etwas Zeit, um das zu verarbeiten. Ich komme wieder.” Das schliesst die Verbindung, anstatt sie abzuschneiden.`,
        autopilotEN: `In conflict comes withdrawal. You need distance, time, silence - to process what happened. On the outside it seems cold or disinterested, even though there is a lot going on inside.`,
        bewusstheitEN: `Does the other person need a signal from you that you are still there - even if you need time to process it?`,
        uebungEN: `Briefly tell the other person what you need: "I need some time to process this. I'll be back." This closes the connection instead of cutting it off.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit ist für den SE5 fast ein Normalzustand – bekannt, kontrolliert, irgendwie sicher. Man schützt die eigene Energie, minimiert Anforderungen. Aber irgendwo bleibt ein leises Gefühl von Abgeschnittensein.`,
        bewusstheit: `Ist dieser Rückzug gerade Erholung – oder Vermeidung? Gibt es jemanden, den du vermisst, ohne es dir einzugestehen?`,
        uebung: `Plane heute einen kleinen, konkreten Kontaktmoment – kurz, dosiert, auf deinen Bedingungen. Nicht weil du musst, sondern weil Verbindung dich auch nährt.`,
        autopilotEN: `Loneliness is almost a normal state for the SE5 - familiar, controlled, somehow safe. You protect your own energy and minimize demands. But somewhere there remains a slight feeling of being cut off.`,
        bewusstheitEN: `Is this withdrawal just relaxation – or avoidance? Is there someone you miss without admitting it to yourself?`,
        uebungEN: `Plan a small, concrete contact moment today – short, measured, on your terms. Not because you have to, but because connection also nourishes you.`
      },
      entscheidung: {
        autopilot: `Man braucht mehr Information, mehr Zeit, mehr Analyse – bevor eine Entscheidung fällt. Der innere Impuls: Wenn ich nur genug weiß, werde ich sicher nicht falsch liegen. Aber genug weiß man nie.`,
        bewusstheit: `Ab welchem Punkt hättest du genug Informationen – und gibt es diesen Punkt wirklich? Was würde passieren, wenn du jetzt entscheidest, mit dem, was du weißt?`,
        uebung: `Setze eine Informationsgrenze: Erlaube dir noch eine Quelle, ein Gespräch, eine Analyse. Dann entscheide – auch wenn sich das Wissen noch unvollständig anfühlt.`,
        autopilotEN: `You need more information, more time, more analysis – before a decision is made. The inner impulse: If I only know enough, I certainly won't be wrong. But you never know enough.`,
        bewusstheitEN: `At what point would you have enough information - and does this point really exist? What would happen if you decided now, with what you know?`,
        uebungEN: `Set an information limit: Allow yourself one more source, one conversation, one more analysis. Then decide – even if the knowledge still feels incomplete.`
      },
      beziehungskrise: {
        autopilot: `Man zieht sich zurück – braucht Abstand, Stille, Zeit. Der andere erlebt das als Gleichgültigkeit oder Kälte, was die Krise oft verschärft. Innen wird viel verarbeitet, was nach außen kaum sichtbar ist.`,
        bewusstheit: `Braucht der andere gerade ein Signal, dass du noch da bist – auch wenn du Abstand brauchst? Was wäre das kleinste Zeichen, das du ihm geben könntest?`,
        uebung: `Schreibe dem anderen eine kurze Nachricht, auch wenn du noch nicht reden kannst: „Ich bin noch da. Ich brauche etwas Zeit. Ich komme wieder." Das hält die Verbindung.`,
        autopilotEN: `You withdraw – you need distance, silence, time. The other person experiences this as indifference or coldness, which often exacerbates the crisis. A lot is processed inside that is hardly visible from the outside.`,
        bewusstheitEN: `Does the other person need a signal that you are still there - even if you need distance? What would be the smallest sign you could give him?`,
        uebungEN: `Write a short message to the other person, even if you can't talk yet: "I'm still here. I need some time. I'll be back." That keeps the connection.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel nimmt die Form von Inkompetenz-Angst an: Ich weiß nicht genug, habe nicht genug verstanden, bin nicht kompetent genug für diese Situation. Der Rückzug in mehr Analyse gibt Sicherheit – aber löst den Zweifel nicht.`,
        bewusstheit: `Was wäre, wenn du für diese Situation kompetent genug bist – mit dem, was du bereits weißt? Was würde sich verändern, wenn du dieser Einschätzung vertraust?`,
        uebung: `Entscheide oder handle einmal ohne weitere Vorbereitung. Benenne danach, was gut war – nicht was fehlte. Baue so ein anderes inneres Erzählmuster auf.`,
        autopilotEN: `Self-doubt takes the form of fear of incompetence: I don't know enough, I don't understand enough, I'm not competent enough for this situation. Retreating into more analysis provides security - but does not solve the doubt.`,
        bewusstheitEN: `What if you were competent enough to handle this situation with what you already know? What would change if you trusted this assessment?`,
        uebungEN: `Decide or act once without further preparation. Name what was good - not what was missing. Build a different inner narrative pattern.`
      },
      verlust: {
        autopilot: `Verlust wird innerlich verarbeitet, oft ohne es zu zeigen. Man denkt über den Verlust nach, analysiert ihn – aber die emotionale Tiefe bleibt privat, manchmal so privat, dass sie sich nicht entfalten kann.`,
        bewusstheit: `Was wäre, wenn du heute den Verlust nicht nur verstehst – sondern ihn auch fühlst? Gibt es einen Menschen, dem du das zeigen könntest?`,
        uebung: `Schreibe heute in einem unzensiert-privaten Text auf, was du verloren hast und was du fühlst. Keine Analyse, keine Erklärung – nur Empfindung in Worten.`,
        autopilotEN: `Loss is processed internally, often without showing it. You think about the loss, analyze it - but the emotional depth remains private, sometimes so private that it cannot unfold.`,
        bewusstheitEN: `What if today you not only understood the loss - but also felt it? Is there someone you could show this to?`,
        uebungEN: `Today, write down what you've lost and what you're feeling in an uncensored, private text. No analysis, no explanation - just feeling in words.`
      },
      ueberforderung: {
        autopilot: `Überforderung führt zum Rückzug: Man braucht Raum, Zeit, Stille. Soziale Anforderungen werden reduziert. Das gibt kurzfristig Erholung – aber wenn der Rückzug zu lang wird, wächst die Isolation.`,
        bewusstheit: `Wie viel Rückzug brauchst du wirklich – und ab wann schadet er? Gibt es jemanden, dem du heute kurz sagst, wie es dir geht?`,
        uebung: `Schreibe heute eine Liste: Was kann ich wirklich weglassen? Was muss ich tun? Was kann ich delegieren? Dann handle nach dieser Liste – nicht nach dem Gefühl.`,
        autopilotEN: `Overwhelm leads to withdrawal: you need space, time, silence. Social requirements are reduced. This provides short-term relief - but if the withdrawal becomes too long, isolation increases.`,
        bewusstheitEN: `How much withdrawal do you really need – and at what point does it become harmful? Is there anyone you'd like to tell briefly today how you're feeling?`,
        uebungEN: `Write a list today: What can I really leave out? What do i have to do? What can I delegate? Then act according to this list - not according to feeling.`
      },
      stagnation: {
        autopilot: `Stagnation führt zu mehr Rückzug: Man liest, denkt, sammelt – aber handelt nicht. Die Analyse der Stagnation ersetzt das Durchbrechen. Der Rückzug wird zur komfortablen Gewohnheit.`,
        bewusstheit: `Was wäre der kleinste mögliche Schritt nach außen – nicht der perfekte, der kleinste? Was wäre, wenn du ihn heute gehst?`,
        uebung: `Wähle heute eine Sache, die du schon lange weißt, aber nicht getan hast. Tu sie in zwanzig Minuten. Nicht vorbereiten – einfach anfangen.`,
        autopilotEN: `Stagnation leads to more withdrawal: you read, think, collect - but don't act. Analyzing stagnation replaces breaking through. Withdrawal becomes a comfortable habit.`,
        bewusstheitEN: `What would be the smallest possible step outward – not the perfect one, the smallest one? What if you left him today?`,
        uebungEN: `Today, choose one thing that you have known for a long time but have not done. Do it in twenty minutes. Don't prepare - just start.`
      },
    },

    "SO5": {
      erschoepfung: {
        autopilot: `Man zieht sich von sozialen Verpflichtungen zurück und taucht tiefer in Wissen oder Analyse ein. Das fühlt sich produktiv an – ist aber oft ein Weg, der Erschöpfung nicht direkt zu begegnen.`,
        bewusstheit: `Was würde passieren, wenn du gerade nichts analysierst, nichts verstehst, nichts weißt – sondern einfach bist? Wie lange kannst du das aushalten?`,
        uebung: `Verbring zwanzig Minuten in der Natur, ohne Ziel, ohne inneren Vortrag, ohne Buch. Beobachte, was mit deinem Geist passiert, wenn er keine Aufgabe hat.`,
        autopilotEN: `You retreat into your intellect and observe your own stagnation from a clinical distance: analyzing it, categorizing it, and explaining it away. But intellectually understanding the void doesn't dissolve it—it only prolongs it.`,
        bewusstheitEN: `What if you stopped analyzing the standstill today and simply did something—anything small, tangible, and immediate?`,
        uebungEN: `Go outside today and do something physical with your hands: garden, cook, or build something. No abstract thinking allowed. Just act, and feel whatever naturally unfolds in the process.`
      },
      konflikt: {
        autopilot: `Im Konflikt tritt die Analyse in den Vordergrund. Man versucht, die Situation zu verstehen, Muster zu erkennen, rational zu klären – während der emotionale Gehalt des Konflikts unberührt bleibt.`,
        bewusstheit: `Analysierst du gerade den Konflikt – oder bist du wirklich dabei? Was fühlst du, wenn du aufhörst zu analysieren?`,
        uebung: `Sage dem anderen einmal, wie du dich in diesem Konflikt fühlst – nicht was du denkst. Ein Satz: „Ich fühl gerade ...”`,
        autopilotEN: `In conflict, analysis comes to the fore. You try to understand the situation, recognize patterns, clarify it rationally - while the emotional content of the conflict remains untouched.`,
        bewusstheitEN: `Are you currently analyzing the conflict – or are you really there? What do you feel when you stop analyzing?`,
        uebungEN: `Tell the other person how you feel about this conflict - not what you think. One sentence: “I just feel...”`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit Wissen befüllt – Bücher, Analysen, Konzepte. Man zieht sich in den Intellekt zurück und gibt der Einsamkeit einen Rahmen: Ich forsche, also bin ich da. Aber die Leere unter dem Denken bleibt.`,
        bewusstheit: `Was sucht dein Geist gerade, das das Wissen nicht geben kann? Gibt es eine Verbindung, die du dir wünschst, aber nicht aussprichst?`,
        uebung: `Tausche heute ein Buch gegen ein Gespräch – mit jemandem, dem du dich intellektuell verbunden fühlst. Nicht um zu analysieren. Um wirklich da zu sein.`,
        autopilotEN: `Solitude is filled with knowledge – books, analyses, concepts. You retreat into your intellect and give your loneliness a framework: I am researching, therefore I am there. But the emptiness beneath the thought remains.`,
        bewusstheitEN: `What is your mind looking for right now that knowledge cannot give? Is there a connection you want but don't say?`,
        uebungEN: `Swap a book for a conversation today with someone you feel intellectually connected to. Not to analyze. To really be there.`
      },
      entscheidung: {
        autopilot: `Man sucht nach dem theoretisch schlüssigsten System, dem Modell, das die Entscheidung logisch auflöst. Die Analyse wird gründlicher, umfassender – aber die Entscheidung selbst verzögert sich immer weiter.`,
        bewusstheit: `Gibt es unter all der Analyse eine stille Ahnung, was du wirklich willst? Und wäre es möglich, dieser Ahnung zu folgen – auch ohne das perfekte System dahinter?`,
        uebung: `Schreibe die Entscheidungsfrage auf ein Blatt Papier. Dann schreibe in zwei Minuten, ohne nachzudenken, die erste Antwort die kommt. Lies sie. Das ist oft nah an der Wahrheit.`,
        autopilotEN: `You look for the most theoretically coherent system, the model that logically resolves the decision. The analysis is becoming more thorough and comprehensive - but the decision itself is being delayed further and further.`,
        bewusstheitEN: `Beneath all the analysis, is there a hidden sense of what you really want? And would it be possible to follow this hunch – even without the perfect system behind it?`,
        uebungEN: `Write the decision question on a piece of paper. Then, in two minutes, without thinking, write the first answer that comes. Read them. This is often close to the truth.`
      },
      beziehungskrise: {
        autopilot: `Man analysiert die Krise: Was ist schiefgelaufen? Welche Muster liegen zugrunde? Die Analyse gibt Struktur – aber sie ersetzt das Gespräch nicht, das eigentlich nötig wäre.`,
        bewusstheit: `Du verstehst die Krise vielleicht besser als du sie erlebst. Was wäre, wenn du gerade weniger analysierst und mehr einfach da bist – mit dem anderen, in diesem Moment?`,
        uebung: `Setz dich mit dem anderen zusammen – ohne Analyse, ohne Erklärung. Nur: „Wie geht es dir?" und dann: wirklich zuhören, ohne das Gespräch in ein Modell zu übersetzen.`,
        autopilotEN: `You analyze the crisis: What went wrong? What are the underlying patterns? The analysis provides structure - but it does not replace the conversation that would actually be necessary.`,
        bewusstheitEN: `You may understand the crisis better than you experience it. What if you analyzed less and just were there more - with the other person, in this moment?`,
        uebungEN: `Sit down with the other person – without analysis, without explanation. Just: “How are you?” and then: really listen without translating the conversation into a model.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf das Denken selbst: Ist mein Modell wirklich richtig? Habe ich etwas übersehen? Die Analyse beginnt, sich gegen sich selbst zu richten – man zweifelt an den eigenen Schlussfolgerungen.`,
        bewusstheit: `Gibt es eine Ebene jenseits des Denkens, auf der du weißt, was gilt? Was sagt dir die ruhige Stille, wenn du aufhörst zu analysieren?`,
        uebung: `Verbring heute zwanzig Minuten ohne intellektuelle Aktivität. Dann frage dich: Was denke ich eigentlich – nicht analytisch, sondern einfach? Schreibe das auf.`,
        autopilotEN: `Self-doubt is directed at the thinking itself: Is my model really correct? Did I miss something? The analysis begins to turn against itself - you doubt your own conclusions.`,
        bewusstheitEN: `Is there a level beyond thought where you know what applies? What does the quiet silence tell you when you stop analyzing?`,
        uebungEN: `Spend twenty minutes today without intellectual activity. Then ask yourself: What do I actually think – not analytically, but simply? Write that down.`
      },
      verlust: {
        autopilot: `Man tritt innerlich zurück: Der Verlust wird beobachtet statt durchgefühlt. Man sammelt Gedanken, liest über Trauer, versteht den Prozess – aber hält Abstand zur eigenen emotionalen Realität.`,
        bewusstheit: `Was wäre, wenn du heute nicht über Trauer nachdenkst, sondern einfach trauerst? Was würde das ermöglichen?`,
        uebung: `Geh heute für eine halbe Stunde spazieren, ohne Ziel und ohne Gedanken-Aufgabe. Lass kommen, was kommt – auch den Schmerz. Er darf da sein.`,
        autopilotEN: `You step back internally: the loss is observed instead of felt. You collect thoughts, read about grief, understand the process - but keep your distance from your own emotional reality.`,
        bewusstheitEN: `What if you didn't think about grief today and just mourned? What would that enable?`,
        uebungEN: `Go for a walk today for half an hour, with no destination and no thought task. Let whatever comes come – including the pain. He can be there.`
      },
      ueberforderung: {
        autopilot: `Man zieht sich ins Denken zurück: analysiert die Überforderung, entwickelt Systeme, liest über Stressmanagement. Das gibt das Gefühl von Kontrolle – aber löst den Druck selten wirklich.`,
        bewusstheit: `Was wäre, wenn du heute nicht über die Überforderung nachdenkst, sondern konkret eine Sache davon erledigst oder loslässt?`,
        uebung: `Wähle heute die eine Aufgabe, die am meisten drückt. Mache sie als erstes, ohne weitere Planung. Nur anfangen. Beobachte, wie sich das anfühlt.`,
        autopilotEN: `You retreat into thinking: analyze the excessive demands, develop systems, read about stress management. This gives a feeling of control - but rarely actually relieves the pressure.`,
        bewusstheitEN: `What if you didn't think about the excessive demands today, but actually did one thing about it or let it go?`,
        uebungEN: `Today, choose the one task that is most pressing. Do them first, without any further planning. Just start. Watch how that feels.`
      },
      stagnation: {
        autopilot: `Man zieht sich ins Denken zurück und beobachtet die Stagnation von außen: analysiert, kategorisiert, versteht. Aber das Verstehen der Leere hebt sie nicht auf – es verlängert sie.`,
        bewusstheit: `Was wäre, wenn du heute aufhörst zu analysieren und einfach etwas tust – irgendetwas Kleines, Konkretes, Jetzt?`,
        uebung: `Geh heute nach draußen und mach etwas mit den Händen: Gärtnern, Kochen, etwas Basteln. Kein Nachdenken. Nur tun und fühlen, was entsteht.`,
        autopilotEN: `You retreat into your thinking and observe the stagnation from the outside: analyze, categorize, understand. But understanding emptiness does not eliminate it - it prolongs it.`,
        bewusstheitEN: `What if you stopped analyzing today and just did something – something small, concrete, now?`,
        uebungEN: `Go outside today and do something with your hands: gardening, cooking, doing some crafting. No thinking. Just do and feel what arises.`
      },
    },

    "SX5": {
      erschoepfung: {
        autopilot: `Der Rückzug aus der Verbindung beginnt – auch aus der, die einem wichtig ist. Man braucht Stille und Raum, aber dieser Rückzug verschärft die innere Isolation, anstatt sie aufzulösen.`,
        bewusstheit: `Ziehst du dich gerade von Menschen zurück, um Energie zu sparen – oder entgehst du damit auch dem, was Verbindung dir jetzt geben könnte?`,
        uebung: `Schreibe einen kurzen Brief an jemanden, dem du nahestehst – auch wenn du ihn nicht absendest. Lass darin dein echtes Inneres sprechen. Beobachte, was das in dir bewegt.`,
        autopilotEN: `Without an all-consuming relationship or a deeply intense project to occupy your mind, your life feels incredibly flat. You sit around waiting for that one special topic or that one electric encounter to make everything feel alive again—missing what is right in front of you.`,
        bewusstheitEN: `What is actually present in your life right now, even if it doesn't feel like the most thrilling thing in the world? Is there a tiny, ordinary step worth taking?`,
        uebungEN: `Connect briefly with someone who matters to you today—keep it short, with no pressure to force a deep conversation. Sometimes, feeling alive begins with a single, simple spark of contact.`
      },
      konflikt: {
        autopilot: `Im Konflikt zeigt sich entweder überraschende Intensität – eine plötzliche, tiefe Reaktion – oder vollständiges Abschalten. Beide Extreme können den anderen verwirren.`,
        bewusstheit: `Was passiert in dir gerade, bevor du dich abschaltest – oder bevor die Intensität ausbricht? Gibt es einen Moment dazwischen?`,
        uebung: `Bleibe in der Mitte: weder abschalten noch ausbrechen. Sage, was du wahrnimmst: „Ich merke, dass ich mich gerade entziehen will.” Mehr nicht.`,
        autopilotEN: `In conflict there is either surprising intensity – a sudden, deep reaction – or complete switching off. Both extremes can confuse the other.`,
        bewusstheitEN: `What is happening inside you right now before you switch off – or before the intensity erupts? Is there a moment in between?`,
        uebungEN: `Stay in the middle: neither switch off nor break out. Say what you perceive: “I notice that I want to withdraw.” Not more.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit löst eine intensive Suche nach Verbindung aus – aber nur der richtigen, der wirklich echten. Oberflächlicher Kontakt fühlt sich schlechter an als Alleinsein. Die hohe Messlatte macht Verbindung selten.`,
        bewusstheit: `Wartest du auf die perfekte Verbindung – und übsiehst dabei die Menschen, die wirklich da sind? Was brauchst du wirklich von einer Verbindung?`,
        uebung: `Such heute Kontakt zu jemandem, ohne die Tiefe vorauszusetzen. Lass die Verbindung sein, was sie gerade ist – auch wenn sie unvollkommen ist.`,
        autopilotEN: `Loneliness triggers an intense search for connection - but only the right one, the really real one. Superficial contact feels worse than being alone. The high bar makes connection rare.`,
        bewusstheitEN: `Are you waiting for the perfect connection – and ignoring the people who are actually there? What do you really need from a connection?`,
        uebungEN: `Find contact with someone today without assuming depth. Let the connection be what it is right now - even if it is imperfect.`
      },
      entscheidung: {
        autopilot: `Man wartet auf Gewissheit, auf das unzweifelhafte Zeichen, auf den Moment, in dem die richtige Option klar ist. Die Wartezeit wird länger. Und weil keine Option sich vollständig sicher anfühlt, verschiebt man weiter.`,
        bewusstheit: `Wie viel Gewissheit brauchst du wirklich, um zu entscheiden – und gibt es diese Gewissheit überhaupt? Was wäre, wenn du einfach wählst und dir dann vertraust?`,
        uebung: `Entscheide dich jetzt – mit dem, was du hast. Schreibe die Wahl auf und sage laut: Ich habe entschieden. Beobachte, wie sich das anfühlt.`,
        autopilotEN: `You wait for certainty, for the undoubted sign, for the moment when the right option is clear. The waiting time is getting longer. And because no option feels completely safe, you keep postponing.`,
        bewusstheitEN: `How much certainty do you really need to make a decision - and does this certainty even exist? What if you just choose and then trust yourself?`,
        uebungEN: `Decide now – with what you have. Write down the choice and say out loud: I have decided. Watch how that feels.`
      },
      beziehungskrise: {
        autopilot: `Man zieht sich vollständig zurück oder sucht genau die richtige Verbindung – jetzt, intensiv. Mittelmäßiger Kontakt fühlt sich in der Krise schlechter an als Alleinsein.`,
        bewusstheit: `Wäre die Person, die gerade da ist – auch wenn sie nicht perfekt passt – vielleicht genug, um diesen Moment gemeinsam zu tragen?`,
        uebung: `Melde dich bei jemandem, der dir nahestehend ist – nicht mit dem Anspruch auf die perfekte Begegnung, sondern einfach: Ich brauche gerade Verbindung.`,
        autopilotEN: `You withdraw completely or look for just the right connection – now, intensively. Mediocre contact feels worse than being alone in a crisis.`,
        bewusstheitEN: `Would the person who is there right now – even if they don’t fit perfectly – perhaps be enough to carry this moment together?`,
        uebungEN: `Reach out to someone close to you - not with the expectation of the perfect encounter, but simply: I need connection right now.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel betrifft die Verbindung: Bin ich wirklich in der Lage, diese tiefe Verbindung zu halten, die ich mir wünsche? Bin ich zu intensiv, zu seltsam, zu fordernd? Der Rückzug schützt vor der Antwort.`,
        bewusstheit: `Was wäre, wenn du genau die richtige Person für eine tiefe Verbindung bist – und gerade zu wenig davon zeigst?`,
        uebung: `Zeige heute dem Menschen, dem du nahestehst, etwas Echtes von dir – ohne es vorher zu filtern. Einen echten Gedanken, eine echte Empfindung. Beobachte, was dann passiert.`,
        autopilotEN: `The self-doubt is about connection: Am I really capable of maintaining this deep connection that I desire? Am I too intense, too strange, too demanding? Withdrawal protects against the answer.`,
        bewusstheitEN: `What if you're just the right person for a deep connection - and you're not showing enough of it?`,
        uebungEN: `Show something real about yourself to the person you are close to today - without filtering it first. A real thought, a real feeling. Watch what happens then.`
      },
      verlust: {
        autopilot: `Verlust in tiefen Beziehungen trifft besonders stark – und wird besonders geschützt. Man zieht sich zurück, verarbeitet allein, lässt niemanden nah. Der Rückzug schützt, aber verlängert die Isolation.`,
        bewusstheit: `Gibt es einen Menschen, dem du heute sagen könntest, was du verloren hast – ohne alles erklären zu müssen? Nur zeigen.`,
        uebung: `Melde dich heute bei einem Menschen, dem du vertraust – nicht um zu reden, sondern um nicht allein zu sein. Sag nur: „Ich trauere gerade. Kannst du in der Nähe sein?"`,
        autopilotEN: `Loss in deep relationships hits particularly hard - and is particularly protected. You withdraw, process things alone, don't let anyone close. Withdrawal protects but prolongs isolation.`,
        bewusstheitEN: `Is there someone you could tell today what you've lost - without having to explain everything? Just show.`,
        uebungEN: `Reach out to someone you trust today - not to talk, but to not be alone. Just say, "I'm grieving right now. Can you be near?"`
      },
      ueberforderung: {
        autopilot: `Überforderung entsteht, wenn Außenwelt und Beziehungsanforderungen zu viel werden. Man zieht sich in intensive Gedankenwelten oder Einzelprojekte zurück – und verliert den Kontakt zur Realität der Anforderungen.`,
        bewusstheit: `Was ist die eine konkrete Sache, die du heute erledigen musst – jenseits aller Gedankenwelten? Kannst du das priorisieren?`,
        uebung: `Setz dir heute ein konkretes Zeitlimit: Zwei Stunden für die wichtigste Aufgabe. Danach eine Stunde für dich. Halte beides ein.`,
        autopilotEN: `Overwhelm occurs when the outside world and relationship demands become too much. You retreat into intensive worlds of thought or individual projects - and lose contact with the reality of the requirements.`,
        bewusstheitEN: `What is the one specific thing you need to do today - beyond all thought? Can you prioritize that?`,
        uebungEN: `Set a specific time limit for yourself today: two hours for the most important task. Then an hour for you. Keep both.`
      },
      stagnation: {
        autopilot: `Ohne intensive Verbindung oder tiefes Projekt fühlt sich alles flach an. Man wartet auf das eine Thema, die eine Begegnung, die alles wieder lebendig macht – und verpasst das, was jetzt da ist.`,
        bewusstheit: `Was ist gerade da – auch wenn es nicht das Intensivste ist? Gibt es etwas Kleines, das einen Schritt wert wäre?`,
        uebung: `Melde dich heute bei einem Menschen, der dir wichtig ist – nur kurz, ohne Anspruch auf Tiefe. Manchmal beginnt das Lebendige mit einem kleinen Kontakt.`,
        autopilotEN: `Without an intense connection or deep project, everything feels flat. You wait for that one topic, that one encounter that will bring everything back to life - and miss what is there now.`,
        bewusstheitEN: `What’s there right now – even if it’s not the most intense thing? Is there something small that would be worth a step?`,
        uebungEN: `Get in touch with someone who is important to you today – just briefly, without any pretense of depth. Sometimes life begins with a small contact.`
      },
    },

    "SE6": {
      erschoepfung: {
        autopilot: `Der Körper sendet Erschöpfungssignale – und der Geist beginnt sofort, sie zu analysieren. Sind das normale Zeichen der Müdigkeit oder etwas Besorgniserregendes? Die Suche nach Sicherheit in der Unsicherheit kostet weitere Energie.`,
        bewusstheit: `Was wäre, wenn du den Erschöpfungssignalen deines Körpers ohne Analyse vertrauen würdest – einfach als Tatsache: Ich bin jetzt müde, und das reicht als Antwort?`,
        uebung: `Wenn ein Gedanke kommt, der deine Erschöpfung analysieren oder absichern will, benenne ihn leise: "Das ist der Sicherheitsimpuls." Atme. Lass ihn ziehen, ohne ihm zu folgen.`,
        autopilotEN: `Stagnation triggers intense anxiety: What if things stay like this forever? What if I'm falling behind everyone else? Worrying about the future makes the present standstill feel unbearable. You try to find safety by building elaborate plans instead of grounding yourself in the now.`,
        bewusstheitEN: `What if you are neither moving forward nor falling behind right now—but simply conserving your energy and gathering strength? Could this standstill actually be a necessary rest?`,
        uebungEN: `Today, write down a list of what is currently stable and reliable in your life. Don't focus on what is missing—focus on what is holding you up. Read that list to yourself three times.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann Angst entstehen – Angst vor dem Verlust der Beziehung, vor dem Chaos, vor dem Falschen. Das zeigt sich entweder als Absicherungssuche oder als Verhärtung: Ich bin im Recht und werde das verteidigen.`,
        bewusstheit: `Was fürchtest du gerade wirklich hinter diesem Konflikt? Und ist diese Befürchtung wirklich das, was gerade passiert?`,
        uebung: `Trenne das eigentliche Konfliktthema von der Angst darunter. Nenne die Angst leise bei Namen – und dann erst: Was ist das eigentliche Thema?`,
        autopilotEN: `Fear can arise in conflict – fear of losing the relationship, of chaos, of doing the wrong thing. This shows itself either as a search for protection or as a hardening: I am right and will defend it.`,
        bewusstheitEN: `What do you really fear behind this conflict? And is this fear really what is happening?`,
        uebungEN: `Separate the actual issue of conflict from the fear underneath. Quietly name the fear – and only then: What is the actual issue?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit aktiviert die Angst: Ist das normal? Habe ich etwas falsch gemacht? Werde ich ausgeschlossen? Der Geist beginnt zu analysieren und abzusichern, anstatt einfach Verbindung zu suchen.`,
        bewusstheit: `Was wäre, wenn die Einsamkeit einfach eine Pause ist – kein Zeichen einer Gefahr, kein Zeichen eines Fehlers?`,
        uebung: `Melde dich bei jemandem, dem du vertraust – nicht mit einer Frage, sondern mit einer Einladung: Lass uns Zeit miteinander verbringen. Vertrau dem Impuls, ohne ihn vorher zu analysieren.`,
        autopilotEN: `Loneliness activates fear: is this normal? Did I do something wrong? Will I be excluded? The mind begins to analyze and insure instead of simply seeking connection.`,
        bewusstheitEN: `What if loneliness is simply a pause – not a sign of danger, not a sign of mistake?`,
        uebungEN: `Reach out to someone you trust - not with a question, but with an invitation: Let's spend time together. Trust the impulse without analyzing it first.`
      },
      entscheidung: {
        autopilot: `Entscheidungen lösen Katastrophendenken aus: Was, wenn das falsch ist? Was sind die schlimmsten Konsequenzen? Der Geist entwickelt Szenarien, die die Entscheidung immer risikoreicher erscheinen lassen.`,
        bewusstheit: `Wie wahrscheinlich ist das schlimmste Szenario wirklich – und hast du schon einmal eine Entscheidung getroffen und überlebt, die sich damals auch so anfühlte?`,
        uebung: `Schreibe das schlimmste Szenario auf. Dann schreibe, was du in diesem Fall tun würdest. Wenn du das weißt, hat die Angst weniger Macht über die Entscheidung.`,
        autopilotEN: `Decisions trigger catastrophic thinking: What if this is wrong? What are the worst consequences? The mind develops scenarios that make the decision seem increasingly risky.`,
        bewusstheitEN: `How likely is the worst case scenario really - and have you ever made a decision and survived that felt like that at the time?`,
        uebungEN: `Write down the worst case scenario. Then write what you would do in this case. When you know this, fear has less power over the decision.`
      },
      beziehungskrise: {
        autopilot: `Die Angst dominiert: Verliere ich diese Beziehung? Bin ich schuld? Was denken andere darüber? Man sucht Sicherheit durch Rückfragen, Absicherung, Analyse – und macht die Krise dadurch oft größer.`,
        bewusstheit: `Was weißt du gerade wirklich – und was befürchtest du nur? Und gibt es jemanden, dem du vertraust, der dir helfen könnte, das zu trennen?`,
        uebung: `Sprich mit dem anderen ruhig und direkt: „Ich mache mir Sorgen um uns. Wie siehst du das?" Dann höre die Antwort, ohne sie sofort zu bewerten oder zu katastrophisieren.`,
        autopilotEN: `Fear dominates: Will I lose this relationship? Am I to blame? What do others think about it? You seek security through questions, security, analysis - and this often makes the crisis bigger.`,
        bewusstheitEN: `What do you really know right now - and what are you afraid of? And is there anyone you trust who could help you separate this?`,
        uebungEN: `Speak to the other person calmly and directly: "I'm worried about us. How do you see that?" Then hear the answer without immediately judging or catastrophizing it.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel ist von Angst gespeist: Bin ich wirklich sicher, dass ich das richtig mache? Was, wenn ich falsch liege? Was, wenn andere das durchschauen? Die innere Kritik lädt jede Unsicherheit mit Bedrohung auf.`,
        bewusstheit: `Was wäre, wenn du unsicher sein darfst – und das trotzdem kein Zeichen ist, dass etwas grundlegend falsch mit dir ist?`,
        uebung: `Wenn der Selbstzweifel auftaucht, benenne ihn laut: „Das ist Angst, nicht Wahrheit." Dann frage dich: Was würde ein ruhiger, wohlmeinender Beobachter sagen?`,
        autopilotEN: `Self-doubt is fueled by fear: Am I really sure I'm doing this right? What if I'm wrong? What if others see through this? The inner criticism charges every uncertainty with a threat.`,
        bewusstheitEN: `What if you were allowed to be insecure - and that still wasn't a sign that there was something fundamentally wrong with you?`,
        uebungEN: `When self-doubt arises, name it out loud: "This is fear, not truth." Then ask yourself: What would a calm, well-meaning observer say?`
      },
      verlust: {
        autopilot: `Verlust löst Angst aus: Was kommt jetzt? Wie sicher bin ich noch? Der Schmerz mischt sich mit Sorge um die Zukunft. Man sucht Sicherheit, Rat, Bestätigung – statt die Trauer direkt zu begegnen.`,
        bewusstheit: `Was wäre, wenn du heute die Sorge um die Zukunft beiseitestellst – nur für eine Stunde – und einfach trauerst, was jetzt ist?`,
        uebung: `Schreibe auf: Was habe ich verloren, und was ist trotzdem noch da? Nicht um den Schmerz zu minimieren – um das Fundament zu sehen, das trägt.`,
        autopilotEN: `Loss triggers fear: what comes next? How safe am I? The pain is mixed with worry about the future. You look for security, advice, confirmation - instead of facing the grief directly.`,
        bewusstheitEN: `What if you put aside worry about the future today – just for an hour – and just mourn what is now?`,
        uebungEN: `Write down: What have I lost and what is still there? Not to minimize the pain - to see the foundation that supports.`
      },
      ueberforderung: {
        autopilot: `Überforderung aktiviert Angst: Was, wenn ich es nicht schaffe? Was, wenn etwas schiefgeht? Man sucht Absicherung, fragt andere, plant doppelt. Der Druck wächst mit der Sorge.`,
        bewusstheit: `Was ist das Schlimmste, das wirklich passieren kann – und wie wahrscheinlich ist das? Was wäre realistisch betrachtet genug?`,
        uebung: `Schreibe heute auf: Was muss ich wirklich tun, und was befürchte ich nur, tun zu müssen? Trenne beides. Handle nur nach der ersten Liste.`,
        autopilotEN: `Overwhelm activates fear: What if I can't do it? What if something goes wrong? You look for protection, ask others, plan twice. The pressure increases with the worry.`,
        bewusstheitEN: `What's the worst that can really happen - and how likely is that? Realistically, what would be enough?`,
        uebungEN: `Write down today: What do I really need to do, and what am I just afraid I need to do? Separate both. Only act on the first list.`
      },
      stagnation: {
        autopilot: `Stagnation löst Angst aus: Was, wenn das immer so bleibt? Was, wenn ich den Anschluss verliere? Die Sorge um die Zukunft macht den Stillstand schwerer. Man sucht Sicherheit in Plänen statt im Jetzt.`,
        bewusstheit: `Was wäre, wenn du gerade weder voranschreitest noch zurückfällst – sondern Kraft sammelst? Kann der Stillstand auch das sein?`,
        uebung: `Schreibe heute auf: Was ist gerade stabil in meinem Leben? Nicht was fehlt – was trägt. Lies die Liste dreimal.`,
        autopilotEN: `Stagnation triggers fear: What if it stays that way forever? What if I lose connection? Concern about the future makes standing still more difficult. You look for security in plans instead of in the now.`,
        bewusstheitEN: `What if you were neither moving forward nor falling behind - but gathering strength? Could this also be the standstill?`,
        uebungEN: `Write down today: What is stable in my life right now? Not what is missing - what contributes. Read the list three times.`
      },
    },

    "SO6": {
      erschoepfung: {
        autopilot: `Die Pflichten bleiben – auch wenn die Energie fehlt. Das System trägt einen: man folgt den Routinen, den Strukturen, den Erwartungen. Aufhören würde bedeuten, das System oder die Gemeinschaft zu enttäuschen.`,
        bewusstheit: `Welche Pflichten trägst du gerade, weil du sie wirklich für richtig hältst – und welche trägst du, weil du Angst vor den Konsequenzen des Nicht-Tragens hast?`,
        uebung: `Wähle heute eine einzige Pflicht bewusst aus und frage dich: Tue ich das aus innerer Überzeugung – oder aus Angst? Lass die Antwort auftauchen, ohne sofort zu handeln.`,
        autopilotEN: `Without a clear group task or a sense of belonging to a system, you face a sudden loss of direction: *What is my role? Where do I fit in?* You frantically search for external structure and alignment instead of looking for internal direction.`,
        bewusstheitEN: `What if you are important right now not because of a group or a structure—but simply for your own sake? What value do you carry within yourself?`,
        uebungEN: `Do something today that belongs entirely to you—not a project for the group, and not a contribution for others. Just for you. Observe how that feels.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird auf das verwiesen, was üblich ist, was die Gruppe erwartet, was die Regeln sagen. Die eigene Position wird weniger als persönliche Meinung formuliert, sondern als das, was man eben tut.`,
        bewusstheit: `Was ist deine eigene Meinung in diesem Konflikt – unabhängig von dem, was andere erwarten oder was die Norm sagt?`,
        uebung: `Formuliere deinen Standpunkt einmal ganz persönlich: „Ich persönlich möchte ...” Beobachte, wie sich das anfühlt.`,
        autopilotEN: `In the conflict, reference is made to what is usual, what the group expects, what the rules say. Your own position is formulated less as a personal opinion and more as what you do.`,
        bewusstheitEN: `What is your own opinion in this conflict - regardless of what others expect or what the norm says?`,
        uebungEN: `Formulate your point of view in a very personal way: “I personally want to…” Observe how that feels.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit innerhalb der Gruppe fühlt sich paradox an: Man ist umgeben von Menschen, und trotzdem allein. Das Zugehörigkeitsgefühl fehlt, obwohl man dazugehört. Die Suche nach dem richtigen System, der richtigen Gemeinschaft geht weiter.`,
        bewusstheit: `Suchst du Zugehörigkeit durch das Erfüllen von Erwartungen – oder durch echtes Zeigen, wer du bist? Wissen die Menschen in deiner Gruppe, was dich wirklich bewegt?`,
        uebung: `Erzähle heute jemandem aus deiner Gruppe etwas wirklich Persönliches – keine Meinung über die Gruppe, sondern etwas über dich. Beobachte, wie das die Verbindung verändert.`,
        autopilotEN: `Loneliness within the group feels paradoxical: you are surrounded by people, but still alone. The feeling of belonging is missing, even though you belong. The search for the right system, the right community continues.`,
        bewusstheitEN: `Do you seek belonging through meeting expectations – or through truly showing who you are? Do the people in your group know what really concerns you?`,
        uebungEN: `Today, tell someone in your group something really personal—not an opinion about the group, but something about yourself. Watch how this changes the connection.`
      },
      entscheidung: {
        autopilot: `Man sucht Sicherheit durch Gruppenentscheid: Was würde die Gemeinschaft wählen? Was ist der Konsens? Die eigene Position verschwindet hinter dem, was das System gutheißt.`,
        bewusstheit: `Was würdest du wählen, wenn du nicht die Zustimmung der Gruppe bräuchtest? Gibt es eine Meinung in dir, die du noch nicht laut gesagt hast?`,
        uebung: `Teile deine eigene Position mit – auch wenn sie vom Gruppenkonsens abweicht. Sage sie als persönliche Meinung, nicht als Wahrheit. Beobachte, was das in dir auslöst.`,
        autopilotEN: `You seek security through group decision: What would the community choose? What is the consensus? Your own position disappears behind what the system approves.`,
        bewusstheitEN: `What would you choose if you didn't need the group's approval? Is there an opinion in you that you haven't spoken out loud yet?`,
        uebungEN: `Share your own position – even if it differs from the group consensus. Say it as a personal opinion, not as truth. Observe what this triggers in you.`
      },
      beziehungskrise: {
        autopilot: `Man fragt die Gruppe: Was würden andere an meiner Stelle tun? Was ist normal, was ist vertretbar? Die eigene Einschätzung der Krise tritt zurück zugunsten des kollektiven Urteils.`,
        bewusstheit: `Was weißt du selbst – in dir, ruhig, unabhängig von anderen – über diese Beziehungssituation? Diese Stimme hat das meiste Recht.`,
        uebung: `Schreibe auf, wie du die Krise einschätzt – ohne Ratschläge zu suchen, ohne Vergleich. Nur du, deine Wahrnehmung, deine Einschätzung. Dann entscheide, wie du handeln möchtest.`,
        autopilotEN: `You ask the group: What would others do in my position? What is normal, what is acceptable? Your own assessment of the crisis takes a back seat in favor of the collective judgment.`,
        bewusstheitEN: `What do you know – within yourself, calmly, independently of others – about this relationship situation? This voice has the most right.`,
        uebungEN: `Write down how you assess the crisis - without seeking advice, without comparison. Only you, your perception, your assessment. Then decide how you want to act.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt, ob man dem System, der Gruppe, den Erwartungen gerecht wird. Bin ich wirklich loyal genug? Tue ich das Richtige? Der Selbstzweifel bindet sich an das kollektive Urteil: Was würde die Gruppe denken?`,
        bewusstheit: `Wessen Meinung fragst du gerade innerlich ab – und vertraust du dabei auch dir selbst? Was würdest du einschätzen, wenn du niemanden fragen könntest?`,
        uebung: `Fälle heute eine kleine Einschätzung oder Entscheidung ohne Rücksprache. Dann beobachte: War die Welt davon abhängig? Und: War deine Einschätzung so falsch?`,
        autopilotEN: `You doubt whether you are living up to the system, the group, the expectations. Am I really loyal enough? Am I doing the right thing? Self-doubt is tied to the collective judgment: What would the group think?`,
        bewusstheitEN: `Whose opinion are you currently asking internally - and do you also trust yourself? What would you rate if you couldn't ask anyone?`,
        uebungEN: `Cases today require a small assessment or decision without consultation. Then observe: Did the world depend on it? And: Was your assessment so wrong?`
      },
      verlust: {
        autopilot: `Man sucht in der Gemeinschaft Halt: Rituale, Gruppen, Traditionen helfen. Aber manchmal bleibt der eigene Schmerz unter dem kollektiven Rahmen verborgen, weil es einfacher ist zu tragen als zu fühlen.`,
        bewusstheit: `Gibt es in diesem Verlust etwas, das nur dir gehört – und das du noch nicht wirklich gefühlt hast?`,
        uebung: `Nimm dir heute eine halbe Stunde allein – keine Gruppe, keine Gemeinschaft. Nur du und dein Verlust. Dann komm zurück und sag einem Menschen einen Satz darüber.`,
        autopilotEN: `You look for support in the community: rituals, groups, traditions help. But sometimes one's own pain remains hidden under the collective framework because it is easier to bear than to feel.`,
        bewusstheitEN: `Is there something in this loss that is only yours - and that you haven't really felt yet?`,
        uebungEN: `Take half an hour alone today - no group, no community. Just you and your loss. Then come back and say a sentence about it to someone.`
      },
      ueberforderung: {
        autopilot: `Man übernimmt Verantwortung für das System, die Gruppe, die Erwartungen anderer – und vergisst die eigenen Grenzen. Treu und verlässlich bis zur Erschöpfung.`,
        bewusstheit: `Was übernimmst du gerade, das nicht dein Job ist? Und was wäre der erste Schritt, das zurückzugeben?`,
        uebung: `Sprich heute mit jemandem im Team oder der Gruppe: „Ich brauche Unterstützung bei …" Benenne konkret, was du brauchst. Lass andere teilhaben.`,
        autopilotEN: `You take responsibility for the system, the group, the expectations of others - and forget your own boundaries. Loyal and reliable until exhaustion.`,
        bewusstheitEN: `What are you taking on that isn't your job? And what would be the first step to giving that back?`,
        uebungEN: `Talk to someone in the team or group today: “I need help with…” Be specific about what you need. Let others participate.`
      },
      stagnation: {
        autopilot: `Ohne Gruppenaufgabe oder Systemzugehörigkeit droht Orientierungsverlust: Was ist meine Rolle? Wozu gehöre ich? Man sucht nach Struktur und Anschluss statt nach innerer Richtung.`,
        bewusstheit: `Was wäre, wenn du gerade nicht wegen einer Gruppe oder Struktur wichtig bist – sondern für sich selbst? Was trägst du in dir?`,
        uebung: `Tue heute etwas, das nur dir gehört – kein Projekt für die Gruppe, kein Beitrag für andere. Nur für dich. Beobachte, wie sich das anfühlt.`,
        autopilotEN: `Without a group task or system affiliation, there is a risk of loss of orientation: What is my role? What do I belong to? You look for structure and connection instead of inner direction.`,
        bewusstheitEN: `What if you are important not because of a group or structure - but for yourself? What do you carry within you?`,
        uebungEN: `Do something today that is just yours - not a project for the group, not a contribution to others. Only for you. Watch how that feels.`
      },
    },

    "SX6": {
      erschoepfung: {
        autopilot: `Die Erschöpfung schlägt um in Aggression oder plötzliche Überaktivität – man kämpft gegen sie an, statt sie anzuerkennen. Oder der Einbruch kommt unvermittelt und überrascht einen selbst.`,
        bewusstheit: `Was sagst du dir gerade, um nicht innehalten zu müssen? Und wovor schützt dieses Weiterkämpfen dich eigentlich?`,
        uebung: `Halte an einem Punkt des Tages bewusst inne – nicht weil du musst, sondern weil du es wählst. Bleibe einen Moment in dieser gewählten Stille. Beobachte, was auftaucht.`,
        autopilotEN: `Stagnation triggers a tense cycle of paralysis and rebellion: you either aggressively fight against the standstill and run blindly forward, or you freeze up completely. You rarely allow yourself to just tolerate the internal emptiness.`,
        bewusstheitEN: `What if you chose neither to fight nor to freeze today—but simply sat still and watched whatever comes up?`,
        uebungEN: `Pause right in the middle of the emptiness today. Spend ten minutes completely free of distractions. Then ask yourself: *What is quietly calling out from the depths?* Write it down.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann die Energie nach aussen schlagen – konfrontativ, direkt, herausfordernd. Manchmal testet man dabei, ob der andere wirklich standhalt. Das kann eskalieren.`,
        bewusstheit: `Testest du den anderen gerade – und was erhoffst du dir, was dabei passiert? Vertraust du dem Ergebnis, egal wie es ausgeht?`,
        uebung: `Bevor du konfrontierst: Frage einmal nach, statt zu fordern. „Ich verstehe das gerade nicht – was meinst du damit?” Beobachte, ob das den Raum öffnet.`,
        autopilotEN: `In conflict, the energy can spill outward - confrontational, direct, challenging. Sometimes you test whether the other person can really hold up. This can escalate.`,
        bewusstheitEN: `Are you currently testing the other one – and what do you hope will happen? Do you trust the outcome, no matter what it turns out to be?`,
        uebungEN: `Before you confront: ask instead of demanding. “I don’t understand right now – what do you mean?” See if this opens up the space.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit erzeugt Misstrauen: Warum sind die anderen nicht da? Was steckt dahinter? Man scannt die Situation nach Gefahren und zieht sich gleichzeitig heraus – was die Einsamkeit verstärkt.`,
        bewusstheit: `Misstraust du gerade dem Alleinsein – oder misstraust du den Menschen, die nicht da sind? Was würde passieren, wenn du dem Impuls zur Verbindung vertraust?`,
        uebung: `Teste heute das Vertrauen: Melde dich bei jemandem, ohne vorher zu wissen, wie er reagiert. Lass offen, was kommt.`,
        autopilotEN: `Loneliness creates mistrust: Why aren't the others there? What's behind it? You scan the situation for danger and at the same time withdraw yourself - which increases the loneliness.`,
        bewusstheitEN: `Do you distrust being alone right now - or do you distrust people who aren't there? What would happen if you trusted the impulse to connect?`,
        uebungEN: `Test your trust today: Reach out to someone without knowing how they will react. Leave open what comes.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden entweder mutig und konfrontativ getroffen – gegen den Strom, gegen die Erwartung – oder endlos aufgeschoben, weil die Gefahr jeder Option analysiert wird. Beides kann lähmen.`,
        bewusstheit: `Entscheidest du gerade aus Stärke – oder gegen eine Angst? Und wäre die Entscheidung dieselbe, wenn die Angst nicht da wäre?`,
        uebung: `Frage dich: Was würde ich wählen, wenn ich weder Angst vor dem Falschen noch den Impuls hätte, mutig zu wirken? Diese neutrale Antwort ist oft die richtige.`,
        autopilotEN: `Decisions are either made boldly and confrontationally – against the grain, against expectations – or endlessly postponed as the danger of each option is analyzed. Both can be paralyzing.`,
        bewusstheitEN: `Are you making decisions based on strength – or against fear? And would the decision be the same if the fear wasn't there?`,
        uebungEN: `Ask yourself: What would I choose if I had neither fear of doing wrong nor the impulse to appear bold? This neutral answer is often the correct one.`
      },
      beziehungskrise: {
        autopilot: `Entweder eskaliert die Krise – man kämpft, konfrontiert, macht den anderen für alles verantwortlich – oder man flüchtet: neue Aktivitäten, andere Kontakte, alles außer dem eigentlichen Gespräch.`,
        bewusstheit: `Schützt das Kämpfen oder Flüchten gerade dich – oder vertieft es die Krise? Was wäre, wenn du einen Moment einfach stehenbleibst?`,
        uebung: `Sage dem anderen ruhig, was dich verletzt hat – ohne Vorwurf, ohne Drama. Nur: „Das hat mich getroffen, weil..." Mehr nicht. Beobachte, was dann passiert.`,
        autopilotEN: `Either the crisis escalates - you fight, confront, blame the other person for everything - or you flee: new activities, other contacts, everything except the actual conversation.`,
        bewusstheitEN: `Does fighting or fleeing protect you – or does it deepen the crisis? What if you just stood still for a moment?`,
        uebungEN: `Calmly tell the other person what hurt you - without blame, without drama. Just: "That hit me because..." Nothing more. Watch what happens then.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel kippt leicht in Misstrauen: Stimmt das wirklich, was ich denke? Und wenn es stimmt – bin ich dann mutig genug, es zu tun? Oder zu feige? Man zweifelt an der Einschätzung und an der eigenen Reaktion auf sie.`,
        bewusstheit: `Was weißt du gerade – nicht was du befürchtest? Und was würde ein mutiger, aber ruhiger Mensch in deiner Lage jetzt tun?`,
        uebung: `Triff heute eine kleine, klare Entscheidung ohne langes Abwägen. Dann stehe dazu, auch wenn Zweifel kommt. Beobachte: Was passiert wirklich?`,
        autopilotEN: `Self-doubt easily turns into distrust: Is what I think really true? And if it's true, am I brave enough to do it? Or too cowardly? You doubt your assessment and your own reaction to it.`,
        bewusstheitEN: `What do you know right now – not what you fear? And what would a brave but calm person in your situation do now?`,
        uebungEN: `Make a small, clear decision today without long consideration. Then stand by it, even if doubts arise. Watch: What's Really Happening?`
      },
      verlust: {
        autopilot: `Verlust erzeugt innere Zerrissenheit: Der Schmerz ist da, aber man zweifelt an ihm. War das wirklich so wichtig? Hätte ich es verhindern können? Die Trauer kippt zwischen Intensität und Selbstzweifel.`,
        bewusstheit: `Was wäre, wenn dein Schmerz berechtigt ist – ohne Rechtfertigung, ohne Vergleich? Er ist einfach da. Das reicht.`,
        uebung: `Schreibe heute einen Satz: „Ich trauere um …, weil …" Lass ihn stehen, ohne ihn zu hinterfragen. Das ist genug.`,
        autopilotEN: `Loss creates inner conflict: the pain is there, but you doubt it. Was it really that important? Could I have prevented it? The grief oscillates between intensity and self-doubt.`,
        bewusstheitEN: `What if your pain is justified – without justification, without comparison? He's just there. That's enough.`,
        uebungEN: `Write a sentence today: "I mourn... because..." Leave it there without questioning it. That's enough.`
      },
      ueberforderung: {
        autopilot: `Überforderung erzeugt Zerrissenheit: einerseits kämpft man dagegen an (konterphobisch), andererseits lähmt die Angst das Handeln. Man wechselt zwischen Überforderungs-Angriff und Erstarrung.`,
        bewusstheit: `Was wäre der nächste kleine, sichere Schritt – nicht die ganze Lösung, nur der nächste Schritt?`,
        uebung: `Schreibe die drei dringendsten Aufgaben auf. Dann tue die erste – nur die erste. Alles andere existiert für jetzt nicht. Beobachte, was das löst.`,
        autopilotEN: `Excessive demands create conflict: on the one hand you fight against it (counterphobic), on the other hand fear paralyzes action. You alternate between being overwhelmed and being frozen.`,
        bewusstheitEN: `What would be the next small, safe step – not the whole solution, just the next step?`,
        uebungEN: `Write down the three most urgent tasks. Then do the first one – only the first one. Everything else doesn't exist for now. Watch what solves this.`
      },
      stagnation: {
        autopilot: `Stagnation kippt zwischen Lähmung und Aufbegehren: Entweder man kämpft dagegen an und rennt los, oder man erstarrt. Die innere Leere wird selten einfach ausgehalten.`,
        bewusstheit: `Was wäre, wenn du heute weder kämpfst noch lähmst – sondern einfach sitzt und schaust, was kommt?`,
        uebung: `Halte heute inmitten der Leere inne. Zehn Minuten ohne Ablenkung. Dann frage: Was meldet sich leise aus der Tiefe? Schreibe es auf.`,
        autopilotEN: `Stagnation oscillates between paralysis and rebellion: either you fight it and run, or you freeze. The inner emptiness is rarely simply endured.`,
        bewusstheitEN: `What if you didn't fight or paralyze today - but just sit and see what comes?`,
        uebungEN: `Pause in the midst of emptiness today. Ten minutes without distractions. Then ask: What speaks quietly from the depths? Write it down.`
      },
    },

    "SE7": {
      erschoepfung: {
        autopilot: `Die Ablenkung nimmt zu. Noch eine Aktivität, noch ein Erlebnis, noch ein Gespräch – alles, um nicht bei der Erschöpfung anzukommen. Das funktioniert kurzfristig und erschöpft langfristig noch mehr.`,
        bewusstheit: `Wohin flüchtest du gerade – und was würdest du spüren, wenn du nicht flüchten würdest?`,
        uebung: `Sitz für zehn Minuten ohne Ablenkung. Wenn der Impuls kommt, etwas zu tun oder zu wechseln – beobachte ihn. Benenne ihn: "Das ist der Fluchtimpuls." Bleib.`,
        autopilotEN: `Distraction is increasing. One more activity, one more experience, one more conversation – anything to avoid exhaustion. This works in the short term and is even more draining in the long term.`,
        bewusstheitEN: `Where are you fleeing to right now - and what would you feel if you didn't flee?`,
        uebungEN: `Sit for ten minutes without distractions. When the impulse comes to do something or change – observe it. Name it: "This is the impulse to flee." Stay.`
      },
      konflikt: {
        autopilot: `Im Konflikt tritt der Reframing-Impuls in Kraft: Das halb volle Glas wird betont, das Problem heruntergespielt, das Thema umgeleitet. Man möchte den Konflikt auflösen – ohne wirklich in ihn hineinzugehen.`,
        bewusstheit: `Was wird gerade unter dem Humor oder der Umlenkung vergraben – und was wäre, wenn du es liessest, oben zu bleiben?`,
        uebung: `Bleibe einmal bei einem unangenehmen Konfliktmoment, ohne ihn aufzuhellen oder umzulenken. Halte den Raum offen. Beobachte, was dann kommt.`,
        autopilotEN: `In conflict, the reframing impulse comes into force: the glass half full is emphasized, the problem is downplayed, the topic is redirected. You want to resolve the conflict – without really getting into it.`,
        bewusstheitEN: `What is being buried beneath the humor or redirection right now – and what if you let it stay on top?`,
        uebungEN: `Stay with an unpleasant moment of conflict without lightening it or redirecting it. Keep the space open. Watch what comes next.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird weggelenkt – neue Pläne, neue Ideen, neue Ablenkungen. Man redet sich ein, dass man das Alleinsein mag, dass man Freiheit braucht. Darunter liegt manchmal eine Sehnsucht, die man sich nicht eingestehen möchte.`,
        bewusstheit: `Was wäre, wenn du die Einsamkeit nicht wegoptimierst, sondern einen Moment wirklich darin sitzt? Was kommt dann?`,
        uebung: `Sitz heute zehn Minuten ohne Plan, ohne nächste Idee. Lass die Stille kommen. Was zeigt sich, wenn das Rauschen aufhört?`,
        autopilotEN: `Loneliness is diverted away – new plans, new ideas, new distractions. You convince yourself that you like being alone, that you need freedom. Sometimes there is a longing underneath that you don't want to admit to yourself.`,
        bewusstheitEN: `What if you didn't try to eliminate loneliness, but actually sat in it for a moment? What comes next?`,
        uebungEN: `Sit for ten minutes today with no plan, no next idea. Let the silence come. What happens when the noise stops?`
      },
      entscheidung: {
        autopilot: `Man springt schnell zur Entscheidung – um die Optionen offenzuhalten, um das Unbehagen des Wartens zu vermeiden. Gleichzeitig werden die Alternativen im Hinterkopf behalten. Man hat entschieden, aber noch nicht wirklich losgelassen.`,
        bewusstheit: `Hast du diese Entscheidung wirklich getroffen – oder hältst du sie noch offen? Was wäre, wenn du sie jetzt wirklich abschliesst?`,
        uebung: `Entscheide dich – und schließe die Tür zu den Alternativen bewusst. Sage laut: Diese Option lasse ich los. Beobachte, was das in dir auslöst.`,
        autopilotEN: `You jump to the decision quickly – to keep your options open, to avoid the discomfort of waiting. At the same time, the alternatives are kept in mind. You've decided, but you haven't really let go yet.`,
        bewusstheitEN: `Have you really made this decision – or are you still keeping it open? What if you actually complete it now?`,
        uebungEN: `Make a decision – and consciously close the door to the alternatives. Say out loud: I'm letting go of this option. Observe what this triggers in you.`
      },
      beziehungskrise: {
        autopilot: `Man reframt die Krise: „Das ist nur eine schwierige Phase", „Wir wachsen gerade", „Das wird besser." Die eigentliche Spannung wird umgedeutet statt angeschaut. Der andere fühlt sich damit nicht gehört.`,
        bewusstheit: `Was wäre, wenn du die Krise einmal so stehenlässt, wie sie ist – ohne sie aufzuhellen? Was würdest du dann sehen und sagen?`,
        uebung: `Sag dem anderen: „Ich merke, dass es gerade nicht gut läuft zwischen uns." Ohne Lösung, ohne positiven Rahmen. Nur die Wahrnehmung, klar und direkt.`,
        autopilotEN: `People reframe the crisis: “This is just a difficult phase,” “We are currently growing,” “It will get better.” The actual tension is reinterpreted instead of looked at. The other person doesn't feel heard.`,
        bewusstheitEN: `What if you left the crisis as it is - without trying to make it any better? What would you see and say then?`,
        uebungEN: `Tell the other person: "I notice that things are not going well between us right now." Without a solution, without a positive framework. Just perception, clear and direct.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird schnell wegoptimiert: Das wird besser, ich schaffe das, kein Grund zur Sorge. Aber darunter liegt manchmal eine tiefere Frage, die nie gestellt wird: Bin ich wirklich genug – wenn der Glanz weg ist?`,
        bewusstheit: `Was wäre, wenn du den Selbstzweifel einmal wirklich sitzenließest – nur für einen Moment, ohne ihn zu lösen? Was zeigt er dir?`,
        uebung: `Schreibe auf, was du gerade an dir bezweifelst – ehrlich, ohne es aufzuhellen. Dann frage dich: Was ist an diesem Zweifel ein echter Hinweis, und was ist Angst in Verkleidung?`,
        autopilotEN: `Self-doubt is quickly eliminated: This will get better, I can do it, no need to worry. But underneath sometimes lies a deeper question that is never asked: Am I really enough - when the shine is gone?`,
        bewusstheitEN: `What if you really let self-doubt sit - just for a moment, without solving it? What is he showing you?`,
        uebungEN: `Write down what you doubt about yourself - honestly, without making light of it. Then ask yourself: What about this doubt is real evidence, and what is fear in disguise?`
      },
      verlust: {
        autopilot: `Verlust wird schnell neu gerahmt: Es wird besser, ich lerne daraus, das war vielleicht gut so. Die Reframing-Strategie schützt vor dem vollen Schmerz – und manchmal vor dem, was er sagen will.`,
        bewusstheit: `Was wäre, wenn du diesen Verlust heute nicht neu rahmst – sondern einfach verlierst? Was würde das zeigen?`,
        uebung: `Sitz heute zehn Minuten mit dem, was du verloren hast – ohne es umzudeuten, ohne es zu bereichern. Nur: Das ist weg. Das schmerzt. Lass das stimmen.`,
        autopilotEN: `Loss is quickly reframed: It's getting better, I'm learning from it, maybe that was a good thing. The reframing strategy protects from the full pain - and sometimes from what he wants to say.`,
        bewusstheitEN: `What if you didn’t reframe that loss today – but just lost it? What would that show?`,
        uebungEN: `Today, sit with what you have lost for ten minutes - without reinterpreting it, without enriching it. Only: That's gone. That hurts. Let that be true.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird weggeredet oder umgelenkt: Es gibt noch so viele spannende Möglichkeiten, neue Ideen, andere Projekte. Der Druck wird durch Ablenkung gemindert statt gelöst.`,
        bewusstheit: `Was wäre, wenn du heute bei dem bleibst, was gerade drückt – ohne weiterzuziehen zur nächsten Idee? Was zeigt sich dann?`,
        uebung: `Wähle heute die eine Aufgabe, die am längsten wartet. Setz einen Timer auf 45 Minuten. Nur diese Aufgabe. Kein Wechseln, kein Ablenken. Dann sieh, was du geschafft hast.`,
        autopilotEN: `Excessive demands are explained away or redirected: There are still so many exciting possibilities, new ideas, other projects. The pressure is reduced by distraction instead of released.`,
        bewusstheitEN: `What if you stick with what's currently pressing today - without moving on to the next idea? What then appears?`,
        uebungEN: `Today, choose the one task that has been waiting the longest. Set a timer for 45 minutes. Just this task. No switching, no distractions. Then see what you've accomplished.`
      },
      stagnation: {
        autopilot: `Stagnation wird als unerträglich empfunden: Man springt zur nächsten Idee, zum nächsten Erlebnis, zum nächsten Plan. Die Leere wird sofort gefüllt, bevor sie etwas sagen kann.`,
        bewusstheit: `Was wäre, wenn du die Leere heute nicht füllst – und wartest, was sie zeigt? Was hast du bisher vielleicht überhört?`,
        uebung: `Sitz heute eine halbe Stunde ohne Plan, ohne Ziel, ohne Ablenkung. Wenn die Unruhe kommt, bleib. Beobachte, was sich darunter zeigt.`,
        autopilotEN: `Stagnation is perceived as unbearable: you jump to the next idea, the next experience, the next plan. The void is immediately filled before she can say anything.`,
        bewusstheitEN: `What if you don't fill the void today - and wait to see what it shows? What have you perhaps missed so far?`,
        uebungEN: `Sit today for half an hour with no plan, no goal, no distraction. When trouble comes, stay. Observe what lies beneath.`
      },
    },

    "SO7": {
      erschoepfung: {
        autopilot: `Man opfert sich weiter für die Gruppe, die Aufgabe, die Gemeinschaft – weil das dem eigenen Schmerz eine höhere Bedeutung gibt. Die Erschöpfung bekommt einen edlen Rahmen, der das Innehalten überflüssig erscheinen lässt.`,
        bewusstheit: `Für wen opferst du dich gerade – und wäre es für diese Menschen wirklich gut, wenn du dich weiter erschöpfst?`,
        uebung: `Formuliere heute einen einzigen Satz, der mit "Ich tue das für mich, weil..." beginnt – nicht für die Gruppe, nicht für andere. Beobachte, ob und wie schwer das fällt.`,
        autopilotEN: `You continue to sacrifice yourself for the group, the task, the community - because that gives your own pain greater meaning. The exhaustion is given a noble frame that makes pausing seem unnecessary.`,
        bewusstheitEN: `Who are you sacrificing yourself for right now - and would it really be good for these people if you continued to exhaust yourself?`,
        uebungEN: `Today, formulate a single sentence that begins with "I'm doing this for me because..." - not for the group, not for others. Observe whether and how difficult this is.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Versöhnung, das gute Ende schnell in den Blick genommen – manchmal bevor der eigentliche Schmerz wirklich da war. Man möchte wieder in den hellen Raum.`,
        bewusstheit: `Wäre es erlaubt, dass dieser Konflikt noch eine Weile daürt – und dass das in Ordnung ist?`,
        uebung: `Bleibe eine Weile im Unbehagen des Konflikts, ohne zur Lösung zu drängen. Frage den anderen: „Was brauchst du gerade?” Höre wirklich zu.`,
        autopilotEN: `In conflicts, reconciliation and the good ending are quickly brought into focus - sometimes before the actual pain was really there. You want to go back into the bright room.`,
        bewusstheitEN: `Would this conflict be allowed to continue for a while - and that that be okay?`,
        uebungEN: `Stay in the discomfort of the conflict for a while without pushing for resolution. Ask the other person, “What do you need right now?” Really listen.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bekommt einen höheren Sinn: Man widmet sich der Gemeinschaft, einem Projekt, einer Idee. Die eigene Einsamkeit verschwindet im Dienst an etwas Größerem. Aber darunter bleibt die Sehnsucht nach echter persönlicher Verbindung.`,
        bewusstheit: `Wem bist du gerade nah – wirklich nah, als Mensch, nicht als Mitstreiter? Gibt es jemanden, der dich kennt, nicht nur schätzt?`,
        uebung: `Suche heute eine persönliche Begegnung – ohne Projektbezug, ohne Gruppenrahmen. Einfach zwei Menschen miteinander. Beobachte, was das in dir bewegt.`,
        autopilotEN: `Loneliness takes on a greater meaning: you dedicate yourself to the community, to a project, to an idea. Your own loneliness disappears in the service of something greater. But underneath there remains a longing for real personal connection.`,
        bewusstheitEN: `Who are you close to right now – really close, as a person, not as a comrade-in-arms? Is there someone who knows you, not just appreciates you?`,
        uebungEN: `Looking for a personal encounter today – without project reference, without a group setting. Just two people together. Observe what this moves within you.`
      },
      entscheidung: {
        autopilot: `Man rahmt die Entscheidung so, dass jede Option positiv klingt – ein inneres Reframing, das die Wahl leichter erscheinen lässt. Aber darunter bleibt die ungelöste Frage, welche Option wirklich die richtige ist.`,
        bewusstheit: `Was wäre, wenn du die Entscheidung einmal ohne positiven Rahmen anschaust? Was würdest du dann sehen – und was würdest du dann wählen?`,
        uebung: `Schreibe auf, was an jeder Option wirklich schwierig ist. Dann wähle trotzdem. Nicht weil es leicht ist – sondern weil es dich weiterbringt.`,
        autopilotEN: `You frame the decision so that every option sounds positive - an internal reframing that makes the choice seem easier. But underneath there remains the unresolved question of which option is really the right one.`,
        bewusstheitEN: `What if you looked at the decision without a positive frame? What would you see then – and what would you choose?`,
        uebungEN: `Write down what is really difficult about each option. Then choose anyway. Not because it's easy - but because it gets you further.`
      },
      beziehungskrise: {
        autopilot: `Man widmet sich der Gemeinschaft, einer Idee, einem Projekt – und die persönliche Beziehungskrise bekommt einen höheren Rahmen. Was zwischen zwei Menschen wirklich gesagt werden muss, bleibt ungesagt.`,
        bewusstheit: `Versteckst du dich gerade hinter einer größeren Aufgabe – um der Stille dieser einen Beziehung nicht begegnen zu müssen?`,
        uebung: `Verbring heute Zeit mit diesem Menschen – nur ihr beide, ohne Aufgabe, ohne Projekt. Lass das entstehen, was entstehen muss.`,
        autopilotEN: `You dedicate yourself to the community, an idea, a project - and the personal relationship crisis takes on a greater scope. What really needs to be said between two people remains unsaid.`,
        bewusstheitEN: `Are you currently hiding behind a larger task - so you don't have to face the silence of this one relationship?`,
        uebungEN: `Spend time with this person today – just the two of you, with no task, no project. Let what needs to arise arise.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird in einen höheren Sinn gebettet: Vielleicht ist dieser Schmerz Teil des Weges. Vielleicht wachse ich gerade. Die Reframing-Strategie schützt davor, den Zweifel wirklich zu fühlen.`,
        bewusstheit: `Was wäre, wenn dieser Zweifel gerade einfach Zweifel ist – ohne höheren Sinn, ohne Wachstums-Rahmen? Was würdest du dann tun?`,
        uebung: `Sitz heute zehn Minuten mit dem Zweifel – ohne ihn zu transformieren. Benenne ihn: „Ich zweifle gerade daran, dass …“ Dann atme. Das reicht.`,
        autopilotEN: `Self-doubt is embedded in a higher meaning: Maybe this pain is part of the way. Maybe I'm growing. The reframing strategy protects you from really feeling the doubt.`,
        bewusstheitEN: `What if this doubt is just doubt - without a higher meaning, without a framework for growth? What would you do then?`,
        uebungEN: `Sit with doubt for ten minutes today – without transforming it. Name it: “I’m doubting right now that…” Then breathe. That's enough.`
      },
      verlust: {
        autopilot: `Verlust wird in Bedeutung gekleidet: Vielleicht war das sein Sinn. Vielleicht wächst man daran. Die Sinnsuche hilft – aber manchmal zu früh, bevor der Schmerz wirklich da war.`,
        bewusstheit: `Was wäre, wenn dieser Verlust noch keinen Sinn hat – und das gerade in Ordnung ist? Darf Trauer sinnlos sein, bevor sie sinnvoll wird?`,
        uebung: `Schreibe heute auf, was du verloren hast – ohne Sinn, ohne Moral, ohne Wachstum. Nur: Das war, und jetzt ist es nicht mehr. Wie fühlt sich das an?`,
        autopilotEN: `Loss is clothed in meaning: perhaps that was its meaning. Maybe you'll grow from it. The search for meaning helps - but sometimes too early, before the pain was really there.`,
        bewusstheitEN: `What if this loss still doesn't make sense - and that's okay right now? Can grief be meaningless before it becomes meaningful?`,
        uebungEN: `Today, write down what you have lost – no meaning, no morals, no growth. Only: That was, and now it is no longer. How does that feel?`
      },
      ueberforderung: {
        autopilot: `Man visioniert sich aus dem Druck heraus: Das alles wird bald besser, das große Bild ist ja sinnvoll. Die Energie fließt in Ideen und Pläne – während die konkrete Überforderung bleibt.`,
        bewusstheit: `Was muss heute konkret erledigt werden – jenseits aller Visionen? Welche eine Sache bringt dich heute wirklich weiter?`,
        uebung: `Schreibe heute eine Liste mit maximal drei Aufgaben. Nur drei. Erledige sie, bevor du neue planst. Beobachte, wie befriedigend das ist.`,
        autopilotEN: `You envision yourself from the pressure: Everything will soon get better, the big picture makes sense. The energy flows into ideas and plans - while the concrete excessive demands remain.`,
        bewusstheitEN: `What specifically needs to be done today – beyond all visions? What one thing is really moving you forward today?`,
        uebungEN: `Today, write a list of a maximum of three tasks. Only three. Do them before planning new ones. Watch how satisfying that is.`
      },
      stagnation: {
        autopilot: `Man überbrückt die Leere mit Visionen und Plänen: Das nächste große Projekt, das nächste Abenteuer, der nächste Sinn. Die Stagnation bleibt unsichtbar hinter den Ideen.`,
        bewusstheit: `Was wäre, wenn du heute keine neue Vision entwirfst – sondern mit dem Jetzt sitzt? Was ist gerade wirklich da?`,
        uebung: `Verbringe heute einen Abend ohne Planung. Kein Notizbuch, kein Brainstorming. Nur: Was ist jetzt? Lass die Antwort still entstehen.`,
        autopilotEN: `You bridge the void with visions and plans: the next big project, the next adventure, the next meaning. The stagnation remains invisible behind the ideas.`,
        bewusstheitEN: `What if you didn't create a new vision today - but sat with the now? What is really there right now?`,
        uebungEN: `Spend an evening without planning today. No notebook, no brainstorming. But: what happens now? Let the answer emerge quietly.`
      },
    },

    "SX7": {
      erschoepfung: {
        autopilot: `Die nächste Begeisterung, das nächste Projekt, die nächste intensive Verbindung – immer weiter. Erschöpfung wird mit Stimulation überschrieben. Der Motor läuft, auch wenn der Tank leer ist.`,
        bewusstheit: `Was käme zum Vorschein, wenn du aufhören würdest, das nächste Feuer zu suchen? Was liegt unter der Begeisterung, die du gerade verfolgst?`,
        uebung: `Setze heute eine einzige Begeisterung bewusst auf Pause. Sitz mit der Stille, die dann entsteht. Beobachte, was auftaucht – ohne es sofort in das nächste Vorhaben zu verwandeln.`,
        autopilotEN: `The next enthusiasm, the next project, the next intense connection - on and on. Exhaustion is overwritten with stimulation. The engine runs even if the tank is empty.`,
        bewusstheitEN: `What would emerge if you stopped looking for the next fire? What lies beneath the excitement you're currently pursuing?`,
        uebungEN: `Today, consciously put a single enthusiasm on pause. Sit with the silence that then arises. Observe what comes up – without immediately turning it into the next project.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann die Energie plötzlich sehr gross werden – leidenschaftlich, überzeugt, fast begeistert für die eigene Position. Und dann, genauso plötzlich, lässt das Interesse nach, und man ist gedanklich schon woanders.`,
        bewusstheit: `Nimmst du den Konflikt des anderen wirklich ernst – auch wenn dein Interesse daran schon nachlässt?`,
        uebung: `Bleibe bei dem Thema bis zum Ende – auch wenn es aufgehört hat, spannend zu sein. Frage: „Haben wir das wirklich geklärt?”`,
        autopilotEN: `In conflict, the energy can suddenly become very high - passionate, convinced, almost enthusiastic about your own position. And then, just as suddenly, your interest wanes and your mind is somewhere else.`,
        bewusstheitEN: `Do you really take the other person's conflict seriously - even if your interest in it is already waning?`,
        uebungEN: `Stay with the topic until the end - even if it has stopped being exciting. Question: “Have we really sorted this out?”`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit dem nächsten Abenteuer, dem nächsten intensiven Erlebnis oder der nächsten leidenschaftlichen Verbindung überschrieben. Solange es Funken gibt, fühlt man sich lebendig und verbunden.`,
        bewusstheit: `Was wäre, wenn du heute bei einer einzigen Verbindung bleibst – und sie vertiefst, statt sie zu wechseln? Was könnte da entstehen?`,
        uebung: `Wähle eine Beziehung, die dir wichtig ist, und investiere heute bewusst in sie – ein Gespräch, ein Moment der wirklichen Präsenz. Kein Ablenken, kein nächstes Thema.`,
        autopilotEN: `Loneliness is overwritten with the next adventure, the next intense experience or the next passionate connection. As long as there are sparks, you feel alive and connected.`,
        bewusstheitEN: `What if you stuck with a single connection today - and deepened it instead of changing? What could happen there?`,
        uebungEN: `Choose a relationship that is important to you and consciously invest in it today - a conversation, a moment of real presence. No distractions, no next topic.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird auf die intensive Verbindung hin ausgerichtet: Was hält uns zusammen? Was stärkt das, was uns verbindet? Eigene Bedürfnisse und langfristige Perspektiven können dabei aus dem Blick geraten.`,
        bewusstheit: `Entscheidest du gerade für die Verbindung – oder für dich in der Verbindung? Gibt es einen Unterschied, und kennst du ihn?`,
        uebung: `Frage dich: Was würde ich wählen, wenn diese Verbindung nicht auf dem Spiel stünde? Nimm diese Antwort als eine der Stimmen in deiner Entscheidung.`,
        autopilotEN: `The decision is based on the intensive connection: What holds us together? What strengthens what connects us? Your own needs and long-term perspectives can be lost sight of.`,
        bewusstheitEN: `Are you currently deciding for the connection – or for yourself in the connection? Is there a difference and do you know it?`,
        uebungEN: `Ask yourself: What would I choose if this connection wasn't at stake? Take this answer as one of the votes in your decision.`
      },
      beziehungskrise: {
        autopilot: `Die Krise der Beziehung wird zum Alles-oder-Nichts: Entweder es stimmt alles – oder es endet. Man fordert vollständige Klarheit, vollständiges Bekenntnis, vollständige Präsenz. Nuancen werden nicht toleriert.`,
        bewusstheit: `Was wäre, wenn diese Beziehung gerade weder perfekt noch beendet ist – sondern einfach in einem schwierigen Moment? Gibt es einen Raum dazwischen, den du noch nicht betrachtet hast?`,
        uebung: `Frage den anderen, ohne sofort zu werten: „Was brauchst du von mir – konkret, heute?" Dann antworte mit dem, was du geben kannst. Nicht dem, was ideal wäre – dem, was wirklich möglich ist.`,
        autopilotEN: `The crisis of the relationship becomes all-or-nothing: either everything is right – or it ends. One demands complete clarity, complete commitment, complete presence. Nuances will not be tolerated.`,
        bewusstheitEN: `What if this relationship is neither perfect nor over - but simply in a difficult moment? Is there a space in between that you haven't considered yet?`,
        uebungEN: `Ask the other person, without immediately judging: “What do you need from me – specifically, today?” Then respond with what you can give. Not what would be ideal – what is really possible.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird mit der nächsten Begeisterung überschrieben: eine neue Idee, ein neues Projekt, eine neue Verbindung. Die Intensität schützt vor der Stille, in der der Zweifel gehört werden müsste.`,
        bewusstheit: `Was würdest du hören, wenn du die Begeisterung einen Moment pausierst und wirklich zuhörst – in dich hinein?`,
        uebung: `Halt heute inne, bevor du zur nächsten Idee springst. Frage dich in der Stille: Was bezweifle ich gerade – wirklich? Lass die Antwort kommen, ohne sie sofort zu lösen.`,
        autopilotEN: `Self-doubt is overwritten with the next excitement: a new idea, a new project, a new connection. Intensity protects against the silence in which doubt would have to be heard.`,
        bewusstheitEN: `What would you hear if you paused the excitement for a moment and really listened – to yourself?`,
        uebungEN: `Pause today before jumping to the next idea. Ask yourself in silence: What am I doubting right now – really? Let the answer come without solving it immediately.`
      },
      verlust: {
        autopilot: `Verlust erzeugt intensive Reaktionen: Schmerz, der schnell in neue Intensität umschlägt – ein neues Erlebnis, ein neuer Mensch, eine neue Idee. Die Energie zieht weiter, bevor die Trauer sich setzen kann.`,
        bewusstheit: `Was wäre, wenn du heute bei dem bleibst, was du verloren hast – ohne weiterzuziehen? Was zeigt sich, wenn du stillhältst?`,
        uebung: `Bleib heute einen Moment bei der Erinnerung an das Verlorene. Kein Ablenken, kein Weitergehen. Nur: Ich war hier, das war wirklich. Ich vermisse es.`,
        autopilotEN: `Loss creates intense reactions: pain that quickly turns into new intensity - a new experience, a new person, a new idea. The energy moves on before the grief can settle.`,
        bewusstheitEN: `What if you stayed with what you lost today - without moving on? What shows up when you hold still?`,
        uebungEN: `Take a moment today to remember what was lost. No distractions, no moving on. Only: I was here, that was real. I miss it.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird mit Intensität bekämpft: Man taucht tiefer in das ein, was Freude macht, springt zu neuen Erlebnissen, sucht die nächste Energie. Der Druck bleibt im Hintergrund, bis er bricht.`,
        bewusstheit: `Was wäre, wenn du heute die Energie, die du in neue Erlebnisse steckst, in die liegengebliebene Aufgabe lenkst?`,
        uebung: `Wähle heute eine Aufgabe, die du immer wieder hinausschiebst. Erledige sie in einem Zug – dann gönn dir etwas Schönes als echte Belohnung danach.`,
        autopilotEN: `Overwhelm is combated with intensity: you dive deeper into what brings you joy, jump to new experiences, and look for the next energy. The pressure stays in the background until it breaks.`,
        bewusstheitEN: `What if today you channeled the energy you put into new experiences into the task you have left behind?`,
        uebungEN: `Today, choose a task that you keep putting off. Kill them in one go - then treat yourself to something nice as a real reward afterwards.`
      },
      stagnation: {
        autopilot: `Ohne Intensität fühlt sich das Leben schal an: Man sucht das nächste Hochgefühl, die nächste Begegnung, das nächste Feuer. Die Leere ist kaum auszuhalten.`,
        bewusstheit: `Was wäre, wenn die Stille gerade ein Atemraum ist und nicht das Gegenteil von Leben? Was würdest du hören, wenn du stillhältst?`,
        uebung: `Bleib heute bei einer einzigen, einfachen Aktivität – kochen, gehen, zeichnen – und sei vollständig dabei. Kein Wechseln. Beobachte, ob sich etwas öffnet.`,
        autopilotEN: `Without intensity, life feels stale: you look for the next exhilaration, the next encounter, the next fire. The emptiness is almost unbearable.`,
        bewusstheitEN: `What if silence is a breathing space and not the opposite of life? What would you hear if you held still?`,
        uebungEN: `Today, stick to a single, simple activity—cooking, walking, drawing—and be fully involved. No changing. Watch to see if anything opens.`
      },
    },

    "SE8": {
      erschoepfung: {
        autopilot: `Mehr Kontrolle, mehr Einsatz, mehr Willen – das ist die automatische Antwort auf Erschöpfung. Schwäche zeigen ist keine Option. Der Körper wird durch Willenskraft überspielt, bis er sich Gehör verschafft.`,
        bewusstheit: `Was würde es bedeuten, gerade schwach zu sein – nur für diesen einen Moment, in dir selbst, ohne dass es jemand sieht?`,
        uebung: `Leg dich bewusst hin – nicht aus Erschöpfung, sondern als freie Entscheidung. Bleibe fünf Minuten ohne Bewegungsdrang. Beobachte, wie dein inneres System auf diese gewählte Passivität reagiert.`,
        autopilotEN: `More control, more effort, more will – that is the automatic response to exhaustion. Showing weakness is not an option. The body is overplayed by willpower until it makes itself heard.`,
        bewusstheitEN: `What would it mean to be weak right now - just for this one moment, within yourself, without anyone seeing?`,
        uebungEN: `Lie down consciously – not out of exhaustion, but as a free decision. Remain without any urge to move for five minutes. Observe how your inner system reacts to this chosen passivity.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird Macht eingesetzt – klar, direkt, manchmal überwältigend. Man will Klarheit erzwingen, das Feld ordnen, die Sache beenden. Andere können sich dabei überrollt fühlen.`,
        bewusstheit: `Kämpfst du gerade um das Thema – oder um die Kontrolle? Was wäre, wenn du den Konflikt nicht gewinnen müsstest?`,
        uebung: `Mache im Konflikt einen Schritt zurück – buchstäblich oder bildlich. Gib dem anderen Raum zu sprechen, ohne zu unterbrechen. Beobachte, was dabei entsteht.`,
        autopilotEN: `In conflict, power is used – clear, direct, sometimes overwhelming. You want to force clarity, organize the field, end the matter. Others may feel overwhelmed.`,
        bewusstheitEN: `Are you currently fighting for the issue – or for control? What if you didn't have to win the conflict?`,
        uebungEN: `Take a step back in the conflict - literally or figuratively. Give the other person space to speak without interrupting. Watch what happens.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird nicht leicht zugegeben – sie fühlt sich wie Schwäche an. Man bleibt aktiv, unabhängig, stark. Aber darunter liegt manchmal eine tiefe Sehnsucht nach jemandem, dem man sich wirklich zeigen kann.`,
        bewusstheit: `Gibt es jemanden, dem du dich wirklich zeigen könntest – ohne Stärke zu performen? Und lässt du das zu?`,
        uebung: `Suche heute die Nähe einer Person, der du vertraust – nicht um etwas zu tun oder zu schaffen. Nur um da zu sein. Zusammen. Beobachte, was das in dir auslöst.`,
        autopilotEN: `Loneliness is not easily admitted – it feels like weakness. You stay active, independent, strong. But underneath sometimes lies a deep longing for someone to whom you can really show yourself.`,
        bewusstheitEN: `Is there anyone you could really show yourself to – without performing at your strength? And do you allow that?`,
        uebungEN: `Today, seek closeness to someone you trust - not to do or create something. Just to be there. Together. Observe what this triggers in you.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden schnell und klar getroffen – Zögern gilt als Schwäche. Man handelt, bevor alle Informationen da sind, weil Abwarten sich falsch anfühlt. Manchmal wird eine schlechte Entscheidung lieber verteidigt als revidiert.`,
        bewusstheit: `Was wäre, wenn du diese Entscheidung einen Moment pausierst – nicht aus Angst, sondern aus Stärke? Wer trifft die bessere Wahl: der, der sofort handelt, oder der, der erst wirklich hinschaut?`,
        uebung: `Warte 24 Stunden, bevor du diese Entscheidung umsetzt. Frage dich am nächsten Tag: Ist das immer noch meine Wahl? Wenn ja – dann handle mit voller Kraft.`,
        autopilotEN: `Decisions are made quickly and clearly - hesitation is seen as weakness. You act before all the information is there because waiting feels wrong. Sometimes a bad decision is better defended than reversed.`,
        bewusstheitEN: `What if you paused this decision for a moment - not out of fear, but out of strength? Who makes the better choice: the one who acts immediately or the one who really looks first?`,
        uebungEN: `Wait 24 hours before implementing this decision. The next day, ask yourself: Is this still my choice? If yes – then act with full force.`
      },
      beziehungskrise: {
        autopilot: `Man kämpft oder schneidet ab. Entweder wird der Konflikt direkt und hart angegangen – oder man zieht sich hinter Stärke zurück, zeigt nichts, macht weiter. Beides lässt wenig Raum für echte Verbindung.`,
        bewusstheit: `Was wäre, wenn du in dieser Krise einen Schritt auf den anderen zu machst – ohne Schwäche, aber ohne Rüstung? Was würde sich dann zwischen euch bewegen?`,
        uebung: `Sage dem anderen heute etwas Echtes – nicht die Forderung, nicht die Stärke. Etwas, das zeigt, dass du wirklich da bist: „Mir liegt diese Beziehung wirklich am Herzen."`,
        autopilotEN: `You fight or you cut out. Either the conflict is addressed directly and harshly - or you retreat behind strength, show nothing and carry on. Both leave little room for real connection.`,
        bewusstheitEN: `What if you took one step towards the other in this crisis - without weakness, but without armour? What would happen between you then?`,
        uebungEN: `Say something real to the other person today - not the demand, not the strength. Something that shows you're really there: "I really care about this relationship."`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel existiert – wird aber nicht gezeigt. Nach außen: Stärke, Kontrolle, Entschlossenheit. Innen: manchmal eine tiefe Frage, ob man wirklich so stark ist, wie man wirkt. Diese Frage wird bekämpft statt beantwortet.`,
        bewusstheit: `Was wäre, wenn du den Zweifel nicht bekämpfst, sondern einmal stehenlässt? Stärke schließt Zweifel nicht aus – sie besteht trotzdem.`,
        uebung: `Schreib heute einen Satz, der mit „Ich bin unsicher, ob …" beginnt – nur für dich, kein Publikum. Dann lies ihn. Das ist auch du.`,
        autopilotEN: `Self-doubt exists – but is not shown. Outwardly: strength, control, determination. Inside: sometimes a deep question as to whether you are really as strong as you seem. This question is fought instead of answered.`,
        bewusstheitEN: `What if you didn't fight the doubt, but let it stand for once? Strength does not eliminate doubt - it still exists.`,
        uebungEN: `Today, write a sentence that begins with "I'm unsure if..." - just for you, not an audience. Then read it. This is you too.`
      },
      verlust: {
        autopilot: `Verlust löst Widerstand aus: Man kämpft, verdrängt, überwältigt den Schmerz mit Stärke. Trauer fühlt sich wie Schwäche an – also wird sie bekämpft. Das kostet Kraft, ohne zu heilen.`,
        bewusstheit: `Was wäre, wenn Trauer keine Schwäche ist – sondern ein Zeichen, dass dir etwas wirklich wichtig war? Kann das stark sein?`,
        uebung: `Erlaube dir heute, traurig zu sein – nicht wütend, nicht stark, nur traurig. Zehn Minuten, in Stille. Du musst das niemandem zeigen. Nur dir selbst erlauben.`,
        autopilotEN: `Loss triggers resistance: you fight, repress, and overcome the pain with strength. Grief feels like weakness - so it is fought. That takes strength without healing.`,
        bewusstheitEN: `What if grief isn't a weakness - but a sign that something really mattered to you? Can that be strong?`,
        uebungEN: `Today, allow yourself to be sad – not angry, not strong, just sad. Ten minutes, in silence. You don't have to show this to anyone. Only allow yourself.`
      },
      ueberforderung: {
        autopilot: `Überforderung zeigt sich als Verdichtung: mehr Energie, mehr Kontrolle, mehr Druck auf andere und sich selbst. Man kämpft sich durch statt zu priorisieren. Der Körper meldet sich irgendwann.`,
        bewusstheit: `Was wäre, wenn du heute nicht mehr Druck erzeugst – sondern Dinge weglässt? Was ist wirklich nicht dringend?`,
        uebung: `Streiche heute drei Dinge von der Liste, die du heute tun wolltest. Nicht verschieben – wirklich loslassen. Dann beobachte: Ist etwas eingebrochen?`,
        autopilotEN: `Overwhelm manifests itself as a compression: more energy, more control, more pressure on others and yourself. You fight through instead of prioritizing. The body will get in touch at some point.`,
        bewusstheitEN: `What if you stopped putting pressure on yourself today and instead left things out? What is really not urgent?`,
        uebungEN: `Today, cross three things off the list that you wanted to do today. Don’t postpone – really let go. Then observe: Has something broken?`
      },
      stagnation: {
        autopilot: `Stagnation wird nicht geduldet: Man kämpft dagegen an, erzeugt Druck, sucht das nächste Ziel. Stillstand fühlt sich wie Schwäche an. Die Energie richtet sich gegen die Leere – und erschöpft sich.`,
        bewusstheit: `Was wäre, wenn du die Stagnation heute nicht bekämpfst – sondern sie einfach da sein lässt? Was würde das bedeuten?`,
        uebung: `Erlaube dir heute, nichts zu bewegen. Einen halben Tag ohne Agenda, ohne Druck, ohne Kämpfen. Beobachte, was in der Stille entsteht, wenn du nicht kämpfst.`,
        autopilotEN: `Stagnation is not tolerated: you fight against it, create pressure, look for the next goal. Standing still feels like weakness. The energy is directed against the emptiness - and becomes exhausted.`,
        bewusstheitEN: `What if you didn't fight the stagnation today - but just let it be there? What would that mean?`,
        uebungEN: `Allow yourself not to move today. Half a day with no agenda, no pressure, no fighting. Observe what arises in the silence when you don't fight.`
      },
    },

    "SO8": {
      erschoepfung: {
        autopilot: `Man trägt weiter für die Gruppe – schützt, führt, organisiert. Die eigene Erschöpfung wird hinter Stärke verborgen, weil die anderen einen brauchen. Innehalten bedeutet, die Schutzfunktion zu gefährden.`,
        bewusstheit: `Wer schützt dich gerade? Und wäre es so schlimm, das heute einmal zuzulassen?`,
        uebung: `Teile mit jemandem aus deinem inneren Kreis ehrlich mit, wie es dir geht – ohne Führungsgestus, ohne Schutzimpuls. Einfach: "Ich bin gerade erschöpft." Beobachte, was das in dir und im anderen bewegt.`,
        autopilotEN: `You continue to support the group – protect, lead, organize. Your own exhaustion is hidden behind strength because others need you. To pause means to endanger the protective function.`,
        bewusstheitEN: `Who is protecting you right now? And would it be so bad to allow that today?`,
        uebungEN: `Share honestly with someone in your inner circle how you're feeling - without leadership gestures, without protective impulses. Simple: "I'm exhausted right now." Observe what this moves in you and in others.`
      },
      konflikt: {
        autopilot: `Im Konflikt, der jemanden betrifft, der zur eigenen Gruppe gehört, kann die Reaktion sehr schnell und sehr gross werden. Schutz geht über Verhältnismäßigkeit. Die Energie ist sofort voll da.`,
        bewusstheit: `Ist das, was gerade passiert, wirklich eine Bedrohung – oder reagiert dein Schutzimpuls auf etwas, das er als Bedrohung liest, ohne es wirklich zu prüfen?`,
        uebung: `Bevor du eingreifst: Frage zuerst die betroffene Person, was sie braucht. Vielleicht braucht sie etwas anderes als Schutz.`,
        autopilotEN: `In a conflict that concerns someone who belongs to one's own group, the reaction can be very quick and very large. Protection goes beyond proportionality. The energy is there immediately.`,
        bewusstheitEN: `Is what's happening really a threat - or is your protective impulse reacting to something it reads as a threat without really examining it?`,
        uebungEN: `Before you intervene: First ask the affected person what they need. Maybe she needs something other than protection.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit zeigt sich als Schutzbedürfnis für andere – man umgibt sich mit der eigenen Gruppe, sorgt für sie, hält sie zusammen. Das eigene Alleinsein wird im Dienst für andere aufgelöst.`,
        bewusstheit: `Wer sorgt für dich – nicht als Führungskraft, nicht als Beschützer, sondern als Mensch? Gibt es jemanden, dem du das erlaubst?`,
        uebung: `Erlaube dir heute, von jemandem umsorgt zu werden – auch wenn es sich ungewohnt anfühlt. Nimm Fürsorge an, ohne sie sofort zu erwidern.`,
        autopilotEN: `Loneliness shows itself as a need for protection for others - you surround yourself with your own group, care for them, keep them together. Your own aloneness is dissolved in the service of others.`,
        bewusstheitEN: `Who cares for you – not as a leader, not as a protector, but as a human being? Is there anyone you allow to do this?`,
        uebungEN: `Today, allow yourself to be cared for by someone - even if it feels unusual. Accept care without immediately reciprocating it.`
      },
      entscheidung: {
        autopilot: `Man entscheidet für die Gruppe – was hält sie zusammen, was schützt sie, was stärkt die gemeinsame Position? Die eigene Präferenz wird dem kollektiven Nutzen untergeordnet, manchmal ohne es zu merken.`,
        bewusstheit: `Entscheidest du gerade für die Gruppe – und würdest du dasselbe wählen, wenn es nur um dich ginge? Kennst du den Unterschied?`,
        uebung: `Sprich die Entscheidung zuerst mit dir selbst durch: Was will ich? Dann: Was braucht die Gruppe? Dann entscheide, welche Stimme hier wirklich führen soll.`,
        autopilotEN: `You decide for the group - what holds it together, what protects it, what strengthens the common position? One's own preference is subordinated to the collective benefit, sometimes without realizing it.`,
        bewusstheitEN: `Are you currently deciding for the group – and would you choose the same if it was just you? Do you know the difference?`,
        uebungEN: `Talk through the decision with yourself first: What do I want? Then: What does the group need? Then decide which voice should really lead here.`
      },
      beziehungskrise: {
        autopilot: `Man schützt die eigenen Leute – und wer in diesem Kreis zur Bedrohung wird, wird konfrontiert oder ausgeschlossen. Beziehungskrisen innerhalb des Schutzkreises werden manchmal übersehen, weil man nach außen schaut.`,
        bewusstheit: `Gibt es jemanden in deinem engsten Kreis, dem du gerade nicht wirklich zugehört hast – weil du beschäftigt warst mit Schützen statt mit Verbinden?`,
        uebung: `Sitz heute mit dieser Person zusammen – ohne Schutzimpuls, ohne Führungsgestus. Frage einfach: „Wie geht es dir und uns?" Dann höre zu.`,
        autopilotEN: `You protect your own people - and anyone who becomes a threat in this circle is confronted or excluded. Relationship crises within the protective circle are sometimes overlooked because people look outside.`,
        bewusstheitEN: `Is there someone in your inner circle that you weren't really listening to right now - because you were busy protecting instead of connecting?`,
        uebungEN: `Sit with this person today – without protective impulses, without leadership gestures. Just ask, “How are you and us?” Then listen.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird zur Bedrohung erklärt: Er wird bekämpft, weggedrückt, durch noch mehr Einsatz für die Gruppe überwältigt. Wer an sich selbst zweifelt, schützt die anderen noch mehr – als würde das den Zweifel auslöschen.`,
        bewusstheit: `Was wäre, wenn du den Zweifel nicht bekämpfst, sondern der Person zeigst, der du wirklich vertraust – und mit ihr darüber sprichst?`,
        uebung: `Sag heute jemandem, dem du wirklich vertraust, was du bezweifelst. Nicht als Schwäche verpackt – als Tatsache: „Ich bin gerade unsicher, ob …" Lass die Antwort kommen.`,
        autopilotEN: `Self-doubt is declared a threat: it is fought, pushed away, and overwhelmed by even more commitment to the group. Anyone who doubts themselves protects others even more - as if that would erase the doubt.`,
        bewusstheitEN: `What if instead of fighting the doubt, you showed it to the person you really trust – and talked to them about it?`,
        uebungEN: `Today, tell someone you really trust what you doubt. Not packaged as a weakness - as a fact: "I'm currently unsure whether..." Let the answer come.`
      },
      verlust: {
        autopilot: `Man trägt die Trauer der Gruppe mit und hält dabei die eigene zurück. Stärke für andere – das ist die Rolle. Der eigene Schmerz bleibt ungesehen, weil er die Stärke gefährdet.`,
        bewusstheit: `Wer trägt deinen Schmerz – wenn du gerade alle anderen trägst? Gibt es einen Menschen, dem du heute deine Trauer zeigen kannst?`,
        uebung: `Suche heute einen Menschen, dem du wirklich vertraust, und sage: „Ich trauere gerade." Nur das. Keine Erklärung, keine Stärke. Lass ihn antworten.`,
        autopilotEN: `You share the group's grief while holding back your own. Strength for others – that is the role. Your own pain goes unseen because it endangers your strength.`,
        bewusstheitEN: `Who carries your pain - when you are carrying everyone else? Is there someone you can show your sadness to today?`,
        uebungEN: `Today, find someone you really trust and say, "I'm grieving right now." Just that. No explanation, no strength. Let him answer.`
      },
      ueberforderung: {
        autopilot: `Man übernimmt Verantwortung für die Gruppe über die eigenen Grenzen hinaus: Wer führt, gibt nicht nach. Der eigene Erschöpfungszustand wird ignoriert oder vor anderen verborgen.`,
        bewusstheit: `Was wäre, wenn du als Führungsperson heute Grenzen setzt – und damit ein Beispiel gibst statt Schwäche zu zeigen?`,
        uebung: `Delegiere heute eine konkrete Aufgabe, die du normalerweise selbst übernehmen würdest. Sage klar, was du brauchst. Lass den anderen es erledigen – ohne zu kontrollieren.`,
        autopilotEN: `You take responsibility for the group beyond your own boundaries: those who lead do not give in. Your own state of exhaustion is ignored or hidden from others.`,
        bewusstheitEN: `What if, as a leader, you set boundaries today - and thereby set an example instead of showing weakness?`,
        uebungEN: `Today, delegate a specific task that you would normally take on yourself. Be clear about what you need. Let the other person do it – without controlling.`
      },
      stagnation: {
        autopilot: `Ohne Kampf oder Schutzaufgabe für die Gruppe fehlt der Antrieb. Man sucht nach einem neuen Feind, einer neuen Herausforderung, einem neuen Projekt – um die Leere zu überbrücken.`,
        bewusstheit: `Was wäre, wenn Stärke heute nicht im Kämpfen liegt – sondern im Innehalten und Zuhören? Was würde die Stille dir sagen?`,
        uebung: `Setz dich heute mit jemandem aus der Gruppe zusammen – nicht um zu führen oder zu schützen, sondern um zu hören: Wie geht es euch? Was braucht ihr?`,
        autopilotEN: `Without fighting or protecting the group, there is no drive. You look for a new enemy, a new challenge, a new project - to bridge the void.`,
        bewusstheitEN: `What if strength today lies not in fighting - but in pausing and listening? What would the silence tell you?`,
        uebungEN: `Sit down with someone in the group today – not to guide or protect, but to hear: How are you? What do you need?`
      },
    },

    "SX8": {
      erschoepfung: {
        autopilot: `Die Intensität bleibt, auch wenn die Energie fehlt. Man kämpft, hält, fordert – und spürt nicht, wie tief die Erschöpfung wirklich geht. Der Körper wird herausgefordert statt gehört.`,
        bewusstheit: `Unter welcher Intensität liegt gerade Erschöpfung – und was müsstest du loslassen, um sie wirklich zu spüren?`,
        uebung: `Lege für einen Moment alle Intensität ab. Atme langsam. Fühle, wie erschöpft du wirklich bist – ohne das sofort zu bekämpfen. Benenne es einfach: "Das bin ich gerade."`,
        autopilotEN: `The intensity remains, even if the energy is missing. You fight, hold on, demand - and you don't feel how deep the exhaustion really goes. The body is challenged instead of heard.`,
        bewusstheitEN: `How intense is exhaustion right now - and what would you have to let go of to really feel it?`,
        uebungEN: `Put aside all intensity for a moment. Breathe slowly. Feel how exhausted you really are - without immediately fighting it. Just name it: “This is who I am right now.”`
      },
      konflikt: {
        autopilot: `Im Konflikt gibt es kein Halten mehr – die volle Energie ist sofort da, direkt, intensiv, fordernd. Kein Schritt zurück. Das kann klären – und es kann zerstören.`,
        bewusstheit: `Nimmst du dir einen Moment, bevor du mit voller Kraft einsteigst – nur um zu prüfen, ob das die richtige Situation für diese Energie ist?`,
        uebung: `Atme einmal durch, bevor du antwortest – nicht um dich zurückzuhalten, sondern um zu wählen. Was sagst du, wenn du wählst statt reagierst?`,
        autopilotEN: `In conflict there is no holding back - the full energy is there immediately, direct, intense, demanding. Not a step back. That can clarify – and it can destroy.`,
        bewusstheitEN: `Do you take a moment before you jump in full force - just to check if this is the right situation for that energy?`,
        uebungEN: `Take a breath before you answer—not to hold back, but to choose. What do you say when you choose instead of react?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit löst einen tiefen Hunger nach Verschmelzung aus – nach einer Verbindung, die alles umfasst und ausfüllt. Wenn diese Verbindung fehlt, entsteht ein nagender innerer Mangel.`,
        bewusstheit: `Was brauchst du wirklich in diesem Moment – Verschmelzung, oder einfach echten Kontakt? Gibt es eine Person, bei der echtes Da-sein genug wäre?`,
        uebung: `Suche heute eine einfache körperliche Nähe – ein Gespräch, ein gemeinsames Schweigen, ein Spaziergang nebeneinander. Nicht Intensität, sondern Präsenz.`,
        autopilotEN: `Loneliness triggers a deep hunger for merger - for a connection that encompasses and fills everything. When this connection is missing, a nagging inner lack arises.`,
        bewusstheitEN: `What do you really need at this moment – ​​fusion, or just real contact? Is there a person for whom simply being there would be enough?`,
        uebungEN: `Today, seek simple physical closeness – a conversation, a shared silence, a walk next to each other. Not intensity, but presence.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden impulsiv und mit voller Kraft getroffen – oder auf den wichtigsten Menschen hin ausgerichtet: Was passt zu uns, zu dieser Verbindung? Die eigene, stille Stimme geht in der Intensität unter.`,
        bewusstheit: `Was willst du – du selbst, ruhig und klar – in dieser Entscheidung? Gibt es eine Antwort in dir, die du noch nicht wirklich gehört hast?`,
        uebung: `Geh für einen kurzen Spaziergang allein. Frage dich dabei: Was würde ich wählen, wenn niemand davon wüsste? Dann schreibe die Antwort auf.`,
        autopilotEN: `Decisions are made impulsively and with full force - or focused on the most important person: What suits us, this connection? Your own quiet voice is lost in the intensity.`,
        bewusstheitEN: `What do you – yourself, calm and clear – want in this decision? Is there an answer within you that you haven't really heard yet?`,
        uebungEN: `Go for a short walk alone. Ask yourself: What would I choose if no one knew about it? Then write down the answer.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird mit Intensität überwältigt – man kämpft voll, fordert vollständige Klärung, Verschmelzung, Verbindlichkeit. Wenn der andere das nicht halten kann, kommt der totale Rückzug.`,
        bewusstheit: `Ist das, was du gerade forderst, wirklich das, was die Beziehung braucht – oder ist es das, was du innerlich schon immer gesucht hast? Gibt es einen Unterschied?`,
        uebung: `Nenne dem anderen heute einen konkreten Wunsch: „Ich wünsche mir, dass ..." – und fülle ihn mit etwas Erreichbarem. Nicht dem Ideal. Dem Möglichen.`,
        autopilotEN: `The crisis is overwhelmed with intensity - people fight hard, demand complete clarification, fusion, commitment. If the other person cannot maintain this, there will be a total withdrawal.`,
        bewusstheitEN: `Is what you're asking for right now really what the relationship needs - or is it what you've always been looking for inside? Is there a difference?`,
        uebungEN: `Give the other person a specific wish today: “I wish that…” – and fill it with something achievable. Not the ideal. The possible.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel kommt als Erschütterung – und wird sofort mit Intensität beantwortet: mehr Energie, mehr Entschlossenheit, mehr Kraft. Aber der eigentliche Zweifel bleibt darunter unberührt.`,
        bewusstheit: `Was würdest du hören, wenn du die Intensität einen Moment loslässt – und einfach da bist, mit dem Zweifel, ohne ihn zu bekämpfen?`,
        uebung: `Geh heute in absolute Stille – kein Gespräch, keine Musik, kein Handy – für zwanzig Minuten. Lass kommen, was kommt. Benenne es danach in einem Satz.`,
        autopilotEN: `Self-doubt comes as a shock - and is immediately answered with intensity: more energy, more determination, more strength. But the actual doubt remains untouched underneath.`,
        bewusstheitEN: `What would you hear if you let go of the intensity for a moment - and just be there with the doubt without fighting it?`,
        uebungEN: `Today, go into absolute silence – no conversation, no music, no cell phone – for twenty minutes. Let whatever comes come. Then name it in a sentence.`
      },
      verlust: {
        autopilot: `Verlust erzeugt intensive Energie: Zorn, Schmerz, Trauer – alles kommt gleichzeitig und mit voller Wucht. Das kann überwältigend sein. Die Intensität schützt manchmal davor, die Verletzlichkeit wirklich zu spüren.`,
        bewusstheit: `Was liegt unter dem Zorn oder der Intensität? Was ist der stille Kern dieses Verlustes – jenseits der Wucht?`,
        uebung: `Geh heute in Stille – kein Gespräch, keine Musik. Frage dich: Was vermisse ich wirklich? Lass die Antwort leise kommen. Sie muss nicht laut sein.`,
        autopilotEN: `Loss creates intense energy: anger, pain, sadness - everything comes at once and with full force. This can be overwhelming. The intensity sometimes protects us from really feeling the vulnerability.`,
        bewusstheitEN: `What lies beneath the anger or intensity? What is the quiet core of this loss – beyond the force?`,
        uebungEN: `Walk in silence today – no conversation, no music. Ask yourself: What am I really missing? Let the answer come quietly. It doesn't have to be loud.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird mit Intensität beantwortet: Man drängt durch, kämpft, gibt nicht nach. Die Grenze zwischen gesundem Durchbeißen und selbstschädigendem Druck verschwimmt.`,
        bewusstheit: `Wo ist gerade die Grenze zwischen kraftvoll und selbstschädigend? Was würde ein Mentor, dem du vertraust, dir heute raten?`,
        uebung: `Halte heute einmal inne, bevor du eine Entscheidung unter Druck triffst. Drei Atemzüge. Dann entscheide. Beobachte, ob die Entscheidung anders wird.`,
        autopilotEN: `Overwhelm is met with intensity: you push through, fight, don't give in. The line between healthy biting and self-damaging pressure is blurring.`,
        bewusstheitEN: `Where is the line between powerful and self-damaging? What advice would a mentor you trust give you today?`,
        uebungEN: `Today, pause before you make a decision under pressure. Three breaths. Then decide. Watch to see if the decision changes.`
      },
      stagnation: {
        autopilot: `Ohne Intensität und Gegner fühlt sich das Leben flach an. Man sucht das nächste Feuer, den nächsten Konflikt, die nächste Herausforderung – nur um lebendig zu sein.`,
        bewusstheit: `Was wäre, wenn Lebendigkeit auch in der Stille möglich ist – ohne Kampf, ohne Feuer? Was bleibt von dir, wenn alles ruhig ist?`,
        uebung: `Geh heute allein in die Natur – ohne Ziel, ohne Aufgabe. Sitz irgendwo und lass die Stille kommen. Frage dich: Was bin ich, wenn ich nicht kämpfe?`,
        autopilotEN: `Without intensity and opponents, life feels flat. You look for the next fire, the next conflict, the next challenge - just to be alive.`,
        bewusstheitEN: `What if aliveness is also possible in silence – without fight, without fire? What remains of you when everything is quiet?`,
        uebungEN: `Go out into nature alone today – without a goal, without a task. Sit somewhere and let the silence come. Ask yourself: What am I if I don't fight?`
      },
    },

    "SE9": {
      erschoepfung: {
        autopilot: `Man greift zu den vertrauten Tröstungen: Gewohnheiten, Rückzug, das Dämpfen des Unruhegefühls. Die Erschöpfung wird betäubt, aber nicht gehört. Alles läuft weiter – im Autopiloten.`,
        bewusstheit: `Was betäubst du gerade – und was würdest du hören, wenn du einen Moment wirklich innehieltest?`,
        uebung: `Lass eine der vertrauten Gewohnheiten heute bewusst aus. Sitz mit dem Unbehagen, das dann entsteht. Frage dich in aller Stille: Was will gerade wirklich gehört werden?`,
        autopilotEN: `You turn to the familiar consolations: habits, withdrawal, dampening the feeling of restlessness. The exhaustion is numbed but not heard. Everything continues to run – on autopilot.`,
        bewusstheitEN: `What are you deafening right now – and what would you hear if you really stopped for a moment?`,
        uebungEN: `Consciously skip one of your familiar habits today. Sit with the discomfort that then arises. Ask yourself quietly: What really wants to be heard right now?`
      },
      konflikt: {
        autopilot: `Im Konflikt liegt der Impuls, ihn zu vermeiden, abzumildern, zu beschwören. Man gibt nach, stimmt zu, macht sich kleiner – um den Frieden zu wahren. Innen sammelt sich dabei etwas an, das irgendwann herausbricht.`,
        bewusstheit: `Was verschluckst du gerade – und wie lange geht das noch gut?`,
        uebung: `Sage einmal eine klare, ruhige Meinung in diesem Konflikt – nicht um zu kämpfen, sondern weil du eine Meinung hast. Beobachte, was passiert, wenn du auftauchst.`,
        autopilotEN: `In conflict lies the impulse to avoid it, to mitigate it, to invoke it. You give in, agree, make yourself smaller - to keep the peace. Something accumulates inside and eventually breaks out.`,
        bewusstheitEN: `What are you swallowing right now – and how long will it last?`,
        uebungEN: `Express your clear, calm opinion in this conflict - not to fight, but because you have an opinion. Watch what happens when you show up.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit Gewohnheiten aufgefüllt: Fernsehen, Essen, Scrollen, Dösen. Man betäubt das Alleinsein, ohne es wirklich zu fühlen. Der Rückzug macht sich unsichtbar, weil er so vertraut ist.`,
        bewusstheit: `Was betäubst du gerade – und was würde auftauchen, wenn du es wirklich fühlen würdest?`,
        uebung: `Mach heute eine Gewohnheit bewusst: Bevor du zum Handy greifst oder den Fernseher einschaltest, halte einen Moment inne. Was brauchst du wirklich? Und ist das, was du gleich tun wirst, wirklich das?`,
        autopilotEN: `Loneliness is filled with habits: watching TV, eating, scrolling, dozing. You numb being alone without really feeling it. The withdrawal becomes invisible because it is so familiar.`,
        bewusstheitEN: `What are you numbing right now – and what would emerge if you really felt it?`,
        uebungEN: `Create a habit today: Before you pick up your phone or turn on the TV, pause for a moment. What do you really need? And is what you're about to do really that?`
      },
      entscheidung: {
        autopilot: `Man entscheidet nicht wirklich – man lässt entscheiden. Die Situation, die Gewohnheit, der Zufall übernehmen. Man folgt dem Weg des geringsten Widerstands, ohne bewusst zu wählen.`,
        bewusstheit: `Hast du diese Entscheidung getroffen – oder ist sie einfach passiert? Was wäre es, einmal wirklich zu wählen, auch wenn das Unbehagen kostet?`,
        uebung: `Setze dir einen klaren Entscheidungsmoment: Heute, um [Uhrzeit], treffe ich diese Wahl. Halte diesen Moment ein. Schreibe auf, was du gewählt hast und warum.`,
        autopilotEN: `You don't really decide - you let it be decided. The situation, the habit, the coincidence take over. One follows the path of least resistance without consciously choosing.`,
        bewusstheitEN: `Did you make this decision – or did it just happen? What would it be like to really choose for once, even if it costs discomfort?`,
        uebungEN: `Set yourself a clear decision moment: Today, at [time], I make this choice. Capture this moment. Write down what you chose and why.`
      },
      beziehungskrise: {
        autopilot: `Man hofft, dass die Krise sich von selbst auflöst. Man wartet ab, weicht aus, macht anderes – und die Spannung zwischen den Beteiligten wächst, weil sie nie wirklich angesprochen wird.`,
        bewusstheit: `Löst sich das gerade wirklich auf – oder verdrängt du es und hoffst, es wird weniger? Was würde passieren, wenn du heute das Gespräch initiierst?`,
        uebung: `Sage dem anderen heute: „Ich möchte mit dir über etwas sprechen, das mich beschäftigt." Nur dieser Satz. Dann schau, was kommt.`,
        autopilotEN: `One hopes that the crisis will resolve itself. You wait, evade, do something else - and the tension between those involved grows because it is never really addressed.`,
        bewusstheitEN: `Is it really dissolving at the moment - or are you repressing it and hoping it will lessen? What would happen if you initiated the conversation today?`,
        uebungEN: `Say to the other person today, "I want to talk to you about something that's bothering me." Just this sentence. Then see what comes.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird betäubt: Ich bin doch in Ordnung, das wird sich schon legen. Man greift zu Gewohnheiten, zieht sich zurück, macht weiter – und die innere Stimme, die etwas sagen will, verstummt im Alltag.`,
        bewusstheit: `Was würdest du hören, wenn du die Gewohnheiten einen Moment weglegst und wirklich fragst: Wie geht es mir eigentlich – ehrlich?`,
        uebung: `Schreibe heute auf, was dein innerer Kritiker sagt – und dann schreibe daneben, was ein wohlwollender Freund sagen würde. Lass beide Stimmen nebeneinander stehen.`,
        autopilotEN: `Self-doubt is numbed: I'm okay, it'll go away. You resort to habits, withdraw, carry on - and the inner voice that wants to say something falls silent in everyday life.`,
        bewusstheitEN: `What would you hear if you put the habits aside for a moment and really ask: How am I actually feeling - honestly?`,
        uebungEN: `Today, write down what your inner critic says - and then write next to it what a benevolent friend would say. Let both voices stand next to each other.`
      },
      verlust: {
        autopilot: `Verlust wird in Routine eingebettet: Man macht weiter, betäubt sich mit dem Alltag, schiebt den Schmerz auf. Der Verlust sitzt irgendwo, aber er bekommt keinen Raum, weil Raum sich gefährlich anfühlt.`,
        bewusstheit: `Was trägst du mit dir, das noch keinen Raum hatte? Was wäre, wenn du heute nur zehn Minuten für deinen Schmerz reservierst?`,
        uebung: `Sitz heute mit einem Foto oder einer Erinnerung an das Verlorene. Zehn Minuten. Lass kommen, was kommt – auch Tränen, auch Leere, auch Stille. Alles darf sein.`,
        autopilotEN: `Loss becomes embedded in routine: you carry on, anesthetize yourself with everyday life, postpone the pain. The loss is somewhere, but it doesn't get space because space feels dangerous.`,
        bewusstheitEN: `What are you carrying with you that hasn't had a place yet? What if you set aside just ten minutes for your pain today?`,
        uebungEN: `Sit today with a photo or a reminder of what was lost. Ten minutes. Let whatever comes come – even tears, also emptiness, also silence. Everything is allowed.`
      },
      ueberforderung: {
        autopilot: `Überforderung wird still getragen: Man macht weiter, sagt nichts, hofft dass es von selbst besser wird. Der Druck sammelt sich, bis er in Erschöpfung oder plötzlichem Rückzug mündet.`,
        bewusstheit: `Was trägst du gerade, das du eigentlich nicht allein tragen solltest? Gibt es jemanden, dem du heute sagen könntest, was zu viel ist?`,
        uebung: `Schreibe heute auf: Was ist zu viel? Was davon kannst du abgeben? Sag einer Person konkret, was du brauchst – auch wenn es sich seltsam anfühlt.`,
        autopilotEN: `Overwhelm is carried quietly: you carry on, don't say anything, hope that things get better on their own. The pressure accumulates until it results in exhaustion or sudden withdrawal.`,
        bewusstheitEN: `What are you wearing right now that you shouldn't be wearing alone? Is there anyone you could tell today what's too much?`,
        uebungEN: `Write down today: What is too much? Which of these can you give away? Tell a person specifically what you need - even if it feels strange.`
      },
      stagnation: {
        autopilot: `Stagnation ist vertraut und fast bequem: Man macht weiter im Trott, meidet Entscheidungen, schiebt auf. Die Leere wird durch Routine betäubt statt durchbrochen.`,
        bewusstheit: `Was wäre, wenn du heute eine kleine, klare Entscheidung triffst – nicht die große, nur eine kleine? Was würde das verändern?`,
        uebung: `Wähle heute etwas, das du schon lange aufgeschoben hast. Mach den ersten Schritt – nur den ersten. Fünf Minuten. Dann schau, was passiert.`,
        autopilotEN: `Stagnation is familiar and almost comfortable: you keep going in a rut, avoid making decisions, procrastinate. The emptiness is numbed by routine rather than broken.`,
        bewusstheitEN: `What if you made a small, clear decision today - not the big one, just a small one? What would that change?`,
        uebungEN: `Today, choose something that you have been putting off for a long time. Take the first step – just the first. Five minutes. Then see what happens.`
      },
    },

    "SO9": {
      erschoepfung: {
        autopilot: `Man macht weiter mit allem, weil aufhören bedeuten würde, Wellen zu schlagen. Man passt sich an, fügt sich ein, sagt Ja – und spürt kaum, wie die eigene Kraft dabei schwindet.`,
        bewusstheit: `Wessen Erwartungen erfüllst du gerade, obwohl du erschöpft bist? Und wessen Erwartung ist es eigentlich wirklich?`,
        uebung: `Sage heute einmal bewusst Nein zu einer Anfrage oder Erwartung – auch einer kleinen. Beobachte, welcher innere Widerstand entsteht, und wo er sitzt.`,
        autopilotEN: `You keep doing everything because stopping would mean making waves. You adapt, fit in, say yes - and hardly notice how your own strength is dwindling.`,
        bewusstheitEN: `Whose expectations are you currently fulfilling even though you are exhausted? And whose expectation is it really?`,
        uebungEN: `Today, consciously say no to a request or expectation – even a small one. Observe what internal resistance arises and where it is located.`
      },
      konflikt: {
        autopilot: `Im Konflikt übernimmt man die Perspektiven aller Beteiligten und versucht zu vermitteln, zu verbinden, zu glätten. Die eigene Position verschwindet dabei oft. Am Ende weiss man nicht mehr genau, wo man selbst steht.`,
        bewusstheit: `Was ist deine eigene Meinung in diesem Konflikt – nicht die ausgewogene Synthese, sondern wirklich deine?`,
        uebung: `Formuliere einmal nur deinen eigenen Standpunkt, ohne die Position des anderen einzubeziehen. Nur: „Ich denke ...” und dann ein klarer Satz.`,
        autopilotEN: `In a conflict, you take on the perspectives of everyone involved and try to mediate, connect and smooth things over. Your own position often disappears. In the end, you no longer know exactly where you stand.`,
        bewusstheitEN: `What is your own opinion in this conflict - not the balanced synthesis, but really yours?`,
        uebungEN: `Just formulate your own point of view without taking the other person's position into account. Just: “I think…” and then a clear sentence.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum als solche erkannt – man verschmilzt mit der Umgebung, der Stimmung, dem Alltag. Das Alleinsein läuft im Hintergrund, während man sich mit dem Außen beschäftigt. Erst in ruhigen Momenten taucht es auf.`,
        bewusstheit: `Wann hast du zuletzt wirklich für dich selbst Kontakt gesucht – nicht weil es sich ergab, nicht weil jemand anderes es wollte, sondern weil du es dir gewünscht hast?`,
        uebung: `Initiiere heute selbst eine Begegnung – nicht abwarten, bis jemand kommt. Wähle aktiv. Beobachte, wie sich das anfühlt, wenn du aus dir heraus auf jemanden zugehst.`,
        autopilotEN: `Loneliness is hardly recognized as such - you merge with your surroundings, your mood, your everyday life. Being alone runs in the background while you deal with the outside. It only appears in quiet moments.`,
        bewusstheitEN: `When was the last time you really sought contact for yourself - not because it happened, not because someone else wanted it, but because you wanted it?`,
        uebungEN: `Initiate an encounter yourself today – don’t wait for someone to come. Choose active. Observe what it feels like when you approach someone out of yourself.`
      },
      entscheidung: {
        autopilot: `Man passt sich an: Was erwartet die Gruppe? Was wäre verträglich für alle? Die eigene Stimme wird dabei so weit zurückgestellt, dass sie selbst kaum mehr zu hören ist.`,
        bewusstheit: `Was würdest du wählen, wenn du nur für dich selbst entscheidest – nicht als Teil der Gruppe, nicht als jemand, der Harmonie hält? Gibt es diese Stimme in dir?`,
        uebung: `Schreibe auf, was du willst – ohne Rücksicht auf andere. Nicht um es sofort umzusetzen, sondern um es zu kennen. Diese Stimme hat ein Recht, gehört zu werden.`,
        autopilotEN: `You adapt: ​​What does the group expect? What would be acceptable for everyone? Your own voice is pushed back so far that you can hardly hear it anymore.`,
        bewusstheitEN: `What would you choose if you decided only for yourself - not as part of the group, not as someone who keeps harmony? Is there that voice within you?`,
        uebungEN: `Write down what you want - without considering others. Not to implement it immediately, but to know it. This voice has a right to be heard.`
      },
      beziehungskrise: {
        autopilot: `Man passt sich an, vermittelt, übernimmt alle Perspektiven – und verliert dabei die eigene. Die Krise wird durch Vermittlung aufgelöst, statt durch Klärung. Niemand weiß, was man selbst eigentlich will.`,
        bewusstheit: `Was willst du in dieser Beziehung – wirklich du, nicht als Kompromiss, nicht als Synthese? Gibt es diese Antwort in dir?`,
        uebung: `Sag dem anderen einmal klar, was dir an dieser Beziehung wichtig ist – nicht als Forderung, sondern als eigene Wahrheit: „Mir ist wichtig, dass ..." Lass ihn antworten.`,
        autopilotEN: `You adapt, mediate, take on all perspectives - and in the process you lose your own. The crisis is resolved through mediation rather than through clarification. Nobody knows what you actually want.`,
        bewusstheitEN: `What do you want in this relationship – really you, not as a compromise, not as a synthesis? Does this answer exist within you?`,
        uebungEN: `Tell the other person clearly what is important to you about this relationship - not as a demand, but as your own truth: "It's important to me that..." Let him answer.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel führt dazu, dass man sich noch stärker anpasst: Wenn ich nur genug tue, was die anderen brauchen, wird der Zweifel kleiner. Aber er wächst, weil die eigene Stimme dabei immer leiser wird.`,
        bewusstheit: `Wessen Erwartungen versucht dein innerer Kritiker gerade zu erfüllen – und sind das wirklich deine eigenen Maßstäbe?`,
        uebung: `Frage dich heute: Was würde ich tun, wenn ich mir selbst gegenüber genauso fürsorglich wäre wie gegenüber anderen? Tue dann eine einzige Sache davon.`,
        autopilotEN: `Self-doubt leads you to adapt even more: if I just do enough of what others need, the doubt will diminish. But it grows because your own voice becomes quieter and quieter.`,
        bewusstheitEN: `Whose expectations is your inner critic currently trying to fulfill – and are they really your own standards?`,
        uebungEN: `Ask yourself today: What would I do if I were as caring toward myself as I am toward others? Then do just one thing.`
      },
      verlust: {
        autopilot: `Man trauert still in der Gruppe mit, passt den Schmerz an das Kollektiv an. Der eigene Verlust verschmilzt mit dem gemeinsamen – und die persönliche Tiefe bleibt unberührt.`,
        bewusstheit: `Was verlierst du ganz persönlich – nicht die Gruppe, nicht die Gemeinschaft, sondern du? Gibt es einen eigenen Schmerz darunter?`,
        uebung: `Schreibe heute auf, was dieser Verlust speziell für dich bedeutet – nicht für die anderen, nicht für die Gruppe. Nur deine Sicht. Nur dein Schmerz.`,
        autopilotEN: `You grieve silently in the group, adapting your pain to the collective. Your own loss merges with the shared one - and your personal depth remains untouched.`,
        bewusstheitEN: `What do you personally lose – not the group, not the community, but you? Is there a pain of its own underneath?`,
        uebungEN: `Today, write down what this loss means specifically to you – not to others, not to the group. Just your perspective. Just your pain.`
      },
      ueberforderung: {
        autopilot: `Man harmonisiert unter Druck: nickt zu, übernimmt, gibt nach – um den Frieden zu wahren. Die eigene Überforderung bleibt unsichtbar, weil Konflikte vermieden werden.`,
        bewusstheit: `Was hast du heute zugestimmt, das eigentlich zu viel war? Und was wäre ein freundliches, klares Nein gewesen?`,
        uebung: `Sag heute in einer Situation, wo es zu viel wird, ruhig und freundlich: „Das kann ich gerade nicht übernehmen." Nur diesen Satz. Kein Aber, keine Entschuldigung.`,
        autopilotEN: `You harmonize under pressure: nod, take over, give in - to keep the peace. Your own excessive demands remain invisible because conflicts are avoided.`,
        bewusstheitEN: `What did you agree to today that was actually too much? And what would have been a friendly, clear no?`,
        uebungEN: `Today, in a situation where it becomes too much, say calmly and kindly: "I can't take on that right now." Just this sentence. No buts, no excuses.`
      },
      stagnation: {
        autopilot: `Man lebt für die Harmonie der Gruppe und verliert dabei den eigenen Impuls: Wohin will ich? Was will ich? Diese Fragen bleiben im Hintergrund, weil die Gruppe Orientierung gibt.`,
        bewusstheit: `Was willst du – du selbst, ganz für dich, ohne Rücksicht auf die Gruppe? Gibt es einen eigenen Wunsch, der schon lange wartet?`,
        uebung: `Schreibe heute auf: Wenn ich allein entscheiden dürfte, ohne jemanden zu enttäuschen – was würde ich als nächstes tun? Dann überleg, ob du den ersten Schritt wagen kannst.`,
        autopilotEN: `You live for the harmony of the group and lose your own impulse: Where do I want to go? What do I want? These questions remain in the background because the group provides orientation.`,
        bewusstheitEN: `What do you want – yourself, all by yourself, without regard to the group? Is there a wish of your own that has been waiting for a long time?`,
        uebungEN: `Write down today: If I could decide on my own without disappointing anyone, what would I do next? Then think about whether you can take the first step.`
      },
    },

    "SX9": {
      erschoepfung: {
        autopilot: `Man verschmilzt mit dem Partner, mit der Umgebung, mit dem Strom des Alltags – und merkt kaum, wie erschöpft man ist. Die Grenze zwischen eigener Erschöpfung und der Energie des anderen verschwimmt.`,
        bewusstheit: `Was von dieser Erschöpfung gehört wirklich dir – und was trägst du von anderen? Kannst du das in diesem Moment unterscheiden?`,
        uebung: `Setze dich alleine, ohne Verbindung nach außen. Frage dich: Wie geht es mir – mir allein, in diesem Moment? Lass die Antwort kommen, ohne sie sofort zu teilen.`,
        autopilotEN: `You merge with your partner, with your surroundings, with the flow of everyday life - and you hardly notice how exhausted you are. The line between your own exhaustion and the energy of others becomes blurred.`,
        bewusstheitEN: `What of this exhaustion is truly yours – and what do you get from others? Can you distinguish that at this moment?`,
        uebungEN: `Sit alone, without connection to the outside world. Ask yourself: How am I - me alone - feeling at this moment? Let the answer come without sharing it right away.`
      },
      konflikt: {
        autopilot: `Im Konflikt verschmilzt man entweder mit der Energie des anderen – nimmt seine Aufgebrachtheit an, trägt sie mit – oder zieht sich in eine schwer erreichbare Stille zurück. Beides ist eine Form des Verlorenseins.`,
        bewusstheit: `Was denkst und fühlst du – du selbst – gerade in diesem Konflikt? Nicht der andere, nicht die Energie des anderen: du.`,
        uebung: `Sage einmal in aller Stille, was du in diesem Konflikt möchtest – auch wenn es dem anderen widerspricht. Nur für dich, laut: „Ich möchte ...”`,
        autopilotEN: `In conflict, you either merge with the other person's energy - accept their anger, carry it with you - or retreat into a silence that is difficult to achieve. Both are a form of being lost.`,
        bewusstheitEN: `What are you – yourself – thinking and feeling in this conflict? Not the other, not the other's energy: you.`,
        uebungEN: `Say quietly what you want in this conflict - even if it contradicts the other person. Just for you, out loud: “I want…”`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum als solche erkannt – man verschmilzt mit der Umgebung, der Stimmung, dem Alltag. Das Alleinsein läuft im Hintergrund, während man sich mit dem Außen beschäftigt. Erst in ruhigen Momenten taucht es auf.`,
        bewusstheit: `Wann hast du zuletzt wirklich für dich selbst Kontakt gesucht – nicht weil es sich ergab, nicht weil jemand anderes es wollte, sondern weil du es dir gewünscht hast?`,
        uebung: `Initiiere heute selbst eine Begegnung – nicht abwarten, bis jemand kommt. Wähle aktiv. Beobachte, wie sich das anfühlt, wenn du aus dir heraus auf jemanden zugehst.`,
        autopilotEN: `Loneliness is hardly recognized as such - you merge with your surroundings, your mood, your everyday life. Being alone runs in the background while you deal with the outside. It only appears in quiet moments.`,
        bewusstheitEN: `When was the last time you really sought contact for yourself - not because it happened, not because someone else wanted it, but because you wanted it?`,
        uebungEN: `Initiate an encounter yourself today – don’t wait for someone to come. Choose active. Observe what it feels like when you approach someone out of yourself.`
      },
      entscheidung: {
        autopilot: `Man übernimmt die Entscheidung des wichtigsten Menschen – verschmilzt mit ihr, macht sie zur eigenen. Das eigene Wollen ist so leise, dass es kaum zu hören ist, und manchmal weiß man nicht mehr, was man selbst eigentlich wollte.`,
        bewusstheit: `Welche Entscheidung triffst du hier wirklich – deine eigene, oder eine, die du von jemandem anderen übernommen hast? Gibt es einen Unterschied?`,
        uebung: `Geh allein, ohne Handy, kurz nach draußen. Frage dich: Was würde ich in dieser Sache wählen, wenn ich heute komplett alleine wäre? Schreibe das auf, bevor du wieder zurückkommst.`,
        autopilotEN: `You take on the decision of the most important person - merge with it, make it your own. Your own desire is so quiet that it can hardly be heard, and sometimes you no longer know what you actually wanted.`,
        bewusstheitEN: `What decision are you really making here – your own, or one you inherited from someone else? Is there a difference?`,
        uebungEN: `Go outside for a moment alone, without your cell phone. Ask yourself: What would I choose in this matter if I were completely alone today? Write this down before you come back.`
      },
      beziehungskrise: {
        autopilot: `Man verschmilzt mit der Stimmung des anderen, trägt seine Krise mit, verliert sich im Erleben des anderen – und merkt kaum, was man selbst braucht oder denkt. Die Beziehung kriselt, und man ist dabei und doch nicht ganz da.`,
        bewusstheit: `Was brauchst du in dieser Beziehungskrise – du selbst, getrennt vom anderen? Gibt es etwas in dir, das noch nicht gehört wurde?`,
        uebung: `Geh kurz allein nach draußen. Frage dich: Was wünsche ich mir für uns – nur von mir aus, ohne den anderen einzubeziehen? Dann komm zurück und teile es.`,
        autopilotEN: `You merge with the other's mood, carry your crisis with you, lose yourself in the other's experience - and hardly notice what you need or think yourself. The relationship is in crisis and you are there but not fully there.`,
        bewusstheitEN: `What do you need in this relationship crisis - yourself, separated from the other person? Is there something inside you that hasn't been heard yet?`,
        uebungEN: `Go outside alone for a moment. Ask yourself: What do I want for us - just for myself, without involving the other person? Then come back and share it.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel löst sich im anderen auf: Man übernimmt die Sichtweise des Partners – wenn er okay ist, bin ich okay. Wenn er zweifelt, zweifle ich auch. Die eigene Einschätzung fehlt, weil die Grenze verschwommen ist.`,
        bewusstheit: `Was denkst du – du selbst, unabhängig vom anderen – über dich in diesem Moment? Gibt es eine eigene Stimme, die das beurteilen kann?`,
        uebung: `Schreib heute drei Sätze über dich, die nur aus dir kommen – ohne Bezug zum anderen. „Ich bin jemand, der …“ Lass sie stehen als deine eigene Beschreibung.`,
        autopilotEN: `Self-doubt dissolves in the other: you adopt your partner's point of view - if he's okay, I'm okay. If he doubts, I doubt too. Your own assessment is missing because the boundaries are blurred.`,
        bewusstheitEN: `What do you - yourself, independent of the other - think about yourself in this moment? Is there a separate voice that can judge this?`,
        uebungEN: `Write three sentences about yourself today that only come from you - without reference to the other person. “I am someone who…” Leave it as your own description.`
      },
      verlust: {
        autopilot: `Verlust einer zentralen Beziehung bringt tiefe Orientierungslosigkeit: Ohne den anderen weiß man kaum, wer man ist. Man sucht Halt, schmiegt sich an das Vertraute – und die eigene Trauer bleibt diffus.`,
        bewusstheit: `Wer bist du, wenn du allein mit diesem Verlust bist – ohne den anderen, ohne eine Aufgabe? Was ist da?`,
        uebung: `Geh heute allein nach draußen, ohne Telefon. Lass die Stille kommen. Frage dich: Was fühle ich wirklich – ganz für mich, ohne Bezug zu jemand anderem?`,
        autopilotEN: `Loss of a central relationship brings deep disorientation: without the other person, you hardly know who you are. You look for support, snuggle up to what is familiar - and your own grief remains diffuse.`,
        bewusstheitEN: `Who are you when you are alone with this loss - without the other person, without a purpose? What's there?`,
        uebungEN: `Go outside alone today, without a phone. Let the silence come. Ask yourself: What do I really feel - entirely for myself, without reference to anyone else?`
      },
      ueberforderung: {
        autopilot: `Überforderung entsteht, wenn die Grenzen zum wichtigsten Menschen oder zur Umgebung fehlen. Man übernimmt alles, was kommt – und verliert den Faden zur eigenen Kapazität.`,
        bewusstheit: `Was von dem, was du gerade trägst, gehört wirklich dir – und was hast du übernommen, weil es niemand sonst trug?`,
        uebung: `Mache heute eine Liste: Meine Aufgaben – und Aufgaben, die ich übernommen habe. Dann wähle eine aus der zweiten Liste und gib sie zurück oder lass sie liegen.`,
        autopilotEN: `Overwhelm occurs when boundaries with the most important person or the environment are missing. You take on everything that comes – and lose track of your own capacity.`,
        bewusstheitEN: `What of what you're wearing right now is really yours - and what did you take over because no one else was wearing it?`,
        uebungEN: `Make a list today: My tasks – and tasks that I have taken on. Then choose one from the second list and return it or leave it alone.`
      },
      stagnation: {
        autopilot: `Stagnation entsteht, wenn die Grenzen zum anderen fehlen: Man bewegt sich im Rhythmus des Partners, ohne eigene Richtung zu haben. Die innere Leere bleibt diffus und unbenannt.`,
        bewusstheit: `Was willst du – unabhängig vom anderen? Gibt es eine eigene Richtung in dir, die du schon lange nicht gehört hast?`,
        uebung: `Schreibe heute drei Sätze, die mit „Ich will …" beginnen – ganz für dich, ohne den anderen einzubeziehen. Lass sie stehen. Das ist deine Richtung.`,
        autopilotEN: `Stagnation occurs when there are no boundaries with the other person: you move to your partner's rhythm without having your own direction. The inner emptiness remains diffuse and unnamed.`,
        bewusstheitEN: `What do you want – regardless of the other person? Is there a direction within you that you haven't heard in a long time?`,
        uebungEN: `Today write three sentences that begin with “I want…” – just for you, without involving the other person. Leave them alone. This is your direction.`
      },
    },

  }
};
