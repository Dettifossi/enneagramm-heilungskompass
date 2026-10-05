import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function adeleKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-adele-portrait.jpg" alt="Adele" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adele</p>
        <p class="krim-portrait-typ">SE4w3 · Self-Preservation Type 4 with Three-Wing · b. 1988</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Adele</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-adele">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: a severe
        postnatal depression after the birth of her son in 2012, accompanied by panic
        attacks, which she disclosed only to her closest circle for years.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Adele</strong> is assigned to the <strong>self-preservation Type 4 with
        Three-Wing</strong>. The SE4 carries its pain quietly, fighting it out alone before
        showing it; the Three-Wing adds the discipline to keep functioning flawlessly
        outwardly regardless. Exactly this combination – inner collapse alongside a
        flawlessly functioning public facade – shaped the years-long hidden course of her
        postnatal depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Onset after the birth of her son in 2012:</strong>
        By her own account, symptoms began shortly after the birth of her son Angelo in
        October 2012 – a moment publicly perceived as the peak of private happiness.</p>
        <p class="vb-intro"><strong>b) A feeling of complete overwhelm:</strong>
        Adele later described in interviews feeling completely overwhelmed and consumed by
        guilt in the first months of motherhood, because she did not feel the immediate
        maternal bond she had expected.</p>
        <p class="vb-intro"><strong>c) Complete secrecy toward the outside world:</strong>
        For years she did not speak publicly about this period – her postnatal depression
        diagnosis only became known in a 2021 Vogue interview, almost a decade later.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Accompanying panic attacks before performances:</strong>
        Adele repeatedly spoke about severe panic attacks before live performances, which at
        times drove her to nearly cancel concerts just before they began.</p>
        <p class="vb-intro"><strong>b) Last-minute cancellation of her Las Vegas residency in 2022:</strong>
        One day before the planned opening of her Las Vegas show, Adele canceled in tears,
        stating that the result – by her account due to problems with the stage technology
        delivery – did not meet her own standards.</p>
        <p class="vb-intro"><strong>c) Beginning therapy as a turning point:</strong>
        By her own account, only through psychotherapy did she begin to recognize and name
        the postnatal depression in retrospect as a distinct illness, rather than
        interpreting it as personal failure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Processing through the album "30":</strong>
        Her 2021 album "30" explicitly processes, by her own account, this period – divorce,
        motherhood, self-discovery – and marks the point at which she first spoke publicly
        about the crisis.</p>
        <p class="vb-intro"><strong>b) Openness without dramatization:</strong>
        Unlike a publicly staged illness narrative, Adele's disclosure remained factual and
        restrained – in the Vogue interview she described the experience precisely, without
        turning it into the central marketing theme of the album.</p>
        <p class="vb-intro"><strong>c) Positive feedback from others affected:</strong>
        After the release, Adele received numerous responses from mothers who said her
        openness gave them the first courage to speak about their own postnatal
        depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide media attention for a taboo topic:</strong>
        Adele's openness contributed internationally to destigmatizing postnatal depression –
        a topic rarely discussed openly, especially by publicly perceived "perfect"
        mothers.</p>
        <p class="vb-intro"><strong>b) Delayed rather than immediate disclosure:</strong>
        The nearly ten-year gap between the illness and its public disclosure illustrates how
        long the crisis was processed exclusively in private before it even entered public
        discourse.</p>
        <p class="vb-intro"><strong>c) Continued artistic productivity:</strong>
        Despite the crisis, Adele remained artistically active and productive – the crisis
        did not become a career break, but ultimately the material for one of her most
        successful albums.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) A quiet fight rather than a public complaint:</strong>
        The SE4's characteristic tenacity showed exemplarily: Adele fought the postnatal
        depression alone for years rather than making it public – the SE4 logic of not
        complaining, but speaking only once the pain has been processed and given a form.</p>
        <p class="vb-intro"><strong>b) The Three-Wing and the flawless facade:</strong>
        The same discipline that turns her concerts and albums into commercial world
        successes ensured that the crisis remained invisible outwardly for years – only once
        the album "30" was finished did the private fight become a public message.</p>
        <p class="vb-intro"><strong>c) Processing through form, not confession:</strong>
        Adele's path out of the crisis did not run through a spontaneous public confession,
        but through transforming what she had lived through into a finished artistic work –
        the typical SE4w3 movement from a quiet inner life to an effective outer form.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A voice of heartache who kept her own heartache secret longest:</strong>
        Adele's entire body of work rests on the ability to turn private pain into universal
        songs – of all things, her own postnatal depression remained exempt from this
        principle for almost a decade, until she was ready to give it form.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady Diana
        (SE4w3)</a>: Diana too concealed her illness – in her case, bulimia – for years
        behind a flawlessly functioning public facade, before addressing it herself years
        later. Both SE4w3s show the same pattern: the inner battle stays hidden until it can
        be given a controlled, self-chosen form.</p>
        <p class="vb-intro"><strong>c) Why after childbirth, of all moments, the moment of greatest expected closeness?</strong>
        For a self-preservation Four with a Three-Wing whose entire work revolves around
        genuine, unfiltered emotional depth, one interpretation suggests itself: exactly the
        moment society expects the most spontaneous, immediate bonding became the site where
        that bonding did not arrive – a particularly painful confrontation with the Four's own
        fate pattern. This reading is a plausible interpretation, not a proven clinical causal
        link, and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the self-preservation Four's pattern inevitably leads to
        postnatal depression – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Adele's case is a pattern in dealing with a
        psychological crisis that keeps recurring in a pronounced self-preservation Four with
        a Three-Wing – one of many possible readings, not a verdict. The corresponding illness
        pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Adele does not know her own pattern as an Enneagram structure – the self-preservation
        Four with a Three-Wing reflexively clings to showing its own pain only once it has
        been given a flawless form, instead of seeking help early, and largely lives out
        exactly this pattern unchanged to this day. Anyone who does not recognize their own
        tendency to name emotional crises only after years of silent processing as a pattern
        risks that help only arrives once the crisis is already far advanced.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 4 with Three-Wing explains much about the course of
        <strong>Adele's</strong> postnatal depression: a woman whose entire work turns
        private wounds into universal songs needed almost ten years to apply that same
        transformation to her own deepest crisis – the dove that only carried its message
        outward once it was ready to accept it for itself as well.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-adele", label:"Portrait: Adele (SE4w3)"},
        {route:"krankheitsportraets-lady-diana", label:"Illness Portrait: Lady Diana (SE4w3) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function ashtonKutcherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ashton-kutcher-portrait.jpg" alt="Ashton Kutcher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ashton Kutcher</p>
        <p class="krim-portrait-typ">SO2w3 · Social Type 2 with Three-Wing · b. 1978</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ashton Kutcher</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-ashton-kutcher">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there: a
        rare autoimmune disease that temporarily robbed Kutcher of his sight, hearing, and
        ability to walk, before he made it public in 2023.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kutcher</strong> is assigned to the <strong>social Type 2 with Three-Wing</strong>.
        The SO2 deliberately uses its reach for a larger cause; the Three-Wing adds the drive
        to turn every experience – including its own illness – into a visible, effective
        contribution. Exactly this combination – complete secrecy at first, then a
        deliberate, publicly effective disclosure – shaped how he dealt with his own
        autoimmune disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Symptoms setting in suddenly:</strong>
        By his own account, the symptoms began abruptly, with a rapid loss of balance,
        eyesight, and hearing, without any noticeable warning.</p>
        <p class="vb-intro"><strong>b) Diagnosis of a rare form of vasculitis:</strong>
        Doctors diagnosed Kutcher with a rare autoimmune inflammation of the blood vessels
        that affected several sensory organs and his mobility simultaneously.</p>
        <p class="vb-intro"><strong>c) A months-long, intensive rehabilitation process:</strong>
        By his own account, he then had to relearn how to walk, see, and hear – a process
        that stretched over months.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Two years of complete secrecy:</strong>
        Kutcher kept the diagnosis and illness entirely private for roughly two years before
        speaking about it publicly.</p>
        <p class="vb-intro"><strong>b) Public disclosure in a 2023 podcast interview:</strong>
        Only in a detailed interview did Kutcher make the illness and its course public in
        detail – a deliberately chosen setting rather than a spontaneous revelation.</p>
        <p class="vb-intro"><strong>c) Visible but not fully resolved after-effects:</strong>
        Kutcher described that some impairments, particularly to his sense of balance,
        persisted even after the acute phase of the illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Emphasizing gratitude rather than complaint:</strong>
        In his public account, Kutcher repeatedly foregrounded his own gratitude for
        surviving and recovering, rather than framing the illness as a victim narrative.</p>
        <p class="vb-intro"><strong>b) Positive media response:</strong>
        The disclosure triggered widespread media attention and largely positive reactions
        that honored Kutcher's openness and how he handled the illness.</p>
        <p class="vb-intro"><strong>c) Continued public activity after the disclosure:</strong>
        After the interview, Kutcher continued his acting and business activities unchanged,
        without the illness becoming a permanent public topic.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide attention for a rare condition:</strong>
        Kutcher's openness contributed internationally to raising awareness of rare
        autoimmune diseases that had previously received little public discussion.</p>
        <p class="vb-intro"><strong>b) Delayed rather than immediate disclosure:</strong>
        The two-year gap between the illness and its public disclosure shows how long the
        crisis was initially processed entirely in private.</p>
        <p class="vb-intro"><strong>c) No glorifying of his own recovery:</strong>
        In his account, Kutcher explicitly emphasized that not all impairments had fully
        disappeared – a nuanced portrayal rather than a clean recovery story.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) A private struggle before it became public:</strong>
        The SO2's characteristic focus on public effectiveness only kicked in once the actual
        crisis had been lived through and overcome in private – the illness itself initially
        stayed outside his public role.</p>
        <p class="vb-intro"><strong>b) The Three-Wing and the controlled, effective disclosure:</strong>
        The same ability to generate concrete impact from visibility that marks Kutcher's
        work against child trafficking also showed here: the disclosure happened in a
        carefully chosen format that achieved maximum but controlled public impact.</p>
        <p class="vb-intro"><strong>c) Gratitude as a public message:</strong>
        That Kutcher framed the illness as an occasion for gratitude rather than complaint
        fits the SO2's tendency to turn even its own vulnerability into a positive message
        useful to others.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A man of public reach who fought invisibly for two years:</strong>
        Kutcher's entire public work rests on the deliberate use of visibility for a larger
        purpose – of all things, his own existential crisis was spent entirely outside any
        public view at first, before he turned it into a message at a moment of his own
        choosing.</p>
        <p class="vb-intro"><strong>b) Why sight, hearing, and walking, of all things, the very foundations of perception?</strong>
        For a social Two with a Three-Wing whose entire work rests on the ability to perceive
        and make visible societal problems, one interpretation suggests itself: exactly the
        senses that make perception and public action possible in the first place failed him
        completely for a time. This reading is a plausible interpretation, not a proven
        clinical causal link, and will be developed further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the social Two's pattern inevitably leads to autoimmune
        disease – <strong>any person can develop any illness, regardless of subtype.</strong>
        What can be shown in Kutcher's case is a pattern in dealing with an overcome
        existential crisis that keeps recurring in a pronounced social Type 2 with a
        Three-Wing – one of many possible readings, not a verdict. The corresponding illness
        pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Kutcher does not know his own pattern as an Enneagram structure – the social Type 2
        with a Three-Wing reflexively clings to control over the timing and form of its own
        visibility, even in existential crises, and largely lives out exactly this pattern
        unchanged to this day. Anyone who does not recognize their own tendency to make
        private crises public only after fully processing them as a pattern risks that
        outside support only arrives once the hardest phase is already over.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 2 with Three-Wing explains much about how <strong>Ashton
        Kutcher</strong> dealt with his own autoimmune disease: a man whose entire public
        work rests on visible effectiveness fought his own existential crisis entirely in
        private before turning it into a message of gratitude – the golden retriever that
        only showed its deepest vulnerability once it could turn that vulnerability into
        something useful for others.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ashton-kutcher", label:"Portrait: Ashton Kutcher (SO2w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function charlesDarwinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-charles-darwin-portrait.jpg" alt="Charles Darwin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Darwin</p>
        <p class="krim-portrait-typ">SE5w6 · Self-Preservation Type 5 with Six-wing · 1809–1882</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Owl</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Animal correspondence: Owl" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Darwin</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-charles-darwin">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter that's hardly more than
        glossed over there: from his return from the world voyage on the <em>HMS Beagle</em> in 1836, Darwin
        suffered for nearly forty years from chronic nausea, vomiting, heart palpitations,
        headaches, and debilitating exhaustion – symptoms never clearly diagnosed in his
        lifetime. Historians and physicians still debate possible causes today, from Chagas
        disease (via an insect bite in South America) to a rare metabolic disorder to a
        largely psychosomatic origin.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Darwin</strong> is classified as the <strong>Self-Preservation Five with
        Six-wing</strong> – the same subtype as
        <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Marie Curie</a>
        in this Compass. Naranjo called the Self-Preservation Five the <em>Castle</em>: safety
        arises from retreating into a controlled, sealed-off environment that protects
        against being overwhelmed and losing energy – for Darwin, Down House, where he spent
        the last forty years of his life with almost no travel or social obligations. The
        Six-wing adds the watchful caution to weigh every consequence before exposing oneself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Patient, meticulous, incorruptible:</strong>
        Darwin's gaze gathered observations for decades until no objection had room left –
        the Five's gaze, which would rather check too much than too little before it
        judges.</p>
        <p class="vb-intro"><strong>b) Watchful outward, unclear inward:</strong>
        Darwin had thought through every possible reaction to his theory – yet his own
        decades-long symptoms remained a mystery to him and his doctors, never clearly
        categorized.</p>
        <p class="vb-intro"><strong>c) Withdrawn as soon as it concerns himself:</strong>
        Public debates, lectures, appearances – Darwin preferred to leave those to allies
        like Thomas Huxley, "Darwin's Bulldog," while he himself stayed at Down House.
        Typical Self-Preservation Five: presence costs energy needed elsewhere.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A life on a strict rhythm:</strong>
        Fixed working hours, a daily walk through the garden, the <em>Sandwalk</em>, hardly
        any spontaneous interruptions – the SE5's Castle lives on predictability as a source
        of energy.</p>
        <p class="vb-intro"><strong>b) Knowledge as the only reliable safety:</strong>
        Darwin spent eight years alone on a monographic study of barnacles before venturing
        his great theory – safety through complete mastery of detail, not through outside
        confirmation.</p>
        <p class="vb-intro"><strong>c) Down House as refuge:</strong>
        Forty years with essentially no travel, after the one great exposure on the Beagle –
        a self-chosen retreat that reduced the outside world to a manageable measure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Twenty years of securing evidence before he spoke:</strong>
        Darwin developed his core ideas on natural selection as early as 1838 – they weren't
        published until 1859. The Six-wing filled the interval with evidence-gathering and
        weighing every possible consequence.</p>
        <p class="vb-intro"><strong>b) Consideration to the point of self-denial:</strong>
        Darwin feared hurting his devoutly religious wife Emma with his ideas – a caution
        that nearly let Alfred Russel Wallace beat him to a nearly identical theory.</p>
        <p class="vb-intro"><strong>c) Persuasion through mass rather than volume:</strong>
        Not a single flash of insight but a nearly irrefutable mountain of observations was
        Darwin's actual argument – the SE5w6 at its most productive.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Unassailable through thoroughness:</strong>
        Darwin's work convinced because it left hardly a gap open – an effect that grew from
        decades of preparation, not from a single persuasive moment.</p>
        <p class="vb-intro"><strong>b) Reserved, yet unshakeable on substance:</strong>
        Darwin avoided the big stage but wouldn't be swayed on the substance of his theory –
        a combination that often makes Self-Preservation Fives easy to underestimate.</p>
        <p class="vb-intro"><strong>c) Trust earned through provability:</strong>
        Followers came not from charisma but because the sheer weight of evidence was hard to
        refute – the Five's gaze demands this provability of itself before expecting it of
        others.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Sparing with limited strength:</strong>
        Darwin's entire daily routine was designed to concentrate his limited energy on the
        essential – travel, socializing, and public appearances were consistently cut.</p>
        <p class="vb-intro"><strong>b) The body as enforcer of the Castle:</strong>
        Whether organic or psychosomatic, his chronic complaints forced exactly the
        withdrawal the Castle demanded anyway, supplying an additional, physical
        justification for retreating from the world.</p>
        <p class="vb-intro"><strong>c) Caution that can tip into paralysis:</strong>
        The Six-wing turned caution, at times, into near-paralyzing hesitation – twenty years
        between insight and publication, during which Darwin nearly lost credit for his own
        life's work.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Forty years of unexplained complaints:</strong>
        Nausea, vomiting after meals, heart palpitations, headaches, skin problems,
        debilitating exhaustion – from 1836 these symptoms accompanied Darwin almost until
        his death in 1882. Numerous doctors were consulted, numerous cures attempted, without
        a clear diagnosis ever being made.</p>
        <p class="vb-intro"><strong>b) The water cure as a ritual of control:</strong>
        Darwin repeatedly underwent elaborate hydrotherapy treatments at specialized
        clinics – strictly scheduled applications of cold water, wraps, and baths on a fixed
        regimen. This is the Six-wing within the illness itself: even the treatment had to be
        comprehensibly structured and controllable.</p>
        <p class="vb-intro"><strong>c) Withdrawal as a double necessity:</strong>
        The illness gave Darwin an additional, unassailable reason for the retreat the SE5's
        Castle demanded anyway – whether as cause or consequence of the withdrawn life is
        hardly separable in hindsight. Both reinforced each other over decades.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Marie Curie</a>
        (SE5w6) likewise consistently subordinated her own body to the work, until a chronic
        illness – radiological in her case, never clearly resolved in Darwin's – became a
        fixed part of life. Both cases show the same SE5 pattern: the body is declared
        secondary as long as the actual work in the refuge continues.</p>
        <p class="vb-intro"><strong>e) Why the stomach, of all places?</strong>
        The digestive tract is the body's actual boundary to the outside world: it decides
        what is let in and what is turned away. For a Self-Preservation Five, whose entire
        psychological strategy consists of selectively filtering outside stimuli – letting in
        only as much of the world as can be processed – it is tempting to see exactly this
        filter fail physically: Darwin's digestive system repeatedly rejected what was given
        to it, just as he himself consistently rejected travel, socializing, and public
        appearances. The stomach became the fortress wall Darwin had already drawn around
        himself – only from the inside. This reading is explored in more depth in this
        Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the Self-Preservation Five's pattern inevitably leads to chronic
        digestive complaints – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Darwin's case can show is a pattern that stands out again and
        again in practice wherever radical withdrawal from outside stimuli is present – one
        possible explanation among many, not a verdict. The corresponding condition will be
        developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Darwin did not know his own pattern – the self-preservation Five's radical withdrawal from the outside world, which gave him the quiet his life's work required, likely also carried his decades-long psychosomatic suffering along with it. Someone who does not recognize their own withdrawal as a protective pattern also fails to see its physical cost.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Five with Six-wing runs like a red thread through
        <strong>Darwin's</strong> own illness as well: a life radically reduced to the essential, a body that
        forced exactly the withdrawal the Castle demanded anyway, and a caution that, for
        twenty years, endangered even his own credit as discoverer. The owl that waited
        patiently until its insight was unassailable also had to learn to live with a body
        that never fully explained itself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-charles-darwin", label:"Portrait: Charles Darwin (SE5w6) – life's work"},
        {route:"beruehmte-marie-curie", label:"Portrait: Marie Curie (SE5w6)"},
        {route:"krankheitsportraets-marie-curie", label:"Illness Portrait: Marie Curie (SE5w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se5", label:"Subtype Profile SE5"},
      ])}
    </div>
  `);
}

export function davidHumeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-hume-portrait.jpg" alt="David Hume" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Hume</p>
        <p class="krim-portrait-typ">SE9w8 · Self-Preservation Type 9 with Eight-wing · 1711–1776</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Elephant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Animal correspondence: Elephant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Hume</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-david-hume">portrait under Famous Personalities</a>
        in this Compass – that page covers his philosophical life's work and his equanimity in
        doubt. This portrait is devoted to a chapter only referenced in passing there: a chronic bowel
        disease that increasingly weakened him in his final years – which he processed with the
        same remarkable calm with which he had philosophized his entire life.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hume</strong> is classified as the <strong>self-preservation Nine with
        Eight-wing</strong>. Naranjo called the self-preservation Nine <em>Appetite</em>: the
        longing for inner peace and comfort. The Eight-wing gives that equanimity an
        unshakeable steadfastness that can face even one's own death without flinching. It was
        exactly this combination of calm and inner firmness that shaped how Hume processed his
        final, fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First digestive complaints from 1772 on:</strong>
        About four years before his death, Hume noticed persistent digestive disturbances and
        diarrhea, which he initially dismissed as temporary and accepted with his usual
        composure.</p>
        <p class="vb-intro"><strong>b) Steady weight loss:</strong>
        In the following years, Hume, known throughout his life for his fondness for good food
        and sociable dinners, grew increasingly thin – a striking contrast to his earlier,
        often described as portly, appearance.</p>
        <p class="vb-intro"><strong>c) A trip to Bath for treatment:</strong>
        In 1775, Hume traveled to the English town of Bath to make use of its healing waters to
        ease his complaints – a common but ultimately ineffective remedy at the time against
        his progressing illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A diagnosis still not conclusively settled today:</strong>
        Medical historians today mostly suspect colorectal cancer or a severe chronic
        inflammatory bowel disease as the cause of Hume's symptoms – a definitive modern
        diagnosis can no longer be reconstructed from the historical sources.</p>
        <p class="vb-intro"><strong>b) Continuous progression over just over four years:</strong>
        Unlike some other Illness Portraits in this Compass, Hume's case involved no dramatic
        turning points or crises – his illness developed steadily and evenly, without major
        setbacks or periods of recovery.</p>
        <p class="vb-intro"><strong>c) Unbroken mental clarity to the end:</strong>
        Despite his physical decline, Hume's intellectual sharpness, according to consistent
        witness accounts, remained fully intact into his final weeks of life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) "My Own Life" – the final, sober reckoning:</strong>
        In April 1776, a few months before his death, Hume wrote the short autobiography "My
        Own Life" – a remarkably matter-of-fact, almost cheerful retrospective on his life, in
        which he noted his approaching mortality soberly and without any drama.</p>
        <p class="vb-intro"><strong>b) James Boswell's visit in July 1776:</strong>
        The writer James Boswell sought out the dying Hume to find out whether the famous
        skeptic might, in the face of death, show fear after all, or return to religious
        belief.</p>
        <p class="vb-intro"><strong>c) A composure that shook Boswell to the core:</strong>
        Hume calmly stated he saw no reason for concern and expected complete dissolution after
        death – an attitude that Boswell, himself deeply religious, described in his own diaries
        as unsettling and admirable at once.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Sociable evenings until shortly before the end:</strong>
        Even in his final weeks, Hume continued receiving friends for conversation and small
        dinners at his house in Edinburgh – the sociable lifestyle that had marked his entire
        life did not yield to illness without a fight.</p>
        <p class="vb-intro"><strong>b) Settling his own literary affairs:</strong>
        Hume put his papers and literary affairs in order, including the posthumous publication
        of the "Dialogues Concerning Natural Religion," with the same sober care with which he
        had organized his entire body of work.</p>
        <p class="vb-intro"><strong>c) Death on August 25, 1776, in Edinburgh:</strong>
        David Hume died at his house in Edinburgh, surrounded by close friends, at the age of
        65 – without the theatrical staging that some contemporaries might have expected from
        such a famous "godless" philosopher.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Eight-wing that did not flinch even in dying:</strong>
        The same willingness to think a position through to its radical end that shaped Hume's
        entire philosophical work also showed itself in the face of death – he refused every
        comforting illusion, without appearing bitter or despairing.</p>
        <p class="vb-intro"><strong>b) Appetite undimmed by the approaching end:</strong>
        The self-preservation Nine seeks peace in the familiar – Hume kept finding that peace to
        the end in conversation, books, and the company of friends, even as his body increasingly
        failed him.</p>
        <p class="vb-intro"><strong>c) No flight, no fight – only equanimity:</strong>
        Unlike many other Illness Portraits in this Compass, Hume's case shows neither a
        desperate fight against illness nor a resigned withdrawal – instead, an almost
        meditative composure that his entire philosophy had already anticipated.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness that became the final philosophical test:</strong>
        Hume had argued his entire life for a skeptical, illusion-free view of causality, the
        self, and proofs of God – his own fatal illness became the inescapable opportunity not
        only to advocate that stance, but to actually live it.</p>
        <p class="vb-intro"><strong>b) No turning point, no reversal:</strong>
        Unlike the deathbed conversion posterity might have hoped for from such a famous
        skeptic, Hume remained true to his philosophical stance to his final breath – the
        illness did not change his convictions, it confirmed them.</p>
        <p class="vb-intro"><strong>c) Why, of all things, the bowel?</strong>
        For a self-preservation Nine with Eight-wing, whose deepest need is to preserve inner
        peace and digestion in the most literal sense – the ability to calmly process everything
        taken in, without being thrown off balance – one reading suggests itself: precisely the
        organ responsible for intake, processing, and equilibrium became, in Hume, the site of a
        slow but unstoppable decline. This reading is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the self-preservation Nine's pattern inevitably leads to bowel
        disease – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Hume's case can show is a pattern that stands out again and again in practice
        wherever deep, philosophically grounded equanimity exists – one possible explanation
        among many, not a verdict. The corresponding condition will be developed step by step in
        this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Hume did not know his own pattern – and yet the self-preservation Nine with Eight-wing showed its most mature side precisely in his own illness: rather than avoiding or dramatizing the threat, he met his own decline with the same calm clarity with which he had practiced philosophy his whole life. Not every unconsciously lived pattern deepens suffering – sometimes it carries a person through, without them ever knowing why.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Hume's</strong> dying, the self-preservation Nine with Eight-wing reveals
        itself at its most mature: a fatal illness progressing over more than four years that
        produced neither struggle nor despair, but a rare, philosophically grounded equanimity.
        The elephant that left the world just as it had walked through it – unmoved, curious,
        with no need for the comfort of illusion.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-david-hume", label:"Portrait: David Hume (SE9w8) – life's work"},
        {route:"krankheitsportraets-johannes-brahms", label:"Illness Portrait: Johannes Brahms (SE9w8) – the same elephant-like calm"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Illness Portrait: Hans-Dietrich Genscher (SE9w8) – same subtype"},
        {route:"beruehmte-james-levine", label:"Portrait: James Levine (SE9w1)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se9", label:"Subtype Profile SE9"},
      ])}
    </div>
  `);
}

export function fjodorDostojewskiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fjodor-dostojewski-portrait.jpg" alt="Fjodor Dostoevsky – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fjodor Dostoevsky</p>
        <p class="krim-portrait-typ">SE6w5 · Self-Preservation Type 6 with Five-wing · 1821–1881</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Rabbit</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Animal correspondence: Rabbit" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fjodor Dostoevsky</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-fjodor-dostojewski">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only touched on in passing there: Dostoevsky suffered
        from epilepsy for the whole of his adult life – an illness he did not conceal but wrote
        directly into several of his most significant literary characters, above all Prince
        Myshkin in <em>The Idiot</em>.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Dostoevsky</strong> is classified as the <strong>Self-Preservation Six with
        Five-wing</strong> – the same subtype as
        <a href="javascript:void(0)" data-route="beruehmte-franz-schubert">Franz Schubert</a>
        in this Compass. Naranjo called the Self-Preservation Six <em>Warmth</em>: she seeks
        safety not through confrontation but through human closeness and belonging. The
        Five-wing adds the analytical depth to think every experience – including her own
        illness – through to the end, and to render it in literature.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Watchful for every warning sign:</strong>
        Dostoevsky described the seconds before an epileptic seizure – the so-called aura –
        with a precision hardly matched by any other sufferer in literary history. The
        Five-wing analyzes even one's own body down to the last detail.</p>
        <p class="vb-intro"><strong>b) Between ecstasy and loss of control:</strong>
        In this aura, Dostoevsky reported an overwhelming sense of harmony and certainty –
        followed by complete loss of control in the seizure itself. This exact tension between
        absolute safety and its sudden collapse is the core of the Six's fear.</p>
        <p class="vb-intro"><strong>c) Processed publicly, not concealed:</strong>
        Dostoevsky did not hide his illness but transferred it directly onto his characters –
        an unusual openness, for his time, about a then heavily stigmatized condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A lifelong companion:</strong>
        The first seizures appeared while he was still young – decades before Dostoevsky
        became a celebrated writer. The illness was no late fate but a constant companion of
        his entire body of work.</p>
        <p class="vb-intro"><strong>b) Worsening under existential pressure:</strong>
        Seizures increased during periods of extreme strain – during forced labor in Siberia,
        during the years of gambling addiction, during financial hardship. The SE6 responds to
        threat with heightened vigilance, which here translated directly into the body.</p>
        <p class="vb-intro"><strong>c) Literary processing as a constant:</strong>
        The illness appears in some form in nearly every major Dostoevsky novel – not as a
        minor detail, but as a central element of characterization.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Prince Myshkin as literary self-portrait:</strong>
        In <em>The Idiot</em> (1869), Dostoevsky gave his protagonist the same illness, the
        same auras, the same oscillation between otherworldly clarity and social
        vulnerability – one of the most direct instances of self-processing in literary
        history.</p>
        <p class="vb-intro"><strong>b) Precise medical observation:</strong>
        Dostoevsky's descriptions of the aura are still regarded by neurologists as among the
        most precise literary accounts of temporal lobe epilepsy – the Five-wing turns his own
        suffering into almost clinical observation.</p>
        <p class="vb-intro"><strong>c) The illness as a recurring motif, not a stigma:</strong>
        Rather than concealing his epilepsy, Dostoevsky made it a recurring narrative motif –
        in Smerdyakov in <em>The Brothers Karamazov</em> it even becomes a central plot
        device.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A body of work that turns illness into insight:</strong>
        Dostoevsky's novels still rank among the psychologically sharpest literature of the
        19th century – precisely because his own suffering flowed directly into his
        characters' psychology instead of remaining external.</p>
        <p class="vb-intro"><strong>b) Recognition despite stigma:</strong>
        At a time when epilepsy was often equated with moral weakness or even possession,
        Dostoevsky's openness made the illness fit for literature, without romanticizing it.</p>
        <p class="vb-intro"><strong>c) A medical as much as a literary legacy:</strong>
        The term "Dostoevsky epilepsy" is still used in neurological literature today – a rare
        fusion of literary and medical afterlife.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Creative power despite physical exhaustion:</strong>
        After severe seizures, Dostoevsky was often weakened for days – yet he always returned
        to work with the same intensity.</p>
        <p class="vb-intro"><strong>b) Fusion of suffering and work:</strong>
        For Dostoevsky, there was no separation between his own experience of illness and his
        literature – both flowed directly into each other, without distance.</p>
        <p class="vb-intro"><strong>c) The aura as brief, deceptive safety:</strong>
        The short feeling of absolute certainty before the seizure may itself have given
        Dostoevsky a measure for those moments of complete inner peace the SE6 spends her
        whole life seeking – even if bought at a steep physical price.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) One illness, an entire life:</strong>
        Dostoevsky already suffered from epilepsy in his youth – a condition that accompanied
        him until his death in 1881 and whose cause was untreatable in his lifetime.</p>
        <p class="vb-intro"><strong>b) The famous aura:</strong>
        Dostoevsky repeatedly described, including in letters, the fraction-of-a-second
        feeling before a seizure as the happiest moment of his life – a sensation of perfect
        harmony for which, as he himself wrote, he would have given years of his life.</p>
        <p class="vb-intro"><strong>c) Immediate literary processing instead of suppression:</strong>
        Unlike illness histories concealed for years, Dostoevsky processed his epilepsy
        directly and repeatedly in his work – most vividly in the figure of Prince Myshkin,
        whose seizures are modeled word for word on Dostoevsky's own experiences.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-franz-schubert">Franz Schubert</a>
        (SE6w5) likewise processed his fatal illness not in secret but within a circle of
        trust – for Schubert, the friends of the Schubertiades, to whom he sang <em>Winterreise</em>
        and asked how it made them feel; for Dostoevsky, the readers of his novels, to whom he
        communicated his illness through his characters. Both cases show the same SE6w5
        pattern: fear and suffering are not endured in isolation but shared in community –
        whether real or literary – and thereby made bearable.</p>
        <p class="vb-intro"><strong>e) Why this illness, of all things?</strong>
        The epileptic aura, as Dostoevsky described it, was the exact opposite of what one
        would expect from an illness: a brief moment of perfect certainty and harmony –
        immediately followed by the total loss of control of the seizure itself. For a
        Self-Preservation Six, whose entire life revolves around the search for safety and the
        fear of its sudden collapse, it is tempting to read exactly this sequence as a physical
        intensification of her own life pattern: the one moment of absolute certainty that
        dissolves, in the very next instant, unstoppably into loss of control – the Six's core
        fear, lived out literally in her own nervous system, over and over, for an entire
        lifetime. This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the Self-Preservation Six's pattern inevitably leads to epilepsy –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Dostoevsky's case can show is a pattern that stands out again and again in practice
        wherever existential fear is immediately processed into literature – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Dostoevsky did not know his own pattern – yet the self-preservation Six, who seeks safety in a familiar frame, found in the ever-recurring epileptic seizures a paradoxical anchor point that he transferred directly into his fictional characters, rather than experiencing the illness purely as threat. That, too, is a form of unconscious pattern integration: not struggle, but processing within one's own work.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Six with Five-wing is confirmed once more in
        <strong>Dostoevsky's</strong> own illness: a lifelong condition he did not hide but brought
        into language in his most significant works, and an aura that promised, in a fraction
        of a second, exactly the absolute safety his whole life was searching for – only to
        lose it again in the same instant. The rabbit that once stood before the firing squad
        carried his deepest fear, for the rest of his life, in his own nervous system too – and
        transformed it, again and again, into literature that still makes other people's fear
        more understandable today.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-fjodor-dostojewski", label:"Portrait: Fjodor Dostoevsky (SE6w5) – life's work"},
        {route:"beruehmte-franz-schubert", label:"Portrait: Franz Schubert (SE6w5)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se6", label:"Subtype Profile SE6"},
      ])}
    </div>
  `);
}

export function freddieMercuryKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-freddie-mercury-portrait.jpg" alt="Freddie Mercury" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Freddie Mercury</p>
        <p class="krim-portrait-typ">SX4w3 · Sexual Type 4 with Three-wing · 1946–1991</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Freddie Mercury</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-freddie-mercury">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This portrait is devoted to a chapter barely present there: an AIDS diagnosis kept
        strictly secret for nearly five years, which he confirmed himself only one day before
        his death in 1991.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Mercury</strong> is classified as the <strong>Sexual Four with Three-wing</strong>.
        SX4 turns personal pain and longing into an intensity that immediately affects others –
        uncompromisingly visible on stage. The Three-wing brings the ability to shape this
        inner life into striking public impact. Exactly this tension between radical
        self-revelation on stage and an equally radical control over his private life also
        shapes Mercury's illness history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Rumors he never confirmed:</strong>
        From the mid-1980s onward, press rumors about Mercury's health increasingly
        circulated – he himself never commented publicly, neither confirming nor denying
        them.</p>
        <p class="vb-intro"><strong>b) A diagnosis that remained private:</strong>
        According to his partner Jim Hutton's later recollections, Mercury was diagnosed with
        HIV in the spring of 1987 – information he shared even with close confidants only
        piece by piece over the years.</p>
        <p class="vb-intro"><strong>c) A stage presence that showed no decline:</strong>
        Right up to his last public appearance, the gap between the radiant stage persona and
        the increasingly weakened body behind it remained barely visible to the public.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A clear statement to the band:</strong>
        According to Roger Taylor, Mercury called the band together and said, in essence,
        that they probably realized what his problem was – but that it should not become
        known and should not make a difference; he just wanted to keep working "until I
        fucking well drop," and asked for their support in that.</p>
        <p class="vb-intro"><strong>b) Working on despite visible weakness:</strong>
        During the recording of "The Show Must Go On," Mercury could hardly stand, according
        to Brian May, but insisted on singing: "He could hardly stand, but he said 'I'll
        fucking do it, darling!'"</p>
        <p class="vb-intro"><strong>c) An album whose release was delayed:</strong>
        "Innuendo," recorded between March 1989 and November 1990, was pushed back from its
        originally planned release in late 1990 to February 1991 because of his health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) A final video shot deliberately in black and white:</strong>
        For the video to "These Are the Days of Our Lives," filmed on May 30, 1991, black and
        white was deliberately chosen to mask his visible physical decline – color footage
        that surfaced later showed how weakened he actually was.</p>
        <p class="vb-intro"><strong>b) "I still love you" – his last words on camera:</strong>
        Mercury barely moved in the video and carried the emotional weight almost entirely
        through facial expression; his whispered "I still love you" at the end is considered
        his last words on camera.</p>
        <p class="vb-intro"><strong>c) A press statement one day before his death:</strong>
        On November 23, 1991, Mercury confirmed the diagnosis himself in a brief statement:
        "I wish to confirm that I have been tested HIV-positive and have AIDS" – after years
        of strict secrecy, he said the time had now come for friends and fans around the
        world to know the truth.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on November 24, 1991:</strong>
        Mercury died one day after his press statement of bronchopneumonia as a complication
        of AIDS, at his home in London.</p>
        <p class="vb-intro"><strong>b) His partner Jim Hutton at his side:</strong>
        Jim Hutton, Mercury's partner for six years, was with him in his final hours. A few
        days earlier, Mercury reportedly told him: "I never realized you were as strong as
        you are."</p>
        <p class="vb-intro"><strong>c) A concert that became a global event:</strong>
        The Freddie Mercury Tribute Concert on April 20, 1992, at Wembley sold out within
        four hours and reached an estimated audience of up to one billion people worldwide –
        the proceeds founded the Mercury Phoenix Trust, still active today.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Complete control over his own narrative:</strong>
        The very SX4w3 ability to deliberately shape his own image let Mercury keep control
        over the interpretation of his illness until the very end – instead of leaving it to
        the press.</p>
        <p class="vb-intro"><strong>b) Intensity instead of withdrawal:</strong>
        Unlike an open breakdown, Mercury's response to the illness showed itself as
        heightened creative intensity – he used the time he had left to finish as much music
        as possible, rather than withdrawing.</p>
        <p class="vb-intro"><strong>c) The Chihuahua that kept barking to the very end:</strong>
        Up to the last possible moment, his creative energy remained unbroken – even as his
        body could no longer keep pace.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An identity that had always been reinvented:</strong>
        Mercury, born Farrokh Bulsara in Zanzibar, had reinvented himself throughout his
        life – even to his parents he fully concealed both his homosexuality and, later, his
        illness.</p>
        <p class="vb-intro"><strong>b) An illness hidden for years:</strong>
        From the first rumors in the mid-1980s through the 1987 diagnosis to the 1991 press
        statement runs a continuous but publicly almost entirely controlled line – nothing
        was wrested from him; everything was released by him on his own terms.</p>
        <p class="vb-intro"><strong>c) A final year between decline and creative power:</strong>
        Precisely in 1990/91 – visibly weakened physically – some of the most striking
        recordings of his career emerged, including "The Show Must Go On" and "These Are the
        Days of Our Lives."</p>
        <p class="vb-intro"><strong>d) Why, of all things, the immune system?</strong>
        For a Sexual Four with Three-wing whose identity was defined by uncompromising
        self-revelation on stage combined with strict control over his private life, one
        reading suggests itself: precisely the system that distinguishes and protects the
        self from the outside world became the site of collapse – while public control over
        his own image was maintained until the very end. This reading is a plausible
        interpretation, not a documented historical causal link, and is explored in more
        depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual Four's pattern inevitably leads to AIDS or other immune
        disorders – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Mercury's case can show is a pattern that stands out again and again in practice
        wherever the need exists to live radical self-revelation and strict control over
        privacy at the same time – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Mercury did not know his own pattern – the sexual Four with Three-wing hides its own vulnerability behind flawless stage performance, and that is exactly what let him keep his diagnosis secret for almost five years while working himself to complete exhaustion. Someone who does not know their own concealment pattern maintains the facade until literally no strength remains to hold it up.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Mercury's</strong> story, the Sexual Four with Three-wing reveals itself
        once more in full force: an illness concealed for years with iron self-control, a
        body visibly failing while his creative power remained unbroken to the end, and a
        final public word he chose for himself rather than having it taken from him. The
        Chihuahua that determined its own narrative to the last breath – and whose legacy,
        the Mercury Phoenix Trust, still carries on today.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-freddie-mercury", label:"Portrait: Freddie Mercury (SX4w3) – life's work"},
        {route:"krankheitsportraets-billie-eilish", label:"Illness Portrait: Billie Eilish (SX4w3) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function fritzPerlsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fritz-perls-portrait.jpg" alt="Fritz Perls" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Fritz Perls</p>
        <p class="krim-portrait-typ">SO8w7 &middot; Social Type 8 with Seven-wing &middot; 1893–1970</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Lion</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Animal correspondence: Lion" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fritz Perls</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-fritz-perls">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his role as co-founder of Gestalt
        therapy. This page explores a chapter only lightly sketched there: a years-long heart
        condition, decades of chain-smoking, and finally a pancreatic cancer operation, the
        complications of which he died from in 1970.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Perls</strong> is assigned to the <strong>Social Type 8 with Seven-wing</strong>.
        The SO8 openly deploys its strength to build and protect a community; the
        Seven-wing adds a restless hunger for full, unrestrained life experience. This
        exact combination – strength that permits no weakness, paired with the Seven's
        drive to keep constantly in motion – also determined how Perls handled his own,
        years-long heart condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A chain smoker since the war:</strong>
        Perls had smoked his first cigarette at age eight and, by his own and others'
        accounts, became a lifelong chain smoker as a result of his experiences in the
        First World War.</p>
        <p class="vb-intro"><strong>b) Heart damage from an earlier operation:</strong>
        An injury to his neck related to anesthesia led over the years to a lasting heart
        weakness that would accompany Perls from then on.</p>
        <p class="vb-intro"><strong>c) Physical capacity initially compensated:</strong>
        Despite the heart damage, Perls remained physically active for long stretches – he
        could still walk, travel, and take part in demanding workshops without the
        condition visibly limiting his life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Undiminished travel across continents:</strong>
        Even with the known heart condition in the background, Perls continued his
        restless life between Europe, South Africa, and the USA, and later between New
        York, Esalen, and Canada, essentially unchanged.</p>
        <p class="vb-intro"><strong>b) No public discussion of his own illness:</strong>
        In his workshops and public appearances, his own health vulnerability played no
        discernible role – Perls remained, until the end, the confrontational, physically
        present figure he had always been.</p>
        <p class="vb-intro"><strong>c) Continued smoking despite the heart condition:</strong>
        By several accounts, Perls never fully gave up smoking despite his known heart
        problem – a pattern that further strained his physical condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Founding a new project shortly before his death:</strong>
        As late as 1969/1970, Perls founded a Gestalt kibbutz project in Canada – a new
        community project begun while his physical condition was already compromised.</p>
        <p class="vb-intro"><strong>b) Diagnosis of pancreatic cancer:</strong>
        In his final months, a pancreatic cancer diagnosis was added to his existing heart
        weakness, requiring surgery.</p>
        <p class="vb-intro"><strong>c) Surgery at Louis A. Weiss Memorial Hospital in Chicago:</strong>
        Perls underwent the cancer surgery in Chicago; his heart could not withstand the
        strain of the procedure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death on March 14, 1970, in Chicago:</strong>
        Perls died shortly after the surgery from acute heart failure – the heart weakness
        he had compensated for over years finally gave way under the additional surgical
        strain.</p>
        <p class="vb-intro"><strong>b) A famously blunt final reaction:</strong>
        By several accounts, Perls remained true to his confrontational, direct manner
        even in death, reacting even in his final moments not evasively but directly.</p>
        <p class="vb-intro"><strong>c) No discernible break in his public work beforehand:</strong>
        Right up to the months before the surgery, Perls continued his travel and lecture
        activity essentially undiminished – there is no indication of a deliberate
        withdrawal for health reasons before the acute cancer diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Strength that must not show weakness:</strong>
        The same SO8 conviction that strength must be displayed openly rather than
        concealed also determined Perls's handling of his own heart condition – no public
        vulnerability, but unchanged physical presence right up until shortly before his
        death.</p>
        <p class="vb-intro"><strong>b) The Seven-wing and the refusal to slow the pace:</strong>
        The restless hunger for new experience that carried Perls's entire life kept him
        from adopting a calmer pace even with a known heart weakness – shortly before his
        death he founded a new community project rather than easing off.</p>
        <p class="vb-intro"><strong>c) Chain-smoking as a physical expression of the Seven's restlessness:</strong>
        His continued smoking despite a known heart problem can be read as an expression of
        the same unrestrained Seven energy that also shaped his therapeutic style –
        enjoyment and intensity, without regard for later consequences.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A heart never publicly regarded as weak:</strong>
        Perls's entire therapeutic presence rested on immediate, physical presence and the
        refusal to accept excuses or weakness – precisely his own heart, which carried
        exactly that presence, quietly became a burden over the years without him ever
        making it a topic.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-john-gotti">John Gotti</a>
        (also SO8w7) was diagnosed with laryngeal cancer while in isolation in 1998 without
        ever allowing a public admission of weakness; Perls responded to his own, far
        longer-standing heart condition with the same basic stance – no visible
        vulnerability, no reduction of his own pace. Both cases show the same SO8w7
        pattern: the Eight with a Seven-wing does not let a progressive illness take away
        its own strength until the body itself sets the limit. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-john-gotti">Illness Portrait of John Gotti</a>.</p>
        <p class="vb-intro"><strong>c) Why the heart, of all things?</strong>
        For a Social Eight with a Seven-wing, whose entire impact rested on open,
        unfiltered strength and presence, one interpretation suggests itself: precisely the
        organ that figuratively stands for strength, courage, and vitality became the site
        of a quiet weakness concealed for years. This interpretation is a plausible
        reading, not a documented historical causal link, and will be developed further in
        this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Social Eight's pattern inevitably leads to heart
        disease – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Perls's case illustrates is a pattern in how a pronounced Social Eight with a
        Seven-wing tends to handle chronic physical strain – one of many possible
        interpretations, not a verdict. The corresponding illness picture is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Perls did not know his own pattern – the Social Eight with a Seven-wing reflexively
        mistakes concealing its own vulnerability for strength instead of ever
        acknowledging its own physical limit, and he lived out exactly this pattern
        unchanged until his death. Someone who does not recognize their own invulnerability
        fixation as a pattern mistakes concealment for strength until the body presents the
        bill.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Eight with a Seven-wing explains much about the course of
        <strong>Fritz Perls's</strong> own illness: a man whose entire impact rested on
        open, unfiltered strength concealed his own, years-long heart condition until the
        end – the lion that never rested until the last confrontation, even as his own
        heart had long been asking for rest.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-fritz-perls", label:"Portrait: Fritz Perls (SO8w7) – co-founder of Gestalt therapy"},
        {route:"krankheitsportraets-john-gotti", label:"Illness Portrait: John Gotti (SO8w7) – the same refusal to admit weakness"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so8", label:"Subtype Profile SO8"},
      ])}
    </div>
  `);
}

export function gustavMahlerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gustav-mahler-portrait.jpg" alt="Gustav Mahler – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gustav Mahler</p>
        <p class="krim-portrait-typ">SO4w5 · Social Type 4 with Five-wing · 1860–1911</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Gustav Mahler</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-gustav-mahler">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only lightly sketched there:
        in 1907, Mahler was diagnosed with a severe, bacterially caused heart valve infection
        (subacute endocarditis) – the same year he also lost his daughter Maria and his
        position at the Vienna Court Opera. The illness shaped his final four years and his
        late work until his death in 1911.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Mahler</strong> is classified as the <strong>Social Four with Five-wing</strong>
        – the same subtype as
        <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">Marcel Proust</a>
        in this Compass. The Social Four seeks out the group in order to live out her tragic
        uniqueness visibly there, rather than suffering in private. The Five-wing adds the urge
        not just to live through one's own emotional world but to cast it into a vast,
        thoroughly constructed system – for Mahler, the symphony as a "design of the world"
        that ultimately had to encompass his own mortality as well.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Turned inward, deeply feeling:</strong>
        Mahler's gaze always sought his own emotional world and translated it directly into
        sound – the typical Four's gaze, which does not suppress experience but shapes it.</p>
        <p class="vb-intro"><strong>b) Watchful of his own heartbeat:</strong>
        After the 1907 diagnosis, Mahler began meticulously monitoring his pulse – the same
        analytical precision he otherwise devoted to his scores now turned onto his own body.</p>
        <p class="vb-intro"><strong>c) Publicly visible, even in suffering:</strong>
        Unlike Molière (SO7w6), who concealed his illness, Mahler processed his diagnosis
        immediately and publicly – in his work, before an audience his music often unsettled.
        This is SO4-typical visibility, not One-like concealment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The triple blow of 1907:</strong>
        Within a few months, Mahler lost his daughter, his position at the Vienna Court Opera,
        and received the diagnosis of his own fatal heart condition – the Social Four does not
        conceal such suffering but translates it directly into art.</p>
        <p class="vb-intro"><strong>b) Medical restrictions as a new reality:</strong>
        Mahler was instructed to give up strenuous exercise and drastically limit his physical
        activity – a painful cut for a man who had previously taken hours-long mountain
        hikes.</p>
        <p class="vb-intro"><strong>c) Continuing to work despite the diagnosis:</strong>
        Rather than withdrawing, Mahler composed some of his most significant works in his
        remaining years – Das Lied von der Erde, the Ninth Symphony, the unfinished Tenth. The
        illness did not slow his productivity; it accelerated it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The superstition of the Ninth:</strong>
        Out of fear of the "curse of the Ninth" – since several great composers died after
        their ninth symphony – Mahler deliberately did not number Das Lied von der Erde as a
        symphony. History's irony: he died anyway, shortly after completing his actual Ninth
        and in the middle of working on the Tenth.</p>
        <p class="vb-intro"><strong>b) Traveling despite weakness:</strong>
        Even after the diagnosis, Mahler traveled to the United States multiple times to
        conduct the New York Philharmonic – the Social Four seeks the stage even as the body
        sets limits.</p>
        <p class="vb-intro"><strong>c) The illness as compositional material:</strong>
        Rather than concealing or suppressing the diagnosis, it flowed directly into his final
        works – Das Lied von der Erde ends with the famous, repeated word "ewig" (forever), a
        musical farewell read as a direct response to his own mortality.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Tragedy that becomes art:</strong>
        Mahler's late work still ranks among the most moving music in the concert repertoire –
        precisely because his own mortality becomes directly audible instead of staying
        hidden.</p>
        <p class="vb-intro"><strong>b) A work ahead of its time:</strong>
        Celebrated in his lifetime mainly as a conductor, Mahler's compositional work was only
        recognized as significant decades after his death – an audience that could only
        follow his radical openness in retrospect. This is typical of gifted individuals of
        the Social Four subtype: they often set groundbreaking developments in motion that go
        unrecognized in their own lifetime and only gain their true significance after their
        death – almost as if fate were mirroring the SO4's position as the Four's classic
        intensifying type, who lives out the Four's passion of envy all the more intensely:
        someone who spends an entire life striving to be a person of special
        significance tends not to find that significance precisely when pursued most directly,
        but only afterward, unconsciously, once the ego itself is no longer in the way. What
        the ego insists on obtaining, it typically does not receive, or not to the degree it
        wished for.</p>
        <p class="vb-intro"><strong>c) Visible suffering as a legacy:</strong>
        Unlike concealed or suppressed illness histories, Mahler's final chapter lies openly
        documented – in letters, in the recollections of colleagues, and above all in the
        music itself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Concentrated creative power under time pressure:</strong>
        Awareness of his own mortality accelerated rather than slowed Mahler's productivity –
        his final works emerged with an intensity that left little room for pause.</p>
        <p class="vb-intro"><strong>b) Fusion of life and work:</strong>
        For Mahler there was no separation between his own experience of illness and his
        music – both flowed directly into each other, without distance or delay.</p>
        <p class="vb-intro"><strong>c) Restlessness despite physical limits:</strong>
        Even with restricted capacity, Mahler conducted, traveled, and composed almost until
        his death – an energy that repeatedly defied medical caution.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A year of triple upheaval:</strong>
        In 1907, within a few months, Mahler lost his daughter Maria, his position at the
        Vienna Court Opera through antisemitically motivated campaigns, and received the
        diagnosis of subacute bacterial endocarditis – a heart valve infection considered
        incurable at the time.</p>
        <p class="vb-intro"><strong>b) Counting his own pulse:</strong>
        Contemporary accounts describe how Mahler, after the diagnosis, began meticulously
        monitoring and counting his own heartbeat – the same analytical precision his strong
        Five-wing otherwise devoted to his scores now turned onto his own failing organ. The
        Social Four is, because of a perfectionist tendency that pulls her toward her growth
        point, the One, also known as "the critical commentator" – paradoxically: what would be
        healthy, benevolent self-correction for the One herself often shows up in the Four,
        even at baseline, as relentless self-criticism, never quite satisfied with her own
        work, without the Four thereby becoming a One. In illness, under the mounting energy
        loss and blows of fate of those years, this pattern intensified further on a
        psychological level – a critical commentator who was never
        quite satisfied with his own work.</p>
        <p class="vb-intro"><strong>c) Artistic processing instead of suppression:</strong>
        Unlike Molière (SO7w6) or Freud (SO6w5), who concealed their illness for years, Mahler processed his
        diagnosis directly in his work – Das Lied von der Erde and the Ninth Symphony are seen
        as a direct artistic confrontation with his own approaching death. The Social Four does
        not hide her suffering; she makes it the central subject of her art.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">Marcel Proust</a>
        (SO4w5) likewise knew his lifelong asthma would kill him young, and worked on his
        life's work until his deathbed to finish it in time – his own
        <a href="javascript:void(0)" data-route="krankheitsportraets-marcel-proust">illness portrait</a>
        shows the same SO4w5 pattern: knowledge of one's own mortality is not suppressed but
        turned into a race against time that makes the late work the most urgent statement of
        an entire body of work.</p>
        <p class="vb-intro"><strong>e) Why the heart, of all places?</strong>
        The heart has always been the symbol of feeling, longing, and emotional depth – exactly
        the qualities on which the Four's entire identity rests. For a Social Four whose
        passion and art are fed by an overflowing, often painful emotional life, it is tempting
        to read an illness of the heart itself as an intensification of her own life pattern:
        an organ that had spent decades translating loss, longing, and intensity into music
        finally failed, quite literally, under that weight. Mahler answered this not with
        withdrawal but with even denser, even more immediate musical processing – until the
        heart that had made his art possible in the first place became the subject of his
        final works themselves. This reading is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the Social Four's pattern inevitably leads to heart disease –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Mahler's case can show is a pattern that stands out again and again in practice
        wherever existential suffering is immediately processed into art – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Mahler did not know his own pattern – the social Four reflexively processes loss and threat into expression rather than rest, and so he poured his own heart diagnosis directly into his late work instead of easing off. Someone who does not know their own pattern mistakes artistic processing for healing.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Four with Five-wing is reflected once more, clearly, in
        <strong>Mahler's</strong> own course of illness: existential suffering not concealed but transformed into
        monumental, all-encompassing art, and a heart that had spent decades translating
        longing and loss into music before it became the final, most urgent subject of his
        work itself. The armadillo, who stood at the center of Vienna's musical world and yet
        never fully belonged, also translated his own dying into a soundscape that still
        resonates today.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-gustav-mahler", label:"Portrait: Gustav Mahler (SO4w5) – life's work"},
        {route:"krankheitsportraets-marcel-proust", label:"Illness Portrait: Marcel Proust (SO4w5) – the same race against time"},
        {route:"krankheitsportraets-edgar-allan-poe", label:"Illness Portrait: Edgar Allan Poe (SO4w5)"},
        {route:"krankheitsportraets-leonard-cohen", label:"Illness Portrait: Leonard Cohen (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function hundertwasserKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hundertwasser-portrait.jpg" alt="Friedensreich Hundertwasser" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedensreich Hundertwasser</p>
        <p class="krim-portrait-typ">SX9w8 · Sexual Type 9 with Eight-Wing · 1928–2000</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Sloth</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Animal correspondence: Sloth" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedensreich Hundertwasser</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-hundertwasser">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: his
        years-long heart condition, which he largely kept private, which he did not have
        treated conventionally, and from which he died in February 2000 aboard a ship.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hundertwasser</strong> is assigned to the <strong>sexual Type 9 with
        Eight-Wing</strong>. The SX9 seeks total fusion with an ideal – for Hundertwasser,
        nature; the Eight-Wing adds the confrontational force that enforces its own
        principle against any resistance if necessary. Exactly this combination – fusion
        with a nature-bound ideal, combined with a refusal to submit to any outside
        authority, including conventional medicine – shaped how he dealt with his own
        illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A heart condition that persisted for years:</strong>
        According to consistent biographical sources, Hundertwasser suffered from chronic
        heart failure in his final years, known to those around him but rarely addressed
        publicly by him.</p>
        <p class="vb-intro"><strong>b) A life spent between Vienna, New Zealand, and the ocean:</strong>
        Hundertwasser spent much of his last years traveling between his residences, often on
        long sea crossings rather than by plane – a deliberate choice for slowness over
        haste.</p>
        <p class="vb-intro"><strong>c) Reservation toward conventional medical treatment:</strong>
        As documented for many nature-medicine-minded contemporaries of his generation,
        Hundertwasser was skeptical of aggressive conventional intervention and preferred a
        lifestyle in as close contact with nature as possible.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Undiminished workload despite illness:</strong>
        Until the very end, Hundertwasser traveled the world for exhibitions, building
        projects, and public appearances without noticeably slowing the pace of his life.</p>
        <p class="vb-intro"><strong>b) The ocean liner as his preferred mode of travel:</strong>
        He regularly traveled aboard the ocean liner <em>Queen Elizabeth 2</em> between Europe
        and the Pacific – a weeks-long, slow form of travel that suited his ideal of nature
        but, in an emergency, left him far from fast medical care.</p>
        <p class="vb-intro"><strong>c) No public illness narrative:</strong>
        Unlike some contemporaries, Hundertwasser never turned his heart condition into a
        public topic – unlike his loud manifestos on architecture and ecology, it remained a
        private matter.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Death aboard the Queen Elizabeth 2:</strong>
        On 19 February 2000, Hundertwasser died of heart failure at age 71 aboard the ship,
        on his way back to New Zealand – in the middle of the Pacific, far from any clinic.</p>
        <p class="vb-intro"><strong>b) Burial according to his own unusual wishes:</strong>
        Following instructions in his will, he was buried on his property in New Zealand
        without a coffin, wrapped in linen, under a tulip tree in the "Garden of the Happy
        Dead" – the final consequence of his lifelong ideal of fusion with nature.</p>
        <p class="vb-intro"><strong>c) No public announcement of slowing down:</strong>
        Until his death, Hundertwasser showed no signs of an approaching slowdown – no
        announced retirement, no public admission of weakness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death that fit the work:</strong>
        Many obituaries read the very circumstances of his death – at sea, far from
        civilization, buried according to his own wishes – as the consistent conclusion of a
        life that had always pushed against convention and toward connection with nature.</p>
        <p class="vb-intro"><strong>b) A posthumous legacy that remained unchanged and alive:</strong>
        His buildings – the Hundertwasser House in Vienna, the Green Citadel in Magdeburg,
        the KunstHausWien – remained internationally visited landmarks after his death and
        still shape the public image of ecological architecture today.</p>
        <p class="vb-intro"><strong>c) No later mythologizing of the illness:</strong>
        Unlike with some artists, his heart condition never became part of the public legend
        – it remained a quiet, almost incidental part of his biography, while his manifestos
        and buildings dominate public memory.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Fusion with the pace of travel instead of adapting to the illness:</strong>
        The SX9's characteristic longing to fuse with something larger also showed in the
        fact that Hundertwasser did not subordinate his travel pace – the slow sea crossing
        instead of the fast flight – to the health risk, but stayed true to his ideal of
        nature.</p>
        <p class="vb-intro"><strong>b) The Eight-Wing and the refusal to admit weakness:</strong>
        The same confrontational force with which Hundertwasser stood against social
        convention at his nude speeches showed itself in dealing with his own illness as a
        refusal to bow to the authority of conventional medicine or to the expectation of a
        calmer lifestyle.</p>
        <p class="vb-intro"><strong>c) The last fusion: death at sea, burial in the earth:</strong>
        That his life ended on the ocean and his final resting place lies without a coffin,
        directly in the earth under a tree, can be read as the ultimate consequence of his
        lifelong ideal of fusion – no accident, but the last consequence of a principle held
        to the end.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A man who preached connection with nature and did not resist his own nature:</strong>
        Hundertwasser's entire body of work rested on the conviction that humans should not
        stand against nature but fuse with it – and in the end, he met his own body and its
        limits with exactly this attitude: no fight, no resistance, but a life at the
        accustomed pace right up to the last moment.</p>
        <p class="vb-intro"><strong>b) Why the heart, of all things?</strong>
        For a sexual Nine with an Eight-Wing whose entire work revolved around the image of
        fusion – human with nature, speaker with audience, name with principle – one
        interpretation suggests itself: exactly the organ that popularly stands for
        connection and devotion became, in his case, the site of physical failure. This
        reading is a plausible interpretation, not a proven clinical causal link, and will be
        developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the sexual Nine's pattern inevitably leads to heart disease –
        <strong>any person can develop any illness, regardless of subtype.</strong> What can
        be shown in Hundertwasser's case is a pattern in dealing with a progressive illness
        that keeps recurring in a pronounced sexual Nine with Eight-Wing – one of many
        possible readings, not a verdict. The corresponding illness pattern is being
        developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Hundertwasser did not know his own pattern as an Enneagram structure – the sexual
        Nine with Eight-Wing reflexively clings to fusion with its own ideal instead of
        pausing in time, and lived out exactly this pattern unchanged until his last day,
        never making his own heart condition a central topic. Anyone who does not recognize
        their own tendency to submit completely to a larger principle as a pattern risks that
        this fusion ends only with complete physical collapse.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Nine with Eight-Wing explains much about how <strong>Friedensreich
        Hundertwasser</strong> handled his own illness: a man whose entire life's work was
        devoted to fusion with nature ultimately accepted his own heart failure as part of
        that same natural cycle – not a fight against death, but the sloth's final, most
        complete fusion with the element to which it had devoted its whole life.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-hundertwasser", label:"Portrait: Friedensreich Hundertwasser (SX9w8)"},
        {route:"krankheitsportraets-diego-velazquez", label:"Illness Portrait: Diego Velázquez (SX9w1)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx9", label:"Subtype Profile SX9"},
      ])}
    </div>
  `);
}

export function johannSebastianBachKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-johann-sebastian-bach-portrait.jpg" alt="Johann Sebastian Bach" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johann Sebastian Bach</p>
        <p class="krim-portrait-typ">SX1w9 · Sexual Type 1 with Nine-wing · 1685–1750</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Black Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Animal correspondence: Black Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Johann Sebastian Bach</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-johann-sebastian-bach">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page explores in depth a chapter that page treats only in passing: a
        years-long progressive blindness, two failed eye operations, and Bach's death only
        months later in 1750.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Bach</strong> is classified as the <strong>Sexual Type 1 with Nine-wing</strong>.
        SX1 directs the One's striving for perfection not at the whole world, but with
        uncompromising intensity at the innermost circle – at one single cause, one single
        calling, for which no effort is too great. The Nine-wing adds a calm, undramatic
        persistence: Bach rarely complained, he simply kept working – a pattern traceable
        right into his final months of near-total blindness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The eyes as an instrument of devotion, not of self-preservation:</strong>
        As a boy, tradition holds, Bach secretly copied forbidden sheet music by moonlight –
        an early willingness to stake his own eyesight for music, decades before it was
        actually at risk.</p>
        <p class="vb-intro"><strong>b) Failing sight accepted as reality, not as an alarm signal:</strong>
        The increasingly shaky, barely legible handwriting of his last manuscripts documents
        a years-long progressive weakening of his eyesight that Bach apparently endured while
        continuing to work, rather than withdrawing early.</p>
        <p class="vb-intro"><strong>c) Focus on the one work despite failing vision:</strong>
        Even in the late 1740s, Bach was working on major, highly complex compositions such
        as the Mass in B minor – a focus on the essential that is typical of the Sexual One
        with Nine-wing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A gradual decline with no clear diagnosis:</strong>
        Contemporary sources document no precise onset of the eye disease – in retrospect it
        is interpreted as cataract, though it was never clearly diagnosed at the time.</p>
        <p class="vb-intro"><strong>b) Two operations in March 1750:</strong>
        Bach underwent two procedures by the traveling, self-styled "Chevalier" John Taylor,
        a British eye surgeon of dubious reputation. The method used, so-called "couching,"
        displaced the clouded lens rather than removing it – an already outdated, risky
        procedure at the time.</p>
        <p class="vb-intro"><strong>c) Complete blindness after the second operation:</strong>
        About a week later, a second operation was needed because the cataract had returned.
        This second procedure resulted in Bach's complete blindness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The same surgeon, the same fate for Handel:</strong>
        Shortly after Bach, John Taylor also operated on Georg Friedrich Handel – with
        similarly disastrous results. Two of the Baroque era's most significant composers
        were blinded by the same dubious "miracle healer."</p>
        <p class="vb-intro"><strong>b) Four months between blindness and death:</strong>
        On July 28, 1750, roughly four months after the operations, Bach died following a
        stroke that, according to the obituary published in 1754, was preceded by a
        "feverish illness" – likely a febrile infection.</p>
        <p class="vb-intro"><strong>c) The causal link remains interpretation, not established fact:</strong>
        Whether the operations themselves triggered the fatal course of events is a
        plausible connection widely made in the research literature, but not conclusively
        proven – no autopsy in the modern sense exists.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A popular legend that does not hold up to research:</strong>
        The romantic story that Bach died in the middle of composing the final fugue of "The
        Art of Fugue" is now debunked – the autograph of the last, unfinished fugue dates
        from 1748/49, that is, from before his blindness.</p>
        <p class="vb-intro"><strong>b) The Mass in B minor as the more plausible final work:</strong>
        Bach scholar Christoph Wolff argues that the Mass in B minor should instead be
        regarded as Bach's actual final completed major work – one he apparently finished
        despite considerable visual impairment.</p>
        <p class="vb-intro"><strong>c) A retrospective diagnosis still debated today:</strong>
        Some researchers suspect advanced diabetes as the cause of both the failing eyesight
        and the poor wound healing after the surgery – a modern conjecture, not an
        established historical diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Work as a constant despite failing sight:</strong>
        Bach apparently did not let his progressive vision loss deter him from his
        compositional work – an expression of the intensity with which the Sexual One
        devotes itself to the one, all-encompassing cause.</p>
        <p class="vb-intro"><strong>b) Nine-wing calm in the face of risk:</strong>
        The decision to undergo a risky, already controversial procedure rather than live
        with blindness shows a calm, almost fatalistic willingness to take risks – not a
        dramatic struggle, but a quiet attempt to solve the problem and keep working.</p>
        <p class="vb-intro"><strong>c) The black mamba that stayed precise to the last strike:</strong>
        Even in his final months, nearly completely blind, Bach's compositional thinking
        apparently remained undiminished in its sharpness – a precision that no impairment
        could cloud.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A risk that began in childhood:</strong>
        Tradition holds that the young Bach secretly copied forbidden sheet music by
        moonlight – an early, self-chosen strain on his own eyes in the service of music,
        decades before actual blindness set in.</p>
        <p class="vb-intro"><strong>b) Years of gradual loss, without public complaint:</strong>
        The increasingly illegible handwriting of his final manuscripts is the only
        surviving evidence of a decline that Bach apparently never placed at the center of
        his own writings.</p>
        <p class="vb-intro"><strong>c) Two operations, one loss, four months to death:</strong>
        The close timing between complete blindness in March 1750 and Bach's death on July
        28, 1750, is well documented historically, even though the exact causal chain
        remains a matter of ongoing interpretation.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the eyes?</strong>
        For a Sexual One whose entire devotion is directed with uncompromising intensity at
        the one cause to which it has committed itself, one reading suggests itself: the
        eyes were, for Bach, throughout his life, the organ through which he submitted
        himself to his calling – copying by candlelight as a child, bent over sheet music as
        a composer. That precisely this organ failed in the end, after a lifetime of being
        used without regard for his own well-being, reads as the consistent conclusion of a
        pattern already established in childhood. This reading is a plausible
        interpretation, not a documented historical causal link, and is explored in more
        depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual One's pattern inevitably leads to eye disease –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Bach's case can show is a pattern that stands out again and again in practice
        wherever uncompromising devotion to a single calling exists, without regard for one's
        own physical limits – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Bach did not know his own pattern – the sexual One with Nine-wing seeks the one, perfect solution, and it was exactly this drive toward perfection that led him to undergo a risky operation twice by the same dubious oculist, rather than stopping after the first failure. Someone who does not recognize their own striving for the perfect solution repeats the same mistake, hoping this time will be different.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Bach's</strong> Sexual One with Nine-wing becomes visible once more in his own
        illness: an organ he already risked as a child and used, as an adult, right
        up to complete blindness, two risky operations he underwent calmly and without
        public fuss, and a death four months later whose exact cause remains a subject of
        research to this day. The black mamba that kept composing even in the dark –
        precise to the very end.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-johann-sebastian-bach", label:"Portrait: Johann Sebastian Bach (SX1w9) – life's work"},
        {route:"krankheitsportraets-gunther-von-hagens", label:"Illness Portrait: Gunther von Hagens (SX1w9) – same subtype, the same persistence despite an attack on his core faculty"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx1", label:"Subtype Profile SX1"},
      ])}
    </div>
  `);
}

export function juliusCaesarKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-julius-caesar-portrait.jpg" alt="Julius Caesar" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julius Caesar</p>
        <p class="krim-portrait-typ">SO2w3 · Social Type 2 with Three-wing · 100–44 BC</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Julius Caesar</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-julius-caesar">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general. This
        page examines a chapter that page does not address at all: a recurring illness –
        likely epilepsy – attested by multiple ancient sources, which Caesar concealed his
        entire life and which may even have contributed to his assassination.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Caesar</strong> is classified as the <strong>Social Two with Three-wing</strong>.
        As Naranjo describes, the SO2 invests not in reserves but in relationship, admiration,
        and indispensability on a grand scale. The Three-wing adds the refusal to let weakness
        – including one's own physical weakness – hold one back, and the ability to actively
        shape every image of oneself. This exact pattern can be traced right into Caesar's
        handling of his own, concealed illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Ancient sources that agree:</strong>
        Both Plutarch and Suetonius independently report that Caesar suffered from the
        "falling sickness" (morbus comitialis) – the ancient term for what is today read as
        epilepsy.</p>
        <p class="vb-intro"><strong>b) A seizure in the middle of a campaign:</strong>
        Plutarch describes a seizure during the Battle of Thapsus in 46 BC, in which Caesar
        had to be carried from the battlefield by his men while the engagement continued.</p>
        <p class="vb-intro"><strong>c) A second documented incident at Corduba:</strong>
        Another seizure is said to have occurred in 45 BC at Corduba (present-day Córdoba,
        Spain) during a public address – a moment at which restraint before his own troops
        would have seemed almost unthinkable for a general.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) An unclear onset:</strong>
        Whether the seizures accompanied Caesar from a young age or developed only in his
        final years cannot be reliably reconstructed from the surviving sources – modern
        scholarship debates both possibilities.</p>
        <p class="vb-intro"><strong>b) A medical-historical debate still open today:</strong>
        Alongside epilepsy, modern physicians and historians also discuss alternative
        explanations, including repeated minor strokes (transient ischemic attacks) resulting
        from decades of campaign strain. A definitive retrospective diagnosis is no longer
        possible more than two thousand years later.</p>
        <p class="vb-intro"><strong>c) No public acknowledgment by Caesar himself:</strong>
        In none of his surviving writings, not even in the detailed <em>Commentarii</em>, does
        Caesar so much as hint at his own illness – a striking silence from a man who
        otherwise had every detail of his achievements meticulously documented.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Continued campaigning despite the seizures:</strong>
        Neither the incident at Thapsus nor the one at Corduba kept Caesar from resuming his
        campaigns immediately – both times he returned to command within a short period, as if
        nothing had happened.</p>
        <p class="vb-intro"><strong>b) A reduced bodyguard in his final months:</strong>
        Contemporary accounts report that Caesar deliberately reduced his personal guard in
        the weeks before his assassination – behavior some historians link to a diminishing
        confidence in his own physical invulnerability, others to purely political
        calculation.</p>
        <p class="vb-intro"><strong>c) The assassination on 15 March 44 BC:</strong>
        Caesar was killed in the Senate by a group of conspirators with 23 stab wounds – a
        violent end not directly connected to the illness itself, though its prehistory is
        threaded through with questions about Caesar's vulnerability and invulnerability.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) An illness that became a literary icon:</strong>
        Shakespeare's play <em>Julius Caesar</em> (c. 1599) dramatizes a public seizure in the
        forum – a scene that has anchored Caesar's "falling sickness" in the collective
        consciousness to this day, regardless of the precise historical facts.</p>
        <p class="vb-intro"><strong>b) A possible role in the conspirators' calculations:</strong>
        Some historians speculate that perceived signs of physical weakness – alongside
        Caesar's growing accumulation of power – may have influenced the timing of the
        assassination. This cannot be conclusively proven.</p>
        <p class="vb-intro"><strong>c) The contrast between public image and private reality:</strong>
        Hardly any other ruler of antiquity shaped his public image as deliberately as Caesar
        did – and hardly any kept a physical weakness of his own so consistently out of that
        image.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The Golden Retriever that could not show weakness:</strong>
        For a man whose entire impact rested on indispensability and admiration, a publicly
        acknowledged illness would have threatened not just his physical but his emotional
        core security.</p>
        <p class="vb-intro"><strong>b) Returning to command as self-proof:</strong>
        Both documented incidents at Thapsus and Corduba followed the same pattern: seizure,
        brief interruption, immediate return to full capability – a demonstrative confirmation
        of his own invulnerability, precisely because the opposite had just been shown.</p>
        <p class="vb-intro"><strong>c) Trust in his own indispensability to the very end:</strong>
        The same stance that led Caesar to reduce his bodyguard, on the assumption that "no
        one would harm him, since he had provided for everyone," already shows in his handling
        of his own illness: vulnerability was never permitted, only covered over.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A silence that has held for over two thousand years:</strong>
        That a man who wrote his own history in the third person specifically to control every
        detail of his achievements never once mentioned his own illness shows how deep the
        concealment ran.</p>
        <p class="vb-intro"><strong>b) Two documented incidents, one recurring behavior:</strong>
        At both Thapsus and Corduba, Caesar reacted the same way: no interruption to the
        mission, no public acknowledgment of his own limits, immediate return to full control.</p>
        <p class="vb-intro"><strong>c) Confrontation through concealment rather than retreat:</strong>
        Unlike Ludwig van Beethoven (SX6w5), who openly fought his illness, or Franz Schubert
        (SE6w5), who withdrew, Caesar – much like his later SO2w3 counterpart Napoleon
        Bonaparte – chose a third path: concealing his own illness so completely that it
        simply did not exist within his public image.</p>
        <p class="vb-intro"><strong>d) Why a breakdown of control, of all things?</strong>
        For a Social Two with Three-wing whose entire identity hung on the deliberate shaping
        of their own image, one interpretation suggests itself: an illness that strips the
        body of control for moments and makes it publicly vulnerable became the greatest
        conceivable threat – and had to be kept out of his own narrative at any cost. This
        interpretation is a plausible reading, not a documented historical causal link, and is
        developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Social Two pattern inevitably leads to epilepsy or similar
        conditions – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Caesar's case illustrates is a pattern in the handling of one's own illness that
        keeps recurring in practice among people with a pronounced Social Two with Three-wing –
        one of many possible interpretations, not a judgment. The corresponding illness
        pattern is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Caesar did not know his own pattern – the Social Two with Three-wing cannot allow a
        weakness that endangers the self-made image of indispensability, and that is exactly
        what let him conceal a recurring illness for years rather than ever acknowledge it
        publicly. Someone who does not recognize their own need for a flawless, invulnerable
        image ends up hiding the very vulnerability their own security would have needed most.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Two with Three-wing is confirmed once more in how <strong>Caesar</strong>
        handled his own illness: a recurring condition attested by several ancient sources
        that he never publicly acknowledged, two documented seizures in the middle of command
        from which he each time reported back immediately, and a reduced bodyguard in his
        final weeks that shows how far trust in his own invulnerability carried him to the
        very end. The Golden Retriever who would rather remain unprotected than appear
        vulnerable for even a moment.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-julius-caesar", label:"Portrait: Julius Caesar (SO2w3) – life's work"},
        {route:"krankheitsportraets-muhammad-ali", label:"Illness Portrait: Muhammad Ali – Parkinson's"},
        {route:"krankheitsportraets-napoleon-bonaparte", label:"Illness Portrait: Napoleon Bonaparte (SO2w3) – same concealment strategy"},
        {route:"krankheitsportraets-alexander-der-grosse", label:"Illness Portrait: Alexander the Great (SO2w3) – same Three-wing reflex"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Illness Portrait: Ludwig van Beethoven (SX6w5) – counter-model: open confrontation"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function ladyDianaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-lady-diana-portrait.jpg" alt="Lady Diana" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Lady Diana</p>
        <p class="krim-portrait-typ">SE4w3 · Self-Preservation Type 4 with Three-wing · 1961–1997</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Lady Diana</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-lady-diana">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general.
        This portrait is devoted to a chapter barely present there: bulimia concealed for
        years, which she first made public herself in 1995, together with self-harm and
        postnatal depression.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Diana</strong> is classified as the <strong>Self-Preservation Four with
        Three-wing</strong>. Unlike other Four subtypes, SE4 does not carry its suffering
        outward but endures it silently while showing strength on the outside. The Three-wing
        gives her the ability to turn her own experience into public effectiveness – exactly
        this tension between hidden suffering and a flawless public facade also shapes
        Diana's illness history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A beginning in the week of the engagement:</strong>
        Diana later said herself that her bulimia began "the week after we got engaged" to
        Prince Charles in February 1981 – triggered, among other things, by a disparaging
        remark from Charles about her waist and by the stress of his continuing relationship
        with Camilla Parker Bowles.</p>
        <p class="vb-intro"><strong>b) A pattern she recognized herself as destructive:</strong>
        In the 1995 Panorama interview, Diana called the bulimia itself "a repetitive pattern
        which is very destructive to yourself" – a cycle of brief comfort followed by
        disgust, which she carried alone for years.</p>
        <p class="vb-intro"><strong>c) A facade that held for a long time:</strong>
        Outwardly, Diana remained the flawlessly styled princess for years – while behind the
        scenes an illness unfolded that even her closest circle long knew little about in
        detail.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Years of bulimia:</strong>
        According to Diana's own accounts as well as Andrew Morton's book "Diana: Her True
        Story" (1992, for which she secretly gave interviews), the acute phase of the illness
        lasted several years, with first attempts at treatment beginning in the late 1980s.</p>
        <p class="vb-intro"><strong>b) Self-harm as a cry for help aimed at the wrong place:</strong>
        In the Panorama interview, Diana also described episodes of self-harm: "you have so
        much pain inside yourself that you try and hurt yourself on the outside because you
        want help, but it's the wrong help you're asking for."</p>
        <p class="vb-intro"><strong>c) Postnatal depression after the birth of Prince William:</strong>
        Diana suffered from postnatal depression after the birth of her first son – a
        condition that, by her own account, those around her interpreted as instability
        rather than treating it for what it was.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Trivialization instead of care:</strong>
        Diana described that word from Charles's circle suggested she was "again unstable and
        sick and should be put in a home of some sort ... I was almost an embarrassment" –
        pathologization rather than support.</p>
        <p class="vb-intro"><strong>b) 1992: the indirect first opening:</strong>
        With Andrew Morton's book, the bulimia, earlier moments of despair inside the palace,
        and Charles's relationship with Camilla first reached the public – without Diana
        being officially named as a source at the time.</p>
        <p class="vb-intro"><strong>c) 1995: her own voice:</strong>
        In the BBC Panorama interview with Martin Bashir on November 3, 1995, Diana spoke for
        the first time herself and directly, publicly, about bulimia, self-harm, and the
        marriage: "There were three of us in this marriage, so it was a bit crowded."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A long, non-linear path out of the illness:</strong>
        From the late 1980s onward, Diana received therapy; relapses were reportedly part of
        this process before a degree of stabilization set in.</p>
        <p class="vb-intro"><strong>b) The public impact of the confession:</strong>
        The Panorama interview is still considered one of the moments that helped de-stigmatize
        public discussion of eating disorders and mental illness in Britain – far beyond the
        royal context.</p>
        <p class="vb-intro"><strong>c) A context that later became a subject in its own right:</strong>
        In 2021, the Dyson Report found that Martin Bashir had obtained the interview through
        forged documents – a matter concerning how the interview came about, not the
        truthfulness of Diana's own statements about her illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Tenacious beneath the surface:</strong>
        The very SE4-typical tenacity with which Diana carried the suffering alone for years
        also made it harder to recognize for a circle that preferred to look away.</p>
        <p class="vb-intro"><strong>b) Intensified by Camilla:</strong>
        Diana described herself that both the bulimia and the self-harm intensified whenever
        Charles resumed his relationship with Camilla – the illness as a direct reaction to
        repeated emotional rejection.</p>
        <p class="vb-intro"><strong>c) The dove that finally spoke for herself:</strong>
        The Three-wing, which otherwise carried messages for others, turned in 1995 toward her
        own story – a rare moment in which the public stage served not image management but
        her own truth.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A beginning at the moment of greatest uncertainty:</strong>
        By Diana's own account, the bulimia began exactly in the week she entered a world of
        protocol, expectation, and a marriage with a third person already in the background.</p>
        <p class="vb-intro"><strong>b) An illness hidden for years:</strong>
        From 1981 through the first public hint in 1992 to the direct statement in 1995, a
        long line of silent suffering runs behind the princess's public facade.</p>
        <p class="vb-intro"><strong>c) Two symptoms, one shared root:</strong>
        Diana herself described bulimia and self-harm as related expressions of the same
        inner pain – both intensified by the same triggers.</p>
        <p class="vb-intro"><strong>d) Why, of all things, food and the body?</strong>
        For a Self-Preservation Four whose instinct is directed at her own survival and
        stability, one reading suggests itself: precisely the area most directly tied to
        self-care and self-preservation became the site of loss of control – while, thanks to
        the Three-wing, flawless control had to be publicly demonstrated at the same time.
        This reading is a plausible interpretation, not a documented historical causal link,
        and is explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Four's pattern inevitably leads to bulimia –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Diana's case can show is a pattern that stands out again and again in practice
        wherever the need exists to hide inner suffering behind outer stability – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Diana did not know her own pattern – the self-preservation Four with Three-wing hides inner pain behind a flawless public appearance, and that is exactly what let her conceal a severe eating disorder for years before she herself disclosed it in 1995. Someone who does not know their own concealment pattern carries the burden alone, until openness itself becomes the liberating exception.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Diana's</strong> story, the Self-Preservation Four with Three-wing shows
        itself once more in its full inner tension: suffering silently endured for years
        behind a flawless public facade, spoken aloud only late – and with all the greater
        impact when it finally was. The dove that for a long time carried messages only for
        others, until in 1995 she began carrying her own. Diana died in 1997 in a car accident
        in Paris – an event with no documented connection to her earlier bulimia.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-lady-diana", label:"Portrait: Lady Diana (SE4w3) – life's work"},
        {route:"krankheitsportraets-adele", label:"Illness Portrait: Adele (SE4w3) – same subtype"},
        {route:"krankheitsportraets-honore-de-balzac", label:"Illness Portrait: Honoré de Balzac (SE4w3) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function ludwigXIVKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-xiv-portrait.jpg" alt="Louis XIV" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Louis XIV &ndash; the Sun King</p>
        <p class="krim-portrait-typ">SP3w2 · Social Type 3 with Two-wing · 1638–1715</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Louis XIV</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-xiv">famous-personality portrait</a>
        – that page covers his self-presentation as the Sun King and the building of Versailles.
        This page goes deeper into a chapter mentioned there only in passing: decades of
        chronic gout, an anal fistula operated on under strictest secrecy in 1686, and a final
        fight against gangrene, from which he died in 1715.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Louis XIV</strong> is assigned to the <strong>Social Type 3 with Two-wing</strong>.
        Social Three lives for the flawless, publicly visible image; the Two-wing weaves in
        favor and closeness as an instrument of power. This same need for a flawless image
        also determined how he handled his own decades-long medical history – not openly, but
        hidden behind the curtain of court ceremony.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First gout attacks already in his middle years:</strong>
        Louis had suffered recurring, painful gout attacks since his forties, at times
        severely restricting his ability to walk – a condition that accompanied him for
        decades.</p>
        <p class="vb-intro"><strong>b) Dental problems with fatal consequences:</strong>
        In 1685 he had all his upper teeth removed; a botched procedure tore a hole in his
        palate that could only be closed after several painful follow-up operations using a
        red-hot iron.</p>
        <p class="vb-intro"><strong>c) An anal fistula that became a state secret:</strong>
        In 1686 his physicians diagnosed a painful anal fistula – an ailment kept strictly
        from the public, even though it increasingly impaired his ability to sit and ride.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The "Grande Opération" in November 1686:</strong>
        The royal surgeon Charles-François Félix performed the then-risky operation without
        anesthesia – Louis is said to have made barely a sound throughout, to preserve his
        composure in front of the courtiers present.</p>
        <p class="vb-intro"><strong>b) Recovery under the strictest secrecy:</strong>
        The weeks-long, painful recovery took place largely out of public view; official
        announcements deliberately spoke only vaguely of "health concerns."</p>
        <p class="vb-intro"><strong>c) Return to full court ceremony despite the pain:</strong>
        Barely recovered, Louis immediately resumed his public appearances, the daily lever
        and coucher, in full – as if nothing had happened.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Decades of continuing on despite advancing gout:</strong>
        Into old age, Louis had himself carried to public occasions in a wheelchair or on a
        litter when necessary, rather than canceling appearances outright.</p>
        <p class="vb-intro"><strong>b) Unrelenting continuation of government business:</strong>
        Even during periods of severe physical impairment, he continued to chair ministerial
        councils and audiences daily – withdrawing from active governance was never an option
        for him.</p>
        <p class="vb-intro"><strong>c) Gangrene in the right leg from August 1715:</strong>
        Just days before his death, physicians diagnosed advancing gangrene in his leg – an
        amputation, as would later become standard practice, was rejected by the attending
        physicians of the time as too risky.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A court that learned almost nothing of the illness:</strong>
        Even close courtiers often only learned afterward how serious Louis's suffering had
        truly been – the public image of the flawless Sun King remained largely intact until
        the end.</p>
        <p class="vb-intro"><strong>b) A final address to his great-grandson as successor:</strong>
        On his deathbed he delivered a rare, almost self-critical warning to the five-year-old
        future Louis XV, urging him not to follow his example in excessive building and
        warfare.</p>
        <p class="vb-intro"><strong>c) Death on September 1, 1715, in Versailles:</strong>
        Louis died at age 76 after 72 years on the throne – longer than any other monarch in
        European history, in the very palace he had made a symbol of his own
        invulnerability.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The facade that could not show a crack:</strong>
        The same need to always preserve the flawless image of the Sun King that shaped
        Louis's entire self-presentation also determined how consistently he hid his own
        suffering from the public.</p>
        <p class="vb-intro"><strong>b) Control over his own medical history as a final stage:</strong>
        Even the 1686 operation – one of the most intimate and painful experiences of his life
        – became an ordeal he endured with the same disciplined composure with which he
        controlled his public appearances: no sound, no visible breakdown in front of the
        courtiers present.</p>
        <p class="vb-intro"><strong>c) No withdrawal from the role until his last breath:</strong>
        Unlike some other illness histories in this Compass, there is no phase of open
        withdrawal from public life in Louis's case – the role of the Sun King was maintained
        right up to the deathbed.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that resisted the staging:</strong>
        Louis's entire life was shaped by the conviction that a flawless, controlled image
        made every situation manageable – gout, the anal fistula, and finally gangrene were
        threats that increasingly escaped that control.</p>
        <p class="vb-intro"><strong>b) Secrecy as a continuation of self-presentation:</strong>
        A man who shaped his entire life as a public spectacle treated precisely his most
        intimate physical suffering as the one thing withheld from the public – a deliberate
        gap in an otherwise seamlessly staged life.</p>
        <p class="vb-intro"><strong>c) Why the leg, of all places?</strong>
        For a social Three with Two-wing whose entire power rested on movement, appearance and
        physical presence before an audience, one interpretation suggests itself: precisely
        the limb that carried him on foot through Versailles, on the hunt and to public
        ceremonies became the site of decay – robbing him, in his final days, of exactly the
        mobility on which his entire public self-image rested. This interpretation is a
        plausible reading, not a documented historical causal link, and is developed further
        in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the social Three inevitably leads to gout or
        gangrene – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Louis's case shows is a pattern in how a pronounced social Three with Two-wing
        repeatedly deals with chronic illness – one possible reading among many, not a
        verdict. The corresponding illness profile is gradually being developed in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Louis did not know his own pattern – the social Three with Two-wing meets every threat
        to its own image reflexively with secrecy and a flawless facade rather than ever
        openly admitting weakness, and he lived out exactly this pattern unchanged into his
        final days. Whoever does not recognize their own need to always appear flawless as a
        pattern cannot set it aside even in their own dying.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Three with Two-wing explains much about the course of <strong>Louis XIV's</strong>
        own illness: a man whose entire power rested on a flawless, publicly visible image
        turned even his most intimate suffering into a strictly controlled backdrop – until
        the leg that had carried him through Versailles his whole life denied him, in the
        end, the last stage of all.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ludwig-xiv", label:"Portrait: Louis XIV (SP3w2) – the Sun King"},
        {route:"krankheitsportraets-dmitri-hvorostovsky", label:"Illness Portrait: Dmitri Hvorostovsky (SO3w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SP3"},
      ])}
    </div>
  `);
}

export function michaelJacksonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-jackson-portrait.jpg" alt="Michael Jackson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Jackson</p>
        <p class="krim-portrait-typ">SO4w3 · Social Type 4 with Three-wing · 1958–2009</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Jackson</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-michael-jackson">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure, including a brief
        mention of vitiligo and his death from propofol. This page traces that exact chain in
        depth: a burn injury in 1984 that became the starting point of a decades-long
        dependence on pain and sleep medication that ultimately cost him his life.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Jackson</strong> is classified as the <strong>Social Four with Three-wing</strong>.
        SO4 is considered the reinforcement type: envy is turned inward and
        becomes shame – a deep sense of lacking, anchored in one's own outward image. The
        Three-wing supplies stage presence and a perfectionism that tolerates no visible flaw – a
        pattern that can be traced right into his handling of chronic pain and sleeplessness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) An accident in front of the cameras:</strong>
        On 27 January 1984, sparks from a pyrotechnic effect during the filming of a Pepsi
        commercial set Jackson's hair on fire. He suffered second- and third-degree burns to
        his scalp that required several surgeries.</p>
        <p class="vb-intro"><strong>b) Where the painkiller use began:</strong>
        Strong opioid painkillers were prescribed to treat the burn pain and the following
        surgeries – according to consistent later accounts from those around him, his first
        contact with a class of substances that stayed with him until his death.</p>
        <p class="vb-intro"><strong>c) Performing through pain as the norm:</strong>
        Jackson returned to the stage shortly after the accident, visible scalp injuries
        concealed under a wig and makeup – an early sign of a pattern that shaped his entire
        later life: pain was not shown but covered over.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Vitiligo as an additional, concealed burden:</strong>
        Alongside the pain medication, his skin, increasingly blotched by vitiligo, worsened
        from the mid-1980s onward – an autoimmune disease that destroys pigment cells. Jackson
        covered the affected areas with makeup for years before making the diagnosis public to
        Oprah Winfrey in 1993.</p>
        <p class="vb-intro"><strong>b) Chronic insomnia as a condition in its own right:</strong>
        From the 1990s onward, physicians, staff, and later court documents consistently
        described a severe, treatment-resistant insomnia that accompanied Jackson for years,
        which he tried to combat with ever-stronger remedies.</p>
        <p class="vb-intro"><strong>c) Propofol as a sleep aid far outside any medical norm:</strong>
        Propofol is a potent anesthetic that may only be used under intensive-care supervision –
        never as a sleep aid at home. According to testimony in the later court proceedings,
        Jackson nonetheless received it nightly for months just to be able to fall asleep.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The final preparations for This Is It:</strong>
        In the weeks before his death, Jackson rehearsed intensively for his planned
        fifty-date comeback concert series <em>This Is It</em> in London – despite growing
        physical exhaustion described by production staff in multiple later statements.</p>
        <p class="vb-intro"><strong>b) 25 June 2009:</strong>
        His personal physician, Conrad Murray, administered propofol to Jackson in the early
        morning hours to treat his ongoing insomnia. Jackson suffered acute cardiac arrest and
        could not be resuscitated. He died at age 50, a few weeks before the planned start of
        the concert series.</p>
        <p class="vb-intro"><strong>c) A trial that exposed the full extent:</strong>
        Conrad Murray was convicted of involuntary manslaughter in 2011. The trial revealed in
        detail how far the at-home administration of propofol was from any medical standard,
        and for how long this pattern had already existed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A chain that began in 1984:</strong>
        Twenty-five years lie between the first opioid prescription after the Pepsi accident
        and the fatal propofol dose in 2009 – years in which the handling of pain and
        insomnia gradually developed into a life-threatening dependence on prescription
        substances.</p>
        <p class="vb-intro"><strong>b) Two parallel processes on his own body:</strong>
        Vitiligo visibly changed how Jackson looked; the medication dependence invisibly
        changed how his body functioned. Both processes ran in parallel for decades, and both
        were concealed by Jackson for a long time, until public pressure or a court proceeding
        exposed them.</p>
        <p class="vb-intro"><strong>c) Working to the point of physical limit:</strong>
        Even in his final weeks, physically exhausted and dependent on propofol just to sleep,
        Jackson kept up his comeback rehearsals – a pattern already visible in 1984, when he
        returned to the stage shortly after the accident.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The armadillo that hid pain behind the stage:</strong>
        Just as he initially hid the vitiligo patches behind makeup in 1993, Jackson also hid
        his growing dependence on pain and sleep medication behind the flawless facade of
        performance – until neither could be concealed any longer.</p>
        <p class="vb-intro"><strong>b) Perfectionism as the drive to the very end:</strong>
        Rehearsal records from the final weeks show an artist who, despite visible
        exhaustion, held on to the highest personal standards – the Three-wing that delivers
        performance even when the body is already sounding the alarm.</p>
        <p class="vb-intro"><strong>c) Dependence on the very people meant to protect him:</strong>
        The at-home propofol administration was carried out by a physician Jackson himself
        had hired – a pattern in which closeness and trust turned into danger, because the
        need for relief outweighed any caution.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) From a visible to an invisible injury:</strong>
        The 1984 burn injury was publicly visible, treated, and healed. The dependence that
        grew out of it remained largely invisible for twenty-five years – until his death
        itself.</p>
        <p class="vb-intro"><strong>b) Twenty-five years between trigger and death:</strong>
        From the 1984 Pepsi accident to his death in 2009, Jackson lived a quarter-century
        with a course of illness never summed up in a single diagnosis, but built gradually
        out of pain treatment, insomnia, and ever-stronger remedies.</p>
        <p class="vb-intro"><strong>c) Concealment instead of confrontation as a recurring pattern:</strong>
        Unlike Ludwig van Beethoven (SX6w5) or Friedrich Schiller (SX6w5), who met their
        illness with open confrontation, or Franz Schubert (SE6w5), who increasingly
        withdrew, Jackson – much like his SO3w4 counterpart Karl Lagerfeld – hid his
        dependence behind a flawless public facade until his body permitted no further
        concealment.</p>
        <p class="vb-intro"><strong>d) Why the skin and sleep, of all things?</strong>
        For a Social Four whose entire self-image hangs on outward appearance, one
        interpretation suggests itself: the skin – the most visible of all organs – and
        sleep – the state in which no control over one's own image remains possible – of
        all things became the stage for a battle Jackson never fought publicly but tried to
        manage behind closed doors. This interpretation is developed further in this
        Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Context without determinism:</strong>
        This does not mean that the Social Four pattern inevitably leads to medication
        dependence or skin disease – <strong>any person can develop any illness, regardless
        of subtype.</strong> What Jackson's case illustrates is a pattern that keeps
        recurring in practice among people whose need to maintain a flawless outward image at
        any cost dominates – one of many possible interpretations, not a judgment. The
        corresponding illness pattern is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Jackson did not know his own pattern – the social Four with Three-wing keeps its own image flawless at any cost, even toward itself, and that is exactly what let him hide a twenty-five-year dependence behind that very image instead of seeking help openly. Someone who does not recognize their own need for a flawless image ultimately sacrifices their own health to it.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Jackson's</strong> Social Four with Three-wing is legible once more in the
        course of his illness: a burn injury that became the starting point of a
        twenty-five-year, largely concealed dependence, overlaid with an equally hidden skin
        disease – until on 25 June 2009 the combination permitted no further concealment. The
        armadillo that carried its armor to the very end – shining, unassailable on the
        outside, and growing more exhausted within, from a battle almost no one saw.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-michael-jackson", label:"Portrait: Michael Jackson (SO4w3) – life's work"},
        {route:"krankheitsportraets-romy-schneider", label:"Illness Portrait: Romy Schneider (SO4w3)"},
        {route:"krankheitsportraets-hans-christian-andersen", label:"Illness Portrait: Hans Christian Andersen (SO4w3) – same concealment strategy"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – same concealment strategy"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Illness Portrait: Ludwig van Beethoven (SX6w5) – counter-model: open confrontation"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function nataschaKampuschKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-natascha-kampusch-portrait.jpg" alt="Natascha Kampusch" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Natascha Kampusch</p>
        <p class="krim-portrait-typ">SP2w1 · Self-Preservation Type 2 with One-wing · born 1988</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Natascha Kampusch</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-natascha-kampusch">portrait under Famous Personalities</a>
        in this Compass – that page covers her path of survival during eight years of
        captivity and her type structure in general. This page delves into a chapter not yet
        covered there: post-traumatic stress disorder as a long-term consequence, and a
        severe psychological breakdown her family only spoke about publicly twenty years
        after her liberation.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kampusch</strong> is classified as the <strong>Self-Preservation Type 2 with
        One-wing</strong>. Under threat, SP2 secures its survival by adapting to the emotional
        state of the more powerful person; the One-wing adds discipline and self-imposed
        structure as inner support. Exactly this pattern – functioning outwardly while an
        enormous inner pressure keeps operating beneath the surface – also shapes the course
        of her mental health long after the captivity itself ended.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Eight years of extreme isolation during childhood and adolescence:</strong>
        Kampusch was abducted in 1998 at age ten and held captive until 2006 in a roughly
        five-square-meter, nearly airtight cellar dungeon – an extreme situation occurring
        precisely during the years that are decisive for a child's psychological
        development.</p>
        <p class="vb-intro"><strong>b) The perpetrator's suicide immediately after her escape:</strong>
        On the day of her escape, August 23, 2006, her kidnapper Wolfgang Priklopil took his
        own life – overnight, Kampusch lost the only attachment figure whose emotional state
        her own survival had been tied to for eight years.</p>
        <p class="vb-intro"><strong>c) Immediate, intense media attention with no transition period:</strong>
        Right after her liberation, Kampusch faced intense international media interest –
        without the time and protected setting that processing such a trauma would actually
        have required.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Post-traumatic stress disorder as a documented diagnosis:</strong>
        Among the known psychological consequences of her captivity are post-traumatic stress
        disorder, social isolation, and recurring anxiety and depression.</p>
        <p class="vb-intro"><strong>b) Psychotherapy as an ongoing part of her life:</strong>
        After her liberation, Kampusch received psychotherapeutic support – an ongoing process
        that received little public attention, while her outward functioning as an author and
        public voice took center stage.</p>
        <p class="vb-intro"><strong>c) Public functioning alongside persistent inner strain:</strong>
        For many years, Kampusch managed to appear publicly as an author, host, and activist,
        while the psychological aftereffects of her captivity continued to operate in the
        background – a gap between outward functioning and inner strain that only became
        visible decades later.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) A severe psychological breakdown, made public by her family:</strong>
        Roughly two decades after her liberation, Kampusch's family made public that she had
        suffered a severe breakdown – a rare step that, for the first time, revealed the full
        extent of a psychological health history that had until then remained largely
        private.</p>
        <p class="vb-intro"><strong>b) "Mostly in a world of her own" – her sister's description:</strong>
        Kampusch's sister, Claudia Nestelberger, described her condition by saying Natascha was
        "mostly in a world of her own" and had withdrawn completely – a description the family
        itself framed as a kind of renewed captivity.</p>
        <p class="vb-intro"><strong>c) A documentary as a deliberate step toward openness:</strong>
        The family chose to speak openly about the causes of the breakdown as part of an ORF
        documentary by journalist Christoph Feurstein ("Natascha Kampusch – Trapped in
        Freedom") – hoping to create understanding for her situation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A trauma that did not end with liberation:</strong>
        Kampusch's case illustrates that the actual psychological processing of an extreme
        trauma often begins only long after the external threat has ended – and can continue
        for decades, far beyond the moment of physical rescue.</p>
        <p class="vb-intro"><strong>b) The family as a late but important voice:</strong>
        Unlike the early years after her liberation, when Kampusch herself controlled how her
        story was told, it was now her family that took over public communication – a sign of
        just how much her condition had changed.</p>
        <p class="vb-intro"><strong>c) An image that contradicts the public narrative of the "strong survivor":</strong>
        For years, Kampusch was seen above all as a symbol of resilience and
        self-determination; the breakdown that became public in 2026 expands that image to
        include a reality shared by many survivors of extreme trauma: strength and ongoing
        suffering are not mutually exclusive.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Expression</h3>
        <p class="vb-intro"><strong>a) The hippopotamus that functioned beneath the surface for so long:</strong>
        Like the hippopotamus, which spends most of its life invisible underwater, Kampusch
        maintained an outwardly functioning, publicly visible existence for years – while the
        true extent of her inner strain remained hidden.</p>
        <p class="vb-intro"><strong>b) The One-wing and the long struggle for structure:</strong>
        The same self-discipline that helped her preserve her mind and identity during
        captivity also enabled her, for years after her liberation, to maintain a functioning
        public life – until that same self-imposed structure finally collapsed under the
        weight of unprocessed trauma.</p>
        <p class="vb-intro"><strong>c) Withdrawal as a last remaining protective strategy:</strong>
        The retreat "into a world of her own," as described by her sister, reads as the return
        of the same survival mechanism that once carried her through captivity: retreating
        into an inner, protected space when the outer world becomes unmanageable.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) From outer captivity to inner captivity:</strong>
        Her family's phrase, that Kampusch was again in "a kind of captivity," closes the
        circle in a shattering way: the outer captivity ended in 2006, but the psychological
        pattern of retreating into a sealed-off inner space under extreme pressure returned,
        in altered form, two decades later.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>A striking parallel within the same subtype – Greta Thunberg:</strong>
        Notably, this Compass also features <a href="javascript:void(0)" data-route="krankheitsportraets-greta-thunberg">Greta Thunberg (also SP2w1)</a>,
        whose psychological crisis history shows a related pattern: a Self-Preservation Two
        with a One-wing who, under extreme inner pressure – for Thunberg, in childhood,
        through a severe depressive episode with selective mutism; for Kampusch, through the
        long-term effects of years of captivity – seeks retreat into a world of her own,
        barely accessible from the outside. In both cases, this withdrawal was only made
        publicly visible by people close to them (Thunberg's parents; Kampusch's sister).</p>
        <p class="vb-intro"><strong>b) Why precisely a retreat into a world of her own, for a woman who stood for years for openness about her trauma?</strong>
        For a Self-Preservation Two with a One-wing, whose public role for years rested on
        control over her own narrative and structure, one interpretation suggests itself:
        precisely where that control and structure can no longer be maintained, the same
        inner refuge breaks through that had once formed under duress – in the cellar
        dungeon. This interpretation is a plausible reading, not a proven medical causal link,
        and is explored further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Context without determinism:</strong>
        This does not mean the pattern of the Self-Preservation Two inevitably leads to a late
        psychological breakdown after trauma – <strong>anyone can develop any form of
        psychiatric illness after extreme trauma, regardless of subtype.</strong> What
        Kampusch's case illustrates is a pattern in how unprocessed trauma is handled, one
        that recurs again and again in a pronounced Self-Preservation Two with a One-wing –
        one interpretation among many, not a judgment. This illness pattern is being
        developed step by step in this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Nothing suggests that Kampusch ever consciously knew her own Enneagram pattern. For
        years, she held on to the role of the controlled, functioning survivor – a role that
        deeply matched her SP2w1 pattern, but that also prevented her true inner exhaustion
        from being recognized and treated in time. Whoever does not recognize their own need
        to function under all circumstances as a pattern of its own risks that the breakdown
        they sought to avoid ultimately breaks through with all the more force.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Kampusch's</strong> Self-Preservation Two with a One-wing, too, can be read
        once more through the long-term course of her mental health: years of disciplined,
        outward functioning while a trauma kept operating within, only fully visible two
        decades later. The hippopotamus that stayed beneath the surface for as long as it
        possibly could – until even that last form of control was no longer enough to carry
        what lay beneath it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-natascha-kampusch", label:"Portrait: Natascha Kampusch (SP2w1) – path of survival"},
        {route:"krankheitsportraets-greta-thunberg", label:"Illness Portrait: Greta Thunberg (SP2w1)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SP2"},
      ])}
    </div>
  `);
}

export function oshoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-osho-portrait.jpg" alt="Osho" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Osho</p>
        <p class="krim-portrait-typ">SP3w4 · Self-Preservation Type 3 with Four-wing · 1931–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Osho</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-osho">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This portrait is devoted to a chapter barely present there: a chain of chronic
        ailments, a twelve-day detention in the United States in 1985, and a controversy
        surrounding his death in 1990 that remains unresolved to this day.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Osho</strong> is classified as the <strong>Self-Preservation Three with
        Four-wing</strong>. SP3 directs the Three's drive for success at concrete functioning
        and the material security of one's own sphere. The Four-wing adds a pronounced
        tendency to dramatize and imbue one's own experience with meaning – a pattern clearly
        visible in how Osho publicly framed and interpreted his own suffering, rather than
        concealing it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) His own suffering as a public narrative:</strong>
        Unlike subjects who conceal their illness, Osho made his physical decline itself the
        subject of his discourses – a combination of functional drive and dramatic
        meaning-making typical of SP3w4.</p>
        <p class="vb-intro"><strong>b) Functioning despite chronic complaints:</strong>
        For years, Osho maintained an intensive lecture and travel schedule despite diabetes,
        asthma, and severe back pain. When he left his Indian ashram in 1981 and relocated to
        the United States, where the commune Rajneeshpuram in Oregon soon followed, the hope
        for better medical care was explicitly cited as one of the reasons for the move.</p>
        <p class="vb-intro"><strong>c) Withdrawal only once functioning was no longer possible:</strong>
        Only from 1988 onward did his discourses increasingly narrow in scope; in April 1989
        he gave his last public talk – a late, almost reluctant withdrawal from the active
        role.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Chronic ailments dating back to the early 1970s:</strong>
        During his time in Bombay, Osho developed diabetes, asthma, and various allergies,
        worsened by the humid climate – along with chronic back pain, exhaustion, and
        insomnia.</p>
        <p class="vb-intro"><strong>b) Arrest in October 1985:</strong>
        In the course of the dissolution of his commune Rajneeshpuram in Oregon, Osho was
        arrested in North Carolina on October 28, 1985, and transported through several
        jails over roughly twelve days before being released on 500,000 dollars bail and
        deported from the United States.</p>
        <p class="vb-intro"><strong>c) New symptoms after returning to India:</strong>
        After his return in late 1985, Osho reported loss of appetite, nausea, and a feeling
        of exhaustion that he and his closest circle no longer attributed to his earlier
        chronic complaints.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The poisoning claim:</strong>
        Osho's personal physicians and his inner circle publicly suspected thallium
        poisoning during his detention, possibly via an irradiated mattress. No independent
        toxicological evidence was ever presented; one U.S. attorney called the claim
        "complete fiction."</p>
        <p class="vb-intro"><strong>b) A continuous decline without independently documented diagnosis:</strong>
        Between 1987 and 1990, Osho's health, according to consistent accounts from those
        around him, deteriorated continuously – no independent medical records from this
        period are publicly accessible.</p>
        <p class="vb-intro"><strong>c) Withdrawal into pure togetherness:</strong>
        After his final discourse in April 1989, Osho only sat in silence with his followers,
        giving no further talks.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on January 19, 1990:</strong>
        Osho died at the ashram in Pune, India, at age 58. Physicians cited heart failure as
        the cause of death.</p>
        <p class="vb-intro"><strong>b) A death statement that echoed the poisoning claim:</strong>
        The ashram itself framed the death, in its official statement, as a late consequence
        of the suspected poisoning – an interpretation that remains independently
        unconfirmed to this day.</p>
        <p class="vb-intro"><strong>c) Later, equally unresolved counter-allegations:</strong>
        Years later, journalist Abhay Vaidya and a physician involved raised suspicions that
        Osho had been isolated from independent medical care in his final hours – these
        allegations, too, remain without forensic clarification, and it is not documented
        whether an autopsy was ever performed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) His own illness history as a final grand narrative:</strong>
        Rather than concealing his suffering, Osho transformed it into a public story of
        persecution and resistance – a fusion of self-presentation and personal drama
        characteristic of SP3w4.</p>
        <p class="vb-intro"><strong>b) Functioning up to the very last possible limit:</strong>
        Even as his decline progressed, Osho held on to his role as speaker for as long as
        possible, only relinquishing it definitively in 1989.</p>
        <p class="vb-intro"><strong>c) The raccoon that shaped its own territory to the very end:</strong>
        Even the interpretation of his own physical decline remained, until his death, part
        of his own narrative – not passive suffering, but a story he actively kept shaping.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A chronic history dating back to the early 1970s:</strong>
        Diabetes, asthma, and back pain accompanied Osho for nearly two decades before
        taking a dramatic new turn through his 1985 detention.</p>
        <p class="vb-intro"><strong>b) A turning point whose cause remains disputed to this day:</strong>
        Whether the decline after 1985 truly stemmed from poisoning during detention or was a
        continuation of decades of chronic complaints cannot be conclusively resolved from
        publicly available sources.</p>
        <p class="vb-intro"><strong>c) A death with three competing interpretations:</strong>
        The official diagnosis of heart failure, the ashram's poisoning narrative, and the
        later allegations of isolation in his final hours stand unreconciled to this day –
        none of them forensically confirmed.</p>
        <p class="vb-intro"><strong>d) Why, of all things, an illness history full of interpretations?</strong>
        For a Self-Preservation Three with Four-wing, whose entire work rested on his own,
        meaningfully narrated story, one reading suggests itself: even his own physical
        decline became a text that had to be interpreted, given meaning, and retold – an
        illness that could never be reduced to a single, sober medical finding, but remained,
        to the end, part of the grand narrative of persecution and significance. This reading
        is a plausible interpretation, not a documented historical causal link, and is
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Three's pattern inevitably leads to chronic
        illness or disputed circumstances of death – <strong>every person can develop any
        illness, regardless of subtype.</strong> What Osho's case can show is a pattern that
        stands out again and again in practice wherever personal suffering and public
        self-interpretation become fused – one possible explanation among many, not a
        verdict. The corresponding condition will be developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Osho knew the Enneagram as a teaching system very precisely and referred to it repeatedly in his own talks – his well-known core statement on it was, roughly, that the Enneagram shows the nine sicknesses of the ego, but the only cure for them is meditation. That very stance – knowing one's own category theoretically, yet considering the map already surpassed because one has ›arrived‹ – can make genuine self-recognition harder rather than easier, especially for someone with pronounced guru status. Whether Osho truly saw through his own pattern at depth, or merely sensed it, cannot be settled conclusively; his recurring, never fully clarified physical complaints suggest that knowledge of a system is not automatically the same as real self-recognition – especially not when one's own spiritual ego is also in play.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        What defined <strong>Osho</strong> as a Self-Preservation Three with Four-wing returns
        once more in his own illness history: chronic ailments spanning decades, a dramatic rupture
        through detention and an alleged poisoning, and a death in 1990 whose cause still
        shifts between three competing narratives. The raccoon that never surrendered
        interpretive authority over its own story, even in its own decline.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-osho", label:"Portrait: Osho (SP3w4) – life's work"},
        {route:"krankheitsportraets-bernie-madoff", label:"Illness Portrait: Bernie Madoff (SP3w4) – the same discretion over his own body"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se3", label:"Subtype Profile SP3"},
      ])}
    </div>
  `);
}

export function robertSchumannKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robert-schumann-portrait.jpg" alt="Robert Schumann" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert Schumann</p>
        <p class="krim-portrait-typ">SX7w8 · Sexual Type 7 with Eight-wing · 1810–1856</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chimpanzee</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Animal correspondence: Chimpanzee" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robert Schumann</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-robert-schumann">portrait under Famous Personalities</a>
        in this Compass – that page covers his compositional life's work and type structure in
        general. This portrait is devoted to a chapter only briefly noted there: a mental illness
        that ran through his entire adult life and led him, in 1854, into the Rhine and into an
        asylum where he died in 1856.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schumann</strong> is classified as the <strong>Sexual Seven with Eight-wing</strong>.
        SX7 seeks full, unrestrained surrender to whatever excites it – a composition, an idea,
        a person. The Eight-wing gives that devotion fighting strength and willpower: where a
        pure Seven evades, the SX7w8 stays and fights. It was exactly this intensity, which
        carried his creative life, that turned against him in his final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A constant tone in his ear:</strong>
        Schumann reported a persistent, high-pitched tone he heard internally as early as his
        youth – a kind of chronic tinnitus that stayed with him for life and that he himself
        interpreted as an early sign of his nervous vulnerability.</p>
        <p class="vb-intro"><strong>b) The first severe crisis in 1833:</strong>
        After the death of his brother Julius and his sister-in-law, the 23-year-old Schumann
        suffered a severe nervous breakdown with intense fear of death and a recurring dread of
        losing his mind – decades before the illness finally overwhelmed him.</p>
        <p class="vb-intro"><strong>c) A hand that no longer obeyed:</strong>
        Around 1832, Schumann lost the ability to perform as a concert pianist through an
        injury to his right hand whose cause remains disputed to this day. Whether a mechanical
        practice device, nerve damage, or a side effect of contemporary mercury treatments was
        the cause remains a subject of medical-historical debate.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Extreme swings between peak form and exhaustion:</strong>
        Schumann's most productive phases – such as the "Year of Song" in 1840 with over 140
        compositions – alternated with phases of deep exhaustion and melancholy, a pattern
        music historians retrospectively often read as evidence of bipolar disorder.</p>
        <p class="vb-intro"><strong>b) The double figure as an early self-diagnosis:</strong>
        Already in his twenties, Schumann split his personality in literary form into the
        stormy Florestan and the dreamy Eusebius – a self-observation that, in hindsight, reads
        like an intuitive description of his own mood extremes, long before psychiatry had
        corresponding diagnostic categories.</p>
        <p class="vb-intro"><strong>c) A question of cause still disputed today:</strong>
        Alongside bipolar disorder, medical-historical research also discusses a possible late
        effect of a syphilis infection as a contributing cause of his mental decline – a theory
        supported by Schumann's own diary entries about earlier treatments, but never
        conclusively proven.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Voices that dictated music:</strong>
        In February 1854, Schumann reported that an angelic voice had sung him a musical theme,
        which he immediately wrote down – days later, that same voice transformed in his
        perception into a demonic, tormenting presence.</p>
        <p class="vb-intro"><strong>b) The leap into the Rhine:</strong>
        On February 27, 1854, in a fit of utter despair, Schumann left his house in Düsseldorf
        in his nightshirt and jumped from the Rhine bridge into the icy river. Fishermen pulled
        him out, barely alive.</p>
        <p class="vb-intro"><strong>c) His own request for admission:</strong>
        Shortly after the suicide attempt, Schumann himself asked to be taken to an asylum – an
        act that still shows a last remnant of conscious self-control over a situation that had
        long since spiraled beyond his control.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Two years in the asylum near Bonn:</strong>
        Schumann spent the last roughly two years of his life in the private asylum of Dr.
        Franz Richarz in Endenich near Bonn – largely isolated from his wife Clara, whom
        doctors forbade from visiting for a long time, fearing a reunion could further worsen
        his condition.</p>
        <p class="vb-intro"><strong>b) The young Brahms as the only constant:</strong>
        While Clara was kept away, the 20-year-old Johannes Brahms (SE9w8), whom Schumann had hailed as
        a coming master only months earlier, visited him regularly in Endenich and became the
        family's closest support during this time.</p>
        <p class="vb-intro"><strong>c) A reunion only shortly before death:</strong>
        Only when his condition appeared irreversible did the doctors finally allow Clara
        access to her husband, in July 1856 – two days before his death, after more than two
        years of forced separation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The intensity that turned against itself:</strong>
        The same unrestrained capacity for devotion that carried Schumann's creative bursts –
        entire years devoted exclusively to a single genre – turned with the same force against
        himself in the crisis: not restrained sadness, but an undertow with no visible bottom.</p>
        <p class="vb-intro"><strong>b) Fighting to the point of exhaustion:</strong>
        The Eight-wing, which years earlier helped Schumann fight for his marriage to Clara
        against the declared will of his teacher Friedrich Wieck, also showed itself in the
        illness as a resistance that did not surrender without a fight – that resistance
        reached as far as the open suicide attempt, then tipped into exhaustion.</p>
        <p class="vb-intro"><strong>c) Music as an outlet until the end:</strong>
        Even in Endenich, Schumann continued at times to compose and write down music, though
        on a much reduced scale – the ability to translate inner states directly into music
        never fully left him, even in his most severe phase.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness without a settled diagnosis:</strong>
        It remains unclear to this day whether Schumann suffered from bipolar disorder, a
        schizoaffective illness, or the neurological late effects of a syphilis infection – the
        symptoms documented in the Endenich medical records allow for several readings, none
        conclusively proven.</p>
        <p class="vb-intro"><strong>b) The stress line toward the One:</strong>
        Under the chronic pressure of his illness, Schumann moved increasingly along his stress
        line toward the Seven's stress point, the One: instead of the playful lightness of
        earlier years, his final years showed an almost compulsive self-condemnation,
        interpreting his own shortcomings as moral failure – typical One patterns, without his
        core type changing.</p>
        <p class="vb-intro"><strong>c) An undertow the Eight-wing could no longer withstand:</strong>
        The intensity that carried Schumann throughout his life – in composing, in the fight
        for Clara, in his enthusiasm for Brahms – had no built-in brake. When that intensity
        turned inward, the mechanism that might have caught it was apparently missing.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the Sexual Seven's pattern inevitably leads to mental illness –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Schumann's case can show is a pattern that stands out again and again in practice
        wherever an unrestrained, boundless capacity for devotion exists – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Schumann did not know his own pattern – the sexual Seven with Eight-wing seeks intensity without limits, until no reserve remains, and it was exactly this that drove him into a state of total despair, out of which he himself asked to be admitted to an asylum. Someone who does not recognize their own need for boundless intensity only notices, at the point of total collapse, that a limit had been needed.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Schumann's</strong> final years, the Sexual Seven with Eight-wing reveals
        itself in its most vulnerable form: a capacity for devotion with no brake, which
        carried his creative life and, in the end, turned against himself, a final, desperate
        struggle in the icy Rhine, and two years of forced separation from the woman for whom
        he had once fought the entire world. The chimpanzee that struggled for connection to
        the very end – and found it once more, two days before his death.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-robert-schumann", label:"Portrait: Robert Schumann (SX7w8) – life's work"},
        {route:"beruehmte-johannes-brahms", label:"Portrait: Johannes Brahms (SE9w8) – discovered by Schumann, visited him regularly in Endenich"},
        {route:"beruehmte-franz-liszt", label:"Portrait: Franz Liszt (SX7w8)"},
        {route:"krankheitsportraets-franz-liszt", label:"Illness Portrait: Franz Liszt (SX7w8) – the same inability to slow down"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx7", label:"Subtype Profile SX7"},
      ])}
    </div>
  `);
}

export function seanConneryKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sean-connery-portrait.jpg" alt="Sean Connery" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sean Connery</p>
        <p class="krim-portrait-typ">SO3w4 · Social Type 3 with Four-Wing · 1930–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sean Connery</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-sean-connery">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there: a
        dementia illness in his final years that he and his family largely kept hidden from
        the public.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Connery</strong> is assigned to the <strong>social Type 3 with Four-Wing</strong>.
        The SO3 lives on a flawless public image; the Four-Wing simultaneously demands strict
        control over what is revealed about the self at all. Exactly this combination – the
        necessity of keeping one's own image flawless, combined with a lifelong reluctance
        toward any form of self-disclosure – shaped how his dementia illness was handled.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Withdrawal from public life beginning in the mid-2000s:</strong>
        Connery's voluntary retirement from acting and public life coincided with the onset of
        health changes that were not publicly known at the time.</p>
        <p class="vb-intro"><strong>b) An increasingly secluded life in the Bahamas:</strong>
        In his final years, Connery lived largely secluded in the Bahamas, with only very
        rare public appearances.</p>
        <p class="vb-intro"><strong>c) No public diagnosis during his lifetime:</strong>
        During his lifetime, Connery never made a health diagnosis public – speculation about
        his condition remained unconfirmed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Confirmation of the dementia diagnosis only after his death:</strong>
        Only after Connery's death in October 2020 did his son Jason publicly confirm that
        his father had suffered from dementia in his final years.</p>
        <p class="vb-intro"><strong>b) A course kept hidden for years:</strong>
        According to his son, the illness had begun several years before Connery's death – a
        period during which nothing about it was publicly known.</p>
        <p class="vb-intro"><strong>c) Care within the closest family circle:</strong>
        In his final years, Connery was cared for privately by his family, with no details
        reaching the public.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Death on 31 October 2020 in the Bahamas:</strong>
        Sean Connery died at age 90 at his home in the Bahamas, in his sleep, surrounded by
        his family.</p>
        <p class="vb-intro"><strong>b) Later public framing by the family:</strong>
        The confirmation of the dementia diagnosis by his son deliberately came only after
        his death, as part of the public tribute to his life, not during the illness
        itself.</p>
        <p class="vb-intro"><strong>c) Worldwide mourning for an icon:</strong>
        His death triggered international obituaries that above all honored his cinematic
        life's work – the dementia illness was mentioned only in passing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A public image that remained intact until the end:</strong>
        Since the illness only became known posthumously, Connery's public image during his
        lifetime remained untouched by the actual health reality of his final years.</p>
        <p class="vb-intro"><strong>b) Surprise in the public reaction:</strong>
        Many fans and media outlets reacted with surprise to the posthumous confirmation,
        since Connery's last publicly shown image had contained no indication of the
        illness.</p>
        <p class="vb-intro"><strong>c) Recognition of the family's discretion:</strong>
        Some obituaries explicitly honored the family's restraint, which had shielded
        Connery's final years from public curiosity.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Control over his own image until the end:</strong>
        The SO3's characteristic need to keep its own public image flawless continued in how
        the dementia illness was handled: a condition that undermines complete control over
        oneself was consistently kept away from the public.</p>
        <p class="vb-intro"><strong>b) The Four-Wing and distrust of closeness:</strong>
        The same restraint with which Connery protected his private life his whole life
        showed in dealing with his own illness as a consistent decision not to make this part
        of his life accessible even to close companions and the public.</p>
        <p class="vb-intro"><strong>c) The son as mediator of the posthumous truth:</strong>
        That the confirmation came only after his death, through his son, fits the SO3w4
        pattern: only once his own image can no longer be endangered by disclosure is the
        full truth made accessible.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A master of controlled self-presentation, confronted with the loss of all control:</strong>
        Connery's entire professional life rested on precise control over what was shown of
        him – of all things, an illness that makes exactly that control over one's own mind
        impossible struck him in his final years.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-karl-lagerfeld">Karl
        Lagerfeld (SO3w4)</a>: Lagerfeld too concealed a serious diagnosis from the public
        almost until the end, to avoid endangering his own carefully controlled image. Both
        SO3w4s show the same pattern: their own illness is kept fully under the control of
        their own self-presentation for as long as possible, rather than negotiated in
        public.</p>
        <p class="vb-intro"><strong>c) Why memory, of all things, the storehouse of his own roles?</strong>
        For a social Three with a Four-Wing whose entire professional life consisted of
        precisely studying and embodying roles, one interpretation suggests itself: exactly
        the cognitive ability that carried his entire life's work – memory – became the site
        of decline. This reading is a plausible interpretation, not a proven clinical causal
        link, and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the social Three's pattern inevitably leads to dementia –
        <strong>any person can develop any illness, regardless of subtype.</strong> What can
        be shown in Connery's case is a pattern in dealing with a diagnosis that threatens
        one's self-image, which keeps recurring in a pronounced social Type 3 with a
        Four-Wing – one of many possible readings, not a verdict. The corresponding illness
        pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Connery did not know his own pattern as an Enneagram structure – the social Type 3
        with a Four-Wing reflexively clings to control over its own public image, even when
        an illness would urgently suggest open disclosure, and lived out exactly this pattern
        unchanged until his death. Anyone who does not recognize their own tendency to keep
        their own image flawless at all costs as a pattern risks that their own reality only
        comes to light posthumously.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 3 with Four-Wing explains much about how <strong>Sean Connery</strong>
        dealt with his own dementia illness: a man whose entire life's work rested on
        flawless self-control kept even the loss of that control entirely private until his
        death – the cheetah that, in the end, withdrew into the silence of its own,
        never-fully-revealed world before the truth could even come to light.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-sean-connery", label:"Portrait: Sean Connery (SO3w4)"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SO3"},
      ])}
    </div>
  `);
}

export function knutHamsunKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-knut-hamsun-portrait.jpg" alt="Knut Hamsun" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Knut Hamsun</p>
        <p class="krim-portrait-typ">SP4w5 · Self-Preservation Type 4 with Five-wing · 1859–1952</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Knut Hamsun</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-knut-hamsun">portrait under Famous Personalities</a>
        in this compass – that page covers his literary body of work and his style-defining
        innovation. This page focuses on what is only touched there: the physical decline of
        his last decades – arteriosclerosis, a stroke with aphasia, near-total deafness, and a
        progressive dementia that in 1945 ended in a widely watched psychiatric proceeding
        against him.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hamsun</strong> is assigned to the <strong>self-preservation Type 4 with a
        five-wing</strong>. The SP4 processes suffering not through exchange with others but
        through withdrawal and quiet self-observation – in Hamsun this showed in his lifelong
        pattern of retreating to his remote estate at Nørholm rather than seeking public
        explanation. The five-wing kept an analytical distance intact even during his own
        psychiatric proceeding: his last book observes his own case almost as if from outside.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Early signs</h3>
        <p class="vb-intro"><strong>a) Progressive arteriosclerosis from the late 1930s:</strong>
        Even before 1940, in his ninth decade, Hamsun showed clear signs of progressive
        vascular calcification – a physical basis that increasingly impaired his mental
        capacity years before the public took notice.</p>
        <p class="vb-intro"><strong>b) A stroke with loss of speech in 1942:</strong>
        In 1942 Hamsun suffered a first cerebral hemorrhage that caused aphasia – a temporary
        loss of the ability to fluently understand or produce speech, right in the years when
        he leaned furthest out politically.</p>
        <p class="vb-intro"><strong>c) Near-total deafness in old age:</strong>
        In parallel, his hearing deteriorated so severely that conversations increasingly had
        to be conducted in writing – an additional, very concrete isolation from his
        surroundings, compounding an already withdrawn way of life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General characteristics</h3>
        <p class="vb-intro"><strong>a) The Hitler obituary in a state of advanced impairment:</strong>
        In 1945, at age 86, Hamsun wrote a short, disturbing obituary for Adolf Hitler – an act
        that many contemporaries read not only as a political stance but also as a symptom of
        already severely impaired judgment.</p>
        <p class="vb-intro"><strong>b) Four months of psychiatric observation in 1945/46:</strong>
        In October 1945 Hamsun was admitted to a psychiatric clinic in Oslo, where he was
        examined for four months by psychiatrists Gabriel Langfeldt and Ørnulv Ødegård – months
        he himself later called the "most terrible" of his life.</p>
        <p class="vb-intro"><strong>c) A verdict between acquittal and conviction:</strong>
        The examiners declared Hamsun neither insane at the time of examination nor at the time
        of his controversial actions, but attested to "permanently impaired mental faculties" –
        a finding that meant neither full culpability nor full exoneration and is still debated
        today.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential traits</h3>
        <p class="vb-intro"><strong>a) A final book as detached self-observation:</strong>
        In 1949, at age 90, Hamsun published <em>On Overgrown Paths</em> – a literarily
        remarkably controlled account of his own psychiatric evaluation, written by a man who
        had just been told his mental faculties were permanently impaired.</p>
        <p class="vb-intro"><strong>b) Retreat to Nørholm instead of public self-justification:</strong>
        Rather than explain himself publicly or ask for leniency, Hamsun consistently withdrew
        to his remote estate – the same retreat movement that had shaped his entire life as a
        writer, now under the sign of a guilty verdict.</p>
        <p class="vb-intro"><strong>c) No retraction despite massive social pressure:</strong>
        To the end, Hamsun never fully retracted his political statements, even though he lost
        his public standing and part of his fortune to a heavy fine – a stubbornness that
        remained recognizable even amid advanced cognitive decline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall impact</h3>
        <p class="vb-intro"><strong>a) From Nobel laureate to convicted collaborator:</strong>
        The fall from national literary treasure (Nobel Prize in Literature, 1920) to an old man
        convicted of collaboration and burdened with a heavy fine took place within a few years
        and shapes Hamsun's posthumous reputation to this day more than any single one of his
        works.</p>
        <p class="vb-intro"><strong>b) A still-disputed overall assessment:</strong>
        Literary scholars and historians continue to argue over how much his organic illness
        actually explains his late political decisions – a question the surviving evidence can
        never fully settle.</p>
        <p class="vb-intro"><strong>c) A late work that deepened the debate rather than ending it:</strong>
        <em>On Overgrown Paths</em> became a political matter in its own right – celebrated for
        its literary clarity, while also read as a possible strategy to retroactively present
        himself as mentally diminished in order to escape a harsher legal judgment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic effect</h3>
        <p class="vb-intro"><strong>a) The five-wing as analytical observer of its own decline:</strong>
        Instead of repressing or emotionally processing his psychiatric proceeding, Hamsun
        described it in literary form, almost as an outsider studying his own case – typical of
        the five-wing, which seeks distance even in the face of its own dissolution.</p>
        <p class="vb-intro"><strong>b) The dove caged in its own isolation:</strong>
        Deafness, retreat to Nørholm, and effective social ostracism reinforced each other into
        an almost total seclusion – an extreme case of the withdrawal already characteristic of
        the self-preservation Four.</p>
        <p class="vb-intro"><strong>c) Holding to inner truth rather than approval:</strong>
        Hamsun sought neither public sympathy nor full rehabilitation, but held to his own view,
        radically at odds with majority opinion – the SP4 signature of weighing one's own
        perception more heavily than social approval.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The illness as a common thread</h3>
        <p class="vb-intro"><strong>a) A decades-long organic decline, made public late:</strong>
        Arteriosclerosis, stroke, aphasia, and progressive deafness accumulated over more than a
        decade into a physical decline that only became sharply visible to the public through
        the political events of 1945.</p>
        <p class="vb-intro"><strong>b) Writing as the last remaining space for expression:</strong>
        As in his healthy decades, the written word remained Hamsun's most important tool for
        giving form to the incomprehensible, even in decline – <em>On Overgrown Paths</em> is
        the last, most striking evidence of that.</p>
        <p class="vb-intro"><strong>c) Why, of all things, a decline in one's own judgment?</strong>
        For a self-preservation Four with a five-wing, whose entire identity rests on precise,
        self-observed perception, an organic decline of exactly that faculty can be read as a
        particularly existential threat: what Hamsun had trusted most throughout his life – his
        own sharp judgment – was precisely what increasingly slipped away from him at the end.
        This reading is developed further in this compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) A pattern, not a determinism:</strong>
        This does not mean the self-preservation Four with a five-wing pattern inevitably leads
        to this kind of decline – <strong>anyone can get any illness, regardless of subtype.</strong>
        Hamsun's health decline is closely tied to purely physical, age-related vascular
        changes, not purely psychosomatic causes. What his case can show is a pattern in how a
        pronounced self-preservation Four with a five-wing deals with its own decline – one of
        many possible readings, not a verdict. The corresponding illness pattern is being
        developed further, case by case, in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Like most people of his time, Hamsun did not consciously know his Enneagram pattern.
        Without that knowledge, he also lacked access to a conscious distinction between organic
        decline and long-held conviction – he processed his fate the only way he knew: through
        silent withdrawal and literary form, rather than seeking outside help in time to make
        sense of his own condition. Those who recognize their own pattern can consciously
        counter it; those who don't remain as exposed to their decline as Hamsun was in his
        final decades.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Four with a five-wing shows itself in <strong>Knut Hamsun</strong>
        in one last, bitter turn: for a lifetime he trusted his own precise perception more than
        any outside voice – and in the end had to watch that very perception be undermined by an
        organic illness, without being able to reliably tell the difference himself any longer.
        The dove kept writing to the end, even as the overgrown paths of his own mind barely
        showed a clear way forward anymore.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All illness portraits"},
        {route:"beruehmte-knut-hamsun", label:"Portrait: Knut Hamsun (SP4w5) – body of work"},
        {route:"krankheitsportraets-vincent-van-gogh", label:"Illness portrait: Vincent van Gogh (SP4w5) – same subtype, processing crisis through his own art form"},
        {route:"psychosomatik", label:"Psychosomatics register"},
        {route:"subtype/se4", label:"Subtype profile SE4"},
      ])}
    </div>
  `);
}

export function vincentVanGoghKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-vincent-van-gogh-portrait.jpg" alt="Vincent van Gogh" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Vincent van Gogh</p>
        <p class="krim-portrait-typ">SP4w5 · Self-Preservation Type 4 with Five-wing · 1853–1890</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Vincent van Gogh</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-vincent-van-gogh">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and his systematic self-taught
        study. The focus here is on what that page only mentions in passing: the recurring
        psychotic and suspected epileptic crises of his final two years, the ear incident of
        1888, and his death in 1890 from a likely self-inflicted gunshot wound.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Van Gogh</strong> is classified as the <strong>Self-Preservation Four with
        Five-wing</strong>. The SP4 does not carry its suffering outward but endures it
        tenaciously and alone – for Van Gogh, that meant almost never naming his crises
        directly in his letters to Theo, writing instead about color, composition, and
        structure, even when the letter was written just after an attack. The Five-wing
        maintained analytical distance from his own work even in the midst of acute crisis –
        Van Gogh kept painting methodically while his psyche increasingly fractured.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A life that never found its center early on:</strong>
        Van Gogh's youth was marked by repeated career failures – art dealer, teacher, lay
        preacher – and by growing social isolation. Even before his turn to painting, family
        members described him as difficult to reach, prone to brooding, and frequently failing
        in relationships.</p>
        <p class="vb-intro"><strong>b) Absinthe, turpentine, and an unhealthy way of living:</strong>
        During his Paris and Arles years, Van Gogh regularly drank absinthe and lived for long
        stretches on little more than bread, coffee, and tobacco – a lifestyle that further
        weakened his already fragile physical and mental state.</p>
        <p class="vb-intro"><strong>c) First documented episodes of confusion:</strong>
        Even before the event of December 1888, contemporaries reported episodes of sudden
        confusion and unusual behavior in Van Gogh – early signs of what would come to a head
        in Arles.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The ear incident as first open breakdown:</strong>
        After a violent argument with Paul Gauguin on December 23, 1888, Van Gogh cut off part
        of his left ear. Contemporary accounts describe massive confusion and gaps in memory in
        the hours afterward – Van Gogh himself could later recall little of much of the
        incident.</p>
        <p class="vb-intro"><strong>b) Recurring crises at the asylum:</strong>
        During his voluntary stay at Saint-Paul-de-Mausole near Saint-Rémy (1889–1890), Van
        Gogh suffered several further severe crises, at times with hallucinations and the
        impulse to swallow paint. His treating physician, Dr. Théophile Peyron, diagnosed a
        form of epilepsy – one of the most widely discussed historical interpretations of his
        condition to this day, alongside hypotheses of bipolar disorder or a borderline
        personality structure.</p>
        <p class="vb-intro"><strong>c) Clear periods between crises:</strong>
        Notably, Van Gogh was usually fully lucid and capable of work again between acute
        episodes – it was precisely in these periods that some of his best-known works
        emerged, including "The Starry Night," painted directly from the window of his room
        at the asylum.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The voluntary admission as a quiet consequence:</strong>
        Rather than confronting his crisis publicly or seeking help within his usual social
        circle, Van Gogh chose quiet retreat into the asylum – a structured, self-chosen
        isolation that gave him both safety and the ability to keep working.</p>
        <p class="vb-intro"><strong>b) An almost scientific daily routine despite crisis:</strong>
        Even at the asylum, Van Gogh maintained a strict, self-imposed working structure –
        regular painting hours, systematic studies of his surroundings, meticulous color
        decisions, documented in letters to Theo that go into the details of technical
        questions.</p>
        <p class="vb-intro"><strong>c) Not a word of complaint outwardly:</strong>
        Even in letters written during acute crisis periods, Van Gogh's matter-of-fact
        description of his work dominates – only rarely and mostly in passing does he mention
        his own exhaustion or fear, never in dramatic or accusatory terms.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) The move to Auvers-sur-Oise:</strong>
        In May 1890, Van Gogh left the asylum and moved to Auvers-sur-Oise, near Dr. Paul
        Gachet, a physician with an interest in homeopathy who cared for psychologically
        fragile artists. In the final ten weeks of his life, he produced more than seventy
        paintings there – one of the most productive periods of his entire body of work.</p>
        <p class="vb-intro"><strong>b) July 27, 1890:</strong>
        Van Gogh suffered a gunshot wound to the chest near a wheat field and dragged himself
        back to his room at the inn. The exact circumstances remain not fully resolved to this
        day, though research generally regards them as self-inflicted.</p>
        <p class="vb-intro"><strong>c) Two days until death:</strong>
        Theo rushed to Vincent's bedside, where he died on July 29, 1890, at the age of 37.
        According to reports, his last words were: "The sadness will last forever" – a final,
        quiet sentence about a state he had scarcely ever spoken aloud in life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Tenacity increasingly turned against his own body:</strong>
        The same SP4 tenacity that enabled Van Gogh to endure years of poverty and public
        disregard unwaveringly turned, in his crisis years, increasingly against himself –
        from the ear incident to the likely self-inflicted gunshot wound.</p>
        <p class="vb-intro"><strong>b) The Five-wing as counterforce, not protection:</strong>
        The analytical Five-wing kept Van Gogh working in a systematic, almost scientific way
        even in his deepest crisis – a work like "The Starry Night" was created in the middle
        of one of the hardest periods of his life. The Five-wing did not, however, protect
        against the crisis itself, but merely gave it an ordered, channeled form outwardly.</p>
        <p class="vb-intro"><strong>c) Color as the only permitted language of suffering:</strong>
        While Van Gogh almost entirely concealed his inner distress in personal exchange, it
        can be read clearly in the increasingly turbulent, swirling visual language of his
        final months – the suffering found its only expression where the Self-Preservation
        Four allowed it: in the work, not in words.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Suffering hidden, system-work unbroken:</strong>
        Typical for the Self-Preservation Four with a Five-wing: a progressive psychological
        burden that is almost never openly addressed, while the Five-wing simultaneously
        maintains a highly systematic, analytical body of work. For Van Gogh this showed as
        psychotic crises alongside methodically considered painting – suffering is endured in
        silence while the intellectual system-work continues unbroken.</p>
        <p class="vb-intro"><strong>b) A crisis that grew over years, not a sudden collapse:</strong>
        From the first signs of social isolation in the 1870s to his death in 1890 runs a
        continuous line of growing psychological instability – not a single catastrophe, but a
        pattern that developed over roughly fifteen years.</p>
        <p class="vb-intro"><strong>c) Two symptoms, one shared origin:</strong>
        The 1888 ear incident and the fatal gunshot wound of 1890 can be read as two
        expressions of the same underlying movement: in acute crises, Van Gogh's normally
        inward-turned suffering abruptly and physically turned against himself.</p>
        <p class="vb-intro"><strong>d) Why, of all things, recurring seizures and psychosis?</strong>
        For a Self-Preservation Four, who usually channels its suffering into quiet, controlled
        paths, one reading suggests itself: when control over the mind itself temporarily
        collapses, it strikes the SP4 at its most vulnerable point – the ability to process its
        own inner experience in an orderly way. This reading is a plausible interpretation, not
        a documented historical causal link, and is explored in more depth in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik/epilepsie">Psychosomatics
        Register entry on epilepsy</a>.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Four's pattern inevitably leads to recurring
        psychotic crises – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Van Gogh's case can show is a pattern that stands out again and
        again in practice wherever the tendency exists to process psychological suffering alone
        and in silence – one possible explanation among many, not a verdict.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Van Gogh did not know his own Enneagram pattern – the concept did not yet exist in this
        form during his lifetime. The self-preservation tenacity that enabled him to endure
        poverty and public rejection for years carried, for him, no built-in warning mechanism
        that could have led him to lasting help in time; on the contrary, every crisis was
        processed in exactly the same logic he applied to material hardship: endure alone, keep
        working, do not complain. Someone who does not know their own exhaustion pattern cannot
        interrupt it in time either – for Van Gogh, that ended only with his death at the age of
        37.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Van Gogh's</strong> final two years, the Self-Preservation Four with
        Five-wing shows itself in its most striking form: a psyche that increasingly
        fractured, while the same man kept painting with unchanged analytical precision – works
        of methodical clarity were still produced shortly before his death. The dove that
        scarcely ever put its suffering into words instead spoke it in color – until, on July
        29, 1890, two days after his gunshot wound, it fell silent for good, at the age of 37.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-vincent-van-gogh", label:"Portrait: Vincent van Gogh (SP4w5) – life's work"},
        {route:"krankheitsportraets-virginia-woolf", label:"Illness Portrait: Virginia Woolf (SE4w5) – same subtype"},
        {route:"krankheitsportraets-knut-hamsun", label:"Illness portrait: Knut Hamsun (SP4w5) – same subtype, processing crisis through his own art form"},
        {route:"psychosomatik/epilepsie", label:"Psychosomatics Register: Epilepsy"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function wolfgangAmadeusMozartKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wolfgang-amadeus-mozart-portrait.jpg" alt="Wolfgang Amadeus Mozart" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wolfgang Amadeus Mozart</p>
        <p class="krim-portrait-typ">SE2w3 · Self-Preservation Type 2 with Three-wing · 1756–1791</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Wolfgang Amadeus Mozart</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-wolfgang-amadeus-mozart">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only briefly touched on there: a
        recurring chain of feverish illnesses that began in childhood and ended in December
        1791 with his sudden death at only 35 years of age.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Mozart</strong> is classified as the <strong>Self-Preservation Two with
        Three-wing</strong>. Naranjo described the SE2 as <em>Me First</em> – the subtype who
        secures her own survival and that of those closest to her before turning further
        outward. The Three-wing adds a further, unconditional drive: proving one's own
        indispensability through visible achievement – a pattern that can be traced right
        into Mozart's final, feverishly productive months.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Earthy rather than otherworldly:</strong>
        Unlike the image of the ethereal, floating genius that posterity has made of him,
        Mozart's gaze was directed throughout his life at very concrete, physical matters –
        income, commissions, his family's health, his own livelihood.</p>
        <p class="vb-intro"><strong>b) His own body as a reliable but overtaxed resonating chamber:</strong>
        As a child Mozart already learned to treat feverish exhaustion as a temporary state
        to be endured rather than a warning sign to be heeded – an attitude that runs through
        his entire life.</p>
        <p class="vb-intro"><strong>c) Family kept firmly in view, even in his own decline:</strong>
        Even in his final weeks, Mozart looked after Constanze and their children, students
        and colleagues – the care of the SE2 did not pause even as his own body was already
        sending warning signs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A lifelong chain of feverish illnesses:</strong>
        At age eleven, Mozart contracted smallpox, which, according to his sister Nannerl,
        left him blind for nine days. In 1765/66, during the family's great European tour, he
        and Nannerl fell life-threateningly ill with typhoid fever. Repeated bouts of
        scarlet fever and rheumatic fever, along with chronically recurring tonsillitis,
        followed throughout his life.</p>
        <p class="vb-intro"><strong>b) Three major projects in parallel in his final year:</strong>
        In 1791, Mozart worked simultaneously on <em>The Magic Flute</em>, on <em>La clemenza
        di Tito</em> (composed under time pressure for the Prague coronation festivities), and
        on the Requiem – a work commissioned anonymously, which he would never finish.</p>
        <p class="vb-intro"><strong>c) Onset of his final illness:</strong>
        Around November 20, 1791, Mozart fell ill with high fever, headache, a skin rash, and
        pain and swelling in his arms and legs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Rapid deterioration in the second week of illness:</strong>
        Vomiting, diarrhea, generalized fluid retention throughout the body, and increasing
        shortness of breath followed – toward the end, Mozart could no longer sit up
        unassisted.</p>
        <p class="vb-intro"><strong>b) Working on the Requiem until shortly before death:</strong>
        Even from his sickbed, Mozart explained details of the orchestration to his student
        Franz Xaver Süssmayr – the Three-wing of the SE2 would not let go of the unfinished
        musical work, even in the face of his own dying.</p>
        <p class="vb-intro"><strong>c) Death on December 5, 1791:</strong>
        About fifteen days after the first symptoms, Mozart died at the age of 35. His burial
        in a Viennese shaft grave was standard practice at the time, not a sign of poverty as
        a later myth claimed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A vague contemporary diagnosis:</strong>
        Mozart's Viennese death certificate cited "severe miliary fever" as the cause – a
        catch-all term of the time for feverish rash illnesses, not a modern diagnosis.</p>
        <p class="vb-intro"><strong>b) A debunked legend:</strong>
        The still-popular story of poisoning by Antonio Salieri – spread through literature
        by Pushkin and later the film <em>Amadeus</em> – is not supported by serious
        medical-historical research and is considered debunked.</p>
        <p class="vb-intro"><strong>c) Today's most plausible explanation:</strong>
        A 2009 retrospective study of a concurrent Viennese streptococcal epidemic with a
        cluster of kidney complications supports the theory of a streptococcal infection
        followed by rheumatic fever and a resulting kidney inflammation (glomerulonephritis)
        as the most likely cause of death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Peak output despite mounting exhaustion:</strong>
        That Mozart drove three major works forward at once in the very year his body was
        already visibly weakened shows the endurance of the SE2w3 at its most restless.</p>
        <p class="vb-intro"><strong>b) A work finished without him:</strong>
        The Requiem remained unfinished at Mozart's death and was completed by Süssmayr –
        even in death, his final work remained subject to someone else's completion.</p>
        <p class="vb-intro"><strong>c) The hippopotamus that defended its territory to the point of total exhaustion:</strong>
        The energy of the SE2w3 remained directed to the very end at the same drive that had
        shaped Mozart's entire life: to leave no commission unfulfilled, no proof of his own
        worth unmade, even as his own body had long since reached its limits.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Smallpox and nine days of blindness:</strong>
        Already at age eleven, Mozart's body faced a life-threatening illness that briefly
        cost him his eyesight – an early sign of a susceptibility that had been present since
        childhood.</p>
        <p class="vb-intro"><strong>b) Typhoid fever on the great European tour:</strong>
        In 1765/66, during the concert tour across Europe organized by their father, Wolfgang
        and Nannerl fell life-threateningly ill with typhoid fever – early evidence of how
        directly the professional strains placed on the Mozart family pitted health against
        survival.</p>
        <p class="vb-intro"><strong>c) Recurring scarlet and rheumatic fevers:</strong>
        Throughout his childhood and youth, family letters document repeated feverish
        illnesses and chronic tonsillitis – a constitution that never fully found rest.</p>
        <p class="vb-intro"><strong>d) Why, of all things, a flooding of his own body?</strong>
        The most plausible explanation for Mozart's death describes kidney failure, in which
        fluid accumulates unchecked throughout the body because the organ that regulates it
        loses its function. For a Self-Preservation Two with Three-wing, whose entire life
        was governed by the question of how to secure her own survival through ever new,
        visible proofs of her own indispensability, one reading suggests itself: a system
        that never learned to grant itself recovery ultimately, quite literally, overflowed.
        The body that had functioned reliably his whole life, despite being permanently
        called upon, could no longer compensate for the overload at the end. This reading is
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Two's pattern inevitably leads to kidney
        disease – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Mozart's case can show is a pattern that stands out again and again in practice
        wherever the need exists to secure one's own survival relentlessly through new proofs
        of worth – one possible explanation among many, not a verdict. The corresponding
        condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Mozart did not know his own pattern – the self-preservation Two with Three-wing secures its own existence through relentless output and courting patrons, and it was exactly this drive that kept him working on three major works simultaneously even with high fever, instead of allowing himself rest. Someone who does not recognize their own compulsion to perform keeps working until the body leaves no choice.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Two with Three-wing explains much about the course of
        <strong>Mozart's</strong> own illness: a constitution that ran feverish and never fully found
        rest from childhood on, which he overcame for a lifetime through sheer endurance and
        tireless work – until his own body could no longer summon further effort in December
        1791. The hippopotamus that defended its territory to the very last second, even as
        its own strength had long since been spent.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-wolfgang-amadeus-mozart", label:"Portrait: Wolfgang Amadeus Mozart (SE2w3) – life's work"},
        {route:"krankheitsportraets-frida-kahlo", label:"Illness Portrait: Frida Kahlo (SE2w3) – the same refusal to step back"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SE2"},
      ])}
    </div>
  `);
}

export function hannahArendtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hannah-arendt-portrait.jpg" alt="Hannah Arendt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hannah Arendt</p>
        <p class="krim-portrait-typ">SO5w4 · Social Type 5 with Four-wing · 1906–1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hannah Arendt</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-hannah-arendt">famous-personality portrait</a>
        – that page covers her political thinking and her type structure in general. Here, an
        aspect that page barely touched on moves to the foreground: a lifelong chain
        smoker whose first, nearly fatal heart attack in 1974 did not make her quit – with
        fatal consequences a year and a half later.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Arendt</strong> is assigned to the <strong>Social Type 5 with Four-wing</strong>.
        SO5 seeks security through knowledge and intellectual authority, not through outward
        compliance with medical advice. The Four-wing adds an existential, often headstrong
        depth &ndash; a refusal to bend to external rules, even when they serve one's own
        health. This exact combination shaped how she dealt with her own mortality.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades of heavy smoking:</strong>
        Arendt was a lifelong chain smoker &ndash; Chesterfields, Lucky Strikes, Camels,
        occasionally cigars and pipe tobacco as well. Smoking was, for her, inseparable from
        the act of thinking and writing itself.</p>
        <p class="vb-intro"><strong>b) A nearly fatal first heart attack in 1974:</strong>
        In May 1974 she suffered a severe heart attack while lecturing in Scotland, which
        nearly proved fatal. She recovered, but remained in noticeably poor health
        afterward.</p>
        <p class="vb-intro"><strong>c) Coronary artery disease as a result:</strong>
        In the months following the first heart attack, she developed coronary artery disease
        &ndash; considered a direct result of decades of smoking.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A doctor's advice to switch to Kools:</strong>
        After the first heart attack, her doctor advised her, at minimum, to switch to
        menthol Kools cigarettes &ndash; a compromise that did not seriously pursue full
        smoking cessation at all.</p>
        <p class="vb-intro"><strong>b) No behavioral change despite the brush with death:</strong>
        Arendt continued smoking after the heart attack, albeit with the recommended brand.
        No fundamental change to her lifestyle took place.</p>
        <p class="vb-intro"><strong>c) Work continued unabated:</strong>
        In the year and a half between her first and second heart attacks, she kept writing
        "The Life of the Mind," her final, three-part planned work &ndash; with no noticeable
        slowdown in her workload.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) One last sociable evening:</strong>
        On December 4, 1975, Arendt had invited guests to dinner at her New York apartment
        &ndash; a normal, sociable evening, with no sign of an impending crisis.</p>
        <p class="vb-intro"><strong>b) The second, fatal heart attack while serving coffee:</strong>
        After moving to the living room to serve coffee following dinner, she had a short
        coughing fit before losing consciousness.</p>
        <p class="vb-intro"><strong>c) A typewriter bearing only a heading:</strong>
        In her typewriter was a page with the heading "Judging" and two epigraphs, but no
        further text &ndash; the planned third part of her final work remained forever
        unfinished.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on December 4, 1975:</strong>
        Hannah Arendt died at age 69 in her New York apartment &ndash; her second heart
        attack within nineteen months proved fatal.</p>
        <p class="vb-intro"><strong>b) Smoking as the likely primary factor:</strong>
        Her decades-long cigarette use, continued even after the first heart attack, is
        considered the most likely primary cause of the coronary artery disease that led to
        her death.</p>
        <p class="vb-intro"><strong>c) A work others had to finish:</strong>
        Her friend, the writer Mary McCarthy, posthumously edited and published the
        unfinished "The Life of the Mind" in two volumes in 1977 and 1978.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Knowledge of the risk, without consequence for behavior:</strong>
        The SO5-typical separation of intellectual understanding from emotional-practical
        implementation showed clearly: Arendt knew of the danger, but changed only the bare
        minimum instead of quitting smoking entirely.</p>
        <p class="vb-intro"><strong>b) The Four-wing and the refusal to submit to external rules:</strong>
        As in her intellectual stance toward critics, she did not blindly follow medical
        advice here either, but made her own, only partially adjusted decision &ndash;
        autonomy even against her own health.</p>
        <p class="vb-intro"><strong>c) Retreat into work rather than caution:</strong>
        Rather than living more cautiously after the first heart attack, she immersed
        herself further in her most demanding, final philosophical project.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A habit that became a tool of thought:</strong>
        For Arendt, smoking was not a mere vice, but closely woven into the act of thinking
        and writing itself &ndash; a ritual that accompanied her for decades and that she did
        not give up even in the face of concrete mortal danger.</p>
        <p class="vb-intro"><strong>b) A warning acknowledged, but not acted upon:</strong>
        From May 1974 to December 1975, she lived with full knowledge of her heart risk
        &ndash; without repressing it, but also without acting on it consistently. The
        knowledge remained intellectually processed, not behaviorally effective.</p>
        <p class="vb-intro"><strong>c) Why the heart, of all organs?</strong>
        For a social Five with Four-wing, whose security arises from rational distance and
        intellectual control, one interpretation suggests itself: precisely the organ most
        immediately associated with emotion and vitality became the site of a threat that
        eluded pure intellectual control. This interpretation is a plausible reading, not a
        documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the social Five inevitably leads to
        cardiovascular disease &ndash; <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Arendt's case shows is a pattern in how a pronounced social
        Five with Four-wing handles a known health risk &ndash; one possible reading among
        many, not a verdict. The corresponding illness profile is gradually being developed
        in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Arendt did not know her own pattern &ndash; the social Five with Four-wing prefers to
        determine her own habits herself rather than submit to external control, and exactly
        this showed in her only half-hearted switch to milder cigarettes instead of quitting
        entirely. Whoever does not recognize their own need for autonomy as a pattern easily
        mistakes it for purely rational risk assessment, even though their own fixation plays
        a part too.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Five with Four-wing explains much about the course of <strong>Arendt's</strong>
        own illness: a woman whose security arose from intellectual autonomy knowingly
        accepted a known mortal danger rather than fully submit to outside advice. The
        octopus who was still working, thinking, and living while serving coffee to guests
        &ndash; until her own heart left her no more choice.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-hannah-arendt", label:"Portrait: Hannah Arendt (SO5w4) – life's work"},
        {route:"krankheitsportraets-albert-einstein", label:"Illness Portrait: Albert Einstein (SO5w4) – the same pattern: warning acknowledged, not followed"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function margaretRutherfordKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-margaret-rutherford-portrait.jpg" alt="Margaret Rutherford" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Margaret Rutherford</p>
        <p class="krim-portrait-typ">SP9w8 · Self-Preservation Type 9 with Eight-wing · 1892–1972</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Elephant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Animal correspondence: Elephant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Margaret Rutherford</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-margaret-rutherford">portrait under Famous Personalities</a>
        in this Compass – that page covers her comedic stage career and the hidden substance
        behind her easygoing façade. This portrait is devoted to a chapter only referenced in
        passing there: a lifelong severe depression, followed by a progressive dementia in her
        final years – two illnesses she endured with the same quiet persistence with which she
        had fled into familiar routines her entire life.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Rutherford</strong> is classified as the <strong>self-preservation Nine with
        Eight-wing</strong>. Naranjo called the self-preservation Nine <em>Appetite</em>:
        security through habit and comfort as a buffer against a deeper inner emptiness. The
        Eight-wing gives this Nine a hidden physical and mental substance barely visible at
        rest. It was exactly this combination of denial through routine and quiet inner
        strength that shaped how Rutherford processed both her depression and her later
        dementia.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A childhood marked by catastrophe:</strong>
        Rutherford's father killed her grandfather and was committed to an asylum; her mother
        later took her own life while Rutherford was still a child – a foundation on which
        depressive episodes took hold early.</p>
        <p class="vb-intro"><strong>b) First documented depressive episodes in adulthood:</strong>
        Already as a young actress, Rutherford struggled with phases of deep low mood, which
        she largely hid from colleagues and the public.</p>
        <p class="vb-intro"><strong>c) Electroconvulsive therapy as a recurring treatment:</strong>
        Over the years she underwent electroconvulsive therapy multiple times – then a common
        but drastic treatment for severe depression, which she always had carried out
        discreetly and without public attention.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) An illness that all but vanished behind the stage persona:</strong>
        Contemporaries and biographers consistently describe how radically Rutherford's
        private suffering stayed separated from her public persona – hardly anyone outside her
        closest circle suspected the extent of her depression.</p>
        <p class="vb-intro"><strong>b) Two separate illness phases across decades:</strong>
        The depressive illness accompanied her for much of her adult life, while dementia only
        set in during her final decade – two distinct burdens, clearly separated in time,
        within the same long life.</p>
        <p class="vb-intro"><strong>c) A retreat into the familiar rather than active crisis management:</strong>
        Instead of addressing her depression publicly or actively fighting it, Rutherford
        immersed herself further into the same roles, the same ensemble, the same marriage –
        routine as refuge, not as cure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Stringer Davis as a stabilizing anchor:</strong>
        Her husband, actor Stringer Davis, whom she married in 1945 at age 53, often
        accompanied her in small supporting roles in her own films – a closeness that helped
        her through the hardest phases without the illness ever being named publicly.</p>
        <p class="vb-intro"><strong>b) Caring for Gordon Langley Hall despite her own struggles:</strong>
        Even while wrestling with severe depression herself, she took in young Gordon Langley
        Hall and raised him as her own – caring for others while her own burden stayed hidden.</p>
        <p class="vb-intro"><strong>c) First signs of cognitive decline in the late 1960s:</strong>
        In her final years, those close to her noticed increasing forgetfulness and confusion,
        which eventually consolidated into a progressive dementia.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A final decade between performances and withdrawal:</strong>
        Even as her cognitive impairment progressed, Rutherford still occasionally took on
        roles before gradually withdrawing from public life.</p>
        <p class="vb-intro"><strong>b) Care from her closest circle rather than public disclosure:</strong>
        As with her depression, her dementia was kept largely private – Davis and a few close
        confidants took on her care without the public ever learning the full extent.</p>
        <p class="vb-intro"><strong>c) Death on 22 May 1972 in Chalfont St Peter:</strong>
        Margaret Rutherford died at age 80 – her husband Stringer Davis followed her only two
        years later, having cared for her until the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The Eight-wing that sustained the façade for decades:</strong>
        The same hidden substance that carried Rutherford's comedic stage presence also kept
        the separation between public cheerfulness and private suffering stable for decades –
        an achievement that required enormous inner strength.</p>
        <p class="vb-intro"><strong>b) Appetite that fled into routine rather than confrontation:</strong>
        The self-preservation Nine seeks peace in the familiar – for Rutherford, this refuge
        was used twice over: first against the depression, later unconsciously against the
        onset of dementia's confusion as well.</p>
        <p class="vb-intro"><strong>c) No public fight, only quiet endurance:</strong>
        Unlike some other illness portraits in this Compass, no documented moment of public
        confrontation with her own illness exists for Rutherford – only the quiet, decades-long
        carrying of a double burden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Two illnesses, one pattern:</strong>
        Both the depression and the later dementia met the same underlying strategy in
        Rutherford: not confronting her own distress actively, but letting it disappear behind
        habit, routine, and a comedic façade.</p>
        <p class="vb-intro"><strong>b) The parallel to Margaret Rutherford's own Life Pattern Compass fingerprint:</strong>
        This exact pattern – inertia as self-forgetting rather than active struggle – already
        appears in her portrait under Famous Personalities: a falling-asleep toward her own
        distress that here continued across two different illnesses.</p>
        <p class="vb-intro"><strong>c) Why depression and dementia, of all things?</strong>
        For a self-preservation Nine with Eight-wing, whose deepest need is to find peace in the
        familiar and to dampen her own inner perception, one interpretation suggests itself:
        of all possible illnesses, it was the two that can most strongly cloud awareness of
        one's own inner reality that converged in Rutherford. This interpretation is developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A classification without determinism:</strong>
        This does not mean that the self-preservation Nine's pattern inevitably leads to
        depression or dementia – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Rutherford's case illustrates is a pattern that keeps recurring
        in practice alongside deep, habit-based denial – one of many possible explanations, not
        a verdict. The corresponding illness pattern is gradually being developed in this
        Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Rutherford did not know her own Enneagram pattern. Without that awareness, she had no
        reason to consciously counter her own Nine's inertia – instead she immersed herself ever
        further into the same roles, the same routine, the same silence.
        Not out of guilt, but out of not knowing her own pattern – and that is exactly what
        explains why two different, awareness-clouding illnesses could unfold unhindered across
        an entire life, instead of being recognized and treated in time.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Margaret Rutherford's</strong> double illness history reveals the
        self-preservation Nine with Eight-wing in its most vulnerable form: a lifelong
        depression, followed by a progressive dementia, both almost entirely hidden behind a
        warm, comedic façade. The elephant that carried its burden to the end, without ever
        setting it down in public.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-margaret-rutherford", label:"Portrait: Margaret Rutherford (SE9w8) – life's work"},
        {route:"krankheitsportraets-david-hume", label:"Illness Portrait: David Hume (SE9w8) – same subtype"},
        {route:"krankheitsportraets-johannes-brahms", label:"Illness Portrait: Johannes Brahms (SE9w8) – same subtype"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Illness Portrait: Hans-Dietrich Genscher (SE9w8) – same subtype"},
        {route:"krankheitsportraets-charles-laughton", label:"Illness Portrait: Charles Laughton (SP9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se9", label:"Subtype Profile SE9"},
      ])}
    </div>
  `);
}

export function galarrwuyYunupinguKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-galarrwuy-yunupingu-portrait.jpg" alt="Galarrwuy Yunupingu" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Galarrwuy Yunupingu</p>
        <p class="krim-portrait-typ">SE8w9 · Self-Preservation Type 8 with a Nine Wing · 1948–2023</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Orangutan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Animal correspondence: Orangutan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Galarrwuy Yunupingu</strong> already has a portrait under
        <a href="javascript:void(0)" data-route="beruehmte-galarrwuy-yunupingu">Famous Personalities</a>
        in this compass – that page covers his life's work as a land rights leader for the Yolngu.
        This page follows a thread that page only briefly mentions: decades of progressive kidney
        disease that repeatedly forced him away from his own land for months at a time – for
        precisely the man whose life's work was the right of all Yolngu to remain on their own land.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type Assignment:</strong>
        <strong>Yunupingu</strong> is assigned to the <strong>Self-Preservation Type 8 with a Nine
        Wing</strong>. The SP8 invests its strength in the uncompromising securing of its own
        territory; the Nine-wing adds patience and the ability to hold on to a task for decades
        without dramatizing it publicly. This same combination shaped how he dealt with his own,
        increasingly serious illness: not through open withdrawal, but through the quiet
        continuation of his leadership role for as long as his body allowed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. Early Signs</h3>
        <p class="vb-intro"><strong>a) Progressive kidney disease:</strong>
        Over the years, Yunupingu's kidney function deteriorated – a disease that occurs at a far
        higher than average rate among Aboriginal Australians from remote communities in the
        Northern Territory, and that regularly requires lifelong dialysis or a kidney transplant.</p>
        <p class="vb-intro"><strong>b) Public collapse in 2010:</strong>
        Already in January 2010, Yunupingu collapsed in a bank in Nhulunbuy and had to be taken to
        hospital – an early, publicly visible sign of his deteriorating health.</p>
        <p class="vb-intro"><strong>c) Kidney transplant in late 2016:</strong>
        In late 2016, Yunupingu underwent a kidney transplant – a procedure that forced him away
        from his homeland in Arnhem Land for an extended period, to Darwin, where the necessary
        medical care was available.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Leg amputation in July 2017:</strong>
        Only months after the transplant, Yunupingu had to undergo a below-the-knee amputation –
        one of the feared vascular complications that can arise from long-standing, advanced
        kidney disease.</p>
        <p class="vb-intro"><strong>b) Recurring treatment stays in Darwin:</strong>
        In the years that followed, Yunupingu repeatedly spent extended periods in Darwin for
        medical treatment – far from the land whose legal protection he had fought for his entire
        adult life.</p>
        <p class="vb-intro"><strong>c) A pattern within the family:</strong>
        His younger brother Dr. M. Yunupingu (Mandawuy, frontman of Yothu Yindi) had already died
        of the same disease in 2013 at age 56 – a loss that painfully underscored the severity and
        family dimension of kidney disease within the Yolngu community.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Continuing his leadership role despite serious illness:</strong>
        Despite the transplant and amputation, Yunupingu did not withdraw from public life, but
        remained engaged in political debates over land rights and constitutional questions well
        into his final years.</p>
        <p class="vb-intro"><strong>b) A structural health problem, not an individual fate:</strong>
        At the time of his illness, around 700 people in the Northern Territory were living with
        end-stage kidney disease, and roughly 20,000 nationwide – doctors and health experts
        repeatedly used Yunupingu's case to draw attention to inadequate dialysis provision in
        remote parts of Australia.</p>
        <p class="vb-intro"><strong>c) Death after a long illness in 2023:</strong>
        Galarrwuy Yunupingu died on 3 April 2023 at age 74 after a long illness – on his own land,
        as his family explicitly emphasized in their statement: "He was born on our land, he lived
        all his life on our land, and he died on our land."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A land rights legacy that outlasted the illness:</strong>
        Despite years of health setbacks, Yunupingu's historical significance as the architect of
        the modern Australian land rights movement remained undiminished – his illness did not
        diminish his political legacy.</p>
        <p class="vb-intro"><strong>b) A publicly visible care problem:</strong>
        His case, together with the 2017 death of his nephew, the musician Dr. G. Yunupingu
        (Gurrumul, 1971–2017), from similarly kidney-related complications at just 46, contributed
        to political pressure to improve medical care – especially dialysis provision – in remote
        parts of Australia.</p>
        <p class="vb-intro"><strong>c) A return to his own land at the end of life:</strong>
        That Yunupingu, unlike many others with the same illness, was able to die on his own land
        was honored by his family as an achievement in its own right, deliberately highlighted – a
        final echo of his lifelong struggle.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The amputation as a forced limit for a man of the territory:</strong>
        For a Self-Preservation Eight whose entire sense of self rested on physical presence and
        the ability to move through his own land, losing a leg struck an especially sensitive point
        – the physical ability to literally traverse his own territory was curtailed, while the will
        to defend it remained unchanged.</p>
        <p class="vb-intro"><strong>b) The Nine-wing and working on regardless:</strong>
        The Nine-wing's typical ability to carry a task forward patiently over decades without
        dramatizing it also showed up in the illness itself: no public complaint, but a quiet
        continuation of work for as long as it was in any way possible.</p>
        <p class="vb-intro"><strong>c) Remote treatment as an inversion of his life's theme:</strong>
        That precisely the man who devoted his life to defending the right to remain on one's own
        land was himself repeatedly forced to leave his land for his own treatment is one of the
        bitterest ironies of his biography.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) An orangutan that did not give up its territory despite loss:</strong>
        Yunupingu's entire life's work rested on the unwavering defense of land and community – his
        own illness threatened precisely the physical basis of that presence, while the will to
        defend the territory persisted to the end.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-helmut-kohl">Helmut Kohl</a>
        (also SE8w9) held on to control over his immediate circle after his severe fall in 2008
        despite near-total physical decline, even if from the background; Yunupingu went a step
        further and remained actively engaged in his political role even after transplant and leg
        amputation, rather than withdrawing. Both cases show the same SE8w9 pattern: the Eight with
        a Nine-wing does not lightly give up responsibility for its own territory, even in the face
        of severe physical limitation. More on this in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-helmut-kohl">illness portrait of Helmut Kohl</a>.</p>
        <p class="vb-intro"><strong>c) Why the legs, of all things?</strong>
        For a Self-Preservation Eight whose entire life's task consisted of literally traversing,
        defending, and remaining on his own land, one interpretation suggests itself: precisely that
        physical capacity, the bodily connection to his own territory, became the site of
        limitation. This reading is a plausible interpretation, not a documented historical causal
        link, and will be developed further in this compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean that the Self-Preservation Eight's pattern inevitably leads to kidney
        disease with amputation – <strong>anyone can suffer any illness, regardless of subtype</strong>,
        and kidney disease in remote Indigenous communities in Australia has primarily structural,
        health-policy causes. What Yunupingu's case can show is a pattern in how a pronounced
        Self-Preservation Eight with a Nine-wing deals with progressive loss of control over their
        own body – one of many possible interpretations, not a judgment. The corresponding illness
        pattern will be developed further, case by case, in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Yunupingu did not know his own Enneagram pattern – the Self-Preservation Eight with a Nine
        wing reflexively holds on to responsibility for its own territory, rather than putting its
        own physical crisis before that responsibility in time. This exact pattern shaped how he
        dealt with his own illness: continuing to work, negotiate, and remain present rather than
        devoting himself fully to his own treatment early on – not out of clinical denial, but
        because responsibility for land and community was anchored more deeply in his inner pattern
        than concern for his own body.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Eight with a Nine-wing explains much of the course of
        <strong>Galarrwuy Yunupingu's</strong> final years: a man whose entire life's work rested on
        the physical and legal defense of his land lost, through kidney disease and amputation, part
        of his own bodily connection to that land – and yet kept fighting to the end, until he could
        finally die in the very place he had stood for his whole life. The orangutan that did not
        give up its territory even in its own physical decline.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-galarrwuy-yunupingu", label:"Portrait: Galarrwuy Yunupingu (SE8w9) – land rights leader"},
        {route:"krankheitsportraets-helmut-kohl", label:"Illness Portrait: Helmut Kohl (SE8w9) – the same pattern, control despite physical decline"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se8", label:"Subtype Profile SE8"},
      ])}
    </div>
  `);
}

export function virginiaWoolfKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-virginia-woolf-portrait.jpg" alt="Virginia Woolf" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Virginia Woolf</p>
        <p class="krim-portrait-typ">SE4w5 · Self-Preservation Type 4 with Five-Wing · 1882–1941</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Virginia Woolf</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-virginia-woolf">Famous
        Personalities portrait</a> – that page covers her literary work and her
        stream-of-consciousness technique. This page looks more closely at a chapter only
        briefly outlined there: decades of recurring severe depressive episodes that ended in
        her suicide in 1941.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Woolf</strong> is assigned to the <strong>self-preservation Type 4 with
        Five-Wing</strong>. The SE4 endures its suffering stoically, without putting it on
        public display; the Five-Wing gives it the ability to analytically penetrate its own
        pain and translate it into a well-thought-out system. Exactly this combination –
        silently enduring the illness, working with clockwork discipline between crises, and
        preparing even the final step in clear, deliberate prose – shaped the entire course of
        her psychological illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A first breakdown after her mother's death:</strong>
        At thirteen, Woolf suffered her first severe psychological breakdown after the death
        of her mother, Julia, in 1895.</p>
        <p class="vb-intro"><strong>b) A second breakdown after her father's death:</strong>
        In 1904, at twenty-two, a second, even more severe breakdown followed the death of her
        father, Leslie Stephen, and included a first suicide attempt.</p>
        <p class="vb-intro"><strong>c) Childhood trauma as a possible trigger:</strong>
        In letters, Woolf later suggested that sexual abuse by her two half-brothers in
        childhood was among the deeper causes of her psychological illness – a trauma she
        only processed late and only fragmentarily in her writing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Recurring severe depressive episodes across decades:</strong>
        Woolf's entire adult life was accompanied by recurring, at times months-long
        depressive episodes that temporarily made any writing impossible.</p>
        <p class="vb-intro"><strong>b) Disciplined work between crises:</strong>
        In the periods in between, Woolf wrote with almost businesslike reliability every
        morning at a specially built standing desk in her garden cottage at Monk's House.</p>
        <p class="vb-intro"><strong>c) Close medical and family oversight:</strong>
        Her husband, Leonard Woolf, organized close monitoring over the years, regulating rest
        periods, diet, and working hours in an effort to prevent further breakdowns.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Two carefully composed farewell letters:</strong>
        On March 28, 1941, following a rapidly worsening depressive episode during the German
        air raids on Britain, Woolf wrote two farewell letters – one to her husband Leonard,
        one to her sister Vanessa Bell.</p>
        <p class="vb-intro"><strong>b) Clear, matter-of-fact language rather than impulsiveness:</strong>
        Both letters are written in calm, almost matter-of-fact prose, in which she explained
        that she felt the illness taking hold of her again and that this time she would not
        recover.</p>
        <p class="vb-intro"><strong>c) Death in the River Ouse:</strong>
        She filled her coat pockets with stones and walked into the River Ouse near her home
        in Sussex – a deliberate, prepared act, not an impulsive outburst.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A literary body of work despite the illness, not thanks to romanticizing it:</strong>
        Woolf's most significant novels emerged during periods of relative stability between
        crises, not during the acute depressive episodes themselves.</p>
        <p class="vb-intro"><strong>b) Later public awareness of mental illness:</strong>
        Her death and her posthumously published diaries contributed significantly to
        establishing severe depression as a serious illness rather than a mere character flaw
        in public perception.</p>
        <p class="vb-intro"><strong>c) A later debate over a possible bipolar disorder:</strong>
        Later psychiatric readings of her biography discuss whether Woolf's illness –
        alternating phases of extreme productivity and deep exhaustion – showed features of a
        bipolar disorder, though no such diagnosis was made during her lifetime.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Quiet endurance instead of public complaint:</strong>
        The SE4's characteristic stance – enduring one's own suffering stoically without
        putting it on public display – showed in Woolf in that she processed her illness
        almost exclusively in diaries and private letters, not in direct public disclosures.</p>
        <p class="vb-intro"><strong>b) The Five-Wing and the systematizing of her own suffering:</strong>
        The same analytical distance that produced Woolf's stream-of-consciousness technique
        also showed in how she handled her own illness: a deliberate, almost
        scientifically observant self-description in diaries rather than spontaneous
        emotional discharge.</p>
        <p class="vb-intro"><strong>c) Deliberate form to the very last act:</strong>
        Even her suicide bore the hallmark of the SE4w5: not an impulsive outburst, but a
        deliberately chosen decision prepared in clear prose.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A mind of ordered clarity that its own illness made erratic:</strong>
        Woolf's entire literary work rested on precise, deliberate control over language and
        form. Of all things, her own mind – the instrument of that control – repeatedly became
        the place where that order collapsed.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows in
        <a href="javascript:void(0)" data-route="krankheitsportraets-vincent-van-gogh">Vincent
        van Gogh (SE4w5)</a>: in his case too, recurring severe psychological crises shaped his
        late work, and his life also ended through a self-inflicted injury. Both SE4w5s show
        the same pattern: between crises, great suffering gives rise to an extraordinarily
        deliberate artistic system, until in the end the illness overwhelms the
        self-imposed discipline.</p>
        <p class="vb-intro"><strong>c) When the Four under chronic stress moves toward the Two:</strong>
        Her final letter to Leonard is notably shaped less by her own distress than by concern
        for his well-being: she wrote that she could not go on burdening his life, that
        without her he could work, and that she owed all the happiness of her life to him.
        Someone living under chronic psychological strain for years increasingly moves along
        their stress line toward their stress point – for the Four, that is the Two. This
        outward-, rather than inward-, directed care in her final, most existential hour
        recalls the self-sacrifice of the stress point, not the otherwise strongly
        inward-directed introspection of the core type – with the core type unchanged at
        SE4w5.</p>
        <p class="vb-intro"><strong>d) Why her own mind, of all things?</strong>
        For a self-preservation Four whose entire body of work rested on precise control over
        her own perception and language, one interpretation suggests itself: of all things,
        the very organ that enabled this control – her own mind – repeatedly became the place
        where control was lost most completely. This interpretation is a plausible reading,
        not a documented clinical causal link, and will be developed further in this
        Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the self-preservation Four's pattern inevitably leads to
        severe depressive illness – <strong>any person can develop any illness, regardless of
        subtype.</strong> What Woolf's case shows is a pattern in how chronic psychological
        illness is handled, one that recurs again and again in a pronounced self-preservation
        Four with a Five-Wing – one of many possible readings, not a verdict. The
        corresponding illness will be developed further, over time, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        Woolf did not know her own pattern as an Enneagram structure – the self-preservation
        Four with a Five-Wing reflexively holds onto silent endurance and analytical
        processing of its own suffering instead of seeking more direct help earlier, and lived
        out exactly this pattern unchanged until her death. Anyone who does not recognize
        their own tendency to manage psychological suffering solely through disciplined work
        and quiet introspection risks letting their own illness escalate untreated, because it
        remains barely visible from outside.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 4 with Five-Wing explains much about the course of
        <strong>Virginia Woolf's</strong> psychological illness: a writer whose entire body of
        work rested on translating suffering into deliberate literary form endured her illness
        quietly and with discipline for decades, until she prepared even her final step once
        more with the same clear, deliberate prose with which she had written her whole life.
        The dove that, to the very end, gave its suffering a deliberately chosen, precise
        form.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-virginia-woolf", label:"Portrait: Virginia Woolf (SE4w5) – life's work"},
        {route:"krankheitsportraets-vincent-van-gogh", label:"Illness Portrait: Vincent van Gogh (SE4w5) – same subtype"},
        {route:"krankheitsportraets-connie-chiu", label:"Illness Portrait: Connie Chiu (SE4w5) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function arnoldSchwarzeneggerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-arnold-schwarzenegger-portrait.jpg" alt="Arnold Schwarzenegger" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arnold Schwarzenegger</p>
        <p class="krim-portrait-typ">SP1w2 &middot; Self-Preservation Type 1 with Two-Wing &middot; b. 1947</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Arnold Schwarzenegger</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-arnold-schwarzenegger">Famous
        Personalities portrait</a> in this compass – that page covers his life's work as a
        bodybuilder, actor, and politician. This page focuses on an aspect only briefly
        mentioned there: a congenital heart valve defect that has accompanied him since 1997
        and has so far required three open-heart surgeries (1997, 2018, 2020) and a pacemaker
        in 2024.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schwarzenegger</strong> is assigned to the <strong>self-preservation Type 1
        with a Two-wing</strong>. The SP1 directs its perfectionism at its own physical
        discipline and control; the Two-wing gives it the ability to combine this control with
        an outward-facing, encouraging care for others. Exactly this combination – the own body
        as a perfectly controllable project, combined with a later drive to encourage others
        from one's own experience – shaped the decades-long handling of his heart condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis of a congenital heart valve defect:</strong>
        Schwarzenegger was born with a bicuspid aortic valve – a congenital heart defect in
        which the aortic valve has only two flaps instead of the usual three, which can become
        increasingly leaky or narrowed over the course of a lifetime.</p>
        <p class="vb-intro"><strong>b) Decades of training despite the underlying condition:</strong>
        Throughout all the years of his bodybuilding career, in which he shaped his body to
        physical perfection with extreme discipline, he already carried a structural defect in
        exactly the organ that made this performance possible in the first place.</p>
        <p class="vb-intro"><strong>c) First surgery in 1997:</strong>
        On April 16, 1997, he underwent a planned operation to replace the defective aortic
        valve – a condition the studios required for insurance reasons ahead of ›Batman &
        Robin‹, which he completed before filming began rather than delaying it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Deliberate choice of a tissue valve over a mechanical one:</strong>
        During the 1997 surgery, Schwarzenegger opted against a more durable mechanical heart
        valve in favor of a biological tissue valve – with the explicit reasoning that a
        mechanical valve might limit his physical capacity and training.</p>
        <p class="vb-intro"><strong>b) Twelve surgeons instead of the usual four:</strong>
        He later said of the operation itself: "Normally they have four heart surgeons in
        surgery. I had twelve" – a statement that speaks less of fear than of an almost proud
        precision in dealing with his own body.</p>
        <p class="vb-intro"><strong>c) Emergency surgery in 2018 after a failed minimally invasive procedure:</strong>
        In 2018, a gentler catheter procedure to replace the pulmonary valve was initially
        planned – the original 1997 valve replacement had outlived its expected lifespan. When
        complications arose, open emergency surgery became unavoidable.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Third surgery in 2020 at Cleveland Clinic:</strong>
        In 2020, another aortic valve replacement followed. Schwarzenegger commented on the
        procedure publicly, briefly and matter-of-factly: "Thanks to the team at Cleveland
        Clinic, I have a new aortic valve to go along with my new pulmonary valve."</p>
        <p class="vb-intro"><strong>b) Pacemaker in 2024 due to scar tissue:</strong>
        In 2024, he needed a pacemaker fitted because of an irregular heartbeat caused by scar
        tissue from the three previous surgeries.</p>
        <p class="vb-intro"><strong>c) "A little more of a machine":</strong>
        He put his own comment on the pacemaker in a sentence that directly picks up on his
        decades-long public identity as the "Terminator": "I had surgery for a pacemaker and
        became a little bit more of a machine."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) None of the three surgeries prevented his return to public life:</strong>
        After each of the three surgeries – 1997, 2018, 2020 – Schwarzenegger returned to his
        usual public and professional life within a short time, without withdrawing for any
        extended period.</p>
        <p class="vb-intro"><strong>b) Open communication instead of silence:</strong>
        Unlike many celebrities in comparable situations, he did not keep the individual
        procedures secret, but commented on each of them publicly, usually shortly after the
        respective hospital stay.</p>
        <p class="vb-intro"><strong>c) A public appeal in 2024 rather than a mere health announcement:</strong>
        He directly linked the announcement of his pacemaker to an appeal to his audience: "If
        you're putting something off out of fear, I hope I inspire you to listen to your
        doctors and take care of yourself."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Control down to the choice of valve material:</strong>
        The SP1-typical concern for one's own integrity showed up not only in how he handled
        the diagnosis, but already in the detail-level decision of 1997: even in a
        life-critical operation, his own physical performance capacity was the center of the
        consideration, not the longer durability of the valve.</p>
        <p class="vb-intro"><strong>b) From one's own need for control to caring for others (Two-wing):</strong>
        The Two-wing shows up in how Schwarzenegger did not keep his own decades-long
        experience with the illness to himself in 2024, but deliberately translated it into a
        public encouragement for others who delay treatment out of fear.</p>
        <p class="vb-intro"><strong>c) Self-irony instead of denial:</strong>
        The line "a little more of a machine" processes his own vulnerability with exactly
        that dry, controlled self-irony typical of an SP1 who does not repress weakness, but
        translates it into a self-chosen, disciplined language.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A body that became a life's work – with a structural defect at its center:</strong>
        Schwarzenegger's entire public identity rested on the idea of a perfectly
        controllable body. Of all things, the organ that kept this control alive in the most
        literal sense – the heart – carried a defect from birth that no training could fix.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows up in
        <a href="javascript:void(0)" data-route="krankheitsportraets-alain-delon">Alain Delon
        (SP1w2)</a>: in him too, the question of control over one's own body stood at the
        center in the end – in Delon's case after a stroke and a leukemia diagnosis, the
        publicly discussed demand for a self-determined end of life. In both SP1w2s the same
        underlying pattern shows up: control over one's own body is never handed over to fate
        or to others, but claimed actively to the very end – in Schwarzenegger's case through
        the choice of surgical method and valve material, in Delon's case through the demand
        for his own final decision.</p>
        <p class="vb-intro"><strong>c) Thirty years of always choosing the least restrictive path:</strong>
        A consistent pattern runs through three decades: in 1997, the tissue valve instead of
        the mechanical one, to preserve his own physical capacity; in 2018, initially the
        gentler catheter procedure instead of open surgery. Only when the less invasive option
        reached its limit did he accept the larger intervention – never the other way around.</p>
        <p class="vb-intro"><strong>d) Why the heart, of all organs?</strong>
        For a self-preservation One whose entire life's work rested on the physical
        controllability of his own body, one interpretation suggests itself: of all things, the
        organ that determines physical performance capacity and submits to no training became
        the place where it became clear that not every physical limit can be shifted through
        discipline. This interpretation is a plausible reading, not a proven clinical causal
        link, and will be developed further in this compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Classification without determinism:</strong>
        This does not mean that the self-preservation One's pattern inevitably leads to heart
        valve defects – <strong>anyone can develop any illness, regardless of subtype.</strong>
        The bicuspid aortic valve is, moreover, a congenital, purely anatomical finding with no
        psychosomatic origin. What Schwarzenegger's case can show is a pattern in how a serious
        physical diagnosis is <em>handled</em>, one that keeps recurring in a pronounced
        self-preservation One with a Two-wing – one of many possible readings, not a verdict.
        The corresponding illness pattern is being developed step by step in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as a factor of its own:</strong>
        Schwarzenegger probably does not know his own pattern as an Enneagram structure – the
        self-preservation One reflexively holds on to its own control over procedure and
        decision, even where an earlier, more comprehensive treatment might have been
        conceivable, and lives out exactly this pattern unchanged for decades. Anyone who does
        not recognize their own tendency to make even existential medical decisions solely by
        the standard of their own control and performance capacity risks that tendency
        repeatedly hitting its own limits, as happened to him in 2018 in the form of emergency
        surgery.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 1 with a Two-wing explains much about how <strong>Arnold
        Schwarzenegger</strong> handled his own decades-long heart condition: a man whose
        entire life's work rested on mastery of his own body consistently chose, at every one
        of the three surgeries, to preserve the greatest possible control for himself – and in
        the end translated that experience into a public encouragement for others not to refuse
        their own treatment out of fear. The eagle who, even with a machine in his own heart,
        knew exactly how he wanted to keep flying.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-arnold-schwarzenegger", label:"Portrait: Arnold Schwarzenegger (SP1w2) – life's work"},
        {route:"krankheitsportraets-alain-delon", label:"Illness Portrait: Alain Delon (SP1w2) – same subtype"},
        {route:"krankheitsportraets-phil-collins", label:"Illness Portrait: Phil Collins (SP1w9) – same core type, different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SP1"},
      ])}
    </div>
  `);
}
