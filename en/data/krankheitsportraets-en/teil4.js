import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function cgJungKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-cg-jung-portrait.jpg" alt="Carl Gustav Jung" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Carl Gustav Jung</p>
        <p class="krim-portrait-typ">SO5w6 · Social Type 5 with a Six-Wing · 1875–1961</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Carl Gustav Jung</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-cg-jung">portrait under Famous Personalities</a>
        in this compass – that page covers his scientific body of work and analytical
        psychology. This page focuses on what is only touched there: the severe 1944 heart
        attack with its extensively documented near-death experience, which shaped his entire
        late work.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Jung</strong> is assigned to the <strong>social Type 5 with a six-wing</strong>.
        The SO5 typically processes existential experiences by immediately translating them
        into a communicable, teachable system – in Jung this showed exactly that way: a
        life-threatening embolism and heart attack did not remain a private crisis alone but,
        within a few years, became the conceptual foundation of his entire late work, which he
        in turn passed on to his students through lectures and writings.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Early signs</h3>
        <p class="vb-intro"><strong>a) A fall on ice in February 1944:</strong>
        On February 11, 1944, the 68-year-old Jung slipped on ice and broke his fibula – an
        initially harmless-seeming accident that confined him to a hospital bed.</p>
        <p class="vb-intro"><strong>b) An embolism from the immobilized leg:</strong>
        About ten days later, still in the hospital, immobilization of the broken leg
        dislodged a blood clot that triggered an embolism and, subsequently, a severe heart
        attack.</p>
        <p class="vb-intro"><strong>c) A state near death:</strong>
        Jung entered a critical, life-threatening condition from which, by his own later
        account, he returned only through the determined intervention of his treating
        physician.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General characteristics</h3>
        <p class="vb-intro"><strong>a) An extensively documented vision:</strong>
        During the critical state Jung experienced a series of intense visions, later recorded
        by him in meticulous detail – among them the sensation of floating a thousand miles
        above the earth and seeing oceans, continents, and the Himalayas in bluish light.</p>
        <p class="vb-intro"><strong>b) A stone temple as threshold:</strong>
        In the vision Jung approached a stone temple on a meteorite, where he was to learn the
        actual meaning of his life – until the spirit of his treating physician called him back
        to earthly life.</p>
        <p class="vb-intro"><strong>c) Reluctance to return:</strong>
        Jung explicitly described a reluctance to return to life – and a deep shock at the
        thought, as he interpreted it, that his doctor had sacrificed his own life for Jung's
        rescue.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential traits</h3>
        <p class="vb-intro"><strong>a) Immediate written processing during recovery:</strong>
        Still during his months-long convalescence, Jung began systematically recording his
        experiences in letters and notes – not silent private processing, but the beginning of
        a communicable interpretation.</p>
        <p class="vb-intro"><strong>b) An explicit reassessment of his own destiny:</strong>
        Jung later wrote that only after this illness did he understand how important it is to
        understand one's own destiny – a statement that placed the experience directly into his
        theory of individuation.</p>
        <p class="vb-intro"><strong>c) Seventeen more scientifically intense years:</strong>
        Jung did not die until 1961, seventeen years after the heart attack, and used that time
        for some of his most extensive late works, including <em>Mysterium Coniunctionis</em> –
        not a period of withdrawal, but one of intensified systematic work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall impact</h3>
        <p class="vb-intro"><strong>a) The near-death experience as a widely cited reference case:</strong>
        Jung's account remains one of the most detailed early descriptions of a near-death
        experience from a scientific background and is regularly cited in the relevant
        literature to this day.</p>
        <p class="vb-intro"><strong>b) Stronger influence of mysticism and alchemy in his late work:</strong>
        After 1944 the focus of his work shifted visibly further toward alchemy, the history of
        religion, and the question of what outlasts death – a thematic break that can be traced
        directly to the crisis.</p>
        <p class="vb-intro"><strong>c) A still-disputed question of interpretation:</strong>
        Whether Jung's visions should be understood as a neurological phenomenon of a severely
        compromised brain or as a genuine transcendent experience remains disputed among
        physicians, neuroscientists, and Jungians to this day.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic effect</h3>
        <p class="vb-intro"><strong>a) The six-wing as a search for a reliable interpretation:</strong>
        Rather than leaving the experience as an open mystery, Jung quickly fit it into a fixed
        interpretive system – typical of the six-wing, which seeks to banish uncertainty
        through structure and explanation.</p>
        <p class="vb-intro"><strong>b) The octopus that shares even its own brush with mortality:</strong>
        Jung did not keep his visions secret but described them extensively in letters and
        later publicly in his autobiography – knowledge of his own brush with mortality became,
        like his expertise before it, a contribution to a larger community.</p>
        <p class="vb-intro"><strong>c) A return to intensified, not reduced, system-building:</strong>
        Rather than withdrawing after the crisis, Jung deepened his already encyclopedic work
        even further – the social Five seeks security by expanding its own knowledge system,
        especially after an existential shock.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The illness as a common thread</h3>
        <p class="vb-intro"><strong>a) A single, sharply datable event with decades of aftereffects:</strong>
        Unlike many other illness portraits in this compass, Jung's case is not a suffering
        concealed for years but a single, precisely datable event whose intellectual processing
        extended across his remaining seventeen years of life.</p>
        <p class="vb-intro"><strong>b) From physical near-death to theoretical system-building:</strong>
        As with his word association test decades earlier, Jung turned an initially purely
        physical, uncontrollable experience into an ordered, transmissible interpretive system
        – the same underlying pattern, only this time triggered by his own mortality instead of
        a laboratory experiment.</p>
        <p class="vb-intro"><strong>c) Why, of all things, a near-death experience of this magnitude?</strong>
        For a social Five with a six-wing, whose security rests on a reliable, well-thought-out
        system, an experience that radically challenges every prior system can be read as a
        particularly existential challenge: Jung met it not with withdrawal but with the SO5's
        typical reflex of turning the most incomprehensible experience into a new, communicable
        body of knowledge. This reading is developed further in this compass's psychosomatics
        register.</p>
        <p class="vb-intro"><strong>d) A pattern, not a determinism:</strong>
        This does not mean the social Five with a six-wing pattern inevitably leads to an
        embolism or a heart attack – <strong>anyone can get any illness, regardless of
        subtype.</strong> Jung's heart attack is closely tied to a classic, purely physical risk
        factor – immobilization after a bone fracture – not purely psychosomatic causes. What
        his case can show is a pattern in how a pronounced social Five with a six-wing deals
        with an existential crisis – one of many possible readings, not a verdict. The
        corresponding illness pattern is being developed further, case by case, in this
        compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics
        register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Unlike most people of his time, Jung actually possessed a psychological model of his
        own behavior – but the Enneagram itself was unknown to him. Without that specific
        knowledge, he had no way of seeing that his immediate need to translate the near-death
        experience into a fixed system was itself a type-bound pattern, not merely a neutral
        scientific reaction. Those who recognize their own pattern can consciously choose when
        interpretation helps and when it is premature; those who don't interpret automatically,
        the way Jung did.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Five with a six-wing shows itself in <strong>Carl Gustav Jung</strong> in
        one last, great turn: an experience that nearly cost him his life and pushed every prior
        knowledge system to its limits became, not the occasion for withdrawal, but the
        foundation of his most productive creative period. The octopus who turned even his own
        near-death into knowledge he shared with others.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-cg-jung", label:"Portrait: Carl Gustav Jung (SO5w6) – life's work"},
        {route:"krankheitsportraets-stephen-hawking", label:"Illness Portrait: Stephen Hawking (SO5w6) – same subtype"},
        {route:"krankheitsportraets-isaac-newton", label:"Illness Portrait: Isaac Newton (SO5w6) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function alexanderDerGrosseKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alexander-der-grosse-portrait.jpg" alt="Alexander the Great" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alexander the Great</p>
        <p class="krim-portrait-typ">SO2w3 · Social Type 2 with a Three-Wing · 356–323 BC</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alexander the Great</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-alexander-der-grosse">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as general and empire-builder and his
        type structure in general. This page delves into a chapter only mentioned in passing there: a
        sudden, still-unresolved illness that killed him within days in Babylon in June 323
        BC – after a decade in which his body never truly found rest.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Alexander</strong> is classified as the <strong>Social Type 2 with
        Three-wing</strong>. Naranjo called this subtype <em>ambition</em>: boundless devotion
        to a great cause, joined with the need to be indispensable. The Three-wing adds a
        refusal to ever be stopped by weakness – including physical weakness. This same refusal
        can be traced right into his final, headlong illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A body that never truly rested for eleven years:</strong>
        From 334 to 323 BC, Alexander was on unbroken campaign – through deserts, over
        mountains, wounded seriously more than once, including an arrow that pierced his lung
        during the siege of Multan.</p>
        <p class="vb-intro"><strong>b) Excessive alcohol consumption, especially after 324 BC:</strong>
        Ancient sources consistently report extended drinking bouts that intensified after the
        death of his closest companion, Hephaestion.</p>
        <p class="vb-intro"><strong>c) Growing exhaustion in the spring of 323 BC:</strong>
        After his return to Babylon, accounts of feverish episodes and declining strength
        multiplied according to tradition – barely noticed amid preparations for a new campaign
        against Arabia.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A drinking bout shortly before the collapse:</strong>
        On the night of 2 June 323 BC, Alexander took part in an extended drinking party in
        honor of his friend Nearchus – afterward he complained of stabbing pain.</p>
        <p class="vb-intro"><strong>b) A fever that would not break:</strong>
        Over the following days his fever rose steadily, while he continued trying to fulfill
        his daily military and administrative duties.</p>
        <p class="vb-intro"><strong>c) Progressive decline to the point of speechlessness:</strong>
        According to the transmitted royal diaries (Ephemerides), in his final days he could no
        longer speak, but still received his officers in silence, one by one, at his deathbed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Ten to twelve days from onset to death:</strong>
        Only about ten to twelve days passed from his first symptoms to his death – a rapid
        decline for a man who had seemed nearly invincible for a decade.</p>
        <p class="vb-intro"><strong>b) The soldiers wanted to see him once more:</strong>
        According to tradition, although he could barely speak, Alexander had his soldiers
        file past his bed one by one, so he could give each of them one last sign.</p>
        <p class="vb-intro"><strong>c) Death on 10 or 11 June 323 BC in Babylon:</strong>
        Alexander died at only 32 years old, without naming a clear, undisputed adult
        successor.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">An SO2w3 Parallel: Julius Caesar</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Among this Compass's <a href="javascript:void(0)" data-route="krankheitsportraets-julius-caesar">Illness Portraits</a>,
        <a href="javascript:void(0)" data-route="beruehmte-julius-caesar">Julius Caesar (SO2w3)</a>
        presents a strikingly similar case: Caesar too suffered – according to consistent
        ancient sources, likely from epilepsy – and concealed this weakness for life rather than
        acknowledge it publicly. Both men show the same Three-wing reflex: weakness, even one's
        own physical weakness, must not damage the carefully built image of invincibility.
        Alexander went a step further than Caesar – he did not merely ignore warning signs, but
        actively drove his body past every reasonable limit, until no concealment was needed
        anymore because the collapse itself became public.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) An empire without an heir:</strong>
        His death without a clear line of succession plunged the entire empire he had conquered
        into decades of wars among his generals, the so-called Wars of the Diadochi.</p>
        <p class="vb-intro"><strong>b) Centuries of speculation over the cause of death:</strong>
        From malaria to typhoid fever to poisoning by close confidants – to this day there is no
        confirmed diagnosis, only competing theories.</p>
        <p class="vb-intro"><strong>c) A myth that outshone the sick body:</strong>
        In posterity, the illness itself receded almost entirely behind the myth of the
        invincible conqueror.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The Golden Retriever that sought closeness until the very end:</strong>
        Even speechless and near death, he still received every single soldier – the same
        search for connection that carried his whole life remained intact until his last
        breath.</p>
        <p class="vb-intro"><strong>b) A body that could no longer sustain limitlessness:</strong>
        Eleven years without real rest, several serious war wounds, and excessive alcohol
        consumption converged on a single point.</p>
        <p class="vb-intro"><strong>c) No retreat, but continued planning until collapse:</strong>
        Even as the first fevers weakened him, he was working on preparations for the next
        campaign – standing still was simply not an option for him.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) The belief that one must be invincible:</strong>
        The Two's passion, <strong>pride</strong>, showed in Alexander as a refusal to ever
        pause – eleven years of campaigning without any real recovery, wounded seriously more
        than once, again and again at the front line.</p>
        <p class="vb-intro"><strong>b) The loss of Hephaestion as a turning point:</strong>
        After his closest companion's death in 324 BC, Alexander slid into his stress point at
        Eight – more unforgiving, harder, with excessive drinking as an expression of his grief.
        It was precisely in this phase that the pattern began to compound, one that would lead,
        just months later, to his physical collapse.</p>
        <p class="vb-intro"><strong>c) One last drinking bout as a possible trigger:</strong>
        Ancient sources see in the drinking party in honor of Nearchus, shortly before his
        death, a possible trigger or at least an aggravating factor in his illness – whether
        alcohol poisoning, an infection it favored, or pure coincidence remains unresolved to
        this day.</p>
        <p class="vb-intro"><strong>d) Why a sudden, mysterious collapse, of all things?</strong>
        For a Social Two with Three-wing whose entire self-image rested on invincibility and
        boundless devotion to his mission, one interpretation suggests itself: a body that never
        knew "enough" collapsed without its owner ever having said "enough" himself. This
        interpretation is a plausible reading, not a documented historical causal link, and is
        developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Social Two pattern inevitably leads to a sudden collapse –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Alexander's case illustrates is a pattern in the environment surrounding an illness that
        keeps recurring in practice among people with a pronounced Social Two and Three-wing –
        one of many possible interpretations, not a judgment. The corresponding illness pattern
        is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Alexander lived more than two thousand years before the Enneagram emerged as a modern
        personality model – he did not consciously know his own pattern. His refusal to ever
        accept a limit – neither that of his own body, nor, earlier, the geographic one at the
        Hyphasis River that his own soldiers forced upon him – was never recognized as a
        recurring behavioral pattern, simply lived as the nature of a "born conqueror." Someone
        who does not know their own limitlessness as a pattern cannot rein it in in time, even
        when their own body has long since reached its limits.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Alexander's</strong> Social Two with Three-wing is legible once more in the
        course of his illness: a body that accepted no limit for eleven years, and a collapse
        that remained as sudden and mysterious as his life had been limitless. The Golden
        Retriever that sought connection until the last second – and whose own body was, in the
        end, the only limit he never set for himself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-alexander-der-grosse", label:"Portrait: Alexander the Great (SO2w3) – life's work"},
        {route:"krankheitsportraets-julius-caesar", label:"Illness Portrait: Julius Caesar (SO2w3) – concealed epilepsy"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function billieEilishKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-billie-eilish-portrait.jpg" alt="Billie Eilish" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Billie Eilish</p>
        <p class="krim-portrait-typ">SX4w3 · Sexual Type 4 with Three-Wing · b. 2001</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Billie Eilish</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-billie-eilish">Famous
        Personalities portrait</a>. This page delves into a chapter only briefly mentioned
        there: Tourette syndrome, which she kept from the public for years before confirming
        it herself in 2018, as well as a severe depressive period with self-harm during her
        teenage years.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Eilish</strong> is assigned to the <strong>sexual Type 4 with Three-Wing</strong>.
        The SX4 carries pain raw and unfiltered outward; the Three-Wing simultaneously gives
        her a sense of how much of that can be shown publicly without jeopardizing her own
        impact. Exactly this combination – uncompromising honesty in her music, combined with
        strategic restraint on certain health topics – shaped how she dealt with her own
        Tourette syndrome and depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Tics already in childhood:</strong>
        By her own account, Eilish first noticed tics as a child, long before a diagnosis was
        made or the topic became publicly known.</p>
        <p class="vb-intro"><strong>b) Diagnosis of Tourette syndrome:</strong>
        Eilish was diagnosed with Tourette syndrome, a neurological disorder characterized
        by involuntary movements and vocalizations.</p>
        <p class="vb-intro"><strong>c) Onset of a depressive period in early adolescence:</strong>
        In parallel, she later described in the documentary "The World's a Little Blurry"
        (2021) a severe depressive episode that began around age twelve.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Years of deliberately keeping the Tourette syndrome secret:</strong>
        Eilish kept the diagnosis from the public for years, out of concern about being
        reduced to the condition or constantly asked about it in interviews.</p>
        <p class="vb-intro"><strong>b) Self-harming behavior as part of the depressive period:</strong>
        In the same documentary, she spoke openly about self-harming behavior during this
        time as well as ongoing suicidal thoughts.</p>
        <p class="vb-intro"><strong>c) Body-image strain from public attention:</strong>
        By her own account, the public attention that began at age fourteen intensified an
        already strained relationship with her own body.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Public confirmation of Tourette syndrome in 2018:</strong>
        Eilish first publicly confirmed the diagnosis in a 2018 interview, after fans had
        discussed video footage of her tics online.</p>
        <p class="vb-intro"><strong>b) Open engagement with misconceptions:</strong>
        Since then she has repeatedly explained in interviews how Tourette manifests for
        her, publicly correcting common misconceptions about the condition.</p>
        <p class="vb-intro"><strong>c) Extensive documentation of the depressive period:</strong>
        The 2021 documentary follows Eilish over several years and includes unedited footage
        from the time of her most severe depressive episode.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide attention for a little-known condition:</strong>
        Eilish's openness about Tourette contributed internationally to reducing
        misconceptions about the condition, since she is one of the best-known public
        figures with this diagnosis.</p>
        <p class="vb-intro"><strong>b) Positive response to the documentary:</strong>
        The unflinching openness of the documentary about depression and self-harm was
        praised by critics and young fans alike as exceptionally honest.</p>
        <p class="vb-intro"><strong>c) Continued artistic processing:</strong>
        Themes like body image, mental health, and the pressure of public attention remained
        central motifs of her later albums, without the conditions themselves becoming a
        marketing topic.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Unfiltered honesty in music, restraint about the Tourette syndrome:</strong>
        The SX4's characteristic uncompromising nature showed without limit in Eilish's
        lyrics – with the Tourette syndrome, however, she consciously chose restraint for
        years, out of concern about being reduced to the diagnosis.</p>
        <p class="vb-intro"><strong>b) The Three-Wing and the controlled public disclosure:</strong>
        When Eilish finally addressed the Tourette diagnosis, it did not happen spontaneously
        but within a controlled interview setting – the same strategic precision with which
        the Three-Wing also shaped her musical career.</p>
        <p class="vb-intro"><strong>c) The documentary as a form of controlled vulnerability:</strong>
        That the deepest disclosure of her own depressive period happened in a carefully
        produced documentary rather than a spontaneous interview fits the SX4w3 dynamic: raw
        honesty, but given an effective form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A voice of uncompromising honesty who kept a diagnosis secret for years:</strong>
        Eilish's entire body of work rests on the refusal to sugarcoat anything – of all
        things, Tourette syndrome remained the one exception to this principle for years,
        until she herself decided when and how it would become public.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-freddie-mercury">Freddie
        Mercury (SX4w3)</a>: Mercury too concealed a health diagnosis from the public for
        years, before finally confirming it at a moment of his own choosing. Both SX4w3s show
        the same pattern: control over the timing of one's own disclosure becomes the last
        remaining form of self-determination in the face of a diagnosis one did not choose.</p>
        <p class="vb-intro"><strong>c) Why involuntary movements, of all things, for an artist of precise control?</strong>
        For a sexual Four with a Three-Wing whose entire work rests on precise control over
        image, sound, and performance, one interpretation suggests itself: of all things, a
        neurological disorder manifesting as uncontrollable movements and sounds affected an
        artist whose public image lives on perfectly orchestrated self-presentation. This
        reading is a plausible interpretation, not a proven clinical causal link, and will be
        developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the sexual Four's pattern inevitably leads to Tourette
        syndrome or depression – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Eilish's case is a pattern in dealing with an
        unchosen health diagnosis that keeps recurring in a pronounced sexual Four with a
        Three-Wing – one of many possible readings, not a verdict. The corresponding illness
        pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Eilish does not know her own pattern as an Enneagram structure – the sexual Four with
        a Three-Wing reflexively clings to control over when and how her own inner life is
        shown, even if that means carrying a burdensome diagnosis alone for years, and
        largely lives out exactly this pattern unchanged to this day. Anyone who does not
        recognize their own tendency to strictly time and stage openness as a pattern risks
        that exactly the topics needing support most urgently stay hidden the longest.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Type 4 with Three-Wing explains much about how <strong>Billie
        Eilish</strong> dealt with Tourette syndrome and depression: an artist whose entire
        work rests on uncompromising honesty consciously decided for herself when that
        honesty about her own health diagnoses would begin – the chihuahua who does not need
        to get louder to be heard, only as honest as she can allow herself to be.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-billie-eilish", label:"Portrait: Billie Eilish (SX4w3)"},
        {route:"krankheitsportraets-freddie-mercury", label:"Illness Portrait: Freddie Mercury (SX4w3) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function claudeDebussyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-claude-debussy-portrait.jpg" alt="Claude Debussy" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Claude Debussy</p>
        <p class="krim-portrait-typ">SX4w5 · Sexual Type 4 with Five-wing · 1862–1918</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Claude Debussy</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-claude-debussy">portrait under Famous Personalities</a>
        in this Compass – that page covers his compositional life's work and type structure.
        This page delves into a chapter that page does not address: a colorectal cancer
        diagnosis in 1909, an almost nine-year, increasingly painful course of illness during
        the First World War, and a death amid the German shelling of Paris.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Debussy</strong> is classified as the <strong>Sexual Four with Five-wing</strong>.
        Naranjo called this subtype <em>Rivalry</em>: the burning conviction that the
        established order withholds something essential, coupled with the drive to stand
        against it. The Five-wing adds the ability to immerse itself in work and structure
        until no strength remains – a pattern that can be traced right into Debussy's handling
        of his own fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First symptoms already in 1908:</strong>
        From 1908 onward, Debussy increasingly complained of digestive complaints and
        bleeding – symptoms he initially dismissed as temporary while continuing to compose
        and conduct.</p>
        <p class="vb-intro"><strong>b) Diagnosis in 1909:</strong>
        In 1909, Debussy was diagnosed with colorectal cancer. He kept the diagnosis largely
        private and continued his compositional work as well as public appearances as a
        conductor and pianist.</p>
        <p class="vb-intro"><strong>c) Continuing to work despite early treatments:</strong>
        Even in the first years after the diagnosis, Debussy repeatedly underwent painful
        treatments without fundamentally curtailing his concert activity and compositional
        work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Radium treatments from 1915:</strong>
        From 1915 onward, Debussy underwent several radium treatments against the progressing
        cancer – at the time a novel, extremely painful form of therapy with uncertain
        success.</p>
        <p class="vb-intro"><strong>b) An operation in December 1915:</strong>
        In December 1915, Debussy underwent one of the first colostomy operations performed in
        France – a procedure that severely weakened him physically but did not break his
        compositional ambition.</p>
        <p class="vb-intro"><strong>c) Composing despite worsening health:</strong>
        In the years following the operation, Debussy continued to compose, including his
        final major chamber works – created during phases of increasing pain and exhaustion.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) A final public appearance under wartime conditions:</strong>
        In September 1917, already severely marked by illness, Debussy gave one of his last
        concerts in Paris – while the city stood under bombardment by the German army.</p>
        <p class="vb-intro"><strong>b) Rapid decline in early 1918:</strong>
        In the first months of 1918, Debussy's condition deteriorated dramatically. He was
        increasingly bedridden while the so-called Paris Gun shelled the city from almost 130
        kilometers away.</p>
        <p class="vb-intro"><strong>c) Death on 25 March 1918:</strong>
        Debussy died in his Paris apartment at age 55, while the city lay under German
        artillery fire. Due to wartime conditions, his funeral was small – a quiet farewell
        amid the noise of war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Almost nine years between diagnosis and death:</strong>
        From his 1909 diagnosis to his death in 1918, Debussy lived almost nine years with a
        progressing, increasingly painful illness, without fully abandoning his compositional
        work.</p>
        <p class="vb-intro"><strong>b) A late work marked by loss and pain:</strong>
        Debussy's final compositions – written during the worst years of the war and the
        progressing illness – carry a clarity and restraint that many music historians read as
        a deliberate retreat to the essential.</p>
        <p class="vb-intro"><strong>c) Illness and war as a parallel recurring thread:</strong>
        Debussy's final years ran parallel to the First World War – his personal illness and
        the collapse of the European order he had questioned his entire life ended almost at
        the same moment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Rivalry, directed against his own mortality:</strong>
        Just as Debussy fought the established music world his entire life, he also fought his
        progressing illness – not through denial, but through continued, uncompromising
        creative work.</p>
        <p class="vb-intro"><strong>b) The Five-wing as a refuge within illness:</strong>
        The sicker Debussy became, the more he withdrew into his own compositional work – the
        same immersion in structure and sound that had marked him as a young composer now
        became the place where the pain disappeared for hours at a time.</p>
        <p class="vb-intro"><strong>c) A final concert as an act of defiance:</strong>
        His 1917 appearance under wartime conditions, severely ill, shows the same stance that
        ran through his entire body of work: refusing to let outer circumstances – whether
        critics or cannons – dictate his own music.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Nine years between diagnosis and death:</strong>
        From 1909 to 1918, Debussy lived with an illness he never placed at the center of his
        public life, but instead effectively wrote over through continued compositional work.</p>
        <p class="vb-intro"><strong>b) Confrontation instead of withdrawal from public life:</strong>
        Unlike Karl Lagerfeld (SO3w4) or Michael Jackson (SO4w3), who hid their illness behind
        a flawless facade, Debussy withdrew physically but continued giving public concerts to
        the very end – a distinct way of handling his own mortality, somewhere between
        confrontation and retreat.</p>
        <p class="vb-intro"><strong>c) A death that coincided with the collapse of an era:</strong>
        That Debussy died precisely during the shelling of Paris reinforces the impression of
        a life in which private and historical crises intertwined right up to the end.</p>
        <p class="vb-intro"><strong>d) Why the intestine, of all things?</strong>
        For a Sexual Four whose entire body of work consisted of digesting and transforming
        pain into art, one interpretation suggests itself: the organ that quite literally
        digests, of all things, became the stage for a battle Debussy never fought publicly,
        but instead distilled into his music. This interpretation is a plausible reading, not
        a documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Sexual Four pattern inevitably leads to colorectal cancer –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Debussy's case illustrates is a pattern in the handling of one's own illness that keeps
        recurring in practice among people with a pronounced Sexual Four with Five-wing – one
        of many possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Debussy did not know his own pattern – the Sexual Four reflexively transforms pain
        into work rather than rest, and that is exactly what kept him composing, conducting,
        and performing even in the face of a fatal diagnosis, rather than taking time for his
        own recovery. Someone who does not recognize their own pattern of turning pain
        immediately into expression may miss the moment when pausing would have been the wiser
        response.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Debussy's</strong> Sexual Four with Five-wing is legible once more in the
        course of his illness: an almost nine-year illness he never made the public center of
        his life, a final concert under cannon fire, and a death that coincided with the
        collapse of an entire era. The Chihuahua that taught music to hover, even as his own
        body could no longer carry him.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-claude-debussy", label:"Portrait: Claude Debussy (SX4w5) – life's work"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – counter-model: concealment instead of performing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function elizabethBarrettBrowningKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elizabeth-barrett-browning-portrait.jpg" alt="Elizabeth Barrett Browning" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elizabeth Barrett Browning</p>
        <p class="krim-portrait-typ">SX9w8 · Sexual Type 9 with Eight-wing · 1806–1861</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Sloth</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Animal correspondence: Sloth" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elizabeth Barrett Browning</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-elizabeth-barrett-browning">portrait under Famous Personalities</a>
        in this Compass – that page covers her poetic life's work and the flight to Italy. This
        portrait is devoted to a chapter only alluded to there: a decades-long, never definitively
        diagnosed chronic illness, coupled with a lifelong opium dependency – and what it means
        for a Sexual Nine to fight, quite literally, against her own unconsciousness.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Barrett Browning</strong> is classified as the <strong>Sexual Nine with
        Eight-wing</strong>. Naranjo called the Sexual Nine <em>Fusion</em>: the longing to
        dissolve completely into a single counterpart. The Eight-wing gives that fusion a force
        that, if necessary, asserts itself with fight rather than mere accommodation. Exactly this
        interplay – decades of chemically deepened unconsciousness toward her own life,
        interrupted by a single, radically wide-awake act of self-assertion – shaped Barrett
        Browning's entire course of illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First chronic complaints in her teens:</strong>
        From around the age of fifteen, Elizabeth Barrett suffered from persistent pain, likely
        connected to a spinal injury – possibly the result of a riding accident – whose exact
        nature remains medically unresolved to this day.</p>
        <p class="vb-intro"><strong>b) Early prescription of opium:</strong>
        Already as a young woman, doctors prescribed her laudanum (opium tincture) for the pain –
        a common but highly addictive remedy at the time, which would accompany her for the rest
        of her life.</p>
        <p class="vb-intro"><strong>c) Worsening through a lung condition:</strong>
        Alongside her back pain, a chronic lung weakness developed, prompting her family in 1838
        to send her to recover in the milder climate of Torquay on the English south coast.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A diagnosis that cannot be reconstructed with certainty today:</strong>
        Medical historians discuss possible causes ranging from a spinal condition to an early
        form of tuberculosis to a functional illness intensified by chronic pain and family
        confinement – no definitive modern diagnosis can be recovered from the historical
        sources.</p>
        <p class="vb-intro"><strong>b) A decades-long opium dependency as an illness in its own right:</strong>
        Unlike most Illness Portraits in this Compass, a second, self-generated ailment joined the
        original physical condition: the ongoing medicinal use of opium led to a physical
        dependency that shaped her life for decades.</p>
        <p class="vb-intro"><strong>c) A trauma that deepened the illness:</strong>
        In 1840, her beloved brother Edward drowned in a sailing accident off Torquay – weeks
        after he had stayed by her side against their father's wishes to care for her. Elizabeth
        held herself partly responsible for his death and withdrew even further from life for
        years afterward.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) More than twenty years spent almost entirely in her own room:</strong>
        After her brother's death, her isolation in her father's house on London's Wimpole Street
        deepened considerably – contemporaries described her as a woman who scarcely left her bed
        and received visitors almost exclusively lying down.</p>
        <p class="vb-intro"><strong>b) A life increasingly lived in a half-sleep:</strong>
        The daily dose of opium dulled not only pain but also wakefulness – in her letters,
        Barrett herself described periods of hazy fatigue that cut her off from her surroundings,
        long before anyone would have used the word dependency for it.</p>
        <p class="vb-intro"><strong>c) And in the middle of it all: unbroken literary productivity:</strong>
        It was precisely out of this state that some of her best-known works emerged – a finding
        that still occupies doctors and biographers today, given how much mental clarity remained
        alongside the physical and chemical weakness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) The 1846 flight as a physical turning point:</strong>
        After the secret marriage and the move to Italy, Barrett Browning's health improved
        noticeably – a warmer climate, a self-determined life, and distance from her father's
        house had a measurably positive effect, even though her opium use continued.</p>
        <p class="vb-intro"><strong>b) Four miscarriages and one surviving child:</strong>
        In Italy she suffered several miscarriages before her son Robert Wiedeman Barrett Browning
        (called "Pen") was born healthy in 1849 – a medically remarkable event given her health
        at the time.</p>
        <p class="vb-intro"><strong>c) A final decade between creative power and decline:</strong>
        The 1850s brought both her most politically engaged work and a renewed, gradual physical
        decline that accelerated markedly in her final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Eight-wing that acted from within the fog:</strong>
        The decision to flee in 1846 was made by a woman who had lived for years in a state of
        chemically dulled consciousness – and who was nonetheless capable of carrying out a
        high-risk, months-long secret plan down to the last detail. That is the signature of the
        Eight-wing: strength that remains capable of action even through a fog.</p>
        <p class="vb-intro"><strong>b) Fusion that turned against her own unconsciousness:</strong>
        The Sexual Nine seeks fusion – for Barrett Browning, this took the form for over twenty
        years mainly of fusion with her own passivity, her sickroom, her sedation. The bond with
        Robert Browning was the first fusion that pulled her out of this unconsciousness instead
        of drawing her further into it.</p>
        <p class="vb-intro"><strong>c) A wakefulness that appeared only in the most extreme moments:</strong>
        What stands out is how punctual her strength was – not a sustained rebellion against her
        situation, but a single, highly concentrated outbreak when everything truly was at stake.
        In between, the familiar dulling remained in place.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness that became literal unconsciousness:</strong>
        The Sexual Nine carries as its shadow side the danger of adapting and merging so
        completely that wakefulness toward one's own life is lost – in hardly any other portrait
        in this Compass does this pattern become as concretely physical as in a woman whose daily
        opium dose chemically reinforced exactly this unconsciousness for decades.</p>
        <p class="vb-intro"><strong>b) The Eight-wing as the part that woke up:</strong>
        Had Elizabeth Barrett been a Sexual Nine without a strongly developed Eight-wing, this
        decades-long dulling would likely have continued to the end. Instead, exactly at the
        moment when the one bond that mattered was threatened, a resolve broke through strong
        enough to cut through her own fog and carry out an escape plan down to the last detail.
        The illness all but challenged the Eight-wing to show itself.</p>
        <p class="vb-intro"><strong>c) Why opium, of all things?</strong>
        For a Sexual Nine whose deepest pattern is fusion with the other to the point of
        dissolving her own boundaries, one interpretation suggests itself: opium chemically
        produces exactly the state of dissolved boundaries and dulled wakefulness that the Sexual
        Nine already pursues psychologically – a substance that does not counteract the underlying
        pattern but amplifies it. This interpretation is explored further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) The stress-point remedy, given to a Nine:</strong>
        From the perspective of Enneagram homeopathy as used in this Compass, opium (poppy) is
        the homeopathic remedy for Type 6 – the Nine's stress point. A homeopathic stress-point
        remedy is never neutral for another type: it reinforces exactly the pattern a person
        slides into under strain in the first place – for the Nine, that is passivity,
        drowsiness, unconsciousness toward one's own life. For decades, medically justified as a
        painkiller, Barrett Browning received precisely the remedy that did not resolve her own
        emergency pattern but chemically deepened it – from an Enneagram-homeopathic perspective a
        strikingly unfortunate choice, even though the medicine of her time naturally had no way
        of knowing this correspondence.</p>
        <p class="vb-intro"><strong>e) A classification without determinism:</strong>
        This does not mean that the Sexual Nine pattern inevitably leads to dependency disorders –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What Barrett
        Browning's case illustrates is a pattern that recurs in practice with deep fusion
        tendencies – one of many possible explanations, not a verdict. The corresponding illness
        picture is being developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Barrett Browning did not know her own pattern – the sexual Nine with Eight-wing merges easily with another's will rather than following her own path, and that is exactly what kept her trapped for over twenty years in the isolation of her father's house and in opium dependence. Only the one intense bond that finally tore her out of that house broke a pattern she herself had never been aware of.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Barrett Browning's</strong> medical history, the Sexual Nine with Eight-wing
        can be read in a particularly sharp form: decades of deepened, even chemically produced
        unconsciousness toward her own life – and a single, radically wide-awake act that broke
        through exactly this dulling when the one bond that mattered was at stake. The sloth that
        hangs in a half-sleep most of the time – and, in the one moment that counts, grips with
        all its strength.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-elizabeth-barrett-browning", label:"Portrait: Elizabeth Barrett Browning (SX9w8) – Life's Work"},
        {route:"beruehmte-lucy-cooke", label:"Portrait: Lucy Cooke (SX9w8)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx9", label:"Subtype Profile SX9"},
      ])}
    </div>
  `);
}

export function franzKafkaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-kafka-portrait.jpg" alt="Franz Kafka" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Kafka</p>
        <p class="krim-portrait-typ">SE5w4 · Self-Preservation Type 5 with Four-wing · 1883–1924</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Owl</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Animal correspondence: Owl" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Kafka</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-franz-kafka">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only briefly mentioned there: from 1917
        onward, Kafka suffered from tuberculosis. In his final months the illness spread to
        his larynx, making speech so unbearably painful that he could communicate with those
        around him only through handwritten notes.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kafka</strong> is classified as the <strong>Self-Preservation Five with
        Four-wing</strong>. Naranjo called the Self-Preservation Five the <em>Castle</em>: her
        own territory becomes a fortress that limits the world's access as much as possible.
        The Four-wing adds a sense for what is unique in one's own inner experience – including
        one's own suffering, which Kafka never read merely as a medical fact but always also as
        an expression of his inner rupture.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Turned inward, unsparingly precise:</strong>
        Kafka's gaze on his own illness was the same as on his literary characters – mercilessly
        precise, without sparing himself or softening his own situation.</p>
        <p class="vb-intro"><strong>b) Illness as confirmation of a suspicion:</strong>
        In letters, Kafka read the tuberculosis diagnosis almost with relief – as if his body
        had finally spoken what his mind had long known. The Five's gaze finds a pattern to
        classify even in its own decline.</p>
        <p class="vb-intro"><strong>c) Withdrawal to the point of total voicelessness:</strong>
        When the illness struck his larynx, Kafka literally lost his voice – the SE5's Castle
        reached here its most radical form – no longer erected by his own choosing, but
        imposed on him by fate, and just as impossible to overcome.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The diagnosis as a late turning point:</strong>
        Kafka was diagnosed with tuberculosis in 1917, at age 34 – a turning point that
        increasingly gave him grounds for withdrawal he had previously had to justify only
        psychologically.</p>
        <p class="vb-intro"><strong>b) Illness as an argument against commitment:</strong>
        Even before the diagnosis, Kafka had broken off two engagements to Felice Bauer
        because marriage felt to him like a threat to his literary existence. Tuberculosis
        later gave him an additional, nearly unassailable argument against any lasting
        closeness.</p>
        <p class="vb-intro"><strong>c) Sanatoriums instead of public life:</strong>
        Kafka spent his final years mostly in sanatoriums – an outwardly forced, but inwardly
        familiar withdrawal from a world he had avoided his whole life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Writing to the physical limit:</strong>
        Even in his final months, Kafka was still correcting proofs and working on the story
        <em>A Hunger Artist</em> – whose title character starves to death because he never
        found the food that suited him, an image that overlaps with Kafka's own, illness-forced
        starvation in unsettling ways.</p>
        <p class="vb-intro"><strong>b) Communication only on paper:</strong>
        In his final weeks, Kafka could no longer speak and communicated exclusively through
        handwritten notes – a situation that took his entire literary output, which had almost
        always happened in writing rather than direct conversation, tragically at its word.</p>
        <p class="vb-intro"><strong>c) Milena Jesenská at his side:</strong>
        Despite his pattern of withdrawal, Kafka let Milena Jesenská closer to him in his final
        phase than almost anyone else – a rare breach of the Castle he otherwise defended so
        consistently.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A body of work that only took effect after death:</strong>
        Kafka died in 1924, largely unknown as a writer – the full force of his work unfolded
        only posthumously, through Max Brod's refusal to destroy it as instructed.</p>
        <p class="vb-intro"><strong>b) Illness as a literary echo:</strong>
        Themes of decay, punishment, and being at the mercy of one's own body run through
        Kafka's work even before the diagnosis – the tuberculosis confirmed, more forcefully
        than any interpretation could, a pattern he had already anticipated in literature.</p>
        <p class="vb-intro"><strong>c) Silence that became a voice:</strong>
        The man who literally fell silent as he died became, posthumously, one of the most
        influential literary voices of the twentieth century – an irony Kafka himself could
        hardly have invented.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Creative power despite advancing decline:</strong>
        Even as eating and speaking became agony, Kafka kept working on his texts – energy
        flowed, to the end, to where his actual existence took place.</p>
        <p class="vb-intro"><strong>b) Fusion of body and literary motif:</strong>
        For Kafka there was no clear separation between his own physical decline and the themes
        of his work – both permeated each other without needing to be artificially separated.</p>
        <p class="vb-intro"><strong>c) Withdrawal as the only remaining course of action:</strong>
        As his body's room to act kept shrinking, Kafka withdrew even deeper into writing – the
        last form of control still left to him.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Seven years with a fatal diagnosis:</strong>
        Diagnosed with tuberculosis in 1917, Kafka died in 1924 at only 40 years old in a
        sanatorium near Vienna – seven years in which the illness increasingly dictated his
        life without his giving up his literary work.</p>
        <p class="vb-intro"><strong>b) The Hunger Artist as anticipation:</strong>
        In his last completed story, <em>A Hunger Artist</em>, Kafka has a character starve
        because he never found what suited his taste – shortly afterward, advancing laryngeal
        tuberculosis made eating so painful for Kafka himself that he, too, literally starved.</p>
        <p class="vb-intro"><strong>c) A ground for withdrawal he never had to wish for:</strong>
        Kafka had spent his whole life avoiding closeness by citing his literary existence.
        Tuberculosis gave him, unwanted, an argument no one could question anymore – the SE5's
        Castle, this time not self-built but finally completed by his own body.</p>
        <p class="vb-intro"><strong>d) Why the larynx, of all places?</strong>
        Kafka's entire literary work revolves around characters who cannot make themselves
        understood before an overpowering, incomprehensible system – Josef K. in <em>The
        Trial</em> never learns what he is accused of, the land surveyor in <em>The Castle</em>
        never reaches the authority that decides his fate. That Kafka's own illness ultimately
        settled in his larynx and literally took his voice reads as the bitterest conceivable
        intensification of this pattern: the man whose characters were never heard for a whole
        lifetime ultimately lost, himself, the physical ability to be heard at all – and had to
        put his final words on paper, just as his characters had to put their final hopes
        there, rather than being able to speak them aloud. This reading is explored in more
        depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Five's pattern inevitably leads to
        tuberculosis or other respiratory illnesses – <strong>every person can develop any
        illness, regardless of subtype.</strong> What Kafka's case can show is a pattern that
        stands out again and again in practice wherever radical withdrawal from interpersonal
        closeness is present – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Kafka did not know his own pattern – the self-preservation Five with Four-wing withdraws even deeper into its own inner world as threat progresses, and that is exactly what he did, until in the end only handwritten notes remained to communicate at all. Someone who does not know their own withdrawal pattern does not see how far it can escalate before communication becomes impossible.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        What defined <strong>Kafka</strong> as a Self-Preservation Five with Four-wing becomes
        tangible once more in his own illness: a withdrawal that became a way of life, a suffering he
        never separated from his work, and an illness that took from him exactly the organ he
        might have used to make himself understood to the world – while his characters had
        already anticipated the very same fate in fiction. The owl who wrote in the dark so
        that no one would see him ultimately fell silent in the literal sense too – and became,
        precisely because of that, one of the most heard voices in literary history.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-franz-kafka", label:"Portrait: Franz Kafka (SE5w4) – life's work"},
        {route:"astrologie-franz-kafka", label:"Enneagram Meets Astrology: Franz Kafka (SP5w4)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se5", label:"Subtype Profile SE5"},
      ])}
    </div>
  `);
}

export function fridaKahloKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frida-kahlo-portrait.jpg" alt="Frida Kahlo" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frida Kahlo</p>
        <p class="krim-portrait-typ">SP2w3 · Self-Preservation Type 2 with Three-wing · 1907–1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frida Kahlo</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-frida-kahlo">portrait under Famous Personalities</a>
        in this Compass – that page covers her artistic life's work and her type structure in
        general. This page delves into a chapter only glossed over there: roughly 30 surgeries
        over nearly three decades, a leg amputation shortly before her death, and a life that
        quite literally refused to be defeated by her own body.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kahlo</strong> is classified as the <strong>Self-Preservation Type 2 with
        Three-wing</strong>. Naranjo called this subtype <em>Me First</em>: the Self-Preservation
        Two must care for herself first in order to be able to care for others at all. The
        Three-wing adds the will to be seen – not hiding one's suffering, but shaping and
        showing it. This exact pattern runs through her entire illness history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Polio at age six:</strong>
        In 1913, Kahlo contracted polio, which permanently weakened her right leg and left it
        thinner – classmates mocked her for it as "Frida pata de palo" (Frida peg-leg).</p>
        <p class="vb-intro"><strong>b) The bus accident of 1925:</strong>
        At eighteen, Kahlo suffered a catastrophic accident when a streetcar collided with the
        bus she was riding – an iron handrail pierced her pelvis, her spine fractured in three
        places, her right leg in eleven.</p>
        <p class="vb-intro"><strong>c) A prognosis that denied her walking and children:</strong>
        Doctors initially gave her little chance of survival, and later expected she would
        never walk again or be able to have children.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) About 30 surgeries over nearly three decades:</strong>
        From 1925 until shortly before her death in 1954, Kahlo underwent dozens of procedures
        on her spine, pelvis, and leg – a near-permanent medical condition that never truly
        ended.</p>
        <p class="vb-intro"><strong>b) A lifetime of corsets and support structures:</strong>
        For long stretches of her life, Kahlo wore plaster and later steel corsets to stabilize
        her torso – she later painted some of them herself, turning them into part of her art.</p>
        <p class="vb-intro"><strong>c) Multiple miscarriages caused by the accident's damage:</strong>
        The pelvic injuries from the accident led to several miscarriages, which Kahlo
        processed in unflinchingly direct works such as "Henry Ford Hospital."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The exhibition opening from her own bed:</strong>
        In 1953, at her only solo exhibition in Mexico, the already gravely ill Kahlo had
        herself brought to the gallery by ambulance and received guests lying in her own
        four-poster bed, installed there for the occasion.</p>
        <p class="vb-intro"><strong>b) Amputation of her right lower leg in 1953:</strong>
        After years of progressive circulatory problems, Kahlo's right leg had to be amputated
        below the knee due to gangrene – a cut that plunged her into deep depression.</p>
        <p class="vb-intro"><strong>c) Death on 13 July 1954 in Mexico City:</strong>
        Frida Kahlo officially died of a pulmonary embolism at age 47 – some historians still
        suspect a possible suicide by overdose, though this has never been conclusively
        established.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">A Parallel Within the Same Subtype: Nusrat Fateh Ali Khan and Mozart</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Both <a href="javascript:void(0)" data-route="beruehmte-nusrat-fateh-ali-khan">Nusrat
        Fateh Ali Khan</a> and
        <a href="javascript:void(0)" data-route="beruehmte-wolfgang-amadeus-mozart">Wolfgang
        Amadeus Mozart</a> (both SP2w3) worked and performed publicly until shortly before their
        deaths, even as their bodies were already gravely ill. Their
        <a href="javascript:void(0)" data-route="krankheitsportraets-nusrat-fateh-ali-khan">illness
        portraits</a> show the same SP2w3 pattern as Kahlo: withdrawal is not an option as long
        as any strength remains for one last appearance – even when that appearance, as with
        Kahlo's exhibition opening from her own bed, turns the body itself into the artwork.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A body of work that would never have existed without the accident:</strong>
        Kahlo herself said, in essence, that she painted herself because she was so often alone
        and because she was the subject she knew best – her life's work is inseparable from her
        illness history.</p>
        <p class="vb-intro"><strong>b) An exhibition that became legend:</strong>
        The image of a gravely ill artist celebrating her own exhibition opening from her own
        sickbed became one of the most iconic images in 20th-century art history.</p>
        <p class="vb-intro"><strong>c) A death whose exact circumstances remain open:</strong>
        The still-unresolved question of whether her death was a natural end or a deliberate
        final act reflects the impossibility of reducing Kahlo's relationship to pain and
        control to a simple formula.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The hippopotamus that defended its territory to the end:</strong>
        Even with an amputated leg and deep depression, Kahlo did not give up painting – the
        same self-care she owed herself first kept her at work until the end.</p>
        <p class="vb-intro"><strong>b) Pain that became image, and thereby visible:</strong>
        Instead of hiding her suffering, Kahlo painted openly displayed surgical scars,
        corsets, and medical instruments – the Three-wing that shaped private pain into a
        public image, all the way into her own illness history.</p>
        <p class="vb-intro"><strong>c) A final diary entry between pain and the will to live:</strong>
        "I hope the exit is joyful – and I hope never to return," Kahlo wrote shortly before her
        death – not a sentence of resignation, but one that held both at once.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Nearly three decades in a state of bodily emergency:</strong>
        From age 18 until her death at 47, Kahlo knew almost no period without pain, surgery,
        or corsets – not a sudden onset, but a lifelong, steadily intensifying state of
        emergency.</p>
        <p class="vb-intro"><strong>b) The refusal to withdraw:</strong>
        The Two's fateful pattern is <strong>pride</strong> – the conviction that one must be
        indispensable to oneself and others, even under the greatest strain. Kahlo kept up
        public appearances even when her body had long since reached its limits.</p>
        <p class="vb-intro"><strong>c) Her own body as first and last artwork:</strong>
        From the earliest self-portraits painted in her sickbed to the exhibition opening from
        her own bed, a circle closed: Kahlo's art began with her own injured body and ended
        with it.</p>
        <p class="vb-intro"><strong>d) Why the body itself, of all things, as canvas?</strong>
        For a Self-Preservation Two with Three-wing whose deepest need is to care for herself
        first and then shape that suffering into something visible, one interpretation
        suggests itself: precisely a body that produced pain for almost fifty years became the
        richest source of her entire artistic output – suffering that was not suppressed but
        made the central subject. This interpretation is a plausible reading, not a documented
        historical causal link, and is developed further in this Compass's psychosomatics
        register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Self-Preservation Two pattern inevitably leads to chronic
        bodily damage – <strong>any person can develop any illness, regardless of
        subtype.</strong> What Kahlo's case illustrates is a pattern in how a pronounced
        Self-Preservation Two with Three-wing handles chronic suffering that keeps recurring in
        practice – one of many possible interpretations, not a judgment. The corresponding
        illness pattern is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Kahlo did not know the Enneagram as a modern personality model – it emerged in its
        current form only decades after her death. She lived out, entirely unconsciously, the
        compulsion to care for herself first and then make that suffering visible – not as a
        strategy, but as the only way she knew to cope with a life full of pain. Someone who
        does not know their own pattern of having to live through suffering and then shape it
        also cannot grant themselves the pause that real healing would sometimes have
        required.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Kahlo's</strong> Self-Preservation Two with Three-wing is legible once more in
        the course of her illness: a body that produced pain for nearly three decades, and a
        woman who never suppressed that pain but made it the central language of her art. The
        hippopotamus that could never leave its water – and that, precisely in that
        confinement, learned to keep creating until its last breath, rather than merely
        surviving.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-frida-kahlo", label:"Portrait: Frida Kahlo (SP2w3) – life's work"},
        {route:"krankheitsportraets-yayoi-kusama", label:"Illness Portrait: Yayoi Kusama (SP2w3) – art from psychological rather than physical suffering"},
        {route:"krankheitsportraets-nusrat-fateh-ali-khan", label:"Illness Portrait: Nusrat Fateh Ali Khan (SP2w3) – the same refusal to step back"},
        {route:"krankheitsportraets-wolfgang-amadeus-mozart", label:"Illness Portrait: Wolfgang Amadeus Mozart (SP2w3)"},
        {route:"krankheitsportraets-ai-weiwei", label:"Illness Portrait: Ai Weiwei (SP2w3) – the same pattern of visible suffering"},
        {route:"krankheitsportraets-mr-t", label:"Illness Portrait: Mr. T (SP2w3) – body as visible testimony"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SP2"},
      ])}
    </div>
  `);
}

export function giacomoPucciniKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-giacomo-puccini-portrait.jpg" alt="Giacomo Puccini" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Giacomo Puccini</p>
        <p class="krim-portrait-typ">SX8w7 · Sexual Type 8 with Seven-wing · 1858–1924</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Crocodile</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Animal correspondence: Crocodile" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Giacomo Puccini</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-giacomo-puccini">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as an opera composer. This page is
        devoted to a chapter that page barely mentions: in 1924, in the middle
        of composing his final opera <em>Turandot</em>, Puccini, a heavy cigar smoker, was
        diagnosed with throat cancer. A radical radium treatment in Brussels took away his
        voice; days later he died of a heart attack as a complication of the treatment –
        <em>Turandot</em> was left unfinished.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Puccini</strong> is classified as the <strong>Sexual Type 8 with
        Seven-wing</strong>. Naranjo called the sexual Eight <em>Possession</em>: she wants
        no distanced connection, only complete fusion with what she touches. The Seven-wing
        adds a craving for pleasure and a need for distraction – uncompromising passion not
        only on stage but in life itself, with racing cars, hunting, and a public jealousy
        scandal.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A swallowed bone as a seemingly harmless trigger:</strong>
        In 1923, while working on <em>Turandot</em>, Puccini reportedly choked on a goose
        bone – afterward, recurring throat inflammation, ear pain, and difficulty
        swallowing began.</p>
        <p class="vb-intro"><strong>b) Growing hoarseness in February 1924:</strong>
        Sore throat and dysphonia intensified until swelling in his neck made it impossible
        to close his shirt collar – a symptom the longtime heavy smoker initially played
        down.</p>
        <p class="vb-intro"><strong>c) Several specialists, a growing certainty:</strong>
        Throughout 1924, Puccini consulted several specialists in Florence. On November 3, a
        joint consultation referred him to a radiation specialist in Brussels – the diagnosis
        of throat cancer was confirmed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Continuing to compose despite worsening symptoms:</strong>
        Even as his symptoms intensified, Puccini kept working on <em>Turandot</em> – his
        will to finish the work was not, at first, slowed by his physical decline.</p>
        <p class="vb-intro"><strong>b) A radical, then cutting-edge treatment:</strong>
        On November 24, 1924, the Brussels specialist Dr. Louis Ledoux inserted seven
        radioactive radium needles directly into Puccini's laryngeal tumor – a nearly
        four-hour procedure under local anesthesia, accompanied by a tracheotomy (a surgical
        opening cut into the windpipe) and a feeding tube.</p>
        <p class="vb-intro"><strong>c) Loss of voice after the procedure:</strong>
        After the treatment, Puccini could no longer speak because the needles blocked his
        vocal cords. In a written note to family, he described the feeling as having
        <em>bayonets in his throat</em>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Denying the diagnosis for a long time:</strong>
        Puccini concealed the severity of his illness from himself and those around him for
        a long time – a behavior pattern repeatedly cited as his greatest mistake in dealing
        with the disease.</p>
        <p class="vb-intro"><strong>b) Full intensity right up to the radical procedure:</strong>
        Rather than choosing a gentler, slower treatment, he underwent the most aggressive
        therapy available at the time – uncompromising intensity that remained typical of
        the sexual Eight even in confronting his own illness.</p>
        <p class="vb-intro"><strong>c) A work he did not want to let go of:</strong>
        <em>Turandot</em> remained his central concern to the end – finishing the opera
        mattered more to him than caution or restraint in the face of his own advancing
        illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A heart attack as a fatal complication:</strong>
        On November 28, 1924, days after the procedure, Puccini suffered a heart attack; he
        died the following day in Brussels at age 66.</p>
        <p class="vb-intro"><strong>b) An opera left without its ending:</strong>
        <em>Turandot</em> remained unfinished, missing the final duet. Franco Alfano later
        completed the opera from Puccini's sketches; at the 1926 premiere under Toscanini,
        the conductor deliberately stopped precisely at the point where Puccini's own music
        ended.</p>
        <p class="vb-intro"><strong>c) A death that became a cautionary tale:</strong>
        In later retrospectives, Puccini's long concealment of his own diagnosis is
        considered one of the most consequential mistakes of his final year – a lesson still
        cited today in discussions of how to handle a cancer diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Full intensity, no half-measures:</strong>
        Choosing the most radical available treatment over a more cautious approach fits the
        sexual Eight, who seeks fusion and full intensity even in dealing with her own
        illness.</p>
        <p class="vb-intro"><strong>b) The Seven-wing as a reflex to flee reality:</strong>
        His long denial of the diagnosis can be linked to the Seven-wing, which tends to
        avoid unpleasant reality rather than confront it early.</p>
        <p class="vb-intro"><strong>c) Work as a point of escape until the very end:</strong>
        <em>Turandot</em> remained his central energetic focus until the procedure – the
        compositional work kept his attention away from his own physical decline for as
        long as possible.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness that struck exactly the tool he lived for:</strong>
        Puccini's entire body of work was built on the human voice – and it was, of all
        organs, the larynx, the organ that makes voice possible at all, that became the site
        of his fatal illness.</p>
        <p class="vb-intro"><strong>b) Denial until the very end:</strong>
        Rather than confronting the reality of the diagnosis early, Puccini denied it for
        months – a delay later observers explicitly name as his most consequential
        mistake.</p>
        <p class="vb-intro"><strong>c) Why, of all things, the most radical, most uncompromising treatment?</strong>
        For a sexual Eight with Seven-wing, whose passion aims at full, immediate intensity,
        choosing the most aggressive therapy available can be read as an intensification of
        his own life pattern: no hesitant approach, but full, uncompromising commitment –
        even when that commitment ultimately proved fatal. This reading is explored in more
        depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the sexual Eight with Seven-wing's pattern inevitably leads to
        throat cancer – <strong>every person can develop any illness, regardless of
        subtype.</strong> Puccini's illness is also clearly linked medically to his
        longtime, heavy cigar smoking, not to be explained purely psychosomatically. What
        his case can show is a pattern in how illness was handled that stands out again and
        again in a pronounced sexual Eight with Seven-wing – one possible reading among many,
        not a verdict. The corresponding condition will be developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Puccini did not know his own pattern – the sexual Eight with Seven-wing pushes toward intensity and completion at any cost, and it was exactly this drive that kept him working on Turandot despite throat cancer, until a radical treatment literally took away his voice. Someone who does not recognize their own drive toward completion also fails to hear their own body's warning signs.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Eight with Seven-wing is confirmed once more in how <strong>Giacomo
        Puccini</strong> handled his own illness: denied for a long time, then confronted
        uncompromisingly with the most radical treatment available, until the procedure
        itself proved fatal. The crocodile, who lived uncompromising passion on stage and in
        life, defended his work – the completion of <em>Turandot</em> – until his final
        days, even as his own body had long stopped allowing any delay.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-giacomo-puccini", label:"Portrait: Giacomo Puccini (SX8w7) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx8", label:"Subtype Profile SX8"},
      ])}
    </div>
  `);
}

export function helmutKohlKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-helmut-kohl-portrait.jpg" alt="Helmut Kohl" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Helmut Kohl</p>
        <p class="krim-portrait-typ">SE8w9 &middot; Self-Preservation Type 8 with a Nine Wing &middot; 1930–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Orangutan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Animal correspondence: Orangutan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Helmut Kohl</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-helmut-kohl">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his 16 years as Chancellor and German
        reunification. This page explores a chapter only fleetingly noted there: a severe fall in
        February 2008 abruptly ended Kohl's public life and left him largely dependent on
        care for the last nine years until his death in 2017.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kohl</strong> is assigned to the <strong>Self-Preservation Type 8 with a Nine Wing</strong>.
        The SE8 invests its strength in the uncompromising securing of its own territory and closest circle; the
        Nine-wing adds patience and the ability to hold control over long periods without
        visible effort. This exact combination – the will to lead, paired with the Nine's
        typical tendency to keep one's own vulnerability out of public view as much as
        possible – also determined how his circle shaped his final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The fall in February 2008:</strong>
        Kohl suffered a severe fall in his house in Ludwigshafen-Oggersheim and sustained a
        head injury that required emergency surgery.</p>
        <p class="vb-intro"><strong>b) Permanent physical consequences:</strong>
        After the fall, Kohl depended on a wheelchair and could no longer move
        independently – a radical break for a man whose physical presence had been part of
        his political impact for decades.</p>
        <p class="vb-intro"><strong>c) Substantial loss of speech:</strong>
        The injury also severely limited Kohl's ability to speak – the chancellor once
        known for his deliberate but forceful Palatinate rhetoric could henceforth make
        himself understood only with great difficulty.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Near-total withdrawal from public life:</strong>
        After the fall, Kohl was rarely seen in public anymore – a sharp contrast to his
        decades-long need to remain visible as a central figure.</p>
        <p class="vb-intro"><strong>b) Round-the-clock care in his own home:</strong>
        Kohl spent his final years in home care in Oggersheim, looked after by his second
        wife Maike Kohl-Richter, who strictly controlled access to him.</p>
        <p class="vb-intro"><strong>c) A publicly known dispute over his care:</strong>
        Kohl's sons from his first marriage later reported publicly that contact with their
        father during this time had been made difficult or denied – a family conflict that
        shaped public debate about his legacy well beyond his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Few, tightly controlled public appearances:</strong>
        The rare occasions on which Kohl still appeared publicly after 2008 – such as a
        2014 visit from French President François Hollande – were strictly controlled,
        brief moments, no longer spontaneous appearances.</p>
        <p class="vb-intro"><strong>b) Controversy over his political legacy while still alive:</strong>
        In 2014, while Kohl was still dependent on care, a book appeared containing
        allegedly confidential Kohl quotes from his former ghostwriter, against whose
        publication Kohl took legal action – a last, weakened fight for control over his
        own story.</p>
        <p class="vb-intro"><strong>c) A state ceremony outside the usual form:</strong>
        After his death in 2017, the European Parliament in Strasbourg held a "European Act
        of Mourning" for the first time in the history of the Federal Republic – a special
        tribute underscoring Kohl's life's work for European unification.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A political legacy that outlasted the decline:</strong>
        Despite nine years of near-invisibility, Kohl's historical significance as the
        "Chancellor of Unity" remained unbroken in public perception.</p>
        <p class="vb-intro"><strong>b) A family conflict fought out in public:</strong>
        The conflict between Kohl's second wife and his sons from his first marriage over
        access, care, and later also the estate was discussed extensively in German media
        and cast a considerable shadow over his final years.</p>
        <p class="vb-intro"><strong>c) A controlled final resting place:</strong>
        Kohl was not buried next to his first wife Hannelore, but, at his own request, on
        the grounds of Speyer Cathedral's forecourt – a decision his sons criticized as a
        further expression of his second wife's control over his final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Keeping control even as the body refused it:</strong>
        The same conviction that the reins must stay in his own hands, which had carried
        Kohl's entire political career, also shaped the organization of his final years –
        not open vulnerability, but a strictly controlled, largely shielded retreat.</p>
        <p class="vb-intro"><strong>b) The Nine-wing and sitting out his own decline:</strong>
        Kohl's legendary ability to sit out conflicts rather than fight them out publicly
        showed itself once more in his final years – not a public struggle for composure,
        but a quiet, almost invisible retreat behind closed doors.</p>
        <p class="vb-intro"><strong>c) The loyalty trap as a repetition of a familiar pattern:</strong>
        As in the CDU donations scandal, in which Kohl placed loyal networks above
        transparency, his final phase of life also fell into a situation in which close
        personal bonds – to his second wife – became more important than open access for
        others who were close to him.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) An orangutan whose territory was no longer allowed to see him:</strong>
        Kohl's entire political existence rested on visibility, presence, and personal
        control over his network – the fall in 2008 threatened precisely that visibility,
        while control over his immediate surroundings, paradoxically, remained intact,
        only now held by another hand.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">Winston Churchill</a>
        (also SE8w9) concealed a severe stroke in office for weeks from the public and much
        of his own cabinet in 1953, rather than exposing his own vulnerability; Kohl
        responded to his own, far more dramatic physical limitation with a structurally
        similar stance – not through public complaint, but through the quiet continuation
        of control over his own surroundings, as far as circumstances still allowed. Both
        cases show the same SE8w9 pattern: the Eight with a Nine-wing does not readily
        relinquish control over its own territory and surroundings, even in the face of
        massive physical limitation. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">Illness Portrait of Winston Churchill</a>.</p>
        <p class="vb-intro"><strong>c) Why movement and speech, of all things?</strong>
        For a Self-Preservation Eight with a Nine-wing, whose entire power rested on physical presence
        and the ability to fill rooms with deliberate but forceful rhetoric, one
        interpretation suggests itself: precisely those two abilities – to move and to
        speak – that had carried his decades-long political impact became the site of the
        limitation. This interpretation is a plausible reading, not a documented historical
        causal link, and will be developed further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation Eight's pattern inevitably leads to a fall with
        permanent paralysis – <strong>anyone can suffer any illness or injury, regardless
        of subtype.</strong> What Kohl's case illustrates is a pattern in how a pronounced
        Self-Preservation Eight with a Nine-wing tends to handle sudden, massive loss of control – one
        of many possible interpretations, not a verdict. The corresponding illness picture
        is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Kohl did not know his own pattern – the Self-Preservation Eight with a Nine-wing reflexively
        holds on to control over its own surroundings instead of ever openly allowing its
        own vulnerability, and exactly this pattern determined how his final decade of life
        was organized. Someone who does not recognize their own need to keep the reins in
        hand as a pattern cannot set it aside even in the face of total physical
        dependence – it simply shifts from their own person to their closest confidant.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Eight with a Nine-wing explains much about the course of
        <strong>Helmut Kohl's</strong> final years: a man whose entire power rested on
        presence and control lost both almost entirely – and yet, patiently and invisibly
        organized in the background, exactly the control over his immediate surroundings
        that had shaped his whole life remained intact. The orangutan that could no longer
        make its presence known, but never truly left its territory until the end.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-helmut-kohl", label:"Portrait: Helmut Kohl (SE8w9) – Chancellor of Unity"},
        {route:"krankheitsportraets-winston-churchill", label:"Illness Portrait: Winston Churchill (SE8w9) – the same pattern of hidden vulnerability"},
        {route:"krankheitsportraets-galarrwuy-yunupingu", label:"Illness Portrait: Galarrwuy Yunupingu (SE8w9) – the same pattern, control despite physical decline"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se8", label:"Subtype Profile SE8"},
      ])}
    </div>
  `);
}

export function jamesLevineKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-james-levine-portrait.jpg" alt="James Levine" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">James Levine</p>
        <p class="krim-portrait-typ">SE9w1 · Self-Preservation Type 9 with One-wing · 1943–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Elephant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Animal correspondence: Elephant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>James Levine</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-james-levine">portrait under Famous Personalities</a>
        in this Compass – that page covers his musical life's work at the Metropolitan Opera
        and, in its final section, the abuse allegations that became public in 2017. This
        portrait is devoted to a separate chapter: a Parkinson's disease that progressed over
        decades, along with severe back injuries, which increasingly limited him physically
        while he kept conducting.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Levine</strong> is classified as the <strong>self-preservation Nine with
        One-wing</strong>. Naranjo called the self-preservation Nine <em>Appetite</em>: the
        longing to dwell completely in something that nourishes and sustains. The One-wing
        gives that longing an inner standard that tolerates no shortcuts. It was exactly this
        combination of deep rootedness and an unyielding demand on himself that also shaped how
        Levine handled a body that increasingly took control away from him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First tremor symptoms as early as the 1990s:</strong>
        Colleagues and orchestra members noticed a slight shaking in Levine's hands early on,
        which he largely concealed for years and did not address publicly.</p>
        <p class="vb-intro"><strong>b) Back problems as an early warning sign:</strong>
        Alongside the first neurological signs, Levine increasingly suffered from severe back
        complaints that required several surgical procedures and repeatedly kept him off the
        podium for extended periods.</p>
        <p class="vb-intro"><strong>c) A fall in 2006 as a first serious blow:</strong>
        In a fall during a concert in Boston, Levine tore his rotator cuff – an incident that
        made his growing physical vulnerability publicly visible for the first time.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The Parkinson's diagnosis, kept private for years:</strong>
        Levine likely received his Parkinson's diagnosis as early as the 1990s but did not make
        it public until 2013 – a pattern of secrecy that ran through much of his career.</p>
        <p class="vb-intro"><strong>b) A severe fall in 2011 as a turning point:</strong>
        A fall during the 2011 summer break led to a serious spinal injury requiring emergency
        surgery and kept Levine off the podium entirely for almost two years.</p>
        <p class="vb-intro"><strong>c) Growing reliance on technical aids:</strong>
        The Metropolitan Opera built a special motorized wheelchair lift to bring Levine to the
        podium – a visible sign of how far his body had become uncoupled from his will to keep
        conducting.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Conducting seated, with minimal hand movement:</strong>
        In his last active years, Levine conducted seated, with severely limited arm mobility –
        he communicated with the orchestra increasingly through eye contact and facial
        expression rather than classical conducting gestures.</p>
        <p class="vb-intro"><strong>b) Not withdrawal, but adaptation:</strong>
        Rather than stepping back from active leadership, Levine kept adjusting his working
        method to the progressing illness – a pattern that held for decades, until his physical
        limits allowed no further adaptation.</p>
        <p class="vb-intro"><strong>c) Public reticence despite visible symptoms:</strong>
        Even after the tremor and limited mobility had become unmistakable to audiences, Levine
        himself rarely spoke publicly about his illness – a silence that fits the
        self-preservation Nine, which would rather carry weakness within than voice it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Return after a two-year break:</strong>
        In 2013, Levine, now permanently using a wheelchair, returned to the Metropolitan
        Opera – a comeback celebrated in the classical music world as a remarkable expression of
        persistence.</p>
        <p class="vb-intro"><strong>b) The end of his active career in 2017/2018:</strong>
        Levine's contract with the Met ended in 2018 – officially in connection with the abuse
        investigations, though his progressing illness had already noticeably limited his
        ability to lead the orchestra before that.</p>
        <p class="vb-intro"><strong>c) Death in 2021 from the effects of Parkinson's disease:</strong>
        James Levine died on March 9, 2021, in Palm Springs, California, officially from
        complications of his long-standing Parkinson's disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The One-wing that made no compromise with illness:</strong>
        Levine's inner demand for musical precision remained intact even as his body made that
        precision increasingly difficult – his will toward correctness did not soften under the
        illness.</p>
        <p class="vb-intro"><strong>b) Appetite that adapted to changed conditions:</strong>
        The self-preservation Nine seeks wholeness in the familiar – Levine kept finding that
        wholeness in music even as access to it grew ever more limited, and preserved through it
        a form of inner stability.</p>
        <p class="vb-intro"><strong>c) A territory he defended to the last:</strong>
        Like the elephant that does not give up its territory without a fight, the Met remained
        Levine's home until the forced end – the retreat came not from his own decision, but was
        imposed on him from outside and by his own body at once.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A quarter-century of quiet adaptation:</strong>
        From the first tremor symptoms in the 1990s to his death in 2021, the progressing
        Parkinson's disease runs like a red thread through Levine's entire late career –
        accompanied by severe, repeated back injuries.</p>
        <p class="vb-intro"><strong>b) Secrecy as a consistent pattern:</strong>
        As with other Illness Portraits in this Compass, Levine kept his diagnosis private for
        years – a behavior that shows especially clearly in the self-preservation Nine:
        maintaining outward stability even when something had long since begun to falter
        inside.</p>
        <p class="vb-intro"><strong>c) Why, of all things, control over one's own body?</strong>
        For a self-preservation Nine with One-wing, whose deepest need is complete, undisturbed
        fusion with its territory, one reading suggests itself: precisely an illness that
        gradually robs one of control over one's own movements struck a man whose entire
        identity hinged on the precise, physical command of an orchestra. This reading is
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the self-preservation Nine's pattern inevitably leads to Parkinson's
        disease – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Levine's case can show is a pattern that stands out again and again in practice
        wherever quiet, adaptable persistence exists alongside progressive loss of control – one
        possible explanation among many, not a verdict. The corresponding condition will be
        developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Levine did not know his own pattern – the self-preservation Nine with One-wing prefers to avoid any attention to its own weakness, and that is exactly what let him keep early tremor symptoms private for years rather than ease off in time. Someone who does not know their own pattern of avoidance postpones the necessary decision until it is taken out of their hands.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Levine's</strong> decades-long Parkinson's disease, the self-preservation
        Nine with One-wing reveals itself at its most persistent: a quiet, long-concealed
        adaptation to progressive loss of control, an unyielding inner standard that the illness
        never softened, and a territory given up only when no remaining could still be possible.
        The elephant that inhabited its house until its own body and outside circumstances left
        it no other choice.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-james-levine", label:"Portrait: James Levine (SE9w1) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se9", label:"Subtype Profile SE9"},
      ])}
    </div>
  `);
}

export function jordanPetersonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jordan-peterson-portrait.jpg" alt="Dr. Jordan Peterson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Jordan Peterson</p>
        <p class="krim-portrait-typ">SO1w9 · Social Type 1 with Nine-Wing · b. 1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Goose</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Animal correspondence: Goose" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jordan Peterson</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-jordan-peterson">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: a severe
        benzodiazepine dependency that culminated in 2019/2020 in a medically induced
        withdrawal coma in Russia, after Western clinics could no longer help him.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Peterson</strong> is assigned to the <strong>social Type 1 with Nine-Wing</strong>.
        The SO1 carries its anger as a societal cause, not a private grudge; the Nine-Wing adds a
        calm, patient persuasiveness that keeps repeating even difficult messages with stamina.
        Exactly this combination – preaching order while chaos raged in his own life – shaped the
        course of his own addiction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Benzodiazepines prescribed after a family crisis:</strong>
        By his own account, Peterson was medically prescribed benzodiazepines, among other things
        in connection with his daughter Mikhaila's severe, rare autoimmune disease and the strain
        it caused.</p>
        <p class="vb-intro"><strong>b) A creeping physical dependency:</strong>
        Over time a physical dependency developed that, by his own account, went far beyond the
        originally intended use.</p>
        <p class="vb-intro"><strong>c) Escalation through an unexpected reaction in 2019:</strong>
        A paradoxical, extreme reaction to a dosage adjustment in spring 2019 triggered an acute
        health crisis with severe withdrawal symptoms.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Unsuccessful treatment attempts in several countries:</strong>
        According to his daughter Mikhaila, who documented the case publicly, they sought treatment
        at several clinics in North America without achieving effective relief from the withdrawal.</p>
        <p class="vb-intro"><strong>b) Extreme withdrawal symptoms, including akathisia:</strong>
        Peterson later spoke publicly about agonizing states, including a condition described as
        akathisia – an almost unbearable inner restlessness.</p>
        <p class="vb-intro"><strong>c) Travel to Russia as a last treatment option:</strong>
        At the end of 2019 the family traveled to Russia, where a clinic offered a treatment that
        was not available in Western countries at the time.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) A medically induced coma for withdrawal treatment:</strong>
        In Moscow, according to his daughter, Peterson was placed in an induced coma to get
        through the hardest part of the physical withdrawal.</p>
        <p class="vb-intro"><strong>b) Months of largely public invisibility:</strong>
        For long stretches of this crisis, Peterson nearly vanished from public view – a sharp
        contrast to his otherwise omnipresent media role.</p>
        <p class="vb-intro"><strong>c) Public documentation by his own daughter:</strong>
        Mikhaila Peterson reported extensively in her own videos during and after the crisis – an
        unusually open account of a family member accompanying an addiction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide media attention:</strong>
        Peterson's crisis was reported extensively around the world – for many a surprising turn
        in the life of a figure who publicly stood for self-discipline and order.</p>
        <p class="vb-intro"><strong>b) A delayed but complete return to public life:</strong>
        After months of recovery, Peterson gradually returned to lectures, interviews, and
        publications in 2020/2021.</p>
        <p class="vb-intro"><strong>c) Open, later processing in interviews:</strong>
        In the following years, Peterson repeatedly spoke publicly about the crisis, without
        downplaying or hiding it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Preaching order while his own life fell apart:</strong>
        The same SO1 conviction that chaos is dangerous and order a moral duty stood in sharp
        contrast to the period in which Peterson himself lost control of his own body.</p>
        <p class="vb-intro"><strong>b) The Nine-Wing and enduring the situation for a long time before seeking help:</strong>
        The Nine-Wing's patient, long-haul persuasiveness also showed in the fact that the family
        tried various treatment paths for months before taking the radical step to Russia.</p>
        <p class="vb-intro"><strong>c) Openness as a late form of loyalty to principle:</strong>
        That Peterson later described his own crisis publicly and unvarnished fits the SO1
        conviction that the truth – even one's own uncomfortable truth – must be spoken.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A mind that preached order while the body lost it:</strong>
        Peterson's entire public work rests on the conviction that structure and self-discipline
        can overcome chaos – of all people, he fell into a physical crisis in which exactly that
        control was completely lost.</p>
        <p class="vb-intro"><strong>b) Why the mind, of all things, which claimed to think most clearly?</strong>
        For a social One with a Nine-Wing, whose entire public authority rested on rational
        clarity and orderly thinking, one interpretation suggests itself: exactly the organ with
        which he preached order to millions became, through medication dependency, the very site
        of lost control. This reading is a plausible interpretation, not a proven clinical
        causal link, and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the social One's pattern inevitably leads to medication
        dependency – <strong>any person can develop any illness, regardless of subtype.</strong>
        What can be shown in Peterson's case is a pattern in dealing with an overcome dependency
        crisis that keeps recurring in a pronounced social One with Nine-Wing – one of many
        possible readings, not a verdict. The corresponding illness pattern is being developed
        gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Peterson does not know his own pattern as an Enneagram structure – the social One with
        Nine-Wing reflexively clings to its own demand for order instead of admitting its own
        vulnerability in time, and lived out exactly this pattern unchanged until the acute
        crisis. Anyone who does not recognize their own tendency to maintain control at all costs
        as a pattern risks that control ends only in complete collapse.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 1 with Nine-Wing explains much about the course of <strong>Jordan
        Peterson's</strong> own dependency crisis: a man whose entire public authority rested on
        order and self-discipline had to live through the experience of complete loss of control
        himself before finding solid ground again – the goose that fell out of formation and only
        found its way back to the flock after an induced coma.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-jordan-peterson", label:"Portrait: Dr. Jordan Peterson (SO1w9)"},
        {route:"krankheitsportraets-adam-smith", label:"Illness Portrait: Adam Smith (SO1w9)"},
        {route:"krankheitsportraets-helmut-schmidt", label:"Illness Portrait: Helmut Schmidt (SO1w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so1", label:"Subtype Profile SO1"},
      ])}
    </div>
  `);
}

export function karlMarxKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-karl-marx-portrait.jpg" alt="Karl Marx" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Karl Marx</p>
        <p class="krim-portrait-typ">SO8w9 · Social Type 8 with Nine-wing · 1818–1883</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Lion</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Animal correspondence: Lion" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Karl Marx</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-karl-marx">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and his decades-long struggle against
        capitalism. This portrait is devoted to a chapter only lightly touched on there: a chronic,
        extremely painful skin condition that literally kept him from sitting while he was
        writing "Capital."
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Marx</strong> is classified as the <strong>Social Eight with Nine-wing</strong>.
        Naranjo called the Social Eight <em>Solidarity</em>: strength in the service of the
        oppressed. The Nine-wing brings patience and the ability to think through an enormous
        system over decades rather than acting impulsively. It was exactly this quiet,
        relentless persistence that also carried Marx through a body that resisted him,
        painfully, for decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First skin complaints as early as the 1840s:</strong>
        Already in his twenties, Marx complained in letters of recurring boils and skin
        inflammations – an affliction that never fully left him from that point on.</p>
        <p class="vb-intro"><strong>b) Worsening in London exile:</strong>
        With the move to London in 1849, amid cramped living conditions, chronic lack of money,
        and poor nutrition, the skin complaints increased noticeably in frequency and
        severity – a pattern many physicians of his time linked to the conditions of exile.</p>
        <p class="vb-intro"><strong>c) An affliction he named without flinching:</strong>
        In letters to Friedrich Engels, Marx described his complaints with striking openness
        and black humor – an early sign that he did not repress the illness, but folded it, like
        so much else, into his political self-understanding.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Carbuncles at the most painful sites:</strong>
        For decades, Marx suffered severe, suppurating boils and carbuncles – above all on his
        buttocks, back, and groin – which medical historians today often interpret as
        hidradenitis suppurativa, a chronic inflammatory disease of the sweat glands.</p>
        <p class="vb-intro"><strong>b) Months-long interruptions to his writing:</strong>
        In especially severe phases, Marx could not sit for weeks and had to work standing or
        lying on his side – the completion of the first volume of "Capital" was repeatedly
        delayed by months as a result.</p>
        <p class="vb-intro"><strong>c) A web of further chronic complaints:</strong>
        Alongside the carbuncles, his letters and his physician's reports document chronic
        bronchitis, liver complaints, rheumatism, headaches, and recurring eye
        inflammations, likely worsened by working at night by poor candlelight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The famous gallows humor toward the bourgeoisie:</strong>
        Marx is reported to have told Engels he hoped the bourgeoisie would remember his
        carbuncles until their dying day – a line that directly linked his own physical pain to
        his political struggle.</p>
        <p class="vb-intro"><strong>b) Family tragedies as an additional burden:</strong>
        Three of his seven children died young, partly as a result of the poverty in which the
        family lived – a grief that, according to contemporaries, also took a physical toll on
        Marx's health.</p>
        <p class="vb-intro"><strong>c) Working despite the diagnosis, not because of its absence:</strong>
        Unlike some other Illness Portraits in this Compass, Marx was fully aware of his chronic
        complaints – he did not hide them, but integrated them into daily life as a constant,
        never fully defeated adversary.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) The first volume of "Capital" in 1867:</strong>
        Despite years of illness-related interruptions, Marx completed the first volume of his
        major work – a feat of strength that can also be read as a victory over his own, often
        rebellious body.</p>
        <p class="vb-intro"><strong>b) Volumes two and three remained unfinished:</strong>
        Marx never completed the continuation of "Capital"; only Friedrich Engels, after Marx's
        death, assembled the later volumes from his notes – a sign of how much the chronic
        illness ultimately limited his life's work.</p>
        <p class="vb-intro"><strong>c) Growing isolation in his final years:</strong>
        In his final years, weakened by bronchitis and recurring pneumonia, Marx withdrew
        increasingly from public political life and depended on the care of his daughter
        Eleanor and Engels.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Nine-wing that also held the body still:</strong>
        The same quiet, relentless persistence with which Marx worked for decades on his
        systemic work also showed in how he handled his own illness – no dramatic rebellion, but
        tenacious continued work despite recurring, months-long setbacks.</p>
        <p class="vb-intro"><strong>b) Anger turned inward toward the body:</strong>
        The Social Eight normally fights outward, against visible enemies and injustice – in
        Marx, part of this intensity, as medical historians have discussed, may also have
        turned inward, in the form of chronic, inflammatory bodily reactions.</p>
        <p class="vb-intro"><strong>c) Lion energy in the sickroom:</strong>
        Even confined to bed, Marx, according to visitors' accounts, hardly let go of his
        work – books, newspapers, and notes remained within reach, even when he could barely
        sit at times.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An affliction that accompanied him for four decades:</strong>
        From the first documented boils in the 1840s to his death in 1883, the chronic skin
        condition runs like a red thread through Marx's entire adult life – running parallel to
        his entire literary and political life's work.</p>
        <p class="vb-intro"><strong>b) A body that refused to be brought down:</strong>
        Unlike many other Illness Portraits in this Compass, no concealment is documented here –
        Marx spoke openly about his complaints, even processed them with humor, and yet never
        let them stop him entirely.</p>
        <p class="vb-intro"><strong>c) Why, of all things, the skin?</strong>
        For a Social Eight with Nine-wing, whose fighting spirit normally turns outward, against
        concrete injustice, one reading suggests itself: precisely the skin – the boundary
        between inside and outside, between the body and the hostile world Marx fought his
        entire life – became itself the site of a chronic, painful conflict. This reading is
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the Social Eight's pattern inevitably leads to skin conditions –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Marx's case can show is a pattern that stands out again and again in practice wherever
        chronically outward-directed fighting spirit exists – one possible explanation among
        many, not a verdict. The corresponding condition will be developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Marx did not know his own pattern – the social Eight tolerates no interruption to its own mission, and that is exactly what let him keep working undeterred on his life's work for over four decades despite painful carbuncles, rather than allowing himself the rest he needed. Someone who does not know their own pattern of endurance mistakes yielding for defeat, even when their own body has long needed to stop.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Marx's</strong> chronic illness history, the Social Eight with Nine-wing
        reveals itself at its most tenacious: a body that rebelled for decades, a fighting
        spirit that was never fully stopped by it, and a body of work that, despite months-long
        phases of pain, became one of the most influential works in intellectual history. The
        lion that kept writing from its sickbed – because standing still was never an option,
        even when his own body tried to force it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-karl-marx", label:"Portrait: Karl Marx (SO8w9) – life's work"},
        {route:"krankheitsportraets-winston-churchill", label:"Illness Portrait: Winston Churchill (SE8w9)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so8", label:"Subtype Profile SO8"},
      ])}
    </div>
  `);
}

export function leonardoDaVinciKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonardo-da-vinci-portrait.jpg" alt="Leonardo da Vinci" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonardo da Vinci</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Social Type 5 with Four-wing &middot; 1452–1519</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonardo da Vinci</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-leonardo-da-vinci">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his boundless curiosity and universal
        work spanning art and science. This page explores a chapter mentioned there only in
        passing: a stroke in his final years that paralyzed his right hand, without ever
        stopping him from working.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Leonardo</strong> is assigned to the <strong>Social Type 5 with Four-wing</strong>.
        The SO5 puts its knowledge at the community's disposal instead of hoarding it; the
        Four-wing gives that knowledge a deep aesthetic and emotional dimension. This exact
        combination – the unconditional will to keep creating and contributing – also
        determined how he responded to his physical limitation in his final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A stroke around 1517:</strong>
        In his final years, during his time at the court of French King Francis I in
        Amboise, Leonardo likely suffered a stroke that left the right side of his body
        paralyzed.</p>
        <p class="vb-intro"><strong>b) A paralyzed right hand:</strong>
        Contemporary accounts, including that of the Venetian envoy Antonio de Beatis, who
        visited Leonardo in 1517, explicitly described his right hand as paralyzed and
        noted that he could no longer paint with his accustomed precision.</p>
        <p class="vb-intro"><strong>c) Mental clarity persisting despite physical limitation:</strong>
        The same accounts stressed that Leonardo's mind and his ability to make sketches
        and instruct others remained untouched by the paralysis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Switching to the left hand:</strong>
        Leonardo was naturally left-handed to begin with and had used his left hand for
        many of his notes and sketches throughout his life – a circumstance that helped
        him continue drawing despite his paralyzed right hand.</p>
        <p class="vb-intro"><strong>b) Continued work on the Mona Lisa:</strong>
        Even after the stroke, Leonardo reportedly kept working on paintings such as the
        Mona Lisa – a work he had never delivered to a client anyway, keeping it instead
        as his own, never fully finished project until his death.</p>
        <p class="vb-intro"><strong>c) Still active as advisor and teacher:</strong>
        At the French court, Leonardo, despite his physical limitation, continued to work
        as a planner, engineer, and valued conversation partner of the king.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Retreat to the Château du Clos Lucé:</strong>
        King Francis I gave Leonardo the Château du Clos Lucé near Amboise for his final
        years – a sheltered setting that allowed him to keep working and thinking despite
        his health limitation.</p>
        <p class="vb-intro"><strong>b) Continued notebook work to the very end:</strong>
        Leonardo's more than 13,000 pages of notebooks kept growing even in this final
        phase of his life – observations, sketches, and reflections he did not give up
        despite his physical limitation.</p>
        <p class="vb-intro"><strong>c) Death on May 2, 1519, in Amboise:</strong>
        Leonardo died at age 67 in France, far from his Italian homeland, in the service
        of the French king.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A legacy that outlasted the paralysis:</strong>
        The late notebooks and unfinished projects from his final years show no
        discernible break in Leonardo's intellectual creative power, despite the physical
        limitation.</p>
        <p class="vb-intro"><strong>b) A posthumous legend around his death:</strong>
        Centuries later, the French painter Ingres created a famous, historically
        unverified painting showing Leonardo dying in the arms of King Francis I – an
        image that cemented his status as a revered court scholar for posterity.</p>
        <p class="vb-intro"><strong>c) A work that resonated despite being unfinished:</strong>
        Unlike some other illness histories in this Compass, the paralysis did not stop
        Leonardo from continuing to develop his arguably most famous work, the Mona Lisa,
        right up until his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Knowledge and creation as an unceasing mission:</strong>
        The same conviction that knowledge and skill must be made available to the world –
        which shaped Leonardo's entire life – also determined how he responded to his
        physical limitation: not with withdrawal, but by switching to his already
        available left hand in order to keep contributing.</p>
        <p class="vb-intro"><strong>b) The Four-wing and the refusal to abandon unfinished work:</strong>
        Leonardo's lifelong tendency never to fully complete his works met a new, physical
        limit in his final years – yet instead of finally setting the Mona Lisa aside, it
        remained his companion project to the very end, the same deep, emotional
        attachment to one's own work that characterizes the Four-wing.</p>
        <p class="vb-intro"><strong>c) Continuity instead of an abrupt break:</strong>
        Unlike some other illness histories in this Compass, there are no reports of a
        sudden, dramatic behavioral change after the stroke – Leonardo adapted his method
        without abandoning his underlying working principle.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A body that could no longer quite keep up with the mind's demands:</strong>
        Leonardo's entire life was shaped by the conviction that understanding and creating
        are inseparable – the stroke threatened precisely the physical tool with which he
        made that understanding visible, without ever touching the understanding itself.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Albert Einstein</a>
        (also SO5w4) lived for over six and a half years with a known, life-threatening
        abdominal aortic aneurysm and kept working almost until his death, refusing to let
        the diagnosis slow him down; Leonardo responded to his own physical limitation with
        the same stance – not withdrawal, but adapting his method while his intellectual
        drive to create remained unchanged. Both cases show the same SO5w4 pattern: putting
        one's own knowledge and work at the world's disposal weighs heavier than one's own
        physical threat. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Illness Portrait of Albert Einstein</a>.</p>
        <p class="vb-intro"><strong>c) Why the creating hand, of all things?</strong>
        For a Social Five with a Four-wing, whose entire strength rested on translating
        insight into visible, shared work, one interpretation suggests itself: precisely
        the physical tool with which he made his knowledge visible to the world became the
        site of the limitation – forcing him to switch to his other, equally practiced hand
        rather than give up. This interpretation is a plausible reading, not a documented
        historical causal link, and will be developed further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Social Five's pattern inevitably leads to a stroke –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Leonardo's case illustrates is a pattern in how a pronounced Social Five with a
        Four-wing tends to handle physical limitation in old age – one of many possible
        interpretations, not a verdict. The corresponding illness picture is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Leonardo did not know his own pattern – the Social Five with a Four-wing reflexively
        puts its knowledge and work at the world's disposal instead of ever recognizing its
        own physical vulnerability as a reason to stop, and he lived out exactly this
        pattern unchanged into his final months of life. Someone who does not recognize
        their own need to keep creating and contributing as a pattern cannot set it aside
        even in the face of their own physical limits.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Five with a Four-wing explains much about the course of
        <strong>Leonardo's</strong> own illness: a man whose entire strength rested on
        translating insight into visible work would not even let a paralyzed hand stop
        him – the octopus that lost one of its eight arms and kept drawing anyway, until
        the very last breath.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-leonardo-da-vinci", label:"Portrait: Leonardo da Vinci (SO5w4) – universal genius"},
        {route:"krankheitsportraets-albert-einstein", label:"Illness Portrait: Albert Einstein (SO5w4) – the same pattern of unrestrained creation"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function marieCurieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marie-curie-portrait.jpg" alt="Marie Curie – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Marie Curie</p>
        <p class="krim-portrait-typ">SE5w6 · Self-Preservation Type 5 with Six-wing · 1867–1934</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Owl</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Animal correspondence: Owl" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marie Curie</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-marie-curie">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and her type structure in general.
        This page deals exclusively with a chapter barely touched on there in
        passing: decades of
        unprotected work with radioactive materials – no gloves, no lead shielding, radium
        samples carried in her coat pocket because the glow in the dark fascinated her. In
        1934 Curie died of aplastic anemia, a direct consequence of this radiation exposure.
        Her lab notebooks are still so radioactive today that they are kept in lead-lined
        boxes and can only be examined wearing protective clothing.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Curie</strong> is classified as the <strong>Self-Preservation Five with
        Six-wing</strong> – the same subtype as
        <a href="javascript:void(0)" data-route="beruehmte-charles-darwin">Charles Darwin</a>
        in this Compass. Naranjo called the Self-Preservation Five the <em>Refuge</em>: safety
        arises from retreating into a self-controlled space in which knowledge and competence
        form the actual basis of existence – for Curie, the laboratory in which she quite
        literally lived. The Six-wing adds loyal devotion to a cause larger than oneself – for
        Curie, the conviction that her research served humanity, whatever the cost.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Precise, tireless, incorruptible:</strong>
        Curie's gaze went to what others overlooked – invisible radiation hidden in tons of
        pitchblende, sought by manual labor over years. That is the Five's gaze: truth doesn't
        sit on the surface but must be laboriously uncovered.</p>
        <p class="vb-intro"><strong>b) Watchful outward, blind inward:</strong>
        For measurement errors, imprecise data, and methodological weaknesses Curie had no
        tolerance – but for the advancing warning signs of her own body (exhaustion, scarred
        fingers, cataracts) her gaze stayed conspicuously unfocused.</p>
        <p class="vb-intro"><strong>c) Reserved as soon as fame begins:</strong>
        Grand appearances, honors, public stages – Curie avoided them wherever possible; her
        gaze belonged to the lab, not the audience. Typical Self-Preservation Five: attention
        as distraction from the actual work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Asceticism as a way of life:</strong>
        Already as a student in Paris, Curie reduced food, heating, and comfort to the bare
        minimum to afford her studies – a frugality she kept for life, long after it was
        financially necessary.</p>
        <p class="vb-intro"><strong>b) Competence rather than relationship as an anchor of safety:</strong>
        It wasn't recognition or belonging that grounded Curie, but precise knowledge of her
        field – a foundation no one could take from her.</p>
        <p class="vb-intro"><strong>c) The lab as refuge:</strong>
        A makeshift shed became, for years, her actual home – a self-controlled space the
        outside world and its demands could not reach.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Loyalty beyond death:</strong>
        After Pierre Curie's death in 1906, Marie took over not only his professorship but
        continued their joint research with the same persistence – the Six-wing as a bond that
        turns loss into continuation.</p>
        <p class="vb-intro"><strong>b) Service to a cause larger than oneself:</strong>
        The mobile X-ray units in World War I, the training of roughly 150 X-ray assistants –
        knowledge was consistently translated into concrete benefit for others, not hoarded as
        private merit.</p>
        <p class="vb-intro"><strong>c) Stubbornness where caution was warranted:</strong>
        Curie and her contemporaries understood the dangers of radioactive radiation only
        incompletely – yet even as early suspicions arose, she barely changed her working
        methods. That is the flip side of the Refuge: someone who is self-sufficient also
        needs no warning from outside.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) An unreachable role model:</strong>
        As the only person in history with Nobel Prizes in two different sciences, Curie still
        looks like an exception today – an effect she built entirely through quiet, tireless
        persistence.</p>
        <p class="vb-intro"><strong>b) Reserved, yet unbending:</strong>
        Curie avoided the big stage but wouldn't be swayed on substance – a combination that
        often makes Self-Preservation Fives seem easy to underestimate, until their persistence
        proves stronger than louder resistance.</p>
        <p class="vb-intro"><strong>c) Trust earned through demonstrable achievement:</strong>
        Her standing grew not from charisma but from results that could not be argued away –
        the Five's gaze demands this provability of itself before expecting it of others.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Sparing with her own energy – except in the lab:</strong>
        Curie lived frugally in nearly everything, yet spent herself in the lab without
        discernible limit – energy flowed to where actual safety was located.</p>
        <p class="vb-intro"><strong>b) Fusion of person and research:</strong>
        Her identity was inseparable from her work – a distinction between "Marie Curie" and
        "the research" made no sense to her.</p>
        <p class="vb-intro"><strong>c) Retreat instead of recovery:</strong>
        Rather than resting when exhausted, Curie withdrew even deeper into the lab – a
        movement that gave short-term safety but contributed, long-term, to her own
        destruction.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) The invisible poison:</strong>
        Curie carried radium samples in her coat pocket because the glow in the dark fascinated
        her, kept contaminated notebooks unprotected, and worked for decades without gloves or
        lead shielding. Her fingers were scarred and burned, she developed cataracts and
        chronic exhaustion – symptoms she consistently attributed to hard work, not to the
        radiation whose danger she herself had helped to research.</p>
        <p class="vb-intro"><strong>b) Self-denial becomes denial of illness:</strong>
        The same ascetic stance with which Curie, as a student, went without heating and
        adequate food, she later applied unconsciously to her symptoms of illness: her own
        body was secondary as long as the work continued. The Self-Preservation Five's Refuge
        protects against the outside world – but it offers no protection against dangers one
        carries into that refuge oneself.</p>
        <p class="vb-intro"><strong>c) Loyalty to the cause over her own body:</strong>
        The Six-wing bound Curie to the conviction that her research served humanity – a duty
        that weighed heavier than her own safety. She kept researching even as her health
        visibly declined, until she died in 1934 at a sanatorium in the French Alps of
        aplastic anemia.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-charles-darwin">Charles Darwin</a>
        (SE5w6) also lived for decades with a chronic, never clearly diagnosed illness,
        retreated ever deeper into his self-controlled refuge at Down House because of it, and
        hardly let it keep him from his research work. Both cases show the same SE5 pattern:
        retreat into one's own competence protects effectively against the world – but it also
        makes it easier to overlook one's own physical warning signs, because attention to the
        body is experienced as a distraction from the actual cause.</p>
        <p class="vb-intro"><strong>e) Why the bone marrow, of all places?</strong>
        Aplastic anemia means the bone marrow stops producing new blood cells – the body
        literally shuts down its own resource production. For a Self-Preservation Five, whose
        entire strategy consists of getting by on minimal consumption and hoarding resources
        rather than continually renewing them, this reads like a physical intensification of
        her own core pattern: where the SE5 economizes psychologically so as not to run out,
        the organ that should have kept supplying her ultimately failed Curie of all things.
        This reading is explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>f) Context without determinism:</strong>
        This does not mean that the Self-Preservation Five's pattern inevitably leads to
        radiation damage or similar conditions – <strong>every person can develop any illness,
        regardless of subtype.</strong> What Curie's case can show is a pattern that stands out
        again and again in practice wherever total devotion to one's own work is present – one
        possible explanation among many, not a verdict. The corresponding condition will be
        developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Curie did not know her own pattern – the miserliness of the self-preservation Five led her, for decades, to forgo protective measures rather than divert resources and time from the research itself. Someone who does not recognize their own thrift toward their own safety underestimates the very danger that thrift creates.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Curie's</strong> Self-Preservation Five with Six-wing can be read once more in her
        own illness: radical frugality, a refuge built of knowledge and
        competence, and loyalty to her cause that outweighed every warning sign from her own
        body. The owl, which sees in the dark what others overlook, ended up overlooking the
        one thing closest to her – the radiation she herself had made visible to the world.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-marie-curie", label:"Portrait: Marie Curie (SE5w6) – life's work"},
        {route:"beruehmte-charles-darwin", label:"Portrait: Charles Darwin (SE5w6)"},
        {route:"krankheitsportraets-charles-darwin", label:"Illness Portrait: Charles Darwin (SE5w6)"},
        {route:"krankheitsportraets-sigmund-freud", label:"Illness Portrait: Sigmund Freud (SO6w5)"},
        {route:"krankheitsportraets-spinoza", label:"Illness Portrait: Baruch de Spinoza (SP5w6) – fatal consequence of his own craft"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se5", label:"Subtype Profile SE5"},
      ])}
    </div>
  `);
}

export function mrTKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mr-t-portrait.jpg" alt="Mr. T – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mr. T</p>
        <p class="krim-portrait-typ">SP2w3 · Self-Preservation Type 2 with Three-wing · born 1952</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Mr. T</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-mr-t">portrait under Famous Personalities</a>
        in this Compass – that page covers his path from bodyguard to film star and wrestling
        icon. This page focuses on a chapter only briefly touched on there: in September 1995,
        at the height of his fame, Mr. T was diagnosed with a rare T-cell lymphoma, a cancer of
        the blood. He underwent radiation and chemotherapy, withdrew noticeably from public life
        for several years, and later became an advocate for cancer awareness and matters of
        faith in dealing with serious illness.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Mr. T</strong> is classified as the <strong>Self-Preservation Type 2 with
        Three-wing</strong>. Naranjo called the Self-Preservation Two <em>Me First</em>: caregiving
        begins with one's own physical base and closest circle before extending outward. The
        Three-wing gives that caregiving an unmistakable, public image – for Mr. T, first as a
        paid bodyguard, later as a mountain of muscle with a mohawk and gold chains, whose
        physical presence itself became a brand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A small wound on the ear:</strong>
        In September 1995, Mr. T noticed a small, non-healing wound on his ear while removing a
        diamond earring – on exactly the spot that, through his signature earrings and chains,
        was already part of his unmistakable public image.</p>
        <p class="vb-intro"><strong>b) Two weeks before seeing a doctor:</strong>
        Only two weeks later did he see a doctor, was referred to a dermatologist, and after a
        biopsy received the diagnosis of a rare T-cell lymphoma – a cancer of the blood.</p>
        <p class="vb-intro"><strong>c) A name that fit the illness:</strong>
        Mr. T later commented on the diagnosis with dry wit – "cancer with my name on it,
        personalized cancer" – an early public reaction that didn't abandon his caregiving role,
        but immediately met it with humor.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Radiation and chemotherapy:</strong>
        To treat the T-cell lymphoma, Mr. T underwent radiation and chemotherapy, accompanied by
        CT scans and a bone marrow biopsy to monitor the illness's progress.</p>
        <p class="vb-intro"><strong>b) Withdrawal from public life:</strong>
        After the diagnosis, Mr. T withdrew noticeably from public life for several years – a
        break from the previously constant, high-visibility presence with which he had carried
        films, television series, and wrestling appearances.</p>
        <p class="vb-intro"><strong>c) Faith as a sustaining force:</strong>
        Mr. T later spoke publicly about his trust in God being tested "like Job's" through the
        illness – a religious interpretation that helped him get through treatment without fully
        giving up his own strength.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Decades in remission:</strong>
        Mr. T remained in remission for many years after treatment and has publicly described
        himself as a cancer survivor ever since his recovery – a status he does not hide, but
        actively builds into his later public role.</p>
        <p class="vb-intro"><strong>b) Hospital visits to sick children:</strong>
        Since his own illness, Mr. T has regularly visited children with cancer in hospitals to
        give them courage – the same protective function his career as a bodyguard once began
        with, now turned toward the most vulnerable.</p>
        <p class="vb-intro"><strong>c) From entertainer to spiritual speaker:</strong>
        After the illness, his public appearances increasingly shifted toward talks with a
        faith-driven, motivational content, in which he openly shares his beliefs and his
        illness story rather than relying solely on earlier film roles.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A second public image alongside the first:</strong>
        Alongside the mountain of muscle with a mohawk from <em>Rocky III</em> and <em>The
        A-Team</em>, the illness created a second, quieter public image: the devout cancer
        survivor who gives other patients courage.</p>
        <p class="vb-intro"><strong>b) A reduced but not ended career:</strong>
        Mr. T remained occasionally present in film, television, and reality formats after his
        withdrawal, though at a noticeably slower pace than in the years before 1995 – the
        illness changed the tempo of his career without ending it.</p>
        <p class="vb-intro"><strong>c) A brand enriched by an added layer of meaning:</strong>
        The mohawk and gold chains remained his signature, but the illness added a second layer
        to them – no longer only a symbol of physical strength, but also a symbol of surviving a
        life-threatening illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Caregiving that had to reorient itself:</strong>
        For a Self-Preservation Two whose core is caring for one's own close circle, his own
        vulnerability meant a shift: instead of protecting other bodies as he once did as a
        bodyguard, Mr. T had to learn to recognize his own body as needing protection.</p>
        <p class="vb-intro"><strong>b) The Three-wing as the drive to turn illness into a visible testimony:</strong>
        Rather than keeping the illness private, Mr. T made it a public matter – typical of the
        Three-wing, which turns even a difficult chapter into a visible, recognizable statement
        meant to reach others.</p>
        <p class="vb-intro"><strong>c) Withdrawal as a temporary, not permanent, response:</strong>
        The several-year withdrawal from public life was not a final goodbye but a period of
        recovery, after which the underlying orientation toward caregiving – now with a new
        focus on sick children and matters of faith – moved back into the foreground.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b4832e 10%, var(--paper));border:1.5px solid #b4832e;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:#7a5510;">Parallel: The Body as a Stage for Suffering – Frida Kahlo (SP2w3)</h3>
        <p class="vb-intro">Among the SP2w3 illness portraits in this Compass,
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida Kahlo</a>
        offers a parallel that truly holds up: both made their own illness-marked body a
        publicly visible part of their art or public persona, rather than hiding it. For Kahlo,
        the injured body became the central motif of her paintings; for Mr. T, the body
        previously staged as a pure source of strength – mohawk, muscles, chains – was publicly
        acknowledged as vulnerable after the diagnosis, without ever ceasing to be shown. In both
        cases, the body remained at the center of public self-presentation; only its meaning
        shifted – from a pure symbol of strength to a symbol of survival.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Throughline</h3>
        <p class="vb-intro"><strong>a) An illness at exactly the site of his own trademark:</strong>
        The first visible lesion appeared, of all places, on his ear – the very body part that,
        through conspicuous jewelry, was already part of Mr. T's unmistakable public image. The
        body with which he had once protected others and staged himself as an invulnerable icon
        became the source of his own threat.</p>
        <p class="vb-intro"><strong>b) Withdrawal to rebuild his own base:</strong>
        Rather than negotiating the illness publicly while it was still acute, Mr. T withdrew
        first – a pattern typical of the Self-Preservation Two: secure one's own physical and
        family base first, before turning outward again.</p>
        <p class="vb-intro"><strong>b) Why, of all things, an illness that called his own body into question as a shield?</strong>
        For a Self-Preservation Two with a Three-wing, whose entire public identity rests on
        physical strength and an unmistakable outward image, a cancer that attacked exactly that
        body can be read as an intensification of his own life pattern: the very instance that
        once protected others and presented itself as untouchable had to learn to stop hiding
        its own vulnerability and instead – in the public, Three-wing-typical format – make it
        visible. This interpretation is explored further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>c) Placing this without determinism:</strong>
        This does not mean the pattern of the Self-Preservation Two with a Three-wing inevitably
        leads to cancer – <strong>anyone can get any illness, regardless of subtype.</strong> A
        T-cell lymphoma has its own complex medical causes that have nothing to do with a
        person's character profile. What Mr. T's case illustrates is a pattern in how a
        pronounced Self-Preservation Two with a Three-wing tends to handle their own illness –
        one of many possible interpretations, not a judgment. The corresponding illness will be
        developed further, over time, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Like most people, Mr. T did not consciously know his own Enneagram pattern. Without that
        knowledge, he spent years living out a physical self-presentation that left no room for
        visible weakness – from bodyguard to film star to wrestler, his body was consistently
        both proof and shield at once. Only his own cancer diagnosis forced him to interrupt that
        role and, for the first time, publicly allow his own vulnerability. Someone who
        recognizes their own pattern can consciously counteract it; someone who doesn't repeats
        it until the body sets the boundary the person never set themselves.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Two with a Three-wing is confirmed once more in <strong>Mr. T's</strong>
        response to his own cancer diagnosis: withdrawal first, to secure his own base, then a
        deliberately public second chapter as a devout cancer survivor and advocate for sick
        children. The hippopotamus that once protected other bodies and staged its own as
        invulnerable had to redefine its strength – not as the absence of vulnerability, but as
        the ability to survive it and let others share in that survival.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-mr-t", label:"Portrait: Mr. T (SP2w3) – life's work"},
        {route:"krankheitsportraets-frida-kahlo", label:"Illness Portrait: Frida Kahlo (SP2w3) – the body as visible testimony"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SP2"},
      ])}
    </div>
  `);
}

export function nusratFatehAliKhanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nusrat-fateh-ali-khan-portrait.jpg" alt="Nusrat Fateh Ali Khan" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nusrat Fateh Ali Khan</p>
        <p class="krim-portrait-typ">SE2w3 · Self-Preservation Type 2 with Three-wing · 1948–1997</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Nusrat Fateh Ali Khan</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-nusrat-fateh-ali-khan">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only briefly touched on there: a
        progressive, long-unspoken diabetes condition that ended in August 1997 with his
        sudden death at only 48 years of age.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Nusrat Fateh Ali Khan</strong> is classified as the <strong>Self-Preservation
        Two with Three-wing</strong>. Naranjo described the SE2 as <em>Me First</em> – the
        subtype who secures her own survival and that of those closest to her before turning
        further outward. The Three-wing adds a further, unconditional drive: proving one's own
        indispensability through visible achievement – a pattern that can be traced right into
        his final years, marked by hundreds of albums and countless live performances.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A body in service of the family tradition from the start:</strong>
        As a child, Khan already took on the physically demanding role of tabla player in his
        father's group, before becoming a singer himself after his father's early death – his
        body was, from the beginning, a tool in service of a task larger than himself.</p>
        <p class="vb-intro"><strong>b) Hours-long, breathless performances as the norm:</strong>
        Khan's reputation rested in part on minutes-long, powerful improvisations and a vocal
        range spanning more than three octaves – an output that pushed his body to the edge of
        its capacity for decades, without rest ever being treated as a necessary part of the
        work.</p>
        <p class="vb-intro"><strong>c) A weight that grew alongside his fame:</strong>
        As his international success grew, so did Khan's body weight, reaching roughly 300
        pounds – a development that became publicly visible in the 1990s without visibly
        slowing his workload.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Diabetes as an underestimated underlying condition for years:</strong>
        Khan suffered from diabetes over an extended period, which interacted with his
        significant weight gain and increasingly impaired his kidney function – a chronic
        condition that received little attention in the shadow of his public success.</p>
        <p class="vb-intro"><strong>b) A discography that never paused:</strong>
        Alongside his progressing illness, new albums and collaborations kept appearing year
        after year – from Peter Gabriel's Real World label to film-score contributions for
        Hollywood productions – a workload that showed no regard for his own state of health.</p>
        <p class="vb-intro"><strong>c) Dialysis twice a week as a last resort:</strong>
        Once his kidneys could no longer withstand the diabetes, Khan depended in his final
        years on dialysis treatment twice a week just to keep his kidney function going at
        all.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Features</h3>
        <p class="vb-intro"><strong>a) A journey toward rescue that came too late:</strong>
        On August 11, 1997, Khan was traveling from Lahore to Los Angeles, where a kidney
        transplant had been arranged – but already in London he had to be hospitalized with
        acute kidney and liver failure.</p>
        <p class="vb-intro"><strong>b) Contaminated dialysis as an additional, fatal factor:</strong>
        Doctors at Cromwell Hospital in London held a hepatitis infection partly responsible for
        the deterioration of his condition – likely contracted through inadequately sterilized
        dialysis equipment during his treatment in Pakistan.</p>
        <p class="vb-intro"><strong>c) Death on August 16, 1997:</strong>
        Five days after being admitted, Nusrat Fateh Ali Khan died at the age of 48 from acute
        cardiac arrest, a direct consequence of his combined kidney and liver failure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Picture</h3>
        <p class="vb-intro"><strong>a) An illness that received little public attention for years:</strong>
        Unlike many other illness stories in this Compass, Khan's diabetes was barely discussed
        publicly during his lifetime – it remained, as it does for many people with this common
        condition, largely hidden until his body could no longer compensate.</p>
        <p class="vb-intro"><strong>b) Two reinforcing disease processes:</strong>
        Unlike a single, clearly delineated illness, two processes converged in Khan's case: the
        slow, years-long destruction of kidney function through diabetes, and an acute
        hepatitis infection caused by the treatment itself – a combination that finally
        overwhelmed an already weakened body.</p>
        <p class="vb-intro"><strong>c) Not a short illness, but a development drawn out over years:</strong>
        Even though the acute collapse in August 1997 unfolded quickly, it rested on a
        metabolic condition that had progressed, untreated, for years – not a sudden misfortune,
        but the endpoint of a long development.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Peak performance despite a body that had long been warning him:</strong>
        That Khan kept up a workload of hundreds of albums and countless live performances into
        his final years, even as his body increasingly depended on dialysis, shows the endurance
        of the SE2w3 at its most relentless.</p>
        <p class="vb-intro"><strong>b) A succession secured even while he was still alive:</strong>
        Already before his death, Khan began training his nephew Rahat Fateh Ali Khan as his
        successor – the same care for the continuity of the family tradition with which his own
        career had once begun at his father's funeral extended even into his own illness.</p>
        <p class="vb-intro"><strong>c) The hippopotamus that defended its territory to the point of total exhaustion:</strong>
        The SE2w3's energy remained, to the very end, directed at the same drive that shaped
        Khan's entire life: keeping a six-hundred-year-old tradition alive, never letting it
        rest, even as his own body had long since reached its limits.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A metabolic disease that grew alongside his success:</strong>
        Khan's diabetes developed in parallel with his international breakthrough in the late
        1980s and 1990s – the greater the reach of his performances, the less room seemingly
        remained for his own health.</p>
        <p class="vb-intro"><strong>b) Dialysis as a symbol of care that never turned inward:</strong>
        Twice a week, his own blood had to be artificially cleaned while he kept singing for an
        audience that needed him – an inversion that mirrors the SE2's core pattern almost
        literally: caring for others a whole life long, until one's own body literally needs
        outside help just to function.</p>
        <p class="vb-intro"><strong>c) The journey toward rescue as a final, tragic irony:</strong>
        That Khan collapsed on the very journey toward a kidney transplant that might have given
        him more years makes the story especially bitter – rescue was within reach, but his body
        had no reserves left to reach it.</p>
        <p class="vb-intro"><strong>d) Why the kidneys, of all organs?</strong>
        For a Self-Preservation Two with a Three-wing, whose entire life was governed by the
        question of how to secure her own survival through ever new, visible proof of her
        indispensability, one interpretation suggests itself: the kidney is the organ that
        filters, balances, and detoxifies in silence – a function no one notices as long as it
        works. A system that never learned to grant itself recovery ultimately lost the very
        ability to care, quietly, for its own balance, with which it had cared for others a
        whole life long.</p>
        <p class="vb-intro"><strong>e) A framework, not a determinism:</strong>
        This does not mean that the Self-Preservation Two's pattern inevitably leads to kidney
        disease or diabetes – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Khan's case illustrates is a pattern that recurs in practice around the need to
        secure one's own survival through ever new proof – one of many possible explanations,
        not a verdict. The corresponding disease pattern is being developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Khan did not know his own pattern – the self-preservation Two with Three-wing notoriously puts its own needs behind those of others, and that is exactly what let him leave a progressing diabetes untreated for years while singing tirelessly for his audience. Someone who does not recognize their own habit of deferring their own needs notices the exhaustion only once the body finally fails.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Two with Three-wing explains much of the course of
        <strong>Nusrat Fateh Ali Khan's</strong> own illness: a body that served a six-hundred-
        year-old family tradition for decades and never learned to offer itself the same care
        it gave an entire audience – until, in August 1997, on the way to its own rescue, it
        could give no more. The hippopotamus that defended its territory to the very last
        second, even as its own strength had long been exhausted.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-nusrat-fateh-ali-khan", label:"Portrait: Nusrat Fateh Ali Khan (SE2w3) – Life's Work"},
        {route:"krankheitsportraets-wolfgang-amadeus-mozart", label:"Illness Portrait: Wolfgang Amadeus Mozart (SE2w3)"},
        {route:"krankheitsportraets-frida-kahlo", label:"Illness Portrait: Frida Kahlo (SE2w3) – the same refusal to step back"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SE2"},
      ])}
    </div>
  `);
}

export function richardRamirezKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/richard-ramirez-portrait.jpg" alt="Richard Ramírez" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Richard Ramírez</p>
        <p class="krim-portrait-typ">SP3w4 · Sexual Type 3 with Four-wing · 1960–2013</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Peacock</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Animal correspondence: Peacock" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Richard Ramírez</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="kriminalpsychologie-richard-ramirez">criminal-psychology portrait</a>
        – that page covers his murder spree as the "Night Stalker" and his deliberate
        self-mythologizing. This page goes deeper into a chapter mentioned there only in
        passing: a diagnosis of B-cell lymphoma, a years-long illness on death row, and a
        death in 2013 before his execution could be carried out.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Ramírez</strong> is assigned to the <strong>Sexual Type 3 with Four-wing</strong>.
        Sexual Three wants to be unforgettable; the Four-wing makes darkness and uniqueness
        central to the self-image. This same need to remain an indelible figure also
        determined how he faced his fatal illness on death row.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis of B-cell lymphoma in custody:</strong>
        After years on death row at San Quentin State Prison, Ramírez was diagnosed with
        B-cell lymphoma, a malignant disease of the lymphatic system.</p>
        <p class="vb-intro"><strong>b) Transfer to a prison medical facility:</strong>
        As the illness progressed, he was moved to the medical unit of Marin County Jail in
        Greenbrae, where terminally ill inmates were treated.</p>
        <p class="vb-intro"><strong>c) Progressive decline over months:</strong>
        The illness ran its course over an extended period, with a visible physical decline
        that stood in sharp contrast to his final public appearance in the courtroom.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Almost no public reporting on his condition:</strong>
        Unlike his staged demeanor during the trial, only a few details emerged from the
        period of his illness.</p>
        <p class="vb-intro"><strong>b) Continued contact with his wife:</strong>
        Ramírez had been married to Doreen Lioy since 1996, who he met during the trial;
        available reports indicate contact with her continued until the end, though details
        of the relationship in his final years are sparsely documented.</p>
        <p class="vb-intro"><strong>c) No known public appearances after the diagnosis:</strong>
        After decades on death row, during which he at times still gave interviews, there are
        no known further public statements from the actual illness period.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Nearly three decades waiting for execution:</strong>
        Ramírez had been on death row since his 1989 sentencing without the execution taking
        place – California's lengthy appeals process effectively gave him decades, during
        which the illness eventually caught up with him.</p>
        <p class="vb-intro"><strong>b) Death preceded the execution:</strong>
        He died before his death sentence was ever carried out – a fact observers at the time
        explicitly noted as a contrast to the decades-long image he had cultivated as the
        "immortal" Night Stalker.</p>
        <p class="vb-intro"><strong>c) Death on June 7, 2013, in Greenbrae, California:</strong>
        Richard Ramírez died at age 53 from the effects of his lymphoma – almost 28 years
        after the end of his murder spree.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A quiet death after a loud career:</strong>
        The man who flashed the victory sign in court and displayed the pentagram on his palm
        died without comparable staging – a sharp contrast to his public self-image.</p>
        <p class="vb-intro"><strong>b) Little media attention for the final phase:</strong>
        Unlike the extensive media frenzy around his trial and conviction, his actual death
        drew comparatively little immediate coverage of his final months.</p>
        <p class="vb-intro"><strong>c) A myth that outlived the person:</strong>
        His name remained present in criminal history – as a symbol, a cultural reference –
        while the person himself died in relative silence from an illness that had nothing to
        do with the iconography he had cultivated.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The peacock whose wheel could no longer unfold:</strong>
        The same search for a distinctive, unforgettable image that shaped Ramírez's entire
        public demeanor found no room in the illness – a lymphoma offers no stage.</p>
        <p class="vb-intro"><strong>b) When the sexual Three under chronic stress becomes a Nine:</strong>
        The decades of isolation on death row, compounded by the progressing illness, show a
        pattern consistent with the stress point of SX3 described in his own portrait: the
        Nine, with its numbing and dissociation. Under chronic pressure, a person increasingly
        moves along their stress line toward their stress point. The largely public silence
        of his final years – after decades of deliberate self-presentation – resembles the
        withdrawn inner absence of its stress point more than the impact-driven presence of
        the core type – while the core type itself, SX3w4, remained unchanged.</p>
        <p class="vb-intro"><strong>c) No new myth built from the illness itself:</strong>
        Unlike earlier phases of his life, when he controlled every detail of his appearance,
        there is no indication that he tried to make even his illness part of his
        self-presentation.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that slipped out of the staging:</strong>
        Ramírez's entire public life was shaped by the deliberate construction of an image
        that bound fear and attention alike – the lymphoma was a threat that escaped every
        form of control and staging.</p>
        <p class="vb-intro"><strong>b) An illness with no symbolic power for his own myth:</strong>
        A man who deliberately chose every detail of his appearance – clothing, gestures,
        symbols – died of an illness that fit none of the layers of meaning he had cultivated
        – a quiet end without a script.</p>
        <p class="vb-intro"><strong>c) Why the lymphatic system, of all places?</strong>
        For a sexual Three with Four-wing whose entire power rested on intense, exclusive
        attachment to a single fixed gaze, one interpretation suggests itself: precisely the
        system that runs invisibly through the body and is meant to protect it from within
        became the site of decay – a counter-image to his outward-facing, highly visible
        self-presentation. This interpretation is a plausible reading, not a documented
        historical causal link, and is developed further in this Compass's psychosomatics
        register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the sexual Three inevitably leads to lymphatic
        cancer – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Ramírez's case shows is a pattern in how a pronounced sexual Three with Four-wing
        repeatedly deals with a fatal diagnosis – one possible reading among many, not a
        verdict. The corresponding illness profile is gradually being developed in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Ramírez did not know his own pattern – the sexual Three with Four-wing reflexively
        searches for an image that remains indelible rather than ever confronting its own
        mortality, and he lived out exactly this drive unchanged for decades, until the
        illness finally took from him control over his own narrative. Whoever does not
        recognize their own search for immortality through image as a pattern cannot set it
        aside even in the face of their own mortality.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Three with Four-wing explains much about the course of <strong>Ramírez's</strong>
        own illness: a man who spent decades making himself into an indelible image
        eventually died of an illness that entirely escaped his staging – the peacock whose
        wheel, in the end, could no longer unfold.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The type
        assignment is a psychological hypothesis, not a historical verdict. Richard Ramírez
        was found guilty in 1989 on 13 counts of murder and sentenced to death. The Enneagram
        explains, it does not justify.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"kriminalpsychologie-richard-ramirez", label:"Criminal Psychology: Richard Ramírez (SP3w4) – the Night Stalker"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx3", label:"Subtype Profile SP3"},
      ])}
    </div>
  `);
}

export function ruthBaderGinsburgKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ruth-bader-ginsburg-portrait.jpg" alt="Ruth Bader Ginsburg – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ruth Bader Ginsburg</p>
        <p class="krim-portrait-typ">SX8w9 · Sexual Type 8 with Nine-wing · 1933–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Crocodile</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Animal correspondence: Crocodile" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ruth Bader Ginsburg</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-ruth-bader-ginsburg">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general.
        This page deals exclusively with a chapter that gets only a brief mention
        there: over more than two decades, Ginsburg survived four cancer diagnoses in three very different organs – colon cancer in
        1999, pancreatic cancer in 2009, lung cancer in 2018, and pancreatic cancer again in
        2019/2020 – without ever voluntarily giving up her seat on the Supreme Court for a
        single day. She died in office in 2020, weeks before a presidential election whose
        outcome would decide her successor.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Ginsburg</strong> is classified as the <strong>Sexual Eight with
        Nine-wing</strong>. Naranjo called the sexual Eight <em>Possession</em>: she wants not
        merely to win but the complete, non-negotiable bond with what she stands for. The
        Nine-wing adds patience and stamina – the SX8w9 does not strike immediately like the
        SX8w7; she waits until the moment is complete, then holds on to what she has achieved
        with a persistence hardly shaken even by serious illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Precise, undeterred by resistance:</strong>
        Ginsburg's gaze went to what mattered, undistracted by noise or resistance – the
        crocodile's gaze, which waits patiently and then strikes with absolute precision.</p>
        <p class="vb-intro"><strong>b) Unshakeable outward, fighting inward:</strong>
        For years, Ginsburg sat in the courtroom shortly after chemotherapy sessions, without
        her illness becoming publicly visible. Her gaze betrayed nothing of what her body was
        going through.</p>
        <p class="vb-intro"><strong>c) Watchful of any sign of losing her seat:</strong>
        Political pressure to voluntarily resign, to make way for a Democratic successor,
        bounced off her – typical sexual Eight: one's own territory is not vacated out of
        strategic caution but defended until it is no longer possible to hold it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Four cancers, one seat:</strong>
        Colon cancer, pancreatic cancer twice, lung cancer – over two decades, the illness kept
        returning in ever new forms. Each time, Ginsburg responded with treatment, recovery,
        and a return to the bench, never with retreat.</p>
        <p class="vb-intro"><strong>b) Physical training as a statement:</strong>
        Ginsburg's publicly known, intense fitness routine of push-ups and planks well into old
        age became a symbol of her physical unyieldingness – a deliberately cultivated
        counter-image to the fragility others assumed because of her age and illness.</p>
        <p class="vb-intro"><strong>c) Work without interruption:</strong>
        Even after surgeries and during ongoing chemotherapy, Ginsburg missed hardly any oral
        argument – illness was treated as a circumstance accompanying the work, not a reason to
        interrupt it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The refusal to vacate the field:</strong>
        Despite years of political pressure to retire during the Obama administration to secure
        a Democratic successor, Ginsburg stayed on the bench – a decision that became the most
        controversial of her career after her death in 2020.</p>
        <p class="vb-intro"><strong>b) Endurance instead of haste, thanks to the Nine-wing:</strong>
        Where an SX8w7 might have reacted impulsively, Ginsburg processed each new diagnosis
        with the same patient persistence she had spent decades waiting for the right legal
        cases.</p>
        <p class="vb-intro"><strong>c) Public reticence, private consequence:</strong>
        Ginsburg rarely spoke publicly at length about her illnesses – she let her presence on
        the bench itself speak, rather than seeking sympathy or attention for her health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Appearing unshakeable despite repeated illness:</strong>
        To the public, Ginsburg remained, until shortly before her death, the unbending
        "Notorious RBG" – an image her own reticence about the severity of her illnesses
        substantially helped build.</p>
        <p class="vb-intro"><strong>b) Respect earned through demonstrated constancy:</strong>
        Precisely because she kept working despite repeated cancer diagnoses, the myth of her
        unshakeability grew – an effect the SX8 creates through sheer perseverance, without
        actively staging it.</p>
        <p class="vb-intro"><strong>c) A succession that became a national question:</strong>
        Her death weeks before the 2020 election triggered one of the most contested judicial
        appointments in US history – evidence of how much political weight her remaining in
        office carried until the very end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Uncompromising self-expenditure for the cause:</strong>
        Ginsburg worked on legal opinions into her final weeks – the SX8 knows little
        self-sparing as long as her own strength lasts for the cause she stands for.</p>
        <p class="vb-intro"><strong>b) Barely any separation of person and office:</strong>
        Her sense of self was inseparable from her role on the Court – stepping down would have
        felt like giving up part of herself.</p>
        <p class="vb-intro"><strong>c) Control over her own body through discipline:</strong>
        The strict fitness regimen was also an attempt to hold on to control that illness kept
        threatening to wrest from her – discipline as an answer to physical vulnerability.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A quarter century in a state of emergency:</strong>
        Colon cancer in 1999, pancreatic cancer in 2009, lung cancer in 2018, pancreatic cancer
        again in 2019 – Ginsburg lived for more than twenty years with the recurring certainty
        that her body might attack her again. Each time, she returned to the bench after
        treatment.</p>
        <p class="vb-intro"><strong>b) Public understatement, private reality:</strong>
        Ginsburg's office usually communicated new diagnoses briefly and factually, often only
        after treatment had already taken place. This controlled information policy resembles
        a pattern found in other holders of power who do not want their position endangered by
        any appearance of weakness.</p>
        <p class="vb-intro"><strong>c) The seat as territory that is not negotiable:</strong>
        Even as her health visibly declined in 2019 and 2020, Ginsburg rejected any thought of
        resignation. For the sexual Eight, territory already won – here, a seat on the highest
        court in the United States – is something to be defended, not voluntarily handed over,
        as long as any strength remains to do so.</p>
        <p class="vb-intro"><strong>d) Why the recurring fight, of all things?</strong>
        Four cancers in three very different organs cannot be narrowed to a single organ
        symbol the way other Illness Portraits in this Compass can – her red thread lies
        elsewhere: in the pattern of repeated invasion and defense itself. Medically speaking,
        cancer is an invasion of the body by its own cells turned foreign and malignant – a
        boundary violation of one's own territory from within. For a sexual Eight, whose entire
        passion revolves around possession, defending boundaries, and the refusal to relinquish
        anything hard-won, it is tempting to read this repeated physical boundary violation as
        an intensification of her own life pattern: Ginsburg met every new diagnosis not with
        withdrawal but with the same stance with which she defended her seat against political
        pressure – territory is not given up, whether the attack comes from outside or from
        within. This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the sexual Eight's pattern inevitably leads to cancer –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Ginsburg's case can show is a pattern that stands out again and again in practice
        wherever uncompromising defense of one's own territory is present – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Ginsburg did not know her own pattern – the sexual Eight holds the position it has taken, whatever the cost, and it was exactly this tenacity that let her survive four cancer diagnoses without voluntarily giving up her seat. Someone who does not recognize their own unyielding nature as a pattern keeps holding on even where yielding would be the healthier path.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Eight with Nine-wing is confirmed once more in <strong>Ginsburg's</strong> own
        illness: four cancers, four returns to the bench, and a refusal to give up
        her own territory that was directed as much against political pressure as against her
        own, repeatedly ill body. The crocodile, who waits patiently and then strikes with
        absolute precision, defended, until the very end, exactly the one territory that
        mattered most to her – until her body itself would no longer allow the defense to
        continue.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ruth-bader-ginsburg", label:"Portrait: Ruth Bader Ginsburg (SX8w9) – life's work"},
        {route:"krankheitsportraets-genesis-p-orridge", label:"Illness Portrait: Genesis P-Orridge (SX8w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx8", label:"Subtype Profile SX8"},
      ])}
    </div>
  `);
}

export function tELawrenceKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-t-e-lawrence-portrait.jpg" alt="T. E. Lawrence" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">T. E. Lawrence (Lawrence of Arabia)</p>
        <p class="krim-portrait-typ">SP4w3 · Self-Preservation Type 4 with Three-wing · 1888–1935</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>T. E. Lawrence</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-t-e-lawrence">portrait under Famous Personalities</a>
        in this Compass – that page covers the desert war, the self-made world-fame myth, and
        his retreat under a false name. This portrait is devoted to a chapter only touched on
        there: his final thirteen years, marked by chronic depression, self-hatred, and what
        biographers have long read as the lasting aftermath of a post-traumatic stress disorder
        following his capture at Deraa in 1917.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Lawrence</strong> is classified as the <strong>Self-Preservation Four with
        Three-wing</strong>. The SE4 does not carry its suffering outward but endures it
        tenaciously and alone – for Lawrence, that meant staying almost entirely silent in
        public about Deraa and instead processing it in a single chapter of his memoir, rewritten
        again and again. The Three-wing, which had earlier made him a co-creator of his own
        heroic myth, reversed direction in these years: instead of continuing to seek
        visibility, Lawrence now worked actively to disappear from public view.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The return from war as rupture, not relief:</strong>
        After the war ended and the Paris Peace Conference of 1919, where Lawrence advocated in
        vain for Arab independence, he withdrew increasingly from public life. Contemporaries
        describe a visibly changed man – more irritable, more restless, unable to find a place
        for himself in the postwar civilian world.</p>
        <p class="vb-intro"><strong>b) The voluntary descent of 1922:</strong>
        At the height of his world fame, Lawrence gave up his officer's rank and enlisted under
        the false name "John Hume Ross" as an ordinary recruit in the Royal Air Force – the
        lowest possible rank, the plainest quarters. For biographers, this step is among the
        clearest early signs of a deep inner crisis he himself never publicly named as illness.</p>
        <p class="vb-intro"><strong>c) The memoir rewritten again and again:</strong>
        Lawrence nearly lost the entire manuscript of "Seven Pillars of Wisdom" at a train
        station in 1919, rewrote it from memory, and revised it fundamentally several more times
        in the following years – a years-long, almost compulsive struggle to find the right
        version of his own war experience.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Thirteen years of sustained depression:</strong>
        Historians describe Lawrence's final thirteen years, from 1922 until his death in 1935,
        as continuously marked by depression, self-hatred, and anxiety – not a passing low point,
        but a sustained psychological state.</p>
        <p class="vb-intro"><strong>b) Symptoms suggestive of post-traumatic stress disorder:</strong>
        Psychiatrist and Lawrence biographer John E. Mack, in his widely cited study "A Prince
        of Our Disorder" (1976), concludes that Lawrence's symptoms – low mood, a shattered
        self-image, emotional withdrawal, heightened vulnerability – match the picture of a
        severe, untreated trauma disorder triggered by the events at Deraa.</p>
        <p class="vb-intro"><strong>c) Public silence alongside literary disclosure:</strong>
        While Lawrence rarely spoke of Deraa in person, he devoted an agonizingly detailed
        chapter to the event in "Seven Pillars of Wisdom" – the only form in which he approached
        the experience at all.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) A self-arranged punishment ritual:</strong>
        From 1923 onward, Lawrence arranged with a fellow serviceman, John Bruce, to be flogged
        at irregular intervals – a ritual he specified in detail himself and continued for
        years. Biographers agree in reading it as self-punishment connected to the humiliation
        he suffered at Deraa.</p>
        <p class="vb-intro"><strong>b) Renouncing income from his own work:</strong>
        The regular edition of "Seven Pillars of Wisdom" (1926) and the abridged "Revolt in the
        Desert" sold well – yet Lawrence donated large parts of the proceeds to charity rather
        than keeping them for himself.</p>
        <p class="vb-intro"><strong>c) The second change of name:</strong>
        After the press exposed him as "John Hume Ross" in 1923, Lawrence switched to the Tank
        Corps, this time under the name "T. E. Shaw" – another attempt to remain invisible under
        a new identity, rather than returning to the public life that had once celebrated him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Retreat to Clouds Hill:</strong>
        In his final years, Lawrence withdrew to a small, deliberately plain cottage called
        Clouds Hill in Dorset – a life of the greatest possible seclusion, far removed from the
        world fame he had once helped create.</p>
        <p class="vb-intro"><strong>b) Visibly aged and marked by self-doubt:</strong>
        Contemporaries who met Lawrence shortly before his death described him as noticeably
        aged, despondent, and plagued by lasting self-doubt – a striking contrast to the
        energetic young officer of the war years.</p>
        <p class="vb-intro"><strong>c) The motorcycle accident as an abrupt end:</strong>
        On May 13, 1935, Lawrence swerved on his motorcycle to avoid two cyclists on a narrow
        road in Dorset, crashed heavily, and died six days later, on May 19, 1935, from his head
        injuries – with no documented connection to his psychological state, but at the end of a
        life shaped by inner crisis since the final years of the war.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Tenacity turned against his own body and psyche:</strong>
        The same SE4 tenacity that enabled Lawrence to endure weeks-long desert marches and the
        loss of his own manuscript turned, in the postwar years, unabated against his own
        psychological wounds – exhaustion and despair were not read as reasons to change course,
        but translated into ever stricter self-discipline and self-punishment.</p>
        <p class="vb-intro"><strong>b) The Three-wing running in reverse:</strong>
        In his younger years, the Three-wing had driven Lawrence to build a glamorous public
        image (see the Famous Personalities portrait). In the postwar years, that same force
        reversed itself: instead of seeking visibility, Lawrence actively worked toward his own
        invisibility – two false names, the lowest ranks, renouncing royalties. The wish to
        control his own image stayed the same; only the goal turned 180 degrees, from maximum
        visibility to maximum disappearance.</p>
        <p class="vb-intro"><strong>c) The flogging as self-judgment made physical:</strong>
        The ritual continued for years with John Bruce can be read as a direct bodily
        translation of the inner verdict the Self-Preservation Four passes on itself in such
        crises: of not having been enough to prevent or survive Deraa unharmed – and turning
        that feeling into a literal, self-chosen punishment.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Parallel within the same subtype – Honoré de Balzac and Lady Diana (SE4w3):</strong>
        As with <a href="javascript:void(0)" data-route="krankheitsportraets-honore-de-balzac">Honoré
        de Balzac</a> and <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady
        Diana</a>, both also SE4w3, Lawrence shows the pattern typical of this subtype: suffering
        is not carried outward loudly, but endured alone and tenaciously for years, while
        composure is maintained outwardly for as long as possible. For Diana the suffering broke
        through as concealed bulimia, for Balzac as continued physical self-exploitation, for
        Lawrence as a self-arranged punishment ritual and retreat under a false name – three
        variants of the same SE4 core movement: endure, rather than give up or ask for help.</p>
        <p class="vb-intro"><strong>b) A crisis that grew over years, not a single collapse:</strong>
        From the first noticeable change in behavior in 1919 to the motorcycle accident in 1935
        runs a continuous line – thirteen years in which the psychological strain never
        resolved, but was redirected again and again into new forms of self-control and
        self-punishment.</p>
        <p class="vb-intro"><strong>c) Two symptoms, one shared origin:</strong>
        The arranged flogging and the two changes of identity into the lowest military ranks can
        be read as two sides of the same coping strategy: retroactively controlling the very
        powerlessness he suffered at Deraa, rather than leaving it unprocessed.</p>
        <p class="vb-intro"><strong>d) Why, of all things, a low, self-condemning mood?</strong>
        For a Self-Preservation Four, who normally carries suffering silently and alone, one
        reading suggests itself: an event like Deraa, which violently broke through his control
        over his own body and dignity from the outside, strikes the SE4 at its most sensitive
        point – and, rather than being shared, is turned into silent self-condemnation. This
        reading is a plausible interpretation, not a documented historical causal link, and is
        explored in more depth in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik/depression">Psychosomatics
        Register entry on depression</a>.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Four's pattern inevitably leads to
        post-traumatic depression – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Lawrence's case can show is a pattern that stands out again and
        again in practice wherever the tendency exists to endure psychological suffering
        silently rather than share it – one possible explanation among many, not a verdict.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Lawrence did not know his own Enneagram pattern – the concept did not yet exist in this
        form during his lifetime. The self-preservation tenacity that had enabled him to endure
        the desert war physically and help build a world-fame myth carried, for him, no built-in
        warning mechanism that could have led him to seek professional help after Deraa in time;
        on the contrary, the psychological trauma was processed in exactly the same logic he had
        applied to physical hardship in war: endure alone, do not complain, show no weakness.
        Someone who does not know their own exhaustion pattern cannot interrupt it in time
        either – for Lawrence, that ended only with his death at the age of 46.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Lawrence's</strong> final thirteen years, the Self-Preservation Four with
        Three-wing shows itself at its most vulnerable: the same man who helped build a
        world-fame myth worked afterward just as determinedly toward his own invisibility – two
        false names, the lowest ranks, a self-arranged punishment ritual. The dove that once
        carried messages across the desert fell almost entirely silent in its own final years –
        until, on May 19, 1935, six days after a motorcycle accident in Dorset, it fell silent
        for good, at the age of 46.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-t-e-lawrence", label:"Portrait: T. E. Lawrence (SE4w3) – life's work"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Illness Portrait: Honoré de Balzac (SE4w3) – same subtype"},
        {route:"krankheitsportraets-lady-diana", label:"Illness Portrait: Lady Diana (SE4w3) – same subtype"},
        {route:"psychosomatik/depression", label:"Psychosomatics Register: Depression"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function willyBrandtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-willy-brandt-portrait.jpg" alt="Willy Brandt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Willy Brandt</p>
        <p class="krim-portrait-typ">SO9w8 · Social Type 9 with Eight-Wing · 1913–1992</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Buffalo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Animal correspondence: Buffalo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Willy Brandt</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-willy-brandt">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there:
        recurring severe depressive episodes throughout his political career, which he kept
        largely private, and the colon cancer that he died from in 1992.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Brandt</strong> is assigned to the <strong>social Type 9 with Eight-Wing</strong>.
        As the Nine's counter-type, the SO9 outwardly maintains direction and activity even
        when inner exhaustion threatens; the Eight-Wing gives the strength to appear decisive
        outwardly even when a collapse loomed in private. Exactly this combination – an
        outwardly unshakeable presence, inwardly recurring severe exhaustion crises – shaped
        the course of his health history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First documented depressive episode around 1958:</strong>
        Biographers describe a first severe depressive crisis during his time as Governing
        Mayor of Berlin, triggered by the political and personal strain of the Berlin
        crisis.</p>
        <p class="vb-intro"><strong>b) A recurring pattern over decades:</strong>
        Further episodes followed during periods of extreme political strain, documented
        among others by his biographer Peter Merseburger, who described in detail Brandt's
        tendency toward phases of deep exhaustion and withdrawal.</p>
        <p class="vb-intro"><strong>c) Never named publicly as such during his lifetime:</strong>
        During his terms in office, these crises were not named publicly as a distinct
        condition but were usually described as temporary exhaustion or illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The most severe crisis linked to the Guillaume affair in 1974:</strong>
        When his close aide Günter Guillaume was exposed as an East German spy in 1974,
        Brandt, according to consistent biographical sources, fell into a deep personal
        crisis that accompanied his resignation as chancellor.</p>
        <p class="vb-intro"><strong>b) Withdrawal instead of public explanation:</strong>
        Rather than naming his own psychological strain publicly, Brandt formally resigned
        over the Guillaume affair – a reason for resignation that could be communicated more
        clearly to the public than his own exhaustion.</p>
        <p class="vb-intro"><strong>c) Colon cancer diagnosed in the early 1990s:</strong>
        In the early 1990s, Brandt was diagnosed with colon cancer, from which he died after
        a short illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Continued political activity despite private crises:</strong>
        Despite the depressive episodes, Brandt remained politically active for decades – as
        SPD chairman until 1987, as chairman of the Socialist International until his
        death.</p>
        <p class="vb-intro"><strong>b) Death on 8 October 1992 in Unkel:</strong>
        Willy Brandt died at age 78 from the effects of colon cancer in his home in Unkel on
        the Rhine.</p>
        <p class="vb-intro"><strong>c) A state funeral with worldwide condolences:</strong>
        His death triggered international mourning – numerous heads of state and government
        attended the state funeral, honoring his significance for postwar German and
        European history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Later biographical examination of the depressive episodes:</strong>
        Only after his death did comprehensive biographies systematically document the
        extent of his recurring depressive crises and place them in the context of his
        political achievements.</p>
        <p class="vb-intro"><strong>b) An image of unbroken strength in public memory:</strong>
        Public memory of Brandt remains dominated to this day by images of decisive
        strength – the Warsaw genuflection, Ostpolitik – while the private crises only
        became visible through later historical research.</p>
        <p class="vb-intro"><strong>c) No mythologizing of his own illness:</strong>
        Neither the depressive episodes nor the cancer illness later became a central part of
        his public legacy – that legacy remains dominated by his political work to this
        day.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The counter-type who kept going even through collapse:</strong>
        The SO9's characteristic reversal of its own inertia into outward activity showed
        precisely in the crisis years: even in phases of deepest exhaustion, Brandt kept
        traveling, negotiating, and speaking rather than openly withdrawing.</p>
        <p class="vb-intro"><strong>b) The Eight-Wing and the facade of unshakeability:</strong>
        The same force that let Brandt withstand public resistance to Ostpolitik also
        ensured that his own psychological exhaustion remained barely visible outwardly –
        strength as armor, even against himself.</p>
        <p class="vb-intro"><strong>c) A formal reason for resignation instead of a personal explanation:</strong>
        That Brandt resigned in 1974 over the Guillaume affair rather than naming his own
        exhaustion publicly fits the SO9w8 pattern: action stays visible, the inner life
        stays hidden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A man of peace who found his own inner peace most rarely:</strong>
        Brandt's entire political work was devoted to reconciliation and outer peace – of
        all things, his own inner peace eluded him for decades through recurring exhaustion
        crises he never named publicly.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        Parallels appear with
        <a href="javascript:void(0)" data-route="krankheitsportraets-wilma-mankiller">Wilma
        Mankiller</a> and
        <a href="javascript:void(0)" data-route="krankheitsportraets-ronald-reagan">Ronald
        Reagan</a> (both also SO9w8): all three held their public office as long as possible
        despite considerable health strain, rather than withdrawing early. All SO9w8s show
        the same pattern: outward activity as a counterforce to their own exhaustion, until
        the body itself sets the limit.</p>
        <p class="vb-intro"><strong>c) Why the colon, of all things, the organ of quiet processing?</strong>
        For a social Nine with an Eight-Wing whose entire life was shaped by turning inner
        exhaustion into outward activity, one interpretation suggests itself: exactly the
        organ that processes unnoticed and without conscious control became the site of his
        final illness – an illness that, much like the earlier depressive episodes,
        progressed for a long time out of sight. This reading is a plausible interpretation,
        not a proven clinical causal link, and will be developed further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the social Nine's pattern inevitably leads to depression or
        colon cancer – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Brandt's case is a pattern in dealing with
        inner exhaustion that keeps recurring in a pronounced social Type 9 with an
        Eight-Wing – one of many possible readings, not a verdict. The corresponding illness
        pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Brandt did not know his own pattern as an Enneagram structure – the social Nine with
        an Eight-Wing reflexively turns inner exhaustion into outward activity instead of
        pausing in time and acknowledging its own limit, and lived out exactly this pattern
        unchanged for decades. Anyone who does not recognize their own tendency to cover
        exhaustion with action instead of naming it as a pattern risks that the body
        eventually forces the pause the will never allowed.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 9 with Eight-Wing explains much about the course of <strong>Willy
        Brandt's</strong> health history: a man whose entire work was devoted to outer peace
        never found his own inner peace for decades – the buffalo who kept moving through
        every crisis, until his body itself finally forced the last, inescapable rest.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-willy-brandt", label:"Portrait: Willy Brandt (SO9w8)"},
        {route:"krankheitsportraets-wilma-mankiller", label:"Illness Portrait: Wilma Mankiller (SO9w8) – same subtype"},
        {route:"krankheitsportraets-ronald-reagan", label:"Illness Portrait: Ronald Reagan (SO9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so9", label:"Subtype Profile SO9"},
      ])}
    </div>
  `);
}

export function brigitteBardotKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-brigitte-bardot-portrait.jpg" alt="Brigitte Bardot" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Brigitte Bardot</p>
        <p class="krim-portrait-typ">SX3w2 · Sexual Type 3 with Two-wing · 1934–2025</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Peacock</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Animal correspondence: Peacock" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Brigitte Bardot</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-brigitte-bardot">portrait under Famous Personalities</a>
        in this Compass – that page covers her film career and her decades of work
        as an animal-rights activist. This portrait is devoted to a chapter barely
        touched on there: her final months, marked by a cancer diagnosis never
        publicly named, two surgeries, and a self-assured way of handling rumors of
        her own death right up until her actual passing on December 28, 2025.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Bardot</strong> is classified as the <strong>Sexual Three with Two-wing</strong>.
        The SX3 makes immediate, magnetic presence its life's task – for Bardot, this
        showed throughout her life as a refusal to hide, even where vulnerability
        became visible. The Two-wing adds a genuine caretaking energy that first
        turned outward toward the animals she rescued, and in her final months turned
        toward her own body – with the same uncompromising directness she had shown
        in public her whole life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades of publicly known back problems:</strong>
        Bardot had suffered from severe back pain for many years, a condition
        repeatedly covered in the press, without her fundamentally scaling back her
        animal-rights work or public appearances because of it.</p>
        <p class="vb-intro"><strong>b) A first serious hospitalization in October 2025:</strong>
        In October 2025, Bardot was hospitalized for what was described as a
        "serious" illness alongside a minor procedure – an event that triggered the
        first widespread public concern about her health.</p>
        <p class="vb-intro"><strong>c) Personally denying circulating death rumors:</strong>
        That same month, the then-91-year-old felt compelled to personally reject
        false reports of her own death that had spread online – an appearance that
        showed how determined she remained, even while seriously ill, to keep control
        of her own public narrative.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A cancer diagnosis without a publicly named type:</strong>
        Her husband Bernard d'Ormale confirmed after her death that Bardot had had
        cancer, but never disclosed the exact diagnosis at any point – a deliberate
        choice for privacy in the middle of a very public life.</p>
        <p class="vb-intro"><strong>b) Two surgeries within a few months:</strong>
        According to reports, Bardot underwent two surgeries related to her cancer,
        while her chronic back pain continued alongside it and further weakened her
        overall condition.</p>
        <p class="vb-intro"><strong>c) Retreating to the familiar grounds of La Madrague:</strong>
        In her final months, Bardot withdrew to her longtime estate La Madrague in
        Saint-Tropez – the same place where she had cared for injured animals for
        decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Death on December 28, 2025, in familiar surroundings:</strong>
        Bardot died at age 91 in her home at La Madrague – not in a clinic, but at
        the place that had been the center of her second, animal-rights-focused life
        for decades.</p>
        <p class="vb-intro"><strong>b) No staged narrative around her own dying:</strong>
        Unlike some public figures, her death was not preceded by an announcement or
        an accompanying campaign – after denying the death rumors in October, she
        remained her usual, uncompromising public self right up until the actual news
        broke in December.</p>
        <p class="vb-intro"><strong>c) Worldwide tributes reaching well beyond film and animal-rights circles:</strong>
        Obituaries honored both her film career of the 1950s and 60s and her decades
        of work for animals – two chapters of her life that carried equal weight in
        public memory.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A legacy that outlasts the person herself:</strong>
        The Fondation Brigitte Bardot, which she founded in 1986, remains active
        after her death and continues its campaigns against the fur trade, seal
        hunting, and factory farming – work that outlives her.</p>
        <p class="vb-intro"><strong>b) A conflicted public memory:</strong>
        Obituaries repeatedly touched on the tension between her lifelong
        animal-rights work and her statements on immigration and Islam in later
        decades, several of which had led to court convictions – a legacy that
        remained unresolved right to the end.</p>
        <p class="vb-intro"><strong>c) One of the last great icons of classic European cinema:</strong>
        Her death took from postwar European film heritage one of its most
        defining, and at the same time most controversial, figures.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Directness even in the face of her own dying:</strong>
        The Sexual Three's typical refusal to hide behind a facade showed in Bardot
        right to the end: she did not silently accept circulating false reports of
        her death, but publicly contradicted them herself.</p>
        <p class="vb-intro"><strong>b) The Two-wing and the guarded privacy of the diagnosis:</strong>
        That the exact type of cancer was never publicly named can also be read as
        an expression of the Two-wing: throughout her life, caretaking was directed
        outward, toward the animals she protected – her own vulnerability, by
        contrast, remained a deliberately guarded, private space, unlike her public
        image.</p>
        <p class="vb-intro"><strong>c) A familiar place as the final retreat:</strong>
        That Bardot died at La Madrague, the very place where she had given refuge
        to animals for decades, reads as a consistent final gesture – the peacock
        that no longer spreads its tail for an audience, but withdraws to where its
        caretaking first began.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Through-Line</h3>
        <p class="vb-intro"><strong>a) A woman who kept control of her own narrative throughout her life:</strong>
        From her abrupt withdrawal from filmmaking in 1973 to her personal denial
        of her own death rumors in October 2025, a pattern runs through Bardot's
        life: she never fully handed the decisive turning points of her own story
        over to others.</p>
        <p class="vb-intro"><strong>b) Two chapters of caretaking, the same consistency:</strong>
        Just as she once cared for injured and abandoned animals with her own hands,
        never delegating that task, she seems to have handled her own illness the
        same way: no public complaint, no delegation to a controlled PR narrative,
        but a private, direct reckoning right to the end.</p>
        <p class="vb-intro"><strong>c) A public figure who stayed private in the decisive moment:</strong>
        That neither the exact type of cancer nor the precise course of her illness
        was ever named publicly, despite Bardot being known her whole life for her
        directness, reveals a deliberate boundary: her public caretaking and
        presence belonged above all to the animals; her own vulnerability remained a
        guarded, private space.</p>
        <p class="vb-intro"><strong>d) Why the back, of all places?</strong>
        For a Sexual Three with a Two-wing, whose entire life's work rested on
        upright, immediate presence – in front of the camera first, later in front
        of the public as an activist – one interpretation suggests itself:
        precisely the body part that, figuratively, stands for posture and
        backbone became, for Bardot, a site of chronic suffering across decades.
        This reading is a plausible interpretation, not a documented medical causal
        link, and will be explored further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>e) A framework without determinism:</strong>
        This does not mean the Sexual Three with Two-wing pattern inevitably leads
        to chronic back pain or cancer – <strong>anyone can develop any illness,
        regardless of subtype.</strong> What Bardot's case can show is a pattern in
        how a progressing illness is handled that keeps recurring in a
        pronounced Sexual Three with Two-wing – one of many possible readings, not a
        verdict. The corresponding illness will gradually be developed further in
        this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Bardot did not know her own Enneagram pattern – the Sexual Three with
        Two-wing holds almost reflexively onto its own immediate presence rather
        than admitting weakness or vulnerability in time, and she lived out exactly
        this pattern unchanged right to the end: publicly direct and uncompromising,
        privately alone with her illness. Anyone who does not recognize their own
        tendency to never relinquish control of their own narrative as a pattern
        risks that real care for themselves only finds room at the very end.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Three with Two-wing explains much about <strong>Brigitte
        Bardot's</strong> final months: a woman whose entire life had been marked by
        immediate, unfiltered presence kept control of her own story even in the
        face of her own mortality – denying rumors herself, choosing her own place
        of retreat, and letting the world know only as much as she herself chose to
        reveal. The peacock that, one last time, did not spread its tail for an
        audience, but folded it for itself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-brigitte-bardot", label:"Portrait: Brigitte Bardot (SX3w2) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx3", label:"Subtype Profile SX3"},
      ])}
    </div>
  `);
}

export function christophKolumbusKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-christoph-kolumbus-portrait.jpg" alt="Christopher Columbus" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Christopher Columbus</p>
        <p class="krim-portrait-typ">SP7w8 · Self-Preservation Type 7 with Eight-wing · c. 1451–1506</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Animal correspondence: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Christopher Columbus</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-christoph-kolumbus">portrait under Famous Personalities</a>
        in this Compass – that page covers his years of provision before his first Atlantic
        crossing and his hardness as governor. This portrait turns to a chapter only touched
        on there: a tormenting, never fully clarified joint disease that increasingly gripped
        him in his final eight years – and that never once stopped him from undertaking a
        fourth, final Atlantic crossing.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Columbus</strong> is classified as the <strong>self-preservation Seven with
        Eight-wing</strong>. Naranjo called this subtype the "hidden Eight": a Seven that
        combines practical foresight with the assertiveness and hardness of the Eight. It was
        exactly this combination of tenacious, years-long provision and a refusal to be
        deterred by physical limits that shaped his relationship to his own illness as well.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A sudden attack in the summer of 1498:</strong>
        During his third voyage, Columbus, then forty-one, was struck by severe pains in his
        legs accompanied by high fever – contemporaries called it "gout," though the pattern
        of complaints was unusual for that condition.</p>
        <p class="vb-intro"><strong>b) Bleeding, inflamed eyes six weeks later:</strong>
        A few weeks after the first attack, Columbus's eyes became inflamed and began to
        bleed, his eyesight noticeably deteriorating – a symptom complex modern physicians
        retrospectively interpret as possible Reiter's syndrome, a reactive arthritis
        following a bacterial infection he may have picked up on one of his voyages.</p>
        <p class="vb-intro"><strong>c) First confinement to bed amid colonial administration:</strong>
        At precisely the moment Hispaniola was shaken by uprisings and administrative chaos,
        Columbus was at times too ill to conduct affairs of state himself – a first, forced
        break in his otherwise unbroken drive.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Recurring flare-ups rather than a single episode:</strong>
        The joint pain returned again and again over the following years, with phases of
        relative improvement followed by renewed, often weeks-long attacks – a pattern that
        continued until his death.</p>
        <p class="vb-intro"><strong>b) Few documented complaints, much documented activity:</strong>
        In Columbus's own letters to the Spanish crown, his own illness takes up strikingly
        little space compared to extensive accounts of his rights, claims, and the next
        planned undertakings.</p>
        <p class="vb-intro"><strong>c) A body that increasingly could not keep up:</strong>
        Contemporaries described Columbus in his final years as aged and marked – a striking
        contrast to the energetic navigator of earlier years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The return in chains in 1500 as an additional strain:</strong>
        Shortly after the first severe flare-ups, Columbus was removed as governor over
        complaints of tyranny and brought back to Spain in chains – a humiliation that struck
        an already weakened body.</p>
        <p class="vb-intro"><strong>b) The fourth voyage despite advanced illness:</strong>
        Rather than resting, Columbus pressed in 1502, at fifty-one and with markedly impaired
        mobility, for a fourth Atlantic crossing – against the advice of those who knew his
        condition.</p>
        <p class="vb-intro"><strong>c) Bedridden for months off the Caribbean coast:</strong>
        During this final voyage, Columbus was at times so severely marked by fever and joint
        pain that he could no longer leave the command deck and issued orders lying down.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A year stranded and ill on Jamaica:</strong>
        After losing his ships, Columbus was stranded on Jamaica for nearly a year in
        1503/04 – marked by fever spells and joint pain, while simultaneously having to put
        down a mutiny among his own crew.</p>
        <p class="vb-intro"><strong>b) Return to Spain, but no end to the fight:</strong>
        After returning in November 1504, Columbus was severely weakened physically – yet
        rather than withdrawing, he spent his last year and a half relentlessly fighting for
        the restoration of his contractually secured titles and revenues.</p>
        <p class="vb-intro"><strong>c) Death on May 20, 1506, in Valladolid:</strong>
        Columbus died at around fifty-five, likely from the long-term effects of years of
        joint inflammation combined with heart failure – convinced to the last that he had
        found a sea route to Asia, not a new continent.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Eight-wing that ignored its own weakness too:</strong>
        The same assertiveness that carried Columbus through years of rejection at European
        courts and through mutinies at sea also led him to disregard his own physical warning
        signs – a fourth voyage despite advanced illness was, for him, not a question but a
        given.</p>
        <p class="vb-intro"><strong>b) Provision for the territory, not for the body:</strong>
        The self-preservation Seven normally secures itself through practical foresight – in
        Columbus, that foresight was directed almost exclusively at titles, contracts, and
        claims, hardly ever at his own health, which became an afterthought.</p>
        <p class="vb-intro"><strong>c) The fight for recognition as the last remaining territory:</strong>
        After losing his governorship, all of the SP7w8's energy shifted to the fight for the
        restoration of his rights – with an intransigence that not even his own visibly
        declining body could slow.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness that never became a reason to withdraw:</strong>
        For eight years, recurring joint inflammation, fever spells, and periods of near
        blindness accompanied Columbus – without his ever drawing the conclusion that he
        should limit his undertakings or allow himself rest.</p>
        <p class="vb-intro"><strong>b) A death that became an emblem of an unyielding life:</strong>
        Columbus died not in retirement but in the midst of fighting for his rights – a
        territory that, like his geographic one during his lifetime, he did not want to give
        up to his last breath.</p>
        <p class="vb-intro"><strong>c) Why, of all things, a joint disease?</strong>
        For a self-preservation Seven with Eight-wing, whose strength traditionally lies in
        physical robustness and practical mobility, a progressive, mobility-limiting joint
        disease strikes a sensitive point: it attacks precisely the capacity that otherwise
        defines this subtype – to remain vigorous and unrestrictedly capable of action. This
        reading is explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the self-preservation Seven's pattern inevitably leads to such
        illnesses – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Columbus's case can show is a pattern that stands out again and again in
        practice wherever territorial defense runs without a brake – one possible explanation
        among many, not a verdict. The corresponding condition will be developed step by step
        in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Columbus did not know his own pattern – the self-preservation Seven with Eight-wing
        defends its claimed territory, whether geographic or contractual, unrelentingly even
        once the body itself has long since set limits, and that is exactly what drove him to
        undertake a fourth ocean crossing with advanced illness and to fight for his titles
        until death rather than ease off. Someone who does not recognize their own drive
        never to relinquish a claimed territory underestimates how much it wears down their
        own body.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Columbus's</strong> final eight years, the self-preservation Seven with
        Eight-wing reveals itself in its most unyielding form: a progressive, rarely voiced
        joint disease that prevented neither a fourth Atlantic crossing nor the years-long
        fight for his own rights. The gorilla that defends its territory to its final
        breath – even once its own body can no longer keep up.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-christoph-kolumbus", label:"Portrait: Christopher Columbus (SP7w8) – life's work"},
        {route:"krankheitsportraets-francis-bacon", label:"Illness Portrait: Francis Bacon (SP7w8)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se7", label:"Subtype Profile SE7"},
      ])}
    </div>
  `);
}

export function michaelBerrymanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-berryman-portrait.jpg" alt="Michael Berryman" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Berryman</p>
        <p class="krim-portrait-typ">SX9w8 · Sexual Type 9 with Eight-wing · born 1948</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Sloth</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Animal correspondence: Sloth" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Berryman</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-michael-berryman">portrait under Famous Personalities</a>
        in this Compass – that page covers his acting career as a horror icon. This
        page deepens a chapter only fleetingly touched on there: living with congenital
        hypohidrotic ectodermal dysplasia, and the decades-long way he handled bullying,
        curiosity, and staring that grew out of it.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Berryman</strong> is classified as the <strong>Sexual Nine with
        Eight-wing</strong>. The SX9 seeks fulfillment through total fusion with a
        single intense relationship or task. The Eight-wing adds an unusual readiness
        to confront, voicing uncomfortable truths openly rather than staying silent –
        important to stress: his condition itself is a purely genetic, congenital
        malformation with no connection whatsoever to the Enneagram pattern; only how
        he handled it is analyzed here.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A diagnosis from birth:</strong>
        Unlike most other illness portraits in this Compass, there was no gradual
        development for Berryman – hypohidrotic ectodermal dysplasia was visible from
        birth: absent sweat glands, absent scalp hair, absent fingernails, a
        distinctively shaped face.</p>
        <p class="vb-intro"><strong>b) Early confrontation with other people's stares:</strong>
        Even as a child he was constantly exposed to looks, questions, and whispers –
        a situation he, unlike many affected people, never escaped through withdrawal.</p>
        <p class="vb-intro"><strong>c) High school as a turning point:</strong>
        By his own account, it was only in high school that he learned "what
        ignorance, prejudice, and cruelty really mean" – a period of intense bullying
        that would have driven many into permanent social withdrawal.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The diagnosis of ectodermal dysplasia:</strong>
        A rare, inherited, incurable genetic disorder affecting the development of
        skin, hair, teeth, nails, and sweat glands – in Berryman's case responsible
        for the unmistakable appearance later much sought after in the film world.</p>
        <p class="vb-intro"><strong>b) No treatment that changes the underlying picture:</strong>
        The condition could not and cannot be cured or fundamentally altered –
        Berryman lived his entire life with exactly the face he was given, with no
        option to change it cosmetically in any fundamental way.</p>
        <p class="vb-intro"><strong>c) From burden to asset:</strong>
        Rather than treating his appearance as a pure handicap, he actively made it
        the center of his professional identity – a path only a minority of people
        with visible genetic differences ever choose to take.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The Venice Beach flower shop:</strong>
        Instead of seeking work out of sight, young Berryman worked at an open sales
        counter, visible to every customer – it was there that film producer George
        Pal discovered him in 1975.</p>
        <p class="vb-intro"><strong>b) The quoted response to bullying:</strong>
        "You are a coward, and if we could switch bodies, you would have the chance to
        grow a soul and join 'Humanity.' I pity your small-hearted life." – a direct,
        confrontational reply instead of quiet endurance.</p>
        <p class="vb-intro"><strong>c) A deliberate career choice in the horror genre:</strong>
        Rather than seeking roles that concealed his appearance, he chose, of all
        genres, one in which that very appearance became the central element of the
        role.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A decades-long career instead of a single role:</strong>
        From 'One Flew Over the Cuckoo's Nest' (1975) through 'The Hills Have Eyes'
        (1977) to appearances in 'Star Trek' and 'The X-Files' – a continuous body of
        film work that never tried to hide the genetic difference.</p>
        <p class="vb-intro"><strong>b) The convention stage as a second home:</strong>
        To this day he remains a fixture of the horror and fan convention scene, where
        he meets fans personally rather than protecting himself behind distance.</p>
        <p class="vb-intro"><strong>c) Advocacy beyond his own person:</strong>
        Berryman is publicly engaged in advocacy for people with disabilities and for
        environmental protection – an extension of his own experience into a broader
        social cause.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Merging with his own unusual image:</strong>
        Rather than feeling a gap between his own self and his public image, Berryman
        merged the two completely – the dissolving of the boundary between self and
        role typical of the sexual Nine.</p>
        <p class="vb-intro"><strong>b) The Eight-wing as a shield rather than a weapon against others:</strong>
        His direct, confrontational manner was aimed almost exclusively at concrete
        attacks – not general aggression, but pinpoint self-assertion in the moment of
        being wronged.</p>
        <p class="vb-intro"><strong>c) Serenity as the baseline state between confrontations:</strong>
        Between the few documented sharp replies lies a decades-long, consistently
        observed calm in personal contact – typically Nine-like, with the Eight-wing
        as a pointed exception.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A starting point unlike any other portrait in this Compass:</strong>
        While most illness portraits here show a course unfolding over years or
        decades, Berryman's physical difference was there from the first minute – not
        an event, but a starting condition of his entire life.</p>
        <p class="vb-intro"><strong>b) The response to it as the actual pattern:</strong>
        Not the condition itself, but the lifelong way of handling it shows the sexual
        Nine with Eight-wing: merging with his own image to the point of
        inseparability, punctuated by pointed, sharp confrontations in response to
        concrete attacks.</p>
        <p class="vb-intro"><strong>c) An important difference from other illness portraits:</strong>
        With practically every other illness portrait in this Compass, one can ask
        whether a particular life pattern may have shaped the course of the illness.
        With a congenital genetic malformation like ectodermal dysplasia, that question
        does not arise – the condition itself has no connection whatsoever to the
        Enneagram pattern. What the Enneagram makes visible here is exclusively how
        differently people with the same starting condition can respond to it – and
        why this particular pattern of merging and occasional confrontation led to a
        public, fulfilling career, where others would have withdrawn.</p>
        <p class="vb-intro"><strong>d) A parallel to François Damiens, also SX9w8 in this Compass:</strong>
        Like <a href="javascript:void(0)" data-route="beruehmte-francois-damiens">François Damiens</a>,
        who shields his private life radically but merges completely into every role
        professionally, Berryman shows the same combination: full professional
        visibility of his unusual appearance, paired with clear, self-determined
        boundaries against attacks.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) A framing without determinism:</strong>
        This framing needs to be stressed even more firmly than with other illness
        portraits in this Compass: <strong>the genetic basis of Berryman's appearance
        has nothing to do with his Enneagram subtype</strong> – any person of any
        subtype can be born with any genetic difference. What the Enneagram describes
        here is exclusively the remarkable coping pattern with which Berryman shaped a
        fulfilling, publicly visible existence out of a starting condition he never
        chose.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Michael Berryman's</strong> way of living with his congenital ectodermal
        dysplasia offers one of the most encouraging studies of the sexual Nine with
        Eight-wing: not an illness story in the classic sense, but the story of a
        complete merging with his own unusual image – carried by a directness that
        never let itself be diminished. The sloth shows its face to the world,
        unchanged, and only strikes back sharply when the world mocks it for that
        face.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-michael-berryman", label:"Portrait: Michael Berryman (SX9w8) – life's work"},
        {route:"beruehmte-francois-damiens", label:"Portrait: François Damiens (SX9w8) – also turned an unusual appearance into a career"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx9", label:"Subtype Profile SX9"},
      ])}
    </div>
  `);
}

export function alainDelonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alain-delon-portrait.jpg" alt="Alain Delon" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alain Delon</p>
        <p class="krim-portrait-typ">SE1w2 · Self-Preservation Type 1 with Two-Wing · 1935–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alain Delon</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-alain-delon">Famous
        Personalities portrait</a> – that page covers his life's work as an actor. This page
        looks more closely at a part of his biography only briefly mentioned there: a
        stroke in 2019, a later leukemia diagnosis, and the publicly discussed wish to decide,
        if necessary, on his own terms about the end of his life.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Delon</strong> is assigned to the <strong>self-preservation Type 1 with
        Two-Wing</strong>. The SE1 directs its perfectionism at its own discipline and control
        over its own image; the Two-Wing gives it the capacity for deep affection strictly
        limited to a very small circle. Exactly this combination – dignity and control over
        one's own appearance, combined with retreat into the innermost private circle rather
        than public complaint – shaped how he dealt with stroke and leukemia in his final
        years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A stroke in 2019:</strong>
        In 2019, Delon suffered a stroke that required an extended hospital stay and
        permanently limited his physical mobility.</p>
        <p class="vb-intro"><strong>b) Surgery in Switzerland:</strong>
        He was treated and operated on at a Swiss clinic – true to his lifelong reserve, he
        kept the exact medical details largely private.</p>
        <p class="vb-intro"><strong>c) A growing withdrawal from public appearances:</strong>
        After the stroke, Delon noticeably reduced his public appearances, without commenting
        on it at length.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A later leukemia diagnosis:</strong>
        In the following years, a leukemia diagnosis added to his declining health.</p>
        <p class="vb-intro"><strong>b) Withdrawal to his estate in Douchy:</strong>
        Delon spent his final years largely withdrawn on his estate in Douchy, surrounded by
        his dogs, rather than in public or in a clinic.</p>
        <p class="vb-intro"><strong>c) A publicly discussed wish for assisted dying:</strong>
        His son Anthony Delon publicly confirmed in 2023 that his father had considered
        assisted dying in Switzerland in case of unbearable suffering – a statement that drew
        international attention.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) No public self-dramatization as a sick man:</strong>
        Unlike some celebrities in comparable situations, Delon never turned his illness into
        a public cause or campaign – it remained a private matter.</p>
        <p class="vb-intro"><strong>b) Family disputes over his care:</strong>
        In his final years, tensions among his children over who should care for him and how
        became publicly known – a rare crack in an otherwise controlled public facade.</p>
        <p class="vb-intro"><strong>c) Death on August 18, 2024:</strong>
        Delon died at age 88 on his estate in Douchy, surrounded by his family.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide mourning and tributes:</strong>
        His death triggered obituaries worldwide honoring him as one of the defining figures
        of European cinema – his medical history remained largely in the background.</p>
        <p class="vb-intro"><strong>b) No public image of a suffering old man:</strong>
        Delon's public image remained shaped by control and dignity until the end, not by
        visible suffering.</p>
        <p class="vb-intro"><strong>c) A subsequent debate on assisted dying:</strong>
        His son's disclosure of his wish for assisted dying triggered a broader public debate
        in France about self-determined death that reached far beyond his own case.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Control up to the last possible moment:</strong>
        The SE1's characteristic discipline also showed in how he handled his own mortality:
        Delon wanted to retain control over his own end even where the body would otherwise
        have denied him that control.</p>
        <p class="vb-intro"><strong>b) The Two-Wing and retreat into the innermost circle:</strong>
        The same structure with which Delon concentrated his deepest affection throughout his
        life on a very small circle – his dogs, a few close friends – also determined how he
        spent his final years: not in public, but on his own estate, surrounded by exactly
        that innermost circle.</p>
        <p class="vb-intro"><strong>c) Anger at losing control, not at the illness itself:</strong>
        The publicly disclosed wish for assisted dying fits the SE1w2 logic: the suffering
        itself was not the greatest threat, but the prospect of losing control over his own
        image and dignity.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A man of controlled presence whose own body took away that control:</strong>
        Delon's entire acting craft rested on physical mastery and an almost impenetrable
        outward control. Of all things, stroke and leukemia attacked exactly this physical
        self-mastery that had carried his entire public image.</p>
        <p class="vb-intro"><strong>b) A parallel within the same core type, a different wing:</strong>
        An actual SE1w2 parallel case does not yet exist in this Compass. A parallel within
        the same core type shows, however, in
        <a href="javascript:void(0)" data-route="krankheitsportraets-phil-collins">Phil
        Collins (SE1w9)</a>: in his case too, a serious physical limitation was met not with
        public complaint, but with disciplined, quiet adaptation. The difference lies in the
        wing: where Collins' Nine-Wing enabled a pragmatic, almost unassuming continuation of
        work, Delon's Two-Wing showed itself as withdrawal into the innermost private circle –
        the same SE1 control, but pointed in a different direction.</p>
        <p class="vb-intro"><strong>c) When the One under chronic stress moves toward the Four:</strong>
        In his final years, Delon showed, in rare, very reserved public statements, an
        unusually introspective, almost melancholic tone about loneliness, age, and his own
        mortality – a tone that departed from his otherwise controlled, matter-of-fact facade.
        Someone living under chronic health strain for years increasingly moves along their
        stress line toward their stress point – for the One, that is the Four. This
        emotionally charged, inward-turned retrospection in his final years recalls the
        melancholic introspection of the stress point, not the matter-of-fact sense of duty of
        the core type – with the core type unchanged at SE1w2.</p>
        <p class="vb-intro"><strong>d) Why the brain and the blood, of all things?</strong>
        For a self-preservation One whose entire public impact rested on physical mastery and
        controlled presence, one interpretation suggests itself: of all things, the systems
        that carried this control at its core – the brain as the seat of mastery, the blood as
        the foundation of physical vitality – became the site of lost control. This
        interpretation is a plausible reading, not a documented clinical causal link, and will
        be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the self-preservation One's pattern inevitably leads to stroke
        or leukemia – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Delon's case shows is a pattern in how a progressive, life-threatening illness is
        handled, one that recurs again and again in a pronounced self-preservation One with a
        Two-Wing – one of many possible readings, not a verdict. The corresponding illness
        will be developed further, over time, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        Delon likely did not know his own pattern as an Enneagram structure – the
        self-preservation One with a Two-Wing reflexively holds onto control over its own
        image and retreat into the innermost circle, instead of openly naming suffering, and
        lived out exactly this pattern unchanged until his death. Anyone who does not
        recognize their own tendency to hide vulnerability exclusively behind control risks
        letting their own burden remain invisible even within their innermost circle, even
        where open exchange could bring relief.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 1 with Two-Wing explains much about how <strong>Alain
        Delon</strong> handled stroke and leukemia: a man whose entire public image rested on
        physical control defended that control to the very end – if necessary, even over the
        timing of his own death – and, rather than suffering publicly, withdrew into the
        innermost circle of those he truly let close. The eagle that determined its own
        territory until the very last day.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-alain-delon", label:"Portrait: Alain Delon (SE1w2) – life's work"},
        {route:"krankheitsportraets-arnold-schwarzenegger", label:"Illness Portrait: Arnold Schwarzenegger (SP1w2) – same subtype"},
        {route:"krankheitsportraets-phil-collins", label:"Illness Portrait: Phil Collins (SE1w9) – same core type, different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SE1"},
      ])}
    </div>
  `);
}

export function eltonJohnKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elton-john-portrait.jpg" alt="Elton John" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elton John</p>
        <p class="krim-portrait-typ">SE7w6 · Self-Preservation Type 7 with Six-Wing · born 1947</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Animal correspondence: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elton John</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-elton-john">Famous
        Personalities portrait</a> – that page covers his musical life's work and stage
        persona. This page looks more closely at a chapter only briefly touched on there: two
        decades of cocaine and alcohol addiction, accompanied by bulimia, up to his hospital
        admission in 1990.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>John</strong> is assigned to the <strong>self-preservation Type 7 with
        Six-Wing</strong>. The SE7 secures safety not through restraint but through active
        enjoyment and self-supply; the Six-Wing gives it the ability to stabilize through a
        fixed, loyal bond. Exactly this combination – fleeing into boundless consumption until
        a single, deep bond tipped the scale toward recovery – shaped the entire course of
        his addiction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Cocaine use beginning alongside global fame:</strong>
        With the rapid commercial success of the 1970s, John began increasingly using
        cocaine, alongside an already existing, excessive alcohol consumption.</p>
        <p class="vb-intro"><strong>b) An additional bulimia diagnosis:</strong>
        Alongside the substance dependency, John developed bulimia, which went untreated for
        years.</p>
        <p class="vb-intro"><strong>c) Escalation over two decades:</strong>
        The combination of cocaine, alcohol, and bulimia intensified over roughly twenty
        years, without John seeking professional help.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The turning point at a friend's deathbed:</strong>
        On April 8, 1990, John sat at the deathbed of sixteen-year-old Ryan White, a teenager
        with AIDS with whom he had built a close friendship.</p>
        <p class="vb-intro"><strong>b) Voluntary hospital admission:</strong>
        A few months later, on July 29, 1990, John admitted himself to Parkside Lutheran
        Hospital in Chicago – one of the few clinics at the time able to treat bulimia
        alongside cocaine and alcohol addiction.</p>
        <p class="vb-intro"><strong>c) Sustained sobriety since treatment:</strong>
        Since that 1990 hospital stay, John has remained continuously sober – a publicly
        documented sobriety now spanning more than three decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) His first fully sober studio album:</strong>
        He recorded his album "The One" (1992) fully sober for the first time – a process he
        later described as unfamiliar and difficult.</p>
        <p class="vb-intro"><strong>b) Founding the Elton John AIDS Foundation:</strong>
        In 1992, John founded the Elton John AIDS Foundation, directly motivated by his
        friendship with Ryan White and his own recovery.</p>
        <p class="vb-intro"><strong>c) Open public retrospectives on his years of addiction:</strong>
        In later interviews and his autobiography "Me" (2019), John repeatedly spoke about his
        own addiction in detail, without softening it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) One of the world's largest AIDS foundations:</strong>
        The Elton John AIDS Foundation has since raised over $600 million for HIV programs in
        more than 55 countries.</p>
        <p class="vb-intro"><strong>b) A public role model for addiction recovery:</strong>
        John's openness about his own, now three-decade-long sobriety helped destigmatize
        addiction among public figures.</p>
        <p class="vb-intro"><strong>c) Creative continuity despite, and after, the addiction:</strong>
        Despite the years of addiction, John's musical output remained remarkably consistent
        across decades, with the "Farewell Yellow Brick Road" tour (2018–2023) becoming the
        highest-grossing tour in music history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Addiction as the most extreme form of SE7 self-supply:</strong>
        The SE7's characteristic strategy of securing safety through active enjoyment rather
        than restraint tipped, in John's case, over two decades into an addiction that carried
        the very same underlying principle – always more, never enough – all the way to
        self-destruction.</p>
        <p class="vb-intro"><strong>b) The Six-Wing and the bond that saved him:</strong>
        The same capacity for loyal bonding that defines the Six-Wing became the decisive
        turning point: not abstract insight, but the concrete, personal bond with a dying
        friend tipped the scale toward recovery.</p>
        <p class="vb-intro"><strong>c) A structured institution instead of spontaneous enjoyment after recovery:</strong>
        After recovering, John translated the same energy that had once flowed into boundless
        consumption into building a lasting, reliable foundation structure – abundance that
        now benefits others instead of consuming himself.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A stage persona of boundless abundance that abundance itself nearly destroyed:</strong>
        John's entire stage identity rested on demonstrative abundance – feathers, costumes,
        glasses. Of all things, this very principle of abundance became a life-threatening
        trap during his years of addiction.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows in
        <a href="javascript:void(0)" data-route="krankheitsportraets-mariah-carey">Mariah
        Carey (SE7w8)</a>: in her case too, a psychological illness concealed for years – a
        bipolar disorder, in Carey's case – shaped her life behind a public facade, before she
        publicly disclosed it years later. Both SE7s show the same pattern: outwardly
        demonstrated abundance and joie de vivre conceal, for years, a serious private crisis,
        until it is finally publicly acknowledged and addressed.</p>
        <p class="vb-intro"><strong>c) When the Seven under chronic stress moves toward the One:</strong>
        John's description of his first sober album recording – disciplined, controlled,
        unfamiliarly difficult – and his strict, never-once-interrupted sobriety since 1990
        show a rigidity unusual for the otherwise pleasure-oriented SE7. Someone living under
        chronic addiction strain for years increasingly moves along their stress line toward
        their stress point – for the Seven, that is the One. This strict, unyielding
        self-discipline after recovery recalls the principled rigor of the stress point, not
        the spontaneous joie de vivre of the core type – with the core type unchanged at
        SE7w6.</p>
        <p class="vb-intro"><strong>d) Why substances and food, of all things?</strong>
        For a self-preservation Seven whose entire strategy rested on active enjoyment and
        self-supply, one interpretation suggests itself: of all things, the means that most
        immediately promised abundance and safety in the short term – substances, food –
        became the place where that very strategy destroyed itself. This interpretation is a
        plausible reading, not a documented clinical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the self-preservation Seven's pattern inevitably leads to
        addiction – <strong>any person can develop any illness, regardless of subtype.</strong>
        What John's case shows is a pattern in how a severe addiction is handled, one that
        recurs again and again in a pronounced self-preservation Seven with a Six-Wing – one
        of many possible readings, not a verdict. The corresponding illness will be developed
        further, over time, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        John likely does not know his own pattern as an Enneagram structure – the
        self-preservation Seven with a Six-Wing reflexively holds onto the strategy of
        securing safety through abundance rather than restraint, until that very strategy
        turns into its opposite. Anyone who does not recognize their own tendency to
        immediately fill every inner emptiness with outer abundance risks that this same
        strategy eventually turns from a resource into a life-threatening danger.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 7 with Six-Wing explains much about the course of
        <strong>Elton John's</strong> addiction: a man whose entire stage identity rested on
        boundless abundance fell, over two decades, into an addiction that carried the very
        same principle all the way to self-destruction – until a single, deep bond with a
        dying friend tipped the scale toward recovery. The gorilla that ultimately turned its
        territory of abundance toward others instead of only itself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-elton-john", label:"Portrait: Elton John (SE7w6) – life's work"},
        {route:"krankheitsportraets-larry-king", label:"Illness Portrait: Larry King (SE7w6) – same subtype"},
        {route:"krankheitsportraets-mariah-carey", label:"Illness Portrait: Mariah Carey (SE7w8) – same core type, different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se7", label:"Subtype Profile SE7"},
      ])}
    </div>
  `);
}

export function enricoCarusoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-enrico-caruso-portrait.jpg" alt="Enrico Caruso" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Enrico Caruso</p>
        <p class="krim-portrait-typ">SP3w2 · Self-Preservation Type 3 with a Two-Wing · 1873–1921</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Enrico Caruso</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-enrico-caruso">portrait under Famous Personalities</a>
        in this compass – there the focus is on his rise from foundry worker to world star and his
        legendary generosity. This page turns to an entirely different chapter of his life: a
        purulent pleurisy that he sang through for weeks, until seven surgeries and one final,
        fatal setback in Naples cost him his life at age 48.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Caruso</strong> is assigned to the <strong>self-preservation Three with a
        Two-wing</strong>. Naranjo called the self-preservation Three the <em>countertype of the
        Three</em>: security comes from demonstrated competence and reliability, not
        self-promotion. The Two-wing gives this Three a warm, relationship-oriented quality. This
        exact combination of compulsive reliability and the need not to disappoint anyone shaped
        how Caruso dealt with his own fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A blow from a stage pillar that seemed to have no lasting effect:</strong>
        In December 1920, a falling stage pillar struck him in the back, over the left kidney,
        during a performance of "Samson and Delilah." A few days later he developed a persistent
        cough and a dull pain in his side.</p>
        <p class="vb-intro"><strong>b) A misdiagnosis that declared him fit for the stage:</strong>
        His doctor diagnosed harmless intercostal neuralgia and declared him fit to perform,
        despite ongoing pain that was already affecting his voice production and movement.</p>
        <p class="vb-intro"><strong>c) A throat hemorrhage on stage on December 11, 1920:</strong>
        During a performance of "L'elisir d'amore" ("The Elixir of Love") at the Brooklyn Academy of Music, Caruso
        suffered a hemorrhage; the performance was canceled after the first act.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Three more performances despite visible illness:</strong>
        Rather than withdrawing after the hemorrhage, a clearly unwell Caruso gave three more
        performances at the Met, the last on December 24, 1920, as Eléazar in Halévy's "La Juive" ("The Jewess").</p>
        <p class="vb-intro"><strong>b) The correct diagnosis only after unbearable pain:</strong>
        On Christmas Day the pain in his side became so unbearable that he was screaming. Only
        then did Caruso receive the correct diagnosis: purulent pleurisy with empyema (pus
        accumulation in the chest cavity).</p>
        <p class="vb-intro"><strong>c) Seven surgeries, one including rib removal:</strong>
        Seven surgical procedures followed to drain fluid from his chest and lungs – during the
        most serious operation, part of a rib was removed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Returning to Naples to recover:</strong>
        After his most serious operation, Caruso returned to his hometown of Naples to recuperate
        – a retreat to the place where his career had begun, now to save his life rather than
        build it.</p>
        <p class="vb-intro"><strong>b) An apparent recovery that deceived:</strong>
        According to his wife Dorothy Caruso, he initially seemed to be recovering. He allowed
        himself to be examined by a local doctor under unhygienic conditions, after which his
        condition worsened dramatically.</p>
        <p class="vb-intro"><strong>c) Morphine at the Vesuvio Hotel:</strong>
        On his final night at the Vesuvio Hotel in Naples, his condition took an alarming turn for
        the worse; he was given morphine to help him sleep.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death on August 2, 1921, in Naples:</strong>
        After a series of unsuccessful surgeries, Enrico Caruso died at age 48 in Naples – the
        exact cause of death remains debated to this day, with theories ranging from empyema to
        peritonitis from a burst subphrenic abscess.</p>
        <p class="vb-intro"><strong>b) Eight months between the first warning sign and death:</strong>
        From the falling stage pillar in December 1920 to his death in August 1921, eight months
        passed – a period in which he first kept working, then endured seven surgeries, without
        the illness ever being fully brought under control.</p>
        <p class="vb-intro"><strong>c) A career ending that was never planned as such:</strong>
        Unlike many other artists, there was no conscious farewell to the stage – the final
        performance on December 24, 1920, was meant to be one of many more, not the closing point
        of a career.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Two-wing that put commitments above his own body:</strong>
        The same warm, reliable devotion to others that made Caruso one of the most generous stars
        of his era also demanded of him that he not disappoint his audience – even as his body was
        already sending clear warning signs.</p>
        <p class="vb-intro"><strong>b) Competence that left no room for weakness:</strong>
        The self-preservation Three finds security in functioning. A doctor who declared him fit
        for the stage met, in Caruso, a personality that in any case wasn't asking whether it was
        allowed to stop, only whether it could keep going.</p>
        <p class="vb-intro"><strong>c) A final retreat into the familiar that no longer helped:</strong>
        That Caruso returned to recover to Naples of all places, the city of his origin and his
        rise, fits a personality that seeks security in the familiar – this time in vain, since an
        unhygienic local treatment further worsened his condition.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Throughline</h3>
        <p class="vb-intro"><strong>a) Working until collapse, no conscious stopping:</strong>
        Caruso's path from the falling stage pillar through the on-stage hemorrhage to three more
        performances despite visible illness shows the same underlying strategy: fulfilling
        commitments until the body itself leaves no choice.</p>
        <p class="vb-intro"><strong>b) The parallel to Caruso's own Life Pattern Compass fingerprint:</strong>
        This exact pattern – security through reliability and functioning rather than
        self-consideration – already appears in his portrait under Famous Personalities: sources
        explicitly name his "obsession with honoring his commitments and fear of disappointing his
        fans" as the probable cause of death.</p>
        <p class="vb-intro"><strong>c) Why exactly a pleurisy ignored for weeks?</strong>
        For a self-preservation Three with a Two-wing, whose deepest need is to generate security
        through competence and reliability, one interpretation suggests itself: an illness
        initially misdiagnosed as harmless, one that could be concealed simply by continuing to
        work, met, in Caruso, a man whose entire identity hinged on functioning smoothly. This
        interpretation is developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean that the self-preservation Three's pattern inevitably leads to fatal
        illness courses – <strong>anyone can get any illness, regardless of subtype.</strong> What
        Caruso's case illustrates is a pattern that repeatedly stands out in practice with
        compulsive reliability – one of many possible explanations, not a judgment. The
        corresponding illness profile is being developed step by step in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Caruso did not know his own Enneagram pattern, so nothing ever prompted him to set limits
        on his Three's reliability: instead of leaving the stage after the first
        hemorrhage, he held onto his commitments until his body itself left no choice. Not out of
        guilt, but out of ignorance about his own pattern – and that is exactly why an initially
        treatable illness was able to escalate over weeks, instead of being taken seriously early
        and consistently treated.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Enrico Caruso's</strong> illness story shows the self-preservation Three with a
        Two-wing at its most vulnerable: a man who answered an on-stage hemorrhage with three more
        performances, endured seven surgeries, and finally died in the city of his origin without
        his last appearance ever being meant as a farewell. The raccoon who kept functioning to
        the end – until his own body made the final decision.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-enrico-caruso", label:"Portrait: Enrico Caruso (SP3w2) – life's work"},
        {route:"krankheitsportraets-joseph-haydn", label:"Illness Portrait: Joseph Haydn (SP3w2) – same subtype"},
        {route:"krankheitsportraets-sadhguru", label:"Illness Portrait: Sadhguru (SP3w2) – same subtype"},
        {route:"krankheitsportraets-klara-von-assisi", label:"Illness Portrait: Clare of Assisi (SP3w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
      ])}
    </div>
  `);
}
