import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function albertEinsteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-albert-einstein-portrait.jpg" alt="Albert Einstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Albert Einstein</p>
        <p class="krim-portrait-typ">SO5w4 · Social Type 5 with Four-wing · 1879–1955</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Albert Einstein</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-albert-einstein">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This portrait is devoted to a chapter barely present there: an abdominal aortic
        aneurysm known for over six and a half years and only palliatively stabilized, and his
        deliberate decision in 1955 against a further operation.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Einstein</strong> is classified as the <strong>Social Five with Four-wing</strong>.
        SO5 seeks security through knowledge and intellectual authority within a community of
        like minds, not through emotional closeness. The Four-wing adds a melancholic,
        existential depth – a closeness to the great questions of meaning, mortality, and
        significance. Exactly this combination of detached rationality and existential depth
        also shapes Einstein's handling of his own mortality.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A chance finding during an examination:</strong>
        In December 1948, Einstein consulted thoracic surgeon Dr. Rudolph Nissen for
        recurring abdominal pain; during an exploratory operation (a surgical procedure to
        determine the cause, without knowing beforehand what it would find), Nissen
        discovered a large abdominal aortic aneurysm (a bulge in the main artery that can
        rupture at any time).</p>
        <p class="vb-intro"><strong>b) A stopgap instead of a cure:</strong>
        Since aortic grafts did not yet exist at the time, Nissen wrapped the aneurysm in
        cellophane – a foreign-body reaction was meant to thicken the aortic wall with fibrous
        tissue and stabilize it temporarily. This was not a true cure.</p>
        <p class="vb-intro"><strong>c) A knowledge that barely changed his daily life:</strong>
        In the following years, Einstein visibly kept working undiminished – little is
        documented about a conscious daily approach to the risk, which fits the SO5-typical
        separation of knowledge from emotional processing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Six and a half years with a known time bomb:</strong>
        From the diagnosis in December 1948 to his death in April 1955, Einstein lived with an
        aneurysm that could rupture at any time – palliatively stabilized but never curatively
        treated.</p>
        <p class="vb-intro"><strong>b) An acute collapse in April 1955:</strong>
        On April 12, 1955, Einstein again suffered abdominal pain; Dr. Frank Glenn, chief
        surgeon at New York Hospital, diagnosed a leaking aneurysm and recommended a
        resection – then a new, risky surgical technique.</p>
        <p class="vb-intro"><strong>c) A deliberate refusal of the operation:</strong>
        Einstein declined the procedure. As it has been passed down: "I want to go when I
        want. It is tasteless to prolong life artificially. I have done my share, it is time
        to go. I will do it elegantly."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) An unfinished speech beside the hospital bed:</strong>
        At Princeton Hospital, Einstein had with him an unfinished draft of a televised speech
        for the seventh anniversary of the State of Israel – work he did not abandon until the
        very end.</p>
        <p class="vb-intro"><strong>b) Equations until his final night:</strong>
        After his death, nursing staff found nine pages of handwritten notes with equations
        for a unified field theory, written in pencil on yellow paper – his last, never
        completed scientific search.</p>
        <p class="vb-intro"><strong>c) No farewell, no grand gesture:</strong>
        Einstein did not prepare for his death with speeches to loved ones, but kept working
        as if nothing were different from usual – typical for SO5: retreat into the subject
        matter rather than into emotion.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on April 18, 1955:</strong>
        Einstein died at Princeton Hospital of internal bleeding from the ruptured aneurysm,
        at the age of 76.</p>
        <p class="vb-intro"><strong>b) A decision still discussed today:</strong>
        The refusal of the operation is still considered one of the best-known examples in the
        history of science of a deliberate, self-determined stance toward one's own end of
        life.</p>
        <p class="vb-intro"><strong>c) An afterlife he could not control:</strong>
        Pathologist Thomas Harvey removed Einstein's brain during the autopsy without the
        family's permission, hoping later neuroscience could explain his intelligence from
        it – a controversy that still resonates today.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Control through knowledge rather than action:</strong>
        The SO5-typical strategy of gaining security through understanding rather than
        intervening showed itself to the end: Einstein soberly analyzed his situation and made
        an informed decision instead of surrendering to the medical system.</p>
        <p class="vb-intro"><strong>b) Retreat into work rather than into fear:</strong>
        Instead of processing mortality emotionally, he immersed himself in equations and
        texts until his last conscious moment – the familiar refuge in the subject matter.</p>
        <p class="vb-intro"><strong>c) The octopus that chose its own ink:</strong>
        Where others would have left themselves to chance or medical intervention, Einstein
        kept the final say over his own death until the end – one last form of autonomy.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A life of detached observation:</strong>
        Long before the diagnosis, Einstein was known for his ability to view even the
        greatest human upheavals – two world wars, emigration, public fame – with remarkable
        inner distance.</p>
        <p class="vb-intro"><strong>b) A threat known for years, but never repressed:</strong>
        From the 1948 diagnosis to his death in 1955 runs a continuous line of knowledge about
        his own mortality that was neither concealed nor dramatized – it was simply
        acknowledged.</p>
        <p class="vb-intro"><strong>c) A final year like any other:</strong>
        Until the acute collapse in April 1955, his daily life outwardly hardly differed from
        the years before – work, correspondence, research, with no visible dramatization of
        his own situation.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the aorta?</strong>
        For a Social Five with Four-wing whose security comes from rational distance and
        intellectual control, one reading suggests itself: precisely the vessel that supplies
        the entire organism with life, and whose failure gives no warning, became the site of
        a threat that eluded control – while Einstein responded to exactly that with the only
        form of control he had left: the deliberate decision not to fight it. This reading is
        a plausible interpretation, not a documented historical causal link, and is explored
        in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Social Five's pattern inevitably leads to vascular disease –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Einstein's case can show is a pattern that stands out again and again in practice
        wherever the need exists to process existential threat through rational distance
        rather than emotional coping – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Einstein did not know his own pattern – the social Five with Four-wing prefers to determine its own terms rather than submit to outside control, and that is exactly what showed in his conscious refusal of another operation. Someone who does not recognize their own need for autonomy easily mistakes it for pure reason, even though their own fixation also plays a part.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Einstein's</strong> final years, the Social Five with Four-wing reveals
        itself once more with full clarity: a threat known for years, never repressed, a
        sober, informed decision against intervention, and work on the great questions of the
        universe that did not end until his final night. The octopus that chose its own ink –
        and who, even while dying, kept searching for the one formula that would explain
        everything.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-albert-einstein", label:"Portrait: Albert Einstein (SO5w4) – life's work"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Illness Portrait: Leonardo da Vinci (SO5w4) – the same pattern of unrestrained creation"},
        {route:"krankheitsportraets-stephen-hawking", label:"Illness Portrait: Stephen Hawking (SO5w6) – the same pattern of unabated work to the end"},
        {route:"krankheitsportraets-hannah-arendt", label:"Illness Portrait: Hannah Arendt (SO5w4) – the same pattern: warning acknowledged, not followed"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function bernieMadoffKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/bernie-madoff-portrait.jpg" alt="Bernie Madoff" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bernie Madoff</p>
        <p class="krim-portrait-typ">SP3w4 · Self-Preservation Type 3 with Four-wing · 1938–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Bernie Madoff</strong> already has a
        <a href="javascript:void(0)" data-route="kriminalpsychologie-bernie-madoff">criminal-psychology portrait</a>
        in this Compass – that page covers the largest Ponzi scheme in history and his type
        structure as a quiet, unassuming fraudster. This page delves into a chapter only
        briefly mentioned there: an incurable kidney disease in prison, repeatedly denied
        requests for early release, and a death in 2021 in federal custody.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Madoff</strong> is classified as the <strong>Self-Preservation Type 3 with
        Four-wing</strong> – the countertype of the Three, who presents not loudly and
        glamorously but quietly, seriously, and trustworthily. The Four-wing lends a feel for
        the special and the exclusive circle. This same quiet, controlled presentation carried
        through into how he handled his own fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Chronic health problems during imprisonment:</strong>
        In the years after his 2009 conviction, Madoff developed progressive kidney disease in
        prison, along with hypertension and cardiovascular problems.</p>
        <p class="vb-intro"><strong>b) Diagnosis of end-stage kidney disease:</strong>
        Doctors eventually diagnosed end-stage renal failure – a condition that would prove
        fatal without regular dialysis and ultimately a transplant.</p>
        <p class="vb-intro"><strong>c) Progressive decline without public drama:</strong>
        As during his fraud, little emerged over the years about his physical condition –
        even ill, Madoff remained a man without a stage.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Multiple requests for early release:</strong>
        Madoff's lawyers repeatedly filed for so-called "compassionate release" – early release
        from prison on health grounds – citing his incurable kidney disease.</p>
        <p class="vb-intro"><strong>b) A medical prognosis of under 18 months to live:</strong>
        In connection with one of these requests in 2020, doctors gave him a life expectancy of
        less than 18 months.</p>
        <p class="vb-intro"><strong>c) Denial of all release requests:</strong>
        The presiding court denied the petitions for early release – Madoff was to serve his
        sentence, as originally handed down, until death in custody.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Dialysis treatments in the prison hospital:</strong>
        In his final years, Madoff depended on regular dialysis treatments, carried out at the
        medical facility of the Federal Correctional Complex in Butner.</p>
        <p class="vb-intro"><strong>b) A handful of late interviews with a mixed tone:</strong>
        In his final years, Madoff gave a few interviews in which he expressed some regret
        while continuing, at other points, to downplay his own role.</p>
        <p class="vb-intro"><strong>c) Death on 14 April 2021 in Butner, North Carolina:</strong>
        Bernie Madoff died at age 82 at the Federal Correctional Complex in Butner – just over
        twelve years after his arrest.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">A Parallel Within the Same Subtype: Osho</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <a href="javascript:void(0)" data-route="beruehmte-osho">Osho</a> (SP3w4) likewise
        suffered for decades from chronic, never fully clarified complaints, without ever truly
        disclosing them. His own
        <a href="javascript:void(0)" data-route="krankheitsportraets-osho">illness portrait</a>
        shows the same SP3w4 pattern as Madoff: one's own physical reality is treated with the
        same control and discretion as one's public image – to the end, interpretive authority
        over the story stays with the person concerned, not with a public granted insight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death that drew little public sympathy:</strong>
        As with other cases in this section, the public reacted to Madoff's death mostly with
        sobriety or detachment – memory of his fraud's victims outweighed any sympathy for his
        suffering.</p>
        <p class="vb-intro"><strong>b) A final request that became a symbol:</strong>
        The denial of his request for early release was also widely read as a signal that no
        leniency should apply to the largest financial crimes in history.</p>
        <p class="vb-intro"><strong>c) An end without the nest he once built:</strong>
        The man who staged security and trust for decades died without family at his side –
        both his sons were already dead by that point.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The raccoon that left no trace even in his sickbed:</strong>
        The same ability to stay unnoticed for decades also determined how little became
        publicly known about his health.</p>
        <p class="vb-intro"><strong>b) Control over his own narrative to the end:</strong>
        Even the few interviews from his final years read less like spontaneous confessions
        than like another carefully chosen performance.</p>
        <p class="vb-intro"><strong>c) No public collapse of the facade:</strong>
        Unlike some other illness courses in this Compass, there are no reports of a visible
        breakdown in Madoff's controlled demeanor – the mask, as far as is known, stayed in
        place to the end.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A body that ultimately became the controlled nest itself:</strong>
        Madoff's entire life was shaped by the attempt to stage and shield security and
        stability – in prison, that same controlling stance was forced onto a body that could
        no longer be medically stabilized.</p>
        <p class="vb-intro"><strong>b) Discretion even in his own vulnerability:</strong>
        Just as Madoff ran his fraud for decades without drawing attention, little more about
        his illness reached the public than what was medically necessary for the court
        proceedings over his release.</p>
        <p class="vb-intro"><strong>c) Why the kidneys, of all things?</strong>
        For a Self-Preservation Three with Four-wing whose entire life revolved around the
        question of what to let in and what to keep out, one interpretation suggests itself:
        precisely the organ responsible in the body for filtering and cleanly separating what
        is valuable from waste became the site of decline – in a man whose entire system rested
        on the bookkeeping separation of real and fabricated accounts. This interpretation is a
        plausible reading, not a documented historical causal link, and is developed further in
        this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean that the Self-Preservation Three pattern inevitably leads to kidney
        disease – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Madoff's case illustrates is a pattern in how a pronounced Self-Preservation Three
        with Four-wing handled his own mortality that keeps recurring in practice – one of many
        possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Madoff did not know his own pattern – the Self-Preservation Three with Four-wing
        reflexively protects its nest through control and discretion, even once the nest
        consists of nothing but facade, and he lived out exactly this pattern unchanged into
        his final years, never publicly developing another way of relating to his own
        vulnerability. Someone who does not recognize their own need for controlled security as
        a pattern cannot let it go even in their own dying.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Madoff's</strong> Self-Preservation Three with Four-wing is legible once more in
        the course of his illness: an illness that ran as discreetly as his decades-long fraud,
        a final plea for mercy that was denied, and a death without the family that had once
        been his nest. The raccoon that left no trace to the end – and whose own body was, in
        the end, the only place he could no longer control.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The type
        assignment is a psychological hypothesis, not a historical verdict. Madoff's crimes
        have been legally adjudicated – the Enneagram explains; it does not justify.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"kriminalpsychologie-bernie-madoff", label:"Criminal Psychology: Bernie Madoff (SP3w4) – largest investment fraud in history"},
        {route:"krankheitsportraets-osho", label:"Illness Portrait: Osho (SP3w4) – the same discretion over his own body"},
        {route:"krankheitsportraets-wim-thoelke", label:"Illness Portrait: Wim Thoelke (SP3w4) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se3", label:"Subtype Profile SP3"},
      ])}
    </div>
  `);
}

export function christiaanBarnardKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-christiaan-barnard-portrait.jpg" alt="Christiaan Barnard" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Christiaan Barnard</p>
        <p class="krim-portrait-typ">SO3w2 &middot; Social Type 3 with Two-wing &middot; 1922–2001</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Christiaan Barnard</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-christiaan-barnard">Famous
        Personality Portrait</a> in this Compass – that portrait focuses on the first
        successful heart transplant in history in 1967. This page explores a chapter
        only briefly flagged there: a rheumatoid arthritis dating back to 1956 that in 1983
        forced precisely his surgical hands to end his career.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Barnard</strong> is assigned to the <strong>Social Type 3 with
        Two-wing</strong>. The SO3 seeks recognition through outstanding, publicly
        visible achievement; the Two-wing adds warmth and the wish to shine in service of
        others. This exact combination – achievement as the basis of one's existence –
        determined how Barnard handled the gradual loss of his own surgical abilities.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosed during his US specialist training in 1956:</strong>
        Already during his postgraduate training in the United States, Barnard was
        diagnosed with rheumatoid arthritis – years before he became the world-famous
        heart surgeon.</p>
        <p class="vb-intro"><strong>b) Increasing involvement of the hands:</strong>
        Over the decades, the disease increasingly spread to the hands – the very tool
        with which Barnard made history in 1967.</p>
        <p class="vb-intro"><strong>c) Continued surgical activity despite the diagnosis:</strong>
        Despite the known condition, Barnard continued operating for decades, even after
        his world-famous first transplant.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Early end of his surgical career in 1983:</strong>
        Rheumatoid arthritis in his hands forced Barnard to step down as head of the
        Department of Cardiothoracic Surgery in Cape Town in 1983.</p>
        <p class="vb-intro"><strong>b) A shift into other roles:</strong>
        After ending his surgical work, Barnard helped establish a new transplant
        institute at the Baptist Medical Center in Oklahoma City.</p>
        <p class="vb-intro"><strong>c) Literary processing of his own illness:</strong>
        Barnard wrote, among other books, "Christiaan Barnard's Program for Living with
        Arthritis" – his own illness became the subject of his writing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Continued public presence after the end of his career:</strong>
        Even after 1983, Barnard remained an internationally known, sought-after figure –
        lectures, books, and media presence replaced his surgical work.</p>
        <p class="vb-intro"><strong>b) An extensive late writing career:</strong>
        In his final two decades, Barnard wrote a further autobiography ("The Second
        Life"), along with numerous novels and health books.</p>
        <p class="vb-intro"><strong>c) No public lament over the loss:</strong>
        By several accounts, Barnard rarely spoke publicly about the emotional loss that
        the end of his surgical career meant for him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A second public life after surgery:</strong>
        Barnard managed the transition from an active surgical career to an equally
        visible second career as an author and speaker.</p>
        <p class="vb-intro"><strong>b) Symbolic irony noted internationally:</strong>
        That the hands of the world's first heart transplant surgeon failed him was
        highlighted in numerous obituaries and biographies as a bitter twist of his
        life.</p>
        <p class="vb-intro"><strong>c) A legacy extending beyond surgery:</strong>
        Barnard's public image remained defined by competence and authority even after
        1983 – now in the field of writing rather than operating.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Achievement as a continued basis of existence:</strong>
        The same SO3 conviction that worth arises through visible achievement also
        determined Barnard's response to the forced end of his career – not withdrawal,
        but the rapid construction of a new, equally visible role.</p>
        <p class="vb-intro"><strong>b) The Two-wing and service to the patient in a new form:</strong>
        The Two-wing's warmth showed in Barnard now passing on his knowledge in books for
        patients with the same disease, rather than withdrawing completely.</p>
        <p class="vb-intro"><strong>c) No public processing of his own loss:</strong>
        The SO3-typical focus on the next visible goal may explain why Barnard rarely
        spoke publicly about the personal grief over his surgical career.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Hands that became the tool of fame, then of illness:</strong>
        Barnard's entire world fame rested on the precision of his hands – precisely
        these hands became, over decades, the site of a progressive illness, until they
        denied him the continuation of his life's work.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-xiv">Louis
        XIV</a> (also SO3w2) suffered from gout for decades without giving up his public
        role as the Sun King; Barnard responded to his own chronic illness with the same
        basic stance – the visible, public role was not abandoned but continued in a new
        form. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-ludwig-xiv">Illness Portrait of Louis XIV</a>.</p>
        <p class="vb-intro"><strong>c) Why the hands, of all things?</strong>
        For a Social Three with a Two-wing whose entire fame rested on the precision of
        his hands, one interpretation suggests itself: precisely the tool that brought
        him worldwide recognition became the site of the limitation. This
        interpretation is a plausible reading, not a documented clinical causal link, and
        will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Social Three's pattern inevitably leads to
        rheumatoid arthritis – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Barnard's case illustrates is a pattern in how a
        pronounced Social Three with a Two-wing tends to handle the loss of their own
        ability to perform – one of many possible interpretations, not a verdict. The
        corresponding illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Barnard did not know his own pattern – the Social Three with a Two-wing
        reflexively replaces a lost visible role with a new one instead of ever
        processing the loss publicly, and he lived out exactly this pattern unchanged
        until his death. Someone who does not recognize their own need to visibly
        achieve as a pattern cannot truly mourn the loss of their own abilities, only
        replace them.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Three with a Two-wing explains much about how <strong>Christiaan
        Barnard</strong> handled his own illness: a man whose world fame rested on the
        precision of his hands replaced the loss of those hands with a new visible role –
        the cheetah that can no longer run but learns to stay ahead in another way.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-christiaan-barnard", label:"Portrait: Christiaan Barnard (SO3w2)"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Illness Portrait: Louis XIV (SO3w2) – the same continued public role"},
        {route:"krankheitsportraets-dmitri-hvorostovsky", label:"Illness Portrait: Dmitri Hvorostovsky (SO3w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SO3"},
      ])}
    </div>
  `);
}

export function drewBarrymoreKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-drew-barrymore-portrait.jpg" alt="Drew Barrymore" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Drew Barrymore</p>
        <p class="krim-portrait-typ">SO7w8 &middot; Social Type 7 with Eight-wing &middot; b. 1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Drew Barrymore</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-drew-barrymore">Famous
        Personality Portrait</a> in this Compass. This page explores a chapter only
        touched on there: an addiction beginning already in childhood that led to her
        admission to a rehabilitation clinic in 1988 – at just 13 years old.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Barrymore</strong> is assigned to the <strong>Social Type 7 with
        Eight-wing</strong>. The SO7 sacrifices its own immediate enjoyment for a larger
        idea; the Eight-wing adds assertiveness and the ability to regain control over
        one's own life even out of deep crises. This exact combination – creating a new,
        publicly visible role out of an early crisis – determined how Barrymore handled
        her childhood addiction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Early exposure to alcohol and drugs in childhood:</strong>
        Barrymore, already a sought-after child star as a toddler, by her own accounts
        came into contact with alcohol, and later drug use, as early as elementary
        school age.</p>
        <p class="vb-intro"><strong>b) A rapidly escalating pattern of use:</strong>
        Her autobiography "Little Girl Lost" describes an addiction developing rapidly
        already before her teenage years.</p>
        <p class="vb-intro"><strong>c) Admission to a rehabilitation clinic in 1988:</strong>
        At age 13, Barrymore was admitted to a facility for addiction treatment – a
        publicly rare event for a child star of that era.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Public processing in her own book:</strong>
        Rather than concealing the childhood addiction, Barrymore processed it in her own
        autobiography as early as age 14.</p>
        <p class="vb-intro"><strong>b) Emancipation from her parents:</strong>
        In connection with this crisis, Barrymore was legally emancipated from her mother
        at age 14 – a further publicly documented milestone of this time.</p>
        <p class="vb-intro"><strong>c) Gradual rebuilding of her career:</strong>
        In the following years, Barrymore systematically rebuilt her acting career, up to
        her own production companies and later successes as a filmmaker.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Repeated public reflection on her own story:</strong>
        Even as an adult actress and later talk-show host, Barrymore repeatedly spoke
        openly about her childhood addiction.</p>
        <p class="vb-intro"><strong>b) Building a new public role as talk-show host:</strong>
        With her own daytime show, Barrymore created a new platform in which personal
        openness – including about her own past – became a central element.</p>
        <p class="vb-intro"><strong>c) No return to the earlier addictive dynamic:</strong>
        In public statements, Barrymore describes the overcome childhood addiction as a
        closed but formative chapter of her life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) One of Hollywood's best-known childhood addiction stories:</strong>
        Barrymore's early crisis is among the most extensively publicly documented
        addiction histories of a former child star.</p>
        <p class="vb-intro"><strong>b) A career trajectory without a lasting break:</strong>
        Despite the early crisis, Barrymore became one of the commercially most
        successful actresses and producers of her generation.</p>
        <p class="vb-intro"><strong>c) A public role as a voice for openness:</strong>
        Barrymore's willingness to speak openly about her own past has repeatedly been
        cited as an encouraging example for others affected.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Forward flight instead of standstill:</strong>
        The same SO7 energy that always seeks new possibilities rather than remaining in
        a crisis determined Barrymore's rapid transition from rehabilitation clinic back
        to an active, visible career.</p>
        <p class="vb-intro"><strong>b) The Eight-wing and reclaiming her own control:</strong>
        The Eight-wing's assertiveness showed in her legal emancipation from her parents
        at age 14 – an early, decisive act of self-determination.</p>
        <p class="vb-intro"><strong>c) Openness as a form of control over her own story:</strong>
        Rather than letting the childhood addiction be revealed by others, Barrymore told
        it herself first – a pattern running through her entire later public career.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A childhood confronted too early with adult risks:</strong>
        Barrymore's entire later career is shaped by the experience of having entered an
        adult environment as a child without sufficient protection – her own crisis
        became the starting point of a more conscious, self-determined further life.</p>
        <p class="vb-intro"><strong>b) Placing it without determinism:</strong>
        This does not mean that the Social Seven's pattern inevitably leads to addiction –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Barrymore's case illustrates is a pattern in how a pronounced Social Seven with
        an Eight-wing tends to handle an overcome childhood addiction – one of many
        possible interpretations, not a verdict. The corresponding illness picture is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) The unconscious fixation as its own factor:</strong>
        Barrymore does not know her own pattern as an Enneagram structure – the Social
        Seven with an Eight-wing reflexively turns an overcome crisis into new, visible
        forward motion instead of dwelling on it, and lives out exactly this pattern to
        this day. Someone who does not recognize their own tendency to immediately turn
        crises into new projects as a pattern sometimes skips a necessary moment of
        rest.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Seven with an Eight-wing explains much about how <strong>Drew
        Barrymore</strong> handled her own childhood addiction: a woman who told her own
        story herself already at 14, rather than letting it be told for her – the beaver
        that does not lament its collapsed dam but rebuilds it from the ground up.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-drew-barrymore", label:"Portrait: Drew Barrymore (SO7w8)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function fransDeWaalKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frans-de-waal-portrait.jpg" alt="Frans de Waal" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frans de Waal</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexual Type 7 with Six-wing &middot; 1948–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chimpanzee</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Animal correspondence: Chimpanzee" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frans de Waal</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-frans-de-waal">Famous
        Personality Portrait</a> in this Compass – that portrait focuses on his life's
        work as a primatologist. This page explores a chapter only mentioned briefly there: a
        stomach cancer diagnosed in August 2023, from which he died in March 2024, having
        continued working until just a few months before.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>de Waal</strong> is assigned to the <strong>Sexual Type 7 with
        Six-wing</strong>. The SX7 seeks intensity by constantly opening up new fields of
        experience; the Six-wing adds loyalty to one's own work and its surrounding
        community. This exact combination – unrestrained continued work right up to a
        hard, short deadline – determined how de Waal responded to his cancer
        diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis in August 2023:</strong>
        De Waal received a stomach cancer diagnosis in August 2023 – about seven months
        before his death.</p>
        <p class="vb-intro"><strong>b) Continued public appearances despite the diagnosis:</strong>
        In fall 2023, de Waal continued attending public events, including a conversation
        with Isabella Rossellini in New York.</p>
        <p class="vb-intro"><strong>c) Appearance at an international philosophy festival:</strong>
        In June 2023, de Waal spoke at the phil.COLOGNE philosophy festival in Germany –
        shortly before or immediately after the diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Confidence despite an unfavorable prognosis:</strong>
        As late as November 2023, de Waal reportedly spoke hopefully about his own
        course of illness, despite an overall difficult prognosis.</p>
        <p class="vb-intro"><strong>b) No public withdrawal from his own work:</strong>
        There is no indication that de Waal deliberately ended his research or publishing
        activity after the diagnosis.</p>
        <p class="vb-intro"><strong>c) Death on March 14, 2024:</strong>
        De Waal died at age 75 at his home in Stone Mountain, Georgia, from the effects
        of the stomach cancer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) A comparatively short but intense course of illness:</strong>
        Only about seven months passed between diagnosis and death – a notably shorter
        period than most other illness histories in this Compass.</p>
        <p class="vb-intro"><strong>b) An extensive life's work, current until the end:</strong>
        De Waal's final book, "Different: Gender Through the Eyes of a Primatologist,"
        had appeared only in 2022 – shortly before his diagnosis.</p>
        <p class="vb-intro"><strong>c) Worldwide tribute after his death:</strong>
        Obituaries in academic journals, major newspapers, and scientific institutions
        honored de Waal immediately after his death as one of the most influential
        behavioral scientists of his generation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death that barely overshadowed his public image:</strong>
        Despite the short, serious illness, de Waal's public image remained defined by
        his scientific work until the end, not by the illness.</p>
        <p class="vb-intro"><strong>b) International mourning in the scientific community:</strong>
        Colleagues worldwide honored de Waal as a defining figure in primatology and
        behavioral biology as a whole.</p>
        <p class="vb-intro"><strong>c) Work that continued to resonate beyond his death:</strong>
        De Waal's books and research findings remained a central reference point in the
        debate over animal behavior, emotion, and morality after his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Intensity that did not yield even to the diagnosis:</strong>
        The same SX7 energy that carried de Waal's entire research life also determined
        his final months – public appearances and confidence instead of withdrawal.</p>
        <p class="vb-intro"><strong>b) The Six-wing and loyalty to his own life's work:</strong>
        The Six-wing's loyalty showed in de Waal remaining true to his field of research
        and his scientific community until shortly before his death.</p>
        <p class="vb-intro"><strong>c) Confidence as its own form of intensity:</strong>
        The reported hope despite a difficult prognosis fits the SX7-typical tendency to
        focus on the positive possibility even in crises, rather than the worst-case
        scenario.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A research life that stayed forward-facing until the end:</strong>
        De Waal's entire scientific work was shaped by the conviction that there is
        always more to understand – the cancer diagnosis did not discernibly change this
        basic stance in his remaining months.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard
        Bernstein</a> and
        <a href="javascript:void(0)" data-route="krankheitsportraets-morgan-freeman">Morgan
        Freeman</a> (both also SX7w6) responded to their own chronic illnesses with the
        same basic stance as de Waal – no withdrawal, but continued work despite a
        palpable physical limit. More in the Illness Portraits of
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard Bernstein</a>
        and
        <a href="javascript:void(0)" data-route="krankheitsportraets-morgan-freeman">Morgan Freeman</a>.</p>
        <p class="vb-intro"><strong>c) Why the stomach, of all things?</strong>
        For a Sexual Seven with a Six-wing whose entire work rested on the tireless
        intake and processing of new experience and understanding, one interpretation
        suggests itself: precisely the organ that figuratively stands for taking in and
        digesting everything new became the site of an illness that mirrored, in an
        unsettling way, the researcher's lifelong insatiable appetite. This
        interpretation is a plausible reading, not a documented historical causal link,
        and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Sexual Seven's pattern inevitably leads to cancer –
        <strong>anyone can suffer any illness, regardless of subtype.</strong> What de
        Waal's case illustrates is a pattern in how a pronounced Sexual Seven with a
        Six-wing tends to handle a serious, short-term diagnosis – one of many possible
        interpretations, not a verdict. The corresponding illness picture is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        De Waal did not know his own pattern – the Sexual Seven with a Six-wing
        reflexively seeks full, unfiltered experience and continued work rather than
        ever taking a serious diagnosis as a reason for an early withdrawal, and he lived
        out exactly this pattern unchanged until his death. Someone who does not
        recognize their own search for intensity as a pattern cannot pause even in the
        face of a short, severe prognosis.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Seven with a Six-wing explains much about the course of <strong>Frans
        de Waal's</strong> final months: a man whose entire body of work rested on an
        insatiable search for new understanding remained true to that search right up
        until shortly before his death – the chimpanzee that keeps climbing to the last
        branch, because there might still be something new to discover there.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-frans-de-waal", label:"Portrait: Frans de Waal (SX7w6)"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Illness Portrait: Leonard Bernstein (SX7w6) – the same pattern of unrestrained continued work"},
        {route:"krankheitsportraets-morgan-freeman", label:"Illness Portrait: Morgan Freeman (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx7", label:"Subtype Profile SX7"},
      ])}
    </div>
  `);
}

export function freudKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sigmund-freud-portrait.jpg" alt="Dr. Sigmund Freud – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Sigmund Freud</p>
        <p class="krim-portrait-typ">SO6w5 · Social Type 6 with Five-wing · 1856–1939</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Meerkat</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so6.jpg" alt="Animal correspondence: Meerkat" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO6")};left:${tierAvatarLeft("SO6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sigmund Freud</strong>, founder of psychoanalysis, already has a
        <a href="javascript:void(0)" data-route="beruehmte-sigmund-freud">portrait under Famous Personalities</a>
        in this Compass – that one covers his life's work and type structure in general.
        This page covers only one chapter of his life that's mentioned there only in
        passing: starting in 1923 – Freud was 67 – he was diagnosed with cancer of the mouth and
        jaw, the result of decades of excessive cigar smoking (up to 20 a day). Over 30
        surgeries followed across 16 years, a disfiguring dental prosthesis he himself
        called &bdquo;the monster&ldquo;, chronic pain – and a refusal to give up either
        smoking or his work. In 1939, in exile in London, incurable and in agony, he asked
        his physician Max Schur for a lethal dose of morphine. Schur granted it – one of
        the most famous cases of physician-assisted death in medical history.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Freud</strong> is assigned to the <strong>social Six with Five-wing</strong> –
        the same subtype as <a href="javascript:void(0)" data-route="beruehmte-immanuel-kant">Immanuel Kant</a>
        in this Compass. Naranjo called the social Six the subtype of <em>duty</em>: security
        arises from belonging to a community with clear rules and from fulfilling a task
        larger than oneself – for Freud, the psychoanalytic movement he founded, led, and
        defended to the end. The Five-wing adds the characteristic intellectual systematicity
        and a deep need for mental clarity – exactly the need that would later determine how
        he handled pain and dying.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Analytical and incorruptible:</strong>
        Freud's gaze dissected, ordered, interpreted – patients, culture, himself. Nothing
        stayed at the surface; everything was probed for the structure behind it. This is
        the Five-wing: understanding as security.</p>
        <p class="vb-intro"><strong>b) Watchful for betrayal and deviation:</strong>
        Freud precisely registered who stayed loyal to the movement and who drifted away –
        he experienced Jung's and Adler's splits not as intellectual disagreement but as a
        broken bond. Typical Six-style vigilance toward one's own group.</p>
        <p class="vb-intro"><strong>c) Unapproachable, to preserve clarity:</strong>
        Silence, abstinence, the couch instead of eye contact – Freud's analytic setting
        deliberately created distance. Not disinterest, but the Five-wing, which needs
        observational space in order to see at all.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The movement as a shelter:</strong>
        Freud founded not just a method but an institution – the Vienna, then the
        International Psychoanalytic Association. The social Six found security not in
        going it alone, but in building a community of like minds.</p>
        <p class="vb-intro"><strong>b) Uncomfortable truth as duty:</strong>
        Sexuality as a driving force of the psyche, the unconscious as the true center of
        mental life: these were not comfortable theses in turn-of-the-century Vienna. Freud
        held to them anyway – duty to the truth outweighed the need for approval.</p>
        <p class="vb-intro"><strong>c) The system as protection against doubt:</strong>
        Drive theory, the structural model, dream interpretation – a theoretical edifice
        built closed over decades. The Five-wing enabled this systematicity; the social Six
        needed it as solid ground.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Qualities</h3>
        <p class="vb-intro"><strong>a) Demanding and giving loyalty:</strong>
        Whoever stayed true to the movement could count on Freud's support; whoever went
        their own way lost it. This is the Six, for whom belonging is not a side issue but
        the foundation of one's own security.</p>
        <p class="vb-intro"><strong>b) Building authority – and distrusting it:</strong>
        Freud became an authority himself, yet remained watchful of outside criticism
        throughout his life, while growing increasingly authoritarian within the movement
        itself. The Six's fate pattern: erecting authorities while fearing what happens
        should they fall.</p>
        <p class="vb-intro"><strong>c) Precision over intuition:</strong>
        His works did not arise from spontaneous inspiration but from years of observing,
        collecting, ordering. Five-wing systematicity, applied to the unconscious itself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Respected and deeply contested:</strong>
        Freud permanently changed how people think about themselves – while being attacked
        throughout his life by colleagues and the church alike. The social Six who champions
        uncomfortable truths polarizes almost inevitably.</p>
        <p class="vb-intro"><strong>b) An authority figure with a need for control:</strong>
        Within his movement he expected loyalty and answered deviation with exclusion – an
        orthodoxy he himself was not always willing to question.</p>
        <p class="vb-intro"><strong>c) Trust through demonstrable systematicity:</strong>
        Followers didn't follow him for charisma alone, but because his theoretical edifice
        felt internally coherent – the Five-wing demands this coherence of itself before it
        expects it of others.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Quality</h3>
        <p class="vb-intro"><strong>a) Restless systematic work:</strong>
        Freud wrote, practiced, and corresponded at an enormous pace across decades – the
        Six, who generates security through steady fulfillment of duty.</p>
        <p class="vb-intro"><strong>b) Fusion of self and movement:</strong>
        His self-understanding was inseparable from psychoanalysis – attacks on the theory
        felt to him like attacks on himself.</p>
        <p class="vb-intro"><strong>c) Control rather than trust as a basic stance:</strong>
        Where a more relaxed Six learns to trust the group and life more, Freud held the
        reins himself throughout his life – including in how he handled his own body, as his
        illness shows with particular clarity.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Sixteen years, thirty surgeries:</strong>
        <strong>Freud</strong> had smoked cigars since his youth, often up to 20 a day –
        despite repeated warnings, despite his own heart trouble in younger years, despite
        the cancer diagnosis in 1923. He kept smoking almost until his death. Over 30
        surgeries followed, along with a palate prosthesis that made speaking and eating an
        ordeal and that he himself called &bdquo;the monster&ldquo;.</p>
        <p class="vb-intro"><strong>b) Clarity valued above freedom from pain:</strong>
        For long stretches, Freud refused effective painkillers and made do with aspirin –
        for fear that stronger medication might cloud his thinking. This is the Five-wing
        in its purest, most dangerous form: mental clarity as the highest good, to which even
        one's own freedom from pain is subordinated. The social Six also needs this clarity
        in order to keep standing guard – over her own theory, over the movement, over her
        patients.</p>
        <p class="vb-intro"><strong>c) The addiction one doesn't give up because it belongs to the work:</strong>
        Freud himself described cigar smoking as indispensable to his thinking and
        productivity. This reveals a paradoxical side of the otherwise so duty-bound Six:
        while normally vigilant toward outside authorities – doctors, warnings, her own body
        – Freud, in this one matter, trusted his own judgment over medicine's, because giving
        up the cigar would have meant giving up his own ability to function, and with it the
        duty that carried his life.</p>
        <p class="vb-intro"><strong>d) A controlled ending:</strong>
        Unlike Molière (SO7w6), who suppressed his illness until his body forced a collapse, Freud
        remained aware of his diagnosis from the start – typical of the watchful, never quite
        carefree Six. When no treatment helped anymore in 1939, he explicitly asked his
        physician Max Schur for a lethal dose of morphine. Even dying, he did not want to
        leave to chance – the Six who holds on to control over her own security until the
        very end, this time as a conscious decision over the final moment.</p>
        <p class="vb-intro"><strong>e) Why the mouth, of all places?</strong>
        For Freud, the mouth was the organ of two central functions at once: speech, with
        which he taught, defended, and asserted authority for his theories, and the cigar,
        his most important soothing agent against the underlying anxiety beneath the Six's
        restless vigilance. Of all organs, the one through which he created both his
        intellectual security (speaking, teaching, interpreting) and his emotional security
        (the oral comfort of the cigar) became the site of the fatal illness – a reading
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the social Six's pattern inevitably leads to cancer –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Freud's case can show is a pattern that stands out again and again in practice with
        a habit tightly woven into one's own identity and ability to function – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Freud did not consciously know his own pattern – the vigilance of the social Six drove him to hold on to intellectual control over his life's work even as cancer progressed, rather than allow himself relief. Someone who does not recognize their own fear of losing control seeks safety in exactly the harshness that further exhausts the body.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Freud</strong>, the social Six with Five-wing shows itself once more, with full
        clarity: mental clarity as the highest good, loyalty to his cause placed above his
        own needs, and even facing death, still the wish to retain control rather than
        surrender to uncertainty. Where Molière suppressed his illness until his body forced
        it on him in front of an audience, Freud looked his diagnosis in the eye from the
        start – and decided, right up to his last breath, exactly what he was willing to
        sacrifice for it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-sigmund-freud", label:"Portrait: Sigmund Freud (SO6w5) – life's work"},
        {route:"beruehmte-immanuel-kant", label:"Portrait: Immanuel Kant (SO6w5)"},
        {route:"krankheitsportraets-immanuel-kant", label:"Illness Portrait: Immanuel Kant (SO6w5) – the same pattern of self-control"},
        {route:"krankheitsportraets-moliere", label:"Illness Portrait: Molière (SO7w6)"},
        {route:"krankheitsportraets-woody-allen", label:"Illness Portrait: Woody Allen (SP6w7) – related hypochondria, a different instinct response"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so6", label:"Subtype Profile SO6"},
      ])}
    </div>
  `);
}

export function georgeGershwinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-george-gershwin-portrait.jpg" alt="George Gershwin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">George Gershwin</p>
        <p class="krim-portrait-typ">SO7w6 · Social Type 7 with Six-wing · 1898–1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>George Gershwin</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-george-gershwin">famous-personality portrait</a>
        – that page covers his compositional life's work, from "Rhapsody in Blue" to
        "Porgy and Bess." This page opens up a chapter that page only glances at: the
        final months of his life, during which a malignant brain tumor was at first
        mistaken for exhaustion and nervousness, until it killed him on 11 July 1937 at
        only 38 years old.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Gershwin</strong> is assigned to the <strong>Social Type 7 with Six-wing</strong>.
        SO7 places its overflowing energy in the service of a larger ideal and reflexively
        flees any sign of stagnation or pain – including its own body's warning signs. The
        Six-wing does add systematic vigilance toward outside risks, but in Gershwin that
        vigilance was directed almost entirely at his own artistic legitimacy, not his
        health. Exactly this combination of restless forward flight and a blind spot for
        his own body shaped the fatal course of his final months.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A strange smell no one else noticed:</strong>
        From early 1937 onward, Gershwin repeatedly reported smelling burning rubber – an
        olfactory hallucination now recognized as a classic early symptom of certain brain
        tumors, but which meant nothing to anyone at the time.</p>
        <p class="vb-intro"><strong>b) Headaches dismissed as nerves:</strong>
        Increasing, at times severe headaches, difficulty concentrating, and coordination
        problems were interpreted by doctors and friends for months as psychosomatic –
        overwork, exhaustion from the move to Hollywood, nervous tension ahead of new film
        projects.</p>
        <p class="vb-intro"><strong>c) A growing feeling that something was wrong:</strong>
        Gershwin himself increasingly voiced concern to close friends that he was
        seriously ill, but was reassured by several doctors who could find no organic
        cause – and kept working on new compositions in the meantime.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A collapse on set:</strong>
        On 9 July 1937, Gershwin briefly lost consciousness while working at MGM Studios.
        Only now was a thorough neurological examination initiated.</p>
        <p class="vb-intro"><strong>b) A diagnosis that came too late:</strong>
        Doctors diagnosed a glioblastoma, a particularly aggressive, malignant brain
        tumor. An emergency operation on 11 July 1937 at Cedars of Lebanon Hospital in Los
        Angeles could no longer effectively remove it.</p>
        <p class="vb-intro"><strong>c) Death the same day:</strong>
        Gershwin died a few hours after the operation, on 11 July 1937, at age 38 – a
        shock, with no warning time at all, for family, friends, and the American music
        world.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Working on, despite warning signs:</strong>
        Even as symptoms noticeably increased, Gershwin spent his final months in
        Hollywood composing film scores without letup – including for "Shall We Dance"
        and "A Damsel in Distress" with Fred Astaire.</p>
        <p class="vb-intro"><strong>b) No withdrawal, but even more company:</strong>
        Companions reported that even in the months of growing health complaints,
        Gershwin led an active, sociable life, continuing to attend and host parties – as
        if his own social presence could outshout the body's warning signs.</p>
        <p class="vb-intro"><strong>c) Misdiagnoses read as avoidance behavior:</strong>
        Some of the treating physicians initially suspected a psychosomatic cause or even
        hysteria, partly because Gershwin's outward composure gave so little indication of
        a serious physical illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) An abrupt end mid-career:</strong>
        Gershwin died at the height of his success, with numerous unfinished projects and
        plans for further stage and film works.</p>
        <p class="vb-intro"><strong>b) Nationwide mourning:</strong>
        His death set off a wave of public grief across the United States; radio stations
        interrupted their programming to announce the news, and numerous colleagues
        dedicated memorial concerts to him in the following weeks.</p>
        <p class="vb-intro"><strong>c) Later medical reassessment:</strong>
        Only decades later was it more widely discussed in the medical literature how
        typical Gershwin's early symptoms – particularly the olfactory hallucinations –
        actually were for brain tumors, and how easily they were misread at the time.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Signature</h3>
        <p class="vb-intro"><strong>a) Forward flight instead of pausing:</strong>
        The SO7-typical strategy of evading looming pain through ever-new projects and
        activity showed itself in Gershwin right to the end: the more symptoms appeared,
        the fuller he made his schedule.</p>
        <p class="vb-intro"><strong>b) Vigilance aimed at the wrong target:</strong>
        The Six-wing directed its caution at his own artistic legitimacy – the search for
        teachers, worry over the quality of his work – not at his physical condition. This
        misallocation of vigilance is a pattern repeatedly observed in SO7w6
        personalities.</p>
        <p class="vb-intro"><strong>c) Sociability as distraction:</strong>
        Rather than confronting his own fear of serious illness, Gershwin sought out even
        more company – the familiar SO7 strategy of covering unpleasant inner states with
        outward stimulation.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A life with no real pauses:</strong>
        Long before the first symptoms, Gershwin was known for his practically ceaseless
        productivity – several projects at once, almost no true periods of rest, a
        schedule that allowed no emptiness.</p>
        <p class="vb-intro"><strong>b) Months of ignored warning signs:</strong>
        From the first olfactory hallucinations in early 1937 to the collapse in July of
        the same year, several months passed in which Gershwin himself, those around him,
        and several doctors consistently downplayed the symptoms.</p>
        <p class="vb-intro"><strong>c) A final half-year full of new projects:</strong>
        Rather than withdrawing, Gershwin began new film-scoring commitments in Hollywood
        during exactly this period – opening another chapter instead of letting the one
        already underway come to rest.</p>
        <p class="vb-intro"><strong>d) Why the brain, of all things?</strong>
        For a social Seven with a Six-wing, whose entire identity hangs on the unceasing
        production of new ideas, one interpretation suggests itself: precisely the organ
        that continuously produced new music, new plans, new enthusiasm became the site
        of a disease that defied all control – while the SO7's characteristic forward
        flight found its limit exactly in the organ that made that flight possible in the
        first place. This interpretation is a plausible reading, not a documented
        historical causal link, and will be explored further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>e) A framework, not a determinism:</strong>
        This does not mean the social Seven's pattern inevitably leads to brain tumors –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Gershwin's case illustrates is a pattern that recurs in practice around fleeing
        stillness and misallocating vigilance – one of many possible explanations, not a
        verdict. The corresponding illness pattern will be developed further, over time,
        in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Gershwin did not know his own Enneagram pattern – the social Seven with a Six-wing
        flees almost reflexively from any sign of stagnation or threat into new projects
        and social activity, rather than pausing and taking its own warning signs
        seriously. That pattern carried him unrestrained to the end: more
        engagements rather than fewer, more company rather than withdrawal, more new music
        rather than the one urgently needed medical workup. Someone who does not recognize
        their own forward flight as a pattern easily mistakes it for sheer drive, even once
        the body itself is already sounding the alarm.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Gershwin's final months offer one of the most sobering studies of the social Seven
        with a Six-wing: months of misread warning signs, a schedule that allowed no gap
        until the collapse, and a vigilance aimed at everything except his own health. The
        beaver who kept building until its own structure buried it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-george-gershwin", label:"Portrait: George Gershwin (SO7w6) – life's work"},
        {route:"krankheitsportraets-nikola-tesla", label:"Illness Portrait: Nikola Tesla (SO7w6) – same subtype, opposite course"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function hansDietrichGenscherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hans-dietrich-genscher-portrait.jpg" alt="Hans-Dietrich Genscher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans-Dietrich Genscher</p>
        <p class="krim-portrait-typ">SE9w8 · Self-Preservation Type 9 with Eight-Wing · 1927–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Elephant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Animal correspondence: Elephant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hans-Dietrich Genscher</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-hans-dietrich-genscher">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there: a
        years-long heart condition, from whose effects Genscher died in March 2016.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Genscher</strong> is assigned to the <strong>self-preservation Type 9 with
        Eight-Wing</strong>. The SE9 seeks security through persistence and continuity, even
        in dealing with its own health; the Eight-Wing adds a quiet but unmistakable
        determination that will not be pushed aside. Exactly this combination – patient
        continuity in office, combined with a refusal to let health setbacks push him out of
        public life – shaped how he dealt with his heart condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A heart condition known for years:</strong>
        According to consistent biographical sources, Genscher was afflicted with heart
        disease for years – a circumstance known to his political circle but never made a
        central public topic.</p>
        <p class="vb-intro"><strong>b) No public withdrawal because of the illness:</strong>
        Despite the known heart condition, Genscher continued his political and public work
        for decades without making his own health the subject of public debate.</p>
        <p class="vb-intro"><strong>c) Continued public engagement into old age:</strong>
        Even after resigning as foreign minister in 1992, Genscher remained present as an
        elder statesman of German foreign policy, giving lectures, interviews, and
        diplomatic advice well into his ninth decade.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Reticence about health details:</strong>
        Unlike some contemporaries, Genscher never made details of his heart condition the
        subject of extensive public accounts – the exact nature and course of the illness
        remained largely private.</p>
        <p class="vb-intro"><strong>b) A life marked by continuity right to the end:</strong>
        As far as publicly known, Genscher's final years were marked by the same calm
        steadiness that characterized his entire political career – no dramatic public
        break, no sudden withdrawal.</p>
        <p class="vb-intro"><strong>c) Growing health fragility in old age:</strong>
        In his final years, Genscher's health condition became increasingly fragile according
        to those close to him, without this being strongly addressed in public.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Death on 31 March 2016 in Wachtberg:</strong>
        Hans-Dietrich Genscher died at age 89 from the effects of his heart condition in his
        home in Wachtberg near Bonn.</p>
        <p class="vb-intro"><strong>b) A state ceremony with worldwide condolences:</strong>
        His death triggered international obituaries and expressions of mourning – a state
        ceremony honored his role in German reunification and European détente policy.</p>
        <p class="vb-intro"><strong>c) Tribute to a diplomatic legacy until the end:</strong>
        Obituaries consistently emphasized his diplomatic life's work, while his private
        health history was mentioned only in passing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A public image of unbroken presence:</strong>
        Until shortly before his death, the public image of Genscher remained that of an
        active, present elder statesman – not that of a man marked by years of illness.</p>
        <p class="vb-intro"><strong>b) No later dramatizing of the illness:</strong>
        Even in obituaries and tributes, the heart condition was never made a central
        narrative element of his life – it remained a quiet, almost incidental part of his
        biography.</p>
        <p class="vb-intro"><strong>c) The continued impact of his diplomatic legacy:</strong>
        Genscher's role in German unity and European détente policy remained the defining
        public image after his death, independent of his private health history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Continuity as the answer to his own illness:</strong>
        The SE9's characteristic search for security through persistence also showed in how
        he dealt with his own heart condition: Genscher did not let the illness become the
        occasion for a dramatic withdrawal, but continued his public work with his usual
        continuity.</p>
        <p class="vb-intro"><strong>b) The Eight-Wing and quiet determination:</strong>
        The same calm but unmistakable determination with which Genscher mediated between the
        fronts of the Cold War for decades showed in dealing with his own health as a refusal
        to let the illness push him out of public life.</p>
        <p class="vb-intro"><strong>c) Discretion instead of public staging:</strong>
        That Genscher never publicly detailed his heart condition fits the SE9w8 tendency to
        treat private matters discreetly while continuing the public role unchanged.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A bridge-builder between power blocs who calmly bridged his own illness too:</strong>
        Genscher's entire life's work rested on the ability to bear tensions without letting
        them escalate – exactly this stance also carried over into how he dealt with his own
        heart condition: no fight, no dramatization, but persistent continuation of the
        familiar path.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        Parallels appear with
        <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">David
        Hume</a> and
        <a href="javascript:void(0)" data-route="krankheitsportraets-johannes-brahms">Johannes
        Brahms</a> (both also SE9w8): all three met a progressive illness with the same calm,
        almost serene persistence, without making the illness a central public topic. All
        SE9w8s show the same pattern: security through continuity, even in the face of their
        own physical decline.</p>
        <p class="vb-intro"><strong>c) Why the heart, of all things, the organ of quiet mediation?</strong>
        For a self-preservation Type 9 with an Eight-Wing whose entire life's work rested on
        quiet mediation between hostile camps, one interpretation suggests itself: exactly
        the organ popularly associated with connection and balance became the site of his own
        physical strain. This reading is a plausible interpretation, not a proven clinical
        causal link, and will be developed further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the self-preservation Nine's pattern inevitably leads to
        heart disease – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Genscher's case is a pattern in dealing with a
        long-standing illness that keeps recurring in a pronounced self-preservation Type 9
        with an Eight-Wing – one of many possible readings, not a verdict. The corresponding
        illness pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Genscher did not know his own pattern as an Enneagram structure – the self-preservation
        Type 9 with an Eight-Wing reflexively clings to its own continuity, even toward its
        own illness, instead of pulling back in time, and lived out exactly this pattern
        unchanged until his death. Anyone who does not recognize their own tendency to cover
        health warning signs with quiet persistence as a pattern risks that the illness
        progresses unnoticed for years.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 9 with Eight-Wing explains much about how <strong>Hans-
        Dietrich Genscher</strong> dealt with his own heart condition: a man whose entire
        life's work was devoted to quiet mediation between hostile camps met his own illness
        with the same calm continuity – the elephant that kept moving in its own rhythm until
        the end, never changing its pace for the illness.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-hans-dietrich-genscher", label:"Portrait: Hans-Dietrich Genscher (SE9w8)"},
        {route:"krankheitsportraets-david-hume", label:"Illness Portrait: David Hume (SE9w8) – same subtype"},
        {route:"krankheitsportraets-johannes-brahms", label:"Illness Portrait: Johannes Brahms (SE9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se9", label:"Subtype Profile SE9"},
      ])}
    </div>
  `);
}

export function isaacNewtonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-isaac-newton-portrait.jpg" alt="Isaac Newton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Isaac Newton</p>
        <p class="krim-portrait-typ">SO5w6 · Social Type 5 with Six-wing · 1642/43–1727</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Isaac Newton</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-isaac-newton">famous-personality portrait</a>
        – that page covers the knowledge he kept secret for decades and his groundbreaking
        work in physics. This page goes deeper into a chapter mentioned there only in
        passing: a severe nervous breakdown in 1693, likely caused by decades of unprotected
        alchemical experiments with mercury.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Newton</strong> is assigned to the <strong>Social Type 5 with Six-wing</strong>.
        SO5 gathers and hoards knowledge, releasing it to the community in controlled doses;
        the Six-wing adds a need for security and institutional control. This same
        combination – decades of secretive experiments conducted without any precautions –
        also determined how his health crisis developed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades of alchemical experiments:</strong>
        For more than three decades, Newton worked in his private laboratory on alchemical
        experiments, writing more than a million words on recipes and interpretations of
        ancient texts, regularly handling mercury and other toxic substances without any
        protection.</p>
        <p class="vb-intro"><strong>b) Growing insomnia in the spring of 1693:</strong>
        In the months before his actual breakdown, contemporaries reported Newton's
        increasingly irregular sleep and a growing irritability in his correspondence.</p>
        <p class="vb-intro"><strong>c) First paranoid signs in letters:</strong>
        Newton began making insinuations in letters to close friends and scientific
        colleagues that suggested growing suspicion of those around him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Accusations against close friends:</strong>
        In September 1693, Newton wrote letters full of confused accusations to John Locke
        and Samuel Pepys, two of his closest confidants – he accused Locke of trying to
        "embroil him with women" and asked Pepys for forgiveness for things he claimed to
        have done to him, without specifying what.</p>
        <p class="vb-intro"><strong>b) Months-long withdrawal from scientific correspondence:</strong>
        After these incidents, Newton interrupted nearly all scientific communication for
        several months – a striking break in his otherwise extensive correspondence.</p>
        <p class="vb-intro"><strong>c) Later, partial apologies:</strong>
        As his condition improved, Newton apologized to Locke and explained his state as due
        to lack of sleep – without ever naming the alchemical experiments themselves as a
        possible cause.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Full recovery within a year:</strong>
        Unlike chronically progressing cases, Newton largely recovered from the acute crisis
        within about a year and resumed his scientific work and correspondence.</p>
        <p class="vb-intro"><strong>b) No abandonment of his alchemical practice:</strong>
        Despite the crisis he had lived through, there is no evidence that Newton
        fundamentally changed or cautiously limited his alchemical experiments afterward –
        the practice that had likely contributed to his poisoning was never questioned.</p>
        <p class="vb-intro"><strong>c) Later modern analyses confirmed high heavy-metal levels:</strong>
        Analyses of hair samples attributed to Newton showed, centuries later, unusually
        high concentrations of mercury, lead and arsenic – an indirect but clear indication
        of the burden from his decades of laboratory work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) No public explanation of the crisis:</strong>
        Newton never commented publicly on the events of 1693 – the breakdown, like so much
        in his life, remained hidden in private correspondence rather than being processed
        publicly.</p>
        <p class="vb-intro"><strong>b) Continuation of his public career despite the crisis:</strong>
        Only a few years later, in 1696, Newton took charge of the Royal Mint, and in 1703
        the presidency of the Royal Society – offices that demanded the utmost mental
        clarity and institutional control.</p>
        <p class="vb-intro"><strong>c) A long life despite the burden:</strong>
        Newton did not die until 1727, at age 84 – the poisoning crisis of 1693 remained, as
        far as is known, a single acute episode, not a chronically progressing illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Secretive experimentation that endangered its own author:</strong>
        The same tendency to conduct knowledge and research in secrecy that shaped Newton's
        entire life also meant that no one ever limited or questioned his dangerous
        alchemical practice – control over his own knowledge also meant that no one could
        warn him of the risks.</p>
        <p class="vb-intro"><strong>b) The Six-wing and suspicion as a symptom:</strong>
        The paranoid accusations against Locke and Pepys can also be read as an extreme
        intensification of the already watchful, security-oriented Six-wing – under toxic
        strain, the same pattern that otherwise sought institutional control turned against
        his closest confidants themselves.</p>
        <p class="vb-intro"><strong>c) Return to habitual secrecy rather than disclosure:</strong>
        Unlike some other illness histories in this Compass, the crisis was not followed by
        a public confession or a change in behavior – Newton returned to exactly the
        secrecy that had shaped his entire life even before the crisis.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A mind that poisoned itself in its own secrecy:</strong>
        Newton's entire life was shaped by the conviction that knowledge is developed most
        safely in secret – his alchemical experiments were the most consistent application
        of this principle, and at the same time the most dangerous, because no one from
        outside could point out the toxic risks.</p>
        <p class="vb-intro"><strong>b) Control over knowledge, but not over his own health:</strong>
        A man who meticulously controlled every aspect of his research – when, how, or
        whether anything was published at all – had no control whatsoever over the physical
        consequences of his own experiments, because he did not classify them as a risk in
        the first place.</p>
        <p class="vb-intro"><strong>c) Why the mind, of all places?</strong>
        For a Social Five with Six-wing whose entire power rested on clear, ordered
        thinking, one interpretation suggests itself: precisely the organ that enabled him
        to control all his secret knowledge was itself temporarily brought out of control by
        the toxic burden of his own research – an attack, by the very thing he most wanted to
        protect, on the tool with which he protected it. This interpretation is a plausible
        reading, not a documented historical causal link, and is developed further in this
        Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of Social Five inevitably leads to heavy-metal
        poisoning or psychological crisis – <strong>anyone can develop any illness,
        regardless of subtype.</strong> What Newton's case shows is a pattern in how a
        pronounced Social Five with Six-wing repeatedly deals with self-imposed danger from
        secret research – one possible reading among many, not a verdict. The corresponding
        illness profile is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Newton did not know his own pattern – Social Five with Six-wing reflexively secures
        complete control over its own knowledge and its dissemination rather than ever
        questioning its own physical endangerment, and he continued to live out exactly this
        pattern unchanged even after his crisis. Whoever does not recognize their own need to
        develop every piece of knowledge in secret as a pattern cannot set it aside even in
        the face of their own endangerment.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Social Five with Six-wing explains much about the course of <strong>Newton's</strong>
        own illness: a man whose entire power rested on the controlled, secret development of
        knowledge was himself brought out of control precisely by that secrecy – the octopus
        that kept its own hidden depths concealed for so long that it nearly cost him his own
        mind.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-isaac-newton", label:"Portrait: Isaac Newton (SO5w6) – physicist and mathematician"},
        {route:"krankheitsportraets-stephen-hawking", label:"Illness Portrait: Stephen Hawking (SO5w6) – same subtype, same chair"},
        {route:"krankheitsportraets-cg-jung", label:"Illness Portrait: Carl Gustav Jung (SO5w6) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function johnWayneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-john-wayne-portrait.jpg" alt="John Wayne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Wayne</p>
        <p class="krim-portrait-typ">SX8w7 · Sexual Type 8 with Seven-wing · 1907–1979</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Crocodile</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Animal correspondence: Crocodile" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>John Wayne</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-john-wayne">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general. This
        page delves into a chapter that page does not address: a 1964 lung cancer diagnosis
        that Wayne publicly declared a fight, and a second, fatal cancer diagnosis in 1979.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Wayne</strong> is classified as the <strong>Sexual Eight with Seven-wing</strong>.
        The SX8 lives out its intensity unfiltered and physically – it does not seek the
        diplomatic middle ground, but the full, immediate expression of strength and will. The
        Seven-wing adds extra momentum and the refusal to slow down – a pattern that can be
        traced right into Wayne's publicly staged fight against his own illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades of heavy smoking:</strong>
        Wayne smoked up to six packs of cigarettes a day for decades – a habit that
        dramatically raised his cancer risk, which he long treated as no threat at all.</p>
        <p class="vb-intro"><strong>b) Diagnosis in September 1964:</strong>
        In 1964, Wayne was diagnosed with lung cancer. His left lung and two ribs had to be
        removed in an extensive operation.</p>
        <p class="vb-intro"><strong>c) A public declaration of the fight:</strong>
        Rather than hiding the diagnosis, Wayne went public with it in 1965 and called his
        fight against the disease "The Big C" – cancer, like any other opponent in his films,
        was to be named directly and fought.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Returning in front of the camera despite one lung:</strong>
        Just months after the major operation, Wayne returned to filming – with markedly
        reduced lung capacity, but no publicly visible narrowing of his choice of roles.</p>
        <p class="vb-intro"><strong>b) A public face for cancer awareness:</strong>
        Wayne's open handling of his diagnosis made him one of the most recognized public
        faces in the fight against cancer in 1960s and 1970s America – he actively engaged in
        awareness campaigns.</p>
        <p class="vb-intro"><strong>c) Continued physically demanding film work:</strong>
        Even after the operation, Wayne kept filming physically demanding Western and action
        roles, often with visible effort, without fundamentally changing his choice of roles.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Fifteen years after the first diagnosis:</strong>
        After the 1964 lung cancer surgery, Wayne lived another fifteen years, during which he
        continued his film career, including his only Oscar-winning role in "True Grit" (1969).</p>
        <p class="vb-intro"><strong>b) A second cancer diagnosis in January 1979:</strong>
        In January 1979, Wayne was diagnosed with stomach cancer. In the following surgery,
        his entire stomach was removed.</p>
        <p class="vb-intro"><strong>c) Death on 11 June 1979:</strong>
        Wayne died at age 72 at the UCLA Medical Center from the effects of the stomach cancer
        – barely five months after the second diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A public fight that became a role model:</strong>
        Wayne's openness about his first cancer encouraged many other patients to stop hiding
        their own diagnoses – a rare case where openness, not concealment, was the defining
        pattern.</p>
        <p class="vb-intro"><strong>b) Two cancers, one lifestyle:</strong>
        Both the lung and the later stomach cancer are linked to Wayne's decades of heavy
        tobacco use – a risk he never fundamentally changed, even after the first diagnosis.</p>
        <p class="vb-intro"><strong>c) A career that continued to the very end:</strong>
        Wayne made his final film, "The Shootist" – fittingly, about a dying gunfighter – as
        late as 1976, three years before his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Cancer as a named opponent:</strong>
        Where other celebrities hid their illness, Wayne explicitly named his cancer as an
        enemy to be defeated – the Sexual Eight, which does not avoid threat but confronts it
        directly, even when the opponent is one's own body.</p>
        <p class="vb-intro"><strong>b) The Seven-wing as the drive for a rapid return:</strong>
        His swift return in front of the camera after the lung surgery shows the Seven-wing at
        its purest: standstill was never an option for Wayne, even with only one lung left.</p>
        <p class="vb-intro"><strong>c) Public strength as a continuation of the screen persona:</strong>
        The fight against "The Big C" was received by the public almost as a continuation of
        his film roles – the Duke, standing his ground against his own mortality too.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Fifteen years between first diagnosis and death:</strong>
        From the 1964 lung cancer diagnosis to his death in 1979, Wayne lived fifteen years
        with the knowledge of his own mortality – without fundamentally changing his public
        life or his choice of roles.</p>
        <p class="vb-intro"><strong>b) Confrontation instead of concealment as a recurring pattern:</strong>
        Unlike Karl Lagerfeld (SO3w4) or Michael Jackson (SO4w3), who hid their illness behind
        a flawless facade, Wayne made his diagnosis public and framed it as another fight to be
        won – the Sexual Eight, which does not hide threat but names it.</p>
        <p class="vb-intro"><strong>c) Two different organs, the same lifestyle:</strong>
        That both the lung and the stomach were affected points to the same underlying risk
        factor – a lifestyle built on intensity rather than moderation, even after the first
        warning.</p>
        <p class="vb-intro"><strong>d) Why two consecutive cancers, of all things?</strong>
        For a Sexual Eight with Seven-wing whose entire self-image rests on unchecked intensity
        and pace, one interpretation suggests itself: the body, strained without moderation for
        decades, spoke up twice – and Wayne met both instances with the same direct
        confrontation, never with retreat or restraint. This interpretation is a plausible
        reading, not a documented historical causal link, and is developed further in this
        Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Sexual Eight pattern inevitably leads to cancer –
        <strong>any person can develop any illness, regardless of subtype.</strong> Wayne's
        illnesses are also closely linked to a classic risk factor (decades of heavy smoking),
        not to be explained in purely psychosomatic terms. What his case illustrates is a
        pattern in the public handling of one's own illness that keeps recurring in practice
        among people with a pronounced Sexual Eight with Seven-wing – one of many possible
        interpretations, not a judgment. The corresponding illness pattern is gradually being
        developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Wayne did not know his own pattern – the Sexual Eight with Seven-wing meets threat with
        direct confrontation and unchecked pace, and that is exactly what let him continue his
        intense lifestyle essentially unchanged despite the first cancer diagnosis, rather than
        fundamentally course-correcting. Someone who does not recognize their own pattern of
        physically wrestling down every threat instead of taking it as a cue for moderation
        risks the same opponent returning a second time.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Wayne's</strong> Sexual Eight with Seven-wing is legible once more in the
        course of his illness: a first cancer battle fought publicly in 1964, fifteen more
        years lived at unchanged pace, and a second, fatal diagnosis in 1979 that he met with
        the same direct stance as the first. The crocodile that named "The Big C" like any
        other opponent – and who, in the end, had to step up twice to fight the same battle.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-john-wayne", label:"Portrait: John Wayne (SX8w7) – life's work"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – counter-model: concealment instead of confrontation"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx8", label:"Subtype Profile SX8"},
      ])}
    </div>
  `);
}

export function karlLagerfeldKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-karl-lagerfeld-portrait.jpg" alt="Karl Lagerfeld" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Karl Lagerfeld</p>
        <p class="krim-portrait-typ">SO3w4 · Social Type 3 with Four-wing · 1933–2019</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Karl Lagerfeld</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-karl-lagerfeld">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter left out there: a cancer diagnosis that,
        according to consistent reports, he kept secret for years even from those closest to
        him, until he died in February 2019 at the age of 85.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Lagerfeld</strong> is classified as the <strong>Social Three with
        Four-wing</strong>. The Social Three is called the <em>Reinforcement Type</em> –
        she is not simply successful, she <em>is</em> the success she embodies, and the image
        she presents to the world must remain seamlessly intact. The Four-wing adds a fine
        sense for aesthetics and staging, but also a deep shame over anything that could
        damage this flawless image – illness and age belong among the hardest themes for this
        combination to ever admit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The image before the truth:</strong>
        Lagerfeld's public gaze was always concerned with what image of him became visible to
        the outside world – this priority did not change even in the face of a progressing
        illness.</p>
        <p class="vb-intro"><strong>b) Weakness as the one non-negotiable taboo:</strong>
        Where other Illness Portraits in this Compass tell of subjects who eventually
        disclosed their diagnosis deliberately, Lagerfeld took the opposite path: rumors about
        his health were actively denied by those around him.</p>
        <p class="vb-intro"><strong>c) Control down to the last visible gesture:</strong>
        When he first missed a Chanel show in January 2019, he sent a video message to
        colleagues to dispel concerns – even the withdrawal itself was staged once more, not
        simply accepted.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A contradictory diagnosis:</strong>
        At the time of his death, media reports cited pancreatic cancer, though this was never
        officially confirmed by Chanel or the family. In late 2019, his longtime personal
        assistant Sébastien Jondeau stated that Lagerfeld had in fact suffered from prostate
        cancer, diagnosed as early as 2015 – the exact type of cancer remains unresolved to
        this day.</p>
        <p class="vb-intro"><strong>b) Nearly four years of complete secrecy:</strong>
        According to Jondeau's account, even Lagerfeld's closest family members did not know
        of the 2015 diagnosis – a degree of secrecy that goes far beyond what is documented in
        other Illness Portraits in this Compass.</p>
        <p class="vb-intro"><strong>c) 35 years without a single missed appointment:</strong>
        Since taking over at Chanel in 1983, Lagerfeld had never once missed a show's closing
        bow – until January 2019, weeks before his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The first visible sign of weakness:</strong>
        At the Chanel Haute Couture show on January 22, 2019, Lagerfeld missed the closing
        applause for the first time in 35 years; "exhaustion" was officially cited as the
        reason, with Virginie Viard standing in for him.</p>
        <p class="vb-intro"><strong>b) The radical weight loss as an act of control, not a health project:</strong>
        Starting in 2000/2001, Lagerfeld lost about 42 kilograms over roughly 13 months on a
        diet he himself marketed – not out of health concerns, but because he wanted to fit
        into the slim-cut suits of a younger designer. Weight loss this rapid is generally
        considered medically risky.</p>
        <p class="vb-intro"><strong>c) Rigid self-control extending even to sleep:</strong>
        Lagerfeld repeatedly emphasized in public that he slept exactly seven hours and woke
        without an alarm: "I sleep seven hours. I don't wake up before – the house could
        collapse, but I sleep my seven hours." Even sleep was declared a disciplined,
        controlled ritual.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A death that caught the fashion world unprepared:</strong>
        Because health concerns had been dismissed by those around him only weeks earlier,
        news of Lagerfeld's death on February 19, 2019, came as a shock to the public, even
        though his body had evidently long been marked by illness.</p>
        <p class="vb-intro"><strong>b) No official confirmation of the cause of death to this day:</strong>
        Neither Chanel nor the family has ever confirmed an official diagnosis – one final,
        consistent act of image preservation reaching beyond death itself.</p>
        <p class="vb-intro"><strong>c) A workload with no visible retreat:</strong>
        To the end, Lagerfeld oversaw up to eight collections a year for Chanel alongside
        several for Fendi – no documented withdrawal before January 2019.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The public role as a shield:</strong>
        As long as the role of the flawlessly functioning fashion czar could be sustained, the
        energy for it seemed to be there too – the image carried the body, not the other way
        around.</p>
        <p class="vb-intro"><strong>b) Exhaustion as the only permitted explanation:</strong>
        Even once the withdrawal became unmistakable, the official language stayed within the
        controllable – "exhaustion" instead of illness, a term that limits weakness in time
        rather than letting it appear threatening.</p>
        <p class="vb-intro"><strong>c) The cheetah that stayed at full sprint until the last show:</strong>
        The energy of the SO3w4 remained directed to the end at the same drive that had
        defined Lagerfeld's entire career: to allow no collection, no appearance, no image
        that did not match his own staging.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Diagnosed in 2015, kept secret until death:</strong>
        According to his longtime personal assistant Sébastien Jondeau, Lagerfeld received a
        cancer diagnosis as early as 2015 – four years he apparently used to maintain the
        outward appearance of complete wellness.</p>
        <p class="vb-intro"><strong>b) Active denial instead of disclosure:</strong>
        Unlike Ronald Reagan (SO9w8), who addressed his diagnosis directly in a letter to the
        public, or David Bowie (SO1w2), who encoded it in art, Lagerfeld chose a third path:
        simply rejecting any suggestion of illness for as long as possible.</p>
        <p class="vb-intro"><strong>c) A single visible sign, four weeks before death:</strong>
        Only his absence from the Chanel show in January 2019 – after 35 years of unbroken
        presence – let the public glimpse what must have long been known internally.</p>
        <p class="vb-intro"><strong>d) Why, of all things, an organ that works unseen?</strong>
        Both the pancreas and the prostate – the two competing diagnoses – are among the
        organs that can develop disease for a long time without externally visible symptoms,
        often noticed only at an advanced stage. For a Social Three with Four-wing, whose
        entire life's work rested on the seamless maintenance of a flawless outward image, one
        reading suggests itself: falling ill in an organ that is itself hidden, sending no
        visible warning signs, fits a life in which everything inward – doubt, weakness, age,
        fear – remained strictly concealed behind a flawless outward facade. The body fell ill
        in a place as invisible as the truth he had concealed his whole life. This reading is
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Social Three's pattern inevitably leads to cancer –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Lagerfeld's case can show is a pattern that stands out again and again in practice
        wherever the need exists to conceal every weakness completely from the public – one
        possible explanation among many, not a verdict. The corresponding condition will be
        developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Lagerfeld did not know his own pattern – the social Three maintains its public image at any cost, and that is exactly what let him keep a cancer diagnosis secret from even his closest confidants for almost four years, rather than easing his pace even once. Someone who does not recognize their own need for a flawless public appearance hides even their own mortality behind it.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Lagerfeld's</strong> Social Three with Four-wing remained perceptible to the end
        in his own illness: a diagnosis apparently kept secret for nearly four years even
        from his own family, a public image kept flawlessly intact save for a single exception
        four weeks before his death, and a cause of death never officially confirmed to this
        day. The cheetah that held its pace until the last visible second – and withdrew only
        once no further sprint remained possible.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-karl-lagerfeld", label:"Portrait: Karl Lagerfeld (SO3w4) – life's work"},
        {route:"beruehmte-teresa-von-avila", label:"Portrait: Teresa von Ávila (SO3w4) – also kept working through severe illness"},
        {route:"krankheitsportraets-sean-connery", label:"Illness Portrait: Sean Connery (SO3w4) – same subtype"},
        {route:"krankheitsportraets-william-james", label:"Illness Portrait: William James (SO3w4) – same subtype"},
        {route:"krankheitsportraets-david-bowie", label:"Illness Portrait: David Bowie (SO1w2) – also secrecy, but artistically encoded rather than denied"},
        {route:"krankheitsportraets-ronald-reagan", label:"Illness Portrait: Ronald Reagan (SO9w8) – counter-model: direct disclosure rather than denial"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SO3"},
      ])}
    </div>
  `);
}

export function leonardBernsteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonard-bernstein-portrait.jpg" alt="Leonard Bernstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonard Bernstein</p>
        <p class="krim-portrait-typ">SX7w6 · Sexual Type 7 with Six-wing · 1918–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chimpanzee</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Animal correspondence: Chimpanzee" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonard Bernstein</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-leonard-bernstein">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as conductor, composer, and
        educator and his type structure in general. This page delves into a chapter only
        touched on there: decades of nearly limitless bodily excess that culminated in 1990 in
        advanced lung disease and an abrupt death – just days after he had publicly announced
        his retirement from conducting.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Bernstein</strong> is classified as the <strong>Sexual Type 7 with
        Six-wing</strong>. Naranjo called this subtype <em>Suggestibility</em>: complete
        merging with an idea, a moment, or an enthusiasm, with an intensity that knows no half
        measures. The Six-wing adds a bonding-oriented, almost missionary devotion. It was
        precisely this excess – the passion of the Seven – that became his physical undoing in
        the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Chain-smoking from a young age:</strong>
        Bernstein smoked up to four packs of cigarettes a day for decades – a habit he never
        seriously questioned despite his public status as a health role model.</p>
        <p class="vb-intro"><strong>b) Excessive alcohol consumption as a constant companion:</strong>
        Contemporaries consistently reported heavy, decades-long alcohol consumption that,
        alongside smoking, was a fixed part of his daily life.</p>
        <p class="vb-intro"><strong>c) Increasing breathing problems from the 1970s onward:</strong>
        Years before his actual diagnosis, colleagues noticed a noticeably declining physical
        stamina at concerts and rehearsals – a warning sign lost in the whirlwind of his
        workload.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Unchanged workload despite the diagnosis:</strong>
        When Bernstein was diagnosed with progressive emphysema, he barely changed his
        lifestyle – he continued conducting internationally, composing, and teaching at the
        Tanglewood Music Center.</p>
        <p class="vb-intro"><strong>b) Continued smoking despite medical warnings:</strong>
        Even after the diagnosis, Bernstein did not quit smoking – a behavior those around him
        repeatedly, but unsuccessfully, tried to change.</p>
        <p class="vb-intro"><strong>c) Growing exhaustion at public appearances:</strong>
        In his final years, colleagues and audiences noticed a growing physical exhaustion that
        Bernstein consistently played down rather than took seriously.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The coughing fit at his final concert:</strong>
        On 19 August 1990, Bernstein conducted the Boston Symphony Orchestra in Beethoven's
        Seventh Symphony at Tanglewood – against his doctors' explicit advice. In the middle of
        the final movement he had to stop due to a severe coughing fit; his assistant Carl
        St.Clair took over to finish the concert.</p>
        <p class="vb-intro"><strong>b) Retirement from conducting on 9 October 1990:</strong>
        Seven weeks after this collapse, Bernstein publicly announced his final retirement from
        conducting.</p>
        <p class="vb-intro"><strong>c) Death on 14 October 1990:</strong>
        Just five days after announcing his retirement, Leonard Bernstein died in his New York
        apartment of heart failure resulting from his advanced lung disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A farewell that left almost no time to say goodbye:</strong>
        The brief span of only five days between retirement and death meant the public only
        truly grasped the severity of his condition in hindsight.</p>
        <p class="vb-intro"><strong>b) Obituaries full of admiration, little discussion of the illness:</strong>
        Tributes after his death focused almost exclusively on his musical legacy – the
        difficult final months remained a footnote.</p>
        <p class="vb-intro"><strong>c) A final concert that became a symbol:</strong>
        That he performed against medical advice and had to give up mid-concert was retold
        again and again in retrospect as emblematic of his lifelong refusal to compromise.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The chimpanzee that could not stop, even at the very end:</strong>
        His entire career was marked by an inability to give up a project, a role, or a
        podium – exactly this pattern continued into his final weeks, when it had long since
        become a matter of his own health.</p>
        <p class="vb-intro"><strong>b) Medical advice against his own drive:</strong>
        He ignored his doctors' urgent warning ahead of the 19 August 1990 concert – canceling
        would have amounted, for him, to a surrender to his own mortality that he was not
        willing to accept.</p>
        <p class="vb-intro"><strong>c) No orderly retreat, but an abrupt ending:</strong>
        Instead of a calm, planned wind-down, his life ended in a sudden collapse in the middle
        of activity – the chimpanzee that stood at the podium until the very last second.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Three decades of bodily excess:</strong>
        From his youth until his death – four packs of cigarettes a day, excessive alcohol
        consumption, hardly any sleep, and a workload that spanned several parallel careers.
        The Seven's passion, <strong>gluttony</strong>, knew no brakes in Bernstein's case.</p>
        <p class="vb-intro"><strong>b) A heart that literally never rested:</strong>
        His death from heart failure, triggered by advanced lung disease, was the physical
        consequence of a life that had never taken its own limits seriously.</p>
        <p class="vb-intro"><strong>c) When the Seven turns into the One under chronic stress:</strong>
        When doctors urgently advised him against the 19 August 1990 concert, his refusal did
        not stem from a Seven's playful lightness, but from an almost rigid, duty-bound refusal
        to change the program. Someone who lives for decades in chronic bodily excess
        increasingly moves along their stress line toward their stress point – for the Seven,
        that is the One. This rigid "I will see it through, whatever happens" in his final
        weeks reads less like the free-spirited choice of a healthy Seven and more like the
        rigid duty-fulfillment of its stress point – with an unchanged core type of SX7w6.</p>
        <p class="vb-intro"><strong>d) Why the lungs, of all things?</strong>
        For a Sexual Seven whose entire vitality expressed itself through breath and physical
        ecstasy at the podium – he leapt, he threw himself bodily into the music – one
        interpretation suggests itself: the very organ that gave him the physical intensity
        with which he swept whole orchestras along became the stage for decline. This
        interpretation is a plausible reading, not a documented historical causal link, and is
        developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Sexual Seven pattern inevitably leads to lung disease –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Bernstein's case illustrates is a pattern in the environment surrounding an illness
        that keeps recurring in practice among people with a pronounced Sexual Seven – one of
        many possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Bernstein lived at a time when the Enneagram, as a modern personality model, was only
        just emerging in California – nothing suggests he ever consciously knew his own
        pattern. The Seven's excess ran entirely uncorrected through his life: smoking, drinking, and a
        boundless workload were never recognized as a recurring pattern, simply treated as
        obstacles to be pushed past. Someone who does not know their own restlessness as a
        pattern cannot correct course in time, even when their own body has long been sending
        clear warning signs.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Bernstein's</strong> Sexual Seven with Six-wing is legible once more in the
        course of his illness: an excess that knew no limit until his own body imposed one, and
        a final concert at which he stood at the podium quite literally until his last breath.
        The chimpanzee that swept every hall along with its intensity for an entire career –
        and whose own body was, in the end, the only thing that resisted its pull.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-leonard-bernstein", label:"Portrait: Leonard Bernstein (SX7w6) – life's work"},
        {route:"krankheitsportraets-morgan-freeman", label:"Illness Portrait: Morgan Freeman (SX7w6)"},
        {route:"krankheitsportraets-frans-de-waal", label:"Illness Portrait: Frans de Waal (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx7", label:"Subtype Profile SX7"},
      ])}
    </div>
  `);
}

export function mariahCareyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-mariah-carey-portrait.jpg" alt="Mariah Carey" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Mariah Carey</p>
        <p class="krim-portrait-typ">SE7w8 &middot; Self-Preservation Type 7 with Eight-wing &middot; b. 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Animal correspondence: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Mariah Carey</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-mariah-carey">Famous
        Personality Portrait</a> in this Compass. This page explores a chapter only
        touched on there: a bipolar II disorder diagnosed in 2001, which Carey kept
        secret for 17 years before speaking about it publicly in 2018.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Carey</strong> is assigned to the <strong>Self-Preservation Type 7 with
        Eight-wing</strong>. The SE7 secures practical reserves of possibilities for hard
        times; the Eight-wing adds assertiveness and the ability to control one's own
        vulnerability for a long time. This exact combination – years of disciplined
        control over her own public image – determined how long Carey kept her diagnosis
        private.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Breakdown in July 2001:</strong>
        Carey showed up in a manic state at her mother's house on July 25, 2001, and was
        subsequently hospitalized in Westchester County, New York.</p>
        <p class="vb-intro"><strong>b) Treatment at multiple hospitals:</strong>
        A twelve-day stay at Silver Hill Hospital in Connecticut followed, and in early
        September 2001 a further admission at UCLA Medical Center.</p>
        <p class="vb-intro"><strong>c) Bipolar II disorder diagnosis:</strong>
        In the course of this treatment, Carey was diagnosed with bipolar II disorder – a
        diagnosis she initially did not want to accept.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) 17 years of public silence:</strong>
        Carey kept the diagnosis to herself for nearly two decades, out of fear that
        "someone would expose" it, as she later described.</p>
        <p class="vb-intro"><strong>b) Continued artistic productivity:</strong>
        Despite the untreated or only partially treated condition, Carey continued
        releasing albums and touring internationally in the following years.</p>
        <p class="vb-intro"><strong>c) Isolation as a described accompanying condition:</strong>
        Carey herself described the time before her disclosure as marked by "denial and
        isolation."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Public disclosure in April 2018:</strong>
        In an interview with People magazine, Carey spoke publicly for the first time
        about her diagnosis and the long road to it.</p>
        <p class="vb-intro"><strong>b) Emphasis on treatment rather than dramatization:</strong>
        Carey described having surrounded herself with "positive people" and returned to
        music – a pragmatic, solution-oriented tone rather than a dramatic illness
        narrative.</p>
        <p class="vb-intro"><strong>c) Continued career after the disclosure:</strong>
        Even after 2018, Carey remained musically and publicly active, without
        withdrawing from the spotlight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Broad media response to the disclosure:</strong>
        Carey's interview was picked up internationally and contributed to public
        de-stigmatization of bipolar disorder.</p>
        <p class="vb-intro"><strong>b) A dual public image:</strong>
        For almost two decades, the public primarily saw Carey as a pop icon – the mental
        illness behind it was invisible until she herself decided otherwise.</p>
        <p class="vb-intro"><strong>c) Control over the timing of her own story:</strong>
        Carey herself determined when and how her diagnosis became public – no forced
        disclosure through third parties.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Reserves of control instead of visible vulnerability:</strong>
        The same SE7 logic of securing reserves for hard times showed in Carey as years
        of careful control over what became known about her health.</p>
        <p class="vb-intro"><strong>b) The Eight-wing and the long refusal of weakness:</strong>
        The Eight-wing's assertiveness explains why Carey did not allow the diagnosis to
        become public for almost two decades – control over her own image weighed heavier
        than early openness.</p>
        <p class="vb-intro"><strong>c) A self-determined moment of openness:</strong>
        When Carey finally opened up, it happened at a time and in a setting of her own
        choosing – control remained intact even in the act of disclosure.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A voice that long concealed its own inner life:</strong>
        Carey's entire public career rested on flawless control over voice and image –
        precisely her own uncontrollable inner life had to remain hidden for years so
        that this image could stay intact.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Francis
        Bacon</a> (also SE7w8) processed his excessive, self-destructive life for a long
        time without publicly speaking of the despair behind it; Carey kept her own
        mental illness secret with the same basic stance – control over her public image
        until her own conditions for openness were met. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-francis-bacon">Illness Portrait of Francis Bacon</a>.</p>
        <p class="vb-intro"><strong>c) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation Seven's pattern inevitably leads to
        bipolar disorder – <strong>anyone can develop any mental illness, regardless of
        subtype.</strong> What Carey's case illustrates is a pattern in how a pronounced
        Self-Preservation Seven with an Eight-wing tends to handle a burdensome diagnosis –
        one of many possible interpretations, not a verdict. The corresponding illness
        picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Carey does not know her own pattern as an Enneagram structure – the
        Self-Preservation Seven with an Eight-wing reflexively controls what leaks out
        about her own vulnerability instead of ever disclosing it earlier, and continues
        to live out a modified version of exactly this pattern today. Someone who does
        not recognize their own tendency to keep control over their own image as a
        pattern carries a serious diagnosis alone for correspondingly longer.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Seven with an Eight-wing explains much about how
        <strong>Mariah Carey</strong> handles her own diagnosis: a woman whose entire
        public existence rested on control over her own image kept her own vulnerability
        under control for almost two decades – the gorilla that shows what truly moves it
        only when it is ready to.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-mariah-carey", label:"Portrait: Mariah Carey (SE7w8)"},
        {route:"krankheitsportraets-francis-bacon", label:"Illness Portrait: Francis Bacon (SE7w8) – the same long concealment"},
        {route:"krankheitsportraets-elton-john", label:"Illness Portrait: Elton John (SE7w6) – same core type, different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se7", label:"Subtype Profile SE7"},
      ])}
    </div>
  `);
}

export function morganFreemanKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-morgan-freeman-portrait.jpg" alt="Morgan Freeman" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Morgan Freeman</p>
        <p class="krim-portrait-typ">SX7w6 &middot; Sexual Type 7 with Six-wing &middot; b. 1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chimpanzee</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Animal correspondence: Chimpanzee" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Morgan Freeman</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-morgan-freeman">Famous
        Personality Portrait</a> in this Compass. This page explores a chapter only
        touched on there: a severe car accident in 2008 left him with fibromyalgia and
        chronic nerve pain in his left arm – a condition Freeman has lived with visibly
        in public ever since.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Freeman</strong> is assigned to the <strong>Sexual Type 7 with Six-wing</strong>.
        The SX7 seeks intensity in immediate, personal connection; the Six-wing adds
        loyalty and the ability to handle setbacks calmly. This exact combination –
        unrestrained continued work paired with quiet loyalty to one's own craft –
        determined how Freeman responded to his chronic pain.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The car accident of 2008:</strong>
        Freeman's car flipped on a rural road near his home in the Mississippi Delta; he
        and his passenger were severely injured.</p>
        <p class="vb-intro"><strong>b) Surgery on the left hand:</strong>
        The injuries required surgery on his left hand, along with lasting nerve
        damage.</p>
        <p class="vb-intro"><strong>c) Fibromyalgia diagnosis in the aftermath:</strong>
        In the months following the accident, Freeman was diagnosed with fibromyalgia – a
        chronic pain condition that showed up mainly in his left arm.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A compression glove as a constant companion:</strong>
        Since then, Freeman has regularly worn a compression glove on his left hand at
        public appearances – a medical necessity, not a fashion choice.</p>
        <p class="vb-intro"><strong>b) Open description of the pain:</strong>
        In a widely quoted interview, Freeman described the pain as "excruciating," shooting
        "up and down the arm."</p>
        <p class="vb-intro"><strong>c) Unchanged acting career:</strong>
        Despite the diagnosis, Freeman continued making numerous films in the following
        years without a discernible reduction in his workload.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Public normalization instead of concealment:</strong>
        Freeman repeatedly spoke openly about his fibromyalgia rather than hiding it – a
        relatively unusual approach to chronic pain for a celebrity of his generation.</p>
        <p class="vb-intro"><strong>b) Continued physically demanding roles:</strong>
        Even after the diagnosis, Freeman continued to take on roles requiring physical
        presence and long shooting schedules.</p>
        <p class="vb-intro"><strong>c) No withdrawal from public life:</strong>
        Freeman remained visible in the media, continued giving interviews, and accepted
        public honors, the visible glove always part of the picture.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A symbol that became a signature:</strong>
        The glove repeatedly became a visible identifying mark in media coverage – a
        quiet but unmistakable testament to his own vulnerability.</p>
        <p class="vb-intro"><strong>b) Attention for an often invisible illness:</strong>
        Freeman's openness helped raise awareness of fibromyalgia – a condition often not
        outwardly visible – among a broad audience.</p>
        <p class="vb-intro"><strong>c) No discernible break in his career:</strong>
        Freeman's filmography shows no discernible break in scope or ambition of roles
        taken on even after 2008.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Intensity that cannot be slowed:</strong>
        The same SX7 energy that seeks immediate, unfiltered experience also determined
        Freeman's response to chronic pain – continued work rather than withdrawal.</p>
        <p class="vb-intro"><strong>b) The Six-wing and quiet loyalty to his own craft:</strong>
        The Six-wing's loyalty showed in Freeman remaining true to his profession and
        audience rather than withdrawing for health reasons.</p>
        <p class="vb-intro"><strong>c) Openness as its own form of intensity:</strong>
        Instead of hiding the pain, Freeman made it part of his public presence – also a
        form of unfiltered, direct experience.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A hand that became both tool and wound:</strong>
        For an actor whose presence also rests on gesture and body language, the injury
        struck precisely the tool with which he brings his roles to physical life.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Leonard
        Bernstein</a> (also SX7w6) kept smoking despite a progressing lung emphysema
        almost until his death and conducted almost until the end; Freeman responded to
        his own chronic condition with the same basic stance – no reduction of his own
        pace, but continued work despite a palpable physical limit. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-bernstein">Illness Portrait of Leonard Bernstein</a>.</p>
        <p class="vb-intro"><strong>c) Placing it without determinism:</strong>
        This does not mean that the Sexual Seven's pattern inevitably leads to chronic
        pain conditions – <strong>anyone can suffer any illness or injury, regardless of
        subtype.</strong> What Freeman's case illustrates is a pattern in how a
        pronounced Sexual Seven with a Six-wing tends to handle chronic pain – one of
        many possible interpretations, not a verdict. The corresponding illness picture
        is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Freeman does not know his own pattern as an Enneagram structure – the Sexual
        Seven with a Six-wing reflexively seeks full, unfiltered experience instead of
        ever taking chronic pain as a reason to slow down, and has lived out exactly this
        pattern unchanged for over a decade and a half. Someone who does not recognize
        their own search for intensity as a pattern cannot pause even in the face of
        chronic pain.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Seven with a Six-wing explains much about how <strong>Morgan
        Freeman</strong> has handled his own fibromyalgia: a man whose entire presence
        rests on immediate intensity makes no secret of the visible compression glove –
        the chimpanzee that keeps climbing through the branches, even with an aching
        arm.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-morgan-freeman", label:"Portrait: Morgan Freeman (SX7w6)"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Illness Portrait: Leonard Bernstein (SX7w6) – the same pattern of unrestrained continued work"},
        {route:"krankheitsportraets-frans-de-waal", label:"Illness Portrait: Frans de Waal (SX7w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx7", label:"Subtype Profile SX7"},
      ])}
    </div>
  `);
}

export function nikolaTeslaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-nikola-tesla-portrait.jpg" alt="Nikola Tesla" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Nikola Tesla</p>
        <p class="krim-portrait-typ">SO7w6 · Social Type 7 with Six-wing · 1856–1943</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Nikola Tesla</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-nikola-tesla">famous-personality portrait</a>
        – that page covers his groundbreaking technical life's work and his vision of free
        energy for all humanity. This page goes deeper into a chapter mentioned there only in
        passing: a progressive obsessive-compulsive disorder with pronounced germophobia that
        drove him into increasing isolation over decades, until he died impoverished and
        nearly forgotten, alone in a New York hotel room.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Tesla</strong> is assigned to the <strong>Social Type 7 with
        Six-wing</strong>. SO7 sets aside its own pleasure-seeking to serve a larger mission –
        for Tesla that was free energy for the whole of humanity; the Six-wing translates
        vigilance and worry into control, order, and ritual. This same combination also
        determined how his progressive obsessive-compulsive disorder developed: not as a
        sudden collapse, but as an ever more tightly meshed, self-imposed system for
        controlling a world that felt increasingly overwhelming – and as a shift toward the
        Seven's stress point, One: restless inventive drive turned, over time, into rigid
        inflexibility.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Compulsive behaviors documented already in middle age:</strong>
        Contemporaries reported Tesla's habit of counting his steps while walking and
        calculating the volume of his soup before eating it – behaviors that solidified into
        fixed rituals over the years.</p>
        <p class="vb-intro"><strong>b) Compulsion toward divisibility by three:</strong>
        Tesla worked almost exclusively with numbers divisible by three; deviations from this
        demonstrably caused him massive discomfort – an early sign of a hardening compulsive
        structure.</p>
        <p class="vb-intro"><strong>c) Growing fear of germs:</strong>
        Already in his middle years, Tesla began avoiding doorknobs and handshakes and
        washing his hands for hours – a germophobia that intensified further over the
        decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The loss of Wardenclyffe Tower as a turning point:</strong>
        When J.P. Morgan withdrew his financial support because Tesla planned to distribute
        wireless energy freely, he lost his life's work – a rupture after which his
        withdrawal from society noticeably accelerated.</p>
        <p class="vb-intro"><strong>b) Moving from hotel to hotel:</strong>
        In his final decades, Tesla lived in isolation across a series of New York hotel
        rooms, often forced to move because he could no longer pay the bills.</p>
        <p class="vb-intro"><strong>c) Astronomical expenses for injured pigeons:</strong>
        Despite increasing poverty, Tesla spent considerable sums nursing injured or sick
        pigeons back to health in his room – one of the last remaining forms of care he still
        allowed himself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Complete withdrawal from human closeness:</strong>
        Tesla remained unmarried throughout his life and explicitly described intimate
        closeness as a disruption to his concentration – in his final years, his social life
        consisted almost exclusively of feeding pigeons in the park.</p>
        <p class="vb-intro"><strong>b) The white dove as his only remaining bond:</strong>
        Among the many pigeons he cared for, Tesla developed a particularly intense
        attachment to a single white dove, which he called "the love of his life" – a phrase
        he also repeated word for word to journalists.</p>
        <p class="vb-intro"><strong>c) Death at 86, alone in his hotel room:</strong>
        Tesla died on January 7, 1943, in his room at the Hotel New Yorker – his death was
        only discovered days later by a chambermaid.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Died impoverished and nearly forgotten:</strong>
        The man whose alternating current system still powers billions of households
        worldwide today died heavily in debt and largely vanished from public awareness.</p>
        <p class="vb-intro"><strong>b) Posthumous seizure of his papers:</strong>
        Immediately after his death, the FBI seized his scientific records out of concern
        they might contain militarily relevant technology – one final, involuntary public
        appearance for a man who had avoided the public throughout his life.</p>
        <p class="vb-intro"><strong>c) Posthumous recognition only decades later:</strong>
        Only in the following decades was Tesla's contribution to modern technology fully
        recognized – too late to give him himself the recognition his work deserved.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The mission defended into complete isolation:</strong>
        The same radical consistency with which Tesla held to his vision of free energy for
        the whole of humanity also determined how completely he cut himself off from human
        closeness in the end – SO7 clings to its own mission, even when the price is its own
        connection to the world.</p>
        <p class="vb-intro"><strong>b) The Six-wing and the system as a final refuge:</strong>
        His compulsive behaviors – counting, divisibility by three, avoiding germs – were not
        random quirks, but an increasingly tightly meshed system for controlling a world that
        felt ever more threatening to him. Where a healthy Six-wing translates vigilance into
        reliable loyalty to one's own cause, in Tesla the control system itself became the
        only reliable anchor.</p>
        <p class="vb-intro"><strong>c) A single bond instead of a shared project:</strong>
        Unlike what would be typical for the Social Seven – finding meaning and belonging
        through a shared project or a group – Tesla did not replace his entire human
        relationship network with a new community, but with a single, extraordinarily intense
        bond – the white dove carried the entire weight of what constitutes an entire social
        life for other people.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A mind that protected itself from losing its mission:</strong>
        Tesla's entire life was shaped by the conviction that his vision of an energy supply
        for the whole of humanity needed protection – his obsessive-compulsive disorder can
        be read as the ever-stricter system with which he tried to maintain this protection,
        until the system itself became isolation.</p>
        <p class="vb-intro"><strong>b) Control over his environment as a substitute for control over closeness:</strong>
        A man who explicitly described intimate human closeness as a threat to his
        concentration instead developed an ever more detailed control over his physical
        environment – numbers, germs, rituals – that promised exactly the security human
        relationships could not offer him.</p>
        <p class="vb-intro"><strong>c) Why contact with the outside world, of all things?</strong>
        For a Social Seven with Six-wing whose entire strength rested on a mission for
        humanity as a whole, one interpretation suggests itself: precisely direct physical
        contact with the outside world – doorknobs, handshakes, other people – became the
        site of fear, while his inner, self-constructed world of thought remained the only
        place he felt completely safe. This interpretation is a plausible reading, not a
        documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the Social Seven inevitably leads to
        obsessive-compulsive disorder – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Tesla's case shows is a pattern in how a pronounced Social
        Seven with Six-wing, under chronic stress, repeatedly deals with progressive
        psychological isolation – one possible reading among many, not a verdict. The
        corresponding illness profile is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Tesla did not know his own pattern – Social Seven with Six-wing reflexively defends
        its own mission against any disruption experienced as threatening, rather than ever
        recognizing its own isolation as a pattern, and he lived out exactly this pattern
        unchanged until his lonely death. Whoever does not recognize their own need to
        protect their mission at any cost as a pattern cannot set it aside even in the face
        of their own loneliness.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Social Seven with Six-wing explains much about the course of
        <strong>Tesla's</strong> own illness: a man whose entire strength rested on a mission
        for the whole of humanity defended that mission so consistently that in the end no
        one could get close enough – the beaver that wanted to give unlimited energy to all
        of humanity, and whose own heart in the end depended on a single bird.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-nikola-tesla", label:"Portrait: Nikola Tesla (SO7w6) – inventor"},
        {route:"krankheitsportraets-moliere", label:"Illness Portrait: Molière (SO7w6) – same subtype"},
        {route:"krankheitsportraets-george-gershwin", label:"Illness Portrait: George Gershwin (SO7w6) – same subtype, opposite course"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function peterFalkKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-peter-falk-portrait.jpg" alt="Peter Falk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Peter Falk</p>
        <p class="krim-portrait-typ">SO9w1 · Social Type 9 with One-wing · 1927–2011</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Buffalo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Animal correspondence: Buffalo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Peter Falk</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-peter-falk">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as Columbo and his type structure
        in general. This page delves into a chapter that page does not address: an Alzheimer's
        diagnosis in 2007 that marked his final years, and a publicly fought custody dispute
        over his care that stood in stark contrast to the fundamental pattern of his entire
        life.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Falk</strong> is classified as the <strong>Social Type 9 with One-wing</strong>.
        Naranjo called this subtype <em>Participation</em>: the ability to fit into any group
        and find peace there without losing one's own identity. The One-wing adds a quiet,
        unshakeable inner compass. It was precisely this need for harmony and belonging that
        fell into a bitter conflict in his final years – one he could no longer mediate
        himself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First signs of cognitive decline from the mid-2000s:</strong>
        According to those close to him, Falk showed early signs of memory problems some
        years before the official diagnosis, initially interpreted as age-related
        forgetfulness.</p>
        <p class="vb-intro"><strong>b) Diagnosis in 2007:</strong>
        In 2007, Falk was officially diagnosed with progressive dementia, later confirmed in
        court documents as Alzheimer's disease.</p>
        <p class="vb-intro"><strong>c) Withdrawal from public life:</strong>
        As the illness progressed, Falk increasingly withdrew from public appearances – a
        quiet departure without much announcement, fitting for a man who had never sought
        the spotlight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A court-appointed conservator:</strong>
        In 2008, his wife Shera Falk petitioned the court for conservatorship over his
        affairs – a step considered necessary given the progressing illness.</p>
        <p class="vb-intro"><strong>b) A public dispute over visitation rights:</strong>
        A legal battle subsequently broke out between Shera Falk and Catherine Falk, his
        daughter from his first marriage, over her access to her ill father – a conflict
        followed closely in the press.</p>
        <p class="vb-intro"><strong>c) A life increasingly determined by others:</strong>
        Where Falk had spent his whole life deciding for himself whom he spent time with,
        that decision increasingly lay with others in his final years – a reversal that
        contradicted the core of his personality.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Progressive loss of memory of his own career:</strong>
        According to those in his close circle, in his final years Falk at times no longer
        recognized his own most famous role – a particularly painful detail for a man whose
        life had been so bound up with this one character.</p>
        <p class="vb-intro"><strong>b) Withdrawal into home care:</strong>
        Falk spent his final years largely secluded in his Beverly Hills home, cared for by
        his wife and a small, fixed circle of caregivers.</p>
        <p class="vb-intro"><strong>c) Death on 23 June 2011:</strong>
        Peter Falk died at age 83 in his Beverly Hills home from the effects of his
        Alzheimer's disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A public dispute over a man who never disputed:</strong>
        The custody conflict over Falk's final years was widely discussed in the media – a
        striking contrast to the image of the warm, never conflict-seeking man he had
        embodied his whole life.</p>
        <p class="vb-intro"><strong>b) An obituary that barely mentioned the illness:</strong>
        Public tributes after his death focused almost exclusively on his life's work as
        Columbo – the Alzheimer's years remained a rather quiet chapter, only becoming known
        afterward.</p>
        <p class="vb-intro"><strong>c) An image that remained intact despite everything:</strong>
        Despite the illness and the family dispute, Peter Falk's public image remained
        largely unchanged: the down-to-earth, curious, never arrogant man he had been his
        whole life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The buffalo that lost control over its own environment:</strong>
        Where Falk had possessed, his whole life, the ability to fit into any environment and
        bring peace there, in his final years he could no longer mediate as that very peace
        broke apart around him.</p>
        <p class="vb-intro"><strong>b) A conflict the illness itself made possible:</strong>
        The custody dispute arose not despite but because of the illness – only the loss of
        his own decision-making capacity opened the space for a conflict he would never have
        permitted during his healthy years.</p>
        <p class="vb-intro"><strong>c) Stillness to the very end:</strong>
        Despite the public dispute surrounding him, little emerged from the center of events
        itself – Falk remained, as he had been his whole life, the calm center around which
        everything else moved.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Four years between diagnosis and death:</strong>
        From his 2007 diagnosis to his death in 2011, Falk lived four years with an illness
        that attacked exactly the ability that had defined his whole life and his most
        famous role: attentive, watchful presence.</p>
        <p class="vb-intro"><strong>b) A custody dispute as the counter-image to his own life pattern:</strong>
        Falk's entire life was marked by the ability to defuse conflict rather than fuel it.
        The public dispute over his care in his final years was the exact opposite – a
        conflict that escalated without his active mediation.</p>
        <p class="vb-intro"><strong>c) A memory that took his life's achievement with it:</strong>
        For a man whose Columbo character lived on patient, precise observation, there is a
        particularly bitter irony in an illness that attacks exactly these faculties first.</p>
        <p class="vb-intro"><strong>d) Why memory, of all things?</strong>
        For a Social Nine with One-wing whose entire identity rested on the ability to
        attentively read and place every situation, one interpretation suggests itself: the
        very faculty that let him tune into any environment while still judging clearly
        became the stage for decline – leaving behind an environment that fell into open
        conflict without his mediating presence. This interpretation is a plausible reading,
        not a documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Social Nine pattern inevitably leads to Alzheimer's –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Falk's case illustrates is a pattern in the environment surrounding an illness that
        keeps recurring in practice among people with a pronounced Social Nine – one of many
        possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Falk did not know his own pattern – the Social Nine finds its peace by fitting into
        any environment and quietly mediating there, without ever standing at the center of
        a conflict itself. Precisely because he never consciously recognized this mediating
        role as his own pattern, but simply lived it, he could no longer protect it the
        moment the illness took away that very ability. Someone who does not know their own
        need for harmony as a pattern also cannot actively safeguard it when circumstances
        need it most.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Falk's</strong> Social Nine with One-wing is legible once more in the course
        of his illness: an illness that destroyed exactly the attentive, mediating presence
        that carried his whole life and his most famous role, and a family dispute that broke
        out the moment that presence was no longer there to prevent it. The buffalo that fit
        into every herd throughout its life – and whose own herd fell into conflict only once
        it could no longer mediate.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-peter-falk", label:"Portrait: Peter Falk (SO9w1) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so9", label:"Subtype Profile SO9"},
      ])}
    </div>
  `);
}

export function ronaldReaganKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ronald-reagan-portrait.jpg" alt="Ronald Reagan – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ronald Reagan</p>
        <p class="krim-portrait-typ">SO9w8 · Social Type 9 with Eight-wing · 1911–2004</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Buffalo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Animal correspondence: Buffalo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ronald Reagan</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-ronald-reagan">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only briefly mentioned there: in 1994,
        Reagan publicly announced that he had Alzheimer's disease – in a handwritten letter to
        the American public that still ranks among the most moving political farewell texts of
        recent US history.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Reagan</strong> is classified as the <strong>Social Nine with Eight-wing</strong>
        – the same subtype as <a href="javascript:void(0)" data-route="beruehmte-wilma-mankiller">Wilma
        Mankiller</a> in this Compass. Naranjo called the Social Nine <em>Participation</em>:
        she experiences herself most completely as part of a larger whole and gives others the
        feeling of belonging too. The Eight-wing adds the directness and courage to speak
        clearly at the decisive moment – a clarity that served him especially well in dealing
        with his own diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Turned outward, attuned to belonging:</strong>
        Reagan's gaze always sought connection – to the audience, the nation, the person in
        front of him – even as he himself knew this ability would increasingly slip away.</p>
        <p class="vb-intro"><strong>b) Clarity at the decisive moment:</strong>
        The 1994 farewell letter is remarkable for its directness – no evasion, no softening
        language, but a clear, public naming of his own diagnosis. The Eight-wing enabled
        exactly this openness, where many other politicians of his generation would have
        concealed an illness of this kind.</p>
        <p class="vb-intro"><strong>c) Withdrawal from public life, without bitterness:</strong>
        After the diagnosis, Reagan withdrew almost entirely from public life – typical Social
        Nine: no fight for one's own visibility, but a quiet farewell from the stage.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The diagnosis as a late turning point:</strong>
        Reagan had already been out of office for five years when he was diagnosed in 1994 –
        the illness struck him at a stage of life meant to be a quiet coda to an eventful
        career.</p>
        <p class="vb-intro"><strong>b) Public openness as a deliberate choice:</strong>
        Reagan could just as easily have kept the diagnosis private. That he made it public
        followed the same impulse with which he had created belonging as president – even in
        his own suffering, he did not want to exclude the nation.</p>
        <p class="vb-intro"><strong>c) Ten years of near-total withdrawal:</strong>
        From the diagnosis in 1994 until his death in 2004, Reagan spent most of his time out
        of the public eye, cared for by his wife Nancy Reagan.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) "The journey into the sunset of my life":</strong>
        This phrase from the farewell letter became one of the most quoted sentences in
        American political history – language that translated even his own illness into an
        image of belonging and peace, rather than struggle or despair.</p>
        <p class="vb-intro"><strong>b) A legacy for research:</strong>
        Reagan's public disclosure contributed significantly to reducing the social stigma
        around Alzheimer's and to increasing research funding in the US – a benefit to the
        community that reached far beyond his own fate.</p>
        <p class="vb-intro"><strong>c) Nancy Reagan as a constant presence:</strong>
        The close, decades-long bond with his wife remained his central support to the end –
        typical Social Nine: identity fed by reliable belonging, not by self-sufficiency.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) An image that remained in collective memory:</strong>
        The farewell letter still shapes how Americans remember Reagan's final years – not as
        decline, but as a dignified, deliberately chosen withdrawal.</p>
        <p class="vb-intro"><strong>b) De-stigmatizing an illness rarely discussed publicly:</strong>
        At a time when dementia was hardly discussed in public, Reagan's openness made the
        illness more socially acceptable – a rare case in which personal suffering directly
        produced a communal benefit.</p>
        <p class="vb-intro"><strong>c) An obituary that began during his lifetime:</strong>
        Because his final ten years were barely visible in public, Reagan's public image had
        already shifted, before his death in 2004, toward that of a historical legacy rather
        than an active figure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Withdrawal instead of resistance:</strong>
        Unlike some Illness Portraits in this Compass in which the subject fought until the
        end, Reagan's case shows the other side of the Nine: a peaceful letting go once
        withdrawal became unavoidable.</p>
        <p class="vb-intro"><strong>b) The fusion of person and office dissolved:</strong>
        The illness gradually separated what had once constituted Reagan's identity – the
        close bond between his own person and his role representing an entire country.</p>
        <p class="vb-intro"><strong>c) Silence as a final message:</strong>
        The growing public invisibility itself became a statement – a man who once made his
        impact through sheer presence withdrew, in the end, as quietly as he had once
        appeared.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A ten-year, publicly announced farewell:</strong>
        Reagan announced his own diagnosis in 1994 and then lived another ten years with
        advancing Alzheimer's, until his death in 2004 at age 93.</p>
        <p class="vb-intro"><strong>b) The letter as a final act of great communication:</strong>
        The handwritten letter of November 5, 1994 was both farewell and the final major
        communicative act of a man remembered as "the Great Communicator" – one last,
        deliberate message to the community, before the ability to communicate itself was
        lost.</p>
        <p class="vb-intro"><strong>c) Public openness instead of concealment:</strong>
        Unlike many other Illness Portraits in this Compass, where the condition stayed
        concealed for years, Reagan chose the opposite path – typical Social Nine: his own
        diagnosis itself became an act of belonging, shared with an entire nation.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-wilma-mankiller">Wilma Mankiller</a>
        (SO9w8) likewise led her community through its most important decade while her own body
        repeatedly brought her to the brink of death – myasthenia gravis, kidney disease,
        cancer. Both cases show the same SO9w8 pattern: one's own illness does not become a
        reason to withdraw from the community but is, in some form, shared with it – for
        Mankiller through persistent continuation despite illness, for Reagan through the
        deliberate, public disclosure of his own diagnosis.</p>
        <p class="vb-intro"><strong>e) Why memory, of all things?</strong>
        Reagan's entire political impact rested on his ability to give people a sense of
        belonging – to experience himself as part of a larger whole and to transfer that
        feeling onto others. Alzheimer's attacks exactly the capacity that this requires: the
        memory that allows one's own life, one's own story, one's own bonds to be experienced
        as a coherent whole. For a Social Nine, whose identity is fed by merging into something
        larger, it is tempting to read exactly an illness that gradually dissolves the self out
        of its own life story as an intensification of her own life pattern: where the SO9
        dissolves herself into community and belonging throughout her life to find peace, in
        the end the memory of that very belonging dissolved too – no longer chosen freely, but
        unstoppable. This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the Social Nine's pattern inevitably leads to Alzheimer's or other
        forms of dementia – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Reagan's case can show is a pattern that stands out again and
        again in practice wherever identity is primarily fed by belonging – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Reagan did not know his own pattern – yet the social Nine, who typically avoids conflict and attention, did not evade this particular diagnosis, but made it public in a personal letter before withdrawing definitively from the spotlight. That, too, can be unconscious pattern behavior: the one conscious act of openness, followed by the familiar retreat into silence.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Nine with Eight-wing shows itself in <strong>Reagan</strong> in how he handled
        his own illness as well: a public, courageous disclosure of his own diagnosis, a peaceful
        withdrawal instead of a fight, and an illness that dissolved exactly the ability his
        entire life's work rested on – experiencing connection to others as part of his own
        self. The buffalo who held an entire nation together lost, in the end, the memory of
        himself – and became, precisely through this last, open gesture, once more what he had
        been his whole life: a man who did not exclude others, not even in his own decline.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ronald-reagan", label:"Portrait: Ronald Reagan (SO9w8) – life's work"},
        {route:"beruehmte-wilma-mankiller", label:"Portrait: Wilma Mankiller (SO9w8)"},
        {route:"krankheitsportraets-willy-brandt", label:"Illness Portrait: Willy Brandt (SO9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so9", label:"Subtype Profile SO9"},
      ])}
    </div>
  `);
}

export function stephenHawkingKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-stephen-hawking-portrait.jpg" alt="Stephen Hawking" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. Stephen Hawking</p>
        <p class="krim-portrait-typ">SO5w6 · Social Type 5 with Six-wing · 1942–2018</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Stephen Hawking</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-stephen-hawking">famous-personality portrait</a>
        – that page covers his scientific life's work, from Hawking radiation to "A Brief
        History of Time." This page traces a thread that page only briefly picks up:
        amyotrophic lateral sclerosis (ALS), a progressive disease of the nerve cells that
        increasingly paralyzes the muscles. Diagnosed at 21 and given a life expectancy of
        two years, he lived another 55 years – with complete loss of voluntary muscle
        control, but an unbroken sharpness of mind until the very end.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hawking</strong> is assigned to the <strong>Social Type 5 with Six-wing</strong>.
        SO5 finds security in knowledge shared with a larger community – not as a recluse,
        but as someone who makes their understanding publicly accessible. The Six-wing adds
        systematic vigilance and the ability to build reliable, tested systems and to trust
        a small, loyal circle. Exactly this combination of a public mission to share
        knowledge and methodical system-building shaped Hawking's handling of his own
        illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Stumbling and slurred speech:</strong>
        In his final year at Oxford, around 1962/63, the twenty-one-year-old Hawking noticed
        increasing clumsiness – he stumbled for no apparent reason, and his speech grew
        noticeably slurred during a Christmas visit home.</p>
        <p class="vb-intro"><strong>b) A devastating diagnosis:</strong>
        After weeks of examinations at St. Bartholomew's Hospital in London, doctors
        diagnosed ALS in 1963 and gave him a life expectancy of about two to three more
        years.</p>
        <p class="vb-intro"><strong>c) A brief spell of despair, then a return to work:</strong>
        Hawking later described a period of deep depression after the diagnosis – followed
        by a deliberate decision to return to his doctoral work on cosmology while time
        remained.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A slow but unstoppable loss of muscle control:</strong>
        Over the following decades, Hawking gradually lost control of his arms, legs, and
        eventually nearly all voluntary muscles – increasingly reliant on a wheelchair from
        the mid-1960s onward.</p>
        <p class="vb-intro"><strong>b) The loss of his own voice:</strong>
        In 1985, while on a research visit to Geneva, Hawking contracted pneumonia; the
        emergency tracheotomy that saved his life irreversibly cost him his natural speech.</p>
        <p class="vb-intro"><strong>c) A voice from the computer:</strong>
        A speech synthesizer, first controlled by a hand switch and later by a single
        movable cheek muscle, became his sole remaining channel of communication – complete
        with the now world-famous, monotone synthetic computer voice he deliberately kept
        even after more natural-sounding alternatives became available.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) A bestseller despite near-total paralysis:</strong>
        In 1988, already largely paralyzed and dependent on the speech synthesizer, Hawking
        published "A Brief History of Time," one of the best-selling popular-science books
        of all time – millions of copies in over forty languages.</p>
        <p class="vb-intro"><strong>b) A reliable system of people and technology:</strong>
        To keep working, Hawking spent decades building a carefully coordinated, very small
        team of caregivers, technical assistants, and doctoral students who maintained his
        communication system and accompanied him around the clock – a highly systematized
        way of life built on reliability rather than spontaneity.</p>
        <p class="vb-intro"><strong>c) Public presence rather than retreat:</strong>
        Rather than withdrawing from public life as his illness progressed, Hawking sought
        it out ever more actively: lectures, television appearances, even guest spots on
        "Star Trek: The Next Generation" and "The Big Bang Theory," and a 2007 zero-gravity
        flight aboard a modified aircraft – knowledge and experience were meant to be
        shared, not kept private.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) 55 years against every medical prognosis:</strong>
        Rather than the originally predicted two to three years, Hawking lived until 14
        March 2018 – an extraordinarily long disease course whose exact reasons remain not
        fully understood to this day.</p>
        <p class="vb-intro"><strong>b) The Lucasian Chair until retirement:</strong>
        From 1979 to 2009, Hawking held the Lucasian Chair of Mathematics at Cambridge, the
        very chair once held by Isaac Newton (SO5w6) – an institutional continuity spanning
        centuries, for which a social Five with a Six-wing has a particular affinity:
        belonging to a reliable, tested institution rather than to fleeting personal fame.</p>
        <p class="vb-intro"><strong>c) A public legacy beyond death:</strong>
        Hawking's ashes were interred in Westminster Abbey next to the graves of Isaac
        Newton and Charles Darwin (SE5w6) – a posthumous belonging to exactly the community of great
        scientists he had felt connected to throughout his life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Signature</h3>
        <p class="vb-intro"><strong>a) Security through shared knowledge rather than retreat:</strong>
        Unlike a self-preservation or sexual Five, who would tend to withdraw, Hawking
        sought contact with an ever-larger audience as his illness progressed – the
        SO5-typical conviction that knowledge only reaches its full value once shared.</p>
        <p class="vb-intro"><strong>b) The Six-wing as system-builder:</strong>
        The methodical, meticulously tested construction of his communication system – from
        the hand switch to the cheek-muscle-controlled speech computer – clearly bears the
        Six-wing's signature: not spontaneous improvisation, but the patient building of a
        system one can rely on, together with a small, loyal circle of trusted people.</p>
        <p class="vb-intro"><strong>c) Control through understanding one's own condition:</strong>
        Hawking rarely spoke publicly about his illness as personal suffering, but rather
        analytically, almost as if it were another physical phenomenon – the familiar SO5
        strategy of processing existential threat through intellectual distance.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A diagnosis right at the start of adult life:</strong>
        Unlike many other illness portraits in this Compass, where a disease creeps into a
        life already fully lived over decades, Hawking's entire adult life stood under the
        sign of his diagnosis from the start – his scientific career and his illness began
        almost simultaneously.</p>
        <p class="vb-intro"><strong>b) A boundary known for decades, never repressed:</strong>
        From the 1963 diagnosis to his death in 2018, Hawking lived with an illness he
        neither concealed nor dramatized – much like Albert Einstein (SO5w4), he took note
        of it and built it into a functioning system of work and daily life.</p>
        <p class="vb-intro"><strong>c) Work as a constant through every physical change:</strong>
        Whether with still-mobile hands in the 1960s or, decades later, with a single
        controllable cheek muscle – physics research itself remained the load-bearing
        constant through every stage of loss.</p>
        <p class="vb-intro"><strong>d) Why the motor nervous system, of all things?</strong>
        For a social Five with a Six-wing, whose sense of security arises from systems of
        knowledge and reliable structure, one interpretation suggests itself: precisely the
        system that translates thought into action – the nerve pathways that steer the body
        – increasingly lost its function, while the mind itself remained entirely untouched
        by the disease. The response was exemplary SO5w6: building a new, artificial
        translation system between thinking and communicating, designed to function just as
        reliably as the body once had. This interpretation is a plausible reading, not a
        documented historical causal link, and will be explored further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>e) A framework, not a determinism:</strong>
        This does not mean the social Five's pattern inevitably leads to neurological
        disease – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Hawking's case illustrates is a pattern that recurs in practice around the
        need to compensate for loss of control by building new, reliable systems – one of
        many possible explanations, not a verdict. The corresponding illness pattern will be
        developed further, over time, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Hawking did not know his own Enneagram pattern – the social Five with a Six-wing
        seeks security almost reflexively by building tested, reliable systems and by
        sharing knowledge with a larger community, rather than facing physical threat
        through open emotional processing. That pattern shaped his life without correction: an
        ever more refined technical system, an ever larger audience – not out of
        calculation, but out of a pattern he himself never recognized as such.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Hawking's 55 years with ALS offer one of the most striking studies of the social
        Five with a Six-wing: a diagnosis never concealed but never dramatized either, a
        carefully built system of technology and trusted people that absorbed his
        progressive loss of control, and a mission to share knowledge that did not end
        until the last possible means of communication was gone. The octopus, whose body
        was taken from him piece by piece – who still found a way to replace his eight arms
        with a single technical system.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-stephen-hawking", label:"Portrait: Stephen Hawking (SO5w6) – life's work"},
        {route:"krankheitsportraets-isaac-newton", label:"Illness Portrait: Isaac Newton (SO5w6) – same subtype, same chair"},
        {route:"krankheitsportraets-albert-einstein", label:"Illness Portrait: Albert Einstein (SO5w4) – the same pattern of unabated work to the end"},
        {route:"krankheitsportraets-cg-jung", label:"Illness Portrait: Carl Gustav Jung (SO5w6) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function warrenBuffettKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-warren-buffett-portrait.jpg" alt="Warren Buffett – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Warren Buffett</p>
        <p class="krim-portrait-typ">SE5w6 · Self-Preservation Type 5 with Six-wing · b. 1930</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Owl</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Animal correspondence: Owl" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Warren Buffett</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-warren-buffett">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as an investor and his type structure
        in general. This page delves into a chapter not covered there: in April 2012, at age 81,
        Buffett disclosed in an open letter to Berkshire Hathaway shareholders that he had been
        diagnosed with early-stage prostate cancer. He underwent treatment, continued running the
        company unchanged throughout, and announced the successful completion of therapy a few
        months later. This page deliberately does <strong>not</strong> suggest that a cancer
        diagnosis has any causal link to personality or subtype – anyone can develop cancer
        regardless of their Enneagram pattern. The focus instead is on <em>how</em> a strongly
        expressed Self-Preservation Type 5 handled such a diagnosis.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Buffett</strong> is classified as the <strong>Self-Preservation Type 5 with
        Six-wing</strong> – the same subtype as <a href="javascript:void(0)" data-route="beruehmte-marie-curie">Marie Curie</a>
        in this Compass. Naranjo called the Self-Preservation Five the <em>Castle</em>: security
        comes from retreating into a self-controlled, manageable space, where knowledge and facts
        form the actual foundation – not feeling or drama. The Six-wing adds a tendency to first
        assess any situation soberly for its actual risk, rather than falling into panic or
        denial. This same posture also shaped how Buffett met his own cancer diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A blood test as the trigger:</strong>
        The diagnosis began with a routine blood test that showed an elevated PSA level – a
        finding with no noticeable symptoms, confirmed as a diagnosis only after a subsequent
        biopsy.</p>
        <p class="vb-intro"><strong>b) Diagnosis on a Wednesday, follow-up scans the next day:</strong>
        By his own account, Buffett received the diagnosis on a Wednesday, with further scans
        following the very next day – a swift, matter-of-fact process with no visible sign of
        shock.</p>
        <p class="vb-intro"><strong>c) Stage I – an early stage:</strong>
        The prostate cancer was diagnosed at Stage I, an early, highly treatable stage – a fact
        Buffett foregrounded from the very start of his public communication.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Disclosure via shareholder letter:</strong>
        Rather than hiding the diagnosis or letting it leak out indirectly, Buffett announced it
        himself, in his own words, on April 17–18, 2012, in an open letter to Berkshire Hathaway
        shareholders – an unusually direct, unruffled way for a CEO to handle a health crisis.</p>
        <p class="vb-intro"><strong>b) "Not remotely life-threatening":</strong>
        His own words were that the condition was "not remotely life-threatening or even
        debilitating in any meaningful way" – a deliberately sober framing that avoided
        dramatization from the outset.</p>
        <p class="vb-intro"><strong>c) "I feel great":</strong>
        Buffett added that he felt "great – as if I were in my normal excellent health," and that
        his energy level was "100 percent" – phrasing that reads more like an annual report than
        a health announcement.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Two months of daily radiation instead of surgery:</strong>
        Together with his doctors, Buffett opted for a two-month course of daily radiation
        therapy, beginning in mid-July 2012 at the Nebraska Medical Center – no surgical
        procedure, but a planned, steady process.</p>
        <p class="vb-intro"><strong>b) 44 radiation sessions to completion:</strong>
        On September 14, 2012, Buffett publicly announced the end of treatment: "Today I had my
        44th and last day of radiation" – a plain, almost ledger-like summary of a months-long
        process.</p>
        <p class="vb-intro"><strong>c) No interruption to his leadership role:</strong>
        Throughout the treatment period, Buffett emphasized that he continued working normally as
        CEO of Berkshire Hathaway – no stand-in, no visible limitation to his leadership duties.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Calm in the capital markets:</strong>
        Because Buffett communicated the diagnosis, treatment plan, and prognosis himself, early,
        and with clear facts, investor reaction and Berkshire stock stayed comparatively calm –
        uncertainty was replaced with information before it could build.</p>
        <p class="vb-intro"><strong>b) A model for matter-of-fact illness communication:</strong>
        Media repeatedly described Buffett's handling of the diagnosis as remarkably composed – a
        public counterpoint to cases where prominent illnesses are hidden or dramatized for
        years.</p>
        <p class="vb-intro"><strong>c) No break in daily life:</strong>
        Neither his well-known daily rhythm nor his public presence visibly changed during
        treatment – the same routine, the same work, the same tone.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Facts before feeling as the first response:</strong>
        For a Self-Preservation Five whose sense of security comes from precise knowledge, the
        natural first response to the diagnosis was not emotional processing but the rapid
        clarification of facts: what stage, what treatment, what prognosis. Only then came the
        disclosure to the outside world.</p>
        <p class="vb-intro"><strong>b) The Six-wing as risk assessment applied to illness:</strong>
        The same Six-wing that drives Buffett to ask about risk first in his investment
        decisions showed up here too: a quick, sober assessment that the diagnosis posed no
        existential risk, followed by a planned, reliable treatment rather than any rushed steps.</p>
        <p class="vb-intro"><strong>c) The castle stays occupied, not sealed off:</strong>
        Unlike the withdrawal from public life one might expect from a closed-off Five, Buffett
        deliberately opened the castle for this one announcement – not out of a need for
        closeness, but because transparency toward shareholders struck him as the factually
        correct, calculated choice.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Throughline</h3>
        <p class="vb-intro"><strong>a) A diagnosis handled like an annual report:</strong>
        Buffett's entire public language about his own illness – figures, deadlines,
        probabilities, a clear timeline through to the end of treatment – followed the same sober
        register with which he otherwise assesses balance sheets and market risk.</p>
        <p class="vb-intro"><strong>b) The same owl that doesn't panic about money either:</strong>
        Buffett became famous for advising investors to be fearful when others are greedy, and
        greedy when others are fearful – a stance that demands calm precisely when things look
        threatening. He showed that same calm toward his own diagnosis: no alarmism, just a cool
        assessment of the actual situation.</p>
        <p class="vb-intro"><strong>c) Why exactly this composed openness?</strong>
        For a Self-Preservation Five with a Six-wing, whose sense of security comes from facts
        and controlled communication, one plausible reading suggests itself: the public disclosure
        was itself an act of risk management – better to supply one's own clear version of the
        facts than to leave room for speculation and uncontrolled rumor. This reading is a
        plausible interpretation, not a documented historical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framework without determinism:</strong>
        This does not mean that the pattern of the Self-Preservation Five with a Six-wing
        inevitably leads to or explains prostate cancer – <strong>anyone can develop any illness,
        regardless of subtype.</strong> What Buffett's case can show is a pattern in how someone
        handles a cancer diagnosis that recurs again and again in a strongly expressed
        Self-Preservation Five with a Six-wing – one of many possible readings, not a verdict.
        The corresponding illness picture will gradually be developed further in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Like most people, Buffett was not consciously aware of his own Enneagram pattern for most
        of his life. Without that awareness, he nonetheless lived out the passion of the
        Self-Preservation Five unchanged for decades: frugality, conservation of resources, and a
        striking distance from his own body's warning signs. His well-known lifestyle – daily
        fast-food breakfasts, large amounts of Cherry Coke, almost no exercise – stayed unchanged
        for decades, even though he could long since have afforded any alternative imaginable.
        That this physically undercared-for lifestyle nonetheless let him live well past ninety
        changes nothing about the fact that the same SE5 persistence is visible here that also
        kept his investment principles unchanged for decades: once a routine is recognized as
        correct, it is not questioned out of consideration for the body, but simply continued.
        That he stayed healthy for so long anyway is luck and constitution, not proof that the
        routine itself was wise.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Five with a Six-wing shows itself in <strong>Warren Buffett</strong>
        in how he met a cancer diagnosis: matter-of-fact, fact-based, without dramatization – and
        with the same calm openness he otherwise brings to his shareholder letters. The owl that
        watched closely all its life turned that same clear gaze on its own diagnosis – and once
        treatment was complete, returned unchanged to its post.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-warren-buffett", label:"Portrait: Warren Buffett (SE5w6) – Life's Work"},
        {route:"krankheitsportraets-marie-curie", label:"Illness Portrait: Marie Curie (SE5w6) – matter-of-fact to the point of ignoring her own warning signs"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se5", label:"Subtype Profile SE5"},
      ])}
    </div>
  `);
}

export function yayoiKusamaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-yayoi-kusama-portrait.jpg" alt="Yayoi Kusama" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Yayoi Kusama</p>
        <p class="krim-portrait-typ">SP2w3 · Self-Preservation Type 2 with Three-wing · 1929–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Yayoi Kusama</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-yayoi-kusama">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general, with
        a brief mention of her life in a psychiatric hospital. This page delves deeper into
        that chapter: a psychiatric condition present since early childhood involving
        hallucinations and depersonalization, a difficult upbringing, several suicide attempts,
        and a life in a psychiatric hospital, since 1977, that continued until her death in
        August 2026.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kusama</strong> is classified as the <strong>Self-Preservation Type 2 with
        Three-wing</strong>. SP2 directs the Two's caregiving energy toward its own survival
        first; the Three-wing adds an unconditional will to become visible through one's own
        distress and to achieve something from it. Exactly this combination – not hiding one's
        own psychiatric illness, but making it the foundation of a world-renowned body of work
        – continued to define her relationship to her own condition until the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Hallucinations already in preschool age:</strong>
        Kusama reported experiencing visual and auditory hallucinations as a very young
        child – flower patterns that spoke to her, endless nets of dots that spread across her
        entire field of vision.</p>
        <p class="vb-intro"><strong>b) A difficult, loveless childhood:</strong>
        Her mother, from a wealthy family in Matsumoto, repeatedly tore up Kusama's early
        drawings and sent the child out to spy on her unfaithful father's affairs – a family
        environment that offered the young Kusama little stability.</p>
        <p class="vb-intro"><strong>c) Drawing as an early, spontaneous response:</strong>
        Rather than being overwhelmed by the visions, Kusama began as a child to draw these
        hallucinations directly – a behavior she later called <em>self-obliteration</em>:
        repeatedly inscribing herself into her own pattern until the fear of dissolution
        eased.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Diagnosis of an obsessive neurosis:</strong>
        Kusama was diagnosed with an obsessive-compulsive condition; she herself rejected
        the often-repeated outside claim of manic-depressive psychosis and attributed her
        symptoms in part to a thyroid condition.</p>
        <p class="vb-intro"><strong>b) Depersonalization as an additional symptom:</strong>
        Alongside the hallucinations, Kusama suffered from a depersonalization disorder
        (Japanese <em>rijinshō</em>, literally "separated-person symptom") – the sense of
        perceiving herself and her surroundings as foreign, unreal, or dissolved.</p>
        <p class="vb-intro"><strong>c) Continued artistic work despite acute symptoms:</strong>
        Even in New York, where she lived penniless and without English from 1958 onward, she
        produced an enormous body of work despite recurring psychiatric crises – painting,
        sculpture, happenings, fashion – as if working against her own dissolution.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Several suicide attempts in the early 1970s:</strong>
        After years of extreme artistic and financial strain in New York and a growing sense
        of commercial failure, Kusama made several suicide attempts before deciding to return
        to Japan.</p>
        <p class="vb-intro"><strong>b) Return to Japan in 1973, physically and mentally exhausted:</strong>
        Kusama returned to Japan in 1973 exhausted and in poor health – a return that at first
        resembled less a fresh start than a retreat from a life that had nearly destroyed her.</p>
        <p class="vb-intro"><strong>c) Voluntary admission to a psychiatric hospital in 1977:</strong>
        In 1977, Kusama voluntarily admitted herself to the Seiwa Hospital for the mentally ill
        in Tokyo – a deliberate choice for a protective structure rather than a life of
        uncontrolled crisis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Nearly fifty years of voluntary inpatient care:</strong>
        Kusama lived in the same psychiatric hospital until her death in August 2026, at the
        age of 97 – one of the longest known voluntary psychiatric stays of an internationally
        recognized artistic figure.</p>
        <p class="vb-intro"><strong>b) Daily work despite and alongside the illness:</strong>
        From the hospital, Kusama walked to her nearby studio to work almost daily until near
        the end – the illness never ended her creative output, but became its structuring
        framework.</p>
        <p class="vb-intro"><strong>c) Open engagement instead of concealment:</strong>
        Unlike many other portraits in this Compass, Kusama's case shows a person who did not
        hide her psychiatric illness for decades, but named it publicly and explicitly
        declared it the starting point of her artistic work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Expression</h3>
        <p class="vb-intro"><strong>a) The hippopotamus that never left its element:</strong>
        Just as the hippopotamus cannot survive without constant contact with water, Kusama
        describes painting itself as a matter of survival – not an artistic concept, but the
        only condition under which she can remain psychologically intact.</p>
        <p class="vb-intro"><strong>b) The Three-wing and the will to make her own illness visible:</strong>
        Rather than hiding the condition, the Three-wing turned it into a publicly
        communicated, world-successful artistic program – the walk-in <em>Infinity Mirror
        Rooms</em> let millions of visitors experience, for a few minutes, exactly the sense of
        dissolution that has accompanied Kusama her entire life.</p>
        <p class="vb-intro"><strong>c) Self-care through deliberately chosen structure:</strong>
        The voluntary admission in 1977 is pure SP2 logic: rather than remaining
        uncontrollably at the mercy of her own fragility, Kusama actively chose a protective
        framework in which caring for herself first became possible at all.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) An illness that became the very language of the work:</strong>
        In hardly any other portrait in this Compass do illness and work merge so completely:
        the endless dot patterns for which Kusama is world-famous are not a later artistic
        interpretation of her hallucinations, but their direct, unaltered rendering.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>A striking parallel within the same subtype – Frida Kahlo:</strong>
        Notably, this Compass also features <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida Kahlo (also SP2w3)</a>,
        whose life story shows an almost identical underlying pattern: a Self-Preservation Two
        with a Three-wing whose art arises not despite, but directly from, a severe, lifelong
        physical or psychological burden – for Kahlo, chronic accident aftermath and pain;
        for Kusama, hallucinations and depersonalization. Both made their own suffering not a
        secret, but explicitly the subject of their imagery, and both achieved world fame
        built precisely on that unflinching openness.</p>
        <p class="vb-intro"><strong>b) Why precisely perception itself, for an artist whose profession is seeing?</strong>
        For a Self-Preservation Two with a Three-wing, whose entire artistic survival depends
        on translating her inner life into visible form, one interpretation suggests itself:
        precisely perception itself – seeing, the recognition of the boundary between one's
        own body and the world – became, in Kusama's case, the site of the illness. This
        interpretation is a plausible reading, not a proven medical causal link, and is
        explored further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Context without determinism:</strong>
        This does not mean the pattern of the Self-Preservation Two inevitably leads to
        hallucinations or depersonalization – <strong>anyone can develop any illness,
        regardless of subtype.</strong> What Kusama's case illustrates is a pattern in how a
        lifelong psychiatric illness was handled, one that recurs again and again in a
        pronounced Self-Preservation Two with a Three-wing – one interpretation among many,
        not a judgment. This illness pattern is being developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Nothing suggests that Kusama ever consciously knew her own Enneagram pattern. And yet
        her case shows a rare exception within this pattern: instead of suppressing or hiding
        her own distress for decades, as many other SP2w3 portraits in this Compass show, she
        made the illness itself the open center of her actions very early on. That does not
        replace conscious knowledge of one's own Enneagram pattern – but it shows that the
        Self-Preservation Two's instinct, used well, can also lead to an unusually clear-eyed
        form of self-care.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Kusama's</strong> Self-Preservation Two with a Three-wing, too, can be read
        once more through her illness history: a psychiatric condition present since
        childhood that she neither hid nor let destroy her, but transformed into a body of
        work she kept building almost until the end. Kusama died on August 14, 2026, at the
        age of 97 – nearly fifty years after her voluntary admission, in the same hospital from
        which she walked to her studio until near the end. The hippopotamus that never left its
        water – and, precisely because of it, became one of the most influential voices in
        contemporary art.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-yayoi-kusama", label:"Portrait: Yayoi Kusama (SP2w3) – life's work"},
        {route:"krankheitsportraets-frida-kahlo", label:"Illness Portrait: Frida Kahlo (SP2w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SP2"},
      ])}
    </div>
  `);
}

export function franciscoDeGoyaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-francisco-de-goya-portrait.jpg" alt="Francisco de Goya" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francisco de Goya</p>
        <p class="krim-portrait-typ">SX4w3 · Sexual Type 4 with Three-wing · 1746–1828</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Francisco de Goya</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-francisco-de-goya">famous-personality portrait</a>
        – that page covers his rise to First Court Painter of the Spanish crown and his
        uncompromising artistic honesty. Here, a chapter that page barely touched on takes
        center stage: a severe, to this day not fully explained illness in 1793 that left
        him deaf, and a second life-threatening crisis in 1819 that he captured directly in one
        of his most striking paintings.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Goya</strong> is assigned to the <strong>Sexual Type 4 with Three-wing</strong>.
        SX4 hurls inner experience outward rather than concealing it; the Three-wing ensures
        this intensity becomes visible and effective. This same combination also determined his
        approach to his own illness: not concealment, but the immediate translation of
        suffering into an image – down to the walls of his own home.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Sudden collapse in 1793:</strong>
        While traveling in Cádiz, Goya, at age 46, suffered a severe febrile illness that
        confined him to bed for months and abruptly interrupted his life up to that point.</p>
        <p class="vb-intro"><strong>b) A broad, confusing set of symptoms:</strong>
        Headaches, dizziness, hallucinations, vision problems, and persistent ringing in his
        ears appeared together – a picture doctors still interpret differently today, from lead
        poisoning to an autoimmune disorder to a severe infection.</p>
        <p class="vb-intro"><strong>c) Permanent deafness as a lasting result:</strong>
        Most of the acute symptoms subsided over the following months – the deafness remained
        and accompanied Goya for the rest of his 35 remaining years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Withdrawal from teaching, not from art:</strong>
        Goya gave up his leadership role at the Academy of San Fernando because his deafness
        made teaching impossible – his own painterly output continued undiminished, untouched
        by this.</p>
        <p class="vb-intro"><strong>b) A second life-threatening crisis in 1819:</strong>
        At age 73, Goya fell seriously ill again and was saved by his physician Eugenio García
        Arrieta – an event he captured that same year in the painting "Self-Portrait with Dr.
        Arrieta," with an inscription explicitly thanking the doctor for saving his life.</p>
        <p class="vb-intro"><strong>c) Illness becomes image material directly:</strong>
        Unlike many other artists of his time, Goya did not hide his own vulnerability behind an
        idealized facade, but painted himself with an open mouth, half-closed eyes, and
        pain-clenched hands – an image of acute weakness, without any embellishment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) A house that anticipated its own name:</strong>
        In 1819, shortly before his second severe illness, Goya moved into a country house
        outside Madrid that already bore the name "Quinta del Sordo" &ndash; literally "Villa of
        the Deaf Man," named after an earlier, long-deceased owner who had likewise been deaf.
        A coincidence Goya had not chosen, but one that fittingly described his own life in the
        years that followed.</p>
        <p class="vb-intro"><strong>b) The walls as a final, unasked-for canvas:</strong>
        In this house, the by-then nearly completely deaf Goya painted, without commission and
        without any intention of a public, the 14 "Black Paintings" directly onto the walls of
        his dining and sitting rooms – a body of work apparently intended for himself alone.</p>
        <p class="vb-intro"><strong>c) Voluntary exile despite advanced age:</strong>
        In 1824, at age 78, Goya left Spain after the return of absolutist rule and moved to
        Bordeaux – a decision that further increased his health vulnerability in his final
        years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Uninterrupted work into his final months:</strong>
        Even in Bordeaux, physically greatly weakened, Goya continued producing drawings and
        paintings – including the unusual late work "The Milkmaid of Bordeaux," which art
        historians already read as anticipating Impressionist technique.</p>
        <p class="vb-intro"><strong>b) A final, rapid decline:</strong>
        In his final two weeks of life, Goya likely suffered a series of strokes leading to
        progressive paralysis, before he died in Bordeaux on April 16, 1828.</p>
        <p class="vb-intro"><strong>c) Death far from home, at age 82:</strong>
        He died in self-chosen exile, far from the Spanish court he had once served as First
        Court Painter – an ending that reflected his lifelong willingness to place his own
        independence above security and recognition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) No hiding, but immediate translation into image form:</strong>
        The same ability to turn inner experience unfiltered outward that shaped Goya's entire
        body of work as court painter and critic of his era also determined how he handled his
        own illness: rather than concealing it, he made it the explicit subject of a painting in
        "Self-Portrait with Dr. Arrieta."</p>
        <p class="vb-intro"><strong>b) The Three-wing and the will to be seen – even in weakness:</strong>
        Where a more introverted Four might have kept its suffering entirely to itself, the
        Three-wing led Goya to turn even his own vulnerability into a work that still moves
        viewers directly today.</p>
        <p class="vb-intro"><strong>c) Withdrawal into his own house, not withdrawal from work:</strong>
        After becoming deaf, Goya withdrew from social life and from teaching, but not from his
        artistic creative power – the "Quinta del Sordo" became the place where his intensity
        kept discharging unchecked, just without an audience.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that became the immediate subject of the image:</strong>
        Goya's entire body of work rested on the unsparing translation of what he observed into
        visual language – nobility, war, superstition, and finally his own, aging vulnerability were all
        captured without embellishment. His illness was no exception to this principle, but its
        most consistent, most personal application.</p>
        <p class="vb-intro"><strong>b) Deafness as a paradoxical intensifier, not a dampener:</strong>
        What might be expected as withdrawal in other artists had the opposite effect in Goya:
        his paintings grew darker, more direct, more uncompromising after his deafness – as if
        the loss of hearing had concentrated his visual intensity inward instead of dampening
        it.</p>
        <p class="vb-intro"><strong>c) Why hearing, of all things?</strong>
        For a sexual Four with Three-wing whose entire power rested on the immediate
        transformation of perception into visible expression, one interpretation suggests
        itself: precisely the sense most immediately connected to the outer world, and the one
        most likely to have led to withdrawal, became the starting point for an even more
        direct, even more immediate visual expression. This interpretation is a plausible
        reading, not a documented historical causal link, and is developed further in this
        Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the sexual Four inevitably leads to hearing loss –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What Goya's case
        shows is a pattern in how a pronounced sexual Four with Three-wing handles a
        life-altering physical loss – one possible reading among many, not a verdict. The
        corresponding illness profile is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Goya did not know his own pattern – the sexual Four with Three-wing reflexively
        transforms every experience, even the most painful, into immediate visible expression
        rather than ever quietly processing it, and he lived out exactly this pattern unchanged
        into his final months in Bordeaux. Whoever does not recognize their own need to turn
        every experience outward as a pattern does not stop living it out even in their own
        falling silent.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Four with Three-wing explains much about the course of <strong>Goya's</strong>
        own illness: a man whose entire power rested on the immediate transformation of
        perception into visible expression made even his own suffering the subject of an image
        – the Chihuahua who, even deafened, did not fall silent, but kept barking on his own
        walls.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-francisco-de-goya", label:"Portrait: Francisco de Goya (SX4w3) – Court painter and chronicler"},
        {route:"krankheitsportraets-voltaire", label:"Illness Portrait: Voltaire (SX4w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function alanTuringKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-alan-turing-portrait.jpg" alt="Alan Turing – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Alan Turing</p>
        <p class="krim-portrait-typ">SX5w4 · Sexual Type 5 with Four-wing · 1912–1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hedgehog</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Animal correspondence: Hedgehog" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Alan Turing</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-alan-turing">portrait under Famous Personalities</a>
        in this compass – that page covers his pioneering work as a mathematician and cryptanalyst. This page
        focuses on a different chapter: in 1952 Turing was convicted for homosexual acts, which were criminal
        in the UK at the time. Instead of prison he chose a court-ordered hormone treatment (estrogen
        injections, colloquially "chemical castration") lasting over a year, with significant physical and
        psychological effects. He died in 1954 of cyanide poisoning, officially ruled a suicide.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Turing</strong> is assigned to the <strong>sexual Type 5 with a Four-wing</strong>. The sexual
        Five seeks trust and complete devotion to a single idea or person, rather than withdrawing into
        distance like the other Five subtypes. The Four-wing adds emotional depth and a sense of being
        different – Turing's complete devotion to his mathematical thinking was inseparable from the feeling of
        living in a society that criminalized his nature.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A report after a burglary:</strong>
        In 1952 Turing reported a burglary at his home – the investigation revealed his relationship with a
        young man, leading to a charge of "gross indecency."</p>
        <p class="vb-intro"><strong>b) The choice between prison and treatment:</strong>
        Given the choice between imprisonment and a year of hormone treatment, Turing chose the latter so he
        could continue his scientific work.</p>
        <p class="vb-intro"><strong>c) Start of the estrogen treatment:</strong>
        The synthetic estrogen treatment, intended to suppress his libido, began in 1952 and led within months
        to gynecomastia (breast growth) and weight gain.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Loss of security clearance:</strong>
        As a result of the conviction, Turing lost his security clearance for work with the intelligence
        agency GCHQ – work that had previously formed a central part of his identity as a scientist.</p>
        <p class="vb-intro"><strong>b) Continued scientific work regardless:</strong>
        Despite the treatment and social ostracism, Turing continued his research into mathematical biology
        (morphogenesis) – a retreat into a purely intellectual field relatively independent of people.</p>
        <p class="vb-intro"><strong>c) Growing social isolation:</strong>
        The public knowledge of the conviction within his immediate circle reinforced an already existing
        tendency to withdraw from social contact.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) No public complaint:</strong>
        Turing hardly spoke publicly about the treatment he endured or its effects – a pattern typical of the
        sexual Five, processing inner experience internally rather than putting it on display.</p>
        <p class="vb-intro"><strong>b) Retreat into symbolic, private rituals:</strong>
        Friends reported increasingly introverted, withdrawn behavior in his final months.</p>
        <p class="vb-intro"><strong>c) The poisoned apple as a final symbol:</strong>
        A partially eaten apple laced with cyanide was found by his bed – an image still strongly tied to his
        memory, whose exact significance has never been fully established.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A loss for science at only 41:</strong>
        Turing's death ended a career that had already laid the foundations of modern computing and made a
        decisive contribution to breaking the German Enigma cipher in World War II.</p>
        <p class="vb-intro"><strong>b) An official apology only decades later:</strong>
        The British government apologized officially only in 2009, followed by a royal pardon in 2013 – Turing
        himself lived to see neither.</p>
        <p class="vb-intro"><strong>c) A symbol of state-sanctioned persecution:</strong>
        His case became one of the best-known examples of the criminal prosecution of homosexuals in the 20th
        century and continues to shape debates about posthumous justice.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Retreat into the intellectual as a protective space:</strong>
        For the sexual Five with a Four-wing, one's own thinking becomes the last untouchable refuge when the
        outer world turns threatening – Turing immersed himself even more deeply in abstract mathematical
        questions during his crisis.</p>
        <p class="vb-intro"><strong>b) No search for public solidarity:</strong>
        Rather than fighting publicly for his rights, Turing processed the experience almost entirely in
        private – typical of the introverted Five, wrestling with itself.</p>
        <p class="vb-intro"><strong>c) The Four-wing's note of quiet despair:</strong>
        The Four-wing shows in the deeply felt sense of being different, which state persecution confirmed in
        the most crushing possible way.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) An imposed, not a self-chosen illness history:</strong>
        Unlike most other cases in this compass, Turing's "treatment" was not an illness in the usual sense but
        a legally enforced medical measure with harmful effects.</p>
        <p class="vb-intro"><strong>b) Withdrawal as the only remaining course of action:</strong>
        For a sexual Five, whose security lies in trusting a select few people and ideas, public exposure meant
        a fundamental attack on this protective strategy.</p>
        <p class="vb-intro"><strong>c) Why withdrawal into silence specifically?</strong>
        For a sexual Five with a Four-wing, who grants trust only very selectively, the near-total silence about
        the treatment he endured can be read as the last remaining form of self-determination – when the body
        and legal standing are already controlled by others, the inner world remains the only space still under
        one's own control. This interpretation is developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the sexual Five with a Four-wing inevitably leads to such an ending –
        <strong>anyone can develop any illness, regardless of subtype.</strong> Turing's case is above all the
        result of state persecution, not primarily explainable psychosomatically. What his case shows is a
        pattern in how imposed suffering is handled that recurs in a pronounced sexual Five with a Four-wing –
        one of many possible interpretations, not a verdict. The corresponding illness pattern is being
        developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Turing, like most people, did not consciously know his Enneagram pattern. Without this knowledge he
        processed the forced treatment almost entirely through withdrawal, rather than seeking outside support –
        a trait that helped him in his scientific work but further isolated him in his personal crisis. Someone
        who recognizes their own pattern can consciously counteract it; someone who does not repeats it until no
        other option remains.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Five with a Four-wing is confirmed in <strong>Alan Turing</strong> by how he responded to the
        forced treatment: with quiet withdrawal into his own world of thought rather than public resistance.
        The hedgehog that curls up when the world turns threatening found no way back to openness in the end –
        but his scientific work outlasted the persecution that he himself did not survive.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-alan-turing", label:"Portrait: Alan Turing (SX5w4) – life's work"},
        {route:"krankheitsportraets-jean-jacques-rousseau", label:"Illness Portrait: Jean-Jacques Rousseau (SX5w4)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx5", label:"Subtype Profile SX5"},
      ])}
    </div>
  `);
}

export function franzVonAssisiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-von-assisi-portrait.jpg" alt="Francis of Assisi – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francis of Assisi</p>
        <p class="krim-portrait-typ">SO7w6 · Social Type 7 with Six-wing · 1181/82–1226</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Francis of Assisi</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-franz-von-assisi">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as founder of a religious order. This page focuses on
        his health decline in his final years: progressive blindness (likely trachoma, worsened by fasting and
        travel in the Middle East), the wounds (stigmata) that appeared in 1224 according to his own account and
        that of his companions, and chronic digestive and stomach ailments that increasingly weakened him. He
        died in 1226 at only 44 years of age.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Francis of Assisi</strong> is assigned to the <strong>social Type 7 with a Six-wing</strong>.
        Naranjo called the social Seven the counter-type of the Seven: restless building in service of the
        community, not in service of one's own enjoyment. The Six-wing adds loyalty to a cause or community –
        Francis founded the Franciscan Order, an institution meant to endure far beyond his own death, and
        remained devoted to it even as his blindness progressed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First eye trouble after a journey to the Middle East:</strong>
        After his journey to Egypt and the Holy Land during the Fifth Crusade (1219), his eyesight increasingly
        deteriorated – likely due to a trachoma infection contracted there.</p>
        <p class="vb-intro"><strong>b) Worsened by radical asceticism:</strong>
        His strict, self-imposed fasting practice and renunciation of any comfort further weakened his body.</p>
        <p class="vb-intro"><strong>c) Growing sensitivity to light:</strong>
        Contemporary accounts describe a growing inability to tolerate daylight, years before his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The stigmata of La Verna in 1224:</strong>
        Two years before his death, Francis and his companions reported wounds on his hands, feet, and side
        resembling the wounds of the crucifixion – an event that further strained his health.</p>
        <p class="vb-intro"><strong>b) Near-total blindness:</strong>
        In his last two years, Francis was, according to consistent sources, practically blind.</p>
        <p class="vb-intro"><strong>c) Chronic stomach and digestive complaints:</strong>
        Contemporary biographers attributed his persistent stomach problems to decades of extreme asceticism.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) The Canticle of the Sun despite near-total blindness:</strong>
        In precisely this phase of physical decline, Francis composed his famous "Canticle of the Sun" in
        1224/25 – one of his best-known works, created not despite but in the midst of his illness.</p>
        <p class="vb-intro"><strong>b) Continued travel despite weakness:</strong>
        Even after the first signs of blindness, Francis continued to travel to visit and encourage his order.</p>
        <p class="vb-intro"><strong>c) Refusal of available treatment:</strong>
        Only late, and at the urging of his companions, did Francis accept rudimentary medical treatment – his
        own attitude placed service to the community above his own health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death at only 44:</strong>
        Francis died on October 3, 1226, at the Portiuncula chapel near Assisi, weakened by years of progressive
        blindness and physical decline.</p>
        <p class="vb-intro"><strong>b) Canonized just two years later:</strong>
        Francis was canonized as early as 1228 – his illness became part of the narrative of his devotion to
        the very end.</p>
        <p class="vb-intro"><strong>c) An order that outlasted him:</strong>
        The Franciscan Order he founded still exists today, with hundreds of thousands of members worldwide
        across its various branches.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Creative activity despite physical decline:</strong>
        For the social Seven, standstill is nearly unbearable – nearly blind and weakened, Francis still
        created one of his most significant works with the Canticle of the Sun.</p>
        <p class="vb-intro"><strong>b) The Six-wing as loyalty to one's own community:</strong>
        His continued visits to his fellow friars despite blindness show the loyalty of the Six-wing – the bond
        to the community outweighed self-care.</p>
        <p class="vb-intro"><strong>c) Warning signs overridden in favor of the mission:</strong>
        As with other social Sevens in this compass, early physical warning signs were long overridden in favor
        of continued travel and founding activity.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A chain of worsening ailments over more than a decade:</strong>
        From the first eye trouble after 1219 to his death in 1226, Francis's health followed a steadily
        progressing decline that he never used as a reason to withdraw from his mission.</p>
        <p class="vb-intro"><strong>b) Service to the community to the point of complete exhaustion:</strong>
        For the social Seven with a Six-wing, the cause – here the order and its message – stands above one's
        own physical integrity.</p>
        <p class="vb-intro"><strong>c) Why blindness and exhaustion rather than withdrawal specifically?</strong>
        For a social Seven with a Six-wing, whose security lies in persistently building something greater than
        oneself, ignoring one's own physical limits can be read as an intensification of one's own life
        pattern: the mission was not allowed to end while any strength remained for it. This interpretation is
        developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the social Seven with a Six-wing inevitably leads to blindness –
        <strong>anyone can develop any illness, regardless of subtype.</strong> Francis's blindness is also
        closely tied to a probable infection and radical asceticism, not purely explainable psychosomatically.
        What his case shows is a pattern in how progressive illness is handled that recurs in a pronounced
        social Seven with a Six-wing – one of many possible interpretations, not a verdict. The corresponding
        illness pattern is being developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Francis of Assisi, like nearly everyone of his time, had no Enneagram model. Without this knowledge he
        lived out his devotion to his mission without restraint, rather than accounting for his progressive
        blindness in time – a trait that made his spiritual work immortal, but consumed him well before his
        time. Someone who recognizes their own pattern can consciously counteract it; someone who does not
        repeats it until the body sets the limit the person did not set themselves.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Seven with a Six-wing is confirmed in <strong>Francis of Assisi</strong> by the persistence
        with which he continued his mission despite progressive blindness and physical decline – down to one of
        his most significant works, created in near-total darkness. The beaver kept building its work to the
        very end, even once his own eyes had long since denied him the sight of it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-franz-von-assisi", label:"Portrait: Francis of Assisi (SO7w6) – life's work"},
        {route:"krankheitsportraets-epikur", label:"Illness Portrait: Epicurus (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function epikurKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-epikur-portrait.jpg" alt="Epicurus – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Epicurus</p>
        <p class="krim-portrait-typ">SO7w6 · Social Type 7 with Six-wing · 341–270 BCE</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Epicurus</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-epikur">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as founder of Epicureanism. This page focuses on his
        final phase of life: according to ancient sources (transmitted notably by Diogenes Laertius), Epicurus
        suffered from painful kidney stones and urinary retention, from which he died after weeks of suffering
        at age 71 – accompanied by a surviving farewell letter addressed to his friend Idomeneus.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Epicurus</strong> is assigned to the <strong>social Type 7 with a Six-wing</strong>. The social
        Seven builds restlessly on something that reaches beyond itself – for Epicurus, the philosophical
        school "The Garden" and an entire teaching tradition. The Six-wing adds loyalty to friends and a shared
        community – his final letter was devoted not to his own complaint, but to the memory of philosophical
        conversations shared together.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Painful kidney stones in old age:</strong>
        According to ancient tradition, Epicurus developed increasingly painful kidney stones in his final
        years.</p>
        <p class="vb-intro"><strong>b) Continued teaching despite pain:</strong>
        Despite the onset of these ailments, he continued his work at "The Garden," his philosophical school
        in Athens.</p>
        <p class="vb-intro"><strong>c) Growing urinary retention:</strong>
        In the final phase of his illness, sources add a painful urinary retention that marked his last two
        weeks of life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A warm bath as the only relief:</strong>
        Diogenes Laertius reports that Epicurus sat in a bath of warm water to find some relief, shortly before
        drinking undiluted wine and asking his friends to remember his teachings.</p>
        <p class="vb-intro"><strong>b) No loss of philosophical clarity:</strong>
        Even in extreme physical distress, Epicurus reportedly retained his mental clarity to the end.</p>
        <p class="vb-intro"><strong>c) The farewell letter to Idomeneus:</strong>
        In his last surviving letter, Epicurus describes his pain as "unbearable," yet balanced by "the joy of
        the soul in remembering our conversations."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) His own philosophy as a coping tool:</strong>
        In his own dying, Epicurus applied exactly the principles he taught – pain is not suppressed, but
        relativized through the memory of friendship and joy.</p>
        <p class="vb-intro"><strong>b) No withdrawal from community:</strong>
        Contact with his students and friends at "The Garden" remained central to him until the very end.</p>
        <p class="vb-intro"><strong>c) A final testament for the school:</strong>
        In his will, Epicurus arranged for his school's continuation beyond his death – a legacy devoted to the
        community, not merely to his own memory.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in 270 BCE:</strong>
        Epicurus died at age 71 – a comparatively advanced age for antiquity.</p>
        <p class="vb-intro"><strong>b) The school's survival for centuries:</strong>
        "The Garden" continued to exist for centuries after his death and influenced, among others, the Roman
        poet Lucretius.</p>
        <p class="vb-intro"><strong>c) The account of his death as part of the teaching itself:</strong>
        The manner of his dying was passed down by followers themselves as a practical demonstration of his own
        philosophy.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Continuing to teach as long as at all possible:</strong>
        For the social Seven, one's own mission remains central even in the face of physical decline –
        Epicurus taught for as long as his strength allowed.</p>
        <p class="vb-intro"><strong>b) The Six-wing as loyalty to community in dying:</strong>
        His final letter was devoted not to his own complaint but to the memory of shared conversations – an
        expression of the loyal bond to friends that the Six-wing adds.</p>
        <p class="vb-intro"><strong>c) Meaning-making instead of despair in the face of pain:</strong>
        Rather than surrendering to pain without resistance, Epicurus turned his own dying into a final, lived
        lesson.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A short but well-documented final illness:</strong>
        The final weeks of Epicurus's life are among the most detailed surviving accounts of death in ancient
        philosophy.</p>
        <p class="vb-intro"><strong>b) Community as comfort to the last breath:</strong>
        For a social Seven with a Six-wing, the bond to one's own community remains the central anchor even in
        dying.</p>
        <p class="vb-intro"><strong>c) Why the memory of conversation rather than of his own pain specifically?</strong>
        For a social Seven with a Six-wing, whose security lies in service to a community, this final gesture
        can be read as a consistent continuation of his own life pattern: even in his own dying, attention
        remained directed at others, not at himself. This interpretation is developed further in this
        compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the social Seven with a Six-wing inevitably leads to kidney stones –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What Epicurus's case shows is a
        pattern in how pain and approaching death are handled that recurs in a pronounced social Seven with a
        Six-wing – one of many possible interpretations, not a verdict. The corresponding illness pattern is
        being developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Epicurus naturally had no Enneagram model. Without this knowledge he lived out his pattern – meaning-
        making and communal bonding even in his own suffering – consistently to his last breath, without
        recognizing it as a pattern, but understanding it as a philosophical stance. Someone who recognizes
        their own pattern can consciously counteract it; Epicurus did not know his, yet lived it in a form still
        considered exemplary today.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Seven with a Six-wing is confirmed in <strong>Epicurus</strong> by the consistency with which
        he lived his own philosophy even in his own dying – not his own complaint, but the memory of shared
        conversation stood at the forefront of his final letter. The beaver kept building its work to the very
        last moment, by turning even his own dying into its confirmation.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-epikur", label:"Portrait: Epicurus (SO7w6) – life's work"},
        {route:"krankheitsportraets-franz-von-assisi", label:"Illness Portrait: Francis of Assisi (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function klaraVonAssisiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-klara-von-assisi-portrait.jpg" alt="Clare of Assisi – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Clare of Assisi</p>
        <p class="krim-portrait-typ">SE3w2 · Self-Preservation Type 3 with Two-wing · 1194–1253</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Clare of Assisi</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-klara-von-assisi">portrait under Famous Personalities</a>
        in this compass – that page covers her life's work as founder of the Order of Poor Ladies. This page
        focuses on a chronic illness that, according to consistent sources, confined her to bed for roughly the
        last 27 to 29 years of her life – the exact diagnosis is not historically established, with theories
        ranging from a chronic autoimmune condition to the effects of decades of extreme asceticism.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Clare of Assisi</strong> is assigned to the <strong>self-preservation Type 3 with a Two-wing</strong>.
        Naranjo called the self-preservation Three the counter-type of the Three: competence over shine,
        modesty over self-promotion – with the same inner drive and functionality maintained underneath. The
        Two-wing adds care for others – Clare led her order for decades despite being chronically ill and
        bedridden, and visibly worried more about her fellow sisters than about herself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Onset after years of strict asceticism:</strong>
        After more than a decade of radical renunciation – barely any food, sleeping on the bare ground, going
        barefoot – Clare's health began to noticeably decline.</p>
        <p class="vb-intro"><strong>b) Growing physical weakness:</strong>
        Contemporary sources describe a progressive general weakness that increasingly limited her mobility.</p>
        <p class="vb-intro"><strong>c) Continuing her duties despite first symptoms:</strong>
        Despite early warning signs, Clare initially continued leading her order undiminished.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Nearly three decades of confinement to bed:</strong>
        From roughly 1224 until her death in 1253, Clare was, according to prevailing sources, largely
        bedridden – nearly three decades of her 59-year life.</p>
        <p class="vb-intro"><strong>b) Continued leadership of the order from her sickbed:</strong>
        Despite being bedridden, she continued leading the order of the "Poor Ladies" (later the Poor Clares)
        until her death.</p>
        <p class="vb-intro"><strong>c) A final fight for the order's rule:</strong>
        On her deathbed in 1253, she achieved papal confirmation of her own especially strict rule for the order
        – two days before her death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Continued function despite chronic illness:</strong>
        Unlike a publicly staged illness, Clare remained fully effective organizationally and spiritually
        despite being bedridden – the illness never became a reason to withdraw from responsibility.</p>
        <p class="vb-intro"><strong>b) Concern for the community rather than herself:</strong>
        Accounts repeatedly emphasize that Clare, even on her deathbed, worried more about the wellbeing of her
        fellow sisters than about her own pain.</p>
        <p class="vb-intro"><strong>c) No public complaint about her own illness:</strong>
        Her illness was never put forward by her as a narrative of suffering, but largely borne in silence.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in 1253, two days after papal confirmation:</strong>
        Clare died on August 11, 1253, just days after Pope Innocent IV officially confirmed her rule for the
        order – a goal she had pursued for nearly thirty years despite illness.</p>
        <p class="vb-intro"><strong>b) Canonized just two years later:</strong>
        Clare was canonized as early as 1255.</p>
        <p class="vb-intro"><strong>c) An order still in existence today:</strong>
        The Order of Poor Clares still exists worldwide today with thousands of members.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Functioning instead of collapsing:</strong>
        For the self-preservation Three, illness is no reason to abandon one's task – Clare maintained her
        leadership role through nearly three decades of chronic illness.</p>
        <p class="vb-intro"><strong>b) The Two-wing as care for others amid one's own suffering:</strong>
        The repeatedly recorded concern for her fellow sisters rather than herself shows the caring note of the
        Two-wing, even under extreme personal strain.</p>
        <p class="vb-intro"><strong>c) No need for visible sympathy:</strong>
        Unlike subtypes that put illness on public display, Clare, according to the sources, hardly sought
        attention for her own suffering.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Nearly three uninterrupted decades of chronic illness:</strong>
        Hardly any other case in this compass shows such a long, continuous phase of illness combined with a
        continued leadership role.</p>
        <p class="vb-intro"><strong>b) Function and responsibility despite total physical limitation:</strong>
        For a self-preservation Three, whose identity is closely tied to one's own functioning, the leadership
        role remained central even while bedridden.</p>
        <p class="vb-intro"><strong>c) Why holding on to responsibility despite being bedridden specifically?</strong>
        For a self-preservation Three with a Two-wing, whose security lies in reliable functioning and care for
        others, holding onto the order's leadership despite near-total physical limitation can be read as an
        intensification of her own life pattern: even the body was not allowed to fully override function. This
        interpretation is developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the self-preservation Three with a Two-wing inevitably leads to
        chronic bedriddenness – <strong>anyone can develop any illness, regardless of subtype.</strong> Clare's
        illness is also linked to decades of extreme asceticism, not purely explainable psychosomatically. What
        her case shows is a pattern in how chronic illness is handled that recurs in a pronounced
        self-preservation Three with a Two-wing – one of many possible interpretations, not a verdict. The
        corresponding illness pattern is being developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Clare, like nearly everyone of her time, had no Enneagram model. Without this knowledge she lived out
        her pattern – functioning and caring even under extreme physical strain – without restraint, rather than
        granting herself rest in time. Someone who recognizes their own pattern can consciously counteract it;
        someone who does not keeps functioning until the body leaves no other choice.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Three with a Two-wing is confirmed in <strong>Clare of Assisi</strong> by the
        persistence with which she maintained her leadership role for nearly three decades despite chronic,
        bed-confining illness – down to her final achievement, confirmation of her order's rule, two days before
        her death. The raccoon kept working quietly, even once her own body had long stopped cooperating.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-klara-von-assisi", label:"Portrait: Clare of Assisi (SE3w2) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se3", label:"Subtype Profile SE3"},
      ])}
    </div>
  `);
}

export function jeanJacquesRousseauKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jean-jacques-rousseau-portrait.jpg" alt="Jean-Jacques Rousseau – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jean-Jacques Rousseau</p>
        <p class="krim-portrait-typ">SX5w4 · Sexual Type 5 with Four-wing · 1712–1778</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hedgehog</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Animal correspondence: Hedgehog" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jean-Jacques Rousseau</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-jean-jacques-rousseau">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a philosopher. This page focuses on two
        intertwined threads of illness: a chronic urinary condition documented over decades (likely a congenital
        malformation of the urinary tract) with recurring painful episodes, and a growing persecution complex in
        his final years, which he himself processed in his "Confessions" and "Reveries of a Solitary Walker."
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Rousseau</strong> is assigned to the <strong>sexual Type 5 with a Four-wing</strong> – the same
        subtype as Friedrich Nietzsche and Alan Turing in this compass. The sexual Five seeks complete,
        near-merging devotion to a chosen idea or a few people. The Four-wing adds emotional intensity and a
        deep sense of being different – Rousseau's radical introspection in the "Confessions," one of the first
        truly intimate self-portraits in European literature, shows exactly this combination.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Chronic urinary complaints from youth on:</strong>
        Rousseau reported recurring, painful urination problems that accompanied him throughout his life,
        beginning at a young age.</p>
        <p class="vb-intro"><strong>b) First signs of distrust toward former companions:</strong>
        From the 1750s on, a growing distrust developed toward former friends and patrons, including Diderot
        and other Enlightenment figures.</p>
        <p class="vb-intro"><strong>c) Intensification after the publication of "Émile" in 1762:</strong>
        After the condemnation and burning of his work "Émile" and the subsequent flight across Europe, both
        the physical suffering and the distrust intensified considerably.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Pronounced persecution complex in his final years:</strong>
        Rousseau became convinced he was the victim of a far-reaching conspiracy of former friends,
        philosophers, and governments – a conviction that runs through his entire late work.</p>
        <p class="vb-intro"><strong>b) Persistent chronic urinary condition:</strong>
        The physical complaints continued in parallel with the psychological suffering until his death.</p>
        <p class="vb-intro"><strong>c) Radical withdrawal from public life:</strong>
        In his final years, Rousseau increasingly withdrew from Paris's literary and social life, taking solitary
        botanical walks.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Literary processing instead of suppression:</strong>
        Rather than concealing his distrust and fears, Rousseau made them explicitly the subject of his
        "Confessions" and "Reveries of a Solitary Walker" – radical openness about his own inner state.</p>
        <p class="vb-intro"><strong>b) Retreat into nature as refuge:</strong>
        Botany and solitary walks became his most important refuge from a society he experienced as hostile.</p>
        <p class="vb-intro"><strong>c) Continued writing despite persecution complex:</strong>
        Even amid deep distrust toward almost everyone in his circle, Rousseau continued his literary work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in 1778 in Ermenonville:</strong>
        Rousseau died in 1778 on a patron's estate, shortly after completing the "Reveries" – by today's
        assessment likely from a stroke or heart failure.</p>
        <p class="vb-intro"><strong>b) A legacy of radical self-revelation:</strong>
        The "Confessions" is still regarded today as one of the most influential autobiographical works in
        European literary history.</p>
        <p class="vb-intro"><strong>c) Posthumous rehabilitation:</strong>
        In 1794, sixteen years after his death, his remains were transferred to the Panthéon in Paris – a
        posthumous recognition he never experienced in life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Withdrawal as a protective reaction:</strong>
        For the sexual Five, withdrawal from a world experienced as threatening is the most natural protective
        strategy – Rousseau's growing isolation in his final years shows this pattern in extreme form.</p>
        <p class="vb-intro"><strong>b) The Four-wing as radical emotional disclosure:</strong>
        Rather than concealing his inner experience, Rousseau made it the central literary subject of the
        "Confessions" – a willingness, typical of the Four-wing, to lay bare one's emotional truth without
        mercy.</p>
        <p class="vb-intro"><strong>c) Physical suffering as an amplifier of distrust:</strong>
        The persistent, painful urinary condition likely further intensified an already-present tendency toward
        distrust and withdrawal.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Two parallel threads of suffering over decades:</strong>
        The chronic urinary condition and the growing persecution complex ran parallel for decades in Rousseau's
        life and likely reinforced each other.</p>
        <p class="vb-intro"><strong>b) Withdrawal as a persistent constant:</strong>
        For a sexual Five, whose security lies in selectively trusting a few people, the progressive loss of
        trust in almost everyone around him became an existential threat.</p>
        <p class="vb-intro"><strong>c) Why persecution complex and withdrawal specifically?</strong>
        For a sexual Five with a Four-wing, whose protective strategy lies in withdrawal and whose emotional
        depth lies in the sense of being different, the growing persecution complex can be read as an
        intensification of his own life pattern: where trust becomes the only form of closeness, losing that
        trust becomes existentially threatening. This interpretation is developed further in this compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the sexual Five with a Four-wing inevitably leads to a persecution
        complex – <strong>anyone can develop any illness, regardless of subtype.</strong> Rousseau's persecution
        complex is also partly grounded in real conflicts (book burnings, expulsions, public hostility), not
        purely explainable psychosomatically. What his case shows is a pattern in how chronic suffering and
        growing distrust are handled that recurs in a pronounced sexual Five with a Four-wing – one of many
        possible interpretations, not a verdict. The corresponding illness pattern is being developed gradually
        in this compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Rousseau, like everyone of his time, had no Enneagram model. Without this knowledge he lived out his
        pattern of withdrawal and deep distrust without restraint, rather than recognizing it as recurring
        behavior of his own and consciously counteracting it – a trait that enabled unprecedented literary
        openness but increasingly isolated him personally. Someone who recognizes their own pattern can
        consciously counteract it; someone who does not repeats it until hardly anyone is left to be trusted.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Five with a Four-wing is confirmed in <strong>Jean-Jacques Rousseau</strong> by the
        consistency with which he radically disclosed both his physical suffering and his growing distrust in
        writing, rather than concealing them. The hedgehog that curls up when the world turns threatening found
        in literary self-revelation a way to make its inner world visible after all.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-jean-jacques-rousseau", label:"Portrait: Jean-Jacques Rousseau (SX5w4) – life's work"},
        {route:"krankheitsportraets-alan-turing", label:"Illness Portrait: Alan Turing (SX5w4)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx5", label:"Subtype Profile SX5"},
      ])}
    </div>
  `);
}

export function arthurRimbaudKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-arthur-rimbaud-portrait.jpg" alt="Arthur Rimbaud – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Arthur Rimbaud</p>
        <p class="krim-portrait-typ">SX4w3 · Sexual Type 4 with Three-wing · 1854–1891</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Arthur Rimbaud</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-arthur-rimbaud">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a poet and later trader in Africa. This page
        focuses on his final illness: in 1891 Rimbaud was diagnosed with a bone tumor (likely a synovial
        sarcoma) in his right knee, leading to the amputation of his leg in Marseille. He died only months
        later, in November 1891, at age 37.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Rimbaud</strong> is assigned to the <strong>sexual Type 4 with a Three-wing</strong>. The
        sexual Four knows no half-measures – its intensity is lived completely, without compromise. The
        Three-wing adds ambition and the ability to radically reinvent oneself – after abandoning poetry at only
        21, Rimbaud built an entirely new life for himself in Africa as a trader. This same uncompromising
        consistency showed in how he handled his fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Pain in his right knee in Ethiopia:</strong>
        In late 1890/early 1891, Rimbaud, then living as a trader in Harar (Ethiopia), complained of increasing
        pain and swelling in his right knee.</p>
        <p class="vb-intro"><strong>b) Continued work despite the pain:</strong>
        Despite the pain, he initially continued his trading business, hoping it was a temporary ailment.</p>
        <p class="vb-intro"><strong>c) A painful journey to the coast:</strong>
        When the pain became unbearable, Rimbaud had himself carried on an improvised stretcher over twelve
        days across 300 kilometers to the coast at Zeila.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Diagnosis and amputation in Marseille:</strong>
        After arriving in Marseille in May 1891, his right leg was amputated above the knee – doctors diagnosed
        a malignant bone tumor.</p>
        <p class="vb-intro"><strong>b) A brief stay with family:</strong>
        After the operation, Rimbaud traveled to his family in Roche, but returned to Marseille only weeks
        later due to persistent pain and further complications.</p>
        <p class="vb-intro"><strong>c) Rapid progression of the illness:</strong>
        The cancer continued to spread over the following months, likely with metastases causing increasing
        paralysis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Unvarnished letters to family:</strong>
        In his final months, Rimbaud wrote remarkably direct, unsparing letters to his sister Isabelle and his
        mother about his suffering, without softening it.</p>
        <p class="vb-intro"><strong>b) Plans to return to Africa to the very end:</strong>
        Even in his advanced illness, Rimbaud still planned a return to his trading business in Africa – a sign
        of his uncompromising refusal to surrender to the illness.</p>
        <p class="vb-intro"><strong>c) No return to his early poetic work:</strong>
        Despite his fame as a poet, Rimbaud barely spoke of his literary past in his final months – his
        attention remained on his new life as a trader until the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in November 1891:</strong>
        Rimbaud died on November 10, 1891, in a Marseille hospital, cared for by his sister Isabelle, at only
        37 years of age.</p>
        <p class="vb-intro"><strong>b) Posthumous literary fame:</strong>
        Only after his death did his reputation as one of the most influential modern poets steadily grow, far
        beyond anything he experienced in his lifetime.</p>
        <p class="vb-intro"><strong>c) A break still puzzled over today:</strong>
        The radical break between his short, intense poetic career and his later life as a trader remains a
        subject of literary interpretation to this day.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) No half-measures, not even in suffering:</strong>
        For the sexual Four there is no moderate way to endure – Rimbaud's unvarnished, direct letters about
        his suffering show the same uncompromising quality that had already marked his poetry and later his
        break toward Africa.</p>
        <p class="vb-intro"><strong>b) The Three-wing as refusal to give up:</strong>
        His continued plans to return to Africa despite advanced illness show the goal-driven, never-quitting
        ambition of the Three-wing – even facing death, there was no resignation.</p>
        <p class="vb-intro"><strong>c) Radical openness instead of softening:</strong>
        Like Francisco de Goya, who painted his own illness without flattery, Rimbaud shows a rare openness in
        handling his own suffering – no concealment, but an unsparing account.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) An extremely short but radical illness course:</strong>
        Less than a year passed between the first pain and death – a short but, through the amputation and his
        own unsparing account, especially striking final phase of life.</p>
        <p class="vb-intro"><strong>b) Consistency to the very end:</strong>
        For a sexual Four with a Three-wing, whose life was already marked by radical breaks and uncompromising
        consistency, handling his own fatal illness fits seamlessly into this pattern.</p>
        <p class="vb-intro"><strong>c) Why unsparing openness rather than denial specifically?</strong>
        For a sexual Four with a Three-wing, whose identity rests on complete, unfiltered intensity, the
        unsparing openness of his final letters can be read as a consistent continuation of his own life
        pattern: even his own dying was not to be softened. This interpretation is developed further in this
        compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the sexual Four with a Three-wing inevitably leads to bone cancer –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What Rimbaud's case shows is a
        pattern in how a fatal diagnosis is handled that recurs in a pronounced sexual Four with a Three-wing –
        one of many possible interpretations, not a verdict. The corresponding illness pattern is being
        developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Rimbaud, like most people of his time, had no Enneagram model. Without this knowledge he lived out his
        uncompromising nature even in his own dying, without restraint, rather than granting himself relief or
        comfort through softening – a trait that gave his poetry and later life the same radical force, but
        allowed him no mitigating distance in his final phase either. Someone who recognizes their own pattern
        can consciously counteract it; someone who does not lives it unchanged to the last letter.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Four with a Three-wing is confirmed in <strong>Arthur Rimbaud</strong> by the uncompromising
        openness with which he wrote about his suffering even in his final months, and by the determined refusal
        to abandon his plans for the future despite a fatal diagnosis. The chihuahua knows no half-measures –
        not even in its own dying.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-arthur-rimbaud", label:"Portrait: Arthur Rimbaud (SX4w3) – life's work"},
        {route:"krankheitsportraets-jean-paul-sartre", label:"Illness Portrait: Jean-Paul Sartre (SX4w5)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function paulGauguinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-paul-gauguin-portrait.jpg" alt="Paul Gauguin – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Paul Gauguin</p>
        <p class="krim-portrait-typ">SX8w7 · Sexual Type 8 with Seven-wing · 1848–1903</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Crocodile</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Animal correspondence: Crocodile" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Paul Gauguin</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-paul-gauguin">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a Post-Impressionist painter. This page focuses
        on his physical decline in his final years in Tahiti and the Marquesas Islands: a syphilis infection
        with progressive symptoms, a suicide attempt by arsenic in 1897/98, open, poorly healing leg wounds,
        and severe heart failure, from which he died in 1903 at age 54.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Gauguin</strong> is assigned to the <strong>sexual Type 8 with a Seven-wing</strong>. The
        sexual Eight seeks intensity through uncompromising, immediate action rather than restraint. The
        Seven-wing adds restlessness and a hunger for ever-new experience – Gauguin's radical break from his
        bourgeois life in France and his repeated departures into increasingly remote parts of the South Seas
        show exactly this combination. This same restlessness continued in his self-destructive handling of
        his own health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) An infection after arriving in Tahiti:</strong>
        A few years after his arrival in Tahiti in 1891, Gauguin showed the first signs of a syphilis
        infection, the exact timing of which is not reliably documented.</p>
        <p class="vb-intro"><strong>b) Growing heart problems:</strong>
        In parallel, a progressive heart weakness developed, increasingly limiting his physical stamina.</p>
        <p class="vb-intro"><strong>c) Open wounds on his legs:</strong>
        Chronic, poorly healing ulcers on his legs, likely a consequence of the syphilis, made walking
        increasingly difficult.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A suicide attempt by arsenic in 1897/98:</strong>
        After the death of his daughter Aline and amid financial and physical hardship, Gauguin attempted
        suicide with arsenic, which he survived.</p>
        <p class="vb-intro"><strong>b) Continued work despite physical decline:</strong>
        Despite the pain and growing immobility, Gauguin kept painting, completing among other works his
        large-scale masterpiece "Where Do We Come From? What Are We? Where Are We Going?" shortly after the
        suicide attempt.</p>
        <p class="vb-intro"><strong>c) A move to the even more remote Marquesas Islands:</strong>
        In 1901, despite his poor health, Gauguin moved even further from civilization, to the still more
        remote Marquesas Islands.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Readiness for conflict to the end:</strong>
        Even sick and weakened, Gauguin clashed on the Marquesas Islands with the Catholic Church and the
        French colonial authorities, among other things over his support for the local population against
        colonial arbitrariness.</p>
        <p class="vb-intro"><strong>b) Self-medication instead of medical treatment:</strong>
        Gauguin largely treated his pain on his own terms, including with morphine and alcohol, rather than
        seeking regular medical care.</p>
        <p class="vb-intro"><strong>c) No return to Europe despite illness:</strong>
        Despite repeated health crises, Gauguin deliberately chose not to return to France, where better
        medical care would have been available.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in 1903 on the Marquesas Islands:</strong>
        Gauguin died on May 8, 1903, on Hiva Oa, likely of a heart attack resulting from his advanced syphilis
        – far from family and the European art world.</p>
        <p class="vb-intro"><strong>b) Posthumous fame as a pioneer of modernism:</strong>
        Only after his death was Gauguin's work fully recognized as one of the central influences paving the
        way for Expressionism and modern painting.</p>
        <p class="vb-intro"><strong>c) A legacy still contested today:</strong>
        His conduct with young local women in Tahiti and the Marquesas Islands, some of them minors, is
        critically and unambiguously classified as abuse in current scholarship.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Uncompromising action even against his own body:</strong>
        Restraint is foreign to the sexual Eight – Gauguin's refusal to spare himself or seek medical help
        shows the same uncompromising directness that also marked his conflicts with church and colonial
        administration.</p>
        <p class="vb-intro"><strong>b) The Seven-wing as forward flight, ever further away:</strong>
        The move to the even more remote Marquesas Islands despite worsening health shows the restlessness of
        the Seven-wing – not retreat to recover, but further departure.</p>
        <p class="vb-intro"><strong>c) Creative force to the utmost:</strong>
        Shortly after his suicide attempt, Gauguin completed one of his most significant works – his creative
        intensity could not be stopped even by his own despair.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) More than a decade of ongoing physical decline:</strong>
        From the first symptoms after 1891 to his death in 1903, Gauguin's health followed a steady decline
        that he never took as an occasion for orderly medical treatment.</p>
        <p class="vb-intro"><strong>b) Self-destruction instead of self-care:</strong>
        For a sexual Eight with a Seven-wing, whose security lies in immediate, uncompromising action, one's
        own illness became not an occasion for caution but for a further flight forward.</p>
        <p class="vb-intro"><strong>c) Why flight into even greater remoteness specifically?</strong>
        For a sexual Eight with a Seven-wing, whose identity rests on uncompromising autonomy and ever-new
        experience, moving to the even more remote Marquesas Islands despite illness can be read as an
        intensification of his own life pattern: retreating to recover would have amounted to an admission of
        weakness this subtype rarely allows. This interpretation is developed further in this compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the sexual Eight with a Seven-wing inevitably leads to syphilis or
        heart failure – <strong>anyone can develop any illness, regardless of subtype.</strong> Gauguin's
        illness is also closely linked to a documented infection, not purely explainable psychosomatically.
        What his case shows is a pattern in how progressive illness is handled that recurs in a pronounced
        sexual Eight with a Seven-wing – one of many possible interpretations, not a verdict. The corresponding
        illness pattern is being developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Gauguin, like most people of his time, had no Enneagram model. Without this knowledge he lived out his
        uncompromising autonomy and restless drive without restraint, rather than granting himself timely
        medical help or rest – a trait that gave his work a unique radicalism, but consumed him well before his
        time. Someone who recognizes their own pattern can consciously counteract it; someone who does not
        keeps fleeing until the body allows no further flight.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Eight with a Seven-wing is confirmed in <strong>Paul Gauguin</strong> by his uncompromising
        refusal to submit to his own illness through retreat or medical care – instead he fled ever further
        into remoteness, until his body allowed no further flight. The crocodile knows no orderly retreat –
        only swimming on, until its strength finally runs out.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-paul-gauguin", label:"Portrait: Paul Gauguin (SX8w7) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx8", label:"Subtype Profile SX8"},
      ])}
    </div>
  `);
}

export function trumanCapoteKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-truman-capote-portrait.jpg" alt="Truman Capote – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Truman Capote</p>
        <p class="krim-portrait-typ">SO2w3 · Social Type 2 with Three-wing · 1924–1984</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Truman Capote</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-truman-capote">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a writer. This page focuses on his physical
        decline in roughly the last ten years of his life: chronic alcohol and drug abuse that dramatically
        worsened after the 1975/76 publication of a chapter from his unfinished novel "Answered Prayers."
        Capote died in 1984 at age 59 from the effects of liver disease, contributed to by a combination of
        multiple drugs and alcohol.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Capote</strong> is assigned to the <strong>social Type 2 with a Three-wing</strong>. The
        social Two seeks belonging and significance through close ties to a community – for Capote, the
        exclusive circle of wealthy New York society women he himself called his "Swans." The Three-wing adds
        ambition and a sense of public impact. It was precisely this circle that became his undoing when he
        betrayed it in print – and the loss of this belonging coincided almost exactly with the onset of his
        massive physical decline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Drinking already in the 1960s:</strong>
        Even during the years of research for "In Cold Blood" (1959–1965), Capote drank significantly and
        regularly, by his own and others' accounts, to cope with the emotional toll of the research.</p>
        <p class="vb-intro"><strong>b) Growing use of pills:</strong>
        In the early 1970s, prescription sedatives and sleeping pills were added, which he increasingly
        combined with alcohol.</p>
        <p class="vb-intro"><strong>c) First visible public lapses:</strong>
        By the mid-1970s, public appearances multiplied at which Capote visibly appeared intoxicated or under
        the influence of medication.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The break with the "Swans" in 1975/76:</strong>
        When Esquire published a chapter of "Answered Prayers" that revealed barely disguised, intimate details
        from the lives of his closest society friends, nearly all of them turned away from him completely.</p>
        <p class="vb-intro"><strong>b) Dramatic intensification of addiction and isolation:</strong>
        After this social rupture, his alcohol and drug use as well as his social isolation intensified
        considerably – the novel itself remained unfinished.</p>
        <p class="vb-intro"><strong>c) Multiple hospital stays:</strong>
        In the late 1970s and early 1980s, Capote went through several rehabilitation treatments, none of
        which brought lasting improvement.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Public self-presentation despite visible decline:</strong>
        Even in his final years, Capote kept seeking talk-show appearances and public attention, even as his
        physical and mental state was clearly impaired.</p>
        <p class="vb-intro"><strong>b) Continued, unsuccessful attempts to finish "Answered Prayers":</strong>
        Despite the social betrayal the already-published chapters represented, Capote kept working on the
        novel until his death, without ever completing it.</p>
        <p class="vb-intro"><strong>c) Seeking new belonging instead of withdrawing:</strong>
        Rather than withdrawing after the break with the "Swans," Capote feverishly sought new social
        connections and stages, often under growing pressure to succeed and growing desperation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in August 1984:</strong>
        Capote died on August 25, 1984, at Joanne Carson's house in Los Angeles from liver disease, contributed
        to by the combination of multiple medications with alcohol – officially documented as "phlebothrombosis
        complicated by multiple drug intoxication."</p>
        <p class="vb-intro"><strong>b) "Answered Prayers" remained unfinished:</strong>
        The novel that had triggered his social downfall was published posthumously in fragmentary form in
        1986.</p>
        <p class="vb-intro"><strong>c) A reputation that never fully recovered:</strong>
        Capote's literary reputation never fully recovered in his lifetime from the social rupture triggered in
        1975/76, despite his already secured place in American literary history through "In Cold Blood" and
        "Breakfast at Tiffany's."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Loss of community as an existential shock:</strong>
        For the social Two, belonging to a community is central to its own significance – the break with the
        "Swans" struck Capote not only socially but at the core of his self-understanding.</p>
        <p class="vb-intro"><strong>b) The Three-wing as a desperate fight for new stages:</strong>
        Rather than withdrawing, Capote kept seeking public appearances – the ambition of the Three-wing would
        not let him step off the stage even in decline.</p>
        <p class="vb-intro"><strong>c) Addiction as a response to lost belonging:</strong>
        The timing between the 1975/76 social rupture and the dramatic worsening of his addiction suggests the
        substances increasingly served to compensate for the loss of his own community.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Nearly a decade of decline after a precisely datable trigger:</strong>
        Unlike many other cases in this compass, Capote's health decline can be traced to a precisely datable
        social rupture – the 1975/76 publication.</p>
        <p class="vb-intro"><strong>b) Addiction as a substitute for lost belonging:</strong>
        For a social Two, whose security lies in being embedded in a community, the abrupt loss of that
        community can leave an existential void that gets compensated for with substances.</p>
        <p class="vb-intro"><strong>c) Why betraying one's own community specifically?</strong>
        For a social Two with a Three-wing, whose ambition seeks recognition from as broad an audience as
        possible, the literary exposure of the "Swans" can be read as a conflict between two of his own needs:
        belonging to the exclusive community versus the ambition to finish his masterwork at any cost. The
        physical decline that followed can be read as a response to this self-inflicted, irresolvable conflict.
        This interpretation is developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the social Two with a Three-wing inevitably leads to addiction –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What Capote's case shows is a
        pattern in how the loss of central belonging is handled that recurs in a pronounced social Two with a
        Three-wing – one of many possible interpretations, not a verdict. The corresponding illness pattern is
        being developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Capote, like most people of his time, had no Enneagram model. Without this knowledge he lived out his
        ambition and his need for belonging against each other without restraint, rather than recognizing the
        conflict between them in time and consciously managing it – a trait that brought him literary fame but
        also drove him into an addiction he never escaped. Someone who recognizes their own pattern can
        consciously counteract it; someone who does not seeks in substance what the lost community can no
        longer give.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Two with a Three-wing is confirmed in <strong>Truman Capote</strong> by the force with which
        the loss of his closest community accelerated his physical and mental decline – and by his continued,
        desperate search for a new public stage instead of withdrawal. The golden retriever, unable to exist
        without its pack, found no way back to a sustaining sense of belonging after the break with the
        "Swans."</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-truman-capote", label:"Portrait: Truman Capote (SO2w3) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function edgarAllanPoeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-edgar-allan-poe-portrait.jpg" alt="Edgar Allan Poe – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Edgar Allan Poe</p>
        <p class="krim-portrait-typ">SO4w5 · Social Type 4 with Five-wing · 1809–1849</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Edgar Allan Poe</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-edgar-allan-poe">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a writer. This page focuses on his physical and
        mental decline in his final weeks: Poe was found on October 3, 1849, in Baltimore, confused and
        delirious and wearing clothes not his own. He died four days later, on October 7, 1849, in a hospital,
        without the exact cause of death ever being conclusively established – theories range from alcohol
        poisoning to rabies to carbon monoxide poisoning.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Poe</strong> is assigned to the <strong>social Type 4 with a Five-wing</strong> – the same
        subtype as Gustav Mahler in this compass. The social Four carries its own sense of being different
        visibly into a community that both fascinates and excludes it. The Five-wing adds intellectual
        systematization – Poe's literary-theoretical essays on the construction and effect of narrative show
        the same analytical penetration that also structured his dark subject matter. This same combination of
        visible difference and intellectual control also shaped how he handled his own health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Alcohol problems from a young age:</strong>
        Poe already struggled with alcohol problems during his military service and his brief studies at the
        University of Virginia, repeatedly landing him in financial and professional trouble.</p>
        <p class="vb-intro"><strong>b) The death of his wife Virginia in 1847:</strong>
        The death of his wife Virginia from tuberculosis in 1847 plunged Poe into a deep depression from which
        he never fully recovered.</p>
        <p class="vb-intro"><strong>c) Increasingly erratic behavior:</strong>
        In the two years after Virginia's death, acquaintances reported increasingly unpredictable behavior and
        repeated bouts of heavy drinking.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Found in a confused state:</strong>
        On October 3, 1849, Poe was found outside a polling-place tavern in Baltimore, wearing ill-fitting
        clothes not his own and mentally confused.</p>
        <p class="vb-intro"><strong>b) Unable to explain himself:</strong>
        In the hospital, Poe could barely speak coherently and could give no account of what had happened to him
        in the preceding days – to this day one of the great unresolved gaps in his biography.</p>
        <p class="vb-intro"><strong>c) Rapid decline over four days:</strong>
        His condition deteriorated dramatically within days, accompanied by fever and hallucinations, until his
        death on October 7, 1849.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Literary processing of death and decay as a lifelong theme:</strong>
        Decades before his own mysterious death, Poe's work had already been obsessively preoccupied with
        themes such as premature burial, decay, and the disintegration of the mind – as in "The Fall of the
        House of Usher" or "The Tell-Tale Heart."</p>
        <p class="vb-intro"><strong>b) Continued literary work despite chaos:</strong>
        Despite his increasingly unstable life in his final two years, Poe kept publishing poems and essays,
        including "Annabel Lee" shortly before his death.</p>
        <p class="vb-intro"><strong>c) Concealment rather than treatment of his own drinking problem:</strong>
        Poe made occasional attempts at sobriety but rarely spoke openly in public about the extent of his
        alcohol dependence.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death at only 40:</strong>
        Poe died on October 7, 1849, at Washington College Hospital in Baltimore, without the exact cause of
        death ever being conclusively established.</p>
        <p class="vb-intro"><strong>b) One of the most famous unresolved deaths in literary history:</strong>
        To this day, historians and physicians debate theories ranging from alcohol poisoning to rabies,
        epilepsy, and carbon monoxide poisoning to so-called "cooping" (forced intoxication for voter fraud).</p>
        <p class="vb-intro"><strong>c) Posthumous literary influence:</strong>
        Only after his death was Poe's work fully recognized as foundational to the modern short story and
        detective fiction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Visible difference, invisible suffering:</strong>
        For the social Four, one's own difference often shows visibly to the outside world – in Poe's case, in
        his literary work – while the actual personal suffering, his alcohol dependence, remained largely
        hidden.</p>
        <p class="vb-intro"><strong>b) The Five-wing as intellectual distancing from one's own pain:</strong>
        Poe's literary-theoretical writings, which analyzed a story's emotional effect almost mathematically,
        show the Five-wing as an attempt to intellectually order his own, often overwhelming emotional life.</p>
        <p class="vb-intro"><strong>c) A mysterious final retreat instead of public complaint:</strong>
        The days before his death remain a mystery to this day – an unusual disappearance from his own
        narrative for a social Four, precisely because his work was otherwise so marked by control over his own
        self-presentation.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Decades of latent suffering escalating in the final weeks:</strong>
        Poe's alcohol problem accompanied him throughout his adult life before coming to a fatal crisis in his
        final days.</p>
        <p class="vb-intro"><strong>b) Visible literary work, hidden personal suffering:</strong>
        For a social Four, whose significance often arises from visibly displaying one's own difference, the
        actual personal suffering – the addiction – remained, paradoxically, largely invisible.</p>
        <p class="vb-intro"><strong>c) Why an unresolved disappearance specifically?</strong>
        For a social Four with a Five-wing, whose significance is closely tied to one's own, controlled
        narrative, the mysterious disappearance of his final days can be read as a break with his own life
        pattern: precisely the man who controlled death and decay down to the last literary detail completely
        lost control over his own final story. This interpretation is developed further in this compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the social Four with a Five-wing inevitably leads to alcoholism or an
        unresolved death – <strong>anyone can develop any illness, regardless of subtype.</strong> Poe's alcohol
        dependence is also a distinct illness with its own dynamics, not purely explainable psychosomatically.
        What his case shows is a pattern in how hidden personal suffering coexists with visible artistic
        engagement with the same themes that recurs in a pronounced social Four with a Five-wing – one of many
        possible interpretations, not a verdict. The corresponding illness pattern is being developed gradually
        in this compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Poe, like most people of his time, had no Enneagram model. Without this knowledge he processed death and
        decay to the point of literary mastery, while never addressing or treating his own actual suffering
        with the same clarity – a trait that gave his work a unique, still-resonating force, but opened no path
        out of his own addiction. Someone who recognizes their own pattern can consciously counteract it;
        someone who does not processes their own distress in the work instead of treating it in their own life.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Four with a Five-wing is confirmed in <strong>Edgar Allan Poe</strong> by the striking
        contrast between a body of work that controlled death and decay down to the smallest literary detail,
        and an actual personal suffering that remained largely hidden even in his final, still-mysterious days.
        The armadillo displayed its literary armor masterfully – what lay beneath remained, to the end, his own
        unsolved secret.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-edgar-allan-poe", label:"Portrait: Edgar Allan Poe (SO4w5) – life's work"},
        {route:"krankheitsportraets-gustav-mahler", label:"Illness Portrait: Gustav Mahler (SO4w5)"},
        {route:"krankheitsportraets-leonard-cohen", label:"Illness Portrait: Leonard Cohen (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function jeanPaulSartreKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jean-paul-sartre-portrait.jpg" alt="Jean-Paul Sartre – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jean-Paul Sartre</p>
        <p class="krim-portrait-typ">SX4w5 · Sexual Type 4 with Five-wing · 1905–1980</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jean-Paul Sartre</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-jean-paul-sartre">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a philosopher and writer. This page focuses on his
        decades of amphetamine abuse (Corydrane, an over-the-counter stimulant at the time), which he used to
        fuel his enormous writing output, and his progressive blindness in his final years.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Sartre</strong> is assigned to the <strong>sexual Type 4 with a Five-wing</strong>. The sexual
        Four knows no half-measures – its intensity is lived completely. The Five-wing adds intellectual
        systematization: Sartre used the substance deliberately to drive his monumental philosophical work with
        maximum mental sharpness, not for escape. This exact combination of uncompromising intensity and
        intellectual drive shaped how he handled his own health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Corydrane use begins in the 1950s:</strong>
        Sartre began taking the amphetamine-based drug Corydrane in the 1950s to boost his concentration while
        writing.</p>
        <p class="vb-intro"><strong>b) Extreme dosages while writing the "Critique of Dialectical Reason":</strong>
        By his own account, Sartre took as many as twenty tablets a day while working on this monumental work
        in the early 1960s – many times the recommended dose.</p>
        <p class="vb-intro"><strong>c) First signs of failing eyesight:</strong>
        In parallel, Sartre developed a progressive deterioration of his eyesight, attributed partly to the
        substance abuse and partly to independent, age-related causes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Open handling of his own substance use:</strong>
        Unlike many other cases, Sartre spoke relatively openly in interviews and in conversations with Simone
        de Beauvoir about his Corydrane use and its role in his creative process.</p>
        <p class="vb-intro"><strong>b) Near-total blindness in the 1970s:</strong>
        From the mid-1970s on, Sartre lost nearly all his eyesight, forcing him to fundamentally change how he
        worked as a writer.</p>
        <p class="vb-intro"><strong>c) Continued intellectual work despite blindness:</strong>
        Despite his blindness, Sartre continued his philosophical and political work, among other things
        through dictated conversations and interviews.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) The substance as a tool for maximum intensity, not escape:</strong>
        For Sartre, Corydrane served not distraction but the intensification of his own mental sharpness – an
        uncompromising focus on his own intellectual output.</p>
        <p class="vb-intro"><strong>b) No concealment, but also no change in behavior:</strong>
        Although he spoke openly about the risks, Sartre barely changed his use over the years, even once
        health effects had become visible.</p>
        <p class="vb-intro"><strong>c) Adapting his working method instead of withdrawing after blindness:</strong>
        Rather than withdrawing from public intellectual life after losing his eyesight, Sartre found new ways
        to keep participating in political and philosophical discourse.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in 1980 in Paris:</strong>
        Sartre died on April 15, 1980, in Paris of pulmonary edema, after decades of intense physical
        self-exploitation through substance abuse, alcohol, and nicotine.</p>
        <p class="vb-intro"><strong>b) One of the most extensive philosophical bodies of work of the 20th
        century:</strong> Despite – or precisely because of – his excessive working style, Sartre left behind
        an extraordinarily extensive philosophical, literary, and political body of work.</p>
        <p class="vb-intro"><strong>c) One of the largest funerals in French history:</strong>
        An estimated 50,000 people attended Sartre's funeral – an expression of his enormous cultural and
        intellectual significance for France.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) No half-measures, not even in substance use:</strong>
        For the sexual Four there is no moderate amount – Sartre's extreme Corydrane dosages show the same
        uncompromising intensity that also marked his philosophical thinking.</p>
        <p class="vb-intro"><strong>b) The Five-wing as justification through intellectual output:</strong>
        Unlike purely hedonistic substance abuse, the drug served Sartre a clearly defined intellectual goal –
        the Five-wing framed the use as a tool of mental penetration, not enjoyment.</p>
        <p class="vb-intro"><strong>c) Openness without behavioral change:</strong>
        Sartre's willingness to speak openly about his substance use without changing it shows a radical
        honesty toward himself typical of the sexual Four, which does not automatically translate into changed
        behavior.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Decades of uncompromising physical self-exploitation:</strong>
        From the 1950s until his death in 1980, Sartre lived in a pattern of extreme physical self-exploitation
        in service of his intellectual production.</p>
        <p class="vb-intro"><strong>b) The substance as an extension of his own intensity, not an escape from
        it:</strong> For a sexual Four with a Five-wing, whose identity rests on complete, unfiltered intensity
        and intellectual penetration, the drug served to amplify both of these core traits, not to numb them.</p>
        <p class="vb-intro"><strong>c) Why openness without consequence specifically?</strong>
        For a sexual Four with a Five-wing, whose honesty toward itself takes priority over self-care, Sartre's
        behavior can be read as a consistent continuation of his own life pattern: speaking his own truth
        mattered more than drawing practical consequences from it for his own health. This interpretation is
        developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the sexual Four with a Five-wing inevitably leads to substance abuse –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What Sartre's case shows is a
        pattern in how self-chosen physical strain in service of an intellectual mission is handled that
        recurs in a pronounced sexual Four with a Five-wing – one of many possible interpretations, not a
        verdict. The corresponding illness pattern is being developed gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Sartre, like most people of his time, had no Enneagram model. Without this knowledge he lived out his
        uncompromising intellectual intensity without restraint, rather than limiting his own substance use in
        time – a trait that made possible one of the century's most extensive philosophical works, but cost him
        his eyesight and health. Someone who recognizes their own pattern can consciously counteract it;
        someone who does not extends their own intensity until the body sets the limit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Four with a Five-wing is confirmed in <strong>Jean-Paul Sartre</strong> by the uncompromising
        intensity with which he used substances to boost his intellectual output, and by the radical openness
        with which he spoke about it without changing his behavior. The chihuahua knows no half-measures – not
        even in service of its own thinking.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-jean-paul-sartre", label:"Portrait: Jean-Paul Sartre (SX4w5) – life's work"},
        {route:"krankheitsportraets-arthur-rimbaud", label:"Illness Portrait: Arthur Rimbaud (SX4w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function leonardCohenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-leonard-cohen-portrait.jpg" alt="Leonard Cohen – portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Leonard Cohen</p>
        <p class="krim-portrait-typ">SO4w5 · Social Type 4 with Five-wing · 1934–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Leonard Cohen</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-leonard-cohen">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work as a musician and poet. This page focuses on two
        chapters of his health history: his lifelong, repeatedly and publicly discussed depression, which
        among other things led him to a five-year stay at a Zen monastery, and vertebral compression fractures
        in his final years, which forced him to record his last album, "You Want It Darker," sitting down and
        in considerable pain.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Cohen</strong> is assigned to the <strong>social Type 4 with a Five-wing</strong> – the same
        subtype as Gustav Mahler and Edgar Allan Poe in this compass. The social Four carries its own sense of
        being different visibly into a community that both fascinates and excludes it. The Five-wing adds a
        contemplative, often spiritually-intellectual search for structure – Cohen's decades of Zen practice
        and his extremely dense, disciplined poetry show exactly this combination. Both chapters of his health
        history reflect this basic stance.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Depression from a young age:</strong>
        In numerous interviews, Cohen described depressive episodes accompanying him since his youth, often as
        a kind of persistent, muted baseline state.</p>
        <p class="vb-intro"><strong>b) Retreat to a Zen monastery in the 1990s:</strong>
        In 1994, Cohen withdrew for five years to the Mount Baldy Zen Center, where he was ordained a monk in
        1996 – a direct attempt to meet his lifelong depression with spiritual discipline.</p>
        <p class="vb-intro"><strong>c) First physical signs of aging from the 2010s on:</strong>
        In his final years, Cohen developed growing back problems that later turned out to be vertebral
        compression fractures.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Financial fraud by his own manager in 2004:</strong>
        After returning from the monastery, Cohen discovered that his longtime manager had embezzled most of
        his fortune – a shock that forced him, at age 73, into one of the most extensive world tours of his
        career.</p>
        <p class="vb-intro"><strong>b) Vertebral compression fractures in his final years:</strong>
        In his last two years, Cohen suffered several vertebral compression fractures that made standing and
        walking considerably difficult.</p>
        <p class="vb-intro"><strong>c) Recording his last album in pain:</strong>
        Cohen recorded most of his final studio album, "You Want It Darker" (2016), sitting down, as standing
        for long periods was barely possible due to his back pain.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Open handling of his own depression in interviews:</strong>
        Unlike many other artists of his generation, Cohen repeatedly spoke with remarkable clarity about his
        depression, without dramatizing or downplaying it.</p>
        <p class="vb-intro"><strong>b) Spiritual discipline instead of medication:</strong>
        Cohen primarily sought to handle his depression through meditation and monastic discipline rather than
        primarily through pharmacological treatment.</p>
        <p class="vb-intro"><strong>c) Continued artistic work despite physical decline:</strong>
        Despite his vertebral fractures and severe pain, Cohen completed his final album in full and released
        it only weeks before his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death in November 2016:</strong>
        Cohen died on November 7, 2016, in Los Angeles in his sleep, following a fall combined with leukemia he
        had never disclosed to the public.</p>
        <p class="vb-intro"><strong>b) An album as a deliberate farewell:</strong>
        "You Want It Darker," whose title track explicitly engages themes of death and surrender, was released
        only 17 days before Cohen's death – interpreted in retrospect by many critics as a deliberate artistic
        farewell.</p>
        <p class="vb-intro"><strong>c) Late commercial and critical recognition:</strong>
        The world tour forced by the financial fraud, beginning in 2008, brought Cohen greater commercial
        success and recognition in old age than much of his earlier career.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Pattern</h3>
        <p class="vb-intro"><strong>a) Visible difference through open language about inner heaviness:</strong>
        For the social Four, one's own difference often shows visibly to the outside world – in Cohen's case,
        through his unusually clear, public language about his depression, which set him apart from many
        contemporaries.</p>
        <p class="vb-intro"><strong>b) The Five-wing as a search for structure and discipline:</strong>
        The retreat to the Zen monastery shows the Five-wing in its purest form – a structured, almost
        scientifically disciplined approach to a deeply emotional problem.</p>
        <p class="vb-intro"><strong>c) Completing the work despite physical decline:</strong>
        Finishing "You Want It Darker" despite severe pain shows the same consistency with which Cohen held to
        his artistic task throughout his life.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A lifelong, openly discussed suffering alongside a late-onset physical
        decline:</strong> Cohen's depression accompanied him throughout his adult life, while the vertebral
        fractures only appeared in his final two years – two separate but interlocking chapters of his health
        history.</p>
        <p class="vb-intro"><strong>b) Spiritual processing instead of pure treatment:</strong>
        For a social Four with a Five-wing, whose significance arises from the visible processing of one's own
        difference, the depression was not merely treated but became a central theme of his spiritual and
        artistic path.</p>
        <p class="vb-intro"><strong>c) Why a final album about death and surrender specifically?</strong>
        For a social Four with a Five-wing, whose identity is closely tied to the controlled artistic
        processing of one's own experience, the deliberate completion of "You Want It Darker" can be read as a
        consistent closing of his own life pattern: unlike Edgar Allan Poe, his own dying did not become an
        unresolved mystery but his last, deliberately shaped artistic work. This interpretation is developed
        further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean the pattern of the social Four with a Five-wing inevitably leads to depression or
        vertebral fractures – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Cohen's case shows is a pattern in how lifelong psychological suffering and late physical decline are
        handled that recurs in a pronounced social Four with a Five-wing – one of many possible
        interpretations, not a verdict. The corresponding illness pattern is being developed gradually in this
        compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Cohen, like most people of his time, had no Enneagram model. Without this knowledge he sought spiritual
        rather than structured medical paths for decades in handling his depression, which gave him profound
        artistic insight but offered no complete way out of his own suffering. Someone who recognizes their own
        pattern can consciously counteract it; someone who does not processes their own heaviness artistically
        for a lifetime instead of fully resolving it.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Four with a Five-wing is confirmed in <strong>Leonard Cohen</strong> by the clarity with
        which he publicly processed his lifelong psychological suffering in language, and by the consistency
        with which he deliberately shaped his final work into a farewell despite severe physical decline. The
        armadillo carried its armor of words to the very end – and used it to make visible exactly what others
        would have hidden.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-leonard-cohen", label:"Portrait: Leonard Cohen (SO4w5) – life's work"},
        {route:"krankheitsportraets-gustav-mahler", label:"Illness Portrait: Gustav Mahler (SO4w5)"},
        {route:"krankheitsportraets-edgar-allan-poe", label:"Illness Portrait: Edgar Allan Poe (SO4w5)"},
        {route:"krankheitsportraets-fiona-apple", label:"Illness Portrait: Fiona Apple (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}
