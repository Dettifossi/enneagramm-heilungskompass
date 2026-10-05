import { shell, pageHeader, relatedLinks, bookTip, tierAvatarTop, tierAvatarLeft } from "../../bundle.js";

export function angelinaJolieKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-angelina-jolie-portrait.jpg" alt="Angelina Jolie" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Angelina Jolie</p>
        <p class="krim-portrait-typ">SO1w2 · Social Type 1 with Two-Wing · b. 1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Goose</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so1.jpg" alt="Animal correspondence: Goose" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO1")};left:${tierAvatarLeft("SO1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Angelina Jolie</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-angelina-jolie">Famous
        Personalities portrait</a>. This page delves into a chapter only briefly mentioned
        there: a preventive double mastectomy made public in 2013 due to a BRCA1 gene
        mutation, followed in 2015 by the removal of her ovaries and fallopian tubes – both
        deliberately communicated in public.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Jolie</strong> is assigned to the <strong>social Type 1 with Two-Wing</strong>.
        The SO1 cannot not-act when action is possible – even with her own health; the
        Two-Wing adds the direct, personal compassion that turns a private medical decision
        into a public message. Exactly this combination – duty to do what is right, combined
        with the wish to help others through her own openness – shaped how she handled her
        own genetic diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A burdened family history:</strong>
        Jolie's mother, Marcheline Bertrand, died of ovarian cancer in 2007 at age 56; her
        maternal grandmother died of ovarian cancer, and her aunt of breast cancer – a
        familial pattern that suggested genetic testing.</p>
        <p class="vb-intro"><strong>b) Confirmation of the BRCA1 gene mutation:</strong>
        A genetic test confirmed that Jolie carried a mutation in the BRCA1 gene, which
        statistically significantly raises the risk of breast and ovarian cancer.</p>
        <p class="vb-intro"><strong>c) A medically estimated risk of about 87 percent:</strong>
        According to medical estimates, her personal lifetime risk of developing breast
        cancer was about 87 percent, and her risk of ovarian cancer about 50 percent.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Preventive double mastectomy in 2013:</strong>
        Between February and April 2013, Jolie underwent a preventive double mastectomy with
        subsequent reconstruction to drastically lower her breast cancer risk.</p>
        <p class="vb-intro"><strong>b) A public announcement through a newspaper essay:</strong>
        Instead of keeping the operation private, Jolie published a detailed essay in the New
        York Times in May 2013, titled "My Medical Choice," explaining her decision and its
        medical basis in detail.</p>
        <p class="vb-intro"><strong>c) Removal of ovaries and fallopian tubes in 2015:</strong>
        Two years later, in March 2015, Jolie additionally had her ovaries and fallopian
        tubes preventively removed after a blood test showed elevated markers that could
        indicate an emerging cancer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) No actual cancer diagnosis:</strong>
        Unlike many other illness portraits in this Compass, Jolie's case did not involve an
        existing cancer, but a purely preventive decision based on a statistically elevated
        risk.</p>
        <p class="vb-intro"><strong>b) A second essay on the ovarian surgery:</strong>
        Jolie also accompanied the removal of her ovaries and fallopian tubes in 2015 with
        another public essay in the New York Times, once again laying out her decision-making
        process.</p>
        <p class="vb-intro"><strong>c) A measurable effect on public awareness:</strong>
        Following Jolie's 2013 essay, doctors worldwide recorded a marked increase in
        inquiries about BRCA genetic testing – a phenomenon later known as the "Angelina
        Jolie effect."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide media and medical attention:</strong>
        Jolie's decisions triggered international coverage and were examined in numerous
        studies as a case example of the influence of prominent health openness on the
        preventive behavior of the general population.</p>
        <p class="vb-intro"><strong>b) Controversy over access and cost:</strong>
        The "Angelina Jolie effect" also sparked a public debate about the fact that
        preventive genetic testing and surgery are not equally accessible to all women – a
        discussion Jolie herself addressed in her essays.</p>
        <p class="vb-intro"><strong>c) Continued public engagement:</strong>
        Jolie has continued her humanitarian and film work unchanged since then, with the
        preventive procedures not visibly limiting her public life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Acting because action is possible:</strong>
        The SO1's characteristic conviction that injustice – including an elevated health
        risk – must not simply be accepted when a course of action exists shaped Jolie's
        decision for the preventive surgeries from the start.</p>
        <p class="vb-intro"><strong>b) The Two-Wing and the deliberate public disclosure:</strong>
        The same combination of conviction and heart that marks Jolie's humanitarian work
        showed here too: instead of keeping the operations private, she made them public
        because other women might benefit – care expressed as action, not just feeling.</p>
        <p class="vb-intro"><strong>c) A duty to visibility rather than withdrawal:</strong>
        Where others would have kept such an intimate medical decision private, Jolie
        published two detailed essays – a pattern consistent with her entire public work: do
        what is right and make it visible, not to earn admiration, but because visibility
        itself is experienced as an obligation.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A fighter against injustice who treated genetic risk as injustice too:</strong>
        Jolie's entire public work rests on the conviction that visible injustice demands
        action – with her own genetic diagnosis, she applied exactly this stance to her own
        body: a statistical risk became something that had to be actively confronted.</p>
        <p class="vb-intro"><strong>b) Why the breasts and ovaries, of all organs, the organs of feminine care?</strong>
        For a social One with a Two-Wing whose entire life's work revolves around motherhood,
        care for other people's children, and protecting the vulnerable, one interpretation
        suggests itself: exactly the organs popularly associated with motherhood and feminine
        care became the subject of a preventive decision made public. This reading is a
        plausible interpretation, not a proven clinical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the social One's pattern inevitably leads to genetically
        elevated cancer risk – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Jolie's case is a pattern in dealing with a
        health risk that keeps recurring in a pronounced social One with a Two-Wing – one of
        many possible readings, not a verdict. The corresponding illness pattern is being
        developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Jolie does not know her own pattern as an Enneagram structure – the social One with a
        Two-Wing reflexively cannot not-act once a danger is recognized, and almost
        inevitably turns private decisions into public messages. Anyone who does not
        recognize their own tendency to translate every recognized danger immediately into
        visible action as a pattern risks leaving little room to process a difficult decision
        privately first, before it becomes a public task.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 1 with Two-Wing explains much about how <strong>Angelina Jolie</strong>
        handled her genetic risk: a woman whose entire public work is devoted to making
        injustice visible turned her own preventive decision into a public message as well –
        the goose that left no risk unaddressed even in her own body, and made the formation
        stronger by speaking openly about her own vulnerability.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-angelina-jolie", label:"Portrait: Angelina Jolie (SO1w2)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so1", label:"Subtype Profile SO1"},
      ])}
    </div>
  `);
}

export function bobMarleyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-bob-marley-portrait.jpg" alt="Bob Marley" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Bob Marley</p>
        <p class="krim-portrait-typ">SO2w1 · Social Type 2 with One-Wing · 1945–1981</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Bob Marley</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-bob-marley">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: a
        malignant melanoma discovered in his toe in 1977, whose urgently recommended
        amputation Marley refused for religious reasons – a decision that contributed to his
        early death at age 36.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Marley</strong> is assigned to the <strong>social Type 2 with One-Wing</strong>.
        The SO2 puts its care in the service of a larger cause, not its own person; the
        One-Wing gives that care a moral certainty that admits no compromise. Exactly this
        combination – subordinating his own health to the larger mission and his religious
        conviction – shaped the course of his illness right up to his death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) An injury while playing football in 1977:</strong>
        An injury to the big toe of his right foot, initially treated as a sports injury,
        did not heal as expected.</p>
        <p class="vb-intro"><strong>b) Diagnosis of malignant melanoma:</strong>
        Doctors diagnosed acral lentiginous malignant melanoma – a particularly aggressive
        form of skin cancer that often occurs on hands and feet and is frequently detected
        late there.</p>
        <p class="vb-intro"><strong>c) Urgent recommendation for amputation:</strong>
        His treating doctors advised amputating the toe to prevent the tumor from spreading –
        a medically urgent measure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Refusal of amputation for religious reasons:</strong>
        Marley refused the procedure, since the Rastafari faith regards the wholeness of the
        body as sacred – a decision he did not reverse despite the medical urgency.</p>
        <p class="vb-intro"><strong>b) Continuing his touring schedule:</strong>
        Instead of getting treatment, Marley continued his intensive touring and recording
        activity almost unchanged for years.</p>
        <p class="vb-intro"><strong>c) The cancer spreading over several years:</strong>
        In the years that followed, the cancer metastasized unnoticed to his lungs, liver,
        and brain, until the illness could no longer be overlooked by 1980.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Collapse while jogging in September 1980:</strong>
        During a tour of the US, Marley collapsed while jogging in Central Park – an event
        that made the advanced state of his illness publicly visible.</p>
        <p class="vb-intro"><strong>b) His final public performance shortly after:</strong>
        Only a few days later, Marley gave his last concert in Pittsburgh, without the
        audience knowing the extent of his illness.</p>
        <p class="vb-intro"><strong>c) Unsuccessful treatment attempts in Germany:</strong>
        Marley then sought alternative cancer treatment from a doctor in Bavaria, which
        could no longer halt the advanced cancer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death on 11 May 1981 in Miami:</strong>
        Bob Marley died at just 36 years old on his way back from treatment in Germany to
        Jamaica, in a hospital in Miami.</p>
        <p class="vb-intro"><strong>b) Worldwide mourning and posthumous fame:</strong>
        Marley's death triggered worldwide mourning and simultaneously marked the beginning
        of an unbroken posthumous fame as a global reggae icon that continues to this day.</p>
        <p class="vb-intro"><strong>c) A decision still discussed today:</strong>
        Marley's refusal of amputation is still discussed today as one of the best-known
        examples of how religious conviction can prevent a medically urgently indicated
        treatment.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Care for an entire people, not for himself:</strong>
        The SO2's characteristic focus on a larger cause also showed in how he handled his
        own illness: Marley continued his tours because the message for the many seemed more
        important than his own health.</p>
        <p class="vb-intro"><strong>b) The One-Wing and the unconditional religious conviction:</strong>
        The same uncompromising stance with which Marley performed two days after the 1976
        assassination attempt with a bullet still in his arm showed up in dealing with the
        cancer diagnosis as a refusal to even consider a treatment recognized as religiously
        wrong.</p>
        <p class="vb-intro"><strong>c) His own body as part of a larger order:</strong>
        For Marley, his own body could not be considered separately from his faith – refusing
        amputation was not denial of the illness, but the consistent application of the same
        moral certainty that also carried his music.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A man who fought for a people's wholeness and put his own wholeness above his life:</strong>
        Marley's entire body of work revolved around the reconciliation, healing, and dignity
        of an oppressed people – of all people, he put the religious idea of his own bodily
        wholeness above the medically urgently indicated treatment, until the illness
        escaped his control.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A striking parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-muhammad-ali">Muhammad
        Ali (SO2w1)</a>: Ali too ignored health warning signs in boxing for years, because a
        cause recognized as morally right – for Ali, the fight in the ring; for Marley, his
        religious conviction – seemed more important than his own physical integrity. Both
        SO2w1s show the same pattern: a certainty of being right that subordinates even one's
        own life to the larger cause.</p>
        <p class="vb-intro"><strong>c) Why the toe, of all things, the point of contact with the earth?</strong>
        For a social Two with a One-Wing whose entire work revolved around rootedness,
        origin, and the return to one's own roots, one interpretation suggests itself: exactly
        the body part that makes contact with the ground became the starting point of an
        illness he did not have treated in time. This reading is a plausible interpretation,
        not a proven clinical causal link, and will be developed further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the social Two's pattern inevitably leads to a refused cancer
        treatment – <strong>any person can develop any illness, regardless of subtype.</strong>
        What can be shown in Marley's case is a pattern in dealing with a life-threatening
        diagnosis that keeps recurring in a pronounced social Type 2 with a One-Wing – one of
        many possible readings, not a verdict. The corresponding illness pattern is being
        developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Marley did not know his own pattern as an Enneagram structure – the social Type 2
        with a One-Wing reflexively clings to its own moral certainty instead of taking its
        own vulnerability seriously in time, and lived out exactly this pattern unchanged
        until his death. Anyone who does not recognize their own tendency to place a
        conviction recognized as right above their own physical safety as a pattern risks
        that exactly this conviction shortens their own life.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 2 with One-Wing explains much about the course of <strong>Bob
        Marley's</strong> illness: a man whose entire work was devoted to the healing of a
        people subjected his own healing to the same unconditional religious conviction that
        had made him world-famous – the Golden Retriever who was there for others until the
        end and never let his own wound be treated in time.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-bob-marley", label:"Portrait: Bob Marley (SO2w1)"},
        {route:"krankheitsportraets-muhammad-ali", label:"Illness Portrait: Muhammad Ali (SO2w1) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function claudioNaranjoKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-claudio-naranjo-portrait.jpg" alt="Dr. Claudio Naranjo – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dr. Claudio Naranjo</p>
        <p class="krim-portrait-typ">SO5w4 · Social Type 5 with Four-wing · 1932–2019</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dr. Claudio Naranjo</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-claudio-naranjo">portrait under Famous Personalities</a>
        in this Compass – as the Chilean psychiatrist who founded the 27 subtypes of the
        Enneagram on which this entire Compass is built. This page examines a chapter that
        page leaves largely unspoken: in his final years, Naranjo suffered from
        Parkinson's disease – visible in increasing difficulty walking and speaking, and an
        involuntary tremor in his arm clearly seen at his last public appearance at the 2019
        World Ayahuasca Conference in Girona. Weeks later, on July 12, 2019, he died at age
        86 in Berkeley, California. Public documentation of his illness is thinner than for
        the other Illness Portraits in this Compass – the facts gathered here come from
        accounts by attendees of his final talks, not from an officially confirmed diagnosis
        history.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Naranjo</strong> classified himself as the <strong>Social Five with
        Four-wing</strong>. He called the social Five <em>Totem</em>: knowledge is not
        hoarded privately but made available to the community – as a legacy, a teaching, a
        contribution to a larger whole. The Four-wing gives this stance an introspective,
        often melancholic depth. His life's work – systematically passing on the Enneagram
        to generations of students in the SAT seminars – is exactly this signature:
        knowledge that is not kept for oneself but consistently passed on.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Visible symptoms only became public late:</strong>
        There is no confirmed public record of exactly when Naranjo's Parkinson's began –
        it became visible mainly in his final years, as his gait and sitting posture grew
        increasingly restricted.</p>
        <p class="vb-intro"><strong>b) Voice and movement affected:</strong>
        Attendees of his final talks report speech difficulties and restricted mobility –
        two core symptoms of advanced Parkinson's disease.</p>
        <p class="vb-intro"><strong>c) The thought that it might be his last appearance:</strong>
        Naranjo reportedly considered not attending the 2019 World Ayahuasca Conference in
        Girona at all, sensing it might be his last major public appearance – an intuition
        confirmed weeks later.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A final talk despite visible symptoms:</strong>
        At his last public talk in Girona, an involuntary tremor in his arm was clearly
        visible – Naranjo gave the talk anyway, rather than cancel for health reasons.</p>
        <p class="vb-intro"><strong>b) A lifelong theme present to the end:</strong>
        His last public appearance addressed the question of whether ayahuasca could help
        heal global problems – a theme that drew together his decades-long connection of
        psychotherapy, spirituality, and social change.</p>
        <p class="vb-intro"><strong>c) Death weeks later:</strong>
        On July 12, 2019, Naranjo died at age 86 at his home in Berkeley – weeks after this
        final public appearance.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) A public appearance despite visible weakness:</strong>
        Rather than withdraw from public life in the face of advancing physical limitations,
        Naranjo chose to continue teaching even with a visibly trembling hand.</p>
        <p class="vb-intro"><strong>b) Teaching as his life's purpose to the end:</strong>
        Naranjo's entire late work was shaped by the desire to pass on his knowledge as
        completely as possible to the next generation – a drive that did not weaken even in
        his final year.</p>
        <p class="vb-intro"><strong>c) Reticence about his own illness:</strong>
        There are no known public statements in which Naranjo spoke at length about his own
        Parkinson's diagnosis – a silence that contrasts with his usual openness about inner
        processes.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A life's work that outlasts his own illness:</strong>
        The 27 subtypes that Naranjo developed and systematized from Oscar Ichazo's work
        still form the foundation of countless Enneagram applications worldwide today –
        including this Compass.</p>
        <p class="vb-intro"><strong>b) A final talk as a moving close:</strong>
        His 2019 talk in Girona is still described by attendees as especially poignant – not
        despite but precisely because of the visible physical vulnerability with which it
        was delivered.</p>
        <p class="vb-intro"><strong>c) A death without major public staging:</strong>
        Naranjo's death in July 2019 was honored within professional circles and among his
        countless students worldwide, but received comparatively modest media coverage –
        fitting for a man whose impact unfolded mainly within a dedicated professional
        community, less in the broad public spotlight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Knowledge as a final source of energy:</strong>
        Even as his body and voice imposed increasing limits, passing on knowledge remained
        Naranjo's central drive – typical of the social Five, whose identity is closely tied
        to her contribution to a community of knowledge.</p>
        <p class="vb-intro"><strong>b) The Four-wing as a source of inner depth in old age:</strong>
        The Four-wing's introspective, often melancholic note likely intensified in his
        final years – an awareness of his own mortality combined with the wish to round off
        his own body of work.</p>
        <p class="vb-intro"><strong>c) Publicness as a final act of transmission:</strong>
        His final talk in Girona can be read as a deliberate last act of sharing – knowledge
        passed on right up to his physical limit, fully in line with the Totem principle
        Naranjo himself described for the social Five.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) An illness that struck exactly the tools of his teaching:</strong>
        Naranjo's entire work rested on language and bodily presence in seminars – it was,
        of all things, voice and movement, the basic tools of his decades of teaching, that
        Parkinson's increasingly restricted.</p>
        <p class="vb-intro"><strong>b) Carrying on to the physical limit:</strong>
        Rather than withdrawing in the face of visible symptoms, Naranjo gave his final major
        talk – a pattern that fits his own description of the social Five as a transmitter of
        knowledge who does not prematurely end her contribution to the community.</p>
        <p class="vb-intro"><strong>c) Why, of all things, an illness that took voice and movement?</strong>
        For a social Five with Four-wing, whose identity and sense of purpose are closely
        tied to passing knowledge on to a community, the progressive loss of speech and
        movement can be read as an intensification of his own life pattern: the body that had
        served for decades as the vehicle of his teaching itself became the final test of how
        far knowledge could still be passed on once the means for doing so were increasingly
        lacking. This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism – and with particular caution:</strong>
        This does not mean the social Five with Four-wing's pattern inevitably leads to
        Parkinson's – <strong>every person can develop any illness, regardless of
        subtype.</strong> Unlike the other Illness Portraits in this Compass, the public
        source material on Naranjo's illness is notably thin: there is no confirmed diagnosis
        history, no official medical statement, only accounts from attendees of his final
        talk. This portrait therefore rests on less solid sources than the others and should
        be read with that caveat in mind. The corresponding condition will be developed step
        by step in this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Naranjo knew his own pattern better than almost anyone – and yet he still lived out the social Five's need to pass on knowledge until the very end, continuing to lecture publicly rather than withdrawing as his Parkinson's symptoms progressed. Even conscious knowledge of one's own pattern does not automatically protect against living it out to the body's limit.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Five with Four-wing is confirmed once more in how <strong>Claudio
        Naranjo</strong> himself handled advancing physical limitation: not withdrawal, but a
        final, visibly effortful act of passing his knowledge on to a community he himself
        had spent decades building. The octopus, who never kept his knowledge for himself
        but gave it to the world, kept passing it on into his final months of life – with a
        trembling hand, but an unbroken will to teach.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-claudio-naranjo", label:"Portrait: Dr. Claudio Naranjo (SO5w4) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype Profile SO5"},
      ])}
    </div>
  `);
}

export function elonMuskKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-elon-musk-portrait.jpg" alt="Elon Musk" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Elon Musk</p>
        <p class="krim-portrait-typ">SO7w6 · Social Type 7 with Six-Wing · b. 1971</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Elon Musk</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-elon-musk">Famous Personalities
        portrait</a>. This page delves into a chapter not covered there: Musk's public
        disclosure of Asperger's syndrome, which he announced live on American television in
        2021.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Musk</strong> is assigned to the <strong>social Type 7 with Six-Wing</strong>.
        The SO7 sacrifices its own reticence for a larger vision and shies away from no stage
        when it serves the cause; the Six-Wing adds a vigilance that openly names its own
        otherness rather than hiding it. Exactly this combination – a private diagnosis
        announced on the largest possible public stage – shaped how he dealt with his own
        Asperger's syndrome.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Noticeable traits already in childhood:</strong>
        By his own and his family's account, Musk showed behaviors as a child that are now
        considered, in retrospect, typical of Asperger's syndrome, including intense,
        narrowly focused interests and social difficulties.</p>
        <p class="vb-intro"><strong>b) No formal diagnosis at a young age:</strong>
        By his own account, a formal diagnosis did not occur in childhood, but significantly
        later in adulthood.</p>
        <p class="vb-intro"><strong>c) Decades of public perception as merely "eccentric":</strong>
        Before the disclosure, Musk's unusual public demeanor – unfiltered comments,
        unusual humor, blunt manner – was often described by media simply as eccentric,
        without reference to a neurological basis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Public announcement on 8 May 2021:</strong>
        Musk announced the diagnosis live while hosting "Saturday Night Live" – before an
        audience of millions, in an entertaining, self-deprecating setting rather than a
        serious interview.</p>
        <p class="vb-intro"><strong>b) One of the first Asperger's disclosures by a billionaire of this scale:</strong>
        Musk is considered one of the first very prominent entrepreneurs to publicly disclose
        an autism spectrum diagnosis in this form.</p>
        <p class="vb-intro"><strong>c) Combined with self-reflection on social behavior:</strong>
        In the same broadcast, Musk openly reflected that he sometimes has difficulty reading
        social cues – an unusually direct self-disclosure for him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Both positive and critical media reactions:</strong>
        The disclosure triggered both recognition for his openness and critical voices who
        found the entertaining setting inappropriate for a serious health topic.</p>
        <p class="vb-intro"><strong>b) No visible change in public demeanor afterward:</strong>
        After the disclosure, Musk did not noticeably change his public demeanor –
        provocative statements, unfiltered social media comments – the diagnosis did not
        become the occasion for new public restraint.</p>
        <p class="vb-intro"><strong>c) Continued extreme work intensity:</strong>
        Musk's famously enormous workload across several companies remained unchanged after
        the disclosure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide attention for adult-onset autism awareness:</strong>
        The disclosure contributed internationally to the visibility of late-diagnosed autism
        in adults, particularly in top professional positions.</p>
        <p class="vb-intro"><strong>b) Reassessment of earlier public appearances:</strong>
        After the disclosure, many commentators reinterpreted earlier, previously perceived
        as unusual, public appearances of Musk's in light of the diagnosis.</p>
        <p class="vb-intro"><strong>c) No lasting anchoring as a central public topic:</strong>
        Despite the broad initial attention, Asperger's syndrome did not remain a
        consistently present topic in Musk's subsequent public communication.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The largest possible stage instead of quiet disclosure:</strong>
        The SO7's characteristic conviction that its own message should reach as many people
        as possible showed exemplarily: instead of a discreet interview, Musk chose the
        largest possible media platform for the disclosure.</p>
        <p class="vb-intro"><strong>b) The Six-Wing and openly naming his own otherness:</strong>
        The same vigilance with which Musk publicly names societal risks showed here as a
        willingness to openly address his own neurological otherness too, rather than
        hiding it behind a smooth public image.</p>
        <p class="vb-intro"><strong>c) Entertainment as a vehicle for a serious message:</strong>
        That the disclosure happened in a comedic format fits the SO7's characteristic
        ability to turn even difficult topics into an accessible, positive narrative, rather
        than presenting them as pure burden.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A man of ceaseless building whose own mind works differently from most:</strong>
        Musk's entire public work rests on an extraordinary capacity for intense, focused
        concentration on individual problems – exactly the cognitive trait that carries his
        life's work is also part of the same neurological structure he named as Asperger's
        syndrome.</p>
        <p class="vb-intro"><strong>b) Why social perception, of all things, for a man with such a public role?</strong>
        For a social Seven with a Six-Wing whose entire work rests on public visibility and
        the ability to inspire large crowds, one interpretation suggests itself: exactly the
        cognitive trait that makes reading social cues more difficult affects a man whose
        professional life is inseparably bound to public communication. This reading is a
        plausible interpretation, not a proven clinical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the social Seven's pattern is inevitably linked to
        Asperger's syndrome – <strong>any person can develop any form of neurological
        difference, regardless of subtype.</strong> What can be shown in Musk's case is a
        pattern in dealing with a late-named neurological diagnosis that keeps recurring in a
        pronounced social Type 7 with a Six-Wing – one of many possible readings, not a
        verdict. The corresponding illness pattern is being developed gradually in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Musk does not know his own pattern as an Enneagram structure – the social Type 7 with
        a Six-Wing reflexively clings to the conviction that the largest possible public
        stage is the right place for every message, including his own neurological
        diagnosis, and largely lives out exactly this pattern unchanged to this day. Anyone
        who does not recognize their own tendency to immediately turn personal matters into
        public spectacle as a pattern risks that serious topics get lost in entertainment
        instead of receiving the depth they deserve.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Type 7 with Six-Wing explains much about how <strong>Elon Musk</strong>
        handled his own Asperger's syndrome: a man whose entire public work rests on maximum
        visibility chose the largest available stage even for his own neurological diagnosis
        – the beaver that does not hide its own otherness, but turns it into one more,
        publicly visible part of its construction.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-elon-musk", label:"Portrait: Elon Musk (SO7w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function franzLisztKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-franz-liszt-portrait.jpg" alt="Franz Liszt" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Franz Liszt</p>
        <p class="krim-portrait-typ">SX7w8 · Sexual Type 7 with Eight-wing · 1811–1886</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Chimpanzee</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx7.jpg" alt="Animal correspondence: Chimpanzee" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX7")};left:${tierAvatarLeft("SX7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Franz Liszt</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-franz-liszt">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as a piano virtuoso and composer
        and his type structure in general. This page delves into a chapter only touched on
        there: heart failure, dropsy, and progressive blindness in his final years, which
        never slowed him down but drove him all the way to Bayreuth, where he died of
        pneumonia in 1886.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Liszt</strong> is classified as the <strong>Sexual Type 7 with
        Eight-wing</strong>. Naranjo called this subtype <em>Suggestibility</em>: complete
        devotion to whatever inspires enthusiasm, without reservation or brake. The Eight-wing
        adds a readiness for open conflict rather than avoidance. This same excess – the
        passion of the Seven – also shaped how Liszt handled his own progressing illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Progressive heart failure and dropsy from the 1870s on:</strong>
        Years before his death, Liszt increasingly suffered from heart problems and edema
        ("dropsy") that noticeably limited his physical stamina.</p>
        <p class="vb-intro"><strong>b) Progressive blindness in one eye:</strong>
        Cataracts increasingly weakened Liszt's vision in one eye in his final years – a
        significant impairment for a pianist and conductor that he barely mentioned.</p>
        <p class="vb-intro"><strong>c) An unchanged travel schedule despite his ailments:</strong>
        Despite his health problems, Liszt kept up his "vie trifurquée" – a life he stubbornly
        divided between Weimar, Rome, and Budapest, with constant teaching, traveling, and
        public appearances.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) No withdrawal from teaching and traveling:</strong>
        Liszt taught hundreds of students into his final years and continued traveling
        tirelessly between his three residences – a lifestyle he did not scale back despite
        his fading strength.</p>
        <p class="vb-intro"><strong>b) Increasing alcohol consumption in his final years:</strong>
        Contemporaries reported with concern a growing brandy consumption, linked to
        depressive moods and the numerous personal losses of his later years.</p>
        <p class="vb-intro"><strong>c) Depressive phases after severe personal losses:</strong>
        The early deaths of his son Daniel in 1859 and his daughter Blandine in 1862 left deep
        marks that increasingly mixed with his physical ailments in his final years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The journey to Bayreuth in July 1886:</strong>
        Despite rapidly deteriorating health, the already gravely ill Liszt traveled to the
        festival founded by his son-in-law Richard Wagner to support his daughter Cosima.</p>
        <p class="vb-intro"><strong>b) Attending a performance despite fever:</strong>
        Already weakened by a severe cold and fever, Liszt insisted on attending a performance
        of "Tristan und Isolde" – against the explicit advice of the attending doctors, who had
        ordered strict bed rest.</p>
        <p class="vb-intro"><strong>c) Death on 31 July 1886 in Bayreuth:</strong>
        Franz Liszt died at age 74 of pneumonia, right in the middle of the festival that was
        inseparably bound up with his own musical legacy.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #b48a3a 10%, var(--paper));border:1.5px solid #b48a3a;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.8rem;color:#7a5a1e;">A Parallel Within the Same Subtype: Robert Schumann</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <a href="javascript:void(0)" data-route="beruehmte-robert-schumann">Robert Schumann</a>
        (SX7w8) knew this same inability to brake an intensity in time – in his case it
        escalated into the leap into the Rhine in 1854. His own
        <a href="javascript:void(0)" data-route="krankheitsportraets-robert-schumann">illness
        portrait</a> shows the same SX7w8 pattern as Liszt: a capacity for devotion with no
        built-in brake that, when it hits a limit, discharges not into retreat but into further
        escalation – in Liszt's case the journey to Bayreuth despite severe illness, in
        Schumann's case the desperate leap into icy water.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A death in the middle of his own legacy:</strong>
        That Liszt died precisely at the Bayreuth Festival – which would hardly have existed in
        this form without his support of Wagner and his family bond to Cosima – reads like a
        bitter punchline to his life.</p>
        <p class="vb-intro"><strong>b) An end long underestimated:</strong>
        Because Liszt barely discussed his ailments publicly for years and kept teaching and
        traveling, the seriousness of his condition was only truly recognized by those around
        him in his final weeks.</p>
        <p class="vb-intro"><strong>c) One last, uncompromising gesture:</strong>
        Attending the performance despite fever and medical prohibition was often read in
        hindsight as one final, typical gesture from a man who had never let outside limits
        constrain him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The chimpanzee that never slowed down, even at the end:</strong>
        The same inexhaustible capacity for enthusiasm that drove Liszt across Europe for
        decades kept him from stopping even in the face of massive health warnings.</p>
        <p class="vb-intro"><strong>b) Medical advice against his own drive:</strong>
        His refusal to follow his doctors' advice and skip the performance shows the same
        Eight-wing defiance that once led Liszt to publicly oppose the established Leipzig
        music world – resistance only made him more determined.</p>
        <p class="vb-intro"><strong>c) No orderly retreat, but a collapse in the midst of events:</strong>
        Instead of a quiet twilight, Liszt's life ended right in the center of a public
        event – the chimpanzee that stayed in the thick of things until the very end, rather
        than withdrawing.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Years of growing ailments that never slowed his pace:</strong>
        Heart failure, dropsy, and blindness developed over years – yet Liszt's travel and work
        schedule remained practically unchanged almost until the end. The Seven's passion,
        <strong>gluttony</strong>, knew no brakes even in the face of his own physical decline.</p>
        <p class="vb-intro"><strong>b) Alcohol as a quiet companion to the excess:</strong>
        The growing brandy consumption of his final years fits the same pattern as his entire
        life: intensity as the answer to every experience, including grief and physical
        decline, rather than retreat or rest.</p>
        <p class="vb-intro"><strong>c) When the Seven turns into the One under chronic stress:</strong>
        That Liszt insisted on attending the performance despite fever and explicit medical
        prohibition reads less like the playful free choice of a healthy Seven and more like an
        almost dutiful, rigid refusal to yield. Someone who lives for years in chronic physical
        decline increasingly moves along their stress line toward their stress point – for the
        Seven, that is the One. This unyielding "nothing will stop me" in his final weeks
        resembles the rigid duty-fulfillment of the stress point, not the free-spirited choice
        of the core type – with an unchanged core type of SX7w8.</p>
        <p class="vb-intro"><strong>d) Why the heart and lungs, of all things?</strong>
        For a Sexual Seven whose entire vitality expressed itself in tireless physical presence
        on stage and constant travel, one interpretation suggests itself: the very organs that
        enabled his stamina and endurance became the stage for decline – as if the body had
        eventually presented the bill for a life without a built-in pause. This interpretation
        is a plausible reading, not a documented historical causal link, and is developed
        further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Sexual Seven pattern inevitably leads to heart or lung
        disease – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Liszt's case illustrates is a pattern in how a pronounced Sexual Seven with
        Eight-wing handles progressing illness that keeps recurring in practice – one of many
        possible interpretations, not a judgment. The corresponding illness pattern is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Liszt did not know his own pattern – the Sexual Seven with Eight-wing is not slowed by
        resistance but spurred on by it, and exactly this pattern drove him relentlessly
        forward despite heart failure, blindness, and fever, instead of slowing down in time.
        Someone who does not recognize their own inability to accept a limit as a recurring
        pattern cannot break it, even when their own body has long been sending unmistakable
        warning signs.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Liszt's</strong> Sexual Seven with Eight-wing is legible once more in the course
        of his illness: years of growing physical ailments that never slowed his pace, and one
        final, uncompromising appearance against medical advice that became the fatal blow. The
        chimpanzee that swept whole halls into ecstasy – and whose own body was, in the end, the
        only thing that finally brought him to a halt.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-franz-liszt", label:"Portrait: Franz Liszt (SX7w8) – life's work"},
        {route:"krankheitsportraets-robert-schumann", label:"Illness Portrait: Robert Schumann (SX7w8) – the same inability to slow down"},
        {route:"krankheitsportraets-leonard-bernstein", label:"Illness Portrait: Leonard Bernstein (SX7w6) – final concert against medical advice"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx7", label:"Subtype Profile SX7"},
      ])}
    </div>
  `);
}

export function friedrichNietzscheKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-friedrich-nietzsche-portrait.jpg" alt="Friedrich Nietzsche" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Friedrich Nietzsche</p>
        <p class="krim-portrait-typ">SX5w4 · Sexual Type 5 with Four-wing · 1844–1900</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Hedgehog</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx5.jpg" alt="Animal correspondence: Hedgehog" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX5")};left:${tierAvatarLeft("SX5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Friedrich Nietzsche</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-friedrich-nietzsche">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work and type structure in general.
        This page deals exclusively with a chapter only fleetingly touched on
        there: for decades, Nietzsche was accompanied by chronic migraines, agonizing stomach complaints,
        and progressively failing eyesight, nearly to the point of blindness. On January 3,
        1889, he collapsed on a street in Turin and spent the last eleven years of his life in
        mental darkness – a cause that remains unresolved to this day.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Nietzsche</strong> is classified as the <strong>Sexual Five with Four-wing</strong>
        – the same subtype as
        <a href="javascript:void(0)" data-route="beruehmte-frederic-chopin">Frédéric Chopin</a>
        in this Compass. Naranjo called the sexual Five the Five's countertype: her key concept
        is <em>Trust</em> – she seeks not distance from everyone, but the one bond that carries
        everything. The Four-wing turns the pain of a rupture into artistic and linguistic
        expression of unheard-of intensity.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Turned inward, radically honest:</strong>
        Nietzsche's gaze sought his own truth without regard for convention – the typical
        Five's gaze, which illuminates itself before it judges the world.</p>
        <p class="vb-intro"><strong>b) Watchful of his own body, unable to spare it:</strong>
        Nietzsche kept meticulous records of his migraine attacks, visual disturbances, and
        digestive complaints – the same analytical precision he applied to philosophy also
        turned onto his own, increasingly failing nervous system.</p>
        <p class="vb-intro"><strong>c) Public only on paper, never in conversation:</strong>
        His most radical self-revelation, <em>Ecce Homo</em>, was written shortly before the
        collapse – the sexual Five opens herself completely, but exclusively within her own
        medium, never in direct, unguarded contact.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Resigning from office:</strong>
        In 1879, Nietzsche gave up his professorship in Basel for health reasons – at only 34.
        Giving up a secure position was, for the sexual Five, less a loss than a liberation:
        withdrawal is not weakness but the precondition for the one, decisive work.</p>
        <p class="vb-intro"><strong>b) Ten years searching for the right climate:</strong>
        Sils-Maria in summer, Nice and Genoa in winter – Nietzsche wandered from place to
        place, always searching for conditions that eased his complaints, often with just one
        suitcase.</p>
        <p class="vb-intro"><strong>c) Peak productivity despite physical decline:</strong>
        It was precisely in these years of radical withdrawal and advancing illness that his
        major works emerged – <em>Thus Spoke Zarathustra</em>, <em>Beyond Good and Evil</em>,
        <em>On the Genealogy of Morality</em>.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Crisis as a trigger for writing:</strong>
        Within a few weeks of the final rupture with Lou Salomé in 1883, Nietzsche wrote the
        first part of <em>Thus Spoke Zarathustra</em> – pain that turned immediately into
        language rather than being suppressed.</p>
        <p class="vb-intro"><strong>b) Near-total isolation as a way of life:</strong>
        With no academic post, no lasting bond, mostly alone – the sexual Five does not merely
        endure this isolation, she needs it to keep open the one channel through which
        everything flows.</p>
        <p class="vb-intro"><strong>c) The collapse as the most radical symptom:</strong>
        On January 3, 1889, Nietzsche collapsed in Turin, reportedly after embracing a
        mistreated carriage horse. From that day on, he never wrote another philosophical
        work.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A work that only took effect after the collapse:</strong>
        Nietzsche died in 1900, never living to see how his thought would shape twentieth-
        century philosophy – an impact that set in entirely posthumously.</p>
        <p class="vb-intro"><strong>b) Distorted by other hands:</strong>
        His sister Elisabeth, who cared for him in his final years, later falsified his
        writings for nationalist purposes – a bitter irony for a thinker whose work
        specifically opposed being co-opted by foreign ideologies.</p>
        <p class="vb-intro"><strong>c) An image that still resonates today:</strong>
        The collapsing philosopher embracing a mistreated horse has become one of the most
        famous images in the history of philosophy – a symptom that became a legend.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Miserliness with energy, not money:</strong>
        The Five's fatal flaw applies, for the SX5, not to material wealth but to her own
        strength – and Nietzsche had scarcely any reserve he did not invest entirely in his
        work.</p>
        <p class="vb-intro"><strong>b) Fusion of thought and suffering:</strong>
        For Nietzsche, there was no separation between physical pain and philosophical
        insight – some of his sharpest ideas arose directly out of phases of acute migraine.</p>
        <p class="vb-intro"><strong>c) Restless productivity to the point of total exhaustion:</strong>
        In the years before the collapse, Nietzsche wrote at a pace that clearly overtaxed his
        body – as if he sensed the time remaining to him was limited.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) Decades of unexplained complaints:</strong>
        Chronic migraines, agonizing stomach complaints, progressively failing eyesight – the
        exact cause remained unresolved in his lifetime and is still debated today: from a
        rare hereditary disorder to a slow-growing brain tumor to a syphilis infection
        diagnosed at the time but never conclusively proven.</p>
        <p class="vb-intro"><strong>b) Eleven years of mental darkness after the collapse:</strong>
        After January 3, 1889, Nietzsche never again spoke or wrote coherently. He was cared
        for first by his mother, then, after her death in 1897, by his sister Elisabeth, until
        he died in Weimar in 1900.</p>
        <p class="vb-intro"><strong>c) The last open channel:</strong>
        Nietzsche had, throughout his life, revealed himself almost exclusively on paper,
        never in direct conversation. When the mental collapse closed even this last remaining
        channel, no way remained to communicate with the world at all.</p>
        <p class="vb-intro"><strong>d) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-frederic-chopin">Frédéric Chopin</a>
        (SX5w4) likewise broke down physically shortly after his one decisive bond had
        shattered – for Chopin, the separation from George Sand in 1847; for Nietzsche, the
        rupture with Lou Salomé in 1883. Both cases show the same SX5w4 pattern: the one bond
        that carries everything is also what the physical and creative strength depend on –
        when it breaks, physical collapse follows close behind.</p>
        <p class="vb-intro"><strong>e) Why the head, of all places?</strong>
        Migraines, failing eyesight, and finally mental collapse struck Nietzsche in exactly
        the organ that forms the center of the sexual Five's entire existence: the place where
        thoughts arise, are concentrated, and finally transformed into language. For someone
        who communicated with the world almost exclusively through his head – through the
        written word – an attack on precisely this organ was the most radical threat
        imaginable: not only to the body, but to the only connection he still had to the
        world. That the mind itself failed, in a philosopher whose entire work was devoted to
        the sharpness of thought, reads as the bitterest conceivable intensification of his
        own life pattern. This reading is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>f) Framing without determinism:</strong>
        This does not mean the sexual Five's pattern inevitably leads to neurological illness –
        <strong>every person can develop any illness, regardless of subtype.</strong> What
        Nietzsche's case can show is a pattern that stands out again and again in practice
        wherever total concentration of one's own strength on a single intellectual work is
        present – one possible explanation among many, not a verdict. The corresponding
        condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>g) The Unconscious Fixation as a Further Factor:</strong>
        Nietzsche did not know his own pattern – the sexual Five concentrates all its strength into the one channel through which everything discharges, with no regard for its own reserves, and that is exactly what drove him to keep writing until total collapse. Someone who does not recognize their own concentration of strength does not notice when the last reserve has been spent.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Nietzsche's</strong> illness follows, once again, exactly the pattern of the
        Sexual Five with Four-wing: radical concentration of his own strength on a single work, an
        isolation that was precondition rather than deficiency, and a collapse that struck
        exactly the one organ through which he had ever communicated with the world. The hedgehog
        from Röcken never fully revealed himself to another person – but he did, page by page,
        to his work, until the very head that had made all of it possible fell silent.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-friedrich-nietzsche", label:"Portrait: Friedrich Nietzsche (SX5w4) – life's work"},
        {route:"beruehmte-frederic-chopin", label:"Portrait: Frédéric Chopin (SX5w4)"},
        {route:"krankheitsportraets-frederic-chopin", label:"Illness Portrait: Frédéric Chopin (SX5w4) – same SX5w4 parallel"},
        {route:"krankheitsportraets-blaise-pascal", label:"Illness Portrait: Blaise Pascal (SX5w6)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx5", label:"Subtype Profile SX5"},
      ])}
    </div>
  `);
}

export function goldaMeirKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-golda-meir-portrait.jpg" alt="Golda Meir" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Golda Meir</p>
        <p class="krim-portrait-typ">SE8w9 · Self-Preservation Type 8 with Nine-wing · 1898–1978</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Orangutan</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se8.jpg" alt="Animal correspondence: Orangutan" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE8")};left:${tierAvatarLeft("SE8")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Golda Meir</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-golda-meir">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general, with
        a brief mention of her concealed cancer diagnosis. This page delves into that exact
        chapter: a lymphoma diagnosis she kept largely secret for seventeen years – including
        her entire term as Prime Minister.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Meir</strong> is classified as the <strong>Self-Preservation Eight with
        Nine-wing</strong> – the same subtype as <a href="javascript:void(0)" data-route="beruehmte-winston-churchill">Winston Churchill</a>
        in this Compass. Naranjo called this subtype <em>Satisfacción</em>: security arises
        through uncompromising defense of one's own territory and the refusal to show weakness.
        The Nine-wing adds endurance and the ability to hold a position for years without
        prematurely abandoning it – for Meir, this extended to her own health as well.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Her own body as a private matter:</strong>
        Meir treated questions of health throughout her life as something concerning only
        herself and her closest circle – never as something deserving public debate, let alone
        sympathy.</p>
        <p class="vb-intro"><strong>b) A diagnosis already in the 1960s:</strong>
        Sources date her original cancer diagnosis differently, mostly to the late 1960s –
        that is, before she took office as Prime Minister in 1969.</p>
        <p class="vb-intro"><strong>c) Continuing to work as a matter of course:</strong>
        From the outset, it was clear to Meir that the diagnosis would have no bearing on her
        political career – a pattern that ran through her entire later tenure.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Regular, concealed treatment appointments:</strong>
        For years, Meir attended recurring medical treatments kept hidden from the public and
        from much of her own cabinet.</p>
        <p class="vb-intro"><strong>b) An office that made no allowance for the diagnosis:</strong>
        During her term as Prime Minister (1969–1974), Meir made some of the most consequential
        foreign-policy decisions of her country's history – alongside an illness she
        consistently kept out of any official scheduling.</p>
        <p class="vb-intro"><strong>c) A small circle in the know:</strong>
        Only a close circle of family, doctors, and a few political confidants knew the true
        extent of her illness – a silence that held for years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The Yom Kippur War of 1973 in the midst of her illness:</strong>
        The hardest weeks of her political career – the surprise attack by Egypt and Syria in
        October 1973 and its aftermath – Meir carried without ever making her cancer diagnosis
        public in any way.</p>
        <p class="vb-intro"><strong>b) A resignation for political, not medical, reasons:</strong>
        When Meir resigned in April 1974, she cited political responsibility for the failures
        preceding the Yom Kippur War – not her health, which by that point had already been
        compromised for years.</p>
        <p class="vb-intro"><strong>c) Death on 8 December 1978:</strong>
        Meir died in Jerusalem at age 80 from the effects of her cancer – more than a decade
        after her presumed original diagnosis and four years after leaving office.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) One of the best-kept health secrets of her era:</strong>
        Only after her death did the full extent and long duration of her illness become
        public knowledge – evidence of how thoroughly Meir controlled this information.</p>
        <p class="vb-intro"><strong>b) Respect through demonstrated resilience:</strong>
        Precisely because she showed no weakness, her reputation as an uncompromising,
        unshakeable stateswoman only grew – an effect the SE8 cultivates, consciously or not.</p>
        <p class="vb-intro"><strong>c) A tenure now read differently in hindsight:</strong>
        Many historical assessments of her years in office only retrospectively account for
        the health burden under which her most important decisions were actually made.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The orangutan that defended its territory even while ill:</strong>
        Where a publicly visible weakness could have undermined her authority, Meir responded
        with the same quiet, tenacious control that guided her entire political life.</p>
        <p class="vb-intro"><strong>b) No room for sympathy:</strong>
        Meir's dry humor and directness left practically no room in her circle for concern
        about her own person – weakness was neither shown nor invited.</p>
        <p class="vb-intro"><strong>c) Endurance over haste, thanks to the Nine-wing:</strong>
        Where an SE8 with a more pronounced Seven-wing might have pushed more impatiently for
        treatment or given up sooner, Meir held the same calm, unwavering course for years.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Seventeen years between diagnosis and death:</strong>
        From her presumed original diagnosis in the late 1960s to her death in 1978, Meir lived
        nearly two decades with an illness that never outwardly touched her political career.</p>
        <p class="vb-intro"><strong>b) Office as territory not surrendered without a fight:</strong>
        Even as the illness progressed, Meir never considered giving up her office for health
        reasons – just as 10 Downing Street was territory for Churchill, the office of Prime
        Minister was territory for Meir.</p>
        <p class="vb-intro"><strong>c) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="beruehmte-winston-churchill">Winston Churchill</a>
        (SE8w9) likewise concealed a serious health crisis as Prime Minister – in his case a
        stroke in 1953 – from the public and much of his own cabinet. Both cases show the same
        SE8 pattern: one's own position is defended like territory – illness is no reason to
        surrender it voluntarily, but information one controls oneself. This parallel is also
        explored in the <a href="javascript:void(0)" data-route="krankheitsportraets-winston-churchill">illness
        portrait on Churchill</a>.</p>
        <p class="vb-intro"><strong>d) Why the lymphatic system, of all things?</strong>
        For a Self-Preservation Eight whose entire identity rests on the ability to fend off
        threats from outside, one interpretation suggests itself: an organ system meant to
        protect the body from external invaders itself became the stage for a decades-long
        hidden battle – waged with the same quiet control Meir applied to every other threat
        in her life. This interpretation is a plausible reading, not a documented historical
        causal link, and is developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean that the Self-Preservation Eight pattern inevitably leads to
        lymphoma – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Meir's case illustrates is a pattern in the handling of one's own illness that
        keeps recurring in practice among people with a pronounced Self-Preservation Eight with
        Nine-wing – one of many possible interpretations, not a judgment. The corresponding
        illness pattern is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Meir did not know her own pattern – the Self-Preservation Eight tolerates no weakness,
        least of all its own, and that is exactly why she concealed a serious cancer diagnosis
        for seventeen years rather than ever acknowledge it publicly. Someone who does not know
        their own fixation on invulnerability mistakes concealment for strength – even where an
        open approach to one's own illness would actually have been the more sovereign
        response.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Meir's</strong> Self-Preservation Eight with Nine-wing is legible once more in
        the course of her illness: a cancer diagnosis kept concealed for seventeen years, a
        tenure full of consequential decisions made alongside that very illness, and a
        resignation she grounded in politics, never in health. The orangutan that climbs
        slowly, never falls, and, even facing a fatal illness, showed no one how much it
        wavered.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-golda-meir", label:"Portrait: Golda Meir (SE8w9) – life's work"},
        {route:"krankheitsportraets-winston-churchill", label:"Illness Portrait: Winston Churchill (SE8w9) – same concealment strategy"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se8", label:"Subtype Profile SE8"},
      ])}
    </div>
  `);
}

export function hermannHesseKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-hermann-hesse-portrait.jpg" alt="Hermann Hesse" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Hermann Hesse</p>
        <p class="krim-portrait-typ">SP5w6 · Self-Preservation Type 5 with Six-wing · 1877–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Owl</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se5.jpg" alt="Animal correspondence: Owl" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE5")};left:${tierAvatarLeft("SE5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Hermann Hesse</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-hermann-hesse">famous-personality portrait</a>
        – that page covers his radical withdrawal to Ticino and his literary work on the
        individual between two worlds. This page goes deeper into a chapter mentioned there
        only in passing: lifelong severe migraines, chronic eye ailments, and recurring
        depressive crises that accompanied him from youth into old age.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hesse</strong> is assigned to the <strong>Self-Preservation Type 5 with
        Six-wing</strong>. SP5 builds a "fortress" – a strictly controlled territory that
        filters closeness and keeps burden at bay. This same principle also determined how he
        handled his chronic afflictions: not through treatment within the ordinary social
        sphere, but through self-chosen, tightly controlled therapeutic and literary
        processing within his own fortress.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) First severe crisis at fifteen:</strong>
        After breaking out of the Maulbronn seminary in 1892, Hesse suffered a severe
        psychological breakdown and was briefly committed to a psychiatric institution – the
        first of a lifelong series of depressive crises.</p>
        <p class="vb-intro"><strong>b) Migraines beginning in early adulthood:</strong>
        Already in his twenties, severe migraine attacks began, which from then on regularly
        left him unable to work for days at a time – an affliction that accompanied him
        throughout his life.</p>
        <p class="vb-intro"><strong>c) Growing eye problems alongside the migraines:</strong>
        Chronic eye ailments joined the migraines and at times worsened so severely that
        reading and writing – the very foundation of his entire work – became barely
        possible.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Nervous breakdown in 1916:</strong>
        The death of his father, his youngest son's severe illness, and the deepening
        psychiatric crisis of his first wife Maria Bernoulli led to another severe breakdown
        in 1916.</p>
        <p class="vb-intro"><strong>b) Psychoanalysis as a controlled framework:</strong>
        Rather than turning to social bonds, Hesse underwent psychoanalysis with Josef
        Bernhard Lang, a student of C. G. Jung – more than 60 sessions within a strictly
        bounded, therapeutic setting.</p>
        <p class="vb-intro"><strong>c) Withdrawal to Ticino as a lasting solution:</strong>
        In 1919 he left Germany and his family for good and moved alone to Montagnola – a
        move that followed directly on the heels of the most severe of his crises up to that
        point.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Recurring crises into old age:</strong>
        Even after the move to Ticino, depressive phases, migraines and eye ailments remained
        part of his everyday life – the new environment eased the symptoms but did not
        eliminate them.</p>
        <p class="vb-intro"><strong>b) A strictly controlled daily routine as a coping strategy:</strong>
        Hesse organized his life around a precisely regulated rhythm of writing, gardening
        and painting – a structure that helped him manage the recurring episodes without
        making them public.</p>
        <p class="vb-intro"><strong>c) Literary rather than personal processing:</strong>
        His crises flowed directly into his work – "Steppenwolf" (1927) is considered a
        direct literary processing of a particularly severe depressive phase in the 1920s.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A body of work drawn from his own suffering:</strong>
        Precisely because Hesse described his inner crises so precisely and without
        embellishment, generations of readers who experienced themselves as outsiders found
        themselves reflected in his books.</p>
        <p class="vb-intro"><strong>b) A Nobel Prize he did not accept in person:</strong>
        When he received the Nobel Prize in Literature in 1946, he did not travel to
        Stockholm in person – true to his logic of withdrawal, and possibly also for health
        reasons.</p>
        <p class="vb-intro"><strong>c) A life that, despite everything, lasted 85 years:</strong>
        Unlike some other illness histories in this Compass, Hesse's chronic afflictions did
        not lead to an early death – he died in 1962 in his sleep, at an advanced age, in the
        same self-chosen environment that had taken him in decades earlier.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The fortress that also filtered his own illness:</strong>
        The same radical control over closeness that shaped Hesse's entire life also
        determined how he handled his crises – never in unfiltered social relationships, but
        always within strictly bounded frameworks: therapy, correspondence, literary
        processing.</p>
        <p class="vb-intro"><strong>b) The Six-wing and watchful concern for himself:</strong>
        The same watchful, almost anxious attentiveness that placed him sharply against the
        war enthusiasm of 1914 also turned inward – a constant monitoring of his own
        psychological state that led him to seek professional help early rather than
        suppress the crisis.</p>
        <p class="vb-intro"><strong>c) No public testimony, but a literary one:</strong>
        Unlike some other cases in this Compass, Hesse rarely spoke publicly about his
        suffering – yet his work itself became an indirect, extensive testimony to this inner
        struggle.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A mind that became its own burden:</strong>
        Hesse's entire life was shaped by the conviction that undisturbed introspection could
        only be secured through radical withdrawal – migraines, eye ailments and depression
        were threats that manifested precisely in the organ this withdrawal needed most: his
        own head.</p>
        <p class="vb-intro"><strong>b) A Parallel in the Same Subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-spinoza">Baruch de Spinoza</a>
        (also SP5w6) died of a lung disease that arose from his own craft; Hesse suffered from
        migraines and depression his entire life without dying from them. Both cases show the
        same core structure of SP5 from different angles: where Spinoza kept almost entirely
        silent about his suffering, Hesse processed his systematically in therapy and
        literature – two variants of the same withdrawal pattern, one fatal, one lifelong but
        bearable. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-spinoza">illness portrait on Spinoza</a>.</p>
        <p class="vb-intro"><strong>c) Why the head and eyes, of all places?</strong>
        For a Self-Preservation Five with Six-wing whose entire strength rested on
        observation, reading and intense mental processing, one interpretation suggests
        itself: precisely the organs that enabled his quiet observation of the world and his
        own inner world became the site of recurring suffering – as if the intense,
        inward-directed observation eventually turned against seeing and thinking
        themselves. This interpretation is a plausible reading, not a documented historical
        causal link, and is developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of Self-Preservation Five inevitably leads to migraine
        or depression – <strong>anyone can develop any illness, regardless of subtype.</strong>
        What Hesse's case shows is a pattern in how a pronounced Self-Preservation Five with
        Six-wing repeatedly deals with chronic psychological and physical suffering – one
        possible reading among many, not a verdict. The corresponding illness profile is
        gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Hesse did not know his own pattern – Self-Preservation Five with Six-wing reflexively
        secures its own controlled inner world rather than ever fully engaging with social
        support in dealing with its own illness, and he lived out exactly this pattern
        unchanged into old age. Whoever does not recognize their own need to manage every
        crisis within their own fortress as a pattern carries it alone for a lifetime.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        Self-Preservation Five with Six-wing explains much about the course of
        <strong>Hesse's</strong> own illness: a man whose entire strength rested on quiet
        observation and processing carried his heaviest crises alone for decades – the owl
        that never quite found rest, even in its own safe garden.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-hermann-hesse", label:"Portrait: Hermann Hesse (SP5w6) – writer"},
        {route:"krankheitsportraets-spinoza", label:"Illness Portrait: Baruch de Spinoza (SP5w6) – same withdrawal logic, different illness"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se5", label:"Subtype Profile SP5"},
      ])}
    </div>
  `);
}

export function jamieLeeCurtisKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jamie-lee-curtis-portrait.jpg" alt="Jamie Lee Curtis" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jamie Lee Curtis</p>
        <p class="krim-portrait-typ">SX1w2 · Sexual Type 1 with Two-Wing · b. 1958</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Black Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Animal correspondence: Black Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jamie Lee Curtis</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-jamie-lee-curtis">Famous
        Personalities portrait</a>. This page delves into a chapter only briefly mentioned
        there: a 22-year opioid dependency that began in 1989 after a cosmetic procedure and
        that she only overcame in 1999.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Curtis</strong> is assigned to the <strong>sexual Type 1 with Two-Wing</strong>.
        The SX1 tolerates no hypocrisy, not even toward itself; the Two-Wing adds the care that
        ultimately gave her the push to get clean. Exactly this combination – years of secret
        failure against a self-imposed standard, followed by a radically honest, public
        reckoning – shaped the course of her addiction.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Opioids prescribed after cosmetic surgery in 1989:</strong>
        By her own account, Curtis was prescribed opioids after a minor cosmetic eyelid
        procedure in 1989, initially used as directed.</p>
        <p class="vb-intro"><strong>b) A gradual slide into dependency:</strong>
        What began as medically prescribed pain treatment developed over the years into a
        physical dependency that went far beyond the originally intended use.</p>
        <p class="vb-intro"><strong>c) A carefully hidden continuation for years:</strong>
        Curtis later described maintaining a functioning facade for over ten years while
        secretly taking Vicodin – even from her closest family members.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Discovered by her own sister:</strong>
        By her own account, the dependency became apparent when she realized she had taken
        alcohol and medication belonging to her sister – a moment that forced her to confront
        the reality of her addiction.</p>
        <p class="vb-intro"><strong>b) An immediate decision to become sober in 1999:</strong>
        Curtis describes 19 February 1999 as the day she last used opioids or alcohol – a
        date she has consistently observed as her sobriety anniversary ever since.</p>
        <p class="vb-intro"><strong>c) Support through family and therapeutic structures:</strong>
        By her own account, recovery succeeded through a combination of therapy, support
        groups, and the open backing of her family.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Early public disclosure:</strong>
        Curtis spoke publicly about her addiction as early as the early 2000s – at a time
        when celebrities typically still concealed their dependencies.</p>
        <p class="vb-intro"><strong>b) Advocacy for addiction support organizations:</strong>
        Since then she has publicly supported organizations working on addiction prevention
        and treatment, and regularly speaks about the link between prescribed painkillers
        and opioid dependency.</p>
        <p class="vb-intro"><strong>c) Criticism of the pharmaceutical industry's role:</strong>
        Curtis has repeatedly spoken critically about the responsibility of pharmaceutical
        companies in the American opioid crisis, drawing on her own experience as a
        patient.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Recognition as one of Hollywood's first open voices:</strong>
        Curtis is still considered one of the first major Hollywood actresses to speak
        openly and directly about her own addiction.</p>
        <p class="vb-intro"><strong>b) Sobriety maintained for over two decades:</strong>
        Since 1999, Curtis has publicly described herself as sober – a continuity she
        regularly addresses in interviews and speeches, without glorifying the struggle.</p>
        <p class="vb-intro"><strong>c) No career setback from the disclosure:</strong>
        Contrary to fears, the public openness did not harm her career – Curtis remained
        continuously active and even reached the greatest success of her career so far with
        the 2023 Oscar.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The inner contradiction between standard and secret addiction:</strong>
        The SX1's characteristic intolerance of hypocrisy collided in Curtis with an illness
        that made her a hypocrite herself for years – a contradiction that helps explain the
        later, especially unsparing openness.</p>
        <p class="vb-intro"><strong>b) The Two-Wing and the impulse toward care after getting clean:</strong>
        Once Curtis had overcome her own dependency, the same energy that had previously
        turned inward turned outward: she began supporting other people affected and
        advocating publicly for addiction prevention.</p>
        <p class="vb-intro"><strong>c) Radical openness as an expression of passion:</strong>
        That Curtis did not just end her addiction but actively made it public fits the SX1's
        characteristic conviction that authenticity matters more than appearance – even when
        that authenticity includes one's own weakness.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A woman who preaches authenticity and hid an addiction for over a decade:</strong>
        Curtis's entire later public work rests on the conviction that what is genuine
        matters more than appearance – of all people, she lived exactly the appearance she
        would later criticize most sharply, for more than ten years.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel appears with
        <a href="javascript:void(0)" data-route="krankheitsportraets-robbie-williams">Robbie
        Williams (SX1w2)</a>: Williams too hid a decades-long addiction and depression
        behind a publicly successful facade, before radically openly acknowledging it. Both
        SX1w2s show the same pattern: the demand for absolute authenticity that makes their
        own secret addiction all the more unbearable once recognized – and that later
        transforms the same intensity into an unsparingly open reckoning.</p>
        <p class="vb-intro"><strong>c) Why opioids, of all things, the chemical dampening of one's own intensity?</strong>
        For a sexual One with a Two-Wing whose entire being rests on complete presence and
        intensity, one interpretation suggests itself: opioids create exactly the numbing and
        distance from one's own alertness that stands diametrically opposed to the SX1
        pattern – a substance that dulls one's own fire instead of feeding it. This reading is
        a plausible interpretation, not a proven clinical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Classification without determinism:</strong>
        This does not mean that the sexual One's pattern inevitably leads to opioid
        dependency – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Curtis's case is a pattern in dealing with an
        overcome addiction that keeps recurring in a pronounced sexual One with a Two-Wing –
        one of many possible readings, not a verdict. The corresponding illness pattern is
        being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Curtis does not know her own pattern as an Enneagram structure – the sexual One with
        a Two-Wing reflexively clings to a standard of absolute authenticity, which makes
        admitting its own weakness especially difficult for years, and lived out exactly this
        pattern until the forced confrontation with her own addiction. Anyone who does not
        recognize their own tendency to hide failure longer the higher their own moral
        standard is as a pattern risks that an addiction takes hold unnoticed for years.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The sexual Type 1 with Two-Wing explains much about the course of <strong>Jamie Lee
        Curtis's</strong> addiction: a woman whose entire later work is devoted to
        authenticity first had to live through more than a decade of her own appearance
        before she could speak her truth – the black mamba who deceived herself the longest
        before becoming the sharpest voice against exactly that deception.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-jamie-lee-curtis", label:"Portrait: Jamie Lee Curtis (SX1w2)"},
        {route:"krankheitsportraets-robbie-williams", label:"Illness Portrait: Robbie Williams (SX1w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx1", label:"Subtype Profile SX1"},
      ])}
    </div>
  `);
}

export function julesVerneKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-jules-verne-portrait.jpg" alt="Jules Verne" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Jules Verne</p>
        <p class="krim-portrait-typ">SO7w6 &middot; Social Type 7 with Six-wing &middot; 1828–1905</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Beaver</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so7.jpg" alt="Animal correspondence: Beaver" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO7")};left:${tierAvatarLeft("SO7")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Jules Verne</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-jules-verne">Famous Personality Portrait</a>
        in this Compass – that portrait focuses on his restless literary world-building.
        This page explores a chapter only briefly covered there: on March 9, 1886, his mentally
        disturbed nephew Gaston shot him twice, and one bullet remained permanently lodged
        in his leg – Verne walked with a limp for the rest of his life and later also
        developed diabetes.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Jules Verne</strong> is assigned to the <strong>Social Type 7 with Six-wing</strong>.
        The SO7 sacrifices its own immediate enjoyment for a larger idea; the Six-wing adds
        caution and loyalty toward authority. This exact combination – the will to keep
        building despite setback, paired with the Six's typical tendency to conceal
        weakness rather than openly admit it – also determined how Verne handled the
        permanent injury and its consequences.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) The nephew's shot on March 9, 1886:</strong>
        Verne's nephew Gaston, who suffered from a never clearly diagnosed mental illness,
        fired twice at his uncle in front of the house in Amiens. One shot missed, the
        second struck him in the left shin.</p>
        <p class="vb-intro"><strong>b) A bullet that was never removed:</strong>
        The bullet lodged too close to important blood vessels to be removed without
        considerable risk – the doctors decided to leave it in his leg. Verne carried it
        with him until his death.</p>
        <p class="vb-intro"><strong>c) Immediate return to work despite the incident:</strong>
        Shortly after the attack, Verne already resumed his writing work – an early sign
        of the pattern that would shape how he handled the injury going forward.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A permanent limp:</strong>
        The injury never fully healed; Verne walked with a limp for the rest of his life
        and became increasingly restricted in his mobility.</p>
        <p class="vb-intro"><strong>b) Retreat from the long voyages:</strong>
        The man who had owned three sailing yachts and traveled across Europe largely gave
        up his extensive sea voyages after the injury and withdrew increasingly to Amiens.</p>
        <p class="vb-intro"><strong>c) Diabetes in the following years:</strong>
        In the years after the attack, Verne additionally developed diabetes, which further
        weakened his physical condition without meaningfully reducing his literary
        productivity.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Municipal political engagement despite the limitation:</strong>
        Instead of withdrawing, Verne served on the city council of Amiens after the
        injury and remained publicly engaged into old age – a safe, locally bounded
        framework that fit the Six-wing's caution.</p>
        <p class="vb-intro"><strong>b) Undiminished literary output:</strong>
        Even after 1886, new volumes of the "Voyages extraordinaires" kept appearing – the
        injury barely slowed the volume of his output.</p>
        <p class="vb-intro"><strong>c) An increasingly darker tone in his late work:</strong>
        Novels such as "Propeller Island" and later, posthumously published works show a
        noticeably more skeptical view of the technological progress Verne had once
        naively celebrated in his younger years.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A family drama rarely addressed publicly:</strong>
        Verne spoke only cautiously in interviews and letters about the incident and his
        nephew, who was committed to a psychiatric institution after the act – typical of
        the Six-wing, which prefers to keep composure rather than air its own suffering
        publicly.</p>
        <p class="vb-intro"><strong>b) A national hero despite visible frailty:</strong>
        Verne was celebrated during his lifetime as a literary national hero despite his
        limp and his growing health problems – the physical limitation did nothing to
        diminish his public standing.</p>
        <p class="vb-intro"><strong>c) A body of work that outlasted the injury:</strong>
        The "Voyages extraordinaires" kept growing until Verne's death in 1905, partly even
        beyond his death through posthumously published manuscripts that his son Michel
        revised.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Continuing to build instead of withdrawing:</strong>
        The same conviction that his own work was owed to the world – which carried Verne's
        entire body of work – also determined his response to the injury: not withdrawal
        into private life, but continuation of the work, only now tied to a place instead
        of the high seas.</p>
        <p class="vb-intro"><strong>b) The Six-wing and the concealed family trauma:</strong>
        Rather than publicly lamenting his own nephew's shot, Verne kept the matter largely
        private – the same loyalty and reserve toward his own family that had already shown
        in his decades-long submission to his publisher Hetzel.</p>
        <p class="vb-intro"><strong>c) The growing skepticism as a Six-typical shadow side:</strong>
        The increasingly dark tone of his late work can be read as a Six reaction: the
        SO7's initial, almost naive enthusiasm for technology gave way to a growing
        awareness of the dangers of his own creation, triggered by his own experienced
        vulnerability.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) An injury that became a silent companion:</strong>
        The bullet lodged in his leg was literally, for Verne, a part of his own body that
        he never addressed publicly, but that limited his ability to walk and his love of
        travel for the rest of his life – a burden he carried rather than put on display.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-moliere">Molière</a>
        (also SO7w6) concealed his own lung ailment for years before collapsing on stage;
        Verne concealed the family drama behind his injury and its long-term consequences
        in a similar way. Both cases show the same SO7w6 pattern: the Six's characteristic
        caution ensures that personal suffering tends to vanish behind the facade of
        continued work rather than being openly spoken. More in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-moliere">Illness Portrait of Molière</a>.</p>
        <p class="vb-intro"><strong>c) Why the leg, of all things?</strong>
        For a Social Seven with a Six-wing whose entire life rested on movement, travel,
        and opening up new worlds, one interpretation suggests itself: precisely the body
        part that had once carried him across continents and across the high seas became
        the site of the permanent limitation – a symbol of the forced groundedness of a man
        who had spent his whole life building toward the distance. This interpretation is a
        plausible reading, not a documented historical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Placing it without determinism:</strong>
        This does not mean that the Social Seven's pattern inevitably leads to a gunshot
        wound inflicted by a family member – <strong>anyone can suffer any illness or
        injury, regardless of subtype.</strong> What Verne's case illustrates is a pattern
        in how a pronounced Social Seven with a Six-wing tends to handle a permanent
        physical limitation – one of many possible interpretations, not a verdict. The
        corresponding illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Verne did not know his own pattern – the Social Seven with a Six-wing reflexively
        conceals its own suffering behind loyalty, dutifulness, and continued work instead
        of ever openly acknowledging its own vulnerability, and he lived out exactly this
        pattern unchanged into his final years of life. Someone who does not recognize
        their own tendency to conceal weakness rather than name it as a pattern cannot set
        it aside even in the face of a life-altering family trauma.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Seven with a Six-wing explains much about the course of
        <strong>Jules Verne's</strong> own injury: a man who spent his entire life building
        new worlds would not even let the bullet in his own leg stop him – the beaver that
        kept building, even once the dam had long since shown cracks.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-jules-verne", label:"Portrait: Jules Verne (SO7w6) – the beaver who wrote the future in advance"},
        {route:"krankheitsportraets-moliere", label:"Illness Portrait: Molière (SO7w6) – the same pattern of concealed suffering"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so7", label:"Subtype Profile SO7"},
      ])}
    </div>
  `);
}

export function klausKinskiKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-klaus-kinski-portrait.jpg" alt="Klaus Kinski" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Klaus Kinski</p>
        <p class="krim-portrait-typ">SX1w9 · Sexual Type 1 with Nine-wing · 1926–1991</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Black Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Animal correspondence: Black Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Klaus Kinski</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-klaus-kinski">portrait under Famous Personalities</a>
        in this Compass – that page covers his acting career and type structure in general.
        This page delves into a chapter not covered there: an involuntary psychiatric
        commitment documented in 1950 with a preliminary diagnosis of schizophrenia, a youth
        shaped by wartime captivity and poverty, and the abuse allegations his daughter Pola
        made public only after his death.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Kinski</strong> is classified as the <strong>Sexual Type 1 with Nine-wing</strong>,
        the counter-type of the One. Naranjo called this subtype <em>Zeal</em>: an unfiltered,
        uncompromising moral energy that breaks through every social filter. Exactly this
        boundless intensity, combined with the Nine-wing's persistence, runs through his
        entire, at times tragic medical history as a recurring pattern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A childhood shaped by extreme poverty:</strong>
        Born Nikolaus Günther Nakszyński in 1926 in Danzig, Kinski grew up in bitter poverty –
        a family hardship he later described as formative for his entire life.</p>
        <p class="vb-intro"><strong>b) Over a year in wartime captivity:</strong>
        After his military service, Kinski was taken into British captivity and spent roughly
        sixteen months in a prisoner-of-war camp before he was able to return to Germany in
        1946.</p>
        <p class="vb-intro"><strong>c) Dismissed for unpredictable behavior:</strong>
        Hired at Berlin's renowned Schlosspark-Theater, Kinski was already dismissed again in
        1947 for unpredictable, hard-to-control conduct – one of the first documented signs of
        a pattern that would accompany his entire professional life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Involuntary commitment on September 5, 1950:</strong>
        The 26-year-old Kinski was brought by police to the Wittenau Sanatorium in Berlin
        (colloquially known as "Bonnie's Ranch") following a suicide attempt and a violent
        outburst in which he wrecked a doctor's kitchen and tried to strangle a female
        physician.</p>
        <p class="vb-intro"><strong>b) Preliminary diagnosis of schizophrenia, later revised:</strong>
        The file lists schizophrenia as the preliminary diagnosis; the final classification
        was later revised to psychopathy – in today's terminology most comparable to an
        antisocial personality disorder.</p>
        <p class="vb-intro"><strong>c) Insulin treatment and discharge after three days:</strong>
        Kinski received insulin shock therapy at the clinic, a drastic but common psychiatric
        treatment at the time, and was discharged at his own request after just three days.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Legendary, often violent outbursts on set:</strong>
        For decades, Kinski was notorious for his outbursts during film shoots – directors and
        colleagues consistently reported moments in which his rage shattered any professional
        restraint.</p>
        <p class="vb-intro"><strong>b) A publicly aired conflict with Werner Herzog:</strong>
        Tensions during the filming of <em>Aguirre, the Wrath of God</em> and
        <em>Fitzcarraldo</em> repeatedly escalated to the point that Herzog later spoke
        publicly of death threats – a relationship both men described as equally destructive
        and indispensable.</p>
        <p class="vb-intro"><strong>c) An autobiography withdrawn in 1988, republished in 1996:</strong>
        Kinski's autobiography "Kinski Uncut" had to be withdrawn after its first publication
        due to libel lawsuits and was not republished until after his death – a text of
        unsparing, often disturbing candor about himself and others.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A legal dispute over his own medical file:</strong>
        Only in 2008, seventeen years after his death, did the 1950 psychiatric file become
        publicly known, after the clinic's archive released historical records – his widow
        subsequently took legal action against the publication.</p>
        <p class="vb-intro"><strong>b) Accusations from his daughter after his death:</strong>
        In 2013, Kinski's daughter Pola published a book in which she accused him of
        repeatedly sexually abusing her in childhood – allegations that posthumously cast a
        harrowing new light on his private life and remain part of his public reception to
        this day.</p>
        <p class="vb-intro"><strong>c) A body of work that endures despite everything:</strong>
        Despite the controversies surrounding him, his films with Werner Herzog remain
        milestones of film history to this day – a body of work inseparable from the person
        who created it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Expression</h3>
        <p class="vb-intro"><strong>a) The mamba that strikes when it feels threatened:</strong>
        The 1950 breakdown – suicide attempt, destructive rage, the attempt to strangle a
        physician – shows the pattern of the Sexual One in its most unfiltered, most
        dangerous form: a moral-emotional pressure that finds no socially acceptable outlet
        left and discharges physically.</p>
        <p class="vb-intro"><strong>b) The Nine-wing and decades of holding to the same pattern:</strong>
        The same persistence that bound him to Werner Herzog for decades also kept him locked
        into his own, endlessly repeating behavioral pattern – outbursts that recurred in
        nearly identical form across an entire career, rather than shifting over time.</p>
        <p class="vb-intro"><strong>c) Radical openness instead of concealment – at a high price:</strong>
        Unlike many other figures in this Compass, Kinski did not hide his darkest sides – his
        autobiography lays bare terrible things about himself. But this unsparing openness
        protected neither him nor the people around him from the consequences of his
        behavior.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) From rage as moral judgment to rage as breakdown:</strong>
        What often appeared in his roles and public appearances as controlled artistic
        intensity showed itself in 1950 in its purest, uncontrolled form – an acute
        psychiatric crisis that culminated in violence against himself and others.</p>
        <p class="vb-intro"><strong>b) Why precisely a breakdown of control, for a man whose entire life revolved around control over his own truth?</strong>
        For a Sexual One whose entire self-understanding rested on the uncompromising
        assertion of his own moral and artistic standards, one interpretation suggests
        itself: precisely total loss of control – suicide attempt, destruction, physical
        violence – breaks through exactly where inner tension finds no socially acceptable
        outlet left. This interpretation is a plausible reading, not a proven medical causal
        link, and is explored further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Context without determinism:</strong>
        This does not mean the pattern of the Sexual One inevitably leads to psychiatric
        crises or violent behavior – <strong>anyone can develop any psychiatric illness,
        regardless of subtype.</strong> What Kinski's case illustrates is a pattern in how
        unfiltered moral intensity was handled, one that recurs again and again in a
        pronounced Sexual One – one interpretation among many, not a judgment and not an
        excuse for his behavior toward others. This illness pattern is being developed step
        by step in this Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Nothing suggests that Kinski ever consciously knew his own Enneagram pattern – the
        system was barely known during his lifetime. The Sexual One's zeal and
        rage governed him entirely uncorrected, from the 1950 psychiatric crisis to the outbursts on set
        decades later, without the pattern ever fundamentally changing. Whoever does not
        recognize their own moral intensity as a recurring pattern cannot meet it in time
        either – with consequences that reached far beyond himself and, as his daughter's
        later allegations show, also placed a heavy burden on others.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Kinski's</strong> Sexual One with a Nine-wing, too, can be read once more
        through his psychiatric history: an unfiltered, uncompromising intensity that
        culminated in an acute breakdown in 1950 and continued, barely changed, across decades
        of his professional and private life. The black mamba that never learned to hold
        back its bite – leaving behind a body of work that still fascinates today, and a
        trail of harm that still resonates.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-klaus-kinski", label:"Portrait: Klaus Kinski (SX1w9) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx1", label:"Subtype Profile SX1"},
      ])}
    </div>
  `);
}

export function ludwigVanBeethovenKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-ludwig-van-beethoven-portrait.jpg" alt="Ludwig van Beethoven" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Ludwig van Beethoven</p>
        <p class="krim-portrait-typ">SX6w5 · Sexual Type 6 with Five-wing · 1770–1827</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Wolf</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx6.jpg" alt="Animal correspondence: Wolf" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX6")};left:${tierAvatarLeft("SX6")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Ludwig van Beethoven</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-ludwig-van-beethoven">portrait under Famous Personalities</a>
        in this Compass – that page covers his type structure and his decades-long fight against
        progressing deafness. This page focuses on a chapter that page only touches on: a second,
        parallel illness affecting the rest of his body – chronic abdominal ailments, a possible
        case of lead poisoning, and a liver cirrhosis that ultimately cost him his life at 56.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Beethoven</strong> is classified as the <strong>Sexual Six with Five-wing</strong>.
        Naranjo described SX6 as the Six's counter-type: rather than withdrawing from threat, it
        meets it with demonstrated strength. The Five-wing adds analytical depth and the ability
        to immerse itself in structure and work – a pattern that can be traced right into
        Beethoven's final years, marked by two parallel illnesses.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Two illnesses, one pattern:</strong>
        Alongside the progressing deafness, examined in depth in the Famous Personalities
        portrait, Beethoven suffered his entire adult life from a second, far less known line of
        illness – chronic abdominal complaints that he met with the same defiant continuation of
        work as he did his hearing loss.</p>
        <p class="vb-intro"><strong>b) Colic-like pain from his mid-twenties:</strong>
        Already around 1798 – the same period in which the first signs of deafness appeared –
        Beethoven complained in letters of severe colic attacks, diarrhea and digestive
        disorders, an ailment that stayed with him until his death and was never clearly
        diagnosed.</p>
        <p class="vb-intro"><strong>c) Working on instead of resting:</strong>
        Friends and physicians repeatedly urged him toward spa treatments and dietary restraint.
        Beethoven rarely kept to either for long – as soon as an acute flare-up eased, he
        returned to coffee, wine and nights spent working through.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Suspected lead poisoning:</strong>
        Hair analyses and a DNA study published in 2023, examining preserved locks of hair and a
        skull fragment, found strongly elevated lead levels in Beethoven's body – possible
        sources range from lead-tainted wine to medical treatments to drinking-water pipes.
        Whether the lead exposure actually contributed to his deafness or to his later liver
        damage remains scientifically disputed to this day.</p>
        <p class="vb-intro"><strong>b) A life without moderation:</strong>
        Beethoven did not smoke, but drank wine regularly, often in quantities his physicians
        judged harmful – for an already compromised liver, a pattern that accelerated the slow
        decline over decades without him ever fundamentally changing it.</p>
        <p class="vb-intro"><strong>c) Jaundice and the first signs of liver disease:</strong>
        From around 1821, episodes of jaundice recurred repeatedly – a clear sign of progressing
        liver damage that Beethoven, much as he had with his deafness before, tended to push
        aside rather than take seriously in its full weight.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) The collapse of December 1826:</strong>
        On the return journey from his brother Johann's home, Beethoven was exposed to bitter
        cold in an open, unsprung carriage. Shortly afterward he fell severely ill with
        pneumonia, from which he never recovered – the beginning of his final four months.</p>
        <p class="vb-intro"><strong>b) Four painful abdominal punctures:</strong>
        The progressing liver cirrhosis led to massive fluid buildup in his abdomen (ascites).
        Between December 1826 and February 1827, Beethoven had to undergo four painful surgical
        punctures to drain the accumulated fluid – during the last one, the wound continued to
        leak uncontrollably for days.</p>
        <p class="vb-intro"><strong>c) Death during a thunderstorm:</strong>
        Beethoven died on 26 March 1827 in Vienna, while a severe spring thunderstorm raged
        outside. According to tradition, as lightning flashed and thunder crashed, he opened his
        eyes once more, clenched his right fist, and then sank back – dead.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) An autopsy finding that revealed the full extent:</strong>
        The autopsy the day after his death found a massively shrunken, nodular, scarred liver
        (cirrhosis) as well as severely damaged kidneys – a finding that shows his organism kept
        functioning for years on a fraction of its actual capacity.</p>
        <p class="vb-intro"><strong>b) Two illnesses that reinforced each other:</strong>
        Complete deafness increasingly isolated Beethoven from those around him, while the
        abdominal and liver disease drained his physical strength in parallel – two independent
        threats that he met with the same stance: not evading them, but continuing to work.</p>
        <p class="vb-intro"><strong>c) Compositional peak achievement despite dual illness:</strong>
        It was precisely in the years when both illnesses had progressed furthest that the late
        string quartets and the Ninth Symphony were composed – works of a depth that initially
        overwhelmed many of his contemporaries.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The wolf that bared its teeth even at its own body:</strong>
        Just as he had once stood his ground against Prince Lichnowsky, Beethoven met his own
        dual illness not with retreat or restraint, but with continued, uncompromising work
        right to the end.</p>
        <p class="vb-intro"><strong>b) Strength directed against his own decline:</strong>
        Even after the painful abdominal punctures and increasing weakness, Beethoven still
        dictated letters to his nephew Karl and occupied himself with plans for a Tenth
        Symphony – energy that remained directed outward, literally, into his final weeks.</p>
        <p class="vb-intro"><strong>c) The clenched fist as final gesture:</strong>
        Whether the tradition of the lightning strike at the moment of his death is historically
        precise or not, the clenched fist with which Beethoven is said to have died has become
        the emblem of a stance that carried his entire life: not evading threat – any threat –
        but standing one's ground against it.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) Two threats, one reaction:</strong>
        Whether hearing or liver, Beethoven met neither of his progressing illnesses with
        retreat or a change in lifestyle, but with the same defiant continuation of work that
        already shaped his dealings with nobles and critics.</p>
        <p class="vb-intro"><strong>b) Nearly thirty years between first symptoms and death:</strong>
        From the first colic attacks around 1798 to his death in 1827, Beethoven lived nearly
        three decades with chronic complaints that he never placed at the center of his life,
        but instead – much like his deafness – effectively wrote over through continued
        creative work.</p>
        <p class="vb-intro"><strong>c) Confrontation instead of restraint as a recurring pattern:</strong>
        Unlike Karl Lagerfeld (SO3w4), who concealed his illness behind a flawless image, or
        Franz Schubert (SE6w5), who increasingly withdrew, Beethoven – much like his SX6w5
        counterpart Friedrich Schiller – did not hide his illness but ignored it through
        continued, undiminished work until his body permitted no further confrontation.</p>
        <p class="vb-intro"><strong>d) Why the hearing and the liver, of all things?</strong>
        For a Sexual Six whose entire life consisted of directly, often uncompromisingly
        confronting threat, one interpretation suggests itself: two central organs of all
        things – hearing, through which he perceived his art, and the liver, which carried the
        continued strain on his body for decades – became the stage for a double, invisible
        battle that he never tried to win through retreat, only through continuing to work. This
        interpretation is developed further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>e) Context without determinism:</strong>
        This does not mean that the Sexual Six pattern inevitably leads to liver or hearing
        disease – <strong>any person can develop any illness, regardless of subtype.</strong>
        What Beethoven's case illustrates is a pattern that keeps recurring in practice among
        people whose need to confront threat – even their own mortality – through continued
        confrontation rather than retreat – one of many possible interpretations, not a
        judgment. The corresponding illness pattern is gradually being developed in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics
        register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Beethoven did not know his own pattern – the sexual Six meets every threat with confrontation rather than retreat, and it was exactly this that drove him to meet both his deafness and his own physical decline with continued, uncompromising work rather than easing off. Someone who does not know their own confrontational pattern mistakes persistence for the only possible answer to threat.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Beethoven's</strong> Sexual Six with Five-wing is legible once more in the course
        of his illness: two parallel, decades-long conditions – deafness and liver disease –
        that he never met with retreat, only with continued, uncompromising work, until on 26
        March 1827 literally no more resistance was possible. The wolf that never evaded threat –
        whether a prince, a critic, deafness, or its own mortality – but stood its ground against
        it to the very last clenched fist.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-ludwig-van-beethoven", label:"Portrait: Ludwig van Beethoven (SX6w5) – life's work"},
        {route:"krankheitsportraets-friedrich-schiller", label:"Illness Portrait: Friedrich Schiller (SX6w5) – same subtype, same confrontational stance"},
        {route:"krankheitsportraets-franz-schubert", label:"Illness Portrait: Franz Schubert (SE6w5) – counter-model: withdrawal instead of confrontation"},
        {route:"krankheitsportraets-karl-lagerfeld", label:"Illness Portrait: Karl Lagerfeld (SO3w4) – counter-model: concealment instead of confrontation"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx6", label:"Subtype Profile SX6"},
      ])}
    </div>
  `);
}

export function marilynMonroeKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-marilyn-monroe-portrait.jpg" alt="Marilyn Monroe" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Marilyn Monroe</p>
        <p class="krim-portrait-typ">SX3w4 · Sexual Type 3 with Four-wing · 1926–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Peacock</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx3.jpg" alt="Animal correspondence: Peacock" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX3")};left:${tierAvatarLeft("SX3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Marilyn Monroe</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-marilyn-monroe">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work and type structure in general.
        This portrait is devoted to a chapter barely present there: endometriosis (a chronic,
        often very painful condition in which tissue similar to the uterine lining grows
        outside the uterus) hidden for years behind a flawless image, an escalating
        dependency on sleeping pills, and a death in 1962 whose exact circumstances remain
        disputed to this day.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Monroe</strong> is classified as the <strong>Sexual Three with Four-wing</strong>.
        SX3 directs the Three's drive for success at irresistible attraction and fascination
        within the closest, most intimate circle – while living with a deep fear of being
        empty behind the mask. The Four-wing adds a melancholic depth, a longing for an
        authentic self beyond the role – a tension traceable right into Monroe's hidden
        illness history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Pain that had to disappear behind the image:</strong>
        Monroe's chronic endometriosis symptoms were never allowed to disturb the flawless
        public image – contracts are said to have specifically protected her from work
        during particularly painful phases, without the public ever learning why.</p>
        <p class="vb-intro"><strong>b) Her own exhaustion as something that wasn't allowed to exist:</strong>
        Even as insomnia and medication use increased, her outward appearance remained
        flawlessly staged to the end – the gap between inner state and public image widened
        year after year.</p>
        <p class="vb-intro"><strong>c) A withdrawal that only became visible late:</strong>
        Only in 1962, during the filming of "Something's Got to Give," did her inner
        breakdown become unmistakable to outsiders – before that it had remained hidden
        behind professionalism and self-control.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A chronic illness never made public:</strong>
        Monroe suffered from endometriosis throughout her adult life, underwent multiple
        surgeries, and had at least three documented miscarriages, including an ectopic
        pregnancy in 1957 – none of her pregnancies were carried to term.</p>
        <p class="vb-intro"><strong>b) Escalating dependency on sleeping pills:</strong>
        Documented as early as the early 1950s, her use of barbiturates and chloral hydrate
        intensified over the years; from 1960 onward her psychiatrist Ralph Greenson
        regularly prescribed her Nembutal.</p>
        <p class="vb-intro"><strong>c) A burdened family history:</strong>
        Monroe's mother suffered from paranoid schizophrenia; her maternal grandfather died
        of a late-stage complication of untreated syphilis in an institution – Monroe
        herself feared throughout her life that mental illness was "cursed" into her family
        line.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Four days in a locked psychiatric ward:</strong>
        In February 1961, Monroe was admitted by her analyst to the Payne Whitney
        Psychiatric Clinic, believing she would receive a "rest cure." Instead she found
        herself on a locked ward, which she later compared to a prison – she was released
        after four days through the intervention of Joe DiMaggio.</p>
        <p class="vb-intro"><strong>b) Seventeen missed filming days:</strong>
        During the filming of "Something's Got to Give" in 1962, Monroe missed seventeen of
        thirty shooting days due to illness; the production ran over a million dollars over
        budget.</p>
        <p class="vb-intro"><strong>c) Dismissal by the studio:</strong>
        On June 8, 1962, 20th Century Fox fired her for "spectacular absenteeism" and sued
        her for 750,000 dollars – a re-hiring for the fall was negotiated but never
        materialized due to her death.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Death on August 4/5, 1962:</strong>
        Monroe was found dead in her home in Brentwood. The autopsy found a fatal
        combination of Nembutal and chloral hydrate – a quantity that, according to the
        coroner, would have been enough to kill several people.</p>
        <p class="vb-intro"><strong>b) A deliberately cautious official wording:</strong>
        The coroner classified the death as "probable suicide" – not an unambiguous suicide.
        This built-in uncertainty is part of the official finding itself, not later
        speculation.</p>
        <p class="vb-intro"><strong>c) Unproven counter-theories that persist to this day:</strong>
        Alongside accidental overdose and suicide, murder theories continue to circulate,
        usually in the context of alleged affairs with John and Robert Kennedy –
        historiographically these are considered unproven and speculative, though never
        fully disproven either.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Radiance as a survival strategy to the point of exhaustion:</strong>
        The dazzling, fascinating public persona demanded a maximum of energy from Monroe,
        while pain, insomnia, and medication use quietly intensified behind the scenes.</p>
        <p class="vb-intro"><strong>b) A withdrawal that looked like loss of control:</strong>
        The mounting absences on set in 1962 can also be read as movement toward the Three's
        stress point, Nine: withdrawal, delay, a passive slipping away rather than an openly
        fought breakdown.</p>
        <p class="vb-intro"><strong>c) The peacock whose feathers grew almost too heavy to carry:</strong>
        To the end, Monroe tried to meet public expectations of radiance and perfection,
        even as her own strength for it had long since run out.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A childhood full of ruptures:</strong>
        Eleven foster families, a stint in an orphanage, and sexual abuse in at least three
        foster homes marked Monroe's early years – a history she herself later connected to
        her psychological vulnerability.</p>
        <p class="vb-intro"><strong>b) An illness hidden for two decades:</strong>
        From the first documented symptoms to her death in 1962, a continuous but publicly
        almost entirely invisible line of chronic pain and growing medication dependency
        runs through her life.</p>
        <p class="vb-intro"><strong>c) One final year of open breakdown:</strong>
        Only in 1962 – hospitalization, missed filming days, dismissal – did what had been
        held behind the facade for years become visible.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the reproductive organs?</strong>
        For a Sexual Three with Four-wing whose public image was inseparably tied to
        femininity, desirability, and flawless radiance, one reading suggests itself:
        precisely the part of the body most directly linked to her marketed image of
        fertility and seduction became the site of chronic, secretly kept suffering. The
        pain that fit her image least was exactly the pain she hid the longest. This reading
        is a plausible interpretation, not a documented historical causal link, and is
        explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual Three's pattern inevitably leads to endometriosis or
        medication dependency – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Monroe's case can show is a pattern that stands out again and
        again in practice wherever the need exists to hide pain and vulnerability behind a
        flawless public image – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Monroe did not know her own pattern – the sexual Three with Four-wing maintains the flawless image at any cost, even toward herself, and that is exactly what let her hide a painful illness behind that image for years rather than seek help that might have endangered the facade. Someone who does not recognize their own need for a flawless image ultimately sacrifices their own health to it.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        In <strong>Monroe's</strong> case, the Sexual Three with Four-wing shows itself once
        more in a particularly painful way: a chronic illness hidden for years behind
        flawless radiance, an escalating medication dependency, and a death whose exact
        circumstances remain unresolved to this day. The peacock whose feathers showed the
        world beauty, while behind them an exhausted, pain-ridden body struggled for a
        recognition it never allowed itself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-marilyn-monroe", label:"Portrait: Marilyn Monroe (SX3w4) – life's work"},
        {route:"krankheitsportraets-dolly-parton", label:"Illness Portrait: Dolly Parton (SX3w4)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx3", label:"Subtype Profile SX3"},
      ])}
    </div>
  `);
}

export function muhammadAliKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-muhammad-ali-portrait.jpg" alt="Muhammad Ali – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Muhammad Ali</p>
        <p class="krim-portrait-typ">SO2w1 · Social Type 2 with One-wing · 1942–2016</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Golden Retriever</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so2.jpg" alt="Animal correspondence: Golden Retriever" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO2")};left:${tierAvatarLeft("SO2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Muhammad Ali</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-muhammad-ali">portrait under Famous Personalities</a>
        in this Compass – that page covers his life's work as a boxer and civil rights
        figure and his type structure in general. This page turns to a chapter that page
        mentions only in passing: in 1984, three years after his
        career ended, Ali was diagnosed with Parkinson's syndrome, which many physicians
        attribute to the repeated head trauma of his two-decade professional career. He
        lived with progressive symptoms – slowed speech, tremor, a mask-like facial
        expression – for more than three decades, and died in 2016 at age 74 of septic
        shock following a respiratory illness that his Parkinson's disease had made him
        more vulnerable to.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Ali</strong> is classified as the <strong>Social Two with One-wing</strong>.
        Naranjo called the social Two <em>Ambition</em>: the drive to care for an entire
        collective through influence and public presence, not only for individual people.
        The One-wing gives this ambition a moral axis – principle over personal
        advantage, as already shown in Ali's resistance to the draft in 1967. That same
        axis held even when his own body became his greatest test.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Slowed speech, unfamiliar silence:</strong>
        Already in the early 1980s, toward the end of his active career, journalists
        noticed increasingly slowed, slurred speech in a man who had spent decades famous
        for his verbal speed – the Golden Retriever whose most important tool, his own
        voice, was affected first.</p>
        <p class="vb-intro"><strong>b) Diagnosis after retirement:</strong>
        In 1984, three years after his last professional fight, doctors officially
        confirmed a Parkinson's syndrome. The diagnosis did not arrive suddenly, but after
        years of early, initially ambiguous symptoms that could still be played down in
        the ring itself.</p>
        <p class="vb-intro"><strong>c) Public visibility from the start:</strong>
        Unlike many public figures with a neurological diagnosis, Ali did not withdraw to
        conceal his symptoms – typical of the social Two, whose sense of self is
        inseparable from public presence.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Progressive symptoms over three decades:</strong>
        Tremor, muscle stiffness, slowed movement, and an increasingly mask-like facial
        expression shaped Ali's final three decades – a gradual process that
        fundamentally transformed the once-fastest heavyweight in boxing history.</p>
        <p class="vb-intro"><strong>b) Continued global travel:</strong>
        Despite his advancing illness, Ali kept traveling the world – in 1990 he
        personally negotiated the release of American hostages in Baghdad ahead of the
        Gulf War, and in 1998 he became a UN Messenger of Peace. The illness slowed his
        pace, but not the reach of his engagement.</p>
        <p class="vb-intro"><strong>c) The tremor becomes a public image:</strong>
        In 1996, Ali lit the Olympic flame at the Atlanta Summer Games with a visibly
        trembling hand, in front of a billion-strong audience. Rather than hiding the
        symptoms, that moment became one of the most moving images in Olympic history.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Vulnerability as a deliberately shown image:</strong>
        Where other public figures conceal a progressive neurological illness as long as
        possible, Ali let himself be seen trembling, slowed, and visibly marked by the
        disease – an openness that fits the social Two, whose impact arises precisely from
        being visible to the community, not from controlled distance.</p>
        <p class="vb-intro"><strong>b) Founding a center for his own values:</strong>
        In 2005, the Muhammad Ali Center opened in Louisville, aiming to teach a broad
        public six core values – respect, confidence, conviction, dedication,
        giving, and spirituality. His own biography, illness included, became a lesson
        for others.</p>
        <p class="vb-intro"><strong>c) Family and public life side by side:</strong>
        In his final years, public appearances alongside his family accompanied him – the
        illness was never declared a private matter but remained part of a shared,
        publicly visible life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) From loudest to quietest appearance, same effect:</strong>
        The man who once stirred entire stadiums with lines like <em>I am the greatest</em>
        achieved, with a single trembling gesture in Atlanta in 1996, an effect many found
        even more moving than his loudest appearances in the ring.</p>
        <p class="vb-intro"><strong>b) Respect earned through shown rather than hidden weakness:</strong>
        Precisely because Ali did not hide his illness, public affection for him grew, if
        anything, in his final decades rather than fading – an effect typical of the
        social Two: closeness arises through visibility, not despite it.</p>
        <p class="vb-intro"><strong>c) An illness that became a matter of public debate:</strong>
        The debate over the cause of his Parkinson's syndrome – repeated head trauma in
        the boxing ring – substantially contributed to an ongoing public discussion about
        head injuries in sport.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Slowness as a new form of presence:</strong>
        Where Ali once had an effect through speed and verbal force in the ring, in his
        final decades he had an effect through stillness and quiet presence – the energy
        of the social Two shifted from volume to symbolic power without losing impact.</p>
        <p class="vb-intro"><strong>b) Travel and appearances despite physical limits:</strong>
        Well into the 2000s, Ali took part in charity events and public engagements even
        as speaking and walking grew increasingly difficult – presence for the community
        remained a priority for as long as it was physically possible.</p>
        <p class="vb-intro"><strong>c) Family as the extended arm of his public mission:</strong>
        In his final years, his wife Lonnie and his daughters increasingly took over
        public appearances and interviews on his behalf – the social mission was carried
        forward even as his own voice could barely be heard.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that became a public lesson:</strong>
        Over more than three decades, Ali did not treat his progressive illness as a
        private matter but made it a visible part of his public work – from the first
        noticeable loss of speech in the early 1980s to the trembling torchbearer of
        Atlanta 1996.</p>
        <p class="vb-intro"><strong>b) From steadfast principle to physical steadfastness:</strong>
        The same One-wing that carried his resistance to the draft in 1967 showed itself,
        during the decades of illness, as persistent commitment to public engagement, even
        as every trip and every appearance cost him increasing strength.</p>
        <p class="vb-intro"><strong>c) Why an illness of voice and movement, of all things?</strong>
        Parkinson's struck, of all things, the two tools with which Ali had spoken for
        others and shown up for others his entire life: his voice and his movement through
        space. For a social Two, whose entire passion lies in visible, audible action on
        behalf of a collective, it is tempting to read this loss of exactly these two
        capacities as an intensification of his own life pattern: his ambition had to find
        new forms of expression once speech and movement were no longer available as
        before – and found them in symbols like the trembling hand at the Olympic torch.
        This reading is explored in more depth in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the social Two's pattern inevitably leads to Parkinson's –
        <strong>every person can develop any illness, regardless of subtype.</strong>
        Moreover, Ali's Parkinson's syndrome is medically considered to have been
        substantially caused by repeated head trauma in boxing, not as a purely
        psychosomatic process. What his case can show is a pattern in how the illness was
        handled that stands out again and again in a pronounced social Two – one possible
        reading among many, not a verdict. The corresponding condition will be developed
        step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Ali did not know his own pattern – the social Two with One-wing seeks meaning through visible service to others, and it was exactly this drive that kept him in the ring even as repeated blows to the head had long since taken their toll. Someone who does not recognize their own drive to stand up visibly for others also fails to hear their own body's warning signs, until they can no longer be ignored.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Two with One-wing is confirmed once more in how <strong>Muhammad
        Ali</strong> handled his own illness: instead of withdrawing from public life, he
        turned his tremor, his slowness, and his vulnerability into a message to the very
        community his whole life had been devoted to. The Golden Retriever, who never
        performed only for himself, carried his illness onto the same stage as his fame –
        visible to the end, present for others to the end.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-muhammad-ali", label:"Portrait: Muhammad Ali (SO2w1) – life's work"},
        {route:"krankheitsportraets-bob-marley", label:"Illness Portrait: Bob Marley (SO2w1) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so2", label:"Subtype Profile SO2"},
      ])}
    </div>
  `);
}

export function ojSimpsonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/oj-simpson-portrait.jpg" alt="O.J. Simpson" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">O.J. Simpson</p>
        <p class="krim-portrait-typ">SP3w4 · Social Type 3 with Four-wing · 1947–2024</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>O.J. Simpson</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="kriminalpsychologie-oj-simpson">criminal-psychology portrait</a>
        – that page covers the trial of the century and his type structure as the publicly
        staged "cheetah." This page goes deeper into a chapter mentioned there only in
        passing: a prostate cancer diagnosis in 2023, an illness kept largely hidden from the
        public, and a death on April 10, 2024.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Simpson</strong> is assigned to the <strong>Social Type 3 with Four-wing</strong>.
        Social Three builds its identity around the public image; the Four-wing adds a leaning
        toward dramatization and toward authoring the story of one's own suffering. This same
        need to remain the author of his own story also determined how he faced his final,
        fatal illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Diagnosis in 2023, not initially made public:</strong>
        Simpson was diagnosed with prostate cancer in 2023 – unlike his earlier public
        appearances, he initially chose not to bring the diagnosis to the public himself.</p>
        <p class="vb-intro"><strong>b) Continued active presence on social media:</strong>
        Even after the diagnosis, Simpson continued to post regular videos on his social media
        channels in which he appeared healthy, humorous and optimistic – an image that already
        contradicted his actual condition at the time.</p>
        <p class="vb-intro"><strong>c) Deterioration during 2024:</strong>
        The cancer worsened significantly in the spring of 2024, eventually leading to his
        hospitalization.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Family confirmed the diagnosis only after his death:</strong>
        Only with his family's official death announcement on April 11, 2024, did it become
        publicly known that Simpson had died of prostate cancer – the diagnosis had not
        previously been widely known.</p>
        <p class="vb-intro"><strong>b) Final months in Las Vegas:</strong>
        Simpson spent his final months at his home in Las Vegas, where he had lived since his
        release from prison in 2017, largely withdrawn from the public appearances of earlier
        years.</p>
        <p class="vb-intro"><strong>c) No public admission of the severity of the illness:</strong>
        Until the end, Simpson avoided public statements that would have revealed the true
        seriousness of his condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) The family as narrator of his final story:</strong>
        Simpson's family chose the phrase that he died "surrounded by his children" – a final,
        controlled narrative that matched the image of a reconciled end of life, one he could
        himself barely shape by that point.</p>
        <p class="vb-intro"><strong>b) Continued public self-presentation until shortly before the end:</strong>
        Just weeks before his death, Simpson released video messages denying rumors about his
        health and presenting himself as "still here" and active.</p>
        <p class="vb-intro"><strong>c) Death on April 10, 2024, in Las Vegas:</strong>
        O.J. Simpson died at age 76 from the effects of his prostate cancer – almost exactly
        30 years after the murders that had defined his life forever.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A final surprise for the public:</strong>
        Because the diagnosis had remained hidden for so long, the news of his death came as a
        surprise to most observers – a final success of the years-long control over his own
        public image.</p>
        <p class="vb-intro"><strong>b) Mixed, controversial reactions:</strong>
        Reactions to his death were divided – between obituaries for the former football star
        and memories of the murders of Nicole Brown Simpson and Ron Goldman that had defined
        his name forever.</p>
        <p class="vb-intro"><strong>c) No withdrawal from his own narrative:</strong>
        Even his final months, as far as is known, remained shaped by the same need to tell
        his own story that had defined his entire public life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The image maintained until the end:</strong>
        The same need to keep his public image unbroken that had shaped Simpson's entire life
        – from NFL fame to the trial of the century – also determined how long he kept his
        illness hidden from the public.</p>
        <p class="vb-intro"><strong>b) The Four-wing and authoring one's own suffering:</strong>
        Unlike a healthy, unwinged Three, who would simply treat an illness as a fact and move
        on, Simpson showed until the end the need to remain the author of his own story – the
        same dynamic already visible in his 1994 farewell letter and his book "If I Did It,"
        now applied to his own mortality.</p>
        <p class="vb-intro"><strong>c) No visible public collapse:</strong>
        Unlike some other illness histories in this Compass, there are no reports of a public
        admission of weakness or fear of death – the controlled facade held, as far as is
        known, until the end.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A body that escaped the staging:</strong>
        Simpson's entire life was shaped by the conviction that a flawless, controlled public
        image could survive any crisis – cancer was a threat that increasingly escaped that
        control, until death itself became the final, uncontrollable fact.</p>
        <p class="vb-intro"><strong>b) Secrecy as a final form of image control:</strong>
        A man whose entire life had been defined by public visibility – from the football
        field to the live-televised police chase – treated precisely his own fatal illness as
        the one thing withheld from the public.</p>
        <p class="vb-intro"><strong>c) Why the prostate, of all places?</strong>
        For a social Three with Four-wing whose entire identity rested on physical
        performance, masculinity and public presence – from star athlete to celebrated movie
        actor – one interpretation suggests itself: precisely an organ closely tied to
        masculine vitality and control over one's own body became the site of decay, hidden
        in a place especially resistant to public display. This interpretation is a plausible
        reading, not a documented historical causal link, and is developed further in this
        Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>d) Placing this without determinism:</strong>
        This does not mean the pattern of the social Three inevitably leads to prostate cancer
        – <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Simpson's case shows is a pattern in how a pronounced social Three with Four-wing
        repeatedly deals with a fatal diagnosis – one possible reading among many, not a
        verdict. The corresponding illness profile is gradually being developed in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Simpson did not know his own pattern – the social Three with Four-wing meets every
        threat to its own image reflexively with secrecy and controlled self-presentation
        rather than ever openly admitting weakness, and he lived out exactly this pattern
        unchanged into his final months. Whoever does not recognize their own need to remain
        the author of their own story as a pattern cannot set it aside even in their own
        dying.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Three with Four-wing explains much about the course of <strong>Simpson's</strong>
        own illness: a man whose entire life was a public performance turned precisely his
        final, fatal role into the one chapter he could no longer stage himself – and so
        treated it as the one chapter kept from the world.</p>
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:8px;max-width:100%;">
        <p style="margin:0;font-size:0.85rem;color:var(--muted);line-height:1.6;">
        <strong>Note:</strong> This portrait serves depth-psychological analysis. The type
        assignment is a psychological hypothesis, not a historical verdict. O.J. Simpson was
        acquitted in his 1995 criminal trial for double murder, but held liable for the
        deaths of his ex-wife Nicole Brown Simpson and Ron Goldman in a 1997 civil suit. The
        Enneagram explains, it does not justify.
        </p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"kriminalpsychologie-oj-simpson", label:"Criminal Psychology: O.J. Simpson (SP3w4) – the trial of the century"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Illness Portrait: Louis XIV (SP3w2) – the same facade to the end"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SP3"},
      ])}
    </div>
  `);
}

export function robbieWilliamsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-robbie-williams-portrait.jpg" alt="Robbie Williams" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Robbie Williams</p>
        <p class="krim-portrait-typ">SX1w2 &middot; Sexual Type 1 with Two-wing &middot; b. 1974</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Black Mamba</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx1.jpg" alt="Animal correspondence: Black Mamba" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX1")};left:${tierAvatarLeft("SX1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Robbie Williams</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-robbie-williams">Famous
        Personality Portrait</a> in this Compass. This page explores a chapter only
        touched on there: a severe depression dating back to the early 1990s, combined
        with an addiction to alcohol, cocaine, and ecstasy, which he processed in detail
        in a four-part Netflix documentary in 2023.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Williams</strong> is assigned to the <strong>Sexual Type 1 with
        Two-wing</strong>. The SX1 directs the One's strict inner standard onto a single,
        intense relationship or stage presence; the Two-wing adds the wish to be
        indispensable to others. This exact combination – feeling one's own inadequacy
        relentlessly in the spotlight while wanting to please others – determined how
        Williams's depression and addiction developed over decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Depression already at a young age with Take That:</strong>
        Williams describes in his own interviews that depression already gripped him in
        the early 1990s, during his time with the boy band Take That.</p>
        <p class="vb-intro"><strong>b) Alcohol binges for self-soothing:</strong>
        By his own account, he regularly numbed himself with bottles of vodka after
        performances in order to endure his own inner state.</p>
        <p class="vb-intro"><strong>c) Increasing use of cocaine and ecstasy:</strong>
        In the following years, the alcohol addiction was joined by increasing use of
        hard drugs, which Williams himself documented publicly.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A public "nervous breakdown":</strong>
        Williams describes a moment in front of thousands of spectators in which, by his
        own account, he had "a nervous mental breakdown in front of thousands of
        people."</p>
        <p class="vb-intro"><strong>b) Multiple rehab treatments over the years:</strong>
        Over the course of his career, Williams repeatedly underwent treatment for his
        addiction and anxiety disorders.</p>
        <p class="vb-intro"><strong>c) Continued music career despite the illness:</strong>
        Despite the crises described, Williams remained one of Britain's commercially
        most successful solo artists for decades.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) The 2023 Netflix documentary:</strong>
        In a four-part docuseries, Williams had decades of private video footage
        reviewed and commented on his own story for five to six hours a day over 25
        days of filming.</p>
        <p class="vb-intro"><strong>b) A process he himself described as painful:</strong>
        Williams called the filming itself "deeply, deeply painful" – a deliberate,
        active reliving rather than a distanced retrospective.</p>
        <p class="vb-intro"><strong>c) Disclosure without a softening distance:</strong>
        The documentary shows depression, anxiety disorders, and addictive behavior
        without discernible minimization – an unusually direct self-portrait for a world
        star.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Broad international attention:</strong>
        The Netflix series triggered coverage worldwide and contributed to the public
        de-stigmatization of addiction among pop stars.</p>
        <p class="vb-intro"><strong>b) A career without a lasting break:</strong>
        Despite decades of psychological strain, Williams's musical work and public
        presence remained extensive throughout.</p>
        <p class="vb-intro"><strong>c) A second narrative alongside the pop-star image:</strong>
        Alongside the image of the successful entertainer, the documentary established a
        second, equally public image of the vulnerable, struggling person behind it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) The strict inner standard that is never met:</strong>
        The same SX1 energy that applies an unrelenting inner standard to a single,
        intense stage relationship with the audience also determined Williams's feeling
        of never truly meeting that standard – a source of the depression he describes.</p>
        <p class="vb-intro"><strong>b) The Two-wing and exhaustion from wanting to please:</strong>
        The Two-wing's warmth showed in the wish to keep reaching and delighting the
        audience anew – an effort that contributed to the emotional exhaustion he
        himself describes.</p>
        <p class="vb-intro"><strong>c) Radical openness as a later form of self-criticism:</strong>
        The unflinching disclosure of his own story in the documentary fits the
        SX1-typical tendency to examine even one's own inner life by strict, honest
        standards and make it public.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) A stage that never brought enough inner peace:</strong>
        Williams's entire career was shaped by the attempt to find recognition and
        reassurance through the stage – precisely this place, where he was most visible,
        became the site of his deepest exhaustion and self-doubt.</p>
        <p class="vb-intro"><strong>b) Why numb the voice, of all things?</strong>
        For a Sexual One with a Two-wing, whose entire public existence rests on his
        own voice and immediate contact with the audience, one interpretation suggests
        itself: precisely the instrument through which he built closeness to the
        audience, and simultaneously performed his own relentless standard, was numbed
        by alcohol and drugs – an attempt to silence the inner critic that spoke loudest
        exactly when the stage lights shone brightest. This interpretation is a
        plausible reading, not a documented clinical causal link, and will be developed
        further in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Placing it without determinism:</strong>
        This does not mean that the Sexual One's pattern inevitably leads to depression
        or addiction – <strong>anyone can develop any mental illness, regardless of
        subtype.</strong> What Williams's case illustrates is a pattern in how a
        pronounced Sexual One with a Two-wing tends to handle their own, never-satisfied
        inner standard – one of many possible interpretations, not a verdict. The
        corresponding illness picture is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Williams does not know his own pattern as an Enneagram structure – the Sexual
        One with a Two-wing reflexively applies an unrelenting standard to its own
        impact on others instead of ever questioning that standard, and continues to
        live out exactly this pattern in modified form today. Someone who does not
        recognize their own tendency toward relentless self-demand as a pattern keeps
        exhausting themselves against the same unreachable goal.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual One with a Two-wing explains much about the course of <strong>Robbie
        Williams's</strong> own depression and addiction: a man whose entire stage
        presence rested on the wish to be indispensable to an audience found precisely
        in that demand the root of his deepest exhaustion – the black mamba that finds
        no rest even after the loudest applause, because the next, even higher standard
        is already waiting.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-robbie-williams", label:"Portrait: Robbie Williams (SX1w2)"},
        {route:"krankheitsportraets-jamie-lee-curtis", label:"Illness Portrait: Jamie Lee Curtis (SX1w2) – same subtype"},
        {route:"krankheitsportraets-martin-luther", label:"Illness Portrait: Martin Luther (SX1w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx1", label:"Subtype Profile SX1"},
      ])}
    </div>
  `);
}

export function sadhguruKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sadhguru-portrait.jpg" alt="Sadhguru" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sadhguru</p>
        <p class="krim-portrait-typ">SE3w2 · Self-Preservation Type 3 with Two-Wing · b. 1957</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Raccoon</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se3.jpg" alt="Animal correspondence: Raccoon" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE3")};left:${tierAvatarLeft("SE3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sadhguru</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-sadhguru">Famous Personalities
        portrait</a>. This page delves into a chapter only briefly mentioned there: a chronic
        brain bleed diagnosed in March 2024 that went untreated through weeks of headaches
        until emergency surgery.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Sadhguru</strong> is assigned to the <strong>self-preservation Type 3 with
        Two-Wing</strong>. The SE3 invests its energy in effectiveness rather than image – even
        when the body itself has long been sending signals; the Two-Wing adds the drive to be
        there for others, often at the expense of caring for oneself. Exactly this combination
        – unshaken functioning despite physical warning signs, combined with a schedule that
        was interrupted for nothing except the illness itself – shaped the course of events up
        to the diagnosis.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Weeks of headaches before the diagnosis:</strong>
        By his own and medical accounts, Sadhguru suffered from persistent, worsening
        headaches over several weeks without interrupting his public schedule.</p>
        <p class="vb-intro"><strong>b) No immediate withdrawal from public life:</strong>
        Despite increasing symptoms, he continued lectures, travel, and public appearances
        until the symptoms could no longer be ignored.</p>
        <p class="vb-intro"><strong>c) Acute deterioration in March 2024:</strong>
        Only a marked worsening of the symptoms finally led to a medical examination and
        imaging diagnostics.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Diagnosis: chronic subdural hematoma:</strong>
        An MRI revealed chronic bleeding under the dura mater of about three to four weeks'
        duration, overlaid by fresh bleeding from the preceding one to two days.</p>
        <p class="vb-intro"><strong>b) Emergency surgery on 17 March 2024:</strong>
        Due to the acute deterioration, Sadhguru was operated on immediately to relieve
        pressure on the brain.</p>
        <p class="vb-intro"><strong>c) No identifiable external cause:</strong>
        Unlike many subdural hematomas, no clear triggering fall or accident could be
        established – the Isha Foundation publicly stated that the exact cause remained
        unclear.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Traits</h3>
        <p class="vb-intro"><strong>a) Rapid postoperative recovery:</strong>
        According to public statements, Sadhguru recovered quickly after the operation and
        returned to part of his activities within a few weeks.</p>
        <p class="vb-intro"><strong>b) Public communication by his own organization:</strong>
        The Isha Foundation informed the public in several official statements about the
        diagnosis, surgery, and recovery – an unusually transparent medical communication for
        a spiritual teacher.</p>
        <p class="vb-intro"><strong>c) Resuming public work shortly afterward:</strong>
        Sadhguru resumed public appearances only a short time after the procedure, though
        initially at a reduced pace.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Worldwide media attention:</strong>
        News of the emergency surgery of one of the best-known spiritual teachers of our time
        triggered international coverage and a wave of public concern.</p>
        <p class="vb-intro"><strong>b) Questions about a health teacher's own self-perception:</strong>
        Since Sadhguru himself regularly teaches about body awareness and self-care, the
        incident raised the question for some observers of why his own warning signs were
        ignored for so long.</p>
        <p class="vb-intro"><strong>c) No fundamental change of lifestyle:</strong>
        Despite the warning from his own illness, Sadhguru largely continued his intensive
        travel and lecture schedule after recovery.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Impact</h3>
        <p class="vb-intro"><strong>a) Functioning as the default response to pain:</strong>
        The SE3's characteristic focus on effectiveness rather than self-presentation also
        showed in the fact that Sadhguru did not take weeks of headaches as a reason to
        withdraw, but kept his schedule unchanged.</p>
        <p class="vb-intro"><strong>b) The Two-Wing and open communication outward:</strong>
        That the Isha Foundation made the diagnosis and treatment transparently public fits
        the Two-Wing's characteristic care: even in his own medical emergency, the impulse
        remained to keep his millions of followers informed rather than in the dark.</p>
        <p class="vb-intro"><strong>c) A quick return to effectiveness:</strong>
        The rapid resumption of public appearances after surgery follows the same SE3
        pattern as ignoring the symptoms beforehand: self-worth through functioning, little
        room for a longer pause.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A teacher of body awareness who overrode his own warning signs:</strong>
        Sadhguru's entire body of work revolves around the idea of consciously perceiving and
        cultivating one's own body and mind – of all people, he ignored weeks of headaches
        until emergency surgery became unavoidable.</p>
        <p class="vb-intro"><strong>b) Why the head, of all things, the center of his teaching?</strong>
        For a self-preservation Type 3 with a Two-Wing whose entire public authority rested on
        inner clarity and conscious bodily mastery, one interpretation suggests itself:
        exactly the organ with which he taught millions of people "inner engineering" became
        the site of a bleed progressing unnoticed for weeks. This reading is a plausible
        interpretation, not a proven clinical causal link, and will be developed further in
        this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>c) Classification without determinism:</strong>
        This does not mean that the self-preservation Three's pattern inevitably leads to
        brain bleeds – <strong>any person can develop any illness, regardless of
        subtype.</strong> What can be shown in Sadhguru's case is a pattern in dealing with
        physical warning signs that keeps recurring in a pronounced self-preservation Type 3
        – one of many possible readings, not a verdict. The corresponding illness pattern is
        being developed gradually in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Sadhguru does not know his own pattern as an Enneagram structure – the self-preservation
        Type 3 reflexively clings to its own functioning instead of taking physical warning
        signs seriously in time, and lives out exactly this pattern largely unchanged to this
        day. Anyone who does not recognize their own tendency to subordinate symptoms to their
        schedule as a pattern risks that the body eventually forces the pause itself – if
        necessary, through collapse.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 3 with Two-Wing explains much about the course of
        <strong>Sadhguru's</strong> illness: a man whose entire public authority rested on
        inner clarity and unbroken effectiveness had to learn that weeks of functioning do not
        make physical warning signs disappear – the raccoon that kept going until the body
        pulled the emergency brake itself.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-sadhguru", label:"Portrait: Sadhguru (SE3w2)"},
        {route:"krankheitsportraets-joseph-haydn", label:"Illness Portrait: Joseph Haydn (SE3w2)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se3", label:"Subtype Profile SE3"},
      ])}
    </div>
  `);
}

export function teresaVonAvilaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-teresa-von-avila-portrait.jpg" alt="Teresa of Ávila" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Teresa of Ávila</p>
        <p class="krim-portrait-typ">SO3w4 · Social Type 3 with Four-wing · 1515–1582</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Teresa of Ávila</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-teresa-von-avila">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work as a mystic and monastic
        reformer. This page focuses on a chapter that page barely touches on: in
        the summer of 1539, at age 23, Teresa suffered such a severe cataleptic state after
        a failed lay treatment for a suspected case of malaria that she was presumed dead
        for four days. After waking, nearly three years of extensive paralysis followed – a
        period out of which her first deep mystical experiences developed.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Teresa</strong> is classified as the <strong>Social Three with
        Four-wing</strong>. The social Three is considered the amplifier type of the
        Three line: ambition and achievement drive are directed most plainly at a work
        recognized by a larger community – for Teresa not personal fame, but the visible
        reform of an entire religious order. The Four-wing gives this achievement drive an
        unusual depth: ambition combines with introspection, longing, and the ability to
        write and act out of deep inner experience.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A severe illness at age 23:</strong>
        In 1538 Teresa fell so seriously ill that her father took her out of the convent for
        treatment – doctors suspected malaria. Rather than improvement, an experimental
        treatment by a lay healer in Becedas markedly worsened her condition.</p>
        <p class="vb-intro"><strong>b) The collapse of August 15, 1539:</strong>
        On this day Teresa suffered a severe cataleptic seizure. Witnesses later reported
        that wax was dripped onto her eyelids without any reaction – her tongue was injured
        from her own bite. She was presumed dead for four days.</p>
        <p class="vb-intro"><strong>c) Nearly three years of restricted movement:</strong>
        After waking, Teresa could at times move only one finger of her right hand. A state
        of extensive paralysis and heightened pain sensitivity lasted until roughly her
        25th year – and it was precisely during this forced stillness that she began daily
        mental prayer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Paralysis becomes a new path:</strong>
        The long recovery period, during which her body barely obeyed her, became the
        starting point of her mystical practice. The mental prayer she developed during her
        immobility remained her central spiritual tool for the rest of her life.</p>
        <p class="vb-intro"><strong>b) Recurring episodes of weakness and fainting:</strong>
        Even after her substantial recovery, phases of weakness and fainting accompanied her
        for the rest of her life. Modern medical-historical research still debates whether
        these were epileptic seizures, psychogenic episodes, or what Teresa herself
        described as religious ecstasy.</p>
        <p class="vb-intro"><strong>c) Her actual work begins only after the illness:</strong>
        Her reform of the Carmelite order and the founding of seventeen monasteries began
        only decades after this existential crisis – a body of work scarcely conceivable
        without the long period of enforced stillness that preceded it.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Visible work despite a fragile body:</strong>
        Seventeen reformed monasteries founded, under the eyes of the Inquisition, with a
        body that gave her weakness and seizures throughout her life – the social Three does
        not let physical fragility keep her from a publicly effective body of work.</p>
        <p class="vb-intro"><strong>b) Writing as a bridge between inner depth and public impact:</strong>
        With <em>The Interior Castle</em>, Teresa created one of the most influential works
        of Christian mysticism – the Four-wing supplies the introspective depth, the social
        Three ensures that this inner experience takes a form that reaches an entire
        community of believers.</p>
        <p class="vb-intro"><strong>c) Watched, but never silenced:</strong>
        Despite persecution by the Inquisition and despite recurring health crises, Teresa
        continued her reform work until she had built an entire network of reformed
        monasteries.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) From four days of apparent death to Doctor of the Church:</strong>
        The woman presumed dead for four days in 1539 was posthumously named the first
        female Doctor of the Church in 1970 – one of the highest honors the Church
        bestows.</p>
        <p class="vb-intro"><strong>b) A work that outlasts its own period of illness:</strong>
        <em>The Interior Castle</em> and her autobiography are still read today as central
        texts of Christian mysticism – born of a life marked by recurring physical
        weakness, not despite its absence.</p>
        <p class="vb-intro"><strong>c) Recognition that reaches far beyond her own lifetime:</strong>
        Seventeen monasteries founded by her, a reformed order still active today – with
        Teresa, the social Three achieves exactly what her drive aims for: a work carried
        forward by a community.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Enforced stillness as a source, not a brake:</strong>
        Where an illness would have meant the end of productive work for many, for Teresa it
        became the starting point of her most significant spiritual development – Four-wing
        introspection turned enforced passivity into inner richness.</p>
        <p class="vb-intro"><strong>b) From sickbed to founder of monasteries:</strong>
        The path from near-total paralysis to an energetic reformer who built an entire
        network of religious houses over decades shows a remarkable restoration of agency
        far beyond her original physical condition.</p>
        <p class="vb-intro"><strong>c) Inner experience made externally visible:</strong>
        The mystical states that began during her illness were never kept purely private but
        made public in writing and in the rule of her order – typical of the social Three,
        whose innermost experience ultimately always aims at outward effect.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) The turning point of an entire life:</strong>
        Without the severe illness of 1538/39 and the nearly three years of paralysis that
        followed, Teresa's mental prayer – the origin of her entire mystical theology –
        would likely never have arisen in this form.</p>
        <p class="vb-intro"><strong>b) From bodily helplessness to spiritual sovereignty:</strong>
        The period in which her body nearly stopped obeying her at all was also the period
        in which she began to open up an inner spiritual world that later became the
        foundation of an entire monastic reform movement.</p>
        <p class="vb-intro"><strong>c) Why, of all things, a paralysis that led to an interior castle?</strong>
        For a social Three with Four-wing, whose drive shifts between visible public impact
        and introspective depth, this sequence – first total physical helplessness, then one
        of the most influential spiritual authors in history – can be read as an
        intensification of her own life pattern: the body first had to go entirely silent
        before the introspective voice could grow loud enough to later carry an entire
        public body of work. This reading is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the social Three with Four-wing's pattern inevitably leads to such
        illness courses – <strong>every person can develop any illness, regardless of
        subtype.</strong> Moreover, the exact medical cause of Teresa's collapse remains
        unresolved to this day (malaria, epilepsy, and psychogenic readings all coexist in
        the literature). What her case can show is a pattern that stands out again and again
        in a pronounced social Three with Four-wing – one possible reading among many, not a
        verdict. The corresponding condition will be developed step by step in this
        Compass's <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Teresa did not know her own pattern – yet it was precisely the forced physical stillness after her severe 1539 illness that pushed the social Three, otherwise oriented toward achievement and visible success, into the inner gathering from which her mental prayer grew. Not every crisis confirms the pattern only negatively – sometimes the body forces exactly the turn that conscious knowledge of one's own pattern might otherwise have chosen voluntarily.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Three with Four-wing is confirmed once more in <strong>Teresa of
        Ávila's</strong> transformation of the most severe bodily helplessness into a work
        of lasting public impact: four days of apparent death, nearly three years of
        paralysis – and out of that, seventeen founded monasteries and a text still read
        today. The cheetah, whose deepest vision became the most famous work of art of her
        time, first had to come to a complete standstill before finding her true stride.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-teresa-von-avila", label:"Portrait: Teresa of Ávila (SO3w4) – life's work"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SO3"},
      ])}
    </div>
  `);
}

export function wilmaMankillerKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-wilma-mankiller-portrait.jpg" alt="Wilma Mankiller – Portrait" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Wilma Mankiller</p>
        <p class="krim-portrait-typ">SO9w8 · Social Type 9 with Eight-wing · 1945–2010</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Buffalo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so9.jpg" alt="Animal correspondence: Buffalo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO9")};left:${tierAvatarLeft("SO9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Wilma Mankiller</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-wilma-mankiller">portrait under Famous Personalities</a>
        in this Compass – that page covers her life's work as the first female Principal
        Chief of the Cherokee Nation. At the center of this page is a chapter that page
        only touches on in passing: Mankiller lived for more than three decades with polycystic kidney
        disease, survived two kidney transplants (1990 and 1998, the second with her niece
        as donor), a lymphoma (1996), and breast cancer (1999) – and died in 2010 at age 64
        of stage IV pancreatic cancer.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Mankiller</strong> is classified as the <strong>Social Nine with
        Eight-wing</strong>. Naranjo called the social Nine <em>Participation</em>: the self
        steps back so that a larger cause can grow – identity arises not from personal
        distinction but from merging with a community. The Eight-wing gives this Nine a rare
        fighting strength: she does not just merge with the community, she defends it with
        visible determination – a combination that showed itself both in her illness and in
        her politics.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A diagnosis long before her highest office:</strong>
        Already in 1980, five years before she rose to become the first female Principal
        Chief of the Cherokee Nation in 1985, Mankiller was diagnosed with myasthenia
        gravis, a neuromuscular autoimmune disease that was successfully treated.</p>
        <p class="vb-intro"><strong>b) A genetic condition in the background:</strong>
        At the same time, polycystic kidney disease increasingly manifested, a condition
        that accompanied her entire adult life – a quiet, progressive burden that shadowed
        her entire tenure as Principal Chief (1985–1995) without ever driving her from
        office.</p>
        <p class="vb-intro"><strong>c) Looking back as the origin of her own strength:</strong>
        In her autobiography <em>Mankiller: A Chief and Her People</em>, she explicitly
        described her illness history as part of what she called <em>the power of
        adversity</em> – her own framing, not an outside interpretation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) Two kidney transplants, in office and after:</strong>
        In 1990, Mankiller received her first donor kidney; in 1998, after renewed kidney
        failure, a second – this time from her own niece. Both times she returned to her
        public work after recovering.</p>
        <p class="vb-intro"><strong>b) A lymphoma in the middle of her active years:</strong>
        In 1996 came a lymphoma diagnosis, treated with several rounds of chemotherapy and
        radiation – another severe illness added to her already existing kidney condition,
        without ending her public engagement.</p>
        <p class="vb-intro"><strong>c) Breast cancer as a third major diagnosis:</strong>
        In 1999 came a breast cancer diagnosis, treated with surgery and radiation. Four
        serious illnesses in under two decades – a disease burden entirely
        disproportionate to her public presence and activity.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Staying in office when it would have been easier to leave:</strong>
        Despite the early myasthenia gravis diagnosis and her developing kidney disease,
        Mankiller led the Cherokee Nation for ten years through a phase of economic and
        cultural rebuilding – an Eight-wing pattern of holding fast to an accepted mandate,
        whatever the cost.</p>
        <p class="vb-intro"><strong>b) Illness as a collective, not private, experience:</strong>
        Mankiller spoke publicly about her health challenges and used them to raise
        awareness of healthcare in Indigenous communities – for the social Nine, even one's
        own illness ultimately becomes a concern of the community, not only of the self.</p>
        <p class="vb-intro"><strong>c) Continued work after leaving office:</strong>
        After 1995 she remained active as an author, activist, and sought-after speaker,
        even though lymphoma and breast cancer still lay ahead – a life that never fully
        withdrew from public view, whatever new diagnosis arrived.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A tenure remembered as a success despite illness:</strong>
        Mankiller's ten years as Principal Chief are still honored today as one of the
        Cherokee Nation's most formative periods of leadership – her health burdens remained
        almost invisible in the public image of her tenure.</p>
        <p class="vb-intro"><strong>b) Four diagnoses, one continuous public life:</strong>
        Myasthenia gravis, kidney failure, lymphoma, breast cancer – each single diagnosis
        could have justified withdrawing from public life. Mankiller chose, every time, to
        keep going.</p>
        <p class="vb-intro"><strong>c) A final diagnosis with no room to withdraw:</strong>
        When stage IV pancreatic cancer was diagnosed in March 2010, little time remained
        for another round of treatment – she died on April 6, 2010, weeks after the
        diagnosis, near Tahlequah, Oklahoma.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Strength drawn from community:</strong>
        Mankiller repeatedly described her own resilience as something she drew from
        connection with her people, not from individual willpower alone – typical of the
        social Nine, whose source of strength is the collective.</p>
        <p class="vb-intro"><strong>b) The Eight-wing as an engine against withdrawal:</strong>
        Where a social Nine with a less pronounced Eight-wing might have withdrawn in the
        face of repeated serious diagnoses, the Eight-wing kept Mankiller actively fighting –
        against illness as much as for her people's political causes.</p>
        <p class="vb-intro"><strong>c) Public visibility as a deliberate choice:</strong>
        Rather than concealing her illnesses, Mankiller made them an explicit subject of her
        speeches and writing on healthcare for Indigenous communities – illness became
        another field of her political engagement.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A chain of diagnoses across three decades:</strong>
        Myasthenia gravis in 1980, then progressive kidney failure with two transplants
        (1990, 1998), a lymphoma in 1996, breast cancer in 1999, finally pancreatic cancer
        in 2010 – barely a decade of her adult life passed without a new, serious
        diagnosis.</p>
        <p class="vb-intro"><strong>b) Her own life as an example of persistence:</strong>
        Mankiller explicitly used her own illness history to encourage others – an
        expression of the Eight-wing, which does not hide weakness but turns it into
        material for a fight that can give others strength.</p>
        <p class="vb-intro"><strong>c) Why, of all things, did her own body become a recurring battlefield?</strong>
        For a social Nine with Eight-wing, whose identity is inseparable from serving a
        community, this repeated physical exhaustion can be read as an intensification of
        her own life pattern: the body that was repeatedly given over to others came under
        repeated attack itself – and was defended anew each time, never surrendered. This
        reading is explored in more depth in this Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean the social Nine with Eight-wing's pattern inevitably leads to
        such chains of illness – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Mankiller's case can show is a pattern in how repeated
        serious illness was handled that stands out again and again in a pronounced social
        Nine with Eight-wing – one possible reading among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The Unconscious Fixation as a Further Factor:</strong>
        Mankiller did not know her own pattern – the social Nine with Eight-wing subordinates her own neediness to the cause of the community, and it was exactly this that let her survive two kidney transplants and multiple cancer diagnoses without giving up her office. Someone who does not recognize their own merging with a larger cause also overlooks their own right to step back, just once.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Social Nine with Eight-wing is confirmed once more in how <strong>Wilma
        Mankiller</strong> handled an almost uninterrupted chain of serious illnesses: never
        a reason to withdraw, always another field on which she stayed visible for her
        community. The buffalo who carried an entire nation carried, in the end, her own
        decades-long illness history with the same unshakeable fighting strength with which
        she had once stood up for her people.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-wilma-mankiller", label:"Portrait: Wilma Mankiller (SO9w8) – life's work"},
        {route:"krankheitsportraets-willy-brandt", label:"Illness Portrait: Willy Brandt (SO9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so9", label:"Subtype Profile SO9"},
      ])}
    </div>
  `);
}

export function sammyDavisJrKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-sammy-davis-jr-portrait.jpg" alt="Sammy Davis Jr." class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Sammy Davis Jr.</p>
        <p class="krim-portrait-typ">SX2w3 · Sexual Type 2 with Three-wing · 1925–1990</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Camel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Animal correspondence: Camel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Sammy Davis Jr.</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-sammy-davis-jr">portrait under Famous Personalities</a>
        in this Compass – that page covers his six-decade life's work and type structure in
        general. This page brings a chapter to the foreground that page barely touches: the
        cancer diagnosed in late summer 1989, which he hid from the public for a long time
        while continuing to perform – until his death in May 1990 at the age of 64.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Sammy Davis Jr.</strong> is classified as the <strong>Sexual Two with
        Three-wing</strong>. SX2 directs the Two's care and seductive power entirely at the
        one, exclusive connection – for Davis, at his audience, his Rat Pack friends, and the
        stage itself. The Three-wing adds an unconditional will toward visible performance,
        combined with a refusal to ever let the audience sense a fading of his own
        capability. This exact pattern kept Davis on stage long after his diagnosis was
        already known.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A scratch in the throat that would not go away:</strong>
        In late summer 1989, doctors found a tumor in Davis's throat – a finding initially
        treated with eight weeks of radiation therapy, which for a time seemed to help.</p>
        <p class="vb-intro"><strong>b) Performing despite the diagnosis:</strong>
        Although the diagnosis was already established, Davis hosted the New York segment of
        Jerry Lewis's Muscular Dystrophy Telethon over Labor Day weekend 1989 – 24 hours on
        air, without his condition ever being publicly addressed.</p>
        <p class="vb-intro"><strong>c) Jerry Lewis's later account:</strong>
        Jerry Lewis later recalled: "You see, Sammy did the telethon last September knowing
        what his prognosis was... He knew he had cancer, but he was on the air for 24 hours."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) What seemed like a gum infection:</strong>
        In early 1990, a finding in his mouth initially classified as a gum infection was
        recognized as a larger, inoperable tumor.</p>
        <p class="vb-intro"><strong>b) A body that had been on air since the age of three:</strong>
        Six decades of nearly uninterrupted performing – vaudeville, Las Vegas, Broadway,
        television – left a body that had barely come to rest before the illness finally
        caught up with it.</p>
        <p class="vb-intro"><strong>c) Released six weeks before his death:</strong>
        As his condition worsened, Davis was released from Cedars-Sinai Medical Center to
        spend his final weeks at home.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Eight months between diagnosis and death:</strong>
        From the first symptoms in late summer 1989 to his death on May 16, 1990, roughly
        eight months passed, during which Davis initially continued to appear publicly.</p>
        <p class="vb-intro"><strong>b) A death in his sleep, at 5:59 a.m.:</strong>
        Davis died in his sleep, at his home in Beverly Hills, surrounded by family – a quiet
        ending to a life that had almost never been quiet.</p>
        <p class="vb-intro"><strong>c) Seven million dollars in debt:</strong>
        After two failed marriages and decades of struggles with addiction, Davis reportedly
        left behind roughly seven million dollars in debt – a life that had given so much
        materially that almost nothing remained for himself in the end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) The last great stage, knowingly played:</strong>
        The 1989 telethon appearance was not ignorance but a conscious decision not to
        burden his audience with his own diagnosis – an act of extreme SX2 devotion that at
        the same time kept putting his own health at risk.</p>
        <p class="vb-intro"><strong>b) A legacy of versatility and self-expenditure:</strong>
        The same capacity to give himself completely to every discipline – singing, dancing,
        acting – that carried Davis's career across six decades left little room to pause in
        time, once his body had long been sending warning signs.</p>
        <p class="vb-intro"><strong>c) Public mourning, private exhaustion:</strong>
        After his death, an entire industry honored one of the most versatile entertainers of
        the 20th century – while, behind the scenes, a financially and physically exhausted
        man remained, who had barely cared for himself until the very end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The audience as the last constant:</strong>
        Even with a confirmed diagnosis, performing for an audience remained the one thing
        Davis never gave up – the Three-wing energy of the SX2 in its most uncompromising
        form.</p>
        <p class="vb-intro"><strong>b) Concealment as a final form of care:</strong>
        The deliberate concealment of his own diagnosis from the public can be read as an
        extreme, final expression of SX2 care – placing the other's well-being above his own
        suffering even in his own dying.</p>
        <p class="vb-intro"><strong>c) The camel that carried to the final show:</strong>
        The devotion to the one great relationship – to the audience as a whole – was
        maintained to the end, even once the body had long since run out of reserves.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A life that began giving at the age of three:</strong>
        From his first stage appearance as a toddler to his last telethon in 1989, a
        continuous line of uncompromising giving runs through Davis's entire life – a line
        that in the end turned against his own health as well.</p>
        <p class="vb-intro"><strong>b) Performing instead of withdrawing, to the end:</strong>
        As with many Illness Portraits in this Compass, Davis's final months show
        strikingly little withdrawal – instead a continuing that points more toward the SX2's
        stress point, the Eight: uncompromising persistence despite clear warning signs,
        rather than relinquishing control.</p>
        <p class="vb-intro"><strong>c) Visible suffering, long kept from the public:</strong>
        His physical condition was not hidden from family and his closest circle, but was
        deliberately withheld from the public – a denial outward that made continuing
        possible in the first place.</p>
        <p class="vb-intro"><strong>d) Why, of all things, the throat and mouth?</strong>
        For a Sexual Two with Three-wing whose entire instrument was voice, song, and
        expression, one reading suggests itself: the very organ with which Davis built
        connection to his audience for six decades failed him in the end – as though a life
        oriented entirely around giving through voice and expression had no capacity left to
        speak its own suffering. This reading is a plausible interpretation, not a
        documented historical causal link, and is explored in more depth in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Sexual Two's pattern inevitably leads to cancers of the
        throat or mouth – <strong>every person can develop any illness, regardless of
        subtype.</strong> What Davis's case can show is a pattern that stands out again and
        again in practice wherever performing is prioritized uncompromisingly over one's own
        bodily warning signs – one possible explanation among many, not a verdict. The
        corresponding condition will be developed step by step in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as a Further Factor:</strong>
        Davis did not know his own Enneagram pattern – the sexual Two with Three-wing lives
        for immediate connection with an audience and for a visible, flawless performance,
        and it was exactly this drive that kept him on air for 24 hours in 1989, while a
        tumor was already growing in his body. Someone who does not recognize their own need
        for connection and recognition as a pattern trades their own health for the next
        round of applause – not out of guilt, but out of not knowing their own pattern.</p>
      </div>

      <div class="vb-section" style="background:rgba(74,127,145,0.08);border-left:3px solid #4a7f91;padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:1.5rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:#2e5a68;">A Parallel Within the Same Subtype: Sammy Davis Jr. and Elvis Presley</h3>
        <p class="vb-intro">Among the SX2w3 portraits in this Compass,
        <a href="javascript:void(0)" data-route="krankheitsportraets-elvis-presley">Elvis Presley</a>
        shows a strikingly similar dynamic. Both were entertainers whose entire identity
        hinged on immediate connection with an audience; both kept performing even as their
        bodies were visibly breaking down; both died with markedly shortened life
        expectancy – Presley at 42, Davis at 64. The decisive difference lies in
        concealment: where Presley's decline on stage became impossible for those around him
        to miss, Davis managed to actively hide his diagnosis from the public almost to the
        very end – the same prioritizing of performance over one's own health, only in an
        even more controlled, outwardly almost invisible form.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Sammy Davis Jr.'s</strong> Sexual Two with Three-wing found its final, most
        consistent expression in his own illness: a tumor concealed for eight months, a
        24-hour telethon appearance despite a confirmed diagnosis, and a death in 1990 at
        only 64 years of age, after six decades of nearly uninterrupted giving. The camel
        that carried to its final show, even once it had no one left to carry it.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-sammy-davis-jr", label:"Portrait: Sammy Davis Jr. (SX2w3) – life's work"},
        {route:"krankheitsportraets-elvis-presley", label:"Illness Portrait: Elvis Presley (SX2w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx2", label:"Subtype Profile SX2"},
      ])}
    </div>
  `);
}

export function giacomoCasanovaKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-giacomo-casanova-portrait.jpg" alt="Giacomo Casanova" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Giacomo Casanova</p>
        <p class="krim-portrait-typ">SX2w3 · Sexual Type 2 with Three-wing · 1725–1798</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Camel</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/sx2.jpg" alt="Animal correspondence: Camel" loading="lazy" style="position:absolute;top:${tierAvatarTop("SX2")};left:${tierAvatarLeft("SX2")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Giacomo Casanova</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-giacomo-casanova">portrait under Famous Personalities</a>
        in this Compass – that page covers his restless life across Europe and his
        twelve-volume memoirs. This portrait is devoted to a chapter barely touched on
        there: the decades of sexually transmitted illnesses he himself openly
        described in his memoirs, and the agonizing urinary infection that killed him
        in 1798 as an impoverished librarian in provincial Bohemia.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Casanova</strong> is classified as the <strong>Sexual Two with Three-wing</strong>.
        The SX2 seeks closeness through intense, personal devotion to the one person
        standing in front of it – for Casanova, this showed throughout his life as an
        endless series of individual, genuine encounters rather than cold calculation.
        The Three-wing adds the drive to shape this impact into a visible life's work –
        most clearly in the memoirs he wrote as an old, ill man, giving his own life a
        lasting shape.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Repeated sexually transmitted illnesses across decades:</strong>
        In his own memoirs, Casanova openly describes several episodes of gonorrhea,
        chancroid, and at least one bout each of syphilis and herpes – consequences of
        a life of many intense, changing encounters.</p>
        <p class="vb-intro"><strong>b) No lasting recovery, only recurring episodes:</strong>
        The symptoms each subsided temporarily but kept returning across the decades –
        a pattern running through his entire adult life without ever permanently
        slowing him down.</p>
        <p class="vb-intro"><strong>c) Undiminished pace of travel despite the symptoms:</strong>
        Even during recurring bouts of illness, Casanova continued his restless life
        across Europe – Paris, Vienna, St. Petersburg, Madrid – without making his own
        health a central concern.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Retreat to Dux in 1785:</strong>
        At sixty, the now-destitute Casanova accepted a position as librarian to Count
        Waldstein at Dux Castle in Bohemia – a deliberate break with the restless life
        that had previously carried him through nearly every major city in Europe.</p>
        <p class="vb-intro"><strong>b) Growing isolation and conflict with the household staff:</strong>
        At Dux, Casanova felt mocked and misunderstood by the castle staff;
        contemporary accounts describe endless quarrels over coffee, soup, and his own
        dignity – a sharp contrast to his earlier life as a celebrated companion of
        Europe's most influential courts.</p>
        <p class="vb-intro"><strong>c) The memoirs as the great project of his final years:</strong>
        It was in exactly this isolation that Casanova began writing his "Histoire de
        ma vie" – roughly 1,800 handwritten pages, born from the retrospective gaze
        of an ill, aging man looking back on a life full of encounters.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Characteristics</h3>
        <p class="vb-intro"><strong>a) A stubborn urinary infection as the final illness:</strong>
        In his last months, Casanova suffered from a worsening urinary infection,
        likely a late consequence of his decades of sexually transmitted illnesses,
        which increasingly drained his remaining strength.</p>
        <p class="vb-intro"><strong>b) No spectacular ending, but a grinding one:</strong>
        Unlike the dramatic turning points of his earlier life – the escape from the
        Leads of the Doge's Palace, the scandals that spanned Europe – his death
        unfolded quietly, in a single room of a Bohemian castle, far from the great
        courts he had once traveled between.</p>
        <p class="vb-intro"><strong>c) Death on June 4, 1798, at age 73:</strong>
        Casanova died, visibly weakened by illness, at Dux – according to reported
        last words, he claimed to have lived as a philosopher and tried to die as a
        Christian.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) A work that far outlived him:</strong>
        The "Histoire de ma vie" was not published until decades after Casanova's
        death and is today considered one of the most significant eyewitness accounts
        of eighteenth-century Europe – a work born out of the final, illness-marked
        years of a solitary man.</p>
        <p class="vb-intro"><strong>b) His name as a generic term:</strong>
        His name became, posthumously, a synonym for the seducer himself – a
        shorthand that hardly does justice to the layered, in his final years ill and
        lonely man behind it.</p>
        <p class="vb-intro"><strong>c) No public staging of his own dying:</strong>
        Unlike his earlier life, which he had so carefully put on display himself, his
        death passed almost unnoticed by the wider European public that had once
        celebrated him.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The consequences of intense closeness as a physical legacy:</strong>
        The Sexual Two's typical devotion to countless individual, genuine encounters
        left Casanova not only emotional but also physical traces – the recurring
        sexually transmitted illnesses as a direct consequence of a life oriented
        entirely around personal closeness.</p>
        <p class="vb-intro"><strong>b) The Three-wing and the final great project:</strong>
        That Casanova produced the most extensive work of his life precisely during
        his sickest, most isolated period fits the Three-wing: even as his body
        failed, the drive remained to shape his own life into a visible, lasting
        result.</p>
        <p class="vb-intro"><strong>c) From celebrated companion to solitary invalid:</strong>
        The contrast between a life made up almost entirely of encounters with other
        people and a death in near-total isolation can be read as the bitterest
        consequence of the very same energy that had driven him throughout his life.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Through-Line</h3>
        <p class="vb-intro"><strong>a) An illness as a direct consequence of the life pattern itself:</strong>
        Unlike many other illness portraits in this Compass, this is not a random
        ailment sitting alongside the life pattern, but a condition that arose
        directly from the very way of life that defined Casanova's SX2w3 nature – the
        physical flip side of decades of intense closeness to many people.</p>
        <p class="vb-intro"><strong>b) Retreat into isolation as a rupture of his own pattern:</strong>
        For a man whose entire life had been oriented around immediate personal
        encounter, the forced, ill retreat to Dux amounted to a particularly painful
        reversal of his own core pattern.</p>
        <p class="vb-intro"><strong>c) The memoirs as a substitute for missing closeness:</strong>
        Where real encounters with people were missing in his final years, writing
        about earlier encounters took their place – as if the Sexual Two could not
        abandon its devotion to others, only continue living it out in retrospect.</p>
        <p class="vb-intro"><strong>d) Why the urinary tract, of all places?</strong>
        For a Sexual Two with a Three-wing, whose entire life's work rested on
        intense physical and emotional closeness to others, one interpretation
        suggests itself: precisely the bodily system through which that closeness
        was most directly enacted became, for Casanova, the eventual site of chronic
        suffering. This reading is a plausible interpretation, not a documented
        medical causal link, and will be explored further in this Compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A framework without determinism:</strong>
        This does not mean the Sexual Two pattern inevitably leads to sexually
        transmitted or urinary illnesses – <strong>anyone can develop any illness,
        regardless of subtype.</strong> What Casanova's case can show is a pattern
        that keeps recurring in an especially intensely lived Sexual Two – one of
        many possible readings, not a verdict. The corresponding illness will
        gradually be developed further in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Casanova did not know his own Enneagram pattern – the Sexual Two with
        Three-wing holds almost reflexively onto intense devotion to individual
        people rather than heeding physical warning signs in time, and he lived out
        exactly this pattern unchanged for decades before its consequences caught up
        with him physically in his final, isolated years. Anyone who does not
        recognize their own tendency to fully give themselves over to every new
        encounter as a pattern risks their body eventually presenting the bill for
        decades of unrestrained devotion.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The Sexual Two with Three-wing explains much about <strong>Giacomo
        Casanova's</strong> final years: a man whose entire life was devoted to
        intense, personal closeness with countless individual people carried the
        physical consequences of that way of living for decades, until they caught up
        with him in complete isolation – and turned precisely that final, solitary
        chapter into his most lasting work once more. The camel that, in the end,
        crossed the desert of its own memories alone.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-giacomo-casanova", label:"Portrait: Giacomo Casanova (SX2w3) – life's work"},
        {route:"krankheitsportraets-elvis-presley", label:"Illness Portrait: Elvis Presley (SX2w3)"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/sx2", label:"Subtype Profile SX2"},
      ])}
    </div>
  `);
}

export function edvardMunchKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/edvard-munch-portrait.jpg" alt="Edvard Munch" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Edvard Munch</p>
        <p class="krim-portrait-typ">SO4w5 · Social Type 4 with Five-wing · 1863–1944</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Armadillo</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so4.jpg" alt="Animal correspondence: Armadillo" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO4")};left:${tierAvatarLeft("SO4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Edvard Munch</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-edvard-munch">famous-personality portrait</a>
        – that page covers his painterly work and his type structure in general. This page
        focuses on the chain of health crises that accompanied his life from childhood into
        old age: chronic fear of death, a severe nervous breakdown, a life-threatening bout
        of influenza, and an eye disease in his last decade that nearly left him blind.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Munch</strong> is assigned to the <strong>Social Type 4 with Five-wing</strong>.
        SO4 makes its own otherness a public subject rather than hiding it; the Five-wing
        gives that public exposure an analytical, almost clinical distance from the suffering
        itself. This exact pattern determined how Munch dealt with each of his illnesses:
        never as a private secret, but again and again as material for systematic artistic
        self-observation.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A childhood overshadowed by death and illness:</strong>
        Munch's mother died of tuberculosis when he was five; his older sister Sophie followed
        ten years later, at fifteen, from the same disease. Munch himself was a sickly child,
        confronted with his own mortality from an early age.</p>
        <p class="vb-intro"><strong>b) A family burden he could never shake off:</strong>
        Both his grandfather and his father suffered from severe melancholy; his sister Laura
        spent much of her life in psychiatric clinics due to psychosis. Munch grew up with the
        feeling that this vulnerability might strike him too.</p>
        <p class="vb-intro"><strong>c) An injury to his left hand that became a trauma:</strong>
        In 1902, during an argument with his fiancée Tulla Larsen, a revolver shot cost him
        part of a finger — an event he processed artistically in several self-portraits,
        including a "Marat" motif.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) The 1908 nervous breakdown:</strong>
        After years of excessive drinking and mounting inner exhaustion, Munch suffered a
        severe physical and psychological breakdown in Copenhagen — with auditory
        hallucinations and paralysis on his left side.</p>
        <p class="vb-intro"><strong>b) Eight months at Dr. Daniel Jacobson's nerve clinic:</strong>
        Munch suffered from agoraphobia, depression with persecutory delusions, and suicidal
        thoughts; he was alcohol-dependent and abused sedatives and stimulants. He was treated
        with diets, baths, fresh-air cures, psychotherapy, and non-convulsive electrotherapy
        using weak currents.</p>
        <p class="vb-intro"><strong>c) Complete abstinence as a turning point:</strong>
        After his discharge in 1909, Munch lived in strict sobriety — a consequence that
        contributed to a marked, lasting improvement in his condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) The Spanish flu of 1918/19:</strong>
        Munch, who feared influenza his entire life, fell dangerously ill in the winter of
        1918/19. Rather than concealing the illness, he painted himself — emaciated,
        exhausted, at times feverish and delirious — in several self-portraits, including
        "Self-Portrait with the Spanish Flu" and "Self-Portrait After the Spanish Flu."</p>
        <p class="vb-intro"><strong>b) An eye disease in 1930:</strong>
        In the autumn of 1930, the retina of his right eye tore and blood entered the
        vitreous humor — with his left eye already having lost significant vision after a
        brawl in 1904, he now faced the possibility of total blindness.</p>
        <p class="vb-intro"><strong>c) Scientific self-observation instead of despair:</strong>
        Rather than withdrawing, Munch began drawing his own visual disturbances — the
        "entoptic" phenomena within his own eye, including misty, fibrillar shadows that at
        times took the form of a bird's head with wings. Out of this observation came, among
        other works, the watercolor "Retina Optical Illusion."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Effect</h3>
        <p class="vb-intro"><strong>a) Four separate crises across seven decades:</strong>
        From childhood trauma through the 1908 breakdown and the 1918/19 Spanish flu to the
        1930 eye disease, health threats run through Munch's entire life like a red thread.</p>
        <p class="vb-intro"><strong>b) A long life despite it all:</strong>
        Munch died in 1944 at the age of 80 — an unusually long life given the repeated,
        sometimes life-threatening crises he faced.</p>
        <p class="vb-intro"><strong>c) Illness as a recurring visual motif:</strong>
        From "The Sick Child" (dedicated to his dying sister Sophie) to the late works on his
        own eye disease, the artistic processing of illness runs through his entire body of
        work as a subject in its own right.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Five-wing under maximum strain — suffering becomes research:</strong>
        When blindness threatened in 1930, Munch responded not with withdrawal but with
        almost clinical curiosity — he began systematically documenting his own visual
        disturbances, as if treating himself as a research subject. That is the typical
        Five-wing response to threat: distance through observation rather than through
        feeling.</p>
        <p class="vb-intro"><strong>b) The "critical commentator" in its cerebral variant:</strong>
        In its negative fixation, the social Four is also described as the "critical
        commentator" — someone who lives out their own otherness intensely tends to see
        inadequacy everywhere and grows querulous and dissatisfied. In Munch this combined
        with the Five-wing into a strikingly cerebral, emotionally restrained variant of that
        pattern: instead of dwelling in complaint, he captured his own perceived inadequacy —
        the looming blindness — in the almost scientific systematics of his "entoptic"
        drawings: precise, repeated, documentary in its accuracy, rather than impulsively
        emotional as is otherwise characteristic of the Four.</p>
        <p class="vb-intro"><strong>c) Public art instead of private suffering:</strong>
        Each of his crises — the hand injury, the flu, the eye disease — became the subject
        of publicly exhibited self-portraits, never a concealed private chapter.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Red Thread</h3>
        <p class="vb-intro"><strong>a) A parallel within the same subtype — Heinrich Heine (SO4w3):</strong>
        Munch's way of handling illness finds a striking parallel in the
        <a href="javascript:void(0)" data-route="krankheitsportraets-heinrich-heine">Illness Portrait of Heinrich Heine</a>
        — also a social Four, there with a Three-wing. Where Heine did not conceal his
        eight-year paralysis but made it the direct subject of poems like "Morphine" and
        received visitors until the end, Munch did the same with the brush: flu, eye disease,
        the injured hand — every crisis became an exhibition piece rather than a hidden flaw.
        Two different wings of the same social Four, the same underlying pattern: visibility
        as a coping strategy.</p>
        <p class="vb-intro"><strong>b) Why the nerves and eyes, of all things?</strong>
        For a social Four whose entire self-understanding rests on public visibility, one
        interpretation suggests itself: precisely the organs most directly tied to perceiving
        and being perceived — the eyes that see, and the nervous system that regulates inner
        arousal — repeatedly became, in Munch's case, the site of illness. This interpretation
        is a plausible reading, not a documented historical causal link, and is developed
        further in this Compass's psychosomatics register.</p>
        <p class="vb-intro"><strong>c) Placing this without determinism:</strong>
        This does not mean the pattern of the social Four inevitably leads to nerve or eye
        disease — <strong>anyone can develop any illness, regardless of subtype.</strong> What
        Munch's case shows is a pattern in how a pronounced social Four with Five-wing handles
        repeated health threats — one possible reading among many, not a verdict. The
        corresponding illness profile is gradually being developed in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">psychosomatics register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>d) The unconscious fixation as its own factor:</strong>
        Munch did not know his own Enneagram pattern — the social Four with Five-wing
        processes existential threat through analytical observation and public depiction
        rather than through quiet withdrawal. Exactly this pattern governed him unconsciously
        and without restraint: every new crisis became new artistic material, instead of his
        ever learning to withdraw fully and rest in time. Whoever does not recognize their own
        longing for analytical distance as a pattern easily mistakes it for pure artistic
        curiosity, even though their own fixation plays a part too.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The social Four with Five-wing explains much about the course of
        <strong>Munch's</strong> repeated illnesses: a man surrounded by illness and death his
        entire life turned every new crisis into an object of analytical artistic observation,
        rather than hiding it. The armadillo that never hid its shell of fear and illness, but
        made it the most visible feature of its entire body of work.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-edvard-munch", label:"Portrait: Edvard Munch (SO4w5) – life's work"},
        {route:"krankheitsportraets-heinrich-heine", label:"Illness Portrait: Heinrich Heine (SO4w3) – the same coping strategy, a different wing"},
        {route:"krankheitsportraets-marcel-proust", label:"Illness Portrait: Marcel Proust (SO4w5) – lifelong asthma"},
        {route:"krankheitsportraets-fiona-apple", label:"Illness Portrait: Fiona Apple (SO4w5) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so4", label:"Subtype Profile SO4"},
      ])}
    </div>
  `);
}

export function philCollinsKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-phil-collins-portrait.jpg" alt="Phil Collins" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Phil Collins</p>
        <p class="krim-portrait-typ">SE1w9 · Self-Preservation Type 1 with Nine-Wing · born 1951</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Eagle</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se1.jpg" alt="Animal correspondence: Eagle" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE1")};left:${tierAvatarLeft("SE1")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Phil Collins</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-phil-collins">Famous
        Personalities portrait</a> – that page covers his life's work as a musician and
        drummer. This page turns to an aspect only briefly noted there:
        nerve damage in his hands that forced him to give up drumming, followed by a severe
        spinal injury that at times left him unable to walk.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Collins</strong> is assigned to the <strong>self-preservation Type 1 with
        Nine-Wing</strong>. The SE1 directs its perfectionism at its own work discipline and
        craft; the Nine-Wing gives it the ability to process physical losses without loud
        public fuss and to adapt pragmatically. Exactly this combination – losing the central
        tool of his craft, combined with quiet, disciplined adaptation to new circumstances
        rather than public complaint – shaped how he dealt with his nerve and spinal
        condition.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Early numbness in the hands:</strong>
        As early as the early 2000s, Collins noticed growing numbness and loss of strength in
        his hands, which intensified gradually but steadily.</p>
        <p class="vb-intro"><strong>b) Diagnosis of nerve damage in 2007:</strong>
        In 2007 he was diagnosed with nerve damage that increasingly made it difficult, and
        eventually impossible, to hold drumsticks.</p>
        <p class="vb-intro"><strong>c) Giving up drumming:</strong>
        Collins subsequently had to largely give up drumming, the foundation of his musical
        identity since his youth – a loss he spoke about with striking matter-of-factness in
        interviews.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A severe fall with a spinal injury in 2015:</strong>
        In 2015, Collins suffered a severe fall and sustained a spinal injury that required
        several surgeries.</p>
        <p class="vb-intro"><strong>b) Temporary inability to walk unaided:</strong>
        As a result, he was at times unable to walk without crutches or outside support – a
        serious limitation for an artist whose entire career rested on stage presence.</p>
        <p class="vb-intro"><strong>c) No complete withdrawal from the stage:</strong>
        Despite this massive physical limitation, Collins did not withdraw entirely from
        public musical life, but looked for ways to keep performing.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) The "Not Dead Yet" tour, 2017–2019:</strong>
        From 2017 to 2019, Collins toured under the self-deprecatingly chosen title "Not Dead
        Yet" – performing seated, with a walking cane beside him on stage, while his son Nic
        Collins took over on drums.</p>
        <p class="vb-intro"><strong>b) Public openness instead of concealment:</strong>
        Unlike some artists in comparable situations, Collins did not conceal his physical
        limitations, but spoke openly in interviews about crutches, walking aids, and the
        impossibility of ever drumming again.</p>
        <p class="vb-intro"><strong>c) The 2016 autobiography "Not Dead Yet":</strong>
        Shortly before the tour, Collins published his autobiography under the same title, in
        which he wrote with unusual openness about health setbacks, but also about his regret
        over time lost with his family during his career.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Sold-out concerts despite the seated performance:</strong>
        The "Not Dead Yet" tour was internationally sold out and commercially successful,
        despite – or perhaps because of – the unusual, seated format.</p>
        <p class="vb-intro"><strong>b) No loss of image through visible limitation:</strong>
        Contrary to fears, the visible physical limitation did not damage his public
        reputation – on the contrary, many read it as an expression of particular
        perseverance.</p>
        <p class="vb-intro"><strong>c) Continuing the Genesis reunion, 2020–2022:</strong>
        Despite ongoing physical limitations, Collins continued the Genesis reunion tour "The
        Last Domino?" through 2022, again mostly performing seated.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Discipline that adapted to new circumstances:</strong>
        The SE1's characteristic work discipline also showed in how he handled his own
        physical limitation: Collins did not give up making music, but found a new, equally
        disciplined way to keep going – the seated concert with his son on drums.</p>
        <p class="vb-intro"><strong>b) The Nine-Wing and pragmatic adaptation instead of public complaint:</strong>
        The same reserve with which Collins avoided self-dramatization throughout his life
        showed in how he handled his own illness as a deliberate decision to state his
        limitation matter-of-factly, rather than turn it into a drama.</p>
        <p class="vb-intro"><strong>c) Self-irony as an outlet instead of denial:</strong>
        That he named the tour itself "Not Dead Yet" fits the SE1w9's ability to name even
        serious limitations of its own with a certain dry distance, rather than dramatizing or
        concealing them.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A drummer whose tool was his own hands:</strong>
        Collins' entire musical identity began at the drum kit – precision, timing, and
        physical control were his original craft. Of all things, the hands that made this
        craft possible failed him in midlife.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows in
        <a href="javascript:void(0)" data-route="krankheitsportraets-astrid-lindgren">Astrid
        Lindgren (SE1w9)</a>: in her case too, the very organ that carried her life's work of
        precise observation – her eyes – failed her in old age, and she too responded not with
        public complaint but with a new, equally disciplined way of working (dictation instead
        of writing, a seated concert instead of drumming). Both SE1w9s show the same pattern:
        the loss of a central working tool is compensated through discipline and pragmatic
        adaptation, rather than negotiated publicly.</p>
        <p class="vb-intro"><strong>c) When the One under chronic stress moves toward the Four:</strong>
        Collins' autobiography "Not Dead Yet" (2016) stands out for a tone unusual for the
        otherwise matter-of-fact, disciplined SE1: extensive, introspective passages about
        regret, loneliness, and the feeling of having failed as a father and husband. Someone
        living under chronic physical strain for years increasingly moves along their stress
        line toward their stress point – for the One, that is the Four. This unusually
        melancholic, inward-turned self-examination in his later years recalls the
        emotionally charged retrospection of the stress point, not the matter-of-fact sense of
        duty of the core type – with the core type unchanged at SE1w9.</p>
        <p class="vb-intro"><strong>d) Why the hands and the spine, of all things?</strong>
        For a self-preservation One whose entire professional identity rested on physical
        precision and disciplined timing at the instrument, one interpretation suggests
        itself: of all things, the physical structures that made this precision possible –
        the hands, and the spine as the carrier of posture and movement – became the site of
        lost control. This interpretation is a plausible reading, not a documented clinical
        causal link, and will be developed further in this Compass's Psychosomatics
        Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the self-preservation One's pattern inevitably leads to nerve
        damage or spinal injury – <strong>any person can develop any illness, regardless of
        subtype.</strong> What Collins' case shows is a pattern in how a serious physical
        limitation is handled, one that recurs again and again in a pronounced
        self-preservation One with a Nine-Wing – one of many possible readings, not a
        verdict. The corresponding illness will be developed further, over time, in this
        Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        Collins likely does not know his own pattern as an Enneagram structure – the
        self-preservation One with a Nine-Wing reflexively holds onto its own discipline and
        quiet adaptation instead of openly naming physical losses for what they are, and has
        lived out exactly this pattern unchanged for decades. Anyone who does not recognize
        their own tendency to
        compensate for physical limits without speaking openly about them risks letting their
        own burden remain invisible, even where support or relief would be possible.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 1 with Nine-Wing explains much about how <strong>Phil
        Collins</strong> handled his own nerve and spinal condition: a musician whose entire
        craft rested on physical precision found a new, equally disciplined way to keep
        working when that very precision itself failed him – the eagle that, even without
        full control over his own hands, still knew where he needed to fly.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-phil-collins", label:"Portrait: Phil Collins (SE1w9) – life's work"},
        {route:"krankheitsportraets-astrid-lindgren", label:"Illness Portrait: Astrid Lindgren (SE1w9) – same subtype"},
        {route:"krankheitsportraets-robert-de-niro", label:"Illness Portrait: Robert De Niro (SE1w9) – same subtype"},
        {route:"krankheitsportraets-alain-delon", label:"Illness Portrait: Alain Delon (SE1w2) – same core type, different wing"},
        {route:"krankheitsportraets-arnold-schwarzenegger", label:"Illness Portrait: Arnold Schwarzenegger (SP1w2) – same core type, different wing"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se1", label:"Subtype Profile SE1"},
      ])}
    </div>
  `);
}

export function connieChiuKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-connie-chiu-portrait.jpg" alt="Connie Chiu" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Connie Chiu</p>
        <p class="krim-portrait-typ">SE4w5 · Self-Preservation Type 4 with Five-Wing · born 1969</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Dove</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se4.jpg" alt="Animal correspondence: Dove" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE4")};left:${tierAvatarLeft("SE4")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Connie Chiu</strong> already appears in this Compass as a
        <a href="javascript:void(0)" data-route="beruehmte-connie-chiu">Famous
        Personalities portrait</a> – that page covers her dual career as a model and jazz
        singer. This page looks more closely at the physical foundation of that story:
        congenital albinism, combined with lifelong light sensitivity, an increased risk of
        skin cancer, and impaired vision.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Chiu</strong> is assigned to the <strong>self-preservation Type 4 with
        Five-Wing</strong>. Naranjo called the SE4 the counter-type of the Four: rather than
        putting its own otherness on display, it is persistently downplayed and handled
        practically; the Five-Wing gives it a structured, observing distance from its own
        experience. Exactly this combination – naming the physical difference matter-of-factly
        rather than dramatizing it, and translating it into two parallel careers – shaped how
        she dealt with her own albinism.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) Congenital, the only one of four children:</strong>
        Chiu was born in 1969 in Hong Kong as the only one of four children in her Chinese
        family with albinism – a genetically caused, congenital disorder of melanin
        production.</p>
        <p class="vb-intro"><strong>b) Extreme light sensitivity in Hong Kong's climate:</strong>
        Hong Kong's intense sunlight posed a significant health burden for Chiu because of the
        light and UV sensitivity of skin and eyes associated with albinism.</p>
        <p class="vb-intro"><strong>c) A move to Sweden as a protective health measure:</strong>
        At age seven, the family moved to Sweden – a deliberate, unspectacular decision to
        protect her from Hong Kong's intense sun.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) Lifelong sun protection as a daily necessity:</strong>
        People with albinism carry a significantly elevated risk of skin cancer and depend on
        consistent sun protection – a limitation that shaped Chiu's entire daily life and her
        professional work in front of the camera and on stage.</p>
        <p class="vb-intro"><strong>b) Impaired vision despite a modeling career:</strong>
        Albinism is often accompanied by reduced visual acuity and nystagmus – a limitation
        that stands in striking contrast to a profession that demands visual presence and
        spatial orientation on the runway.</p>
        <p class="vb-intro"><strong>c) Repeated provocation over her appearance:</strong>
        Chiu reported being repeatedly provoked, among other things being called a "white-
        haired devil woman" after a horror-film character.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Minimizing rather than accusing in public statements:</strong>
        Chiu described the provocations with striking matter-of-factness: "I was not bullied
        in school, but every now and then, people try to provoke or upset me" – a statement
        that minimizes rather than accuses.</p>
        <p class="vb-intro"><strong>b) No public reduction to the diagnosis:</strong>
        Chiu never allowed herself to be reduced in interviews to the role of "the first
        albino model," instead consistently pointing to her dual artistic career as a model
        and jazz singer.</p>
        <p class="vb-intro"><strong>c) Analytical rather than emotional reflection on prejudice:</strong>
        Her public statements about reactions to her appearance remain notably analytical:
        "It's in human nature to have prejudice ... I've always preferred to be where many
        different kinds of people mix."</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A pioneering role in the fashion industry:</strong>
        Chiu's debut for Jean Paul Gaultier at age 24 made her the first known model with
        albinism in the international fashion industry – a visibility that reached far beyond
        her own career.</p>
        <p class="vb-intro"><strong>b) A role-model function for others affected:</strong>
        Asked what she would advise a child with albinism, she answered simply: "Believe in
        yourself" – a line since repeatedly quoted in coverage of albinism.</p>
        <p class="vb-intro"><strong>c) A lasting second career as a jazz singer:</strong>
        Alongside her modeling career, Chiu established herself as an independent singer with
        appearances at major events and in jazz clubs – a second, equally ranked artistic
        identity, not merely an addition to the first.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Minimizing instead of dramatizing:</strong>
        The SE4's characteristic counter-type move – not putting one's own otherness on
        display, but persistently downplaying it – shows directly in Chiu's notably
        matter-of-fact language about provocations and her own physical difference.</p>
        <p class="vb-intro"><strong>b) The Five-Wing and the two deliberately built careers:</strong>
        The same structured, observing distance that shapes Chiu's analytical reflection on
        prejudice also shows in the systematic building of two parallel, seriously pursued
        careers rather than one loud act of self-presentation.</p>
        <p class="vb-intro"><strong>c) Quiet acknowledgment instead of a claim to pity:</strong>
        "I think I always knew I was different, but I feel just like everyone else" – a
        statement that neither denies the condition nor makes it the center of her own
        identity, but holds both at once.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Recurring Thread</h3>
        <p class="vb-intro"><strong>a) A profession of being seen, built on limited sight:</strong>
        Chiu's entire first career rested on being seen – on the runway, in front of the
        camera. Of all things, her own eyesight, reduced by albinism, stood in constant
        contrast to that professional demand.</p>
        <p class="vb-intro"><strong>b) A parallel within the same subtype:</strong>
        A parallel shows in
        <a href="javascript:void(0)" data-route="beruehmte-neil-harbisson">Neil Harbisson
        (SE4w5)</a>, who did not hide his own congenital, visible sensory difference –
        complete achromatopsia (total color blindness) – but made it the foundation of an
        independent technological and artistic career. Both SE4w5s show the same pattern: a
        congenital physical difference is neither hidden nor allowed to become the sole
        identity, but translated through persistent, structured work into an independent
        professional path.</p>
        <p class="vb-intro"><strong>c) No stress-point shift, since there is no chronic, progressive crisis:</strong>
        Unlike illness courses marked by worsening decline, Chiu's albinism is a constant,
        non-progressive trait present from birth. A shift along the stress line toward the
        Four's stress point – the Two – cannot be read from her publicly documented life; her
        handling of her own difference has remained remarkably constant across decades.</p>
        <p class="vb-intro"><strong>d) Why the eyes and the skin, of all things?</strong>
        For a self-preservation Four whose first career rested on visual presence in front of
        the camera, one interpretation suggests itself: of all things, the organs central to
        that profession – the eyes for vision, the skin as the body's most visible surface –
        were affected by the congenital condition. This interpretation is a plausible reading,
        not a documented clinical causal link, and will be developed further in this
        Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) A Classification Without Determinism:</strong>
        This does not mean that the self-preservation Four's pattern is linked to albinism or
        comparable congenital conditions – <strong>any person can be born with any congenital
        trait, regardless of subtype.</strong> What Chiu's case shows is a pattern in how a
        congenital, visible physical difference is handled, one that recurs again and again in
        a pronounced self-preservation Four with a Five-Wing – one of many possible readings,
        not a verdict. The corresponding condition will be developed further, over time, in
        this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The Unconscious Fixation as Its Own Factor:</strong>
        Chiu likely does not know her own pattern as an Enneagram structure – the
        self-preservation Four with a Five-Wing reflexively holds onto minimizing and
        analytical distance from its own difference, rather than naming provocations openly
        for what they are. Anyone who does not recognize their own tendency to always minimize
        others' hurtful reactions instead of sometimes naming them directly risks letting
        their own vulnerability remain permanently invisible, even where a clearer boundary
        would be possible and appropriate.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        The self-preservation Type 4 with Five-Wing explains much about how <strong>Connie
        Chiu</strong> handled her own albinism: a woman whose physical difference made others
        stare turned that difference not into a loud accusation, but into the quiet foundation
        of two independent artistic careers. The dove that stays calmest in the brightest
        light.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-connie-chiu", label:"Portrait: Connie Chiu (SE4w5) – life's work"},
        {route:"beruehmte-neil-harbisson", label:"Portrait: Neil Harbisson (SE4w5) – same subtype, also a congenital sensory difference"},
        {route:"krankheitsportraets-virginia-woolf", label:"Illness Portrait: Virginia Woolf (SE4w5) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/se4", label:"Subtype Profile SE4"},
      ])}
    </div>
  `);
}

export function charlesLaughtonKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-charles-laughton-portrait.jpg" alt="Charles Laughton" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Charles Laughton</p>
        <p class="krim-portrait-typ">SP9w8 · Self-Preservation Type 9 with an Eight-Wing · 1899–1962</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Elephant</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/se9.jpg" alt="Animal correspondence: Elephant" loading="lazy" style="position:absolute;top:${tierAvatarTop("SE9")};left:${tierAvatarLeft("SE9")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Charles Laughton</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-charles-laughton">portrait under Famous Personalities</a>
        in this compass – there the focus is on his acting career, his hidden homosexuality, and
        his lifelong shame about his appearance. This page sets all of that aside and looks solely
        at a metastatic kidney and bladder cancer, whose warning signs he folded
        into his daily routine almost imperceptibly for years before the disease turned fatal
        within a few months in 1962.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Laughton</strong> is assigned to the <strong>self-preservation Nine with an
        Eight-wing</strong>. Naranjo called the self-preservation Nine <em>appetite</em>: security
        through habit and physical comfort as a buffer against a deeper inner emptiness. The
        Eight-wing gives this Nine a hidden substance that is barely visible at rest. This exact
        combination of denial through habit and quiet physical resilience shaped how Laughton
        dealt with his own bodily decline.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) A body he avoided his whole life:</strong>
        Decades before his cancer diagnosis, Laughton already had a deeply troubled relationship
        with his own body, which he considered ugly and, by his own account, could barely look at
        in a mirror – a basic stance that made it harder for him to take physical warning signs
        seriously instead of pushing them aside.</p>
        <p class="vb-intro"><strong>b) Visibly declining health as early as the late 1950s:</strong>
        In his 1959 performance as King Lear at the Shakespeare Memorial Theatre in
        Stratford-upon-Avon, Laughton already appeared markedly weakened and exhausted – he still
        saw the physically demanding role through to the end, rather than taking his body's
        warning signs as reason for a thorough examination.</p>
        <p class="vb-intro"><strong>c) A presumed slipped disc in July 1962:</strong>
        Only when he was admitted to Cedars of Lebanon Hospital in July 1962 for severe back pain,
        originally suspected to be a slipped disc, did it emerge that the vertebral collapse was
        actually caused by bone metastases from an already far-advanced kidney and bladder
        cancer.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Characteristics</h3>
        <p class="vb-intro"><strong>a) A disease discovered only through another finding:</strong>
        It wasn't the cancer itself but the presumably more harmless back problem that got
        Laughton to the hospital at all – without the acute pain, the underlying cancer would
        likely have gone undetected for even longer.</p>
        <p class="vb-intro"><strong>b) A months-long hospital stay through November 1962:</strong>
        After his diagnosis, Laughton remained hospitalized until November 1962, when he was
        discharged home – a long, publicly barely commented withdrawal from the life he had
        previously led as an actor and public figure.</p>
        <p class="vb-intro"><strong>c) Dying without full knowledge of his own diagnosis:</strong>
        By accounts from those around him, Laughton did not know with full clarity how serious his
        illness actually was until shortly before his death – a then-common practice of
        withholding the full truth from terminally ill patients, which in Laughton's case met a
        personality that rarely sought out uncomfortable truths about himself in the first place.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Key Traits</h3>
        <p class="vb-intro"><strong>a) Elsa Lanchester as a stabilizing anchor to the end:</strong>
        His wife Elsa Lanchester, to whom he had been connected since 1929 in a marriage built on
        mutual respect rather than romantic passion, stayed at his side until his death and
        organized his care in his final months.</p>
        <p class="vb-intro"><strong>b) Continuing to work despite visible physical exhaustion:</strong>
        Rather than stepping back early, Laughton still took on demanding roles even in the years
        of visibly declining health – a continuation of the same routine that had given him
        stability his whole life, even as his body had long been sending different signals.</p>
        <p class="vb-intro"><strong>c) A coma before death, no conscious farewell:</strong>
        In his final days Laughton fell into a coma from which he never woke – an ending that, in
        a way, also spared him at the last moment the active confrontation with his own dying that
        he had avoided his whole life.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) A sudden end after years of underlying decline:</strong>
        What looked from the outside like a relatively sudden collapse in health in the summer of
        1962 was in reality the result of a disease that had probably developed unnoticed for
        years, while Laughton kept up his usual daily life for as long as possible.</p>
        <p class="vb-intro"><strong>b) Death on December 15, 1962, in Hollywood:</strong>
        Charles Laughton died at age 63 at his home in Hollywood – his ashes were interred at
        Forest Lawn Memorial Park.</p>
        <p class="vb-intro"><strong>c) No public reckoning with his own mortality:</strong>
        Unlike some other illness portraits in this compass, Laughton left no record of a
        conscious struggle with his own death – the illness remained, like his homosexuality,
        largely unspoken.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) The Eight-wing that long compensated for physical pain:</strong>
        The same hidden substance that let Laughton carry his most demanding roles through with
        visibly failing strength probably also delayed his confrontation with his own serious
        illness – strength used to keep going, not to look more closely.</p>
        <p class="vb-intro"><strong>b) Appetite that took refuge in habit rather than concern for the body:</strong>
        The self-preservation Nine seeks peace in the familiar – for Laughton, that meant holding
        onto cooking, art collecting, and his usual work routines while his own body was already
        seriously ill.</p>
        <p class="vb-intro"><strong>c) A death that largely spared him active confrontation:</strong>
        That Laughton did not know the full truth of his diagnosis until the end, and finally died
        in a coma, fits a life pattern that consistently avoided a direct, conscious reckoning
        with uncomfortable truths about himself.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Throughline</h3>
        <p class="vb-intro"><strong>a) A body ignored for years:</strong>
        Laughton's visibly declining health as early as 1959 during his Lear in Stratford, and the
        diagnosis only reached in 1962, by which point it was already far advanced, show the same
        underlying strategy: folding the body's warning signs into the familiar routine for as
        long as possible instead of actively investigating them.</p>
        <p class="vb-intro"><strong>b) The parallel to Laughton's own Life Pattern Compass fingerprint:</strong>
        This exact pattern – inertia as self-forgetting rather than active resistance – already
        appears in his portrait under Famous Personalities: a settling into familiar comfort that
        here extended even into how he handled his own fatal illness.</p>
        <p class="vb-intro"><strong>c) Why exactly a cancer that went undetected for so long?</strong>
        For a self-preservation Nine with an Eight-wing, whose deepest need is to find peace in
        the familiar and to dampen uncomfortable signals both inner and outer, one interpretation
        suggests itself: a disease that develops for a long time without clear warning signs and
        hides behind an apparently more harmless finding met, in Laughton, a man who preferred to
        stay in the familiar rather than look more closely his whole life. This interpretation is
        developed further in this compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>d) Framing without determinism:</strong>
        This does not mean that the self-preservation Nine's pattern inevitably leads to cancer –
        <strong>anyone can get any illness, regardless of subtype.</strong> What Laughton's case
        illustrates is a pattern that repeatedly stands out in practice with deep, habit-based
        denial – one of many possible explanations, not a judgment. The corresponding illness
        profile is being developed step by step in this compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>e) The unconscious fixation as its own factor:</strong>
        Laughton did not know his own Enneagram pattern, and so his Nine's inertia went entirely
        unchecked: instead of seeking a serious medical workup for his
        physical exhaustion early on, he held onto his familiar roles and his familiar daily life
        until his body itself made the decision. Not out of guilt, but out of ignorance about his
        own pattern – and that is exactly why a serious cancer was able to develop unhindered in
        him for years, instead of being caught and treated in time.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Charles Laughton's</strong> illness story shows the self-preservation Nine with an
        Eight-wing at its most vulnerable: a man who avoided his own body his whole life, folded
        its warning signs into his familiar routine for years, and finally died of a disease
        whose full extent, by accounts from those around him, he never fully knew. The elephant
        who preferred not to look too closely at his own mortality either.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-charles-laughton", label:"Portrait: Charles Laughton (SP9w8) – life's work"},
        {route:"krankheitsportraets-margaret-rutherford", label:"Illness Portrait: Margaret Rutherford (SP9w8) – same subtype"},
        {route:"krankheitsportraets-david-hume", label:"Illness Portrait: David Hume (SP9w8) – same subtype"},
        {route:"krankheitsportraets-hans-dietrich-genscher", label:"Illness Portrait: Hans-Dietrich Genscher (SP9w8) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
      ])}
    </div>
  `);
}

export function dmitriHvorostovskyKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-hvorostovsky-portrait.jpg" alt="Dmitri Hvorostovsky" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Hvorostovsky</p>
        <p class="krim-portrait-typ">SO3w2 · Social Type 3 with Two-wing · 1962–2017</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Cheetah</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so3.jpg" alt="Animal correspondence: Cheetah" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO3")};left:${tierAvatarLeft("SO3")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dmitri Hvorostovsky</strong> already has a
        <a href="javascript:void(0)" data-route="beruehmte-dmitri-hvorostovsky">portrait under Famous Personalities</a>
        in this Compass – that page covers his international opera career. This page
        deepens what's only briefly mentioned there: the final two and a half years
        of his life following a glioblastoma diagnosis, an especially aggressive
        brain tumor, and the consistency with which he maintained his public image
        almost to the very end.</p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Hvorostovsky</strong> is classified as the <strong>Social Three with
        Two-wing</strong>. The SO3 measures her worth by publicly visible recognition;
        the Two-wing adds a warmth toward the audience that goes beyond pure ambition.
        This exact combination shaped how he handled his illness: not through
        withdrawal, but through a publicly visible presence maintained almost to the
        end.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First Signs</h3>
        <p class="vb-intro"><strong>a) No documented warning signs before 2015:</strong>
        Unlike many other illness portraits in this Compass, there are no recorded
        health issues in the decades before Hvorostovsky's diagnosis – his voice and
        stage presence were considered flawless right up until shortly before.</p>
        <p class="vb-intro"><strong>b) Diagnosis in June 2015:</strong>
        In June 2015 he was diagnosed with a glioblastoma, a particularly aggressive,
        fast-growing brain tumor. He canceled all performances through August as a
        result.</p>
        <p class="vb-intro"><strong>c) An immediate but clearly bounded public retreat:</strong>
        His first reaction was a clearly limited withdrawal – not an indefinite pause,
        but a cancellation with a fixed end date by which he intended to return to
        the stage.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General Traits</h3>
        <p class="vb-intro"><strong>a) A return to the Met that same year:</strong>
        Already by September 2015 – just three months after the diagnosis – he
        returned to the Metropolitan Opera to sing three performances as Count di
        Luna in "Il trovatore" opposite Anna Netrebko.</p>
        <p class="vb-intro"><strong>b) Publicly confident language:</strong>
        In a widely quoted interview, he reported that his doctors had told him:
        "You won't die." This statement shaped his public communication about his
        illness for months.</p>
        <p class="vb-intro"><strong>c) A continued, active concert schedule in 2016:</strong>
        Despite ongoing treatment, he kept up a reduced but still international
        concert schedule, rather than withdrawing from public life entirely.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential Characteristics</h3>
        <p class="vb-intro"><strong>a) Cancellation of all staged appearances in December 2016:</strong>
        Treatment-related balance problems forced him to cancel all fully staged
        opera performances – a first, clearly visible shift from the big stage to
        smaller, concert-style formats.</p>
        <p class="vb-intro"><strong>b) The unannounced return in May 2017:</strong>
        Despite this limitation, he stepped unannounced onto the Met stage on May 7,
        2017, at the company's 50th-anniversary gala, singing the aria "Cortigiani,
        vil razza dannata" from Verdi's "Rigoletto" before 4,000 spectators.</p>
        <p class="vb-intro"><strong>c) No public farewell to his active career:</strong>
        There was no formal, announced retirement – the performances simply ended
        once his body no longer allowed them, rather than through a deliberate,
        communicated decision.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall Impact</h3>
        <p class="vb-intro"><strong>a) Death on November 22, 2017:</strong>
        Hvorostovsky died at age 55 in London, two and a half years after his
        diagnosis.</p>
        <p class="vb-intro"><strong>b) A career that stayed publicly visible almost to the end:</strong>
        Between diagnosis and death, international performances, concert recordings,
        and media presence continued – the illness never became the sole public
        subject of his final years.</p>
        <p class="vb-intro"><strong>c) Tributes from the international opera world:</strong>
        His death prompted obituaries worldwide that honored not only his vocal
        achievement, but explicitly also the way he had publicly handled his
        illness.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic Effect</h3>
        <p class="vb-intro"><strong>a) Control over one's own image as a coping strategy:</strong>
        For the social Three, illness above all threatens the public image – his
        consistent return to the stage, whenever it was at all possible, can be read
        as an attempt to actively steer that image rather than leave it to the
        course of the disease.</p>
        <p class="vb-intro"><strong>b) The Two-wing as motivation for the audience, not just for himself:</strong>
        His return to the Met never came across as pure defiance, but as a
        deliberate gesture toward an audience he still wanted to give something to –
        warmth and connection remained the stated priority even in the face of
        illness.</p>
        <p class="vb-intro"><strong>c) Confident language as a publicly maintained narrative:</strong>
        The repeatedly quoted "you won't die" also served as a framing story that
        gave audience and colleagues an image of control and confidence, regardless
        of the actual medical course.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The Illness as a Common Thread</h3>
        <p class="vb-intro"><strong>a) An illness that never became the sole public image:</strong>
        Unlike some other figures whose final years became entirely dominated by
        illness, Hvorostovsky's stage presence remained the publicly dominant image
        almost to the very end.</p>
        <p class="vb-intro"><strong>b) Performances as a constant despite the progressing illness:</strong>
        From September 2015 to May 2017, public appearances remained a fixed
        constant – reduced in scope, but never fully given up.</p>
        <p class="vb-intro"><strong>c) One last, deliberately chosen big moment instead of a quiet farewell:</strong>
        The May 2017 Met gala can be read as a final, self-chosen opportunity to
        appear once more in full stage light – not a coincidence, but a carefully
        placed public moment.</p>
        <p class="vb-intro"><strong>d) Why the brain, of all things?</strong>
        For a Social Three with Two-wing, whose entire self-understanding is tied
        to control over her own public image and to immediate connection with the
        audience, one reading suggests itself: a tumor that specifically impairs
        balance and motor control strikes at the very ability to move with poise
        and precision on stage – exactly the instrument through which the Three
        controls her image. This reading is a plausible interpretation, not a
        proven historical causal link, and will be developed further in this
        Compass's Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Framing without determinism:</strong>
        This does not mean the Social Three's pattern inevitably leads to brain
        tumors – <strong>anyone can get any illness, regardless of subtype.</strong>
        Glioblastomas arise independently of personality patterns; the reading
        described here concerns only how the illness was handled, not its cause.
        The corresponding illness pattern is being developed further, piece by
        piece, in this Compass's
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics
        Register</a>.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) The unconscious fixation as its own factor:</strong>
        Hvorostovsky did not know his own Enneagram pattern – the Social Three with
        Two-wing easily mistakes the consistent maintenance of her own image for
        pure love of the art or a sense of duty toward the audience, without
        sufficiently acknowledging her own exhaustion in the process. This exact
        pattern determined him, uncorrected, to the end: a formal farewell to the
        stage that openly named his own vulnerability never took place – instead,
        the career ended the way it began, with the image of the flawless
        performance.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Dmitri Hvorostovsky's</strong> final two and a half years offer a
        study of the Social Three with Two-wing in one of its most striking forms:
        a fatal diagnosis that never became the sole public image, a return to the
        big stage just three months after diagnosis, and one final, self-chosen
        appearance in full stage light. The cheetah who devoted its last sprint not
        to the sickbed, but once more to the stage.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-dmitri-hvorostovsky", label:"Portrait: Dmitri Hvorostovsky (SO3w2) – opera career"},
        {route:"krankheitsportraets-ludwig-xiv", label:"Illness Portrait: Louis XIV (SO3w2) – same subtype"},
        {route:"krankheitsportraets-christiaan-barnard", label:"Illness Portrait: Christiaan Barnard (SO3w2) – same subtype"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so3", label:"Subtype Profile SO3"},
      ])}
    </div>
  `);
}

export function dmitriShostakovichKrankheitsportraetPage() {
  return shell(`
    <div class="page-container">
      ${pageHeader("krankheitsportraets")}
      <button class="ghost-link" data-route="krankheitsportraets" style="margin-bottom:1rem;">&larr; All Illness Portraits</button>
      <div class="krim-portrait-wrap">
        <div class="krim-portrait-frame">
          <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/portraits/beruehmte-dmitri-schostakowitsch-portrait.jpg" alt="Dmitri Shostakovich" class="krim-portrait-img" loading="lazy" />
        </div>
        <p class="krim-portrait-name">Dmitri Shostakovich</p>
        <p class="krim-portrait-typ">SO5w4 &middot; Social Type 5 with Four-wing &middot; 1906–1975</p>
        <p class="krim-portrait-subtitle" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
          <span>Animal correspondence: Octopus</span>
          <span style="position:relative;width:32px;height:32px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px var(--gold);display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/so5.jpg" alt="Animal correspondence: Octopus" loading="lazy" style="position:absolute;top:${tierAvatarTop("SO5")};left:${tierAvatarLeft("SO5")};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
        </p>
      </div>
      <p class="psycho-intro">
        <strong>Dmitri Shostakovich</strong> already appears as a
        <a href="javascript:void(0)" data-route="beruehmte-dmitri-schostakowitsch">portrait under Famous Personalities</a>
        in this compass – that page covers his life's work, the encoded DSCH monogram and a life
        spent between public function and private truth. This portrait focuses on the chapter
        mentioned there only in passing: a nerve disorder of the right hand that progressed over
        more than two decades and was never reliably classified – in a trained pianist –, several
        heart attacks, fractures of both legs, and the lung cancer of a lifelong smoker.
      </p>
      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;margin-bottom:2rem;max-width:100%;">
        <p style="margin:0;font-size:0.95rem;color:var(--ink);"><strong>Type assignment:</strong>
        <strong>Shostakovich</strong> is assigned to the <strong>social Type 5 with Four-wing</strong>.
        The SO5 places knowledge and skill in the service of a larger cause and finds security in
        its own function within a system; the Four-wing shifts the deepest, most personal truth into
        an encoded but unmistakable form. This typing rests on his early and middle years (taking on
        official functions, the monogram code, withdrawal into work), not on the illness picture of
        his late years – see the section on the stress point below.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">1. First signs</h3>
        <p class="vb-intro"><strong>a) A gradual onset in the mid-1950s:</strong>
        According to the medical-historical accounts, the complaints began around 1954 with
        declining physical stamina and occasional falls – with no recognizable clinical picture yet.</p>
        <p class="vb-intro"><strong>b) The right hand becomes unreliable:</strong>
        By 1958 the right hand was markedly weak and accompanied by abnormal sensations (pins and
        needles, known as paresthesias). Heavy objects could no longer be lifted, and even everyday
        actions such as brushing his teeth or hanging his coat on a hook became difficult.</p>
        <p class="vb-intro"><strong>c) Changing diagnoses:</strong>
        In 1965 a Soviet neurologist suggested chronic poliomyelitis (polio or its late effects).
        Other specialists considered a motor neuron disease (progressive loss of the nerve cells
        responsible for movement, such as amyotrophic lateral sclerosis), a purely motor neuropathy
        (nerve damage), syringomyelia (cavity formation in the spinal cord) or a cervical disc
        problem. Before the era of CT and MRI scanning these were hard to tell apart; to this day
        his nerve disorder is regarded as not conclusively diagnosed.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">2. General characteristics</h3>
        <p class="vb-intro"><strong>a) Several fronts at once:</strong>
        The clinical picture was not a single ailment but a combination of nerve disease, heart
        disease, repeated fractures and, in the end, cancer of the lung.</p>
        <p class="vb-intro"><strong>b) Heart attacks:</strong>
        In 1966 he suffered a heart attack that led to a hospital stay of about two months; another
        followed around 1970/71 (sources give differing years), a further one in his last months, and
        according to some accounts a third on the day of his death itself.</p>
        <p class="vb-intro"><strong>c) Falls with fractures:</strong>
        Because of his unsteady gait he fell repeatedly and broke both legs.</p>
        <p class="vb-intro"><strong>d) The journey to Kurgan:</strong>
        In February 1970 he flew to Kurgan in western Siberia, where the orthopedic surgeon Gavriil
        Ilizarov – later known worldwide for the ring fixator named after him, an external frame
        for bone healing and lengthening – treated his hands and feet. Shostakovich reported feeling
        better day by day. The attitude behind this is notable: the body was brought in for technical
        repair, like a defective instrument.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">3. Essential traits</h3>
        <p class="vb-intro"><strong>a) A pianist loses the reliability of his right hand:</strong>
        Shostakovich was a trained concert pianist and took part in the 1927 International Chopin
        Piano Competition in Warsaw, where he received a diploma of honor. That the right hand –
        in piano playing usually the one carrying the melody – grew weak struck him at the very
        point where skill turns directly into sound.</p>
        <p class="vb-intro"><strong>b) Cigarettes and vodka to the end:</strong>
        He smoked heavily for decades, above all papirosi (the long cardboard-tipped cigarettes
        common in the Soviet Union), and drank vodka regularly. Despite his chronic illnesses he
        reportedly never gave up either for good.</p>
        <p class="vb-intro"><strong>c) Constant inner tension:</strong>
        Contemporaries often described him as exceptionally nervous and tense. After the Pravda
        campaign of January 1936 he lived for years expecting arrest in the night (see the
        life's-work portrait) – a decades-long baseline of tension that, by modern understanding,
        does not leave the body untouched.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">4. Overall effect</h3>
        <p class="vb-intro"><strong>a) Composing in hospital:</strong>
        His Symphony No. 14 for soprano, bass, string orchestra and percussion was written in spring
        1969 during a hospital stay: a cycle of eleven settings of poems that all deal with death.</p>
        <p class="vb-intro"><strong>b) The late work as a reckoning:</strong>
        String Quartet No. 15 (1974) consists of six linked slow movements (adagios). His last
        composition, the Sonata for Viola and Piano, Op. 147, was completed on 5 July 1975 – a good
        month before his death. At his deathbed he is said to have still been reading the proofs.</p>
        <p class="vb-intro"><strong>c) Death on 9 August 1975 in Moscow:</strong>
        The cause of death is usually given as lung cancer, attributed to lifelong smoking; some
        accounts additionally name a third heart attack on the day of death. The timing of the cancer
        diagnosis is stated differently across sources – there is no secure, uniform picture here.</p>
      </div>

      <div class="vb-section" style="max-width:100%;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 1rem;color:var(--ink);">5. Energetic effect</h3>
        <p class="vb-intro"><strong>a) The body as a subordinate servant of performance:</strong>
        The social Five, the totem, draws security from the function it fulfils within a system.
        The body easily becomes a mere carrier of the work, demanding as little attention as
        possible – until it takes that attention for itself.</p>
        <p class="vb-intro"><strong>b) The weaker the body, the more open the inner world:</strong>
        In the late works – Symphony No. 14, String Quartet No. 15, the Viola Sonata – the Four-wing
        theme of transience and death emerges more clearly and with less encoding than in the
        decades before. While the outer function crumbled, the private truth became more audible.</p>
        <p class="vb-intro"><strong>c) Numbing as the rhythm of daily life:</strong>
        Cigarettes and vodka can be read as an attempt to dampen constant inner tension without
        changing the way of life itself – a valve that put additional strain on the body.</p>
      </div>

      <div class="vb-section" style="background:color-mix(in srgb, #4a7f91 8%, var(--paper));border:1.5px solid #4a7f91;border-radius:10px;padding:1.3rem 1.4rem;max-width:100%;">
        <h3 style="font-size:1.1rem;font-weight:700;margin:0 0 1rem;color:#2e5a68;">6. The illness as a common thread</h3>
        <p class="vb-intro"><strong>a) The hand as the tool of transmission:</strong>
        For a social Five, significance lies in passing skill on to a community. The hand is the
        most direct tool of that transmission – it plays, writes, notates. That the disorder first
        showed itself exactly there is a striking, though not causally provable, coincidence.</p>
        <p class="vb-intro"><strong>b) Lung and smoke – withdrawal with a haze:</strong>
        Retreat into the den is the octopus's basic pattern. Smoking gave that retreat a kind of
        portable den: a self-made veil of haze that creates distance from the surroundings and
        soothes at the same time. That a lung disease stood at the end is medically sufficiently
        explained by lifelong smoking; reading it as a pattern is an additional, complementary view.</p>
        <p class="vb-intro"><strong>c) The stress point: when the Five slides toward Seven:</strong>
        Anyone living under chronic pressure for decades moves along the stress line increasingly
        toward the stress point – for the Five, that is the Seven. This could be seen in the later
        years: numbing through nicotine and alcohol, nervous restlessness, flight into distraction
        instead of focused withdrawal. The core type remains unchanged SO5w4; the Seven traits are
        signs of stress, not a change of type. Anyone looking only at the illness picture of the
        late years could easily misplace him at the Seven.</p>
        <p class="vb-intro"><strong>d) Why these particular organ systems?</strong>
        A plausible but unproven reading: in the social Five with a Four-wing, the entire tension
        rests on the separation between public function and hidden truth. A life under constant
        observation, beginning in 1936, is a chronic stressor; smoking and chronic tension are
        generally regarded as risk factors for cardiovascular disease. The hand as a tool and the
        lung as the organ of withdrawal would then be two places where the pattern – performance
        through function, soothing through retreat – shows up physically. This is an interpretation,
        not a historically proven causal link, and is elaborated further in this compass's
        Psychosomatics Register.</p>
        <p class="vb-intro"><strong>e) Classification without determinism:</strong>
        This does not mean the pattern of the social Five inevitably leads to nerve disease, heart
        attack or lung cancer – <strong>anyone can get any illness, regardless of subtype.</strong>
        What Shostakovich's case shows is a recurring pattern: security through function, soothing
        through retreat and numbing – one of many possible explanations, not a verdict. The
        corresponding clinical picture is being worked out step by step in the
        <a href="javascript:void(0)" data-route="psychosomatik">Psychosomatics Register</a>
        of this compass.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>f) Unconscious fixation as a factor in its own right:</strong>
        Shostakovich did not know his Enneagram pattern. His life strategy – withdrawal into
        function and code, soothing through smoke and vodka – therefore ran unchecked. The body's
        warning signals, the weak hand from 1958 and the heart attack of 1966, he treated like
        technical faults that can be fixed (Kurgan), not as an invitation to change the pattern
        itself. Someone who does not know that their withdrawal is also tension regulation takes the
        cigarette for a habit rather than a valve. That is not guilt but ignorance of one's own
        pattern.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">7. Parallels within the same subtype</h3>
        <p class="vb-intro"><strong>a) Hannah Arendt – same birth year, same year of death:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-hannah-arendt">Hannah Arendt</a>
        (SO5w4) was born in 1906 like Shostakovich and died in 1975 – in December, four months after
        him. Both were lifelong chain smokers, both suffered heart attacks, and in both smoking
        persisted despite serious heart disease. Arendt merely switched to milder cigarettes after
        her first heart attack; Shostakovich reportedly never gave up cigarettes and vodka for good.
        The difference: Arendt died after a short course, he after two decades of creeping illness.</p>
        <p class="vb-intro"><strong>b) Leonardo da Vinci – the hand that mattered:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-leonardo-da-vinci">Leonardo</a>
        (SO5w4) lost the reliability of his right hand after a stroke, switched to the left and kept
        working. Shostakovich, too, kept working with a weakened right hand into his last weeks. In
        both, the hand does not mark the end of the work but becomes a hurdle that can be gone around.</p>
        <p class="vb-intro" style="margin-bottom:0;"><strong>c) Albert Einstein – work at the deathbed:</strong>
        <a href="javascript:void(0)" data-route="krankheitsportraets-albert-einstein">Einstein</a>
        (SO5w4) worked on equations until his last night; Shostakovich corrected the proofs of his
        last sonata at his deathbed. The pattern of unabated continued work carries across all three cases.</p>
      </div>

      <div class="vb-section" style="background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;max-width:100%;margin-top:2rem;">
        <h3 style="font-size:1.05rem;font-weight:700;margin:0 0 0.75rem;color:var(--ink);">8. Conclusion</h3>
        <p class="vb-intro" style="margin-bottom:0;">
        <strong>Shostakovich's</strong> medical history once again shows the social Five with a
        Four-wing clearly: a hand that grew weaker for the pianist and composer, a body flown to
        Siberia for repair like a defective instrument, smoke and vodka as a portable den, and a
        late work that speaks of death for as long as the strength lasts. The octopus that withdrew
        into its den and kept composing there as long as one hand obeyed.</p>
      </div>

      ${relatedLinks([
        {route:"krankheitsportraets", label:"All Illness Portraits"},
        {route:"beruehmte-dmitri-schostakowitsch", label:"Portrait: Dmitri Shostakovich (SO5w4) – life's work"},
        {route:"krankheitsportraets-hannah-arendt", label:"Illness Portrait: Hannah Arendt (SO5w4) – same birth year, same year of death, smoking"},
        {route:"krankheitsportraets-leonardo-da-vinci", label:"Illness Portrait: Leonardo da Vinci (SO5w4) – right hand, kept working"},
        {route:"krankheitsportraets-albert-einstein", label:"Illness Portrait: Dr. Albert Einstein (SO5w4) – work to the end"},
        {route:"psychosomatik", label:"Psychosomatics Register"},
        {route:"subtype/so5", label:"Subtype profile SO5"},
      ])}
    </div>
  `);
}
