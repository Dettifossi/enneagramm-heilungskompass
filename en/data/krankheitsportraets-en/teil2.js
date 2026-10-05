import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function aiWeiweiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ai-weiwei-portrait.jpg" alt="Ai Weiwei" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ai Weiwei</p>
        <p class="krim-portrait-typ">SP2w3 &middot; Self-Preservation Type 2 with Three-wing &middot; b. 1957</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ai Weiwei</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-ai-weiwei">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his artistic and activist life's work.
        This page explores a chapter only outlined in passing there: in August 2009, Ai Weiwei was
        beaten by Chinese police in Chengdu badly enough to require hospitalization,
        suffered a cerebral hemorrhage as a result, and had to undergo emergency surgery in
        Munich a few weeks later – he has suffered from chronic headaches ever since.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Ai Weiwei</strong> is assigned to the <strong>Self-Preservation Type 2 with
        Three-wing</strong>. The SP2 cares for others directly and physically, first
        securing its own capacity to act; the Three-wing adds a hunger for visibility and
        the widest possible reach. This exact combination – care that does not withdraw but
        becomes publicly visible – also determined how Ai Weiwei handled the police
        violence he suffered and its consequences.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The attack in Chengdu in August 2009:</strong>
        Ai Weiwei had traveled to Chengdu to testify at the trial of activist Tan Zuoren,
        who like him had investigated the Sichuan earthquake victims. Police officers broke
        into his hotel room at night and beat him.</p>
        <p class="vb-intro"><strong>b) An internal injury that initially went unnoticed:</strong>
        Externally, there were at first no dramatic signs – the actual injury, an internal
        cerebral hemorrhage, remained undetected for days.</p>
        <p class="vb-intro"><strong>c) Diagnosis only weeks later, in Germany:</strong>
        Only in September 2009, while preparing an exhibition in Munich, was a cerebral
        hemorrhage diagnosed after he experienced severe headaches, requiring immediate
        emergency surgery.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Successful emergency surgery in Munich:</strong>
        Doctors in Munich operated on Ai Weiwei immediately and were able to avert the
        acute danger to his life.</p>
        <p class="vb-intro"><strong>b) Chronic headaches as a lasting consequence:</strong>
        Since the incident, Ai Weiwei has reported recurring severe headaches – a
        permanent physical reminder of the violence he suffered.</p>
        <p class="vb-intro"><strong>c) No distancing from his work:</strong>
        Rather than withdrawing from his activist work out of concern for his own health,
        Ai Weiwei resumed his public criticism of the Chinese government undiminished after
        his recovery.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) The injury became a work of art:</strong>
        Ai Weiwei publicly documented his own injury, including under the provocative
        self-portrait title "Fuck Off" and X-ray-like depictions of his own head – his own
        vulnerability was not hidden but turned into evidence against state violence.</p>
        <p class="vb-intro"><strong>b) Legal resistance despite the risk:</strong>
        Ai Weiwei attempted to hold the responsible police officers legally accountable – an
        approach that carried considerable personal risk in China and ultimately failed,
        but did not stop him from pursuing further legal action.</p>
        <p class="vb-intro"><strong>c) Growing state surveillance and repression:</strong>
        In the years following the incident, pressure from the Chinese state intensified
        further, culminating in his 81-day detention in 2011 – an escalating pattern in
        which the 2009 cerebral hemorrhage appears in retrospect as an early turning point.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) International attention for the case:</strong>
        The emergency surgery in Munich and its circumstances were reported extensively
        internationally, making the case of Ai Weiwei known to a broad Western audience
        that had previously known little of his art.</p>
        <p class="vb-intro"><strong>b) An event that shaped his work:</strong>
        His own injury became a recurring motif in Ai Weiwei's later work – evidence that
        personally suffered violence never stayed private for him but was consistently
        transformed into public artistic statement.</p>
        <p class="vb-intro"><strong>c) No retreat despite escalating threat:</strong>
        Neither the head injury nor his later 2011 detention brought Ai Weiwei to abandon
        his critical public stance – only the confiscation of his passport effectively
        forced him into exile in 2015.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Care that turns one's own injury into action:</strong>
        The same SP2 conviction that compassion must express itself in concrete, visible
        action also determined how Ai Weiwei handled his own injury – not through quiet
        processing, but through public documentation and artistic transformation.</p>
        <p class="vb-intro"><strong>b) The Three-wing and the maximum reach of one's own suffering:</strong>
        Where another person might have kept their own injury private, Ai Weiwei actively
        sought the widest possible publicity for it – the same logic with which he always
        designed his artworks for maximum media reach.</p>
        <p class="vb-intro"><strong>c) Pride that does not bend to violence:</strong>
        The Two's passion, directed at one's own indispensability and effectiveness,
        showed itself in the refusal to treat the violence he suffered as a defeat – it
        instead became evidence of his own moral position against the state.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A body that became evidence:</strong>
        For Ai Weiwei, whose entire body of work rests on making silenced truths visible,
        the violence against his own body struck exactly that nerve – the cerebral
        hemorrhage was not repressed but channeled into the same logic of making visible
        that had already shaped the 5,196 names of the earthquake victims.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Frida
        Kahlo</a> (also SP2w3) systematically turned the pain of her own body, permanently
        injured in a bus accident, into her main artistic subject rather than concealing
        her suffering; Ai Weiwei responded to the violence inflicted on him with the same
        basic stance – his own injured body is not hidden but becomes the central, publicly
        visible material of his work. Both cases show the same SE2w3 pattern: personal pain
        is not privatized but, driven by the Three-wing's hunger for reach, carried to the
        widest possible audience. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-frida-kahlo">Illness Portrait of Frida Kahlo</a>.</p>
        <p class="vb-intro"><strong>c) Why the head, of all things?</strong>
        For a Self-Preservation Two with a Three-wing, whose entire impact rests on
        perception, communication, and his own voice, one interpretation suggests itself:
        precisely the organ with which he thought, spoke, and observed the world became the
        site of the violence – a direct threat to his most important tool as an activist
        and artist. This interpretation is a plausible reading, not a documented historical
        causal link, and will be developed further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation Two's pattern inevitably leads to
        police violence and cerebral hemorrhage – <strong>anyone can suffer any illness or
        injury, regardless of subtype.</strong> What Ai Weiwei's case illustrates is a
        pattern in how a pronounced Self-Preservation Two with a Three-wing tends to handle
        violence suffered – one of many possible interpretations, not a verdict. The
        corresponding illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Ai Weiwei does not know his own pattern – the Self-Preservation Two with a Three-wing
        reflexively turns its own suffering into visible, public action instead of ever
        processing it privately, and he has lived out exactly this pattern unchanged since the
        cerebral hemorrhage. Someone who does not recognize their own need to turn
        suffering into reach as a pattern cannot pause to protect themselves even in the
        face of a life-threatening injury.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Two with a Three-wing explains much about how
        <strong>Ai Weiwei</strong> has handled his own injury: a man whose entire body of work
        rests on making the concealed visible has not let himself be silenced by a cerebral
        hemorrhage – the hippopotamus that does not hide its wound but displays it in the
        middle of its territory, so no one can overlook it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ai-weiwei", label:"Portrait: Ai Weiwei (SP2w3) – the hippopotamus"},
        {route:"krankheitsportraets-frida-kahlo", label:"Illness Portrait: Frida Kahlo (SP2w3) – the same pattern of visible suffering"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SP2"},
      ])}
    </div>
  `);
}

export function astridLindgrenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-astrid-lindgren-portrait.jpg" alt="Astrid Lindgren" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Astrid Lindgren</p>
        <p class="krim-portrait-typ">SE1w9 · Self-Preservation Type 1 with Nine-Wing · 1907–2002</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Astrid Lindgren</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-astrid-lindgren">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there: a
        progressive macular degeneration in old age that forced her to entirely give up her
        decades-long writing routine.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Lindgren</strong> is assigned to the <strong>self-preservation Type 1 with
        Nine-Wing</strong>. The SE1 directs its perfectionism at its own work discipline; the
        Nine-Wing gives it the ability to adapt and process even profound losses without
        public fuss. Exactly this combination – losing the central tool of her work, combined
        with quiet adaptation to new working methods rather than public complaint – shaped
        how she dealt with going blind in old age.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Declining eyesight in old age:</strong>
        According to consistent biographical sources, Lindgren's eyesight noticeably began
        to decline in her final decades – a gradual process that increasingly complicated her
        decades-old work routine.</p>
        <p class="vb-intro"><strong>b) Diagnosis of age-related macular degeneration:</strong>
        Lindgren was diagnosed with progressive macular degeneration, an eye condition that
        increasingly impairs sharp vision at the center of the visual field.</p>
        <p class="vb-intro"><strong>c) Growing difficulty writing and reading:</strong>
        Over the years, the condition made it increasingly hard for her to continue her usual
        working method – shorthand writing by hand in the morning, followed by typing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Nearly complete blindness in her final years:</strong>
        In her final years, Lindgren was, according to consistent reports, practically
        blind – a limitation she barely addressed publicly.</p>
        <p class="vb-intro"><strong>b) Switching to dictation instead of writing:</strong>
        To continue writing, Lindgren switched her working method to dictation – she spoke
        texts that her longtime secretary wrote down instead of putting them on paper
        herself.</p>
        <p class="vb-intro"><strong>c) No public withdrawal because of the condition:</strong>
        Despite the visual impairment, Lindgren continued her public engagement, especially
        for animal welfare, into her final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Continued animal welfare engagement despite blindness:</strong>
        Her decisive public campaign for the "Lex Lindgren" in 1988 took place when her
        eyesight was already significantly impaired – proof that the condition did not limit
        her effectiveness.</p>
        <p class="vb-intro"><strong>b) No extensive public discussion:</strong>
        Unlike some public figures with comparable conditions, Lindgren never turned her
        blindness into a public cause or campaign – it remained a private circumstance that
        shaped her work practically but not publicly.</p>
        <p class="vb-intro"><strong>c) Death at age 94:</strong>
        Lindgren died in 2002 in Stockholm, after years in which she had maintained her
        public effectiveness despite near-complete blindness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) National mourning at her death:</strong>
        Her funeral was broadcast live on Swedish television – an expression of the immense
        national significance that reached far beyond her health limitations.</p>
        <p class="vb-intro"><strong>b) No public image of a sick old woman:</strong>
        Lindgren's public image remained defined by effectiveness and moral authority until
        her death, not by her own physical limitation.</p>
        <p class="vb-intro"><strong>c) Later biographical recognition of the adaptation:</strong>
        Only later biographies more fully honored what it meant to learn an entirely new way
        of working in old age without losing effectiveness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Discipline that adapted to new circumstances:</strong>
        The SE1's characteristic work discipline also showed in how she dealt with going
        blind: Lindgren did not give up writing, but found a new, equally disciplined
        method – dictation.</p>
        <p class="vb-intro"><strong>b) The Nine-Wing and quiet adaptation instead of public complaint:</strong>
        The same restraint with which Lindgren protected her private life from the public her
        whole life showed in dealing with blindness as a deliberate decision not to make her
        own limitation a public topic.</p>
        <p class="vb-intro"><strong>c) Effectiveness despite limitation as a continuation of her own pattern:</strong>
        That she continued her most important political engagement – animal welfare –
        precisely in the years when her eyesight was most impaired fits the SE1w9 conviction
        that one's own task matters more than one's own comfort or the visibility of one's
        own limits.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An author of precise observation who lost the ability to see:</strong>
        Lindgren's entire body of work rested on precise observation – of the world of
        children, of social injustice, of her own manuscripts as an editor. Of all things, the
        eyesight that made this precision possible failed her in old age.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer (SE1w9)</a>: Adenauer too remained remarkably effective into old age despite
        considerable physical impairment, without making his own health burden a public
        topic. Both SE1w9s show the same pattern: a physical limitation is compensated
        through discipline and quiet adaptation rather than negotiated in public.</p>
        <p class="vb-intro"><strong>c) Why the eyes, of all things, the tool of precise observation?</strong>
        For a self-preservation One with a Nine-Wing whose entire work rested on precise
        observation and disciplined accuracy, one interpretation suggests itself: exactly the
        organ that was the foundation of her working method became the site of physical loss.
        This reading is a plausible interpretation, not a proven clinical causal link, and
        will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the self-preservation One's pattern inevitably leads to
        macular degeneration – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Lindgren's case is a pattern in dealing with an
        age-related physical limitation that keeps recurring in a pronounced
        self-preservation Type 1 with a Nine-Wing – one of many possible readings, not a
        verdict. The corresponding illness pattern is being developed gradually in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Lindgren did not know her own pattern as an Enneagram structure – the
        self-preservation Type 1 with a Nine-Wing reflexively clings to its own discipline
        and quiet adaptation instead of openly naming physical losses, and lived out exactly
        this pattern unchanged until her death. Anyone who does not recognize their own
        tendency to compensate for physical limitations without open discussion as a pattern
        risks that their own burden remains invisible, even when support would be
        possible.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 1 with Nine-Wing explains much about how <strong>Astrid
        Lindgren</strong> dealt with going blind: a woman whose entire work rested on precise
        observation found a new, equally disciplined way to keep working once her eyesight
        itself failed her – the eagle that, even without the full view, still knew where it
        had to fly.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-astrid-lindgren", label:"Portrait: Astrid Lindgren (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Illness Portrait: Konrad Adenauer (SE1w9) – same subtype"},
        {route:"krankheitsportraets-robert-de-niro", label:"Illness Portrait: Robert De Niro (SE1w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SE1"},
      ])}
    </div>
  `);
}

export function charlesMansonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/charles-manson-portrait.jpg" alt="Charles Manson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Manson</p>
        <p class="krim-portrait-typ">SX6w7 · Sexual Type 6 with Seven-wing · 1934–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Manson</strong> already has a
        <a href="javascript:void(0)" data-route="kriminalpsychologie-charles-manson">criminal-psychology portrait</a>
        in this Compass – that page covers the 1969 Tate-LaBianca murders and his type
        structure as a cult leader. This page delves into a chapter only briefly mentioned
        there: a colon cancer diagnosed in his final year in custody, from which he died in
        2017 at age 83 in a prison hospital.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Manson</strong> is classified as the <strong>Sexual Type 6 with
        Seven-wing</strong> – the countertype of the Six, who overcompensates for fear not
        through compliance but through offensive strength. The Seven-wing lends charisma and a
        capacity for enthusiasm that, in his final illness, funneled into the same
        uncompromising need for control that had shaped his entire life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Hospitalization in January 2017 for gastrointestinal bleeding:</strong>
        In early 2017, Manson had to be transferred from Corcoran State Prison to a
        hospital – a first clear sign of a serious illness.</p>
        <p class="vb-intro"><strong>b) Diagnosis of colon cancer:</strong>
        In connection with this hospitalization, Manson was diagnosed with colon cancer –
        according to media reports, he refused surgery for a time.</p>
        <p class="vb-intro"><strong>c) Little public reaction from prison:</strong>
        Little emerged from prison about the course of his illness – Manson remained, as he had
        been his whole life, a man who kept control over his own portrayal.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) No public weakness allowed:</strong>
        Manson continued giving interviews and being photographed even after his
        diagnosis – behavior consistent with his lifelong self-presentation as an
        unassailable leader.</p>
        <p class="vb-intro"><strong>b) Continued refusal of remorse or withdrawal:</strong>
        Into his final months, Manson showed no public remorse for the 1969 murders – the
        illness did not change this fundamental stance.</p>
        <p class="vb-intro"><strong>c) Renewed hospitalization in November 2017:</strong>
        Days before his death, Manson was transferred again from custody to a hospital in Kern
        County due to an acute deterioration in his condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Death on 19 November 2017:</strong>
        Charles Manson died at age 83 in a hospital in Kern County, California – the immediate
        cause of death was recorded as cardiac arrest, with colon cancer listed as the
        underlying condition.</p>
        <p class="vb-intro"><strong>b) 48 years after the murders, 46 years in custody:</strong>
        Nearly five decades passed between the Tate-LaBianca murders in 1969 and his death,
        most of which Manson spent in various California correctional facilities.</p>
        <p class="vb-intro"><strong>c) No plea for clemency, no late remorse:</strong>
        Unlike some convicted offenders who ask for forgiveness in the face of death, Manson
        held to his self-image as an unbowed outsider to the very end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death that drew little sympathy:</strong>
        Unlike most other illness portraits in this Compass, Manson's death was met by the
        public mostly with relief and a sense of closure rather than grief – a reaction that
        explains his acts without justifying them.</p>
        <p class="vb-intro"><strong>b) An obituary full of distance:</strong>
        Media coverage of his death focused almost exclusively on the 1969 murders – the
        illness itself remained a footnote to a life already fully defined by his acts.</p>
        <p class="vb-intro"><strong>c) An end without an audience, unlike his life:</strong>
        The man who once gathered entire groups around himself and turned the courtroom into a
        stage died largely unnoticed in a hospital bed – a striking contrast to his lifelong
        self-staging.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The wolf that showed no weakness even in dying:</strong>
        The same controlling stance with which Manson steered his followers for decades, and
        later his public image, also determined how little emerged about the course of his
        illness.</p>
        <p class="vb-intro"><strong>b) Refusal as a final demonstration of power:</strong>
        His reported initial refusal of surgery fits the countertype's pattern: even his own
        body was expected to submit to his decision, not the other way around.</p>
        <p class="vb-intro"><strong>c) No collapse of the facade:</strong>
        Unlike some other illness courses in this Compass, there are no reports of a visible,
        public collapse of Manson's controlled self-image – the facade held, as far as is
        known, to the end.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A need for control that reached into his own body:</strong>
        Manson's entire life was shaped by the attempt to gain control over other people to
        overcompensate for a deep fear of powerlessness – facing his fatal illness, that same
        controlling stance was forced inward, onto a body that could no longer be steered.</p>
        <p class="vb-intro"><strong>b) No opening, no transformation through the illness:</strong>
        Unlike many other illness portraits in this Compass, Manson's case shows no sign of
        inner transformation, remorse, or openness in the face of approaching death – the
        countertype's pattern remained intact to the end.</p>
        <p class="vb-intro"><strong>c) Why the colon, of all things?</strong>
        For a Sexual Six whose entire life was governed by the question of whom to trust and
        whom to control, one interpretation suggests itself: precisely the organ system
        responsible in the body for digestion, in the sense of processing and letting go,
        became the site of an illness that – unlike Manson himself – submitted to no one's
        control. This interpretation is a plausible reading, not a documented historical
        causal link, and is developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean that the Sexual Six pattern inevitably leads to bowel disease –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Manson's case illustrates is a pattern in how one destructively expressed Sexual Six
        with Seven-wing handled his own mortality – one of many possible interpretations, not
        a judgment. The corresponding illness pattern is gradually being developed in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics
        register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Manson did not know his own pattern – the Sexual Six as countertype reflexively
        overcompensates for fear through control and attack, rather than ever recognizing it in
        himself, and he lived out exactly this pattern unchanged until his final week, never
        developing any other way of relating to his own vulnerability. Someone who does not
        recognize their own need for control as a pattern cannot let it go even in the face of
        their own death.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Manson's</strong> Sexual Six with Seven-wing is legible once more in the course
        of his illness: no opening, no remorse, no visible vulnerability – only a controlling
        stance directed, to his last breath, against his own unstoppably failing body. The wolf
        that held its pack together through fear – and who, in the end, died alone and largely
        unnoticed.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The
        personality typing is a psychological hypothesis, not a historical verdict. Charles
        Manson was convicted of murder and conspiracy in 1971 and died in custody in 2017. The
        Enneagram explains; it does not justify.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"kriminalpsychologie-charles-manson", label:"Criminal Psychology: Charles Manson (SX6w7) – Tate-LaBianca murders"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function dollyPartonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dolly-parton-portrait.jpg" alt="Dolly Parton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dolly Parton</p>
        <p class="krim-portrait-typ">SX3w4 · Sexual Type 3 with Four-wing · 1946–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Peacock</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Animal correspondence: Peacock" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dolly Parton</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-dolly-parton">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general.
        This portrait is devoted to a chapter barely present there: an endometriosis
        diagnosis in the early 1980s followed by a partial hysterectomy, decades of
        recurring health crises up to kidney stones, and a final, rapidly progressing battle
        with cancer, which she died from on August 25, 2026, at the age of 80.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Parton</strong> is classified as the <strong>Sexual Three with Four-wing</strong>.
        The SX3 makes personal magnetism and immediate presence its life's task; the Four-wing
        adds an emotional depth that ties the stage persona back to a very personal, often
        painful inner world. This same pattern – radiating outward without interruption while
        a serious physical burden goes unspoken for decades within – also shaped her
        relationship with her own health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Abdominal pain and bleeding starting in the early 1980s:</strong>
        Parton increasingly suffered from severe abdominal pain and bleeding that repeatedly
        landed her in the hospital – symptoms she tried for a long time to keep hidden behind
        her public schedule.</p>
        <p class="vb-intro"><strong>b) A canceled 1982 tour as the first visible sign:</strong>
        Only once her condition deteriorated to the point where continuing became impossible
        did she cancel a planned tour – a rare, publicly visible break in an otherwise
        flawlessly maintained work ethic.</p>
        <p class="vb-intro"><strong>c) Diagnosis: endometriosis:</strong>
        The cause of her symptoms was eventually identified as endometriosis – a chronic,
        often very painful condition in which tissue similar to the uterine lining grows
        outside the uterus.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Partial hysterectomy in 1985 at age 36:</strong>
        To treat her gynecological problems, Parton underwent a partial hysterectomy at age
        36 – an invasive step she still kept largely out of the public eye at the time.</p>
        <p class="vb-intro"><strong>b) Involuntary childlessness as a consequence:</strong>
        She and her husband Carl Dean had wanted children early in their marriage and took no
        precautions against pregnancy, even having names picked out – but no pregnancy was ever
        carried to term. The hysterectomy closed off that possibility for good. Parton later
        spoke about the subject repeatedly and with visible emotion, though she usually folded
        it quickly into a positive narrative – describing herself since then as a kind of
        "godmother to all children," both in her extended family and beyond.</p>
        <p class="vb-intro"><strong>c) A severe depressive period afterward:</strong>
        Years later, Parton spoke openly about how the surgery was "a really bad time" for
        her and plunged her into depression – a rare glimpse behind an otherwise
        flawlessly maintained façade.</p>
        <p class="vb-intro"><strong>d) Returning to work despite health limitations:</strong>
        Just shortly after this most severe crisis, she returned to the spotlight – music,
        film, and television continued with almost no visible interruption.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Recurring kidney stones and further hospitalizations:</strong>
        Over the following decades, further health crises recurred, including painful
        kidney stones, which Parton addressed openly once they had already become public
        knowledge.</p>
        <p class="vb-intro"><strong>b) A postponed, then finally canceled Las Vegas residency:</strong>
        A concert residency planned for 2025 in Las Vegas was first postponed to September
        2026 due to "health challenges," and then fully canceled in May 2026.</p>
        <p class="vb-intro"><strong>c) Dehydration and dizziness as her final public statement:</strong>
        Appearing by video call from Nashville, Parton explained that her doctor had advised
        her not to travel due to dehydration and dizziness – which is why, in August 2026, she
        missed the opening of the new roller coaster "NightFlight Expedition" at her own
        theme park, Dollywood.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Decades of shining over a hidden medical history:</strong>
        Between the diagnosis in the early 1980s and her final months, over forty years
        passed during which Parton's public image remained almost exclusively defined by
        glamour, humor, and energy – her health history stayed largely in the background.</p>
        <p class="vb-intro"><strong>b) Her husband's death as a late turning point:</strong>
        After her husband Carl Dean died in March 2025, Parton publicly admitted to having
        neglected her own health during his caregiving period – one of the rare moments in
        which she named her own vulnerability directly instead of glossing over it.</p>
        <p class="vb-intro"><strong>c) Cancer diagnosis and rapid progression:</strong>
        According to those close to her, Parton succumbed on August 25, 2026, to a cancer
        diagnosis made shortly before – a progression that left the public little time to
        grasp the severity of the illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Expression</h3>
        <p class="vb-intro"><strong>a) The peacock that keeps displaying its tail as long as it possibly can:</strong>
        The SX3's characteristic conviction that presence and impact must be maintained
        outwardly showed itself right into her final months: even health-related
        cancellations were announced with humor, warmth, and a carefully maintained stage
        persona, never with visible despair.</p>
        <p class="vb-intro"><strong>b) The Four-wing and the rare moments of genuine openness:</strong>
        The same emotional depth that shaped her songwriting for decades also appeared in how
        she handled her own illness: rarely, but when it did, with unusual directness – as in
        admitting her depression after the hysterectomy, or her neglected health while caring
        for her husband.</p>
        <p class="vb-intro"><strong>c) Control over her own image until the very end:</strong>
        Even her final public health updates came in her own words, in her own tone – no
        unauthorized revelations, but a self-directed communication all the way to the end,
        entirely in keeping with an SX3 who never lets go of her own image.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) An illness that struck exactly at the site of her stage-ready femininity:</strong>
        Parton's entire public persona was built on a deliberately feminine, body-conscious
        self-presentation. It was precisely a gynecological condition, directly affecting
        that physical core, that became a decades-long, mostly unspoken companion to her
        career.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>A striking parallel within the same subtype – Marilyn Monroe:</strong>
        Notably, this Compass also features <a href="javascript:void(0)" data-route="krankheitsportraets-marilyn-monroe">Marilyn Monroe (also SX3w4)</a>,
        whose illness, hidden for years behind a flawless image, carries the exact same
        diagnosis: endometriosis. Two sexual Threes with a Four-wing, two public personas
        built on magnetism and femininity, two women who concealed the very same painful
        gynecological condition behind an impeccably maintained stage presence for years.
        The consequence, too, is the same for both: involuntary childlessness – for Monroe
        through at least three documented miscarriages, for Parton through the partial
        hysterectomy performed in 1985. The difference lies in the outcome: while Monroe's
        story ended abruptly and young in 1962, Parton went on to live and work for another
        four decades with the consequences of her diagnosis, before a different illness stood
        at the end of her life.</p>
        <p class="vb-intro"><strong>b) Why precisely the abdomen, for a woman whose entire image was built on femininity?</strong>
        For a sexual Three with a Four-wing, whose professional core is a deliberately
        staged, emphatically feminine presence, one interpretation suggests itself:
        precisely the part of the body that carried her public identity most directly became
        the site of a decades-long, mostly unspoken burden. This interpretation is a
        plausible reading, not a proven medical causal link, and is explored further in this
        Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Context without determinism:</strong>
        This does not mean the pattern of the sexual Three inevitably leads to gynecological
        conditions or cancer – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Parton's case illustrates is a pattern in how a
        decades-long, unspoken physical burden was handled, one that recurs again and again
        in a pronounced sexual Three with a Four-wing – one interpretation among many, not
        a judgment. This illness pattern is being developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Nothing suggests that Parton ever consciously knew her own Enneagram pattern – like
        most people, she likely didn't know the system at all. The Three's
        passion, deceit through relentless self-presentation, governed her unopposed for decades: pain,
        surgeries, and later exhaustion were hidden behind humor and a flawlessly maintained
        stage persona, rather than recognized as a recurring pattern and taken seriously in
        time. Only her husband's death in 2025 brought her to publicly admit that she had
        neglected her own health for years – at a point when her own body was already
        exhausted.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Parton's</strong> illness history, too, reveals her sexual Three with a
        Four-wing once again: a career that, over more than forty years, hid physical
        crises, surgeries, and exhaustion behind a flawlessly radiant stage persona, and an
        end of life that only became publicly visible shortly before her death. The peacock
        that spread its tail feathers nearly to the last – and whose quietest, most
        vulnerable moments only became visible once the tail could no longer be spread.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-dolly-parton", label:"Portrait: Dolly Parton (SX3w4) – life's work"},
        {route:"krankheitsportraets-marilyn-monroe", label:"Illness Portrait: Marilyn Monroe (SX3w4)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx3", label:"Subtype Profile SX3"},
      ])}
    </div>
  `);
}

export function francisBaconKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-francis-bacon-portrait.jpg" alt="Francis Bacon" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Francis Bacon</p>
        <p class="krim-portrait-typ">SP7w8 · Self-Preservation Type 7 with Eight-wing · 1561–1626</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Animal correspondence: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Francis Bacon</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-francis-bacon">portrait under Famous Personalities</a>
        in this Compass – that page covers his philosophical life's work, his political rise
        and fall. This portrait is devoted to a chapter only sketched there: decades of
        chronic gout, kidney stones, and digestive complaints – and a death that reads like the
        final, fatal consequence of his own scientific curiosity.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Bacon</strong> is classified as the <strong>self-preservation Seven with
        Eight-wing</strong>. Naranjo called this subtype the "hidden Eight": a Seven that
        combines its curiosity and capacity for enjoyment with the assertiveness and
        directness of the Eight, without displaying it openly. It was exactly this combination
        of insatiable curiosity and a refusal to be deterred by physical limits that shaped
        his relationship to his own health as well.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A fragile constitution from youth onward:</strong>
        Contemporary accounts already describe Bacon as sickly and frail as a young man – a
        physical fragility that stood in striking contrast to his tireless intellectual and
        political drive.</p>
        <p class="vb-intro"><strong>b) Recurring gout attacks from middle age on:</strong>
        From his forties on, Bacon increasingly suffered from painful bouts of gout that at
        times confined him to bed – an illness at the time closely associated with excessive
        indulgence in meat and wine, the lifestyle of a man who never held back at court or in
        politics.</p>
        <p class="vb-intro"><strong>c) Kidney stones as a constant companion:</strong>
        Alongside the gout, Bacon's own records document recurring, agonizing kidney stone
        attacks that accompanied him for years and repeatedly interrupted his legal and
        scientific work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Illness as a footnote in an overcrowded schedule:</strong>
        Despite the recurring complaints, Bacon's letters contain few complaints about his own
        health – illness was briefly mentioned, then set aside for the next task, never made
        into a central theme.</p>
        <p class="vb-intro"><strong>b) A man who practiced his own medicine:</strong>
        Bacon experimented himself with diet, herbal remedies, and lifestyle to relieve his
        complaints – his "Sylva Sylvarum," a posthumously published collection of natural
        observations, contains numerous notes on health, longevity, and bodily care that
        likely also arose from his own affliction.</p>
        <p class="vb-intro"><strong>c) Financial worry as an additional burden:</strong>
        Perpetually in debt despite high offices and considerable income, Bacon lived in a
        chronic tension between the demands of representation and financial insecurity – a
        constant stress that likely placed additional strain on his physical condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) The 1621 fall as an additional strain:</strong>
        The bribery charges, the removal from office, and the brief imprisonment in the Tower
        struck a man already in poor health, in his sixties – contemporaries reported visible
        physical decline in the months after his political fall.</p>
        <p class="vb-intro"><strong>b) Retreat to the countryside, not retreat from work:</strong>
        After losing his offices, Bacon withdrew to his estate at Gorhambury – but rather than
        resting, he worked in the following five years more intensively than perhaps ever
        before on his scientific writings, often into the early morning hours.</p>
        <p class="vb-intro"><strong>c) The final carriage ride in the winter of 1626:</strong>
        On the way to Highgate near London, in icy winter weather, Bacon had the idea that cold
        might delay decay – a thought he immediately pursued experimentally, without regard
        for the weather.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) The chicken experiment:</strong>
        Bacon stopped the carriage, bought a chicken from a farm woman, and stuffed it with
        snow with his own hands to test whether cold could prevent decay – an early, serious
        attempt at food preservation, centuries before modern refrigeration.</p>
        <p class="vb-intro"><strong>b) Too ill for the journey home:</strong>
        The experiment left Bacon with a severe chill that rapidly worsened. He was too weak to
        return to his own house and was instead taken to the nearby home of Lord Arundel.</p>
        <p class="vb-intro"><strong>c) Death within days:</strong>
        On April 9, 1626, Francis Bacon died at Arundel's house of bronchitis or pneumonia that
        had developed from the chill – only days after the experiment that triggered his
        death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Eight-wing that ignored its own weakness too:</strong>
        The same assertiveness that carried Bacon through political offices and grand
        scientific projects also led him to disregard his own physical warning signs – gout,
        kidney stones, and an already weakened state did not stop him from exposing himself to
        a spontaneous experiment in winter.</p>
        <p class="vb-intro"><strong>b) Curiosity with no built-in emergency brake:</strong>
        The self-preservation Seven normally seeks security through caution and practical
        foresight – in Bacon, that caution increasingly gave way, in his last decade, to pure
        curiosity that no longer heeded his own condition.</p>
        <p class="vb-intro"><strong>c) Work as the last remaining territory:</strong>
        After losing his political power, all of the SP7w8's energy shifted to the one field
        still left to him – his own research – with an intensity that seemed to know no
        limit.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A life of chronic pain, rarely voiced:</strong>
        Decades of gout and kidney stones accompanied Bacon through his entire political and
        scientific career, without his giving them notable space in his writings – illness was
        for him an obstacle to be worked around, not a theme to dwell on.</p>
        <p class="vb-intro"><strong>b) A death that became an emblem of the whole life:</strong>
        Scarcely any other Illness Portrait in this Compass shows such a literal match between
        life pattern and cause of death: Bacon died not despite but because of his insatiable
        curiosity – the very trait that carried his entire body of work became, at the decisive
        moment, his undoing.</p>
        <p class="vb-intro"><strong>c) Why, of all things, a chill?</strong>
        For a self-preservation Seven with Eight-wing, whose security traditionally comes from
        practical foresight and physical robustness, one reading suggests itself: precisely a
        banal, avoidable chill – no dramatic affliction, but a carelessness in the face of his
        own curiosity – became the fatal consequence of a life stance that systematically
        subordinated practical caution to the joy of discovery. This reading is explored in
        more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the self-preservation Seven's pattern inevitably leads to such
        accidents – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Bacon's case can show is a pattern that stands out again and again in practice
        wherever curiosity runs without a brake – one possible explanation among many, not a
        verdict. The corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Bacon did not know his own pattern – the self-preservation Seven with Eight-wing pursues every new idea to its ultimate consequence, without factoring in its own physical vulnerability, and that is exactly what led a spontaneous experiment in winter cold to cost him his life. Someone who does not recognize their own drive for knowledge underestimates how easily curiosity can become its own hazard.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Bacon's</strong> final years, the self-preservation Seven with Eight-wing
        reveals itself in its most consistent form: decades of chronic, rarely voiced physical
        burden that never truly restrained his insatiable curiosity – until a single
        spontaneous experiment in the icy winter became his last. The gorilla that reached for
        the next discovery to its final breath – and made one last experiment while dying.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-francis-bacon", label:"Portrait: Francis Bacon (SP7w8) – life's work"},
        {route:"krankheitsportraets-christoph-kolumbus", label:"Illness Portrait: Christopher Columbus (SP7w8)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se7", label:"Subtype Profile SE7"},
      ])}
    </div>
  `);
}

export function fredericChopinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-frederic-chopin-portrait.jpg" alt="Frédéric Chopin" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Frédéric Chopin</p>
        <p class="krim-portrait-typ">SX5w4 · Sexual Type 5 with Four-wing · 1810–1849</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hedgehog</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Animal correspondence: Hedgehog" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Frédéric Chopin</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-frederic-chopin">portrait under Famous Personalities</a>
        in this Compass – that page covers his compositional life's work and type structure.
        This page delves into a topic only briefly mentioned there: a tuberculosis that likely
        accompanied him since young adulthood, accelerated dramatically after his relationship
        with George Sand ended in 1847, and cost him his life at thirty-nine.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Chopin</strong> is classified as the <strong>Sexual Five with Four-wing</strong> –
        the same subtype as <a href="javascript:void(0)" data-route="beruehmte-friedrich-nietzsche">Friedrich Nietzsche</a>.
        Naranjo called this subtype <em>Trust</em>: the SX5 seeks not distance, but the one bond
        that carries everything. The Four-wing turns withdrawal into art – a pattern that can be
        traced right into Chopin's physical decline, which set in exactly when that one bond
        broke.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A delicate constitution since childhood:</strong>
        Even as a child, Chopin was considered sickly and frail – recurring colds and breathing
        difficulties accompanied him through his youth in Warsaw, long before any actual
        diagnosis could be made.</p>
        <p class="vb-intro"><strong>b) The first serious warning signs in his twenties:</strong>
        Shortly after his move to Paris in 1831, friends and physicians already reported
        coughing fits, exhaustion, and occasional coughing up of blood – symptoms now read in
        retrospect as early tuberculosis.</p>
        <p class="vb-intro"><strong>c) The catastrophe of Mallorca:</strong>
        In the winter of 1838/39, Chopin traveled with George Sand to Mallorca, hoping the mild
        climate would help his health. Instead, his condition deteriorated dramatically: local
        physicians diagnosed a contagious lung disease, the landlord then cancelled their
        lodging, and the family had to move into a damp, cold Carthusian monastery in
        Valldemossa.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Composing through acute flare-ups:</strong>
        It was precisely during the weeks of his most severe physical crisis on Mallorca that
        Chopin composed much of his <em>Préludes op. 28</em> – one of his most dense,
        introspective works, written literally at his sickbed.</p>
        <p class="vb-intro"><strong>b) A decade alternating between flare-ups and recovery:</strong>
        Throughout the 1840s, Chopin's condition alternated between relative stability and acute
        flare-ups – accompanied by weight loss, chronic fatigue, and increasing breathlessness
        with physical exertion.</p>
        <p class="vb-intro"><strong>c) Public performances despite visible weakness:</strong>
        Friends and contemporaries increasingly described Chopin at his rare concerts as pale,
        gaunt, and short of breath – a contrast that grew starker the more flawless his music
        remained despite it all.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The collapse after the 1847 separation:</strong>
        After the bitter end of his nine-year relationship with George Sand in 1847, Chopin's
        health declined rapidly. He composed almost nothing more – as if the bond that had
        carried his creative power had taken his physical reserves with it.</p>
        <p class="vb-intro"><strong>b) The final journey to England:</strong>
        In 1848, already severely weakened, Chopin nonetheless traveled to London and Scotland
        to give concerts and lessons. Contemporaries described him afterward as barely
        recognizable – exhausted beyond exhaustion.</p>
        <p class="vb-intro"><strong>c) The final months in Paris:</strong>
        Back in Paris, his condition continued to worsen through 1849. Friends and his sister
        Ludwika, who traveled from Warsaw for the purpose, cared for him in his final weeks as
        he became increasingly bedridden.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death at thirty-nine:</strong>
        Chopin died on 17 October 1849 in Paris from the effects of advanced tuberculosis. His
        final wish was that Mozart's Requiem be played at his funeral.</p>
        <p class="vb-intro"><strong>b) Two decades between first signs and death:</strong>
        From the first symptoms in the early 1830s to his death in 1849, Chopin lived nearly two
        decades with an illness that never fully halted his compositional output – until the
        separation from George Sand accelerated its final collapse.</p>
        <p class="vb-intro"><strong>c) A body of work that never lost its precision:</strong>
        Even in the years of increasing physical weakness, Chopin's music retained the same
        density and restraint that marked his entire output – not one note too many, even at
        the sickbed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The Five's miserliness, applied to his own energy:</strong>
        Where others facing progressing illness spread their remaining strength across many
        areas, Chopin bundled what little energy he had left almost exclusively into
        composition – the hedgehog that curls up and gives almost nothing else away.</p>
        <p class="vb-intro"><strong>b) The physical collapse as a mirror of the one broken bond:</strong>
        The rapid health decline after the 1847 separation from George Sand shows how closely,
        for the SX5, physical strength and the one carrying relationship are entwined – when
        the bond breaks, physical collapse follows close behind.</p>
        <p class="vb-intro"><strong>c) Composing to the physical limit:</strong>
        Even in his final months, Chopin taught and composed as far as his fading strength
        allowed – the one open channel through which everything discharged remained open to the
        very end.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) An illness that accompanied his entire adult life:</strong>
        From first signs in his youth through the Mallorca catastrophe to his death in 1849,
        tuberculosis runs through Chopin's entire artistic output as a constant, never fully
        absent companion.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-friedrich-nietzsche">Friedrich Nietzsche</a>
        (SX5w4) likewise broke down physically shortly after his one decisive bond had
        shattered – for Nietzsche, the rupture with Lou Salomé in 1883; for Chopin, the
        separation from George Sand in 1847. Both cases show the same SX5w4 pattern: the one
        bond that carries everything is also what the physical and creative strength depend
        on – when it breaks, physical collapse follows close behind. This parallel is also
        explored in the <a href="javascript:void(0)" data-route="krankheitsportraets-friedrich-nietzsche">illness
        portrait on Nietzsche</a>.</p>
        <p class="vb-intro"><strong>c) Withdrawal instead of confrontation as a recurring pattern:</strong>
        Unlike Ludwig van Beethoven (SX6w5) or Friedrich Schiller (SX6w5), who met their illness
        with open confrontation, Chopin – true to the pattern typical of the Sexual Five –
        withdrew increasingly into smaller, private circles as his illness progressed, rather
        than fighting it publicly.</p>
        <p class="vb-intro"><strong>d) Why the lungs, of all things?</strong>
        For a Sexual Five whose strength concentrates almost exclusively into a single,
        narrowly bounded channel, one interpretation suggests itself: the lungs – breath, the
        foundation of every expression of life, including musical expression – of all things
        became the stage for a battle Chopin never fought publicly, but instead distilled into
        his music. This interpretation is developed further in this Compass's psychosomatics
        register.</p>
        <p class="vb-intro"><strong>e) Context without determinism:</strong>
        This does not mean that the Sexual Five pattern inevitably leads to lung disease –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Chopin's case illustrates is a pattern that keeps recurring in practice among people
        whose physical strength is tightly bound to their one carrying relationship – one of
        many possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Chopin did not know his own pattern – the sexual Five bundles strength and devotion into the one carrying bond, without ever realizing how closely his physical strength depended on that very bond. Someone who does not know their own pattern also does not see how tightly their own vitality is tied to a single attachment, until its loss takes them down with it.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Chopin's</strong> Sexual Five with Four-wing is legible once more in the course
        of his illness: a tuberculosis simmering since his youth that accelerated dramatically
        exactly when the one carrying bond of his life broke, and that cost him his life on 17
        October 1849. The hedgehog that bundled what little strength remained, to the very end,
        into the one open channel through which everything within him flowed.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-frederic-chopin", label:"Portrait: Frédéric Chopin (SX5w4) – life's work"},
        {route:"krankheitsportraets-friedrich-nietzsche", label:"Illness Portrait: Friedrich Nietzsche (SX5w4) – same SX5w4 parallel"},
        {route:"krankheitsportraets-ludwig-van-beethoven", label:"Illness Portrait: Ludwig van Beethoven (SX6w5) – counter-model: open confrontation"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx5", label:"Subtype Profile SX5"},
      ])}
    </div>
  `);
}

export function genesisPOrridgeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-genesis-p-orridge-portrait.jpg" alt="Genesis P-Orridge" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Genesis P-Orridge</p>
        <p class="krim-portrait-typ">SX8w9 · Sexual Type 8 with Nine-Wing · 1950–2020</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Crocodile</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx8.jpg" alt="Animal correspondence: Crocodile" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX8")};left:${tierAvatarLeft("SX8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Genesis P-Orridge</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-genesis-p-orridge">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there: a
        leukemia illness spanning several years, during which Genesis remained artistically
        active until shortly before death in March 2020.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Genesis</strong> is assigned to the <strong>sexual Type 8 with Nine-Wing</strong>.
        The SX8 wants the whole, without compromise, including in how it deals with its own
        body; the Nine-Wing adds a resting, enduring force that is not explosive but
        persistent. Exactly this combination – an uncompromising refusal to submit to the
        illness, combined with quiet, long-term endurance – shaped the course of the
        leukemia.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis of a chronic leukemia:</strong>
        According to those close to Genesis, a chronic form of leukemia was diagnosed that
        initially remained relatively stable for years.</p>
        <p class="vb-intro"><strong>b) Continued artistic and ritual practice:</strong>
        Despite the diagnosis, Genesis continued performances, exhibitions, and their own
        occult-artistic practice almost unabated for years.</p>
        <p class="vb-intro"><strong>c) Largely kept from the wider public:</strong>
        The illness did not become a central public topic but stayed in the background for
        the wider public for a long time, while close friends and collaborators were
        informed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Progression to an acute phase of illness:</strong>
        In the final years of life, the illness worsened, requiring repeated hospital stays
        and more intensive treatment.</p>
        <p class="vb-intro"><strong>b) Continuing projects despite hospital stays:</strong>
        Even during treatment periods, Genesis kept working on music and art projects
        according to collaborators, at times directly from the hospital bed.</p>
        <p class="vb-intro"><strong>c) Public support from the music and art scene:</strong>
        In the final months before death, numerous collaborators and fans from the
        industrial and experimental music scene publicly expressed their support and
        solidarity.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Death on 14 March 2020 in New York:</strong>
        Genesis P-Orridge died at age 70 from complications of the leukemia, in the
        apartment closely tied to their late partner Lady Jaye.</p>
        <p class="vb-intro"><strong>b) Worldwide mourning in the music and art world:</strong>
        The death triggered international obituaries honoring Genesis's influence on
        industrial music, performance art, and counterculture.</p>
        <p class="vb-intro"><strong>c) Posthumous continuation of the artistic legacy:</strong>
        After the death, further works were released, some already prepared beforehand,
        including music and art projects Genesis had worked on until the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Tribute to an uncompromising body of work:</strong>
        Obituaries repeatedly emphasized that Genesis remained true to their artistic
        radicalism until the end, without making the illness the defining narrative of their
        own work.</p>
        <p class="vb-intro"><strong>b) No public staging of the illness:</strong>
        Unlike with some artists, the leukemia did not become a central part of public
        self-presentation – the art remained the focus, not the suffering.</p>
        <p class="vb-intro"><strong>c) The Pandrogeny project's continued impact beyond death:</strong>
        The Pandrogeny project begun with Lady Jaye – the physical fusion of two people into
        one being – is still discussed today as an independent work of art, regardless of
        both partners' deaths.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Possession, applied to one's own illness:</strong>
        The SX8's characteristic refusal to submit to anything without a fight showed also in
        dealing with the leukemia: Genesis did not let the illness become the dictator of
        their own life, but kept working with the same intensity until the end.</p>
        <p class="vb-intro"><strong>b) The Nine-Wing and quiet endurance through the illness:</strong>
        The same resting, non-explosive force that carried Genesis's decades-long body of
        work also showed in dealing with the illness: no loud public struggle, but a quiet,
        persistent continuation of their own work despite the progressing illness.</p>
        <p class="vb-intro"><strong>c) No separation between art and illness:</strong>
        For Genesis, their own physical vulnerability could never be fully separated from
        their artistic work – the Pandrogeny project itself had already used their own body
        as art material; the leukemia became one further, final form of this fusion of life
        and work.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An artist of boundary dissolution, confronted with the last unresolvable boundary:</strong>
        Genesis's entire body of work revolved around dissolving boundaries – between
        bodies, genders, art and life. Of all things, the illness represented a boundary
        that could not be dissolved by art, ritual, or willpower.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-ruth-bader-ginsburg">Ruth
        Bader Ginsburg (SX8w9)</a>: Ginsburg too refused for years to give in to multiple
        cancer diagnoses and remained active in office until shortly before death. Both
        SX8w9s show the same pattern: an uncompromising refusal to subordinate their own
        life's mission to illness, carried by quiet, long-term endurance rather than a loud
        public fight.</p>
        <p class="vb-intro"><strong>c) Why the blood, of all things, the very substance of fusion?</strong>
        For a sexual Eight with a Nine-Wing whose entire work revolved around physical fusion
        and boundary dissolution, one interpretation suggests itself: exactly an illness of
        the blood – the substance that overcomes all boundaries and connects everything in
        the body – became the site of their own physical breakdown. This reading is a
        plausible interpretation, not a proven clinical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the sexual Eight's pattern inevitably leads to leukemia –
        <strong>any person can develop any illness, regardless of subtype.</strong> What can
        be shown in Genesis's case is a pattern in dealing with a progressive illness that
        keeps recurring in a pronounced sexual Eight with a Nine-Wing – one of many possible
        readings, not a verdict. The corresponding illness pattern is being developed
        gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Genesis did not know their own pattern as an Enneagram structure – the sexual Eight
        with a Nine-Wing reflexively clings to its own uncompromising stance, even toward
        their own mortality, instead of pausing in time, and lived out exactly this pattern
        unchanged until their final day. Anyone who does not recognize their own tendency to
        refuse to acknowledge any boundary – including that of their own body – as a pattern
        risks that the body ultimately sets the one boundary that can no longer be
        dissolved.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Type 8 with Nine-Wing explains much about how <strong>Genesis
        P-Orridge</strong> dealt with their own leukemia: an artist whose entire body of work
        was devoted to dissolving boundaries met even the last, insurmountable boundary with
        the same uncompromising intensity – the crocodile that did not lie still until the
        last day, but kept working, while the illness itself became the final fusion of life
        and work.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-genesis-p-orridge", label:"Portrait: Genesis P-Orridge (SX8w9)"},
        {route:"krankheitsportraets-ruth-bader-ginsburg", label:"Illness Portrait: Ruth Bader Ginsburg (SX8w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx8", label:"Subtype Profile SX8"},
      ])}
    </div>
  `);
}

export function hansChristianAndersenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hans-christian-andersen-portrait.jpg" alt="Hans Christian Andersen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hans Christian Andersen</p>
        <p class="krim-portrait-typ">SO4w3 · Social Type 4 with Three-wing · 1805–1875</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hans Christian Andersen</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-hans-christian-andersen">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work, background, and type structure in
        general. This page traces a chapter only briefly touched there: the lifelong hypochondria,
        the tormenting dental problems, and the cancer that killed Andersen in 1875.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Andersen</strong> is assigned to <strong>social Type 4 with a Three-wing</strong>.
        SO4 carries its shame about its own otherness directly into the group and constantly seeks
        validation there; the Three-wing intensifies this need into an active striving for public
        recognition. In Andersen this showed a notable discrepancy: a deeply felt, often exaggerated
        concern for his own body, which he rarely showed outwardly as long as an audience needed
        him – and which only surfaced once no stage was in sight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A lifelong hypochondria, well documented in letters and diaries:</strong>
        Andersen kept detailed diaries over decades in which the smallest physical complaints – a
        tugging in the stomach, a slight fever, a cold – were recorded with striking thoroughness
        and worry. Contemporaries and later biographers agree that this self-observation went far
        beyond the usual measure.</p>
        <p class="vb-intro"><strong>b) The famous fear of being buried alive:</strong>
        Andersen carried a note with him throughout his life asking that his pulse be opened after
        his presumed death, to make sure he was truly dead &ndash; one of the best-attested details
        of his hypochondria, which he himself repeatedly mentioned to friends.</p>
        <p class="vb-intro"><strong>c) Tormenting dental problems from early on:</strong>
        Already in his middle years, Andersen suffered from severe, recurring toothaches and
        progressive tooth loss, which he repeatedly described in letters as great torment &ndash; a
        suffering that accompanied him throughout his life and which, despite his otherwise intense
        health worry, he left largely untreated for a long time.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A consequential fall in 1872:</strong>
        In spring 1872, Andersen fell out of bed and injured himself severely &ndash; an event
        biographers consistently describe as the turning point of his final years. He never fully
        recovered from this fall.</p>
        <p class="vb-intro"><strong>b) Progressive exhaustion and weight loss:</strong>
        Over the following three years his health steadily deteriorated &ndash; growing exhaustion,
        loss of appetite, and a marked physical decline documented by close friends in letters.</p>
        <p class="vb-intro"><strong>c) The diagnosis:</strong>
        Andersen's doctors assumed a cancer of the liver &ndash; an assessment based on observed
        symptoms, without the diagnostic tools available to modern medicine. The exact nature of the
        illness can no longer be reconstructed with certainty from today's perspective.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Care in the home of a friendly family:</strong>
        In his final years, Andersen was cared for by the friendly merchant family Melchior, first
        in Copenhagen, later at their country house Rolighed &ndash; a sign of how much the
        childless, unmarried Andersen depended, at the end of his life, on belonging to a community
        that carried him, one he had never managed to create in the form of his own family.</p>
        <p class="vb-intro"><strong>b) Continued public presence despite weakness:</strong>
        Even after the 1872 fall, Andersen continued, as long as his strength allowed, to take part
        in social occasions and maintain his correspondence with celebrities and admirers &ndash; the
        need for visible belonging could barely be dampened even by progressive illness.</p>
        <p class="vb-intro"><strong>c) A slow, publicly accompanied death:</strong>
        Andersen's final months were closely followed by the Danish public; newspapers regularly
        reported on his health &ndash; for the social Four with a Three-wing, who had sought public
        sympathy his entire life, a situation in which he finally received exactly what he had longed
        for all his life, even under the bitterest circumstances.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death on August 4, 1875:</strong>
        Hans Christian Andersen died on August 4, 1875, at age 70, in Rolighed, the Melchior
        family's country house near Copenhagen, surrounded by the people closest to him in his final
        years.</p>
        <p class="vb-intro"><strong>b) A state funeral as final public validation:</strong>
        Andersen's funeral became an event of national mourning, attended by the Danish king and the
        royal family &ndash; the late, definitive confirmation of the social belonging that the
        social Four with a Three-wing had sought his entire life.</p>
        <p class="vb-intro"><strong>c) A posthumous fame that far outlasted his own insecurity:</strong>
        Within a few decades of his death, Andersen became the most translated Danish writer of all
        time &ndash; a degree of worldwide recognition that, in retrospect, makes his lifelong,
        nagging worry of not truly belonging look like a tragic misjudgment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Hypochondria as redirected belonging anxiety:</strong>
        Andersen's characteristic worry about his own body can be read as an inward-directed variant
        of his true underlying fear: of not truly being seen, not truly needed, not truly belonging.
        Meticulous observation of the smallest physical signals gave this diffuse worry a concrete,
        controllable object.</p>
        <p class="vb-intro"><strong>b) The Three-wing as the engine that kept him going despite weakness:</strong>
        The same Three-wing that drove Andersen throughout his life to remain publicly visible did
        not let him give up without a fight even after the 1872 fall &ndash; even while weakened, he
        kept seeking contact with admirers and patrons, as if public attention could halt the
        progressing illness.</p>
        <p class="vb-intro"><strong>c) The toothaches as a suppressed, because unglamorous, suffering:</strong>
        Striking is the contrast between Andersen's extensive worry about more dramatic, narratable
        complaints and his decades-long acceptance of his toothaches &ndash; a suffering with no
        public stage, presumably too mundane to fit into his carefully maintained self-presentation
        as a sensitive, suffering artist.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A parallel within the same subtype – Michael Jackson (SO4w3):</strong>
        As with <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Michael Jackson</a>,
        also SO4w3, Andersen shows the pattern typical of this subtype: the carefully maintained
        public role &ndash; for Jackson the flawless King of Pop, for Andersen the sensitive,
        world-celebrated fairy-tale author &ndash; is upheld to the very end, while the actual
        physical suffering runs in the background. For Jackson it was the decades-long, concealed
        dependence on pain medication; for Andersen the silently endured toothaches alongside the
        thoroughly documented but ultimately helpless worry about everything else &ndash; two
        variants of the same SO4w3 core movement: keep up the image, set aside the inner self.</p>
        <p class="vb-intro"><strong>b) A worry that grew over decades, not a sudden collapse:</strong>
        From the earliest documented diary entries about tiny complaints to the actual course of the
        illness after 1872, a continuous line runs through: Andersen's body was, his whole life, an
        object of intense, often exaggerated attention &ndash; before the real illness finally caught
        up with it.</p>
        <p class="vb-intro"><strong>c) Two ailments, one shared blind spot:</strong>
        The extensively documented hypochondria and the barely mentioned, genuinely treatment-needing
        dental problems can be read as two sides of the same imbalance: attention flowed where it
        was narratable and thus socially usable &ndash; not necessarily where the body needed it most
        urgently.</p>
        <p class="vb-intro"><strong>d) Why the liver, of all organs?</strong>
        For a social Four, whose core theme is the question of whether they truly have a place in the
        community, an interpretation suggests itself: in many psychosomatic traditions, the liver is
        considered the organ of processed, often also withheld, emotion &ndash; for a person who felt
        more throughout his life than he could show in a form acceptable for his time, and who
        controlled to the last what of his inner self reached the outside, this is a fitting image.
        This interpretation is a plausible reading, not a documented historical causal link, and is
        explored further in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik/leberkrebs">Psychosomatics Register
        entry on liver cancer</a>.</p>
        <p class="vb-intro"><strong>e) A note without determinism:</strong>
        This does not mean that the pattern of social Four with a Three-wing inevitably leads to
        liver disease &ndash; <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Andersen's case shows is a pattern that repeatedly stands out in practice among those
        inclined to thoroughly document narratable suffering while overlooking unglamorous suffering
        &ndash; one of many possible explanations, not a judgment.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Unconscious fixation as its own factor:</strong>
        Andersen did not know his own Enneagram pattern &ndash; the concept did not yet exist in this
        form during his lifetime. The longing for belonging that drove him his whole life to remain
        publicly visible and loved had no built-in warning mechanism that could distinguish between
        narratable and genuinely urgent suffering; on the contrary, every physical signal was
        processed with the same logic he used for social signals: as something that either fit his
        own story or didn't. Whoever doesn't know their own pattern cannot interrupt it in time &ndash;
        for Andersen this meant a life rich in thoroughly documented worry about minor complaints and
        poor in actual care for his own, genuinely suffering body, until the illness that ultimately
        cost him his life left no more escape.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Andersen's</strong> illness history shows social Four with a Three-wing at its most
        contradictory: a lifelong, meticulously documented worry about his own body &ndash; and a
        genuine suffering that only revealed itself once no stage could help anymore. The armadillo
        that longed for belonging his whole life finally received it in the form of a state funeral
        &ndash; on August 4, 1875, at age 70, from the effects of a suspected cancer of the liver.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-hans-christian-andersen", label:"Portrait: Hans Christian Andersen (SO4w3) – life's work"},
        {route:"krankheitsportraets-michael-jackson", label:"Illness Portrait: Michael Jackson (SO4w3) – same concealment strategy"},
        {route:"krankheitsportraets-heinrich-heine", label:"Illness Portrait: Heinrich Heine (SO4w3)"},
        {route:"psychosomatik/leberkrebs", label:"Psychosomatics Register: Liver Cancer"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function immanuelKantKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-immanuel-kant-portrait.jpg" alt="Immanuel Kant" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Immanuel Kant</p>
        <p class="krim-portrait-typ">SO6w5 · Social Type 6 with Five-wing · 1724–1804</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Meerkat</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so6.jpg" alt="Animal correspondence: Meerkat" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO6")};left:${tierAvatarLeft("SO6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Immanuel Kant</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-immanuel-kant">famous-personality portrait</a>
        – that page covers his strictly timed daily routine and his architectonic
        philosophical system. This page goes deeper into a chapter mentioned there only in
        passing: a lifelong, extremely well-documented hypochondria with chronic breathing
        distress, which he tried to master through an iron, self-devised health regimen, as
        well as a cognitive decline in his final years.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kant</strong> is assigned to the <strong>Social Type 6 with Five-wing</strong>.
        SO6 seeks security through duty, order and fixed structure; the Five-wing turns
        vigilance into a well-thought-out system. This same combination also determined how
        he handled his own physical vulnerability: not through medical treatment in the
        ordinary sense, but through a self-devised, strictly followed set of rules for
        mastering the body through will.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Chronic breathing distress since his youth:</strong>
        Already as a young man, Kant suffered from a breathing ailment he described as
        "tightness of the chest," which accompanied him throughout his adult life and which
        he addressed himself in philosophical writings.</p>
        <p class="vb-intro"><strong>b) Pronounced concern for his own digestion:</strong>
        Contemporaries reported Kant's meticulous preoccupation with his diet and digestion
        – a topic that came up strikingly often in his daily life and correspondence.</p>
        <p class="vb-intro"><strong>c) Early development of strict health routines:</strong>
        Already in his middle years, Kant began regulating his daily schedule – rising,
        walks, meals – so precisely that it became the foundation of his entire subsequent
        life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Philosophical processing of his own hypochondria:</strong>
        In his late work "The Conflict of the Faculties" (1798), Kant devoted an entire
        section to the question of how the will could master bodily sensations of illness
        through sheer force of will – a direct, theoretical processing of his own lifelong
        complaints.</p>
        <p class="vb-intro"><strong>b) Strict refusal to deviate from routine:</strong>
        Visitors and friends reported that Kant regarded even small disruptions to his daily
        schedule as potentially dangerous to his health and emphatically avoided them.</p>
        <p class="vb-intro"><strong>c) Daily table company as a health necessity:</strong>
        Kant insisted on extended, multi-hour company at lunch – a routine he himself
        described as necessary for his mental and physical balance, not merely a social
        habit.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Beginning cognitive decline from the mid-1790s:</strong>
        In his final years, an increasing mental slowing became noticeable in Kant, later
        documented by his close circle and biographers such as Thomas De Quincey.</p>
        <p class="vb-intro"><strong>b) Continuation of routine despite visible decline:</strong>
        Even as his memory and comprehension faded, Kant tried to continue his accustomed
        daily schedule unchanged for as long as possible.</p>
        <p class="vb-intro"><strong>c) Death on February 12, 1804, in Königsberg:</strong>
        Kant died at age 79, after years of increasing physical and mental weakness, in the
        city he had practically never left.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A philosopher whose medical history became a source:</strong>
        Kant's own engagement with his hypochondria flowed directly into his late work – a
        rare case in which chronic suffering was not concealed, but became the subject of
        philosophical reflection itself.</p>
        <p class="vb-intro"><strong>b) A funeral with unusual public participation:</strong>
        Despite his withdrawn life, an unusually large crowd gathered in Königsberg at his
        death – a late public expression of recognition for a man who had never sought
        visibility.</p>
        <p class="vb-intro"><strong>c) A life's work completed despite the complaints:</strong>
        Unlike some other illness histories in this Compass, Kant's chronic suffering did
        not prevent him from fully completing his entire philosophical system during his
        lifetime.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Routine as a protective system against his own body:</strong>
        The same search for security through fixed, reliable structure that shaped Kant's
        entire life also determined how he confronted his own physical vulnerability – not
        through submission to medical authority, but through a self-devised system he
        trusted with the same consistency as his philosophy.</p>
        <p class="vb-intro"><strong>b) The Five-wing and the theorizing of his own suffering:</strong>
        Kant's philosophical treatise on mastering illness sensations through the will shows
        exactly the same Five-like movement that also produced his epistemology: the
        uncontrollable is not simply endured, but translated into a conceptual system that
        promises control.</p>
        <p class="vb-intro"><strong>c) Reliability to the end, even in decline:</strong>
        Unlike a sudden health collapse, Kant showed a gradual decline recognizable over
        years – a pattern that matched his lifelong preference for predictability even in
        his own physical decline.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body meant to be mastered by force of will:</strong>
        Kant's entire life was shaped by the conviction that security could be achieved
        through consistent self-discipline and fixed rules – his hypochondria was no
        exception to this principle, but its most consistent application to his own body.</p>
        <p class="vb-intro"><strong>b) A Parallel in the Same Subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Sigmund Freud</a>
        (also SO6w5) kept smoking undeterred despite a diagnosis of jaw cancer and underwent
        more than 30 operations in order to remain mentally clear; decades earlier, Kant
        developed an equally rigid system to master his chronic breathing distress through
        sheer force of will. Both cases show the same SO6w5 pattern: security against one's
        own body, experienced as threatening, is sought not through submission to external
        medical authority, but through a self-devised, strictly followed system of control.
        More in the <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">illness portrait on Sigmund Freud</a>.</p>
        <p class="vb-intro"><strong>c) Why breathing, of all things?</strong>
        For a Social Six with Five-wing whose entire security rested on predictable,
        controlled routine, one interpretation suggests itself: precisely that bodily
        function least subject to conscious control – breath – became the site of his
        lifelong worry, while his system of thought simultaneously tried to conceptually
        contain exactly this uncontrollability. This interpretation is a plausible reading,
        not a documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of Social Six inevitably leads to hypochondria or
        breathing complaints – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Kant's case shows is a pattern in how a pronounced Social Six
        with Five-wing repeatedly deals with physical vulnerability – one possible reading
        among many, not a verdict. The corresponding illness profile is gradually being
        developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Kant did not know his own pattern – Social Six with Five-wing reflexively secures its
        own safety through self-devised, strictly followed systems rather than ever facing
        its own physical vulnerability without this control, and he lived out exactly this
        pattern unchanged into his final years, marked by cognitive decline. Whoever does not
        recognize their own need to tame every uncertainty through a system as a pattern
        cannot set it aside even in their own physical and mental decline.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Social Six with Five-wing explains much about the course of <strong>Kant's</strong>
        own illness: a man whose entire security rested on predictable structure tried to
        contain even his own, uncontrollable body in a system of rules and willpower – the
        meerkat that tried to keep watch over even its own shortness of breath with the same
        discipline it had kept watch with all its life.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-immanuel-kant", label:"Portrait: Immanuel Kant (SO6w5) – philosopher"},
        {route:"krankheitsportraets-sigmund-freud", label:"Illness Portrait: Sigmund Freud (SO6w5) – the same pattern of self-control"},
        {route:"krankheitsportraets-woody-allen", label:"Illness Portrait: Woody Allen (SP6w7) – related hypochondria, a different instinct response"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so6", label:"Subtype Profile SO6"},
      ])}
    </div>
  `);
}

export function johnGottiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/john-gotti-portrait.jpg" alt="John Gotti" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">John Gotti</p>
        <p class="krim-portrait-typ">SO8w7 · Social Type 8 with Seven-wing · 1940–2002</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Lion</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so8.jpg" alt="Animal correspondence: Lion" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO8")};left:${tierAvatarLeft("SO8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>John Gotti</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="kriminalpsychologie-john-gotti">criminal-psychology portrait</a>
        – that page covers his rise to boss of the Gambino family and his type structure as
        the "Teflon Don." This page goes deeper into a chapter mentioned there only in
        passing: a laryngeal cancer diagnosis in 1998 while in isolation, a fight against the
        disease with no public admission of weakness, and a death in 2002 in federal custody.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Gotti</strong> is assigned to the <strong>Social Type 8 with Seven-wing</strong>.
        Naranjo described this subtype as the type of friendship and brotherhood: dominance
        understood as protection of one's own pack. The Seven-wing adds enjoyment, flair and a
        love of the spotlight. This same refusal to admit weakness also determined how Gotti
        faced his fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis in a high-security prison, 1998:</strong>
        Six years after his life sentence, Gotti was diagnosed with laryngeal cancer – by then
        he was already held in strict isolation.</p>
        <p class="vb-intro"><strong>b) Surgery and an initial apparent success:</strong>
        After an initial treatment, the disease at first seemed pushed back – reports from
        this period spoke of a temporary improvement in his condition.</p>
        <p class="vb-intro"><strong>c) The illness returns a short time later:</strong>
        The cancer returned and spread – a course that continued over the following years
        until his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Transfer to a prison medical facility:</strong>
        As the illness progressed, Gotti was moved to the medical unit of the federal
        penitentiary in Springfield, Missouri, which specializes in treating severely ill
        inmates.</p>
        <p class="vb-intro"><strong>b) Almost no public images of the illness:</strong>
        Unlike his earlier, deliberately staged public appearances, only a few images or
        reports emerged from this period – the man who once sought the spotlight increasingly
        vanished from public view.</p>
        <p class="vb-intro"><strong>c) No public admission of weakness:</strong>
        The rare reports from this period contain no indication that Gotti ever acknowledged
        or publicly addressed his illness as a weakness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Extreme isolation during treatment:</strong>
        Gotti spent his final years of imprisonment in solitary confinement with severely
        restricted visitation rights – a man whose entire life had revolved around visibility
        and loyalty spent his last years almost completely cut off.</p>
        <p class="vb-intro"><strong>b) The decline of his own empire in the background:</strong>
        As Gotti fell ill, the Gambino family increasingly lost influence under his son – the
        king could no longer protect his empire from an isolation cell.</p>
        <p class="vb-intro"><strong>c) Death on June 10, 2002, in Springfield, Missouri:</strong>
        John Gotti died at age 61 in federal prison – almost exactly ten years after his life
        sentence.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A funeral that recalled his former glory once more:</strong>
        Despite official concerns, thousands gathered in the streets of Queens to follow the
        funeral procession – one last flicker of the loyalty Gotti claimed for himself in
        life.</p>
        <p class="vb-intro"><strong>b) A death far from the stage he once sought:</strong>
        The man who waved at cameras and received journalists died isolated in a prison
        hospital – a sharp contrast to his public self-image.</p>
        <p class="vb-intro"><strong>c) A legacy that did not outlive him:</strong>
        His son tried to keep the family empire going but failed – the lion's realm did not
        outlive its king.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The lion who could never show weakness:</strong>
        The same refusal to ever admit vulnerability that shaped Gotti's entire public
        presence also determined how little of his illness ever reached the outside world.</p>
        <p class="vb-intro"><strong>b) When the Eight under chronic stress becomes a Five:</strong>
        The extreme isolation of his final years – forced by his imprisonment but reinforced
        by his silence about his own illness – shows a pattern that goes beyond the usual
        dominance of the Eight with Seven-wing. Under chronic pressure, a person increasingly
        moves along their stress line toward their stress point – for the Eight, that is the
        Five. The withdrawal from public life, the disappearance from the spotlight he had
        once so deliberately sought, resembles the withdrawn seclusion of its stress point
        more than the open, space-claiming presence of the core type – while the core type
        itself, SO8w7, remained unchanged.</p>
        <p class="vb-intro"><strong>c) No public collapse of the facade:</strong>
        Unlike some other illness histories in this Compass, there are no reports of a
        visible cracking of Gotti's controlled demeanor – as far as is known, the lion's
        posture held until the end.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that could no longer be controlled:</strong>
        Gotti's entire life was shaped by the conviction that strength and control could
        fend off any threat – cancer was the first threat that neither loyalty nor
        intimidation could stop.</p>
        <p class="vb-intro"><strong>b) Isolation as a reversal of his own life pattern:</strong>
        A man who spent his whole life seeking and needing the closeness of his pack spent
        his final years in forced solitary confinement – a reversal diametrically opposed to
        his core theme.</p>
        <p class="vb-intro"><strong>c) Why the larynx, of all places?</strong>
        For a social Eight with Seven-wing whose entire power rested on his own voice, his own
        presence and his own performance, one interpretation suggests itself: precisely the
        organ that let him give orders, demand loyalty and make himself heard in public
        became the site of decay – literally taking from him the voice with which he once
        ruled his empire. This interpretation is a plausible reading, not a documented
        historical causal link, and is developed further in this Compass's psychosomatics
        register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the social Eight inevitably leads to laryngeal
        cancer – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Gotti's case shows is a pattern in how a pronounced social Eight with Seven-wing
        repeatedly deals with a fatal diagnosis – one possible reading among many, not a
        verdict. The corresponding illness profile is gradually being developed in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Gotti did not know his own pattern – the social Eight with Seven-wing meets every
        threat reflexively with control and unbroken outward strength rather than ever
        acknowledging it as personal vulnerability, and he lived out exactly this pattern
        unchanged into his final years of imprisonment. Whoever does not recognize their own
        inability to admit weakness as a pattern cannot set it aside even in their own dying.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Eight with Seven-wing explains much about the course of <strong>Gotti's</strong>
        own illness: a man whose entire power rested on visibility and voice lost both at
        once – the voice to cancer, the visibility to isolation. The lion who never wanted to
        operate in the shadows – and who spent his final years exactly there, invisible to
        the world that once admired him.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The type
        assignment is a psychological hypothesis, not a historical verdict. John Gotti was
        sentenced in 1992 to life imprisonment without parole for murder, extortion and
        racketeering, and died in custody in 2002. The Enneagram explains, it does not
        justify.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"kriminalpsychologie-john-gotti", label:"Criminal Psychology: John Gotti (SO8w7) – Boss of the Gambino Family"},
        {route:"krankheitsportraets-fritz-perls", label:"Illness Portrait: Fritz Perls (SO8w7) – the same refusal to admit weakness"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so8", label:"Subtype Profile SO8"},
      ])}
    </div>
  `);
}

export function junkoTabeiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-junko-tabei-portrait.jpg" alt="Junko Tabei" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Junko Tabei</p>
        <p class="krim-portrait-typ">SE7w6 &middot; Self-Preservation Type 7 with Six-wing &middot; 1939–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Animal correspondence: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Junko Tabei</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-junko-tabei">Famous Personality
        Portrait</a> in this Compass – that portrait focuses on her 1975 ascent of Mount
        Everest as the first woman ever to reach its summit. This page explores a chapter
        only referenced there in passing: a peritoneal cancer diagnosis in 2012, with which she
        continued climbing mountains until her death in 2016.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Tabei</strong> is assigned to the <strong>Self-Preservation Type 7 with
        Six-wing</strong>. The SE7 secures practical reserves of experience and
        possibilities for hard times; the Six-wing adds loyalty and a sense of duty
        toward a larger task. This exact combination – practical, unshakable continued
        work despite threat – determined how Tabei handled her own cancer diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Peritoneal cancer diagnosis in 2012:</strong>
        At age 73, Tabei received a diagnosis of advanced peritoneal cancer – a rare and
        often difficult-to-treat form of cancer.</p>
        <p class="vb-intro"><strong>b) No public announcement of withdrawal:</strong>
        Despite the serious diagnosis, there was no announcement of ending her mountaineering
        activity.</p>
        <p class="vb-intro"><strong>c) Continuation of youth projects after Fukushima:</strong>
        Tabei continued her commitment to young people from the regions affected by the
        2011 earthquake and nuclear disaster, offering them shared mountain climbs.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Further summit ascents until 2015:</strong>
        After the diagnosis, Tabei still climbed mountains in Niger, Luxembourg, Belgium,
        and Oman – countries whose respective highest peaks she still wanted to reach.</p>
        <p class="vb-intro"><strong>b) Over 150 mountains climbed across 76 countries overall:</strong>
        Over her entire life, Tabei climbed more than 150 mountains in 76 countries – a
        number that kept growing even after her diagnosis.</p>
        <p class="vb-intro"><strong>c) A four-year course of illness:</strong>
        Four years passed between her 2012 diagnosis and her death in 2016, during which
        she was both treated and remained active.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Public appearances despite the illness:</strong>
        Tabei continued attending lectures and public events without placing her own
        diagnosis at the center.</p>
        <p class="vb-intro"><strong>b) Practical rather than dramatizing communication:</strong>
        Accounts of her final years describe a matter-of-fact, unexcited approach to her
        own illness, consistent with her overall pragmatic nature.</p>
        <p class="vb-intro"><strong>c) Death in October 2016:</strong>
        Tabei died at age 77, four years after her diagnosis, having remained active until
        shortly before.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A legacy that the illness did not dominate:</strong>
        Tabei's public image remained defined by her pioneering achievement as a
        mountaineer until her death, not by the cancer.</p>
        <p class="vb-intro"><strong>b) Role-model effect beyond her own death:</strong>
        Her handling of the diagnosis was repeatedly honored in obituaries as an example
        of unbroken drive in the face of serious illness.</p>
        <p class="vb-intro"><strong>c) Continued commitment until the end:</strong>
        She continued her work with young people from the disaster regions until shortly
        before her death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Reserves of experience gathered until the end:</strong>
        The same SE7 logic of acquiring experiences and possibilities as security also
        determined Tabei's response to the cancer diagnosis – continuing to collect
        summits rather than withdrawing.</p>
        <p class="vb-intro"><strong>b) The Six-wing and duty toward the younger generation:</strong>
        The Six-wing's loyalty showed in her continued work with young people from
        Fukushima – a commitment that even her own illness did not stop.</p>
        <p class="vb-intro"><strong>c) Practical sobriety instead of dramatic staging:</strong>
        Tabei's matter-of-fact handling of her own diagnosis fits the SE7-typical
        tendency to handle threats practically rather than making them a major public
        topic.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A body that kept climbing what it had set out to climb:</strong>
        Tabei's entire life was shaped by the practical conviction that goals get reached
        as long as the body allows it – the cancer diagnosis did not change this basic
        stance, it only shortened the remaining time.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-larry-king">Larry
        King</a> (also SE7w6) kept hosting for decades despite numerous health crises of
        his own, without fundamentally reducing his workload; Tabei responded to her own
        cancer diagnosis with the same basic stance – practical continuation rather than
        withdrawal. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-larry-king">Illness Portrait of Larry King</a>.</p>
        <p class="vb-intro"><strong>c) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation Seven's pattern inevitably leads to
        cancer – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Tabei's case illustrates is a pattern in how a pronounced Self-Preservation
        Seven with a Six-wing tends to handle a serious diagnosis – one of many possible
        interpretations, not a verdict. The corresponding illness picture is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Tabei did not know her own pattern – the Self-Preservation Seven with a Six-wing
        reflexively keeps gathering experiences and fulfilling commitments already made,
        instead of ever taking a serious diagnosis as a reason for an orderly withdrawal,
        and she lived out exactly this pattern unchanged until her death. Someone who
        does not recognize their own tendency to keep going as a pattern cannot pause
        even in the face of a cancer diagnosis.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Seven with a Six-wing explains much about the course of
        <strong>Junko Tabei's</strong> own illness: a woman whose entire life rested on
        practical goal pursuit did not let even a cancer diagnosis keep her from the next
        summit – the gorilla that keeps climbing as long as its strength lasts.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-junko-tabei", label:"Portrait: Junko Tabei (SE7w6)"},
        {route:"krankheitsportraets-larry-king", label:"Illness Portrait: Larry King (SE7w6) – the same practical persistence"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se7", label:"Subtype Profile SE7"},
      ])}
    </div>
  `);
}

export function larryKingKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-larry-king-portrait.jpg" alt="Larry King – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Larry King</p>
        <p class="krim-portrait-typ">SE7w6 · Self-Preservation Type 7 with Six-wing · 1933–2021</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Gorilla</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se7.jpg" alt="Animal correspondence: Gorilla" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE7")};left:${tierAvatarLeft("SE7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Larry King</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-larry-king">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as a talk show host. This page puts
        the spotlight on a chapter that page only glances at: King suffered a severe
        heart attack and quintuple bypass surgery in 1987, later survived prostate and lung
        cancer (both 2017), another heart attack with stent treatment (2019), and a stroke
        with a weeks-long coma – before dying in 2021 at age 87 of sepsis following a
        COVID-19 infection.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>King</strong> is classified as the <strong>Self-Preservation Type 7 with
        Six-wing</strong>. Naranjo called the self-preservation Seven <em>Family</em>: she
        builds her own nest – a circle of people, rituals, and joys that gives her security,
        not through control like the Eight or rules like the One, but through connection and
        shelter. The Six-wing adds loyalty and vigilance – King's decades-long show itself
        became a kind of steady family that he was reluctant to give up even through
        repeated serious illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A severe heart attack at 54:</strong>
        In 1987, King suffered a severe heart attack, followed by quintuple bypass surgery –
        a defining event in the middle of his rising career as a nationally known talk show
        host.</p>
        <p class="vb-intro"><strong>b) A foundation as a direct response:</strong>
        Shortly after recovering, King founded the Larry King Cardiac Foundation, which
        offers financial support to heart patients in need – his own illness translated
        directly into a project for others.</p>
        <p class="vb-intro"><strong>c) A chronic condition follows:</strong>
        In 1995 came a diagnosis of type 2 diabetes – another lasting health burden added to
        his existing heart condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Two cancer diagnoses in the same year:</strong>
        In 2017, at age 84, King was diagnosed with both prostate cancer and lung cancer –
        the latter requiring surgical removal of a tumor from his lung.</p>
        <p class="vb-intro"><strong>b) Another heart attack and a stroke:</strong>
        In 2019, King suffered another heart attack, treated with coronary stents, followed
        a few months later by a stroke that put him in a coma for several weeks.</p>
        <p class="vb-intro"><strong>c) Still on air into the late 2010s:</strong>
        Despite this accumulation of serious diagnoses, King hosted <em>Larry King Now</em>
        on Ora TV/Hulu until shortly before his death – more than sixty years of journalistic
        work, interrupted but never ended by his own illness history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Returning to the studio after every crisis:</strong>
        After the 1987 heart attack, after the 2017 cancer diagnoses, after the 2019 heart
        attack and stroke – King returned to his show every time, as soon as it was
        physically possible.</p>
        <p class="vb-intro"><strong>b) His show as a steady, safe framework:</strong>
        For decades, the studio, the conversation, the unchanging format were his reliable
        anchor – for the self-preservation Seven with Six-wing, the work itself became a
        kind of family that provided security.</p>
        <p class="vb-intro"><strong>c) Openness about his own heart condition:</strong>
        Rather than concealing his heart disease, King made it public and founded a
        foundation for it – illness became a subject he spoke about openly, not something he
        hid.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A legacy of medical support:</strong>
        The Larry King Cardiac Foundation still exists today and has helped many heart
        patients in need since its founding – a direct, lasting consequence of his own 1987
        diagnosis.</p>
        <p class="vb-intro"><strong>b) Over sixty years of media presence despite repeated crises:</strong>
        King's journalistic career spanned more than six decades, even though from age 54
        onward he lived with an unbroken chain of health crises – heart attacks, diabetes,
        two cancer diagnoses, a stroke.</p>
        <p class="vb-intro"><strong>c) A death that became a symbol:</strong>
        King's death in January 2021 from COVID-19 complications received wide international
        attention – another case in which an already heavily burdened health could no longer
        withstand a new illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Carrying on as a basic reflex:</strong>
        After every single diagnosis, King returned to work as soon as it was physically
        possible – a typical pattern of the self-preservation Seven: her own nest, here the
        daily show, is not given up without a fight.</p>
        <p class="vb-intro"><strong>b) The Six-wing as vigilance toward his own body:</strong>
        Founding the Cardiac Foundation and speaking openly about his own heart disease show
        an alert, forward-looking stance toward danger – typical of the Six-wing, which does
        not deny risk but actively addresses it.</p>
        <p class="vb-intro"><strong>c) Publicness as an expression of his own illness experience:</strong>
        Rather than concealing his health problems, King made them an explicit subject – an
        expression of the self-preservation Seven, who turns even hardship into a shared,
        communal matter.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A chain of health crises across 34 years:</strong>
        From his 1987 heart attack to his fatal COVID-19 infection in 2021, King lived for
        more than three decades with recurring, serious health threats – and returned to
        work after every single one.</p>
        <p class="vb-intro"><strong>b) His own show as a family substitute that provided security:</strong>
        For a man whose professional life consisted of decades of late-night broadcasts and
        constant contact with guests, the work itself became exactly the kind of reliable
        nest Naranjo described for the self-preservation Seven.</p>
        <p class="vb-intro"><strong>c) Why, of all things, a chain of illnesses that threatened his own nest?</strong>
        For a self-preservation Seven with Six-wing, whose security depends on a stable,
        familiar framework, the repeated threat to this framework from his own illness can
        be read as an intensification of his own life pattern: every new diagnosis was an
        attack on his own nest – and every time, King returned to that nest as quickly as
        possible, refusing to give it up without a fight. This reading is explored in more
        depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the self-preservation Seven with Six-wing's pattern inevitably
        leads to such chains of illness – <strong>every person can develop any illness,
        regardless of subtype.</strong> King's health problems are also closely tied to
        classic cardiovascular risk factors (decades of smoking into the 1980s, decades of
        workaholism with night shifts), not to be explained purely psychosomatically. What
        his case can show is a pattern in how repeated illness was handled that stands out
        again and again in a pronounced self-preservation Seven with Six-wing – one possible
        reading among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        King, like most people, was not consciously aware of his own Enneagram pattern. Without that awareness, nothing kept his passion and motivation in check, instead of applying the emergency brake in time – a trait that made him a giant of his profession, while also repeatedly driving him past the limits of his own health. Someone who recognizes their own pattern can consciously counter it; someone who does not repeats it until the body sets the limit the person never set themselves.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Seven with Six-wing is confirmed once more in the persistence
        with which <strong>Larry King</strong> returned to his own nest, his show, after
        each of four decades of health crises. The gorilla, who made every conversation a
        safe place, defended that one place until the very end – until an illness came that
        even his decades of carefully guarded security could no longer withstand.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-larry-king", label:"Portrait: Larry King (SE7w6) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se7", label:"Subtype Profile SE7"},
      ])}
    </div>
  `);
}

export function marcelProustKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marcel-proust-portrait.jpg" alt="Marcel Proust" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marcel Proust</p>
        <p class="krim-portrait-typ">SO4w5 · Social Type 4 with Five-wing · 1871–1922</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marcel Proust</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-marcel-proust">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and his type structure in general.
        This page delves into a chapter only skimmed over there: a lifelong, severe asthma that
        increasingly forced him into his legendary, cork-lined room and eventually killed him
        at only 51 – while he worked on his life's work quite literally until his last breath.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Proust</strong> is classified as the <strong>Social Type 4 with
        Five-wing</strong>. The Social Four needs the group in order to live out her tragic
        uniqueness visibly there, rather than suffering in private. The Five-wing adds the urge
        not just to live through one's own experience but to analytically dissect it down to
        its finest branches. This same pattern can be traced right into his handling of his own
        illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The first severe asthma attack at age nine:</strong>
        In 1880, Proust suffered a severe asthma attack that nearly suffocated him during a
        walk in the Bois de Boulogne – from that moment on, the illness accompanied him until
        his death.</p>
        <p class="vb-intro"><strong>b) An extraordinary physical sensitivity:</strong>
        Even as a child, Proust reacted extremely to dust, pollen, and perfume – triggers
        harmless to most people, but capable of causing life-threatening breathlessness in him.</p>
        <p class="vb-intro"><strong>c) A life increasingly dictated by the illness:</strong>
        From a young age, Proust had to arrange his daily life – travel, appointments, social
        obligations – around the whims of his asthma, long before he withdrew entirely.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The retreat into the cork-lined room:</strong>
        To shield himself from street noise, dust, and pollen, Proust had his bedroom on the
        Boulevard Haussmann lined with cork and spent his final years there almost exclusively.</p>
        <p class="vb-intro"><strong>b) A reversed daily rhythm:</strong>
        Proust slept during the day and worked at night, when the city was quieter and the air
        less irritating – a rhythm that deepened his social isolation further.</p>
        <p class="vb-intro"><strong>c) Self-medication with questionable remedies:</strong>
        Proust treated his attacks with fumigation powders, caffeine and adrenaline
        injections, and a range of remedies common at the time, some of them dubious – a
        desperate, lifelong self-treatment without effective medical therapy.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) A race against time:</strong>
        Proust knew his lung disease would kill him young, and worked on "In Search of Lost
        Time" with an intensity that allowed hardly any pauses – the work had to be completed
        before his body finally gave out.</p>
        <p class="vb-intro"><strong>b) Corrections on his deathbed:</strong>
        Even in his final days, Proust corrected proofs and dictated additions – work on the
        book ended quite literally only with his last breath.</p>
        <p class="vb-intro"><strong>c) Death on 18 November 1922 in Paris:</strong>
        Proust died at age 51 of pneumonia that had developed from bronchitis on lungs
        weakened by decades of asthma.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">A Parallel Within the Same Subtype: Gustav Mahler</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <a href="javascript:void(0)" data-route="beruehmte-gustav-mahler">Gustav Mahler</a>
        (SO4w5) likewise knew – in his case through a heart valve disease – that he would soon
        die, and turned this knowledge into his most urgent late work rather than sparing
        himself. His own
        <a href="javascript:void(0)" data-route="krankheitsportraets-gustav-mahler">illness
        portrait</a> shows the same SO4w5 pattern as Proust: knowledge of one's own mortality
        is not suppressed but turned into a race against time that makes the late work the most
        urgent statement of an entire body of work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A work that knew about its own death:</strong>
        Few literary masterworks emerged so consciously aware of their author's limited
        time – the author's mortality is perceptibly written into "In Search of Lost Time."</p>
        <p class="vb-intro"><strong>b) Posthumous completion:</strong>
        The final volumes of the work were published only after Proust's death – he had
        essentially finished the manuscript, but the last editorial polish was left to others.</p>
        <p class="vb-intro"><strong>c) A retreat that became a literary method:</strong>
        What began as physical necessity – the isolation in the cork-lined room – became the
        condition for his writing: only from a distance to society could he describe it with
        such precision.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The armadillo that armored itself to survive:</strong>
        The cork on the walls was quite literally armor against the outside world – a
        protective shell Proust needed simply to be able to write at all.</p>
        <p class="vb-intro"><strong>b) Urgent neediness instead of distanced observation:</strong>
        In his final ill years, Proust demanded constant availability from his housekeeper
        Céleste Albaret, even in the middle of the night – an almost clinging need for
        closeness and care that ran counter to the otherwise distanced, analytical observer
        role of the Four with Five-wing.</p>
        <p class="vb-intro"><strong>c) Analytical distance to the very end:</strong>
        Even in his own dying, Proust remained the precise observer – he is said to have
        dictated notes on his own physical decline from his deathbed, intending to use them for
        a death scene in his novel.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Over four decades with the same illness:</strong>
        From age nine until his death at 51, asthma accompanied every phase of his life – not
        a sudden onset, but a lifelong, steadily intensifying relationship with his own
        vulnerability.</p>
        <p class="vb-intro"><strong>b) When the Four turns into the Two under chronic stress:</strong>
        The increasingly urgent, almost clinging neediness for his housekeeper's constant
        availability in his final years shows a pattern that goes beyond the usual withdrawal
        of the Four with Five-wing. Someone who lives for decades in chronic illness
        increasingly moves along their stress line toward their stress point – for the Four,
        that is the Two. This needy, care-seeking behavior in his final ill years reads more
        like the Two than the otherwise distanced, analytical baseline of the Five-wing Four –
        with an unchanged core type of SO4w5.</p>
        <p class="vb-intro"><strong>c) Withdrawal as both protection and art form:</strong>
        The cork-lined room was simultaneously a medical necessity and a literary laboratory –
        the isolation his body forced on him became the condition for a work that could never
        have reached this depth without it.</p>
        <p class="vb-intro"><strong>d) Why breathing, of all things?</strong>
        For a Social Four whose entire artistic existence rests on the ability to expose
        herself to the world while grasping it with analytical distance, one interpretation
        suggests itself: the very organ that establishes the most immediate connection to the
        outside world, the breath, became a source of permanent threat – forcing Proust into a
        withdrawal that intensified his observer role rather than dissolving it. This
        interpretation is a plausible reading, not a documented historical causal link, and is
        developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Social Four pattern inevitably leads to asthma –
        <strong>any person can develop any illness, regardless of subtype.</strong> What
        Proust's case illustrates is a pattern in how a pronounced Social Four with Five-wing
        handles chronic illness that keeps recurring in practice – one of many possible
        interpretations, not a judgment. The corresponding illness pattern is gradually being
        developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Proust did not know his own pattern – the Social Four with Five-wing reflexively turns
        suffering into analytically penetrating art rather than sparing herself, and that is
        exactly what he did until the very last line of his life's work. Someone who does not
        recognize their own tendency to treat themselves and their own illness primarily as
        observational material cannot balance it in time with genuine self-care.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Proust's</strong> Social Four with Five-wing is legible once more in the course
        of his illness: a lifelong illness that became the condition for one of the greatest
        works in world literature, and an author who turned his own dying into literary
        material even from his deathbed. The armadillo that armored itself in order to see all
        the more precisely from its seclusion – and whose final gaze fell on its own death.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-marcel-proust", label:"Portrait: Marcel Proust (SO4w5) – life's work"},
        {route:"krankheitsportraets-gustav-mahler", label:"Illness Portrait: Gustav Mahler (SO4w5) – the same race against time"},
        {route:"krankheitsportraets-edvard-munch", label:"Illness Portrait: Edvard Munch (SO4w5)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function michaelSchumacherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-michael-schumacher-portrait.jpg" alt="Michael Schumacher" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Michael Schumacher</p>
        <p class="krim-portrait-typ">SX6w7 · Sexual Type 6 with Seven-wing · born 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Michael Schumacher</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-michael-schumacher">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as seven-time Formula 1 world
        champion and his type structure in general, with a brief mention of the 2013 skiing
        accident. This page delves into that chapter: a severe traumatic brain injury, several
        emergency surgeries, months in a medically induced coma – and a since unprecedented,
        family-enforced total media blackout on his health.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schumacher</strong> is classified as the <strong>Sexual Six with Seven-wing</strong>.
        As the counter-type of the Six, SX6 meets its own fear not with retreat but with
        attack – safety comes from dominating danger, not avoiding it. Exactly this pattern –
        gaining control over the threat, if necessary through total isolation – still defines
        how his closest circle handles his illness today.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The fall on 29 December 2013:</strong>
        Schumacher was skiing off-piste in the French resort of Méribel with his then
        fourteen-year-old son Mick, lost control, and fell over rocks – an accident that
        initially seemed harmless but turned out to be life-threatening within minutes.</p>
        <p class="vb-intro"><strong>b) A helmet that could not fully absorb the impact:</strong>
        Despite wearing a helmet, Schumacher suffered a severe traumatic brain injury on
        impact with a rock – according to some reports, a camera mount attached to the helmet
        may have contributed to the severity of the injury.</p>
        <p class="vb-intro"><strong>c) Immediate transport to a specialist hospital:</strong>
        Schumacher was rushed to Grenoble University Hospital, which specializes in traumatic
        brain injuries, where emergency neurosurgical treatment began at once.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Several emergency surgeries to relieve pressure:</strong>
        The treating physicians, Jean-François Payen and Stephan Chabardes, removed a
        hematoma in several procedures and focused primarily on reducing the
        life-threatening intracranial pressure caused by bleeding and swelling.</p>
        <p class="vb-intro"><strong>b) Months in a medically induced coma:</strong>
        To give the brain the best possible chance to recover, Schumacher was kept in a
        medically induced coma for weeks and months – a duration far exceeding what is typical
        for traumatic brain injuries, reflecting the severity of the injury.</p>
        <p class="vb-intro"><strong>c) Transfer and discharge in June 2014:</strong>
        It was not until June 2014, roughly six months after the accident, that Schumacher was
        discharged from inpatient care – first to a specialist clinic in Lausanne, later into
        home care with his family.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) An unprecedented media blackout:</strong>
        Since his discharge in 2014, the family – above all his wife Corinna – has not made a
        single detailed medical statement about his condition public, a level of discretion
        with few if any equivalents among prominent illness cases.</p>
        <p class="vb-intro"><strong>b) A few, carefully measured signs of life:</strong>
        Isolated statements from his closest circle – such as Corinna Schumacher's line "He is
        here, he is different, but he is here" – have for years remained practically the only
        public information, supplemented by brief remarks from his brother Ralf Schumacher or
        his daughter Gina Maria.</p>
        <p class="vb-intro"><strong>c) Legal action against speculation:</strong>
        The family has repeatedly taken legal action against media outlets that published
        unauthorized reports, photos, or – in one 2023 case – an AI-generated interview about
        his condition, actively enforcing the media blackout as well as maintaining it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) The most public man in motorsport becomes the least visible:</strong>
        Few contrasts could be starker than the one between the Schumacher who spent decades
        in the glaring spotlight of Formula 1 and the man about whom, for over a decade, almost
        nothing has reached the public.</p>
        <p class="vb-intro"><strong>b) Speculation as a permanent state:</strong>
        The total information blackout has, over the years, created a persistent media vacuum
        repeatedly filled with unconfirmed rumors – for instance about stem-cell treatments in
        Paris – which the family has never confirmed nor denied.</p>
        <p class="vb-intro"><strong>c) A documentary as the only authorized glimpse:</strong>
        The 2021 Netflix documentary "Schumacher" offered, for the first time, a
        family-authorized but still highly restrained look back at his life – without showing
        any current images or information about his present condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Expression</h3>
        <p class="vb-intro"><strong>a) The wolf whose pack now fights for him:</strong>
        The SX6's characteristic strategy of meeting threat with dominance rather than retreat
        shows up here shifted onto the family: where Schumacher himself can no longer fight,
        his closest circle takes on exactly the same uncompromising stance – controlling the
        threat (in this case, the public) through firmness rather than yielding.</p>
        <p class="vb-intro"><strong>b) The Seven-wing and the return to the most radiant image:</strong>
        Rather than a current, potentially distressing image, his circle consistently chooses
        the memory of the victorious, vibrant Schumacher – a stance that fits the Seven-wing's
        ability to hold on to joy and light even in the face of loss, rather than being
        consumed by heaviness.</p>
        <p class="vb-intro"><strong>c) Absolute consistency instead of half measures:</strong>
        As in his active career, the handling of his illness knows no half measures either: no
        partial openness, no occasional update, but a complete, decade-plus-consistently
        maintained blackout – SX6w7 in its most radical form, now lived out on his behalf by
        his family.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) From a head that knew every corner by heart to a head that must now be protected:</strong>
        Schumacher's entire career rested on an exceptionally precise, highly trained mind –
        track knowledge, reaction speed, tactical thinking. Precisely this organ became the
        site of the most severe injury in the 2013 fall.</p>
        <p class="vb-intro"><strong>b) Why precisely off the marked track, for a man whose entire life was risk control?</strong>
        For a Sexual Six whose entire professional life consisted of the precise, highly
        trained mastery of extreme speed on closed, secured racetracks, one interpretation
        suggests itself: the consequential accident happened precisely in an uncontrolled,
        unsecured environment – off-piste, without the safety nets of a Formula 1 cockpit.
        This interpretation is a plausible reading, not a proven medical or biographical causal
        link, and is explored further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Context without determinism:</strong>
        This does not mean the pattern of the Sexual Six inevitably leads to severe
        accidents – <strong>anyone can have any accident and develop any illness, regardless
        of subtype.</strong> What Schumacher's case illustrates is a pattern in how a sudden,
        existential crisis is handled, one that recurs again and again in a pronounced Sexual
        Six with a Seven-wing and their closest circle – one interpretation among many, not a
        judgment. This illness pattern is being developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Nothing suggests that Schumacher or his family ever consciously knew his Enneagram
        pattern. And yet his case shows just how deeply the SX6 principle of "safety through
        control of the threat" continues to operate even after catastrophe – no longer in the
        cockpit, but in the radical, still-maintained control over what the world is allowed
        to know about him. Whoever has spent a lifetime learning to meet danger with dominance
        carries that same pattern forward even when the danger is no longer the racetrack, but
        the public itself.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Schumacher's</strong> Sexual Six with a Seven-wing, too, can be read once more
        through his illness history: a sudden, existential threat met with the same
        uncompromising resolve that once defined his career – except the control is no longer
        his own, but exercised on his behalf by his pack. The wolf who once set the pace for
        all of Formula 1 has, for over a decade, been protected by that very same pack he had
        built around himself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-michael-schumacher", label:"Portrait: Michael Schumacher (SX6w7) – life's work"},
        {route:"krankheitsportraets-avril-lavigne", label:"Illness Portrait: Avril Lavigne (SX6w7) – same subtype, opposite coping strategy"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function neilArmstrongKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-neil-armstrong-portrait.jpg" alt="Neil Armstrong" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Neil Armstrong</p>
        <p class="krim-portrait-typ">SP6w5 &middot; Self-Preservation Type 6 with Five-wing &middot; 1930\u20132012</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Rabbit</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Animal correspondence: Rabbit" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Neil Armstrong</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-neil-armstrong">Famous
        Personality Portrait</a> in this Compass \u2013 that portrait focuses on his 1969
        moon landing and his subsequent withdrawal into private life. This page explores
        a chapter only briefly indicated there: a coronary heart disease lasting over two
        decades that in 2012 led to bypass surgery and, shortly after, his death.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Armstrong</strong> is assigned to the <strong>Self-Preservation Type 6
        with Five-wing</strong>. The SP6 seeks safety through routine and a familiar,
        controlled environment; the Five-wing adds a retreat into the technical and the
        conviction that safety arises above all through knowledge and mastery, not
        through social disclosure. This exact combination \u2013 a quiet, withdrawn life
        in which even his own illness was treated as a purely technical, privately
        solved problem \u2013 determined how Armstrong handled his years-long heart
        disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Heart attack in 1991 while skiing:</strong>
        At age 61, Armstrong suffered a heart attack while skiing in Aspen, Colorado \u2013 the
        earliest documented cardiac event, a good two decades before his death.</p>
        <p class="vb-intro"><strong>b) A largely withdrawn life with no public reporting on the illness:</strong>
        Consistent with his already publicity-shy lifestyle, little about his actual
        health condition became known over the following two decades.</p>
        <p class="vb-intro"><strong>c) Progressive coronary heart disease over two decades:</strong>
        The 1991 heart attack marked the beginning of a chronic coronary heart disease
        that continued to develop over the years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Failed stress test in August 2012:</strong>
        On August 6, 2012, Armstrong failed a cardiac stress test \u2013 an acute indication of
        multiple blockages in his coronary arteries.</p>
        <p class="vb-intro"><strong>b) Emergency quadruple bypass surgery:</strong>
        A few days later, Armstrong underwent urgent quadruple coronary bypass surgery.</p>
        <p class="vb-intro"><strong>c) Complications after the surgery:</strong>
        After the initially successful surgery, complications arose, from which Armstrong
        died on August 25, 2012.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) No public announcement of the surgery beforehand:</strong>
        Consistent with Armstrong's lifelong reticence toward the public, there was no
        broad media coverage in advance of the surgery.</p>
        <p class="vb-intro"><strong>b) Family rather than public communication:</strong>
        Information about his health condition came mostly through his family, not
        through self-initiated public statements.</p>
        <p class="vb-intro"><strong>c) Later legal review of his treatment:</strong>
        After his death, the treatment led to a multi-million-dollar legal settlement that
        raised questions about the medical care after the surgery.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death noted worldwide:</strong>
        Armstrong's death after the surgery triggered international sympathy \u2013 as the
        first man on the moon, he remained a global symbolic figure until the end.</p>
        <p class="vb-intro"><strong>b) Subsequent media review of the treatment:</strong>
        Professional media and health journalists discussed the circumstances of the
        surgery and the subsequent complications extensively after his death.</p>
        <p class="vb-intro"><strong>c) A public image that remained marked by reticence:</strong>
        Even the coverage of his final illness remained unusually restrained compared to
        other celebrities \u2013 consistent with his entire public demeanor.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Withdrawal as a safety strategy, even with his own illness:</strong>
        The same SP6 tendency to seek safety in the familiar and withdrawn, which shaped
        Armstrong's entire life after 1969, also determined how little became known
        about his actual heart disease.</p>
        <p class="vb-intro"><strong>b) The Five-wing and treating his own illness as a technical question:</strong>
        The retreat into the technical that the Five-wing brings showed in how Armstrong
        approached the risky surgery apparently like an engineering problem \u2013
        matter-of-fact, without visible public drama, without emotional staging.</p>
        <p class="vb-intro"><strong>c) Control through reticence rather than disclosure:</strong>
        Unlike other SP6 portraits in this Compass, who translate their fear into
        language, Armstrong controlled his own vulnerability mainly through silence \u2013
        a control the Five-wing seeks through knowledge and distance, not through
        closeness.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A heart as quiet as his later life:</strong>
        Armstrong's entire life after the moon landing was shaped by the wish to remain
        inconspicuous \u2013 his heart disease, lasting over two decades, remained, consistent
        with this pattern, largely invisible to the public until the end.</p>
        <p class="vb-intro"><strong>b) A contrast within the same core type, different wing:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-woody-allen">Woody
        Allen</a> (SP6w7, with a Seven-wing) translated his own, mostly imagined health
        anxiety into language and comedy publicly for decades \u2013 he deliberately stepped
        into public view with his neurosis. Armstrong, with the same core type but a
        Five-wing instead of a Seven-wing, took the opposite path with his actual, real
        heart disease \u2013 he settled it with himself, without ever making it a topic. The
        same SP6 core, the same underlying fear of one's own body, but two completely
        different wing responses: the Seven-wing seeks the stage, the Five-wing seeks
        withdrawal. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-woody-allen">Illness Portrait of Woody Allen</a>.</p>
        <p class="vb-intro"><strong>c) Why the heart, of all things?</strong>
        For a Self-Preservation Six with a Five-wing, whose entire life rested on
        translating skill into quiet, reliable competence, one interpretation suggests
        itself: precisely the organ that figuratively stands for courage and devotion
        became the site of an illness that he \u2013 true to the Five-wing \u2013 treated as a
        purely technical problem that needed to be shared with no one. This
        interpretation is a plausible reading, not a documented historical causal link,
        and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation Six's pattern inevitably leads to
        heart disease \u2013 <strong>anyone can suffer any illness, regardless of
        subtype.</strong> What Armstrong's case illustrates is a pattern in how a
        pronounced Self-Preservation Six with a Five-wing tends to handle a concealed
        chronic illness \u2013 one of many possible interpretations, not a verdict. The
        corresponding illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Armstrong did not know his own pattern \u2013 the Self-Preservation Six with a
        Five-wing reflexively seeks safety in withdrawal and in concealing its own
        vulnerability instead of making it public, and he lived out exactly this pattern
        unchanged until his death. Someone who does not recognize their own tendency
        toward quiet withdrawal as a pattern sometimes misses the moment when more open
        communication about their own health would have helped.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Six with a Five-wing explains much about how <strong>Neil
        Armstrong</strong> handled his own heart disease: a man whose entire life after
        the moon was shaped by withdrawal and reticence carried even his real physical
        threat mostly in silence \u2013 the rabbit that did not want to leave its burrow until
        its very last breath.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-neil-armstrong", label:"Portrait: Neil Armstrong (SP6w5)"},
        {route:"krankheitsportraets-woody-allen", label:"Illness Portrait: Woody Allen (SP6w7) \u2013 same core type, opposite wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se6", label:"Subtype Profile SP6"},
      ])}
    </div>
  `);
}

export function ottoVonBismarckKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-otto-von-bismarck-portrait.jpg" alt="Otto von Bismarck" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Otto von Bismarck</p>
        <p class="krim-portrait-typ">SX6w5 · Sexual Type 6 with Five-wing · 1815–1898</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Otto von Bismarck</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-otto-von-bismarck">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work, the wolf as animal motif, and his
        type structure in general. Here the spotlight shifts to what that page barely mentions: the
        exhaustion crisis and severe obesity of the early 1880s, the radical treatment by
        Dr. Ernst Schweninger, and the refused treatment of a gangrene of the foot that led to
        his final weeks in 1898.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Bismarck</strong> is classified as the <strong>Sexual Six with Five-wing</strong>.
        Naranjo described SX6 as the Six's counter-type: rather than withdrawing from threat, it
        meets it with demonstrated strength – even when the threat is one's own aging body. The
        Five-wing adds a tendency toward hypochondria and withdrawal into an inner world, visible
        in Bismarck in a strict separation between what he showed publicly and what he actually
        went through physically.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A body that accumulated decades of constant political tension:</strong>
        By the late 1870s Bismarck's weight had risen to around 123 kilograms – the sum of
        decades of coping strategies against chronic stress: rich food, heavy smoking, and
        substantial alcohol consumption, all while he kept the founding of the Empire, the
        Kulturkampf, and the Anti-Socialist Laws under control.</p>
        <p class="vb-intro"><strong>b) Only about two working hours a day:</strong>
        In the early 1880s Bismarck himself estimated he could truly work only around two hours a
        day – a dramatic decline for a man who had juggled Europe's power constellations in his
        head for three decades, one he did not admit publicly for a long time.</p>
        <p class="vb-intro"><strong>c) A contemporaneously documented recourse to strong measures:</strong>
        A diary entry by an acquaintance from 1872 notes that the Chancellor was taking morphine
        – an early sign that Bismarck was already reaching for strong remedies against insomnia,
        nervous complaints, and pain years before the open exhaustion crisis, rather than
        addressing the underlying overload.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The path to Dr. Schweninger through his own son:</strong>
        Bismarck came into contact with the young Bavarian physician Ernst Schweninger through
        his son Wilhelm, who himself suffered from obesity-related heart and gout problems – in
        1882 Wilhelm brought Schweninger to the Varzin estate in Hinterpomerania, and in early
        summer 1883 Schweninger took over the Chancellor's treatment.</p>
        <p class="vb-intro"><strong>b) A simple but radically consistent regimen:</strong>
        Schweninger's recipe was simple: exercise in fresh air, plain, reduced nutrition,
        significantly less alcohol, and regular sleep – against the declared resistance of the
        established court physicians, who had favored more conventional cures.</p>
        <p class="vb-intro"><strong>c) Roughly 20 kilograms lost within a few years:</strong>
        From around 123 kilograms in 1879, Bismarck's weight dropped to about 100 kilograms by
        1884 – a spectacular success for the time that earned Schweninger, at Bismarck's own
        urging, an appointment as head of the Berlin dermatology clinic and extraordinary
        professor in 1884.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Trust granted to only a very few people in his life:</strong>
        That Bismarck – a man whose political style rested on deep, chronic mistrust – handed
        himself over almost unconditionally to a young outsider physician initially mocked in
        court circles is remarkable for the SX6w5: trust is rarely given, but when it is given,
        it is given without reservation.</p>
        <p class="vb-intro"><strong>b) Markedly increased activity after the cure:</strong>
        After the successful treatment Bismarck became noticeably more active and resilient – the
        radical change worked where decades of self-overexertion had brought his body to the
        brink of incapacity.</p>
        <p class="vb-intro"><strong>c) A pattern that repeated after 1890:</strong>
        After his forced dismissal in 1890, Bismarck withdrew permanently to Friedrichsruh – again
        with complaints of nervous ailments, insomnia, and digestive troubles, again in the
        withdrawal posture typical of the Five-wing once the political stage had been taken from
        him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A second, final decline from mid-1897 onward:</strong>
        Bismarck's physicians diagnosed a so-called senile gangrene in mid-1897 – a chronic
        circulatory disorder causing painful tissue death in his foot, which by the summer of
        1898 increasingly dominated the overall clinical picture.</p>
        <p class="vb-intro"><strong>b) Wheelchair, fever, and growing breathlessness:</strong>
        From summer 1898 his condition deteriorated rapidly: Bismarck was increasingly confined
        to a wheelchair, suffered from fever and an added pneumonia with severe breathlessness – a
        physical decline that made any recovery impossible within a few weeks.</p>
        <p class="vb-intro"><strong>c) A death shortly after midnight:</strong>
        Otto von Bismarck died on July 30, 1898, shortly after midnight in his bedroom at
        Friedrichsruh, at the age of 83 – from the effects of gangrene, pneumonia, and severe
        digestive disturbance.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The wolf who opened himself to a single confidant:</strong>
        That it was Schweninger, of all people – a young outsider without court backing – who
        became the one physician Bismarck truly followed shows the SX6w5 in its rare, healthy
        form: relinquishing control once trust genuinely seems earned.</p>
        <p class="vb-intro"><strong>b) The same hardness once turned on political opponents, now turned on his own body:</strong>
        The uncompromising hardness Bismarck once directed against opponents of the Kulturkampf
        and against Social Democrats turned, in his final years, against his own warning signs as
        well – pain and loss of function were suppressed for as long as possible rather than
        taken seriously.</p>
        <p class="vb-intro"><strong>c) Withdrawal instead of public weakness:</strong>
        As in earlier phases of exhaustion, Bismarck largely withdrew from public view during his
        final illness as well, rather than letting weakness become visible – the Five-wing, which
        preferred to hide vulnerability behind closed doors in Friedrichsruh rather than in front
        of an audience.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A parallel within the same subtype – Friedrich Schiller (SX6w5):</strong>
        As with <a href="javascript:void(0)" data-route="krankheitsportraets-friedrich-schiller">Friedrich
        Schiller</a>, also SX6w5, Bismarck shows the pattern typical of this subtype: meeting
        threat – including one's own mortality – not with withdrawal but with confrontation. The
        expression, however, runs in opposite directions: Schiller confronted his illness by
        working through it to the point of physical exhaustion; Bismarck confronted his own
        gangrene by refusing its treatment – two variants of the same SX6 core stance of never
        yielding to one's own vulnerability, only expressed in opposite outward form: activity in
        Schiller's case, refusal in Bismarck's.</p>
        <p class="vb-intro"><strong>b) Two separate crises, one recurring pattern:</strong>
        Between the exhaustion crisis of the early 1880s and the fatal gangrene of the late
        1890s lie a decade and a half – yet both times Bismarck's body reacted to years of
        accumulated political strain, and both times the beginning was a condition he himself
        had long played down before anyone reacted at all.</p>
        <p class="vb-intro"><strong>c) Why the treatment by Schweninger succeeded while the gangrene treatment failed:</strong>
        The decisive difference can be traced to trust: in 1883 Bismarck surrendered himself
        almost unconditionally into the hands of a single physician he personally trusted. In
        his final years, more isolated and more distrustful than ever of the official medical
        establishment at the court of his successor Wilhelm II, that very trust relationship that
        had made the difference in 1883 appears to have been missing.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the foot – the organ of one's own standing?</strong>
        For a Sexual Six whose entire political craft rested on asserting his own position, if
        necessary through threat and hardness, one reading suggests itself: precisely the organ
        that figuratively represents one's own unshakeable stand became, in his final years, the
        site of a decline that Bismarck – unlike every political threat before it – could not
        avert through control or counterattack. The refusal to be treated reads as a final
        attempt to at least retain interpretive authority over his own, unstoppably declining
        body – preserving control over his own vulnerability by denying it rather than having it
        treated. This reading is a plausible interpretation, not a documented historical causal
        link.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual Six's pattern inevitably leads to circulatory disorders or
        gangrene – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Bismarck's case can show is a pattern that stands out again and again in practice
        wherever the need exists never to admit weakness – including one's own physical
        weakness – one possible explanation among many, not a verdict.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Bismarck did not know his own Enneagram pattern – the concept did not yet exist in this
        form during his lifetime. The Sexual Six's counter-reaction of meeting every threat with
        hardness rather than withdrawal carried, for him, no built-in warning mechanism that
        could have moved him to seek treatment in time; on the contrary, his own dying tissue was
        apparently processed through the same logic as every other threat in his life before it:
        as something one does not yield to, but faces down, if necessary simply by ignoring it.
        Someone who does not know their own pattern of never admitting weakness cannot break it
        in time either – for Bismarck, that ended only with his death, on July 30, 1898.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The course of his illness reflects, once more, <strong>Bismarck's</strong> Sexual Six
        with Five-wing: an exhaustion crisis of the early 1880s that he overcame only through
        almost unconditional trust placed in a single physician, and a gangrene of the late 1890s
        whose treatment he refused until, on July 30, 1898, no further resistance was possible.
        The wolf who once learned to trust a single person – and who, by the end of his life,
        could no longer extend that trust to anyone, not even to his own vulnerability.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-otto-von-bismarck", label:"Portrait: Otto von Bismarck (SX6w5) – life's work"},
        {route:"krankheitsportraets-friedrich-schiller", label:"Illness Portrait: Friedrich Schiller (SX6w5) – same subtype"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function romySchneiderKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-romy-schneider-portrait.jpg" alt="Romy Schneider" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Romy Schneider</p>
        <p class="krim-portrait-typ">SO4w3 · Social Type 4 with Three-wing · 1938–1982</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Romy Schneider</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-romy-schneider">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general. This
        portrait is devoted to a chapter barely present there: a severe kidney operation, years
        of alcohol and pill use that eventually spiraled out of control, the suicide of her
        first husband in 1979, the tragic death of her son David in 1981 – and her own,
        still not fully resolved death in 1982 at only 43 years old.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schneider</strong> is classified as the <strong>Social Four with Three-wing</strong>.
        SO4 carries the Four's pain into the social dimension – shame, the deep sense of not
        being good enough for the world one lives in. The Three-wing simultaneously drives an
        unrelenting need for achievement and public presence. Exactly this contradiction –
        needing the stage and being consumed by it – also defined her final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A severe kidney operation:</strong>
        Schneider had to undergo a serious kidney operation, from which, according to those
        around her, she never fully recovered – a physical setback that further weakened her
        already fragile constitution.</p>
        <p class="vb-intro"><strong>b) The suicide of her first husband in 1979:</strong>
        Her first husband, director Harry Meyen and father of her son David, took his own life
        in Hamburg on 15 April 1979 – a loss that shook Schneider deeply, even before the true
        tragedy of her life was still to come.</p>
        <p class="vb-intro"><strong>c) Years of increasingly uncontrolled dieting, alcohol, and pill use:</strong>
        Even before the great losses of her final years, strict diets, alcohol, and
        tranquilizers had accompanied Schneider's daily life for two decades – a pattern that
        escalated sharply in her last years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The death of her son David on 5 July 1981:</strong>
        Fourteen-year-old David suffered a fatal injury climbing over a spiked fence at the
        home of Schneider's partner and died from the resulting internal injuries after
        surgery – a blow from which Schneider visibly never recovered in public.</p>
        <p class="vb-intro"><strong>b) Escalating alcohol use as numbing:</strong>
        After David's death, Schneider drank heavily, according to consistent accounts from
        those around her, evidently trying to numb the pain of the loss – during several film
        shoots in this period she appeared intoxicated or failed to show up on set at all.</p>
        <p class="vb-intro"><strong>c) Continuing to work despite a visible breakdown:</strong>
        Rather than withdrawing, Schneider kept working in front of the camera even during
        this time – her final film, <em>La Passante du Sans-Souci</em>, was made shortly
        before her death, in a role that could barely conceal her own exhaustion.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Found at her desk, on the night of 29 May 1982:</strong>
        Her partner at the time, film producer Laurent Pétin, found Schneider collapsed at her
        desk early in the morning in her Paris apartment – beside her, an unfinished
        handwritten letter.</p>
        <p class="vb-intro"><strong>b) Official cause of death heart failure, no autopsy performed:</strong>
        The official cause of death was recorded as heart failure; no autopsy was performed –
        a circumstance that continues to fuel speculation about the exact circumstances of her
        death to this day, including the never-confirmed suspicion of suicide by pills.</p>
        <p class="vb-intro"><strong>c) A web of several exhausting factors:</strong>
        Biographers consistently describe her death as the result of several combined
        burdens: the pain over David, the aftereffects of the kidney operation, two decades
        of strict dieting, and alcohol and pill use – not a single cause, but a body that
        withdrew, exhausted, after years of overload.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A public image that long outshone the private collapse:</strong>
        To the public, Schneider remained the glamorous European film star until the very end
        – the growing private crisis only became fully visible after her death.</p>
        <p class="vb-intro"><strong>b) Barely ten and a half months between the two deaths:</strong>
        Between David's death in July 1981 and Romy Schneider's own death in May 1982 lay less
        than eleven months – a span so short that the public could hardly overlook the
        connection between the two events.</p>
        <p class="vb-intro"><strong>c) A myth that still resonates today:</strong>
        The unresolved circumstances of her death – no autopsy, an unfinished letter, years
        of publicly visible exhaustion – have made Romy Schneider's final years one of the
        most discussed chapters in European film history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Expression</h3>
        <p class="vb-intro"><strong>a) The armadillo that kept showing itself outwardly while collapsing within:</strong>
        The SO4's characteristic shame – the feeling of failing to live up to one's role and
        others' expectations – kept Schneider appearing in front of the camera even in her
        deepest private pain, rather than withdrawing openly.</p>
        <p class="vb-intro"><strong>b) The Three-wing and the inability to let go of the stage:</strong>
        The same drive that had carried her career for decades – achievement,
        professionalism, the need to be needed – kept her filming even once her body and mind
        were already exhausted.</p>
        <p class="vb-intro"><strong>c) Numbing instead of visible despair:</strong>
        Rather than breaking down publicly, she numbed the pain with alcohol and pills – a
        quiet, inward-directed coping strategy that matches the armadillo's pattern of
        retreat: curling in on itself rather than showing itself.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A shell that, in the end, only held from the outside:</strong>
        Schneider's entire public image rested on a flawless, glamorous façade – that same
        façade held almost to the very end, while behind it, over years, a physical and
        psychological exhaustion built up that no one on the outside could fully gauge.</p>
        <p style="background:rgba(74,127,145,0.12);border-radius:8px;padding:0.9rem 1.1rem;margin:1rem 0;"><strong>A striking parallel within the same subtype – Michael Jackson:</strong>
        Notably, this Compass also features <a href="javascript:void(0)" data-route="krankheitsportraets-michael-jackson">Michael Jackson (also SO4w3)</a>,
        whose illness history runs strikingly parallel: both Social Fours with a Three-wing,
        both maintaining a years-long public façade of achievement and perfection, both with a
        growing dependence on substances – for Jackson, pain and sleep medication, for
        Schneider, alcohol and pills – meant to numb unbearable inner pain rather than let it
        become visible. And both died in circumstances never fully medically resolved,
        arising precisely from that same self-medication.</p>
        <p class="vb-intro"><strong>b) Why precisely the heart, for a woman whose whole life was devoted to feeling?</strong>
        For a Social Four whose entire artistic work rested on the ability to let feeling
        through unfiltered and show it, one interpretation suggests itself: precisely the
        organ that, in the Enneagram, stands for the Heart Center and emotional depth became
        the site of the final collapse, after carrying more feeling for decades than a
        person can process. This interpretation is a plausible reading, not a proven medical
        causal link, and is explored further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Context without determinism:</strong>
        This does not mean the pattern of the Social Four inevitably leads to heart failure
        or addiction – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Schneider's case illustrates is a pattern in how unprocessed loss was handled,
        one that recurs again and again in a pronounced Social Four with a Three-wing – one
        interpretation among many, not a judgment. This illness pattern is being developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Nothing suggests that Schneider ever consciously knew her own Enneagram pattern – the
        system was barely known during her lifetime. The Four's shame and envy
        went unopposed for decades: instead of acknowledging her own pain early and seeking help,
        she held on to the public façade and numbed what lay behind it. Whoever does not
        recognize their own wound as a recurring pattern also cannot meet it in time, when two
        existential losses – her son's father in 1979, her son himself in 1981 – arrive in
        such close succession.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Even at the end of her life, <strong>Romy Schneider's</strong> Social Four with a
        Three-wing can be read once more: a woman who stood in front of the camera to the
        very end, while collapsing inwardly under the weight of two existential losses, and
        whose death – unresolved, without an autopsy, with an unfinished letter beside her –
        became a final, still-open chapter of her own story. The armadillo that kept showing
        itself to the world right up to its last shoot – and then, entirely alone, finally
        curled in on itself for good.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-romy-schneider", label:"Portrait: Romy Schneider (SO4w3) – life's work"},
        {route:"krankheitsportraets-michael-jackson", label:"Illness Portrait: Michael Jackson (SO4w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function spinozaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-spinoza-portrait.jpg" alt="Baruch de Spinoza" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Baruch de Spinoza</p>
        <p class="krim-portrait-typ">SP5w6 · Self-Preservation Type 5 with Six-wing · 1632–1677</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Owl</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Animal correspondence: Owl" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Baruch de Spinoza</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-spinoza">famous-personality portrait</a>
        – that page covers his radical withdrawal from every community and his strictly
        systematic philosophical work. This page goes deeper into a chapter mentioned there
        only in passing: a chronic lung disease, likely caused by decades of inhaling glass
        dust while grinding lenses – caused by the very craft that secured his intellectual
        independence.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Spinoza</strong> is assigned to the <strong>Self-Preservation Type 5 with
        Six-wing</strong>. SP5 hoards energy, space and time for its own thinking – a
        "fortress," as Naranjo called this subtype. This same principle of radical
        self-sufficiency also determined how he handled his progressing illness: no
        withdrawal from the craft that was making him sick, but consistent continuation, as
        long as it secured his independence.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades at the workbench:</strong>
        After his expulsion from Amsterdam's Jewish community in 1656, Spinoza earned his
        living almost exclusively as a grinder of optical lenses – precise manual work he
        practiced daily for more than two decades.</p>
        <p class="vb-intro"><strong>b) Fine glass dust as a constant companion:</strong>
        Grinding lenses produced fine, inhaled glass dust – a burden that only became
        noticeable after years, at a time when the dangers of such fine particulates to the
        lungs were still unknown.</p>
        <p class="vb-intro"><strong>c) Growing breathing difficulties in his final years:</strong>
        In the years before his death, his health noticeably deteriorated – a gradual decline
        that overlapped with his unchanged way of working.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) No change in his way of life:</strong>
        Despite his progressing illness, there is no evidence that Spinoza gave up or
        substantially reduced his craft – daily work at the bench remained part of his
        withdrawn, self-sufficient life until the end.</p>
        <p class="vb-intro"><strong>b) Almost no complaints in his surviving letters:</strong>
        In his correspondence with a small circle of trusted scholars, there are strikingly
        few references to his physical condition – the fortress of SP5 largely kept even his
        own illness hidden within.</p>
        <p class="vb-intro"><strong>c) Continued philosophical work until the end:</strong>
        His main work, the Ethics, was essentially complete by the time of his death – the
        illness did not interrupt his philosophical work; only death itself ended it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) No documented doctor's visit, no recorded treatment attempt:</strong>
        Unlike some other illness histories in this Compass, there are no reports of medical
        consultations or treatment attempts – a withdrawn life without firm social ties
        apparently also meant a life without medical accompaniment in today's sense.</p>
        <p class="vb-intro"><strong>b) Death came in the midst of his work:</strong>
        Spinoza died on February 21, 1677, in The Hague, apparently suddenly within a short
        period of worsened symptoms – not after a long, publicly visible period of suffering,
        but after years of quiet, barely documented decline.</p>
        <p class="vb-intro"><strong>c) Only 44 years old:</strong>
        He died unusually young for his intellectual legacy – a life that, by today's
        standards, could have included decades more of philosophical work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A work that only appeared after his death:</strong>
        Friends published his "Opera Posthuma" that same year, including the Ethics – a work
        he himself never had printed under his own name during his lifetime, for fear of
        exactly the persecution that had already cost him his community's ban.</p>
        <p class="vb-intro"><strong>b) No public testimony of suffering:</strong>
        Unlike later famous philosophers who reflected on or literarily processed their own
        illness, Spinoza's surviving work shows almost no engagement with his own physical
        decline.</p>
        <p class="vb-intro"><strong>c) A quiet death, a loud afterlife:</strong>
        His actual death went nearly unnoticed outside his small circle of friends – the
        impact of his thinking only unfolded generations later, from Leibniz (SO3w4) to Einstein (SO5w4).</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The fortress that also enclosed his own illness:</strong>
        The same radical self-sufficiency that shaped Spinoza's entire life also determined
        how little of his physical decline reached the outside world – illness, like
        everything else, was absorbed into his own protected inner world rather than shared.</p>
        <p class="vb-intro"><strong>b) The Six-wing and loyalty to his own principle:</strong>
        His refusal to give up the craft that was making him sick shows the same loyalty to
        his own system that led him to decline a secure chair in Heidelberg in 1673 – the
        independence secured by lens grinding outweighed the health risk it carried.</p>
        <p class="vb-intro"><strong>c) No visible despair, no visible struggle:</strong>
        Unlike some other illness histories in this Compass, there are no reports of a public
        or even letter-documented struggle against his own mortality – the owl withdrew, as
        it had done throughout its entire life.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that paid for independence:</strong>
        Spinoza's entire life was shaped by the conviction that undisturbed thinking could
        only be secured through radical self-sufficiency – lens grinding was the price of
        this independence, and in the end also its fatal underside.</p>
        <p class="vb-intro"><strong>b) A Parallel in the Same Subtype:</strong>
        Nearly 260 years later, <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">Marie Curie</a>
        (also SP5w6) died of aplastic anemia – a direct consequence of decades of unprotected
        work with radioactive materials, whose danger she herself had helped research. Both
        died of an illness that arose directly from the very craft that also gave them their
        deepest intellectual fulfillment and independence – a striking parallel between two
        Self-Preservation Fives who paid for their life's work with their own health. More in
        the <a href="javascript:void(0)" data-route="krankheitsportraets-marie-curie">illness portrait on Marie Curie</a>.</p>
        <p class="vb-intro"><strong>c) Why the lungs, of all places?</strong>
        For a Self-Preservation Five with Six-wing whose entire strength rested on the
        ability to withdraw into a protected, undisturbed inner world, one interpretation
        suggests itself: precisely the organ that enabled breath – the most immediate,
        elemental connection to the outside world – became the site of decay, caused by his
        own, freely chosen isolation at the workbench. This interpretation is a plausible
        reading, not a documented historical causal link, and is developed further in this
        Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of Self-Preservation Five inevitably leads to lung
        disease – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Spinoza's case shows is a pattern in how a pronounced Self-Preservation Five with
        Six-wing repeatedly deals with health risks posed by their own work – one possible
        reading among many, not a verdict. The corresponding illness profile is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Spinoza did not know his own pattern – Self-Preservation Five with Six-wing
        reflexively secures its own independence and undisturbed inner world rather than ever
        openly acknowledging its own physical vulnerability, and he lived out exactly this
        pattern unchanged into his final years. Whoever does not recognize their own need to
        maintain the protective fortress at any cost as a pattern cannot set it aside even in
        the face of their own mortality.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Self-Preservation Five with Six-wing explains much about the course of
        <strong>Spinoza's</strong> own illness: a man whose entire independence rested on
        quiet, precise work at the bench paid for it with exactly his health – the owl who
        withdrew so far that even its own illness became barely visible, before it finally
        took away its breath.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-spinoza", label:"Portrait: Baruch de Spinoza (SP5w6) – philosopher"},
        {route:"krankheitsportraets-marie-curie", label:"Illness Portrait: Marie Curie (SP5w6) – fatal consequence of her own research"},
        {route:"krankheitsportraets-hermann-hesse", label:"Illness Portrait: Hermann Hesse (SP5w6) – same withdrawal logic, different illness"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se5", label:"Subtype Profile SP5"},
      ])}
    </div>
  `);
}

export function voltaireKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-voltaire-portrait.jpg" alt="Voltaire" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Voltaire</p>
        <p class="krim-portrait-typ">SX4w3 · Sexual Type 4 with Three-wing · 1694–1778</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chihuahua</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx4.jpg" alt="Animal correspondence: Chihuahua" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX4")};left:${tierAvatarLeft("SX4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Voltaire</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-voltaire">famous-personality portrait</a>
        – that page covers his lifelong fight against religious and political arbitrariness
        and his role as a founding father of the Enlightenment. This page goes deeper into a
        chapter mentioned there only in passing: decades of chronic digestive and bladder
        ailments, obsessively documented in his extensive correspondence, that never slowed
        his extraordinary productivity.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Voltaire</strong> is assigned to the <strong>Sexual Type 4 with Three-wing</strong>.
        SX4 experiences pain with immediate, personal intensity; the Three-wing turns this
        inner experience outward, into visible effect. This same combination also determined
        how he handled his chronic afflictions: not through withdrawal, but through endless,
        almost literary description – and unrelenting continued work regardless.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First complaints already in his early years:</strong>
        Already in his twenties, Voltaire began regularly complaining about digestive
        problems in letters to friends – a pattern that ran through his entire adult life.</p>
        <p class="vb-intro"><strong>b) Chronic bladder and kidney problems:</strong>
        Over decades, he recurrently suffered from painful bladder ailments and presumed
        kidney stones, which at times severely limited him.</p>
        <p class="vb-intro"><strong>c) An almost endless list of further complaints:</strong>
        Headaches, fever episodes, skin rashes and general states of exhaustion completed,
        over the years, a picture of chronic, never-quite-disappearing health impairment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Excessive documentation in his own correspondence:</strong>
        Of the more than 20,000 surviving letters by Voltaire, a strikingly large share deals
        with his own physical condition – detailed, often dramatic, addressed alike to
        doctors, friends and admirers.</p>
        <p class="vb-intro"><strong>b) Repeated announcements of his imminent death that never came true:</strong>
        Voltaire repeatedly announced his approaching end in letters, which then failed to
        materialize for decades – a pattern that earned him a reputation as a notorious
        hypochondriac already during his lifetime.</p>
        <p class="vb-intro"><strong>c) No noticeable interruption of his output:</strong>
        Despite the constant complaints, hundreds of works appeared in these same decades –
        plays, philosophical writings, polemics, correspondence – at a pace that hardly
        suggests a genuinely incapacitated man.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Unusually old age for his time:</strong>
        Despite decades of complaints about his physical decline, Voltaire reached the age of
        83 – far beyond the average life expectancy of the 18th century.</p>
        <p class="vb-intro"><strong>b) Return to Paris despite warnings:</strong>
        In 1778, the already gravely marked Voltaire traveled back to Paris against medical
        advice, after 28 years of exile, to witness the triumphant staging of his final play.</p>
        <p class="vb-intro"><strong>c) Rapid physical decline after his return:</strong>
        The excitement and exertion of the triumphant return, combined with his already
        weakened state, accelerated his final physical collapse in the following weeks.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death in the midst of triumph:</strong>
        Voltaire died on May 30, 1778, in Paris, just weeks after his celebrated return – an
        ending that matched his entire life: dramatic, public, and at the center of attention
        until the end.</p>
        <p class="vb-intro"><strong>b) Refused a church burial:</strong>
        The Catholic Church initially refused him a Christian burial – one final, public
        conflict that continued his lifelong struggle with religious authority beyond death.</p>
        <p class="vb-intro"><strong>c) Posthumous rehabilitation as a symbolic figure:</strong>
        Only in 1791, during the French Revolution, were his remains transferred to the
        Panthéon amid great public jubilation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Pain that became a literary stage:</strong>
        The same ability to turn his own inner experience immediately outward that shaped
        Voltaire's entire public work also determined how he spoke about his illnesses – not
        concealed, but extensively, dramatically, staged almost literarily.</p>
        <p class="vb-intro"><strong>b) The Three-wing and the refusal to be slowed down:</strong>
        Unlike a more introverted Four might have reacted, Voltaire never let his chronic
        afflictions keep him from work – the Three-wing knew that impact only comes through
        continued visibility, illness or not.</p>
        <p class="vb-intro"><strong>c) No withdrawal, but one final public stage:</strong>
        Unlike some other illness histories in this Compass, Voltaire's life did not end in
        quiet withdrawal, but in one final, deliberately sought public triumph that
        accelerated his physical decline rather than delaying it.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that became the stage for his own experience:</strong>
        Voltaire's entire life was shaped by the conviction that every experience –
        humiliation, injustice, even physical suffering – had to be expressed immediately and
        with full intensity. His chronic complaints were no exception to this principle, but
        its most consistent application.</p>
        <p class="vb-intro"><strong>b) Hypochondria as a form of expression, not weakness:</strong>
        What contemporaries mocked as exaggerated self-pity can also be read, from today's
        perspective, as an expression of SX4 intensity: his own suffering was not
        downplayed, but perceived and communicated in its full, often dramatized reality.</p>
        <p class="vb-intro"><strong>c) Why the stomach, bowels and bladder, of all places?</strong>
        For a sexual Four with Three-wing whose entire power rested on the immediate
        transformation of inner experience into public effect, one interpretation suggests
        itself: precisely the organs that signal physical discomfort most immediately became
        the preferred site of his endless self-observation – a body constantly reporting what
        the soul had long since felt. This interpretation is a plausible reading, not a
        documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the sexual Four inevitably leads to chronic
        digestive or bladder ailments – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Voltaire's case shows is a pattern in how a pronounced sexual
        Four with Three-wing repeatedly deals with chronic physical discomfort – one possible
        reading among many, not a verdict. The corresponding illness profile is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Voltaire did not know his own pattern – the sexual Four with Three-wing reflexively
        transforms every inner experience into immediate, public expression rather than ever
        quietly keeping complaints to himself, and he lived out exactly this pattern unchanged
        into his final weeks of life. Whoever does not recognize their own need to express
        every experience with full intensity as a pattern cannot set it aside even in their
        own dying.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Four with Three-wing explains much about the course of
        <strong>Voltaire's</strong> own illness: a man whose entire power rested on the
        immediate, public transformation of inner experience made even his own suffering into
        a lifelong, continuously written text – the Chihuahua that kept barking, even from
        its own sickbed, rather than falling silent.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-voltaire", label:"Portrait: Voltaire (SX4w3) – Enlightenment philosopher"},
        {route:"krankheitsportraets-francisco-de-goya", label:"Illness Portrait: Francisco de Goya (SX4w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx4", label:"Subtype Profile SX4"},
      ])}
    </div>
  `);
}

export function woodyAllenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-woody-allen-portrait.jpg" alt="Woody Allen" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Woody Allen</p>
        <p class="krim-portrait-typ">SP6w7 &middot; Self-Preservation Type 6 with Seven-wing &middot; b. 1935</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Rabbit</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Animal correspondence: Rabbit" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Woody Allen</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-woody-allen">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his extensive body of filmmaking work.
        This page explores a chapter only hinted at there: a decades-long, publicly
        celebrated hypochondria, which he himself prefers to call "alarmism" – a pattern
        that has accompanied his life and work continuously since the 1950s.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Woody Allen</strong> is assigned to the <strong>Self-Preservation Type 6
        with Seven-wing</strong>. The SP6 seeks safety through routine and a tightly
        familiar environment; the Seven-wing immediately translates fear into language,
        pace, and wit rather than freezing in it. This exact combination – fear that never
        fully disappears but is constantly transformed into words, punchlines, and work –
        also determined how Allen handled his own health anxiety.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Beginning psychoanalysis around 1957–1959:</strong>
        By his own account, Allen began analytic treatment as early as the late 1950s, as
        a young, up-and-coming comedy writer – a starting point that would continue for
        decades.</p>
        <p class="vb-intro"><strong>b) Over 35 years of uninterrupted psychoanalysis:</strong>
        By his own account, Allen underwent analytic treatment for more than 35 years – not
        with the goal of being cured, but to systematically understand and put his own fear
        into words.</p>
        <p class="vb-intro"><strong>c) Early processing in his own work:</strong>
        Already in his early films and stand-up routines of the 1960s and 1970s, his own
        health anxiety became a recurring comedic material, long before he wrote about it
        explicitly in public.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The smallest symptoms become catastrophes:</strong>
        Allen describes that even chapped lips can immediately trigger suspicion of a brain
        tumor, lung cancer, or – in one self-described instance – Mad Cow disease.</p>
        <p class="vb-intro"><strong>b) Self-description as an "alarmist," not a hypochondriac:</strong>
        Allen insisted that he did not invent imaginary ailments, but instead interpreted
        real, harmless symptoms in the most catastrophic way possible – a fine but, in his
        own words, important distinction.</p>
        <p class="vb-intro"><strong>c) Pronounced fear of flying and of confined spaces:</strong>
        Alongside health anxiety in the narrower sense, fear of flying, elevators, and
        confined spaces shaped his daily life for decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) The New York Times essay of January 12, 2013:</strong>
        In a widely noticed opinion piece, Allen described his own health anxiety in
        detail – including worry about his own sex pheromones, pronouncing sleeping men
        dead, and the suspicion that his real fear was not any particular illness but
        simply death itself.</p>
        <p class="vb-intro"><strong>b) A consistent refusal to be reassured:</strong>
        By his own account, an aspirin or some calamine lotion is usually all the actual
        treatment he needs – yet the panic beforehand remains equally strong every time,
        regardless of how harmless the symptom actually is.</p>
        <p class="vb-intro"><strong>c) Hypochondria as a recurring film theme:</strong>
        Characters with pronounced health anxiety, often played by Allen himself, run
        through his entire body of work – from early comedies to his later films, the
        theme remains present.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A trademark rather than a hidden affliction:</strong>
        Unlike many other illness histories in this Compass, Allen's health anxiety was
        never concealed but from the start became a publicly known, even marketed part of
        his artistic identity.</p>
        <p class="vb-intro"><strong>b) Undiminished creative output despite decades of fear:</strong>
        Over five decades, Allen made a new film at almost an annual rate – his health
        anxiety never visibly slowed the sheer volume of his output.</p>
        <p class="vb-intro"><strong>c) An audience that recognized itself in his fear:</strong>
        Generations of viewers found a form of comfort in Allen's openly displayed
        neurosis – his art did not pathologize their own fear but normalized it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Fear immediately translated into language:</strong>
        The same SP6w7 mechanism that carries his entire comedic voice also determined his
        handling of his own health anxiety – not repression, but immediate translation
        into a flood of words, punchlines, and self-analysis.</p>
        <p class="vb-intro"><strong>b) The Seven-wing and the forward flight into the next project:</strong>
        Rather than pausing at any single health scare, the Seven-wing kept driving Allen
        toward the next film, the next clarinet evening – work as motion against the
        standstill the Six fears most.</p>
        <p class="vb-intro"><strong>c) Understanding as a reassurance strategy:</strong>
        The more than 35 years of continued psychoanalysis show the typical SP6 stance:
        one's own fear is not fought but systematically mapped and put into words –
        understanding as a way to keep living with it, rather than get rid of it.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A fear that became his life's work:</strong>
        For Allen, his own health anxiety was never a side phenomenon but, from the start,
        the actual material of his art – a lifelong pattern that stayed visible, never
        hidden, always translated anew into language.</p>
        <p class="vb-intro"><strong>b) A related but different expression than in Kant and Freud:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-immanuel-kant">Immanuel
        Kant</a> and <a href="javascript:void(0)" data-route="krankheitsportraets-sigmund-freud">Sigmund
        Freud</a> (both SO6w5) also suffered from pronounced, decades-long health anxiety –
        but as social Sixes, both sought safety through strict, self-devised systems and
        routines that they rarely displayed publicly. Allen's Self-Preservation Six with a
        Seven-wing shows the same underlying fear in a different translation: not hidden
        self-control, but publicly displayed, comedically processed openness. The same
        root – the Six's fear of one's own body – two very different instinctual responses
        to it.</p>
        <p class="vb-intro"><strong>c) Why the body itself, of all things?</strong>
        For a Self-Preservation Six, whose entire sense of safety rests on the careful
        control of their own immediate surroundings, one interpretation suggests itself:
        one's own body is the most immediate, least controllable territory of all – even
        the smallest sign of disturbance threatens exactly the safety on which the
        Self-Preservation instinct is most focused. This interpretation is a plausible
        reading, not a documented clinical causal link, and will be developed further in
        this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation Six's pattern inevitably leads to
        pronounced hypochondria – <strong>anyone can develop any psychological or physical
        pattern, regardless of subtype.</strong> What Allen's case illustrates is a pattern
        in how a pronounced Self-Preservation Six with a Seven-wing tends to handle health
        anxiety – one of many possible interpretations, not a verdict. The corresponding
        illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Allen does not know his own pattern as an Enneagram structure – the Self-Preservation
        Six with a Seven-wing reflexively translates every perceived threat to its own body
        into language and motion instead of ever letting it settle, and he has lived out
        exactly this pattern virtually unchanged for six decades. Someone who does not
        recognize their own tendency to immediately turn fear into a flood of words and
        work as a pattern cannot pause, even past the age of ninety, to simply sit with
        it.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Six with a Seven-wing explains much about how
        <strong>Woody Allen</strong> handles his own health anxiety: a man whose entire body
        of work rests on translating fear into language turns every smallest symptom into
        material rather than standstill – the rabbit that never stops keeping watch, but
        has learned to make art out of its own vigilance for six decades.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-woody-allen", label:"Portrait: Woody Allen (SP6w7) – the rabbit"},
        {route:"krankheitsportraets-immanuel-kant", label:"Illness Portrait: Immanuel Kant (SO6w5) – related hypochondria, a different instinct response"},
        {route:"krankheitsportraets-sigmund-freud", label:"Illness Portrait: Sigmund Freud (SO6w5)"},
        {route:"krankheitsportraets-neil-armstrong", label:"Illness Portrait: Neil Armstrong (SP6w5) – same core type, opposite wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se6", label:"Subtype Profile SP6"},
      ])}
    </div>
  `);
}

export function heinrichHeineKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-heinrich-heine-portrait.jpg" alt="Heinrich Heine" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Heinrich Heine</p>
        <p class="krim-portrait-typ">SO4w3 · Social Type 4 with Three-wing · 1797–1856</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Heinrich Heine</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-heinrich-heine">famous-personality portrait</a>
        – that page covers his literary work and his type structure in general. This page
        focuses on the chapter that defined his last eight years of life: a progressive,
        to this day not reliably diagnosed paralysis he himself called his "mattress grave."
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Heine</strong> is assigned to the <strong>Social Type 4 with Three-wing</strong>.
        SO4 does not process her own otherness through withdrawal, but through a constant
        search for confirmation before an audience. The Three-wing turns that search into
        active visibility. This exact pattern also determined how Heine dealt with an
        illness that confined him literally to bed without ever silencing his public
        voice.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A sudden collapse in May 1848:</strong>
        In May 1848, Heine took to his bed in his Paris apartment, from which he would
        never rise again &ndash; the onset of a progressive paralysis likely caused by
        degeneration of the spinal cord.</p>
        <p class="vb-intro"><strong>b) Paralysis from the chest down:</strong>
        The illness increasingly left him unable to move &ndash; paralyzed from the chest
        down, he lost control over large parts of his own body.</p>
        <p class="vb-intro"><strong>c) Blindness in one eye:</strong>
        One eye went completely blind; the remaining one he could only use if someone
        &ndash; or he himself with one hand &ndash; raised the eyelid while he wrote with
        the other hand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A diagnosis disputed to this day:</strong>
        Heine himself was convinced he suffered from a venereal disease. Later
        investigations proposed different explanations &ndash; including neurosyphilis,
        multiple sclerosis, and, following an 1997 hair analysis, chronic lead poisoning.
        No certain diagnosis exists to this day.</p>
        <p class="vb-intro"><strong>b) Cramps, headaches, and a wracking cough:</strong>
        Alongside the paralysis came agonizing cramps, throbbing headaches, and a
        persistent cough that only opium and morphine could relieve.</p>
        <p class="vb-intro"><strong>c) Dictating instead of writing:</strong>
        Once even the laborious act of holding his eyelid open no longer sufficed, Heine
        switched to dictating his texts &ndash; the writing ended, the poetry did not.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) "Romanzero" (1851), written from bed:</strong>
        His third major poetry collection was composed entirely during his illness &ndash;
        full of laments and unsparing reflections on human existence, it is still
        considered one of his most significant works.</p>
        <p class="vb-intro"><strong>b) A poem titled "Morphine":</strong>
        Heine processed his own dependence on painkillers directly in literary form &ndash;
        the drug that kept him alive itself became the subject of his art.</p>
        <p class="vb-intro"><strong>c) Receiving visitors until the end:</strong>
        Despite his condition, Heine continued to receive guests in his "mattress grave"
        &ndash; among them prominent figures of his time &ndash; and conducted conversations
        with the same sharp wit he had been known for his whole life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Eight years without rising:</strong>
        From May 1848 until his death in February 1856, Heine never once left his bed
        &ndash; one of the longest documented periods of suffering of any major writer of
        his era.</p>
        <p class="vb-intro"><strong>b) Death on February 17, 1856:</strong>
        Heine died at age 58 in Paris. His last recorded remark to his praying wife
        &ndash; "God will forgive me, that's his job" &ndash; kept his wit intact to the
        end.</p>
        <p class="vb-intro"><strong>c) A body of work that outlasted the illness:</strong>
        The late poems written in the mattress grave are today considered a distinct,
        often described as his most mature, chapter of his entire body of work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The body becomes invisible, the voice stays visible:</strong>
        As his body grew increasingly incapacitated, the public presence of his voice
        paradoxically intensified &ndash; the very SO4w3 dynamic that needs visibility to
        confirm its own significance found, in dictation, one last channel.</p>
        <p class="vb-intro"><strong>b) The Three-wing and the refusal to fall silent:</strong>
        Where withdrawal and silence might have seemed obvious, Heine chose the opposite:
        receiving visitors, dictating, continuing to show wit &ndash; the stage grew
        smaller, but was never abandoned.</p>
        <p class="vb-intro"><strong>c) Suffering turned into literature instead of concealed:</strong>
        Rather than hiding his agony, Heine made it explicitly the subject of his poems
        &ndash; his own suffering, like his Jewish-Christian inner conflict before it,
        became an openly negotiated theme rather than a hidden flaw.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A life that never fully belonged ends in total isolation:</strong>
        Heine's entire life was shaped by the question of whether he truly belonged
        &ndash; to the Jewish community, to the Christian majority society, to German
        culture in French exile. The illness sharpened this core question to a physical
        extreme: confined to bed, almost completely cut off from the world, only his own
        voice remained as a bridge to the outside.</p>
        <p class="vb-intro"><strong>b) Wit as a last means of belonging:</strong>
        His famous sarcasm right up to his deathbed was not a mere character trait, but
        the last remaining way to stay connected to the world after his body had closed
        off nearly every other channel.</p>
        <p class="vb-intro"><strong>c) Why the nerves and eyes, of all things?</strong>
        For a social Four with Three-wing, whose entire self-understanding rested on
        visibility and being perceived, one interpretation suggests itself: precisely
        the organs most directly tied to perceiving and being perceived &ndash; the eyes
        that see, and the nervous system that carries the connection to the outside world
        &ndash; became the site of the illness. This interpretation is a plausible
        reading, not a documented historical causal link, and is developed further in
        this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the social Four inevitably leads to neurological
        illness &ndash; <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Heine's case shows is a pattern in how a pronounced social
        Four with Three-wing handles existential isolation &ndash; one possible reading
        among many, not a verdict. The corresponding illness profile is gradually being
        developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro"><strong>e) The unconscious fixation as its own factor:</strong>
        Heine did not know his own pattern &ndash; the social Four with Three-wing needs
        an audience to confirm its own significance, and exactly this need he lived out
        into his final weeks of life, receiving visitors and dictating rather than
        withdrawing into silence. Whoever does not recognize their own longing for
        visibility as a pattern easily mistakes it for pure creative drive, even though
        their own fixation plays a part too.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) A parallel within the same subtype – Edvard Munch (SO4w5):</strong>
        A striking parallel appears in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-edvard-munch">Illness Portrait of Edvard Munch</a>
        — also a social Four, there with a Five-wing. Where Heine processed his paralysis in
        poems, Munch painted every one of his crises — flu, eye disease, hand injury — in
        self-portraits. Two different wings of the same social Four, the same underlying
        pattern: visibility as a coping strategy rather than concealment.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Four with Three-wing explains much about the course of
        <strong>Heine's</strong> own illness: a man whose entire self-understanding
        depended on visibility and belonging lost almost his entire body to the illness
        &ndash; and defended, to his last breath, the one connection that remained to
        him: his voice. The armadillo that did not curl up in the mattress grave, but
        kept speaking outward.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-heinrich-heine", label:"Portrait: Heinrich Heine (SO4w3) – life's work"},
        {route:"krankheitsportraets-hans-christian-andersen", label:"Illness Portrait: Hans Christian Andersen (SO4w3)"},
        {route:"krankheitsportraets-romy-schneider", label:"Illness Portrait: Romy Schneider (SO4w3)"},
        {route:"krankheitsportraets-edvard-munch", label:"Illness Portrait: Edvard Munch (SO4w5) – the same coping strategy, a different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function juergenDrewsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-juergen-drews-portrait.jpg" alt="Jürgen Drews" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jürgen Drews</p>
        <p class="krim-portrait-typ">SX9w8 · Sexual Type 9 with Eight-wing · born 1945</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Sloth</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Animal correspondence: Sloth" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jürgen Drews</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-juergen-drews">portrait under Famous Personalities</a>
        in this Compass – that page covers his career as a schlager singer and his
        decades-long marriage to Ramona. This page deepens a chapter only
        fleetingly touched on there: his 2022 public diagnosis of the nerve
        disease polyneuropathy and his quiet, unspectacular way of handling it.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Drews</strong> is classified as the <strong>Sexual Nine with
        Eight-wing</strong>. The SX9 seeks fulfillment through total fusion with a
        single intense relationship or task, but in doing so easily loses sight
        of her own needs and her body's own warning signs. The Eight-wing adds an
        unusual readiness to confront and openly voice uncomfortable truths
        instead of glossing over them.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Numbness barely addressed for years:</strong>
        Polyneuropathy typically begins gradually, with tingling, numbness, and
        weakening strength in the hands and feet – symptoms that slowly intensify
        over years before becoming impossible to ignore.</p>
        <p class="vb-intro"><strong>b) A schedule that knew no pause:</strong>
        Even once the first symptoms had likely long been noticeable, Drews
        remained for years in full touring and stage operation – performances,
        interviews, the summer Mallorca program, with no visible slowdown.</p>
        <p class="vb-intro"><strong>c) No public warning beforehand:</strong>
        Unlike some other illness portraits in this Compass, there was no visible
        phase of public withdrawal beforehand – the diagnosis only became known
        once the retirement from the stage had already been decided.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The diagnosis of polyneuropathy:</strong>
        In 2022 Drews publicly announced that he suffered from the incurable
        nerve disease polyneuropathy, which causes numbness, pain, and muscle
        wasting, and in that context announced his retirement from the stage.</p>
        <p class="vb-intro"><strong>b) A comparatively mild, controlled course:</strong>
        By his own account, the disease runs a comparatively mild and medically
        somewhat controllable course in his case – no dramatic collapse, but an
        affliction he learned to live with.</p>
        <p class="vb-intro"><strong>c) Still: continuing to work instead of withdrawing:</strong>
        Despite the diagnosis and the announced retirement from the stage, Drews
        released a new album in 2025, at age 80, and continued giving interviews
        – the announced withdrawal never became a complete silence.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) "I am tired, but not finished":</strong>
        In a 2025 ZDF summer interview Drews summed up his condition in this one
        sentence – a sober, almost offhand phrasing without any drama, typical of
        how the Nine handles her own suffering.</p>
        <p class="vb-intro"><strong>b) Rumors instead of clarity:</strong>
        His public reticence created a breeding ground over the years for
        repeated death rumors online – Drews himself never reacted with great
        outrage, but with quiet composure.</p>
        <p class="vb-intro"><strong>c) No staging as a fight:</strong>
        Unlike many public illness narratives of prominent people, Drews never
        stylized his illness into a battle to be won – it remained a
        circumstance to keep living with.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A stage retirement that never fully happened:</strong>
        The 2022-announced withdrawal from the stage remained a gradual
        transition rather than a definitive endpoint – interviews, a new album,
        occasional appearances stayed part of his life.</p>
        <p class="vb-intro"><strong>b) Family as the carrying constant:</strong>
        His wife Ramona and daughter Joelina stayed at his side throughout –
        the same close bond that had already shaped his professional life for
        decades carried him through the health phase as well.</p>
        <p class="vb-intro"><strong>c) Public sympathy despite his reticence:</strong>
        Although Drews himself put little drama into his illness narrative,
        each of his sparse public statements about it triggered great media
        response – a fan base that has hung on him emotionally for decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Merging with the role to the end:</strong>
        The Sexual Nine's typical strategy of merging with a task or an audience
        showed in Drews in that even a progressive nerve disease did not fully
        sever his bond to stage and fans.</p>
        <p class="vb-intro"><strong>b) The Eight-wing as blunt openness:</strong>
        That Drews neither glossed over his illness nor spared his own success
        scene carries the signature of the Eight-wing: not denial, but a clear,
        sometimes uncomfortable directness, even toward himself.</p>
        <p class="vb-intro"><strong>c) Low tendency to make his own suffering a stage:</strong>
        Typical of the Nine is a reluctance to loudly voice her own distress –
        Drews' sparse, sober statements about his illness fit exactly into this
        pattern.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A life built on constancy long before the diagnosis:</strong>
        The same marriage since 1994, the same Mallorca audience since the 1990s,
        the same genre for decades – Drews' life pattern was shaped by constancy
        long before the illness, not by constant new beginnings.</p>
        <p class="vb-intro"><strong>b) The illness as continuation, not rupture:</strong>
        Unlike a dramatic break, the polyneuropathy fits seamlessly into this
        pattern: even with it, Drews essentially carries on as before, only at an
        adjusted pace instead of a complete withdrawal.</p>
        <p class="vb-intro"><strong>c) A parallel to Diego Velázquez, also SX9 in this Compass, a different wing:</strong>
        Like <a href="javascript:void(0)" data-route="krankheitsportraets-diego-velazquez">Diego Velázquez</a>,
        who even past sixty showed no signs of slowing down and stayed in service
        until complete exhaustion, Drews too shows a low tendency to take a
        timely pause. The key difference lies not only in the course – where
        Velázquez's body reported in abruptly, within a single week, Drews'
        illness runs a slow, diagnosed course – but also in the wing: where
        Velázquez's One-wing concealed his exhaustion in quiet dutifulness,
        Drews' Eight-wing voices even his own weakness openly and directly. The
        underlying pattern of staying loyal to one's audience and one's task,
        even once the body has long signaled its limits, still connects both
        cases.</p>
        <p class="vb-intro"><strong>d) Why a nerve disease of all things?</strong>
        For a Sexual Nine whose self-perception is already structurally
        subordinate to her perception of others, one reading suggests itself:
        an illness that affects bodily perception itself – numbness rather than
        pain, a fading of sensation – fits someone who is already accustomed to
        overhearing her own signals. This reading is a plausible interpretation,
        not a documented historical causal link, and will be developed further
        in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A framing without determinism:</strong>
        This does not mean the sexual Nine's pattern inevitably leads to nerve
        disease – <strong>anyone can get any illness, regardless of subtype.</strong>
        What Drews' case can show is a pattern that keeps showing up in practice
        around calmly carrying on despite physical warning signs – one of many
        possible explanations, not a verdict. The corresponding illness picture
        is being developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Drews most likely does not know his own Enneagram pattern – there is naturally no way to know this for certain. The sexual Nine with
        Eight-wing merges almost reflexively with audience and work and, in doing
        so, easily overrides her own bodily warning signs instead of pausing in
        time. Exactly that ran his life uncorrected for decades: a full stage
        schedule with no visible breaks, until the body itself set the limit.
        Anyone who doesn't recognize their own tendency toward boundless merging
        as a pattern easily mistakes it for simple love of one's profession, even
        once the body has long been sending warning signs.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Jürgen Drews'</strong> way of handling his polyneuropathy offers
        one of the most outspoken studies of the sexual Nine with an Eight-wing:
        no glossed-over illness narrative, but a blunt carrying on – the same
        wife, the same audience, the same genre, now just with numbness in the
        nerves instead of full strength, stated openly rather than kept quiet.
        The sloth stays on its branch, even once the branch itself stops being
        felt – and says so out loud.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-juergen-drews", label:"Portrait: Jürgen Drews (SX9w8) – life's work"},
        {route:"krankheitsportraets-diego-velazquez", label:"Illness Portrait: Diego Velázquez (SX9w1) – the same boundless availability, a different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx9", label:"Subtype Profile SX9"},
      ])}
    </div>
  `);
}

export function avrilLavigneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-avril-lavigne-portrait.jpg" alt="Avril Lavigne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Avril Lavigne</p>
        <p class="krim-portrait-typ">SX6w7 · Sexual Type 6 with Seven-Wing · born 1984</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Avril Lavigne</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-avril-lavigne">Famous
        Personalities portrait</a> – that page covers her music career and her confrontational
        relationship with the pop-star image of her era. This page focuses on a different
        chapter: a months-long, life-threatening Lyme disease that began in 2014.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Lavigne</strong> is assigned to the <strong>sexual Type 6 with Seven-Wing</strong>.
        As the counter-type of the Six, the SX6 meets its own fear not with withdrawal but with
        direct confrontation; the Seven-Wing gives it the ability to process even the most
        severe experiences with a certain self-irony and future orientation, rather than
        getting lost in the heaviness. Exactly this combination – naming the illness directly
        instead of hiding it, then turning it into a forward-looking project – shaped how she
        dealt with her own Lyme disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Mysterious, worsening exhaustion:</strong>
        In 2014, Lavigne developed increasing, initially unexplained exhaustion that led to
        complete bed rest within a few weeks.</p>
        <p class="vb-intro"><strong>b) Months of diagnostic uncertainty:</strong>
        Several doctors were initially unable to determine the cause, adding further strain
        to the situation for Lavigne and those around her.</p>
        <p class="vb-intro"><strong>c) A Lyme disease diagnosis in October 2014:</strong>
        Only in October 2014 was she diagnosed with Lyme disease, transmitted by a tick bite –
        an explanation that finally brought clarity after months of uncertainty.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Five months of complete bed rest:</strong>
        Lavigne was bedridden for about five months, at times unable to speak, move, or shower
        on her own.</p>
        <p class="vb-intro"><strong>b) The conviction that she was going to die:</strong>
        In a later interview on "Good Morning America" (2015), she described being convinced
        during this time that she was going to die – an existential threat she initially
        processed largely in private.</p>
        <p class="vb-intro"><strong>c) No public disclosure at first:</strong>
        For about a year, Lavigne kept the illness largely out of the public eye before
        deciding to speak openly about it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) An open interview instead of continued concealment:</strong>
        In 2015, Lavigne decided to make the illness public and described in detail and
        bluntly how close she had come to death.</p>
        <p class="vb-intro"><strong>b) Founding the Avril Lavigne Foundation:</strong>
        Out of her own experience, she founded a foundation supporting young people with
        chronic illnesses and disabilities – a direct translation of her own suffering into
        concrete action for others.</p>
        <p class="vb-intro"><strong>c) Music as processing instead of denial:</strong>
        Her 2019 album "Head Above Water," especially the title track, processes the illness
        directly and explicitly – lines about struggling against drowning were understood as
        an immediate response to her near-death experience.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Wide media attention for an often-overlooked illness:</strong>
        Lavigne's public openness helped bring Lyme disease and the often lengthy,
        hard-to-diagnose experience of those affected to a wide audience.</p>
        <p class="vb-intro"><strong>b) Commercial and critical success of "Head Above Water":</strong>
        The album, which grew directly out of her illness experience, became one of her most
        successful works in years.</p>
        <p class="vb-intro"><strong>c) Continued public engagement:</strong>
        Even years after the acute illness, Lavigne remained publicly connected to the topic
        of chronic illness through her foundation, rather than closing the chapter once
        recovered.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The wolf that eventually names the threat directly:</strong>
        The SX6's characteristic strategy of meeting threat not through withdrawal but through
        direct confrontation showed here too – only delayed in time: after the initial,
        existentially induced shock, Lavigne actively turned to face the illness instead of
        continuing to conceal it.</p>
        <p class="vb-intro"><strong>b) The Seven-Wing and turning suffering into a future project:</strong>
        Rather than dwelling in the illness narrative, Lavigne translated the experience into
        two forward-looking projects – a new album and her own foundation. This fits the
        Seven-Wing's ability to develop new, positive possibilities even out of an existential
        crisis, rather than remaining in heaviness.</p>
        <p class="vb-intro"><strong>c) No half-measures of openness:</strong>
        As in her public disputes with critics, her handling of her own illness knew no
        half-measures either: no discreet hinting, but a complete, blunt interview about the
        near-death experience – the SX6w7 at its most direct.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A voice that suddenly fell silent:</strong>
        Lavigne's entire career rested on her voice and physical stage presence. Of all
        things, it was exactly these abilities – speaking, moving – that the illness
        temporarily took from her completely.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows in
        <a href="javascript:void(0)" data-route="krankheitsportraets-michael-schumacher">Michael
        Schumacher (SX6w7)</a>: in his case too, a sudden, existential crisis struck someone
        whose entire professional life rested on physical control. The decisive difference
        lies in how each handled it afterward: where Schumacher's circle controlled the threat
        through complete concealment, Lavigne chose the opposite path within the same SX6w7
        logic – control through complete disclosure instead of silence.</p>
        <p class="vb-intro"><strong>c) When the Six under chronic stress moves toward the Three:</strong>
        In the months immediately following her recovery, an unusual shift stands out for the
        otherwise direct, confrontational SX6: an intensified focus on visible professional
        success – a new album, a publicity-generating foundation launch – almost as if the
        vulnerability she had survived needed to be offset by quickly visible achievement.
        Someone living through months of existential crisis increasingly moves along their
        stress line toward their stress point – for the Six, that is the Three. This
        intensified focus on image and success right after recovery recalls the achievement
        logic of the stress point, not the pure joy of confrontation of the core type – with
        the core type unchanged at SX6w7.</p>
        <p class="vb-intro"><strong>d) Why a tick bite, of all things – invisible and insidious?</strong>
        For a sexual Six whose entire strategy rests on directly recognizing and confronting
        visible threats, one interpretation suggests itself: the illness that struck her was
        the exact opposite of a visible, confrontable danger – an invisible pathogen,
        undiagnosable for months, that could not be directly faced down. This interpretation
        is a plausible reading, not a documented medical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the sexual Six's pattern inevitably leads to Lyme disease or
        comparable illnesses – <strong>any person can develop any illness, regardless of
        subtype.</strong> What Lavigne's case shows is a pattern in how an existential,
        initially invisible threat is handled, one that recurs again and again in a
        pronounced sexual Six with a Seven-Wing – one of many possible readings, not a
        verdict. The corresponding illness will be developed further, over time, in this
        Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        Lavigne likely does not know her own pattern as an Enneagram structure – the sexual
        Six with a Seven-Wing reflexively holds onto direct confrontation and turning
        suffering into visible achievement, rather than allowing herself to simply recover
        without immediately having to make something of it. Anyone who does not recognize
        their own tendency to immediately translate even existential crises into new projects
        risks denying themselves the time needed for pure recovery without any goal
        attached.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Six with Seven-Wing explains much about how <strong>Avril Lavigne</strong>
        handled her own Lyme disease: a woman who could not at first directly grasp an
        invisible, existential threat turned it, once it became nameable, into open
        confrontation and then into a forward-looking body of work. The wolf that no longer
        had to flee the threat once it could finally see it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-avril-lavigne", label:"Portrait: Avril Lavigne (SX6w7) – life's work"},
        {route:"krankheitsportraets-michael-schumacher", label:"Illness Portrait: Michael Schumacher (SX6w7) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function steveJobsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-steve-jobs-portrait.jpg" alt="Steve Jobs" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Steve Jobs</p>
        <p class="krim-portrait-typ">SO1w2 · Social Type 1 with a Two-Wing · 1955–2011</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Goose</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Animal correspondence: Goose" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Steve Jobs</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-steve-jobs">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work at Apple, NeXT, and Pixar. This
        page focuses on a chapter only touched on there: the 2003 diagnosis of a rare,
        fundamentally treatable neuroendocrine tumor of the pancreas – and the nine months
        during which Jobs delayed the recommended surgery in favor of his own alternative
        approaches, before the cancer spread to his liver in 2009 and eventually led to his
        death in 2011.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Jobs</strong> is assigned to the <strong>social one with a two-wing</strong>.
        Naranjo described the social one as the subtype that directs its perfectionism not
        primarily inward, but at systems and the larger picture of how things should be.
        Exactly this conviction – that there is a right way and a wrong way – applied for
        Jobs even to his own illness: he initially refused the medically recommended surgery
        in favor of a strict, self-assembled regimen of vegan diet, acupuncture, herbal
        remedies, and spiritual practices.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) An incidental finding during a routine scan:</strong>
        In October 2003, a CT scan of his kidneys incidentally revealed a tumor on his
        pancreas – a neuroendocrine tumor, a rare and, compared to the far more aggressive
        pancreatic adenocarcinoma, considerably more treatable form of cancer.</p>
        <p class="vb-intro"><strong>b) The medical recommendation: immediate surgery:</strong>
        Jobs' doctors advised the immediate surgical removal of the tumor – for this tumor
        type, a treatment with good chances of a cure if performed early.</p>
        <p class="vb-intro"><strong>c) The decision against it:</strong>
        Instead of agreeing to surgery, Jobs opted for nine months for his own, strictly
        followed regimen of a vegan diet, acupuncture, herbal supplements, and consultations
        with spiritual healers – a decision he made according to his own, clearly set
        principles, not out of denial or fear of confronting the issue itself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Surgery follows nine months later:</strong>
        Only in July 2004, after imaging showed the tumor had grown, did Jobs agree to a
        Whipple procedure (partial removal of the pancreas, duodenum, and gallbladder).</p>
        <p class="vb-intro"><strong>b) A return to the Apple routine despite the diagnosis:</strong>
        Just weeks after the surgery, Jobs returned to his leadership role at Apple and drove
        the development of the iPhone and iPad with the same uncompromising quality standards
        as before.</p>
        <p class="vb-intro"><strong>c) A liver transplant in 2009:</strong>
        When the cancer spread to his liver, Jobs underwent a liver transplant in Memphis,
        Tennessee, in April 2009 – an operation he initially communicated publicly only
        vaguely as a "hormonal imbalance," before the actual cause became known.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Ordering his own health by his own standards:</strong>
        Jobs treated the decision about his cancer treatment not as a medical question to
        delegate to specialists, but as one he wanted to control himself according to
        self-set principles – the same stance with which he determined every last detail of
        every Apple product himself.</p>
        <p class="vb-intro"><strong>b) Public communication only in controlled doses:</strong>
        For years, Jobs released only minimal, carefully worded information about his health
        – for instance during a 2008 Apple event, when he appeared visibly emaciated while
        the company publicly attributed it to a "common cold."</p>
        <p class="vb-intro"><strong>c) Working to the limit of his physical capacity:</strong>
        Even after the liver transplant and several health-related leaves of absence (2009,
        2011), Jobs remained substantively involved in product decisions until shortly before
        his death, before resigning as CEO in August 2011.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A later, self-acknowledged regret:</strong>
        Jobs himself later called the nine months of delayed surgery a mistake in
        conversations with his biographer Walter Isaacson – a rare admission from a man who
        otherwise seldom questioned his own decisions in public.</p>
        <p class="vb-intro"><strong>b) Eight years between diagnosis and death:</strong>
        From the initial diagnosis in 2003 to his death on October 5, 2011, at age 56, eight
        years passed during which Jobs, alongside his progressing illness, brought some of the
        most influential products of recent technology history to market.</p>
        <p class="vb-intro"><strong>c) A resignation only once control could no longer be maintained:</strong>
        Only once his physical condition made active leadership definitively impossible did
        Jobs hand the CEO position to Tim Cook – until then he held on to his own control over
        the company for as long as it was possible at all.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) His own standard as a compass, even in crisis:</strong>
        The nine months of alternative treatment were not a refusal born of fear, but an
        expression of the same conviction with which Jobs also led Apple: that there is a
        right way, one he must find and take responsibility for himself rather than simply
        adopting someone else's.</p>
        <p class="vb-intro"><strong>b) The two-wing as concern for control over his own image:</strong>
        The measured, restrained public communication about his illness shows the two-wing:
        it was not concealment out of shame, but the deliberate steering of what image of
        himself and of Apple would emerge publicly.</p>
        <p class="vb-intro"><strong>c) Work as a continuation of his own principle to the end:</strong>
        That Jobs remained involved in central product decisions even after the transplant and
        several leaves of absence shows the same social one who did not subordinate his
        standard for quality and control to his own illness, but upheld it to the physical
        limit.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Throughline</h3>
        <p class="vb-intro"><strong>a) The same perfectionist standard, applied to his own health:</strong>
        Where Jobs tolerated no compromise on quality at Apple, he applied the same principle
        to his cancer treatment – what mattered to him was not the fastest or safest path, but
        the path he himself had recognized as the right one.</p>
        <p class="vb-intro"><strong>b) A striking parallel: David Bowie, also SO1w2</strong> –
        his <a href="javascript:void(0)" data-route="krankheitsportraets-david-bowie">illness portrait in this compass</a>
        shows the same underlying trait: rather than leaving his own cancer diagnosis to an
        outside authority or to the public to interpret, Bowie turned it into his own
        deliberately composed final album, "Blackstar" – for both SO1w2 men, their own
        mortality became a process they shaped themselves rather than simply endured.</p>
        <p class="vb-intro"><strong>c) Why a delayed treatment specifically?</strong>
        For a social one with a two-wing, whose self-understanding depends on recognizing and
        walking the right path himself, the nine-month delay can be read as an intensification
        of his own life pattern: even his own diagnosis was initially treated like another
        problem for which he had to find his own, better solution, rather than adopting the
        standard medical recommendation unquestioned. This interpretation is developed further
        in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A framing without determinism:</strong>
        This does not mean that the pattern of the social one with a two-wing inevitably leads
        to delayed treatment decisions – <strong>anyone can get any illness, regardless of
        subtype.</strong> Neuroendocrine pancreatic tumors occur independent of personality
        structure, and Jobs' own later recognition that the delay was a mistake shows that he
        himself saw this connection. What his case shows is a pattern in how a pronounced
        social one with a two-wing tends to handle their own diagnosis – one of many possible
        interpretations, not a verdict. The corresponding illness pattern is being developed
        gradually in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Like most people, Jobs did not consciously know his own Enneagram pattern. Without
        that knowledge, he lived out his conviction that he had to recognize and determine the
        right path himself unchecked, even applying it to his own cancer diagnosis, instead of
        following medical advice and pulling the emergency brake in time – a trait that drove
        him to extraordinary professional achievements, but may have cost him valuable time
        with his own health. Someone who recognizes their own pattern can consciously
        counteract it; someone who does not know it repeats it until the body sets the limit
        the person did not set themselves.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social one with a two-wing confirms itself once more in <strong>Steve Jobs</strong>
        through the consistency with which he shaped his own cancer treatment according to his
        own principles rather than medical advice. The goose that never yielded on its
        convictions defended, even in the face of its own mortality, its claim to determine
        the right path itself – until an illness came along where that very claim cost it nine
        decisive months.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-steve-jobs", label:"Portrait: Steve Jobs (SO1w2) – life's work"},
        {route:"krankheitsportraets-david-bowie", label:"Illness Portrait: David Bowie (SO1w2)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so1", label:"Subtype Profile SO1"},
      ])}
    </div>
  `);
}

export function davidHockneyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-hockney-portrait.jpg" alt="David Hockney" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Hockney</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Social Type 5 with Four-wing &middot; 1937–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Hockney</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-david-hockney">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work and general type structure. This
        portrait focuses on a chapter barely mentioned there: a progressive hearing loss since
        the 1970s and a 2012 stroke, which he first noticed because he could no longer finish
        his sentences.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hockney</strong> is assigned to the <strong>social Type 5 with Four-wing</strong>.
        The SO5 seeks security through knowledge and an independent understanding of the world
        that it makes available to the community. The Four-wing adds a melancholic,
        individualistic note – the need to bring one's own perception into an unmistakable,
        personal form. This same relationship between perception and expression also shapes
        Hockney's handling of his hearing loss and the stroke.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First signs</h3>
        <p class="vb-intro"><strong>a) A gradual loss since the 1970s:</strong>
        Hockney's hearing deteriorated gradually over decades, without a single dramatic event
        – a loss that crept in rather than struck.</p>
        <p class="vb-intro"><strong>b) Hearing aids as a later, visible sign:</strong>
        Only much later did Hockney turn to hearing aids – an outwardly visible admission of a
        limitation he had long dealt with mostly on his own.</p>
        <p class="vb-intro"><strong>c) A sudden second event in 2012:</strong>
        Decades after the first signs of hearing loss, a stroke was added in 2012 – noticed
        first not through a physical symptom, but through the fact that he could no longer
        finish sentences he had started.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General characteristics</h3>
        <p class="vb-intro"><strong>a) Two different senses, two different timeframes:</strong>
        The hearing loss unfolded over decades, while the stroke struck abruptly – two entirely
        different patterns of physical limitation within the same life.</p>
        <p class="vb-intro"><strong>b) Speech affected, not the hand:</strong>
        Unlike some other stroke cases, Hockney's ability to draw and paint apparently remained
        intact – what was affected was verbal expression, not visual expression.</p>
        <p class="vb-intro"><strong>c) Recovery rather than lasting paralysis:</strong>
        Hockney recovered from the stroke well enough to continue his artistic work – unlike
        Leonardo da Vinci, whose stroke left a lasting paralysis of his right hand.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential features</h3>
        <p class="vb-intro"><strong>a) Sight remains, hearing recedes:</strong>
        For an artist whose entire life's work was devoted to the question of how people
        actually see, it was precisely the visual sense that stayed intact while the auditory
        sense withdrew – a shift that likely deepened rather than disrupted his already strongly
        visual, inward-facing focus.</p>
        <p class="vb-intro"><strong>b) A new medium shortly before and after the crisis:</strong>
        Hockney began working with the iPad as an art medium at age 72, shortly before the
        stroke, and continued this work afterward without interruption – a continuation of his
        own visual language across the health crisis, rather than a break.</p>
        <p class="vb-intro"><strong>c) No public drama around his own limitation:</strong>
        Neither the hearing loss nor the stroke became a central public theme of Hockney's work
        – he kept working without putting his own medical history in the foreground.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall effect</h3>
        <p class="vb-intro"><strong>a) A long working life into old age:</strong>
        Hockney remained artistically active into his eighties, with exhibitions and new works
        that reached far beyond the point of his health limitations.</p>
        <p class="vb-intro"><strong>b) Death in 2026 at age 88:</strong>
        Hockney died in 2026 at the age of 88 "peacefully at home," according to his publicist.
        No official, specific cause of death was confirmed.</p>
        <p class="vb-intro"><strong>c) Speculation without a confirmed basis:</strong>
        Media reports speculated about a possible connection to long-term tobacco use, his age,
        or previous health problems – all of this remained unconfirmed speculation, not an
        officially established cause of death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic effect</h3>
        <p class="vb-intro"><strong>a) Retreat into the visual rather than the social:</strong>
        Progressive hearing loss typically makes casual, social conversation particularly
        difficult – for a social Five, who already seeks security through observation and
        knowledge, this can deepen the focus on visual, inner experience rather than interrupt
        it.</p>
        <p class="vb-intro"><strong>b) The stroke hits speech, not the image:</strong>
        That it was specifically verbal expression that was affected, while visual expression
        remained intact, fits a personality whose true, unmistakable language was never
        primarily the spoken word, but the image.</p>
        <p class="vb-intro"><strong>c) Returning to work as self-reassurance:</strong>
        The swift return to artistic work after the stroke can be read as a typical Five
        response: security not through emotionally processing the shock, but through returning
        to the familiar, competent activity.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The illness as a common thread</h3>
        <p class="vb-intro"><strong>a) An artist of seeing loses his hearing:</strong>
        For decades, Hockney's entire body of work was devoted to the question of how people
        actually see. That it was a different sense – hearing – that faded, while seeing
        remained his central tool to the end, is a striking, if not causally provable,
        coincidence.</p>
        <p class="vb-intro"><strong>b) Two limitations, one consistent response:</strong>
        Hockney responded to both the gradual hearing loss and the sudden stroke in the same
        recognizable way: a return to work, no public drama, no visible break in the body of
        work.</p>
        <p class="vb-intro"><strong>c) A new medium as continuation, not rupture:</strong>
        That the iPad drawings emerged right around the time of the stroke reads less as a
        reaction to the illness than as its consistent continuation – the same curiosity about
        new tools of seeing that had defined his entire life.</p>
        <p class="vb-intro"><strong>d) Why hearing and speech specifically?</strong>
        For a social Five with a four wing, whose security arises from an independent,
        unmistakable perception and whose expression runs through the image rather than the
        spoken word, one interpretation suggests itself: precisely the channels that carry
        immediate, social exchange – hearing and speaking – weakened, while the actual,
        introverted-visual access to the world remained intact and even found new forms of
        expression into old age. This interpretation is a plausible reading, not a proven
        historical causal link, and will be developed further in this compass's psychosomatics
        register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the social Five's pattern inevitably leads to hearing loss or
        stroke – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Hockney's case shows is a pattern that repeatedly stands out in practice around the need
        to gain security through one's own visual perception rather than through social
        exchange – one of many possible explanations, not a judgment. The corresponding illness
        pattern is gradually being developed in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Hockney did not know his own Enneagram pattern – the social Five with a four wing
        prefers to find security through its own, unmistakable perception rather than through
        direct social exchange, and that is exactly where his life shifted on its own as his
        hearing loss progressed, without him steering against it. Anyone who does not recognize
        their own withdrawal tendency as a pattern easily mistakes it for simply growing older,
        even though their own fixation plays a role too.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Hockney's final decades once again clearly show the social Five with a four wing: a
        gradual loss of hearing that deepened rather than disrupted his already strong visual
        focus, a stroke that struck speech specifically and spared his visual language, and
        unabated work continuing into his ninth decade of life. The octopus that lost one arm
        and simply kept drawing with the rest.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-david-hockney", label:"Portrait: David Hockney (SO5w4) – life's work"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Illness Portrait: Leonardo da Vinci (SO5w4) – stroke, kept working"},
        {route:"krankheitsportraets-albert-einstein", label:"Illness Portrait: Dr. Albert Einstein (SO5w4) – same pattern of unabated work"},
        {route:"krankheitsportraets-hannah-arendt", label:"Illness Portrait: Hannah Arendt (SO5w4) – warning noted, not heeded"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype profile SO5"},
      ])}
    </div>
  `);
}

export function guntherVonHagensKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-gunther-von-hagens-portrait.jpg" alt="Gunther von Hagens" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Gunther von Hagens</p>
        <p class="krim-portrait-typ">SX1w9 · Sexual Type 1 with Nine-wing · 1945–2026</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Black Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Animal correspondence: Black Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Gunther von Hagens</strong> is already featured as a
        <a href="javascript:void(0)" data-route="beruehmte-gunther-von-hagens">portrait under Famous Personalities</a>
        in this compass — that page covers his invention of plastination and his life's work,
        "Body Worlds." The focus here is on what that page has little room for: his nearly
        two-decade life with Parkinson's disease, which ended with his death from a cerebral
        hemorrhage on July 24, 2026.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type Assignment:</strong>
        <strong>Von Hagens</strong> is assigned to the <strong>sexual Type 1 with Nine-wing</strong>.
        The SX1 meets existential threat not with withdrawal, but with the same uncompromising
        zeal it pursues its life's work with — in von Hagens this showed in that he only made
        his diagnosis public once he himself had decided how he wanted to handle it. The
        Nine-wing sustained the same decades-long persistence that had already characterized his
        institution-building, even in the face of an incurable, progressive disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosed in 2008, kept private for two years:</strong>
        Von Hagens received his Parkinson's diagnosis as early as 2008, but initially shared it
        only with his family and closest circle. Not until 2010, in a lengthy address to his
        employees at the Plastinarium in Guben, did he make the disease public — two years in
        which he apparently first had to find his own way of handling the diagnosis before
        disclosing it.</p>
        <p class="vb-intro"><strong>b) A tremor that threatened precision itself:</strong>
        The first visible symptoms were a tremor in his left hand — a particularly bitter irony
        for a man whose entire life's work rested on extreme manual precision in handling human
        tissue.</p>
        <p class="vb-intro"><strong>c) The voice as bargaining chip between movement and speech:</strong>
        A deep brain stimulation implant could suppress the tremor when its current was turned
        up — but his speech would then deteriorate into a barely intelligible murmur. At a lower
        setting he spoke almost normally, but had to accept tremors in his left hand: a
        technically forced trade-off between two faculties equally indispensable to his public
        role as teacher and speaker.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) "Seven active working years" as a self-imposed deadline:</strong>
        At his 2010 public announcement, von Hagens said the diagnosis had thrown him into an
        "existential bewilderment," and that he could realistically expect seven active working
        years before becoming totally incapacitated — a sober, almost clinical self-assessment
        of his own mortality.</p>
        <p class="vb-intro"><strong>b) A pre-emptive retreat from operational leadership:</strong>
        Anticipating the progressive deterioration typical of Parkinson's, he announced he would
        scale down operations in Guben step by step, rather than clinging to control until he
        became incapable of acting — a deliberate, planned handover instead of a forced
        collapse.</p>
        <p class="vb-intro"><strong>c) The family takes over while he is still alive:</strong>
        His wife Angelina Whalley continued to head the Heidelberg Institute for Plastination and
        curate the exhibitions, and his son Rurik von Hagens became CEO of von Hagens
        Plastination — a succession he, by his own account, passed on to his son with pride, not
        reluctantly.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) Working for as long as physically possible:</strong>
        Instead of withdrawing after the diagnosis, von Hagens remained active as the public face
        of his life's work for as long as he possibly could — the same uncompromising stance he
        had once directed against regulatory authorities and churches now turned against his own
        physical decline.</p>
        <p class="vb-intro"><strong>b) No concealment, but no self-staging as victim either:</strong>
        Von Hagens spoke openly about his illness without making it the central theme of his
        public appearances — an openness that informed more than it solicited sympathy.</p>
        <p class="vb-intro"><strong>c) His own mortality becomes the final exhibit:</strong>
        Already at age 65, he told a German newspaper that his plastinated body should one day
        "stand in a welcoming pose at the entrance of my exhibition," so that he could "welcome
        my guests even after I am dead" — an intention he maintained to the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impression</h3>
        <p class="vb-intro"><strong>a) From provocateur to publicly dying teacher:</strong>
        A man who had spent decades drawing attention through spectacular, often scandal-prone
        appearances spent his final decade and a half in a much quieter but equally public role:
        someone who treated his own progressive illness with the same transparency he had
        previously applied to the anatomical bodies in his exhibitions.</p>
        <p class="vb-intro"><strong>b) Death by cerebral hemorrhage as an abrupt ending:</strong>
        After nearly two decades with Parkinson's, von Hagens ultimately did not die from the
        course of Parkinson's itself, but from a cerebral hemorrhage — a sudden end after a long,
        foreseeable process of decline that came close to his own 2010 prognosis, yet unfolded
        differently than he had imagined for himself.</p>
        <p class="vb-intro"><strong>c) The last wish as an open question:</strong>
        His family has confirmed they will honor his wish for his own plastination; since fully
        plastinating a human body takes months to years, it remains open when — and in what
        form — this final, radically consistent wish will become publicly visible.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The Nine-wing as decades of endurance rather than a single gesture:</strong>
        Where a purer sexual One might have turned the diagnosis into the occasion for a single,
        dramatic public act, von Hagens spread his handling of the illness across nearly two
        decades — the same Nine-wing breadth that had already shaped his institution-building.</p>
        <p class="vb-intro"><strong>b) The black mamba that doesn't retreat into hiding:</strong>
        Even as the illness progressed, von Hagens remained present at the core of his public
        role, rather than withdrawing entirely from public life as many in his situation do.</p>
        <p class="vb-intro"><strong>c) Control over the narrative of his own illness:</strong>
        Von Hagens himself determined when, how, and to what extent his illness was discussed —
        the same SX1 zeal for defending his own truth turned here toward controlling the
        narrative of his own physical decline.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Nearly two decades between diagnosis and death:</strong>
        Eighteen years passed between the 2008 diagnosis and his death in 2026, during which the
        illness gradually expanded — from a tremor in the left hand through increasing speech
        and movement limitations to the step-by-step handover of operational leadership to his
        wife and son.</p>
        <p class="vb-intro"><strong>b) His own exhibition as the last remaining outlet for expression:</strong>
        As in his healthy decades, his own exhibition — his own body as teaching tool — remained
        von Hagens' central means of expression even in decline; his plan for self-plastination
        is the final, most radical evidence of this.</p>
        <p class="vb-intro"><strong>c) Why an attack on precisely movement and speech?</strong>
        For a sexual One whose entire public identity rested on manual precision in the
        preparation room and rhetorical persuasiveness before audiences, Parkinson's — a disease
        that attacks precisely these two faculties — can be read as an especially existential
        threat: the two tools with which von Hagens had carried his zeal outward throughout his
        life were exactly what increasingly slipped away from him at the end. This reading is
        developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) A Reading, Not a Determinism:</strong>
        This does not mean the pattern of the sexual One with Nine-wing inevitably leads to
        Parkinson's — <strong>anyone can develop any illness, regardless of subtype.</strong>
        Von Hagens' illness is closely tied to a neurodegenerative process that occurs medically
        independent of personality patterns, not one that can be explained purely
        psychosomatically. What his case can show is a pattern in how such a diagnosis is
        handled that recurs among pronounced sexual Ones with a Nine-wing — one of many possible
        readings, not a verdict. The corresponding illness profile is gradually being developed
        in this compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as Its Own Factor:</strong>
        Like most people of his time, von Hagens did not consciously know his own Enneagram
        pattern. Without this knowledge, he also had no access to a conscious distinction between
        his lifelong zeal and the inner compulsion not to surrender control over his own
        narrative even in the face of an incurable diagnosis — he processed his fate the only way
        he knew: through continued work and public self-determination, rather than allowing
        himself an early, unplanned, private relationship with his own mortality. Those who
        recognize their own pattern can consciously counteract it; those who don't remain as
        subject to their pattern as von Hagens was into his final years.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual One with Nine-wing closes into a single, straight arc in
        <strong>Gunther von Hagens</strong>: throughout his life he made the dead body publicly visible — and
        decided to treat his own the same way one day, rather than processing his own mortality
        privately and out of sight. The black mamba, which allowed no distance from its own
        life's work even in its own decline, instead fusing both into a single, consistent whole
        until the very end.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-gunther-von-hagens", label:"Portrait: Gunther von Hagens (SX1w9) – life's work"},
        {route:"krankheitsportraets-johann-sebastian-bach", label:"Illness Portrait: Johann Sebastian Bach (SX1w9) – same subtype, the same persistence despite an attack on his core faculty"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx1", label:"Subtype profile SX1"},
      ])}
    </div>
  `);
}
