import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function anthonyHopkinsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-anthony-hopkins-portrait.jpg" alt="Anthony Hopkins" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Anthony Hopkins</p>
        <p class="krim-portrait-typ">SP1w9 &middot; Self-Preservation Type 1 with Nine-wing &middot; b. 1937</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Anthony Hopkins</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-anthony-hopkins">Famous
        Personality Portrait</a> in this Compass. This page explores a chapter only
        touched on there: a severe alcohol addiction that brought Hopkins to a turning
        point in 1975 – he has, by his own account, lived continuously sober ever since.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hopkins</strong> is assigned to the <strong>Self-Preservation Type 1
        with Nine-wing</strong>. The SP1 seeks safety through control and discipline; the
        Nine-wing adds equanimity and the ability to patiently hold to once-adopted
        principles without much fuss. This exact combination – quiet, unshakable
        discipline – determined how Hopkins handled his own addiction over decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Years of alcohol use in the 1960s and 1970s:</strong>
        Hopkins later described alcohol as an increasingly dominant element of his life
        and his early acting career over the years.</p>
        <p class="vb-intro"><strong>b) A self-described low point:</strong>
        By his own account, the condition reached a point in 1975 that he recalls as a
        decisive turning point that moved him toward abstinence.</p>
        <p class="vb-intro"><strong>c) A decision for complete abstinence:</strong>
        Hopkins made the decision to give up alcohol entirely – not a gradual reduction,
        but a clear break.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Over 50 years of continuous sobriety:</strong>
        By his own account, Hopkins has remained continuously sober since 1975 – a period
        now spanning five decades.</p>
        <p class="vb-intro"><strong>b) Repeated public mention of his own story:</strong>
        Over the decades, Hopkins repeatedly spoke openly in interviews about his earlier
        addiction and his own abstinence.</p>
        <p class="vb-intro"><strong>c) Unbroken, even growing artistic output:</strong>
        The most internationally significant roles of his career emerged after 1975 – his
        abstinence coincided in time with his rise to world fame.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) No dramatized confession, but a matter-of-fact statement:</strong>
        Hopkins generally spoke about his addiction history matter-of-factly, without
        making his own story the central element of his public persona.</p>
        <p class="vb-intro"><strong>b) Disciplined daily routines:</strong>
        By several accounts, Hopkins maintains fixed, disciplined daily routines to this
        day – a pattern consistent with his long-term abstinence.</p>
        <p class="vb-intro"><strong>c) Still active at an advanced age:</strong>
        Even past age 85, Hopkins remained active as an actor, without a visible reduction
        in his own work discipline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A role model for long-term sobriety:</strong>
        Hopkins's over fifty years of sobriety are regularly highlighted in media
        coverage as an extraordinarily long, stable recovery journey.</p>
        <p class="vb-intro"><strong>b) No discernible break in his artistic work:</strong>
        Unlike some other addiction histories, Hopkins's filmography shows no break, but
        a continuous rise after the 1975 turning point.</p>
        <p class="vb-intro"><strong>c) Public encouragement of others affected:</strong>
        Hopkins's open but unexcited way of talking about his history has repeatedly been
        cited as an encouraging example for other people with addiction issues.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Control as a response to his own addiction:</strong>
        The same SP1 conviction that safety arises through discipline determined
        Hopkins's response to his own addiction – a clear, controlled break rather than a
        gradual, uncertain process.</p>
        <p class="vb-intro"><strong>b) The Nine-wing and patient, unexcited persistence:</strong>
        The Nine-wing's equanimity showed in Hopkins maintaining his abstinence over
        decades without public drama – quiet persistence rather than dramatic relapses
        and comebacks.</p>
        <p class="vb-intro"><strong>c) Principled commitment that admits no exceptions:</strong>
        The One's typical commitment to principle explains why Hopkins has apparently
        made no relapses public since his one decisive resolution.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) Control that became a lifelong principle:</strong>
        Hopkins's entire later life and work are marked by a discipline that shows the
        same consistency as his once-made resolution to abstain – control over his own
        body became the foundation of his entire subsequent career.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer</a> (also SE1w9) responded to the severe 1917 car accident and the later
        Nazi persecution with the same quiet, unshakable discipline, without ever making
        his own vulnerability a public topic; Hopkins responded to his own addiction with
        a structurally related stance – a once-made resolution, held consistently and
        without public fuss. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Illness Portrait of Konrad Adenauer</a>.</p>
        <p class="vb-intro"><strong>c) Placing it without determinism:</strong>
        This does not mean that the Self-Preservation One's pattern inevitably leads to
        addiction – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Hopkins's case illustrates is a pattern in how a pronounced Self-Preservation
        One with a Nine-wing tends to handle an overcome addiction – one of many possible
        interpretations, not a verdict. The corresponding illness picture is gradually
        being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Hopkins does not know his own pattern as an Enneagram structure – the
        Self-Preservation One with a Nine-wing reflexively holds to once-adopted
        principles instead of ever questioning them, and has lived out exactly this
        pattern unchanged for five decades. Someone who does not recognize their own
        tendency toward unconditional commitment to principle as a pattern nonetheless
        often benefits from it, when the principle points in the right direction.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation One with a Nine-wing explains much about how <strong>Anthony
        Hopkins</strong> handles his own addiction: a man whose safety rests on discipline
        turned a single turning point into five decades of unbroken consistency – the
        eagle that once set a course and has not deviated from it since.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-anthony-hopkins", label:"Portrait: Anthony Hopkins (SP1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Illness Portrait: Konrad Adenauer (SP1w9) – the same quiet commitment to principle"},
        {route:"beruehmte-heinz-ruehmann", label:"Portrait: Heinz Rühmann (SP1w9) – also an actor, the same quiet discipline"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SP1"},
      ])}
    </div>
  `);
}

export function byronKatieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-byron-katie-portrait.jpg" alt="Byron Katie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Byron Katie</p>
        <p class="krim-portrait-typ">SX6w7 &middot; Sexual Type 6 with Seven-wing &middot; b. 1942</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Byron Katie</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-byron-katie">Famous
        Personality Portrait</a> in this Compass – that portrait focuses on her method
        "The Work." This page explores a chapter only noted in passing there: decades of severe
        depression with agoraphobia in the 1960s through 1980s, out of which she
        describes a decisive turning point in her life in 1986.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Byron Katie</strong> is assigned to the <strong>Sexual Type 6 with
        Seven-wing</strong>. The SX6 seeks safety by confronting its own fear head-on
        rather than avoiding it; the Seven-wing adds a restless, appetitive search for
        the next understanding. This exact combination – not avoiding one's own fear but
        confronting it directly – determined how she eventually found her way out of her
        own, decades-long depression.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Beginning severe depression in the 1960s:</strong>
        Byron Katie describes, in her own accounts, a depression worsening over years
        that eventually led to despair and suicidal thoughts.</p>
        <p class="vb-intro"><strong>b) Growing agoraphobia:</strong>
        Alongside the depression came a pronounced fear of leaving her own home, which
        severely restricted her daily life for years.</p>
        <p class="vb-intro"><strong>c) Nearly a decade of near-continuous despair:</strong>
        By her own account, this phase extended over roughly a decade before a decisive
        turn came in 1986.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A stay at a facility for eating disorders:</strong>
        Byron Katie describes a pivotal moment in 1986 at such a facility, in which her
        inner state fundamentally changed.</p>
        <p class="vb-intro"><strong>b) A self-described "awakening":</strong>
        She describes this moment as an abrupt end to years of despair and the beginning
        of a radically changed view of her own thoughts.</p>
        <p class="vb-intro"><strong>c) Developing her own method from the experience:</strong>
        Out of this personal crisis, she developed the questioning method later spread
        worldwide as "The Work."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Extensive written processing:</strong>
        Byron Katie describes her depressive phase and the turning point in great detail
        in several of her own books – not a concealed but a central chapter of her public
        biography.</p>
        <p class="vb-intro"><strong>b) The crisis as the starting point of her later teaching:</strong>
        Unlike many other illness histories, her earlier depression is not repressed but
        told as the necessary origin of her own method.</p>
        <p class="vb-intro"><strong>c) Worldwide spread of the method born from the crisis:</strong>
        "The Work" has since been taught internationally in workshops and books – directly
        traced back to her own, overcome despair.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A crisis that became the foundation of a teaching:</strong>
        Byron Katie's own depression and its end remain to this day the central reference
        point with which she introduces and explains her method.</p>
        <p class="vb-intro"><strong>b) Wide public reach:</strong>
        Millions of people worldwide have come into contact with "The Work" through
        books, workshops, and seminars – a method that emerged directly from a personal
        psychological crisis.</p>
        <p class="vb-intro"><strong>c) No return to her earlier depressive state:</strong>
        In her own later accounts, she describes the 1986 turning point as permanent, not
        a temporary improvement.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Fear confronted head-on rather than avoided:</strong>
        The same SX6 energy that does not avoid fear but confronts it directly showed in
        Byron Katie's radical questioning of her own thoughts, rather than continuing to
        repress them.</p>
        <p class="vb-intro"><strong>b) The Seven-wing and the hunger for new understanding:</strong>
        The Seven-wing's appetitive energy showed in a new, far-reaching method emerging
        immediately from the personal crisis, rather than stopping at mere personal
        recovery.</p>
        <p class="vb-intro"><strong>c) Direct confrontation rather than gradual coping:</strong>
        The abrupt, radical turning point she describes fits the SX6-typical tendency to
        confront one's own fear not gradually, but in a single decisive moment.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A mind that finally questioned its own fear instead of believing it:</strong>
        Byron Katie's entire later teaching rests on questioning distressing thoughts – a
        method that emerged directly from how she handled her own, torturous thoughts
        during more than ten years of depression.</p>
        <p class="vb-intro"><strong>b) Placing it without determinism:</strong>
        This does not mean that the Sexual Six's pattern inevitably leads to depression
        or agoraphobia – <strong>anyone can develop any mental illness, regardless of
        subtype.</strong> What Byron Katie's case illustrates is a pattern in how a
        pronounced Sexual Six with a Seven-wing tends to handle an overcome psychological
        crisis – one of many possible interpretations, not a verdict. The corresponding
        illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) The unconscious fixation as its own factor:</strong>
        Byron Katie does not know her own pattern as an Enneagram structure – the Sexual
        Six with a Seven-wing reflexively confronts its own fear head-on rather than
        avoiding it, and exactly this pattern shapes her teaching to this day, decades
        after her own turning point. Someone who does not recognize their own tendency
        toward direct confrontation with fear as a pattern often still repeats exactly
        this mechanism when a new crisis arises.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Six with a Seven-wing explains much about the course of <strong>Byron
        Katie's</strong> own psychological crisis: a woman whose entire later teaching
        rests on the direct confrontation with distressing thoughts first found exactly
        this path in her own, decade-long despair – the wolf that does not shy away from
        the threat but turns to face it, until it reveals itself as merely a thought.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-byron-katie", label:"Portrait: Byron Katie (SX6w7)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function davidBowieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-david-bowie-portrait.jpg" alt="David Bowie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">David Bowie</p>
        <p class="krim-portrait-typ">SO1w2 · Social Type 1 with Two-wing · 1947–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Goose</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Animal correspondence: Goose" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>David Bowie</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-david-bowie">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only briefly mentioned there: for 18
        months, Bowie fought liver cancer in secret, unknown to the public and to most of his
        closest collaborators – and transformed the diagnosis into his final, deliberately
        composed work.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Bowie</strong> is classified as the <strong>Social One with Two-wing</strong>.
        Naranjo described the Social One as the subtype who directs her striving for perfection
        not primarily inward but at the collective – as a message, a corrective, a deliberately
        set example. The Two-wing adds genuine human warmth, the ability not just to fight for
        an ideal but to give other people something concrete – Bowie remained true to this
        gesture even in his own dying.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Turned outward, focused on impact:</strong>
        Bowie's gaze always concerned itself with what message he wanted to convey to the
        public – this stance did not change in the face of his own mortality.</p>
        <p class="vb-intro"><strong>b) Control over his own narrative to the end:</strong>
        Rather than making the diagnosis public or leaving it to the rumor mill, Bowie decided
        when, how, and in what artistic form the world would learn about it.</p>
        <p class="vb-intro"><strong>c) Encoded rather than direct communication:</strong>
        Unlike other Illness Portraits in this Compass, in which the subjects named their
        diagnosis directly, Bowie took the detour through art – typical of the Social One,
        whose messages to the collective rarely arrive raw, but almost always in a
        deliberately shaped form.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The diagnosis as the start of a final project:</strong>
        In 2014, Bowie was diagnosed with liver cancer. Rather than withdrawing, he began
        immediately working on one last major artistic statement.</p>
        <p class="vb-intro"><strong>b) Radical secrecy:</strong>
        Even close collaborators and musicians who sat with him in the studio knew nothing of
        the diagnosis for long stretches – an unusual but deliberate decision for a Social
        One: the private illness was not to overshadow the public message.</p>
        <p class="vb-intro"><strong>c) Two parallel final works:</strong>
        Alongside the album <em>Blackstar</em>, the musical <em>Lazarus</em> (2015) was created
        at the same time – both works unmistakably circle around death, farewell, and
        transformation, years before the public knew the reason why.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Blackstar as a deliberately set final point:</strong>
        The album was released on January 8, 2016, Bowie's 69th birthday – two days before his
        death. The timing was no accident, but a final, precise act of directing his own
        story.</p>
        <p class="vb-intro"><strong>b) Lazarus as unveiled self-interpretation:</strong>
        In the video for the single <em>Lazarus</em>, Bowie lies in a hospital bed, eyes
        bandaged, singing: "Look up here, I'm in heaven." Only after his death did the public
        realize how directly this image described his actual situation.</p>
        <p class="vb-intro"><strong>c) Producer Tony Visconti as confidant:</strong>
        Only a small, chosen circle around producer Tony Visconti knew of the diagnosis and
        helped shape the final work exactly as Bowie envisioned it – one last example of his
        lifelong ability to draw other artists into his project without ever ceding control
        himself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A work that only fully revealed itself after death:</strong>
        Only when Bowie's death became known on January 10, 2016, did the public understand
        <em>Blackstar</em> for what it actually was – a deliberately composed farewell work,
        not an ordinary album.</p>
        <p class="vb-intro"><strong>b) Critical reassessment within hours:</strong>
        Music critics who had described the album two days earlier as puzzling and dark
        reread it after the news of his death – a rare case in which the public interpretation
        of a work of art shifted completely within 48 hours.</p>
        <p class="vb-intro"><strong>c) A final message to a global audience:</strong>
        With <em>Blackstar</em>, Bowie achieved once more exactly what had defined his entire
        body of work: opening a space no one had entered before – this time, the space of a
        deliberately shaped, public death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Peak creative output despite advancing illness:</strong>
        In his final 18 months, Bowie produced two complete, complex works – a workload many
        healthy artists never reach.</p>
        <p class="vb-intro"><strong>b) Fusion of dying and artistic statement:</strong>
        For Bowie, there was no separation between his own physical decline and the content of
        his art – both became one and the same final statement.</p>
        <p class="vb-intro"><strong>c) Energy that stayed channeled to the very last moment:</strong>
        Even as his body grew increasingly weaker, his creative energy remained directed at a
        single, clearly defined goal – the finished, released work.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) 18 months in secret:</strong>
        From his diagnosis in 2014 to his death on January 10, 2016, Bowie kept his illness
        almost entirely secret – only a small circle of confidants knew.</p>
        <p class="vb-intro"><strong>b) Two days between work and death:</strong>
        <em>Blackstar</em> was released on January 8, 2016; Bowie died on January 10 – a
        margin that shows how precisely he still determined the timing of the release himself,
        while his body was already dying.</p>
        <p class="vb-intro"><strong>c) Encoding instead of announcement:</strong>
        Unlike Ronald Reagan, who addressed his diagnosis directly in a letter to the public,
        Bowie chose the opposite path: he encoded his own mortality in music, lyrics, and
        image rather than stating it directly – typical of the Social One, whose messages to
        the collective rarely arrive raw, but almost always in artfully shaped form.</p>
        <p class="vb-intro"><strong>d) Why one final transformation, of all things?</strong>
        Bowie's entire artistic life consisted of a chain of deliberate transformations – Ziggy
        Stardust, the Thin White Duke, the Berlin electronic experimentalist – each one a
        space he opened for others long before they knew they needed it. His own mortality
        became his final, most consistent transformation: he staged his own dying not as
        private decline, but as one more, final public statement, composed with the same
        precision as every role before it. For a Social One, whose passion is anger – the
        unconditional will to pass something important on to the world correctly and
        completely – it is tempting to read exactly her own death as the last, most radical
        form of this pattern: even the unavoidable was not left to chance, but shaped down to
        the final second. This reading is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Social One's pattern inevitably leads to cancer –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Bowie's case can show is a pattern that stands out again and again in practice
        wherever the need exists to shape even one's own mortality into a deliberately
        composed message for an audience – one possible explanation among many, not a verdict.
        The corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Bowie did not know his own pattern – the social One with Two-wing wants to control and shape its own impact right to the end, and that is exactly what he did, turning a fatal diagnosis into his final, flawlessly composed work rather than showing public vulnerability. Someone who does not recognize their own need for control shapes even their own death instead of simply letting it happen.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Bowie's</strong> Social One with Two-wing carried through to the very end in his
        own illness: a diagnosis he did not state directly but transformed into his final,
        artfully shaped work, and a dying he staged himself until the very last day, rather
        than leaving it to chance. The goose who called for the formation of others her whole
        life opened, with her final call, one more space no one had entered before – the space
        of a publicly shaped death.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-david-bowie", label:"Portrait: David Bowie (SO1w2) – life's work"},
        {route:"krankheitsportraets-steve-jobs", label:"Illness Portrait: Steve Jobs (SO1w2) – same pattern: control over one's own illness"},
        {route:"krankheitsportraets-ronald-reagan", label:"Illness Portrait: Ronald Reagan (SO9w8) – counter-model: direct rather than encoded disclosure"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so1", label:"Subtype Profile SO1"},
      ])}
    </div>
  `);
}

export function elvisPresleyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elvis-presley-portrait.jpg" alt="Elvis Presley" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elvis Presley</p>
        <p class="krim-portrait-typ">SX2w3 · Sexual Type 2 with Three-wing · 1935–1977</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Camel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Animal correspondence: Camel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elvis Presley</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-elvis-presley">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page brings a chapter to the foreground that page barely addresses: a decade-long
        escalating physical decline driven by drug dependency, which led to his death in 1977
        at only 42 years of age.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Elvis</strong> is classified as the <strong>Sexual Two with Three-wing</strong>.
        SX2 directs the Two's care and seductive power entirely at the one, exclusive
        connection – at the audience as a collective romantic partner, to whom full devotion
        is given. The Three-wing adds an unconditional will toward visible success, combined
        with a refusal to ever let the audience sense a fading of one's own radiance. This
        exact pattern kept Elvis on stage long after his body had begun to collapse.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The audience before his own body:</strong>
        Elvis's gaze remained fixed, to the end, on what his audience expected of him – not
        on what his body could still deliver.</p>
        <p class="vb-intro"><strong>b) Decline that became impossible to miss on stage:</strong>
        His former partner Linda Thompson later described the sight of him in the CBS special
        "Elvis in Concert" as shocking – a man barely recognizable compared to just months
        before.</p>
        <p class="vb-intro"><strong>c) Performing despite visible exhaustion:</strong>
        From the first concert night of this final tour, in Omaha in June 1977, almost no
        footage could be used – the performance was considered too weak to show.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A turning point in 1967:</strong>
        His personal physician, George Nichopoulos, known as "Dr. Nick," began treating Elvis
        for pain in 1967 – in retrospect, the beginning of a drug dependency that would
        escalate over the following decade.</p>
        <p class="vb-intro"><strong>b) Nearly 19,000 prescribed doses:</strong>
        In the last 31 months of his life, Elvis reportedly received around 19,000 doses of
        prescription medication – sedatives, amphetamines, tranquilizers, and opioids.</p>
        <p class="vb-intro"><strong>c) Acceleration after his 1973 divorce:</strong>
        After his separation from Priscilla Presley in October 1973, both his weight gain and
        his medication use intensified markedly – a turning point that several sources cite
        as an accelerator of his decline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) A severely enlarged colon:</strong>
        The autopsy found a so-called megacolon – five to six inches in diameter and eight to
        nine feet long, far beyond normal size, filled with stool that was in places months
        old.</p>
        <p class="vb-intro"><strong>b) A markedly enlarged heart:</strong>
        The autopsy also found a heart roughly twice the normal size – a finding suggestive of
        years of cardiac strain.</p>
        <p class="vb-intro"><strong>c) Four hospitalizations in five years:</strong>
        In his final five years, Elvis was hospitalized multiple times for hypertension and
        bowel complications – without this permanently changing his touring schedule.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A toxicology report with fourteen substances:</strong>
        Fourteen different drugs were found in his blood after death, with codeine levels
        roughly ten times the therapeutic range.</p>
        <p class="vb-intro"><strong>b) An official cause of death still disputed today:</strong>
        The autopsy named a cardiac arrhythmia based on hypertensive heart disease as the
        cause of death – many experts instead see the combined effect of multiple drugs as the
        central factor, a controversy that remains unresolved to this day.</p>
        <p class="vb-intro"><strong>c) A doctor who later lost his medical license:</strong>
        "Dr. Nick" was charged with overprescribing in 1980 but acquitted; in 1993 his medical
        license was ultimately revoked.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Stage presence as the last constant:</strong>
        Even as health and body were visibly collapsing, performing for an audience remained
        the one thing Elvis never gave up – the Three-wing energy of the SX2 in its most
        uncompromising form.</p>
        <p class="vb-intro"><strong>b) Medication as a means to reach the stage:</strong>
        The prescribed substances increasingly seemed to serve not recovery but sheer
        functionality for the next performance – a cycle that reinforced itself.</p>
        <p class="vb-intro"><strong>c) The camel that spent its last reserves for the audience:</strong>
        The devotion to the one great relationship – to the audience as a whole – was
        maintained to the end, even once the body had long since run out of reserves.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A decade of gradual escalation:</strong>
        From the first prescriptions in 1967 to his death in 1977, a continuous, steadily
        worsening line runs through Elvis's final decade.</p>
        <p class="vb-intro"><strong>b) Performing instead of withdrawing, to the end:</strong>
        Unlike Illness Portraits in this Compass where the subject at least temporarily
        withdrew from public life, Elvis kept touring almost without pause – behavior that
        points more toward the SX2's stress point, the Eight: defiantly continuing despite
        clear warning signs, rather than relinquishing control.</p>
        <p class="vb-intro"><strong>c) Visible decline, rarely named openly:</strong>
        His physical condition was unmistakable to those around him but was rarely addressed
        openly – a collective denial that helped the pattern continue.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the heart and the gut?</strong>
        For a Sexual Two with Three-wing, whose entire identity hinged on the one great,
        devoted connection to the audience, one reading suggests itself: the heart, the organ
        of care and devotion, and the gut, the organ that processes what is taken in from the
        outside, failed together – as though a life oriented entirely around giving to others
        eventually had nothing left of its own to process or metabolize. This reading is a
        plausible interpretation, not a documented historical causal link, and is explored in
        more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual Two's pattern inevitably leads to drug dependency or
        cardiovascular disease – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Elvis's case can show is a pattern that stands out again and
        again in practice wherever stage presence is prioritized uncompromisingly over one's
        own bodily warning signs – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Presley did not know his own pattern – the sexual Two with Three-wing lives for immediate connection with its audience, and it was exactly this drive that kept him touring while his body visibly broke down. Someone who does not recognize their own need for connection trades their own health for the next round of applause.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Elvis's</strong> Sexual Two with Three-wing found its final, most consistent
        expression in his own illness: a decade-long escalating drug dependency, a body that had to keep
        functioning on stage for an audience to the very end, and a death in 1977 whose exact
        cause is still debated today. The camel that spent its last strength on the one great
        bond it was never willing to give up.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-elvis-presley", label:"Portrait: Elvis Presley (SX2w3) – life's work"},
        {route:"krankheitsportraets-sammy-davis-jr", label:"Illness Portrait: Sammy Davis Jr. (SX2w3)"},
        {route:"krankheitsportraets-giacomo-casanova", label:"Illness Portrait: Giacomo Casanova (SX2w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx2", label:"Subtype Profile SX2"},
      ])}
    </div>
  `);
}

export function franzSchubertKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-schubert-portrait.jpg" alt="Franz Schubert – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Schubert</p>
        <p class="krim-portrait-typ">SE6w5 · Self-Preservation Type 6 with Five-wing · 1797–1828</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Rabbit</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se6.jpg" alt="Animal correspondence: Rabbit" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE6")};left:${tierAvatarLeft("SE6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Schubert</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-franz-schubert">portrait under Famous Personalities</a>
        in this Compass – that page covers his work as a composer. This page brings a chapter
        that page only skims into focus: in late summer 1822, Schubert likely
        contracted syphilis. Over the following six years, between spells of exhaustion and
        relapse, he composed some of his most significant works before dying in 1828 at only
        31 – the official cause of death at the time was typhoid fever, while medical
        historians still debate late-stage syphilis and the mercury treatment then in use as
        contributing or actual causes.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schubert</strong> is classified as the <strong>Self-Preservation Type 6 with
        Five-wing</strong>. Naranjo called the self-preservation Six <em>Warmth</em>:
        security arises not through control or rules but through genuine, close human
        belonging – a small, reliable circle that provides shelter. The Five-wing adds
        withdrawal and intellectual processing – Schubert's inner circle, the private
        Schubertiaden, became the place where fear and longing could be turned into music
        while he remained almost invisible in public.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) An infection in late summer 1822:</strong>
        Schubert likely contracted syphilis in the fall or winter of 1822; first symptoms
        appeared in December of that year – at a time when he was already working on the
        <em>Unfinished Symphony</em>.</p>
        <p class="vb-intro"><strong>b) Hospitalization in February 1823:</strong>
        Severe mood swings, headaches, and dizziness led to admission to the Vienna General
        Hospital in February 1823, where the diagnosis was made – a young composer suddenly
        confronted with a stigmatized, incurable disease.</p>
        <p class="vb-intro"><strong>c) Treatment that likely worsened his condition:</strong>
        The mercury-based therapy standard at the time is, by today's medical understanding,
        more likely to have further weakened his body than to have healed him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Six years between recovery and relapse:</strong>
        From 1823 until his death in 1828, Schubert alternated between phases of relative
        recovery and renewed flare-ups – an uncertain, never fully stable state of health
        over his final six years.</p>
        <p class="vb-intro"><strong>b) Enormous compositional productivity despite illness:</strong>
        It was precisely in these years that <em>Die schöne Müllerin</em> (1823),
        <em>Winterreise</em> (1827), and his final great piano sonatas and string quintet
        (1828) were composed – works that remain among his most significant to this day.</p>
        <p class="vb-intro"><strong>c) Retreat into his innermost circle:</strong>
        Rather than speaking publicly about his illness, Schubert increasingly withdrew into
        the sheltered setting of the Schubertiaden – private musical evenings among close
        friends, where he first presented his newest works.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Working until days before his death:</strong>
        According to his friend Josef von Spaun, Schubert was still correcting the second
        part of <em>Winterreise</em> in November 1828, shortly before his death – composing
        remained his central anchor to the very end.</p>
        <p class="vb-intro"><strong>b) A close circle as the only safety net:</strong>
        As his illness progressed, his innermost circle of friends remained nearly constant
        – not an expansion of public contact but a further deepening of an already existing,
        trusted circle.</p>
        <p class="vb-intro"><strong>c) Musical rather than public processing:</strong>
        Where others might have addressed their illness publicly, Schubert processed fear,
        exhaustion, and the nearness of death almost exclusively through his music – most
        clearly in the resigned, often dark tone of <em>Winterreise</em>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A late work of unusual depth:</strong>
        The works of his final six years are widely considered his most significant today –
        a maturity and emotional depth many music historians link directly to his experience
        of illness.</p>
        <p class="vb-intro"><strong>b) A death with an unresolved cause:</strong>
        Typhoid fever was recorded as the official cause of death in 1828. Medical
        historians still debate whether late-stage complications of syphilis, worsened by
        the mercury treatment, were the actual or contributing cause – a question of music
        and medical history still unresolved today.</p>
        <p class="vb-intro"><strong>c) A body of work that outgrew its intimate circle:</strong>
        What emerged before a small, trusted audience at the Viennese Schubertiaden now
        belongs to the core repertoire of classical music worldwide – the sheltered setting
        later became a global stage.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Fear that became music:</strong>
        Rather than being paralyzed by fear of his own incurable illness, Schubert channeled
        it into compositional work – a typical pattern of the self-preservation Six: security
        is actively created, not passively awaited.</p>
        <p class="vb-intro"><strong>b) The Five-wing as a space of retreat:</strong>
        The growing inwardness and withdrawal of his final years fits the Five-wing, which
        creates distance from the outside world in order to process inner experience
        undisturbed.</p>
        <p class="vb-intro"><strong>c) Warmth in the small circle, not the large stage:</strong>
        Publicly Schubert remained reserved, nearly invisible; within the circle of his
        Schubertiaden, however, he was present, open, sustaining – warmth that unfolded only
        in a sheltered, familiar space.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Six years living with knowledge of his own mortality:</strong>
        From his 1823 diagnosis until his death in 1828, Schubert lived knowing he suffered
        from a disease incurable at the time – a circumstance music scholars repeatedly link
        to the increasingly dark, resigned tone of his late works, above all
        <em>Winterreise</em>.</p>
        <p class="vb-intro"><strong>b) The intimate circle as his only public stage:</strong>
        Rather than share his illness or his fears with a broad public, the intimate setting
        of the Schubertiaden remained the only place where he showed himself – warmth and
        security in the small, trusted circle, not in public.</p>
        <p class="vb-intro"><strong>c) Why, of all things, an illness that forced isolation?</strong>
        For a self-preservation Six with Five-wing, whose security comes from a small,
        reliable circle, a stigmatized, barely speakable illness can be read as an
        intensification of her own life pattern: the withdrawal that was already her basic
        strategy was further reinforced by the illness – and it was precisely out of this
        intensified inwardness that a late body of work of extraordinary emotional depth
        arose. This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the self-preservation Six with Five-wing's pattern inevitably
        leads to such illness courses – <strong>every person can develop any illness,
        regardless of subtype.</strong> Moreover, the exact cause of death remains disputed
        among music and medical historians to this day (typhoid versus late-stage syphilis).
        What Schubert's case can show is a pattern in how illness was handled that stands out
        again and again in a pronounced self-preservation Six with Five-wing – one possible
        reading among many, not a verdict. The corresponding condition will be developed step
        by step in this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Schubert did not know his own pattern – the self-preservation Six with Five-wing seeks safety in the familiar small circle and in its own work, and that is exactly where he withdrew as his illness progressed, rather than seeking help outside that circle. Someone who does not know their own withdrawal pattern mistakes the familiar shelter for actual safety.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Six with Five-wing is confirmed once more in how <strong>Franz
        Schubert</strong> handled his six-year illness: no public confession, but withdrawal
        into his innermost, trusted circle – and out of this enforced inwardness, some of
        his deepest, still most-performed works. The rabbit, who turned fear and longing for
        shelter into music, remained almost invisible in public and became immortal
        precisely because of it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-franz-schubert", label:"Portrait: Franz Schubert (SE6w5) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se6", label:"Subtype Profile SE6"},
      ])}
    </div>
  `);
}

export function friedrichSchillerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-schiller-portrait.jpg" alt="Friedrich Schiller" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Schiller</p>
        <p class="krim-portrait-typ">SX6w5 · Sexual Type 6 with Five-wing · 1759–1805</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedrich Schiller</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-friedrich-schiller">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page focuses on a chapter that page barely mentions: a fragile
        constitution since childhood, a tuberculosis germ likely contracted during his medical
        studies, and fourteen years of work against a body that had already collapsed,
        life-threateningly, in 1791.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schiller</strong> is classified as the <strong>Sexual Six with Five-wing</strong>.
        Naranjo described SX6 as the Six's counter-type: rather than withdrawing from threat,
        it meets it with demonstrated strength. The Five-wing adds analytical depth and the
        ability to immerse itself in work and structure until no strength remains – a pattern
        that can be traced right into Schiller's final years, marked by progressing illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) His own body as one more opponent to be confronted:</strong>
        Schiller's view of his own progressing illness was the same as his view of every other
        threat in his life – not to evade it, but to keep working, as if sheer willpower could
        halt the decline.</p>
        <p class="vb-intro"><strong>b) Warning signs as obstacles, not limits:</strong>
        Already at the Karlsschule, the young Schiller repeatedly lay in the infirmary with
        coughs and lung catarrh – an early sign of a fragile constitution that he treated his
        whole life not as a limit, but as one more obstacle.</p>
        <p class="vb-intro"><strong>c) Nights wrested from the day:</strong>
        Goethe remarked on Schiller's working method with admiration and concern in equal
        measure: "His sleepless nights illuminated our days" – an observation that shows how
        clearly those around Schiller already sensed the cost of his way of working.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A possible origin during his medical studies:</strong>
        During his enforced medical studies at the Karlsschule, Schiller dissected a fellow
        student who had died of pulmonary tuberculosis. Historians and physicians believe he
        may have contracted the illness that would accompany him from then on during this
        period.</p>
        <p class="vb-intro"><strong>b) Wearing down his own body as a way of life:</strong>
        Schiller often worked through the entire night, ate irregularly and poorly, and
        suffered from chronic digestive problems and recurring infections – a lifestyle that
        further weakened his already fragile constitution.</p>
        <p class="vb-intro"><strong>c) The collapse of 1791:</strong>
        At 32, Schiller suffered the first of recurring, life-threatening attacks of severe
        fever, violent coughing with blood, and fainting spells – likely severe flare-ups of
        tuberculosis. He never fully recovered afterward.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Fourteen years of work against his own decline:</strong>
        After 1791, Schiller lived and worked another fourteen years under the constant
        pressure of a progressing illness – and wrote, in precisely this period, his most
        significant late work: the "Wallenstein" trilogy, "Mary Stuart," "The Maid of Orleans,"
        and "William Tell."</p>
        <p class="vb-intro"><strong>b) Rapid decline in the spring of 1805:</strong>
        After attending the theater on May 1, 1805, Schiller suffered a severe collapse with
        febrile convulsions. Eight days later, on May 9, 1805, he died at only 45 years of age
        of acute pneumonia.</p>
        <p class="vb-intro"><strong>c) An autopsy finding that shocked even the treating physicians:</strong>
        The autopsy performed the day after his death found a right lung completely destroyed,
        scarred, and firmly fused to the pericardium, severely damaged, "almost dissolved"
        kidneys, and a heart muscle atrophied in a way unusual for his age.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A doctor's verdict that expressed sheer disbelief:</strong>
        The treating physician summed up the state of the deceased poet in a sentence later
        often quoted: "Given these circumstances, one must wonder how the poor man was able
        to live so long."</p>
        <p class="vb-intro"><strong>b) A weakened body, carried by one of the most willpower-driven constitutions of the Enneagram:</strong>
        The autopsy findings show that Schiller's organism had been functioning for years at a
        fraction of its actual capacity. Medically, that is barely explicable through the
        body itself – but it is explicable through the mental willpower of the Sexual Six,
        which ranks among the most willpower-driven of the Enneagram's 27 subtypes. It was
        not the weakened body that endured, but the principle that kept driving it forward
        regardless – exactly what left the treating physician so astonished.</p>
        <p class="vb-intro"><strong>c) Creativity that rose in parallel with the decline:</strong>
        Rather than tapering off, some of his most mature and significant works emerged
        precisely in the last years marked by illness – a finding that left many
        contemporaries and later biographers baffled.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The wolf that did not retreat, but attacked:</strong>
        Just as he had once stood his ground against Duke Karl Eugen and censorship, Schiller
        met his own illness not with withdrawal, but with continued, uncompromising work.</p>
        <p class="vb-intro"><strong>b) Energy drawn to the point of physiological exhaustion:</strong>
        The sleepless nights Goethe admiringly described were, at the same time, an ongoing
        depletion – energy literally drawn from his own body to keep the work moving forward.</p>
        <p class="vb-intro"><strong>c) No pause before the final collapse:</strong>
        Even eight days before his death, Schiller attended the theater – a life that stayed
        turned outward almost to the literal last possible moment, rather than withdrawing.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A fragile constitution since childhood:</strong>
        Even as a child Schiller was considered delicate and susceptible – a pattern that
        continued through his years at the Karlsschule with repeated lung catarrh, long before
        the actual illness broke out.</p>
        <p class="vb-intro"><strong>b) Fourteen years between collapse and death:</strong>
        From the first life-threatening attack in 1791 to his death in 1805, Schiller lived a
        decade and a half with an illness he never publicly placed at the center of his life,
        but which he, in effect, overwrote through continued work.</p>
        <p class="vb-intro"><strong>c) Confrontation instead of self-protection as a consistent pattern:</strong>
        Unlike Karl Lagerfeld (SO3w4), who hid his illness behind a flawless image, or David
        Bowie (SO1w2), who encoded his in art, Schiller did not hide his illness at all – he simply ignored it
        through continued, undiminished intensity of work, until his body no longer allowed
        further confrontation.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the lung – the organ of voice?</strong>
        The autopsy findings show a lung that scarred over years and eventually became
        completely non-functional. For a Sexual Six whose entire body of work consisted of
        loud, uncompromising opposition to tyranny and oppression – whose voice itself became
        a weapon – one reading suggests itself: precisely the organ that physically carries
        voice, breath, and resistance became the site of a decades-long, invisible battle that
        he never tried to win by retreating, only ever by continuing to work. The wolf that
        kept fighting until, quite literally, no breath remained. This reading is explored in
        more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual Six's pattern inevitably leads to lung disease –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Schiller's case can show is a pattern that stands out again and again in practice
        wherever the need exists to meet threat – including one's own mortality – not through
        withdrawal but through continued confrontation – one possible explanation among many,
        not a verdict. The corresponding condition will be developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Schiller did not know his own pattern – the sexual Six reflexively meets threat with confrontation rather than rest, and it was exactly this that drove him to work against his own physical decline for fourteen years, rather than yielding to the illness even once. Someone who does not know their own confrontational pattern keeps fighting even where retreat would be the healthier answer.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The course of his illness reflects, once more, <strong>Schiller's</strong> Sexual Six
        with Five-wing: a fragile constitution since childhood, a germ likely contracted
        during his medical studies, and fourteen years of uncompromising work against an
        increasingly destroyed body, until on May 9, 1805, literally no further resistance was
        possible. The wolf that never evaded threat – whether censorship or its own
        mortality – but faced it down to the very last consequence.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-friedrich-schiller", label:"Portrait: Friedrich Schiller (SX6w5) – life's work"},
        {route:"beruehmte-johann-wolfgang-von-goethe", label:"Portrait: Johann Wolfgang von Goethe (SO7w6) – close friend and correspondent"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – counter-model: concealment rather than confrontation"},
        {route:"krankheitsportraets-otto-von-bismarck", label:"Illness Portrait: Otto von Bismarck (SX6w5) – same subtype, opposite expression"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function gretaThunbergKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-greta-thunberg-portrait.jpg" alt="Greta Thunberg" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Greta Thunberg</p>
        <p class="krim-portrait-typ">SE2w1 · Self-Preservation Type 2 with One-Wing · b. 2003</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Greta Thunberg</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-greta-thunberg">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: a severe
        depressive episode with an eating disorder and selective mutism at around age eleven,
        months before she was diagnosed with Asperger's syndrome and OCD.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Thunberg</strong> is assigned to the <strong>self-preservation Type 2 with
        One-Wing</strong>. The SE2 experiences threats to its own foundation of existence
        immediately and physically rather than abstracting them; the One-Wing adds a moral
        clarity that allows no compromise. Exactly this combination – a threat experienced as
        existential, coupled with the inability to make peace with a reality perceived as
        unbearable – shaped the course of her own psychological crisis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Onset around age eight:</strong>
        By her own and her family's account, Thunberg began understanding the scale of
        climate change already in primary school – knowledge that increasingly burdened her
        while those around her barely reacted.</p>
        <p class="vb-intro"><strong>b) Growing withdrawal around age eleven:</strong>
        Around 2014 her condition deteriorated markedly: she barely ate, lost significant
        weight, and at times stopped speaking almost entirely.</p>
        <p class="vb-intro"><strong>c) Diagnosis of severe depression:</strong>
        Doctors diagnosed a severe depressive episode accompanied by an eating disorder and
        selective mutism – a condition in which speaking becomes impossible in certain
        situations.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Months of missed school:</strong>
        According to her family, Thunberg was unable to attend school regularly for several
        months.</p>
        <p class="vb-intro"><strong>b) Later diagnosis of Asperger's syndrome and OCD:</strong>
        As the situation progressed, Asperger's syndrome and obsessive-compulsive disorder
        were additionally diagnosed – diagnoses that Thunberg later publicly described as
        part of her identity, not a flaw.</p>
        <p class="vb-intro"><strong>c) Family involvement as a central factor:</strong>
        Her parents, especially her mother, described in detail in a jointly written book how
        the entire family organized its daily life around Greta's condition for months.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Action as a way out of the crisis:</strong>
        By her own account, her condition began to improve only once she started actively
        engaging with climate protection – first within the family, then publicly.</p>
        <p class="vb-intro"><strong>b) The school strike as the concretized impulse to act:</strong>
        The school strike in front of the Swedish parliament in August 2018 marked the point
        where inner burden turned into structured, outward-directed action.</p>
        <p class="vb-intro"><strong>c) Open handling of her own history since then:</strong>
        Unlike many public figures, Thunberg spoke openly about this crisis from the start,
        rather than concealing or minimizing it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide attention for a rarely openly discussed pattern:</strong>
        Thunberg's openness about depression, an eating disorder, and neurodivergence in
        someone so young and extremely publicly visible sparked international discussions
        about mental health in adolescents.</p>
        <p class="vb-intro"><strong>b) Linking a personal crisis with political engagement:</strong>
        For many, her story became an example of how an individual psychological crisis can
        grow into a global movement without the crisis itself being glorified.</p>
        <p class="vb-intro"><strong>c) Continued public curiosity about her diagnoses:</strong>
        To this day, Thunberg's neurodivergence keeps being picked up by the media – always
        presented by her consistently as a strength, not a limitation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Existential rather than abstract perception of the threat:</strong>
        The SE2's characteristic immediacy showed already in childhood: climate change was
        not a distant piece of news for young Greta but a physically felt threat to her own
        future – exactly the directness that, years later, would shape her entire public
        voice.</p>
        <p class="vb-intro"><strong>b) The One-Wing and the impossibility of denial:</strong>
        While other children could push away or relativize the knowledge of climate change,
        the One-Wing allowed Thunberg no compromise with a reality recognized as wrong – a
        pattern that deepened the crisis before it later became the source of her
        determination.</p>
        <p class="vb-intro"><strong>c) From silent withdrawal to a loud voice:</strong>
        Selective mutism – falling silent in the face of an unbearable reality – and the
        globally heard voice that followed are two sides of the same pattern: as long as no
        action seemed possible, she fell silent; once action became possible, she spoke as
        clearly as almost no one else.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A voice that fell silent before becoming the loudest:</strong>
        Thunberg's entire public work rests on the ability to state uncomfortable truths
        unmistakably – before she found that voice, she lost it entirely, at a time when the
        same truth still offered no way out.</p>
        <p class="vb-intro"><strong>b) Why silence and hunger, of all things?</strong>
        For a self-preservation Two with a One-Wing whose entire later work rested on
        immediate, physically felt urgency, one interpretation suggests itself: exactly the
        two basic functions through which the body makes itself heard – speaking and eating –
        temporarily became the site where the threat, experienced as unbearable, expressed
        itself. This reading is a plausible interpretation, not a proven clinical causal
        link, and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the self-preservation Two's pattern inevitably leads to
        depression and eating disorders – <strong>any person can develop any illness,
        regardless of subtype.</strong> What can be shown in Thunberg's case is a pattern in
        dealing with a threat experienced as existential that keeps recurring in a pronounced
        self-preservation Two with a One-Wing – one of many possible readings, not a verdict.
        The corresponding illness pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Thunberg does not know her own pattern as an Enneagram structure – the
        self-preservation Two with a One-Wing reflexively experiences threats to its own
        foundation of existence as immediately physical, instead of finding an early balance
        between urgency and self-care, and lives out exactly this pattern largely unchanged
        to this day. Anyone who does not recognize their own tendency to bear existential
        threats unfiltered in their own body as a pattern risks that the crisis repeats
        itself once no possibility for action remains visible.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 2 with One-Wing explains much about the course of
        <strong>Greta Thunberg's</strong> psychological crisis: a girl who experienced a
        global threat as immediately and physically as almost no one else fell completely
        silent at first – and only found her voice again once quiet despair turned into
        concrete action. The hippopotamus that first stood motionless in the water before
        redirecting the entire current.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-greta-thunberg", label:"Portrait: Greta Thunberg (SE2w1)"},
        {route:"krankheitsportraets-natascha-kampusch", label:"Illness Portrait: Natascha Kampusch (SP2w1)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SE2"},
      ])}
    </div>
  `);
}

export function honoreDeBalzacKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-honore-de-balzac-portrait.jpg" alt="Honoré de Balzac" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Honoré de Balzac</p>
        <p class="krim-portrait-typ">SP4w3 · Self-Preservation Type 4 with Three-wing · 1799–1850</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Honoré de Balzac</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-honore-de-balzac">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work, his background, and his type
        structure in general. What follows here goes beyond what that page only hints at: the
        decades-long exploitation of his own body through compulsive overwork, caffeine excess,
        and sleep deprivation – and the heart failure with fatal gangrene that killed him five
        months after his wedding.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Balzac</strong> is classified as the <strong>Self-Preservation Four with
        Three-wing</strong>. The SE4 does not carry its suffering outward but endures it
        tenaciously and alone – for Balzac, that meant paying off debts with sentences, night
        after night, without yielding to his own exhaustion. The Three-wing gave that tenacity
        a goal beyond mere survival – social rank, visible success – and that very goal let him
        ignore his body's warning signs for decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A daily rhythm that no body can sustain indefinitely:</strong>
        Already in the 1830s, barely thirty years old, Balzac's notorious work rhythm was in
        place: a brief dinner, a nap until midnight, then uninterrupted writing well into the
        following morning – fifteen to eighteen hours at a stretch, night after night, for
        decades.</p>
        <p class="vb-intro"><strong>b) Coffee as both engine and poison:</strong>
        To stay awake, Balzac drank enormous quantities of extremely strong, at times almost
        undrinkably concentrated black coffee – contemporaries and later biographers report
        dozens of cups in a single working day. He himself described how the coffee kept him
        awake when his body had long wanted to sleep – a substance he quite literally wrung
        from his own health.</p>
        <p class="vb-intro"><strong>c) A body visibly out of balance from early on:</strong>
        Already in his middle years, contemporaries describe Balzac as increasingly stout – a
        consequence of his sedentary work style, his irregular, often hurried meals, and the
        lack of any counterbalance to the nightly strain.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A heart weakness progressing over a decade and a half:</strong>
        Medical-historical studies of Balzac's illness assume that a marked deterioration was
        already evident about a year and a half before his death – with growing breathlessness
        attributed to progressive thickening of the heart's ventricular wall (ventricular
        hypertrophy), and severe fluid retention in his legs.</p>
        <p class="vb-intro"><strong>b) The leg edema and a risky procedure:</strong>
        To relieve the massive fluid buildup in his legs, Balzac's doctors repeatedly used a
        trocar – a sharp surgical instrument – to drain the accumulated fluid. Without the
        later possibilities of disinfection and without antibiotics, an infection entered the
        open wounds through these repeated punctures.</p>
        <p class="vb-intro"><strong>c) The infection turns into gangrene:</strong>
        This infection developed into gangrene in his legs – tissue death that further
        overwhelmed Balzac's already weakened circulation in his final weeks and ultimately
        became the cause of death, together with the underlying heart failure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Working to the physical limit, even after the first warning signs:</strong>
        Even as his health problems became clearly noticeable, Balzac barely reduced his
        workload – the debts that had produced his body of work at this scale in the first
        place kept demanding new pages, new contracts, new advances.</p>
        <p class="vb-intro"><strong>b) A life torn between Hańska and the duty to write:</strong>
        In the years before his marriage to Ewelina Hańska, Balzac repeatedly traveled back and
        forth between Paris and Ukraine – exhausting journeys that placed further strain on his
        already weakened body, all while he kept writing to secure his financial and social
        standing before the long-awaited wedding.</p>
        <p class="vb-intro"><strong>c) The marriage as a brief respite:</strong>
        On March 14, 1850, Balzac married Ewelina Hańska in Ukraine – finally reaching his goal
        after seventeen years of correspondence. But the journey back to Paris in early summer
        1850 was already overshadowed by a dramatically deteriorating health; there could be no
        talk of a fresh start with a settled life that might have let his body recover.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A rapid decline in the final months:</strong>
        According to consistent sources, Balzac's condition deteriorated dramatically in his
        final three months of life – growing breathlessness, mounting exhaustion, and the
        advancing gangrene left him increasingly bedridden.</p>
        <p class="vb-intro"><strong>b) Victor Hugo's visit:</strong>
        Victor Hugo, summoned by Balzac's wife, visited the dying man on August 18, 1850, and
        later recorded his observations in writing: Balzac lay on a sofa, his face darkly
        discolored, barely able to rise – only his eyes still showed life. A few hours later,
        Balzac was dead.</p>
        <p class="vb-intro"><strong>c) A eulogy that captured the scale of the loss:</strong>
        Two days later, on August 20, 1850, Hugo delivered the graveside eulogy and honored
        Balzac as one of the greatest writers of his era – a public echo that stood in stark
        contrast to the final weeks marked by pain and physical decline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Tenacity turned against his own body:</strong>
        The same SE4 tenacity that enabled Balzac to write against his debts for decades turned,
        in his final years, unabated against the signals of his own body – exhaustion,
        breathlessness, swelling were not read as reasons to change course, but as further
        obstacles to be overcome.</p>
        <p class="vb-intro"><strong>b) The Three-wing as amplifier, not brake:</strong>
        Rather than enjoying the status he had so laboriously written his way into, the
        status-conscious Three-wing kept driving Balzac to achieve more, to secure more – even
        when the price was his own body.</p>
        <p class="vb-intro"><strong>c) A pattern that intensified rather than resolved within the marriage:</strong>
        In his final years, Balzac shows a trait that goes beyond the pure SE4 pattern: a
        growing, almost clinging emotional dependence on Hańska's attention and approval,
        intensified by years of uncertainty about the marriage and his own financial distress.
        Under chronic stress, the Four moves along its stress line toward the Two – and exactly
        this pattern of a needy, approval-seeking closeness can be read in his late letters to
        Hańska, without his core type having changed.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Parallel within the same subtype – Lady Diana (SE4w3):</strong>
        As with <a href="javascript:void(0)" data-route="krankheitsportraets-lady-diana">Lady
        Diana</a>, also SE4w3, Balzac shows the pattern typical of this subtype: suffering is
        not carried outward loudly, but endured alone and tenaciously for years, while
        unabated performance – for Diana a public facade, for Balzac literary output – is
        shown outwardly. For Diana the suffering broke through as years of concealed bulimia,
        for Balzac as decades of exploiting his own body that was never hidden from anyone and
        yet was never stopped – two variants of the same SE4 core movement: endure rather than
        give up.</p>
        <p class="vb-intro"><strong>b) An exhaustion built over decades, not a sudden catastrophe:</strong>
        From the first all-night writing marathons in the 1830s to the gangrene of his final
        weeks runs a continuous line of steady, self-chosen overexertion – not a single event,
        but a pattern repeated for more than twenty years.</p>
        <p class="vb-intro"><strong>c) Two symptoms, one shared origin:</strong>
        His excessive coffee consumption and his chronic sleep deprivation can be read as two
        sides of the same strategy: keeping his own body functional for as long as possible in
        order to meet a self-imposed, ultimately never-ending duty to write.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the heart?</strong>
        For a Self-Preservation Four whose instinct is actually directed at securing its own
        survival, one reading suggests itself: precisely the organ that, figuratively, stands
        for endurance, strength, and constant, unnoticed giving was strained by Balzac for
        decades until exhausted – while the Three-wing made sure that this exhaustion stayed
        invisible outwardly for as long as possible. This reading is a plausible interpretation,
        not a documented historical causal link, and is explored in more depth in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik/herzinsuffizienz">Psychosomatics
        Register entry on heart failure</a>.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation Four's pattern inevitably leads to heart
        failure – <strong>every person can develop any illness, regardless of subtype.</strong>
        What Balzac's case can show is a pattern that stands out again and again in practice
        wherever the tendency exists to endure exhaustion silently rather than give in to it –
        one possible explanation among many, not a verdict.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Balzac did not know his own Enneagram pattern – the concept did not yet exist in this
        form during his lifetime. The self-preservation tenacity that enabled him to write
        against his debts carried, for him, no built-in warning mechanism that could have made
        him pause in time; on the contrary, every physical warning sign was processed in
        exactly the same logic he applied to financial setbacks: as one more obstacle to work
        through tenaciously rather than yield to. Someone who does not know their own
        exhaustion pattern cannot interrupt it in time either – for Balzac, that ended only
        with death, five months after the wedding he had waited seventeen years for.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Balzac's</strong> illness history, the Self-Preservation Four with
        Three-wing shows itself at its most uncompromising: a tenacity that produced a
        literary work of a century-defining scale – and the very same tenacity that demanded
        of his own body, decade after decade, exhaustion without ever pausing. The dove that
        for seventeen years unwaveringly carried its message reached its goal on March 14,
        1850 – and died five months later, on August 18, 1850, of heart failure and the
        gangrene it produced, at the age of 51.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-honore-de-balzac", label:"Portrait: Honoré de Balzac (SE4w3) – life's work"},
        {route:"krankheitsportraets-lady-diana", label:"Illness Portrait: Lady Diana (SE4w3) – same subtype"},
        {route:"krankheitsportraets-t-e-lawrence", label:"Illness Portrait: T. E. Lawrence (SE4w3) – same subtype"},
        {route:"psychosomatik/herzinsuffizienz", label:"Psychosomatics Register: Heart Failure"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function johannesBrahmsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-johannes-brahms-portrait.jpg" alt="Johannes Brahms" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Johannes Brahms</p>
        <p class="krim-portrait-typ">SE9w8 · Self-Preservation Type 9 with Eight-wing · 1833–1897</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Elephant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Animal correspondence: Elephant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Johannes Brahms</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-johannes-brahms">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and his decades-long loyalty to the
        Schumann family. This page delves into a chapter only briefly addressed there: a liver disease
        that had already killed his father, and that carried Brahms off himself just eleven
        months after the death of his closest friend, Clara Schumann.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Brahms</strong> is classified as the <strong>self-preservation Nine with
        Eight-wing</strong>. Naranjo called this subtype <em>Appetite</em>: peace in the
        familiar, in the ever-repeated habit. The Eight-wing gives that equanimity an
        unshakeable steadfastness. This same pattern – persisting in the familiar until an
        outside shock breaks it open – can be traced right into his illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The exhausting journey to Clara Schumann's funeral:</strong>
        When Clara Schumann died in May 1896, the already ailing Brahms missed several train
        connections on his hurried trip to Bonn and had to travel part of the way on the wrong
        train – he arrived exhausted and too late for the burial.</p>
        <p class="vb-intro"><strong>b) A visible yellowing that same summer:</strong>
        That same summer, friends noticed an unusual yellowing of his skin and a growing
        exhaustion that Brahms initially played down.</p>
        <p class="vb-intro"><strong>c) A diagnosis that echoed his own father's:</strong>
        In late 1896 or early 1897, Brahms was diagnosed with a severe liver disease – the same
        illness that had already killed his father, Johann Jakob Brahms.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) No withdrawal from public obligations:</strong>
        Despite the diagnosis, Brahms did not withdraw from public life but continued attending
        concerts as long as his strength allowed.</p>
        <p class="vb-intro"><strong>b) A decline his inner circle noticed, but he barely mentioned:</strong>
        Those close to him noticed the progressive weight loss and growing exhaustion – Brahms
        himself said little about it, entirely in the manner of a self-preservation Nine who
        outlasts hardship rather than discussing it.</p>
        <p class="vb-intro"><strong>c) Holding on to familiar rituals as long as possible:</strong>
        Even in his final months, Brahms kept up his usual rhythm – regular haunts, cigars,
        fixed daily routines – for as long as his fading strength allowed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) His final public appearance on 7 March 1897:</strong>
        Brahms attended a performance of his Fourth Symphony in Vienna, visibly weakened and
        barely able to climb the stairs to his box. The audience gave him a long, deeply moved
        ovation after every movement – many in the hall wept, aware they were seeing him for
        the last time.</p>
        <p class="vb-intro"><strong>b) Remarkable composure in the face of approaching death:</strong>
        Friends and companions consistently reported a quiet equanimity with which Brahms
        accepted his own dying in his final weeks.</p>
        <p class="vb-intro"><strong>c) Death on 3 April 1897 in Vienna:</strong>
        Johannes Brahms died at age 63 – just eleven months after Clara Schumann, whose loss
        likely accelerated his own physical decline.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">A Parallel Within the Same Subtype: David Hume</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <a href="javascript:void(0)" data-route="beruehmte-david-hume">David Hume</a>
        (SE9w8) likewise met his fatal illness – in his case a chronic bowel disease – with
        remarkable calm rather than struggle or despair. His own
        <a href="javascript:void(0)" data-route="krankheitsportraets-david-hume">illness
        portrait</a> shows the same elephant-like calm as Brahms: the Eight-wing gives the
        self-preservation Nine a steadfastness that can face even death without flinching – not
        a dramatic fight, but a quiet carrying-on of the familiar until the very end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A death that closely followed another death:</strong>
        That Brahms died just eleven months after Clara Schumann was read by contemporaries and
        posterity alike as scarcely a coincidence – forty years of loyalty ended almost
        simultaneously on both sides.</p>
        <p class="vb-intro"><strong>b) An ovation that became a farewell:</strong>
        The ovation after his Fourth Symphony in March 1897 still ranks among the most moving
        moments in concert history – an audience giving its dying composer one final tribute.</p>
        <p class="vb-intro"><strong>c) A quiet end without drama:</strong>
        Unlike some artist deaths that grow into legend, Brahms's dying remained remarkably
        undramatic – fitting for a man who had preferred the familiar to the conspicuous his
        entire life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The elephant that could no longer shake off one shock:</strong>
        The self-preservation Nine finds its stability in the familiar – Clara Schumann's death
        took from Brahms exactly the last fixed point that had grown over more than forty
        years, and his body followed shortly after.</p>
        <p class="vb-intro"><strong>b) Persisting in the familiar to the point of exhaustion:</strong>
        Instead of sparing himself after the diagnosis, Brahms held on to his familiar
        obligations – the same inertia that let him polish a symphony for 21 years also kept
        him from deviating from his rituals in the face of his own death.</p>
        <p class="vb-intro"><strong>c) The Eight-wing that did not flinch even in dying:</strong>
        The same unshakeable steadfastness with which Brahms once held his position in the
        "War of the Romantics" showed itself once more in the quiet, unwavering way he faced
        his own death.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) An illness rooted in the family's own familiar pattern:</strong>
        That Brahms died of the same liver disease as his father fits, in a bitter way, the
        self-preservation Nine's core theme: even the course of his illness carried something
        deeply familial and recurring, rather than an entirely new, foreign fate.</p>
        <p class="vb-intro"><strong>b) A break in the familiar as trigger:</strong>
        The self-preservation Nine lives on reliable ritual – Clara Schumann's death and the
        chaotic, exhausting journey to her funeral were exactly the disruption of the familiar
        that made Brahms's until-then hidden illness visible.</p>
        <p class="vb-intro"><strong>c) No flight, no fight – only quiet carrying-on:</strong>
        As with David Hume, Brahms shows no desperate fight against illness and no dramatic
        withdrawal, but a carrying-on of familiar rituals to the very limit of his strength.</p>
        <p class="vb-intro"><strong>d) Why the liver, of all things?</strong>
        For a self-preservation Nine with Eight-wing, whose deepest need lies in the calm
        processing and preservation of the familiar, one interpretation suggests itself: the
        very organ responsible in the body for processing, detoxification, and quiet
        functioning in the background became, for Brahms – as it had for his father – the site
        of decline. This interpretation is a plausible reading, not a documented historical
        causal link, and is developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the self-preservation Nine pattern inevitably leads to liver
        disease – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Brahms's case illustrates is a pattern in how a pronounced self-preservation Nine
        with Eight-wing handles a fatal diagnosis that keeps recurring in practice – one of
        many possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Brahms did not know his own pattern – the self-preservation Nine with Eight-wing finds
        security in the familiar and silently carries burdens rather than naming them or
        sparing herself. That is exactly what he did, holding on to his obligations despite
        visible exhaustion instead of taking his illness seriously. Someone who does not
        recognize their own tendency to sit out discomfort rather than name it misses the
        moment when timely rest could still have made a difference.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Brahms's</strong> self-preservation Nine with Eight-wing is legible once more in
        the course of his illness: an illness rooted in his own family's familiar pattern, a
        collapse of the familiar that became visible only through the loss of his closest
        friend, and a quiet, undramatic end that matched the life he had lived. The elephant
        that forgot nothing for forty years – and left the world only eleven months after the
        woman to whom that loyalty had been given longest.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-johannes-brahms", label:"Portrait: Johannes Brahms (SE9w8) – life's work"},
        {route:"krankheitsportraets-robert-schumann", label:"Illness Portrait: Robert Schumann (SX7w8) – Brahms visited him regularly at Endenich"},
        {route:"krankheitsportraets-david-hume", label:"Illness Portrait: David Hume (SE9w8) – the same elephant-like calm"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Illness Portrait: Hans-Dietrich Genscher (SE9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se9", label:"Subtype Profile SE9"},
      ])}
    </div>
  `);
}

export function julianAssangeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-julian-assange-portrait.jpg" alt="Julian Assange" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Julian Assange</p>
        <p class="krim-portrait-typ">SO9w1 &middot; Social Type 9 with One-wing &middot; b. 1971</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Buffalo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Animal correspondence: Buffalo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Julian Assange</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-julian-assange">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his founding of WikiLeaks and the fight
        for radical transparency. This page explores a chapter only cursorily mentioned there: over
        seven years of near-total isolation in the Ecuadorian embassy in London, followed
        by a further five years in British high-security detention – with extensively
        documented physical and psychological consequences.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Assange</strong> is assigned to the <strong>Social Type 9 with One-wing</strong>.
        The SO9 merges completely with an idea larger than its own person; the One-wing
        adds an unwavering moral compass that tolerates no compromise. This exact
        combination – holding to a principle no matter the cost – also determined how long
        Assange endured his own isolation before the health consequences became
        undeniable.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Refuge in the embassy from June 2012:</strong>
        Assange sought refuge in the Ecuadorian embassy in London in June 2012 to avoid
        extradition to Sweden – without knowing this would turn into nearly seven years of
        near-total isolation.</p>
        <p class="vb-intro"><strong>b) No access to daylight or outside space for years:</strong>
        According to treating physicians, Assange had no access to direct sunlight,
        appropriate ventilation, or outside space for over five and a half years – within
        roughly 30 square meters of usable living space.</p>
        <p class="vb-intro"><strong>c) First documented psychological strain symptoms:</strong>
        Already during the embassy years, treating physicians documented severe anxiety,
        pathological stress levels, dissociation, and depressive symptoms.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Neuropsychological impairments:</strong>
        Medical examinations documented neuropsychological impairment, weakened bones,
        decreased immune function, and increased risk of cardiovascular disease and
        cancer.</p>
        <p class="vb-intro"><strong>b) Chronic pain and post-traumatic stress:</strong>
        Documented symptoms also included chronic pain and post-traumatic stress disorder,
        together with suicidal ideation during especially severe phases.</p>
        <p class="vb-intro"><strong>c) Denied or obstructed access to medical care:</strong>
        More than 60 doctors wrote an open letter to the UK Home Secretary documenting a
        repeated, years-long denial of adequate medical care.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Arrest and transfer to Belmarsh in 2019:</strong>
        After his embassy asylum was withdrawn in April 2019, Assange was arrested and
        transferred to the British high-security prison Belmarsh, where he remained until
        his release in 2024.</p>
        <p class="vb-intro"><strong>b) Continued medical warnings during detention:</strong>
        Even during his time at Belmarsh, examining physicians repeatedly warned of a
        "dangerous" health condition and a continuing decline.</p>
        <p class="vb-intro"><strong>c) Release after guilty plea in June 2024:</strong>
        After more than twelve years between embassy asylum and detention, Assange pleaded
        guilty to one charge in a deal with US authorities in June 2024 and was released –
        he subsequently returned to Australia.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) International medical and legal attention:</strong>
        Journals such as The Lancet and numerous medical associations publicly addressed
        the health consequences of isolation confinement – a rare case in which an
        individual's fate became the subject of professional medical debate.</p>
        <p class="vb-intro"><strong>b) A symbolic figure beyond his own person:</strong>
        Assange's declining health became a central argument in the public debate over
        press freedom and the limits of state prosecution of investigative journalists.</p>
        <p class="vb-intro"><strong>c) No complete withdrawal from his own cause:</strong>
        Despite the documented health consequences, Assange never publicly distanced
        himself from the core convictions that had led to his isolation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Merging with the idea to the point of self-abandonment:</strong>
        The same SO9 tendency to merge completely with a larger cause – which carried
        Assange's entire commitment to WikiLeaks – also determined how long he endured his
        own isolation before the physical warning signs became undeniable.</p>
        <p class="vb-intro"><strong>b) The One-wing and holding to principle regardless of cost:</strong>
        The One-wing's unwavering commitment to principle explains why Assange, for years,
        made no compromise that might have secured his freedom sooner – the principle
        weighed heavier than his own physical condition.</p>
        <p class="vb-intro"><strong>c) Inertia as a protective pattern that became a trap:</strong>
        The Nine's typical tendency to tune out uncomfortable realities rather than
        actively counteract them may help explain why the health warning signs did not
        lead to an earlier, orderly withdrawal from the situation over the years.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A self that fully subordinated itself to a cause:</strong>
        Assange's entire identity had been inseparably intertwined with the idea of radical
        transparency since the founding of WikiLeaks – the years of isolation struck
        precisely the self that had never understood itself as separate from that mission,
        and brought it nearly to the point of breaking.</p>
        <p class="vb-intro"><strong>b) Why isolation and confinement, of all things?</strong>
        For a Social Nine with a One-wing, whose entire identity rests on belonging to a
        larger cause, one interpretation suggests itself: precisely the complete
        deprivation of outside contact and freedom of movement threatened exactly the
        capacity to merge with a community from which the SO9 draws its identity – a
        forced return to a self that had scarcely ever existed independently of a larger
        cause. This interpretation is a plausible reading, not a documented clinical causal
        link, and will be developed further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Placing it without determinism:</strong>
        This does not mean that the Social Nine's pattern inevitably leads to the
        consequences of isolation – <strong>anyone can suffer any illness or health
        consequence, regardless of subtype.</strong> What Assange's case illustrates is a
        pattern in how a pronounced Social Nine with a One-wing tends to handle enforced
        isolation – one of many possible interpretations, not a verdict. The corresponding
        illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Assange does not know his own pattern as an Enneagram structure – the Social Nine
        with a One-wing reflexively merges with its own cause instead of ever recognizing
        its own physical warning signs as a reason to withdraw, and he lived out exactly
        this pattern virtually unchanged for over a decade. Someone who does not recognize
        their own tendency to dissolve completely into a mission as a pattern cannot
        counteract in time, even in the face of unmistakable physical warning signs.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Nine with a One-wing explains much about the course of
        <strong>Julian Assange's</strong> own health crisis: a man whose entire identity
        merged with an idea larger than himself does not let years of documented physical
        and psychological strain move him from his principle – the buffalo that lowers its
        head and keeps going, even once its own body has long begun to falter.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-julian-assange", label:"Portrait: Julian Assange (SO9w1) – founder of WikiLeaks"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so9", label:"Subtype Profile SO9"},
      ])}
    </div>
  `);
}

export function konradAdenauerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-konrad-adenauer-portrait.jpg" alt="Konrad Adenauer" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Konrad Adenauer</p>
        <p class="krim-portrait-typ">SE1w9 · Self-Preservation Type 1 with Nine-wing · 1876–1967</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Konrad Adenauer</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-konrad-adenauer">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page is devoted to a chapter that page leaves largely untouched: a severe
        car accident in 1917 that permanently changed his face, followed by persecution and
        imprisonment under the National Socialists, and the health decline of his final year.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Adenauer</strong> is classified as the <strong>Self-Preservation One with
        Nine-wing</strong>. SP1 directs the One's striving for perfection at its own
        immediate survival and functioning – order, control, and moral correctness as
        protection against chaos and vulnerability. The Nine-wing adds a calm, seemingly
        unshakeable presence, behind which tension often hides for a long time – a pattern
        traceable right into Adenauer's outwardly always controlled bearing after a literally
        shattered face.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Control over his own appearance as a life principle:</strong>
        After the accident that permanently changed his face, Adenauer spent the rest of his
        life cultivating a public image of unshakeable calm and authority – the exact
        opposite of the vulnerability he had suffered.</p>
        <p class="vb-intro"><strong>b) Vigilance as a basic stance:</strong>
        Whether after the accident, during persecution by the National Socialists, or in high
        office – Adenauer's gaze was always fixed on what threat might come next, and how to
        meet it through caution and structure.</p>
        <p class="vb-intro"><strong>c) Public composure despite private upheaval:</strong>
        Even during the months of Gestapo persecution in 1944, Adenauer, by his own account,
        maintained a stance toward his interrogators that was "sharp, but correct" – a
        controlled composure that did not break even under existential pressure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A severe car accident in 1917:</strong>
        The official car of the then 41-year-old Cologne deputy mayor Adenauer collided with
        a tram. His cheekbone and nasal bone were broken, his lower jaw shattered and
        dislocated, several teeth were lost, his eyesight was impaired, and he suffered deep
        head wounds.</p>
        <p class="vb-intro"><strong>b) Months of reconstruction:</strong>
        A months-long hospital stay followed, along with several reconstructive facial
        surgeries. The distinctive, gaunt features Adenauer later became known for are, to a
        considerable extent, a direct consequence of the accident – not an ordinary sign of
        aging.</p>
        <p class="vb-intro"><strong>c) Persecution from 1933 onward:</strong>
        After the National Socialists seized power, Adenauer was removed as mayor of Cologne
        and expelled from the city; he found temporary refuge at Maria Laach Abbey. In June
        1934, amid the so-called Röhm purge, he was held by the Gestapo for two days.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Flight and re-arrest in 1944:</strong>
        Initially declared unfit for imprisonment due to pernicious anemia and moved to a
        hospital, Adenauer escaped in September 1944 using a forged transport document. He
        went into hiding at a guesthouse near Hachenburg but was recaptured.</p>
        <p class="vb-intro"><strong>b) Two months in the Gestapo prison at Brauweiler:</strong>
        From late September to late November 1944, Adenauer was held in the Gestapo prison at
        Brauweiler. His cell was directly above the interrogation room – at night he heard
        other prisoners being mistreated, and, as he himself described it, spent nights
        drenched in sweat under psychological strain.</p>
        <p class="vb-intro"><strong>c) His own family's trauma:</strong>
        His wife Auguste, forced under interrogation to reveal his hiding place, attempted to
        take her own life out of guilt. She was saved in time but died in 1948 from the
        long-term effects – a grief that accompanied the entire Adenauer family for life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Remarkable vitality despite everything:</strong>
        Despite the accident, persecution, and imprisonment, Adenauer served as Chancellor
        from 1949 to 1963 – he was considered exceptionally capable and vital well into his
        87th year.</p>
        <p class="vb-intro"><strong>b) Two heart attacks in the spring of 1967:</strong>
        On March 29, 1967, the 91-year-old suffered a first heart attack; a second followed
        over Easter. A body that had functioned remarkably stably for decades began to fail
        rapidly in his final weeks.</p>
        <p class="vb-intro"><strong>c) Death after a brief final illness:</strong>
        The heart attacks were followed by a case of bronchitis that developed into pneumonia.
        Konrad Adenauer died on April 19, 1967, at the age of 91.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Reconstruction as a life pattern:</strong>
        Just as his face was surgically reconstructed after 1917, Adenauer literally
        rebuilt a destroyed state after 1945 – a pattern of reconstruction after destruction
        that runs through his entire life.</p>
        <p class="vb-intro"><strong>b) Control as a source of energy under pressure:</strong>
        The ability to remain outwardly composed under existential threat – the accident,
        persecution, imprisonment – was not an absence of fear, but a trained, disciplined
        channeling of his own tension into controlled action.</p>
        <p class="vb-intro"><strong>c) The eagle that stayed in office to the end:</strong>
        The energy of the SP1w9 remained directed, well into old age, at the same basic
        stance: creating order, carrying responsibility, not giving up as long as the task
        was not yet done.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An injury, not a progressive illness:</strong>
        Unlike most other Illness Portraits in this Compass, Adenauer's story does not begin
        with a creeping disease, but with a single, sudden trauma – the 1917 car accident –
        whose physical and likely psychological consequences accompanied him for the rest of
        his life.</p>
        <p class="vb-intro"><strong>b) A second shock, two decades later:</strong>
        Where the 1917 accident struck his body, persecution and imprisonment in 1933/34 and
        1944 struck his existence and his family – two very different but structurally
        related experiences of sudden loss of control, both of which Adenauer met with
        outward composure.</p>
        <p class="vb-intro"><strong>c) A body that functioned until the very end:</strong>
        Only at 91, in the spring of 1967, did his body finally fail – after decades in which
        it had remained remarkably stable despite the early injury.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the face?</strong>
        For a Self-Preservation One whose entire life principle rests on control,
        correctness, and a flawless outward bearing, one reading suggests itself: the
        accident struck precisely the part of the body through which authority, moral
        integrity, and public presence are most directly conveyed – the face. Rather than
        withdrawing, Adenauer turned the visible scars into the opposite of weakness: a face
        that became one of the most recognizable and authority-conferring images in
        postwar German history. This reading is a plausible interpretation, not a
        historically documented causal link, and is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Self-Preservation One's pattern inevitably leads to accidents
        or injuries – <strong>every person can suffer any illness or injury, regardless of
        subtype.</strong> What Adenauer's case can show is a pattern that stands out again and
        again in practice wherever the need exists to restore outward control and order
        precisely after suffered vulnerability – one possible explanation among many, not a
        verdict. The corresponding condition will be developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Adenauer did not know his own pattern – the self-preservation One with Nine-wing reflexively turns injury into controlled outward order, and that is exactly what he did, shaping the scars of his accident into an expression of disciplined authority rather than acknowledging the shock behind them. Someone who does not know their own pattern of control maintains the facade so thoroughly that even those closest to them barely sense the actual strain.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation One with Nine-wing shapes <strong>Adenauer's</strong> life right down
        into his own history of injury and persecution: a face shattered in 1917 that he
        turned into an expression of controlled authority, persecution and imprisonment two
        decades later that he met with the same outward composure, and a body that remained
        remarkably stable until his 91st year. The eagle that rose again after every fall –
        not unscathed, but unbroken in its determination to restore order.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-konrad-adenauer", label:"Portrait: Konrad Adenauer (SE1w9) – life's work"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Illness Portrait: Astrid Lindgren (SE1w9) – same subtype"},
        {route:"krankheitsportraets-robert-de-niro", label:"Illness Portrait: Robert De Niro (SE1w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SE1"},
      ])}
    </div>
  `);
}

export function ludwigWittgensteinKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-wittgenstein-portrait.jpg" alt="Ludwig Wittgenstein" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig Wittgenstein</p>
        <p class="krim-portrait-typ">SE1w9 · Self-Preservation Type 1 with Nine-wing · 1889–1951</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ludwig Wittgenstein</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-wittgenstein">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work, the Eagle as animal motif, and his type
        structure in general. Here the emphasis falls on something that page barely mentions: the prostate
        cancer diagnosis of December 1949, the months of unexplained exhaustion beforehand, and
        the final year and a half before his death in 1951.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Wittgenstein</strong> is classified as the <strong>Self-Preservation One with
        Nine-wing</strong>. The SE1 constantly measures itself against an inner standard of
        integrity and completeness—for this subtype, illness is not simply a physical event but a
        kind of proof of one's own imperfection, met with discipline and as little public
        complaint as possible.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Months of unexplained exhaustion:</strong>
        Months before the actual diagnosis, Wittgenstein already suffered from an exhaustion that
        could not initially be clearly attributed—a condition he, true to his pattern, played down
        for a long time rather than making it a central concern.</p>
        <p class="vb-intro"><strong>b) A first, wrong lead:</strong>
        A doctor in Dublin initially diagnosed anemia and prescribed iron and liver tablets—a
        treatment that missed the actual problem and further delayed clarification.</p>
        <p class="vb-intro"><strong>c) Continuing to work despite noticeable weakness:</strong>
        Even during this period of unclear health complaints, Wittgenstein continued his
        philosophical work—pausing merely because of unspecific exhaustion was not an option for
        him as long as no clear diagnosis existed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The diagnosis in December 1949:</strong>
        Only in December 1949 was the actual cause found: prostate cancer, already with
        secondary deposits in the spine by that point—a diagnosis that offered no prospect of a
        cure from the outset.</p>
        <p class="vb-intro"><strong>b) A hormone treatment with a high price:</strong>
        The hormone therapy initiated (stilboestrol) was meant to slow the progression—but over
        thirteen or fourteen months it brought on a state in which Wittgenstein described himself
        as almost unable to think.</p>
        <p class="vb-intro"><strong>c) The loss of his own instrument:</strong>
        For a man whose entire identity rested on the sharpness of his own thinking, this
        temporary loss of the ability to think was likely harder to bear than the diagnosis
        itself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) No public complaint:</strong>
        Even in the face of an incurable diagnosis, Wittgenstein rarely spoke publicly about his
        suffering—entirely in keeping with the SE1w9 pattern of not putting weakness on display,
        but processing it in seclusion.</p>
        <p class="vb-intro"><strong>b) Traveling between Vienna, Oxford, and Cambridge:</strong>
        He spent his last two years moving between Vienna, Oxford, and Cambridge—no retreat into
        a sickbed, but a life that, despite the diagnosis, remained in motion.</p>
        <p class="vb-intro"><strong>c) Working almost to the end:</strong>
        Even in this phase, Wittgenstein continued his philosophical work as far as his strength
        allowed—the manuscript later published as <em>On Certainty</em> was written in exactly
        these final months.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Retreating to his doctor's house:</strong>
        In his final weeks, Wittgenstein—who for decades had barely kept a conventional home of
        his own—moved into the house of his doctor, Dr. Edward Bevan, in Cambridge—a rare gesture
        of trust for a man who seldom allowed closeness.</p>
        <p class="vb-intro"><strong>b) A deliberate final celebration:</strong>
        Shortly before his death, he asked Mrs. Bevan not to discuss his approaching end with him
        yet, and celebrated his sixty-second birthday in April 1951 as best he could—normalcy as
        a final act of self-control.</p>
        <p class="vb-intro"><strong>c) Death on April 29, 1951:</strong>
        Ludwig Wittgenstein died two days after his birthday in his doctor's house in Cambridge.
        His last recorded words: "Tell them I've had a wonderful life."</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">5. Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Parallel within the same subtype – Robert De Niro (SE1w9):</strong>
        As with <a href="javascript:void(0)" data-route="krankheitsportraets-robert-de-niro">Robert
        De Niro</a>, also SE1w9, the same illness—prostate cancer—was processed here in two
        opposite ways. De Niro had his 2003 diagnosis treated quickly and discreetly and survived;
        Wittgenstein's diagnosis came considerably later, at a point when a cure was no longer
        possible—two variants of the same SE1 stance of not making physical warning signs a central
        concern for as long as possible, only with a different outcome.</p>
        <p class="vb-intro"><strong>b) Health as another field for one's own standard:</strong>
        For an SE1, one's own body is not a neutral stage but another field on which the inner
        demand for integrity and completeness is measured. An illness that cannot be controlled or
        averted through discipline challenges that demand in a way the SE1 finds almost
        unbearable—and precisely for that reason it is often suppressed or downplayed for a long
        time, until a clear diagnosis leaves no escape.</p>
        <p class="vb-intro"><strong>c) Why the loss of the ability to think, of all things?</strong>
        For a man whose entire self-understanding rested on the sharpness of his own thinking, an
        interpretation suggests itself: the hormone treatment struck precisely the instrument with
        which Wittgenstein had spent his life realizing his own, unforgiving demand for clarity.
        This reading is a plausible interpretation, not a documented historical causal link.</p>
        <p class="vb-intro"><strong>d) A frame without determinism:</strong>
        This does not mean that the pattern of the Self-Preservation One inevitably leads to
        cancer—<strong>anyone can develop any illness, regardless of subtype.</strong> What
        Wittgenstein's case can show is a pattern in dealing with unclear physical warning signs
        that recurs in a pronounced Self-Preservation One—one of many possible explanations, not a
        verdict.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Wittgenstein did not know his own Enneagram pattern—the concept did not yet exist in his
        lifetime. The SE1 tendency not to make weakness a central concern carried no built-in
        warning mechanism that could have moved him toward an earlier, more thorough investigation
        of the months of exhaustion. Whoever does not know their own pattern of avoiding complaint
        cannot break it in time either—for Wittgenstein, it remained an open question to the end
        whether an earlier diagnosis would have changed the course of the illness.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">6. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The course of his illness reflects, once more, <strong>Wittgenstein's</strong>
        Self-Preservation One with Nine-wing: months of downplayed exhaustion, a late, incurable
        diagnosis, and a final phase of life that, despite everything, was marked by work,
        movement, and a deliberately chosen, dignified farewell—down to his own, carefully chosen
        last words. The Eagle that kept circling alone to the very end, even once its own body
        could no longer keep pace.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ludwig-wittgenstein", label:"Portrait: Ludwig Wittgenstein (SE1w9) – life's work"},
        {route:"krankheitsportraets-robert-de-niro", label:"Illness Portrait: Robert De Niro (SE1w9) – same subtype, same illness"},
        {route:"subtype/se1", label:"Subtype Profile SE1"},
      ])}
    </div>
  `);
}

export function martinLutherKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-martin-luther-portrait.jpg" alt="Martin Luther" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Martin Luther</p>
        <p class="krim-portrait-typ">SX1w2 · Sexual Type 1 with Two-wing · 1483–1546</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Black Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Animal correspondence: Black Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Martin Luther</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-martin-luther">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work, the Black Mamba as animal motif, and
        his type structure in general. This page takes up a thread that page only touches in
        passing: the decade between 1535 and his death in 1546, in which worsening heart problems, kidney
        stones, and dizzy spells became inseparably intertwined with severe, recurring depressive
        episodes – his own "Anfechtungen."
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Luther</strong> is classified as the <strong>Sexual One with Two-wing</strong>.
        The SX1 directs its relentless demand for perfection with missionary force at a single
        cause – for Luther, the purity of doctrine. The Two wing adds concern for concrete
        individuals, but also a tendency to hide one's own exhaustion behind continued
        functioning for others rather than admitting it to oneself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Afflictions already in the monastery:</strong>
        Even as a young Augustinian monk, Luther suffered from what he himself called
        "Anfechtungen"—episodes of profound despair, guilt, and fear of death that never left
        him despite the strictest penitential practice. The pattern, then, was in place long
        before the Reformation, not merely a consequence of its burdens.</p>
        <p class="vb-intro"><strong>b) First physical complaints from the 1520s:</strong>
        Parallel to the early years of the reform movement, Luther increasingly complained of
        digestive troubles and kidney stones—symptoms he almost never used as an occasion to
        slow down his workload.</p>
        <p class="vb-intro"><strong>c) A life without recognizable recovery periods:</strong>
        Between preaching, lecturing, Bible translation, extensive correspondence, and permanent
        theological controversy, Luther had hardly any phase of real relief—a pace that
        continued for decades without external success ever easing the inner strain.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The turning point after 1527:</strong>
        Historians place a clear break around the year 1527: from then on, a recurring
        connection between circulatory problems and depressive episodes becomes visible in
        Luther, the two reinforcing each other rather than occurring independently.</p>
        <p class="vb-intro"><strong>b) Growing health instability:</strong>
        Contemporary and later medical-historical assessments describe Luther in the years
        after 1527 as increasingly unstable—phases of intense productivity alternated with
        crashes that affected body and mind alike.</p>
        <p class="vb-intro"><strong>c) The decade from 1535 to 1545 as the peak:</strong>
        These ten years are considered the phase in which illness and depression coincided most
        densely for Luther—heart trouble, dizzy spells, and tormenting self-doubt that fed on
        each other rather than alternating.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) "It isn't me":</strong>
        In his darkest moments, Luther is said to have lain on the floor, weeping, crying out
        that he "wasn't himself"—an expression of radical self-alienation that goes far beyond
        ordinary exhaustion.</p>
        <p class="vb-intro"><strong>b) No withdrawal from public life:</strong>
        Unlike some other sick figures of his time, Luther did not withdraw from public life
        despite these states—preaching, lecturing, and polemical writing continued almost
        unabated even in his hardest years.</p>
        <p class="vb-intro"><strong>c) An illness history he documented himself:</strong>
        Luther's own letters and the records of those around him—above all the later <em>Table
        Talk</em>—make his suffering unusually well documented, far beyond what survives for
        most contemporaries of his standing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Increasing dizzy spells in his final years:</strong>
        In his last decade, recurring dizzy spells were added, retrospectively interpreted as
        possible Ménière's disease—another symptom that never seriously kept Luther from his
        work.</p>
        <p class="vb-intro"><strong>b) One last journey despite visible weakness:</strong>
        In the winter of 1546, an already gravely weakened Luther traveled to Eisleben to
        mediate an inheritance dispute among the Counts of Mansfeld—a task he did not delegate
        despite evident exhaustion.</p>
        <p class="vb-intro"><strong>c) Death in his home town:</strong>
        Martin Luther died on February 18, 1546 in Eisleben, likely from heart failure or a
        stroke—in the same town where he had been born 63 years earlier.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">5. Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Parallel within the same subtype – Robbie Williams (SX1w2):</strong>
        As with <a href="javascript:void(0)" data-route="krankheitsportraets-robbie-williams">Robbie
        Williams</a>, also SX1w2, Luther shows the pattern typical of this subtype: a deep-seated,
        decades-long depression. The expression runs in the opposite direction, though: Williams
        externalized his exhaustion through addiction and public breakdowns; Luther channeled his
        afflictions almost entirely inward and into further theological work—two variants of the
        same SX1 stance of never giving in to one's own exhaustion, only with opposite outward
        expression: disclosure in Williams' case, working through exhaustion in Luther's.</p>
        <p class="vb-intro"><strong>b) Two reinforcing conditions rather than a single event:</strong>
        Unlike some other illness portraits in this Compass, Luther's case has no single dramatic
        turning point, but a steadily intensifying interplay of physical and psychological decline
        across the decade from 1535 to 1545, each feeding the other rather than running
        independently.</p>
        <p class="vb-intro"><strong>c) A shift toward the stress point:</strong>
        The stress point of the One is the Four. The symptoms of his final years—melancholy,
        radical self-alienation, tormenting self-doubt rather than the moral certainty more typical
        of the One—show a shift along the stress line typical of chronic, decades-long pressure.
        The core type remained unchanged, the sexual One with Two-wing—but the symptomatology of
        his final years increasingly carries Four-like traits.</p>
        <p class="vb-intro"><strong>d) Why the heart, of all organs?</strong>
        For a man whose entire theology revolved around faith "from the heart"—not outward works,
        but inner certainty—an interpretation suggests itself: precisely the organ that
        figuratively stands for one's own inner certainty became, in his final years, the site of
        a decline that no conviction, however firm, could halt. This reading is a plausible
        interpretation, not a documented historical causal link.</p>
        <p class="vb-intro"><strong>e) A frame without determinism:</strong>
        This does not mean that the pattern of the sexual One inevitably leads to heart disease or
        depression—<strong>anyone can develop any illness, regardless of subtype.</strong> What
        Luther's case can show is a pattern that recurs in practice around the compulsion never to
        pause one's own zeal—one of many possible explanations, not a verdict.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Luther did not know his own Enneagram pattern—the concept did not yet exist in his
        lifetime. His zeal, which tolerated no half measures, carried no built-in warning
        mechanism that could have moved him to slow down in time; on the contrary, his own
        exhaustion was evidently processed with the same logic as every theological dispute
        before it: as something to meet with even more effort, not to yield to. Whoever does not
        know their own pattern of never stopping cannot break it in time either—for Luther, that
        ended only with his death, on February 18, 1546.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">6. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The course of his illness reflects, once more, <strong>Luther's</strong> sexual One with
        Two-wing: a decade of worsening heart problems inseparably interwoven with recurring
        afflictions, and a zeal that allowed no pause to the very end—even his last journey to
        Eisleben was undertaken in service of a cause, not in service of his own recovery. The
        Black Mamba that kept biting to its last breath, even once its own body could no longer
        keep pace.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-martin-luther", label:"Portrait: Martin Luther (SX1w2) – life's work"},
        {route:"krankheitsportraets-robbie-williams", label:"Illness Portrait: Robbie Williams (SX1w2) – same subtype"},
        {route:"subtype/sx1", label:"Subtype Profile SX1"},
      ])}
    </div>
  `);
}

export function napoleonBonaparteKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-napoleon-bonaparte-portrait.jpg" alt="Napoleon Bonaparte" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Napoleon Bonaparte</p>
        <p class="krim-portrait-typ">SO2w3 · Social Type 2 with Three-wing · 1769–1821</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Napoleon Bonaparte</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-napoleon-bonaparte">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page centers on a chapter that page reduces to a footnote: decades of
        recurring stomach ailments, their dramatic escalation during his exile on St. Helena,
        and Napoleon's death in 1821 from gastric cancer – the same disease that likely
        killed his father.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Napoleon</strong> is classified as the <strong>Social Two with Three-wing</strong>.
        SO2 directs the Two's care not at a single relationship, but at an entire collective –
        Napoleon, as Naranjo would put it, invested not in reserves, but in relationship and
        loyalty on a grand scale. The Three-wing adds unconditional ambition and a refusal to
        be held back by weakness – including his own physical weakness. This exact pattern
        can be traced right into his final years, marked by pain.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) His own body as secondary to the mission:</strong>
        Napoleon's gaze was always fixed on the bigger picture – the campaign, the empire,
        his own historical role. Physical ailments were consistently treated as secondary,
        as long as they did not completely paralyze his ability to act.</p>
        <p class="vb-intro"><strong>b) Functioning through pain as a leadership imperative:</strong>
        Reports suggest that on the morning of the Battle of Waterloo, June 18, 1815, Napoleon
        was already dressed and on horseback by eight o'clock despite acute discomfort – a
        leadership stance that tolerated no visible weakness.</p>
        <p class="vb-intro"><strong>c) Physical decline in exile as a final, inescapable reality:</strong>
        Only on St. Helena, far from any stage, did this stance increasingly give way to a
        body that no longer submitted to sheer willpower.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Recurring stomach ailments over the years:</strong>
        Even before his exile, occasional stomach and digestive complaints are documented for
        Napoleon – the exact onset cannot be precisely dated in the surviving sources, but the
        pattern ran through much of his adult life.</p>
        <p class="vb-intro"><strong>b) A historically disputed episode at Waterloo:</strong>
        His brother Jérôme later reported that Napoleon suffered from acutely inflamed
        hemorrhoids and bladder problems that day. The theory that this affected his tactical
        decisions, and thus the defeat, is popular in historiography but disputed and not
        conclusively proven.</p>
        <p class="vb-intro"><strong>c) Increasing weight in his later years:</strong>
        Reconstructions based on surviving clothing show a marked weight gain from around 67
        to about 90 kilograms between 1808 and 1820 – a loss of control over his own body
        that stood in contrast to his usual discipline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Deterioration from 1818 onward:</strong>
        In exile on St. Helena, nausea, stomach pain, and urinary problems intensified from
        1818 onward. From September 1820, more frequent attacks followed with vomiting,
        fever, and loss of appetite; by December 1820, Napoleon could barely walk.</p>
        <p class="vb-intro"><strong>b) Rapid decline in his final months:</strong>
        Between October 1820 and February 1821, his condition deteriorated dramatically:
        persistent abdominal pain, vomiting, a marked aversion to meat, difficulty swallowing,
        night sweats, and progressive weakness. In his final year, he lost about eleven
        kilograms.</p>
        <p class="vb-intro"><strong>c) Death on May 5, 1821:</strong>
        Napoleon died at age 51 on St. Helena. The autopsy found an infiltrative, ulcerative
        gastric carcinoma with an eroding hemorrhage as the likely immediate cause of death –
        a finding widely accepted today in medical-historical research.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A debunked conspiracy theory:</strong>
        The long-popular theory that Napoleon was poisoned with arsenic is now considered
        largely disproven by several independent modern tissue analyses – elevated arsenic
        levels are more likely attributed to era-typical environmental exposure than to
        deliberate poisoning.</p>
        <p class="vb-intro"><strong>b) A scientific consensus that has outlasted the legend:</strong>
        Unlike the poisoning theory, the gastric cancer diagnosis is autopsy-based and
        considered solidly supported in the field – a sober, if less dramatic, explanation
        than the murder theory that circulated for decades.</p>
        <p class="vb-intro"><strong>c) The Waterloo theory as a symbol of his entire illness course:</strong>
        Whether physical ailments actually influenced the battle or not, the story itself
        illustrates just how inseparably Napoleon's body and his historical actions became
        intertwined in public perception.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Functioning to the limit of the bearable:</strong>
        The willingness to sit in the saddle and command a battle despite acute pain shows
        the Three-wing energy of the SO2 in its purest form: performance delivered until the
        body literally cannot anymore.</p>
        <p class="vb-intro"><strong>b) The loss of the stage as the actual turning point:</strong>
        Only once exile also took away the audience Napoleon lived for did his physical
        decline begin to show itself unchecked – as though the energy of the Social Two had
        previously carried the body along with it.</p>
        <p class="vb-intro"><strong>c) The Golden Retriever that fought for a greater whole to the end:</strong>
        Even in the face of his own physical decline, Napoleon dictated his memoirs on St.
        Helena – one last attempt to keep acting for an audience, for posterity.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A pattern recurring over decades:</strong>
        From occasional stomach complaints during the campaign years to the fatal carcinoma
        on St. Helena, a recognizable, if long unacknowledged, line runs through Napoleon's
        adult life.</p>
        <p class="vb-intro"><strong>b) A striking family parallel:</strong>
        Napoleon's father, Carlo Buonaparte, died in 1785 after years of increasing weakness,
        also from gastric cancer. Napoleon himself expressed fear on St. Helena of sharing his
        father's fate – a fear that proved justified.</p>
        <p class="vb-intro"><strong>c) The body as the one front that could not be commanded:</strong>
        A man who commanded entire armies and half of Europe could not command his own
        stomach – a contrast that marked Napoleon's final years on St. Helena.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the stomach?</strong>
        For a Social Two with Three-wing, whose entire identity hinged on visible achievement
        and care for a large collective, one reading suggests itself: the stomach is the
        organ that must literally digest what comes from outside – for Napoleon, for
        decades, an excess of responsibility, pressure, and unchecked ambition, with never any
        room left to digest, in the figurative sense. That precisely this organ failed in the
        end, in an exile that for the first time in his life left him nothing to digest but
        his own past, reads as the consistent conclusion of this pattern. This reading is a
        plausible interpretation, not a documented historical causal link, and is explored in
        more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Social Two's pattern inevitably leads to stomach disease –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Napoleon's case can show is a pattern that stands out again and again in practice
        wherever performance and care for a larger whole are prioritized uncompromisingly
        over one's own bodily signals – one possible explanation among many, not a verdict.
        The corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Napoleon did not know his own pattern – the social Two with Three-wing suppresses its own vulnerability in favor of the next great task, and that is exactly what let him ignore decades of stomach complaints, even when they may have impaired his strategic judgment at Waterloo. Someone who does not know their own pattern of suppression ultimately risks the very thing they sacrificed everything else for.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Two with Three-wing is confirmed once more in <strong>Napoleon's</strong> own
        illness: decades of accepted stomach ailments, a disputed but symbolic
        episode at Waterloo, and a death in 1821 that echoed his father's fate almost exactly.
        The Golden Retriever who mobilized entire armies, until his own body became the last,
        insurmountable front.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-napoleon-bonaparte", label:"Portrait: Napoleon Bonaparte (SO2w3) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function oprahWinfreyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-oprah-winfrey-portrait.jpg" alt="Oprah Winfrey" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Oprah Winfrey</p>
        <p class="krim-portrait-typ">SP2w3 · Self-Preservation Type 2 with Three-wing · b. 1954</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hippopotamus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se2.jpg" alt="Animal correspondence: Hippopotamus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE2")};left:${tierAvatarLeft("SE2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Oprah Winfrey</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-oprah-winfrey">portrait under Famous
        Personalities</a> in this Compass – that page covers her rise from poverty in
        Mississippi to her own media empire. This page delves into a chapter only glossed over
        there: the childhood in which Oprah Winfrey was sexually abused by several family
        members and acquaintances over several years, starting at around age nine, became
        pregnant at 14, and lost her son a few weeks after birth – and how, decades later, she
        turned that story into a central, publicly shared part of her media work. This page
        deliberately omits details of the acts themselves and focuses on disclosure, processing,
        and impact.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Oprah Winfrey</strong> is classified as the <strong>Self-Preservation Type 2
        with Three-wing</strong>. Naranjo called this subtype <em>Me First</em>: one's own
        survival must be secured first before care for others becomes possible at all. The
        Three-wing gives this care an unmistakably public format – for Oprah Winfrey, the
        decision not to hide her own most vulnerable story, but to turn it, in front of a
        mass audience, into a tool for other people's healing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A childhood split between several households:</strong>
        Oprah Winfrey spent her earliest years in poverty with her grandmother in rural
        Mississippi before moving between her mother's household in Milwaukee and her father's
        in Nashville – an unstable environment without consistent protection.</p>
        <p class="vb-intro"><strong>b) Abuse beginning at around age nine:</strong>
        As Oprah Winfrey has stated publicly, she was first sexually abused by a relative at
        around age nine – the start of a years-long period during which several family members
        and family acquaintances abused her.</p>
        <p class="vb-intro"><strong>c) A secret she carried alone for years:</strong>
        She told no one about these experiences for years – a silence she later described as
        one of the heaviest burdens of her youth, compounded by the sense that she could trust
        no one in her own predicament.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Continued abuse into her teenage years:</strong>
        By her own account, the abuse continued until she was fourteen, carried out by several
        perpetrators from her close family and acquaintance circle – not a single incident, but
        a pattern repeated over years.</p>
        <p class="vb-intro"><strong>b) Pregnant at 14:</strong>
        At 14, Oprah Winfrey became pregnant. Out of shame, she concealed the pregnancy for as
        long as possible, until it became visible through physical signs.</p>
        <p class="vb-intro"><strong>c) The death of her son weeks after birth:</strong>
        Her son was born prematurely and died a few weeks later in the hospital – a loss she
        did not speak about at length in public until decades afterward.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The public disclosure on November 10, 1986:</strong>
        During an episode of her own talk show on the subject of sexual abuse, featuring both
        survivors and offenders, Oprah Winfrey disclosed live in front of millions of viewers
        that she herself had been abused as a child – a rare public break of silence at the
        time by someone so well known.</p>
        <p class="vb-intro"><strong>b) A relative sells the story to a tabloid in 1990:</strong>
        In 1990, a family member approached the tabloid press and sold details about Winfrey's
        teenage pregnancy – a renewed, this time unwanted disclosure that forced her to keep
        publicly owning her story rather than denying it.</p>
        <p class="vb-intro"><strong>c) Advocacy for the National Child Protection Act:</strong>
        In 1991, Oprah Winfrey testified before the US Senate Judiciary Committee, drawing on
        her own story to advocate for a national database of convicted child abusers. The
        resulting law was signed in 1993 and became known informally as the "Oprah Bill."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A talk show that made trauma a recurring subject:</strong>
        Over the decades, <em>The Oprah Winfrey Show</em> returned repeatedly to child abuse
        and its consequences – not a one-time confession, but a lasting part of her journalistic
        and therapeutic work in front of the camera.</p>
        <p class="vb-intro"><strong>b) Books and reflection as a second stage:</strong>
        In interviews, her magazine, and books such as <em>What I Know For Sure</em>, she
        repeatedly returned to childhood, vulnerability, and healing – her own story remained a
        recurring thread of her public work for decades.</p>
        <p class="vb-intro"><strong>c) The Oprah Winfrey Leadership Academy for Girls:</strong>
        In 2007, she founded the Oprah Winfrey Leadership Academy for Girls in South Africa, a
        school for girls from disadvantaged backgrounds – a project that translates her own
        experience of poverty and vulnerability directly into concrete care for other girls.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Care that begins with one's own story:</strong>
        For a Self-Preservation Two, whose care starts with her own foundation, her own
        childhood story became the starting point itself: only by acknowledging and publicly
        disclosing her own vulnerability could she turn it into a tool for others.</p>
        <p class="vb-intro"><strong>b) The Three-wing as the drive to turn personal suffering into a public format:</strong>
        Instead of keeping the story private, Oprah Winfrey made it a recurring part of her
        show, her books, and her political advocacy – typical of the Three-wing, which turns
        even the heaviest chapter into a visible, effective statement meant to reach as many
        people as possible.</p>
        <p class="vb-intro"><strong>c) From personal wound to structural change:</strong>
        That she carried her personal story all the way to the US Senate and translated it into
        concrete legislation to protect other children shows the typical SP2w3 movement: from
        one's own hardship to tangible, institutional care for others.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A wound in exactly the place where her later strength was built:</strong>
        The early experience of abuse, powerlessness, and silence concerned precisely the area
        – her own, most vulnerable story – that Oprah Winfrey later made the foundation of her
        public impact. What she had to hide as a child became, decades later, the source of her
        greatest influence.</p>
        <p class="vb-intro"><strong>b) Years of silence first, then a deliberate, repeated disclosure:</strong>
        Roughly two decades passed between experiencing the abuse and the first public
        disclosure in 1986 – a pattern typical of the Self-Preservation Two: secure one's own
        stability and professional foundation first, before carrying the most vulnerable story
        outward.</p>
        <p class="vb-intro"><strong>c) Why did her own childhood story of all things become a recurring public subject?</strong>
        For a Self-Preservation Two with Three-wing, whose care starts with her own foundation
        and who also seeks measurable impact, one interpretation suggests itself in the repeated
        public disclosure of her own abuse history: her own deepest vulnerability is no longer
        hidden but is used – in the Three-wing's typical public format – to have the greatest
        possible effect for others. This interpretation is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean that the Self-Preservation Two with Three-wing pattern inevitably
        leads to experiences of abuse or explains them – <strong>any person can become a victim
        of abuse regardless of subtype, and no subtype bears any responsibility for it.</strong>
        What Oprah Winfrey's case illustrates is a pattern in how a pronounced Self-Preservation
        Two with Three-wing later handles an injury already suffered – one of many possible
        interpretations, not a judgment. The corresponding illness pattern is gradually being
        developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        For much of her life, Oprah Winfrey did not consciously know her own Enneagram pattern,
        like most people. Without that knowledge, she nonetheless lived out exactly the
        Self-Preservation Two with Three-wing pattern: first silently enduring her own hardship,
        then, once her own foundation was secure, turning her most vulnerable personal story
        into the largest, most publicly effective format possible. That she did not recognize
        this pattern as a character trait but simply lived it explains why a single 1986
        confession grew, over decades, into a continuous life theme that shaped her talk show,
        her books, and her political advocacy alike.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Self-Preservation Two with Three-wing is visible in <strong>Oprah Winfrey's</strong>
        handling of her own childhood story: years of silence first, to secure her own
        foundation, then a deliberate, repeated public disclosure that became a tool of healing
        for millions. The hippopotamus that once had to fight for its own survival ultimately
        defended its territory not only for itself, but opened it – as a safe shore for
        everyone who recognized themselves in its story.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-oprah-winfrey", label:"Portrait: Oprah Winfrey (SP2w3) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se2", label:"Subtype Profile SP2"},
      ])}
    </div>
  `);
}

export function robertDeNiroKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robert-de-niro-portrait.jpg" alt="Robert De Niro" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robert De Niro</p>
        <p class="krim-portrait-typ">SE1w9 · Self-Preservation Type 1 with Nine-Wing · b. 1943</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robert De Niro</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-robert-de-niro">Famous
        Personalities portrait</a>. This page delves into a chapter not covered there: a
        prostate cancer diagnosis in 2003 that he had treated largely in private and only
        briefly commented on publicly.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>De Niro</strong> is assigned to the <strong>self-preservation Type 1 with
        Nine-Wing</strong>. The SE1 directs its demand for accuracy inward, at its own
        preparation and integrity; the Nine-Wing adds a reticence that does not need to show
        itself publicly to have effect. Exactly this combination – precise, decisive medical
        treatment alongside almost complete public restraint – shaped how he dealt with his
        cancer diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis in 2003:</strong>
        De Niro was diagnosed with prostate cancer in 2003 during a routine checkup – an
        early point of diagnosis that significantly favored successful treatment.</p>
        <p class="vb-intro"><strong>b) No extensive public announcement:</strong>
        Unlike many other public figures with comparable diagnoses, De Niro did not issue a
        detailed public statement, letting the news become known briefly through media
        reports instead.</p>
        <p class="vb-intro"><strong>c) Prompt initiation of treatment:</strong>
        By consistent accounts, De Niro began treatment promptly after the diagnosis without
        publicly accompanying the process.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Successful treatment without lasting public visibility:</strong>
        The treatment proceeded successfully according to all available reports, without De
        Niro making the course of the illness an ongoing public topic.</p>
        <p class="vb-intro"><strong>b) A few, very brief later mentions:</strong>
        In rare later interviews, De Niro mentioned the illness only briefly, usually in
        connection with encouraging other men to get regular checkups.</p>
        <p class="vb-intro"><strong>c) No withdrawal from acting work:</strong>
        Unlike with some colleagues, the diagnosis caused no noticeable interruption to his
        film work – De Niro remained continuously active during and after the treatment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Occasional public use for raising awareness:</strong>
        In the years after his recovery, De Niro used isolated public occasions to point out
        the importance of early prostate cancer screening.</p>
        <p class="vb-intro"><strong>b) No illness narrative as part of his public image:</strong>
        Unlike actors who made their medical history a recurring topic in interviews, De
        Niro's illness remained a peripheral aspect of his public biography.</p>
        <p class="vb-intro"><strong>c) Continued high professional productivity:</strong>
        In the two decades after the diagnosis, De Niro made dozens more films, including
        several with Martin Scorsese, without the earlier illness being publicly
        addressed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Discreet attention rather than a public campaign:</strong>
        De Niro's brief, rare mentions of his own illness still generated occasional media
        attention for prostate cancer screening, without him becoming the central public
        voice on the topic.</p>
        <p class="vb-intro"><strong>b) No dramatized recovery narrative:</strong>
        Unlike with some other celebrity cancer illnesses, there is no extensive,
        emotionally charged public account of De Niro's recovery process.</p>
        <p class="vb-intro"><strong>c) A public image left practically untouched by the illness:</strong>
        De Niro's public image remained practically untouched by the cancer illness – his
        film roles and his reputation as a craftsman continued to dominate.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Precise treatment without public staging:</strong>
        The SE1's characteristic precision in handling its own affairs also showed in the
        cancer treatment: consistent, promptly initiated, without the process itself
        becoming the subject of public attention.</p>
        <p class="vb-intro"><strong>b) The Nine-Wing and withdrawing once the task is done:</strong>
        The same restraint that lets De Niro return to silence after every film shoot showed
        in how he handled his own illness: once treatment was complete, the topic almost
        entirely disappeared from his public presence.</p>
        <p class="vb-intro"><strong>c) Prevention as a factual message, not a personal confession:</strong>
        Whenever De Niro mentioned the illness at all, it took the form of a factual
        recommendation to other men, not an extensive personal account – truthfulness in the
        craft of the message, without unnecessary self-presentation.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A master of preparation who treated his own illness just as methodically:</strong>
        De Niro's entire body of work rests on meticulous, near-scientific preparation – the
        same methodology carried over into how he dealt with his own cancer diagnosis:
        promptly recognized, consistently treated, without unnecessary public
        dramatization.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        Parallels appear with
        <a href="javascript:void(0)" data-route="krankheitsportraets-konrad-adenauer">Konrad
        Adenauer</a> and
        <a href="javascript:void(0)" data-route="krankheitsportraets-astrid-lindgren">Astrid
        Lindgren</a> (both also SE1w9): all three met health limitations with disciplined,
        practical action rather than public attention. All SE1w9s show the same pattern: the
        illness is solved like a task – thoroughly, but without a stage.</p>
        <p class="vb-intro"><strong>c) Why the prostate, of all things, a quiet, rarely discussed organ?</strong>
        For a self-preservation One with a Nine-Wing whose entire work rests on methodical
        preparation combined with public restraint, one interpretation suggests itself:
        exactly an organ that society rarely discusses openly became the site of his own,
        equally discreetly handled illness. This reading is a plausible interpretation, not a
        proven clinical causal link, and will be developed further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the self-preservation One's pattern inevitably leads to
        prostate cancer – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in De Niro's case is a pattern in dealing with a
        successfully treated illness that keeps recurring in a pronounced self-preservation
        Type 1 with a Nine-Wing – one of many possible readings, not a verdict. The
        corresponding illness pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        De Niro does not know his own pattern as an Enneagram structure – the
        self-preservation Type 1 with a Nine-Wing reflexively clings to its own quiet
        self-sufficiency instead of openly sharing health matters, and largely lives out
        exactly this pattern unchanged to this day. Anyone who does not recognize their own
        tendency to handle even serious matters methodically and without public discussion as
        a pattern risks that important health messages to others go unspoken.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 1 with Nine-Wing explains much about how <strong>Robert De
        Niro</strong> handled his prostate cancer: a man whose entire craft rests on precise,
        quiet preparation treated his own illness as a task to be solved and then left behind
        – the eagle that circled its territory, struck when necessary, and returned to
        silence afterward.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-robert-de-niro", label:"Portrait: Robert De Niro (SE1w9)"},
        {route:"krankheitsportraets-konrad-adenauer", label:"Illness Portrait: Konrad Adenauer (SE1w9) – same subtype"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Illness Portrait: Astrid Lindgren (SE1w9) – same subtype"},
        {route:"krankheitsportraets-ludwig-wittgenstein", label:"Illness Portrait: Ludwig Wittgenstein (SE1w9) – same subtype, same illness"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SE1"},
      ])}
    </div>
  `);
}

export function salvatoreRiinaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/salvatore-riina-portrait.jpg" alt="Salvatore Riina" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Salvatore Riina</p>
        <p class="krim-portrait-typ">SP8w9 · Self-Preservation Type 8 with Nine-wing · 1930–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Orangutan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Animal correspondence: Orangutan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Salvatore Riina</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="kriminalpsychologie-salvatore-riina">criminal-psychology portrait</a>
        – that page covers his rise to Italy's most powerful Mafia boss and 23 years in
        hiding. This page goes deeper into a chapter mentioned there only in passing: a
        years-long health decline in high-security custody, repeatedly denied requests for
        release on medical grounds, and a death in 2017 in the hospital wing of Parma prison.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Riina</strong> is assigned to the <strong>Self-Preservation Type 8 with
        Nine-wing</strong>. For SP8, power is an instrument of security, not a stage – control
        over one's own territory at any cost. This same refusal to ever relinquish control
        also determined how his defense team fought for his release until the very end, even
        after his body had long stopped allowing any control at all.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Progressive kidney disease from the 2010s:</strong>
        In the years before his death, Riina increasingly suffered from chronic kidney
        failure, requiring regular medical treatment within the prison.</p>
        <p class="vb-intro"><strong>b) First requests for release on medical grounds:</strong>
        His defense team repeatedly petitioned for a suspension of his sentence on health
        grounds – the courts repeatedly denied these, citing his continued dangerousness as a
        Mafia boss.</p>
        <p class="vb-intro"><strong>c) A stroke in July 2017:</strong>
        A severe stroke left Riina in a coma-like state from which he never fully recovered.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Transfer to the Parma prison hospital wing:</strong>
        After the stroke, Riina was moved to the medical facility of Parma prison, where
        severely ill inmates were treated under continued high-security guard.</p>
        <p class="vb-intro"><strong>b) A renewed, more urgent request for release:</strong>
        Given his now clearly life-threatening condition, his defense team filed a final,
        urgent request for release on medical grounds – this too was denied by the courts.</p>
        <p class="vb-intro"><strong>c) No public acknowledgment of his own mortality:</strong>
        Even in this final phase, there are no reports of a public statement by Riina himself
        acknowledging his approaching death – only the legal petitions of his defense spoke
        on his behalf.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Complete isolation despite approaching death:</strong>
        Even in his coma-like, dying state, Riina formally remained subject to the strict
        41-bis prison regime reserved for Italy's most dangerous Mafia inmates – no easing of
        conditions, even once he was no longer responsive.</p>
        <p class="vb-intro"><strong>b) Courts affirmed his continued dangerousness:</strong>
        The repeated denials of his release petitions explicitly relied on the assessment
        that Riina's symbolic authority within Cosa Nostra persisted even as he lay dying.</p>
        <p class="vb-intro"><strong>c) Death on November 17, 2017, in Parma:</strong>
        Salvatore Riina died at age 87 in the hospital wing of Parma prison – 24 years after
        his arrest, never having been free again.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A death that sparked public debate on incarceration:</strong>
        The repeated denial of his release petitions despite his evidently dying condition
        ignited a public debate in Italy over the limits of high-security detention for
        terminally ill inmates.</p>
        <p class="vb-intro"><strong>b) No symbol, no final gesture:</strong>
        Unlike some other historical figures in this Compass, there is no recorded final
        message, no symbolic gesture – only the quiet, still formally guarded death of a man
        who had claimed complete control over his environment throughout his life.</p>
        <p class="vb-intro"><strong>c) A funeral without public ceremony:</strong>
        Unlike other Mafia bosses of earlier generations, no publicly visible funeral service
        took place – a quiet exit for a man whose power had never expressed itself through
        display, but through silent control.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Control until the last breath – through the defense:</strong>
        The same refusal to ever relinquish control that shaped Riina's entire life showed
        itself in the legal petitions of his defense attorneys, who fought for his release
        until the end – a final, delegated attempt to still turn his fate around.</p>
        <p class="vb-intro"><strong>b) When Self-Preservation Eight under chronic stress becomes a Five:</strong>
        His own portrait already describes how his decades of hiding in the underground
        carried traits of the stress point Five – total withdrawal, isolation, observation
        instead of open confrontation. In his final phase of life, in the coma-like state of
        the hospital wing, this pattern completed itself literally: a complete, physical
        isolation from the world he once controlled – while the core type itself, SE8w9,
        remained unchanged.</p>
        <p class="vb-intro"><strong>c) No visible capitulation:</strong>
        Unlike some other illness histories in this Compass, there are no reports of a public
        admission of weakness or remorse – the courts, until the very end, continued to
        assess the hardness with which he had led his life as persisting, regardless of his
        actual physical condition.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that escaped control:</strong>
        Riina's entire life was shaped by the conviction that his own domain – Sicily, Cosa
        Nostra, his clan – was fully controllable through vigilance and hardness. Kidney
        failure and stroke were the first threats that neither loyalty nor intimidation could
        stop.</p>
        <p class="vb-intro"><strong>b) From silent power to silent powerlessness:</strong>
        A man whose entire power rested on inconspicuous, quiet control – "no villas, no
        public appearances, no display," as his own portrait describes – spent his final
        months in a silence that was no longer chosen, but imposed.</p>
        <p class="vb-intro"><strong>c) Why a stroke, of all things?</strong>
        For a Self-Preservation Eight with Nine-wing whose entire power rested on vigilant
        observation and the ability to act decisively at the crucial moment, one
        interpretation suggests itself: precisely the organ that enabled vigilance,
        observation and decision-making became the site of decay – placing him in exactly the
        state of complete unresponsiveness that he would have judged, in others, as fatal
        weakness throughout his life. This interpretation is a plausible reading, not a
        documented historical causal link, and is developed further in this Compass's
        psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of Self-Preservation Eight inevitably leads to kidney
        failure or stroke – <strong>anyone can develop any illness, regardless of
        subtype.</strong> What Riina's case shows is a pattern in how a pronounced
        Self-Preservation Eight with Nine-wing repeatedly deals with physical decline – one
        possible reading among many, not a verdict. The corresponding illness profile is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Riina did not know his own pattern – Self-Preservation Eight with Nine-wing meets
        every threat to its own territory reflexively with control and quiet hardness rather
        than ever confronting its own vulnerability, and exactly this pattern still governed
        the legal battles over his release into his final days. Whoever does not recognize
        their own need to retain all control as a pattern cannot set it aside even in their
        own dying.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Self-Preservation Eight with Nine-wing explains much about the course of
        <strong>Riina's</strong> own illness: a man whose entire life rested on silent,
        unchallenged control over his territory spent his final months in a state of
        complete, imposed powerlessness – the orangutan who ruled his forest not through
        display but through sheer presence, ultimately lost even that presence.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The type
        assignment is a psychological hypothesis, not a historical verdict. Salvatore Riina
        was convicted in numerous trials of murder and Mafia association and sentenced to
        multiple life terms; he died in custody in 2017. The Enneagram explains, it does not
        justify.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"kriminalpsychologie-salvatore-riina", label:"Criminal Psychology: Salvatore Riina (SP8w9) – boss of Cosa Nostra"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se8", label:"Subtype Profile SP8"},
      ])}
    </div>
  `);
}

export function umbertoEcoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-umberto-eco-portrait.jpg" alt="Dr. Umberto Eco" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Umberto Eco</p>
        <p class="krim-portrait-typ">SE8w7 · Self-Preservation Type 8 with Seven-Wing · 1932–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Orangutan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Animal correspondence: Orangutan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Umberto Eco</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-umberto-eco">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: a
        pancreatic cancer illness kept almost entirely private for roughly two years, during
        which Eco kept publishing, teaching, and appearing in public without interruption
        until a few months before his death in February 2016.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Eco</strong> is assigned to the <strong>self-preservation Type 8 with
        Seven-Wing</strong>. The SE8 secures abundance and independence rather than submitting
        to any outside authority – including its own diagnosis; the Seven-Wing brings the
        lightness with which Eco himself never let even a fatal diagnosis become the
        dominant theme of his life. Exactly this combination – abundance and enjoyment right
        up to the end, combined with a refusal to present himself as a sick man – shaped how
        he dealt with his own illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis about two years before his death:</strong>
        According to consistent biographical sources, Eco was diagnosed with pancreatic
        cancer roughly two years before he died.</p>
        <p class="vb-intro"><strong>b) Almost complete secrecy in public life:</strong>
        Unlike many public figures, the diagnosis remained largely unknown outside his
        closest circle – Eco practically never spoke about his illness in interviews or
        public appearances.</p>
        <p class="vb-intro"><strong>c) Undiminished literary output:</strong>
        Despite the diagnosis, Eco published his final novel, "Numero Zero," in 2015 – a work
        showing no sign whatsoever of diminished creative power.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Continued public appearances until shortly before his death:</strong>
        Eco gave lectures, interviews, and took part in public discussions until a few months
        before his death – without observers knowing of his serious illness.</p>
        <p class="vb-intro"><strong>b) No public illness narrative:</strong>
        Unlike other intellectuals of his generation, Eco never made his illness the subject
        of an essay, a column, or an interview – a deliberate decision to separate his work
        from his private suffering.</p>
        <p class="vb-intro"><strong>c) Family rather than public accompaniment:</strong>
        Eco spent his final months surrounded by his family in Milan, largely shielded from
        public attention.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Death on 19 February 2016 in Milan:</strong>
        Umberto Eco died at age 84 in his home in Milan, surrounded by his family.</p>
        <p class="vb-intro"><strong>b) Worldwide condolences only after the official announcement:</strong>
        Only with the news of his death was the public informed of the cancer – a surprise
        for many readers and colleagues, since Eco had shown no sign of withdrawal until the
        very end.</p>
        <p class="vb-intro"><strong>c) No explicit farewell work:</strong>
        Unlike some authors who write an explicit legacy work in the face of death, Eco left
        no book that could openly be read as a farewell to his own mortality – "Numero Zero"
        remains a novel about media manipulation, not an illness book.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide mourning and tribute:</strong>
        Eco's death triggered obituaries and tributes worldwide, highlighting above all his
        encyclopedic body of work and his intellectual curiosity into old age.</p>
        <p class="vb-intro"><strong>b) Surprise at the extent of the secrecy:</strong>
        Numerous colleagues expressed surprise at how completely Eco had kept his illness
        hidden from the public and even from parts of his own professional circle.</p>
        <p class="vb-intro"><strong>c) An image of unbroken vitality until the end:</strong>
        The public image of Eco right up to his death was that of a tirelessly curious,
        productive intellectual – not that of a gravely ill man.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Abundance instead of withdrawal as the answer to the diagnosis:</strong>
        The SE8's characteristic conviction that security comes from abundance showed in the
        fact that Eco did not reduce his productivity, his reading, his collecting, or his
        public appearances despite the diagnosis, but continued them right to the end.</p>
        <p class="vb-intro"><strong>b) The Seven-Wing and the refusal to present himself as ill:</strong>
        The same lightness with which Eco wrote about semiotics and pop culture with equal
        curiosity showed in dealing with his own illness as a deliberate decision not to make
        his own mortality a public topic.</p>
        <p class="vb-intro"><strong>c) Control through discretion rather than confrontation:</strong>
        Unlike a more confrontational Eight, Eco did not choose an open fight against the
        illness as a public gesture, but complete control over the information itself – power
        through silence rather than through display.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A collector of abundance who did not let his own finitude be collected:</strong>
        Eco's entire body of work rested on the conviction that knowledge, books, and
        experience could be accumulated without limit – exactly the one limit that could not
        be deferred remained completely absent from his public work.</p>
        <p class="vb-intro"><strong>b) Why the pancreas, of all organs, the quiet one?</strong>
        For a self-preservation Type 8 with a Seven-Wing whose entire life principle was
        abundance, enjoyment, and the encyclopedic appropriation of the world, one
        interpretation suggests itself: exactly an organ that stays symptomless for a long
        time and eludes early control became the site of an illness that Eco did not try to
        control publicly, but simply concealed until the end. This reading is a plausible
        interpretation, not a proven clinical causal link, and will be developed further in
        this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the self-preservation Eight's pattern inevitably leads to
        pancreatic cancer – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Eco's case is a pattern in dealing with a fatal
        diagnosis that keeps recurring in a pronounced self-preservation Type 8 – one of many
        possible readings, not a verdict. The corresponding illness pattern is being developed
        gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Eco did not know his own pattern as an Enneagram structure – the self-preservation
        Type 8 reflexively clings to sovereignty over its own information instead of sharing
        its own vulnerability with others in time, and lived out exactly this pattern
        unchanged until his final work. Anyone who does not recognize their own tendency to
        guard control over their own image at all costs as a pattern risks that the truth
        only comes to light with death itself.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 8 with Seven-Wing explains much about how <strong>Umberto
        Eco</strong> handled his own illness: a man whose entire work rested on the joyful
        abundance of knowledge treated his own fatal diagnosis as private territory no one
        was allowed to enter – the orangutan who sat enthroned in his tree until the very end,
        letting no one see that the branch had already cracked.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-umberto-eco", label:"Portrait: Umberto Eco (SE8w7)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se8", label:"Subtype Profile SE8"},
      ])}
    </div>
  `);
}

export function winstonChurchillKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-winston-churchill-portrait.jpg" alt="Winston Churchill – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Winston Churchill</p>
        <p class="krim-portrait-typ">SE8w9 · Self-Preservation Type 8 with Nine-wing · 1874–1965</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Orangutan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Animal correspondence: Orangutan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Winston Churchill</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-winston-churchill">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with two chapters only briefly touched on there: his
        lifelong, recurring depression, which he himself called "the black dog,"
        and a severe stroke in June 1953, which he kept concealed as Prime Minister for weeks
        from the public, the press, and much of his own cabinet.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Churchill</strong> is classified as the <strong>Self-Preservation Eight with
        Nine-wing</strong> – the same subtype as
        <a href="javascript:void(0)" data-route="beruehmte-golda-meir">Golda Meir</a>
        in this Compass. Naranjo called the Self-Preservation Eight <em>Satisfacción</em>:
        safety arises from the uncompromising defense of one's own territory and the refusal
        to show weakness. The Nine-wing adds the stamina to hold a position for years without
        prematurely triumphing or giving up – for Churchill, this extended to how he handled
        his own health.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Confrontational, direct, appraising:</strong>
        Churchill's gaze in speeches and film footage was always turned outward, ready for
        resistance – the typical "orangutan gaze" of the Eight, which allows no weakness.</p>
        <p class="vb-intro"><strong>b) Unshakeable outward, hidden inward:</strong>
        Publicly, Churchill never showed doubt or fear – the depression that accompanied him
        his whole life, and the stroke of 1953, he concealed with the same determination he
        used against political opponents.</p>
        <p class="vb-intro"><strong>c) Watchful against any sign of losing control:</strong>
        Wherever a publicly visible weakness could have undermined his authority, Churchill
        responded with immediate information control – typical Self-Preservation Eight: one's
        own territory includes the image others hold of oneself.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The office as territory to be defended:</strong>
        Even with advancing age and visibly declining health, Churchill did not consider
        resigning – 10 Downing Street was territory an SE8 does not vacate voluntarily.</p>
        <p class="vb-intro"><strong>b) Appetite as a life principle:</strong>
        Cigars, whisky, lavish food into old age – the Self-Preservation Eight secures
        abundance and intensity, regardless of medical warnings.</p>
        <p class="vb-intro"><strong>c) Control over his own narrative:</strong>
        With the help of press baron Lord Beaverbrook and loyal doctors, Churchill deliberately
        steered what became public about his health – the Eight decides for herself which
        image of her reaches the world.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Persisting despite visible decline:</strong>
        After the stroke in June 1953, Churchill's left side was paralyzed for days and his
        speech impaired – yet he was leading the country again within weeks, as if nothing had
        happened.</p>
        <p class="vb-intro"><strong>b) Endurance instead of haste, thanks to the Nine-wing:</strong>
        Where an SE8w7 might have pushed impatiently for a quick recovery, Churchill took time
        to recuperate – in secrecy, but without relinquishing his position.</p>
        <p class="vb-intro"><strong>c) Loyal complicity as a shield:</strong>
        Cabinet members, doctors, and journalists who knew the severity of the stroke kept it
        uniformly quiet – a network that defended Churchill's territory without his needing to
        actively enforce it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Appearing unassailable even in weakness:</strong>
        The public remained largely unaware of the stroke during his lifetime – Churchill
        appeared, until the end, as the rock he wanted to be.</p>
        <p class="vb-intro"><strong>b) Respect earned through demonstrated resilience:</strong>
        Precisely because he showed no weakness, the myth of his unshakeability grew – an
        effect the SE8 cultivates, consciously or not.</p>
        <p class="vb-intro"><strong>c) An image that still resonates today:</strong>
        Only decades after his death did the full extent of his health crises become publicly
        known – evidence of how completely the information control had worked.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Uncompromising self-expenditure:</strong>
        Churchill worked, smoked, and drank into old age with the same intensity as in his
        youth – the SE8 knows little moderation as long as her own strength holds.</p>
        <p class="vb-intro"><strong>b) The black dog as counterpoint:</strong>
        His recurring depression stood in sharp contrast to the public facade – an inner
        exhaustion he kept almost entirely private his whole life.</p>
        <p class="vb-intro"><strong>c) Control at the cost of the body:</strong>
        The will to master his own weakness rather than yield to it took its toll – multiple
        strokes and increasing physical frailty marked his final years.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) The black dog, a lifelong companion:</strong>
        Churchill suffered recurring severe depressive episodes he himself called "the black
        dog." He rarely spoke of it openly – a rare admission of weakness from a man who never
        showed one publicly.</p>
        <p class="vb-intro"><strong>b) A concealed stroke while in office:</strong>
        On June 23, 1953, Churchill suffered a severe stroke during a dinner at 10 Downing
        Street. His cabinet was only partially informed, and the public was told he was
        suffering from "exhaustion." He withdrew for weeks to recover, without his office or
        authority ever being seriously questioned.</p>
        <p class="vb-intro"><strong>c) Return to office and public life as proof of strength:</strong>
        In October 1953 – against his doctors' advice, but with visibly restored strength –
        Churchill delivered a party conference speech that served as proof he remained fit to
        govern. The Self-Preservation Eight demonstrates strength not through words but
        through the sheer fact of continuing.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-golda-meir">Golda Meir</a> (SE8w9)
        likewise led her country as Prime Minister while keeping a serious illness (lymphoma)
        largely secret for years, without relinquishing her office. Both cases show the same
        SE8 pattern: one's own position is defended like territory – illness is not a reason
        to voluntarily vacate it, but information one controls oneself.</p>
        <p class="vb-intro"><strong>e) Why the brain, of all places?</strong>
        A stroke strikes exactly the organ that governs control, speech, and the capacity to
        act – for a Self-Preservation Eight, whose entire identity rests on unbroken
        self-assertion, hardly any organ failure is more threatening. That Churchill was
        struck precisely where command and will originate, and that he concealed exactly this
        loss of control more consistently than any other ailment of his life, reads as the
        sharpest point of his entire life pattern: where the SE8 tolerates no weakness, the
        stroke was the most radical attack on his own territory his body could inflict – and
        he answered with the same weapon he had used his whole life: silence, persistence, no
        surrender. This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the Self-Preservation Eight's pattern inevitably leads to strokes –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Churchill's case can show is a pattern that stands out again and again in practice
        wherever uncompromising defense of one's own invulnerability is present – one possible
        explanation among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Churchill did not know his own pattern – the self-preservation Eight tolerates no weakness, least of all its own, and that is exactly why he concealed even a severe stroke from the public rather than easing off. Someone who does not know their own fixation on invulnerability mistakes concealment for strength, until the body presents the bill.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Churchill</strong> carried the Self-Preservation Eight with Nine-wing through his
        own illness as well: a lifelong refusal to show weakness, complete
        control over his own public image, and a stroke he fought with the same unbending
        will that made him a symbol of resistance in 1940. The orangutan who stayed on the
        branch while the storm raged also held on when the storm raged inside his own body –
        until almost no one knew.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-winston-churchill", label:"Portrait: Winston Churchill (SE8w9) – life's work"},
        {route:"krankheitsportraets-golda-meir", label:"Illness Portrait: Golda Meir (SE8w9) – same concealment strategy"},
        {route:"krankheitsportraets-helmut-kohl", label:"Illness Portrait: Helmut Kohl (SE8w9) – the same pattern of hidden vulnerability"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se8", label:"Subtype Profile SE8"},
      ])}
    </div>
  `);
}

export function blaisePascalKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-blaise-pascal-portrait.jpg" alt="Blaise Pascal" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Blaise Pascal</p>
        <p class="krim-portrait-typ">SX5w6 · Sexual Type 5 with Six-wing · 1623–1662</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hedgehog</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Animal correspondence: Hedgehog" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Blaise Pascal</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-blaise-pascal">portrait under Famous Personalities</a>
        in this Compass – that page covers his scientific and philosophical
        work. This page deepens a chapter only fleetingly touched on there: a
        practically lifelong, never conclusively diagnosed illness that, in his
        final years, merged with a radical religious self-mortification and led
        to his death at only 39.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Pascal</strong> is classified as the <strong>Sexual Five with Six-wing</strong>.
        The SX5 seeks security through intense, almost fusional immersion in a
        single subject – for Pascal, that subject shifted over his lifetime from
        mathematics and physics to an equally uncompromising religious devotion.
        The Six-wing adds a deep longing for absolute, unshakeable certainty. This
        exact combination of fusion and the search for security also shaped how
        he related to his own illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A child without stable health:</strong>
        Pascal was already considered sickly as a child; contemporaries report
        digestive complaints setting in early and an overall delicate constitution
        that would shape the rest of his life.</p>
        <p class="vb-intro"><strong>b) Constant pain beginning at eighteen:</strong>
        From roughly his eighteenth year on, several biographers report, scarcely
        a day passed without pain – severe headaches, digestive suffering, and
        tormenting insomnia became constant companions.</p>
        <p class="vb-intro"><strong>c) Working on regardless:</strong>
        Despite these complaints, Pascal built the first mechanical calculating
        machine in history (the "Pascaline") at just nineteen, and simultaneously
        carried out groundbreaking physics experiments on pressure and vacuum.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) The "Night of Fire," 1654:</strong>
        On the night of November 23–24, 1654, Pascal underwent an intense
        religious awakening, which he recorded on a note he carried sewn into his
        coat until his death – a radical turning point that set his later turn
        toward Jansenism in motion.</p>
        <p class="vb-intro"><strong>b) Withdrawal from science and society:</strong>
        In the years that followed, Pascal increasingly withdrew from scientific
        life and Parisian society, gave away much of his possessions, and lived
        for periods in monastic seclusion.</p>
        <p class="vb-intro"><strong>c) A self-imposed instrument of penance:</strong>
        According to tradition, in his final years Pascal at times wore a belt
        studded with sharp nails under his clothing, and deliberately pressed it
        into his side whenever vain thoughts arose.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) A final, unfinished defense of the faith:</strong>
        In his last years, Pascal worked on a comprehensive justification of the
        Christian faith, published posthumously as the <em>Pensées</em> ("Thoughts")
        – a fragment, yet an influential philosophical work to this day.</p>
        <p class="vb-intro"><strong>b) Taking a stranger's poor family into his own home:</strong>
        Shortly before his death, the gravely ill Pascal took in a destitute
        family to care for and support them personally – moving into a smaller
        room himself so he could give them his bed.</p>
        <p class="vb-intro"><strong>c) Refusing medical comforts:</strong>
        Contemporary accounts describe Pascal deliberately turning down medical
        treatment and personal comfort whenever they seemed to conflict with his
        idea of Christian humility.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A violent seizure as the immediate cause of death:</strong>
        Pascal died on August 19, 1662, at only 39, after a severe seizure
        preceded by several weeks of increasing weakness.</p>
        <p class="vb-intro"><strong>b) A diagnosis still disputed today:</strong>
        The stomach lesions and brain abnormalities found at autopsy are
        interpreted differently by medical historians to this day – theories
        discussed include intestinal tuberculosis, a malignant stomach tumor with
        brain metastases, or a rare genetic disorder.</p>
        <p class="vb-intro"><strong>c) A body of work that far outlasted his own lifetime:</strong>
        Both his mathematical and physical discoveries and the <em>Pensées</em>
        continue to shape natural science and religious philosophy respectively.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Fusion as a strategy for coping with his own suffering:</strong>
        The strategy typical of the sexual Five – immersing herself completely in
        a subject until the boundary between self and matter dissolves – showed
        up in Pascal first in science, later in religion, both ways of giving his
        own physical suffering a higher meaning.</p>
        <p class="vb-intro"><strong>b) The Six-wing as a search for unshakeable certainty:</strong>
        The radical nature of Pascal's late faith – no half concessions, no
        compromises – clearly bears the Six-wing's signature: a certainty that
        allows no more doubt, because doubt itself is experienced as threatening.</p>
        <p class="vb-intro"><strong>c) Physical pain as confirmation of his own seriousness:</strong>
        His deliberate self-mortification can also be read as an attempt to make
        his own inner devotion unassailable through physical suffering – pain as
        proof, not merely as burden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness with no healthy stretch for comparison:</strong>
        Unlike many other illness portraits in this Compass, Pascal's life shows
        almost no extended period of real health – the suffering accompanied
        practically his entire conscious adult life.</p>
        <p class="vb-intro"><strong>b) Two phases of immersion, one pattern:</strong>
        Both the years of mathematical and physical genius and the later
        religious radicalization show the same underlying structure: total,
        uncompromising devotion to a single cause, to the point of self-abandonment.</p>
        <p class="vb-intro"><strong>c) A final act of care despite his own weakness:</strong>
        That the dying Pascal took in a stranger's family shortly before his end
        and gave them his own bed shows how, even amid physical decline, devotion
        to a higher cause still outranked his own comfort.</p>
        <p class="vb-intro"><strong>d) Why the head and digestion, of all places?</strong>
        For a sexual Five with a Six-wing, whose security arises from intense
        thinking and unshakeable certainty, one reading suggests itself: precisely
        the organs that stand for thought (the head) and processing (digestion)
        became, in Pascal, the site of chronic suffering – as if the very thing
        used most intensively could never fully withstand his own demands on it.
        This reading is a plausible interpretation, not a documented historical
        causal link, and is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the sexual Five's pattern inevitably leads to chronic
        head or digestive suffering – <strong>every person can develop any
        illness, regardless of subtype.</strong> What Pascal's case can show is a
        pattern that stands out again and again in practice wherever radical,
        all-consuming immersion in a single cause is present – one possible
        explanation among many, not a verdict. The corresponding condition will
        be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Pascal did not know his own Enneagram pattern – the sexual Five with a
        Six-wing seeks security almost reflexively in radical, uncompromising
        fusion with a single cause, rather than allowing a more measured middle
        path. That exact pattern governed him right to the end: first
        completely in science, then completely in faith, never in a balance
        between the two. Someone who does not recognize their own pull toward
        radical fusion as a pattern easily mistakes it for pure virtue, even once
        their own body is thoroughly exhausted.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Pascal's</strong> short, illness-riddled life offers one of the
        most radical studies of the sexual Five with a Six-wing: a life with no
        genuine healthy phase, two successive immersions with no middle ground
        between them, and a final gesture of care that subordinated even his own
        weakness to a higher cause. The hedgehog that never unrolled, only
        changed the direction in which it sealed itself completely shut.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-blaise-pascal", label:"Portrait: Blaise Pascal (SX5w6) – life's work"},
        {route:"krankheitsportraets-friedrich-nietzsche", label:"Illness Portrait: Friedrich Nietzsche (SX5w4) – related subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx5", label:"Subtype Profile SX5"},
      ])}
    </div>
  `);
}

export function diegoVelazquezKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-diego-velazquez-portrait.jpg" alt="Diego Velázquez" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Diego Velázquez</p>
        <p class="krim-portrait-typ">SX9w1 · Sexual Type 9 with One-wing · 1599–1660</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Sloth</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx9.jpg" alt="Animal correspondence: Sloth" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX9")};left:${tierAvatarLeft("SX9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Diego Velázquez</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-diego-velazquez">portrait under Famous Personalities</a>
        in this Compass – that page covers his painterly life's work, above all
        <em>Las Meninas</em>. This page deepens a chapter only fleetingly touched
        on there: his sudden death within a single week, immediately after he
        had completely exhausted himself in one final, grueling courtly duty.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Velázquez</strong> is classified as the <strong>Sexual Nine with
        One-wing</strong>. The SX9 seeks fulfillment through total fusion with a
        single intense relationship or task, but in doing so easily loses sight
        of her own boundaries and needs. The One-wing adds a high, often
        perfectionistic standard for her own diligence. This exact combination of
        boundless devotion and perfectionistic standards ultimately drove
        Velázquez, quite literally, to complete exhaustion.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades in the service of a single court:</strong>
        Velázquez entered the service of the Spanish king Philip IV as early as
        1623 and remained loyal to that court – without any notable interruption
        – for nearly four decades, in ever-growing responsibility.</p>
        <p class="vb-intro"><strong>b) A growing double burden:</strong>
        Alongside his painting, Velázquez increasingly took on courtly
        administrative duties, culminating in the office of royal chamberlain
        (aposentador mayor), which put him in charge of the entire logistical
        organization of major court events.</p>
        <p class="vb-intro"><strong>c) No visible easing off, even in advancing age:</strong>
        Even past sixty, Velázquez showed no signs of slowing down – on the
        contrary, his final great task would become the most demanding of his
        entire life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Organizing a royal wedding:</strong>
        In 1660, Velázquez was put in charge of the entire ceremonial
        organization of the marriage of the Infanta María Teresa to King Louis
        XIV of France – one of the most elaborate diplomatic events of his time,
        held on the Isle of Pheasants on the French-Spanish border.</p>
        <p class="vb-intro"><strong>b) Weeks of uninterrupted logistical toil:</strong>
        Contemporary sources describe weeks of preparation, organized down to the
        smallest detail – furnishings, decoration, protocol, transporting an
        entire court – all of which Velázquez personally oversaw.</p>
        <p class="vb-intro"><strong>c) Returning to Madrid, exhausted:</strong>
        After the festivities concluded, Velázquez returned to Madrid visibly
        exhausted – with no recovery period granted him, as far as the record
        shows.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) A sudden high fever days after his return:</strong>
        Only a short time after returning to Madrid, Velázquez fell ill with a
        high fever – most plausibly, by today's reading, a feverish infection
        that overwhelmed his already exhausted body.</p>
        <p class="vb-intro"><strong>b) No time for a prolonged illness:</strong>
        Unlike many other illness portraits in this Compass, Velázquez's case
        allowed no warning period of months or years – barely a week separated
        visible exhaustion from death.</p>
        <p class="vb-intro"><strong>c) Almost no recorded complaints to the end:</strong>
        The surviving sources contain no pronounced complaint about his own
        exhaustion – Velázquez seems to have accepted his self-expenditure as a
        natural part of his duty.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on August 6, 1660:</strong>
        Velázquez died in Madrid, only a few days after the first signs of
        fever, at the age of 61 – barely six months after successfully
        completing the wedding ceremony on the Isle of Pheasants.</p>
        <p class="vb-intro"><strong>b) A final great work completed shortly before:</strong>
        Only a few years before his death, Velázquez had created his now most
        famous painting, <em>Las Meninas</em> (1656) – a work still regarded as
        one of the high points of Western painting.</p>
        <p class="vb-intro"><strong>c) A sudden death that shocked the court:</strong>
        His unexpected passing, after decades of quietly reliable service, caught
        the Spanish court visibly unprepared.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Fusion with a task to the point of self-dissolution:</strong>
        The strategy typical of the sexual Nine – merging completely with a
        single intense task or relationship – showed up in Velázquez in his
        decades-long, near-unconditional identification with court service, right
        up to the complete exhaustion of his own reserves.</p>
        <p class="vb-intro"><strong>b) The One-wing as an invisible drive toward perfection:</strong>
        The exceptionally high organizational standard contemporaries observed
        at the wedding ceremony clearly bears the One-wing's signature: nothing
        was to be left to chance.</p>
        <p class="vb-intro"><strong>c) Not registering his own exhaustion as a warning sign:</strong>
        Typical of the Nine is a low awareness of her own needs and limits –
        Velázquez seems, to the end, not to have read his dwindling strength as a
        serious warning sign.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Four decades with barely a visible limit:</strong>
        Across his entire court career, hardly a single episode can be found in
        which Velázquez visibly set his own limits or turned a task down – a
        consistent pattern of boundless availability.</p>
        <p class="vb-intro"><strong>b) The final task as an escalation, not an exception:</strong>
        The Isle of Pheasants ceremony was not an atypical episode but the
        logical continuation and escalation of a lifelong pattern of total
        self-expenditure in the service of others.</p>
        <p class="vb-intro"><strong>c) No gradual decline, but an abrupt break:</strong>
        Rather than the years-long, gradually visible decline seen in other
        cases, Velázquez's case shows an abrupt break – exhausted but outwardly
        functional, then dead within days.</p>
        <p class="vb-intro"><strong>d) Why a sudden fever, of all things?</strong>
        For a sexual Nine with a One-wing, whose self-perception already
        structurally lags behind her perception of others, one reading suggests
        itself: the body did not send gradual signals, because it had learned
        over decades to be overheard – only once the reserves were completely
        used up did the exhaustion show itself abruptly and unmistakably. This
        reading is a plausible interpretation, not a documented historical causal
        link, and is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the sexual Nine's pattern inevitably leads to sudden
        feverish death – <strong>every person can develop any illness, regardless
        of subtype.</strong> What Velázquez's case can show is a pattern that
        stands out again and again in practice wherever boundless fusion with a
        task, to the point of total self-forgetting, is present – one possible
        explanation among many, not a verdict. The corresponding condition will
        be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Velázquez did not know his own Enneagram pattern – the sexual Nine with a
        One-wing merges almost reflexively with an assigned task until her own
        boundaries vanish inside it, rather than pausing in time. That pattern carried
        him unopposed to the very end: one final, flawlessly executed
        duty that left no room for his own exhaustion. Someone who does not
        recognize their own pull toward boundless fusion as a pattern easily
        mistakes it for pure devotion to duty, even once their own body has
        already reached its limit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Velázquez's</strong> sudden death offers one of the quietest yet
        most striking studies of the sexual Nine with a One-wing: four decades
        of boundless availability, a final, flawlessly organized duty as a
        culmination rather than an exception, and a body that only reported in
        once nothing was left. The sloth that never rested – until it came to
        rest forever.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-diego-velazquez", label:"Portrait: Diego Velázquez (SX9w1) – life's work"},
        {route:"krankheitsportraets-hundertwasser", label:"Illness Portrait: Friedensreich Hundertwasser (SX9w8) – related subtype"},
        {route:"krankheitsportraets-juergen-drews", label:"Illness Portrait: Jürgen Drews (SX9w8) – the same boundless availability, a different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx9", label:"Subtype Profile SX9"},
      ])}
    </div>
  `);
}

export function adamSmithKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-adam-smith-portrait.jpg" alt="Adam Smith" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Adam Smith</p>
        <p class="krim-portrait-typ">SO1w9 · Social Type 1 with Nine-wing · 1723–1790</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Goose</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Animal correspondence: Goose" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Adam Smith</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-adam-smith">portrait under Famous Personalities</a>
        in this Compass – that page covers his economic life's work. This page
        deepens a chapter only fleetingly touched on there: decades of chronic
        digestive suffering and one final, radical gesture shortly before his
        death, in which he had almost all of his unpublished work destroyed.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Smith</strong> is classified as the <strong>Social One with
        Nine-wing</strong>. The SO1 measures herself and her surroundings against
        high, often universally conceived moral and intellectual standards – not
        out of personal vanity, but out of a need to serve what is right. The
        Nine-wing adds a peaceful, reticent note that avoids conflict rather than
        seeking it. This exact combination of high standards and quiet reticence
        also shaped how Smith dealt with his own health and his own literary
        legacy.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A "hypochondriac" streak, as contemporaries described it:</strong>
        Already during his time as a professor in Glasgow, acquaintances
        described Smith as someone with striking self-monitoring of his health –
        an assessment that later historians increasingly read as genuine chronic
        complaints rather than mere imagination.</p>
        <p class="vb-intro"><strong>b) Recurring digestive complaints from middle age on:</strong>
        For much of his adult life, Smith suffered from recurring stomach and
        intestinal complaints that at times considerably limited his ability to
        work.</p>
        <p class="vb-intro"><strong>c) Working on regardless:</strong>
        Despite these recurring complaints, Smith completed both his <em>Theory
        of Moral Sentiments</em> (1759) and his major work <em>The Wealth of
        Nations</em> (1776), which founded modern economics.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A life closely bound to his own mother:</strong>
        Smith remained unmarried throughout his life and lived with his mother
        for much of his adult years; she outlived him until shortly before his
        own death.</p>
        <p class="vb-intro"><strong>b) Proverbial absent-mindedness as the flip side of intense mental work:</strong>
        Numerous surviving anecdotes describe Smith as notoriously absent-minded
        in everyday life – a trait closely tied to his capacity for deep,
        concentrated intellectual penetration of complex subjects.</p>
        <p class="vb-intro"><strong>c) Growing physical weakness in his final years:</strong>
        From the late 1780s on, Smith's health noticeably declined, with
        persistent digestive problems that eventually developed into a suspected
        bowel obstruction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The request to burn his unpublished manuscripts:</strong>
        Shortly before his death, Smith urgently asked close friends to destroy
        almost all of his unpublished manuscripts – a request his executors
        ultimately honored.</p>
        <p class="vb-intro"><strong>b) His own standard as the measure to the very end:</strong>
        According to surviving accounts, Smith wanted to prevent unfinished
        thoughts that did not meet his own high standard from possibly being
        published posthumously.</p>
        <p class="vb-intro"><strong>c) A final gathering with friends despite his weakness:</strong>
        Only a few days before his death, the already very weakened Smith
        received friends for one last dinner together, where, tradition has it,
        he apologized for what he considered his unfinished life's work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on July 17, 1790:</strong>
        Adam Smith died in Edinburgh at the age of 67, after years of recurring
        digestive complaints that ultimately worsened into a suspected bowel
        obstruction.</p>
        <p class="vb-intro"><strong>b) A work that far outlasted his own time:</strong>
        <em>The Wealth of Nations</em> is still regarded today as the founding
        text of modern economics and continues to shape economic thinking
        worldwide.</p>
        <p class="vb-intro"><strong>c) A part of his thought lost forever:</strong>
        By destroying his unpublished manuscripts, a considerable part of
        Smith's late thought – including planned works on law and government –
        was irretrievably lost to posterity.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) His own body as an object of strict self-scrutiny:</strong>
        The social One's typical inclination to judge herself by high standards
        turned, in Smith, onto his own body too – a watchful, almost inspecting
        attention to his own physical states.</p>
        <p class="vb-intro"><strong>b) The Nine-wing as quiet reticence about his complaints:</strong>
        Rather than making noise about his complaints, Smith seems to have borne
        them quietly – a reticence typical of the Nine-wing, which avoids
        confrontation, even with one's own body.</p>
        <p class="vb-intro"><strong>c) Control over his own image to the very last moment:</strong>
        The destruction of his unfinished manuscripts can be read as a final,
        decisive act of the One's control over her own public image – nothing at
        all, rather than something that does not meet her own standard.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A complaint contemporaries dismissed for decades:</strong>
        What Smith's circle long dismissed as mere hypochondria appears, from
        today's perspective, to have been a serious, chronic physical condition –
        a misunderstanding that offered him little relief during his lifetime.</p>
        <p class="vb-intro"><strong>b) Work as a constant despite recurring complaints:</strong>
        Both in periods of relative health and in periods of pronounced
        complaints, Smith carried on his intellectual work with remarkable
        consistency, until shortly before his death.</p>
        <p class="vb-intro"><strong>c) A final act of control rather than surrender:</strong>
        Rather than leaving his unfinished work to posterity's judgment, Smith
        chose total control through destruction – a pattern running through his
        entire relationship to his own, always critically scrutinized work.</p>
        <p class="vb-intro"><strong>d) Why digestion, of all things?</strong>
        For a social One with a Nine-wing, whose inner critic constantly checks
        whether her own conduct meets a high standard, one reading suggests
        itself: the digestive system – what is taken in, examined, and processed
        before being released or rejected – became, in Smith, the arena for
        exactly that inner process of scrutiny he also applied to his own
        thinking. This reading is a plausible interpretation, not a documented
        historical causal link, and is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the social One's pattern inevitably leads to
        digestive suffering – <strong>every person can develop any illness,
        regardless of subtype.</strong> What Smith's case can show is a pattern
        that stands out again and again in practice wherever constant inner
        scrutiny and judgment of one's own thought and action is present – one
        possible explanation among many, not a verdict. The corresponding
        condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Smith did not know his own Enneagram pattern – the social One with a
        Nine-wing checks her own actions and thoughts almost reflexively against
        a high, often unreachable standard, rather than allowing herself
        imperfection too. That is precisely what governed him unopposed until the
        end: complete destruction of his own unfinished work, sooner than let
        posterity glimpse its possible shortcomings. Someone who does not
        recognize their own pull toward permanent self-scrutiny as a pattern
        easily mistakes it for pure diligence, even once their own body has long
        been sounding the alarm.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Adam Smith's</strong> final years offer one of the quietest
        studies of the social One with a Nine-wing: a complaint dismissed for
        decades but in fact real, an unbroken work discipline to the very end,
        and one last, radical act of control over a work he never quite
        considered good enough. The goose, still meticulously putting her own
        legacy in order.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-adam-smith", label:"Portrait: Adam Smith (SO1w9) – life's work"},
        {route:"krankheitsportraets-jordan-peterson", label:"Illness Portrait: Dr. Jordan Peterson (SO1w9) – same subtype"},
        {route:"krankheitsportraets-helmut-schmidt", label:"Illness Portrait: Helmut Schmidt (SO1w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so1", label:"Subtype Profile SO1"},
      ])}
    </div>
  `);
}

export function josephHaydnKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-joseph-haydn-portrait.jpg" alt="Joseph Haydn" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Joseph Haydn</p>
        <p class="krim-portrait-typ">SE3w2 · Self-Preservation Type 3 with Two-wing · 1732–1809</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Joseph Haydn</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-joseph-haydn">portrait under Famous Personalities</a>
        in this Compass – that page covers his compositional life's work. This
        page deepens a chapter only fleetingly touched on there: his physical
        decline in his final years and the moving final gesture with which he
        was still there for his household staff in the face of death.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Haydn</strong> is classified as the <strong>Self-Preservation
        Three with Two-wing</strong>. The SE3 seeks security through
        demonstrable, reliable competence in her own manageable domain – for
        Haydn, that meant a lifetime devoted to his own compositional work. The
        Two-wing adds a warm, caring note directed inward, toward her own small
        circle. This exact combination of competence and quiet care showed up
        even in his very last days.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Decades of unbroken creative power:</strong>
        After decades of service at the Esterházy court and international fame
        through his London symphonies, Haydn composed, in the late 1790s, two of
        his most extensive and demanding works ever, <em>The Creation</em> and
        <em>The Seasons</em>.</p>
        <p class="vb-intro"><strong>b) First signs of exhaustion after these major works:</strong>
        After completing <em>The Seasons</em> in 1801, Haydn himself reported
        deep physical exhaustion – a work he would later describe as too
        strenuous for his by-then already declining strength.</p>
        <p class="vb-intro"><strong>c) A growing decline from about 1803:</strong>
        From around 1803, Haydn became increasingly unable to work – his last
        planned works, including a string quartet, remained unfinished fragments.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Progressive dropsy:</strong>
        In the years that followed, Haydn developed increasing dropsy (edema,
        especially in the legs) – a common ailment of old age at the time, which
        increasingly restricted his mobility.</p>
        <p class="vb-intro"><strong>b) Withdrawal from public musical life:</strong>
        Haydn increasingly withdrew from active musical life, but continued to
        regularly receive visitors and admirers at his home in Vienna.</p>
        <p class="vb-intro"><strong>c) One last great public appearance in 1808:</strong>
        In March 1808, the already severely weakened Haydn attended a
        performance of his <em>Creation</em> held in his honor, and was deeply
        moved by the celebration from the prominent guests present, including
        Beethoven – his last public appearance of this kind.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The bombardment of Vienna in May 1809:</strong>
        In May 1809, Napoleonic troops besieged and shelled Vienna; legend has
        it that a cannonball struck close to Haydn's house.</p>
        <p class="vb-intro"><strong>b) Playing his own imperial anthem three times:</strong>
        Despite his severe illness, tradition holds that Haydn sat down at the
        piano three times during the bombardment to play the Austrian imperial
        anthem he had composed himself ("Gott erhalte Franz den Kaiser") – to
        calm his frightened household staff.</p>
        <p class="vb-intro"><strong>c) Care for others even in the face of his own death:</strong>
        This gesture was not for himself but visibly meant to reassure the
        people around him – an act of care in the middle of his own gravest
        illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on May 31, 1809:</strong>
        Joseph Haydn died a few days after the bombardment of Vienna, at the age
        of 77, in a city then under French occupation.</p>
        <p class="vb-intro"><strong>b) An honor guard despite the state of war:</strong>
        Despite the tense political situation, the French general had an honor
        guard posted at Haydn's deathbed house – a sign of respect that crossed
        the lines of the warring parties.</p>
        <p class="vb-intro"><strong>c) A life's work of formative influence:</strong>
        Haydn's compositional work – as the "father of the symphony" and the
        string quartet – fundamentally shaped Viennese Classicism and directly
        influenced contemporaries such as Mozart and the young Beethoven.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Competence to the limit of his own strength:</strong>
        The self-preservation Three's typical strategy of securing her own worth
        through demonstrable achievement showed up in Haydn to the very end –
        even composing <em>The Seasons</em> beyond his own strength was an
        expression of this deeply anchored pattern.</p>
        <p class="vb-intro"><strong>b) The Two-wing as care within his own small circle:</strong>
        His concern for his frightened household staff during the bombardment of
        Vienna clearly shows the warm, inward-directed care of the Two-wing –
        aimed not at a large audience but at the people close to him.</p>
        <p class="vb-intro"><strong>c) Reassurance through familiar competence:</strong>
        It is telling that Haydn reached for exactly his own compositional skill
        to provide security in a threatening situation – familiar competence as
        an anchor, even in his own dying.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A decline only after decades of unbroken creative power:</strong>
        Unlike some other illness portraits in this Compass, Haydn's decline set
        in only very late, after an unusually long life of steady, high
        productivity.</p>
        <p class="vb-intro"><strong>b) The final major works as a turning point:</strong>
        Haydn's own assessment that <em>The Seasons</em> had demanded more than
        his strength allowed marks a clearly recognizable transition from
        unbroken creative power to the beginning of physical decline.</p>
        <p class="vb-intro"><strong>c) Care as the last remaining form of expression:</strong>
        Once his own strength was no longer enough for new compositions, Haydn
        still had familiar music as a means of caring for others – a pattern
        that held right up to his final days.</p>
        <p class="vb-intro"><strong>d) Why dropsy, of all things?</strong>
        For a self-preservation Three with a Two-wing, whose security arises
        from visible, reliable achievement, one reading suggests itself: dropsy
        – an illness in which the body literally fills with what it can no
        longer process and release – corresponds to a life that, across decades,
        never knew a real pause to catch its breath. This reading is a plausible
        interpretation, not a documented historical causal link, and is explored
        in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the self-preservation Three's pattern inevitably
        leads to dropsy – <strong>every person can develop any illness,
        regardless of subtype.</strong> What Haydn's case can show is a pattern
        that stands out again and again in practice wherever decades of barely
        interrupted achievement are present – one possible explanation among
        many, not a verdict. The corresponding condition will be developed step
        by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Haydn did not know his own Enneagram pattern – the self-preservation
        Three with a Two-wing secures her own worth almost reflexively through
        steady, demonstrable achievement, rather than allowing herself rest in
        time. That same pattern stayed with him unaltered until the end: even in
        his own dying, he reached for familiar musical competence to be there
        for others rather than let himself be cared for. Someone who does not
        recognize their own pull toward constant achievement as a pattern easily
        mistakes it for pure calling, even once their own body is thoroughly
        exhausted.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Haydn's</strong> final years offer one of the most touching
        studies of the self-preservation Three with a Two-wing: decades of
        unbroken creative power, a physical decline that set in late but then
        unstoppably, and one final gesture of care that, even under cannon fire,
        was directed not at his own fear but at reassuring others. The raccoon
        that cared for its troop to the very end, even once its own strength was
        long since spent.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-joseph-haydn", label:"Portrait: Joseph Haydn (SE3w2) – life's work"},
        {route:"krankheitsportraets-sadhguru", label:"Illness Portrait: Sadhguru (SE3w2) – same subtype"},
        {route:"krankheitsportraets-enrico-caruso", label:"Illness Portrait: Enrico Caruso (SP3w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se3", label:"Subtype Profile SE3"},
      ])}
    </div>
  `);
}

export function fionaAppleKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-fiona-apple-portrait.jpg" alt="Fiona Apple" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Fiona Apple</p>
        <p class="krim-portrait-typ">SO4w5 · Social Type 4 with Five-Wing · born 1977</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Fiona Apple</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-fiona-apple">Famous
        Personalities portrait</a> – that page covers her musical work and her radical refusal
        to conform to the music industry. This page looks more closely at a chapter only
        hinted at there: an eating disorder as a teenager, an obsessive-compulsive disorder
        present since childhood, and recurring, at times isolating anxiety.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Apple</strong> is assigned to the <strong>social Type 4 with Five-Wing</strong>.
        The SO4 carries the Four's pain as shame before the community; the Five-Wing gives it
        the capacity to withdraw from the field of judgment into quiet, intense introspection.
        Exactly this combination – not hiding one's own shame but putting it into unsparing
        words, only after a long, very private withdrawal – shaped how she dealt with her
        eating disorder, OCD, and anxiety.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) An eating disorder emerging as a teenager:</strong>
        Apple developed anorexia as a teenager, which she later linked herself to the rape she
        experienced at age twelve – an attempt to regain at least control over her own body,
        control the trauma had taken from her.</p>
        <p class="vb-intro"><strong>b) Early compulsive rituals:</strong>
        Already in childhood, Apple developed recurring compulsive behaviors – including
        counting and checking rituals – which she only much later publicly named as an
        expression of obsessive-compulsive disorder (OCD).</p>
        <p class="vb-intro"><strong>c) Recurring anxiety:</strong>
        Alongside this, Apple reported periods of pronounced anxiety that showed themselves in
        growing social isolation and withdrawal from public obligations.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Years-long stretches of complete public withdrawal:</strong>
        Six to eight years of silence often lie between her albums – periods marked, by her
        own account, by strong withdrawal and anxiety.</p>
        <p class="vb-intro"><strong>b) Openly discussing her OCD in interviews:</strong>
        In later interviews, especially around the release of "Fetch the Bolt Cutters" in
        2020, Apple spoke in detail about her lifelong compulsive rituals, without softening
        or minimizing them.</p>
        <p class="vb-intro"><strong>c) A close, nearly symbiotic bond with her dogs:</strong>
        In 2012, Apple canceled concerts in the middle of an ongoing South American tour to
        stay with her dying dog Janet – a decision she publicly justified by the need to be
        there for the animal that had given her emotional grounding for years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Music as direct processing of eating disorder and trauma:</strong>
        Apple's lyrics repeatedly process her eating disorder, the rape, and her OCD directly
        and bluntly, rather than encoding or euphemizing them.</p>
        <p class="vb-intro"><strong>b) No therapeutic silence, but public language:</strong>
        Rather than processing her psychological struggles exclusively in therapy, Apple
        repeatedly made them the subject of her artistic work and her public statements.</p>
        <p class="vb-intro"><strong>c) Extreme attention to detail as a possible expression of her compulsive structure:</strong>
        Her elaborate, often years-long studio work with unusual sound sources – from kitchen
        utensils to percussion made from her deceased dog's bones – shows an obsession with
        detail that observers have repeatedly linked to her described compulsive structure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Critical success despite, or because of, the openness:</strong>
        "Fetch the Bolt Cutters" became one of the highest-rated albums in music-criticism
        history in 2020 – precisely the openness about shame, compulsion, and anxiety that had
        once isolated Apple became the core of her artistic impact.</p>
        <p class="vb-intro"><strong>b) A disinhibiting effect on others affected:</strong>
        Apple's blunt language about eating disorders and OCD helped make these topics more
        accessible to a wide audience, beyond clinical or euphemistic depictions.</p>
        <p class="vb-intro"><strong>c) Lasting public interest in her withdrawal itself:</strong>
        Even her periods of silence and isolation became part of the public perception of her
        as a person – not as absence, but as a meaningful part of her body of work in its own
        right.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Shame turned into language instead of silence:</strong>
        The SO4's characteristic move – not hiding one's own shame, but preempting it by
        naming it oneself – shows directly in Apple in how she processed her eating disorder
        and OCD as song material rather than as concealed private suffering.</p>
        <p class="vb-intro"><strong>b) The Five-Wing and withdrawal as a necessary workshop:</strong>
        The same structure that keeps Apple silent for years between albums also shaped how
        she handled her psychological crises: withdrawal not as flight, but as a space in
        which her own truth could ripen before being shared.</p>
        <p class="vb-intro"><strong>c) Compulsion as the most extreme form of control over detail:</strong>
        Her OCD can be read as an extreme intensification of the same need for control that
        also shapes Apple's meticulous studio work – in the SO4w5, the wish for order does not
        express itself outward as a demand on others, but inward as ritual.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A voice of radical honesty whose own body and mind became the battleground:</strong>
        Apple's entire artistic self-understanding rests on unsparing self-disclosure. Of all
        things, her own body (eating disorder) and her own thoughts (OCD) became the places
        where that openness was hardest to reach.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows in
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonard-cohen">Leonard
        Cohen (SO4w5)</a>: in his case too, a lifelong psychological illness – severe
        depression, in Cohen's case – shaped his entire body of work, and he too processed it
        not in secret but directly in his art. Both SO4w5s show the same pattern: chronic
        psychological suffering is not managed silently in therapy, but becomes the openly
        shared core of the work itself.</p>
        <p class="vb-intro"><strong>c) When the Four under chronic stress moves toward the Two:</strong>
        Apple's 2012 decision to cut short an ongoing tour for her dying dog stands out for an
        intensity of care for another being unusual for the otherwise introverted, inward-
        focused SO4w5. Someone living under chronic psychological strain for years
        increasingly moves along their stress line toward their stress point – for the Four,
        that is the Two. This unusually intense, almost self-sacrificing care in a moment of
        crisis recalls the devotion logic of the stress point, not the otherwise more inward-
        directed introspection of the core type – with the core type unchanged at SO4w5.</p>
        <p class="vb-intro"><strong>d) Why the body and the mind themselves, of all things?</strong>
        For a social Four whose entire artistic work rests on radical self-disclosure, one
        interpretation suggests itself: of all things, the areas most directly bound to the
        self – the body in the eating disorder, the mind in the OCD – became the place where
        control was hardest to keep. This interpretation is a plausible reading, not a
        documented clinical causal link, and will be developed further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the social Four's pattern inevitably leads to eating disorders
        or OCD – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Apple's case shows is a pattern in how chronic psychological suffering is
        handled, one that recurs again and again in a pronounced social Four with a Five-Wing
        – one of many possible readings, not a verdict. The corresponding illness will be
        developed further, over time, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        Apple likely does not know her own pattern as an Enneagram structure – the social Four
        with a Five-Wing reflexively holds onto radical self-disclosure after a long, private
        withdrawal, rather than simply allowing psychological suffering to be treated without
        the detour through artistic processing. Anyone who does not recognize their own
        tendency to live through every inner crisis in isolation first and only then disclose
        it completely risks denying themselves earlier, more direct support.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Four with Five-Wing explains much about how <strong>Fiona Apple</strong>
        handled her eating disorder, OCD, and anxiety: an artist whose entire body of work
        rests on the principle of not hiding her own shame but preempting it through radical
        openness – and who applied exactly this principle to the darkest, most private
        chapters of her own body and mind. The armadillo that curls up, only to emerge again
        with all the sharper clarity.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-fiona-apple", label:"Portrait: Fiona Apple (SO4w5) – life's work"},
        {route:"krankheitsportraets-leonard-cohen", label:"Illness Portrait: Leonard Cohen (SO4w5) – same subtype"},
        {route:"krankheitsportraets-edvard-munch", label:"Illness Portrait: Edvard Munch (SO4w5) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function williamJamesKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-william-james-portrait.jpg" alt="William James" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Prof. Dr. William James</p>
        <p class="krim-portrait-typ">SO3w4 · Social Type 3 with Four-wing · 1842–1910</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>William James</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-william-james">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as the founder of American
        psychology and co-founder of pragmatism. This page covers two health chapters only
        touched on there: an existential psychosomatic crisis in his twenties and a heart
        condition that progressed over twelve years and led to his death in 1910.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>James</strong> is classified as the <strong>Social Three with Four-wing</strong>.
        The Social Three is called the <em>Reinforcement Type</em> – significance arises
        through visible impact and achievement in the social sphere, not through quiet
        withdrawal. The Four-wing adds an existential depth and sensitivity that tends not to
        sit out a crisis but, as documented in James's own biography, to live it out to the
        very edge of what is bearable before a turn is sought.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A body answering an unresolved question of vocation:</strong>
        After abandoning his studies in painting and switching to medicine at Harvard Medical
        School, James in the late 1860s developed early back pain, eye trouble, and digestive
        complaints – at a point when his professional path was still entirely open.</p>
        <p class="vb-intro"><strong>b) Insomnia as a constant companion:</strong>
        Alongside the physical complaints, a persistent insomnia developed, which James himself
        repeatedly recorded in letters to friends and in his diary.</p>
        <p class="vb-intro"><strong>c) A trip to Germany without recovery:</strong>
        In 1867/68 James traveled to Germany for a cure and to study – an attempt to outrun the
        suffering by distance, which brought no lasting improvement.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A depression bordering on suicide:</strong>
        In his diary entries from this period James described states of deepest despair; later
        biographers, and James himself in a heavily coded, autobiographically read passage of
        <em>The Varieties of Religious Experience</em>, suggest that he at times contemplated
        suicide during these years.</p>
        <p class="vb-intro"><strong>b) No clear physical diagnosis:</strong>
        The physicians of his time found no single organic cause for the combination of back
        pain, eye trouble, digestive disorders, and exhaustion – a picture that is today
        largely read as psychosomatic.</p>
        <p class="vb-intro"><strong>c) A family pattern of similar suffering:</strong>
        James's sister Alice James was marked throughout her life by severe, never clearly
        diagnosed illness, and his father Henry James Sr. had himself lived through an
        existential crisis – a family pattern that further framed his own crisis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) The turning point through a philosophical text, not medicine:</strong>
        On April 30, 1870, James noted in his diary that reading the French philosopher Charles
        Renouvier on free will had shown him that he could himself decide to believe in his own
        capacity to act – not a medical remedy but a mental resolution brought the decisive
        turn.</p>
        <p class="vb-intro"><strong>b) A second, late-arriving affliction of the heart:</strong>
        During a strenuous hike in the Adirondack Mountains in the summer of 1898, James, by
        his own and his physicians' assessment, sustained a lasting strain on his heart from
        which he never fully recovered.</p>
        <p class="vb-intro"><strong>c) Work as the answer to the warning:</strong>
        Rather than fundamentally slowing his pace, James kept up an intense schedule of
        teaching, lecture tours, and book projects for the following twelve years, including
        the Gifford Lectures in Edinburgh (1901/02) and several further major works.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Two decades between two crises:</strong>
        Between the existential crisis of his twenties and the heart condition from 1898
        onward lies almost an entire productive career – James's most fruitful, most publicly
        influential creative phase falls exactly in this interval.</p>
        <p class="vb-intro"><strong>b) Travels to Europe in search of relief:</strong>
        In his final years James traveled to Europe several times, including a cure at Bad
        Nauheim, then a renowned center for cardiac treatment – an attempt to bring the
        progressing illness under control without fully giving up his academic and public
        activity.</p>
        <p class="vb-intro"><strong>c) A return home as the final path:</strong>
        In the summer of 1910, increasingly weakened, James returned from a final trip to
        Europe to his summer home in Chocorua, New Hampshire.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The early crisis as fuel for later creative power:</strong>
        The overcome existential crisis of his twenties seems to have fed a particularly
        intense, broadly diversified later creative energy in James – as if the free will once
        won had to be continually proven anew.</p>
        <p class="vb-intro"><strong>b) No visible withdrawal despite diagnosis:</strong>
        Unlike Karl Lagerfeld (SO3w4), who almost entirely hid his illness, James's heart
        condition was fairly well known within his closer academic circle – yet he barely
        visibly reduced his public and scholarly engagement over years, before the final months
        brought a marked decline.</p>
        <p class="vb-intro"><strong>c) The pace holds almost to the end:</strong>
        Even in his final months James worked on manuscripts and correspondence – a pattern
        typical of the Social Three, maintaining one's own effectiveness for as long as
        possible.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Throughline</h3>
        <p class="vb-intro"><strong>a) The first crisis: the body as a stand-in for an unresolved life question:</strong>
        The combination of back pain, eye trouble, digestive disorders, and insomnia in James's
        twenties occurred exactly during the phase when his professional direction – painting,
        medicine, natural science, philosophy – was still entirely unresolved. For a Social
        Three, whose self-worth is closely tied to visible, recognized effectiveness, such a
        phase of professional disorientation can feel especially threatening – the body
        reacted before a mental solution had been found.</p>
        <p class="vb-intro"><strong>b) The turning point: a thought instead of a medicine:</strong>
        It is telling that the decisive turn came not through medical treatment but through a
        philosophical insight – the conscious decision to believe in one's own free will. For
        the Four-wing, which seeks meaning in depth and authenticity, the solution was
        accordingly not a superficial treatment of symptoms but a fundamental inner
        reorientation.</p>
        <p class="vb-intro"><strong>c) The second crisis: the heart as the price of uninterrupted achievement:</strong>
        The heart strain of 1898 struck James in the middle of his most productive creative
        phase – precisely the organ that, figuratively, stands for drive and readiness to act
        gave way, without James lastingly slowing his pace in response.</p>
        <p class="vb-intro"><strong>d) Why exactly twelve more years of continued work?</strong>
        For a Social Three with a Four-wing, whose self-worth and sense of purpose are closely
        bound to visible, effective work, one reading suggests itself: pausing after the first
        warning would have meant calling into question one's own effectiveness – and with it a
        central part of one's own identity. Instead, the work continued until the body finally
        allowed no continuation at all. This reading is developed in more depth in this
        Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Classification without determinism:</strong>
        This does not mean the Social Three's pattern inevitably leads to heart disease –
        <strong>anyone can develop any illness, regardless of subtype.</strong> What James's
        case can illustrate is a pattern that repeatedly stands out in practice around the
        drive to maintain productive effectiveness even against clear warning signs from one's
        own body – one possible explanation among many, not a verdict. The corresponding
        illness pattern is being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        William James did not know his own Enneagram pattern – the Social Three measures
        self-worth by visible effectiveness, and exactly that led him, after the heart strain
        of 1898, to keep working at nearly undiminished pace for twelve more years instead of
        fundamentally slowing down in time. Not recognizing one's own need to remain
        uninterruptedly effective as a pattern risks overburdening the very organ that carries
        one's own creative power in the first place.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>James's</strong> Social Three with Four-wing shows itself in two opposing yet
        related crises: an existential crisis of youth that he overcame through a conscious
        thought – not through medicine – and a physical heart condition in old age that, despite
        an early warning, he answered for twelve years with undiminished work pace rather than
        seriously slowing down. The cheetah that survives an injury by holding its pace – until
        the pace itself can no longer be held.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-william-james", label:"Portrait: William James (SO3w4) – life's work"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – same subtype"},
        {route:"krankheitsportraets-sean-connery", label:"Illness Portrait: Sean Connery (SO3w4) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SO3"},
      ])}
    </div>
  `);
}

export function helmutSchmidtKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/helmut-schmidt-portrait.jpg" alt="Helmut Schmidt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Helmut Schmidt</p>
        <p class="krim-portrait-typ">SO1w9 · Social Type 1 with Nine-wing · 1918–2015</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Goose</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Animal correspondence: Goose" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Helmut Schmidt</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-helmut-schmidt">portrait under Famous Personalities</a>
        in this Compass – that page covers his chancellorship and crisis
        management. This page deepens a chapter only briefly mentioned there:
        decades of publicly displayed nicotine dependence, continued almost to
        the end of his life despite peripheral artery disease ("smoker's leg"),
        toe amputations, and a pacemaker.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Schmidt</strong> is classified as the <strong>Social One with
        Nine-wing</strong>. The SO1 lives from the conviction of knowing best
        what is right, and carries that conviction outward as a
        moral-intellectual authority. The Nine-wing adds an unruffled, almost
        phlegmatic steadiness that is unmoved by either criticism or medical
        advice. This exact combination of stubbornness and outward calm also
        shaped Schmidt's decades-long relationship with his own cigarette
        consumption.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A cigarette habit that became a trademark:</strong>
        Schmidt was already smoking regularly as a young man and never made a
        secret of it – menthol cigarettes accompanied him throughout his entire
        political career, visibly so even in television interviews and
        parliamentary debates.</p>
        <p class="vb-intro"><strong>b) A first serious warning shot in 1981:</strong>
        In October 1981, in the middle of his chancellorship, his heart stopped
        for around 30 seconds before starting again on its own – an episode
        that shortly afterward led to a pacemaker being fitted.</p>
        <p class="vb-intro"><strong>c) Smoking on regardless, pacemaker or not:</strong>
        Rather than taking this episode as a reason to quit, Schmidt continued
        his cigarette consumption almost unchanged after the procedure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Smoking as an expression of his own will:</strong>
        A remark widely attributed to him – roughly, "You need willpower, and
        cigarettes" – captures how much Schmidt understood his habit as part of
        his own strength of will, not as a weakness.</p>
        <p class="vb-intro"><strong>b) Public imperviousness to criticism:</strong>
        He met medical warnings and public criticism of his smoking over
        decades with the same cool, unmoved directness that also characterized
        his political decisions.</p>
        <p class="vb-intro"><strong>c) The habit continued into old age:</strong>
        Even as a sought-after elder statesman and co-publisher of the weekly
        "Die Zeit," Schmidt kept smoking in public, including in situations
        where it had long since been legally prohibited.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Diagnosis of peripheral artery disease:</strong>
        In his final years, Schmidt was diagnosed with what doctors call
        "smoker's leg" – a vessel in his right leg narrowed by arterial
        calcification, whose primary risk factor is smoking.</p>
        <p class="vb-intro"><strong>b) Toe amputations as a consequence of the circulatory disorder:</strong>
        The progressive vascular disease made several toe amputations
        necessary over time.</p>
        <p class="vb-intro"><strong>c) A vascular operation in the year of his death:</strong>
        In early 2015, Schmidt underwent another vascular operation on his leg
        – from whose effects, by consistent accounts, he never fully
        recovered.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death on November 10, 2015:</strong>
        Helmut Schmidt died at age 96 in Hamburg of multiple organ failure,
        after his condition deteriorated dramatically following the operation
        and a subsequent infection.</p>
        <p class="vb-intro"><strong>b) A smoking stop only in his final weeks:</strong>
        Only in hospital, in roughly the last ten days of his life, did Schmidt
        stop smoking after decades of consumption – not by his own free
        choice, but because his condition no longer allowed it.</p>
        <p class="vb-intro"><strong>c) A political legacy largely untouched by the health question:</strong>
        His reputation as the composed crisis manager of the 1962 storm flood
        and the 1977 "German Autumn" remained largely unaffected by his
        well-known smoking – for many contemporaries, the cigarette was
        inseparable from the image of the unshakeable statesman.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Control through holding on rather than letting go:</strong>
        For the Social One, control primarily means holding to one's own,
        self-determined correct course – in Schmidt's case, that was also
        applied to a habit whose harm was demonstrably known to him.</p>
        <p class="vb-intro"><strong>b) The Nine-wing as a source of outward composure:</strong>
        The steadiness typical of the Nine-wing allowed Schmidt to meet
        criticism of his smoking with the same phlegmatic calm he used to
        parry political attacks – confrontation was neither sought nor
        avoided when it became unavoidable.</p>
        <p class="vb-intro"><strong>c) Public consistency as self-affirmation:</strong>
        By never hiding his smoking but continuing it openly, Schmidt
        confirmed to himself the One's characteristic conviction that his own
        decision was the right one – regardless of what others said about
        it.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A publicly known habit without public self-criticism:</strong>
        Unlike many public figures with addictions, Schmidt never framed his
        smoking as a problem he wanted to overcome, but as a deliberate,
        sovereign decision – to the end.</p>
        <p class="vb-intro"><strong>b) Commenting on politics and smoking as a shared constant:</strong>
        Political commentary and cigarette consumption remained equally
        constant over decades – both expressions of the same unshakeable basic
        stance, dependent neither on success nor on criticism.</p>
        <p class="vb-intro"><strong>c) A control pattern that turned against his own body:</strong>
        The same consistency with which Schmidt managed political crises he
        also applied to his own habit – except here that consistency did not
        serve his own well-being but worked against it.</p>
        <p class="vb-intro"><strong>d) Why the blood vessels, of all things?</strong>
        For a Social One with Nine-wing, whose self-image is closely tied to
        steadiness and being right, one reading suggests itself: the blood
        vessels – the pathways that supply the body with oxygen and nutrients
        – became, quite literally, the site of a conflict between conscious
        will and actual physical limits in Schmidt's case. This reading is a
        plausible interpretation, not a proven historical causal link, and
        will be developed further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Social One's pattern inevitably leads to
        vascular disease – <strong>anyone can get any illness, regardless of
        subtype.</strong> What Schmidt's case can show is a pattern that keeps
        turning up in practice around uncompromising adherence to one's own,
        self-judged correct course – one of many possible explanations, not a
        verdict. The corresponding illness pattern is being developed further,
        piece by piece, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Schmidt did not know his own Enneagram pattern – the Social One with
        Nine-wing easily mistakes uncompromising consistency for strength of
        character, even where it works against one's own body. This exact
        pattern determined him, uncorrected, to the end: only when his body
        itself left no more choice did the decades-long habit end – not
        through his own insight, but through physical exhaustion. Anyone who
        does not recognize their own tendency toward self-affirming
        inflexibility as a pattern easily mistakes it for sheer strength of
        will, even as their own body has long been sending unmistakable
        signals.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Helmut Schmidt's</strong> decades-long cigarette consumption
        offers a study of the Social One with Nine-wing in one of its most
        stubborn forms: a publicly displayed, never-questioned habit, an
        immunity to criticism drawn from the same source as his political
        crisis management, and a body that finally set a limit only where his
        own will never did. The goose that did not leave formation until its
        own collapse.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-helmut-schmidt", label:"Portrait: Helmut Schmidt (SO1w9) – Chancellorship"},
        {route:"krankheitsportraets-adam-smith", label:"Illness Portrait: Adam Smith (SO1w9) – same subtype"},
        {route:"krankheitsportraets-jordan-peterson", label:"Illness Portrait: Dr. Jordan Peterson (SO1w9) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so1", label:"Subtype Profile SO1"},
      ])}
    </div>
  `);
}

export function wimThoelkeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wim-thoelke-portrait.jpg" alt="Wim Thoelke" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wim Thoelke</p>
        <p class="krim-portrait-typ">SP3w4 · Self-Preservation Type 3 with Four-wing · 1927–1995</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Wim Thoelke</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-wim-thoelke">portrait in the Famous Personalities section</a>
        of this Compass – that page covers his role as host of "Der Große Preis" and his
        hidden double life of a pilot's license, entrepreneurship, and a recorder album. This
        page delves into a chapter only briefly mentioned there: years of progressive heart
        disease, a bypass operation from which he never fully recovered, and a death in 1995
        at his home near Wiesbaden.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Thoelke</strong> is classified as the <strong>Self-Preservation Type 3 with
        Four-wing</strong> – the countertype of the Three, who seeks security not through
        glamour but through demonstrable, reliable performance. His Four-wing shows as a
        private inner life, never made public, full of unusual projects. That same split
        between a competent public facade and a hidden inner life carried through into how he
        handled his own heart disease.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A career under mounting physical strain:</strong>
        For decades Thoelke simultaneously carried the lead role on one of German television's
        biggest shows, numerous entrepreneurial side ventures, and an active life as a pilot –
        a workload that already amounted to considerable ongoing strain on his heart and
        circulation long before any diagnosis.</p>
        <p class="vb-intro"><strong>b) Diagnosis of advanced coronary heart disease:</strong>
        In March 1991 Thoelke underwent triple bypass surgery – a clear sign that his coronary
        arteries had already narrowed significantly, long before the public knew anything about
        it.</p>
        <p class="vb-intro"><strong>c) A return to the stage despite visible weakness:</strong>
        He was already back hosting the 200th episode of "Der Große Preis" in April 1991 – now
        seated rather than standing, a small but unmistakable concession to a body that was no
        longer the one it had been before the operation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Working almost without a break, even after surgery:</strong>
        Across 18 years and 220 episodes of "Der Große Preis," Thoelke reportedly missed only a
        single one – even the months following his bypass operation formed no real exception.</p>
        <p class="vb-intro"><strong>b) A visibly thinning appearance:</strong>
        In the years after 1991, Thoelke increasingly appeared emaciated on screen – a physical
        sign that a mass audience noticed, even though the show itself never openly discussed
        his health.</p>
        <p class="vb-intro"><strong>c) Last on-camera appearance in December 1992:</strong>
        On 10 December 1992, Thoelke stood in front of the camera for the last time before
        entering a specialized clinic – initially for a planned treatment of at least eight
        weeks.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) A departure without any major public statement:</strong>
        The shift from active hosting to clinical treatment happened without a dramatic press
        conference or extensive public explanation – Thoelke left the stage as quietly as he
        had occupied it for decades.</p>
        <p class="vb-intro"><strong>b) A dispute over his own succession:</strong>
        Alongside his withdrawal from active hosting came disagreements with ZDF's management
        over the show's future direction, before hosting duties eventually passed to
        Hans-Joachim Kulenkampff.</p>
        <p class="vb-intro"><strong>c) Death on 26 November 1995 at home near Wiesbaden:</strong>
        Wim Thoelke died at age 68 following a sudden bout of weakness at his home – roughly
        three years after his last television appearance.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">A parallel within the same subtype: Bernie Madoff</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <a href="javascript:void(0)" data-route="krankheitsportraets-bernie-madoff">Bernie
        Madoff</a> (SP3w4), too, the same underlying stance shaped how he handled his own
        mortality: he held onto outward composure to the last, even as his body was no longer
        controllable. In Thoelke, a closely related but distinct expression of the same pattern
        appears: not discretion for its own sake, but the persistent will to keep his function –
        here, the broadcast slot, the reliability owed to the audience – running for as long as
        possible, even against the visible resistance of his own body.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A public image that showed almost no cracks:</strong>
        To viewers, Thoelke remained, essentially until his final appearance, the reliable,
        competent host – only in hindsight do the individual signs assemble into a clear
        illness trajectory.</p>
        <p class="vb-intro"><strong>b) A career's end that coincided with a conflict:</strong>
        The fact that his withdrawal from active hosting coincided in time with disputes over
        the show's future lent his departure an added bitterness that went beyond mere medical
        necessity.</p>
        <p class="vb-intro"><strong>c) A death in familiar surroundings rather than in public:</strong>
        Unlike his decades-long professional life, aimed entirely at a mass audience, his life
        ended quietly, at his own home, far from any camera.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Functioning as self-proof, right up to the limit:</strong>
        Near-unbroken presence across 220 broadcasts, even after triple bypass surgery, shows
        an energy that still defined itself through demonstrable performance even in illness,
        rather than allowing itself any rest.</p>
        <p class="vb-intro"><strong>b) A body that drew the line where his will would not:</strong>
        It was ultimately his own visibly weakened body that forced, in 1992, what Thoelke
        himself evidently never considered on his own: an end to active hosting.</p>
        <p class="vb-intro"><strong>c) No public admission of exhaustion:</strong>
        Unlike some other illness accounts in this Compass, there are no recorded statements in
        which Thoelke himself spoke openly about fear, exhaustion, or doubt in connection with
        his illness.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A career built on reliability – a heart that broke down over exactly that:</strong>
        Thoelke's entire career rested on the idea of being a steady, reliable anchor a mass
        audience could count on at any time – of all organs, the one that, figuratively, stands
        for steadiness and load-bearing capacity was the first to give way under decades of
        sustained strain.</p>
        <p class="vb-intro"><strong>b) Two separate lives to the very end:</strong>
        Just as Thoelke never made his private inner life of piloting, entrepreneurship, and
        music public, his heart disease also remained a private matter for years, showing
        itself to a mass audience only in small, barely commented-on signs – a seated rather
        than standing broadcast, a face grown thinner.</p>
        <p class="vb-intro"><strong>c) Why the heart, of all things?</strong>
        For a self-preservation Three with a Four-wing, whose deeper emotional intensity stayed
        hidden behind a matter-of-fact, competent facade throughout his life, one interpretation
        suggests itself: of all organs, the one that figuratively stands for feeling and
        connection became the site of decline – in a man whose real emotional depth never
        received public space throughout his life. This interpretation is a plausible reading,
        not a documented historical causal link, and is elaborated further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the self-preservation Three's pattern inevitably leads to heart
        disease – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Thoelke's case can show is a pattern in how a pronounced self-preservation Three with a
        Four-wing handles their own physical limits, a pattern that recurs across this
        Compass – one of many possible readings, not a verdict. The corresponding illness
        picture is being developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Thoelke did not know his own pattern – the self-preservation Three with a Four-wing
        reflexively proves its worth through demonstrable, uninterrupted performance, even once
        the body itself is sending clear warning signs, and he lived out exactly this pattern
        unchanged into his final active years, without ever publicly developing another way of
        handling his own exhaustion. Someone who does not recognize their own need to prove
        themselves through function as a pattern cannot let go of it even when their own body
        is already demanding something else.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Wim Thoelke's illness reads like the flip side of his television career: the same
        raccoon who carried an entire show for two decades as a calm, reliable anchor held
        quietly onto that role until his own body allowed no other choice. A man who gave
        millions of viewers a sense of security found, in the end, only a quiet return to his
        own home for his own weakening heart.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The type
        assignment is a psychological hypothesis, not a medical diagnosis.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-wim-thoelke", label:"Portrait: Wim Thoelke (SP3w4) – Der Große Preis"},
        {route:"krankheitsportraets-bernie-madoff", label:"Illness Portrait: Bernie Madoff (SP3w4) – same subtype"},
        {route:"krankheitsportraets-osho", label:"Illness Portrait: Osho (SP3w4) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se3", label:"Subtype Profile SP3"},
      ])}
    </div>
  `);
}
